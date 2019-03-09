@file:Suppress("MemberVisibilityCanBePrivate")

package com.narbase.kuntut

import com.narbase.kunafa.core.components.Component
import com.narbase.kunafa.core.components.View
import com.narbase.kunafa.core.components.view
import com.narbase.kunafa.core.lifecycle.Observable
import kotlin.browser.window

/**
 * NARBASE TECHNOLOGIES CONFIDENTIAL
 * ______________________________
 * [2017] -[2019] Narbase Technologies
 * All Rights Reserved.
 * Created by islam
 * On: 2019/03/09.
 */

class Route(
    private val meta: RouteMeta,
    private val segments: List<RouteSegment>,
    private val component: Component,
    private val parentRoute: Route?,
    private val parentView: View?,
    private val referenceView: View,
    val isExact: Boolean
) {

    private val children = mutableListOf<Route>()

    val path
        get() = "/${segments.joinToString("/", transform = { it.text })}"

    fun update() {
        console.log("Route pathToMatch: $path, window: ${window.location.pathname}")
        val windowSegments = getSegments(window.location.pathname)
        if (doesMatch(windowSegments)) {
            Router.currentRoute = this
            parentView?.mountAfter(component, referenceView)
            updatePathParams(windowSegments)
            children.forEach {
                // console.log("of $path: ${it.path}")
                it.update()
            }
            Router.currentRoute = parentRoute
        } else {
            parentView?.unMount(component)
        }
    }

    private fun updatePathParams(windowSegments: List<RouteSegment>) {
        val params = mutableMapOf<String, String>()
        segments
            .forEachIndexed {  index, segment ->
                if ((segment is ParameterSegment).not())
                    return@forEachIndexed
                val s = segment as? ParameterSegment
                console.log("ParameterSegment: ${s?.text}")
                val windowSegment =  windowSegments[index].text
                params[s?.text ?: ""] = windowSegment
            }
        if (params.isNotEmpty()) {
            meta.params.value = params
        }
    }

    fun add(route: Route) {
        children.add(route)
    }

    private fun doesMatch(windowSegments: List<RouteSegment>): Boolean {
        when {
            isExact -> if (segments.size != windowSegments.size) return false
            else -> if (segments.size > windowSegments.size) return false
        }
        segments.forEachIndexed { index, segment ->
            if (segment.matches(windowSegments.getOrNull(index)).not())
                return false
        }
        return true
    }
}

fun View?.route(path: String, isExact: Boolean = false, block: View?.(meta: RouteMeta) -> View): Route {

    // Valid path: /path/to/something or /
    // Slash at the beginning only not the end
    val oldPath = Router.currentPath
    Router.currentPath = "/${Router.currentPath.trim('/')}/${path.trim('/')}"
    val routeSegments = getSegments(Router.currentPath)
    val parentRoute = Router.currentRoute

    val reference = view { isVisible = false }
    val meta = RouteMeta(Router.currentPath, Observable())
    val component = getComponent(meta, block)
    val route = Route(meta, routeSegments, component, parentRoute, this, reference, isExact)
    if (parentRoute == null) {
        Router.add(route)
    } else {
        parentRoute.add(route)
    }
    route.update()
    Router.currentPath = oldPath
    return route
}

fun getSegments(currentPath: String): List<RouteSegment> {
    val stringSegments = currentPath.split('/').filter { it.isNotBlank() }
    return stringSegments.map {
        if (it.startsWith(":")) {
            ParameterSegment(it.trim(':'))
        } else {
            RouteSegment(it)
        }
    }
}

fun getComponent(meta: RouteMeta, block: View?.(meta: RouteMeta) -> View): Component = object : Component() {
    override fun View?.getView() = block(meta)
}

open class RouteSegment(
    val text: String
) {
    open fun matches(route: RouteSegment?) = text == route?.text
}

class ParameterSegment(text: String) : RouteSegment(text) {
    var param: String? = null
    override fun matches(route: RouteSegment?) = route != null
}

class RouteMeta(
    val url: String,
    val params: Observable<Map<String, String>>
)
