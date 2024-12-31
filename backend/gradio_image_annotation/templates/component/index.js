const {
  SvelteComponent: Rr,
  assign: Wr,
  create_slot: Ar,
  detach: Lr,
  element: Tr,
  get_all_dirty_from_scope: Ir,
  get_slot_changes: Xr,
  get_spread_update: Yr,
  init: Hr,
  insert: Fr,
  safe_not_equal: jr,
  set_dynamic_element_data: Bs,
  set_style: Ae,
  toggle_class: it,
  transition_in: pa,
  transition_out: va,
  update_slot_base: Ur
} = window.__gradio__svelte__internal;
function Or(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), s = Ar(
    l,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      i[7]
    ) },
    { id: (
      /*elem_id*/
      i[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      i[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = Wr(r, o[a]);
  return {
    c() {
      e = Tr(
        /*tag*/
        i[14]
      ), s && s.c(), Bs(
        /*tag*/
        i[14]
      )(e, r), it(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), it(
        e,
        "padded",
        /*padding*/
        i[6]
      ), it(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), it(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), it(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ae(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ae(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ae(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ae(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ae(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ae(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ae(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Fr(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && Ur(
        s,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? Xr(
          l,
          /*$$scope*/
          a[17],
          f,
          null
        ) : Ir(
          /*$$scope*/
          a[17]
        ),
        null
      ), Bs(
        /*tag*/
        a[14]
      )(e, r = Yr(o, [
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
      ])), it(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), it(
        e,
        "padded",
        /*padding*/
        a[6]
      ), it(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), it(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), it(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ae(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ae(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ae(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ae(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ae(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ae(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (pa(s, a), n = !0);
    },
    o(a) {
      va(s, a), n = !1;
    },
    d(a) {
      a && Lr(e), s && s.d(a);
    }
  };
}
function Nr(i) {
  let e, t = (
    /*tag*/
    i[14] && Or(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, [l]) {
      /*tag*/
      n[14] && t.p(n, l);
    },
    i(n) {
      e || (pa(t, n), e = !0);
    },
    o(n) {
      va(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Vr(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: b = !1 } = e, { container: g = !0 } = e, { visible: p = !0 } = e, { allow_overflow: w = !0 } = e, { scale: h = null } = e, { min_width: m = 0 } = e, C = _ === "fieldset" ? "fieldset" : "div";
  const S = (v) => {
    if (v !== void 0) {
      if (typeof v == "number")
        return v + "px";
      if (typeof v == "string")
        return v;
    }
  };
  return i.$$set = (v) => {
    "height" in v && t(0, s = v.height), "width" in v && t(1, o = v.width), "elem_id" in v && t(2, r = v.elem_id), "elem_classes" in v && t(3, a = v.elem_classes), "variant" in v && t(4, f = v.variant), "border_mode" in v && t(5, c = v.border_mode), "padding" in v && t(6, u = v.padding), "type" in v && t(16, _ = v.type), "test_id" in v && t(7, d = v.test_id), "explicit_call" in v && t(8, b = v.explicit_call), "container" in v && t(9, g = v.container), "visible" in v && t(10, p = v.visible), "allow_overflow" in v && t(11, w = v.allow_overflow), "scale" in v && t(12, h = v.scale), "min_width" in v && t(13, m = v.min_width), "$$scope" in v && t(17, l = v.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    d,
    b,
    g,
    p,
    w,
    h,
    m,
    C,
    S,
    _,
    l,
    n
  ];
}
class Pr extends Rr {
  constructor(e) {
    super(), Hr(this, e, Vr, Nr, jr, {
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
  transition_out: sf,
  update_slot_base: of
} = window.__gradio__svelte__internal;
function af(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Kr(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Qr("div"), l && l.c(), Gr(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      tf(s, e, o), l && l.m(e, null), t = !0;
    },
    p(s, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      1) && of(
        l,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? $r(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : xr(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (lf(l, s), t = !0);
    },
    o(s) {
      sf(l, s), t = !1;
    },
    d(s) {
      s && Jr(e), l && l.d(s);
    }
  };
}
function rf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (s) => {
    "$$scope" in s && t(0, l = s.$$scope);
  }, [l, n];
}
class ff extends Zr {
  constructor(e) {
    super(), ef(this, e, rf, af, nf, {});
  }
}
const {
  SvelteComponent: cf,
  attr: Es,
  check_outros: uf,
  create_component: _f,
  create_slot: df,
  destroy_component: hf,
  detach: Di,
  element: mf,
  empty: gf,
  get_all_dirty_from_scope: bf,
  get_slot_changes: wf,
  group_outros: pf,
  init: vf,
  insert: Ri,
  mount_component: kf,
  safe_not_equal: yf,
  set_data: Cf,
  space: Sf,
  text: zf,
  toggle_class: mn,
  transition_in: Un,
  transition_out: Wi,
  update_slot_base: qf
} = window.__gradio__svelte__internal;
function Ms(i) {
  let e, t;
  return e = new ff({
    props: {
      $$slots: { default: [Bf] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      _f(e.$$.fragment);
    },
    m(n, l) {
      kf(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, info*/
      10 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Wi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      hf(e, n);
    }
  };
}
function Bf(i) {
  let e;
  return {
    c() {
      e = zf(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Ri(t, e, n);
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
      t && Di(e);
    }
  };
}
function Ef(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[2].default
  ), o = df(
    s,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ms(i)
  );
  return {
    c() {
      e = mf("span"), o && o.c(), t = Sf(), r && r.c(), n = gf(), Es(e, "data-testid", "block-info"), Es(e, "class", "svelte-22c38v"), mn(e, "sr-only", !/*show_label*/
      i[0]), mn(e, "hide", !/*show_label*/
      i[0]), mn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, f) {
      Ri(a, e, f), o && o.m(e, null), Ri(a, t, f), r && r.m(a, f), Ri(a, n, f), l = !0;
    },
    p(a, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && qf(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        l ? wf(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : bf(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || f & /*show_label*/
      1) && mn(e, "sr-only", !/*show_label*/
      a[0]), (!l || f & /*show_label*/
      1) && mn(e, "hide", !/*show_label*/
      a[0]), (!l || f & /*info*/
      2) && mn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && Un(r, 1)) : (r = Ms(a), r.c(), Un(r, 1), r.m(n.parentNode, n)) : r && (pf(), Wi(r, 1, 1, () => {
        r = null;
      }), uf());
    },
    i(a) {
      l || (Un(o, a), Un(r), l = !0);
    },
    o(a) {
      Wi(o, a), Wi(r), l = !1;
    },
    d(a) {
      a && (Di(e), Di(t), Di(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function Mf(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [s, o, n, l];
}
class ka extends cf {
  constructor(e) {
    super(), vf(this, e, Mf, Ef, yf, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Df,
  append: _l,
  attr: di,
  create_component: Rf,
  destroy_component: Wf,
  detach: Af,
  element: Ds,
  init: Lf,
  insert: Tf,
  mount_component: If,
  safe_not_equal: Xf,
  set_data: Yf,
  space: Hf,
  text: Ff,
  toggle_class: Ct,
  transition_in: jf,
  transition_out: Uf
} = window.__gradio__svelte__internal;
function Of(i) {
  let e, t, n, l, s, o;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Ds("label"), t = Ds("span"), Rf(n.$$.fragment), l = Hf(), s = Ff(
        /*label*/
        i[0]
      ), di(t, "class", "svelte-9gxdi0"), di(e, "for", ""), di(e, "data-testid", "block-label"), di(e, "class", "svelte-9gxdi0"), Ct(e, "hide", !/*show_label*/
      i[2]), Ct(e, "sr-only", !/*show_label*/
      i[2]), Ct(
        e,
        "float",
        /*float*/
        i[4]
      ), Ct(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Tf(r, e, a), _l(e, t), If(n, t, null), _l(e, l), _l(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Yf(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Ct(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Ct(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Ct(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Ct(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (jf(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Uf(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && Af(e), Wf(n);
    }
  };
}
function Nf(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, s, o, r];
}
class Vf extends Df {
  constructor(e) {
    super(), Lf(this, e, Nf, Of, Xf, {
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
  append: Ql,
  attr: ht,
  bubble: Zf,
  create_component: Gf,
  destroy_component: Kf,
  detach: ya,
  element: xl,
  init: Jf,
  insert: Ca,
  listen: Qf,
  mount_component: xf,
  safe_not_equal: $f,
  set_data: ec,
  set_style: gn,
  space: tc,
  text: nc,
  toggle_class: Se,
  transition_in: ic,
  transition_out: lc
} = window.__gradio__svelte__internal;
function Rs(i) {
  let e, t;
  return {
    c() {
      e = xl("span"), t = nc(
        /*label*/
        i[1]
      ), ht(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Ca(n, e, l), Ql(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && ec(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && ya(e);
    }
  };
}
function sc(i) {
  let e, t, n, l, s, o, r, a = (
    /*show_label*/
    i[2] && Rs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = xl("button"), a && a.c(), t = tc(), n = xl("div"), Gf(l.$$.fragment), ht(n, "class", "svelte-1lrphxw"), Se(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Se(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Se(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], ht(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), ht(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), ht(
        e,
        "title",
        /*label*/
        i[1]
      ), ht(e, "class", "svelte-1lrphxw"), Se(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Se(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Se(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Se(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), gn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), gn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), gn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(f, c) {
      Ca(f, e, c), a && a.m(e, null), Ql(e, t), Ql(e, n), xf(l, n, null), s = !0, o || (r = Qf(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = Rs(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
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
      2) && ht(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && ht(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && ht(
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
      4224 && gn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && gn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && gn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (ic(l.$$.fragment, f), s = !0);
    },
    o(f) {
      lc(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && ya(e), a && a.d(), Kf(l), o = !1, r();
    }
  };
}
function oc(i, e, t) {
  let n, { Icon: l } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: g = "var(--background-fill-primary)" } = e, { offset: p = 0 } = e;
  function w(h) {
    Zf.call(this, i, h);
  }
  return i.$$set = (h) => {
    "Icon" in h && t(0, l = h.Icon), "label" in h && t(1, s = h.label), "show_label" in h && t(2, o = h.show_label), "pending" in h && t(3, r = h.pending), "size" in h && t(4, a = h.size), "padded" in h && t(5, f = h.padded), "highlight" in h && t(6, c = h.highlight), "disabled" in h && t(7, u = h.disabled), "hasPopup" in h && t(8, _ = h.hasPopup), "color" in h && t(13, d = h.color), "transparent" in h && t(9, b = h.transparent), "background" in h && t(10, g = h.background), "offset" in h && t(11, p = h.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    b,
    g,
    p,
    n,
    d,
    w
  ];
}
class $i extends Pf {
  constructor(e) {
    super(), Jf(this, e, oc, sc, $f, {
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
  SvelteComponent: ac,
  append: rc,
  attr: dl,
  binding_callbacks: fc,
  create_slot: cc,
  detach: uc,
  element: Ws,
  get_all_dirty_from_scope: _c,
  get_slot_changes: dc,
  init: hc,
  insert: mc,
  safe_not_equal: gc,
  toggle_class: St,
  transition_in: bc,
  transition_out: wc,
  update_slot_base: pc
} = window.__gradio__svelte__internal;
function vc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), s = cc(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Ws("div"), t = Ws("div"), s && s.c(), dl(t, "class", "icon svelte-3w3rth"), dl(e, "class", "empty svelte-3w3rth"), dl(e, "aria-label", "Empty value"), St(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), St(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), St(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), St(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(o, r) {
      mc(o, e, r), rc(e, t), s && s.m(t, null), i[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && pc(
        s,
        l,
        o,
        /*$$scope*/
        o[4],
        n ? dc(
          l,
          /*$$scope*/
          o[4],
          r,
          null
        ) : _c(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && St(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && St(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && St(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && St(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (bc(s, o), n = !0);
    },
    o(o) {
      wc(s, o), n = !1;
    },
    d(o) {
      o && uc(e), s && s.d(o), i[6](null);
    }
  };
}
function kc(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: b } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > b + 2;
  }
  function c(u) {
    fc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, s = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [o, r, a, n, s, l, c];
}
class yc extends ac {
  constructor(e) {
    super(), hc(this, e, kc, vc, gc, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Cc,
  append: As,
  attr: ze,
  detach: Sc,
  init: zc,
  insert: qc,
  noop: hl,
  safe_not_equal: Bc,
  svg_element: ml
} = window.__gradio__svelte__internal;
function Ec(i) {
  let e, t, n;
  return {
    c() {
      e = ml("svg"), t = ml("path"), n = ml("circle"), ze(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), ze(n, "cx", "12"), ze(n, "cy", "13"), ze(n, "r", "4"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "1.5"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-camera");
    },
    m(l, s) {
      qc(l, e, s), As(e, t), As(e, n);
    },
    p: hl,
    i: hl,
    o: hl,
    d(l) {
      l && Sc(e);
    }
  };
}
class Mc extends Cc {
  constructor(e) {
    super(), zc(this, e, null, Ec, Bc, {});
  }
}
const {
  SvelteComponent: Dc,
  append: Rc,
  attr: Ge,
  detach: Wc,
  init: Ac,
  insert: Lc,
  noop: gl,
  safe_not_equal: Tc,
  svg_element: Ls
} = window.__gradio__svelte__internal;
function Ic(i) {
  let e, t;
  return {
    c() {
      e = Ls("svg"), t = Ls("circle"), Ge(t, "cx", "12"), Ge(t, "cy", "12"), Ge(t, "r", "10"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "100%"), Ge(e, "height", "100%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "stroke-width", "1.5"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-circle");
    },
    m(n, l) {
      Lc(n, e, l), Rc(e, t);
    },
    p: gl,
    i: gl,
    o: gl,
    d(n) {
      n && Wc(e);
    }
  };
}
class Xc extends Dc {
  constructor(e) {
    super(), Ac(this, e, null, Ic, Tc, {});
  }
}
const {
  SvelteComponent: Yc,
  append: bl,
  attr: Ke,
  detach: Hc,
  init: Fc,
  insert: jc,
  noop: wl,
  safe_not_equal: Uc,
  set_style: lt,
  svg_element: hi
} = window.__gradio__svelte__internal;
function Oc(i) {
  let e, t, n, l;
  return {
    c() {
      e = hi("svg"), t = hi("g"), n = hi("path"), l = hi("path"), Ke(n, "d", "M18,6L6.087,17.913"), lt(n, "fill", "none"), lt(n, "fill-rule", "nonzero"), lt(n, "stroke-width", "2px"), Ke(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Ke(l, "d", "M4.364,4.364L19.636,19.636"), lt(l, "fill", "none"), lt(l, "fill-rule", "nonzero"), lt(l, "stroke-width", "2px"), Ke(e, "width", "100%"), Ke(e, "height", "100%"), Ke(e, "viewBox", "0 0 24 24"), Ke(e, "version", "1.1"), Ke(e, "xmlns", "http://www.w3.org/2000/svg"), Ke(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ke(e, "xml:space", "preserve"), Ke(e, "stroke", "currentColor"), lt(e, "fill-rule", "evenodd"), lt(e, "clip-rule", "evenodd"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      jc(s, e, o), bl(e, t), bl(t, n), bl(e, l);
    },
    p: wl,
    i: wl,
    o: wl,
    d(s) {
      s && Hc(e);
    }
  };
}
class Sa extends Yc {
  constructor(e) {
    super(), Fc(this, e, null, Oc, Uc, {});
  }
}
const {
  SvelteComponent: Nc,
  append: Vc,
  attr: In,
  detach: Pc,
  init: Zc,
  insert: Gc,
  noop: pl,
  safe_not_equal: Kc,
  svg_element: Ts
} = window.__gradio__svelte__internal;
function Jc(i) {
  let e, t;
  return {
    c() {
      e = Ts("svg"), t = Ts("path"), In(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), In(t, "fill", "currentColor"), In(e, "id", "icon"), In(e, "xmlns", "http://www.w3.org/2000/svg"), In(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Gc(n, e, l), Vc(e, t);
    },
    p: pl,
    i: pl,
    o: pl,
    d(n) {
      n && Pc(e);
    }
  };
}
class Qc extends Nc {
  constructor(e) {
    super(), Zc(this, e, null, Jc, Kc, {});
  }
}
const {
  SvelteComponent: xc,
  append: $c,
  attr: bn,
  detach: eu,
  init: tu,
  insert: nu,
  noop: vl,
  safe_not_equal: iu,
  svg_element: Is
} = window.__gradio__svelte__internal;
function lu(i) {
  let e, t;
  return {
    c() {
      e = Is("svg"), t = Is("path"), bn(t, "fill", "currentColor"), bn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), bn(e, "xmlns", "http://www.w3.org/2000/svg"), bn(e, "width", "100%"), bn(e, "height", "100%"), bn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      nu(n, e, l), $c(e, t);
    },
    p: vl,
    i: vl,
    o: vl,
    d(n) {
      n && eu(e);
    }
  };
}
class su extends xc {
  constructor(e) {
    super(), tu(this, e, null, lu, iu, {});
  }
}
const {
  SvelteComponent: ou,
  append: au,
  attr: wn,
  detach: ru,
  init: fu,
  insert: cu,
  noop: kl,
  safe_not_equal: uu,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function _u(i) {
  let e, t;
  return {
    c() {
      e = Xs("svg"), t = Xs("path"), wn(t, "d", "M5 8l4 4 4-4z"), wn(e, "class", "dropdown-arrow svelte-145leq6"), wn(e, "xmlns", "http://www.w3.org/2000/svg"), wn(e, "width", "100%"), wn(e, "height", "100%"), wn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      cu(n, e, l), au(e, t);
    },
    p: kl,
    i: kl,
    o: kl,
    d(n) {
      n && ru(e);
    }
  };
}
class gs extends ou {
  constructor(e) {
    super(), fu(this, e, null, _u, uu, {});
  }
}
const {
  SvelteComponent: du,
  append: yl,
  attr: ne,
  detach: hu,
  init: mu,
  insert: gu,
  noop: Cl,
  safe_not_equal: bu,
  svg_element: mi
} = window.__gradio__svelte__internal;
function wu(i) {
  let e, t, n, l;
  return {
    c() {
      e = mi("svg"), t = mi("rect"), n = mi("circle"), l = mi("polyline"), ne(t, "x", "3"), ne(t, "y", "3"), ne(t, "width", "18"), ne(t, "height", "18"), ne(t, "rx", "2"), ne(t, "ry", "2"), ne(n, "cx", "8.5"), ne(n, "cy", "8.5"), ne(n, "r", "1.5"), ne(l, "points", "21 15 16 10 5 21"), ne(e, "xmlns", "http://www.w3.org/2000/svg"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "viewBox", "0 0 24 24"), ne(e, "fill", "none"), ne(e, "stroke", "currentColor"), ne(e, "stroke-width", "1.5"), ne(e, "stroke-linecap", "round"), ne(e, "stroke-linejoin", "round"), ne(e, "class", "feather feather-image");
    },
    m(s, o) {
      gu(s, e, o), yl(e, t), yl(e, n), yl(e, l);
    },
    p: Cl,
    i: Cl,
    o: Cl,
    d(s) {
      s && hu(e);
    }
  };
}
let za = class extends du {
  constructor(e) {
    super(), mu(this, e, null, wu, bu, {});
  }
};
const {
  SvelteComponent: pu,
  append: vu,
  attr: gi,
  detach: ku,
  init: yu,
  insert: Cu,
  noop: Sl,
  safe_not_equal: Su,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function zu(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), gi(t, "fill", "currentColor"), gi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), gi(e, "xmlns", "http://www.w3.org/2000/svg"), gi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Cu(n, e, l), vu(e, t);
    },
    p: Sl,
    i: Sl,
    o: Sl,
    d(n) {
      n && ku(e);
    }
  };
}
class qa extends pu {
  constructor(e) {
    super(), yu(this, e, null, zu, Su, {});
  }
}
const {
  SvelteComponent: qu,
  append: bi,
  attr: ie,
  detach: Bu,
  init: Eu,
  insert: Mu,
  noop: zl,
  safe_not_equal: Du,
  svg_element: Xn
} = window.__gradio__svelte__internal;
function Ru(i) {
  let e, t, n, l, s;
  return {
    c() {
      e = Xn("svg"), t = Xn("path"), n = Xn("path"), l = Xn("line"), s = Xn("line"), ie(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ie(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ie(l, "x1", "12"), ie(l, "y1", "19"), ie(l, "x2", "12"), ie(l, "y2", "23"), ie(s, "x1", "8"), ie(s, "y1", "23"), ie(s, "x2", "16"), ie(s, "y2", "23"), ie(e, "xmlns", "http://www.w3.org/2000/svg"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "viewBox", "0 0 24 24"), ie(e, "fill", "none"), ie(e, "stroke", "currentColor"), ie(e, "stroke-width", "2"), ie(e, "stroke-linecap", "round"), ie(e, "stroke-linejoin", "round"), ie(e, "class", "feather feather-mic");
    },
    m(o, r) {
      Mu(o, e, r), bi(e, t), bi(e, n), bi(e, l), bi(e, s);
    },
    p: zl,
    i: zl,
    o: zl,
    d(o) {
      o && Bu(e);
    }
  };
}
class Wu extends qu {
  constructor(e) {
    super(), Eu(this, e, null, Ru, Du, {});
  }
}
const {
  SvelteComponent: Au,
  append: Hs,
  attr: Ye,
  detach: Lu,
  init: Tu,
  insert: Iu,
  noop: ql,
  safe_not_equal: Xu,
  set_style: Yu,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t, n;
  return {
    c() {
      e = Bl("svg"), t = Bl("polyline"), n = Bl("path"), Ye(t, "points", "1 4 1 10 7 10"), Ye(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "width", "100%"), Ye(e, "height", "100%"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "2"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round"), Ye(e, "class", "feather feather-rotate-ccw"), Yu(e, "transform", "rotateY(180deg)");
    },
    m(l, s) {
      Iu(l, e, s), Hs(e, t), Hs(e, n);
    },
    p: ql,
    i: ql,
    o: ql,
    d(l) {
      l && Lu(e);
    }
  };
}
class Fu extends Au {
  constructor(e) {
    super(), Tu(this, e, null, Hu, Xu, {});
  }
}
const {
  SvelteComponent: ju,
  append: Uu,
  attr: qe,
  detach: Ou,
  init: Nu,
  insert: Vu,
  noop: El,
  safe_not_equal: Pu,
  svg_element: Fs
} = window.__gradio__svelte__internal;
function Zu(i) {
  let e, t;
  return {
    c() {
      e = Fs("svg"), t = Fs("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, l) {
      Vu(n, e, l), Uu(e, t);
    },
    p: El,
    i: El,
    o: El,
    d(n) {
      n && Ou(e);
    }
  };
}
class Gu extends ju {
  constructor(e) {
    super(), Nu(this, e, null, Zu, Pu, {});
  }
}
const {
  SvelteComponent: Ku,
  append: js,
  attr: He,
  detach: Ju,
  init: Qu,
  insert: xu,
  noop: Ml,
  safe_not_equal: $u,
  svg_element: Dl
} = window.__gradio__svelte__internal;
function e_(i) {
  let e, t, n;
  return {
    c() {
      e = Dl("svg"), t = Dl("polyline"), n = Dl("path"), He(t, "points", "1 4 1 10 7 10"), He(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), He(e, "xmlns", "http://www.w3.org/2000/svg"), He(e, "width", "100%"), He(e, "height", "100%"), He(e, "viewBox", "0 0 24 24"), He(e, "fill", "none"), He(e, "stroke", "currentColor"), He(e, "stroke-width", "2"), He(e, "stroke-linecap", "round"), He(e, "stroke-linejoin", "round"), He(e, "class", "feather feather-rotate-ccw");
    },
    m(l, s) {
      xu(l, e, s), js(e, t), js(e, n);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(l) {
      l && Ju(e);
    }
  };
}
class t_ extends Ku {
  constructor(e) {
    super(), Qu(this, e, null, e_, $u, {});
  }
}
const {
  SvelteComponent: n_,
  append: Rl,
  attr: be,
  detach: i_,
  init: l_,
  insert: s_,
  noop: Wl,
  safe_not_equal: o_,
  svg_element: wi
} = window.__gradio__svelte__internal;
function a_(i) {
  let e, t, n, l;
  return {
    c() {
      e = wi("svg"), t = wi("path"), n = wi("polyline"), l = wi("line"), be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), be(n, "points", "17 8 12 3 7 8"), be(l, "x1", "12"), be(l, "y1", "3"), be(l, "x2", "12"), be(l, "y2", "15"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "90%"), be(e, "height", "90%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "2"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-upload");
    },
    m(s, o) {
      s_(s, e, o), Rl(e, t), Rl(e, n), Rl(e, l);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(s) {
      s && i_(e);
    }
  };
}
let Ba = class extends n_ {
  constructor(e) {
    super(), l_(this, e, null, a_, o_, {});
  }
};
const {
  SvelteComponent: r_,
  append: Us,
  attr: zt,
  detach: f_,
  init: c_,
  insert: u_,
  noop: Al,
  safe_not_equal: __,
  svg_element: Ll
} = window.__gradio__svelte__internal;
function d_(i) {
  let e, t, n;
  return {
    c() {
      e = Ll("svg"), t = Ll("path"), n = Ll("path"), zt(t, "fill", "currentColor"), zt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), zt(n, "fill", "currentColor"), zt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), zt(e, "xmlns", "http://www.w3.org/2000/svg"), zt(e, "width", "100%"), zt(e, "height", "100%"), zt(e, "viewBox", "0 0 24 24");
    },
    m(l, s) {
      u_(l, e, s), Us(e, t), Us(e, n);
    },
    p: Al,
    i: Al,
    o: Al,
    d(l) {
      l && f_(e);
    }
  };
}
let Ea = class extends r_ {
  constructor(e) {
    super(), c_(this, e, null, d_, __, {});
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
], Os = {
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
h_.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Os[e][t],
    secondary: Os[e][n]
  }
}), {});
class Ai extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function m_(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ai("Must be on Spaces to share.");
  let t, n, l;
  t = g_(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const s = new File([t], l, { type: n }), o = await fetch("https://huggingface.co/uploads", {
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
      throw new Ai(`Upload failed: ${f.error}`);
    }
    throw new Ai("Upload failed.");
  }
  return await o.text();
}
function g_(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, s = new Uint8Array(l); l--; )
    s[l] = n.charCodeAt(l);
  return new Blob([s], { type: t });
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
function q_(i) {
  let e, t;
  return e = new $i({
    props: {
      Icon: Qc,
      label: (
        /*i18n*/
        i[2]("common.share")
      ),
      pending: (
        /*pending*/
        i[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    i[5]
  ), {
    c() {
      w_(e.$$.fragment);
    },
    m(n, l) {
      k_(e, n, l), t = !0;
    },
    p(n, [l]) {
      const s = {};
      l & /*i18n*/
      4 && (s.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (s.pending = /*pending*/
      n[3]), e.$set(s);
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
function B_(i, e, t) {
  const n = z_();
  let { formatter: l } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await l(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Ai ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (f) => {
    "formatter" in f && t(0, l = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [l, s, o, r, n, a];
}
class E_ extends b_ {
  constructor(e) {
    super(), v_(this, e, B_, q_, y_, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: M_,
  append: xt,
  attr: $l,
  check_outros: D_,
  create_component: Ma,
  destroy_component: Da,
  detach: Li,
  element: es,
  group_outros: R_,
  init: W_,
  insert: Ti,
  mount_component: Ra,
  safe_not_equal: A_,
  set_data: ts,
  space: ns,
  text: On,
  toggle_class: Ns,
  transition_in: Fi,
  transition_out: ji
} = window.__gradio__svelte__internal;
function L_(i) {
  let e, t;
  return e = new Ba({}), {
    c() {
      Ma(e.$$.fragment);
    },
    m(n, l) {
      Ra(e, n, l), t = !0;
    },
    i(n) {
      t || (Fi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ji(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Da(e, n);
    }
  };
}
function T_(i) {
  let e, t;
  return e = new qa({}), {
    c() {
      Ma(e.$$.fragment);
    },
    m(n, l) {
      Ra(e, n, l), t = !0;
    },
    i(n) {
      t || (Fi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ji(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Da(e, n);
    }
  };
}
function Vs(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, s, o, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = es("span"), t = On("- "), l = On(n), s = On(" -"), o = ns(), a = On(r), $l(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Ti(f, e, c), xt(e, t), xt(e, l), xt(e, s), Ti(f, o, c), Ti(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ts(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ts(a, r);
    },
    d(f) {
      f && (Li(e), Li(o), Li(a));
    }
  };
}
function I_(i) {
  let e, t, n, l, s, o = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, f;
  const c = [T_, L_], u = [];
  function _(b, g) {
    return (
      /*type*/
      b[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Vs(i)
  );
  return {
    c() {
      e = es("div"), t = es("span"), l.c(), s = ns(), r = On(o), a = ns(), d && d.c(), $l(t, "class", "icon-wrap svelte-kzcjhc"), Ns(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), $l(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, g) {
      Ti(b, e, g), xt(e, t), u[n].m(t, null), xt(e, s), xt(e, r), xt(e, a), d && d.m(e, null), f = !0;
    },
    p(b, [g]) {
      let p = n;
      n = _(b), n !== p && (R_(), ji(u[p], 1, 1, () => {
        u[p] = null;
      }), D_(), l = u[n], l || (l = u[n] = c[n](b), l.c()), Fi(l, 1), l.m(t, null)), (!f || g & /*hovered*/
      16) && Ns(
        t,
        "hovered",
        /*hovered*/
        b[4]
      ), (!f || g & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      b[1](
        /*defs*/
        b[5][
          /*type*/
          b[0]
        ] || /*defs*/
        b[5].file
      ) + "") && ts(r, o), /*mode*/
      b[3] !== "short" ? d ? d.p(b, g) : (d = Vs(b), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(b) {
      f || (Fi(l), f = !0);
    },
    o(b) {
      ji(l), f = !1;
    },
    d(b) {
      b && Li(e), u[n].d(), d && d.d();
    }
  };
}
function X_(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, l = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, l, s, o, r, a];
}
class Wa extends M_ {
  constructor(e) {
    super(), W_(this, e, X_, I_, A_, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Y_,
  append: Tl,
  attr: ft,
  check_outros: Nn,
  create_component: el,
  destroy_component: tl,
  detach: Mn,
  element: ai,
  empty: H_,
  group_outros: Vn,
  init: F_,
  insert: Dn,
  listen: nl,
  mount_component: il,
  safe_not_equal: j_,
  space: Il,
  toggle_class: It,
  transition_in: oe,
  transition_out: Ee
} = window.__gradio__svelte__internal;
function Ps(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), s, o = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), f, c = t && Zs(i), u = l && Gs(i), _ = o && Ks(i), d = a && Js(i);
  return {
    c() {
      e = ai("span"), c && c.c(), n = Il(), u && u.c(), s = Il(), _ && _.c(), r = Il(), d && d.c(), ft(e, "class", "source-selection svelte-1jp3vgd"), ft(e, "data-testid", "source-select");
    },
    m(b, g) {
      Dn(b, e, g), c && c.m(e, null), Tl(e, n), u && u.m(e, null), Tl(e, s), _ && _.m(e, null), Tl(e, r), d && d.m(e, null), f = !0;
    },
    p(b, g) {
      g & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? c ? (c.p(b, g), g & /*sources*/
      2 && oe(c, 1)) : (c = Zs(b), c.c(), oe(c, 1), c.m(e, n)) : c && (Vn(), Ee(c, 1, 1, () => {
        c = null;
      }), Nn()), g & /*sources*/
      2 && (l = /*sources*/
      b[1].includes("microphone")), l ? u ? (u.p(b, g), g & /*sources*/
      2 && oe(u, 1)) : (u = Gs(b), u.c(), oe(u, 1), u.m(e, s)) : u && (Vn(), Ee(u, 1, 1, () => {
        u = null;
      }), Nn()), g & /*sources*/
      2 && (o = /*sources*/
      b[1].includes("webcam")), o ? _ ? (_.p(b, g), g & /*sources*/
      2 && oe(_, 1)) : (_ = Ks(b), _.c(), oe(_, 1), _.m(e, r)) : _ && (Vn(), Ee(_, 1, 1, () => {
        _ = null;
      }), Nn()), g & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? d ? (d.p(b, g), g & /*sources*/
      2 && oe(d, 1)) : (d = Js(b), d.c(), oe(d, 1), d.m(e, null)) : d && (Vn(), Ee(d, 1, 1, () => {
        d = null;
      }), Nn());
    },
    i(b) {
      f || (oe(c), oe(u), oe(_), oe(d), f = !0);
    },
    o(b) {
      Ee(c), Ee(u), Ee(_), Ee(d), f = !1;
    },
    d(b) {
      b && Mn(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function Zs(i) {
  let e, t, n, l, s;
  return t = new Ba({}), {
    c() {
      e = ai("button"), el(t.$$.fragment), ft(e, "class", "icon svelte-1jp3vgd"), ft(e, "aria-label", "Upload file"), It(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(o, r) {
      Dn(o, e, r), il(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && It(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mn(e), tl(t), l = !1, s();
    }
  };
}
function Gs(i) {
  let e, t, n, l, s;
  return t = new Wu({}), {
    c() {
      e = ai("button"), el(t.$$.fragment), ft(e, "class", "icon svelte-1jp3vgd"), ft(e, "aria-label", "Record audio"), It(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(o, r) {
      Dn(o, e, r), il(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && It(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mn(e), tl(t), l = !1, s();
    }
  };
}
function Ks(i) {
  let e, t, n, l, s;
  return t = new Ea({}), {
    c() {
      e = ai("button"), el(t.$$.fragment), ft(e, "class", "icon svelte-1jp3vgd"), ft(e, "aria-label", "Capture from camera"), It(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(o, r) {
      Dn(o, e, r), il(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && It(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mn(e), tl(t), l = !1, s();
    }
  };
}
function Js(i) {
  let e, t, n, l, s;
  return t = new qa({}), {
    c() {
      e = ai("button"), el(t.$$.fragment), ft(e, "class", "icon svelte-1jp3vgd"), ft(e, "aria-label", "Paste from clipboard"), It(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(o, r) {
      Dn(o, e, r), il(t, e, null), n = !0, l || (s = nl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && It(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (oe(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Mn(e), tl(t), l = !1, s();
    }
  };
}
function U_(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ps(i)
  );
  return {
    c() {
      n && n.c(), e = H_();
    },
    m(l, s) {
      n && n.m(l, s), Dn(l, e, s), t = !0;
    },
    p(l, [s]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, s), s & /*unique_sources*/
      4 && oe(n, 1)) : (n = Ps(l), n.c(), oe(n, 1), n.m(e.parentNode, e)) : n && (Vn(), Ee(n, 1, 1, () => {
        n = null;
      }), Nn());
    },
    i(l) {
      t || (oe(n), t = !0);
    },
    o(l) {
      Ee(n), t = !1;
    },
    d(l) {
      l && Mn(e), n && n.d(l);
    }
  };
}
function O_(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(b, g, p, w) {
    function h(m) {
      return m instanceof p ? m : new p(function(C) {
        C(m);
      });
    }
    return new (p || (p = Promise))(function(m, C) {
      function S(y) {
        try {
          k(w.next(y));
        } catch (D) {
          C(D);
        }
      }
      function v(y) {
        try {
          k(w.throw(y));
        } catch (D) {
          C(D);
        }
      }
      function k(y) {
        y.done ? m(y.value) : h(y.value).then(S, v);
      }
      k((w = w.apply(b, g || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(b) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, o = b), a(b);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return i.$$set = (b) => {
    "sources" in b && t(1, s = b.sources), "active_source" in b && t(0, o = b.active_source), "handle_clear" in b && t(4, r = b.handle_clear), "handle_select" in b && t(5, a = b.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
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
class N_ extends Y_ {
  constructor(e) {
    super(), F_(this, e, O_, U_, j_, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function zn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function Ii() {
}
const V_ = (i) => i;
function P_(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Qs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    i,
    "px"
  ];
}
const Aa = typeof window < "u";
let xs = Aa ? () => window.performance.now() : () => Date.now(), La = Aa ? (i) => requestAnimationFrame(i) : Ii;
const En = /* @__PURE__ */ new Set();
function Ta(i) {
  En.forEach((e) => {
    e.c(i) || (En.delete(e), e.f());
  }), En.size !== 0 && La(Ta);
}
function Z_(i) {
  let e;
  return En.size === 0 && La(Ta), {
    promise: new Promise((t) => {
      En.add(e = { c: i, f: t });
    }),
    abort() {
      En.delete(e);
    }
  };
}
function G_(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function K_(i, { delay: e = 0, duration: t = 400, easing: n = V_ } = {}) {
  const l = +getComputedStyle(i).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * l}`
  };
}
function $s(i, { delay: e = 0, duration: t = 400, easing: n = G_, x: l = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = Qs(l), [d, b] = Qs(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (g, p) => `
			transform: ${f} translate(${(1 - g) * u}${_}, ${(1 - g) * d}${b});
			opacity: ${a - c * p}`
  };
}
const pn = [];
function J_(i, e = Ii) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(r) {
    if (P_(i, r) && (i = r, t)) {
      const a = !pn.length;
      for (const f of n)
        f[1](), pn.push(f, i);
      if (a) {
        for (let f = 0; f < pn.length; f += 2)
          pn[f][0](pn[f + 1]);
        pn.length = 0;
      }
    }
  }
  function s(r) {
    l(r(i));
  }
  function o(r, a = Ii) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(l, s) || Ii), r(i), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function eo(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function is(i, e, t, n) {
  if (typeof t == "number" || eo(t)) {
    const l = n - t, s = (t - e) / (i.dt || 1 / 60), o = i.opts.stiffness * l, r = i.opts.damping * s, a = (o - r) * i.inv_mass, f = (s + a) * i.dt;
    return Math.abs(f) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, eo(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (l, s) => is(i, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const l = {};
      for (const s in t)
        l[s] = is(i, e[s], t[s], n[s]);
      return l;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function to(i, e = {}) {
  const t = J_(i), { stiffness: n = 0.15, damping: l = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = i, c = i, u = 1, _ = 0, d = !1;
  function b(p, w = {}) {
    c = p;
    const h = a = {};
    return i == null || w.hard || g.stiffness >= 1 && g.damping >= 1 ? (d = !0, o = xs(), f = p, t.set(i = c), Promise.resolve()) : (w.soft && (_ = 1 / ((w.soft === !0 ? 0.5 : +w.soft) * 60), u = 0), r || (o = xs(), d = !1, r = Z_((m) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const C = {
        inv_mass: u,
        opts: g,
        settled: !0,
        dt: (m - o) * 60 / 1e3
      }, S = is(C, f, i, c);
      return o = m, f = i, t.set(i = S), C.settled && (r = null), !C.settled;
    })), new Promise((m) => {
      r.promise.then(() => {
        h === a && m();
      });
    }));
  }
  const g = {
    set: b,
    update: (p, w) => b(p(c, i), w),
    subscribe: t.subscribe,
    stiffness: n,
    damping: l,
    precision: s
  };
  return g;
}
const {
  SvelteComponent: Q_,
  append: Je,
  attr: N,
  component_subscribe: no,
  detach: x_,
  element: $_,
  init: ed,
  insert: td,
  noop: io,
  safe_not_equal: nd,
  set_style: pi,
  svg_element: Qe,
  toggle_class: lo
} = window.__gradio__svelte__internal, { onMount: id } = window.__gradio__svelte__internal;
function ld(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = $_("div"), t = Qe("svg"), n = Qe("g"), l = Qe("path"), s = Qe("path"), o = Qe("path"), r = Qe("path"), a = Qe("g"), f = Qe("path"), c = Qe("path"), u = Qe("path"), _ = Qe("path"), N(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), N(l, "fill", "#FF7C00"), N(l, "fill-opacity", "0.4"), N(l, "class", "svelte-43sxxs"), N(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), N(s, "fill", "#FF7C00"), N(s, "class", "svelte-43sxxs"), N(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), N(o, "fill", "#FF7C00"), N(o, "fill-opacity", "0.4"), N(o, "class", "svelte-43sxxs"), N(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), N(r, "fill", "#FF7C00"), N(r, "class", "svelte-43sxxs"), pi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), N(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), N(f, "fill", "#FF7C00"), N(f, "fill-opacity", "0.4"), N(f, "class", "svelte-43sxxs"), N(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), N(c, "fill", "#FF7C00"), N(c, "class", "svelte-43sxxs"), N(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), N(u, "fill", "#FF7C00"), N(u, "fill-opacity", "0.4"), N(u, "class", "svelte-43sxxs"), N(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), N(_, "fill", "#FF7C00"), N(_, "class", "svelte-43sxxs"), pi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), N(t, "viewBox", "-1200 -1200 3000 3000"), N(t, "fill", "none"), N(t, "xmlns", "http://www.w3.org/2000/svg"), N(t, "class", "svelte-43sxxs"), N(e, "class", "svelte-43sxxs"), lo(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, b) {
      td(d, e, b), Je(e, t), Je(t, n), Je(n, l), Je(n, s), Je(n, o), Je(n, r), Je(t, a), Je(a, f), Je(a, c), Je(a, u), Je(a, _);
    },
    p(d, [b]) {
      b & /*$top*/
      2 && pi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), b & /*$bottom*/
      4 && pi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), b & /*margin*/
      1 && lo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: io,
    o: io,
    d(d) {
      d && x_(e);
    }
  };
}
function sd(i, e, t) {
  let n, l;
  var s = this && this.__awaiter || function(d, b, g, p) {
    function w(h) {
      return h instanceof g ? h : new g(function(m) {
        m(h);
      });
    }
    return new (g || (g = Promise))(function(h, m) {
      function C(k) {
        try {
          v(p.next(k));
        } catch (y) {
          m(y);
        }
      }
      function S(k) {
        try {
          v(p.throw(k));
        } catch (y) {
          m(y);
        }
      }
      function v(k) {
        k.done ? h(k.value) : w(k.value).then(C, S);
      }
      v((p = p.apply(d, b || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = to([0, 0]);
  no(i, r, (d) => t(1, n = d));
  const a = to([0, 0]);
  no(i, a, (d) => t(2, l = d));
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
  return id(() => (_(), () => f = !0)), i.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, l, r, a];
}
class od extends Q_ {
  constructor(e) {
    super(), ed(this, e, sd, ld, nd, { margin: 0 });
  }
}
const {
  SvelteComponent: ad,
  append: $t,
  attr: tt,
  binding_callbacks: so,
  check_outros: ls,
  create_component: Ia,
  create_slot: Xa,
  destroy_component: Ya,
  destroy_each: Ha,
  detach: H,
  element: at,
  empty: Rn,
  ensure_array_like: Ui,
  get_all_dirty_from_scope: Fa,
  get_slot_changes: ja,
  group_outros: ss,
  init: rd,
  insert: F,
  mount_component: Ua,
  noop: os,
  safe_not_equal: fd,
  set_data: Oe,
  set_style: Lt,
  space: Ue,
  text: te,
  toggle_class: Fe,
  transition_in: et,
  transition_out: rt,
  update_slot_base: Oa
} = window.__gradio__svelte__internal, { tick: cd } = window.__gradio__svelte__internal, { onDestroy: ud } = window.__gradio__svelte__internal, { createEventDispatcher: _d } = window.__gradio__svelte__internal, dd = (i) => ({}), oo = (i) => ({}), hd = (i) => ({}), ao = (i) => ({});
function ro(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function fo(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function md(i) {
  let e, t, n, l, s = (
    /*i18n*/
    i[1]("common.error") + ""
  ), o, r, a;
  t = new $i({
    props: {
      Icon: Sa,
      label: (
        /*i18n*/
        i[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    i[32]
  );
  const f = (
    /*#slots*/
    i[30].error
  ), c = Xa(
    f,
    i,
    /*$$scope*/
    i[29],
    oo
  );
  return {
    c() {
      e = at("div"), Ia(t.$$.fragment), n = Ue(), l = at("span"), o = te(s), r = Ue(), c && c.c(), tt(e, "class", "clear-status svelte-16nch4a"), tt(l, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      F(u, e, _), Ua(t, e, null), F(u, n, _), F(u, l, _), $t(l, o), F(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Oe(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && Oa(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? ja(
          f,
          /*$$scope*/
          u[29],
          _,
          dd
        ) : Fa(
          /*$$scope*/
          u[29]
        ),
        oo
      );
    },
    i(u) {
      a || (et(t.$$.fragment, u), et(c, u), a = !0);
    },
    o(u) {
      rt(t.$$.fragment, u), rt(c, u), a = !1;
    },
    d(u) {
      u && (H(e), H(n), H(l), H(r)), Ya(t), c && c.d(u);
    }
  };
}
function gd(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && co(i)
  );
  function u(m, C) {
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
  let _ = u(i), d = _ && _(i), b = (
    /*timer*/
    i[5] && ho(i)
  );
  const g = [Cd, yd], p = [];
  function w(m, C) {
    return (
      /*last_progress_level*/
      m[15] != null ? 0 : (
        /*show_progress*/
        m[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = w(i)) && (o = p[s] = g[s](i));
  let h = !/*timer*/
  i[5] && ko(i);
  return {
    c() {
      c && c.c(), e = Ue(), t = at("div"), d && d.c(), n = Ue(), b && b.c(), l = Ue(), o && o.c(), r = Ue(), h && h.c(), a = Rn(), tt(t, "class", "progress-text svelte-16nch4a"), Fe(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Fe(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(m, C) {
      c && c.m(m, C), F(m, e, C), F(m, t, C), d && d.m(t, null), $t(t, n), b && b.m(t, null), F(m, l, C), ~s && p[s].m(m, C), F(m, r, C), h && h.m(m, C), F(m, a, C), f = !0;
    },
    p(m, C) {
      /*variant*/
      m[8] === "default" && /*show_eta_bar*/
      m[18] && /*show_progress*/
      m[6] === "full" ? c ? c.p(m, C) : (c = co(m), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(m)) && d ? d.p(m, C) : (d && d.d(1), d = _ && _(m), d && (d.c(), d.m(t, n))), /*timer*/
      m[5] ? b ? b.p(m, C) : (b = ho(m), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!f || C[0] & /*variant*/
      256) && Fe(
        t,
        "meta-text-center",
        /*variant*/
        m[8] === "center"
      ), (!f || C[0] & /*variant*/
      256) && Fe(
        t,
        "meta-text",
        /*variant*/
        m[8] === "default"
      );
      let S = s;
      s = w(m), s === S ? ~s && p[s].p(m, C) : (o && (ss(), rt(p[S], 1, 1, () => {
        p[S] = null;
      }), ls()), ~s ? (o = p[s], o ? o.p(m, C) : (o = p[s] = g[s](m), o.c()), et(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      m[5] ? h && (ss(), rt(h, 1, 1, () => {
        h = null;
      }), ls()) : h ? (h.p(m, C), C[0] & /*timer*/
      32 && et(h, 1)) : (h = ko(m), h.c(), et(h, 1), h.m(a.parentNode, a));
    },
    i(m) {
      f || (et(o), et(h), f = !0);
    },
    o(m) {
      rt(o), rt(h), f = !1;
    },
    d(m) {
      m && (H(e), H(t), H(l), H(r), H(a)), c && c.d(m), d && d.d(), b && b.d(), ~s && p[s].d(m), h && h.d(m);
    }
  };
}
function co(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = at("div"), tt(e, "class", "eta-bar svelte-16nch4a"), Lt(e, "transform", t);
    },
    m(n, l) {
      F(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Lt(e, "transform", t);
    },
    d(n) {
      n && H(e);
    }
  };
}
function bd(i) {
  let e;
  return {
    c() {
      e = te("processing |");
    },
    m(t, n) {
      F(t, e, n);
    },
    p: os,
    d(t) {
      t && H(e);
    }
  };
}
function wd(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, s, o;
  return {
    c() {
      e = te("queue: "), n = te(t), l = te("/"), s = te(
        /*queue_size*/
        i[3]
      ), o = te(" |");
    },
    m(r, a) {
      F(r, e, a), F(r, n, a), F(r, l, a), F(r, s, a), F(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Oe(n, t), a[0] & /*queue_size*/
      8 && Oe(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (H(e), H(n), H(l), H(s), H(o));
    }
  };
}
function pd(i) {
  let e, t = Ui(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = _o(fo(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Rn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      F(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress*/
      128) {
        t = Ui(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = fo(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = _o(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && H(e), Ha(n, l);
    }
  };
}
function uo(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? kd : vd
    );
  }
  let a = r(i), f = a(i);
  return {
    c() {
      f.c(), e = Ue(), n = te(t), l = te(" | "), o = te(s);
    },
    m(c, u) {
      f.m(c, u), F(c, e, u), F(c, n, u), F(c, l, u), F(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Oe(n, t);
    },
    d(c) {
      c && (H(e), H(n), H(l), H(o)), f.d(c);
    }
  };
}
function vd(i) {
  let e = zn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = te(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = zn(
        /*p*/
        n[41].index || 0
      ) + "") && Oe(t, e);
    },
    d(n) {
      n && H(t);
    }
  };
}
function kd(i) {
  let e = zn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = zn(
    /*p*/
    i[41].length
  ) + "", s;
  return {
    c() {
      t = te(e), n = te("/"), s = te(l);
    },
    m(o, r) {
      F(o, t, r), F(o, n, r), F(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = zn(
        /*p*/
        o[41].index || 0
      ) + "") && Oe(t, e), r[0] & /*progress*/
      128 && l !== (l = zn(
        /*p*/
        o[41].length
      ) + "") && Oe(s, l);
    },
    d(o) {
      o && (H(t), H(n), H(s));
    }
  };
}
function _o(i) {
  let e, t = (
    /*p*/
    i[41].index != null && uo(i)
  );
  return {
    c() {
      t && t.c(), e = Rn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = uo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && H(e), t && t.d(n);
    }
  };
}
function ho(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = te(
        /*formatted_timer*/
        i[20]
      ), n = te(t), l = te("s");
    },
    m(s, o) {
      F(s, e, o), F(s, n, o), F(s, l, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Oe(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Oe(n, t);
    },
    d(s) {
      s && (H(e), H(n), H(l));
    }
  };
}
function yd(i) {
  let e, t;
  return e = new od({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Ia(e.$$.fragment);
    },
    m(n, l) {
      Ua(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (et(e.$$.fragment, n), t = !0);
    },
    o(n) {
      rt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ya(e, n);
    }
  };
}
function Cd(i) {
  let e, t, n, l, s, o = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && mo(i)
  );
  return {
    c() {
      e = at("div"), t = at("div"), r && r.c(), n = Ue(), l = at("div"), s = at("div"), tt(t, "class", "progress-level-inner svelte-16nch4a"), tt(s, "class", "progress-bar svelte-16nch4a"), Lt(s, "width", o), tt(l, "class", "progress-bar-wrap svelte-16nch4a"), tt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      F(a, e, f), $t(e, t), r && r.m(t, null), $t(e, n), $t(e, l), $t(l, s), i[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = mo(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Lt(s, "width", o);
    },
    i: os,
    o: os,
    d(a) {
      a && H(e), r && r.d(), i[31](null);
    }
  };
}
function mo(i) {
  let e, t = Ui(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = vo(ro(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Rn();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      F(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = Ui(
          /*progress*/
          l[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = ro(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = vo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && H(e), Ha(n, l);
    }
  };
}
function go(i) {
  let e, t, n, l, s = (
    /*i*/
    i[43] !== 0 && Sd()
  ), o = (
    /*p*/
    i[41].desc != null && bo(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && wo()
  ), a = (
    /*progress_level*/
    i[14] != null && po(i)
  );
  return {
    c() {
      s && s.c(), e = Ue(), o && o.c(), t = Ue(), r && r.c(), n = Ue(), a && a.c(), l = Rn();
    },
    m(f, c) {
      s && s.m(f, c), F(f, e, c), o && o.m(f, c), F(f, t, c), r && r.m(f, c), F(f, n, c), a && a.m(f, c), F(f, l, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = bo(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = wo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = po(f), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (H(e), H(t), H(n), H(l)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function Sd(i) {
  let e;
  return {
    c() {
      e = te(" /");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && H(e);
    }
  };
}
function bo(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = te(e);
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Oe(t, e);
    },
    d(n) {
      n && H(t);
    }
  };
}
function wo(i) {
  let e;
  return {
    c() {
      e = te("-");
    },
    m(t, n) {
      F(t, e, n);
    },
    d(t) {
      t && H(e);
    }
  };
}
function po(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = te(e), n = te("%");
    },
    m(l, s) {
      F(l, t, s), F(l, n, s);
    },
    p(l, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && Oe(t, e);
    },
    d(l) {
      l && (H(t), H(n));
    }
  };
}
function vo(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && go(i)
  );
  return {
    c() {
      t && t.c(), e = Rn();
    },
    m(n, l) {
      t && t.m(n, l), F(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = go(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && H(e), t && t.d(n);
    }
  };
}
function ko(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), o = Xa(
    s,
    i,
    /*$$scope*/
    i[29],
    ao
  );
  return {
    c() {
      e = at("p"), t = te(
        /*loading_text*/
        i[9]
      ), n = Ue(), o && o.c(), tt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      F(r, e, a), $t(e, t), F(r, n, a), o && o.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Oe(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!l || a[0] & /*$$scope*/
      536870912) && Oa(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        l ? ja(
          s,
          /*$$scope*/
          r[29],
          a,
          hd
        ) : Fa(
          /*$$scope*/
          r[29]
        ),
        ao
      );
    },
    i(r) {
      l || (et(o, r), l = !0);
    },
    o(r) {
      rt(o, r), l = !1;
    },
    d(r) {
      r && (H(e), H(n)), o && o.d(r);
    }
  };
}
function zd(i) {
  let e, t, n, l, s;
  const o = [gd, md], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = o[t](i)), {
    c() {
      e = at("div"), n && n.c(), tt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Fe(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Fe(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Fe(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Fe(
        e,
        "border",
        /*border*/
        i[12]
      ), Lt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Lt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      F(f, e, c), ~t && r[t].m(e, null), i[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ss(), rt(r[u], 1, 1, () => {
        r[u] = null;
      }), ls()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), et(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && tt(e, "class", l), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Fe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Fe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Fe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Fe(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Lt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Lt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (et(n), s = !0);
    },
    o(f) {
      rt(n), s = !1;
    },
    d(f) {
      f && H(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var qd = function(i, e, t, n) {
  function l(s) {
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
      c.done ? s(c.value) : l(c.value).then(r, a);
    }
    f((n = n.apply(i, e || [])).next());
  });
};
let vi = [], Xl = !1;
function Bd(i) {
  return qd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (vi.push(e), !Xl) Xl = !0;
      else return;
      yield cd(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < vi.length; l++) {
          const o = vi[l].getBoundingClientRect();
          (l === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Xl = !1, vi = [];
      });
    }
  });
}
function Ed(i, e, t) {
  let n, { $$slots: l = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = _d();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: b = "full" } = e, { message: g = null } = e, { progress: p = null } = e, { variant: w = "default" } = e, { loading_text: h = "Loading..." } = e, { absolute: m = !0 } = e, { translucent: C = !1 } = e, { border: S = !1 } = e, { autoscroll: v } = e, k, y = !1, D = 0, z = 0, L = null, A = null, j = 0, O = null, Q, K = null, V = !0;
  const R = () => {
    t(0, a = t(27, L = t(19, P = null))), t(25, D = performance.now()), t(26, z = 0), y = !0, U();
  };
  function U() {
    requestAnimationFrame(() => {
      t(26, z = (performance.now() - D) / 1e3), y && U();
    });
  }
  function W() {
    t(26, z = 0), t(0, a = t(27, L = t(19, P = null))), y && (y = !1);
  }
  ud(() => {
    y && W();
  });
  let P = null;
  function ge(T) {
    so[T ? "unshift" : "push"](() => {
      K = T, t(16, K), t(7, p), t(14, O), t(15, Q);
    });
  }
  const re = () => {
    o("clear_status");
  };
  function fe(T) {
    so[T ? "unshift" : "push"](() => {
      k = T, t(13, k);
    });
  }
  return i.$$set = (T) => {
    "i18n" in T && t(1, r = T.i18n), "eta" in T && t(0, a = T.eta), "queue_position" in T && t(2, f = T.queue_position), "queue_size" in T && t(3, c = T.queue_size), "status" in T && t(4, u = T.status), "scroll_to_output" in T && t(22, _ = T.scroll_to_output), "timer" in T && t(5, d = T.timer), "show_progress" in T && t(6, b = T.show_progress), "message" in T && t(23, g = T.message), "progress" in T && t(7, p = T.progress), "variant" in T && t(8, w = T.variant), "loading_text" in T && t(9, h = T.loading_text), "absolute" in T && t(10, m = T.absolute), "translucent" in T && t(11, C = T.translucent), "border" in T && t(12, S = T.border), "autoscroll" in T && t(24, v = T.autoscroll), "$$scope" in T && t(29, s = T.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = L), a != null && L !== a && (t(28, A = (performance.now() - D) / 1e3 + a), t(19, P = A.toFixed(1)), t(27, L = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, j = A === null || A <= 0 || !z ? null : Math.min(z / A, 1)), i.$$.dirty[0] & /*progress*/
    128 && p != null && t(18, V = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? t(14, O = p.map((T) => {
      if (T.index != null && T.length != null)
        return T.index / T.length;
      if (T.progress != null)
        return T.progress;
    })) : t(14, O = null), O ? (t(15, Q = O[O.length - 1]), K && (Q === 0 ? t(16, K.style.transition = "0", K) : t(16, K.style.transition = "150ms", K))) : t(15, Q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : W()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && k && _ && (u === "pending" || u === "complete") && Bd(k, v), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = z.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    b,
    p,
    w,
    h,
    m,
    C,
    S,
    k,
    O,
    Q,
    K,
    j,
    V,
    P,
    n,
    o,
    _,
    g,
    v,
    D,
    z,
    L,
    A,
    s,
    l,
    ge,
    re,
    fe
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
const { setContext: Eg, getContext: Dd } = window.__gradio__svelte__internal, Rd = "WORKER_PROXY_CONTEXT_KEY";
function Na() {
  return Dd(Rd);
}
function Wd(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Va(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Pa(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!Wd(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function Ad(i) {
  if (i == null || !Pa(i))
    return i;
  const e = Na();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const s = new Blob([l.body], {
      type: Va(l.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: Ld,
  assign: Oi,
  check_outros: Za,
  compute_rest_props: yo,
  create_slot: bs,
  detach: ll,
  element: Ga,
  empty: Ka,
  exclude_internal_props: Td,
  get_all_dirty_from_scope: ws,
  get_slot_changes: ps,
  get_spread_update: Ja,
  group_outros: Qa,
  init: Id,
  insert: sl,
  listen: xa,
  prevent_default: Xd,
  safe_not_equal: Yd,
  set_attributes: Ni,
  transition_in: an,
  transition_out: rn,
  update_slot_base: vs
} = window.__gradio__svelte__internal, { createEventDispatcher: Hd } = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[8].default
  ), r = bs(
    o,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      i[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      i[1]
    ) },
    /*$$restProps*/
    i[6]
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = Oi(f, a[c]);
  return {
    c() {
      e = Ga("a"), r && r.c(), Ni(e, f);
    },
    m(c, u) {
      sl(c, e, u), r && r.m(e, null), n = !0, l || (s = xa(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && vs(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? ps(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : ws(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ni(e, f = Ja(a, [
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
      n || (an(r, c), n = !0);
    },
    o(c) {
      rn(r, c), n = !1;
    },
    d(c) {
      c && ll(e), r && r.d(c), l = !1, s();
    }
  };
}
function jd(i) {
  let e, t, n, l;
  const s = [Od, Ud], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = Ka();
    },
    m(a, f) {
      o[e].m(a, f), sl(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Qa(), rn(o[c], 1, 1, () => {
        o[c] = null;
      }), Za(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), an(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (an(t), l = !0);
    },
    o(a) {
      rn(t), l = !1;
    },
    d(a) {
      a && ll(n), o[e].d(a);
    }
  };
}
function Ud(i) {
  let e, t, n, l;
  const s = (
    /*#slots*/
    i[8].default
  ), o = bs(
    s,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let r = [
    /*$$restProps*/
    i[6],
    { href: (
      /*href*/
      i[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = Oi(a, r[f]);
  return {
    c() {
      e = Ga("a"), o && o.c(), Ni(e, a);
    },
    m(f, c) {
      sl(f, e, c), o && o.m(e, null), t = !0, n || (l = xa(e, "click", Xd(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && vs(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? ps(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : ws(
          /*$$scope*/
          f[7]
        ),
        null
      ), Ni(e, a = Ja(r, [
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
      t || (an(o, f), t = !0);
    },
    o(f) {
      rn(o, f), t = !1;
    },
    d(f) {
      f && ll(e), o && o.d(f), n = !1, l();
    }
  };
}
function Od(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = bs(
    t,
    i,
    /*$$scope*/
    i[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s & /*$$scope*/
      128) && vs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? ps(
          t,
          /*$$scope*/
          l[7],
          s,
          null
        ) : ws(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (an(n, l), e = !0);
    },
    o(l) {
      rn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Nd(i) {
  let e, t, n, l, s;
  const o = [jd, Fd], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Pa(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = o[t](i), {
    c() {
      n.c(), l = Ka();
    },
    m(f, c) {
      r[t].m(f, c), sl(f, l, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (Qa(), rn(r[u], 1, 1, () => {
        r[u] = null;
      }), Za(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), an(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      s || (an(n), s = !0);
    },
    o(f) {
      rn(n), s = !1;
    },
    d(f) {
      f && ll(l), r[t].d(f);
    }
  };
}
function Vd(i, e, t) {
  const n = ["href", "download"];
  let l = yo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(b, g, p, w) {
    function h(m) {
      return m instanceof p ? m : new p(function(C) {
        C(m);
      });
    }
    return new (p || (p = Promise))(function(m, C) {
      function S(y) {
        try {
          k(w.next(y));
        } catch (D) {
          C(D);
        }
      }
      function v(y) {
        try {
          k(w.throw(y));
        } catch (D) {
          C(D);
        }
      }
      function k(y) {
        y.done ? m(y.value) : h(y.value).then(S, v);
      }
      k((w = w.apply(b, g || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = Hd();
  let u = !1;
  const _ = Na();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const g = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: g,
        headers: {},
        query_string: ""
      }).then((p) => {
        if (p.status !== 200)
          throw new Error(`Failed to get file ${g} from the Wasm worker.`);
        const w = new Blob(
          [p.body],
          {
            type: Va(p.headers, "content-type")
          }
        ), h = URL.createObjectURL(w), m = document.createElement("a");
        m.href = h, m.download = f, m.click(), URL.revokeObjectURL(h);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (b) => {
    e = Oi(Oi({}, e), Td(b)), t(6, l = yo(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, f = b.download), "$$scope" in b && t(7, o = b.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    l,
    o,
    s
  ];
}
class Pd extends Ld {
  constructor(e) {
    super(), Id(this, e, Vd, Nd, Yd, { href: 0, download: 1 });
  }
}
var Zd = Object.defineProperty, Gd = (i, e, t) => e in i ? Zd(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, _t = (i, e, t) => (Gd(i, typeof e != "symbol" ? e + "" : e, t), t), $a = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Yn = (i, e, t) => ($a(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Kd = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Jd = (i, e, t, n) => ($a(i, e, "write to private field"), e.set(i, t), t), Mt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function er(i, e) {
  return i.map(
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
    size: l,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    _t(this, "path"), _t(this, "url"), _t(this, "orig_name"), _t(this, "size"), _t(this, "blob"), _t(this, "is_stream"), _t(this, "mime_type"), _t(this, "alt_text"), _t(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
let Mg = class extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Yn(this, Mt) + t; ; ) {
          const l = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (l === -1 || l - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (l === -1)
            break;
          const o = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, o)), t = t.slice(l + 1);
        }
        Jd(this, Mt, t);
      },
      flush: (t) => {
        if (Yn(this, Mt) === "")
          return;
        const n = e.allowCR && Yn(this, Mt).endsWith("\r") ? Yn(this, Mt).slice(0, -1) : Yn(this, Mt);
        t.enqueue(n);
      }
    }), Kd(this, Mt, "");
  }
};
Mt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: xd,
  append: De,
  attr: Gt,
  detach: tr,
  element: Kt,
  init: $d,
  insert: nr,
  noop: Co,
  safe_not_equal: eh,
  set_data: Vi,
  set_style: Yl,
  space: as,
  text: qn,
  toggle_class: So
} = window.__gradio__svelte__internal, { onMount: th, createEventDispatcher: nh, onDestroy: ih } = window.__gradio__svelte__internal;
function zo(i) {
  let e, t, n, l, s = Pn(
    /*file_to_display*/
    i[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = Kt("div"), t = Kt("span"), n = Kt("div"), l = Kt("progress"), o = qn(s), a = as(), f = Kt("span"), u = qn(c), Yl(l, "visibility", "hidden"), Yl(l, "height", "0"), Yl(l, "width", "0"), l.value = r = Pn(
        /*file_to_display*/
        i[2]
      ), Gt(l, "max", "100"), Gt(l, "class", "svelte-cr2edf"), Gt(n, "class", "progress-bar svelte-cr2edf"), Gt(f, "class", "file-name svelte-cr2edf"), Gt(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      nr(_, e, d), De(e, t), De(t, n), De(n, l), De(l, o), De(e, a), De(e, f), De(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = Pn(
        /*file_to_display*/
        _[2]
      ) + "") && Vi(o, s), d & /*file_to_display*/
      4 && r !== (r = Pn(
        /*file_to_display*/
        _[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && Vi(u, c);
    },
    d(_) {
      _ && tr(e);
    }
  };
}
function lh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    i[2] && zo(i)
  );
  return {
    c() {
      e = Kt("div"), t = Kt("span"), n = qn("Uploading "), s = qn(l), o = as(), a = qn(r), f = qn("..."), c = as(), u && u.c(), Gt(t, "class", "uploading svelte-cr2edf"), Gt(e, "class", "wrap svelte-cr2edf"), So(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(_, d) {
      nr(_, e, d), De(e, t), De(t, n), De(t, s), De(t, o), De(t, a), De(t, f), De(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      _[0].length + "") && Vi(s, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && Vi(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = zo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && So(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Co,
    o: Co,
    d(_) {
      _ && tr(e), u && u.d();
    }
  };
}
function Pn(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function sh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Pn(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function oh(i, e, t) {
  var n = this && this.__awaiter || function(g, p, w, h) {
    function m(C) {
      return C instanceof w ? C : new w(function(S) {
        S(C);
      });
    }
    return new (w || (w = Promise))(function(C, S) {
      function v(D) {
        try {
          y(h.next(D));
        } catch (z) {
          S(z);
        }
      }
      function k(D) {
        try {
          y(h.throw(D));
        } catch (z) {
          S(z);
        }
      }
      function y(D) {
        D.done ? C(D.value) : m(D.value).then(v, k);
      }
      y((h = h.apply(g, p || [])).next());
    });
  };
  let { upload_id: l } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((g) => Object.assign(Object.assign({}, g), { progress: 0 }));
  const d = nh();
  function b(g, p) {
    t(0, _ = _.map((w) => (w.orig_name === g && (w.progress += p), w)));
  }
  return th(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(g) {
      return n(this, void 0, void 0, function* () {
        const p = JSON.parse(g.data);
        f || t(1, f = !0), p.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = p), b(p.orig_name, p.chunk_size));
      });
    };
  })), ih(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (g) => {
    "upload_id" in g && t(3, l = g.upload_id), "root" in g && t(4, s = g.root), "files" in g && t(5, o = g.files), "stream_handler" in g && t(6, r = g.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && sh(_), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    l,
    s,
    o,
    r,
    c
  ];
}
class ah extends xd {
  constructor(e) {
    super(), $d(this, e, oh, lh, eh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: rh,
  append: qo,
  attr: we,
  binding_callbacks: fh,
  bubble: Ht,
  check_outros: ir,
  create_component: ch,
  create_slot: lr,
  destroy_component: uh,
  detach: ol,
  element: rs,
  empty: sr,
  get_all_dirty_from_scope: or,
  get_slot_changes: ar,
  group_outros: rr,
  init: _h,
  insert: al,
  listen: Le,
  mount_component: dh,
  prevent_default: Ft,
  run_all: hh,
  safe_not_equal: mh,
  set_style: fr,
  space: gh,
  stop_propagation: jt,
  toggle_class: he,
  transition_in: Tt,
  transition_out: fn,
  update_slot_base: cr
} = window.__gradio__svelte__internal, { createEventDispatcher: bh, tick: wh } = window.__gradio__svelte__internal;
function ph(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    i[26].default
  ), d = lr(
    _,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = rs("button"), d && d.c(), t = gh(), n = rs("input"), we(n, "aria-label", "file upload"), we(n, "data-testid", "file-upload"), we(n, "type", "file"), we(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = s = /*file_count*/
      i[6] === "multiple" || void 0, we(n, "webkitdirectory", o = /*file_count*/
      i[6] === "directory" || void 0), we(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), we(n, "class", "svelte-1s26xmt"), we(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), we(e, "class", "svelte-1s26xmt"), he(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), he(
        e,
        "center",
        /*center*/
        i[4]
      ), he(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), he(
        e,
        "flex",
        /*flex*/
        i[5]
      ), he(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), fr(e, "height", "100%");
    },
    m(b, g) {
      al(b, e, g), d && d.m(e, null), qo(e, t), qo(e, n), i[34](n), f = !0, c || (u = [
        Le(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Le(e, "drag", jt(Ft(
          /*drag_handler*/
          i[27]
        ))),
        Le(e, "dragstart", jt(Ft(
          /*dragstart_handler*/
          i[28]
        ))),
        Le(e, "dragend", jt(Ft(
          /*dragend_handler*/
          i[29]
        ))),
        Le(e, "dragover", jt(Ft(
          /*dragover_handler*/
          i[30]
        ))),
        Le(e, "dragenter", jt(Ft(
          /*dragenter_handler*/
          i[31]
        ))),
        Le(e, "dragleave", jt(Ft(
          /*dragleave_handler*/
          i[32]
        ))),
        Le(e, "drop", jt(Ft(
          /*drop_handler*/
          i[33]
        ))),
        Le(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Le(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Le(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Le(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(b, g) {
      d && d.p && (!f || g[0] & /*$$scope*/
      33554432) && cr(
        d,
        _,
        b,
        /*$$scope*/
        b[25],
        f ? ar(
          _,
          /*$$scope*/
          b[25],
          g,
          null
        ) : or(
          /*$$scope*/
          b[25]
        ),
        null
      ), (!f || g[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      b[16] || void 0)) && we(n, "accept", l), (!f || g[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = s), (!f || g[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "directory" || void 0)) && we(n, "webkitdirectory", o), (!f || g[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && we(n, "mozdirectory", r), (!f || g[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && we(e, "tabindex", a), (!f || g[0] & /*hidden*/
      512) && he(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!f || g[0] & /*center*/
      16) && he(
        e,
        "center",
        /*center*/
        b[4]
      ), (!f || g[0] & /*boundedheight*/
      8) && he(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!f || g[0] & /*flex*/
      32) && he(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!f || g[0] & /*disable_click*/
      128) && he(
        e,
        "disable_click",
        /*disable_click*/
        b[7]
      );
    },
    i(b) {
      f || (Tt(d, b), f = !0);
    },
    o(b) {
      fn(d, b), f = !1;
    },
    d(b) {
      b && ol(e), d && d.d(b), i[34](null), c = !1, hh(u);
    }
  };
}
function vh(i) {
  let e, t, n = !/*hidden*/
  i[9] && Bo(i);
  return {
    c() {
      n && n.c(), e = sr();
    },
    m(l, s) {
      n && n.m(l, s), al(l, e, s), t = !0;
    },
    p(l, s) {
      /*hidden*/
      l[9] ? n && (rr(), fn(n, 1, 1, () => {
        n = null;
      }), ir()) : n ? (n.p(l, s), s[0] & /*hidden*/
      512 && Tt(n, 1)) : (n = Bo(l), n.c(), Tt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Tt(n), t = !0);
    },
    o(l) {
      fn(n), t = !1;
    },
    d(l) {
      l && ol(e), n && n.d(l);
    }
  };
}
function kh(i) {
  let e, t, n, l, s;
  const o = (
    /*#slots*/
    i[26].default
  ), r = lr(
    o,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = rs("button"), r && r.c(), we(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), we(e, "class", "svelte-1s26xmt"), he(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), he(
        e,
        "center",
        /*center*/
        i[4]
      ), he(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), he(
        e,
        "flex",
        /*flex*/
        i[5]
      ), fr(e, "height", "100%");
    },
    m(a, f) {
      al(a, e, f), r && r.m(e, null), n = !0, l || (s = Le(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && cr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? ar(
          o,
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
      a[9] ? -1 : 0)) && we(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && he(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && he(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && he(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && he(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Tt(r, a), n = !0);
    },
    o(a) {
      fn(r, a), n = !1;
    },
    d(a) {
      a && ol(e), r && r.d(a), l = !1, s();
    }
  };
}
function Bo(i) {
  let e, t;
  return e = new ah({
    props: {
      root: (
        /*root*/
        i[8]
      ),
      upload_id: (
        /*upload_id*/
        i[14]
      ),
      files: (
        /*file_data*/
        i[15]
      ),
      stream_handler: (
        /*stream_handler*/
        i[11]
      )
    }
  }), {
    c() {
      ch(e.$$.fragment);
    },
    m(n, l) {
      dh(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      256 && (s.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (s.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (s.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (s.stream_handler = /*stream_handler*/
      n[11]), e.$set(s);
    },
    i(n) {
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      uh(e, n);
    }
  };
}
function yh(i) {
  let e, t, n, l;
  const s = [kh, vh, ph], o = [];
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
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = sr();
    },
    m(a, f) {
      o[e].m(a, f), al(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (rr(), fn(o[c], 1, 1, () => {
        o[c] = null;
      }), ir(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Tt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Tt(t), l = !0);
    },
    o(a) {
      fn(t), l = !1;
    },
    d(a) {
      a && ol(n), o[e].d(a);
    }
  };
}
function Ch(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((l) => l === "*" || l === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((l) => l.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((l) => {
    const [s] = l.split("/").map((o) => o.trim());
    return l.endsWith("/*") && t.startsWith(s + "/");
  });
}
function Sh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(M, X, J, B) {
    function ce(Ve) {
      return Ve instanceof J ? Ve : new J(function(nt) {
        nt(Ve);
      });
    }
    return new (J || (J = Promise))(function(Ve, nt) {
      function Ce(Pe) {
        try {
          ke(B.next(Pe));
        } catch (Xt) {
          nt(Xt);
        }
      }
      function ve(Pe) {
        try {
          ke(B.throw(Pe));
        } catch (Xt) {
          nt(Xt);
        }
      }
      function ke(Pe) {
        Pe.done ? Ve(Pe.value) : ce(Pe.value).then(Ce, ve);
      }
      ke((B = B.apply(M, X || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: b = !1 } = e, { format: g = "file" } = e, { uploading: p = !1 } = e, { hidden_upload: w = null } = e, { show_progress: h = !0 } = e, { max_file_size: m = null } = e, { upload: C } = e, { stream_handler: S } = e, v, k, y;
  const D = bh(), z = ["image", "video", "audio", "text", "file"], L = (M) => M.startsWith(".") || M.endsWith("/*") ? M : z.includes(M) ? M + "/*" : "." + M;
  function A() {
    t(20, r = !r);
  }
  function j() {
    navigator.clipboard.read().then((M) => s(this, void 0, void 0, function* () {
      for (let X = 0; X < M.length; X++) {
        const J = M[X].types.find((B) => B.startsWith("image/"));
        if (J) {
          M[X].getType(J).then((B) => s(this, void 0, void 0, function* () {
            const ce = new File([B], `clipboard.${J.replace("image/", "")}`);
            yield K([ce]);
          }));
          break;
        }
      }
    }));
  }
  function O() {
    _ || w && (t(2, w.value = "", w), w.click());
  }
  function Q(M) {
    return s(this, void 0, void 0, function* () {
      yield wh(), t(14, v = Math.random().toString(36).substring(2, 15)), t(1, p = !0);
      try {
        const X = yield C(M, d, v, m ?? 1 / 0);
        return D("load", u === "single" ? X == null ? void 0 : X[0] : X), t(1, p = !1), X || [];
      } catch (X) {
        return D("error", X.message), t(1, p = !1), [];
      }
    });
  }
  function K(M) {
    return s(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let X = M.map((J) => new File([J], J instanceof File ? J.name : "file", { type: J.type }));
      return t(15, k = yield er(X)), yield Q(k);
    });
  }
  function V(M) {
    return s(this, void 0, void 0, function* () {
      const X = M.target;
      if (X.files)
        if (g != "blob")
          yield K(Array.from(X.files));
        else {
          if (u === "single") {
            D("load", X.files[0]);
            return;
          }
          D("load", X.files);
        }
    });
  }
  function R(M) {
    return s(this, void 0, void 0, function* () {
      var X;
      if (t(20, r = !1), !(!((X = M.dataTransfer) === null || X === void 0) && X.files)) return;
      const J = Array.from(M.dataTransfer.files).filter((B) => {
        const ce = "." + B.name.split(".").pop();
        return ce && Ch(y, ce, B.type) || (ce && Array.isArray(o) ? o.includes(ce) : ce === o) ? !0 : (D("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield K(J);
    });
  }
  function U(M) {
    Ht.call(this, i, M);
  }
  function W(M) {
    Ht.call(this, i, M);
  }
  function P(M) {
    Ht.call(this, i, M);
  }
  function ge(M) {
    Ht.call(this, i, M);
  }
  function re(M) {
    Ht.call(this, i, M);
  }
  function fe(M) {
    Ht.call(this, i, M);
  }
  function T(M) {
    Ht.call(this, i, M);
  }
  function Ne(M) {
    fh[M ? "unshift" : "push"](() => {
      w = M, t(2, w);
    });
  }
  return i.$$set = (M) => {
    "filetype" in M && t(0, o = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, f = M.center), "flex" in M && t(5, c = M.flex), "file_count" in M && t(6, u = M.file_count), "disable_click" in M && t(7, _ = M.disable_click), "root" in M && t(8, d = M.root), "hidden" in M && t(9, b = M.hidden), "format" in M && t(21, g = M.format), "uploading" in M && t(1, p = M.uploading), "hidden_upload" in M && t(2, w = M.hidden_upload), "show_progress" in M && t(10, h = M.show_progress), "max_file_size" in M && t(22, m = M.max_file_size), "upload" in M && t(23, C = M.upload), "stream_handler" in M && t(11, S = M.stream_handler), "$$scope" in M && t(25, l = M.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, y = null) : typeof o == "string" ? t(16, y = L(o)) : (t(0, o = o.map(L)), t(16, y = o.join(", "))));
  }, [
    o,
    p,
    w,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    h,
    S,
    j,
    O,
    v,
    k,
    y,
    A,
    V,
    R,
    r,
    g,
    m,
    C,
    K,
    l,
    n,
    U,
    W,
    P,
    ge,
    re,
    fe,
    T,
    Ne
  ];
}
class zh extends rh {
  constructor(e) {
    super(), _h(
      this,
      e,
      Sh,
      yh,
      mh,
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
  SvelteComponent: qh,
  append: ki,
  attr: Hl,
  create_component: Bh,
  destroy_component: Eh,
  detach: Mh,
  element: Fl,
  init: Dh,
  insert: Rh,
  listen: Wh,
  mount_component: Ah,
  noop: Lh,
  safe_not_equal: Th,
  set_style: Ih,
  space: Xh,
  text: Yh,
  transition_in: Hh,
  transition_out: Fh
} = window.__gradio__svelte__internal, { createEventDispatcher: jh } = window.__gradio__svelte__internal;
function Uh(i) {
  let e, t, n, l, s, o = "Click to Access Webcam", r, a, f, c;
  return l = new Ea({}), {
    c() {
      e = Fl("button"), t = Fl("div"), n = Fl("span"), Bh(l.$$.fragment), s = Xh(), r = Yh(o), Hl(n, "class", "icon-wrap svelte-fjcd9c"), Hl(t, "class", "wrap svelte-fjcd9c"), Hl(e, "class", "svelte-fjcd9c"), Ih(e, "height", "100%");
    },
    m(u, _) {
      Rh(u, e, _), ki(e, t), ki(t, n), Ah(l, n, null), ki(t, s), ki(t, r), a = !0, f || (c = Wh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), f = !0);
    },
    p: Lh,
    i(u) {
      a || (Hh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      Fh(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Mh(e), Eh(l), f = !1, c();
    }
  };
}
function Oh(i) {
  const e = jh();
  return [e, () => e("click")];
}
class Nh extends qh {
  constructor(e) {
    super(), Dh(this, e, Oh, Uh, Th, {});
  }
}
function Vh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Ph(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Eo(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((s) => (Ph(s, e), s));
}
function Zh(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Gh,
  action_destroyer: Kh,
  add_render_callback: Jh,
  append: gt,
  attr: le,
  binding_callbacks: Qh,
  check_outros: $n,
  create_component: Wn,
  create_in_transition: xh,
  destroy_component: An,
  destroy_each: $h,
  detach: Re,
  element: Xe,
  empty: ks,
  ensure_array_like: Mo,
  group_outros: ei,
  init: e1,
  insert: We,
  listen: Pi,
  mount_component: Ln,
  noop: ys,
  run_all: t1,
  safe_not_equal: n1,
  set_data: ur,
  set_input_value: fs,
  space: li,
  stop_propagation: i1,
  text: _r,
  toggle_class: yi,
  transition_in: me,
  transition_out: pe
} = window.__gradio__svelte__internal, { createEventDispatcher: l1, onMount: s1 } = window.__gradio__svelte__internal;
function Do(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function o1(i) {
  let e, t, n, l, s, o, r, a, f, c, u;
  const _ = [f1, r1], d = [];
  function b(w, h) {
    return (
      /*mode*/
      w[1] === "video" || /*streaming*/
      w[0] ? 0 : 1
    );
  }
  n = b(i), l = d[n] = _[n](i);
  let g = !/*recording*/
  i[8] && Ro(i), p = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Wo(i)
  );
  return {
    c() {
      e = Xe("div"), t = Xe("button"), l.c(), o = li(), g && g.c(), r = li(), p && p.c(), a = ks(), le(t, "aria-label", s = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), le(t, "class", "svelte-8hqvb6"), le(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(w, h) {
      We(w, e, h), gt(e, t), d[n].m(t, null), gt(e, o), g && g.m(e, null), We(w, r, h), p && p.m(w, h), We(w, a, h), f = !0, c || (u = Pi(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(w, h) {
      let m = n;
      n = b(w), n === m ? d[n].p(w, h) : (ei(), pe(d[m], 1, 1, () => {
        d[m] = null;
      }), $n(), l = d[n], l ? l.p(w, h) : (l = d[n] = _[n](w), l.c()), me(l, 1), l.m(t, null)), (!f || h[0] & /*mode*/
      2 && s !== (s = /*mode*/
      w[1] === "image" ? "capture photo" : "start recording")) && le(t, "aria-label", s), /*recording*/
      w[8] ? g && (ei(), pe(g, 1, 1, () => {
        g = null;
      }), $n()) : g ? (g.p(w, h), h[0] & /*recording*/
      256 && me(g, 1)) : (g = Ro(w), g.c(), me(g, 1), g.m(e, null)), /*options_open*/
      w[10] && /*selected_device*/
      w[7] ? p ? (p.p(w, h), h[0] & /*options_open, selected_device*/
      1152 && me(p, 1)) : (p = Wo(w), p.c(), me(p, 1), p.m(a.parentNode, a)) : p && (ei(), pe(p, 1, 1, () => {
        p = null;
      }), $n());
    },
    i(w) {
      f || (me(l), me(g), me(p), f = !0);
    },
    o(w) {
      pe(l), pe(g), pe(p), f = !1;
    },
    d(w) {
      w && (Re(e), Re(r), Re(a)), d[n].d(), g && g.d(), p && p.d(w), c = !1, u();
    }
  };
}
function a1(i) {
  let e, t, n, l;
  return t = new Nh({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Xe("div"), Wn(t.$$.fragment), le(e, "title", "grant webcam access");
    },
    m(s, o) {
      We(s, e, o), Ln(t, e, null), l = !0;
    },
    p: ys,
    i(s) {
      l || (me(t.$$.fragment, s), s && (n || Jh(() => {
        n = xh(e, K_, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(s) {
      pe(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && Re(e), An(t);
    }
  };
}
function r1(i) {
  let e, t, n;
  return t = new Mc({}), {
    c() {
      e = Xe("div"), Wn(t.$$.fragment), le(e, "class", "icon svelte-8hqvb6"), le(e, "title", "capture photo");
    },
    m(l, s) {
      We(l, e, s), Ln(t, e, null), n = !0;
    },
    p: ys,
    i(l) {
      n || (me(t.$$.fragment, l), n = !0);
    },
    o(l) {
      pe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), An(t);
    }
  };
}
function f1(i) {
  let e, t, n, l;
  const s = [u1, c1], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = ks();
    },
    m(a, f) {
      o[e].m(a, f), We(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (ei(), pe(o[c], 1, 1, () => {
        o[c] = null;
      }), $n(), t = o[e], t || (t = o[e] = s[e](a), t.c()), me(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (me(t), l = !0);
    },
    o(a) {
      pe(t), l = !1;
    },
    d(a) {
      a && Re(n), o[e].d(a);
    }
  };
}
function c1(i) {
  let e, t, n;
  return t = new Xc({}), {
    c() {
      e = Xe("div"), Wn(t.$$.fragment), le(e, "class", "icon red svelte-8hqvb6"), le(e, "title", "start recording");
    },
    m(l, s) {
      We(l, e, s), Ln(t, e, null), n = !0;
    },
    i(l) {
      n || (me(t.$$.fragment, l), n = !0);
    },
    o(l) {
      pe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), An(t);
    }
  };
}
function u1(i) {
  let e, t, n;
  return t = new Gu({}), {
    c() {
      e = Xe("div"), Wn(t.$$.fragment), le(e, "class", "icon red svelte-8hqvb6"), le(e, "title", "stop recording");
    },
    m(l, s) {
      We(l, e, s), Ln(t, e, null), n = !0;
    },
    i(l) {
      n || (me(t.$$.fragment, l), n = !0);
    },
    o(l) {
      pe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Re(e), An(t);
    }
  };
}
function Ro(i) {
  let e, t, n, l, s;
  return t = new gs({}), {
    c() {
      e = Xe("button"), Wn(t.$$.fragment), le(e, "class", "icon svelte-8hqvb6"), le(e, "aria-label", "select input source");
    },
    m(o, r) {
      We(o, e, r), Ln(t, e, null), n = !0, l || (s = Pi(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: ys,
    i(o) {
      n || (me(t.$$.fragment, o), n = !0);
    },
    o(o) {
      pe(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Re(e), An(t), l = !1, s();
    }
  };
}
function Wo(i) {
  let e, t, n, l, s, o, r;
  n = new gs({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? d1 : _1
    );
  }
  let f = a(i), c = f(i);
  return {
    c() {
      e = Xe("select"), t = Xe("button"), Wn(n.$$.fragment), l = li(), c.c(), le(t, "class", "inset-icon svelte-8hqvb6"), le(e, "class", "select-wrap svelte-8hqvb6"), le(e, "aria-label", "select source");
    },
    m(u, _) {
      We(u, e, _), gt(e, t), Ln(n, t, null), gt(t, l), c.m(e, null), s = !0, o || (r = [
        Pi(t, "click", i1(
          /*click_handler_2*/
          i[22]
        )),
        Kh(Cs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Pi(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], o = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      s || (me(n.$$.fragment, u), s = !0);
    },
    o(u) {
      pe(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Re(e), An(n), c.d(), o = !1, t1(r);
    }
  };
}
function _1(i) {
  let e, t = Mo(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ao(Do(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ks();
    },
    m(l, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, s);
      We(l, e, s);
    },
    p(l, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = Mo(
          /*available_video_devices*/
          l[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Do(l, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Ao(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Re(e), $h(n, l);
    }
  };
}
function d1(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Xe("option"), n = _r(t), e.__value = "", fs(e, e.__value), le(e, "class", "svelte-8hqvb6");
    },
    m(l, s) {
      We(l, e, s), gt(e, n);
    },
    p(l, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && ur(n, t);
    },
    d(l) {
      l && Re(e);
    }
  };
}
function Ao(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, s, o;
  return {
    c() {
      e = Xe("option"), n = _r(t), l = li(), e.__value = s = /*device*/
      i[32].deviceId, fs(e, e.__value), e.selected = o = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, le(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      We(r, e, a), gt(e, n), gt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && ur(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, fs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Re(e);
    }
  };
}
function h1(i) {
  let e, t, n, l, s, o;
  const r = [a1, o1], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = f(i), s = a[l] = r[l](i), {
    c() {
      e = Xe("div"), t = Xe("video"), n = li(), s.c(), le(t, "class", "svelte-8hqvb6"), yi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), yi(t, "hide", !/*webcam_accessed*/
      i[9]), le(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      We(c, e, u), gt(e, t), i[19](t), gt(e, n), a[l].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && yi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && yi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = l;
      l = f(c), l === _ ? a[l].p(c, u) : (ei(), pe(a[_], 1, 1, () => {
        a[_] = null;
      }), $n(), s = a[l], s ? s.p(c, u) : (s = a[l] = r[l](c), s.c()), me(s, 1), s.m(e, null));
    },
    i(c) {
      o || (me(s), o = !0);
    },
    o(c) {
      pe(s), o = !1;
    },
    d(c) {
      c && Re(e), i[19](null), a[l].d();
    }
  };
}
function Cs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function m1(i, e, t) {
  var n = this && this.__awaiter || function(R, U, W, P) {
    function ge(re) {
      return re instanceof W ? re : new W(function(fe) {
        fe(re);
      });
    }
    return new (W || (W = Promise))(function(re, fe) {
      function T(X) {
        try {
          M(P.next(X));
        } catch (J) {
          fe(J);
        }
      }
      function Ne(X) {
        try {
          M(P.throw(X));
        } catch (J) {
          fe(J);
        }
      }
      function M(X) {
        X.done ? re(X.value) : ge(X.value).then(T, Ne);
      }
      M((P = P.apply(R, U || [])).next());
    });
  };
  let l, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: b } = e, { upload: g } = e;
  const p = l1();
  s1(() => r = document.createElement("canvas"));
  const w = (R) => n(void 0, void 0, void 0, function* () {
    const W = R.target.value;
    yield Eo(d, l, W).then((P) => n(void 0, void 0, void 0, function* () {
      v = P, t(7, o = s.find((ge) => ge.deviceId === W) || null), t(10, A = !1);
    }));
  });
  function h() {
    return n(this, void 0, void 0, function* () {
      try {
        Eo(d, l).then((R) => n(this, void 0, void 0, function* () {
          t(9, z = !0), t(6, s = yield Vh()), v = R;
        })).then(() => Zh(s)).then((R) => {
          t(6, s = R);
          const U = v.getTracks().map((W) => {
            var P;
            return (P = W.getSettings()) === null || P === void 0 ? void 0 : P.deviceId;
          })[0];
          t(7, o = U && R.find((W) => W.deviceId === U) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && p("error", b("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          p("error", b("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function m() {
    var R = r.getContext("2d");
    (!a || a && C) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, R.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), _ && (R.scale(-1, 1), R.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (U) => {
        p(a ? "stream" : "capture", U);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, S = [], v, k, y;
  function D() {
    if (C) {
      y.stop();
      let R = new Blob(S, { type: k }), U = new FileReader();
      U.onload = function(W) {
        return n(this, void 0, void 0, function* () {
          var P;
          if (W.target) {
            let ge = new File([R], "sample." + k.substring(6));
            const re = yield er([ge]);
            let fe = ((P = yield g(re, c)) === null || P === void 0 ? void 0 : P.filter(Boolean))[0];
            p("capture", fe), p("stop_recording");
          }
        });
      }, U.readAsDataURL(R);
    } else {
      p("start_recording"), S = [];
      let R = ["video/webm", "video/mp4"];
      for (let U of R)
        if (MediaRecorder.isTypeSupported(U)) {
          k = U;
          break;
        }
      if (k === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      y = new MediaRecorder(v, { mimeType: k }), y.addEventListener("dataavailable", function(U) {
        S.push(U.data);
      }), y.start(200);
    }
    t(8, C = !C);
  }
  let z = !1;
  function L() {
    u === "image" && a && t(8, C = !C), u === "image" ? m() : D(), !C && v && (v.getTracks().forEach((R) => R.stop()), t(5, l.srcObject = null, l), t(9, z = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !f && m();
    },
    500
  );
  let A = !1;
  function j(R) {
    R.preventDefault(), R.stopPropagation(), t(10, A = !1);
  }
  function O(R) {
    Qh[R ? "unshift" : "push"](() => {
      l = R, t(5, l);
    });
  }
  const Q = async () => h(), K = () => t(10, A = !0), V = () => t(10, A = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, f = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, _ = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, b = R.i18n), "upload" in R && t(18, g = R.upload);
  }, [
    a,
    u,
    _,
    b,
    Cs,
    l,
    s,
    o,
    C,
    z,
    A,
    w,
    h,
    L,
    j,
    f,
    c,
    d,
    g,
    O,
    Q,
    K,
    V
  ];
}
class g1 extends Gh {
  constructor(e) {
    super(), e1(
      this,
      e,
      m1,
      h1,
      n1,
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
    return Cs;
  }
}
const {
  SvelteComponent: b1,
  append: qt,
  attr: I,
  detach: w1,
  init: p1,
  insert: v1,
  noop: jl,
  safe_not_equal: k1,
  set_style: Bt,
  svg_element: dt
} = window.__gradio__svelte__internal;
function y1(i) {
  let e, t, n, l, s, o, r, a, f;
  return {
    c() {
      e = dt("svg"), t = dt("rect"), n = dt("rect"), l = dt("rect"), s = dt("rect"), o = dt("line"), r = dt("line"), a = dt("line"), f = dt("line"), I(t, "x", "2"), I(t, "y", "2"), I(t, "width", "5"), I(t, "height", "5"), I(t, "rx", "1"), I(t, "ry", "1"), I(t, "stroke-width", "2"), I(t, "fill", "none"), I(n, "x", "17"), I(n, "y", "2"), I(n, "width", "5"), I(n, "height", "5"), I(n, "rx", "1"), I(n, "ry", "1"), I(n, "stroke-width", "2"), I(n, "fill", "none"), I(l, "x", "2"), I(l, "y", "17"), I(l, "width", "5"), I(l, "height", "5"), I(l, "rx", "1"), I(l, "ry", "1"), I(l, "stroke-width", "2"), I(l, "fill", "none"), I(s, "x", "17"), I(s, "y", "17"), I(s, "width", "5"), I(s, "height", "5"), I(s, "rx", "1"), I(s, "ry", "1"), I(s, "stroke-width", "2"), I(s, "fill", "none"), I(o, "x1", "7.5"), I(o, "y1", "4.5"), I(o, "x2", "16"), I(o, "y2", "4.5"), Bt(o, "stroke-width", "2px"), I(r, "x1", "7.5"), I(r, "y1", "19.5"), I(r, "x2", "16"), I(r, "y2", "19.5"), Bt(r, "stroke-width", "2px"), I(a, "x1", "4.5"), I(a, "y1", "8"), I(a, "x2", "4.5"), I(a, "y2", "16"), Bt(a, "stroke-width", "2px"), I(f, "x1", "19.5"), I(f, "y1", "8"), I(f, "x2", "19.5"), I(f, "y2", "16"), Bt(f, "stroke-width", "2px"), I(e, "width", "100%"), I(e, "height", "100%"), I(e, "viewBox", "0 0 24 24"), I(e, "version", "1.1"), I(e, "xmlns", "http://www.w3.org/2000/svg"), I(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), I(e, "xml:space", "preserve"), I(e, "stroke", "currentColor"), Bt(e, "fill-rule", "evenodd"), Bt(e, "clip-rule", "evenodd"), Bt(e, "stroke-linecap", "round"), Bt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      v1(c, e, u), qt(e, t), qt(e, n), qt(e, l), qt(e, s), qt(e, o), qt(e, r), qt(e, a), qt(e, f);
    },
    p: jl,
    i: jl,
    o: jl,
    d(c) {
      c && w1(e);
    }
  };
}
class C1 extends b1 {
  constructor(e) {
    super(), p1(this, e, null, y1, k1, {});
  }
}
const {
  SvelteComponent: S1,
  append: z1,
  attr: xe,
  detach: q1,
  init: B1,
  insert: E1,
  noop: Ul,
  safe_not_equal: M1,
  set_style: Ci,
  svg_element: Lo
} = window.__gradio__svelte__internal;
function D1(i) {
  let e, t;
  return {
    c() {
      e = Lo("svg"), t = Lo("path"), xe(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), xe(t, "fill", "none"), xe(t, "stroke-width", "2"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), Ci(e, "fill-rule", "evenodd"), Ci(e, "clip-rule", "evenodd"), Ci(e, "stroke-linecap", "round"), Ci(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      E1(n, e, l), z1(e, t);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(n) {
      n && q1(e);
    }
  };
}
class R1 extends S1 {
  constructor(e) {
    super(), B1(this, e, null, D1, M1, {});
  }
}
const {
  SvelteComponent: W1,
  append: A1,
  attr: $e,
  detach: L1,
  init: T1,
  insert: I1,
  noop: Ol,
  safe_not_equal: X1,
  set_style: Si,
  svg_element: To
} = window.__gradio__svelte__internal;
function Y1(i) {
  let e, t;
  return {
    c() {
      e = To("svg"), t = To("path"), $e(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), $e(t, "fill", "none"), $e(t, "stroke-width", "2"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "version", "1.1"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $e(e, "xml:space", "preserve"), $e(e, "stroke", "currentColor"), Si(e, "fill-rule", "evenodd"), Si(e, "clip-rule", "evenodd"), Si(e, "stroke-linecap", "round"), Si(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      I1(n, e, l), A1(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && L1(e);
    }
  };
}
class H1 extends W1 {
  constructor(e) {
    super(), T1(this, e, null, Y1, X1, {});
  }
}
const {
  SvelteComponent: F1,
  append: Io,
  attr: Nl,
  bubble: Xo,
  create_component: j1,
  destroy_component: U1,
  detach: dr,
  element: Yo,
  init: O1,
  insert: hr,
  listen: Vl,
  mount_component: N1,
  run_all: V1,
  safe_not_equal: P1,
  set_data: Z1,
  set_input_value: Ho,
  space: G1,
  text: K1,
  transition_in: J1,
  transition_out: Q1
} = window.__gradio__svelte__internal, { createEventDispatcher: x1, afterUpdate: $1 } = window.__gradio__svelte__internal;
function e0(i) {
  let e;
  return {
    c() {
      e = K1(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      hr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Z1(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && dr(e);
    }
  };
}
function t0(i) {
  let e, t, n, l, s, o, r;
  return t = new ka({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [e0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Yo("label"), j1(t.$$.fragment), n = G1(), l = Yo("input"), Nl(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Nl(l, "class", "svelte-16l8u73"), Nl(e, "class", "block");
    },
    m(a, f) {
      hr(a, e, f), N1(t, e, null), Io(e, n), Io(e, l), Ho(
        l,
        /*value*/
        i[0]
      ), s = !0, o || (r = [
        Vl(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Vl(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Vl(
          l,
          "blur",
          /*blur_handler*/
          i[7]
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
      8) && (l.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && Ho(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (J1(t.$$.fragment, a), s = !0);
    },
    o(a) {
      Q1(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && dr(e), U1(t), o = !1, V1(r);
    }
  };
}
function n0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = x1();
  function c() {
    f("change", n), l || f("input");
  }
  $1(() => {
    t(5, l = !1);
  });
  function u(b) {
    Xo.call(this, i, b);
  }
  function _(b) {
    Xo.call(this, i, b);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (b) => {
    "value" in b && t(0, n = b.value), "value_is_output" in b && t(5, l = b.value_is_output), "label" in b && t(1, s = b.label), "info" in b && t(2, o = b.info), "disabled" in b && t(3, r = b.disabled), "show_label" in b && t(4, a = b.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    s,
    o,
    r,
    a,
    l,
    u,
    _,
    d
  ];
}
class i0 extends F1 {
  constructor(e) {
    super(), O1(this, e, n0, t0, P1, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
var mr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, Hn = (i, e, t) => (mr(i, e, "read from private field"), t ? t.call(i) : e.get(i)), l0 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, s0 = (i, e, t, n) => (mr(i, e, "write to private field"), e.set(i, t), t), Dt;
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
class Rg extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Hn(this, Dt) + t; ; ) {
          const l = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (l === -1 || l - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (l === -1)
            break;
          const o = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, o)), t = t.slice(l + 1);
        }
        s0(this, Dt, t);
      },
      flush: (t) => {
        if (Hn(this, Dt) === "")
          return;
        const n = e.allowCR && Hn(this, Dt).endsWith("\r") ? Hn(this, Dt).slice(0, -1) : Hn(this, Dt);
        t.enqueue(n);
      }
    }), l0(this, Dt, "");
  }
}
Dt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: o0,
  append: gr,
  attr: ee,
  bubble: a0,
  check_outros: r0,
  create_slot: br,
  detach: ri,
  element: rl,
  empty: f0,
  get_all_dirty_from_scope: wr,
  get_slot_changes: pr,
  group_outros: c0,
  init: u0,
  insert: fi,
  listen: _0,
  safe_not_equal: d0,
  set_style: Me,
  space: vr,
  src_url_equal: Zi,
  toggle_class: Bn,
  transition_in: Gi,
  transition_out: Ki,
  update_slot_base: kr
} = window.__gradio__svelte__internal;
function h0(i) {
  let e, t, n, l, s, o, r = (
    /*icon*/
    i[7] && Fo(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), f = br(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = rl("button"), r && r.c(), t = vr(), f && f.c(), ee(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ee(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Bn(e, "hidden", !/*visible*/
      i[2]), Me(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Me(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      fi(c, e, u), r && r.m(e, null), gr(e, t), f && f.m(e, null), l = !0, s || (o = _0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = Fo(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!l || u & /*$$scope*/
      2048) && kr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? pr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : wr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ee(e, "class", n), (!l || u & /*elem_id*/
      1) && ee(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && Bn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (Gi(f, c), l = !0);
    },
    o(c) {
      Ki(f, c), l = !1;
    },
    d(c) {
      c && ri(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function m0(i) {
  let e, t, n, l, s = (
    /*icon*/
    i[7] && jo(i)
  );
  const o = (
    /*#slots*/
    i[12].default
  ), r = br(
    o,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = rl("a"), s && s.c(), t = vr(), r && r.c(), ee(
        e,
        "href",
        /*link*/
        i[6]
      ), ee(e, "rel", "noopener noreferrer"), ee(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ee(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ee(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Bn(e, "hidden", !/*visible*/
      i[2]), Bn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Me(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Me(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Me(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, f) {
      fi(a, e, f), s && s.m(e, null), gr(e, t), r && r.m(e, null), l = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = jo(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!l || f & /*$$scope*/
      2048) && kr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        l ? pr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : wr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || f & /*link*/
      64) && ee(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || f & /*disabled*/
      256) && ee(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ee(e, "class", n), (!l || f & /*elem_id*/
      1) && ee(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Bn(e, "hidden", !/*visible*/
      a[2]), (!l || f & /*size, variant, elem_classes, disabled*/
      282) && Bn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Me(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (Gi(r, a), l = !0);
    },
    o(a) {
      Ki(r, a), l = !1;
    },
    d(a) {
      a && ri(e), s && s.d(), r && r.d(a);
    }
  };
}
function Fo(i) {
  let e, t, n;
  return {
    c() {
      e = rl("img"), ee(e, "class", "button-icon svelte-8huxfn"), Zi(e.src, t = /*icon*/
      i[7].url) || ee(e, "src", t), ee(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      fi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !Zi(e.src, t = /*icon*/
      l[7].url) && ee(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ee(e, "alt", n);
    },
    d(l) {
      l && ri(e);
    }
  };
}
function jo(i) {
  let e, t, n;
  return {
    c() {
      e = rl("img"), ee(e, "class", "button-icon svelte-8huxfn"), Zi(e.src, t = /*icon*/
      i[7].url) || ee(e, "src", t), ee(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, s) {
      fi(l, e, s);
    },
    p(l, s) {
      s & /*icon*/
      128 && !Zi(e.src, t = /*icon*/
      l[7].url) && ee(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ee(e, "alt", n);
    },
    d(l) {
      l && ri(e);
    }
  };
}
function g0(i) {
  let e, t, n, l;
  const s = [m0, h0], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = f0();
    },
    m(a, f) {
      o[e].m(a, f), fi(a, n, f), l = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (c0(), Ki(o[c], 1, 1, () => {
        o[c] = null;
      }), r0(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Gi(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Gi(t), l = !0);
    },
    o(a) {
      Ki(t), l = !1;
    },
    d(a) {
      a && ri(n), o[e].d(a);
    }
  };
}
function b0(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e;
  function p(w) {
    a0.call(this, i, w);
  }
  return i.$$set = (w) => {
    "elem_id" in w && t(0, s = w.elem_id), "elem_classes" in w && t(1, o = w.elem_classes), "visible" in w && t(2, r = w.visible), "variant" in w && t(3, a = w.variant), "size" in w && t(4, f = w.size), "value" in w && t(5, c = w.value), "link" in w && t(6, u = w.link), "icon" in w && t(7, _ = w.icon), "disabled" in w && t(8, d = w.disabled), "scale" in w && t(9, b = w.scale), "min_width" in w && t(10, g = w.min_width), "$$scope" in w && t(11, l = w.$$scope);
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
    b,
    g,
    l,
    n,
    p
  ];
}
class cs extends o0 {
  constructor(e) {
    super(), u0(this, e, b0, g0, d0, {
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
  SvelteComponent: w0,
  add_render_callback: yr,
  append: zi,
  attr: Ie,
  binding_callbacks: Uo,
  check_outros: p0,
  create_bidirectional_transition: Oo,
  destroy_each: v0,
  detach: ti,
  element: Ji,
  empty: k0,
  ensure_array_like: No,
  group_outros: y0,
  init: C0,
  insert: ni,
  listen: us,
  prevent_default: S0,
  run_all: z0,
  safe_not_equal: q0,
  set_data: B0,
  set_style: vn,
  space: _s,
  text: E0,
  toggle_class: st,
  transition_in: Pl,
  transition_out: Vo
} = window.__gradio__svelte__internal, { createEventDispatcher: M0 } = window.__gradio__svelte__internal;
function Po(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Zo(i) {
  let e, t, n, l, s, o = No(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = Go(Po(i, o, a));
  return {
    c() {
      e = Ji("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ie(e, "class", "options svelte-yuohum"), Ie(e, "role", "listbox"), vn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), vn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), vn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, f) {
      ni(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (s = us(e, "mousedown", S0(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = No(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = Po(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = Go(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && vn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && vn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && vn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && yr(() => {
        n && (t || (t = Oo(e, $s, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Oo(e, $s, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && ti(e), v0(r, a), i[22](null), a && t && t.end(), l = !1, s();
    }
  };
}
function Go(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = Ji("li"), t = Ji("span"), t.textContent = "✓", n = _s(), s = E0(l), o = _s(), Ie(t, "class", "inner-item svelte-yuohum"), st(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ie(e, "class", "item svelte-yuohum"), Ie(e, "data-index", r = /*index*/
      i[26]), Ie(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ie(e, "data-testid", "dropdown-option"), Ie(e, "role", "option"), Ie(e, "aria-selected", f = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), st(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), st(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), st(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), st(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      ni(c, e, u), zi(e, t), zi(e, n), zi(e, s), zi(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && st(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && B0(s, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ie(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ie(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ie(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && st(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && st(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && st(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && st(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && ti(e);
    }
  };
}
function D0(i) {
  let e, t, n, l, s;
  yr(
    /*onwindowresize*/
    i[19]
  );
  let o = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Zo(i)
  );
  return {
    c() {
      e = Ji("div"), t = _s(), o && o.c(), n = k0(), Ie(e, "class", "reference");
    },
    m(r, a) {
      ni(r, e, a), i[20](e), ni(r, t, a), o && o.m(r, a), ni(r, n, a), l || (s = [
        us(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        us(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && Pl(o, 1)) : (o = Zo(r), o.c(), Pl(o, 1), o.m(n.parentNode, n)) : o && (y0(), Vo(o, 1, 1, () => {
        o = null;
      }), p0());
    },
    i(r) {
      Pl(o);
    },
    o(r) {
      Vo(o);
    },
    d(r) {
      r && (ti(e), ti(t), ti(n)), i[20](null), o && o.d(r), l = !1, z0(s);
    }
  };
}
function R0(i, e, t) {
  var n, l;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, b, g, p, w, h, m;
  function C() {
    const { top: A, bottom: j } = g.getBoundingClientRect();
    t(16, u = A), t(17, _ = m - j);
  }
  let S = null;
  function v() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        C(), S = null;
      },
      10
    ));
  }
  const k = M0();
  function y() {
    t(11, m = window.innerHeight);
  }
  function D(A) {
    Uo[A ? "unshift" : "push"](() => {
      g = A, t(6, g);
    });
  }
  const z = (A) => k("change", A);
  function L(A) {
    Uo[A ? "unshift" : "push"](() => {
      p = A, t(7, p);
    });
  }
  return i.$$set = (A) => {
    "choices" in A && t(0, s = A.choices), "filtered_indices" in A && t(1, o = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && g) {
        if (p && f.length > 0) {
          let j = p.querySelectorAll("li");
          for (const O of Array.from(j))
            if (O.getAttribute("data-index") === f[0].toString()) {
              t(14, n = p == null ? void 0 : p.scrollTo) === null || n === void 0 || n.call(p, 0, O.offsetTop);
              break;
            }
        }
        C();
        const A = t(15, l = g.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, b = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, h = _), t(9, w = null)) : (t(9, w = `${_ + d}px`), t(10, h = u - d));
    }
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    g,
    p,
    b,
    w,
    h,
    m,
    v,
    k,
    n,
    l,
    u,
    _,
    d,
    y,
    D,
    z,
    L
  ];
}
class W0 extends w0 {
  constructor(e) {
    super(), C0(this, e, R0, D0, q0, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function A0(i, e) {
  return (i % e + e) % e;
}
function Ko(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function L0(i, e, t) {
  i("change", e), t || i("input");
}
function T0(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[A0(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: I0,
  append: Ut,
  attr: Te,
  binding_callbacks: X0,
  check_outros: Y0,
  create_component: ds,
  destroy_component: hs,
  detach: Ss,
  element: Cn,
  group_outros: H0,
  init: F0,
  insert: zs,
  listen: Fn,
  mount_component: ms,
  run_all: j0,
  safe_not_equal: U0,
  set_data: O0,
  set_input_value: Jo,
  space: Zl,
  text: N0,
  toggle_class: kn,
  transition_in: Sn,
  transition_out: Zn
} = window.__gradio__svelte__internal, { onMount: V0 } = window.__gradio__svelte__internal, { createEventDispatcher: P0, afterUpdate: Z0 } = window.__gradio__svelte__internal;
function G0(i) {
  let e;
  return {
    c() {
      e = N0(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      zs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && O0(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ss(e);
    }
  };
}
function Qo(i) {
  let e, t, n;
  return t = new gs({}), {
    c() {
      e = Cn("div"), ds(t.$$.fragment), Te(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, s) {
      zs(l, e, s), ms(t, e, null), n = !0;
    },
    i(l) {
      n || (Sn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Zn(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ss(e), hs(t);
    }
  };
}
function K0(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, b;
  t = new ka({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [G0] },
      $$scope: { ctx: i }
    }
  });
  let g = !/*disabled*/
  i[3] && Qo();
  return u = new W0({
    props: {
      show_options: (
        /*show_options*/
        i[12]
      ),
      choices: (
        /*choices*/
        i[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        i[10]
      ),
      disabled: (
        /*disabled*/
        i[3]
      ),
      selected_indices: (
        /*selected_index*/
        i[11] === null ? [] : [
          /*selected_index*/
          i[11]
        ]
      ),
      active_index: (
        /*active_index*/
        i[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Cn("div"), ds(t.$$.fragment), n = Zl(), l = Cn("div"), s = Cn("div"), o = Cn("div"), r = Cn("input"), f = Zl(), g && g.c(), c = Zl(), ds(u.$$.fragment), Te(r, "role", "listbox"), Te(r, "aria-controls", "dropdown-options"), Te(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Te(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Te(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Te(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], kn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Te(o, "class", "secondary-wrap svelte-1m1zvyj"), Te(s, "class", "wrap-inner svelte-1m1zvyj"), kn(
        s,
        "show_options",
        /*show_options*/
        i[12]
      ), Te(l, "class", "wrap svelte-1m1zvyj"), Te(e, "class", "svelte-1m1zvyj"), kn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(p, w) {
      zs(p, e, w), ms(t, e, null), Ut(e, n), Ut(e, l), Ut(l, s), Ut(s, o), Ut(o, r), Jo(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), Ut(o, f), g && g.m(o, null), Ut(l, c), ms(u, l, null), _ = !0, d || (b = [
        Fn(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        Fn(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        Fn(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        Fn(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        Fn(
          r,
          "focus",
          /*handle_focus*/
          i[17]
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
      p[9] && Jo(
        r,
        /*input_text*/
        p[9]
      ), (!_ || w[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && kn(r, "subdued", !/*choices_names*/
      p[13].includes(
        /*input_text*/
        p[9]
      ) && !/*allow_custom_value*/
      p[6]), /*disabled*/
      p[3] ? g && (H0(), Zn(g, 1, 1, () => {
        g = null;
      }), Y0()) : g ? w[0] & /*disabled*/
      8 && Sn(g, 1) : (g = Qo(), g.c(), Sn(g, 1), g.m(o, null)), (!_ || w[0] & /*show_options*/
      4096) && kn(
        s,
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
      p[14]), u.$set(m), (!_ || w[0] & /*container*/
      32) && kn(
        e,
        "container",
        /*container*/
        p[5]
      );
    },
    i(p) {
      _ || (Sn(t.$$.fragment, p), Sn(g), Sn(u.$$.fragment, p), _ = !0);
    },
    o(p) {
      Zn(t.$$.fragment, p), Zn(g), Zn(u.$$.fragment, p), _ = !1;
    },
    d(p) {
      p && Ss(e), hs(t), i[29](null), g && g.d(), hs(u), d = !1, j0(b);
    }
  };
}
function J0(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: b = !0 } = e, g, p = !1, w, h, m = "", C = "", S = !1, v = [], k = null, y = null, D;
  const z = P0();
  s ? (D = a.map((W) => W[1]).indexOf(s), y = D, y === -1 ? (o = s, y = null) : ([m, o] = a[y], C = m), A()) : a.length > 0 && (D = 0, y = 0, [m, s] = a[y], o = s, C = m);
  function L() {
    t(13, w = a.map((W) => W[0])), t(24, h = a.map((W) => W[1]));
  }
  function A() {
    L(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, m = ""), t(11, y = null)) : h.includes(s) ? (t(9, m = w[h.indexOf(s)]), t(11, y = h.indexOf(s))) : d ? (t(9, m = s), t(11, y = null)) : (t(9, m = ""), t(11, y = null)), t(27, D = y);
  }
  function j(W) {
    if (t(11, y = parseInt(W.detail.target.dataset.index)), isNaN(y)) {
      t(11, y = null);
      return;
    }
    t(12, p = !1), t(14, k = null), g.blur();
  }
  function O(W) {
    t(10, v = a.map((P, ge) => ge)), t(12, p = !0), z("focus");
  }
  function Q() {
    d ? t(20, s = m) : t(9, m = w[h.indexOf(s)]), t(12, p = !1), t(14, k = null), z("blur");
  }
  function K(W) {
    t(12, [p, k] = T0(W, k, v), p, (t(14, k), t(2, a), t(23, f), t(6, d), t(9, m), t(10, v), t(8, g), t(25, C), t(11, y), t(27, D), t(26, S), t(24, h))), W.key === "Enter" && (k !== null ? (t(11, y = k), t(12, p = !1), g.blur(), t(14, k = null)) : w.includes(m) ? (t(11, y = w.indexOf(m)), t(12, p = !1), t(14, k = null), g.blur()) : d && (t(20, s = m), t(11, y = null), t(12, p = !1), t(14, k = null), g.blur()), z("enter", s));
  }
  Z0(() => {
    t(21, r = !1), t(26, S = !0);
  }), V0(() => {
    g.focus();
  });
  function V() {
    m = this.value, t(9, m), t(11, y), t(27, D), t(26, S), t(2, a), t(24, h);
  }
  function R(W) {
    X0[W ? "unshift" : "push"](() => {
      g = W, t(8, g);
    });
  }
  const U = (W) => z("key_up", { key: W.key, input_value: m });
  return i.$$set = (W) => {
    "label" in W && t(0, n = W.label), "info" in W && t(1, l = W.info), "value" in W && t(20, s = W.value), "value_is_output" in W && t(21, r = W.value_is_output), "choices" in W && t(2, a = W.choices), "disabled" in W && t(3, c = W.disabled), "show_label" in W && t(4, u = W.show_label), "container" in W && t(5, _ = W.container), "allow_custom_value" in W && t(6, d = W.allow_custom_value), "filterable" in W && t(7, b = W.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && y !== D && y !== null && S && (t(9, [m, s] = a[y], m, (t(20, s), t(11, y), t(27, D), t(26, S), t(2, a), t(24, h))), t(27, D = y), z("select", {
      index: y,
      value: h[y],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), L0(z, s, r), t(22, o = s)), i.$$.dirty[0] & /*choices*/
    4 && L(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, v = Ko(a, m)), !d && v.length > 0 && t(14, k = v[0]), g == document.activeElement && t(12, p = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && m !== C && (t(10, v = Ko(a, m)), t(25, C = m), !d && v.length > 0 && t(14, k = v[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    _,
    d,
    b,
    g,
    m,
    v,
    y,
    p,
    w,
    k,
    z,
    j,
    O,
    Q,
    K,
    s,
    r,
    o,
    f,
    h,
    C,
    S,
    D,
    V,
    R,
    U
  ];
}
class Q0 extends I0 {
  constructor(e) {
    super(), F0(
      this,
      e,
      J0,
      K0,
      U0,
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
  SvelteComponent: x0,
  append: ot,
  attr: qi,
  check_outros: $0,
  create_component: Gn,
  destroy_component: Kn,
  detach: ci,
  element: Rt,
  group_outros: em,
  init: tm,
  insert: ui,
  mount_component: Jn,
  safe_not_equal: nm,
  set_style: Qn,
  space: Bi,
  text: qs,
  transition_in: Wt,
  transition_out: Vt
} = window.__gradio__svelte__internal, { createEventDispatcher: im } = window.__gradio__svelte__internal, { onMount: lm, onDestroy: sm } = window.__gradio__svelte__internal;
function om(i) {
  let e;
  return {
    c() {
      e = qs("Cancel");
    },
    m(t, n) {
      ui(t, e, n);
    },
    d(t) {
      t && ci(e);
    }
  };
}
function xo(i) {
  let e, t, n;
  return t = new cs({
    props: {
      variant: "stop",
      $$slots: { default: [am] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[12]
  ), {
    c() {
      e = Rt("div"), Gn(t.$$.fragment), Qn(e, "margin-right", "8px");
    },
    m(l, s) {
      ui(l, e, s), Jn(t, e, null), n = !0;
    },
    p(l, s) {
      const o = {};
      s & /*$$scope*/
      65536 && (o.$$scope = { dirty: s, ctx: l }), t.$set(o);
    },
    i(l) {
      n || (Wt(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Vt(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ci(e), Kn(t);
    }
  };
}
function am(i) {
  let e;
  return {
    c() {
      e = qs("Remove");
    },
    m(t, n) {
      ui(t, e, n);
    },
    d(t) {
      t && ci(e);
    }
  };
}
function rm(i) {
  let e;
  return {
    c() {
      e = qs("OK");
    },
    m(t, n) {
      ui(t, e, n);
    },
    d(t) {
      t && ci(e);
    }
  };
}
function fm(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, b, g, p;
  s = new Q0({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[2]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    i[5]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    i[7]
  ), a = new i0({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), a.$on(
    "change",
    /*onColorChange*/
    i[6]
  ), u = new cs({
    props: {
      $$slots: { default: [om] },
      $$scope: { ctx: i }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    i[11]
  );
  let w = (
    /*showRemove*/
    i[3] && xo(i)
  );
  return g = new cs({
    props: {
      variant: "primary",
      $$slots: { default: [rm] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[13]
  ), {
    c() {
      e = Rt("div"), t = Rt("div"), n = Rt("span"), l = Rt("div"), Gn(s.$$.fragment), o = Bi(), r = Rt("div"), Gn(a.$$.fragment), f = Bi(), c = Rt("div"), Gn(u.$$.fragment), _ = Bi(), w && w.c(), d = Bi(), b = Rt("div"), Gn(g.$$.fragment), Qn(l, "margin-right", "10px"), Qn(r, "margin-right", "40px"), Qn(r, "margin-bottom", "8px"), Qn(c, "margin-right", "8px"), qi(n, "class", "model-content svelte-hkn2q1"), qi(t, "class", "modal-container svelte-hkn2q1"), qi(e, "class", "modal svelte-hkn2q1"), qi(e, "id", "model-box-edit");
    },
    m(h, m) {
      ui(h, e, m), ot(e, t), ot(t, n), ot(n, l), Jn(s, l, null), ot(n, o), ot(n, r), Jn(a, r, null), ot(n, f), ot(n, c), Jn(u, c, null), ot(n, _), w && w.m(n, null), ot(n, d), ot(n, b), Jn(g, b, null), p = !0;
    },
    p(h, [m]) {
      const C = {};
      m & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      h[0]), m & /*choices*/
      4 && (C.choices = /*choices*/
      h[2]), s.$set(C);
      const S = {};
      m & /*currentColor*/
      2 && (S.value = /*currentColor*/
      h[1]), a.$set(S);
      const v = {};
      m & /*$$scope*/
      65536 && (v.$$scope = { dirty: m, ctx: h }), u.$set(v), /*showRemove*/
      h[3] ? w ? (w.p(h, m), m & /*showRemove*/
      8 && Wt(w, 1)) : (w = xo(h), w.c(), Wt(w, 1), w.m(n, d)) : w && (em(), Vt(w, 1, 1, () => {
        w = null;
      }), $0());
      const k = {};
      m & /*$$scope*/
      65536 && (k.$$scope = { dirty: m, ctx: h }), g.$set(k);
    },
    i(h) {
      p || (Wt(s.$$.fragment, h), Wt(a.$$.fragment, h), Wt(u.$$.fragment, h), Wt(w), Wt(g.$$.fragment, h), p = !0);
    },
    o(h) {
      Vt(s.$$.fragment, h), Vt(a.$$.fragment, h), Vt(u.$$.fragment, h), Vt(w), Vt(g.$$.fragment, h), p = !1;
    },
    d(h) {
      h && ci(e), Kn(s), Kn(a), Kn(u), w && w.d(), Kn(g);
    }
  };
}
function cm(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e;
  const c = im();
  function u(m) {
    c("change", {
      label: l,
      color: a,
      ret: m
      // -1: remove, 0: cancel, 1: change
    });
  }
  function _(m) {
    const { detail: C } = m;
    let S = C;
    Number.isInteger(S) ? (Array.isArray(o) && S < o.length && t(1, a = o[S]), Array.isArray(s) && S < s.length && t(0, l = s[S][0])) : t(0, l = S);
  }
  function d(m) {
    const { detail: C } = m;
    t(1, a = C);
  }
  function b(m) {
    _(m), u(1);
  }
  function g(m) {
    switch (m.key) {
      case "Enter":
        u(1);
        break;
    }
  }
  lm(() => {
    document.addEventListener("keydown", g), t(0, l = n), t(1, a = r);
  }), sm(() => {
    document.removeEventListener("keydown", g);
  });
  const p = () => u(0), w = () => u(-1), h = () => u(1);
  return i.$$set = (m) => {
    "label" in m && t(8, n = m.label), "currentLabel" in m && t(0, l = m.currentLabel), "choices" in m && t(2, s = m.choices), "choicesColors" in m && t(9, o = m.choicesColors), "color" in m && t(10, r = m.color), "currentColor" in m && t(1, a = m.currentColor), "showRemove" in m && t(3, f = m.showRemove);
  }, [
    l,
    a,
    s,
    f,
    u,
    _,
    d,
    b,
    n,
    o,
    r,
    p,
    w,
    h
  ];
}
class Cr extends x0 {
  constructor(e) {
    super(), tm(this, e, cm, fm, nm, {
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
const de = (i, e, t) => Math.min(Math.max(i, e), t);
function Gl(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, s] = t;
  return `rgba(${n}, ${l}, ${s}, ${e})`;
}
class Kl {
  constructor(e, t, n, l, s, o, r, a, f, c, u, _, d = "rgb(255, 255, 255)", b = 0.5, g = 25, p = 8, w = 2, h = 4, m = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (C) => {
      if (this.isDragging) {
        let S = (C.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, v = (C.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        S = de(S, -this._xmin, k - this._xmax), v = de(v, -this._ymin, y - this._ymax), this._xmin += S, this._ymin += v, this._xmax += S, this._ymax += v, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (C) => {
      if (this.isCreating) {
        let [S, v] = this.toBoxCoordinates(C.clientX, C.clientY);
        S = (S - this.offsetMouseX) / this.canvasWindow.scale, v = (v - this.offsetMouseY) / this.canvasWindow.scale, S > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = S, this.creatingAnchorX = "xmin") : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = S : S > this._xmin && S < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = S : S < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = S, this.creatingAnchorX = "xmax"), v > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = v, this.creatingAnchorY = "ymin") : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = v : v > this._ymin && v < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = v : v < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = v, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (C) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, v = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = de(this._xmin, 0, S - this.minSize), this._ymin = de(this._ymin, 0, v - this.minSize), this._xmax = de(this._xmax, this.minSize, S), this._ymax = de(this._ymax, this.minSize, v), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > S ? (this._xmin -= this._xmax - S, this._xmax = S) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > v ? (this._ymin -= this._ymax - v, this._ymax = v) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (C) => {
      if (this.isResizing) {
        const S = C.clientX, v = C.clientY, k = (S - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, y = (v - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, z = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += k, this._ymin += y, this._xmin = de(this._xmin, 0, this._xmax - this.minSize), this._ymin = de(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += k, this._ymin += y, this._xmax = de(this._xmax, this._xmin + this.minSize, D), this._ymin = de(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += k, this._ymax += y, this._xmax = de(this._xmax, this._xmin + this.minSize, D), this._ymax = de(this._ymax, this._ymin + this.minSize, z);
            break;
          case 3:
            this._xmin += k, this._ymax += y, this._xmin = de(this._xmin, 0, this._xmax - this.minSize), this._ymax = de(this._ymax, this._ymin + this.minSize, z);
            break;
          case 4:
            this._ymin += y, this._ymin = de(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += k, this._xmax = de(this._xmax, this._xmin + this.minSize, D);
            break;
          case 6:
            this._ymax += y, this._ymax = de(this._ymax, this._ymin + this.minSize, z);
            break;
          case 7:
            this._xmin += k, this._xmin = de(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.canvasXmin = l, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = r, this.scaleFactor = m, this.label = a, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = c, this._xmax = u, this._ymax = _, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p, this.thickness = w, this.selectedThickness = h, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = d, this.alpha = b, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Gl(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Gl(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, l, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, l, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = Gl(this.color, 1);
    for (const l of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        t,
        n,
        l.xmax - l.xmin,
        l.ymax - l.ymin
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
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
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
    const [t, n, l, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - s, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = s, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const Ot = [
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
], Ei = (i, e, t) => Math.min(Math.max(i, e), t);
class um {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (t) => {
      if (this.isDragging) {
        let n = t.clientX - this.startDragX - this.offsetX, l = t.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? n = Ei(n, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : n = Ei(n, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? l = Ei(l, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : l = Ei(l, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += n, this.offsetY += l, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: _m,
  append: mt,
  attr: Be,
  binding_callbacks: dm,
  bubble: $o,
  check_outros: Xi,
  create_component: en,
  destroy_component: tn,
  detach: Jt,
  element: At,
  empty: hm,
  group_outros: Yi,
  init: mm,
  insert: Qt,
  is_function: gm,
  listen: je,
  mount_component: nn,
  noop: bm,
  run_all: Sr,
  safe_not_equal: wm,
  space: ln,
  toggle_class: Mi,
  transition_in: ae,
  transition_out: ye
} = window.__gradio__svelte__internal, { onMount: pm, onDestroy: vm, createEventDispatcher: km } = window.__gradio__svelte__internal;
function ea(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, b, g, p;
  n = new C1({}), o = new R1({});
  let w = (
    /*showRemoveButton*/
    i[1] && ta(i)
  );
  return c = new t_({}), d = new Fu({}), {
    c() {
      e = At("span"), t = At("button"), en(n.$$.fragment), l = ln(), s = At("button"), en(o.$$.fragment), r = ln(), w && w.c(), a = ln(), f = At("button"), en(c.$$.fragment), u = ln(), _ = At("button"), en(d.$$.fragment), Be(t, "class", "icon svelte-3rql59"), Be(t, "aria-label", "Create box"), Mi(
        t,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[6].creation
      ), Be(s, "class", "icon svelte-3rql59"), Be(s, "aria-label", "Edit boxes"), Mi(
        s,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[6].drag
      ), Be(f, "class", "icon svelte-3rql59"), Be(f, "aria-label", "Rotate counterclockwise"), Be(_, "class", "icon svelte-3rql59"), Be(_, "aria-label", "Rotate clockwise"), Be(e, "class", "canvas-control svelte-3rql59");
    },
    m(h, m) {
      Qt(h, e, m), mt(e, t), nn(n, t, null), mt(e, l), mt(e, s), nn(o, s, null), mt(e, r), w && w.m(e, null), mt(e, a), mt(e, f), nn(c, f, null), mt(e, u), mt(e, _), nn(d, _, null), b = !0, g || (p = [
        je(
          t,
          "click",
          /*click_handler*/
          i[34]
        ),
        je(
          s,
          "click",
          /*click_handler_1*/
          i[35]
        ),
        je(
          f,
          "click",
          /*click_handler_3*/
          i[37]
        ),
        je(
          _,
          "click",
          /*click_handler_4*/
          i[38]
        )
      ], g = !0);
    },
    p(h, m) {
      (!b || m[0] & /*mode, Mode*/
      576) && Mi(
        t,
        "selected",
        /*mode*/
        h[9] === /*Mode*/
        h[6].creation
      ), (!b || m[0] & /*mode, Mode*/
      576) && Mi(
        s,
        "selected",
        /*mode*/
        h[9] === /*Mode*/
        h[6].drag
      ), /*showRemoveButton*/
      h[1] ? w ? (w.p(h, m), m[0] & /*showRemoveButton*/
      2 && ae(w, 1)) : (w = ta(h), w.c(), ae(w, 1), w.m(e, a)) : w && (Yi(), ye(w, 1, 1, () => {
        w = null;
      }), Xi());
    },
    i(h) {
      b || (ae(n.$$.fragment, h), ae(o.$$.fragment, h), ae(w), ae(c.$$.fragment, h), ae(d.$$.fragment, h), b = !0);
    },
    o(h) {
      ye(n.$$.fragment, h), ye(o.$$.fragment, h), ye(w), ye(c.$$.fragment, h), ye(d.$$.fragment, h), b = !1;
    },
    d(h) {
      h && Jt(e), tn(n), tn(o), w && w.d(), tn(c), tn(d), g = !1, Sr(p);
    }
  };
}
function ta(i) {
  let e, t, n, l, s;
  return t = new H1({}), {
    c() {
      e = At("button"), en(t.$$.fragment), Be(e, "class", "icon svelte-3rql59"), Be(e, "aria-label", "Remove boxes");
    },
    m(o, r) {
      Qt(o, e, r), nn(t, e, null), n = !0, l || (s = je(
        e,
        "click",
        /*click_handler_2*/
        i[36]
      ), l = !0);
    },
    p: bm,
    i(o) {
      n || (ae(t.$$.fragment, o), n = !0);
    },
    o(o) {
      ye(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Jt(e), tn(t), l = !1, s();
    }
  };
}
function na(i) {
  let e, t;
  return e = new Cr({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[8] >= 0 && /*selectedBox*/
        i[8] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[8] >= 0 && /*selectedBox*/
        i[8] < /*value*/
        i[0].boxes.length ? si(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[19]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[39]
  ), {
    c() {
      en(e.$$.fragment);
    },
    m(n, l) {
      nn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      257 && (s.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      257 && (s.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? si(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      tn(e, n);
    }
  };
}
function ia(i) {
  let e, t;
  return e = new Cr({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[8] >= 0 && /*selectedBox*/
        i[8] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[8]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[8] >= 0 && /*selectedBox*/
        i[8] < /*value*/
        i[0].boxes.length ? si(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[8]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[20]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[40]
  ), {
    c() {
      en(e.$$.fragment);
    },
    m(n, l) {
      nn(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      257 && (s.label = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      257 && (s.color = /*selectedBox*/
      n[8] >= 0 && /*selectedBox*/
      n[8] < /*value*/
      n[0].boxes.length ? si(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[8]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ye(e.$$.fragment, n), t = !1;
    },
    d(n) {
      tn(e, n);
    }
  };
}
function ym(i) {
  let e, t, n, l, s, o, r, a, f, c = (
    /*interactive*/
    i[2] && ea(i)
  ), u = (
    /*editModalVisible*/
    i[10] && na(i)
  ), _ = (
    /*newModalVisible*/
    i[11] && ia(i)
  );
  return {
    c() {
      e = At("div"), t = At("canvas"), n = ln(), c && c.c(), l = ln(), u && u.c(), s = ln(), _ && _.c(), o = hm(), Be(t, "class", "canvas-annotator svelte-3rql59"), Be(e, "class", "canvas-container svelte-3rql59"), Be(e, "tabindex", "-1");
    },
    m(d, b) {
      Qt(d, e, b), mt(e, t), i[33](t), Qt(d, n, b), c && c.m(d, b), Qt(d, l, b), u && u.m(d, b), Qt(d, s, b), _ && _.m(d, b), Qt(d, o, b), r = !0, a || (f = [
        je(
          t,
          "pointerdown",
          /*handlePointerDown*/
          i[12]
        ),
        je(
          t,
          "pointerup",
          /*handlePointerUp*/
          i[13]
        ),
        je(t, "pointermove", function() {
          gm(
            /*handlesCursor*/
            i[5] ? (
              /*handlePointerMove*/
              i[14]
            ) : null
          ) && /*handlesCursor*/
          (i[5] ? (
            /*handlePointerMove*/
            i[14]
          ) : null).apply(this, arguments);
        }),
        je(
          t,
          "dblclick",
          /*handleDoubleClick*/
          i[18]
        ),
        je(
          t,
          "wheel",
          /*handleMouseWheel*/
          i[15]
        ),
        je(
          e,
          "focusin",
          /*handleCanvasFocus*/
          i[23]
        ),
        je(
          e,
          "focusout",
          /*handleCanvasBlur*/
          i[24]
        )
      ], a = !0);
    },
    p(d, b) {
      i = d, /*interactive*/
      i[2] ? c ? (c.p(i, b), b[0] & /*interactive*/
      4 && ae(c, 1)) : (c = ea(i), c.c(), ae(c, 1), c.m(l.parentNode, l)) : c && (Yi(), ye(c, 1, 1, () => {
        c = null;
      }), Xi()), /*editModalVisible*/
      i[10] ? u ? (u.p(i, b), b[0] & /*editModalVisible*/
      1024 && ae(u, 1)) : (u = na(i), u.c(), ae(u, 1), u.m(s.parentNode, s)) : u && (Yi(), ye(u, 1, 1, () => {
        u = null;
      }), Xi()), /*newModalVisible*/
      i[11] ? _ ? (_.p(i, b), b[0] & /*newModalVisible*/
      2048 && ae(_, 1)) : (_ = ia(i), _.c(), ae(_, 1), _.m(o.parentNode, o)) : _ && (Yi(), ye(_, 1, 1, () => {
        _ = null;
      }), Xi());
    },
    i(d) {
      r || (ae(c), ae(u), ae(_), r = !0);
    },
    o(d) {
      ye(c), ye(u), ye(_), r = !1;
    },
    d(d) {
      d && (Jt(e), Jt(n), Jt(l), Jt(s), Jt(o)), i[33](null), c && c.d(d), u && u.d(d), _ && _.d(d), a = !1, Sr(f);
    }
  };
}
function Jl(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function si(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Cm(i, e, t) {
  var n;
  (function(q) {
    q[q.creation = 0] = "creation", q[q.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: b = !1 } = e, { singleBox: g = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: w = !0 } = e;
  p === null && (p = b);
  let h, m, C = null, S = -1, v = n.drag, k = new um(R);
  u !== null && u.boxes.length == 0 && (v = n.creation);
  let y = 0, D = 0, z = 0, L = 0, A = 1, j = 0, O = 0, Q = !1, K = !1;
  const V = km();
  function R() {
    if (m) {
      if (m.clearRect(0, 0, h.width, h.height), m.save(), m.translate(k.offsetX, k.offsetY), m.scale(k.scale, k.scale), C !== null) {
        switch (u.orientation) {
          case 0:
            m.drawImage(C, 0, 0, j, O);
            break;
          case 1:
            m.translate(j, 0), m.rotate(Math.PI / 2), m.drawImage(C, 0, 0, O, j);
            break;
          case 2:
            m.translate(j, O), m.rotate(Math.PI), m.drawImage(C, 0, 0, j, O);
            break;
          case 3:
            m.translate(0, O), m.rotate(-Math.PI / 2), m.drawImage(C, 0, 0, O, j);
            break;
        }
        m.restore();
      }
      for (const q of u.boxes.slice().reverse())
        q.render(m);
    }
  }
  function U(q) {
    t(8, S = q), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), q >= 0 && q < u.boxes.length && u.boxes[q].setSelected(!0), R();
  }
  function W(q) {
    s && (q.target instanceof Element && q.target.hasPointerCapture(q.pointerId) && q.target.releasePointerCapture(q.pointerId), v === n.creation ? Ne(q) : v === n.drag && P(q));
  }
  function P(q) {
    const Y = h.getBoundingClientRect(), x = q.clientX - Y.left, ue = q.clientY - Y.top;
    let _e = !1;
    for (const [se, Ze] of u.boxes.entries()) {
      const _i = Ze.indexOfPointInsideHandle(x, ue);
      if (_i >= 0) {
        _e = !0, U(se), Ze.startResize(_i, q);
        return;
      }
    }
    for (const [se, Ze] of u.boxes.entries())
      if (Ze.isPointInsideBox(x, ue)) {
        _e = !0, U(se), Ze.startDrag(q);
        return;
      }
    g || U(-1), _e || k.startDrag(q);
  }
  function ge(q) {
    V("change");
  }
  function re(q) {
    if (u === null || v !== n.drag)
      return;
    const Y = h.getBoundingClientRect(), x = q.clientX - Y.left, ue = q.clientY - Y.top;
    for (const [_e, se] of u.boxes.entries()) {
      const Ze = se.indexOfPointInsideHandle(x, ue);
      if (Ze >= 0) {
        t(7, h.style.cursor = se.resizeHandles[Ze].cursor, h);
        return;
      }
    }
    t(7, h.style.cursor = "default", h);
  }
  function fe(q) {
    if (s)
      switch (q.key) {
        case "Delete":
          Ce();
          break;
      }
  }
  function T(q) {
    q.preventDefault();
    const Y = 1 / (1 + q.deltaY / 1e3 * 0.5), x = parseFloat((k.scale * Y).toFixed(2)), ue = x < 1 ? 1 : x, _e = h.getBoundingClientRect(), se = q.clientX - _e.left, Ze = q.clientY - _e.top, _i = (se - k.offsetX) / k.scale, Dr = (Ze - k.offsetY) / k.scale;
    k.offsetX = se - _i * ue, k.offsetY = Ze - Dr * ue, k.scale = ue, R();
  }
  function Ne(q) {
    const Y = h.getBoundingClientRect(), x = (q.clientX - Y.left - k.offsetX) / A / k.scale, ue = (q.clientY - Y.top - k.offsetY) / A / k.scale;
    let _e;
    d.length > 0 ? _e = Jl(d[0]) : g ? u.boxes.length > 0 ? _e = u.boxes[0].color : _e = Ot[0] : _e = Ot[u.boxes.length % Ot.length];
    let se = new Kl(R, J, k, y, D, z, L, "", x, ue, x, ue, _e, o, r, a, f, c);
    se.startCreating(q, Y.left, Y.top), g ? t(0, u.boxes = [se], u) : t(0, u.boxes = [se, ...u.boxes], u), U(0), R(), V("change");
  }
  function M() {
    t(9, v = n.creation), t(7, h.style.cursor = "crosshair", h);
  }
  function X() {
    t(9, v = n.drag), t(7, h.style.cursor = "default", h);
  }
  function J() {
    S >= 0 && S < u.boxes.length && (u.boxes[S].getArea() < 1 ? Ce() : (b || t(11, K = !0), g && X()));
  }
  function B() {
    S >= 0 && S < u.boxes.length && !b && t(10, Q = !0);
  }
  function ce(q) {
    s && B();
  }
  function Ve(q) {
    t(10, Q = !1);
    const { detail: Y } = q;
    let x = Y.label, ue = Y.color, _e = Y.ret;
    if (S >= 0 && S < u.boxes.length) {
      let se = u.boxes[S];
      _e == 1 ? (se.label = x, se.color = Jl(ue), R(), V("change")) : _e == -1 && Ce();
    }
  }
  function nt(q) {
    t(11, K = !1);
    const { detail: Y } = q;
    let x = Y.label, ue = Y.color, _e = Y.ret;
    if (S >= 0 && S < u.boxes.length) {
      let se = u.boxes[S];
      _e == 1 ? (se.label = x, se.color = Jl(ue), R(), V("change")) : Ce();
    }
  }
  function Ce() {
    S >= 0 && S < u.boxes.length && (u.boxes.splice(S, 1), U(-1), g && M(), V("change"));
  }
  function ve(q) {
    t(0, u.orientation = ((u.orientation + q) % 4 + 4) % 4, u), k.orientation = u.orientation, ke();
    for (const Y of u.boxes)
      Y.onRotate(q);
    R();
  }
  function ke() {
    if (h) {
      if (A = 1, t(7, h.width = h.clientWidth, h), k.setRotatedImage(C), C !== null) {
        if (k.imageRotatedWidth > h.width)
          A = h.width / k.imageRotatedWidth, j = Math.round(k.imageRotatedWidth * A), O = Math.round(k.imageRotatedHeight * A), y = 0, D = 0, z = j, L = O, t(7, h.height = O, h);
        else {
          j = k.imageRotatedWidth, O = k.imageRotatedHeight;
          var q = (h.width - j) / 2;
          y = q, D = 0, z = q + j, L = O, t(7, h.height = O, h);
        }
        k.imageWidth = j, k.imageHeight = O;
      } else
        y = 0, D = 0, z = h.width, L = h.height, t(7, h.height = h.clientHeight, h);
      if (k.resize(h.width, h.height, y, D), z > 0 && L > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = y, Y.canvasYmin = D, Y.canvasXmax = z, Y.canvasYmax = L, Y.setScaleFactor(A);
      R(), V("change");
    }
  }
  const Pe = new ResizeObserver(ke);
  function Xt() {
    for (let q = 0; q < u.boxes.length; q++) {
      let Y = u.boxes[q];
      if (!(Y instanceof Kl)) {
        let x = "", ue = "";
        Y.hasOwnProperty("color") ? (x = Y.color, Array.isArray(x) && x.length === 3 && (x = `rgb(${x[0]}, ${x[1]}, ${x[2]})`)) : x = Ot[q % Ot.length], Y.hasOwnProperty("label") && (ue = Y.label), Y = new Kl(R, J, k, y, D, z, L, ue, Y.xmin, Y.ymin, Y.xmax, Y.ymax, x, o, r, a, f, c), t(0, u.boxes[q] = Y, u);
      }
    }
  }
  function E() {
    l !== null && (C === null || C.src != l) && (C = new Image(), C.src = l, C.onload = function() {
      ke(), R();
    });
  }
  pm(() => {
    if (Array.isArray(_) && _.length > 0 && (!Array.isArray(d) || d.length == 0))
      for (let q = 0; q < _.length; q++) {
        let Y = Ot[q % Ot.length];
        d.push(si(Y));
      }
    m = h.getContext("2d"), Pe.observe(h), S < 0 && u !== null && u.boxes.length > 0 && U(0), E(), ke(), R();
  });
  function yt() {
    document.addEventListener("keydown", fe);
  }
  function ct() {
    document.removeEventListener("keydown", fe);
  }
  vm(() => {
    document.removeEventListener("keydown", fe);
  });
  function dn(q) {
    dm[q ? "unshift" : "push"](() => {
      h = q, t(7, h);
    });
  }
  const fl = () => M(), Yt = () => X(), hn = () => Ce(), cl = () => ve(-1), ul = () => ve(1);
  function Tn(q) {
    $o.call(this, i, q);
  }
  function ut(q) {
    $o.call(this, i, q);
  }
  return i.$$set = (q) => {
    "imageUrl" in q && t(25, l = q.imageUrl), "interactive" in q && t(2, s = q.interactive), "boxAlpha" in q && t(26, o = q.boxAlpha), "boxMinSize" in q && t(27, r = q.boxMinSize), "handleSize" in q && t(28, a = q.handleSize), "boxThickness" in q && t(29, f = q.boxThickness), "boxSelectedThickness" in q && t(30, c = q.boxSelectedThickness), "value" in q && t(0, u = q.value), "choices" in q && t(3, _ = q.choices), "choicesColors" in q && t(4, d = q.choicesColors), "disableEditBoxes" in q && t(31, b = q.disableEditBoxes), "singleBox" in q && t(32, g = q.singleBox), "showRemoveButton" in q && t(1, p = q.showRemoveButton), "handlesCursor" in q && t(5, w = q.handlesCursor);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (E(), Xt(), ke(), R());
  }, [
    u,
    p,
    s,
    _,
    d,
    w,
    n,
    h,
    S,
    v,
    Q,
    K,
    W,
    ge,
    re,
    T,
    M,
    X,
    ce,
    Ve,
    nt,
    Ce,
    ve,
    yt,
    ct,
    l,
    o,
    r,
    a,
    f,
    c,
    b,
    g,
    dn,
    fl,
    Yt,
    hn,
    cl,
    ul,
    Tn,
    ut
  ];
}
class Sm extends _m {
  constructor(e) {
    super(), mm(
      this,
      e,
      Cm,
      ym,
      wm,
      {
        imageUrl: 25,
        interactive: 2,
        boxAlpha: 26,
        boxMinSize: 27,
        handleSize: 28,
        boxThickness: 29,
        boxSelectedThickness: 30,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 31,
        singleBox: 32,
        showRemoveButton: 1,
        handlesCursor: 5
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: zm,
  add_flush_callback: qm,
  bind: Bm,
  binding_callbacks: Em,
  create_component: Mm,
  destroy_component: Dm,
  init: Rm,
  mount_component: Wm,
  safe_not_equal: Am,
  transition_in: Lm,
  transition_out: Tm
} = window.__gradio__svelte__internal, { createEventDispatcher: Im } = window.__gradio__svelte__internal;
function Xm(i) {
  let e, t, n;
  function l(o) {
    i[17](o);
  }
  let s = {
    interactive: (
      /*interactive*/
      i[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      i[2]
    ),
    choices: (
      /*labelList*/
      i[3]
    ),
    choicesColors: (
      /*labelColors*/
      i[4]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    boxThickness: (
      /*boxThickness*/
      i[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[8]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[9]
    ),
    singleBox: (
      /*singleBox*/
      i[10]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[11]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[12]
    ),
    imageUrl: (
      /*resolved_src*/
      i[13]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (s.value = /*value*/
    i[0]), e = new Sm({ props: s }), Em.push(() => Bm(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[18]
    ), {
      c() {
        Mm(e.$$.fragment);
      },
      m(o, r) {
        Wm(e, o, r), n = !0;
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
        o[12]), r & /*resolved_src*/
        8192 && (a.imageUrl = /*resolved_src*/
        o[13]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        o[0], qm(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (Lm(e.$$.fragment, o), n = !0);
      },
      o(o) {
        Tm(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Dm(e, o);
      }
    }
  );
}
function Ym(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: _ } = e, { disableEditBoxes: d } = e, { singleBox: b } = e, { showRemoveButton: g } = e, { handlesCursor: p } = e, w, h;
  const m = Im();
  function C(v) {
    _ = v, t(0, _);
  }
  const S = () => m("change");
  return i.$$set = (v) => {
    "src" in v && t(15, n = v.src), "interactive" in v && t(1, l = v.interactive), "boxesAlpha" in v && t(2, s = v.boxesAlpha), "labelList" in v && t(3, o = v.labelList), "labelColors" in v && t(4, r = v.labelColors), "boxMinSize" in v && t(5, a = v.boxMinSize), "handleSize" in v && t(6, f = v.handleSize), "boxThickness" in v && t(7, c = v.boxThickness), "boxSelectedThickness" in v && t(8, u = v.boxSelectedThickness), "value" in v && t(0, _ = v.value), "disableEditBoxes" in v && t(9, d = v.disableEditBoxes), "singleBox" in v && t(10, b = v.singleBox), "showRemoveButton" in v && t(11, g = v.showRemoveButton), "handlesCursor" in v && t(12, p = v.handlesCursor);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    98304) {
      t(13, w = n), t(16, h = n);
      const v = n;
      Ad(v).then((k) => {
        h === v && t(13, w = k);
      });
    }
  }, [
    _,
    l,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    d,
    b,
    g,
    p,
    w,
    m,
    n,
    h,
    C,
    S
  ];
}
class Hm extends zm {
  constructor(e) {
    super(), Rm(this, e, Ym, Xm, Am, {
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
  SvelteComponent: Fm,
  add_flush_callback: Qi,
  append: yn,
  attr: xn,
  bind: xi,
  binding_callbacks: oi,
  bubble: jn,
  check_outros: Pt,
  create_component: bt,
  create_slot: jm,
  destroy_component: wt,
  detach: sn,
  element: ii,
  empty: Um,
  get_all_dirty_from_scope: Om,
  get_slot_changes: Nm,
  group_outros: Zt,
  init: Vm,
  insert: on,
  mount_component: pt,
  noop: Pm,
  safe_not_equal: Zm,
  space: Nt,
  toggle_class: sa,
  transition_in: G,
  transition_out: $,
  update_slot_base: Gm
} = window.__gradio__svelte__internal, { createEventDispatcher: Km, tick: Jm } = window.__gradio__svelte__internal;
function oa(i) {
  let e, t;
  return e = new Pd({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Qm] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, l) {
      pt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      524288 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
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
function Qm(i) {
  let e, t;
  return e = new $i({
    props: {
      Icon: su,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, l) {
      pt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
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
function aa(i) {
  let e, t;
  return e = new E_({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[35]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[36]
  ), e.$on(
    "error",
    /*error_handler*/
    i[37]
  ), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, l) {
      pt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (s.value = /*value*/
      n[1]), e.$set(s);
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
function ra(i) {
  let e, t, n;
  return t = new $i({
    props: { Icon: Sa, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[33]
  ), {
    c() {
      e = ii("div"), bt(t.$$.fragment);
    },
    m(l, s) {
      on(l, e, s), pt(t, e, null), n = !0;
    },
    p: Pm,
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      $(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && sn(e), wt(t);
    }
  };
}
function fa(i) {
  let e;
  const t = (
    /*#slots*/
    i[34].default
  ), n = jm(
    t,
    i,
    /*$$scope*/
    i[50],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, s) {
      n && n.m(l, s), e = !0;
    },
    p(l, s) {
      n && n.p && (!e || s[1] & /*$$scope*/
      524288) && Gm(
        n,
        t,
        l,
        /*$$scope*/
        l[50],
        e ? Nm(
          t,
          /*$$scope*/
          l[50],
          s,
          null
        ) : Om(
          /*$$scope*/
          l[50]
        ),
        null
      );
    },
    i(l) {
      e || (G(n, l), e = !0);
    },
    o(l) {
      $(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function xm(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && fa(i)
  );
  return {
    c() {
      n && n.c(), e = Um();
    },
    m(l, s) {
      n && n.m(l, s), on(l, e, s), t = !0;
    },
    p(l, s) {
      /*value*/
      l[1] === null ? n ? (n.p(l, s), s[0] & /*value*/
      2 && G(n, 1)) : (n = fa(l), n.c(), G(n, 1), n.m(e.parentNode, e)) : n && (Zt(), $(n, 1, 1, () => {
        n = null;
      }), Pt());
    },
    i(l) {
      t || (G(n), t = !0);
    },
    o(l) {
      $(n), t = !1;
    },
    d(l) {
      l && sn(e), n && n.d(l);
    }
  };
}
function ca(i) {
  let e, t;
  return e = new g1({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[28]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[42]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[43]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[44]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[45]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[46]
  ), {
    c() {
      bt(e.$$.fragment);
    },
    m(n, l) {
      pt(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), l[0] & /*upload*/
      268435456 && (s.upload = /*upload*/
      n[28]), e.$set(s);
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
function ua(i) {
  let e, t, n, l;
  function s(r) {
    i[47](r);
  }
  let o = {
    boxesAlpha: (
      /*boxesAlpha*/
      i[12]
    ),
    labelList: (
      /*labelList*/
      i[13]
    ),
    labelColors: (
      /*labelColors*/
      i[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[15]
    ),
    interactive: (
      /*interactive*/
      i[7]
    ),
    handleSize: (
      /*handleSize*/
      i[16]
    ),
    boxThickness: (
      /*boxThickness*/
      i[17]
    ),
    singleBox: (
      /*singleBox*/
      i[19]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[18]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[20]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[21]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[22]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (o.value = /*value*/
    i[1]), t = new Hm({ props: o }), oi.push(() => xi(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      i[48]
    ), {
      c() {
        e = ii("div"), bt(t.$$.fragment), xn(e, "class", "image-frame svelte-1gjdske"), sa(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        on(r, e, a), pt(t, e, null), l = !0;
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
        r[1], Qi(() => n = !1)), t.$set(f), (!l || a[0] & /*selectable*/
        32) && sa(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (G(t.$$.fragment, r), l = !0);
      },
      o(r) {
        $(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && sn(e), wt(t);
      }
    }
  );
}
function _a(i) {
  let e, t, n;
  function l(o) {
    i[49](o);
  }
  let s = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[33]
    ),
    handle_select: (
      /*handle_select_source*/
      i[32]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (s.active_source = /*active_source*/
    i[0]), e = new N_({ props: s }), oi.push(() => xi(e, "active_source", l)), {
      c() {
        bt(e.$$.fragment);
      },
      m(o, r) {
        pt(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], Qi(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (G(e.$$.fragment, o), n = !0);
      },
      o(o) {
        $(e.$$.fragment, o), n = !1;
      },
      d(o) {
        wt(e, o);
      }
    }
  );
}
function $m(i) {
  let e, t, n, l, s, o, r, a, f, c, u, _, d, b, g = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), p;
  e = new Vf({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: za,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let w = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && oa(i)
  ), h = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && aa(i)
  ), m = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && ra(i)
  );
  function C(z) {
    i[39](z);
  }
  function S(z) {
    i[40](z);
  }
  let v = {
    hidden: (
      /*value*/
      i[1] !== null || /*active_source*/
      i[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      i[6]
    ),
    max_file_size: (
      /*max_file_size*/
      i[23]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[24]
    ),
    stream_handler: (
      /*stream_handler*/
      i[25]
    ),
    $$slots: { default: [xm] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[26] !== void 0 && (v.uploading = /*uploading*/
  i[26]), /*dragging*/
  i[27] !== void 0 && (v.dragging = /*dragging*/
  i[27]), f = new zh({ props: v }), i[38](f), oi.push(() => xi(f, "uploading", C)), oi.push(() => xi(f, "dragging", S)), f.$on(
    "load",
    /*handle_upload*/
    i[29]
  ), f.$on(
    "error",
    /*error_handler_1*/
    i[41]
  );
  let k = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && ca(i)
  ), y = (
    /*value*/
    i[1] !== null && ua(i)
  ), D = g && _a(i);
  return {
    c() {
      bt(e.$$.fragment), t = Nt(), n = ii("div"), w && w.c(), l = Nt(), h && h.c(), s = Nt(), m && m.c(), o = Nt(), r = ii("div"), a = ii("div"), bt(f.$$.fragment), _ = Nt(), k && k.c(), d = Nt(), y && y.c(), b = Nt(), D && D.c(), xn(n, "class", "icon-buttons svelte-1gjdske"), xn(a, "class", "upload-container svelte-1gjdske"), xn(r, "data-testid", "image"), xn(r, "class", "image-container svelte-1gjdske");
    },
    m(z, L) {
      pt(e, z, L), on(z, t, L), on(z, n, L), w && w.m(n, null), yn(n, l), h && h.m(n, null), yn(n, s), m && m.m(n, null), on(z, o, L), on(z, r, L), yn(r, a), pt(f, a, null), yn(a, _), k && k.m(a, null), yn(a, d), y && y.m(a, null), yn(r, b), D && D.m(r, null), p = !0;
    },
    p(z, L) {
      const A = {};
      L[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      z[3]), L[0] & /*label*/
      4 && (A.label = /*label*/
      z[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      z[10] && /*value*/
      z[1] !== null ? w ? (w.p(z, L), L[0] & /*showDownloadButton, value*/
      1026 && G(w, 1)) : (w = oa(z), w.c(), G(w, 1), w.m(n, l)) : w && (Zt(), $(w, 1, 1, () => {
        w = null;
      }), Pt()), /*showShareButton*/
      z[9] && /*value*/
      z[1] !== null ? h ? (h.p(z, L), L[0] & /*showShareButton, value*/
      514 && G(h, 1)) : (h = aa(z), h.c(), G(h, 1), h.m(n, s)) : h && (Zt(), $(h, 1, 1, () => {
        h = null;
      }), Pt()), /*showClearButton*/
      z[11] && /*value*/
      z[1] !== null && /*interactive*/
      z[7] ? m ? (m.p(z, L), L[0] & /*showClearButton, value, interactive*/
      2178 && G(m, 1)) : (m = ra(z), m.c(), G(m, 1), m.m(n, null)) : m && (Zt(), $(m, 1, 1, () => {
        m = null;
      }), Pt());
      const j = {};
      L[0] & /*value, active_source*/
      3 && (j.hidden = /*value*/
      z[1] !== null || /*active_source*/
      z[0] === "webcam"), L[0] & /*active_source*/
      1 && (j.filetype = /*active_source*/
      z[0] === "clipboard" ? "clipboard" : "image/*"), L[0] & /*root*/
      64 && (j.root = /*root*/
      z[6]), L[0] & /*max_file_size*/
      8388608 && (j.max_file_size = /*max_file_size*/
      z[23]), L[0] & /*sources*/
      16 && (j.disable_click = !/*sources*/
      z[4].includes("upload")), L[0] & /*cli_upload*/
      16777216 && (j.upload = /*cli_upload*/
      z[24]), L[0] & /*stream_handler*/
      33554432 && (j.stream_handler = /*stream_handler*/
      z[25]), L[0] & /*value*/
      2 | L[1] & /*$$scope*/
      524288 && (j.$$scope = { dirty: L, ctx: z }), !c && L[0] & /*uploading*/
      67108864 && (c = !0, j.uploading = /*uploading*/
      z[26], Qi(() => c = !1)), !u && L[0] & /*dragging*/
      134217728 && (u = !0, j.dragging = /*dragging*/
      z[27], Qi(() => u = !1)), f.$set(j), /*value*/
      z[1] === null && /*active_source*/
      z[0] === "webcam" ? k ? (k.p(z, L), L[0] & /*value, active_source*/
      3 && G(k, 1)) : (k = ca(z), k.c(), G(k, 1), k.m(a, d)) : k && (Zt(), $(k, 1, 1, () => {
        k = null;
      }), Pt()), /*value*/
      z[1] !== null ? y ? (y.p(z, L), L[0] & /*value*/
      2 && G(y, 1)) : (y = ua(z), y.c(), G(y, 1), y.m(a, null)) : y && (Zt(), $(y, 1, 1, () => {
        y = null;
      }), Pt()), L[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (z[4].length > 1 || /*sources*/
      z[4].includes("clipboard")) && /*value*/
      z[1] === null && /*interactive*/
      z[7]), g ? D ? (D.p(z, L), L[0] & /*sources, value, interactive*/
      146 && G(D, 1)) : (D = _a(z), D.c(), G(D, 1), D.m(r, null)) : D && (Zt(), $(D, 1, 1, () => {
        D = null;
      }), Pt());
    },
    i(z) {
      p || (G(e.$$.fragment, z), G(w), G(h), G(m), G(f.$$.fragment, z), G(k), G(y), G(D), p = !0);
    },
    o(z) {
      $(e.$$.fragment, z), $(w), $(h), $(m), $(f.$$.fragment, z), $(k), $(y), $(D), p = !1;
    },
    d(z) {
      z && (sn(t), sn(n), sn(o), sn(r)), wt(e, z), w && w.d(), h && h.d(), m && m.d(), i[38](null), wt(f), k && k.d(), y && y.d(), D && D.d();
    }
  };
}
function eg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var s = this && this.__awaiter || function(E, yt, ct, dn) {
    function fl(Yt) {
      return Yt instanceof ct ? Yt : new ct(function(hn) {
        hn(Yt);
      });
    }
    return new (ct || (ct = Promise))(function(Yt, hn) {
      function cl(ut) {
        try {
          Tn(dn.next(ut));
        } catch (q) {
          hn(q);
        }
      }
      function ul(ut) {
        try {
          Tn(dn.throw(ut));
        } catch (q) {
          hn(q);
        }
      }
      function Tn(ut) {
        ut.done ? Yt(ut.value) : fl(ut.value).then(cl, ul);
      }
      Tn((dn = dn.apply(E, yt || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: b } = e, { showDownloadButton: g } = e, { showClearButton: p } = e, { boxesAlpha: w } = e, { labelList: h } = e, { labelColors: m } = e, { boxMinSize: C } = e, { handleSize: S } = e, { boxThickness: v } = e, { disableEditBoxes: k } = e, { singleBox: y } = e, { showRemoveButton: D } = e, { handlesCursor: z } = e, { boxSelectedThickness: L } = e, { max_file_size: A = null } = e, { cli_upload: j } = e, { stream_handler: O } = e, Q, K = !1, { active_source: V = null } = e;
  function R({ detail: E }) {
    t(1, o = new la()), t(1, o.image = E, o), W("upload");
  }
  function U(E) {
    return s(this, void 0, void 0, function* () {
      const yt = yield Q.load_files([new File([E], "webcam.png")]), ct = (yt == null ? void 0 : yt[0]) || null;
      ct ? (t(1, o = new la()), t(1, o.image = ct, o)) : t(1, o = null), yield Jm(), W("change");
    });
  }
  const W = Km();
  let P = !1;
  function ge(E) {
    return s(this, void 0, void 0, function* () {
      switch (E) {
        case "clipboard":
          Q.paste_clipboard();
          break;
      }
    });
  }
  function re() {
    t(1, o = null), W("clear"), W("change");
  }
  const fe = async (E) => E === null ? "" : `<img src="${await m_(E.image)}" />`;
  function T(E) {
    jn.call(this, i, E);
  }
  function Ne(E) {
    jn.call(this, i, E);
  }
  function M(E) {
    oi[E ? "unshift" : "push"](() => {
      Q = E, t(28, Q);
    });
  }
  function X(E) {
    K = E, t(26, K);
  }
  function J(E) {
    P = E, t(27, P);
  }
  function B(E) {
    jn.call(this, i, E);
  }
  const ce = (E) => U(E.detail), Ve = (E) => U(E.detail);
  function nt(E) {
    jn.call(this, i, E);
  }
  function Ce(E) {
    jn.call(this, i, E);
  }
  const ve = (E) => U(E.detail);
  function ke(E) {
    o = E, t(1, o);
  }
  const Pe = () => W("change");
  function Xt(E) {
    V = E, t(0, V), t(4, f);
  }
  return i.$$set = (E) => {
    "value" in E && t(1, o = E.value), "label" in E && t(2, r = E.label), "show_label" in E && t(3, a = E.show_label), "sources" in E && t(4, f = E.sources), "selectable" in E && t(5, c = E.selectable), "root" in E && t(6, u = E.root), "interactive" in E && t(7, _ = E.interactive), "i18n" in E && t(8, d = E.i18n), "showShareButton" in E && t(9, b = E.showShareButton), "showDownloadButton" in E && t(10, g = E.showDownloadButton), "showClearButton" in E && t(11, p = E.showClearButton), "boxesAlpha" in E && t(12, w = E.boxesAlpha), "labelList" in E && t(13, h = E.labelList), "labelColors" in E && t(14, m = E.labelColors), "boxMinSize" in E && t(15, C = E.boxMinSize), "handleSize" in E && t(16, S = E.handleSize), "boxThickness" in E && t(17, v = E.boxThickness), "disableEditBoxes" in E && t(18, k = E.disableEditBoxes), "singleBox" in E && t(19, y = E.singleBox), "showRemoveButton" in E && t(20, D = E.showRemoveButton), "handlesCursor" in E && t(21, z = E.handlesCursor), "boxSelectedThickness" in E && t(22, L = E.boxSelectedThickness), "max_file_size" in E && t(23, A = E.max_file_size), "cli_upload" in E && t(24, j = E.cli_upload), "stream_handler" in E && t(25, O = E.stream_handler), "active_source" in E && t(0, V = E.active_source), "$$scope" in E && t(50, l = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    67108864 && K && re(), i.$$.dirty[0] & /*dragging*/
    134217728 && W("drag", P), i.$$.dirty[0] & /*active_source, sources*/
    17 && !V && f && t(0, V = f[0]);
  }, [
    V,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    g,
    p,
    w,
    h,
    m,
    C,
    S,
    v,
    k,
    y,
    D,
    z,
    L,
    A,
    j,
    O,
    K,
    P,
    Q,
    R,
    U,
    W,
    ge,
    re,
    n,
    fe,
    T,
    Ne,
    M,
    X,
    J,
    B,
    ce,
    Ve,
    nt,
    Ce,
    ve,
    ke,
    Pe,
    Xt,
    l
  ];
}
class tg extends Fm {
  constructor(e) {
    super(), Vm(
      this,
      e,
      eg,
      $m,
      Zm,
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
  SvelteComponent: ng,
  attr: Hi,
  detach: zr,
  element: qr,
  init: ig,
  insert: Br,
  noop: da,
  safe_not_equal: lg,
  src_url_equal: ha,
  toggle_class: Et
} = window.__gradio__svelte__internal;
function ma(i) {
  let e, t;
  return {
    c() {
      e = qr("img"), ha(e.src, t = /*value*/
      i[0].url) || Hi(e, "src", t), Hi(e, "alt", "");
    },
    m(n, l) {
      Br(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !ha(e.src, t = /*value*/
      n[0].url) && Hi(e, "src", t);
    },
    d(n) {
      n && zr(e);
    }
  };
}
function sg(i) {
  let e, t = (
    /*value*/
    i[0] && ma(i)
  );
  return {
    c() {
      e = qr("div"), t && t.c(), Hi(e, "class", "container svelte-1sgcyba"), Et(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Et(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Et(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Et(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      Br(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = ma(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Et(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Et(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Et(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Et(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: da,
    o: da,
    d(n) {
      n && zr(e), t && t.d();
    }
  };
}
function og(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: s = !1 } = e;
  return i.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, l = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, l, s];
}
class Wg extends ng {
  constructor(e) {
    super(), ig(this, e, og, sg, lg, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: ag,
  add_flush_callback: ga,
  assign: rg,
  bind: ba,
  binding_callbacks: wa,
  check_outros: fg,
  create_component: cn,
  destroy_component: un,
  detach: Er,
  empty: cg,
  flush: Z,
  get_spread_object: ug,
  get_spread_update: _g,
  group_outros: dg,
  init: hg,
  insert: Mr,
  mount_component: _n,
  safe_not_equal: mg,
  space: gg,
  transition_in: vt,
  transition_out: kt
} = window.__gradio__svelte__internal;
function bg(i) {
  let e, t;
  return e = new yc({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [vg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[1] & /*$$scope*/
      4096 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function wg(i) {
  let e, t;
  return e = new Wa({
    props: {
      i18n: (
        /*gradio*/
        i[30].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*gradio*/
      1073741824 && (s.i18n = /*gradio*/
      n[30].i18n), e.$set(s);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function pg(i) {
  let e, t;
  return e = new Wa({
    props: {
      i18n: (
        /*gradio*/
        i[30].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*gradio*/
      1073741824 && (s.i18n = /*gradio*/
      n[30].i18n), e.$set(s);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function vg(i) {
  let e, t;
  return e = new za({}), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function kg(i) {
  let e, t, n, l;
  const s = [pg, wg, bg], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[32] === "upload" ? 0 : (
        /*active_source*/
        a[32] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = o[e] = s[e](i), {
    c() {
      t.c(), n = cg();
    },
    m(a, f) {
      o[e].m(a, f), Mr(a, n, f), l = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (dg(), kt(o[c], 1, 1, () => {
        o[c] = null;
      }), fg(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), vt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (vt(t), l = !0);
    },
    o(a) {
      kt(t), l = !1;
    },
    d(a) {
      a && Er(n), o[e].d(a);
    }
  };
}
function yg(i) {
  let e, t, n, l, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[30].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[30].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = rg(a, r[_]);
  e = new Md({ props: a });
  function f(_) {
    i[33](_);
  }
  function c(_) {
    i[34](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      i[10]
    ),
    root: (
      /*root*/
      i[7]
    ),
    sources: (
      /*sources*/
      i[14]
    ),
    interactive: (
      /*interactive*/
      i[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      i[15]
    ),
    showShareButton: (
      /*show_share_button*/
      i[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      i[17]
    ),
    i18n: (
      /*gradio*/
      i[30].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      i[19]
    ),
    labelList: (
      /*label_list*/
      i[20]
    ),
    labelColors: (
      /*label_colors*/
      i[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      i[22]
    ),
    label: (
      /*label*/
      i[5]
    ),
    show_label: (
      /*show_label*/
      i[6]
    ),
    max_file_size: (
      /*gradio*/
      i[30].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[30].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[30].client.stream
    ),
    handleSize: (
      /*handle_size*/
      i[23]
    ),
    boxThickness: (
      /*box_thickness*/
      i[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      i[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      i[26]
    ),
    singleBox: (
      /*single_box*/
      i[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      i[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      i[29]
    ),
    $$slots: { default: [kg] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[32] !== void 0 && (u.active_source = /*active_source*/
    i[32]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new tg({ props: u }), wa.push(() => ba(n, "active_source", f)), wa.push(() => ba(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[35]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[36]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[37]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[38]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[39]
    ), n.$on(
      "select",
      /*select_handler*/
      i[40]
    ), n.$on(
      "share",
      /*share_handler*/
      i[41]
    ), n.$on(
      "error",
      /*error_handler*/
      i[42]
    ), {
      c() {
        cn(e.$$.fragment), t = gg(), cn(n.$$.fragment);
      },
      m(_, d) {
        _n(e, _, d), Mr(_, t, d), _n(n, _, d), o = !0;
      },
      p(_, d) {
        const b = d[0] & /*gradio, loading_status*/
        1073741826 ? _g(r, [
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
        e.$set(b);
        const g = {};
        d[0] & /*_selectable*/
        1024 && (g.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (g.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (g.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (g.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (g.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (g.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (g.showClearButton = /*show_clear_button*/
        _[17]), d[0] & /*gradio*/
        1073741824 && (g.i18n = /*gradio*/
        _[30].i18n), d[0] & /*boxes_alpha*/
        524288 && (g.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*label_list*/
        1048576 && (g.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (g.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (g.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (g.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (g.show_label = /*show_label*/
        _[6]), d[0] & /*gradio*/
        1073741824 && (g.max_file_size = /*gradio*/
        _[30].max_file_size), d[0] & /*gradio*/
        1073741824 && (g.cli_upload = /*gradio*/
        _[30].client.upload), d[0] & /*gradio*/
        1073741824 && (g.stream_handler = /*gradio*/
        _[30].client.stream), d[0] & /*handle_size*/
        8388608 && (g.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (g.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (g.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (g.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (g.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (g.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (g.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*gradio*/
        1073741824 | d[1] & /*$$scope, active_source*/
        4098 && (g.$$scope = { dirty: d, ctx: _ }), !l && d[1] & /*active_source*/
        2 && (l = !0, g.active_source = /*active_source*/
        _[32], ga(() => l = !1)), !s && d[0] & /*value*/
        1 && (s = !0, g.value = /*value*/
        _[0], ga(() => s = !1)), n.$set(g);
      },
      i(_) {
        o || (vt(e.$$.fragment, _), vt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        kt(e.$$.fragment, _), kt(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && Er(t), un(e, _), un(n, _);
      }
    }
  );
}
function Cg(i) {
  let e, t;
  return e = new Pr({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[31] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        i[2]
      ),
      elem_classes: (
        /*elem_classes*/
        i[3]
      ),
      height: (
        /*height*/
        i[8] || void 0
      ),
      width: (
        /*width*/
        i[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        i[11]
      ),
      scale: (
        /*scale*/
        i[12]
      ),
      min_width: (
        /*min_width*/
        i[13]
      ),
      $$slots: { default: [yg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      cn(e.$$.fragment);
    },
    m(n, l) {
      _n(e, n, l), t = !0;
    },
    p(n, l) {
      const s = {};
      l[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      1 && (s.border_mode = /*dragging*/
      n[31] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*height*/
      256 && (s.height = /*height*/
      n[8] || void 0), l[0] & /*width*/
      512 && (s.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (s.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, gradio, boxes_alpha, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, value, loading_status*/
      2147468515 | l[1] & /*$$scope, active_source, dragging*/
      4099 && (s.$$scope = { dirty: l, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (vt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      un(e, n);
    }
  };
}
function Sg(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: b = null } = e, { min_width: g = void 0 } = e, { loading_status: p } = e, { sources: w = ["upload", "webcam", "clipboard"] } = e, { show_download_button: h } = e, { show_share_button: m } = e, { show_clear_button: C } = e, { interactive: S } = e, { boxes_alpha: v } = e, { label_list: k } = e, { label_colors: y } = e, { box_min_size: D } = e, { handle_size: z } = e, { box_thickness: L } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: j } = e, { single_box: O } = e, { show_remove_button: Q } = e, { handles_cursor: K } = e, { gradio: V } = e, R, U = null;
  function W(B) {
    U = B, t(32, U);
  }
  function P(B) {
    o = B, t(0, o);
  }
  const ge = () => V.dispatch("change"), re = () => V.dispatch("edit"), fe = () => {
    V.dispatch("clear");
  }, T = ({ detail: B }) => t(31, R = B), Ne = () => V.dispatch("upload"), M = ({ detail: B }) => V.dispatch("select", B), X = ({ detail: B }) => V.dispatch("share", B), J = ({ detail: B }) => {
    t(1, p = p || {}), t(1, p.status = "error", p), V.dispatch("error", B);
  };
  return i.$$set = (B) => {
    "elem_id" in B && t(2, n = B.elem_id), "elem_classes" in B && t(3, l = B.elem_classes), "visible" in B && t(4, s = B.visible), "value" in B && t(0, o = B.value), "label" in B && t(5, r = B.label), "show_label" in B && t(6, a = B.show_label), "root" in B && t(7, f = B.root), "height" in B && t(8, c = B.height), "width" in B && t(9, u = B.width), "_selectable" in B && t(10, _ = B._selectable), "container" in B && t(11, d = B.container), "scale" in B && t(12, b = B.scale), "min_width" in B && t(13, g = B.min_width), "loading_status" in B && t(1, p = B.loading_status), "sources" in B && t(14, w = B.sources), "show_download_button" in B && t(15, h = B.show_download_button), "show_share_button" in B && t(16, m = B.show_share_button), "show_clear_button" in B && t(17, C = B.show_clear_button), "interactive" in B && t(18, S = B.interactive), "boxes_alpha" in B && t(19, v = B.boxes_alpha), "label_list" in B && t(20, k = B.label_list), "label_colors" in B && t(21, y = B.label_colors), "box_min_size" in B && t(22, D = B.box_min_size), "handle_size" in B && t(23, z = B.handle_size), "box_thickness" in B && t(24, L = B.box_thickness), "box_selected_thickness" in B && t(25, A = B.box_selected_thickness), "disable_edit_boxes" in B && t(26, j = B.disable_edit_boxes), "single_box" in B && t(27, O = B.single_box), "show_remove_button" in B && t(28, Q = B.show_remove_button), "handles_cursor" in B && t(29, K = B.handles_cursor), "gradio" in B && t(30, V = B.gradio);
  }, [
    o,
    p,
    n,
    l,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    b,
    g,
    w,
    h,
    m,
    C,
    S,
    v,
    k,
    y,
    D,
    z,
    L,
    A,
    j,
    O,
    Q,
    K,
    V,
    R,
    U,
    W,
    P,
    ge,
    re,
    fe,
    T,
    Ne,
    M,
    X,
    J
  ];
}
class Ag extends ag {
  constructor(e) {
    super(), hg(
      this,
      e,
      Sg,
      Cg,
      mg,
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
  Wg as BaseExample,
  Ag as default
};
