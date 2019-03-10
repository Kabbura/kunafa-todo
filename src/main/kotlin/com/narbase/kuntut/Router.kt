package com.narbase.kuntut

import kotlin.browser.window

/**
 * NARBASE TECHNOLOGIES CONFIDENTIAL
 * ______________________________
 * [2017] -[2019] Narbase Technologies
 * All Rights Reserved.
 * Created by islam
 * On: 2019/03/09.
 */

object Router {
    init {
        window.onpopstate = {
            Router.update()
        }
    }
    var currentPath = "/"
    var currentRoute: Route? = null

    private val routes = mutableListOf<Route>()

    private fun update() {
        routes.forEach { route ->
            route.update()
        }
    }

    fun add(route: Route) {
        routes.add(route)
    }


    fun navigateTo(path: String) {
        window.history.pushState(null, "", "/${path.trimStart('/')}")
        Router.update()
    }

}