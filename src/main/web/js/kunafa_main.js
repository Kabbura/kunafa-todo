if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kunafa_main'.");
}
if (typeof kunafa === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kunafa' was not found. Please, check whether 'kunafa' is loaded prior to 'kunafa_main'.");
}
var kunafa_main = function (_, Kotlin, $module$kunafa) {
  'use strict';
  var get_px = $module$kunafa.com.narbase.kunafa.core.dimensions.get_px_rcaex3$;
  var set_borderRadius = $module$kunafa.com.narbase.kunafa.core.css.set_borderRadius_la1i9z$;
  var set_border = $module$kunafa.com.narbase.kunafa.core.css.set_border_la1i9z$;
  var set_margin = $module$kunafa.com.narbase.kunafa.core.css.set_margin_la1i9z$;
  var set_padding = $module$kunafa.com.narbase.kunafa.core.css.set_padding_la1i9z$;
  var Unit = Kotlin.kotlin.Unit;
  var textView = $module$kunafa.com.narbase.kunafa.core.components.textView_k17fs7$;
  var set_width = $module$kunafa.com.narbase.kunafa.core.css.set_width_c3qti6$;
  var view = $module$kunafa.com.narbase.kunafa.core.components.view_yfyifg$;
  var horizontalLayout = $module$kunafa.com.narbase.kunafa.core.components.horizontalLayout_te8a6c$;
  var button = $module$kunafa.com.narbase.kunafa.core.components.button_4mjb1e$;
  var verticalLayout = $module$kunafa.com.narbase.kunafa.core.components.verticalLayout_te8a6c$;
  var page = $module$kunafa.com.narbase.kunafa.core.components.page_6bmerh$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var a = $module$kunafa.com.narbase.kunafa.core.components.a_i4874s$;
  var Alignment = $module$kunafa.com.narbase.kunafa.core.css.Alignment;
  var set_alignItems = $module$kunafa.com.narbase.kunafa.core.css.set_alignItems_68dtfh$;
  var JustifyContent = $module$kunafa.com.narbase.kunafa.core.css.JustifyContent;
  var set_justifyContent = $module$kunafa.com.narbase.kunafa.core.css.set_justifyContent_c3ey27$;
  var Color = $module$kunafa.com.narbase.kunafa.core.drawable.Color;
  var set_color = $module$kunafa.com.narbase.kunafa.core.css.set_color_ntmvhs$;
  var Component = $module$kunafa.com.narbase.kunafa.core.components.Component;
  var get_matchParent = $module$kunafa.com.narbase.kunafa.core.dimensions.dependent.get_matchParent_kn5s8$;
  var set_height = $module$kunafa.com.narbase.kunafa.core.css.set_height_c3qti6$;
  var Observable = $module$kunafa.com.narbase.kunafa.core.lifecycle.Observable;
  var equals = Kotlin.equals;
  var textInput = $module$kunafa.com.narbase.kunafa.core.components.textInput_b3mkdq$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
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
  function main(args) {
    (new App()).setup();
  }
  function App() {
  }
  function App$setup$lambda$lambda$lambda($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Root view matches /';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Go to movies';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_width($receiver, get_px(20));
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'Go to games';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_1($receiver) {
    link($receiver, '/movies', App$setup$lambda$lambda$lambda$lambda);
    view($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_0);
    link($receiver, '/games', App$setup$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Games view matches /games';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    Router_getInstance().navigateTo_61zpoe$('/movies');
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'Go to movies';
    $receiver.onClick = App$setup$lambda$lambda$lambda$lambda$lambda$lambda;
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_2($receiver) {
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda_1);
    button($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_2($receiver) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_2);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'Movies view matches /movies';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    Router_getInstance().navigateTo_61zpoe$('/games');
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.text = 'Go to games';
    $receiver.onClick = App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0;
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text = 'Comedy';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_border($receiver, '1px solid #d4d4d4');
    set_margin($receiver, get_px(8).toString());
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Comedy movies view matches /movies/comedy';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_8(closure$comedyRoute) {
    return function (it) {
      console.log('');
      Router_getInstance().navigateTo_61zpoe$(closure$comedyRoute.path);
      return Unit;
    };
  }
  function App$setup$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda_3);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_4);
    button($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_5);
    var comedyButton = button($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_6);
    var comedyRoute = route($receiver, '/comedy', App$setup$lambda$lambda$lambda$lambda$lambda_7);
    comedyButton.onClick = App$setup$lambda$lambda$lambda$lambda$lambda_8(comedyRoute);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_3($receiver) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_3);
  }
  function App$setup$lambda$lambda($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda);
    textView($receiver, void 0, App$setup$lambda$lambda$lambda_0);
    horizontalLayout($receiver, void 0, App$setup$lambda$lambda$lambda_1);
    route($receiver, '/games', App$setup$lambda$lambda$lambda_2);
    route($receiver, '/movies', App$setup$lambda$lambda$lambda_3);
    return Unit;
  }
  function App$setup$lambda($receiver) {
    $receiver.id = 'page';
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
  function link$lambda$lambda(closure$path) {
    return function (it) {
      it.preventDefault();
      Router_getInstance().navigateTo_61zpoe$(closure$path);
      return Unit;
    };
  }
  function link$lambda(closure$path, closure$block) {
    return function ($receiver) {
      $receiver.href = closure$path;
      $receiver.onClick = link$lambda$lambda(closure$path);
      closure$block != null ? closure$block($receiver) : null;
      return Unit;
    };
  }
  function link($receiver, path, block) {
    if (block === void 0)
      block = null;
    return a($receiver, void 0, link$lambda(path, block));
  }
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
  function Route(path, component, parent, referenceView) {
    this.path = path;
    this.component_0 = component;
    this.parent_0 = parent;
    this.referenceView_0 = referenceView;
  }
  Route.prototype.update = function () {
    var tmp$, tmp$_0;
    if (startsWith(trim(window.location.pathname, Kotlin.charArrayOf(47)), this.path)) {
      (tmp$ = this.parent_0) != null ? tmp$.mountAfter_6ftq4c$(this.component_0, this.referenceView_0) : null;
    }
     else {
      (tmp$_0 = this.parent_0) != null ? tmp$_0.unMount_7bau7r$(this.component_0) : null;
    }
  };
  Route.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Route',
    interfaces: []
  };
  function route($receiver, path, block) {
    return route_0($receiver, path, getComponent(block));
  }
  function route$lambda($receiver) {
    $receiver.isVisible = false;
    return Unit;
  }
  function route_0($receiver, path, component) {
    var oldPath = Router_getInstance().currentPath;
    Router_getInstance().currentPath = trim(Router_getInstance().currentPath + path, Kotlin.charArrayOf(47));
    var reference = view($receiver, void 0, route$lambda);
    var route = new Route(Router_getInstance().currentPath, component, $receiver, reference);
    Router_getInstance().add_20tn11$(route);
    route.update();
    Router_getInstance().currentPath = oldPath;
    return route;
  }
  function getComponent$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
    Component.call(this);
  }
  getComponent$ObjectLiteral.prototype.getView_art3zr$ = function ($receiver) {
    return this.closure$block($receiver);
  };
  getComponent$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Component]
  };
  function getComponent(block) {
    return new getComponent$ObjectLiteral(block);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Router() {
    Router_instance = this;
    window.onpopstate = Router_init$lambda;
    this.currentPath = '/';
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
  package$kuntut.link_6xqxb6$ = link;
  package$kuntut.DashboardPage = DashboardPage;
  package$kuntut.PageComponent = PageComponent;
  package$kuntut.PageViewController = PageViewController;
  package$kuntut.LoginPageViewController = LoginPageViewController;
  package$kuntut.LoginComponent = LoginComponent;
  package$kuntut.TextWithLabelComponent = TextWithLabelComponent;
  package$kuntut.Route = Route;
  package$kuntut.route_xjzb42$ = route;
  package$kuntut.route_lrrxk0$ = route_0;
  package$kuntut.getComponent_a3w1on$ = getComponent;
  Object.defineProperty(package$kuntut, 'Router', {
    get: Router_getInstance
  });
  main([]);
  Kotlin.defineModule('kunafa_main', _);
  return _;
}(typeof kunafa_main === 'undefined' ? {} : kunafa_main, kotlin, kunafa);

//# sourceMappingURL=kunafa_main.js.map
