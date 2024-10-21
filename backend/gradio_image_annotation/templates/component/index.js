const {
  SvelteComponent: Lr,
  assign: Rr,
  create_slot: Dr,
  detach: Tr,
  element: Ir,
  get_all_dirty_from_scope: Hr,
  get_slot_changes: jr,
  get_spread_update: Fr,
  init: Xr,
  insert: Yr,
  safe_not_equal: Wr,
  set_dynamic_element_data: Bo,
  set_style: Re,
  toggle_class: tt,
  transition_in: wa,
  transition_out: pa,
  update_slot_base: Or
} = window.__gradio__svelte__internal;
function Ur(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = Dr(
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
    r = Rr(r, s[a]);
  return {
    c() {
      e = Ir(
        /*tag*/
        l[14]
      ), o && o.c(), Bo(
        /*tag*/
        l[14]
      )(e, r), tt(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), tt(
        e,
        "padded",
        /*padding*/
        l[6]
      ), tt(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), tt(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), tt(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), Re(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), Re(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), Re(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), Re(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), Re(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), Re(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), Re(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Yr(a, e, f), o && o.m(e, null), n = !0;
    },
    p(a, f) {
      o && o.p && (!n || f & /*$$scope*/
      131072) && Or(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? jr(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : Hr(
          /*$$scope*/
          a[17]
        ),
        null
      ), Bo(
        /*tag*/
        a[14]
      )(e, r = Fr(s, [
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
      ])), tt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), tt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), tt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), tt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), tt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Re(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Re(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Re(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Re(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Re(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Re(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (wa(o, a), n = !0);
    },
    o(a) {
      pa(o, a), n = !1;
    },
    d(a) {
      a && Tr(e), o && o.d(a);
    }
  };
}
function Nr(l) {
  let e, t = (
    /*tag*/
    l[14] && Ur(l)
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
      e || (wa(t, n), e = !0);
    },
    o(n) {
      pa(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Vr(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: u = "base" } = e, { padding: c = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: g = !1 } = e, { container: b = !0 } = e, { visible: p = !0 } = e, { allow_overflow: w = !0 } = e, { scale: h = null } = e, { min_width: m = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const C = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return l.$$set = (v) => {
    "height" in v && t(0, o = v.height), "width" in v && t(1, s = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, a = v.elem_classes), "variant" in v && t(4, f = v.variant), "border_mode" in v && t(5, u = v.border_mode), "padding" in v && t(6, c = v.padding), "type" in v && t(16, _ = v.type), "test_id" in v && t(7, d = v.test_id), "explicit_call" in v && t(8, g = v.explicit_call), "container" in v && t(9, b = v.container), "visible" in v && t(10, p = v.visible), "allow_overflow" in v && t(11, w = v.allow_overflow), "scale" in v && t(12, h = v.scale), "min_width" in v && t(13, m = v.min_width), "$$scope" in v && t(17, i = v.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    d,
    g,
    b,
    p,
    w,
    h,
    m,
    k,
    C,
    _,
    i,
    n
  ];
}
class Pr extends Lr {
  constructor(e) {
    super(), Xr(this, e, Vr, Nr, Wr, {
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
  SvelteComponent: Zr,
  attr: Gr,
  create_slot: Kr,
  detach: Jr,
  element: Qr,
  get_all_dirty_from_scope: xr,
  get_slot_changes: $r,
  init: ef,
  insert: tf,
  safe_not_equal: nf,
  transition_in: lf,
  transition_out: of,
  update_slot_base: sf
} = window.__gradio__svelte__internal;
function af(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Kr(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Qr("div"), i && i.c(), Gr(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      tf(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && sf(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? $r(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : xr(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (lf(i, o), t = !0);
    },
    o(o) {
      of(i, o), t = !1;
    },
    d(o) {
      o && Jr(e), i && i.d(o);
    }
  };
}
function rf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class ff extends Zr {
  constructor(e) {
    super(), ef(this, e, rf, af, nf, {});
  }
}
const {
  SvelteComponent: uf,
  attr: Eo,
  check_outros: cf,
  create_component: _f,
  create_slot: df,
  destroy_component: hf,
  detach: Ml,
  element: mf,
  empty: gf,
  get_all_dirty_from_scope: bf,
  get_slot_changes: wf,
  group_outros: pf,
  init: vf,
  insert: Al,
  mount_component: kf,
  safe_not_equal: yf,
  set_data: Cf,
  space: Sf,
  text: zf,
  toggle_class: hn,
  transition_in: Un,
  transition_out: Ll,
  update_slot_base: qf
} = window.__gradio__svelte__internal;
function Mo(l) {
  let e, t;
  return e = new ff({
    props: {
      $$slots: { default: [Bf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, i) {
      kf(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ll(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hf(e, n);
    }
  };
}
function Bf(l) {
  let e;
  return {
    c() {
      e = zf(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Al(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Cf(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ml(e);
    }
  };
}
function Ef(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = df(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && Mo(l)
  );
  return {
    c() {
      e = mf("span"), s && s.c(), t = Sf(), r && r.c(), n = gf(), Eo(e, "data-testid", "block-info"), Eo(e, "class", "svelte-22c38v"), hn(e, "sr-only", !/*show_label*/
      l[0]), hn(e, "hide", !/*show_label*/
      l[0]), hn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      Al(a, e, f), s && s.m(e, null), Al(a, t, f), r && r.m(a, f), Al(a, n, f), i = !0;
    },
    p(a, [f]) {
      s && s.p && (!i || f & /*$$scope*/
      8) && qf(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? wf(
          o,
          /*$$scope*/
          a[3],
          f,
          null
        ) : bf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && hn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && hn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && hn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && Un(r, 1)) : (r = Mo(a), r.c(), Un(r, 1), r.m(n.parentNode, n)) : r && (pf(), Ll(r, 1, 1, () => {
        r = null;
      }), cf());
    },
    i(a) {
      i || (Un(s, a), Un(r), i = !0);
    },
    o(a) {
      Ll(s, a), Ll(r), i = !1;
    },
    d(a) {
      a && (Ml(e), Ml(t), Ml(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Mf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class va extends uf {
  constructor(e) {
    super(), vf(this, e, Mf, Ef, yf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Af,
  append: ci,
  attr: dl,
  create_component: Lf,
  destroy_component: Rf,
  detach: Df,
  element: Ao,
  init: Tf,
  insert: If,
  mount_component: Hf,
  safe_not_equal: jf,
  set_data: Ff,
  space: Xf,
  text: Yf,
  toggle_class: Ct,
  transition_in: Wf,
  transition_out: Of
} = window.__gradio__svelte__internal;
function Uf(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Ao("label"), t = Ao("span"), Lf(n.$$.fragment), i = Xf(), o = Yf(
        /*label*/
        l[0]
      ), dl(t, "class", "svelte-9gxdi0"), dl(e, "for", ""), dl(e, "data-testid", "block-label"), dl(e, "class", "svelte-9gxdi0"), Ct(e, "hide", !/*show_label*/
      l[2]), Ct(e, "sr-only", !/*show_label*/
      l[2]), Ct(
        e,
        "float",
        /*float*/
        l[4]
      ), Ct(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      If(r, e, a), ci(e, t), Hf(n, t, null), ci(e, i), ci(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Ff(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Ct(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Ct(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Ct(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Ct(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Wf(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Of(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Df(e), Rf(n);
    }
  };
}
function Nf(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class Vf extends Af {
  constructor(e) {
    super(), Tf(this, e, Nf, Uf, jf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Pf,
  append: Ji,
  attr: ht,
  bubble: Zf,
  create_component: Gf,
  destroy_component: Kf,
  detach: ka,
  element: Qi,
  init: Jf,
  insert: ya,
  listen: Qf,
  mount_component: xf,
  safe_not_equal: $f,
  set_data: eu,
  set_style: mn,
  space: tu,
  text: nu,
  toggle_class: ye,
  transition_in: lu,
  transition_out: iu
} = window.__gradio__svelte__internal;
function Lo(l) {
  let e, t;
  return {
    c() {
      e = Qi("span"), t = nu(
        /*label*/
        l[1]
      ), ht(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      ya(n, e, i), Ji(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && eu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ka(e);
    }
  };
}
function ou(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && Lo(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = Qi("button"), a && a.c(), t = tu(), n = Qi("div"), Gf(i.$$.fragment), ht(n, "class", "svelte-1lrphxw"), ye(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), ye(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), ye(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], ht(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), ht(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), ht(
        e,
        "title",
        /*label*/
        l[1]
      ), ht(e, "class", "svelte-1lrphxw"), ye(
        e,
        "pending",
        /*pending*/
        l[3]
      ), ye(
        e,
        "padded",
        /*padded*/
        l[5]
      ), ye(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), ye(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), mn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), mn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), mn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, u) {
      ya(f, e, u), a && a.m(e, null), Ji(e, t), Ji(e, n), xf(i, n, null), o = !0, s || (r = Qf(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(f, [u]) {
      /*show_label*/
      f[2] ? a ? a.p(f, u) : (a = Lo(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || u & /*size*/
      16) && ye(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!o || u & /*size*/
      16) && ye(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!o || u & /*size*/
      16) && ye(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!o || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!o || u & /*label*/
      2) && ht(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!o || u & /*hasPopup*/
      256) && ht(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!o || u & /*label*/
      2) && ht(
        e,
        "title",
        /*label*/
        f[1]
      ), (!o || u & /*pending*/
      8) && ye(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!o || u & /*padded*/
      32) && ye(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!o || u & /*highlight*/
      64) && ye(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!o || u & /*transparent*/
      512) && ye(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), u & /*disabled, _color*/
      4224 && mn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && mn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), u & /*offset*/
      2048 && mn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      o || (lu(i.$$.fragment, f), o = !0);
    },
    o(f) {
      iu(i.$$.fragment, f), o = !1;
    },
    d(f) {
      f && ka(e), a && a.d(), Kf(i), s = !1, r();
    }
  };
}
function su(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: u = !1 } = e, { disabled: c = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: b = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function w(h) {
    Zf.call(this, l, h);
  }
  return l.$$set = (h) => {
    "Icon" in h && t(0, i = h.Icon), "label" in h && t(1, o = h.label), "show_label" in h && t(2, s = h.show_label), "pending" in h && t(3, r = h.pending), "size" in h && t(4, a = h.size), "padded" in h && t(5, f = h.padded), "highlight" in h && t(6, u = h.highlight), "disabled" in h && t(7, c = h.disabled), "hasPopup" in h && t(8, _ = h.hasPopup), "color" in h && t(13, d = h.color), "transparent" in h && t(9, g = h.transparent), "background" in h && t(10, b = h.background), "offset" in h && t(11, p = h.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = u ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    g,
    b,
    p,
    n,
    d,
    w
  ];
}
class xl extends Pf {
  constructor(e) {
    super(), Jf(this, e, su, ou, $f, {
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
  SvelteComponent: au,
  append: ru,
  attr: _i,
  binding_callbacks: fu,
  create_slot: uu,
  detach: cu,
  element: Ro,
  get_all_dirty_from_scope: _u,
  get_slot_changes: du,
  init: hu,
  insert: mu,
  safe_not_equal: gu,
  toggle_class: St,
  transition_in: bu,
  transition_out: wu,
  update_slot_base: pu
} = window.__gradio__svelte__internal;
function vu(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = uu(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = Ro("div"), t = Ro("div"), o && o.c(), _i(t, "class", "icon svelte-3w3rth"), _i(e, "class", "empty svelte-3w3rth"), _i(e, "aria-label", "Empty value"), St(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), St(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), St(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), St(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      mu(s, e, r), ru(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && pu(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? du(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : _u(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && St(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && St(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && St(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && St(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (bu(o, s), n = !0);
    },
    o(s) {
      wu(o, s), n = !1;
    },
    d(s) {
      s && cu(e), o && o.d(s), l[6](null);
    }
  };
}
function ku(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(c) {
    var _;
    if (!c) return !1;
    const { height: d } = c.getBoundingClientRect(), { height: g } = ((_ = c.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > g + 2;
  }
  function u(c) {
    fu[c ? "unshift" : "push"](() => {
      a = c, t(2, a);
    });
  }
  return l.$$set = (c) => {
    "size" in c && t(0, s = c.size), "unpadded_box" in c && t(1, r = c.unpadded_box), "$$scope" in c && t(4, o = c.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [s, r, a, n, o, i, u];
}
class yu extends au {
  constructor(e) {
    super(), hu(this, e, ku, vu, gu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Cu,
  append: Do,
  attr: Ce,
  detach: Su,
  init: zu,
  insert: qu,
  noop: di,
  safe_not_equal: Bu,
  svg_element: hi
} = window.__gradio__svelte__internal;
function Eu(l) {
  let e, t, n;
  return {
    c() {
      e = hi("svg"), t = hi("path"), n = hi("circle"), Ce(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ce(n, "cx", "12"), Ce(n, "cy", "13"), Ce(n, "r", "4"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "100%"), Ce(e, "height", "100%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "1.5"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-camera");
    },
    m(i, o) {
      qu(i, e, o), Do(e, t), Do(e, n);
    },
    p: di,
    i: di,
    o: di,
    d(i) {
      i && Su(e);
    }
  };
}
class Mu extends Cu {
  constructor(e) {
    super(), zu(this, e, null, Eu, Bu, {});
  }
}
const {
  SvelteComponent: Au,
  append: Lu,
  attr: Ve,
  detach: Ru,
  init: Du,
  insert: Tu,
  noop: mi,
  safe_not_equal: Iu,
  svg_element: To
} = window.__gradio__svelte__internal;
function Hu(l) {
  let e, t;
  return {
    c() {
      e = To("svg"), t = To("circle"), Ve(t, "cx", "12"), Ve(t, "cy", "12"), Ve(t, "r", "10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "stroke-width", "1.5"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-circle");
    },
    m(n, i) {
      Tu(n, e, i), Lu(e, t);
    },
    p: mi,
    i: mi,
    o: mi,
    d(n) {
      n && Ru(e);
    }
  };
}
class ju extends Au {
  constructor(e) {
    super(), Du(this, e, null, Hu, Iu, {});
  }
}
const {
  SvelteComponent: Fu,
  append: gi,
  attr: Pe,
  detach: Xu,
  init: Yu,
  insert: Wu,
  noop: bi,
  safe_not_equal: Ou,
  set_style: nt,
  svg_element: hl
} = window.__gradio__svelte__internal;
function Uu(l) {
  let e, t, n, i;
  return {
    c() {
      e = hl("svg"), t = hl("g"), n = hl("path"), i = hl("path"), Pe(n, "d", "M18,6L6.087,17.913"), nt(n, "fill", "none"), nt(n, "fill-rule", "nonzero"), nt(n, "stroke-width", "2px"), Pe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Pe(i, "d", "M4.364,4.364L19.636,19.636"), nt(i, "fill", "none"), nt(i, "fill-rule", "nonzero"), nt(i, "stroke-width", "2px"), Pe(e, "width", "100%"), Pe(e, "height", "100%"), Pe(e, "viewBox", "0 0 24 24"), Pe(e, "version", "1.1"), Pe(e, "xmlns", "http://www.w3.org/2000/svg"), Pe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Pe(e, "xml:space", "preserve"), Pe(e, "stroke", "currentColor"), nt(e, "fill-rule", "evenodd"), nt(e, "clip-rule", "evenodd"), nt(e, "stroke-linecap", "round"), nt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Wu(o, e, s), gi(e, t), gi(t, n), gi(e, i);
    },
    p: bi,
    i: bi,
    o: bi,
    d(o) {
      o && Xu(e);
    }
  };
}
class Ca extends Fu {
  constructor(e) {
    super(), Yu(this, e, null, Uu, Ou, {});
  }
}
const {
  SvelteComponent: Nu,
  append: Vu,
  attr: jn,
  detach: Pu,
  init: Zu,
  insert: Gu,
  noop: wi,
  safe_not_equal: Ku,
  svg_element: Io
} = window.__gradio__svelte__internal;
function Ju(l) {
  let e, t;
  return {
    c() {
      e = Io("svg"), t = Io("path"), jn(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), jn(t, "fill", "currentColor"), jn(e, "id", "icon"), jn(e, "xmlns", "http://www.w3.org/2000/svg"), jn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Gu(n, e, i), Vu(e, t);
    },
    p: wi,
    i: wi,
    o: wi,
    d(n) {
      n && Pu(e);
    }
  };
}
class Qu extends Nu {
  constructor(e) {
    super(), Zu(this, e, null, Ju, Ku, {});
  }
}
const {
  SvelteComponent: xu,
  append: $u,
  attr: gn,
  detach: ec,
  init: tc,
  insert: nc,
  noop: pi,
  safe_not_equal: lc,
  svg_element: Ho
} = window.__gradio__svelte__internal;
function ic(l) {
  let e, t;
  return {
    c() {
      e = Ho("svg"), t = Ho("path"), gn(t, "fill", "currentColor"), gn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), gn(e, "xmlns", "http://www.w3.org/2000/svg"), gn(e, "width", "100%"), gn(e, "height", "100%"), gn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      nc(n, e, i), $u(e, t);
    },
    p: pi,
    i: pi,
    o: pi,
    d(n) {
      n && ec(e);
    }
  };
}
class oc extends xu {
  constructor(e) {
    super(), tc(this, e, null, ic, lc, {});
  }
}
const {
  SvelteComponent: sc,
  append: ac,
  attr: bn,
  detach: rc,
  init: fc,
  insert: uc,
  noop: vi,
  safe_not_equal: cc,
  svg_element: jo
} = window.__gradio__svelte__internal;
function _c(l) {
  let e, t;
  return {
    c() {
      e = jo("svg"), t = jo("path"), bn(t, "d", "M5 8l4 4 4-4z"), bn(e, "class", "dropdown-arrow svelte-145leq6"), bn(e, "xmlns", "http://www.w3.org/2000/svg"), bn(e, "width", "100%"), bn(e, "height", "100%"), bn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      uc(n, e, i), ac(e, t);
    },
    p: vi,
    i: vi,
    o: vi,
    d(n) {
      n && rc(e);
    }
  };
}
class go extends sc {
  constructor(e) {
    super(), fc(this, e, null, _c, cc, {});
  }
}
const {
  SvelteComponent: dc,
  append: ki,
  attr: oe,
  detach: hc,
  init: mc,
  insert: gc,
  noop: yi,
  safe_not_equal: bc,
  svg_element: ml
} = window.__gradio__svelte__internal;
function wc(l) {
  let e, t, n, i;
  return {
    c() {
      e = ml("svg"), t = ml("rect"), n = ml("circle"), i = ml("polyline"), oe(t, "x", "3"), oe(t, "y", "3"), oe(t, "width", "18"), oe(t, "height", "18"), oe(t, "rx", "2"), oe(t, "ry", "2"), oe(n, "cx", "8.5"), oe(n, "cy", "8.5"), oe(n, "r", "1.5"), oe(i, "points", "21 15 16 10 5 21"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 24 24"), oe(e, "fill", "none"), oe(e, "stroke", "currentColor"), oe(e, "stroke-width", "1.5"), oe(e, "stroke-linecap", "round"), oe(e, "stroke-linejoin", "round"), oe(e, "class", "feather feather-image");
    },
    m(o, s) {
      gc(o, e, s), ki(e, t), ki(e, n), ki(e, i);
    },
    p: yi,
    i: yi,
    o: yi,
    d(o) {
      o && hc(e);
    }
  };
}
let Sa = class extends dc {
  constructor(e) {
    super(), mc(this, e, null, wc, bc, {});
  }
};
const {
  SvelteComponent: pc,
  append: vc,
  attr: gl,
  detach: kc,
  init: yc,
  insert: Cc,
  noop: Ci,
  safe_not_equal: Sc,
  svg_element: Fo
} = window.__gradio__svelte__internal;
function zc(l) {
  let e, t;
  return {
    c() {
      e = Fo("svg"), t = Fo("path"), gl(t, "fill", "currentColor"), gl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), gl(e, "xmlns", "http://www.w3.org/2000/svg"), gl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      Cc(n, e, i), vc(e, t);
    },
    p: Ci,
    i: Ci,
    o: Ci,
    d(n) {
      n && kc(e);
    }
  };
}
class za extends pc {
  constructor(e) {
    super(), yc(this, e, null, zc, Sc, {});
  }
}
const {
  SvelteComponent: qc,
  append: bl,
  attr: se,
  detach: Bc,
  init: Ec,
  insert: Mc,
  noop: Si,
  safe_not_equal: Ac,
  svg_element: Fn
} = window.__gradio__svelte__internal;
function Lc(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = Fn("svg"), t = Fn("path"), n = Fn("path"), i = Fn("line"), o = Fn("line"), se(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), se(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), se(i, "x1", "12"), se(i, "y1", "19"), se(i, "x2", "12"), se(i, "y2", "23"), se(o, "x1", "8"), se(o, "y1", "23"), se(o, "x2", "16"), se(o, "y2", "23"), se(e, "xmlns", "http://www.w3.org/2000/svg"), se(e, "width", "100%"), se(e, "height", "100%"), se(e, "viewBox", "0 0 24 24"), se(e, "fill", "none"), se(e, "stroke", "currentColor"), se(e, "stroke-width", "2"), se(e, "stroke-linecap", "round"), se(e, "stroke-linejoin", "round"), se(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Mc(s, e, r), bl(e, t), bl(e, n), bl(e, i), bl(e, o);
    },
    p: Si,
    i: Si,
    o: Si,
    d(s) {
      s && Bc(e);
    }
  };
}
class Rc extends qc {
  constructor(e) {
    super(), Ec(this, e, null, Lc, Ac, {});
  }
}
const {
  SvelteComponent: Dc,
  append: Xo,
  attr: Fe,
  detach: Tc,
  init: Ic,
  insert: Hc,
  noop: zi,
  safe_not_equal: jc,
  set_style: Fc,
  svg_element: qi
} = window.__gradio__svelte__internal;
function Xc(l) {
  let e, t, n;
  return {
    c() {
      e = qi("svg"), t = qi("polyline"), n = qi("path"), Fe(t, "points", "1 4 1 10 7 10"), Fe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "width", "100%"), Fe(e, "height", "100%"), Fe(e, "viewBox", "0 0 24 24"), Fe(e, "fill", "none"), Fe(e, "stroke", "currentColor"), Fe(e, "stroke-width", "2"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round"), Fe(e, "class", "feather feather-rotate-ccw"), Fc(e, "transform", "rotateY(180deg)");
    },
    m(i, o) {
      Hc(i, e, o), Xo(e, t), Xo(e, n);
    },
    p: zi,
    i: zi,
    o: zi,
    d(i) {
      i && Tc(e);
    }
  };
}
class Yc extends Dc {
  constructor(e) {
    super(), Ic(this, e, null, Xc, jc, {});
  }
}
const {
  SvelteComponent: Wc,
  append: Oc,
  attr: Se,
  detach: Uc,
  init: Nc,
  insert: Vc,
  noop: Bi,
  safe_not_equal: Pc,
  svg_element: Yo
} = window.__gradio__svelte__internal;
function Zc(l) {
  let e, t;
  return {
    c() {
      e = Yo("svg"), t = Yo("rect"), Se(t, "x", "3"), Se(t, "y", "3"), Se(t, "width", "18"), Se(t, "height", "18"), Se(t, "rx", "2"), Se(t, "ry", "2"), Se(e, "xmlns", "http://www.w3.org/2000/svg"), Se(e, "width", "100%"), Se(e, "height", "100%"), Se(e, "viewBox", "0 0 24 24"), Se(e, "stroke-width", "1.5"), Se(e, "stroke-linecap", "round"), Se(e, "stroke-linejoin", "round"), Se(e, "class", "feather feather-square");
    },
    m(n, i) {
      Vc(n, e, i), Oc(e, t);
    },
    p: Bi,
    i: Bi,
    o: Bi,
    d(n) {
      n && Uc(e);
    }
  };
}
class Gc extends Wc {
  constructor(e) {
    super(), Nc(this, e, null, Zc, Pc, {});
  }
}
const {
  SvelteComponent: Kc,
  append: Wo,
  attr: Xe,
  detach: Jc,
  init: Qc,
  insert: xc,
  noop: Ei,
  safe_not_equal: $c,
  svg_element: Mi
} = window.__gradio__svelte__internal;
function e_(l) {
  let e, t, n;
  return {
    c() {
      e = Mi("svg"), t = Mi("polyline"), n = Mi("path"), Xe(t, "points", "1 4 1 10 7 10"), Xe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Xe(e, "xmlns", "http://www.w3.org/2000/svg"), Xe(e, "width", "100%"), Xe(e, "height", "100%"), Xe(e, "viewBox", "0 0 24 24"), Xe(e, "fill", "none"), Xe(e, "stroke", "currentColor"), Xe(e, "stroke-width", "2"), Xe(e, "stroke-linecap", "round"), Xe(e, "stroke-linejoin", "round"), Xe(e, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      xc(i, e, o), Wo(e, t), Wo(e, n);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(i) {
      i && Jc(e);
    }
  };
}
class t_ extends Kc {
  constructor(e) {
    super(), Qc(this, e, null, e_, $c, {});
  }
}
const {
  SvelteComponent: n_,
  append: Ai,
  attr: ge,
  detach: l_,
  init: i_,
  insert: o_,
  noop: Li,
  safe_not_equal: s_,
  svg_element: wl
} = window.__gradio__svelte__internal;
function a_(l) {
  let e, t, n, i;
  return {
    c() {
      e = wl("svg"), t = wl("path"), n = wl("polyline"), i = wl("line"), ge(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ge(n, "points", "17 8 12 3 7 8"), ge(i, "x1", "12"), ge(i, "y1", "3"), ge(i, "x2", "12"), ge(i, "y2", "15"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "width", "90%"), ge(e, "height", "90%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "fill", "none"), ge(e, "stroke", "currentColor"), ge(e, "stroke-width", "2"), ge(e, "stroke-linecap", "round"), ge(e, "stroke-linejoin", "round"), ge(e, "class", "feather feather-upload");
    },
    m(o, s) {
      o_(o, e, s), Ai(e, t), Ai(e, n), Ai(e, i);
    },
    p: Li,
    i: Li,
    o: Li,
    d(o) {
      o && l_(e);
    }
  };
}
let qa = class extends n_ {
  constructor(e) {
    super(), i_(this, e, null, a_, s_, {});
  }
};
const {
  SvelteComponent: r_,
  append: Oo,
  attr: zt,
  detach: f_,
  init: u_,
  insert: c_,
  noop: Ri,
  safe_not_equal: __,
  svg_element: Di
} = window.__gradio__svelte__internal;
function d_(l) {
  let e, t, n;
  return {
    c() {
      e = Di("svg"), t = Di("path"), n = Di("path"), zt(t, "fill", "currentColor"), zt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), zt(n, "fill", "currentColor"), zt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), zt(e, "xmlns", "http://www.w3.org/2000/svg"), zt(e, "width", "100%"), zt(e, "height", "100%"), zt(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      c_(i, e, o), Oo(e, t), Oo(e, n);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(i) {
      i && f_(e);
    }
  };
}
let Ba = class extends r_ {
  constructor(e) {
    super(), u_(this, e, null, d_, __, {});
  }
};
const h_ = [
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
], Uo = {
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
h_.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: Uo[e][t],
    secondary: Uo[e][n]
  }
}), {});
class Rl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function m_(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Rl("Must be on Spaces to share.");
  let t, n, i;
  t = g_(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
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
      throw new Rl(`Upload failed: ${f.error}`);
    }
    throw new Rl("Upload failed.");
  }
  return await s.text();
}
function g_(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: b_,
  create_component: w_,
  destroy_component: p_,
  init: v_,
  mount_component: k_,
  safe_not_equal: y_,
  transition_in: C_,
  transition_out: S_
} = window.__gradio__svelte__internal, { createEventDispatcher: z_ } = window.__gradio__svelte__internal;
function q_(l) {
  let e, t;
  return e = new xl({
    props: {
      Icon: Qu,
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
      w_(e.$$.fragment);
    },
    m(n, i) {
      k_(e, n, i), t = !0;
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
      t || (C_(e.$$.fragment, n), t = !0);
    },
    o(n) {
      S_(e.$$.fragment, n), t = !1;
    },
    d(n) {
      p_(e, n);
    }
  };
}
function B_(l, e, t) {
  const n = z_();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(o);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let u = f instanceof Rl ? f.message : "Share failed.";
      n("error", u);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, o = f.value), "i18n" in f && t(2, s = f.i18n);
  }, [i, o, s, r, n, a];
}
class E_ extends b_ {
  constructor(e) {
    super(), v_(this, e, B_, q_, y_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: M_,
  append: xt,
  attr: xi,
  check_outros: A_,
  create_component: Ea,
  destroy_component: Ma,
  detach: Dl,
  element: $i,
  group_outros: L_,
  init: R_,
  insert: Tl,
  mount_component: Aa,
  safe_not_equal: D_,
  set_data: eo,
  space: to,
  text: Nn,
  toggle_class: No,
  transition_in: Xl,
  transition_out: Yl
} = window.__gradio__svelte__internal;
function T_(l) {
  let e, t;
  return e = new qa({}), {
    c() {
      Ea(e.$$.fragment);
    },
    m(n, i) {
      Aa(e, n, i), t = !0;
    },
    i(n) {
      t || (Xl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ma(e, n);
    }
  };
}
function I_(l) {
  let e, t;
  return e = new za({}), {
    c() {
      Ea(e.$$.fragment);
    },
    m(n, i) {
      Aa(e, n, i), t = !0;
    },
    i(n) {
      t || (Xl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ma(e, n);
    }
  };
}
function Vo(l) {
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
      e = $i("span"), t = Nn("- "), i = Nn(n), o = Nn(" -"), s = to(), a = Nn(r), xi(e, "class", "or svelte-kzcjhc");
    },
    m(f, u) {
      Tl(f, e, u), xt(e, t), xt(e, i), xt(e, o), Tl(f, s, u), Tl(f, a, u);
    },
    p(f, u) {
      u & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && eo(i, n), u & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && eo(a, r);
    },
    d(f) {
      f && (Dl(e), Dl(s), Dl(a));
    }
  };
}
function H_(l) {
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
  const u = [I_, T_], c = [];
  function _(g, b) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = c[n] = u[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && Vo(l)
  );
  return {
    c() {
      e = $i("div"), t = $i("span"), i.c(), o = to(), r = Nn(s), a = to(), d && d.c(), xi(t, "class", "icon-wrap svelte-kzcjhc"), No(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), xi(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, b) {
      Tl(g, e, b), xt(e, t), c[n].m(t, null), xt(e, o), xt(e, r), xt(e, a), d && d.m(e, null), f = !0;
    },
    p(g, [b]) {
      let p = n;
      n = _(g), n !== p && (L_(), Yl(c[p], 1, 1, () => {
        c[p] = null;
      }), A_(), i = c[n], i || (i = c[n] = u[n](g), i.c()), Xl(i, 1), i.m(t, null)), (!f || b & /*hovered*/
      16) && No(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!f || b & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && eo(r, s), /*mode*/
      g[3] !== "short" ? d ? d.p(g, b) : (d = Vo(g), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      f || (Xl(i), f = !0);
    },
    o(g) {
      Yl(i), f = !1;
    },
    d(g) {
      g && Dl(e), c[n].d(), d && d.d();
    }
  };
}
function j_(l, e, t) {
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
class La extends M_ {
  constructor(e) {
    super(), R_(this, e, j_, H_, D_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: F_,
  append: Ti,
  attr: at,
  check_outros: Vn,
  create_component: $l,
  destroy_component: ei,
  detach: En,
  element: rl,
  empty: X_,
  group_outros: Pn,
  init: Y_,
  insert: Mn,
  listen: ti,
  mount_component: ni,
  safe_not_equal: W_,
  space: Ii,
  toggle_class: Ht,
  transition_in: re,
  transition_out: qe
} = window.__gradio__svelte__internal;
function Po(l) {
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
  ), f, u = t && Zo(l), c = i && Go(l), _ = s && Ko(l), d = a && Jo(l);
  return {
    c() {
      e = rl("span"), u && u.c(), n = Ii(), c && c.c(), o = Ii(), _ && _.c(), r = Ii(), d && d.c(), at(e, "class", "source-selection svelte-1jp3vgd"), at(e, "data-testid", "source-select");
    },
    m(g, b) {
      Mn(g, e, b), u && u.m(e, null), Ti(e, n), c && c.m(e, null), Ti(e, o), _ && _.m(e, null), Ti(e, r), d && d.m(e, null), f = !0;
    },
    p(g, b) {
      b & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? u ? (u.p(g, b), b & /*sources*/
      2 && re(u, 1)) : (u = Zo(g), u.c(), re(u, 1), u.m(e, n)) : u && (Pn(), qe(u, 1, 1, () => {
        u = null;
      }), Vn()), b & /*sources*/
      2 && (i = /*sources*/
      g[1].includes("microphone")), i ? c ? (c.p(g, b), b & /*sources*/
      2 && re(c, 1)) : (c = Go(g), c.c(), re(c, 1), c.m(e, o)) : c && (Pn(), qe(c, 1, 1, () => {
        c = null;
      }), Vn()), b & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("webcam")), s ? _ ? (_.p(g, b), b & /*sources*/
      2 && re(_, 1)) : (_ = Ko(g), _.c(), re(_, 1), _.m(e, r)) : _ && (Pn(), qe(_, 1, 1, () => {
        _ = null;
      }), Vn()), b & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? d ? (d.p(g, b), b & /*sources*/
      2 && re(d, 1)) : (d = Jo(g), d.c(), re(d, 1), d.m(e, null)) : d && (Pn(), qe(d, 1, 1, () => {
        d = null;
      }), Vn());
    },
    i(g) {
      f || (re(u), re(c), re(_), re(d), f = !0);
    },
    o(g) {
      qe(u), qe(c), qe(_), qe(d), f = !1;
    },
    d(g) {
      g && En(e), u && u.d(), c && c.d(), _ && _.d(), d && d.d();
    }
  };
}
function Zo(l) {
  let e, t, n, i, o;
  return t = new qa({}), {
    c() {
      e = rl("button"), $l(t.$$.fragment), at(e, "class", "icon svelte-1jp3vgd"), at(e, "aria-label", "Upload file"), Ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      Mn(s, e, r), ni(t, e, null), n = !0, i || (o = ti(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (re(t.$$.fragment, s), n = !0);
    },
    o(s) {
      qe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && En(e), ei(t), i = !1, o();
    }
  };
}
function Go(l) {
  let e, t, n, i, o;
  return t = new Rc({}), {
    c() {
      e = rl("button"), $l(t.$$.fragment), at(e, "class", "icon svelte-1jp3vgd"), at(e, "aria-label", "Record audio"), Ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      Mn(s, e, r), ni(t, e, null), n = !0, i || (o = ti(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (re(t.$$.fragment, s), n = !0);
    },
    o(s) {
      qe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && En(e), ei(t), i = !1, o();
    }
  };
}
function Ko(l) {
  let e, t, n, i, o;
  return t = new Ba({}), {
    c() {
      e = rl("button"), $l(t.$$.fragment), at(e, "class", "icon svelte-1jp3vgd"), at(e, "aria-label", "Capture from camera"), Ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      Mn(s, e, r), ni(t, e, null), n = !0, i || (o = ti(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (re(t.$$.fragment, s), n = !0);
    },
    o(s) {
      qe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && En(e), ei(t), i = !1, o();
    }
  };
}
function Jo(l) {
  let e, t, n, i, o;
  return t = new za({}), {
    c() {
      e = rl("button"), $l(t.$$.fragment), at(e, "class", "icon svelte-1jp3vgd"), at(e, "aria-label", "Paste from clipboard"), Ht(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      Mn(s, e, r), ni(t, e, null), n = !0, i || (o = ti(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Ht(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (re(t.$$.fragment, s), n = !0);
    },
    o(s) {
      qe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && En(e), ei(t), i = !1, o();
    }
  };
}
function O_(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && Po(l)
  );
  return {
    c() {
      n && n.c(), e = X_();
    },
    m(i, o) {
      n && n.m(i, o), Mn(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && re(n, 1)) : (n = Po(i), n.c(), re(n, 1), n.m(e.parentNode, e)) : n && (Pn(), qe(n, 1, 1, () => {
        n = null;
      }), Vn());
    },
    i(i) {
      t || (re(n), t = !0);
    },
    o(i) {
      qe(n), t = !1;
    },
    d(i) {
      i && En(e), n && n.d(i);
    }
  };
}
function U_(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(g, b, p, w) {
    function h(m) {
      return m instanceof p ? m : new p(function(k) {
        k(m);
      });
    }
    return new (p || (p = Promise))(function(m, k) {
      function C(y) {
        try {
          z(w.next(y));
        } catch (A) {
          k(A);
        }
      }
      function v(y) {
        try {
          z(w.throw(y));
        } catch (A) {
          k(A);
        }
      }
      function z(y) {
        y.done ? m(y.value) : h(y.value).then(C, v);
      }
      z((w = w.apply(g, b || [])).next());
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
  const u = () => f("upload"), c = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
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
    u,
    c,
    _,
    d
  ];
}
class N_ extends F_ {
  constructor(e) {
    super(), Y_(this, e, U_, O_, W_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Sn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Il() {
}
const V_ = (l) => l;
function P_(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Qo(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const Ra = typeof window < "u";
let xo = Ra ? () => window.performance.now() : () => Date.now(), Da = Ra ? (l) => requestAnimationFrame(l) : Il;
const Bn = /* @__PURE__ */ new Set();
function Ta(l) {
  Bn.forEach((e) => {
    e.c(l) || (Bn.delete(e), e.f());
  }), Bn.size !== 0 && Da(Ta);
}
function Z_(l) {
  let e;
  return Bn.size === 0 && Da(Ta), {
    promise: new Promise((t) => {
      Bn.add(e = { c: l, f: t });
    }),
    abort() {
      Bn.delete(e);
    }
  };
}
function G_(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function K_(l, { delay: e = 0, duration: t = 400, easing: n = V_ } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (o) => `opacity: ${o * i}`
  };
}
function $o(l, { delay: e = 0, duration: t = 400, easing: n = G_, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, u = a * (1 - s), [c, _] = Qo(i), [d, g] = Qo(o);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (b, p) => `
			transform: ${f} translate(${(1 - b) * c}${_}, ${(1 - b) * d}${g});
			opacity: ${a - u * p}`
  };
}
const wn = [];
function J_(l, e = Il) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (P_(l, r) && (l = r, t)) {
      const a = !wn.length;
      for (const f of n)
        f[1](), wn.push(f, l);
      if (a) {
        for (let f = 0; f < wn.length; f += 2)
          wn[f][0](wn[f + 1]);
        wn.length = 0;
      }
    }
  }
  function o(r) {
    i(r(l));
  }
  function s(r, a = Il) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, o) || Il), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function es(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function no(l, e, t, n) {
  if (typeof t == "number" || es(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = l.opts.stiffness * i, r = l.opts.damping * o, a = (s - r) * l.inv_mass, f = (o + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, es(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, o) => no(l, e[o], t[o], n[o])
      );
    if (typeof t == "object") {
      const i = {};
      for (const o in t)
        i[o] = no(l, e[o], t[o], n[o]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ts(l, e = {}) {
  const t = J_(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, f = l, u = l, c = 1, _ = 0, d = !1;
  function g(p, w = {}) {
    u = p;
    const h = a = {};
    return l == null || w.hard || b.stiffness >= 1 && b.damping >= 1 ? (d = !0, s = xo(), f = p, t.set(l = u), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), c = 0), r || (s = xo(), d = !1, r = Z_((m) => {
      if (d)
        return d = !1, r = null, !1;
      c = Math.min(c + _, 1);
      const k = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (m - s) * 60 / 1e3
      }, C = no(k, f, l, u);
      return s = m, f = l, t.set(l = C), k.settled && (r = null), !k.settled;
    })), new Promise((m) => {
      r.promise.then(() => {
        h === a && m();
      });
    }));
  }
  const b = {
    set: g,
    update: (p, w) => g(p(u, l), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: o
  };
  return b;
}
const {
  SvelteComponent: Q_,
  append: Ze,
  attr: U,
  component_subscribe: ns,
  detach: x_,
  element: $_,
  init: ed,
  insert: td,
  noop: ls,
  safe_not_equal: nd,
  set_style: pl,
  svg_element: Ge,
  toggle_class: is
} = window.__gradio__svelte__internal, { onMount: ld } = window.__gradio__svelte__internal;
function id(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _;
  return {
    c() {
      e = $_("div"), t = Ge("svg"), n = Ge("g"), i = Ge("path"), o = Ge("path"), s = Ge("path"), r = Ge("path"), a = Ge("g"), f = Ge("path"), u = Ge("path"), c = Ge("path"), _ = Ge("path"), U(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), U(i, "fill", "#FF7C00"), U(i, "fill-opacity", "0.4"), U(i, "class", "svelte-43sxxs"), U(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), U(o, "fill", "#FF7C00"), U(o, "class", "svelte-43sxxs"), U(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), U(s, "fill", "#FF7C00"), U(s, "fill-opacity", "0.4"), U(s, "class", "svelte-43sxxs"), U(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), U(r, "fill", "#FF7C00"), U(r, "class", "svelte-43sxxs"), pl(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), U(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), U(f, "fill", "#FF7C00"), U(f, "fill-opacity", "0.4"), U(f, "class", "svelte-43sxxs"), U(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), U(u, "fill", "#FF7C00"), U(u, "class", "svelte-43sxxs"), U(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), U(c, "fill", "#FF7C00"), U(c, "fill-opacity", "0.4"), U(c, "class", "svelte-43sxxs"), U(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), U(_, "fill", "#FF7C00"), U(_, "class", "svelte-43sxxs"), pl(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), U(t, "viewBox", "-1200 -1200 3000 3000"), U(t, "fill", "none"), U(t, "xmlns", "http://www.w3.org/2000/svg"), U(t, "class", "svelte-43sxxs"), U(e, "class", "svelte-43sxxs"), is(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, g) {
      td(d, e, g), Ze(e, t), Ze(t, n), Ze(n, i), Ze(n, o), Ze(n, s), Ze(n, r), Ze(t, a), Ze(a, f), Ze(a, u), Ze(a, c), Ze(a, _);
    },
    p(d, [g]) {
      g & /*$top*/
      2 && pl(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), g & /*$bottom*/
      4 && pl(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), g & /*margin*/
      1 && is(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: ls,
    o: ls,
    d(d) {
      d && x_(e);
    }
  };
}
function od(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, g, b, p) {
    function w(h) {
      return h instanceof b ? h : new b(function(m) {
        m(h);
      });
    }
    return new (b || (b = Promise))(function(h, m) {
      function k(z) {
        try {
          v(p.next(z));
        } catch (y) {
          m(y);
        }
      }
      function C(z) {
        try {
          v(p.throw(z));
        } catch (y) {
          m(y);
        }
      }
      function v(z) {
        z.done ? h(z.value) : w(z.value).then(k, C);
      }
      v((p = p.apply(d, g || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = ts([0, 0]);
  ns(l, r, (d) => t(1, n = d));
  const a = ts([0, 0]);
  ns(l, a, (d) => t(2, i = d));
  let f;
  function u() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function c() {
    return o(this, void 0, void 0, function* () {
      yield u(), f || c();
    });
  }
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), c();
    });
  }
  return ld(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class sd extends Q_ {
  constructor(e) {
    super(), ed(this, e, od, id, nd, { margin: 0 });
  }
}
const {
  SvelteComponent: ad,
  append: $t,
  attr: $e,
  binding_callbacks: os,
  check_outros: lo,
  create_component: Ia,
  create_slot: Ha,
  destroy_component: ja,
  destroy_each: Fa,
  detach: F,
  element: ot,
  empty: An,
  ensure_array_like: Wl,
  get_all_dirty_from_scope: Xa,
  get_slot_changes: Ya,
  group_outros: io,
  init: rd,
  insert: X,
  mount_component: Wa,
  noop: oo,
  safe_not_equal: fd,
  set_data: Oe,
  set_style: Tt,
  space: We,
  text: ne,
  toggle_class: Ye,
  transition_in: xe,
  transition_out: st,
  update_slot_base: Oa
} = window.__gradio__svelte__internal, { tick: ud } = window.__gradio__svelte__internal, { onDestroy: cd } = window.__gradio__svelte__internal, { createEventDispatcher: _d } = window.__gradio__svelte__internal, dd = (l) => ({}), ss = (l) => ({}), hd = (l) => ({}), as = (l) => ({});
function rs(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function fs(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function md(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new xl({
    props: {
      Icon: Ca,
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
  ), u = Ha(
    f,
    l,
    /*$$scope*/
    l[29],
    ss
  );
  return {
    c() {
      e = ot("div"), Ia(t.$$.fragment), n = We(), i = ot("span"), s = ne(o), r = We(), u && u.c(), $e(e, "class", "clear-status svelte-16nch4a"), $e(i, "class", "error svelte-16nch4a");
    },
    m(c, _) {
      X(c, e, _), Wa(t, e, null), X(c, n, _), X(c, i, _), $t(i, s), X(c, r, _), u && u.m(c, _), a = !0;
    },
    p(c, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      c[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      c[1]("common.error") + "") && Oe(s, o), u && u.p && (!a || _[0] & /*$$scope*/
      536870912) && Oa(
        u,
        f,
        c,
        /*$$scope*/
        c[29],
        a ? Ya(
          f,
          /*$$scope*/
          c[29],
          _,
          dd
        ) : Xa(
          /*$$scope*/
          c[29]
        ),
        ss
      );
    },
    i(c) {
      a || (xe(t.$$.fragment, c), xe(u, c), a = !0);
    },
    o(c) {
      st(t.$$.fragment, c), st(u, c), a = !1;
    },
    d(c) {
      c && (F(e), F(n), F(i), F(r)), ja(t), u && u.d(c);
    }
  };
}
function gd(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && us(l)
  );
  function c(m, k) {
    if (
      /*progress*/
      m[7]
    ) return pd;
    if (
      /*queue_position*/
      m[2] !== null && /*queue_size*/
      m[3] !== void 0 && /*queue_position*/
      m[2] >= 0
    ) return wd;
    if (
      /*queue_position*/
      m[2] === 0
    ) return bd;
  }
  let _ = c(l), d = _ && _(l), g = (
    /*timer*/
    l[5] && ds(l)
  );
  const b = [Cd, yd], p = [];
  function w(m, k) {
    return (
      /*last_progress_level*/
      m[15] != null ? 0 : (
        /*show_progress*/
        m[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = w(l)) && (s = p[o] = b[o](l));
  let h = !/*timer*/
  l[5] && vs(l);
  return {
    c() {
      u && u.c(), e = We(), t = ot("div"), d && d.c(), n = We(), g && g.c(), i = We(), s && s.c(), r = We(), h && h.c(), a = An(), $e(t, "class", "progress-text svelte-16nch4a"), Ye(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Ye(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(m, k) {
      u && u.m(m, k), X(m, e, k), X(m, t, k), d && d.m(t, null), $t(t, n), g && g.m(t, null), X(m, i, k), ~o && p[o].m(m, k), X(m, r, k), h && h.m(m, k), X(m, a, k), f = !0;
    },
    p(m, k) {
      /*variant*/
      m[8] === "default" && /*show_eta_bar*/
      m[18] && /*show_progress*/
      m[6] === "full" ? u ? u.p(m, k) : (u = us(m), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), _ === (_ = c(m)) && d ? d.p(m, k) : (d && d.d(1), d = _ && _(m), d && (d.c(), d.m(t, n))), /*timer*/
      m[5] ? g ? g.p(m, k) : (g = ds(m), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!f || k[0] & /*variant*/
      256) && Ye(
        t,
        "meta-text-center",
        /*variant*/
        m[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Ye(
        t,
        "meta-text",
        /*variant*/
        m[8] === "default"
      );
      let C = o;
      o = w(m), o === C ? ~o && p[o].p(m, k) : (s && (io(), st(p[C], 1, 1, () => {
        p[C] = null;
      }), lo()), ~o ? (s = p[o], s ? s.p(m, k) : (s = p[o] = b[o](m), s.c()), xe(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      m[5] ? h && (io(), st(h, 1, 1, () => {
        h = null;
      }), lo()) : h ? (h.p(m, k), k[0] & /*timer*/
      32 && xe(h, 1)) : (h = vs(m), h.c(), xe(h, 1), h.m(a.parentNode, a));
    },
    i(m) {
      f || (xe(s), xe(h), f = !0);
    },
    o(m) {
      st(s), st(h), f = !1;
    },
    d(m) {
      m && (F(e), F(t), F(i), F(r), F(a)), u && u.d(m), d && d.d(), g && g.d(), ~o && p[o].d(m), h && h.d(m);
    }
  };
}
function us(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ot("div"), $e(e, "class", "eta-bar svelte-16nch4a"), Tt(e, "transform", t);
    },
    m(n, i) {
      X(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Tt(e, "transform", t);
    },
    d(n) {
      n && F(e);
    }
  };
}
function bd(l) {
  let e;
  return {
    c() {
      e = ne("processing |");
    },
    m(t, n) {
      X(t, e, n);
    },
    p: oo,
    d(t) {
      t && F(e);
    }
  };
}
function wd(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = ne("queue: "), n = ne(t), i = ne("/"), o = ne(
        /*queue_size*/
        l[3]
      ), s = ne(" |");
    },
    m(r, a) {
      X(r, e, a), X(r, n, a), X(r, i, a), X(r, o, a), X(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Oe(n, t), a[0] & /*queue_size*/
      8 && Oe(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (F(e), F(n), F(i), F(o), F(s));
    }
  };
}
function pd(l) {
  let e, t = Wl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = _s(fs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = An();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      X(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Wl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = fs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = _s(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && F(e), Fa(n, i);
    }
  };
}
function cs(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(u, c) {
    return (
      /*p*/
      u[41].length != null ? kd : vd
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = We(), n = ne(t), i = ne(" | "), s = ne(o);
    },
    m(u, c) {
      f.m(u, c), X(u, e, c), X(u, n, c), X(u, i, c), X(u, s, c);
    },
    p(u, c) {
      a === (a = r(u)) && f ? f.p(u, c) : (f.d(1), f = a(u), f && (f.c(), f.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && Oe(n, t);
    },
    d(u) {
      u && (F(e), F(n), F(i), F(s)), f.d(u);
    }
  };
}
function vd(l) {
  let e = Sn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ne(e);
    },
    m(n, i) {
      X(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Sn(
        /*p*/
        n[41].index || 0
      ) + "") && Oe(t, e);
    },
    d(n) {
      n && F(t);
    }
  };
}
function kd(l) {
  let e = Sn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Sn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = ne(e), n = ne("/"), o = ne(i);
    },
    m(s, r) {
      X(s, t, r), X(s, n, r), X(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Sn(
        /*p*/
        s[41].index || 0
      ) + "") && Oe(t, e), r[0] & /*progress*/
      128 && i !== (i = Sn(
        /*p*/
        s[41].length
      ) + "") && Oe(o, i);
    },
    d(s) {
      s && (F(t), F(n), F(o));
    }
  };
}
function _s(l) {
  let e, t = (
    /*p*/
    l[41].index != null && cs(l)
  );
  return {
    c() {
      t && t.c(), e = An();
    },
    m(n, i) {
      t && t.m(n, i), X(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = cs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && F(e), t && t.d(n);
    }
  };
}
function ds(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = ne(
        /*formatted_timer*/
        l[20]
      ), n = ne(t), i = ne("s");
    },
    m(o, s) {
      X(o, e, s), X(o, n, s), X(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Oe(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Oe(n, t);
    },
    d(o) {
      o && (F(e), F(n), F(i));
    }
  };
}
function yd(l) {
  let e, t;
  return e = new sd({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      Ia(e.$$.fragment);
    },
    m(n, i) {
      Wa(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (xe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      st(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ja(e, n);
    }
  };
}
function Cd(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && hs(l)
  );
  return {
    c() {
      e = ot("div"), t = ot("div"), r && r.c(), n = We(), i = ot("div"), o = ot("div"), $e(t, "class", "progress-level-inner svelte-16nch4a"), $e(o, "class", "progress-bar svelte-16nch4a"), Tt(o, "width", s), $e(i, "class", "progress-bar-wrap svelte-16nch4a"), $e(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      X(a, e, f), $t(e, t), r && r.m(t, null), $t(e, n), $t(e, i), $t(i, o), l[31](o);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = hs(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Tt(o, "width", s);
    },
    i: oo,
    o: oo,
    d(a) {
      a && F(e), r && r.d(), l[31](null);
    }
  };
}
function hs(l) {
  let e, t = Wl(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ps(rs(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = An();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      X(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Wl(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = rs(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ps(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && F(e), Fa(n, i);
    }
  };
}
function ms(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && Sd()
  ), s = (
    /*p*/
    l[41].desc != null && gs(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && bs()
  ), a = (
    /*progress_level*/
    l[14] != null && ws(l)
  );
  return {
    c() {
      o && o.c(), e = We(), s && s.c(), t = We(), r && r.c(), n = We(), a && a.c(), i = An();
    },
    m(f, u) {
      o && o.m(f, u), X(f, e, u), s && s.m(f, u), X(f, t, u), r && r.m(f, u), X(f, n, u), a && a.m(f, u), X(f, i, u);
    },
    p(f, u) {
      /*p*/
      f[41].desc != null ? s ? s.p(f, u) : (s = gs(f), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = bs(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, u) : (a = ws(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (F(e), F(t), F(n), F(i)), o && o.d(f), s && s.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function Sd(l) {
  let e;
  return {
    c() {
      e = ne(" /");
    },
    m(t, n) {
      X(t, e, n);
    },
    d(t) {
      t && F(e);
    }
  };
}
function gs(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = ne(e);
    },
    m(n, i) {
      X(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Oe(t, e);
    },
    d(n) {
      n && F(t);
    }
  };
}
function bs(l) {
  let e;
  return {
    c() {
      e = ne("-");
    },
    m(t, n) {
      X(t, e, n);
    },
    d(t) {
      t && F(e);
    }
  };
}
function ws(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ne(e), n = ne("%");
    },
    m(i, o) {
      X(i, t, o), X(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Oe(t, e);
    },
    d(i) {
      i && (F(t), F(n));
    }
  };
}
function ps(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && ms(l)
  );
  return {
    c() {
      t && t.c(), e = An();
    },
    m(n, i) {
      t && t.m(n, i), X(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = ms(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && F(e), t && t.d(n);
    }
  };
}
function vs(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = Ha(
    o,
    l,
    /*$$scope*/
    l[29],
    as
  );
  return {
    c() {
      e = ot("p"), t = ne(
        /*loading_text*/
        l[9]
      ), n = We(), s && s.c(), $e(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      X(r, e, a), $t(e, t), X(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Oe(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && Oa(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? Ya(
          o,
          /*$$scope*/
          r[29],
          a,
          hd
        ) : Xa(
          /*$$scope*/
          r[29]
        ),
        as
      );
    },
    i(r) {
      i || (xe(s, r), i = !0);
    },
    o(r) {
      st(s, r), i = !1;
    },
    d(r) {
      r && (F(e), F(n)), s && s.d(r);
    }
  };
}
function zd(l) {
  let e, t, n, i, o;
  const s = [gd, md], r = [];
  function a(f, u) {
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
      e = ot("div"), n && n.c(), $e(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Ye(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Ye(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Ye(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Ye(
        e,
        "border",
        /*border*/
        l[12]
      ), Tt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Tt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, u) {
      X(f, e, u), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(f, u) {
      let c = t;
      t = a(f), t === c ? ~t && r[t].p(f, u) : (n && (io(), st(r[c], 1, 1, () => {
        r[c] = null;
      }), lo()), ~t ? (n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), xe(n, 1), n.m(e, null)) : n = null), (!o || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && $e(e, "class", i), (!o || u[0] & /*variant, show_progress, status, show_progress*/
      336) && Ye(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!o || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ye(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!o || u[0] & /*variant, show_progress, status*/
      336) && Ye(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!o || u[0] & /*variant, show_progress, border*/
      4416) && Ye(
        e,
        "border",
        /*border*/
        f[12]
      ), u[0] & /*absolute*/
      1024 && Tt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && Tt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      o || (xe(n), o = !0);
    },
    o(f) {
      st(n), o = !1;
    },
    d(f) {
      f && F(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var qd = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(u) {
      try {
        f(n.next(u));
      } catch (c) {
        s(c);
      }
    }
    function a(u) {
      try {
        f(n.throw(u));
      } catch (c) {
        s(c);
      }
    }
    function f(u) {
      u.done ? o(u.value) : i(u.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let vl = [], Hi = !1;
function Bd(l) {
  return qd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (vl.push(e), !Hi) Hi = !0;
      else return;
      yield ud(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < vl.length; i++) {
          const s = vl[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Hi = !1, vl = [];
      });
    }
  });
}
function Ed(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = _d();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: g = "full" } = e, { message: b = null } = e, { progress: p = null } = e, { variant: w = "default" } = e, { loading_text: h = "Loading..." } = e, { absolute: m = !0 } = e, { translucent: k = !1 } = e, { border: C = !1 } = e, { autoscroll: v } = e, z, y = !1, A = 0, S = 0, D = null, R = null, Y = 0, K = null, x, N = null, V = !0;
  const T = () => {
    t(0, a = t(27, D = t(19, P = null))), t(25, A = performance.now()), t(26, S = 0), y = !0, O();
  };
  function O() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - A) / 1e3), y && O();
    });
  }
  function L() {
    t(26, S = 0), t(0, a = t(27, D = t(19, P = null))), y && (y = !1);
  }
  cd(() => {
    y && L();
  });
  let P = null;
  function J(I) {
    os[I ? "unshift" : "push"](() => {
      N = I, t(16, N), t(7, p), t(14, K), t(15, x);
    });
  }
  const ee = () => {
    s("clear_status");
  };
  function me(I) {
    os[I ? "unshift" : "push"](() => {
      z = I, t(13, z);
    });
  }
  return l.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, f = I.queue_position), "queue_size" in I && t(3, u = I.queue_size), "status" in I && t(4, c = I.status), "scroll_to_output" in I && t(22, _ = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, g = I.show_progress), "message" in I && t(23, b = I.message), "progress" in I && t(7, p = I.progress), "variant" in I && t(8, w = I.variant), "loading_text" in I && t(9, h = I.loading_text), "absolute" in I && t(10, m = I.absolute), "translucent" in I && t(11, k = I.translucent), "border" in I && t(12, C = I.border), "autoscroll" in I && t(24, v = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = D), a != null && D !== a && (t(28, R = (performance.now() - A) / 1e3 + a), t(19, P = R.toFixed(1)), t(27, D = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Y = R === null || R <= 0 || !S ? null : Math.min(S / R, 1)), l.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, V = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, K = p.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, K = null), K ? (t(15, x = K[K.length - 1]), N && (x === 0 ? t(16, N.style.transition = "0", N) : t(16, N.style.transition = "150ms", N))) : t(15, x = void 0)), l.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? T() : L()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && _ && (c === "pending" || c === "complete") && Bd(z, v), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
  }, [
    a,
    r,
    f,
    u,
    c,
    d,
    g,
    p,
    w,
    h,
    m,
    k,
    C,
    z,
    K,
    x,
    N,
    Y,
    V,
    P,
    n,
    s,
    _,
    b,
    v,
    A,
    S,
    D,
    R,
    o,
    i,
    J,
    ee,
    me
  ];
}
class Md extends ad {
  constructor(e) {
    super(), rd(
      this,
      e,
      Ed,
      zd,
      fd,
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
const { setContext: Bg, getContext: Ad } = window.__gradio__svelte__internal, Ld = "WORKER_PROXY_CONTEXT_KEY";
function Ua() {
  return Ad(Ld);
}
function Rd(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function Na(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Va(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!Rd(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Dd(l) {
  if (l == null || !Va(l))
    return l;
  const e = Ua();
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
      type: Na(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Td,
  assign: Ol,
  check_outros: Pa,
  compute_rest_props: ks,
  create_slot: bo,
  detach: li,
  element: Za,
  empty: Ga,
  exclude_internal_props: Id,
  get_all_dirty_from_scope: wo,
  get_slot_changes: po,
  get_spread_update: Ka,
  group_outros: Ja,
  init: Hd,
  insert: ii,
  listen: Qa,
  prevent_default: jd,
  safe_not_equal: Fd,
  set_attributes: Ul,
  transition_in: an,
  transition_out: rn,
  update_slot_base: vo
} = window.__gradio__svelte__internal, { createEventDispatcher: Xd } = window.__gradio__svelte__internal;
function Yd(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = bo(
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
  for (let u = 0; u < a.length; u += 1)
    f = Ol(f, a[u]);
  return {
    c() {
      e = Za("a"), r && r.c(), Ul(e, f);
    },
    m(u, c) {
      ii(u, e, c), r && r.m(e, null), n = !0, i || (o = Qa(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(u, c) {
      r && r.p && (!n || c & /*$$scope*/
      128) && vo(
        r,
        s,
        u,
        /*$$scope*/
        u[7],
        n ? po(
          s,
          /*$$scope*/
          u[7],
          c,
          null
        ) : wo(
          /*$$scope*/
          u[7]
        ),
        null
      ), Ul(e, f = Ka(a, [
        (!n || c & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || c & /*download*/
        2) && { download: (
          /*download*/
          u[1]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        u[6]
      ]));
    },
    i(u) {
      n || (an(r, u), n = !0);
    },
    o(u) {
      rn(r, u), n = !1;
    },
    d(u) {
      u && li(e), r && r.d(u), i = !1, o();
    }
  };
}
function Wd(l) {
  let e, t, n, i;
  const o = [Ud, Od], s = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Ga();
    },
    m(a, f) {
      s[e].m(a, f), ii(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (Ja(), rn(s[u], 1, 1, () => {
        s[u] = null;
      }), Pa(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), an(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (an(t), i = !0);
    },
    o(a) {
      rn(t), i = !1;
    },
    d(a) {
      a && li(n), s[e].d(a);
    }
  };
}
function Od(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = bo(
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
    a = Ol(a, r[f]);
  return {
    c() {
      e = Za("a"), s && s.c(), Ul(e, a);
    },
    m(f, u) {
      ii(f, e, u), s && s.m(e, null), t = !0, n || (i = Qa(e, "click", jd(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, u) {
      s && s.p && (!t || u & /*$$scope*/
      128) && vo(
        s,
        o,
        f,
        /*$$scope*/
        f[7],
        t ? po(
          o,
          /*$$scope*/
          f[7],
          u,
          null
        ) : wo(
          /*$$scope*/
          f[7]
        ),
        null
      ), Ul(e, a = Ka(r, [
        u & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || u & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (an(s, f), t = !0);
    },
    o(f) {
      rn(s, f), t = !1;
    },
    d(f) {
      f && li(e), s && s.d(f), n = !1, i();
    }
  };
}
function Ud(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = bo(
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
      128) && vo(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? po(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : wo(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (an(n, i), e = !0);
    },
    o(i) {
      rn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Nd(l) {
  let e, t, n, i, o;
  const s = [Wd, Yd], r = [];
  function a(f, u) {
    return u & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Va(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = Ga();
    },
    m(f, u) {
      r[t].m(f, u), ii(f, i, u), o = !0;
    },
    p(f, [u]) {
      let c = t;
      t = a(f, u), t === c ? r[t].p(f, u) : (Ja(), rn(r[c], 1, 1, () => {
        r[c] = null;
      }), Pa(), n = r[t], n ? n.p(f, u) : (n = r[t] = s[t](f), n.c()), an(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      o || (an(n), o = !0);
    },
    o(f) {
      rn(n), o = !1;
    },
    d(f) {
      f && li(i), r[t].d(f);
    }
  };
}
function Vd(l, e, t) {
  const n = ["href", "download"];
  let i = ks(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(g, b, p, w) {
    function h(m) {
      return m instanceof p ? m : new p(function(k) {
        k(m);
      });
    }
    return new (p || (p = Promise))(function(m, k) {
      function C(y) {
        try {
          z(w.next(y));
        } catch (A) {
          k(A);
        }
      }
      function v(y) {
        try {
          z(w.throw(y));
        } catch (A) {
          k(A);
        }
      }
      function z(y) {
        y.done ? m(y.value) : h(y.value).then(C, v);
      }
      z((w = w.apply(g, b || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const u = Xd();
  let c = !1;
  const _ = Ua();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (c)
        return;
      if (u("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const b = new URL(a, window.location.href).pathname;
      t(2, c = !0), _.httpRequest({
        method: "GET",
        path: b,
        headers: {},
        query_string: ""
      }).then((p) => {
        if (p.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const w = new Blob(
          [p.body],
          {
            type: Na(p.headers, "content-type")
          }
        ), h = URL.createObjectURL(w), m = document.createElement("a");
        m.href = h, m.download = f, m.click(), URL.revokeObjectURL(h);
      }).finally(() => {
        t(2, c = !1);
      });
    });
  }
  return l.$$set = (g) => {
    e = Ol(Ol({}, e), Id(g)), t(6, i = ks(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, f = g.download), "$$scope" in g && t(7, s = g.$$scope);
  }, [
    a,
    f,
    c,
    u,
    _,
    d,
    i,
    s,
    o
  ];
}
class Pd extends Td {
  constructor(e) {
    super(), Hd(this, e, Vd, Nd, Fd, { href: 0, download: 1 });
  }
}
var Zd = Object.defineProperty, Gd = (l, e, t) => e in l ? Zd(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, _t = (l, e, t) => (Gd(l, typeof e != "symbol" ? e + "" : e, t), t), xa = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, Xn = (l, e, t) => (xa(l, e, "read from private field"), t ? t.call(l) : e.get(l)), Kd = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, Jd = (l, e, t, n) => (xa(l, e, "write to private field"), e.set(l, t), t), Mt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function $a(l, e) {
  return l.map(
    (t) => new Qd({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Qd {
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
    _t(this, "path"), _t(this, "url"), _t(this, "orig_name"), _t(this, "size"), _t(this, "blob"), _t(this, "is_stream"), _t(this, "mime_type"), _t(this, "alt_text"), _t(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
let Eg = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Xn(this, Mt) + t; ; ) {
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
        Jd(this, Mt, t);
      },
      flush: (t) => {
        if (Xn(this, Mt) === "")
          return;
        const n = e.allowCR && Xn(this, Mt).endsWith("\r") ? Xn(this, Mt).slice(0, -1) : Xn(this, Mt);
        t.enqueue(n);
      }
    }), Kd(this, Mt, "");
  }
};
Mt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: xd,
  append: Ee,
  attr: Gt,
  detach: er,
  element: Kt,
  init: $d,
  insert: tr,
  noop: ys,
  safe_not_equal: e1,
  set_data: Nl,
  set_style: ji,
  space: so,
  text: zn,
  toggle_class: Cs
} = window.__gradio__svelte__internal, { onMount: t1, createEventDispatcher: n1, onDestroy: l1 } = window.__gradio__svelte__internal;
function Ss(l) {
  let e, t, n, i, o = Zn(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, f, u = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), c;
  return {
    c() {
      e = Kt("div"), t = Kt("span"), n = Kt("div"), i = Kt("progress"), s = zn(o), a = so(), f = Kt("span"), c = zn(u), ji(i, "visibility", "hidden"), ji(i, "height", "0"), ji(i, "width", "0"), i.value = r = Zn(
        /*file_to_display*/
        l[2]
      ), Gt(i, "max", "100"), Gt(i, "class", "svelte-cr2edf"), Gt(n, "class", "progress-bar svelte-cr2edf"), Gt(f, "class", "file-name svelte-cr2edf"), Gt(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      tr(_, e, d), Ee(e, t), Ee(t, n), Ee(n, i), Ee(i, s), Ee(e, a), Ee(e, f), Ee(f, c);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && o !== (o = Zn(
        /*file_to_display*/
        _[2]
      ) + "") && Nl(s, o), d & /*file_to_display*/
      4 && r !== (r = Zn(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && u !== (u = /*file_to_display*/
      _[2].orig_name + "") && Nl(c, u);
    },
    d(_) {
      _ && er(e);
    }
  };
}
function i1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, u, c = (
    /*file_to_display*/
    l[2] && Ss(l)
  );
  return {
    c() {
      e = Kt("div"), t = Kt("span"), n = zn("Uploading "), o = zn(i), s = so(), a = zn(r), f = zn("..."), u = so(), c && c.c(), Gt(t, "class", "uploading svelte-cr2edf"), Gt(e, "class", "wrap svelte-cr2edf"), Cs(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      tr(_, e, d), Ee(e, t), Ee(t, n), Ee(t, o), Ee(t, s), Ee(t, a), Ee(t, f), Ee(e, u), c && c.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && Nl(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && Nl(a, r), /*file_to_display*/
      _[2] ? c ? c.p(_, d) : (c = Ss(_), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d & /*progress*/
      2 && Cs(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: ys,
    o: ys,
    d(_) {
      _ && er(e), c && c.d();
    }
  };
}
function Zn(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function o1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += Zn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function s1(l, e, t) {
  var n = this && this.__awaiter || function(b, p, w, h) {
    function m(k) {
      return k instanceof w ? k : new w(function(C) {
        C(k);
      });
    }
    return new (w || (w = Promise))(function(k, C) {
      function v(A) {
        try {
          y(h.next(A));
        } catch (S) {
          C(S);
        }
      }
      function z(A) {
        try {
          y(h.throw(A));
        } catch (S) {
          C(S);
        }
      }
      function y(A) {
        A.done ? k(A.value) : m(A.value).then(v, z);
      }
      y((h = h.apply(b, p || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, f = !1, u, c, _ = s.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }));
  const d = n1();
  function g(b, p) {
    t(0, _ = _.map((w) => (w.orig_name === b && (w.progress += p), w)));
  }
  return t1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(b) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(b.data);
        f || t(1, f = !0), p.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, u = p), g(p.orig_name, p.chunk_size));
      });
    };
  })), l1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (b) => {
    "upload_id" in b && t(3, i = b.upload_id), "root" in b && t(4, o = b.root), "files" in b && t(5, s = b.files), "stream_handler" in b && t(6, r = b.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && o1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, c = u || _[0]);
  }, [
    _,
    f,
    c,
    i,
    o,
    s,
    r,
    u
  ];
}
class a1 extends xd {
  constructor(e) {
    super(), $d(this, e, s1, i1, e1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: r1,
  append: zs,
  attr: be,
  binding_callbacks: f1,
  bubble: Xt,
  check_outros: nr,
  create_component: u1,
  create_slot: lr,
  destroy_component: c1,
  detach: oi,
  element: ao,
  empty: ir,
  get_all_dirty_from_scope: or,
  get_slot_changes: sr,
  group_outros: ar,
  init: _1,
  insert: si,
  listen: De,
  mount_component: d1,
  prevent_default: Yt,
  run_all: h1,
  safe_not_equal: m1,
  set_style: rr,
  space: g1,
  stop_propagation: Wt,
  toggle_class: _e,
  transition_in: It,
  transition_out: fn,
  update_slot_base: fr
} = window.__gradio__svelte__internal, { createEventDispatcher: b1, tick: w1 } = window.__gradio__svelte__internal;
function p1(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = lr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ao("button"), d && d.c(), t = g1(), n = ao("input"), be(n, "aria-label", "file upload"), be(n, "data-testid", "file-upload"), be(n, "type", "file"), be(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, be(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), be(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), be(n, "class", "svelte-1s26xmt"), be(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), be(e, "class", "svelte-1s26xmt"), _e(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), _e(
        e,
        "center",
        /*center*/
        l[4]
      ), _e(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), _e(
        e,
        "flex",
        /*flex*/
        l[5]
      ), _e(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), rr(e, "height", "100%");
    },
    m(g, b) {
      si(g, e, b), d && d.m(e, null), zs(e, t), zs(e, n), l[34](n), f = !0, u || (c = [
        De(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        De(e, "drag", Wt(Yt(
          /*drag_handler*/
          l[27]
        ))),
        De(e, "dragstart", Wt(Yt(
          /*dragstart_handler*/
          l[28]
        ))),
        De(e, "dragend", Wt(Yt(
          /*dragend_handler*/
          l[29]
        ))),
        De(e, "dragover", Wt(Yt(
          /*dragover_handler*/
          l[30]
        ))),
        De(e, "dragenter", Wt(Yt(
          /*dragenter_handler*/
          l[31]
        ))),
        De(e, "dragleave", Wt(Yt(
          /*dragleave_handler*/
          l[32]
        ))),
        De(e, "drop", Wt(Yt(
          /*drop_handler*/
          l[33]
        ))),
        De(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        De(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        De(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        De(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], u = !0);
    },
    p(g, b) {
      d && d.p && (!f || b[0] & /*$$scope*/
      33554432) && fr(
        d,
        _,
        g,
        /*$$scope*/
        g[25],
        f ? sr(
          _,
          /*$$scope*/
          g[25],
          b,
          null
        ) : or(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!f || b[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      g[16] || void 0)) && be(n, "accept", i), (!f || b[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = o), (!f || b[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      g[6] === "directory" || void 0)) && be(n, "webkitdirectory", s), (!f || b[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && be(n, "mozdirectory", r), (!f || b[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && be(e, "tabindex", a), (!f || b[0] & /*hidden*/
      512) && _e(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!f || b[0] & /*center*/
      16) && _e(
        e,
        "center",
        /*center*/
        g[4]
      ), (!f || b[0] & /*boundedheight*/
      8) && _e(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!f || b[0] & /*flex*/
      32) && _e(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!f || b[0] & /*disable_click*/
      128) && _e(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      f || (It(d, g), f = !0);
    },
    o(g) {
      fn(d, g), f = !1;
    },
    d(g) {
      g && oi(e), d && d.d(g), l[34](null), u = !1, h1(c);
    }
  };
}
function v1(l) {
  let e, t, n = !/*hidden*/
  l[9] && qs(l);
  return {
    c() {
      n && n.c(), e = ir();
    },
    m(i, o) {
      n && n.m(i, o), si(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (ar(), fn(n, 1, 1, () => {
        n = null;
      }), nr()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && It(n, 1)) : (n = qs(i), n.c(), It(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (It(n), t = !0);
    },
    o(i) {
      fn(n), t = !1;
    },
    d(i) {
      i && oi(e), n && n.d(i);
    }
  };
}
function k1(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = lr(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ao("button"), r && r.c(), be(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), be(e, "class", "svelte-1s26xmt"), _e(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), _e(
        e,
        "center",
        /*center*/
        l[4]
      ), _e(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), _e(
        e,
        "flex",
        /*flex*/
        l[5]
      ), rr(e, "height", "100%");
    },
    m(a, f) {
      si(a, e, f), r && r.m(e, null), n = !0, i || (o = De(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && fr(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? sr(
          s,
          /*$$scope*/
          a[25],
          f,
          null
        ) : or(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && be(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && _e(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && _e(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && _e(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && _e(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (It(r, a), n = !0);
    },
    o(a) {
      fn(r, a), n = !1;
    },
    d(a) {
      a && oi(e), r && r.d(a), i = !1, o();
    }
  };
}
function qs(l) {
  let e, t;
  return e = new a1({
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
      u1(e.$$.fragment);
    },
    m(n, i) {
      d1(e, n, i), t = !0;
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
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      c1(e, n);
    }
  };
}
function y1(l) {
  let e, t, n, i;
  const o = [k1, v1, p1], s = [];
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
      t.c(), n = ir();
    },
    m(a, f) {
      s[e].m(a, f), si(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (ar(), fn(s[u], 1, 1, () => {
        s[u] = null;
      }), nr(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), It(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (It(t), i = !0);
    },
    o(a) {
      fn(t), i = !1;
    },
    d(a) {
      a && oi(n), s[e].d(a);
    }
  };
}
function C1(l, e, t) {
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
function S1(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(M, j, Q, q) {
    function ie(je) {
      return je instanceof Q ? je : new Q(function(et) {
        et(je);
      });
    }
    return new (Q || (Q = Promise))(function(je, et) {
      function rt(he) {
        try {
          Ne(q.next(he));
        } catch (ft) {
          et(ft);
        }
      }
      function Le(he) {
        try {
          Ne(q.throw(he));
        } catch (ft) {
          et(ft);
        }
      }
      function Ne(he) {
        he.done ? je(he.value) : ie(he.value).then(rt, Le);
      }
      Ne((q = q.apply(M, j || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: g = !1 } = e, { format: b = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: w = null } = e, { show_progress: h = !0 } = e, { max_file_size: m = null } = e, { upload: k } = e, { stream_handler: C } = e, v, z, y;
  const A = b1(), S = ["image", "video", "audio", "text", "file"], D = (M) => M.startsWith(".") || M.endsWith("/*") ? M : S.includes(M) ? M + "/*" : "." + M;
  function R() {
    t(20, r = !r);
  }
  function Y() {
    navigator.clipboard.read().then((M) => o(this, void 0, void 0, function* () {
      for (let j = 0; j < M.length; j++) {
        const Q = M[j].types.find((q) => q.startsWith("image/"));
        if (Q) {
          M[j].getType(Q).then((q) => o(this, void 0, void 0, function* () {
            const ie = new File([q], `clipboard.${Q.replace("image/", "")}`);
            yield N([ie]);
          }));
          break;
        }
      }
    }));
  }
  function K() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function x(M) {
    return o(this, void 0, void 0, function* () {
      yield w1(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const j = yield k(M, d, v, m ?? 1 / 0);
        return A("load", c === "single" ? j == null ? void 0 : j[0] : j), t(1, p = !1), j || [];
      } catch (j) {
        return A("error", j.message), t(1, p = !1), [];
      }
    });
  }
  function N(M) {
    return o(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let j = M.map((Q) => new File([Q], Q instanceof File ? Q.name : "file", { type: Q.type }));
      return t(15, z = yield $a(j)), yield x(z);
    });
  }
  function V(M) {
    return o(this, void 0, void 0, function* () {
      const j = M.target;
      if (j.files)
        if (b != "blob")
          yield N(Array.from(j.files));
        else {
          if (c === "single") {
            A("load", j.files[0]);
            return;
          }
          A("load", j.files);
        }
    });
  }
  function T(M) {
    return o(this, void 0, void 0, function* () {
      var j;
      if (t(20, r = !1), !(!((j = M.dataTransfer) === null || j === void 0) && j.files)) return;
      const Q = Array.from(M.dataTransfer.files).filter((q) => {
        const ie = "." + q.name.split(".").pop();
        return ie && C1(y, ie, q.type) || (ie && Array.isArray(s) ? s.includes(ie) : ie === s) ? !0 : (A("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield N(Q);
    });
  }
  function O(M) {
    Xt.call(this, l, M);
  }
  function L(M) {
    Xt.call(this, l, M);
  }
  function P(M) {
    Xt.call(this, l, M);
  }
  function J(M) {
    Xt.call(this, l, M);
  }
  function ee(M) {
    Xt.call(this, l, M);
  }
  function me(M) {
    Xt.call(this, l, M);
  }
  function I(M) {
    Xt.call(this, l, M);
  }
  function Ue(M) {
    f1[M ? "unshift" : "push"](() => {
      w = M, t(2, w);
    });
  }
  return l.$$set = (M) => {
    "filetype" in M && t(0, s = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, f = M.center), "flex" in M && t(5, u = M.flex), "file_count" in M && t(6, c = M.file_count), "disable_click" in M && t(7, _ = M.disable_click), "root" in M && t(8, d = M.root), "hidden" in M && t(9, g = M.hidden), "format" in M && t(21, b = M.format), "uploading" in M && t(1, p = M.uploading), "hidden_upload" in M && t(2, w = M.hidden_upload), "show_progress" in M && t(10, h = M.show_progress), "max_file_size" in M && t(22, m = M.max_file_size), "upload" in M && t(23, k = M.upload), "stream_handler" in M && t(11, C = M.stream_handler), "$$scope" in M && t(25, i = M.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, y = null) : typeof s == "string" ? t(16, y = D(s)) : (t(0, s = s.map(D)), t(16, y = s.join(", "))));
  }, [
    s,
    p,
    w,
    a,
    f,
    u,
    c,
    _,
    d,
    g,
    h,
    C,
    Y,
    K,
    v,
    z,
    y,
    R,
    V,
    T,
    r,
    b,
    m,
    k,
    N,
    i,
    n,
    O,
    L,
    P,
    J,
    ee,
    me,
    I,
    Ue
  ];
}
class z1 extends r1 {
  constructor(e) {
    super(), _1(
      this,
      e,
      S1,
      y1,
      m1,
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
  SvelteComponent: q1,
  append: kl,
  attr: Fi,
  create_component: B1,
  destroy_component: E1,
  detach: M1,
  element: Xi,
  init: A1,
  insert: L1,
  listen: R1,
  mount_component: D1,
  noop: T1,
  safe_not_equal: I1,
  set_style: H1,
  space: j1,
  text: F1,
  transition_in: X1,
  transition_out: Y1
} = window.__gradio__svelte__internal, { createEventDispatcher: W1 } = window.__gradio__svelte__internal;
function O1(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, f, u;
  return i = new Ba({}), {
    c() {
      e = Xi("button"), t = Xi("div"), n = Xi("span"), B1(i.$$.fragment), o = j1(), r = F1(s), Fi(n, "class", "icon-wrap svelte-fjcd9c"), Fi(t, "class", "wrap svelte-fjcd9c"), Fi(e, "class", "svelte-fjcd9c"), H1(e, "height", "100%");
    },
    m(c, _) {
      L1(c, e, _), kl(e, t), kl(t, n), D1(i, n, null), kl(t, o), kl(t, r), a = !0, f || (u = R1(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: T1,
    i(c) {
      a || (X1(i.$$.fragment, c), a = !0);
    },
    o(c) {
      Y1(i.$$.fragment, c), a = !1;
    },
    d(c) {
      c && M1(e), E1(i), f = !1, u();
    }
  };
}
function U1(l) {
  const e = W1();
  return [e, () => e("click")];
}
class N1 extends q1 {
  constructor(e) {
    super(), A1(this, e, U1, O1, I1, {});
  }
}
function V1() {
  return navigator.mediaDevices.enumerateDevices();
}
function P1(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Bs(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (P1(o, e), o));
}
function Z1(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: G1,
  action_destroyer: K1,
  add_render_callback: J1,
  append: gt,
  attr: ae,
  binding_callbacks: Q1,
  check_outros: el,
  create_component: Ln,
  create_in_transition: x1,
  destroy_component: Rn,
  destroy_each: $1,
  detach: Me,
  element: He,
  empty: ko,
  ensure_array_like: Es,
  group_outros: tl,
  init: e0,
  insert: Ae,
  listen: Vl,
  mount_component: Dn,
  noop: yo,
  run_all: t0,
  safe_not_equal: n0,
  set_data: ur,
  set_input_value: ro,
  space: ol,
  stop_propagation: l0,
  text: cr,
  toggle_class: yl,
  transition_in: de,
  transition_out: we
} = window.__gradio__svelte__internal, { createEventDispatcher: i0, onMount: o0 } = window.__gradio__svelte__internal;
function Ms(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function s0(l) {
  let e, t, n, i, o, s, r, a, f, u, c;
  const _ = [f0, r0], d = [];
  function g(w, h) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = g(l), i = d[n] = _[n](l);
  let b = !/*recording*/
  l[8] && As(l), p = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && Ls(l)
  );
  return {
    c() {
      e = He("div"), t = He("button"), i.c(), s = ol(), b && b.c(), r = ol(), p && p.c(), a = ko(), ae(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), ae(t, "class", "svelte-8hqvb6"), ae(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, h) {
      Ae(w, e, h), gt(e, t), d[n].m(t, null), gt(e, s), b && b.m(e, null), Ae(w, r, h), p && p.m(w, h), Ae(w, a, h), f = !0, u || (c = Vl(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), u = !0);
    },
    p(w, h) {
      let m = n;
      n = g(w), n === m ? d[n].p(w, h) : (tl(), we(d[m], 1, 1, () => {
        d[m] = null;
      }), el(), i = d[n], i ? i.p(w, h) : (i = d[n] = _[n](w), i.c()), de(i, 1), i.m(t, null)), (!f || h[0] & /*mode*/
      2 && o !== (o = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && ae(t, "aria-label", o), /*recording*/
      w[8] ? b && (tl(), we(b, 1, 1, () => {
        b = null;
      }), el()) : b ? (b.p(w, h), h[0] & /*recording*/
      256 && de(b, 1)) : (b = As(w), b.c(), de(b, 1), b.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? p ? (p.p(w, h), h[0] & /*options_open, selected_device*/
      1152 && de(p, 1)) : (p = Ls(w), p.c(), de(p, 1), p.m(a.parentNode, a)) : p && (tl(), we(p, 1, 1, () => {
        p = null;
      }), el());
    },
    i(w) {
      f || (de(i), de(b), de(p), f = !0);
    },
    o(w) {
      we(i), we(b), we(p), f = !1;
    },
    d(w) {
      w && (Me(e), Me(r), Me(a)), d[n].d(), b && b.d(), p && p.d(w), u = !1, c();
    }
  };
}
function a0(l) {
  let e, t, n, i;
  return t = new N1({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = He("div"), Ln(t.$$.fragment), ae(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ae(o, e, s), Dn(t, e, null), i = !0;
    },
    p: yo,
    i(o) {
      i || (de(t.$$.fragment, o), o && (n || J1(() => {
        n = x1(e, K_, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      we(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Me(e), Rn(t);
    }
  };
}
function r0(l) {
  let e, t, n;
  return t = new Mu({}), {
    c() {
      e = He("div"), Ln(t.$$.fragment), ae(e, "class", "icon svelte-8hqvb6"), ae(e, "title", "capture photo");
    },
    m(i, o) {
      Ae(i, e, o), Dn(t, e, null), n = !0;
    },
    p: yo,
    i(i) {
      n || (de(t.$$.fragment, i), n = !0);
    },
    o(i) {
      we(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Rn(t);
    }
  };
}
function f0(l) {
  let e, t, n, i;
  const o = [c0, u0], s = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = ko();
    },
    m(a, f) {
      s[e].m(a, f), Ae(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e !== u && (tl(), we(s[u], 1, 1, () => {
        s[u] = null;
      }), el(), t = s[e], t || (t = s[e] = o[e](a), t.c()), de(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (de(t), i = !0);
    },
    o(a) {
      we(t), i = !1;
    },
    d(a) {
      a && Me(n), s[e].d(a);
    }
  };
}
function u0(l) {
  let e, t, n;
  return t = new ju({}), {
    c() {
      e = He("div"), Ln(t.$$.fragment), ae(e, "class", "icon red svelte-8hqvb6"), ae(e, "title", "start recording");
    },
    m(i, o) {
      Ae(i, e, o), Dn(t, e, null), n = !0;
    },
    i(i) {
      n || (de(t.$$.fragment, i), n = !0);
    },
    o(i) {
      we(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Rn(t);
    }
  };
}
function c0(l) {
  let e, t, n;
  return t = new Gc({}), {
    c() {
      e = He("div"), Ln(t.$$.fragment), ae(e, "class", "icon red svelte-8hqvb6"), ae(e, "title", "stop recording");
    },
    m(i, o) {
      Ae(i, e, o), Dn(t, e, null), n = !0;
    },
    i(i) {
      n || (de(t.$$.fragment, i), n = !0);
    },
    o(i) {
      we(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Me(e), Rn(t);
    }
  };
}
function As(l) {
  let e, t, n, i, o;
  return t = new go({}), {
    c() {
      e = He("button"), Ln(t.$$.fragment), ae(e, "class", "icon svelte-8hqvb6"), ae(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ae(s, e, r), Dn(t, e, null), n = !0, i || (o = Vl(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: yo,
    i(s) {
      n || (de(t.$$.fragment, s), n = !0);
    },
    o(s) {
      we(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Me(e), Rn(t), i = !1, o();
    }
  };
}
function Ls(l) {
  let e, t, n, i, o, s, r;
  n = new go({});
  function a(c, _) {
    return (
      /*available_video_devices*/
      c[6].length === 0 ? d0 : _0
    );
  }
  let f = a(l), u = f(l);
  return {
    c() {
      e = He("select"), t = He("button"), Ln(n.$$.fragment), i = ol(), u.c(), ae(t, "class", "inset-icon svelte-8hqvb6"), ae(e, "class", "select-wrap svelte-8hqvb6"), ae(e, "aria-label", "select source");
    },
    m(c, _) {
      Ae(c, e, _), gt(e, t), Dn(n, t, null), gt(t, i), u.m(e, null), o = !0, s || (r = [
        Vl(t, "click", l0(
          /*click_handler_2*/
          l[22]
        )),
        K1(Co.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        Vl(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], s = !0);
    },
    p(c, _) {
      f === (f = a(c)) && u ? u.p(c, _) : (u.d(1), u = f(c), u && (u.c(), u.m(e, null)));
    },
    i(c) {
      o || (de(n.$$.fragment, c), o = !0);
    },
    o(c) {
      we(n.$$.fragment, c), o = !1;
    },
    d(c) {
      c && Me(e), Rn(n), u.d(), s = !1, t0(r);
    }
  };
}
function _0(l) {
  let e, t = Es(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Rs(Ms(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = ko();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Ae(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Es(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ms(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Rs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Me(e), $1(n, i);
    }
  };
}
function d0(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = He("option"), n = cr(t), e.__value = "", ro(e, e.__value), ae(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Ae(i, e, o), gt(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && ur(n, t);
    },
    d(i) {
      i && Me(e);
    }
  };
}
function Rs(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = He("option"), n = cr(t), i = ol(), e.__value = o = /*device*/
      l[32].deviceId, ro(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, ae(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ae(r, e, a), gt(e, n), gt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && ur(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, ro(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Me(e);
    }
  };
}
function h0(l) {
  let e, t, n, i, o, s;
  const r = [a0, s0], a = [];
  function f(u, c) {
    return (
      /*webcam_accessed*/
      u[9] ? 1 : 0
    );
  }
  return i = f(l), o = a[i] = r[i](l), {
    c() {
      e = He("div"), t = He("video"), n = ol(), o.c(), ae(t, "class", "svelte-8hqvb6"), yl(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), yl(t, "hide", !/*webcam_accessed*/
      l[9]), ae(e, "class", "wrap svelte-8hqvb6");
    },
    m(u, c) {
      Ae(u, e, c), gt(e, t), l[19](t), gt(e, n), a[i].m(e, null), s = !0;
    },
    p(u, c) {
      (!s || c[0] & /*mirror_webcam*/
      4) && yl(
        t,
        "flip",
        /*mirror_webcam*/
        u[2]
      ), (!s || c[0] & /*webcam_accessed*/
      512) && yl(t, "hide", !/*webcam_accessed*/
      u[9]);
      let _ = i;
      i = f(u), i === _ ? a[i].p(u, c) : (tl(), we(a[_], 1, 1, () => {
        a[_] = null;
      }), el(), o = a[i], o ? o.p(u, c) : (o = a[i] = r[i](u), o.c()), de(o, 1), o.m(e, null));
    },
    i(u) {
      s || (de(o), s = !0);
    },
    o(u) {
      we(o), s = !1;
    },
    d(u) {
      u && Me(e), l[19](null), a[i].d();
    }
  };
}
function Co(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function m0(l, e, t) {
  var n = this && this.__awaiter || function(T, O, L, P) {
    function J(ee) {
      return ee instanceof L ? ee : new L(function(me) {
        me(ee);
      });
    }
    return new (L || (L = Promise))(function(ee, me) {
      function I(j) {
        try {
          M(P.next(j));
        } catch (Q) {
          me(Q);
        }
      }
      function Ue(j) {
        try {
          M(P.throw(j));
        } catch (Q) {
          me(Q);
        }
      }
      function M(j) {
        j.done ? ee(j.value) : J(j.value).then(I, Ue);
      }
      M((P = P.apply(T, O || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: u = "" } = e, { mode: c = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: g } = e, { upload: b } = e;
  const p = i0();
  o0(() => r = document.createElement("canvas"));
  const w = (T) => n(void 0, void 0, void 0, function* () {
    const L = T.target.value;
    yield Bs(d, i, L).then((P) => n(void 0, void 0, void 0, function* () {
      v = P, t(7, s = o.find((J) => J.deviceId === L) || null), t(10, R = !1);
    }));
  });
  function h() {
    return n(this, void 0, void 0, function* () {
      try {
        Bs(d, i).then((T) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, o = yield V1()), v = T;
        })).then(() => Z1(o)).then((T) => {
          t(6, o = T);
          const O = v.getTracks().map((L) => {
            var P;
            return (P = L.getSettings()) === null || P === void 0 ? void 0 : P.deviceId;
          })[0];
          t(7, s = O && T.find((L) => L.deviceId === O) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", g("image.no_webcam_support"));
      } catch (T) {
        if (T instanceof DOMException && T.name == "NotAllowedError")
          p("error", g("image.allow_webcam_access"));
        else
          throw T;
      }
    });
  }
  function m() {
    var T = r.getContext("2d");
    (!a || a && k) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, T.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (T.scale(-1, 1), T.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (O) => {
        p(a ? "stream" : "capture", O);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, C = [], v, z, y;
  function A() {
    if (k) {
      y.stop();
      let T = new Blob(C, { type: z }), O = new FileReader();
      O.onload = function(L) {
        return n(this, void 0, void 0, function* () {
          var P;
          if (L.target) {
            let J = new File([T], "sample." + z.substring(6));
            const ee = yield $a([J]);
            let me = ((P = yield b(ee, u)) === null || P === void 0 ? void 0 : P.filter(Boolean))[0];
            p("capture", me), p("stop_recording");
          }
        });
      }, O.readAsDataURL(T);
    } else {
      p("start_recording"), C = [];
      let T = ["video/webm", "video/mp4"];
      for (let O of T)
        if (MediaRecorder.isTypeSupported(O)) {
          z = O;
          break;
        }
      if (z === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      y = new MediaRecorder(v, { mimeType: z }), y.addEventListener("dataavailable", function(O) {
        C.push(O.data);
      }), y.start(200);
    }
    t(8, k = !k);
  }
  let S = !1;
  function D() {
    c === "image" && a && t(8, k = !k), c === "image" ? m() : A(), !k && v && (v.getTracks().forEach((T) => T.stop()), t(5, i.srcObject = null, i), t(9, S = !1));
  }
  a && c === "image" && window.setInterval(
    () => {
      i && !f && m();
    },
    500
  );
  let R = !1;
  function Y(T) {
    T.preventDefault(), T.stopPropagation(), t(10, R = !1);
  }
  function K(T) {
    Q1[T ? "unshift" : "push"](() => {
      i = T, t(5, i);
    });
  }
  const x = async () => h(), N = () => t(10, R = !0), V = () => t(10, R = !1);
  return l.$$set = (T) => {
    "streaming" in T && t(0, a = T.streaming), "pending" in T && t(15, f = T.pending), "root" in T && t(16, u = T.root), "mode" in T && t(1, c = T.mode), "mirror_webcam" in T && t(2, _ = T.mirror_webcam), "include_audio" in T && t(17, d = T.include_audio), "i18n" in T && t(3, g = T.i18n), "upload" in T && t(18, b = T.upload);
  }, [
    a,
    c,
    _,
    g,
    Co,
    i,
    o,
    s,
    k,
    S,
    R,
    w,
    h,
    D,
    Y,
    f,
    u,
    d,
    b,
    K,
    x,
    N,
    V
  ];
}
class g0 extends G1 {
  constructor(e) {
    super(), e0(
      this,
      e,
      m0,
      h0,
      n0,
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
    return Co;
  }
}
const {
  SvelteComponent: b0,
  append: qt,
  attr: H,
  detach: w0,
  init: p0,
  insert: v0,
  noop: Yi,
  safe_not_equal: k0,
  set_style: Bt,
  svg_element: dt
} = window.__gradio__svelte__internal;
function y0(l) {
  let e, t, n, i, o, s, r, a, f;
  return {
    c() {
      e = dt("svg"), t = dt("rect"), n = dt("rect"), i = dt("rect"), o = dt("rect"), s = dt("line"), r = dt("line"), a = dt("line"), f = dt("line"), H(t, "x", "2"), H(t, "y", "2"), H(t, "width", "5"), H(t, "height", "5"), H(t, "rx", "1"), H(t, "ry", "1"), H(t, "stroke-width", "2"), H(t, "fill", "none"), H(n, "x", "17"), H(n, "y", "2"), H(n, "width", "5"), H(n, "height", "5"), H(n, "rx", "1"), H(n, "ry", "1"), H(n, "stroke-width", "2"), H(n, "fill", "none"), H(i, "x", "2"), H(i, "y", "17"), H(i, "width", "5"), H(i, "height", "5"), H(i, "rx", "1"), H(i, "ry", "1"), H(i, "stroke-width", "2"), H(i, "fill", "none"), H(o, "x", "17"), H(o, "y", "17"), H(o, "width", "5"), H(o, "height", "5"), H(o, "rx", "1"), H(o, "ry", "1"), H(o, "stroke-width", "2"), H(o, "fill", "none"), H(s, "x1", "7.5"), H(s, "y1", "4.5"), H(s, "x2", "16"), H(s, "y2", "4.5"), Bt(s, "stroke-width", "2px"), H(r, "x1", "7.5"), H(r, "y1", "19.5"), H(r, "x2", "16"), H(r, "y2", "19.5"), Bt(r, "stroke-width", "2px"), H(a, "x1", "4.5"), H(a, "y1", "8"), H(a, "x2", "4.5"), H(a, "y2", "16"), Bt(a, "stroke-width", "2px"), H(f, "x1", "19.5"), H(f, "y1", "8"), H(f, "x2", "19.5"), H(f, "y2", "16"), Bt(f, "stroke-width", "2px"), H(e, "width", "100%"), H(e, "height", "100%"), H(e, "viewBox", "0 0 24 24"), H(e, "version", "1.1"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H(e, "xml:space", "preserve"), H(e, "stroke", "currentColor"), Bt(e, "fill-rule", "evenodd"), Bt(e, "clip-rule", "evenodd"), Bt(e, "stroke-linecap", "round"), Bt(e, "stroke-linejoin", "round");
    },
    m(u, c) {
      v0(u, e, c), qt(e, t), qt(e, n), qt(e, i), qt(e, o), qt(e, s), qt(e, r), qt(e, a), qt(e, f);
    },
    p: Yi,
    i: Yi,
    o: Yi,
    d(u) {
      u && w0(e);
    }
  };
}
class C0 extends b0 {
  constructor(e) {
    super(), p0(this, e, null, y0, k0, {});
  }
}
const {
  SvelteComponent: S0,
  append: z0,
  attr: Ke,
  detach: q0,
  init: B0,
  insert: E0,
  noop: Wi,
  safe_not_equal: M0,
  set_style: Cl,
  svg_element: Ds
} = window.__gradio__svelte__internal;
function A0(l) {
  let e, t;
  return {
    c() {
      e = Ds("svg"), t = Ds("path"), Ke(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Ke(t, "fill", "none"), Ke(t, "stroke-width", "2"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "version", "1.1"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ke(e, "xml:space", "preserve"), Ke(e, "stroke", "currentColor"), Cl(e, "fill-rule", "evenodd"), Cl(e, "clip-rule", "evenodd"), Cl(e, "stroke-linecap", "round"), Cl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      E0(n, e, i), z0(e, t);
    },
    p: Wi,
    i: Wi,
    o: Wi,
    d(n) {
      n && q0(e);
    }
  };
}
class L0 extends S0 {
  constructor(e) {
    super(), B0(this, e, null, A0, M0, {});
  }
}
const {
  SvelteComponent: R0,
  append: D0,
  attr: Je,
  detach: T0,
  init: I0,
  insert: H0,
  noop: Oi,
  safe_not_equal: j0,
  set_style: Sl,
  svg_element: Ts
} = window.__gradio__svelte__internal;
function F0(l) {
  let e, t;
  return {
    c() {
      e = Ts("svg"), t = Ts("path"), Je(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Je(t, "fill", "none"), Je(t, "stroke-width", "2"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "version", "1.1"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Je(e, "xml:space", "preserve"), Je(e, "stroke", "currentColor"), Sl(e, "fill-rule", "evenodd"), Sl(e, "clip-rule", "evenodd"), Sl(e, "stroke-linecap", "round"), Sl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      H0(n, e, i), D0(e, t);
    },
    p: Oi,
    i: Oi,
    o: Oi,
    d(n) {
      n && T0(e);
    }
  };
}
class X0 extends R0 {
  constructor(e) {
    super(), I0(this, e, null, F0, j0, {});
  }
}
const {
  SvelteComponent: Y0,
  append: Is,
  attr: Ui,
  bubble: Hs,
  create_component: W0,
  destroy_component: O0,
  detach: _r,
  element: js,
  init: U0,
  insert: dr,
  listen: Ni,
  mount_component: N0,
  run_all: V0,
  safe_not_equal: P0,
  set_data: Z0,
  set_input_value: Fs,
  space: G0,
  text: K0,
  transition_in: J0,
  transition_out: Q0
} = window.__gradio__svelte__internal, { createEventDispatcher: x0, afterUpdate: $0 } = window.__gradio__svelte__internal;
function eh(l) {
  let e;
  return {
    c() {
      e = K0(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      dr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Z0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && _r(e);
    }
  };
}
function th(l) {
  let e, t, n, i, o, s, r;
  return t = new va({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [eh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = js("label"), W0(t.$$.fragment), n = G0(), i = js("input"), Ui(i, "type", "color"), i.disabled = /*disabled*/
      l[3], Ui(i, "class", "svelte-16l8u73"), Ui(e, "class", "block");
    },
    m(a, f) {
      dr(a, e, f), N0(t, e, null), Is(e, n), Is(e, i), Fs(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        Ni(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        Ni(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        Ni(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], s = !0);
    },
    p(a, [f]) {
      const u = {};
      f & /*show_label*/
      16 && (u.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (u.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (u.$$scope = { dirty: f, ctx: a }), t.$set(u), (!o || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && Fs(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (J0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      Q0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && _r(e), O0(t), s = !1, V0(r);
    }
  };
}
function nh(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = x0();
  function u() {
    f("change", n), i || f("input");
  }
  $0(() => {
    t(5, i = !1);
  });
  function c(g) {
    Hs.call(this, l, g);
  }
  function _(g) {
    Hs.call(this, l, g);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (g) => {
    "value" in g && t(0, n = g.value), "value_is_output" in g && t(5, i = g.value_is_output), "label" in g && t(1, o = g.label), "info" in g && t(2, s = g.info), "disabled" in g && t(3, r = g.disabled), "show_label" in g && t(4, a = g.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && u();
  }, [
    n,
    o,
    s,
    r,
    a,
    i,
    c,
    _,
    d
  ];
}
class lh extends Y0 {
  constructor(e) {
    super(), U0(this, e, nh, th, P0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var hr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, Yn = (l, e, t) => (hr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), ih = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, oh = (l, e, t, n) => (hr(l, e, "write to private field"), e.set(l, t), t), At;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class Ag extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Yn(this, At) + t; ; ) {
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
        oh(this, At, t);
      },
      flush: (t) => {
        if (Yn(this, At) === "")
          return;
        const n = e.allowCR && Yn(this, At).endsWith("\r") ? Yn(this, At).slice(0, -1) : Yn(this, At);
        t.enqueue(n);
      }
    }), ih(this, At, "");
  }
}
At = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: sh,
  append: mr,
  attr: te,
  bubble: ah,
  check_outros: rh,
  create_slot: gr,
  detach: fl,
  element: ai,
  empty: fh,
  get_all_dirty_from_scope: br,
  get_slot_changes: wr,
  group_outros: uh,
  init: ch,
  insert: ul,
  listen: _h,
  safe_not_equal: dh,
  set_style: Be,
  space: pr,
  src_url_equal: Pl,
  toggle_class: qn,
  transition_in: Zl,
  transition_out: Gl,
  update_slot_base: vr
} = window.__gradio__svelte__internal;
function hh(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && Xs(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = gr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = ai("button"), r && r.c(), t = pr(), f && f.c(), te(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), te(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], qn(e, "hidden", !/*visible*/
      l[2]), Be(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Be(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Be(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(u, c) {
      ul(u, e, c), r && r.m(e, null), mr(e, t), f && f.m(e, null), i = !0, o || (s = _h(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(u, c) {
      /*icon*/
      u[7] ? r ? r.p(u, c) : (r = Xs(u), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || c & /*$$scope*/
      2048) && vr(
        f,
        a,
        u,
        /*$$scope*/
        u[11],
        i ? wr(
          a,
          /*$$scope*/
          u[11],
          c,
          null
        ) : br(
          /*$$scope*/
          u[11]
        ),
        null
      ), (!i || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      u[4] + " " + /*variant*/
      u[3] + " " + /*elem_classes*/
      u[1].join(" ") + " svelte-8huxfn")) && te(e, "class", n), (!i || c & /*elem_id*/
      1) && te(
        e,
        "id",
        /*elem_id*/
        u[0]
      ), (!i || c & /*disabled*/
      256) && (e.disabled = /*disabled*/
      u[8]), (!i || c & /*size, variant, elem_classes, visible*/
      30) && qn(e, "hidden", !/*visible*/
      u[2]), c & /*scale*/
      512 && Be(
        e,
        "flex-grow",
        /*scale*/
        u[9]
      ), c & /*scale*/
      512 && Be(
        e,
        "width",
        /*scale*/
        u[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && Be(e, "min-width", typeof /*min_width*/
      u[10] == "number" ? `calc(min(${/*min_width*/
      u[10]}px, 100%))` : null);
    },
    i(u) {
      i || (Zl(f, u), i = !0);
    },
    o(u) {
      Gl(f, u), i = !1;
    },
    d(u) {
      u && fl(e), r && r.d(), f && f.d(u), o = !1, s();
    }
  };
}
function mh(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && Ys(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = gr(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = ai("a"), o && o.c(), t = pr(), r && r.c(), te(
        e,
        "href",
        /*link*/
        l[6]
      ), te(e, "rel", "noopener noreferrer"), te(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), te(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), te(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), qn(e, "hidden", !/*visible*/
      l[2]), qn(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), Be(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Be(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), Be(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Be(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      ul(a, e, f), o && o.m(e, null), mr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? o ? o.p(a, f) : (o = Ys(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || f & /*$$scope*/
      2048) && vr(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? wr(
          s,
          /*$$scope*/
          a[11],
          f,
          null
        ) : br(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && te(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && te(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && te(e, "class", n), (!i || f & /*elem_id*/
      1) && te(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && qn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && qn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Be(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Be(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Be(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Be(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (Zl(r, a), i = !0);
    },
    o(a) {
      Gl(r, a), i = !1;
    },
    d(a) {
      a && fl(e), o && o.d(), r && r.d(a);
    }
  };
}
function Xs(l) {
  let e, t, n;
  return {
    c() {
      e = ai("img"), te(e, "class", "button-icon svelte-8huxfn"), Pl(e.src, t = /*icon*/
      l[7].url) || te(e, "src", t), te(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      ul(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Pl(e.src, t = /*icon*/
      i[7].url) && te(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && te(e, "alt", n);
    },
    d(i) {
      i && fl(e);
    }
  };
}
function Ys(l) {
  let e, t, n;
  return {
    c() {
      e = ai("img"), te(e, "class", "button-icon svelte-8huxfn"), Pl(e.src, t = /*icon*/
      l[7].url) || te(e, "src", t), te(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      ul(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Pl(e.src, t = /*icon*/
      i[7].url) && te(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && te(e, "alt", n);
    },
    d(i) {
      i && fl(e);
    }
  };
}
function gh(l) {
  let e, t, n, i;
  const o = [mh, hh], s = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = fh();
    },
    m(a, f) {
      s[e].m(a, f), ul(a, n, f), i = !0;
    },
    p(a, [f]) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (uh(), Gl(s[u], 1, 1, () => {
        s[u] = null;
      }), rh(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), Zl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Zl(t), i = !0);
    },
    o(a) {
      Gl(t), i = !1;
    },
    d(a) {
      a && fl(n), s[e].d(a);
    }
  };
}
function bh(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: u = null } = e, { link: c = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: g = null } = e, { min_width: b = void 0 } = e;
  function p(w) {
    ah.call(this, l, w);
  }
  return l.$$set = (w) => {
    "elem_id" in w && t(0, o = w.elem_id), "elem_classes" in w && t(1, s = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, f = w.size), "value" in w && t(5, u = w.value), "link" in w && t(6, c = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, g = w.scale), "min_width" in w && t(10, b = w.min_width), "$$scope" in w && t(11, i = w.$$scope);
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    g,
    b,
    i,
    n,
    p
  ];
}
class fo extends sh {
  constructor(e) {
    super(), ch(this, e, bh, gh, dh, {
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
  SvelteComponent: wh,
  add_render_callback: kr,
  append: zl,
  attr: Ie,
  binding_callbacks: Ws,
  check_outros: ph,
  create_bidirectional_transition: Os,
  destroy_each: vh,
  detach: nl,
  element: Kl,
  empty: kh,
  ensure_array_like: Us,
  group_outros: yh,
  init: Ch,
  insert: ll,
  listen: uo,
  prevent_default: Sh,
  run_all: zh,
  safe_not_equal: qh,
  set_data: Bh,
  set_style: pn,
  space: co,
  text: Eh,
  toggle_class: lt,
  transition_in: Vi,
  transition_out: Ns
} = window.__gradio__svelte__internal, { createEventDispatcher: Mh } = window.__gradio__svelte__internal;
function Vs(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function Ps(l) {
  let e, t, n, i, o, s = Us(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Zs(Vs(l, s, a));
  return {
    c() {
      e = Kl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ie(e, "class", "options svelte-yuohum"), Ie(e, "role", "listbox"), pn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), pn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), pn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      ll(a, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      l[22](e), n = !0, i || (o = uo(e, "mousedown", Sh(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Us(
          /*filtered_indices*/
          a[1]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const c = Vs(a, s, u);
          r[u] ? r[u].p(c, f) : (r[u] = Zs(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = s.length;
      }
      f & /*bottom*/
      512 && pn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && pn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && pn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && kr(() => {
        n && (t || (t = Os(e, $o, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Os(e, $o, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && nl(e), vh(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function Zs(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, f;
  return {
    c() {
      e = Kl("li"), t = Kl("span"), t.textContent = "✓", n = co(), o = Eh(i), s = co(), Ie(t, "class", "inner-item svelte-yuohum"), lt(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Ie(e, "class", "item svelte-yuohum"), Ie(e, "data-index", r = /*index*/
      l[26]), Ie(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Ie(e, "data-testid", "dropdown-option"), Ie(e, "role", "option"), Ie(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), lt(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), lt(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), lt(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), lt(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(u, c) {
      ll(u, e, c), zl(e, t), zl(e, n), zl(e, o), zl(e, s);
    },
    p(u, c) {
      c & /*selected_indices, filtered_indices*/
      18 && lt(t, "hide", !/*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )), c & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0] + "") && Bh(o, i), c & /*filtered_indices*/
      2 && r !== (r = /*index*/
      u[26]) && Ie(e, "data-index", r), c & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      u[0][
        /*index*/
        u[26]
      ][0]) && Ie(e, "aria-label", a), c & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      u[4].includes(
        /*index*/
        u[26]
      )) && Ie(e, "aria-selected", f), c & /*selected_indices, filtered_indices*/
      18 && lt(
        e,
        "selected",
        /*selected_indices*/
        u[4].includes(
          /*index*/
          u[26]
        )
      ), c & /*filtered_indices, active_index*/
      34 && lt(
        e,
        "active",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && lt(
        e,
        "bg-gray-100",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      ), c & /*filtered_indices, active_index*/
      34 && lt(
        e,
        "dark:bg-gray-600",
        /*index*/
        u[26] === /*active_index*/
        u[5]
      );
    },
    d(u) {
      u && nl(e);
    }
  };
}
function Ah(l) {
  let e, t, n, i, o;
  kr(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && Ps(l)
  );
  return {
    c() {
      e = Kl("div"), t = co(), s && s.c(), n = kh(), Ie(e, "class", "reference");
    },
    m(r, a) {
      ll(r, e, a), l[20](e), ll(r, t, a), s && s.m(r, a), ll(r, n, a), i || (o = [
        uo(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        uo(
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
      12 && Vi(s, 1)) : (s = Ps(r), s.c(), Vi(s, 1), s.m(n.parentNode, n)) : s && (yh(), Ns(s, 1, 1, () => {
        s = null;
      }), ph());
    },
    i(r) {
      Vi(s);
    },
    o(r) {
      Ns(s);
    },
    d(r) {
      r && (nl(e), nl(t), nl(n)), l[20](null), s && s.d(r), i = !1, zh(o);
    }
  };
}
function Lh(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: u = null } = e, c, _, d, g, b, p, w, h, m;
  function k() {
    const { top: R, bottom: Y } = b.getBoundingClientRect();
    t(16, c = R), t(17, _ = m - Y);
  }
  let C = null;
  function v() {
    r && (C !== null && clearTimeout(C), C = setTimeout(
      () => {
        k(), C = null;
      },
      10
    ));
  }
  const z = Mh();
  function y() {
    t(11, m = window.innerHeight);
  }
  function A(R) {
    Ws[R ? "unshift" : "push"](() => {
      b = R, t(6, b);
    });
  }
  const S = (R) => z("change", R);
  function D(R) {
    Ws[R ? "unshift" : "push"](() => {
      p = R, t(7, p);
    });
  }
  return l.$$set = (R) => {
    "choices" in R && t(0, o = R.choices), "filtered_indices" in R && t(1, s = R.filtered_indices), "show_options" in R && t(2, r = R.show_options), "disabled" in R && t(3, a = R.disabled), "selected_indices" in R && t(4, f = R.selected_indices), "active_index" in R && t(5, u = R.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && b) {
        if (p && f.length > 0) {
          let Y = p.querySelectorAll("li");
          for (const K of Array.from(Y))
            if (K.getAttribute("data-index") === f[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, K.offsetTop);
              break;
            }
        }
        k();
        const R = t(15, i = b.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (R == null ? void 0 : R.height) || 0), t(8, g = (R == null ? void 0 : R.width) || 0);
      }
      _ > c ? (t(10, h = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, h = c - d));
    }
  }, [
    o,
    s,
    r,
    a,
    f,
    u,
    b,
    p,
    g,
    w,
    h,
    m,
    v,
    z,
    n,
    i,
    c,
    _,
    d,
    y,
    A,
    S,
    D
  ];
}
class Rh extends wh {
  constructor(e) {
    super(), Ch(this, e, Lh, Ah, qh, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Dh(l, e) {
  return (l % e + e) % e;
}
function Gs(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Th(l, e, t) {
  l("change", e), t || l("input");
}
function Ih(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Dh(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Hh,
  append: Ot,
  attr: Te,
  binding_callbacks: jh,
  check_outros: Fh,
  create_component: _o,
  destroy_component: ho,
  detach: So,
  element: yn,
  group_outros: Xh,
  init: Yh,
  insert: zo,
  listen: Wn,
  mount_component: mo,
  run_all: Wh,
  safe_not_equal: Oh,
  set_data: Uh,
  set_input_value: Ks,
  space: Pi,
  text: Nh,
  toggle_class: vn,
  transition_in: Cn,
  transition_out: Gn
} = window.__gradio__svelte__internal, { onMount: Vh } = window.__gradio__svelte__internal, { createEventDispatcher: Ph, afterUpdate: Zh } = window.__gradio__svelte__internal;
function Gh(l) {
  let e;
  return {
    c() {
      e = Nh(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      zo(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Uh(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && So(e);
    }
  };
}
function Js(l) {
  let e, t, n;
  return t = new go({}), {
    c() {
      e = yn("div"), _o(t.$$.fragment), Te(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      zo(i, e, o), mo(t, e, null), n = !0;
    },
    i(i) {
      n || (Cn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Gn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && So(e), ho(t);
    }
  };
}
function Kh(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, g;
  t = new va({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [Gh] },
      $$scope: { ctx: l }
    }
  });
  let b = !/*disabled*/
  l[3] && Js();
  return c = new Rh({
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
  }), c.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = yn("div"), _o(t.$$.fragment), n = Pi(), i = yn("div"), o = yn("div"), s = yn("div"), r = yn("input"), f = Pi(), b && b.c(), u = Pi(), _o(c.$$.fragment), Te(r, "role", "listbox"), Te(r, "aria-controls", "dropdown-options"), Te(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), Te(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), Te(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], Te(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], vn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), Te(s, "class", "secondary-wrap svelte-1m1zvyj"), Te(o, "class", "wrap-inner svelte-1m1zvyj"), vn(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), Te(i, "class", "wrap svelte-1m1zvyj"), Te(e, "class", "svelte-1m1zvyj"), vn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(p, w) {
      zo(p, e, w), mo(t, e, null), Ot(e, n), Ot(e, i), Ot(i, o), Ot(o, s), Ot(s, r), Ks(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), Ot(s, f), b && b.m(s, null), Ot(i, u), mo(c, i, null), _ = !0, d || (g = [
        Wn(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        Wn(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        Wn(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        Wn(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        Wn(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(p, w) {
      const h = {};
      w[0] & /*show_label*/
      16 && (h.show_label = /*show_label*/
      p[4]), w[0] & /*info*/
      2 && (h.info = /*info*/
      p[1]), w[0] & /*label*/
      1 | w[1] & /*$$scope*/
      4 && (h.$$scope = { dirty: w, ctx: p }), t.$set(h), (!_ || w[0] & /*show_options*/
      4096) && Te(
        r,
        "aria-expanded",
        /*show_options*/
        p[12]
      ), (!_ || w[0] & /*label*/
      1) && Te(
        r,
        "aria-label",
        /*label*/
        p[0]
      ), (!_ || w[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      p[3]), (!_ || w[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      p[7])) && (r.readOnly = a), w[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      p[9] && Ks(
        r,
        /*input_text*/
        p[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && vn(r, "subdued", !/*choices_names*/
      p[13].includes(
        /*input_text*/
        p[9]
      ) && !/*allow_custom_value*/
      p[6]), /*disabled*/
      p[3] ? b && (Xh(), Gn(b, 1, 1, () => {
        b = null;
      }), Fh()) : b ? w[0] & /*disabled*/
      8 && Cn(b, 1) : (b = Js(), b.c(), Cn(b, 1), b.m(s, null)), (!_ || w[0] & /*show_options*/
      4096) && vn(
        o,
        "show_options",
        /*show_options*/
        p[12]
      );
      const m = {};
      w[0] & /*show_options*/
      4096 && (m.show_options = /*show_options*/
      p[12]), w[0] & /*choices*/
      4 && (m.choices = /*choices*/
      p[2]), w[0] & /*filtered_indices*/
      1024 && (m.filtered_indices = /*filtered_indices*/
      p[10]), w[0] & /*disabled*/
      8 && (m.disabled = /*disabled*/
      p[3]), w[0] & /*selected_index*/
      2048 && (m.selected_indices = /*selected_index*/
      p[11] === null ? [] : [
        /*selected_index*/
        p[11]
      ]), w[0] & /*active_index*/
      16384 && (m.active_index = /*active_index*/
      p[14]), c.$set(m), (!_ || w[0] & /*container*/
      32) && vn(
        e,
        "container",
        /*container*/
        p[5]
      );
    },
    i(p) {
      _ || (Cn(t.$$.fragment, p), Cn(b), Cn(c.$$.fragment, p), _ = !0);
    },
    o(p) {
      Gn(t.$$.fragment, p), Gn(b), Gn(c.$$.fragment, p), _ = !1;
    },
    d(p) {
      p && So(e), ho(t), l[29](null), b && b.d(), ho(c), d = !1, Wh(g);
    }
  };
}
function Jh(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: u = !1 } = e, { show_label: c } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: g = !0 } = e, b, p = !1, w, h, m = "", k = "", C = !1, v = [], z = null, y = null, A;
  const S = Ph();
  o ? (A = a.map((L) => L[1]).indexOf(o), y = A, y === -1 ? (s = o, y = null) : ([m, s] = a[y], k = m), R()) : a.length > 0 && (A = 0, y = 0, [m, o] = a[y], s = o, k = m);
  function D() {
    t(13, w = a.map((L) => L[0])), t(24, h = a.map((L) => L[1]));
  }
  function R() {
    D(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, m = ""), t(11, y = null)) : h.includes(o) ? (t(9, m = w[h.indexOf(o)]), t(11, y = h.indexOf(o))) : d ? (t(9, m = o), t(11, y = null)) : (t(9, m = ""), t(11, y = null)), t(27, A = y);
  }
  function Y(L) {
    if (t(11, y = parseInt(L.detail.target.dataset.index)), isNaN(y)) {
      t(11, y = null);
      return;
    }
    t(12, p = !1), t(14, z = null), b.blur();
  }
  function K(L) {
    t(10, v = a.map((P, J) => J)), t(12, p = !0), S("focus");
  }
  function x() {
    d ? t(20, o = m) : t(9, m = w[h.indexOf(o)]), t(12, p = !1), t(14, z = null), S("blur");
  }
  function N(L) {
    t(12, [p, z] = Ih(L, z, v), p, (t(14, z), t(2, a), t(23, f), t(6, d), t(9, m), t(10, v), t(8, b), t(25, k), t(11, y), t(27, A), t(26, C), t(24, h))), L.key === "Enter" && (z !== null ? (t(11, y = z), t(12, p = !1), b.blur(), t(14, z = null)) : w.includes(m) ? (t(11, y = w.indexOf(m)), t(12, p = !1), t(14, z = null), b.blur()) : d && (t(20, o = m), t(11, y = null), t(12, p = !1), t(14, z = null), b.blur()), S("enter", o));
  }
  Zh(() => {
    t(21, r = !1), t(26, C = !0);
  }), Vh(() => {
    b.focus();
  });
  function V() {
    m = this.value, t(9, m), t(11, y), t(27, A), t(26, C), t(2, a), t(24, h);
  }
  function T(L) {
    jh[L ? "unshift" : "push"](() => {
      b = L, t(8, b);
    });
  }
  const O = (L) => S("key_up", { key: L.key, input_value: m });
  return l.$$set = (L) => {
    "label" in L && t(0, n = L.label), "info" in L && t(1, i = L.info), "value" in L && t(20, o = L.value), "value_is_output" in L && t(21, r = L.value_is_output), "choices" in L && t(2, a = L.choices), "disabled" in L && t(3, u = L.disabled), "show_label" in L && t(4, c = L.show_label), "container" in L && t(5, _ = L.container), "allow_custom_value" in L && t(6, d = L.allow_custom_value), "filterable" in L && t(7, g = L.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && y !== A && y !== null && C && (t(9, [m, o] = a[y], m, (t(20, o), t(11, y), t(27, A), t(26, C), t(2, a), t(24, h))), t(27, A = y), S("select", {
      index: y,
      value: h[y],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), Th(S, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && D(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || R(), t(23, f = a), t(10, v = Gs(a, m)), !d && v.length > 0 && t(14, z = v[0]), b == document.activeElement && t(12, p = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== k && (t(10, v = Gs(a, m)), t(25, k = m), !d && v.length > 0 && t(14, z = v[0]));
  }, [
    n,
    i,
    a,
    u,
    c,
    _,
    d,
    g,
    b,
    m,
    v,
    y,
    p,
    w,
    z,
    S,
    Y,
    K,
    x,
    N,
    o,
    r,
    s,
    f,
    h,
    k,
    C,
    A,
    V,
    T,
    O
  ];
}
class Qh extends Hh {
  constructor(e) {
    super(), Yh(
      this,
      e,
      Jh,
      Kh,
      Oh,
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
  SvelteComponent: xh,
  append: it,
  attr: ql,
  check_outros: $h,
  create_component: Kn,
  destroy_component: Jn,
  detach: cl,
  element: Lt,
  group_outros: em,
  init: tm,
  insert: _l,
  mount_component: Qn,
  safe_not_equal: nm,
  set_style: xn,
  space: Bl,
  text: qo,
  transition_in: Rt,
  transition_out: Vt
} = window.__gradio__svelte__internal, { createEventDispatcher: lm } = window.__gradio__svelte__internal, { onMount: im, onDestroy: om } = window.__gradio__svelte__internal;
function sm(l) {
  let e;
  return {
    c() {
      e = qo("Cancel");
    },
    m(t, n) {
      _l(t, e, n);
    },
    d(t) {
      t && cl(e);
    }
  };
}
function Qs(l) {
  let e, t, n;
  return t = new fo({
    props: {
      variant: "stop",
      $$slots: { default: [am] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[12]
  ), {
    c() {
      e = Lt("div"), Kn(t.$$.fragment), xn(e, "margin-right", "8px");
    },
    m(i, o) {
      _l(i, e, o), Qn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      65536 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Rt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Vt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && cl(e), Jn(t);
    }
  };
}
function am(l) {
  let e;
  return {
    c() {
      e = qo("Remove");
    },
    m(t, n) {
      _l(t, e, n);
    },
    d(t) {
      t && cl(e);
    }
  };
}
function rm(l) {
  let e;
  return {
    c() {
      e = qo("OK");
    },
    m(t, n) {
      _l(t, e, n);
    },
    d(t) {
      t && cl(e);
    }
  };
}
function fm(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, g, b, p;
  o = new Qh({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    l[5]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    l[7]
  ), a = new lh({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    l[6]
  ), c = new fo({
    props: {
      $$slots: { default: [sm] },
      $$scope: { ctx: l }
    }
  }), c.$on(
    "click",
    /*click_handler*/
    l[11]
  );
  let w = (
    /*showRemove*/
    l[3] && Qs(l)
  );
  return b = new fo({
    props: {
      variant: "primary",
      $$slots: { default: [rm] },
      $$scope: { ctx: l }
    }
  }), b.$on(
    "click",
    /*click_handler_2*/
    l[13]
  ), {
    c() {
      e = Lt("div"), t = Lt("div"), n = Lt("span"), i = Lt("div"), Kn(o.$$.fragment), s = Bl(), r = Lt("div"), Kn(a.$$.fragment), f = Bl(), u = Lt("div"), Kn(c.$$.fragment), _ = Bl(), w && w.c(), d = Bl(), g = Lt("div"), Kn(b.$$.fragment), xn(i, "margin-right", "10px"), xn(r, "margin-right", "40px"), xn(r, "margin-bottom", "8px"), xn(u, "margin-right", "8px"), ql(n, "class", "model-content svelte-hkn2q1"), ql(t, "class", "modal-container svelte-hkn2q1"), ql(e, "class", "modal svelte-hkn2q1"), ql(e, "id", "model-box-edit");
    },
    m(h, m) {
      _l(h, e, m), it(e, t), it(t, n), it(n, i), Qn(o, i, null), it(n, s), it(n, r), Qn(a, r, null), it(n, f), it(n, u), Qn(c, u, null), it(n, _), w && w.m(n, null), it(n, d), it(n, g), Qn(b, g, null), p = !0;
    },
    p(h, [m]) {
      const k = {};
      m & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      h[0]), m & /*choices*/
      4 && (k.choices = /*choices*/
      h[2]), o.$set(k);
      const C = {};
      m & /*currentColor*/
      2 && (C.value = /*currentColor*/
      h[1]), a.$set(C);
      const v = {};
      m & /*$$scope*/
      65536 && (v.$$scope = { dirty: m, ctx: h }), c.$set(v), /*showRemove*/
      h[3] ? w ? (w.p(h, m), m & /*showRemove*/
      8 && Rt(w, 1)) : (w = Qs(h), w.c(), Rt(w, 1), w.m(n, d)) : w && (em(), Vt(w, 1, 1, () => {
        w = null;
      }), $h());
      const z = {};
      m & /*$$scope*/
      65536 && (z.$$scope = { dirty: m, ctx: h }), b.$set(z);
    },
    i(h) {
      p || (Rt(o.$$.fragment, h), Rt(a.$$.fragment, h), Rt(c.$$.fragment, h), Rt(w), Rt(b.$$.fragment, h), p = !0);
    },
    o(h) {
      Vt(o.$$.fragment, h), Vt(a.$$.fragment, h), Vt(c.$$.fragment, h), Vt(w), Vt(b.$$.fragment, h), p = !1;
    },
    d(h) {
      h && cl(e), Jn(o), Jn(a), Jn(c), w && w.d(), Jn(b);
    }
  };
}
function um(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e;
  const u = lm();
  function c(m) {
    u("change", {
      label: i,
      color: a,
      ret: m
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(m) {
    const { detail: k } = m;
    let C = k;
    Number.isInteger(C) ? (Array.isArray(s) && C < s.length && t(1, a = s[C]), Array.isArray(o) && C < o.length && t(0, i = o[C][0])) : t(0, i = C);
  }
  function d(m) {
    const { detail: k } = m;
    t(1, a = k);
  }
  function g(m) {
    _(m), c(1);
  }
  function b(m) {
    switch (m.key) {
      case "Enter":
        c(1);
        break;
    }
  }
  im(() => {
    document.addEventListener("keydown", b), t(0, i = n), t(1, a = r);
  }), om(() => {
    document.removeEventListener("keydown", b);
  });
  const p = () => c(0), w = () => c(-1), h = () => c(1);
  return l.$$set = (m) => {
    "label" in m && t(8, n = m.label), "currentLabel" in m && t(0, i = m.currentLabel), "choices" in m && t(2, o = m.choices), "choicesColors" in m && t(9, s = m.choicesColors), "color" in m && t(10, r = m.color), "currentColor" in m && t(1, a = m.currentColor), "showRemove" in m && t(3, f = m.showRemove);
  }, [
    i,
    a,
    o,
    f,
    c,
    _,
    d,
    g,
    n,
    s,
    r,
    p,
    w,
    h
  ];
}
class yr extends xh {
  constructor(e) {
    super(), tm(this, e, um, fm, nm, {
      label: 8,
      currentLabel: 0,
      choices: 2,
      choicesColors: 9,
      color: 10,
      currentColor: 1,
      showRemove: 3
    });
  }
}
const ce = (l, e, t) => Math.min(Math.max(l, e), t);
function Zi(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class Gi {
  constructor(e, t, n, i, o, s, r, a, f, u, c, _ = "rgb(255, 255, 255)", d = 0.5, g = 25, b = 8, p = 2, w = 4, h = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (m) => {
      if (this.isDragging) {
        let k = m.clientX - this.offsetMouseX - this.xmin, C = m.clientY - this.offsetMouseY - this.ymin;
        const v = this.canvasXmax - this.canvasXmin, z = this.canvasYmax - this.canvasYmin;
        k = ce(k, -this.xmin, v - this.xmax), C = ce(C, -this.ymin, z - this.ymax), this.xmin += k, this.ymin += C, this.xmax += k, this.ymax += C, this.updateHandles(), this.renderCallBack();
      }
    }, this.handleCreating = (m) => {
      if (this.isCreating) {
        let [k, C] = this.toBoxCoordinates(m.clientX, m.clientY);
        k -= this.offsetMouseX, C -= this.offsetMouseY, k > this.xmax ? (this.creatingAnchorX == "xmax" && (this.xmin = this.xmax), this.xmax = k, this.creatingAnchorX = "xmin") : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmin" ? this.xmax = k : k > this.xmin && k < this.xmax && this.creatingAnchorX == "xmax" ? this.xmin = k : k < this.xmin && (this.creatingAnchorX == "xmin" && (this.xmax = this.xmin), this.xmin = k, this.creatingAnchorX = "xmax"), C > this.ymax ? (this.creatingAnchorY == "ymax" && (this.ymin = this.ymax), this.ymax = C, this.creatingAnchorY = "ymin") : C > this.ymin && C < this.ymax && this.creatingAnchorY == "ymin" ? this.ymax = C : C > this.ymin && C < this.ymax && this.creatingAnchorY == "ymax" ? this.ymin = C : C < this.ymin && (this.creatingAnchorY == "ymin" && (this.ymax = this.ymin), this.ymin = C, this.creatingAnchorY = "ymax"), this.updateHandles(), this.renderCallBack();
      }
    }, this.stopCreating = (m) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = this.canvasXmax - this.canvasXmin, C = this.canvasYmax - this.canvasYmin;
        this.xmin = ce(this.xmin, 0, k - this.minSize), this.ymin = ce(this.ymin, 0, C - this.minSize), this.xmax = ce(this.xmax, this.minSize, k), this.ymax = ce(this.ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() < this.minSize && (this.creatingAnchorX == "xmin" ? this.xmax = this.xmin + this.minSize : this.xmin = this.xmax - this.minSize), this.getHeight() < this.minSize && (this.creatingAnchorY == "ymin" ? this.ymax = this.ymin + this.minSize : this.ymin = this.ymax - this.minSize), this.xmax > k ? (this.xmin -= this.xmax - k, this.xmax = k) : this.xmin < 0 && (this.xmax -= this.xmin, this.xmin = 0), this.ymax > C ? (this.ymin -= this.ymax - C, this.ymax = C) : this.ymin < 0 && (this.ymax -= this.ymin, this.ymin = 0)), this.updateHandles(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (m) => {
      if (this.isResizing) {
        const k = m.clientX, C = m.clientY, v = k - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX, z = C - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY, y = this.canvasXmax - this.canvasXmin, A = this.canvasYmax - this.canvasYmin;
        switch (this.resizingHandleIndex) {
          case 0:
            this.xmin += v, this.ymin += z, this.xmin = ce(this.xmin, 0, this.xmax - this.minSize), this.ymin = ce(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 1:
            this.xmax += v, this.ymin += z, this.xmax = ce(this.xmax, this.xmin + this.minSize, y), this.ymin = ce(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 2:
            this.xmax += v, this.ymax += z, this.xmax = ce(this.xmax, this.xmin + this.minSize, y), this.ymax = ce(this.ymax, this.ymin + this.minSize, A);
            break;
          case 3:
            this.xmin += v, this.ymax += z, this.xmin = ce(this.xmin, 0, this.xmax - this.minSize), this.ymax = ce(this.ymax, this.ymin + this.minSize, A);
            break;
          case 4:
            this.ymin += z, this.ymin = ce(this.ymin, 0, this.ymax - this.minSize);
            break;
          case 5:
            this.xmax += v, this.xmax = ce(this.xmax, this.xmin + this.minSize, y);
            break;
          case 6:
            this.ymax += z, this.ymax = ce(this.ymax, this.ymin + this.minSize, A);
            break;
          case 7:
            this.xmin += v, this.xmin = ce(this.xmin, 0, this.xmax - this.minSize);
            break;
        }
        this.updateHandles(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasXmin = n, this.canvasYmin = i, this.canvasXmax = o, this.canvasYmax = s, this.scaleFactor = h, this.label = r, this.isDragging = !1, this.isCreating = !1, this.xmin = a, this.ymin = f, this.xmax = u, this.ymax = c, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = p, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = _, this.alpha = d, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this.xmin,
      ymin: this.ymin,
      xmax: this.xmax,
      ymax: this.ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this.xmin = Math.round(this.xmin * t), this.ymin = Math.round(this.ymin * t), this.xmax = Math.round(this.xmax * t), this.ymax = Math.round(this.ymax * t), this.updateHandles(), this.scaleFactor = e;
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
  render(e) {
    let t, n;
    if (e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Zi(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Zi(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Zi(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this.xmin, this.offsetMouseY = e.clientY - this.ymin, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
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
}
const Ut = [
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
], {
  SvelteComponent: cm,
  append: mt,
  attr: ze,
  binding_callbacks: _m,
  bubble: xs,
  check_outros: Hl,
  create_component: en,
  destroy_component: tn,
  detach: Jt,
  element: Dt,
  empty: dm,
  group_outros: jl,
  init: hm,
  insert: Qt,
  is_function: mm,
  listen: Qe,
  mount_component: nn,
  noop: gm,
  run_all: Cr,
  safe_not_equal: bm,
  space: ln,
  toggle_class: El,
  transition_in: fe,
  transition_out: ve
} = window.__gradio__svelte__internal, { onMount: wm, onDestroy: pm, createEventDispatcher: vm } = window.__gradio__svelte__internal;
function $s(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, g, b, p;
  n = new C0({}), s = new L0({});
  let w = (
    /*showRemoveButton*/
    l[1] && ea(l)
  );
  return u = new t_({}), d = new Yc({}), {
    c() {
      e = Dt("span"), t = Dt("button"), en(n.$$.fragment), i = ln(), o = Dt("button"), en(s.$$.fragment), r = ln(), w && w.c(), a = ln(), f = Dt("button"), en(u.$$.fragment), c = ln(), _ = Dt("button"), en(d.$$.fragment), ze(t, "class", "icon svelte-3rql59"), ze(t, "aria-label", "Create box"), El(
        t,
        "selected",
        /*mode*/
        l[9] === /*Mode*/
        l[6].creation
      ), ze(o, "class", "icon svelte-3rql59"), ze(o, "aria-label", "Edit boxes"), El(
        o,
        "selected",
        /*mode*/
        l[9] === /*Mode*/
        l[6].drag
      ), ze(f, "class", "icon svelte-3rql59"), ze(f, "aria-label", "Rotate counterclockwise"), ze(_, "class", "icon svelte-3rql59"), ze(_, "aria-label", "Rotate clockwise"), ze(e, "class", "canvas-control svelte-3rql59");
    },
    m(h, m) {
      Qt(h, e, m), mt(e, t), nn(n, t, null), mt(e, i), mt(e, o), nn(s, o, null), mt(e, r), w && w.m(e, null), mt(e, a), mt(e, f), nn(u, f, null), mt(e, c), mt(e, _), nn(d, _, null), g = !0, b || (p = [
        Qe(
          t,
          "click",
          /*click_handler*/
          l[33]
        ),
        Qe(
          o,
          "click",
          /*click_handler_1*/
          l[34]
        ),
        Qe(
          f,
          "click",
          /*click_handler_3*/
          l[36]
        ),
        Qe(
          _,
          "click",
          /*click_handler_4*/
          l[37]
        )
      ], b = !0);
    },
    p(h, m) {
      (!g || m[0] & /*mode, Mode*/
      576) && El(
        t,
        "selected",
        /*mode*/
        h[9] === /*Mode*/
        h[6].creation
      ), (!g || m[0] & /*mode, Mode*/
      576) && El(
        o,
        "selected",
        /*mode*/
        h[9] === /*Mode*/
        h[6].drag
      ), /*showRemoveButton*/
      h[1] ? w ? (w.p(h, m), m[0] & /*showRemoveButton*/
      2 && fe(w, 1)) : (w = ea(h), w.c(), fe(w, 1), w.m(e, a)) : w && (jl(), ve(w, 1, 1, () => {
        w = null;
      }), Hl());
    },
    i(h) {
      g || (fe(n.$$.fragment, h), fe(s.$$.fragment, h), fe(w), fe(u.$$.fragment, h), fe(d.$$.fragment, h), g = !0);
    },
    o(h) {
      ve(n.$$.fragment, h), ve(s.$$.fragment, h), ve(w), ve(u.$$.fragment, h), ve(d.$$.fragment, h), g = !1;
    },
    d(h) {
      h && Jt(e), tn(n), tn(s), w && w.d(), tn(u), tn(d), b = !1, Cr(p);
    }
  };
}
function ea(l) {
  let e, t, n, i, o;
  return t = new X0({}), {
    c() {
      e = Dt("button"), en(t.$$.fragment), ze(e, "class", "icon svelte-3rql59"), ze(e, "aria-label", "Remove boxes");
    },
    m(s, r) {
      Qt(s, e, r), nn(t, e, null), n = !0, i || (o = Qe(
        e,
        "click",
        /*click_handler_2*/
        l[35]
      ), i = !0);
    },
    p: gm,
    i(s) {
      n || (fe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ve(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jt(e), tn(t), i = !1, o();
    }
  };
}
function ta(l) {
  let e, t;
  return e = new yr({
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
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? sl(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[18]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[38]
  ), {
    c() {
      en(e.$$.fragment);
    },
    m(n, i) {
      nn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      257 && (o.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      257 && (o.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? sl(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      tn(e, n);
    }
  };
}
function na(l) {
  let e, t;
  return e = new yr({
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
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[8] >= 0 && /*selectedBox*/
        l[8] < /*value*/
        l[0].boxes.length ? sl(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[19]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[39]
  ), {
    c() {
      en(e.$$.fragment);
    },
    m(n, i) {
      nn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      257 && (o.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      257 && (o.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? sl(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (fe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      tn(e, n);
    }
  };
}
function km(l) {
  let e, t, n, i, o, s, r, a, f, u = (
    /*interactive*/
    l[2] && $s(l)
  ), c = (
    /*editModalVisible*/
    l[10] && ta(l)
  ), _ = (
    /*newModalVisible*/
    l[11] && na(l)
  );
  return {
    c() {
      e = Dt("div"), t = Dt("canvas"), n = ln(), u && u.c(), i = ln(), c && c.c(), o = ln(), _ && _.c(), s = dm(), ze(t, "class", "canvas-annotator svelte-3rql59"), ze(e, "class", "canvas-container svelte-3rql59"), ze(e, "tabindex", "-1");
    },
    m(d, g) {
      Qt(d, e, g), mt(e, t), l[32](t), Qt(d, n, g), u && u.m(d, g), Qt(d, i, g), c && c.m(d, g), Qt(d, o, g), _ && _.m(d, g), Qt(d, s, g), r = !0, a || (f = [
        Qe(
          t,
          "pointerdown",
          /*handlePointerDown*/
          l[12]
        ),
        Qe(
          t,
          "pointerup",
          /*handlePointerUp*/
          l[13]
        ),
        Qe(t, "pointermove", function() {
          mm(
            /*handlesCursor*/
            l[5] ? (
              /*handlePointerMove*/
              l[14]
            ) : null
          ) && /*handlesCursor*/
          (l[5] ? (
            /*handlePointerMove*/
            l[14]
          ) : null).apply(this, arguments);
        }),
        Qe(
          t,
          "dblclick",
          /*handleDoubleClick*/
          l[17]
        ),
        Qe(
          e,
          "focusin",
          /*handleCanvasFocus*/
          l[22]
        ),
        Qe(
          e,
          "focusout",
          /*handleCanvasBlur*/
          l[23]
        )
      ], a = !0);
    },
    p(d, g) {
      l = d, /*interactive*/
      l[2] ? u ? (u.p(l, g), g[0] & /*interactive*/
      4 && fe(u, 1)) : (u = $s(l), u.c(), fe(u, 1), u.m(i.parentNode, i)) : u && (jl(), ve(u, 1, 1, () => {
        u = null;
      }), Hl()), /*editModalVisible*/
      l[10] ? c ? (c.p(l, g), g[0] & /*editModalVisible*/
      1024 && fe(c, 1)) : (c = ta(l), c.c(), fe(c, 1), c.m(o.parentNode, o)) : c && (jl(), ve(c, 1, 1, () => {
        c = null;
      }), Hl()), /*newModalVisible*/
      l[11] ? _ ? (_.p(l, g), g[0] & /*newModalVisible*/
      2048 && fe(_, 1)) : (_ = na(l), _.c(), fe(_, 1), _.m(s.parentNode, s)) : _ && (jl(), ve(_, 1, 1, () => {
        _ = null;
      }), Hl());
    },
    i(d) {
      r || (fe(u), fe(c), fe(_), r = !0);
    },
    o(d) {
      ve(u), ve(c), ve(_), r = !1;
    },
    d(d) {
      d && (Jt(e), Jt(n), Jt(i), Jt(o), Jt(s)), l[32](null), u && u.d(d), c && c.d(d), _ && _.d(d), a = !1, Cr(f);
    }
  };
}
function Ki(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function sl(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function ym(l, e, t) {
  var n;
  (function(E) {
    E[E.creation = 0] = "creation", E[E.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 25 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: u } = e, { value: c } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: g = !1 } = e, { singleBox: b = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: w = !0 } = e;
  p === null && (p = g);
  let h, m, k = null, C = -1, v = n.drag;
  c !== null && c.boxes.length == 0 && (v = n.creation);
  let z = 0, y = 0, A = 0, S = 0, D = 1, R = 0, Y = 0, K = 0, x = 0, N = 0, V = 0, T = !1, O = !1;
  const L = vm();
  function P() {
    switch (c.orientation) {
      case 0:
        [N, V] = [R, Y];
        break;
      case 1:
        m.translate(R, 0), m.rotate(Math.PI / 2), [N, V] = [Y, R];
        break;
      case 2:
        m.translate(R, Y), m.rotate(Math.PI), [N, V] = [R, Y];
        break;
      case 3:
        m.translate(0, Y), m.rotate(-Math.PI / 2), [N, V] = [Y, R];
        break;
    }
  }
  function J() {
    if (m) {
      m.clearRect(0, 0, h.width, h.height), P(), k !== null && m.drawImage(k, z, y, N, V), m.resetTransform();
      for (const E of c.boxes.slice().reverse())
        E.render(m);
    }
  }
  function ee(E) {
    t(8, C = E), c.boxes.forEach((W) => {
      W.setSelected(!1);
    }), E >= 0 && E < c.boxes.length && c.boxes[E].setSelected(!0), J();
  }
  function me(E) {
    o && (E.target instanceof Element && E.target.hasPointerCapture(E.pointerId) && E.target.releasePointerCapture(E.pointerId), v === n.creation ? Q(E) : v === n.drag && I(E));
  }
  function I(E) {
    const W = h.getBoundingClientRect(), le = E.clientX - W.left, ke = E.clientY - W.top;
    for (const [pe, ue] of c.boxes.entries()) {
      const Hn = ue.indexOfPointInsideHandle(le, ke);
      if (Hn >= 0) {
        ee(pe), ue.startResize(Hn, E);
        return;
      }
    }
    for (const [pe, ue] of c.boxes.entries())
      if (ue.isPointInsideBox(le, ke)) {
        ee(pe), ue.startDrag(E);
        return;
      }
    b || ee(-1);
  }
  function Ue(E) {
    L("change");
  }
  function M(E) {
    if (c === null || v !== n.drag)
      return;
    const W = h.getBoundingClientRect(), le = E.clientX - W.left, ke = E.clientY - W.top;
    for (const [pe, ue] of c.boxes.entries()) {
      const Hn = ue.indexOfPointInsideHandle(le, ke);
      if (Hn >= 0) {
        t(7, h.style.cursor = ue.resizeHandles[Hn].cursor, h);
        return;
      }
    }
    t(7, h.style.cursor = "default", h);
  }
  function j(E) {
    if (o)
      switch (E.key) {
        case "Delete":
          he();
          break;
      }
  }
  function Q(E) {
    const W = h.getBoundingClientRect(), le = (E.clientX - W.left - z) / D, ke = (E.clientY - W.top - y) / D;
    let pe;
    d.length > 0 ? pe = Ki(d[0]) : b ? c.boxes.length > 0 ? pe = c.boxes[0].color : pe = Ut[0] : pe = Ut[c.boxes.length % Ut.length];
    let ue = new Gi(J, je, z, y, A, S, "", le, ke, le, ke, pe, s, r, a, f, u);
    ue.startCreating(E, W.left, W.top), b ? (t(0, c.boxes = [ue], c), ie()) : t(0, c.boxes = [ue, ...c.boxes], c), ee(0), J(), L("change");
  }
  function q() {
    t(9, v = n.creation), t(7, h.style.cursor = "crosshair", h);
  }
  function ie() {
    t(9, v = n.drag), t(7, h.style.cursor = "default", h);
  }
  function je() {
    C >= 0 && C < c.boxes.length && (c.boxes[C].getArea() < 1 ? he() : g || t(11, O = !0));
  }
  function et() {
    C >= 0 && C < c.boxes.length && !g && t(10, T = !0);
  }
  function rt(E) {
    o && et();
  }
  function Le(E) {
    t(10, T = !1);
    const { detail: W } = E;
    let le = W.label, ke = W.color, pe = W.ret;
    if (C >= 0 && C < c.boxes.length) {
      let ue = c.boxes[C];
      pe == 1 ? (ue.label = le, ue.color = Ki(ke), J(), L("change")) : pe == -1 && he();
    }
  }
  function Ne(E) {
    t(11, O = !1);
    const { detail: W } = E;
    let le = W.label, ke = W.color, pe = W.ret;
    if (C >= 0 && C < c.boxes.length) {
      let ue = c.boxes[C];
      pe == 1 ? (ue.label = le, ue.color = Ki(ke), J(), L("change")) : he();
    }
  }
  function he() {
    C >= 0 && C < c.boxes.length && (c.boxes.splice(C, 1), ee(-1), b && q(), L("change"));
  }
  function ft(E) {
    he(), t(0, c.orientation = ((c.orientation + E) % 4 + 4) % 4, c), console.log(c.orientation), B(), J();
  }
  function B() {
    if (h) {
      if (D = 1, t(7, h.width = h.clientWidth, h), k !== null)
        if (c.orientation == 0 || c.orientation == 2 ? (K = k.width, x = k.height) : (K = k.height, x = k.width), K > h.width)
          D = h.width / K, R = K * D, Y = x * D, z = 0, y = 0, A = R, S = Y, t(7, h.height = Y, h);
        else {
          R = K, Y = x;
          var E = (h.width - R) / 2;
          z = E, y = 0, A = E + R, S = x, t(7, h.height = Y, h);
        }
      else
        z = 0, y = 0, A = h.width, S = h.height, t(7, h.height = h.clientHeight, h);
      if (A > 0 && S > 0)
        for (const W of c.boxes)
          W.canvasXmin = z, W.canvasYmin = y, W.canvasXmax = A, W.canvasYmax = S, W.setScaleFactor(D);
      J(), L("change");
    }
  }
  const yt = new ResizeObserver(B);
  function ut() {
    for (let E = 0; E < c.boxes.length; E++) {
      let W = c.boxes[E];
      if (!(W instanceof Gi)) {
        let le = "", ke = "";
        W.hasOwnProperty("color") ? (le = W.color, Array.isArray(le) && le.length === 3 && (le = `rgb(${le[0]}, ${le[1]}, ${le[2]})`)) : le = Ut[E % Ut.length], W.hasOwnProperty("label") && (ke = W.label), W = new Gi(J, je, z, y, A, S, ke, W.xmin, W.ymin, W.xmax, W.ymax, le, s, r, a, f, u), t(0, c.boxes[E] = W, c);
      }
    }
  }
  function jt() {
    i !== null && (k === null || k.src != i) && (k = new Image(), k.src = i, k.onload = function() {
      B(), J();
    });
  }
  wm(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let E = 0; E < _.length; E++) {
        let W = Ut[E % Ut.length];
        d.push(sl(W));
      }
    m = h.getContext("2d"), yt.observe(h), C < 0 && c !== null && c.boxes.length > 0 && ee(0), jt(), B(), J();
  });
  function ri() {
    document.addEventListener("keydown", j);
  }
  function Ft() {
    document.removeEventListener("keydown", j);
  }
  pm(() => {
    document.removeEventListener("keydown", j);
  });
  function dn(E) {
    _m[E ? "unshift" : "push"](() => {
      h = E, t(7, h);
    });
  }
  const fi = () => q(), ui = () => ie(), Tn = () => he(), ct = () => ft(1), In = () => ft(-1);
  function Mr(E) {
    xs.call(this, l, E);
  }
  function Ar(E) {
    xs.call(this, l, E);
  }
  return l.$$set = (E) => {
    "imageUrl" in E && t(24, i = E.imageUrl), "interactive" in E && t(2, o = E.interactive), "boxAlpha" in E && t(25, s = E.boxAlpha), "boxMinSize" in E && t(26, r = E.boxMinSize), "handleSize" in E && t(27, a = E.handleSize), "boxThickness" in E && t(28, f = E.boxThickness), "boxSelectedThickness" in E && t(29, u = E.boxSelectedThickness), "value" in E && t(0, c = E.value), "choices" in E && t(3, _ = E.choices), "choicesColors" in E && t(4, d = E.choicesColors), "disableEditBoxes" in E && t(30, g = E.disableEditBoxes), "singleBox" in E && t(31, b = E.singleBox), "showRemoveButton" in E && t(1, p = E.showRemoveButton), "handlesCursor" in E && t(5, w = E.handlesCursor);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (jt(), ut(), B(), J());
  }, [
    c,
    p,
    o,
    _,
    d,
    w,
    n,
    h,
    C,
    v,
    T,
    O,
    me,
    Ue,
    M,
    q,
    ie,
    rt,
    Le,
    Ne,
    he,
    ft,
    ri,
    Ft,
    i,
    s,
    r,
    a,
    f,
    u,
    g,
    b,
    dn,
    fi,
    ui,
    Tn,
    ct,
    In,
    Mr,
    Ar
  ];
}
class Cm extends cm {
  constructor(e) {
    super(), hm(
      this,
      e,
      ym,
      km,
      bm,
      {
        imageUrl: 24,
        interactive: 2,
        boxAlpha: 25,
        boxMinSize: 26,
        handleSize: 27,
        boxThickness: 28,
        boxSelectedThickness: 29,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 30,
        singleBox: 31,
        showRemoveButton: 1,
        handlesCursor: 5
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Sm,
  add_flush_callback: zm,
  bind: qm,
  binding_callbacks: Bm,
  create_component: Em,
  destroy_component: Mm,
  init: Am,
  mount_component: Lm,
  safe_not_equal: Rm,
  transition_in: Dm,
  transition_out: Tm
} = window.__gradio__svelte__internal, { createEventDispatcher: Im } = window.__gradio__svelte__internal;
function Hm(l) {
  let e, t, n;
  function i(s) {
    l[17](s);
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
    imageUrl: (
      /*resolved_src*/
      l[13]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new Cm({ props: o }), Bm.push(() => qm(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[18]
    ), {
      c() {
        Em(e.$$.fragment);
      },
      m(s, r) {
        Lm(e, s, r), n = !0;
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
        s[12]), r & /*resolved_src*/
        8192 && (a.imageUrl = /*resolved_src*/
        s[13]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], zm(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Dm(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Tm(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Mm(e, s);
      }
    }
  );
}
function jm(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: u } = e, { boxSelectedThickness: c } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: p } = e, w, h;
  const m = Im();
  function k(v) {
    _ = v, t(0, _);
  }
  const C = () => m("change");
  return l.$$set = (v) => {
    "src" in v && t(15, n = v.src), "interactive" in v && t(1, i = v.interactive), "boxesAlpha" in v && t(2, o = v.boxesAlpha), "labelList" in v && t(3, s = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, f = v.handleSize), "boxThickness" in v && t(7, u = v.boxThickness), "boxSelectedThickness" in v && t(8, c = v.boxSelectedThickness), "value" in v && t(0, _ = v.value), "disableEditBoxes" in v && t(9, d = v.disableEditBoxes), "singleBox" in v && t(10, g = v.singleBox), "showRemoveButton" in v && t(11, b = v.showRemoveButton), "handlesCursor" in v && t(12, p = v.handlesCursor);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    98304) {
      t(13, w = n), t(16, h = n);
      const v = n;
      Dd(v).then((z) => {
        h === v && t(13, w = z);
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
    u,
    c,
    d,
    g,
    b,
    p,
    w,
    m,
    n,
    h,
    k,
    C
  ];
}
class Fm extends Sm {
  constructor(e) {
    super(), Am(this, e, jm, Hm, Rm, {
      src: 15,
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
      handlesCursor: 12
    });
  }
}
class la {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Xm,
  add_flush_callback: Jl,
  append: kn,
  attr: $n,
  bind: Ql,
  binding_callbacks: al,
  bubble: On,
  check_outros: Pt,
  create_component: bt,
  create_slot: Ym,
  destroy_component: wt,
  detach: on,
  element: il,
  empty: Wm,
  get_all_dirty_from_scope: Om,
  get_slot_changes: Um,
  group_outros: Zt,
  init: Nm,
  insert: sn,
  mount_component: pt,
  noop: Vm,
  safe_not_equal: Pm,
  space: Nt,
  toggle_class: ia,
  transition_in: G,
  transition_out: $,
  update_slot_base: Zm
} = window.__gradio__svelte__internal, { createEventDispatcher: Gm, tick: Km } = window.__gradio__svelte__internal;
function oa(l) {
  let e, t;
  return e = new Pd({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [Jm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, i) {
      pt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      524288 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wt(e, n);
    }
  };
}
function Jm(l) {
  let e, t;
  return e = new xl({
    props: {
      Icon: oc,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, i) {
      pt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wt(e, n);
    }
  };
}
function sa(l) {
  let e, t;
  return e = new E_({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[35]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[36]
  ), e.$on(
    "error",
    /*error_handler*/
    l[37]
  ), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, i) {
      pt(e, n, i), t = !0;
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
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wt(e, n);
    }
  };
}
function aa(l) {
  let e, t, n;
  return t = new xl({
    props: { Icon: Ca, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[33]
  ), {
    c() {
      e = il("div"), bt(t.$$.fragment);
    },
    m(i, o) {
      sn(i, e, o), pt(t, e, null), n = !0;
    },
    p: Vm,
    i(i) {
      n || (G(t.$$.fragment, i), n = !0);
    },
    o(i) {
      $(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && on(e), wt(t);
    }
  };
}
function ra(l) {
  let e;
  const t = (
    /*#slots*/
    l[34].default
  ), n = Ym(
    t,
    l,
    /*$$scope*/
    l[50],
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
      524288) && Zm(
        n,
        t,
        i,
        /*$$scope*/
        i[50],
        e ? Um(
          t,
          /*$$scope*/
          i[50],
          o,
          null
        ) : Om(
          /*$$scope*/
          i[50]
        ),
        null
      );
    },
    i(i) {
      e || (G(n, i), e = !0);
    },
    o(i) {
      $(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Qm(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && ra(l)
  );
  return {
    c() {
      n && n.c(), e = Wm();
    },
    m(i, o) {
      n && n.m(i, o), sn(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && G(n, 1)) : (n = ra(i), n.c(), G(n, 1), n.m(e.parentNode, e)) : n && (Zt(), $(n, 1, 1, () => {
        n = null;
      }), Pt());
    },
    i(i) {
      t || (G(n), t = !0);
    },
    o(i) {
      $(n), t = !1;
    },
    d(i) {
      i && on(e), n && n.d(i);
    }
  };
}
function fa(l) {
  let e, t;
  return e = new g0({
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
        l[28]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[42]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[43]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[44]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[45]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[46]
  ), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, i) {
      pt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*upload*/
      268435456 && (o.upload = /*upload*/
      n[28]), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wt(e, n);
    }
  };
}
function ua(l) {
  let e, t, n, i;
  function o(r) {
    l[47](r);
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
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new Fm({ props: s }), al.push(() => Ql(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[48]
    ), {
      c() {
        e = il("div"), bt(t.$$.fragment), $n(e, "class", "image-frame svelte-1gjdske"), ia(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        sn(r, e, a), pt(t, e, null), i = !0;
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
        r[22]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], Jl(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && ia(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (G(t.$$.fragment, r), i = !0);
      },
      o(r) {
        $(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && on(e), wt(t);
      }
    }
  );
}
function ca(l) {
  let e, t, n;
  function i(s) {
    l[49](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*clear*/
      l[33]
    ),
    handle_select: (
      /*handle_select_source*/
      l[32]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new N_({ props: o }), al.push(() => Ql(e, "active_source", i)), {
      c() {
        bt(e.$$.fragment);
      },
      m(s, r) {
        pt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], Jl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (G(e.$$.fragment, s), n = !0);
      },
      o(s) {
        $(e.$$.fragment, s), n = !1;
      },
      d(s) {
        wt(e, s);
      }
    }
  );
}
function xm(l) {
  let e, t, n, i, o, s, r, a, f, u, c, _, d, g, b = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), p;
  e = new Vf({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: Sa,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && oa(l)
  ), h = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && sa(l)
  ), m = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && aa(l)
  );
  function k(S) {
    l[39](S);
  }
  function C(S) {
    l[40](S);
  }
  let v = {
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
    $$slots: { default: [Qm] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[26] !== void 0 && (v.uploading = /*uploading*/
  l[26]), /*dragging*/
  l[27] !== void 0 && (v.dragging = /*dragging*/
  l[27]), f = new z1({ props: v }), l[38](f), al.push(() => Ql(f, "uploading", k)), al.push(() => Ql(f, "dragging", C)), f.$on(
    "load",
    /*handle_upload*/
    l[29]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[41]
  );
  let z = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && fa(l)
  ), y = (
    /*value*/
    l[1] !== null && ua(l)
  ), A = b && ca(l);
  return {
    c() {
      bt(e.$$.fragment), t = Nt(), n = il("div"), w && w.c(), i = Nt(), h && h.c(), o = Nt(), m && m.c(), s = Nt(), r = il("div"), a = il("div"), bt(f.$$.fragment), _ = Nt(), z && z.c(), d = Nt(), y && y.c(), g = Nt(), A && A.c(), $n(n, "class", "icon-buttons svelte-1gjdske"), $n(a, "class", "upload-container svelte-1gjdske"), $n(r, "data-testid", "image"), $n(r, "class", "image-container svelte-1gjdske");
    },
    m(S, D) {
      pt(e, S, D), sn(S, t, D), sn(S, n, D), w && w.m(n, null), kn(n, i), h && h.m(n, null), kn(n, o), m && m.m(n, null), sn(S, s, D), sn(S, r, D), kn(r, a), pt(f, a, null), kn(a, _), z && z.m(a, null), kn(a, d), y && y.m(a, null), kn(r, g), A && A.m(r, null), p = !0;
    },
    p(S, D) {
      const R = {};
      D[0] & /*show_label*/
      8 && (R.show_label = /*show_label*/
      S[3]), D[0] & /*label*/
      4 && (R.label = /*label*/
      S[2] || "Image Annotator"), e.$set(R), /*showDownloadButton*/
      S[10] && /*value*/
      S[1] !== null ? w ? (w.p(S, D), D[0] & /*showDownloadButton, value*/
      1026 && G(w, 1)) : (w = oa(S), w.c(), G(w, 1), w.m(n, i)) : w && (Zt(), $(w, 1, 1, () => {
        w = null;
      }), Pt()), /*showShareButton*/
      S[9] && /*value*/
      S[1] !== null ? h ? (h.p(S, D), D[0] & /*showShareButton, value*/
      514 && G(h, 1)) : (h = sa(S), h.c(), G(h, 1), h.m(n, o)) : h && (Zt(), $(h, 1, 1, () => {
        h = null;
      }), Pt()), /*showClearButton*/
      S[11] && /*value*/
      S[1] !== null && /*interactive*/
      S[7] ? m ? (m.p(S, D), D[0] & /*showClearButton, value, interactive*/
      2178 && G(m, 1)) : (m = aa(S), m.c(), G(m, 1), m.m(n, null)) : m && (Zt(), $(m, 1, 1, () => {
        m = null;
      }), Pt());
      const Y = {};
      D[0] & /*value, active_source*/
      3 && (Y.hidden = /*value*/
      S[1] !== null || /*active_source*/
      S[0] === "webcam"), D[0] & /*active_source*/
      1 && (Y.filetype = /*active_source*/
      S[0] === "clipboard" ? "clipboard" : "image/*"), D[0] & /*root*/
      64 && (Y.root = /*root*/
      S[6]), D[0] & /*max_file_size*/
      8388608 && (Y.max_file_size = /*max_file_size*/
      S[23]), D[0] & /*sources*/
      16 && (Y.disable_click = !/*sources*/
      S[4].includes("upload")), D[0] & /*cli_upload*/
      16777216 && (Y.upload = /*cli_upload*/
      S[24]), D[0] & /*stream_handler*/
      33554432 && (Y.stream_handler = /*stream_handler*/
      S[25]), D[0] & /*value*/
      2 | D[1] & /*$$scope*/
      524288 && (Y.$$scope = { dirty: D, ctx: S }), !u && D[0] & /*uploading*/
      67108864 && (u = !0, Y.uploading = /*uploading*/
      S[26], Jl(() => u = !1)), !c && D[0] & /*dragging*/
      134217728 && (c = !0, Y.dragging = /*dragging*/
      S[27], Jl(() => c = !1)), f.$set(Y), /*value*/
      S[1] === null && /*active_source*/
      S[0] === "webcam" ? z ? (z.p(S, D), D[0] & /*value, active_source*/
      3 && G(z, 1)) : (z = fa(S), z.c(), G(z, 1), z.m(a, d)) : z && (Zt(), $(z, 1, 1, () => {
        z = null;
      }), Pt()), /*value*/
      S[1] !== null ? y ? (y.p(S, D), D[0] & /*value*/
      2 && G(y, 1)) : (y = ua(S), y.c(), G(y, 1), y.m(a, null)) : y && (Zt(), $(y, 1, 1, () => {
        y = null;
      }), Pt()), D[0] & /*sources, value, interactive*/
      146 && (b = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[1] === null && /*interactive*/
      S[7]), b ? A ? (A.p(S, D), D[0] & /*sources, value, interactive*/
      146 && G(A, 1)) : (A = ca(S), A.c(), G(A, 1), A.m(r, null)) : A && (Zt(), $(A, 1, 1, () => {
        A = null;
      }), Pt());
    },
    i(S) {
      p || (G(e.$$.fragment, S), G(w), G(h), G(m), G(f.$$.fragment, S), G(z), G(y), G(A), p = !0);
    },
    o(S) {
      $(e.$$.fragment, S), $(w), $(h), $(m), $(f.$$.fragment, S), $(z), $(y), $(A), p = !1;
    },
    d(S) {
      S && (on(t), on(n), on(s), on(r)), wt(e, S), w && w.d(), h && h.d(), m && m.d(), l[38](null), wt(f), z && z.d(), y && y.d(), A && A.d();
    }
  };
}
function $m(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, yt, ut, jt) {
    function ri(Ft) {
      return Ft instanceof ut ? Ft : new ut(function(dn) {
        dn(Ft);
      });
    }
    return new (ut || (ut = Promise))(function(Ft, dn) {
      function fi(ct) {
        try {
          Tn(jt.next(ct));
        } catch (In) {
          dn(In);
        }
      }
      function ui(ct) {
        try {
          Tn(jt.throw(ct));
        } catch (In) {
          dn(In);
        }
      }
      function Tn(ct) {
        ct.done ? Ft(ct.value) : ri(ct.value).then(fi, ui);
      }
      Tn((jt = jt.apply(B, yt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: u = !1 } = e, { root: c } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: g } = e, { showDownloadButton: b } = e, { showClearButton: p } = e, { boxesAlpha: w } = e, { labelList: h } = e, { labelColors: m } = e, { boxMinSize: k } = e, { handleSize: C } = e, { boxThickness: v } = e, { disableEditBoxes: z } = e, { singleBox: y } = e, { showRemoveButton: A } = e, { handlesCursor: S } = e, { boxSelectedThickness: D } = e, { max_file_size: R = null } = e, { cli_upload: Y } = e, { stream_handler: K } = e, x, N = !1, { active_source: V = null } = e;
  function T({ detail: B }) {
    t(1, s = new la()), t(1, s.image = B, s), L("upload");
  }
  function O(B) {
    return o(this, void 0, void 0, function* () {
      const yt = yield x.load_files([new File([B], "webcam.png")]), ut = (yt == null ? void 0 : yt[0]) || null;
      ut ? (t(1, s = new la()), t(1, s.image = ut, s)) : t(1, s = null), yield Km(), L("change");
    });
  }
  const L = Gm();
  let P = !1;
  function J(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          x.paste_clipboard();
          break;
      }
    });
  }
  function ee() {
    t(1, s = null), L("clear"), L("change");
  }
  const me = async (B) => B === null ? "" : `<img src="${await m_(B.image)}" />`;
  function I(B) {
    On.call(this, l, B);
  }
  function Ue(B) {
    On.call(this, l, B);
  }
  function M(B) {
    al[B ? "unshift" : "push"](() => {
      x = B, t(28, x);
    });
  }
  function j(B) {
    N = B, t(26, N);
  }
  function Q(B) {
    P = B, t(27, P);
  }
  function q(B) {
    On.call(this, l, B);
  }
  const ie = (B) => O(B.detail), je = (B) => O(B.detail);
  function et(B) {
    On.call(this, l, B);
  }
  function rt(B) {
    On.call(this, l, B);
  }
  const Le = (B) => O(B.detail);
  function Ne(B) {
    s = B, t(1, s);
  }
  const he = () => L("change");
  function ft(B) {
    V = B, t(0, V), t(4, f);
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, f = B.sources), "selectable" in B && t(5, u = B.selectable), "root" in B && t(6, c = B.root), "interactive" in B && t(7, _ = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, g = B.showShareButton), "showDownloadButton" in B && t(10, b = B.showDownloadButton), "showClearButton" in B && t(11, p = B.showClearButton), "boxesAlpha" in B && t(12, w = B.boxesAlpha), "labelList" in B && t(13, h = B.labelList), "labelColors" in B && t(14, m = B.labelColors), "boxMinSize" in B && t(15, k = B.boxMinSize), "handleSize" in B && t(16, C = B.handleSize), "boxThickness" in B && t(17, v = B.boxThickness), "disableEditBoxes" in B && t(18, z = B.disableEditBoxes), "singleBox" in B && t(19, y = B.singleBox), "showRemoveButton" in B && t(20, A = B.showRemoveButton), "handlesCursor" in B && t(21, S = B.handlesCursor), "boxSelectedThickness" in B && t(22, D = B.boxSelectedThickness), "max_file_size" in B && t(23, R = B.max_file_size), "cli_upload" in B && t(24, Y = B.cli_upload), "stream_handler" in B && t(25, K = B.stream_handler), "active_source" in B && t(0, V = B.active_source), "$$scope" in B && t(50, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*uploading*/
    67108864 && N && ee(), l.$$.dirty[0] & /*dragging*/
    134217728 && L("drag", P), l.$$.dirty[0] & /*active_source, sources*/
    17 && !V && f && t(0, V = f[0]);
  }, [
    V,
    s,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    g,
    b,
    p,
    w,
    h,
    m,
    k,
    C,
    v,
    z,
    y,
    A,
    S,
    D,
    R,
    Y,
    K,
    N,
    P,
    x,
    T,
    O,
    L,
    J,
    ee,
    n,
    me,
    I,
    Ue,
    M,
    j,
    Q,
    q,
    ie,
    je,
    et,
    rt,
    Le,
    Ne,
    he,
    ft,
    i
  ];
}
class eg extends Xm {
  constructor(e) {
    super(), Nm(
      this,
      e,
      $m,
      xm,
      Pm,
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
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: tg,
  attr: Fl,
  detach: Sr,
  element: zr,
  init: ng,
  insert: qr,
  noop: _a,
  safe_not_equal: lg,
  src_url_equal: da,
  toggle_class: Et
} = window.__gradio__svelte__internal;
function ha(l) {
  let e, t;
  return {
    c() {
      e = zr("img"), da(e.src, t = /*value*/
      l[0].url) || Fl(e, "src", t), Fl(e, "alt", "");
    },
    m(n, i) {
      qr(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !da(e.src, t = /*value*/
      n[0].url) && Fl(e, "src", t);
    },
    d(n) {
      n && Sr(e);
    }
  };
}
function ig(l) {
  let e, t = (
    /*value*/
    l[0] && ha(l)
  );
  return {
    c() {
      e = zr("div"), t && t.c(), Fl(e, "class", "container svelte-1sgcyba"), Et(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Et(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Et(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Et(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      qr(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = ha(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Et(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Et(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Et(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Et(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: _a,
    o: _a,
    d(n) {
      n && Sr(e), t && t.d();
    }
  };
}
function og(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class Lg extends tg {
  constructor(e) {
    super(), ng(this, e, og, ig, lg, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: sg,
  add_flush_callback: ma,
  assign: ag,
  bind: ga,
  binding_callbacks: ba,
  check_outros: rg,
  create_component: un,
  destroy_component: cn,
  detach: Br,
  empty: fg,
  flush: Z,
  get_spread_object: ug,
  get_spread_update: cg,
  group_outros: _g,
  init: dg,
  insert: Er,
  mount_component: _n,
  safe_not_equal: hg,
  space: mg,
  transition_in: vt,
  transition_out: kt
} = window.__gradio__svelte__internal;
function gg(l) {
  let e, t;
  return e = new yu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [pg] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cn(e, n);
    }
  };
}
function bg(l) {
  let e, t;
  return e = new La({
    props: {
      i18n: (
        /*gradio*/
        l[30].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      1073741824 && (o.i18n = /*gradio*/
      n[30].i18n), e.$set(o);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cn(e, n);
    }
  };
}
function wg(l) {
  let e, t;
  return e = new La({
    props: {
      i18n: (
        /*gradio*/
        l[30].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*gradio*/
      1073741824 && (o.i18n = /*gradio*/
      n[30].i18n), e.$set(o);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cn(e, n);
    }
  };
}
function pg(l) {
  let e, t;
  return e = new Sa({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cn(e, n);
    }
  };
}
function vg(l) {
  let e, t, n, i;
  const o = [wg, bg, gg], s = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[32] === "upload" ? 0 : (
        /*active_source*/
        a[32] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = fg();
    },
    m(a, f) {
      s[e].m(a, f), Er(a, n, f), i = !0;
    },
    p(a, f) {
      let u = e;
      e = r(a), e === u ? s[e].p(a, f) : (_g(), kt(s[u], 1, 1, () => {
        s[u] = null;
      }), rg(), t = s[e], t ? t.p(a, f) : (t = s[e] = o[e](a), t.c()), vt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (vt(t), i = !0);
    },
    o(a) {
      kt(t), i = !1;
    },
    d(a) {
      a && Br(n), s[e].d(a);
    }
  };
}
function kg(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[30].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[30].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = ag(a, r[_]);
  e = new Md({ props: a });
  function f(_) {
    l[33](_);
  }
  function u(_) {
    l[34](_);
  }
  let c = {
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
      l[30].i18n
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
      l[30].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[30].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[30].client.stream
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
    $$slots: { default: [vg] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[32] !== void 0 && (c.active_source = /*active_source*/
    l[32]), /*value*/
    l[0] !== void 0 && (c.value = /*value*/
    l[0]), n = new eg({ props: c }), ba.push(() => ga(n, "active_source", f)), ba.push(() => ga(n, "value", u)), n.$on(
      "change",
      /*change_handler*/
      l[35]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[36]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[37]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[38]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[39]
    ), n.$on(
      "select",
      /*select_handler*/
      l[40]
    ), n.$on(
      "share",
      /*share_handler*/
      l[41]
    ), n.$on(
      "error",
      /*error_handler*/
      l[42]
    ), {
      c() {
        un(e.$$.fragment), t = mg(), un(n.$$.fragment);
      },
      m(_, d) {
        _n(e, _, d), Er(_, t, d), _n(n, _, d), s = !0;
      },
      p(_, d) {
        const g = d[0] & /*gradio, loading_status*/
        1073741826 ? cg(r, [
          d[0] & /*gradio*/
          1073741824 && {
            autoscroll: (
              /*gradio*/
              _[30].autoscroll
            )
          },
          d[0] & /*gradio*/
          1073741824 && { i18n: (
            /*gradio*/
            _[30].i18n
          ) },
          d[0] & /*loading_status*/
          2 && ug(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(g);
        const b = {};
        d[0] & /*_selectable*/
        1024 && (b.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (b.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (b.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (b.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (b.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (b.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (b.showClearButton = /*show_clear_button*/
        _[17]), d[0] & /*gradio*/
        1073741824 && (b.i18n = /*gradio*/
        _[30].i18n), d[0] & /*boxes_alpha*/
        524288 && (b.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*label_list*/
        1048576 && (b.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (b.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (b.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (b.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (b.show_label = /*show_label*/
        _[6]), d[0] & /*gradio*/
        1073741824 && (b.max_file_size = /*gradio*/
        _[30].max_file_size), d[0] & /*gradio*/
        1073741824 && (b.cli_upload = /*gradio*/
        _[30].client.upload), d[0] & /*gradio*/
        1073741824 && (b.stream_handler = /*gradio*/
        _[30].client.stream), d[0] & /*handle_size*/
        8388608 && (b.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (b.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (b.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (b.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (b.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (b.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (b.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*gradio*/
        1073741824 | d[1] & /*$$scope, active_source*/
        4098 && (b.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        2 && (i = !0, b.active_source = /*active_source*/
        _[32], ma(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, b.value = /*value*/
        _[0], ma(() => o = !1)), n.$set(b);
      },
      i(_) {
        s || (vt(e.$$.fragment, _), vt(n.$$.fragment, _), s = !0);
      },
      o(_) {
        kt(e.$$.fragment, _), kt(n.$$.fragment, _), s = !1;
      },
      d(_) {
        _ && Br(t), cn(e, _), cn(n, _);
      }
    }
  );
}
function yg(l) {
  let e, t;
  return e = new Pr({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[31] ? "focus" : "base"
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
      $$slots: { default: [kg] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      _n(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      1 && (o.border_mode = /*dragging*/
      n[31] ? "focus" : "base"), i[0] & /*elem_id*/
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
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, value, loading_status*/
      2147468515 | i[1] & /*$$scope, active_source, dragging*/
      4099 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      cn(e, n);
    }
  };
}
function Cg(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: u } = e, { width: c } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: g = null } = e, { min_width: b = void 0 } = e, { loading_status: p } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: h } = e, { show_share_button: m } = e, { show_clear_button: k } = e, { interactive: C } = e, { boxes_alpha: v } = e, { label_list: z } = e, { label_colors: y } = e, { box_min_size: A } = e, { handle_size: S } = e, { box_thickness: D } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: Y } = e, { single_box: K } = e, { show_remove_button: x } = e, { handles_cursor: N } = e, { gradio: V } = e, T, O = null;
  function L(q) {
    O = q, t(32, O);
  }
  function P(q) {
    s = q, t(0, s);
  }
  const J = () => V.dispatch("change"), ee = () => V.dispatch("edit"), me = () => {
    V.dispatch("clear");
  }, I = ({ detail: q }) => t(31, T = q), Ue = () => V.dispatch("upload"), M = ({ detail: q }) => V.dispatch("select", q), j = ({ detail: q }) => V.dispatch("share", q), Q = ({ detail: q }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), V.dispatch("error", q);
  };
  return l.$$set = (q) => {
    "elem_id" in q && t(2, n = q.elem_id), "elem_classes" in q && t(3, i = q.elem_classes), "visible" in q && t(4, o = q.visible), "value" in q && t(0, s = q.value), "label" in q && t(5, r = q.label), "show_label" in q && t(6, a = q.show_label), "root" in q && t(7, f = q.root), "height" in q && t(8, u = q.height), "width" in q && t(9, c = q.width), "_selectable" in q && t(10, _ = q._selectable), "container" in q && t(11, d = q.container), "scale" in q && t(12, g = q.scale), "min_width" in q && t(13, b = q.min_width), "loading_status" in q && t(1, p = q.loading_status), "sources" in q && t(14, w = q.sources), "show_download_button" in q && t(15, h = q.show_download_button), "show_share_button" in q && t(16, m = q.show_share_button), "show_clear_button" in q && t(17, k = q.show_clear_button), "interactive" in q && t(18, C = q.interactive), "boxes_alpha" in q && t(19, v = q.boxes_alpha), "label_list" in q && t(20, z = q.label_list), "label_colors" in q && t(21, y = q.label_colors), "box_min_size" in q && t(22, A = q.box_min_size), "handle_size" in q && t(23, S = q.handle_size), "box_thickness" in q && t(24, D = q.box_thickness), "box_selected_thickness" in q && t(25, R = q.box_selected_thickness), "disable_edit_boxes" in q && t(26, Y = q.disable_edit_boxes), "single_box" in q && t(27, K = q.single_box), "show_remove_button" in q && t(28, x = q.show_remove_button), "handles_cursor" in q && t(29, N = q.handles_cursor), "gradio" in q && t(30, V = q.gradio);
  }, [
    s,
    p,
    n,
    i,
    o,
    r,
    a,
    f,
    u,
    c,
    _,
    d,
    g,
    b,
    w,
    h,
    m,
    k,
    C,
    v,
    z,
    y,
    A,
    S,
    D,
    R,
    Y,
    K,
    x,
    N,
    V,
    T,
    O,
    L,
    P,
    J,
    ee,
    me,
    I,
    Ue,
    M,
    j,
    Q
  ];
}
class Rg extends sg {
  constructor(e) {
    super(), dg(
      this,
      e,
      Cg,
      yg,
      hg,
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
        gradio: 30
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
  get gradio() {
    return this.$$.ctx[30];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Z();
  }
}
export {
  Lg as BaseExample,
  Rg as default
};
