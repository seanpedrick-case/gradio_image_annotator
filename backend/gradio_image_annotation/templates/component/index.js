const {
  SvelteComponent: of,
  assign: af,
  create_slot: rf,
  detach: ff,
  element: cf,
  get_all_dirty_from_scope: uf,
  get_slot_changes: _f,
  get_spread_update: df,
  init: hf,
  insert: mf,
  safe_not_equal: gf,
  set_dynamic_element_data: Vs,
  set_style: Ie,
  toggle_class: at,
  transition_in: ja,
  transition_out: Ua,
  update_slot_base: bf
} = window.__gradio__svelte__internal;
function wf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), s = rf(
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
    r = af(r, o[a]);
  return {
    c() {
      e = cf(
        /*tag*/
        l[14]
      ), s && s.c(), Vs(
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
      mf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && bf(
        s,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? _f(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : uf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Vs(
        /*tag*/
        a[14]
      )(e, r = df(o, [
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
      n || (ja(s, a), n = !0);
    },
    o(a) {
      Ua(s, a), n = !1;
    },
    d(a) {
      a && ff(e), s && s.d(a);
    }
  };
}
function pf(l) {
  let e, t = (
    /*tag*/
    l[14] && wf(l)
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
      e || (ja(t, n), e = !0);
    },
    o(n) {
      Ua(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function vf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: g = !1 } = e, { container: m = !0 } = e, { visible: b = !0 } = e, { allow_overflow: p = !0 } = e, { scale: w = null } = e, { min_width: h = 0 } = e, v = _ === "fieldset" ? "fieldset" : "div";
  const y = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return l.$$set = (k) => {
    "height" in k && t(0, s = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, f = k.variant), "border_mode" in k && t(5, c = k.border_mode), "padding" in k && t(6, u = k.padding), "type" in k && t(16, _ = k.type), "test_id" in k && t(7, d = k.test_id), "explicit_call" in k && t(8, g = k.explicit_call), "container" in k && t(9, m = k.container), "visible" in k && t(10, b = k.visible), "allow_overflow" in k && t(11, p = k.allow_overflow), "scale" in k && t(12, w = k.scale), "min_width" in k && t(13, h = k.min_width), "$$scope" in k && t(17, i = k.$$scope);
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
    v,
    y,
    _,
    i,
    n
  ];
}
class kf extends of {
  constructor(e) {
    super(), hf(this, e, vf, pf, gf, {
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
  SvelteComponent: yf,
  attr: Cf,
  create_slot: Sf,
  detach: zf,
  element: qf,
  get_all_dirty_from_scope: Bf,
  get_slot_changes: Df,
  init: Lf,
  insert: Ef,
  safe_not_equal: Mf,
  transition_in: Rf,
  transition_out: Af,
  update_slot_base: Wf
} = window.__gradio__svelte__internal;
function If(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Sf(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = qf("div"), i && i.c(), Cf(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Ef(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      i && i.p && (!t || o & /*$$scope*/
      1) && Wf(
        i,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Df(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Bf(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Rf(i, s), t = !0);
    },
    o(s) {
      Af(i, s), t = !1;
    },
    d(s) {
      s && zf(e), i && i.d(s);
    }
  };
}
function Tf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, n];
}
class Hf extends yf {
  constructor(e) {
    super(), Lf(this, e, Tf, If, Mf, {});
  }
}
const {
  SvelteComponent: Xf,
  attr: Os,
  check_outros: Yf,
  create_component: Ff,
  create_slot: jf,
  destroy_component: Uf,
  detach: Fl,
  element: Vf,
  empty: Of,
  get_all_dirty_from_scope: Nf,
  get_slot_changes: Pf,
  group_outros: Zf,
  init: Gf,
  insert: jl,
  mount_component: Kf,
  safe_not_equal: Jf,
  set_data: Qf,
  space: xf,
  text: $f,
  toggle_class: yn,
  transition_in: ll,
  transition_out: Ul,
  update_slot_base: ec
} = window.__gradio__svelte__internal;
function Ns(l) {
  let e, t;
  return e = new Hf({
    props: {
      $$slots: { default: [tc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Ff(e.$$.fragment);
    },
    m(n, i) {
      Kf(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (ll(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ul(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Uf(e, n);
    }
  };
}
function tc(l) {
  let e;
  return {
    c() {
      e = $f(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      jl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Qf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Fl(e);
    }
  };
}
function nc(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[2].default
  ), o = jf(
    s,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && Ns(l)
  );
  return {
    c() {
      e = Vf("span"), o && o.c(), t = xf(), r && r.c(), n = Of(), Os(e, "data-testid", "block-info"), Os(e, "class", "svelte-22c38v"), yn(e, "sr-only", !/*show_label*/
      l[0]), yn(e, "hide", !/*show_label*/
      l[0]), yn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      jl(a, e, f), o && o.m(e, null), jl(a, t, f), r && r.m(a, f), jl(a, n, f), i = !0;
    },
    p(a, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      8) && ec(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        i ? Pf(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : Nf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && yn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && yn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && yn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && ll(r, 1)) : (r = Ns(a), r.c(), ll(r, 1), r.m(n.parentNode, n)) : r && (Zf(), Ul(r, 1, 1, () => {
        r = null;
      }), Yf());
    },
    i(a) {
      i || (ll(o, a), ll(r), i = !0);
    },
    o(a) {
      Ul(o, a), Ul(r), i = !1;
    },
    d(a) {
      a && (Fl(e), Fl(t), Fl(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function lc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [s, o, n, i];
}
class Va extends Xf {
  constructor(e) {
    super(), Gf(this, e, lc, nc, Jf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: ic,
  append: ki,
  attr: kl,
  create_component: sc,
  destroy_component: oc,
  detach: ac,
  element: Ps,
  init: rc,
  insert: fc,
  mount_component: cc,
  safe_not_equal: uc,
  set_data: _c,
  space: dc,
  text: hc,
  toggle_class: It,
  transition_in: mc,
  transition_out: gc
} = window.__gradio__svelte__internal;
function bc(l) {
  let e, t, n, i, s, o;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Ps("label"), t = Ps("span"), sc(n.$$.fragment), i = dc(), s = hc(
        /*label*/
        l[0]
      ), kl(t, "class", "svelte-9gxdi0"), kl(e, "for", ""), kl(e, "data-testid", "block-label"), kl(e, "class", "svelte-9gxdi0"), It(e, "hide", !/*show_label*/
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
      fc(r, e, a), ki(e, t), cc(n, t, null), ki(e, i), ki(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && _c(
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
      o || (mc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      gc(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && ac(e), oc(n);
    }
  };
}
function wc(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, s, o, r];
}
class pc extends ic {
  constructor(e) {
    super(), rc(this, e, wc, bc, uc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: vc,
  append: cs,
  attr: vt,
  bubble: kc,
  create_component: yc,
  destroy_component: Cc,
  detach: Oa,
  element: us,
  init: Sc,
  insert: Na,
  listen: zc,
  mount_component: qc,
  safe_not_equal: Bc,
  set_data: Dc,
  set_style: Cn,
  space: Lc,
  text: Ec,
  toggle_class: Se,
  transition_in: Mc,
  transition_out: Rc
} = window.__gradio__svelte__internal;
function Zs(l) {
  let e, t;
  return {
    c() {
      e = us("span"), t = Ec(
        /*label*/
        l[1]
      ), vt(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      Na(n, e, i), cs(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Dc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Oa(e);
    }
  };
}
function Ac(l) {
  let e, t, n, i, s, o, r, a = (
    /*show_label*/
    l[2] && Zs(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = us("button"), a && a.c(), t = Lc(), n = us("div"), yc(i.$$.fragment), vt(n, "class", "svelte-1lrphxw"), Se(
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
      ), Cn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), Cn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), Cn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      Na(f, e, c), a && a.m(e, null), cs(e, t), cs(e, n), qc(i, n, null), s = !0, o || (r = zc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Zs(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
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
      4224 && Cn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Cn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && Cn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (Mc(i.$$.fragment, f), s = !0);
    },
    o(f) {
      Rc(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && Oa(e), a && a.d(), Cc(i), o = !1, r();
    }
  };
}
function Wc(l, e, t) {
  let n, { Icon: i } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: b = 0 } = e;
  function p(w) {
    kc.call(this, l, w);
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
class ai extends vc {
  constructor(e) {
    super(), Sc(this, e, Wc, Ac, Bc, {
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
  SvelteComponent: Ic,
  append: Tc,
  attr: yi,
  binding_callbacks: Hc,
  create_slot: Xc,
  detach: Yc,
  element: Gs,
  get_all_dirty_from_scope: Fc,
  get_slot_changes: jc,
  init: Uc,
  insert: Vc,
  safe_not_equal: Oc,
  toggle_class: Tt,
  transition_in: Nc,
  transition_out: Pc,
  update_slot_base: Zc
} = window.__gradio__svelte__internal;
function Gc(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), s = Xc(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Gs("div"), t = Gs("div"), s && s.c(), yi(t, "class", "icon svelte-3w3rth"), yi(e, "class", "empty svelte-3w3rth"), yi(e, "aria-label", "Empty value"), Tt(
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
      Vc(o, e, r), Tc(e, t), s && s.m(t, null), l[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && Zc(
        s,
        i,
        o,
        /*$$scope*/
        o[4],
        n ? jc(
          i,
          /*$$scope*/
          o[4],
          r,
          null
        ) : Fc(
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
      n || (Nc(s, o), n = !0);
    },
    o(o) {
      Pc(s, o), n = !1;
    },
    d(o) {
      o && Yc(e), s && s.d(o), l[6](null);
    }
  };
}
function Kc(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: g } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > g + 2;
  }
  function c(u) {
    Hc[u ? "unshift" : "push"](() => {
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
class Jc extends Ic {
  constructor(e) {
    super(), Uc(this, e, Kc, Gc, Oc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Qc,
  append: Ks,
  attr: ze,
  detach: xc,
  init: $c,
  insert: eu,
  noop: Ci,
  safe_not_equal: tu,
  svg_element: Si
} = window.__gradio__svelte__internal;
function nu(l) {
  let e, t, n;
  return {
    c() {
      e = Si("svg"), t = Si("path"), n = Si("circle"), ze(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), ze(n, "cx", "12"), ze(n, "cy", "13"), ze(n, "r", "4"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "1.5"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-camera");
    },
    m(i, s) {
      eu(i, e, s), Ks(e, t), Ks(e, n);
    },
    p: Ci,
    i: Ci,
    o: Ci,
    d(i) {
      i && xc(e);
    }
  };
}
class lu extends Qc {
  constructor(e) {
    super(), $c(this, e, null, nu, tu, {});
  }
}
const {
  SvelteComponent: iu,
  append: su,
  attr: xe,
  detach: ou,
  init: au,
  insert: ru,
  noop: zi,
  safe_not_equal: fu,
  svg_element: Js
} = window.__gradio__svelte__internal;
function cu(l) {
  let e, t;
  return {
    c() {
      e = Js("svg"), t = Js("circle"), xe(t, "cx", "12"), xe(t, "cy", "12"), xe(t, "r", "10"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "stroke-width", "1.5"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round"), xe(e, "class", "feather feather-circle");
    },
    m(n, i) {
      ru(n, e, i), su(e, t);
    },
    p: zi,
    i: zi,
    o: zi,
    d(n) {
      n && ou(e);
    }
  };
}
class uu extends iu {
  constructor(e) {
    super(), au(this, e, null, cu, fu, {});
  }
}
const {
  SvelteComponent: _u,
  append: qi,
  attr: $e,
  detach: du,
  init: hu,
  insert: mu,
  noop: Bi,
  safe_not_equal: gu,
  set_style: rt,
  svg_element: yl
} = window.__gradio__svelte__internal;
function bu(l) {
  let e, t, n, i;
  return {
    c() {
      e = yl("svg"), t = yl("g"), n = yl("path"), i = yl("path"), $e(n, "d", "M18,6L6.087,17.913"), rt(n, "fill", "none"), rt(n, "fill-rule", "nonzero"), rt(n, "stroke-width", "2px"), $e(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), $e(i, "d", "M4.364,4.364L19.636,19.636"), rt(i, "fill", "none"), rt(i, "fill-rule", "nonzero"), rt(i, "stroke-width", "2px"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "version", "1.1"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $e(e, "xml:space", "preserve"), $e(e, "stroke", "currentColor"), rt(e, "fill-rule", "evenodd"), rt(e, "clip-rule", "evenodd"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      mu(s, e, o), qi(e, t), qi(t, n), qi(e, i);
    },
    p: Bi,
    i: Bi,
    o: Bi,
    d(s) {
      s && du(e);
    }
  };
}
class Pa extends _u {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: wu,
  append: pu,
  attr: Jn,
  detach: vu,
  init: ku,
  insert: yu,
  noop: Di,
  safe_not_equal: Cu,
  svg_element: Qs
} = window.__gradio__svelte__internal;
function Su(l) {
  let e, t;
  return {
    c() {
      e = Qs("svg"), t = Qs("path"), Jn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), Jn(t, "fill", "currentColor"), Jn(e, "id", "icon"), Jn(e, "xmlns", "http://www.w3.org/2000/svg"), Jn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      yu(n, e, i), pu(e, t);
    },
    p: Di,
    i: Di,
    o: Di,
    d(n) {
      n && vu(e);
    }
  };
}
class zu extends wu {
  constructor(e) {
    super(), ku(this, e, null, Su, Cu, {});
  }
}
const {
  SvelteComponent: qu,
  append: Bu,
  attr: Sn,
  detach: Du,
  init: Lu,
  insert: Eu,
  noop: Li,
  safe_not_equal: Mu,
  svg_element: xs
} = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t;
  return {
    c() {
      e = xs("svg"), t = xs("path"), Sn(t, "fill", "currentColor"), Sn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Sn(e, "xmlns", "http://www.w3.org/2000/svg"), Sn(e, "width", "100%"), Sn(e, "height", "100%"), Sn(e, "viewBox", "0 0 32 32");
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
  append: Iu,
  attr: zn,
  detach: Tu,
  init: Hu,
  insert: Xu,
  noop: Ei,
  safe_not_equal: Yu,
  svg_element: $s
} = window.__gradio__svelte__internal;
function Fu(l) {
  let e, t;
  return {
    c() {
      e = $s("svg"), t = $s("path"), zn(t, "d", "M5 8l4 4 4-4z"), zn(e, "class", "dropdown-arrow svelte-145leq6"), zn(e, "xmlns", "http://www.w3.org/2000/svg"), zn(e, "width", "100%"), zn(e, "height", "100%"), zn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      Xu(n, e, i), Iu(e, t);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(n) {
      n && Tu(e);
    }
  };
}
class Ms extends Wu {
  constructor(e) {
    super(), Hu(this, e, null, Fu, Yu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Mi,
  attr: ce,
  detach: Uu,
  init: Vu,
  insert: Ou,
  noop: Ri,
  safe_not_equal: Nu,
  svg_element: Cl
} = window.__gradio__svelte__internal;
function Pu(l) {
  let e, t, n, i;
  return {
    c() {
      e = Cl("svg"), t = Cl("rect"), n = Cl("circle"), i = Cl("polyline"), ce(t, "x", "3"), ce(t, "y", "3"), ce(t, "width", "18"), ce(t, "height", "18"), ce(t, "rx", "2"), ce(t, "ry", "2"), ce(n, "cx", "8.5"), ce(n, "cy", "8.5"), ce(n, "r", "1.5"), ce(i, "points", "21 15 16 10 5 21"), ce(e, "xmlns", "http://www.w3.org/2000/svg"), ce(e, "width", "100%"), ce(e, "height", "100%"), ce(e, "viewBox", "0 0 24 24"), ce(e, "fill", "none"), ce(e, "stroke", "currentColor"), ce(e, "stroke-width", "1.5"), ce(e, "stroke-linecap", "round"), ce(e, "stroke-linejoin", "round"), ce(e, "class", "feather feather-image");
    },
    m(s, o) {
      Ou(s, e, o), Mi(e, t), Mi(e, n), Mi(e, i);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(s) {
      s && Uu(e);
    }
  };
}
let Za = class extends ju {
  constructor(e) {
    super(), Vu(this, e, null, Pu, Nu, {});
  }
};
const {
  SvelteComponent: Zu,
  append: Gu,
  attr: Sl,
  detach: Ku,
  init: Ju,
  insert: Qu,
  noop: Ai,
  safe_not_equal: xu,
  svg_element: eo
} = window.__gradio__svelte__internal;
function $u(l) {
  let e, t;
  return {
    c() {
      e = eo("svg"), t = eo("path"), Sl(t, "fill", "currentColor"), Sl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Sl(e, "xmlns", "http://www.w3.org/2000/svg"), Sl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Qu(n, e, i), Gu(e, t);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(n) {
      n && Ku(e);
    }
  };
}
class Ga extends Zu {
  constructor(e) {
    super(), Ju(this, e, null, $u, xu, {});
  }
}
const {
  SvelteComponent: e_,
  append: zl,
  attr: ue,
  detach: t_,
  init: n_,
  insert: l_,
  noop: Wi,
  safe_not_equal: i_,
  svg_element: Qn
} = window.__gradio__svelte__internal;
function s_(l) {
  let e, t, n, i, s;
  return {
    c() {
      e = Qn("svg"), t = Qn("path"), n = Qn("path"), i = Qn("line"), s = Qn("line"), ue(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ue(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ue(i, "x1", "12"), ue(i, "y1", "19"), ue(i, "x2", "12"), ue(i, "y2", "23"), ue(s, "x1", "8"), ue(s, "y1", "23"), ue(s, "x2", "16"), ue(s, "y2", "23"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "fill", "none"), ue(e, "stroke", "currentColor"), ue(e, "stroke-width", "2"), ue(e, "stroke-linecap", "round"), ue(e, "stroke-linejoin", "round"), ue(e, "class", "feather feather-mic");
    },
    m(o, r) {
      l_(o, e, r), zl(e, t), zl(e, n), zl(e, i), zl(e, s);
    },
    p: Wi,
    i: Wi,
    o: Wi,
    d(o) {
      o && t_(e);
    }
  };
}
class o_ extends e_ {
  constructor(e) {
    super(), n_(this, e, null, s_, i_, {});
  }
}
const {
  SvelteComponent: a_,
  append: to,
  attr: Ue,
  detach: r_,
  init: f_,
  insert: c_,
  noop: Ii,
  safe_not_equal: u_,
  set_style: __,
  svg_element: Ti
} = window.__gradio__svelte__internal;
function d_(l) {
  let e, t, n;
  return {
    c() {
      e = Ti("svg"), t = Ti("polyline"), n = Ti("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), __(e, "transform", "rotateY(180deg)");
    },
    m(i, s) {
      c_(i, e, s), to(e, t), to(e, n);
    },
    p: Ii,
    i: Ii,
    o: Ii,
    d(i) {
      i && r_(e);
    }
  };
}
class h_ extends a_ {
  constructor(e) {
    super(), f_(this, e, null, d_, u_, {});
  }
}
const {
  SvelteComponent: m_,
  append: g_,
  attr: qe,
  detach: b_,
  init: w_,
  insert: p_,
  noop: Hi,
  safe_not_equal: v_,
  svg_element: no
} = window.__gradio__svelte__internal;
function k_(l) {
  let e, t;
  return {
    c() {
      e = no("svg"), t = no("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
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
class y_ extends m_ {
  constructor(e) {
    super(), w_(this, e, null, k_, v_, {});
  }
}
const {
  SvelteComponent: C_,
  append: lo,
  attr: Ve,
  detach: S_,
  init: z_,
  insert: q_,
  noop: Xi,
  safe_not_equal: B_,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function D_(l) {
  let e, t, n;
  return {
    c() {
      e = Yi("svg"), t = Yi("polyline"), n = Yi("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw");
    },
    m(i, s) {
      q_(i, e, s), lo(e, t), lo(e, n);
    },
    p: Xi,
    i: Xi,
    o: Xi,
    d(i) {
      i && S_(e);
    }
  };
}
class L_ extends C_ {
  constructor(e) {
    super(), z_(this, e, null, D_, B_, {});
  }
}
const {
  SvelteComponent: E_,
  append: Fi,
  attr: we,
  detach: M_,
  init: R_,
  insert: A_,
  noop: ji,
  safe_not_equal: W_,
  svg_element: ql
} = window.__gradio__svelte__internal;
function I_(l) {
  let e, t, n, i;
  return {
    c() {
      e = ql("svg"), t = ql("path"), n = ql("polyline"), i = ql("line"), we(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), we(n, "points", "17 8 12 3 7 8"), we(i, "x1", "12"), we(i, "y1", "3"), we(i, "x2", "12"), we(i, "y2", "15"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "90%"), we(e, "height", "90%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-upload");
    },
    m(s, o) {
      A_(s, e, o), Fi(e, t), Fi(e, n), Fi(e, i);
    },
    p: ji,
    i: ji,
    o: ji,
    d(s) {
      s && M_(e);
    }
  };
}
let Ka = class extends E_ {
  constructor(e) {
    super(), R_(this, e, null, I_, W_, {});
  }
};
const {
  SvelteComponent: T_,
  append: io,
  attr: Ht,
  detach: H_,
  init: X_,
  insert: Y_,
  noop: Ui,
  safe_not_equal: F_,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function j_(l) {
  let e, t, n;
  return {
    c() {
      e = Vi("svg"), t = Vi("path"), n = Vi("path"), Ht(t, "fill", "currentColor"), Ht(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ht(n, "fill", "currentColor"), Ht(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24");
    },
    m(i, s) {
      Y_(i, e, s), io(e, t), io(e, n);
    },
    p: Ui,
    i: Ui,
    o: Ui,
    d(i) {
      i && H_(e);
    }
  };
}
let Ja = class extends T_ {
  constructor(e) {
    super(), X_(this, e, null, j_, F_, {});
  }
};
const U_ = [
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
], so = {
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
U_.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: so[e][t],
    secondary: so[e][n]
  }
}), {});
class Vl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function V_(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Vl("Must be on Spaces to share.");
  let t, n, i;
  t = O_(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
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
      throw new Vl(`Upload failed: ${f.error}`);
    }
    throw new Vl("Upload failed.");
  }
  return await o.text();
}
function O_(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, s = new Uint8Array(i); i--; )
    s[i] = n.charCodeAt(i);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: N_,
  create_component: P_,
  destroy_component: Z_,
  init: G_,
  mount_component: K_,
  safe_not_equal: J_,
  transition_in: Q_,
  transition_out: x_
} = window.__gradio__svelte__internal, { createEventDispatcher: $_ } = window.__gradio__svelte__internal;
function ed(l) {
  let e, t;
  return e = new ai({
    props: {
      Icon: zu,
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
      P_(e.$$.fragment);
    },
    m(n, i) {
      K_(e, n, i), t = !0;
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
      t || (Q_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      x_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Z_(e, n);
    }
  };
}
function td(l, e, t) {
  const n = $_();
  let { formatter: i } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Vl ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [i, s, o, r, n, a];
}
class nd extends N_ {
  constructor(e) {
    super(), G_(this, e, td, ed, J_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: ld,
  append: on,
  attr: _s,
  check_outros: id,
  create_component: Qa,
  destroy_component: xa,
  detach: Ol,
  element: ds,
  group_outros: sd,
  init: od,
  insert: Nl,
  mount_component: $a,
  safe_not_equal: ad,
  set_data: hs,
  space: ms,
  text: il,
  toggle_class: oo,
  transition_in: Gl,
  transition_out: Kl
} = window.__gradio__svelte__internal;
function rd(l) {
  let e, t;
  return e = new Ka({}), {
    c() {
      Qa(e.$$.fragment);
    },
    m(n, i) {
      $a(e, n, i), t = !0;
    },
    i(n) {
      t || (Gl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xa(e, n);
    }
  };
}
function fd(l) {
  let e, t;
  return e = new Ga({}), {
    c() {
      Qa(e.$$.fragment);
    },
    m(n, i) {
      $a(e, n, i), t = !0;
    },
    i(n) {
      t || (Gl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xa(e, n);
    }
  };
}
function ao(l) {
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
      e = ds("span"), t = il("- "), i = il(n), s = il(" -"), o = ms(), a = il(r), _s(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Nl(f, e, c), on(e, t), on(e, i), on(e, s), Nl(f, o, c), Nl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && hs(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && hs(a, r);
    },
    d(f) {
      f && (Ol(e), Ol(o), Ol(a));
    }
  };
}
function cd(l) {
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
  const c = [fd, rd], u = [];
  function _(g, m) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && ao(l)
  );
  return {
    c() {
      e = ds("div"), t = ds("span"), i.c(), s = ms(), r = il(o), a = ms(), d && d.c(), _s(t, "class", "icon-wrap svelte-kzcjhc"), oo(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), _s(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, m) {
      Nl(g, e, m), on(e, t), u[n].m(t, null), on(e, s), on(e, r), on(e, a), d && d.m(e, null), f = !0;
    },
    p(g, [m]) {
      let b = n;
      n = _(g), n !== b && (sd(), Kl(u[b], 1, 1, () => {
        u[b] = null;
      }), id(), i = u[n], i || (i = u[n] = c[n](g), i.c()), Gl(i, 1), i.m(t, null)), (!f || m & /*hovered*/
      16) && oo(
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
      ) + "") && hs(r, o), /*mode*/
      g[3] !== "short" ? d ? d.p(g, m) : (d = ao(g), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      f || (Gl(i), f = !0);
    },
    o(g) {
      Kl(i), f = !1;
    },
    d(g) {
      g && Ol(e), u[n].d(), d && d.d();
    }
  };
}
function ud(l, e, t) {
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
class er extends ld {
  constructor(e) {
    super(), od(this, e, ud, cd, ad, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: _d,
  append: Oi,
  attr: ht,
  check_outros: sl,
  create_component: ri,
  destroy_component: fi,
  detach: Fn,
  element: bl,
  empty: dd,
  group_outros: ol,
  init: hd,
  insert: jn,
  listen: ci,
  mount_component: ui,
  safe_not_equal: md,
  space: Ni,
  toggle_class: Zt,
  transition_in: de,
  transition_out: Be
} = window.__gradio__svelte__internal;
function ro(l) {
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
  ), f, c = t && fo(l), u = i && co(l), _ = o && uo(l), d = a && _o(l);
  return {
    c() {
      e = bl("span"), c && c.c(), n = Ni(), u && u.c(), s = Ni(), _ && _.c(), r = Ni(), d && d.c(), ht(e, "class", "source-selection svelte-1jp3vgd"), ht(e, "data-testid", "source-select");
    },
    m(g, m) {
      jn(g, e, m), c && c.m(e, null), Oi(e, n), u && u.m(e, null), Oi(e, s), _ && _.m(e, null), Oi(e, r), d && d.m(e, null), f = !0;
    },
    p(g, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? c ? (c.p(g, m), m & /*sources*/
      2 && de(c, 1)) : (c = fo(g), c.c(), de(c, 1), c.m(e, n)) : c && (ol(), Be(c, 1, 1, () => {
        c = null;
      }), sl()), m & /*sources*/
      2 && (i = /*sources*/
      g[1].includes("microphone")), i ? u ? (u.p(g, m), m & /*sources*/
      2 && de(u, 1)) : (u = co(g), u.c(), de(u, 1), u.m(e, s)) : u && (ol(), Be(u, 1, 1, () => {
        u = null;
      }), sl()), m & /*sources*/
      2 && (o = /*sources*/
      g[1].includes("webcam")), o ? _ ? (_.p(g, m), m & /*sources*/
      2 && de(_, 1)) : (_ = uo(g), _.c(), de(_, 1), _.m(e, r)) : _ && (ol(), Be(_, 1, 1, () => {
        _ = null;
      }), sl()), m & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? d ? (d.p(g, m), m & /*sources*/
      2 && de(d, 1)) : (d = _o(g), d.c(), de(d, 1), d.m(e, null)) : d && (ol(), Be(d, 1, 1, () => {
        d = null;
      }), sl());
    },
    i(g) {
      f || (de(c), de(u), de(_), de(d), f = !0);
    },
    o(g) {
      Be(c), Be(u), Be(_), Be(d), f = !1;
    },
    d(g) {
      g && Fn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function fo(l) {
  let e, t, n, i, s;
  return t = new Ka({}), {
    c() {
      e = bl("button"), ri(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Upload file"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(o, r) {
      jn(o, e, r), ui(t, e, null), n = !0, i || (s = ci(
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
      o && Fn(e), fi(t), i = !1, s();
    }
  };
}
function co(l) {
  let e, t, n, i, s;
  return t = new o_({}), {
    c() {
      e = bl("button"), ri(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Record audio"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(o, r) {
      jn(o, e, r), ui(t, e, null), n = !0, i || (s = ci(
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
      o && Fn(e), fi(t), i = !1, s();
    }
  };
}
function uo(l) {
  let e, t, n, i, s;
  return t = new Ja({}), {
    c() {
      e = bl("button"), ri(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Capture from camera"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(o, r) {
      jn(o, e, r), ui(t, e, null), n = !0, i || (s = ci(
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
      o && Fn(e), fi(t), i = !1, s();
    }
  };
}
function _o(l) {
  let e, t, n, i, s;
  return t = new Ga({}), {
    c() {
      e = bl("button"), ri(t.$$.fragment), ht(e, "class", "icon svelte-1jp3vgd"), ht(e, "aria-label", "Paste from clipboard"), Zt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(o, r) {
      jn(o, e, r), ui(t, e, null), n = !0, i || (s = ci(
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
      o && Fn(e), fi(t), i = !1, s();
    }
  };
}
function gd(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && ro(l)
  );
  return {
    c() {
      n && n.c(), e = dd();
    },
    m(i, s) {
      n && n.m(i, s), jn(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, s), s & /*unique_sources*/
      4 && de(n, 1)) : (n = ro(i), n.c(), de(n, 1), n.m(e.parentNode, e)) : n && (ol(), Be(n, 1, 1, () => {
        n = null;
      }), sl());
    },
    i(i) {
      t || (de(n), t = !0);
    },
    o(i) {
      Be(n), t = !1;
    },
    d(i) {
      i && Fn(e), n && n.d(i);
    }
  };
}
function bd(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(g, m, b, p) {
    function w(h) {
      return h instanceof b ? h : new b(function(v) {
        v(h);
      });
    }
    return new (b || (b = Promise))(function(h, v) {
      function y(C) {
        try {
          S(p.next(C));
        } catch (E) {
          v(E);
        }
      }
      function k(C) {
        try {
          S(p.throw(C));
        } catch (E) {
          v(E);
        }
      }
      function S(C) {
        C.done ? h(C.value) : w(C.value).then(y, k);
      }
      S((p = p.apply(g, m || [])).next());
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
class wd extends _d {
  constructor(e) {
    super(), hd(this, e, bd, gd, md, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Rn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Pl() {
}
const pd = (l) => l;
function vd(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function ho(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const tr = typeof window < "u";
let mo = tr ? () => window.performance.now() : () => Date.now(), nr = tr ? (l) => requestAnimationFrame(l) : Pl;
const Yn = /* @__PURE__ */ new Set();
function lr(l) {
  Yn.forEach((e) => {
    e.c(l) || (Yn.delete(e), e.f());
  }), Yn.size !== 0 && nr(lr);
}
function kd(l) {
  let e;
  return Yn.size === 0 && nr(lr), {
    promise: new Promise((t) => {
      Yn.add(e = { c: l, f: t });
    }),
    abort() {
      Yn.delete(e);
    }
  };
}
function yd(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Cd(l, { delay: e = 0, duration: t = 400, easing: n = pd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function go(l, { delay: e = 0, duration: t = 400, easing: n = yd, x: i = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = ho(i), [d, g] = ho(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (m, b) => `
			transform: ${f} translate(${(1 - m) * u}${_}, ${(1 - m) * d}${g});
			opacity: ${a - c * b}`
  };
}
const qn = [];
function Sd(l, e = Pl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (vd(l, r) && (l = r, t)) {
      const a = !qn.length;
      for (const f of n)
        f[1](), qn.push(f, l);
      if (a) {
        for (let f = 0; f < qn.length; f += 2)
          qn[f][0](qn[f + 1]);
        qn.length = 0;
      }
    }
  }
  function s(r) {
    i(r(l));
  }
  function o(r, a = Pl) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, s) || Pl), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function bo(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function gs(l, e, t, n) {
  if (typeof t == "number" || bo(t)) {
    const i = n - t, s = (t - e) / (l.dt || 1 / 60), o = l.opts.stiffness * i, r = l.opts.damping * s, a = (o - r) * l.inv_mass, f = (s + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, bo(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => gs(l, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = gs(l, e[s], t[s], n[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function wo(l, e = {}) {
  const t = Sd(l), { stiffness: n = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function g(b, p = {}) {
    c = b;
    const w = a = {};
    return l == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, o = mo(), f = b, t.set(l = c), Promise.resolve()) : (p.soft && (_ = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), u = 0), r || (o = mo(), d = !1, r = kd((h) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const v = {
        inv_mass: u,
        opts: m,
        settled: !0,
        dt: (h - o) * 60 / 1e3
      }, y = gs(v, f, l, c);
      return o = h, f = l, t.set(l = y), v.settled && (r = null), !v.settled;
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
  SvelteComponent: zd,
  append: et,
  attr: N,
  component_subscribe: po,
  detach: qd,
  element: Bd,
  init: Dd,
  insert: Ld,
  noop: vo,
  safe_not_equal: Ed,
  set_style: Bl,
  svg_element: tt,
  toggle_class: ko
} = window.__gradio__svelte__internal, { onMount: Md } = window.__gradio__svelte__internal;
function Rd(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Bd("div"), t = tt("svg"), n = tt("g"), i = tt("path"), s = tt("path"), o = tt("path"), r = tt("path"), a = tt("g"), f = tt("path"), c = tt("path"), u = tt("path"), _ = tt("path"), N(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(i, "fill", "#FF7C00"), N(i, "fill-opacity", "0.4"), N(i, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), Bl(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), Bl(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), ko(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, g) {
      Ld(d, e, g), et(e, t), et(t, n), et(n, i), et(n, s), et(n, o), et(n, r), et(t, a), et(a, f), et(a, c), et(a, u), et(a, _);
    },
    p(d, [g]) {
      g & /*$top*/
      2 && Bl(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), g & /*$bottom*/
      4 && Bl(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), g & /*margin*/
      1 && ko(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: vo,
    o: vo,
    d(d) {
      d && qd(e);
    }
  };
}
function Ad(l, e, t) {
  let n, i;
  var s = this && this.__awaiter || function(d, g, m, b) {
    function p(w) {
      return w instanceof m ? w : new m(function(h) {
        h(w);
      });
    }
    return new (m || (m = Promise))(function(w, h) {
      function v(S) {
        try {
          k(b.next(S));
        } catch (C) {
          h(C);
        }
      }
      function y(S) {
        try {
          k(b.throw(S));
        } catch (C) {
          h(C);
        }
      }
      function k(S) {
        S.done ? w(S.value) : p(S.value).then(v, y);
      }
      k((b = b.apply(d, g || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = wo([0, 0]);
  po(l, r, (d) => t(1, n = d));
  const a = wo([0, 0]);
  po(l, a, (d) => t(2, i = d));
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
  return Md(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, i, r, a];
}
class Wd extends zd {
  constructor(e) {
    super(), Dd(this, e, Ad, Rd, Ed, { margin: 0 });
  }
}
const {
  SvelteComponent: Id,
  append: an,
  attr: st,
  binding_callbacks: yo,
  check_outros: bs,
  create_component: ir,
  create_slot: sr,
  destroy_component: or,
  destroy_each: ar,
  detach: Y,
  element: _t,
  empty: Un,
  ensure_array_like: Jl,
  get_all_dirty_from_scope: rr,
  get_slot_changes: fr,
  group_outros: ws,
  init: Td,
  insert: F,
  mount_component: cr,
  noop: ps,
  safe_not_equal: Hd,
  set_data: Ze,
  set_style: Nt,
  space: Pe,
  text: le,
  toggle_class: Ne,
  transition_in: it,
  transition_out: dt,
  update_slot_base: ur
} = window.__gradio__svelte__internal, { tick: Xd } = window.__gradio__svelte__internal, { onDestroy: Yd } = window.__gradio__svelte__internal, { createEventDispatcher: Fd } = window.__gradio__svelte__internal, jd = (l) => ({}), Co = (l) => ({}), Ud = (l) => ({}), So = (l) => ({});
function zo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function qo(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function Vd(l) {
  let e, t, n, i, s = (
    /*i18n*/
    l[1]("common.error") + ""
  ), o, r, a;
  t = new ai({
    props: {
      Icon: Pa,
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
  ), c = sr(
    f,
    l,
    /*$$scope*/
    l[29],
    Co
  );
  return {
    c() {
      e = _t("div"), ir(t.$$.fragment), n = Pe(), i = _t("span"), o = le(s), r = Pe(), c && c.c(), st(e, "class", "clear-status svelte-16nch4a"), st(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      F(u, e, _), cr(t, e, null), F(u, n, _), F(u, i, _), an(i, o), F(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ze(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && ur(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? fr(
          f,
          /*$$scope*/
          u[29],
          _,
          jd
        ) : rr(
          /*$$scope*/
          u[29]
        ),
        Co
      );
    },
    i(u) {
      a || (it(t.$$.fragment, u), it(c, u), a = !0);
    },
    o(u) {
      dt(t.$$.fragment, u), dt(c, u), a = !1;
    },
    d(u) {
      u && (Y(e), Y(n), Y(i), Y(r)), or(t), c && c.d(u);
    }
  };
}
function Od(l) {
  let e, t, n, i, s, o, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Bo(l)
  );
  function u(h, v) {
    if (
      /*progress*/
      h[7]
    ) return Zd;
    if (
      /*queue_position*/
      h[2] !== null && /*queue_size*/
      h[3] !== void 0 && /*queue_position*/
      h[2] >= 0
    ) return Pd;
    if (
      /*queue_position*/
      h[2] === 0
    ) return Nd;
  }
  let _ = u(l), d = _ && _(l), g = (
    /*timer*/
    l[5] && Eo(l)
  );
  const m = [Qd, Jd], b = [];
  function p(h, v) {
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
  l[5] && Ho(l);
  return {
    c() {
      c && c.c(), e = Pe(), t = _t("div"), d && d.c(), n = Pe(), g && g.c(), i = Pe(), o && o.c(), r = Pe(), w && w.c(), a = Un(), st(t, "class", "progress-text svelte-16nch4a"), Ne(
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
    m(h, v) {
      c && c.m(h, v), F(h, e, v), F(h, t, v), d && d.m(t, null), an(t, n), g && g.m(t, null), F(h, i, v), ~s && b[s].m(h, v), F(h, r, v), w && w.m(h, v), F(h, a, v), f = !0;
    },
    p(h, v) {
      /*variant*/
      h[8] === "default" && /*show_eta_bar*/
      h[18] && /*show_progress*/
      h[6] === "full" ? c ? c.p(h, v) : (c = Bo(h), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(h)) && d ? d.p(h, v) : (d && d.d(1), d = _ && _(h), d && (d.c(), d.m(t, n))), /*timer*/
      h[5] ? g ? g.p(h, v) : (g = Eo(h), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!f || v[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text-center",
        /*variant*/
        h[8] === "center"
      ), (!f || v[0] & /*variant*/
      256) && Ne(
        t,
        "meta-text",
        /*variant*/
        h[8] === "default"
      );
      let y = s;
      s = p(h), s === y ? ~s && b[s].p(h, v) : (o && (ws(), dt(b[y], 1, 1, () => {
        b[y] = null;
      }), bs()), ~s ? (o = b[s], o ? o.p(h, v) : (o = b[s] = m[s](h), o.c()), it(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      h[5] ? w && (ws(), dt(w, 1, 1, () => {
        w = null;
      }), bs()) : w ? (w.p(h, v), v[0] & /*timer*/
      32 && it(w, 1)) : (w = Ho(h), w.c(), it(w, 1), w.m(a.parentNode, a));
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
function Bo(l) {
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
function Nd(l) {
  let e;
  return {
    c() {
      e = le("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: ps,
    d(t) {
      t && Y(e);
    }
  };
}
function Pd(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, s, o;
  return {
    c() {
      e = le("queue: "), n = le(t), i = le("/"), s = le(
        /*queue_size*/
        l[3]
      ), o = le(" |");
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
function Zd(l) {
  let e, t = Jl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Lo(qo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Un();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      F(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = Jl(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = qo(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Lo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Y(e), ar(n, i);
    }
  };
}
function Do(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? Kd : Gd
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Pe(), n = le(t), i = le(" | "), o = le(s);
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
function Gd(l) {
  let e = Rn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = le(e);
    },
    m(n, i) {
      F(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && Y(t);
    }
  };
}
function Kd(l) {
  let e = Rn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Rn(
    /*p*/
    l[41].length
  ) + "", s;
  return {
    c() {
      t = le(e), n = le("/"), s = le(i);
    },
    m(o, r) {
      F(o, t, r), F(o, n, r), F(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = Rn(
        /*p*/
        o[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && i !== (i = Rn(
        /*p*/
        o[41].length
      ) + "") && Ze(s, i);
    },
    d(o) {
      o && (Y(t), Y(n), Y(s));
    }
  };
}
function Lo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Do(l)
  );
  return {
    c() {
      t && t.c(), e = Un();
    },
    m(n, i) {
      t && t.m(n, i), F(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Do(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Eo(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = le(
        /*formatted_timer*/
        l[20]
      ), n = le(t), i = le("s");
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
function Jd(l) {
  let e, t;
  return e = new Wd({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      ir(e.$$.fragment);
    },
    m(n, i) {
      cr(e, n, i), t = !0;
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
      or(e, n);
    }
  };
}
function Qd(l) {
  let e, t, n, i, s, o = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Mo(l)
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
      a[7] != null ? r ? r.p(a, f) : (r = Mo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Nt(s, "width", o);
    },
    i: ps,
    o: ps,
    d(a) {
      a && Y(e), r && r.d(), l[31](null);
    }
  };
}
function Mo(l) {
  let e, t = Jl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = To(zo(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Un();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      F(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = Jl(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = zo(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = To(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Y(e), ar(n, i);
    }
  };
}
function Ro(l) {
  let e, t, n, i, s = (
    /*i*/
    l[43] !== 0 && xd()
  ), o = (
    /*p*/
    l[41].desc != null && Ao(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Wo()
  ), a = (
    /*progress_level*/
    l[14] != null && Io(l)
  );
  return {
    c() {
      s && s.c(), e = Pe(), o && o.c(), t = Pe(), r && r.c(), n = Pe(), a && a.c(), i = Un();
    },
    m(f, c) {
      s && s.m(f, c), F(f, e, c), o && o.m(f, c), F(f, t, c), r && r.m(f, c), F(f, n, c), a && a.m(f, c), F(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = Ao(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Wo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Io(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (Y(e), Y(t), Y(n), Y(i)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function xd(l) {
  let e;
  return {
    c() {
      e = le(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && Y(e);
    }
  };
}
function Ao(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = le(e);
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
function Wo(l) {
  let e;
  return {
    c() {
      e = le("-");
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
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = le(e), n = le("%");
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
function To(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && Ro(l)
  );
  return {
    c() {
      t && t.c(), e = Un();
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
      ] != null ? t ? t.p(n, i) : (t = Ro(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && Y(e), t && t.d(n);
    }
  };
}
function Ho(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), o = sr(
    s,
    l,
    /*$$scope*/
    l[29],
    So
  );
  return {
    c() {
      e = _t("p"), t = le(
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
      536870912) && ur(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        i ? fr(
          s,
          /*$$scope*/
          r[29],
          a,
          Ud
        ) : rr(
          /*$$scope*/
          r[29]
        ),
        So
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
function $d(l) {
  let e, t, n, i, s;
  const o = [Od, Vd], r = [];
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
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ws(), dt(r[u], 1, 1, () => {
        r[u] = null;
      }), bs()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), it(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
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
var e1 = function(l, e, t, n) {
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
let Dl = [], Pi = !1;
function t1(l) {
  return e1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Dl.push(e), !Pi) Pi = !0;
      else return;
      yield Xd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Dl.length; i++) {
          const o = Dl[i].getBoundingClientRect();
          (i === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Pi = !1, Dl = [];
      });
    }
  });
}
function n1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = Fd();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: g = "full" } = e, { message: m = null } = e, { progress: b = null } = e, { variant: p = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: h = !0 } = e, { translucent: v = !1 } = e, { border: y = !1 } = e, { autoscroll: k } = e, S, C = !1, E = 0, q = 0, W = null, A = null, U = 0, V = null, G, J = null, ae = !0;
  const R = () => {
    t(0, a = t(27, W = t(19, j = null))), t(25, E = performance.now()), t(26, q = 0), C = !0, P();
  };
  function P() {
    requestAnimationFrame(() => {
      t(26, q = (performance.now() - E) / 1e3), C && P();
    });
  }
  function M() {
    t(26, q = 0), t(0, a = t(27, W = t(19, j = null))), C && (C = !1);
  }
  Yd(() => {
    C && M();
  });
  let j = null;
  function O(I) {
    yo[I ? "unshift" : "push"](() => {
      J = I, t(16, J), t(7, b), t(14, V), t(15, G);
    });
  }
  const ie = () => {
    o("clear_status");
  };
  function be(I) {
    yo[I ? "unshift" : "push"](() => {
      S = I, t(13, S);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, u = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, g = I.show_progress), "message" in I && t(23, m = I.message), "progress" in I && t(7, b = I.progress), "variant" in I && t(8, p = I.variant), "loading_text" in I && t(9, w = I.loading_text), "absolute" in I && t(10, h = I.absolute), "translucent" in I && t(11, v = I.translucent), "border" in I && t(12, y = I.border), "autoscroll" in I && t(24, k = I.autoscroll), "$$scope" in I && t(29, s = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = W), a != null && W !== a && (t(28, A = (performance.now() - E) / 1e3 + a), t(19, j = A.toFixed(1)), t(27, W = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, U = A === null || A <= 0 || !q ? null : Math.min(q / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && b != null && t(18, ae = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? t(14, V = b.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, V = null), V ? (t(15, G = V[V.length - 1]), J && (G === 0 ? t(16, J.style.transition = "0", J) : t(16, J.style.transition = "150ms", J))) : t(15, G = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : M()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && S && _ && (u === "pending" || u === "complete") && t1(S, k), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = q.toFixed(1));
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
    v,
    y,
    S,
    V,
    G,
    J,
    U,
    ae,
    j,
    n,
    o,
    _,
    m,
    k,
    E,
    q,
    W,
    A,
    s,
    i,
    O,
    ie,
    be
  ];
}
class l1 extends Id {
  constructor(e) {
    super(), Td(
      this,
      e,
      n1,
      $d,
      Hd,
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
const { setContext: z2, getContext: i1 } = window.__gradio__svelte__internal, s1 = "WORKER_PROXY_CONTEXT_KEY";
function _r() {
  return i1(s1);
}
function o1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function dr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function hr(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!o1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function a1(l) {
  if (l == null || !hr(l))
    return l;
  const e = _r();
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
      type: dr(i.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: r1,
  assign: Ql,
  check_outros: mr,
  compute_rest_props: Xo,
  create_slot: Rs,
  detach: _i,
  element: gr,
  empty: br,
  exclude_internal_props: f1,
  get_all_dirty_from_scope: As,
  get_slot_changes: Ws,
  get_spread_update: wr,
  group_outros: pr,
  init: c1,
  insert: di,
  listen: vr,
  prevent_default: u1,
  safe_not_equal: _1,
  set_attributes: xl,
  transition_in: dn,
  transition_out: hn,
  update_slot_base: Is
} = window.__gradio__svelte__internal, { createEventDispatcher: d1 } = window.__gradio__svelte__internal;
function h1(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[8].default
  ), r = Rs(
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
    f = Ql(f, a[c]);
  return {
    c() {
      e = gr("a"), r && r.c(), xl(e, f);
    },
    m(c, u) {
      di(c, e, u), r && r.m(e, null), n = !0, i || (s = vr(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Is(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? Ws(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : As(
          /*$$scope*/
          c[7]
        ),
        null
      ), xl(e, f = wr(a, [
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
      c && _i(e), r && r.d(c), i = !1, s();
    }
  };
}
function m1(l) {
  let e, t, n, i;
  const s = [b1, g1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = br();
    },
    m(a, f) {
      o[e].m(a, f), di(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (pr(), hn(o[c], 1, 1, () => {
        o[c] = null;
      }), mr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), dn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (dn(t), i = !0);
    },
    o(a) {
      hn(t), i = !1;
    },
    d(a) {
      a && _i(n), o[e].d(a);
    }
  };
}
function g1(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[8].default
  ), o = Rs(
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
    a = Ql(a, r[f]);
  return {
    c() {
      e = gr("a"), o && o.c(), xl(e, a);
    },
    m(f, c) {
      di(f, e, c), o && o.m(e, null), t = !0, n || (i = vr(e, "click", u1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && Is(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? Ws(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : As(
          /*$$scope*/
          f[7]
        ),
        null
      ), xl(e, a = wr(r, [
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
      f && _i(e), o && o.d(f), n = !1, i();
    }
  };
}
function b1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = Rs(
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
      128) && Is(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Ws(
          t,
          /*$$scope*/
          i[7],
          s,
          null
        ) : As(
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
function w1(l) {
  let e, t, n, i, s;
  const o = [m1, h1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && hr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = o[t](l), {
    c() {
      n.c(), i = br();
    },
    m(f, c) {
      r[t].m(f, c), di(f, i, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (pr(), hn(r[u], 1, 1, () => {
        r[u] = null;
      }), mr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), dn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      s || (dn(n), s = !0);
    },
    o(f) {
      hn(n), s = !1;
    },
    d(f) {
      f && _i(i), r[t].d(f);
    }
  };
}
function p1(l, e, t) {
  const n = ["href", "download"];
  let i = Xo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(g, m, b, p) {
    function w(h) {
      return h instanceof b ? h : new b(function(v) {
        v(h);
      });
    }
    return new (b || (b = Promise))(function(h, v) {
      function y(C) {
        try {
          S(p.next(C));
        } catch (E) {
          v(E);
        }
      }
      function k(C) {
        try {
          S(p.throw(C));
        } catch (E) {
          v(E);
        }
      }
      function S(C) {
        C.done ? h(C.value) : w(C.value).then(y, k);
      }
      S((p = p.apply(g, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = d1();
  let u = !1;
  const _ = _r();
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
            type: dr(b.headers, "content-type")
          }
        ), w = URL.createObjectURL(p), h = document.createElement("a");
        h.href = w, h.download = f, h.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (g) => {
    e = Ql(Ql({}, e), f1(g)), t(6, i = Xo(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, f = g.download), "$$scope" in g && t(7, o = g.$$scope);
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
class v1 extends r1 {
  constructor(e) {
    super(), c1(this, e, p1, w1, _1, { href: 0, download: 1 });
  }
}
var k1 = Object.defineProperty, y1 = (l, e, t) => e in l ? k1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, bt = (l, e, t) => (y1(l, typeof e != "symbol" ? e + "" : e, t), t), kr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, xn = (l, e, t) => (kr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), C1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, S1 = (l, e, t, n) => (kr(l, e, "write to private field"), e.set(l, t), t), Vt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function yr(l, e) {
  return l.map(
    (t) => new z1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class z1 {
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
let q2 = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = xn(this, Vt) + t; ; ) {
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
        S1(this, Vt, t);
      },
      flush: (t) => {
        if (xn(this, Vt) === "")
          return;
        const n = e.allowCR && xn(this, Vt).endsWith("\r") ? xn(this, Vt).slice(0, -1) : xn(this, Vt);
        t.enqueue(n);
      }
    }), C1(this, Vt, "");
  }
};
Vt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: q1,
  append: Le,
  attr: ln,
  detach: Cr,
  element: sn,
  init: B1,
  insert: Sr,
  noop: Yo,
  safe_not_equal: D1,
  set_data: $l,
  set_style: Zi,
  space: vs,
  text: An,
  toggle_class: Fo
} = window.__gradio__svelte__internal, { onMount: L1, createEventDispatcher: E1, onDestroy: M1 } = window.__gradio__svelte__internal;
function jo(l) {
  let e, t, n, i, s = al(
    /*file_to_display*/
    l[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = sn("div"), t = sn("span"), n = sn("div"), i = sn("progress"), o = An(s), a = vs(), f = sn("span"), u = An(c), Zi(i, "visibility", "hidden"), Zi(i, "height", "0"), Zi(i, "width", "0"), i.value = r = al(
        /*file_to_display*/
        l[2]
      ), ln(i, "max", "100"), ln(i, "class", "svelte-cr2edf"), ln(n, "class", "progress-bar svelte-cr2edf"), ln(f, "class", "file-name svelte-cr2edf"), ln(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Sr(_, e, d), Le(e, t), Le(t, n), Le(n, i), Le(i, o), Le(e, a), Le(e, f), Le(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = al(
        /*file_to_display*/
        _[2]
      ) + "") && $l(o, s), d & /*file_to_display*/
      4 && r !== (r = al(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && $l(u, c);
    },
    d(_) {
      _ && Cr(e);
    }
  };
}
function R1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && jo(l)
  );
  return {
    c() {
      e = sn("div"), t = sn("span"), n = An("Uploading "), s = An(i), o = vs(), a = An(r), f = An("..."), c = vs(), u && u.c(), ln(t, "class", "uploading svelte-cr2edf"), ln(e, "class", "wrap svelte-cr2edf"), Fo(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Sr(_, e, d), Le(e, t), Le(t, n), Le(t, s), Le(t, o), Le(t, a), Le(t, f), Le(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && $l(s, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && $l(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = jo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Fo(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Yo,
    o: Yo,
    d(_) {
      _ && Cr(e), u && u.d();
    }
  };
}
function al(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function A1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += al(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function W1(l, e, t) {
  var n = this && this.__awaiter || function(m, b, p, w) {
    function h(v) {
      return v instanceof p ? v : new p(function(y) {
        y(v);
      });
    }
    return new (p || (p = Promise))(function(v, y) {
      function k(E) {
        try {
          C(w.next(E));
        } catch (q) {
          y(q);
        }
      }
      function S(E) {
        try {
          C(w.throw(E));
        } catch (q) {
          y(q);
        }
      }
      function C(E) {
        E.done ? v(E.value) : h(E.value).then(k, S);
      }
      C((w = w.apply(m, b || [])).next());
    });
  };
  let { upload_id: i } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = E1();
  function g(m, b) {
    t(0, _ = _.map((p) => (p.orig_name === m && (p.progress += b), p)));
  }
  return L1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const b = JSON.parse(m.data);
        f || t(1, f = !0), b.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = b), g(b.orig_name, b.chunk_size));
      });
    };
  })), M1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, s = m.root), "files" in m && t(5, o = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && A1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
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
class I1 extends q1 {
  constructor(e) {
    super(), B1(this, e, W1, R1, D1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: T1,
  append: Uo,
  attr: pe,
  binding_callbacks: H1,
  bubble: Kt,
  check_outros: zr,
  create_component: X1,
  create_slot: qr,
  destroy_component: Y1,
  detach: hi,
  element: ks,
  empty: Br,
  get_all_dirty_from_scope: Dr,
  get_slot_changes: Lr,
  group_outros: Er,
  init: F1,
  insert: mi,
  listen: Te,
  mount_component: j1,
  prevent_default: Jt,
  run_all: U1,
  safe_not_equal: V1,
  set_style: Mr,
  space: O1,
  stop_propagation: Qt,
  toggle_class: me,
  transition_in: Pt,
  transition_out: mn,
  update_slot_base: Rr
} = window.__gradio__svelte__internal, { createEventDispatcher: N1, tick: P1 } = window.__gradio__svelte__internal;
function Z1(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = qr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ks("button"), d && d.c(), t = O1(), n = ks("input"), pe(n, "aria-label", "file upload"), pe(n, "data-testid", "file-upload"), pe(n, "type", "file"), pe(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = s = /*file_count*/
      l[6] === "multiple" || void 0, pe(n, "webkitdirectory", o = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), pe(n, "class", "svelte-1s26xmt"), pe(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), me(
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
      ), Mr(e, "height", "100%");
    },
    m(g, m) {
      mi(g, e, m), d && d.m(e, null), Uo(e, t), Uo(e, n), l[34](n), f = !0, c || (u = [
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
      33554432) && Rr(
        d,
        _,
        g,
        /*$$scope*/
        g[25],
        f ? Lr(
          _,
          /*$$scope*/
          g[25],
          m,
          null
        ) : Dr(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!f || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      g[16] || void 0)) && pe(n, "accept", i), (!f || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = s), (!f || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "directory" || void 0)) && pe(n, "webkitdirectory", o), (!f || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && pe(n, "mozdirectory", r), (!f || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && pe(e, "tabindex", a), (!f || m[0] & /*hidden*/
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
      g && hi(e), d && d.d(g), l[34](null), c = !1, U1(u);
    }
  };
}
function G1(l) {
  let e, t, n = !/*hidden*/
  l[9] && Vo(l);
  return {
    c() {
      n && n.c(), e = Br();
    },
    m(i, s) {
      n && n.m(i, s), mi(i, e, s), t = !0;
    },
    p(i, s) {
      /*hidden*/
      i[9] ? n && (Er(), mn(n, 1, 1, () => {
        n = null;
      }), zr()) : n ? (n.p(i, s), s[0] & /*hidden*/
      512 && Pt(n, 1)) : (n = Vo(i), n.c(), Pt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Pt(n), t = !0);
    },
    o(i) {
      mn(n), t = !1;
    },
    d(i) {
      i && hi(e), n && n.d(i);
    }
  };
}
function K1(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[26].default
  ), r = qr(
    o,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ks("button"), r && r.c(), pe(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), pe(e, "class", "svelte-1s26xmt"), me(
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
      ), Mr(e, "height", "100%");
    },
    m(a, f) {
      mi(a, e, f), r && r.m(e, null), n = !0, i || (s = Te(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Rr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Lr(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Dr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && pe(e, "tabindex", t), (!n || f[0] & /*hidden*/
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
      a && hi(e), r && r.d(a), i = !1, s();
    }
  };
}
function Vo(l) {
  let e, t;
  return e = new I1({
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
      X1(e.$$.fragment);
    },
    m(n, i) {
      j1(e, n, i), t = !0;
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
      Y1(e, n);
    }
  };
}
function J1(l) {
  let e, t, n, i;
  const s = [K1, G1, Z1], o = [];
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
      t.c(), n = Br();
    },
    m(a, f) {
      o[e].m(a, f), mi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Er(), mn(o[c], 1, 1, () => {
        o[c] = null;
      }), zr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Pt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Pt(t), i = !0);
    },
    o(a) {
      mn(t), i = !1;
    },
    d(a) {
      a && hi(n), o[e].d(a);
    }
  };
}
function Q1(l, e, t) {
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
function x1(l, e, t) {
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
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: g = !1 } = e, { format: m = "file" } = e, { uploading: b = !1 } = e, { hidden_upload: p = null } = e, { show_progress: w = !0 } = e, { max_file_size: h = null } = e, { upload: v } = e, { stream_handler: y } = e, k, S, C;
  const E = N1(), q = ["image", "video", "audio", "text", "file"], W = (L) => L.startsWith(".") || L.endsWith("/*") ? L : q.includes(L) ? L + "/*" : "." + L;
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
      yield P1(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, b = !0);
      try {
        const X = yield v(L, d, k, h ?? 1 / 0);
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
      return t(15, S = yield yr(X)), yield G(S);
    });
  }
  function ae(L) {
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
        return D && Q1(C, D, te.type) || (D && Array.isArray(o) ? o.includes(D) : D === o) ? !0 : (E("error", `Invalid file type only ${o} allowed.`), !1);
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
  function ie(L) {
    Kt.call(this, l, L);
  }
  function be(L) {
    Kt.call(this, l, L);
  }
  function I(L) {
    Kt.call(this, l, L);
  }
  function Ge(L) {
    H1[L ? "unshift" : "push"](() => {
      p = L, t(2, p);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, o = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, g = L.hidden), "format" in L && t(21, m = L.format), "uploading" in L && t(1, b = L.uploading), "hidden_upload" in L && t(2, p = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, h = L.max_file_size), "upload" in L && t(23, v = L.upload), "stream_handler" in L && t(11, y = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, C = null) : typeof o == "string" ? t(16, C = W(o)) : (t(0, o = o.map(W)), t(16, C = o.join(", "))));
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
    y,
    U,
    V,
    k,
    S,
    C,
    A,
    ae,
    R,
    r,
    m,
    h,
    v,
    J,
    i,
    n,
    P,
    M,
    j,
    O,
    ie,
    be,
    I,
    Ge
  ];
}
class $1 extends T1 {
  constructor(e) {
    super(), F1(
      this,
      e,
      x1,
      J1,
      V1,
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
  SvelteComponent: eh,
  append: Ll,
  attr: Gi,
  create_component: th,
  destroy_component: nh,
  detach: lh,
  element: Ki,
  init: ih,
  insert: sh,
  listen: oh,
  mount_component: ah,
  noop: rh,
  safe_not_equal: fh,
  set_style: ch,
  space: uh,
  text: _h,
  transition_in: dh,
  transition_out: hh
} = window.__gradio__svelte__internal, { createEventDispatcher: mh } = window.__gradio__svelte__internal;
function gh(l) {
  let e, t, n, i, s, o = "Click to Access Webcam", r, a, f, c;
  return i = new Ja({}), {
    c() {
      e = Ki("button"), t = Ki("div"), n = Ki("span"), th(i.$$.fragment), s = uh(), r = _h(o), Gi(n, "class", "icon-wrap svelte-fjcd9c"), Gi(t, "class", "wrap svelte-fjcd9c"), Gi(e, "class", "svelte-fjcd9c"), ch(e, "height", "100%");
    },
    m(u, _) {
      sh(u, e, _), Ll(e, t), Ll(t, n), ah(i, n, null), Ll(t, s), Ll(t, r), a = !0, f || (c = oh(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: rh,
    i(u) {
      a || (dh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      hh(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && lh(e), nh(i), f = !1, c();
    }
  };
}
function bh(l) {
  const e = mh();
  return [e, () => e("click")];
}
class wh extends eh {
  constructor(e) {
    super(), ih(this, e, bh, gh, fh, {});
  }
}
function ph() {
  return navigator.mediaDevices.enumerateDevices();
}
function vh(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Oo(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((s) => (vh(s, e), s));
}
function kh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: yh,
  action_destroyer: Ch,
  add_render_callback: Sh,
  append: Dt,
  attr: _e,
  binding_callbacks: zh,
  check_outros: cl,
  create_component: Vn,
  create_in_transition: qh,
  destroy_component: On,
  destroy_each: Bh,
  detach: Ee,
  element: je,
  empty: Ts,
  ensure_array_like: No,
  group_outros: ul,
  init: Dh,
  insert: Me,
  listen: ei,
  mount_component: Nn,
  noop: Hs,
  run_all: Lh,
  safe_not_equal: Eh,
  set_data: Ar,
  set_input_value: ys,
  space: ml,
  stop_propagation: Mh,
  text: Wr,
  toggle_class: El,
  transition_in: ge,
  transition_out: ke
} = window.__gradio__svelte__internal, { createEventDispatcher: Rh, onMount: Ah } = window.__gradio__svelte__internal;
function Po(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function Wh(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = [Hh, Th], d = [];
  function g(p, w) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(l), i = d[n] = _[n](l);
  let m = !/*recording*/
  l[8] && Zo(l), b = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && Go(l)
  );
  return {
    c() {
      e = je("div"), t = je("button"), i.c(), o = ml(), m && m.c(), r = ml(), b && b.c(), a = Ts(), _e(t, "aria-label", s = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), _e(t, "class", "svelte-8hqvb6"), _e(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, w) {
      Me(p, e, w), Dt(e, t), d[n].m(t, null), Dt(e, o), m && m.m(e, null), Me(p, r, w), b && b.m(p, w), Me(p, a, w), f = !0, c || (u = ei(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(p, w) {
      let h = n;
      n = g(p), n === h ? d[n].p(p, w) : (ul(), ke(d[h], 1, 1, () => {
        d[h] = null;
      }), cl(), i = d[n], i ? i.p(p, w) : (i = d[n] = _[n](p), i.c()), ge(i, 1), i.m(t, null)), (!f || w[0] & /*mode*/
      2 && s !== (s = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && _e(t, "aria-label", s), /*recording*/
      p[8] ? m && (ul(), ke(m, 1, 1, () => {
        m = null;
      }), cl()) : m ? (m.p(p, w), w[0] & /*recording*/
      256 && ge(m, 1)) : (m = Zo(p), m.c(), ge(m, 1), m.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? b ? (b.p(p, w), w[0] & /*options_open, selected_device*/
      1152 && ge(b, 1)) : (b = Go(p), b.c(), ge(b, 1), b.m(a.parentNode, a)) : b && (ul(), ke(b, 1, 1, () => {
        b = null;
      }), cl());
    },
    i(p) {
      f || (ge(i), ge(m), ge(b), f = !0);
    },
    o(p) {
      ke(i), ke(m), ke(b), f = !1;
    },
    d(p) {
      p && (Ee(e), Ee(r), Ee(a)), d[n].d(), m && m.d(), b && b.d(p), c = !1, u();
    }
  };
}
function Ih(l) {
  let e, t, n, i;
  return t = new wh({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = je("div"), Vn(t.$$.fragment), _e(e, "title", "grant webcam access");
    },
    m(s, o) {
      Me(s, e, o), Nn(t, e, null), i = !0;
    },
    p: Hs,
    i(s) {
      i || (ge(t.$$.fragment, s), s && (n || Sh(() => {
        n = qh(e, Cd, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(s) {
      ke(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Ee(e), On(t);
    }
  };
}
function Th(l) {
  let e, t, n;
  return t = new lu({}), {
    c() {
      e = je("div"), Vn(t.$$.fragment), _e(e, "class", "icon svelte-8hqvb6"), _e(e, "title", "capture photo");
    },
    m(i, s) {
      Me(i, e, s), Nn(t, e, null), n = !0;
    },
    p: Hs,
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ke(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), On(t);
    }
  };
}
function Hh(l) {
  let e, t, n, i;
  const s = [Yh, Xh], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = Ts();
    },
    m(a, f) {
      o[e].m(a, f), Me(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (ul(), ke(o[c], 1, 1, () => {
        o[c] = null;
      }), cl(), t = o[e], t || (t = o[e] = s[e](a), t.c()), ge(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ge(t), i = !0);
    },
    o(a) {
      ke(t), i = !1;
    },
    d(a) {
      a && Ee(n), o[e].d(a);
    }
  };
}
function Xh(l) {
  let e, t, n;
  return t = new uu({}), {
    c() {
      e = je("div"), Vn(t.$$.fragment), _e(e, "class", "icon red svelte-8hqvb6"), _e(e, "title", "start recording");
    },
    m(i, s) {
      Me(i, e, s), Nn(t, e, null), n = !0;
    },
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ke(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), On(t);
    }
  };
}
function Yh(l) {
  let e, t, n;
  return t = new y_({}), {
    c() {
      e = je("div"), Vn(t.$$.fragment), _e(e, "class", "icon red svelte-8hqvb6"), _e(e, "title", "stop recording");
    },
    m(i, s) {
      Me(i, e, s), Nn(t, e, null), n = !0;
    },
    i(i) {
      n || (ge(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ke(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ee(e), On(t);
    }
  };
}
function Zo(l) {
  let e, t, n, i, s;
  return t = new Ms({}), {
    c() {
      e = je("button"), Vn(t.$$.fragment), _e(e, "class", "icon svelte-8hqvb6"), _e(e, "aria-label", "select input source");
    },
    m(o, r) {
      Me(o, e, r), Nn(t, e, null), n = !0, i || (s = ei(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: Hs,
    i(o) {
      n || (ge(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ke(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ee(e), On(t), i = !1, s();
    }
  };
}
function Go(l) {
  let e, t, n, i, s, o, r;
  n = new Ms({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? jh : Fh
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = je("select"), t = je("button"), Vn(n.$$.fragment), i = ml(), c.c(), _e(t, "class", "inset-icon svelte-8hqvb6"), _e(e, "class", "select-wrap svelte-8hqvb6"), _e(e, "aria-label", "select source");
    },
    m(u, _) {
      Me(u, e, _), Dt(e, t), Nn(n, t, null), Dt(t, i), c.m(e, null), s = !0, o || (r = [
        ei(t, "click", Mh(
          /*click_handler_2*/
          l[22]
        )),
        Ch(Xs.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        ei(
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
      ke(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Ee(e), On(n), c.d(), o = !1, Lh(r);
    }
  };
}
function Fh(l) {
  let e, t = No(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Ko(Po(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Ts();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      Me(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = No(
          /*available_video_devices*/
          i[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Po(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Ko(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Ee(e), Bh(n, i);
    }
  };
}
function jh(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = je("option"), n = Wr(t), e.__value = "", ys(e, e.__value), _e(e, "class", "svelte-8hqvb6");
    },
    m(i, s) {
      Me(i, e, s), Dt(e, n);
    },
    p(i, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Ar(n, t);
    },
    d(i) {
      i && Ee(e);
    }
  };
}
function Ko(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, s, o;
  return {
    c() {
      e = je("option"), n = Wr(t), i = ml(), e.__value = s = /*device*/
      l[32].deviceId, ys(e, e.__value), e.selected = o = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, _e(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Me(r, e, a), Dt(e, n), Dt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Ar(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, ys(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Ee(e);
    }
  };
}
function Uh(l) {
  let e, t, n, i, s, o;
  const r = [Ih, Wh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), s = a[i] = r[i](l), {
    c() {
      e = je("div"), t = je("video"), n = ml(), s.c(), _e(t, "class", "svelte-8hqvb6"), El(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), El(t, "hide", !/*webcam_accessed*/
      l[9]), _e(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Me(c, e, u), Dt(e, t), l[19](t), Dt(e, n), a[i].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && El(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && El(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (ul(), ke(a[_], 1, 1, () => {
        a[_] = null;
      }), cl(), s = a[i], s ? s.p(c, u) : (s = a[i] = r[i](c), s.c()), ge(s, 1), s.m(e, null));
    },
    i(c) {
      o || (ge(s), o = !0);
    },
    o(c) {
      ke(s), o = !1;
    },
    d(c) {
      c && Ee(e), l[19](null), a[i].d();
    }
  };
}
function Xs(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Vh(l, e, t) {
  var n = this && this.__awaiter || function(R, P, M, j) {
    function O(ie) {
      return ie instanceof M ? ie : new M(function(be) {
        be(ie);
      });
    }
    return new (M || (M = Promise))(function(ie, be) {
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
        X.done ? ie(X.value) : O(X.value).then(I, Ge);
      }
      L((j = j.apply(R, P || [])).next());
    });
  };
  let i, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: g } = e, { upload: m } = e;
  const b = Rh();
  Ah(() => r = document.createElement("canvas"));
  const p = (R) => n(void 0, void 0, void 0, function* () {
    const M = R.target.value;
    yield Oo(d, i, M).then((j) => n(void 0, void 0, void 0, function* () {
      k = j, t(7, o = s.find((O) => O.deviceId === M) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Oo(d, i).then((R) => n(this, void 0, void 0, function* () {
          t(9, q = !0), t(6, s = yield ph()), k = R;
        })).then(() => kh(s)).then((R) => {
          t(6, s = R);
          const P = k.getTracks().map((M) => {
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
    (!a || a && v) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, R.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (R.scale(-1, 1), R.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (P) => {
        b(a ? "stream" : "capture", P);
      },
      "image/png",
      0.8
    ));
  }
  let v = !1, y = [], k, S, C;
  function E() {
    if (v) {
      C.stop();
      let R = new Blob(y, { type: S }), P = new FileReader();
      P.onload = function(M) {
        return n(this, void 0, void 0, function* () {
          var j;
          if (M.target) {
            let O = new File([R], "sample." + S.substring(6));
            const ie = yield yr([O]);
            let be = ((j = yield m(ie, c)) === null || j === void 0 ? void 0 : j.filter(Boolean))[0];
            b("capture", be), b("stop_recording");
          }
        });
      }, P.readAsDataURL(R);
    } else {
      b("start_recording"), y = [];
      let R = ["video/webm", "video/mp4"];
      for (let P of R)
        if (MediaRecorder.isTypeSupported(P)) {
          S = P;
          break;
        }
      if (S === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      C = new MediaRecorder(k, { mimeType: S }), C.addEventListener("dataavailable", function(P) {
        y.push(P.data);
      }), C.start(200);
    }
    t(8, v = !v);
  }
  let q = !1;
  function W() {
    u === "image" && a && t(8, v = !v), u === "image" ? h() : E(), !v && k && (k.getTracks().forEach((R) => R.stop()), t(5, i.srcObject = null, i), t(9, q = !1));
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
    zh[R ? "unshift" : "push"](() => {
      i = R, t(5, i);
    });
  }
  const G = async () => w(), J = () => t(10, A = !0), ae = () => t(10, A = !1);
  return l.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, g = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    u,
    _,
    g,
    Xs,
    i,
    s,
    o,
    v,
    q,
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
    ae
  ];
}
class Oh extends yh {
  constructor(e) {
    super(), Dh(
      this,
      e,
      Vh,
      Uh,
      Eh,
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
    return Xs;
  }
}
const {
  SvelteComponent: Nh,
  append: Xt,
  attr: T,
  detach: Ph,
  init: Zh,
  insert: Gh,
  noop: Ji,
  safe_not_equal: Kh,
  set_style: Yt,
  svg_element: wt
} = window.__gradio__svelte__internal;
function Jh(l) {
  let e, t, n, i, s, o, r, a, f;
  return {
    c() {
      e = wt("svg"), t = wt("rect"), n = wt("rect"), i = wt("rect"), s = wt("rect"), o = wt("line"), r = wt("line"), a = wt("line"), f = wt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(i, "x", "2"), T(i, "y", "17"), T(i, "width", "5"), T(i, "height", "5"), T(i, "rx", "1"), T(i, "ry", "1"), T(i, "stroke-width", "2"), T(i, "fill", "none"), T(s, "x", "17"), T(s, "y", "17"), T(s, "width", "5"), T(s, "height", "5"), T(s, "rx", "1"), T(s, "ry", "1"), T(s, "stroke-width", "2"), T(s, "fill", "none"), T(o, "x1", "7.5"), T(o, "y1", "4.5"), T(o, "x2", "16"), T(o, "y2", "4.5"), Yt(o, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Yt(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Yt(a, "stroke-width", "2px"), T(f, "x1", "19.5"), T(f, "y1", "8"), T(f, "x2", "19.5"), T(f, "y2", "16"), Yt(f, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Yt(e, "fill-rule", "evenodd"), Yt(e, "clip-rule", "evenodd"), Yt(e, "stroke-linecap", "round"), Yt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Gh(c, e, u), Xt(e, t), Xt(e, n), Xt(e, i), Xt(e, s), Xt(e, o), Xt(e, r), Xt(e, a), Xt(e, f);
    },
    p: Ji,
    i: Ji,
    o: Ji,
    d(c) {
      c && Ph(e);
    }
  };
}
class Qh extends Nh {
  constructor(e) {
    super(), Zh(this, e, null, Jh, Kh, {});
  }
}
const {
  SvelteComponent: xh,
  append: $h,
  attr: nt,
  detach: e0,
  init: t0,
  insert: n0,
  noop: Qi,
  safe_not_equal: l0,
  set_style: Ml,
  svg_element: Jo
} = window.__gradio__svelte__internal;
function i0(l) {
  let e, t;
  return {
    c() {
      e = Jo("svg"), t = Jo("path"), nt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Ml(e, "fill-rule", "evenodd"), Ml(e, "clip-rule", "evenodd"), Ml(e, "stroke-linecap", "round"), Ml(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      n0(n, e, i), $h(e, t);
    },
    p: Qi,
    i: Qi,
    o: Qi,
    d(n) {
      n && e0(e);
    }
  };
}
class s0 extends xh {
  constructor(e) {
    super(), t0(this, e, null, i0, l0, {});
  }
}
const {
  SvelteComponent: o0,
  append: a0,
  attr: lt,
  detach: r0,
  init: f0,
  insert: c0,
  noop: xi,
  safe_not_equal: u0,
  set_style: Rl,
  svg_element: Qo
} = window.__gradio__svelte__internal;
function _0(l) {
  let e, t;
  return {
    c() {
      e = Qo("svg"), t = Qo("path"), lt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), lt(t, "fill", "none"), lt(t, "stroke-width", "2"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "version", "1.1"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), lt(e, "xml:space", "preserve"), lt(e, "stroke", "currentColor"), Rl(e, "fill-rule", "evenodd"), Rl(e, "clip-rule", "evenodd"), Rl(e, "stroke-linecap", "round"), Rl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      c0(n, e, i), a0(e, t);
    },
    p: xi,
    i: xi,
    o: xi,
    d(n) {
      n && r0(e);
    }
  };
}
class d0 extends o0 {
  constructor(e) {
    super(), f0(this, e, null, _0, u0, {});
  }
}
const {
  SvelteComponent: h0,
  append: xo,
  attr: pt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: $i,
  safe_not_equal: w0,
  set_style: Al,
  svg_element: es
} = window.__gradio__svelte__internal;
function p0(l) {
  let e, t, n;
  return {
    c() {
      e = es("svg"), t = es("path"), n = es("path"), pt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), pt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "fill", "none"), pt(e, "stroke", "currentColor"), pt(e, "stroke-width", "2"), Al(e, "fill-rule", "evenodd"), Al(e, "clip-rule", "evenodd"), Al(e, "stroke-linecap", "round"), Al(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      b0(i, e, s), xo(e, t), xo(e, n);
    },
    p: $i,
    i: $i,
    o: $i,
    d(i) {
      i && m0(e);
    }
  };
}
class v0 extends h0 {
  constructor(e) {
    super(), g0(this, e, null, p0, w0, {});
  }
}
const {
  SvelteComponent: k0,
  append: y0,
  attr: Ft,
  detach: C0,
  init: S0,
  insert: z0,
  noop: ts,
  safe_not_equal: q0,
  set_style: Wl,
  svg_element: $o
} = window.__gradio__svelte__internal;
function B0(l) {
  let e, t;
  return {
    c() {
      e = $o("svg"), t = $o("path"), Ft(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Wl(e, "fill-rule", "evenodd"), Wl(e, "clip-rule", "evenodd"), Wl(e, "stroke-linecap", "round"), Wl(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      z0(n, e, i), y0(e, t);
    },
    p: ts,
    i: ts,
    o: ts,
    d(n) {
      n && C0(e);
    }
  };
}
class D0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, B0, q0, {});
  }
}
const {
  SvelteComponent: L0,
  append: E0,
  attr: jt,
  detach: M0,
  init: R0,
  insert: A0,
  noop: ns,
  safe_not_equal: W0,
  set_style: Il,
  svg_element: ea
} = window.__gradio__svelte__internal;
function I0(l) {
  let e, t;
  return {
    c() {
      e = ea("svg"), t = ea("path"), jt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), jt(e, "width", "100%"), jt(e, "height", "100%"), jt(e, "viewBox", "0 0 24 24"), jt(e, "fill", "none"), jt(e, "stroke", "currentColor"), jt(e, "stroke-width", "2"), Il(e, "fill-rule", "evenodd"), Il(e, "clip-rule", "evenodd"), Il(e, "stroke-linecap", "round"), Il(e, "stroke-linejoin", "round"), jt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      A0(n, e, i), E0(e, t);
    },
    p: ns,
    i: ns,
    o: ns,
    d(n) {
      n && M0(e);
    }
  };
}
class T0 extends L0 {
  constructor(e) {
    super(), R0(this, e, null, I0, W0, {});
  }
}
const {
  SvelteComponent: H0,
  append: ta,
  attr: ls,
  bubble: na,
  create_component: X0,
  destroy_component: Y0,
  detach: Ir,
  element: la,
  init: F0,
  insert: Tr,
  listen: is,
  mount_component: j0,
  run_all: U0,
  safe_not_equal: V0,
  set_data: O0,
  set_input_value: ia,
  space: N0,
  text: P0,
  transition_in: Z0,
  transition_out: G0
} = window.__gradio__svelte__internal, { createEventDispatcher: K0, afterUpdate: J0 } = window.__gradio__svelte__internal;
function Q0(l) {
  let e;
  return {
    c() {
      e = P0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Tr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && O0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Ir(e);
    }
  };
}
function x0(l) {
  let e, t, n, i, s, o, r;
  return t = new Va({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [Q0] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = la("label"), X0(t.$$.fragment), n = N0(), i = la("input"), ls(i, "type", "color"), i.disabled = /*disabled*/
      l[3], ls(i, "class", "svelte-16l8u73"), ls(e, "class", "block");
    },
    m(a, f) {
      Tr(a, e, f), j0(t, e, null), ta(e, n), ta(e, i), ia(
        i,
        /*value*/
        l[0]
      ), s = !0, o || (r = [
        is(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        is(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        is(
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
      1 && ia(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (Z0(t.$$.fragment, a), s = !0);
    },
    o(a) {
      G0(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Ir(e), Y0(t), o = !1, U0(r);
    }
  };
}
function $0(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = K0();
  function c() {
    f("change", n), i || f("input");
  }
  J0(() => {
    t(5, i = !1);
  });
  function u(g) {
    na.call(this, l, g);
  }
  function _(g) {
    na.call(this, l, g);
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
class em extends H0 {
  constructor(e) {
    super(), F0(this, e, $0, x0, V0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var Hr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, $n = (l, e, t) => (Hr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), tm = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, nm = (l, e, t, n) => (Hr(l, e, "write to private field"), e.set(l, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class D2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = $n(this, Ot) + t; ; ) {
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
        nm(this, Ot, t);
      },
      flush: (t) => {
        if ($n(this, Ot) === "")
          return;
        const n = e.allowCR && $n(this, Ot).endsWith("\r") ? $n(this, Ot).slice(0, -1) : $n(this, Ot);
        t.enqueue(n);
      }
    }), tm(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: lm,
  append: Xr,
  attr: ne,
  bubble: im,
  check_outros: sm,
  create_slot: Yr,
  detach: wl,
  element: gi,
  empty: om,
  get_all_dirty_from_scope: Fr,
  get_slot_changes: jr,
  group_outros: am,
  init: rm,
  insert: pl,
  listen: fm,
  safe_not_equal: cm,
  set_style: De,
  space: Ur,
  src_url_equal: ti,
  toggle_class: Wn,
  transition_in: ni,
  transition_out: li,
  update_slot_base: Vr
} = window.__gradio__svelte__internal;
function um(l) {
  let e, t, n, i, s, o, r = (
    /*icon*/
    l[7] && sa(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = Yr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = gi("button"), r && r.c(), t = Ur(), f && f.c(), ne(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ne(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Wn(e, "hidden", !/*visible*/
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
      pl(c, e, u), r && r.m(e, null), Xr(e, t), f && f.m(e, null), i = !0, s || (o = fm(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = sa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && Vr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? jr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Fr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ne(e, "class", n), (!i || u & /*elem_id*/
      1) && ne(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && Wn(e, "hidden", !/*visible*/
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
      i || (ni(f, c), i = !0);
    },
    o(c) {
      li(f, c), i = !1;
    },
    d(c) {
      c && wl(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function _m(l) {
  let e, t, n, i, s = (
    /*icon*/
    l[7] && oa(l)
  );
  const o = (
    /*#slots*/
    l[12].default
  ), r = Yr(
    o,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = gi("a"), s && s.c(), t = Ur(), r && r.c(), ne(
        e,
        "href",
        /*link*/
        l[6]
      ), ne(e, "rel", "noopener noreferrer"), ne(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), ne(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), ne(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Wn(e, "hidden", !/*visible*/
      l[2]), Wn(
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
      pl(a, e, f), s && s.m(e, null), Xr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = oa(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Vr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        i ? jr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Fr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && ne(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && ne(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ne(e, "class", n), (!i || f & /*elem_id*/
      1) && ne(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Wn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Wn(
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
      i || (ni(r, a), i = !0);
    },
    o(a) {
      li(r, a), i = !1;
    },
    d(a) {
      a && wl(e), s && s.d(), r && r.d(a);
    }
  };
}
function sa(l) {
  let e, t, n;
  return {
    c() {
      e = gi("img"), ne(e, "class", "button-icon svelte-8huxfn"), ti(e.src, t = /*icon*/
      l[7].url) || ne(e, "src", t), ne(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      pl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !ti(e.src, t = /*icon*/
      i[7].url) && ne(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ne(e, "alt", n);
    },
    d(i) {
      i && wl(e);
    }
  };
}
function oa(l) {
  let e, t, n;
  return {
    c() {
      e = gi("img"), ne(e, "class", "button-icon svelte-8huxfn"), ti(e.src, t = /*icon*/
      l[7].url) || ne(e, "src", t), ne(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      pl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !ti(e.src, t = /*icon*/
      i[7].url) && ne(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && ne(e, "alt", n);
    },
    d(i) {
      i && wl(e);
    }
  };
}
function dm(l) {
  let e, t, n, i;
  const s = [_m, um], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = om();
    },
    m(a, f) {
      o[e].m(a, f), pl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (am(), li(o[c], 1, 1, () => {
        o[c] = null;
      }), sm(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), ni(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ni(t), i = !0);
    },
    o(a) {
      li(t), i = !1;
    },
    d(a) {
      a && wl(n), o[e].d(a);
    }
  };
}
function hm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e;
  function b(p) {
    im.call(this, l, p);
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
class Cs extends lm {
  constructor(e) {
    super(), rm(this, e, hm, dm, cm, {
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
  SvelteComponent: mm,
  add_render_callback: Or,
  append: Tl,
  attr: Xe,
  binding_callbacks: aa,
  check_outros: gm,
  create_bidirectional_transition: ra,
  destroy_each: bm,
  detach: _l,
  element: ii,
  empty: wm,
  ensure_array_like: fa,
  group_outros: pm,
  init: vm,
  insert: dl,
  listen: Ss,
  prevent_default: km,
  run_all: ym,
  safe_not_equal: Cm,
  set_data: Sm,
  set_style: Bn,
  space: zs,
  text: zm,
  toggle_class: ft,
  transition_in: ss,
  transition_out: ca
} = window.__gradio__svelte__internal, { createEventDispatcher: qm } = window.__gradio__svelte__internal;
function ua(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function _a(l) {
  let e, t, n, i, s, o = fa(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = da(ua(l, o, a));
  return {
    c() {
      e = ii("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Xe(e, "class", "options svelte-yuohum"), Xe(e, "role", "listbox"), Bn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Bn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Bn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      dl(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (s = Ss(e, "mousedown", km(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = fa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = ua(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = da(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Bn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Bn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Bn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Or(() => {
        n && (t || (t = ra(e, go, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ra(e, go, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && _l(e), bm(r, a), l[22](null), a && t && t.end(), i = !1, s();
    }
  };
}
function da(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = ii("li"), t = ii("span"), t.textContent = "✓", n = zs(), s = zm(i), o = zs(), Xe(t, "class", "inner-item svelte-yuohum"), ft(t, "hide", !/*selected_indices*/
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
      dl(c, e, u), Tl(e, t), Tl(e, n), Tl(e, s), Tl(e, o);
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
      ][0] + "") && Sm(s, i), u & /*filtered_indices*/
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
      c && _l(e);
    }
  };
}
function Bm(l) {
  let e, t, n, i, s;
  Or(
    /*onwindowresize*/
    l[19]
  );
  let o = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && _a(l)
  );
  return {
    c() {
      e = ii("div"), t = zs(), o && o.c(), n = wm(), Xe(e, "class", "reference");
    },
    m(r, a) {
      dl(r, e, a), l[20](e), dl(r, t, a), o && o.m(r, a), dl(r, n, a), i || (s = [
        Ss(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        Ss(
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
      12 && ss(o, 1)) : (o = _a(r), o.c(), ss(o, 1), o.m(n.parentNode, n)) : o && (pm(), ca(o, 1, 1, () => {
        o = null;
      }), gm());
    },
    i(r) {
      ss(o);
    },
    o(r) {
      ca(o);
    },
    d(r) {
      r && (_l(e), _l(t), _l(n)), l[20](null), o && o.d(r), i = !1, ym(s);
    }
  };
}
function Dm(l, e, t) {
  var n, i;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, g, m, b, p, w, h;
  function v() {
    const { top: A, bottom: U } = m.getBoundingClientRect();
    t(16, u = A), t(17, _ = h - U);
  }
  let y = null;
  function k() {
    r && (y !== null && clearTimeout(y), y = setTimeout(
      () => {
        v(), y = null;
      },
      10
    ));
  }
  const S = qm();
  function C() {
    t(11, h = window.innerHeight);
  }
  function E(A) {
    aa[A ? "unshift" : "push"](() => {
      m = A, t(6, m);
    });
  }
  const q = (A) => S("change", A);
  function W(A) {
    aa[A ? "unshift" : "push"](() => {
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
        v();
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
    k,
    S,
    n,
    i,
    u,
    _,
    d,
    C,
    E,
    q,
    W
  ];
}
class Lm extends mm {
  constructor(e) {
    super(), vm(this, e, Dm, Bm, Cm, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Em(l, e) {
  return (l % e + e) % e;
}
function ha(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Mm(l, e, t) {
  l("change", e), t || l("input");
}
function Rm(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Em(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Am,
  append: xt,
  attr: He,
  binding_callbacks: Wm,
  check_outros: Im,
  create_component: qs,
  destroy_component: Bs,
  detach: Ys,
  element: En,
  group_outros: Tm,
  init: Hm,
  insert: Fs,
  listen: el,
  mount_component: Ds,
  run_all: Xm,
  safe_not_equal: Ym,
  set_data: Fm,
  set_input_value: ma,
  space: os,
  text: jm,
  toggle_class: Dn,
  transition_in: Mn,
  transition_out: rl
} = window.__gradio__svelte__internal, { onMount: Um } = window.__gradio__svelte__internal, { createEventDispatcher: Vm, afterUpdate: Om } = window.__gradio__svelte__internal;
function Nm(l) {
  let e;
  return {
    c() {
      e = jm(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Fs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Fm(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ys(e);
    }
  };
}
function ga(l) {
  let e, t, n;
  return t = new Ms({}), {
    c() {
      e = En("div"), qs(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, s) {
      Fs(i, e, s), Ds(t, e, null), n = !0;
    },
    i(i) {
      n || (Mn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      rl(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ys(e), Bs(t);
    }
  };
}
function Pm(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g;
  t = new Va({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [Nm] },
      $$scope: { ctx: l }
    }
  });
  let m = !/*disabled*/
  l[3] && ga();
  return u = new Lm({
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
      e = En("div"), qs(t.$$.fragment), n = os(), i = En("div"), s = En("div"), o = En("div"), r = En("input"), f = os(), m && m.c(), c = os(), qs(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
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
      l[7], Dn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), He(o, "class", "secondary-wrap svelte-1m1zvyj"), He(s, "class", "wrap-inner svelte-1m1zvyj"), Dn(
        s,
        "show_options",
        /*show_options*/
        l[12]
      ), He(i, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), Dn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(b, p) {
      Fs(b, e, p), Ds(t, e, null), xt(e, n), xt(e, i), xt(i, s), xt(s, o), xt(o, r), ma(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), xt(o, f), m && m.m(o, null), xt(i, c), Ds(u, i, null), _ = !0, d || (g = [
        el(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        el(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        el(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        el(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        el(
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
      b[9] && ma(
        r,
        /*input_text*/
        b[9]
      ), (!_ || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Dn(r, "subdued", !/*choices_names*/
      b[13].includes(
        /*input_text*/
        b[9]
      ) && !/*allow_custom_value*/
      b[6]), /*disabled*/
      b[3] ? m && (Tm(), rl(m, 1, 1, () => {
        m = null;
      }), Im()) : m ? p[0] & /*disabled*/
      8 && Mn(m, 1) : (m = ga(), m.c(), Mn(m, 1), m.m(o, null)), (!_ || p[0] & /*show_options*/
      4096) && Dn(
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
      32) && Dn(
        e,
        "container",
        /*container*/
        b[5]
      );
    },
    i(b) {
      _ || (Mn(t.$$.fragment, b), Mn(m), Mn(u.$$.fragment, b), _ = !0);
    },
    o(b) {
      rl(t.$$.fragment, b), rl(m), rl(u.$$.fragment, b), _ = !1;
    },
    d(b) {
      b && Ys(e), Bs(t), l[29](null), m && m.d(), Bs(u), d = !1, Xm(g);
    }
  };
}
function Zm(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: g = !0 } = e, m, b = !1, p, w, h = "", v = "", y = !1, k = [], S = null, C = null, E;
  const q = Vm();
  s ? (E = a.map((M) => M[1]).indexOf(s), C = E, C === -1 ? (o = s, C = null) : ([h, o] = a[C], v = h), A()) : a.length > 0 && (E = 0, C = 0, [h, s] = a[C], o = s, v = h);
  function W() {
    t(13, p = a.map((M) => M[0])), t(24, w = a.map((M) => M[1]));
  }
  function A() {
    W(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, h = ""), t(11, C = null)) : w.includes(s) ? (t(9, h = p[w.indexOf(s)]), t(11, C = w.indexOf(s))) : d ? (t(9, h = s), t(11, C = null)) : (t(9, h = ""), t(11, C = null)), t(27, E = C);
  }
  function U(M) {
    if (t(11, C = parseInt(M.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, b = !1), t(14, S = null), m.blur();
  }
  function V(M) {
    t(10, k = a.map((j, O) => O)), t(12, b = !0), q("focus");
  }
  function G() {
    d ? t(20, s = h) : t(9, h = p[w.indexOf(s)]), t(12, b = !1), t(14, S = null), q("blur");
  }
  function J(M) {
    t(12, [b, S] = Rm(M, S, k), b, (t(14, S), t(2, a), t(23, f), t(6, d), t(9, h), t(10, k), t(8, m), t(25, v), t(11, C), t(27, E), t(26, y), t(24, w))), M.key === "Enter" && (S !== null ? (t(11, C = S), t(12, b = !1), m.blur(), t(14, S = null)) : p.includes(h) ? (t(11, C = p.indexOf(h)), t(12, b = !1), t(14, S = null), m.blur()) : d && (t(20, s = h), t(11, C = null), t(12, b = !1), t(14, S = null), m.blur()), q("enter", s));
  }
  Om(() => {
    t(21, r = !1), t(26, y = !0);
  }), Um(() => {
    m.focus();
  });
  function ae() {
    h = this.value, t(9, h), t(11, C), t(27, E), t(26, y), t(2, a), t(24, w);
  }
  function R(M) {
    Wm[M ? "unshift" : "push"](() => {
      m = M, t(8, m);
    });
  }
  const P = (M) => q("key_up", { key: M.key, input_value: h });
  return l.$$set = (M) => {
    "label" in M && t(0, n = M.label), "info" in M && t(1, i = M.info), "value" in M && t(20, s = M.value), "value_is_output" in M && t(21, r = M.value_is_output), "choices" in M && t(2, a = M.choices), "disabled" in M && t(3, c = M.disabled), "show_label" in M && t(4, u = M.show_label), "container" in M && t(5, _ = M.container), "allow_custom_value" in M && t(6, d = M.allow_custom_value), "filterable" in M && t(7, g = M.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== E && C !== null && y && (t(9, [h, s] = a[C], h, (t(20, s), t(11, C), t(27, E), t(26, y), t(2, a), t(24, w))), t(27, E = C), q("select", {
      index: C,
      value: w[C],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), Mm(q, s, r), t(22, o = s)), l.$$.dirty[0] & /*choices*/
    4 && W(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, k = ha(a, h)), !d && k.length > 0 && t(14, S = k[0]), m == document.activeElement && t(12, b = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && h !== v && (t(10, k = ha(a, h)), t(25, v = h), !d && k.length > 0 && t(14, S = k[0]));
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
    k,
    C,
    b,
    p,
    S,
    q,
    U,
    V,
    G,
    J,
    s,
    r,
    o,
    f,
    w,
    v,
    y,
    E,
    ae,
    R,
    P
  ];
}
class Gm extends Am {
  constructor(e) {
    super(), Hm(
      this,
      e,
      Zm,
      Pm,
      Ym,
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
  SvelteComponent: Km,
  append: Oe,
  attr: In,
  check_outros: Ls,
  create_component: rn,
  destroy_component: fn,
  detach: Pn,
  element: ut,
  group_outros: Es,
  init: Jm,
  insert: Zn,
  listen: Qm,
  mount_component: cn,
  safe_not_equal: xm,
  set_style: Tn,
  space: tl,
  text: js,
  toggle_class: ba,
  transition_in: ye,
  transition_out: Ye
} = window.__gradio__svelte__internal, { createEventDispatcher: $m } = window.__gradio__svelte__internal, { onMount: eg, onDestroy: tg } = window.__gradio__svelte__internal;
function wa(l) {
  let e, t, n, i, s, o, r;
  const a = [lg, ng], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = ut("div"), t = ut("button"), i.c(), In(t, "class", "icon svelte-d9x7u0"), In(t, "aria-label", "Lock label detail"), ba(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), Tn(e, "margin-right", "8px");
    },
    m(u, _) {
      Zn(u, e, _), Oe(e, t), f[n].m(t, null), s = !0, o || (r = Qm(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Es(), Ye(f[d], 1, 1, () => {
        f[d] = null;
      }), Ls(), i = f[n], i || (i = f[n] = a[n](u), i.c()), ye(i, 1), i.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && ba(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (ye(i), s = !0);
    },
    o(u) {
      Ye(i), s = !1;
    },
    d(u) {
      u && Pn(e), f[n].d(), o = !1, r();
    }
  };
}
function ng(l) {
  let e, t;
  return e = new T0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (ye(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fn(e, n);
    }
  };
}
function lg(l) {
  let e, t;
  return e = new D0({}), {
    c() {
      rn(e.$$.fragment);
    },
    m(n, i) {
      cn(e, n, i), t = !0;
    },
    i(n) {
      t || (ye(e.$$.fragment, n), t = !0);
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
  let e;
  return {
    c() {
      e = js("Cancel");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function pa(l) {
  let e, t, n;
  return t = new Cs({
    props: {
      variant: "stop",
      $$slots: { default: [sg] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = ut("div"), rn(t.$$.fragment), Tn(e, "margin-right", "8px");
    },
    m(i, s) {
      Zn(i, e, s), cn(t, e, null), n = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (ye(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Pn(e), fn(t);
    }
  };
}
function sg(l) {
  let e;
  return {
    c() {
      e = js("Remove");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function og(l) {
  let e;
  return {
    c() {
      e = js("OK");
    },
    m(t, n) {
      Zn(t, e, n);
    },
    d(t) {
      t && Pn(e);
    }
  };
}
function ag(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m, b, p, w = !/*showRemove*/
  l[4] && wa(l);
  o = new Gm({
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
  ), f = new em({
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
  ), _ = new Cs({
    props: {
      $$slots: { default: [ig] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let h = (
    /*showRemove*/
    l[4] && pa(l)
  );
  return b = new Cs({
    props: {
      variant: "primary",
      $$slots: { default: [og] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = ut("div"), t = ut("div"), n = ut("span"), w && w.c(), i = tl(), s = ut("div"), rn(o.$$.fragment), r = tl(), a = ut("div"), rn(f.$$.fragment), c = tl(), u = ut("div"), rn(_.$$.fragment), d = tl(), h && h.c(), g = tl(), m = ut("div"), rn(b.$$.fragment), Tn(s, "margin-right", "10px"), Tn(a, "margin-right", "40px"), Tn(a, "margin-bottom", "8px"), Tn(u, "margin-right", "8px"), In(n, "class", "model-content svelte-d9x7u0"), In(t, "class", "modal-container svelte-d9x7u0"), In(e, "class", "modal svelte-d9x7u0"), In(e, "id", "model-box-edit");
    },
    m(v, y) {
      Zn(v, e, y), Oe(e, t), Oe(t, n), w && w.m(n, null), Oe(n, i), Oe(n, s), cn(o, s, null), Oe(n, r), Oe(n, a), cn(f, a, null), Oe(n, c), Oe(n, u), cn(_, u, null), Oe(n, d), h && h.m(n, null), Oe(n, g), Oe(n, m), cn(b, m, null), p = !0;
    },
    p(v, [y]) {
      /*showRemove*/
      v[4] ? w && (Es(), Ye(w, 1, 1, () => {
        w = null;
      }), Ls()) : w ? (w.p(v, y), y & /*showRemove*/
      16 && ye(w, 1)) : (w = wa(v), w.c(), ye(w, 1), w.m(n, i));
      const k = {};
      y & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      v[0]), y & /*choices*/
      8 && (k.choices = /*choices*/
      v[3]), o.$set(k);
      const S = {};
      y & /*currentColor*/
      2 && (S.value = /*currentColor*/
      v[1]), f.$set(S);
      const C = {};
      y & /*$$scope*/
      262144 && (C.$$scope = { dirty: y, ctx: v }), _.$set(C), /*showRemove*/
      v[4] ? h ? (h.p(v, y), y & /*showRemove*/
      16 && ye(h, 1)) : (h = pa(v), h.c(), ye(h, 1), h.m(n, g)) : h && (Es(), Ye(h, 1, 1, () => {
        h = null;
      }), Ls());
      const E = {};
      y & /*$$scope*/
      262144 && (E.$$scope = { dirty: y, ctx: v }), b.$set(E);
    },
    i(v) {
      p || (ye(w), ye(o.$$.fragment, v), ye(f.$$.fragment, v), ye(_.$$.fragment, v), ye(h), ye(b.$$.fragment, v), p = !0);
    },
    o(v) {
      Ye(w), Ye(o.$$.fragment, v), Ye(f.$$.fragment, v), Ye(_.$$.fragment, v), Ye(h), Ye(b.$$.fragment, v), p = !1;
    },
    d(v) {
      v && Pn(e), w && w.d(), fn(o), fn(f), fn(_), h && h.d(), fn(b);
    }
  };
}
function rg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = $m();
  function _(y) {
    u("change", {
      label: i,
      color: a,
      lock: c,
      ret: y
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(y) {
    const { detail: k } = y;
    let S = k;
    Number.isInteger(S) ? (Array.isArray(o) && S < o.length && t(1, a = o[S]), Array.isArray(s) && S < s.length && t(0, i = s[S][0])) : t(0, i = S);
  }
  function g(y) {
    const { detail: k } = y;
    t(1, a = k);
  }
  function m(y) {
    d(y), _(1);
  }
  function b(y) {
    t(2, c = !c);
  }
  function p(y) {
    switch (y.key) {
      case "Enter":
        _(1);
        break;
    }
  }
  eg(() => {
    document.addEventListener("keydown", p), t(0, i = n), t(1, a = r);
  }), tg(() => {
    document.removeEventListener("keydown", p);
  });
  const w = () => _(0), h = () => _(-1), v = () => _(1);
  return l.$$set = (y) => {
    "label" in y && t(10, n = y.label), "currentLabel" in y && t(0, i = y.currentLabel), "choices" in y && t(3, s = y.choices), "choicesColors" in y && t(11, o = y.choicesColors), "color" in y && t(12, r = y.color), "currentColor" in y && t(1, a = y.currentColor), "showRemove" in y && t(4, f = y.showRemove), "labelDetailLock" in y && t(2, c = y.labelDetailLock);
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
    v
  ];
}
class Us extends Km {
  constructor(e) {
    super(), Jm(this, e, rg, ag, xm, {
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
function as(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, s] = t;
  return `rgba(${n}, ${i}, ${s}, ${e})`;
}
class rs {
  constructor(e, t, n, i, s, o, r, a, f, c, u, _, d = "rgb(255, 255, 255)", g = 0.5, m = 25, b = 8, p = 2, w = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (v) => {
      if (this.isDragging) {
        let y = (v.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (v.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = he(y, -this._xmin, S - this._xmax), k = he(k, -this._ymin, C - this._ymax), this._xmin += y, this._ymin += k, this._xmax += y, this._ymax += k, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (v) => {
      if (this.isCreating) {
        let [y, k] = this.toBoxCoordinates(v.clientX, v.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, k = (k - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), k > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = k, this.creatingAnchorY = "ymin") : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = k : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = k : k < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = k, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (v) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = he(this._xmin, 0, y - this.minSize), this._ymin = he(this._ymin, 0, k - this.minSize), this._xmax = he(this._xmax, this.minSize, y), this._ymax = he(this._ymax, this.minSize, k), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > k ? (this._ymin -= this._ymax - k, this._ymax = k) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (v) => {
      if (this.isResizing) {
        const y = v.clientX, k = v.clientY, S = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (k - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, q = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += S, this._ymin += C, this._xmin = he(this._xmin, 0, this._xmax - this.minSize), this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += S, this._ymin += C, this._xmax = he(this._xmax, this._xmin + this.minSize, E), this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += S, this._ymax += C, this._xmax = he(this._xmax, this._xmin + this.minSize, E), this._ymax = he(this._ymax, this._ymin + this.minSize, q);
            break;
          case 3:
            this._xmin += S, this._ymax += C, this._xmin = he(this._xmin, 0, this._xmax - this.minSize), this._ymax = he(this._ymax, this._ymin + this.minSize, q);
            break;
          case 4:
            this._ymin += C, this._ymin = he(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += S, this._xmax = he(this._xmax, this._xmin + this.minSize, E);
            break;
          case 6:
            this._ymax += C, this._ymax = he(this._ymax, this._ymin + this.minSize, q);
            break;
          case 7:
            this._xmin += S, this._xmin = he(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = i, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = h, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = d, this.alpha = g, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = as(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = as(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, i, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, i, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = as(this.color, 1);
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
], Hl = (l, e, t) => Math.min(Math.max(l, e), t);
class fg {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, i = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Hl(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Hl(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Hl(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Hl(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += i, this.renderCallBack();
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
  SvelteComponent: cg,
  append: ct,
  attr: ve,
  binding_callbacks: ug,
  bubble: fs,
  check_outros: Hn,
  create_component: zt,
  destroy_component: qt,
  detach: kt,
  element: Ct,
  empty: _g,
  group_outros: Xn,
  init: dg,
  insert: yt,
  is_function: hg,
  listen: Fe,
  mount_component: Bt,
  noop: Nr,
  run_all: Pr,
  safe_not_equal: mg,
  space: St,
  toggle_class: Xl,
  transition_in: $,
  transition_out: oe
} = window.__gradio__svelte__internal, { onMount: gg, onDestroy: bg, createEventDispatcher: wg } = window.__gradio__svelte__internal;
function va(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m, b, p;
  n = new Qh({}), o = new s0({});
  let w = (
    /*showRemoveButton*/
    l[1] && ka(l)
  ), h = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[14] && ya(l);
  return u = new L_({}), g = new h_({}), {
    c() {
      e = Ct("span"), t = Ct("button"), zt(n.$$.fragment), i = St(), s = Ct("button"), zt(o.$$.fragment), r = St(), w && w.c(), a = St(), h && h.c(), f = St(), c = Ct("button"), zt(u.$$.fragment), _ = St(), d = Ct("button"), zt(g.$$.fragment), ve(t, "class", "icon svelte-3rql59"), ve(t, "aria-label", "Create box"), Xl(
        t,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].creation
      ), ve(s, "class", "icon svelte-3rql59"), ve(s, "aria-label", "Edit boxes"), Xl(
        s,
        "selected",
        /*mode*/
        l[10] === /*Mode*/
        l[7].drag
      ), ve(c, "class", "icon svelte-3rql59"), ve(c, "aria-label", "Rotate counterclockwise"), ve(d, "class", "icon svelte-3rql59"), ve(d, "aria-label", "Rotate clockwise"), ve(e, "class", "canvas-control svelte-3rql59");
    },
    m(v, y) {
      yt(v, e, y), ct(e, t), Bt(n, t, null), ct(e, i), ct(e, s), Bt(o, s, null), ct(e, r), w && w.m(e, null), ct(e, a), h && h.m(e, null), ct(e, f), ct(e, c), Bt(u, c, null), ct(e, _), ct(e, d), Bt(g, d, null), m = !0, b || (p = [
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
    p(v, y) {
      (!m || y[0] & /*mode, Mode*/
      1152) && Xl(
        t,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].creation
      ), (!m || y[0] & /*mode, Mode*/
      1152) && Xl(
        s,
        "selected",
        /*mode*/
        v[10] === /*Mode*/
        v[7].drag
      ), /*showRemoveButton*/
      v[1] ? w ? (w.p(v, y), y[0] & /*showRemoveButton*/
      2 && $(w, 1)) : (w = ka(v), w.c(), $(w, 1), w.m(e, a)) : w && (Xn(), oe(w, 1, 1, () => {
        w = null;
      }), Hn()), !/*disableEditBoxes*/
      v[5] && /*labelDetailLock*/
      v[14] ? h ? (h.p(v, y), y[0] & /*disableEditBoxes, labelDetailLock*/
      16416 && $(h, 1)) : (h = ya(v), h.c(), $(h, 1), h.m(e, f)) : h && (Xn(), oe(h, 1, 1, () => {
        h = null;
      }), Hn());
    },
    i(v) {
      m || ($(n.$$.fragment, v), $(o.$$.fragment, v), $(w), $(h), $(u.$$.fragment, v), $(g.$$.fragment, v), m = !0);
    },
    o(v) {
      oe(n.$$.fragment, v), oe(o.$$.fragment, v), oe(w), oe(h), oe(u.$$.fragment, v), oe(g.$$.fragment, v), m = !1;
    },
    d(v) {
      v && kt(e), qt(n), qt(o), w && w.d(), h && h.d(), qt(u), qt(g), b = !1, Pr(p);
    }
  };
}
function ka(l) {
  let e, t, n, i, s;
  return t = new d0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ve(e, "class", "icon svelte-3rql59"), ve(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      yt(o, e, r), Bt(t, e, null), n = !0, i || (s = Fe(
        e,
        "click",
        /*click_handler_2*/
        l[40]
      ), i = !0);
    },
    p: Nr,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      oe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), qt(t), i = !1, s();
    }
  };
}
function ya(l) {
  let e, t, n, i, s;
  return t = new v0({}), {
    c() {
      e = Ct("button"), zt(t.$$.fragment), ve(e, "class", "icon svelte-3rql59"), ve(e, "aria-label", "Edit label");
    },
    m(o, r) {
      yt(o, e, r), Bt(t, e, null), n = !0, i || (s = Fe(
        e,
        "click",
        /*click_handler_3*/
        l[41]
      ), i = !0);
    },
    p: Nr,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      oe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && kt(e), qt(t), i = !1, s();
    }
  };
}
function Ca(l) {
  let e, t;
  return e = new Us({
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
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function Sa(l) {
  let e, t;
  return e = new Us({
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
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function za(l) {
  let e, t;
  return e = new Us({
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
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function pg(l) {
  let e, t, n, i, s, o, r, a, f, c, u = (
    /*interactive*/
    l[2] && va(l)
  ), _ = (
    /*editModalVisible*/
    l[11] && Ca(l)
  ), d = (
    /*newModalVisible*/
    l[12] && Sa(l)
  ), g = (
    /*editDefaultLabelVisible*/
    l[13] && za(l)
  );
  return {
    c() {
      e = Ct("div"), t = Ct("canvas"), n = St(), u && u.c(), i = St(), _ && _.c(), s = St(), d && d.c(), o = St(), g && g.c(), r = _g(), ve(t, "class", "canvas-annotator svelte-3rql59"), ve(e, "class", "canvas-container svelte-3rql59"), ve(e, "tabindex", "-1");
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
          hg(
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
      4 && $(u, 1)) : (u = va(l), u.c(), $(u, 1), u.m(i.parentNode, i)) : u && (Xn(), oe(u, 1, 1, () => {
        u = null;
      }), Hn()), /*editModalVisible*/
      l[11] ? _ ? (_.p(l, b), b[0] & /*editModalVisible*/
      2048 && $(_, 1)) : (_ = Ca(l), _.c(), $(_, 1), _.m(s.parentNode, s)) : _ && (Xn(), oe(_, 1, 1, () => {
        _ = null;
      }), Hn()), /*newModalVisible*/
      l[12] ? d ? (d.p(l, b), b[0] & /*newModalVisible*/
      4096 && $(d, 1)) : (d = Sa(l), d.c(), $(d, 1), d.m(o.parentNode, o)) : d && (Xn(), oe(d, 1, 1, () => {
        d = null;
      }), Hn()), /*editDefaultLabelVisible*/
      l[13] ? g ? (g.p(l, b), b[0] & /*editDefaultLabelVisible*/
      8192 && $(g, 1)) : (g = za(l), g.c(), $(g, 1), g.m(r.parentNode, r)) : g && (Xn(), oe(g, 1, 1, () => {
        g = null;
      }), Hn());
    },
    i(m) {
      a || ($(u), $(_), $(d), $(g), a = !0);
    },
    o(m) {
      oe(u), oe(_), oe(d), oe(g), a = !1;
    },
    d(m) {
      m && (kt(e), kt(n), kt(i), kt(s), kt(o), kt(r)), l[37](null), u && u.d(m), _ && _.d(m), d && d.d(m), g && g.d(m), f = !1, Pr(c);
    }
  };
}
function Yl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function gn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function vg(l, e, t) {
  var n;
  (function(z) {
    z[z.creation = 0] = "creation", z[z.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: g = !1 } = e, { singleBox: m = !1 } = e, { showRemoveButton: b = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: w = !1 } = e;
  b === null && (b = g);
  let h, v, y = null, k = -1, S = n.drag, C = new fg(O);
  u !== null && u.boxes.length == 0 && (S = n.creation);
  let E = 0, q = 0, W = 0, A = 0, U = 1, V = 0, G = 0, J = !1, ae = !1, R = !1, P = w, M = { label: "", color: "" };
  const j = wg();
  function O() {
    if (v) {
      if (v.clearRect(0, 0, h.width, h.height), v.save(), v.translate(C.offsetX, C.offsetY), v.scale(C.scale, C.scale), y !== null) {
        switch (u.orientation) {
          case 0:
            v.drawImage(y, 0, 0, V, G);
            break;
          case 1:
            v.translate(V, 0), v.rotate(Math.PI / 2), v.drawImage(y, 0, 0, G, V);
            break;
          case 2:
            v.translate(V, G), v.rotate(Math.PI), v.drawImage(y, 0, 0, V, G);
            break;
          case 3:
            v.translate(0, G), v.rotate(-Math.PI / 2), v.drawImage(y, 0, 0, G, V);
            break;
        }
        v.restore();
      }
      for (const z of u.boxes.slice().reverse())
        z.render(v);
    }
  }
  function ie(z) {
    t(9, k = z), u.boxes.forEach((H) => {
      H.setSelected(!1);
    }), z >= 0 && z < u.boxes.length && u.boxes[z].setSelected(!0), O();
  }
  function be(z) {
    s && (z.target instanceof Element && z.target.hasPointerCapture(z.pointerId) && z.target.releasePointerCapture(z.pointerId), S === n.creation ? te(z) : S === n.drag && I(z));
  }
  function I(z) {
    const H = h.getBoundingClientRect(), x = z.clientX - H.left, se = z.clientY - H.top;
    let re = !1;
    for (const [fe, Ce] of u.boxes.entries()) {
      const vl = Ce.indexOfPointInsideHandle(x, se);
      if (vl >= 0) {
        re = !0, ie(fe), Ce.startResize(vl, z);
        return;
      }
    }
    for (const [fe, Ce] of u.boxes.entries())
      if (Ce.isPointInsideBox(x, se)) {
        re = !0, ie(fe), Ce.startDrag(z);
        return;
      }
    m || ie(-1), re || C.startDrag(z);
  }
  function Ge(z) {
    j("change");
  }
  function L(z) {
    if (u === null || S !== n.drag)
      return;
    const H = h.getBoundingClientRect(), x = z.clientX - H.left, se = z.clientY - H.top;
    for (const [re, fe] of u.boxes.entries()) {
      const Ce = fe.indexOfPointInsideHandle(x, se);
      if (Ce >= 0) {
        t(8, h.style.cursor = fe.resizeHandles[Ce].cursor, h);
        return;
      }
    }
    t(8, h.style.cursor = "default", h);
  }
  function X(z) {
    if (s)
      switch (z.key) {
        case "Delete":
          B();
          break;
      }
  }
  function Q(z) {
    z.preventDefault();
    const H = 1 / (1 + z.deltaY / 1e3 * 0.5), x = parseFloat((C.scale * H).toFixed(2)), se = x < 1 ? 1 : x, re = h.getBoundingClientRect(), fe = z.clientX - re.left, Ce = z.clientY - re.top, vl = (fe - C.offsetX) / C.scale, sf = (Ce - C.offsetY) / C.scale;
    C.offsetX = fe - vl * se, C.offsetY = Ce - sf * se, C.scale = se, O();
  }
  function te(z) {
    const H = h.getBoundingClientRect(), x = (z.clientX - H.left - C.offsetX) / U / C.scale, se = (z.clientY - H.top - C.offsetY) / U / C.scale;
    let re;
    d.length > 0 ? re = Yl(d[0]) : m ? u.boxes.length > 0 ? re = u.boxes[0].color : re = $t[0] : re = $t[u.boxes.length % $t.length];
    let fe = new rs(O, Ke, C, E, q, W, A, "", x, se, x, se, re, o, r, a, f, c);
    fe.startCreating(z, H.left, H.top), m ? t(0, u.boxes = [fe], u) : t(0, u.boxes = [fe, ...u.boxes], u), ie(0), O(), j("change");
  }
  function D() {
    t(10, S = n.creation), t(8, h.style.cursor = "crosshair", h);
  }
  function Re() {
    t(10, S = n.drag), t(8, h.style.cursor = "default", h);
  }
  function Ke() {
    k >= 0 && k < u.boxes.length && (u.boxes[k].getArea() < 1 ? B() : (g || (P ? bi() : t(12, ae = !0)), m && Re()));
  }
  function mt() {
    k >= 0 && k < u.boxes.length && !g && t(11, J = !0);
  }
  function Ae(z) {
    s && mt();
  }
  function Je(z) {
    t(11, J = !1);
    const { detail: H } = z;
    let x = H.label, se = H.color, re = H.ret;
    if (k >= 0 && k < u.boxes.length) {
      let fe = u.boxes[k];
      re == 1 ? (fe.label = x, fe.color = Yl(se), O(), j("change")) : re == -1 && B();
    }
  }
  function Qe(z) {
    t(12, ae = !1);
    const { detail: H } = z;
    let x = H.label, se = H.color, re = H.ret, fe = H.lock;
    if (k >= 0 && k < u.boxes.length) {
      let Ce = u.boxes[k];
      re == 1 ? (t(14, P = fe), M.label = x, M.color = se, Ce.label = x, Ce.color = Yl(se), O(), j("change")) : B();
    }
  }
  function Gt(z) {
    t(13, R = !1);
    const { detail: H } = z;
    let x = H.label, se = H.color, re = H.ret, fe = H.lock;
    re == 1 && (t(14, P = fe), M.label = x, M.color = se);
  }
  function bi() {
    if (k >= 0 && k < u.boxes.length) {
      let z = u.boxes[k];
      z.label = M.label, M.color !== "" && (z.color = Yl(M.color)), O(), j("change");
    }
  }
  function B() {
    k >= 0 && k < u.boxes.length && (u.boxes.splice(k, 1), ie(-1), m && D(), j("change"));
  }
  function ot(z) {
    t(0, u.orientation = ((u.orientation + z) % 4 + 4) % 4, u), C.orientation = u.orientation, We();
    for (const H of u.boxes)
      H.onRotate(z);
    O();
  }
  function We() {
    if (h) {
      if (U = 1, t(8, h.width = h.clientWidth, h), C.setRotatedImage(y), y !== null) {
        if (C.imageRotatedWidth > h.width)
          U = h.width / C.imageRotatedWidth, V = Math.round(C.imageRotatedWidth * U), G = Math.round(C.imageRotatedHeight * U), E = 0, q = 0, W = V, A = G, t(8, h.height = G, h);
        else {
          V = C.imageRotatedWidth, G = C.imageRotatedHeight;
          var z = (h.width - V) / 2;
          E = z, q = 0, W = z + V, A = G, t(8, h.height = G, h);
        }
        C.imageWidth = V, C.imageHeight = G;
      } else
        E = 0, q = 0, W = h.width, A = h.height, t(8, h.height = h.clientHeight, h);
      if (C.resize(h.width, h.height, E, q), W > 0 && A > 0)
        for (const H of u.boxes)
          H.canvasXmin = E, H.canvasYmin = q, H.canvasXmax = W, H.canvasYmax = A, H.setScaleFactor(U);
      O(), j("change");
    }
  }
  const vn = new ResizeObserver(We);
  function wi() {
    for (let z = 0; z < u.boxes.length; z++) {
      let H = u.boxes[z];
      if (!(H instanceof rs)) {
        let x = "", se = "";
        H.hasOwnProperty("color") ? (x = H.color, Array.isArray(x) && x.length === 3 && (x = `rgb(${x[0]}, ${x[1]}, ${x[2]})`)) : x = $t[z % $t.length], H.hasOwnProperty("label") && (se = H.label), H = new rs(O, Ke, C, E, q, W, A, se, H.xmin, H.ymin, H.xmax, H.ymax, x, o, r, a, f, c), t(0, u.boxes[z] = H, u);
      }
    }
  }
  function Wt() {
    i !== null && (y === null || y.src != i) && (y = new Image(), y.src = i, y.onload = function() {
      We(), O();
    });
  }
  gg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let z = 0; z < _.length; z++) {
          let H = $t[z % $t.length];
          d.push(gn(H));
        }
      M.label = _[0][0], M.color = d[0];
    }
    v = h.getContext("2d"), vn.observe(h), k < 0 && u !== null && u.boxes.length > 0 && ie(0), Wt(), We(), O();
  });
  function kn() {
    document.addEventListener("keydown", X);
  }
  function pi() {
    document.removeEventListener("keydown", X);
  }
  bg(() => {
    document.removeEventListener("keydown", X);
  });
  function vi(z) {
    ug[z ? "unshift" : "push"](() => {
      h = z, t(8, h);
    });
  }
  const Gn = () => D(), gt = () => Re(), Kn = () => B(), xr = () => t(13, R = !0), $r = () => ot(-1), ef = () => ot(1);
  function tf(z) {
    fs.call(this, l, z);
  }
  function nf(z) {
    fs.call(this, l, z);
  }
  function lf(z) {
    fs.call(this, l, z);
  }
  return l.$$set = (z) => {
    "imageUrl" in z && t(29, i = z.imageUrl), "interactive" in z && t(2, s = z.interactive), "boxAlpha" in z && t(30, o = z.boxAlpha), "boxMinSize" in z && t(31, r = z.boxMinSize), "handleSize" in z && t(32, a = z.handleSize), "boxThickness" in z && t(33, f = z.boxThickness), "boxSelectedThickness" in z && t(34, c = z.boxSelectedThickness), "value" in z && t(0, u = z.value), "choices" in z && t(3, _ = z.choices), "choicesColors" in z && t(4, d = z.choicesColors), "disableEditBoxes" in z && t(5, g = z.disableEditBoxes), "singleBox" in z && t(35, m = z.singleBox), "showRemoveButton" in z && t(1, b = z.showRemoveButton), "handlesCursor" in z && t(6, p = z.handlesCursor), "useDefaultLabel" in z && t(36, w = z.useDefaultLabel);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (Wt(), wi(), We(), O());
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
    k,
    S,
    J,
    ae,
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
    pi,
    i,
    o,
    r,
    a,
    f,
    c,
    m,
    w,
    vi,
    Gn,
    gt,
    Kn,
    xr,
    $r,
    ef,
    tf,
    nf,
    lf
  ];
}
class kg extends cg {
  constructor(e) {
    super(), dg(
      this,
      e,
      vg,
      pg,
      mg,
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
  SvelteComponent: yg,
  add_flush_callback: Cg,
  bind: Sg,
  binding_callbacks: zg,
  create_component: qg,
  destroy_component: Bg,
  init: Dg,
  mount_component: Lg,
  safe_not_equal: Eg,
  transition_in: Mg,
  transition_out: Rg
} = window.__gradio__svelte__internal, { createEventDispatcher: Ag } = window.__gradio__svelte__internal;
function Wg(l) {
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
    l[0]), e = new kg({ props: s }), zg.push(() => Sg(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[19]
    ), {
      c() {
        qg(e.$$.fragment);
      },
      m(o, r) {
        Lg(e, o, r), n = !0;
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
        o[0], Cg(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Mg(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Rg(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Bg(e, o);
      }
    }
  );
}
function Ig(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: g } = e, { showRemoveButton: m } = e, { handlesCursor: b } = e, { useDefaultLabel: p } = e, w, h;
  const v = Ag();
  function y(S) {
    _ = S, t(0, _);
  }
  const k = () => v("change");
  return l.$$set = (S) => {
    "src" in S && t(16, n = S.src), "interactive" in S && t(1, i = S.interactive), "boxesAlpha" in S && t(2, s = S.boxesAlpha), "labelList" in S && t(3, o = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, f = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "boxSelectedThickness" in S && t(8, u = S.boxSelectedThickness), "value" in S && t(0, _ = S.value), "disableEditBoxes" in S && t(9, d = S.disableEditBoxes), "singleBox" in S && t(10, g = S.singleBox), "showRemoveButton" in S && t(11, m = S.showRemoveButton), "handlesCursor" in S && t(12, b = S.handlesCursor), "useDefaultLabel" in S && t(13, p = S.useDefaultLabel);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    196608) {
      t(14, w = n), t(17, h = n);
      const S = n;
      a1(S).then((C) => {
        h === S && t(14, w = C);
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
    v,
    n,
    h,
    y,
    k
  ];
}
class Tg extends yg {
  constructor(e) {
    super(), Dg(this, e, Ig, Wg, Eg, {
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
class qa {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Hg,
  add_flush_callback: si,
  append: Ln,
  attr: fl,
  bind: oi,
  binding_callbacks: gl,
  bubble: nl,
  check_outros: tn,
  create_component: Lt,
  create_slot: Xg,
  destroy_component: Et,
  detach: un,
  element: hl,
  empty: Yg,
  get_all_dirty_from_scope: Fg,
  get_slot_changes: jg,
  group_outros: nn,
  init: Ug,
  insert: _n,
  mount_component: Mt,
  noop: Vg,
  safe_not_equal: Og,
  space: en,
  toggle_class: Ba,
  transition_in: K,
  transition_out: ee,
  update_slot_base: Ng
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg, tick: Zg } = window.__gradio__svelte__internal;
function Da(l) {
  let e, t;
  return e = new v1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [Gg] },
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
function Gg(l) {
  let e, t;
  return e = new ai({
    props: {
      Icon: Au,
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
function La(l) {
  let e, t;
  return e = new nd({
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
function Ea(l) {
  let e, t, n;
  return t = new ai({
    props: { Icon: Pa, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[34]
  ), {
    c() {
      e = hl("div"), Lt(t.$$.fragment);
    },
    m(i, s) {
      _n(i, e, s), Mt(t, e, null), n = !0;
    },
    p: Vg,
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
function Ma(l) {
  let e;
  const t = (
    /*#slots*/
    l[35].default
  ), n = Xg(
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
      1048576) && Ng(
        n,
        t,
        i,
        /*$$scope*/
        i[51],
        e ? jg(
          t,
          /*$$scope*/
          i[51],
          s,
          null
        ) : Fg(
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
function Kg(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Ma(l)
  );
  return {
    c() {
      n && n.c(), e = Yg();
    },
    m(i, s) {
      n && n.m(i, s), _n(i, e, s), t = !0;
    },
    p(i, s) {
      /*value*/
      i[1] === null ? n ? (n.p(i, s), s[0] & /*value*/
      2 && K(n, 1)) : (n = Ma(i), n.c(), K(n, 1), n.m(e.parentNode, e)) : n && (nn(), ee(n, 1, 1, () => {
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
function Ra(l) {
  let e, t;
  return e = new Oh({
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
function Aa(l) {
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
    l[1]), t = new Tg({ props: o }), gl.push(() => oi(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      l[49]
    ), {
      c() {
        e = hl("div"), Lt(t.$$.fragment), fl(e, "class", "image-frame svelte-1gjdske"), Ba(
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
        r[1], si(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && Ba(
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
function Wa(l) {
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
    l[0]), e = new wd({ props: s }), gl.push(() => oi(e, "active_source", i)), {
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
        o[0], si(() => t = !1)), e.$set(a);
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
function Jg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, g, m = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new pc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: Za,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Da(l)
  ), w = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && La(l)
  ), h = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Ea(l)
  );
  function v(q) {
    l[40](q);
  }
  function y(q) {
    l[41](q);
  }
  let k = {
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
    $$slots: { default: [Kg] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[27] !== void 0 && (k.uploading = /*uploading*/
  l[27]), /*dragging*/
  l[28] !== void 0 && (k.dragging = /*dragging*/
  l[28]), f = new $1({ props: k }), l[39](f), gl.push(() => oi(f, "uploading", v)), gl.push(() => oi(f, "dragging", y)), f.$on(
    "load",
    /*handle_upload*/
    l[30]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[42]
  );
  let S = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Ra(l)
  ), C = (
    /*value*/
    l[1] !== null && Aa(l)
  ), E = m && Wa(l);
  return {
    c() {
      Lt(e.$$.fragment), t = en(), n = hl("div"), p && p.c(), i = en(), w && w.c(), s = en(), h && h.c(), o = en(), r = hl("div"), a = hl("div"), Lt(f.$$.fragment), _ = en(), S && S.c(), d = en(), C && C.c(), g = en(), E && E.c(), fl(n, "class", "icon-buttons svelte-1gjdske"), fl(a, "class", "upload-container svelte-1gjdske"), fl(r, "data-testid", "image"), fl(r, "class", "image-container svelte-1gjdske");
    },
    m(q, W) {
      Mt(e, q, W), _n(q, t, W), _n(q, n, W), p && p.m(n, null), Ln(n, i), w && w.m(n, null), Ln(n, s), h && h.m(n, null), _n(q, o, W), _n(q, r, W), Ln(r, a), Mt(f, a, null), Ln(a, _), S && S.m(a, null), Ln(a, d), C && C.m(a, null), Ln(r, g), E && E.m(r, null), b = !0;
    },
    p(q, W) {
      const A = {};
      W[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      q[3]), W[0] & /*label*/
      4 && (A.label = /*label*/
      q[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      q[10] && /*value*/
      q[1] !== null ? p ? (p.p(q, W), W[0] & /*showDownloadButton, value*/
      1026 && K(p, 1)) : (p = Da(q), p.c(), K(p, 1), p.m(n, i)) : p && (nn(), ee(p, 1, 1, () => {
        p = null;
      }), tn()), /*showShareButton*/
      q[9] && /*value*/
      q[1] !== null ? w ? (w.p(q, W), W[0] & /*showShareButton, value*/
      514 && K(w, 1)) : (w = La(q), w.c(), K(w, 1), w.m(n, s)) : w && (nn(), ee(w, 1, 1, () => {
        w = null;
      }), tn()), /*showClearButton*/
      q[11] && /*value*/
      q[1] !== null && /*interactive*/
      q[7] ? h ? (h.p(q, W), W[0] & /*showClearButton, value, interactive*/
      2178 && K(h, 1)) : (h = Ea(q), h.c(), K(h, 1), h.m(n, null)) : h && (nn(), ee(h, 1, 1, () => {
        h = null;
      }), tn());
      const U = {};
      W[0] & /*value, active_source*/
      3 && (U.hidden = /*value*/
      q[1] !== null || /*active_source*/
      q[0] === "webcam"), W[0] & /*active_source*/
      1 && (U.filetype = /*active_source*/
      q[0] === "clipboard" ? "clipboard" : "image/*"), W[0] & /*root*/
      64 && (U.root = /*root*/
      q[6]), W[0] & /*max_file_size*/
      8388608 && (U.max_file_size = /*max_file_size*/
      q[23]), W[0] & /*sources*/
      16 && (U.disable_click = !/*sources*/
      q[4].includes("upload")), W[0] & /*cli_upload*/
      16777216 && (U.upload = /*cli_upload*/
      q[24]), W[0] & /*stream_handler*/
      33554432 && (U.stream_handler = /*stream_handler*/
      q[25]), W[0] & /*value*/
      2 | W[1] & /*$$scope*/
      1048576 && (U.$$scope = { dirty: W, ctx: q }), !c && W[0] & /*uploading*/
      134217728 && (c = !0, U.uploading = /*uploading*/
      q[27], si(() => c = !1)), !u && W[0] & /*dragging*/
      268435456 && (u = !0, U.dragging = /*dragging*/
      q[28], si(() => u = !1)), f.$set(U), /*value*/
      q[1] === null && /*active_source*/
      q[0] === "webcam" ? S ? (S.p(q, W), W[0] & /*value, active_source*/
      3 && K(S, 1)) : (S = Ra(q), S.c(), K(S, 1), S.m(a, d)) : S && (nn(), ee(S, 1, 1, () => {
        S = null;
      }), tn()), /*value*/
      q[1] !== null ? C ? (C.p(q, W), W[0] & /*value*/
      2 && K(C, 1)) : (C = Aa(q), C.c(), K(C, 1), C.m(a, null)) : C && (nn(), ee(C, 1, 1, () => {
        C = null;
      }), tn()), W[0] & /*sources, value, interactive*/
      146 && (m = /*sources*/
      (q[4].length > 1 || /*sources*/
      q[4].includes("clipboard")) && /*value*/
      q[1] === null && /*interactive*/
      q[7]), m ? E ? (E.p(q, W), W[0] & /*sources, value, interactive*/
      146 && K(E, 1)) : (E = Wa(q), E.c(), K(E, 1), E.m(r, null)) : E && (nn(), ee(E, 1, 1, () => {
        E = null;
      }), tn());
    },
    i(q) {
      b || (K(e.$$.fragment, q), K(p), K(w), K(h), K(f.$$.fragment, q), K(S), K(C), K(E), b = !0);
    },
    o(q) {
      ee(e.$$.fragment, q), ee(p), ee(w), ee(h), ee(f.$$.fragment, q), ee(S), ee(C), ee(E), b = !1;
    },
    d(q) {
      q && (un(t), un(n), un(o), un(r)), Et(e, q), p && p.d(), w && w.d(), h && h.d(), l[39](null), Et(f), S && S.d(), C && C.d(), E && E.d();
    }
  };
}
function Qg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(B, ot, We, vn) {
    function wi(Wt) {
      return Wt instanceof We ? Wt : new We(function(kn) {
        kn(Wt);
      });
    }
    return new (We || (We = Promise))(function(Wt, kn) {
      function pi(gt) {
        try {
          Gn(vn.next(gt));
        } catch (Kn) {
          kn(Kn);
        }
      }
      function vi(gt) {
        try {
          Gn(vn.throw(gt));
        } catch (Kn) {
          kn(Kn);
        }
      }
      function Gn(gt) {
        gt.done ? Wt(gt.value) : wi(gt.value).then(pi, vi);
      }
      Gn((vn = vn.apply(B, ot || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: g } = e, { showDownloadButton: m } = e, { showClearButton: b } = e, { boxesAlpha: p } = e, { labelList: w } = e, { labelColors: h } = e, { boxMinSize: v } = e, { handleSize: y } = e, { boxThickness: k } = e, { disableEditBoxes: S } = e, { singleBox: C } = e, { showRemoveButton: E } = e, { handlesCursor: q } = e, { boxSelectedThickness: W } = e, { max_file_size: A = null } = e, { cli_upload: U } = e, { stream_handler: V } = e, { useDefaultLabel: G } = e, J, ae = !1, { active_source: R = null } = e;
  function P({ detail: B }) {
    t(1, o = new qa()), t(1, o.image = B, o), j("upload");
  }
  function M(B) {
    return s(this, void 0, void 0, function* () {
      const ot = yield J.load_files([new File([B], "webcam.png")]), We = (ot == null ? void 0 : ot[0]) || null;
      We ? (t(1, o = new qa()), t(1, o.image = We, o)) : t(1, o = null), yield Zg(), j("change");
    });
  }
  const j = Pg();
  let O = !1;
  function ie(B) {
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
  const I = async (B) => B === null ? "" : `<img src="${await V_(B.image)}" />`;
  function Ge(B) {
    nl.call(this, l, B);
  }
  function L(B) {
    nl.call(this, l, B);
  }
  function X(B) {
    gl[B ? "unshift" : "push"](() => {
      J = B, t(29, J);
    });
  }
  function Q(B) {
    ae = B, t(27, ae);
  }
  function te(B) {
    O = B, t(28, O);
  }
  function D(B) {
    nl.call(this, l, B);
  }
  const Re = (B) => M(B.detail), Ke = (B) => M(B.detail);
  function mt(B) {
    nl.call(this, l, B);
  }
  function Ae(B) {
    nl.call(this, l, B);
  }
  const Je = (B) => M(B.detail);
  function Qe(B) {
    o = B, t(1, o);
  }
  const Gt = () => j("change");
  function bi(B) {
    R = B, t(0, R), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, o = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, g = B.showShareButton), "showDownloadButton" in B && t(10, m = B.showDownloadButton), "showClearButton" in B && t(11, b = B.showClearButton), "boxesAlpha" in B && t(12, p = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, h = B.labelColors), "boxMinSize" in B && t(15, v = B.boxMinSize), "handleSize" in B && t(16, y = B.handleSize), "boxThickness" in B && t(17, k = B.boxThickness), "disableEditBoxes" in B && t(18, S = B.disableEditBoxes), "singleBox" in B && t(19, C = B.singleBox), "showRemoveButton" in B && t(20, E = B.showRemoveButton), "handlesCursor" in B && t(21, q = B.handlesCursor), "boxSelectedThickness" in B && t(22, W = B.boxSelectedThickness), "max_file_size" in B && t(23, A = B.max_file_size), "cli_upload" in B && t(24, U = B.cli_upload), "stream_handler" in B && t(25, V = B.stream_handler), "useDefaultLabel" in B && t(26, G = B.useDefaultLabel), "active_source" in B && t(0, R = B.active_source), "$$scope" in B && t(51, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    134217728 && ae && be(), l.$$.dirty[0] & /*dragging*/
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
    v,
    y,
    k,
    S,
    C,
    E,
    q,
    W,
    A,
    U,
    V,
    G,
    ae,
    O,
    J,
    P,
    M,
    j,
    ie,
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
    bi,
    i
  ];
}
class xg extends Hg {
  constructor(e) {
    super(), Ug(
      this,
      e,
      Qg,
      Jg,
      Og,
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
  SvelteComponent: $g,
  attr: Zl,
  detach: Zr,
  element: Gr,
  init: e2,
  insert: Kr,
  noop: Ia,
  safe_not_equal: t2,
  src_url_equal: Ta,
  toggle_class: Ut
} = window.__gradio__svelte__internal;
function Ha(l) {
  let e, t;
  return {
    c() {
      e = Gr("img"), Ta(e.src, t = /*value*/
      l[0].url) || Zl(e, "src", t), Zl(e, "alt", "");
    },
    m(n, i) {
      Kr(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Ta(e.src, t = /*value*/
      n[0].url) && Zl(e, "src", t);
    },
    d(n) {
      n && Zr(e);
    }
  };
}
function n2(l) {
  let e, t = (
    /*value*/
    l[0] && Ha(l)
  );
  return {
    c() {
      e = Gr("div"), t && t.c(), Zl(e, "class", "container svelte-1sgcyba"), Ut(
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
      Kr(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Ha(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
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
    i: Ia,
    o: Ia,
    d(n) {
      n && Zr(e), t && t.d();
    }
  };
}
function l2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: s = !1 } = e;
  return l.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, i = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, i, s];
}
class L2 extends $g {
  constructor(e) {
    super(), e2(this, e, l2, n2, t2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: i2,
  add_flush_callback: Xa,
  assign: s2,
  bind: Ya,
  binding_callbacks: Fa,
  check_outros: o2,
  create_component: bn,
  destroy_component: wn,
  detach: Jr,
  empty: a2,
  flush: Z,
  get_spread_object: r2,
  get_spread_update: f2,
  group_outros: c2,
  init: u2,
  insert: Qr,
  mount_component: pn,
  safe_not_equal: _2,
  space: d2,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function h2(l) {
  let e, t;
  return e = new Jc({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [b2] },
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
function m2(l) {
  let e, t;
  return e = new er({
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
function g2(l) {
  let e, t;
  return e = new er({
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
function b2(l) {
  let e, t;
  return e = new Za({}), {
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
function w2(l) {
  let e, t, n, i;
  const s = [g2, m2, h2], o = [];
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
      t.c(), n = a2();
    },
    m(a, f) {
      o[e].m(a, f), Qr(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (c2(), At(o[c], 1, 1, () => {
        o[c] = null;
      }), o2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      At(t), i = !1;
    },
    d(a) {
      a && Jr(n), o[e].d(a);
    }
  };
}
function p2(l) {
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
    a = s2(a, r[_]);
  e = new l1({ props: a });
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
    $$slots: { default: [w2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[33] !== void 0 && (u.active_source = /*active_source*/
    l[33]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new xg({ props: u }), Fa.push(() => Ya(n, "active_source", f)), Fa.push(() => Ya(n, "value", c)), n.$on(
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
        bn(e.$$.fragment), t = d2(), bn(n.$$.fragment);
      },
      m(_, d) {
        pn(e, _, d), Qr(_, t, d), pn(n, _, d), o = !0;
      },
      p(_, d) {
        const g = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        1 ? f2(r, [
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
          2 && r2(
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
        _[33], Xa(() => i = !1)), !s && d[0] & /*value*/
        1 && (s = !0, m.value = /*value*/
        _[0], Xa(() => s = !1)), n.$set(m);
      },
      i(_) {
        o || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        At(e.$$.fragment, _), At(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && Jr(t), wn(e, _), wn(n, _);
      }
    }
  );
}
function v2(l) {
  let e, t;
  return e = new kf({
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
      $$slots: { default: [p2] },
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
function k2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: g = null } = e, { min_width: m = void 0 } = e, { loading_status: b } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: h } = e, { show_clear_button: v } = e, { interactive: y } = e, { boxes_alpha: k } = e, { label_list: S } = e, { label_colors: C } = e, { box_min_size: E } = e, { handle_size: q } = e, { box_thickness: W } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: U } = e, { single_box: V } = e, { show_remove_button: G } = e, { handles_cursor: J } = e, { use_default_label: ae } = e, { gradio: R } = e, P, M = null;
  function j(D) {
    M = D, t(33, M);
  }
  function O(D) {
    o = D, t(0, o);
  }
  const ie = () => R.dispatch("change"), be = () => R.dispatch("edit"), I = () => {
    R.dispatch("clear");
  }, Ge = ({ detail: D }) => t(32, P = D), L = () => R.dispatch("upload"), X = ({ detail: D }) => R.dispatch("select", D), Q = ({ detail: D }) => R.dispatch("share", D), te = ({ detail: D }) => {
    t(1, b = b || {}), t(1, b.status = "error", b), R.dispatch("error", D);
  };
  return l.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, i = D.elem_classes), "visible" in D && t(4, s = D.visible), "value" in D && t(0, o = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, f = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, _ = D._selectable), "container" in D && t(11, d = D.container), "scale" in D && t(12, g = D.scale), "min_width" in D && t(13, m = D.min_width), "loading_status" in D && t(1, b = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, w = D.show_download_button), "show_share_button" in D && t(16, h = D.show_share_button), "show_clear_button" in D && t(17, v = D.show_clear_button), "interactive" in D && t(18, y = D.interactive), "boxes_alpha" in D && t(19, k = D.boxes_alpha), "label_list" in D && t(20, S = D.label_list), "label_colors" in D && t(21, C = D.label_colors), "box_min_size" in D && t(22, E = D.box_min_size), "handle_size" in D && t(23, q = D.handle_size), "box_thickness" in D && t(24, W = D.box_thickness), "box_selected_thickness" in D && t(25, A = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, U = D.disable_edit_boxes), "single_box" in D && t(27, V = D.single_box), "show_remove_button" in D && t(28, G = D.show_remove_button), "handles_cursor" in D && t(29, J = D.handles_cursor), "use_default_label" in D && t(30, ae = D.use_default_label), "gradio" in D && t(31, R = D.gradio);
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
    v,
    y,
    k,
    S,
    C,
    E,
    q,
    W,
    A,
    U,
    V,
    G,
    J,
    ae,
    R,
    P,
    M,
    j,
    O,
    ie,
    be,
    I,
    Ge,
    L,
    X,
    Q,
    te
  ];
}
class E2 extends i2 {
  constructor(e) {
    super(), u2(
      this,
      e,
      k2,
      v2,
      _2,
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
  L2 as BaseExample,
  E2 as default
};
