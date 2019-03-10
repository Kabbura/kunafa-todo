if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kunafa_main'.");
}
if (typeof kunafa === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kunafa' was not found. Please, check whether 'kunafa' is loaded prior to 'kunafa_main'.");
}
var kunafa_main = function (_, Kotlin, $module$kunafa) {
  'use strict';
  var get_px = $module$kunafa.com.narbase.kunafa.core.dimensions.get_px_rcaex3$;
  var set_padding = $module$kunafa.com.narbase.kunafa.core.css.set_padding_la1i9z$;
  var Unit = Kotlin.kotlin.Unit;
  var verticalLayout = $module$kunafa.com.narbase.kunafa.core.components.verticalLayout_te8a6c$;
  var set_borderRadius = $module$kunafa.com.narbase.kunafa.core.css.set_borderRadius_la1i9z$;
  var set_border = $module$kunafa.com.narbase.kunafa.core.css.set_border_la1i9z$;
  var set_margin = $module$kunafa.com.narbase.kunafa.core.css.set_margin_la1i9z$;
  var textView = $module$kunafa.com.narbase.kunafa.core.components.textView_k17fs7$;
  var page = $module$kunafa.com.narbase.kunafa.core.components.page_6bmerh$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Alignment = $module$kunafa.com.narbase.kunafa.core.css.Alignment;
  var set_alignItems = $module$kunafa.com.narbase.kunafa.core.css.set_alignItems_68dtfh$;
  var JustifyContent = $module$kunafa.com.narbase.kunafa.core.css.JustifyContent;
  var set_justifyContent = $module$kunafa.com.narbase.kunafa.core.css.set_justifyContent_c3ey27$;
  var Color = $module$kunafa.com.narbase.kunafa.core.drawable.Color;
  var set_color = $module$kunafa.com.narbase.kunafa.core.css.set_color_ntmvhs$;
  var button = $module$kunafa.com.narbase.kunafa.core.components.button_4mjb1e$;
  var Component = $module$kunafa.com.narbase.kunafa.core.components.Component;
  var get_matchParent = $module$kunafa.com.narbase.kunafa.core.dimensions.dependent.get_matchParent_kn5s8$;
  var set_width = $module$kunafa.com.narbase.kunafa.core.css.set_width_c3qti6$;
  var set_height = $module$kunafa.com.narbase.kunafa.core.css.set_height_c3qti6$;
  var Observable = $module$kunafa.com.narbase.kunafa.core.lifecycle.Observable;
  var equals = Kotlin.equals;
  var textInput = $module$kunafa.com.narbase.kunafa.core.components.textInput_b3mkdq$;
  var horizontalLayout = $module$kunafa.com.narbase.kunafa.core.components.horizontalLayout_te8a6c$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var view = $module$kunafa.com.narbase.kunafa.core.components.view_yfyifg$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var a = $module$kunafa.com.narbase.kunafa.core.components.a_i4874s$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  DashboardPage.prototype = Object.create(Component.prototype);
  DashboardPage.prototype.constructor = DashboardPage;
  PageComponent.prototype = Object.create(Component.prototype);
  PageComponent.prototype.constructor = PageComponent;
  LoginComponent.prototype = Object.create(Component.prototype);
  LoginComponent.prototype.constructor = LoginComponent;
  TextWithLabelComponent.prototype = Object.create(Component.prototype);
  TextWithLabelComponent.prototype.constructor = TextWithLabelComponent;
  getComponent$ObjectLiteral.prototype = Object.create(Component.prototype);
  getComponent$ObjectLiteral.prototype.constructor = getComponent$ObjectLiteral;
  ParameterSegment.prototype = Object.create(RouteSegment.prototype);
  ParameterSegment.prototype.constructor = ParameterSegment;
  function main(args) {
    (new App()).setup();
  }
  function App() {
  }
  function App$setup$lambda$lambda$lambda($receiver) {
    set_padding($receiver, get_px(16).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Home';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_0($receiver) {
    link($receiver, '/', void 0, App$setup$lambda$lambda$lambda$lambda);
    link($receiver, '/about', void 0, App$setup$lambda$lambda$lambda$lambda_0);
    link($receiver, '/topics', void 0, App$setup$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Home';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_1($receiver, it) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_2);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda_1);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_2($receiver, it) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_3);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.text = 'Rendering with React';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text = 'Components';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.text = 'Props v. State';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Please select a topic';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_8($receiver, it) {
    return textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$myTextView) {
    return function (params) {
      var tmp$;
      closure$myTextView.text = (tmp$ = params != null ? params.get_11rb$('topicName') : null) != null ? tmp$ : 'No value';
      return Unit;
    };
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_9($receiver, meta) {
    var myTextView = textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0);
    meta.params.observe_qlkmfe$(App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1(myTextView));
    return myTextView;
  }
  function App$setup$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda_3);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_4);
    link($receiver, '/rendering', void 0, App$setup$lambda$lambda$lambda$lambda$lambda_5);
    link($receiver, '/components', void 0, App$setup$lambda$lambda$lambda$lambda$lambda_6);
    link($receiver, '/props-v-state', void 0, App$setup$lambda$lambda$lambda$lambda$lambda_7);
    route($receiver, '/', true, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_8);
    route($receiver, '/:topicName', void 0, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_3($receiver, it) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_4);
  }
  function App$setup$lambda$lambda($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda);
    verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda_0);
    route($receiver, '/', true, void 0, App$setup$lambda$lambda$lambda_1);
    route($receiver, '/about', void 0, void 0, App$setup$lambda$lambda$lambda_2);
    route($receiver, '/topics', void 0, void 0, App$setup$lambda$lambda$lambda_3);
    return Unit;
  }
  function App$setup$lambda($receiver) {
    verticalLayout($receiver, void 0, App$setup$lambda$lambda);
    return Unit;
  }
  App.prototype.setup = function () {
    page(void 0, App$setup$lambda);
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function App2() {
  }
  function App2$setup$lambda$lambda$lambda$lambda($receiver) {
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Home';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda($receiver) {
    $receiver.style_cjs1gm$(App2$setup$lambda$lambda$lambda$lambda);
    link($receiver, '/', void 0, App2$setup$lambda$lambda$lambda$lambda_0);
    link($receiver, '/about', void 0, App2$setup$lambda$lambda$lambda$lambda_1);
    link($receiver, '/topics', void 0, App2$setup$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Home';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda_3($receiver) {
    textView($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda);
    $receiver.style_cjs1gm$(App2$setup$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda_0($receiver, it) {
    return verticalLayout($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda_3);
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.style_cjs1gm$(App2$setup$lambda$lambda$lambda$lambda$lambda_1);
    textView($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda_1($receiver, it) {
    return verticalLayout($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda_4);
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.text = 'Rendering with React';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text = 'Components';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.text = 'Props v. State';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$text) {
    return function (params) {
      var tmp$;
      var tmp$_0 = closure$text;
      var tmp$_1;
      if (params != null) {
        var tmp$_2;
        tmp$_1 = (tmp$_2 = params.get_11rb$('topic')) != null ? tmp$_2 : 'No value';
      }
       else
        tmp$_1 = null;
      tmp$_0.text = (tmp$ = tmp$_1) != null ? tmp$ : 'No value';
      return Unit;
    };
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda$lambda(closure$meta) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      var text = textView($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      closure$meta.params.observe_qlkmfe$(App2$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(text));
      return Unit;
    };
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_8($receiver, meta) {
    return verticalLayout($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda$lambda(meta));
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Please select a topic';
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda$lambda$lambda_9($receiver, it) {
    return textView($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function App2$setup$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.style_cjs1gm$(App2$setup$lambda$lambda$lambda$lambda$lambda_3);
    textView($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_4);
    link($receiver, '/rendering', void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_5);
    link($receiver, '/components', void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_6);
    link($receiver, '/props-v-state', void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_7);
    route($receiver, '/:topic', void 0, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_8);
    route($receiver, '/', true, void 0, App2$setup$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function App2$setup$lambda$lambda$lambda_2($receiver, meta) {
    return verticalLayout($receiver, void 0, App2$setup$lambda$lambda$lambda$lambda_5);
  }
  function App2$setup$lambda$lambda($receiver) {
    verticalLayout($receiver, void 0, App2$setup$lambda$lambda$lambda);
    route($receiver, '/', true, void 0, App2$setup$lambda$lambda$lambda_0);
    route($receiver, '/about', void 0, void 0, App2$setup$lambda$lambda$lambda_1);
    route($receiver, '/topics', void 0, void 0, App2$setup$lambda$lambda$lambda_2);
    return Unit;
  }
  function App2$setup$lambda($receiver) {
    $receiver.id = 'page';
    verticalLayout($receiver, void 0, App2$setup$lambda$lambda);
    return Unit;
  }
  App2.prototype.setup = function () {
    page(void 0, App2$setup$lambda);
  };
  App2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App2',
    interfaces: []
  };
  function DashboardPage(pageViewController) {
    Component.call(this);
    this.pageViewController_0 = pageViewController;
  }
  function DashboardPage$getView$lambda$lambda($receiver) {
    set_alignItems($receiver, Alignment.Companion.Center);
    set_justifyContent($receiver, JustifyContent.Companion.Center);
    return Unit;
  }
  function DashboardPage$getView$lambda$lambda$lambda($receiver) {
    set_color($receiver, Color.Companion.red);
    return Unit;
  }
  function DashboardPage$getView$lambda$lambda_0($receiver) {
    $receiver.text = 'Dashboard page';
    $receiver.style_cjs1gm$(DashboardPage$getView$lambda$lambda$lambda);
    return Unit;
  }
  function DashboardPage$getView$lambda$lambda$lambda_0(this$DashboardPage) {
    return function (it) {
      this$DashboardPage.pageViewController_0.logout();
      return Unit;
    };
  }
  function DashboardPage$getView$lambda$lambda_1(this$DashboardPage) {
    return function ($receiver) {
      $receiver.text = 'Logout';
      $receiver.onClick = DashboardPage$getView$lambda$lambda$lambda_0(this$DashboardPage);
      return Unit;
    };
  }
  function DashboardPage$getView$lambda(this$DashboardPage) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(DashboardPage$getView$lambda$lambda);
      textView($receiver, void 0, DashboardPage$getView$lambda$lambda_0);
      button($receiver, void 0, DashboardPage$getView$lambda$lambda_1(this$DashboardPage));
      return Unit;
    };
  }
  DashboardPage.prototype.getView_art3zr$ = function ($receiver) {
    return verticalLayout($receiver, void 0, DashboardPage$getView$lambda(this));
  };
  DashboardPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DashboardPage',
    interfaces: [Component]
  };
  function PageComponent(pageViewController) {
    Component.call(this);
    this.pageViewController_0 = pageViewController;
    this.rootView_0 = null;
    this.dashboardPaga_0 = new DashboardPage(this.pageViewController_0);
    this.loginPage_0 = new LoginComponent(new LoginPageViewController(this.pageViewController_0));
  }
  function PageComponent$onViewMounted$lambda(this$PageComponent) {
    return function (isLoggedIn) {
      var tmp$, tmp$_0, tmp$_1;
      console.log('isLoggedIn observer');
      (tmp$ = this$PageComponent.rootView_0) != null ? (tmp$.clearAllChildren(), Unit) : null;
      if (isLoggedIn === true) {
        (tmp$_0 = this$PageComponent.rootView_0) != null ? tmp$_0.mount_7bau7r$(this$PageComponent.dashboardPaga_0) : null;
      }
       else {
        (tmp$_1 = this$PageComponent.rootView_0) != null ? tmp$_1.mount_7bau7r$(this$PageComponent.loginPage_0) : null;
      }
      return Unit;
    };
  }
  PageComponent.prototype.onViewMounted_1xffwv$ = function (lifecycleOwner) {
    console.log('PageComponent onViewMounted');
    this.pageViewController_0.isLoggedIn.observe_qlkmfe$(PageComponent$onViewMounted$lambda(this));
    this.pageViewController_0.initializeLoginState();
  };
  function PageComponent$getView$lambda$lambda($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_height($receiver, get_matchParent($receiver));
    return Unit;
  }
  function PageComponent$getView$lambda$lambda$lambda($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_height($receiver, get_matchParent($receiver));
    set_alignItems($receiver, Alignment.Companion.Center);
    set_justifyContent($receiver, JustifyContent.Companion.Center);
    return Unit;
  }
  function PageComponent$getView$lambda$lambda_0($receiver) {
    $receiver.style_cjs1gm$(PageComponent$getView$lambda$lambda$lambda);
    return Unit;
  }
  function PageComponent$getView$lambda(this$PageComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(PageComponent$getView$lambda$lambda);
      this$PageComponent.rootView_0 = verticalLayout($receiver, void 0, PageComponent$getView$lambda$lambda_0);
      return Unit;
    };
  }
  PageComponent.prototype.getView_art3zr$ = function ($receiver) {
    return verticalLayout($receiver, void 0, PageComponent$getView$lambda(this));
  };
  PageComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageComponent',
    interfaces: [Component]
  };
  function PageViewController() {
    this.isLoggedIn = new Observable();
  }
  PageViewController.prototype.initializeLoginState = function () {
    this.isLoggedIn.value = false;
  };
  PageViewController.prototype.onLoggedInSuccessfully = function () {
    this.isLoggedIn.value = true;
  };
  PageViewController.prototype.logout = function () {
    this.isLoggedIn.value = false;
  };
  PageViewController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageViewController',
    interfaces: []
  };
  function LoginPageViewController(pageViewController) {
    this.pageViewController_0 = pageViewController;
    this.errorMessage = new Observable();
  }
  LoginPageViewController.prototype.initialize = function () {
    this.errorMessage.value = '';
  };
  LoginPageViewController.prototype.doLogin_puj7f4$ = function (email, password) {
    if (equals(email, 'e') && equals(password, 'p')) {
      this.pageViewController_0.onLoggedInSuccessfully();
    }
     else {
      this.errorMessage.value = 'Wrong email or password';
    }
  };
  LoginPageViewController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginPageViewController',
    interfaces: []
  };
  function LoginComponent(loginPageViewController) {
    Component.call(this);
    this.loginPageViewController_0 = loginPageViewController;
    this.errorTextView_0 = null;
    this.emailTextWithLabel_0 = null;
    this.passwordTextWithLabel_0 = null;
  }
  LoginComponent.prototype.onViewMounted_1xffwv$ = function (lifecycleOwner) {
    this.loginPageViewController_0.initialize();
    this.setupObservers_0();
  };
  function LoginComponent$setupObservers$lambda(this$LoginComponent) {
    return function (message) {
      var tmp$, tmp$_0;
      if (message == null) {
        (tmp$ = this$LoginComponent.errorTextView_0) != null ? (tmp$.text = '') : null;
      }
       else {
        (tmp$_0 = this$LoginComponent.errorTextView_0) != null ? (tmp$_0.text = message) : null;
      }
      return Unit;
    };
  }
  LoginComponent.prototype.setupObservers_0 = function () {
    this.loginPageViewController_0.errorMessage.observe_qlkmfe$(LoginComponent$setupObservers$lambda(this));
  };
  function LoginComponent$getView$lambda$lambda($receiver) {
    set_alignItems($receiver, Alignment.Companion.Center);
    set_justifyContent($receiver, JustifyContent.Companion.Center);
    return Unit;
  }
  function LoginComponent$getView$lambda$lambda$lambda($receiver) {
    set_color($receiver, Color.Companion.blue);
    return Unit;
  }
  function LoginComponent$getView$lambda$lambda_0($receiver) {
    $receiver.text = 'Login page';
    $receiver.style_cjs1gm$(LoginComponent$getView$lambda$lambda$lambda);
    return Unit;
  }
  function LoginComponent$getView$lambda$lambda$lambda_0($receiver) {
    set_color($receiver, Color.Companion.red);
    return Unit;
  }
  function LoginComponent$getView$lambda$lambda_1($receiver) {
    $receiver.style_cjs1gm$(LoginComponent$getView$lambda$lambda$lambda_0);
    return Unit;
  }
  function LoginComponent$getView$lambda$lambda$lambda_1(this$LoginComponent) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this$LoginComponent.loginPageViewController_0.doLogin_puj7f4$((tmp$_1 = (tmp$_0 = (tmp$ = this$LoginComponent.emailTextWithLabel_0) != null ? tmp$.textInput : null) != null ? tmp$_0.text : null) != null ? tmp$_1 : '', (tmp$_4 = (tmp$_3 = (tmp$_2 = this$LoginComponent.passwordTextWithLabel_0) != null ? tmp$_2.textInput : null) != null ? tmp$_3.text : null) != null ? tmp$_4 : '');
      return Unit;
    };
  }
  function LoginComponent$getView$lambda$lambda_2(this$LoginComponent) {
    return function ($receiver) {
      $receiver.text = 'Login';
      $receiver.onClick = LoginComponent$getView$lambda$lambda$lambda_1(this$LoginComponent);
      return Unit;
    };
  }
  function LoginComponent$getView$lambda(this$LoginComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(LoginComponent$getView$lambda$lambda);
      textView($receiver, void 0, LoginComponent$getView$lambda$lambda_0);
      this$LoginComponent.emailTextWithLabel_0 = $receiver.mount_7bau7r$(new TextWithLabelComponent('Email'));
      this$LoginComponent.passwordTextWithLabel_0 = $receiver.mount_7bau7r$(new TextWithLabelComponent('Password'));
      this$LoginComponent.errorTextView_0 = textView($receiver, void 0, LoginComponent$getView$lambda$lambda_1);
      button($receiver, void 0, LoginComponent$getView$lambda$lambda_2(this$LoginComponent));
      return Unit;
    };
  }
  LoginComponent.prototype.getView_art3zr$ = function ($receiver) {
    return verticalLayout($receiver, void 0, LoginComponent$getView$lambda(this));
  };
  LoginComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginComponent',
    interfaces: [Component]
  };
  function TextWithLabelComponent(name) {
    Component.call(this);
    this.name = name;
    this.textInput = null;
  }
  function TextWithLabelComponent$getView$lambda($receiver) {
    $receiver.text = 'Hahaaha';
    return Unit;
  }
  function TextWithLabelComponent$getView$lambda$lambda(this$TextWithLabelComponent) {
    return function ($receiver) {
      $receiver.text = 'Enter ' + this$TextWithLabelComponent.name;
      return Unit;
    };
  }
  function TextWithLabelComponent$getView$lambda$lambda_0(this$TextWithLabelComponent) {
    return function ($receiver) {
      $receiver.placeholder = this$TextWithLabelComponent.name;
      return Unit;
    };
  }
  function TextWithLabelComponent$getView$lambda_0(this$TextWithLabelComponent) {
    return function ($receiver) {
      textView($receiver, void 0, TextWithLabelComponent$getView$lambda$lambda(this$TextWithLabelComponent));
      this$TextWithLabelComponent.textInput = textInput($receiver, void 0, TextWithLabelComponent$getView$lambda$lambda_0(this$TextWithLabelComponent));
      return Unit;
    };
  }
  TextWithLabelComponent.prototype.getView_art3zr$ = function ($receiver) {
    textView($receiver, void 0, TextWithLabelComponent$getView$lambda);
    return horizontalLayout($receiver, void 0, TextWithLabelComponent$getView$lambda_0(this));
  };
  TextWithLabelComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextWithLabelComponent',
    interfaces: [Component]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Route(meta, segments, component, parentRoute, parentView, referenceView, isExact) {
    this.meta_0 = meta;
    this.segments_0 = segments;
    this.component_0 = component;
    this.parentRoute_0 = parentRoute;
    this.parentView_0 = parentView;
    this.referenceView_0 = referenceView;
    this.isExact = isExact;
    this.children_0 = ArrayList_init();
  }
  function Route$get_Route$path$lambda(it) {
    return it.text;
  }
  Object.defineProperty(Route.prototype, 'path', {
    get: function () {
      return '/' + joinToString(this.segments_0, '/', void 0, void 0, void 0, void 0, Route$get_Route$path$lambda);
    }
  });
  Route.prototype.update = function () {
    var tmp$, tmp$_0;
    console.log('Route pathToMatch: ' + this.path + ', window: ' + window.location.pathname);
    var windowSegments = getSegments(window.location.pathname);
    if (this.doesMatch_0(windowSegments)) {
      Router_getInstance().currentRoute = this;
      (tmp$ = this.parentView_0) != null ? tmp$.mountAfter_6ftq4c$(this.component_0, this.referenceView_0) : null;
      this.updatePathParams_0(windowSegments);
      var tmp$_1;
      tmp$_1 = this.children_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.update();
      }
      Router_getInstance().currentRoute = this.parentRoute_0;
    }
     else {
      (tmp$_0 = this.parentView_0) != null ? tmp$_0.unMount_7bau7r$(this.component_0) : null;
    }
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  Route.prototype.updatePathParams_0 = function (windowSegments) {
    var params = LinkedHashMap_init();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.segments_0.iterator();
    loop_label: while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      action$break: do {
        var tmp$_1, tmp$_2, tmp$_3;
        if (!Kotlin.isType(item, ParameterSegment))
          break action$break;
        var s = Kotlin.isType(tmp$_1 = item, ParameterSegment) ? tmp$_1 : null;
        console.log('ParameterSegment: ' + toString(s != null ? s.text : null));
        var windowSegment = windowSegments.get_za3lpa$(index_0).text;
        tmp$_3 = (tmp$_2 = s != null ? s.text : null) != null ? tmp$_2 : '';
        params.put_xwzc9p$(tmp$_3, windowSegment);
      }
       while (false);
    }
    if (!params.isEmpty()) {
      this.meta_0.params.value = params;
    }
  };
  Route.prototype.add_20tn11$ = function (route) {
    this.children_0.add_11rb$(route);
  };
  Route.prototype.doesMatch_0 = function (windowSegments) {
    if (this.isExact) {
      if (this.segments_0.size !== windowSegments.size)
        return false;
    }
     else if (this.segments_0.size > windowSegments.size)
      return false;
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.segments_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!item.matches_nka84f$(getOrNull(windowSegments, checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)))))
        return false;
    }
    return true;
  };
  Route.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Route',
    interfaces: []
  };
  function route$lambda($receiver) {
    $receiver.isVisible = false;
    return Unit;
  }
  function route($receiver, path, isExact, isAbsolute, block) {
    if (isExact === void 0)
      isExact = false;
    if (isAbsolute === void 0)
      isAbsolute = false;
    var oldPath = Router_getInstance().currentPath;
    var routePath = getPath(isAbsolute, path);
    Router_getInstance().currentPath = routePath;
    var routeSegments = getSegments(Router_getInstance().currentPath);
    var parentRoute = Router_getInstance().currentRoute;
    var reference = view($receiver, void 0, route$lambda);
    var meta = new RouteMeta(Router_getInstance().currentPath, new Observable());
    var component = getComponent(meta, block);
    var route = new Route(meta, routeSegments, component, parentRoute, $receiver, reference, isExact);
    if (parentRoute == null) {
      Router_getInstance().add_20tn11$(route);
    }
     else {
      parentRoute.add_20tn11$(route);
    }
    route.update();
    Router_getInstance().currentPath = oldPath;
    return route;
  }
  function getPath(isAbsolute, path) {
    var tmp$;
    var trimmedCurrentPath = trim(Router_getInstance().currentPath, Kotlin.charArrayOf(47));
    if (isAbsolute || isBlank(trimmedCurrentPath))
      tmp$ = '/' + trim(path, Kotlin.charArrayOf(47));
    else
      tmp$ = '/' + trimmedCurrentPath + '/' + trim(path, Kotlin.charArrayOf(47));
    return tmp$;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function getSegments(currentPath) {
    var $receiver = split(currentPath, Kotlin.charArrayOf(47));
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!isBlank(element))
        destination.add_11rb$(element);
    }
    var stringSegments = destination;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(stringSegments, 10));
    var tmp$_0;
    tmp$_0 = stringSegments.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var transform$result;
      if (startsWith(item, ':')) {
        transform$result = new ParameterSegment(trim(item, Kotlin.charArrayOf(58)));
      }
       else {
        transform$result = new RouteSegment(item);
      }
      tmp$_1.call(destination_0, transform$result);
    }
    return destination_0;
  }
  function getComponent$ObjectLiteral(closure$block, closure$meta) {
    this.closure$block = closure$block;
    this.closure$meta = closure$meta;
    Component.call(this);
  }
  getComponent$ObjectLiteral.prototype.getView_art3zr$ = function ($receiver) {
    return this.closure$block($receiver, this.closure$meta);
  };
  getComponent$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Component]
  };
  function getComponent(meta, block) {
    return new getComponent$ObjectLiteral(block, meta);
  }
  function RouteSegment(text) {
    this.text = text;
  }
  RouteSegment.prototype.matches_nka84f$ = function (route) {
    return equals(this.text, route != null ? route.text : null);
  };
  RouteSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouteSegment',
    interfaces: []
  };
  function ParameterSegment(text) {
    RouteSegment.call(this, text);
    this.param = null;
  }
  ParameterSegment.prototype.matches_nka84f$ = function (route) {
    return route != null;
  };
  ParameterSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParameterSegment',
    interfaces: [RouteSegment]
  };
  function RouteMeta(url, params) {
    this.url = url;
    this.params = params;
  }
  RouteMeta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouteMeta',
    interfaces: []
  };
  function link$lambda$lambda(closure$completePath) {
    return function (it) {
      it.preventDefault();
      Router_getInstance().navigateTo_61zpoe$(closure$completePath);
      return Unit;
    };
  }
  function link$lambda(closure$isAbsolute, closure$path, closure$block) {
    return function ($receiver) {
      var completePath = getPath(closure$isAbsolute, closure$path);
      $receiver.href = completePath;
      $receiver.onClick = link$lambda$lambda(completePath);
      closure$block != null ? closure$block($receiver) : null;
      return Unit;
    };
  }
  function link($receiver, path, isAbsolute, block) {
    if (isAbsolute === void 0)
      isAbsolute = false;
    if (block === void 0)
      block = null;
    return a($receiver, void 0, link$lambda(isAbsolute, path, block));
  }
  function Router() {
    Router_instance = this;
    window.onpopstate = Router_init$lambda;
    this.currentPath = '/';
    this.currentRoute = null;
    this.routes_0 = ArrayList_init();
  }
  Router.prototype.update_0 = function () {
    var tmp$;
    tmp$ = this.routes_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.update();
    }
  };
  Router.prototype.add_20tn11$ = function (route) {
    this.routes_0.add_11rb$(route);
  };
  Router.prototype.navigateTo_61zpoe$ = function (path) {
    window.history.pushState(null, '', '/' + trimStart(path, Kotlin.charArrayOf(47)));
    Router_getInstance().update_0();
  };
  function Router_init$lambda(it) {
    Router_getInstance().update_0();
    return Unit;
  }
  Router.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Router',
    interfaces: []
  };
  var Router_instance = null;
  function Router_getInstance() {
    if (Router_instance === null) {
      new Router();
    }
    return Router_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$narbase = package$com.narbase || (package$com.narbase = {});
  var package$kuntut = package$narbase.kuntut || (package$narbase.kuntut = {});
  package$kuntut.main_kand9s$ = main;
  package$kuntut.App = App;
  package$kuntut.App2 = App2;
  package$kuntut.DashboardPage = DashboardPage;
  package$kuntut.PageComponent = PageComponent;
  package$kuntut.PageViewController = PageViewController;
  package$kuntut.LoginPageViewController = LoginPageViewController;
  package$kuntut.LoginComponent = LoginComponent;
  package$kuntut.TextWithLabelComponent = TextWithLabelComponent;
  package$kuntut.Route = Route;
  package$kuntut.route_kijlnq$ = route;
  package$kuntut.getPath_8kj6y5$ = getPath;
  package$kuntut.getSegments_61zpoe$ = getSegments;
  package$kuntut.getComponent_swacdx$ = getComponent;
  package$kuntut.RouteSegment = RouteSegment;
  package$kuntut.ParameterSegment = ParameterSegment;
  package$kuntut.RouteMeta = RouteMeta;
  package$kuntut.link_uo881t$ = link;
  Object.defineProperty(package$kuntut, 'Router', {
    get: Router_getInstance
  });
  main([]);
  Kotlin.defineModule('kunafa_main', _);
  return _;
}(typeof kunafa_main === 'undefined' ? {} : kunafa_main, kotlin, kunafa);

//# sourceMappingURL=kunafa_main.js.map
