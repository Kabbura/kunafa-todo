package com.narbase.kuntut

import com.narbase.kunafa.core.components.*
import com.narbase.kunafa.core.css.*
import com.narbase.kunafa.core.dimensions.dependent.matchParent
import com.narbase.kunafa.core.drawable.Color
import com.narbase.kunafa.core.lifecycle.LifecycleOwner
import com.narbase.kunafa.core.lifecycle.Observable

/**
 * NARBASE TECHNOLOGIES CONFIDENTIAL
 * ______________________________
 * [2017] -[2019] Narbase Technologies
 * All Rights Reserved.
 * Created by islam
 * On: 2019/03/09.
 */


class DashboardPage(private val pageViewController: PageViewController) : Component() {
    override fun View?.getView(): View {
        return verticalLayout {
            style {
                alignItems = Alignment.Center
                justifyContent = JustifyContent.Center
            }

            textView {
                text = "Dashboard page"
                style {
                    color = Color.red
                }
            }
            button {
                text = "Logout"
                onClick = { pageViewController.logout() }
            }

        }
    }
}

class PageComponent(private val pageViewController: PageViewController) : Component() {

    private var rootView: View? = null
    private val dashboardPaga = DashboardPage(pageViewController)
    private val loginPage = LoginComponent(LoginPageViewController(pageViewController))

    override fun onViewMounted(lifecycleOwner: LifecycleOwner) {
        console.log(("PageComponent onViewMounted"))
        pageViewController.isLoggedIn.observe { isLoggedIn ->
            console.log(("isLoggedIn observer"))
            rootView?.clearAllChildren()
            if (isLoggedIn == true) {
                rootView?.mount(dashboardPaga)
            } else {
                rootView?.mount(loginPage)
            }
        }

        pageViewController.initializeLoginState()
    }

    override fun View?.getView() = verticalLayout {
        style {
            width = matchParent
            height = matchParent
        }

        rootView = verticalLayout {

            style {
                width = matchParent
                height = matchParent
                alignItems = Alignment.Center
                justifyContent = JustifyContent.Center
            }
        }

    }

}


class PageViewController {
    val isLoggedIn = Observable<Boolean>()

    fun initializeLoginState() {
        isLoggedIn.value = false
    }

    fun onLoggedInSuccessfully() {
        isLoggedIn.value = true
    }

    fun logout() {
        isLoggedIn.value = false
    }

}

class LoginPageViewController(private val pageViewController: PageViewController) {

    val errorMessage = Observable<String>()

    fun initialize() {
        errorMessage.value = ""
    }

    fun doLogin(email: String, password: String) {
        if (email == "e" && password == "p") {
            pageViewController.onLoggedInSuccessfully()
        } else {
            errorMessage.value = "Wrong email or password"
        }
    }
}


class LoginComponent(
    private val loginPageViewController: LoginPageViewController
) : Component() {

    override fun onViewMounted(lifecycleOwner: LifecycleOwner) {
        loginPageViewController.initialize()
        setupObservers()
    }

    private var errorTextView: TextView? = null
    private var emailTextWithLabel: TextWithLabelComponent? = null
    private var passwordTextWithLabel: TextWithLabelComponent? = null
    private fun setupObservers() {
        loginPageViewController.errorMessage.observe { message ->
            if (message == null) {
                errorTextView?.text = ""
            } else {
                errorTextView?.text = message
            }
        }
    }

    override fun View?.getView() = verticalLayout {
        style {
            alignItems = Alignment.Center
            justifyContent = JustifyContent.Center
        }


        textView {
            text = "Login page"
            style {
                color = Color.blue
            }

        }

        emailTextWithLabel = mount(TextWithLabelComponent("Email"))
        passwordTextWithLabel = mount(TextWithLabelComponent("Password"))

//        textInputPrompt()

        errorTextView = textView {
            style {
                color = Color.red
            }
        }

        button {
            text = "Login"
            onClick = {
                loginPageViewController.doLogin(
                    emailTextWithLabel?.textInput?.text ?: "",
                    passwordTextWithLabel?.textInput?.text ?: ""
                )
            }
        }
    }
}

class TextWithLabelComponent(val name: String) : Component() {

    var textInput: TextInput? = null
    override fun View?.getView(): View {
        textView {
            text = "Hahaaha"
        }
        return horizontalLayout {
            textView {
                text = "Enter $name"
            }
            textInput = textInput {
                placeholder = name
            }
        }
    }
}
