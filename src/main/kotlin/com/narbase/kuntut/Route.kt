@file:Suppress("MemberVisibilityCanBePrivate")

package com.narbase.kuntut

import com.narbase.kunafa.core.components.*
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
        get() = "/${segments.joinToString("/")}"

    fun update() {
//        console.log("Route pathToMatch: $path, window: ${window.location.pathname}")
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
            .forEachIndexed { index, segment ->
                if ((segment is ParameterSegment).not())
                    return@forEachIndexed
                val s = segment as? ParameterSegment
                val windowSegment = windowSegments[index].text
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

    companion object {
        fun createRoute(
            parentView: View,
            path: String,
            isExact: Boolean = false,
            isAbsolute: Boolean = false,
            block: (meta: RouteMeta) -> Component
        ): Route {
            val oldPath = Router.currentPath
            val routePath = getPath(path, isAbsolute)

            Router.currentPath = routePath
            val routeSegments = getSegments(Router.currentPath)
            val parentRoute = Router.currentRoute

            val reference = parentView.view { isVisible = false }
            val meta = RouteMeta(Router.currentPath, Observable())
            val component = block(meta)
            val route = Route(meta, routeSegments, component, parentRoute, parentView, reference, isExact)
            if (parentRoute == null) {
                Router.add(route)
            } else {
                parentRoute.add(route)
            }
            route.update()
            Router.currentPath = oldPath
            return route
        }

        fun getPath(path: String, isAbsolute: Boolean): String {
            val trimmedCurrentPath = Router.currentPath.trim('/')
            return when {
                isAbsolute || trimmedCurrentPath.isBlank() -> "/${path.trim('/')}"
                else -> "/$trimmedCurrentPath/${path.trim('/')}"
            }
        }

    }
}

fun View.route(
    path: String,
    isExact: Boolean = false,
    isAbsolute: Boolean = false,
    block: View?.(meta: RouteMeta) -> View
) = routeComponent(path, isExact, isAbsolute) { meta -> getComponent(meta, block) }

fun View.routeComponent(
    path: String,
    isExact: Boolean = false,
    isAbsolute: Boolean = false,
    block: (meta: RouteMeta) -> Component
): Route = Route.createRoute(this, path, isExact, isAbsolute, block)


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

open class RouteSegment(val text: String) {
    open fun matches(route: RouteSegment?) = text == route?.text
    override fun toString() = text
}

class ParameterSegment(text: String) : RouteSegment(text) {
    override fun matches(route: RouteSegment?) = route != null
    override fun toString() = ":$text"
}

class RouteMeta(val url: String, val params: Observable<Map<String, String>>)

fun View?.link(path: String, block: (Anchor.() -> Unit)? = null) = a {
    val completePath = Route.getPath(path, isAbsolute = true)
    href = completePath
    onClick = {
        it.preventDefault()
        Router.navigateTo(completePath)
    }
    block?.invoke(this)
}
