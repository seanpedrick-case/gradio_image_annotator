import { i as Dn, g as xa, o as Ns, n as ot, a as ae, s as ya, r as Cr, b as ee, c as R, d as l, t as ar, e as Ps, q as Zr, f as wa, h as Nt, j as Zn, k as Hs, l as Qt, T as Ms, p as zs, v as Kr, w as qt, x as Qr, y as Yt, z as Ea, A as Da, B as Aa, C as An, E as Fn, D as mi, F as Us, G as _t, H as Jr, I as Gs, J as Sr, K as Ws, L as js, M as xt, N as Fa, O as dr, P as Xs, Q as qs, R as Vs, S as ka, U as Ys, V as Zs, W as Ks, X as fn, Y as Qs, Z as an, _ as Ca, $ as Js, a0 as Pn, a1 as $s, a2 as Sa, a3 as se, a4 as Ta, a5 as eo, a6 as to, a7 as no, a8 as ro, a9 as io, aa as ao, ab as $r, ac as so, ad as Rt, ae as kn, af as oo, ag as lo, ah as uo, ai as co, aj as ho, ak as Kn, al as Vt, am as fo, an as ei, ao as po, ap as ct, aq as go, ar as Ba, as as mo, at as Ia, au as Qn, av as vo, aw as Ra, ax as bo, ay as _o, az as xo, aA as yo, aB as La, aC as vi, aD as bi, aE as ti, aF as nt, aG as wo, aH as pt, aI as Jt, aJ as _e, aK as Qe, aL as Je, aM as G, aN as ge, aO as J, aP as Ce, aQ as Le, aR as H, aS as Ge, aT as Eo, aU as ni, aV as Do, aW as it } from "./render-Bx40tAS2.js";
const Ao = [];
function Fo(t, e = !1, n = !1) {
  return jn(t, /* @__PURE__ */ new Map(), "", Ao, null, n);
}
function jn(t, e, n, r, i = null, a = !1) {
  if (typeof t == "object" && t !== null) {
    var s = e.get(t);
    if (s !== void 0) return s;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (Dn(t)) {
      var o = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, o), i !== null && e.set(i, o);
      for (var u = 0; u < t.length; u += 1) {
        var c = t[u];
        u in t && (o[u] = jn(c, e, n, r, null, a));
      }
      return o;
    }
    if (xa(t) === Ns) {
      o = {}, e.set(t, o), i !== null && e.set(i, o);
      for (var f of Object.keys(t))
        o[f] = jn(
          // @ts-expect-error
          t[f],
          e,
          n,
          r,
          null,
          a
        );
      return o;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function" && !a)
      return jn(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        n,
        r,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
function ri(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ot;
  const r = ae(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const rn = [];
function ko(t, e) {
  return {
    subscribe: Cn(t, e).subscribe
  };
}
function Cn(t, e = ot) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(o) {
    if (ya(t, o) && (t = o, n)) {
      const u = !rn.length;
      for (const c of r)
        c[1](), rn.push(c, t);
      if (u) {
        for (let c = 0; c < rn.length; c += 2)
          rn[c][0](rn[c + 1]);
        rn.length = 0;
      }
    }
  }
  function a(o) {
    i(o(
      /** @type {T} */
      t
    ));
  }
  function s(o, u = ot) {
    const c = [o, u];
    return r.add(c), r.size === 1 && (n = e(i, a) || ot), o(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function dn(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return ko(n, (s, o) => {
    let u = !1;
    const c = [];
    let f = 0, v = ot;
    const g = () => {
      if (f)
        return;
      v();
      const F = e(r ? c[0] : c, s, o);
      a ? s(F) : v = typeof F == "function" ? F : ot;
    }, D = i.map(
      (F, A) => ri(
        F,
        (_) => {
          c[A] = _, f &= ~(1 << A), u && g();
        },
        () => {
          f |= 1 << A;
        }
      )
    );
    return u = !0, g(), function() {
      Cr(D), v(), u = !1;
    };
  });
}
function Co(t) {
  let e;
  return ri(t, (n) => e = n)(), e;
}
let Hn = !1, Tr = /* @__PURE__ */ Symbol();
function _i(t, e, n) {
  const r = n[e] ??= {
    store: null,
    source: ee(void 0),
    unsubscribe: ot
  };
  if (r.store !== t && !(Tr in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ot;
    else {
      var i = !0;
      r.unsubscribe = ri(t, (a) => {
        i ? r.source.v = a : R(r.source, a);
      }), i = !1;
    }
  return t && Tr in n ? Co(t) : l(r.source);
}
function So() {
  const t = {};
  function e() {
    ar(() => {
      for (var n in t)
        t[n].unsubscribe();
      Ps(t, Tr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function To(t) {
  var e = Hn;
  try {
    return Hn = !1, [t(), Hn];
  } finally {
    Hn = e;
  }
}
function Bo(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Zr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
const Io = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Ro(t) {
  return (
    /** @type {string} */
    Io?.createHTML(t) ?? t
  );
}
function Oa(t) {
  var e = wa("template");
  return e.innerHTML = Ro(t.replaceAll("<!>", "<!---->")), e.content;
}
function ln(t, e) {
  var n = (
    /** @type {Effect} */
    Qt
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function q(t, e) {
  var n = (e & Ms) !== 0, r = (e & zs) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Oa(a ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    Zn(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Hs ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        Zn(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ln(o, u);
    } else
      ln(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Lo(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Oa(i)
      ), o = (
        /** @type {Element} */
        Zn(s)
      );
      a = /** @type {Element} */
      Zn(o);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ln(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function We(t, e) {
  return /* @__PURE__ */ Lo(t, e, "svg");
}
function kt(t = "") {
  {
    var e = Nt(t + "");
    return ln(e, e), e;
  }
}
function qe() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Nt();
  return t.append(e, n), ln(e, n), t;
}
function B(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
class sr {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #i = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#i = n;
  }
  /**
   * @param {Batch} batch
   */
  #a = (e) => {
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#n.get(n);
      if (r)
        Kr(r), this.#r.delete(n);
      else {
        var i = this.#t.get(n);
        i && (this.#n.set(n, i.effect), this.#t.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [a, s] of this.#e) {
        if (this.#e.delete(a), a === e)
          break;
        const o = this.#t.get(s);
        o && (qt(o.effect), this.#t.delete(s));
      }
      for (const [a, s] of this.#n) {
        if (a === n || this.#r.has(a)) continue;
        const o = () => {
          if (Array.from(this.#e.values()).includes(a)) {
            var c = document.createDocumentFragment();
            Da(s, c), c.append(Nt()), this.#t.set(a, { effect: s, fragment: c });
          } else
            qt(s);
          this.#r.delete(a), this.#n.delete(a);
        };
        this.#i || !r ? (this.#r.add(a), Qr(s, o, !1)) : o();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #s = (e) => {
    this.#e.delete(e);
    const n = Array.from(this.#e.values());
    for (const [r, i] of this.#t)
      n.includes(r) || (qt(i.effect), this.#t.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Ea
    ), i = Aa();
    if (n && !this.#n.has(e) && !this.#t.has(e))
      if (i) {
        var a = document.createDocumentFragment(), s = Nt();
        a.append(s), this.#t.set(e, {
          effect: Yt(() => n(s)),
          fragment: a
        });
      } else
        this.#n.set(
          e,
          Yt(() => n(this.anchor))
        );
    if (this.#e.set(r, e), i) {
      for (const [o, u] of this.#n)
        o === e ? r.unskip_effect(u) : r.skip_effect(u);
      for (const [o, u] of this.#t)
        o === e ? r.unskip_effect(u.effect) : r.skip_effect(u.effect);
      r.oncommit(this.#a), r.ondiscard(this.#s);
    } else
      this.#a(r);
  }
}
function Y(t, e, n = !1) {
  var r = new sr(t), i = n ? Fn : 0;
  function a(s, o) {
    r.ensure(s, o);
  }
  An(() => {
    var s = !1;
    e((o, u = 0) => {
      s = !0, a(u, o);
    }), s || a(-1, null);
  }, i);
}
function Jn(t, e) {
  return e;
}
function Oo(t, e, n) {
  for (var r = [], i = e.length, a, s = e.length, o = 0; o < i; o++) {
    let v = e[o];
    Qr(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            Br(t, Jr(a.done)), g.delete(a), g.size === 0 && (t.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var u = r.length === 0 && n !== null;
    if (u) {
      var c = (
        /** @type {Element} */
        n
      ), f = (
        /** @type {Element} */
        c.parentNode
      );
      qs(f), f.append(c), t.items.clear();
    }
    Br(t, e, !u);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Br(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const s of t.pending.values())
      for (const o of s)
        r.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (r?.has(a)) {
      a.f |= xt;
      const s = document.createDocumentFragment();
      Da(a, s);
    } else
      qt(e[i], n);
  }
}
var xi;
function $n(t, e, n, r, i, a = null) {
  var s = t, o = /* @__PURE__ */ new Map(), u = (e & ka) !== 0;
  if (u) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(Nt());
  }
  var f = null, v = _t(() => {
    var h = n();
    return Dn(h) ? h : h == null ? [] : Jr(h);
  }), g, D = /* @__PURE__ */ new Map(), F = !0;
  function A(h) {
    (d.effect.f & Fa) === 0 && (d.pending.delete(h), d.fallback = f, No(d, g, s, e, r), f !== null && (g.length === 0 ? (f.f & xt) === 0 ? Kr(f) : (f.f ^= xt, xn(f, null, s)) : Qr(f, () => {
      f = null;
    })));
  }
  function _(h) {
    d.pending.delete(h);
  }
  var b = An(() => {
    g = /** @type {V[]} */
    l(v);
    for (var h = g.length, m = /* @__PURE__ */ new Set(), p = (
      /** @type {Batch} */
      Ea
    ), y = Aa(), E = 0; E < h; E += 1) {
      var k = g[E], x = r(k, E), S = F ? null : o.get(x);
      S ? (S.v && mi(S.v, k), S.i && mi(S.i, E), y && p.unskip_effect(S.e)) : (S = Po(
        o,
        F ? s : xi ??= Nt(),
        k,
        x,
        E,
        i,
        e,
        n
      ), F || (S.e.f |= xt), o.set(x, S)), m.add(x);
    }
    if (h === 0 && a && !f && (F ? f = Yt(() => a(s)) : (f = Yt(() => a(xi ??= Nt())), f.f |= xt)), h > m.size && Us(), !F)
      if (D.set(p, m), y) {
        for (const [T, O] of o)
          m.has(T) || p.skip_effect(O.e);
        p.oncommit(A), p.ondiscard(_);
      } else
        A(p);
    l(v);
  }), d = { effect: b, items: o, pending: D, outrogroups: null, fallback: f };
  F = !1;
}
function vn(t) {
  for (; t !== null && (t.f & Xs) === 0; )
    t = t.next;
  return t;
}
function No(t, e, n, r, i) {
  var a = (r & Ys) !== 0, s = e.length, o = t.items, u = vn(t.effect.first), c, f = null, v, g = [], D = [], F, A, _, b;
  if (a)
    for (b = 0; b < s; b += 1)
      F = e[b], A = i(F, b), _ = /** @type {EachItem} */
      o.get(A).e, (_.f & xt) === 0 && (_.nodes?.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(_));
  for (b = 0; b < s; b += 1) {
    if (F = e[b], A = i(F, b), _ = /** @type {EachItem} */
    o.get(A).e, t.outrogroups !== null)
      for (const S of t.outrogroups)
        S.pending.delete(_), S.done.delete(_);
    if ((_.f & xt) !== 0)
      if (_.f ^= xt, _ === u)
        xn(_, null, n);
      else {
        var d = f ? f.next : u;
        _ === t.effect.last && (t.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Bt(t, f, _), Bt(t, _, d), xn(_, d, n), f = _, g = [], D = [], u = vn(f.next);
        continue;
      }
    if ((_.f & dr) !== 0 && (Kr(_), a && (_.nodes?.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(_))), _ !== u) {
      if (c !== void 0 && c.has(_)) {
        if (g.length < D.length) {
          var h = D[0], m;
          f = h.prev;
          var p = g[0], y = g[g.length - 1];
          for (m = 0; m < g.length; m += 1)
            xn(g[m], h, n);
          for (m = 0; m < D.length; m += 1)
            c.delete(D[m]);
          Bt(t, p.prev, y.next), Bt(t, f, p), Bt(t, y, h), u = h, f = y, b -= 1, g = [], D = [];
        } else
          c.delete(_), xn(_, u, n), Bt(t, _.prev, _.next), Bt(t, _, f === null ? t.effect.first : f.next), Bt(t, f, _), f = _;
        continue;
      }
      for (g = [], D = []; u !== null && u !== _; )
        (c ??= /* @__PURE__ */ new Set()).add(u), D.push(u), u = vn(u.next);
      if (u === null)
        continue;
    }
    (_.f & xt) === 0 && g.push(_), f = _, u = vn(_.next);
  }
  if (t.outrogroups !== null) {
    for (const S of t.outrogroups)
      S.pending.size === 0 && (Br(t, Jr(S.done)), t.outrogroups?.delete(S));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (u !== null || c !== void 0) {
    var E = [];
    if (c !== void 0)
      for (_ of c)
        (_.f & dr) === 0 && E.push(_);
    for (; u !== null; )
      (u.f & dr) === 0 && u !== t.fallback && E.push(u), u = vn(u.next);
    var k = E.length;
    if (k > 0) {
      var x = (r & ka) !== 0 && s === 0 ? n : null;
      if (a) {
        for (b = 0; b < k; b += 1)
          E[b].nodes?.a?.measure();
        for (b = 0; b < k; b += 1)
          E[b].nodes?.a?.fix();
      }
      Oo(t, E, x);
    }
  }
  a && Zr(() => {
    if (v !== void 0)
      for (_ of v)
        _.nodes?.a?.apply();
  });
}
function Po(t, e, n, r, i, a, s, o) {
  var u = (s & Ws) !== 0 ? (s & js) === 0 ? ee(n, !1, !1) : Sr(n) : null, c = (s & Gs) !== 0 ? Sr(i) : null;
  return {
    v: u,
    i: c,
    e: Yt(() => (a(e, u ?? n, c ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function xn(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, a = e && (e.f & xt) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        Vs(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function Bt(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Pt(t, e, n, r, i) {
  var a = e.$$slots?.[n], s = !1;
  a === !0 && (a = e[n === "default" ? "children" : n], s = !0), a === void 0 || a(t, s ? () => r : r);
}
function Ir(t, e, ...n) {
  var r = new sr(t);
  An(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, Fn);
}
function Ho(t, e, n) {
  var r = new sr(t);
  An(() => {
    var i = e() ?? null;
    r.ensure(i, i && ((a) => n(a, i)));
  }, Fn);
}
const Mo = () => performance.now(), dt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Mo(),
  tasks: /* @__PURE__ */ new Set()
};
function Na() {
  const t = dt.now();
  dt.tasks.forEach((e) => {
    e.c(t) || (dt.tasks.delete(e), e.f());
  }), dt.tasks.size !== 0 && dt.tick(Na);
}
function Pa(t) {
  let e;
  return dt.tasks.size === 0 && dt.tick(Na), {
    promise: new Promise((n) => {
      dt.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      dt.tasks.delete(e);
    }
  };
}
function Rr(t, e) {
  Ca(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function zo(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function yi(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = zo(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Uo = (t) => t;
function Go(t, e, n, r) {
  var i = (t & Qs) !== 0, a = "in", s, o = e.inert, u = e.style.overflow, c, f;
  function v() {
    return Ca(() => s ??= n()(e, r?.() ?? /** @type {P} */
    {}, {
      direction: a
    }));
  }
  var g = {
    is_global: i,
    in() {
      e.inert = o, c?.abort(), c = Ha(e, v(), f, 1, () => {
        Rr(e, "introend"), c?.abort(), c = s = void 0, e.style.overflow = u;
      });
    },
    out(_) {
      {
        _?.(), s = void 0;
        return;
      }
    },
    stop: () => {
      c?.abort();
    }
  }, D = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Qt
  );
  if ((D.nodes.t ??= []).push(g), Js) {
    var F = i;
    if (!F) {
      for (var A = (
        /** @type {Effect | null} */
        D.parent
      ); A && (A.f & Fn) !== 0; )
        for (; (A = A.parent) && (A.f & Zs) === 0; )
          ;
      F = !A || (A.f & Ks) !== 0;
    }
    F && fn(() => {
      ae(() => g.in());
    });
  }
}
function Ha(t, e, n, r, i) {
  if (an(e)) {
    var a, s = !1;
    return Zr(() => {
      if (!s) {
        var A = e({ direction: "in" });
        a = Ha(t, A, n, r, i);
      }
    }), {
      abort: () => {
        s = !0, a?.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (!e?.duration && !e?.delay)
    return Rr(t, "introstart"), i(), {
      abort: ot,
      deactivate: ot,
      reset: ot,
      t: () => r
    };
  const { delay: o = 0, css: u, tick: c, easing: f = Uo } = e;
  var v = [];
  if (c && c(0, 1), u) {
    var g = yi(u(0, 1));
    v.push(g, g);
  }
  var D = () => 1 - r, F = t.animate(v, { duration: o, fill: "forwards" });
  return F.onfinish = () => {
    F.cancel(), Rr(t, "introstart");
    var A = 1 - r, _ = r - A, b = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), d = [];
    if (b > 0) {
      var h = !1;
      if (u)
        for (var m = Math.ceil(b / 16.666666666666668), p = 0; p <= m; p += 1) {
          var y = A + _ * f(p / m), E = yi(u(y, 1 - y));
          d.push(E), h ||= E.overflow === "hidden";
        }
      h && (t.style.overflow = "hidden"), D = () => {
        var k = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          F.currentTime
        );
        return A + _ * f(k / b);
      }, c && Pa(() => {
        if (F.playState !== "running") return !1;
        var k = D();
        return c(k, 1 - k), !0;
      });
    }
    F = t.animate(d, { duration: b, fill: "forwards" }), F.onfinish = () => {
      D = () => r, c?.(r, 1 - r), i();
    };
  }, {
    abort: () => {
      F && (F.cancel(), F.effect = null, F.onfinish = ot);
    },
    deactivate: () => {
      i = ot;
    },
    reset: () => {
    },
    t: () => D()
  };
}
function Wo(t, e, n, r, i, a) {
  var s = null, o = (
    /** @type {TemplateNode} */
    t
  ), u = new sr(o, !1);
  An(() => {
    const c = e() || null;
    var f = c === "svg" ? $s : void 0;
    if (c === null) {
      u.ensure(null, null), Pn(!0);
      return;
    }
    return u.ensure(c, (v) => {
      if (c) {
        if (s = wa(c, f), ln(s, s), r) {
          var g = s.appendChild(Nt());
          r(s, g);
        }
        Qt.nodes.end = s, v.before(s);
      }
    }), Pn(!0), () => {
      c && Pn(!1);
    };
  }, Fn), ar(() => {
    Pn(!0);
  });
}
function Ma(t, e, n) {
  fn(() => {
    var r = ae(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Sa(() => {
        var s = n();
        se(s), i && ya(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function jo(t, e) {
  var n = void 0, r;
  Ta(() => {
    n !== (n = e()) && (r && (qt(r), r = null), n && (r = Yt(() => {
      fn(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function za(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = za(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Xo() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = za(t)) && (r && (r += " "), r += e);
  return r;
}
function qo(t) {
  return typeof t == "object" ? Xo(t) : t ?? "";
}
const wi = [...` 	
\r\f \v\uFEFF`];
function Vo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var o = s + a;
          (s === 0 || wi.includes(r[s - 1])) && (o === r.length || wi.includes(r[o])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(o + 1) : s = o;
        }
  }
  return r === "" ? null : r;
}
function Ei(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i of Object.keys(t)) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function pr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Yo(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, o = !1, u = [];
      r && u.push(...Object.keys(r).map(pr)), i && u.push(...Object.keys(i).map(pr));
      var c = 0, f = -1;
      const A = t.length;
      for (var v = 0; v < A; v++) {
        var g = t[v];
        if (o ? g === "/" && t[v - 1] === "*" && (o = !1) : a ? a === g && (a = !1) : g === "/" && t[v + 1] === "*" ? o = !0 : g === '"' || g === "'" ? a = g : g === "(" ? s++ : g === ")" && s--, !o && a === !1 && s === 0) {
          if (g === ":" && f === -1)
            f = v;
          else if (g === ";" || v === A - 1) {
            if (f !== -1) {
              var D = pr(t.substring(c, f).trim());
              if (!u.includes(D)) {
                g !== ";" && v++;
                var F = t.substring(c, v).trim();
                n += " " + F + ";";
              }
            }
            c = v + 1, f = -1;
          }
        }
      }
    }
    return r && (n += Ei(r)), i && (n += Ei(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Oe(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var o = Vo(n, r, a);
    o == null ? t.removeAttribute("class") : e ? t.className = o : t.setAttribute("class", o), t.__className = n;
  } else if (a && i !== a)
    for (var u in a) {
      var c = !!a[u];
      (i == null || c !== !!i[u]) && t.classList.toggle(u, c);
    }
  return a;
}
function gr(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function lt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Yo(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (gr(t, n?.[0], r[0]), gr(t, n?.[1], r[1], "important")) : gr(t, n, r));
  return r;
}
function Lr(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Dn(e))
      return eo();
    for (var r of t.options)
      r.selected = e.includes(Di(r));
    return;
  }
  for (r of t.options) {
    var i = Di(r);
    if (to(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Zo(t) {
  var e = new MutationObserver(() => {
    Lr(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ar(() => {
    e.disconnect();
  });
}
function Di(t) {
  return "__value" in t ? t.__value : t.value;
}
const sn = /* @__PURE__ */ Symbol("class"), on = /* @__PURE__ */ Symbol("style"), Ua = /* @__PURE__ */ Symbol("is custom element"), Ga = /* @__PURE__ */ Symbol("is html"), Ko = $r ? "option" : "OPTION", Qo = $r ? "select" : "SELECT", Jo = $r ? "progress" : "PROGRESS";
function Or(t, e) {
  var n = ii(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== Jo) || (t.value = e ?? "");
}
function Wa(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Xe(t, e, n, r) {
  var i = ii(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[no] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && ja(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function $o(t, e, n, r, i = !1, a = !1) {
  var s = ii(t), o = s[Ua], u = !s[Ga], c = e || {}, f = t.nodeName === Ko;
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = qo(n.class) : (r || n[sn]) && (n.class = null), n[on] && (n.style ??= null);
  var g = ja(t);
  for (const h in n) {
    let m = n[h];
    if (f && h === "value" && m == null) {
      t.value = t.__value = "", c[h] = m;
      continue;
    }
    if (h === "class") {
      var D = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Oe(t, D, m, r, e?.[sn], n[sn]), c[h] = m, c[sn] = n[sn];
      continue;
    }
    if (h === "style") {
      lt(t, m, e?.[on], n[on]), c[h] = m, c[on] = n[on];
      continue;
    }
    var F = c[h];
    if (!(m === F && !(m === void 0 && t.hasAttribute(h)))) {
      c[h] = m;
      var A = h[0] + h[1];
      if (A !== "$$")
        if (A === "on") {
          const p = {}, y = "$$" + h;
          let E = h.slice(2);
          var _ = co(E);
          if (so(E) && (E = E.slice(0, -7), p.capture = !0), !_ && F) {
            if (m != null) continue;
            t.removeEventListener(E, c[y], p), c[y] = null;
          }
          if (_)
            Rt(E, t, m), kn([E]);
          else if (m != null) {
            let k = function(x) {
              c[h].call(this, x);
            };
            c[y] = oo(E, t, k, p);
          }
        } else if (h === "style")
          Xe(t, h, m);
        else if (h === "autofocus")
          Bo(
            /** @type {HTMLElement} */
            t,
            !!m
          );
        else if (!o && (h === "__value" || h === "value" && m != null))
          t.value = t.__value = m;
        else if (h === "selected" && f)
          Wa(
            /** @type {HTMLOptionElement} */
            t,
            m
          );
        else {
          var b = h;
          u || (b = lo(b));
          var d = b === "defaultValue" || b === "defaultChecked";
          if (m == null && !o && !d)
            if (s[h] = null, b === "value" || b === "checked") {
              let p = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (b === "value") {
                let E = p.defaultValue;
                p.removeAttribute(b), p.defaultValue = E, p.value = p.__value = y ? E : null;
              } else {
                let E = p.defaultChecked;
                p.removeAttribute(b), p.defaultChecked = E, p.checked = y ? E : !1;
              }
            } else
              t.removeAttribute(h);
          else d || g.includes(b) && (o || typeof m != "string") ? (t[b] = m, b in s && (s[b] = uo)) : typeof m != "function" && Xe(t, b, m);
        }
    }
  }
  return c;
}
function Nr(t, e, n = [], r = [], i = [], a, s = !1, o = !1) {
  io(i, n, r, (u) => {
    var c = void 0, f = {}, v = t.nodeName === Qo, g = !1;
    if (Ta(() => {
      var F = e(...u.map(l)), A = $o(
        t,
        c,
        F,
        a,
        s,
        o
      );
      g && v && "value" in F && Lr(
        /** @type {HTMLSelectElement} */
        t,
        F.value
      );
      for (let b of Object.getOwnPropertySymbols(f))
        F[b] || qt(f[b]);
      for (let b of Object.getOwnPropertySymbols(F)) {
        var _ = F[b];
        b.description === ao && (!c || _ !== c[b]) && (f[b] && qt(f[b]), f[b] = Yt(() => jo(t, () => _))), A[b] = _;
      }
      c = A;
    }), v) {
      var D = (
        /** @type {HTMLSelectElement} */
        t
      );
      fn(() => {
        Lr(
          D,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Zo(D);
      });
    }
    g = !0;
  });
}
function ii(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Ua]: t.nodeName.includes("-"),
      [Ga]: t.namespaceURI === ro
    }
  );
}
var Ai = /* @__PURE__ */ new Map();
function ja(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ai.get(e);
  if (n) return n;
  Ai.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = ho(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = xa(i);
  }
  return n;
}
function el(t, e, n) {
  var r = Kn(t, e);
  r && r.set && (t[e] = n, ar(() => {
    t[e] = null;
  }));
}
function Fi(t, e) {
  return t === e || t?.[ei] === e;
}
function Zt(t = {}, e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    Vt.r
  ), a = (
    /** @type {Effect} */
    Qt
  );
  return fn(() => {
    var s, o;
    return Sa(() => {
      s = o, o = [], ae(() => {
        t !== n(...o) && (e(t, ...o), s && Fi(n(...s), t) && e(null, ...s));
      });
    }), () => {
      let u = a;
      for (; u !== i && u.parent !== null && u.parent.f & fo; )
        u = u.parent;
      const c = () => {
        o && Fi(n(...o), t) && e(null, ...o);
      }, f = u.teardown;
      u.teardown = () => {
        c(), f?.();
      };
    };
  }), t;
}
function tl(t) {
  return function(...e) {
    var n = (
      /** @type {Event} */
      e[0]
    );
    return n.preventDefault(), t?.apply(this, e);
  };
}
function gt(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Vt
  ), n = e.l.u;
  if (!n) return;
  let r = () => se(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = Ba(() => {
      let o = !1;
      const u = e.s;
      for (const c in u)
        u[c] !== a[c] && (a[c] = u[c], o = !0);
      return o && i++, i;
    });
    r = () => l(s);
  }
  n.b.length && po(() => {
    ki(e, r), Cr(n.b);
  }), ct(() => {
    const i = ae(() => n.m.map(go));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && ct(() => {
    ki(e, r), Cr(n.a);
  });
}
function ki(t, e) {
  if (t.l.s)
    for (const n of t.l.s) l(n);
  e();
}
function Lt(t, e) {
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    t.$$events?.[e.type]
  ), r = Dn(n) ? n.slice() : n == null ? [] : [n];
  for (var i of r)
    i.call(this, e);
}
const nl = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function rl(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    nl
  );
}
const il = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return l(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Qt;
      try {
        bi(t.parent_effect), t.special[e] = w(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          Ia
        );
      } finally {
        bi(r);
      }
    }
    return t.special[e](n), vi(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  deleteProperty(t, e) {
    return t.exclude.includes(e) || (t.exclude.push(e), vi(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Ci(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: Sr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Qt
      )
    },
    il
  );
}
const al = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (an(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      an(i) && (i = i());
      const a = Kn(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (an(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Kn(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === ei || e === La) return !1;
    for (let n of t.props)
      if (an(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (an(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function sl(...t) {
  return new Proxy({ props: t }, al);
}
function w(t, e, n, r) {
  var i = !Ra || (n & bo) !== 0, a = (n & vo) !== 0, s = (n & xo) !== 0, o = (
    /** @type {V} */
    r
  ), u = !0, c = () => (u && (u = !1, o = s ? ae(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o);
  let f;
  if (a) {
    var v = ei in t || La in t;
    f = Kn(t, e)?.set ?? (v && e in t ? (h) => t[e] = h : void 0);
  }
  var g, D = !1;
  a ? [g, D] = To(() => (
    /** @type {V} */
    t[e]
  )) : g = /** @type {V} */
  t[e], g === void 0 && r !== void 0 && (g = c(), f && (i && mo(), f(g)));
  var F;
  if (i ? F = () => {
    var h = (
      /** @type {V} */
      t[e]
    );
    return h === void 0 ? c() : (u = !0, h);
  } : F = () => {
    var h = (
      /** @type {V} */
      t[e]
    );
    return h !== void 0 && (o = /** @type {V} */
    void 0), h === void 0 ? o : h;
  }, i && (n & Ia) === 0)
    return F;
  if (f) {
    var A = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(h, m) {
        return arguments.length > 0 ? ((!i || !m || A || D) && f(m ? F() : h), h) : F();
      })
    );
  }
  var _ = !1, b = ((n & _o) !== 0 ? Ba : _t)(() => (_ = !1, F()));
  a && l(b);
  var d = (
    /** @type {Effect} */
    Qt
  );
  return (
    /** @type {() => V} */
    (function(h, m) {
      if (arguments.length > 0) {
        const p = m ? l(b) : i && a ? Qn(h) : h;
        return R(b, p), _ = !0, o !== void 0 && (o = p), h;
      }
      return yo && _ || (d.f & Fa) !== 0 ? b.v : l(b);
    })
  );
}
function Sn(t) {
  Vt === null && ti(), Ra && Vt.l !== null ? ll(Vt).m.push(t) : ct(() => {
    const e = ae(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Xa(t) {
  Vt === null && ti(), Sn(() => () => ae(t));
}
function ol(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Ht() {
  const t = Vt;
  return t === null && ti(), (e, n, r) => {
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      t.s.$$events?.[
        /** @type {string} */
        e
      ]
    );
    if (i) {
      const a = Dn(i) ? i.slice() : [i], s = ol(
        /** @type {string} */
        e,
        n,
        r
      );
      for (const o of a)
        o.call(t.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function ll(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
const ul = [
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
], Si = {
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
ul.reduce((t, { color: e, primary: n, secondary: r }) => ({
  ...t,
  [e]: {
    primary: Si[e][n],
    secondary: Si[e][r]
  }
}), {});
var Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var mr, Bi;
function hl() {
  if (Bi) return mr;
  Bi = 1;
  var t = function(d) {
    return e(d) && !n(d);
  };
  function e(b) {
    return !!b && typeof b == "object";
  }
  function n(b) {
    var d = Object.prototype.toString.call(b);
    return d === "[object RegExp]" || d === "[object Date]" || a(b);
  }
  var r = typeof Symbol == "function" && Symbol.for, i = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
  function a(b) {
    return b.$$typeof === i;
  }
  function s(b) {
    return Array.isArray(b) ? [] : {};
  }
  function o(b, d) {
    return d.clone !== !1 && d.isMergeableObject(b) ? A(s(b), b, d) : b;
  }
  function u(b, d, h) {
    return b.concat(d).map(function(m) {
      return o(m, h);
    });
  }
  function c(b, d) {
    if (!d.customMerge)
      return A;
    var h = d.customMerge(b);
    return typeof h == "function" ? h : A;
  }
  function f(b) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(b).filter(function(d) {
      return Object.propertyIsEnumerable.call(b, d);
    }) : [];
  }
  function v(b) {
    return Object.keys(b).concat(f(b));
  }
  function g(b, d) {
    try {
      return d in b;
    } catch {
      return !1;
    }
  }
  function D(b, d) {
    return g(b, d) && !(Object.hasOwnProperty.call(b, d) && Object.propertyIsEnumerable.call(b, d));
  }
  function F(b, d, h) {
    var m = {};
    return h.isMergeableObject(b) && v(b).forEach(function(p) {
      m[p] = o(b[p], h);
    }), v(d).forEach(function(p) {
      D(b, p) || (g(b, p) && h.isMergeableObject(d[p]) ? m[p] = c(p, h)(b[p], d[p], h) : m[p] = o(d[p], h));
    }), m;
  }
  function A(b, d, h) {
    h = h || {}, h.arrayMerge = h.arrayMerge || u, h.isMergeableObject = h.isMergeableObject || t, h.cloneUnlessOtherwiseSpecified = o;
    var m = Array.isArray(d), p = Array.isArray(b), y = m === p;
    return y ? m ? h.arrayMerge(b, d, h) : F(b, d, h) : o(d, h);
  }
  A.all = function(d, h) {
    if (!Array.isArray(d))
      throw new Error("first argument should be an array");
    return d.reduce(function(m, p) {
      return A(m, p, h);
    }, {});
  };
  var _ = A;
  return mr = _, mr;
}
var fl = hl();
const dl = /* @__PURE__ */ cl(fl);
var Pr = function(t, e) {
  return Pr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Pr(t, e);
};
function or(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Pr(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var we = function() {
  return we = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, we.apply(this, arguments);
};
function pl(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function vr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function br(t, e) {
  var n = e && e.cache ? e.cache : yl, r = e && e.serializer ? e.serializer : _l, i = e && e.strategy ? e.strategy : vl;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function gl(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ml(t, e, n, r) {
  var i = gl(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function qa(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Va(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function vl(t, e) {
  var n = t.length === 1 ? ml : qa;
  return Va(t, this, n, e.cache.create(), e.serializer);
}
function bl(t, e) {
  return Va(t, this, qa, e.cache.create(), e.serializer);
}
var _l = function() {
  return JSON.stringify(arguments);
}, xl = (
  /** @class */
  (function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  })()
), yl = {
  create: function() {
    return new xl();
  }
}, _r = {
  variadic: bl
}, me;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(me || (me = {}));
var Ue;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(Ue || (Ue = {}));
var un;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(un || (un = {}));
function Ii(t) {
  return t.type === Ue.literal;
}
function wl(t) {
  return t.type === Ue.argument;
}
function Ya(t) {
  return t.type === Ue.number;
}
function Za(t) {
  return t.type === Ue.date;
}
function Ka(t) {
  return t.type === Ue.time;
}
function Qa(t) {
  return t.type === Ue.select;
}
function Ja(t) {
  return t.type === Ue.plural;
}
function El(t) {
  return t.type === Ue.pound;
}
function $a(t) {
  return t.type === Ue.tag;
}
function es(t) {
  return !!(t && typeof t == "object" && t.type === un.number);
}
function Hr(t) {
  return !!(t && typeof t == "object" && t.type === un.dateTime);
}
var ts = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Dl = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Al(t) {
  var e = {};
  return t.replace(Dl, function(n) {
    var r = n.length;
    switch (n[0]) {
      // Era
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      // Quarter
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      // Month
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      // Period
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      // Second
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: milliseconds in day short, long
      case "v":
      // 1, 4: generic non-location format
      case "V":
      // 1, 2, 3, 4: time zone ID or city
      case "X":
      // 1, 2, 3, 4: The ISO8601 varios formats
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var Fl = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function kl(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Fl).filter(function(g) {
    return g.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], u = s.slice(1), c = 0, f = u; c < f.length; c++) {
      var v = f[c];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: u });
  }
  return n;
}
function Cl(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ri = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ns = /^(@+)?(\+|#+)?[rs]?$/g, Sl = /(\*)(0+)|(#+)(0+)|(0+)/g, rs = /^(0+)$/;
function Li(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(ns, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function is(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Tl(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !rs.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Oi(t) {
  var e = {}, n = is(t);
  return n || e;
}
function Bl(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = Cl(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = we(we(we({}, e), { notation: "scientific" }), i.options.reduce(function(u, c) {
          return we(we({}, u), Oi(c));
        }, {}));
        continue;
      case "engineering":
        e = we(we(we({}, e), { notation: "engineering" }), i.options.reduce(function(u, c) {
          return we(we({}, u), Oi(c));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Sl, function(u, c, f, v, g, D) {
          if (c)
            e.minimumIntegerDigits = f.length;
          else {
            if (v && g)
              throw new Error("We currently do not support maximum integer digits");
            if (D)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (rs.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ri.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ri, function(u, c, f, v, g, D) {
        return f === "*" ? e.minimumFractionDigits = c.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : g && D ? (e.minimumFractionDigits = g.length, e.maximumFractionDigits = g.length + D.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = we(we({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = we(we({}, e), Li(a)));
      continue;
    }
    if (ns.test(i.stem)) {
      e = we(we({}, e), Li(i.stem));
      continue;
    }
    var s = is(i.stem);
    s && (e = we(we({}, e), s));
    var o = Tl(i.stem);
    o && (e = we(we({}, e), o));
  }
  return e;
}
var Mn = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Il(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), u = "a", c = Rl(e);
      for ((c == "H" || c == "k") && (o = 0); o-- > 0; )
        n += u;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Rl(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = Mn[r || ""] || Mn[n || ""] || Mn["".concat(n, "-001")] || Mn["001"];
  return i[0];
}
var xr, Ll = new RegExp("^".concat(ts.source, "*")), Ol = new RegExp("".concat(ts.source, "*$"));
function be(t, e) {
  return { start: t, end: e };
}
var Nl = !!String.prototype.startsWith && "_a".startsWith("a", 1), Pl = !!String.fromCodePoint, Hl = !!Object.fromEntries, Ml = !!String.prototype.codePointAt, zl = !!String.prototype.trimStart, Ul = !!String.prototype.trimEnd, Gl = !!Number.isSafeInteger, Wl = Gl ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Mr = !0;
try {
  var jl = ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Mr = ((xr = jl.exec("a")) === null || xr === void 0 ? void 0 : xr[0]) === "a";
} catch {
  Mr = !1;
}
var Ni = Nl ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), zr = Pl ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, s; i > a; ) {
      if (s = e[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), Pi = (
  // native
  Hl ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], o = a[1];
        n[s] = o;
      }
      return n;
    }
  )
), as = Ml ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), Xl = zl ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ll, "");
  }
), ql = Ul ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ol, "");
  }
);
function ss(t, e) {
  return new RegExp(t, e);
}
var Ur;
if (Mr) {
  var Hi = ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ur = function(e, n) {
    var r;
    Hi.lastIndex = n;
    var i = Hi.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ur = function(e, n) {
    for (var r = []; ; ) {
      var i = as(e, n);
      if (i === void 0 || os(i) || Kl(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return zr.apply(void 0, r);
  };
var Vl = (
  /** @class */
  (function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var s = this.parseArgument(e, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: Ue.pound,
              location: be(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(me.UNMATCHED_CLOSING_TAG, be(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Gr(this.peek() || 0)) {
            var s = this.parseTag(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Ue.literal,
            value: "<".concat(i, "/>"),
            location: be(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Gr(this.char()))
            return this.error(me.INVALID_TAG, be(o, this.clonePosition()));
          var u = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(me.UNMATCHED_CLOSING_TAG, be(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ue.tag,
              value: i,
              children: s,
              location: be(r, this.clonePosition())
            },
            err: null
          } : this.error(me.INVALID_TAG, be(o, this.clonePosition())));
        } else
          return this.error(me.UNCLOSED_TAG, be(r, this.clonePosition()));
      } else
        return this.error(me.INVALID_TAG, be(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Zl(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(e, n);
        if (s) {
          i += s;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          i += o;
          continue;
        }
        break;
      }
      var u = be(r, this.clonePosition());
      return {
        val: { type: Ue.literal, value: i, location: u },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Yl(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        // '{', '<', '>', '}'
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return zr.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), zr(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(me.EMPTY_ARGUMENT, be(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(me.MALFORMED_ARGUMENT, be(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(r, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: Ue.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: be(r, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(me.MALFORMED_ARGUMENT, be(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ur(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = be(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (o) {
        case "":
          return this.error(me.EXPECT_ARGUMENT_TYPE, be(s, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var g = ql(v.val);
            if (g.length === 0)
              return this.error(me.EXPECT_ARGUMENT_STYLE, be(this.clonePosition(), this.clonePosition()));
            var D = be(f, this.clonePosition());
            c = { style: g, styleLocation: D };
          }
          var F = this.tryParseArgumentClose(i);
          if (F.err)
            return F;
          var A = be(i, this.clonePosition());
          if (c && Ni(c?.style, "::", 0)) {
            var _ = Xl(c.style.slice(2));
            if (o === "number") {
              var v = this.parseNumberSkeletonFromString(_, c.styleLocation);
              return v.err ? v : {
                val: { type: Ue.number, value: r, location: A, style: v.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(me.EXPECT_DATE_TIME_SKELETON, A);
              var b = _;
              this.locale && (b = Il(_, this.locale));
              var g = {
                type: un.dateTime,
                pattern: b,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Al(b) : {}
              }, d = o === "date" ? Ue.date : Ue.time;
              return {
                val: { type: d, value: r, location: A, style: g },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? Ue.number : o === "date" ? Ue.date : Ue.time,
              value: r,
              location: A,
              style: (a = c?.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var h = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(me.EXPECT_SELECT_ARGUMENT_OPTIONS, be(h, we({}, h)));
          this.bumpSpace();
          var m = this.parseIdentifierIfPossible(), p = 0;
          if (o !== "select" && m.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, be(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(me.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, me.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), m = this.parseIdentifierIfPossible(), p = v.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, o, n, m);
          if (y.err)
            return y;
          var F = this.tryParseArgumentClose(i);
          if (F.err)
            return F;
          var E = be(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: Ue.select,
              value: r,
              options: Pi(y.val),
              location: E
            },
            err: null
          } : {
            val: {
              type: Ue.plural,
              value: r,
              options: Pi(y.val),
              offset: p,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: E
            },
            err: null
          };
        }
        default:
          return this.error(me.INVALID_ARGUMENT_TYPE, be(s, u));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(me.EXPECT_ARGUMENT_CLOSING_BRACE, be(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(me.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, be(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = kl(e);
      } catch {
        return this.error(me.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: un.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Bl(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, o = [], u = /* @__PURE__ */ new Set(), c = i.value, f = i.location; ; ) {
        if (c.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var g = this.tryParseDecimalInteger(me.EXPECT_PLURAL_ARGUMENT_SELECTOR, me.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (g.err)
              return g;
            f = be(v, this.clonePosition()), c = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (u.has(c))
          return this.error(n === "select" ? me.DUPLICATE_SELECT_ARGUMENT_SELECTOR : me.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        c === "other" && (s = !0), this.bumpSpace();
        var D = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? me.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : me.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, be(this.clonePosition(), this.clonePosition()));
        var F = this.parseMessage(e + 1, n, r);
        if (F.err)
          return F;
        var A = this.tryParseArgumentClose(D);
        if (A.err)
          return A;
        o.push([
          c,
          {
            value: F.val,
            location: be(D, this.clonePosition())
          }
        ]), u.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, f = a.location;
      }
      return o.length === 0 ? this.error(n === "select" ? me.EXPECT_SELECT_ARGUMENT_SELECTOR : me.EXPECT_PLURAL_ARGUMENT_SELECTOR, be(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(me.MISSING_OTHER_CLAUSE, be(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, s = s * 10 + (o - 48), this.bump();
        else
          break;
      }
      var u = be(i, this.clonePosition());
      return a ? (s *= r, Wl(s) ? { val: s, err: null } : this.error(n, u)) : this.error(e, u);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = as(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Ni(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && os(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  })()
);
function Gr(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Yl(t) {
  return Gr(t) || t === 47;
}
function Zl(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function os(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Kl(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Wr(t) {
  t.forEach(function(e) {
    if (delete e.location, Qa(e) || Ja(e))
      for (var n in e.options)
        delete e.options[n].location, Wr(e.options[n].value);
    else Ya(e) && es(e.style) || (Za(e) || Ka(e)) && Hr(e.style) ? delete e.style.location : $a(e) && Wr(e.children);
  });
}
function Ql(t, e) {
  e === void 0 && (e = {}), e = we({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Vl(t, e).parse();
  if (n.err) {
    var r = SyntaxError(me[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e?.captureLocation || Wr(n.val), n.val;
}
var cn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(cn || (cn = {}));
var lr = (
  /** @class */
  (function(t) {
    or(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  })(Error)
), Mi = (
  /** @class */
  (function(t) {
    or(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), cn.INVALID_VALUE, a) || this;
    }
    return e;
  })(lr)
), Jl = (
  /** @class */
  (function(t) {
    or(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), cn.INVALID_VALUE, i) || this;
    }
    return e;
  })(lr)
), $l = (
  /** @class */
  (function(t) {
    or(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), cn.MISSING_VALUE, r) || this;
    }
    return e;
  })(lr)
), at;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(at || (at = {}));
function eu(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== at.literal || n.type !== at.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function tu(t) {
  return typeof t == "function";
}
function Xn(t, e, n, r, i, a, s) {
  if (t.length === 1 && Ii(t[0]))
    return [
      {
        type: at.literal,
        value: t[0].value
      }
    ];
  for (var o = [], u = 0, c = t; u < c.length; u++) {
    var f = c[u];
    if (Ii(f)) {
      o.push({
        type: at.literal,
        value: f.value
      });
      continue;
    }
    if (El(f)) {
      typeof a == "number" && o.push({
        type: at.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = f.value;
    if (!(i && v in i))
      throw new $l(v, s);
    var g = i[v];
    if (wl(f)) {
      (!g || typeof g == "string" || typeof g == "number") && (g = typeof g == "string" || typeof g == "number" ? String(g) : ""), o.push({
        type: typeof g == "string" ? at.literal : at.object,
        value: g
      });
      continue;
    }
    if (Za(f)) {
      var D = typeof f.style == "string" ? r.date[f.style] : Hr(f.style) ? f.style.parsedOptions : void 0;
      o.push({
        type: at.literal,
        value: n.getDateTimeFormat(e, D).format(g)
      });
      continue;
    }
    if (Ka(f)) {
      var D = typeof f.style == "string" ? r.time[f.style] : Hr(f.style) ? f.style.parsedOptions : r.time.medium;
      o.push({
        type: at.literal,
        value: n.getDateTimeFormat(e, D).format(g)
      });
      continue;
    }
    if (Ya(f)) {
      var D = typeof f.style == "string" ? r.number[f.style] : es(f.style) ? f.style.parsedOptions : void 0;
      D && D.scale && (g = g * (D.scale || 1)), o.push({
        type: at.literal,
        value: n.getNumberFormat(e, D).format(g)
      });
      continue;
    }
    if ($a(f)) {
      var F = f.children, A = f.value, _ = i[A];
      if (!tu(_))
        throw new Jl(A, "function", s);
      var b = Xn(F, e, n, r, i, a), d = _(b.map(function(p) {
        return p.value;
      }));
      Array.isArray(d) || (d = [d]), o.push.apply(o, d.map(function(p) {
        return {
          type: typeof p == "string" ? at.literal : at.object,
          value: p
        };
      }));
    }
    if (Qa(f)) {
      var h = f.options[g] || f.options.other;
      if (!h)
        throw new Mi(f.value, g, Object.keys(f.options), s);
      o.push.apply(o, Xn(h.value, e, n, r, i));
      continue;
    }
    if (Ja(f)) {
      var h = f.options["=".concat(g)];
      if (!h) {
        if (!Intl.PluralRules)
          throw new lr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, cn.MISSING_INTL_API, s);
        var m = n.getPluralRules(e, { type: f.pluralType }).select(g - (f.offset || 0));
        h = f.options[m] || f.options.other;
      }
      if (!h)
        throw new Mi(f.value, g, Object.keys(f.options), s);
      o.push.apply(o, Xn(h.value, e, n, r, i, g - (f.offset || 0)));
      continue;
    }
  }
  return eu(o);
}
function nu(t, e) {
  return e ? we(we(we({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = we(we({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function ru(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = nu(t[r], e[r]), n;
  }, we({}, t)) : t;
}
function yr(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function iu(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: br(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, vr([void 0], n, !1)))();
    }, {
      cache: yr(t.number),
      strategy: _r.variadic
    }),
    getDateTimeFormat: br(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, vr([void 0], n, !1)))();
    }, {
      cache: yr(t.dateTime),
      strategy: _r.variadic
    }),
    getPluralRules: br(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, vr([void 0], n, !1)))();
    }, {
      cache: yr(t.pluralRules),
      strategy: _r.variadic
    })
  };
}
var au = (
  /** @class */
  (function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var c = a.formatToParts(u);
        if (c.length === 1)
          return c[0].value;
        var f = c.reduce(function(v, g) {
          return !v.length || g.type !== at.literal || typeof v[v.length - 1] != "string" ? v.push(g.value) : v[v.length - 1] += g.value, v;
        }, []);
        return f.length <= 1 ? f[0] || "" : f;
      }, this.formatToParts = function(u) {
        return Xn(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = a.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var o = pl(s, ["formatters"]);
        this.ast = t.__parse(e, we(we({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = ru(t.formats, r), this.formatters = i && i.formatters || iu(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Ql, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  })()
);
function su(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const a = n.slice(i, n.length).join(".");
        if (a in r) {
          r = r[a];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Ot = {}, ou = (t, e, n) => n && (e in Ot || (Ot[e] = {}), t in Ot[e] || (Ot[e][t] = n), n), ls = (t, e) => {
  if (e == null)
    return;
  if (e in Ot && t in Ot[e])
    return Ot[e][t];
  const n = ur(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = uu(i, t);
    if (a)
      return ou(t, e, a);
  }
};
let ai;
const Tn = Cn({});
function lu(t) {
  return ai[t] || null;
}
function us(t) {
  return t in ai;
}
function uu(t, e) {
  if (!us(t))
    return null;
  const n = lu(t);
  return su(n, e);
}
function cu(t) {
  if (t == null)
    return;
  const e = ur(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (us(r))
      return r;
  }
}
function hu(t, ...e) {
  delete Ot[t], Tn.update((n) => (n[t] = dl.all([n[t] || {}, ...e]), n));
}
dn(
  [Tn],
  ([t]) => Object.keys(t)
);
Tn.subscribe((t) => ai = t);
const qn = {};
function fu(t, e) {
  qn[t].delete(e), qn[t].size === 0 && delete qn[t];
}
function cs(t) {
  return qn[t];
}
function du(t) {
  return ur(t).map((e) => {
    const n = cs(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function jr(t) {
  return t == null ? !1 : ur(t).some(
    (e) => {
      var n;
      return (n = cs(e)) == null ? void 0 : n.size;
    }
  );
}
function pu(t, e) {
  return Promise.all(
    e.map((r) => (fu(t, r), r().then((i) => i.default || i)))
  ).then((r) => hu(t, ...r));
}
const bn = {};
function hs(t) {
  if (!jr(t))
    return t in bn ? bn[t] : Promise.resolve();
  const e = du(t);
  return bn[t] = Promise.all(
    e.map(
      ([n, r]) => pu(n, r)
    )
  ).then(() => {
    if (jr(t))
      return hs(t);
    delete bn[t];
  }), bn[t];
}
const gu = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, mu = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: gu,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, vu = mu;
function hn() {
  return vu;
}
const wr = Cn(!1);
var bu = Object.defineProperty, _u = Object.defineProperties, xu = Object.getOwnPropertyDescriptors, zi = Object.getOwnPropertySymbols, yu = Object.prototype.hasOwnProperty, wu = Object.prototype.propertyIsEnumerable, Ui = (t, e, n) => e in t ? bu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Eu = (t, e) => {
  for (var n in e || (e = {}))
    yu.call(e, n) && Ui(t, n, e[n]);
  if (zi)
    for (var n of zi(e))
      wu.call(e, n) && Ui(t, n, e[n]);
  return t;
}, Du = (t, e) => _u(t, xu(e));
let Xr;
const er = Cn(null);
function Gi(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function ur(t, e = hn().fallbackLocale) {
  const n = Gi(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Gi(e)])] : n;
}
function $t() {
  return Xr ?? void 0;
}
er.subscribe((t) => {
  Xr = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Au = (t) => {
  if (t && cu(t) && jr(t)) {
    const { loadingDelay: e } = hn();
    let n;
    return typeof window < "u" && $t() != null && e ? n = window.setTimeout(
      () => wr.set(!0),
      e
    ) : wr.set(!0), hs(t).then(() => {
      er.set(t);
    }).finally(() => {
      clearTimeout(n), wr.set(!1);
    });
  }
  return er.set(t);
}, pn = Du(Eu({}, er), {
  set: Au
}), cr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Fu = Object.defineProperty, tr = Object.getOwnPropertySymbols, fs = Object.prototype.hasOwnProperty, ds = Object.prototype.propertyIsEnumerable, Wi = (t, e, n) => e in t ? Fu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, si = (t, e) => {
  for (var n in e || (e = {}))
    fs.call(e, n) && Wi(t, n, e[n]);
  if (tr)
    for (var n of tr(e))
      ds.call(e, n) && Wi(t, n, e[n]);
  return t;
}, gn = (t, e) => {
  var n = {};
  for (var r in t)
    fs.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && tr)
    for (var r of tr(t))
      e.indexOf(r) < 0 && ds.call(t, r) && (n[r] = t[r]);
  return n;
};
const wn = (t, e) => {
  const { formats: n } = hn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, ku = cr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = gn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = wn("number", r)), new Intl.NumberFormat(n, i);
  }
), Cu = cr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = gn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = wn("date", r) : Object.keys(i).length === 0 && (i = wn("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Su = cr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = gn(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = wn("time", r) : Object.keys(i).length === 0 && (i = wn("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Tu = (t = {}) => {
  var e = t, {
    locale: n = $t()
  } = e, r = gn(e, [
    "locale"
  ]);
  return ku(si({ locale: n }, r));
}, Bu = (t = {}) => {
  var e = t, {
    locale: n = $t()
  } = e, r = gn(e, [
    "locale"
  ]);
  return Cu(si({ locale: n }, r));
}, Iu = (t = {}) => {
  var e = t, {
    locale: n = $t()
  } = e, r = gn(e, [
    "locale"
  ]);
  return Su(si({ locale: n }, r));
}, Ru = cr(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = $t()) => new au(t, e, hn().formats, {
    ignoreTag: hn().ignoreTag
  })
), Lu = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: o,
    locale: u = $t(),
    default: c
  } = s;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = ls(t, u);
  if (!f)
    f = (a = (i = (r = (n = hn()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: u, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!o)
    return f;
  let v = f;
  try {
    v = Ru(f, u).format(o);
  } catch (g) {
    g instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      g.message
    );
  }
  return v;
}, Ou = (t, e) => Iu(e).format(t), Nu = (t, e) => Bu(e).format(t), Pu = (t, e) => Tu(e).format(t), Hu = (t, e = $t()) => ls(t, e);
dn([pn, Tn], () => Lu);
dn([pn], () => Ou);
dn([pn], () => Nu);
dn([pn], () => Pu);
dn([pn, Tn], () => Hu);
const Mu = "__i18n__", zu = [
  "label",
  "info",
  "placeholder",
  "description",
  "title",
  "value"
];
class Vn extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Uu(t, e) {
  if (window.__gradio_space__ == null)
    throw new Vn("Must be on Spaces to share.");
  let n, r, i;
  {
    let u;
    if (typeof t == "object" && t.path)
      u = t.path;
    else if (typeof t == "string")
      u = t;
    else
      throw new Error("Invalid data format for base64 type");
    n = Gu(u), r = u.split(";")[0].split(":")[1], i = "file." + r.split("/")[1];
  }
  const a = new File([n], i, { type: r }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: a,
    headers: {
      "Content-Type": a.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if (s.headers.get("content-type")?.includes("application/json")) {
      const u = await s.json();
      throw new Vn(`Upload failed: ${u.error}`);
    }
    throw new Vn("Upload failed.");
  }
  return await s.text();
}
function Gu(t) {
  for (var e = t.split(","), n = e[0].match(/:(.*?);/)[1], r = atob(e[1]), i = r.length, a = new Uint8Array(i); i--; )
    a[i] = r.charCodeAt(i);
  return new Blob([a], { type: n });
}
const Wu = typeof window < "u", ju = [
  "elem_id",
  "elem_classes",
  "visible",
  "interactive",
  "server_fns",
  "server",
  "id",
  "target",
  "theme_mode",
  "version",
  "root",
  "autoscroll",
  "max_file_size",
  "formatter",
  "client",
  "load_component",
  "scale",
  "min_width",
  "theme",
  "padding",
  "loading_status",
  "label",
  "show_label",
  "validation_error",
  "show_progress",
  "api_prefix",
  "container",
  "attached_events",
  "register_component",
  "dispatcher"
];
function Xu(t) {
  return typeof t == "string" && t.includes(Mu);
}
class qu {
  load_component;
  #e = nt(Qn({}));
  get shared() {
    return l(this.#e);
  }
  set shared(e) {
    R(this.#e, e, !0);
  }
  #n = nt(Qn({}));
  get props() {
    return l(this.#n);
  }
  set props(e) {
    R(this.#n, e, !0);
  }
  #t = nt((e) => e);
  get i18n() {
    return l(this.#t);
  }
  set i18n(e) {
    R(this.#t, e, !0);
  }
  translatable_props = {};
  dispatcher;
  last_update = null;
  shared_props = ju;
  register_component;
  constructor(e, n) {
    for (const r in e.shared_props)
      this.shared[r] = e.shared_props[r];
    for (const r in e.props)
      this.props[r] = e.props[r];
    if (n)
      for (const r in n)
        this.props[r] === void 0 && (this.props[r] = n[r]);
    this.i18n = this.props.i18n ?? ((r) => r);
    for (const r of zu)
      this.shared[r] = this._translate_and_store(
        "shared",
        r,
        // @ts-ignore
        e.shared_props[r]
      ), this.props[r] = this._translate_and_store(
        "props",
        r,
        // @ts-ignore
        e.props[r]
      );
    if (this.load_component = this.shared.load_component, !Wu || e.props?.__GRADIO_BROWSER_TEST__) {
      this.dispatcher = () => {
      };
      return;
    }
    this.register_component = this.shared.register_component || (() => {
    }), this.dispatcher = this.shared.dispatcher || (() => {
    }), this.register_component(
      e.shared_props.id,
      // @ts-ignore
      this.set_data.bind(this),
      this.get_data.bind(this)
    ), ct(() => {
      for (const r in e.shared_props)
        this._is_i18n_managed(`shared.${r}`, e.shared_props[r]) || (this.shared[r] = e.shared_props[r]);
      for (const r in e.props)
        this._is_i18n_managed(`props.${r}`, e.props[r]) || (this.props[r] = e.props[r]);
      this.register_component(
        e.shared_props.id,
        // @ts-ignore
        this.set_data.bind(this),
        this.get_data.bind(this)
      ), ae(() => {
        this.shared.id = e.shared_props.id;
      });
    }), Object.keys(this.translatable_props).length > 0 && pn.subscribe(() => {
      for (const [r, i] of Object.entries(this.translatable_props)) {
        const [a, s] = r.split("."), o = this.i18n(i);
        a === "shared" ? this.shared[s] = o : this.props[s] = o;
      }
    });
  }
  // check if props are translatable
  _is_i18n_managed(e, n) {
    const r = this.translatable_props[e];
    return r ? n === r ? !0 : (delete this.translatable_props[e], !1) : !1;
  }
  _translate_and_store(e, n, r) {
    if (typeof r != "string") return r;
    const i = this.i18n(r);
    return i !== r && (this.translatable_props[`${e}.${n}`] = r), i;
  }
  dispatch(e, n) {
    this.dispatcher(this.shared.id, e, n);
  }
  async get_data() {
    return Fo(this.props);
  }
  update(e) {
    this.set_data(e);
  }
  set_data(e) {
    for (const n in e) {
      const r = e[n], i = Xu(r) ? this._translate_and_store(this.shared_props.includes(n) ? "shared" : "props", n, r) : r;
      if (this.shared_props.includes(n)) {
        const a = n;
        this.shared[a] = i;
        continue;
      }
      this.props[n] = i;
    }
  }
}
wo();
var Vu = /* @__PURE__ */ We('<svg class="resize-handle svelte-1stq1b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line><line x1="5" y1="9" x2="9" y2="5" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line></svg>'), Yu = /* @__PURE__ */ q("<!> <!>", 1), Zu = /* @__PURE__ */ q('<div class="placeholder svelte-1stq1b1"></div>'), Ku = /* @__PURE__ */ q("<!> <!>", 1);
function Qu(t, e) {
  Je(e, !1);
  let n = w(e, "height", 8, void 0), r = w(e, "min_height", 8, void 0), i = w(e, "max_height", 8, void 0), a = w(e, "width", 8, void 0), s = w(e, "elem_id", 8, ""), o = w(e, "elem_classes", 24, () => []), u = w(e, "variant", 8, "solid"), c = w(e, "border_mode", 8, "base"), f = w(e, "padding", 8, !0), v = w(e, "type", 8, "normal"), g = w(e, "test_id", 8, void 0), D = w(e, "explicit_call", 8, !1), F = w(e, "container", 8, !0), A = w(e, "visible", 8, !0), _ = w(e, "allow_overflow", 8, !0), b = w(e, "overflow_behavior", 8, "auto"), d = w(e, "scale", 8, null), h = w(e, "min_width", 8, 0), m = w(e, "flex", 12, !1), p = w(e, "resizable", 8, !1), y = w(e, "rtl", 8, !1), E = w(e, "fullscreen", 12, !1), k = w(e, "label", 8, void 0), x = ee(E()), S = ee(), T = v() === "fieldset" ? "fieldset" : "div", O = ee(0), U = ee(0), W = ee(null);
  function ue(xe) {
    E() && xe.key === "Escape" && E(!1);
  }
  const oe = (xe) => {
    if (xe !== void 0) {
      if (typeof xe == "number")
        return xe + "px";
      if (typeof xe == "string")
        return xe;
    }
  }, Fe = (xe) => {
    let fe = xe.clientY;
    const Ne = (re) => {
      const X = re.clientY - fe;
      fe = re.clientY, Ce(S, l(S).style.height = `${l(S).offsetHeight + X}px`);
    }, Ae = () => {
      window.removeEventListener("mousemove", Ne), window.removeEventListener("mouseup", Ae);
    };
    window.addEventListener("mousemove", Ne), window.addEventListener("mouseup", Ae);
  };
  pt(
    () => (se(E()), l(x), l(S)),
    () => {
      E() !== l(x) && (R(x, E()), E() ? (R(W, l(S).getBoundingClientRect()), R(O, l(S).offsetHeight), R(U, l(S).offsetWidth), window.addEventListener("keydown", ue)) : (R(W, null), window.removeEventListener("keydown", ue)));
    }
  ), pt(() => se(A()), () => {
    A() || m(!1);
  }), Jt(), gt();
  var K = qe(), ne = _e(K);
  {
    var De = (xe) => {
      var fe = Ku(), Ne = _e(fe);
      Wo(Ne, () => T, !1, (X, Q) => {
        Zt(X, (M) => R(S, M), () => l(S)), Nr(
          X,
          (M, te) => ({
            "data-testid": g(),
            id: s(),
            class: `block ${M ?? ""}`,
            dir: y() ? "rtl" : "ltr",
            "aria-label": k(),
            style: "",
            [sn]: {
              hidden: A() === "hidden",
              padded: f(),
              flex: m(),
              border_focus: c() === "focus",
              border_contrast: c() === "contrast",
              "hide-container": !D() && !F(),
              fullscreen: E(),
              animating: E() && l(W) !== null,
              "auto-margin": d() === null
            },
            [on]: te
          }),
          [
            () => (se(o()), ae(() => o()?.join(" ") || "")),
            () => ({
              height: (se(E()), se(n()), ae(() => E() ? void 0 : oe(n()))),
              "min-height": (se(E()), se(r()), ae(() => E() ? void 0 : oe(r()))),
              "max-height": (se(E()), se(i()), ae(() => E() ? void 0 : oe(i()))),
              "--start-top": (l(W), ae(() => l(W) ? `${l(W).top}px` : "0px")),
              "--start-left": (l(W), ae(() => l(W) ? `${l(W).left}px` : "0px")),
              "--start-width": (l(W), ae(() => l(W) ? `${l(W).width}px` : "0px")),
              "--start-height": (l(W), ae(() => l(W) ? `${l(W).height}px` : "0px")),
              width: (se(E()), se(a()), ae(() => E() ? void 0 : typeof a() == "number" ? `calc(min(${a()}px, 100%))` : oe(a()))),
              "border-style": u(),
              overflow: _() ? b() : "hidden",
              "flex-grow": d(),
              "min-width": `calc(min(${h()}px, 100%))`
            })
          ],
          void 0,
          void 0,
          "svelte-1stq1b1"
        );
        var N = Yu(), I = _e(N);
        Pt(I, e, "default", {});
        var L = G(I, 2);
        {
          var P = (M) => {
            var te = Vu();
            ge("mousedown", te, Fe), B(M, te);
          };
          Y(L, (M) => {
            p() && M(P);
          });
        }
        B(Q, N);
      });
      var Ae = G(Ne, 2);
      {
        var re = (X) => {
          var Q = Zu();
          let N;
          J(() => N = lt(Q, "", N, {
            height: l(O) + "px",
            width: l(U) + "px"
          })), B(X, Q);
        };
        Y(Ae, (X) => {
          E() && X(re);
        });
      }
      B(xe, fe);
    };
    Y(ne, (xe) => {
      (A() === !0 || A() === "hidden") && xe(De);
    });
  }
  B(t, K), Qe();
}
function oi() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let en = oi();
function ps(t) {
  en = t;
}
const gs = /[&<>"']/, Ju = new RegExp(gs.source, "g"), ms = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, $u = new RegExp(ms.source, "g"), ec = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ji = (t) => ec[t];
function st(t, e) {
  if (e) {
    if (gs.test(t))
      return t.replace(Ju, ji);
  } else if (ms.test(t))
    return t.replace($u, ji);
  return t;
}
const tc = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function nc(t) {
  return t.replace(tc, (e, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const rc = /(^|[^\[])\^/g;
function Te(t, e) {
  let n = typeof t == "string" ? t : t.source;
  e = e || "";
  const r = {
    replace: (i, a) => {
      let s = typeof a == "string" ? a : a.source;
      return s = s.replace(rc, "$1"), n = n.replace(i, s), r;
    },
    getRegex: () => new RegExp(n, e)
  };
  return r;
}
function Xi(t) {
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const yn = { exec: () => null };
function qi(t, e) {
  const n = t.replace(/\|/g, (a, s, o) => {
    let u = !1, c = s;
    for (; --c >= 0 && o[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), r = n.split(/ \|/);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(/\\\|/g, "|");
  return r;
}
function zn(t, e, n) {
  const r = t.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r && t.charAt(r - i - 1) === e; )
    i++;
  return t.slice(0, r - i);
}
function ic(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    if (t[r] === "\\")
      r++;
    else if (t[r] === e[0])
      n++;
    else if (t[r] === e[1] && (n--, n < 0))
      return r;
  return -1;
}
function Vi(t, e, n, r) {
  const i = e.href, a = e.title ? st(e.title) : null, s = t[1].replace(/\\([\[\]])/g, "$1");
  if (t[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const o = {
      type: "link",
      raw: n,
      href: i,
      title: a,
      text: s,
      tokens: r.inlineTokens(s)
    };
    return r.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: n,
    href: i,
    title: a,
    text: st(s)
  };
}
function ac(t, e) {
  const n = t.match(/^(\s+)(?:```)/);
  if (n === null)
    return e;
  const r = n[1];
  return e.split(`
`).map((i) => {
    const a = i.match(/^\s+/);
    if (a === null)
      return i;
    const [s] = a;
    return s.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
class nr {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(e) {
    this.options = e || en;
  }
  space(e) {
    const n = this.rules.block.newline.exec(e);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(e) {
    const n = this.rules.block.code.exec(e);
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : zn(r, `
`)
      };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const r = n[0], i = ac(r, n[3] || "");
      return {
        type: "code",
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: i
      };
    }
  }
  heading(e) {
    const n = this.rules.block.heading.exec(e);
    if (n) {
      let r = n[2].trim();
      if (/#$/.test(r)) {
        const i = zn(r, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (r = i.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const n = this.rules.block.hr.exec(e);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e);
    if (n) {
      let r = n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = zn(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const a = this.lexer.blockTokens(r);
      return this.lexer.state.top = i, {
        type: "blockquote",
        raw: n[0],
        tokens: a,
        text: r
      };
    }
  }
  list(e) {
    let n = this.rules.block.list.exec(e);
    if (n) {
      let r = n[1].trim();
      const i = r.length > 1, a = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      const s = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", u = "", c = !1;
      for (; e; ) {
        let f = !1;
        if (!(n = s.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = n[0], e = e.substring(o.length);
        let v = n[2].split(`
`, 1)[0].replace(/^\t+/, (b) => " ".repeat(3 * b.length)), g = e.split(`
`, 1)[0], D = 0;
        this.options.pedantic ? (D = 2, u = v.trimStart()) : (D = n[2].search(/[^ ]/), D = D > 4 ? 1 : D, u = v.slice(D), D += n[1].length);
        let F = !1;
        if (!v && /^ *$/.test(g) && (o += g + `
`, e = e.substring(g.length + 1), f = !0), !f) {
          const b = new RegExp(`^ {0,${Math.min(3, D - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), d = new RegExp(`^ {0,${Math.min(3, D - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), h = new RegExp(`^ {0,${Math.min(3, D - 1)}}(?:\`\`\`|~~~)`), m = new RegExp(`^ {0,${Math.min(3, D - 1)}}#`);
          for (; e; ) {
            const p = e.split(`
`, 1)[0];
            if (g = p, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), h.test(g) || m.test(g) || b.test(g) || d.test(e))
              break;
            if (g.search(/[^ ]/) >= D || !g.trim())
              u += `
` + g.slice(D);
            else {
              if (F || v.search(/[^ ]/) >= 4 || h.test(v) || m.test(v) || d.test(v))
                break;
              u += `
` + g;
            }
            !F && !g.trim() && (F = !0), o += p + `
`, e = e.substring(p.length + 1), v = g.slice(D);
          }
        }
        a.loose || (c ? a.loose = !0 : /\n *\n *$/.test(o) && (c = !0));
        let A = null, _;
        this.options.gfm && (A = /^\[[ xX]\] /.exec(u), A && (_ = A[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), a.items.push({
          type: "list_item",
          raw: o,
          task: !!A,
          checked: _,
          loose: !1,
          text: u,
          tokens: []
        }), a.raw += o;
      }
      a.items[a.items.length - 1].raw = o.trimEnd(), a.items[a.items.length - 1].text = u.trimEnd(), a.raw = a.raw.trimEnd();
      for (let f = 0; f < a.items.length; f++)
        if (this.lexer.state.top = !1, a.items[f].tokens = this.lexer.blockTokens(a.items[f].text, []), !a.loose) {
          const v = a.items[f].tokens.filter((D) => D.type === "space"), g = v.length > 0 && v.some((D) => /\n.*\n/.test(D.raw));
          a.loose = g;
        }
      if (a.loose)
        for (let f = 0; f < a.items.length; f++)
          a.items[f].loose = !0;
      return a;
    }
  }
  html(e) {
    const n = this.rules.block.html.exec(e);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(e) {
    const n = this.rules.block.def.exec(e);
    if (n) {
      const r = n[1].toLowerCase().replace(/\s+/g, " "), i = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: r,
        raw: n[0],
        href: i,
        title: a
      };
    }
  }
  table(e) {
    const n = this.rules.block.table.exec(e);
    if (!n || !/[:|]/.test(n[2]))
      return;
    const r = qi(n[1]), i = n[2].replace(/^\||\| *$/g, "").split("|"), a = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [], s = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === i.length) {
      for (const o of i)
        /^ *-+: *$/.test(o) ? s.align.push("right") : /^ *:-+: *$/.test(o) ? s.align.push("center") : /^ *:-+ *$/.test(o) ? s.align.push("left") : s.align.push(null);
      for (const o of r)
        s.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of a)
        s.rows.push(qi(o, s.header.length).map((u) => ({
          text: u,
          tokens: this.lexer.inline(u)
        })));
      return s;
    }
  }
  lheading(e) {
    const n = this.rules.block.lheading.exec(e);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e);
    if (n) {
      const r = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const n = this.rules.block.text.exec(e);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(e) {
    const n = this.rules.inline.escape.exec(e);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: st(n[1])
      };
  }
  tag(e) {
    const n = this.rules.inline.tag.exec(e);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0]
      };
  }
  link(e) {
    const n = this.rules.inline.link.exec(e);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const s = zn(r.slice(0, -1), "\\");
        if ((r.length - s.length) % 2 === 0)
          return;
      } else {
        const s = ic(n[2], "()");
        if (s > -1) {
          const u = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + s;
          n[2] = n[2].substring(0, s), n[0] = n[0].substring(0, u).trim(), n[3] = "";
        }
      }
      let i = n[2], a = "";
      if (this.options.pedantic) {
        const s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        s && (i = s[1], a = s[3]);
      } else
        a = n[3] ? n[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), Vi(n, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(e, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const i = (r[2] || r[1]).replace(/\s+/g, " "), a = n[i.toLowerCase()];
      if (!a) {
        const s = r[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Vi(r, a, r[0], this.lexer);
    }
  }
  emStrong(e, n, r = "") {
    let i = this.rules.inline.emStrongLDelim.exec(e);
    if (!i || i[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const s = [...i[0]].length - 1;
      let o, u, c = s, f = 0;
      const v = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (v.lastIndex = 0, n = n.slice(-1 * e.length + s); (i = v.exec(n)) != null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o)
          continue;
        if (u = [...o].length, i[3] || i[4]) {
          c += u;
          continue;
        } else if ((i[5] || i[6]) && s % 3 && !((s + u) % 3)) {
          f += u;
          continue;
        }
        if (c -= u, c > 0)
          continue;
        u = Math.min(u, u + c + f);
        const g = [...i[0]][0].length, D = e.slice(0, s + i.index + g + u);
        if (Math.min(s, u) % 2) {
          const A = D.slice(1, -1);
          return {
            type: "em",
            raw: D,
            text: A,
            tokens: this.lexer.inlineTokens(A)
          };
        }
        const F = D.slice(2, -2);
        return {
          type: "strong",
          raw: D,
          text: F,
          tokens: this.lexer.inlineTokens(F)
        };
      }
    }
  }
  codespan(e) {
    const n = this.rules.inline.code.exec(e);
    if (n) {
      let r = n[2].replace(/\n/g, " ");
      const i = /[^ ]/.test(r), a = /^ /.test(r) && / $/.test(r);
      return i && a && (r = r.substring(1, r.length - 1)), r = st(r, !0), {
        type: "codespan",
        raw: n[0],
        text: r
      };
    }
  }
  br(e) {
    const n = this.rules.inline.br.exec(e);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(e) {
    const n = this.rules.inline.del.exec(e);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(e) {
    const n = this.rules.inline.autolink.exec(e);
    if (n) {
      let r, i;
      return n[2] === "@" ? (r = st(n[1]), i = "mailto:" + r) : (r = st(n[1]), i = r), {
        type: "link",
        raw: n[0],
        text: r,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    let n;
    if (n = this.rules.inline.url.exec(e)) {
      let r, i;
      if (n[2] === "@")
        r = st(n[0]), i = "mailto:" + r;
      else {
        let a;
        do
          a = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])?.[0] ?? "";
        while (a !== n[0]);
        r = st(n[0]), n[1] === "www." ? i = "http://" + n[0] : i = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: r,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const n = this.rules.inline.text.exec(e);
    if (n) {
      let r;
      return this.lexer.state.inRawBlock ? r = n[0] : r = st(n[0]), {
        type: "text",
        raw: n[0],
        text: r
      };
    }
  }
}
const sc = /^(?: *(?:\n|$))+/, oc = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, lc = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Bn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, uc = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, vs = /(?:[*+-]|\d{1,9}[.)])/, bs = Te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, vs).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), li = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, cc = /^[^\n]+/, ui = /(?!\s*\])(?:\\.|[^\[\]\\])+/, hc = Te(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", ui).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fc = Te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, vs).getRegex(), hr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ci = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, dc = Te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ci).replace("tag", hr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _s = Te(li).replace("hr", Bn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", hr).getRegex(), pc = Te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _s).getRegex(), hi = {
  blockquote: pc,
  code: oc,
  def: hc,
  fences: lc,
  heading: uc,
  hr: Bn,
  html: dc,
  lheading: bs,
  list: fc,
  newline: sc,
  paragraph: _s,
  table: yn,
  text: cc
}, Yi = Te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Bn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", hr).getRegex(), gc = {
  ...hi,
  table: Yi,
  paragraph: Te(li).replace("hr", Bn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Yi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", hr).getRegex()
}, mc = {
  ...hi,
  html: Te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ci).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: yn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Te(li).replace("hr", Bn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bs).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, xs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, vc = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ys = /^( {2,}|\\)\n(?!\s*$)/, bc = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, In = "\\p{P}\\p{S}", _c = Te(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, In).getRegex(), xc = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, yc = Te(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, In).getRegex(), wc = Te("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, In).getRegex(), Ec = Te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, In).getRegex(), Dc = Te(/\\([punct])/, "gu").replace(/punct/g, In).getRegex(), Ac = Te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Fc = Te(ci).replace("(?:-->|$)", "-->").getRegex(), kc = Te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Fc).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), rr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Cc = Te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", rr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ws = Te(/^!?\[(label)\]\[(ref)\]/).replace("label", rr).replace("ref", ui).getRegex(), Es = Te(/^!?\[(ref)\](?:\[\])?/).replace("ref", ui).getRegex(), Sc = Te("reflink|nolink(?!\\()", "g").replace("reflink", ws).replace("nolink", Es).getRegex(), fi = {
  _backpedal: yn,
  // only used for GFM url
  anyPunctuation: Dc,
  autolink: Ac,
  blockSkip: xc,
  br: ys,
  code: vc,
  del: yn,
  emStrongLDelim: yc,
  emStrongRDelimAst: wc,
  emStrongRDelimUnd: Ec,
  escape: xs,
  link: Cc,
  nolink: Es,
  punctuation: _c,
  reflink: ws,
  reflinkSearch: Sc,
  tag: kc,
  text: bc,
  url: yn
}, Tc = {
  ...fi,
  link: Te(/^!?\[(label)\]\((.*?)\)/).replace("label", rr).getRegex(),
  reflink: Te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", rr).getRegex()
}, qr = {
  ...fi,
  escape: Te(xs).replace("])", "~|])").getRegex(),
  url: Te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Bc = {
  ...qr,
  br: Te(ys).replace("{2,}", "*").getRegex(),
  text: Te(qr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Un = {
  normal: hi,
  gfm: gc,
  pedantic: mc
}, _n = {
  normal: fi,
  gfm: qr,
  breaks: Bc,
  pedantic: Tc
};
class yt {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || en, this.options.tokenizer = this.options.tokenizer || new nr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: Un.normal,
      inline: _n.normal
    };
    this.options.pedantic ? (n.block = Un.pedantic, n.inline = _n.pedantic) : this.options.gfm && (n.block = Un.gfm, this.options.breaks ? n.inline = _n.breaks : n.inline = _n.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Un,
      inline: _n
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, n) {
    return new yt(n).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, n) {
    return new yt(n).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, n = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, u, c) => u + "    ".repeat(c.length));
    let r, i, a, s;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (r = o.call({ lexer: this }, e, n)) ? (e = e.substring(r.raw.length), n.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (a = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const u = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((f) => {
            c = f.call({ lexer: this }, u), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
          }), o < 1 / 0 && o >= 0 && (a = e.substring(0, o + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(a))) {
          i = n[n.length - 1], s && i.type === "paragraph" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(r), s = a.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), i = n[n.length - 1], i && i.type === "text" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(r);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, n = []) {
    let r, i, a, s = e, o, u, c;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          f.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, o.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (u || (c = ""), u = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((f) => (r = f.call({ lexer: this }, e, n)) ? (e = e.substring(r.raw.length), n.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), i = n[n.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), i = n[n.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, s, c)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), n.push(r);
          continue;
        }
        if (a = e, this.options.extensions && this.options.extensions.startInline) {
          let f = 1 / 0;
          const v = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((D) => {
            g = D.call({ lexer: this }, v), typeof g == "number" && g >= 0 && (f = Math.min(f, g));
          }), f < 1 / 0 && f >= 0 && (a = e.substring(0, f + 1));
        }
        if (r = this.tokenizer.inlineText(a)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (c = r.raw.slice(-1)), u = !0, i = n[n.length - 1], i && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
          continue;
        }
        if (e) {
          const f = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else
            throw new Error(f);
        }
      }
    return n;
  }
}
class ir {
  options;
  constructor(e) {
    this.options = e || en;
  }
  code(e, n, r) {
    const i = (n || "").match(/^\S*/)?.[0];
    return e = e.replace(/\n$/, "") + `
`, i ? '<pre><code class="language-' + st(i) + '">' + (r ? e : st(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : st(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, n) {
    return e;
  }
  heading(e, n, r) {
    return `<h${n}>${e}</h${n}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, n, r) {
    const i = n ? "ol" : "ul", a = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + i + a + `>
` + e + "</" + i + `>
`;
  }
  listitem(e, n, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, n) {
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, n) {
    const r = n.header ? "th" : "td";
    return (n.align ? `<${r} align="${n.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, n, r) {
    const i = Xi(e);
    if (i === null)
      return r;
    e = i;
    let a = '<a href="' + e + '"';
    return n && (a += ' title="' + n + '"'), a += ">" + r + "</a>", a;
  }
  image(e, n, r) {
    const i = Xi(e);
    if (i === null)
      return r;
    e = i;
    let a = `<img src="${e}" alt="${r}"`;
    return n && (a += ` title="${n}"`), a += ">", a;
  }
  text(e) {
    return e;
  }
}
class di {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, n, r) {
    return "" + r;
  }
  image(e, n, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class wt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || en, this.options.renderer = this.options.renderer || new ir(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new di();
  }
  /**
   * Static Parse Method
   */
  static parse(e, n) {
    return new wt(n).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, n) {
    return new wt(n).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, n = !0) {
    let r = "";
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const s = a, o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(s.type)) {
          r += o || "";
          continue;
        }
      }
      switch (a.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const s = a;
          r += this.renderer.heading(this.parseInline(s.tokens), s.depth, nc(this.parseInline(s.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const s = a;
          r += this.renderer.code(s.text, s.lang, !!s.escaped);
          continue;
        }
        case "table": {
          const s = a;
          let o = "", u = "";
          for (let f = 0; f < s.header.length; f++)
            u += this.renderer.tablecell(this.parseInline(s.header[f].tokens), { header: !0, align: s.align[f] });
          o += this.renderer.tablerow(u);
          let c = "";
          for (let f = 0; f < s.rows.length; f++) {
            const v = s.rows[f];
            u = "";
            for (let g = 0; g < v.length; g++)
              u += this.renderer.tablecell(this.parseInline(v[g].tokens), { header: !1, align: s.align[g] });
            c += this.renderer.tablerow(u);
          }
          r += this.renderer.table(o, c);
          continue;
        }
        case "blockquote": {
          const s = a, o = this.parse(s.tokens);
          r += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const s = a, o = s.ordered, u = s.start, c = s.loose;
          let f = "";
          for (let v = 0; v < s.items.length; v++) {
            const g = s.items[v], D = g.checked, F = g.task;
            let A = "";
            if (g.task) {
              const _ = this.renderer.checkbox(!!D);
              c ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = _ + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = _ + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: _ + " "
              }) : A += _ + " ";
            }
            A += this.parse(g.tokens, c), f += this.renderer.listitem(A, F, !!D);
          }
          r += this.renderer.list(f, o, u);
          continue;
        }
        case "html": {
          const s = a;
          r += this.renderer.html(s.text, s.block);
          continue;
        }
        case "paragraph": {
          const s = a;
          r += this.renderer.paragraph(this.parseInline(s.tokens));
          continue;
        }
        case "text": {
          let s = a, o = s.tokens ? this.parseInline(s.tokens) : s.text;
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            s = e[++i], o += `
` + (s.tokens ? this.parseInline(s.tokens) : s.text);
          r += n ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const s = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, n) {
    n = n || this.renderer;
    let r = "";
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const s = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (s !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += s || "";
          continue;
        }
      }
      switch (a.type) {
        case "escape": {
          const s = a;
          r += n.text(s.text);
          break;
        }
        case "html": {
          const s = a;
          r += n.html(s.text);
          break;
        }
        case "link": {
          const s = a;
          r += n.link(s.href, s.title, this.parseInline(s.tokens, n));
          break;
        }
        case "image": {
          const s = a;
          r += n.image(s.href, s.title, s.text);
          break;
        }
        case "strong": {
          const s = a;
          r += n.strong(this.parseInline(s.tokens, n));
          break;
        }
        case "em": {
          const s = a;
          r += n.em(this.parseInline(s.tokens, n));
          break;
        }
        case "codespan": {
          const s = a;
          r += n.codespan(s.text);
          break;
        }
        case "br": {
          r += n.br();
          break;
        }
        case "del": {
          const s = a;
          r += n.del(this.parseInline(s.tokens, n));
          break;
        }
        case "text": {
          const s = a;
          r += n.text(s.text);
          break;
        }
        default: {
          const s = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return r;
  }
}
class Yn {
  options;
  constructor(e) {
    this.options = e || en;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
class Ic {
  defaults = oi();
  options = this.setOptions;
  parse = this.#e(yt.lex, wt.parse);
  parseInline = this.#e(yt.lexInline, wt.parseInline);
  Parser = wt;
  Renderer = ir;
  TextRenderer = di;
  Lexer = yt;
  Tokenizer = nr;
  Hooks = Yn;
  constructor(...e) {
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, n) {
    let r = [];
    for (const i of e)
      switch (r = r.concat(n.call(this, i)), i.type) {
        case "table": {
          const a = i;
          for (const s of a.header)
            r = r.concat(this.walkTokens(s.tokens, n));
          for (const s of a.rows)
            for (const o of s)
              r = r.concat(this.walkTokens(o.tokens, n));
          break;
        }
        case "list": {
          const a = i;
          r = r.concat(this.walkTokens(a.items, n));
          break;
        }
        default: {
          const a = i;
          this.defaults.extensions?.childTokens?.[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((s) => {
            const o = a[s].flat(1 / 0);
            r = r.concat(this.walkTokens(o, n));
          }) : a.tokens && (r = r.concat(this.walkTokens(a.tokens, n)));
        }
      }
    return r;
  }
  use(...e) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const i = { ...r };
      if (i.async = this.defaults.async || i.async || !1, r.extensions && (r.extensions.forEach((a) => {
        if (!a.name)
          throw new Error("extension name required");
        if ("renderer" in a) {
          const s = n.renderers[a.name];
          s ? n.renderers[a.name] = function(...o) {
            let u = a.renderer.apply(this, o);
            return u === !1 && (u = s.apply(this, o)), u;
          } : n.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = n[a.level];
          s ? s.unshift(a.tokenizer) : n[a.level] = [a.tokenizer], a.start && (a.level === "block" ? n.startBlock ? n.startBlock.push(a.start) : n.startBlock = [a.start] : a.level === "inline" && (n.startInline ? n.startInline.push(a.start) : n.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (n.childTokens[a.name] = a.childTokens);
      }), i.extensions = n), r.renderer) {
        const a = this.defaults.renderer || new ir(this.defaults);
        for (const s in r.renderer) {
          if (!(s in a))
            throw new Error(`renderer '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, u = r.renderer[o], c = a[o];
          a[o] = (...f) => {
            let v = u.apply(a, f);
            return v === !1 && (v = c.apply(a, f)), v || "";
          };
        }
        i.renderer = a;
      }
      if (r.tokenizer) {
        const a = this.defaults.tokenizer || new nr(this.defaults);
        for (const s in r.tokenizer) {
          if (!(s in a))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const o = s, u = r.tokenizer[o], c = a[o];
          a[o] = (...f) => {
            let v = u.apply(a, f);
            return v === !1 && (v = c.apply(a, f)), v;
          };
        }
        i.tokenizer = a;
      }
      if (r.hooks) {
        const a = this.defaults.hooks || new Yn();
        for (const s in r.hooks) {
          if (!(s in a))
            throw new Error(`hook '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, u = r.hooks[o], c = a[o];
          Yn.passThroughHooks.has(s) ? a[o] = (f) => {
            if (this.defaults.async)
              return Promise.resolve(u.call(a, f)).then((g) => c.call(a, g));
            const v = u.call(a, f);
            return c.call(a, v);
          } : a[o] = (...f) => {
            let v = u.apply(a, f);
            return v === !1 && (v = c.apply(a, f)), v;
          };
        }
        i.hooks = a;
      }
      if (r.walkTokens) {
        const a = this.defaults.walkTokens, s = r.walkTokens;
        i.walkTokens = function(o) {
          let u = [];
          return u.push(s.call(this, o)), a && (u = u.concat(a.call(this, o))), u;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, n) {
    return yt.lex(e, n ?? this.defaults);
  }
  parser(e, n) {
    return wt.parse(e, n ?? this.defaults);
  }
  #e(e, n) {
    return (r, i) => {
      const a = { ...i }, s = { ...this.defaults, ...a };
      this.defaults.async === !0 && a.async === !1 && (s.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), s.async = !0);
      const o = this.#n(!!s.silent, !!s.async);
      if (typeof r > "u" || r === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (s.hooks && (s.hooks.options = s), s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r).then((u) => e(u, s)).then((u) => s.hooks ? s.hooks.processAllTokens(u) : u).then((u) => s.walkTokens ? Promise.all(this.walkTokens(u, s.walkTokens)).then(() => u) : u).then((u) => n(u, s)).then((u) => s.hooks ? s.hooks.postprocess(u) : u).catch(o);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let u = e(r, s);
        s.hooks && (u = s.hooks.processAllTokens(u)), s.walkTokens && this.walkTokens(u, s.walkTokens);
        let c = n(u, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (u) {
        return o(u);
      }
    };
  }
  #n(e, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const i = "<p>An error occurred:</p><pre>" + st(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(i) : i;
      }
      if (n)
        return Promise.reject(r);
      throw r;
    };
  }
}
const Kt = new Ic();
function Se(t, e) {
  return Kt.parse(t, e);
}
Se.options = Se.setOptions = function(t) {
  return Kt.setOptions(t), Se.defaults = Kt.defaults, ps(Se.defaults), Se;
};
Se.getDefaults = oi;
Se.defaults = en;
Se.use = function(...t) {
  return Kt.use(...t), Se.defaults = Kt.defaults, ps(Se.defaults), Se;
};
Se.walkTokens = function(t, e) {
  return Kt.walkTokens(t, e);
};
Se.parseInline = Kt.parseInline;
Se.Parser = wt;
Se.parser = wt.parse;
Se.Renderer = ir;
Se.TextRenderer = di;
Se.Lexer = yt;
Se.lexer = yt.lex;
Se.Tokenizer = nr;
Se.Hooks = Yn;
Se.parse = Se;
Se.options;
Se.setOptions;
Se.use;
Se.walkTokens;
Se.parseInline;
wt.parse;
yt.lex;
const Rc = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Lc = Object.hasOwnProperty;
class Ds {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, n) {
    const r = this;
    let i = Oc(e, n === !0);
    const a = i;
    for (; Lc.call(r.occurrences, i); )
      r.occurrences[a]++, i = a + "-" + r.occurrences[a];
    return r.occurrences[i] = 0, i;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Oc(t, e) {
  return typeof t != "string" ? "" : (e || (t = t.toLowerCase()), t.replace(Rc, "").replace(/ /g, "-"));
}
new Ds();
var Er = { exports: {} }, Zi;
function Nc() {
  return Zi || (Zi = 1, (function(t) {
    var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    var n = (function(r) {
      var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, a = 0, s = {}, o = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: r.Prism && r.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function d(h) {
            return h instanceof u ? new u(h.type, d(h.content), h.alias) : Array.isArray(h) ? h.map(d) : h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(d) {
            return Object.prototype.toString.call(d).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(d) {
            return d.__id || Object.defineProperty(d, "__id", { value: ++a }), d.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function d(h, m) {
            m = m || {};
            var p, y;
            switch (o.util.type(h)) {
              case "Object":
                if (y = o.util.objId(h), m[y])
                  return m[y];
                p = /** @type {Record<string, any>} */
                {}, m[y] = p;
                for (var E in h)
                  h.hasOwnProperty(E) && (p[E] = d(h[E], m));
                return (
                  /** @type {any} */
                  p
                );
              case "Array":
                return y = o.util.objId(h), m[y] ? m[y] : (p = [], m[y] = p, /** @type {Array} */
                /** @type {any} */
                h.forEach(function(k, x) {
                  p[x] = d(k, m);
                }), /** @type {any} */
                p);
              default:
                return h;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(d) {
            for (; d; ) {
              var h = i.exec(d.className);
              if (h)
                return h[1].toLowerCase();
              d = d.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(d, h) {
            d.className = d.className.replace(RegExp(i, "gi"), ""), d.classList.add("language-" + h);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (p) {
              var d = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack) || [])[1];
              if (d) {
                var h = document.getElementsByTagName("script");
                for (var m in h)
                  if (h[m].src == d)
                    return h[m];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(d, h, m) {
            for (var p = "no-" + h; d; ) {
              var y = d.classList;
              if (y.contains(h))
                return !0;
              if (y.contains(p))
                return !1;
              d = d.parentElement;
            }
            return !!m;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: s,
          plaintext: s,
          text: s,
          txt: s,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(d, h) {
            var m = o.util.clone(o.languages[d]);
            for (var p in h)
              m[p] = h[p];
            return m;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(d, h, m, p) {
            p = p || /** @type {any} */
            o.languages;
            var y = p[d], E = {};
            for (var k in y)
              if (y.hasOwnProperty(k)) {
                if (k == h)
                  for (var x in m)
                    m.hasOwnProperty(x) && (E[x] = m[x]);
                m.hasOwnProperty(k) || (E[k] = y[k]);
              }
            var S = p[d];
            return p[d] = E, o.languages.DFS(o.languages, function(T, O) {
              O === S && T != d && (this[T] = E);
            }), E;
          },
          // Traverse a language definition with Depth First Search
          DFS: function d(h, m, p, y) {
            y = y || {};
            var E = o.util.objId;
            for (var k in h)
              if (h.hasOwnProperty(k)) {
                m.call(h, k, h[k], p || k);
                var x = h[k], S = o.util.type(x);
                S === "Object" && !y[E(x)] ? (y[E(x)] = !0, d(x, m, null, y)) : S === "Array" && !y[E(x)] && (y[E(x)] = !0, d(x, m, k, y));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(d, h) {
          o.highlightAllUnder(document, d, h);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(d, h, m) {
          var p = {
            callback: m,
            container: d,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          o.hooks.run("before-highlightall", p), p.elements = Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)), o.hooks.run("before-all-elements-highlight", p);
          for (var y = 0, E; E = p.elements[y++]; )
            o.highlightElement(E, h === !0, p.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(d, h, m) {
          var p = o.util.getLanguage(d), y = o.languages[p];
          o.util.setLanguage(d, p);
          var E = d.parentElement;
          E && E.nodeName.toLowerCase() === "pre" && o.util.setLanguage(E, p);
          var k = d.textContent, x = {
            element: d,
            language: p,
            grammar: y,
            code: k
          };
          function S(O) {
            x.highlightedCode = O, o.hooks.run("before-insert", x), x.element.innerHTML = x.highlightedCode, o.hooks.run("after-highlight", x), o.hooks.run("complete", x), m && m.call(x.element);
          }
          if (o.hooks.run("before-sanity-check", x), E = x.element.parentElement, E && E.nodeName.toLowerCase() === "pre" && !E.hasAttribute("tabindex") && E.setAttribute("tabindex", "0"), !x.code) {
            o.hooks.run("complete", x), m && m.call(x.element);
            return;
          }
          if (o.hooks.run("before-highlight", x), !x.grammar) {
            S(o.util.encode(x.code));
            return;
          }
          if (h && r.Worker) {
            var T = new Worker(o.filename);
            T.onmessage = function(O) {
              S(O.data);
            }, T.postMessage(JSON.stringify({
              language: x.language,
              code: x.code,
              immediateClose: !0
            }));
          } else
            S(o.highlight(x.code, x.grammar, x.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(d, h, m) {
          var p = {
            code: d,
            grammar: h,
            language: m
          };
          if (o.hooks.run("before-tokenize", p), !p.grammar)
            throw new Error('The language "' + p.language + '" has no grammar.');
          return p.tokens = o.tokenize(p.code, p.grammar), o.hooks.run("after-tokenize", p), u.stringify(o.util.encode(p.tokens), p.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(d, h) {
          var m = h.rest;
          if (m) {
            for (var p in m)
              h[p] = m[p];
            delete h.rest;
          }
          var y = new v();
          return g(y, y.head, d), f(d, y, h, y.head, 0), F(y);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(d, h) {
            var m = o.hooks.all;
            m[d] = m[d] || [], m[d].push(h);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(d, h) {
            var m = o.hooks.all[d];
            if (!(!m || !m.length))
              for (var p = 0, y; y = m[p++]; )
                y(h);
          }
        },
        Token: u
      };
      r.Prism = o;
      function u(d, h, m, p) {
        this.type = d, this.content = h, this.alias = m, this.length = (p || "").length | 0;
      }
      u.stringify = function d(h, m) {
        if (typeof h == "string")
          return h;
        if (Array.isArray(h)) {
          var p = "";
          return h.forEach(function(S) {
            p += d(S, m);
          }), p;
        }
        var y = {
          type: h.type,
          content: d(h.content, m),
          tag: "span",
          classes: ["token", h.type],
          attributes: {},
          language: m
        }, E = h.alias;
        E && (Array.isArray(E) ? Array.prototype.push.apply(y.classes, E) : y.classes.push(E)), o.hooks.run("wrap", y);
        var k = "";
        for (var x in y.attributes)
          k += " " + x + '="' + (y.attributes[x] || "").replace(/"/g, "&quot;") + '"';
        return "<" + y.tag + ' class="' + y.classes.join(" ") + '"' + k + ">" + y.content + "</" + y.tag + ">";
      };
      function c(d, h, m, p) {
        d.lastIndex = h;
        var y = d.exec(m);
        if (y && p && y[1]) {
          var E = y[1].length;
          y.index += E, y[0] = y[0].slice(E);
        }
        return y;
      }
      function f(d, h, m, p, y, E) {
        for (var k in m)
          if (!(!m.hasOwnProperty(k) || !m[k])) {
            var x = m[k];
            x = Array.isArray(x) ? x : [x];
            for (var S = 0; S < x.length; ++S) {
              if (E && E.cause == k + "," + S)
                return;
              var T = x[S], O = T.inside, U = !!T.lookbehind, W = !!T.greedy, ue = T.alias;
              if (W && !T.pattern.global) {
                var oe = T.pattern.toString().match(/[imsuy]*$/)[0];
                T.pattern = RegExp(T.pattern.source, oe + "g");
              }
              for (var Fe = T.pattern || T, K = p.next, ne = y; K !== h.tail && !(E && ne >= E.reach); ne += K.value.length, K = K.next) {
                var De = K.value;
                if (h.length > d.length)
                  return;
                if (!(De instanceof u)) {
                  var xe = 1, fe;
                  if (W) {
                    if (fe = c(Fe, ne, d, U), !fe || fe.index >= d.length)
                      break;
                    var X = fe.index, Ne = fe.index + fe[0].length, Ae = ne;
                    for (Ae += K.value.length; X >= Ae; )
                      K = K.next, Ae += K.value.length;
                    if (Ae -= K.value.length, ne = Ae, K.value instanceof u)
                      continue;
                    for (var re = K; re !== h.tail && (Ae < Ne || typeof re.value == "string"); re = re.next)
                      xe++, Ae += re.value.length;
                    xe--, De = d.slice(ne, Ae), fe.index -= ne;
                  } else if (fe = c(Fe, 0, De, U), !fe)
                    continue;
                  var X = fe.index, Q = fe[0], N = De.slice(0, X), I = De.slice(X + Q.length), L = ne + De.length;
                  E && L > E.reach && (E.reach = L);
                  var P = K.prev;
                  N && (P = g(h, P, N), ne += N.length), D(h, P, xe);
                  var M = new u(k, O ? o.tokenize(Q, O) : Q, ue, Q);
                  if (K = g(h, P, M), I && g(h, K, I), xe > 1) {
                    var te = {
                      cause: k + "," + S,
                      reach: L
                    };
                    f(d, h, m, K.prev, ne, te), E && te.reach > E.reach && (E.reach = te.reach);
                  }
                }
              }
            }
          }
      }
      function v() {
        var d = { value: null, prev: null, next: null }, h = { value: null, prev: d, next: null };
        d.next = h, this.head = d, this.tail = h, this.length = 0;
      }
      function g(d, h, m) {
        var p = h.next, y = { value: m, prev: h, next: p };
        return h.next = y, p.prev = y, d.length++, y;
      }
      function D(d, h, m) {
        for (var p = h.next, y = 0; y < m && p !== d.tail; y++)
          p = p.next;
        h.next = p, p.prev = h, d.length -= y;
      }
      function F(d) {
        for (var h = [], m = d.head.next; m !== d.tail; )
          h.push(m.value), m = m.next;
        return h;
      }
      if (!r.document)
        return r.addEventListener && (o.disableWorkerMessageHandler || r.addEventListener("message", function(d) {
          var h = JSON.parse(d.data), m = h.language, p = h.code, y = h.immediateClose;
          r.postMessage(o.highlight(p, o.languages[m], m)), y && r.close();
        }, !1)), o;
      var A = o.util.currentScript();
      A && (o.filename = A.src, A.hasAttribute("data-manual") && (o.manual = !0));
      function _() {
        o.manual || o.highlightAll();
      }
      if (!o.manual) {
        var b = document.readyState;
        b === "loading" || b === "interactive" && A && A.defer ? document.addEventListener("DOMContentLoaded", _) : window.requestAnimationFrame ? window.requestAnimationFrame(_) : window.setTimeout(_, 16);
      }
      return o;
    })(e);
    t.exports && (t.exports = n), typeof Ti < "u" && (Ti.Prism = n), n.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(r) {
      r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(i, a) {
        var s = {};
        s["language-" + a] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: n.languages[a]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var o = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        o["language-" + a] = {
          pattern: /[\s\S]+/,
          inside: n.languages[a]
        };
        var u = {};
        u[i] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return i;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: o
        }, n.languages.insertBefore("markup", "cdata", u);
      }
    }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(r, i) {
        n.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [i, "language-" + i],
                  inside: n.languages[i]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(r) {
      var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      r.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + i.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: i,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, r.languages.css.atrule.inside.rest = r.languages.css;
      var a = r.languages.markup;
      a && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css"));
    })(n), n.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, n.languages.javascript = n.languages.extend("clike", {
      "class-name": [
        n.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: n.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: n.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), n.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: n.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), n.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), n.languages.js = n.languages.javascript, (function() {
      if (typeof n > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var r = "Loading…", i = function(A, _) {
        return "✖ Error " + A + " while fetching file: " + _;
      }, a = "✖ Error: File does not exist or is empty", s = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, o = "data-src-status", u = "loading", c = "loaded", f = "failed", v = "pre[data-src]:not([" + o + '="' + c + '"]):not([' + o + '="' + u + '"])';
      function g(A, _, b) {
        var d = new XMLHttpRequest();
        d.open("GET", A, !0), d.onreadystatechange = function() {
          d.readyState == 4 && (d.status < 400 && d.responseText ? _(d.responseText) : d.status >= 400 ? b(i(d.status, d.statusText)) : b(a));
        }, d.send(null);
      }
      function D(A) {
        var _ = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A || "");
        if (_) {
          var b = Number(_[1]), d = _[2], h = _[3];
          return d ? h ? [b, Number(h)] : [b, void 0] : [b, b];
        }
      }
      n.hooks.add("before-highlightall", function(A) {
        A.selector += ", " + v;
      }), n.hooks.add("before-sanity-check", function(A) {
        var _ = (
          /** @type {HTMLPreElement} */
          A.element
        );
        if (_.matches(v)) {
          A.code = "", _.setAttribute(o, u);
          var b = _.appendChild(document.createElement("CODE"));
          b.textContent = r;
          var d = _.getAttribute("data-src"), h = A.language;
          if (h === "none") {
            var m = (/\.(\w+)$/.exec(d) || [, "none"])[1];
            h = s[m] || m;
          }
          n.util.setLanguage(b, h), n.util.setLanguage(_, h);
          var p = n.plugins.autoloader;
          p && p.loadLanguages(h), g(
            d,
            function(y) {
              _.setAttribute(o, c);
              var E = D(_.getAttribute("data-range"));
              if (E) {
                var k = y.split(/\r\n?|\n/g), x = E[0], S = E[1] == null ? k.length : E[1];
                x < 0 && (x += k.length), x = Math.max(0, Math.min(x - 1, k.length)), S < 0 && (S += k.length), S = Math.max(0, Math.min(S, k.length)), y = k.slice(x, S).join(`
`), _.hasAttribute("data-start") || _.setAttribute("data-start", String(x + 1));
              }
              b.textContent = y, n.highlightElement(b);
            },
            function(y) {
              _.setAttribute(o, f), b.textContent = y;
            }
          );
        }
      }), n.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(_) {
          for (var b = (_ || document).querySelectorAll(v), d = 0, h; h = b[d++]; )
            n.highlightElement(h);
        }
      };
      var F = !1;
      n.fileHighlight = function() {
        F || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), F = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Er)), Er.exports;
}
Nc();
var Ki = {}, Qi;
function Pc() {
  return Qi || (Qi = 1, Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    "string-interpolation": {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: !0
            },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string"
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0
    },
    "class-name": {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: !0
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), Ki;
}
Pc();
(function(t) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  t.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: n,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: n,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, t.languages.tex = t.languages.latex, t.languages.context = t.languages.latex;
})(Prism);
(function(t) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: n,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  t.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: n
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, n.inside = t.languages.bash;
  for (var i = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], a = r.variable[1].inside, s = 0; s < i.length; s++)
    a[i[s]] = t.languages.bash[i[s]];
  t.languages.sh = t.languages.bash, t.languages.shell = t.languages.bash;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
var Ji = {}, $i;
function Hc() {
  return $i || ($i = 1, (function(t) {
    var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return e.source;
    });
    t.languages.cpp = t.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return e.source;
          })),
          lookbehind: !0
        },
        // This is intended to capture the class name of method implementations like:
        //   void foo::bar() const {}
        // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
        // it starts with an uppercase letter. This approximation should give decent results.
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        // This will capture the class name before destructors like:
        //   Foo::~Foo() {}
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        // This also intends to capture the class name of method implementations but here the class has template
        // parameters, so it can't be a namespace (until C++ adds generic namespaces).
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: e,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), t.languages.insertBefore("cpp", "string", {
      module: {
        // https://en.cppreference.com/w/cpp/language/modules
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
          /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
          /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
            return n;
          }) + ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0
      }
    }), t.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: t.languages.cpp
          }
        }
      }
    }), t.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), t.languages.insertBefore("cpp", "class-name", {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: t.languages.extend("cpp", {})
      }
    }), t.languages.insertBefore("inside", "double-colon", {
      // All untokenized words that are not namespaces should be class names
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, t.languages.cpp["base-clause"]);
  })(Prism)), Ji;
}
Hc();
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
var ea = {}, ta;
function Mc() {
  return ta || (ta = 1, (function(t) {
    var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
      pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
    t.languages.java = t.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        r,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: r.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: r.inside
        }
      ],
      keyword: e,
      function: [
        t.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0
      },
      constant: /\b[A-Z][A-Z_\d]+\b/
    }), t.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string"
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: !0
      }
    }), t.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": r,
          keyword: e,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: r.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: "static",
          inside: {
            namespace: r.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
            return e.source;
          })
        ),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  })(Prism)), ea;
}
Mc();
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete Prism.languages.go["class-name"];
var na = {}, ra;
function zc() {
  return ra || (ra = 1, (function(t) {
    for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
      e = e.replace(/<self>/g, function() {
        return e;
      });
    e = e.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), t.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + e),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0
      },
      char: {
        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null
          // see below
        }
      },
      // Closure params should not be confused with bitwise OR |
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation"
          },
          rest: null
          // see below
        }
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol"
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation"
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function"
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name"
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace"
        },
        {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        // https://github.com/rust-lang/reference/blob/master/src/keywords.md
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        // primitives and str
        // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
      // and Rust's naming conventions recommend snake_case anyway.
      // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: "property"
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      // Hex, oct, bin, dec numbers with visual separators and type suffix
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, t.languages.rust["closure-params"].inside.rest = t.languages.rust, t.languages.rust.attribute.inside.string = t.languages.rust.string;
  })(Prism)), na;
}
zc();
var ia = {}, aa;
function Uc() {
  return aa || (aa = 1, (function(t) {
    var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, n = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ], r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, a = /[{}\[\](),:;]/;
    t.languages.php = {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      comment: e,
      variable: /\$+(?:\w+\b|(?=\{))/,
      package: {
        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      "class-name-definition": {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: !0,
        alias: "class-name"
      },
      "function-definition": {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: !0,
        alias: "function"
      },
      keyword: [
        {
          pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: "type-declaration",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          // yield from
          pattern: /(\byield\s+)from\b/i,
          lookbehind: !0
        },
        // `class` is always a keyword unlike other keywords
        /\bclass\b/i,
        {
          // https://www.php.net/manual/en/reserved.keywords.php
          //
          // keywords cannot be preceded by "->"
          // the complex lookbehind means `(?<!(?:->|::)\s*)`
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: !0
        }
      ],
      "argument-name": {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: !0
      },
      "class-name": [
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        }
      ],
      constant: n,
      function: {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      property: {
        pattern: /(->\s*)\w+/,
        lookbehind: !0
      },
      number: r,
      operator: i,
      punctuation: a
    };
    var s = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: t.languages.php
    }, o = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: s
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: {
          interpolation: s
        }
      }
    ];
    t.languages.insertBefore("php", "variable", {
      string: o,
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: !0,
            // inside can appear subset of php
            inside: {
              comment: e,
              string: o,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: !0,
                  lookbehind: !0
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: [
                    "class-name",
                    "class-name-fully-qualified"
                  ],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                    punctuation: /\\/
                  }
                }
              ],
              constant: n,
              number: r,
              operator: i,
              punctuation: a
            }
          },
          delimiter: {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    }), t.hooks.add("before-tokenize", function(u) {
      if (/<\?/.test(u.code)) {
        var c = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
        t.languages["markup-templating"].buildPlaceholders(u, "php", c);
      }
    }), t.hooks.add("after-tokenize", function(u) {
      t.languages["markup-templating"].tokenizePlaceholders(u, "php");
    });
  })(Prism)), ia;
}
Uc();
(function(t) {
  var e = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + n.source + "(?:[ 	]+" + e.source + ")?|" + e.source + "(?:[ 	]+" + n.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function s(o, u) {
    u = (u || "").replace(/m/g, "") + "m";
    var c = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return o;
    });
    return RegExp(c, u);
  }
  t.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return r;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return r;
      }).replace(/<<key>>/g, function() {
        return "(?:" + i + "|" + a + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: s(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: s(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: s(a),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: n,
    important: e,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, t.languages.yml = t.languages.yaml;
})(Prism);
(function(t) {
  function e(n, r) {
    return "___" + n.toUpperCase() + r + "___";
  }
  Object.defineProperties(t.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function(n, r, i, a) {
        if (n.language === r) {
          var s = n.tokenStack = [];
          n.code = n.code.replace(i, function(o) {
            if (typeof a == "function" && !a(o))
              return o;
            for (var u = s.length, c; n.code.indexOf(c = e(r, u)) !== -1; )
              ++u;
            return s[u] = o, c;
          }), n.grammar = t.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function(n, r) {
        if (n.language !== r || !n.tokenStack)
          return;
        n.grammar = t.languages[r];
        var i = 0, a = Object.keys(n.tokenStack);
        function s(o) {
          for (var u = 0; u < o.length && !(i >= a.length); u++) {
            var c = o[u];
            if (typeof c == "string" || c.content && typeof c.content == "string") {
              var f = a[i], v = n.tokenStack[f], g = typeof c == "string" ? c : c.content, D = e(r, f), F = g.indexOf(D);
              if (F > -1) {
                ++i;
                var A = g.substring(0, F), _ = new t.Token(r, t.tokenize(v, n.grammar), "language-" + r, v), b = g.substring(F + D.length), d = [];
                A && d.push.apply(d, s([A])), d.push(_), b && d.push.apply(d, s([b])), typeof c == "string" ? o.splice.apply(o, [u, 1].concat(d)) : c.content = d;
              }
            } else c.content && s(c.content);
          }
          return o;
        }
        s(n.tokens);
      }
    }
  });
})(Prism);
new Ds();
const Gc = (t) => {
  const e = {};
  for (let n = 0, r = t.length; n < r; n++) {
    const i = t[n];
    for (const a in i)
      e[a] ? e[a] = e[a].concat(i[a]) : e[a] = i[a];
  }
  return e;
}, Wc = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], jc = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Xc = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
Gc([
  Object.fromEntries(Wc.map((t) => [t, ["*"]])),
  Object.fromEntries(jc.map((t) => [t, ["svg:*"]])),
  Object.fromEntries(Xc.map((t) => [t, ["math:*"]]))
]);
var qc = /* @__PURE__ */ q('<label for="" data-testid="block-label"><span class="svelte-1fzogyz"><!></span> </label>');
function Vc(t, e) {
  let n = w(e, "label", 8, null), r = w(e, "Icon", 8), i = w(e, "show_label", 8, !0), a = w(e, "disable", 8, !1), s = w(e, "float", 8, !0), o = w(e, "rtl", 8, !1);
  var u = qc();
  let c;
  var f = H(u), v = H(f);
  r()(v, {});
  var g = G(f);
  J(() => {
    Xe(u, "dir", o() ? "rtl" : "ltr"), c = Oe(u, 1, "svelte-1fzogyz", null, c, {
      hide: !i(),
      "sr-only": !i(),
      float: s(),
      "hide-label": a()
    }), Le(g, ` ${n() ?? ""}`), u.dir = u.dir;
  }), B(t, u);
}
var Yc = /* @__PURE__ */ q('<span class="svelte-vvirtv"> </span>'), Zc = /* @__PURE__ */ q("<button><!> <div><!> <!></div></button>");
function En(t, e) {
  let n = w(e, "label", 3, ""), r = w(e, "show_label", 3, !1), i = w(e, "pending", 3, !1), a = w(e, "size", 3, "small"), s = w(e, "padded", 3, !0), o = w(e, "highlight", 3, !1), u = w(e, "disabled", 3, !1), c = w(e, "hasPopup", 3, !1), f = w(e, "color", 3, "var(--block-label-text-color)"), v = w(e, "transparent", 3, !1), g = w(e, "background", 3, "var(--block-background-fill)"), D = w(e, "border", 3, "transparent"), F = Ge(() => o() ? "var(--color-accent)" : f());
  var A = Zc();
  let _, b;
  var d = H(A);
  {
    var h = (x) => {
      var S = Yc(), T = H(S);
      J(() => Le(T, n())), B(x, S);
    };
    Y(d, (x) => {
      r() && x(h);
    });
  }
  var m = G(d, 2);
  let p;
  var y = H(m);
  Ho(y, () => e.Icon, (x, S) => {
    S(x, {});
  });
  var E = G(y, 2);
  {
    var k = (x) => {
      var S = qe(), T = _e(S);
      Ir(T, () => e.children), B(x, S);
    };
    Y(E, (x) => {
      e.children && x(k);
    });
  }
  J(() => {
    _ = Oe(A, 1, "icon-button svelte-vvirtv", null, _, {
      pending: i(),
      padded: s(),
      highlight: o(),
      transparent: v()
    }), A.disabled = u(), Xe(A, "aria-label", n()), Xe(A, "aria-haspopup", c()), Xe(A, "title", n()), b = lt(A, "", b, {
      "--border-color": D(),
      color: !u() && l(F) ? l(F) : "var(--block-label-text-color)",
      "--bg-color": u() ? "auto" : g()
    }), p = Oe(m, 1, "svelte-vvirtv", null, p, {
      "x-small": a() === "x-small",
      small: a() === "small",
      large: a() === "large",
      medium: a() === "medium"
    });
  }), Rt("click", A, function(...x) {
    e.onclick?.apply(this, x);
  }), B(t, A);
}
kn(["click"]);
var Kc = /* @__PURE__ */ q('<div aria-label="Empty value"><div class="icon svelte-1xcwp1t"><!></div></div>');
function Qc(t, e) {
  Je(e, !1);
  const n = ee();
  let r = w(e, "size", 8, "small"), i = w(e, "unpadded_box", 8, !1), a = ee();
  function s(v) {
    var g;
    if (!v) return !1;
    const { height: D } = v.getBoundingClientRect(), { height: F } = ((g = v.parentElement) === null || g === void 0 ? void 0 : g.getBoundingClientRect()) || { height: D };
    return D > F + 2;
  }
  pt(() => l(a), () => {
    R(n, s(l(a)));
  }), Jt();
  var o = Kc();
  let u;
  var c = H(o), f = H(c);
  Pt(f, e, "default", {}), Zt(o, (v) => R(a, v), () => l(a)), J(() => u = Oe(o, 1, "empty svelte-1xcwp1t", null, u, {
    small: r() === "small",
    large: r() === "large",
    unpadded_box: i(),
    small_parent: l(n)
  })), B(t, o), Qe();
}
var Jc = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>');
function $c(t) {
  var e = Jc();
  B(t, e);
}
var eh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>');
function th(t) {
  var e = eh();
  B(t, e);
}
var nh = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><g transform="matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"><path d="M18,6L6.087,17.913" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></g><path d="M4.364,4.364L19.636,19.636" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></svg>');
function Vr(t) {
  var e = nh();
  B(t, e);
}
var rh = /* @__PURE__ */ We('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path d="M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z" fill="currentColor"></path></svg>');
function ih(t) {
  var e = rh();
  B(t, e);
}
var ah = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"></path></svg>');
function sh(t) {
  var e = ah();
  B(t, e);
}
var oh = /* @__PURE__ */ We('<svg class="dropdown-arrow svelte-gtiaeq" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"></path></svg>');
function lh(t) {
  var e = oh();
  B(t, e);
}
var uh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>');
function As(t) {
  var e = uh();
  B(t, e);
}
var ch = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></path></svg>');
function Fs(t) {
  var e = ch();
  B(t, e);
}
var hh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>');
function fh(t) {
  var e = hh();
  B(t, e);
}
var dh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw" style="transform: rotateY(180deg);"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
function sa(t) {
  var e = dh();
  B(t, e);
}
var ph = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>');
function gh(t, e) {
  let n = w(e, "fill", 8, "currentColor"), r = w(e, "stroke_width", 8, 1.5);
  var i = ph();
  J(() => {
    Xe(i, "fill", n()), Xe(i, "stroke-width", `${r()}`);
  }), B(t, i);
}
var mh = /* @__PURE__ */ We('<svg aria-label="undo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
function oa(t) {
  var e = mh();
  B(t, e);
}
var vh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>');
function ks(t) {
  var e = vh();
  B(t, e);
}
var bh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>');
function _h(t) {
  var e = bh();
  B(t, e);
}
var xh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"></path><path fill="currentColor" d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"></path></svg>');
function Cs(t) {
  var e = xh();
  B(t, e);
}
var yh = /* @__PURE__ */ We('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" class="svelte-3g80w1"><circle cx="25" cy="25" r="20" fill="none" stroke-width="3.0" stroke-linecap="round" stroke-dasharray="94.2477796076938 94.2477796076938" stroke-dashoffset="0" class="svelte-3g80w1"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" repeatCount="indefinite" class="svelte-3g80w1"></animateTransform></circle></svg>');
function wh(t) {
  var e = yh();
  B(t, e);
}
function Eh(t, e) {
  Je(e, !1);
  const n = Ht();
  let r = w(e, "formatter", 8), i = w(e, "value", 8), a = w(e, "i18n", 8), s = ee(!1);
  gt();
  {
    let o = _t(() => (se(a()), ae(() => a()("common.share"))));
    En(t, {
      get Icon() {
        return ih;
      },
      get label() {
        return l(o);
      },
      get pending() {
        return l(s);
      },
      onclick: async () => {
        try {
          R(s, !0);
          const u = await r()(i());
          n("share", { description: u });
        } catch (u) {
          console.error(u);
          let c = u instanceof Vn ? u.message : "Share failed.";
          n("error", c);
        } finally {
          R(s, !1);
        }
      }
    });
  }
  Qe();
}
const Dh = /^(#\s*)(.+)$/m;
function la(t) {
  const e = t.trim(), n = e.match(Dh);
  if (!n)
    return [!1, e || !1];
  const [r, , i] = n, a = i.trim();
  if (e === r)
    return [a, !1];
  const s = n.index !== void 0 ? n.index + r.length : 0, u = e.substring(s).trim() || !1;
  return [a, u];
}
var Ah = /* @__PURE__ */ q('<h2 class="svelte-cmuu9m"> </h2>'), Fh = /* @__PURE__ */ q('<p class="svelte-cmuu9m"> </p>'), kh = /* @__PURE__ */ q("<!> <!>", 1), Ch = /* @__PURE__ */ q('<span class="or svelte-cmuu9m"> </span> ', 1), Sh = /* @__PURE__ */ q(" <!>", 1), Th = /* @__PURE__ */ q('<div class="wrap svelte-cmuu9m"><span><!></span> <!></div>');
function ua(t, e) {
  Je(e, !1);
  const n = ee(), r = ee();
  let i = w(e, "type", 8, "file"), a = w(e, "i18n", 8), s = w(e, "message", 8, void 0), o = w(e, "mode", 8, "full"), u = w(e, "hovered", 8, !1), c = w(e, "placeholder", 8, void 0);
  const f = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  pt(
    () => (l(n), l(r), se(c()), la),
    () => {
      ((m) => {
        var p = Eo(m, 2);
        R(n, p[0]), R(r, p[1]);
      })(c() ? la(c()) : [!1, !1]);
    }
  ), Jt(), gt();
  var v = Th(), g = H(v);
  let D;
  var F = H(g);
  {
    var A = (m) => {
      Fs(m);
    }, _ = (m) => {
      ks(m);
    };
    Y(F, (m) => {
      i() === "clipboard" ? m(A) : m(_, -1);
    });
  }
  var b = G(g, 2);
  {
    var d = (m) => {
      var p = kh(), y = _e(p);
      {
        var E = (S) => {
          var T = Ah(), O = H(T);
          J(() => Le(O, l(n))), B(S, T);
        };
        Y(y, (S) => {
          l(n) && S(E);
        });
      }
      var k = G(y, 2);
      {
        var x = (S) => {
          var T = Fh(), O = H(T);
          J(() => Le(O, l(r))), B(S, T);
        };
        Y(k, (S) => {
          l(r) && S(x);
        });
      }
      B(m, p);
    }, h = (m) => {
      var p = Sh(), y = _e(p), E = G(y);
      {
        var k = (x) => {
          var S = Ch(), T = _e(S), O = H(T), U = G(T);
          J(
            (W, ue) => {
              Le(O, `- ${W ?? ""} -`), Le(U, ` ${ue ?? ""}`);
            },
            [
              () => (se(a()), ae(() => a()("common.or"))),
              () => (se(s()), se(a()), ae(() => s() || a()("upload_text.click_to_upload")))
            ]
          ), B(x, S);
        };
        Y(E, (x) => {
          o() !== "short" && x(k);
        });
      }
      J((x) => Le(y, `${x ?? ""} `), [
        () => (se(a()), se(i()), ae(() => a()(f[i()] || f.file)))
      ]), B(m, p);
    };
    Y(b, (m) => {
      l(n) || l(r) ? m(d) : m(h, -1);
    });
  }
  J(() => D = Oe(g, 1, "icon-wrap svelte-cmuu9m", null, D, { hovered: u() })), B(t, v), Qe();
}
var Bh = /* @__PURE__ */ q('<button aria-label="Upload file"><!></button>'), Ih = /* @__PURE__ */ q('<button aria-label="Record audio"><!></button>'), Rh = /* @__PURE__ */ q('<button aria-label="Capture from camera"><!></button>'), Lh = /* @__PURE__ */ q('<button aria-label="Record video from camera"><!></button>'), Oh = /* @__PURE__ */ q('<button aria-label="Paste from clipboard"><!></button>'), Nh = /* @__PURE__ */ q('<span class="source-selection svelte-5d261r" data-testid="source-select"><!> <!> <!> <!> <!></span>');
function Ph(t, e) {
  Je(e, !0);
  var n = this && this.__awaiter || function(v, g, D, F) {
    function A(_) {
      return _ instanceof D ? _ : new D(function(b) {
        b(_);
      });
    }
    return new (D || (D = Promise))(function(_, b) {
      function d(p) {
        try {
          m(F.next(p));
        } catch (y) {
          b(y);
        }
      }
      function h(p) {
        try {
          m(F.throw(p));
        } catch (y) {
          b(y);
        }
      }
      function m(p) {
        p.done ? _(p.value) : A(p.value).then(d, h);
      }
      m((F = F.apply(v, g || [])).next());
    });
  };
  let r = w(e, "active_source", 15), i = w(e, "handle_clear", 3, () => {
  }), a = w(e, "handle_select", 3, () => {
  }), s = Ge(() => [...new Set(e.sources)]);
  function o(v) {
    return n(this, void 0, void 0, function* () {
      i()(), r(v), a()(v);
    });
  }
  var u = qe(), c = _e(u);
  {
    var f = (v) => {
      var g = Nh(), D = H(g);
      {
        var F = (O) => {
          var U = Bh();
          let W;
          var ue = H(U);
          ks(ue), J(() => W = Oe(U, 1, "icon svelte-5d261r", null, W, { selected: r() === "upload" || !r() })), Rt("click", U, () => o("upload")), B(O, U);
        }, A = Ge(() => e.sources.includes("upload"));
        Y(D, (O) => {
          l(A) && O(F);
        });
      }
      var _ = G(D, 2);
      {
        var b = (O) => {
          var U = Ih();
          let W;
          var ue = H(U);
          fh(ue), J(() => W = Oe(U, 1, "icon svelte-5d261r", null, W, { selected: r() === "microphone" })), Rt("click", U, () => o("microphone")), B(O, U);
        }, d = Ge(() => e.sources.includes("microphone"));
        Y(_, (O) => {
          l(d) && O(b);
        });
      }
      var h = G(_, 2);
      {
        var m = (O) => {
          var U = Rh();
          let W;
          var ue = H(U);
          Cs(ue), J(() => W = Oe(U, 1, "icon svelte-5d261r", null, W, { selected: r() === "webcam" })), Rt("click", U, () => o("webcam")), B(O, U);
        }, p = Ge(() => e.sources.includes("webcam"));
        Y(h, (O) => {
          l(p) && O(m);
        });
      }
      var y = G(h, 2);
      {
        var E = (O) => {
          var U = Lh();
          let W;
          var ue = H(U);
          _h(ue), J(() => W = Oe(U, 1, "icon svelte-5d261r", null, W, { selected: r() === "webcam-video" })), Rt("click", U, () => o("webcam-video")), B(O, U);
        }, k = Ge(() => e.sources.includes("webcam-video"));
        Y(y, (O) => {
          l(k) && O(E);
        });
      }
      var x = G(y, 2);
      {
        var S = (O) => {
          var U = Oh();
          let W;
          var ue = H(U);
          Fs(ue), J(() => W = Oe(U, 1, "icon svelte-5d261r", null, W, { selected: r() === "clipboard" })), Rt("click", U, () => o("clipboard")), B(O, U);
        }, T = Ge(() => e.sources.includes("clipboard"));
        Y(x, (O) => {
          l(T) && O(S);
        });
      }
      B(v, g);
    };
    Y(c, (v) => {
      l(s).length > 1 && v(f);
    });
  }
  B(t, u), Qe();
}
kn(["click"]);
function Dr(t) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; t > 1e3 && n < e.length - 1; )
    t /= 1e3, n++;
  let r = e[n];
  return (Number.isInteger(t) ? t : t.toFixed(1)) + r;
}
function ca(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Yr(t, e, n, r) {
  if (typeof n == "number" || ca(n)) {
    const i = r - n, a = (n - e) / (t.dt || 1 / 60), s = t.opts.stiffness * i, o = t.opts.damping * a, u = (s - o) * t.inv_mass, c = (a + u) * t.dt;
    return Math.abs(c) < t.opts.precision && Math.abs(i) < t.opts.precision ? r : (t.settled = !1, ca(n) ? new Date(n.getTime() + c) : n + c);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, a) => (
          // @ts-ignore
          Yr(t, e[a], n[a], r[a])
        )
      );
    if (typeof n == "object") {
      const i = {};
      for (const a in n)
        i[a] = Yr(t, e[a], n[a], r[a]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function ha(t, e = {}) {
  const n = Cn(t), { stiffness: r = 0.15, damping: i = 0.8, precision: a = 0.01 } = e;
  let s, o, u, c = (
    /** @type {T} */
    t
  ), f = (
    /** @type {T | undefined} */
    t
  ), v = 1, g = 0, D = !1;
  function F(_, b = {}) {
    f = _;
    const d = u = {};
    return t == null || b.hard || A.stiffness >= 1 && A.damping >= 1 ? (D = !0, s = dt.now(), c = _, n.set(t = f), Promise.resolve()) : (b.soft && (g = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60), v = 0), o || (s = dt.now(), D = !1, o = Pa((h) => {
      if (D)
        return D = !1, o = null, !1;
      v = Math.min(v + g, 1);
      const m = Math.min(h - s, 1e3 / 30), p = {
        inv_mass: v,
        opts: A,
        settled: !0,
        dt: m * 60 / 1e3
      }, y = Yr(p, c, t, f);
      return s = h, c = /** @type {T} */
      t, n.set(t = /** @type {T} */
      y), p.settled && (o = null), !p.settled;
    })), new Promise((h) => {
      o.promise.then(() => {
        d === u && h();
      });
    }));
  }
  const A = {
    set: F,
    update: (_, b) => F(_(
      /** @type {T} */
      f,
      /** @type {T} */
      t
    ), b),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: a
  };
  return A;
}
var Hh = /* @__PURE__ */ q('<div><svg viewBox="-1200 -1200 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-m6d381"><g><path d="M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z" fill="#FF7C00" class="svelte-m6d381"></path></g><g><path d="M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z" fill="#FF7C00" class="svelte-m6d381"></path></g></svg></div>');
function Mh(t, e) {
  Je(e, !0);
  const n = () => _i(u, "$top", i), r = () => _i(c, "$bottom", i), [i, a] = So();
  var s = this && this.__awaiter || function(h, m, p, y) {
    function E(k) {
      return k instanceof p ? k : new p(function(x) {
        x(k);
      });
    }
    return new (p || (p = Promise))(function(k, x) {
      function S(U) {
        try {
          O(y.next(U));
        } catch (W) {
          x(W);
        }
      }
      function T(U) {
        try {
          O(y.throw(U));
        } catch (W) {
          x(W);
        }
      }
      function O(U) {
        U.done ? k(U.value) : E(U.value).then(S, T);
      }
      O((y = y.apply(h, m || [])).next());
    });
  };
  let o = w(e, "margin", 3, !0);
  const u = ha([0, 0]), c = ha([0, 0]);
  let f = nt(!1);
  function v() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 140]), c.set([-125, -140])]), yield Promise.all([u.set([-125, 140]), c.set([125, -140])]), yield Promise.all([u.set([-125, 0]), c.set([125, -0])]), yield Promise.all([u.set([125, 0]), c.set([-125, 0])]);
    });
  }
  function g() {
    return s(this, void 0, void 0, function* () {
      yield v(), l(f) || g();
    });
  }
  function D() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 0]), c.set([-125, 0])]), g();
    });
  }
  ct(() => (D(), () => {
    R(f, !0);
  }));
  var F = Hh();
  let A;
  var _ = H(F), b = H(_), d = G(b);
  J(() => {
    A = Oe(F, 1, "svelte-m6d381", null, A, { margin: o() }), lt(b, `transform: translate(${n()[0] ?? ""}px, ${n()[1] ?? ""}px);`), lt(d, `transform: translate(${r()[0] ?? ""}px, ${r()[1] ?? ""}px);`);
  }), B(t, F), Qe(), a();
}
var zh = function(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(f) {
      try {
        c(r.next(f));
      } catch (v) {
        s(v);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (v) {
        s(v);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(o, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
let Gn = [], Ar = !1;
const Uh = typeof window < "u", Ss = Uh ? window.requestAnimationFrame : (t) => {
};
function Gh(t) {
  return zh(this, arguments, void 0, function* (e, n = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && n !== !0)) {
      if (Gn.push(e), !Ar) Ar = !0;
      else return;
      yield ni(), Ss(() => {
        let r = [0, 0];
        for (let i = 0; i < Gn.length; i++) {
          const s = Gn[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= r[0]) && (r[0] = s.top + window.scrollY, r[1] = i);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), Ar = !1, Gn = [];
      });
    }
  });
}
var Wh = /* @__PURE__ */ q('<div class="validation-error svelte-124hqw6"> <button class="svelte-124hqw6"><!></button></div>'), jh = /* @__PURE__ */ q('<div class="eta-bar svelte-124hqw6"></div>'), Xh = /* @__PURE__ */ q("<!> ", 1), qh = /* @__PURE__ */ q("<!> <!> <!> <!>", 1), Vh = /* @__PURE__ */ q('<div class="progress-level svelte-124hqw6"><div class="progress-level-inner svelte-124hqw6"><!></div> <div class="progress-bar-wrap svelte-124hqw6"><div class="progress-bar svelte-124hqw6"></div></div></div>'), Yh = /* @__PURE__ */ q('<p class="loading svelte-124hqw6"> </p> <!>', 1), Zh = /* @__PURE__ */ q("<!> <div><!> <!></div> <!> <!>", 1), Kh = /* @__PURE__ */ q('<div class="clear-status svelte-124hqw6"><!></div> <span class="error svelte-124hqw6"> </span> <!>', 1), Qh = /* @__PURE__ */ q('<div data-testid="status-tracker"><!> <!></div>');
function Jh(t, e) {
  Je(e, !0);
  let n = w(e, "eta", 7, null), r = w(e, "scroll_to_output", 3, !1), i = w(e, "timer", 3, !0), a = w(e, "show_progress", 3, "full"), s = w(e, "message", 3, null), o = w(e, "progress", 3, null), u = w(e, "variant", 3, "default"), c = w(e, "loading_text", 3, "Loading..."), f = w(e, "absolute", 3, !0), v = w(e, "translucent", 3, !1), g = w(e, "border", 3, !1), D = w(e, "validation_error", 7, null), F = w(e, "show_validation_error", 3, !0), A = w(e, "type", 3, null), _, b = !1, d = nt(0), h = nt(null), m = nt(null), p = nt(!1), y = nt(null);
  const E = Ge(() => A() === "input" || !e.status || e.status === "complete" || a() === "hidden" || e.status == "streaming" || !!(F() && D()));
  let k = nt(0);
  const x = Ge(() => l(m) === null || l(m) <= 0 || !l(k) ? 0 : Math.min(l(k) / l(m), 1)), S = Ge(() => l(k).toFixed(1));
  let T = Ge(() => o() == null);
  function O() {
    Ss(() => {
      R(k, (performance.now() - l(d)) / 1e3), b && O();
    });
  }
  let U = Ge(() => {
    let re = null;
    o() != null ? re = o().map((N) => {
      if (N.index != null && N.length != null)
        return N.index / N.length;
      if (N.progress != null)
        return N.progress;
    }) : re = null;
    let X, Q = "";
    return re ? (X = re[re.length - 1], X === 0 ? Q = "0" : Q = "150ms") : X = void 0, {
      progress_level: re,
      last_progress_level: X,
      progress_bar_transition: Q
    };
  });
  function W() {
    b || (R(h, R(y, null), !0), R(d, performance.now(), !0), b = !0, O());
  }
  function ue() {
    R(h, R(y, null), !0), b && (b = !1);
  }
  ct(() => {
    e.status === "pending" ? W() : ae(() => {
      ue();
    });
  }), ct(() => {
    _ && r() && (e.status === "pending" || e.status === "complete") && Gh(_, e.autoscroll);
  }), ct(() => {
    n() === null && n(l(h)), n() != null && l(h) !== n() && (R(m, (performance.now() - l(d)) / 1e3 + n()), R(y, l(m).toFixed(1), !0), R(h, n(), !0));
  });
  function oe() {
    R(p, !1);
  }
  ct(() => {
    ae(() => {
      oe();
    }), e.status === "error" && s() && R(p, !0);
  });
  var Fe = Qh();
  let K, ne;
  var De = H(Fe);
  {
    var xe = (re) => {
      var X = Wh(), Q = H(X), N = G(Q), I = H(N);
      {
        let L = Ge(() => e.i18n ? e.i18n("common.clear") : "Clear");
        En(I, {
          get Icon() {
            return Vr;
          },
          get label() {
            return l(L);
          },
          disabled: !1,
          size: "x-small",
          background: "var(--background-fill-primary)",
          color: "var(--error-background-text)",
          border: "var(--border-color-primary)",
          onclick: () => D(null)
        });
      }
      J(() => Le(Q, `${D() ?? ""} `)), B(re, X);
    };
    Y(De, (re) => {
      D() && F() && re(xe);
    });
  }
  var fe = G(De, 2);
  {
    var Ne = (re) => {
      var X = Zh(), Q = _e(X);
      {
        var N = (z) => {
          var V = jh();
          let ve;
          J(() => ve = lt(V, "", ve, {
            transform: `translateX(${(l(x) || 0) * 100 - 100}%)`
          })), B(z, V);
        };
        Y(Q, (z) => {
          u() === "default" && l(T) && a() === "full" && z(N);
        });
      }
      var I = G(Q, 2);
      let L;
      var P = H(I);
      {
        var M = (z) => {
          var V = qe(), ve = _e(V);
          $n(ve, 17, o, Jn, (de, ce) => {
            var ye = qe(), Be = _e(ye);
            {
              var Me = (Ie) => {
                var ze = Xh(), je = _e(ze);
                {
                  var mt = (ht) => {
                    var Dt = kt();
                    J((Mt, zt) => Le(Dt, `${Mt ?? ""}/${zt ?? ""}`), [
                      () => Dr(l(ce).index || 0),
                      () => Dr(l(ce).length)
                    ]), B(ht, Dt);
                  }, Et = (ht) => {
                    var Dt = kt();
                    J((Mt) => Le(Dt, Mt), [() => Dr(l(ce).index || 0)]), B(ht, Dt);
                  };
                  Y(je, (ht) => {
                    l(ce).length != null ? ht(mt) : ht(Et, -1);
                  });
                }
                var Ct = G(je);
                J(() => Le(Ct, ` ${l(ce).unit ?? ""} |  `)), B(Ie, ze);
              };
              Y(Be, (Ie) => {
                l(ce).index != null && Ie(Me);
              });
            }
            B(de, ye);
          }), B(z, V);
        }, te = (z) => {
          var V = kt();
          J(() => Le(V, `queue: ${e.queue_position + 1}/${e.queue_size ?? ""} |`)), B(z, V);
        }, le = (z) => {
          var V = kt("processing |");
          B(z, V);
        };
        Y(P, (z) => {
          o() ? z(M) : e.queue_position !== null && e.queue_size !== void 0 && e.queue_position >= 0 ? z(te, 1) : e.queue_position === 0 && z(le, 2);
        });
      }
      var ke = G(P, 2);
      {
        var $e = (z) => {
          var V = kt();
          J(() => Le(V, `${l(S) ?? ""}${n() ? `/${l(y)}` : ""}s`)), B(z, V);
        };
        Y(ke, (z) => {
          i() && z($e);
        });
      }
      var et = G(I, 2);
      {
        var Pe = (z) => {
          var V = Vh(), ve = H(V), de = H(ve);
          {
            var ce = (Ie) => {
              var ze = qe(), je = _e(ze);
              $n(je, 17, o, Jn, (mt, Et, Ct) => {
                var ht = qe(), Dt = _e(ht);
                {
                  var Mt = (zt) => {
                    var At = qh(), Ut = _e(At);
                    {
                      var Gt = (Ye) => {
                        var ft = kt(" /");
                        B(Ye, ft);
                      };
                      Y(Ut, (Ye) => {
                        Ct !== 0 && Ye(Gt);
                      });
                    }
                    var Rn = G(Ut, 2);
                    {
                      var fr = (Ye) => {
                        var ft = kt();
                        J(() => Le(ft, l(Et).desc)), B(Ye, ft);
                      };
                      Y(Rn, (Ye) => {
                        l(Et).desc != null && Ye(fr);
                      });
                    }
                    var Wt = G(Rn, 2);
                    {
                      var Ln = (Ye) => {
                        var ft = kt("-");
                        B(Ye, ft);
                      };
                      Y(Wt, (Ye) => {
                        l(Et).desc != null && l(U).progress_level && l(U).progress_level[Ct] != null && Ye(Ln);
                      });
                    }
                    var On = G(Wt, 2);
                    {
                      var jt = (Ye) => {
                        var ft = kt();
                        J((Nn) => Le(ft, `${Nn ?? ""}%`), [
                          () => (100 * (l(U).progress_level[Ct] || 0)).toFixed(1)
                        ]), B(Ye, ft);
                      };
                      Y(On, (Ye) => {
                        l(U).progress_level != null && Ye(jt);
                      });
                    }
                    B(zt, At);
                  };
                  Y(Dt, (zt) => {
                    (l(Et).desc != null || l(U).progress_level && l(U).progress_level[Ct] != null) && zt(Mt);
                  });
                }
                B(mt, ht);
              }), B(Ie, ze);
            };
            Y(de, (Ie) => {
              o() != null && Ie(ce);
            });
          }
          var ye = G(ve, 2), Be = H(ye);
          let Me;
          J(() => Me = lt(Be, "", Me, {
            width: `${l(U).last_progress_level * 100}%`,
            transition: l(U).progress_bar_transition
          })), B(z, V);
        }, He = (z) => {
          {
            let V = Ge(() => u() === "default");
            Mh(z, {
              get margin() {
                return l(V);
              }
            });
          }
        };
        Y(et, (z) => {
          l(U).last_progress_level != null ? z(Pe) : a() === "full" && z(He, 1);
        });
      }
      var he = G(et, 2);
      {
        var Re = (z) => {
          var V = Yh(), ve = _e(V), de = H(ve), ce = G(ve, 2);
          Pt(ce, e, "additional-loading-text", {}), J(() => Le(de, c())), B(z, V);
        };
        Y(he, (z) => {
          i() || z(Re);
        });
      }
      J(() => L = Oe(I, 1, "progress-text svelte-124hqw6", null, L, {
        "meta-text-center": u() === "center",
        "meta-text": u() === "default"
      })), B(re, X);
    }, Ae = (re) => {
      var X = Kh(), Q = _e(X), N = H(Q);
      {
        let M = Ge(() => e.i18n("common.clear"));
        En(N, {
          get Icon() {
            return Vr;
          },
          get label() {
            return l(M);
          },
          disabled: !1,
          $$events: {
            click: () => {
              e.on_clear_status?.();
            }
          }
        });
      }
      var I = G(Q, 2), L = H(I), P = G(I, 2);
      Pt(P, e, "error", {}), J((M) => Le(L, M), [() => e.i18n("common.error")]), B(re, X);
    };
    Y(fe, (re) => {
      e.status === "pending" ? re(Ne) : e.status === "error" && re(Ae, 1);
    });
  }
  Zt(Fe, (re) => _ = re, () => _), J(() => {
    K = Oe(Fe, 1, `wrap ${u() ?? ""} ${a() ?? ""}`, "svelte-124hqw6", K, {
      "no-click": D() && F(),
      hide: l(E),
      translucent: u() === "center" && (e.status === "pending" || e.status === "error") || v() || a() === "minimal" || D(),
      generating: e.status === "generating" && a() === "full",
      border: g()
    }), ne = lt(Fe, "", ne, {
      position: f() ? "absolute" : "static",
      padding: f() ? "0" : "var(--size-8) 0"
    });
  }), B(t, Fe), Qe();
}
const $h = (t) => t;
function ef(t, { delay: e = 0, duration: n = 400, easing: r = $h } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (a) => `opacity: ${a * i}`
  };
}
kn(["touchstart", "touchmove", "touchend", "click", "keydown"]);
var tf = /* @__PURE__ */ q('<div class="streaming-bar svelte-xj6qzf"></div>');
function nf(t, e) {
  var n = qe(), r = _e(n);
  {
    var i = (a) => {
      var s = tf();
      let o;
      J(() => o = lt(s, "", o, { "animation-duration": `${e.time_limit ?? ""}s` })), B(a, s);
    };
    Y(r, (a) => {
      e.time_limit && a(i);
    });
  }
  B(t, n);
}
const Wn = (t, e, n) => Math.min(Math.max(t, e), n);
class rf {
  constructor(e) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (n) => {
      if (this.isDragging) {
        let r = n.clientX - this.startDragX - this.offsetX, i = n.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? r = Wn(r, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : r = Wn(r, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? i = Wn(i, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : i = Wn(i, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += r, this.offsetY += i, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX - this.offsetX, this.startDragY = e.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, n, r = 0, i = 0) {
    this.canvasWidth == e && this.canvasHeight == n || (this.canvasWidth = e, this.canvasHeight = n, this.scale = 1, this.offsetX = r, this.offsetY = i);
  }
}
const Ke = (t, e, n) => Math.min(Math.max(t, e), n);
function Fr(t, e) {
  if (t.startsWith("rgba"))
    return t.replace(/[\d.]+$/, e.toString());
  const n = t.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [r, i, a] = n;
  return `rgba(${r}, ${i}, ${a}, ${e})`;
}
class fa {
  constructor(e, n, r, i, a, s, o, u, c, f, v, g, D = "rgb(255, 255, 255)", F = 0.5, A = "", _ = "", b = 0, d = 25, h = 8, m = 2, p = 4, y = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (E) => {
      if (this.isDragging) {
        let k = (E.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, x = (E.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, T = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = Ke(k, -this._xmin, S - this._xmax), x = Ke(x, -this._ymin, T - this._ymax), this._xmin += k, this._ymin += x, this._xmax += k, this._ymax += x, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (E) => {
      if (this.isCreating) {
        let [k, x] = this.toBoxCoordinates(E.clientX, E.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, x = (x - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), x > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = x, this.creatingAnchorY = "ymin") : x > this._ymin && x < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = x : x > this._ymin && x < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = x : x < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = x, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (E) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, x = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ke(this._xmin, 0, k - this.minSize), this._ymin = Ke(this._ymin, 0, x - this.minSize), this._xmax = Ke(this._xmax, this.minSize, k), this._ymax = Ke(this._ymax, this.minSize, x), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > k ? (this._xmin -= this._xmax - k, this._xmax = k) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > x ? (this._ymin -= this._ymax - x, this._ymax = x) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (E) => {
      if (this.isResizing) {
        const k = E.clientX, x = E.clientY, S = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, T = (x - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, O = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, U = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += S, this._ymin += T, this._xmin = Ke(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += S, this._ymin += T, this._xmax = Ke(this._xmax, this._xmin + this.minSize, O), this._ymin = Ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += S, this._ymax += T, this._xmax = Ke(this._xmax, this._xmin + this.minSize, O), this._ymax = Ke(this._ymax, this._ymin + this.minSize, U);
            break;
          case 3:
            this._xmin += S, this._ymax += T, this._xmin = Ke(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ke(this._ymax, this._ymin + this.minSize, U);
            break;
          case 4:
            this._ymin += T, this._ymin = Ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += S, this._xmax = Ke(this._xmax, this._xmin + this.minSize, O);
            break;
          case 6:
            this._ymax += T, this._ymax = Ke(this._ymax, this._ymin + this.minSize, U);
            break;
          case 7:
            this._xmin += S, this._xmin = Ke(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = n, this.canvasWindow = r, this.canvasXmin = i, this.canvasYmin = a, this.canvasXmax = s, this.canvasYmax = o, this.scaleFactor = y, this.label = u, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = v, this._ymax = g, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = h ?? 8, this.thickness = m, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = d, this.color = D, this.alpha = F, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.id = A, this.text = _, this.page = b;
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
      text: this.text,
      page: this.page
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let n = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * n), this._ymin = Math.round(this._ymin * n), this._xmax = Math.round(this._xmax * n), this._ymax = Math.round(this._ymax * n), this.applyUserScale(), this.scaleFactor = e;
  }
  /**
   * Scale box coordinates from (oldDisplayHeight, oldDisplayWidth) space into
   * the new display size after a rotation, using separate x/y scale factors
   * so aspect-ratio change from the rotation is handled correctly.
   */
  scaleFromRotatedDisplay(e, n) {
    this._xmin = Math.round(this._xmin * e), this._xmax = Math.round(this._xmax * e), this._ymin = Math.round(this._ymin * n), this._ymax = Math.round(this._ymax * n);
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, n = this.getWidth(), r = this.getHeight();
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
        xmin: this.xmin + n / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + n / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + r / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + r / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + n / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + n / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + r / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + r / 2 + e,
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
  toCanvasCoordinates(e, n) {
    return e = e + this.canvasXmin, n = n + this.canvasYmin, [e, n];
  }
  toBoxCoordinates(e, n) {
    return e = e - this.canvasXmin, n = n - this.canvasYmin, [e, n];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let n, r;
    if (this.updateOffset(), e.beginPath(), [n, r] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(n, r, this.getWidth(), this.getHeight()), e.fillStyle = Fr(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Fr(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, a = 20;
      let s = this.xmin, o = this.ymin - a;
      e.fillStyle = "white", [s, o] = this.toCanvasCoordinates(s, o), e.fillRect(s, o, i, a), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, o, i, a), e.fillStyle = "black", e.fillText(this.label, s + 5, o + 15);
    }
    e.fillStyle = Fr(this.color, 1);
    for (const i of this.resizeHandles)
      [n, r] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        n,
        r,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, n) {
    return [e, n] = this.toBoxCoordinates(e, n), e >= this.xmin && e <= this.xmax && n >= this.ymin && n <= this.ymax;
  }
  indexOfPointInsideHandle(e, n) {
    [e, n] = this.toBoxCoordinates(e, n);
    for (let r = 0; r < this.resizeHandles.length; r++) {
      const i = this.resizeHandles[r];
      if (e >= i.xmin && e <= i.xmax && n >= i.ymin && n <= i.ymax)
        return this.resizingHandleIndex = r, r;
    }
    return -1;
  }
  startCreating(e, n, r) {
    this.isCreating = !0, this.offsetMouseX = n, this.offsetMouseY = r, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, n) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = n.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = n.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [n, r, i, a] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageHeight - a, this._xmax = this.canvasWindow.imageHeight - i, this._ymin = n, this._ymax = r;
        break;
      case -1:
        this._xmin = i, this._xmax = a, this._ymin = this.canvasWindow.imageWidth - r, this._ymax = this.canvasWindow.imageWidth - n;
        break;
    }
    this.applyUserScale();
  }
}
class da {
  constructor() {
    this.image = null, this.boxes = [], this.orientation = 0;
  }
}
const af = "WORKER_PROXY_CONTEXT_KEY";
function Ts() {
  return Do(af);
}
function sf(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function Bs(t, e) {
  const n = e.toLowerCase();
  for (const [r, i] of Object.entries(t))
    if (r.toLowerCase() === n)
      return i;
}
function of(t) {
  if (t == null)
    return !1;
  const e = new URL(t, window.location.href);
  return !(!sf(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function pa(t) {
  if (t == null || !of(t))
    return t;
  const e = Ts();
  if (e == null)
    return t;
  const r = new URL(t, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: r,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${r} from the Wasm worker.`);
    const a = new Blob([i.body], {
      type: Bs(i.headers, "content-type")
    });
    return URL.createObjectURL(a);
  });
}
var lf = /* @__PURE__ */ q("<a><!></a>"), uf = /* @__PURE__ */ q("<a><!></a>");
function cf(t, e) {
  const n = Ci(e, ["children", "$$slots", "$$events", "$$legacy"]), r = Ci(n, ["href", "download"]);
  Je(e, !1);
  var i = this && this.__awaiter || function(_, b, d, h) {
    function m(p) {
      return p instanceof d ? p : new d(function(y) {
        y(p);
      });
    }
    return new (d || (d = Promise))(function(p, y) {
      function E(S) {
        try {
          x(h.next(S));
        } catch (T) {
          y(T);
        }
      }
      function k(S) {
        try {
          x(h.throw(S));
        } catch (T) {
          y(T);
        }
      }
      function x(S) {
        S.done ? p(S.value) : m(S.value).then(E, k);
      }
      x((h = h.apply(_, b || [])).next());
    });
  };
  let a = w(e, "href", 8, void 0), s = w(e, "download", 8);
  const o = Ht();
  let u = ee(!1);
  const c = Ts();
  function f() {
    return i(this, void 0, void 0, function* () {
      if (l(u))
        return;
      if (o("click"), a() == null)
        throw new Error("href is not defined.");
      if (c == null)
        throw new Error("Wasm worker proxy is not available.");
      const b = new URL(a(), window.location.href).pathname;
      R(u, !0), c.httpRequest({ method: "GET", path: b, headers: {}, query_string: "" }).then((d) => {
        if (d.status !== 200)
          throw new Error(`Failed to get file ${b} from the Wasm worker.`);
        const h = new Blob([d.body], { type: Bs(d.headers, "content-type") }), m = URL.createObjectURL(h), p = document.createElement("a");
        p.href = m, p.download = s(), p.click(), URL.revokeObjectURL(m);
      }).finally(() => {
        R(u, !1);
      });
    });
  }
  gt();
  var v = qe(), g = _e(v);
  {
    var D = (_) => {
      var b = qe(), d = _e(b);
      {
        var h = (p) => {
          var y = qe(), E = _e(y);
          Pt(E, e, "default", {}), B(p, y);
        }, m = (p) => {
          var y = lf();
          Nr(y, () => ({ ...r, href: a() }));
          var E = H(y);
          Pt(E, e, "default", {}), ge("click", y, tl(f)), B(p, y);
        };
        Y(d, (p) => {
          l(u) ? p(h) : p(m, -1);
        });
      }
      B(_, b);
    }, F = Ge(() => (se(a()), ae(() => c && should_proxy_wasm_src(a())))), A = (_) => {
      var b = uf(), d = Ge(() => o.bind(null, "click"));
      Nr(b, () => ({
        href: a(),
        target: ae(() => typeof window < "u" && window.__is_colab__ ? "_blank" : null),
        rel: "noopener noreferrer",
        download: s(),
        ...r
      }));
      var h = H(b);
      Pt(h, e, "default", {}), ge("click", b, function(...m) {
        l(d)?.apply(this, m);
      }), B(_, b);
    };
    Y(g, (_) => {
      l(F) ? _(D) : _(A, -1);
    });
  }
  B(t, v), Qe();
}
async function Is(t, e) {
  return t.map(
    (n) => new hf({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: e
    })
  );
}
class hf {
  path;
  url;
  orig_name;
  size;
  blob;
  is_stream;
  mime_type;
  alt_text;
  b64;
  meta = { _type: "gradio.FileData" };
  constructor({
    path: e,
    url: n,
    orig_name: r,
    size: i,
    blob: a,
    is_stream: s,
    mime_type: o,
    alt_text: u,
    b64: c
  }) {
    this.path = e, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : a, this.is_stream = s, this.mime_type = o, this.alt_text = u, this.b64 = c;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class hd extends TransformStream {
  #e = "";
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (n, r) => {
        for (n = this.#e + n; ; ) {
          const i = n.indexOf(`
`), a = e.allowCR ? n.indexOf("\r") : -1;
          if (a !== -1 && a !== n.length - 1 && (i === -1 || i - 1 > a)) {
            r.enqueue(n.slice(0, a)), n = n.slice(a + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = n[i - 1] === "\r" ? i - 1 : i;
          r.enqueue(n.slice(0, s)), n = n.slice(i + 1);
        }
        this.#e = n;
      },
      flush: (n) => {
        if (this.#e === "")
          return;
        const r = e.allowCR && this.#e.endsWith("\r") ? this.#e.slice(0, -1) : this.#e;
        n.enqueue(r);
      }
    });
  }
}
var ff = /* @__PURE__ */ q('<div class="file svelte-12marlv"><span><div class="progress-bar svelte-12marlv"><progress style="visibility:hidden;height:0;width:0;" max="100" class="svelte-12marlv"> </progress></div></span> <span class="file-name svelte-12marlv"> </span></div>'), df = /* @__PURE__ */ q('<div><span class="uploading svelte-12marlv"> </span> <!></div>');
function pf(t, e) {
  Je(e, !0);
  var n = this && this.__awaiter || function(b, d, h, m) {
    function p(y) {
      return y instanceof h ? y : new h(function(E) {
        E(y);
      });
    }
    return new (h || (h = Promise))(function(y, E) {
      function k(T) {
        try {
          S(m.next(T));
        } catch (O) {
          E(O);
        }
      }
      function x(T) {
        try {
          S(m.throw(T));
        } catch (O) {
          E(O);
        }
      }
      function S(T) {
        T.done ? y(T.value) : p(T.value).then(k, x);
      }
      S((m = m.apply(b, d || [])).next());
    });
  };
  let r, i = nt(!1), a = nt(void 0), s = Ge(() => l(a) || l(o)[0]), o = nt(Qn(e.files.map((b) => Object.assign(Object.assign({}, b), { progress: 0 }))));
  function u(b, d) {
    R(
      o,
      l(o).map((h) => (h.orig_name === b && (h.progress += d), h)),
      !0
    );
  }
  function c(b) {
    return b.progress * 100 / (b.size || 0) || 0;
  }
  Sn(() => n(void 0, void 0, void 0, function* () {
    if (r = yield e.stream_handler(new URL(`${e.root}/gradio_api/upload_progress?upload_id=${e.upload_id}`)), r == null)
      throw new Error("Event source is not defined");
    r.onmessage = function(b) {
      return n(this, void 0, void 0, function* () {
        const d = JSON.parse(b.data);
        l(i) || R(i, !0), d.msg === "done" ? (r?.close(), e.ondone === null || e.ondone === void 0 || e.ondone()) : (R(a, d, !0), u(d.orig_name, d.chunk_size));
      });
    };
  })), Xa(() => {
    (r != null || r != null) && r.close();
  });
  function f(b) {
    let d = 0;
    return b.forEach((h) => {
      d += c(h);
    }), document.documentElement.style.setProperty("--upload-progress-width", (d / b.length).toFixed(2) + "%"), d / b.length;
  }
  ct(() => {
    f(l(o));
  });
  var v = df();
  let g;
  var D = H(v), F = H(D), A = G(D, 2);
  {
    var _ = (b) => {
      var d = ff(), h = H(d), m = H(h), p = H(m), y = H(p), E = G(h, 2), k = H(E);
      J(
        (x, S) => {
          Or(p, x), Le(y, S), Le(k, l(s).orig_name);
        },
        [
          () => c(l(s)),
          () => c(l(s))
        ]
      ), B(b, d);
    };
    Y(A, (b) => {
      l(s) && b(_);
    });
  }
  J(() => {
    g = Oe(v, 1, "wrap svelte-12marlv", null, g, { progress: l(i) }), Le(F, `Uploading ${l(o).length ?? ""}
		${l(o).length > 1 ? "files" : "file"}...`);
  }), B(t, v), Qe();
}
function gf() {
  let t, e;
  return {
    drag(n, r = {}) {
      e = r;
      function i() {
        t = document.createElement("input"), t.type = "file", t.style.display = "none", t.setAttribute("aria-label", "File upload"), t.setAttribute("data-testid", "file-upload");
        const v = Array.isArray(e.accepted_types) ? e.accepted_types.join(",") : e.accepted_types || void 0;
        v && (t.accept = v), t.multiple = e.mode === "multiple" || !1, e.mode === "directory" && (t.webkitdirectory = !0, t.setAttribute("directory", ""), t.setAttribute("mozdirectory", "")), n.appendChild(t);
      }
      i();
      function a(v) {
        v.preventDefault(), v.stopPropagation();
      }
      function s(v) {
        v.preventDefault(), v.stopPropagation(), e.on_drag_change?.(!0);
      }
      function o(v) {
        v.preventDefault(), v.stopPropagation(), e.on_drag_change?.(!1);
      }
      function u(v) {
        if (v.preventDefault(), v.stopPropagation(), e.on_drag_change?.(!1), !v.dataTransfer?.files)
          return;
        const g = Array.from(v.dataTransfer.files);
        g.length > 0 && e.on_files?.(g);
      }
      function c() {
        e.disable_click || (t.value = "", t.click());
      }
      function f() {
        if (t.files) {
          const v = Array.from(t.files);
          v.length > 0 && e.on_files?.(v);
        }
      }
      return n.addEventListener("drag", a), n.addEventListener("dragstart", a), n.addEventListener("dragend", a), n.addEventListener("dragover", a), n.addEventListener("dragenter", s), n.addEventListener("dragleave", o), n.addEventListener("drop", u), n.addEventListener("click", c), t.addEventListener("change", f), {
        update(v) {
          e = v, t.remove(), i(), t.addEventListener("change", f);
        },
        destroy() {
          n.removeEventListener("drag", a), n.removeEventListener("dragstart", a), n.removeEventListener("dragend", a), n.removeEventListener("dragover", a), n.removeEventListener("dragenter", s), n.removeEventListener("dragleave", o), n.removeEventListener("drop", u), n.removeEventListener("click", c), t.removeEventListener("change", f), t.remove();
        }
      };
    },
    open_file_upload() {
      t && (t.value = "", t.click());
    }
  };
}
var mf = /* @__PURE__ */ q("<button><!></button>"), vf = /* @__PURE__ */ q('<button aria-dropeffect="copy"><!></button>');
function bf(t, e) {
  Je(e, !0);
  var n = this && this.__awaiter || function(N, I, L, P) {
    function M(te) {
      return te instanceof L ? te : new L(function(le) {
        le(te);
      });
    }
    return new (L || (L = Promise))(function(te, le) {
      function ke(Pe) {
        try {
          et(P.next(Pe));
        } catch (He) {
          le(He);
        }
      }
      function $e(Pe) {
        try {
          et(P.throw(Pe));
        } catch (He) {
          le(He);
        }
      }
      function et(Pe) {
        Pe.done ? te(Pe.value) : M(Pe.value).then(ke, $e);
      }
      et((P = P.apply(N, I || [])).next());
    });
  };
  const { drag: r, open_file_upload: i } = gf();
  let a = w(e, "filetype", 3, null), s = w(e, "dragging", 15, !1), o = w(e, "boundedheight", 3, !0), u = w(e, "center", 3, !0), c = w(e, "flex", 3, !0), f = w(e, "file_count", 3, "single"), v = w(e, "disable_click", 3, !1), g = w(e, "hidden", 3, !1), D = w(e, "format", 3, "file"), F = w(e, "uploading", 15, !1), A = w(e, "show_progress", 3, !0), _ = w(e, "max_file_size", 3, null), b = w(e, "icon_upload", 3, !1), d = w(e, "height", 3, void 0), h = w(e, "aria_label", 3, void 0), m = w(e, "upload_promise", 15);
  function p() {
    i();
  }
  let y = "", E, k = nt(null), x = null, T = (() => {
    if (typeof navigator < "u") {
      const N = navigator.userAgent.toLowerCase();
      return N.indexOf("iphone") > -1 || N.indexOf("ipad") > -1;
    }
    return !1;
  })();
  const O = ["image", "video", "audio", "text", "file"], U = (N) => T && N.startsWith(".") ? (x = !0, N) : T && N.includes("file/*") ? "*" : N.startsWith(".") || N.endsWith("/*") ? N : O.includes(N) ? N + "/*" : "." + N;
  ct(() => {
    if (a() == null)
      R(k, null);
    else if (typeof a() == "string")
      R(k, U(a()), !0);
    else if (T && a().includes("file/*"))
      R(k, "*");
    else {
      const N = a().map(U);
      R(k, N.join(", "), !0);
    }
  });
  function W() {
    navigator.clipboard.read().then((N) => n(this, void 0, void 0, function* () {
      for (let I = 0; I < N.length; I++) {
        const L = N[I].types.find((P) => P.startsWith("image/"));
        if (L) {
          N[I].getType(L).then((P) => n(this, void 0, void 0, function* () {
            const M = new File([P], `clipboard.${L.replace("image/", "")}`);
            yield K([M]);
          }));
          break;
        }
      }
    }));
  }
  function ue() {
    i();
  }
  function oe(N, I) {
    return n(this, void 0, void 0, function* () {
      return I ? y = I : y = Math.random().toString(36).substring(2, 15), yield ni(), F(!0), m(new Promise((L) => n(this, void 0, void 0, function* () {
        try {
          const P = yield e.upload(N, e.root, y, _() !== null && _() !== void 0 ? _() : 1 / 0);
          e.onload === null || e.onload === void 0 || e.onload(f() === "single" ? P?.[0] : P), L(P || []), F(!1);
        } catch (P) {
          e.onerror === null || e.onerror === void 0 || e.onerror(P.message), F(!1), L([]);
        }
      }))), m();
    });
  }
  function Fe(N, I, L) {
    if (!N || N === "*" || N === "file/*" || Array.isArray(N) && N.some((M) => M === "*" || M === "file/*"))
      return !0;
    let P;
    if (typeof N == "string")
      P = N.split(",").map((M) => M.trim());
    else if (Array.isArray(N))
      P = N;
    else
      return !1;
    return P.includes(I) || P.some((M) => {
      const [te] = M.split("/").map((le) => le.trim());
      return M.endsWith("/*") && L.startsWith(te + "/");
    });
  }
  function K(N, I) {
    return n(this, void 0, void 0, function* () {
      if (!N.length)
        return;
      let L = N.map((P) => new File([P], P instanceof File ? P.name : "file", { type: P.type }));
      return T && x && (L = L.filter((P) => ne(P) ? !0 : (e.onerror === null || e.onerror === void 0 || e.onerror(`Invalid file type: ${P.name}. Only ${a()} allowed.`), !1)), L.length === 0) ? [] : (E = yield Is(L), yield oe(E, I));
    });
  }
  function ne(N) {
    return a() ? (Array.isArray(a()) ? a() : [a()]).some((L) => {
      const P = U(L);
      if (P.startsWith("."))
        return N.name.toLowerCase().endsWith(P.toLowerCase());
      if (P === "*")
        return !0;
      if (P.endsWith("/*")) {
        const [M] = P.split("/");
        return N.type.startsWith(M + "/");
      }
      return N.type === P;
    }) : !0;
  }
  function De(N) {
    return n(this, void 0, void 0, function* () {
      const I = N.filter((L) => {
        const P = "." + L.name.toLowerCase().split(".").pop();
        return P && Fe(l(k), P, L.type) || (P && Array.isArray(a()) ? a().includes(P) : P === a()) ? !0 : (e.onerror === null || e.onerror === void 0 || e.onerror(`Invalid file type only ${a()} allowed.`), !1);
      });
      if (D() != "blob")
        yield K(I);
      else {
        if (f() === "single") {
          e.onload === null || e.onload === void 0 || e.onload(I[0]);
          return;
        }
        e.onload === null || e.onload === void 0 || e.onload(I);
      }
    });
  }
  function xe(N) {
    return n(this, void 0, void 0, function* () {
      var I;
      if (s(!1), !(!((I = N.dataTransfer) === null || I === void 0) && I.files)) return;
      const L = Array.from(N.dataTransfer.files).filter(ne);
      if (D() != "blob")
        yield K(L);
      else {
        if (f() === "single") {
          e.onload === null || e.onload === void 0 || e.onload(L[0]);
          return;
        }
        e.onload === null || e.onload === void 0 || e.onload(L);
      }
    });
  }
  var fe = {
    open_upload: p,
    paste_clipboard: W,
    open_file_upload: ue,
    load_files: K,
    load_files_from_drop: xe
  }, Ne = qe(), Ae = _e(Ne);
  {
    var re = (N) => {
      var I = mf();
      let L, P;
      var M = H(I);
      {
        var te = (le) => {
          var ke = qe(), $e = _e(ke);
          Ir($e, () => e.children), B(le, ke);
        };
        Y(M, (le) => {
          e.children && le(te);
        });
      }
      J(() => {
        Xe(I, "tabindex", g() ? -1 : 0), Xe(I, "aria-label", h() || "Paste from clipboard"), L = Oe(I, 1, "svelte-tgi0k0", null, L, {
          hidden: g(),
          center: u(),
          boundedheight: o(),
          flex: c(),
          "icon-mode": b()
        }), P = lt(I, "", P, {
          height: b() ? "" : d() ? typeof d() == "number" ? d() + "px" : d() : "100%"
        });
      }), Rt("click", I, W), B(N, I);
    }, X = (N) => {
      var I = qe(), L = _e(I);
      {
        var P = (M) => {
          pf(M, {
            get root() {
              return e.root;
            },
            get upload_id() {
              return y;
            },
            get files() {
              return E;
            },
            get stream_handler() {
              return e.stream_handler;
            }
          });
        };
        Y(L, (M) => {
          g() || M(P);
        });
      }
      B(N, I);
    }, Q = (N) => {
      var I = vf();
      let L, P;
      var M = H(I);
      {
        var te = (le) => {
          var ke = qe(), $e = _e(ke);
          Ir($e, () => e.children), B(le, ke);
        };
        Y(M, (le) => {
          e.children && le(te);
        });
      }
      Ma(I, (le, ke) => r?.(le, ke), () => ({
        on_drag_change: (le) => s(le),
        on_files: (le) => De(le),
        accepted_types: l(k),
        mode: f(),
        disable_click: v()
      })), J(() => {
        Xe(I, "tabindex", g() ? -1 : 0), Xe(I, "aria-label", h() || "Click to upload or drop files"), L = Oe(I, 1, "svelte-tgi0k0", null, L, {
          hidden: g(),
          center: u(),
          boundedheight: o(),
          flex: c(),
          disable_click: v(),
          "icon-mode": b()
        }), P = lt(I, "", P, {
          height: b() ? "" : d() ? typeof d() == "number" ? d() + "px" : d() : "100%"
        });
      }), B(N, I);
    };
    Y(Ae, (N) => {
      a() === "clipboard" ? N(re) : F() && A() ? N(X, 1) : N(Q, -1);
    });
  }
  return B(t, Ne), Qe(fe);
}
kn(["click"]);
var _f = /* @__PURE__ */ q('<button class="svelte-9xp153"><div class="wrap svelte-9xp153"><span class="icon-wrap svelte-9xp153"><!></span> </div></button>');
function xf(t, e) {
  Je(e, !1);
  const n = Ht();
  gt();
  var r = _f();
  lt(r, "", {}, { height: "100%" });
  var i = H(r), a = H(i), s = H(a);
  Cs(s);
  var o = G(a);
  o.nodeValue = " Click to Access Webcam", ge("click", r, () => n("click")), B(t, r), Qe();
}
function yf() {
  return navigator.mediaDevices.enumerateDevices();
}
function wf(t, e) {
  e.srcObject = t, e.muted = !0, e.play();
}
async function ga(t, e, n, r) {
  const i = {
    video: r ? { deviceId: { exact: r }, ...n?.video } : n?.video || {
      width: { ideal: 1920 },
      height: { ideal: 1440 }
    },
    audio: t && (n?.audio ?? !0)
    // Defaults to true if not specified
  };
  return navigator.mediaDevices.getUserMedia(i).then((a) => (wf(a, e), a));
}
function Ef(t) {
  return t.filter((n) => n.kind === "videoinput");
}
var Df = /* @__PURE__ */ q('<div title="grant webcam access" style="height: 100%"><!></div>'), Af = /* @__PURE__ */ q('<div class="icon-with-text svelte-1d3tw37" style="width:var(--size-24);"><div class="icon color-primary svelte-1d3tw37" title="spinner"><!></div> </div>'), Ff = /* @__PURE__ */ q('<div class="icon-with-text svelte-1d3tw37"><div class="icon color-primary svelte-1d3tw37" title="stop recording"><!></div> </div>'), kf = /* @__PURE__ */ q('<div class="icon-with-text svelte-1d3tw37"><div class="icon color-primary svelte-1d3tw37" title="start recording"><!></div> </div>'), Cf = /* @__PURE__ */ q('<div class="icon svelte-1d3tw37" title="capture photo"><!></div>'), Sf = /* @__PURE__ */ q('<button class="icon svelte-1d3tw37" aria-label="select input source"><!></button>'), Tf = /* @__PURE__ */ q('<option class="svelte-1d3tw37"> </option>'), Bf = /* @__PURE__ */ q('<option class="svelte-1d3tw37"> </option>'), If = /* @__PURE__ */ q('<select class="select-wrap svelte-1d3tw37" aria-label="select source"><!></select>'), Rf = /* @__PURE__ */ q('<div class="button-wrap svelte-1d3tw37"><button class="svelte-1d3tw37"><!></button> <!></div> <!>', 1), Lf = /* @__PURE__ */ q('<div class="wrap svelte-1d3tw37"><!>  <video></video> <img/> <!></div>', 2);
function Of(t, e) {
  Je(e, !1);
  var n = this && this.__awaiter || function(I, L, P, M) {
    function te(le) {
      return le instanceof P ? le : new P(function(ke) {
        ke(le);
      });
    }
    return new (P || (P = Promise))(function(le, ke) {
      function $e(He) {
        try {
          Pe(M.next(He));
        } catch (he) {
          ke(he);
        }
      }
      function et(He) {
        try {
          Pe(M.throw(He));
        } catch (he) {
          ke(he);
        }
      }
      function Pe(He) {
        He.done ? le(He.value) : te(He.value).then($e, et);
      }
      Pe((M = M.apply(I, L || [])).next());
    });
  };
  let r = ee(), i = ee([]), a = ee(null), s = w(e, "stream_state", 8, "closed"), o, u = w(e, "streaming", 8, !1), c = w(e, "pending", 8, !1), f = w(e, "root", 8, ""), v = w(e, "stream_every", 8, 1), g = w(e, "mode", 8, "image"), D = w(e, "mirror_webcam", 8), F = w(e, "include_audio", 8), A = w(e, "webcam_constraints", 8, null), _ = w(e, "i18n", 8), b = w(e, "upload", 8), d = w(e, "value", 8, null), h = w(e, "time_limit", 8, null);
  const m = Ht();
  Sn(() => {
    o = document.createElement("canvas"), u() && g() === "image" && window.setInterval(
      () => {
        l(r) && !c() && E();
      },
      v() * 1e3
    );
  });
  const p = (I) => n(void 0, void 0, void 0, function* () {
    const P = I.target.value;
    yield ga(F(), l(r), A(), P).then((M) => n(void 0, void 0, void 0, function* () {
      S = M, R(a, l(i).find((te) => te.deviceId === P) || null), R(oe, !1);
    }));
  });
  function y() {
    return n(this, void 0, void 0, function* () {
      try {
        ga(F(), l(r), A()).then((I) => n(this, void 0, void 0, function* () {
          R(W, !0), R(i, yield yf()), S = I;
        })).then(() => Ef(l(i))).then((I) => {
          R(i, I);
          const L = S.getTracks().map((P) => {
            var M;
            return (M = P.getSettings()) === null || M === void 0 ? void 0 : M.deviceId;
          })[0];
          R(a, L ? I.find((P) => P.deviceId === L) || l(i)[0] : l(i)[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", _()("image.no_webcam_support"));
      } catch (I) {
        if (I instanceof DOMException && I.name == "NotAllowedError")
          m("error", _()("image.allow_webcam_access"));
        else
          throw I;
      }
    });
  }
  function E() {
    if ((!u() || u() && l(k)) && l(r).videoWidth && l(r).videoHeight) {
      var I = o.getContext("2d");
      if (o.width = l(r).videoWidth, o.height = l(r).videoHeight, I.drawImage(l(r), 0, 0, l(r).videoWidth, l(r).videoHeight), D() && (I.scale(-1, 1), I.drawImage(l(r), -l(r).videoWidth, 0)), u() && (!l(k) || s() === "waiting"))
        return;
      if (u()) {
        const L = o.toDataURL("image/jpeg");
        m("stream", L);
        return;
      }
      o.toBlob(
        (L) => {
          m(u() ? "stream" : "capture", L);
        },
        `image/${u() ? "jpeg" : "png"}`,
        0.8
      );
    }
  }
  let k = ee(!1), x = [], S, T, O;
  function U() {
    if (l(k)) {
      O.stop();
      let I = new Blob(x, { type: T }), L = new FileReader();
      L.onload = function(P) {
        return n(this, void 0, void 0, function* () {
          var M;
          if (P.target) {
            let te = new File([I], "sample." + T.substring(6));
            const le = yield Is([te]);
            let ke = ((M = yield b()(le, f())) === null || M === void 0 ? void 0 : M.filter(Boolean))[0];
            m("capture", ke), m("stop_recording");
          }
        });
      }, L.readAsDataURL(I);
    } else if (typeof MediaRecorder < "u") {
      m("start_recording"), x = [];
      let I = ["video/webm", "video/mp4"];
      for (let L of I)
        if (MediaRecorder.isTypeSupported(L)) {
          T = L;
          break;
        }
      if (T === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      O = new MediaRecorder(S, { mimeType: T }), O.addEventListener("dataavailable", function(L) {
        x.push(L.data);
      }), O.start(200);
    }
    R(k, !l(k));
  }
  let W = ee(!1);
  function ue({ destroy: I } = {}) {
    g() === "image" && u() && R(k, !l(k)), I || (g() === "image" ? E() : U()), !l(k) && S && m("close_stream");
  }
  let oe = ee(!1);
  function Fe(I, L) {
    const P = (M) => {
      I && !I.contains(M.target) && !M.defaultPrevented && L(M);
    };
    return document.addEventListener("click", P, !0), {
      destroy() {
        document.removeEventListener("click", P, !0);
      }
    };
  }
  function K(I) {
    I.preventDefault(), I.stopPropagation(), R(oe, !1);
  }
  Xa(() => {
    typeof window > "u" || (ue({ destroy: !0 }), S?.getTracks().forEach((I) => I.stop()));
  });
  var ne = { click_outside: Fe };
  gt();
  var De = Lf(), xe = H(De);
  nf(xe, {
    get time_limit() {
      return h();
    }
  });
  var fe = G(xe, 2);
  let Ne;
  Zt(fe, (I) => R(r, I), () => l(r));
  var Ae = G(fe, 2);
  let re;
  var X = G(Ae, 2);
  {
    var Q = (I) => {
      var L = Df(), P = H(L);
      xf(P, { $$events: { click: async () => y() } }), Go(1, L, () => ef, () => ({ delay: 100, duration: 200 })), B(I, L);
    }, N = (I) => {
      var L = Rf(), P = _e(L), M = H(P), te = H(M);
      {
        var le = (he) => {
          var Re = qe(), z = _e(Re);
          {
            var V = (ce) => {
              var ye = Af(), Be = H(ye), Me = H(Be);
              wh(Me);
              var Ie = G(Be);
              J((ze) => Le(Ie, ` ${ze ?? ""}`), [
                () => (se(_()), ae(() => _()("audio.waiting")))
              ]), B(ce, ye);
            }, ve = (ce) => {
              var ye = Ff(), Be = H(ye), Me = H(Be);
              gh(Me, {});
              var Ie = G(Be);
              J((ze) => Le(Ie, ` ${ze ?? ""}`), [
                () => (se(_()), ae(() => _()("audio.stop")))
              ]), B(ce, ye);
            }, de = (ce) => {
              var ye = kf(), Be = H(ye), Me = H(Be);
              th(Me);
              var Ie = G(Be);
              J((ze) => Le(Ie, ` ${ze ?? ""}`), [
                () => (se(_()), ae(() => _()("audio.record")))
              ]), B(ce, ye);
            };
            Y(z, (ce) => {
              u() && s() === "waiting" ? ce(V) : u() && s() === "open" || !u() && l(k) ? ce(ve, 1) : ce(de, -1);
            });
          }
          B(he, Re);
        }, ke = (he) => {
          var Re = Cf(), z = H(Re);
          $c(z), B(he, Re);
        };
        Y(te, (he) => {
          g() === "video" || u() ? he(le) : he(ke, -1);
        });
      }
      var $e = G(M, 2);
      {
        var et = (he) => {
          var Re = Sf(), z = H(Re);
          lh(z), ge("click", Re, () => R(oe, !0)), B(he, Re);
        };
        Y($e, (he) => {
          l(k) || he(et);
        });
      }
      var Pe = G(P, 2);
      {
        var He = (he) => {
          var Re = If(), z = H(Re);
          {
            var V = (de) => {
              var ce = Tf(), ye = H(ce);
              ce.value = ce.__value = "", J((Be) => Le(ye, Be), [
                () => (se(_()), ae(() => _()("common.no_devices")))
              ]), B(de, ce);
            }, ve = (de) => {
              var ce = qe(), ye = _e(ce);
              $n(ye, 1, () => l(i), Jn, (Be, Me) => {
                var Ie = Bf(), ze = H(Ie), je = {};
                J(() => {
                  Wa(Ie, (l(a), l(Me), ae(() => l(a).deviceId === l(Me).deviceId))), Le(ze, (l(Me), ae(() => l(Me).label))), je !== (je = (l(Me), ae(() => l(Me).deviceId))) && (Ie.value = (Ie.__value = (l(Me), ae(() => l(Me).deviceId))) ?? "");
                }), B(Be, Ie);
              }), B(de, ce);
            };
            Y(z, (de) => {
              l(i), ae(() => l(i).length === 0) ? de(V) : de(ve, -1);
            });
          }
          Ma(Re, (de, ce) => Fe?.(de, ce), () => K), fn(() => ge("change", Re, p)), B(he, Re);
        };
        Y(Pe, (he) => {
          l(oe) && l(a) && he(He);
        });
      }
      J(() => Xe(M, "aria-label", g() === "image" ? "capture photo" : "start recording")), ge("click", M, () => ue()), B(I, L);
    };
    Y(X, (I) => {
      l(W) ? I(N, -1) : I(Q);
    });
  }
  return J(() => {
    Ne = Oe(fe, 1, "svelte-1d3tw37", null, Ne, {
      flip: D(),
      hide: !l(W) || l(W) && !!d()
    }), Xe(Ae, "src", (se(d()), ae(() => d()?.url))), re = Oe(Ae, 1, "svelte-1d3tw37", null, re, {
      hide: !l(W) || l(W) && !d()
    });
  }), B(t, De), el(e, "click_outside", Fe), Qe(ne);
}
var Nf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><rect x="2" y="2" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="17" y="2" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="2" y="17" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="17" y="17" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><line x1="7.5" y1="4.5" x2="16" y2="4.5" style="stroke-width:2px;"></line><line x1="7.5" y1="19.5" x2="16" y2="19.5" style="stroke-width:2px;"></line><line x1="4.5" y1="8" x2="4.5" y2="16" style="stroke-width:2px;"></line><line x1="19.5" y1="8" x2="19.5" y2="16" style="stroke-width:2px;"></line></svg>');
function ma(t) {
  var e = Nf();
  B(t, e);
}
var Pf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z" fill="none" stroke-width="2"></path></svg>');
function va(t) {
  var e = Pf();
  B(t, e);
}
var Hf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" fill="none" stroke-width="2"></path></svg>');
function ba(t) {
  var e = Hf();
  B(t, e);
}
var Mf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"></path><path d="M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"></path></svg>');
function _a(t) {
  var e = Mf();
  B(t, e);
}
var zf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"></path></svg>');
function Uf(t) {
  var e = zf();
  B(t, e);
}
var Gf = /* @__PURE__ */ We('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns="http://www.w3.org/2000/svg"><path d="M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"></path></svg>');
function Wf(t) {
  var e = Gf();
  B(t, e);
}
var jf = /* @__PURE__ */ q('<div class="lock-wrap svelte-n7dbqn"><button aria-label="Lock label detail"><!></button></div>'), Xf = /* @__PURE__ */ q("<option> </option>"), qf = /* @__PURE__ */ q('<button class="modal-btn modal-btn-danger svelte-n7dbqn">Remove</button>'), Vf = /* @__PURE__ */ q('<div class="modal svelte-n7dbqn"><div class="modal-container svelte-n7dbqn"><span class="modal-content svelte-n7dbqn"><!> <div class="field-wrap svelte-n7dbqn"><label class="field-label svelte-n7dbqn">Label</label> <input class="label-input svelte-n7dbqn" type="text"/> <datalist></datalist></div> <div class="field-wrap color-wrap svelte-n7dbqn"><label class="field-label svelte-n7dbqn">Color</label> <input class="color-input svelte-n7dbqn" type="color"/></div> <div class="btn-wrap svelte-n7dbqn"><button class="modal-btn svelte-n7dbqn">Cancel</button> <!> <button class="modal-btn modal-btn-primary svelte-n7dbqn">OK</button></div></span></div></div>');
function kr(t, e) {
  Je(e, !1);
  const n = ee();
  let r = w(e, "visible", 8, !1), i = w(e, "currentLabel", 12, ""), a = w(e, "currentColor", 12, ""), s = w(e, "choices", 24, () => []), o = w(e, "choicesColors", 24, () => []), u = w(e, "showRemove", 8, !0), c = w(e, "labelDetailLock", 12, !1);
  const f = Math.random().toString(36).slice(2, 8), v = Ht();
  function g(X) {
    return typeof X == "string" ? X : Array.isArray(X) && X[0] != null ? String(X[0]) : "";
  }
  let D = ee(i()), F = "", A = ee(!1);
  function _(X) {
    v("change", {
      label: i(),
      color: a(),
      lock: c(),
      ret: X
      // -1: remove, 0: cancel, 1: ok
    });
  }
  function b(X) {
    const Q = l(n).indexOf(X);
    Q >= 0 && Array.isArray(o()) && Q < o().length && a(o()[Q]);
  }
  function d() {
    R(A, !0), F = l(D), R(
      D,
      ""
      // clear so the datalist dropdown shows all options immediately
    );
  }
  function h() {
    R(A, !1), l(D) === "" && (R(D, F), i(F));
  }
  function m(X) {
    const Q = X.target.value;
    R(D, Q), i(Q), b(Q);
  }
  function p(X) {
    a(X.target.value);
  }
  function y(X) {
    if (!(!r() || !X.key))
      switch (X.key.toLowerCase()) {
        case "enter":
          _(1);
          break;
        case "escape":
          _(0);
          break;
      }
  }
  function E() {
    c(!c());
  }
  Sn(() => (document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y))), pt(() => se(s()), () => {
    R(n, Array.isArray(s()) ? s().map(g).filter((X) => X !== "") : []);
  }), pt(() => (l(A), se(i())), () => {
    l(A) || R(D, i());
  }), Jt(), gt();
  var k = Vf();
  let x;
  var S = H(k), T = H(S), O = H(T);
  {
    var U = (X) => {
      var Q = jf(), N = H(Q);
      let I;
      var L = H(N);
      {
        var P = (te) => {
          Uf(te);
        }, M = (te) => {
          Wf(te);
        };
        Y(L, (te) => {
          c() ? te(P) : te(M, -1);
        });
      }
      J(() => I = Oe(N, 1, "icon svelte-n7dbqn", null, I, { selected: c() })), ge("click", N, E), B(X, Q);
    };
    Y(O, (X) => {
      u() || X(U);
    });
  }
  var W = G(O, 2), ue = H(W), oe = G(ue, 2), Fe = G(oe, 2);
  $n(Fe, 5, () => l(n), Jn, (X, Q) => {
    var N = Xf(), I = H(N), L = {};
    J(() => {
      Le(I, l(Q)), L !== (L = l(Q)) && (N.value = (N.__value = l(Q)) ?? "");
    }), B(X, N);
  });
  var K = G(W, 2), ne = H(K), De = G(ne, 2), xe = G(K, 2), fe = H(xe), Ne = G(fe, 2);
  {
    var Ae = (X) => {
      var Q = qf();
      ge("click", Q, () => _(-1)), B(X, Q);
    };
    Y(Ne, (X) => {
      u() && X(Ae);
    });
  }
  var re = G(Ne, 2);
  J(() => {
    x = lt(k, "", x, { display: r() ? "" : "none" }), Xe(ue, "for", `label-input-${f ?? ""}`), Xe(oe, "id", `label-input-${f ?? ""}`), Xe(oe, "list", `label-choices-${f ?? ""}`), Or(oe, l(D)), Xe(oe, "placeholder", l(A) ? "Type or pick from list…" : ""), Xe(Fe, "id", `label-choices-${f ?? ""}`), Xe(ne, "for", `color-input-${f ?? ""}`), Xe(De, "id", `color-input-${f ?? ""}`), Or(De, a() || "#000000");
  }), ge("focus", oe, d), ge("blur", oe, h), ge("input", oe, m), ge("change", oe, m), ge("input", De, p), ge("change", De, p), ge("click", fe, () => _(0)), ge("click", re, () => _(1)), B(t, k), Qe();
}
const It = [
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
];
var Yf = /* @__PURE__ */ q('<button class="icon svelte-1u4bfll" aria-label="Remove box" title="Remove box (Del)"><!></button>'), Zf = /* @__PURE__ */ q('<button class="icon svelte-1u4bfll" aria-label="Edit label" title="Edit label"><!></button>'), Kf = /* @__PURE__ */ q('<span class="canvas-control svelte-1u4bfll"><button aria-label="Create box" title="Create box (C)"><!></button> <button aria-label="Drag boxes" title="Drag boxes (D)"><!></button> <!> <!> <button class="icon svelte-1u4bfll" aria-label="Rotate counterclockwise" title="Rotate counterclockwise"><!></button> <button class="icon svelte-1u4bfll" aria-label="Rotate clockwise" title="Rotate clockwise"><!></button></span>'), Qf = /* @__PURE__ */ q('<button class="icon svelte-1u4bfll" aria-label="Remove box" title="Remove box (Del)"><!></button>'), Jf = /* @__PURE__ */ q('<button class="icon svelte-1u4bfll" aria-label="Edit label" title="Edit label"><!></button>'), $f = /* @__PURE__ */ q('<span class="canvas-control svelte-1u4bfll"><button aria-label="Create box" title="Create box (C)"><!></button> <button aria-label="Drag boxes" title="Drag boxes (D)"><!></button> <!> <!> <button class="icon svelte-1u4bfll" aria-label="Rotate counterclockwise" title="Rotate counterclockwise"><!></button> <button class="icon svelte-1u4bfll" aria-label="Rotate clockwise" title="Rotate clockwise"><!></button></span>'), ed = /* @__PURE__ */ q('<div class="annotator-container svelte-1u4bfll" tabindex="0"><!> <div class="canvas-container svelte-1u4bfll"><canvas class="canvas-annotator svelte-1u4bfll"></canvas></div> <!></div> <!> <!> <!>', 1);
function td(t, e) {
  Je(e, !1);
  var n, r = ee(), i = ee();
  (function(C) {
    C[C.creation = 0] = "creation", C[C.drag = 1] = "drag";
  })(it(i) || R(i, {}));
  let a = w(e, "imageUrl", 8, null), s = w(e, "interactive", 8), o = w(e, "boxAlpha", 8, 0.5), u = w(e, "boxMinSize", 8, 10), c = w(e, "handleSize", 8, 8), f = w(e, "boxThickness", 8), v = w(e, "boxSelectedThickness", 8), g = w(e, "value", 8), D = w(e, "choices", 24, () => []), F = w(e, "choicesColors", 24, () => []), A = w(e, "disableEditBoxes", 8, !1), _ = w(e, "singleBox", 8, !1), b = w(e, "showRemoveButton", 12, null), d = w(e, "handlesCursor", 8, !0), h = w(e, "useDefaultLabel", 8, !1), m = w(e, "enableKeyboardShortcuts", 8, !0);
  b() === null && b(A());
  let p = ee(), y = ee(), E, k = null, x = ee(-1), S = ee(it(i).drag), T = ee(new rf(he)), O = ee([]);
  g() !== null && g().boxes.length == 0 && R(S, it(i).creation);
  let U = 0, W = 0, ue = 0, oe = 0, Fe = 1, K = 0, ne = 0, De = ee(!1), xe = ee(!1), fe = ee(!1), Ne = ee(""), Ae = ee(""), re = ee(""), X = ee(""), Q = ee(""), N = ee(""), I = ee(h()), L = ee({ label: "", color: "" });
  const P = Ht(), M = ee({
    orientation: (n = g() !== null ? g().orientation : 0) !== null && n !== void 0 ? n : 0
  });
  function te() {
    const C = l(O).map((j) => j.toJSON()), Z = l(M).orientation;
    setTimeout(() => P("change", { boxes: C, orientation: Z }), 0);
  }
  function le(C) {
    var Z = parseInt(C.slice(1, 3), 16), j = parseInt(C.slice(3, 5), 16), $ = parseInt(C.slice(5, 7), 16);
    return "rgb(" + Z + ", " + j + ", " + $ + ")";
  }
  function ke(C) {
    const Z = C.match(/(\d+(\.\d+)?)/g), j = parseInt(Z[0]), $ = parseInt(Z[1]), pe = parseInt(Z[2]);
    return "#" + (1 << 24 | j << 16 | $ << 8 | pe).toString(16).slice(1);
  }
  function $e(C) {
    return typeof C == "string" ? C : Array.isArray(C) && C[0] != null ? String(C[0]) : "";
  }
  function et() {
    const C = Array.isArray(D()) ? D().map(($, pe) => [$e($), pe]).filter(([$]) => $ !== "") : [], Z = Array.isArray(F()) ? [...F()] : [], j = new Set(C.map(([$]) => $));
    for (const $ of l(O)) {
      const pe = ($.label || "").trim();
      pe !== "" && !j.has(pe) && (j.add(pe), C.push([pe, C.length]), Z.push(ke($.color)));
    }
    return { choices: C, colors: Z };
  }
  let Pe = ee([]), He = ee([]);
  function he() {
    if (E) {
      if (E.clearRect(0, 0, l(p).width, l(p).height), E.save(), E.translate(l(T).offsetX, l(T).offsetY), E.scale(l(T).scale, l(T).scale), k !== null) {
        switch (l(M).orientation) {
          case 0:
            E.drawImage(k, 0, 0, K, ne);
            break;
          case 1:
            E.translate(K, 0), E.rotate(Math.PI / 2), E.drawImage(k, 0, 0, ne, K);
            break;
          case 2:
            E.translate(K, ne), E.rotate(Math.PI), E.drawImage(k, 0, 0, K, ne);
            break;
          case 3:
            E.translate(0, ne), E.rotate(-Math.PI / 2), E.drawImage(k, 0, 0, ne, K);
            break;
        }
        E.restore();
      }
      for (const C of l(O).slice().reverse())
        C.render(E);
    }
  }
  function Re(C) {
    R(x, C), l(O).forEach((Z) => Z.setSelected(!1)), C >= 0 && C < l(O).length && l(O)[C].setSelected(!0), he();
  }
  function z(C) {
    s() && (C.target instanceof Element && C.target.hasPointerCapture(C.pointerId) && C.target.releasePointerCapture(C.pointerId), l(S) === it(i).creation ? Ie(C) : l(S) === it(i).drag && V(C));
  }
  function V(C) {
    const Z = l(p).getBoundingClientRect(), j = C.clientX - Z.left, $ = C.clientY - Z.top;
    let pe = !1;
    for (const [ie, Ee] of l(O).entries()) {
      const tt = Ee.indexOfPointInsideHandle(j, $);
      if (tt >= 0) {
        pe = !0, Re(ie), Ee.startResize(tt, C);
        return;
      }
    }
    for (const [ie, Ee] of l(O).entries())
      if (Ee.isPointInsideBox(j, $)) {
        pe = !0, Re(ie), Ee.startDrag(C);
        return;
      }
    _() || Re(-1), pe || l(T).startDrag(C);
  }
  function ve(C) {
    te();
  }
  function de(C) {
    if (g() === null || l(S) !== it(i).drag)
      return;
    const Z = l(p).getBoundingClientRect(), j = C.clientX - Z.left, $ = C.clientY - Z.top;
    for (const [pe, ie] of l(O).entries()) {
      const Ee = ie.indexOfPointInsideHandle(j, $);
      if (Ee >= 0) {
        Ce(p, l(p).style.cursor = ie.resizeHandles[Ee].cursor);
        return;
      }
    }
    Ce(p, l(p).style.cursor = "default");
  }
  function ce() {
    const C = l(p).width / K, Z = l(p).height / ne, j = Math.min(C, Z);
    Ce(T, l(T).scale = j), Ce(T, l(T).offsetX = (l(p).width - K * j) / 2), Ce(T, l(T).offsetY = (l(p).height - ne * j) / 2), he();
  }
  function ye(C) {
    if (!m() || C.target !== l(y) || !s())
      return;
    const Z = C.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(Z) && (C.preventDefault(), C.stopPropagation()), Z) {
      case "delete":
        At();
        break;
      case "c":
        ze();
        break;
      case "d":
        je();
        break;
      case "e":
        Et();
        break;
      case " ":
        ce();
        break;
    }
  }
  function Be() {
    setTimeout(
      () => {
        l(y) === null || l(y) === void 0 || l(y).focus();
      },
      0
    );
  }
  function Me(C) {
    if (!s())
      return;
    C.preventDefault();
    const Z = 1 / (1 + C.deltaY / 1e3 * 0.5), j = parseFloat((l(T).scale * Z).toFixed(2)), $ = j < 1 ? 1 : j, pe = l(p).getBoundingClientRect(), ie = C.clientX - pe.left, Ee = C.clientY - pe.top, tt = (ie - l(T).offsetX) / l(T).scale, ut = (Ee - l(T).offsetY) / l(T).scale;
    Ce(T, l(T).offsetX = ie - tt * $), Ce(T, l(T).offsetY = Ee - ut * $), Ce(T, l(T).scale = $), he();
  }
  function Ie(C) {
    const Z = l(p).getBoundingClientRect(), j = (C.clientX - Z.left - l(T).offsetX) / l(T).scale, $ = (C.clientY - Z.top - l(T).offsetY) / l(T).scale;
    let pe = 1;
    const ie = l(p) ? l(p).clientWidth : 0;
    if (k !== null && ie > 0 && k.width > 0) {
      const Ve = l(M).orientation === 0 || l(M).orientation === 2 ? k.width : k.height;
      Ve > ie && (pe = ie / Ve);
    }
    let Ee, tt;
    l(I) && l(L).label !== "" ? (tt = l(L).label, Ee = l(L).color !== "" ? le(l(L).color) : F().length > 0 ? le(F()[0]) : It[0]) : (tt = Array.isArray(D()) && D().length > 0 ? $e(D()[0]) : "", F().length > 0 ? Ee = le(F()[0]) : _() ? Ee = l(O).length > 0 ? l(O)[0].color : It[0] : Ee = It[l(O).length % It.length]);
    const ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let St = "";
    for (let Ve = 0; Ve < 12; Ve++)
      St += ut.charAt(Math.floor(Math.random() * ut.length));
    const Ft = "";
    let vt = new fa(he, mt, l(T), U, W, ue, oe, tt, j, $, j, $, Ee, o(), St, Ft, u(), c(), f(), v(), pe);
    vt.startCreating(C, Z.left, Z.top), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        _() ? R(O, [vt]) : R(O, [vt, ...l(O)]);
        const Ve = l(p) ? l(p).clientWidth : 0;
        if (k !== null && Ve > 0 && k.width > 0) {
          const bt = l(M).orientation === 0 || l(M).orientation === 2 ? k.width : k.height;
          bt > Ve && (vt.scaleFactor = Ve / bt);
        }
        Re(0), he(), te();
      });
    });
  }
  function ze() {
    R(S, it(i).creation), Ce(p, l(p).style.cursor = "crosshair");
  }
  function je() {
    R(S, it(i).drag), Ce(p, l(p).style.cursor = "default");
  }
  function mt() {
    if (l(x) >= 0 && l(x) < l(O).length)
      if (l(O)[l(x)].getArea() < 1)
        At();
      else {
        if (!A())
          if (l(I))
            zt();
          else {
            const C = et();
            R(Pe, C.choices), R(He, C.colors), R(re, l(O)[l(x)].label), R(X, ke(l(O)[l(x)].color)), R(xe, !0);
          }
        _() && je();
      }
  }
  function Et() {
    if (l(x) >= 0 && l(x) < l(O).length && !A()) {
      const C = et();
      R(Pe, C.choices), R(He, C.colors), R(Ne, l(O)[l(x)].label), R(Ae, ke(l(O)[l(x)].color)), R(De, !0);
    }
  }
  function Ct(C) {
    s() && Et();
  }
  function ht(C) {
    R(De, !1), Be();
    const { detail: Z } = C;
    let j = Z.label, $ = Z.color, pe = Z.ret;
    if (l(x) >= 0 && l(x) < l(O).length) {
      let ie = l(O)[l(x)];
      pe == 1 ? (ie.label = j, ie.color = le($), he(), te()) : pe == -1 && At();
    }
  }
  function Dt(C) {
    R(xe, !1), Be();
    const { detail: Z } = C;
    let j = Z.label, $ = Z.color, pe = Z.ret, ie = Z.lock;
    if (l(x) >= 0 && l(x) < l(O).length) {
      let Ee = l(O)[l(x)];
      pe == 1 ? (R(I, ie), Ce(L, l(L).label = j), Ce(L, l(L).color = $), Ee.label = j, Ee.color = le($), he(), te()) : At();
    }
  }
  function Mt(C) {
    R(fe, !1), Be();
    const { detail: Z } = C;
    let j = Z.label, $ = Z.color, pe = Z.ret, ie = Z.lock;
    pe == 1 && (R(I, ie), Ce(L, l(L).label = j), Ce(L, l(L).color = $));
  }
  function zt() {
    if (l(x) >= 0 && l(x) < l(O).length) {
      let C = l(O)[l(x)];
      C.label = l(L).label, l(L).color !== "" && (C.color = le(l(L).color)), he(), te();
    }
  }
  function At() {
    l(x) >= 0 && l(x) < l(O).length && (l(O).splice(l(x), 1), Re(-1), _() && ze(), te());
  }
  function Ut(C) {
    Ce(M, l(M).orientation = ((l(M).orientation + C) % 4 + 4) % 4), Ce(T, l(T).orientation = l(M).orientation);
    for (const Z of l(O))
      Z.onRotate(C);
    Gt(!0, !0), he();
  }
  function Gt(C = !0, Z = !1) {
    if (l(p)) {
      const $ = l(T).imageWidth, pe = l(T).imageHeight;
      if (Fe = 1, Ce(p, l(p).width = l(p).clientWidth), l(T).setRotatedImage(k), k !== null) {
        if (l(T).imageRotatedWidth > l(p).width)
          Fe = l(p).width / l(T).imageRotatedWidth, K = Math.round(l(T).imageRotatedWidth * Fe), ne = Math.round(l(T).imageRotatedHeight * Fe), U = 0, W = 0, ue = K, oe = ne, Ce(p, l(p).height = ne);
        else {
          K = l(T).imageRotatedWidth, ne = l(T).imageRotatedHeight;
          var j = (l(p).width - K) / 2;
          U = j, W = 0, ue = j + K, oe = ne, Ce(p, l(p).height = ne);
        }
        Ce(T, l(T).imageWidth = K), Ce(T, l(T).imageHeight = ne);
      } else
        U = 0, W = 0, ue = l(p).width, oe = l(p).height, Ce(p, l(p).height = l(p).clientHeight);
      if (l(T).resize(l(p).width, l(p).height, U, W), ue > 0 && oe > 0)
        for (const ie of l(O))
          if (ie.canvasXmin = U, ie.canvasYmin = W, ie.canvasXmax = ue, ie.canvasYmax = oe, Z && $ > 0 && pe > 0) {
            const Ee = K / pe, tt = ne / $;
            ie.scaleFromRotatedDisplay(Ee, tt), ie.scaleFactor = Fe, ie.applyUserScale();
          } else
            ie.setScaleFactor(Fe);
      he(), C && te();
    }
  }
  const Rn = new ResizeObserver(() => Gt());
  function fr() {
    if (g() === null || !Array.isArray(g().boxes)) {
      R(O, []);
      return;
    }
    const C = [];
    for (let Z = 0; Z < g().boxes.length; Z++) {
      const j = g().boxes[Z];
      if (j && typeof j == "object") {
        let $ = "", pe = "", ie = "", Ee = "", tt = 0;
        if (j.hasOwnProperty("color") ? ($ = j.color, Array.isArray($) && $.length === 3 && ($ = `rgb(${$[0]}, ${$[1]}, ${$[2]})`)) : $ = It[Z % It.length], j.hasOwnProperty("label") && (pe = j.label), j.hasOwnProperty("id"))
          ie = j.id;
        else {
          const Tt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let nn = "";
          for (let Ze = 0; Ze < 12; Ze++)
            nn += Tt.charAt(Math.floor(Math.random() * Tt.length));
          ie = nn;
        }
        j.hasOwnProperty("text") && (Ee = j.text), j.hasOwnProperty("page") && (tt = j.page);
        const ut = j.hasOwnProperty("xmin") ? j.xmin : 0, St = j.hasOwnProperty("ymin") ? j.ymin : 0, Ft = j.hasOwnProperty("xmax") ? j.xmax : 0, vt = j.hasOwnProperty("ymax") ? j.ymax : 0, Ve = j.hasOwnProperty("scaleFactor") ? j.scaleFactor : 1, bt = new fa(he, mt, l(T), U, W, ue, oe, pe, ut, St, Ft, vt, $, o(), ie, Ee, tt, u(), c(), f(), v());
        bt.setScaleFactor(Ve), bt.applyUserScale(), C.push(bt);
      } else
        console.error("Invalid box data format encountered:", j);
    }
    R(O, C);
  }
  const Wt = ee({ value: null });
  function Ln() {
    a() !== null && (k === null || k.src != a()) && (k = new Image(), k.src = a(), k.onload = function() {
      Gt(), he();
    });
  }
  Sn(() => {
    if (Array.isArray(D()) && D().length > 0) {
      if (!Array.isArray(F()) || F().length == 0)
        for (let C = 0; C < D().length; C++) {
          let Z = It[C % It.length];
          F().push(ke(Z));
        }
      Ce(L, l(L).label = $e(D()[0])), Ce(L, l(L).color = F()[0]);
    }
    E = l(p).getContext("2d"), Rn.observe(l(p)), l(x) < 0 && l(O).length > 0 && Re(0), Ln(), Gt(), he();
  }), pt(
    () => (se(g()), l(Wt), l(M), it(r), l(x), l(O)),
    () => {
      const C = g();
      C !== l(Wt).value && (Ce(Wt, l(Wt).value = C), Ce(M, l(M).orientation = R(r, C !== null ? C.orientation : 0) !== null && it(r) !== void 0 ? it(r) : 0), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Ce(T, l(T).orientation = l(M).orientation), Ln(), fr(), l(x) < 0 && l(O).length > 0 && Re(0), Gt(!1), he();
        });
      }));
    }
  ), Jt(), gt();
  var On = ed(), jt = _e(On), Ye = H(jt);
  {
    var ft = (C) => {
      var Z = Kf(), j = H(Z);
      let $;
      var pe = H(j);
      ma(pe);
      var ie = G(j, 2);
      let Ee;
      var tt = H(ie);
      va(tt);
      var ut = G(ie, 2);
      {
        var St = (Ze) => {
          var rt = Yf(), Xt = H(rt);
          ba(Xt), ge("click", rt, () => At()), B(Ze, rt);
        };
        Y(ut, (Ze) => {
          b() && Ze(St);
        });
      }
      var Ft = G(ut, 2);
      {
        var vt = (Ze) => {
          var rt = Zf(), Xt = H(rt);
          _a(Xt), ge("click", rt, () => {
            const mn = et();
            R(Pe, mn.choices), R(He, mn.colors), R(Q, l(L).label), R(N, l(L).color), R(fe, !0);
          }), B(Ze, rt);
        };
        Y(Ft, (Ze) => {
          !A() && l(I) && Ze(vt);
        });
      }
      var Ve = G(Ft, 2), bt = H(Ve);
      oa(bt);
      var Tt = G(Ve, 2), nn = H(Tt);
      sa(nn), J(() => {
        $ = Oe(j, 1, "icon svelte-1u4bfll", null, $, { selected: l(S) === it(i).creation }), Ee = Oe(ie, 1, "icon svelte-1u4bfll", null, Ee, { selected: l(S) === it(i).drag });
      }), ge("click", j, () => ze()), ge("click", ie, () => je()), ge("click", Ve, () => Ut(-1)), ge("click", Tt, () => Ut(1)), B(C, Z);
    };
    Y(Ye, (C) => {
      s() && C(ft);
    });
  }
  var Nn = G(Ye, 2), tn = H(Nn);
  Zt(tn, (C) => R(p, C), () => l(p));
  var Rs = G(Nn, 2);
  {
    var Ls = (C) => {
      var Z = $f(), j = H(Z);
      let $;
      var pe = H(j);
      ma(pe);
      var ie = G(j, 2);
      let Ee;
      var tt = H(ie);
      va(tt);
      var ut = G(ie, 2);
      {
        var St = (Ze) => {
          var rt = Qf(), Xt = H(rt);
          ba(Xt), ge("click", rt, () => At()), B(Ze, rt);
        };
        Y(ut, (Ze) => {
          b() && Ze(St);
        });
      }
      var Ft = G(ut, 2);
      {
        var vt = (Ze) => {
          var rt = Jf(), Xt = H(rt);
          _a(Xt), ge("click", rt, () => {
            const mn = et();
            R(Pe, mn.choices), R(He, mn.colors), R(Q, l(L).label), R(N, l(L).color), R(fe, !0);
          }), B(Ze, rt);
        };
        Y(Ft, (Ze) => {
          !A() && l(I) && Ze(vt);
        });
      }
      var Ve = G(Ft, 2), bt = H(Ve);
      oa(bt);
      var Tt = G(Ve, 2), nn = H(Tt);
      sa(nn), J(() => {
        $ = Oe(j, 1, "icon svelte-1u4bfll", null, $, { selected: l(S) === it(i).creation }), Ee = Oe(ie, 1, "icon svelte-1u4bfll", null, Ee, { selected: l(S) === it(i).drag });
      }), ge("click", j, () => ze()), ge("click", ie, () => je()), ge("click", Ve, () => Ut(-1)), ge("click", Tt, () => Ut(1)), B(C, Z);
    };
    Y(Rs, (C) => {
      s() && C(Ls);
    });
  }
  Zt(jt, (C) => R(y, C), () => l(y));
  var pi = G(jt, 2);
  kr(pi, {
    get visible() {
      return l(De);
    },
    get choices() {
      return l(Pe);
    },
    get choicesColors() {
      return l(He);
    },
    get currentLabel() {
      return l(Ne);
    },
    set currentLabel(C) {
      R(Ne, C);
    },
    get currentColor() {
      return l(Ae);
    },
    set currentColor(C) {
      R(Ae, C);
    },
    $$events: {
      change: ht,
      "enter{onModalEditChange}"(C) {
        Lt.call(this, e, C);
      }
    },
    $$legacy: !0
  });
  var gi = G(pi, 2);
  kr(gi, {
    get visible() {
      return l(xe);
    },
    get choices() {
      return l(Pe);
    },
    showRemove: !1,
    get choicesColors() {
      return l(He);
    },
    get labelDetailLock() {
      return l(I);
    },
    get currentLabel() {
      return l(re);
    },
    set currentLabel(C) {
      R(re, C);
    },
    get currentColor() {
      return l(X);
    },
    set currentColor(C) {
      R(X, C);
    },
    $$events: {
      change: Dt,
      "enter{onModalNewChange}"(C) {
        Lt.call(this, e, C);
      }
    },
    $$legacy: !0
  });
  var Os = G(gi, 2);
  kr(Os, {
    get visible() {
      return l(fe);
    },
    get choices() {
      return l(Pe);
    },
    showRemove: !1,
    get choicesColors() {
      return l(He);
    },
    get labelDetailLock() {
      return l(I);
    },
    get currentLabel() {
      return l(Q);
    },
    set currentLabel(C) {
      R(Q, C);
    },
    get currentColor() {
      return l(N);
    },
    set currentColor(C) {
      R(N, C);
    },
    $$events: {
      change: Mt,
      "enter{onDefaultLabelEditChange}"(C) {
        Lt.call(this, e, C);
      }
    },
    $$legacy: !0
  }), ge("pointerdown", tn, z), ge("pointerup", tn, ve), ge("pointermove", tn, function(...C) {
    (d() ? de : null)?.apply(this, C);
  }), ge("dblclick", tn, Ct), ge("wheel", tn, Me, void 0, !1), ge("keydown", jt, ye), ge("click", jt, () => l(y).focus()), B(t, On), Qe();
}
function nd(t, e) {
  Je(e, !1);
  let n = w(e, "src", 8, void 0), r = w(e, "interactive", 8), i = w(e, "boxesAlpha", 8), a = w(e, "labelList", 8), s = w(e, "labelColors", 8), o = w(e, "boxMinSize", 8), u = w(e, "handleSize", 8), c = w(e, "boxThickness", 8), f = w(e, "boxSelectedThickness", 8), v = w(e, "value", 12), g = w(e, "disableEditBoxes", 8), D = w(e, "singleBox", 8), F = w(e, "showRemoveButton", 8), A = w(e, "handlesCursor", 8), _ = w(e, "useDefaultLabel", 8), b = w(e, "enableKeyboardShortcuts", 8), d = ee(), h = ee();
  const m = Ht();
  pt(
    () => (se(n()), l(h), pa),
    () => {
      R(d, n()), R(h, n());
      const p = n();
      pa(p).then((y) => {
        l(h) === p && R(d, y);
      });
    }
  ), Jt(), gt(), td(t, {
    get interactive() {
      return r();
    },
    get boxAlpha() {
      return i();
    },
    get choices() {
      return a();
    },
    get choicesColors() {
      return s();
    },
    get boxMinSize() {
      return o();
    },
    get handleSize() {
      return u();
    },
    get boxThickness() {
      return c();
    },
    get boxSelectedThickness() {
      return f();
    },
    get disableEditBoxes() {
      return g();
    },
    get singleBox() {
      return D();
    },
    get showRemoveButton() {
      return F();
    },
    get handlesCursor() {
      return A();
    },
    get useDefaultLabel() {
      return _();
    },
    get enableKeyboardShortcuts() {
      return b();
    },
    get imageUrl() {
      return l(d);
    },
    get value() {
      return v();
    },
    set value(p) {
      v(p);
    },
    $$events: { change: (p) => m("change", p.detail) },
    $$legacy: !0
  }), Qe();
}
var rd = /* @__PURE__ */ q("<div><!></div>"), id = /* @__PURE__ */ q("<div><!></div>"), ad = /* @__PURE__ */ q('<!> <div class="icon-buttons svelte-8v7jpi"><!> <!> <!></div> <div data-testid="image" class="image-container svelte-8v7jpi"><div class="upload-container svelte-8v7jpi"><!> <!> <!></div> <!></div>', 1);
function sd(t, e) {
  Je(e, !1);
  var n = this && this.__awaiter || function(z, V, ve, de) {
    function ce(ye) {
      return ye instanceof ve ? ye : new ve(function(Be) {
        Be(ye);
      });
    }
    return new (ve || (ve = Promise))(function(ye, Be) {
      function Me(je) {
        try {
          ze(de.next(je));
        } catch (mt) {
          Be(mt);
        }
      }
      function Ie(je) {
        try {
          ze(de.throw(je));
        } catch (mt) {
          Be(mt);
        }
      }
      function ze(je) {
        je.done ? ye(je.value) : ce(je.value).then(Me, Ie);
      }
      ze((de = de.apply(z, V || [])).next());
    });
  };
  let r = w(e, "value", 12, null), i = w(e, "label", 8, void 0), a = w(e, "show_label", 8), s = w(e, "sources", 24, () => ["upload", "webcam", "clipboard"]), o = w(e, "selectable", 8, !1), u = w(e, "root", 8), c = w(e, "interactive", 8), f = w(e, "i18n", 8), v = w(e, "showShareButton", 8), g = w(e, "showDownloadButton", 8), D = w(e, "showClearButton", 8), F = w(e, "boxesAlpha", 8), A = w(e, "labelList", 8), _ = w(e, "labelColors", 8), b = w(e, "boxMinSize", 8), d = w(e, "handleSize", 8), h = w(e, "boxThickness", 8), m = w(e, "disableEditBoxes", 8), p = w(e, "singleBox", 8), y = w(e, "showRemoveButton", 8), E = w(e, "handlesCursor", 8), k = w(e, "boxSelectedThickness", 8), x = w(e, "max_file_size", 8, null), S = w(e, "cli_upload", 8), T = w(e, "stream_handler", 8), O = w(e, "useDefaultLabel", 8), U = w(e, "enableKeyboardShortcuts", 8), W = ee(), ue = ee(!1), oe = w(e, "active_source", 12, null);
  function Fe({ detail: z }) {
    r(new da()), r(r().image = z, !0), ne("upload");
  }
  function K(z) {
    return n(this, void 0, void 0, function* () {
      const V = yield l(W).load_files([new File([z], "webcam.png")]), ve = V?.[0] || null;
      ve ? (r(new da()), r(r().image = ve, !0)) : r(null), yield ni(), ne("change");
    });
  }
  const ne = Ht();
  let De = ee(!1);
  function xe(z) {
    return n(this, void 0, void 0, function* () {
      z === "clipboard" && l(W).paste_clipboard();
    });
  }
  function fe() {
    r(null), ne("clear"), ne("change");
  }
  pt(() => l(ue), () => {
    l(ue) && fe();
  }), pt(() => l(De), () => {
    ne("drag", l(De));
  }), pt(
    () => (se(oe()), se(s())),
    () => {
      !oe() && s() && oe(s()[0]);
    }
  ), Jt(), gt();
  var Ne = ad(), Ae = _e(Ne);
  {
    let z = _t(() => i() || "Image Annotator");
    Vc(Ae, {
      get show_label() {
        return a();
      },
      get Icon() {
        return As;
      },
      get label() {
        return l(z);
      }
    });
  }
  var re = G(Ae, 2), X = H(re);
  {
    var Q = (z) => {
      {
        let V = _t(() => (se(r()), ae(() => r().image.orig_name || "image")));
        cf(z, {
          get href() {
            return se(r()), ae(() => r().image.url);
          },
          get download() {
            return l(V);
          },
          children: (ve, de) => {
            {
              let ce = _t(() => (se(f()), ae(() => f()("common.download"))));
              En(ve, {
                get Icon() {
                  return sh;
                },
                get label() {
                  return l(ce);
                }
              });
            }
          },
          $$slots: { default: !0 }
        });
      }
    };
    Y(X, (z) => {
      se(g()), se(r()), ae(() => g() && r()?.image) && z(Q);
    });
  }
  var N = G(X, 2);
  {
    var I = (z) => {
      Eh(z, {
        get i18n() {
          return f();
        },
        formatter: async (V) => V?.image ? `<img src="${await Uu(V.image)}" />` : "",
        get value() {
          return r();
        },
        $$events: {
          share(V) {
            Lt.call(this, e, V);
          },
          error(V) {
            Lt.call(this, e, V);
          }
        }
      });
    };
    Y(N, (z) => {
      v() && r() !== null && z(I);
    });
  }
  var L = G(N, 2);
  {
    var P = (z) => {
      var V = rd(), ve = H(V);
      En(ve, {
        get Icon() {
          return Vr;
        },
        label: "Remove Image",
        $$events: { click: fe }
      }), B(z, V);
    };
    Y(L, (z) => {
      D() && r() !== null && c() && z(P);
    });
  }
  var M = G(re, 2), te = H(M), le = H(te);
  {
    let z = _t(() => r() !== null || oe() === "webcam"), V = _t(() => oe() === "clipboard" ? "clipboard" : "image/*"), ve = _t(() => (se(s()), ae(() => !s().includes("upload"))));
    Zt(
      bf(le, {
        get hidden() {
          return l(z);
        },
        get filetype() {
          return l(V);
        },
        get root() {
          return u();
        },
        get max_file_size() {
          return x();
        },
        get disable_click() {
          return l(ve);
        },
        get upload() {
          return S();
        },
        get stream_handler() {
          return T();
        },
        get uploading() {
          return l(ue);
        },
        set uploading(de) {
          R(ue, de);
        },
        get dragging() {
          return l(De);
        },
        set dragging(de) {
          R(De, de);
        },
        $$events: {
          load: Fe,
          error(de) {
            Lt.call(this, e, de);
          }
        },
        children: (de, ce) => {
          var ye = qe(), Be = _e(ye);
          {
            var Me = (Ie) => {
              var ze = qe(), je = _e(ze);
              Pt(je, e, "default", {}), B(Ie, ze);
            };
            Y(Be, (Ie) => {
              r() === null && Ie(Me);
            });
          }
          B(de, ye);
        },
        $$slots: { default: !0 },
        $$legacy: !0
      }),
      (de) => R(W, de),
      () => l(W)
    );
  }
  var ke = G(le, 2);
  {
    var $e = (z) => {
      Of(z, {
        get root() {
          return u();
        },
        mode: "image",
        include_audio: !1,
        get i18n() {
          return f();
        },
        get upload() {
          return l(W);
        },
        $$events: {
          capture: (V) => K(V.detail),
          stream: (V) => K(V.detail),
          error(V) {
            Lt.call(this, e, V);
          },
          drag(V) {
            Lt.call(this, e, V);
          },
          upload: (V) => K(V.detail)
        }
      });
    };
    Y(ke, (z) => {
      r() === null && oe() === "webcam" && z($e);
    });
  }
  var et = G(ke, 2);
  {
    var Pe = (z) => {
      var V = id();
      let ve;
      var de = H(V);
      {
        let ce = _t(() => (se(r()), ae(() => r()?.image?.url)));
        nd(de, {
          get boxesAlpha() {
            return F();
          },
          get labelList() {
            return A();
          },
          get labelColors() {
            return _();
          },
          get boxMinSize() {
            return b();
          },
          get interactive() {
            return c();
          },
          get handleSize() {
            return d();
          },
          get boxThickness() {
            return h();
          },
          get singleBox() {
            return p();
          },
          get disableEditBoxes() {
            return m();
          },
          get showRemoveButton() {
            return y();
          },
          get handlesCursor() {
            return E();
          },
          get boxSelectedThickness() {
            return k();
          },
          get useDefaultLabel() {
            return O();
          },
          get enableKeyboardShortcuts() {
            return U();
          },
          get src() {
            return l(ce);
          },
          get value() {
            return r();
          },
          set value(ye) {
            r(ye);
          },
          $$events: { change: (ye) => ne("change", ye.detail) },
          $$legacy: !0
        });
      }
      J(() => ve = Oe(V, 1, "image-frame svelte-8v7jpi", null, ve, { selectable: o() })), B(z, V);
    };
    Y(et, (z) => {
      r() !== null && z(Pe);
    });
  }
  var He = G(te, 2);
  {
    var he = (z) => {
      Ph(z, {
        get sources() {
          return s();
        },
        handle_clear: fe,
        handle_select: xe,
        get active_source() {
          return oe();
        },
        set active_source(V) {
          oe(V);
        },
        $$legacy: !0
      });
    }, Re = Ge(() => (se(s()), se(r()), se(c()), ae(() => (s().length > 1 || s().includes("clipboard")) && r() === null && c())));
    Y(He, (z) => {
      l(Re) && z(he);
    });
  }
  B(t, Ne), Qe();
}
var od = /* @__PURE__ */ q('<img alt=""/>'), ld = /* @__PURE__ */ q("<div><!></div>");
function fd(t, e) {
  Je(e, !1);
  let n = w(e, "value", 8), r = w(e, "type", 8), i = w(e, "selected", 8, !1);
  gt();
  var a = ld();
  let s;
  var o = H(a);
  {
    var u = (c) => {
      var f = od();
      J(() => Xe(f, "src", (se(n()), ae(() => n().url)))), B(c, f);
    };
    Y(o, (c) => {
      n() && c(u);
    });
  }
  J(() => s = Oe(a, 1, "container svelte-s3apn9", null, s, {
    table: r() === "table",
    gallery: r() === "gallery",
    selected: i(),
    border: n()
  })), B(t, a), Qe();
}
var ud = /* @__PURE__ */ q("<!> <!>", 1);
function dd(t, e) {
  Je(e, !0);
  var n = this && this.__awaiter || function(c, f, v, g) {
    function D(F) {
      return F instanceof v ? F : new v(function(A) {
        A(F);
      });
    }
    return new (v || (v = Promise))(function(F, A) {
      function _(h) {
        try {
          d(g.next(h));
        } catch (m) {
          A(m);
        }
      }
      function b(h) {
        try {
          d(g.throw(h));
        } catch (m) {
          A(m);
        }
      }
      function d(h) {
        h.done ? F(h.value) : D(h.value).then(_, b);
      }
      d((g = g.apply(c, f || [])).next());
    });
  };
  let r = null;
  class i extends qu {
    // When Gradio sends new value data from Python, clear any pending user changes
    // so get_data() returns the Gradio-provided data rather than stale user edits.
    set_data(f) {
      "value" in f && (r = null), super.set_data(f);
    }
    get_data() {
      const f = Object.create(null, { get_data: { get: () => super.get_data } });
      return n(this, void 0, void 0, function* () {
        const v = yield f.get_data.call(this);
        return r !== null && v.value !== null && (r.boxes !== void 0 && (v.value.boxes = r.boxes), r.orientation !== void 0 && (v.value.orientation = r.orientation)), v;
      });
    }
  }
  const a = /* @__PURE__ */ rl(e, ["$$slots", "$$events", "$$legacy"]), s = new i(a);
  let o = nt(!1), u = nt(null);
  ct(() => {
    var c;
    !l(u) && ((c = s.props.sources) === null || c === void 0 ? void 0 : c.length) > 0 && R(u, s.props.sources[0], !0);
  });
  {
    let c = Ge(() => l(o) ? "focus" : "base");
    Qu(t, {
      get visible() {
        return s.shared.visible;
      },
      variant: "solid",
      get border_mode() {
        return l(c);
      },
      padding: !1,
      get elem_id() {
        return s.shared.elem_id;
      },
      get elem_classes() {
        return s.shared.elem_classes;
      },
      get width() {
        return s.props.width;
      },
      allow_overflow: !1,
      get container() {
        return s.shared.container;
      },
      get scale() {
        return s.shared.scale;
      },
      get min_width() {
        return s.shared.min_width;
      },
      children: (f, v) => {
        var g = ud(), D = _e(g);
        Jh(D, sl(
          {
            get autoscroll() {
              return s.shared.autoscroll;
            },
            get i18n() {
              return s.i18n;
            }
          },
          () => s.shared.loading_status
        ));
        var F = G(D, 2);
        {
          let A = Ge(() => (() => {
            const d = s.props.label_list_json;
            if (typeof d == "string" && d.length > 0)
              try {
                const h = JSON.parse(d);
                if (Array.isArray(h)) return h.map((m) => typeof m == "string" ? m : String(m));
              } catch {
              }
            return Array.isArray(s.props.label_list) ? s.props.label_list : [];
          })()), _ = Ge(() => s.shared.client?.upload), b = Ge(() => s.shared.client?.stream);
          sd(F, {
            get selectable() {
              return s.props._selectable;
            },
            get root() {
              return s.shared.root;
            },
            get sources() {
              return s.props.sources;
            },
            get interactive() {
              return s.shared.interactive;
            },
            get showDownloadButton() {
              return s.props.show_download_button;
            },
            get showShareButton() {
              return s.props.show_share_button;
            },
            get showClearButton() {
              return s.props.show_clear_button;
            },
            get i18n() {
              return s.i18n;
            },
            get boxesAlpha() {
              return s.props.boxes_alpha;
            },
            get labelList() {
              return l(A);
            },
            get labelColors() {
              return s.props.label_colors;
            },
            get boxMinSize() {
              return s.props.box_min_size;
            },
            get label() {
              return s.shared.label;
            },
            get show_label() {
              return s.shared.show_label;
            },
            get max_file_size() {
              return s.shared.max_file_size;
            },
            get cli_upload() {
              return l(_);
            },
            get stream_handler() {
              return l(b);
            },
            get handleSize() {
              return s.props.handle_size;
            },
            get boxThickness() {
              return s.props.box_thickness;
            },
            get boxSelectedThickness() {
              return s.props.box_selected_thickness;
            },
            get disableEditBoxes() {
              return s.props.disable_edit_boxes;
            },
            get singleBox() {
              return s.props.single_box;
            },
            get showRemoveButton() {
              return s.props.show_remove_button;
            },
            get handlesCursor() {
              return s.props.handles_cursor;
            },
            get useDefaultLabel() {
              return s.props.use_default_label;
            },
            get enableKeyboardShortcuts() {
              return s.props.enable_keyboard_shortcuts;
            },
            get active_source() {
              return l(u);
            },
            set active_source(d) {
              R(u, d, !0);
            },
            get value() {
              return s.props.value;
            },
            set value(d) {
              s.props.value = d;
            },
            $$events: {
              change: (d) => {
                r = d.detail ?? null, setTimeout(() => s.dispatch("change"), 0);
              },
              edit: () => s.dispatch("edit"),
              clear: () => {
                s.dispatch("clear");
              },
              drag: ({ detail: d }) => R(o, d, !0),
              upload: () => s.dispatch("upload"),
              select: ({ detail: d }) => s.dispatch("select", d),
              share: ({ detail: d }) => s.dispatch("share", d),
              error: ({ detail: d }) => {
                s.dispatch("error", d);
              }
            },
            children: (d, h) => {
              var m = qe(), p = _e(m);
              {
                var y = (x) => {
                  ua(x, {
                    get i18n() {
                      return s.i18n;
                    },
                    type: "image"
                  });
                }, E = (x) => {
                  ua(x, {
                    get i18n() {
                      return s.i18n;
                    },
                    type: "clipboard",
                    mode: "short"
                  });
                }, k = (x) => {
                  Qc(x, {
                    unpadded_box: !0,
                    size: "large",
                    children: (S, T) => {
                      As(S);
                    },
                    $$slots: { default: !0 }
                  });
                };
                Y(p, (x) => {
                  l(u) === "upload" ? x(y) : l(u) === "clipboard" ? x(E, 1) : x(k, -1);
                });
              }
              B(d, m);
            },
            $$slots: { default: !0 }
          });
        }
        B(f, g);
      },
      $$slots: { default: !0 }
    });
  }
  Qe();
}
export {
  fd as BaseExample,
  dd as default
};
