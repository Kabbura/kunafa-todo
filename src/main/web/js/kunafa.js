if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kunafa'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kunafa'.");
}
var kunafa = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toString = Kotlin.toString;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var numberToDouble = Kotlin.numberToDouble;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ConcurrentModificationException_init = Kotlin.kotlin.ConcurrentModificationException_init;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  Anchor.prototype = Object.create(View.prototype);
  Anchor.prototype.constructor = Anchor;
  Button.prototype = Object.create(View.prototype);
  Button.prototype.constructor = Button;
  Checkbox.prototype = Object.create(View.prototype);
  Checkbox.prototype.constructor = Checkbox;
  Form.prototype = Object.create(View.prototype);
  Form.prototype.constructor = Form;
  FieldSet.prototype = Object.create(View.prototype);
  FieldSet.prototype.constructor = FieldSet;
  Legend.prototype = Object.create(View.prototype);
  Legend.prototype.constructor = Legend;
  ImageView.prototype = Object.create(View.prototype);
  ImageView.prototype.constructor = ImageView;
  Page.prototype = Object.create(View.prototype);
  Page.prototype.constructor = Page;
  Radio.prototype = Object.create(View.prototype);
  Radio.prototype.constructor = Radio;
  Table.prototype = Object.create(View.prototype);
  Table.prototype.constructor = Table;
  TableRow.prototype = Object.create(View.prototype);
  TableRow.prototype.constructor = TableRow;
  TableCell.prototype = Object.create(View.prototype);
  TableCell.prototype.constructor = TableCell;
  TableHeaderCell.prototype = Object.create(View.prototype);
  TableHeaderCell.prototype.constructor = TableHeaderCell;
  TableHeader.prototype = Object.create(View.prototype);
  TableHeader.prototype.constructor = TableHeader;
  TableFooter.prototype = Object.create(View.prototype);
  TableFooter.prototype.constructor = TableFooter;
  TableBody.prototype = Object.create(View.prototype);
  TableBody.prototype.constructor = TableBody;
  TextInput.prototype = Object.create(View.prototype);
  TextInput.prototype.constructor = TextInput;
  TextView.prototype = Object.create(View.prototype);
  TextView.prototype.constructor = TextView;
  UList.prototype = Object.create(View.prototype);
  UList.prototype.constructor = UList;
  ListItem.prototype = Object.create(View.prototype);
  ListItem.prototype.constructor = ListItem;
  LinearLayout$Orientation.prototype = Object.create(Enum.prototype);
  LinearLayout$Orientation.prototype.constructor = LinearLayout$Orientation;
  LinearLayout.prototype = Object.create(View.prototype);
  LinearLayout.prototype.constructor = LinearLayout;
  ScrollView.prototype = Object.create(LinearLayout.prototype);
  ScrollView.prototype.constructor = ScrollView;
  ClassSelector.prototype = Object.create(Selector.prototype);
  ClassSelector.prototype.constructor = ClassSelector;
  CompoundSelector.prototype = Object.create(Selector.prototype);
  CompoundSelector.prototype.constructor = CompoundSelector;
  IdSelector.prototype = Object.create(Selector.prototype);
  IdSelector.prototype.constructor = IdSelector;
  PseudoSelector.prototype = Object.create(Selector.prototype);
  PseudoSelector.prototype.constructor = PseudoSelector;
  StringSelector.prototype = Object.create(Selector.prototype);
  StringSelector.prototype.constructor = StringSelector;
  DynamicDimension.prototype = Object.create(Dimension.prototype);
  DynamicDimension.prototype.constructor = DynamicDimension;
  LinearDimension$Unit.prototype = Object.create(Enum.prototype);
  LinearDimension$Unit.prototype.constructor = LinearDimension$Unit;
  LinearDimension.prototype = Object.create(Dimension.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  MatchParent.prototype = Object.create(DynamicDimension.prototype);
  MatchParent.prototype.constructor = MatchParent;
  Weight.prototype = Object.create(DynamicDimension.prototype);
  Weight.prototype.constructor = Weight;
  WrapContent.prototype = Object.create(DynamicDimension.prototype);
  WrapContent.prototype.constructor = WrapContent;
  LifecycleEvent.prototype = Object.create(Enum.prototype);
  LifecycleEvent.prototype.constructor = LifecycleEvent;
  Route$Companion$getComponent$ObjectLiteral.prototype = Object.create(Component.prototype);
  Route$Companion$getComponent$ObjectLiteral.prototype.constructor = Route$Companion$getComponent$ObjectLiteral;
  ParameterSegment.prototype = Object.create(RouteSegment.prototype);
  ParameterSegment.prototype.constructor = ParameterSegment;
  function Anchor(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_es04ql$_0 = Kotlin.isType(tmp$ = document.createElement('a'), HTMLAnchorElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(Anchor.prototype, 'element', {
    get: function () {
      return this.element_es04ql$_0;
    }
  });
  Object.defineProperty(Anchor.prototype, 'text', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  Object.defineProperty(Anchor.prototype, 'href', {
    get: function () {
      return this.element.href;
    },
    set: function (value) {
      this.element.href = value;
    }
  });
  Anchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Anchor',
    interfaces: [View]
  };
  function Button(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_l7py3e$_0 = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(Button.prototype, 'element', {
    get: function () {
      return this.element_l7py3e$_0;
    }
  });
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      return this.element.textContent;
    },
    set: function (value) {
      this.element.textContent = value;
    }
  });
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [View]
  };
  function Checkbox(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : throwCCE();
    $receiver.type = 'checkbox';
    this.element_m5dmet$_0 = $receiver;
  }
  Object.defineProperty(Checkbox.prototype, 'element', {
    get: function () {
      return this.element_m5dmet$_0;
    }
  });
  Object.defineProperty(Checkbox.prototype, 'isChecked', {
    get: function () {
      return this.element.checked;
    },
    set: function (value) {
      this.element.checked = value;
    }
  });
  Object.defineProperty(Checkbox.prototype, 'onChange', {
    get: function () {
      return this.element.onchange;
    },
    set: function (value) {
      this.element.onchange = value;
    }
  });
  Checkbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checkbox',
    interfaces: [View]
  };
  function Component() {
    this.view_6apaz4$_0 = null;
  }
  Object.defineProperty(Component.prototype, 'initializedView_jtp5wa$_0', {
    get: function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this.view_6apaz4$_0) != null)
        tmp$_0 = tmp$;
      else {
        var $receiver = this.getView_art3zr$(detached);
        $receiver.bind_c4619k$(this);
        tmp$_0 = $receiver;
      }
      var notNullView = tmp$_0;
      if (this.view_6apaz4$_0 == null) {
        this.view_6apaz4$_0 = notNullView;
      }
      return notNullView;
    }
  });
  Component.prototype.addToParent_vqbcdi$ = function (parent) {
    parent != null ? (parent.addChild_3bc3y1$(this.initializedView_jtp5wa$_0), Unit) : null;
  };
  Component.prototype.addToParentAfter_qrl6q5$ = function (parent, referenceView) {
    parent != null ? (parent.addChildAfter_libcmy$(this.initializedView_jtp5wa$_0, referenceView), Unit) : null;
  };
  Component.prototype.removeFromParent_vqbcdi$ = function (parent) {
    var tmp$;
    tmp$ = this.view_6apaz4$_0;
    if (tmp$ == null) {
      return;
    }
    var validView = tmp$;
    parent != null ? (parent.removeChild_3bc3y1$(validView), Unit) : null;
  };
  Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: [LifecycleObserver]
  };
  function page$lambda($receiver) {
    return Unit;
  }
  function page(lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    if (block === void 0)
      block = page$lambda;
    Page_getInstance().prepare();
    visit(Page_getInstance(), lifecycleObserver, block);
  }
  function linearLayout($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new LinearLayout($receiver, null), lifecycleObserver, block);
  }
  function verticalLayout($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new LinearLayout($receiver, LinearLayout$Orientation$Vertical_getInstance()), lifecycleObserver, block);
  }
  function horizontalLayout($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new LinearLayout($receiver, LinearLayout$Orientation$Horizontal_getInstance()), lifecycleObserver, block);
  }
  function horizontalScrollLayout($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new ScrollView($receiver, LinearLayout$Orientation$Horizontal_getInstance()), lifecycleObserver, block);
  }
  function verticalScrollLayout($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new ScrollView($receiver, LinearLayout$Orientation$Vertical_getInstance()), lifecycleObserver, block);
  }
  function view($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new View($receiver), lifecycleObserver, block);
  }
  function a($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Anchor($receiver), lifecycleObserver, block);
  }
  function textView($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TextView($receiver), lifecycleObserver, block);
  }
  function textInput($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TextInput($receiver), lifecycleObserver, block);
  }
  function button($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Button($receiver), lifecycleObserver, block);
  }
  function imageView($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new ImageView($receiver), lifecycleObserver, block);
  }
  function checkbox($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Checkbox($receiver), lifecycleObserver, block);
  }
  function table($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Table($receiver), lifecycleObserver, block);
  }
  function tableHeader($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableHeader($receiver), lifecycleObserver, block);
  }
  function tableBody($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableBody($receiver), lifecycleObserver, block);
  }
  function tableFooter($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableFooter($receiver), lifecycleObserver, block);
  }
  function row($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableRow($receiver), lifecycleObserver, block);
  }
  function row_0($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableRow($receiver), lifecycleObserver, block);
  }
  function row_1($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableRow($receiver), lifecycleObserver, block);
  }
  function row_2($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableRow($receiver), lifecycleObserver, block);
  }
  function cell($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableCell($receiver), lifecycleObserver, block);
  }
  function headerCell($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new TableHeaderCell($receiver), lifecycleObserver, block);
  }
  function form($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Form($receiver), lifecycleObserver, block);
  }
  function fieldSet($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new FieldSet($receiver), lifecycleObserver, block);
  }
  function legend($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Legend($receiver), lifecycleObserver, block);
  }
  function radio($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    return visit(new Radio($receiver), lifecycleObserver, block);
  }
  function ul$lambda($receiver) {
    return Unit;
  }
  function ul($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    if (block === void 0)
      block = null;
    return visit(new UList($receiver), lifecycleObserver, block != null ? block : ul$lambda);
  }
  function li$lambda($receiver) {
    return Unit;
  }
  function li($receiver, lifecycleObserver, block) {
    if (lifecycleObserver === void 0)
      lifecycleObserver = null;
    if (block === void 0)
      block = null;
    return visit(new ListItem($receiver), lifecycleObserver, block != null ? block : li$lambda);
  }
  var detached;
  function Form(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_qci09g$_0 = Kotlin.isType(tmp$ = document.createElement('form'), HTMLFormElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(Form.prototype, 'element', {
    get: function () {
      return this.element_qci09g$_0;
    }
  });
  Form.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Form',
    interfaces: [View]
  };
  function FieldSet(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_xlrfgw$_0 = Kotlin.isType(tmp$ = document.createElement('fieldset'), HTMLFieldSetElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(FieldSet.prototype, 'element', {
    get: function () {
      return this.element_xlrfgw$_0;
    }
  });
  FieldSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldSet',
    interfaces: [View]
  };
  function Legend(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_sz2zzf$_0 = Kotlin.isType(tmp$ = document.createElement('legend'), HTMLLegendElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(Legend.prototype, 'element', {
    get: function () {
      return this.element_sz2zzf$_0;
    }
  });
  Object.defineProperty(Legend.prototype, 'text', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  Legend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Legend',
    interfaces: [View]
  };
  function ImageView(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_r94p0g$_0 = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(ImageView.prototype, 'element', {
    get: function () {
      return this.element_r94p0g$_0;
    }
  });
  ImageView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageView',
    interfaces: [View]
  };
  function Page() {
    Page_instance = this;
    View.call(this, null);
  }
  Page.prototype.mountChild_3bc3y1$ = function (child) {
    var tmp$;
    child.parent = this;
    (tmp$ = document.body) != null ? (tmp$.append(child.element), Unit) : null;
    this.children.add_11rb$(child);
  };
  Page.prototype.removeChild_3bc3y1$ = function (child) {
    var tmp$;
    this.children.remove_11rb$(child);
    (tmp$ = document.body) != null ? tmp$.removeChild(child.element) : null;
    child.parent = null;
  };
  Object.defineProperty(Page.prototype, 'title', {
    get: function () {
      return document.title;
    },
    set: function (value) {
      document.title = value;
    }
  });
  Page.prototype.prepare = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    this.id = 'page';
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.margin = '0') : null;
    (tmp$_2 = (tmp$_1 = document.body) != null ? tmp$_1.style : null) != null ? (tmp$_2.padding = '0') : null;
    (tmp$_4 = (tmp$_3 = document.body) != null ? tmp$_3.style : null) != null ? (tmp$_4.overflowY = 'hidden') : null;
    (tmp$_6 = (tmp$_5 = document.body) != null ? tmp$_5.style : null) != null ? (tmp$_6.overflowX = 'hidden') : null;
    (tmp$_8 = (tmp$_7 = document.body) != null ? tmp$_7.style : null) != null ? (tmp$_8.width = '100vw') : null;
    (tmp$_10 = (tmp$_9 = document.body) != null ? tmp$_9.style : null) != null ? (tmp$_10.height = '100vh') : null;
    (tmp$_11 = document.body) != null ? (clear(tmp$_11), Unit) : null;
  };
  Page.prototype.addRuleSet_mw7j13$ = function (ruleSet) {
    var tmp$;
    var selector = ruleSet.selector;
    if (Kotlin.isType(selector, ClassSelector)) {
      var className = selector.name;
      (tmp$ = document.body) != null ? addClass(tmp$, [className]) : null;
    }
  };
  Page.prototype.addToParent = function () {
  };
  Object.defineProperty(Page.prototype, 'path', {
    get: function () {
      return '/';
    }
  });
  Page.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Page',
    interfaces: [View]
  };
  var Page_instance = null;
  function Page_getInstance() {
    if (Page_instance === null) {
      new Page();
    }
    return Page_instance;
  }
  function Radio(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : throwCCE();
    $receiver.type = 'radio';
    this.element_1imld1$_0 = $receiver;
  }
  Object.defineProperty(Radio.prototype, 'element', {
    get: function () {
      return this.element_1imld1$_0;
    }
  });
  Object.defineProperty(Radio.prototype, 'isChecked', {
    get: function () {
      return this.element.checked;
    },
    set: function (value) {
      this.element.checked = value;
    }
  });
  Object.defineProperty(Radio.prototype, 'onChange', {
    get: function () {
      return this.element.onchange;
    },
    set: function (value) {
      this.element.onchange = value;
    }
  });
  Radio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Radio',
    interfaces: [View]
  };
  function Table(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_53jj66$_0 = Kotlin.isType(tmp$ = document.createElement('table'), HTMLTableElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(Table.prototype, 'element', {
    get: function () {
      return this.element_53jj66$_0;
    }
  });
  Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: [View]
  };
  function TableRow(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_prsu3w$_0 = Kotlin.isType(tmp$ = document.createElement('tr'), HTMLTableRowElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableRow.prototype, 'element', {
    get: function () {
      return this.element_prsu3w$_0;
    }
  });
  TableRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableRow',
    interfaces: [View]
  };
  function TableCell(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_v2k7w0$_0 = Kotlin.isType(tmp$ = document.createElement('td'), HTMLTableCellElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableCell.prototype, 'element', {
    get: function () {
      return this.element_v2k7w0$_0;
    }
  });
  Object.defineProperty(TableCell.prototype, 'text', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  TableCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableCell',
    interfaces: [View]
  };
  function TableHeaderCell(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_bevl7h$_0 = Kotlin.isType(tmp$ = document.createElement('th'), HTMLTableCellElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableHeaderCell.prototype, 'element', {
    get: function () {
      return this.element_bevl7h$_0;
    }
  });
  Object.defineProperty(TableHeaderCell.prototype, 'text', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  TableHeaderCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableHeaderCell',
    interfaces: [View]
  };
  function TableHeader(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_5y397f$_0 = Kotlin.isType(tmp$ = document.createElement('thead'), HTMLTableSectionElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableHeader.prototype, 'element', {
    get: function () {
      return this.element_5y397f$_0;
    }
  });
  TableHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableHeader',
    interfaces: [View]
  };
  function TableFooter(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_v4w0ix$_0 = Kotlin.isType(tmp$ = document.createElement('tfoot'), HTMLTableSectionElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableFooter.prototype, 'element', {
    get: function () {
      return this.element_v4w0ix$_0;
    }
  });
  TableFooter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableFooter',
    interfaces: [View]
  };
  function TableBody(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_vcss40$_0 = Kotlin.isType(tmp$ = document.createElement('tbody'), HTMLTableSectionElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(TableBody.prototype, 'element', {
    get: function () {
      return this.element_vcss40$_0;
    }
  });
  TableBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableBody',
    interfaces: [View]
  };
  function TextInput(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_vu6gxv$_0 = Kotlin.isType(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : throwCCE();
    this.textSize_kim4zd$_0 = null;
    this.textColor_48pofr$_0 = new Color();
  }
  Object.defineProperty(TextInput.prototype, 'element', {
    get: function () {
      return this.element_vu6gxv$_0;
    }
  });
  Object.defineProperty(TextInput.prototype, 'text', {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      this.element.value = value;
    }
  });
  Object.defineProperty(TextInput.prototype, 'placeholder', {
    get: function () {
      return this.element.placeholder;
    },
    set: function (value) {
      this.element.placeholder = value;
    }
  });
  Object.defineProperty(TextInput.prototype, 'type', {
    get: function () {
      return this.element.type;
    },
    set: function (value) {
      this.element.type = value;
    }
  });
  Object.defineProperty(TextInput.prototype, 'textSize', {
    get: function () {
      return this.textSize_kim4zd$_0;
    },
    set: function (value) {
      this.textSize_kim4zd$_0 = value;
      if (value != null) {
        this.element.style.fontSize = value.toString();
      }
    }
  });
  Object.defineProperty(TextInput.prototype, 'textColor', {
    get: function () {
      return this.textColor_48pofr$_0;
    },
    set: function (value) {
      this.textColor_48pofr$_0 = value;
      this.element.style.color = value.toCss();
    }
  });
  Object.defineProperty(TextInput.prototype, 'onChange', {
    get: function () {
      return this.element.onchange;
    },
    set: function (value) {
      this.element.onchange = value;
    }
  });
  TextInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextInput',
    interfaces: [View]
  };
  function TextView(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
  }
  Object.defineProperty(TextView.prototype, 'text', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  TextView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextView',
    interfaces: [View]
  };
  function UList(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_bbyqz7$_0 = Kotlin.isType(tmp$ = document.createElement('ul'), HTMLUListElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(UList.prototype, 'element', {
    get: function () {
      return this.element_bbyqz7$_0;
    }
  });
  UList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UList',
    interfaces: [View]
  };
  function ListItem(parent) {
    if (parent === void 0)
      parent = null;
    View.call(this, parent);
    var tmp$;
    this.element_yzjko7$_0 = Kotlin.isType(tmp$ = document.createElement('li'), HTMLLIElement) ? tmp$ : throwCCE();
  }
  Object.defineProperty(ListItem.prototype, 'element', {
    get: function () {
      return this.element_yzjko7$_0;
    }
  });
  ListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListItem',
    interfaces: [View]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function View(parent) {
    View$Companion_getInstance();
    if (parent === void 0)
      parent = null;
    this.parent = parent;
    var tmp$;
    this.element_5m5ez7$_0 = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    this.lifecycleObserversList_vi34z0$_0 = ArrayList_init();
    this.lastLifecycleEvent_308r9b$_0 = null;
    this.isVisible_1i09yf$_0 = true;
    this.children = ArrayList_init();
  }
  Object.defineProperty(View.prototype, 'id', {
    get: function () {
      return this.element.id;
    },
    set: function (value) {
      if (value != null) {
        this.element.id = value;
      }
    }
  });
  Object.defineProperty(View.prototype, 'element', {
    get: function () {
      return this.element_5m5ez7$_0;
    }
  });
  Object.defineProperty(View.prototype, 'lastLifecycleEvent', {
    get: function () {
      return this.lastLifecycleEvent_308r9b$_0;
    },
    set: function (lastLifecycleEvent) {
      this.lastLifecycleEvent_308r9b$_0 = lastLifecycleEvent;
    }
  });
  View.prototype.postViewWillMount_8be2vx$ = function () {
    this.lastLifecycleEvent = LifecycleEvent$ViewWillMount_getInstance();
    var tmp$;
    tmp$ = this.lifecycleObserversList_vi34z0$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.viewWillMount_1xffwv$(this);
    }
  };
  View.prototype.postOnViewMounted_8be2vx$ = function () {
    this.lastLifecycleEvent = LifecycleEvent$ViewMounted_getInstance();
    var tmp$;
    tmp$ = this.lifecycleObserversList_vi34z0$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onViewMounted_1xffwv$(this);
    }
  };
  View.prototype.postViewWillBeRemoved_inoweh$_0 = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.postViewWillBeRemoved_inoweh$_0();
    }
    this.lastLifecycleEvent = LifecycleEvent$ViewWillBeRemoved_getInstance();
  };
  View.prototype.postOnViewRemoved_f95o3$_0 = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.postOnViewRemoved_f95o3$_0();
    }
    this.lastLifecycleEvent = LifecycleEvent$ViewRemoved_getInstance();
  };
  View.prototype.bind_c4619k$ = function (lifecycleObserver) {
    if (this.lifecycleObserversList_vi34z0$_0.contains_11rb$(lifecycleObserver)) {
      return;
    }
    this.lifecycleObserversList_vi34z0$_0.add_11rb$(lifecycleObserver);
  };
  Object.defineProperty(View.prototype, 'isVisible', {
    get: function () {
      return this.isVisible_1i09yf$_0;
    },
    set: function (value) {
      this.isVisible_1i09yf$_0 = value;
      if (value === true)
        this.removeRuleSet_mw7j13$(View$Companion_getInstance().invisibleClass);
      else if (value === false)
        this.addRuleSet_mw7j13$(View$Companion_getInstance().invisibleClass);
    }
  });
  Object.defineProperty(View.prototype, 'onClick', {
    get: function () {
      return this.element.onclick;
    },
    set: function (value) {
      this.element.onclick = value;
    }
  });
  View.prototype.configureElement = function () {
    this.addRuleSet_mw7j13$(View$Companion_getInstance().baseClass);
  };
  View.prototype.style_cjs1gm$ = function (rules) {
    var ruleSet = classRuleSet(null, rules);
    this.addRuleSet_mw7j13$(ruleSet);
    return ruleSet;
  };
  View.prototype.addRuleSet_mw7j13$ = function (ruleSet) {
    var selector = ruleSet.selector;
    if (Kotlin.isType(selector, ClassSelector)) {
      var className = selector.name;
      addClass(this.element, [className]);
    }
  };
  View.prototype.removeRuleSet_mw7j13$ = function (ruleSet) {
    var selector = ruleSet.selector;
    if (Kotlin.isType(selector, ClassSelector)) {
      var className = selector.name;
      removeClass(this.element, [className]);
    }
  };
  function View$Companion() {
    View$Companion_instance = this;
    this.baseClass = classRuleSet(void 0, View$Companion$baseClass$lambda);
    this.invisibleClass = classRuleSet(void 0, View$Companion$invisibleClass$lambda);
  }
  function View$Companion$baseClass$lambda($receiver) {
    set_boxSizing($receiver, 'border-box');
    set_margin($receiver, '0px');
    set_padding($receiver, '0px');
    set_flexShrink($receiver, '0');
    return Unit;
  }
  function View$Companion$invisibleClass$lambda($receiver) {
    set_display($receiver, 'none !important');
    return Unit;
  }
  View$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var View$Companion_instance = null;
  function View$Companion_getInstance() {
    if (View$Companion_instance === null) {
      new View$Companion();
    }
    return View$Companion_instance;
  }
  Object.defineProperty(View.prototype, 'path', {
    get: function () {
      var tmp$;
      return (tmp$ = this.parent) != null ? tmp$.path : null;
    }
  });
  View.prototype.addChild_3bc3y1$ = function (child) {
    child.postViewWillMount_8be2vx$();
    this.mountChild_3bc3y1$(child);
    child.postOnViewMounted_8be2vx$();
  };
  View.prototype.addChildAfter_libcmy$ = function (child, referenceNode) {
    child.postViewWillMount_8be2vx$();
    this.mountChildAfter_libcmy$(child, referenceNode);
    child.postOnViewMounted_8be2vx$();
  };
  View.prototype.addToParent = function () {
    var tmp$;
    (tmp$ = this.parent) != null ? (tmp$.mountChild_3bc3y1$(this), Unit) : null;
  };
  View.prototype.mountChild_3bc3y1$ = function (child) {
    this.element.append(child.element);
    child.parent = this;
    this.children.add_11rb$(child);
  };
  View.prototype.mountChildAfter_libcmy$ = function (child, referenceNode) {
    this.element.insertBefore(child.element, referenceNode.element.nextSibling);
    child.parent = this;
    this.children.add_11rb$(child);
  };
  View.prototype.removeChild_3bc3y1$ = function (child) {
    if (!this.children.contains_11rb$(child)) {
      return;
    }
    child.postViewWillBeRemoved_inoweh$_0();
    this.children.remove_11rb$(child);
    if (this.element.contains(child.element)) {
      this.element.removeChild(child.element);
    }
    child.parent = null;
    child.postOnViewRemoved_f95o3$_0();
  };
  View.prototype.clearAllChildren = function () {
    var tmp$;
    var tmp$_0;
    tmp$_0 = this.children.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.postViewWillBeRemoved_inoweh$_0();
    }
    while (this.element.firstChild != null) {
      if ((tmp$ = this.element.firstChild) != null) {
        this.element.removeChild(tmp$);
      }
    }
    var tmp$_1;
    tmp$_1 = this.children.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      element_0.postOnViewRemoved_f95o3$_0();
      this.children.remove_11rb$(element_0);
    }
  };
  View.prototype.mount_7bau7r$ = function (component) {
    component.addToParent_vqbcdi$(this);
    return component;
  };
  View.prototype.mountAfter_6ftq4c$ = function (component, referenceView) {
    component.addToParentAfter_qrl6q5$(this, referenceView);
    return component;
  };
  View.prototype.unMount_7bau7r$ = function (component) {
    component.removeFromParent_vqbcdi$(this);
    return component;
  };
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [LifecycleOwner]
  };
  function LinearLayout(parent, initialOrientation) {
    LinearLayout$Companion_getInstance();
    if (initialOrientation === void 0)
      initialOrientation = LinearLayout$Orientation$Horizontal_getInstance();
    View.call(this, parent);
    this.initialOrientation_le0ev5$_0 = initialOrientation;
  }
  LinearLayout.prototype.configureElement = function () {
    View.prototype.configureElement.call(this);
    if (equals(this.initialOrientation_le0ev5$_0, LinearLayout$Orientation$Horizontal_getInstance())) {
      this.addRuleSet_mw7j13$(LinearLayout$Companion_getInstance().horizontalLayoutClass);
    }
     else {
      this.addRuleSet_mw7j13$(LinearLayout$Companion_getInstance().verticalLayoutClass);
    }
    this.addRuleSet_mw7j13$(LinearLayout$Companion_getInstance().linearLayoutClass);
  };
  function LinearLayout$Orientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LinearLayout$Orientation_initFields() {
    LinearLayout$Orientation_initFields = function () {
    };
    LinearLayout$Orientation$Horizontal_instance = new LinearLayout$Orientation('Horizontal', 0);
    LinearLayout$Orientation$Vertical_instance = new LinearLayout$Orientation('Vertical', 1);
  }
  var LinearLayout$Orientation$Horizontal_instance;
  function LinearLayout$Orientation$Horizontal_getInstance() {
    LinearLayout$Orientation_initFields();
    return LinearLayout$Orientation$Horizontal_instance;
  }
  var LinearLayout$Orientation$Vertical_instance;
  function LinearLayout$Orientation$Vertical_getInstance() {
    LinearLayout$Orientation_initFields();
    return LinearLayout$Orientation$Vertical_instance;
  }
  LinearLayout$Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function LinearLayout$Orientation$values() {
    return [LinearLayout$Orientation$Horizontal_getInstance(), LinearLayout$Orientation$Vertical_getInstance()];
  }
  LinearLayout$Orientation.values = LinearLayout$Orientation$values;
  function LinearLayout$Orientation$valueOf(name) {
    switch (name) {
      case 'Horizontal':
        return LinearLayout$Orientation$Horizontal_getInstance();
      case 'Vertical':
        return LinearLayout$Orientation$Vertical_getInstance();
      default:throwISE('No enum constant com.narbase.kunafa.core.components.layout.LinearLayout.Orientation.' + name);
    }
  }
  LinearLayout$Orientation.valueOf_61zpoe$ = LinearLayout$Orientation$valueOf;
  function LinearLayout$Companion() {
    LinearLayout$Companion_instance = this;
    this.linearLayoutClass = classRuleSet(void 0, LinearLayout$Companion$linearLayoutClass$lambda);
    this.verticalLayoutClass = classRuleSet(void 0, LinearLayout$Companion$verticalLayoutClass$lambda);
    this.horizontalLayoutClass = classRuleSet(void 0, LinearLayout$Companion$horizontalLayoutClass$lambda);
  }
  function LinearLayout$Companion$linearLayoutClass$lambda($receiver) {
    set_alignItems($receiver, Alignment$Companion_getInstance().Start);
    set_display($receiver, 'inline-flex');
    return Unit;
  }
  function LinearLayout$Companion$verticalLayoutClass$lambda($receiver) {
    set_flexDirection($receiver, 'column');
    return Unit;
  }
  function LinearLayout$Companion$horizontalLayoutClass$lambda($receiver) {
    set_flexDirection($receiver, 'row');
    return Unit;
  }
  LinearLayout$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinearLayout$Companion_instance = null;
  function LinearLayout$Companion_getInstance() {
    if (LinearLayout$Companion_instance === null) {
      new LinearLayout$Companion();
    }
    return LinearLayout$Companion_instance;
  }
  LinearLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearLayout',
    interfaces: [View]
  };
  function ScrollView(parent, initialOrientation) {
    ScrollView$Companion_getInstance();
    LinearLayout.call(this, parent, initialOrientation);
    this.initialOrientation_0 = initialOrientation;
  }
  ScrollView.prototype.configureElement = function () {
    LinearLayout.prototype.configureElement.call(this);
    if (equals(this.initialOrientation_0, LinearLayout$Orientation$Horizontal_getInstance())) {
      this.addRuleSet_mw7j13$(ScrollView$Companion_getInstance().horizontalScrollLayoutClass);
    }
     else {
      this.addRuleSet_mw7j13$(ScrollView$Companion_getInstance().verticalScrollLayoutClass);
    }
  };
  function ScrollView$Companion() {
    ScrollView$Companion_instance = this;
    this.verticalScrollLayoutClass = classRuleSet(void 0, ScrollView$Companion$verticalScrollLayoutClass$lambda);
    this.horizontalScrollLayoutClass = classRuleSet(void 0, ScrollView$Companion$horizontalScrollLayoutClass$lambda);
  }
  function ScrollView$Companion$verticalScrollLayoutClass$lambda($receiver) {
    set_isScrollableVertically($receiver, true);
    set_isScrollableHorizontally($receiver, false);
    return Unit;
  }
  function ScrollView$Companion$horizontalScrollLayoutClass$lambda($receiver) {
    set_isScrollableHorizontally($receiver, true);
    set_isScrollableVertically($receiver, false);
    return Unit;
  }
  ScrollView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScrollView$Companion_instance = null;
  function ScrollView$Companion_getInstance() {
    if (ScrollView$Companion_instance === null) {
      new ScrollView$Companion();
    }
    return ScrollView$Companion_instance;
  }
  ScrollView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollView',
    interfaces: [LinearLayout]
  };
  function visit($receiver, lifecycleObserver, setup) {
    if (lifecycleObserver != null) {
      $receiver.bind_c4619k$(lifecycleObserver);
    }
    $receiver.postViewWillMount_8be2vx$();
    $receiver.configureElement();
    setup($receiver);
    $receiver.addToParent();
    $receiver.postOnViewMounted_8be2vx$();
    return $receiver;
  }
  function ClassNameGenerator() {
    ClassNameGenerator_instance = this;
    this.counter_0 = 0;
  }
  ClassNameGenerator.prototype.getClassName_pdl1vj$ = function (name) {
    if (name === void 0)
      name = null;
    var tmp$, tmp$_0;
    return name == null ? 'c-' + (tmp$ = this.counter_0, this.counter_0 = tmp$ + 1 | 0, tmp$) : toString(name) + '-' + (tmp$_0 = this.counter_0, this.counter_0 = tmp$_0 + 1 | 0, tmp$_0);
  };
  ClassNameGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ClassNameGenerator',
    interfaces: []
  };
  var ClassNameGenerator_instance = null;
  function ClassNameGenerator_getInstance() {
    if (ClassNameGenerator_instance === null) {
      new ClassNameGenerator();
    }
    return ClassNameGenerator_instance;
  }
  var color;
  var color_metadata = new PropertyMetadata('color');
  function get_color($receiver) {
    return color.getValue_vm3wpz$($receiver, color_metadata);
  }
  function set_color($receiver, color_0) {
    color.setValue_kbwfbo$($receiver, color_metadata, color_0);
  }
  var opacity;
  var opacity_metadata = new PropertyMetadata('opacity');
  function get_opacity($receiver) {
    return opacity.getValue_vm3wpz$($receiver, opacity_metadata);
  }
  function set_opacity($receiver, opacity_0) {
    opacity.setValue_kbwfbo$($receiver, opacity_metadata, opacity_0);
  }
  var background;
  var background_metadata = new PropertyMetadata('background');
  function get_background($receiver) {
    return background.getValue_vm3wpz$($receiver, background_metadata);
  }
  function set_background($receiver, background_0) {
    background.setValue_kbwfbo$($receiver, background_metadata, background_0);
  }
  var backgroundAttachment;
  var backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  function get_backgroundAttachment($receiver) {
    return backgroundAttachment.getValue_vm3wpz$($receiver, backgroundAttachment_metadata);
  }
  function set_backgroundAttachment($receiver, backgroundAttachment_0) {
    backgroundAttachment.setValue_kbwfbo$($receiver, backgroundAttachment_metadata, backgroundAttachment_0);
  }
  var backgroundBlendMode;
  var backgroundBlendMode_metadata = new PropertyMetadata('backgroundBlendMode');
  function get_backgroundBlendMode($receiver) {
    return backgroundBlendMode.getValue_vm3wpz$($receiver, backgroundBlendMode_metadata);
  }
  function set_backgroundBlendMode($receiver, backgroundBlendMode_0) {
    backgroundBlendMode.setValue_kbwfbo$($receiver, backgroundBlendMode_metadata, backgroundBlendMode_0);
  }
  var backgroundColor;
  var backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  function get_backgroundColor($receiver) {
    return backgroundColor.getValue_vm3wpz$($receiver, backgroundColor_metadata);
  }
  function set_backgroundColor($receiver, backgroundColor_0) {
    backgroundColor.setValue_kbwfbo$($receiver, backgroundColor_metadata, backgroundColor_0);
  }
  var backgroundImage;
  var backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  function get_backgroundImage($receiver) {
    return backgroundImage.getValue_vm3wpz$($receiver, backgroundImage_metadata);
  }
  function set_backgroundImage($receiver, backgroundImage_0) {
    backgroundImage.setValue_kbwfbo$($receiver, backgroundImage_metadata, backgroundImage_0);
  }
  var backgroundPosition;
  var backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  function get_backgroundPosition($receiver) {
    return backgroundPosition.getValue_vm3wpz$($receiver, backgroundPosition_metadata);
  }
  function set_backgroundPosition($receiver, backgroundPosition_0) {
    backgroundPosition.setValue_kbwfbo$($receiver, backgroundPosition_metadata, backgroundPosition_0);
  }
  var backgroundRepeat;
  var backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  function get_backgroundRepeat($receiver) {
    return backgroundRepeat.getValue_vm3wpz$($receiver, backgroundRepeat_metadata);
  }
  function set_backgroundRepeat($receiver, backgroundRepeat_0) {
    backgroundRepeat.setValue_kbwfbo$($receiver, backgroundRepeat_metadata, backgroundRepeat_0);
  }
  var backgroundClip;
  var backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  function get_backgroundClip($receiver) {
    return backgroundClip.getValue_vm3wpz$($receiver, backgroundClip_metadata);
  }
  function set_backgroundClip($receiver, backgroundClip_0) {
    backgroundClip.setValue_kbwfbo$($receiver, backgroundClip_metadata, backgroundClip_0);
  }
  var backgroundOrigin;
  var backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  function get_backgroundOrigin($receiver) {
    return backgroundOrigin.getValue_vm3wpz$($receiver, backgroundOrigin_metadata);
  }
  function set_backgroundOrigin($receiver, backgroundOrigin_0) {
    backgroundOrigin.setValue_kbwfbo$($receiver, backgroundOrigin_metadata, backgroundOrigin_0);
  }
  var backgroundSize;
  var backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  function get_backgroundSize($receiver) {
    return backgroundSize.getValue_vm3wpz$($receiver, backgroundSize_metadata);
  }
  function set_backgroundSize($receiver, backgroundSize_0) {
    backgroundSize.setValue_kbwfbo$($receiver, backgroundSize_metadata, backgroundSize_0);
  }
  var border;
  var border_metadata = new PropertyMetadata('border');
  function get_border($receiver) {
    return border.getValue_vm3wpz$($receiver, border_metadata);
  }
  function set_border($receiver, border_0) {
    border.setValue_kbwfbo$($receiver, border_metadata, border_0);
  }
  var borderBottom;
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  function get_borderBottom($receiver) {
    return borderBottom.getValue_vm3wpz$($receiver, borderBottom_metadata);
  }
  function set_borderBottom($receiver, borderBottom_0) {
    borderBottom.setValue_kbwfbo$($receiver, borderBottom_metadata, borderBottom_0);
  }
  var borderBottomColor;
  var borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  function get_borderBottomColor($receiver) {
    return borderBottomColor.getValue_vm3wpz$($receiver, borderBottomColor_metadata);
  }
  function set_borderBottomColor($receiver, borderBottomColor_0) {
    borderBottomColor.setValue_kbwfbo$($receiver, borderBottomColor_metadata, borderBottomColor_0);
  }
  var borderBottomLeftRadius;
  var borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  function get_borderBottomLeftRadius($receiver) {
    return borderBottomLeftRadius.getValue_vm3wpz$($receiver, borderBottomLeftRadius_metadata);
  }
  function set_borderBottomLeftRadius($receiver, borderBottomLeftRadius_0) {
    borderBottomLeftRadius.setValue_kbwfbo$($receiver, borderBottomLeftRadius_metadata, borderBottomLeftRadius_0);
  }
  var borderBottomRightRadius;
  var borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  function get_borderBottomRightRadius($receiver) {
    return borderBottomRightRadius.getValue_vm3wpz$($receiver, borderBottomRightRadius_metadata);
  }
  function set_borderBottomRightRadius($receiver, borderBottomRightRadius_0) {
    borderBottomRightRadius.setValue_kbwfbo$($receiver, borderBottomRightRadius_metadata, borderBottomRightRadius_0);
  }
  var borderBottomStyle;
  var borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  function get_borderBottomStyle($receiver) {
    return borderBottomStyle.getValue_vm3wpz$($receiver, borderBottomStyle_metadata);
  }
  function set_borderBottomStyle($receiver, borderBottomStyle_0) {
    borderBottomStyle.setValue_kbwfbo$($receiver, borderBottomStyle_metadata, borderBottomStyle_0);
  }
  var borderBottomWidth;
  var borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  function get_borderBottomWidth($receiver) {
    return borderBottomWidth.getValue_vm3wpz$($receiver, borderBottomWidth_metadata);
  }
  function set_borderBottomWidth($receiver, borderBottomWidth_0) {
    borderBottomWidth.setValue_kbwfbo$($receiver, borderBottomWidth_metadata, borderBottomWidth_0);
  }
  var borderColor;
  var borderColor_metadata = new PropertyMetadata('borderColor');
  function get_borderColor($receiver) {
    return borderColor.getValue_vm3wpz$($receiver, borderColor_metadata);
  }
  function set_borderColor($receiver, borderColor_0) {
    borderColor.setValue_kbwfbo$($receiver, borderColor_metadata, borderColor_0);
  }
  var borderImage;
  var borderImage_metadata = new PropertyMetadata('borderImage');
  function get_borderImage($receiver) {
    return borderImage.getValue_vm3wpz$($receiver, borderImage_metadata);
  }
  function set_borderImage($receiver, borderImage_0) {
    borderImage.setValue_kbwfbo$($receiver, borderImage_metadata, borderImage_0);
  }
  var borderImageOutset;
  var borderImageOutset_metadata = new PropertyMetadata('borderImageOutset');
  function get_borderImageOutset($receiver) {
    return borderImageOutset.getValue_vm3wpz$($receiver, borderImageOutset_metadata);
  }
  function set_borderImageOutset($receiver, borderImageOutset_0) {
    borderImageOutset.setValue_kbwfbo$($receiver, borderImageOutset_metadata, borderImageOutset_0);
  }
  var borderImageRepeat;
  var borderImageRepeat_metadata = new PropertyMetadata('borderImageRepeat');
  function get_borderImageRepeat($receiver) {
    return borderImageRepeat.getValue_vm3wpz$($receiver, borderImageRepeat_metadata);
  }
  function set_borderImageRepeat($receiver, borderImageRepeat_0) {
    borderImageRepeat.setValue_kbwfbo$($receiver, borderImageRepeat_metadata, borderImageRepeat_0);
  }
  var borderImageSlice;
  var borderImageSlice_metadata = new PropertyMetadata('borderImageSlice');
  function get_borderImageSlice($receiver) {
    return borderImageSlice.getValue_vm3wpz$($receiver, borderImageSlice_metadata);
  }
  function set_borderImageSlice($receiver, borderImageSlice_0) {
    borderImageSlice.setValue_kbwfbo$($receiver, borderImageSlice_metadata, borderImageSlice_0);
  }
  var borderImageSource;
  var borderImageSource_metadata = new PropertyMetadata('borderImageSource');
  function get_borderImageSource($receiver) {
    return borderImageSource.getValue_vm3wpz$($receiver, borderImageSource_metadata);
  }
  function set_borderImageSource($receiver, borderImageSource_0) {
    borderImageSource.setValue_kbwfbo$($receiver, borderImageSource_metadata, borderImageSource_0);
  }
  var borderImageWidth;
  var borderImageWidth_metadata = new PropertyMetadata('borderImageWidth');
  function get_borderImageWidth($receiver) {
    return borderImageWidth.getValue_vm3wpz$($receiver, borderImageWidth_metadata);
  }
  function set_borderImageWidth($receiver, borderImageWidth_0) {
    borderImageWidth.setValue_kbwfbo$($receiver, borderImageWidth_metadata, borderImageWidth_0);
  }
  var borderLeft;
  var borderLeft_metadata = new PropertyMetadata('borderLeft');
  function get_borderLeft($receiver) {
    return borderLeft.getValue_vm3wpz$($receiver, borderLeft_metadata);
  }
  function set_borderLeft($receiver, borderLeft_0) {
    borderLeft.setValue_kbwfbo$($receiver, borderLeft_metadata, borderLeft_0);
  }
  var borderLeftColor;
  var borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  function get_borderLeftColor($receiver) {
    return borderLeftColor.getValue_vm3wpz$($receiver, borderLeftColor_metadata);
  }
  function set_borderLeftColor($receiver, borderLeftColor_0) {
    borderLeftColor.setValue_kbwfbo$($receiver, borderLeftColor_metadata, borderLeftColor_0);
  }
  var borderLeftStyle;
  var borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  function get_borderLeftStyle($receiver) {
    return borderLeftStyle.getValue_vm3wpz$($receiver, borderLeftStyle_metadata);
  }
  function set_borderLeftStyle($receiver, borderLeftStyle_0) {
    borderLeftStyle.setValue_kbwfbo$($receiver, borderLeftStyle_metadata, borderLeftStyle_0);
  }
  var borderLeftWidth;
  var borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  function get_borderLeftWidth($receiver) {
    return borderLeftWidth.getValue_vm3wpz$($receiver, borderLeftWidth_metadata);
  }
  function set_borderLeftWidth($receiver, borderLeftWidth_0) {
    borderLeftWidth.setValue_kbwfbo$($receiver, borderLeftWidth_metadata, borderLeftWidth_0);
  }
  var borderRadius;
  var borderRadius_metadata = new PropertyMetadata('borderRadius');
  function get_borderRadius($receiver) {
    return borderRadius.getValue_vm3wpz$($receiver, borderRadius_metadata);
  }
  function set_borderRadius($receiver, borderRadius_0) {
    borderRadius.setValue_kbwfbo$($receiver, borderRadius_metadata, borderRadius_0);
  }
  var borderRight;
  var borderRight_metadata = new PropertyMetadata('borderRight');
  function get_borderRight($receiver) {
    return borderRight.getValue_vm3wpz$($receiver, borderRight_metadata);
  }
  function set_borderRight($receiver, borderRight_0) {
    borderRight.setValue_kbwfbo$($receiver, borderRight_metadata, borderRight_0);
  }
  var borderRightColor;
  var borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  function get_borderRightColor($receiver) {
    return borderRightColor.getValue_vm3wpz$($receiver, borderRightColor_metadata);
  }
  function set_borderRightColor($receiver, borderRightColor_0) {
    borderRightColor.setValue_kbwfbo$($receiver, borderRightColor_metadata, borderRightColor_0);
  }
  var borderRightStyle;
  var borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  function get_borderRightStyle($receiver) {
    return borderRightStyle.getValue_vm3wpz$($receiver, borderRightStyle_metadata);
  }
  function set_borderRightStyle($receiver, borderRightStyle_0) {
    borderRightStyle.setValue_kbwfbo$($receiver, borderRightStyle_metadata, borderRightStyle_0);
  }
  var borderRightWidth;
  var borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  function get_borderRightWidth($receiver) {
    return borderRightWidth.getValue_vm3wpz$($receiver, borderRightWidth_metadata);
  }
  function set_borderRightWidth($receiver, borderRightWidth_0) {
    borderRightWidth.setValue_kbwfbo$($receiver, borderRightWidth_metadata, borderRightWidth_0);
  }
  var borderStyle;
  var borderStyle_metadata = new PropertyMetadata('borderStyle');
  function get_borderStyle($receiver) {
    return borderStyle.getValue_vm3wpz$($receiver, borderStyle_metadata);
  }
  function set_borderStyle($receiver, borderStyle_0) {
    borderStyle.setValue_kbwfbo$($receiver, borderStyle_metadata, borderStyle_0);
  }
  var borderTop;
  var borderTop_metadata = new PropertyMetadata('borderTop');
  function get_borderTop($receiver) {
    return borderTop.getValue_vm3wpz$($receiver, borderTop_metadata);
  }
  function set_borderTop($receiver, borderTop_0) {
    borderTop.setValue_kbwfbo$($receiver, borderTop_metadata, borderTop_0);
  }
  var borderTopColor;
  var borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  function get_borderTopColor($receiver) {
    return borderTopColor.getValue_vm3wpz$($receiver, borderTopColor_metadata);
  }
  function set_borderTopColor($receiver, borderTopColor_0) {
    borderTopColor.setValue_kbwfbo$($receiver, borderTopColor_metadata, borderTopColor_0);
  }
  var borderTopLeftRadius;
  var borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  function get_borderTopLeftRadius($receiver) {
    return borderTopLeftRadius.getValue_vm3wpz$($receiver, borderTopLeftRadius_metadata);
  }
  function set_borderTopLeftRadius($receiver, borderTopLeftRadius_0) {
    borderTopLeftRadius.setValue_kbwfbo$($receiver, borderTopLeftRadius_metadata, borderTopLeftRadius_0);
  }
  var borderTopRightRadius;
  var borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  function get_borderTopRightRadius($receiver) {
    return borderTopRightRadius.getValue_vm3wpz$($receiver, borderTopRightRadius_metadata);
  }
  function set_borderTopRightRadius($receiver, borderTopRightRadius_0) {
    borderTopRightRadius.setValue_kbwfbo$($receiver, borderTopRightRadius_metadata, borderTopRightRadius_0);
  }
  var borderTopStyle;
  var borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  function get_borderTopStyle($receiver) {
    return borderTopStyle.getValue_vm3wpz$($receiver, borderTopStyle_metadata);
  }
  function set_borderTopStyle($receiver, borderTopStyle_0) {
    borderTopStyle.setValue_kbwfbo$($receiver, borderTopStyle_metadata, borderTopStyle_0);
  }
  var borderTopWidth;
  var borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  function get_borderTopWidth($receiver) {
    return borderTopWidth.getValue_vm3wpz$($receiver, borderTopWidth_metadata);
  }
  function set_borderTopWidth($receiver, borderTopWidth_0) {
    borderTopWidth.setValue_kbwfbo$($receiver, borderTopWidth_metadata, borderTopWidth_0);
  }
  var borderWidth;
  var borderWidth_metadata = new PropertyMetadata('borderWidth');
  function get_borderWidth($receiver) {
    return borderWidth.getValue_vm3wpz$($receiver, borderWidth_metadata);
  }
  function set_borderWidth($receiver, borderWidth_0) {
    borderWidth.setValue_kbwfbo$($receiver, borderWidth_metadata, borderWidth_0);
  }
  var boxDecorationBreak;
  var boxDecorationBreak_metadata = new PropertyMetadata('boxDecorationBreak');
  function get_boxDecorationBreak($receiver) {
    return boxDecorationBreak.getValue_vm3wpz$($receiver, boxDecorationBreak_metadata);
  }
  function set_boxDecorationBreak($receiver, boxDecorationBreak_0) {
    boxDecorationBreak.setValue_kbwfbo$($receiver, boxDecorationBreak_metadata, boxDecorationBreak_0);
  }
  var boxShadow;
  var boxShadow_metadata = new PropertyMetadata('boxShadow');
  function get_boxShadow($receiver) {
    return boxShadow.getValue_vm3wpz$($receiver, boxShadow_metadata);
  }
  function set_boxShadow($receiver, boxShadow_0) {
    boxShadow.setValue_kbwfbo$($receiver, boxShadow_metadata, boxShadow_0);
  }
  var bottom;
  var bottom_metadata = new PropertyMetadata('bottom');
  function get_bottom($receiver) {
    return bottom.getValue_vm3wpz$($receiver, bottom_metadata);
  }
  function set_bottom($receiver, bottom_0) {
    bottom.setValue_kbwfbo$($receiver, bottom_metadata, bottom_0);
  }
  var clear_0;
  var clear_metadata = new PropertyMetadata('clear');
  function get_clear($receiver) {
    return clear_0.getValue_vm3wpz$($receiver, clear_metadata);
  }
  function set_clear($receiver, clear) {
    clear_0.setValue_kbwfbo$($receiver, clear_metadata, clear);
  }
  var clip;
  var clip_metadata = new PropertyMetadata('clip');
  function get_clip($receiver) {
    return clip.getValue_vm3wpz$($receiver, clip_metadata);
  }
  function set_clip($receiver, clip_0) {
    clip.setValue_kbwfbo$($receiver, clip_metadata, clip_0);
  }
  var display;
  var display_metadata = new PropertyMetadata('display');
  function get_display($receiver) {
    return display.getValue_vm3wpz$($receiver, display_metadata);
  }
  function set_display($receiver, display_0) {
    display.setValue_kbwfbo$($receiver, display_metadata, display_0);
  }
  var float;
  var float_metadata = new PropertyMetadata('float');
  function get_float($receiver) {
    return float.getValue_vm3wpz$($receiver, float_metadata);
  }
  function set_float($receiver, float_0) {
    float.setValue_kbwfbo$($receiver, float_metadata, float_0);
  }
  var height;
  var height_metadata = new PropertyMetadata('height');
  function get_height($receiver) {
    return height.getValue_vm3wpz$($receiver, height_metadata);
  }
  function set_height($receiver, height_0) {
    height.setValue_s6fbwj$($receiver, height_metadata, height_0);
  }
  var left;
  var left_metadata = new PropertyMetadata('left');
  function get_left($receiver) {
    return left.getValue_vm3wpz$($receiver, left_metadata);
  }
  function set_left($receiver, left_0) {
    left.setValue_kbwfbo$($receiver, left_metadata, left_0);
  }
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  function get_margin($receiver) {
    return margin.getValue_vm3wpz$($receiver, margin_metadata);
  }
  function set_margin($receiver, margin_0) {
    margin.setValue_kbwfbo$($receiver, margin_metadata, margin_0);
  }
  var marginBottom;
  var marginBottom_metadata = new PropertyMetadata('marginBottom');
  function get_marginBottom($receiver) {
    return marginBottom.getValue_vm3wpz$($receiver, marginBottom_metadata);
  }
  function set_marginBottom($receiver, marginBottom_0) {
    marginBottom.setValue_kbwfbo$($receiver, marginBottom_metadata, marginBottom_0);
  }
  var marginLeft;
  var marginLeft_metadata = new PropertyMetadata('marginLeft');
  function get_marginLeft($receiver) {
    return marginLeft.getValue_vm3wpz$($receiver, marginLeft_metadata);
  }
  function set_marginLeft($receiver, marginLeft_0) {
    marginLeft.setValue_kbwfbo$($receiver, marginLeft_metadata, marginLeft_0);
  }
  var marginRight;
  var marginRight_metadata = new PropertyMetadata('marginRight');
  function get_marginRight($receiver) {
    return marginRight.getValue_vm3wpz$($receiver, marginRight_metadata);
  }
  function set_marginRight($receiver, marginRight_0) {
    marginRight.setValue_kbwfbo$($receiver, marginRight_metadata, marginRight_0);
  }
  var marginTop;
  var marginTop_metadata = new PropertyMetadata('marginTop');
  function get_marginTop($receiver) {
    return marginTop.getValue_vm3wpz$($receiver, marginTop_metadata);
  }
  function set_marginTop($receiver, marginTop_0) {
    marginTop.setValue_kbwfbo$($receiver, marginTop_metadata, marginTop_0);
  }
  var maxHeight;
  var maxHeight_metadata = new PropertyMetadata('maxHeight');
  function get_maxHeight($receiver) {
    return maxHeight.getValue_vm3wpz$($receiver, maxHeight_metadata);
  }
  function set_maxHeight($receiver, maxHeight_0) {
    maxHeight.setValue_s6fbwj$($receiver, maxHeight_metadata, maxHeight_0);
  }
  var maxWidth;
  var maxWidth_metadata = new PropertyMetadata('maxWidth');
  function get_maxWidth($receiver) {
    return maxWidth.getValue_vm3wpz$($receiver, maxWidth_metadata);
  }
  function set_maxWidth($receiver, maxWidth_0) {
    maxWidth.setValue_s6fbwj$($receiver, maxWidth_metadata, maxWidth_0);
  }
  var minHeight;
  var minHeight_metadata = new PropertyMetadata('minHeight');
  function get_minHeight($receiver) {
    return minHeight.getValue_vm3wpz$($receiver, minHeight_metadata);
  }
  function set_minHeight($receiver, minHeight_0) {
    minHeight.setValue_s6fbwj$($receiver, minHeight_metadata, minHeight_0);
  }
  var minWidth;
  var minWidth_metadata = new PropertyMetadata('minWidth');
  function get_minWidth($receiver) {
    return minWidth.getValue_vm3wpz$($receiver, minWidth_metadata);
  }
  function set_minWidth($receiver, minWidth_0) {
    minWidth.setValue_s6fbwj$($receiver, minWidth_metadata, minWidth_0);
  }
  var overflow;
  var overflow_metadata = new PropertyMetadata('overflow');
  function get_overflow($receiver) {
    return overflow.getValue_vm3wpz$($receiver, overflow_metadata);
  }
  function set_overflow($receiver, overflow_0) {
    overflow.setValue_kbwfbo$($receiver, overflow_metadata, overflow_0);
  }
  var overflowX;
  var overflowX_metadata = new PropertyMetadata('overflowX');
  function get_overflowX($receiver) {
    return overflowX.getValue_vm3wpz$($receiver, overflowX_metadata);
  }
  function set_overflowX($receiver, overflowX_0) {
    overflowX.setValue_kbwfbo$($receiver, overflowX_metadata, overflowX_0);
  }
  var overflowY;
  var overflowY_metadata = new PropertyMetadata('overflowY');
  function get_overflowY($receiver) {
    return overflowY.getValue_vm3wpz$($receiver, overflowY_metadata);
  }
  function set_overflowY($receiver, overflowY_0) {
    overflowY.setValue_kbwfbo$($receiver, overflowY_metadata, overflowY_0);
  }
  var padding;
  var padding_metadata = new PropertyMetadata('padding');
  function get_padding($receiver) {
    return padding.getValue_vm3wpz$($receiver, padding_metadata);
  }
  function set_padding($receiver, padding_0) {
    padding.setValue_kbwfbo$($receiver, padding_metadata, padding_0);
  }
  var paddingBottom;
  var paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  function get_paddingBottom($receiver) {
    return paddingBottom.getValue_vm3wpz$($receiver, paddingBottom_metadata);
  }
  function set_paddingBottom($receiver, paddingBottom_0) {
    paddingBottom.setValue_kbwfbo$($receiver, paddingBottom_metadata, paddingBottom_0);
  }
  var paddingLeft;
  var paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  function get_paddingLeft($receiver) {
    return paddingLeft.getValue_vm3wpz$($receiver, paddingLeft_metadata);
  }
  function set_paddingLeft($receiver, paddingLeft_0) {
    paddingLeft.setValue_kbwfbo$($receiver, paddingLeft_metadata, paddingLeft_0);
  }
  var paddingRight;
  var paddingRight_metadata = new PropertyMetadata('paddingRight');
  function get_paddingRight($receiver) {
    return paddingRight.getValue_vm3wpz$($receiver, paddingRight_metadata);
  }
  function set_paddingRight($receiver, paddingRight_0) {
    paddingRight.setValue_kbwfbo$($receiver, paddingRight_metadata, paddingRight_0);
  }
  var paddingTop;
  var paddingTop_metadata = new PropertyMetadata('paddingTop');
  function get_paddingTop($receiver) {
    return paddingTop.getValue_vm3wpz$($receiver, paddingTop_metadata);
  }
  function set_paddingTop($receiver, paddingTop_0) {
    paddingTop.setValue_kbwfbo$($receiver, paddingTop_metadata, paddingTop_0);
  }
  var position;
  var position_metadata = new PropertyMetadata('position');
  function get_position($receiver) {
    return position.getValue_vm3wpz$($receiver, position_metadata);
  }
  function set_position($receiver, position_0) {
    position.setValue_kbwfbo$($receiver, position_metadata, position_0);
  }
  var right;
  var right_metadata = new PropertyMetadata('right');
  function get_right($receiver) {
    return right.getValue_vm3wpz$($receiver, right_metadata);
  }
  function set_right($receiver, right_0) {
    right.setValue_kbwfbo$($receiver, right_metadata, right_0);
  }
  var top;
  var top_metadata = new PropertyMetadata('top');
  function get_top($receiver) {
    return top.getValue_vm3wpz$($receiver, top_metadata);
  }
  function set_top($receiver, top_0) {
    top.setValue_kbwfbo$($receiver, top_metadata, top_0);
  }
  var visibility;
  var visibility_metadata = new PropertyMetadata('visibility');
  function get_visibility($receiver) {
    return visibility.getValue_vm3wpz$($receiver, visibility_metadata);
  }
  function set_visibility($receiver, visibility_0) {
    visibility.setValue_kbwfbo$($receiver, visibility_metadata, visibility_0);
  }
  var width;
  var width_metadata = new PropertyMetadata('width');
  function get_width($receiver) {
    return width.getValue_vm3wpz$($receiver, width_metadata);
  }
  function set_width($receiver, width_0) {
    width.setValue_s6fbwj$($receiver, width_metadata, width_0);
  }
  var verticalAlign;
  var verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  function get_verticalAlign($receiver) {
    return verticalAlign.getValue_vm3wpz$($receiver, verticalAlign_metadata);
  }
  function set_verticalAlign($receiver, verticalAlign_0) {
    verticalAlign.setValue_kbwfbo$($receiver, verticalAlign_metadata, verticalAlign_0);
  }
  var zIndex;
  var zIndex_metadata = new PropertyMetadata('zIndex');
  function get_zIndex($receiver) {
    return zIndex.getValue_vm3wpz$($receiver, zIndex_metadata);
  }
  function set_zIndex($receiver, zIndex_0) {
    zIndex.setValue_kbwfbo$($receiver, zIndex_metadata, zIndex_0);
  }
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  function get_alignContent($receiver) {
    return alignContent.getValue_vm3wpz$($receiver, alignContent_metadata);
  }
  function set_alignContent($receiver, alignContent_0) {
    alignContent.setValue_kbwfbo$($receiver, alignContent_metadata, alignContent_0);
  }
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  function get_alignItems($receiver) {
    return alignItems.getValue_vm3wpz$($receiver, alignItems_metadata);
  }
  function set_alignItems($receiver, alignItems_0) {
    alignItems.setValue_kbwfbo$($receiver, alignItems_metadata, alignItems_0);
  }
  var alignSelf;
  var alignSelf_metadata = new PropertyMetadata('alignSelf');
  function get_alignSelf($receiver) {
    return alignSelf.getValue_vm3wpz$($receiver, alignSelf_metadata);
  }
  function set_alignSelf($receiver, alignSelf_0) {
    alignSelf.setValue_kbwfbo$($receiver, alignSelf_metadata, alignSelf_0);
  }
  var flex;
  var flex_metadata = new PropertyMetadata('flex');
  function get_flex($receiver) {
    return flex.getValue_vm3wpz$($receiver, flex_metadata);
  }
  function set_flex($receiver, flex_0) {
    flex.setValue_kbwfbo$($receiver, flex_metadata, flex_0);
  }
  var flexBasis;
  var flexBasis_metadata = new PropertyMetadata('flexBasis');
  function get_flexBasis($receiver) {
    return flexBasis.getValue_vm3wpz$($receiver, flexBasis_metadata);
  }
  function set_flexBasis($receiver, flexBasis_0) {
    flexBasis.setValue_kbwfbo$($receiver, flexBasis_metadata, flexBasis_0);
  }
  var flexDirection;
  var flexDirection_metadata = new PropertyMetadata('flexDirection');
  function get_flexDirection($receiver) {
    return flexDirection.getValue_vm3wpz$($receiver, flexDirection_metadata);
  }
  function set_flexDirection($receiver, flexDirection_0) {
    flexDirection.setValue_kbwfbo$($receiver, flexDirection_metadata, flexDirection_0);
  }
  var flexFlow;
  var flexFlow_metadata = new PropertyMetadata('flexFlow');
  function get_flexFlow($receiver) {
    return flexFlow.getValue_vm3wpz$($receiver, flexFlow_metadata);
  }
  function set_flexFlow($receiver, flexFlow_0) {
    flexFlow.setValue_kbwfbo$($receiver, flexFlow_metadata, flexFlow_0);
  }
  var flexGrow;
  var flexGrow_metadata = new PropertyMetadata('flexGrow');
  function get_flexGrow($receiver) {
    return flexGrow.getValue_vm3wpz$($receiver, flexGrow_metadata);
  }
  function set_flexGrow($receiver, flexGrow_0) {
    flexGrow.setValue_kbwfbo$($receiver, flexGrow_metadata, flexGrow_0);
  }
  var flexShrink;
  var flexShrink_metadata = new PropertyMetadata('flexShrink');
  function get_flexShrink($receiver) {
    return flexShrink.getValue_vm3wpz$($receiver, flexShrink_metadata);
  }
  function set_flexShrink($receiver, flexShrink_0) {
    flexShrink.setValue_kbwfbo$($receiver, flexShrink_metadata, flexShrink_0);
  }
  var flexWrap;
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  function get_flexWrap($receiver) {
    return flexWrap.getValue_vm3wpz$($receiver, flexWrap_metadata);
  }
  function set_flexWrap($receiver, flexWrap_0) {
    flexWrap.setValue_kbwfbo$($receiver, flexWrap_metadata, flexWrap_0);
  }
  var justifyContent;
  var justifyContent_metadata = new PropertyMetadata('justifyContent');
  function get_justifyContent($receiver) {
    return justifyContent.getValue_vm3wpz$($receiver, justifyContent_metadata);
  }
  function set_justifyContent($receiver, justifyContent_0) {
    justifyContent.setValue_kbwfbo$($receiver, justifyContent_metadata, justifyContent_0);
  }
  var order;
  var order_metadata = new PropertyMetadata('order');
  function get_order($receiver) {
    return order.getValue_vm3wpz$($receiver, order_metadata);
  }
  function set_order($receiver, order_0) {
    order.setValue_kbwfbo$($receiver, order_metadata, order_0);
  }
  var hangingPunctuation;
  var hangingPunctuation_metadata = new PropertyMetadata('hangingPunctuation');
  function get_hangingPunctuation($receiver) {
    return hangingPunctuation.getValue_vm3wpz$($receiver, hangingPunctuation_metadata);
  }
  function set_hangingPunctuation($receiver, hangingPunctuation_0) {
    hangingPunctuation.setValue_kbwfbo$($receiver, hangingPunctuation_metadata, hangingPunctuation_0);
  }
  var hyphens;
  var hyphens_metadata = new PropertyMetadata('hyphens');
  function get_hyphens($receiver) {
    return hyphens.getValue_vm3wpz$($receiver, hyphens_metadata);
  }
  function set_hyphens($receiver, hyphens_0) {
    hyphens.setValue_kbwfbo$($receiver, hyphens_metadata, hyphens_0);
  }
  var letterSpacing;
  var letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  function get_letterSpacing($receiver) {
    return letterSpacing.getValue_vm3wpz$($receiver, letterSpacing_metadata);
  }
  function set_letterSpacing($receiver, letterSpacing_0) {
    letterSpacing.setValue_kbwfbo$($receiver, letterSpacing_metadata, letterSpacing_0);
  }
  var lineBreak;
  var lineBreak_metadata = new PropertyMetadata('lineBreak');
  function get_lineBreak($receiver) {
    return lineBreak.getValue_vm3wpz$($receiver, lineBreak_metadata);
  }
  function set_lineBreak($receiver, lineBreak_0) {
    lineBreak.setValue_kbwfbo$($receiver, lineBreak_metadata, lineBreak_0);
  }
  var lineHeight;
  var lineHeight_metadata = new PropertyMetadata('lineHeight');
  function get_lineHeight($receiver) {
    return lineHeight.getValue_vm3wpz$($receiver, lineHeight_metadata);
  }
  function set_lineHeight($receiver, lineHeight_0) {
    lineHeight.setValue_kbwfbo$($receiver, lineHeight_metadata, lineHeight_0);
  }
  var overflowWrap;
  var overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  function get_overflowWrap($receiver) {
    return overflowWrap.getValue_vm3wpz$($receiver, overflowWrap_metadata);
  }
  function set_overflowWrap($receiver, overflowWrap_0) {
    overflowWrap.setValue_kbwfbo$($receiver, overflowWrap_metadata, overflowWrap_0);
  }
  var tabSize;
  var tabSize_metadata = new PropertyMetadata('tabSize');
  function get_tabSize($receiver) {
    return tabSize.getValue_vm3wpz$($receiver, tabSize_metadata);
  }
  function set_tabSize($receiver, tabSize_0) {
    tabSize.setValue_kbwfbo$($receiver, tabSize_metadata, tabSize_0);
  }
  var textAlign;
  var textAlign_metadata = new PropertyMetadata('textAlign');
  function get_textAlign($receiver) {
    return textAlign.getValue_vm3wpz$($receiver, textAlign_metadata);
  }
  function set_textAlign($receiver, textAlign_0) {
    textAlign.setValue_kbwfbo$($receiver, textAlign_metadata, textAlign_0);
  }
  var textAlignLast;
  var textAlignLast_metadata = new PropertyMetadata('textAlignLast');
  function get_textAlignLast($receiver) {
    return textAlignLast.getValue_vm3wpz$($receiver, textAlignLast_metadata);
  }
  function set_textAlignLast($receiver, textAlignLast_0) {
    textAlignLast.setValue_kbwfbo$($receiver, textAlignLast_metadata, textAlignLast_0);
  }
  var textIndent;
  var textIndent_metadata = new PropertyMetadata('textIndent');
  function get_textIndent($receiver) {
    return textIndent.getValue_vm3wpz$($receiver, textIndent_metadata);
  }
  function set_textIndent($receiver, textIndent_0) {
    textIndent.setValue_kbwfbo$($receiver, textIndent_metadata, textIndent_0);
  }
  var textJustify;
  var textJustify_metadata = new PropertyMetadata('textJustify');
  function get_textJustify($receiver) {
    return textJustify.getValue_vm3wpz$($receiver, textJustify_metadata);
  }
  function set_textJustify($receiver, textJustify_0) {
    textJustify.setValue_kbwfbo$($receiver, textJustify_metadata, textJustify_0);
  }
  var textTransform;
  var textTransform_metadata = new PropertyMetadata('textTransform');
  function get_textTransform($receiver) {
    return textTransform.getValue_vm3wpz$($receiver, textTransform_metadata);
  }
  function set_textTransform($receiver, textTransform_0) {
    textTransform.setValue_kbwfbo$($receiver, textTransform_metadata, textTransform_0);
  }
  var whiteSpace;
  var whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  function get_whiteSpace($receiver) {
    return whiteSpace.getValue_vm3wpz$($receiver, whiteSpace_metadata);
  }
  function set_whiteSpace($receiver, whiteSpace_0) {
    whiteSpace.setValue_kbwfbo$($receiver, whiteSpace_metadata, whiteSpace_0);
  }
  var wordBreak;
  var wordBreak_metadata = new PropertyMetadata('wordBreak');
  function get_wordBreak($receiver) {
    return wordBreak.getValue_vm3wpz$($receiver, wordBreak_metadata);
  }
  function set_wordBreak($receiver, wordBreak_0) {
    wordBreak.setValue_kbwfbo$($receiver, wordBreak_metadata, wordBreak_0);
  }
  var wordSpacing;
  var wordSpacing_metadata = new PropertyMetadata('wordSpacing');
  function get_wordSpacing($receiver) {
    return wordSpacing.getValue_vm3wpz$($receiver, wordSpacing_metadata);
  }
  function set_wordSpacing($receiver, wordSpacing_0) {
    wordSpacing.setValue_kbwfbo$($receiver, wordSpacing_metadata, wordSpacing_0);
  }
  var wordWrap;
  var wordWrap_metadata = new PropertyMetadata('wordWrap');
  function get_wordWrap($receiver) {
    return wordWrap.getValue_vm3wpz$($receiver, wordWrap_metadata);
  }
  function set_wordWrap($receiver, wordWrap_0) {
    wordWrap.setValue_kbwfbo$($receiver, wordWrap_metadata, wordWrap_0);
  }
  var textDecoration;
  var textDecoration_metadata = new PropertyMetadata('textDecoration');
  function get_textDecoration($receiver) {
    return textDecoration.getValue_vm3wpz$($receiver, textDecoration_metadata);
  }
  function set_textDecoration($receiver, textDecoration_0) {
    textDecoration.setValue_kbwfbo$($receiver, textDecoration_metadata, textDecoration_0);
  }
  var textDecorationColor;
  var textDecorationColor_metadata = new PropertyMetadata('textDecorationColor');
  function get_textDecorationColor($receiver) {
    return textDecorationColor.getValue_vm3wpz$($receiver, textDecorationColor_metadata);
  }
  function set_textDecorationColor($receiver, textDecorationColor_0) {
    textDecorationColor.setValue_kbwfbo$($receiver, textDecorationColor_metadata, textDecorationColor_0);
  }
  var textDecorationLine;
  var textDecorationLine_metadata = new PropertyMetadata('textDecorationLine');
  function get_textDecorationLine($receiver) {
    return textDecorationLine.getValue_vm3wpz$($receiver, textDecorationLine_metadata);
  }
  function set_textDecorationLine($receiver, textDecorationLine_0) {
    textDecorationLine.setValue_kbwfbo$($receiver, textDecorationLine_metadata, textDecorationLine_0);
  }
  var textDecorationStyle;
  var textDecorationStyle_metadata = new PropertyMetadata('textDecorationStyle');
  function get_textDecorationStyle($receiver) {
    return textDecorationStyle.getValue_vm3wpz$($receiver, textDecorationStyle_metadata);
  }
  function set_textDecorationStyle($receiver, textDecorationStyle_0) {
    textDecorationStyle.setValue_kbwfbo$($receiver, textDecorationStyle_metadata, textDecorationStyle_0);
  }
  var textShadow;
  var textShadow_metadata = new PropertyMetadata('textShadow');
  function get_textShadow($receiver) {
    return textShadow.getValue_vm3wpz$($receiver, textShadow_metadata);
  }
  function set_textShadow($receiver, textShadow_0) {
    textShadow.setValue_kbwfbo$($receiver, textShadow_metadata, textShadow_0);
  }
  var textUnderlinePosition;
  var textUnderlinePosition_metadata = new PropertyMetadata('textUnderlinePosition');
  function get_textUnderlinePosition($receiver) {
    return textUnderlinePosition.getValue_vm3wpz$($receiver, textUnderlinePosition_metadata);
  }
  function set_textUnderlinePosition($receiver, textUnderlinePosition_0) {
    textUnderlinePosition.setValue_kbwfbo$($receiver, textUnderlinePosition_metadata, textUnderlinePosition_0);
  }
  var font;
  var font_metadata = new PropertyMetadata('font');
  function get_font($receiver) {
    return font.getValue_vm3wpz$($receiver, font_metadata);
  }
  function set_font($receiver, font_0) {
    font.setValue_kbwfbo$($receiver, font_metadata, font_0);
  }
  var fontFamily;
  var fontFamily_metadata = new PropertyMetadata('fontFamily');
  function get_fontFamily($receiver) {
    return fontFamily.getValue_vm3wpz$($receiver, fontFamily_metadata);
  }
  function set_fontFamily($receiver, fontFamily_0) {
    fontFamily.setValue_kbwfbo$($receiver, fontFamily_metadata, fontFamily_0);
  }
  var fontFeatureSettings;
  var fontFeatureSettings_metadata = new PropertyMetadata('fontFeatureSettings');
  function get_fontFeatureSettings($receiver) {
    return fontFeatureSettings.getValue_vm3wpz$($receiver, fontFeatureSettings_metadata);
  }
  function set_fontFeatureSettings($receiver, fontFeatureSettings_0) {
    fontFeatureSettings.setValue_kbwfbo$($receiver, fontFeatureSettings_metadata, fontFeatureSettings_0);
  }
  var fontKerning;
  var fontKerning_metadata = new PropertyMetadata('fontKerning');
  function get_fontKerning($receiver) {
    return fontKerning.getValue_vm3wpz$($receiver, fontKerning_metadata);
  }
  function set_fontKerning($receiver, fontKerning_0) {
    fontKerning.setValue_kbwfbo$($receiver, fontKerning_metadata, fontKerning_0);
  }
  var fontLanguageOverride;
  var fontLanguageOverride_metadata = new PropertyMetadata('fontLanguageOverride');
  function get_fontLanguageOverride($receiver) {
    return fontLanguageOverride.getValue_vm3wpz$($receiver, fontLanguageOverride_metadata);
  }
  function set_fontLanguageOverride($receiver, fontLanguageOverride_0) {
    fontLanguageOverride.setValue_kbwfbo$($receiver, fontLanguageOverride_metadata, fontLanguageOverride_0);
  }
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  function get_fontSize($receiver) {
    return fontSize.getValue_vm3wpz$($receiver, fontSize_metadata);
  }
  function set_fontSize($receiver, fontSize_0) {
    fontSize.setValue_kbwfbo$($receiver, fontSize_metadata, fontSize_0);
  }
  var fontSizeAdjust;
  var fontSizeAdjust_metadata = new PropertyMetadata('fontSizeAdjust');
  function get_fontSizeAdjust($receiver) {
    return fontSizeAdjust.getValue_vm3wpz$($receiver, fontSizeAdjust_metadata);
  }
  function set_fontSizeAdjust($receiver, fontSizeAdjust_0) {
    fontSizeAdjust.setValue_kbwfbo$($receiver, fontSizeAdjust_metadata, fontSizeAdjust_0);
  }
  var fontStretch;
  var fontStretch_metadata = new PropertyMetadata('fontStretch');
  function get_fontStretch($receiver) {
    return fontStretch.getValue_vm3wpz$($receiver, fontStretch_metadata);
  }
  function set_fontStretch($receiver, fontStretch_0) {
    fontStretch.setValue_kbwfbo$($receiver, fontStretch_metadata, fontStretch_0);
  }
  var fontStyle;
  var fontStyle_metadata = new PropertyMetadata('fontStyle');
  function get_fontStyle($receiver) {
    return fontStyle.getValue_vm3wpz$($receiver, fontStyle_metadata);
  }
  function set_fontStyle($receiver, fontStyle_0) {
    fontStyle.setValue_kbwfbo$($receiver, fontStyle_metadata, fontStyle_0);
  }
  var fontSynthesis;
  var fontSynthesis_metadata = new PropertyMetadata('fontSynthesis');
  function get_fontSynthesis($receiver) {
    return fontSynthesis.getValue_vm3wpz$($receiver, fontSynthesis_metadata);
  }
  function set_fontSynthesis($receiver, fontSynthesis_0) {
    fontSynthesis.setValue_kbwfbo$($receiver, fontSynthesis_metadata, fontSynthesis_0);
  }
  var fontVariant;
  var fontVariant_metadata = new PropertyMetadata('fontVariant');
  function get_fontVariant($receiver) {
    return fontVariant.getValue_vm3wpz$($receiver, fontVariant_metadata);
  }
  function set_fontVariant($receiver, fontVariant_0) {
    fontVariant.setValue_kbwfbo$($receiver, fontVariant_metadata, fontVariant_0);
  }
  var fontVariantAlternates;
  var fontVariantAlternates_metadata = new PropertyMetadata('fontVariantAlternates');
  function get_fontVariantAlternates($receiver) {
    return fontVariantAlternates.getValue_vm3wpz$($receiver, fontVariantAlternates_metadata);
  }
  function set_fontVariantAlternates($receiver, fontVariantAlternates_0) {
    fontVariantAlternates.setValue_kbwfbo$($receiver, fontVariantAlternates_metadata, fontVariantAlternates_0);
  }
  var fontVariantCaps;
  var fontVariantCaps_metadata = new PropertyMetadata('fontVariantCaps');
  function get_fontVariantCaps($receiver) {
    return fontVariantCaps.getValue_vm3wpz$($receiver, fontVariantCaps_metadata);
  }
  function set_fontVariantCaps($receiver, fontVariantCaps_0) {
    fontVariantCaps.setValue_kbwfbo$($receiver, fontVariantCaps_metadata, fontVariantCaps_0);
  }
  var fontVariantEastAsian;
  var fontVariantEastAsian_metadata = new PropertyMetadata('fontVariantEastAsian');
  function get_fontVariantEastAsian($receiver) {
    return fontVariantEastAsian.getValue_vm3wpz$($receiver, fontVariantEastAsian_metadata);
  }
  function set_fontVariantEastAsian($receiver, fontVariantEastAsian_0) {
    fontVariantEastAsian.setValue_kbwfbo$($receiver, fontVariantEastAsian_metadata, fontVariantEastAsian_0);
  }
  var fontVariantLigatures;
  var fontVariantLigatures_metadata = new PropertyMetadata('fontVariantLigatures');
  function get_fontVariantLigatures($receiver) {
    return fontVariantLigatures.getValue_vm3wpz$($receiver, fontVariantLigatures_metadata);
  }
  function set_fontVariantLigatures($receiver, fontVariantLigatures_0) {
    fontVariantLigatures.setValue_kbwfbo$($receiver, fontVariantLigatures_metadata, fontVariantLigatures_0);
  }
  var fontVariantNumeric;
  var fontVariantNumeric_metadata = new PropertyMetadata('fontVariantNumeric');
  function get_fontVariantNumeric($receiver) {
    return fontVariantNumeric.getValue_vm3wpz$($receiver, fontVariantNumeric_metadata);
  }
  function set_fontVariantNumeric($receiver, fontVariantNumeric_0) {
    fontVariantNumeric.setValue_kbwfbo$($receiver, fontVariantNumeric_metadata, fontVariantNumeric_0);
  }
  var fontVariantPosition;
  var fontVariantPosition_metadata = new PropertyMetadata('fontVariantPosition');
  function get_fontVariantPosition($receiver) {
    return fontVariantPosition.getValue_vm3wpz$($receiver, fontVariantPosition_metadata);
  }
  function set_fontVariantPosition($receiver, fontVariantPosition_0) {
    fontVariantPosition.setValue_kbwfbo$($receiver, fontVariantPosition_metadata, fontVariantPosition_0);
  }
  var fontWeight;
  var fontWeight_metadata = new PropertyMetadata('fontWeight');
  function get_fontWeight($receiver) {
    return fontWeight.getValue_vm3wpz$($receiver, fontWeight_metadata);
  }
  function set_fontWeight($receiver, fontWeight_0) {
    fontWeight.setValue_kbwfbo$($receiver, fontWeight_metadata, fontWeight_0);
  }
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  function get_direction($receiver) {
    return direction.getValue_vm3wpz$($receiver, direction_metadata);
  }
  function set_direction($receiver, direction_0) {
    direction.setValue_kbwfbo$($receiver, direction_metadata, direction_0);
  }
  var textOrientation;
  var textOrientation_metadata = new PropertyMetadata('textOrientation');
  function get_textOrientation($receiver) {
    return textOrientation.getValue_vm3wpz$($receiver, textOrientation_metadata);
  }
  function set_textOrientation($receiver, textOrientation_0) {
    textOrientation.setValue_kbwfbo$($receiver, textOrientation_metadata, textOrientation_0);
  }
  var textCombineUpright;
  var textCombineUpright_metadata = new PropertyMetadata('textCombineUpright');
  function get_textCombineUpright($receiver) {
    return textCombineUpright.getValue_vm3wpz$($receiver, textCombineUpright_metadata);
  }
  function set_textCombineUpright($receiver, textCombineUpright_0) {
    textCombineUpright.setValue_kbwfbo$($receiver, textCombineUpright_metadata, textCombineUpright_0);
  }
  var unicodeBidi;
  var unicodeBidi_metadata = new PropertyMetadata('unicodeBidi');
  function get_unicodeBidi($receiver) {
    return unicodeBidi.getValue_vm3wpz$($receiver, unicodeBidi_metadata);
  }
  function set_unicodeBidi($receiver, unicodeBidi_0) {
    unicodeBidi.setValue_kbwfbo$($receiver, unicodeBidi_metadata, unicodeBidi_0);
  }
  var writingMode;
  var writingMode_metadata = new PropertyMetadata('writingMode');
  function get_writingMode($receiver) {
    return writingMode.getValue_vm3wpz$($receiver, writingMode_metadata);
  }
  function set_writingMode($receiver, writingMode_0) {
    writingMode.setValue_kbwfbo$($receiver, writingMode_metadata, writingMode_0);
  }
  var borderCollapse;
  var borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  function get_borderCollapse($receiver) {
    return borderCollapse.getValue_vm3wpz$($receiver, borderCollapse_metadata);
  }
  function set_borderCollapse($receiver, borderCollapse_0) {
    borderCollapse.setValue_kbwfbo$($receiver, borderCollapse_metadata, borderCollapse_0);
  }
  var borderSpacing;
  var borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  function get_borderSpacing($receiver) {
    return borderSpacing.getValue_vm3wpz$($receiver, borderSpacing_metadata);
  }
  function set_borderSpacing($receiver, borderSpacing_0) {
    borderSpacing.setValue_kbwfbo$($receiver, borderSpacing_metadata, borderSpacing_0);
  }
  var captionSide;
  var captionSide_metadata = new PropertyMetadata('captionSide');
  function get_captionSide($receiver) {
    return captionSide.getValue_vm3wpz$($receiver, captionSide_metadata);
  }
  function set_captionSide($receiver, captionSide_0) {
    captionSide.setValue_kbwfbo$($receiver, captionSide_metadata, captionSide_0);
  }
  var emptyCells;
  var emptyCells_metadata = new PropertyMetadata('emptyCells');
  function get_emptyCells($receiver) {
    return emptyCells.getValue_vm3wpz$($receiver, emptyCells_metadata);
  }
  function set_emptyCells($receiver, emptyCells_0) {
    emptyCells.setValue_kbwfbo$($receiver, emptyCells_metadata, emptyCells_0);
  }
  var tableLayout;
  var tableLayout_metadata = new PropertyMetadata('tableLayout');
  function get_tableLayout($receiver) {
    return tableLayout.getValue_vm3wpz$($receiver, tableLayout_metadata);
  }
  function set_tableLayout($receiver, tableLayout_0) {
    tableLayout.setValue_kbwfbo$($receiver, tableLayout_metadata, tableLayout_0);
  }
  var counterIncrement;
  var counterIncrement_metadata = new PropertyMetadata('counterIncrement');
  function get_counterIncrement($receiver) {
    return counterIncrement.getValue_vm3wpz$($receiver, counterIncrement_metadata);
  }
  function set_counterIncrement($receiver, counterIncrement_0) {
    counterIncrement.setValue_kbwfbo$($receiver, counterIncrement_metadata, counterIncrement_0);
  }
  var counterReset;
  var counterReset_metadata = new PropertyMetadata('counterReset');
  function get_counterReset($receiver) {
    return counterReset.getValue_vm3wpz$($receiver, counterReset_metadata);
  }
  function set_counterReset($receiver, counterReset_0) {
    counterReset.setValue_kbwfbo$($receiver, counterReset_metadata, counterReset_0);
  }
  var listStyle;
  var listStyle_metadata = new PropertyMetadata('listStyle');
  function get_listStyle($receiver) {
    return listStyle.getValue_vm3wpz$($receiver, listStyle_metadata);
  }
  function set_listStyle($receiver, listStyle_0) {
    listStyle.setValue_kbwfbo$($receiver, listStyle_metadata, listStyle_0);
  }
  var listStyleImage;
  var listStyleImage_metadata = new PropertyMetadata('listStyleImage');
  function get_listStyleImage($receiver) {
    return listStyleImage.getValue_vm3wpz$($receiver, listStyleImage_metadata);
  }
  function set_listStyleImage($receiver, listStyleImage_0) {
    listStyleImage.setValue_kbwfbo$($receiver, listStyleImage_metadata, listStyleImage_0);
  }
  var listStylePosition;
  var listStylePosition_metadata = new PropertyMetadata('listStylePosition');
  function get_listStylePosition($receiver) {
    return listStylePosition.getValue_vm3wpz$($receiver, listStylePosition_metadata);
  }
  function set_listStylePosition($receiver, listStylePosition_0) {
    listStylePosition.setValue_kbwfbo$($receiver, listStylePosition_metadata, listStylePosition_0);
  }
  var listStyleType;
  var listStyleType_metadata = new PropertyMetadata('listStyleType');
  function get_listStyleType($receiver) {
    return listStyleType.getValue_vm3wpz$($receiver, listStyleType_metadata);
  }
  function set_listStyleType($receiver, listStyleType_0) {
    listStyleType.setValue_kbwfbo$($receiver, listStyleType_metadata, listStyleType_0);
  }
  var animation;
  var animation_metadata = new PropertyMetadata('animation');
  function get_animation($receiver) {
    return animation.getValue_vm3wpz$($receiver, animation_metadata);
  }
  function set_animation($receiver, animation_0) {
    animation.setValue_kbwfbo$($receiver, animation_metadata, animation_0);
  }
  var animationDelay;
  var animationDelay_metadata = new PropertyMetadata('animationDelay');
  function get_animationDelay($receiver) {
    return animationDelay.getValue_vm3wpz$($receiver, animationDelay_metadata);
  }
  function set_animationDelay($receiver, animationDelay_0) {
    animationDelay.setValue_kbwfbo$($receiver, animationDelay_metadata, animationDelay_0);
  }
  var animationDirection;
  var animationDirection_metadata = new PropertyMetadata('animationDirection');
  function get_animationDirection($receiver) {
    return animationDirection.getValue_vm3wpz$($receiver, animationDirection_metadata);
  }
  function set_animationDirection($receiver, animationDirection_0) {
    animationDirection.setValue_kbwfbo$($receiver, animationDirection_metadata, animationDirection_0);
  }
  var animationDuration;
  var animationDuration_metadata = new PropertyMetadata('animationDuration');
  function get_animationDuration($receiver) {
    return animationDuration.getValue_vm3wpz$($receiver, animationDuration_metadata);
  }
  function set_animationDuration($receiver, animationDuration_0) {
    animationDuration.setValue_kbwfbo$($receiver, animationDuration_metadata, animationDuration_0);
  }
  var animationFillMode;
  var animationFillMode_metadata = new PropertyMetadata('animationFillMode');
  function get_animationFillMode($receiver) {
    return animationFillMode.getValue_vm3wpz$($receiver, animationFillMode_metadata);
  }
  function set_animationFillMode($receiver, animationFillMode_0) {
    animationFillMode.setValue_kbwfbo$($receiver, animationFillMode_metadata, animationFillMode_0);
  }
  var animationIterationCount;
  var animationIterationCount_metadata = new PropertyMetadata('animationIterationCount');
  function get_animationIterationCount($receiver) {
    return animationIterationCount.getValue_vm3wpz$($receiver, animationIterationCount_metadata);
  }
  function set_animationIterationCount($receiver, animationIterationCount_0) {
    animationIterationCount.setValue_kbwfbo$($receiver, animationIterationCount_metadata, animationIterationCount_0);
  }
  var animationName;
  var animationName_metadata = new PropertyMetadata('animationName');
  function get_animationName($receiver) {
    return animationName.getValue_vm3wpz$($receiver, animationName_metadata);
  }
  function set_animationName($receiver, animationName_0) {
    animationName.setValue_kbwfbo$($receiver, animationName_metadata, animationName_0);
  }
  var animationPlayState;
  var animationPlayState_metadata = new PropertyMetadata('animationPlayState');
  function get_animationPlayState($receiver) {
    return animationPlayState.getValue_vm3wpz$($receiver, animationPlayState_metadata);
  }
  function set_animationPlayState($receiver, animationPlayState_0) {
    animationPlayState.setValue_kbwfbo$($receiver, animationPlayState_metadata, animationPlayState_0);
  }
  var animationTimingFunction;
  var animationTimingFunction_metadata = new PropertyMetadata('animationTimingFunction');
  function get_animationTimingFunction($receiver) {
    return animationTimingFunction.getValue_vm3wpz$($receiver, animationTimingFunction_metadata);
  }
  function set_animationTimingFunction($receiver, animationTimingFunction_0) {
    animationTimingFunction.setValue_kbwfbo$($receiver, animationTimingFunction_metadata, animationTimingFunction_0);
  }
  var backfaceVisibility;
  var backfaceVisibility_metadata = new PropertyMetadata('backfaceVisibility');
  function get_backfaceVisibility($receiver) {
    return backfaceVisibility.getValue_vm3wpz$($receiver, backfaceVisibility_metadata);
  }
  function set_backfaceVisibility($receiver, backfaceVisibility_0) {
    backfaceVisibility.setValue_kbwfbo$($receiver, backfaceVisibility_metadata, backfaceVisibility_0);
  }
  var perspective;
  var perspective_metadata = new PropertyMetadata('perspective');
  function get_perspective($receiver) {
    return perspective.getValue_vm3wpz$($receiver, perspective_metadata);
  }
  function set_perspective($receiver, perspective_0) {
    perspective.setValue_kbwfbo$($receiver, perspective_metadata, perspective_0);
  }
  var perspectiveOrigin;
  var perspectiveOrigin_metadata = new PropertyMetadata('perspectiveOrigin');
  function get_perspectiveOrigin($receiver) {
    return perspectiveOrigin.getValue_vm3wpz$($receiver, perspectiveOrigin_metadata);
  }
  function set_perspectiveOrigin($receiver, perspectiveOrigin_0) {
    perspectiveOrigin.setValue_kbwfbo$($receiver, perspectiveOrigin_metadata, perspectiveOrigin_0);
  }
  var transform;
  var transform_metadata = new PropertyMetadata('transform');
  function get_transform($receiver) {
    return transform.getValue_vm3wpz$($receiver, transform_metadata);
  }
  function set_transform($receiver, transform_0) {
    transform.setValue_kbwfbo$($receiver, transform_metadata, transform_0);
  }
  var transformOrigin;
  var transformOrigin_metadata = new PropertyMetadata('transformOrigin');
  function get_transformOrigin($receiver) {
    return transformOrigin.getValue_vm3wpz$($receiver, transformOrigin_metadata);
  }
  function set_transformOrigin($receiver, transformOrigin_0) {
    transformOrigin.setValue_kbwfbo$($receiver, transformOrigin_metadata, transformOrigin_0);
  }
  var transformStyle;
  var transformStyle_metadata = new PropertyMetadata('transformStyle');
  function get_transformStyle($receiver) {
    return transformStyle.getValue_vm3wpz$($receiver, transformStyle_metadata);
  }
  function set_transformStyle($receiver, transformStyle_0) {
    transformStyle.setValue_kbwfbo$($receiver, transformStyle_metadata, transformStyle_0);
  }
  var transition;
  var transition_metadata = new PropertyMetadata('transition');
  function get_transition($receiver) {
    return transition.getValue_vm3wpz$($receiver, transition_metadata);
  }
  function set_transition($receiver, transition_0) {
    transition.setValue_kbwfbo$($receiver, transition_metadata, transition_0);
  }
  var transitionProperty;
  var transitionProperty_metadata = new PropertyMetadata('transitionProperty');
  function get_transitionProperty($receiver) {
    return transitionProperty.getValue_vm3wpz$($receiver, transitionProperty_metadata);
  }
  function set_transitionProperty($receiver, transitionProperty_0) {
    transitionProperty.setValue_kbwfbo$($receiver, transitionProperty_metadata, transitionProperty_0);
  }
  var transitionDuration;
  var transitionDuration_metadata = new PropertyMetadata('transitionDuration');
  function get_transitionDuration($receiver) {
    return transitionDuration.getValue_vm3wpz$($receiver, transitionDuration_metadata);
  }
  function set_transitionDuration($receiver, transitionDuration_0) {
    transitionDuration.setValue_kbwfbo$($receiver, transitionDuration_metadata, transitionDuration_0);
  }
  var transitionTimingFunction;
  var transitionTimingFunction_metadata = new PropertyMetadata('transitionTimingFunction');
  function get_transitionTimingFunction($receiver) {
    return transitionTimingFunction.getValue_vm3wpz$($receiver, transitionTimingFunction_metadata);
  }
  function set_transitionTimingFunction($receiver, transitionTimingFunction_0) {
    transitionTimingFunction.setValue_kbwfbo$($receiver, transitionTimingFunction_metadata, transitionTimingFunction_0);
  }
  var transitionDelay;
  var transitionDelay_metadata = new PropertyMetadata('transitionDelay');
  function get_transitionDelay($receiver) {
    return transitionDelay.getValue_vm3wpz$($receiver, transitionDelay_metadata);
  }
  function set_transitionDelay($receiver, transitionDelay_0) {
    transitionDelay.setValue_kbwfbo$($receiver, transitionDelay_metadata, transitionDelay_0);
  }
  var boxSizing;
  var boxSizing_metadata = new PropertyMetadata('boxSizing');
  function get_boxSizing($receiver) {
    return boxSizing.getValue_vm3wpz$($receiver, boxSizing_metadata);
  }
  function set_boxSizing($receiver, boxSizing_0) {
    boxSizing.setValue_kbwfbo$($receiver, boxSizing_metadata, boxSizing_0);
  }
  var content;
  var content_metadata = new PropertyMetadata('content');
  function get_content($receiver) {
    return content.getValue_vm3wpz$($receiver, content_metadata);
  }
  function set_content($receiver, content_0) {
    content.setValue_kbwfbo$($receiver, content_metadata, content_0);
  }
  var cursor;
  var cursor_metadata = new PropertyMetadata('cursor');
  function get_cursor($receiver) {
    return cursor.getValue_vm3wpz$($receiver, cursor_metadata);
  }
  function set_cursor($receiver, cursor_0) {
    cursor.setValue_kbwfbo$($receiver, cursor_metadata, cursor_0);
  }
  var imeMode;
  var imeMode_metadata = new PropertyMetadata('imeMode');
  function get_imeMode($receiver) {
    return imeMode.getValue_vm3wpz$($receiver, imeMode_metadata);
  }
  function set_imeMode($receiver, imeMode_0) {
    imeMode.setValue_kbwfbo$($receiver, imeMode_metadata, imeMode_0);
  }
  var navDown;
  var navDown_metadata = new PropertyMetadata('navDown');
  function get_navDown($receiver) {
    return navDown.getValue_vm3wpz$($receiver, navDown_metadata);
  }
  function set_navDown($receiver, navDown_0) {
    navDown.setValue_kbwfbo$($receiver, navDown_metadata, navDown_0);
  }
  var navIndex;
  var navIndex_metadata = new PropertyMetadata('navIndex');
  function get_navIndex($receiver) {
    return navIndex.getValue_vm3wpz$($receiver, navIndex_metadata);
  }
  function set_navIndex($receiver, navIndex_0) {
    navIndex.setValue_kbwfbo$($receiver, navIndex_metadata, navIndex_0);
  }
  var navLeft;
  var navLeft_metadata = new PropertyMetadata('navLeft');
  function get_navLeft($receiver) {
    return navLeft.getValue_vm3wpz$($receiver, navLeft_metadata);
  }
  function set_navLeft($receiver, navLeft_0) {
    navLeft.setValue_kbwfbo$($receiver, navLeft_metadata, navLeft_0);
  }
  var navRight;
  var navRight_metadata = new PropertyMetadata('navRight');
  function get_navRight($receiver) {
    return navRight.getValue_vm3wpz$($receiver, navRight_metadata);
  }
  function set_navRight($receiver, navRight_0) {
    navRight.setValue_kbwfbo$($receiver, navRight_metadata, navRight_0);
  }
  var navUp;
  var navUp_metadata = new PropertyMetadata('navUp');
  function get_navUp($receiver) {
    return navUp.getValue_vm3wpz$($receiver, navUp_metadata);
  }
  function set_navUp($receiver, navUp_0) {
    navUp.setValue_kbwfbo$($receiver, navUp_metadata, navUp_0);
  }
  var outline;
  var outline_metadata = new PropertyMetadata('outline');
  function get_outline($receiver) {
    return outline.getValue_vm3wpz$($receiver, outline_metadata);
  }
  function set_outline($receiver, outline_0) {
    outline.setValue_kbwfbo$($receiver, outline_metadata, outline_0);
  }
  var outlineColor;
  var outlineColor_metadata = new PropertyMetadata('outlineColor');
  function get_outlineColor($receiver) {
    return outlineColor.getValue_vm3wpz$($receiver, outlineColor_metadata);
  }
  function set_outlineColor($receiver, outlineColor_0) {
    outlineColor.setValue_kbwfbo$($receiver, outlineColor_metadata, outlineColor_0);
  }
  var outlineOffset;
  var outlineOffset_metadata = new PropertyMetadata('outlineOffset');
  function get_outlineOffset($receiver) {
    return outlineOffset.getValue_vm3wpz$($receiver, outlineOffset_metadata);
  }
  function set_outlineOffset($receiver, outlineOffset_0) {
    outlineOffset.setValue_kbwfbo$($receiver, outlineOffset_metadata, outlineOffset_0);
  }
  var outlineStyle;
  var outlineStyle_metadata = new PropertyMetadata('outlineStyle');
  function get_outlineStyle($receiver) {
    return outlineStyle.getValue_vm3wpz$($receiver, outlineStyle_metadata);
  }
  function set_outlineStyle($receiver, outlineStyle_0) {
    outlineStyle.setValue_kbwfbo$($receiver, outlineStyle_metadata, outlineStyle_0);
  }
  var outlineWidth;
  var outlineWidth_metadata = new PropertyMetadata('outlineWidth');
  function get_outlineWidth($receiver) {
    return outlineWidth.getValue_vm3wpz$($receiver, outlineWidth_metadata);
  }
  function set_outlineWidth($receiver, outlineWidth_0) {
    outlineWidth.setValue_kbwfbo$($receiver, outlineWidth_metadata, outlineWidth_0);
  }
  var resize;
  var resize_metadata = new PropertyMetadata('resize');
  function get_resize($receiver) {
    return resize.getValue_vm3wpz$($receiver, resize_metadata);
  }
  function set_resize($receiver, resize_0) {
    resize.setValue_kbwfbo$($receiver, resize_metadata, resize_0);
  }
  var textOverflow;
  var textOverflow_metadata = new PropertyMetadata('textOverflow');
  function get_textOverflow($receiver) {
    return textOverflow.getValue_vm3wpz$($receiver, textOverflow_metadata);
  }
  function set_textOverflow($receiver, textOverflow_0) {
    textOverflow.setValue_kbwfbo$($receiver, textOverflow_metadata, textOverflow_0);
  }
  var breakAfter;
  var breakAfter_metadata = new PropertyMetadata('breakAfter');
  function get_breakAfter($receiver) {
    return breakAfter.getValue_vm3wpz$($receiver, breakAfter_metadata);
  }
  function set_breakAfter($receiver, breakAfter_0) {
    breakAfter.setValue_kbwfbo$($receiver, breakAfter_metadata, breakAfter_0);
  }
  var breakBefore;
  var breakBefore_metadata = new PropertyMetadata('breakBefore');
  function get_breakBefore($receiver) {
    return breakBefore.getValue_vm3wpz$($receiver, breakBefore_metadata);
  }
  function set_breakBefore($receiver, breakBefore_0) {
    breakBefore.setValue_kbwfbo$($receiver, breakBefore_metadata, breakBefore_0);
  }
  var breakInside;
  var breakInside_metadata = new PropertyMetadata('breakInside');
  function get_breakInside($receiver) {
    return breakInside.getValue_vm3wpz$($receiver, breakInside_metadata);
  }
  function set_breakInside($receiver, breakInside_0) {
    breakInside.setValue_kbwfbo$($receiver, breakInside_metadata, breakInside_0);
  }
  var columnCount;
  var columnCount_metadata = new PropertyMetadata('columnCount');
  function get_columnCount($receiver) {
    return columnCount.getValue_vm3wpz$($receiver, columnCount_metadata);
  }
  function set_columnCount($receiver, columnCount_0) {
    columnCount.setValue_kbwfbo$($receiver, columnCount_metadata, columnCount_0);
  }
  var columnFill;
  var columnFill_metadata = new PropertyMetadata('columnFill');
  function get_columnFill($receiver) {
    return columnFill.getValue_vm3wpz$($receiver, columnFill_metadata);
  }
  function set_columnFill($receiver, columnFill_0) {
    columnFill.setValue_kbwfbo$($receiver, columnFill_metadata, columnFill_0);
  }
  var columnGap;
  var columnGap_metadata = new PropertyMetadata('columnGap');
  function get_columnGap($receiver) {
    return columnGap.getValue_vm3wpz$($receiver, columnGap_metadata);
  }
  function set_columnGap($receiver, columnGap_0) {
    columnGap.setValue_kbwfbo$($receiver, columnGap_metadata, columnGap_0);
  }
  var columnRule;
  var columnRule_metadata = new PropertyMetadata('columnRule');
  function get_columnRule($receiver) {
    return columnRule.getValue_vm3wpz$($receiver, columnRule_metadata);
  }
  function set_columnRule($receiver, columnRule_0) {
    columnRule.setValue_kbwfbo$($receiver, columnRule_metadata, columnRule_0);
  }
  var columnRuleColor;
  var columnRuleColor_metadata = new PropertyMetadata('columnRuleColor');
  function get_columnRuleColor($receiver) {
    return columnRuleColor.getValue_vm3wpz$($receiver, columnRuleColor_metadata);
  }
  function set_columnRuleColor($receiver, columnRuleColor_0) {
    columnRuleColor.setValue_kbwfbo$($receiver, columnRuleColor_metadata, columnRuleColor_0);
  }
  var columnRuleStyle;
  var columnRuleStyle_metadata = new PropertyMetadata('columnRuleStyle');
  function get_columnRuleStyle($receiver) {
    return columnRuleStyle.getValue_vm3wpz$($receiver, columnRuleStyle_metadata);
  }
  function set_columnRuleStyle($receiver, columnRuleStyle_0) {
    columnRuleStyle.setValue_kbwfbo$($receiver, columnRuleStyle_metadata, columnRuleStyle_0);
  }
  var columnRuleWidth;
  var columnRuleWidth_metadata = new PropertyMetadata('columnRuleWidth');
  function get_columnRuleWidth($receiver) {
    return columnRuleWidth.getValue_vm3wpz$($receiver, columnRuleWidth_metadata);
  }
  function set_columnRuleWidth($receiver, columnRuleWidth_0) {
    columnRuleWidth.setValue_kbwfbo$($receiver, columnRuleWidth_metadata, columnRuleWidth_0);
  }
  var columnSpan;
  var columnSpan_metadata = new PropertyMetadata('columnSpan');
  function get_columnSpan($receiver) {
    return columnSpan.getValue_vm3wpz$($receiver, columnSpan_metadata);
  }
  function set_columnSpan($receiver, columnSpan_0) {
    columnSpan.setValue_kbwfbo$($receiver, columnSpan_metadata, columnSpan_0);
  }
  var columnWidth;
  var columnWidth_metadata = new PropertyMetadata('columnWidth');
  function get_columnWidth($receiver) {
    return columnWidth.getValue_vm3wpz$($receiver, columnWidth_metadata);
  }
  function set_columnWidth($receiver, columnWidth_0) {
    columnWidth.setValue_kbwfbo$($receiver, columnWidth_metadata, columnWidth_0);
  }
  var columns;
  var columns_metadata = new PropertyMetadata('columns');
  function get_columns($receiver) {
    return columns.getValue_vm3wpz$($receiver, columns_metadata);
  }
  function set_columns($receiver, columns_0) {
    columns.setValue_kbwfbo$($receiver, columns_metadata, columns_0);
  }
  var widows;
  var widows_metadata = new PropertyMetadata('widows');
  function get_widows($receiver) {
    return widows.getValue_vm3wpz$($receiver, widows_metadata);
  }
  function set_widows($receiver, widows_0) {
    widows.setValue_kbwfbo$($receiver, widows_metadata, widows_0);
  }
  var orphans;
  var orphans_metadata = new PropertyMetadata('orphans');
  function get_orphans($receiver) {
    return orphans.getValue_vm3wpz$($receiver, orphans_metadata);
  }
  function set_orphans($receiver, orphans_0) {
    orphans.setValue_kbwfbo$($receiver, orphans_metadata, orphans_0);
  }
  var pageBreakAfter;
  var pageBreakAfter_metadata = new PropertyMetadata('pageBreakAfter');
  function get_pageBreakAfter($receiver) {
    return pageBreakAfter.getValue_vm3wpz$($receiver, pageBreakAfter_metadata);
  }
  function set_pageBreakAfter($receiver, pageBreakAfter_0) {
    pageBreakAfter.setValue_kbwfbo$($receiver, pageBreakAfter_metadata, pageBreakAfter_0);
  }
  var pageBreakBefore;
  var pageBreakBefore_metadata = new PropertyMetadata('pageBreakBefore');
  function get_pageBreakBefore($receiver) {
    return pageBreakBefore.getValue_vm3wpz$($receiver, pageBreakBefore_metadata);
  }
  function set_pageBreakBefore($receiver, pageBreakBefore_0) {
    pageBreakBefore.setValue_kbwfbo$($receiver, pageBreakBefore_metadata, pageBreakBefore_0);
  }
  var pageBreakInside;
  var pageBreakInside_metadata = new PropertyMetadata('pageBreakInside');
  function get_pageBreakInside($receiver) {
    return pageBreakInside.getValue_vm3wpz$($receiver, pageBreakInside_metadata);
  }
  function set_pageBreakInside($receiver, pageBreakInside_0) {
    pageBreakInside.setValue_kbwfbo$($receiver, pageBreakInside_metadata, pageBreakInside_0);
  }
  var marks;
  var marks_metadata = new PropertyMetadata('marks');
  function get_marks($receiver) {
    return marks.getValue_vm3wpz$($receiver, marks_metadata);
  }
  function set_marks($receiver, marks_0) {
    marks.setValue_kbwfbo$($receiver, marks_metadata, marks_0);
  }
  var quotes;
  var quotes_metadata = new PropertyMetadata('quotes');
  function get_quotes($receiver) {
    return quotes.getValue_vm3wpz$($receiver, quotes_metadata);
  }
  function set_quotes($receiver, quotes_0) {
    quotes.setValue_kbwfbo$($receiver, quotes_metadata, quotes_0);
  }
  var filter;
  var filter_metadata = new PropertyMetadata('filter');
  function get_filter($receiver) {
    return filter.getValue_vm3wpz$($receiver, filter_metadata);
  }
  function set_filter($receiver, filter_0) {
    filter.setValue_kbwfbo$($receiver, filter_metadata, filter_0);
  }
  var imageOrientation;
  var imageOrientation_metadata = new PropertyMetadata('imageOrientation');
  function get_imageOrientation($receiver) {
    return imageOrientation.getValue_vm3wpz$($receiver, imageOrientation_metadata);
  }
  function set_imageOrientation($receiver, imageOrientation_0) {
    imageOrientation.setValue_kbwfbo$($receiver, imageOrientation_metadata, imageOrientation_0);
  }
  var imageRendering;
  var imageRendering_metadata = new PropertyMetadata('imageRendering');
  function get_imageRendering($receiver) {
    return imageRendering.getValue_vm3wpz$($receiver, imageRendering_metadata);
  }
  function set_imageRendering($receiver, imageRendering_0) {
    imageRendering.setValue_kbwfbo$($receiver, imageRendering_metadata, imageRendering_0);
  }
  var imageResolution;
  var imageResolution_metadata = new PropertyMetadata('imageResolution');
  function get_imageResolution($receiver) {
    return imageResolution.getValue_vm3wpz$($receiver, imageResolution_metadata);
  }
  function set_imageResolution($receiver, imageResolution_0) {
    imageResolution.setValue_kbwfbo$($receiver, imageResolution_metadata, imageResolution_0);
  }
  var objectFit;
  var objectFit_metadata = new PropertyMetadata('objectFit');
  function get_objectFit($receiver) {
    return objectFit.getValue_vm3wpz$($receiver, objectFit_metadata);
  }
  function set_objectFit($receiver, objectFit_0) {
    objectFit.setValue_kbwfbo$($receiver, objectFit_metadata, objectFit_0);
  }
  var objectPosition;
  var objectPosition_metadata = new PropertyMetadata('objectPosition');
  function get_objectPosition($receiver) {
    return objectPosition.getValue_vm3wpz$($receiver, objectPosition_metadata);
  }
  function set_objectPosition($receiver, objectPosition_0) {
    objectPosition.setValue_kbwfbo$($receiver, objectPosition_metadata, objectPosition_0);
  }
  var mask;
  var mask_metadata = new PropertyMetadata('mask');
  function get_mask($receiver) {
    return mask.getValue_vm3wpz$($receiver, mask_metadata);
  }
  function set_mask($receiver, mask_0) {
    mask.setValue_kbwfbo$($receiver, mask_metadata, mask_0);
  }
  var maskType;
  var maskType_metadata = new PropertyMetadata('maskType');
  function get_maskType($receiver) {
    return maskType.getValue_vm3wpz$($receiver, maskType_metadata);
  }
  function set_maskType($receiver, maskType_0) {
    maskType.setValue_kbwfbo$($receiver, maskType_metadata, maskType_0);
  }
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  function get_mark($receiver) {
    return mark.getValue_vm3wpz$($receiver, mark_metadata);
  }
  function set_mark($receiver, mark_0) {
    mark.setValue_kbwfbo$($receiver, mark_metadata, mark_0);
  }
  var markAfter;
  var markAfter_metadata = new PropertyMetadata('markAfter');
  function get_markAfter($receiver) {
    return markAfter.getValue_vm3wpz$($receiver, markAfter_metadata);
  }
  function set_markAfter($receiver, markAfter_0) {
    markAfter.setValue_kbwfbo$($receiver, markAfter_metadata, markAfter_0);
  }
  var markBefore;
  var markBefore_metadata = new PropertyMetadata('markBefore');
  function get_markBefore($receiver) {
    return markBefore.getValue_vm3wpz$($receiver, markBefore_metadata);
  }
  function set_markBefore($receiver, markBefore_0) {
    markBefore.setValue_kbwfbo$($receiver, markBefore_metadata, markBefore_0);
  }
  var phonemes;
  var phonemes_metadata = new PropertyMetadata('phonemes');
  function get_phonemes($receiver) {
    return phonemes.getValue_vm3wpz$($receiver, phonemes_metadata);
  }
  function set_phonemes($receiver, phonemes_0) {
    phonemes.setValue_kbwfbo$($receiver, phonemes_metadata, phonemes_0);
  }
  var rest;
  var rest_metadata = new PropertyMetadata('rest');
  function get_rest($receiver) {
    return rest.getValue_vm3wpz$($receiver, rest_metadata);
  }
  function set_rest($receiver, rest_0) {
    rest.setValue_kbwfbo$($receiver, rest_metadata, rest_0);
  }
  var restAfter;
  var restAfter_metadata = new PropertyMetadata('restAfter');
  function get_restAfter($receiver) {
    return restAfter.getValue_vm3wpz$($receiver, restAfter_metadata);
  }
  function set_restAfter($receiver, restAfter_0) {
    restAfter.setValue_kbwfbo$($receiver, restAfter_metadata, restAfter_0);
  }
  var restBefore;
  var restBefore_metadata = new PropertyMetadata('restBefore');
  function get_restBefore($receiver) {
    return restBefore.getValue_vm3wpz$($receiver, restBefore_metadata);
  }
  function set_restBefore($receiver, restBefore_0) {
    restBefore.setValue_kbwfbo$($receiver, restBefore_metadata, restBefore_0);
  }
  var voiceBalance;
  var voiceBalance_metadata = new PropertyMetadata('voiceBalance');
  function get_voiceBalance($receiver) {
    return voiceBalance.getValue_vm3wpz$($receiver, voiceBalance_metadata);
  }
  function set_voiceBalance($receiver, voiceBalance_0) {
    voiceBalance.setValue_kbwfbo$($receiver, voiceBalance_metadata, voiceBalance_0);
  }
  var voiceDuration;
  var voiceDuration_metadata = new PropertyMetadata('voiceDuration');
  function get_voiceDuration($receiver) {
    return voiceDuration.getValue_vm3wpz$($receiver, voiceDuration_metadata);
  }
  function set_voiceDuration($receiver, voiceDuration_0) {
    voiceDuration.setValue_kbwfbo$($receiver, voiceDuration_metadata, voiceDuration_0);
  }
  var voicePitch;
  var voicePitch_metadata = new PropertyMetadata('voicePitch');
  function get_voicePitch($receiver) {
    return voicePitch.getValue_vm3wpz$($receiver, voicePitch_metadata);
  }
  function set_voicePitch($receiver, voicePitch_0) {
    voicePitch.setValue_kbwfbo$($receiver, voicePitch_metadata, voicePitch_0);
  }
  var voicePitchRange;
  var voicePitchRange_metadata = new PropertyMetadata('voicePitchRange');
  function get_voicePitchRange($receiver) {
    return voicePitchRange.getValue_vm3wpz$($receiver, voicePitchRange_metadata);
  }
  function set_voicePitchRange($receiver, voicePitchRange_0) {
    voicePitchRange.setValue_kbwfbo$($receiver, voicePitchRange_metadata, voicePitchRange_0);
  }
  var voiceRate;
  var voiceRate_metadata = new PropertyMetadata('voiceRate');
  function get_voiceRate($receiver) {
    return voiceRate.getValue_vm3wpz$($receiver, voiceRate_metadata);
  }
  function set_voiceRate($receiver, voiceRate_0) {
    voiceRate.setValue_kbwfbo$($receiver, voiceRate_metadata, voiceRate_0);
  }
  var voiceStress;
  var voiceStress_metadata = new PropertyMetadata('voiceStress');
  function get_voiceStress($receiver) {
    return voiceStress.getValue_vm3wpz$($receiver, voiceStress_metadata);
  }
  function set_voiceStress($receiver, voiceStress_0) {
    voiceStress.setValue_kbwfbo$($receiver, voiceStress_metadata, voiceStress_0);
  }
  var voiceVolume;
  var voiceVolume_metadata = new PropertyMetadata('voiceVolume');
  function get_voiceVolume($receiver) {
    return voiceVolume.getValue_vm3wpz$($receiver, voiceVolume_metadata);
  }
  function set_voiceVolume($receiver, voiceVolume_0) {
    voiceVolume.setValue_kbwfbo$($receiver, voiceVolume_metadata, voiceVolume_0);
  }
  var marqueeDirection;
  var marqueeDirection_metadata = new PropertyMetadata('marqueeDirection');
  function get_marqueeDirection($receiver) {
    return marqueeDirection.getValue_vm3wpz$($receiver, marqueeDirection_metadata);
  }
  function set_marqueeDirection($receiver, marqueeDirection_0) {
    marqueeDirection.setValue_kbwfbo$($receiver, marqueeDirection_metadata, marqueeDirection_0);
  }
  var marqueePlayCount;
  var marqueePlayCount_metadata = new PropertyMetadata('marqueePlayCount');
  function get_marqueePlayCount($receiver) {
    return marqueePlayCount.getValue_vm3wpz$($receiver, marqueePlayCount_metadata);
  }
  function set_marqueePlayCount($receiver, marqueePlayCount_0) {
    marqueePlayCount.setValue_kbwfbo$($receiver, marqueePlayCount_metadata, marqueePlayCount_0);
  }
  var marqueeSpeed;
  var marqueeSpeed_metadata = new PropertyMetadata('marqueeSpeed');
  function get_marqueeSpeed($receiver) {
    return marqueeSpeed.getValue_vm3wpz$($receiver, marqueeSpeed_metadata);
  }
  function set_marqueeSpeed($receiver, marqueeSpeed_0) {
    marqueeSpeed.setValue_kbwfbo$($receiver, marqueeSpeed_metadata, marqueeSpeed_0);
  }
  var marqueeStyle;
  var marqueeStyle_metadata = new PropertyMetadata('marqueeStyle');
  function get_marqueeStyle($receiver) {
    return marqueeStyle.getValue_vm3wpz$($receiver, marqueeStyle_metadata);
  }
  function set_marqueeStyle($receiver, marqueeStyle_0) {
    marqueeStyle.setValue_kbwfbo$($receiver, marqueeStyle_metadata, marqueeStyle_0);
  }
  var zoom;
  var zoom_metadata = new PropertyMetadata('zoom');
  function get_zoom($receiver) {
    return zoom.getValue_vm3wpz$($receiver, zoom_metadata);
  }
  function set_zoom($receiver, zoom_0) {
    zoom.setValue_kbwfbo$($receiver, zoom_metadata, zoom_0);
  }
  var src;
  var src_metadata = new PropertyMetadata('src');
  function get_src($receiver) {
    return src.getValue_vm3wpz$($receiver, src_metadata);
  }
  function set_src($receiver, src_0) {
    src.setValue_kbwfbo$($receiver, src_metadata, src_0);
  }
  var isScrollableVertically;
  var isScrollableVertically_metadata = new PropertyMetadata('isScrollableVertically');
  function get_isScrollableVertically($receiver) {
    return isScrollableVertically.getValue_vm3wpz$($receiver, isScrollableVertically_metadata);
  }
  function set_isScrollableVertically($receiver, isScrollableVertically_0) {
    isScrollableVertically.setValue_bzoqk2$($receiver, isScrollableVertically_metadata, isScrollableVertically_0);
  }
  var isScrollableHorizontally;
  var isScrollableHorizontally_metadata = new PropertyMetadata('isScrollableHorizontally');
  function get_isScrollableHorizontally($receiver) {
    return isScrollableHorizontally.getValue_vm3wpz$($receiver, isScrollableHorizontally_metadata);
  }
  function set_isScrollableHorizontally($receiver, isScrollableHorizontally_0) {
    isScrollableHorizontally.setValue_bzoqk2$($receiver, isScrollableHorizontally_metadata, isScrollableHorizontally_0);
  }
  function active($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':active', rules);
  }
  function after($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':after', rules);
  }
  function before($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':before', rules);
  }
  function checked($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':checked', rules);
  }
  function disabled($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':disabled', rules);
  }
  function empty($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':empty', rules);
  }
  function enabled($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':enabled', rules);
  }
  function firstChild($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':first-child', rules);
  }
  function firstLetter($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':first-letter', rules);
  }
  function firstLine($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':first-line', rules);
  }
  function firstOfType($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':first-of-type', rules);
  }
  function focus($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':focus', rules);
  }
  function hover($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':hover', rules);
  }
  function inRange($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':in-range', rules);
  }
  function invalid($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':invalid', rules);
  }
  function lastChild($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':last-child', rules);
  }
  function lastOfType($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':last-of-type', rules);
  }
  function onlyChild($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':only-child', rules);
  }
  function onlyOfType($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':only-of-type', rules);
  }
  function optional($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':optional', rules);
  }
  function outOfRange($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':out-of-range', rules);
  }
  function readOnly($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':read-only', rules);
  }
  function readWrite($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':read-write', rules);
  }
  function required($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':required', rules);
  }
  function root($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':root', rules);
  }
  function selection($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':selection', rules);
  }
  function target($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':target', rules);
  }
  function unvisited($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':link', rules);
  }
  function valid($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':valid', rules);
  }
  function visited($receiver, rules) {
    return $receiver.addPseudo_u7blh4$(':visited', rules);
  }
  function media($receiver, name, rules) {
    return $receiver.addAtRule_u7blh4$('media ' + name, rules);
  }
  function get_active($receiver) {
    return new PseudoSelector($receiver, ':active');
  }
  function get_after($receiver) {
    return new PseudoSelector($receiver, ':after');
  }
  function get_before($receiver) {
    return new PseudoSelector($receiver, ':before');
  }
  function get_checked($receiver) {
    return new PseudoSelector($receiver, ':checked');
  }
  function get_disabled($receiver) {
    return new PseudoSelector($receiver, ':disabled');
  }
  function get_empty($receiver) {
    return new PseudoSelector($receiver, ':empty');
  }
  function get_enabled($receiver) {
    return new PseudoSelector($receiver, ':enabled');
  }
  function get_firstChild($receiver) {
    return new PseudoSelector($receiver, ':first-child');
  }
  function get_firstLetter($receiver) {
    return new PseudoSelector($receiver, ':first-letter');
  }
  function get_firstLine($receiver) {
    return new PseudoSelector($receiver, ':first-line');
  }
  function get_firstOfType($receiver) {
    return new PseudoSelector($receiver, ':first-of-type');
  }
  function get_focus($receiver) {
    return new PseudoSelector($receiver, ':focus');
  }
  function get_hover($receiver) {
    return new PseudoSelector($receiver, ':hover');
  }
  function get_inRange($receiver) {
    return new PseudoSelector($receiver, ':in-range');
  }
  function get_invalid($receiver) {
    return new PseudoSelector($receiver, ':invalid');
  }
  function get_lastChild($receiver) {
    return new PseudoSelector($receiver, ':last-child');
  }
  function get_lastOfType($receiver) {
    return new PseudoSelector($receiver, ':last-of-type');
  }
  function get_onlyChild($receiver) {
    return new PseudoSelector($receiver, ':only-child');
  }
  function get_onlyOfType($receiver) {
    return new PseudoSelector($receiver, ':only-of-type');
  }
  function get_optional($receiver) {
    return new PseudoSelector($receiver, ':optional');
  }
  function get_outOfRange($receiver) {
    return new PseudoSelector($receiver, ':out-of-range');
  }
  function get_readOnly($receiver) {
    return new PseudoSelector($receiver, ':read-only');
  }
  function get_readWrite($receiver) {
    return new PseudoSelector($receiver, ':read-write');
  }
  function get_required($receiver) {
    return new PseudoSelector($receiver, ':required');
  }
  function get_root($receiver) {
    return new PseudoSelector($receiver, ':root');
  }
  function get_selection($receiver) {
    return new PseudoSelector($receiver, ':selection');
  }
  function get_target($receiver) {
    return new PseudoSelector($receiver, ':target');
  }
  function get_unvisited($receiver) {
    return new PseudoSelector($receiver, ':link');
  }
  function get_valid($receiver) {
    return new PseudoSelector($receiver, ':valid');
  }
  function get_visited($receiver) {
    return new PseudoSelector($receiver, ':visited');
  }
  function Alignment(name) {
    Alignment$Companion_getInstance();
    this.name = name;
  }
  Alignment.prototype.toString = function () {
    return this.name;
  };
  function Alignment$Companion() {
    Alignment$Companion_instance = this;
    this.Start = new Alignment('flex-start');
    this.End = new Alignment('flex-end');
    this.Center = new Alignment('center');
    this.Baseline = new Alignment('baseline');
    this.Stretch = new Alignment('stretch');
  }
  Alignment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Alignment$Companion_instance = null;
  function Alignment$Companion_getInstance() {
    if (Alignment$Companion_instance === null) {
      new Alignment$Companion();
    }
    return Alignment$Companion_instance;
  }
  Alignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alignment',
    interfaces: []
  };
  Alignment.prototype.unbox = function () {
    return this.name;
  };
  Alignment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Alignment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function JustifyContent(name) {
    JustifyContent$Companion_getInstance();
    this.name = name;
  }
  JustifyContent.prototype.toString = function () {
    return this.name;
  };
  function JustifyContent$Companion() {
    JustifyContent$Companion_instance = this;
    this.Start = new JustifyContent('flex-start');
    this.End = new JustifyContent('flex-end');
    this.Center = new JustifyContent('center');
    this.SpaceBetween = new JustifyContent('space-between');
    this.SpaceAround = new JustifyContent('space-around');
    this.SpaceEvenly = new JustifyContent('space-evenly');
  }
  JustifyContent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JustifyContent$Companion_instance = null;
  function JustifyContent$Companion_getInstance() {
    if (JustifyContent$Companion_instance === null) {
      new JustifyContent$Companion();
    }
    return JustifyContent$Companion_instance;
  }
  JustifyContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JustifyContent',
    interfaces: []
  };
  JustifyContent.prototype.unbox = function () {
    return this.name;
  };
  JustifyContent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  JustifyContent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function TextAlign(name) {
    TextAlign$Companion_getInstance();
    this.name = name;
  }
  TextAlign.prototype.toString = function () {
    return this.name;
  };
  function TextAlign$Companion() {
    TextAlign$Companion_instance = this;
    this.Left = new TextAlign('left');
    this.Right = new TextAlign('right');
    this.Center = new TextAlign('center');
    this.Justify = new TextAlign('justify');
    this.Initial = new TextAlign('initial');
    this.Inherit = new TextAlign('inherit');
  }
  TextAlign$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextAlign$Companion_instance = null;
  function TextAlign$Companion_getInstance() {
    if (TextAlign$Companion_instance === null) {
      new TextAlign$Companion();
    }
    return TextAlign$Companion_instance;
  }
  TextAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextAlign',
    interfaces: []
  };
  TextAlign.prototype.unbox = function () {
    return this.name;
  };
  TextAlign.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  TextAlign.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function classRuleSet(classNamePrefix, rules) {
    if (classNamePrefix === void 0)
      classNamePrefix = null;
    var className = ClassNameGenerator_getInstance().getClassName_pdl1vj$(classNamePrefix);
    var selector = new ClassSelector(className);
    var $receiver = new RuleSet(selector);
    rules($receiver);
    var ruleSet = $receiver;
    addRuleSetToDocument(ruleSet);
    return ruleSet;
  }
  function stringRuleSet(selector, rules) {
    var stringSelector = new StringSelector(selector);
    var $receiver = new RuleSet(stringSelector);
    rules($receiver);
    var ruleSet = $receiver;
    addRuleSetToDocument(ruleSet);
    return ruleSet;
  }
  function addRuleSetToDocument(ruleSet) {
    var tmp$, tmp$_0, tmp$_1;
    var sheetElement = Kotlin.isType(tmp$ = document.createElement('style'), HTMLStyleElement) ? tmp$ : throwCCE();
    (tmp$_0 = document.head) != null ? tmp$_0.appendChild(sheetElement) : null;
    var sheet = Kotlin.isType(tmp$_1 = sheetElement.sheet, CSSStyleSheet) ? tmp$_1 : null;
    var tmp$_2;
    tmp$_2 = ruleSet.toRulesList().iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      sheet != null ? sheet.insertRule(element.toString(), sheet.cssRules.length) : null;
    }
  }
  function DynamicDimensionRuleDelegate(name) {
    this.name = name;
  }
  DynamicDimensionRuleDelegate.prototype.getValue_vm3wpz$ = function (ruleSet, property) {
    return ruleSet.getProperty_ytbaoo$(this.name);
  };
  DynamicDimensionRuleDelegate.prototype.setValue_s6fbwj$ = function (ruleSet, property, value) {
    var tmp$;
    if (Kotlin.isType(value, DynamicDimension)) {
      tmp$ = property.callableName;
      if (equals(tmp$, getPropertyCallableRef('width', 1, function ($receiver) {
        return get_width($receiver);
      }, function ($receiver, value) {
        set_width($receiver, value);
      }).callableName))
        value.configureWidth_mw7j13$(ruleSet);
      else if (equals(tmp$, getPropertyCallableRef('height', 1, function ($receiver) {
        return get_height($receiver);
      }, function ($receiver, value) {
        set_height($receiver, value);
      }).callableName))
        value.configureHeight_mw7j13$(ruleSet);
      else {
        throw IllegalArgumentException_init('DynamicDimensionRuleDelegate can only set width, and height');
      }
    }
     else {
      ruleSet.setProperty_umlfku$(this.name, value);
    }
  };
  DynamicDimensionRuleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicDimensionRuleDelegate',
    interfaces: []
  };
  function OrientationRuleDelegate() {
  }
  OrientationRuleDelegate.prototype.getValue_vm3wpz$ = function (ruleSet, property) {
    var tmp$;
    var flexDirection = ruleSet.getProperty_ytbaoo$('flex-direction');
    switch (flexDirection) {
      case 'row':
        tmp$ = LinearLayout$Orientation$Horizontal_getInstance();
        break;
      case 'column':
        tmp$ = LinearLayout$Orientation$Horizontal_getInstance();
        break;
      default:tmp$ = null;
        break;
    }
    return tmp$;
  };
  OrientationRuleDelegate.prototype.setValue_ide5sl$ = function (ruleSet, property, value) {
    if (equals(value, LinearLayout$Orientation$Horizontal_getInstance()))
      ruleSet.setProperty_umlfku$('flex-direction', 'row');
    else if (equals(value, LinearLayout$Orientation$Vertical_getInstance()))
      ruleSet.setProperty_umlfku$('flex-direction', 'column');
    else if (value == null)
      ruleSet.setProperty_umlfku$('flex-direction', 'initial');
  };
  OrientationRuleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrientationRuleDelegate',
    interfaces: []
  };
  function Rule(name, value) {
    this.name = name;
    this.value = value;
  }
  Rule.prototype.toString = function () {
    return this.name + ':' + this.value + ';';
  };
  Rule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rule',
    interfaces: []
  };
  function RuleDelegate(name) {
    this.name = name;
  }
  RuleDelegate.prototype.getValue_vm3wpz$ = function (ruleSet, property) {
    return ruleSet.getProperty_ytbaoo$(this.name);
  };
  RuleDelegate.prototype.setValue_kbwfbo$ = function (ruleSet, property, value) {
    ruleSet.setProperty_umlfku$(this.name, value);
  };
  RuleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleDelegate',
    interfaces: []
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function RuleSet(selector, atRule) {
    if (atRule === void 0)
      atRule = null;
    this.selector = selector;
    this.atRule = atRule;
    this.rules = LinkedHashSet_init();
    this.subRuleSets = null;
    this.atRuleSets = null;
  }
  RuleSet.prototype.getProperty_ytbaoo$ = function (name) {
    var tmp$;
    var $receiver = this.rules;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, Rule))
        destination.add_11rb$(element);
    }
    var list = destination;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = list.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (equals(element_0.name, name)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$.value : null;
  };
  RuleSet.prototype.set_puj7f4$ = function (key, value) {
    this.rules.add_11rb$(new Rule(key, value));
  };
  RuleSet.prototype.setProperty_umlfku$ = function (name, value) {
    this.rules.add_11rb$(new Rule(name, value));
  };
  RuleSet.prototype.toRulesList = function () {
    var tmp$, tmp$_0;
    var list = mutableListOf([this]);
    if (this.atRule != null)
      return list;
    if ((tmp$ = this.subRuleSets) != null) {
      var tmp$_1;
      tmp$_1 = tmp$.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        list.addAll_brywnq$(element.toRulesList());
      }
    }
    if ((tmp$_0 = this.atRuleSets) != null) {
      var tmp$_2;
      tmp$_2 = tmp$_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        list.addAll_brywnq$(element_0.toRulesList());
      }
    }
    return list;
  };
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  RuleSet.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    if (this.atRule != null) {
      $receiver.append_gw00v9$(this.atRule);
      $receiver.append_s8itvh$(123);
    }
    $receiver.append_gw00v9$(this.selector.toString());
    $receiver.append_gw00v9$('{');
    var tmp$;
    tmp$ = this.rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_gw00v9$(element.toString());
    }
    $receiver.append_s8itvh$(125);
    if (this.atRule != null) {
      var tmp$_0;
      if ((tmp$_0 = this.subRuleSets) != null) {
        var tmp$_1;
        tmp$_1 = tmp$_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          $receiver.append_s8itvh$(32);
          $receiver.append_s8jyv4$(element_0);
        }
      }
      $receiver.append_s8itvh$(125);
    }
    return $receiver.toString();
  };
  RuleSet.prototype.addPseudo_u7blh4$ = function (name, rules) {
    var tmp$;
    var $receiver = new RuleSet(new PseudoSelector(this.selector, name));
    rules($receiver);
    var set = $receiver;
    if (this.subRuleSets == null) {
      this.subRuleSets = LinkedHashSet_init();
    }
    (tmp$ = this.subRuleSets) != null ? tmp$.add_11rb$(set) : null;
    return set;
  };
  RuleSet.prototype.addAtRule_u7blh4$ = function (name, rules) {
    var tmp$;
    if (this.atRuleSets == null) {
      this.atRuleSets = LinkedHashSet_init();
    }
    var $receiver = new RuleSet(this.selector, '@' + name);
    rules($receiver);
    var set = $receiver;
    (tmp$ = this.atRuleSets) != null ? tmp$.add_11rb$(set) : null;
    return set;
  };
  RuleSet.prototype.addCompoundRuleSet_6wkzfs$ = function (parentSelector, rules) {
    var tmp$;
    var $receiver = new RuleSet(new CompoundSelector(listOf([parentSelector, this.selector])));
    rules($receiver);
    var set = $receiver;
    if (this.subRuleSets == null) {
      this.subRuleSets = LinkedHashSet_init();
    }
    (tmp$ = this.subRuleSets) != null ? tmp$.add_11rb$(set) : null;
    return set;
  };
  RuleSet.prototype.addCompoundClassRule_oumwtr$ = function (parentRuleSet, rules) {
    var tmp$;
    var $receiver = new RuleSet(new CompoundSelector(listOf([parentRuleSet.selector, this.selector])));
    rules($receiver);
    var set = $receiver;
    if (this.subRuleSets == null) {
      this.subRuleSets = LinkedHashSet_init();
    }
    (tmp$ = this.subRuleSets) != null ? tmp$.add_11rb$(set) : null;
    return set;
  };
  RuleSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleSet',
    interfaces: []
  };
  function ScrollableRuleDelegate(isVertically) {
    this.isVertically = isVertically;
  }
  ScrollableRuleDelegate.prototype.getValue_vm3wpz$ = function (ruleSet, property) {
    var tmp$;
    if (this.isVertically) {
      tmp$ = (equals(ruleSet.getProperty_ytbaoo$('overflow-y'), 'auto') && ruleSet.getProperty_ytbaoo$('min-height') != null);
    }
     else {
      tmp$ = (equals(ruleSet.getProperty_ytbaoo$('overflow-x'), 'auto') && ruleSet.getProperty_ytbaoo$('min-width') != null);
    }
    return tmp$;
  };
  ScrollableRuleDelegate.prototype.setValue_bzoqk2$ = function (ruleSet, property, value) {
    if (this.isVertically) {
      ruleSet.setProperty_umlfku$('overflow-y', value ? 'auto' : 'hidden');
      if (value && ruleSet.getProperty_ytbaoo$('min-height') == null) {
        ruleSet.setProperty_umlfku$('min-height', '0');
      }
    }
     else {
      ruleSet.setProperty_umlfku$('overflow-x', value ? 'auto' : 'hidden');
      if (value && ruleSet.getProperty_ytbaoo$('min-width') == null) {
        ruleSet.setProperty_umlfku$('min-width', '0');
      }
    }
  };
  ScrollableRuleDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollableRuleDelegate',
    interfaces: []
  };
  function Selector() {
  }
  Selector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Selector',
    interfaces: []
  };
  function ClassSelector(name) {
    Selector.call(this);
    this.name = name;
  }
  ClassSelector.prototype.toString = function () {
    return startsWith(this.name, 46) ? this.name : '.' + this.name;
  };
  ClassSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassSelector',
    interfaces: [Selector]
  };
  function CompoundSelector(names) {
    Selector.call(this);
    this.names = names;
  }
  CompoundSelector.prototype.toString = function () {
    return joinToString(this.names, ' ');
  };
  CompoundSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundSelector',
    interfaces: [Selector]
  };
  function IdSelector(name) {
    Selector.call(this);
    this.name = name;
  }
  IdSelector.prototype.toString = function () {
    return startsWith(this.name, 35) ? this.name : '#' + this.name;
  };
  IdSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdSelector',
    interfaces: [Selector]
  };
  function PseudoSelector(selector, name) {
    Selector.call(this);
    this.selector = selector;
    this.name = name;
  }
  PseudoSelector.prototype.toString = function () {
    return this.selector.toString() + this.name;
  };
  PseudoSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PseudoSelector',
    interfaces: [Selector]
  };
  function StringSelector(selector) {
    Selector.call(this);
    this.selector = selector;
  }
  StringSelector.prototype.toString = function () {
    return this.selector;
  };
  StringSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringSelector',
    interfaces: [Selector]
  };
  function Dimension() {
  }
  Dimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dimension',
    interfaces: []
  };
  function DynamicDimension() {
    Dimension.call(this);
  }
  DynamicDimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicDimension',
    interfaces: [Dimension]
  };
  function LinearDimension(value, unit) {
    Dimension.call(this);
    this.value = value;
    this.unit = unit;
  }
  LinearDimension.prototype.toString = function () {
    var string = this.value.toString();
    return equals(string, '0') ? string : string + this.unit;
  };
  function LinearDimension$Unit(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LinearDimension$Unit_initFields() {
    LinearDimension$Unit_initFields = function () {
    };
    LinearDimension$Unit$PX_instance = new LinearDimension$Unit('PX', 0, 'px');
    LinearDimension$Unit$EM_instance = new LinearDimension$Unit('EM', 1, 'em');
    LinearDimension$Unit$PERCENT_instance = new LinearDimension$Unit('PERCENT', 2, '%');
    LinearDimension$Unit$EX_instance = new LinearDimension$Unit('EX', 3, 'ex');
    LinearDimension$Unit$INCH_instance = new LinearDimension$Unit('INCH', 4, 'in');
    LinearDimension$Unit$CM_instance = new LinearDimension$Unit('CM', 5, 'cm');
    LinearDimension$Unit$MM_instance = new LinearDimension$Unit('MM', 6, 'mm');
    LinearDimension$Unit$PT_instance = new LinearDimension$Unit('PT', 7, 'pt');
    LinearDimension$Unit$VH_instance = new LinearDimension$Unit('VH', 8, 'vh');
    LinearDimension$Unit$VW_instance = new LinearDimension$Unit('VW', 9, 'vw');
    LinearDimension$Unit$PC_instance = new LinearDimension$Unit('PC', 10, 'pc');
  }
  var LinearDimension$Unit$PX_instance;
  function LinearDimension$Unit$PX_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$PX_instance;
  }
  var LinearDimension$Unit$EM_instance;
  function LinearDimension$Unit$EM_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$EM_instance;
  }
  var LinearDimension$Unit$PERCENT_instance;
  function LinearDimension$Unit$PERCENT_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$PERCENT_instance;
  }
  var LinearDimension$Unit$EX_instance;
  function LinearDimension$Unit$EX_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$EX_instance;
  }
  var LinearDimension$Unit$INCH_instance;
  function LinearDimension$Unit$INCH_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$INCH_instance;
  }
  var LinearDimension$Unit$CM_instance;
  function LinearDimension$Unit$CM_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$CM_instance;
  }
  var LinearDimension$Unit$MM_instance;
  function LinearDimension$Unit$MM_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$MM_instance;
  }
  var LinearDimension$Unit$PT_instance;
  function LinearDimension$Unit$PT_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$PT_instance;
  }
  var LinearDimension$Unit$VH_instance;
  function LinearDimension$Unit$VH_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$VH_instance;
  }
  var LinearDimension$Unit$VW_instance;
  function LinearDimension$Unit$VW_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$VW_instance;
  }
  var LinearDimension$Unit$PC_instance;
  function LinearDimension$Unit$PC_getInstance() {
    LinearDimension$Unit_initFields();
    return LinearDimension$Unit$PC_instance;
  }
  LinearDimension$Unit.prototype.toString = function () {
    return this.value;
  };
  LinearDimension$Unit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unit',
    interfaces: [Enum]
  };
  function LinearDimension$Unit$values() {
    return [LinearDimension$Unit$PX_getInstance(), LinearDimension$Unit$EM_getInstance(), LinearDimension$Unit$PERCENT_getInstance(), LinearDimension$Unit$EX_getInstance(), LinearDimension$Unit$INCH_getInstance(), LinearDimension$Unit$CM_getInstance(), LinearDimension$Unit$MM_getInstance(), LinearDimension$Unit$PT_getInstance(), LinearDimension$Unit$VH_getInstance(), LinearDimension$Unit$VW_getInstance(), LinearDimension$Unit$PC_getInstance()];
  }
  LinearDimension$Unit.values = LinearDimension$Unit$values;
  function LinearDimension$Unit$valueOf(name) {
    switch (name) {
      case 'PX':
        return LinearDimension$Unit$PX_getInstance();
      case 'EM':
        return LinearDimension$Unit$EM_getInstance();
      case 'PERCENT':
        return LinearDimension$Unit$PERCENT_getInstance();
      case 'EX':
        return LinearDimension$Unit$EX_getInstance();
      case 'INCH':
        return LinearDimension$Unit$INCH_getInstance();
      case 'CM':
        return LinearDimension$Unit$CM_getInstance();
      case 'MM':
        return LinearDimension$Unit$MM_getInstance();
      case 'PT':
        return LinearDimension$Unit$PT_getInstance();
      case 'VH':
        return LinearDimension$Unit$VH_getInstance();
      case 'VW':
        return LinearDimension$Unit$VW_getInstance();
      case 'PC':
        return LinearDimension$Unit$PC_getInstance();
      default:throwISE('No enum constant com.narbase.kunafa.core.dimensions.LinearDimension.Unit.' + name);
    }
  }
  LinearDimension$Unit.valueOf_61zpoe$ = LinearDimension$Unit$valueOf;
  LinearDimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinearDimension',
    interfaces: [Dimension]
  };
  function get_px($receiver) {
    var unit = LinearDimension$Unit$PX_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_em($receiver) {
    var unit = LinearDimension$Unit$EM_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_percent($receiver) {
    var unit = LinearDimension$Unit$PERCENT_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_ex($receiver) {
    var unit = LinearDimension$Unit$EX_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_inch($receiver) {
    var unit = LinearDimension$Unit$INCH_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_cm($receiver) {
    var unit = LinearDimension$Unit$CM_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_mm($receiver) {
    var unit = LinearDimension$Unit$MM_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_pt($receiver) {
    var unit = LinearDimension$Unit$PT_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_pc($receiver) {
    var unit = LinearDimension$Unit$PC_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_vh($receiver) {
    var unit = LinearDimension$Unit$VH_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function get_vw($receiver) {
    var unit = LinearDimension$Unit$VW_getInstance();
    return new LinearDimension(numberToDouble($receiver), unit);
  }
  function dimen(value, unit) {
    return new LinearDimension(numberToDouble(value), unit);
  }
  function MatchParent() {
    DynamicDimension.call(this);
  }
  function MatchParent$configureHeight$lambda($receiver) {
    set_alignSelf($receiver, Alignment$Companion_getInstance().Stretch);
    return Unit;
  }
  MatchParent.prototype.configureHeight_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('height', '100%');
    ruleSet.addCompoundClassRule_oumwtr$(LinearLayout$Companion_getInstance().horizontalLayoutClass, MatchParent$configureHeight$lambda);
  };
  function MatchParent$configureWidth$lambda($receiver) {
    set_alignSelf($receiver, Alignment$Companion_getInstance().Stretch);
    return Unit;
  }
  MatchParent.prototype.configureWidth_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('width', '100%');
    ruleSet.addCompoundClassRule_oumwtr$(LinearLayout$Companion_getInstance().verticalLayoutClass, MatchParent$configureWidth$lambda);
  };
  MatchParent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchParent',
    interfaces: [DynamicDimension]
  };
  function get_matchParent($receiver) {
    return new MatchParent();
  }
  function Weight(value, basis) {
    DynamicDimension.call(this);
    this.value_0 = value;
    this.basis = basis;
  }
  Weight.prototype.configureHeight_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('height', 'auto');
    ruleSet.setProperty_umlfku$('flex-grow', this.value_0.toString());
    if (this.basis == null) {
      ruleSet.setProperty_umlfku$('flex-basis', this.value_0.toString() + 'px');
    }
     else {
      ruleSet.setProperty_umlfku$('flex-basis', toString(this.basis) + 'px');
    }
    set_minHeight(ruleSet, get_px(0));
  };
  Weight.prototype.configureWidth_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('width', 'auto');
    ruleSet.setProperty_umlfku$('flex-grow', this.value_0.toString());
    if (this.basis == null) {
      ruleSet.setProperty_umlfku$('flex-basis', this.value_0.toString() + 'px');
    }
     else {
      ruleSet.setProperty_umlfku$('flex-basis', toString(this.basis) + 'px');
    }
    set_minWidth(ruleSet, get_px(0));
  };
  Weight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Weight',
    interfaces: [DynamicDimension]
  };
  function weightOf($receiver, value, basis) {
    if (basis === void 0)
      basis = null;
    return new Weight(value, basis);
  }
  function WrapContent() {
    DynamicDimension.call(this);
  }
  WrapContent.prototype.configureHeight_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('height', 'auto');
  };
  WrapContent.prototype.configureWidth_mw7j13$ = function (ruleSet) {
    ruleSet.setProperty_umlfku$('width', 'auto');
  };
  WrapContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrapContent',
    interfaces: [DynamicDimension]
  };
  function get_wrapContent($receiver) {
    return new WrapContent();
  }
  function Color() {
    Color$Companion_getInstance();
    this.red_0 = 255;
    this.green_0 = 255;
    this.blue_0 = 255;
    this.alpha_0 = 1.0;
    this.colorString_0 = null;
  }
  function Color$Companion() {
    Color$Companion_instance = this;
    this.red = Color_init_0(255, 0, 0);
    this.blue = Color_init_0(0, 0, 255);
    this.white = Color_init_0(255, 255, 255);
    this.black = Color_init_0(0, 0, 0);
    this.transparent = Color_init_0(0, 0, 0, 0.0);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.prototype.toString = function () {
    return this.toCss();
  };
  Color.prototype.toCss = function () {
    var tmp$;
    var localColorString = this.colorString_0;
    if (localColorString == null) {
      tmp$ = 'rgba(' + this.red_0 + ',' + this.green_0 + ',' + this.blue_0 + ',' + this.alpha_0 + ')';
    }
     else {
      tmp$ = startsWith_0(localColorString, '#') ? localColorString : '#' + toString(localColorString);
    }
    return tmp$;
  };
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function Color_init(color, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this);
    $this.colorString_0 = color;
    return $this;
  }
  function Color_init_0(r, g, b, a, $this) {
    if (a === void 0)
      a = 1.0;
    $this = $this || Object.create(Color.prototype);
    Color.call($this);
    $this.red_0 = r;
    $this.green_0 = g;
    $this.blue_0 = b;
    $this.alpha_0 = a;
    return $this;
  }
  function LifecycleEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LifecycleEvent_initFields() {
    LifecycleEvent_initFields = function () {
    };
    LifecycleEvent$ViewWillMount_instance = new LifecycleEvent('ViewWillMount', 0);
    LifecycleEvent$ViewMounted_instance = new LifecycleEvent('ViewMounted', 1);
    LifecycleEvent$ViewWillBeRemoved_instance = new LifecycleEvent('ViewWillBeRemoved', 2);
    LifecycleEvent$ViewRemoved_instance = new LifecycleEvent('ViewRemoved', 3);
  }
  var LifecycleEvent$ViewWillMount_instance;
  function LifecycleEvent$ViewWillMount_getInstance() {
    LifecycleEvent_initFields();
    return LifecycleEvent$ViewWillMount_instance;
  }
  var LifecycleEvent$ViewMounted_instance;
  function LifecycleEvent$ViewMounted_getInstance() {
    LifecycleEvent_initFields();
    return LifecycleEvent$ViewMounted_instance;
  }
  var LifecycleEvent$ViewWillBeRemoved_instance;
  function LifecycleEvent$ViewWillBeRemoved_getInstance() {
    LifecycleEvent_initFields();
    return LifecycleEvent$ViewWillBeRemoved_instance;
  }
  var LifecycleEvent$ViewRemoved_instance;
  function LifecycleEvent$ViewRemoved_getInstance() {
    LifecycleEvent_initFields();
    return LifecycleEvent$ViewRemoved_instance;
  }
  LifecycleEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LifecycleEvent',
    interfaces: [Enum]
  };
  function LifecycleEvent$values() {
    return [LifecycleEvent$ViewWillMount_getInstance(), LifecycleEvent$ViewMounted_getInstance(), LifecycleEvent$ViewWillBeRemoved_getInstance(), LifecycleEvent$ViewRemoved_getInstance()];
  }
  LifecycleEvent.values = LifecycleEvent$values;
  function LifecycleEvent$valueOf(name) {
    switch (name) {
      case 'ViewWillMount':
        return LifecycleEvent$ViewWillMount_getInstance();
      case 'ViewMounted':
        return LifecycleEvent$ViewMounted_getInstance();
      case 'ViewWillBeRemoved':
        return LifecycleEvent$ViewWillBeRemoved_getInstance();
      case 'ViewRemoved':
        return LifecycleEvent$ViewRemoved_getInstance();
      default:throwISE('No enum constant com.narbase.kunafa.core.lifecycle.LifecycleEvent.' + name);
    }
  }
  LifecycleEvent.valueOf_61zpoe$ = LifecycleEvent$valueOf;
  function LifecycleObserver() {
  }
  LifecycleObserver.prototype.viewWillMount_1xffwv$ = function (lifecycleOwner) {
  };
  LifecycleObserver.prototype.onViewMounted_1xffwv$ = function (lifecycleOwner) {
  };
  LifecycleObserver.prototype.viewWillBeRemoved_1xffwv$ = function (lifecycleOwner) {
  };
  LifecycleObserver.prototype.onViewRemoved_1xffwv$ = function (lifecycleOwner) {
  };
  LifecycleObserver.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleObserver',
    interfaces: []
  };
  function LifecycleOwner() {
  }
  LifecycleOwner.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LifecycleOwner',
    interfaces: []
  };
  function Observable() {
    this.value_s386z8$_0 = null;
    this.observers_0 = null;
  }
  Object.defineProperty(Observable.prototype, 'value', {
    get: function () {
      return this.value_s386z8$_0;
    },
    set: function (value) {
      var tmp$;
      this.value_s386z8$_0 = value;
      if ((tmp$ = this.observers_0) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          element(value);
        }
      }
    }
  });
  Observable.prototype.observe_qlkmfe$ = function (observer) {
    var tmp$, tmp$_0;
    if (((tmp$ = this.observers_0) != null ? tmp$.contains_11rb$(observer) : null) === true) {
      return;
    }
    if (this.observers_0 == null) {
      this.observers_0 = mutableListOf([observer]);
    }
     else {
      if (((tmp$_0 = this.observers_0) != null ? tmp$_0.add_11rb$(observer) : null) == null)
        throw ConcurrentModificationException_init();
    }
    observer(this.value);
  };
  Observable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observable',
    interfaces: []
  };
  function Route(meta, segments, component, parentRoute, parentView, referenceView, isExact) {
    Route$Companion_getInstance();
    this.meta = meta;
    this.segments = segments;
    this.component = component;
    this.parentRoute = parentRoute;
    this.parentView = parentView;
    this.referenceView = referenceView;
    this.isExact = isExact;
    this.children_0 = ArrayList_init();
  }
  Object.defineProperty(Route.prototype, 'path', {
    get: function () {
      return '/' + joinToString(this.segments, '/');
    }
  });
  Route.prototype.update = function () {
    var tmp$, tmp$_0;
    var oldPath = this.setupRouterToCurrentRoute_0();
    var windowSegments = Route$Companion_getInstance().getSegments_61zpoe$(window.location.pathname);
    if (this.doesMatch_0(windowSegments)) {
      (tmp$ = this.parentView) != null ? tmp$.mountAfter_6ftq4c$(this.component, this.referenceView) : null;
      this.updatePathParams_0(windowSegments);
      var tmp$_1;
      tmp$_1 = this.children_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.update();
      }
    }
     else {
      (tmp$_0 = this.parentView) != null ? tmp$_0.unMount_7bau7r$(this.component) : null;
    }
    this.restoreRouterConfig_0(oldPath);
  };
  Route.prototype.restoreRouterConfig_0 = function (oldPath) {
    Router_getInstance().parentRoute = this.parentRoute;
    Router_getInstance().currentPath = oldPath;
  };
  Route.prototype.setupRouterToCurrentRoute_0 = function () {
    var oldPath = Router_getInstance().currentPath;
    Router_getInstance().currentPath = this.meta.path;
    Router_getInstance().parentRoute = this;
    return oldPath;
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  Route.prototype.updatePathParams_0 = function (windowSegments) {
    var params = LinkedHashMap_init();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.segments.iterator();
    loop_label: while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      action$break: do {
        var tmp$_1, tmp$_2, tmp$_3;
        if (!Kotlin.isType(item, ParameterSegment))
          break action$break;
        var s = Kotlin.isType(tmp$_1 = item, ParameterSegment) ? tmp$_1 : null;
        var windowSegment = windowSegments.get_za3lpa$(index_0).text;
        tmp$_3 = (tmp$_2 = s != null ? s.text : null) != null ? tmp$_2 : '';
        params.put_xwzc9p$(tmp$_3, windowSegment);
      }
       while (false);
    }
    if (!params.isEmpty()) {
      this.meta.params.value = params;
    }
  };
  Route.prototype.add_p5wmg3$ = function (route) {
    this.children_0.add_11rb$(route);
  };
  Route.prototype.doesMatch_0 = function (windowSegments) {
    if (this.isExact) {
      if (this.segments.size !== windowSegments.size)
        return false;
    }
     else if (this.segments.size > windowSegments.size)
      return false;
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.segments.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!item.matches_vcffh3$(getOrNull(windowSegments, checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)))))
        return false;
    }
    return true;
  };
  function Route$Companion() {
    Route$Companion_instance = this;
  }
  function Route$Companion$createRoute$lambda($receiver) {
    $receiver.isVisible = false;
    return Unit;
  }
  Route$Companion.prototype.createRoute_g1afwu$ = function (parentView, path, isExact, isAbsolute, block) {
    if (isExact === void 0)
      isExact = false;
    if (isAbsolute === void 0)
      isAbsolute = false;
    var routePath = this.getPath_qz9155$(Router_getInstance().currentPath, path, isAbsolute);
    var routeSegments = this.getSegments_61zpoe$(routePath);
    var reference = view(parentView, void 0, Route$Companion$createRoute$lambda);
    var meta = new RouteMeta(routePath, new Observable());
    var component = block(meta);
    var route = new Route(meta, routeSegments, component, Router_getInstance().parentRoute, parentView, reference, isExact);
    this.addToParent_0(route);
    route.update();
    return route;
  };
  Route$Companion.prototype.addToParent_0 = function (route) {
    var tmp$;
    if (Router_getInstance().parentRoute == null) {
      Router_getInstance().add_p5wmg3$(route);
    }
     else {
      (tmp$ = Router_getInstance().parentRoute) != null ? (tmp$.add_p5wmg3$(route), Unit) : null;
    }
  };
  Route$Companion.prototype.getPath_qz9155$ = function (currentPath, path, isAbsolute) {
    var tmp$;
    var trimmedCurrentPath = trim(currentPath, Kotlin.charArrayOf(47));
    if (isAbsolute || isBlank(trimmedCurrentPath))
      tmp$ = '/' + trim(path, Kotlin.charArrayOf(47));
    else
      tmp$ = '/' + trimmedCurrentPath + '/' + trim(path, Kotlin.charArrayOf(47));
    return tmp$;
  };
  function Route$Companion$getComponent$ObjectLiteral(closure$block, closure$meta) {
    this.closure$block = closure$block;
    this.closure$meta = closure$meta;
    Component.call(this);
  }
  Route$Companion$getComponent$ObjectLiteral.prototype.getView_art3zr$ = function ($receiver) {
    return this.closure$block($receiver, this.closure$meta);
  };
  Route$Companion$getComponent$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Component]
  };
  Route$Companion.prototype.getComponent_99i513$ = function (meta, block) {
    return new Route$Companion$getComponent$ObjectLiteral(block, meta);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Route$Companion.prototype.getSegments_61zpoe$ = function (currentPath) {
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
      if (startsWith_0(item, ':')) {
        transform$result = new ParameterSegment(trim(item, Kotlin.charArrayOf(58)));
      }
       else {
        transform$result = new RouteSegment(item);
      }
      tmp$_1.call(destination_0, transform$result);
    }
    return destination_0;
  };
  Route$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Route$Companion_instance = null;
  function Route$Companion_getInstance() {
    if (Route$Companion_instance === null) {
      new Route$Companion();
    }
    return Route$Companion_instance;
  }
  Route.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Route',
    interfaces: []
  };
  function route$lambda(closure$block) {
    return function (meta) {
      return Route$Companion_getInstance().getComponent_99i513$(meta, closure$block);
    };
  }
  function route($receiver, path, isExact, isAbsolute, block) {
    if (isExact === void 0)
      isExact = false;
    if (isAbsolute === void 0)
      isAbsolute = false;
    return routeComponent($receiver, path, isExact, isAbsolute, route$lambda(block));
  }
  function routeComponent($receiver, path, isExact, isAbsolute, block) {
    if (isExact === void 0)
      isExact = false;
    if (isAbsolute === void 0)
      isAbsolute = false;
    return Route$Companion_getInstance().createRoute_g1afwu$($receiver, path, isExact, isAbsolute, block);
  }
  function RouteSegment(text) {
    this.text = text;
  }
  RouteSegment.prototype.matches_vcffh3$ = function (route) {
    return equals(this.text, route != null ? route.text : null);
  };
  RouteSegment.prototype.toString = function () {
    return this.text;
  };
  RouteSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouteSegment',
    interfaces: []
  };
  function ParameterSegment(text) {
    RouteSegment.call(this, text);
  }
  ParameterSegment.prototype.matches_vcffh3$ = function (route) {
    return route != null;
  };
  ParameterSegment.prototype.toString = function () {
    return ':' + this.text;
  };
  ParameterSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParameterSegment',
    interfaces: [RouteSegment]
  };
  function RouteMeta(path, params) {
    this.path = path;
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
  function link$lambda(closure$path, closure$block) {
    return function ($receiver) {
      var completePath = Route$Companion_getInstance().getPath_qz9155$(Router_getInstance().currentPath, closure$path, true);
      $receiver.href = completePath;
      $receiver.onClick = link$lambda$lambda(completePath);
      closure$block != null ? closure$block($receiver) : null;
      return Unit;
    };
  }
  function link($receiver, path, block) {
    if (block === void 0)
      block = null;
    return a($receiver, void 0, link$lambda(path, block));
  }
  function Router() {
    Router_instance = this;
    window.onpopstate = Router_init$lambda;
    this.currentPath = '/';
    this.parentRoute = null;
    this.rootRoutes_0 = ArrayList_init();
  }
  Router.prototype.update_0 = function () {
    var tmp$;
    tmp$ = this.rootRoutes_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.update();
    }
  };
  Router.prototype.add_p5wmg3$ = function (route) {
    this.rootRoutes_0.add_11rb$(route);
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
  var package$kunafa = package$narbase.kunafa || (package$narbase.kunafa = {});
  var package$core = package$kunafa.core || (package$kunafa.core = {});
  var package$components = package$core.components || (package$core.components = {});
  package$components.Anchor = Anchor;
  package$components.Button = Button;
  package$components.Checkbox = Checkbox;
  package$components.Component = Component;
  package$components.page_6bmerh$ = page;
  package$components.linearLayout_te8a6c$ = linearLayout;
  package$components.verticalLayout_te8a6c$ = verticalLayout;
  package$components.horizontalLayout_te8a6c$ = horizontalLayout;
  package$components.horizontalScrollLayout_vjqw9z$ = horizontalScrollLayout;
  package$components.verticalScrollLayout_vjqw9z$ = verticalScrollLayout;
  package$components.view_yfyifg$ = view;
  package$components.a_i4874s$ = a;
  package$components.textView_k17fs7$ = textView;
  package$components.textInput_b3mkdq$ = textInput;
  package$components.button_f7h23d$ = button;
  package$components.imageView_6md8j5$ = imageView;
  package$components.checkbox_bq4xd6$ = checkbox;
  package$components.table_cspv33$ = table;
  package$components.tableHeader_ixkf6z$ = tableHeader;
  package$components.tableBody_q8vdfk$ = tableBody;
  package$components.tableFooter_k1dpx5$ = tableFooter;
  package$components.row_ddtlqs$ = row;
  package$components.row_6hwqpt$ = row_0;
  package$components.row_nw2nn5$ = row_1;
  package$components.row_ppscra$ = row_2;
  package$components.cell_h5zlqe$ = cell;
  package$components.headerCell_r45msn$ = headerCell;
  package$components.form_2g9b57$ = form;
  package$components.fieldSet_kzo61d$ = fieldSet;
  package$components.legend_lwwrxw$ = legend;
  package$components.radio_4zlzpo$ = radio;
  package$components.ul_tlk263$ = ul;
  package$components.li_11wj09$ = li;
  Object.defineProperty(package$components, 'detached', {
    get: function () {
      return detached;
    }
  });
  package$components.Form = Form;
  package$components.FieldSet = FieldSet;
  package$components.Legend = Legend;
  package$components.ImageView = ImageView;
  Object.defineProperty(package$components, 'Page', {
    get: Page_getInstance
  });
  package$components.Radio = Radio;
  package$components.Table = Table;
  package$components.TableRow = TableRow;
  package$components.TableCell = TableCell;
  package$components.TableHeaderCell = TableHeaderCell;
  package$components.TableHeader = TableHeader;
  package$components.TableFooter = TableFooter;
  package$components.TableBody = TableBody;
  package$components.TextInput = TextInput;
  package$components.TextView = TextView;
  package$components.UList = UList;
  package$components.ListItem = ListItem;
  Object.defineProperty(View, 'Companion', {
    get: View$Companion_getInstance
  });
  package$components.View = View;
  Object.defineProperty(LinearLayout$Orientation, 'Horizontal', {
    get: LinearLayout$Orientation$Horizontal_getInstance
  });
  Object.defineProperty(LinearLayout$Orientation, 'Vertical', {
    get: LinearLayout$Orientation$Vertical_getInstance
  });
  LinearLayout.Orientation = LinearLayout$Orientation;
  Object.defineProperty(LinearLayout, 'Companion', {
    get: LinearLayout$Companion_getInstance
  });
  var package$layout = package$components.layout || (package$components.layout = {});
  package$layout.LinearLayout = LinearLayout;
  Object.defineProperty(ScrollView, 'Companion', {
    get: ScrollView$Companion_getInstance
  });
  package$layout.ScrollView = ScrollView;
  package$components.visit_kkf9ko$ = visit;
  var package$css = package$core.css || (package$core.css = {});
  Object.defineProperty(package$css, 'ClassNameGenerator', {
    get: ClassNameGenerator_getInstance
  });
  package$css.get_color_kn5s8$ = get_color;
  package$css.set_color_ntmvhs$ = set_color;
  package$css.get_opacity_kn5s8$ = get_opacity;
  package$css.set_opacity_uocubr$ = set_opacity;
  package$css.get_background_kn5s8$ = get_background;
  package$css.set_background_la1i9z$ = set_background;
  package$css.get_backgroundAttachment_kn5s8$ = get_backgroundAttachment;
  package$css.set_backgroundAttachment_la1i9z$ = set_backgroundAttachment;
  package$css.get_backgroundBlendMode_kn5s8$ = get_backgroundBlendMode;
  package$css.set_backgroundBlendMode_la1i9z$ = set_backgroundBlendMode;
  package$css.get_backgroundColor_kn5s8$ = get_backgroundColor;
  package$css.set_backgroundColor_ntmvhs$ = set_backgroundColor;
  package$css.get_backgroundImage_kn5s8$ = get_backgroundImage;
  package$css.set_backgroundImage_la1i9z$ = set_backgroundImage;
  package$css.get_backgroundPosition_kn5s8$ = get_backgroundPosition;
  package$css.set_backgroundPosition_la1i9z$ = set_backgroundPosition;
  package$css.get_backgroundRepeat_kn5s8$ = get_backgroundRepeat;
  package$css.set_backgroundRepeat_la1i9z$ = set_backgroundRepeat;
  package$css.get_backgroundClip_kn5s8$ = get_backgroundClip;
  package$css.set_backgroundClip_la1i9z$ = set_backgroundClip;
  package$css.get_backgroundOrigin_kn5s8$ = get_backgroundOrigin;
  package$css.set_backgroundOrigin_la1i9z$ = set_backgroundOrigin;
  package$css.get_backgroundSize_kn5s8$ = get_backgroundSize;
  package$css.set_backgroundSize_la1i9z$ = set_backgroundSize;
  package$css.get_border_kn5s8$ = get_border;
  package$css.set_border_la1i9z$ = set_border;
  package$css.get_borderBottom_kn5s8$ = get_borderBottom;
  package$css.set_borderBottom_la1i9z$ = set_borderBottom;
  package$css.get_borderBottomColor_kn5s8$ = get_borderBottomColor;
  package$css.set_borderBottomColor_ntmvhs$ = set_borderBottomColor;
  package$css.get_borderBottomLeftRadius_kn5s8$ = get_borderBottomLeftRadius;
  package$css.set_borderBottomLeftRadius_9np42l$ = set_borderBottomLeftRadius;
  package$css.get_borderBottomRightRadius_kn5s8$ = get_borderBottomRightRadius;
  package$css.set_borderBottomRightRadius_9np42l$ = set_borderBottomRightRadius;
  package$css.get_borderBottomStyle_kn5s8$ = get_borderBottomStyle;
  package$css.set_borderBottomStyle_la1i9z$ = set_borderBottomStyle;
  package$css.get_borderBottomWidth_kn5s8$ = get_borderBottomWidth;
  package$css.set_borderBottomWidth_la1i9z$ = set_borderBottomWidth;
  package$css.get_borderColor_kn5s8$ = get_borderColor;
  package$css.set_borderColor_ntmvhs$ = set_borderColor;
  package$css.get_borderImage_kn5s8$ = get_borderImage;
  package$css.set_borderImage_la1i9z$ = set_borderImage;
  package$css.get_borderImageOutset_kn5s8$ = get_borderImageOutset;
  package$css.set_borderImageOutset_la1i9z$ = set_borderImageOutset;
  package$css.get_borderImageRepeat_kn5s8$ = get_borderImageRepeat;
  package$css.set_borderImageRepeat_la1i9z$ = set_borderImageRepeat;
  package$css.get_borderImageSlice_kn5s8$ = get_borderImageSlice;
  package$css.set_borderImageSlice_la1i9z$ = set_borderImageSlice;
  package$css.get_borderImageSource_kn5s8$ = get_borderImageSource;
  package$css.set_borderImageSource_la1i9z$ = set_borderImageSource;
  package$css.get_borderImageWidth_kn5s8$ = get_borderImageWidth;
  package$css.set_borderImageWidth_la1i9z$ = set_borderImageWidth;
  package$css.get_borderLeft_kn5s8$ = get_borderLeft;
  package$css.set_borderLeft_la1i9z$ = set_borderLeft;
  package$css.get_borderLeftColor_kn5s8$ = get_borderLeftColor;
  package$css.set_borderLeftColor_ntmvhs$ = set_borderLeftColor;
  package$css.get_borderLeftStyle_kn5s8$ = get_borderLeftStyle;
  package$css.set_borderLeftStyle_la1i9z$ = set_borderLeftStyle;
  package$css.get_borderLeftWidth_kn5s8$ = get_borderLeftWidth;
  package$css.set_borderLeftWidth_la1i9z$ = set_borderLeftWidth;
  package$css.get_borderRadius_kn5s8$ = get_borderRadius;
  package$css.set_borderRadius_la1i9z$ = set_borderRadius;
  package$css.get_borderRight_kn5s8$ = get_borderRight;
  package$css.set_borderRight_la1i9z$ = set_borderRight;
  package$css.get_borderRightColor_kn5s8$ = get_borderRightColor;
  package$css.set_borderRightColor_ntmvhs$ = set_borderRightColor;
  package$css.get_borderRightStyle_kn5s8$ = get_borderRightStyle;
  package$css.set_borderRightStyle_la1i9z$ = set_borderRightStyle;
  package$css.get_borderRightWidth_kn5s8$ = get_borderRightWidth;
  package$css.set_borderRightWidth_la1i9z$ = set_borderRightWidth;
  package$css.get_borderStyle_kn5s8$ = get_borderStyle;
  package$css.set_borderStyle_la1i9z$ = set_borderStyle;
  package$css.get_borderTop_kn5s8$ = get_borderTop;
  package$css.set_borderTop_la1i9z$ = set_borderTop;
  package$css.get_borderTopColor_kn5s8$ = get_borderTopColor;
  package$css.set_borderTopColor_ntmvhs$ = set_borderTopColor;
  package$css.get_borderTopLeftRadius_kn5s8$ = get_borderTopLeftRadius;
  package$css.set_borderTopLeftRadius_9np42l$ = set_borderTopLeftRadius;
  package$css.get_borderTopRightRadius_kn5s8$ = get_borderTopRightRadius;
  package$css.set_borderTopRightRadius_9np42l$ = set_borderTopRightRadius;
  package$css.get_borderTopStyle_kn5s8$ = get_borderTopStyle;
  package$css.set_borderTopStyle_la1i9z$ = set_borderTopStyle;
  package$css.get_borderTopWidth_kn5s8$ = get_borderTopWidth;
  package$css.set_borderTopWidth_la1i9z$ = set_borderTopWidth;
  package$css.get_borderWidth_kn5s8$ = get_borderWidth;
  package$css.set_borderWidth_la1i9z$ = set_borderWidth;
  package$css.get_boxDecorationBreak_kn5s8$ = get_boxDecorationBreak;
  package$css.set_boxDecorationBreak_la1i9z$ = set_boxDecorationBreak;
  package$css.get_boxShadow_kn5s8$ = get_boxShadow;
  package$css.set_boxShadow_la1i9z$ = set_boxShadow;
  package$css.get_bottom_kn5s8$ = get_bottom;
  package$css.set_bottom_9np42l$ = set_bottom;
  package$css.get_clear_kn5s8$ = get_clear;
  package$css.set_clear_la1i9z$ = set_clear;
  package$css.get_clip_kn5s8$ = get_clip;
  package$css.set_clip_la1i9z$ = set_clip;
  package$css.get_display_kn5s8$ = get_display;
  package$css.set_display_la1i9z$ = set_display;
  package$css.get_float_kn5s8$ = get_float;
  package$css.set_float_la1i9z$ = set_float;
  package$css.get_height_kn5s8$ = get_height;
  package$css.set_height_c3qti6$ = set_height;
  package$css.get_left_kn5s8$ = get_left;
  package$css.set_left_9np42l$ = set_left;
  package$css.get_margin_kn5s8$ = get_margin;
  package$css.set_margin_la1i9z$ = set_margin;
  package$css.get_marginBottom_kn5s8$ = get_marginBottom;
  package$css.set_marginBottom_9np42l$ = set_marginBottom;
  package$css.get_marginLeft_kn5s8$ = get_marginLeft;
  package$css.set_marginLeft_9np42l$ = set_marginLeft;
  package$css.get_marginRight_kn5s8$ = get_marginRight;
  package$css.set_marginRight_9np42l$ = set_marginRight;
  package$css.get_marginTop_kn5s8$ = get_marginTop;
  package$css.set_marginTop_9np42l$ = set_marginTop;
  package$css.get_maxHeight_kn5s8$ = get_maxHeight;
  package$css.set_maxHeight_c3qti6$ = set_maxHeight;
  package$css.get_maxWidth_kn5s8$ = get_maxWidth;
  package$css.set_maxWidth_c3qti6$ = set_maxWidth;
  package$css.get_minHeight_kn5s8$ = get_minHeight;
  package$css.set_minHeight_c3qti6$ = set_minHeight;
  package$css.get_minWidth_kn5s8$ = get_minWidth;
  package$css.set_minWidth_c3qti6$ = set_minWidth;
  package$css.get_overflow_kn5s8$ = get_overflow;
  package$css.set_overflow_la1i9z$ = set_overflow;
  package$css.get_overflowX_kn5s8$ = get_overflowX;
  package$css.set_overflowX_la1i9z$ = set_overflowX;
  package$css.get_overflowY_kn5s8$ = get_overflowY;
  package$css.set_overflowY_la1i9z$ = set_overflowY;
  package$css.get_padding_kn5s8$ = get_padding;
  package$css.set_padding_la1i9z$ = set_padding;
  package$css.get_paddingBottom_kn5s8$ = get_paddingBottom;
  package$css.set_paddingBottom_9np42l$ = set_paddingBottom;
  package$css.get_paddingLeft_kn5s8$ = get_paddingLeft;
  package$css.set_paddingLeft_9np42l$ = set_paddingLeft;
  package$css.get_paddingRight_kn5s8$ = get_paddingRight;
  package$css.set_paddingRight_9np42l$ = set_paddingRight;
  package$css.get_paddingTop_kn5s8$ = get_paddingTop;
  package$css.set_paddingTop_9np42l$ = set_paddingTop;
  package$css.get_position_kn5s8$ = get_position;
  package$css.set_position_la1i9z$ = set_position;
  package$css.get_right_kn5s8$ = get_right;
  package$css.set_right_9np42l$ = set_right;
  package$css.get_top_kn5s8$ = get_top;
  package$css.set_top_9np42l$ = set_top;
  package$css.get_visibility_kn5s8$ = get_visibility;
  package$css.set_visibility_la1i9z$ = set_visibility;
  package$css.get_width_kn5s8$ = get_width;
  package$css.set_width_c3qti6$ = set_width;
  package$css.get_verticalAlign_kn5s8$ = get_verticalAlign;
  package$css.set_verticalAlign_la1i9z$ = set_verticalAlign;
  package$css.get_zIndex_kn5s8$ = get_zIndex;
  package$css.set_zIndex_b9ipjv$ = set_zIndex;
  package$css.get_alignContent_kn5s8$ = get_alignContent;
  package$css.set_alignContent_68dtfh$ = set_alignContent;
  package$css.get_alignItems_kn5s8$ = get_alignItems;
  package$css.set_alignItems_68dtfh$ = set_alignItems;
  package$css.get_alignSelf_kn5s8$ = get_alignSelf;
  package$css.set_alignSelf_68dtfh$ = set_alignSelf;
  package$css.get_flex_kn5s8$ = get_flex;
  package$css.set_flex_la1i9z$ = set_flex;
  package$css.get_flexBasis_kn5s8$ = get_flexBasis;
  package$css.set_flexBasis_la1i9z$ = set_flexBasis;
  package$css.get_flexDirection_kn5s8$ = get_flexDirection;
  package$css.set_flexDirection_la1i9z$ = set_flexDirection;
  package$css.get_flexFlow_kn5s8$ = get_flexFlow;
  package$css.set_flexFlow_la1i9z$ = set_flexFlow;
  package$css.get_flexGrow_kn5s8$ = get_flexGrow;
  package$css.set_flexGrow_la1i9z$ = set_flexGrow;
  package$css.get_flexShrink_kn5s8$ = get_flexShrink;
  package$css.set_flexShrink_la1i9z$ = set_flexShrink;
  package$css.get_flexWrap_kn5s8$ = get_flexWrap;
  package$css.set_flexWrap_la1i9z$ = set_flexWrap;
  package$css.get_justifyContent_kn5s8$ = get_justifyContent;
  package$css.set_justifyContent_c3ey27$ = set_justifyContent;
  package$css.get_order_kn5s8$ = get_order;
  package$css.set_order_la1i9z$ = set_order;
  package$css.get_hangingPunctuation_kn5s8$ = get_hangingPunctuation;
  package$css.set_hangingPunctuation_la1i9z$ = set_hangingPunctuation;
  package$css.get_hyphens_kn5s8$ = get_hyphens;
  package$css.set_hyphens_la1i9z$ = set_hyphens;
  package$css.get_letterSpacing_kn5s8$ = get_letterSpacing;
  package$css.set_letterSpacing_la1i9z$ = set_letterSpacing;
  package$css.get_lineBreak_kn5s8$ = get_lineBreak;
  package$css.set_lineBreak_la1i9z$ = set_lineBreak;
  package$css.get_lineHeight_kn5s8$ = get_lineHeight;
  package$css.set_lineHeight_la1i9z$ = set_lineHeight;
  package$css.get_overflowWrap_kn5s8$ = get_overflowWrap;
  package$css.set_overflowWrap_la1i9z$ = set_overflowWrap;
  package$css.get_tabSize_kn5s8$ = get_tabSize;
  package$css.set_tabSize_la1i9z$ = set_tabSize;
  package$css.get_textAlign_kn5s8$ = get_textAlign;
  package$css.set_textAlign_wsauem$ = set_textAlign;
  package$css.get_textAlignLast_kn5s8$ = get_textAlignLast;
  package$css.set_textAlignLast_la1i9z$ = set_textAlignLast;
  package$css.get_textIndent_kn5s8$ = get_textIndent;
  package$css.set_textIndent_la1i9z$ = set_textIndent;
  package$css.get_textJustify_kn5s8$ = get_textJustify;
  package$css.set_textJustify_la1i9z$ = set_textJustify;
  package$css.get_textTransform_kn5s8$ = get_textTransform;
  package$css.set_textTransform_la1i9z$ = set_textTransform;
  package$css.get_whiteSpace_kn5s8$ = get_whiteSpace;
  package$css.set_whiteSpace_la1i9z$ = set_whiteSpace;
  package$css.get_wordBreak_kn5s8$ = get_wordBreak;
  package$css.set_wordBreak_la1i9z$ = set_wordBreak;
  package$css.get_wordSpacing_kn5s8$ = get_wordSpacing;
  package$css.set_wordSpacing_la1i9z$ = set_wordSpacing;
  package$css.get_wordWrap_kn5s8$ = get_wordWrap;
  package$css.set_wordWrap_la1i9z$ = set_wordWrap;
  package$css.get_textDecoration_kn5s8$ = get_textDecoration;
  package$css.set_textDecoration_la1i9z$ = set_textDecoration;
  package$css.get_textDecorationColor_kn5s8$ = get_textDecorationColor;
  package$css.set_textDecorationColor_ntmvhs$ = set_textDecorationColor;
  package$css.get_textDecorationLine_kn5s8$ = get_textDecorationLine;
  package$css.set_textDecorationLine_la1i9z$ = set_textDecorationLine;
  package$css.get_textDecorationStyle_kn5s8$ = get_textDecorationStyle;
  package$css.set_textDecorationStyle_la1i9z$ = set_textDecorationStyle;
  package$css.get_textShadow_kn5s8$ = get_textShadow;
  package$css.set_textShadow_la1i9z$ = set_textShadow;
  package$css.get_textUnderlinePosition_kn5s8$ = get_textUnderlinePosition;
  package$css.set_textUnderlinePosition_la1i9z$ = set_textUnderlinePosition;
  package$css.get_font_kn5s8$ = get_font;
  package$css.set_font_la1i9z$ = set_font;
  package$css.get_fontFamily_kn5s8$ = get_fontFamily;
  package$css.set_fontFamily_la1i9z$ = set_fontFamily;
  package$css.get_fontFeatureSettings_kn5s8$ = get_fontFeatureSettings;
  package$css.set_fontFeatureSettings_la1i9z$ = set_fontFeatureSettings;
  package$css.get_fontKerning_kn5s8$ = get_fontKerning;
  package$css.set_fontKerning_la1i9z$ = set_fontKerning;
  package$css.get_fontLanguageOverride_kn5s8$ = get_fontLanguageOverride;
  package$css.set_fontLanguageOverride_la1i9z$ = set_fontLanguageOverride;
  package$css.get_fontSize_kn5s8$ = get_fontSize;
  package$css.set_fontSize_9np42l$ = set_fontSize;
  package$css.get_fontSizeAdjust_kn5s8$ = get_fontSizeAdjust;
  package$css.set_fontSizeAdjust_la1i9z$ = set_fontSizeAdjust;
  package$css.get_fontStretch_kn5s8$ = get_fontStretch;
  package$css.set_fontStretch_la1i9z$ = set_fontStretch;
  package$css.get_fontStyle_kn5s8$ = get_fontStyle;
  package$css.set_fontStyle_la1i9z$ = set_fontStyle;
  package$css.get_fontSynthesis_kn5s8$ = get_fontSynthesis;
  package$css.set_fontSynthesis_la1i9z$ = set_fontSynthesis;
  package$css.get_fontVariant_kn5s8$ = get_fontVariant;
  package$css.set_fontVariant_la1i9z$ = set_fontVariant;
  package$css.get_fontVariantAlternates_kn5s8$ = get_fontVariantAlternates;
  package$css.set_fontVariantAlternates_la1i9z$ = set_fontVariantAlternates;
  package$css.get_fontVariantCaps_kn5s8$ = get_fontVariantCaps;
  package$css.set_fontVariantCaps_la1i9z$ = set_fontVariantCaps;
  package$css.get_fontVariantEastAsian_kn5s8$ = get_fontVariantEastAsian;
  package$css.set_fontVariantEastAsian_la1i9z$ = set_fontVariantEastAsian;
  package$css.get_fontVariantLigatures_kn5s8$ = get_fontVariantLigatures;
  package$css.set_fontVariantLigatures_la1i9z$ = set_fontVariantLigatures;
  package$css.get_fontVariantNumeric_kn5s8$ = get_fontVariantNumeric;
  package$css.set_fontVariantNumeric_la1i9z$ = set_fontVariantNumeric;
  package$css.get_fontVariantPosition_kn5s8$ = get_fontVariantPosition;
  package$css.set_fontVariantPosition_la1i9z$ = set_fontVariantPosition;
  package$css.get_fontWeight_kn5s8$ = get_fontWeight;
  package$css.set_fontWeight_la1i9z$ = set_fontWeight;
  package$css.get_direction_kn5s8$ = get_direction;
  package$css.set_direction_la1i9z$ = set_direction;
  package$css.get_textOrientation_kn5s8$ = get_textOrientation;
  package$css.set_textOrientation_la1i9z$ = set_textOrientation;
  package$css.get_textCombineUpright_kn5s8$ = get_textCombineUpright;
  package$css.set_textCombineUpright_la1i9z$ = set_textCombineUpright;
  package$css.get_unicodeBidi_kn5s8$ = get_unicodeBidi;
  package$css.set_unicodeBidi_la1i9z$ = set_unicodeBidi;
  package$css.get_writingMode_kn5s8$ = get_writingMode;
  package$css.set_writingMode_la1i9z$ = set_writingMode;
  package$css.get_borderCollapse_kn5s8$ = get_borderCollapse;
  package$css.set_borderCollapse_la1i9z$ = set_borderCollapse;
  package$css.get_borderSpacing_kn5s8$ = get_borderSpacing;
  package$css.set_borderSpacing_la1i9z$ = set_borderSpacing;
  package$css.get_captionSide_kn5s8$ = get_captionSide;
  package$css.set_captionSide_la1i9z$ = set_captionSide;
  package$css.get_emptyCells_kn5s8$ = get_emptyCells;
  package$css.set_emptyCells_la1i9z$ = set_emptyCells;
  package$css.get_tableLayout_kn5s8$ = get_tableLayout;
  package$css.set_tableLayout_la1i9z$ = set_tableLayout;
  package$css.get_counterIncrement_kn5s8$ = get_counterIncrement;
  package$css.set_counterIncrement_la1i9z$ = set_counterIncrement;
  package$css.get_counterReset_kn5s8$ = get_counterReset;
  package$css.set_counterReset_la1i9z$ = set_counterReset;
  package$css.get_listStyle_kn5s8$ = get_listStyle;
  package$css.set_listStyle_la1i9z$ = set_listStyle;
  package$css.get_listStyleImage_kn5s8$ = get_listStyleImage;
  package$css.set_listStyleImage_la1i9z$ = set_listStyleImage;
  package$css.get_listStylePosition_kn5s8$ = get_listStylePosition;
  package$css.set_listStylePosition_la1i9z$ = set_listStylePosition;
  package$css.get_listStyleType_kn5s8$ = get_listStyleType;
  package$css.set_listStyleType_la1i9z$ = set_listStyleType;
  package$css.get_animation_kn5s8$ = get_animation;
  package$css.set_animation_la1i9z$ = set_animation;
  package$css.get_animationDelay_kn5s8$ = get_animationDelay;
  package$css.set_animationDelay_la1i9z$ = set_animationDelay;
  package$css.get_animationDirection_kn5s8$ = get_animationDirection;
  package$css.set_animationDirection_la1i9z$ = set_animationDirection;
  package$css.get_animationDuration_kn5s8$ = get_animationDuration;
  package$css.set_animationDuration_la1i9z$ = set_animationDuration;
  package$css.get_animationFillMode_kn5s8$ = get_animationFillMode;
  package$css.set_animationFillMode_la1i9z$ = set_animationFillMode;
  package$css.get_animationIterationCount_kn5s8$ = get_animationIterationCount;
  package$css.set_animationIterationCount_la1i9z$ = set_animationIterationCount;
  package$css.get_animationName_kn5s8$ = get_animationName;
  package$css.set_animationName_la1i9z$ = set_animationName;
  package$css.get_animationPlayState_kn5s8$ = get_animationPlayState;
  package$css.set_animationPlayState_la1i9z$ = set_animationPlayState;
  package$css.get_animationTimingFunction_kn5s8$ = get_animationTimingFunction;
  package$css.set_animationTimingFunction_la1i9z$ = set_animationTimingFunction;
  package$css.get_backfaceVisibility_kn5s8$ = get_backfaceVisibility;
  package$css.set_backfaceVisibility_la1i9z$ = set_backfaceVisibility;
  package$css.get_perspective_kn5s8$ = get_perspective;
  package$css.set_perspective_la1i9z$ = set_perspective;
  package$css.get_perspectiveOrigin_kn5s8$ = get_perspectiveOrigin;
  package$css.set_perspectiveOrigin_la1i9z$ = set_perspectiveOrigin;
  package$css.get_transform_kn5s8$ = get_transform;
  package$css.set_transform_la1i9z$ = set_transform;
  package$css.get_transformOrigin_kn5s8$ = get_transformOrigin;
  package$css.set_transformOrigin_la1i9z$ = set_transformOrigin;
  package$css.get_transformStyle_kn5s8$ = get_transformStyle;
  package$css.set_transformStyle_la1i9z$ = set_transformStyle;
  package$css.get_transition_kn5s8$ = get_transition;
  package$css.set_transition_la1i9z$ = set_transition;
  package$css.get_transitionProperty_kn5s8$ = get_transitionProperty;
  package$css.set_transitionProperty_la1i9z$ = set_transitionProperty;
  package$css.get_transitionDuration_kn5s8$ = get_transitionDuration;
  package$css.set_transitionDuration_la1i9z$ = set_transitionDuration;
  package$css.get_transitionTimingFunction_kn5s8$ = get_transitionTimingFunction;
  package$css.set_transitionTimingFunction_la1i9z$ = set_transitionTimingFunction;
  package$css.get_transitionDelay_kn5s8$ = get_transitionDelay;
  package$css.set_transitionDelay_la1i9z$ = set_transitionDelay;
  package$css.get_boxSizing_kn5s8$ = get_boxSizing;
  package$css.set_boxSizing_la1i9z$ = set_boxSizing;
  package$css.get_content_kn5s8$ = get_content;
  package$css.set_content_la1i9z$ = set_content;
  package$css.get_cursor_kn5s8$ = get_cursor;
  package$css.set_cursor_la1i9z$ = set_cursor;
  package$css.get_imeMode_kn5s8$ = get_imeMode;
  package$css.set_imeMode_la1i9z$ = set_imeMode;
  package$css.get_navDown_kn5s8$ = get_navDown;
  package$css.set_navDown_la1i9z$ = set_navDown;
  package$css.get_navIndex_kn5s8$ = get_navIndex;
  package$css.set_navIndex_la1i9z$ = set_navIndex;
  package$css.get_navLeft_kn5s8$ = get_navLeft;
  package$css.set_navLeft_la1i9z$ = set_navLeft;
  package$css.get_navRight_kn5s8$ = get_navRight;
  package$css.set_navRight_la1i9z$ = set_navRight;
  package$css.get_navUp_kn5s8$ = get_navUp;
  package$css.set_navUp_la1i9z$ = set_navUp;
  package$css.get_outline_kn5s8$ = get_outline;
  package$css.set_outline_la1i9z$ = set_outline;
  package$css.get_outlineColor_kn5s8$ = get_outlineColor;
  package$css.set_outlineColor_ntmvhs$ = set_outlineColor;
  package$css.get_outlineOffset_kn5s8$ = get_outlineOffset;
  package$css.set_outlineOffset_la1i9z$ = set_outlineOffset;
  package$css.get_outlineStyle_kn5s8$ = get_outlineStyle;
  package$css.set_outlineStyle_la1i9z$ = set_outlineStyle;
  package$css.get_outlineWidth_kn5s8$ = get_outlineWidth;
  package$css.set_outlineWidth_la1i9z$ = set_outlineWidth;
  package$css.get_resize_kn5s8$ = get_resize;
  package$css.set_resize_la1i9z$ = set_resize;
  package$css.get_textOverflow_kn5s8$ = get_textOverflow;
  package$css.set_textOverflow_la1i9z$ = set_textOverflow;
  package$css.get_breakAfter_kn5s8$ = get_breakAfter;
  package$css.set_breakAfter_la1i9z$ = set_breakAfter;
  package$css.get_breakBefore_kn5s8$ = get_breakBefore;
  package$css.set_breakBefore_la1i9z$ = set_breakBefore;
  package$css.get_breakInside_kn5s8$ = get_breakInside;
  package$css.set_breakInside_la1i9z$ = set_breakInside;
  package$css.get_columnCount_kn5s8$ = get_columnCount;
  package$css.set_columnCount_la1i9z$ = set_columnCount;
  package$css.get_columnFill_kn5s8$ = get_columnFill;
  package$css.set_columnFill_la1i9z$ = set_columnFill;
  package$css.get_columnGap_kn5s8$ = get_columnGap;
  package$css.set_columnGap_la1i9z$ = set_columnGap;
  package$css.get_columnRule_kn5s8$ = get_columnRule;
  package$css.set_columnRule_la1i9z$ = set_columnRule;
  package$css.get_columnRuleColor_kn5s8$ = get_columnRuleColor;
  package$css.set_columnRuleColor_ntmvhs$ = set_columnRuleColor;
  package$css.get_columnRuleStyle_kn5s8$ = get_columnRuleStyle;
  package$css.set_columnRuleStyle_la1i9z$ = set_columnRuleStyle;
  package$css.get_columnRuleWidth_kn5s8$ = get_columnRuleWidth;
  package$css.set_columnRuleWidth_la1i9z$ = set_columnRuleWidth;
  package$css.get_columnSpan_kn5s8$ = get_columnSpan;
  package$css.set_columnSpan_la1i9z$ = set_columnSpan;
  package$css.get_columnWidth_kn5s8$ = get_columnWidth;
  package$css.set_columnWidth_la1i9z$ = set_columnWidth;
  package$css.get_columns_kn5s8$ = get_columns;
  package$css.set_columns_la1i9z$ = set_columns;
  package$css.get_widows_kn5s8$ = get_widows;
  package$css.set_widows_la1i9z$ = set_widows;
  package$css.get_orphans_kn5s8$ = get_orphans;
  package$css.set_orphans_la1i9z$ = set_orphans;
  package$css.get_pageBreakAfter_kn5s8$ = get_pageBreakAfter;
  package$css.set_pageBreakAfter_la1i9z$ = set_pageBreakAfter;
  package$css.get_pageBreakBefore_kn5s8$ = get_pageBreakBefore;
  package$css.set_pageBreakBefore_la1i9z$ = set_pageBreakBefore;
  package$css.get_pageBreakInside_kn5s8$ = get_pageBreakInside;
  package$css.set_pageBreakInside_la1i9z$ = set_pageBreakInside;
  package$css.get_marks_kn5s8$ = get_marks;
  package$css.set_marks_la1i9z$ = set_marks;
  package$css.get_quotes_kn5s8$ = get_quotes;
  package$css.set_quotes_la1i9z$ = set_quotes;
  package$css.get_filter_kn5s8$ = get_filter;
  package$css.set_filter_la1i9z$ = set_filter;
  package$css.get_imageOrientation_kn5s8$ = get_imageOrientation;
  package$css.set_imageOrientation_la1i9z$ = set_imageOrientation;
  package$css.get_imageRendering_kn5s8$ = get_imageRendering;
  package$css.set_imageRendering_la1i9z$ = set_imageRendering;
  package$css.get_imageResolution_kn5s8$ = get_imageResolution;
  package$css.set_imageResolution_la1i9z$ = set_imageResolution;
  package$css.get_objectFit_kn5s8$ = get_objectFit;
  package$css.set_objectFit_la1i9z$ = set_objectFit;
  package$css.get_objectPosition_kn5s8$ = get_objectPosition;
  package$css.set_objectPosition_la1i9z$ = set_objectPosition;
  package$css.get_mask_kn5s8$ = get_mask;
  package$css.set_mask_la1i9z$ = set_mask;
  package$css.get_maskType_kn5s8$ = get_maskType;
  package$css.set_maskType_la1i9z$ = set_maskType;
  package$css.get_mark_kn5s8$ = get_mark;
  package$css.set_mark_la1i9z$ = set_mark;
  package$css.get_markAfter_kn5s8$ = get_markAfter;
  package$css.set_markAfter_la1i9z$ = set_markAfter;
  package$css.get_markBefore_kn5s8$ = get_markBefore;
  package$css.set_markBefore_la1i9z$ = set_markBefore;
  package$css.get_phonemes_kn5s8$ = get_phonemes;
  package$css.set_phonemes_la1i9z$ = set_phonemes;
  package$css.get_rest_kn5s8$ = get_rest;
  package$css.set_rest_la1i9z$ = set_rest;
  package$css.get_restAfter_kn5s8$ = get_restAfter;
  package$css.set_restAfter_la1i9z$ = set_restAfter;
  package$css.get_restBefore_kn5s8$ = get_restBefore;
  package$css.set_restBefore_la1i9z$ = set_restBefore;
  package$css.get_voiceBalance_kn5s8$ = get_voiceBalance;
  package$css.set_voiceBalance_la1i9z$ = set_voiceBalance;
  package$css.get_voiceDuration_kn5s8$ = get_voiceDuration;
  package$css.set_voiceDuration_la1i9z$ = set_voiceDuration;
  package$css.get_voicePitch_kn5s8$ = get_voicePitch;
  package$css.set_voicePitch_la1i9z$ = set_voicePitch;
  package$css.get_voicePitchRange_kn5s8$ = get_voicePitchRange;
  package$css.set_voicePitchRange_la1i9z$ = set_voicePitchRange;
  package$css.get_voiceRate_kn5s8$ = get_voiceRate;
  package$css.set_voiceRate_la1i9z$ = set_voiceRate;
  package$css.get_voiceStress_kn5s8$ = get_voiceStress;
  package$css.set_voiceStress_la1i9z$ = set_voiceStress;
  package$css.get_voiceVolume_kn5s8$ = get_voiceVolume;
  package$css.set_voiceVolume_la1i9z$ = set_voiceVolume;
  package$css.get_marqueeDirection_kn5s8$ = get_marqueeDirection;
  package$css.set_marqueeDirection_la1i9z$ = set_marqueeDirection;
  package$css.get_marqueePlayCount_kn5s8$ = get_marqueePlayCount;
  package$css.set_marqueePlayCount_la1i9z$ = set_marqueePlayCount;
  package$css.get_marqueeSpeed_kn5s8$ = get_marqueeSpeed;
  package$css.set_marqueeSpeed_la1i9z$ = set_marqueeSpeed;
  package$css.get_marqueeStyle_kn5s8$ = get_marqueeStyle;
  package$css.set_marqueeStyle_la1i9z$ = set_marqueeStyle;
  package$css.get_zoom_kn5s8$ = get_zoom;
  package$css.set_zoom_la1i9z$ = set_zoom;
  package$css.get_src_kn5s8$ = get_src;
  package$css.set_src_la1i9z$ = set_src;
  package$css.get_isScrollableVertically_kn5s8$ = get_isScrollableVertically;
  package$css.set_isScrollableVertically_awu49f$ = set_isScrollableVertically;
  package$css.get_isScrollableHorizontally_kn5s8$ = get_isScrollableHorizontally;
  package$css.set_isScrollableHorizontally_awu49f$ = set_isScrollableHorizontally;
  package$css.active_ybuhke$ = active;
  package$css.after_ybuhke$ = after;
  package$css.before_ybuhke$ = before;
  package$css.checked_ybuhke$ = checked;
  package$css.disabled_ybuhke$ = disabled;
  package$css.empty_ybuhke$ = empty;
  package$css.enabled_ybuhke$ = enabled;
  package$css.firstChild_ybuhke$ = firstChild;
  package$css.firstLetter_ybuhke$ = firstLetter;
  package$css.firstLine_ybuhke$ = firstLine;
  package$css.firstOfType_ybuhke$ = firstOfType;
  package$css.focus_ybuhke$ = focus;
  package$css.hover_ybuhke$ = hover;
  package$css.inRange_ybuhke$ = inRange;
  package$css.invalid_ybuhke$ = invalid;
  package$css.lastChild_ybuhke$ = lastChild;
  package$css.lastOfType_ybuhke$ = lastOfType;
  package$css.onlyChild_ybuhke$ = onlyChild;
  package$css.onlyOfType_ybuhke$ = onlyOfType;
  package$css.optional_ybuhke$ = optional;
  package$css.outOfRange_ybuhke$ = outOfRange;
  package$css.readOnly_ybuhke$ = readOnly;
  package$css.readWrite_ybuhke$ = readWrite;
  package$css.required_ybuhke$ = required;
  package$css.root_ybuhke$ = root;
  package$css.selection_ybuhke$ = selection;
  package$css.target_ybuhke$ = target;
  package$css.unvisited_ybuhke$ = unvisited;
  package$css.valid_ybuhke$ = valid;
  package$css.visited_ybuhke$ = visited;
  package$css.media_7fnaf4$ = media;
  package$css.get_active_bd6z0f$ = get_active;
  package$css.get_after_bd6z0f$ = get_after;
  package$css.get_before_bd6z0f$ = get_before;
  package$css.get_checked_bd6z0f$ = get_checked;
  package$css.get_disabled_bd6z0f$ = get_disabled;
  package$css.get_empty_bd6z0f$ = get_empty;
  package$css.get_enabled_bd6z0f$ = get_enabled;
  package$css.get_firstChild_bd6z0f$ = get_firstChild;
  package$css.get_firstLetter_bd6z0f$ = get_firstLetter;
  package$css.get_firstLine_bd6z0f$ = get_firstLine;
  package$css.get_firstOfType_bd6z0f$ = get_firstOfType;
  package$css.get_focus_bd6z0f$ = get_focus;
  package$css.get_hover_bd6z0f$ = get_hover;
  package$css.get_inRange_bd6z0f$ = get_inRange;
  package$css.get_invalid_bd6z0f$ = get_invalid;
  package$css.get_lastChild_bd6z0f$ = get_lastChild;
  package$css.get_lastOfType_bd6z0f$ = get_lastOfType;
  package$css.get_onlyChild_bd6z0f$ = get_onlyChild;
  package$css.get_onlyOfType_bd6z0f$ = get_onlyOfType;
  package$css.get_optional_bd6z0f$ = get_optional;
  package$css.get_outOfRange_bd6z0f$ = get_outOfRange;
  package$css.get_readOnly_bd6z0f$ = get_readOnly;
  package$css.get_readWrite_bd6z0f$ = get_readWrite;
  package$css.get_required_bd6z0f$ = get_required;
  package$css.get_root_bd6z0f$ = get_root;
  package$css.get_selection_bd6z0f$ = get_selection;
  package$css.get_target_bd6z0f$ = get_target;
  package$css.get_unvisited_bd6z0f$ = get_unvisited;
  package$css.get_valid_bd6z0f$ = get_valid;
  package$css.get_visited_bd6z0f$ = get_visited;
  Object.defineProperty(Alignment, 'Companion', {
    get: Alignment$Companion_getInstance
  });
  package$css.Alignment = Alignment;
  Object.defineProperty(JustifyContent, 'Companion', {
    get: JustifyContent$Companion_getInstance
  });
  package$css.JustifyContent = JustifyContent;
  Object.defineProperty(TextAlign, 'Companion', {
    get: TextAlign$Companion_getInstance
  });
  package$css.TextAlign = TextAlign;
  package$css.classRuleSet_mv4gp1$ = classRuleSet;
  package$css.stringRuleSet_u7blh4$ = stringRuleSet;
  package$css.DynamicDimensionRuleDelegate = DynamicDimensionRuleDelegate;
  package$css.OrientationRuleDelegate = OrientationRuleDelegate;
  package$css.Rule = Rule;
  package$css.RuleDelegate = RuleDelegate;
  package$css.RuleSet = RuleSet;
  package$css.ScrollableRuleDelegate = ScrollableRuleDelegate;
  package$css.Selector = Selector;
  package$css.ClassSelector = ClassSelector;
  package$css.CompoundSelector = CompoundSelector;
  package$css.IdSelector = IdSelector;
  package$css.PseudoSelector = PseudoSelector;
  package$css.StringSelector = StringSelector;
  var package$dimensions = package$core.dimensions || (package$core.dimensions = {});
  package$dimensions.Dimension = Dimension;
  package$dimensions.DynamicDimension = DynamicDimension;
  Object.defineProperty(LinearDimension$Unit, 'PX', {
    get: LinearDimension$Unit$PX_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'EM', {
    get: LinearDimension$Unit$EM_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'PERCENT', {
    get: LinearDimension$Unit$PERCENT_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'EX', {
    get: LinearDimension$Unit$EX_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'INCH', {
    get: LinearDimension$Unit$INCH_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'CM', {
    get: LinearDimension$Unit$CM_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'MM', {
    get: LinearDimension$Unit$MM_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'PT', {
    get: LinearDimension$Unit$PT_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'VH', {
    get: LinearDimension$Unit$VH_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'VW', {
    get: LinearDimension$Unit$VW_getInstance
  });
  Object.defineProperty(LinearDimension$Unit, 'PC', {
    get: LinearDimension$Unit$PC_getInstance
  });
  LinearDimension.Unit = LinearDimension$Unit;
  package$dimensions.LinearDimension = LinearDimension;
  $$importsForInline$$.kunafa = _;
  package$dimensions.get_px_rcaex3$ = get_px;
  package$dimensions.get_em_rcaex3$ = get_em;
  package$dimensions.get_percent_rcaex3$ = get_percent;
  package$dimensions.get_ex_rcaex3$ = get_ex;
  package$dimensions.get_inch_rcaex3$ = get_inch;
  package$dimensions.get_cm_rcaex3$ = get_cm;
  package$dimensions.get_mm_rcaex3$ = get_mm;
  package$dimensions.get_pt_rcaex3$ = get_pt;
  package$dimensions.get_pc_rcaex3$ = get_pc;
  package$dimensions.get_vh_rcaex3$ = get_vh;
  package$dimensions.get_vw_rcaex3$ = get_vw;
  var package$dependent = package$dimensions.dependent || (package$dimensions.dependent = {});
  package$dependent.MatchParent = MatchParent;
  package$dependent.get_matchParent_kn5s8$ = get_matchParent;
  package$dependent.Weight = Weight;
  package$dependent.weightOf_9843sn$ = weightOf;
  package$dependent.WrapContent = WrapContent;
  package$dependent.get_wrapContent_kn5s8$ = get_wrapContent;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  var package$drawable = package$core.drawable || (package$core.drawable = {});
  package$drawable.Color_init_61zpoe$ = Color_init;
  package$drawable.Color_init_gb4hak$ = Color_init_0;
  package$drawable.Color = Color;
  Object.defineProperty(LifecycleEvent, 'ViewWillMount', {
    get: LifecycleEvent$ViewWillMount_getInstance
  });
  Object.defineProperty(LifecycleEvent, 'ViewMounted', {
    get: LifecycleEvent$ViewMounted_getInstance
  });
  Object.defineProperty(LifecycleEvent, 'ViewWillBeRemoved', {
    get: LifecycleEvent$ViewWillBeRemoved_getInstance
  });
  Object.defineProperty(LifecycleEvent, 'ViewRemoved', {
    get: LifecycleEvent$ViewRemoved_getInstance
  });
  var package$lifecycle = package$core.lifecycle || (package$core.lifecycle = {});
  package$lifecycle.LifecycleEvent = LifecycleEvent;
  package$lifecycle.LifecycleObserver = LifecycleObserver;
  package$lifecycle.LifecycleOwner = LifecycleOwner;
  package$lifecycle.Observable = Observable;
  Object.defineProperty(Route, 'Companion', {
    get: Route$Companion_getInstance
  });
  var package$routing = package$core.routing || (package$core.routing = {});
  package$routing.Route = Route;
  package$routing.route_2nc5dp$ = route;
  package$routing.routeComponent_julfhx$ = routeComponent;
  package$routing.RouteSegment = RouteSegment;
  package$routing.ParameterSegment = ParameterSegment;
  package$routing.RouteMeta = RouteMeta;
  package$routing.link_6xqxb6$ = link;
  Object.defineProperty(package$routing, 'Router', {
    get: Router_getInstance
  });
  Component.prototype.viewWillMount_1xffwv$ = LifecycleObserver.prototype.viewWillMount_1xffwv$;
  Component.prototype.onViewMounted_1xffwv$ = LifecycleObserver.prototype.onViewMounted_1xffwv$;
  Component.prototype.viewWillBeRemoved_1xffwv$ = LifecycleObserver.prototype.viewWillBeRemoved_1xffwv$;
  Component.prototype.onViewRemoved_1xffwv$ = LifecycleObserver.prototype.onViewRemoved_1xffwv$;
  detached = null;
  color = new RuleDelegate('color');
  opacity = new RuleDelegate('opacity');
  background = new RuleDelegate('background');
  backgroundAttachment = new RuleDelegate('background-attachment');
  backgroundBlendMode = new RuleDelegate('background-blend-mode');
  backgroundColor = new RuleDelegate('background-color');
  backgroundImage = new RuleDelegate('background-image');
  backgroundPosition = new RuleDelegate('background-position');
  backgroundRepeat = new RuleDelegate('background-repeat');
  backgroundClip = new RuleDelegate('background-clip');
  backgroundOrigin = new RuleDelegate('background-origin');
  backgroundSize = new RuleDelegate('background-size');
  border = new RuleDelegate('border');
  borderBottom = new RuleDelegate('border-bottom');
  borderBottomColor = new RuleDelegate('border-bottom-color');
  borderBottomLeftRadius = new RuleDelegate('border-bottom-left-radius');
  borderBottomRightRadius = new RuleDelegate('border-bottom-right-radius');
  borderBottomStyle = new RuleDelegate('border-bottom-style');
  borderBottomWidth = new RuleDelegate('border-bottom-width');
  borderColor = new RuleDelegate('border-color');
  borderImage = new RuleDelegate('border-image');
  borderImageOutset = new RuleDelegate('border-image-outset');
  borderImageRepeat = new RuleDelegate('border-image-repeat');
  borderImageSlice = new RuleDelegate('border-image-slice');
  borderImageSource = new RuleDelegate('border-image-source');
  borderImageWidth = new RuleDelegate('border-image-width');
  borderLeft = new RuleDelegate('border-left');
  borderLeftColor = new RuleDelegate('border-left-color');
  borderLeftStyle = new RuleDelegate('border-left-style');
  borderLeftWidth = new RuleDelegate('border-left-width');
  borderRadius = new RuleDelegate('border-radius');
  borderRight = new RuleDelegate('border-right');
  borderRightColor = new RuleDelegate('border-right-color');
  borderRightStyle = new RuleDelegate('border-right-style');
  borderRightWidth = new RuleDelegate('border-right-width');
  borderStyle = new RuleDelegate('border-style');
  borderTop = new RuleDelegate('border-top');
  borderTopColor = new RuleDelegate('border-top-color');
  borderTopLeftRadius = new RuleDelegate('border-top-left-radius');
  borderTopRightRadius = new RuleDelegate('border-top-right-radius');
  borderTopStyle = new RuleDelegate('border-top-style');
  borderTopWidth = new RuleDelegate('border-top-width');
  borderWidth = new RuleDelegate('border-width');
  boxDecorationBreak = new RuleDelegate('box-decoration-break');
  boxShadow = new RuleDelegate('box-shadow');
  bottom = new RuleDelegate('bottom');
  clear_0 = new RuleDelegate('clear');
  clip = new RuleDelegate('clip');
  display = new RuleDelegate('display');
  float = new RuleDelegate('float');
  height = new DynamicDimensionRuleDelegate('height');
  left = new RuleDelegate('left');
  margin = new RuleDelegate('margin');
  marginBottom = new RuleDelegate('margin-bottom');
  marginLeft = new RuleDelegate('margin-left');
  marginRight = new RuleDelegate('margin-right');
  marginTop = new RuleDelegate('margin-top');
  maxHeight = new DynamicDimensionRuleDelegate('max-height');
  maxWidth = new DynamicDimensionRuleDelegate('max-width');
  minHeight = new DynamicDimensionRuleDelegate('min-height');
  minWidth = new DynamicDimensionRuleDelegate('min-width');
  overflow = new RuleDelegate('overflow');
  overflowX = new RuleDelegate('overflow-x');
  overflowY = new RuleDelegate('overflow-y');
  padding = new RuleDelegate('padding');
  paddingBottom = new RuleDelegate('padding-bottom');
  paddingLeft = new RuleDelegate('padding-left');
  paddingRight = new RuleDelegate('padding-right');
  paddingTop = new RuleDelegate('padding-top');
  position = new RuleDelegate('position');
  right = new RuleDelegate('right');
  top = new RuleDelegate('top');
  visibility = new RuleDelegate('visibility');
  width = new DynamicDimensionRuleDelegate('width');
  verticalAlign = new RuleDelegate('vertical-align');
  zIndex = new RuleDelegate('z-index');
  alignContent = new RuleDelegate('align-content');
  alignItems = new RuleDelegate('align-items');
  alignSelf = new RuleDelegate('align-self');
  flex = new RuleDelegate('flex');
  flexBasis = new RuleDelegate('flex-basis');
  flexDirection = new RuleDelegate('flex-direction');
  flexFlow = new RuleDelegate('flex-flow');
  flexGrow = new RuleDelegate('flex-grow');
  flexShrink = new RuleDelegate('flex-shrink');
  flexWrap = new RuleDelegate('flex-wrap');
  justifyContent = new RuleDelegate('justify-content');
  order = new RuleDelegate('order');
  hangingPunctuation = new RuleDelegate('hanging-punctuation');
  hyphens = new RuleDelegate('hyphens');
  letterSpacing = new RuleDelegate('letter-spacing');
  lineBreak = new RuleDelegate('line-break');
  lineHeight = new RuleDelegate('line-height');
  overflowWrap = new RuleDelegate('overflow-wrap');
  tabSize = new RuleDelegate('tab-size');
  textAlign = new RuleDelegate('text-align');
  textAlignLast = new RuleDelegate('text-align-last');
  textIndent = new RuleDelegate('text-indent');
  textJustify = new RuleDelegate('text-justify');
  textTransform = new RuleDelegate('text-transform');
  whiteSpace = new RuleDelegate('white-space');
  wordBreak = new RuleDelegate('word-break');
  wordSpacing = new RuleDelegate('word-spacing');
  wordWrap = new RuleDelegate('word-wrap');
  textDecoration = new RuleDelegate('text-decoration');
  textDecorationColor = new RuleDelegate('text-decoration-color');
  textDecorationLine = new RuleDelegate('text-decoration-line');
  textDecorationStyle = new RuleDelegate('text-decoration-style');
  textShadow = new RuleDelegate('text-shadow');
  textUnderlinePosition = new RuleDelegate('text-underline-position');
  font = new RuleDelegate('font');
  fontFamily = new RuleDelegate('font-family');
  fontFeatureSettings = new RuleDelegate('font-feature-settings');
  fontKerning = new RuleDelegate('font-kerning');
  fontLanguageOverride = new RuleDelegate('font-language-override');
  fontSize = new RuleDelegate('font-size');
  fontSizeAdjust = new RuleDelegate('font-size-adjust');
  fontStretch = new RuleDelegate('font-stretch');
  fontStyle = new RuleDelegate('font-style');
  fontSynthesis = new RuleDelegate('font-synthesis');
  fontVariant = new RuleDelegate('font-variant');
  fontVariantAlternates = new RuleDelegate('font-variant-alternates');
  fontVariantCaps = new RuleDelegate('font-variant-caps');
  fontVariantEastAsian = new RuleDelegate('font-variant-east-asian');
  fontVariantLigatures = new RuleDelegate('font-variant-ligatures');
  fontVariantNumeric = new RuleDelegate('font-variant-numeric');
  fontVariantPosition = new RuleDelegate('font-variant-position');
  fontWeight = new RuleDelegate('font-weight');
  direction = new RuleDelegate('direction');
  textOrientation = new RuleDelegate('text-orientation');
  textCombineUpright = new RuleDelegate('text-combine-upright');
  unicodeBidi = new RuleDelegate('unicode-bidi');
  writingMode = new RuleDelegate('writing-mode');
  borderCollapse = new RuleDelegate('border-collapse');
  borderSpacing = new RuleDelegate('border-spacing');
  captionSide = new RuleDelegate('caption-side');
  emptyCells = new RuleDelegate('empty-cells');
  tableLayout = new RuleDelegate('table-layout');
  counterIncrement = new RuleDelegate('counter-increment');
  counterReset = new RuleDelegate('counter-reset');
  listStyle = new RuleDelegate('list-style');
  listStyleImage = new RuleDelegate('list-style-image');
  listStylePosition = new RuleDelegate('list-style-position');
  listStyleType = new RuleDelegate('list-style-type');
  animation = new RuleDelegate('animation');
  animationDelay = new RuleDelegate('animation-delay');
  animationDirection = new RuleDelegate('animation-direction');
  animationDuration = new RuleDelegate('animation-duration');
  animationFillMode = new RuleDelegate('animation-fill-mode');
  animationIterationCount = new RuleDelegate('animation-iteration-count');
  animationName = new RuleDelegate('animation-name');
  animationPlayState = new RuleDelegate('animation-play-state');
  animationTimingFunction = new RuleDelegate('animation-timing-function');
  backfaceVisibility = new RuleDelegate('backface-visibility');
  perspective = new RuleDelegate('perspective');
  perspectiveOrigin = new RuleDelegate('perspective-origin');
  transform = new RuleDelegate('transform');
  transformOrigin = new RuleDelegate('transform-origin');
  transformStyle = new RuleDelegate('transform-style');
  transition = new RuleDelegate('transition');
  transitionProperty = new RuleDelegate('transition-property');
  transitionDuration = new RuleDelegate('transition-duration');
  transitionTimingFunction = new RuleDelegate('transition-timing-function');
  transitionDelay = new RuleDelegate('transition-delay');
  boxSizing = new RuleDelegate('box-sizing');
  content = new RuleDelegate('content');
  cursor = new RuleDelegate('cursor');
  imeMode = new RuleDelegate('ime-mode');
  navDown = new RuleDelegate('nav-down');
  navIndex = new RuleDelegate('nav-index');
  navLeft = new RuleDelegate('nav-left');
  navRight = new RuleDelegate('nav-right');
  navUp = new RuleDelegate('nav-up');
  outline = new RuleDelegate('outline');
  outlineColor = new RuleDelegate('outline-color');
  outlineOffset = new RuleDelegate('outline-offset');
  outlineStyle = new RuleDelegate('outline-style');
  outlineWidth = new RuleDelegate('outline-width');
  resize = new RuleDelegate('resize');
  textOverflow = new RuleDelegate('text-overflow');
  breakAfter = new RuleDelegate('break-after');
  breakBefore = new RuleDelegate('break-before');
  breakInside = new RuleDelegate('break-inside');
  columnCount = new RuleDelegate('column-count');
  columnFill = new RuleDelegate('column-fill');
  columnGap = new RuleDelegate('column-gap');
  columnRule = new RuleDelegate('column-rule');
  columnRuleColor = new RuleDelegate('column-rule-color');
  columnRuleStyle = new RuleDelegate('column-rule-style');
  columnRuleWidth = new RuleDelegate('column-rule-width');
  columnSpan = new RuleDelegate('column-span');
  columnWidth = new RuleDelegate('column-width');
  columns = new RuleDelegate('columns');
  widows = new RuleDelegate('widows');
  orphans = new RuleDelegate('orphans');
  pageBreakAfter = new RuleDelegate('page-break-after');
  pageBreakBefore = new RuleDelegate('page-break-before');
  pageBreakInside = new RuleDelegate('page-break-inside');
  marks = new RuleDelegate('marks');
  quotes = new RuleDelegate('quotes');
  filter = new RuleDelegate('filter');
  imageOrientation = new RuleDelegate('image-orientation');
  imageRendering = new RuleDelegate('image-rendering');
  imageResolution = new RuleDelegate('image-resolution');
  objectFit = new RuleDelegate('object-fit');
  objectPosition = new RuleDelegate('object-position');
  mask = new RuleDelegate('mask');
  maskType = new RuleDelegate('mask-type');
  mark = new RuleDelegate('mark');
  markAfter = new RuleDelegate('mark-after');
  markBefore = new RuleDelegate('mark-before');
  phonemes = new RuleDelegate('phonemes');
  rest = new RuleDelegate('rest');
  restAfter = new RuleDelegate('rest-after');
  restBefore = new RuleDelegate('rest-before');
  voiceBalance = new RuleDelegate('voice-balance');
  voiceDuration = new RuleDelegate('voice-duration');
  voicePitch = new RuleDelegate('voice-pitch');
  voicePitchRange = new RuleDelegate('voice-pitch-range');
  voiceRate = new RuleDelegate('voice-rate');
  voiceStress = new RuleDelegate('voice-stress');
  voiceVolume = new RuleDelegate('voice-volume');
  marqueeDirection = new RuleDelegate('marquee-direction');
  marqueePlayCount = new RuleDelegate('marquee-play-count');
  marqueeSpeed = new RuleDelegate('marquee-speed');
  marqueeStyle = new RuleDelegate('marquee-style');
  zoom = new RuleDelegate('zoom');
  src = new RuleDelegate('src');
  isScrollableVertically = new ScrollableRuleDelegate(true);
  isScrollableHorizontally = new ScrollableRuleDelegate(false);
  Kotlin.defineModule('kunafa', _);
  return _;
}(typeof kunafa === 'undefined' ? {} : kunafa, kotlin);
