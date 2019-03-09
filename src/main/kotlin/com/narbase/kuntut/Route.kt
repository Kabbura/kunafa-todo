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
    private val parent: View?,
    private val referenceView: View
) {

    //    val children = mutableListOf<Route>()
    fun update() {
//        console.log("currentPath: $path, pathToMatch: $path, window: ${window.location.pathname}")
        if (window.location.pathname.trim('/').startsWith(path)) {
            parent?.mountAfter(component, referenceView)
//            children.forEach { it.update() }
        } else {
            parent?.unMount(component)
        }
    }
}



fun View?.route(path: String, block: View?.() -> View): Route {
    return route(path, getComponent(block))
}

fun View?.route(path: String, component: Component): Route {
    val oldPath = Router.currentPath
    Router.currentPath = "${Router.currentPath}$path".trim('/')

    val reference = view { isVisible = false }
    val route = Route(Router.currentPath, component, this, reference)
    Router.add(route)
    route.update()
    Router.currentPath = oldPath
    return route
}


fun getComponent(block: View?.() -> View): Component = object : Component() {
    override fun View?.getView() = block()
}
