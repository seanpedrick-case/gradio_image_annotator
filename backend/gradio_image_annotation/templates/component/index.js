const {
  SvelteComponent: Df,
  assign: Lf,
  create_slot: Ef,
  detach: Mf,
  element: Rf,
  get_all_dirty_from_scope: Af,
  get_slot_changes: Wf,
  get_spread_update: If,
  init: Tf,
  insert: Hf,
  safe_not_equal: Xf,
  set_dynamic_element_data: xo,
  set_style: Ue,
  toggle_class: mt,
  transition_in: xa,
  transition_out: $a,
  update_slot_base: Yf
} = window.__gradio__svelte__internal;
function Ff(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = Ef(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      l[7]
    ) },
    { id: (
      /*elem_id*/
      l[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      l[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = Lf(r, s[a]);
  return {
    c() {
      e = Rf(
        /*tag*/
        l[14]
      ), o && o.c(), xo(
        /*tag*/
        l[14]
      )(e, r), mt(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), mt(
        e,
        "padded",
        /*padding*/
        l[6]
      ), mt(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), mt(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), mt(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), Ue(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), Ue(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), Ue(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), Ue(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), Ue(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), Ue(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), Ue(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Hf(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && Yf(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? Wf(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : Af(
          /*$$scope*/
          a[17]
        ),
        null
      ), xo(
        /*tag*/
        a[14]
      )(e, r = If(s, [
        (!n || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || f & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), mt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), mt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), mt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), mt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), mt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ue(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ue(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ue(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ue(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ue(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ue(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (xa(o, a), n = !0);
    },
    o(a) {
      $a(o, a), n = !1;
    },
    d(a) {
      a && Mf(e), o && o.d(a);
    }
  };
}
function jf(l) {
  let e, t = (
    /*tag*/
    l[14] && Ff(l)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, i) {
      t && t.m(n, i), e = !0;
    },
    p(n, [i]) {
      /*tag*/
      n[14] && t.p(n, i);
    },
    i(n) {
      e || (xa(t, n), e = !0);
    },
    o(n) {
      $a(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Uf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: b = !1 } = e, { container: m = !0 } = e, { visible: w = !0 } = e, { allow_overflow: p = !0 } = e, { scale: g = null } = e, { min_width: h = 0 } = e, v = _ === "fieldset" ? "fieldset" : "div";
  const S = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, b = C.explicit_call), "container" in C && t(9, m = C.container), "visible" in C && t(10, w = C.visible), "allow_overflow" in C && t(11, p = C.allow_overflow), "scale" in C && t(12, g = C.scale), "min_width" in C && t(13, h = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    d,
    b,
    m,
    w,
    p,
    g,
    h,
    v,
    S,
    _,
    i,
    n
  ];
}
class Of extends Df {
  constructor(e) {
    super(), Tf(this, e, Uf, jf, Xf, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Vf,
  attr: Nf,
  create_slot: Pf,
  detach: Zf,
  element: Gf,
  get_all_dirty_from_scope: Kf,
  get_slot_changes: Jf,
  init: Qf,
  insert: xf,
  safe_not_equal: $f,
  transition_in: ec,
  transition_out: tc,
  update_slot_base: nc
} = window.__gradio__svelte__internal;
function lc(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Pf(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Gf("div"), i && i.c(), Nf(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      xf(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && nc(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Jf(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Kf(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (ec(i, o), t = !0);
    },
    o(o) {
      tc(i, o), t = !1;
    },
    d(o) {
      o && Zf(e), i && i.d(o);
    }
  };
}
function ic(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class oc extends Vf {
  constructor(e) {
    super(), Qf(this, e, ic, lc, $f, {});
  }
}
const {
  SvelteComponent: sc,
  attr: $o,
  check_outros: ac,
  create_component: rc,
  create_slot: fc,
  destroy_component: cc,
  detach: Ul,
  element: uc,
  empty: _c,
  get_all_dirty_from_scope: dc,
  get_slot_changes: hc,
  group_outros: mc,
  init: gc,
  insert: Ol,
  mount_component: bc,
  safe_not_equal: wc,
  set_data: pc,
  space: vc,
  text: kc,
  toggle_class: Bn,
  transition_in: sl,
  transition_out: Vl,
  update_slot_base: yc
} = window.__gradio__svelte__internal;
function es(l) {
  let e, t;
  return e = new oc({
    props: {
      $$slots: { default: [Cc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      rc(e.$$.fragment);
    },
    m(n, i) {
      bc(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (sl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cc(e, n);
    }
  };
}
function Cc(l) {
  let e;
  return {
    c() {
      e = kc(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Ol(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && pc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ul(e);
    }
  };
}
function Sc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = fc(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && es(l)
  );
  return {
    c() {
      e = uc("span"), s && s.c(), t = vc(), r && r.c(), n = _c(), $o(e, "data-testid", "block-info"), $o(e, "class", "svelte-22c38v"), Bn(e, "sr-only", !/*show_label*/
      l[0]), Bn(e, "hide", !/*show_label*/
      l[0]), Bn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      Ol(a, e, f), s && s.m(e, null), Ol(a, t, f), r && r.m(a, f), Ol(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && yc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? hc(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : dc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Bn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && Bn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && Bn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && sl(r, 1)) : (r = es(a), r.c(), sl(r, 1), r.m(n.parentNode, n)) : r && (mc(), Vl(r, 1, 1, () => {
        r = null;
      }), ac());
    },
    i(a) {
      i || (sl(s, a), sl(r), i = !0);
    },
    o(a) {
      Vl(s, a), Vl(r), i = !1;
    },
    d(a) {
      a && (Ul(e), Ul(t), Ul(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function zc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class er extends sc {
  constructor(e) {
    super(), gc(this, e, zc, Sc, wc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: qc,
  append: zi,
  attr: Sl,
  create_component: Bc,
  destroy_component: Dc,
  detach: Lc,
  element: ts,
  init: Ec,
  insert: Mc,
  mount_component: Rc,
  safe_not_equal: Ac,
  set_data: Wc,
  space: Ic,
  text: Tc,
  toggle_class: Xt,
  transition_in: Hc,
  transition_out: Xc
} = window.__gradio__svelte__internal;
function Yc(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = ts("label"), t = ts("span"), Bc(n.$$.fragment), i = Ic(), o = Tc(
        /*label*/
        l[0]
      ), Sl(t, "class", "svelte-9gxdi0"), Sl(e, "for", ""), Sl(e, "data-testid", "block-label"), Sl(e, "class", "svelte-9gxdi0"), Xt(e, "hide", !/*show_label*/
      l[2]), Xt(e, "sr-only", !/*show_label*/
      l[2]), Xt(
        e,
        "float",
        /*float*/
        l[4]
      ), Xt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      Mc(r, e, a), zi(e, t), Rc(n, t, null), zi(e, i), zi(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Wc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Xt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Xt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Xt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Xt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Hc(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Xc(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Lc(e), Dc(n);
    }
  };
}
function Fc(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class jc extends qc {
  constructor(e) {
    super(), Ec(this, e, Fc, Yc, Ac, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Uc,
  append: mo,
  attr: Bt,
  bubble: Oc,
  create_component: Vc,
  destroy_component: Nc,
  detach: tr,
  element: go,
  init: Pc,
  insert: nr,
  listen: Zc,
  mount_component: Gc,
  safe_not_equal: Kc,
  set_data: Jc,
  set_style: Dn,
  space: Qc,
  text: xc,
  toggle_class: Re,
  transition_in: $c,
  transition_out: eu
} = window.__gradio__svelte__internal;
function ns(l) {
  let e, t;
  return {
    c() {
      e = go("span"), t = xc(
        /*label*/
        l[1]
      ), Bt(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      nr(n, e, i), mo(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Jc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && tr(e);
    }
  };
}
function tu(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && ns(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = go("button"), a && a.c(), t = Qc(), n = go("div"), Vc(i.$$.fragment), Bt(n, "class", "svelte-1lrphxw"), Re(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), Re(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), Re(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], Bt(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), Bt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), Bt(
        e,
        "title",
        /*label*/
        l[1]
      ), Bt(e, "class", "svelte-1lrphxw"), Re(
        e,
        "pending",
        /*pending*/
        l[3]
      ), Re(
        e,
        "padded",
        /*padded*/
        l[5]
      ), Re(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), Re(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), Dn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Dn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Dn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      nr(f, e, c), a && a.m(e, null), mo(e, t), mo(e, n), Gc(i, n, null), o = !0, s || (r = Zc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = ns(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Re(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || c & /*size*/
      16) && Re(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || c & /*size*/
      16) && Re(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || c & /*label*/
      2) && Bt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || c & /*hasPopup*/
      256) && Bt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || c & /*label*/
      2) && Bt(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || c & /*pending*/
      8) && Re(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || c & /*padded*/
      32) && Re(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || c & /*highlight*/
      64) && Re(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || c & /*transparent*/
      512) && Re(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && Dn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Dn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && Dn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || ($c(i.$$.fragment, f), o = !0);
    },
    o(f) {
      eu(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && tr(e), a && a.d(), Nc(i), s = !1, r();
    }
  };
}
function nu(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: w = 0 } = e;
  function p(g) {
    Oc.call(this, l, g);
  }
  return l.$$set = (g) => {
    "Icon" in g && t(0, i = g.Icon), "label" in g && t(1, o = g.label), "show_label" in g && t(2, s = g.show_label), "pending" in g && t(3, r = g.pending), "size" in g && t(4, a = g.size), "padded" in g && t(5, f = g.padded), "highlight" in g && t(6, c = g.highlight), "disabled" in g && t(7, u = g.disabled), "hasPopup" in g && t(8, _ = g.hasPopup), "color" in g && t(13, d = g.color), "transparent" in g && t(9, b = g.transparent), "background" in g && t(10, m = g.background), "offset" in g && t(11, w = g.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    b,
    m,
    w,
    n,
    d,
    p
  ];
}
class fi extends Uc {
  constructor(e) {
    super(), Pc(this, e, nu, tu, Kc, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: lu,
  append: iu,
  attr: qi,
  binding_callbacks: ou,
  create_slot: su,
  detach: au,
  element: ls,
  get_all_dirty_from_scope: ru,
  get_slot_changes: fu,
  init: cu,
  insert: uu,
  safe_not_equal: _u,
  toggle_class: Yt,
  transition_in: du,
  transition_out: hu,
  update_slot_base: mu
} = window.__gradio__svelte__internal;
function gu(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = su(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = ls("div"), t = ls("div"), o && o.c(), qi(t, "class", "icon svelte-3w3rth"), qi(e, "class", "empty svelte-3w3rth"), qi(e, "aria-label", "Empty value"), Yt(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), Yt(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), Yt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), Yt(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      uu(s, e, r), iu(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && mu(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? fu(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : ru(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Yt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Yt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Yt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Yt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (du(o, s), n = !0);
    },
    o(s) {
      hu(o, s), n = !1;
    },
    d(s) {
      s && au(e), o && o.d(s), l[6](null);
    }
  };
}
function bu(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: b } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > b + 2;
  }
  function c(u) {
    ou[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return l.$$set = (u) => {
    "size" in u && t(0, s = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, o = u.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [s, r, a, n, o, i, c];
}
class wu extends lu {
  constructor(e) {
    super(), cu(this, e, bu, gu, _u, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: pu,
  append: is,
  attr: Ae,
  detach: vu,
  init: ku,
  insert: yu,
  noop: Bi,
  safe_not_equal: Cu,
  svg_element: Di
} = window.__gradio__svelte__internal;
function Su(l) {
  let e, t, n;
  return {
    c() {
      e = Di("svg"), t = Di("path"), n = Di("circle"), Ae(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ae(n, "cx", "12"), Ae(n, "cy", "13"), Ae(n, "r", "4"), Ae(e, "xmlns", "http://www.w3.org/2000/svg"), Ae(e, "width", "100%"), Ae(e, "height", "100%"), Ae(e, "viewBox", "0 0 24 24"), Ae(e, "fill", "none"), Ae(e, "stroke", "currentColor"), Ae(e, "stroke-width", "1.5"), Ae(e, "stroke-linecap", "round"), Ae(e, "stroke-linejoin", "round"), Ae(e, "class", "feather feather-camera");
    },
    m(i, o) {
      yu(i, e, o), is(e, t), is(e, n);
    },
    p: Bi,
    i: Bi,
    o: Bi,
    d(i) {
      i && vu(e);
    }
  };
}
class zu extends pu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: qu,
  append: Bu,
  attr: at,
  detach: Du,
  init: Lu,
  insert: Eu,
  noop: Li,
  safe_not_equal: Mu,
  svg_element: os
} = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t;
  return {
    c() {
      e = os("svg"), t = os("circle"), at(t, "cx", "12"), at(t, "cy", "12"), at(t, "r", "10"), at(e, "xmlns", "http://www.w3.org/2000/svg"), at(e, "width", "100%"), at(e, "height", "100%"), at(e, "viewBox", "0 0 24 24"), at(e, "stroke-width", "1.5"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round"), at(e, "class", "feather feather-circle");
    },
    m(n, i) {
      Eu(n, e, i), Bu(e, t);
    },
    p: Li,
    i: Li,
    o: Li,
    d(n) {
      n && Du(e);
    }
  };
}
class Au extends qu {
  constructor(e) {
    super(), Lu(this, e, null, Ru, Mu, {});
  }
}
const {
  SvelteComponent: Wu,
  append: Ei,
  attr: rt,
  detach: Iu,
  init: Tu,
  insert: Hu,
  noop: Mi,
  safe_not_equal: Xu,
  set_style: gt,
  svg_element: zl
} = window.__gradio__svelte__internal;
function Yu(l) {
  let e, t, n, i;
  return {
    c() {
      e = zl("svg"), t = zl("g"), n = zl("path"), i = zl("path"), rt(n, "d", "M18,6L6.087,17.913"), gt(n, "fill", "none"), gt(n, "fill-rule", "nonzero"), gt(n, "stroke-width", "2px"), rt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), rt(i, "d", "M4.364,4.364L19.636,19.636"), gt(i, "fill", "none"), gt(i, "fill-rule", "nonzero"), gt(i, "stroke-width", "2px"), rt(e, "width", "100%"), rt(e, "height", "100%"), rt(e, "viewBox", "0 0 24 24"), rt(e, "version", "1.1"), rt(e, "xmlns", "http://www.w3.org/2000/svg"), rt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), rt(e, "xml:space", "preserve"), rt(e, "stroke", "currentColor"), gt(e, "fill-rule", "evenodd"), gt(e, "clip-rule", "evenodd"), gt(e, "stroke-linecap", "round"), gt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Hu(o, e, s), Ei(e, t), Ei(t, n), Ei(e, i);
    },
    p: Mi,
    i: Mi,
    o: Mi,
    d(o) {
      o && Iu(e);
    }
  };
}
class lr extends Wu {
  constructor(e) {
    super(), Tu(this, e, null, Yu, Xu, {});
  }
}
const {
  SvelteComponent: Fu,
  append: ju,
  attr: $n,
  detach: Uu,
  init: Ou,
  insert: Vu,
  noop: Ri,
  safe_not_equal: Nu,
  svg_element: ss
} = window.__gradio__svelte__internal;
function Pu(l) {
  let e, t;
  return {
    c() {
      e = ss("svg"), t = ss("path"), $n(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), $n(t, "fill", "currentColor"), $n(e, "id", "icon"), $n(e, "xmlns", "http://www.w3.org/2000/svg"), $n(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Vu(n, e, i), ju(e, t);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(n) {
      n && Uu(e);
    }
  };
}
class Zu extends Fu {
  constructor(e) {
    super(), Ou(this, e, null, Pu, Nu, {});
  }
}
const {
  SvelteComponent: Gu,
  append: Ku,
  attr: Ln,
  detach: Ju,
  init: Qu,
  insert: xu,
  noop: Ai,
  safe_not_equal: $u,
  svg_element: as
} = window.__gradio__svelte__internal;
function e_(l) {
  let e, t;
  return {
    c() {
      e = as("svg"), t = as("path"), Ln(t, "fill", "currentColor"), Ln(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ln(e, "xmlns", "http://www.w3.org/2000/svg"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      xu(n, e, i), Ku(e, t);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(n) {
      n && Ju(e);
    }
  };
}
class t_ extends Gu {
  constructor(e) {
    super(), Qu(this, e, null, e_, $u, {});
  }
}
const {
  SvelteComponent: n_,
  append: l_,
  attr: En,
  detach: i_,
  init: o_,
  insert: s_,
  noop: Wi,
  safe_not_equal: a_,
  svg_element: rs
} = window.__gradio__svelte__internal;
function r_(l) {
  let e, t;
  return {
    c() {
      e = rs("svg"), t = rs("path"), En(t, "d", "M5 8l4 4 4-4z"), En(e, "class", "dropdown-arrow svelte-145leq6"), En(e, "xmlns", "http://www.w3.org/2000/svg"), En(e, "width", "100%"), En(e, "height", "100%"), En(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      s_(n, e, i), l_(e, t);
    },
    p: Wi,
    i: Wi,
    o: Wi,
    d(n) {
      n && i_(e);
    }
  };
}
class To extends n_ {
  constructor(e) {
    super(), o_(this, e, null, r_, a_, {});
  }
}
const {
  SvelteComponent: f_,
  append: Ii,
  attr: _e,
  detach: c_,
  init: u_,
  insert: __,
  noop: Ti,
  safe_not_equal: d_,
  svg_element: ql
} = window.__gradio__svelte__internal;
function h_(l) {
  let e, t, n, i;
  return {
    c() {
      e = ql("svg"), t = ql("rect"), n = ql("circle"), i = ql("polyline"), _e(t, "x", "3"), _e(t, "y", "3"), _e(t, "width", "18"), _e(t, "height", "18"), _e(t, "rx", "2"), _e(t, "ry", "2"), _e(n, "cx", "8.5"), _e(n, "cy", "8.5"), _e(n, "r", "1.5"), _e(i, "points", "21 15 16 10 5 21"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "1.5"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-image");
    },
    m(o, s) {
      __(o, e, s), Ii(e, t), Ii(e, n), Ii(e, i);
    },
    p: Ti,
    i: Ti,
    o: Ti,
    d(o) {
      o && c_(e);
    }
  };
}
let ir = class extends f_ {
  constructor(e) {
    super(), u_(this, e, null, h_, d_, {});
  }
};
const {
  SvelteComponent: m_,
  append: g_,
  attr: Bl,
  detach: b_,
  init: w_,
  insert: p_,
  noop: Hi,
  safe_not_equal: v_,
  svg_element: fs
} = window.__gradio__svelte__internal;
function k_(l) {
  let e, t;
  return {
    c() {
      e = fs("svg"), t = fs("path"), Bl(t, "fill", "currentColor"), Bl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Bl(e, "xmlns", "http://www.w3.org/2000/svg"), Bl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      p_(n, e, i), g_(e, t);
    },
    p: Hi,
    i: Hi,
    o: Hi,
    d(n) {
      n && b_(e);
    }
  };
}
class or extends m_ {
  constructor(e) {
    super(), w_(this, e, null, k_, v_, {});
  }
}
const {
  SvelteComponent: y_,
  append: Dl,
  attr: de,
  detach: C_,
  init: S_,
  insert: z_,
  noop: Xi,
  safe_not_equal: q_,
  svg_element: el
} = window.__gradio__svelte__internal;
function B_(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = el("svg"), t = el("path"), n = el("path"), i = el("line"), o = el("line"), de(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), de(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), de(i, "x1", "12"), de(i, "y1", "19"), de(i, "x2", "12"), de(i, "y2", "23"), de(o, "x1", "8"), de(o, "y1", "23"), de(o, "x2", "16"), de(o, "y2", "23"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "2"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-mic");
    },
    m(s, r) {
      z_(s, e, r), Dl(e, t), Dl(e, n), Dl(e, i), Dl(e, o);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(s) {
      s && C_(e);
    }
  };
}
class D_ extends y_ {
  constructor(e) {
    super(), S_(this, e, null, B_, q_, {});
  }
}
const {
  SvelteComponent: L_,
  append: cs,
  attr: Qe,
  detach: E_,
  init: M_,
  insert: R_,
  noop: Yi,
  safe_not_equal: A_,
  set_style: W_,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function I_(l) {
  let e, t, n;
  return {
    c() {
      e = Fi("svg"), t = Fi("polyline"), n = Fi("path"), Qe(t, "points", "1 4 1 10 7 10"), Qe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "2"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-rotate-ccw"), W_(e, "transform", "rotateY(180deg)");
    },
    m(i, o) {
      R_(i, e, o), cs(e, t), cs(e, n);
    },
    p: Yi,
    i: Yi,
    o: Yi,
    d(i) {
      i && E_(e);
    }
  };
}
class sr extends L_ {
  constructor(e) {
    super(), M_(this, e, null, I_, A_, {});
  }
}
const {
  SvelteComponent: T_,
  append: H_,
  attr: We,
  detach: X_,
  init: Y_,
  insert: F_,
  noop: ji,
  safe_not_equal: j_,
  svg_element: us
} = window.__gradio__svelte__internal;
function U_(l) {
  let e, t;
  return {
    c() {
      e = us("svg"), t = us("rect"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-square");
    },
    m(n, i) {
      F_(n, e, i), H_(e, t);
    },
    p: ji,
    i: ji,
    o: ji,
    d(n) {
      n && X_(e);
    }
  };
}
class O_ extends T_ {
  constructor(e) {
    super(), Y_(this, e, null, U_, j_, {});
  }
}
const {
  SvelteComponent: V_,
  append: _s,
  attr: xe,
  detach: N_,
  init: P_,
  insert: Z_,
  noop: Ui,
  safe_not_equal: G_,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function K_(l) {
  let e, t, n;
  return {
    c() {
      e = Oi("svg"), t = Oi("polyline"), n = Oi("path"), xe(t, "points", "1 4 1 10 7 10"), xe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "fill", "none"), xe(e, "stroke", "currentColor"), xe(e, "stroke-width", "2"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round"), xe(e, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      Z_(i, e, o), _s(e, t), _s(e, n);
    },
    p: Ui,
    i: Ui,
    o: Ui,
    d(i) {
      i && N_(e);
    }
  };
}
class ar extends V_ {
  constructor(e) {
    super(), P_(this, e, null, K_, G_, {});
  }
}
const {
  SvelteComponent: J_,
  append: Vi,
  attr: ye,
  detach: Q_,
  init: x_,
  insert: $_,
  noop: Ni,
  safe_not_equal: ed,
  svg_element: Ll
} = window.__gradio__svelte__internal;
function td(l) {
  let e, t, n, i;
  return {
    c() {
      e = Ll("svg"), t = Ll("path"), n = Ll("polyline"), i = Ll("line"), ye(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ye(n, "points", "17 8 12 3 7 8"), ye(i, "x1", "12"), ye(i, "y1", "3"), ye(i, "x2", "12"), ye(i, "y2", "15"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "width", "90%"), ye(e, "height", "90%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "fill", "none"), ye(e, "stroke", "currentColor"), ye(e, "stroke-width", "2"), ye(e, "stroke-linecap", "round"), ye(e, "stroke-linejoin", "round"), ye(e, "class", "feather feather-upload");
    },
    m(o, s) {
      $_(o, e, s), Vi(e, t), Vi(e, n), Vi(e, i);
    },
    p: Ni,
    i: Ni,
    o: Ni,
    d(o) {
      o && Q_(e);
    }
  };
}
let rr = class extends J_ {
  constructor(e) {
    super(), x_(this, e, null, td, ed, {});
  }
};
const {
  SvelteComponent: nd,
  append: ds,
  attr: Ft,
  detach: ld,
  init: id,
  insert: od,
  noop: Pi,
  safe_not_equal: sd,
  svg_element: Zi
} = window.__gradio__svelte__internal;
function ad(l) {
  let e, t, n;
  return {
    c() {
      e = Zi("svg"), t = Zi("path"), n = Zi("path"), Ft(t, "fill", "currentColor"), Ft(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ft(n, "fill", "currentColor"), Ft(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      od(i, e, o), ds(e, t), ds(e, n);
    },
    p: Pi,
    i: Pi,
    o: Pi,
    d(i) {
      i && ld(e);
    }
  };
}
let fr = class extends nd {
  constructor(e) {
    super(), id(this, e, null, ad, sd, {});
  }
};
const rd = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], hs = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
rd.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: hs[e][t],
    secondary: hs[e][n]
  }
}), {});
class Nl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function fd(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Nl("Must be on Spaces to share.");
  let t, n, i;
  t = cd(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const o = new File([t], i, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await s.json();
      throw new Nl(`Upload failed: ${f.error}`);
    }
    throw new Nl("Upload failed.");
  }
  return await s.text();
}
function cd(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: ud,
  create_component: _d,
  destroy_component: dd,
  init: hd,
  mount_component: md,
  safe_not_equal: gd,
  transition_in: bd,
  transition_out: wd
} = window.__gradio__svelte__internal, { createEventDispatcher: pd } = window.__gradio__svelte__internal;
function vd(l) {
  let e, t;
  return e = new fi({
    props: {
      Icon: Zu,
      label: (
        /*i18n*/
        l[2]("common.share")
      ),
      pending: (
        /*pending*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[5]
  ), {
    c() {
      _d(e.$$.fragment);
    },
    m(n, i) {
      md(e, n, i), t = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (bd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dd(e, n);
    }
  };
}
function kd(l, e, t) {
  const n = pd();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Nl ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class yd extends ud {
  constructor(e) {
    super(), hd(this, e, kd, vd, gd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Cd,
  append: un,
  attr: bo,
  check_outros: Sd,
  create_component: cr,
  destroy_component: ur,
  detach: Pl,
  element: wo,
  group_outros: zd,
  init: qd,
  insert: Zl,
  mount_component: _r,
  safe_not_equal: Bd,
  set_data: po,
  space: vo,
  text: al,
  toggle_class: ms,
  transition_in: Jl,
  transition_out: Ql
} = window.__gradio__svelte__internal;
function Dd(l) {
  let e, t;
  return e = new rr({}), {
    c() {
      cr(e.$$.fragment);
    },
    m(n, i) {
      _r(e, n, i), t = !0;
    },
    i(n) {
      t || (Jl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ql(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ur(e, n);
    }
  };
}
function Ld(l) {
  let e, t;
  return e = new or({}), {
    c() {
      cr(e.$$.fragment);
    },
    m(n, i) {
      _r(e, n, i), t = !0;
    },
    i(n) {
      t || (Jl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ql(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ur(e, n);
    }
  };
}
function gs(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, o, s, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = wo("span"), t = al("- "), i = al(n), o = al(" -"), s = vo(), a = al(r), bo(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Zl(f, e, c), un(e, t), un(e, i), un(e, o), Zl(f, s, c), Zl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && po(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && po(a, r);
    },
    d(f) {
      f && (Pl(e), Pl(s), Pl(a));
    }
  };
}
function Ed(l) {
  let e, t, n, i, o, s = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, a, f;
  const c = [Ld, Dd], u = [];
  function _(b, m) {
    return (
      /*type*/
      b[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && gs(l)
  );
  return {
    c() {
      e = wo("div"), t = wo("span"), i.c(), o = vo(), r = al(s), a = vo(), d && d.c(), bo(t, "class", "icon-wrap svelte-kzcjhc"), ms(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), bo(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, m) {
      Zl(b, e, m), un(e, t), u[n].m(t, null), un(e, o), un(e, r), un(e, a), d && d.m(e, null), f = !0;
    },
    p(b, [m]) {
      let w = n;
      n = _(b), n !== w && (zd(), Ql(u[w], 1, 1, () => {
        u[w] = null;
      }), Sd(), i = u[n], i || (i = u[n] = c[n](b), i.c()), Jl(i, 1), i.m(t, null)), (!f || m & /*hovered*/
      16) && ms(
        t,
        "hovered",
        /*hovered*/
        b[4]
      ), (!f || m & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      b[1](
        /*defs*/
        b[5][
          /*type*/
          b[0]
        ] || /*defs*/
        b[5].file
      ) + "") && po(r, s), /*mode*/
      b[3] !== "short" ? d ? d.p(b, m) : (d = gs(b), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(b) {
      f || (Jl(i), f = !0);
    },
    o(b) {
      Ql(i), f = !1;
    },
    d(b) {
      b && Pl(e), u[n].d(), d && d.d();
    }
  };
}
function Md(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, o = f.message), "mode" in f && t(3, s = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, o, s, r, a];
}
class dr extends Cd {
  constructor(e) {
    super(), qd(this, e, Md, Ed, Bd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Rd,
  append: Gi,
  attr: kt,
  check_outros: rl,
  create_component: ci,
  destroy_component: ui,
  detach: On,
  element: vl,
  empty: Ad,
  group_outros: fl,
  init: Wd,
  insert: Vn,
  listen: _i,
  mount_component: di,
  safe_not_equal: Id,
  space: Ki,
  toggle_class: Qt,
  transition_in: me,
  transition_out: Ie
} = window.__gradio__svelte__internal;
function bs(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), o, s = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, c = t && ws(l), u = i && ps(l), _ = s && vs(l), d = a && ks(l);
  return {
    c() {
      e = vl("span"), c && c.c(), n = Ki(), u && u.c(), o = Ki(), _ && _.c(), r = Ki(), d && d.c(), kt(e, "class", "source-selection svelte-1jp3vgd"), kt(e, "data-testid", "source-select");
    },
    m(b, m) {
      Vn(b, e, m), c && c.m(e, null), Gi(e, n), u && u.m(e, null), Gi(e, o), _ && _.m(e, null), Gi(e, r), d && d.m(e, null), f = !0;
    },
    p(b, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? c ? (c.p(b, m), m & /*sources*/
      2 && me(c, 1)) : (c = ws(b), c.c(), me(c, 1), c.m(e, n)) : c && (fl(), Ie(c, 1, 1, () => {
        c = null;
      }), rl()), m & /*sources*/
      2 && (i = /*sources*/
      b[1].includes("microphone")), i ? u ? (u.p(b, m), m & /*sources*/
      2 && me(u, 1)) : (u = ps(b), u.c(), me(u, 1), u.m(e, o)) : u && (fl(), Ie(u, 1, 1, () => {
        u = null;
      }), rl()), m & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("webcam")), s ? _ ? (_.p(b, m), m & /*sources*/
      2 && me(_, 1)) : (_ = vs(b), _.c(), me(_, 1), _.m(e, r)) : _ && (fl(), Ie(_, 1, 1, () => {
        _ = null;
      }), rl()), m & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? d ? (d.p(b, m), m & /*sources*/
      2 && me(d, 1)) : (d = ks(b), d.c(), me(d, 1), d.m(e, null)) : d && (fl(), Ie(d, 1, 1, () => {
        d = null;
      }), rl());
    },
    i(b) {
      f || (me(c), me(u), me(_), me(d), f = !0);
    },
    o(b) {
      Ie(c), Ie(u), Ie(_), Ie(d), f = !1;
    },
    d(b) {
      b && On(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function ws(l) {
  let e, t, n, i, o;
  return t = new rr({}), {
    c() {
      e = vl("button"), ci(t.$$.fragment), kt(e, "class", "icon svelte-1jp3vgd"), kt(e, "aria-label", "Upload file"), Qt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      Vn(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && On(e), ui(t), i = !1, o();
    }
  };
}
function ps(l) {
  let e, t, n, i, o;
  return t = new D_({}), {
    c() {
      e = vl("button"), ci(t.$$.fragment), kt(e, "class", "icon svelte-1jp3vgd"), kt(e, "aria-label", "Record audio"), Qt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      Vn(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && On(e), ui(t), i = !1, o();
    }
  };
}
function vs(l) {
  let e, t, n, i, o;
  return t = new fr({}), {
    c() {
      e = vl("button"), ci(t.$$.fragment), kt(e, "class", "icon svelte-1jp3vgd"), kt(e, "aria-label", "Capture from camera"), Qt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      Vn(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && On(e), ui(t), i = !1, o();
    }
  };
}
function ks(l) {
  let e, t, n, i, o;
  return t = new or({}), {
    c() {
      e = vl("button"), ci(t.$$.fragment), kt(e, "class", "icon svelte-1jp3vgd"), kt(e, "aria-label", "Paste from clipboard"), Qt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      Vn(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Qt(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (me(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && On(e), ui(t), i = !1, o();
    }
  };
}
function Td(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && bs(l)
  );
  return {
    c() {
      n && n.c(), e = Ad();
    },
    m(i, o) {
      n && n.m(i, o), Vn(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && me(n, 1)) : (n = bs(i), n.c(), me(n, 1), n.m(e.parentNode, e)) : n && (fl(), Ie(n, 1, 1, () => {
        n = null;
      }), rl());
    },
    i(i) {
      t || (me(n), t = !0);
    },
    o(i) {
      Ie(n), t = !1;
    },
    d(i) {
      i && On(e), n && n.d(i);
    }
  };
}
function Hd(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(b, m, w, p) {
    function g(h) {
      return h instanceof w ? h : new w(function(v) {
        v(h);
      });
    }
    return new (w || (w = Promise))(function(h, v) {
      function S(k) {
        try {
          y(p.next(k));
        } catch (E) {
          v(E);
        }
      }
      function C(k) {
        try {
          y(p.throw(k));
        } catch (E) {
          v(E);
        }
      }
      function y(k) {
        k.done ? h(k.value) : g(k.value).then(S, C);
      }
      y((p = p.apply(b, m || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(b) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = b), a(b);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (b) => {
    "sources" in b && t(1, o = b.sources), "active_source" in b && t(0, s = b.active_source), "handle_clear" in b && t(4, r = b.handle_clear), "handle_select" in b && t(5, a = b.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    f,
    r,
    a,
    c,
    u,
    _,
    d
  ];
}
class Xd extends Rd {
  constructor(e) {
    super(), Wd(this, e, Hd, Td, Id, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Hn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Gl() {
}
const Yd = (l) => l;
function ys(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [l, "px"];
}
const hr = typeof window < "u";
let Cs = hr ? () => window.performance.now() : () => Date.now(), mr = hr ? (l) => requestAnimationFrame(l) : Gl;
const Un = /* @__PURE__ */ new Set();
function gr(l) {
  Un.forEach((e) => {
    e.c(l) || (Un.delete(e), e.f());
  }), Un.size !== 0 && mr(gr);
}
function Fd(l) {
  let e;
  return Un.size === 0 && mr(gr), { promise: new Promise((t) => {
    Un.add(e = { c: l, f: t });
  }), abort() {
    Un.delete(e);
  } };
}
function jd(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Ud(l, { delay: e = 0, duration: t = 400, easing: n = Yd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * i };
}
function Ss(l, { delay: e = 0, duration: t = 400, easing: n = jd, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, _] = ys(i), [d, b] = ys(o);
  return { delay: e, duration: t, easing: n, css: (m, w) => `
			transform: ${f} translate(${(1 - m) * u}${_}, ${(1 - m) * d}${b});
			opacity: ${a - c * w}` };
}
const Mn = [];
function Od(l, e = Gl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(s) {
    if (a = s, ((r = l) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (l = s, t)) {
      const f = !Mn.length;
      for (const c of n) c[1](), Mn.push(c, l);
      if (f) {
        for (let c = 0; c < Mn.length; c += 2) Mn[c][0](Mn[c + 1]);
        Mn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    i(s(l));
  }
  return { set: i, update: o, subscribe: function(s, r = Gl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(i, o) || Gl), s(l), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function zs(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function ko(l, e, t, n) {
  if (typeof t == "number" || zs(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = (o + (l.opts.stiffness * i - l.opts.damping * o) * l.inv_mass) * l.dt;
    return Math.abs(s) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, zs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((i, o) => ko(l, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const i = {};
    for (const o in t) i[o] = ko(l, e[o], t[o], n[o]);
    return i;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function qs(l, e = {}) {
  const t = Od(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function b(w, p = {}) {
    c = w;
    const g = a = {};
    return l == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, s = Cs(), f = w, t.set(l = c), Promise.resolve()) : (p.soft && (_ = 1 / (60 * (p.soft === !0 ? 0.5 : +p.soft)), u = 0), r || (s = Cs(), d = !1, r = Fd((h) => {
      if (d) return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const v = { inv_mass: u, opts: m, settled: !0, dt: 60 * (h - s) / 1e3 }, S = ko(v, f, l, c);
      return s = h, f = l, t.set(l = S), v.settled && (r = null), !v.settled;
    })), new Promise((h) => {
      r.promise.then(() => {
        g === a && h();
      });
    }));
  }
  const m = { set: b, update: (w, p) => b(w(c, l), p), subscribe: t.subscribe, stiffness: n, damping: i, precision: o };
  return m;
}
const {
  SvelteComponent: Vd,
  append: ft,
  attr: G,
  component_subscribe: Bs,
  detach: Nd,
  element: Pd,
  init: Zd,
  insert: Gd,
  noop: Ds,
  safe_not_equal: Kd,
  set_style: El,
  svg_element: ct,
  toggle_class: Ls
} = window.__gradio__svelte__internal, { onMount: Jd } = window.__gradio__svelte__internal;
function Qd(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _;
  return {
    c() {
      e = Pd("div"), t = ct("svg"), n = ct("g"), i = ct("path"), o = ct("path"), s = ct("path"), r = ct("path"), a = ct("g"), f = ct("path"), c = ct("path"), u = ct("path"), _ = ct("path"), G(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), G(i, "fill", "#FF7C00"), G(i, "fill-opacity", "0.4"), G(i, "class", "svelte-43sxxs"), G(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), G(o, "fill", "#FF7C00"), G(o, "class", "svelte-43sxxs"), G(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), G(s, "fill", "#FF7C00"), G(s, "fill-opacity", "0.4"), G(s, "class", "svelte-43sxxs"), G(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), G(r, "fill", "#FF7C00"), G(r, "class", "svelte-43sxxs"), El(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), G(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), G(f, "fill", "#FF7C00"), G(f, "fill-opacity", "0.4"), G(f, "class", "svelte-43sxxs"), G(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), G(c, "fill", "#FF7C00"), G(c, "class", "svelte-43sxxs"), G(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), G(u, "fill", "#FF7C00"), G(u, "fill-opacity", "0.4"), G(u, "class", "svelte-43sxxs"), G(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), G(_, "fill", "#FF7C00"), G(_, "class", "svelte-43sxxs"), El(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), G(t, "viewBox", "-1200 -1200 3000 3000"), G(t, "fill", "none"), G(t, "xmlns", "http://www.w3.org/2000/svg"), G(t, "class", "svelte-43sxxs"), G(e, "class", "svelte-43sxxs"), Ls(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, b) {
      Gd(d, e, b), ft(e, t), ft(t, n), ft(n, i), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, f), ft(a, c), ft(a, u), ft(a, _);
    },
    p(d, [b]) {
      b & /*$top*/
      2 && El(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), b & /*$bottom*/
      4 && El(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), b & /*margin*/
      1 && Ls(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Ds,
    o: Ds,
    d(d) {
      d && Nd(e);
    }
  };
}
function xd(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, b, m, w) {
    function p(g) {
      return g instanceof m ? g : new m(function(h) {
        h(g);
      });
    }
    return new (m || (m = Promise))(function(g, h) {
      function v(y) {
        try {
          C(w.next(y));
        } catch (k) {
          h(k);
        }
      }
      function S(y) {
        try {
          C(w.throw(y));
        } catch (k) {
          h(k);
        }
      }
      function C(y) {
        y.done ? g(y.value) : p(y.value).then(v, S);
      }
      C((w = w.apply(d, b || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = qs([0, 0]);
  Bs(l, r, (d) => t(1, n = d));
  const a = qs([0, 0]);
  Bs(l, a, (d) => t(2, i = d));
  let f;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Jd(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class $d extends Vd {
  constructor(e) {
    super(), Zd(this, e, xd, Qd, Kd, { margin: 0 });
  }
}
const {
  SvelteComponent: e1,
  append: _n,
  attr: ht,
  binding_callbacks: Es,
  check_outros: yo,
  create_component: br,
  create_slot: wr,
  destroy_component: pr,
  destroy_each: vr,
  detach: X,
  element: pt,
  empty: Nn,
  ensure_array_like: xl,
  get_all_dirty_from_scope: kr,
  get_slot_changes: yr,
  group_outros: Co,
  init: t1,
  insert: Y,
  mount_component: Cr,
  noop: So,
  safe_not_equal: n1,
  set_data: nt,
  set_style: Gt,
  space: tt,
  text: re,
  toggle_class: et,
  transition_in: dt,
  transition_out: vt,
  update_slot_base: Sr
} = window.__gradio__svelte__internal, { tick: l1 } = window.__gradio__svelte__internal, { onDestroy: i1 } = window.__gradio__svelte__internal, { createEventDispatcher: o1 } = window.__gradio__svelte__internal, s1 = (l) => ({}), Ms = (l) => ({}), a1 = (l) => ({}), Rs = (l) => ({});
function As(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ws(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function r1(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new fi({
    props: {
      Icon: lr,
      label: (
        /*i18n*/
        l[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    l[32]
  );
  const f = (
    /*#slots*/
    l[30].error
  ), c = wr(
    f,
    l,
    /*$$scope*/
    l[29],
    Ms
  );
  return {
    c() {
      e = pt("div"), br(t.$$.fragment), n = tt(), i = pt("span"), s = re(o), r = tt(), c && c.c(), ht(e, "class", "clear-status svelte-16nch4a"), ht(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      Y(u, e, _), Cr(t, e, null), Y(u, n, _), Y(u, i, _), _n(i, s), Y(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && nt(s, o), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && Sr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? yr(
          f,
          /*$$scope*/
          u[29],
          _,
          s1
        ) : kr(
          /*$$scope*/
          u[29]
        ),
        Ms
      );
    },
    i(u) {
      a || (dt(t.$$.fragment, u), dt(c, u), a = !0);
    },
    o(u) {
      vt(t.$$.fragment, u), vt(c, u), a = !1;
    },
    d(u) {
      u && (X(e), X(n), X(i), X(r)), pr(t), c && c.d(u);
    }
  };
}
function f1(l) {
  let e, t, n, i, o, s, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Is(l)
  );
  function u(h, v) {
    if (
      /*progress*/
      h[7]
    ) return _1;
    if (
      /*queue_position*/
      h[2] !== null && /*queue_size*/
      h[3] !== void 0 && /*queue_position*/
      h[2] >= 0
    ) return u1;
    if (
      /*queue_position*/
      h[2] === 0
    ) return c1;
  }
  let _ = u(l), d = _ && _(l), b = (
    /*timer*/
    l[5] && Xs(l)
  );
  const m = [g1, m1], w = [];
  function p(h, v) {
    return (
      /*last_progress_level*/
      h[15] != null ? 0 : (
        /*show_progress*/
        h[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = p(l)) && (s = w[o] = m[o](l));
  let g = !/*timer*/
  l[5] && Ns(l);
  return {
    c() {
      c && c.c(), e = tt(), t = pt("div"), d && d.c(), n = tt(), b && b.c(), i = tt(), s && s.c(), r = tt(), g && g.c(), a = Nn(), ht(t, "class", "progress-text svelte-16nch4a"), et(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), et(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(h, v) {
      c && c.m(h, v), Y(h, e, v), Y(h, t, v), d && d.m(t, null), _n(t, n), b && b.m(t, null), Y(h, i, v), ~o && w[o].m(h, v), Y(h, r, v), g && g.m(h, v), Y(h, a, v), f = !0;
    },
    p(h, v) {
      /*variant*/
      h[8] === "default" && /*show_eta_bar*/
      h[18] && /*show_progress*/
      h[6] === "full" ? c ? c.p(h, v) : (c = Is(h), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(h)) && d ? d.p(h, v) : (d && d.d(1), d = _ && _(h), d && (d.c(), d.m(t, n))), /*timer*/
      h[5] ? b ? b.p(h, v) : (b = Xs(h), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!f || v[0] & /*variant*/
      256) && et(
        t,
        "meta-text-center",
        /*variant*/
        h[8] === "center"
      ), (!f || v[0] & /*variant*/
      256) && et(
        t,
        "meta-text",
        /*variant*/
        h[8] === "default"
      );
      let S = o;
      o = p(h), o === S ? ~o && w[o].p(h, v) : (s && (Co(), vt(w[S], 1, 1, () => {
        w[S] = null;
      }), yo()), ~o ? (s = w[o], s ? s.p(h, v) : (s = w[o] = m[o](h), s.c()), dt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      h[5] ? g && (Co(), vt(g, 1, 1, () => {
        g = null;
      }), yo()) : g ? (g.p(h, v), v[0] & /*timer*/
      32 && dt(g, 1)) : (g = Ns(h), g.c(), dt(g, 1), g.m(a.parentNode, a));
    },
    i(h) {
      f || (dt(s), dt(g), f = !0);
    },
    o(h) {
      vt(s), vt(g), f = !1;
    },
    d(h) {
      h && (X(e), X(t), X(i), X(r), X(a)), c && c.d(h), d && d.d(), b && b.d(), ~o && w[o].d(h), g && g.d(h);
    }
  };
}
function Is(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = pt("div"), ht(e, "class", "eta-bar svelte-16nch4a"), Gt(e, "transform", t);
    },
    m(n, i) {
      Y(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Gt(e, "transform", t);
    },
    d(n) {
      n && X(e);
    }
  };
}
function c1(l) {
  let e;
  return {
    c() {
      e = re("processing |");
    },
    m(t, n) {
      Y(t, e, n);
    },
    p: So,
    d(t) {
      t && X(e);
    }
  };
}
function u1(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = re("queue: "), n = re(t), i = re("/"), o = re(
        /*queue_size*/
        l[3]
      ), s = re(" |");
    },
    m(r, a) {
      Y(r, e, a), Y(r, n, a), Y(r, i, a), Y(r, o, a), Y(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && nt(n, t), a[0] & /*queue_size*/
      8 && nt(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (X(e), X(n), X(i), X(o), X(s));
    }
  };
}
function _1(l) {
  let e, t = xl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Hs(Ws(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Nn();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Y(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = xl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ws(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Hs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), vr(n, i);
    }
  };
}
function Ts(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? h1 : d1
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = tt(), n = re(t), i = re(" | "), s = re(o);
    },
    m(c, u) {
      f.m(c, u), Y(c, e, u), Y(c, n, u), Y(c, i, u), Y(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && nt(n, t);
    },
    d(c) {
      c && (X(e), X(n), X(i), X(s)), f.d(c);
    }
  };
}
function d1(l) {
  let e = Hn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = re(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        n[41].index || 0
      ) + "") && nt(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function h1(l) {
  let e = Hn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Hn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = re(e), n = re("/"), o = re(i);
    },
    m(s, r) {
      Y(s, t, r), Y(s, n, r), Y(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        s[41].index || 0
      ) + "") && nt(t, e), r[0] & /*progress*/
      128 && i !== (i = Hn(
        /*p*/
        s[41].length
      ) + "") && nt(o, i);
    },
    d(s) {
      s && (X(t), X(n), X(o));
    }
  };
}
function Hs(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Ts(l)
  );
  return {
    c() {
      t && t.c(), e = Nn();
    },
    m(n, i) {
      t && t.m(n, i), Y(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Ts(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Xs(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = re(
        /*formatted_timer*/
        l[20]
      ), n = re(t), i = re("s");
    },
    m(o, s) {
      Y(o, e, s), Y(o, n, s), Y(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && nt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && nt(n, t);
    },
    d(o) {
      o && (X(e), X(n), X(i));
    }
  };
}
function m1(l) {
  let e, t;
  return e = new $d({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      br(e.$$.fragment);
    },
    m(n, i) {
      Cr(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (dt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      pr(e, n);
    }
  };
}
function g1(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Ys(l)
  );
  return {
    c() {
      e = pt("div"), t = pt("div"), r && r.c(), n = tt(), i = pt("div"), o = pt("div"), ht(t, "class", "progress-level-inner svelte-16nch4a"), ht(o, "class", "progress-bar svelte-16nch4a"), Gt(o, "width", s), ht(i, "class", "progress-bar-wrap svelte-16nch4a"), ht(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      Y(a, e, f), _n(e, t), r && r.m(t, null), _n(e, n), _n(e, i), _n(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Ys(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Gt(o, "width", s);
    },
    i: So,
    o: So,
    d(a) {
      a && X(e), r && r.d(), l[31](null);
    }
  };
}
function Ys(l) {
  let e, t = xl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Vs(As(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Nn();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Y(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = xl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = As(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Vs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), vr(n, i);
    }
  };
}
function Fs(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && b1()
  ), s = (
    /*p*/
    l[41].desc != null && js(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Us()
  ), a = (
    /*progress_level*/
    l[14] != null && Os(l)
  );
  return {
    c() {
      o && o.c(), e = tt(), s && s.c(), t = tt(), r && r.c(), n = tt(), a && a.c(), i = Nn();
    },
    m(f, c) {
      o && o.m(f, c), Y(f, e, c), s && s.m(f, c), Y(f, t, c), r && r.m(f, c), Y(f, n, c), a && a.m(f, c), Y(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, c) : (s = js(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Us(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Os(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (X(e), X(t), X(n), X(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function b1(l) {
  let e;
  return {
    c() {
      e = re(" /");
    },
    m(t, n) {
      Y(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function js(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = re(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && nt(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function Us(l) {
  let e;
  return {
    c() {
      e = re("-");
    },
    m(t, n) {
      Y(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function Os(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = re(e), n = re("%");
    },
    m(i, o) {
      Y(i, t, o), Y(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && nt(t, e);
    },
    d(i) {
      i && (X(t), X(n));
    }
  };
}
function Vs(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && Fs(l)
  );
  return {
    c() {
      t && t.c(), e = Nn();
    },
    m(n, i) {
      t && t.m(n, i), Y(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = Fs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Ns(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = wr(
    o,
    l,
    /*$$scope*/
    l[29],
    Rs
  );
  return {
    c() {
      e = pt("p"), t = re(
        /*loading_text*/
        l[9]
      ), n = tt(), s && s.c(), ht(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      Y(r, e, a), _n(e, t), Y(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && nt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && Sr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? yr(
          o,
          /*$$scope*/
          r[29],
          a,
          a1
        ) : kr(
          /*$$scope*/
          r[29]
        ),
        Rs
      );
    },
    i(r) {
      i || (dt(s, r), i = !0);
    },
    o(r) {
      vt(s, r), i = !1;
    },
    d(r) {
      r && (X(e), X(n)), s && s.d(r);
    }
  };
}
function w1(l) {
  let e, t, n, i, o;
  const s = [f1, r1], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = s[t](l)), {
    c() {
      e = pt("div"), n && n.c(), ht(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), et(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), et(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), et(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), et(
        e,
        "border",
        /*border*/
        l[12]
      ), Gt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Gt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      Y(f, e, c), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (Co(), vt(r[u], 1, 1, () => {
        r[u] = null;
      }), yo()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), dt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && ht(e, "class", i), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && et(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && et(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && et(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && et(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Gt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Gt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (dt(n), o = !0);
    },
    o(f) {
      vt(n), o = !1;
    },
    d(f) {
      f && X(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var p1 = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        s(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function f(c) {
      c.done ? o(c.value) : i(c.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let Ml = [], Ji = !1;
function v1(l) {
  return p1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ml.push(e), !Ji) Ji = !0;
      else return;
      yield l1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Ml.length; i++) {
          const s = Ml[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Ji = !1, Ml = [];
      });
    }
  });
}
function k1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = o1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: b = "full" } = e, { message: m = null } = e, { progress: w = null } = e, { variant: p = "default" } = e, { loading_text: g = "Loading..." } = e, { absolute: h = !0 } = e, { translucent: v = !1 } = e, { border: S = !1 } = e, { autoscroll: C } = e, y, k = !1, E = 0, z = 0, W = null, A = null, V = 0, P = null, x, ee = null, ce = !0;
  const R = () => {
    t(0, a = t(27, W = t(19, O = null))), t(25, E = performance.now()), t(26, z = 0), k = !0, J();
  };
  function J() {
    requestAnimationFrame(() => {
      t(26, z = (performance.now() - E) / 1e3), k && J();
    });
  }
  function M() {
    t(26, z = 0), t(0, a = t(27, W = t(19, O = null))), k && (k = !1);
  }
  i1(() => {
    k && M();
  });
  let O = null;
  function Z(I) {
    Es[I ? "unshift" : "push"](() => {
      ee = I, t(16, ee), t(7, w), t(14, P), t(15, x);
    });
  }
  const fe = () => {
    s("clear_status");
  };
  function ke(I) {
    Es[I ? "unshift" : "push"](() => {
      y = I, t(13, y);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, b = I.show_progress), "message" in I && t(23, m = I.message), "progress" in I && t(7, w = I.progress), "variant" in I && t(8, p = I.variant), "loading_text" in I && t(9, g = I.loading_text), "absolute" in I && t(10, h = I.absolute), "translucent" in I && t(11, v = I.translucent), "border" in I && t(12, S = I.border), "autoscroll" in I && t(24, C = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - E) / 1e3 + a), t(19, O = A.toFixed(1)), t(27, W = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, V = A === null || A <= 0 || !z ? null : Math.min(z / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && w != null && t(18, ce = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (w != null ? t(14, P = w.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, P = null), P ? (t(15, x = P[P.length - 1]), ee && (x === 0 ? t(16, ee.style.transition = "0", ee) : t(16, ee.style.transition = "150ms", ee))) : t(15, x = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : M()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && _ && (u === "pending" || u === "complete") && v1(y, C), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = z.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    b,
    w,
    p,
    g,
    h,
    v,
    S,
    y,
    P,
    x,
    ee,
    V,
    ce,
    O,
    n,
    s,
    _,
    m,
    C,
    E,
    z,
    W,
    A,
    o,
    i,
    Z,
    fe,
    ke
  ];
}
class y1 extends e1 {
  constructor(e) {
    super(), t1(
      this,
      e,
      k1,
      w1,
      n1,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: F2, getContext: C1 } = window.__gradio__svelte__internal, S1 = "WORKER_PROXY_CONTEXT_KEY";
function zr() {
  return C1(S1);
}
function z1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function qr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Br(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!z1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function q1(l) {
  if (l == null || !Br(l))
    return l;
  const e = zr();
  if (e == null)
    return l;
  const n = new URL(l, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([i.body], {
      type: qr(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: B1,
  assign: $l,
  check_outros: Dr,
  compute_rest_props: Ps,
  create_slot: Ho,
  detach: hi,
  element: Lr,
  empty: Er,
  exclude_internal_props: D1,
  get_all_dirty_from_scope: Xo,
  get_slot_changes: Yo,
  get_spread_update: Mr,
  group_outros: Rr,
  init: L1,
  insert: mi,
  listen: Ar,
  prevent_default: E1,
  safe_not_equal: M1,
  set_attributes: ei,
  transition_in: wn,
  transition_out: pn,
  update_slot_base: Fo
} = window.__gradio__svelte__internal, { createEventDispatcher: R1 } = window.__gradio__svelte__internal;
function A1(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = Ho(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      l[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      l[1]
    ) },
    /*$$restProps*/
    l[6]
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = $l(f, a[c]);
  return {
    c() {
      e = Lr("a"), r && r.c(), ei(e, f);
    },
    m(c, u) {
      mi(c, e, u), r && r.m(e, null), n = !0, i || (o = Ar(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Fo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Yo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Xo(
          /*$$scope*/
          c[7]
        ),
        null
      ), ei(e, f = Mr(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (wn(r, c), n = !0);
    },
    o(c) {
      pn(r, c), n = !1;
    },
    d(c) {
      c && hi(e), r && r.d(c), i = !1, o();
    }
  };
}
function W1(l) {
  let e, t, n, i;
  const o = [T1, I1], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Er();
    },
    m(a, f) {
      s[e].m(a, f), mi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (Rr(), pn(s[c], 1, 1, () => {
        s[c] = null;
      }), Dr(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (wn(t), i = !0);
    },
    o(a) {
      pn(t), i = !1;
    },
    d(a) {
      a && hi(n), s[e].d(a);
    }
  };
}
function I1(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = Ho(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let r = [
    /*$$restProps*/
    l[6],
    { href: (
      /*href*/
      l[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = $l(a, r[f]);
  return {
    c() {
      e = Lr("a"), s && s.c(), ei(e, a);
    },
    m(f, c) {
      mi(f, e, c), s && s.m(e, null), t = !0, n || (i = Ar(e, "click", E1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Fo(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? Yo(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Xo(
          /*$$scope*/
          f[7]
        ),
        null
      ), ei(e, a = Mr(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (wn(s, f), t = !0);
    },
    o(f) {
      pn(s, f), t = !1;
    },
    d(f) {
      f && hi(e), s && s.d(f), n = !1, i();
    }
  };
}
function T1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = Ho(
    t,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && Fo(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Yo(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Xo(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (wn(n, i), e = !0);
    },
    o(i) {
      pn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function H1(l) {
  let e, t, n, i, o;
  const s = [W1, A1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Br(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Er();
    },
    m(f, c) {
      r[t].m(f, c), mi(f, i, c), o = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (Rr(), pn(r[u], 1, 1, () => {
        r[u] = null;
      }), Dr(), n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), wn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (wn(n), o = !0);
    },
    o(f) {
      pn(n), o = !1;
    },
    d(f) {
      f && hi(i), r[t].d(f);
    }
  };
}
function X1(l, e, t) {
  const n = ["href", "download"];
  let i = Ps(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(b, m, w, p) {
    function g(h) {
      return h instanceof w ? h : new w(function(v) {
        v(h);
      });
    }
    return new (w || (w = Promise))(function(h, v) {
      function S(k) {
        try {
          y(p.next(k));
        } catch (E) {
          v(E);
        }
      }
      function C(k) {
        try {
          y(p.throw(k));
        } catch (E) {
          v(E);
        }
      }
      function y(k) {
        k.done ? h(k.value) : g(k.value).then(S, C);
      }
      y((p = p.apply(b, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = R1();
  let u = !1;
  const _ = zr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const m = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: m,
        headers: {},
        query_string: ""
      }).then((w) => {
        if (w.status !== 200)
          throw new Error(`Failed to get file ${m} from the Wasm worker.`);
        const p = new Blob(
          [w.body],
          {
            type: qr(w.headers, "content-type")
          }
        ), g = URL.createObjectURL(p), h = document.createElement("a");
        h.href = g, h.download = f, h.click(), URL.revokeObjectURL(g);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (b) => {
    e = $l($l({}, e), D1(b)), t(6, i = Ps(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, f = b.download), "$$scope" in b && t(7, s = b.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    i,
    s,
    o
  ];
}
class Y1 extends B1 {
  constructor(e) {
    super(), L1(this, e, X1, H1, M1, { href: 0, download: 1 });
  }
}
var F1 = Object.defineProperty, j1 = (l, e, t) => e in l ? F1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, St = (l, e, t) => (j1(l, typeof e != "symbol" ? e + "" : e, t), t), Wr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, tl = (l, e, t) => (Wr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), U1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, O1 = (l, e, t, n) => (Wr(l, e, "write to private field"), e.set(l, t), t), Pt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Ir(l, e) {
  return l.map(
    (t) => new V1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class V1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    St(this, "path"), St(this, "url"), St(this, "orig_name"), St(this, "size"), St(this, "blob"), St(this, "is_stream"), St(this, "mime_type"), St(this, "alt_text"), St(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
let j2 = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = tl(this, Pt) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        O1(this, Pt, t);
      },
      flush: (t) => {
        if (tl(this, Pt) === "")
          return;
        const n = e.allowCR && tl(this, Pt).endsWith("\r") ? tl(this, Pt).slice(0, -1) : tl(this, Pt);
        t.enqueue(n);
      }
    }), U1(this, Pt, "");
  }
};
Pt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: N1,
  append: He,
  attr: fn,
  detach: Tr,
  element: cn,
  init: P1,
  insert: Hr,
  noop: Zs,
  safe_not_equal: Z1,
  set_data: ti,
  set_style: Qi,
  space: zo,
  text: Xn,
  toggle_class: Gs
} = window.__gradio__svelte__internal, { onMount: G1, createEventDispatcher: K1, onDestroy: J1 } = window.__gradio__svelte__internal;
function Ks(l) {
  let e, t, n, i, o = cl(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = cn("div"), t = cn("span"), n = cn("div"), i = cn("progress"), s = Xn(o), a = zo(), f = cn("span"), u = Xn(c), Qi(i, "visibility", "hidden"), Qi(i, "height", "0"), Qi(i, "width", "0"), i.value = r = cl(
        /*file_to_display*/
        l[2]
      ), fn(i, "max", "100"), fn(i, "class", "svelte-cr2edf"), fn(n, "class", "progress-bar svelte-cr2edf"), fn(f, "class", "file-name svelte-cr2edf"), fn(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Hr(_, e, d), He(e, t), He(t, n), He(n, i), He(i, s), He(e, a), He(e, f), He(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = cl(
        /*file_to_display*/
        _[2]
      ) + "") && ti(s, o), d & /*file_to_display*/
      4 && r !== (r = cl(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && ti(u, c);
    },
    d(_) {
      _ && Tr(e);
    }
  };
}
function Q1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && Ks(l)
  );
  return {
    c() {
      e = cn("div"), t = cn("span"), n = Xn("Uploading "), o = Xn(i), s = zo(), a = Xn(r), f = Xn("..."), c = zo(), u && u.c(), fn(t, "class", "uploading svelte-cr2edf"), fn(e, "class", "wrap svelte-cr2edf"), Gs(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Hr(_, e, d), He(e, t), He(t, n), He(t, o), He(t, s), He(t, a), He(t, f), He(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && ti(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ti(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Ks(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Gs(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Zs,
    o: Zs,
    d(_) {
      _ && Tr(e), u && u.d();
    }
  };
}
function cl(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function x1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += cl(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function $1(l, e, t) {
  var n = this && this.__awaiter || function(m, w, p, g) {
    function h(v) {
      return v instanceof p ? v : new p(function(S) {
        S(v);
      });
    }
    return new (p || (p = Promise))(function(v, S) {
      function C(E) {
        try {
          k(g.next(E));
        } catch (z) {
          S(z);
        }
      }
      function y(E) {
        try {
          k(g.throw(E));
        } catch (z) {
          S(z);
        }
      }
      function k(E) {
        E.done ? v(E.value) : h(E.value).then(C, y);
      }
      k((g = g.apply(m, w || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = s.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = K1();
  function b(m, w) {
    t(0, _ = _.map((p) => (p.orig_name === m && (p.progress += w), p)));
  }
  return G1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const w = JSON.parse(m.data);
        f || t(1, f = !0), w.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = w), b(w.orig_name, w.chunk_size));
      });
    };
  })), J1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, o = m.root), "files" in m && t(5, s = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && x1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    i,
    o,
    s,
    r,
    c
  ];
}
class eh extends N1 {
  constructor(e) {
    super(), P1(this, e, $1, Q1, Z1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: th,
  append: Js,
  attr: Ce,
  binding_callbacks: nh,
  bubble: en,
  check_outros: Xr,
  create_component: lh,
  create_slot: Yr,
  destroy_component: ih,
  detach: gi,
  element: qo,
  empty: Fr,
  get_all_dirty_from_scope: jr,
  get_slot_changes: Ur,
  group_outros: Or,
  init: oh,
  insert: bi,
  listen: Oe,
  mount_component: sh,
  prevent_default: tn,
  run_all: ah,
  safe_not_equal: rh,
  set_style: Vr,
  space: fh,
  stop_propagation: nn,
  toggle_class: pe,
  transition_in: Jt,
  transition_out: vn,
  update_slot_base: Nr
} = window.__gradio__svelte__internal, { createEventDispatcher: ch, tick: uh } = window.__gradio__svelte__internal;
function _h(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Yr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = qo("button"), d && d.c(), t = fh(), n = qo("input"), Ce(n, "aria-label", "file upload"), Ce(n, "data-testid", "file-upload"), Ce(n, "type", "file"), Ce(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, Ce(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), Ce(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), Ce(n, "class", "svelte-1s26xmt"), Ce(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), pe(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), pe(
        e,
        "center",
        /*center*/
        l[4]
      ), pe(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), pe(
        e,
        "flex",
        /*flex*/
        l[5]
      ), pe(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Vr(e, "height", "100%");
    },
    m(b, m) {
      bi(b, e, m), d && d.m(e, null), Js(e, t), Js(e, n), l[34](n), f = !0, c || (u = [
        Oe(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Oe(e, "drag", nn(tn(
          /*drag_handler*/
          l[27]
        ))),
        Oe(e, "dragstart", nn(tn(
          /*dragstart_handler*/
          l[28]
        ))),
        Oe(e, "dragend", nn(tn(
          /*dragend_handler*/
          l[29]
        ))),
        Oe(e, "dragover", nn(tn(
          /*dragover_handler*/
          l[30]
        ))),
        Oe(e, "dragenter", nn(tn(
          /*dragenter_handler*/
          l[31]
        ))),
        Oe(e, "dragleave", nn(tn(
          /*dragleave_handler*/
          l[32]
        ))),
        Oe(e, "drop", nn(tn(
          /*drop_handler*/
          l[33]
        ))),
        Oe(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Oe(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Oe(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Oe(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], c = !0);
    },
    p(b, m) {
      d && d.p && (!f || m[0] & /*$$scope*/
      33554432) && Nr(
        d,
        _,
        b,
        /*$$scope*/
        b[25],
        f ? Ur(
          _,
          /*$$scope*/
          b[25],
          m,
          null
        ) : jr(
          /*$$scope*/
          b[25]
        ),
        null
      ), (!f || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      b[16] || void 0)) && Ce(n, "accept", i), (!f || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = o), (!f || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      b[6] === "directory" || void 0)) && Ce(n, "webkitdirectory", s), (!f || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && Ce(n, "mozdirectory", r), (!f || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && Ce(e, "tabindex", a), (!f || m[0] & /*hidden*/
      512) && pe(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!f || m[0] & /*center*/
      16) && pe(
        e,
        "center",
        /*center*/
        b[4]
      ), (!f || m[0] & /*boundedheight*/
      8) && pe(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!f || m[0] & /*flex*/
      32) && pe(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!f || m[0] & /*disable_click*/
      128) && pe(
        e,
        "disable_click",
        /*disable_click*/
        b[7]
      );
    },
    i(b) {
      f || (Jt(d, b), f = !0);
    },
    o(b) {
      vn(d, b), f = !1;
    },
    d(b) {
      b && gi(e), d && d.d(b), l[34](null), c = !1, ah(u);
    }
  };
}
function dh(l) {
  let e, t, n = !/*hidden*/
  l[9] && Qs(l);
  return {
    c() {
      n && n.c(), e = Fr();
    },
    m(i, o) {
      n && n.m(i, o), bi(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Or(), vn(n, 1, 1, () => {
        n = null;
      }), Xr()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && Jt(n, 1)) : (n = Qs(i), n.c(), Jt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Jt(n), t = !0);
    },
    o(i) {
      vn(n), t = !1;
    },
    d(i) {
      i && gi(e), n && n.d(i);
    }
  };
}
function hh(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Yr(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = qo("button"), r && r.c(), Ce(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), pe(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), pe(
        e,
        "center",
        /*center*/
        l[4]
      ), pe(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), pe(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Vr(e, "height", "100%");
    },
    m(a, f) {
      bi(a, e, f), r && r.m(e, null), n = !0, i || (o = Oe(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Nr(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Ur(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : jr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Ce(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && pe(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && pe(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && pe(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && pe(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Jt(r, a), n = !0);
    },
    o(a) {
      vn(r, a), n = !1;
    },
    d(a) {
      a && gi(e), r && r.d(a), i = !1, o();
    }
  };
}
function Qs(l) {
  let e, t;
  return e = new eh({
    props: {
      root: (
        /*root*/
        l[8]
      ),
      upload_id: (
        /*upload_id*/
        l[14]
      ),
      files: (
        /*file_data*/
        l[15]
      ),
      stream_handler: (
        /*stream_handler*/
        l[11]
      )
    }
  }), {
    c() {
      lh(e.$$.fragment);
    },
    m(n, i) {
      sh(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (Jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ih(e, n);
    }
  };
}
function mh(l) {
  let e, t, n, i;
  const o = [hh, dh, _h], s = [];
  function r(a, f) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Fr();
    },
    m(a, f) {
      s[e].m(a, f), bi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (Or(), vn(s[c], 1, 1, () => {
        s[c] = null;
      }), Xr(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Jt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Jt(t), i = !0);
    },
    o(a) {
      vn(t), i = !1;
    },
    d(a) {
      a && gi(n), s[e].d(a);
    }
  };
}
function gh(l, e, t) {
  if (!l || l === "*" || l === "file/*" || Array.isArray(l) && l.some((i) => i === "*" || i === "file/*"))
    return !0;
  let n;
  if (typeof l == "string")
    n = l.split(",").map((i) => i.trim());
  else if (Array.isArray(l))
    n = l;
  else
    return !1;
  return n.includes(e) || n.some((i) => {
    const [o] = i.split("/").map((s) => s.trim());
    return i.endsWith("/*") && t.startsWith(o + "/");
  });
}
function bh(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(L, H, ne, ie) {
    function D(Me) {
      return Me instanceof ne ? Me : new ne(function(it) {
        it(Me);
      });
    }
    return new (ne || (ne = Promise))(function(Me, it) {
      function yt(st) {
        try {
          ot(ie.next(st));
        } catch (xt) {
          it(xt);
        }
      }
      function Fe(st) {
        try {
          ot(ie.throw(st));
        } catch (xt) {
          it(xt);
        }
      }
      function ot(st) {
        st.done ? Me(st.value) : D(st.value).then(yt, Fe);
      }
      ot((ie = ie.apply(L, H || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: b = !1 } = e, { format: m = "file" } = e, { uploading: w = !1 } = e, { hidden_upload: p = null } = e, { show_progress: g = !0 } = e, { max_file_size: h = null } = e, { upload: v } = e, { stream_handler: S } = e, C, y, k;
  const E = ch(), z = ["image", "video", "audio", "text", "file"], W = (L) => L.startsWith(".") || L.endsWith("/*") ? L : z.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function V() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let H = 0; H < L.length; H++) {
        const ne = L[H].types.find((ie) => ie.startsWith("image/"));
        if (ne) {
          L[H].getType(ne).then((ie) => o(this, void 0, void 0, function* () {
            const D = new File([ie], `clipboard.${ne.replace("image/", "")}`);
            yield ee([D]);
          }));
          break;
        }
      }
    }));
  }
  function P() {
    _ || p && (t(2, p.value = "", p), p.click());
  }
  function x(L) {
    return o(this, void 0, void 0, function* () {
      yield uh(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, w = !0);
      try {
        const H = yield v(L, d, C, h ?? 1 / 0);
        return E("load", u === "single" ? H == null ? void 0 : H[0] : H), t(1, w = !1), H || [];
      } catch (H) {
        return E("error", H.message), t(1, w = !1), [];
      }
    });
  }
  function ee(L) {
    return o(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let H = L.map((ne) => new File([ne], ne instanceof File ? ne.name : "file", { type: ne.type }));
      return t(15, y = yield Ir(H)), yield x(y);
    });
  }
  function ce(L) {
    return o(this, void 0, void 0, function* () {
      const H = L.target;
      if (H.files)
        if (m != "blob")
          yield ee(Array.from(H.files));
        else {
          if (u === "single") {
            E("load", H.files[0]);
            return;
          }
          E("load", H.files);
        }
    });
  }
  function R(L) {
    return o(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = L.dataTransfer) === null || H === void 0) && H.files)) return;
      const ne = Array.from(L.dataTransfer.files).filter((ie) => {
        const D = "." + ie.name.split(".").pop();
        return D && gh(k, D, ie.type) || (D && Array.isArray(s) ? s.includes(D) : D === s) ? !0 : (E("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield ee(ne);
    });
  }
  function J(L) {
    en.call(this, l, L);
  }
  function M(L) {
    en.call(this, l, L);
  }
  function O(L) {
    en.call(this, l, L);
  }
  function Z(L) {
    en.call(this, l, L);
  }
  function fe(L) {
    en.call(this, l, L);
  }
  function ke(L) {
    en.call(this, l, L);
  }
  function I(L) {
    en.call(this, l, L);
  }
  function lt(L) {
    nh[L ? "unshift" : "push"](() => {
      p = L, t(2, p);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, b = L.hidden), "format" in L && t(21, m = L.format), "uploading" in L && t(1, w = L.uploading), "hidden_upload" in L && t(2, p = L.hidden_upload), "show_progress" in L && t(10, g = L.show_progress), "max_file_size" in L && t(22, h = L.max_file_size), "upload" in L && t(23, v = L.upload), "stream_handler" in L && t(11, S = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, k = null) : typeof s == "string" ? t(16, k = W(s)) : (t(0, s = s.map(W)), t(16, k = s.join(", "))));
  }, [
    s,
    w,
    p,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    g,
    S,
    V,
    P,
    C,
    y,
    k,
    A,
    ce,
    R,
    r,
    m,
    h,
    v,
    ee,
    i,
    n,
    J,
    M,
    O,
    Z,
    fe,
    ke,
    I,
    lt
  ];
}
class wh extends th {
  constructor(e) {
    super(), oh(
      this,
      e,
      bh,
      mh,
      rh,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: ph,
  append: Rl,
  attr: xi,
  create_component: vh,
  destroy_component: kh,
  detach: yh,
  element: $i,
  init: Ch,
  insert: Sh,
  listen: zh,
  mount_component: qh,
  noop: Bh,
  safe_not_equal: Dh,
  set_style: Lh,
  space: Eh,
  text: Mh,
  transition_in: Rh,
  transition_out: Ah
} = window.__gradio__svelte__internal, { createEventDispatcher: Wh } = window.__gradio__svelte__internal;
function Ih(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, f, c;
  return i = new fr({}), {
    c() {
      e = $i("button"), t = $i("div"), n = $i("span"), vh(i.$$.fragment), o = Eh(), r = Mh(s), xi(n, "class", "icon-wrap svelte-fjcd9c"), xi(t, "class", "wrap svelte-fjcd9c"), xi(e, "class", "svelte-fjcd9c"), Lh(e, "height", "100%");
    },
    m(u, _) {
      Sh(u, e, _), Rl(e, t), Rl(t, n), qh(i, n, null), Rl(t, o), Rl(t, r), a = !0, f || (c = zh(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: Bh,
    i(u) {
      a || (Rh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      Ah(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && yh(e), kh(i), f = !1, c();
    }
  };
}
function Th(l) {
  const e = Wh();
  return [e, () => e("click")];
}
class Hh extends ph {
  constructor(e) {
    super(), Ch(this, e, Th, Ih, Dh, {});
  }
}
function Xh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Yh(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function xs(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (Yh(o, e), o));
}
function Fh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: jh,
  action_destroyer: Uh,
  add_render_callback: Oh,
  append: Et,
  attr: he,
  binding_callbacks: Vh,
  check_outros: dl,
  create_component: Pn,
  create_in_transition: Nh,
  destroy_component: Zn,
  destroy_each: Ph,
  detach: Xe,
  element: Ke,
  empty: jo,
  ensure_array_like: $s,
  group_outros: hl,
  init: Zh,
  insert: Ye,
  listen: ni,
  mount_component: Gn,
  noop: Uo,
  run_all: Gh,
  safe_not_equal: Kh,
  set_data: Pr,
  set_input_value: Bo,
  space: wl,
  stop_propagation: Jh,
  text: Zr,
  toggle_class: Al,
  transition_in: ve,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Qh, onMount: xh } = window.__gradio__svelte__internal;
function ea(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function $h(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = [n0, t0], d = [];
  function b(p, g) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = b(l), i = d[n] = _[n](l);
  let m = !/*recording*/
  l[8] && ta(l), w = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && na(l)
  );
  return {
    c() {
      e = Ke("div"), t = Ke("button"), i.c(), s = wl(), m && m.c(), r = wl(), w && w.c(), a = jo(), he(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), he(t, "class", "svelte-8hqvb6"), he(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, g) {
      Ye(p, e, g), Et(e, t), d[n].m(t, null), Et(e, s), m && m.m(e, null), Ye(p, r, g), w && w.m(p, g), Ye(p, a, g), f = !0, c || (u = ni(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(p, g) {
      let h = n;
      n = b(p), n === h ? d[n].p(p, g) : (hl(), Se(d[h], 1, 1, () => {
        d[h] = null;
      }), dl(), i = d[n], i ? i.p(p, g) : (i = d[n] = _[n](p), i.c()), ve(i, 1), i.m(t, null)), (!f || g[0] & /*mode*/
      2 && o !== (o = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && he(t, "aria-label", o), /*recording*/
      p[8] ? m && (hl(), Se(m, 1, 1, () => {
        m = null;
      }), dl()) : m ? (m.p(p, g), g[0] & /*recording*/
      256 && ve(m, 1)) : (m = ta(p), m.c(), ve(m, 1), m.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? w ? (w.p(p, g), g[0] & /*options_open, selected_device*/
      1152 && ve(w, 1)) : (w = na(p), w.c(), ve(w, 1), w.m(a.parentNode, a)) : w && (hl(), Se(w, 1, 1, () => {
        w = null;
      }), dl());
    },
    i(p) {
      f || (ve(i), ve(m), ve(w), f = !0);
    },
    o(p) {
      Se(i), Se(m), Se(w), f = !1;
    },
    d(p) {
      p && (Xe(e), Xe(r), Xe(a)), d[n].d(), m && m.d(), w && w.d(p), c = !1, u();
    }
  };
}
function e0(l) {
  let e, t, n, i;
  return t = new Hh({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = Ke("div"), Pn(t.$$.fragment), he(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ye(o, e, s), Gn(t, e, null), i = !0;
    },
    p: Uo,
    i(o) {
      i || (ve(t.$$.fragment, o), o && (n || Oh(() => {
        n = Nh(e, Ud, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Xe(e), Zn(t);
    }
  };
}
function t0(l) {
  let e, t, n;
  return t = new zu({}), {
    c() {
      e = Ke("div"), Pn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "title", "capture photo");
    },
    m(i, o) {
      Ye(i, e, o), Gn(t, e, null), n = !0;
    },
    p: Uo,
    i(i) {
      n || (ve(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Xe(e), Zn(t);
    }
  };
}
function n0(l) {
  let e, t, n, i;
  const o = [i0, l0], s = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = jo();
    },
    m(a, f) {
      s[e].m(a, f), Ye(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (hl(), Se(s[c], 1, 1, () => {
        s[c] = null;
      }), dl(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ve(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ve(t), i = !0);
    },
    o(a) {
      Se(t), i = !1;
    },
    d(a) {
      a && Xe(n), s[e].d(a);
    }
  };
}
function l0(l) {
  let e, t, n;
  return t = new Au({}), {
    c() {
      e = Ke("div"), Pn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "start recording");
    },
    m(i, o) {
      Ye(i, e, o), Gn(t, e, null), n = !0;
    },
    i(i) {
      n || (ve(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Xe(e), Zn(t);
    }
  };
}
function i0(l) {
  let e, t, n;
  return t = new O_({}), {
    c() {
      e = Ke("div"), Pn(t.$$.fragment), he(e, "class", "icon red svelte-8hqvb6"), he(e, "title", "stop recording");
    },
    m(i, o) {
      Ye(i, e, o), Gn(t, e, null), n = !0;
    },
    i(i) {
      n || (ve(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Xe(e), Zn(t);
    }
  };
}
function ta(l) {
  let e, t, n, i, o;
  return t = new To({}), {
    c() {
      e = Ke("button"), Pn(t.$$.fragment), he(e, "class", "icon svelte-8hqvb6"), he(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ye(s, e, r), Gn(t, e, null), n = !0, i || (o = ni(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: Uo,
    i(s) {
      n || (ve(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Xe(e), Zn(t), i = !1, o();
    }
  };
}
function na(l) {
  let e, t, n, i, o, s, r;
  n = new To({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? s0 : o0
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = Ke("select"), t = Ke("button"), Pn(n.$$.fragment), i = wl(), c.c(), he(t, "class", "inset-icon svelte-8hqvb6"), he(e, "class", "select-wrap svelte-8hqvb6"), he(e, "aria-label", "select source");
    },
    m(u, _) {
      Ye(u, e, _), Et(e, t), Gn(n, t, null), Et(t, i), c.m(e, null), o = !0, s || (r = [
        ni(t, "click", Jh(
          /*click_handler_2*/
          l[22]
        )),
        Uh(Oo.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        ni(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], s = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      o || (ve(n.$$.fragment, u), o = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Xe(e), Zn(n), c.d(), s = !1, Gh(r);
    }
  };
}
function o0(l) {
  let e, t = $s(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = la(ea(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = jo();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Ye(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = $s(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ea(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = la(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Xe(e), Ph(n, i);
    }
  };
}
function s0(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ke("option"), n = Zr(t), e.__value = "", Bo(e, e.__value), he(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Ye(i, e, o), Et(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Pr(n, t);
    },
    d(i) {
      i && Xe(e);
    }
  };
}
function la(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = Ke("option"), n = Zr(t), i = wl(), e.__value = o = /*device*/
      l[32].deviceId, Bo(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, he(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ye(r, e, a), Et(e, n), Et(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Pr(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Bo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Xe(e);
    }
  };
}
function a0(l) {
  let e, t, n, i, o, s;
  const r = [e0, $h], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), o = a[i] = r[i](l), {
    c() {
      e = Ke("div"), t = Ke("video"), n = wl(), o.c(), he(t, "class", "svelte-8hqvb6"), Al(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), Al(t, "hide", !/*webcam_accessed*/
      l[9]), he(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Ye(c, e, u), Et(e, t), l[19](t), Et(e, n), a[i].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Al(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Al(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (hl(), Se(a[_], 1, 1, () => {
        a[_] = null;
      }), dl(), o = a[i], o ? o.p(c, u) : (o = a[i] = r[i](c), o.c()), ve(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ve(o), s = !0);
    },
    o(c) {
      Se(o), s = !1;
    },
    d(c) {
      c && Xe(e), l[19](null), a[i].d();
    }
  };
}
function Oo(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function r0(l, e, t) {
  var n = this && this.__awaiter || function(R, J, M, O) {
    function Z(fe) {
      return fe instanceof M ? fe : new M(function(ke) {
        ke(fe);
      });
    }
    return new (M || (M = Promise))(function(fe, ke) {
      function I(H) {
        try {
          L(O.next(H));
        } catch (ne) {
          ke(ne);
        }
      }
      function lt(H) {
        try {
          L(O.throw(H));
        } catch (ne) {
          ke(ne);
        }
      }
      function L(H) {
        H.done ? fe(H.value) : Z(H.value).then(I, lt);
      }
      L((O = O.apply(R, J || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: b } = e, { upload: m } = e;
  const w = Qh();
  xh(() => r = document.createElement("canvas"));
  const p = (R) => n(void 0, void 0, void 0, function* () {
    const M = R.target.value;
    yield xs(d, i, M).then((O) => n(void 0, void 0, void 0, function* () {
      C = O, t(7, s = o.find((Z) => Z.deviceId === M) || null), t(10, A = !1);
    }));
  });
  function g() {
    return n(this, void 0, void 0, function* () {
      try {
        xs(d, i).then((R) => n(this, void 0, void 0, function* () {
          t(9, z = !0), t(6, o = yield Xh()), C = R;
        })).then(() => Fh(o)).then((R) => {
          t(6, o = R);
          const J = C.getTracks().map((M) => {
            var O;
            return (O = M.getSettings()) === null || O === void 0 ? void 0 : O.deviceId;
          })[0];
          t(7, s = J && R.find((M) => M.deviceId === J) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && w("error", b("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          w("error", b("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function h() {
    var R = r.getContext("2d");
    (!a || a && v) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, R.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (R.scale(-1, 1), R.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (J) => {
        w(a ? "stream" : "capture", J);
      },
      "image/png",
      0.8
    ));
  }
  let v = !1, S = [], C, y, k;
  function E() {
    if (v) {
      k.stop();
      let R = new Blob(S, { type: y }), J = new FileReader();
      J.onload = function(M) {
        return n(this, void 0, void 0, function* () {
          var O;
          if (M.target) {
            let Z = new File([R], "sample." + y.substring(6));
            const fe = yield Ir([Z]);
            let ke = ((O = yield m(fe, c)) === null || O === void 0 ? void 0 : O.filter(Boolean))[0];
            w("capture", ke), w("stop_recording");
          }
        });
      }, J.readAsDataURL(R);
    } else {
      w("start_recording"), S = [];
      let R = ["video/webm", "video/mp4"];
      for (let J of R)
        if (MediaRecorder.isTypeSupported(J)) {
          y = J;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      k = new MediaRecorder(C, { mimeType: y }), k.addEventListener("dataavailable", function(J) {
        S.push(J.data);
      }), k.start(200);
    }
    t(8, v = !v);
  }
  let z = !1;
  function W() {
    u === "image" && a && t(8, v = !v), u === "image" ? h() : E(), !v && C && (C.getTracks().forEach((R) => R.stop()), t(5, i.srcObject = null, i), t(9, z = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      i && !f && h();
    },
    500
  );
  let A = !1;
  function V(R) {
    R.preventDefault(), R.stopPropagation(), t(10, A = !1);
  }
  function P(R) {
    Vh[R ? "unshift" : "push"](() => {
      i = R, t(5, i);
    });
  }
  const x = async () => g(), ee = () => t(10, A = !0), ce = () => t(10, A = !1);
  return l.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, b = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    u,
    _,
    b,
    Oo,
    i,
    o,
    s,
    v,
    z,
    A,
    p,
    g,
    W,
    V,
    f,
    c,
    d,
    m,
    P,
    x,
    ee,
    ce
  ];
}
class f0 extends jh {
  constructor(e) {
    super(), Zh(
      this,
      e,
      r0,
      a0,
      Kh,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return Oo;
  }
}
const {
  SvelteComponent: c0,
  append: jt,
  attr: T,
  detach: u0,
  init: _0,
  insert: d0,
  noop: eo,
  safe_not_equal: h0,
  set_style: Ut,
  svg_element: zt
} = window.__gradio__svelte__internal;
function m0(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = zt("svg"), t = zt("rect"), n = zt("rect"), i = zt("rect"), o = zt("rect"), s = zt("line"), r = zt("line"), a = zt("line"), f = zt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(i, "x", "2"), T(i, "y", "17"), T(i, "width", "5"), T(i, "height", "5"), T(i, "rx", "1"), T(i, "ry", "1"), T(i, "stroke-width", "2"), T(i, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Ut(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Ut(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Ut(a, "stroke-width", "2px"), T(f, "x1", "19.5"), T(f, "y1", "8"), T(f, "x2", "19.5"), T(f, "y2", "16"), Ut(f, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      d0(c, e, u), jt(e, t), jt(e, n), jt(e, i), jt(e, o), jt(e, s), jt(e, r), jt(e, a), jt(e, f);
    },
    p: eo,
    i: eo,
    o: eo,
    d(c) {
      c && u0(e);
    }
  };
}
class Gr extends c0 {
  constructor(e) {
    super(), _0(this, e, null, m0, h0, {});
  }
}
const {
  SvelteComponent: g0,
  append: b0,
  attr: ut,
  detach: w0,
  init: p0,
  insert: v0,
  noop: to,
  safe_not_equal: k0,
  set_style: Wl,
  svg_element: ia
} = window.__gradio__svelte__internal;
function y0(l) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), ut(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ut(t, "fill", "none"), ut(t, "stroke-width", "2"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), Wl(e, "fill-rule", "evenodd"), Wl(e, "clip-rule", "evenodd"), Wl(e, "stroke-linecap", "round"), Wl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      v0(n, e, i), b0(e, t);
    },
    p: to,
    i: to,
    o: to,
    d(n) {
      n && w0(e);
    }
  };
}
class Kr extends g0 {
  constructor(e) {
    super(), p0(this, e, null, y0, k0, {});
  }
}
const {
  SvelteComponent: C0,
  append: S0,
  attr: _t,
  detach: z0,
  init: q0,
  insert: B0,
  noop: no,
  safe_not_equal: D0,
  set_style: Il,
  svg_element: oa
} = window.__gradio__svelte__internal;
function L0(l) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), _t(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), _t(t, "fill", "none"), _t(t, "stroke-width", "2"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "version", "1.1"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _t(e, "xml:space", "preserve"), _t(e, "stroke", "currentColor"), Il(e, "fill-rule", "evenodd"), Il(e, "clip-rule", "evenodd"), Il(e, "stroke-linecap", "round"), Il(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      B0(n, e, i), S0(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && z0(e);
    }
  };
}
class Jr extends C0 {
  constructor(e) {
    super(), q0(this, e, null, L0, D0, {});
  }
}
const {
  SvelteComponent: E0,
  append: sa,
  attr: qt,
  detach: M0,
  init: R0,
  insert: A0,
  noop: lo,
  safe_not_equal: W0,
  set_style: Tl,
  svg_element: io
} = window.__gradio__svelte__internal;
function I0(l) {
  let e, t, n;
  return {
    c() {
      e = io("svg"), t = io("path"), n = io("path"), qt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), qt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), qt(e, "width", "100%"), qt(e, "height", "100%"), qt(e, "viewBox", "0 0 24 24"), qt(e, "xmlns", "http://www.w3.org/2000/svg"), qt(e, "fill", "none"), qt(e, "stroke", "currentColor"), qt(e, "stroke-width", "2"), Tl(e, "fill-rule", "evenodd"), Tl(e, "clip-rule", "evenodd"), Tl(e, "stroke-linecap", "round"), Tl(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      A0(i, e, o), sa(e, t), sa(e, n);
    },
    p: lo,
    i: lo,
    o: lo,
    d(i) {
      i && M0(e);
    }
  };
}
class Qr extends E0 {
  constructor(e) {
    super(), R0(this, e, null, I0, W0, {});
  }
}
const {
  SvelteComponent: T0,
  append: H0,
  attr: Ot,
  detach: X0,
  init: Y0,
  insert: F0,
  noop: oo,
  safe_not_equal: j0,
  set_style: Hl,
  svg_element: aa
} = window.__gradio__svelte__internal;
function U0(l) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), Ot(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Hl(e, "fill-rule", "evenodd"), Hl(e, "clip-rule", "evenodd"), Hl(e, "stroke-linecap", "round"), Hl(e, "stroke-linejoin", "round"), Ot(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      F0(n, e, i), H0(e, t);
    },
    p: oo,
    i: oo,
    o: oo,
    d(n) {
      n && X0(e);
    }
  };
}
class O0 extends T0 {
  constructor(e) {
    super(), Y0(this, e, null, U0, j0, {});
  }
}
const {
  SvelteComponent: V0,
  append: N0,
  attr: Vt,
  detach: P0,
  init: Z0,
  insert: G0,
  noop: so,
  safe_not_equal: K0,
  set_style: Xl,
  svg_element: ra
} = window.__gradio__svelte__internal;
function J0(l) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), Vt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24"), Vt(e, "fill", "none"), Vt(e, "stroke", "currentColor"), Vt(e, "stroke-width", "2"), Xl(e, "fill-rule", "evenodd"), Xl(e, "clip-rule", "evenodd"), Xl(e, "stroke-linecap", "round"), Xl(e, "stroke-linejoin", "round"), Vt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      G0(n, e, i), N0(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && P0(e);
    }
  };
}
class Q0 extends V0 {
  constructor(e) {
    super(), Z0(this, e, null, J0, K0, {});
  }
}
const {
  SvelteComponent: x0,
  append: fa,
  attr: ao,
  bubble: ca,
  create_component: $0,
  destroy_component: em,
  detach: xr,
  element: ua,
  init: tm,
  insert: $r,
  listen: ro,
  mount_component: nm,
  run_all: lm,
  safe_not_equal: im,
  set_data: om,
  set_input_value: _a,
  space: sm,
  text: am,
  transition_in: rm,
  transition_out: fm
} = window.__gradio__svelte__internal, { createEventDispatcher: cm, afterUpdate: um } = window.__gradio__svelte__internal;
function _m(l) {
  let e;
  return {
    c() {
      e = am(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      $r(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && om(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && xr(e);
    }
  };
}
function dm(l) {
  let e, t, n, i, o, s, r;
  return t = new er({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [_m] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = ua("label"), $0(t.$$.fragment), n = sm(), i = ua("input"), ao(i, "type", "color"), i.disabled = /*disabled*/
      l[3], ao(i, "class", "svelte-16l8u73"), ao(e, "class", "block");
    },
    m(a, f) {
      $r(a, e, f), nm(t, e, null), fa(e, n), fa(e, i), _a(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        ro(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        ro(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        ro(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], s = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!o || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && _a(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (rm(t.$$.fragment, a), o = !0);
    },
    o(a) {
      fm(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && xr(e), em(t), s = !1, lm(r);
    }
  };
}
function hm(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = cm();
  function c() {
    f("change", n), i || f("input");
  }
  um(() => {
    t(5, i = !1);
  });
  function u(b) {
    ca.call(this, l, b);
  }
  function _(b) {
    ca.call(this, l, b);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (b) => {
    "value" in b && t(0, n = b.value), "value_is_output" in b && t(5, i = b.value_is_output), "label" in b && t(1, o = b.label), "info" in b && t(2, s = b.info), "disabled" in b && t(3, r = b.disabled), "show_label" in b && t(4, a = b.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    i,
    u,
    _,
    d
  ];
}
class mm extends x0 {
  constructor(e) {
    super(), tm(this, e, hm, dm, im, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var ef = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, nl = (l, e, t) => (ef(l, e, "read from private field"), t ? t.call(l) : e.get(l)), gm = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, bm = (l, e, t, n) => (ef(l, e, "write to private field"), e.set(l, t), t), Zt;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class O2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = nl(this, Zt) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        bm(this, Zt, t);
      },
      flush: (t) => {
        if (nl(this, Zt) === "")
          return;
        const n = e.allowCR && nl(this, Zt).endsWith("\r") ? nl(this, Zt).slice(0, -1) : nl(this, Zt);
        t.enqueue(n);
      }
    }), gm(this, Zt, "");
  }
}
Zt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: wm,
  append: tf,
  attr: ae,
  bubble: pm,
  check_outros: vm,
  create_slot: nf,
  detach: kl,
  element: wi,
  empty: km,
  get_all_dirty_from_scope: lf,
  get_slot_changes: of,
  group_outros: ym,
  init: Cm,
  insert: yl,
  listen: Sm,
  safe_not_equal: zm,
  set_style: Te,
  space: sf,
  src_url_equal: li,
  toggle_class: Yn,
  transition_in: ii,
  transition_out: oi,
  update_slot_base: af
} = window.__gradio__svelte__internal;
function qm(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && da(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = nf(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = wi("button"), r && r.c(), t = sf(), f && f.c(), ae(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Yn(e, "hidden", !/*visible*/
      l[2]), Te(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Te(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Te(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(c, u) {
      yl(c, e, u), r && r.m(e, null), tf(e, t), f && f.m(e, null), i = !0, o || (s = Sm(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = da(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && af(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? of(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : lf(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!i || u & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && Yn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Te(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Te(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Te(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      i || (ii(f, c), i = !0);
    },
    o(c) {
      oi(f, c), i = !1;
    },
    d(c) {
      c && kl(e), r && r.d(), f && f.d(c), o = !1, s();
    }
  };
}
function Bm(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && ha(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = nf(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = wi("a"), o && o.c(), t = sf(), r && r.c(), ae(
        e,
        "href",
        /*link*/
        l[6]
      ), ae(e, "rel", "noopener noreferrer"), ae(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), ae(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ae(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Yn(e, "hidden", !/*visible*/
      l[2]), Yn(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), Te(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Te(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), Te(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Te(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      yl(a, e, f), o && o.m(e, null), tf(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = ha(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && af(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? of(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : lf(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && ae(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && ae(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ae(e, "class", n), (!i || f & /*elem_id*/
      1) && ae(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Yn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Yn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Te(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Te(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Te(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Te(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (ii(r, a), i = !0);
    },
    o(a) {
      oi(r, a), i = !1;
    },
    d(a) {
      a && kl(e), o && o.d(), r && r.d(a);
    }
  };
}
function da(l) {
  let e, t, n;
  return {
    c() {
      e = wi("img"), ae(e, "class", "button-icon svelte-8huxfn"), li(e.src, t = /*icon*/
      l[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      yl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !li(e.src, t = /*icon*/
      i[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ae(e, "alt", n);
    },
    d(i) {
      i && kl(e);
    }
  };
}
function ha(l) {
  let e, t, n;
  return {
    c() {
      e = wi("img"), ae(e, "class", "button-icon svelte-8huxfn"), li(e.src, t = /*icon*/
      l[7].url) || ae(e, "src", t), ae(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      yl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !li(e.src, t = /*icon*/
      i[7].url) && ae(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ae(e, "alt", n);
    },
    d(i) {
      i && kl(e);
    }
  };
}
function Dm(l) {
  let e, t, n, i;
  const o = [Bm, qm], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = km();
    },
    m(a, f) {
      s[e].m(a, f), yl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (ym(), oi(s[c], 1, 1, () => {
        s[c] = null;
      }), vm(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), ii(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ii(t), i = !0);
    },
    o(a) {
      oi(t), i = !1;
    },
    d(a) {
      a && kl(n), s[e].d(a);
    }
  };
}
function Lm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: b = null } = e, { min_width: m = void 0 } = e;
  function w(p) {
    pm.call(this, l, p);
  }
  return l.$$set = (p) => {
    "elem_id" in p && t(0, o = p.elem_id), "elem_classes" in p && t(1, s = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, f = p.size), "value" in p && t(5, c = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, _ = p.icon), "disabled" in p && t(8, d = p.disabled), "scale" in p && t(9, b = p.scale), "min_width" in p && t(10, m = p.min_width), "$$scope" in p && t(11, i = p.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    m,
    i,
    n,
    w
  ];
}
class Do extends wm {
  constructor(e) {
    super(), Cm(this, e, Lm, Dm, zm, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: Em,
  add_render_callback: rf,
  append: Yl,
  attr: Ne,
  binding_callbacks: ma,
  check_outros: Mm,
  create_bidirectional_transition: ga,
  destroy_each: Rm,
  detach: ml,
  element: si,
  empty: Am,
  ensure_array_like: ba,
  group_outros: Wm,
  init: Im,
  insert: gl,
  listen: Lo,
  prevent_default: Tm,
  run_all: Hm,
  safe_not_equal: Xm,
  set_data: Ym,
  set_style: Rn,
  space: Eo,
  text: Fm,
  toggle_class: bt,
  transition_in: fo,
  transition_out: wa
} = window.__gradio__svelte__internal, { createEventDispatcher: jm } = window.__gradio__svelte__internal;
function pa(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function va(l) {
  let e, t, n, i, o, s = ba(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = ka(pa(l, s, a));
  return {
    c() {
      e = si("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ne(e, "class", "options svelte-yuohum"), Ne(e, "role", "listbox"), Rn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Rn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Rn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      gl(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (o = Lo(e, "mousedown", Tm(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = ba(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = pa(a, s, c);
          r[c] ? r[c].p(u, f) : (r[c] = ka(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && Rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && rf(() => {
        n && (t || (t = ga(e, Ss, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ga(e, Ss, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && ml(e), Rm(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function ka(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = si("li"), t = si("span"), t.textContent = "✓", n = Eo(), o = Fm(i), s = Eo(), Ne(t, "class", "inner-item svelte-yuohum"), bt(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ne(e, "class", "item svelte-yuohum"), Ne(e, "data-index", r = /*index*/
      l[26]), Ne(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ne(e, "data-testid", "dropdown-option"), Ne(e, "role", "option"), Ne(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), bt(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), bt(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), bt(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), bt(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(c, u) {
      gl(c, e, u), Yl(e, t), Yl(e, n), Yl(e, o), Yl(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && bt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Ym(o, i), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ne(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ne(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ne(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && bt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && bt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && bt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && bt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && ml(e);
    }
  };
}
function Um(l) {
  let e, t, n, i, o;
  rf(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && va(l)
  );
  return {
    c() {
      e = si("div"), t = Eo(), s && s.c(), n = Am(), Ne(e, "class", "reference");
    },
    m(r, a) {
      gl(r, e, a), l[20](e), gl(r, t, a), s && s.m(r, a), gl(r, n, a), i || (o = [
        Lo(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        Lo(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && fo(s, 1)) : (s = va(r), s.c(), fo(s, 1), s.m(n.parentNode, n)) : s && (Wm(), wa(s, 1, 1, () => {
        s = null;
      }), Mm());
    },
    i(r) {
      fo(s);
    },
    o(r) {
      wa(s);
    },
    d(r) {
      r && (ml(e), ml(t), ml(n)), l[20](null), s && s.d(r), i = !1, Hm(o);
    }
  };
}
function Om(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, b, m, w, p, g, h;
  function v() {
    const { top: A, bottom: V } = m.getBoundingClientRect();
    t(16, u = A), t(17, _ = h - V);
  }
  let S = null;
  function C() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        v(), S = null;
      },
      10
    ));
  }
  const y = jm();
  function k() {
    t(11, h = window.innerHeight);
  }
  function E(A) {
    ma[A ? "unshift" : "push"](() => {
      m = A, t(6, m);
    });
  }
  const z = (A) => y("change", A);
  function W(A) {
    ma[A ? "unshift" : "push"](() => {
      w = A, t(7, w);
    });
  }
  return l.$$set = (A) => {
    "choices" in A && t(0, o = A.choices), "filtered_indices" in A && t(1, s = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (w && f.length > 0) {
          let V = w.querySelectorAll("li");
          for (const P of Array.from(V))
            if (P.getAttribute("data-index") === f[0].toString()) {
              t(14, n = w == null ? void 0 : w.scrollTo) === null || n === void 0 || n.call(w, 0, P.offsetTop);
              break;
            }
        }
        v();
        const A = t(15, i = m.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, b = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, g = _), t(9, p = null)) : (t(9, p = `${_ + d}px`), t(10, g = u - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    m,
    w,
    b,
    p,
    g,
    h,
    C,
    y,
    n,
    i,
    u,
    _,
    d,
    k,
    E,
    z,
    W
  ];
}
class Vm extends Em {
  constructor(e) {
    super(), Im(this, e, Om, Um, Xm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Nm(l, e) {
  return (l % e + e) % e;
}
function ya(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Pm(l, e, t) {
  l("change", e), t || l("input");
}
function Zm(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Nm(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Gm,
  append: ln,
  attr: Ve,
  binding_callbacks: Km,
  check_outros: Jm,
  create_component: Mo,
  destroy_component: Ro,
  detach: Vo,
  element: In,
  group_outros: Qm,
  init: xm,
  insert: No,
  listen: ll,
  mount_component: Ao,
  run_all: $m,
  safe_not_equal: eg,
  set_data: tg,
  set_input_value: Ca,
  space: co,
  text: ng,
  toggle_class: An,
  transition_in: Tn,
  transition_out: ul
} = window.__gradio__svelte__internal, { onMount: lg } = window.__gradio__svelte__internal, { createEventDispatcher: ig, afterUpdate: og } = window.__gradio__svelte__internal;
function sg(l) {
  let e;
  return {
    c() {
      e = ng(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      No(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && tg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Vo(e);
    }
  };
}
function Sa(l) {
  let e, t, n;
  return t = new To({}), {
    c() {
      e = In("div"), Mo(t.$$.fragment), Ve(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      No(i, e, o), Ao(t, e, null), n = !0;
    },
    i(i) {
      n || (Tn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ul(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Vo(e), Ro(t);
    }
  };
}
function ag(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, b;
  t = new er({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [sg] },
      $$scope: { ctx: l }
    }
  });
  let m = !/*disabled*/
  l[3] && Sa();
  return u = new Vm({
    props: {
      show_options: (
        /*show_options*/
        l[12]
      ),
      choices: (
        /*choices*/
        l[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        l[10]
      ),
      disabled: (
        /*disabled*/
        l[3]
      ),
      selected_indices: (
        /*selected_index*/
        l[11] === null ? [] : [
          /*selected_index*/
          l[11]
        ]
      ),
      active_index: (
        /*active_index*/
        l[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = In("div"), Mo(t.$$.fragment), n = co(), i = In("div"), o = In("div"), s = In("div"), r = In("input"), f = co(), m && m.c(), c = co(), Mo(u.$$.fragment), Ve(r, "role", "listbox"), Ve(r, "aria-controls", "dropdown-options"), Ve(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), Ve(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), Ve(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], Ve(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], An(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), Ve(s, "class", "secondary-wrap svelte-1m1zvyj"), Ve(o, "class", "wrap-inner svelte-1m1zvyj"), An(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), Ve(i, "class", "wrap svelte-1m1zvyj"), Ve(e, "class", "svelte-1m1zvyj"), An(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(w, p) {
      No(w, e, p), Ao(t, e, null), ln(e, n), ln(e, i), ln(i, o), ln(o, s), ln(s, r), Ca(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), ln(s, f), m && m.m(s, null), ln(i, c), Ao(u, i, null), _ = !0, d || (b = [
        ll(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        ll(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        ll(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        ll(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        ll(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(w, p) {
      const g = {};
      p[0] & /*show_label*/
      16 && (g.show_label = /*show_label*/
      w[4]), p[0] & /*info*/
      2 && (g.info = /*info*/
      w[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (g.$$scope = { dirty: p, ctx: w }), t.$set(g), (!_ || p[0] & /*show_options*/
      4096) && Ve(
        r,
        "aria-expanded",
        /*show_options*/
        w[12]
      ), (!_ || p[0] & /*label*/
      1) && Ve(
        r,
        "aria-label",
        /*label*/
        w[0]
      ), (!_ || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      w[3]), (!_ || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      w[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      w[9] && Ca(
        r,
        /*input_text*/
        w[9]
      ), (!_ || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && An(r, "subdued", !/*choices_names*/
      w[13].includes(
        /*input_text*/
        w[9]
      ) && !/*allow_custom_value*/
      w[6]), /*disabled*/
      w[3] ? m && (Qm(), ul(m, 1, 1, () => {
        m = null;
      }), Jm()) : m ? p[0] & /*disabled*/
      8 && Tn(m, 1) : (m = Sa(), m.c(), Tn(m, 1), m.m(s, null)), (!_ || p[0] & /*show_options*/
      4096) && An(
        o,
        "show_options",
        /*show_options*/
        w[12]
      );
      const h = {};
      p[0] & /*show_options*/
      4096 && (h.show_options = /*show_options*/
      w[12]), p[0] & /*choices*/
      4 && (h.choices = /*choices*/
      w[2]), p[0] & /*filtered_indices*/
      1024 && (h.filtered_indices = /*filtered_indices*/
      w[10]), p[0] & /*disabled*/
      8 && (h.disabled = /*disabled*/
      w[3]), p[0] & /*selected_index*/
      2048 && (h.selected_indices = /*selected_index*/
      w[11] === null ? [] : [
        /*selected_index*/
        w[11]
      ]), p[0] & /*active_index*/
      16384 && (h.active_index = /*active_index*/
      w[14]), u.$set(h), (!_ || p[0] & /*container*/
      32) && An(
        e,
        "container",
        /*container*/
        w[5]
      );
    },
    i(w) {
      _ || (Tn(t.$$.fragment, w), Tn(m), Tn(u.$$.fragment, w), _ = !0);
    },
    o(w) {
      ul(t.$$.fragment, w), ul(m), ul(u.$$.fragment, w), _ = !1;
    },
    d(w) {
      w && Vo(e), Ro(t), l[29](null), m && m.d(), Ro(u), d = !1, $m(b);
    }
  };
}
function rg(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: b = !0 } = e, m, w = !1, p, g, h = "", v = "", S = !1, C = [], y = null, k = null, E;
  const z = ig();
  o ? (E = a.map((M) => M[1]).indexOf(o), k = E, k === -1 ? (s = o, k = null) : ([h, s] = a[k], v = h), A()) : a.length > 0 && (E = 0, k = 0, [h, o] = a[k], s = o, v = h);
  function W() {
    t(13, p = a.map((M) => M[0])), t(24, g = a.map((M) => M[1]));
  }
  function A() {
    W(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, h = ""), t(11, k = null)) : g.includes(o) ? (t(9, h = p[g.indexOf(o)]), t(11, k = g.indexOf(o))) : d ? (t(9, h = o), t(11, k = null)) : (t(9, h = ""), t(11, k = null)), t(27, E = k);
  }
  function V(M) {
    if (t(11, k = parseInt(M.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, w = !1), t(14, y = null), m.blur();
  }
  function P(M) {
    t(10, C = a.map((O, Z) => Z)), t(12, w = !0), z("focus");
  }
  function x() {
    d ? t(20, o = h) : t(9, h = p[g.indexOf(o)]), t(12, w = !1), t(14, y = null), z("blur");
  }
  function ee(M) {
    t(12, [w, y] = Zm(M, y, C), w, (t(14, y), t(2, a), t(23, f), t(6, d), t(9, h), t(10, C), t(8, m), t(25, v), t(11, k), t(27, E), t(26, S), t(24, g))), M.key === "Enter" && (y !== null ? (t(11, k = y), t(12, w = !1), m.blur(), t(14, y = null)) : p.includes(h) ? (t(11, k = p.indexOf(h)), t(12, w = !1), t(14, y = null), m.blur()) : d && (t(20, o = h), t(11, k = null), t(12, w = !1), t(14, y = null), m.blur()), z("enter", o));
  }
  og(() => {
    t(21, r = !1), t(26, S = !0);
  }), lg(() => {
    m.focus();
  });
  function ce() {
    h = this.value, t(9, h), t(11, k), t(27, E), t(26, S), t(2, a), t(24, g);
  }
  function R(M) {
    Km[M ? "unshift" : "push"](() => {
      m = M, t(8, m);
    });
  }
  const J = (M) => z("key_up", { key: M.key, input_value: h });
  return l.$$set = (M) => {
    "label" in M && t(0, n = M.label), "info" in M && t(1, i = M.info), "value" in M && t(20, o = M.value), "value_is_output" in M && t(21, r = M.value_is_output), "choices" in M && t(2, a = M.choices), "disabled" in M && t(3, c = M.disabled), "show_label" in M && t(4, u = M.show_label), "container" in M && t(5, _ = M.container), "allow_custom_value" in M && t(6, d = M.allow_custom_value), "filterable" in M && t(7, b = M.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && k !== E && k !== null && S && (t(9, [h, o] = a[k], h, (t(20, o), t(11, k), t(27, E), t(26, S), t(2, a), t(24, g))), t(27, E = k), z("select", {
      index: k,
      value: g[k],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (A(), Pm(z, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && W(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, C = ya(a, h)), !d && C.length > 0 && t(14, y = C[0]), m == document.activeElement && t(12, w = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && h !== v && (t(10, C = ya(a, h)), t(25, v = h), !d && C.length > 0 && t(14, y = C[0]));
  }, [
    n,
    i,
    a,
    c,
    u,
    _,
    d,
    b,
    m,
    h,
    C,
    k,
    w,
    p,
    y,
    z,
    V,
    P,
    x,
    ee,
    o,
    r,
    s,
    f,
    g,
    v,
    S,
    E,
    ce,
    R,
    J
  ];
}
class fg extends Gm {
  constructor(e) {
    super(), xm(
      this,
      e,
      rg,
      ag,
      eg,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: cg,
  append: $e,
  attr: Fn,
  check_outros: Wo,
  create_component: dn,
  destroy_component: hn,
  detach: Kn,
  element: wt,
  group_outros: Io,
  init: ug,
  insert: Jn,
  listen: _g,
  mount_component: mn,
  safe_not_equal: dg,
  set_style: jn,
  space: il,
  text: Po,
  toggle_class: za,
  transition_in: qe,
  transition_out: Pe
} = window.__gradio__svelte__internal, { createEventDispatcher: hg } = window.__gradio__svelte__internal, { onMount: mg, onDestroy: gg } = window.__gradio__svelte__internal;
function qa(l) {
  let e, t, n, i, o, s, r;
  const a = [wg, bg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = wt("div"), t = wt("button"), i.c(), Fn(t, "class", "icon svelte-d9x7u0"), Fn(t, "aria-label", "Lock label detail"), za(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), jn(e, "margin-right", "8px");
    },
    m(u, _) {
      Jn(u, e, _), $e(e, t), f[n].m(t, null), o = !0, s || (r = _g(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), s = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Io(), Pe(f[d], 1, 1, () => {
        f[d] = null;
      }), Wo(), i = f[n], i || (i = f[n] = a[n](u), i.c()), qe(i, 1), i.m(t, null)), (!o || _ & /*labelDetailLock*/
      4) && za(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (qe(i), o = !0);
    },
    o(u) {
      Pe(i), o = !1;
    },
    d(u) {
      u && Kn(e), f[n].d(), s = !1, r();
    }
  };
}
function bg(l) {
  let e, t;
  return e = new Q0({}), {
    c() {
      dn(e.$$.fragment);
    },
    m(n, i) {
      mn(e, n, i), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hn(e, n);
    }
  };
}
function wg(l) {
  let e, t;
  return e = new O0({}), {
    c() {
      dn(e.$$.fragment);
    },
    m(n, i) {
      mn(e, n, i), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hn(e, n);
    }
  };
}
function pg(l) {
  let e;
  return {
    c() {
      e = Po("Cancel");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function Ba(l) {
  let e, t, n;
  return t = new Do({
    props: {
      variant: "stop",
      $$slots: { default: [vg] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = wt("div"), dn(t.$$.fragment), jn(e, "margin-right", "8px");
    },
    m(i, o) {
      Jn(i, e, o), mn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (qe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Pe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Kn(e), hn(t);
    }
  };
}
function vg(l) {
  let e;
  return {
    c() {
      e = Po("Remove");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function kg(l) {
  let e;
  return {
    c() {
      e = Po("OK");
    },
    m(t, n) {
      Jn(t, e, n);
    },
    d(t) {
      t && Kn(e);
    }
  };
}
function yg(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, b, m, w, p, g = !/*showRemove*/
  l[4] && qa(l);
  s = new fg({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    l[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    l[8]
  ), f = new mm({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), f.$on(
    "change",
    /*onColorChange*/
    l[7]
  ), _ = new Do({
    props: {
      $$slots: { default: [pg] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let h = (
    /*showRemove*/
    l[4] && Ba(l)
  );
  return w = new Do({
    props: {
      variant: "primary",
      $$slots: { default: [kg] },
      $$scope: { ctx: l }
    }
  }), w.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = wt("div"), t = wt("div"), n = wt("span"), g && g.c(), i = il(), o = wt("div"), dn(s.$$.fragment), r = il(), a = wt("div"), dn(f.$$.fragment), c = il(), u = wt("div"), dn(_.$$.fragment), d = il(), h && h.c(), b = il(), m = wt("div"), dn(w.$$.fragment), jn(o, "margin-right", "10px"), jn(a, "margin-right", "40px"), jn(a, "margin-bottom", "8px"), jn(u, "margin-right", "8px"), Fn(n, "class", "model-content svelte-d9x7u0"), Fn(t, "class", "modal-container svelte-d9x7u0"), Fn(e, "class", "modal svelte-d9x7u0"), Fn(e, "id", "model-box-edit");
    },
    m(v, S) {
      Jn(v, e, S), $e(e, t), $e(t, n), g && g.m(n, null), $e(n, i), $e(n, o), mn(s, o, null), $e(n, r), $e(n, a), mn(f, a, null), $e(n, c), $e(n, u), mn(_, u, null), $e(n, d), h && h.m(n, null), $e(n, b), $e(n, m), mn(w, m, null), p = !0;
    },
    p(v, [S]) {
      /*showRemove*/
      v[4] ? g && (Io(), Pe(g, 1, 1, () => {
        g = null;
      }), Wo()) : g ? (g.p(v, S), S & /*showRemove*/
      16 && qe(g, 1)) : (g = qa(v), g.c(), qe(g, 1), g.m(n, i));
      const C = {};
      S & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      v[0]), S & /*choices*/
      8 && (C.choices = /*choices*/
      v[3]), s.$set(C);
      const y = {};
      S & /*currentColor*/
      2 && (y.value = /*currentColor*/
      v[1]), f.$set(y);
      const k = {};
      S & /*$$scope*/
      262144 && (k.$$scope = { dirty: S, ctx: v }), _.$set(k), /*showRemove*/
      v[4] ? h ? (h.p(v, S), S & /*showRemove*/
      16 && qe(h, 1)) : (h = Ba(v), h.c(), qe(h, 1), h.m(n, b)) : h && (Io(), Pe(h, 1, 1, () => {
        h = null;
      }), Wo());
      const E = {};
      S & /*$$scope*/
      262144 && (E.$$scope = { dirty: S, ctx: v }), w.$set(E);
    },
    i(v) {
      p || (qe(g), qe(s.$$.fragment, v), qe(f.$$.fragment, v), qe(_.$$.fragment, v), qe(h), qe(w.$$.fragment, v), p = !0);
    },
    o(v) {
      Pe(g), Pe(s.$$.fragment, v), Pe(f.$$.fragment, v), Pe(_.$$.fragment, v), Pe(h), Pe(w.$$.fragment, v), p = !1;
    },
    d(v) {
      v && Kn(e), g && g.d(), hn(s), hn(f), hn(_), h && h.d(), hn(w);
    }
  };
}
function Cg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = hg();
  function _(S) {
    u("change", {
      label: i,
      color: a,
      lock: c,
      ret: S
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(S) {
    const { detail: C } = S;
    let y = C;
    Number.isInteger(y) ? (Array.isArray(s) && y < s.length && t(1, a = s[y]), Array.isArray(o) && y < o.length && t(0, i = o[y][0])) : t(0, i = y);
  }
  function b(S) {
    const { detail: C } = S;
    t(1, a = C);
  }
  function m(S) {
    d(S), _(1);
  }
  function w(S) {
    t(2, c = !c);
  }
  function p(S) {
    switch (S.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  mg(() => {
    document.addEventListener("keydown", p), t(0, i = n), t(1, a = r);
  }), gg(() => {
    document.removeEventListener("keydown", p);
  });
  const g = () => _(0), h = () => _(-1), v = () => _(1);
  return l.$$set = (S) => {
    "label" in S && t(10, n = S.label), "currentLabel" in S && t(0, i = S.currentLabel), "choices" in S && t(3, o = S.choices), "choicesColors" in S && t(11, s = S.choicesColors), "color" in S && t(12, r = S.color), "currentColor" in S && t(1, a = S.currentColor), "showRemove" in S && t(4, f = S.showRemove), "labelDetailLock" in S && t(2, c = S.labelDetailLock);
  }, [
    i,
    a,
    c,
    o,
    f,
    _,
    d,
    b,
    m,
    w,
    n,
    s,
    r,
    g,
    h,
    v
  ];
}
class Zo extends cg {
  constructor(e) {
    super(), ug(this, e, Cg, yg, dg, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
const we = (l, e, t) => Math.min(Math.max(l, e), t);
function uo(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class _o {
  constructor(e, t, n, i, o, s, r, a, f, c, u, _, d = "rgb(255, 255, 255)", b = 0.5, m = "", w = "", p = 25, g = 8, h = 2, v = 4, S = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let y = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = we(y, -this._xmin, E - this._xmax), k = we(k, -this._ymin, z - this._ymax), this._xmin += y, this._ymin += k, this._xmax += y, this._ymax += k, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [y, k] = this.toBoxCoordinates(C.clientX, C.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, k = (k - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), k > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = k, this.creatingAnchorY = "ymin") : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = k : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = k : k < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = k, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = we(this._xmin, 0, y - this.minSize), this._ymin = we(this._ymin, 0, k - this.minSize), this._xmax = we(this._xmax, this.minSize, y), this._ymax = we(this._ymax, this.minSize, k), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > k ? (this._ymin -= this._ymax - k, this._ymax = k) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const y = C.clientX, k = C.clientY, E = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (k - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, A = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += E, this._ymin += z, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += E, this._ymin += z, this._xmax = we(this._xmax, this._xmin + this.minSize, W), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += E, this._ymax += z, this._xmax = we(this._xmax, this._xmin + this.minSize, W), this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 3:
            this._xmin += E, this._ymax += z, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 4:
            this._ymin += z, this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += E, this._xmax = we(this._xmax, this._xmin + this.minSize, W);
            break;
          case 6:
            this._ymax += z, this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 7:
            this._xmin += E, this._xmin = we(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = i, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = S, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = h, this.selectedThickness = v, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = p, this.color = d, this.alpha = b, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.id = m, this.text = w;
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      // Use original image coordinates
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor,
      // Keep scaleFactor as it's part of the data structure
      // ADDED: Include id and text in the JSON output
      id: this.id,
      text: this.text
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = uo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = uo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = uo(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const i = this.resizeHandles[n];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [t, n, i, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - i, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = i, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const on = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], Fl = (l, e, t) => Math.min(Math.max(l, e), t);
class Sg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, i = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Fl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Fl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Fl(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Fl(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += i, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, i = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = i);
  }
}
const {
  SvelteComponent: zg,
  append: ge,
  attr: te,
  binding_callbacks: qg,
  bubble: ho,
  check_outros: Dt,
  create_component: De,
  destroy_component: Le,
  detach: Ze,
  element: ze,
  empty: Bg,
  group_outros: Lt,
  init: Dg,
  insert: Ge,
  is_function: Lg,
  listen: be,
  mount_component: Ee,
  noop: pi,
  run_all: Go,
  safe_not_equal: Eg,
  space: Be,
  toggle_class: Kt,
  transition_in: U,
  transition_out: K
} = window.__gradio__svelte__internal, { onMount: Mg, onDestroy: Rg, createEventDispatcher: Ag } = window.__gradio__svelte__internal;
function Da(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, b, m, w, p;
  n = new Gr({}), s = new Kr({});
  let g = (
    /*showRemoveButton*/
    l[1] && La(l)
  ), h = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[14] && Ea(l);
  return u = new ar({}), b = new sr({}), {
    c() {
      e = ze("span"), t = ze("button"), De(n.$$.fragment), i = Be(), o = ze("button"), De(s.$$.fragment), r = Be(), g && g.c(), a = Be(), h && h.c(), f = Be(), c = ze("button"), De(u.$$.fragment), _ = Be(), d = ze("button"), De(b.$$.fragment), te(t, "class", "icon svelte-3rql59"), te(t, "aria-label", "Create box"), Kt(
        t,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].creation
      ), te(o, "class", "icon svelte-3rql59"), te(o, "aria-label", "Edit boxes"), Kt(
        o,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].drag
      ), te(c, "class", "icon svelte-3rql59"), te(c, "aria-label", "Rotate counterclockwise"), te(d, "class", "icon svelte-3rql59"), te(d, "aria-label", "Rotate clockwise"), te(e, "class", "canvas-control svelte-3rql59");
    },
    m(v, S) {
      Ge(v, e, S), ge(e, t), Ee(n, t, null), ge(e, i), ge(e, o), Ee(s, o, null), ge(e, r), g && g.m(e, null), ge(e, a), h && h.m(e, null), ge(e, f), ge(e, c), Ee(u, c, null), ge(e, _), ge(e, d), Ee(b, d, null), m = !0, w || (p = [
        be(
          t,
          "click",
          /*click_handler*/
          l[37]
        ),
        be(
          o,
          "click",
          /*click_handler_1*/
          l[38]
        ),
        be(
          c,
          "click",
          /*click_handler_4*/
          l[41]
        ),
        be(
          d,
          "click",
          /*click_handler_5*/
          l[42]
        )
      ], w = !0);
    },
    p(v, S) {
      (!m || S[0] & /*mode, Mode*/
      1152) && Kt(
        t,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].creation
      ), (!m || S[0] & /*mode, Mode*/
      1152) && Kt(
        o,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].drag
      ), /*showRemoveButton*/
      v[1] ? g ? (g.p(v, S), S[0] & /*showRemoveButton*/
      2 && U(g, 1)) : (g = La(v), g.c(), U(g, 1), g.m(e, a)) : g && (Lt(), K(g, 1, 1, () => {
        g = null;
      }), Dt()), !/*disableEditBoxes*/
      v[5] && /*labelDetailLock*/
      v[14] ? h ? (h.p(v, S), S[0] & /*disableEditBoxes, labelDetailLock*/
      16416 && U(h, 1)) : (h = Ea(v), h.c(), U(h, 1), h.m(e, f)) : h && (Lt(), K(h, 1, 1, () => {
        h = null;
      }), Dt());
    },
    i(v) {
      m || (U(n.$$.fragment, v), U(s.$$.fragment, v), U(g), U(h), U(u.$$.fragment, v), U(b.$$.fragment, v), m = !0);
    },
    o(v) {
      K(n.$$.fragment, v), K(s.$$.fragment, v), K(g), K(h), K(u.$$.fragment, v), K(b.$$.fragment, v), m = !1;
    },
    d(v) {
      v && Ze(e), Le(n), Le(s), g && g.d(), h && h.d(), Le(u), Le(b), w = !1, Go(p);
    }
  };
}
function La(l) {
  let e, t, n, i, o;
  return t = new Jr({}), {
    c() {
      e = ze("button"), De(t.$$.fragment), te(e, "class", "icon svelte-3rql59"), te(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      Ge(s, e, r), Ee(t, e, null), n = !0, i || (o = be(
        e,
        "click",
        /*click_handler_2*/
        l[39]
      ), i = !0);
    },
    p: pi,
    i(s) {
      n || (U(t.$$.fragment, s), n = !0);
    },
    o(s) {
      K(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ze(e), Le(t), i = !1, o();
    }
  };
}
function Ea(l) {
  let e, t, n, i, o;
  return t = new Qr({}), {
    c() {
      e = ze("button"), De(t.$$.fragment), te(e, "class", "icon svelte-3rql59"), te(e, "aria-label", "Edit label");
    },
    m(s, r) {
      Ge(s, e, r), Ee(t, e, null), n = !0, i || (o = be(
        e,
        "click",
        /*click_handler_3*/
        l[40]
      ), i = !0);
    },
    p: pi,
    i(s) {
      n || (U(t.$$.fragment, s), n = !0);
    },
    o(s) {
      K(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ze(e), Le(t), i = !1, o();
    }
  };
}
function Ma(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, b, m, w, p;
  n = new Gr({}), s = new Kr({});
  let g = (
    /*showRemoveButton*/
    l[1] && Ra(l)
  ), h = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[14] && Aa(l);
  return u = new ar({}), b = new sr({}), {
    c() {
      e = ze("span"), t = ze("button"), De(n.$$.fragment), i = Be(), o = ze("button"), De(s.$$.fragment), r = Be(), g && g.c(), a = Be(), h && h.c(), f = Be(), c = ze("button"), De(u.$$.fragment), _ = Be(), d = ze("button"), De(b.$$.fragment), te(t, "class", "icon svelte-3rql59"), te(t, "aria-label", "Create box"), Kt(
        t,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].creation
      ), te(o, "class", "icon svelte-3rql59"), te(o, "aria-label", "Edit boxes"), Kt(
        o,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].drag
      ), te(c, "class", "icon svelte-3rql59"), te(c, "aria-label", "Rotate counterclockwise"), te(d, "class", "icon svelte-3rql59"), te(d, "aria-label", "Rotate clockwise"), te(e, "class", "canvas-control svelte-3rql59");
    },
    m(v, S) {
      Ge(v, e, S), ge(e, t), Ee(n, t, null), ge(e, i), ge(e, o), Ee(s, o, null), ge(e, r), g && g.m(e, null), ge(e, a), h && h.m(e, null), ge(e, f), ge(e, c), Ee(u, c, null), ge(e, _), ge(e, d), Ee(b, d, null), m = !0, w || (p = [
        be(
          t,
          "click",
          /*click_handler_6*/
          l[44]
        ),
        be(
          o,
          "click",
          /*click_handler_7*/
          l[45]
        ),
        be(
          c,
          "click",
          /*click_handler_10*/
          l[48]
        ),
        be(
          d,
          "click",
          /*click_handler_11*/
          l[49]
        )
      ], w = !0);
    },
    p(v, S) {
      (!m || S[0] & /*mode, Mode*/
      1152) && Kt(
        t,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].creation
      ), (!m || S[0] & /*mode, Mode*/
      1152) && Kt(
        o,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].drag
      ), /*showRemoveButton*/
      v[1] ? g ? (g.p(v, S), S[0] & /*showRemoveButton*/
      2 && U(g, 1)) : (g = Ra(v), g.c(), U(g, 1), g.m(e, a)) : g && (Lt(), K(g, 1, 1, () => {
        g = null;
      }), Dt()), !/*disableEditBoxes*/
      v[5] && /*labelDetailLock*/
      v[14] ? h ? (h.p(v, S), S[0] & /*disableEditBoxes, labelDetailLock*/
      16416 && U(h, 1)) : (h = Aa(v), h.c(), U(h, 1), h.m(e, f)) : h && (Lt(), K(h, 1, 1, () => {
        h = null;
      }), Dt());
    },
    i(v) {
      m || (U(n.$$.fragment, v), U(s.$$.fragment, v), U(g), U(h), U(u.$$.fragment, v), U(b.$$.fragment, v), m = !0);
    },
    o(v) {
      K(n.$$.fragment, v), K(s.$$.fragment, v), K(g), K(h), K(u.$$.fragment, v), K(b.$$.fragment, v), m = !1;
    },
    d(v) {
      v && Ze(e), Le(n), Le(s), g && g.d(), h && h.d(), Le(u), Le(b), w = !1, Go(p);
    }
  };
}
function Ra(l) {
  let e, t, n, i, o;
  return t = new Jr({}), {
    c() {
      e = ze("button"), De(t.$$.fragment), te(e, "class", "icon svelte-3rql59"), te(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      Ge(s, e, r), Ee(t, e, null), n = !0, i || (o = be(
        e,
        "click",
        /*click_handler_8*/
        l[46]
      ), i = !0);
    },
    p: pi,
    i(s) {
      n || (U(t.$$.fragment, s), n = !0);
    },
    o(s) {
      K(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ze(e), Le(t), i = !1, o();
    }
  };
}
function Aa(l) {
  let e, t, n, i, o;
  return t = new Qr({}), {
    c() {
      e = ze("button"), De(t.$$.fragment), te(e, "class", "icon svelte-3rql59"), te(e, "aria-label", "Edit label");
    },
    m(s, r) {
      Ge(s, e, r), Ee(t, e, null), n = !0, i || (o = be(
        e,
        "click",
        /*click_handler_9*/
        l[47]
      ), i = !0);
    },
    p: pi,
    i(s) {
      n || (U(t.$$.fragment, s), n = !0);
    },
    o(s) {
      K(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ze(e), Le(t), i = !1, o();
    }
  };
}
function Wa(l) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? kn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[22]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[50]
  ), {
    c() {
      De(e.$$.fragment);
    },
    m(n, i) {
      Ee(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (o.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (o.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? kn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (U(e.$$.fragment, n), t = !0);
    },
    o(n) {
      K(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Le(e, n);
    }
  };
}
function Ia(l) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? kn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[14]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[23]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[51]
  ), {
    c() {
      De(e.$$.fragment);
    },
    m(n, i) {
      Ee(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (o.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (o.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? kn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      16384 && (o.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(o);
    },
    i(n) {
      t || (U(e.$$.fragment, n), t = !0);
    },
    o(n) {
      K(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Le(e, n);
    }
  };
}
function Ta(l) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[9] >= 0 && /*selectedBox*/
        l[9] < /*value*/
        l[0].boxes.length ? kn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[9]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[14]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    l[24]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    l[52]
  ), {
    c() {
      De(e.$$.fragment);
    },
    m(n, i) {
      Ee(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (o.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (o.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? kn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      16384 && (o.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(o);
    },
    i(n) {
      t || (U(e.$$.fragment, n), t = !0);
    },
    o(n) {
      K(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Le(e, n);
    }
  };
}
function Wg(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _ = (
    /*interactive*/
    l[2] && Da(l)
  ), d = (
    /*interactive*/
    l[2] && Ma(l)
  ), b = (
    /*editModalVisible*/
    l[11] && Wa(l)
  ), m = (
    /*newModalVisible*/
    l[12] && Ia(l)
  ), w = (
    /*editDefaultLabelVisible*/
    l[13] && Ta(l)
  );
  return {
    c() {
      _ && _.c(), e = Be(), t = ze("div"), n = ze("canvas"), i = Be(), d && d.c(), o = Be(), b && b.c(), s = Be(), m && m.c(), r = Be(), w && w.c(), a = Bg(), te(n, "class", "canvas-annotator svelte-3rql59"), te(t, "class", "canvas-container svelte-3rql59"), te(t, "tabindex", "-1");
    },
    m(p, g) {
      _ && _.m(p, g), Ge(p, e, g), Ge(p, t, g), ge(t, n), l[43](n), Ge(p, i, g), d && d.m(p, g), Ge(p, o, g), b && b.m(p, g), Ge(p, s, g), m && m.m(p, g), Ge(p, r, g), w && w.m(p, g), Ge(p, a, g), f = !0, c || (u = [
        be(
          n,
          "pointerdown",
          /*handlePointerDown*/
          l[15]
        ),
        be(
          n,
          "pointerup",
          /*handlePointerUp*/
          l[16]
        ),
        be(n, "pointermove", function() {
          Lg(
            /*handlesCursor*/
            l[6] ? (
              /*handlePointerMove*/
              l[17]
            ) : null
          ) && /*handlesCursor*/
          (l[6] ? (
            /*handlePointerMove*/
            l[17]
          ) : null).apply(this, arguments);
        }),
        be(
          n,
          "dblclick",
          /*handleDoubleClick*/
          l[21]
        ),
        be(
          n,
          "wheel",
          /*handleMouseWheel*/
          l[18]
        ),
        be(
          t,
          "focusin",
          /*handleCanvasFocus*/
          l[27]
        ),
        be(
          t,
          "focusout",
          /*handleCanvasBlur*/
          l[28]
        )
      ], c = !0);
    },
    p(p, g) {
      l = p, /*interactive*/
      l[2] ? _ ? (_.p(l, g), g[0] & /*interactive*/
      4 && U(_, 1)) : (_ = Da(l), _.c(), U(_, 1), _.m(e.parentNode, e)) : _ && (Lt(), K(_, 1, 1, () => {
        _ = null;
      }), Dt()), /*interactive*/
      l[2] ? d ? (d.p(l, g), g[0] & /*interactive*/
      4 && U(d, 1)) : (d = Ma(l), d.c(), U(d, 1), d.m(o.parentNode, o)) : d && (Lt(), K(d, 1, 1, () => {
        d = null;
      }), Dt()), /*editModalVisible*/
      l[11] ? b ? (b.p(l, g), g[0] & /*editModalVisible*/
      2048 && U(b, 1)) : (b = Wa(l), b.c(), U(b, 1), b.m(s.parentNode, s)) : b && (Lt(), K(b, 1, 1, () => {
        b = null;
      }), Dt()), /*newModalVisible*/
      l[12] ? m ? (m.p(l, g), g[0] & /*newModalVisible*/
      4096 && U(m, 1)) : (m = Ia(l), m.c(), U(m, 1), m.m(r.parentNode, r)) : m && (Lt(), K(m, 1, 1, () => {
        m = null;
      }), Dt()), /*editDefaultLabelVisible*/
      l[13] ? w ? (w.p(l, g), g[0] & /*editDefaultLabelVisible*/
      8192 && U(w, 1)) : (w = Ta(l), w.c(), U(w, 1), w.m(a.parentNode, a)) : w && (Lt(), K(w, 1, 1, () => {
        w = null;
      }), Dt());
    },
    i(p) {
      f || (U(_), U(d), U(b), U(m), U(w), f = !0);
    },
    o(p) {
      K(_), K(d), K(b), K(m), K(w), f = !1;
    },
    d(p) {
      p && (Ze(e), Ze(t), Ze(i), Ze(o), Ze(s), Ze(r), Ze(a)), _ && _.d(p), l[43](null), d && d.d(p), b && b.d(p), m && m.d(p), w && w.d(p), c = !1, Go(u);
    }
  };
}
function jl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function kn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function Ig(l, e, t) {
  var n;
  (function(q) {
    q[q.creation = 0] = "creation", q[q.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: b = !1 } = e, { singleBox: m = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: g = !1 } = e;
  w === null && (w = b);
  let h, v, S = null, C = -1, y = n.drag, k = new Sg(Z);
  u !== null && u.boxes.length == 0 && (y = n.creation);
  let E = 0, z = 0, W = 0, A = 0, V = 1, P = 0, x = 0, ee = !1, ce = !1, R = !1, J = g, M = { label: "", color: "" };
  const O = Ag();
  function Z() {
    if (v) {
      if (v.clearRect(0, 0, h.width, h.height), v.save(), v.translate(k.offsetX, k.offsetY), v.scale(k.scale, k.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            v.drawImage(S, 0, 0, P, x);
            break;
          case 1:
            v.translate(P, 0), v.rotate(Math.PI / 2), v.drawImage(S, 0, 0, x, P);
            break;
          case 2:
            v.translate(P, x), v.rotate(Math.PI), v.drawImage(S, 0, 0, P, x);
            break;
          case 3:
            v.translate(0, x), v.rotate(-Math.PI / 2), v.drawImage(S, 0, 0, x, P);
            break;
        }
        v.restore();
      }
      for (const q of u.boxes.slice().reverse())
        q.render(v);
    }
  }
  function fe(q) {
    t(9, C = q), u.boxes.forEach((F) => {
      F.setSelected(!1);
    }), q >= 0 && q < u.boxes.length && u.boxes[q].setSelected(!0), Z();
  }
  function ke(q) {
    console.log("handlePointerDown called. Current mode:", y), o && (q.target instanceof Element && q.target.hasPointerCapture(q.pointerId) && q.target.releasePointerCapture(q.pointerId), y === n.creation ? ie(q) : y === n.drag && I(q));
  }
  function I(q) {
    const F = h.getBoundingClientRect(), j = q.clientX - F.left, N = q.clientY - F.top;
    let oe = !1;
    for (const [se, ue] of u.boxes.entries()) {
      const Ht = ue.indexOfPointInsideHandle(j, N);
      if (Ht >= 0) {
        oe = !0, fe(se), ue.startResize(Ht, q);
        return;
      }
    }
    for (const [se, ue] of u.boxes.entries())
      if (ue.isPointInsideBox(j, N)) {
        oe = !0, fe(se), ue.startDrag(q);
        return;
      }
    m || fe(-1), oe || k.startDrag(q);
  }
  function lt(q) {
    O("change");
  }
  function L(q) {
    if (u === null || y !== n.drag)
      return;
    const F = h.getBoundingClientRect(), j = q.clientX - F.left, N = q.clientY - F.top;
    for (const [oe, se] of u.boxes.entries()) {
      const ue = se.indexOfPointInsideHandle(j, N);
      if (ue >= 0) {
        t(8, h.style.cursor = se.resizeHandles[ue].cursor, h);
        return;
      }
    }
    t(8, h.style.cursor = "default", h);
  }
  function H(q) {
    if (o)
      switch (q.key) {
        case "Delete":
          B();
          break;
      }
  }
  function ne(q) {
    q.preventDefault();
    const F = 1 / (1 + q.deltaY / 1e3 * 0.5), j = parseFloat((k.scale * F).toFixed(2)), N = j < 1 ? 1 : j, oe = h.getBoundingClientRect(), se = q.clientX - oe.left, ue = q.clientY - oe.top, Ht = (se - k.offsetX) / k.scale, $t = (ue - k.offsetY) / k.scale;
    k.offsetX = se - Ht * N, k.offsetY = ue - $t * N, k.scale = N, Z();
  }
  function ie(q) {
    const F = h.getBoundingClientRect(), j = (q.clientX - F.left - k.offsetX) / V / k.scale, N = (q.clientY - F.top - k.offsetY) / V / k.scale;
    console.log("createBox initial x, y:", j, N);
    let oe;
    d.length > 0 ? oe = jl(d[0]) : m ? u.boxes.length > 0 ? oe = u.boxes[0].color : oe = on[0] : oe = on[u.boxes.length % on.length];
    const se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ue = "";
    for (let Cl = 0; Cl < 12; Cl++)
      ue += se.charAt(Math.floor(Math.random() * se.length));
    const Ht = "";
    let $t = new _o(
      Z,
      it,
      k,
      E,
      z,
      W,
      A,
      "",
      j,
      N,
      j,
      N,
      oe,
      s,
      // ADDED: Pass id and text to the Box constructor
      ue,
      Ht,
      r,
      a,
      f,
      c
    );
    $t.startCreating(q, F.left, F.top), m ? t(0, u.boxes = [$t], u) : t(0, u.boxes = [$t, ...u.boxes], u), fe(0), Z(), O("change"), console.log("new box:", u.boxes);
  }
  function D() {
    t(10, y = n.creation), t(8, h.style.cursor = "crosshair", h);
  }
  function Me() {
    t(10, y = n.drag), t(8, h.style.cursor = "default", h);
  }
  function it() {
    C >= 0 && C < u.boxes.length && (u.boxes[C].getArea() < 1 ? B() : (b || (J ? vi() : t(12, ce = !0)), m && Me()));
  }
  function yt() {
    C >= 0 && C < u.boxes.length && !b && t(11, ee = !0);
  }
  function Fe(q) {
    o && yt();
  }
  function ot(q) {
    t(11, ee = !1);
    const { detail: F } = q;
    let j = F.label, N = F.color, oe = F.ret;
    if (C >= 0 && C < u.boxes.length) {
      let se = u.boxes[C];
      oe == 1 ? (se.label = j, se.color = jl(N), Z(), O("change")) : oe == -1 && B();
    }
  }
  function st(q) {
    t(12, ce = !1);
    const { detail: F } = q;
    let j = F.label, N = F.color, oe = F.ret, se = F.lock;
    if (C >= 0 && C < u.boxes.length) {
      let ue = u.boxes[C];
      oe == 1 ? (t(14, J = se), M.label = j, M.color = N, ue.label = j, ue.color = jl(N), Z(), O("change")) : B();
    }
  }
  function xt(q) {
    t(13, R = !1);
    const { detail: F } = q;
    let j = F.label, N = F.color, oe = F.ret, se = F.lock;
    oe == 1 && (t(14, J = se), M.label = j, M.color = N);
  }
  function vi() {
    if (C >= 0 && C < u.boxes.length) {
      let q = u.boxes[C];
      q.label = M.label, M.color !== "" && (q.color = jl(M.color)), Z(), O("change");
    }
  }
  function B() {
    C >= 0 && C < u.boxes.length && (u.boxes.splice(C, 1), fe(-1), m && D(), O("change"));
  }
  function Je(q) {
    t(0, u.orientation = ((u.orientation + q) % 4 + 4) % 4, u), k.orientation = u.orientation, je();
    for (const F of u.boxes)
      F.onRotate(q);
    Z();
  }
  function je() {
    if (h) {
      if (V = 1, t(8, h.width = h.clientWidth, h), k.setRotatedImage(S), S !== null) {
        if (k.imageRotatedWidth > h.width)
          V = h.width / k.imageRotatedWidth, P = Math.round(k.imageRotatedWidth * V), x = Math.round(k.imageRotatedHeight * V), E = 0, z = 0, W = P, A = x, t(8, h.height = x, h);
        else {
          P = k.imageRotatedWidth, x = k.imageRotatedHeight;
          var q = (h.width - P) / 2;
          E = q, z = 0, W = q + P, A = x, t(8, h.height = x, h);
        }
        k.imageWidth = P, k.imageHeight = x;
      } else
        E = 0, z = 0, W = h.width, A = h.height, t(8, h.height = h.clientHeight, h);
      if (k.resize(h.width, h.height, E, z), W > 0 && A > 0)
        for (const F of u.boxes)
          F.canvasXmin = E, F.canvasYmin = z, F.canvasXmax = W, F.canvasYmax = A, F.setScaleFactor(V);
      Z(), O("change");
    }
  }
  const zn = new ResizeObserver(je);
  function ki() {
    if (u === null || !Array.isArray(u.boxes)) {
      u !== null && t(0, u.boxes = [], u);
      return;
    }
    const q = [];
    for (let F = 0; F < u.boxes.length; F++) {
      let j = u.boxes[F];
      if (j instanceof _o) {
        let N = j;
        N.canvasXmin = E, N.canvasYmin = z, N.canvasXmax = W, N.canvasYmax = A, N.setScaleFactor(k.scale), q.push(N);
      } else if (j && typeof j == "object") {
        let N = "", oe = "", se = "", ue = "";
        if (j.hasOwnProperty("color") ? (N = j.color, Array.isArray(N) && N.length === 3 && (N = `rgb(${N[0]}, ${N[1]}, ${N[2]})`)) : N = on[F % on.length], j.hasOwnProperty("label") && (oe = j.label), j.hasOwnProperty("id"))
          se = j.id;
        else {
          const Ko = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let Jo = "";
          for (let Qo = 0; Qo < 12; Qo++)
            Jo += Ko.charAt(Math.floor(Math.random() * Ko.length));
          se = Jo;
        }
        j.hasOwnProperty("text") && (ue = j.text);
        const Ht = j.hasOwnProperty("xmin") ? j.xmin : 0, $t = j.hasOwnProperty("ymin") ? j.ymin : 0, Cl = j.hasOwnProperty("xmax") ? j.xmax : 0, qf = j.hasOwnProperty("ymax") ? j.ymax : 0, Bf = j.hasOwnProperty("scaleFactor") ? j.scaleFactor : 1;
        let Si = new _o(Z, it, k, E, z, W, A, oe, Ht, $t, Cl, qf, N, s, se, ue, r, a, f, c);
        Si.setScaleFactor(Bf), Si.applyUserScale(), q.push(Si);
      } else
        console.error("Invalid box data format encountered:", j);
    }
    u !== null && t(0, u.boxes = q, u);
  }
  function Tt() {
    i !== null && (S === null || S.src != i) && (S = new Image(), S.src = i, S.onload = function() {
      je(), Z();
    });
  }
  Mg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let q = 0; q < _.length; q++) {
          let F = on[q % on.length];
          d.push(kn(F));
        }
      M.label = _[0][0], M.color = d[0];
    }
    v = h.getContext("2d"), zn.observe(h), C < 0 && u !== null && u.boxes.length > 0 && fe(0), Tt(), je(), Z();
  });
  function qn() {
    document.addEventListener("keydown", H);
  }
  function yi() {
    document.removeEventListener("keydown", H);
  }
  Rg(() => {
    document.removeEventListener("keydown", H);
  });
  const Ci = () => D(), Qn = () => Me(), Ct = () => B(), xn = () => t(13, R = !0), hf = () => Je(-1), mf = () => Je(1);
  function gf(q) {
    qg[q ? "unshift" : "push"](() => {
      h = q, t(8, h);
    });
  }
  const bf = () => D(), wf = () => Me(), pf = () => B(), vf = () => t(13, R = !0), kf = () => Je(-1), yf = () => Je(1);
  function Cf(q) {
    ho.call(this, l, q);
  }
  function Sf(q) {
    ho.call(this, l, q);
  }
  function zf(q) {
    ho.call(this, l, q);
  }
  return l.$$set = (q) => {
    "imageUrl" in q && t(29, i = q.imageUrl), "interactive" in q && t(2, o = q.interactive), "boxAlpha" in q && t(30, s = q.boxAlpha), "boxMinSize" in q && t(31, r = q.boxMinSize), "handleSize" in q && t(32, a = q.handleSize), "boxThickness" in q && t(33, f = q.boxThickness), "boxSelectedThickness" in q && t(34, c = q.boxSelectedThickness), "value" in q && t(0, u = q.value), "choices" in q && t(3, _ = q.choices), "choicesColors" in q && t(4, d = q.choicesColors), "disableEditBoxes" in q && t(5, b = q.disableEditBoxes), "singleBox" in q && t(35, m = q.singleBox), "showRemoveButton" in q && t(1, w = q.showRemoveButton), "handlesCursor" in q && t(6, p = q.handlesCursor), "useDefaultLabel" in q && t(36, g = q.useDefaultLabel);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Tt(), ki(), je(), Z());
  }, [
    u,
    w,
    o,
    _,
    d,
    b,
    p,
    n,
    h,
    C,
    y,
    ee,
    ce,
    R,
    J,
    ke,
    lt,
    L,
    ne,
    D,
    Me,
    Fe,
    ot,
    st,
    xt,
    B,
    Je,
    qn,
    yi,
    i,
    s,
    r,
    a,
    f,
    c,
    m,
    g,
    Ci,
    Qn,
    Ct,
    xn,
    hf,
    mf,
    gf,
    bf,
    wf,
    pf,
    vf,
    kf,
    yf,
    Cf,
    Sf,
    zf
  ];
}
class Tg extends zg {
  constructor(e) {
    super(), Dg(
      this,
      e,
      Ig,
      Wg,
      Eg,
      {
        imageUrl: 29,
        interactive: 2,
        boxAlpha: 30,
        boxMinSize: 31,
        handleSize: 32,
        boxThickness: 33,
        boxSelectedThickness: 34,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        singleBox: 35,
        showRemoveButton: 1,
        handlesCursor: 6,
        useDefaultLabel: 36
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Hg,
  add_flush_callback: Xg,
  bind: Yg,
  binding_callbacks: Fg,
  create_component: jg,
  destroy_component: Ug,
  init: Og,
  mount_component: Vg,
  safe_not_equal: Ng,
  transition_in: Pg,
  transition_out: Zg
} = window.__gradio__svelte__internal, { createEventDispatcher: Gg } = window.__gradio__svelte__internal;
function Kg(l) {
  let e, t, n;
  function i(s) {
    l[18](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      l[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      l[2]
    ),
    choices: (
      /*labelList*/
      l[3]
    ),
    choicesColors: (
      /*labelColors*/
      l[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[5]
    ),
    handleSize: (
      /*handleSize*/
      l[6]
    ),
    boxThickness: (
      /*boxThickness*/
      l[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[8]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[9]
    ),
    singleBox: (
      /*singleBox*/
      l[10]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[11]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[12]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[13]
    ),
    imageUrl: (
      /*resolved_src*/
      l[14]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new Tg({ props: o }), Fg.push(() => Yg(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[19]
    ), {
      c() {
        jg(e.$$.fragment);
      },
      m(s, r) {
        Vg(e, s, r), n = !0;
      },
      p(s, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        s[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        s[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        s[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        s[4]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        256 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[8]), r & /*disableEditBoxes*/
        512 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[9]), r & /*singleBox*/
        1024 && (a.singleBox = /*singleBox*/
        s[10]), r & /*showRemoveButton*/
        2048 && (a.showRemoveButton = /*showRemoveButton*/
        s[11]), r & /*handlesCursor*/
        4096 && (a.handlesCursor = /*handlesCursor*/
        s[12]), r & /*useDefaultLabel*/
        8192 && (a.useDefaultLabel = /*useDefaultLabel*/
        s[13]), r & /*resolved_src*/
        16384 && (a.imageUrl = /*resolved_src*/
        s[14]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], Xg(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Pg(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Zg(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Ug(e, s);
      }
    }
  );
}
function Jg(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: b } = e, { showRemoveButton: m } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, g, h;
  const v = Gg();
  function S(y) {
    _ = y, t(0, _);
  }
  const C = () => v("change");
  return l.$$set = (y) => {
    "src" in y && t(16, n = y.src), "interactive" in y && t(1, i = y.interactive), "boxesAlpha" in y && t(2, o = y.boxesAlpha), "labelList" in y && t(3, s = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, f = y.handleSize), "boxThickness" in y && t(7, c = y.boxThickness), "boxSelectedThickness" in y && t(8, u = y.boxSelectedThickness), "value" in y && t(0, _ = y.value), "disableEditBoxes" in y && t(9, d = y.disableEditBoxes), "singleBox" in y && t(10, b = y.singleBox), "showRemoveButton" in y && t(11, m = y.showRemoveButton), "handlesCursor" in y && t(12, w = y.handlesCursor), "useDefaultLabel" in y && t(13, p = y.useDefaultLabel);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    196608) {
      t(14, g = n), t(17, h = n);
      const y = n;
      q1(y).then((k) => {
        h === y && t(14, g = k);
      });
    }
  }, [
    _,
    i,
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    d,
    b,
    m,
    w,
    p,
    g,
    v,
    n,
    h,
    S,
    C
  ];
}
class Qg extends Hg {
  constructor(e) {
    super(), Og(this, e, Jg, Kg, Ng, {
      src: 16,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      boxSelectedThickness: 8,
      value: 0,
      disableEditBoxes: 9,
      singleBox: 10,
      showRemoveButton: 11,
      handlesCursor: 12,
      useDefaultLabel: 13
    });
  }
}
class Ha {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: xg,
  add_flush_callback: ai,
  append: Wn,
  attr: _l,
  bind: ri,
  binding_callbacks: pl,
  bubble: ol,
  check_outros: an,
  create_component: Mt,
  create_slot: $g,
  destroy_component: Rt,
  detach: gn,
  element: bl,
  empty: e2,
  get_all_dirty_from_scope: t2,
  get_slot_changes: n2,
  group_outros: rn,
  init: l2,
  insert: bn,
  mount_component: At,
  noop: i2,
  safe_not_equal: o2,
  space: sn,
  toggle_class: Xa,
  transition_in: $,
  transition_out: le,
  update_slot_base: s2
} = window.__gradio__svelte__internal, { createEventDispatcher: a2, tick: r2 } = window.__gradio__svelte__internal;
function Ya(l) {
  let e, t;
  return e = new Y1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [f2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      1048576 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function f2(l) {
  let e, t;
  return e = new fi({
    props: {
      Icon: t_,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Fa(l) {
  let e, t;
  return e = new yd({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[36]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[37]
  ), e.$on(
    "error",
    /*error_handler*/
    l[38]
  ), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function ja(l) {
  let e, t, n;
  return t = new fi({
    props: { Icon: lr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[34]
  ), {
    c() {
      e = bl("div"), Mt(t.$$.fragment);
    },
    m(i, o) {
      bn(i, e, o), At(t, e, null), n = !0;
    },
    p: i2,
    i(i) {
      n || ($(t.$$.fragment, i), n = !0);
    },
    o(i) {
      le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && gn(e), Rt(t);
    }
  };
}
function Ua(l) {
  let e;
  const t = (
    /*#slots*/
    l[35].default
  ), n = $g(
    t,
    l,
    /*$$scope*/
    l[51],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      1048576) && s2(
        n,
        t,
        i,
        /*$$scope*/
        i[51],
        e ? n2(
          t,
          /*$$scope*/
          i[51],
          o,
          null
        ) : t2(
          /*$$scope*/
          i[51]
        ),
        null
      );
    },
    i(i) {
      e || ($(n, i), e = !0);
    },
    o(i) {
      le(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function c2(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Ua(l)
  );
  return {
    c() {
      n && n.c(), e = e2();
    },
    m(i, o) {
      n && n.m(i, o), bn(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && $(n, 1)) : (n = Ua(i), n.c(), $(n, 1), n.m(e.parentNode, e)) : n && (rn(), le(n, 1, 1, () => {
        n = null;
      }), an());
    },
    i(i) {
      t || ($(n), t = !0);
    },
    o(i) {
      le(n), t = !1;
    },
    d(i) {
      i && gn(e), n && n.d(i);
    }
  };
}
function Oa(l) {
  let e, t;
  return e = new f0({
    props: {
      root: (
        /*root*/
        l[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        l[8]
      ),
      upload: (
        /*upload*/
        l[29]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[43]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[44]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[45]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[46]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[47]
  ), {
    c() {
      Mt(e.$$.fragment);
    },
    m(n, i) {
      At(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*upload*/
      536870912 && (o.upload = /*upload*/
      n[29]), e.$set(o);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Va(l) {
  let e, t, n, i;
  function o(r) {
    l[48](r);
  }
  let s = {
    boxesAlpha: (
      /*boxesAlpha*/
      l[12]
    ),
    labelList: (
      /*labelList*/
      l[13]
    ),
    labelColors: (
      /*labelColors*/
      l[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[15]
    ),
    interactive: (
      /*interactive*/
      l[7]
    ),
    handleSize: (
      /*handleSize*/
      l[16]
    ),
    boxThickness: (
      /*boxThickness*/
      l[17]
    ),
    singleBox: (
      /*singleBox*/
      l[19]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[18]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[20]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[21]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[22]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[26]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new Qg({ props: s }), pl.push(() => ri(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[49]
    ), {
      c() {
        e = bl("div"), Mt(t.$$.fragment), _l(e, "class", "image-frame svelte-1gjdske"), Xa(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        bn(r, e, a), At(t, e, null), i = !0;
      },
      p(r, a) {
        const f = {};
        a[0] & /*boxesAlpha*/
        4096 && (f.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (f.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (f.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (f.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (f.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (f.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        131072 && (f.boxThickness = /*boxThickness*/
        r[17]), a[0] & /*singleBox*/
        524288 && (f.singleBox = /*singleBox*/
        r[19]), a[0] & /*disableEditBoxes*/
        262144 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[18]), a[0] & /*showRemoveButton*/
        1048576 && (f.showRemoveButton = /*showRemoveButton*/
        r[20]), a[0] & /*handlesCursor*/
        2097152 && (f.handlesCursor = /*handlesCursor*/
        r[21]), a[0] & /*boxSelectedThickness*/
        4194304 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[22]), a[0] & /*useDefaultLabel*/
        67108864 && (f.useDefaultLabel = /*useDefaultLabel*/
        r[26]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], ai(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && Xa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || ($(t.$$.fragment, r), i = !0);
      },
      o(r) {
        le(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && gn(e), Rt(t);
      }
    }
  );
}
function Na(l) {
  let e, t, n;
  function i(s) {
    l[50](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*clear*/
      l[34]
    ),
    handle_select: (
      /*handle_select_source*/
      l[33]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new Xd({ props: o }), pl.push(() => ri(e, "active_source", i)), {
      c() {
        Mt(e.$$.fragment);
      },
      m(s, r) {
        At(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], ai(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || ($(e.$$.fragment, s), n = !0);
      },
      o(s) {
        le(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Rt(e, s);
      }
    }
  );
}
function u2(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, b, m = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), w;
  e = new jc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: ir,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Ya(l)
  ), g = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Fa(l)
  ), h = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && ja(l)
  );
  function v(z) {
    l[40](z);
  }
  function S(z) {
    l[41](z);
  }
  let C = {
    hidden: (
      /*value*/
      l[1] !== null || /*active_source*/
      l[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      l[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      l[6]
    ),
    max_file_size: (
      /*max_file_size*/
      l[23]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[24]
    ),
    stream_handler: (
      /*stream_handler*/
      l[25]
    ),
    $$slots: { default: [c2] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[27] !== void 0 && (C.uploading = /*uploading*/
  l[27]), /*dragging*/
  l[28] !== void 0 && (C.dragging = /*dragging*/
  l[28]), f = new wh({ props: C }), l[39](f), pl.push(() => ri(f, "uploading", v)), pl.push(() => ri(f, "dragging", S)), f.$on(
    "load",
    /*handle_upload*/
    l[30]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[42]
  );
  let y = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Oa(l)
  ), k = (
    /*value*/
    l[1] !== null && Va(l)
  ), E = m && Na(l);
  return {
    c() {
      Mt(e.$$.fragment), t = sn(), n = bl("div"), p && p.c(), i = sn(), g && g.c(), o = sn(), h && h.c(), s = sn(), r = bl("div"), a = bl("div"), Mt(f.$$.fragment), _ = sn(), y && y.c(), d = sn(), k && k.c(), b = sn(), E && E.c(), _l(n, "class", "icon-buttons svelte-1gjdske"), _l(a, "class", "upload-container svelte-1gjdske"), _l(r, "data-testid", "image"), _l(r, "class", "image-container svelte-1gjdske");
    },
    m(z, W) {
      At(e, z, W), bn(z, t, W), bn(z, n, W), p && p.m(n, null), Wn(n, i), g && g.m(n, null), Wn(n, o), h && h.m(n, null), bn(z, s, W), bn(z, r, W), Wn(r, a), At(f, a, null), Wn(a, _), y && y.m(a, null), Wn(a, d), k && k.m(a, null), Wn(r, b), E && E.m(r, null), w = !0;
    },
    p(z, W) {
      const A = {};
      W[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      z[3]), W[0] & /*label*/
      4 && (A.label = /*label*/
      z[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      z[10] && /*value*/
      z[1] !== null ? p ? (p.p(z, W), W[0] & /*showDownloadButton, value*/
      1026 && $(p, 1)) : (p = Ya(z), p.c(), $(p, 1), p.m(n, i)) : p && (rn(), le(p, 1, 1, () => {
        p = null;
      }), an()), /*showShareButton*/
      z[9] && /*value*/
      z[1] !== null ? g ? (g.p(z, W), W[0] & /*showShareButton, value*/
      514 && $(g, 1)) : (g = Fa(z), g.c(), $(g, 1), g.m(n, o)) : g && (rn(), le(g, 1, 1, () => {
        g = null;
      }), an()), /*showClearButton*/
      z[11] && /*value*/
      z[1] !== null && /*interactive*/
      z[7] ? h ? (h.p(z, W), W[0] & /*showClearButton, value, interactive*/
      2178 && $(h, 1)) : (h = ja(z), h.c(), $(h, 1), h.m(n, null)) : h && (rn(), le(h, 1, 1, () => {
        h = null;
      }), an());
      const V = {};
      W[0] & /*value, active_source*/
      3 && (V.hidden = /*value*/
      z[1] !== null || /*active_source*/
      z[0] === "webcam"), W[0] & /*active_source*/
      1 && (V.filetype = /*active_source*/
      z[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (V.root = /*root*/
      z[6]), W[0] & /*max_file_size*/
      8388608 && (V.max_file_size = /*max_file_size*/
      z[23]), W[0] & /*sources*/
      16 && (V.disable_click = !/*sources*/
      z[4].includes("upload")), W[0] & /*cli_upload*/
      16777216 && (V.upload = /*cli_upload*/
      z[24]), W[0] & /*stream_handler*/
      33554432 && (V.stream_handler = /*stream_handler*/
      z[25]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      1048576 && (V.$$scope = { dirty: W, ctx: z }), !c && W[0] & /*uploading*/
      134217728 && (c = !0, V.uploading = /*uploading*/
      z[27], ai(() => c = !1)), !u && W[0] & /*dragging*/
      268435456 && (u = !0, V.dragging = /*dragging*/
      z[28], ai(() => u = !1)), f.$set(V), /*value*/
      z[1] === null && /*active_source*/
      z[0] === "webcam" ? y ? (y.p(z, W), W[0] & /*value, active_source*/
      3 && $(y, 1)) : (y = Oa(z), y.c(), $(y, 1), y.m(a, d)) : y && (rn(), le(y, 1, 1, () => {
        y = null;
      }), an()), /*value*/
      z[1] !== null ? k ? (k.p(z, W), W[0] & /*value*/
      2 && $(k, 1)) : (k = Va(z), k.c(), $(k, 1), k.m(a, null)) : k && (rn(), le(k, 1, 1, () => {
        k = null;
      }), an()), W[0] & /*sources, value, interactive*/
      146 && (m = /*sources*/
      (z[4].length > 1 || /*sources*/
      z[4].includes("clipboard")) && /*value*/
      z[1] === null && /*interactive*/
      z[7]), m ? E ? (E.p(z, W), W[0] & /*sources, value, interactive*/
      146 && $(E, 1)) : (E = Na(z), E.c(), $(E, 1), E.m(r, null)) : E && (rn(), le(E, 1, 1, () => {
        E = null;
      }), an());
    },
    i(z) {
      w || ($(e.$$.fragment, z), $(p), $(g), $(h), $(f.$$.fragment, z), $(y), $(k), $(E), w = !0);
    },
    o(z) {
      le(e.$$.fragment, z), le(p), le(g), le(h), le(f.$$.fragment, z), le(y), le(k), le(E), w = !1;
    },
    d(z) {
      z && (gn(t), gn(n), gn(s), gn(r)), Rt(e, z), p && p.d(), g && g.d(), h && h.d(), l[39](null), Rt(f), y && y.d(), k && k.d(), E && E.d();
    }
  };
}
function _2(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, Je, je, zn) {
    function ki(Tt) {
      return Tt instanceof je ? Tt : new je(function(qn) {
        qn(Tt);
      });
    }
    return new (je || (je = Promise))(function(Tt, qn) {
      function yi(Ct) {
        try {
          Qn(zn.next(Ct));
        } catch (xn) {
          qn(xn);
        }
      }
      function Ci(Ct) {
        try {
          Qn(zn.throw(Ct));
        } catch (xn) {
          qn(xn);
        }
      }
      function Qn(Ct) {
        Ct.done ? Tt(Ct.value) : ki(Ct.value).then(yi, Ci);
      }
      Qn((zn = zn.apply(B, Je || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: b } = e, { showDownloadButton: m } = e, { showClearButton: w } = e, { boxesAlpha: p } = e, { labelList: g } = e, { labelColors: h } = e, { boxMinSize: v } = e, { handleSize: S } = e, { boxThickness: C } = e, { disableEditBoxes: y } = e, { singleBox: k } = e, { showRemoveButton: E } = e, { handlesCursor: z } = e, { boxSelectedThickness: W } = e, { max_file_size: A = null } = e, { cli_upload: V } = e, { stream_handler: P } = e, { useDefaultLabel: x } = e, ee, ce = !1, { active_source: R = null } = e;
  function J({ detail: B }) {
    t(1, s = new Ha()), t(1, s.image = B, s), O("upload");
  }
  function M(B) {
    return o(this, void 0, void 0, function* () {
      const Je = yield ee.load_files([new File([B], "webcam.png")]), je = (Je == null ? void 0 : Je[0]) || null;
      je ? (t(1, s = new Ha()), t(1, s.image = je, s)) : t(1, s = null), yield r2(), O("change");
    });
  }
  const O = a2();
  let Z = !1;
  function fe(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          ee.paste_clipboard();
          break;
      }
    });
  }
  function ke() {
    t(1, s = null), O("clear"), O("change");
  }
  const I = async (B) => B === null ? "" : `<img src="${await fd(B.image)}" />`;
  function lt(B) {
    ol.call(this, l, B);
  }
  function L(B) {
    ol.call(this, l, B);
  }
  function H(B) {
    pl[B ? "unshift" : "push"](() => {
      ee = B, t(29, ee);
    });
  }
  function ne(B) {
    ce = B, t(27, ce);
  }
  function ie(B) {
    Z = B, t(28, Z);
  }
  function D(B) {
    ol.call(this, l, B);
  }
  const Me = (B) => M(B.detail), it = (B) => M(B.detail);
  function yt(B) {
    ol.call(this, l, B);
  }
  function Fe(B) {
    ol.call(this, l, B);
  }
  const ot = (B) => M(B.detail);
  function st(B) {
    s = B, t(1, s);
  }
  const xt = () => O("change");
  function vi(B) {
    R = B, t(0, R), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, b = B.showShareButton), "showDownloadButton" in B && t(10, m = B.showDownloadButton), "showClearButton" in B && t(11, w = B.showClearButton), "boxesAlpha" in B && t(12, p = B.boxesAlpha), "labelList" in B && t(13, g = B.labelList), "labelColors" in B && t(14, h = B.labelColors), "boxMinSize" in B && t(15, v = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "boxThickness" in B && t(17, C = B.boxThickness), "disableEditBoxes" in B && t(18, y = B.disableEditBoxes), "singleBox" in B && t(19, k = B.singleBox), "showRemoveButton" in B && t(20, E = B.showRemoveButton), "handlesCursor" in B && t(21, z = B.handlesCursor), "boxSelectedThickness" in B && t(22, W = B.boxSelectedThickness), "max_file_size" in B && t(23, A = B.max_file_size), "cli_upload" in B && t(24, V = B.cli_upload), "stream_handler" in B && t(25, P = B.stream_handler), "useDefaultLabel" in B && t(26, x = B.useDefaultLabel), "active_source" in B && t(0, R = B.active_source), "$$scope" in B && t(51, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    134217728 && ce && ke(), l.$$.dirty[0] & /*dragging*/
    268435456 && O("drag", Z), l.$$.dirty[0] & /*active_source, sources*/
    17 && !R && f && t(0, R = f[0]);
  }, [
    R,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    m,
    w,
    p,
    g,
    h,
    v,
    S,
    C,
    y,
    k,
    E,
    z,
    W,
    A,
    V,
    P,
    x,
    ce,
    Z,
    ee,
    J,
    M,
    O,
    fe,
    ke,
    n,
    I,
    lt,
    L,
    H,
    ne,
    ie,
    D,
    Me,
    it,
    yt,
    Fe,
    ot,
    st,
    xt,
    vi,
    i
  ];
}
class d2 extends xg {
  constructor(e) {
    super(), l2(
      this,
      e,
      _2,
      u2,
      o2,
      {
        value: 1,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        boxThickness: 17,
        disableEditBoxes: 18,
        singleBox: 19,
        showRemoveButton: 20,
        handlesCursor: 21,
        boxSelectedThickness: 22,
        max_file_size: 23,
        cli_upload: 24,
        stream_handler: 25,
        useDefaultLabel: 26,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: h2,
  attr: Kl,
  detach: ff,
  element: cf,
  init: m2,
  insert: uf,
  noop: Pa,
  safe_not_equal: g2,
  src_url_equal: Za,
  toggle_class: Nt
} = window.__gradio__svelte__internal;
function Ga(l) {
  let e, t;
  return {
    c() {
      e = cf("img"), Za(e.src, t = /*value*/
      l[0].url) || Kl(e, "src", t), Kl(e, "alt", "");
    },
    m(n, i) {
      uf(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Za(e.src, t = /*value*/
      n[0].url) && Kl(e, "src", t);
    },
    d(n) {
      n && ff(e);
    }
  };
}
function b2(l) {
  let e, t = (
    /*value*/
    l[0] && Ga(l)
  );
  return {
    c() {
      e = cf("div"), t && t.c(), Kl(e, "class", "container svelte-1sgcyba"), Nt(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Nt(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Nt(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Nt(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      uf(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Ga(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Nt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Nt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Nt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Nt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Pa,
    o: Pa,
    d(n) {
      n && ff(e), t && t.d();
    }
  };
}
function w2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class V2 extends h2 {
  constructor(e) {
    super(), m2(this, e, w2, b2, g2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: p2,
  add_flush_callback: Ka,
  assign: v2,
  bind: Ja,
  binding_callbacks: Qa,
  check_outros: k2,
  create_component: yn,
  destroy_component: Cn,
  detach: _f,
  empty: y2,
  flush: Q,
  get_spread_object: C2,
  get_spread_update: S2,
  group_outros: z2,
  init: q2,
  insert: df,
  mount_component: Sn,
  safe_not_equal: B2,
  space: D2,
  transition_in: Wt,
  transition_out: It
} = window.__gradio__svelte__internal;
function L2(l) {
  let e, t;
  return e = new wu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [R2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, i) {
      Sn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function E2(l) {
  let e, t;
  return e = new dr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, i) {
      Sn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function M2(l) {
  let e, t;
  return e = new dr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, i) {
      Sn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function R2(l) {
  let e, t;
  return e = new ir({}), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, i) {
      Sn(e, n, i), t = !0;
    },
    i(n) {
      t || (Wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function A2(l) {
  let e, t, n, i;
  const o = [M2, E2, L2], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = y2();
    },
    m(a, f) {
      s[e].m(a, f), df(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (z2(), It(s[c], 1, 1, () => {
        s[c] = null;
      }), k2(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Wt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Wt(t), i = !0);
    },
    o(a) {
      It(t), i = !1;
    },
    d(a) {
      a && _f(n), s[e].d(a);
    }
  };
}
function W2(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[31].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[31].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = v2(a, r[_]);
  e = new y1({ props: a });
  function f(_) {
    l[34](_);
  }
  function c(_) {
    l[35](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      l[10]
    ),
    root: (
      /*root*/
      l[7]
    ),
    sources: (
      /*sources*/
      l[14]
    ),
    interactive: (
      /*interactive*/
      l[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      l[15]
    ),
    showShareButton: (
      /*show_share_button*/
      l[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      l[17]
    ),
    i18n: (
      /*gradio*/
      l[31].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      l[19]
    ),
    labelList: (
      /*label_list*/
      l[20]
    ),
    labelColors: (
      /*label_colors*/
      l[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      l[22]
    ),
    label: (
      /*label*/
      l[5]
    ),
    show_label: (
      /*show_label*/
      l[6]
    ),
    max_file_size: (
      /*gradio*/
      l[31].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[31].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[31].client.stream
    ),
    handleSize: (
      /*handle_size*/
      l[23]
    ),
    boxThickness: (
      /*box_thickness*/
      l[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      l[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      l[26]
    ),
    singleBox: (
      /*single_box*/
      l[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      l[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      l[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      l[30]
    ),
    $$slots: { default: [A2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[33] !== void 0 && (u.active_source = /*active_source*/
    l[33]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new d2({ props: u }), Qa.push(() => Ja(n, "active_source", f)), Qa.push(() => Ja(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      l[36]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[37]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[38]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[39]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[40]
    ), n.$on(
      "select",
      /*select_handler*/
      l[41]
    ), n.$on(
      "share",
      /*share_handler*/
      l[42]
    ), n.$on(
      "error",
      /*error_handler*/
      l[43]
    ), {
      c() {
        yn(e.$$.fragment), t = D2(), yn(n.$$.fragment);
      },
      m(_, d) {
        Sn(e, _, d), df(_, t, d), Sn(n, _, d), s = !0;
      },
      p(_, d) {
        const b = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? S2(r, [
          d[1] & /*gradio*/
          1 && {
            autoscroll: (
              /*gradio*/
              _[31].autoscroll
            )
          },
          d[1] & /*gradio*/
          1 && { i18n: (
            /*gradio*/
            _[31].i18n
          ) },
          d[0] & /*loading_status*/
          2 && C2(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(b);
        const m = {};
        d[0] & /*_selectable*/
        1024 && (m.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (m.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (m.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (m.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (m.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (m.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (m.showClearButton = /*show_clear_button*/
        _[17]), d[1] & /*gradio*/
        1 && (m.i18n = /*gradio*/
        _[31].i18n), d[0] & /*boxes_alpha*/
        524288 && (m.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*label_list*/
        1048576 && (m.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (m.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (m.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (m.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (m.show_label = /*show_label*/
        _[6]), d[1] & /*gradio*/
        1 && (m.max_file_size = /*gradio*/
        _[31].max_file_size), d[1] & /*gradio*/
        1 && (m.cli_upload = /*gradio*/
        _[31].client.upload), d[1] & /*gradio*/
        1 && (m.stream_handler = /*gradio*/
        _[31].client.stream), d[0] & /*handle_size*/
        8388608 && (m.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (m.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (m.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (m.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (m.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (m.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (m.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*use_default_label*/
        1073741824 && (m.useDefaultLabel = /*use_default_label*/
        _[30]), d[1] & /*$$scope, gradio, active_source*/
        8197 && (m.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        4 && (i = !0, m.active_source = /*active_source*/
        _[33], Ka(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, m.value = /*value*/
        _[0], Ka(() => o = !1)), n.$set(m);
      },
      i(_) {
        s || (Wt(e.$$.fragment, _), Wt(n.$$.fragment, _), s = !0);
      },
      o(_) {
        It(e.$$.fragment, _), It(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && _f(t), Cn(e, _), Cn(n, _);
      }
    }
  );
}
function I2(l) {
  let e, t;
  return e = new Of({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[32] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        l[2]
      ),
      elem_classes: (
        /*elem_classes*/
        l[3]
      ),
      height: (
        /*height*/
        l[8] || void 0
      ),
      width: (
        /*width*/
        l[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        l[11]
      ),
      scale: (
        /*scale*/
        l[12]
      ),
      min_width: (
        /*min_width*/
        l[13]
      ),
      $$slots: { default: [W2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, i) {
      Sn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      2 && (o.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*height*/
      256 && (o.height = /*height*/
      n[8] || void 0), i[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147468515 | i[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      It(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function T2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: b = null } = e, { min_width: m = void 0 } = e, { loading_status: w } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: g } = e, { show_share_button: h } = e, { show_clear_button: v } = e, { interactive: S } = e, { boxes_alpha: C } = e, { label_list: y } = e, { label_colors: k } = e, { box_min_size: E } = e, { handle_size: z } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: V } = e, { single_box: P } = e, { show_remove_button: x } = e, { handles_cursor: ee } = e, { use_default_label: ce } = e, { gradio: R } = e, J, M = null;
  function O(D) {
    M = D, t(33, M);
  }
  function Z(D) {
    s = D, t(0, s);
  }
  const fe = () => R.dispatch("change"), ke = () => R.dispatch("edit"), I = () => {
    R.dispatch("clear");
  }, lt = ({ detail: D }) => t(32, J = D), L = () => R.dispatch("upload"), H = ({ detail: D }) => R.dispatch("select", D), ne = ({ detail: D }) => R.dispatch("share", D), ie = ({ detail: D }) => {
    t(1, w = w || {}), t(1, w.status = "error", w), R.dispatch("error", D);
  };
  return l.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, i = D.elem_classes), "visible" in D && t(4, o = D.visible), "value" in D && t(0, s = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, d = D.container), "scale" in D && t(12, b = D.scale), "min_width" in D && t(13, m = D.min_width), "loading_status" in D && t(1, w = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, g = D.show_download_button), "show_share_button" in D && t(16, h = D.show_share_button), "show_clear_button" in D && t(17, v = D.show_clear_button), "interactive" in D && t(18, S = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, y = D.label_list), "label_colors" in D && t(21, k = D.label_colors), "box_min_size" in D && t(22, E = D.box_min_size), "handle_size" in D && t(23, z = D.handle_size), "box_thickness" in D && t(24, W = D.box_thickness), "box_selected_thickness" in D && t(25, A = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, V = D.disable_edit_boxes), "single_box" in D && t(27, P = D.single_box), "show_remove_button" in D && t(28, x = D.show_remove_button), "handles_cursor" in D && t(29, ee = D.handles_cursor), "use_default_label" in D && t(30, ce = D.use_default_label), "gradio" in D && t(31, R = D.gradio);
  }, [
    s,
    w,
    n,
    i,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    m,
    p,
    g,
    h,
    v,
    S,
    C,
    y,
    k,
    E,
    z,
    W,
    A,
    V,
    P,
    x,
    ee,
    ce,
    R,
    J,
    M,
    O,
    Z,
    fe,
    ke,
    I,
    lt,
    L,
    H,
    ne,
    ie
  ];
}
class N2 extends p2 {
  constructor(e) {
    super(), q2(
      this,
      e,
      T2,
      I2,
      B2,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        use_default_label: 30,
        gradio: 31
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Q();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Q();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Q();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Q();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Q();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Q();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Q();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Q();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Q();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Q();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Q();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Q();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Q();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Q();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Q();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Q();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Q();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Q();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Q();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Q();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Q();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Q();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Q();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Q();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Q();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Q();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Q();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Q();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Q();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Q();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Q();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Q();
  }
}
export {
  V2 as BaseExample,
  N2 as default
};
