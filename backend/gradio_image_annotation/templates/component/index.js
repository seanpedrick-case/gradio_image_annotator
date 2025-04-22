const {
  SvelteComponent: df,
  assign: hf,
  create_slot: mf,
  detach: gf,
  element: bf,
  get_all_dirty_from_scope: wf,
  get_slot_changes: pf,
  get_spread_update: vf,
  init: kf,
  insert: yf,
  safe_not_equal: Cf,
  set_dynamic_element_data: Jo,
  set_style: Ie,
  toggle_class: at,
  transition_in: Za,
  transition_out: Ga,
  update_slot_base: Sf
} = window.__gradio__svelte__internal;
function zf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = mf(
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
    r = hf(r, s[a]);
  return {
    c() {
      e = bf(
        /*tag*/
        l[14]
      ), o && o.c(), Jo(
        /*tag*/
        l[14]
      )(e, r), at(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        l[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), Ie(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), Ie(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), Ie(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), Ie(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), Ie(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), Ie(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), Ie(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      yf(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && Sf(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? pf(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : wf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Jo(
        /*tag*/
        a[14]
      )(e, r = vf(s, [
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
      ])), at(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), at(
        e,
        "padded",
        /*padding*/
        a[6]
      ), at(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), at(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), at(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ie(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ie(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ie(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ie(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ie(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ie(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Za(o, a), n = !0);
    },
    o(a) {
      Ga(o, a), n = !1;
    },
    d(a) {
      a && gf(e), o && o.d(a);
    }
  };
}
function qf(l) {
  let e, t = (
    /*tag*/
    l[14] && zf(l)
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
      e || (Za(t, n), e = !0);
    },
    o(n) {
      Ga(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Bf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: g = !1 } = e, { container: m = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: w = null } = e, { min_width: h = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const S = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, g = C.explicit_call), "container" in C && t(9, m = C.container), "visible" in C && t(10, b = C.visible), "allow_overflow" in C && t(11, p = C.allow_overflow), "scale" in C && t(12, w = C.scale), "min_width" in C && t(13, h = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    u,
    d,
    g,
    m,
    b,
    p,
    w,
    h,
    k,
    S,
    _,
    i,
    n
  ];
}
class Df extends df {
  constructor(e) {
    super(), kf(this, e, Bf, qf, Cf, {
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
  SvelteComponent: Lf,
  attr: Mf,
  create_slot: Ef,
  detach: Rf,
  element: Af,
  get_all_dirty_from_scope: Wf,
  get_slot_changes: If,
  init: Tf,
  insert: Hf,
  safe_not_equal: Xf,
  transition_in: Yf,
  transition_out: Ff,
  update_slot_base: jf
} = window.__gradio__svelte__internal;
function Uf(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Ef(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Af("div"), i && i.c(), Mf(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Hf(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && jf(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? If(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Wf(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Yf(i, o), t = !0);
    },
    o(o) {
      Ff(i, o), t = !1;
    },
    d(o) {
      o && Rf(e), i && i.d(o);
    }
  };
}
function Of(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Vf extends Lf {
  constructor(e) {
    super(), Tf(this, e, Of, Uf, Xf, {});
  }
}
const {
  SvelteComponent: Nf,
  attr: Qo,
  check_outros: Pf,
  create_component: Zf,
  create_slot: Gf,
  destroy_component: Kf,
  detach: Ul,
  element: Jf,
  empty: Qf,
  get_all_dirty_from_scope: xf,
  get_slot_changes: $f,
  group_outros: ec,
  init: tc,
  insert: Ol,
  mount_component: nc,
  safe_not_equal: lc,
  set_data: ic,
  space: oc,
  text: sc,
  toggle_class: Sn,
  transition_in: ol,
  transition_out: Vl,
  update_slot_base: ac
} = window.__gradio__svelte__internal;
function xo(l) {
  let e, t;
  return e = new Vf({
    props: {
      $$slots: { default: [rc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Zf(e.$$.fragment);
    },
    m(n, i) {
      nc(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ol(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kf(e, n);
    }
  };
}
function rc(l) {
  let e;
  return {
    c() {
      e = sc(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Ol(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && ic(
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
function fc(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = Gf(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && xo(l)
  );
  return {
    c() {
      e = Jf("span"), s && s.c(), t = oc(), r && r.c(), n = Qf(), Qo(e, "data-testid", "block-info"), Qo(e, "class", "svelte-22c38v"), Sn(e, "sr-only", !/*show_label*/
      l[0]), Sn(e, "hide", !/*show_label*/
      l[0]), Sn(
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
      8) && ac(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? $f(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : xf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Sn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && Sn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && Sn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && ol(r, 1)) : (r = xo(a), r.c(), ol(r, 1), r.m(n.parentNode, n)) : r && (ec(), Vl(r, 1, 1, () => {
        r = null;
      }), Pf());
    },
    i(a) {
      i || (ol(s, a), ol(r), i = !0);
    },
    o(a) {
      Vl(s, a), Vl(r), i = !1;
    },
    d(a) {
      a && (Ul(e), Ul(t), Ul(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function cc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class Ka extends Nf {
  constructor(e) {
    super(), tc(this, e, cc, fc, lc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: uc,
  append: Si,
  attr: Cl,
  create_component: _c,
  destroy_component: dc,
  detach: hc,
  element: $o,
  init: mc,
  insert: gc,
  mount_component: bc,
  safe_not_equal: wc,
  set_data: pc,
  space: vc,
  text: kc,
  toggle_class: Tt,
  transition_in: yc,
  transition_out: Cc
} = window.__gradio__svelte__internal;
function Sc(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = $o("label"), t = $o("span"), _c(n.$$.fragment), i = vc(), o = kc(
        /*label*/
        l[0]
      ), Cl(t, "class", "svelte-9gxdi0"), Cl(e, "for", ""), Cl(e, "data-testid", "block-label"), Cl(e, "class", "svelte-9gxdi0"), Tt(e, "hide", !/*show_label*/
      l[2]), Tt(e, "sr-only", !/*show_label*/
      l[2]), Tt(
        e,
        "float",
        /*float*/
        l[4]
      ), Tt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      gc(r, e, a), Si(e, t), bc(n, t, null), Si(e, i), Si(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && pc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Tt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Tt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Tt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Tt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (yc(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Cc(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && hc(e), dc(n);
    }
  };
}
function zc(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class qc extends uc {
  constructor(e) {
    super(), mc(this, e, zc, Sc, wc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Bc,
  append: ho,
  attr: vt,
  bubble: Dc,
  create_component: Lc,
  destroy_component: Mc,
  detach: Ja,
  element: mo,
  init: Ec,
  insert: Qa,
  listen: Rc,
  mount_component: Ac,
  safe_not_equal: Wc,
  set_data: Ic,
  set_style: zn,
  space: Tc,
  text: Hc,
  toggle_class: Se,
  transition_in: Xc,
  transition_out: Yc
} = window.__gradio__svelte__internal;
function es(l) {
  let e, t;
  return {
    c() {
      e = mo("span"), t = Hc(
        /*label*/
        l[1]
      ), vt(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      Qa(n, e, i), ho(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Ic(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Ja(e);
    }
  };
}
function Fc(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && es(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = mo("button"), a && a.c(), t = Tc(), n = mo("div"), Lc(i.$$.fragment), vt(n, "class", "svelte-1lrphxw"), Se(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), Se(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), Se(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], vt(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), vt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), vt(
        e,
        "title",
        /*label*/
        l[1]
      ), vt(e, "class", "svelte-1lrphxw"), Se(
        e,
        "pending",
        /*pending*/
        l[3]
      ), Se(
        e,
        "padded",
        /*padded*/
        l[5]
      ), Se(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), Se(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), zn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), zn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), zn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      Qa(f, e, c), a && a.m(e, null), ho(e, t), ho(e, n), Ac(i, n, null), o = !0, s || (r = Rc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = es(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Se(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || c & /*size*/
      16) && Se(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || c & /*size*/
      16) && Se(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || c & /*label*/
      2) && vt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || c & /*hasPopup*/
      256) && vt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || c & /*label*/
      2) && vt(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || c & /*pending*/
      8) && Se(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || c & /*padded*/
      32) && Se(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || c & /*highlight*/
      64) && Se(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || c & /*transparent*/
      512) && Se(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && zn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && zn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && zn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (Xc(i.$$.fragment, f), o = !0);
    },
    o(f) {
      Yc(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Ja(e), a && a.d(), Mc(i), s = !1, r();
    }
  };
}
function jc(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function p(w) {
    Dc.call(this, l, w);
  }
  return l.$$set = (w) => {
    "Icon" in w && t(0, i = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, f = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, _ = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, g = w.transparent), "background" in w && t(10, m = w.background), "offset" in w && t(11, b = w.offset);
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
    g,
    m,
    b,
    n,
    d,
    p
  ];
}
class fi extends Bc {
  constructor(e) {
    super(), Ec(this, e, jc, Fc, Wc, {
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
  SvelteComponent: Uc,
  append: Oc,
  attr: zi,
  binding_callbacks: Vc,
  create_slot: Nc,
  detach: Pc,
  element: ts,
  get_all_dirty_from_scope: Zc,
  get_slot_changes: Gc,
  init: Kc,
  insert: Jc,
  safe_not_equal: Qc,
  toggle_class: Ht,
  transition_in: xc,
  transition_out: $c,
  update_slot_base: eu
} = window.__gradio__svelte__internal;
function tu(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Nc(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = ts("div"), t = ts("div"), o && o.c(), zi(t, "class", "icon svelte-3w3rth"), zi(e, "class", "empty svelte-3w3rth"), zi(e, "aria-label", "Empty value"), Ht(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), Ht(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), Ht(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), Ht(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      Jc(s, e, r), Oc(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && eu(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? Gc(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Zc(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Ht(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ht(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Ht(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (xc(o, s), n = !0);
    },
    o(s) {
      $c(o, s), n = !1;
    },
    d(s) {
      s && Pc(e), o && o.d(s), l[6](null);
    }
  };
}
function nu(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: g } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > g + 2;
  }
  function c(u) {
    Vc[u ? "unshift" : "push"](() => {
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
class lu extends Uc {
  constructor(e) {
    super(), Kc(this, e, nu, tu, Qc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: iu,
  append: ns,
  attr: ze,
  detach: ou,
  init: su,
  insert: au,
  noop: qi,
  safe_not_equal: ru,
  svg_element: Bi
} = window.__gradio__svelte__internal;
function fu(l) {
  let e, t, n;
  return {
    c() {
      e = Bi("svg"), t = Bi("path"), n = Bi("circle"), ze(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), ze(n, "cx", "12"), ze(n, "cy", "13"), ze(n, "r", "4"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "1.5"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-camera");
    },
    m(i, o) {
      au(i, e, o), ns(e, t), ns(e, n);
    },
    p: qi,
    i: qi,
    o: qi,
    d(i) {
      i && ou(e);
    }
  };
}
class cu extends iu {
  constructor(e) {
    super(), su(this, e, null, fu, ru, {});
  }
}
const {
  SvelteComponent: uu,
  append: _u,
  attr: xe,
  detach: du,
  init: hu,
  insert: mu,
  noop: Di,
  safe_not_equal: gu,
  svg_element: ls
} = window.__gradio__svelte__internal;
function bu(l) {
  let e, t;
  return {
    c() {
      e = ls("svg"), t = ls("circle"), xe(t, "cx", "12"), xe(t, "cy", "12"), xe(t, "r", "10"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "stroke-width", "1.5"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round"), xe(e, "class", "feather feather-circle");
    },
    m(n, i) {
      mu(n, e, i), _u(e, t);
    },
    p: Di,
    i: Di,
    o: Di,
    d(n) {
      n && du(e);
    }
  };
}
class wu extends uu {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: pu,
  append: Li,
  attr: $e,
  detach: vu,
  init: ku,
  insert: yu,
  noop: Mi,
  safe_not_equal: Cu,
  set_style: rt,
  svg_element: Sl
} = window.__gradio__svelte__internal;
function Su(l) {
  let e, t, n, i;
  return {
    c() {
      e = Sl("svg"), t = Sl("g"), n = Sl("path"), i = Sl("path"), $e(n, "d", "M18,6L6.087,17.913"), rt(n, "fill", "none"), rt(n, "fill-rule", "nonzero"), rt(n, "stroke-width", "2px"), $e(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), $e(i, "d", "M4.364,4.364L19.636,19.636"), rt(i, "fill", "none"), rt(i, "fill-rule", "nonzero"), rt(i, "stroke-width", "2px"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "version", "1.1"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $e(e, "xml:space", "preserve"), $e(e, "stroke", "currentColor"), rt(e, "fill-rule", "evenodd"), rt(e, "clip-rule", "evenodd"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      yu(o, e, s), Li(e, t), Li(t, n), Li(e, i);
    },
    p: Mi,
    i: Mi,
    o: Mi,
    d(o) {
      o && vu(e);
    }
  };
}
class xa extends pu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: zu,
  append: qu,
  attr: xn,
  detach: Bu,
  init: Du,
  insert: Lu,
  noop: Ei,
  safe_not_equal: Mu,
  svg_element: is
} = window.__gradio__svelte__internal;
function Eu(l) {
  let e, t;
  return {
    c() {
      e = is("svg"), t = is("path"), xn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), xn(t, "fill", "currentColor"), xn(e, "id", "icon"), xn(e, "xmlns", "http://www.w3.org/2000/svg"), xn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Lu(n, e, i), qu(e, t);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(n) {
      n && Bu(e);
    }
  };
}
class Ru extends zu {
  constructor(e) {
    super(), Du(this, e, null, Eu, Mu, {});
  }
}
const {
  SvelteComponent: Au,
  append: Wu,
  attr: qn,
  detach: Iu,
  init: Tu,
  insert: Hu,
  noop: Ri,
  safe_not_equal: Xu,
  svg_element: os
} = window.__gradio__svelte__internal;
function Yu(l) {
  let e, t;
  return {
    c() {
      e = os("svg"), t = os("path"), qn(t, "fill", "currentColor"), qn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), qn(e, "xmlns", "http://www.w3.org/2000/svg"), qn(e, "width", "100%"), qn(e, "height", "100%"), qn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Hu(n, e, i), Wu(e, t);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(n) {
      n && Iu(e);
    }
  };
}
class Fu extends Au {
  constructor(e) {
    super(), Tu(this, e, null, Yu, Xu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Uu,
  attr: Bn,
  detach: Ou,
  init: Vu,
  insert: Nu,
  noop: Ai,
  safe_not_equal: Pu,
  svg_element: ss
} = window.__gradio__svelte__internal;
function Zu(l) {
  let e, t;
  return {
    c() {
      e = ss("svg"), t = ss("path"), Bn(t, "d", "M5 8l4 4 4-4z"), Bn(e, "class", "dropdown-arrow svelte-145leq6"), Bn(e, "xmlns", "http://www.w3.org/2000/svg"), Bn(e, "width", "100%"), Bn(e, "height", "100%"), Bn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Nu(n, e, i), Uu(e, t);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(n) {
      n && Ou(e);
    }
  };
}
class Io extends ju {
  constructor(e) {
    super(), Vu(this, e, null, Zu, Pu, {});
  }
}
const {
  SvelteComponent: Gu,
  append: Wi,
  attr: ue,
  detach: Ku,
  init: Ju,
  insert: Qu,
  noop: Ii,
  safe_not_equal: xu,
  svg_element: zl
} = window.__gradio__svelte__internal;
function $u(l) {
  let e, t, n, i;
  return {
    c() {
      e = zl("svg"), t = zl("rect"), n = zl("circle"), i = zl("polyline"), ue(t, "x", "3"), ue(t, "y", "3"), ue(t, "width", "18"), ue(t, "height", "18"), ue(t, "rx", "2"), ue(t, "ry", "2"), ue(n, "cx", "8.5"), ue(n, "cy", "8.5"), ue(n, "r", "1.5"), ue(i, "points", "21 15 16 10 5 21"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "fill", "none"), ue(e, "stroke", "currentColor"), ue(e, "stroke-width", "1.5"), ue(e, "stroke-linecap", "round"), ue(e, "stroke-linejoin", "round"), ue(e, "class", "feather feather-image");
    },
    m(o, s) {
      Qu(o, e, s), Wi(e, t), Wi(e, n), Wi(e, i);
    },
    p: Ii,
    i: Ii,
    o: Ii,
    d(o) {
      o && Ku(e);
    }
  };
}
let $a = class extends Gu {
  constructor(e) {
    super(), Ju(this, e, null, $u, xu, {});
  }
};
const {
  SvelteComponent: e_,
  append: t_,
  attr: ql,
  detach: n_,
  init: l_,
  insert: i_,
  noop: Ti,
  safe_not_equal: o_,
  svg_element: as
} = window.__gradio__svelte__internal;
function s_(l) {
  let e, t;
  return {
    c() {
      e = as("svg"), t = as("path"), ql(t, "fill", "currentColor"), ql(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), ql(e, "xmlns", "http://www.w3.org/2000/svg"), ql(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      i_(n, e, i), t_(e, t);
    },
    p: Ti,
    i: Ti,
    o: Ti,
    d(n) {
      n && n_(e);
    }
  };
}
class er extends e_ {
  constructor(e) {
    super(), l_(this, e, null, s_, o_, {});
  }
}
const {
  SvelteComponent: a_,
  append: Bl,
  attr: _e,
  detach: r_,
  init: f_,
  insert: c_,
  noop: Hi,
  safe_not_equal: u_,
  svg_element: $n
} = window.__gradio__svelte__internal;
function __(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = $n("svg"), t = $n("path"), n = $n("path"), i = $n("line"), o = $n("line"), _e(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), _e(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), _e(i, "x1", "12"), _e(i, "y1", "19"), _e(i, "x2", "12"), _e(i, "y2", "23"), _e(o, "x1", "8"), _e(o, "y1", "23"), _e(o, "x2", "16"), _e(o, "y2", "23"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "fill", "none"), _e(e, "stroke", "currentColor"), _e(e, "stroke-width", "2"), _e(e, "stroke-linecap", "round"), _e(e, "stroke-linejoin", "round"), _e(e, "class", "feather feather-mic");
    },
    m(s, r) {
      c_(s, e, r), Bl(e, t), Bl(e, n), Bl(e, i), Bl(e, o);
    },
    p: Hi,
    i: Hi,
    o: Hi,
    d(s) {
      s && r_(e);
    }
  };
}
class d_ extends a_ {
  constructor(e) {
    super(), f_(this, e, null, __, u_, {});
  }
}
const {
  SvelteComponent: h_,
  append: rs,
  attr: Ue,
  detach: m_,
  init: g_,
  insert: b_,
  noop: Xi,
  safe_not_equal: w_,
  set_style: p_,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function v_(l) {
  let e, t, n;
  return {
    c() {
      e = Yi("svg"), t = Yi("polyline"), n = Yi("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), p_(e, "transform", "rotateY(180deg)");
    },
    m(i, o) {
      b_(i, e, o), rs(e, t), rs(e, n);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(i) {
      i && m_(e);
    }
  };
}
class k_ extends h_ {
  constructor(e) {
    super(), g_(this, e, null, v_, w_, {});
  }
}
const {
  SvelteComponent: y_,
  append: C_,
  attr: qe,
  detach: S_,
  init: z_,
  insert: q_,
  noop: Fi,
  safe_not_equal: B_,
  svg_element: fs
} = window.__gradio__svelte__internal;
function D_(l) {
  let e, t;
  return {
    c() {
      e = fs("svg"), t = fs("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, i) {
      q_(n, e, i), C_(e, t);
    },
    p: Fi,
    i: Fi,
    o: Fi,
    d(n) {
      n && S_(e);
    }
  };
}
class L_ extends y_ {
  constructor(e) {
    super(), z_(this, e, null, D_, B_, {});
  }
}
const {
  SvelteComponent: M_,
  append: cs,
  attr: Oe,
  detach: E_,
  init: R_,
  insert: A_,
  noop: ji,
  safe_not_equal: W_,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function I_(l) {
  let e, t, n;
  return {
    c() {
      e = Ui("svg"), t = Ui("polyline"), n = Ui("path"), Oe(t, "points", "1 4 1 10 7 10"), Oe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "fill", "none"), Oe(e, "stroke", "currentColor"), Oe(e, "stroke-width", "2"), Oe(e, "stroke-linecap", "round"), Oe(e, "stroke-linejoin", "round"), Oe(e, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      A_(i, e, o), cs(e, t), cs(e, n);
    },
    p: ji,
    i: ji,
    o: ji,
    d(i) {
      i && E_(e);
    }
  };
}
class T_ extends M_ {
  constructor(e) {
    super(), R_(this, e, null, I_, W_, {});
  }
}
const {
  SvelteComponent: H_,
  append: Oi,
  attr: pe,
  detach: X_,
  init: Y_,
  insert: F_,
  noop: Vi,
  safe_not_equal: j_,
  svg_element: Dl
} = window.__gradio__svelte__internal;
function U_(l) {
  let e, t, n, i;
  return {
    c() {
      e = Dl("svg"), t = Dl("path"), n = Dl("polyline"), i = Dl("line"), pe(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), pe(n, "points", "17 8 12 3 7 8"), pe(i, "x1", "12"), pe(i, "y1", "3"), pe(i, "x2", "12"), pe(i, "y2", "15"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "90%"), pe(e, "height", "90%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "2"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-upload");
    },
    m(o, s) {
      F_(o, e, s), Oi(e, t), Oi(e, n), Oi(e, i);
    },
    p: Vi,
    i: Vi,
    o: Vi,
    d(o) {
      o && X_(e);
    }
  };
}
let tr = class extends H_ {
  constructor(e) {
    super(), Y_(this, e, null, U_, j_, {});
  }
};
const {
  SvelteComponent: O_,
  append: us,
  attr: Xt,
  detach: V_,
  init: N_,
  insert: P_,
  noop: Ni,
  safe_not_equal: Z_,
  svg_element: Pi
} = window.__gradio__svelte__internal;
function G_(l) {
  let e, t, n;
  return {
    c() {
      e = Pi("svg"), t = Pi("path"), n = Pi("path"), Xt(t, "fill", "currentColor"), Xt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Xt(n, "fill", "currentColor"), Xt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Xt(e, "xmlns", "http://www.w3.org/2000/svg"), Xt(e, "width", "100%"), Xt(e, "height", "100%"), Xt(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      P_(i, e, o), us(e, t), us(e, n);
    },
    p: Ni,
    i: Ni,
    o: Ni,
    d(i) {
      i && V_(e);
    }
  };
}
let nr = class extends O_ {
  constructor(e) {
    super(), N_(this, e, null, G_, Z_, {});
  }
};
const K_ = [
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
], _s = {
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
K_.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: _s[e][t],
    secondary: _s[e][n]
  }
}), {});
class Nl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function J_(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Nl("Must be on Spaces to share.");
  let t, n, i;
  t = Q_(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
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
function Q_(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: x_,
  create_component: $_,
  destroy_component: ed,
  init: td,
  mount_component: nd,
  safe_not_equal: ld,
  transition_in: id,
  transition_out: od
} = window.__gradio__svelte__internal, { createEventDispatcher: sd } = window.__gradio__svelte__internal;
function ad(l) {
  let e, t;
  return e = new fi({
    props: {
      Icon: Ru,
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
      $_(e.$$.fragment);
    },
    m(n, i) {
      nd(e, n, i), t = !0;
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
      t || (id(e.$$.fragment, n), t = !0);
    },
    o(n) {
      od(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ed(e, n);
    }
  };
}
function rd(l, e, t) {
  const n = sd();
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
class fd extends x_ {
  constructor(e) {
    super(), td(this, e, rd, ad, ld, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: cd,
  append: rn,
  attr: go,
  check_outros: ud,
  create_component: lr,
  destroy_component: ir,
  detach: Pl,
  element: bo,
  group_outros: _d,
  init: dd,
  insert: Zl,
  mount_component: or,
  safe_not_equal: hd,
  set_data: wo,
  space: po,
  text: sl,
  toggle_class: ds,
  transition_in: Jl,
  transition_out: Ql
} = window.__gradio__svelte__internal;
function md(l) {
  let e, t;
  return e = new tr({}), {
    c() {
      lr(e.$$.fragment);
    },
    m(n, i) {
      or(e, n, i), t = !0;
    },
    i(n) {
      t || (Jl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ql(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ir(e, n);
    }
  };
}
function gd(l) {
  let e, t;
  return e = new er({}), {
    c() {
      lr(e.$$.fragment);
    },
    m(n, i) {
      or(e, n, i), t = !0;
    },
    i(n) {
      t || (Jl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ql(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ir(e, n);
    }
  };
}
function hs(l) {
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
      e = bo("span"), t = sl("- "), i = sl(n), o = sl(" -"), s = po(), a = sl(r), go(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Zl(f, e, c), rn(e, t), rn(e, i), rn(e, o), Zl(f, s, c), Zl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && wo(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && wo(a, r);
    },
    d(f) {
      f && (Pl(e), Pl(s), Pl(a));
    }
  };
}
function bd(l) {
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
  const c = [gd, md], u = [];
  function _(g, m) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && hs(l)
  );
  return {
    c() {
      e = bo("div"), t = bo("span"), i.c(), o = po(), r = sl(s), a = po(), d && d.c(), go(t, "class", "icon-wrap svelte-kzcjhc"), ds(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), go(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, m) {
      Zl(g, e, m), rn(e, t), u[n].m(t, null), rn(e, o), rn(e, r), rn(e, a), d && d.m(e, null), f = !0;
    },
    p(g, [m]) {
      let b = n;
      n = _(g), n !== b && (_d(), Ql(u[b], 1, 1, () => {
        u[b] = null;
      }), ud(), i = u[n], i || (i = u[n] = c[n](g), i.c()), Jl(i, 1), i.m(t, null)), (!f || m & /*hovered*/
      16) && ds(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!f || m & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && wo(r, s), /*mode*/
      g[3] !== "short" ? d ? d.p(g, m) : (d = hs(g), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      f || (Jl(i), f = !0);
    },
    o(g) {
      Ql(i), f = !1;
    },
    d(g) {
      g && Pl(e), u[n].d(), d && d.d();
    }
  };
}
function wd(l, e, t) {
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
class sr extends cd {
  constructor(e) {
    super(), dd(this, e, wd, bd, hd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: pd,
  append: Zi,
  attr: ht,
  check_outros: al,
  create_component: ci,
  destroy_component: ui,
  detach: Un,
  element: pl,
  empty: vd,
  group_outros: rl,
  init: kd,
  insert: On,
  listen: _i,
  mount_component: di,
  safe_not_equal: yd,
  space: Gi,
  toggle_class: Gt,
  transition_in: he,
  transition_out: Be
} = window.__gradio__svelte__internal;
function ms(l) {
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
  ), f, c = t && gs(l), u = i && bs(l), _ = s && ws(l), d = a && ps(l);
  return {
    c() {
      e = pl("span"), c && c.c(), n = Gi(), u && u.c(), o = Gi(), _ && _.c(), r = Gi(), d && d.c(), ht(e, "class", "source-selection svelte-1jp3vgd"), ht(e, "data-testid", "source-select");
    },
    m(g, m) {
      On(g, e, m), c && c.m(e, null), Zi(e, n), u && u.m(e, null), Zi(e, o), _ && _.m(e, null), Zi(e, r), d && d.m(e, null), f = !0;
    },
    p(g, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? c ? (c.p(g, m), m & /*sources*/
      2 && he(c, 1)) : (c = gs(g), c.c(), he(c, 1), c.m(e, n)) : c && (rl(), Be(c, 1, 1, () => {
        c = null;
      }), al()), m & /*sources*/
      2 && (i = /*sources*/
      g[1].includes("microphone")), i ? u ? (u.p(g, m), m & /*sources*/
      2 && he(u, 1)) : (u = bs(g), u.c(), he(u, 1), u.m(e, o)) : u && (rl(), Be(u, 1, 1, () => {
        u = null;
      }), al()), m & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("webcam")), s ? _ ? (_.p(g, m), m & /*sources*/
      2 && he(_, 1)) : (_ = ws(g), _.c(), he(_, 1), _.m(e, r)) : _ && (rl(), Be(_, 1, 1, () => {
        _ = null;
      }), al()), m & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? d ? (d.p(g, m), m & /*sources*/
      2 && he(d, 1)) : (d = ps(g), d.c(), he(d, 1), d.m(e, null)) : d && (rl(), Be(d, 1, 1, () => {
        d = null;
      }), al());
    },
    i(g) {
      f || (he(c), he(u), he(_), he(d), f = !0);
    },
    o(g) {
      Be(c), Be(u), Be(_), Be(d), f = !1;
    },
    d(g) {
      g && Un(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function gs(l) {
  let e, t, n, i, o;
  return t = new tr({}), {
    c() {
      e = pl("button"), ci(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Upload file"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      On(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (he(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Un(e), ui(t), i = !1, o();
    }
  };
}
function bs(l) {
  let e, t, n, i, o;
  return t = new d_({}), {
    c() {
      e = pl("button"), ci(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Record audio"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      On(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (he(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Un(e), ui(t), i = !1, o();
    }
  };
}
function ws(l) {
  let e, t, n, i, o;
  return t = new nr({}), {
    c() {
      e = pl("button"), ci(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Capture from camera"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      On(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (he(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Un(e), ui(t), i = !1, o();
    }
  };
}
function ps(l) {
  let e, t, n, i, o;
  return t = new er({}), {
    c() {
      e = pl("button"), ci(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Paste from clipboard"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      On(s, e, r), di(t, e, null), n = !0, i || (o = _i(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (he(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Un(e), ui(t), i = !1, o();
    }
  };
}
function Cd(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && ms(l)
  );
  return {
    c() {
      n && n.c(), e = vd();
    },
    m(i, o) {
      n && n.m(i, o), On(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && he(n, 1)) : (n = ms(i), n.c(), he(n, 1), n.m(e.parentNode, e)) : n && (rl(), Be(n, 1, 1, () => {
        n = null;
      }), al());
    },
    i(i) {
      t || (he(n), t = !0);
    },
    o(i) {
      Be(n), t = !1;
    },
    d(i) {
      i && Un(e), n && n.d(i);
    }
  };
}
function Sd(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(g, m, b, p) {
    function w(h) {
      return h instanceof b ? h : new b(function(k) {
        k(h);
      });
    }
    return new (b || (b = Promise))(function(h, k) {
      function S(v) {
        try {
          y(p.next(v));
        } catch (M) {
          k(M);
        }
      }
      function C(v) {
        try {
          y(p.throw(v));
        } catch (M) {
          k(M);
        }
      }
      function y(v) {
        v.done ? h(v.value) : w(v.value).then(S, C);
      }
      y((p = p.apply(g, m || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(g) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = g), a(g);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (g) => {
    "sources" in g && t(1, o = g.sources), "active_source" in g && t(0, s = g.active_source), "handle_clear" in g && t(4, r = g.handle_clear), "handle_select" in g && t(5, a = g.handle_select);
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
class zd extends pd {
  constructor(e) {
    super(), kd(this, e, Sd, Cd, yd, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Wn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Gl() {
}
const qd = (l) => l;
function Bd(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function vs(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const ar = typeof window < "u";
let ks = ar ? () => window.performance.now() : () => Date.now(), rr = ar ? (l) => requestAnimationFrame(l) : Gl;
const jn = /* @__PURE__ */ new Set();
function fr(l) {
  jn.forEach((e) => {
    e.c(l) || (jn.delete(e), e.f());
  }), jn.size !== 0 && rr(fr);
}
function Dd(l) {
  let e;
  return jn.size === 0 && rr(fr), {
    promise: new Promise((t) => {
      jn.add(e = { c: l, f: t });
    }),
    abort() {
      jn.delete(e);
    }
  };
}
function Ld(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Md(l, { delay: e = 0, duration: t = 400, easing: n = qd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (o) => `opacity: ${o * i}`
  };
}
function ys(l, { delay: e = 0, duration: t = 400, easing: n = Ld, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, _] = vs(i), [d, g] = vs(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (m, b) => `
			transform: ${f} translate(${(1 - m) * u}${_}, ${(1 - m) * d}${g});
			opacity: ${a - c * b}`
  };
}
const Dn = [];
function Ed(l, e = Gl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Bd(l, r) && (l = r, t)) {
      const a = !Dn.length;
      for (const f of n)
        f[1](), Dn.push(f, l);
      if (a) {
        for (let f = 0; f < Dn.length; f += 2)
          Dn[f][0](Dn[f + 1]);
        Dn.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = Gl) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || Gl), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function Cs(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function vo(l, e, t, n) {
  if (typeof t == "number" || Cs(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, Cs(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => vo(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = vo(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Ss(l, e = {}) {
  const t = Ed(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function g(b, p = {}) {
    c = b;
    const w = a = {};
    return l == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, s = ks(), f = b, t.set(l = c), Promise.resolve()) : (p.soft && (_ = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (s = ks(), d = !1, r = Dd((h) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: m,
        settled: !0,
        dt: (h - s) * 60 / 1e3
      }, S = vo(k, f, l, c);
      return s = h, f = l, t.set(l = S), k.settled && (r = null), !k.settled;
    })), new Promise((h) => {
      r.promise.then(() => {
        w === a && h();
      });
    }));
  }
  const m = {
    set: g,
    update: (b, p) => g(b(c, l), p),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return m;
}
const {
  SvelteComponent: Rd,
  append: et,
  attr: Z,
  component_subscribe: zs,
  detach: Ad,
  element: Wd,
  init: Id,
  insert: Td,
  noop: qs,
  safe_not_equal: Hd,
  set_style: Ll,
  svg_element: tt,
  toggle_class: Bs
} = window.__gradio__svelte__internal, { onMount: Xd } = window.__gradio__svelte__internal;
function Yd(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _;
  return {
    c() {
      e = Wd("div"), t = tt("svg"), n = tt("g"), i = tt("path"), o = tt("path"), s = tt("path"), r = tt("path"), a = tt("g"), f = tt("path"), c = tt("path"), u = tt("path"), _ = tt("path"), Z(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Z(i, "fill", "#FF7C00"), Z(i, "fill-opacity", "0.4"), Z(i, "class", "svelte-43sxxs"), Z(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Z(o, "fill", "#FF7C00"), Z(o, "class", "svelte-43sxxs"), Z(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Z(s, "fill", "#FF7C00"), Z(s, "fill-opacity", "0.4"), Z(s, "class", "svelte-43sxxs"), Z(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Z(r, "fill", "#FF7C00"), Z(r, "class", "svelte-43sxxs"), Ll(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), Z(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Z(f, "fill", "#FF7C00"), Z(f, "fill-opacity", "0.4"), Z(f, "class", "svelte-43sxxs"), Z(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Z(c, "fill", "#FF7C00"), Z(c, "class", "svelte-43sxxs"), Z(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Z(u, "fill", "#FF7C00"), Z(u, "fill-opacity", "0.4"), Z(u, "class", "svelte-43sxxs"), Z(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Z(_, "fill", "#FF7C00"), Z(_, "class", "svelte-43sxxs"), Ll(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), Z(t, "viewBox", "-1200 -1200 3000 3000"), Z(t, "fill", "none"), Z(t, "xmlns", "http://www.w3.org/2000/svg"), Z(t, "class", "svelte-43sxxs"), Z(e, "class", "svelte-43sxxs"), Bs(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, g) {
      Td(d, e, g), et(e, t), et(t, n), et(n, i), et(n, o), et(n, s), et(n, r), et(t, a), et(a, f), et(a, c), et(a, u), et(a, _);
    },
    p(d, [g]) {
      g & /*$top*/
      2 && Ll(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), g & /*$bottom*/
      4 && Ll(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), g & /*margin*/
      1 && Bs(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: qs,
    o: qs,
    d(d) {
      d && Ad(e);
    }
  };
}
function Fd(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, g, m, b) {
    function p(w) {
      return w instanceof m ? w : new m(function(h) {
        h(w);
      });
    }
    return new (m || (m = Promise))(function(w, h) {
      function k(y) {
        try {
          C(b.next(y));
        } catch (v) {
          h(v);
        }
      }
      function S(y) {
        try {
          C(b.throw(y));
        } catch (v) {
          h(v);
        }
      }
      function C(y) {
        y.done ? w(y.value) : p(y.value).then(k, S);
      }
      C((b = b.apply(d, g || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Ss([0, 0]);
  zs(l, r, (d) => t(1, n = d));
  const a = Ss([0, 0]);
  zs(l, a, (d) => t(2, i = d));
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
  return Xd(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class jd extends Rd {
  constructor(e) {
    super(), Id(this, e, Fd, Yd, Hd, { margin: 0 });
  }
}
const {
  SvelteComponent: Ud,
  append: fn,
  attr: ot,
  binding_callbacks: Ds,
  check_outros: ko,
  create_component: cr,
  create_slot: ur,
  destroy_component: _r,
  destroy_each: dr,
  detach: X,
  element: _t,
  empty: Vn,
  ensure_array_like: xl,
  get_all_dirty_from_scope: hr,
  get_slot_changes: mr,
  group_outros: yo,
  init: Od,
  insert: Y,
  mount_component: gr,
  noop: Co,
  safe_not_equal: Vd,
  set_data: Ze,
  set_style: Pt,
  space: Pe,
  text: se,
  toggle_class: Ne,
  transition_in: it,
  transition_out: dt,
  update_slot_base: br
} = window.__gradio__svelte__internal, { tick: Nd } = window.__gradio__svelte__internal, { onDestroy: Pd } = window.__gradio__svelte__internal, { createEventDispatcher: Zd } = window.__gradio__svelte__internal, Gd = (l) => ({}), Ls = (l) => ({}), Kd = (l) => ({}), Ms = (l) => ({});
function Es(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Rs(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function Jd(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new fi({
    props: {
      Icon: xa,
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
  ), c = ur(
    f,
    l,
    /*$$scope*/
    l[29],
    Ls
  );
  return {
    c() {
      e = _t("div"), cr(t.$$.fragment), n = Pe(), i = _t("span"), s = se(o), r = Pe(), c && c.c(), ot(e, "class", "clear-status svelte-16nch4a"), ot(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      Y(u, e, _), gr(t, e, null), Y(u, n, _), Y(u, i, _), fn(i, s), Y(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && Ze(s, o), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && br(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? mr(
          f,
          /*$$scope*/
          u[29],
          _,
          Gd
        ) : hr(
          /*$$scope*/
          u[29]
        ),
        Ls
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      dt(t.$$.fragment, u), dt(c, u), a = !1;
    },
    d(u) {
      u && (X(e), X(n), X(i), X(r)), _r(t), c && c.d(u);
    }
  };
}
function Qd(l) {
  let e, t, n, i, o, s, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && As(l)
  );
  function u(h, k) {
    if (
      /*progress*/
      h[7]
    ) return e1;
    if (
      /*queue_position*/
      h[2] !== null && /*queue_size*/
      h[3] !== void 0 && /*queue_position*/
      h[2] >= 0
    ) return $d;
    if (
      /*queue_position*/
      h[2] === 0
    ) return xd;
  }
  let _ = u(l), d = _ && _(l), g = (
    /*timer*/
    l[5] && Ts(l)
  );
  const m = [i1, l1], b = [];
  function p(h, k) {
    return (
      /*last_progress_level*/
      h[15] != null ? 0 : (
        /*show_progress*/
        h[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = p(l)) && (s = b[o] = m[o](l));
  let w = !/*timer*/
  l[5] && Os(l);
  return {
    c() {
      c && c.c(), e = Pe(), t = _t("div"), d && d.c(), n = Pe(), g && g.c(), i = Pe(), s && s.c(), r = Pe(), w && w.c(), a = Vn(), ot(t, "class", "progress-text svelte-16nch4a"), Ne(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Ne(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(h, k) {
      c && c.m(h, k), Y(h, e, k), Y(h, t, k), d && d.m(t, null), fn(t, n), g && g.m(t, null), Y(h, i, k), ~o && b[o].m(h, k), Y(h, r, k), w && w.m(h, k), Y(h, a, k), f = !0;
    },
    p(h, k) {
      /*variant*/
      h[8] === "default" && /*show_eta_bar*/
      h[18] && /*show_progress*/
      h[6] === "full" ? c ? c.p(h, k) : (c = As(h), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(h)) && d ? d.p(h, k) : (d && d.d(1), d = _ && _(h), d && (d.c(), d.m(t, n))), /*timer*/
      h[5] ? g ? g.p(h, k) : (g = Ts(h), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!f || k[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text-center",
        /*variant*/
        h[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text",
        /*variant*/
        h[8] === "default"
      );
      let S = o;
      o = p(h), o === S ? ~o && b[o].p(h, k) : (s && (yo(), dt(b[S], 1, 1, () => {
        b[S] = null;
      }), ko()), ~o ? (s = b[o], s ? s.p(h, k) : (s = b[o] = m[o](h), s.c()), it(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      h[5] ? w && (yo(), dt(w, 1, 1, () => {
        w = null;
      }), ko()) : w ? (w.p(h, k), k[0] & /*timer*/
      32 && it(w, 1)) : (w = Os(h), w.c(), it(w, 1), w.m(a.parentNode, a));
    },
    i(h) {
      f || (it(s), it(w), f = !0);
    },
    o(h) {
      dt(s), dt(w), f = !1;
    },
    d(h) {
      h && (X(e), X(t), X(i), X(r), X(a)), c && c.d(h), d && d.d(), g && g.d(), ~o && b[o].d(h), w && w.d(h);
    }
  };
}
function As(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = _t("div"), ot(e, "class", "eta-bar svelte-16nch4a"), Pt(e, "transform", t);
    },
    m(n, i) {
      Y(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Pt(e, "transform", t);
    },
    d(n) {
      n && X(e);
    }
  };
}
function xd(l) {
  let e;
  return {
    c() {
      e = se("processing |");
    },
    m(t, n) {
      Y(t, e, n);
    },
    p: Co,
    d(t) {
      t && X(e);
    }
  };
}
function $d(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = se("queue: "), n = se(t), i = se("/"), o = se(
        /*queue_size*/
        l[3]
      ), s = se(" |");
    },
    m(r, a) {
      Y(r, e, a), Y(r, n, a), Y(r, i, a), Y(r, o, a), Y(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ze(n, t), a[0] & /*queue_size*/
      8 && Ze(
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
function e1(l) {
  let e, t = xl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Is(Rs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Vn();
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
          const r = Rs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Is(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), dr(n, i);
    }
  };
}
function Ws(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? n1 : t1
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Pe(), n = se(t), i = se(" | "), s = se(o);
    },
    m(c, u) {
      f.m(c, u), Y(c, e, u), Y(c, n, u), Y(c, i, u), Y(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (X(e), X(n), X(i), X(s)), f.d(c);
    }
  };
}
function t1(l) {
  let e = Wn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = se(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Wn(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function n1(l) {
  let e = Wn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Wn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = se(e), n = se("/"), o = se(i);
    },
    m(s, r) {
      Y(s, t, r), Y(s, n, r), Y(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Wn(
        /*p*/
        s[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && i !== (i = Wn(
        /*p*/
        s[41].length
      ) + "") && Ze(o, i);
    },
    d(s) {
      s && (X(t), X(n), X(o));
    }
  };
}
function Is(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Ws(l)
  );
  return {
    c() {
      t && t.c(), e = Vn();
    },
    m(n, i) {
      t && t.m(n, i), Y(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Ws(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Ts(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = se(
        /*formatted_timer*/
        l[20]
      ), n = se(t), i = se("s");
    },
    m(o, s) {
      Y(o, e, s), Y(o, n, s), Y(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ze(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ze(n, t);
    },
    d(o) {
      o && (X(e), X(n), X(i));
    }
  };
}
function l1(l) {
  let e, t;
  return e = new jd({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      cr(e.$$.fragment);
    },
    m(n, i) {
      gr(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (it(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _r(e, n);
    }
  };
}
function i1(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Hs(l)
  );
  return {
    c() {
      e = _t("div"), t = _t("div"), r && r.c(), n = Pe(), i = _t("div"), o = _t("div"), ot(t, "class", "progress-level-inner svelte-16nch4a"), ot(o, "class", "progress-bar svelte-16nch4a"), Pt(o, "width", s), ot(i, "class", "progress-bar-wrap svelte-16nch4a"), ot(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      Y(a, e, f), fn(e, t), r && r.m(t, null), fn(e, n), fn(e, i), fn(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Hs(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Pt(o, "width", s);
    },
    i: Co,
    o: Co,
    d(a) {
      a && X(e), r && r.d(), l[31](null);
    }
  };
}
function Hs(l) {
  let e, t = xl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Us(Es(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Vn();
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
          const r = Es(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Us(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && X(e), dr(n, i);
    }
  };
}
function Xs(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && o1()
  ), s = (
    /*p*/
    l[41].desc != null && Ys(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Fs()
  ), a = (
    /*progress_level*/
    l[14] != null && js(l)
  );
  return {
    c() {
      o && o.c(), e = Pe(), s && s.c(), t = Pe(), r && r.c(), n = Pe(), a && a.c(), i = Vn();
    },
    m(f, c) {
      o && o.m(f, c), Y(f, e, c), s && s.m(f, c), Y(f, t, c), r && r.m(f, c), Y(f, n, c), a && a.m(f, c), Y(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, c) : (s = Ys(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Fs(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = js(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (X(e), X(t), X(n), X(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function o1(l) {
  let e;
  return {
    c() {
      e = se(" /");
    },
    m(t, n) {
      Y(t, e, n);
    },
    d(t) {
      t && X(e);
    }
  };
}
function Ys(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = se(e);
    },
    m(n, i) {
      Y(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && X(t);
    }
  };
}
function Fs(l) {
  let e;
  return {
    c() {
      e = se("-");
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
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = se(e), n = se("%");
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
      ] || 0)).toFixed(1) + "") && Ze(t, e);
    },
    d(i) {
      i && (X(t), X(n));
    }
  };
}
function Us(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && Xs(l)
  );
  return {
    c() {
      t && t.c(), e = Vn();
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
      ] != null ? t ? t.p(n, i) : (t = Xs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && X(e), t && t.d(n);
    }
  };
}
function Os(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = ur(
    o,
    l,
    /*$$scope*/
    l[29],
    Ms
  );
  return {
    c() {
      e = _t("p"), t = se(
        /*loading_text*/
        l[9]
      ), n = Pe(), s && s.c(), ot(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      Y(r, e, a), fn(e, t), Y(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && br(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? mr(
          o,
          /*$$scope*/
          r[29],
          a,
          Kd
        ) : hr(
          /*$$scope*/
          r[29]
        ),
        Ms
      );
    },
    i(r) {
      i || (it(s, r), i = !0);
    },
    o(r) {
      dt(s, r), i = !1;
    },
    d(r) {
      r && (X(e), X(n)), s && s.d(r);
    }
  };
}
function s1(l) {
  let e, t, n, i, o;
  const s = [Qd, Jd], r = [];
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
      e = _t("div"), n && n.c(), ot(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Ne(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Ne(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Ne(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Ne(
        e,
        "border",
        /*border*/
        l[12]
      ), Pt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Pt(
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
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (yo(), dt(r[u], 1, 1, () => {
        r[u] = null;
      }), ko()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), it(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && ot(e, "class", i), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Ne(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ne(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && Ne(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && Ne(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Pt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Pt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (it(n), o = !0);
    },
    o(f) {
      dt(n), o = !1;
    },
    d(f) {
      f && X(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var a1 = function(l, e, t, n) {
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
let Ml = [], Ki = !1;
function r1(l) {
  return a1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ml.push(e), !Ki) Ki = !0;
      else return;
      yield Nd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Ml.length; i++) {
          const s = Ml[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Ki = !1, Ml = [];
      });
    }
  });
}
function f1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = Zd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: g = "full" } = e, { message: m = null } = e, { progress: b = null } = e, { variant: p = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: h = !0 } = e, { translucent: k = !1 } = e, { border: S = !1 } = e, { autoscroll: C } = e, y, v = !1, M = 0, z = 0, W = null, A = null, O = 0, N = null, J, x = null, fe = !0;
  const R = () => {
    t(0, a = t(27, W = t(19, U = null))), t(25, M = performance.now()), t(26, z = 0), v = !0, G();
  };
  function G() {
    requestAnimationFrame(() => {
      t(26, z = (performance.now() - M) / 1e3), v && G();
    });
  }
  function E() {
    t(26, z = 0), t(0, a = t(27, W = t(19, U = null))), v && (v = !1);
  }
  Pd(() => {
    v && E();
  });
  let U = null;
  function P(I) {
    Ds[I ? "unshift" : "push"](() => {
      x = I, t(16, x), t(7, b), t(14, N), t(15, J);
    });
  }
  const ae = () => {
    s("clear_status");
  };
  function we(I) {
    Ds[I ? "unshift" : "push"](() => {
      y = I, t(13, y);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, g = I.show_progress), "message" in I && t(23, m = I.message), "progress" in I && t(7, b = I.progress), "variant" in I && t(8, p = I.variant), "loading_text" in I && t(9, w = I.loading_text), "absolute" in I && t(10, h = I.absolute), "translucent" in I && t(11, k = I.translucent), "border" in I && t(12, S = I.border), "autoscroll" in I && t(24, C = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - M) / 1e3 + a), t(19, U = A.toFixed(1)), t(27, W = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, O = A === null || A <= 0 || !z ? null : Math.min(z / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, fe = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, N = b.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, N = null), N ? (t(15, J = N[N.length - 1]), x && (J === 0 ? t(16, x.style.transition = "0", x) : t(16, x.style.transition = "150ms", x))) : t(15, J = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : E()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && _ && (u === "pending" || u === "complete") && r1(y, C), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = z.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    g,
    b,
    p,
    w,
    h,
    k,
    S,
    y,
    N,
    J,
    x,
    O,
    fe,
    U,
    n,
    s,
    _,
    m,
    C,
    M,
    z,
    W,
    A,
    o,
    i,
    P,
    ae,
    we
  ];
}
class c1 extends Ud {
  constructor(e) {
    super(), Od(
      this,
      e,
      f1,
      s1,
      Vd,
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
const { setContext: R2, getContext: u1 } = window.__gradio__svelte__internal, _1 = "WORKER_PROXY_CONTEXT_KEY";
function wr() {
  return u1(_1);
}
function d1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function pr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function vr(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!d1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function h1(l) {
  if (l == null || !vr(l))
    return l;
  const e = wr();
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
      type: pr(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: m1,
  assign: $l,
  check_outros: kr,
  compute_rest_props: Vs,
  create_slot: To,
  detach: hi,
  element: yr,
  empty: Cr,
  exclude_internal_props: g1,
  get_all_dirty_from_scope: Ho,
  get_slot_changes: Xo,
  get_spread_update: Sr,
  group_outros: zr,
  init: b1,
  insert: mi,
  listen: qr,
  prevent_default: w1,
  safe_not_equal: p1,
  set_attributes: ei,
  transition_in: mn,
  transition_out: gn,
  update_slot_base: Yo
} = window.__gradio__svelte__internal, { createEventDispatcher: v1 } = window.__gradio__svelte__internal;
function k1(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = To(
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
      e = yr("a"), r && r.c(), ei(e, f);
    },
    m(c, u) {
      mi(c, e, u), r && r.m(e, null), n = !0, i || (o = qr(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Yo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Xo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Ho(
          /*$$scope*/
          c[7]
        ),
        null
      ), ei(e, f = Sr(a, [
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
      n || (mn(r, c), n = !0);
    },
    o(c) {
      gn(r, c), n = !1;
    },
    d(c) {
      c && hi(e), r && r.d(c), i = !1, o();
    }
  };
}
function y1(l) {
  let e, t, n, i;
  const o = [S1, C1], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Cr();
    },
    m(a, f) {
      s[e].m(a, f), mi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (zr(), gn(s[c], 1, 1, () => {
        s[c] = null;
      }), kr(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (mn(t), i = !0);
    },
    o(a) {
      gn(t), i = !1;
    },
    d(a) {
      a && hi(n), s[e].d(a);
    }
  };
}
function C1(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = To(
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
      e = yr("a"), s && s.c(), ei(e, a);
    },
    m(f, c) {
      mi(f, e, c), s && s.m(e, null), t = !0, n || (i = qr(e, "click", w1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Yo(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? Xo(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Ho(
          /*$$scope*/
          f[7]
        ),
        null
      ), ei(e, a = Sr(r, [
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
      t || (mn(s, f), t = !0);
    },
    o(f) {
      gn(s, f), t = !1;
    },
    d(f) {
      f && hi(e), s && s.d(f), n = !1, i();
    }
  };
}
function S1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = To(
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
      128) && Yo(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Xo(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Ho(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (mn(n, i), e = !0);
    },
    o(i) {
      gn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function z1(l) {
  let e, t, n, i, o;
  const s = [y1, k1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && vr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Cr();
    },
    m(f, c) {
      r[t].m(f, c), mi(f, i, c), o = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (zr(), gn(r[u], 1, 1, () => {
        r[u] = null;
      }), kr(), n = r[t], n ? n.p(f, c) : (n = r[t] = s[t](f), n.c()), mn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (mn(n), o = !0);
    },
    o(f) {
      gn(n), o = !1;
    },
    d(f) {
      f && hi(i), r[t].d(f);
    }
  };
}
function q1(l, e, t) {
  const n = ["href", "download"];
  let i = Vs(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(g, m, b, p) {
    function w(h) {
      return h instanceof b ? h : new b(function(k) {
        k(h);
      });
    }
    return new (b || (b = Promise))(function(h, k) {
      function S(v) {
        try {
          y(p.next(v));
        } catch (M) {
          k(M);
        }
      }
      function C(v) {
        try {
          y(p.throw(v));
        } catch (M) {
          k(M);
        }
      }
      function y(v) {
        v.done ? h(v.value) : w(v.value).then(S, C);
      }
      y((p = p.apply(g, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = v1();
  let u = !1;
  const _ = wr();
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
      }).then((b) => {
        if (b.status !== 200)
          throw new Error(`Failed to get file ${m} from the Wasm worker.`);
        const p = new Blob(
          [b.body],
          {
            type: pr(b.headers, "content-type")
          }
        ), w = URL.createObjectURL(p), h = document.createElement("a");
        h.href = w, h.download = f, h.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (g) => {
    e = $l($l({}, e), g1(g)), t(6, i = Vs(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, f = g.download), "$$scope" in g && t(7, s = g.$$scope);
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
class B1 extends m1 {
  constructor(e) {
    super(), b1(this, e, q1, z1, p1, { href: 0, download: 1 });
  }
}
var D1 = Object.defineProperty, L1 = (l, e, t) => e in l ? D1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, bt = (l, e, t) => (L1(l, typeof e != "symbol" ? e + "" : e, t), t), Br = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, el = (l, e, t) => (Br(l, e, "read from private field"), t ? t.call(l) : e.get(l)), M1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, E1 = (l, e, t, n) => (Br(l, e, "write to private field"), e.set(l, t), t), Vt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Dr(l, e) {
  return l.map(
    (t) => new R1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class R1 {
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
    bt(this, "path"), bt(this, "url"), bt(this, "orig_name"), bt(this, "size"), bt(this, "blob"), bt(this, "is_stream"), bt(this, "mime_type"), bt(this, "alt_text"), bt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
let A2 = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = el(this, Vt) + t; ; ) {
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
        E1(this, Vt, t);
      },
      flush: (t) => {
        if (el(this, Vt) === "")
          return;
        const n = e.allowCR && el(this, Vt).endsWith("\r") ? el(this, Vt).slice(0, -1) : el(this, Vt);
        t.enqueue(n);
      }
    }), M1(this, Vt, "");
  }
};
Vt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: A1,
  append: Le,
  attr: sn,
  detach: Lr,
  element: an,
  init: W1,
  insert: Mr,
  noop: Ns,
  safe_not_equal: I1,
  set_data: ti,
  set_style: Ji,
  space: So,
  text: In,
  toggle_class: Ps
} = window.__gradio__svelte__internal, { onMount: T1, createEventDispatcher: H1, onDestroy: X1 } = window.__gradio__svelte__internal;
function Zs(l) {
  let e, t, n, i, o = fl(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = an("div"), t = an("span"), n = an("div"), i = an("progress"), s = In(o), a = So(), f = an("span"), u = In(c), Ji(i, "visibility", "hidden"), Ji(i, "height", "0"), Ji(i, "width", "0"), i.value = r = fl(
        /*file_to_display*/
        l[2]
      ), sn(i, "max", "100"), sn(i, "class", "svelte-cr2edf"), sn(n, "class", "progress-bar svelte-cr2edf"), sn(f, "class", "file-name svelte-cr2edf"), sn(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Mr(_, e, d), Le(e, t), Le(t, n), Le(n, i), Le(i, s), Le(e, a), Le(e, f), Le(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = fl(
        /*file_to_display*/
        _[2]
      ) + "") && ti(s, o), d & /*file_to_display*/
      4 && r !== (r = fl(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && ti(u, c);
    },
    d(_) {
      _ && Lr(e);
    }
  };
}
function Y1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && Zs(l)
  );
  return {
    c() {
      e = an("div"), t = an("span"), n = In("Uploading "), o = In(i), s = So(), a = In(r), f = In("..."), c = So(), u && u.c(), sn(t, "class", "uploading svelte-cr2edf"), sn(e, "class", "wrap svelte-cr2edf"), Ps(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Mr(_, e, d), Le(e, t), Le(t, n), Le(t, o), Le(t, s), Le(t, a), Le(t, f), Le(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && ti(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ti(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Zs(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Ps(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Ns,
    o: Ns,
    d(_) {
      _ && Lr(e), u && u.d();
    }
  };
}
function fl(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function F1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += fl(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function j1(l, e, t) {
  var n = this && this.__awaiter || function(m, b, p, w) {
    function h(k) {
      return k instanceof p ? k : new p(function(S) {
        S(k);
      });
    }
    return new (p || (p = Promise))(function(k, S) {
      function C(M) {
        try {
          v(w.next(M));
        } catch (z) {
          S(z);
        }
      }
      function y(M) {
        try {
          v(w.throw(M));
        } catch (z) {
          S(z);
        }
      }
      function v(M) {
        M.done ? k(M.value) : h(M.value).then(C, y);
      }
      v((w = w.apply(m, b || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = s.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = H1();
  function g(m, b) {
    t(0, _ = _.map((p) => (p.orig_name === m && (p.progress += b), p)));
  }
  return T1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(m.data);
        f || t(1, f = !0), b.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = b), g(b.orig_name, b.chunk_size));
      });
    };
  })), X1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, o = m.root), "files" in m && t(5, s = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && F1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
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
class U1 extends A1 {
  constructor(e) {
    super(), W1(this, e, j1, Y1, I1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: O1,
  append: Gs,
  attr: ve,
  binding_callbacks: V1,
  bubble: Qt,
  check_outros: Er,
  create_component: N1,
  create_slot: Rr,
  destroy_component: P1,
  detach: gi,
  element: zo,
  empty: Ar,
  get_all_dirty_from_scope: Wr,
  get_slot_changes: Ir,
  group_outros: Tr,
  init: Z1,
  insert: bi,
  listen: Te,
  mount_component: G1,
  prevent_default: xt,
  run_all: K1,
  safe_not_equal: J1,
  set_style: Hr,
  space: Q1,
  stop_propagation: $t,
  toggle_class: ge,
  transition_in: Zt,
  transition_out: bn,
  update_slot_base: Xr
} = window.__gradio__svelte__internal, { createEventDispatcher: x1, tick: $1 } = window.__gradio__svelte__internal;
function eh(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Rr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = zo("button"), d && d.c(), t = Q1(), n = zo("input"), ve(n, "aria-label", "file upload"), ve(n, "data-testid", "file-upload"), ve(n, "type", "file"), ve(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, ve(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), ve(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), ve(n, "class", "svelte-1s26xmt"), ve(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), ge(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), ge(
        e,
        "center",
        /*center*/
        l[4]
      ), ge(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), ge(
        e,
        "flex",
        /*flex*/
        l[5]
      ), ge(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Hr(e, "height", "100%");
    },
    m(g, m) {
      bi(g, e, m), d && d.m(e, null), Gs(e, t), Gs(e, n), l[34](n), f = !0, c || (u = [
        Te(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Te(e, "drag", $t(xt(
          /*drag_handler*/
          l[27]
        ))),
        Te(e, "dragstart", $t(xt(
          /*dragstart_handler*/
          l[28]
        ))),
        Te(e, "dragend", $t(xt(
          /*dragend_handler*/
          l[29]
        ))),
        Te(e, "dragover", $t(xt(
          /*dragover_handler*/
          l[30]
        ))),
        Te(e, "dragenter", $t(xt(
          /*dragenter_handler*/
          l[31]
        ))),
        Te(e, "dragleave", $t(xt(
          /*dragleave_handler*/
          l[32]
        ))),
        Te(e, "drop", $t(xt(
          /*drop_handler*/
          l[33]
        ))),
        Te(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Te(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Te(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Te(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], c = !0);
    },
    p(g, m) {
      d && d.p && (!f || m[0] & /*$$scope*/
      33554432) && Xr(
        d,
        _,
        g,
        /*$$scope*/
        g[25],
        f ? Ir(
          _,
          /*$$scope*/
          g[25],
          m,
          null
        ) : Wr(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!f || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      g[16] || void 0)) && ve(n, "accept", i), (!f || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = o), (!f || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      g[6] === "directory" || void 0)) && ve(n, "webkitdirectory", s), (!f || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && ve(n, "mozdirectory", r), (!f || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && ve(e, "tabindex", a), (!f || m[0] & /*hidden*/
      512) && ge(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!f || m[0] & /*center*/
      16) && ge(
        e,
        "center",
        /*center*/
        g[4]
      ), (!f || m[0] & /*boundedheight*/
      8) && ge(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!f || m[0] & /*flex*/
      32) && ge(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!f || m[0] & /*disable_click*/
      128) && ge(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      f || (Zt(d, g), f = !0);
    },
    o(g) {
      bn(d, g), f = !1;
    },
    d(g) {
      g && gi(e), d && d.d(g), l[34](null), c = !1, K1(u);
    }
  };
}
function th(l) {
  let e, t, n = !/*hidden*/
  l[9] && Ks(l);
  return {
    c() {
      n && n.c(), e = Ar();
    },
    m(i, o) {
      n && n.m(i, o), bi(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Tr(), bn(n, 1, 1, () => {
        n = null;
      }), Er()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && Zt(n, 1)) : (n = Ks(i), n.c(), Zt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Zt(n), t = !0);
    },
    o(i) {
      bn(n), t = !1;
    },
    d(i) {
      i && gi(e), n && n.d(i);
    }
  };
}
function nh(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = Rr(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = zo("button"), r && r.c(), ve(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), ge(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), ge(
        e,
        "center",
        /*center*/
        l[4]
      ), ge(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), ge(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Hr(e, "height", "100%");
    },
    m(a, f) {
      bi(a, e, f), r && r.m(e, null), n = !0, i || (o = Te(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Xr(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? Ir(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Wr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ve(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && ge(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && ge(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && ge(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && ge(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Zt(r, a), n = !0);
    },
    o(a) {
      bn(r, a), n = !1;
    },
    d(a) {
      a && gi(e), r && r.d(a), i = !1, o();
    }
  };
}
function Ks(l) {
  let e, t;
  return e = new U1({
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
      N1(e.$$.fragment);
    },
    m(n, i) {
      G1(e, n, i), t = !0;
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
      t || (Zt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      P1(e, n);
    }
  };
}
function lh(l) {
  let e, t, n, i;
  const o = [nh, th, eh], s = [];
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
      t.c(), n = Ar();
    },
    m(a, f) {
      s[e].m(a, f), bi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (Tr(), bn(s[c], 1, 1, () => {
        s[c] = null;
      }), Er(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Zt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Zt(t), i = !0);
    },
    o(a) {
      bn(t), i = !1;
    },
    d(a) {
      a && gi(n), s[e].d(a);
    }
  };
}
function ih(l, e, t) {
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
function oh(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(L, H, $, ne) {
    function D(Re) {
      return Re instanceof $ ? Re : new $(function(Ke) {
        Ke(Re);
      });
    }
    return new ($ || ($ = Promise))(function(Re, Ke) {
      function mt(Qe) {
        try {
          Je(ne.next(Qe));
        } catch (Kt) {
          Ke(Kt);
        }
      }
      function Ae(Qe) {
        try {
          Je(ne.throw(Qe));
        } catch (Kt) {
          Ke(Kt);
        }
      }
      function Je(Qe) {
        Qe.done ? Re(Qe.value) : D(Qe.value).then(mt, Ae);
      }
      Je((ne = ne.apply(L, H || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: g = !1 } = e, { format: m = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: p = null } = e, { show_progress: w = !0 } = e, { max_file_size: h = null } = e, { upload: k } = e, { stream_handler: S } = e, C, y, v;
  const M = x1(), z = ["image", "video", "audio", "text", "file"], W = (L) => L.startsWith(".") || L.endsWith("/*") ? L : z.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function O() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let H = 0; H < L.length; H++) {
        const $ = L[H].types.find((ne) => ne.startsWith("image/"));
        if ($) {
          L[H].getType($).then((ne) => o(this, void 0, void 0, function* () {
            const D = new File([ne], `clipboard.${$.replace("image/", "")}`);
            yield x([D]);
          }));
          break;
        }
      }
    }));
  }
  function N() {
    _ || p && (t(2, p.value = "", p), p.click());
  }
  function J(L) {
    return o(this, void 0, void 0, function* () {
      yield $1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const H = yield k(L, d, C, h ?? 1 / 0);
        return M("load", u === "single" ? H == null ? void 0 : H[0] : H), t(1, b = !1), H || [];
      } catch (H) {
        return M("error", H.message), t(1, b = !1), [];
      }
    });
  }
  function x(L) {
    return o(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let H = L.map(($) => new File([$], $ instanceof File ? $.name : "file", { type: $.type }));
      return t(15, y = yield Dr(H)), yield J(y);
    });
  }
  function fe(L) {
    return o(this, void 0, void 0, function* () {
      const H = L.target;
      if (H.files)
        if (m != "blob")
          yield x(Array.from(H.files));
        else {
          if (u === "single") {
            M("load", H.files[0]);
            return;
          }
          M("load", H.files);
        }
    });
  }
  function R(L) {
    return o(this, void 0, void 0, function* () {
      var H;
      if (t(20, r = !1), !(!((H = L.dataTransfer) === null || H === void 0) && H.files)) return;
      const $ = Array.from(L.dataTransfer.files).filter((ne) => {
        const D = "." + ne.name.split(".").pop();
        return D && ih(v, D, ne.type) || (D && Array.isArray(s) ? s.includes(D) : D === s) ? !0 : (M("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield x($);
    });
  }
  function G(L) {
    Qt.call(this, l, L);
  }
  function E(L) {
    Qt.call(this, l, L);
  }
  function U(L) {
    Qt.call(this, l, L);
  }
  function P(L) {
    Qt.call(this, l, L);
  }
  function ae(L) {
    Qt.call(this, l, L);
  }
  function we(L) {
    Qt.call(this, l, L);
  }
  function I(L) {
    Qt.call(this, l, L);
  }
  function Ge(L) {
    V1[L ? "unshift" : "push"](() => {
      p = L, t(2, p);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, g = L.hidden), "format" in L && t(21, m = L.format), "uploading" in L && t(1, b = L.uploading), "hidden_upload" in L && t(2, p = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, h = L.max_file_size), "upload" in L && t(23, k = L.upload), "stream_handler" in L && t(11, S = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, v = null) : typeof s == "string" ? t(16, v = W(s)) : (t(0, s = s.map(W)), t(16, v = s.join(", "))));
  }, [
    s,
    b,
    p,
    a,
    f,
    c,
    u,
    _,
    d,
    g,
    w,
    S,
    O,
    N,
    C,
    y,
    v,
    A,
    fe,
    R,
    r,
    m,
    h,
    k,
    x,
    i,
    n,
    G,
    E,
    U,
    P,
    ae,
    we,
    I,
    Ge
  ];
}
class sh extends O1 {
  constructor(e) {
    super(), Z1(
      this,
      e,
      oh,
      lh,
      J1,
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
  SvelteComponent: ah,
  append: El,
  attr: Qi,
  create_component: rh,
  destroy_component: fh,
  detach: ch,
  element: xi,
  init: uh,
  insert: _h,
  listen: dh,
  mount_component: hh,
  noop: mh,
  safe_not_equal: gh,
  set_style: bh,
  space: wh,
  text: ph,
  transition_in: vh,
  transition_out: kh
} = window.__gradio__svelte__internal, { createEventDispatcher: yh } = window.__gradio__svelte__internal;
function Ch(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, f, c;
  return i = new nr({}), {
    c() {
      e = xi("button"), t = xi("div"), n = xi("span"), rh(i.$$.fragment), o = wh(), r = ph(s), Qi(n, "class", "icon-wrap svelte-fjcd9c"), Qi(t, "class", "wrap svelte-fjcd9c"), Qi(e, "class", "svelte-fjcd9c"), bh(e, "height", "100%");
    },
    m(u, _) {
      _h(u, e, _), El(e, t), El(t, n), hh(i, n, null), El(t, o), El(t, r), a = !0, f || (c = dh(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: mh,
    i(u) {
      a || (vh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      kh(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && ch(e), fh(i), f = !1, c();
    }
  };
}
function Sh(l) {
  const e = yh();
  return [e, () => e("click")];
}
class zh extends ah {
  constructor(e) {
    super(), uh(this, e, Sh, Ch, gh, {});
  }
}
function qh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Bh(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Js(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (Bh(o, e), o));
}
function Dh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Lh,
  action_destroyer: Mh,
  add_render_callback: Eh,
  append: Dt,
  attr: de,
  binding_callbacks: Rh,
  check_outros: _l,
  create_component: Nn,
  create_in_transition: Ah,
  destroy_component: Pn,
  destroy_each: Wh,
  detach: Me,
  element: je,
  empty: Fo,
  ensure_array_like: Qs,
  group_outros: dl,
  init: Ih,
  insert: Ee,
  listen: ni,
  mount_component: Zn,
  noop: jo,
  run_all: Th,
  safe_not_equal: Hh,
  set_data: Yr,
  set_input_value: qo,
  space: bl,
  stop_propagation: Xh,
  text: Fr,
  toggle_class: Rl,
  transition_in: be,
  transition_out: ye
} = window.__gradio__svelte__internal, { createEventDispatcher: Yh, onMount: Fh } = window.__gradio__svelte__internal;
function xs(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function jh(l) {
  let e, t, n, i, o, s, r, a, f, c, u;
  const _ = [Vh, Oh], d = [];
  function g(p, w) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(l), i = d[n] = _[n](l);
  let m = !/*recording*/
  l[8] && $s(l), b = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && ea(l)
  );
  return {
    c() {
      e = je("div"), t = je("button"), i.c(), s = bl(), m && m.c(), r = bl(), b && b.c(), a = Fo(), de(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), de(t, "class", "svelte-8hqvb6"), de(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, w) {
      Ee(p, e, w), Dt(e, t), d[n].m(t, null), Dt(e, s), m && m.m(e, null), Ee(p, r, w), b && b.m(p, w), Ee(p, a, w), f = !0, c || (u = ni(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(p, w) {
      let h = n;
      n = g(p), n === h ? d[n].p(p, w) : (dl(), ye(d[h], 1, 1, () => {
        d[h] = null;
      }), _l(), i = d[n], i ? i.p(p, w) : (i = d[n] = _[n](p), i.c()), be(i, 1), i.m(t, null)), (!f || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && de(t, "aria-label", o), /*recording*/
      p[8] ? m && (dl(), ye(m, 1, 1, () => {
        m = null;
      }), _l()) : m ? (m.p(p, w), w[0] & /*recording*/
      256 && be(m, 1)) : (m = $s(p), m.c(), be(m, 1), m.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? b ? (b.p(p, w), w[0] & /*options_open, selected_device*/
      1152 && be(b, 1)) : (b = ea(p), b.c(), be(b, 1), b.m(a.parentNode, a)) : b && (dl(), ye(b, 1, 1, () => {
        b = null;
      }), _l());
    },
    i(p) {
      f || (be(i), be(m), be(b), f = !0);
    },
    o(p) {
      ye(i), ye(m), ye(b), f = !1;
    },
    d(p) {
      p && (Me(e), Me(r), Me(a)), d[n].d(), m && m.d(), b && b.d(p), c = !1, u();
    }
  };
}
function Uh(l) {
  let e, t, n, i;
  return t = new zh({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = je("div"), Nn(t.$$.fragment), de(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ee(o, e, s), Zn(t, e, null), i = !0;
    },
    p: jo,
    i(o) {
      i || (be(t.$$.fragment, o), o && (n || Eh(() => {
        n = Ah(e, Md, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      ye(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Me(e), Pn(t);
    }
  };
}
function Oh(l) {
  let e, t, n;
  return t = new cu({}), {
    c() {
      e = je("div"), Nn(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "title", "capture photo");
    },
    m(i, o) {
      Ee(i, e, o), Zn(t, e, null), n = !0;
    },
    p: jo,
    i(i) {
      n || (be(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Pn(t);
    }
  };
}
function Vh(l) {
  let e, t, n, i;
  const o = [Ph, Nh], s = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Fo();
    },
    m(a, f) {
      s[e].m(a, f), Ee(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (dl(), ye(s[c], 1, 1, () => {
        s[c] = null;
      }), _l(), t = s[e], t || (t = s[e] = o[e](a), t.c()), be(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (be(t), i = !0);
    },
    o(a) {
      ye(t), i = !1;
    },
    d(a) {
      a && Me(n), s[e].d(a);
    }
  };
}
function Nh(l) {
  let e, t, n;
  return t = new wu({}), {
    c() {
      e = je("div"), Nn(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "start recording");
    },
    m(i, o) {
      Ee(i, e, o), Zn(t, e, null), n = !0;
    },
    i(i) {
      n || (be(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Pn(t);
    }
  };
}
function Ph(l) {
  let e, t, n;
  return t = new L_({}), {
    c() {
      e = je("div"), Nn(t.$$.fragment), de(e, "class", "icon red svelte-8hqvb6"), de(e, "title", "stop recording");
    },
    m(i, o) {
      Ee(i, e, o), Zn(t, e, null), n = !0;
    },
    i(i) {
      n || (be(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Pn(t);
    }
  };
}
function $s(l) {
  let e, t, n, i, o;
  return t = new Io({}), {
    c() {
      e = je("button"), Nn(t.$$.fragment), de(e, "class", "icon svelte-8hqvb6"), de(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ee(s, e, r), Zn(t, e, null), n = !0, i || (o = ni(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: jo,
    i(s) {
      n || (be(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Me(e), Pn(t), i = !1, o();
    }
  };
}
function ea(l) {
  let e, t, n, i, o, s, r;
  n = new Io({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Gh : Zh
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = je("select"), t = je("button"), Nn(n.$$.fragment), i = bl(), c.c(), de(t, "class", "inset-icon svelte-8hqvb6"), de(e, "class", "select-wrap svelte-8hqvb6"), de(e, "aria-label", "select source");
    },
    m(u, _) {
      Ee(u, e, _), Dt(e, t), Zn(n, t, null), Dt(t, i), c.m(e, null), o = !0, s || (r = [
        ni(t, "click", Xh(
          /*click_handler_2*/
          l[22]
        )),
        Mh(Uo.call(
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
      o || (be(n.$$.fragment, u), o = !0);
    },
    o(u) {
      ye(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Me(e), Pn(n), c.d(), s = !1, Th(r);
    }
  };
}
function Zh(l) {
  let e, t = Qs(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ta(xs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Fo();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Ee(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Qs(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = xs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ta(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Me(e), Wh(n, i);
    }
  };
}
function Gh(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = je("option"), n = Fr(t), e.__value = "", qo(e, e.__value), de(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Ee(i, e, o), Dt(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Yr(n, t);
    },
    d(i) {
      i && Me(e);
    }
  };
}
function ta(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = je("option"), n = Fr(t), i = bl(), e.__value = o = /*device*/
      l[32].deviceId, qo(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, de(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ee(r, e, a), Dt(e, n), Dt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Yr(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, qo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Me(e);
    }
  };
}
function Kh(l) {
  let e, t, n, i, o, s;
  const r = [Uh, jh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), o = a[i] = r[i](l), {
    c() {
      e = je("div"), t = je("video"), n = bl(), o.c(), de(t, "class", "svelte-8hqvb6"), Rl(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), Rl(t, "hide", !/*webcam_accessed*/
      l[9]), de(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Ee(c, e, u), Dt(e, t), l[19](t), Dt(e, n), a[i].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Rl(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Rl(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (dl(), ye(a[_], 1, 1, () => {
        a[_] = null;
      }), _l(), o = a[i], o ? o.p(c, u) : (o = a[i] = r[i](c), o.c()), be(o, 1), o.m(e, null));
    },
    i(c) {
      s || (be(o), s = !0);
    },
    o(c) {
      ye(o), s = !1;
    },
    d(c) {
      c && Me(e), l[19](null), a[i].d();
    }
  };
}
function Uo(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Jh(l, e, t) {
  var n = this && this.__awaiter || function(R, G, E, U) {
    function P(ae) {
      return ae instanceof E ? ae : new E(function(we) {
        we(ae);
      });
    }
    return new (E || (E = Promise))(function(ae, we) {
      function I(H) {
        try {
          L(U.next(H));
        } catch ($) {
          we($);
        }
      }
      function Ge(H) {
        try {
          L(U.throw(H));
        } catch ($) {
          we($);
        }
      }
      function L(H) {
        H.done ? ae(H.value) : P(H.value).then(I, Ge);
      }
      L((U = U.apply(R, G || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: g } = e, { upload: m } = e;
  const b = Yh();
  Fh(() => r = document.createElement("canvas"));
  const p = (R) => n(void 0, void 0, void 0, function* () {
    const E = R.target.value;
    yield Js(d, i, E).then((U) => n(void 0, void 0, void 0, function* () {
      C = U, t(7, s = o.find((P) => P.deviceId === E) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Js(d, i).then((R) => n(this, void 0, void 0, function* () {
          t(9, z = !0), t(6, o = yield qh()), C = R;
        })).then(() => Dh(o)).then((R) => {
          t(6, o = R);
          const G = C.getTracks().map((E) => {
            var U;
            return (U = E.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, s = G && R.find((E) => E.deviceId === G) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && b("error", g("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          b("error", g("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function h() {
    var R = r.getContext("2d");
    (!a || a && k) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, R.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (R.scale(-1, 1), R.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (G) => {
        b(a ? "stream" : "capture", G);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, S = [], C, y, v;
  function M() {
    if (k) {
      v.stop();
      let R = new Blob(S, { type: y }), G = new FileReader();
      G.onload = function(E) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (E.target) {
            let P = new File([R], "sample." + y.substring(6));
            const ae = yield Dr([P]);
            let we = ((U = yield m(ae, c)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            b("capture", we), b("stop_recording");
          }
        });
      }, G.readAsDataURL(R);
    } else {
      b("start_recording"), S = [];
      let R = ["video/webm", "video/mp4"];
      for (let G of R)
        if (MediaRecorder.isTypeSupported(G)) {
          y = G;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      v = new MediaRecorder(C, { mimeType: y }), v.addEventListener("dataavailable", function(G) {
        S.push(G.data);
      }), v.start(200);
    }
    t(8, k = !k);
  }
  let z = !1;
  function W() {
    u === "image" && a && t(8, k = !k), u === "image" ? h() : M(), !k && C && (C.getTracks().forEach((R) => R.stop()), t(5, i.srcObject = null, i), t(9, z = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      i && !f && h();
    },
    500
  );
  let A = !1;
  function O(R) {
    R.preventDefault(), R.stopPropagation(), t(10, A = !1);
  }
  function N(R) {
    Rh[R ? "unshift" : "push"](() => {
      i = R, t(5, i);
    });
  }
  const J = async () => w(), x = () => t(10, A = !0), fe = () => t(10, A = !1);
  return l.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, g = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    u,
    _,
    g,
    Uo,
    i,
    o,
    s,
    k,
    z,
    A,
    p,
    w,
    W,
    O,
    f,
    c,
    d,
    m,
    N,
    J,
    x,
    fe
  ];
}
class Qh extends Lh {
  constructor(e) {
    super(), Ih(
      this,
      e,
      Jh,
      Kh,
      Hh,
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
    return Uo;
  }
}
const {
  SvelteComponent: xh,
  append: Yt,
  attr: T,
  detach: $h,
  init: e0,
  insert: t0,
  noop: $i,
  safe_not_equal: n0,
  set_style: Ft,
  svg_element: wt
} = window.__gradio__svelte__internal;
function l0(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = wt("svg"), t = wt("rect"), n = wt("rect"), i = wt("rect"), o = wt("rect"), s = wt("line"), r = wt("line"), a = wt("line"), f = wt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(i, "x", "2"), T(i, "y", "17"), T(i, "width", "5"), T(i, "height", "5"), T(i, "rx", "1"), T(i, "ry", "1"), T(i, "stroke-width", "2"), T(i, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Ft(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Ft(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Ft(a, "stroke-width", "2px"), T(f, "x1", "19.5"), T(f, "y1", "8"), T(f, "x2", "19.5"), T(f, "y2", "16"), Ft(f, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Ft(e, "fill-rule", "evenodd"), Ft(e, "clip-rule", "evenodd"), Ft(e, "stroke-linecap", "round"), Ft(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      t0(c, e, u), Yt(e, t), Yt(e, n), Yt(e, i), Yt(e, o), Yt(e, s), Yt(e, r), Yt(e, a), Yt(e, f);
    },
    p: $i,
    i: $i,
    o: $i,
    d(c) {
      c && $h(e);
    }
  };
}
class i0 extends xh {
  constructor(e) {
    super(), e0(this, e, null, l0, n0, {});
  }
}
const {
  SvelteComponent: o0,
  append: s0,
  attr: nt,
  detach: a0,
  init: r0,
  insert: f0,
  noop: eo,
  safe_not_equal: c0,
  set_style: Al,
  svg_element: na
} = window.__gradio__svelte__internal;
function u0(l) {
  let e, t;
  return {
    c() {
      e = na("svg"), t = na("path"), nt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Al(e, "fill-rule", "evenodd"), Al(e, "clip-rule", "evenodd"), Al(e, "stroke-linecap", "round"), Al(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      f0(n, e, i), s0(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && a0(e);
    }
  };
}
class _0 extends o0 {
  constructor(e) {
    super(), r0(this, e, null, u0, c0, {});
  }
}
const {
  SvelteComponent: d0,
  append: h0,
  attr: lt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: to,
  safe_not_equal: w0,
  set_style: Wl,
  svg_element: la
} = window.__gradio__svelte__internal;
function p0(l) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), Wl(e, "fill-rule", "evenodd"), Wl(e, "clip-rule", "evenodd"), Wl(e, "stroke-linecap", "round"), Wl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      b0(n, e, i), h0(e, t);
    },
    p: to,
    i: to,
    o: to,
    d(n) {
      n && m0(e);
    }
  };
}
class v0 extends d0 {
  constructor(e) {
    super(), g0(this, e, null, p0, w0, {});
  }
}
const {
  SvelteComponent: k0,
  append: ia,
  attr: pt,
  detach: y0,
  init: C0,
  insert: S0,
  noop: no,
  safe_not_equal: z0,
  set_style: Il,
  svg_element: lo
} = window.__gradio__svelte__internal;
function q0(l) {
  let e, t, n;
  return {
    c() {
      e = lo("svg"), t = lo("path"), n = lo("path"), pt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), pt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "fill", "none"), pt(e, "stroke", "currentColor"), pt(e, "stroke-width", "2"), Il(e, "fill-rule", "evenodd"), Il(e, "clip-rule", "evenodd"), Il(e, "stroke-linecap", "round"), Il(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      S0(i, e, o), ia(e, t), ia(e, n);
    },
    p: no,
    i: no,
    o: no,
    d(i) {
      i && y0(e);
    }
  };
}
class B0 extends k0 {
  constructor(e) {
    super(), C0(this, e, null, q0, z0, {});
  }
}
const {
  SvelteComponent: D0,
  append: L0,
  attr: jt,
  detach: M0,
  init: E0,
  insert: R0,
  noop: io,
  safe_not_equal: A0,
  set_style: Tl,
  svg_element: oa
} = window.__gradio__svelte__internal;
function W0(l) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), jt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 24 24"), jt(e, "fill", "none"), jt(e, "stroke", "currentColor"), jt(e, "stroke-width", "2"), Tl(e, "fill-rule", "evenodd"), Tl(e, "clip-rule", "evenodd"), Tl(e, "stroke-linecap", "round"), Tl(e, "stroke-linejoin", "round"), jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      R0(n, e, i), L0(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && M0(e);
    }
  };
}
class I0 extends D0 {
  constructor(e) {
    super(), E0(this, e, null, W0, A0, {});
  }
}
const {
  SvelteComponent: T0,
  append: H0,
  attr: Ut,
  detach: X0,
  init: Y0,
  insert: F0,
  noop: oo,
  safe_not_equal: j0,
  set_style: Hl,
  svg_element: sa
} = window.__gradio__svelte__internal;
function U0(l) {
  let e, t;
  return {
    c() {
      e = sa("svg"), t = sa("path"), Ut(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Hl(e, "fill-rule", "evenodd"), Hl(e, "clip-rule", "evenodd"), Hl(e, "stroke-linecap", "round"), Hl(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
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
  append: aa,
  attr: so,
  bubble: ra,
  create_component: N0,
  destroy_component: P0,
  detach: jr,
  element: fa,
  init: Z0,
  insert: Ur,
  listen: ao,
  mount_component: G0,
  run_all: K0,
  safe_not_equal: J0,
  set_data: Q0,
  set_input_value: ca,
  space: x0,
  text: $0,
  transition_in: em,
  transition_out: tm
} = window.__gradio__svelte__internal, { createEventDispatcher: nm, afterUpdate: lm } = window.__gradio__svelte__internal;
function im(l) {
  let e;
  return {
    c() {
      e = $0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Ur(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Q0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && jr(e);
    }
  };
}
function om(l) {
  let e, t, n, i, o, s, r;
  return t = new Ka({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [im] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = fa("label"), N0(t.$$.fragment), n = x0(), i = fa("input"), so(i, "type", "color"), i.disabled = /*disabled*/
      l[3], so(i, "class", "svelte-16l8u73"), so(e, "class", "block");
    },
    m(a, f) {
      Ur(a, e, f), G0(t, e, null), aa(e, n), aa(e, i), ca(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        ao(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        ao(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        ao(
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
      1 && ca(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (em(t.$$.fragment, a), o = !0);
    },
    o(a) {
      tm(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && jr(e), P0(t), s = !1, K0(r);
    }
  };
}
function sm(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = nm();
  function c() {
    f("change", n), i || f("input");
  }
  lm(() => {
    t(5, i = !1);
  });
  function u(g) {
    ra.call(this, l, g);
  }
  function _(g) {
    ra.call(this, l, g);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (g) => {
    "value" in g && t(0, n = g.value), "value_is_output" in g && t(5, i = g.value_is_output), "label" in g && t(1, o = g.label), "info" in g && t(2, s = g.info), "disabled" in g && t(3, r = g.disabled), "show_label" in g && t(4, a = g.show_label);
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
class am extends V0 {
  constructor(e) {
    super(), Z0(this, e, sm, om, J0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var Or = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, tl = (l, e, t) => (Or(l, e, "read from private field"), t ? t.call(l) : e.get(l)), rm = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, fm = (l, e, t, n) => (Or(l, e, "write to private field"), e.set(l, t), t), Nt;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class I2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = tl(this, Nt) + t; ; ) {
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
        fm(this, Nt, t);
      },
      flush: (t) => {
        if (tl(this, Nt) === "")
          return;
        const n = e.allowCR && tl(this, Nt).endsWith("\r") ? tl(this, Nt).slice(0, -1) : tl(this, Nt);
        t.enqueue(n);
      }
    }), rm(this, Nt, "");
  }
}
Nt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: cm,
  append: Vr,
  attr: oe,
  bubble: um,
  check_outros: _m,
  create_slot: Nr,
  detach: vl,
  element: wi,
  empty: dm,
  get_all_dirty_from_scope: Pr,
  get_slot_changes: Zr,
  group_outros: hm,
  init: mm,
  insert: kl,
  listen: gm,
  safe_not_equal: bm,
  set_style: De,
  space: Gr,
  src_url_equal: li,
  toggle_class: Tn,
  transition_in: ii,
  transition_out: oi,
  update_slot_base: Kr
} = window.__gradio__svelte__internal;
function wm(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && ua(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = Nr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = wi("button"), r && r.c(), t = Gr(), f && f.c(), oe(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Tn(e, "hidden", !/*visible*/
      l[2]), De(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), De(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), De(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(c, u) {
      kl(c, e, u), r && r.m(e, null), Vr(e, t), f && f.m(e, null), i = !0, o || (s = gm(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = ua(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && Kr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? Zr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Pr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", n), (!i || u & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && De(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && De(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && De(e, "min-width", typeof /*min_width*/
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
      c && vl(e), r && r.d(), f && f.d(c), o = !1, s();
    }
  };
}
function pm(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && _a(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = Nr(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = wi("a"), o && o.c(), t = Gr(), r && r.c(), oe(
        e,
        "href",
        /*link*/
        l[6]
      ), oe(e, "rel", "noopener noreferrer"), oe(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), oe(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Tn(e, "hidden", !/*visible*/
      l[2]), Tn(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), De(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), De(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), De(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), De(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      kl(a, e, f), o && o.m(e, null), Vr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = _a(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Kr(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? Zr(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Pr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && oe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && oe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", n), (!i || f & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Tn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && De(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && De(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && De(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && De(e, "min-width", typeof /*min_width*/
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
      a && vl(e), o && o.d(), r && r.d(a);
    }
  };
}
function ua(l) {
  let e, t, n;
  return {
    c() {
      e = wi("img"), oe(e, "class", "button-icon svelte-8huxfn"), li(e.src, t = /*icon*/
      l[7].url) || oe(e, "src", t), oe(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      kl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !li(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && oe(e, "alt", n);
    },
    d(i) {
      i && vl(e);
    }
  };
}
function _a(l) {
  let e, t, n;
  return {
    c() {
      e = wi("img"), oe(e, "class", "button-icon svelte-8huxfn"), li(e.src, t = /*icon*/
      l[7].url) || oe(e, "src", t), oe(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      kl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !li(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && oe(e, "alt", n);
    },
    d(i) {
      i && vl(e);
    }
  };
}
function vm(l) {
  let e, t, n, i;
  const o = [pm, wm], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = dm();
    },
    m(a, f) {
      s[e].m(a, f), kl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (hm(), oi(s[c], 1, 1, () => {
        s[c] = null;
      }), _m(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), ii(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ii(t), i = !0);
    },
    o(a) {
      oi(t), i = !1;
    },
    d(a) {
      a && vl(n), s[e].d(a);
    }
  };
}
function km(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e;
  function b(p) {
    um.call(this, l, p);
  }
  return l.$$set = (p) => {
    "elem_id" in p && t(0, o = p.elem_id), "elem_classes" in p && t(1, s = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, f = p.size), "value" in p && t(5, c = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, _ = p.icon), "disabled" in p && t(8, d = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, m = p.min_width), "$$scope" in p && t(11, i = p.$$scope);
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
    g,
    m,
    i,
    n,
    b
  ];
}
class Bo extends cm {
  constructor(e) {
    super(), mm(this, e, km, vm, bm, {
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
  SvelteComponent: ym,
  add_render_callback: Jr,
  append: Xl,
  attr: Xe,
  binding_callbacks: da,
  check_outros: Cm,
  create_bidirectional_transition: ha,
  destroy_each: Sm,
  detach: hl,
  element: si,
  empty: zm,
  ensure_array_like: ma,
  group_outros: qm,
  init: Bm,
  insert: ml,
  listen: Do,
  prevent_default: Dm,
  run_all: Lm,
  safe_not_equal: Mm,
  set_data: Em,
  set_style: Ln,
  space: Lo,
  text: Rm,
  toggle_class: ft,
  transition_in: ro,
  transition_out: ga
} = window.__gradio__svelte__internal, { createEventDispatcher: Am } = window.__gradio__svelte__internal;
function ba(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function wa(l) {
  let e, t, n, i, o, s = ma(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = pa(ba(l, s, a));
  return {
    c() {
      e = si("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Xe(e, "class", "options svelte-yuohum"), Xe(e, "role", "listbox"), Ln(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Ln(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Ln(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      ml(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (o = Do(e, "mousedown", Dm(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = ma(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = ba(a, s, c);
          r[c] ? r[c].p(u, f) : (r[c] = pa(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && Ln(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Ln(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Ln(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Jr(() => {
        n && (t || (t = ha(e, ys, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ha(e, ys, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && hl(e), Sm(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function pa(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = si("li"), t = si("span"), t.textContent = "✓", n = Lo(), o = Rm(i), s = Lo(), Xe(t, "class", "inner-item svelte-yuohum"), ft(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Xe(e, "class", "item svelte-yuohum"), Xe(e, "data-index", r = /*index*/
      l[26]), Xe(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Xe(e, "data-testid", "dropdown-option"), Xe(e, "role", "option"), Xe(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), ft(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), ft(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), ft(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(c, u) {
      ml(c, e, u), Xl(e, t), Xl(e, n), Xl(e, o), Xl(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ft(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Em(o, i), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Xe(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Xe(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Xe(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && ft(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ft(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && hl(e);
    }
  };
}
function Wm(l) {
  let e, t, n, i, o;
  Jr(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && wa(l)
  );
  return {
    c() {
      e = si("div"), t = Lo(), s && s.c(), n = zm(), Xe(e, "class", "reference");
    },
    m(r, a) {
      ml(r, e, a), l[20](e), ml(r, t, a), s && s.m(r, a), ml(r, n, a), i || (o = [
        Do(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        Do(
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
      12 && ro(s, 1)) : (s = wa(r), s.c(), ro(s, 1), s.m(n.parentNode, n)) : s && (qm(), ga(s, 1, 1, () => {
        s = null;
      }), Cm());
    },
    i(r) {
      ro(s);
    },
    o(r) {
      ga(s);
    },
    d(r) {
      r && (hl(e), hl(t), hl(n)), l[20](null), s && s.d(r), i = !1, Lm(o);
    }
  };
}
function Im(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, g, m, b, p, w, h;
  function k() {
    const { top: A, bottom: O } = m.getBoundingClientRect();
    t(16, u = A), t(17, _ = h - O);
  }
  let S = null;
  function C() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        k(), S = null;
      },
      10
    ));
  }
  const y = Am();
  function v() {
    t(11, h = window.innerHeight);
  }
  function M(A) {
    da[A ? "unshift" : "push"](() => {
      m = A, t(6, m);
    });
  }
  const z = (A) => y("change", A);
  function W(A) {
    da[A ? "unshift" : "push"](() => {
      b = A, t(7, b);
    });
  }
  return l.$$set = (A) => {
    "choices" in A && t(0, o = A.choices), "filtered_indices" in A && t(1, s = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (b && f.length > 0) {
          let O = b.querySelectorAll("li");
          for (const N of Array.from(O))
            if (N.getAttribute("data-index") === f[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, N.offsetTop);
              break;
            }
        }
        k();
        const A = t(15, i = m.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, g = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, w = _), t(9, p = null)) : (t(9, p = `${_ + d}px`), t(10, w = u - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    c,
    m,
    b,
    g,
    p,
    w,
    h,
    C,
    y,
    n,
    i,
    u,
    _,
    d,
    v,
    M,
    z,
    W
  ];
}
class Tm extends ym {
  constructor(e) {
    super(), Bm(this, e, Im, Wm, Mm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Hm(l, e) {
  return (l % e + e) % e;
}
function va(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Xm(l, e, t) {
  l("change", e), t || l("input");
}
function Ym(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Hm(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Fm,
  append: en,
  attr: He,
  binding_callbacks: jm,
  check_outros: Um,
  create_component: Mo,
  destroy_component: Eo,
  detach: Oo,
  element: Rn,
  group_outros: Om,
  init: Vm,
  insert: Vo,
  listen: nl,
  mount_component: Ro,
  run_all: Nm,
  safe_not_equal: Pm,
  set_data: Zm,
  set_input_value: ka,
  space: fo,
  text: Gm,
  toggle_class: Mn,
  transition_in: An,
  transition_out: cl
} = window.__gradio__svelte__internal, { onMount: Km } = window.__gradio__svelte__internal, { createEventDispatcher: Jm, afterUpdate: Qm } = window.__gradio__svelte__internal;
function xm(l) {
  let e;
  return {
    c() {
      e = Gm(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Vo(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Zm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Oo(e);
    }
  };
}
function ya(l) {
  let e, t, n;
  return t = new Io({}), {
    c() {
      e = Rn("div"), Mo(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      Vo(i, e, o), Ro(t, e, null), n = !0;
    },
    i(i) {
      n || (An(t.$$.fragment, i), n = !0);
    },
    o(i) {
      cl(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Oo(e), Eo(t);
    }
  };
}
function $m(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, g;
  t = new Ka({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [xm] },
      $$scope: { ctx: l }
    }
  });
  let m = !/*disabled*/
  l[3] && ya();
  return u = new Tm({
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
      e = Rn("div"), Mo(t.$$.fragment), n = fo(), i = Rn("div"), o = Rn("div"), s = Rn("div"), r = Rn("input"), f = fo(), m && m.c(), c = fo(), Mo(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), He(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), He(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], He(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], Mn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), He(s, "class", "secondary-wrap svelte-1m1zvyj"), He(o, "class", "wrap-inner svelte-1m1zvyj"), Mn(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), He(i, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), Mn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(b, p) {
      Vo(b, e, p), Ro(t, e, null), en(e, n), en(e, i), en(i, o), en(o, s), en(s, r), ka(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), en(s, f), m && m.m(s, null), en(i, c), Ro(u, i, null), _ = !0, d || (g = [
        nl(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        nl(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        nl(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        nl(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        nl(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(b, p) {
      const w = {};
      p[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      b[4]), p[0] & /*info*/
      2 && (w.info = /*info*/
      b[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: p, ctx: b }), t.$set(w), (!_ || p[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        b[12]
      ), (!_ || p[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        b[0]
      ), (!_ || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      b[3]), (!_ || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      b[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      b[9] && ka(
        r,
        /*input_text*/
        b[9]
      ), (!_ || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Mn(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? m && (Om(), cl(m, 1, 1, () => {
        m = null;
      }), Um()) : m ? p[0] & /*disabled*/
      8 && An(m, 1) : (m = ya(), m.c(), An(m, 1), m.m(s, null)), (!_ || p[0] & /*show_options*/
      4096) && Mn(
        o,
        "show_options",
        /*show_options*/
        b[12]
      );
      const h = {};
      p[0] & /*show_options*/
      4096 && (h.show_options = /*show_options*/
      b[12]), p[0] & /*choices*/
      4 && (h.choices = /*choices*/
      b[2]), p[0] & /*filtered_indices*/
      1024 && (h.filtered_indices = /*filtered_indices*/
      b[10]), p[0] & /*disabled*/
      8 && (h.disabled = /*disabled*/
      b[3]), p[0] & /*selected_index*/
      2048 && (h.selected_indices = /*selected_index*/
      b[11] === null ? [] : [
        /*selected_index*/
        b[11]
      ]), p[0] & /*active_index*/
      16384 && (h.active_index = /*active_index*/
      b[14]), u.$set(h), (!_ || p[0] & /*container*/
      32) && Mn(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      _ || (An(t.$$.fragment, b), An(m), An(u.$$.fragment, b), _ = !0);
    },
    o(b) {
      cl(t.$$.fragment, b), cl(m), cl(u.$$.fragment, b), _ = !1;
    },
    d(b) {
      b && Oo(e), Eo(t), l[29](null), m && m.d(), Eo(u), d = !1, Nm(g);
    }
  };
}
function eg(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: g = !0 } = e, m, b = !1, p, w, h = "", k = "", S = !1, C = [], y = null, v = null, M;
  const z = Jm();
  o ? (M = a.map((E) => E[1]).indexOf(o), v = M, v === -1 ? (s = o, v = null) : ([h, s] = a[v], k = h), A()) : a.length > 0 && (M = 0, v = 0, [h, o] = a[v], s = o, k = h);
  function W() {
    t(13, p = a.map((E) => E[0])), t(24, w = a.map((E) => E[1]));
  }
  function A() {
    W(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, h = ""), t(11, v = null)) : w.includes(o) ? (t(9, h = p[w.indexOf(o)]), t(11, v = w.indexOf(o))) : d ? (t(9, h = o), t(11, v = null)) : (t(9, h = ""), t(11, v = null)), t(27, M = v);
  }
  function O(E) {
    if (t(11, v = parseInt(E.detail.target.dataset.index)), isNaN(v)) {
      t(11, v = null);
      return;
    }
    t(12, b = !1), t(14, y = null), m.blur();
  }
  function N(E) {
    t(10, C = a.map((U, P) => P)), t(12, b = !0), z("focus");
  }
  function J() {
    d ? t(20, o = h) : t(9, h = p[w.indexOf(o)]), t(12, b = !1), t(14, y = null), z("blur");
  }
  function x(E) {
    t(12, [b, y] = Ym(E, y, C), b, (t(14, y), t(2, a), t(23, f), t(6, d), t(9, h), t(10, C), t(8, m), t(25, k), t(11, v), t(27, M), t(26, S), t(24, w))), E.key === "Enter" && (y !== null ? (t(11, v = y), t(12, b = !1), m.blur(), t(14, y = null)) : p.includes(h) ? (t(11, v = p.indexOf(h)), t(12, b = !1), t(14, y = null), m.blur()) : d && (t(20, o = h), t(11, v = null), t(12, b = !1), t(14, y = null), m.blur()), z("enter", o));
  }
  Qm(() => {
    t(21, r = !1), t(26, S = !0);
  }), Km(() => {
    m.focus();
  });
  function fe() {
    h = this.value, t(9, h), t(11, v), t(27, M), t(26, S), t(2, a), t(24, w);
  }
  function R(E) {
    jm[E ? "unshift" : "push"](() => {
      m = E, t(8, m);
    });
  }
  const G = (E) => z("key_up", { key: E.key, input_value: h });
  return l.$$set = (E) => {
    "label" in E && t(0, n = E.label), "info" in E && t(1, i = E.info), "value" in E && t(20, o = E.value), "value_is_output" in E && t(21, r = E.value_is_output), "choices" in E && t(2, a = E.choices), "disabled" in E && t(3, c = E.disabled), "show_label" in E && t(4, u = E.show_label), "container" in E && t(5, _ = E.container), "allow_custom_value" in E && t(6, d = E.allow_custom_value), "filterable" in E && t(7, g = E.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && v !== M && v !== null && S && (t(9, [h, o] = a[v], h, (t(20, o), t(11, v), t(27, M), t(26, S), t(2, a), t(24, w))), t(27, M = v), z("select", {
      index: v,
      value: w[v],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (A(), Xm(z, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && W(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, C = va(a, h)), !d && C.length > 0 && t(14, y = C[0]), m == document.activeElement && t(12, b = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && h !== k && (t(10, C = va(a, h)), t(25, k = h), !d && C.length > 0 && t(14, y = C[0]));
  }, [
    n,
    i,
    a,
    c,
    u,
    _,
    d,
    g,
    m,
    h,
    C,
    v,
    b,
    p,
    y,
    z,
    O,
    N,
    J,
    x,
    o,
    r,
    s,
    f,
    w,
    k,
    S,
    M,
    fe,
    R,
    G
  ];
}
class tg extends Fm {
  constructor(e) {
    super(), Vm(
      this,
      e,
      eg,
      $m,
      Pm,
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
  SvelteComponent: ng,
  append: Ve,
  attr: Hn,
  check_outros: Ao,
  create_component: cn,
  destroy_component: un,
  detach: Gn,
  element: ut,
  group_outros: Wo,
  init: lg,
  insert: Kn,
  listen: ig,
  mount_component: _n,
  safe_not_equal: og,
  set_style: Xn,
  space: ll,
  text: No,
  toggle_class: Ca,
  transition_in: Ce,
  transition_out: Ye
} = window.__gradio__svelte__internal, { createEventDispatcher: sg } = window.__gradio__svelte__internal, { onMount: ag, onDestroy: rg } = window.__gradio__svelte__internal;
function Sa(l) {
  let e, t, n, i, o, s, r;
  const a = [cg, fg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = ut("div"), t = ut("button"), i.c(), Hn(t, "class", "icon svelte-d9x7u0"), Hn(t, "aria-label", "Lock label detail"), Ca(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), Xn(e, "margin-right", "8px");
    },
    m(u, _) {
      Kn(u, e, _), Ve(e, t), f[n].m(t, null), o = !0, s || (r = ig(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), s = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Wo(), Ye(f[d], 1, 1, () => {
        f[d] = null;
      }), Ao(), i = f[n], i || (i = f[n] = a[n](u), i.c()), Ce(i, 1), i.m(t, null)), (!o || _ & /*labelDetailLock*/
      4) && Ca(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (Ce(i), o = !0);
    },
    o(u) {
      Ye(i), o = !1;
    },
    d(u) {
      u && Gn(e), f[n].d(), s = !1, r();
    }
  };
}
function fg(l) {
  let e, t;
  return e = new O0({}), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function cg(l) {
  let e, t;
  return e = new I0({}), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function ug(l) {
  let e;
  return {
    c() {
      e = No("Cancel");
    },
    m(t, n) {
      Kn(t, e, n);
    },
    d(t) {
      t && Gn(e);
    }
  };
}
function za(l) {
  let e, t, n;
  return t = new Bo({
    props: {
      variant: "stop",
      $$slots: { default: [_g] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = ut("div"), cn(t.$$.fragment), Xn(e, "margin-right", "8px");
    },
    m(i, o) {
      Kn(i, e, o), _n(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Ce(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Gn(e), un(t);
    }
  };
}
function _g(l) {
  let e;
  return {
    c() {
      e = No("Remove");
    },
    m(t, n) {
      Kn(t, e, n);
    },
    d(t) {
      t && Gn(e);
    }
  };
}
function dg(l) {
  let e;
  return {
    c() {
      e = No("OK");
    },
    m(t, n) {
      Kn(t, e, n);
    },
    d(t) {
      t && Gn(e);
    }
  };
}
function hg(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, g, m, b, p, w = !/*showRemove*/
  l[4] && Sa(l);
  s = new tg({
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
  ), f = new am({
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
  ), _ = new Bo({
    props: {
      $$slots: { default: [ug] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let h = (
    /*showRemove*/
    l[4] && za(l)
  );
  return b = new Bo({
    props: {
      variant: "primary",
      $$slots: { default: [dg] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = ut("div"), t = ut("div"), n = ut("span"), w && w.c(), i = ll(), o = ut("div"), cn(s.$$.fragment), r = ll(), a = ut("div"), cn(f.$$.fragment), c = ll(), u = ut("div"), cn(_.$$.fragment), d = ll(), h && h.c(), g = ll(), m = ut("div"), cn(b.$$.fragment), Xn(o, "margin-right", "10px"), Xn(a, "margin-right", "40px"), Xn(a, "margin-bottom", "8px"), Xn(u, "margin-right", "8px"), Hn(n, "class", "model-content svelte-d9x7u0"), Hn(t, "class", "modal-container svelte-d9x7u0"), Hn(e, "class", "modal svelte-d9x7u0"), Hn(e, "id", "model-box-edit");
    },
    m(k, S) {
      Kn(k, e, S), Ve(e, t), Ve(t, n), w && w.m(n, null), Ve(n, i), Ve(n, o), _n(s, o, null), Ve(n, r), Ve(n, a), _n(f, a, null), Ve(n, c), Ve(n, u), _n(_, u, null), Ve(n, d), h && h.m(n, null), Ve(n, g), Ve(n, m), _n(b, m, null), p = !0;
    },
    p(k, [S]) {
      /*showRemove*/
      k[4] ? w && (Wo(), Ye(w, 1, 1, () => {
        w = null;
      }), Ao()) : w ? (w.p(k, S), S & /*showRemove*/
      16 && Ce(w, 1)) : (w = Sa(k), w.c(), Ce(w, 1), w.m(n, i));
      const C = {};
      S & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      k[0]), S & /*choices*/
      8 && (C.choices = /*choices*/
      k[3]), s.$set(C);
      const y = {};
      S & /*currentColor*/
      2 && (y.value = /*currentColor*/
      k[1]), f.$set(y);
      const v = {};
      S & /*$$scope*/
      262144 && (v.$$scope = { dirty: S, ctx: k }), _.$set(v), /*showRemove*/
      k[4] ? h ? (h.p(k, S), S & /*showRemove*/
      16 && Ce(h, 1)) : (h = za(k), h.c(), Ce(h, 1), h.m(n, g)) : h && (Wo(), Ye(h, 1, 1, () => {
        h = null;
      }), Ao());
      const M = {};
      S & /*$$scope*/
      262144 && (M.$$scope = { dirty: S, ctx: k }), b.$set(M);
    },
    i(k) {
      p || (Ce(w), Ce(s.$$.fragment, k), Ce(f.$$.fragment, k), Ce(_.$$.fragment, k), Ce(h), Ce(b.$$.fragment, k), p = !0);
    },
    o(k) {
      Ye(w), Ye(s.$$.fragment, k), Ye(f.$$.fragment, k), Ye(_.$$.fragment, k), Ye(h), Ye(b.$$.fragment, k), p = !1;
    },
    d(k) {
      k && Gn(e), w && w.d(), un(s), un(f), un(_), h && h.d(), un(b);
    }
  };
}
function mg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = sg();
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
  function g(S) {
    const { detail: C } = S;
    t(1, a = C);
  }
  function m(S) {
    d(S), _(1);
  }
  function b(S) {
    t(2, c = !c);
  }
  function p(S) {
    switch (S.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  ag(() => {
    document.addEventListener("keydown", p), t(0, i = n), t(1, a = r);
  }), rg(() => {
    document.removeEventListener("keydown", p);
  });
  const w = () => _(0), h = () => _(-1), k = () => _(1);
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
    g,
    m,
    b,
    n,
    s,
    r,
    w,
    h,
    k
  ];
}
class Po extends ng {
  constructor(e) {
    super(), lg(this, e, mg, hg, og, {
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
const me = (l, e, t) => Math.min(Math.max(l, e), t);
function co(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class uo {
  constructor(e, t, n, i, o, s, r, a, f, c, u, _, d = "rgb(255, 255, 255)", g = 0.5, m = "", b = "", p = 25, w = 8, h = 2, k = 4, S = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let y = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = me(y, -this._xmin, M - this._xmax), v = me(v, -this._ymin, z - this._ymax), this._xmin += y, this._ymin += v, this._xmax += y, this._ymax += v, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [y, v] = this.toBoxCoordinates(C.clientX, C.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, v = (v - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), v > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = v, this.creatingAnchorY = "ymin") : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = v : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = v : v < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = v, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = me(this._xmin, 0, y - this.minSize), this._ymin = me(this._ymin, 0, v - this.minSize), this._xmax = me(this._xmax, this.minSize, y), this._ymax = me(this._ymax, this.minSize, v), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > v ? (this._ymin -= this._ymax - v, this._ymax = v) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const y = C.clientX, v = C.clientY, M = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, A = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += M, this._ymin += z, this._xmin = me(this._xmin, 0, this._xmax - this.minSize), this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += M, this._ymin += z, this._xmax = me(this._xmax, this._xmin + this.minSize, W), this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += M, this._ymax += z, this._xmax = me(this._xmax, this._xmin + this.minSize, W), this._ymax = me(this._ymax, this._ymin + this.minSize, A);
            break;
          case 3:
            this._xmin += M, this._ymax += z, this._xmin = me(this._xmin, 0, this._xmax - this.minSize), this._ymax = me(this._ymax, this._ymin + this.minSize, A);
            break;
          case 4:
            this._ymin += z, this._ymin = me(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += M, this._xmax = me(this._xmax, this._xmin + this.minSize, W);
            break;
          case 6:
            this._ymax += z, this._ymax = me(this._ymax, this._ymin + this.minSize, A);
            break;
          case 7:
            this._xmin += M, this._xmin = me(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = i, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = S, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = w, this.thickness = h, this.selectedThickness = k, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = p, this.color = d, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.id = m, this.text = b;
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = co(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = co(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = co(this.color, 1);
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
const tn = [
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
], Yl = (l, e, t) => Math.min(Math.max(l, e), t);
class gg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, i = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Yl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Yl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Yl(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Yl(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += i, this.renderCallBack();
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
  SvelteComponent: bg,
  append: ct,
  attr: ke,
  binding_callbacks: wg,
  bubble: _o,
  check_outros: Yn,
  create_component: zt,
  destroy_component: qt,
  detach: kt,
  element: Ct,
  empty: pg,
  group_outros: Fn,
  init: vg,
  insert: yt,
  is_function: kg,
  listen: Fe,
  mount_component: Bt,
  noop: Qr,
  run_all: xr,
  safe_not_equal: yg,
  space: St,
  toggle_class: Fl,
  transition_in: ee,
  transition_out: re
} = window.__gradio__svelte__internal, { onMount: Cg, onDestroy: Sg, createEventDispatcher: zg } = window.__gradio__svelte__internal;
function qa(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, g, m, b, p;
  n = new i0({}), s = new _0({});
  let w = (
    /*showRemoveButton*/
    l[1] && Ba(l)
  ), h = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[14] && Da(l);
  return u = new T_({}), g = new k_({}), {
    c() {
      e = Ct("span"), t = Ct("button"), zt(n.$$.fragment), i = St(), o = Ct("button"), zt(s.$$.fragment), r = St(), w && w.c(), a = St(), h && h.c(), f = St(), c = Ct("button"), zt(u.$$.fragment), _ = St(), d = Ct("button"), zt(g.$$.fragment), ke(t, "class", "icon svelte-3rql59"), ke(t, "aria-label", "Create box"), Fl(
        t,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].creation
      ), ke(o, "class", "icon svelte-3rql59"), ke(o, "aria-label", "Edit boxes"), Fl(
        o,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].drag
      ), ke(c, "class", "icon svelte-3rql59"), ke(c, "aria-label", "Rotate counterclockwise"), ke(d, "class", "icon svelte-3rql59"), ke(d, "aria-label", "Rotate clockwise"), ke(e, "class", "canvas-control svelte-3rql59");
    },
    m(k, S) {
      yt(k, e, S), ct(e, t), Bt(n, t, null), ct(e, i), ct(e, o), Bt(s, o, null), ct(e, r), w && w.m(e, null), ct(e, a), h && h.m(e, null), ct(e, f), ct(e, c), Bt(u, c, null), ct(e, _), ct(e, d), Bt(g, d, null), m = !0, b || (p = [
        Fe(
          t,
          "click",
          /*click_handler*/
          l[38]
        ),
        Fe(
          o,
          "click",
          /*click_handler_1*/
          l[39]
        ),
        Fe(
          c,
          "click",
          /*click_handler_4*/
          l[42]
        ),
        Fe(
          d,
          "click",
          /*click_handler_5*/
          l[43]
        )
      ], b = !0);
    },
    p(k, S) {
      (!m || S[0] & /*mode, Mode*/
      1152) && Fl(
        t,
        "selected",
        /*mode*/
        k[10] === /*Mode*/
        k[7].creation
      ), (!m || S[0] & /*mode, Mode*/
      1152) && Fl(
        o,
        "selected",
        /*mode*/
        k[10] === /*Mode*/
        k[7].drag
      ), /*showRemoveButton*/
      k[1] ? w ? (w.p(k, S), S[0] & /*showRemoveButton*/
      2 && ee(w, 1)) : (w = Ba(k), w.c(), ee(w, 1), w.m(e, a)) : w && (Fn(), re(w, 1, 1, () => {
        w = null;
      }), Yn()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[14] ? h ? (h.p(k, S), S[0] & /*disableEditBoxes, labelDetailLock*/
      16416 && ee(h, 1)) : (h = Da(k), h.c(), ee(h, 1), h.m(e, f)) : h && (Fn(), re(h, 1, 1, () => {
        h = null;
      }), Yn());
    },
    i(k) {
      m || (ee(n.$$.fragment, k), ee(s.$$.fragment, k), ee(w), ee(h), ee(u.$$.fragment, k), ee(g.$$.fragment, k), m = !0);
    },
    o(k) {
      re(n.$$.fragment, k), re(s.$$.fragment, k), re(w), re(h), re(u.$$.fragment, k), re(g.$$.fragment, k), m = !1;
    },
    d(k) {
      k && kt(e), qt(n), qt(s), w && w.d(), h && h.d(), qt(u), qt(g), b = !1, xr(p);
    }
  };
}
function Ba(l) {
  let e, t, n, i, o;
  return t = new v0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-3rql59"), ke(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      yt(s, e, r), Bt(t, e, null), n = !0, i || (o = Fe(
        e,
        "click",
        /*click_handler_2*/
        l[40]
      ), i = !0);
    },
    p: Qr,
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && kt(e), qt(t), i = !1, o();
    }
  };
}
function Da(l) {
  let e, t, n, i, o;
  return t = new B0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-3rql59"), ke(e, "aria-label", "Edit label");
    },
    m(s, r) {
      yt(s, e, r), Bt(t, e, null), n = !0, i || (o = Fe(
        e,
        "click",
        /*click_handler_3*/
        l[41]
      ), i = !0);
    },
    p: Qr,
    i(s) {
      n || (ee(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && kt(e), qt(t), i = !1, o();
    }
  };
}
function La(l) {
  let e, t;
  return e = new Po({
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
        l[0].boxes.length ? wn(
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
    l[44]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Bt(e, n, i), t = !0;
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
      n[0].boxes.length ? wn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function Ma(l) {
  let e, t;
  return e = new Po({
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
        l[0].boxes.length ? wn(
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
    l[45]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Bt(e, n, i), t = !0;
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
      n[0].boxes.length ? wn(
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
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function Ea(l) {
  let e, t;
  return e = new Po({
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
        l[0].boxes.length ? wn(
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
    l[46]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Bt(e, n, i), t = !0;
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
      n[0].boxes.length ? wn(
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
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function qg(l) {
  let e, t, n, i, o, s, r, a, f, c, u = (
    /*interactive*/
    l[2] && qa(l)
  ), _ = (
    /*editModalVisible*/
    l[11] && La(l)
  ), d = (
    /*newModalVisible*/
    l[12] && Ma(l)
  ), g = (
    /*editDefaultLabelVisible*/
    l[13] && Ea(l)
  );
  return {
    c() {
      e = Ct("div"), t = Ct("canvas"), n = St(), u && u.c(), i = St(), _ && _.c(), o = St(), d && d.c(), s = St(), g && g.c(), r = pg(), ke(t, "class", "canvas-annotator svelte-3rql59"), ke(e, "class", "canvas-container svelte-3rql59"), ke(e, "tabindex", "-1");
    },
    m(m, b) {
      yt(m, e, b), ct(e, t), l[37](t), yt(m, n, b), u && u.m(m, b), yt(m, i, b), _ && _.m(m, b), yt(m, o, b), d && d.m(m, b), yt(m, s, b), g && g.m(m, b), yt(m, r, b), a = !0, f || (c = [
        Fe(
          t,
          "pointerdown",
          /*handlePointerDown*/
          l[15]
        ),
        Fe(
          t,
          "pointerup",
          /*handlePointerUp*/
          l[16]
        ),
        Fe(t, "pointermove", function() {
          kg(
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
        Fe(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[21]
        ),
        Fe(
          t,
          "wheel",
          /*handleMouseWheel*/
          l[18]
        ),
        Fe(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[27]
        ),
        Fe(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[28]
        )
      ], f = !0);
    },
    p(m, b) {
      l = m, /*interactive*/
      l[2] ? u ? (u.p(l, b), b[0] & /*interactive*/
      4 && ee(u, 1)) : (u = qa(l), u.c(), ee(u, 1), u.m(i.parentNode, i)) : u && (Fn(), re(u, 1, 1, () => {
        u = null;
      }), Yn()), /*editModalVisible*/
      l[11] ? _ ? (_.p(l, b), b[0] & /*editModalVisible*/
      2048 && ee(_, 1)) : (_ = La(l), _.c(), ee(_, 1), _.m(o.parentNode, o)) : _ && (Fn(), re(_, 1, 1, () => {
        _ = null;
      }), Yn()), /*newModalVisible*/
      l[12] ? d ? (d.p(l, b), b[0] & /*newModalVisible*/
      4096 && ee(d, 1)) : (d = Ma(l), d.c(), ee(d, 1), d.m(s.parentNode, s)) : d && (Fn(), re(d, 1, 1, () => {
        d = null;
      }), Yn()), /*editDefaultLabelVisible*/
      l[13] ? g ? (g.p(l, b), b[0] & /*editDefaultLabelVisible*/
      8192 && ee(g, 1)) : (g = Ea(l), g.c(), ee(g, 1), g.m(r.parentNode, r)) : g && (Fn(), re(g, 1, 1, () => {
        g = null;
      }), Yn());
    },
    i(m) {
      a || (ee(u), ee(_), ee(d), ee(g), a = !0);
    },
    o(m) {
      re(u), re(_), re(d), re(g), a = !1;
    },
    d(m) {
      m && (kt(e), kt(n), kt(i), kt(o), kt(s), kt(r)), l[37](null), u && u.d(m), _ && _.d(m), d && d.d(m), g && g.d(m), f = !1, xr(c);
    }
  };
}
function jl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function wn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function Bg(l, e, t) {
  var n;
  (function(q) {
    q[q.creation = 0] = "creation", q[q.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: g = !1 } = e, { singleBox: m = !1 } = e, { showRemoveButton: b = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: w = !1 } = e;
  b === null && (b = g);
  let h, k, S = null, C = -1, y = n.drag, v = new gg(P);
  u !== null && u.boxes.length == 0 && (y = n.creation);
  let M = 0, z = 0, W = 0, A = 0, O = 1, N = 0, J = 0, x = !1, fe = !1, R = !1, G = w, E = { label: "", color: "" };
  const U = zg();
  function P() {
    if (k) {
      if (k.clearRect(0, 0, h.width, h.height), k.save(), k.translate(v.offsetX, v.offsetY), k.scale(v.scale, v.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            k.drawImage(S, 0, 0, N, J);
            break;
          case 1:
            k.translate(N, 0), k.rotate(Math.PI / 2), k.drawImage(S, 0, 0, J, N);
            break;
          case 2:
            k.translate(N, J), k.rotate(Math.PI), k.drawImage(S, 0, 0, N, J);
            break;
          case 3:
            k.translate(0, J), k.rotate(-Math.PI / 2), k.drawImage(S, 0, 0, J, N);
            break;
        }
        k.restore();
      }
      for (const q of u.boxes.slice().reverse())
        q.render(k);
    }
  }
  function ae(q) {
    t(9, C = q), u.boxes.forEach((F) => {
      F.setSelected(!1);
    }), q >= 0 && q < u.boxes.length && u.boxes[q].setSelected(!0), P();
  }
  function we(q) {
    console.log("handlePointerDown called. Current mode:", y), o && (q.target instanceof Element && q.target.hasPointerCapture(q.pointerId) && q.target.releasePointerCapture(q.pointerId), y === n.creation ? ne(q) : y === n.drag && I(q));
  }
  function I(q) {
    const F = h.getBoundingClientRect(), j = q.clientX - F.left, V = q.clientY - F.top;
    let le = !1;
    for (const [ie, ce] of u.boxes.entries()) {
      const It = ce.indexOfPointInsideHandle(j, V);
      if (It >= 0) {
        le = !0, ae(ie), ce.startResize(It, q);
        return;
      }
    }
    for (const [ie, ce] of u.boxes.entries())
      if (ce.isPointInsideBox(j, V)) {
        le = !0, ae(ie), ce.startDrag(q);
        return;
      }
    m || ae(-1), le || v.startDrag(q);
  }
  function Ge(q) {
    U("change");
  }
  function L(q) {
    if (u === null || y !== n.drag)
      return;
    const F = h.getBoundingClientRect(), j = q.clientX - F.left, V = q.clientY - F.top;
    for (const [le, ie] of u.boxes.entries()) {
      const ce = ie.indexOfPointInsideHandle(j, V);
      if (ce >= 0) {
        t(8, h.style.cursor = ie.resizeHandles[ce].cursor, h);
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
  function $(q) {
    q.preventDefault();
    const F = 1 / (1 + q.deltaY / 1e3 * 0.5), j = parseFloat((v.scale * F).toFixed(2)), V = j < 1 ? 1 : j, le = h.getBoundingClientRect(), ie = q.clientX - le.left, ce = q.clientY - le.top, It = (ie - v.offsetX) / v.scale, Jt = (ce - v.offsetY) / v.scale;
    v.offsetX = ie - It * V, v.offsetY = ce - Jt * V, v.scale = V, P();
  }
  function ne(q) {
    const F = h.getBoundingClientRect(), j = (q.clientX - F.left - v.offsetX) / O / v.scale, V = (q.clientY - F.top - v.offsetY) / O / v.scale;
    console.log("createBox initial x, y:", j, V);
    let le;
    d.length > 0 ? le = jl(d[0]) : m ? u.boxes.length > 0 ? le = u.boxes[0].color : le = tn[0] : le = tn[u.boxes.length % tn.length];
    const ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ce = "";
    for (let yl = 0; yl < 12; yl++)
      ce += ie.charAt(Math.floor(Math.random() * ie.length));
    const It = "";
    let Jt = new uo(
      P,
      Ke,
      v,
      M,
      z,
      W,
      A,
      "",
      j,
      V,
      j,
      V,
      le,
      s,
      // ADDED: Pass id and text to the Box constructor
      ce,
      It,
      r,
      a,
      f,
      c
    );
    Jt.startCreating(q, F.left, F.top), m ? t(0, u.boxes = [Jt], u) : t(0, u.boxes = [Jt, ...u.boxes], u), ae(0), P(), U("change"), console.log("new box:", u.boxes);
  }
  function D() {
    t(10, y = n.creation), t(8, h.style.cursor = "crosshair", h);
  }
  function Re() {
    t(10, y = n.drag), t(8, h.style.cursor = "default", h);
  }
  function Ke() {
    C >= 0 && C < u.boxes.length && (u.boxes[C].getArea() < 1 ? B() : (g || (G ? pi() : t(12, fe = !0)), m && Re()));
  }
  function mt() {
    C >= 0 && C < u.boxes.length && !g && t(11, x = !0);
  }
  function Ae(q) {
    o && mt();
  }
  function Je(q) {
    t(11, x = !1);
    const { detail: F } = q;
    let j = F.label, V = F.color, le = F.ret;
    if (C >= 0 && C < u.boxes.length) {
      let ie = u.boxes[C];
      le == 1 ? (ie.label = j, ie.color = jl(V), P(), U("change")) : le == -1 && B();
    }
  }
  function Qe(q) {
    t(12, fe = !1);
    const { detail: F } = q;
    let j = F.label, V = F.color, le = F.ret, ie = F.lock;
    if (C >= 0 && C < u.boxes.length) {
      let ce = u.boxes[C];
      le == 1 ? (t(14, G = ie), E.label = j, E.color = V, ce.label = j, ce.color = jl(V), P(), U("change")) : B();
    }
  }
  function Kt(q) {
    t(13, R = !1);
    const { detail: F } = q;
    let j = F.label, V = F.color, le = F.ret, ie = F.lock;
    le == 1 && (t(14, G = ie), E.label = j, E.color = V);
  }
  function pi() {
    if (C >= 0 && C < u.boxes.length) {
      let q = u.boxes[C];
      q.label = E.label, E.color !== "" && (q.color = jl(E.color)), P(), U("change");
    }
  }
  function B() {
    C >= 0 && C < u.boxes.length && (u.boxes.splice(C, 1), ae(-1), m && D(), U("change"));
  }
  function st(q) {
    t(0, u.orientation = ((u.orientation + q) % 4 + 4) % 4, u), v.orientation = u.orientation, We();
    for (const F of u.boxes)
      F.onRotate(q);
    P();
  }
  function We() {
    if (h) {
      if (O = 1, t(8, h.width = h.clientWidth, h), v.setRotatedImage(S), S !== null) {
        if (v.imageRotatedWidth > h.width)
          O = h.width / v.imageRotatedWidth, N = Math.round(v.imageRotatedWidth * O), J = Math.round(v.imageRotatedHeight * O), M = 0, z = 0, W = N, A = J, t(8, h.height = J, h);
        else {
          N = v.imageRotatedWidth, J = v.imageRotatedHeight;
          var q = (h.width - N) / 2;
          M = q, z = 0, W = q + N, A = J, t(8, h.height = J, h);
        }
        v.imageWidth = N, v.imageHeight = J;
      } else
        M = 0, z = 0, W = h.width, A = h.height, t(8, h.height = h.clientHeight, h);
      if (v.resize(h.width, h.height, M, z), W > 0 && A > 0)
        for (const F of u.boxes)
          F.canvasXmin = M, F.canvasYmin = z, F.canvasXmax = W, F.canvasYmax = A, F.setScaleFactor(O);
      P(), U("change");
    }
  }
  const yn = new ResizeObserver(We);
  function vi() {
    if (u === null || !Array.isArray(u.boxes)) {
      u !== null && t(0, u.boxes = [], u);
      return;
    }
    const q = [];
    for (let F = 0; F < u.boxes.length; F++) {
      let j = u.boxes[F];
      if (j instanceof uo) {
        let V = j;
        V.canvasXmin = M, V.canvasYmin = z, V.canvasXmax = W, V.canvasYmax = A, V.setScaleFactor(v.scale), q.push(V);
      } else if (j && typeof j == "object") {
        let V = "", le = "", ie = "", ce = "";
        if (j.hasOwnProperty("color") ? (V = j.color, Array.isArray(V) && V.length === 3 && (V = `rgb(${V[0]}, ${V[1]}, ${V[2]})`)) : V = tn[F % tn.length], j.hasOwnProperty("label") && (le = j.label), j.hasOwnProperty("id"))
          ie = j.id;
        else {
          const Zo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let Go = "";
          for (let Ko = 0; Ko < 12; Ko++)
            Go += Zo.charAt(Math.floor(Math.random() * Zo.length));
          ie = Go;
        }
        j.hasOwnProperty("text") && (ce = j.text);
        const It = j.hasOwnProperty("xmin") ? j.xmin : 0, Jt = j.hasOwnProperty("ymin") ? j.ymin : 0, yl = j.hasOwnProperty("xmax") ? j.xmax : 0, uf = j.hasOwnProperty("ymax") ? j.ymax : 0, _f = j.hasOwnProperty("scaleFactor") ? j.scaleFactor : 1;
        let Ci = new uo(P, Ke, v, M, z, W, A, le, It, Jt, yl, uf, V, s, ie, ce, r, a, f, c);
        Ci.setScaleFactor(_f), Ci.applyUserScale(), q.push(Ci);
      } else
        console.error("Invalid box data format encountered:", j);
    }
    u !== null && t(0, u.boxes = q, u);
  }
  function Wt() {
    i !== null && (S === null || S.src != i) && (S = new Image(), S.src = i, S.onload = function() {
      We(), P();
    });
  }
  Cg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let q = 0; q < _.length; q++) {
          let F = tn[q % tn.length];
          d.push(wn(F));
        }
      E.label = _[0][0], E.color = d[0];
    }
    k = h.getContext("2d"), yn.observe(h), C < 0 && u !== null && u.boxes.length > 0 && ae(0), Wt(), We(), P();
  });
  function Cn() {
    document.addEventListener("keydown", H);
  }
  function ki() {
    document.removeEventListener("keydown", H);
  }
  Sg(() => {
    document.removeEventListener("keydown", H);
  });
  function yi(q) {
    wg[q ? "unshift" : "push"](() => {
      h = q, t(8, h);
    });
  }
  const Jn = () => D(), gt = () => Re(), Qn = () => B(), of = () => t(13, R = !0), sf = () => st(-1), af = () => st(1);
  function rf(q) {
    _o.call(this, l, q);
  }
  function ff(q) {
    _o.call(this, l, q);
  }
  function cf(q) {
    _o.call(this, l, q);
  }
  return l.$$set = (q) => {
    "imageUrl" in q && t(29, i = q.imageUrl), "interactive" in q && t(2, o = q.interactive), "boxAlpha" in q && t(30, s = q.boxAlpha), "boxMinSize" in q && t(31, r = q.boxMinSize), "handleSize" in q && t(32, a = q.handleSize), "boxThickness" in q && t(33, f = q.boxThickness), "boxSelectedThickness" in q && t(34, c = q.boxSelectedThickness), "value" in q && t(0, u = q.value), "choices" in q && t(3, _ = q.choices), "choicesColors" in q && t(4, d = q.choicesColors), "disableEditBoxes" in q && t(5, g = q.disableEditBoxes), "singleBox" in q && t(35, m = q.singleBox), "showRemoveButton" in q && t(1, b = q.showRemoveButton), "handlesCursor" in q && t(6, p = q.handlesCursor), "useDefaultLabel" in q && t(36, w = q.useDefaultLabel);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Wt(), vi(), We(), P());
  }, [
    u,
    b,
    o,
    _,
    d,
    g,
    p,
    n,
    h,
    C,
    y,
    x,
    fe,
    R,
    G,
    we,
    Ge,
    L,
    $,
    D,
    Re,
    Ae,
    Je,
    Qe,
    Kt,
    B,
    st,
    Cn,
    ki,
    i,
    s,
    r,
    a,
    f,
    c,
    m,
    w,
    yi,
    Jn,
    gt,
    Qn,
    of,
    sf,
    af,
    rf,
    ff,
    cf
  ];
}
class Dg extends bg {
  constructor(e) {
    super(), vg(
      this,
      e,
      Bg,
      qg,
      yg,
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
  SvelteComponent: Lg,
  add_flush_callback: Mg,
  bind: Eg,
  binding_callbacks: Rg,
  create_component: Ag,
  destroy_component: Wg,
  init: Ig,
  mount_component: Tg,
  safe_not_equal: Hg,
  transition_in: Xg,
  transition_out: Yg
} = window.__gradio__svelte__internal, { createEventDispatcher: Fg } = window.__gradio__svelte__internal;
function jg(l) {
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
    l[0]), e = new Dg({ props: o }), Rg.push(() => Eg(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[19]
    ), {
      c() {
        Ag(e.$$.fragment);
      },
      m(s, r) {
        Tg(e, s, r), n = !0;
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
        s[0], Mg(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Xg(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Yg(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Wg(e, s);
      }
    }
  );
}
function Ug(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: g } = e, { showRemoveButton: m } = e, { handlesCursor: b } = e, { useDefaultLabel: p } = e, w, h;
  const k = Fg();
  function S(y) {
    _ = y, t(0, _);
  }
  const C = () => k("change");
  return l.$$set = (y) => {
    "src" in y && t(16, n = y.src), "interactive" in y && t(1, i = y.interactive), "boxesAlpha" in y && t(2, o = y.boxesAlpha), "labelList" in y && t(3, s = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, f = y.handleSize), "boxThickness" in y && t(7, c = y.boxThickness), "boxSelectedThickness" in y && t(8, u = y.boxSelectedThickness), "value" in y && t(0, _ = y.value), "disableEditBoxes" in y && t(9, d = y.disableEditBoxes), "singleBox" in y && t(10, g = y.singleBox), "showRemoveButton" in y && t(11, m = y.showRemoveButton), "handlesCursor" in y && t(12, b = y.handlesCursor), "useDefaultLabel" in y && t(13, p = y.useDefaultLabel);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    196608) {
      t(14, w = n), t(17, h = n);
      const y = n;
      h1(y).then((v) => {
        h === y && t(14, w = v);
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
    g,
    m,
    b,
    p,
    w,
    k,
    n,
    h,
    S,
    C
  ];
}
class Og extends Lg {
  constructor(e) {
    super(), Ig(this, e, Ug, jg, Hg, {
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
class Ra {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Vg,
  add_flush_callback: ai,
  append: En,
  attr: ul,
  bind: ri,
  binding_callbacks: wl,
  bubble: il,
  check_outros: ln,
  create_component: Lt,
  create_slot: Ng,
  destroy_component: Mt,
  detach: dn,
  element: gl,
  empty: Pg,
  get_all_dirty_from_scope: Zg,
  get_slot_changes: Gg,
  group_outros: on,
  init: Kg,
  insert: hn,
  mount_component: Et,
  noop: Jg,
  safe_not_equal: Qg,
  space: nn,
  toggle_class: Aa,
  transition_in: Q,
  transition_out: te,
  update_slot_base: xg
} = window.__gradio__svelte__internal, { createEventDispatcher: $g, tick: e2 } = window.__gradio__svelte__internal;
function Wa(l) {
  let e, t;
  return e = new B1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [t2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      te(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function t2(l) {
  let e, t;
  return e = new fi({
    props: {
      Icon: Fu,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      te(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ia(l) {
  let e, t;
  return e = new fd({
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
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      te(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ta(l) {
  let e, t, n;
  return t = new fi({
    props: { Icon: xa, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[34]
  ), {
    c() {
      e = gl("div"), Lt(t.$$.fragment);
    },
    m(i, o) {
      hn(i, e, o), Et(t, e, null), n = !0;
    },
    p: Jg,
    i(i) {
      n || (Q(t.$$.fragment, i), n = !0);
    },
    o(i) {
      te(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && dn(e), Mt(t);
    }
  };
}
function Ha(l) {
  let e;
  const t = (
    /*#slots*/
    l[35].default
  ), n = Ng(
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
      1048576) && xg(
        n,
        t,
        i,
        /*$$scope*/
        i[51],
        e ? Gg(
          t,
          /*$$scope*/
          i[51],
          o,
          null
        ) : Zg(
          /*$$scope*/
          i[51]
        ),
        null
      );
    },
    i(i) {
      e || (Q(n, i), e = !0);
    },
    o(i) {
      te(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function n2(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Ha(l)
  );
  return {
    c() {
      n && n.c(), e = Pg();
    },
    m(i, o) {
      n && n.m(i, o), hn(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && Q(n, 1)) : (n = Ha(i), n.c(), Q(n, 1), n.m(e.parentNode, e)) : n && (on(), te(n, 1, 1, () => {
        n = null;
      }), ln());
    },
    i(i) {
      t || (Q(n), t = !0);
    },
    o(i) {
      te(n), t = !1;
    },
    d(i) {
      i && dn(e), n && n.d(i);
    }
  };
}
function Xa(l) {
  let e, t;
  return e = new Qh({
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
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
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
      t || (Q(e.$$.fragment, n), t = !0);
    },
    o(n) {
      te(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ya(l) {
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
    l[1]), t = new Og({ props: s }), wl.push(() => ri(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[49]
    ), {
      c() {
        e = gl("div"), Lt(t.$$.fragment), ul(e, "class", "image-frame svelte-1gjdske"), Aa(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        hn(r, e, a), Et(t, e, null), i = !0;
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
        32) && Aa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (Q(t.$$.fragment, r), i = !0);
      },
      o(r) {
        te(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && dn(e), Mt(t);
      }
    }
  );
}
function Fa(l) {
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
    l[0]), e = new zd({ props: o }), wl.push(() => ri(e, "active_source", i)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(s, r) {
        Et(e, s, r), n = !0;
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
        n || (Q(e.$$.fragment, s), n = !0);
      },
      o(s) {
        te(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Mt(e, s);
      }
    }
  );
}
function l2(l) {
  let e, t, n, i, o, s, r, a, f, c, u, _, d, g, m = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new qc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: $a,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Wa(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ia(l)
  ), h = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Ta(l)
  );
  function k(z) {
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
    $$slots: { default: [n2] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[27] !== void 0 && (C.uploading = /*uploading*/
  l[27]), /*dragging*/
  l[28] !== void 0 && (C.dragging = /*dragging*/
  l[28]), f = new sh({ props: C }), l[39](f), wl.push(() => ri(f, "uploading", k)), wl.push(() => ri(f, "dragging", S)), f.$on(
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
    l[0] === "webcam" && Xa(l)
  ), v = (
    /*value*/
    l[1] !== null && Ya(l)
  ), M = m && Fa(l);
  return {
    c() {
      Lt(e.$$.fragment), t = nn(), n = gl("div"), p && p.c(), i = nn(), w && w.c(), o = nn(), h && h.c(), s = nn(), r = gl("div"), a = gl("div"), Lt(f.$$.fragment), _ = nn(), y && y.c(), d = nn(), v && v.c(), g = nn(), M && M.c(), ul(n, "class", "icon-buttons svelte-1gjdske"), ul(a, "class", "upload-container svelte-1gjdske"), ul(r, "data-testid", "image"), ul(r, "class", "image-container svelte-1gjdske");
    },
    m(z, W) {
      Et(e, z, W), hn(z, t, W), hn(z, n, W), p && p.m(n, null), En(n, i), w && w.m(n, null), En(n, o), h && h.m(n, null), hn(z, s, W), hn(z, r, W), En(r, a), Et(f, a, null), En(a, _), y && y.m(a, null), En(a, d), v && v.m(a, null), En(r, g), M && M.m(r, null), b = !0;
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
      1026 && Q(p, 1)) : (p = Wa(z), p.c(), Q(p, 1), p.m(n, i)) : p && (on(), te(p, 1, 1, () => {
        p = null;
      }), ln()), /*showShareButton*/
      z[9] && /*value*/
      z[1] !== null ? w ? (w.p(z, W), W[0] & /*showShareButton, value*/
      514 && Q(w, 1)) : (w = Ia(z), w.c(), Q(w, 1), w.m(n, o)) : w && (on(), te(w, 1, 1, () => {
        w = null;
      }), ln()), /*showClearButton*/
      z[11] && /*value*/
      z[1] !== null && /*interactive*/
      z[7] ? h ? (h.p(z, W), W[0] & /*showClearButton, value, interactive*/
      2178 && Q(h, 1)) : (h = Ta(z), h.c(), Q(h, 1), h.m(n, null)) : h && (on(), te(h, 1, 1, () => {
        h = null;
      }), ln());
      const O = {};
      W[0] & /*value, active_source*/
      3 && (O.hidden = /*value*/
      z[1] !== null || /*active_source*/
      z[0] === "webcam"), W[0] & /*active_source*/
      1 && (O.filetype = /*active_source*/
      z[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (O.root = /*root*/
      z[6]), W[0] & /*max_file_size*/
      8388608 && (O.max_file_size = /*max_file_size*/
      z[23]), W[0] & /*sources*/
      16 && (O.disable_click = !/*sources*/
      z[4].includes("upload")), W[0] & /*cli_upload*/
      16777216 && (O.upload = /*cli_upload*/
      z[24]), W[0] & /*stream_handler*/
      33554432 && (O.stream_handler = /*stream_handler*/
      z[25]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      1048576 && (O.$$scope = { dirty: W, ctx: z }), !c && W[0] & /*uploading*/
      134217728 && (c = !0, O.uploading = /*uploading*/
      z[27], ai(() => c = !1)), !u && W[0] & /*dragging*/
      268435456 && (u = !0, O.dragging = /*dragging*/
      z[28], ai(() => u = !1)), f.$set(O), /*value*/
      z[1] === null && /*active_source*/
      z[0] === "webcam" ? y ? (y.p(z, W), W[0] & /*value, active_source*/
      3 && Q(y, 1)) : (y = Xa(z), y.c(), Q(y, 1), y.m(a, d)) : y && (on(), te(y, 1, 1, () => {
        y = null;
      }), ln()), /*value*/
      z[1] !== null ? v ? (v.p(z, W), W[0] & /*value*/
      2 && Q(v, 1)) : (v = Ya(z), v.c(), Q(v, 1), v.m(a, null)) : v && (on(), te(v, 1, 1, () => {
        v = null;
      }), ln()), W[0] & /*sources, value, interactive*/
      146 && (m = /*sources*/
      (z[4].length > 1 || /*sources*/
      z[4].includes("clipboard")) && /*value*/
      z[1] === null && /*interactive*/
      z[7]), m ? M ? (M.p(z, W), W[0] & /*sources, value, interactive*/
      146 && Q(M, 1)) : (M = Fa(z), M.c(), Q(M, 1), M.m(r, null)) : M && (on(), te(M, 1, 1, () => {
        M = null;
      }), ln());
    },
    i(z) {
      b || (Q(e.$$.fragment, z), Q(p), Q(w), Q(h), Q(f.$$.fragment, z), Q(y), Q(v), Q(M), b = !0);
    },
    o(z) {
      te(e.$$.fragment, z), te(p), te(w), te(h), te(f.$$.fragment, z), te(y), te(v), te(M), b = !1;
    },
    d(z) {
      z && (dn(t), dn(n), dn(s), dn(r)), Mt(e, z), p && p.d(), w && w.d(), h && h.d(), l[39](null), Mt(f), y && y.d(), v && v.d(), M && M.d();
    }
  };
}
function i2(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, st, We, yn) {
    function vi(Wt) {
      return Wt instanceof We ? Wt : new We(function(Cn) {
        Cn(Wt);
      });
    }
    return new (We || (We = Promise))(function(Wt, Cn) {
      function ki(gt) {
        try {
          Jn(yn.next(gt));
        } catch (Qn) {
          Cn(Qn);
        }
      }
      function yi(gt) {
        try {
          Jn(yn.throw(gt));
        } catch (Qn) {
          Cn(Qn);
        }
      }
      function Jn(gt) {
        gt.done ? Wt(gt.value) : vi(gt.value).then(ki, yi);
      }
      Jn((yn = yn.apply(B, st || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: g } = e, { showDownloadButton: m } = e, { showClearButton: b } = e, { boxesAlpha: p } = e, { labelList: w } = e, { labelColors: h } = e, { boxMinSize: k } = e, { handleSize: S } = e, { boxThickness: C } = e, { disableEditBoxes: y } = e, { singleBox: v } = e, { showRemoveButton: M } = e, { handlesCursor: z } = e, { boxSelectedThickness: W } = e, { max_file_size: A = null } = e, { cli_upload: O } = e, { stream_handler: N } = e, { useDefaultLabel: J } = e, x, fe = !1, { active_source: R = null } = e;
  function G({ detail: B }) {
    t(1, s = new Ra()), t(1, s.image = B, s), U("upload");
  }
  function E(B) {
    return o(this, void 0, void 0, function* () {
      const st = yield x.load_files([new File([B], "webcam.png")]), We = (st == null ? void 0 : st[0]) || null;
      We ? (t(1, s = new Ra()), t(1, s.image = We, s)) : t(1, s = null), yield e2(), U("change");
    });
  }
  const U = $g();
  let P = !1;
  function ae(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          x.paste_clipboard();
          break;
      }
    });
  }
  function we() {
    t(1, s = null), U("clear"), U("change");
  }
  const I = async (B) => B === null ? "" : `<img src="${await J_(B.image)}" />`;
  function Ge(B) {
    il.call(this, l, B);
  }
  function L(B) {
    il.call(this, l, B);
  }
  function H(B) {
    wl[B ? "unshift" : "push"](() => {
      x = B, t(29, x);
    });
  }
  function $(B) {
    fe = B, t(27, fe);
  }
  function ne(B) {
    P = B, t(28, P);
  }
  function D(B) {
    il.call(this, l, B);
  }
  const Re = (B) => E(B.detail), Ke = (B) => E(B.detail);
  function mt(B) {
    il.call(this, l, B);
  }
  function Ae(B) {
    il.call(this, l, B);
  }
  const Je = (B) => E(B.detail);
  function Qe(B) {
    s = B, t(1, s);
  }
  const Kt = () => U("change");
  function pi(B) {
    R = B, t(0, R), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, g = B.showShareButton), "showDownloadButton" in B && t(10, m = B.showDownloadButton), "showClearButton" in B && t(11, b = B.showClearButton), "boxesAlpha" in B && t(12, p = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, h = B.labelColors), "boxMinSize" in B && t(15, k = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "boxThickness" in B && t(17, C = B.boxThickness), "disableEditBoxes" in B && t(18, y = B.disableEditBoxes), "singleBox" in B && t(19, v = B.singleBox), "showRemoveButton" in B && t(20, M = B.showRemoveButton), "handlesCursor" in B && t(21, z = B.handlesCursor), "boxSelectedThickness" in B && t(22, W = B.boxSelectedThickness), "max_file_size" in B && t(23, A = B.max_file_size), "cli_upload" in B && t(24, O = B.cli_upload), "stream_handler" in B && t(25, N = B.stream_handler), "useDefaultLabel" in B && t(26, J = B.useDefaultLabel), "active_source" in B && t(0, R = B.active_source), "$$scope" in B && t(51, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    134217728 && fe && we(), l.$$.dirty[0] & /*dragging*/
    268435456 && U("drag", P), l.$$.dirty[0] & /*active_source, sources*/
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
    g,
    m,
    b,
    p,
    w,
    h,
    k,
    S,
    C,
    y,
    v,
    M,
    z,
    W,
    A,
    O,
    N,
    J,
    fe,
    P,
    x,
    G,
    E,
    U,
    ae,
    we,
    n,
    I,
    Ge,
    L,
    H,
    $,
    ne,
    D,
    Re,
    Ke,
    mt,
    Ae,
    Je,
    Qe,
    Kt,
    pi,
    i
  ];
}
class o2 extends Vg {
  constructor(e) {
    super(), Kg(
      this,
      e,
      i2,
      l2,
      Qg,
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
  SvelteComponent: s2,
  attr: Kl,
  detach: $r,
  element: ef,
  init: a2,
  insert: tf,
  noop: ja,
  safe_not_equal: r2,
  src_url_equal: Ua,
  toggle_class: Ot
} = window.__gradio__svelte__internal;
function Oa(l) {
  let e, t;
  return {
    c() {
      e = ef("img"), Ua(e.src, t = /*value*/
      l[0].url) || Kl(e, "src", t), Kl(e, "alt", "");
    },
    m(n, i) {
      tf(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Ua(e.src, t = /*value*/
      n[0].url) && Kl(e, "src", t);
    },
    d(n) {
      n && $r(e);
    }
  };
}
function f2(l) {
  let e, t = (
    /*value*/
    l[0] && Oa(l)
  );
  return {
    c() {
      e = ef("div"), t && t.c(), Kl(e, "class", "container svelte-1sgcyba"), Ot(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Ot(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Ot(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Ot(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      tf(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Oa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Ot(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Ot(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Ot(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Ot(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: ja,
    o: ja,
    d(n) {
      n && $r(e), t && t.d();
    }
  };
}
function c2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class T2 extends s2 {
  constructor(e) {
    super(), a2(this, e, c2, f2, r2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: u2,
  add_flush_callback: Va,
  assign: _2,
  bind: Na,
  binding_callbacks: Pa,
  check_outros: d2,
  create_component: pn,
  destroy_component: vn,
  detach: nf,
  empty: h2,
  flush: K,
  get_spread_object: m2,
  get_spread_update: g2,
  group_outros: b2,
  init: w2,
  insert: lf,
  mount_component: kn,
  safe_not_equal: p2,
  space: v2,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function k2(l) {
  let e, t;
  return e = new lu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [S2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      kn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function y2(l) {
  let e, t;
  return e = new sr({
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
      pn(e.$$.fragment);
    },
    m(n, i) {
      kn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function C2(l) {
  let e, t;
  return e = new sr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      kn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      1 && (o.i18n = /*gradio*/
      n[31].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function S2(l) {
  let e, t;
  return e = new $a({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      kn(e, n, i), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function z2(l) {
  let e, t, n, i;
  const o = [C2, y2, k2], s = [];
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
      t.c(), n = h2();
    },
    m(a, f) {
      s[e].m(a, f), lf(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, f) : (b2(), At(s[c], 1, 1, () => {
        s[c] = null;
      }), d2(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      At(t), i = !1;
    },
    d(a) {
      a && nf(n), s[e].d(a);
    }
  };
}
function q2(l) {
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
    a = _2(a, r[_]);
  e = new c1({ props: a });
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
    $$slots: { default: [z2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[33] !== void 0 && (u.active_source = /*active_source*/
    l[33]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new o2({ props: u }), Pa.push(() => Na(n, "active_source", f)), Pa.push(() => Na(n, "value", c)), n.$on(
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
        pn(e.$$.fragment), t = v2(), pn(n.$$.fragment);
      },
      m(_, d) {
        kn(e, _, d), lf(_, t, d), kn(n, _, d), s = !0;
      },
      p(_, d) {
        const g = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? g2(r, [
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
          2 && m2(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(g);
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
        _[33], Va(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, m.value = /*value*/
        _[0], Va(() => o = !1)), n.$set(m);
      },
      i(_) {
        s || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), s = !0);
      },
      o(_) {
        At(e.$$.fragment, _), At(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && nf(t), vn(e, _), vn(n, _);
      }
    }
  );
}
function B2(l) {
  let e, t;
  return e = new Df({
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
      $$slots: { default: [q2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      kn(e, n, i), t = !0;
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
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function D2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: h } = e, { show_clear_button: k } = e, { interactive: S } = e, { boxes_alpha: C } = e, { label_list: y } = e, { label_colors: v } = e, { box_min_size: M } = e, { handle_size: z } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: O } = e, { single_box: N } = e, { show_remove_button: J } = e, { handles_cursor: x } = e, { use_default_label: fe } = e, { gradio: R } = e, G, E = null;
  function U(D) {
    E = D, t(33, E);
  }
  function P(D) {
    s = D, t(0, s);
  }
  const ae = () => R.dispatch("change"), we = () => R.dispatch("edit"), I = () => {
    R.dispatch("clear");
  }, Ge = ({ detail: D }) => t(32, G = D), L = () => R.dispatch("upload"), H = ({ detail: D }) => R.dispatch("select", D), $ = ({ detail: D }) => R.dispatch("share", D), ne = ({ detail: D }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), R.dispatch("error", D);
  };
  return l.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, i = D.elem_classes), "visible" in D && t(4, o = D.visible), "value" in D && t(0, s = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, d = D.container), "scale" in D && t(12, g = D.scale), "min_width" in D && t(13, m = D.min_width), "loading_status" in D && t(1, b = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, w = D.show_download_button), "show_share_button" in D && t(16, h = D.show_share_button), "show_clear_button" in D && t(17, k = D.show_clear_button), "interactive" in D && t(18, S = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, y = D.label_list), "label_colors" in D && t(21, v = D.label_colors), "box_min_size" in D && t(22, M = D.box_min_size), "handle_size" in D && t(23, z = D.handle_size), "box_thickness" in D && t(24, W = D.box_thickness), "box_selected_thickness" in D && t(25, A = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, O = D.disable_edit_boxes), "single_box" in D && t(27, N = D.single_box), "show_remove_button" in D && t(28, J = D.show_remove_button), "handles_cursor" in D && t(29, x = D.handles_cursor), "use_default_label" in D && t(30, fe = D.use_default_label), "gradio" in D && t(31, R = D.gradio);
  }, [
    s,
    b,
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
    g,
    m,
    p,
    w,
    h,
    k,
    S,
    C,
    y,
    v,
    M,
    z,
    W,
    A,
    O,
    N,
    J,
    x,
    fe,
    R,
    G,
    E,
    U,
    P,
    ae,
    we,
    I,
    Ge,
    L,
    H,
    $,
    ne
  ];
}
class H2 extends u2 {
  constructor(e) {
    super(), w2(
      this,
      e,
      D2,
      B2,
      p2,
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
    this.$$set({ elem_id: e }), K();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), K();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), K();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), K();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), K();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), K();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), K();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), K();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), K();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), K();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), K();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), K();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), K();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), K();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), K();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), K();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), K();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), K();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), K();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), K();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), K();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), K();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), K();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), K();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), K();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), K();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), K();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), K();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), K();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), K();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), K();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), K();
  }
}
export {
  T2 as BaseExample,
  H2 as default
};
