if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kunafa_main'.");
}
if (typeof kunafa === 'undefined') {
  throw new Error("Error loading module 'kunafa_main'. Its dependency 'kunafa' was not found. Please, check whether 'kunafa' is loaded prior to 'kunafa_main'.");
}
var kunafa_main = function (_, Kotlin, $module$kunafa) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var page = $module$kunafa.com.narbase.kunafa.core.components.page_6bmerh$;
  var getCallableRef = Kotlin.getCallableRef;
  var get_matchParent = $module$kunafa.com.narbase.kunafa.core.dimensions.dependent.get_matchParent_kn5s8$;
  var set_width = $module$kunafa.com.narbase.kunafa.core.css.set_width_c3qti6$;
  var set_height = $module$kunafa.com.narbase.kunafa.core.css.set_height_c3qti6$;
  var weightOf = $module$kunafa.com.narbase.kunafa.core.dimensions.dependent.weightOf_9843sn$;
  var get_px = $module$kunafa.com.narbase.kunafa.core.dimensions.get_px_rcaex3$;
  var set_minWidth = $module$kunafa.com.narbase.kunafa.core.css.set_minWidth_c3qti6$;
  var Color = $module$kunafa.com.narbase.kunafa.core.drawable.Color;
  var set_backgroundColor = $module$kunafa.com.narbase.kunafa.core.css.set_backgroundColor_ntmvhs$;
  var set_padding = $module$kunafa.com.narbase.kunafa.core.css.set_padding_la1i9z$;
  var Alignment = $module$kunafa.com.narbase.kunafa.core.css.Alignment;
  var set_alignItems = $module$kunafa.com.narbase.kunafa.core.css.set_alignItems_68dtfh$;
  var set_fontSize = $module$kunafa.com.narbase.kunafa.core.css.set_fontSize_9np42l$;
  var Color_init = $module$kunafa.com.narbase.kunafa.core.drawable.Color_init_gb4hak$;
  var set_color = $module$kunafa.com.narbase.kunafa.core.css.set_color_ntmvhs$;
  var textView = $module$kunafa.com.narbase.kunafa.core.components.textView_k17fs7$;
  var Color_init_0 = $module$kunafa.com.narbase.kunafa.core.drawable.Color_init_61zpoe$;
  var set_border = $module$kunafa.com.narbase.kunafa.core.css.set_border_la1i9z$;
  var set_borderRadius = $module$kunafa.com.narbase.kunafa.core.css.set_borderRadius_la1i9z$;
  var set_marginTop = $module$kunafa.com.narbase.kunafa.core.css.set_marginTop_9np42l$;
  var textInput = $module$kunafa.com.narbase.kunafa.core.components.textInput_b3mkdq$;
  var button = $module$kunafa.com.narbase.kunafa.core.components.button_f7h23d$;
  var verticalLayout = $module$kunafa.com.narbase.kunafa.core.components.verticalLayout_te8a6c$;
  var verticalScrollLayout = $module$kunafa.com.narbase.kunafa.core.components.verticalScrollLayout_vjqw9z$;
  var horizontalLayout = $module$kunafa.com.narbase.kunafa.core.components.horizontalLayout_te8a6c$;
  var Component = $module$kunafa.com.narbase.kunafa.core.components.Component;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Observable = $module$kunafa.com.narbase.kunafa.core.lifecycle.Observable;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var set_cursor = $module$kunafa.com.narbase.kunafa.core.css.set_cursor_la1i9z$;
  var set_boxShadow = $module$kunafa.com.narbase.kunafa.core.css.set_boxShadow_la1i9z$;
  var hover = $module$kunafa.com.narbase.kunafa.core.css.hover_ybuhke$;
  var view = $module$kunafa.com.narbase.kunafa.core.components.view_yfyifg$;
  var set_marginRight = $module$kunafa.com.narbase.kunafa.core.css.set_marginRight_9np42l$;
  var classRuleSet = $module$kunafa.com.narbase.kunafa.core.css.classRuleSet_mv4gp1$;
  var set_textDecoration = $module$kunafa.com.narbase.kunafa.core.css.set_textDecoration_la1i9z$;
  var JustifyContent = $module$kunafa.com.narbase.kunafa.core.css.JustifyContent;
  var set_justifyContent = $module$kunafa.com.narbase.kunafa.core.css.set_justifyContent_c3ey27$;
  var equals = Kotlin.equals;
  TodoComponent.prototype = Object.create(Component.prototype);
  TodoComponent.prototype.constructor = TodoComponent;
  TodoItem.prototype = Object.create(Component.prototype);
  TodoItem.prototype.constructor = TodoItem;
  DashboardPage.prototype = Object.create(Component.prototype);
  DashboardPage.prototype.constructor = DashboardPage;
  PageComponent.prototype = Object.create(Component.prototype);
  PageComponent.prototype.constructor = PageComponent;
  LoginComponent.prototype = Object.create(Component.prototype);
  LoginComponent.prototype.constructor = LoginComponent;
  TextWithLabelComponent.prototype = Object.create(Component.prototype);
  TextWithLabelComponent.prototype.constructor = TextWithLabelComponent;
  function main$lambda($receiver) {
    $receiver.mount_7bau7r$(new TodoComponent(new TodoViewModel()));
    return Unit;
  }
  function main(args) {
    page(void 0, main$lambda);
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function TodoComponent(viewModel) {
    Component.call(this);
    this.viewModel_0 = viewModel;
    this.todoViews_0 = LinkedHashMap_init();
    this.listLayout_0 = null;
    this.todoTextInput_0 = null;
  }
  TodoComponent.prototype.onViewMounted_1xffwv$ = function (lifecycleOwner) {
    this.viewModel_0.onItemAdded.observe_qlkmfe$(getCallableRef('addItem', function ($receiver, pm) {
      return $receiver.addItem_0(pm), Unit;
    }.bind(null, this)));
    this.viewModel_0.onItemDeleted.observe_qlkmfe$(getCallableRef('deleteItem', function ($receiver, pm) {
      return $receiver.deleteItem_0(pm), Unit;
    }.bind(null, this)));
    this.viewModel_0.onItemUpdated.observe_qlkmfe$(getCallableRef('updateItem', function ($receiver, pm) {
      return $receiver.updateItem_0(pm), Unit;
    }.bind(null, this)));
  };
  TodoComponent.prototype.addItem_0 = function (pm) {
    var tmp$;
    if (pm == null)
      return;
    var component = new TodoItem(pm, getCallableRef('deleteItem', function ($receiver, id) {
      return $receiver.deleteItem_za3lpa$(id), Unit;
    }.bind(null, this.viewModel_0)), getCallableRef('toggleItemStatus', function ($receiver, id) {
      return $receiver.toggleItemStatus_za3lpa$(id), Unit;
    }.bind(null, this.viewModel_0)));
    (tmp$ = this.listLayout_0) != null ? tmp$.mount_7bau7r$(component) : null;
    var $receiver = this.todoViews_0;
    var key = pm.id;
    $receiver.put_xwzc9p$(key, component);
  };
  TodoComponent.prototype.deleteItem_0 = function (pm) {
    var tmp$, tmp$_0;
    if (pm == null)
      return;
    tmp$ = this.todoViews_0.get_11rb$(pm.id);
    if (tmp$ == null) {
      return;
    }
    var component = tmp$;
    (tmp$_0 = this.listLayout_0) != null ? tmp$_0.unMount_7bau7r$(component) : null;
    this.todoViews_0.remove_11rb$(pm.id);
  };
  TodoComponent.prototype.updateItem_0 = function (pm) {
    var tmp$;
    if (pm == null)
      return;
    tmp$ = this.todoViews_0.get_11rb$(pm.id);
    if (tmp$ == null) {
      return;
    }
    var component = tmp$;
    if (pm.isDone) {
      component.markDone();
    }
     else {
      component.markUndone();
    }
  };
  function TodoComponent$getView$lambda$lambda($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_height($receiver, get_matchParent($receiver));
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda($receiver) {
    set_width($receiver, weightOf($receiver, 1));
    set_minWidth($receiver, get_px(200));
    set_height($receiver, get_matchParent($receiver));
    set_backgroundColor($receiver, Color.Companion.white);
    set_padding($receiver, get_px(32).toString());
    set_alignItems($receiver, Alignment.Companion.Center);
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda($receiver) {
    set_fontSize($receiver, get_px(32));
    set_color($receiver, Color_init(100, 240, 100));
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Kunafa Todo';
    $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda_0($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_backgroundColor($receiver, Color_init_0('#fafafa'));
    set_border($receiver, '1px solid #efefef');
    set_padding($receiver, get_px(8).toString());
    set_borderRadius($receiver, get_px(4).toString());
    set_marginTop($receiver, get_px(16));
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda_1(this$TodoComponent) {
    return function (e) {
      var tmp$, tmp$_0;
      if (((tmp$_0 = Kotlin.isType(tmp$ = e, KeyboardEvent) ? tmp$ : null) != null ? tmp$_0.keyCode : null) === 13) {
        this$TodoComponent.onButtonClicked_0();
      }
      return Unit;
    };
  }
  function TodoComponent$getView$lambda$lambda$lambda_1(this$TodoComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda$lambda_0);
      $receiver.element.addEventListener('keypress', TodoComponent$getView$lambda$lambda$lambda$lambda_1(this$TodoComponent));
      return Unit;
    };
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda_2($receiver) {
    set_marginTop($receiver, get_px(16));
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda_3(this$TodoComponent) {
    return function (it) {
      this$TodoComponent.onButtonClicked_0();
      return Unit;
    };
  }
  function TodoComponent$getView$lambda$lambda$lambda_2(this$TodoComponent) {
    return function ($receiver) {
      $receiver.id = 'myButton';
      $receiver.text = 'Add to do';
      $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda$lambda_2);
      $receiver.onClick = TodoComponent$getView$lambda$lambda$lambda$lambda_3(this$TodoComponent);
      return Unit;
    };
  }
  function TodoComponent$getView$lambda$lambda_0(this$TodoComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda);
      textView($receiver, void 0, TodoComponent$getView$lambda$lambda$lambda_0);
      this$TodoComponent.todoTextInput_0 = textInput($receiver, void 0, TodoComponent$getView$lambda$lambda$lambda_1(this$TodoComponent));
      button($receiver, void 0, TodoComponent$getView$lambda$lambda$lambda_2(this$TodoComponent));
      return Unit;
    };
  }
  function TodoComponent$getView$lambda$lambda$lambda_3($receiver) {
    set_width($receiver, weightOf($receiver, 2));
    set_height($receiver, get_matchParent($receiver));
    set_backgroundColor($receiver, Color_init_0('#ededed'));
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda$lambda_4($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_height($receiver, get_matchParent($receiver));
    set_padding($receiver, get_px(8).toString());
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda$lambda_4($receiver) {
    $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function TodoComponent$getView$lambda$lambda_1(this$TodoComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda$lambda_3);
      this$TodoComponent.listLayout_0 = verticalLayout($receiver, void 0, TodoComponent$getView$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function TodoComponent$getView$lambda(this$TodoComponent) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoComponent$getView$lambda$lambda);
      verticalLayout($receiver, void 0, TodoComponent$getView$lambda$lambda_0(this$TodoComponent));
      verticalScrollLayout($receiver, void 0, TodoComponent$getView$lambda$lambda_1(this$TodoComponent));
      return Unit;
    };
  }
  TodoComponent.prototype.getView_art3zr$ = function ($receiver) {
    return horizontalLayout($receiver, void 0, TodoComponent$getView$lambda(this));
  };
  TodoComponent.prototype.onButtonClicked_0 = function () {
    var tmp$, tmp$_0;
    this.viewModel_0.addNewTodo_pdl1vj$((tmp$ = this.todoTextInput_0) != null ? tmp$.text : null);
    (tmp$_0 = this.todoTextInput_0) != null ? (tmp$_0.text = '') : null;
  };
  TodoComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoComponent',
    interfaces: [Component]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function TodoViewModel() {
    this.onItemAdded = new Observable();
    this.onItemDeleted = new Observable();
    this.onItemUpdated = new Observable();
    this.todoItemsList_0 = ArrayList_init();
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  TodoViewModel.prototype.addNewTodo_pdl1vj$ = function (todoText) {
    if (todoText == null || isBlank(todoText))
      return;
    var pm = new TodoPm(todoText);
    this.todoItemsList_0.add_11rb$(pm);
    this.onItemAdded.value = pm;
  };
  TodoViewModel.prototype.deleteItem_za3lpa$ = function (id) {
    var tmp$;
    var $receiver = this.todoItemsList_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.id === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      return;
    }
    var item = tmp$;
    this.onItemDeleted.value = item;
    this.todoItemsList_0.remove_11rb$(item);
  };
  TodoViewModel.prototype.toggleItemStatus_za3lpa$ = function (id) {
    var tmp$;
    var $receiver = this.todoItemsList_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.id === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      return;
    }
    var item = tmp$;
    item.isDone = !item.isDone;
    this.onItemUpdated.value = item;
  };
  TodoViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoViewModel',
    interfaces: []
  };
  function TodoPm(text, isDone) {
    TodoPm$Companion_getInstance();
    if (isDone === void 0)
      isDone = false;
    this.text = text;
    this.isDone = isDone;
    this.id = TodoPm$Companion_getInstance().nextId_0;
  }
  function TodoPm$Companion() {
    TodoPm$Companion_instance = this;
    this.nextId_ha6k7h$_0 = 0;
  }
  Object.defineProperty(TodoPm$Companion.prototype, 'nextId_0', {
    get: function () {
      var tmp$;
      return tmp$ = this.nextId_ha6k7h$_0, this.nextId_ha6k7h$_0 = tmp$ + 1 | 0, tmp$;
    },
    set: function (nextId) {
      this.nextId_ha6k7h$_0 = nextId;
    }
  });
  TodoPm$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TodoPm$Companion_instance = null;
  function TodoPm$Companion_getInstance() {
    if (TodoPm$Companion_instance === null) {
      new TodoPm$Companion();
    }
    return TodoPm$Companion_instance;
  }
  TodoPm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoPm',
    interfaces: []
  };
  TodoPm.prototype.component1 = function () {
    return this.text;
  };
  TodoPm.prototype.component2 = function () {
    return this.isDone;
  };
  TodoPm.prototype.copy_ivxn3r$ = function (text, isDone) {
    return new TodoPm(text === void 0 ? this.text : text, isDone === void 0 ? this.isDone : isDone);
  };
  TodoPm.prototype.toString = function () {
    return 'TodoPm(text=' + Kotlin.toString(this.text) + (', isDone=' + Kotlin.toString(this.isDone)) + ')';
  };
  TodoPm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.isDone) | 0;
    return result;
  };
  TodoPm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.isDone, other.isDone)))));
  };
  function TodoItem(todoPm, onDeleteClicked, onCheckboxClicked) {
    TodoItem$Companion_getInstance();
    Component.call(this);
    this.todoPm_0 = todoPm;
    this.onDeleteClicked_0 = onDeleteClicked;
    this.onCheckboxClicked_0 = onCheckboxClicked;
    this.checkboxView_0 = null;
    this.todoTextView_0 = null;
  }
  function TodoItem$getView$lambda$lambda$lambda($receiver) {
    set_boxShadow($receiver, '0px 4px 3px #bbb');
    return Unit;
  }
  function TodoItem$getView$lambda$lambda($receiver) {
    set_width($receiver, get_matchParent($receiver));
    set_border($receiver, '1px solid #d4d4d4');
    set_marginTop($receiver, get_px(8));
    set_padding($receiver, get_px(8).toString());
    set_alignItems($receiver, Alignment.Companion.Center);
    set_cursor($receiver, 'pointer');
    set_backgroundColor($receiver, Color.Companion.white);
    hover($receiver, TodoItem$getView$lambda$lambda$lambda);
    return Unit;
  }
  function TodoItem$getView$lambda$lambda_0(this$TodoItem) {
    return function (it) {
      this$TodoItem.onCheckboxClicked_0(this$TodoItem.todoPm_0.id);
      return Unit;
    };
  }
  function TodoItem$getView$lambda$lambda_1($receiver) {
    $receiver.addRuleSet_mw7j13$(TodoItem$Companion$Style_getInstance().circleBasic);
    return Unit;
  }
  function TodoItem$getView$lambda$lambda$lambda_0($receiver) {
    set_width($receiver, weightOf($receiver, 1));
    set_fontSize($receiver, get_px(16));
    return Unit;
  }
  function TodoItem$getView$lambda$lambda_2(this$TodoItem) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoItem$getView$lambda$lambda$lambda_0);
      $receiver.text = this$TodoItem.todoPm_0.text;
      return Unit;
    };
  }
  function TodoItem$getView$lambda$lambda$lambda_1(this$TodoItem) {
    return function (it) {
      this$TodoItem.onDeleteClicked_0(this$TodoItem.todoPm_0.id);
      return Unit;
    };
  }
  function TodoItem$getView$lambda$lambda$lambda$lambda($receiver) {
    set_backgroundColor($receiver, Color_init(240, 40, 40));
    return Unit;
  }
  function TodoItem$getView$lambda$lambda$lambda_2($receiver) {
    set_borderRadius($receiver, get_px(4).toString());
    set_backgroundColor($receiver, Color_init(230, 100, 100));
    set_color($receiver, Color.Companion.white);
    set_padding($receiver, get_px(4).toString());
    set_border($receiver, 'none');
    set_cursor($receiver, 'pointer');
    hover($receiver, TodoItem$getView$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function TodoItem$getView$lambda$lambda_3(this$TodoItem) {
    return function ($receiver) {
      $receiver.text = 'Delete';
      $receiver.onClick = TodoItem$getView$lambda$lambda$lambda_1(this$TodoItem);
      $receiver.style_cjs1gm$(TodoItem$getView$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function TodoItem$getView$lambda(this$TodoItem) {
    return function ($receiver) {
      $receiver.style_cjs1gm$(TodoItem$getView$lambda$lambda);
      $receiver.onClick = TodoItem$getView$lambda$lambda_0(this$TodoItem);
      this$TodoItem.checkboxView_0 = view($receiver, void 0, TodoItem$getView$lambda$lambda_1);
      this$TodoItem.todoTextView_0 = textView($receiver, void 0, TodoItem$getView$lambda$lambda_2(this$TodoItem));
      button($receiver, void 0, TodoItem$getView$lambda$lambda_3(this$TodoItem));
      return Unit;
    };
  }
  TodoItem.prototype.getView_art3zr$ = function ($receiver) {
    return horizontalLayout($receiver, void 0, TodoItem$getView$lambda(this));
  };
  TodoItem.prototype.markDone = function () {
    var tmp$, tmp$_0;
    (tmp$ = this.checkboxView_0) != null ? (tmp$.addRuleSet_mw7j13$(TodoItem$Companion$Style_getInstance().circleDone), Unit) : null;
    (tmp$_0 = this.todoTextView_0) != null ? (tmp$_0.addRuleSet_mw7j13$(TodoItem$Companion$Style_getInstance().textStroked), Unit) : null;
  };
  TodoItem.prototype.markUndone = function () {
    var tmp$, tmp$_0;
    (tmp$ = this.checkboxView_0) != null ? (tmp$.removeRuleSet_mw7j13$(TodoItem$Companion$Style_getInstance().circleDone), Unit) : null;
    (tmp$_0 = this.todoTextView_0) != null ? (tmp$_0.removeRuleSet_mw7j13$(TodoItem$Companion$Style_getInstance().textStroked), Unit) : null;
  };
  function TodoItem$Companion() {
    TodoItem$Companion_instance = this;
  }
  function TodoItem$Companion$Style() {
    TodoItem$Companion$Style_instance = this;
    this.circleBasic = classRuleSet(void 0, TodoItem$Companion$Style$circleBasic$lambda);
    this.circleDone = classRuleSet(void 0, TodoItem$Companion$Style$circleDone$lambda);
    this.textStroked = classRuleSet(void 0, TodoItem$Companion$Style$textStroked$lambda);
  }
  function TodoItem$Companion$Style$circleBasic$lambda($receiver) {
    set_width($receiver, get_px(16));
    set_height($receiver, get_px(16));
    set_borderRadius($receiver, get_px(16).toString());
    set_border($receiver, '1px solid #000');
    set_marginRight($receiver, get_px(8));
    return Unit;
  }
  function TodoItem$Companion$Style$circleDone$lambda($receiver) {
    set_backgroundColor($receiver, Color.Companion.black);
    return Unit;
  }
  function TodoItem$Companion$Style$textStroked$lambda($receiver) {
    set_textDecoration($receiver, 'line-through');
    return Unit;
  }
  TodoItem$Companion$Style.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Style',
    interfaces: []
  };
  var TodoItem$Companion$Style_instance = null;
  function TodoItem$Companion$Style_getInstance() {
    if (TodoItem$Companion$Style_instance === null) {
      new TodoItem$Companion$Style();
    }
    return TodoItem$Companion$Style_instance;
  }
  TodoItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TodoItem$Companion_instance = null;
  function TodoItem$Companion_getInstance() {
    if (TodoItem$Companion_instance === null) {
      new TodoItem$Companion();
    }
    return TodoItem$Companion_instance;
  }
  TodoItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoItem',
    interfaces: [Component]
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
  package$kuntut.TodoComponent = TodoComponent;
  package$kuntut.TodoViewModel = TodoViewModel;
  Object.defineProperty(TodoPm, 'Companion', {
    get: TodoPm$Companion_getInstance
  });
  package$kuntut.TodoPm = TodoPm;
  Object.defineProperty(TodoItem$Companion.prototype, 'Style', {
    get: TodoItem$Companion$Style_getInstance
  });
  Object.defineProperty(TodoItem, 'Companion', {
    get: TodoItem$Companion_getInstance
  });
  package$kuntut.TodoItem = TodoItem;
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
