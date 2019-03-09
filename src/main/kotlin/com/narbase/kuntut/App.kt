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

fun main(args: Array<String>) {
    App().setup()
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
                                Router.navigateTo("/movies")
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
                                Router.navigateTo("/games")
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
                            Router.navigateTo(comedyRoute.path)
                        }

                    }
                }
            }
//            mount(PageComponent(PageViewController()))
        }
    }
}



fun View?.link(path: String, block: (Anchor.() -> Unit)? = null) = a {
    href = path
    onClick = {
        it.preventDefault()
        Router.navigateTo(path)
    }
    block?.invoke(this)
}

