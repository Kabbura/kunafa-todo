if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kunafa_main'.");
}
if (typeof kunafa === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kunafa' was not found. Please, check whether 'kunafa' is loaded prior to 'kunafa_main'.");
}
var kunafa_main = function (_, Kotlin, $module$kunafa) {
  'use strict';
  var get_matchParent = $module$kunafa.com.narbase.kunafa.core.dimensions.dependent.get_matchParent_kn5s8$;
  var set_width = $module$kunafa.com.narbase.kunafa.core.css.set_width_c3qti6$;
  var get_px = $module$kunafa.com.narbase.kunafa.core.dimensions.get_px_rcaex3$;
  var set_margin = $module$kunafa.com.narbase.kunafa.core.css.set_margin_la1i9z$;
  var Unit = Kotlin.kotlin.Unit;
  var routing = $module$kunafa.com.narbase.kunafa.core.routing;
  var button = $module$kunafa.com.narbase.kunafa.core.components.button_4mjb1e$;
  var link = $module$kunafa.com.narbase.kunafa.core.routing.link_6xqxb6$;
  var verticalLayout = $module$kunafa.com.narbase.kunafa.core.components.verticalLayout_te8a6c$;
  var Color_init = $module$kunafa.com.narbase.kunafa.core.drawable.Color_init_61zpoe$;
  var set_backgroundColor = $module$kunafa.com.narbase.kunafa.core.css.set_backgroundColor_ntmvhs$;
  var set_height = $module$kunafa.com.narbase.kunafa.core.css.set_height_c3qti6$;
  var set_marginTop = $module$kunafa.com.narbase.kunafa.core.css.set_marginTop_9np42l$;
  var set_marginBottom = $module$kunafa.com.narbase.kunafa.core.css.set_marginBottom_9np42l$;
  var view = $module$kunafa.com.narbase.kunafa.core.components.view_yfyifg$;
  var textView = $module$kunafa.com.narbase.kunafa.core.components.textView_k17fs7$;
  var route = $module$kunafa.com.narbase.kunafa.core.routing.route_2nc5dp$;
  var routeComponent = $module$kunafa.com.narbase.kunafa.core.routing.routeComponent_julfhx$;
  var page = $module$kunafa.com.narbase.kunafa.core.components.page_6bmerh$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Component = $module$kunafa.com.narbase.kunafa.core.components.Component;
  var set_padding = $module$kunafa.com.narbase.kunafa.core.css.set_padding_la1i9z$;
  var set_borderRadius = $module$kunafa.com.narbase.kunafa.core.css.set_borderRadius_la1i9z$;
  var set_border = $module$kunafa.com.narbase.kunafa.core.css.set_border_la1i9z$;
  var Alignment = $module$kunafa.com.narbase.kunafa.core.css.Alignment;
  var set_alignItems = $module$kunafa.com.narbase.kunafa.core.css.set_alignItems_68dtfh$;
  var JustifyContent = $module$kunafa.com.narbase.kunafa.core.css.JustifyContent;
  var set_justifyContent = $module$kunafa.com.narbase.kunafa.core.css.set_justifyContent_c3ey27$;
  var Color = $module$kunafa.com.narbase.kunafa.core.drawable.Color;
  var set_color = $module$kunafa.com.narbase.kunafa.core.css.set_color_ntmvhs$;
  var Observable = $module$kunafa.com.narbase.kunafa.core.lifecycle.Observable;
  var equals = Kotlin.equals;
  var textInput = $module$kunafa.com.narbase.kunafa.core.components.textInput_b3mkdq$;
  var horizontalLayout = $module$kunafa.com.narbase.kunafa.core.components.horizontalLayout_te8a6c$;
  TopicDetailsComponent.prototype = Object.create(Component.prototype);
  TopicDetailsComponent.prototype.constructor = TopicDetailsComponent;
  DashboardPage.prototype = Object.create(Component.prototype);
  DashboardPage.prototype.constructor = DashboardPage;
  PageComponent.prototype = Object.create(Component.prototype);
  PageComponent.prototype.constructor = PageComponent;
  LoginComponent.prototype = Object.create(Component.prototype);
  LoginComponent.prototype.constructor = LoginComponent;
  TextWithLabelComponent.prototype = Object.create(Component.prototype);
  TextWithLabelComponent.prototype.constructor = TextWithLabelComponent;
  function main(args) {
    (new App()).setup();
  }
  function App() {
    this.pageViewController = new PageViewController();
  }
  function App$setup$lambda$lambda$lambda($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_margin($receiver, get_px(32).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda(it) {
    routing.Router.navigateTo_61zpoe$('/about');
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Navigate to about';
    $receiver.onClick = App$setup$lambda$lambda$lambda$lambda$lambda;
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Home';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_0($receiver) {
    button($receiver, void 0, App$setup$lambda$lambda$lambda$lambda);
    link($receiver, '/', App$setup$lambda$lambda$lambda$lambda_0);
    link($receiver, '/about', App$setup$lambda$lambda$lambda$lambda_1);
    link($receiver, '/topics', App$setup$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_3($receiver) {
    set_backgroundColor($receiver, Color_init('aaa'));
    set_width($receiver, get_matchParent($receiver));
    set_height($receiver, get_px(1));
    set_marginTop($receiver, get_px(32));
    set_marginBottom($receiver, get_px(32));
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_1($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.set_puj7f4$('width', get_px(4).toString());
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'Home';
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_2($receiver, it) {
    return textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_4);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'About';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'Go to us';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = 'Us';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Go to 1';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.text = '1';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver, it) {
    return textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    link($receiver, '/about/us/1', App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    route($receiver, '/1', void 0, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_3($receiver, it) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Us';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_4($receiver, it) {
    return textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function App$setup$lambda$lambda$lambda$lambda_5($receiver) {
    textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_1);
    link($receiver, '/about/us', App$setup$lambda$lambda$lambda$lambda$lambda_2);
    route($receiver, '/us', void 0, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_3);
    route($receiver, '/contact', void 0, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function App$setup$lambda$lambda$lambda_3($receiver, it) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_5);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.text = 'Topics';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'Islam';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text = 'Ayman';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.text = 'Ahmed';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_6(closure$meta) {
    return function ($receiver) {
      link($receiver, closure$meta.url + '/islam', App$setup$lambda$lambda$lambda$lambda$lambda$lambda_1);
      link($receiver, closure$meta.url + '/ayman', App$setup$lambda$lambda$lambda$lambda$lambda$lambda_2);
      link($receiver, closure$meta.url + '/ahmed', App$setup$lambda$lambda$lambda$lambda$lambda$lambda_3);
      return Unit;
    };
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'Please select a topic';
    return Unit;
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_7($receiver, it) {
    return textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda$lambda_4);
  }
  function App$setup$lambda$lambda$lambda$lambda$lambda_8(meta) {
    return new TopicDetailsComponent(meta);
  }
  function App$setup$lambda$lambda$lambda$lambda_6(closure$meta) {
    return function ($receiver) {
      textView($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_5);
      verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_6(closure$meta));
      route($receiver, '/', true, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_7);
      routeComponent($receiver, '/:topicParam', void 0, void 0, App$setup$lambda$lambda$lambda$lambda$lambda_8);
      return Unit;
    };
  }
  function App$setup$lambda$lambda$lambda_4($receiver, meta) {
    return verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda$lambda_6(meta));
  }
  function App$setup$lambda$lambda($receiver) {
    $receiver.style_cjs1gm$(App$setup$lambda$lambda$lambda);
    verticalLayout($receiver, void 0, App$setup$lambda$lambda$lambda_0);
    view($receiver, void 0, App$setup$lambda$lambda$lambda_1);
    route($receiver, '/', true, void 0, App$setup$lambda$lambda$lambda_2);
    route($receiver, '/about', void 0, void 0, App$setup$lambda$lambda$lambda_3);
    route($receiver, '/topics', void 0, void 0, App$setup$lambda$lambda$lambda_4);
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
  function TopicDetailsComponent(meta) {
    Component.call(this);
    this.meta = meta;
    this.topicNameTextView = null;
  }
  function TopicDetailsComponent$onViewMounted$lambda(this$TopicDetailsComponent) {
    return function (params) {
      var tmp$, tmp$_0;
      (tmp$_0 = this$TopicDetailsComponent.topicNameTextView) != null ? (tmp$_0.text = (tmp$ = params != null ? params.get_11rb$('topicParam') : null) != null ? tmp$ : '') : null;
      return Unit;
    };
  }
  TopicDetailsComponent.prototype.onViewMounted_1xffwv$ = function (lifecycleOwner) {
    this.meta.params.observe_qlkmfe$(TopicDetailsComponent$onViewMounted$lambda(this));
  };
  function TopicDetailsComponent$getView$lambda$lambda($receiver) {
    $receiver.text = 'Inside Topic dDetails component';
    return Unit;
  }
  function TopicDetailsComponent$getView$lambda$lambda_0($receiver) {
    return Unit;
  }
  function TopicDetailsComponent$getView$lambda(this$TopicDetailsComponent) {
    return function ($receiver) {
      textView($receiver, void 0, TopicDetailsComponent$getView$lambda$lambda);
      this$TopicDetailsComponent.topicNameTextView = textView($receiver, void 0, TopicDetailsComponent$getView$lambda$lambda_0);
      return Unit;
    };
  }
  TopicDetailsComponent.prototype.getView_art3zr$ = function ($receiver) {
    return verticalLayout($receiver, void 0, TopicDetailsComponent$getView$lambda(this));
  };
  TopicDetailsComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopicDetailsComponent',
    interfaces: [Component]
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
    link($receiver, '/', App2$setup$lambda$lambda$lambda$lambda_0);
    link($receiver, '/about', App2$setup$lambda$lambda$lambda$lambda_1);
    link($receiver, '/topics', App2$setup$lambda$lambda$lambda$lambda_2);
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
    link($receiver, '/rendering', App2$setup$lambda$lambda$lambda$lambda$lambda_5);
    link($receiver, '/components', App2$setup$lambda$lambda$lambda$lambda$lambda_6);
    link($receiver, '/props-v-state', App2$setup$lambda$lambda$lambda$lambda$lambda_7);
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
  var package$com = _.com || (_.com = {});
  var package$narbase = package$com.narbase || (package$com.narbase = {});
  var package$kuntut = package$narbase.kuntut || (package$narbase.kuntut = {});
  package$kuntut.main_kand9s$ = main;
  package$kuntut.App = App;
  package$kuntut.TopicDetailsComponent = TopicDetailsComponent;
  package$kuntut.App2 = App2;
  package$kuntut.DashboardPage = DashboardPage;
  package$kuntut.PageComponent = PageComponent;
  package$kuntut.PageViewController = PageViewController;
  package$kuntut.LoginPageViewController = LoginPageViewController;
  package$kuntut.LoginComponent = LoginComponent;
  package$kuntut.TextWithLabelComponent = TextWithLabelComponent;
  main([]);
  Kotlin.defineModule('kunafa_main', _);
  return _;
}(typeof kunafa_main === 'undefined' ? {} : kunafa_main, kotlin, kunafa);

//# sourceMappingURL=kunafa_main.js.map
