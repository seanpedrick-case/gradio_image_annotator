const {
  SvelteComponent: af,
  assign: rf,
  create_slot: ff,
  detach: cf,
  element: uf,
  get_all_dirty_from_scope: _f,
  get_slot_changes: df,
  get_spread_update: hf,
  init: mf,
  insert: gf,
  safe_not_equal: bf,
  set_dynamic_element_data: Ns,
  set_style: Ie,
  toggle_class: at,
  transition_in: Va,
  transition_out: Oa,
  update_slot_base: wf
} = window.__gradio__svelte__internal;
function pf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), s = ff(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let o = [
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
  for (let a = 0; a < o.length; a += 1)
    r = rf(r, o[a]);
  return {
    c() {
      e = uf(
        /*tag*/
        l[14]
      ), s && s.c(), Ns(
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
      gf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && wf(
        s,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? df(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : _f(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ns(
        /*tag*/
        a[14]
      )(e, r = hf(o, [
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
      n || (Va(s, a), n = !0);
    },
    o(a) {
      Oa(s, a), n = !1;
    },
    d(a) {
      a && cf(e), s && s.d(a);
    }
  };
}
function vf(l) {
  let e, t = (
    /*tag*/
    l[14] && pf(l)
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
      e || (Va(t, n), e = !0);
    },
    o(n) {
      Oa(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function kf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: g = !1 } = e, { container: m = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: w = null } = e, { min_width: h = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const S = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, s = C.height), "width" in C && t(1, o = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, g = C.explicit_call), "container" in C && t(9, m = C.container), "visible" in C && t(10, b = C.visible), "allow_overflow" in C && t(11, p = C.allow_overflow), "scale" in C && t(12, w = C.scale), "min_width" in C && t(13, h = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
  }, [
    s,
    o,
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
class yf extends af {
  constructor(e) {
    super(), mf(this, e, kf, vf, bf, {
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
  SvelteComponent: Cf,
  attr: Sf,
  create_slot: zf,
  detach: qf,
  element: Bf,
  get_all_dirty_from_scope: Df,
  get_slot_changes: Lf,
  init: Ef,
  insert: Mf,
  safe_not_equal: Rf,
  transition_in: Af,
  transition_out: Wf,
  update_slot_base: If
} = window.__gradio__svelte__internal;
function Tf(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = zf(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Bf("div"), i && i.c(), Sf(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Mf(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      i && i.p && (!t || o & /*$$scope*/
      1) && If(
        i,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Lf(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Df(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Af(i, s), t = !0);
    },
    o(s) {
      Wf(i, s), t = !1;
    },
    d(s) {
      s && qf(e), i && i.d(s);
    }
  };
}
function Hf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, n];
}
class Xf extends Cf {
  constructor(e) {
    super(), Ef(this, e, Hf, Tf, Rf, {});
  }
}
const {
  SvelteComponent: Yf,
  attr: Ps,
  check_outros: Ff,
  create_component: jf,
  create_slot: Uf,
  destroy_component: Vf,
  detach: jl,
  element: Of,
  empty: Nf,
  get_all_dirty_from_scope: Pf,
  get_slot_changes: Zf,
  group_outros: Gf,
  init: Kf,
  insert: Ul,
  mount_component: Jf,
  safe_not_equal: Qf,
  set_data: xf,
  space: $f,
  text: ec,
  toggle_class: Cn,
  transition_in: sl,
  transition_out: Vl,
  update_slot_base: tc
} = window.__gradio__svelte__internal;
function Zs(l) {
  let e, t;
  return e = new Xf({
    props: {
      $$slots: { default: [nc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      jf(e.$$.fragment);
    },
    m(n, i) {
      Jf(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (sl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vf(e, n);
    }
  };
}
function nc(l) {
  let e;
  return {
    c() {
      e = ec(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Ul(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && xf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && jl(e);
    }
  };
}
function lc(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[2].default
  ), o = Uf(
    s,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && Zs(l)
  );
  return {
    c() {
      e = Of("span"), o && o.c(), t = $f(), r && r.c(), n = Nf(), Ps(e, "data-testid", "block-info"), Ps(e, "class", "svelte-22c38v"), Cn(e, "sr-only", !/*show_label*/
      l[0]), Cn(e, "hide", !/*show_label*/
      l[0]), Cn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      Ul(a, e, f), o && o.m(e, null), Ul(a, t, f), r && r.m(a, f), Ul(a, n, f), i = !0;
    },
    p(a, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      8) && tc(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        i ? Zf(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : Pf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Cn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && Cn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && Cn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && sl(r, 1)) : (r = Zs(a), r.c(), sl(r, 1), r.m(n.parentNode, n)) : r && (Gf(), Vl(r, 1, 1, () => {
        r = null;
      }), Ff());
    },
    i(a) {
      i || (sl(o, a), sl(r), i = !0);
    },
    o(a) {
      Vl(o, a), Vl(r), i = !1;
    },
    d(a) {
      a && (jl(e), jl(t), jl(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function ic(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [s, o, n, i];
}
class Na extends Yf {
  constructor(e) {
    super(), Kf(this, e, ic, lc, Qf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: sc,
  append: yi,
  attr: yl,
  create_component: oc,
  destroy_component: ac,
  detach: rc,
  element: Gs,
  init: fc,
  insert: cc,
  mount_component: uc,
  safe_not_equal: _c,
  set_data: dc,
  space: hc,
  text: mc,
  toggle_class: It,
  transition_in: gc,
  transition_out: bc
} = window.__gradio__svelte__internal;
function wc(l) {
  let e, t, n, i, s, o;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Gs("label"), t = Gs("span"), oc(n.$$.fragment), i = hc(), s = mc(
        /*label*/
        l[0]
      ), yl(t, "class", "svelte-9gxdi0"), yl(e, "for", ""), yl(e, "data-testid", "block-label"), yl(e, "class", "svelte-9gxdi0"), It(e, "hide", !/*show_label*/
      l[2]), It(e, "sr-only", !/*show_label*/
      l[2]), It(
        e,
        "float",
        /*float*/
        l[4]
      ), It(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      cc(r, e, a), yi(e, t), uc(n, t, null), yi(e, i), yi(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && dc(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && It(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && It(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && It(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && It(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (gc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      bc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && rc(e), ac(n);
    }
  };
}
function pc(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, s, o, r];
}
class vc extends sc {
  constructor(e) {
    super(), fc(this, e, pc, wc, _c, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: kc,
  append: us,
  attr: vt,
  bubble: yc,
  create_component: Cc,
  destroy_component: Sc,
  detach: Pa,
  element: _s,
  init: zc,
  insert: Za,
  listen: qc,
  mount_component: Bc,
  safe_not_equal: Dc,
  set_data: Lc,
  set_style: Sn,
  space: Ec,
  text: Mc,
  toggle_class: Se,
  transition_in: Rc,
  transition_out: Ac
} = window.__gradio__svelte__internal;
function Ks(l) {
  let e, t;
  return {
    c() {
      e = _s("span"), t = Mc(
        /*label*/
        l[1]
      ), vt(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      Za(n, e, i), us(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Lc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Pa(e);
    }
  };
}
function Wc(l) {
  let e, t, n, i, s, o, r, a = (
    /*show_label*/
    l[2] && Ks(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = _s("button"), a && a.c(), t = Ec(), n = _s("div"), Cc(i.$$.fragment), vt(n, "class", "svelte-1lrphxw"), Se(
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
      ), Sn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Sn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Sn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      Za(f, e, c), a && a.m(e, null), us(e, t), us(e, n), Bc(i, n, null), s = !0, o || (r = qc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Ks(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
      16) && Se(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!s || c & /*size*/
      16) && Se(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!s || c & /*size*/
      16) && Se(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!s || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!s || c & /*label*/
      2) && vt(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && vt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && vt(
        e,
        "title",
        /*label*/
        f[1]
      ), (!s || c & /*pending*/
      8) && Se(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!s || c & /*padded*/
      32) && Se(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!s || c & /*highlight*/
      64) && Se(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!s || c & /*transparent*/
      512) && Se(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && Sn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Sn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && Sn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (Rc(i.$$.fragment, f), s = !0);
    },
    o(f) {
      Ac(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Pa(e), a && a.d(), Sc(i), o = !1, r();
    }
  };
}
function Ic(l, e, t) {
  let n, { Icon: i } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function p(w) {
    yc.call(this, l, w);
  }
  return l.$$set = (w) => {
    "Icon" in w && t(0, i = w.Icon), "label" in w && t(1, s = w.label), "show_label" in w && t(2, o = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, f = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, _ = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, g = w.transparent), "background" in w && t(10, m = w.background), "offset" in w && t(11, b = w.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    i,
    s,
    o,
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
class ri extends kc {
  constructor(e) {
    super(), zc(this, e, Ic, Wc, Dc, {
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
  SvelteComponent: Tc,
  append: Hc,
  attr: Ci,
  binding_callbacks: Xc,
  create_slot: Yc,
  detach: Fc,
  element: Js,
  get_all_dirty_from_scope: jc,
  get_slot_changes: Uc,
  init: Vc,
  insert: Oc,
  safe_not_equal: Nc,
  toggle_class: Tt,
  transition_in: Pc,
  transition_out: Zc,
  update_slot_base: Gc
} = window.__gradio__svelte__internal;
function Kc(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), s = Yc(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Js("div"), t = Js("div"), s && s.c(), Ci(t, "class", "icon svelte-3w3rth"), Ci(e, "class", "empty svelte-3w3rth"), Ci(e, "aria-label", "Empty value"), Tt(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), Tt(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), Tt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), Tt(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(o, r) {
      Oc(o, e, r), Hc(e, t), s && s.m(t, null), l[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && Gc(
        s,
        i,
        o,
        /*$$scope*/
        o[4],
        n ? Uc(
          i,
          /*$$scope*/
          o[4],
          r,
          null
        ) : jc(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Tt(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && Tt(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Tt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && Tt(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (Pc(s, o), n = !0);
    },
    o(o) {
      Zc(s, o), n = !1;
    },
    d(o) {
      o && Fc(e), s && s.d(o), l[6](null);
    }
  };
}
function Jc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: g } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > g + 2;
  }
  function c(u) {
    Xc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return l.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, s = u.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [o, r, a, n, s, i, c];
}
class Qc extends Tc {
  constructor(e) {
    super(), Vc(this, e, Jc, Kc, Nc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: xc,
  append: Qs,
  attr: ze,
  detach: $c,
  init: eu,
  insert: tu,
  noop: Si,
  safe_not_equal: nu,
  svg_element: zi
} = window.__gradio__svelte__internal;
function lu(l) {
  let e, t, n;
  return {
    c() {
      e = zi("svg"), t = zi("path"), n = zi("circle"), ze(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), ze(n, "cx", "12"), ze(n, "cy", "13"), ze(n, "r", "4"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "1.5"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-camera");
    },
    m(i, s) {
      tu(i, e, s), Qs(e, t), Qs(e, n);
    },
    p: Si,
    i: Si,
    o: Si,
    d(i) {
      i && $c(e);
    }
  };
}
class iu extends xc {
  constructor(e) {
    super(), eu(this, e, null, lu, nu, {});
  }
}
const {
  SvelteComponent: su,
  append: ou,
  attr: xe,
  detach: au,
  init: ru,
  insert: fu,
  noop: qi,
  safe_not_equal: cu,
  svg_element: xs
} = window.__gradio__svelte__internal;
function uu(l) {
  let e, t;
  return {
    c() {
      e = xs("svg"), t = xs("circle"), xe(t, "cx", "12"), xe(t, "cy", "12"), xe(t, "r", "10"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "stroke-width", "1.5"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round"), xe(e, "class", "feather feather-circle");
    },
    m(n, i) {
      fu(n, e, i), ou(e, t);
    },
    p: qi,
    i: qi,
    o: qi,
    d(n) {
      n && au(e);
    }
  };
}
class _u extends su {
  constructor(e) {
    super(), ru(this, e, null, uu, cu, {});
  }
}
const {
  SvelteComponent: du,
  append: Bi,
  attr: $e,
  detach: hu,
  init: mu,
  insert: gu,
  noop: Di,
  safe_not_equal: bu,
  set_style: rt,
  svg_element: Cl
} = window.__gradio__svelte__internal;
function wu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Cl("svg"), t = Cl("g"), n = Cl("path"), i = Cl("path"), $e(n, "d", "M18,6L6.087,17.913"), rt(n, "fill", "none"), rt(n, "fill-rule", "nonzero"), rt(n, "stroke-width", "2px"), $e(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), $e(i, "d", "M4.364,4.364L19.636,19.636"), rt(i, "fill", "none"), rt(i, "fill-rule", "nonzero"), rt(i, "stroke-width", "2px"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "version", "1.1"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $e(e, "xml:space", "preserve"), $e(e, "stroke", "currentColor"), rt(e, "fill-rule", "evenodd"), rt(e, "clip-rule", "evenodd"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      gu(s, e, o), Bi(e, t), Bi(t, n), Bi(e, i);
    },
    p: Di,
    i: Di,
    o: Di,
    d(s) {
      s && hu(e);
    }
  };
}
class Ga extends du {
  constructor(e) {
    super(), mu(this, e, null, wu, bu, {});
  }
}
const {
  SvelteComponent: pu,
  append: vu,
  attr: xn,
  detach: ku,
  init: yu,
  insert: Cu,
  noop: Li,
  safe_not_equal: Su,
  svg_element: $s
} = window.__gradio__svelte__internal;
function zu(l) {
  let e, t;
  return {
    c() {
      e = $s("svg"), t = $s("path"), xn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), xn(t, "fill", "currentColor"), xn(e, "id", "icon"), xn(e, "xmlns", "http://www.w3.org/2000/svg"), xn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Cu(n, e, i), vu(e, t);
    },
    p: Li,
    i: Li,
    o: Li,
    d(n) {
      n && ku(e);
    }
  };
}
class qu extends pu {
  constructor(e) {
    super(), yu(this, e, null, zu, Su, {});
  }
}
const {
  SvelteComponent: Bu,
  append: Du,
  attr: zn,
  detach: Lu,
  init: Eu,
  insert: Mu,
  noop: Ei,
  safe_not_equal: Ru,
  svg_element: eo
} = window.__gradio__svelte__internal;
function Au(l) {
  let e, t;
  return {
    c() {
      e = eo("svg"), t = eo("path"), zn(t, "fill", "currentColor"), zn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), zn(e, "xmlns", "http://www.w3.org/2000/svg"), zn(e, "width", "100%"), zn(e, "height", "100%"), zn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Mu(n, e, i), Du(e, t);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(n) {
      n && Lu(e);
    }
  };
}
class Wu extends Bu {
  constructor(e) {
    super(), Eu(this, e, null, Au, Ru, {});
  }
}
const {
  SvelteComponent: Iu,
  append: Tu,
  attr: qn,
  detach: Hu,
  init: Xu,
  insert: Yu,
  noop: Mi,
  safe_not_equal: Fu,
  svg_element: to
} = window.__gradio__svelte__internal;
function ju(l) {
  let e, t;
  return {
    c() {
      e = to("svg"), t = to("path"), qn(t, "d", "M5 8l4 4 4-4z"), qn(e, "class", "dropdown-arrow svelte-145leq6"), qn(e, "xmlns", "http://www.w3.org/2000/svg"), qn(e, "width", "100%"), qn(e, "height", "100%"), qn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Yu(n, e, i), Tu(e, t);
    },
    p: Mi,
    i: Mi,
    o: Mi,
    d(n) {
      n && Hu(e);
    }
  };
}
class Rs extends Iu {
  constructor(e) {
    super(), Xu(this, e, null, ju, Fu, {});
  }
}
const {
  SvelteComponent: Uu,
  append: Ri,
  attr: ce,
  detach: Vu,
  init: Ou,
  insert: Nu,
  noop: Ai,
  safe_not_equal: Pu,
  svg_element: Sl
} = window.__gradio__svelte__internal;
function Zu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Sl("svg"), t = Sl("rect"), n = Sl("circle"), i = Sl("polyline"), ce(t, "x", "3"), ce(t, "y", "3"), ce(t, "width", "18"), ce(t, "height", "18"), ce(t, "rx", "2"), ce(t, "ry", "2"), ce(n, "cx", "8.5"), ce(n, "cy", "8.5"), ce(n, "r", "1.5"), ce(i, "points", "21 15 16 10 5 21"), ce(e, "xmlns", "http://www.w3.org/2000/svg"), ce(e, "width", "100%"), ce(e, "height", "100%"), ce(e, "viewBox", "0 0 24 24"), ce(e, "fill", "none"), ce(e, "stroke", "currentColor"), ce(e, "stroke-width", "1.5"), ce(e, "stroke-linecap", "round"), ce(e, "stroke-linejoin", "round"), ce(e, "class", "feather feather-image");
    },
    m(s, o) {
      Nu(s, e, o), Ri(e, t), Ri(e, n), Ri(e, i);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(s) {
      s && Vu(e);
    }
  };
}
let Ka = class extends Uu {
  constructor(e) {
    super(), Ou(this, e, null, Zu, Pu, {});
  }
};
const {
  SvelteComponent: Gu,
  append: Ku,
  attr: zl,
  detach: Ju,
  init: Qu,
  insert: xu,
  noop: Wi,
  safe_not_equal: $u,
  svg_element: no
} = window.__gradio__svelte__internal;
function e_(l) {
  let e, t;
  return {
    c() {
      e = no("svg"), t = no("path"), zl(t, "fill", "currentColor"), zl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), zl(e, "xmlns", "http://www.w3.org/2000/svg"), zl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      xu(n, e, i), Ku(e, t);
    },
    p: Wi,
    i: Wi,
    o: Wi,
    d(n) {
      n && Ju(e);
    }
  };
}
class Ja extends Gu {
  constructor(e) {
    super(), Qu(this, e, null, e_, $u, {});
  }
}
const {
  SvelteComponent: t_,
  append: ql,
  attr: ue,
  detach: n_,
  init: l_,
  insert: i_,
  noop: Ii,
  safe_not_equal: s_,
  svg_element: $n
} = window.__gradio__svelte__internal;
function o_(l) {
  let e, t, n, i, s;
  return {
    c() {
      e = $n("svg"), t = $n("path"), n = $n("path"), i = $n("line"), s = $n("line"), ue(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ue(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ue(i, "x1", "12"), ue(i, "y1", "19"), ue(i, "x2", "12"), ue(i, "y2", "23"), ue(s, "x1", "8"), ue(s, "y1", "23"), ue(s, "x2", "16"), ue(s, "y2", "23"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "fill", "none"), ue(e, "stroke", "currentColor"), ue(e, "stroke-width", "2"), ue(e, "stroke-linecap", "round"), ue(e, "stroke-linejoin", "round"), ue(e, "class", "feather feather-mic");
    },
    m(o, r) {
      i_(o, e, r), ql(e, t), ql(e, n), ql(e, i), ql(e, s);
    },
    p: Ii,
    i: Ii,
    o: Ii,
    d(o) {
      o && n_(e);
    }
  };
}
class a_ extends t_ {
  constructor(e) {
    super(), l_(this, e, null, o_, s_, {});
  }
}
const {
  SvelteComponent: r_,
  append: lo,
  attr: Ue,
  detach: f_,
  init: c_,
  insert: u_,
  noop: Ti,
  safe_not_equal: __,
  set_style: d_,
  svg_element: Hi
} = window.__gradio__svelte__internal;
function h_(l) {
  let e, t, n;
  return {
    c() {
      e = Hi("svg"), t = Hi("polyline"), n = Hi("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), d_(e, "transform", "rotateY(180deg)");
    },
    m(i, s) {
      u_(i, e, s), lo(e, t), lo(e, n);
    },
    p: Ti,
    i: Ti,
    o: Ti,
    d(i) {
      i && f_(e);
    }
  };
}
class m_ extends r_ {
  constructor(e) {
    super(), c_(this, e, null, h_, __, {});
  }
}
const {
  SvelteComponent: g_,
  append: b_,
  attr: qe,
  detach: w_,
  init: p_,
  insert: v_,
  noop: Xi,
  safe_not_equal: k_,
  svg_element: io
} = window.__gradio__svelte__internal;
function y_(l) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, i) {
      v_(n, e, i), b_(e, t);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(n) {
      n && w_(e);
    }
  };
}
class C_ extends g_ {
  constructor(e) {
    super(), p_(this, e, null, y_, k_, {});
  }
}
const {
  SvelteComponent: S_,
  append: so,
  attr: Ve,
  detach: z_,
  init: q_,
  insert: B_,
  noop: Yi,
  safe_not_equal: D_,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function L_(l) {
  let e, t, n;
  return {
    c() {
      e = Fi("svg"), t = Fi("polyline"), n = Fi("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw");
    },
    m(i, s) {
      B_(i, e, s), so(e, t), so(e, n);
    },
    p: Yi,
    i: Yi,
    o: Yi,
    d(i) {
      i && z_(e);
    }
  };
}
class E_ extends S_ {
  constructor(e) {
    super(), q_(this, e, null, L_, D_, {});
  }
}
const {
  SvelteComponent: M_,
  append: ji,
  attr: pe,
  detach: R_,
  init: A_,
  insert: W_,
  noop: Ui,
  safe_not_equal: I_,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function T_(l) {
  let e, t, n, i;
  return {
    c() {
      e = Bl("svg"), t = Bl("path"), n = Bl("polyline"), i = Bl("line"), pe(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), pe(n, "points", "17 8 12 3 7 8"), pe(i, "x1", "12"), pe(i, "y1", "3"), pe(i, "x2", "12"), pe(i, "y2", "15"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "90%"), pe(e, "height", "90%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "2"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-upload");
    },
    m(s, o) {
      W_(s, e, o), ji(e, t), ji(e, n), ji(e, i);
    },
    p: Ui,
    i: Ui,
    o: Ui,
    d(s) {
      s && R_(e);
    }
  };
}
let Qa = class extends M_ {
  constructor(e) {
    super(), A_(this, e, null, T_, I_, {});
  }
};
const {
  SvelteComponent: H_,
  append: oo,
  attr: Ht,
  detach: X_,
  init: Y_,
  insert: F_,
  noop: Vi,
  safe_not_equal: j_,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function U_(l) {
  let e, t, n;
  return {
    c() {
      e = Oi("svg"), t = Oi("path"), n = Oi("path"), Ht(t, "fill", "currentColor"), Ht(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ht(n, "fill", "currentColor"), Ht(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24");
    },
    m(i, s) {
      F_(i, e, s), oo(e, t), oo(e, n);
    },
    p: Vi,
    i: Vi,
    o: Vi,
    d(i) {
      i && X_(e);
    }
  };
}
let xa = class extends H_ {
  constructor(e) {
    super(), Y_(this, e, null, U_, j_, {});
  }
};
const V_ = [
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
], ao = {
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
V_.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: ao[e][t],
    secondary: ao[e][n]
  }
}), {});
class Ol extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function O_(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ol("Must be on Spaces to share.");
  let t, n, i;
  t = N_(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const s = new File([t], i, { type: n }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await o.json();
      throw new Ol(`Upload failed: ${f.error}`);
    }
    throw new Ol("Upload failed.");
  }
  return await o.text();
}
function N_(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, s = new Uint8Array(i); i--; )
    s[i] = n.charCodeAt(i);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: P_,
  create_component: Z_,
  destroy_component: G_,
  init: K_,
  mount_component: J_,
  safe_not_equal: Q_,
  transition_in: x_,
  transition_out: $_
} = window.__gradio__svelte__internal, { createEventDispatcher: ed } = window.__gradio__svelte__internal;
function td(l) {
  let e, t;
  return e = new ri({
    props: {
      Icon: qu,
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
      Z_(e.$$.fragment);
    },
    m(n, i) {
      J_(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*i18n*/
      4 && (s.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (s.pending = /*pending*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (x_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      G_(e, n);
    }
  };
}
function nd(l, e, t) {
  const n = ed();
  let { formatter: i } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Ol ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [i, s, o, r, n, a];
}
class ld extends P_ {
  constructor(e) {
    super(), K_(this, e, nd, td, Q_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: id,
  append: on,
  attr: ds,
  check_outros: sd,
  create_component: $a,
  destroy_component: er,
  detach: Nl,
  element: hs,
  group_outros: od,
  init: ad,
  insert: Pl,
  mount_component: tr,
  safe_not_equal: rd,
  set_data: ms,
  space: gs,
  text: ol,
  toggle_class: ro,
  transition_in: Kl,
  transition_out: Jl
} = window.__gradio__svelte__internal;
function fd(l) {
  let e, t;
  return e = new Qa({}), {
    c() {
      $a(e.$$.fragment);
    },
    m(n, i) {
      tr(e, n, i), t = !0;
    },
    i(n) {
      t || (Kl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function cd(l) {
  let e, t;
  return e = new Ja({}), {
    c() {
      $a(e.$$.fragment);
    },
    m(n, i) {
      tr(e, n, i), t = !0;
    },
    i(n) {
      t || (Kl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      er(e, n);
    }
  };
}
function fo(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, s, o, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = hs("span"), t = ol("- "), i = ol(n), s = ol(" -"), o = gs(), a = ol(r), ds(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Pl(f, e, c), on(e, t), on(e, i), on(e, s), Pl(f, o, c), Pl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ms(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ms(a, r);
    },
    d(f) {
      f && (Nl(e), Nl(o), Nl(a));
    }
  };
}
function ud(l) {
  let e, t, n, i, s, o = (
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
  const c = [cd, fd], u = [];
  function _(g, m) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && fo(l)
  );
  return {
    c() {
      e = hs("div"), t = hs("span"), i.c(), s = gs(), r = ol(o), a = gs(), d && d.c(), ds(t, "class", "icon-wrap svelte-kzcjhc"), ro(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), ds(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, m) {
      Pl(g, e, m), on(e, t), u[n].m(t, null), on(e, s), on(e, r), on(e, a), d && d.m(e, null), f = !0;
    },
    p(g, [m]) {
      let b = n;
      n = _(g), n !== b && (od(), Jl(u[b], 1, 1, () => {
        u[b] = null;
      }), sd(), i = u[n], i || (i = u[n] = c[n](g), i.c()), Kl(i, 1), i.m(t, null)), (!f || m & /*hovered*/
      16) && ro(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!f || m & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && ms(r, o), /*mode*/
      g[3] !== "short" ? d ? d.p(g, m) : (d = fo(g), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      f || (Kl(i), f = !0);
    },
    o(g) {
      Jl(i), f = !1;
    },
    d(g) {
      g && Nl(e), u[n].d(), d && d.d();
    }
  };
}
function _d(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
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
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, s, o, r, a];
}
class nr extends id {
  constructor(e) {
    super(), ad(this, e, _d, ud, rd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: dd,
  append: Ni,
  attr: ht,
  check_outros: al,
  create_component: fi,
  destroy_component: ci,
  detach: jn,
  element: pl,
  empty: hd,
  group_outros: rl,
  init: md,
  insert: Un,
  listen: ui,
  mount_component: _i,
  safe_not_equal: gd,
  space: Pi,
  toggle_class: Zt,
  transition_in: de,
  transition_out: Be
} = window.__gradio__svelte__internal;
function co(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), s, o = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, c = t && uo(l), u = i && _o(l), _ = o && ho(l), d = a && mo(l);
  return {
    c() {
      e = pl("span"), c && c.c(), n = Pi(), u && u.c(), s = Pi(), _ && _.c(), r = Pi(), d && d.c(), ht(e, "class", "source-selection svelte-1jp3vgd"), ht(e, "data-testid", "source-select");
    },
    m(g, m) {
      Un(g, e, m), c && c.m(e, null), Ni(e, n), u && u.m(e, null), Ni(e, s), _ && _.m(e, null), Ni(e, r), d && d.m(e, null), f = !0;
    },
    p(g, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? c ? (c.p(g, m), m & /*sources*/
      2 && de(c, 1)) : (c = uo(g), c.c(), de(c, 1), c.m(e, n)) : c && (rl(), Be(c, 1, 1, () => {
        c = null;
      }), al()), m & /*sources*/
      2 && (i = /*sources*/
      g[1].includes("microphone")), i ? u ? (u.p(g, m), m & /*sources*/
      2 && de(u, 1)) : (u = _o(g), u.c(), de(u, 1), u.m(e, s)) : u && (rl(), Be(u, 1, 1, () => {
        u = null;
      }), al()), m & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? _ ? (_.p(g, m), m & /*sources*/
      2 && de(_, 1)) : (_ = ho(g), _.c(), de(_, 1), _.m(e, r)) : _ && (rl(), Be(_, 1, 1, () => {
        _ = null;
      }), al()), m & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? d ? (d.p(g, m), m & /*sources*/
      2 && de(d, 1)) : (d = mo(g), d.c(), de(d, 1), d.m(e, null)) : d && (rl(), Be(d, 1, 1, () => {
        d = null;
      }), al());
    },
    i(g) {
      f || (de(c), de(u), de(_), de(d), f = !0);
    },
    o(g) {
      Be(c), Be(u), Be(_), Be(d), f = !1;
    },
    d(g) {
      g && jn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function uo(l) {
  let e, t, n, i, s;
  return t = new Qa({}), {
    c() {
      e = pl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Upload file"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(o, r) {
      Un(o, e, r), _i(t, e, null), n = !0, i || (s = ui(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (de(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Be(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && jn(e), ci(t), i = !1, s();
    }
  };
}
function _o(l) {
  let e, t, n, i, s;
  return t = new a_({}), {
    c() {
      e = pl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Record audio"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(o, r) {
      Un(o, e, r), _i(t, e, null), n = !0, i || (s = ui(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (de(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Be(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && jn(e), ci(t), i = !1, s();
    }
  };
}
function ho(l) {
  let e, t, n, i, s;
  return t = new xa({}), {
    c() {
      e = pl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Capture from camera"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(o, r) {
      Un(o, e, r), _i(t, e, null), n = !0, i || (s = ui(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (de(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Be(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && jn(e), ci(t), i = !1, s();
    }
  };
}
function mo(l) {
  let e, t, n, i, s;
  return t = new Ja({}), {
    c() {
      e = pl("button"), fi(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Paste from clipboard"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(o, r) {
      Un(o, e, r), _i(t, e, null), n = !0, i || (s = ui(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Zt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (de(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Be(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && jn(e), ci(t), i = !1, s();
    }
  };
}
function bd(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && co(l)
  );
  return {
    c() {
      n && n.c(), e = hd();
    },
    m(i, s) {
      n && n.m(i, s), Un(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, s), s & /*unique_sources*/
      4 && de(n, 1)) : (n = co(i), n.c(), de(n, 1), n.m(e.parentNode, e)) : n && (rl(), Be(n, 1, 1, () => {
        n = null;
      }), al());
    },
    i(i) {
      t || (de(n), t = !0);
    },
    o(i) {
      Be(n), t = !1;
    },
    d(i) {
      i && jn(e), n && n.d(i);
    }
  };
}
function wd(l, e, t) {
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
        } catch (E) {
          k(E);
        }
      }
      function C(v) {
        try {
          y(p.throw(v));
        } catch (E) {
          k(E);
        }
      }
      function y(v) {
        v.done ? h(v.value) : w(v.value).then(S, C);
      }
      y((p = p.apply(g, m || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(g) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, o = g), a(g);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (g) => {
    "sources" in g && t(1, s = g.sources), "active_source" in g && t(0, o = g.active_source), "handle_clear" in g && t(4, r = g.handle_clear), "handle_select" in g && t(5, a = g.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(s)]);
  }, [
    o,
    s,
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
class pd extends dd {
  constructor(e) {
    super(), md(this, e, wd, bd, gd, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function An(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Zl() {
}
const vd = (l) => l;
function kd(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function go(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const lr = typeof window < "u";
let bo = lr ? () => window.performance.now() : () => Date.now(), ir = lr ? (l) => requestAnimationFrame(l) : Zl;
const Fn = /* @__PURE__ */ new Set();
function sr(l) {
  Fn.forEach((e) => {
    e.c(l) || (Fn.delete(e), e.f());
  }), Fn.size !== 0 && ir(sr);
}
function yd(l) {
  let e;
  return Fn.size === 0 && ir(sr), {
    promise: new Promise((t) => {
      Fn.add(e = { c: l, f: t });
    }),
    abort() {
      Fn.delete(e);
    }
  };
}
function Cd(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Sd(l, { delay: e = 0, duration: t = 400, easing: n = vd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function wo(l, { delay: e = 0, duration: t = 400, easing: n = Cd, x: i = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = go(i), [d, g] = go(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (m, b) => `
			transform: ${f} translate(${(1 - m) * u}${_}, ${(1 - m) * d}${g});
			opacity: ${a - c * b}`
  };
}
const Bn = [];
function zd(l, e = Zl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (kd(l, r) && (l = r, t)) {
      const a = !Bn.length;
      for (const f of n)
        f[1](), Bn.push(f, l);
      if (a) {
        for (let f = 0; f < Bn.length; f += 2)
          Bn[f][0](Bn[f + 1]);
        Bn.length = 0;
      }
    }
  }
  function s(r) {
    i(r(l));
  }
  function o(r, a = Zl) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, s) || Zl), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function po(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function bs(l, e, t, n) {
  if (typeof t == "number" || po(t)) {
    const i = n - t, s = (t - e) / (l.dt || 1 / 60), o = l.opts.stiffness * i, r = l.opts.damping * s, a = (o - r) * l.inv_mass, f = (s + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, po(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => bs(l, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = bs(l, e[s], t[s], n[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function vo(l, e = {}) {
  const t = zd(l), { stiffness: n = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function g(b, p = {}) {
    c = b;
    const w = a = {};
    return l == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, o = bo(), f = b, t.set(l = c), Promise.resolve()) : (p.soft && (_ = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (o = bo(), d = !1, r = yd((h) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: m,
        settled: !0,
        dt: (h - o) * 60 / 1e3
      }, S = bs(k, f, l, c);
      return o = h, f = l, t.set(l = S), k.settled && (r = null), !k.settled;
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
    precision: s
  };
  return m;
}
const {
  SvelteComponent: qd,
  append: et,
  attr: N,
  component_subscribe: ko,
  detach: Bd,
  element: Dd,
  init: Ld,
  insert: Ed,
  noop: yo,
  safe_not_equal: Md,
  set_style: Dl,
  svg_element: tt,
  toggle_class: Co
} = window.__gradio__svelte__internal, { onMount: Rd } = window.__gradio__svelte__internal;
function Ad(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Dd("div"), t = tt("svg"), n = tt("g"), i = tt("path"), s = tt("path"), o = tt("path"), r = tt("path"), a = tt("g"), f = tt("path"), c = tt("path"), u = tt("path"), _ = tt("path"), N(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(i, "fill", "#FF7C00"), N(i, "fill-opacity", "0.4"), N(i, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), Dl(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), Dl(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), Co(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, g) {
      Ed(d, e, g), et(e, t), et(t, n), et(n, i), et(n, s), et(n, o), et(n, r), et(t, a), et(a, f), et(a, c), et(a, u), et(a, _);
    },
    p(d, [g]) {
      g & /*$top*/
      2 && Dl(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), g & /*$bottom*/
      4 && Dl(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), g & /*margin*/
      1 && Co(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: yo,
    o: yo,
    d(d) {
      d && Bd(e);
    }
  };
}
function Wd(l, e, t) {
  let n, i;
  var s = this && this.__awaiter || function(d, g, m, b) {
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
  let { margin: o = !0 } = e;
  const r = vo([0, 0]);
  ko(l, r, (d) => t(1, n = d));
  const a = vo([0, 0]);
  ko(l, a, (d) => t(2, i = d));
  let f;
  function c() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return s(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Rd(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, i, r, a];
}
class Id extends qd {
  constructor(e) {
    super(), Ld(this, e, Wd, Ad, Md, { margin: 0 });
  }
}
const {
  SvelteComponent: Td,
  append: an,
  attr: st,
  binding_callbacks: So,
  check_outros: ws,
  create_component: or,
  create_slot: ar,
  destroy_component: rr,
  destroy_each: fr,
  detach: Y,
  element: _t,
  empty: Vn,
  ensure_array_like: Ql,
  get_all_dirty_from_scope: cr,
  get_slot_changes: ur,
  group_outros: ps,
  init: Hd,
  insert: F,
  mount_component: _r,
  noop: vs,
  safe_not_equal: Xd,
  set_data: Ze,
  set_style: Nt,
  space: Pe,
  text: ie,
  toggle_class: Ne,
  transition_in: it,
  transition_out: dt,
  update_slot_base: dr
} = window.__gradio__svelte__internal, { tick: Yd } = window.__gradio__svelte__internal, { onDestroy: Fd } = window.__gradio__svelte__internal, { createEventDispatcher: jd } = window.__gradio__svelte__internal, Ud = (l) => ({}), zo = (l) => ({}), Vd = (l) => ({}), qo = (l) => ({});
function Bo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Do(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function Od(l) {
  let e, t, n, i, s = (
    /*i18n*/
    l[1]("common.error") + ""
  ), o, r, a;
  t = new ri({
    props: {
      Icon: Ga,
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
  ), c = ar(
    f,
    l,
    /*$$scope*/
    l[29],
    zo
  );
  return {
    c() {
      e = _t("div"), or(t.$$.fragment), n = Pe(), i = _t("span"), o = ie(s), r = Pe(), c && c.c(), st(e, "class", "clear-status svelte-16nch4a"), st(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      F(u, e, _), _r(t, e, null), F(u, n, _), F(u, i, _), an(i, o), F(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ze(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && dr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? ur(
          f,
          /*$$scope*/
          u[29],
          _,
          Ud
        ) : cr(
          /*$$scope*/
          u[29]
        ),
        zo
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      dt(t.$$.fragment, u), dt(c, u), a = !1;
    },
    d(u) {
      u && (Y(e), Y(n), Y(i), Y(r)), rr(t), c && c.d(u);
    }
  };
}
function Nd(l) {
  let e, t, n, i, s, o, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Lo(l)
  );
  function u(h, k) {
    if (
      /*progress*/
      h[7]
    ) return Gd;
    if (
      /*queue_position*/
      h[2] !== null && /*queue_size*/
      h[3] !== void 0 && /*queue_position*/
      h[2] >= 0
    ) return Zd;
    if (
      /*queue_position*/
      h[2] === 0
    ) return Pd;
  }
  let _ = u(l), d = _ && _(l), g = (
    /*timer*/
    l[5] && Ro(l)
  );
  const m = [xd, Qd], b = [];
  function p(h, k) {
    return (
      /*last_progress_level*/
      h[15] != null ? 0 : (
        /*show_progress*/
        h[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = p(l)) && (o = b[s] = m[s](l));
  let w = !/*timer*/
  l[5] && Yo(l);
  return {
    c() {
      c && c.c(), e = Pe(), t = _t("div"), d && d.c(), n = Pe(), g && g.c(), i = Pe(), o && o.c(), r = Pe(), w && w.c(), a = Vn(), st(t, "class", "progress-text svelte-16nch4a"), Ne(
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
      c && c.m(h, k), F(h, e, k), F(h, t, k), d && d.m(t, null), an(t, n), g && g.m(t, null), F(h, i, k), ~s && b[s].m(h, k), F(h, r, k), w && w.m(h, k), F(h, a, k), f = !0;
    },
    p(h, k) {
      /*variant*/
      h[8] === "default" && /*show_eta_bar*/
      h[18] && /*show_progress*/
      h[6] === "full" ? c ? c.p(h, k) : (c = Lo(h), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(h)) && d ? d.p(h, k) : (d && d.d(1), d = _ && _(h), d && (d.c(), d.m(t, n))), /*timer*/
      h[5] ? g ? g.p(h, k) : (g = Ro(h), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!f || k[0] & /*variant*/
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
      let S = s;
      s = p(h), s === S ? ~s && b[s].p(h, k) : (o && (ps(), dt(b[S], 1, 1, () => {
        b[S] = null;
      }), ws()), ~s ? (o = b[s], o ? o.p(h, k) : (o = b[s] = m[s](h), o.c()), it(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      h[5] ? w && (ps(), dt(w, 1, 1, () => {
        w = null;
      }), ws()) : w ? (w.p(h, k), k[0] & /*timer*/
      32 && it(w, 1)) : (w = Yo(h), w.c(), it(w, 1), w.m(a.parentNode, a));
    },
    i(h) {
      f || (it(o), it(w), f = !0);
    },
    o(h) {
      dt(o), dt(w), f = !1;
    },
    d(h) {
      h && (Y(e), Y(t), Y(i), Y(r), Y(a)), c && c.d(h), d && d.d(), g && g.d(), ~s && b[s].d(h), w && w.d(h);
    }
  };
}
function Lo(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = _t("div"), st(e, "class", "eta-bar svelte-16nch4a"), Nt(e, "transform", t);
    },
    m(n, i) {
      F(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Nt(e, "transform", t);
    },
    d(n) {
      n && Y(e);
    }
  };
}
function Pd(l) {
  let e;
  return {
    c() {
      e = ie("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: vs,
    d(t) {
      t && Y(e);
    }
  };
}
function Zd(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, s, o;
  return {
    c() {
      e = ie("queue: "), n = ie(t), i = ie("/"), s = ie(
        /*queue_size*/
        l[3]
      ), o = ie(" |");
    },
    m(r, a) {
      F(r, e, a), F(r, n, a), F(r, i, a), F(r, s, a), F(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ze(n, t), a[0] & /*queue_size*/
      8 && Ze(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (Y(e), Y(n), Y(i), Y(s), Y(o));
    }
  };
}
function Gd(l) {
  let e, t = Ql(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Mo(Do(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Vn();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      F(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = Ql(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Do(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Mo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Y(e), fr(n, i);
    }
  };
}
function Eo(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? Jd : Kd
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Pe(), n = ie(t), i = ie(" | "), o = ie(s);
    },
    m(c, u) {
      f.m(c, u), F(c, e, u), F(c, n, u), F(c, i, u), F(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (Y(e), Y(n), Y(i), Y(o)), f.d(c);
    }
  };
}
function Kd(l) {
  let e = An(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      F(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = An(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && Y(t);
    }
  };
}
function Jd(l) {
  let e = An(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = An(
    /*p*/
    l[41].length
  ) + "", s;
  return {
    c() {
      t = ie(e), n = ie("/"), s = ie(i);
    },
    m(o, r) {
      F(o, t, r), F(o, n, r), F(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = An(
        /*p*/
        o[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && i !== (i = An(
        /*p*/
        o[41].length
      ) + "") && Ze(s, i);
    },
    d(o) {
      o && (Y(t), Y(n), Y(s));
    }
  };
}
function Mo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Eo(l)
  );
  return {
    c() {
      t && t.c(), e = Vn();
    },
    m(n, i) {
      t && t.m(n, i), F(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Eo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Ro(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = ie(
        /*formatted_timer*/
        l[20]
      ), n = ie(t), i = ie("s");
    },
    m(s, o) {
      F(s, e, o), F(s, n, o), F(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ze(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Ze(n, t);
    },
    d(s) {
      s && (Y(e), Y(n), Y(i));
    }
  };
}
function Qd(l) {
  let e, t;
  return e = new Id({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      or(e.$$.fragment);
    },
    m(n, i) {
      _r(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (it(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rr(e, n);
    }
  };
}
function xd(l) {
  let e, t, n, i, s, o = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Ao(l)
  );
  return {
    c() {
      e = _t("div"), t = _t("div"), r && r.c(), n = Pe(), i = _t("div"), s = _t("div"), st(t, "class", "progress-level-inner svelte-16nch4a"), st(s, "class", "progress-bar svelte-16nch4a"), Nt(s, "width", o), st(i, "class", "progress-bar-wrap svelte-16nch4a"), st(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      F(a, e, f), an(e, t), r && r.m(t, null), an(e, n), an(e, i), an(i, s), l[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Ao(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Nt(s, "width", o);
    },
    i: vs,
    o: vs,
    d(a) {
      a && Y(e), r && r.d(), l[31](null);
    }
  };
}
function Ao(l) {
  let e, t = Ql(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Xo(Bo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Vn();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      F(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = Ql(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Bo(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Xo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Y(e), fr(n, i);
    }
  };
}
function Wo(l) {
  let e, t, n, i, s = (
    /*i*/
    l[43] !== 0 && $d()
  ), o = (
    /*p*/
    l[41].desc != null && Io(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && To()
  ), a = (
    /*progress_level*/
    l[14] != null && Ho(l)
  );
  return {
    c() {
      s && s.c(), e = Pe(), o && o.c(), t = Pe(), r && r.c(), n = Pe(), a && a.c(), i = Vn();
    },
    m(f, c) {
      s && s.m(f, c), F(f, e, c), o && o.m(f, c), F(f, t, c), r && r.m(f, c), F(f, n, c), a && a.m(f, c), F(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = Io(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = To(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Ho(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (Y(e), Y(t), Y(n), Y(i)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function $d(l) {
  let e;
  return {
    c() {
      e = ie(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && Y(e);
    }
  };
}
function Io(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = ie(e);
    },
    m(n, i) {
      F(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && Y(t);
    }
  };
}
function To(l) {
  let e;
  return {
    c() {
      e = ie("-");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && Y(e);
    }
  };
}
function Ho(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ie(e), n = ie("%");
    },
    m(i, s) {
      F(i, t, s), F(i, n, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ze(t, e);
    },
    d(i) {
      i && (Y(t), Y(n));
    }
  };
}
function Xo(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && Wo(l)
  );
  return {
    c() {
      t && t.c(), e = Vn();
    },
    m(n, i) {
      t && t.m(n, i), F(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = Wo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Yo(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), o = ar(
    s,
    l,
    /*$$scope*/
    l[29],
    qo
  );
  return {
    c() {
      e = _t("p"), t = ie(
        /*loading_text*/
        l[9]
      ), n = Pe(), o && o.c(), st(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      F(r, e, a), an(e, t), F(r, n, a), o && o.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!i || a[0] & /*$$scope*/
      536870912) && dr(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        i ? ur(
          s,
          /*$$scope*/
          r[29],
          a,
          Vd
        ) : cr(
          /*$$scope*/
          r[29]
        ),
        qo
      );
    },
    i(r) {
      i || (it(o, r), i = !0);
    },
    o(r) {
      dt(o, r), i = !1;
    },
    d(r) {
      r && (Y(e), Y(n)), o && o.d(r);
    }
  };
}
function e1(l) {
  let e, t, n, i, s;
  const o = [Nd, Od], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = o[t](l)), {
    c() {
      e = _t("div"), n && n.c(), st(e, "class", i = "wrap " + /*variant*/
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
      ), Nt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Nt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      F(f, e, c), ~t && r[t].m(e, null), l[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ps(), dt(r[u], 1, 1, () => {
        r[u] = null;
      }), ws()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), it(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && st(e, "class", i), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Ne(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ne(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Ne(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Ne(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Nt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Nt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (it(n), s = !0);
    },
    o(f) {
      dt(n), s = !1;
    },
    d(f) {
      f && Y(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var t1 = function(l, e, t, n) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        o(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        o(u);
      }
    }
    function f(c) {
      c.done ? s(c.value) : i(c.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let Ll = [], Zi = !1;
function n1(l) {
  return t1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ll.push(e), !Zi) Zi = !0;
      else return;
      yield Yd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Ll.length; i++) {
          const o = Ll[i].getBoundingClientRect();
          (i === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Zi = !1, Ll = [];
      });
    }
  });
}
function l1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = jd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: g = "full" } = e, { message: m = null } = e, { progress: b = null } = e, { variant: p = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: h = !0 } = e, { translucent: k = !1 } = e, { border: S = !1 } = e, { autoscroll: C } = e, y, v = !1, E = 0, z = 0, W = null, A = null, U = 0, V = null, G, J = null, fe = !0;
  const R = () => {
    t(0, a = t(27, W = t(19, j = null))), t(25, E = performance.now()), t(26, z = 0), v = !0, P();
  };
  function P() {
    requestAnimationFrame(() => {
      t(26, z = (performance.now() - E) / 1e3), v && P();
    });
  }
  function M() {
    t(26, z = 0), t(0, a = t(27, W = t(19, j = null))), v && (v = !1);
  }
  Fd(() => {
    v && M();
  });
  let j = null;
  function O(I) {
    So[I ? "unshift" : "push"](() => {
      J = I, t(16, J), t(7, b), t(14, V), t(15, G);
    });
  }
  const se = () => {
    o("clear_status");
  };
  function be(I) {
    So[I ? "unshift" : "push"](() => {
      y = I, t(13, y);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, g = I.show_progress), "message" in I && t(23, m = I.message), "progress" in I && t(7, b = I.progress), "variant" in I && t(8, p = I.variant), "loading_text" in I && t(9, w = I.loading_text), "absolute" in I && t(10, h = I.absolute), "translucent" in I && t(11, k = I.translucent), "border" in I && t(12, S = I.border), "autoscroll" in I && t(24, C = I.autoscroll), "$$scope" in I && t(29, s = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - E) / 1e3 + a), t(19, j = A.toFixed(1)), t(27, W = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, U = A === null || A <= 0 || !z ? null : Math.min(z / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, fe = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, V = b.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, V = null), V ? (t(15, G = V[V.length - 1]), J && (G === 0 ? t(16, J.style.transition = "0", J) : t(16, J.style.transition = "150ms", J))) : t(15, G = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : M()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && _ && (u === "pending" || u === "complete") && n1(y, C), l.$$.dirty[0] & /*status, message*/
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
    V,
    G,
    J,
    U,
    fe,
    j,
    n,
    o,
    _,
    m,
    C,
    E,
    z,
    W,
    A,
    s,
    i,
    O,
    se,
    be
  ];
}
class i1 extends Td {
  constructor(e) {
    super(), Hd(
      this,
      e,
      l1,
      e1,
      Xd,
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
const { setContext: q2, getContext: s1 } = window.__gradio__svelte__internal, o1 = "WORKER_PROXY_CONTEXT_KEY";
function hr() {
  return s1(o1);
}
function a1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function mr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function gr(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!a1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function r1(l) {
  if (l == null || !gr(l))
    return l;
  const e = hr();
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
    const s = new Blob([i.body], {
      type: mr(i.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: f1,
  assign: xl,
  check_outros: br,
  compute_rest_props: Fo,
  create_slot: As,
  detach: di,
  element: wr,
  empty: pr,
  exclude_internal_props: c1,
  get_all_dirty_from_scope: Ws,
  get_slot_changes: Is,
  get_spread_update: vr,
  group_outros: kr,
  init: u1,
  insert: hi,
  listen: yr,
  prevent_default: _1,
  safe_not_equal: d1,
  set_attributes: $l,
  transition_in: dn,
  transition_out: hn,
  update_slot_base: Ts
} = window.__gradio__svelte__internal, { createEventDispatcher: h1 } = window.__gradio__svelte__internal;
function m1(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[8].default
  ), r = As(
    o,
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
    f = xl(f, a[c]);
  return {
    c() {
      e = wr("a"), r && r.c(), $l(e, f);
    },
    m(c, u) {
      hi(c, e, u), r && r.m(e, null), n = !0, i || (s = yr(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Ts(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? Is(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Ws(
          /*$$scope*/
          c[7]
        ),
        null
      ), $l(e, f = vr(a, [
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
      n || (dn(r, c), n = !0);
    },
    o(c) {
      hn(r, c), n = !1;
    },
    d(c) {
      c && di(e), r && r.d(c), i = !1, s();
    }
  };
}
function g1(l) {
  let e, t, n, i;
  const s = [w1, b1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = pr();
    },
    m(a, f) {
      o[e].m(a, f), hi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (kr(), hn(o[c], 1, 1, () => {
        o[c] = null;
      }), br(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), dn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (dn(t), i = !0);
    },
    o(a) {
      hn(t), i = !1;
    },
    d(a) {
      a && di(n), o[e].d(a);
    }
  };
}
function b1(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[8].default
  ), o = As(
    s,
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
    a = xl(a, r[f]);
  return {
    c() {
      e = wr("a"), o && o.c(), $l(e, a);
    },
    m(f, c) {
      hi(f, e, c), o && o.m(e, null), t = !0, n || (i = yr(e, "click", _1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && Ts(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? Is(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Ws(
          /*$$scope*/
          f[7]
        ),
        null
      ), $l(e, a = vr(r, [
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
      t || (dn(o, f), t = !0);
    },
    o(f) {
      hn(o, f), t = !1;
    },
    d(f) {
      f && di(e), o && o.d(f), n = !1, i();
    }
  };
}
function w1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = As(
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
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      128) && Ts(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Is(
          t,
          /*$$scope*/
          i[7],
          s,
          null
        ) : Ws(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (dn(n, i), e = !0);
    },
    o(i) {
      hn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function p1(l) {
  let e, t, n, i, s;
  const o = [g1, m1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && gr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = o[t](l), {
    c() {
      n.c(), i = pr();
    },
    m(f, c) {
      r[t].m(f, c), hi(f, i, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (kr(), hn(r[u], 1, 1, () => {
        r[u] = null;
      }), br(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), dn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      s || (dn(n), s = !0);
    },
    o(f) {
      hn(n), s = !1;
    },
    d(f) {
      f && di(i), r[t].d(f);
    }
  };
}
function v1(l, e, t) {
  const n = ["href", "download"];
  let i = Fo(e, n), { $$slots: s = {}, $$scope: o } = e;
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
        } catch (E) {
          k(E);
        }
      }
      function C(v) {
        try {
          y(p.throw(v));
        } catch (E) {
          k(E);
        }
      }
      function y(v) {
        v.done ? h(v.value) : w(v.value).then(S, C);
      }
      y((p = p.apply(g, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = h1();
  let u = !1;
  const _ = hr();
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
            type: mr(b.headers, "content-type")
          }
        ), w = URL.createObjectURL(p), h = document.createElement("a");
        h.href = w, h.download = f, h.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (g) => {
    e = xl(xl({}, e), c1(g)), t(6, i = Fo(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, f = g.download), "$$scope" in g && t(7, o = g.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    i,
    o,
    s
  ];
}
class k1 extends f1 {
  constructor(e) {
    super(), u1(this, e, v1, p1, d1, { href: 0, download: 1 });
  }
}
var y1 = Object.defineProperty, C1 = (l, e, t) => e in l ? y1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, bt = (l, e, t) => (C1(l, typeof e != "symbol" ? e + "" : e, t), t), Cr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, el = (l, e, t) => (Cr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), S1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, z1 = (l, e, t, n) => (Cr(l, e, "write to private field"), e.set(l, t), t), Vt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Sr(l, e) {
  return l.map(
    (t) => new q1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class q1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    bt(this, "path"), bt(this, "url"), bt(this, "orig_name"), bt(this, "size"), bt(this, "blob"), bt(this, "is_stream"), bt(this, "mime_type"), bt(this, "alt_text"), bt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
let B2 = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = el(this, Vt) + t; ; ) {
          const i = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (i === -1 || i - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (i === -1)
            break;
          const o = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, o)), t = t.slice(i + 1);
        }
        z1(this, Vt, t);
      },
      flush: (t) => {
        if (el(this, Vt) === "")
          return;
        const n = e.allowCR && el(this, Vt).endsWith("\r") ? el(this, Vt).slice(0, -1) : el(this, Vt);
        t.enqueue(n);
      }
    }), S1(this, Vt, "");
  }
};
Vt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: B1,
  append: Le,
  attr: ln,
  detach: zr,
  element: sn,
  init: D1,
  insert: qr,
  noop: jo,
  safe_not_equal: L1,
  set_data: ei,
  set_style: Gi,
  space: ks,
  text: Wn,
  toggle_class: Uo
} = window.__gradio__svelte__internal, { onMount: E1, createEventDispatcher: M1, onDestroy: R1 } = window.__gradio__svelte__internal;
function Vo(l) {
  let e, t, n, i, s = fl(
    /*file_to_display*/
    l[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = sn("div"), t = sn("span"), n = sn("div"), i = sn("progress"), o = Wn(s), a = ks(), f = sn("span"), u = Wn(c), Gi(i, "visibility", "hidden"), Gi(i, "height", "0"), Gi(i, "width", "0"), i.value = r = fl(
        /*file_to_display*/
        l[2]
      ), ln(i, "max", "100"), ln(i, "class", "svelte-cr2edf"), ln(n, "class", "progress-bar svelte-cr2edf"), ln(f, "class", "file-name svelte-cr2edf"), ln(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      qr(_, e, d), Le(e, t), Le(t, n), Le(n, i), Le(i, o), Le(e, a), Le(e, f), Le(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = fl(
        /*file_to_display*/
        _[2]
      ) + "") && ei(o, s), d & /*file_to_display*/
      4 && r !== (r = fl(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && ei(u, c);
    },
    d(_) {
      _ && zr(e);
    }
  };
}
function A1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && Vo(l)
  );
  return {
    c() {
      e = sn("div"), t = sn("span"), n = Wn("Uploading "), s = Wn(i), o = ks(), a = Wn(r), f = Wn("..."), c = ks(), u && u.c(), ln(t, "class", "uploading svelte-cr2edf"), ln(e, "class", "wrap svelte-cr2edf"), Uo(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      qr(_, e, d), Le(e, t), Le(t, n), Le(t, s), Le(t, o), Le(t, a), Le(t, f), Le(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && ei(s, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ei(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Vo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Uo(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: jo,
    o: jo,
    d(_) {
      _ && zr(e), u && u.d();
    }
  };
}
function fl(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function W1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += fl(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function I1(l, e, t) {
  var n = this && this.__awaiter || function(m, b, p, w) {
    function h(k) {
      return k instanceof p ? k : new p(function(S) {
        S(k);
      });
    }
    return new (p || (p = Promise))(function(k, S) {
      function C(E) {
        try {
          v(w.next(E));
        } catch (z) {
          S(z);
        }
      }
      function y(E) {
        try {
          v(w.throw(E));
        } catch (z) {
          S(z);
        }
      }
      function v(E) {
        E.done ? k(E.value) : h(E.value).then(C, y);
      }
      v((w = w.apply(m, b || [])).next());
    });
  };
  let { upload_id: i } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = M1();
  function g(m, b) {
    t(0, _ = _.map((p) => (p.orig_name === m && (p.progress += b), p)));
  }
  return E1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(m.data);
        f || t(1, f = !0), b.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = b), g(b.orig_name, b.chunk_size));
      });
    };
  })), R1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, s = m.root), "files" in m && t(5, o = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && W1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    i,
    s,
    o,
    r,
    c
  ];
}
class T1 extends B1 {
  constructor(e) {
    super(), D1(this, e, I1, A1, L1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: H1,
  append: Oo,
  attr: ve,
  binding_callbacks: X1,
  bubble: Kt,
  check_outros: Br,
  create_component: Y1,
  create_slot: Dr,
  destroy_component: F1,
  detach: mi,
  element: ys,
  empty: Lr,
  get_all_dirty_from_scope: Er,
  get_slot_changes: Mr,
  group_outros: Rr,
  init: j1,
  insert: gi,
  listen: Te,
  mount_component: U1,
  prevent_default: Jt,
  run_all: V1,
  safe_not_equal: O1,
  set_style: Ar,
  space: N1,
  stop_propagation: Qt,
  toggle_class: me,
  transition_in: Pt,
  transition_out: mn,
  update_slot_base: Wr
} = window.__gradio__svelte__internal, { createEventDispatcher: P1, tick: Z1 } = window.__gradio__svelte__internal;
function G1(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Dr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ys("button"), d && d.c(), t = N1(), n = ys("input"), ve(n, "aria-label", "file upload"), ve(n, "data-testid", "file-upload"), ve(n, "type", "file"), ve(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = s = /*file_count*/
      l[6] === "multiple" || void 0, ve(n, "webkitdirectory", o = /*file_count*/
      l[6] === "directory" || void 0), ve(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), ve(n, "class", "svelte-1s26xmt"), ve(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), me(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), me(
        e,
        "center",
        /*center*/
        l[4]
      ), me(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), me(
        e,
        "flex",
        /*flex*/
        l[5]
      ), me(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), Ar(e, "height", "100%");
    },
    m(g, m) {
      gi(g, e, m), d && d.m(e, null), Oo(e, t), Oo(e, n), l[34](n), f = !0, c || (u = [
        Te(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Te(e, "drag", Qt(Jt(
          /*drag_handler*/
          l[27]
        ))),
        Te(e, "dragstart", Qt(Jt(
          /*dragstart_handler*/
          l[28]
        ))),
        Te(e, "dragend", Qt(Jt(
          /*dragend_handler*/
          l[29]
        ))),
        Te(e, "dragover", Qt(Jt(
          /*dragover_handler*/
          l[30]
        ))),
        Te(e, "dragenter", Qt(Jt(
          /*dragenter_handler*/
          l[31]
        ))),
        Te(e, "dragleave", Qt(Jt(
          /*dragleave_handler*/
          l[32]
        ))),
        Te(e, "drop", Qt(Jt(
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
      33554432) && Wr(
        d,
        _,
        g,
        /*$$scope*/
        g[25],
        f ? Mr(
          _,
          /*$$scope*/
          g[25],
          m,
          null
        ) : Er(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!f || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      g[16] || void 0)) && ve(n, "accept", i), (!f || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = s), (!f || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && ve(n, "webkitdirectory", o), (!f || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && ve(n, "mozdirectory", r), (!f || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && ve(e, "tabindex", a), (!f || m[0] & /*hidden*/
      512) && me(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!f || m[0] & /*center*/
      16) && me(
        e,
        "center",
        /*center*/
        g[4]
      ), (!f || m[0] & /*boundedheight*/
      8) && me(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!f || m[0] & /*flex*/
      32) && me(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!f || m[0] & /*disable_click*/
      128) && me(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      f || (Pt(d, g), f = !0);
    },
    o(g) {
      mn(d, g), f = !1;
    },
    d(g) {
      g && mi(e), d && d.d(g), l[34](null), c = !1, V1(u);
    }
  };
}
function K1(l) {
  let e, t, n = !/*hidden*/
  l[9] && No(l);
  return {
    c() {
      n && n.c(), e = Lr();
    },
    m(i, s) {
      n && n.m(i, s), gi(i, e, s), t = !0;
    },
    p(i, s) {
      /*hidden*/
      i[9] ? n && (Rr(), mn(n, 1, 1, () => {
        n = null;
      }), Br()) : n ? (n.p(i, s), s[0] & /*hidden*/
      512 && Pt(n, 1)) : (n = No(i), n.c(), Pt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Pt(n), t = !0);
    },
    o(i) {
      mn(n), t = !1;
    },
    d(i) {
      i && mi(e), n && n.d(i);
    }
  };
}
function J1(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[26].default
  ), r = Dr(
    o,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ys("button"), r && r.c(), ve(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), ve(e, "class", "svelte-1s26xmt"), me(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), me(
        e,
        "center",
        /*center*/
        l[4]
      ), me(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), me(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Ar(e, "height", "100%");
    },
    m(a, f) {
      gi(a, e, f), r && r.m(e, null), n = !0, i || (s = Te(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Wr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Mr(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Er(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ve(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && me(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && me(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && me(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && me(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Pt(r, a), n = !0);
    },
    o(a) {
      mn(r, a), n = !1;
    },
    d(a) {
      a && mi(e), r && r.d(a), i = !1, s();
    }
  };
}
function No(l) {
  let e, t;
  return e = new T1({
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
      Y1(e.$$.fragment);
    },
    m(n, i) {
      U1(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*root*/
      256 && (s.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (s.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (s.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (s.stream_handler = /*stream_handler*/
      n[11]), e.$set(s);
    },
    i(n) {
      t || (Pt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      mn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      F1(e, n);
    }
  };
}
function Q1(l) {
  let e, t, n, i;
  const s = [J1, K1, G1], o = [];
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
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = Lr();
    },
    m(a, f) {
      o[e].m(a, f), gi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Rr(), mn(o[c], 1, 1, () => {
        o[c] = null;
      }), Br(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Pt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Pt(t), i = !0);
    },
    o(a) {
      mn(t), i = !1;
    },
    d(a) {
      a && mi(n), o[e].d(a);
    }
  };
}
function x1(l, e, t) {
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
    const [s] = i.split("/").map((o) => o.trim());
    return i.endsWith("/*") && t.startsWith(s + "/");
  });
}
function $1(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(L, X, Q, te) {
    function D(Re) {
      return Re instanceof Q ? Re : new Q(function(Ke) {
        Ke(Re);
      });
    }
    return new (Q || (Q = Promise))(function(Re, Ke) {
      function mt(Qe) {
        try {
          Je(te.next(Qe));
        } catch (Gt) {
          Ke(Gt);
        }
      }
      function Ae(Qe) {
        try {
          Je(te.throw(Qe));
        } catch (Gt) {
          Ke(Gt);
        }
      }
      function Je(Qe) {
        Qe.done ? Re(Qe.value) : D(Qe.value).then(mt, Ae);
      }
      Je((te = te.apply(L, X || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: g = !1 } = e, { format: m = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: p = null } = e, { show_progress: w = !0 } = e, { max_file_size: h = null } = e, { upload: k } = e, { stream_handler: S } = e, C, y, v;
  const E = P1(), z = ["image", "video", "audio", "text", "file"], W = (L) => L.startsWith(".") || L.endsWith("/*") ? L : z.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function U() {
    navigator.clipboard.read().then((L) => s(this, void 0, void 0, function* () {
      for (let X = 0; X < L.length; X++) {
        const Q = L[X].types.find((te) => te.startsWith("image/"));
        if (Q) {
          L[X].getType(Q).then((te) => s(this, void 0, void 0, function* () {
            const D = new File([te], `clipboard.${Q.replace("image/", "")}`);
            yield J([D]);
          }));
          break;
        }
      }
    }));
  }
  function V() {
    _ || p && (t(2, p.value = "", p), p.click());
  }
  function G(L) {
    return s(this, void 0, void 0, function* () {
      yield Z1(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const X = yield k(L, d, C, h ?? 1 / 0);
        return E("load", u === "single" ? X == null ? void 0 : X[0] : X), t(1, b = !1), X || [];
      } catch (X) {
        return E("error", X.message), t(1, b = !1), [];
      }
    });
  }
  function J(L) {
    return s(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let X = L.map((Q) => new File([Q], Q instanceof File ? Q.name : "file", { type: Q.type }));
      return t(15, y = yield Sr(X)), yield G(y);
    });
  }
  function fe(L) {
    return s(this, void 0, void 0, function* () {
      const X = L.target;
      if (X.files)
        if (m != "blob")
          yield J(Array.from(X.files));
        else {
          if (u === "single") {
            E("load", X.files[0]);
            return;
          }
          E("load", X.files);
        }
    });
  }
  function R(L) {
    return s(this, void 0, void 0, function* () {
      var X;
      if (t(20, r = !1), !(!((X = L.dataTransfer) === null || X === void 0) && X.files)) return;
      const Q = Array.from(L.dataTransfer.files).filter((te) => {
        const D = "." + te.name.split(".").pop();
        return D && x1(v, D, te.type) || (D && Array.isArray(o) ? o.includes(D) : D === o) ? !0 : (E("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield J(Q);
    });
  }
  function P(L) {
    Kt.call(this, l, L);
  }
  function M(L) {
    Kt.call(this, l, L);
  }
  function j(L) {
    Kt.call(this, l, L);
  }
  function O(L) {
    Kt.call(this, l, L);
  }
  function se(L) {
    Kt.call(this, l, L);
  }
  function be(L) {
    Kt.call(this, l, L);
  }
  function I(L) {
    Kt.call(this, l, L);
  }
  function Ge(L) {
    X1[L ? "unshift" : "push"](() => {
      p = L, t(2, p);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, o = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, g = L.hidden), "format" in L && t(21, m = L.format), "uploading" in L && t(1, b = L.uploading), "hidden_upload" in L && t(2, p = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, h = L.max_file_size), "upload" in L && t(23, k = L.upload), "stream_handler" in L && t(11, S = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, v = null) : typeof o == "string" ? t(16, v = W(o)) : (t(0, o = o.map(W)), t(16, v = o.join(", "))));
  }, [
    o,
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
    U,
    V,
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
    J,
    i,
    n,
    P,
    M,
    j,
    O,
    se,
    be,
    I,
    Ge
  ];
}
class eh extends H1 {
  constructor(e) {
    super(), j1(
      this,
      e,
      $1,
      Q1,
      O1,
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
  SvelteComponent: th,
  append: El,
  attr: Ki,
  create_component: nh,
  destroy_component: lh,
  detach: ih,
  element: Ji,
  init: sh,
  insert: oh,
  listen: ah,
  mount_component: rh,
  noop: fh,
  safe_not_equal: ch,
  set_style: uh,
  space: _h,
  text: dh,
  transition_in: hh,
  transition_out: mh
} = window.__gradio__svelte__internal, { createEventDispatcher: gh } = window.__gradio__svelte__internal;
function bh(l) {
  let e, t, n, i, s, o = "Click to Access Webcam", r, a, f, c;
  return i = new xa({}), {
    c() {
      e = Ji("button"), t = Ji("div"), n = Ji("span"), nh(i.$$.fragment), s = _h(), r = dh(o), Ki(n, "class", "icon-wrap svelte-fjcd9c"), Ki(t, "class", "wrap svelte-fjcd9c"), Ki(e, "class", "svelte-fjcd9c"), uh(e, "height", "100%");
    },
    m(u, _) {
      oh(u, e, _), El(e, t), El(t, n), rh(i, n, null), El(t, s), El(t, r), a = !0, f || (c = ah(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: fh,
    i(u) {
      a || (hh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      mh(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && ih(e), lh(i), f = !1, c();
    }
  };
}
function wh(l) {
  const e = gh();
  return [e, () => e("click")];
}
class ph extends th {
  constructor(e) {
    super(), sh(this, e, wh, bh, ch, {});
  }
}
function vh() {
  return navigator.mediaDevices.enumerateDevices();
}
function kh(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Po(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((s) => (kh(s, e), s));
}
function yh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Ch,
  action_destroyer: Sh,
  add_render_callback: zh,
  append: Dt,
  attr: _e,
  binding_callbacks: qh,
  check_outros: _l,
  create_component: On,
  create_in_transition: Bh,
  destroy_component: Nn,
  destroy_each: Dh,
  detach: Ee,
  element: je,
  empty: Hs,
  ensure_array_like: Zo,
  group_outros: dl,
  init: Lh,
  insert: Me,
  listen: ti,
  mount_component: Pn,
  noop: Xs,
  run_all: Eh,
  safe_not_equal: Mh,
  set_data: Ir,
  set_input_value: Cs,
  space: bl,
  stop_propagation: Rh,
  text: Tr,
  toggle_class: Ml,
  transition_in: ge,
  transition_out: ye
} = window.__gradio__svelte__internal, { createEventDispatcher: Ah, onMount: Wh } = window.__gradio__svelte__internal;
function Go(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function Ih(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = [Xh, Hh], d = [];
  function g(p, w) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(l), i = d[n] = _[n](l);
  let m = !/*recording*/
  l[8] && Ko(l), b = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && Jo(l)
  );
  return {
    c() {
      e = je("div"), t = je("button"), i.c(), o = bl(), m && m.c(), r = bl(), b && b.c(), a = Hs(), _e(t, "aria-label", s = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), _e(t, "class", "svelte-8hqvb6"), _e(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, w) {
      Me(p, e, w), Dt(e, t), d[n].m(t, null), Dt(e, o), m && m.m(e, null), Me(p, r, w), b && b.m(p, w), Me(p, a, w), f = !0, c || (u = ti(
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
      }), _l(), i = d[n], i ? i.p(p, w) : (i = d[n] = _[n](p), i.c()), ge(i, 1), i.m(t, null)), (!f || w[0] & /*mode*/
      2 && s !== (s = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && _e(t, "aria-label", s), /*recording*/
      p[8] ? m && (dl(), ye(m, 1, 1, () => {
        m = null;
      }), _l()) : m ? (m.p(p, w), w[0] & /*recording*/
      256 && ge(m, 1)) : (m = Ko(p), m.c(), ge(m, 1), m.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? b ? (b.p(p, w), w[0] & /*options_open, selected_device*/
      1152 && ge(b, 1)) : (b = Jo(p), b.c(), ge(b, 1), b.m(a.parentNode, a)) : b && (dl(), ye(b, 1, 1, () => {
        b = null;
      }), _l());
    },
    i(p) {
      f || (ge(i), ge(m), ge(b), f = !0);
    },
    o(p) {
      ye(i), ye(m), ye(b), f = !1;
    },
    d(p) {
      p && (Ee(e), Ee(r), Ee(a)), d[n].d(), m && m.d(), b && b.d(p), c = !1, u();
    }
  };
}
function Th(l) {
  let e, t, n, i;
  return t = new ph({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = je("div"), On(t.$$.fragment), _e(e, "title", "grant webcam access");
    },
    m(s, o) {
      Me(s, e, o), Pn(t, e, null), i = !0;
    },
    p: Xs,
    i(s) {
      i || (ge(t.$$.fragment, s), s && (n || zh(() => {
        n = Bh(e, Sd, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(s) {
      ye(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Ee(e), Nn(t);
    }
  };
}
function Hh(l) {
  let e, t, n;
  return t = new iu({}), {
    c() {
      e = je("div"), On(t.$$.fragment), _e(e, "class", "icon svelte-8hqvb6"), _e(e, "title", "capture photo");
    },
    m(i, s) {
      Me(i, e, s), Pn(t, e, null), n = !0;
    },
    p: Xs,
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Xh(l) {
  let e, t, n, i;
  const s = [Fh, Yh], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = Hs();
    },
    m(a, f) {
      o[e].m(a, f), Me(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (dl(), ye(o[c], 1, 1, () => {
        o[c] = null;
      }), _l(), t = o[e], t || (t = o[e] = s[e](a), t.c()), ge(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ge(t), i = !0);
    },
    o(a) {
      ye(t), i = !1;
    },
    d(a) {
      a && Ee(n), o[e].d(a);
    }
  };
}
function Yh(l) {
  let e, t, n;
  return t = new _u({}), {
    c() {
      e = je("div"), On(t.$$.fragment), _e(e, "class", "icon red svelte-8hqvb6"), _e(e, "title", "start recording");
    },
    m(i, s) {
      Me(i, e, s), Pn(t, e, null), n = !0;
    },
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Fh(l) {
  let e, t, n;
  return t = new C_({}), {
    c() {
      e = je("div"), On(t.$$.fragment), _e(e, "class", "icon red svelte-8hqvb6"), _e(e, "title", "stop recording");
    },
    m(i, s) {
      Me(i, e, s), Pn(t, e, null), n = !0;
    },
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), Nn(t);
    }
  };
}
function Ko(l) {
  let e, t, n, i, s;
  return t = new Rs({}), {
    c() {
      e = je("button"), On(t.$$.fragment), _e(e, "class", "icon svelte-8hqvb6"), _e(e, "aria-label", "select input source");
    },
    m(o, r) {
      Me(o, e, r), Pn(t, e, null), n = !0, i || (s = ti(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: Xs,
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ye(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ee(e), Nn(t), i = !1, s();
    }
  };
}
function Jo(l) {
  let e, t, n, i, s, o, r;
  n = new Rs({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Uh : jh
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = je("select"), t = je("button"), On(n.$$.fragment), i = bl(), c.c(), _e(t, "class", "inset-icon svelte-8hqvb6"), _e(e, "class", "select-wrap svelte-8hqvb6"), _e(e, "aria-label", "select source");
    },
    m(u, _) {
      Me(u, e, _), Dt(e, t), Pn(n, t, null), Dt(t, i), c.m(e, null), s = !0, o || (r = [
        ti(t, "click", Rh(
          /*click_handler_2*/
          l[22]
        )),
        Sh(Ys.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        ti(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], o = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      s || (ge(n.$$.fragment, u), s = !0);
    },
    o(u) {
      ye(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Ee(e), Nn(n), c.d(), o = !1, Eh(r);
    }
  };
}
function jh(l) {
  let e, t = Zo(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Qo(Go(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Hs();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      Me(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Zo(
          /*available_video_devices*/
          i[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Go(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Qo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Ee(e), Dh(n, i);
    }
  };
}
function Uh(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = je("option"), n = Tr(t), e.__value = "", Cs(e, e.__value), _e(e, "class", "svelte-8hqvb6");
    },
    m(i, s) {
      Me(i, e, s), Dt(e, n);
    },
    p(i, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Ir(n, t);
    },
    d(i) {
      i && Ee(e);
    }
  };
}
function Qo(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, s, o;
  return {
    c() {
      e = je("option"), n = Tr(t), i = bl(), e.__value = s = /*device*/
      l[32].deviceId, Cs(e, e.__value), e.selected = o = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, _e(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Me(r, e, a), Dt(e, n), Dt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Ir(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, Cs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Ee(e);
    }
  };
}
function Vh(l) {
  let e, t, n, i, s, o;
  const r = [Th, Ih], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), s = a[i] = r[i](l), {
    c() {
      e = je("div"), t = je("video"), n = bl(), s.c(), _e(t, "class", "svelte-8hqvb6"), Ml(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), Ml(t, "hide", !/*webcam_accessed*/
      l[9]), _e(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Me(c, e, u), Dt(e, t), l[19](t), Dt(e, n), a[i].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Ml(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Ml(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (dl(), ye(a[_], 1, 1, () => {
        a[_] = null;
      }), _l(), s = a[i], s ? s.p(c, u) : (s = a[i] = r[i](c), s.c()), ge(s, 1), s.m(e, null));
    },
    i(c) {
      o || (ge(s), o = !0);
    },
    o(c) {
      ye(s), o = !1;
    },
    d(c) {
      c && Ee(e), l[19](null), a[i].d();
    }
  };
}
function Ys(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Oh(l, e, t) {
  var n = this && this.__awaiter || function(R, P, M, j) {
    function O(se) {
      return se instanceof M ? se : new M(function(be) {
        be(se);
      });
    }
    return new (M || (M = Promise))(function(se, be) {
      function I(X) {
        try {
          L(j.next(X));
        } catch (Q) {
          be(Q);
        }
      }
      function Ge(X) {
        try {
          L(j.throw(X));
        } catch (Q) {
          be(Q);
        }
      }
      function L(X) {
        X.done ? se(X.value) : O(X.value).then(I, Ge);
      }
      L((j = j.apply(R, P || [])).next());
    });
  };
  let i, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: g } = e, { upload: m } = e;
  const b = Ah();
  Wh(() => r = document.createElement("canvas"));
  const p = (R) => n(void 0, void 0, void 0, function* () {
    const M = R.target.value;
    yield Po(d, i, M).then((j) => n(void 0, void 0, void 0, function* () {
      C = j, t(7, o = s.find((O) => O.deviceId === M) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Po(d, i).then((R) => n(this, void 0, void 0, function* () {
          t(9, z = !0), t(6, s = yield vh()), C = R;
        })).then(() => yh(s)).then((R) => {
          t(6, s = R);
          const P = C.getTracks().map((M) => {
            var j;
            return (j = M.getSettings()) === null || j === void 0 ? void 0 : j.deviceId;
          })[0];
          t(7, o = P && R.find((M) => M.deviceId === P) || s[0]);
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
      (P) => {
        b(a ? "stream" : "capture", P);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, S = [], C, y, v;
  function E() {
    if (k) {
      v.stop();
      let R = new Blob(S, { type: y }), P = new FileReader();
      P.onload = function(M) {
        return n(this, void 0, void 0, function* () {
          var j;
          if (M.target) {
            let O = new File([R], "sample." + y.substring(6));
            const se = yield Sr([O]);
            let be = ((j = yield m(se, c)) === null || j === void 0 ? void 0 : j.filter(Boolean))[0];
            b("capture", be), b("stop_recording");
          }
        });
      }, P.readAsDataURL(R);
    } else {
      b("start_recording"), S = [];
      let R = ["video/webm", "video/mp4"];
      for (let P of R)
        if (MediaRecorder.isTypeSupported(P)) {
          y = P;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      v = new MediaRecorder(C, { mimeType: y }), v.addEventListener("dataavailable", function(P) {
        S.push(P.data);
      }), v.start(200);
    }
    t(8, k = !k);
  }
  let z = !1;
  function W() {
    u === "image" && a && t(8, k = !k), u === "image" ? h() : E(), !k && C && (C.getTracks().forEach((R) => R.stop()), t(5, i.srcObject = null, i), t(9, z = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      i && !f && h();
    },
    500
  );
  let A = !1;
  function U(R) {
    R.preventDefault(), R.stopPropagation(), t(10, A = !1);
  }
  function V(R) {
    qh[R ? "unshift" : "push"](() => {
      i = R, t(5, i);
    });
  }
  const G = async () => w(), J = () => t(10, A = !0), fe = () => t(10, A = !1);
  return l.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, g = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    u,
    _,
    g,
    Ys,
    i,
    s,
    o,
    k,
    z,
    A,
    p,
    w,
    W,
    U,
    f,
    c,
    d,
    m,
    V,
    G,
    J,
    fe
  ];
}
class Nh extends Ch {
  constructor(e) {
    super(), Lh(
      this,
      e,
      Oh,
      Vh,
      Mh,
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
    return Ys;
  }
}
const {
  SvelteComponent: Ph,
  append: Xt,
  attr: T,
  detach: Zh,
  init: Gh,
  insert: Kh,
  noop: Qi,
  safe_not_equal: Jh,
  set_style: Yt,
  svg_element: wt
} = window.__gradio__svelte__internal;
function Qh(l) {
  let e, t, n, i, s, o, r, a, f;
  return {
    c() {
      e = wt("svg"), t = wt("rect"), n = wt("rect"), i = wt("rect"), s = wt("rect"), o = wt("line"), r = wt("line"), a = wt("line"), f = wt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(i, "x", "2"), T(i, "y", "17"), T(i, "width", "5"), T(i, "height", "5"), T(i, "rx", "1"), T(i, "ry", "1"), T(i, "stroke-width", "2"), T(i, "fill", "none"), T(s, "x", "17"), T(s, "y", "17"), T(s, "width", "5"), T(s, "height", "5"), T(s, "rx", "1"), T(s, "ry", "1"), T(s, "stroke-width", "2"), T(s, "fill", "none"), T(o, "x1", "7.5"), T(o, "y1", "4.5"), T(o, "x2", "16"), T(o, "y2", "4.5"), Yt(o, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Yt(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Yt(a, "stroke-width", "2px"), T(f, "x1", "19.5"), T(f, "y1", "8"), T(f, "x2", "19.5"), T(f, "y2", "16"), Yt(f, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Yt(e, "fill-rule", "evenodd"), Yt(e, "clip-rule", "evenodd"), Yt(e, "stroke-linecap", "round"), Yt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Kh(c, e, u), Xt(e, t), Xt(e, n), Xt(e, i), Xt(e, s), Xt(e, o), Xt(e, r), Xt(e, a), Xt(e, f);
    },
    p: Qi,
    i: Qi,
    o: Qi,
    d(c) {
      c && Zh(e);
    }
  };
}
class xh extends Ph {
  constructor(e) {
    super(), Gh(this, e, null, Qh, Jh, {});
  }
}
const {
  SvelteComponent: $h,
  append: e0,
  attr: nt,
  detach: t0,
  init: n0,
  insert: l0,
  noop: xi,
  safe_not_equal: i0,
  set_style: Rl,
  svg_element: xo
} = window.__gradio__svelte__internal;
function s0(l) {
  let e, t;
  return {
    c() {
      e = xo("svg"), t = xo("path"), nt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Rl(e, "fill-rule", "evenodd"), Rl(e, "clip-rule", "evenodd"), Rl(e, "stroke-linecap", "round"), Rl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      l0(n, e, i), e0(e, t);
    },
    p: xi,
    i: xi,
    o: xi,
    d(n) {
      n && t0(e);
    }
  };
}
class o0 extends $h {
  constructor(e) {
    super(), n0(this, e, null, s0, i0, {});
  }
}
const {
  SvelteComponent: a0,
  append: r0,
  attr: lt,
  detach: f0,
  init: c0,
  insert: u0,
  noop: $i,
  safe_not_equal: _0,
  set_style: Al,
  svg_element: $o
} = window.__gradio__svelte__internal;
function d0(l) {
  let e, t;
  return {
    c() {
      e = $o("svg"), t = $o("path"), lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), Al(e, "fill-rule", "evenodd"), Al(e, "clip-rule", "evenodd"), Al(e, "stroke-linecap", "round"), Al(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      u0(n, e, i), r0(e, t);
    },
    p: $i,
    i: $i,
    o: $i,
    d(n) {
      n && f0(e);
    }
  };
}
class h0 extends a0 {
  constructor(e) {
    super(), c0(this, e, null, d0, _0, {});
  }
}
const {
  SvelteComponent: m0,
  append: ea,
  attr: pt,
  detach: g0,
  init: b0,
  insert: w0,
  noop: es,
  safe_not_equal: p0,
  set_style: Wl,
  svg_element: ts
} = window.__gradio__svelte__internal;
function v0(l) {
  let e, t, n;
  return {
    c() {
      e = ts("svg"), t = ts("path"), n = ts("path"), pt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), pt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "fill", "none"), pt(e, "stroke", "currentColor"), pt(e, "stroke-width", "2"), Wl(e, "fill-rule", "evenodd"), Wl(e, "clip-rule", "evenodd"), Wl(e, "stroke-linecap", "round"), Wl(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      w0(i, e, s), ea(e, t), ea(e, n);
    },
    p: es,
    i: es,
    o: es,
    d(i) {
      i && g0(e);
    }
  };
}
class k0 extends m0 {
  constructor(e) {
    super(), b0(this, e, null, v0, p0, {});
  }
}
const {
  SvelteComponent: y0,
  append: C0,
  attr: Ft,
  detach: S0,
  init: z0,
  insert: q0,
  noop: ns,
  safe_not_equal: B0,
  set_style: Il,
  svg_element: ta
} = window.__gradio__svelte__internal;
function D0(l) {
  let e, t;
  return {
    c() {
      e = ta("svg"), t = ta("path"), Ft(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Il(e, "fill-rule", "evenodd"), Il(e, "clip-rule", "evenodd"), Il(e, "stroke-linecap", "round"), Il(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      q0(n, e, i), C0(e, t);
    },
    p: ns,
    i: ns,
    o: ns,
    d(n) {
      n && S0(e);
    }
  };
}
class L0 extends y0 {
  constructor(e) {
    super(), z0(this, e, null, D0, B0, {});
  }
}
const {
  SvelteComponent: E0,
  append: M0,
  attr: jt,
  detach: R0,
  init: A0,
  insert: W0,
  noop: ls,
  safe_not_equal: I0,
  set_style: Tl,
  svg_element: na
} = window.__gradio__svelte__internal;
function T0(l) {
  let e, t;
  return {
    c() {
      e = na("svg"), t = na("path"), jt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 24 24"), jt(e, "fill", "none"), jt(e, "stroke", "currentColor"), jt(e, "stroke-width", "2"), Tl(e, "fill-rule", "evenodd"), Tl(e, "clip-rule", "evenodd"), Tl(e, "stroke-linecap", "round"), Tl(e, "stroke-linejoin", "round"), jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      W0(n, e, i), M0(e, t);
    },
    p: ls,
    i: ls,
    o: ls,
    d(n) {
      n && R0(e);
    }
  };
}
class H0 extends E0 {
  constructor(e) {
    super(), A0(this, e, null, T0, I0, {});
  }
}
const {
  SvelteComponent: X0,
  append: la,
  attr: is,
  bubble: ia,
  create_component: Y0,
  destroy_component: F0,
  detach: Hr,
  element: sa,
  init: j0,
  insert: Xr,
  listen: ss,
  mount_component: U0,
  run_all: V0,
  safe_not_equal: O0,
  set_data: N0,
  set_input_value: oa,
  space: P0,
  text: Z0,
  transition_in: G0,
  transition_out: K0
} = window.__gradio__svelte__internal, { createEventDispatcher: J0, afterUpdate: Q0 } = window.__gradio__svelte__internal;
function x0(l) {
  let e;
  return {
    c() {
      e = Z0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Xr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && N0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Hr(e);
    }
  };
}
function $0(l) {
  let e, t, n, i, s, o, r;
  return t = new Na({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [x0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = sa("label"), Y0(t.$$.fragment), n = P0(), i = sa("input"), is(i, "type", "color"), i.disabled = /*disabled*/
      l[3], is(i, "class", "svelte-16l8u73"), is(e, "class", "block");
    },
    m(a, f) {
      Xr(a, e, f), U0(t, e, null), la(e, n), la(e, i), oa(
        i,
        /*value*/
        l[0]
      ), s = !0, o || (r = [
        ss(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        ss(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        ss(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], o = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!s || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && oa(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (G0(t.$$.fragment, a), s = !0);
    },
    o(a) {
      K0(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Hr(e), F0(t), o = !1, V0(r);
    }
  };
}
function em(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = J0();
  function c() {
    f("change", n), i || f("input");
  }
  Q0(() => {
    t(5, i = !1);
  });
  function u(g) {
    ia.call(this, l, g);
  }
  function _(g) {
    ia.call(this, l, g);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (g) => {
    "value" in g && t(0, n = g.value), "value_is_output" in g && t(5, i = g.value_is_output), "label" in g && t(1, s = g.label), "info" in g && t(2, o = g.info), "disabled" in g && t(3, r = g.disabled), "show_label" in g && t(4, a = g.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    s,
    o,
    r,
    a,
    i,
    u,
    _,
    d
  ];
}
class tm extends X0 {
  constructor(e) {
    super(), j0(this, e, em, $0, O0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var Yr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, tl = (l, e, t) => (Yr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), nm = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, lm = (l, e, t, n) => (Yr(l, e, "write to private field"), e.set(l, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class L2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = tl(this, Ot) + t; ; ) {
          const i = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (i === -1 || i - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (i === -1)
            break;
          const o = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, o)), t = t.slice(i + 1);
        }
        lm(this, Ot, t);
      },
      flush: (t) => {
        if (tl(this, Ot) === "")
          return;
        const n = e.allowCR && tl(this, Ot).endsWith("\r") ? tl(this, Ot).slice(0, -1) : tl(this, Ot);
        t.enqueue(n);
      }
    }), nm(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: im,
  append: Fr,
  attr: le,
  bubble: sm,
  check_outros: om,
  create_slot: jr,
  detach: vl,
  element: bi,
  empty: am,
  get_all_dirty_from_scope: Ur,
  get_slot_changes: Vr,
  group_outros: rm,
  init: fm,
  insert: kl,
  listen: cm,
  safe_not_equal: um,
  set_style: De,
  space: Or,
  src_url_equal: ni,
  toggle_class: In,
  transition_in: li,
  transition_out: ii,
  update_slot_base: Nr
} = window.__gradio__svelte__internal;
function _m(l) {
  let e, t, n, i, s, o, r = (
    /*icon*/
    l[7] && aa(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = jr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bi("button"), r && r.c(), t = Or(), f && f.c(), le(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), le(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], In(e, "hidden", !/*visible*/
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
      kl(c, e, u), r && r.m(e, null), Fr(e, t), f && f.m(e, null), i = !0, s || (o = cm(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = aa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && Nr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? Vr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Ur(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && le(e, "class", n), (!i || u & /*elem_id*/
      1) && le(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && In(e, "hidden", !/*visible*/
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
      i || (li(f, c), i = !0);
    },
    o(c) {
      ii(f, c), i = !1;
    },
    d(c) {
      c && vl(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function dm(l) {
  let e, t, n, i, s = (
    /*icon*/
    l[7] && ra(l)
  );
  const o = (
    /*#slots*/
    l[12].default
  ), r = jr(
    o,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = bi("a"), s && s.c(), t = Or(), r && r.c(), le(
        e,
        "href",
        /*link*/
        l[6]
      ), le(e, "rel", "noopener noreferrer"), le(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), le(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), le(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), In(e, "hidden", !/*visible*/
      l[2]), In(
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
      kl(a, e, f), s && s.m(e, null), Fr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = ra(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Nr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        i ? Vr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Ur(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && le(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && le(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && le(e, "class", n), (!i || f & /*elem_id*/
      1) && le(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && In(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && In(
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
      i || (li(r, a), i = !0);
    },
    o(a) {
      ii(r, a), i = !1;
    },
    d(a) {
      a && vl(e), s && s.d(), r && r.d(a);
    }
  };
}
function aa(l) {
  let e, t, n;
  return {
    c() {
      e = bi("img"), le(e, "class", "button-icon svelte-8huxfn"), ni(e.src, t = /*icon*/
      l[7].url) || le(e, "src", t), le(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      kl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !ni(e.src, t = /*icon*/
      i[7].url) && le(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && le(e, "alt", n);
    },
    d(i) {
      i && vl(e);
    }
  };
}
function ra(l) {
  let e, t, n;
  return {
    c() {
      e = bi("img"), le(e, "class", "button-icon svelte-8huxfn"), ni(e.src, t = /*icon*/
      l[7].url) || le(e, "src", t), le(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      kl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !ni(e.src, t = /*icon*/
      i[7].url) && le(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && le(e, "alt", n);
    },
    d(i) {
      i && vl(e);
    }
  };
}
function hm(l) {
  let e, t, n, i;
  const s = [dm, _m], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = am();
    },
    m(a, f) {
      o[e].m(a, f), kl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (rm(), ii(o[c], 1, 1, () => {
        o[c] = null;
      }), om(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), li(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (li(t), i = !0);
    },
    o(a) {
      ii(t), i = !1;
    },
    d(a) {
      a && vl(n), o[e].d(a);
    }
  };
}
function mm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e;
  function b(p) {
    sm.call(this, l, p);
  }
  return l.$$set = (p) => {
    "elem_id" in p && t(0, s = p.elem_id), "elem_classes" in p && t(1, o = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, f = p.size), "value" in p && t(5, c = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, _ = p.icon), "disabled" in p && t(8, d = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, m = p.min_width), "$$scope" in p && t(11, i = p.$$scope);
  }, [
    s,
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
    i,
    n,
    b
  ];
}
class Ss extends im {
  constructor(e) {
    super(), fm(this, e, mm, hm, um, {
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
  SvelteComponent: gm,
  add_render_callback: Pr,
  append: Hl,
  attr: Xe,
  binding_callbacks: fa,
  check_outros: bm,
  create_bidirectional_transition: ca,
  destroy_each: wm,
  detach: hl,
  element: si,
  empty: pm,
  ensure_array_like: ua,
  group_outros: vm,
  init: km,
  insert: ml,
  listen: zs,
  prevent_default: ym,
  run_all: Cm,
  safe_not_equal: Sm,
  set_data: zm,
  set_style: Dn,
  space: qs,
  text: qm,
  toggle_class: ft,
  transition_in: os,
  transition_out: _a
} = window.__gradio__svelte__internal, { createEventDispatcher: Bm } = window.__gradio__svelte__internal;
function da(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function ha(l) {
  let e, t, n, i, s, o = ua(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = ma(da(l, o, a));
  return {
    c() {
      e = si("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Xe(e, "class", "options svelte-yuohum"), Xe(e, "role", "listbox"), Dn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Dn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Dn(
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
      l[22](e), n = !0, i || (s = zs(e, "mousedown", ym(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ua(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = da(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = ma(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Dn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Dn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Dn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Pr(() => {
        n && (t || (t = ca(e, wo, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ca(e, wo, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && hl(e), wm(r, a), l[22](null), a && t && t.end(), i = !1, s();
    }
  };
}
function ma(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = si("li"), t = si("span"), t.textContent = "✓", n = qs(), s = qm(i), o = qs(), Xe(t, "class", "inner-item svelte-yuohum"), ft(t, "hide", !/*selected_indices*/
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
      ml(c, e, u), Hl(e, t), Hl(e, n), Hl(e, s), Hl(e, o);
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
      ][0] + "") && zm(s, i), u & /*filtered_indices*/
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
function Dm(l) {
  let e, t, n, i, s;
  Pr(
    /*onwindowresize*/
    l[19]
  );
  let o = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && ha(l)
  );
  return {
    c() {
      e = si("div"), t = qs(), o && o.c(), n = pm(), Xe(e, "class", "reference");
    },
    m(r, a) {
      ml(r, e, a), l[20](e), ml(r, t, a), o && o.m(r, a), ml(r, n, a), i || (s = [
        zs(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        zs(
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
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && os(o, 1)) : (o = ha(r), o.c(), os(o, 1), o.m(n.parentNode, n)) : o && (vm(), _a(o, 1, 1, () => {
        o = null;
      }), bm());
    },
    i(r) {
      os(o);
    },
    o(r) {
      _a(o);
    },
    d(r) {
      r && (hl(e), hl(t), hl(n)), l[20](null), o && o.d(r), i = !1, Cm(s);
    }
  };
}
function Lm(l, e, t) {
  var n, i;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, g, m, b, p, w, h;
  function k() {
    const { top: A, bottom: U } = m.getBoundingClientRect();
    t(16, u = A), t(17, _ = h - U);
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
  const y = Bm();
  function v() {
    t(11, h = window.innerHeight);
  }
  function E(A) {
    fa[A ? "unshift" : "push"](() => {
      m = A, t(6, m);
    });
  }
  const z = (A) => y("change", A);
  function W(A) {
    fa[A ? "unshift" : "push"](() => {
      b = A, t(7, b);
    });
  }
  return l.$$set = (A) => {
    "choices" in A && t(0, s = A.choices), "filtered_indices" in A && t(1, o = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (b && f.length > 0) {
          let U = b.querySelectorAll("li");
          for (const V of Array.from(U))
            if (V.getAttribute("data-index") === f[0].toString()) {
              t(14, n = b == null ? void 0 : b.scrollTo) === null || n === void 0 || n.call(b, 0, V.offsetTop);
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
    s,
    o,
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
    E,
    z,
    W
  ];
}
class Em extends gm {
  constructor(e) {
    super(), km(this, e, Lm, Dm, Sm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Mm(l, e) {
  return (l % e + e) % e;
}
function ga(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Rm(l, e, t) {
  l("change", e), t || l("input");
}
function Am(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Mm(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Wm,
  append: xt,
  attr: He,
  binding_callbacks: Im,
  check_outros: Tm,
  create_component: Bs,
  destroy_component: Ds,
  detach: Fs,
  element: Mn,
  group_outros: Hm,
  init: Xm,
  insert: js,
  listen: nl,
  mount_component: Ls,
  run_all: Ym,
  safe_not_equal: Fm,
  set_data: jm,
  set_input_value: ba,
  space: as,
  text: Um,
  toggle_class: Ln,
  transition_in: Rn,
  transition_out: cl
} = window.__gradio__svelte__internal, { onMount: Vm } = window.__gradio__svelte__internal, { createEventDispatcher: Om, afterUpdate: Nm } = window.__gradio__svelte__internal;
function Pm(l) {
  let e;
  return {
    c() {
      e = Um(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      js(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && jm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Fs(e);
    }
  };
}
function wa(l) {
  let e, t, n;
  return t = new Rs({}), {
    c() {
      e = Mn("div"), Bs(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, s) {
      js(i, e, s), Ls(t, e, null), n = !0;
    },
    i(i) {
      n || (Rn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      cl(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Fs(e), Ds(t);
    }
  };
}
function Zm(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g;
  t = new Na({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [Pm] },
      $$scope: { ctx: l }
    }
  });
  let m = !/*disabled*/
  l[3] && wa();
  return u = new Em({
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
      e = Mn("div"), Bs(t.$$.fragment), n = as(), i = Mn("div"), s = Mn("div"), o = Mn("div"), r = Mn("input"), f = as(), m && m.c(), c = as(), Bs(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
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
      l[7], Ln(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), He(o, "class", "secondary-wrap svelte-1m1zvyj"), He(s, "class", "wrap-inner svelte-1m1zvyj"), Ln(
        s,
        "show_options",
        /*show_options*/
        l[12]
      ), He(i, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), Ln(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(b, p) {
      js(b, e, p), Ls(t, e, null), xt(e, n), xt(e, i), xt(i, s), xt(s, o), xt(o, r), ba(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), xt(o, f), m && m.m(o, null), xt(i, c), Ls(u, i, null), _ = !0, d || (g = [
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
      b[9] && ba(
        r,
        /*input_text*/
        b[9]
      ), (!_ || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Ln(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? m && (Hm(), cl(m, 1, 1, () => {
        m = null;
      }), Tm()) : m ? p[0] & /*disabled*/
      8 && Rn(m, 1) : (m = wa(), m.c(), Rn(m, 1), m.m(o, null)), (!_ || p[0] & /*show_options*/
      4096) && Ln(
        s,
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
      32) && Ln(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      _ || (Rn(t.$$.fragment, b), Rn(m), Rn(u.$$.fragment, b), _ = !0);
    },
    o(b) {
      cl(t.$$.fragment, b), cl(m), cl(u.$$.fragment, b), _ = !1;
    },
    d(b) {
      b && Fs(e), Ds(t), l[29](null), m && m.d(), Ds(u), d = !1, Ym(g);
    }
  };
}
function Gm(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: g = !0 } = e, m, b = !1, p, w, h = "", k = "", S = !1, C = [], y = null, v = null, E;
  const z = Om();
  s ? (E = a.map((M) => M[1]).indexOf(s), v = E, v === -1 ? (o = s, v = null) : ([h, o] = a[v], k = h), A()) : a.length > 0 && (E = 0, v = 0, [h, s] = a[v], o = s, k = h);
  function W() {
    t(13, p = a.map((M) => M[0])), t(24, w = a.map((M) => M[1]));
  }
  function A() {
    W(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, h = ""), t(11, v = null)) : w.includes(s) ? (t(9, h = p[w.indexOf(s)]), t(11, v = w.indexOf(s))) : d ? (t(9, h = s), t(11, v = null)) : (t(9, h = ""), t(11, v = null)), t(27, E = v);
  }
  function U(M) {
    if (t(11, v = parseInt(M.detail.target.dataset.index)), isNaN(v)) {
      t(11, v = null);
      return;
    }
    t(12, b = !1), t(14, y = null), m.blur();
  }
  function V(M) {
    t(10, C = a.map((j, O) => O)), t(12, b = !0), z("focus");
  }
  function G() {
    d ? t(20, s = h) : t(9, h = p[w.indexOf(s)]), t(12, b = !1), t(14, y = null), z("blur");
  }
  function J(M) {
    t(12, [b, y] = Am(M, y, C), b, (t(14, y), t(2, a), t(23, f), t(6, d), t(9, h), t(10, C), t(8, m), t(25, k), t(11, v), t(27, E), t(26, S), t(24, w))), M.key === "Enter" && (y !== null ? (t(11, v = y), t(12, b = !1), m.blur(), t(14, y = null)) : p.includes(h) ? (t(11, v = p.indexOf(h)), t(12, b = !1), t(14, y = null), m.blur()) : d && (t(20, s = h), t(11, v = null), t(12, b = !1), t(14, y = null), m.blur()), z("enter", s));
  }
  Nm(() => {
    t(21, r = !1), t(26, S = !0);
  }), Vm(() => {
    m.focus();
  });
  function fe() {
    h = this.value, t(9, h), t(11, v), t(27, E), t(26, S), t(2, a), t(24, w);
  }
  function R(M) {
    Im[M ? "unshift" : "push"](() => {
      m = M, t(8, m);
    });
  }
  const P = (M) => z("key_up", { key: M.key, input_value: h });
  return l.$$set = (M) => {
    "label" in M && t(0, n = M.label), "info" in M && t(1, i = M.info), "value" in M && t(20, s = M.value), "value_is_output" in M && t(21, r = M.value_is_output), "choices" in M && t(2, a = M.choices), "disabled" in M && t(3, c = M.disabled), "show_label" in M && t(4, u = M.show_label), "container" in M && t(5, _ = M.container), "allow_custom_value" in M && t(6, d = M.allow_custom_value), "filterable" in M && t(7, g = M.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && v !== E && v !== null && S && (t(9, [h, s] = a[v], h, (t(20, s), t(11, v), t(27, E), t(26, S), t(2, a), t(24, w))), t(27, E = v), z("select", {
      index: v,
      value: w[v],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), Rm(z, s, r), t(22, o = s)), l.$$.dirty[0] & /*choices*/
    4 && W(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, C = ga(a, h)), !d && C.length > 0 && t(14, y = C[0]), m == document.activeElement && t(12, b = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && h !== k && (t(10, C = ga(a, h)), t(25, k = h), !d && C.length > 0 && t(14, y = C[0]));
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
    U,
    V,
    G,
    J,
    s,
    r,
    o,
    f,
    w,
    k,
    S,
    E,
    fe,
    R,
    P
  ];
}
class Km extends Wm {
  constructor(e) {
    super(), Xm(
      this,
      e,
      Gm,
      Zm,
      Fm,
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
  SvelteComponent: Jm,
  append: Oe,
  attr: Tn,
  check_outros: Es,
  create_component: rn,
  destroy_component: fn,
  detach: Zn,
  element: ut,
  group_outros: Ms,
  init: Qm,
  insert: Gn,
  listen: xm,
  mount_component: cn,
  safe_not_equal: $m,
  set_style: Hn,
  space: ll,
  text: Us,
  toggle_class: pa,
  transition_in: Ce,
  transition_out: Ye
} = window.__gradio__svelte__internal, { createEventDispatcher: eg } = window.__gradio__svelte__internal, { onMount: tg, onDestroy: ng } = window.__gradio__svelte__internal;
function va(l) {
  let e, t, n, i, s, o, r;
  const a = [ig, lg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = ut("div"), t = ut("button"), i.c(), Tn(t, "class", "icon svelte-d9x7u0"), Tn(t, "aria-label", "Lock label detail"), pa(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), Hn(e, "margin-right", "8px");
    },
    m(u, _) {
      Gn(u, e, _), Oe(e, t), f[n].m(t, null), s = !0, o || (r = xm(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Ms(), Ye(f[d], 1, 1, () => {
        f[d] = null;
      }), Es(), i = f[n], i || (i = f[n] = a[n](u), i.c()), Ce(i, 1), i.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && pa(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (Ce(i), s = !0);
    },
    o(u) {
      Ye(i), s = !1;
    },
    d(u) {
      u && Zn(e), f[n].d(), o = !1, r();
    }
  };
}
function lg(l) {
  let e, t;
  return e = new H0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function ig(l) {
  let e, t;
  return e = new L0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ce(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function sg(l) {
  let e;
  return {
    c() {
      e = Us("Cancel");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function ka(l) {
  let e, t, n;
  return t = new Ss({
    props: {
      variant: "stop",
      $$slots: { default: [og] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = ut("div"), rn(t.$$.fragment), Hn(e, "margin-right", "8px");
    },
    m(i, s) {
      Gn(i, e, s), cn(t, e, null), n = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (Ce(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Zn(e), fn(t);
    }
  };
}
function og(l) {
  let e;
  return {
    c() {
      e = Us("Remove");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function ag(l) {
  let e;
  return {
    c() {
      e = Us("OK");
    },
    m(t, n) {
      Gn(t, e, n);
    },
    d(t) {
      t && Zn(e);
    }
  };
}
function rg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m, b, p, w = !/*showRemove*/
  l[4] && va(l);
  o = new Km({
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
  }), o.$on(
    "change",
    /*onDropDownChange*/
    l[6]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    l[8]
  ), f = new tm({
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
  ), _ = new Ss({
    props: {
      $$slots: { default: [sg] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let h = (
    /*showRemove*/
    l[4] && ka(l)
  );
  return b = new Ss({
    props: {
      variant: "primary",
      $$slots: { default: [ag] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = ut("div"), t = ut("div"), n = ut("span"), w && w.c(), i = ll(), s = ut("div"), rn(o.$$.fragment), r = ll(), a = ut("div"), rn(f.$$.fragment), c = ll(), u = ut("div"), rn(_.$$.fragment), d = ll(), h && h.c(), g = ll(), m = ut("div"), rn(b.$$.fragment), Hn(s, "margin-right", "10px"), Hn(a, "margin-right", "40px"), Hn(a, "margin-bottom", "8px"), Hn(u, "margin-right", "8px"), Tn(n, "class", "model-content svelte-d9x7u0"), Tn(t, "class", "modal-container svelte-d9x7u0"), Tn(e, "class", "modal svelte-d9x7u0"), Tn(e, "id", "model-box-edit");
    },
    m(k, S) {
      Gn(k, e, S), Oe(e, t), Oe(t, n), w && w.m(n, null), Oe(n, i), Oe(n, s), cn(o, s, null), Oe(n, r), Oe(n, a), cn(f, a, null), Oe(n, c), Oe(n, u), cn(_, u, null), Oe(n, d), h && h.m(n, null), Oe(n, g), Oe(n, m), cn(b, m, null), p = !0;
    },
    p(k, [S]) {
      /*showRemove*/
      k[4] ? w && (Ms(), Ye(w, 1, 1, () => {
        w = null;
      }), Es()) : w ? (w.p(k, S), S & /*showRemove*/
      16 && Ce(w, 1)) : (w = va(k), w.c(), Ce(w, 1), w.m(n, i));
      const C = {};
      S & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      k[0]), S & /*choices*/
      8 && (C.choices = /*choices*/
      k[3]), o.$set(C);
      const y = {};
      S & /*currentColor*/
      2 && (y.value = /*currentColor*/
      k[1]), f.$set(y);
      const v = {};
      S & /*$$scope*/
      262144 && (v.$$scope = { dirty: S, ctx: k }), _.$set(v), /*showRemove*/
      k[4] ? h ? (h.p(k, S), S & /*showRemove*/
      16 && Ce(h, 1)) : (h = ka(k), h.c(), Ce(h, 1), h.m(n, g)) : h && (Ms(), Ye(h, 1, 1, () => {
        h = null;
      }), Es());
      const E = {};
      S & /*$$scope*/
      262144 && (E.$$scope = { dirty: S, ctx: k }), b.$set(E);
    },
    i(k) {
      p || (Ce(w), Ce(o.$$.fragment, k), Ce(f.$$.fragment, k), Ce(_.$$.fragment, k), Ce(h), Ce(b.$$.fragment, k), p = !0);
    },
    o(k) {
      Ye(w), Ye(o.$$.fragment, k), Ye(f.$$.fragment, k), Ye(_.$$.fragment, k), Ye(h), Ye(b.$$.fragment, k), p = !1;
    },
    d(k) {
      k && Zn(e), w && w.d(), fn(o), fn(f), fn(_), h && h.d(), fn(b);
    }
  };
}
function fg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = eg();
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
    Number.isInteger(y) ? (Array.isArray(o) && y < o.length && t(1, a = o[y]), Array.isArray(s) && y < s.length && t(0, i = s[y][0])) : t(0, i = y);
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
  tg(() => {
    document.addEventListener("keydown", p), t(0, i = n), t(1, a = r);
  }), ng(() => {
    document.removeEventListener("keydown", p);
  });
  const w = () => _(0), h = () => _(-1), k = () => _(1);
  return l.$$set = (S) => {
    "label" in S && t(10, n = S.label), "currentLabel" in S && t(0, i = S.currentLabel), "choices" in S && t(3, s = S.choices), "choicesColors" in S && t(11, o = S.choicesColors), "color" in S && t(12, r = S.color), "currentColor" in S && t(1, a = S.currentColor), "showRemove" in S && t(4, f = S.showRemove), "labelDetailLock" in S && t(2, c = S.labelDetailLock);
  }, [
    i,
    a,
    c,
    s,
    f,
    _,
    d,
    g,
    m,
    b,
    n,
    o,
    r,
    w,
    h,
    k
  ];
}
class Vs extends Jm {
  constructor(e) {
    super(), Qm(this, e, fg, rg, $m, {
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
const he = (l, e, t) => Math.min(Math.max(l, e), t);
function rs(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, s] = t;
  return `rgba(${n}, ${i}, ${s}, ${e})`;
}
class fs {
  // Assuming text is optional
  constructor(e, t, n, i, s, o, r, a, f, c, u, _, d = "rgb(255, 255, 255)", g = 0.5, m = 25, b = 8, p = 2, w = 4, h = 1, k, S) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let y = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = he(y, -this._xmin, E - this._xmax), v = he(v, -this._ymin, z - this._ymax), this._xmin += y, this._ymin += v, this._xmax += y, this._ymax += v, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [y, v] = this.toBoxCoordinates(C.clientX, C.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, v = (v - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), v > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = v, this.creatingAnchorY = "ymin") : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = v : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = v : v < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = v, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = he(this._xmin, 0, y - this.minSize), this._ymin = he(this._ymin, 0, v - this.minSize), this._xmax = he(this._xmax, this.minSize, y), this._ymax = he(this._ymax, this.minSize, v), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > v ? (this._ymin -= this._ymax - v, this._ymax = v) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const y = C.clientX, v = C.clientY, E = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, z = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, A = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += E, this._ymin += z, this._xmin = he(this._xmin, 0, this._xmax - this.minSize), this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += E, this._ymin += z, this._xmax = he(this._xmax, this._xmin + this.minSize, W), this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += E, this._ymax += z, this._xmax = he(this._xmax, this._xmin + this.minSize, W), this._ymax = he(this._ymax, this._ymin + this.minSize, A);
            break;
          case 3:
            this._xmin += E, this._ymax += z, this._xmin = he(this._xmin, 0, this._xmax - this.minSize), this._ymax = he(this._ymax, this._ymin + this.minSize, A);
            break;
          case 4:
            this._ymin += z, this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += E, this._xmax = he(this._xmax, this._xmin + this.minSize, W);
            break;
          case 6:
            this._ymax += z, this._ymax = he(this._ymax, this._ymin + this.minSize, A);
            break;
          case 7:
            this._xmin += E, this._xmin = he(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = i, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = h, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = d, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.id = k, this.text = S;
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = rs(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = rs(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, i, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, i, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = rs(this.color, 1);
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
    const [t, n, i, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - s, this._xmax = this.canvasWindow.imageWidth - i, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = i, this._xmax = s, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const $t = [
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
], Xl = (l, e, t) => Math.min(Math.max(l, e), t);
class cg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, i = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Xl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Xl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Xl(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Xl(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += i, this.renderCallBack();
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
  SvelteComponent: ug,
  append: ct,
  attr: ke,
  binding_callbacks: _g,
  bubble: cs,
  check_outros: Xn,
  create_component: zt,
  destroy_component: qt,
  detach: kt,
  element: Ct,
  empty: dg,
  group_outros: Yn,
  init: hg,
  insert: yt,
  is_function: mg,
  listen: Fe,
  mount_component: Bt,
  noop: Zr,
  run_all: Gr,
  safe_not_equal: gg,
  space: St,
  toggle_class: Yl,
  transition_in: $,
  transition_out: re
} = window.__gradio__svelte__internal, { onMount: bg, onDestroy: wg, createEventDispatcher: pg } = window.__gradio__svelte__internal;
function ya(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m, b, p;
  n = new xh({}), o = new o0({});
  let w = (
    /*showRemoveButton*/
    l[1] && Ca(l)
  ), h = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[14] && Sa(l);
  return u = new E_({}), g = new m_({}), {
    c() {
      e = Ct("span"), t = Ct("button"), zt(n.$$.fragment), i = St(), s = Ct("button"), zt(o.$$.fragment), r = St(), w && w.c(), a = St(), h && h.c(), f = St(), c = Ct("button"), zt(u.$$.fragment), _ = St(), d = Ct("button"), zt(g.$$.fragment), ke(t, "class", "icon svelte-3rql59"), ke(t, "aria-label", "Create box"), Yl(
        t,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].creation
      ), ke(s, "class", "icon svelte-3rql59"), ke(s, "aria-label", "Edit boxes"), Yl(
        s,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].drag
      ), ke(c, "class", "icon svelte-3rql59"), ke(c, "aria-label", "Rotate counterclockwise"), ke(d, "class", "icon svelte-3rql59"), ke(d, "aria-label", "Rotate clockwise"), ke(e, "class", "canvas-control svelte-3rql59");
    },
    m(k, S) {
      yt(k, e, S), ct(e, t), Bt(n, t, null), ct(e, i), ct(e, s), Bt(o, s, null), ct(e, r), w && w.m(e, null), ct(e, a), h && h.m(e, null), ct(e, f), ct(e, c), Bt(u, c, null), ct(e, _), ct(e, d), Bt(g, d, null), m = !0, b || (p = [
        Fe(
          t,
          "click",
          /*click_handler*/
          l[38]
        ),
        Fe(
          s,
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
      1152) && Yl(
        t,
        "selected",
        /*mode*/
        k[10] === /*Mode*/
        k[7].creation
      ), (!m || S[0] & /*mode, Mode*/
      1152) && Yl(
        s,
        "selected",
        /*mode*/
        k[10] === /*Mode*/
        k[7].drag
      ), /*showRemoveButton*/
      k[1] ? w ? (w.p(k, S), S[0] & /*showRemoveButton*/
      2 && $(w, 1)) : (w = Ca(k), w.c(), $(w, 1), w.m(e, a)) : w && (Yn(), re(w, 1, 1, () => {
        w = null;
      }), Xn()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[14] ? h ? (h.p(k, S), S[0] & /*disableEditBoxes, labelDetailLock*/
      16416 && $(h, 1)) : (h = Sa(k), h.c(), $(h, 1), h.m(e, f)) : h && (Yn(), re(h, 1, 1, () => {
        h = null;
      }), Xn());
    },
    i(k) {
      m || ($(n.$$.fragment, k), $(o.$$.fragment, k), $(w), $(h), $(u.$$.fragment, k), $(g.$$.fragment, k), m = !0);
    },
    o(k) {
      re(n.$$.fragment, k), re(o.$$.fragment, k), re(w), re(h), re(u.$$.fragment, k), re(g.$$.fragment, k), m = !1;
    },
    d(k) {
      k && kt(e), qt(n), qt(o), w && w.d(), h && h.d(), qt(u), qt(g), b = !1, Gr(p);
    }
  };
}
function Ca(l) {
  let e, t, n, i, s;
  return t = new h0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-3rql59"), ke(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      yt(o, e, r), Bt(t, e, null), n = !0, i || (s = Fe(
        e,
        "click",
        /*click_handler_2*/
        l[40]
      ), i = !0);
    },
    p: Zr,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), qt(t), i = !1, s();
    }
  };
}
function Sa(l) {
  let e, t, n, i, s;
  return t = new k0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ke(e, "class", "icon svelte-3rql59"), ke(e, "aria-label", "Edit label");
    },
    m(o, r) {
      yt(o, e, r), Bt(t, e, null), n = !0, i || (s = Fe(
        e,
        "click",
        /*click_handler_3*/
        l[41]
      ), i = !0);
    },
    p: Zr,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      re(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), qt(t), i = !1, s();
    }
  };
}
function za(l) {
  let e, t;
  return e = new Vs({
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
        l[0].boxes.length ? gn(
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
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (s.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (s.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function qa(l) {
  let e, t;
  return e = new Vs({
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
        l[0].boxes.length ? gn(
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
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (s.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (s.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      16384 && (s.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function Ba(l) {
  let e, t;
  return e = new Vs({
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
        l[0].boxes.length ? gn(
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
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      513 && (s.label = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      513 && (s.color = /*selectedBox*/
      n[9] >= 0 && /*selectedBox*/
      n[9] < /*value*/
      n[0].boxes.length ? gn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[9]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      16384 && (s.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function vg(l) {
  let e, t, n, i, s, o, r, a, f, c, u = (
    /*interactive*/
    l[2] && ya(l)
  ), _ = (
    /*editModalVisible*/
    l[11] && za(l)
  ), d = (
    /*newModalVisible*/
    l[12] && qa(l)
  ), g = (
    /*editDefaultLabelVisible*/
    l[13] && Ba(l)
  );
  return {
    c() {
      e = Ct("div"), t = Ct("canvas"), n = St(), u && u.c(), i = St(), _ && _.c(), s = St(), d && d.c(), o = St(), g && g.c(), r = dg(), ke(t, "class", "canvas-annotator svelte-3rql59"), ke(e, "class", "canvas-container svelte-3rql59"), ke(e, "tabindex", "-1");
    },
    m(m, b) {
      yt(m, e, b), ct(e, t), l[37](t), yt(m, n, b), u && u.m(m, b), yt(m, i, b), _ && _.m(m, b), yt(m, s, b), d && d.m(m, b), yt(m, o, b), g && g.m(m, b), yt(m, r, b), a = !0, f || (c = [
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
          mg(
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
      4 && $(u, 1)) : (u = ya(l), u.c(), $(u, 1), u.m(i.parentNode, i)) : u && (Yn(), re(u, 1, 1, () => {
        u = null;
      }), Xn()), /*editModalVisible*/
      l[11] ? _ ? (_.p(l, b), b[0] & /*editModalVisible*/
      2048 && $(_, 1)) : (_ = za(l), _.c(), $(_, 1), _.m(s.parentNode, s)) : _ && (Yn(), re(_, 1, 1, () => {
        _ = null;
      }), Xn()), /*newModalVisible*/
      l[12] ? d ? (d.p(l, b), b[0] & /*newModalVisible*/
      4096 && $(d, 1)) : (d = qa(l), d.c(), $(d, 1), d.m(o.parentNode, o)) : d && (Yn(), re(d, 1, 1, () => {
        d = null;
      }), Xn()), /*editDefaultLabelVisible*/
      l[13] ? g ? (g.p(l, b), b[0] & /*editDefaultLabelVisible*/
      8192 && $(g, 1)) : (g = Ba(l), g.c(), $(g, 1), g.m(r.parentNode, r)) : g && (Yn(), re(g, 1, 1, () => {
        g = null;
      }), Xn());
    },
    i(m) {
      a || ($(u), $(_), $(d), $(g), a = !0);
    },
    o(m) {
      re(u), re(_), re(d), re(g), a = !1;
    },
    d(m) {
      m && (kt(e), kt(n), kt(i), kt(s), kt(o), kt(r)), l[37](null), u && u.d(m), _ && _.d(m), d && d.d(m), g && g.d(m), f = !1, Gr(c);
    }
  };
}
function Fl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function gn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function kg(l, e, t) {
  var n;
  (function(q) {
    q[q.creation = 0] = "creation", q[q.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: g = !1 } = e, { singleBox: m = !1 } = e, { showRemoveButton: b = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: w = !1 } = e;
  b === null && (b = g);
  let h, k, S = null, C = -1, y = n.drag, v = new cg(O);
  u !== null && u.boxes.length == 0 && (y = n.creation);
  let E = 0, z = 0, W = 0, A = 0, U = 1, V = 0, G = 0, J = !1, fe = !1, R = !1, P = w, M = { label: "", color: "" };
  const j = pg();
  function O() {
    if (k) {
      if (k.clearRect(0, 0, h.width, h.height), k.save(), k.translate(v.offsetX, v.offsetY), k.scale(v.scale, v.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            k.drawImage(S, 0, 0, V, G);
            break;
          case 1:
            k.translate(V, 0), k.rotate(Math.PI / 2), k.drawImage(S, 0, 0, G, V);
            break;
          case 2:
            k.translate(V, G), k.rotate(Math.PI), k.drawImage(S, 0, 0, V, G);
            break;
          case 3:
            k.translate(0, G), k.rotate(-Math.PI / 2), k.drawImage(S, 0, 0, G, V);
            break;
        }
        k.restore();
      }
      for (const q of u.boxes.slice().reverse())
        q.render(k);
    }
  }
  function se(q) {
    t(9, C = q), u.boxes.forEach((H) => {
      H.setSelected(!1);
    }), q >= 0 && q < u.boxes.length && u.boxes[q].setSelected(!0), O();
  }
  function be(q) {
    s && (q.target instanceof Element && q.target.hasPointerCapture(q.pointerId) && q.target.releasePointerCapture(q.pointerId), y === n.creation ? te(q) : y === n.drag && I(q));
  }
  function I(q) {
    const H = h.getBoundingClientRect(), x = q.clientX - H.left, ae = q.clientY - H.top;
    let ne = !1;
    for (const [oe, we] of u.boxes.entries()) {
      const yn = we.indexOfPointInsideHandle(x, ae);
      if (yn >= 0) {
        ne = !0, se(oe), we.startResize(yn, q);
        return;
      }
    }
    for (const [oe, we] of u.boxes.entries())
      if (we.isPointInsideBox(x, ae)) {
        ne = !0, se(oe), we.startDrag(q);
        return;
      }
    m || se(-1), ne || v.startDrag(q);
  }
  function Ge(q) {
    j("change");
  }
  function L(q) {
    if (u === null || y !== n.drag)
      return;
    const H = h.getBoundingClientRect(), x = q.clientX - H.left, ae = q.clientY - H.top;
    for (const [ne, oe] of u.boxes.entries()) {
      const we = oe.indexOfPointInsideHandle(x, ae);
      if (we >= 0) {
        t(8, h.style.cursor = oe.resizeHandles[we].cursor, h);
        return;
      }
    }
    t(8, h.style.cursor = "default", h);
  }
  function X(q) {
    if (s)
      switch (q.key) {
        case "Delete":
          B();
          break;
      }
  }
  function Q(q) {
    q.preventDefault();
    const H = 1 / (1 + q.deltaY / 1e3 * 0.5), x = parseFloat((v.scale * H).toFixed(2)), ae = x < 1 ? 1 : x, ne = h.getBoundingClientRect(), oe = q.clientX - ne.left, we = q.clientY - ne.top, yn = (oe - v.offsetX) / v.scale, Qn = (we - v.offsetY) / v.scale;
    v.offsetX = oe - yn * ae, v.offsetY = we - Qn * ae, v.scale = ae, O();
  }
  function te(q) {
    const H = h.getBoundingClientRect(), x = (q.clientX - H.left - v.offsetX) / U / v.scale, ae = (q.clientY - H.top - v.offsetY) / U / v.scale;
    let ne;
    d.length > 0 ? ne = Fl(d[0]) : m ? u.boxes.length > 0 ? ne = u.boxes[0].color : ne = $t[0] : ne = $t[u.boxes.length % $t.length];
    const oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let we = "";
    for (let Os = 0; Os < 12; Os++)
      we += oe.charAt(Math.floor(Math.random() * oe.length));
    const yn = "";
    let Qn = new fs(
      O,
      Ke,
      v,
      E,
      z,
      W,
      A,
      "",
      x,
      ae,
      x,
      ae,
      ne,
      o,
      r,
      a,
      f,
      c,
      // ADDED: Pass id and text to the Box constructor
      we,
      yn
    );
    Qn.startCreating(q, H.left, H.top), m ? t(0, u.boxes = [Qn], u) : t(0, u.boxes = [Qn, ...u.boxes], u), se(0), O(), j("change");
  }
  function D() {
    t(10, y = n.creation), t(8, h.style.cursor = "crosshair", h);
  }
  function Re() {
    t(10, y = n.drag), t(8, h.style.cursor = "default", h);
  }
  function Ke() {
    C >= 0 && C < u.boxes.length && (u.boxes[C].getArea() < 1 ? B() : (g || (P ? wi() : t(12, fe = !0)), m && Re()));
  }
  function mt() {
    C >= 0 && C < u.boxes.length && !g && t(11, J = !0);
  }
  function Ae(q) {
    s && mt();
  }
  function Je(q) {
    t(11, J = !1);
    const { detail: H } = q;
    let x = H.label, ae = H.color, ne = H.ret;
    if (C >= 0 && C < u.boxes.length) {
      let oe = u.boxes[C];
      ne == 1 ? (oe.label = x, oe.color = Fl(ae), O(), j("change")) : ne == -1 && B();
    }
  }
  function Qe(q) {
    t(12, fe = !1);
    const { detail: H } = q;
    let x = H.label, ae = H.color, ne = H.ret, oe = H.lock;
    if (C >= 0 && C < u.boxes.length) {
      let we = u.boxes[C];
      ne == 1 ? (t(14, P = oe), M.label = x, M.color = ae, we.label = x, we.color = Fl(ae), O(), j("change")) : B();
    }
  }
  function Gt(q) {
    t(13, R = !1);
    const { detail: H } = q;
    let x = H.label, ae = H.color, ne = H.ret, oe = H.lock;
    ne == 1 && (t(14, P = oe), M.label = x, M.color = ae);
  }
  function wi() {
    if (C >= 0 && C < u.boxes.length) {
      let q = u.boxes[C];
      q.label = M.label, M.color !== "" && (q.color = Fl(M.color)), O(), j("change");
    }
  }
  function B() {
    C >= 0 && C < u.boxes.length && (u.boxes.splice(C, 1), se(-1), m && D(), j("change"));
  }
  function ot(q) {
    t(0, u.orientation = ((u.orientation + q) % 4 + 4) % 4, u), v.orientation = u.orientation, We();
    for (const H of u.boxes)
      H.onRotate(q);
    O();
  }
  function We() {
    if (h) {
      if (U = 1, t(8, h.width = h.clientWidth, h), v.setRotatedImage(S), S !== null) {
        if (v.imageRotatedWidth > h.width)
          U = h.width / v.imageRotatedWidth, V = Math.round(v.imageRotatedWidth * U), G = Math.round(v.imageRotatedHeight * U), E = 0, z = 0, W = V, A = G, t(8, h.height = G, h);
        else {
          V = v.imageRotatedWidth, G = v.imageRotatedHeight;
          var q = (h.width - V) / 2;
          E = q, z = 0, W = q + V, A = G, t(8, h.height = G, h);
        }
        v.imageWidth = V, v.imageHeight = G;
      } else
        E = 0, z = 0, W = h.width, A = h.height, t(8, h.height = h.clientHeight, h);
      if (v.resize(h.width, h.height, E, z), W > 0 && A > 0)
        for (const H of u.boxes)
          H.canvasXmin = E, H.canvasYmin = z, H.canvasXmax = W, H.canvasYmax = A, H.setScaleFactor(U);
      O(), j("change");
    }
  }
  const vn = new ResizeObserver(We);
  function pi() {
    for (let q = 0; q < u.boxes.length; q++) {
      let H = u.boxes[q];
      if (!(H instanceof fs)) {
        let x = "", ae = "", ne, oe;
        H.hasOwnProperty("color") ? (x = H.color, Array.isArray(x) && x.length === 3 && (x = `rgb(${x[0]}, ${x[1]}, ${x[2]})`)) : x = $t[q % $t.length], H.hasOwnProperty("label") && (ae = H.label), H.hasOwnProperty("id") && (ne = H.id), H.hasOwnProperty("text") && (oe = H.text), H = new fs(O, Ke, v, E, z, W, A, ae, H.xmin, H.ymin, H.xmax, H.ymax, x, o, r, a, f, c, ne, oe), t(0, u.boxes[q] = H, u);
      }
    }
  }
  function Wt() {
    i !== null && (S === null || S.src != i) && (S = new Image(), S.src = i, S.onload = function() {
      We(), O();
    });
  }
  bg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let q = 0; q < _.length; q++) {
          let H = $t[q % $t.length];
          d.push(gn(H));
        }
      M.label = _[0][0], M.color = d[0];
    }
    k = h.getContext("2d"), vn.observe(h), C < 0 && u !== null && u.boxes.length > 0 && se(0), Wt(), We(), O();
  });
  function kn() {
    document.addEventListener("keydown", X);
  }
  function vi() {
    document.removeEventListener("keydown", X);
  }
  wg(() => {
    document.removeEventListener("keydown", X);
  });
  function ki(q) {
    _g[q ? "unshift" : "push"](() => {
      h = q, t(8, h);
    });
  }
  const Kn = () => D(), gt = () => Re(), Jn = () => B(), ef = () => t(13, R = !0), tf = () => ot(-1), nf = () => ot(1);
  function lf(q) {
    cs.call(this, l, q);
  }
  function sf(q) {
    cs.call(this, l, q);
  }
  function of(q) {
    cs.call(this, l, q);
  }
  return l.$$set = (q) => {
    "imageUrl" in q && t(29, i = q.imageUrl), "interactive" in q && t(2, s = q.interactive), "boxAlpha" in q && t(30, o = q.boxAlpha), "boxMinSize" in q && t(31, r = q.boxMinSize), "handleSize" in q && t(32, a = q.handleSize), "boxThickness" in q && t(33, f = q.boxThickness), "boxSelectedThickness" in q && t(34, c = q.boxSelectedThickness), "value" in q && t(0, u = q.value), "choices" in q && t(3, _ = q.choices), "choicesColors" in q && t(4, d = q.choicesColors), "disableEditBoxes" in q && t(5, g = q.disableEditBoxes), "singleBox" in q && t(35, m = q.singleBox), "showRemoveButton" in q && t(1, b = q.showRemoveButton), "handlesCursor" in q && t(6, p = q.handlesCursor), "useDefaultLabel" in q && t(36, w = q.useDefaultLabel);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Wt(), pi(), We(), O());
  }, [
    u,
    b,
    s,
    _,
    d,
    g,
    p,
    n,
    h,
    C,
    y,
    J,
    fe,
    R,
    P,
    be,
    Ge,
    L,
    Q,
    D,
    Re,
    Ae,
    Je,
    Qe,
    Gt,
    B,
    ot,
    kn,
    vi,
    i,
    o,
    r,
    a,
    f,
    c,
    m,
    w,
    ki,
    Kn,
    gt,
    Jn,
    ef,
    tf,
    nf,
    lf,
    sf,
    of
  ];
}
class yg extends ug {
  constructor(e) {
    super(), hg(
      this,
      e,
      kg,
      vg,
      gg,
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
  SvelteComponent: Cg,
  add_flush_callback: Sg,
  bind: zg,
  binding_callbacks: qg,
  create_component: Bg,
  destroy_component: Dg,
  init: Lg,
  mount_component: Eg,
  safe_not_equal: Mg,
  transition_in: Rg,
  transition_out: Ag
} = window.__gradio__svelte__internal, { createEventDispatcher: Wg } = window.__gradio__svelte__internal;
function Ig(l) {
  let e, t, n;
  function i(o) {
    l[18](o);
  }
  let s = {
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
    l[0] !== void 0 && (s.value = /*value*/
    l[0]), e = new yg({ props: s }), qg.push(() => zg(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[19]
    ), {
      c() {
        Bg(e.$$.fragment);
      },
      m(o, r) {
        Eg(e, o, r), n = !0;
      },
      p(o, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        o[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        o[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        o[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        o[4]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        o[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        o[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        o[7]), r & /*boxSelectedThickness*/
        256 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        o[8]), r & /*disableEditBoxes*/
        512 && (a.disableEditBoxes = /*disableEditBoxes*/
        o[9]), r & /*singleBox*/
        1024 && (a.singleBox = /*singleBox*/
        o[10]), r & /*showRemoveButton*/
        2048 && (a.showRemoveButton = /*showRemoveButton*/
        o[11]), r & /*handlesCursor*/
        4096 && (a.handlesCursor = /*handlesCursor*/
        o[12]), r & /*useDefaultLabel*/
        8192 && (a.useDefaultLabel = /*useDefaultLabel*/
        o[13]), r & /*resolved_src*/
        16384 && (a.imageUrl = /*resolved_src*/
        o[14]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], Sg(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Rg(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Ag(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Dg(e, o);
      }
    }
  );
}
function Tg(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: g } = e, { showRemoveButton: m } = e, { handlesCursor: b } = e, { useDefaultLabel: p } = e, w, h;
  const k = Wg();
  function S(y) {
    _ = y, t(0, _);
  }
  const C = () => k("change");
  return l.$$set = (y) => {
    "src" in y && t(16, n = y.src), "interactive" in y && t(1, i = y.interactive), "boxesAlpha" in y && t(2, s = y.boxesAlpha), "labelList" in y && t(3, o = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, f = y.handleSize), "boxThickness" in y && t(7, c = y.boxThickness), "boxSelectedThickness" in y && t(8, u = y.boxSelectedThickness), "value" in y && t(0, _ = y.value), "disableEditBoxes" in y && t(9, d = y.disableEditBoxes), "singleBox" in y && t(10, g = y.singleBox), "showRemoveButton" in y && t(11, m = y.showRemoveButton), "handlesCursor" in y && t(12, b = y.handlesCursor), "useDefaultLabel" in y && t(13, p = y.useDefaultLabel);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    196608) {
      t(14, w = n), t(17, h = n);
      const y = n;
      r1(y).then((v) => {
        h === y && t(14, w = v);
      });
    }
  }, [
    _,
    i,
    s,
    o,
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
class Hg extends Cg {
  constructor(e) {
    super(), Lg(this, e, Tg, Ig, Mg, {
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
class Da {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Xg,
  add_flush_callback: oi,
  append: En,
  attr: ul,
  bind: ai,
  binding_callbacks: wl,
  bubble: il,
  check_outros: tn,
  create_component: Lt,
  create_slot: Yg,
  destroy_component: Et,
  detach: un,
  element: gl,
  empty: Fg,
  get_all_dirty_from_scope: jg,
  get_slot_changes: Ug,
  group_outros: nn,
  init: Vg,
  insert: _n,
  mount_component: Mt,
  noop: Og,
  safe_not_equal: Ng,
  space: en,
  toggle_class: La,
  transition_in: K,
  transition_out: ee,
  update_slot_base: Pg
} = window.__gradio__svelte__internal, { createEventDispatcher: Zg, tick: Gg } = window.__gradio__svelte__internal;
function Ea(l) {
  let e, t;
  return e = new k1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [Kg] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Mt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      1048576 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ee(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Kg(l) {
  let e, t;
  return e = new ri({
    props: {
      Icon: Wu,
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
      Mt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ee(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Ma(l) {
  let e, t;
  return e = new ld({
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
      Mt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (s.value = /*value*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ee(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Ra(l) {
  let e, t, n;
  return t = new ri({
    props: { Icon: Ga, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[34]
  ), {
    c() {
      e = gl("div"), Lt(t.$$.fragment);
    },
    m(i, s) {
      _n(i, e, s), Mt(t, e, null), n = !0;
    },
    p: Og,
    i(i) {
      n || (K(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ee(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && un(e), Et(t);
    }
  };
}
function Aa(l) {
  let e;
  const t = (
    /*#slots*/
    l[35].default
  ), n = Yg(
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
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s[1] & /*$$scope*/
      1048576) && Pg(
        n,
        t,
        i,
        /*$$scope*/
        i[51],
        e ? Ug(
          t,
          /*$$scope*/
          i[51],
          s,
          null
        ) : jg(
          /*$$scope*/
          i[51]
        ),
        null
      );
    },
    i(i) {
      e || (K(n, i), e = !0);
    },
    o(i) {
      ee(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Jg(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Aa(l)
  );
  return {
    c() {
      n && n.c(), e = Fg();
    },
    m(i, s) {
      n && n.m(i, s), _n(i, e, s), t = !0;
    },
    p(i, s) {
      /*value*/
      i[1] === null ? n ? (n.p(i, s), s[0] & /*value*/
      2 && K(n, 1)) : (n = Aa(i), n.c(), K(n, 1), n.m(e.parentNode, e)) : n && (nn(), ee(n, 1, 1, () => {
        n = null;
      }), tn());
    },
    i(i) {
      t || (K(n), t = !0);
    },
    o(i) {
      ee(n), t = !1;
    },
    d(i) {
      i && un(e), n && n.d(i);
    }
  };
}
function Wa(l) {
  let e, t;
  return e = new Nh({
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
      Mt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), i[0] & /*upload*/
      536870912 && (s.upload = /*upload*/
      n[29]), e.$set(s);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ee(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Ia(l) {
  let e, t, n, i;
  function s(r) {
    l[48](r);
  }
  let o = {
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
    l[1] !== void 0 && (o.value = /*value*/
    l[1]), t = new Hg({ props: o }), wl.push(() => ai(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      l[49]
    ), {
      c() {
        e = gl("div"), Lt(t.$$.fragment), ul(e, "class", "image-frame svelte-1gjdske"), La(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        _n(r, e, a), Mt(t, e, null), i = !0;
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
        r[1], oi(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && La(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (K(t.$$.fragment, r), i = !0);
      },
      o(r) {
        ee(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && un(e), Et(t);
      }
    }
  );
}
function Ta(l) {
  let e, t, n;
  function i(o) {
    l[50](o);
  }
  let s = {
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
    l[0] !== void 0 && (s.active_source = /*active_source*/
    l[0]), e = new pd({ props: s }), wl.push(() => ai(e, "active_source", i)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(o, r) {
        Mt(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], oi(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (K(e.$$.fragment, o), n = !0);
      },
      o(o) {
        ee(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Et(e, o);
      }
    }
  );
}
function Qg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new vc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: Ka,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Ea(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ma(l)
  ), h = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Ra(l)
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
    $$slots: { default: [Jg] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[27] !== void 0 && (C.uploading = /*uploading*/
  l[27]), /*dragging*/
  l[28] !== void 0 && (C.dragging = /*dragging*/
  l[28]), f = new eh({ props: C }), l[39](f), wl.push(() => ai(f, "uploading", k)), wl.push(() => ai(f, "dragging", S)), f.$on(
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
    l[0] === "webcam" && Wa(l)
  ), v = (
    /*value*/
    l[1] !== null && Ia(l)
  ), E = m && Ta(l);
  return {
    c() {
      Lt(e.$$.fragment), t = en(), n = gl("div"), p && p.c(), i = en(), w && w.c(), s = en(), h && h.c(), o = en(), r = gl("div"), a = gl("div"), Lt(f.$$.fragment), _ = en(), y && y.c(), d = en(), v && v.c(), g = en(), E && E.c(), ul(n, "class", "icon-buttons svelte-1gjdske"), ul(a, "class", "upload-container svelte-1gjdske"), ul(r, "data-testid", "image"), ul(r, "class", "image-container svelte-1gjdske");
    },
    m(z, W) {
      Mt(e, z, W), _n(z, t, W), _n(z, n, W), p && p.m(n, null), En(n, i), w && w.m(n, null), En(n, s), h && h.m(n, null), _n(z, o, W), _n(z, r, W), En(r, a), Mt(f, a, null), En(a, _), y && y.m(a, null), En(a, d), v && v.m(a, null), En(r, g), E && E.m(r, null), b = !0;
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
      1026 && K(p, 1)) : (p = Ea(z), p.c(), K(p, 1), p.m(n, i)) : p && (nn(), ee(p, 1, 1, () => {
        p = null;
      }), tn()), /*showShareButton*/
      z[9] && /*value*/
      z[1] !== null ? w ? (w.p(z, W), W[0] & /*showShareButton, value*/
      514 && K(w, 1)) : (w = Ma(z), w.c(), K(w, 1), w.m(n, s)) : w && (nn(), ee(w, 1, 1, () => {
        w = null;
      }), tn()), /*showClearButton*/
      z[11] && /*value*/
      z[1] !== null && /*interactive*/
      z[7] ? h ? (h.p(z, W), W[0] & /*showClearButton, value, interactive*/
      2178 && K(h, 1)) : (h = Ra(z), h.c(), K(h, 1), h.m(n, null)) : h && (nn(), ee(h, 1, 1, () => {
        h = null;
      }), tn());
      const U = {};
      W[0] & /*value, active_source*/
      3 && (U.hidden = /*value*/
      z[1] !== null || /*active_source*/
      z[0] === "webcam"), W[0] & /*active_source*/
      1 && (U.filetype = /*active_source*/
      z[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (U.root = /*root*/
      z[6]), W[0] & /*max_file_size*/
      8388608 && (U.max_file_size = /*max_file_size*/
      z[23]), W[0] & /*sources*/
      16 && (U.disable_click = !/*sources*/
      z[4].includes("upload")), W[0] & /*cli_upload*/
      16777216 && (U.upload = /*cli_upload*/
      z[24]), W[0] & /*stream_handler*/
      33554432 && (U.stream_handler = /*stream_handler*/
      z[25]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      1048576 && (U.$$scope = { dirty: W, ctx: z }), !c && W[0] & /*uploading*/
      134217728 && (c = !0, U.uploading = /*uploading*/
      z[27], oi(() => c = !1)), !u && W[0] & /*dragging*/
      268435456 && (u = !0, U.dragging = /*dragging*/
      z[28], oi(() => u = !1)), f.$set(U), /*value*/
      z[1] === null && /*active_source*/
      z[0] === "webcam" ? y ? (y.p(z, W), W[0] & /*value, active_source*/
      3 && K(y, 1)) : (y = Wa(z), y.c(), K(y, 1), y.m(a, d)) : y && (nn(), ee(y, 1, 1, () => {
        y = null;
      }), tn()), /*value*/
      z[1] !== null ? v ? (v.p(z, W), W[0] & /*value*/
      2 && K(v, 1)) : (v = Ia(z), v.c(), K(v, 1), v.m(a, null)) : v && (nn(), ee(v, 1, 1, () => {
        v = null;
      }), tn()), W[0] & /*sources, value, interactive*/
      146 && (m = /*sources*/
      (z[4].length > 1 || /*sources*/
      z[4].includes("clipboard")) && /*value*/
      z[1] === null && /*interactive*/
      z[7]), m ? E ? (E.p(z, W), W[0] & /*sources, value, interactive*/
      146 && K(E, 1)) : (E = Ta(z), E.c(), K(E, 1), E.m(r, null)) : E && (nn(), ee(E, 1, 1, () => {
        E = null;
      }), tn());
    },
    i(z) {
      b || (K(e.$$.fragment, z), K(p), K(w), K(h), K(f.$$.fragment, z), K(y), K(v), K(E), b = !0);
    },
    o(z) {
      ee(e.$$.fragment, z), ee(p), ee(w), ee(h), ee(f.$$.fragment, z), ee(y), ee(v), ee(E), b = !1;
    },
    d(z) {
      z && (un(t), un(n), un(o), un(r)), Et(e, z), p && p.d(), w && w.d(), h && h.d(), l[39](null), Et(f), y && y.d(), v && v.d(), E && E.d();
    }
  };
}
function xg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(B, ot, We, vn) {
    function pi(Wt) {
      return Wt instanceof We ? Wt : new We(function(kn) {
        kn(Wt);
      });
    }
    return new (We || (We = Promise))(function(Wt, kn) {
      function vi(gt) {
        try {
          Kn(vn.next(gt));
        } catch (Jn) {
          kn(Jn);
        }
      }
      function ki(gt) {
        try {
          Kn(vn.throw(gt));
        } catch (Jn) {
          kn(Jn);
        }
      }
      function Kn(gt) {
        gt.done ? Wt(gt.value) : pi(gt.value).then(vi, ki);
      }
      Kn((vn = vn.apply(B, ot || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: g } = e, { showDownloadButton: m } = e, { showClearButton: b } = e, { boxesAlpha: p } = e, { labelList: w } = e, { labelColors: h } = e, { boxMinSize: k } = e, { handleSize: S } = e, { boxThickness: C } = e, { disableEditBoxes: y } = e, { singleBox: v } = e, { showRemoveButton: E } = e, { handlesCursor: z } = e, { boxSelectedThickness: W } = e, { max_file_size: A = null } = e, { cli_upload: U } = e, { stream_handler: V } = e, { useDefaultLabel: G } = e, J, fe = !1, { active_source: R = null } = e;
  function P({ detail: B }) {
    t(1, o = new Da()), t(1, o.image = B, o), j("upload");
  }
  function M(B) {
    return s(this, void 0, void 0, function* () {
      const ot = yield J.load_files([new File([B], "webcam.png")]), We = (ot == null ? void 0 : ot[0]) || null;
      We ? (t(1, o = new Da()), t(1, o.image = We, o)) : t(1, o = null), yield Gg(), j("change");
    });
  }
  const j = Zg();
  let O = !1;
  function se(B) {
    return s(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          J.paste_clipboard();
          break;
      }
    });
  }
  function be() {
    t(1, o = null), j("clear"), j("change");
  }
  const I = async (B) => B === null ? "" : `<img src="${await O_(B.image)}" />`;
  function Ge(B) {
    il.call(this, l, B);
  }
  function L(B) {
    il.call(this, l, B);
  }
  function X(B) {
    wl[B ? "unshift" : "push"](() => {
      J = B, t(29, J);
    });
  }
  function Q(B) {
    fe = B, t(27, fe);
  }
  function te(B) {
    O = B, t(28, O);
  }
  function D(B) {
    il.call(this, l, B);
  }
  const Re = (B) => M(B.detail), Ke = (B) => M(B.detail);
  function mt(B) {
    il.call(this, l, B);
  }
  function Ae(B) {
    il.call(this, l, B);
  }
  const Je = (B) => M(B.detail);
  function Qe(B) {
    o = B, t(1, o);
  }
  const Gt = () => j("change");
  function wi(B) {
    R = B, t(0, R), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, o = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, g = B.showShareButton), "showDownloadButton" in B && t(10, m = B.showDownloadButton), "showClearButton" in B && t(11, b = B.showClearButton), "boxesAlpha" in B && t(12, p = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, h = B.labelColors), "boxMinSize" in B && t(15, k = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "boxThickness" in B && t(17, C = B.boxThickness), "disableEditBoxes" in B && t(18, y = B.disableEditBoxes), "singleBox" in B && t(19, v = B.singleBox), "showRemoveButton" in B && t(20, E = B.showRemoveButton), "handlesCursor" in B && t(21, z = B.handlesCursor), "boxSelectedThickness" in B && t(22, W = B.boxSelectedThickness), "max_file_size" in B && t(23, A = B.max_file_size), "cli_upload" in B && t(24, U = B.cli_upload), "stream_handler" in B && t(25, V = B.stream_handler), "useDefaultLabel" in B && t(26, G = B.useDefaultLabel), "active_source" in B && t(0, R = B.active_source), "$$scope" in B && t(51, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    134217728 && fe && be(), l.$$.dirty[0] & /*dragging*/
    268435456 && j("drag", O), l.$$.dirty[0] & /*active_source, sources*/
    17 && !R && f && t(0, R = f[0]);
  }, [
    R,
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
    b,
    p,
    w,
    h,
    k,
    S,
    C,
    y,
    v,
    E,
    z,
    W,
    A,
    U,
    V,
    G,
    fe,
    O,
    J,
    P,
    M,
    j,
    se,
    be,
    n,
    I,
    Ge,
    L,
    X,
    Q,
    te,
    D,
    Re,
    Ke,
    mt,
    Ae,
    Je,
    Qe,
    Gt,
    wi,
    i
  ];
}
class $g extends Xg {
  constructor(e) {
    super(), Vg(
      this,
      e,
      xg,
      Qg,
      Ng,
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
  SvelteComponent: e2,
  attr: Gl,
  detach: Kr,
  element: Jr,
  init: t2,
  insert: Qr,
  noop: Ha,
  safe_not_equal: n2,
  src_url_equal: Xa,
  toggle_class: Ut
} = window.__gradio__svelte__internal;
function Ya(l) {
  let e, t;
  return {
    c() {
      e = Jr("img"), Xa(e.src, t = /*value*/
      l[0].url) || Gl(e, "src", t), Gl(e, "alt", "");
    },
    m(n, i) {
      Qr(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Xa(e.src, t = /*value*/
      n[0].url) && Gl(e, "src", t);
    },
    d(n) {
      n && Kr(e);
    }
  };
}
function l2(l) {
  let e, t = (
    /*value*/
    l[0] && Ya(l)
  );
  return {
    c() {
      e = Jr("div"), t && t.c(), Gl(e, "class", "container svelte-1sgcyba"), Ut(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Ut(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Ut(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Ut(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      Qr(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Ya(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Ut(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Ut(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Ut(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Ut(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Ha,
    o: Ha,
    d(n) {
      n && Kr(e), t && t.d();
    }
  };
}
function i2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: s = !1 } = e;
  return l.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, i = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, i, s];
}
class E2 extends e2 {
  constructor(e) {
    super(), t2(this, e, i2, l2, n2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: s2,
  add_flush_callback: Fa,
  assign: o2,
  bind: ja,
  binding_callbacks: Ua,
  check_outros: a2,
  create_component: bn,
  destroy_component: wn,
  detach: xr,
  empty: r2,
  flush: Z,
  get_spread_object: f2,
  get_spread_update: c2,
  group_outros: u2,
  init: _2,
  insert: $r,
  mount_component: pn,
  safe_not_equal: d2,
  space: h2,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function m2(l) {
  let e, t;
  return e = new Qc({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [w2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      pn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*$$scope*/
      8192 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function g2(l) {
  let e, t;
  return e = new nr({
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
      bn(e.$$.fragment);
    },
    m(n, i) {
      pn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function b2(l) {
  let e, t;
  return e = new nr({
    props: {
      i18n: (
        /*gradio*/
        l[31].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      pn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*gradio*/
      1 && (s.i18n = /*gradio*/
      n[31].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function w2(l) {
  let e, t;
  return e = new Ka({}), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      pn(e, n, i), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function p2(l) {
  let e, t, n, i;
  const s = [b2, g2, m2], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[33] === "upload" ? 0 : (
        /*active_source*/
        a[33] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = r2();
    },
    m(a, f) {
      o[e].m(a, f), $r(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (u2(), At(o[c], 1, 1, () => {
        o[c] = null;
      }), a2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      At(t), i = !1;
    },
    d(a) {
      a && xr(n), o[e].d(a);
    }
  };
}
function v2(l) {
  let e, t, n, i, s, o;
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
    a = o2(a, r[_]);
  e = new i1({ props: a });
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
    $$slots: { default: [p2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[33] !== void 0 && (u.active_source = /*active_source*/
    l[33]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new $g({ props: u }), Ua.push(() => ja(n, "active_source", f)), Ua.push(() => ja(n, "value", c)), n.$on(
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
        bn(e.$$.fragment), t = h2(), bn(n.$$.fragment);
      },
      m(_, d) {
        pn(e, _, d), $r(_, t, d), pn(n, _, d), o = !0;
      },
      p(_, d) {
        const g = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? c2(r, [
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
          2 && f2(
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
        _[33], Fa(() => i = !1)), !s && d[0] & /*value*/
        1 && (s = !0, m.value = /*value*/
        _[0], Fa(() => s = !1)), n.$set(m);
      },
      i(_) {
        o || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        At(e.$$.fragment, _), At(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && xr(t), wn(e, _), wn(n, _);
      }
    }
  );
}
function k2(l) {
  let e, t;
  return e = new yf({
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
      $$slots: { default: [v2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      bn(e.$$.fragment);
    },
    m(n, i) {
      pn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      2 && (s.border_mode = /*dragging*/
      n[32] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*height*/
      256 && (s.height = /*height*/
      n[8] || void 0), i[0] & /*width*/
      512 && (s.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (s.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147468515 | i[1] & /*$$scope, gradio, active_source, dragging*/
      8199 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function y2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: h } = e, { show_clear_button: k } = e, { interactive: S } = e, { boxes_alpha: C } = e, { label_list: y } = e, { label_colors: v } = e, { box_min_size: E } = e, { handle_size: z } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: U } = e, { single_box: V } = e, { show_remove_button: G } = e, { handles_cursor: J } = e, { use_default_label: fe } = e, { gradio: R } = e, P, M = null;
  function j(D) {
    M = D, t(33, M);
  }
  function O(D) {
    o = D, t(0, o);
  }
  const se = () => R.dispatch("change"), be = () => R.dispatch("edit"), I = () => {
    R.dispatch("clear");
  }, Ge = ({ detail: D }) => t(32, P = D), L = () => R.dispatch("upload"), X = ({ detail: D }) => R.dispatch("select", D), Q = ({ detail: D }) => R.dispatch("share", D), te = ({ detail: D }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), R.dispatch("error", D);
  };
  return l.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, i = D.elem_classes), "visible" in D && t(4, s = D.visible), "value" in D && t(0, o = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, d = D.container), "scale" in D && t(12, g = D.scale), "min_width" in D && t(13, m = D.min_width), "loading_status" in D && t(1, b = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, w = D.show_download_button), "show_share_button" in D && t(16, h = D.show_share_button), "show_clear_button" in D && t(17, k = D.show_clear_button), "interactive" in D && t(18, S = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, y = D.label_list), "label_colors" in D && t(21, v = D.label_colors), "box_min_size" in D && t(22, E = D.box_min_size), "handle_size" in D && t(23, z = D.handle_size), "box_thickness" in D && t(24, W = D.box_thickness), "box_selected_thickness" in D && t(25, A = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, U = D.disable_edit_boxes), "single_box" in D && t(27, V = D.single_box), "show_remove_button" in D && t(28, G = D.show_remove_button), "handles_cursor" in D && t(29, J = D.handles_cursor), "use_default_label" in D && t(30, fe = D.use_default_label), "gradio" in D && t(31, R = D.gradio);
  }, [
    o,
    b,
    n,
    i,
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
    p,
    w,
    h,
    k,
    S,
    C,
    y,
    v,
    E,
    z,
    W,
    A,
    U,
    V,
    G,
    J,
    fe,
    R,
    P,
    M,
    j,
    O,
    se,
    be,
    I,
    Ge,
    L,
    X,
    Q,
    te
  ];
}
class M2 extends s2 {
  constructor(e) {
    super(), _2(
      this,
      e,
      y2,
      k2,
      d2,
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
    this.$$set({ elem_id: e }), Z();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Z();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Z();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Z();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Z();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Z();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Z();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Z();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Z();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Z();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Z();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Z();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Z();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Z();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Z();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Z();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Z();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Z();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Z();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Z();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Z();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Z();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Z();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Z();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Z();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Z();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Z();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Z();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Z();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Z();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Z();
  }
  get gradio() {
    return this.$$.ctx[31];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Z();
  }
}
export {
  E2 as BaseExample,
  M2 as default
};
