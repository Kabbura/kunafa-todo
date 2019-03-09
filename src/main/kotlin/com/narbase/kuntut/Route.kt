package com.narbase.kuntut

import com.narbase.kunafa.core.components.Component
import com.narbase.kunafa.core.components.View
import com.narbase.kunafa.core.components.view
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
    val path: String,
    private val component: Component,
    private val parentRoute: Route?,
    private val parentView: View?,
    private val referenceView: View
) {

    private val children = mutableListOf<Route>()
    fun update() {
//        console.log("currentPath: $path, pathToMatch: $path, window: ${window.location.pathname}")
        if (window.location.pathname.trim('/').startsWith(path)) {
            Router.currentRoute = this
            parentView?.mountAfter(component, referenceView)
            children.forEach {
//                console.log("of $path: ${it.path}")
                it.update()
            }
            Router.currentRoute = parentRoute
        } else {
            parentView?.unMount(component)
        }
    }
    fun add(route: Route) {
        children.add(route)
    }

}


fun View?.route(path: String, block: View?.() -> View): Route {
    return route(path, getComponent(block))
}

fun View?.route(path: String, component: Component): Route {
    val oldPath = Router.currentPath
    Router.currentPath = "${Router.currentPath}$path".trim('/')
    val parentRoute = Router.currentRoute

    val reference = view { isVisible = false }
    val route = Route(Router.currentPath, component, parentRoute, this, reference)
    if (parentRoute == null) {
        Router.add(route)
    } else {
        parentRoute.add(route)
    }
    route.update()
    Router.currentPath = oldPath
    return route
}


fun getComponent(block: View?.() -> View): Component = object : Component() {
    override fun View?.getView() = block()
}
