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
import com.narbase.kunafa.core.dimensions.dependent.matchParent
import com.narbase.kunafa.core.dimensions.px
import com.narbase.kunafa.core.drawable.Color
import com.narbase.kunafa.core.lifecycle.LifecycleOwner
import com.narbase.kunafa.core.routing.*

fun main(args: Array<String>) {
    App().setup()
}

class App() {
    val pageViewController = PageViewController()


    fun setup() {
        page {
            verticalLayout {
                style {
                    width = matchParent
                    margin = 32.px.toString()
                }
                verticalLayout {
                    button {
                        text ="Navigate to about"
                        onClick = {
                            Router.navigateTo("/about")
                        }
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

                view {
                    style {
                        backgroundColor = Color("aaa")
                        width = matchParent
                        height = 1.px
                        marginTop = 32.px
                        marginBottom = 32.px
                    }
                }

                route("/", isExact = true) {
                    textView {
                        text = "Home"
                        style {
                            this["width"] = 4.px.toString()
                        }
                    }
                }

                route("/about") {
                    verticalLayout {
                        textView {
                            text = "About"
                        }

                        link("/about/us") {
                            text = "Go to us"
                        }


                        route("/us") {

                            verticalLayout {

                                textView {
                                    text = "Us"
                                }

                                link("/about/us/1") {
                                    text = "Go to 1"
                                }

                                route("/1") {
                                    textView {
                                        text = "1"
                                    }
                                }
                            }


                        }

                        route("/contact") {
                            textView {
                                text = "Us"
                            }
                        }
                    }
                }

                route("/topics") { meta ->
                    verticalLayout {
                        textView {
                            text = "Topics"
                        }

                        verticalLayout {

                            link("${meta.url}/islam") {
                                text = "Islam"
                            }
                            link("${meta.url}/ayman") {
                                text = "Ayman"
                            }
                            link("${meta.url}/ahmed") {
                                text = "Ahmed"
                            }
                        }

                        route("/", isExact = true) {
                            textView {
                                text = "Please select a topic"
                            }
                        }


                        routeComponent("/:topicParam") { meta ->
                            TopicDetailsComponent(meta)
                        }
                    }
                }
            }
        }
    }
}


class TopicDetailsComponent(val meta: RouteMeta) : Component() {

    override fun onViewMounted(lifecycleOwner: LifecycleOwner) {
        meta.params.observe { params ->
            topicNameTextView?.text = params?.get("topicParam") ?: ""

        }
    }

    var topicNameTextView: TextView? = null
    override fun View?.getView() = verticalLayout {
        textView {
            text = "Inside Topic dDetails component"
        }
        topicNameTextView = textView {
        }

    }
}

class App2 {
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
                        link("/rendering") {
                            text = "Rendering with React"
                        }

                        link("/components") {
                            text = "Components"
                        }

                        link("/props-v-state") {
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



