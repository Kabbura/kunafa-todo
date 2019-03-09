package com.narbase.kuntut

/**
 * NARBASE TECHNOLOGIES CONFIDENTIAL
 * ______________________________
 * [2017] -[2019] Narbase Technologies
 * All Rights Reserved.
 * Created by islam
 * On: 2019/03/05.
 */

import com.narbase.kunafa.core.components.*
import com.narbase.kunafa.core.css.*
import com.narbase.kunafa.core.dimensions.px
import kotlin.browser.window

fun main(args: Array<String>) {
    App().setup()
    window.onpopstate = {
        routes.forEach { route -> route.update() }
    }
}

class App {
    fun setup() {
        page {
            id = "page"

            verticalLayout {
                style {
                    borderRadius = 4.px.toString()
                    border = "1px solid #d4d4d4"
                    margin = 8.px.toString()
                    padding = 8.px.toString()
                }

                textView {
                    text = "Root view matches /"
                }

                horizontalLayout {

                    link("/movies") {
                        text = "Go to movies"
                    }
                    view {
                        style {
                            width = 20.px
                        }
                    }
                    link("/games") {
                        text = "Go to games"
                    }
                }

                route("/games") {
                    verticalLayout {
                        textView {
                            text = "Games view matches /games"
                        }
                        style {
                            borderRadius = 4.px.toString()
                            border = "1px solid #d4d4d4"
                            margin = 8.px.toString()
                            padding = 8.px.toString()
                        }

                        button {
                            text = "Go to movies"
                            onClick = {
                                navigateTo("/movies")
                            }
                        }
                    }
                }

                route("/movies") {

                    verticalLayout {
                        style {
                            borderRadius = 4.px.toString()
                            border = "1px solid #d4d4d4"
                            margin = 8.px.toString()
                            padding = 8.px.toString()
                        }
                        textView {
                            text = "Movies view matches /movies"

                        }
                        button {
                            text = "Go to games"
                            onClick = {
                                navigateTo("/games")
                            }
                        }

                        val comedyButton = button {
                            text = "Comedy"
                        }

                        val comedyRoute = route("/comedy") {

                            verticalLayout {
                                style {
                                    borderRadius = 4.px.toString()
                                    border = "1px solid #d4d4d4"
                                    margin = 8.px.toString()
                                    padding = 8.px.toString()
                                }
                                textView {
                                    text = "Comedy movies view matches /movies/comedy"

                                }
                            }
                        }

                        comedyButton.onClick = {
                            console.log("")
                            navigateTo(comedyRoute.path)
                        }

                    }
                }
            }
//            mount(PageComponent(PageViewController()))
        }
    }

}

fun navigateTo(path: String) {
    window.history.pushState(null, "", "/${path.trimStart('/')}")
    routes.forEach { it.update() }
}


var currentPath = "/"
fun View?.route(path: String, block: View?.() -> View): Route {
    return route(path, getComponent(block))
}

fun View?.route(path: String, component: Component): Route {
    val oldPath = currentPath
    currentPath = "$currentPath$path".trim('/')

    val reference = view { isVisible = false }
    val route = Route(currentPath, component, this, reference)
    routes.add(route)
    route.update()
    currentPath = oldPath
    return route
}

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

val routes = mutableListOf<Route>()

fun getComponent(block: View?.() -> View): Component = object : Component() {
    override fun View?.getView() = block()
}


fun View?.link(path: String, block: (Anchor.() -> Unit)? = null) = a {
    href = path
    onClick = {
        it.preventDefault()
        navigateTo(path)
    }
    block?.invoke(this)
}