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
                verticalLayout {
                    style {
                        margin = 8.px.toString()
                        padding = 8.px.toString()
                    }
                    link("/") {
                        text = "Home"
                    }

                    link("/about") {
                        text = "About"
                    }

                    link("/topics") {
                        text = "Topics"
                    }


                }
                route("/", isExact = true) {
                    verticalLayout {
                        textView {
                            text = "Home"
                        }
                        style {
                            borderRadius = 4.px.toString()
                            border = "1px solid #d4d4d4"
                            margin = 8.px.toString()
                            padding = 8.px.toString()
                        }
                    }
                }

                route("/about") {
                    verticalLayout {
                        style {
                            borderRadius = 4.px.toString()
                            border = "1px solid #d4d4d4"
                            margin = 8.px.toString()
                            padding = 8.px.toString()
                        }
                        textView {
                            text = "About"

                        }
                    }
                }

                route("/topics") { meta ->
                    verticalLayout {
                        style {
                            borderRadius = 4.px.toString()
                            border = "1px solid #d4d4d4"
                            margin = 8.px.toString()
                            padding = 8.px.toString()
                        }
                        textView {
                            text = "Topics"
                        }
                        link("${meta.url}/rendering") {
                            text = "Rendering with React"
                        }

                        link("${meta.url}/components") {
                            text = "Components"
                        }

                        link("${meta.url}/props-v-state") {
                            text = "Props v. State"
                        }

                        route("/:topic") { meta ->
                            verticalLayout {
                                style {
                                    borderRadius = 4.px.toString()
                                    border = "1px solid #d4d4d4"
                                    margin = 8.px.toString()
                                    padding = 8.px.toString()
                                }
                                val text = textView {

                                }

                                meta.params.observe { params ->
                                    text.text = params?.getOrElse("topic") { "No value" } ?: "No value"
                                }
                            }
                        }
                        route("/", isExact = true) {
                            textView {
                                text = "Please select a topic"
                            }

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

