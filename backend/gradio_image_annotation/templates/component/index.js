import * as e from "../../../../../assets/svelte/svelte_internal_client.js";
import { getContext as Tn, untrack as dr, createEventDispatcher as et, tick as Dr, onMount as Zt, onDestroy as Sn } from "../../../../../assets/svelte/svelte_svelte.js";
import { writable as kr, derived as gt } from "../../../../../assets/svelte/svelte_store.js";
import "../../../../../assets/svelte/svelte_internal_flags_legacy.js";
import { spring as Nr } from "../../../../../assets/svelte/svelte_motion.js";
import { fade as yi } from "../../../../../assets/svelte/svelte_transition.js";
const Ei = [
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
], Pr = {
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
Ei.reduce((r, { color: t, primary: n, secondary: i }) => ({
  ...r,
  [t]: {
    primary: Pr[t][n],
    secondary: Pr[t][i]
  }
}), {});
function Di(r) {
  return ki(r) && !Ci(r);
}
function ki(r) {
  return !!r && typeof r == "object";
}
function Ci(r) {
  var t = Object.prototype.toString.call(r);
  return t === "[object RegExp]" || t === "[object Date]" || Ti(r);
}
var Ai = typeof Symbol == "function" && Symbol.for, Fi = Ai ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
function Ti(r) {
  return r.$$typeof === Fi;
}
var Si = Di;
function Bi(r) {
  return Array.isArray(r) ? [] : {};
}
function yt(r, t) {
  return t.clone !== !1 && t.isMergeableObject(r) ? ht(Bi(r), r, t) : r;
}
function Li(r, t, n) {
  return r.concat(t).map(function(i) {
    return yt(i, n);
  });
}
function Ri(r, t) {
  if (!t.customMerge)
    return ht;
  var n = t.customMerge(r);
  return typeof n == "function" ? n : ht;
}
function Ii(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(t) {
    return Object.propertyIsEnumerable.call(r, t);
  }) : [];
}
function zr(r) {
  return Object.keys(r).concat(Ii(r));
}
function Bn(r, t) {
  try {
    return t in r;
  } catch {
    return !1;
  }
}
function Mi(r, t) {
  return Bn(r, t) && !(Object.hasOwnProperty.call(r, t) && Object.propertyIsEnumerable.call(r, t));
}
function Hi(r, t, n) {
  var i = {};
  return n.isMergeableObject(r) && zr(r).forEach(function(a) {
    i[a] = yt(r[a], n);
  }), zr(t).forEach(function(a) {
    Mi(r, a) || (Bn(r, a) && n.isMergeableObject(t[a]) ? i[a] = Ri(a, n)(r[a], t[a], n) : i[a] = yt(t[a], n));
  }), i;
}
function ht(r, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Li, n.isMergeableObject = n.isMergeableObject || Si, n.cloneUnlessOtherwiseSpecified = yt;
  var i = Array.isArray(t), a = Array.isArray(r), s = i === a;
  return s ? i ? n.arrayMerge(r, t, n) : Hi(r, t, n) : yt(t, n);
}
ht.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, a) {
    return ht(i, a, n);
  }, {});
};
var fr = function(r, t) {
  return fr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
  }, fr(r, t);
};
function Wt(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  fr(r, t);
  function n() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ve = function() {
  return ve = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ve.apply(this, arguments);
};
function tr(r, t, n) {
  if (n || arguments.length === 2) for (var i = 0, a = t.length, s; i < a; i++)
    (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return r.concat(s || Array.prototype.slice.call(t));
}
var ne;
(function(r) {
  r[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", r[r.INVALID_TAG = 23] = "INVALID_TAG", r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ne || (ne = {}));
var ke;
(function(r) {
  r[r.literal = 0] = "literal", r[r.argument = 1] = "argument", r[r.number = 2] = "number", r[r.date = 3] = "date", r[r.time = 4] = "time", r[r.select = 5] = "select", r[r.plural = 6] = "plural", r[r.pound = 7] = "pound", r[r.tag = 8] = "tag";
})(ke || (ke = {}));
var dt;
(function(r) {
  r[r.number = 0] = "number", r[r.dateTime = 1] = "dateTime";
})(dt || (dt = {}));
function Ur(r) {
  return r.type === ke.literal;
}
function Oi(r) {
  return r.type === ke.argument;
}
function Ln(r) {
  return r.type === ke.number;
}
function Rn(r) {
  return r.type === ke.date;
}
function In(r) {
  return r.type === ke.time;
}
function Mn(r) {
  return r.type === ke.select;
}
function Hn(r) {
  return r.type === ke.plural;
}
function Ni(r) {
  return r.type === ke.pound;
}
function On(r) {
  return r.type === ke.tag;
}
function Nn(r) {
  return !!(r && typeof r == "object" && r.type === dt.number);
}
function pr(r) {
  return !!(r && typeof r == "object" && r.type === dt.dateTime);
}
var Pn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Pi = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function zi(r) {
  var t = {};
  return r.replace(Pi, function(n) {
    var i = n.length;
    switch (n[0]) {
      // Era
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      // Year
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      // Week
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      // Weekday
      case "E":
        t.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      // Period
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      // am, pm, noon, midnight
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      // Hour
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      // Minute
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      // Second
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      // Zone
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      // 1..3, 4, 5: The ISO8601 varios formats
      case "O":
      // 1, 4: miliseconds in day short, long
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
  }), t;
}
var Ui = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Gi(r) {
  if (r.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = r.split(Ui).filter(function(v) {
    return v.length > 0;
  }), n = [], i = 0, a = t; i < a.length; i++) {
    var s = a[i], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], u = o.slice(1), f = 0, d = u; f < d.length; f++) {
      var b = d[f];
      if (b.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: u });
  }
  return n;
}
function qi(r) {
  return r.replace(/^(.*?)-/, "");
}
var Gr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, zn = /^(@+)?(\+|#+)?[rs]?$/g, ji = /(\*)(0+)|(#+)(0+)|(0+)/g, Un = /^(0+)$/;
function qr(r) {
  var t = {};
  return r[r.length - 1] === "r" ? t.roundingPriority = "morePrecision" : r[r.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), r.replace(zn, function(n, i, a) {
    return typeof a != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : a === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof a == "string" ? a.length : 0)), "";
  }), t;
}
function Gn(r) {
  switch (r) {
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
function Vi(r) {
  var t;
  if (r[0] === "E" && r[1] === "E" ? (t = {
    notation: "engineering"
  }, r = r.slice(2)) : r[0] === "E" && (t = {
    notation: "scientific"
  }, r = r.slice(1)), t) {
    var n = r.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", r = r.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", r = r.slice(2)), !Un.test(r))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = r.length;
  }
  return t;
}
function jr(r) {
  var t = {}, n = Gn(r);
  return n || t;
}
function Zi(r) {
  for (var t = {}, n = 0, i = r; n < i.length; n++) {
    var a = i[n];
    switch (a.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = qi(a.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = ve(ve(ve({}, t), { notation: "scientific" }), a.options.reduce(function(u, f) {
          return ve(ve({}, u), jr(f));
        }, {}));
        continue;
      case "engineering":
        t = ve(ve(ve({}, t), { notation: "engineering" }), a.options.reduce(function(u, f) {
          return ve(ve({}, u), jr(f));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(a.options[0]);
        continue;
      // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
      case "integer-width":
        if (a.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        a.options[0].replace(ji, function(u, f, d, b, v, E) {
          if (f)
            t.minimumIntegerDigits = d.length;
          else {
            if (b && v)
              throw new Error("We currently do not support maximum integer digits");
            if (E)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Un.test(a.stem)) {
      t.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (Gr.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(Gr, function(u, f, d, b, v, E) {
        return d === "*" ? t.minimumFractionDigits = f.length : b && b[0] === "#" ? t.maximumFractionDigits = b.length : v && E ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + E.length) : (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length), "";
      });
      var s = a.options[0];
      s === "w" ? t = ve(ve({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = ve(ve({}, t), qr(s)));
      continue;
    }
    if (zn.test(a.stem)) {
      t = ve(ve({}, t), qr(a.stem));
      continue;
    }
    var o = Gn(a.stem);
    o && (t = ve(ve({}, t), o));
    var l = Vi(a.stem);
    l && (t = ve(ve({}, t), l));
  }
  return t;
}
var Lt = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
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
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
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
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
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
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
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
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
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
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
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
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
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
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
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
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
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
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
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
  VC: [
    "h",
    "hb",
    "H",
    "hB"
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
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
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
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
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
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
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
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
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
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Wi(r, t) {
  for (var n = "", i = 0; i < r.length; i++) {
    var a = r.charAt(i);
    if (a === "j") {
      for (var s = 0; i + 1 < r.length && r.charAt(i + 1) === a; )
        s++, i++;
      var o = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), u = "a", f = Xi(t);
      for ((f == "H" || f == "k") && (l = 0); l-- > 0; )
        n += u;
      for (; o-- > 0; )
        n = f + n;
    } else a === "J" ? n += "H" : n += a;
  }
  return n;
}
function Xi(r) {
  var t = r.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  r.hourCycles && // @ts-ignore
  r.hourCycles.length && (t = r.hourCycles[0]), t)
    switch (t) {
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
  var n = r.language, i;
  n !== "root" && (i = r.maximize().region);
  var a = Lt[i || ""] || Lt[n || ""] || Lt["".concat(n, "-001")] || Lt["001"];
  return a[0];
}
var rr, Yi = new RegExp("^".concat(Pn.source, "*")), Ki = new RegExp("".concat(Pn.source, "*$"));
function se(r, t) {
  return { start: r, end: t };
}
var Qi = !!String.prototype.startsWith, Ji = !!String.fromCodePoint, $i = !!Object.fromEntries, ea = !!String.prototype.codePointAt, ta = !!String.prototype.trimStart, ra = !!String.prototype.trimEnd, na = !!Number.isSafeInteger, ia = na ? Number.isSafeInteger : function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r && Math.abs(r) <= 9007199254740991;
}, gr = !0;
try {
  var aa = jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  gr = ((rr = aa.exec("a")) === null || rr === void 0 ? void 0 : rr[0]) === "a";
} catch {
  gr = !1;
}
var Vr = Qi ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), mr = Ji ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", a = t.length, s = 0, o; a > s; ) {
      if (o = t[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Zr = (
  // native
  $i ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, a = t; i < a.length; i++) {
        var s = a[i], o = s[0], l = s[1];
        n[o] = l;
      }
      return n;
    }
  )
), qn = ea ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var a = t.charCodeAt(n), s;
      return a < 55296 || a > 56319 || n + 1 === i || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? a : (a - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), sa = ta ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Yi, "");
  }
), oa = ra ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ki, "");
  }
);
function jn(r, t) {
  return new RegExp(r, t);
}
var vr;
if (gr) {
  var Wr = jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  vr = function(t, n) {
    var i;
    Wr.lastIndex = n;
    var a = Wr.exec(t);
    return (i = a[1]) !== null && i !== void 0 ? i : "";
  };
} else
  vr = function(t, n) {
    for (var i = []; ; ) {
      var a = qn(t, n);
      if (a === void 0 || Vn(a) || ha(a))
        break;
      i.push(a), n += a >= 65536 ? 2 : 1;
    }
    return mr.apply(void 0, i);
  };
var la = (
  /** @class */
  (function() {
    function r(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return r.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, r.prototype.parseMessage = function(t, n, i) {
      for (var a = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var o = this.parseArgument(t, i);
          if (o.err)
            return o;
          a.push(o.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), a.push({
              type: ke.pound,
              location: se(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(ne.UNMATCHED_CLOSING_TAG, se(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && _r(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            a.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            a.push(o.val);
          }
        }
      }
      return { val: a, err: null };
    }, r.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var a = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ke.literal,
            value: "<".concat(a, "/>"),
            location: se(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var o = s.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !_r(this.char()))
            return this.error(ne.INVALID_TAG, se(l, this.clonePosition()));
          var u = this.clonePosition(), f = this.parseTagName();
          return a !== f ? this.error(ne.UNMATCHED_CLOSING_TAG, se(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ke.tag,
              value: a,
              children: o,
              location: se(i, this.clonePosition())
            },
            err: null
          } : this.error(ne.INVALID_TAG, se(l, this.clonePosition())));
        } else
          return this.error(ne.UNCLOSED_TAG, se(i, this.clonePosition()));
      } else
        return this.error(ne.INVALID_TAG, se(i, this.clonePosition()));
    }, r.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && ca(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, r.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), a = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          a += s;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          a += o;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          a += l;
          continue;
        }
        break;
      }
      var u = se(i, this.clonePosition());
      return {
        val: { type: ke.literal, value: a, location: u },
        err: null
      };
    }, r.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !ua(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, r.prototype.tryParseQuote = function(t) {
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
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return mr.apply(void 0, n);
    }, r.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), mr(i));
    }, r.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, se(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ne.EMPTY_ARGUMENT, se(i, this.clonePosition()));
      var a = this.parseIdentifierIfPossible().value;
      if (!a)
        return this.error(ne.MALFORMED_ARGUMENT, se(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, se(i, this.clonePosition()));
      switch (this.char()) {
        // Simple argument: `{name}`
        case 125:
          return this.bump(), {
            val: {
              type: ke.argument,
              // value does not include the opening and closing braces.
              value: a,
              location: se(i, this.clonePosition())
            },
            err: null
          };
        // Argument with options: `{name, format, ...}`
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, se(i, this.clonePosition())) : this.parseArgumentOptions(t, n, a, i);
        default:
          return this.error(ne.MALFORMED_ARGUMENT, se(i, this.clonePosition()));
      }
    }, r.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = vr(this.message, n), a = n + i.length;
      this.bumpTo(a);
      var s = this.clonePosition(), o = se(t, s);
      return { value: i, location: o };
    }, r.prototype.parseArgumentOptions = function(t, n, i, a) {
      var s, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (l) {
        case "":
          return this.error(ne.EXPECT_ARGUMENT_TYPE, se(o, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var f = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), b = this.parseSimpleArgStyleIfPossible();
            if (b.err)
              return b;
            var v = oa(b.val);
            if (v.length === 0)
              return this.error(ne.EXPECT_ARGUMENT_STYLE, se(this.clonePosition(), this.clonePosition()));
            var E = se(d, this.clonePosition());
            f = { style: v, styleLocation: E };
          }
          var L = this.tryParseArgumentClose(a);
          if (L.err)
            return L;
          var A = se(a, this.clonePosition());
          if (f && Vr(f?.style, "::", 0)) {
            var C = sa(f.style.slice(2));
            if (l === "number") {
              var b = this.parseNumberSkeletonFromString(C, f.styleLocation);
              return b.err ? b : {
                val: { type: ke.number, value: i, location: A, style: b.val },
                err: null
              };
            } else {
              if (C.length === 0)
                return this.error(ne.EXPECT_DATE_TIME_SKELETON, A);
              var T = C;
              this.locale && (T = Wi(C, this.locale));
              var v = {
                type: dt.dateTime,
                pattern: T,
                location: f.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? zi(T) : {}
              }, c = l === "date" ? ke.date : ke.time;
              return {
                val: { type: c, value: i, location: A, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? ke.number : l === "date" ? ke.date : ke.time,
              value: i,
              location: A,
              style: (s = f?.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ne.EXPECT_SELECT_ARGUMENT_OPTIONS, se(p, ve({}, p)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), h = 0;
          if (l !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, se(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var b = this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (b.err)
              return b;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), h = b.val;
          }
          var w = this.tryParsePluralOrSelectOptions(t, l, n, g);
          if (w.err)
            return w;
          var L = this.tryParseArgumentClose(a);
          if (L.err)
            return L;
          var x = se(a, this.clonePosition());
          return l === "select" ? {
            val: {
              type: ke.select,
              value: i,
              options: Zr(w.val),
              location: x
            },
            err: null
          } : {
            val: {
              type: ke.plural,
              value: i,
              options: Zr(w.val),
              offset: h,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: x
            },
            err: null
          };
        }
        default:
          return this.error(ne.INVALID_ARGUMENT_TYPE, se(o, u));
      }
    }, r.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE, se(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, r.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, se(a, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
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
    }, r.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = Gi(t);
      } catch {
        return this.error(ne.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: dt.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Zi(i) : {}
        },
        err: null
      };
    }, r.prototype.tryParsePluralOrSelectOptions = function(t, n, i, a) {
      for (var s, o = !1, l = [], u = /* @__PURE__ */ new Set(), f = a.value, d = a.location; ; ) {
        if (f.length === 0) {
          var b = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_SELECTOR, ne.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            d = se(b, this.clonePosition()), f = this.message.slice(b.offset, this.offset());
          } else
            break;
        }
        if (u.has(f))
          return this.error(n === "select" ? ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        f === "other" && (o = !0), this.bumpSpace();
        var E = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, se(this.clonePosition(), this.clonePosition()));
        var L = this.parseMessage(t + 1, n, i);
        if (L.err)
          return L;
        var A = this.tryParseArgumentClose(E);
        if (A.err)
          return A;
        l.push([
          f,
          {
            value: L.val,
            location: se(E, this.clonePosition())
          }
        ]), u.add(f), this.bumpSpace(), s = this.parseIdentifierIfPossible(), f = s.value, d = s.location;
      }
      return l.length === 0 ? this.error(n === "select" ? ne.EXPECT_SELECT_ARGUMENT_SELECTOR : ne.EXPECT_PLURAL_ARGUMENT_SELECTOR, se(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ne.MISSING_OTHER_CLAUSE, se(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, r.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, a = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          s = !0, o = o * 10 + (l - 48), this.bump();
        else
          break;
      }
      var u = se(a, this.clonePosition());
      return s ? (o *= i, ia(o) ? { val: o, err: null } : this.error(n, u)) : this.error(t, u);
    }, r.prototype.offset = function() {
      return this.position.offset;
    }, r.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, r.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, r.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = qn(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, r.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, r.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, r.prototype.bumpIf = function(t) {
      if (Vr(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, r.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, r.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, r.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Vn(this.char()); )
        this.bump();
    }, r.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, r;
  })()
);
function _r(r) {
  return r >= 97 && r <= 122 || r >= 65 && r <= 90;
}
function ua(r) {
  return _r(r) || r === 47;
}
function ca(r) {
  return r === 45 || r === 46 || r >= 48 && r <= 57 || r === 95 || r >= 97 && r <= 122 || r >= 65 && r <= 90 || r == 183 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8255 && r <= 8256 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039;
}
function Vn(r) {
  return r >= 9 && r <= 13 || r === 32 || r === 133 || r >= 8206 && r <= 8207 || r === 8232 || r === 8233;
}
function ha(r) {
  return r >= 33 && r <= 35 || r === 36 || r >= 37 && r <= 39 || r === 40 || r === 41 || r === 42 || r === 43 || r === 44 || r === 45 || r >= 46 && r <= 47 || r >= 58 && r <= 59 || r >= 60 && r <= 62 || r >= 63 && r <= 64 || r === 91 || r === 92 || r === 93 || r === 94 || r === 96 || r === 123 || r === 124 || r === 125 || r === 126 || r === 161 || r >= 162 && r <= 165 || r === 166 || r === 167 || r === 169 || r === 171 || r === 172 || r === 174 || r === 176 || r === 177 || r === 182 || r === 187 || r === 191 || r === 215 || r === 247 || r >= 8208 && r <= 8213 || r >= 8214 && r <= 8215 || r === 8216 || r === 8217 || r === 8218 || r >= 8219 && r <= 8220 || r === 8221 || r === 8222 || r === 8223 || r >= 8224 && r <= 8231 || r >= 8240 && r <= 8248 || r === 8249 || r === 8250 || r >= 8251 && r <= 8254 || r >= 8257 && r <= 8259 || r === 8260 || r === 8261 || r === 8262 || r >= 8263 && r <= 8273 || r === 8274 || r === 8275 || r >= 8277 && r <= 8286 || r >= 8592 && r <= 8596 || r >= 8597 && r <= 8601 || r >= 8602 && r <= 8603 || r >= 8604 && r <= 8607 || r === 8608 || r >= 8609 && r <= 8610 || r === 8611 || r >= 8612 && r <= 8613 || r === 8614 || r >= 8615 && r <= 8621 || r === 8622 || r >= 8623 && r <= 8653 || r >= 8654 && r <= 8655 || r >= 8656 && r <= 8657 || r === 8658 || r === 8659 || r === 8660 || r >= 8661 && r <= 8691 || r >= 8692 && r <= 8959 || r >= 8960 && r <= 8967 || r === 8968 || r === 8969 || r === 8970 || r === 8971 || r >= 8972 && r <= 8991 || r >= 8992 && r <= 8993 || r >= 8994 && r <= 9e3 || r === 9001 || r === 9002 || r >= 9003 && r <= 9083 || r === 9084 || r >= 9085 && r <= 9114 || r >= 9115 && r <= 9139 || r >= 9140 && r <= 9179 || r >= 9180 && r <= 9185 || r >= 9186 && r <= 9254 || r >= 9255 && r <= 9279 || r >= 9280 && r <= 9290 || r >= 9291 && r <= 9311 || r >= 9472 && r <= 9654 || r === 9655 || r >= 9656 && r <= 9664 || r === 9665 || r >= 9666 && r <= 9719 || r >= 9720 && r <= 9727 || r >= 9728 && r <= 9838 || r === 9839 || r >= 9840 && r <= 10087 || r === 10088 || r === 10089 || r === 10090 || r === 10091 || r === 10092 || r === 10093 || r === 10094 || r === 10095 || r === 10096 || r === 10097 || r === 10098 || r === 10099 || r === 10100 || r === 10101 || r >= 10132 && r <= 10175 || r >= 10176 && r <= 10180 || r === 10181 || r === 10182 || r >= 10183 && r <= 10213 || r === 10214 || r === 10215 || r === 10216 || r === 10217 || r === 10218 || r === 10219 || r === 10220 || r === 10221 || r === 10222 || r === 10223 || r >= 10224 && r <= 10239 || r >= 10240 && r <= 10495 || r >= 10496 && r <= 10626 || r === 10627 || r === 10628 || r === 10629 || r === 10630 || r === 10631 || r === 10632 || r === 10633 || r === 10634 || r === 10635 || r === 10636 || r === 10637 || r === 10638 || r === 10639 || r === 10640 || r === 10641 || r === 10642 || r === 10643 || r === 10644 || r === 10645 || r === 10646 || r === 10647 || r === 10648 || r >= 10649 && r <= 10711 || r === 10712 || r === 10713 || r === 10714 || r === 10715 || r >= 10716 && r <= 10747 || r === 10748 || r === 10749 || r >= 10750 && r <= 11007 || r >= 11008 && r <= 11055 || r >= 11056 && r <= 11076 || r >= 11077 && r <= 11078 || r >= 11079 && r <= 11084 || r >= 11085 && r <= 11123 || r >= 11124 && r <= 11125 || r >= 11126 && r <= 11157 || r === 11158 || r >= 11159 && r <= 11263 || r >= 11776 && r <= 11777 || r === 11778 || r === 11779 || r === 11780 || r === 11781 || r >= 11782 && r <= 11784 || r === 11785 || r === 11786 || r === 11787 || r === 11788 || r === 11789 || r >= 11790 && r <= 11798 || r === 11799 || r >= 11800 && r <= 11801 || r === 11802 || r === 11803 || r === 11804 || r === 11805 || r >= 11806 && r <= 11807 || r === 11808 || r === 11809 || r === 11810 || r === 11811 || r === 11812 || r === 11813 || r === 11814 || r === 11815 || r === 11816 || r === 11817 || r >= 11818 && r <= 11822 || r === 11823 || r >= 11824 && r <= 11833 || r >= 11834 && r <= 11835 || r >= 11836 && r <= 11839 || r === 11840 || r === 11841 || r === 11842 || r >= 11843 && r <= 11855 || r >= 11856 && r <= 11857 || r === 11858 || r >= 11859 && r <= 11903 || r >= 12289 && r <= 12291 || r === 12296 || r === 12297 || r === 12298 || r === 12299 || r === 12300 || r === 12301 || r === 12302 || r === 12303 || r === 12304 || r === 12305 || r >= 12306 && r <= 12307 || r === 12308 || r === 12309 || r === 12310 || r === 12311 || r === 12312 || r === 12313 || r === 12314 || r === 12315 || r === 12316 || r === 12317 || r >= 12318 && r <= 12319 || r === 12320 || r === 12336 || r === 64830 || r === 64831 || r >= 65093 && r <= 65094;
}
function br(r) {
  r.forEach(function(t) {
    if (delete t.location, Mn(t) || Hn(t))
      for (var n in t.options)
        delete t.options[n].location, br(t.options[n].value);
    else Ln(t) && Nn(t.style) || (Rn(t) || In(t)) && pr(t.style) ? delete t.style.location : On(t) && br(t.children);
  });
}
function da(r, t) {
  t === void 0 && (t = {}), t = ve({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new la(r, t).parse();
  if (n.err) {
    var i = SyntaxError(ne[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t?.captureLocation || br(n.val), n.val;
}
function nr(r, t) {
  var n = t && t.cache ? t.cache : _a, i = t && t.serializer ? t.serializer : va, a = t && t.strategy ? t.strategy : ga;
  return a(r, {
    cache: n,
    serializer: i
  });
}
function fa(r) {
  return r == null || typeof r == "number" || typeof r == "boolean";
}
function pa(r, t, n, i) {
  var a = fa(i) ? i : n(i), s = t.get(a);
  return typeof s > "u" && (s = r.call(this, i), t.set(a, s)), s;
}
function Zn(r, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), a = n(i), s = t.get(a);
  return typeof s > "u" && (s = r.apply(this, i), t.set(a, s)), s;
}
function Wn(r, t, n, i, a) {
  return n.bind(t, r, i, a);
}
function ga(r, t) {
  var n = r.length === 1 ? pa : Zn;
  return Wn(r, this, n, t.cache.create(), t.serializer);
}
function ma(r, t) {
  return Wn(r, this, Zn, t.cache.create(), t.serializer);
}
var va = function() {
  return JSON.stringify(arguments);
};
function Cr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Cr.prototype.get = function(r) {
  return this.cache[r];
};
Cr.prototype.set = function(r, t) {
  this.cache[r] = t;
};
var _a = {
  create: function() {
    return new Cr();
  }
}, ir = {
  variadic: ma
}, ft;
(function(r) {
  r.MISSING_VALUE = "MISSING_VALUE", r.INVALID_VALUE = "INVALID_VALUE", r.MISSING_INTL_API = "MISSING_INTL_API";
})(ft || (ft = {}));
var Xt = (
  /** @class */
  (function(r) {
    Wt(t, r);
    function t(n, i, a) {
      var s = r.call(this, n) || this;
      return s.code = i, s.originalMessage = a, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  })(Error)
), Xr = (
  /** @class */
  (function(r) {
    Wt(t, r);
    function t(n, i, a, s) {
      return r.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(a).join('", "'), '"'), ft.INVALID_VALUE, s) || this;
    }
    return t;
  })(Xt)
), ba = (
  /** @class */
  (function(r) {
    Wt(t, r);
    function t(n, i, a) {
      return r.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), ft.INVALID_VALUE, a) || this;
    }
    return t;
  })(Xt)
), xa = (
  /** @class */
  (function(r) {
    Wt(t, r);
    function t(n, i) {
      return r.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), ft.MISSING_VALUE, i) || this;
    }
    return t;
  })(Xt)
), He;
(function(r) {
  r[r.literal = 0] = "literal", r[r.object = 1] = "object";
})(He || (He = {}));
function wa(r) {
  return r.length < 2 ? r : r.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== He.literal || n.type !== He.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function ya(r) {
  return typeof r == "function";
}
function Ot(r, t, n, i, a, s, o) {
  if (r.length === 1 && Ur(r[0]))
    return [
      {
        type: He.literal,
        value: r[0].value
      }
    ];
  for (var l = [], u = 0, f = r; u < f.length; u++) {
    var d = f[u];
    if (Ur(d)) {
      l.push({
        type: He.literal,
        value: d.value
      });
      continue;
    }
    if (Ni(d)) {
      typeof s == "number" && l.push({
        type: He.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var b = d.value;
    if (!(a && b in a))
      throw new xa(b, o);
    var v = a[b];
    if (Oi(d)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? He.literal : He.object,
        value: v
      });
      continue;
    }
    if (Rn(d)) {
      var E = typeof d.style == "string" ? i.date[d.style] : pr(d.style) ? d.style.parsedOptions : void 0;
      l.push({
        type: He.literal,
        value: n.getDateTimeFormat(t, E).format(v)
      });
      continue;
    }
    if (In(d)) {
      var E = typeof d.style == "string" ? i.time[d.style] : pr(d.style) ? d.style.parsedOptions : i.time.medium;
      l.push({
        type: He.literal,
        value: n.getDateTimeFormat(t, E).format(v)
      });
      continue;
    }
    if (Ln(d)) {
      var E = typeof d.style == "string" ? i.number[d.style] : Nn(d.style) ? d.style.parsedOptions : void 0;
      E && E.scale && (v = v * (E.scale || 1)), l.push({
        type: He.literal,
        value: n.getNumberFormat(t, E).format(v)
      });
      continue;
    }
    if (On(d)) {
      var L = d.children, A = d.value, C = a[A];
      if (!ya(C))
        throw new ba(A, "function", o);
      var T = Ot(L, t, n, i, a, s), c = C(T.map(function(h) {
        return h.value;
      }));
      Array.isArray(c) || (c = [c]), l.push.apply(l, c.map(function(h) {
        return {
          type: typeof h == "string" ? He.literal : He.object,
          value: h
        };
      }));
    }
    if (Mn(d)) {
      var p = d.options[v] || d.options.other;
      if (!p)
        throw new Xr(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, Ot(p.value, t, n, i, a));
      continue;
    }
    if (Hn(d)) {
      var p = d.options["=".concat(v)];
      if (!p) {
        if (!Intl.PluralRules)
          throw new Xt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ft.MISSING_INTL_API, o);
        var g = n.getPluralRules(t, { type: d.pluralType }).select(v - (d.offset || 0));
        p = d.options[g] || d.options.other;
      }
      if (!p)
        throw new Xr(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, Ot(p.value, t, n, i, a, v - (d.offset || 0)));
      continue;
    }
  }
  return wa(l);
}
function Ea(r, t) {
  return t ? ve(ve(ve({}, r || {}), t || {}), Object.keys(r).reduce(function(n, i) {
    return n[i] = ve(ve({}, r[i]), t[i] || {}), n;
  }, {})) : r;
}
function Da(r, t) {
  return t ? Object.keys(r).reduce(function(n, i) {
    return n[i] = Ea(r[i], t[i]), n;
  }, ve({}, r)) : r;
}
function ar(r) {
  return {
    create: function() {
      return {
        get: function(t) {
          return r[t];
        },
        set: function(t, n) {
          r[t] = n;
        }
      };
    }
  };
}
function ka(r) {
  return r === void 0 && (r = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: nr(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, tr([void 0], n, !1)))();
    }, {
      cache: ar(r.number),
      strategy: ir.variadic
    }),
    getDateTimeFormat: nr(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, tr([void 0], n, !1)))();
    }, {
      cache: ar(r.dateTime),
      strategy: ir.variadic
    }),
    getPluralRules: nr(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, tr([void 0], n, !1)))();
    }, {
      cache: ar(r.pluralRules),
      strategy: ir.variadic
    })
  };
}
var Ca = (
  /** @class */
  (function() {
    function r(t, n, i, a) {
      var s = this;
      if (n === void 0 && (n = r.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var l = s.formatToParts(o);
        if (l.length === 1)
          return l[0].value;
        var u = l.reduce(function(f, d) {
          return !f.length || d.type !== He.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(o) {
        return Ot(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = r.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !r.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = r.__parse(t, {
          ignoreTag: a?.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Da(r.formats, i), this.formatters = a && a.formatters || ka(this.formatterCache);
    }
    return Object.defineProperty(r, "defaultLocale", {
      get: function() {
        return r.memoizedDefaultLocale || (r.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), r.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), r.memoizedDefaultLocale = null, r.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, r.__parse = da, r.formats = {
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
    }, r;
  })()
);
function Aa(r, t) {
  if (t == null)
    return;
  if (t in r)
    return r[t];
  const n = t.split(".");
  let i = r;
  for (let a = 0; a < n.length; a++)
    if (typeof i == "object") {
      if (a > 0) {
        const s = n.slice(a, n.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[n[a]];
    } else
      i = void 0;
  return i;
}
const $e = {}, Fa = (r, t, n) => n && (t in $e || ($e[t] = {}), r in $e[t] || ($e[t][r] = n), n), Xn = (r, t) => {
  if (t == null)
    return;
  if (t in $e && r in $e[t])
    return $e[t][r];
  const n = Yt(t);
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = Sa(a, r);
    if (s)
      return Fa(r, t, s);
  }
};
let Ar;
const kt = kr({});
function Ta(r) {
  return Ar[r] || null;
}
function Yn(r) {
  return r in Ar;
}
function Sa(r, t) {
  if (!Yn(r))
    return null;
  const n = Ta(r);
  return Aa(n, t);
}
function Ba(r) {
  if (r == null)
    return;
  const t = Yt(r);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Yn(i))
      return i;
  }
}
function La(r, ...t) {
  delete $e[r], kt.update((n) => (n[r] = ht.all([n[r] || {}, ...t]), n));
}
gt(
  [kt],
  ([r]) => Object.keys(r)
);
kt.subscribe((r) => Ar = r);
const Nt = {};
function Ra(r, t) {
  Nt[r].delete(t), Nt[r].size === 0 && delete Nt[r];
}
function Kn(r) {
  return Nt[r];
}
function Ia(r) {
  return Yt(r).map((t) => {
    const n = Kn(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function xr(r) {
  return r == null ? !1 : Yt(r).some(
    (t) => {
      var n;
      return (n = Kn(t)) == null ? void 0 : n.size;
    }
  );
}
function Ma(r, t) {
  return Promise.all(
    t.map((i) => (Ra(r, i), i().then((a) => a.default || a)))
  ).then((i) => La(r, ...i));
}
const bt = {};
function Qn(r) {
  if (!xr(r))
    return r in bt ? bt[r] : Promise.resolve();
  const t = Ia(r);
  return bt[r] = Promise.all(
    t.map(
      ([n, i]) => Ma(n, i)
    )
  ).then(() => {
    if (xr(r))
      return Qn(r);
    delete bt[r];
  }), bt[r];
}
const Ha = {
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
}, Oa = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Ha,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Na = Oa;
function pt() {
  return Na;
}
const sr = kr(!1);
var Pa = Object.defineProperty, za = Object.defineProperties, Ua = Object.getOwnPropertyDescriptors, Yr = Object.getOwnPropertySymbols, Ga = Object.prototype.hasOwnProperty, qa = Object.prototype.propertyIsEnumerable, Kr = (r, t, n) => t in r ? Pa(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n, ja = (r, t) => {
  for (var n in t || (t = {}))
    Ga.call(t, n) && Kr(r, n, t[n]);
  if (Yr)
    for (var n of Yr(t))
      qa.call(t, n) && Kr(r, n, t[n]);
  return r;
}, Va = (r, t) => za(r, Ua(t));
let wr;
const Ut = kr(null);
function Qr(r) {
  return r.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function Yt(r, t = pt().fallbackLocale) {
  const n = Qr(r);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Qr(t)])] : n;
}
function at() {
  return wr ?? void 0;
}
Ut.subscribe((r) => {
  wr = r ?? void 0, typeof window < "u" && r != null && document.documentElement.setAttribute("lang", r);
});
const Za = (r) => {
  if (r && Ba(r) && xr(r)) {
    const { loadingDelay: t } = pt();
    let n;
    return typeof window < "u" && at() != null && t ? n = window.setTimeout(
      () => sr.set(!0),
      t
    ) : sr.set(!0), Qn(r).then(() => {
      Ut.set(r);
    }).finally(() => {
      clearTimeout(n), sr.set(!1);
    });
  }
  return Ut.set(r);
}, mt = Va(ja({}, Ut), {
  set: Za
}), Kt = (r) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const a = JSON.stringify(i);
    return a in t ? t[a] : t[a] = r(i);
  };
};
var Wa = Object.defineProperty, Gt = Object.getOwnPropertySymbols, Jn = Object.prototype.hasOwnProperty, $n = Object.prototype.propertyIsEnumerable, Jr = (r, t, n) => t in r ? Wa(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n, Fr = (r, t) => {
  for (var n in t || (t = {}))
    Jn.call(t, n) && Jr(r, n, t[n]);
  if (Gt)
    for (var n of Gt(t))
      $n.call(t, n) && Jr(r, n, t[n]);
  return r;
}, vt = (r, t) => {
  var n = {};
  for (var i in r)
    Jn.call(r, i) && t.indexOf(i) < 0 && (n[i] = r[i]);
  if (r != null && Gt)
    for (var i of Gt(r))
      t.indexOf(i) < 0 && $n.call(r, i) && (n[i] = r[i]);
  return n;
};
const Et = (r, t) => {
  const { formats: n } = pt();
  if (r in n && t in n[r])
    return n[r][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${r} format.`);
}, Xa = Kt(
  (r) => {
    var t = r, { locale: n, format: i } = t, a = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (a = Et("number", i)), new Intl.NumberFormat(n, a);
  }
), Ya = Kt(
  (r) => {
    var t = r, { locale: n, format: i } = t, a = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? a = Et("date", i) : Object.keys(a).length === 0 && (a = Et("date", "short")), new Intl.DateTimeFormat(n, a);
  }
), Ka = Kt(
  (r) => {
    var t = r, { locale: n, format: i } = t, a = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? a = Et("time", i) : Object.keys(a).length === 0 && (a = Et("time", "short")), new Intl.DateTimeFormat(n, a);
  }
), Qa = (r = {}) => {
  var t = r, {
    locale: n = at()
  } = t, i = vt(t, [
    "locale"
  ]);
  return Xa(Fr({ locale: n }, i));
}, Ja = (r = {}) => {
  var t = r, {
    locale: n = at()
  } = t, i = vt(t, [
    "locale"
  ]);
  return Ya(Fr({ locale: n }, i));
}, $a = (r = {}) => {
  var t = r, {
    locale: n = at()
  } = t, i = vt(t, [
    "locale"
  ]);
  return Ka(Fr({ locale: n }, i));
}, es = Kt(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (r, t = at()) => new Ca(r, t, pt().formats, {
    ignoreTag: pt().ignoreTag
  })
), ts = (r, t = {}) => {
  var n, i, a, s;
  let o = t;
  typeof r == "object" && (o = r, r = o.id);
  const {
    values: l,
    locale: u = at(),
    default: f
  } = o;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Xn(r, u);
  if (!d)
    d = (s = (a = (i = (n = pt()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: u, id: r, defaultValue: f })) != null ? a : f) != null ? s : r;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${r}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!l)
    return d;
  let b = d;
  try {
    b = es(d, u).format(l);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${r}" has syntax error:`,
      v.message
    );
  }
  return b;
}, rs = (r, t) => $a(t).format(r), ns = (r, t) => Ja(t).format(r), is = (r, t) => Qa(t).format(r), as = (r, t = at()) => Xn(r, t);
gt([mt, kt], () => ts);
gt([mt], () => rs);
gt([mt], () => ns);
gt([mt], () => is);
gt([mt, kt], () => as);
const ss = "__i18n__", os = [
  "label",
  "info",
  "placeholder",
  "description",
  "title",
  "value"
], ls = "GRADIO_ROOT";
class Pt extends Error {
  constructor(t) {
    super(t), this.name = "ShareError";
  }
}
async function us(r, t) {
  if (window.__gradio_space__ == null)
    throw new Pt("Must be on Spaces to share.");
  let n, i, a;
  {
    let u;
    if (typeof r == "object" && r.path)
      u = r.path;
    else if (typeof r == "string")
      u = r;
    else
      throw new Error("Invalid data format for base64 type");
    n = cs(u), i = u.split(";")[0].split(":")[1], a = "file." + i.split("/")[1];
  }
  const s = new File([n], a, { type: i }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if (o.headers.get("content-type")?.includes("application/json")) {
      const u = await o.json();
      throw new Pt(`Upload failed: ${u.error}`);
    }
    throw new Pt("Upload failed.");
  }
  return await o.text();
}
function cs(r) {
  for (var t = r.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), a = i.length, s = new Uint8Array(a); a--; )
    s[a] = i.charCodeAt(a);
  return new Blob([s], { type: n });
}
const hs = typeof window < "u", ds = [
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
  "attached_events"
];
function fs(r) {
  return typeof r == "string" && r.includes(ss);
}
class ps {
  load_component;
  #e = e.state(e.proxy({}));
  get shared() {
    return e.get(this.#e);
  }
  set shared(t) {
    e.set(this.#e, t, !0);
  }
  #t = e.state(e.proxy({}));
  get props() {
    return e.get(this.#t);
  }
  set props(t) {
    e.set(this.#t, t, !0);
  }
  #r = e.state((t) => t);
  get i18n() {
    return e.get(this.#r);
  }
  set i18n(t) {
    e.set(this.#r, t, !0);
  }
  translatable_props = {};
  dispatcher;
  last_update = null;
  shared_props = ds;
  constructor(t, n) {
    for (const s in t.shared_props)
      this.shared[s] = t.shared_props[s];
    for (const s in t.props)
      this.props[s] = t.props[s];
    if (n)
      for (const s in n)
        this.props[s] === void 0 && (this.props[s] = n[s]);
    this.i18n = this.props.i18n ?? ((s) => s);
    for (const s of os)
      this.shared[s] = this._translate_and_store("shared", s, t.shared_props[s]), this.props[s] = this._translate_and_store("props", s, t.props[s]);
    if (this.load_component = this.shared.load_component, !hs || t.props?.__GRADIO_BROWSER_TEST__) {
      this.dispatcher = () => {
      };
      return;
    }
    const { register: i, dispatcher: a } = Tn(ls);
    i(t.shared_props.id, this.set_data.bind(this), this.get_data.bind(this)), this.dispatcher = a, e.user_effect(() => {
      for (const s in t.shared_props)
        this._is_i18n_managed(`shared.${s}`, t.shared_props[s]) || (this.shared[s] = t.shared_props[s]);
      for (const s in t.props)
        this._is_i18n_managed(`props.${s}`, t.props[s]) || (this.props[s] = t.props[s]);
      i(t.shared_props.id, this.set_data.bind(this), this.get_data.bind(this)), dr(() => {
        this.shared.id = t.shared_props.id;
      });
    }), Object.keys(this.translatable_props).length > 0 && mt.subscribe(() => {
      for (const [s, o] of Object.entries(this.translatable_props)) {
        const [l, u] = s.split("."), f = this.i18n(o);
        l === "shared" ? this.shared[u] = f : this.props[u] = f;
      }
    });
  }
  // check if props are translatable
  _is_i18n_managed(t, n) {
    const i = this.translatable_props[t];
    return i ? n === i ? !0 : (delete this.translatable_props[t], !1) : !1;
  }
  _translate_and_store(t, n, i) {
    if (typeof i != "string") return i;
    const a = this.i18n(i);
    return a !== i && (this.translatable_props[`${t}.${n}`] = i), a;
  }
  dispatch(t, n) {
    this.dispatcher(this.shared.id, t, n);
  }
  async get_data() {
    return e.snapshot(this.props);
  }
  update(t) {
    this.set_data(t);
  }
  set_data(t) {
    for (const n in t) {
      const i = t[n], a = fs(i) ? this._translate_and_store(this.shared_props.includes(n) ? "shared" : "props", n, i) : i;
      if (this.shared_props.includes(n)) {
        const s = n;
        this.shared[s] = a;
        continue;
      }
      this.props[n] = a;
    }
  }
}
var gs = e.from_svg('<svg class="resize-handle svelte-1stq1b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line><line x1="5" y1="9" x2="9" y2="5" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line></svg>'), ms = e.from_html("<!> <!>", 1), vs = e.from_html('<div class="placeholder svelte-1stq1b1"></div>'), _s = e.from_html("<!> <!>", 1);
function bs(r, t) {
  e.push(t, !1);
  let n = e.prop(t, "height", 8, void 0), i = e.prop(t, "min_height", 8, void 0), a = e.prop(t, "max_height", 8, void 0), s = e.prop(t, "width", 8, void 0), o = e.prop(t, "elem_id", 8, ""), l = e.prop(t, "elem_classes", 24, () => []), u = e.prop(t, "variant", 8, "solid"), f = e.prop(t, "border_mode", 8, "base"), d = e.prop(t, "padding", 8, !0), b = e.prop(t, "type", 8, "normal"), v = e.prop(t, "test_id", 8, void 0), E = e.prop(t, "explicit_call", 8, !1), L = e.prop(t, "container", 8, !0), A = e.prop(t, "visible", 8, !0), C = e.prop(t, "allow_overflow", 8, !0), T = e.prop(t, "overflow_behavior", 8, "auto"), c = e.prop(t, "scale", 8, null), p = e.prop(t, "min_width", 8, 0), g = e.prop(t, "flex", 12, !1), h = e.prop(t, "resizable", 8, !1), w = e.prop(t, "rtl", 8, !1), x = e.prop(t, "fullscreen", 12, !1), _ = e.prop(t, "label", 8, void 0), m = e.mutable_source(x()), F = e.mutable_source(), D = b() === "fieldset" ? "fieldset" : "div", I = e.mutable_source(0), j = e.mutable_source(0), q = e.mutable_source(null);
  function fe(ie) {
    x() && ie.key === "Escape" && x(!1);
  }
  const Q = (ie) => {
    if (ie !== void 0) {
      if (typeof ie == "number")
        return ie + "px";
      if (typeof ie == "string")
        return ie;
    }
  }, pe = (ie) => {
    let te = ie.clientY;
    const De = (K) => {
      const P = K.clientY - te;
      te = K.clientY, e.mutate(F, e.get(F).style.height = `${e.get(F).offsetHeight + P}px`);
    }, ge = () => {
      window.removeEventListener("mousemove", De), window.removeEventListener("mouseup", ge);
    };
    window.addEventListener("mousemove", De), window.addEventListener("mouseup", ge);
  };
  e.legacy_pre_effect(
    () => (e.deep_read_state(x()), e.get(m), e.get(F)),
    () => {
      x() !== e.get(m) && (e.set(m, x()), x() ? (e.set(q, e.get(F).getBoundingClientRect()), e.set(I, e.get(F).offsetHeight), e.set(j, e.get(F).offsetWidth), window.addEventListener("keydown", fe)) : (e.set(q, null), window.removeEventListener("keydown", fe)));
    }
  ), e.legacy_pre_effect(() => e.deep_read_state(A()), () => {
    A() || g(!1);
  }), e.legacy_pre_effect_reset(), e.init();
  var V = e.comment(), W = e.first_child(V);
  {
    var ue = (ie) => {
      var te = _s(), De = e.first_child(te);
      e.element(De, () => D, !1, (P, B) => {
        e.bind_this(P, (H) => e.set(F, H), () => e.get(F)), e.attribute_effect(
          P,
          (H, z) => ({
            "data-testid": v(),
            id: o(),
            class: `block ${H ?? ""}`,
            dir: w() ? "rtl" : "ltr",
            "aria-label": _(),
            style: "",
            [e.CLASS]: {
              hidden: A() === "hidden",
              padded: d(),
              flex: g(),
              border_focus: f() === "focus",
              border_contrast: f() === "contrast",
              "hide-container": !E() && !L(),
              fullscreen: x(),
              animating: x() && e.get(q) !== null,
              "auto-margin": c() === null
            },
            [e.STYLE]: z
          }),
          [
            () => (e.deep_read_state(l()), e.untrack(() => l()?.join(" ") || "")),
            () => ({
              height: (e.deep_read_state(x()), e.deep_read_state(n()), e.untrack(() => x() ? void 0 : Q(n()))),
              "min-height": (e.deep_read_state(x()), e.deep_read_state(i()), e.untrack(() => x() ? void 0 : Q(i()))),
              "max-height": (e.deep_read_state(x()), e.deep_read_state(a()), e.untrack(() => x() ? void 0 : Q(a()))),
              "--start-top": (e.get(q), e.untrack(() => e.get(q) ? `${e.get(q).top}px` : "0px")),
              "--start-left": (e.get(q), e.untrack(() => e.get(q) ? `${e.get(q).left}px` : "0px")),
              "--start-width": (e.get(q), e.untrack(() => e.get(q) ? `${e.get(q).width}px` : "0px")),
              "--start-height": (e.get(q), e.untrack(() => e.get(q) ? `${e.get(q).height}px` : "0px")),
              width: (e.deep_read_state(x()), e.deep_read_state(s()), e.untrack(() => x() ? void 0 : typeof s() == "number" ? `calc(min(${s()}px, 100%))` : Q(s()))),
              "border-style": u(),
              overflow: C() ? T() : "hidden",
              "flex-grow": c(),
              "min-width": `calc(min(${p()}px, 100%))`,
              "border-width": "var(--block-border-width)"
            })
          ],
          void 0,
          void 0,
          "svelte-1stq1b1"
        );
        var M = ms(), S = e.first_child(M);
        e.slot(S, t, "default", {}, null);
        var k = e.sibling(S, 2);
        {
          var G = (H) => {
            var z = gs();
            e.event("mousedown", z, pe), e.append(H, z);
          };
          e.if(k, (H) => {
            h() && H(G);
          });
        }
        e.append(B, M);
      });
      var ge = e.sibling(De, 2);
      {
        var K = (P) => {
          var B = vs();
          let M;
          e.template_effect(() => M = e.set_style(B, "", M, {
            height: e.get(I) + "px",
            width: e.get(j) + "px"
          })), e.append(P, B);
        };
        e.if(ge, (P) => {
          x() && P(K);
        });
      }
      e.append(ie, te);
    };
    e.if(W, (ie) => {
      (A() === !0 || A() === "hidden") && ie(ue);
    });
  }
  e.append(r, V), e.pop();
}
function Tr() {
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
let st = Tr();
function ei(r) {
  st = r;
}
const ti = /[&<>"']/, xs = new RegExp(ti.source, "g"), ri = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ws = new RegExp(ri.source, "g"), ys = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, $r = (r) => ys[r];
function Pe(r, t) {
  if (t) {
    if (ti.test(r))
      return r.replace(xs, $r);
  } else if (ri.test(r))
    return r.replace(ws, $r);
  return r;
}
const Es = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Ds(r) {
  return r.replace(Es, (t, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const ks = /(^|[^\[])\^/g;
function we(r, t) {
  let n = typeof r == "string" ? r : r.source;
  t = t || "";
  const i = {
    replace: (a, s) => {
      let o = typeof s == "string" ? s : s.source;
      return o = o.replace(ks, "$1"), n = n.replace(a, o), i;
    },
    getRegex: () => new RegExp(n, t)
  };
  return i;
}
function en(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const wt = { exec: () => null };
function tn(r, t) {
  const n = r.replace(/\|/g, (s, o, l) => {
    let u = !1, f = o;
    for (; --f >= 0 && l[f] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), i = n.split(/ \|/);
  let a = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), t)
    if (i.length > t)
      i.splice(t);
    else
      for (; i.length < t; )
        i.push("");
  for (; a < i.length; a++)
    i[a] = i[a].trim().replace(/\\\|/g, "|");
  return i;
}
function Rt(r, t, n) {
  const i = r.length;
  if (i === 0)
    return "";
  let a = 0;
  for (; a < i && r.charAt(i - a - 1) === t; )
    a++;
  return r.slice(0, i - a);
}
function Cs(r, t) {
  if (r.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let i = 0; i < r.length; i++)
    if (r[i] === "\\")
      i++;
    else if (r[i] === t[0])
      n++;
    else if (r[i] === t[1] && (n--, n < 0))
      return i;
  return -1;
}
function rn(r, t, n, i) {
  const a = t.href, s = t.title ? Pe(t.title) : null, o = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const l = {
      type: "link",
      raw: n,
      href: a,
      title: s,
      text: o,
      tokens: i.inlineTokens(o)
    };
    return i.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: n,
    href: a,
    title: s,
    text: Pe(o)
  };
}
function As(r, t) {
  const n = r.match(/^(\s+)(?:```)/);
  if (n === null)
    return t;
  const i = n[1];
  return t.split(`
`).map((a) => {
    const s = a.match(/^\s+/);
    if (s === null)
      return a;
    const [o] = s;
    return o.length >= i.length ? a.slice(i.length) : a;
  }).join(`
`);
}
class qt {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || st;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const i = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : Rt(i, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const i = n[0], a = As(i, n[3] || "");
      return {
        type: "code",
        raw: i,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: a
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let i = n[2].trim();
      if (/#$/.test(i)) {
        const a = Rt(i, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (i = a.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let i = n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      i = Rt(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(i);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: n[0],
        tokens: s,
        text: i
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let i = n[1].trim();
      const a = i.length > 1, s = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : "[*+-]");
      const o = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = "", u = "", f = !1;
      for (; t; ) {
        let d = !1;
        if (!(n = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        l = n[0], t = t.substring(l.length);
        let b = n[2].split(`
`, 1)[0].replace(/^\t+/, (T) => " ".repeat(3 * T.length)), v = t.split(`
`, 1)[0], E = 0;
        this.options.pedantic ? (E = 2, u = b.trimStart()) : (E = n[2].search(/[^ ]/), E = E > 4 ? 1 : E, u = b.slice(E), E += n[1].length);
        let L = !1;
        if (!b && /^ *$/.test(v) && (l += v + `
`, t = t.substring(v.length + 1), d = !0), !d) {
          const T = new RegExp(`^ {0,${Math.min(3, E - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), c = new RegExp(`^ {0,${Math.min(3, E - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), p = new RegExp(`^ {0,${Math.min(3, E - 1)}}(?:\`\`\`|~~~)`), g = new RegExp(`^ {0,${Math.min(3, E - 1)}}#`);
          for (; t; ) {
            const h = t.split(`
`, 1)[0];
            if (v = h, this.options.pedantic && (v = v.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), p.test(v) || g.test(v) || T.test(v) || c.test(t))
              break;
            if (v.search(/[^ ]/) >= E || !v.trim())
              u += `
` + v.slice(E);
            else {
              if (L || b.search(/[^ ]/) >= 4 || p.test(b) || g.test(b) || c.test(b))
                break;
              u += `
` + v;
            }
            !L && !v.trim() && (L = !0), l += h + `
`, t = t.substring(h.length + 1), b = v.slice(E);
          }
        }
        s.loose || (f ? s.loose = !0 : /\n *\n *$/.test(l) && (f = !0));
        let A = null, C;
        this.options.gfm && (A = /^\[[ xX]\] /.exec(u), A && (C = A[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), s.items.push({
          type: "list_item",
          raw: l,
          task: !!A,
          checked: C,
          loose: !1,
          text: u,
          tokens: []
        }), s.raw += l;
      }
      s.items[s.items.length - 1].raw = l.trimEnd(), s.items[s.items.length - 1].text = u.trimEnd(), s.raw = s.raw.trimEnd();
      for (let d = 0; d < s.items.length; d++)
        if (this.lexer.state.top = !1, s.items[d].tokens = this.lexer.blockTokens(s.items[d].text, []), !s.loose) {
          const b = s.items[d].tokens.filter((E) => E.type === "space"), v = b.length > 0 && b.some((E) => /\n.*\n/.test(E.raw));
          s.loose = v;
        }
      if (s.loose)
        for (let d = 0; d < s.items.length; d++)
          s.items[d].loose = !0;
      return s;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const i = n[1].toLowerCase().replace(/\s+/g, " "), a = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: i,
        raw: n[0],
        href: a,
        title: s
      };
    }
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (!n || !/[:|]/.test(n[2]))
      return;
    const i = tn(n[1]), a = n[2].replace(/^\||\| *$/g, "").split("|"), s = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [], o = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === a.length) {
      for (const l of a)
        /^ *-+: *$/.test(l) ? o.align.push("right") : /^ *:-+: *$/.test(l) ? o.align.push("center") : /^ *:-+ *$/.test(l) ? o.align.push("left") : o.align.push(null);
      for (const l of i)
        o.header.push({
          text: l,
          tokens: this.lexer.inline(l)
        });
      for (const l of s)
        o.rows.push(tn(l, o.header.length).map((u) => ({
          text: u,
          tokens: this.lexer.inline(u)
        })));
      return o;
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const i = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: Pe(n[1])
      };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
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
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const i = n[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const o = Rt(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Cs(n[2], "()");
        if (o > -1) {
          const u = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + o;
          n[2] = n[2].substring(0, o), n[0] = n[0].substring(0, u).trim(), n[3] = "";
        }
      }
      let a = n[2], s = "";
      if (this.options.pedantic) {
        const o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        o && (a = o[1], s = o[3]);
      } else
        s = n[3] ? n[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(i) ? a = a.slice(1) : a = a.slice(1, -1)), rn(n, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(t, n) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      const a = (i[2] || i[1]).replace(/\s+/g, " "), s = n[a.toLowerCase()];
      if (!s) {
        const o = i[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return rn(i, s, i[0], this.lexer);
    }
  }
  emStrong(t, n, i = "") {
    let a = this.rules.inline.emStrongLDelim.exec(t);
    if (!a || a[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const o = [...a[0]].length - 1;
      let l, u, f = o, d = 0;
      const b = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (b.lastIndex = 0, n = n.slice(-1 * t.length + o); (a = b.exec(n)) != null; ) {
        if (l = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !l)
          continue;
        if (u = [...l].length, a[3] || a[4]) {
          f += u;
          continue;
        } else if ((a[5] || a[6]) && o % 3 && !((o + u) % 3)) {
          d += u;
          continue;
        }
        if (f -= u, f > 0)
          continue;
        u = Math.min(u, u + f + d);
        const v = [...a[0]][0].length, E = t.slice(0, o + a.index + v + u);
        if (Math.min(o, u) % 2) {
          const A = E.slice(1, -1);
          return {
            type: "em",
            raw: E,
            text: A,
            tokens: this.lexer.inlineTokens(A)
          };
        }
        const L = E.slice(2, -2);
        return {
          type: "strong",
          raw: E,
          text: L,
          tokens: this.lexer.inlineTokens(L)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let i = n[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(i), s = /^ /.test(i) && / $/.test(i);
      return a && s && (i = i.substring(1, i.length - 1)), i = Pe(i, !0), {
        type: "codespan",
        raw: n[0],
        text: i
      };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let i, a;
      return n[2] === "@" ? (i = Pe(n[1]), a = "mailto:" + i) : (i = Pe(n[1]), a = i), {
        type: "link",
        raw: n[0],
        text: i,
        href: a,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(t) {
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let i, a;
      if (n[2] === "@")
        i = Pe(n[0]), a = "mailto:" + i;
      else {
        let s;
        do
          s = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])?.[0] ?? "";
        while (s !== n[0]);
        i = Pe(n[0]), n[1] === "www." ? a = "http://" + n[0] : a = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: i,
        href: a,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      let i;
      return this.lexer.state.inRawBlock ? i = n[0] : i = Pe(n[0]), {
        type: "text",
        raw: n[0],
        text: i
      };
    }
  }
}
const Fs = /^(?: *(?:\n|$))+/, Ts = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Ss = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ct = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Bs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ni = /(?:[*+-]|\d{1,9}[.)])/, ii = we(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ni).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Sr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ls = /^[^\n]+/, Br = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Rs = we(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Br).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Is = we(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ni).getRegex(), Qt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Lr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ms = we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Lr).replace("tag", Qt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ai = we(Sr).replace("hr", Ct).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qt).getRegex(), Hs = we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ai).getRegex(), Rr = {
  blockquote: Hs,
  code: Ts,
  def: Rs,
  fences: Ss,
  heading: Bs,
  hr: Ct,
  html: Ms,
  lheading: ii,
  list: Is,
  newline: Fs,
  paragraph: ai,
  table: wt,
  text: Ls
}, nn = we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ct).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qt).getRegex(), Os = {
  ...Rr,
  table: nn,
  paragraph: we(Sr).replace("hr", Ct).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", nn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qt).getRegex()
}, Ns = {
  ...Rr,
  html: we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Lr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: wt,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: we(Sr).replace("hr", Ct).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ii).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, si = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ps = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, oi = /^( {2,}|\\)\n(?!\s*$)/, zs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, At = "\\p{P}\\p{S}", Us = we(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, At).getRegex(), Gs = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, qs = we(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, At).getRegex(), js = we("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, At).getRegex(), Vs = we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, At).getRegex(), Zs = we(/\\([punct])/, "gu").replace(/punct/g, At).getRegex(), Ws = we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xs = we(Lr).replace("(?:-->|$)", "-->").getRegex(), Ys = we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), jt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ks = we(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", jt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), li = we(/^!?\[(label)\]\[(ref)\]/).replace("label", jt).replace("ref", Br).getRegex(), ui = we(/^!?\[(ref)\](?:\[\])?/).replace("ref", Br).getRegex(), Qs = we("reflink|nolink(?!\\()", "g").replace("reflink", li).replace("nolink", ui).getRegex(), Ir = {
  _backpedal: wt,
  // only used for GFM url
  anyPunctuation: Zs,
  autolink: Ws,
  blockSkip: Gs,
  br: oi,
  code: Ps,
  del: wt,
  emStrongLDelim: qs,
  emStrongRDelimAst: js,
  emStrongRDelimUnd: Vs,
  escape: si,
  link: Ks,
  nolink: ui,
  punctuation: Us,
  reflink: li,
  reflinkSearch: Qs,
  tag: Ys,
  text: zs,
  url: wt
}, Js = {
  ...Ir,
  link: we(/^!?\[(label)\]\((.*?)\)/).replace("label", jt).getRegex(),
  reflink: we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", jt).getRegex()
}, yr = {
  ...Ir,
  escape: we(si).replace("])", "~|])").getRegex(),
  url: we(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, $s = {
  ...yr,
  br: we(oi).replace("{2,}", "*").getRegex(),
  text: we(yr.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, It = {
  normal: Rr,
  gfm: Os,
  pedantic: Ns
}, xt = {
  normal: Ir,
  gfm: yr,
  breaks: $s,
  pedantic: Js
};
class Ve {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || st, this.options.tokenizer = this.options.tokenizer || new qt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: It.normal,
      inline: xt.normal
    };
    this.options.pedantic ? (n.block = It.pedantic, n.inline = xt.pedantic) : this.options.gfm && (n.block = It.gfm, this.options.breaks ? n.inline = xt.breaks : n.inline = xt.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: It,
      inline: xt
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new Ve(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new Ve(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const i = this.inlineQueue[n];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (l, u, f) => u + "    ".repeat(f.length));
    let i, a, s, o;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (i = l.call({ lexer: this }, t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(t)) {
          t = t.substring(i.raw.length), i.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(i);
          continue;
        }
        if (i = this.tokenizer.code(t)) {
          t = t.substring(i.raw.length), a = n[n.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + i.raw, a.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.list(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.html(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.def(t)) {
          t = t.substring(i.raw.length), a = n[n.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + i.raw, a.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startBlock) {
          let l = 1 / 0;
          const u = t.slice(1);
          let f;
          this.options.extensions.startBlock.forEach((d) => {
            f = d.call({ lexer: this }, u), typeof f == "number" && f >= 0 && (l = Math.min(l, f));
          }), l < 1 / 0 && l >= 0 && (s = t.substring(0, l + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(s))) {
          a = n[n.length - 1], o && a.type === "paragraph" ? (a.raw += `
` + i.raw, a.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(i), o = s.length !== t.length, t = t.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(t)) {
          t = t.substring(i.raw.length), a = n[n.length - 1], a && a.type === "text" ? (a.raw += `
` + i.raw, a.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(i);
          continue;
        }
        if (t) {
          const l = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else
            throw new Error(l);
        }
      }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    let i, a, s, o = t, l, u, f;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; )
          d.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; )
      o = o.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; )
      o = o.slice(0, l.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (u || (f = ""), u = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (i = d.call({ lexer: this }, t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(t)) {
          t = t.substring(i.raw.length), a = n[n.length - 1], a && i.type === "text" && a.type === "text" ? (a.raw += i.raw, a.text += i.text) : n.push(i);
          continue;
        }
        if (i = this.tokenizer.link(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(i.raw.length), a = n[n.length - 1], a && i.type === "text" && a.type === "text" ? (a.raw += i.raw, a.text += i.text) : n.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(t, o, f)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.br(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.del(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(t)) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(t))) {
          t = t.substring(i.raw.length), n.push(i);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const b = t.slice(1);
          let v;
          this.options.extensions.startInline.forEach((E) => {
            v = E.call({ lexer: this }, b), typeof v == "number" && v >= 0 && (d = Math.min(d, v));
          }), d < 1 / 0 && d >= 0 && (s = t.substring(0, d + 1));
        }
        if (i = this.tokenizer.inlineText(s)) {
          t = t.substring(i.raw.length), i.raw.slice(-1) !== "_" && (f = i.raw.slice(-1)), u = !0, a = n[n.length - 1], a && a.type === "text" ? (a.raw += i.raw, a.text += i.text) : n.push(i);
          continue;
        }
        if (t) {
          const d = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break;
          } else
            throw new Error(d);
        }
      }
    return n;
  }
}
class Vt {
  options;
  constructor(t) {
    this.options = t || st;
  }
  code(t, n, i) {
    const a = (n || "").match(/^\S*/)?.[0];
    return t = t.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + Pe(a) + '">' + (i ? t : Pe(t, !0)) + `</code></pre>
` : "<pre><code>" + (i ? t : Pe(t, !0)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, n) {
    return t;
  }
  heading(t, n, i) {
    return `<h${n}>${t}</h${n}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, n, i) {
    const a = n ? "ol" : "ul", s = n && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + a + s + `>
` + t + "</" + a + `>
`;
  }
  listitem(t, n, i) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, n) {
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, n) {
    const i = n.header ? "th" : "td";
    return (n.align ? `<${i} align="${n.align}">` : `<${i}>`) + t + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return "<br>";
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, n, i) {
    const a = en(t);
    if (a === null)
      return i;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + n + '"'), s += ">" + i + "</a>", s;
  }
  image(t, n, i) {
    const a = en(t);
    if (a === null)
      return i;
    t = a;
    let s = `<img src="${t}" alt="${i}"`;
    return n && (s += ` title="${n}"`), s += ">", s;
  }
  text(t) {
    return t;
  }
}
class Mr {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, n, i) {
    return "" + i;
  }
  image(t, n, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class Ze {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || st, this.options.renderer = this.options.renderer || new Vt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Mr();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new Ze(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new Ze(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    let i = "";
    for (let a = 0; a < t.length; a++) {
      const s = t[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const o = s, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          i += l || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const o = s;
          i += this.renderer.heading(this.parseInline(o.tokens), o.depth, Ds(this.parseInline(o.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const o = s;
          i += this.renderer.code(o.text, o.lang, !!o.escaped);
          continue;
        }
        case "table": {
          const o = s;
          let l = "", u = "";
          for (let d = 0; d < o.header.length; d++)
            u += this.renderer.tablecell(this.parseInline(o.header[d].tokens), { header: !0, align: o.align[d] });
          l += this.renderer.tablerow(u);
          let f = "";
          for (let d = 0; d < o.rows.length; d++) {
            const b = o.rows[d];
            u = "";
            for (let v = 0; v < b.length; v++)
              u += this.renderer.tablecell(this.parseInline(b[v].tokens), { header: !1, align: o.align[v] });
            f += this.renderer.tablerow(u);
          }
          i += this.renderer.table(l, f);
          continue;
        }
        case "blockquote": {
          const o = s, l = this.parse(o.tokens);
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          const o = s, l = o.ordered, u = o.start, f = o.loose;
          let d = "";
          for (let b = 0; b < o.items.length; b++) {
            const v = o.items[b], E = v.checked, L = v.task;
            let A = "";
            if (v.task) {
              const C = this.renderer.checkbox(!!E);
              f ? v.tokens.length > 0 && v.tokens[0].type === "paragraph" ? (v.tokens[0].text = C + " " + v.tokens[0].text, v.tokens[0].tokens && v.tokens[0].tokens.length > 0 && v.tokens[0].tokens[0].type === "text" && (v.tokens[0].tokens[0].text = C + " " + v.tokens[0].tokens[0].text)) : v.tokens.unshift({
                type: "text",
                text: C + " "
              }) : A += C + " ";
            }
            A += this.parse(v.tokens, f), d += this.renderer.listitem(A, L, !!E);
          }
          i += this.renderer.list(d, l, u);
          continue;
        }
        case "html": {
          const o = s;
          i += this.renderer.html(o.text, o.block);
          continue;
        }
        case "paragraph": {
          const o = s;
          i += this.renderer.paragraph(this.parseInline(o.tokens));
          continue;
        }
        case "text": {
          let o = s, l = o.tokens ? this.parseInline(o.tokens) : o.text;
          for (; a + 1 < t.length && t[a + 1].type === "text"; )
            o = t[++a], l += `
` + (o.tokens ? this.parseInline(o.tokens) : o.text);
          i += n ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n) {
    n = n || this.renderer;
    let i = "";
    for (let a = 0; a < t.length; a++) {
      const s = t[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += o || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          const o = s;
          i += n.text(o.text);
          break;
        }
        case "html": {
          const o = s;
          i += n.html(o.text);
          break;
        }
        case "link": {
          const o = s;
          i += n.link(o.href, o.title, this.parseInline(o.tokens, n));
          break;
        }
        case "image": {
          const o = s;
          i += n.image(o.href, o.title, o.text);
          break;
        }
        case "strong": {
          const o = s;
          i += n.strong(this.parseInline(o.tokens, n));
          break;
        }
        case "em": {
          const o = s;
          i += n.em(this.parseInline(o.tokens, n));
          break;
        }
        case "codespan": {
          const o = s;
          i += n.codespan(o.text);
          break;
        }
        case "br": {
          i += n.br();
          break;
        }
        case "del": {
          const o = s;
          i += n.del(this.parseInline(o.tokens, n));
          break;
        }
        case "text": {
          const o = s;
          i += n.text(o.text);
          break;
        }
        default: {
          const o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
}
class zt {
  options;
  constructor(t) {
    this.options = t || st;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
}
class eo {
  defaults = Tr();
  options = this.setOptions;
  parse = this.#e(Ve.lex, Ze.parse);
  parseInline = this.#e(Ve.lexInline, Ze.parseInline);
  Parser = Ze;
  Renderer = Vt;
  TextRenderer = Mr;
  Lexer = Ve;
  Tokenizer = qt;
  Hooks = zt;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    let i = [];
    for (const a of t)
      switch (i = i.concat(n.call(this, a)), a.type) {
        case "table": {
          const s = a;
          for (const o of s.header)
            i = i.concat(this.walkTokens(o.tokens, n));
          for (const o of s.rows)
            for (const l of o)
              i = i.concat(this.walkTokens(l.tokens, n));
          break;
        }
        case "list": {
          const s = a;
          i = i.concat(this.walkTokens(s.items, n));
          break;
        }
        default: {
          const s = a;
          this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            const l = s[o].flat(1 / 0);
            i = i.concat(this.walkTokens(l, n));
          }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, n)));
        }
      }
    return i;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      const a = { ...i };
      if (a.async = this.defaults.async || a.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const o = n.renderers[s.name];
          o ? n.renderers[s.name] = function(...l) {
            let u = s.renderer.apply(this, l);
            return u === !1 && (u = o.apply(this, l)), u;
          } : n.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = n[s.level];
          o ? o.unshift(s.tokenizer) : n[s.level] = [s.tokenizer], s.start && (s.level === "block" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [s.start] : s.level === "inline" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (n.childTokens[s.name] = s.childTokens);
      }), a.extensions = n), i.renderer) {
        const s = this.defaults.renderer || new Vt(this.defaults);
        for (const o in i.renderer) {
          if (!(o in s))
            throw new Error(`renderer '${o}' does not exist`);
          if (o === "options")
            continue;
          const l = o, u = i.renderer[l], f = s[l];
          s[l] = (...d) => {
            let b = u.apply(s, d);
            return b === !1 && (b = f.apply(s, d)), b || "";
          };
        }
        a.renderer = s;
      }
      if (i.tokenizer) {
        const s = this.defaults.tokenizer || new qt(this.defaults);
        for (const o in i.tokenizer) {
          if (!(o in s))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, u = i.tokenizer[l], f = s[l];
          s[l] = (...d) => {
            let b = u.apply(s, d);
            return b === !1 && (b = f.apply(s, d)), b;
          };
        }
        a.tokenizer = s;
      }
      if (i.hooks) {
        const s = this.defaults.hooks || new zt();
        for (const o in i.hooks) {
          if (!(o in s))
            throw new Error(`hook '${o}' does not exist`);
          if (o === "options")
            continue;
          const l = o, u = i.hooks[l], f = s[l];
          zt.passThroughHooks.has(o) ? s[l] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(u.call(s, d)).then((v) => f.call(s, v));
            const b = u.call(s, d);
            return f.call(s, b);
          } : s[l] = (...d) => {
            let b = u.apply(s, d);
            return b === !1 && (b = f.apply(s, d)), b;
          };
        }
        a.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, o = i.walkTokens;
        a.walkTokens = function(l) {
          let u = [];
          return u.push(o.call(this, l)), s && (u = u.concat(s.call(this, l))), u;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return Ve.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return Ze.parse(t, n ?? this.defaults);
  }
  #e(t, n) {
    return (i, a) => {
      const s = { ...a }, o = { ...this.defaults, ...s };
      this.defaults.async === !0 && s.async === !1 && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = !0);
      const l = this.#t(!!o.silent, !!o.async);
      if (typeof i > "u" || i === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof i != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
      if (o.hooks && (o.hooks.options = o), o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(i) : i).then((u) => t(u, o)).then((u) => o.hooks ? o.hooks.processAllTokens(u) : u).then((u) => o.walkTokens ? Promise.all(this.walkTokens(u, o.walkTokens)).then(() => u) : u).then((u) => n(u, o)).then((u) => o.hooks ? o.hooks.postprocess(u) : u).catch(l);
      try {
        o.hooks && (i = o.hooks.preprocess(i));
        let u = t(i, o);
        o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
        let f = n(u, o);
        return o.hooks && (f = o.hooks.postprocess(f)), f;
      } catch (u) {
        return l(u);
      }
    };
  }
  #t(t, n) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const a = "<p>An error occurred:</p><pre>" + Pe(i.message + "", !0) + "</pre>";
        return n ? Promise.resolve(a) : a;
      }
      if (n)
        return Promise.reject(i);
      throw i;
    };
  }
}
const it = new eo();
function xe(r, t) {
  return it.parse(r, t);
}
xe.options = xe.setOptions = function(r) {
  return it.setOptions(r), xe.defaults = it.defaults, ei(xe.defaults), xe;
};
xe.getDefaults = Tr;
xe.defaults = st;
xe.use = function(...r) {
  return it.use(...r), xe.defaults = it.defaults, ei(xe.defaults), xe;
};
xe.walkTokens = function(r, t) {
  return it.walkTokens(r, t);
};
xe.parseInline = it.parseInline;
xe.Parser = Ze;
xe.parser = Ze.parse;
xe.Renderer = Vt;
xe.TextRenderer = Mr;
xe.Lexer = Ve;
xe.lexer = Ve.lex;
xe.Tokenizer = qt;
xe.Hooks = zt;
xe.parse = xe;
xe.options;
xe.setOptions;
xe.use;
xe.walkTokens;
xe.parseInline;
Ze.parse;
Ve.lex;
const to = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, ro = Object.hasOwnProperty;
class ci {
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
  slug(t, n) {
    const i = this;
    let a = no(t, n === !0);
    const s = a;
    for (; ro.call(i.occurrences, a); )
      i.occurrences[s]++, a = s + "-" + i.occurrences[s];
    return i.occurrences[a] = 0, a;
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
function no(r, t) {
  return typeof r != "string" ? "" : (t || (r = r.toLowerCase()), r.replace(to, "").replace(/ /g, "-"));
}
new ci();
var an = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, or = { exports: {} }, sn;
function io() {
  return sn || (sn = 1, (function(r) {
    var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    var n = (function(i) {
      var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, o = {}, l = {
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
        manual: i.Prism && i.Prism.manual,
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
        disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
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
          encode: function c(p) {
            return p instanceof u ? new u(p.type, c(p.content), p.alias) : Array.isArray(p) ? p.map(c) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(c) {
            return Object.prototype.toString.call(c).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(c) {
            return c.__id || Object.defineProperty(c, "__id", { value: ++s }), c.__id;
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
          clone: function c(p, g) {
            g = g || {};
            var h, w;
            switch (l.util.type(p)) {
              case "Object":
                if (w = l.util.objId(p), g[w])
                  return g[w];
                h = /** @type {Record<string, any>} */
                {}, g[w] = h;
                for (var x in p)
                  p.hasOwnProperty(x) && (h[x] = c(p[x], g));
                return (
                  /** @type {any} */
                  h
                );
              case "Array":
                return w = l.util.objId(p), g[w] ? g[w] : (h = [], g[w] = h, /** @type {Array} */
                /** @type {any} */
                p.forEach(function(_, m) {
                  h[m] = c(_, g);
                }), /** @type {any} */
                h);
              default:
                return p;
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
          getLanguage: function(c) {
            for (; c; ) {
              var p = a.exec(c.className);
              if (p)
                return p[1].toLowerCase();
              c = c.parentElement;
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
          setLanguage: function(c, p) {
            c.className = c.className.replace(RegExp(a, "gi"), ""), c.classList.add("language-" + p);
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
            } catch (h) {
              var c = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack) || [])[1];
              if (c) {
                var p = document.getElementsByTagName("script");
                for (var g in p)
                  if (p[g].src == c)
                    return p[g];
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
          isActive: function(c, p, g) {
            for (var h = "no-" + p; c; ) {
              var w = c.classList;
              if (w.contains(p))
                return !0;
              if (w.contains(h))
                return !1;
              c = c.parentElement;
            }
            return !!g;
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
          plain: o,
          plaintext: o,
          text: o,
          txt: o,
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
          extend: function(c, p) {
            var g = l.util.clone(l.languages[c]);
            for (var h in p)
              g[h] = p[h];
            return g;
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
          insertBefore: function(c, p, g, h) {
            h = h || /** @type {any} */
            l.languages;
            var w = h[c], x = {};
            for (var _ in w)
              if (w.hasOwnProperty(_)) {
                if (_ == p)
                  for (var m in g)
                    g.hasOwnProperty(m) && (x[m] = g[m]);
                g.hasOwnProperty(_) || (x[_] = w[_]);
              }
            var F = h[c];
            return h[c] = x, l.languages.DFS(l.languages, function(D, I) {
              I === F && D != c && (this[D] = x);
            }), x;
          },
          // Traverse a language definition with Depth First Search
          DFS: function c(p, g, h, w) {
            w = w || {};
            var x = l.util.objId;
            for (var _ in p)
              if (p.hasOwnProperty(_)) {
                g.call(p, _, p[_], h || _);
                var m = p[_], F = l.util.type(m);
                F === "Object" && !w[x(m)] ? (w[x(m)] = !0, c(m, g, null, w)) : F === "Array" && !w[x(m)] && (w[x(m)] = !0, c(m, g, _, w));
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
        highlightAll: function(c, p) {
          l.highlightAllUnder(document, c, p);
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
        highlightAllUnder: function(c, p, g) {
          var h = {
            callback: g,
            container: c,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          l.hooks.run("before-highlightall", h), h.elements = Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)), l.hooks.run("before-all-elements-highlight", h);
          for (var w = 0, x; x = h.elements[w++]; )
            l.highlightElement(x, p === !0, h.callback);
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
        highlightElement: function(c, p, g) {
          var h = l.util.getLanguage(c), w = l.languages[h];
          l.util.setLanguage(c, h);
          var x = c.parentElement;
          x && x.nodeName.toLowerCase() === "pre" && l.util.setLanguage(x, h);
          var _ = c.textContent, m = {
            element: c,
            language: h,
            grammar: w,
            code: _
          };
          function F(I) {
            m.highlightedCode = I, l.hooks.run("before-insert", m), m.element.innerHTML = m.highlightedCode, l.hooks.run("after-highlight", m), l.hooks.run("complete", m), g && g.call(m.element);
          }
          if (l.hooks.run("before-sanity-check", m), x = m.element.parentElement, x && x.nodeName.toLowerCase() === "pre" && !x.hasAttribute("tabindex") && x.setAttribute("tabindex", "0"), !m.code) {
            l.hooks.run("complete", m), g && g.call(m.element);
            return;
          }
          if (l.hooks.run("before-highlight", m), !m.grammar) {
            F(l.util.encode(m.code));
            return;
          }
          if (p && i.Worker) {
            var D = new Worker(l.filename);
            D.onmessage = function(I) {
              F(I.data);
            }, D.postMessage(JSON.stringify({
              language: m.language,
              code: m.code,
              immediateClose: !0
            }));
          } else
            F(l.highlight(m.code, m.grammar, m.language));
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
        highlight: function(c, p, g) {
          var h = {
            code: c,
            grammar: p,
            language: g
          };
          if (l.hooks.run("before-tokenize", h), !h.grammar)
            throw new Error('The language "' + h.language + '" has no grammar.');
          return h.tokens = l.tokenize(h.code, h.grammar), l.hooks.run("after-tokenize", h), u.stringify(l.util.encode(h.tokens), h.language);
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
        tokenize: function(c, p) {
          var g = p.rest;
          if (g) {
            for (var h in g)
              p[h] = g[h];
            delete p.rest;
          }
          var w = new b();
          return v(w, w.head, c), d(c, w, p, w.head, 0), L(w);
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
          add: function(c, p) {
            var g = l.hooks.all;
            g[c] = g[c] || [], g[c].push(p);
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
          run: function(c, p) {
            var g = l.hooks.all[c];
            if (!(!g || !g.length))
              for (var h = 0, w; w = g[h++]; )
                w(p);
          }
        },
        Token: u
      };
      i.Prism = l;
      function u(c, p, g, h) {
        this.type = c, this.content = p, this.alias = g, this.length = (h || "").length | 0;
      }
      u.stringify = function c(p, g) {
        if (typeof p == "string")
          return p;
        if (Array.isArray(p)) {
          var h = "";
          return p.forEach(function(F) {
            h += c(F, g);
          }), h;
        }
        var w = {
          type: p.type,
          content: c(p.content, g),
          tag: "span",
          classes: ["token", p.type],
          attributes: {},
          language: g
        }, x = p.alias;
        x && (Array.isArray(x) ? Array.prototype.push.apply(w.classes, x) : w.classes.push(x)), l.hooks.run("wrap", w);
        var _ = "";
        for (var m in w.attributes)
          _ += " " + m + '="' + (w.attributes[m] || "").replace(/"/g, "&quot;") + '"';
        return "<" + w.tag + ' class="' + w.classes.join(" ") + '"' + _ + ">" + w.content + "</" + w.tag + ">";
      };
      function f(c, p, g, h) {
        c.lastIndex = p;
        var w = c.exec(g);
        if (w && h && w[1]) {
          var x = w[1].length;
          w.index += x, w[0] = w[0].slice(x);
        }
        return w;
      }
      function d(c, p, g, h, w, x) {
        for (var _ in g)
          if (!(!g.hasOwnProperty(_) || !g[_])) {
            var m = g[_];
            m = Array.isArray(m) ? m : [m];
            for (var F = 0; F < m.length; ++F) {
              if (x && x.cause == _ + "," + F)
                return;
              var D = m[F], I = D.inside, j = !!D.lookbehind, q = !!D.greedy, fe = D.alias;
              if (q && !D.pattern.global) {
                var Q = D.pattern.toString().match(/[imsuy]*$/)[0];
                D.pattern = RegExp(D.pattern.source, Q + "g");
              }
              for (var pe = D.pattern || D, V = h.next, W = w; V !== p.tail && !(x && W >= x.reach); W += V.value.length, V = V.next) {
                var ue = V.value;
                if (p.length > c.length)
                  return;
                if (!(ue instanceof u)) {
                  var ie = 1, te;
                  if (q) {
                    if (te = f(pe, W, c, j), !te || te.index >= c.length)
                      break;
                    var P = te.index, De = te.index + te[0].length, ge = W;
                    for (ge += V.value.length; P >= ge; )
                      V = V.next, ge += V.value.length;
                    if (ge -= V.value.length, W = ge, V.value instanceof u)
                      continue;
                    for (var K = V; K !== p.tail && (ge < De || typeof K.value == "string"); K = K.next)
                      ie++, ge += K.value.length;
                    ie--, ue = c.slice(W, ge), te.index -= W;
                  } else if (te = f(pe, 0, ue, j), !te)
                    continue;
                  var P = te.index, B = te[0], M = ue.slice(0, P), S = ue.slice(P + B.length), k = W + ue.length;
                  x && k > x.reach && (x.reach = k);
                  var G = V.prev;
                  M && (G = v(p, G, M), W += M.length), E(p, G, ie);
                  var H = new u(_, I ? l.tokenize(B, I) : B, fe, B);
                  if (V = v(p, G, H), S && v(p, V, S), ie > 1) {
                    var z = {
                      cause: _ + "," + F,
                      reach: k
                    };
                    d(c, p, g, V.prev, W, z), x && z.reach > x.reach && (x.reach = z.reach);
                  }
                }
              }
            }
          }
      }
      function b() {
        var c = { value: null, prev: null, next: null }, p = { value: null, prev: c, next: null };
        c.next = p, this.head = c, this.tail = p, this.length = 0;
      }
      function v(c, p, g) {
        var h = p.next, w = { value: g, prev: p, next: h };
        return p.next = w, h.prev = w, c.length++, w;
      }
      function E(c, p, g) {
        for (var h = p.next, w = 0; w < g && h !== c.tail; w++)
          h = h.next;
        p.next = h, h.prev = p, c.length -= w;
      }
      function L(c) {
        for (var p = [], g = c.head.next; g !== c.tail; )
          p.push(g.value), g = g.next;
        return p;
      }
      if (!i.document)
        return i.addEventListener && (l.disableWorkerMessageHandler || i.addEventListener("message", function(c) {
          var p = JSON.parse(c.data), g = p.language, h = p.code, w = p.immediateClose;
          i.postMessage(l.highlight(h, l.languages[g], g)), w && i.close();
        }, !1)), l;
      var A = l.util.currentScript();
      A && (l.filename = A.src, A.hasAttribute("data-manual") && (l.manual = !0));
      function C() {
        l.manual || l.highlightAll();
      }
      if (!l.manual) {
        var T = document.readyState;
        T === "loading" || T === "interactive" && A && A.defer ? document.addEventListener("DOMContentLoaded", C) : window.requestAnimationFrame ? window.requestAnimationFrame(C) : window.setTimeout(C, 16);
      }
      return l;
    })(t);
    r.exports && (r.exports = n), typeof an < "u" && (an.Prism = n), n.languages.markup = {
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
    }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(i) {
      i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
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
      value: function(a, s) {
        var o = {};
        o["language-" + s] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: n.languages[s]
        }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var l = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: o
          }
        };
        l["language-" + s] = {
          pattern: /[\s\S]+/,
          inside: n.languages[s]
        };
        var u = {};
        u[a] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return a;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: l
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
      value: function(i, a) {
        n.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
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
                  alias: [a, "language-" + a],
                  inside: n.languages[a]
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
    }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(i) {
      var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      i.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
          pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + a.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: a,
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
      }, i.languages.css.atrule.inside.rest = i.languages.css;
      var s = i.languages.markup;
      s && (s.tag.addInlined("style", "css"), s.tag.addAttribute("style", "css"));
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
      var i = "Loading…", a = function(A, C) {
        return "✖ Error " + A + " while fetching file: " + C;
      }, s = "✖ Error: File does not exist or is empty", o = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, l = "data-src-status", u = "loading", f = "loaded", d = "failed", b = "pre[data-src]:not([" + l + '="' + f + '"]):not([' + l + '="' + u + '"])';
      function v(A, C, T) {
        var c = new XMLHttpRequest();
        c.open("GET", A, !0), c.onreadystatechange = function() {
          c.readyState == 4 && (c.status < 400 && c.responseText ? C(c.responseText) : c.status >= 400 ? T(a(c.status, c.statusText)) : T(s));
        }, c.send(null);
      }
      function E(A) {
        var C = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A || "");
        if (C) {
          var T = Number(C[1]), c = C[2], p = C[3];
          return c ? p ? [T, Number(p)] : [T, void 0] : [T, T];
        }
      }
      n.hooks.add("before-highlightall", function(A) {
        A.selector += ", " + b;
      }), n.hooks.add("before-sanity-check", function(A) {
        var C = (
          /** @type {HTMLPreElement} */
          A.element
        );
        if (C.matches(b)) {
          A.code = "", C.setAttribute(l, u);
          var T = C.appendChild(document.createElement("CODE"));
          T.textContent = i;
          var c = C.getAttribute("data-src"), p = A.language;
          if (p === "none") {
            var g = (/\.(\w+)$/.exec(c) || [, "none"])[1];
            p = o[g] || g;
          }
          n.util.setLanguage(T, p), n.util.setLanguage(C, p);
          var h = n.plugins.autoloader;
          h && h.loadLanguages(p), v(
            c,
            function(w) {
              C.setAttribute(l, f);
              var x = E(C.getAttribute("data-range"));
              if (x) {
                var _ = w.split(/\r\n?|\n/g), m = x[0], F = x[1] == null ? _.length : x[1];
                m < 0 && (m += _.length), m = Math.max(0, Math.min(m - 1, _.length)), F < 0 && (F += _.length), F = Math.max(0, Math.min(F, _.length)), w = _.slice(m, F).join(`
`), C.hasAttribute("data-start") || C.setAttribute("data-start", String(m + 1));
              }
              T.textContent = w, n.highlightElement(T);
            },
            function(w) {
              C.setAttribute(l, d), T.textContent = w;
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
        highlight: function(C) {
          for (var T = (C || document).querySelectorAll(b), c = 0, p; p = T[c++]; )
            n.highlightElement(p);
        }
      };
      var L = !1;
      n.fileHighlight = function() {
        L || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), L = !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(or)), or.exports;
}
io();
var on = {}, ln;
function ao() {
  return ln || (ln = 1, Prism.languages.python = {
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
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), on;
}
ao();
(function(r) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {
    "equation-command": {
      pattern: t,
      alias: "regex"
    }
  };
  r.languages.latex = {
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
      pattern: t,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, r.languages.tex = r.languages.latex, r.languages.context = r.languages.latex;
})(Prism);
(function(r) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, i = {
    bash: n,
    environment: {
      pattern: RegExp("\\$" + t),
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
            pattern: RegExp("(\\{)" + t),
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
  r.languages.bash = {
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
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
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
        inside: i
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
        inside: i
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
          entity: i.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: i.variable,
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
  }, n.inside = r.languages.bash;
  for (var a = [
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
  ], s = i.variable[1].inside, o = 0; o < a.length; o++)
    s[a[o]] = r.languages.bash[a[o]];
  r.languages.sh = r.languages.bash, r.languages.shell = r.languages.bash;
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
var un = {}, cn;
function so() {
  return cn || (cn = 1, (function(r) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return t.source;
    });
    r.languages.cpp = r.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return t.source;
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
      keyword: t,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), r.languages.insertBefore("cpp", "string", {
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
    }), r.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: r.languages.cpp
          }
        }
      }
    }), r.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), r.languages.insertBefore("cpp", "class-name", {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: r.languages.extend("cpp", {})
      }
    }), r.languages.insertBefore("inside", "double-colon", {
      // All untokenized words that are not namespaces should be class names
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, r.languages.cpp["base-clause"]);
  })(Prism)), un;
}
so();
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
var hn = {}, dn;
function oo() {
  return dn || (dn = 1, (function(r) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, i = {
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
    r.languages.java = r.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        i,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: i.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: i.inside
        }
      ],
      keyword: t,
      function: [
        r.languages.clike.function,
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
    }), r.languages.insertBefore("java", "string", {
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
    }), r.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": i,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: i.inside.namespace,
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
            namespace: i.inside.namespace,
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
            return t.source;
          })
        ),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  })(Prism)), hn;
}
oo();
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
var fn = {}, pn;
function lo() {
  return pn || (pn = 1, (function(r) {
    for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
      t = t.replace(/<self>/g, function() {
        return t;
      });
    t = t.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), r.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + t),
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
    }, r.languages.rust["closure-params"].inside.rest = r.languages.rust, r.languages.rust.attribute.inside.string = r.languages.rust.string;
  })(Prism)), fn;
}
lo();
var gn = {}, mn;
function uo() {
  return mn || (mn = 1, (function(r) {
    var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, n = [
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
    ], i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, a = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
    r.languages.php = {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      comment: t,
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
      number: i,
      operator: a,
      punctuation: s
    };
    var o = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: r.languages.php
    }, l = [
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
          interpolation: o
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
          interpolation: o
        }
      }
    ];
    r.languages.insertBefore("php", "variable", {
      string: l,
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: !0,
            // inside can appear subset of php
            inside: {
              comment: t,
              string: l,
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
              number: i,
              operator: a,
              punctuation: s
            }
          },
          delimiter: {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    }), r.hooks.add("before-tokenize", function(u) {
      if (/<\?/.test(u.code)) {
        var f = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
        r.languages["markup-templating"].buildPlaceholders(u, "php", f);
      }
    }), r.hooks.add("after-tokenize", function(u) {
      r.languages["markup-templating"].tokenizePlaceholders(u, "php");
    });
  })(Prism)), gn;
}
uo();
(function(r) {
  var t = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, i = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)", a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function o(l, u) {
    u = (u || "").replace(/m/g, "") + "m";
    var f = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return i;
    }).replace(/<<value>>/g, function() {
      return l;
    });
    return RegExp(f, u);
  }
  r.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return i;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return i;
      }).replace(/<<key>>/g, function() {
        return "(?:" + a + "|" + s + ")";
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
      pattern: o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: o(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: o(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: o(s),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: n,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, r.languages.yml = r.languages.yaml;
})(Prism);
(function(r) {
  function t(n, i) {
    return "___" + n.toUpperCase() + i + "___";
  }
  Object.defineProperties(r.languages["markup-templating"] = {}, {
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
      value: function(n, i, a, s) {
        if (n.language === i) {
          var o = n.tokenStack = [];
          n.code = n.code.replace(a, function(l) {
            if (typeof s == "function" && !s(l))
              return l;
            for (var u = o.length, f; n.code.indexOf(f = t(i, u)) !== -1; )
              ++u;
            return o[u] = l, f;
          }), n.grammar = r.languages.markup;
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
      value: function(n, i) {
        if (n.language !== i || !n.tokenStack)
          return;
        n.grammar = r.languages[i];
        var a = 0, s = Object.keys(n.tokenStack);
        function o(l) {
          for (var u = 0; u < l.length && !(a >= s.length); u++) {
            var f = l[u];
            if (typeof f == "string" || f.content && typeof f.content == "string") {
              var d = s[a], b = n.tokenStack[d], v = typeof f == "string" ? f : f.content, E = t(i, d), L = v.indexOf(E);
              if (L > -1) {
                ++a;
                var A = v.substring(0, L), C = new r.Token(i, r.tokenize(b, n.grammar), "language-" + i, b), T = v.substring(L + E.length), c = [];
                A && c.push.apply(c, o([A])), c.push(C), T && c.push.apply(c, o([T])), typeof f == "string" ? l.splice.apply(l, [u, 1].concat(c)) : f.content = c;
              }
            } else f.content && o(f.content);
          }
          return l;
        }
        o(n.tokens);
      }
    }
  });
})(Prism);
new ci();
const co = (r) => {
  const t = {};
  for (let n = 0, i = r.length; n < i; n++) {
    const a = r[n];
    for (const s in a)
      t[s] ? t[s] = t[s].concat(a[s]) : t[s] = a[s];
  }
  return t;
}, ho = [
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
], fo = [
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
], po = [
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
co([
  Object.fromEntries(ho.map((r) => [r, ["*"]])),
  Object.fromEntries(fo.map((r) => [r, ["svg:*"]])),
  Object.fromEntries(po.map((r) => [r, ["math:*"]]))
]);
e.from_html("<span><!></span>");
e.from_html('<div class="svelte-1i9kj8o"><!></div>');
e.from_html('<span data-testid="block-info"><!></span> <!>', 1);
var go = e.from_html('<label for="" data-testid="block-label"><span class="svelte-1fzogyz"><!></span> </label>');
function mo(r, t) {
  let n = e.prop(t, "label", 8, null), i = e.prop(t, "Icon", 8), a = e.prop(t, "show_label", 8, !0), s = e.prop(t, "disable", 8, !1), o = e.prop(t, "float", 8, !0), l = e.prop(t, "rtl", 8, !1);
  var u = go();
  let f;
  var d = e.child(u), b = e.child(d);
  i()(b, {}), e.reset(d);
  var v = e.sibling(d);
  e.reset(u), e.template_effect(() => {
    e.set_attribute(u, "dir", l() ? "rtl" : "ltr"), f = e.set_class(u, 1, "svelte-1fzogyz", null, f, {
      hide: !a(),
      "sr-only": !a(),
      float: o(),
      "hide-label": s()
    }), e.set_text(v, ` ${n() ?? ""}`), u.dir = u.dir;
  }), e.append(r, u);
}
e.from_html("<a><!></a>");
var vo = e.from_html('<span class="svelte-vvirtv"> </span>'), _o = e.from_html("<button><!> <div><!> <!></div></button>");
function Dt(r, t) {
  let n = e.prop(t, "label", 3, ""), i = e.prop(t, "show_label", 3, !1), a = e.prop(t, "pending", 3, !1), s = e.prop(t, "size", 3, "small"), o = e.prop(t, "padded", 3, !0), l = e.prop(t, "highlight", 3, !1), u = e.prop(t, "disabled", 3, !1), f = e.prop(t, "hasPopup", 3, !1), d = e.prop(t, "color", 3, "var(--block-label-text-color)"), b = e.prop(t, "transparent", 3, !1), v = e.prop(t, "background", 3, "var(--block-background-fill)"), E = e.prop(t, "border", 3, "transparent"), L = e.derived(() => l() ? "var(--color-accent)" : d());
  var A = _o();
  let C;
  A.__click = function(...m) {
    t.onclick?.apply(this, m);
  };
  let T;
  var c = e.child(A);
  {
    var p = (m) => {
      var F = vo(), D = e.child(F, !0);
      e.reset(F), e.template_effect(() => e.set_text(D, n())), e.append(m, F);
    };
    e.if(c, (m) => {
      i() && m(p);
    });
  }
  var g = e.sibling(c, 2);
  let h;
  var w = e.child(g);
  e.component(w, () => t.Icon, (m, F) => {
    F(m, {});
  });
  var x = e.sibling(w, 2);
  {
    var _ = (m) => {
      var F = e.comment(), D = e.first_child(F);
      e.snippet(D, () => t.children), e.append(m, F);
    };
    e.if(x, (m) => {
      t.children && m(_);
    });
  }
  e.reset(g), e.reset(A), e.template_effect(() => {
    C = e.set_class(A, 1, "icon-button svelte-vvirtv", null, C, {
      pending: a(),
      padded: o(),
      highlight: l(),
      transparent: b()
    }), A.disabled = u(), e.set_attribute(A, "aria-label", n()), e.set_attribute(A, "aria-haspopup", f()), e.set_attribute(A, "title", n()), T = e.set_style(A, "", T, {
      "--border-color": E(),
      color: !u() && e.get(L) ? e.get(L) : "var(--block-label-text-color)",
      "--bg-color": u() ? "auto" : v()
    }), h = e.set_class(g, 1, "svelte-vvirtv", null, h, {
      "x-small": s() === "x-small",
      small: s() === "small",
      large: s() === "large",
      medium: s() === "medium"
    });
  }), e.append(r, A);
}
e.delegate(["click"]);
var bo = e.from_html('<div aria-label="Empty value"><div class="icon svelte-1xcwp1t"><!></div></div>');
function xo(r, t) {
  e.push(t, !1);
  const n = e.mutable_source();
  let i = e.prop(t, "size", 8, "small"), a = e.prop(t, "unpadded_box", 8, !1), s = e.mutable_source();
  function o(b) {
    var v;
    if (!b) return !1;
    const { height: E } = b.getBoundingClientRect(), { height: L } = ((v = b.parentElement) === null || v === void 0 ? void 0 : v.getBoundingClientRect()) || { height: E };
    return E > L + 2;
  }
  e.legacy_pre_effect(() => e.get(s), () => {
    e.set(n, o(e.get(s)));
  }), e.legacy_pre_effect_reset();
  var l = bo();
  let u;
  var f = e.child(l), d = e.child(f);
  e.slot(d, t, "default", {}, null), e.reset(f), e.reset(l), e.bind_this(l, (b) => e.set(s, b), () => e.get(s)), e.template_effect(() => u = e.set_class(l, 1, "empty svelte-1xcwp1t", null, u, {
    small: i() === "small",
    large: i() === "large",
    unpadded_box: a(),
    small_parent: e.get(n)
  })), e.append(r, l), e.pop();
}
e.from_svg('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>');
e.from_svg('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 12 24"><path d="M9 6L3 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M21.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.889-5.813a.6.6 0 0 1 0-.966l7.89-5.813ZM10.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.888-5.813a.6.6 0 0 1 0-.966l7.888-5.813Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></path><path d="M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z" fill="currentColor"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M2.753 2.933a.75.75 0 0 1 .814-.68l3.043.272c2.157.205 4.224.452 5.922.732c1.66.273 3.073.594 3.844.983c.197.1.412.233.578.415c.176.192.352.506.28.9c-.067.356-.304.59-.487.729a3.001 3.001 0 0 1-.695.369c-1.02.404-2.952.79-5.984 1.169c-1.442.18-2.489.357-3.214.522c.205.045.43.089.674.132c.992.174 2.241.323 3.568.437a31.21 31.21 0 0 1 3.016.398c.46.087.893.186 1.261.296c.352.105.707.236.971.412c.13.086.304.225.42.437a.988.988 0 0 1 .063.141A1.75 1.75 0 0 0 14.5 12.25v.158c-.758.154-1.743.302-2.986.444c-2.124.243-3.409.55-4.117.859c-.296.128-.442.236-.508.3c.026.037.073.094.156.17c.15.138.369.29.65.45c.56.316 1.282.61 1.979.838l2.637.814a.75.75 0 1 1-.443 1.433l-2.655-.819c-.754-.247-1.58-.578-2.257-.96a5.082 5.082 0 0 1-.924-.65c-.255-.233-.513-.544-.62-.935c-.12-.441-.016-.88.274-1.244c.261-.328.656-.574 1.113-.773c.92-.4 2.387-.727 4.545-.974c1.366-.156 2.354-.313 3.041-.462a16.007 16.007 0 0 0-.552-.114a29.716 29.716 0 0 0-2.865-.378c-1.352-.116-2.649-.27-3.7-.454c-.524-.092-1-.194-1.395-.307c-.376-.106-.75-.241-1.021-.426a1.186 1.186 0 0 1-.43-.49a.934.934 0 0 1 .059-.873c.13-.213.32-.352.472-.442a3.23 3.23 0 0 1 .559-.251c.807-.287 2.222-.562 4.37-.83c2.695-.338 4.377-.666 5.295-.962c-.638-.21-1.623-.427-2.89-.635c-1.65-.273-3.679-.515-5.816-.718l-3.038-.272a.75.75 0 0 1-.68-.814M17 12.25a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line><line x1="7" y1="2" x2="7" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line><line x1="17" y1="2" x2="17" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line></svg>');
var wo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>');
function yo(r) {
  var t = wo();
  e.append(r, t);
}
e.from_svg('<svg viewBox="0 0 32 32"><path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></path><path d="M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z" fill="currentColor"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></path><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6L8 10L12 6"></path></svg>');
var Eo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>');
function Do(r) {
  var t = Eo();
  e.append(r, t);
}
var ko = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><g transform="matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"><path d="M18,6L6.087,17.913" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></g><path d="M4.364,4.364L19.636,19.636" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></svg>');
function Er(r) {
  var t = ko();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-closed-caption"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><text x="12" y="15" font-family="sans-serif" font-size="8" font-weight="bold" fill="currentColor" stroke="none" text-anchor="middle">CC</text></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><circle cx="10" cy="12" r="2" fill="currentColor"></circle><circle cx="16" cy="9" r="2" fill="currentColor"></circle><circle cx="22" cy="12" r="2" fill="currentColor"></circle><circle cx="23" cy="18" r="2" fill="currentColor"></circle><circle cx="19" cy="23" r="2" fill="currentColor"></circle><path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.813-3.9t2.2-3.175T8.25 2.788T12.2 2q2 0 3.775.688t3.113 1.9t2.125 2.875T22 11.05q0 2.875-1.75 4.413T16 17h-1.85q-.225 0-.312.125t-.088.275q0 .3.375.863t.375 1.287q0 1.25-.687 1.85T12 22m-5.5-9q.65 0 1.075-.425T8 11.5t-.425-1.075T6.5 10t-1.075.425T5 11.5t.425 1.075T6.5 13m3-4q.65 0 1.075-.425T11 7.5t-.425-1.075T9.5 6t-1.075.425T8 7.5t.425 1.075T9.5 9m5 0q.65 0 1.075-.425T16 7.5t-.425-1.075T14.5 6t-1.075.425T13 7.5t.425 1.075T14.5 9m3 4q.65 0 1.075-.425T19 11.5t-.425-1.075T17.5 10t-1.075.425T16 11.5t.425 1.075T17.5 13"></path></svg>');
var Co = e.from_svg('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path d="M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z" fill="currentColor"></path></svg>');
function Ao(r) {
  var t = Co();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" color="currentColor" aria-hidden="true" width="100%" height="100%"><path fill="currentColor" d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"></path><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M240 192a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H64a8 8 0 0 1-8-8V72H24a8 8 0 0 1 0-16h32V24a8 8 0 0 1 16 0v160h160a8 8 0 0 1 8 8M96 72h88v88a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16"></path></svg>');
var Fo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"></path></svg>');
function To(r) {
  var t = Fo();
  e.append(r, t);
}
var So = e.from_svg('<svg class="dropdown-arrow svelte-gtiaeq" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"></path></svg>');
function Bo(r) {
  var t = So();
  e.append(r, t);
}
e.from_svg('<svg class="dropdown-arrow svelte-wyly4p" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8" class="circle svelte-wyly4p"></circle><path d="M5 8l4 4 4-4z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m5.505 11.41l.53.53l-.53-.53ZM3 14.952h-.75H3ZM9.048 21v.75V21ZM11.41 5.505l-.53-.53l.53.53Zm1.831 12.34a.75.75 0 0 0 1.06-1.061l-1.06 1.06ZM7.216 9.697a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm10.749 2.362l-5.905 5.905l1.06 1.06l5.905-5.904l-1.06-1.06Zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904l1.06 1.06Zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083l1.06-1.06Zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933l-1.06-1.06Zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945l-1.06-1.06Zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812l-1.06 1.06Zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083l-1.06 1.06Zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933l1.06 1.06Zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812l1.06-1.06Zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945l1.06 1.06Zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085l1.06-1.06Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12"></path></g></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M21.03 2.97a3.578 3.578 0 0 0-5.06 0L14 4.94l-.013-.013a1.75 1.75 0 0 0-2.475 0l-.585.586a1.75 1.75 0 0 0 0 2.475l.012.012l-6.78 6.78a2.25 2.25 0 0 0-.659 1.592v.687l-1.28 2.347c-.836 1.533.841 3.21 2.374 2.375l2.347-1.28h.688a2.25 2.25 0 0 0 1.59-.66L16 13.061l.012.012a1.75 1.75 0 0 0 2.475 0l.586-.585a1.75 1.75 0 0 0 0-2.475L19.061 10l1.97-1.97a3.578 3.578 0 0 0 0-5.06ZM12 9.061l2.94 2.94l-6.78 6.78a.75.75 0 0 1-.531.22H6.75a.75.75 0 0 0-.359.09l-2.515 1.373a.234.234 0 0 1-.159.032a.264.264 0 0 1-.138-.075a.264.264 0 0 1-.075-.138a.234.234 0 0 1 .033-.158l1.372-2.515A.75.75 0 0 0 5 17.25v-.878a.75.75 0 0 1 .22-.53L12 9.06Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M2.956 5.704A.6.6 0 0 0 2 6.187v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813ZM13.956 5.704a.6.6 0 0 0-.956.483v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>');
var Lo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>');
function hi(r) {
  var t = Lo();
  e.append(r, t);
}
var Ro = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></path></svg>');
function di(r) {
  var t = Ro();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3h2m-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35327 10.9495L6.77663 15.158C7.12221 15.4229 7.50051 15.5553 7.91154 15.5553C8.32258 15.5553 8.70126 15.4229 9.0476 15.158L14.471 10.9495" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.23461 11.4324C7.23406 11.432 7.2335 11.4316 7.23295 11.4312L1.81496 7.2268C1.81471 7.22661 1.81446 7.22641 1.8142 7.22621C1.52269 6.99826 1.39429 6.73321 1.39429 6.37014C1.39429 6.00782 1.52236 5.74301 1.81325 5.51507C1.8136 5.5148 1.81394 5.51453 1.81428 5.51426L7.2331 1.30812C7.45645 1.13785 7.67632 1.06653 7.91159 1.06653C8.14692 1.06653 8.36622 1.13787 8.58861 1.30787C8.58915 1.30828 8.58969 1.30869 8.59023 1.30911L14.0082 5.51462C14.0085 5.51485 14.0088 5.51507 14.0091 5.51529C14.3008 5.74345 14.4289 6.00823 14.4289 6.37014C14.4289 6.73356 14.3006 6.99862 14.01 7.22634C14.0096 7.22662 14.0093 7.22689 14.0089 7.22717L8.59007 11.4322C8.36672 11.6024 8.14686 11.6738 7.91159 11.6738C7.67628 11.6738 7.45699 11.6024 7.23461 11.4324Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize" width="100%" height="100%"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>');
var Io = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>');
function Mo(r) {
  var t = Io();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize" width="100%" height="100%"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></path><circle cx="17.5" cy="11.5" r=".75"></circle><circle cx="6.5" cy="11.5" r=".75"></circle><path d="M10.335 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4.915 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"></path></g></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M10.05 23q-.75 0-1.4-.337T7.575 21.7l-5.9-8.65q-.2-.3-.175-.65t.3-.6q.475-.475 1.125-.55t1.175.3L7 13.575V4q0-.425.288-.712T8 3t.713.288T9 4v11.5q0 .6-.537.888t-1.038-.063l-2.125-1.5l3.925 5.725q.125.2.35.325t.475.125H17q.825 0 1.413-.587T19 19V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 1.65-1.175 2.825T17 23zM12 1q.425 0 .713.288T13 2v9q0 .425-.288.713T12 12t-.712-.288T11 11V2q0-.425.288-.712T12 1m4 1q.425 0 .713.288T17 3v8q0 .425-.288.713T16 12t-.712-.288T15 11V3q0-.425.288-.712T16 2m-3.85 14.5"></path></svg>');
e.from_svg('<svg fill="currentColor" width="100%" height="100%" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1752.768 221.109C1532.646.986 1174.283.986 954.161 221.109l-838.588 838.588c-154.052 154.165-154.052 404.894 0 558.946 149.534 149.421 409.976 149.308 559.059 0l758.738-758.626c87.982-88.094 87.982-231.417 0-319.51-88.32-88.208-231.642-87.982-319.51 0l-638.796 638.908 79.85 79.849 638.795-638.908c43.934-43.821 115.539-43.934 159.812 0 43.934 44.047 43.934 115.877 0 159.812l-758.739 758.625c-110.23 110.118-289.355 110.005-399.36 0-110.118-110.117-110.005-289.242 0-399.247l838.588-838.588c175.963-175.962 462.382-176.188 638.909 0 176.075 176.188 176.075 462.833 0 638.908l-798.607 798.72 79.849 79.85 798.607-798.72c220.01-220.123 220.01-578.485 0-798.607" fill-rule="evenodd"></path></g></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="20" cy="4" r="2" fill="currentColor"></circle><circle cx="8" cy="16" r="2" fill="currentColor"></circle><circle cx="28" cy="12" r="2" fill="currentColor"></circle><circle cx="11" cy="7" r="2" fill="currentColor"></circle><circle cx="16" cy="24" r="2" fill="currentColor"></circle><path fill="currentColor" d="M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
var Ho = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw" style="transform: rotateY(180deg);"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
function vn(r) {
  var t = Ho();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1024 1024"><path fill="currentColor" d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"></path><path fill="currentColor" d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5c42.1 5.2 82.1 18.2 119 38.7c38.1 21.2 71.2 49.7 98.4 84.3c27.1 34.7 46.7 73.7 58.1 115.8c11 40.7 14 82.7 8.9 124.8c-.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z"></path></svg>');
e.from_svg('<svg viewBox="0 0 22 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.1168 12.1484C19.474 12.3581 19.9336 12.2384 20.1432 11.8811C20.3528 11.5238 20.2331 11.0643 19.8758 10.8547L19.1168 12.1484ZM6.94331 4.13656L6.55624 4.77902L6.56378 4.78344L6.94331 4.13656ZM5.92408 4.1598L5.50816 3.5357L5.50816 3.5357L5.92408 4.1598ZM5.51031 5.09156L4.76841 5.20151C4.77575 5.25101 4.78802 5.29965 4.80505 5.34671L5.51031 5.09156ZM7.12405 11.7567C7.26496 12.1462 7.69495 12.3477 8.08446 12.2068C8.47397 12.0659 8.67549 11.6359 8.53458 11.2464L7.12405 11.7567ZM19.8758 12.1484C20.2331 11.9388 20.3528 11.4793 20.1432 11.122C19.9336 10.7648 19.474 10.6451 19.1168 10.8547L19.8758 12.1484ZM6.94331 18.8666L6.56375 18.2196L6.55627 18.2241L6.94331 18.8666ZM5.92408 18.8433L5.50815 19.4674H5.50815L5.92408 18.8433ZM5.51031 17.9116L4.80505 17.6564C4.78802 17.7035 4.77575 17.7521 4.76841 17.8016L5.51031 17.9116ZM8.53458 11.7567C8.67549 11.3672 8.47397 10.9372 8.08446 10.7963C7.69495 10.6554 7.26496 10.8569 7.12405 11.2464L8.53458 11.7567ZM19.4963 12.2516C19.9105 12.2516 20.2463 11.9158 20.2463 11.5016C20.2463 11.0873 19.9105 10.7516 19.4963 10.7516V12.2516ZM7.82931 10.7516C7.4151 10.7516 7.07931 11.0873 7.07931 11.5016C7.07931 11.9158 7.4151 12.2516 7.82931 12.2516V10.7516ZM19.8758 10.8547L7.32284 3.48968L6.56378 4.78344L19.1168 12.1484L19.8758 10.8547ZM7.33035 3.49414C6.76609 3.15419 6.05633 3.17038 5.50816 3.5357L6.34 4.78391C6.40506 4.74055 6.4893 4.73863 6.55627 4.77898L7.33035 3.49414ZM5.50816 3.5357C4.95998 3.90102 4.67184 4.54987 4.76841 5.20151L6.25221 4.98161C6.24075 4.90427 6.27494 4.82727 6.34 4.78391L5.50816 3.5357ZM4.80505 5.34671L7.12405 11.7567L8.53458 11.2464L6.21558 4.83641L4.80505 5.34671ZM19.1168 10.8547L6.56378 18.2197L7.32284 19.5134L19.8758 12.1484L19.1168 10.8547ZM6.55627 18.2241C6.4893 18.2645 6.40506 18.2626 6.34 18.2192L5.50815 19.4674C6.05633 19.8327 6.76609 19.8489 7.33035 19.509L6.55627 18.2241ZM6.34 18.2192C6.27494 18.1759 6.24075 18.0988 6.25221 18.0215L4.76841 17.8016C4.67184 18.4532 4.95998 19.1021 5.50815 19.4674L6.34 18.2192ZM6.21558 18.1667L8.53458 11.7567L7.12405 11.2464L4.80505 17.6564L6.21558 18.1667ZM19.4963 10.7516H7.82931V12.2516H19.4963V10.7516Z" fill="currentColor"></path></g></svg>');
e.from_svg('<svg enable-background="new 0 0 32 32" height="20" width="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4h-14.1v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4h4.1zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path><path d="m2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4h14.1v-2h-14.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4h-4.1zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path><path d="m0 0h32v32h-32z" fill="none"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>');
var Oo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>');
function No(r, t) {
  let n = e.prop(t, "fill", 8, "currentColor"), i = e.prop(t, "stroke_width", 8, 1.5);
  var a = Oo();
  e.template_effect(() => {
    e.set_attribute(a, "fill", n()), e.set_attribute(a, "stroke-width", `${i()}`);
  }), e.append(r, a);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-table"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 15H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5V5a1 1 0 0 0-1-1H3V2h6a3 3 0 0 1 3 3zM5 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5V9zm15 14v2a1 1 0 0 0 1 1h5v-4h-5a1 1 0 0 0-1 1z"></path><path fill="currentColor" d="M2 30h28V2Zm26-2h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3Z"></path></svg>');
e.from_svg(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="100%" height="100%"><defs><style>.cls-1 {
				fill: none;
			}</style></defs><rect x="12" y="12" width="2" height="12"></rect><rect x="18" y="12" width="2" height="12"></rect><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"></path><rect x="12" y="2" width="8" height="2"></rect><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></svg>`);
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M23 9.005h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1H11v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h4v20a2.002 2.002 0 0 0 2 2h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2Zm0-6h6v4h-6Zm-14 4H3v-4h6Zm14 18h6v4h-6Zm0-11h6v4h-6Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-scissors"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>');
var Po = e.from_svg('<svg aria-label="undo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
function _n(r) {
  var t = Po();
  e.append(r, t);
}
var zo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>');
function fi(r) {
  var t = zo();
  e.append(r, t);
}
var Uo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>');
function Go(r) {
  var t = Uo();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="m19.8 22.6l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM12 16q.275 0 .513-.025t.512-.1l-5.4-5.4q-.075.275-.1.513T7.5 11.5q0 1.875 1.313 3.188T12 16m7.3.45l-3.175-3.15q.175-.425.275-.862t.1-.938q0-1.875-1.312-3.187T12 7q-.5 0-.937.1t-.863.3L7.65 4.85q1.025-.425 2.1-.637T12 4q3.775 0 6.725 2.088T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m-4.625-4.6l-3-3q.7-.125 1.288.113t1.012.687t.613 1.038t.087 1.162"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Low volume</title><path d="M19.5 7.5C19.5 7.5 21 9 21 11.5C21 14 19.5 15.5 19.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>High volume</title><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z" stroke-width="1.5"></path><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Muted volume</title><g clip-path="url(#clip0_3173_16686)"><path d="M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></g><defs><clipPath id="clip0_3173_16686"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>');
var qo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"></path><path fill="currentColor" d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"></path></svg>');
function pi(r) {
  var t = qo();
  e.append(r, t);
}
var jo = e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" class="svelte-3g80w1"><circle cx="25" cy="25" r="20" fill="none" stroke-width="3.0" stroke-linecap="round" stroke-dasharray="94.2477796076938 94.2477796076938" stroke-dashoffset="0" class="svelte-3g80w1"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" repeatCount="indefinite" class="svelte-3g80w1"></animateTransform></circle></svg>');
function Vo(r) {
  var t = jo();
  e.append(r, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M144 120v88a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8m64 56a8 8 0 0 0-8 8v16h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-56 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16M48 88a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16H56a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8"></path></svg>');
e.from_svg('<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M19.1679 9C18.0247 6.46819 15.3006 4.5 11.9999 4.5C8.31459 4.5 5.05104 7.44668 4.54932 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 9H19.4C19.7314 9 20 8.73137 20 8.4V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.88146 15C5.92458 17.5318 8.64874 19.5 12.0494 19.5C15.7347 19.5 18.9983 16.5533 19.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.04932 15H4.64932C4.31795 15 4.04932 15.2686 4.04932 15.6V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20L12 4M12 20L7 15M12 20L17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M11 8v6m-3-3h6"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M8 11h6"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a11 11 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a11 11 0 0 0 .3-2.6A10 10 0 0 0 12.1 2m8 10.1a7.6 7.6 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.6 7.6 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.3 8.3 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.5 6.5 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.5 8.5 0 0 1 2.4 5.9"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></path><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"></path><path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"></path></svg>');
function Zo(r, t) {
  e.push(t, !1);
  const n = et();
  let i = e.prop(t, "formatter", 8), a = e.prop(t, "value", 8), s = e.prop(t, "i18n", 8), o = e.mutable_source(!1);
  e.init();
  {
    let l = e.derived_safe_equal(() => (e.deep_read_state(s()), e.untrack(() => s()("common.share"))));
    Dt(r, {
      get Icon() {
        return Ao;
      },
      get label() {
        return e.get(l);
      },
      get pending() {
        return e.get(o);
      },
      onclick: async () => {
        try {
          e.set(o, !0);
          const u = await i()(a());
          n("share", { description: u });
        } catch (u) {
          console.error(u);
          let f = u instanceof Pt ? u.message : "Share failed.";
          n("error", f);
        } finally {
          e.set(o, !1);
        }
      }
    });
  }
  e.pop();
}
const Wo = /^(#\s*)(.+)$/m;
function bn(r) {
  const t = r.trim(), n = t.match(Wo);
  if (!n)
    return [!1, t || !1];
  const [i, , a] = n, s = a.trim();
  if (t === i)
    return [s, !1];
  const o = n.index !== void 0 ? n.index + i.length : 0, u = t.substring(o).trim() || !1;
  return [s, u];
}
var Xo = e.from_html('<h2 class="svelte-cmuu9m"> </h2>'), Yo = e.from_html('<p class="svelte-cmuu9m"> </p>'), Ko = e.from_html("<!> <!>", 1), Qo = e.from_html('<span class="or svelte-cmuu9m"> </span> ', 1), Jo = e.from_html(" <!>", 1), $o = e.from_html('<div class="wrap svelte-cmuu9m"><span><!></span> <!></div>');
function xn(r, t) {
  e.push(t, !1);
  const n = e.mutable_source(), i = e.mutable_source();
  let a = e.prop(t, "type", 8, "file"), s = e.prop(t, "i18n", 8), o = e.prop(t, "message", 8, void 0), l = e.prop(t, "mode", 8, "full"), u = e.prop(t, "hovered", 8, !1), f = e.prop(t, "placeholder", 8, void 0);
  const d = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  e.legacy_pre_effect(
    () => (e.get(n), e.get(i), e.deep_read_state(f()), bn),
    () => {
      ((g) => {
        var h = e.to_array(g, 2);
        e.set(n, h[0]), e.set(i, h[1]);
      })(f() ? bn(f()) : [!1, !1]);
    }
  ), e.legacy_pre_effect_reset(), e.init();
  var b = $o(), v = e.child(b);
  let E;
  var L = e.child(v);
  {
    var A = (g) => {
      di(g);
    }, C = (g) => {
      fi(g);
    };
    e.if(L, (g) => {
      a() === "clipboard" ? g(A) : g(C, !1);
    });
  }
  e.reset(v);
  var T = e.sibling(v, 2);
  {
    var c = (g) => {
      var h = Ko(), w = e.first_child(h);
      {
        var x = (F) => {
          var D = Xo(), I = e.child(D, !0);
          e.reset(D), e.template_effect(() => e.set_text(I, e.get(n))), e.append(F, D);
        };
        e.if(w, (F) => {
          e.get(n) && F(x);
        });
      }
      var _ = e.sibling(w, 2);
      {
        var m = (F) => {
          var D = Yo(), I = e.child(D, !0);
          e.reset(D), e.template_effect(() => e.set_text(I, e.get(i))), e.append(F, D);
        };
        e.if(_, (F) => {
          e.get(i) && F(m);
        });
      }
      e.append(g, h);
    }, p = (g) => {
      var h = Jo(), w = e.first_child(h), x = e.sibling(w);
      {
        var _ = (m) => {
          var F = Qo(), D = e.first_child(F), I = e.child(D);
          e.reset(D);
          var j = e.sibling(D);
          e.template_effect(
            (q, fe) => {
              e.set_text(I, `- ${q ?? ""} -`), e.set_text(j, ` ${fe ?? ""}`);
            },
            [
              () => (e.deep_read_state(s()), e.untrack(() => s()("common.or"))),
              () => (e.deep_read_state(o()), e.deep_read_state(s()), e.untrack(() => o() || s()("upload_text.click_to_upload")))
            ]
          ), e.append(m, F);
        };
        e.if(x, (m) => {
          l() !== "short" && m(_);
        });
      }
      e.template_effect((m) => e.set_text(w, `${m ?? ""} `), [
        () => (e.deep_read_state(s()), e.deep_read_state(a()), e.untrack(() => s()(d[a()] || d.file)))
      ]), e.append(g, h);
    };
    e.if(T, (g) => {
      e.get(n) || e.get(i) ? g(c) : g(p, !1);
    });
  }
  e.reset(b), e.template_effect(() => E = e.set_class(v, 1, "icon-wrap svelte-cmuu9m", null, E, { hovered: u() })), e.append(r, b), e.pop();
}
e.from_html("<div><!></div>");
var el = e.from_html('<button aria-label="Upload file"><!></button>'), tl = e.from_html('<button aria-label="Record audio"><!></button>'), rl = e.from_html('<button aria-label="Capture from camera"><!></button>'), nl = e.from_html('<button aria-label="Record video from camera"><!></button>'), il = e.from_html('<button aria-label="Paste from clipboard"><!></button>'), al = e.from_html('<span class="source-selection svelte-5d261r" data-testid="source-select"><!> <!> <!> <!> <!></span>');
function sl(r, t) {
  e.push(t, !0);
  var n = this && this.__awaiter || function(b, v, E, L) {
    function A(C) {
      return C instanceof E ? C : new E(function(T) {
        T(C);
      });
    }
    return new (E || (E = Promise))(function(C, T) {
      function c(h) {
        try {
          g(L.next(h));
        } catch (w) {
          T(w);
        }
      }
      function p(h) {
        try {
          g(L.throw(h));
        } catch (w) {
          T(w);
        }
      }
      function g(h) {
        h.done ? C(h.value) : A(h.value).then(c, p);
      }
      g((L = L.apply(b, v || [])).next());
    });
  };
  let i = e.prop(t, "active_source", 15), a = e.prop(t, "handle_clear", 3, () => {
  }), s = e.prop(t, "handle_select", 3, () => {
  }), o = e.derived(() => [...new Set(t.sources)]);
  function l(b) {
    return n(this, void 0, void 0, function* () {
      a()(), i(b), s()(b);
    });
  }
  var u = e.comment(), f = e.first_child(u);
  {
    var d = (b) => {
      var v = al(), E = e.child(v);
      {
        var L = (x) => {
          var _ = el();
          let m;
          _.__click = () => l("upload");
          var F = e.child(_);
          fi(F), e.reset(_), e.template_effect(() => m = e.set_class(_, 1, "icon svelte-5d261r", null, m, { selected: i() === "upload" || !i() })), e.append(x, _);
        };
        e.if(E, (x) => {
          t.sources.includes("upload") && x(L);
        });
      }
      var A = e.sibling(E, 2);
      {
        var C = (x) => {
          var _ = tl();
          let m;
          _.__click = () => l("microphone");
          var F = e.child(_);
          Mo(F), e.reset(_), e.template_effect(() => m = e.set_class(_, 1, "icon svelte-5d261r", null, m, { selected: i() === "microphone" })), e.append(x, _);
        };
        e.if(A, (x) => {
          t.sources.includes("microphone") && x(C);
        });
      }
      var T = e.sibling(A, 2);
      {
        var c = (x) => {
          var _ = rl();
          let m;
          _.__click = () => l("webcam");
          var F = e.child(_);
          pi(F), e.reset(_), e.template_effect(() => m = e.set_class(_, 1, "icon svelte-5d261r", null, m, { selected: i() === "webcam" })), e.append(x, _);
        };
        e.if(T, (x) => {
          t.sources.includes("webcam") && x(c);
        });
      }
      var p = e.sibling(T, 2);
      {
        var g = (x) => {
          var _ = nl();
          let m;
          _.__click = () => l("webcam-video");
          var F = e.child(_);
          Go(F), e.reset(_), e.template_effect(() => m = e.set_class(_, 1, "icon svelte-5d261r", null, m, { selected: i() === "webcam-video" })), e.append(x, _);
        };
        e.if(p, (x) => {
          t.sources.includes("webcam-video") && x(g);
        });
      }
      var h = e.sibling(p, 2);
      {
        var w = (x) => {
          var _ = il();
          let m;
          _.__click = () => l("clipboard");
          var F = e.child(_);
          di(F), e.reset(_), e.template_effect(() => m = e.set_class(_, 1, "icon svelte-5d261r", null, m, { selected: i() === "clipboard" })), e.append(x, _);
        };
        e.if(h, (x) => {
          t.sources.includes("clipboard") && x(w);
        });
      }
      e.reset(v), e.append(b, v);
    };
    e.if(f, (b) => {
      e.get(o).length > 1 && b(d);
    });
  }
  e.append(r, u), e.pop();
}
e.delegate(["click"]);
e.from_html('<span class="custom-button-label svelte-g7x491"> </span>');
e.from_html('<button class="custom-button svelte-g7x491"><!></button>');
e.from_html("<div><!> <!></div>");
e.from_html("<div></div>");
function lr(r) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; r > 1e3 && n < t.length - 1; )
    r /= 1e3, n++;
  let i = t[n];
  return (Number.isInteger(r) ? r : r.toFixed(1)) + i;
}
var ol = e.from_html('<div><svg viewBox="-1200 -1200 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-m6d381"><g><path d="M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z" fill="#FF7C00" class="svelte-m6d381"></path></g><g><path d="M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z" fill="#FF7C00" class="svelte-m6d381"></path></g></svg></div>');
function ll(r, t) {
  e.push(t, !0);
  const n = () => e.store_get(u, "$top", a), i = () => e.store_get(f, "$bottom", a), [a, s] = e.setup_stores();
  var o = this && this.__awaiter || function(p, g, h, w) {
    function x(_) {
      return _ instanceof h ? _ : new h(function(m) {
        m(_);
      });
    }
    return new (h || (h = Promise))(function(_, m) {
      function F(j) {
        try {
          I(w.next(j));
        } catch (q) {
          m(q);
        }
      }
      function D(j) {
        try {
          I(w.throw(j));
        } catch (q) {
          m(q);
        }
      }
      function I(j) {
        j.done ? _(j.value) : x(j.value).then(F, D);
      }
      I((w = w.apply(p, g || [])).next());
    });
  };
  let l = e.prop(t, "margin", 3, !0);
  const u = Nr([0, 0]), f = Nr([0, 0]);
  let d = e.state(!1);
  function b() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 140]), f.set([-125, -140])]), yield Promise.all([u.set([-125, 140]), f.set([125, -140])]), yield Promise.all([u.set([-125, 0]), f.set([125, -0])]), yield Promise.all([u.set([125, 0]), f.set([-125, 0])]);
    });
  }
  function v() {
    return o(this, void 0, void 0, function* () {
      yield b(), e.get(d) || v();
    });
  }
  function E() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 0]), f.set([-125, 0])]), v();
    });
  }
  e.user_effect(() => (E(), () => {
    e.set(d, !0);
  }));
  var L = ol();
  let A;
  var C = e.child(L), T = e.child(C), c = e.sibling(T);
  e.reset(C), e.reset(L), e.template_effect(() => {
    A = e.set_class(L, 1, "svelte-m6d381", null, A, { margin: l() }), e.set_style(T, `transform: translate(${n()[0] ?? ""}px, ${n()[1] ?? ""}px);`), e.set_style(c, `transform: translate(${i()[0] ?? ""}px, ${i()[1] ?? ""}px);`);
  }), e.append(r, L), e.pop(), s();
}
var ul = function(r, t, n, i) {
  function a(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function l(d) {
      try {
        f(i.next(d));
      } catch (b) {
        o(b);
      }
    }
    function u(d) {
      try {
        f(i.throw(d));
      } catch (b) {
        o(b);
      }
    }
    function f(d) {
      d.done ? s(d.value) : a(d.value).then(l, u);
    }
    f((i = i.apply(r, t || [])).next());
  });
};
let Mt = [], ur = !1;
const cl = typeof window < "u", gi = cl ? window.requestAnimationFrame : (r) => {
};
function hl(r) {
  return ul(this, arguments, void 0, function* (t, n = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && n !== !0)) {
      if (Mt.push(t), !ur) ur = !0;
      else return;
      yield Dr(), gi(() => {
        let i = [0, 0];
        for (let a = 0; a < Mt.length; a++) {
          const o = Mt[a].getBoundingClientRect();
          (a === 0 || o.top + window.scrollY <= i[0]) && (i[0] = o.top + window.scrollY, i[1] = a);
        }
        window.scrollTo({ top: i[0] - 20, behavior: "smooth" }), ur = !1, Mt = [];
      });
    }
  });
}
var dl = e.from_html('<div class="validation-error svelte-124hqw6"> <button class="svelte-124hqw6"><!></button></div>'), fl = e.from_html('<div class="eta-bar svelte-124hqw6"></div>'), pl = e.from_html("<!> ", 1), gl = e.from_html("<!> <!> <!> <!>", 1), ml = e.from_html('<div class="progress-level svelte-124hqw6"><div class="progress-level-inner svelte-124hqw6"><!></div> <div class="progress-bar-wrap svelte-124hqw6"><div class="progress-bar svelte-124hqw6"></div></div></div>'), vl = e.from_html('<p class="loading svelte-124hqw6"> </p> <!>', 1), _l = e.from_html("<!> <div><!> <!></div> <!> <!>", 1), bl = e.from_html('<div class="clear-status svelte-124hqw6"><!></div> <span class="error svelte-124hqw6"> </span> <!>', 1), xl = e.from_html('<div data-testid="status-tracker"><!> <!></div>');
function wl(r, t) {
  e.push(t, !0);
  let n = e.prop(t, "eta", 7, null), i = e.prop(t, "scroll_to_output", 3, !1), a = e.prop(t, "timer", 3, !0), s = e.prop(t, "show_progress", 3, "full"), o = e.prop(t, "message", 3, null), l = e.prop(t, "progress", 3, null), u = e.prop(t, "variant", 3, "default"), f = e.prop(t, "loading_text", 3, "Loading..."), d = e.prop(t, "absolute", 3, !0), b = e.prop(t, "translucent", 3, !1), v = e.prop(t, "border", 3, !1), E = e.prop(t, "validation_error", 7, null), L = e.prop(t, "show_validation_error", 3, !0), A = e.prop(t, "type", 3, null), C, T = !1, c = e.state(0), p = e.state(null), g = e.state(null), h = e.state(!1), w = e.state(null);
  const x = e.derived(() => A() === "input" || !t.status || t.status === "complete" || s() === "hidden" || t.status == "streaming" || !!(L() && E()));
  let _ = e.state(0);
  const m = e.derived(() => e.get(g) === null || e.get(g) <= 0 || !e.get(_) ? 0 : Math.min(e.get(_) / e.get(g), 1)), F = e.derived(() => e.get(_).toFixed(1));
  let D = e.derived(() => l() == null);
  function I() {
    gi(() => {
      e.set(_, (performance.now() - e.get(c)) / 1e3), T && I();
    });
  }
  let j = e.derived(() => {
    let K = null;
    l() != null ? K = l().map((M) => {
      if (M.index != null && M.length != null)
        return M.index / M.length;
      if (M.progress != null)
        return M.progress;
    }) : K = null;
    let P, B = "";
    return K ? (P = K[K.length - 1], P === 0 ? B = "0" : B = "150ms") : P = void 0, {
      progress_level: K,
      last_progress_level: P,
      progress_bar_transition: B
    };
  });
  function q() {
    T || (e.set(p, e.set(w, null), !0), e.set(c, performance.now(), !0), T = !0, I());
  }
  function fe() {
    e.set(p, e.set(w, null), !0), T && (T = !1);
  }
  e.user_effect(() => {
    t.status === "pending" ? q() : dr(() => {
      fe();
    });
  }), e.user_effect(() => {
    C && i() && (t.status === "pending" || t.status === "complete") && hl(C, t.autoscroll);
  }), e.user_effect(() => {
    n() === null && n(e.get(p)), n() != null && e.get(p) !== n() && (e.set(g, (performance.now() - e.get(c)) / 1e3 + n()), e.set(w, e.get(g).toFixed(1), !0), e.set(p, n(), !0));
  });
  function Q() {
    e.set(h, !1);
  }
  e.user_effect(() => {
    dr(() => {
      Q();
    }), t.status === "error" && o() && e.set(h, !0);
  });
  var pe = xl();
  let V, W;
  var ue = e.child(pe);
  {
    var ie = (K) => {
      var P = dl(), B = e.child(P), M = e.sibling(B), S = e.child(M);
      {
        let k = e.derived(() => t.i18n ? t.i18n("common.clear") : "Clear");
        Dt(S, {
          get Icon() {
            return Er;
          },
          get label() {
            return e.get(k);
          },
          disabled: !1,
          size: "x-small",
          background: "var(--background-fill-primary)",
          color: "var(--error-background-text)",
          border: "var(--border-color-primary)",
          onclick: () => E(null)
        });
      }
      e.reset(M), e.reset(P), e.template_effect(() => e.set_text(B, `${E() ?? ""} `)), e.append(K, P);
    };
    e.if(ue, (K) => {
      E() && L() && K(ie);
    });
  }
  var te = e.sibling(ue, 2);
  {
    var De = (K) => {
      var P = _l(), B = e.first_child(P);
      {
        var M = (R) => {
          var N = fl();
          let ee;
          e.template_effect(() => ee = e.set_style(N, "", ee, {
            transform: `translateX(${(e.get(m) || 0) * 100 - 100}%)`
          })), e.append(R, N);
        };
        e.if(B, (R) => {
          u() === "default" && e.get(D) && s() === "full" && R(M);
        });
      }
      var S = e.sibling(B, 2);
      let k;
      var G = e.child(S);
      {
        var H = (R) => {
          var N = e.comment(), ee = e.first_child(N);
          e.each(ee, 17, l, e.index, (le, J) => {
            var X = e.comment(), be = e.first_child(X);
            {
              var Fe = (me) => {
                var ae = pl(), he = e.first_child(ae);
                {
                  var Ce = (Me) => {
                    var We = e.text();
                    e.template_effect((tt, rt) => e.set_text(We, `${tt ?? ""}/${rt ?? ""}`), [
                      () => lr(e.get(J).index || 0),
                      () => lr(e.get(J).length)
                    ]), e.append(Me, We);
                  }, Oe = (Me) => {
                    var We = e.text();
                    e.template_effect((tt) => e.set_text(We, tt), [() => lr(e.get(J).index || 0)]), e.append(Me, We);
                  };
                  e.if(he, (Me) => {
                    e.get(J).length != null ? Me(Ce) : Me(Oe, !1);
                  });
                }
                var Ne = e.sibling(he);
                e.template_effect(() => e.set_text(Ne, ` ${e.get(J).unit ?? ""} |  `)), e.append(me, ae);
              };
              e.if(be, (me) => {
                e.get(J).index != null && me(Fe);
              });
            }
            e.append(le, X);
          }), e.append(R, N);
        }, z = (R) => {
          var N = e.comment(), ee = e.first_child(N);
          {
            var le = (X) => {
              var be = e.text();
              e.template_effect(() => e.set_text(be, `queue: ${t.queue_position + 1}/${t.queue_size ?? ""} |`)), e.append(X, be);
            }, J = (X) => {
              var be = e.comment(), Fe = e.first_child(be);
              {
                var me = (ae) => {
                  var he = e.text("processing |");
                  e.append(ae, he);
                };
                e.if(
                  Fe,
                  (ae) => {
                    t.queue_position === 0 && ae(me);
                  },
                  !0
                );
              }
              e.append(X, be);
            };
            e.if(
              ee,
              (X) => {
                t.queue_position !== null && t.queue_size !== void 0 && t.queue_position >= 0 ? X(le) : X(J, !1);
              },
              !0
            );
          }
          e.append(R, N);
        };
        e.if(G, (R) => {
          l() ? R(H) : R(z, !1);
        });
      }
      var oe = e.sibling(G, 2);
      {
        var _e = (R) => {
          var N = e.text();
          e.template_effect(() => e.set_text(N, `${e.get(F) ?? ""}${n() ? `/${e.get(w)}` : ""}s`)), e.append(R, N);
        };
        e.if(oe, (R) => {
          a() && R(_e);
        });
      }
      e.reset(S);
      var ye = e.sibling(S, 2);
      {
        var Ae = (R) => {
          var N = ml(), ee = e.child(N), le = e.child(ee);
          {
            var J = (me) => {
              var ae = e.comment(), he = e.first_child(ae);
              e.each(he, 17, l, e.index, (Ce, Oe, Ne) => {
                var Me = e.comment(), We = e.first_child(Me);
                {
                  var tt = (rt) => {
                    var Ft = gl(), Xe = e.first_child(Ft);
                    {
                      var ot = (Te) => {
                        var ze = e.text(" /");
                        e.append(Te, ze);
                      };
                      e.if(Xe, (Te) => {
                        Ne !== 0 && Te(ot);
                      });
                    }
                    var Ke = e.sibling(Xe, 2);
                    {
                      var Jt = (Te) => {
                        var ze = e.text();
                        e.template_effect(() => e.set_text(ze, e.get(Oe).desc)), e.append(Te, ze);
                      };
                      e.if(Ke, (Te) => {
                        e.get(Oe).desc != null && Te(Jt);
                      });
                    }
                    var Tt = e.sibling(Ke, 2);
                    {
                      var lt = (Te) => {
                        var ze = e.text("-");
                        e.append(Te, ze);
                      };
                      e.if(Tt, (Te) => {
                        e.get(Oe).desc != null && e.get(j).progress_level && e.get(j).progress_level[Ne] != null && Te(lt);
                      });
                    }
                    var St = e.sibling(Tt, 2);
                    {
                      var Bt = (Te) => {
                        var ze = e.text();
                        e.template_effect(($t) => e.set_text(ze, `${$t ?? ""}%`), [
                          () => (100 * (e.get(j).progress_level[Ne] || 0)).toFixed(1)
                        ]), e.append(Te, ze);
                      };
                      e.if(St, (Te) => {
                        e.get(j).progress_level != null && Te(Bt);
                      });
                    }
                    e.append(rt, Ft);
                  };
                  e.if(We, (rt) => {
                    (e.get(Oe).desc != null || e.get(j).progress_level && e.get(j).progress_level[Ne] != null) && rt(tt);
                  });
                }
                e.append(Ce, Me);
              }), e.append(me, ae);
            };
            e.if(le, (me) => {
              l() != null && me(J);
            });
          }
          e.reset(ee);
          var X = e.sibling(ee, 2), be = e.child(X);
          let Fe;
          e.reset(X), e.reset(N), e.template_effect(() => Fe = e.set_style(be, "", Fe, {
            width: `${e.get(j).last_progress_level * 100}%`,
            transition: e.get(j).progress_bar_transition
          })), e.append(R, N);
        }, ce = (R) => {
          var N = e.comment(), ee = e.first_child(N);
          {
            var le = (J) => {
              {
                let X = e.derived(() => u() === "default");
                ll(J, {
                  get margin() {
                    return e.get(X);
                  }
                });
              }
            };
            e.if(
              ee,
              (J) => {
                s() === "full" && J(le);
              },
              !0
            );
          }
          e.append(R, N);
        };
        e.if(ye, (R) => {
          e.get(j).last_progress_level != null ? R(Ae) : R(ce, !1);
        });
      }
      var Ee = e.sibling(ye, 2);
      {
        var $ = (R) => {
          var N = vl(), ee = e.first_child(N), le = e.child(ee, !0);
          e.reset(ee);
          var J = e.sibling(ee, 2);
          e.slot(J, t, "additional-loading-text", {}, null), e.template_effect(() => e.set_text(le, f())), e.append(R, N);
        };
        e.if(Ee, (R) => {
          a() || R($);
        });
      }
      e.template_effect(() => k = e.set_class(S, 1, "progress-text svelte-124hqw6", null, k, {
        "meta-text-center": u() === "center",
        "meta-text": u() === "default"
      })), e.append(K, P);
    }, ge = (K) => {
      var P = e.comment(), B = e.first_child(P);
      {
        var M = (S) => {
          var k = bl(), G = e.first_child(k), H = e.child(G);
          {
            let ye = e.derived(() => t.i18n("common.clear"));
            Dt(H, {
              get Icon() {
                return Er;
              },
              get label() {
                return e.get(ye);
              },
              disabled: !1,
              $$events: {
                click: () => {
                  t.on_clear_status?.();
                }
              }
            });
          }
          e.reset(G);
          var z = e.sibling(G, 2), oe = e.child(z, !0);
          e.reset(z);
          var _e = e.sibling(z, 2);
          e.slot(_e, t, "error", {}, null), e.template_effect((ye) => e.set_text(oe, ye), [() => t.i18n("common.error")]), e.append(S, k);
        };
        e.if(
          B,
          (S) => {
            t.status === "error" && S(M);
          },
          !0
        );
      }
      e.append(K, P);
    };
    e.if(te, (K) => {
      t.status === "pending" ? K(De) : K(ge, !1);
    });
  }
  e.reset(pe), e.bind_this(pe, (K) => C = K, () => C), e.template_effect(() => {
    V = e.set_class(pe, 1, `wrap ${u() ?? ""} ${s() ?? ""}`, "svelte-124hqw6", V, {
      "no-click": E() && L(),
      hide: e.get(x),
      translucent: u() === "center" && (t.status === "pending" || t.status === "error") || b() || s() === "minimal" || E(),
      generating: t.status === "generating" && s() === "full",
      border: v()
    }), W = e.set_style(pe, "", W, {
      position: d() ? "absolute" : "static",
      padding: d() ? "0" : "var(--size-8) 0"
    });
  }), e.append(r, pe), e.pop();
}
e.from_html('<span class="toast-count svelte-17ll3xi"> </span>');
e.from_html('<div class="toast-separator svelte-17ll3xi"></div>');
e.from_html('<div><div data-testid="toast-text"><!></div></div> <!>', 1);
e.from_html('<div class="toast-messages svelte-17ll3xi"></div>');
e.from_html("<div></div>");
e.from_html('<div role="status" aria-live="polite" data-testid="toast-body"><div class="toast-header svelte-17ll3xi" role="button" tabindex="0"><div><!></div> <div class="toast-title-row svelte-17ll3xi"><span> <!></span> <div><!></div></div> <button type="button" aria-label="Close" data-testid="toast-close"><span aria-hidden="true">&#215;</span></button></div> <!> <!></div>');
e.delegate(["touchstart", "touchmove", "touchend", "click", "keydown"]);
e.from_html('<div class="toast-item svelte-l56nvb"><!></div>');
e.from_html('<div class="toast-wrap svelte-l56nvb"></div>');
var yl = e.from_html('<div class="streaming-bar svelte-xj6qzf"></div>');
function El(r, t) {
  var n = e.comment(), i = e.first_child(n);
  {
    var a = (s) => {
      var o = yl();
      let l;
      e.template_effect(() => l = e.set_style(o, "", l, { "animation-duration": `${t.time_limit ?? ""}s` })), e.append(s, o);
    };
    e.if(i, (s) => {
      t.time_limit && s(a);
    });
  }
  e.append(r, n);
}
const Ht = (r, t, n) => Math.min(Math.max(r, t), n);
class Dl {
  constructor(t) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (n) => {
      if (this.isDragging) {
        let i = n.clientX - this.startDragX - this.offsetX, a = n.clientY - this.startDragY - this.offsetY;
        this.imageWidth * this.scale > this.canvasWidth ? i = Ht(i, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : i = Ht(i, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? a = Ht(a, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : a = Ht(a, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += i, this.offsetY += a, this.renderCallBack();
      }
    }, this.renderCallBack = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(t) {
    this.isDragging = !0, this.startDragX = t.clientX - this.offsetX, this.startDragY = t.clientY - this.offsetY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(t) {
    t !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = t.width, this.imageRotatedHeight = t.height) : (this.imageRotatedWidth = t.height, this.imageRotatedHeight = t.width));
  }
  resize(t, n, i = 0, a = 0) {
    this.canvasWidth == t && this.canvasHeight == n || (this.canvasWidth = t, this.canvasHeight = n, this.scale = 1, this.offsetX = i, this.offsetY = a);
  }
}
const Re = (r, t, n) => Math.min(Math.max(r, t), n);
function cr(r, t) {
  if (r.startsWith("rgba"))
    return r.replace(/[\d.]+$/, t.toString());
  const n = r.match(/\d+/g);
  if (!n || n.length !== 3)
    return `rgba(50, 50, 50, ${t})`;
  const [i, a, s] = n;
  return `rgba(${i}, ${a}, ${s}, ${t})`;
}
class wn {
  constructor(t, n, i, a, s, o, l, u, f, d, b, v, E = "rgb(255, 255, 255)", L = 0.5, A = "", C = "", T = 0, c = 25, p = 8, g = 2, h = 4, w = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (x) => {
      if (this.isDragging) {
        let _ = (x.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, m = (x.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const F = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, D = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        _ = Re(_, -this._xmin, F - this._xmax), m = Re(m, -this._ymin, D - this._ymax), this._xmin += _, this._ymin += m, this._xmax += _, this._ymax += m, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (x) => {
      if (this.isCreating) {
        let [_, m] = this.toBoxCoordinates(x.clientX, x.clientY);
        _ = (_ - this.offsetMouseX) / this.canvasWindow.scale, m = (m - this.offsetMouseY) / this.canvasWindow.scale, _ > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = _, this.creatingAnchorX = "xmin") : _ > this._xmin && _ < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = _ : _ > this._xmin && _ < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = _ : _ < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = _, this.creatingAnchorX = "xmax"), m > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = m, this.creatingAnchorY = "ymin") : m > this._ymin && m < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = m : m > this._ymin && m < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = m : m < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = m, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (x) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const _ = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, m = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Re(this._xmin, 0, _ - this.minSize), this._ymin = Re(this._ymin, 0, m - this.minSize), this._xmax = Re(this._xmax, this.minSize, _), this._ymax = Re(this._ymax, this.minSize, m), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > _ ? (this._xmin -= this._xmax - _, this._xmax = _) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > m ? (this._ymin -= this._ymax - m, this._ymax = m) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (x) => {
      if (this.isResizing) {
        const _ = x.clientX, m = x.clientY, F = (_ - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, D = (m - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, I = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, j = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += F, this._ymin += D, this._xmin = Re(this._xmin, 0, this._xmax - this.minSize), this._ymin = Re(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += F, this._ymin += D, this._xmax = Re(this._xmax, this._xmin + this.minSize, I), this._ymin = Re(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += F, this._ymax += D, this._xmax = Re(this._xmax, this._xmin + this.minSize, I), this._ymax = Re(this._ymax, this._ymin + this.minSize, j);
            break;
          case 3:
            this._xmin += F, this._ymax += D, this._xmin = Re(this._xmin, 0, this._xmax - this.minSize), this._ymax = Re(this._ymax, this._ymin + this.minSize, j);
            break;
          case 4:
            this._ymin += D, this._ymin = Re(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += F, this._xmax = Re(this._xmax, this._xmin + this.minSize, I);
            break;
          case 6:
            this._ymax += D, this._ymax = Re(this._ymax, this._ymin + this.minSize, j);
            break;
          case 7:
            this._xmin += F, this._xmin = Re(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = t, this.onFinishCreation = n, this.canvasWindow = i, this.canvasXmin = a, this.canvasYmin = s, this.canvasXmax = o, this.canvasYmax = l, this.scaleFactor = w, this.label = u, this.isDragging = !1, this.isCreating = !1, this._xmin = f, this._ymin = d, this._xmax = b, this._ymax = v, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p ?? 8, this.thickness = g, this.selectedThickness = h, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = c, this.color = E, this.alpha = L, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin", this.id = A, this.text = C, this.page = T;
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
  setSelected(t) {
    this.isSelected = t;
  }
  setScaleFactor(t) {
    let n = t / this.scaleFactor;
    this._xmin = Math.round(this._xmin * n), this._ymin = Math.round(this._ymin * n), this._xmax = Math.round(this._xmax * n), this._ymax = Math.round(this._ymax * n), this.applyUserScale(), this.scaleFactor = t;
  }
  /**
   * Scale box coordinates from (oldDisplayHeight, oldDisplayWidth) space into
   * the new display size after a rotation, using separate x/y scale factors
   * so aspect-ratio change from the rotation is handled correctly.
   */
  scaleFromRotatedDisplay(t, n) {
    this._xmin = Math.round(this._xmin * t), this._xmax = Math.round(this._xmax * t), this._ymin = Math.round(this._ymin * n), this._ymax = Math.round(this._ymax * n);
  }
  updateHandles() {
    const t = this.resizeHandleSize / 2, n = this.getWidth(), i = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - t,
        ymin: this.ymin - t,
        xmax: this.xmin + t,
        ymax: this.ymin + t,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - t,
        ymin: this.ymin - t,
        xmax: this.xmax + t,
        ymax: this.ymin + t,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - t,
        ymin: this.ymax - t,
        xmax: this.xmax + t,
        ymax: this.ymax + t,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - t,
        ymin: this.ymax - t,
        xmax: this.xmin + t,
        ymax: this.ymax + t,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + n / 2 - t,
        ymin: this.ymin - t,
        xmax: this.xmin + n / 2 + t,
        ymax: this.ymin + t,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - t,
        ymin: this.ymin + i / 2 - t,
        xmax: this.xmax + t,
        ymax: this.ymin + i / 2 + t,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + n / 2 - t,
        ymin: this.ymax - t,
        xmax: this.xmin + n / 2 + t,
        ymax: this.ymax + t,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - t,
        ymin: this.ymin + i / 2 - t,
        xmax: this.xmin + t,
        ymax: this.ymin + i / 2 + t,
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
  toCanvasCoordinates(t, n) {
    return t = t + this.canvasXmin, n = n + this.canvasYmin, [t, n];
  }
  toBoxCoordinates(t, n) {
    return t = t - this.canvasXmin, n = n - this.canvasYmin, [t, n];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(t) {
    let n, i;
    if (this.updateOffset(), t.beginPath(), [n, i] = this.toCanvasCoordinates(this.xmin, this.ymin), t.rect(n, i, this.getWidth(), this.getHeight()), t.fillStyle = cr(this.color, this.alpha), t.fill(), this.isSelected ? t.lineWidth = this.selectedThickness : t.lineWidth = this.thickness, t.strokeStyle = cr(this.color, 1), t.stroke(), t.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? t.font = "bold 14px Arial" : t.font = "12px Arial";
      const a = t.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, l = this.ymin - s;
      t.fillStyle = "white", [o, l] = this.toCanvasCoordinates(o, l), t.fillRect(o, l, a, s), t.lineWidth = 1, t.strokeStyle = "black", t.strokeRect(o, l, a, s), t.fillStyle = "black", t.fillText(this.label, o + 5, l + 15);
    }
    t.fillStyle = cr(this.color, 1);
    for (const a of this.resizeHandles)
      [n, i] = this.toCanvasCoordinates(a.xmin, a.ymin), t.fillRect(
        n,
        i,
        a.xmax - a.xmin,
        a.ymax - a.ymin
      );
  }
  startDrag(t) {
    this.isDragging = !0, this.offsetMouseX = t.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = t.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(t, n) {
    return [t, n] = this.toBoxCoordinates(t, n), t >= this.xmin && t <= this.xmax && n >= this.ymin && n <= this.ymax;
  }
  indexOfPointInsideHandle(t, n) {
    [t, n] = this.toBoxCoordinates(t, n);
    for (let i = 0; i < this.resizeHandles.length; i++) {
      const a = this.resizeHandles[i];
      if (t >= a.xmin && t <= a.xmax && n >= a.ymin && n <= a.ymax)
        return this.resizingHandleIndex = i, i;
    }
    return -1;
  }
  startCreating(t, n, i) {
    this.isCreating = !0, this.offsetMouseX = n, this.offsetMouseY = i, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(t, n) {
    this.resizingHandleIndex = t, this.isResizing = !0, this.offsetMouseX = n.clientX - this.resizeHandles[t].xmin, this.offsetMouseY = n.clientY - this.resizeHandles[t].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(t) {
    const [n, i, a, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (t) {
      case 1:
        this._xmin = this.canvasWindow.imageHeight - s, this._xmax = this.canvasWindow.imageHeight - a, this._ymin = n, this._ymax = i;
        break;
      case -1:
        this._xmin = a, this._xmax = s, this._ymin = this.canvasWindow.imageWidth - i, this._ymax = this.canvasWindow.imageWidth - n;
        break;
    }
    this.applyUserScale();
  }
}
class yn {
  constructor() {
    this.image = null, this.boxes = [], this.orientation = 0;
  }
}
const kl = "WORKER_PROXY_CONTEXT_KEY";
function mi() {
  return Tn(kl);
}
function Cl(r) {
  return r.host === window.location.host || r.host === "localhost:7860" || r.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  r.host === "lite.local";
}
function vi(r, t) {
  const n = t.toLowerCase();
  for (const [i, a] of Object.entries(r))
    if (i.toLowerCase() === n)
      return a;
}
function Al(r) {
  if (r == null)
    return !1;
  const t = new URL(r, window.location.href);
  return !(!Cl(t) || t.protocol !== "http:" && t.protocol !== "https:");
}
async function En(r) {
  if (r == null || !Al(r))
    return r;
  const t = mi();
  if (t == null)
    return r;
  const i = new URL(r, window.location.href).pathname;
  return t.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((a) => {
    if (a.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const s = new Blob([a.body], {
      type: vi(a.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
var Fl = e.from_html("<a><!></a>"), Tl = e.from_html("<a><!></a>");
function Sl(r, t) {
  const n = e.legacy_rest_props(t, ["children", "$$slots", "$$events", "$$legacy"]), i = e.legacy_rest_props(n, ["href", "download"]);
  e.push(t, !1);
  var a = this && this.__awaiter || function(A, C, T, c) {
    function p(g) {
      return g instanceof T ? g : new T(function(h) {
        h(g);
      });
    }
    return new (T || (T = Promise))(function(g, h) {
      function w(m) {
        try {
          _(c.next(m));
        } catch (F) {
          h(F);
        }
      }
      function x(m) {
        try {
          _(c.throw(m));
        } catch (F) {
          h(F);
        }
      }
      function _(m) {
        m.done ? g(m.value) : p(m.value).then(w, x);
      }
      _((c = c.apply(A, C || [])).next());
    });
  };
  let s = e.prop(t, "href", 8, void 0), o = e.prop(t, "download", 8);
  const l = et();
  let u = e.mutable_source(!1);
  const f = mi();
  function d() {
    return a(this, void 0, void 0, function* () {
      if (e.get(u))
        return;
      if (l("click"), s() == null)
        throw new Error("href is not defined.");
      if (f == null)
        throw new Error("Wasm worker proxy is not available.");
      const C = new URL(s(), window.location.href).pathname;
      e.set(u, !0), f.httpRequest({ method: "GET", path: C, headers: {}, query_string: "" }).then((T) => {
        if (T.status !== 200)
          throw new Error(`Failed to get file ${C} from the Wasm worker.`);
        const c = new Blob([T.body], { type: vi(T.headers, "content-type") }), p = URL.createObjectURL(c), g = document.createElement("a");
        g.href = p, g.download = o(), g.click(), URL.revokeObjectURL(p);
      }).finally(() => {
        e.set(u, !1);
      });
    });
  }
  e.init();
  var b = e.comment(), v = e.first_child(b);
  {
    var E = (A) => {
      var C = e.comment(), T = e.first_child(C);
      {
        var c = (g) => {
          var h = e.comment(), w = e.first_child(h);
          e.slot(w, t, "default", {}, null), e.append(g, h);
        }, p = (g) => {
          var h = Fl();
          e.attribute_effect(h, () => ({ ...i, href: s() }));
          var w = e.child(h);
          e.slot(w, t, "default", {}, null), e.reset(h), e.event("click", h, e.preventDefault(d)), e.append(g, h);
        };
        e.if(T, (g) => {
          e.get(u) ? g(c) : g(p, !1);
        });
      }
      e.append(A, C);
    }, L = (A) => {
      var C = Tl(), T = e.derived(() => l.bind(null, "click"));
      e.attribute_effect(C, () => ({
        href: s(),
        target: e.untrack(() => typeof window < "u" && window.__is_colab__ ? "_blank" : null),
        rel: "noopener noreferrer",
        download: o(),
        ...i
      }));
      var c = e.child(C);
      e.slot(c, t, "default", {}, null), e.reset(C), e.event("click", C, function(...p) {
        e.get(T)?.apply(this, p);
      }), e.append(A, C);
    };
    e.if(v, (A) => {
      e.deep_read_state(s()), e.untrack(() => f && should_proxy_wasm_src(s())) ? A(E) : A(L, !1);
    });
  }
  e.append(r, b), e.pop();
}
async function _i(r, t) {
  return r.map(
    (n) => new Bl({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class Bl {
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
    path: t,
    url: n,
    orig_name: i,
    size: a,
    blob: s,
    is_stream: o,
    mime_type: l,
    alt_text: u,
    b64: f
  }) {
    this.path = t, this.url = n, this.orig_name = i, this.size = a, this.blob = n ? void 0 : s, this.is_stream = o, this.mime_type = l, this.alt_text = u, this.b64 = f;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Mu extends TransformStream {
  #e = "";
  /** Constructs a new instance. */
  constructor(t = { allowCR: !1 }) {
    super({
      transform: (n, i) => {
        for (n = this.#e + n; ; ) {
          const a = n.indexOf(`
`), s = t.allowCR ? n.indexOf("\r") : -1;
          if (s !== -1 && s !== n.length - 1 && (a === -1 || a - 1 > s)) {
            i.enqueue(n.slice(0, s)), n = n.slice(s + 1);
            continue;
          }
          if (a === -1)
            break;
          const o = n[a - 1] === "\r" ? a - 1 : a;
          i.enqueue(n.slice(0, o)), n = n.slice(a + 1);
        }
        this.#e = n;
      },
      flush: (n) => {
        if (this.#e === "")
          return;
        const i = t.allowCR && this.#e.endsWith("\r") ? this.#e.slice(0, -1) : this.#e;
        n.enqueue(i);
      }
    });
  }
}
var Ll = e.from_html('<div class="file svelte-12marlv"><span><div class="progress-bar svelte-12marlv"><progress style="visibility:hidden;height:0;width:0;" max="100" class="svelte-12marlv"> </progress></div></span> <span class="file-name svelte-12marlv"> </span></div>'), Rl = e.from_html('<div><span class="uploading svelte-12marlv"> </span> <!></div>');
function Il(r, t) {
  e.push(t, !0);
  var n = this && this.__awaiter || function(T, c, p, g) {
    function h(w) {
      return w instanceof p ? w : new p(function(x) {
        x(w);
      });
    }
    return new (p || (p = Promise))(function(w, x) {
      function _(D) {
        try {
          F(g.next(D));
        } catch (I) {
          x(I);
        }
      }
      function m(D) {
        try {
          F(g.throw(D));
        } catch (I) {
          x(I);
        }
      }
      function F(D) {
        D.done ? w(D.value) : h(D.value).then(_, m);
      }
      F((g = g.apply(T, c || [])).next());
    });
  };
  let i, a = e.state(!1), s = e.state(void 0), o = e.derived(() => e.get(s) || e.get(l)[0]), l = e.state(e.proxy(t.files.map((T) => Object.assign(Object.assign({}, T), { progress: 0 }))));
  function u(T, c) {
    e.set(
      l,
      e.get(l).map((p) => (p.orig_name === T && (p.progress += c), p)),
      !0
    );
  }
  function f(T) {
    return T.progress * 100 / (T.size || 0) || 0;
  }
  Zt(() => n(void 0, void 0, void 0, function* () {
    if (i = yield t.stream_handler(new URL(`${t.root}/gradio_api/upload_progress?upload_id=${t.upload_id}`)), i == null)
      throw new Error("Event source is not defined");
    i.onmessage = function(T) {
      return n(this, void 0, void 0, function* () {
        const c = JSON.parse(T.data);
        e.get(a) || e.set(a, !0), c.msg === "done" ? (i?.close(), t.ondone === null || t.ondone === void 0 || t.ondone()) : (e.set(s, c, !0), u(c.orig_name, c.chunk_size));
      });
    };
  })), Sn(() => {
    (i != null || i != null) && i.close();
  });
  function d(T) {
    let c = 0;
    return T.forEach((p) => {
      c += f(p);
    }), document.documentElement.style.setProperty("--upload-progress-width", (c / T.length).toFixed(2) + "%"), c / T.length;
  }
  e.user_effect(() => {
    d(e.get(l));
  });
  var b = Rl();
  let v;
  var E = e.child(b), L = e.child(E);
  e.reset(E);
  var A = e.sibling(E, 2);
  {
    var C = (T) => {
      var c = Ll(), p = e.child(c), g = e.child(p), h = e.child(g), w = e.child(h, !0);
      e.reset(h), e.reset(g), e.reset(p);
      var x = e.sibling(p, 2), _ = e.child(x, !0);
      e.reset(x), e.reset(c), e.template_effect(
        (m, F) => {
          e.set_value(h, m), e.set_text(w, F), e.set_text(_, e.get(o).orig_name);
        },
        [
          () => f(e.get(o)),
          () => f(e.get(o))
        ]
      ), e.append(T, c);
    };
    e.if(A, (T) => {
      e.get(o) && T(C);
    });
  }
  e.reset(b), e.template_effect(() => {
    v = e.set_class(b, 1, "wrap svelte-12marlv", null, v, { progress: e.get(a) }), e.set_text(L, `Uploading ${e.get(l).length ?? ""}
		${e.get(l).length > 1 ? "files" : "file"}...`);
  }), e.append(r, b), e.pop();
}
function Ml() {
  let r, t;
  return {
    drag(n, i = {}) {
      t = i;
      function a() {
        r = document.createElement("input"), r.type = "file", r.style.display = "none", r.setAttribute("aria-label", "File upload"), r.setAttribute("data-testid", "file-upload");
        const b = Array.isArray(t.accepted_types) ? t.accepted_types.join(",") : t.accepted_types || void 0;
        b && (r.accept = b), r.multiple = t.mode === "multiple" || !1, t.mode === "directory" && (r.webkitdirectory = !0, r.setAttribute("directory", ""), r.setAttribute("mozdirectory", "")), n.appendChild(r);
      }
      a();
      function s(b) {
        b.preventDefault(), b.stopPropagation();
      }
      function o(b) {
        b.preventDefault(), b.stopPropagation(), t.on_drag_change?.(!0);
      }
      function l(b) {
        b.preventDefault(), b.stopPropagation(), t.on_drag_change?.(!1);
      }
      function u(b) {
        if (b.preventDefault(), b.stopPropagation(), t.on_drag_change?.(!1), !b.dataTransfer?.files)
          return;
        const v = Array.from(b.dataTransfer.files);
        v.length > 0 && t.on_files?.(v);
      }
      function f() {
        t.disable_click || (r.value = "", r.click());
      }
      function d() {
        if (r.files) {
          const b = Array.from(r.files);
          b.length > 0 && t.on_files?.(b);
        }
      }
      return n.addEventListener("drag", s), n.addEventListener("dragstart", s), n.addEventListener("dragend", s), n.addEventListener("dragover", s), n.addEventListener("dragenter", o), n.addEventListener("dragleave", l), n.addEventListener("drop", u), n.addEventListener("click", f), r.addEventListener("change", d), {
        update(b) {
          t = b, r.remove(), a(), r.addEventListener("change", d);
        },
        destroy() {
          n.removeEventListener("drag", s), n.removeEventListener("dragstart", s), n.removeEventListener("dragend", s), n.removeEventListener("dragover", s), n.removeEventListener("dragenter", o), n.removeEventListener("dragleave", l), n.removeEventListener("drop", u), n.removeEventListener("click", f), r.removeEventListener("change", d), r.remove();
        }
      };
    },
    open_file_upload() {
      r && (r.value = "", r.click());
    }
  };
}
var Hl = e.from_html("<button><!></button>"), Ol = e.from_html('<button aria-dropeffect="copy"><!></button>');
function Nl(r, t) {
  e.push(t, !0);
  var n = this && this.__awaiter || function(B, M, S, k) {
    function G(H) {
      return H instanceof S ? H : new S(function(z) {
        z(H);
      });
    }
    return new (S || (S = Promise))(function(H, z) {
      function oe(Ae) {
        try {
          ye(k.next(Ae));
        } catch (ce) {
          z(ce);
        }
      }
      function _e(Ae) {
        try {
          ye(k.throw(Ae));
        } catch (ce) {
          z(ce);
        }
      }
      function ye(Ae) {
        Ae.done ? H(Ae.value) : G(Ae.value).then(oe, _e);
      }
      ye((k = k.apply(B, M || [])).next());
    });
  };
  const { drag: i, open_file_upload: a } = Ml();
  let s = e.prop(t, "filetype", 3, null), o = e.prop(t, "dragging", 15, !1), l = e.prop(t, "boundedheight", 3, !0), u = e.prop(t, "center", 3, !0), f = e.prop(t, "flex", 3, !0), d = e.prop(t, "file_count", 3, "single"), b = e.prop(t, "disable_click", 3, !1), v = e.prop(t, "hidden", 3, !1), E = e.prop(t, "format", 3, "file"), L = e.prop(t, "uploading", 15, !1), A = e.prop(t, "show_progress", 3, !0), C = e.prop(t, "max_file_size", 3, null), T = e.prop(t, "icon_upload", 3, !1), c = e.prop(t, "height", 3, void 0), p = e.prop(t, "aria_label", 3, void 0), g = e.prop(t, "upload_promise", 15);
  function h() {
    a();
  }
  let w = "", x, _ = e.state(null), m = null, D = (() => {
    if (typeof navigator < "u") {
      const B = navigator.userAgent.toLowerCase();
      return B.indexOf("iphone") > -1 || B.indexOf("ipad") > -1;
    }
    return !1;
  })();
  const I = ["image", "video", "audio", "text", "file"], j = (B) => D && B.startsWith(".") ? (m = !0, B) : D && B.includes("file/*") ? "*" : B.startsWith(".") || B.endsWith("/*") ? B : I.includes(B) ? B + "/*" : "." + B;
  e.user_effect(() => {
    if (s() == null)
      e.set(_, null);
    else if (typeof s() == "string")
      e.set(_, j(s()), !0);
    else if (D && s().includes("file/*"))
      e.set(_, "*");
    else {
      const B = s().map(j);
      e.set(_, B.join(", "), !0);
    }
  });
  function q() {
    navigator.clipboard.read().then((B) => n(this, void 0, void 0, function* () {
      for (let M = 0; M < B.length; M++) {
        const S = B[M].types.find((k) => k.startsWith("image/"));
        if (S) {
          B[M].getType(S).then((k) => n(this, void 0, void 0, function* () {
            const G = new File([k], `clipboard.${S.replace("image/", "")}`);
            yield V([G]);
          }));
          break;
        }
      }
    }));
  }
  function fe() {
    a();
  }
  function Q(B, M) {
    return n(this, void 0, void 0, function* () {
      return M ? w = M : w = Math.random().toString(36).substring(2, 15), yield Dr(), L(!0), g(new Promise((S) => n(this, void 0, void 0, function* () {
        try {
          const k = yield t.upload(B, t.root, w, C() !== null && C() !== void 0 ? C() : 1 / 0);
          t.onload === null || t.onload === void 0 || t.onload(d() === "single" ? k?.[0] : k), S(k || []), L(!1);
        } catch (k) {
          t.onerror === null || t.onerror === void 0 || t.onerror(k.message), L(!1), S([]);
        }
      }))), g();
    });
  }
  function pe(B, M, S) {
    if (!B || B === "*" || B === "file/*" || Array.isArray(B) && B.some((G) => G === "*" || G === "file/*"))
      return !0;
    let k;
    if (typeof B == "string")
      k = B.split(",").map((G) => G.trim());
    else if (Array.isArray(B))
      k = B;
    else
      return !1;
    return k.includes(M) || k.some((G) => {
      const [H] = G.split("/").map((z) => z.trim());
      return G.endsWith("/*") && S.startsWith(H + "/");
    });
  }
  function V(B, M) {
    return n(this, void 0, void 0, function* () {
      if (!B.length)
        return;
      let S = B.map((k) => new File([k], k instanceof File ? k.name : "file", { type: k.type }));
      return D && m && (S = S.filter((k) => W(k) ? !0 : (t.onerror === null || t.onerror === void 0 || t.onerror(`Invalid file type: ${k.name}. Only ${s()} allowed.`), !1)), S.length === 0) ? [] : (x = yield _i(S), yield Q(x, M));
    });
  }
  function W(B) {
    return s() ? (Array.isArray(s()) ? s() : [s()]).some((S) => {
      const k = j(S);
      if (k.startsWith("."))
        return B.name.toLowerCase().endsWith(k.toLowerCase());
      if (k === "*")
        return !0;
      if (k.endsWith("/*")) {
        const [G] = k.split("/");
        return B.type.startsWith(G + "/");
      }
      return B.type === k;
    }) : !0;
  }
  function ue(B) {
    return n(this, void 0, void 0, function* () {
      const M = B.filter((S) => {
        const k = "." + S.name.toLowerCase().split(".").pop();
        return k && pe(e.get(_), k, S.type) || (k && Array.isArray(s()) ? s().includes(k) : k === s()) ? !0 : (t.onerror === null || t.onerror === void 0 || t.onerror(`Invalid file type only ${s()} allowed.`), !1);
      });
      if (E() != "blob")
        yield V(M);
      else {
        if (d() === "single") {
          t.onload === null || t.onload === void 0 || t.onload(M[0]);
          return;
        }
        t.onload === null || t.onload === void 0 || t.onload(M);
      }
    });
  }
  function ie(B) {
    return n(this, void 0, void 0, function* () {
      var M;
      if (o(!1), !(!((M = B.dataTransfer) === null || M === void 0) && M.files)) return;
      const S = Array.from(B.dataTransfer.files).filter(W);
      if (E() != "blob")
        yield V(S);
      else {
        if (d() === "single") {
          t.onload === null || t.onload === void 0 || t.onload(S[0]);
          return;
        }
        t.onload === null || t.onload === void 0 || t.onload(S);
      }
    });
  }
  var te = {
    open_upload: h,
    paste_clipboard: q,
    open_file_upload: fe,
    load_files: V,
    load_files_from_drop: ie
  }, De = e.comment(), ge = e.first_child(De);
  {
    var K = (B) => {
      var M = Hl();
      M.__click = q;
      let S, k;
      var G = e.child(M);
      {
        var H = (z) => {
          var oe = e.comment(), _e = e.first_child(oe);
          e.snippet(_e, () => t.children), e.append(z, oe);
        };
        e.if(G, (z) => {
          t.children && z(H);
        });
      }
      e.reset(M), e.template_effect(() => {
        e.set_attribute(M, "tabindex", v() ? -1 : 0), e.set_attribute(M, "aria-label", p() || "Paste from clipboard"), S = e.set_class(M, 1, "svelte-tgi0k0", null, S, {
          hidden: v(),
          center: u(),
          boundedheight: l(),
          flex: f(),
          "icon-mode": T()
        }), k = e.set_style(M, "", k, {
          height: T() ? "" : c() ? typeof c() == "number" ? c() + "px" : c() : "100%"
        });
      }), e.append(B, M);
    }, P = (B) => {
      var M = e.comment(), S = e.first_child(M);
      {
        var k = (H) => {
          var z = e.comment(), oe = e.first_child(z);
          {
            var _e = (ye) => {
              Il(ye, {
                get root() {
                  return t.root;
                },
                get upload_id() {
                  return w;
                },
                get files() {
                  return x;
                },
                get stream_handler() {
                  return t.stream_handler;
                }
              });
            };
            e.if(oe, (ye) => {
              v() || ye(_e);
            });
          }
          e.append(H, z);
        }, G = (H) => {
          var z = Ol();
          let oe, _e;
          var ye = e.child(z);
          {
            var Ae = (ce) => {
              var Ee = e.comment(), $ = e.first_child(Ee);
              e.snippet($, () => t.children), e.append(ce, Ee);
            };
            e.if(ye, (ce) => {
              t.children && ce(Ae);
            });
          }
          e.reset(z), e.action(z, (ce, Ee) => i?.(ce, Ee), () => ({
            on_drag_change: (ce) => o(ce),
            on_files: (ce) => ue(ce),
            accepted_types: e.get(_),
            mode: d(),
            disable_click: b()
          })), e.template_effect(() => {
            e.set_attribute(z, "tabindex", v() ? -1 : 0), e.set_attribute(z, "aria-label", p() || "Click to upload or drop files"), oe = e.set_class(z, 1, "svelte-tgi0k0", null, oe, {
              hidden: v(),
              center: u(),
              boundedheight: l(),
              flex: f(),
              disable_click: b(),
              "icon-mode": T()
            }), _e = e.set_style(z, "", _e, {
              height: T() ? "" : c() ? typeof c() == "number" ? c() + "px" : c() : "100%"
            });
          }), e.append(H, z);
        };
        e.if(
          S,
          (H) => {
            L() && A() ? H(k) : H(G, !1);
          },
          !0
        );
      }
      e.append(B, M);
    };
    e.if(ge, (B) => {
      s() === "clipboard" ? B(K) : B(P, !1);
    });
  }
  return e.append(r, De), e.pop(te);
}
e.delegate(["click"]);
e.from_html("<!> <!> <!> <!> <!>", 1);
e.from_html("<img/>");
e.from_html("<!> <!> <!>", 1);
e.from_html('<div class="image-container svelte-1vq0uw1"><!> <button class="svelte-1vq0uw1"><div><!></div></button></div>');
e.from_html("<!> <!>", 1);
var Pl = e.from_html('<button class="svelte-9xp153"><div class="wrap svelte-9xp153"><span class="icon-wrap svelte-9xp153"><!></span> </div></button>');
function zl(r, t) {
  e.push(t, !1);
  const n = et();
  e.init();
  var i = Pl();
  e.set_style(i, "", {}, { height: "100%" });
  var a = e.child(i), s = e.child(a), o = e.child(s);
  pi(o), e.reset(s);
  var l = e.sibling(s);
  l.nodeValue = " Click to Access Webcam", e.reset(a), e.reset(i), e.event("click", i, () => n("click")), e.append(r, i), e.pop();
}
function Ul() {
  return navigator.mediaDevices.enumerateDevices();
}
function Gl(r, t) {
  t.srcObject = r, t.muted = !0, t.play();
}
async function Dn(r, t, n, i) {
  const a = {
    video: i ? { deviceId: { exact: i }, ...n?.video } : n?.video || {
      width: { ideal: 1920 },
      height: { ideal: 1440 }
    },
    audio: r && (n?.audio ?? !0)
    // Defaults to true if not specified
  };
  return navigator.mediaDevices.getUserMedia(a).then((s) => (Gl(s, t), s));
}
function ql(r) {
  return r.filter((n) => n.kind === "videoinput");
}
var jl = e.from_html('<div title="grant webcam access" style="height: 100%"><!></div>'), Vl = e.from_html('<div class="icon-with-text svelte-1d3tw37" style="width:var(--size-24);"><div class="icon color-primary svelte-1d3tw37" title="spinner"><!></div> </div>'), Zl = e.from_html('<div class="icon-with-text svelte-1d3tw37"><div class="icon color-primary svelte-1d3tw37" title="stop recording"><!></div> </div>'), Wl = e.from_html('<div class="icon-with-text svelte-1d3tw37"><div class="icon color-primary svelte-1d3tw37" title="start recording"><!></div> </div>'), Xl = e.from_html('<div class="icon svelte-1d3tw37" title="capture photo"><!></div>'), Yl = e.from_html('<button class="icon svelte-1d3tw37" aria-label="select input source"><!></button>'), Kl = e.from_html('<option class="svelte-1d3tw37"> </option>'), Ql = e.from_html('<option class="svelte-1d3tw37"> </option>'), Jl = e.from_html('<select class="select-wrap svelte-1d3tw37" aria-label="select source"><!></select>'), $l = e.from_html('<div class="button-wrap svelte-1d3tw37"><button class="svelte-1d3tw37"><!></button> <!></div> <!>', 1), eu = e.from_html('<div class="wrap svelte-1d3tw37"><!>  <video></video> <img/> <!></div>', 2);
function tu(r, t) {
  e.push(t, !1);
  var n = this && this.__awaiter || function(S, k, G, H) {
    function z(oe) {
      return oe instanceof G ? oe : new G(function(_e) {
        _e(oe);
      });
    }
    return new (G || (G = Promise))(function(oe, _e) {
      function ye(Ee) {
        try {
          ce(H.next(Ee));
        } catch ($) {
          _e($);
        }
      }
      function Ae(Ee) {
        try {
          ce(H.throw(Ee));
        } catch ($) {
          _e($);
        }
      }
      function ce(Ee) {
        Ee.done ? oe(Ee.value) : z(Ee.value).then(ye, Ae);
      }
      ce((H = H.apply(S, k || [])).next());
    });
  };
  let i = e.mutable_source(), a = e.mutable_source([]), s = e.mutable_source(null), o = e.prop(t, "stream_state", 8, "closed"), l, u = e.prop(t, "streaming", 8, !1), f = e.prop(t, "pending", 8, !1), d = e.prop(t, "root", 8, ""), b = e.prop(t, "stream_every", 8, 1), v = e.prop(t, "mode", 8, "image"), E = e.prop(t, "mirror_webcam", 8), L = e.prop(t, "include_audio", 8), A = e.prop(t, "webcam_constraints", 8, null), C = e.prop(t, "i18n", 8), T = e.prop(t, "upload", 8), c = e.prop(t, "value", 8, null), p = e.prop(t, "time_limit", 8, null);
  const g = et();
  Zt(() => {
    l = document.createElement("canvas"), u() && v() === "image" && window.setInterval(
      () => {
        e.get(i) && !f() && x();
      },
      b() * 1e3
    );
  });
  const h = (S) => n(void 0, void 0, void 0, function* () {
    const G = S.target.value;
    yield Dn(L(), e.get(i), A(), G).then((H) => n(void 0, void 0, void 0, function* () {
      F = H, e.set(s, e.get(a).find((z) => z.deviceId === G) || null), e.set(Q, !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Dn(L(), e.get(i), A()).then((S) => n(this, void 0, void 0, function* () {
          e.set(q, !0), e.set(a, yield Ul()), F = S;
        })).then(() => ql(e.get(a))).then((S) => {
          e.set(a, S);
          const k = F.getTracks().map((G) => {
            var H;
            return (H = G.getSettings()) === null || H === void 0 ? void 0 : H.deviceId;
          })[0];
          e.set(s, k && S.find((G) => G.deviceId === k) || e.get(a)[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", C()("image.no_webcam_support"));
      } catch (S) {
        if (S instanceof DOMException && S.name == "NotAllowedError")
          g("error", C()("image.allow_webcam_access"));
        else
          throw S;
      }
    });
  }
  function x() {
    if ((!u() || u() && e.get(_)) && e.get(i).videoWidth && e.get(i).videoHeight) {
      var S = l.getContext("2d");
      if (l.width = e.get(i).videoWidth, l.height = e.get(i).videoHeight, S.drawImage(e.get(i), 0, 0, e.get(i).videoWidth, e.get(i).videoHeight), E() && (S.scale(-1, 1), S.drawImage(e.get(i), -e.get(i).videoWidth, 0)), u() && (!e.get(_) || o() === "waiting"))
        return;
      if (u()) {
        const k = l.toDataURL("image/jpeg");
        g("stream", k);
        return;
      }
      l.toBlob(
        (k) => {
          g(u() ? "stream" : "capture", k);
        },
        `image/${u() ? "jpeg" : "png"}`,
        0.8
      );
    }
  }
  let _ = e.mutable_source(!1), m = [], F, D, I;
  function j() {
    if (e.get(_)) {
      I.stop();
      let S = new Blob(m, { type: D }), k = new FileReader();
      k.onload = function(G) {
        return n(this, void 0, void 0, function* () {
          var H;
          if (G.target) {
            let z = new File([S], "sample." + D.substring(6));
            const oe = yield _i([z]);
            let _e = ((H = yield T()(oe, d())) === null || H === void 0 ? void 0 : H.filter(Boolean))[0];
            g("capture", _e), g("stop_recording");
          }
        });
      }, k.readAsDataURL(S);
    } else if (typeof MediaRecorder < "u") {
      g("start_recording"), m = [];
      let S = ["video/webm", "video/mp4"];
      for (let k of S)
        if (MediaRecorder.isTypeSupported(k)) {
          D = k;
          break;
        }
      if (D === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      I = new MediaRecorder(F, { mimeType: D }), I.addEventListener("dataavailable", function(k) {
        m.push(k.data);
      }), I.start(200);
    }
    e.set(_, !e.get(_));
  }
  let q = e.mutable_source(!1);
  function fe({ destroy: S } = {}) {
    v() === "image" && u() && e.set(_, !e.get(_)), S || (v() === "image" ? x() : j()), !e.get(_) && F && g("close_stream");
  }
  let Q = e.mutable_source(!1);
  function pe(S, k) {
    const G = (H) => {
      S && !S.contains(H.target) && !H.defaultPrevented && k(H);
    };
    return document.addEventListener("click", G, !0), {
      destroy() {
        document.removeEventListener("click", G, !0);
      }
    };
  }
  function V(S) {
    S.preventDefault(), S.stopPropagation(), e.set(Q, !1);
  }
  Sn(() => {
    typeof window > "u" || (fe({ destroy: !0 }), F?.getTracks().forEach((S) => S.stop()));
  });
  var W = { click_outside: pe };
  e.init();
  var ue = eu(), ie = e.child(ue);
  El(ie, {
    get time_limit() {
      return p();
    }
  });
  var te = e.sibling(ie, 2);
  let De;
  e.bind_this(te, (S) => e.set(i, S), () => e.get(i));
  var ge = e.sibling(te, 2);
  let K;
  var P = e.sibling(ge, 2);
  {
    var B = (S) => {
      var k = jl(), G = e.child(k);
      zl(G, { $$events: { click: async () => w() } }), e.reset(k), e.transition(1, k, () => yi, () => ({ delay: 100, duration: 200 })), e.append(S, k);
    }, M = (S) => {
      var k = $l(), G = e.first_child(k), H = e.child(G), z = e.child(H);
      {
        var oe = ($) => {
          var R = e.comment(), N = e.first_child(R);
          {
            var ee = (J) => {
              var X = Vl(), be = e.child(X), Fe = e.child(be);
              Vo(Fe), e.reset(be);
              var me = e.sibling(be);
              e.reset(X), e.template_effect((ae) => e.set_text(me, ` ${ae ?? ""}`), [
                () => (e.deep_read_state(C()), e.untrack(() => C()("audio.waiting")))
              ]), e.append(J, X);
            }, le = (J) => {
              var X = e.comment(), be = e.first_child(X);
              {
                var Fe = (ae) => {
                  var he = Zl(), Ce = e.child(he), Oe = e.child(Ce);
                  No(Oe, {}), e.reset(Ce);
                  var Ne = e.sibling(Ce);
                  e.reset(he), e.template_effect((Me) => e.set_text(Ne, ` ${Me ?? ""}`), [
                    () => (e.deep_read_state(C()), e.untrack(() => C()("audio.stop")))
                  ]), e.append(ae, he);
                }, me = (ae) => {
                  var he = Wl(), Ce = e.child(he), Oe = e.child(Ce);
                  Do(Oe), e.reset(Ce);
                  var Ne = e.sibling(Ce);
                  e.reset(he), e.template_effect((Me) => e.set_text(Ne, ` ${Me ?? ""}`), [
                    () => (e.deep_read_state(C()), e.untrack(() => C()("audio.record")))
                  ]), e.append(ae, he);
                };
                e.if(
                  be,
                  (ae) => {
                    u() && o() === "open" || !u() && e.get(_) ? ae(Fe) : ae(me, !1);
                  },
                  !0
                );
              }
              e.append(J, X);
            };
            e.if(N, (J) => {
              u() && o() === "waiting" ? J(ee) : J(le, !1);
            });
          }
          e.append($, R);
        }, _e = ($) => {
          var R = Xl(), N = e.child(R);
          yo(N), e.reset(R), e.append($, R);
        };
        e.if(z, ($) => {
          v() === "video" || u() ? $(oe) : $(_e, !1);
        });
      }
      e.reset(H);
      var ye = e.sibling(H, 2);
      {
        var Ae = ($) => {
          var R = Yl(), N = e.child(R);
          Bo(N), e.reset(R), e.event("click", R, () => e.set(Q, !0)), e.append($, R);
        };
        e.if(ye, ($) => {
          e.get(_) || $(Ae);
        });
      }
      e.reset(G);
      var ce = e.sibling(G, 2);
      {
        var Ee = ($) => {
          var R = Jl(), N = e.child(R);
          {
            var ee = (J) => {
              var X = Kl(), be = e.child(X, !0);
              e.reset(X), X.value = X.__value = "", e.template_effect((Fe) => e.set_text(be, Fe), [
                () => (e.deep_read_state(C()), e.untrack(() => C()("common.no_devices")))
              ]), e.append(J, X);
            }, le = (J) => {
              var X = e.comment(), be = e.first_child(X);
              e.each(be, 1, () => e.get(a), e.index, (Fe, me) => {
                var ae = Ql(), he = e.child(ae, !0);
                e.reset(ae);
                var Ce = {};
                e.template_effect(() => {
                  e.set_selected(ae, (e.get(s), e.get(me), e.untrack(() => e.get(s).deviceId === e.get(me).deviceId))), e.set_text(he, (e.get(me), e.untrack(() => e.get(me).label))), Ce !== (Ce = (e.get(me), e.untrack(() => e.get(me).deviceId))) && (ae.value = (ae.__value = (e.get(me), e.untrack(() => e.get(me).deviceId))) ?? "");
                }), e.append(Fe, ae);
              }), e.append(J, X);
            };
            e.if(N, (J) => {
              e.get(a), e.untrack(() => e.get(a).length === 0) ? J(ee) : J(le, !1);
            });
          }
          e.reset(R), e.action(R, (J, X) => pe?.(J, X), () => V), e.effect(() => e.event("change", R, h)), e.append($, R);
        };
        e.if(ce, ($) => {
          e.get(Q) && e.get(s) && $(Ee);
        });
      }
      e.template_effect(() => e.set_attribute(H, "aria-label", v() === "image" ? "capture photo" : "start recording")), e.event("click", H, () => fe()), e.append(S, k);
    };
    e.if(P, (S) => {
      e.get(q) ? S(M, !1) : S(B);
    });
  }
  return e.reset(ue), e.template_effect(() => {
    De = e.set_class(te, 1, "svelte-1d3tw37", null, De, {
      flip: E(),
      hide: !e.get(q) || e.get(q) && !!c()
    }), e.set_attribute(ge, "src", (e.deep_read_state(c()), e.untrack(() => c()?.url))), K = e.set_class(ge, 1, "svelte-1d3tw37", null, K, {
      hide: !e.get(q) || e.get(q) && !c()
    });
  }), e.append(r, ue), e.bind_prop(t, "click_outside", pe), e.pop(W);
}
e.from_html("<!> <!>", 1);
e.from_html("<div><!></div>");
e.from_html('<!> <div data-testid="image" class="image-container svelte-12il1o7"><!> <div><!> <!></div> <!></div>', 1);
e.from_html("<div><!></div>");
e.from_html("<!> <!>", 1);
e.from_html("<!> <!>", 1);
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><line x1="4" y1="12" x2="20" y2="12" style="fill:none;stroke-width:2px;"></line><line x1="12" y1="4" x2="12" y2="20" style="fill:none;stroke-width:2px;"></line></svg>');
var ru = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><rect x="2" y="2" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="17" y="2" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="2" y="17" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><rect x="17" y="17" width="5" height="5" rx="1" ry="1" stroke-width="2" fill="none"></rect><line x1="7.5" y1="4.5" x2="16" y2="4.5" style="stroke-width:2px;"></line><line x1="7.5" y1="19.5" x2="16" y2="19.5" style="stroke-width:2px;"></line><line x1="4.5" y1="8" x2="4.5" y2="16" style="stroke-width:2px;"></line><line x1="19.5" y1="8" x2="19.5" y2="16" style="stroke-width:2px;"></line></svg>');
function kn(r) {
  var t = ru();
  e.append(r, t);
}
var nu = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z" fill="none" stroke-width="2"></path></svg>');
function Cn(r) {
  var t = nu();
  e.append(r, t);
}
var iu = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" fill="none" stroke-width="2"></path></svg>');
function An(r) {
  var t = iu();
  e.append(r, t);
}
var au = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><path d="M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"></path><path d="M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"></path></svg>');
function Fn(r) {
  var t = au();
  e.append(r, t);
}
var su = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"></path></svg>');
function ou(r) {
  var t = su();
  e.append(r, t);
}
var lu = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns="http://www.w3.org/2000/svg"><path d="M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"></path></svg>');
function uu(r) {
  var t = lu();
  e.append(r, t);
}
var cu = e.from_html('<div class="lock-wrap svelte-n7dbqn"><button aria-label="Lock label detail"><!></button></div>'), hu = e.from_html("<option> </option>"), du = e.from_html('<button class="modal-btn modal-btn-danger svelte-n7dbqn">Remove</button>'), fu = e.from_html('<div class="modal svelte-n7dbqn"><div class="modal-container svelte-n7dbqn"><span class="modal-content svelte-n7dbqn"><!> <div class="field-wrap svelte-n7dbqn"><label class="field-label svelte-n7dbqn">Label</label> <input class="label-input svelte-n7dbqn" type="text"/> <datalist></datalist></div> <div class="field-wrap color-wrap svelte-n7dbqn"><label class="field-label svelte-n7dbqn">Color</label> <input class="color-input svelte-n7dbqn" type="color"/></div> <div class="btn-wrap svelte-n7dbqn"><button class="modal-btn svelte-n7dbqn">Cancel</button> <!> <button class="modal-btn modal-btn-primary svelte-n7dbqn">OK</button></div></span></div></div>');
function hr(r, t) {
  e.push(t, !1);
  const n = e.mutable_source();
  let i = e.prop(t, "visible", 8, !1), a = e.prop(t, "currentLabel", 12, ""), s = e.prop(t, "currentColor", 12, ""), o = e.prop(t, "choices", 24, () => []), l = e.prop(t, "choicesColors", 24, () => []), u = e.prop(t, "showRemove", 8, !0), f = e.prop(t, "labelDetailLock", 12, !1);
  const d = Math.random().toString(36).slice(2, 8), b = et();
  function v(P) {
    return typeof P == "string" ? P : Array.isArray(P) && P[0] != null ? String(P[0]) : "";
  }
  let E = e.mutable_source(a()), L = "", A = e.mutable_source(!1);
  function C(P) {
    b("change", {
      label: a(),
      color: s(),
      lock: f(),
      ret: P
      // -1: remove, 0: cancel, 1: ok
    });
  }
  function T(P) {
    const B = e.get(n).indexOf(P);
    B >= 0 && Array.isArray(l()) && B < l().length && s(l()[B]);
  }
  function c() {
    e.set(A, !0), L = e.get(E), e.set(
      E,
      ""
      // clear so the datalist dropdown shows all options immediately
    );
  }
  function p() {
    e.set(A, !1), e.get(E) === "" && (e.set(E, L), a(L));
  }
  function g(P) {
    const B = P.target.value;
    e.set(E, B), a(B), T(B);
  }
  function h(P) {
    s(P.target.value);
  }
  function w(P) {
    if (!(!i() || !P.key))
      switch (P.key.toLowerCase()) {
        case "enter":
          C(1);
          break;
        case "escape":
          C(0);
          break;
      }
  }
  function x() {
    f(!f());
  }
  Zt(() => (document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w))), e.legacy_pre_effect(() => e.deep_read_state(o()), () => {
    e.set(n, Array.isArray(o()) ? o().map(v).filter((P) => P !== "") : []);
  }), e.legacy_pre_effect(() => (e.get(A), e.deep_read_state(a())), () => {
    e.get(A) || e.set(E, a());
  }), e.legacy_pre_effect_reset(), e.init();
  var _ = fu();
  let m;
  var F = e.child(_), D = e.child(F), I = e.child(D);
  {
    var j = (P) => {
      var B = cu(), M = e.child(B);
      let S;
      var k = e.child(M);
      {
        var G = (z) => {
          ou(z);
        }, H = (z) => {
          uu(z);
        };
        e.if(k, (z) => {
          f() ? z(G) : z(H, !1);
        });
      }
      e.reset(M), e.reset(B), e.template_effect(() => S = e.set_class(M, 1, "icon svelte-n7dbqn", null, S, { selected: f() })), e.event("click", M, x), e.append(P, B);
    };
    e.if(I, (P) => {
      u() || P(j);
    });
  }
  var q = e.sibling(I, 2), fe = e.child(q), Q = e.sibling(fe, 2);
  e.remove_input_defaults(Q);
  var pe = e.sibling(Q, 2);
  e.each(pe, 5, () => e.get(n), e.index, (P, B) => {
    var M = hu(), S = e.child(M, !0);
    e.reset(M);
    var k = {};
    e.template_effect(() => {
      e.set_text(S, e.get(B)), k !== (k = e.get(B)) && (M.value = (M.__value = e.get(B)) ?? "");
    }), e.append(P, M);
  }), e.reset(pe), e.reset(q);
  var V = e.sibling(q, 2), W = e.child(V), ue = e.sibling(W, 2);
  e.remove_input_defaults(ue), e.reset(V);
  var ie = e.sibling(V, 2), te = e.child(ie), De = e.sibling(te, 2);
  {
    var ge = (P) => {
      var B = du();
      e.event("click", B, () => C(-1)), e.append(P, B);
    };
    e.if(De, (P) => {
      u() && P(ge);
    });
  }
  var K = e.sibling(De, 2);
  e.reset(ie), e.reset(D), e.reset(F), e.reset(_), e.template_effect(() => {
    m = e.set_style(_, "", m, { display: i() ? "" : "none" }), e.set_attribute(fe, "for", `label-input-${d ?? ""}`), e.set_attribute(Q, "id", `label-input-${d ?? ""}`), e.set_attribute(Q, "list", `label-choices-${d ?? ""}`), e.set_value(Q, e.get(E)), e.set_attribute(Q, "placeholder", e.get(A) ? "Type or pick from list…" : ""), e.set_attribute(pe, "id", `label-choices-${d ?? ""}`), e.set_attribute(W, "for", `color-input-${d ?? ""}`), e.set_attribute(ue, "id", `color-input-${d ?? ""}`), e.set_value(ue, s() || "#000000");
  }), e.event("focus", Q, c), e.event("blur", Q, p), e.event("input", Q, g), e.event("change", Q, g), e.event("input", ue, h), e.event("change", ue, h), e.event("click", te, () => C(0)), e.event("click", K, () => C(1)), e.append(r, _), e.pop();
}
const Je = [
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
var pu = e.from_html('<button class="icon svelte-1u4bfll" aria-label="Remove box" title="Remove box (Del)"><!></button>'), gu = e.from_html('<button class="icon svelte-1u4bfll" aria-label="Edit label" title="Edit label"><!></button>'), mu = e.from_html('<span class="canvas-control svelte-1u4bfll"><button aria-label="Create box" title="Create box (C)"><!></button> <button aria-label="Drag boxes" title="Drag boxes (D)"><!></button> <!> <!> <button class="icon svelte-1u4bfll" aria-label="Rotate counterclockwise" title="Rotate counterclockwise"><!></button> <button class="icon svelte-1u4bfll" aria-label="Rotate clockwise" title="Rotate clockwise"><!></button></span>'), vu = e.from_html('<button class="icon svelte-1u4bfll" aria-label="Remove box" title="Remove box (Del)"><!></button>'), _u = e.from_html('<button class="icon svelte-1u4bfll" aria-label="Edit label" title="Edit label"><!></button>'), bu = e.from_html('<span class="canvas-control svelte-1u4bfll"><button aria-label="Create box" title="Create box (C)"><!></button> <button aria-label="Drag boxes" title="Drag boxes (D)"><!></button> <!> <!> <button class="icon svelte-1u4bfll" aria-label="Rotate counterclockwise" title="Rotate counterclockwise"><!></button> <button class="icon svelte-1u4bfll" aria-label="Rotate clockwise" title="Rotate clockwise"><!></button></span>'), xu = e.from_html('<div class="annotator-container svelte-1u4bfll" tabindex="0"><!> <div class="canvas-container svelte-1u4bfll"><canvas class="canvas-annotator svelte-1u4bfll"></canvas></div> <!></div> <!> <!> <!>', 1);
function wu(r, t) {
  e.push(t, !1);
  var n, i = e.mutable_source(), a = e.mutable_source();
  (function(y) {
    y[y.creation = 0] = "creation", y[y.drag = 1] = "drag";
  })(e.safe_get(a) || e.set(a, {}));
  let s = e.prop(t, "imageUrl", 8, null), o = e.prop(t, "interactive", 8), l = e.prop(t, "boxAlpha", 8, 0.5), u = e.prop(t, "boxMinSize", 8, 10), f = e.prop(t, "handleSize", 8, 8), d = e.prop(t, "boxThickness", 8), b = e.prop(t, "boxSelectedThickness", 8), v = e.prop(t, "value", 8), E = e.prop(t, "choices", 24, () => []), L = e.prop(t, "choicesColors", 24, () => []), A = e.prop(t, "disableEditBoxes", 8, !1), C = e.prop(t, "singleBox", 8, !1), T = e.prop(t, "showRemoveButton", 12, null), c = e.prop(t, "handlesCursor", 8, !0), p = e.prop(t, "useDefaultLabel", 8, !1), g = e.prop(t, "enableKeyboardShortcuts", 8, !0);
  T() === null && T(A());
  let h = e.mutable_source(), w = e.mutable_source(), x, _ = null, m = e.mutable_source(-1), F = e.mutable_source(e.safe_get(a).drag), D = e.mutable_source(new Dl($)), I = e.mutable_source([]);
  v() !== null && v().boxes.length == 0 && e.set(F, e.safe_get(a).creation);
  let j = 0, q = 0, fe = 0, Q = 0, pe = 1, V = 0, W = 0, ue = e.mutable_source(!1), ie = e.mutable_source(!1), te = e.mutable_source(!1), De = e.mutable_source(""), ge = e.mutable_source(""), K = e.mutable_source(""), P = e.mutable_source(""), B = e.mutable_source(""), M = e.mutable_source(""), S = e.mutable_source(p()), k = e.mutable_source({ label: "", color: "" });
  const G = et(), H = e.mutable_source({
    orientation: (n = v() !== null ? v().orientation : 0) !== null && n !== void 0 ? n : 0
  });
  function z() {
    const y = e.get(I).map((O) => O.toJSON()), U = e.get(H).orientation;
    setTimeout(() => G("change", { boxes: y, orientation: U }), 0);
  }
  function oe(y) {
    var U = parseInt(y.slice(1, 3), 16), O = parseInt(y.slice(3, 5), 16), Z = parseInt(y.slice(5, 7), 16);
    return "rgb(" + U + ", " + O + ", " + Z + ")";
  }
  function _e(y) {
    const U = y.match(/(\d+(\.\d+)?)/g), O = parseInt(U[0]), Z = parseInt(U[1]), re = parseInt(U[2]);
    return "#" + (1 << 24 | O << 16 | Z << 8 | re).toString(16).slice(1);
  }
  function ye(y) {
    return typeof y == "string" ? y : Array.isArray(y) && y[0] != null ? String(y[0]) : "";
  }
  function Ae() {
    const y = Array.isArray(E()) ? E().map((Z, re) => [ye(Z), re]).filter(([Z]) => Z !== "") : [], U = Array.isArray(L()) ? [...L()] : [], O = new Set(y.map(([Z]) => Z));
    for (const Z of e.get(I)) {
      const re = (Z.label || "").trim();
      re !== "" && !O.has(re) && (O.add(re), y.push([re, y.length]), U.push(_e(Z.color)));
    }
    return { choices: y, colors: U };
  }
  let ce = e.mutable_source([]), Ee = e.mutable_source([]);
  function $() {
    if (x) {
      if (x.clearRect(0, 0, e.get(h).width, e.get(h).height), x.save(), x.translate(e.get(D).offsetX, e.get(D).offsetY), x.scale(e.get(D).scale, e.get(D).scale), _ !== null) {
        switch (e.get(H).orientation) {
          case 0:
            x.drawImage(_, 0, 0, V, W);
            break;
          case 1:
            x.translate(V, 0), x.rotate(Math.PI / 2), x.drawImage(_, 0, 0, W, V);
            break;
          case 2:
            x.translate(V, W), x.rotate(Math.PI), x.drawImage(_, 0, 0, V, W);
            break;
          case 3:
            x.translate(0, W), x.rotate(-Math.PI / 2), x.drawImage(_, 0, 0, W, V);
            break;
        }
        x.restore();
      }
      for (const y of e.get(I).slice().reverse())
        y.render(x);
    }
  }
  function R(y) {
    e.set(m, y), e.get(I).forEach((U) => U.setSelected(!1)), y >= 0 && y < e.get(I).length && e.get(I)[y].setSelected(!0), $();
  }
  function N(y) {
    o() && (y.target instanceof Element && y.target.hasPointerCapture(y.pointerId) && y.target.releasePointerCapture(y.pointerId), e.get(F) === e.safe_get(a).creation ? ae(y) : e.get(F) === e.safe_get(a).drag && ee(y));
  }
  function ee(y) {
    const U = e.get(h).getBoundingClientRect(), O = y.clientX - U.left, Z = y.clientY - U.top;
    let re = !1;
    for (const [Y, de] of e.get(I).entries()) {
      const Ie = de.indexOfPointInsideHandle(O, Z);
      if (Ie >= 0) {
        re = !0, R(Y), de.startResize(Ie, y);
        return;
      }
    }
    for (const [Y, de] of e.get(I).entries())
      if (de.isPointInsideBox(O, Z)) {
        re = !0, R(Y), de.startDrag(y);
        return;
      }
    C() || R(-1), re || e.get(D).startDrag(y);
  }
  function le(y) {
    z();
  }
  function J(y) {
    if (v() === null || e.get(F) !== e.safe_get(a).drag)
      return;
    const U = e.get(h).getBoundingClientRect(), O = y.clientX - U.left, Z = y.clientY - U.top;
    for (const [re, Y] of e.get(I).entries()) {
      const de = Y.indexOfPointInsideHandle(O, Z);
      if (de >= 0) {
        e.mutate(h, e.get(h).style.cursor = Y.resizeHandles[de].cursor);
        return;
      }
    }
    e.mutate(h, e.get(h).style.cursor = "default");
  }
  function X() {
    const y = e.get(h).width / V, U = e.get(h).height / W, O = Math.min(y, U);
    e.mutate(D, e.get(D).scale = O), e.mutate(D, e.get(D).offsetX = (e.get(h).width - V * O) / 2), e.mutate(D, e.get(D).offsetY = (e.get(h).height - W * O) / 2), $();
  }
  function be(y) {
    if (!g() || y.target !== e.get(w) || !o())
      return;
    const U = y.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(U) && (y.preventDefault(), y.stopPropagation()), U) {
      case "delete":
        Xe();
        break;
      case "c":
        he();
        break;
      case "d":
        Ce();
        break;
      case "e":
        Ne();
        break;
      case " ":
        X();
        break;
    }
  }
  function Fe() {
    setTimeout(
      () => {
        e.get(w) === null || e.get(w) === void 0 || e.get(w).focus();
      },
      0
    );
  }
  function me(y) {
    if (!o())
      return;
    y.preventDefault();
    const U = 1 / (1 + y.deltaY / 1e3 * 0.5), O = parseFloat((e.get(D).scale * U).toFixed(2)), Z = O < 1 ? 1 : O, re = e.get(h).getBoundingClientRect(), Y = y.clientX - re.left, de = y.clientY - re.top, Ie = (Y - e.get(D).offsetX) / e.get(D).scale, Ue = (de - e.get(D).offsetY) / e.get(D).scale;
    e.mutate(D, e.get(D).offsetX = Y - Ie * Z), e.mutate(D, e.get(D).offsetY = de - Ue * Z), e.mutate(D, e.get(D).scale = Z), $();
  }
  function ae(y) {
    const U = e.get(h).getBoundingClientRect(), O = (y.clientX - U.left - e.get(D).offsetX) / e.get(D).scale, Z = (y.clientY - U.top - e.get(D).offsetY) / e.get(D).scale;
    let re = 1;
    const Y = e.get(h) ? e.get(h).clientWidth : 0;
    if (_ !== null && Y > 0 && _.width > 0) {
      const Se = e.get(H).orientation === 0 || e.get(H).orientation === 2 ? _.width : _.height;
      Se > Y && (re = Y / Se);
    }
    let de, Ie;
    e.get(S) && e.get(k).label !== "" ? (Ie = e.get(k).label, de = e.get(k).color !== "" ? oe(e.get(k).color) : L().length > 0 ? oe(L()[0]) : Je[0]) : (Ie = Array.isArray(E()) && E().length > 0 ? ye(E()[0]) : "", L().length > 0 ? de = oe(L()[0]) : C() ? de = e.get(I).length > 0 ? e.get(I)[0].color : Je[0] : de = Je[e.get(I).length % Je.length]);
    const Ue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let Qe = "";
    for (let Se = 0; Se < 12; Se++)
      Qe += Ue.charAt(Math.floor(Math.random() * Ue.length));
    const Ye = "";
    let Ge = new wn($, Oe, e.get(D), j, q, fe, Q, Ie, O, Z, O, Z, de, l(), Qe, Ye, u(), f(), d(), b(), re);
    Ge.startCreating(y, U.left, U.top), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        C() ? e.set(I, [Ge]) : e.set(I, [Ge, ...e.get(I)]);
        const Se = e.get(h) ? e.get(h).clientWidth : 0;
        if (_ !== null && Se > 0 && _.width > 0) {
          const qe = e.get(H).orientation === 0 || e.get(H).orientation === 2 ? _.width : _.height;
          qe > Se && (Ge.scaleFactor = Se / qe);
        }
        R(0), $(), z();
      });
    });
  }
  function he() {
    e.set(F, e.safe_get(a).creation), e.mutate(h, e.get(h).style.cursor = "crosshair");
  }
  function Ce() {
    e.set(F, e.safe_get(a).drag), e.mutate(h, e.get(h).style.cursor = "default");
  }
  function Oe() {
    if (e.get(m) >= 0 && e.get(m) < e.get(I).length)
      if (e.get(I)[e.get(m)].getArea() < 1)
        Xe();
      else {
        if (!A())
          if (e.get(S))
            Ft();
          else {
            const y = Ae();
            e.set(ce, y.choices), e.set(Ee, y.colors), e.set(K, e.get(I)[e.get(m)].label), e.set(P, _e(e.get(I)[e.get(m)].color)), e.set(ie, !0);
          }
        C() && Ce();
      }
  }
  function Ne() {
    if (e.get(m) >= 0 && e.get(m) < e.get(I).length && !A()) {
      const y = Ae();
      e.set(ce, y.choices), e.set(Ee, y.colors), e.set(De, e.get(I)[e.get(m)].label), e.set(ge, _e(e.get(I)[e.get(m)].color)), e.set(ue, !0);
    }
  }
  function Me(y) {
    o() && Ne();
  }
  function We(y) {
    e.set(ue, !1), Fe();
    const { detail: U } = y;
    let O = U.label, Z = U.color, re = U.ret;
    if (e.get(m) >= 0 && e.get(m) < e.get(I).length) {
      let Y = e.get(I)[e.get(m)];
      re == 1 ? (Y.label = O, Y.color = oe(Z), $(), z()) : re == -1 && Xe();
    }
  }
  function tt(y) {
    e.set(ie, !1), Fe();
    const { detail: U } = y;
    let O = U.label, Z = U.color, re = U.ret, Y = U.lock;
    if (e.get(m) >= 0 && e.get(m) < e.get(I).length) {
      let de = e.get(I)[e.get(m)];
      re == 1 ? (e.set(S, Y), e.mutate(k, e.get(k).label = O), e.mutate(k, e.get(k).color = Z), de.label = O, de.color = oe(Z), $(), z()) : Xe();
    }
  }
  function rt(y) {
    e.set(te, !1), Fe();
    const { detail: U } = y;
    let O = U.label, Z = U.color, re = U.ret, Y = U.lock;
    re == 1 && (e.set(S, Y), e.mutate(k, e.get(k).label = O), e.mutate(k, e.get(k).color = Z));
  }
  function Ft() {
    if (e.get(m) >= 0 && e.get(m) < e.get(I).length) {
      let y = e.get(I)[e.get(m)];
      y.label = e.get(k).label, e.get(k).color !== "" && (y.color = oe(e.get(k).color)), $(), z();
    }
  }
  function Xe() {
    e.get(m) >= 0 && e.get(m) < e.get(I).length && (e.get(I).splice(e.get(m), 1), R(-1), C() && he(), z());
  }
  function ot(y) {
    e.mutate(H, e.get(H).orientation = ((e.get(H).orientation + y) % 4 + 4) % 4), e.mutate(D, e.get(D).orientation = e.get(H).orientation);
    for (const U of e.get(I))
      U.onRotate(y);
    Ke(!0, !0), $();
  }
  function Ke(y = !0, U = !1) {
    if (e.get(h)) {
      const Z = e.get(D).imageWidth, re = e.get(D).imageHeight;
      if (pe = 1, e.mutate(h, e.get(h).width = e.get(h).clientWidth), e.get(D).setRotatedImage(_), _ !== null) {
        if (e.get(D).imageRotatedWidth > e.get(h).width)
          pe = e.get(h).width / e.get(D).imageRotatedWidth, V = Math.round(e.get(D).imageRotatedWidth * pe), W = Math.round(e.get(D).imageRotatedHeight * pe), j = 0, q = 0, fe = V, Q = W, e.mutate(h, e.get(h).height = W);
        else {
          V = e.get(D).imageRotatedWidth, W = e.get(D).imageRotatedHeight;
          var O = (e.get(h).width - V) / 2;
          j = O, q = 0, fe = O + V, Q = W, e.mutate(h, e.get(h).height = W);
        }
        e.mutate(D, e.get(D).imageWidth = V), e.mutate(D, e.get(D).imageHeight = W);
      } else
        j = 0, q = 0, fe = e.get(h).width, Q = e.get(h).height, e.mutate(h, e.get(h).height = e.get(h).clientHeight);
      if (e.get(D).resize(e.get(h).width, e.get(h).height, j, q), fe > 0 && Q > 0)
        for (const Y of e.get(I))
          if (Y.canvasXmin = j, Y.canvasYmin = q, Y.canvasXmax = fe, Y.canvasYmax = Q, U && Z > 0 && re > 0) {
            const de = V / re, Ie = W / Z;
            Y.scaleFromRotatedDisplay(de, Ie), Y.scaleFactor = pe, Y.applyUserScale();
          } else
            Y.setScaleFactor(pe);
      $(), y && z();
    }
  }
  const Jt = new ResizeObserver(() => Ke());
  function Tt() {
    if (v() === null || !Array.isArray(v().boxes)) {
      e.set(I, []);
      return;
    }
    const y = [];
    for (let U = 0; U < v().boxes.length; U++) {
      const O = v().boxes[U];
      if (O && typeof O == "object") {
        let Z = "", re = "", Y = "", de = "", Ie = 0;
        if (O.hasOwnProperty("color") ? (Z = O.color, Array.isArray(Z) && Z.length === 3 && (Z = `rgb(${Z[0]}, ${Z[1]}, ${Z[2]})`)) : Z = Je[U % Je.length], O.hasOwnProperty("label") && (re = O.label), O.hasOwnProperty("id"))
          Y = O.id;
        else {
          const je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let ct = "";
          for (let Le = 0; Le < 12; Le++)
            ct += je.charAt(Math.floor(Math.random() * je.length));
          Y = ct;
        }
        O.hasOwnProperty("text") && (de = O.text), O.hasOwnProperty("page") && (Ie = O.page);
        const Ue = O.hasOwnProperty("xmin") ? O.xmin : 0, Qe = O.hasOwnProperty("ymin") ? O.ymin : 0, Ye = O.hasOwnProperty("xmax") ? O.xmax : 0, Ge = O.hasOwnProperty("ymax") ? O.ymax : 0, Se = O.hasOwnProperty("scaleFactor") ? O.scaleFactor : 1, qe = new wn($, Oe, e.get(D), j, q, fe, Q, re, Ue, Qe, Ye, Ge, Z, l(), Y, de, Ie, u(), f(), d(), b());
        qe.setScaleFactor(Se), qe.applyUserScale(), y.push(qe);
      } else
        console.error("Invalid box data format encountered:", O);
    }
    e.set(I, y);
  }
  const lt = e.mutable_source({ value: null });
  function St() {
    s() !== null && (_ === null || _.src != s()) && (_ = new Image(), _.src = s(), _.onload = function() {
      Ke(), $();
    });
  }
  Zt(() => {
    if (Array.isArray(E()) && E().length > 0) {
      if (!Array.isArray(L()) || L().length == 0)
        for (let y = 0; y < E().length; y++) {
          let U = Je[y % Je.length];
          L().push(_e(U));
        }
      e.mutate(k, e.get(k).label = ye(E()[0])), e.mutate(k, e.get(k).color = L()[0]);
    }
    x = e.get(h).getContext("2d"), Jt.observe(e.get(h)), e.get(m) < 0 && e.get(I).length > 0 && R(0), St(), Ke(), $();
  }), e.legacy_pre_effect(
    () => (e.deep_read_state(v()), e.get(lt), e.get(H), e.safe_get(i), e.get(m), e.get(I)),
    () => {
      const y = v();
      y !== e.get(lt).value && (e.mutate(lt, e.get(lt).value = y), e.mutate(H, e.get(H).orientation = e.set(i, y !== null ? y.orientation : 0) !== null && e.safe_get(i) !== void 0 ? e.safe_get(i) : 0), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          e.mutate(D, e.get(D).orientation = e.get(H).orientation), St(), Tt(), e.get(m) < 0 && e.get(I).length > 0 && R(0), Ke(!1), $();
        });
      }));
    }
  ), e.legacy_pre_effect_reset(), e.init();
  var Bt = xu(), Te = e.first_child(Bt), ze = e.child(Te);
  {
    var $t = (y) => {
      var U = mu(), O = e.child(U);
      let Z;
      var re = e.child(O);
      kn(re), e.reset(O);
      var Y = e.sibling(O, 2);
      let de;
      var Ie = e.child(Y);
      Cn(Ie), e.reset(Y);
      var Ue = e.sibling(Y, 2);
      {
        var Qe = (Le) => {
          var Be = pu(), nt = e.child(Be);
          An(nt), e.reset(Be), e.event("click", Be, () => Xe()), e.append(Le, Be);
        };
        e.if(Ue, (Le) => {
          T() && Le(Qe);
        });
      }
      var Ye = e.sibling(Ue, 2);
      {
        var Ge = (Le) => {
          var Be = gu(), nt = e.child(Be);
          Fn(nt), e.reset(Be), e.event("click", Be, () => {
            const _t = Ae();
            e.set(ce, _t.choices), e.set(Ee, _t.colors), e.set(B, e.get(k).label), e.set(M, e.get(k).color), e.set(te, !0);
          }), e.append(Le, Be);
        };
        e.if(Ye, (Le) => {
          !A() && e.get(S) && Le(Ge);
        });
      }
      var Se = e.sibling(Ye, 2), qe = e.child(Se);
      _n(qe), e.reset(Se);
      var je = e.sibling(Se, 2), ct = e.child(je);
      vn(ct), e.reset(je), e.reset(U), e.template_effect(() => {
        Z = e.set_class(O, 1, "icon svelte-1u4bfll", null, Z, { selected: e.get(F) === e.safe_get(a).creation }), de = e.set_class(Y, 1, "icon svelte-1u4bfll", null, de, { selected: e.get(F) === e.safe_get(a).drag });
      }), e.event("click", O, () => he()), e.event("click", Y, () => Ce()), e.event("click", Se, () => ot(-1)), e.event("click", je, () => ot(1)), e.append(y, U);
    };
    e.if(ze, (y) => {
      o() && y($t);
    });
  }
  var er = e.sibling(ze, 2), ut = e.child(er);
  e.bind_this(ut, (y) => e.set(h, y), () => e.get(h)), e.reset(er);
  var bi = e.sibling(er, 2);
  {
    var xi = (y) => {
      var U = bu(), O = e.child(U);
      let Z;
      var re = e.child(O);
      kn(re), e.reset(O);
      var Y = e.sibling(O, 2);
      let de;
      var Ie = e.child(Y);
      Cn(Ie), e.reset(Y);
      var Ue = e.sibling(Y, 2);
      {
        var Qe = (Le) => {
          var Be = vu(), nt = e.child(Be);
          An(nt), e.reset(Be), e.event("click", Be, () => Xe()), e.append(Le, Be);
        };
        e.if(Ue, (Le) => {
          T() && Le(Qe);
        });
      }
      var Ye = e.sibling(Ue, 2);
      {
        var Ge = (Le) => {
          var Be = _u(), nt = e.child(Be);
          Fn(nt), e.reset(Be), e.event("click", Be, () => {
            const _t = Ae();
            e.set(ce, _t.choices), e.set(Ee, _t.colors), e.set(B, e.get(k).label), e.set(M, e.get(k).color), e.set(te, !0);
          }), e.append(Le, Be);
        };
        e.if(Ye, (Le) => {
          !A() && e.get(S) && Le(Ge);
        });
      }
      var Se = e.sibling(Ye, 2), qe = e.child(Se);
      _n(qe), e.reset(Se);
      var je = e.sibling(Se, 2), ct = e.child(je);
      vn(ct), e.reset(je), e.reset(U), e.template_effect(() => {
        Z = e.set_class(O, 1, "icon svelte-1u4bfll", null, Z, { selected: e.get(F) === e.safe_get(a).creation }), de = e.set_class(Y, 1, "icon svelte-1u4bfll", null, de, { selected: e.get(F) === e.safe_get(a).drag });
      }), e.event("click", O, () => he()), e.event("click", Y, () => Ce()), e.event("click", Se, () => ot(-1)), e.event("click", je, () => ot(1)), e.append(y, U);
    };
    e.if(bi, (y) => {
      o() && y(xi);
    });
  }
  e.reset(Te), e.bind_this(Te, (y) => e.set(w, y), () => e.get(w));
  var Hr = e.sibling(Te, 2);
  hr(Hr, {
    get visible() {
      return e.get(ue);
    },
    get choices() {
      return e.get(ce);
    },
    get choicesColors() {
      return e.get(Ee);
    },
    get currentLabel() {
      return e.get(De);
    },
    set currentLabel(y) {
      e.set(De, y);
    },
    get currentColor() {
      return e.get(ge);
    },
    set currentColor(y) {
      e.set(ge, y);
    },
    $$events: {
      change: We,
      "enter{onModalEditChange}"(y) {
        e.bubble_event.call(this, t, y);
      }
    },
    $$legacy: !0
  });
  var Or = e.sibling(Hr, 2);
  hr(Or, {
    get visible() {
      return e.get(ie);
    },
    get choices() {
      return e.get(ce);
    },
    showRemove: !1,
    get choicesColors() {
      return e.get(Ee);
    },
    get labelDetailLock() {
      return e.get(S);
    },
    get currentLabel() {
      return e.get(K);
    },
    set currentLabel(y) {
      e.set(K, y);
    },
    get currentColor() {
      return e.get(P);
    },
    set currentColor(y) {
      e.set(P, y);
    },
    $$events: {
      change: tt,
      "enter{onModalNewChange}"(y) {
        e.bubble_event.call(this, t, y);
      }
    },
    $$legacy: !0
  });
  var wi = e.sibling(Or, 2);
  hr(wi, {
    get visible() {
      return e.get(te);
    },
    get choices() {
      return e.get(ce);
    },
    showRemove: !1,
    get choicesColors() {
      return e.get(Ee);
    },
    get labelDetailLock() {
      return e.get(S);
    },
    get currentLabel() {
      return e.get(B);
    },
    set currentLabel(y) {
      e.set(B, y);
    },
    get currentColor() {
      return e.get(M);
    },
    set currentColor(y) {
      e.set(M, y);
    },
    $$events: {
      change: rt,
      "enter{onDefaultLabelEditChange}"(y) {
        e.bubble_event.call(this, t, y);
      }
    },
    $$legacy: !0
  }), e.event("pointerdown", ut, N), e.event("pointerup", ut, le), e.event("pointermove", ut, function(...y) {
    (c() ? J : null)?.apply(this, y);
  }), e.event("dblclick", ut, Me), e.event("wheel", ut, me, void 0, !1), e.event("keydown", Te, be), e.event("click", Te, () => e.get(w).focus()), e.append(r, Bt), e.pop();
}
function yu(r, t) {
  e.push(t, !1);
  let n = e.prop(t, "src", 8, void 0), i = e.prop(t, "interactive", 8), a = e.prop(t, "boxesAlpha", 8), s = e.prop(t, "labelList", 8), o = e.prop(t, "labelColors", 8), l = e.prop(t, "boxMinSize", 8), u = e.prop(t, "handleSize", 8), f = e.prop(t, "boxThickness", 8), d = e.prop(t, "boxSelectedThickness", 8), b = e.prop(t, "value", 12), v = e.prop(t, "disableEditBoxes", 8), E = e.prop(t, "singleBox", 8), L = e.prop(t, "showRemoveButton", 8), A = e.prop(t, "handlesCursor", 8), C = e.prop(t, "useDefaultLabel", 8), T = e.prop(t, "enableKeyboardShortcuts", 8), c = e.mutable_source(), p = e.mutable_source();
  const g = et();
  e.legacy_pre_effect(
    () => (e.deep_read_state(n()), e.get(p), En),
    () => {
      e.set(c, n()), e.set(p, n());
      const h = n();
      En(h).then((w) => {
        e.get(p) === h && e.set(c, w);
      });
    }
  ), e.legacy_pre_effect_reset(), e.init(), wu(r, {
    get interactive() {
      return i();
    },
    get boxAlpha() {
      return a();
    },
    get choices() {
      return s();
    },
    get choicesColors() {
      return o();
    },
    get boxMinSize() {
      return l();
    },
    get handleSize() {
      return u();
    },
    get boxThickness() {
      return f();
    },
    get boxSelectedThickness() {
      return d();
    },
    get disableEditBoxes() {
      return v();
    },
    get singleBox() {
      return E();
    },
    get showRemoveButton() {
      return L();
    },
    get handlesCursor() {
      return A();
    },
    get useDefaultLabel() {
      return C();
    },
    get enableKeyboardShortcuts() {
      return T();
    },
    get imageUrl() {
      return e.get(c);
    },
    get value() {
      return b();
    },
    set value(h) {
      b(h);
    },
    $$events: { change: (h) => g("change", h.detail) },
    $$legacy: !0
  }), e.pop();
}
var Eu = e.from_html("<div><!></div>"), Du = e.from_html("<div><!></div>"), ku = e.from_html('<!> <div class="icon-buttons svelte-8v7jpi"><!> <!> <!></div> <div data-testid="image" class="image-container svelte-8v7jpi"><div class="upload-container svelte-8v7jpi"><!> <!> <!></div> <!></div>', 1);
function Cu(r, t) {
  e.push(t, !1);
  var n = this && this.__awaiter || function(R, N, ee, le) {
    function J(X) {
      return X instanceof ee ? X : new ee(function(be) {
        be(X);
      });
    }
    return new (ee || (ee = Promise))(function(X, be) {
      function Fe(he) {
        try {
          ae(le.next(he));
        } catch (Ce) {
          be(Ce);
        }
      }
      function me(he) {
        try {
          ae(le.throw(he));
        } catch (Ce) {
          be(Ce);
        }
      }
      function ae(he) {
        he.done ? X(he.value) : J(he.value).then(Fe, me);
      }
      ae((le = le.apply(R, N || [])).next());
    });
  };
  let i = e.prop(t, "value", 12, null), a = e.prop(t, "label", 8, void 0), s = e.prop(t, "show_label", 8), o = e.prop(t, "sources", 24, () => ["upload", "webcam", "clipboard"]), l = e.prop(t, "selectable", 8, !1), u = e.prop(t, "root", 8), f = e.prop(t, "interactive", 8), d = e.prop(t, "i18n", 8), b = e.prop(t, "showShareButton", 8), v = e.prop(t, "showDownloadButton", 8), E = e.prop(t, "showClearButton", 8), L = e.prop(t, "boxesAlpha", 8), A = e.prop(t, "labelList", 8), C = e.prop(t, "labelColors", 8), T = e.prop(t, "boxMinSize", 8), c = e.prop(t, "handleSize", 8), p = e.prop(t, "boxThickness", 8), g = e.prop(t, "disableEditBoxes", 8), h = e.prop(t, "singleBox", 8), w = e.prop(t, "showRemoveButton", 8), x = e.prop(t, "handlesCursor", 8), _ = e.prop(t, "boxSelectedThickness", 8), m = e.prop(t, "max_file_size", 8, null), F = e.prop(t, "cli_upload", 8), D = e.prop(t, "stream_handler", 8), I = e.prop(t, "useDefaultLabel", 8), j = e.prop(t, "enableKeyboardShortcuts", 8), q = e.mutable_source(), fe = e.mutable_source(!1), Q = e.prop(t, "active_source", 12, null);
  function pe({ detail: R }) {
    i(new yn()), i(i().image = R, !0), W("upload");
  }
  function V(R) {
    return n(this, void 0, void 0, function* () {
      const N = yield e.get(q).load_files([new File([R], "webcam.png")]), ee = N?.[0] || null;
      ee ? (i(new yn()), i(i().image = ee, !0)) : i(null), yield Dr(), W("change");
    });
  }
  const W = et();
  let ue = e.mutable_source(!1);
  function ie(R) {
    return n(this, void 0, void 0, function* () {
      R === "clipboard" && e.get(q).paste_clipboard();
    });
  }
  function te() {
    i(null), W("clear"), W("change");
  }
  e.legacy_pre_effect(() => e.get(fe), () => {
    e.get(fe) && te();
  }), e.legacy_pre_effect(() => e.get(ue), () => {
    W("drag", e.get(ue));
  }), e.legacy_pre_effect(
    () => (e.deep_read_state(Q()), e.deep_read_state(o())),
    () => {
      !Q() && o() && Q(o()[0]);
    }
  ), e.legacy_pre_effect_reset(), e.init();
  var De = ku(), ge = e.first_child(De);
  {
    let R = e.derived_safe_equal(() => a() || "Image Annotator");
    mo(ge, {
      get show_label() {
        return s();
      },
      get Icon() {
        return hi;
      },
      get label() {
        return e.get(R);
      }
    });
  }
  var K = e.sibling(ge, 2), P = e.child(K);
  {
    var B = (R) => {
      {
        let N = e.derived_safe_equal(() => (e.deep_read_state(i()), e.untrack(() => i().image.orig_name || "image")));
        Sl(R, {
          get href() {
            return e.deep_read_state(i()), e.untrack(() => i().image.url);
          },
          get download() {
            return e.get(N);
          },
          children: (ee, le) => {
            {
              let J = e.derived_safe_equal(() => (e.deep_read_state(d()), e.untrack(() => d()("common.download"))));
              Dt(ee, {
                get Icon() {
                  return To;
                },
                get label() {
                  return e.get(J);
                }
              });
            }
          },
          $$slots: { default: !0 }
        });
      }
    };
    e.if(P, (R) => {
      e.deep_read_state(v()), e.deep_read_state(i()), e.untrack(() => v() && i()?.image) && R(B);
    });
  }
  var M = e.sibling(P, 2);
  {
    var S = (R) => {
      Zo(R, {
        get i18n() {
          return d();
        },
        formatter: async (N) => N?.image ? `<img src="${await us(N.image)}" />` : "",
        get value() {
          return i();
        },
        $$events: {
          share(N) {
            e.bubble_event.call(this, t, N);
          },
          error(N) {
            e.bubble_event.call(this, t, N);
          }
        }
      });
    };
    e.if(M, (R) => {
      b() && i() !== null && R(S);
    });
  }
  var k = e.sibling(M, 2);
  {
    var G = (R) => {
      var N = Eu(), ee = e.child(N);
      Dt(ee, {
        get Icon() {
          return Er;
        },
        label: "Remove Image",
        $$events: { click: te }
      }), e.reset(N), e.append(R, N);
    };
    e.if(k, (R) => {
      E() && i() !== null && f() && R(G);
    });
  }
  e.reset(K);
  var H = e.sibling(K, 2), z = e.child(H), oe = e.child(z);
  {
    let R = e.derived_safe_equal(() => i() !== null || Q() === "webcam"), N = e.derived_safe_equal(() => Q() === "clipboard" ? "clipboard" : "image/*"), ee = e.derived_safe_equal(() => (e.deep_read_state(o()), e.untrack(() => !o().includes("upload"))));
    e.bind_this(
      Nl(oe, {
        get hidden() {
          return e.get(R);
        },
        get filetype() {
          return e.get(N);
        },
        get root() {
          return u();
        },
        get max_file_size() {
          return m();
        },
        get disable_click() {
          return e.get(ee);
        },
        get upload() {
          return F();
        },
        get stream_handler() {
          return D();
        },
        get uploading() {
          return e.get(fe);
        },
        set uploading(le) {
          e.set(fe, le);
        },
        get dragging() {
          return e.get(ue);
        },
        set dragging(le) {
          e.set(ue, le);
        },
        $$events: {
          load: pe,
          error(le) {
            e.bubble_event.call(this, t, le);
          }
        },
        children: (le, J) => {
          var X = e.comment(), be = e.first_child(X);
          {
            var Fe = (me) => {
              var ae = e.comment(), he = e.first_child(ae);
              e.slot(he, t, "default", {}, null), e.append(me, ae);
            };
            e.if(be, (me) => {
              i() === null && me(Fe);
            });
          }
          e.append(le, X);
        },
        $$slots: { default: !0 },
        $$legacy: !0
      }),
      (le) => e.set(q, le),
      () => e.get(q)
    );
  }
  var _e = e.sibling(oe, 2);
  {
    var ye = (R) => {
      tu(R, {
        get root() {
          return u();
        },
        mode: "image",
        include_audio: !1,
        get i18n() {
          return d();
        },
        get upload() {
          return e.get(q);
        },
        $$events: {
          capture: (N) => V(N.detail),
          stream: (N) => V(N.detail),
          error(N) {
            e.bubble_event.call(this, t, N);
          },
          drag(N) {
            e.bubble_event.call(this, t, N);
          },
          upload: (N) => V(N.detail)
        }
      });
    };
    e.if(_e, (R) => {
      i() === null && Q() === "webcam" && R(ye);
    });
  }
  var Ae = e.sibling(_e, 2);
  {
    var ce = (R) => {
      var N = Du();
      let ee;
      var le = e.child(N);
      {
        let J = e.derived_safe_equal(() => (e.deep_read_state(i()), e.untrack(() => i()?.image?.url)));
        yu(le, {
          get boxesAlpha() {
            return L();
          },
          get labelList() {
            return A();
          },
          get labelColors() {
            return C();
          },
          get boxMinSize() {
            return T();
          },
          get interactive() {
            return f();
          },
          get handleSize() {
            return c();
          },
          get boxThickness() {
            return p();
          },
          get singleBox() {
            return h();
          },
          get disableEditBoxes() {
            return g();
          },
          get showRemoveButton() {
            return w();
          },
          get handlesCursor() {
            return x();
          },
          get boxSelectedThickness() {
            return _();
          },
          get useDefaultLabel() {
            return I();
          },
          get enableKeyboardShortcuts() {
            return j();
          },
          get src() {
            return e.get(J);
          },
          get value() {
            return i();
          },
          set value(X) {
            i(X);
          },
          $$events: { change: (X) => W("change", X.detail) },
          $$legacy: !0
        });
      }
      e.reset(N), e.template_effect(() => ee = e.set_class(N, 1, "image-frame svelte-8v7jpi", null, ee, { selectable: l() })), e.append(R, N);
    };
    e.if(Ae, (R) => {
      i() !== null && R(ce);
    });
  }
  e.reset(z);
  var Ee = e.sibling(z, 2);
  {
    var $ = (R) => {
      sl(R, {
        get sources() {
          return o();
        },
        handle_clear: te,
        handle_select: ie,
        get active_source() {
          return Q();
        },
        set active_source(N) {
          Q(N);
        },
        $$legacy: !0
      });
    };
    e.if(Ee, (R) => {
      e.deep_read_state(o()), e.deep_read_state(i()), e.deep_read_state(f()), e.untrack(() => (o().length > 1 || o().includes("clipboard")) && i() === null && f()) && R($);
    });
  }
  e.reset(H), e.append(r, De), e.pop();
}
var Au = e.from_html('<img alt=""/>'), Fu = e.from_html("<div><!></div>");
function Hu(r, t) {
  e.push(t, !1);
  let n = e.prop(t, "value", 8), i = e.prop(t, "type", 8), a = e.prop(t, "selected", 8, !1);
  e.init();
  var s = Fu();
  let o;
  var l = e.child(s);
  {
    var u = (f) => {
      var d = Au();
      e.template_effect(() => e.set_attribute(d, "src", (e.deep_read_state(n()), e.untrack(() => n().url)))), e.append(f, d);
    };
    e.if(l, (f) => {
      n() && f(u);
    });
  }
  e.reset(s), e.template_effect(() => o = e.set_class(s, 1, "container svelte-s3apn9", null, o, {
    table: i() === "table",
    gallery: i() === "gallery",
    selected: a(),
    border: n()
  })), e.append(r, s), e.pop();
}
var Tu = e.from_html("<!> <!>", 1);
function Ou(r, t) {
  e.push(t, !0);
  var n = this && this.__awaiter || function(f, d, b, v) {
    function E(L) {
      return L instanceof b ? L : new b(function(A) {
        A(L);
      });
    }
    return new (b || (b = Promise))(function(L, A) {
      function C(p) {
        try {
          c(v.next(p));
        } catch (g) {
          A(g);
        }
      }
      function T(p) {
        try {
          c(v.throw(p));
        } catch (g) {
          A(g);
        }
      }
      function c(p) {
        p.done ? L(p.value) : E(p.value).then(C, T);
      }
      c((v = v.apply(f, d || [])).next());
    });
  };
  let i = null;
  class a extends ps {
    // When Gradio sends new value data from Python, clear any pending user changes
    // so get_data() returns the Gradio-provided data rather than stale user edits.
    set_data(d) {
      "value" in d && (i = null), super.set_data(d);
    }
    get_data() {
      const d = Object.create(null, { get_data: { get: () => super.get_data } });
      return n(this, void 0, void 0, function* () {
        const b = yield d.get_data.call(this);
        return i !== null && b.value !== null && (i.boxes !== void 0 && (b.value.boxes = i.boxes), i.orientation !== void 0 && (b.value.orientation = i.orientation)), b;
      });
    }
  }
  const s = e.rest_props(t, ["$$slots", "$$events", "$$legacy"]), o = new a(s);
  let l = e.state(!1), u = e.state(null);
  e.user_effect(() => {
    var f;
    !e.get(u) && ((f = o.props.sources) === null || f === void 0 ? void 0 : f.length) > 0 && e.set(u, o.props.sources[0], !0);
  });
  {
    let f = e.derived(() => e.get(l) ? "focus" : "base");
    bs(r, {
      get visible() {
        return o.shared.visible;
      },
      variant: "solid",
      get border_mode() {
        return e.get(f);
      },
      padding: !1,
      get elem_id() {
        return o.shared.elem_id;
      },
      get elem_classes() {
        return o.shared.elem_classes;
      },
      get width() {
        return o.props.width;
      },
      allow_overflow: !1,
      get container() {
        return o.shared.container;
      },
      get scale() {
        return o.shared.scale;
      },
      get min_width() {
        return o.shared.min_width;
      },
      children: (d, b) => {
        var v = Tu(), E = e.first_child(v);
        wl(E, e.spread_props(
          {
            get autoscroll() {
              return o.shared.autoscroll;
            },
            get i18n() {
              return o.i18n;
            }
          },
          () => o.shared.loading_status
        ));
        var L = e.sibling(E, 2);
        {
          let A = e.derived(() => (() => {
            const c = o.props.label_list_json;
            if (typeof c == "string" && c.length > 0)
              try {
                const p = JSON.parse(c);
                if (Array.isArray(p)) return p.map((g) => typeof g == "string" ? g : String(g));
              } catch {
              }
            return Array.isArray(o.props.label_list) ? o.props.label_list : [];
          })()), C = e.derived(() => o.shared.client?.upload), T = e.derived(() => o.shared.client?.stream);
          Cu(L, {
            get selectable() {
              return o.props._selectable;
            },
            get root() {
              return o.shared.root;
            },
            get sources() {
              return o.props.sources;
            },
            get interactive() {
              return o.shared.interactive;
            },
            get showDownloadButton() {
              return o.props.show_download_button;
            },
            get showShareButton() {
              return o.props.show_share_button;
            },
            get showClearButton() {
              return o.props.show_clear_button;
            },
            get i18n() {
              return o.i18n;
            },
            get boxesAlpha() {
              return o.props.boxes_alpha;
            },
            get labelList() {
              return e.get(A);
            },
            get labelColors() {
              return o.props.label_colors;
            },
            get boxMinSize() {
              return o.props.box_min_size;
            },
            get label() {
              return o.shared.label;
            },
            get show_label() {
              return o.shared.show_label;
            },
            get max_file_size() {
              return o.shared.max_file_size;
            },
            get cli_upload() {
              return e.get(C);
            },
            get stream_handler() {
              return e.get(T);
            },
            get handleSize() {
              return o.props.handle_size;
            },
            get boxThickness() {
              return o.props.box_thickness;
            },
            get boxSelectedThickness() {
              return o.props.box_selected_thickness;
            },
            get disableEditBoxes() {
              return o.props.disable_edit_boxes;
            },
            get singleBox() {
              return o.props.single_box;
            },
            get showRemoveButton() {
              return o.props.show_remove_button;
            },
            get handlesCursor() {
              return o.props.handles_cursor;
            },
            get useDefaultLabel() {
              return o.props.use_default_label;
            },
            get enableKeyboardShortcuts() {
              return o.props.enable_keyboard_shortcuts;
            },
            get active_source() {
              return e.get(u);
            },
            set active_source(c) {
              e.set(u, c, !0);
            },
            get value() {
              return o.props.value;
            },
            set value(c) {
              o.props.value = c;
            },
            $$events: {
              change: (c) => {
                i = c.detail ?? null, setTimeout(() => o.dispatch("change"), 0);
              },
              edit: () => o.dispatch("edit"),
              clear: () => {
                o.dispatch("clear");
              },
              drag: ({ detail: c }) => e.set(l, c, !0),
              upload: () => o.dispatch("upload"),
              select: ({ detail: c }) => o.dispatch("select", c),
              share: ({ detail: c }) => o.dispatch("share", c),
              error: ({ detail: c }) => {
                o.dispatch("error", c);
              }
            },
            children: (c, p) => {
              var g = e.comment(), h = e.first_child(g);
              {
                var w = (_) => {
                  xn(_, {
                    get i18n() {
                      return o.i18n;
                    },
                    type: "image"
                  });
                }, x = (_) => {
                  var m = e.comment(), F = e.first_child(m);
                  {
                    var D = (j) => {
                      xn(j, {
                        get i18n() {
                          return o.i18n;
                        },
                        type: "clipboard",
                        mode: "short"
                      });
                    }, I = (j) => {
                      xo(j, {
                        unpadded_box: !0,
                        size: "large",
                        children: (q, fe) => {
                          hi(q);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    e.if(
                      F,
                      (j) => {
                        e.get(u) === "clipboard" ? j(D) : j(I, !1);
                      },
                      !0
                    );
                  }
                  e.append(_, m);
                };
                e.if(h, (_) => {
                  e.get(u) === "upload" ? _(w) : _(x, !1);
                });
              }
              e.append(c, g);
            },
            $$slots: { default: !0 }
          });
        }
        e.append(d, v);
      },
      $$slots: { default: !0 }
    });
  }
  e.pop();
}
export {
  Hu as BaseExample,
  Ou as default
};
