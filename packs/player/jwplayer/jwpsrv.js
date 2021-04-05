!
function() {
  function t() {
    return document.hasFocus && "function" == typeof document.hasFocus && document.hasFocus()
  }
  function e() {
    var t = (window.performance || {}).timing;
    if (t) {
      var e = t.loadEventEnd || (new Date).getTime(),
      n = e - t.navigationStart;
      if (0 < n) return 0 | 50 * Math.round(n / 50)
    }
    return null
  }
  function n(t) {
    for (var e = document.activeElement; e;) {
      if (e === t) return ! 0;
      e = e.parentNode
    }
    return ! 1
  }
  function i(t, e) {
    return 1 === t.nodeType && 0 <= (" " + t.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + e + " ")
  }
  function r(t) {
    return t.getAdBlock ? t.getAdBlock() : -1
  }
  function a(t) {
    var e = t.getContainer().querySelector("video");
    return e ? e.currentTime: t.getPosition()
  }
  function o(t) {
    try {
      return t.getPlaylistItem()
    } catch(n) {
      var e = t.getPlaylistIndex();
      return t.getConfig().playlist[e] || null
    }
  }
  function u(t) {
    if ("function" == typeof t.getProvider) {
      var e = t.getProvider();
      return e ? e.name: ""
    }
    return ""
  }
  function c(t) {
    return "function" == typeof t.qoe ? 0 | 10 * ti(t.qoe().firstFrame / 10) : -1
  }
  function d(t) {
    if (t.getPlugin) {
      var e = t.getPlugin("vr");
      if (e) switch (e.getMode()) {
      case "magic-window":
        return 0;
      case "cardboard":
        return 1;
      case "gear-vr":
        return 2;
      default:
        return null
      }
    }
    return null
  }
  function s(t) {
    return t.getPlaybackRate ? ti(100 * t.getPlaybackRate()) / 100 : 1
  }
  function f(t) {
    var e = t.getVisualQuality();
    return e && e.level ? {
      width: e.level.width,
      height: e.level.height
    }: {
      width: null,
      height: null
    }
  }
  function l(t) {
    var e = t.getContainer().querySelector("video"),
    n = 0;
    if (e && (n = e.duration, e.buffered && e.buffered.length)) {
      var i = e.buffered.end(e.buffered.length - 1) || 0;
      return ti(10 * i) / 10
    }
    return n || (n = Math.abs(t.getDuration())),
    ti(n * t.getBuffer() / 10) / 10
  }
  function p() {
    var t = window.jwplayer,
    e = 0;
    if ("function" == typeof t) for (e = 0; 1e3 > e; e++) if (!t(e).uniqueId) return e;
    return e
  }
  function h() {
    try {
      var t = window.crypto || window.msCrypto;
      if (t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36)
    } catch(t) {}
    return Math.random().toString(36).slice(2, 9)
  }
  function v(t) {
    for (var e = ""; e.length < t;) e += h();
    return e.slice(0, t)
  }
  function g(t) {
    if (t) {
      if (/vast/.test(t)) return 0;
      if (/googima/.test(t)) return 1;
      if (/freewheel/.test(t)) return 2
    }
    return - 1
  }
  function m(t) {
    var e = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/,
    n = e.exec(t);
    return n && 2 === n.length ? n[1] : null
  }
  function w(t) {
    return t.split("+")[0]
  }
  function k(t) {
    return /^[a-zA-Z0-9]{8}$/.test(t)
  }
  function y(t, e, n) {
    return n.some(t.tracks,
    function(t) {
      var e = t.kind;
      return "captions" === e || "subtitles" === e
    }) ? 1 : 1 < e.getCaptionsList().length ? 2 : 0
  }
  function b(t) {
    return S(t, "feedid")
  }
  function T(t) {
    return S(t, "feed_instance_id")
  }
  function C(t) {
    return t ? t.pin_set_id: null
  }
  function S(t, e) {
    return t ? (t.feedData || {})[e] || t[e] : null
  }
  function P(t, e) {
    var n;
    if (!t) return null;
    var i = t.sources;
    if (i) {
      for (var r = [], a = i.length; a--;) i[a].file && r.push(i[a].file);
      r.sort(),
      n = r[0]
    } else n = t.file;
    return e.getAbsolutePath(n)
  }
  function I(t) {
    if (!t) return null;
    var e = t.mediaid;
    return k(e) ? e: (e = m(t.file), k(e) ? e: null)
  }
  function _(t, e) {
    var n = t.tracks;
    return e.some(n,
    function(t) {
      return "thumbnails" === t.kind
    })
  }
  function A(t) {
    return t ? t.title: null
  }
  function x(t, e) {
    var n = t.sources[0],
    i = n.type;
    if (!i) {
      var r = n.file;
      i = e.extension(r)
    }
    return i
  }
  function R(t) {
    if (!t || !t.stereomode) return null;
    switch (t.stereomode) {
    case "monoscopic":
      return 0;
    case "stereoscopicTopBottom":
      return 1;
    case "stereoscopicLeftRight":
      return 2;
    default:
      return null
    }
  }
  function j(t, e, n) {
    function i(t) {
      return function(i) {
        t(i, e, n)
      }
    }
    var r, a;
    if (t.getPlugin) {
      var o = t.getPlugin("related");
      o && (o.on("playlist", i(D)), o.on("open", i(L)), o.on("play", i(M)), o.on("feedShown",
      function(t) {
        r = t.reason,
        q(t, e, n)
      }), o.on("feedClick",
      function(t) {
        F(t, e, n, r)
      }), o.on("feedAutoAdvance",
      function(t) {
        E(t, e, n, r)
      }));
      var u;
      t.on("playlistItem",
      function() {
        u = !0,
        r = null,
        a = null
      }),
      t.on("nextShown",
      function(t) {
        a = t.reason,
        ("hover" !== t.reason || u) && (u = !1, q(t, e, n))
      }),
      t.on("nextClick",
      function(t) {
        a && F(t, e, n, a)
      }),
      t.on("nextAutoAdvance",
      function(t) {
        a && E(t, e, n, a)
      })
    }
  }
  function D(t, e, n) {
    null === t.playlist || B(ft, t, [], e, n)
  }
  function L(t, e, n) {
    B(lt, t, [], e, n)
  }
  function M(t, e, n) {
    var i = [];
    if ("item" in t) {
      var r;
      r = "play" === t.onclick ? t.item.mediaid: t.item.link,
      i.push(Kn(Ee, r, 17))
    }
    "autoplaytimer" in t && i.push(Kn(Be, t.autoplaytimer, 18)),
    B(st, t, i, e, n)
  }
  function q(t, e, n) {
    var i = t.feedData || {},
    r = t.itemsShown || [],
    a = 0,
    o = r.map(function(t) {
      return C(t) && a++,
      I(t)
    }),
    u = [Kn(Ve, t.ui, 18), Kn(Qe, o.join(","), 19), Kn(He, o.length, 20), Kn(Xe, a, 21), Kn(Ne, t.page, 22), Kn(We, t.reason, 23), Kn($e, i.kind, 24), Kn(Be, t.autoTimer, 25)];
    B(pt, t, u, e, n)
  }
  function F(t, e, n, i) {
    var r = [Kn(Oe, t.index, 19), Kn(Ne, t.page, 22)].concat(O(t, i));
    B(ht, t, r, e, n)
  }
  function E(t, e, n, i) {
    var r = O(t, i);
    B(vt, t, r, e, n)
  }
  function O(t, e) {
    var n = t.feedData || {},
    i = t.itemsShown || [],
    r = t.target;
    return [Kn(Ve, t.ui, 18), Kn(ze, I(r), 20), Kn(He, i.length, 21), Kn(We, e, 23), Kn($e, n.kind, 24), Kn($t, C(r), 25)]
  }
  function B(t, e, n, i, r) {
    var a = b(e);
    a && r.track(t, tt, U(t, a, n, e).concat(i.getPlaylistTrackingParameters()))
  }
  function U(t, e, n, i) {
    if ("onclick" in i && n.push(Kn(De, "play" === i.onclick ? 1 : 0, 19)), "method" in i) {
      var r, a = ni[i.method] || 0;
      t === st ? r = qe: t === lt && (r = Fe),
      r && n.push(Kn(r, a, 20))
    }
    "method_group_id" in i && n.push(Kn(Le, i.method_group_id, 21)),
    "rec_id" in i && n.push(Kn(Me, i.rec_id, 22)),
    "position" in i && n.push(Kn(Oe, i.position + 1, 23));
    var o = T(i);
    if (n.push(Kn(Nt, e, 24), Kn(Wt, o, 25)), t === st) {
      var a = C(i);
      n.push(Kn($t, a, 6))
    }
    return n
  }
  function V(t) {
    return ! ("number" != typeof t) || Math.random() < ri
  }
  function Q(t, e, n, i) {
    e("setupError" === t ? $n: zn, nt, [Kn(Zn, n.code, 17)].concat(i))
  }
  function H(t, e, n) {
    var i = function(e) {
      return function(i) {
        oi < ai && V(i.code) && (oi += 1, Q(e, n, i, t()))
      }
    };
    e.on("error", i("error")),
    e.on("setupError", i("setupError"))
  }
  function X(t, e, n) {
    var i = ui[t.method] || ui.custom;
    n(dt, tt, [Kn(dn, i, 20)].concat(e))
  }
  function N(t, e, n) {
    if (t.getPlugin) {
      var i = t.getPlugin("sharing");
      i && i.on("click",
      function(t) {
        return function(i) {
          t(i, e(), n)
        }
      } (X))
    }
  }
  function W() {
    var t = navigator.plugins;
    if (t && "object" == typeof t["Shockwave Flash"]) {
      var e = t["Shockwave Flash"].description;
      if (e) return e
    }
    if (void 0 !== window.ActiveXObject) try {
      var e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      if (e) {
        var n = e.GetVariable("$version");
        if (n) return n
      }
    } catch(e) {}
    return ""
  }
  function $() {
    var t = yi.jwplayerLocalId;
    if (t) return t;
    try {
      return yi.jwplayerLocalId = v(12),
      yi.jwplayerLocalId
    } catch(t) {}
    return null
  }
  function z(t) {
    return t ? bi[t] || 999 : 0
  }
  function Z(t) {
    return Ti[t] || 0
  }
  function G(t) {
    var e = t.preload;
    return Ci[e] || 0
  }
  function J(t, e, n) {
    return e === 1 / 0 ? null: 0 | t / (e / n) + 1
  }
  function K(t) {
    return t === 1 / 0 ? 1 / 0 : (t |= 0, 0 >= t ? 0 : 30 > t ? 1 : 60 > t ? 4 : 180 > t ? 8 : 300 > t ? 16 : 32)
  }
  function Y(t) {
    return t |= 0,
    0 >= t || t === 1 / 0 ? 0 : 15 > t ? 1 : 300 >= t ? 2 : 1200 >= t ? 3 : 4
  }
  var tt = "jwplayer6",
  et = "clienta",
  nt = "error",
  it = "e",
  rt = "pa",
  at = "s",
  ot = "t",
  ut = "ret",
  ct = "vs",
  dt = "vsh",
  st = "rc",
  ft = "bs",
  lt = "rs",
  pt = "fs",
  ht = "fc",
  vt = "aa",
  gt = "c",
  mt = "ed",
  wt = "d",
  kt = "ph",
  yt = "mu",
  bt = "t",
  Tt = "ti",
  Ct = "pw",
  St = "etw",
  Pt = "tb",
  It = "ps",
  _t = "vs",
  At = "wd",
  xt = "pl",
  Rt = "l",
  jt = "q",
  Dt = "m",
  Lt = "id",
  Mt = "fv",
  qt = "eb",
  Ft = "st",
  Et = "ff",
  Ot = "plt",
  Bt = "pp",
  Ut = "pgi",
  Vt = "prc",
  Qt = "stc",
  Ht = "emi",
  Xt = "pli",
  Nt = "fed",
  Wt = "fid",
  $t = "psd",
  zt = "vp",
  Zt = "po",
  Gt = "s",
  Jt = "r",
  Kt = "sn",
  Yt = "cb",
  te = "ga",
  ee = "pr",
  ne = "vd",
  ie = "mk",
  re = "tt",
  ae = "cct",
  oe = "drm",
  ue = "pd",
  ce = "at",
  de = "df",
  se = "tf",
  fe = "plc",
  le = "pid",
  pe = "dd",
  he = "cp",
  ve = "ab",
  ge = "pad",
  me = "mt",
  we = "vb",
  ke = "vi",
  ye = "vl",
  be = "rf",
  Te = "tvs",
  Ce = "set",
  Se = "pdt",
  Pe = "ccp",
  Ie = "aid",
  _e = "i",
  Ae = "pv",
  xe = "pu",
  Re = "pt",
  je = "sdk",
  De = "os",
  Le = "mgi",
  Me = "ri",
  qe = "rct",
  Fe = "rst",
  Ee = "rn",
  Oe = "oc",
  Be = "rat",
  Ue = "lid",
  Ve = "fin",
  Qe = "fis",
  He = "fns",
  Xe = "fpc",
  Ne = "fpg",
  We = "fsr",
  $e = "ft",
  ze = "fct",
  Ze = "abt",
  Ge = "pbr",
  Je = "pbd",
  Ke = "pbc",
  Ye = "vh",
  tn = "vw",
  en = "ubi",
  nn = "cvl",
  rn = "tvl",
  an = "vso",
  on = "sdt",
  un = "pyc",
  cn = "pii",
  dn = "stg",
  sn = "pss",
  fn = "v",
  ln = "adi",
  pn = "al",
  hn = "p",
  vn = "vv",
  gn = "ct",
  mn = "ad",
  wn = "du",
  kn = "tf",
  yn = "df",
  bn = "pc",
  Tn = "pi",
  Cn = "vu",
  Sn = "qt",
  Pn = "awi",
  In = "awc",
  _n = "ask",
  An = "abk",
  xn = "atk",
  Rn = "sko",
  jn = "abo",
  Dn = "uav",
  Ln = "vr",
  Mn = "vrt",
  qn = "cx",
  Fn = "o",
  En = "cs",
  On = "pip",
  Bn = "sv",
  Un = "bi",
  Vn = "an",
  Qn = "did",
  Hn = "dm",
  Xn = "sc",
  Nn = "ts",
  Wn = "ha",
  $n = "ers",
  zn = "err",
  Zn = "erc",
  Gn = function(t, e) {
    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
  },
  Jn = function t(e, n, i) {
    Gn(this, t),
    this.value = n,
    this.key = e,
    this.priority = i
  },
  Kn = function(t, e, n) {
    return new Jn(t, e, n)
  },
  Yn = function() {
    return "hidden" in document ?
    function() {
      return ! document.hidden
    }: "webkitHidden" in document ?
    function() {
      return ! document.webkitHidden
    }: function() {
      return ! 0
    }
  } (),
  ti = Math.round,
  ei = function(e, i, r, a, u) {
    function c(t, e) {
      u.track(t, et, e)
    }
    function d(t) { - 1 === e.adClient && t && (e.adClient = g(t.client)),
      t.sequence !== S.podIndex && (delete S.timeAdLoading, delete S.adCreativeType),
      s(t, "adbreakid"),
      s(t, "adtagid"),
      s(t, "offset"),
      s(t, "witem"),
      s(t, "wcount"),
      s(t, "skipoffset"),
      s(t, "linear",
      function(t, e) {
        return e === t
      }),
      s(t, "adposition",
      function(t, e) {
        return {
          pre: 0,
          mid: 1,
          post: 2,
          api: 3
        } [e]
      }),
      s(t, "creativetype",
      function(t, e) {
        var n = "";
        return n = "static" === e ? "image/unknown": "video" === e ? "video/unknown": "vpaid" === e || "vpaid-swf" === e ? "application/x-shockwave-flash": "vpaid-js" === e ? "application/javascript": e || n,
        S.adCreativeType = n,
        n
      }),
      s(t, "tag",
      function(t, e) {
        return S.tagdomain = p(a.utils.getAbsolutePath(e)),
        e
      }),
      t.timeLoading && (S.timeAdLoading = 10 * Math.round(t.timeLoading / 10)),
      t.universalAdIdRegistry && "unknown" !== t.universalAdIdRegistry ? S.universalAdId = t.universalAdIdRegistry + "." + t.universalAdIdValue: delete S.universalAdId,
      S.conditionalAd = t.conditionalAd,
      S.conditionalAdOptOut = !!t.conditionalAdOptOut,
      S.mediaFileCompliance = t.mediaFileCompliance,
      S.adSystem = t.adsystem || S.adSystem,
      S.vastVersion = t.vastversion || S.vastVersion,
      S.podIndex = t.sequence || S.podIndex,
      S.podCount = t.podcount || S.podCount
    }
    function s(t, e, n) {
      t.hasOwnProperty(e) && (S[e] = (n || f)(e, t[e]))
    }
    function f(t, e) {
      return e
    }
    function l(t, e) {
      if (y.adscheduleid && e > S.previousQuartile) {
        d(t);
        var n = [Kn(wn, S.duration, 28), Kn(Sn, e, 29)].concat(h()).concat(m());
        c(fn, n),
        S.previousQuartile = e
      }
    }
    function p(t) {
      if (t) {
        var e = t.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/));
        if (e && 1 < e.length) return e[1]
      }
      return ""
    }
    function h() {
      return [Kn(mn, S.adSystem, 17), Kn(vn, S.vastVersion, 18), Kn(gn, S.adCreativeType, 19), Kn(pn, S.linear, 21), Kn(Dn, S.universalAdId, 26), Kn(bn, S.podCount, 30), Kn(Tn, S.podIndex, 31), Kn(yn, t(), 34), Kn(kn, n(a.getContainer()), 35)].concat(v())
    }
    function v() {
      return [Kn(hn, S.adposition, 20), Kn(Cn, S.tagdomain, 22), Kn(ln, S.adId, 25), Kn(Pn, S.witem, 32), Kn(In, S.wcount, 33)].concat(e.getCommonTrackingParameters())
    }
    function m() {
      return [Kn(jn, S.offset, 21), Kn(An, S.adbreakid, 23), Kn(xn, S.adtagid, 24), Kn(Rn, S.skipoffset, 26)]
    }
    var w = {
      numCompanions: -1,
      podCount: 0,
      podIndex: 0,
      linear: -1,
      vastVersion: -1,
      adSystem: "",
      adCreativeType: "",
      adposition: -1,
      tagdomain: "",
      position: "",
      previousQuartile: 0,
      duration: "",
      witem: 1,
      wcount: 1
    },
    k = a.getConfig(),
    y = (k || {}).advertising || {};
    e.adClient = g(y.client),
    e.adScheduleId = y.adscheduleid;
    var S = null;
    a.on("adRequest adMeta adImpression adComplete adSkipped adError adTime",
    function(t) {
      S && S.adId === t.id && -1 !== t.id || (S = this._.extend({
        adId: t.id
      },
      w))
    }).on("adRequest adMeta adImpression adComplete adSkipped adError", d).on("adRequest",
    function() {
      y.adscheduleid && c("ar", v().concat(m()))
    }).on("adImpression",
    function() {
      var t = o(a);
      c("i", [Kn(Nt, b(t), 22), Kn(Wt, T(t), 23), Kn($t, C(t), 24), Kn("tal", S.timeAdLoading, 25), Kn("ca", S.conditionalAd, 30), Kn("cao", S.conditionalAdOptOut, 31), Kn("mfc", S.mediaFileCompliance, 32)].concat(h()).concat(m()))
    }).on("adStarted",
    function() {
      c("as", h().concat(m()))
    }).on("adComplete",
    function(t) {
      l(t, 4)
    }).on("adSkipped",
    function() {
      c("s", [Kn("tw", S.position, 27), Kn(wn, S.duration, 28), Kn(Sn, S.previousQuartile, 29)].concat(m()).concat(h()))
    }).on("adError",
    function(t) {
      if (y.adscheduleid) {
        var e = 1;
        "object" == typeof t && t && "code" in t && (e = t.code);
        c("ae", [Kn(mn, S.adSystem, 17), Kn(gn, S.adCreativeType, 19), Kn(bn, S.podCount, 30), Kn(Tn, S.podIndex, 31), Kn("ec", e, 27), Kn("ca", S.conditionalAd, 30), Kn("cao", S.conditionalAdOptOut, 31), Kn("mfc", S.mediaFileCompliance, 32)].concat(v().concat(m())))
      }
    }).on("adClick",
    function() {
      c("c", [Kn("tw", S.position, 27), Kn(wn, S.duration, 28), Kn(Sn, S.previousQuartile, 29)].concat(h().concat(m())))
    }).on("adTime",
    function(t) {
      if (S.position = t.position, S.duration = S.duration || t.duration, S.duration && !(S.position > S.duration)) {
        l(t, Math.min(3, Math.floor((4 * S.position + .05) / S.duration)))
      }
    })
  },
  ni = {
    play: 1,
    api: 2,
    interaction: 3,
    complete: 4,
    auto: 5,
    manual: 6,
    link: 7
  },
  ii = function(t, e, n) {
    e.on("ready",
    function() {
      j(e, t, n)
    })
  },
  ri = .02,
  ai = 1,
  oi = 0,
  ui = {
    facebook: "fb",
    twitter: "twi",
    email: "em",
    link: "cl",
    embed: "ceb",
    pinterest: "pin",
    tumblr: "tbr",
    googleplus: "gps",
    reddit: "rdt",
    linkedin: "lkn",
    custom: "cus"
  },
  ci = function(t, e, n) {
    e.on("ready",
    function() {
      N(e, t, n)
    })
  },
  di = function(t) {
    var e = 0;
    if (t = decodeURIComponent(t), !t.length) return e;
    for (var n, i = 0; i < t.length; i++) n = t.charCodeAt(i),
    e = (e << 5) - e + n,
    e &= e;
    return e
  },
  si = function() {
    function t(e, n, i) {
      Gn(this, t);
      var r = this;
      "function" == typeof e.onping && (r.onping = e.onping);
      var a = i.ownerDocument || window.document,
      o = "complete" === a.readyState;
      r.config = e,
      r.pageLoaded = o,
      r.queue = [],
      r.images = [],
      r.debug = n,
      r.flushQueue = function() {
        r.pageLoaded = !0;
        for (var t = r.queue.length; t--;) r.ping(r.queue.shift());
        window.removeEventListener("load", r.flushQueue)
      },
      o || (window.addEventListener && window.addEventListener("load", r.flushQueue), setTimeout(r.flushQueue, 5e3))
    }
    return t.prototype.track = function(t, e, n) {
      var i = this.buildTrackingURL(t, e, n),
      r = !this.pageLoaded;
      if (!r || "i" !== t && "ar" !== t && "as" !== t) {
        if (r) return void this.queue.push(i)
      } else this.flushQueue();
      this.ping(i)
    },
    t.prototype.ping = function(t) {
      var e = new Image;
      e.src = t;
      for (var n = this.images,
      i = n.length; i--&&(n[i].width || n[i].complete);) n.length = i;
      if (n.push(e), this.debug && this.onping) try {
        this.onping.call(this, t)
      } catch(t) {}
    },
    t
  } (),
  fi = {
    pro: 1,
    premium: 2,
    ads: 3,
    invalid: 4,
    enterprise: 6,
    trial: 7,
    platinum: 8,
    starter: 9,
    business: 10
  },
  li = function(t, e) {
    var n, i = 0;
    if (t) {
      var r = new e(t),
      a = r.edition();
      4 !== (i = fi[a] || 0) && (n = r.token())
    }
    n || (n = "_");
    var o = {};
    return o[Ie] = n,
    o[mt] = i,
    o
  },
  pi = function() {
    var t = W().replace(/\D+(\d+\.?\d*).*/, "$1");
    return function() {
      return t
    }
  } (),
  hi = function(t) {
    if (t) return {};
    var e = "",
    n = "",
    i = window.top !== window.self;
    if (i) {
      e = document.referrer;
      try {
        e = e || window.top.location.href,
        n = window.top.document.title
      } catch(t) {}
    }
    var r = {};
    return r[xe] = e || window.location.href,
    r[Re] = n || document.title,
    r[_e] = i,
    r[Mt] = pi(),
    r
  },
  vi = function(t, e, n) {
    var i = {};
    return i[Ae] = w(t.version),
    i[je] = e.sdkplatform || 0,
    i[Ht] = v(12),
    n && (i[Qn] = e.mobiledeviceid, i[Bn] = e.iossdkversion, i[Hn] = e.mobiledevicemodel, i[Un] = e.bundleid, i[Vn] = e.applicationname, i[Xn] = e.systemcaptions, i[Nn] = e.texttospeech, i[Wn] = e.hardwareacceleration),
    i
  },
  gi = function(t) {
    var e = {},
    n = window.jwplayer ? window.jwplayer.defaults || {}: {};
    e[kt] = t[kt] || n[kt] || 0,
    e[le] = t.pid,
    e[ge] = t.pad,
    e[Kt] = t.skin,
    e[ve] = !!t.advertising,
    e[Gt] = !!t.sharing,
    e[Yt] = !!t.cast,
    e[te] = !!t.ga,
    e[wt] = !!t.autostart,
    e[Dt] = 1,
    e[zt] = !1 !== t.visualplaylist,
    e[pe] = !1 !== t.displaydescription,
    e[Zt] = !!t.image,
    e[Ke] = !!t.playbackRateControls;
    var i = t.related;
    return e[Jt] = !!i,
    i && (e[be] = i.recommendations || i.file),
    e
  },
  mi = Math.round,
  wi = function(t) {
    var e = t.getConfig(),
    n = e.containerWidth || t.getWidth(),
    r = e.containerHeight || t.getHeight();
    if (/\d+%/.test(n)) {
      var a = t.utils.bounds(t.getContainer());
      n = a.width,
      r = a.height
    }
    return n = 0 | mi(n),
    r = 0 | mi(r),
    /\d+%/.test(e.width || n) && e.aspectratio ? {
      bucket: 4,
      width: n,
      height: r
    }: i(t.getContainer(), "jw-flag-audio-player") ? {
      bucket: 5,
      width: n,
      height: r
    }: 0 === n ? {
      bucket: 0,
      width: n,
      height: r
    }: 320 >= n ? {
      bucket: 1,
      width: n,
      height: r
    }: 640 >= n ? {
      bucket: 2,
      width: n,
      height: r
    }: {
      bucket: 3,
      width: n,
      height: r
    }
  },
  ki = function(t, e, n) {
    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
    if (!e) return null;
    if (n && n.levels && n.levels.length) {
      var a = n.levels[0];
      if (a && "auto" === ("" + a.label).toLowerCase()) return 5
    }
    if (i(t.getContainer(), "jw-flag-audio-player")) return 6;
    var o = 0 | r.width,
    u = 0 | r.height;
    if (0 == o && 0 == u) {
      var a = e.sources;
      return "rtmp" === a[0].type ? 6 : 0
    }
    return 320 >= o ? 1 : 640 >= o ? 2 : 1280 >= o ? 3 : 4
  },
  yi = {};
  try {
    yi = window.localStorage
  } catch(t) {}
  var bi = {
    aes: 1,
    widevine: 2,
    playready: 3,
    fairplay: 4
  },
  Ti = {
    interaction: 1,
    autostart: 2,
    repeat: 3,
    external: 4,
    "related-interaction": 1,
    "related-auto": 5,
    playlist: 6
  },
  Ci = {
    none: 1,
    metadata: 2,
    auto: 3
  },
  Si = function() {
    function t(e) {
      Gn(this, t),
      this._api = e,
      this.previousBufferTime = this.getTotalUnderBufferTime()
    }
    return t.prototype.getTotalUnderBufferTime = function() {
      try {
        return this._api.qoe().item.sums.stalled || 0
      } catch(t) {
        return 0
      }
    },
    t.prototype.getUnderBufferTimeDelta = function() {
      var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
      e = this.getTotalUnderBufferTime(),
      n = Math.round(e - this.previousBufferTime);
      return t && (this.previousBufferTime = e),
      n
    },
    t
  } (),
  Pi = function() {
    function t(e) {
      Gn(this, t),
      this._generateTrackingFunc = e,
      this._numTrackedSeeks = 0,
      this._setupTrackingParams()
    }
    return t.prototype._isTrackingSeek = function() {
      return 0 < this._numTrackedSeeks
    },
    t.prototype.trackSeek = function(t) {
      this._isTrackingSeek() || (this._trackingParams.videoStartDragTime = t.position, this._trackingParams.dragStartTime = Date.now()),
      this._numTrackedSeeks++,
      this._trackingParams.lastTargetTime = t.offset
    },
    t.prototype.trackSeekEnd = function() {
      var t = this;
      if (this._isTrackingSeek()) {
        clearTimeout(this._trackingParams.seekDebounceTimeout);
        var e = Date.now() - this._trackingParams.dragStartTime;
        1 === this._numTrackedSeeks && (e = 0);
        var n = this._generateTrackingFunc(this._trackingParams.videoStartDragTime, this._trackingParams.lastTargetTime, e);
        this._trackingParams.seekDebounceTimeout = setTimeout(function() {
          n(),
          t._resetSeekData()
        },
        1e3)
      }
    },
    t.prototype._setupTrackingParams = function() {
      this._trackingParams = {
        videoStartDragTime: 0,
        dragStartTime: 0,
        seekDebounceTimeout: -1,
        lastTargetTime: 0
      }
    },
    t.prototype._resetSeekData = function() {
      this._setupTrackingParams(),
      this._numTrackedSeeks = 0
    },
    t
  } (),
  Ii = Math.floor,
  _i = Math.round,
  Ai = "play",
  xi = "meta",
  Ri = "levels",
  ji = "firstFrame",
  Di = v(12),
  Li = 0,
  Mi = function(i, h) {
    function g(t) {
      t = t || o(i);
      var e, n = u(i),
      a = wi(i),
      c = Yn(),
      d = i.getConfig(),
      f = d.visibility,
      l = N.isUndefined(f) ? f: _i(100 * f) / 100,
      h = d.defaultPlaybackRate;
      i.getViewable && (e = i.getViewable());
      var v = [Kn(Ie, st[Ie], 3), Kn(mt, st[mt], 4), Kn(Ae, pt[Ae], 5), Kn(je, pt[je], 6), Kn(Ht, pt[Ht], 7), Kn(kt, ft[kt], 8), Kn(le, ft[le], 9), Kn(Ut, Di, 10), Kn(Vt, p(), 10), Kn(Qt, vt, 10), Kn(Ue, $(), 10), Kn(Xt, De.itemId, 11), Kn(Lt, De.mediaId || I(t), 12), Kn(Te, t[Te] || 0, 13), Kn(Ce, t[Ce] || null, 14), Kn(gt, Le.adClient, 15), Kn(_n, Le.adScheduleId, 16), Kn(wt, ft[wt], 36), Kn(Bt, n, 37), Kn(It, a.bucket, 38), Kn(At, a.width, 39), Kn(xt, a.height, 40), Kn(ke, l, 42), Kn(ce, c, 43), Kn(_e, lt[_e], 44), Kn(ye, i.getVolume(), 45), Kn(me, i.getMute(), 46), Kn(Pe, Xe, 47), Kn(qt, r(i), 48), Kn(Ge, s(i), 49), Kn(Je, h, 50), Kn(Dt, !0, 101), Kn(he, !i.getControls(), 102), Kn(un, $e, 103), Kn(cn, De.index, 104), Kn(sn, ze, 105), Kn(bt, A(t), 106), Kn(xe, lt[xe], 107), Kn(Re, lt[Re], 108)];
      nt && v.push(Kn(Qn, pt[Qn], 49), Kn(Bn, pt[Bn], 50), Kn(Hn, pt[Hn], 51), Kn(Un, pt[Un], 52), Kn(Vn, pt[Vn], 53), Kn(Xn, pt[Xn], 54), Kn(Nn, pt[Nn], 55), Kn(Wn, pt[Wn], 56)),
      N.isUndefined(e) || v.push(Kn(we, e, 41));
      var g = d.ab;
      if (g && g.tests) {
        var m = Object.keys(g.tests).map(function(t) {
          return g.getSelected(t).join(",")
        }).join(",");
        v.push(Kn(Ze, m, 8))
      }
      return v
    }
    function m(t) {
      return [Kn(yt, P(t, W), 100)].concat(g(t))
    }
    function w(t, e) {
      return [Kn(jt, e, 29), Kn(Ln, d(i), 30)].concat(m(t))
    }
    function k(t) {
      De.playReason = t.playReason || "",
      De.mediaId = I(t.item || o(i)),
      L() && q()
    }
    function S() {
      qe = {},
      Fe = !1,
      Ee = 0
    }
    function j(t) {
      return function(e) {
        var n = qe[t];
        if (t === xi) {
          var r = (e.metadata || e).TXXX;
          if (r) {
            var o = r.programDateTime;
            if (o) {
              var c = Date.parse(o);
              isNaN(c) || O(null, Be || 1, null, o)
            }
          }
          e = e.metadata || e;
          var d = e.segment;
          if (d && (Ne = !0, We = d.encryption), De.drm = e.drm || "", n && (e.width = e.width || n.width, e.height = e.height || n.height, e.duration = e.duration || n.duration), (100 === e.duration || 0 === e.duration) && 0 === e.width && 0 === e.height) return
        }
        if (qe[t] = e, t === Ai && (!n && (Be = 0, Ve = 0), Qe = a(i)), qe[Ai] && qe[xi] && qe[Ri] && qe[ji]) {
          var r = u(i);
          "flash_adaptive" === r ? !Fe && Ne && (Fe = !0, Ne = !1, E()) : !Fe && (Fe = !0, E())
        }
      }
    }
    function D() {
      var t = i.getDuration();
      if (0 >= t) {
        var e = qe[xi];
        e && (t = e.duration)
      }
      return 0 | t
    }
    function L() {
      return !! De.mediaId
    }
    function M() {
      Oe || (Oe = new Pi(B))
    }
    function q() {
      var t = o(i),
      e = D(),
      n = f(i);
      Me.track(rt, tt, [Kn(ee, Z(De.playReason), 17), Kn(Nt, b(t), 18), Kn(Wt, T(t), 19), Kn($t, C(t), 20), Kn(ue, G(t), 21), Kn(Pt, l(i), 22), Kn(ne, e, 23), Kn(Ye, n.height, 24), Kn(tn, n.width, 25)].concat(m(t)))
    }
    function F(t, n) {
      var i = -1;
      n && n.setupTime && (i = 0 | 10 * _i(n.setupTime / 10)),
      Me.track(it, tt, [Kn(Mt, lt[Mt], 17), Kn(Ot, e(), 19), Kn(Ft, i, 20), Kn(ue, G(t), 21), Kn(zt, ft[zt], 22), Kn(ve, ft[ve], 23), Kn(Zt, ft[Zt], 24), Kn(Gt, ft[Gt], 25), Kn(Jt, ft[Jt], 26), Kn(Kt, ft[Kt], 27), Kn(ge, ft[ge], 28), Kn(Yt, ft[Yt], 29), Kn(te, ft[te], 30), Kn(pe, ft[pe], 31), Kn(be, ft[be], 32), Kn(Mn, R(t), 33), Kn(Ke, ft[Ke], 34)].concat(m(t)))
    }
    function E() {
      $e++;
      var t = D(),
      e = o(i),
      n = ki(i, e, qe[Ri], qe[xi]),
      r = f(i);
      Me.track(at, tt, [Kn(_t, n, 17), Kn(Rt, Y(t), 18), Kn(ne, t, 19), Kn(ie, x(e, W), 20), Kn(ue, G(e), 21), Kn(Pt, l(i), 22), Kn(fe, i.getPlaylist().length, 21), Kn(Nt, b(e), 22), Kn(Wt, T(e), 23), Kn($t, C(e), 23), Kn(ee, Z(De.playReason), 23), Kn(Et, c(i), 24), Kn(re, _(e, N), 25), Kn(oe, z(De.drm) || We, 26), Kn(ae, y(e, i, N), 27), Kn(Mn, R(e), 28), Kn(Ye, r.height, 57), Kn(tn, r.width, 58)].concat(w(e, K(t))).concat(V()))
    }
    function O(e, r, a, u) {
      if (Be = 0, !!L()) {
        var c = o(i),
        d = [];
        if (u) {
          if (!c[Te]) return;
          d.push(Kn(Se, u, 23))
        }
        var s = 0 | r + .5;
        if (0 < s) {
          var l = f(i);
          Me.track(ot, tt, [Kn(Tt, s, 20), Kn(Ct, 0 | e, 21), Kn(Nt, b(c), 22), Kn(Wt, T(c), 23), Kn(de, t(), 30), Kn(se, n(i.getContainer()), 31), Kn(Ye, l.height, 57), Kn(tn, l.width, 58), Kn(en, He.getUnderBufferTimeDelta(), 59)].concat(d).concat(w(c, a)).concat(Q()))
        }
      }
    }
    function B(t, e, n) {
      t = Ii(t),
      e = Ii(e),
      n = Ii(n);
      var i = e - t;
      return 0 == i ?
      function() {}: Me.track.bind(Me, ct, tt, [Kn(nn, t, 20), Kn(rn, e, 21), Kn(an, i, 22), Kn(on, n, 23)].concat(g()))
    }
    function U(e, r, a) {
      if (L() && e < a && e + r >= a) {
        var u = o(i),
        c = f(i);
        Me.track(ut, tt, [Kn(St, a), Kn(Nt, b(u), 22), Kn(Wt, T(u), 23), Kn(de, t(), 30), Kn(se, n(i.getContainer()), 31), Kn(Ye, c.height, 57), Kn(tn, c.width, 58)].concat(w(u, K(D()))).concat(Q()))
      }
    }
    function V() {
      return nt ? [Kn(qn, ht.cx, 32), Kn(Fn, ht.o, 33)] : []
    }
    function Q() {
      return nt ? [Kn(Fn, ht.o, 32), Kn(En, ht.cs, 33), Kn(On, ht.pip, 34)] : []
    }
    function X(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      L() && (M(), e ? Oe.trackSeekEnd(t) : Oe.trackSeek(t))
    }
    var N = i._,
    W = i.utils,
    et = !0 === h.debug,
    nt = parseInt(h.sdkplatform, 10),
    dt = i.getConfig(),
    st = li(dt.key, W.key),
    ft = gi(dt),
    lt = hi(nt),
    pt = vi(i, h, nt),
    ht = {};
    nt && (ht.cx = 0, ht.o = 0, ht.cs = 0, ht.pip = 0),
    Li += 1;
    var vt = Li,
    De = {
      ready: null,
      item: null,
      drm: "",
      index: 0,
      itemId: "",
      mediaId: "",
      playReason: ""
    },
    Le = this,
    Me = new si(h, et, i.getContainer());
    ei(Le, 0, 0, i, Me),
    ii(Le, i, Me);
    var qe, Fe, Ee, Oe, Be = 0,
    Ve = 0,
    Qe = null,
    He = new Si(i),
    Xe = !1,
    Ne = !1,
    We = !1,
    $e = 0,
    ze = 0;
    Le.getCommonTrackingParameters = function() {
      return g(o(i))
    },
    H(g, i, Me.track.bind(Me)),
    ci(g, i,
    function() {
      L() && Me.track.apply(Me, arguments)
    }),
    Le.getPlaylistTrackingParameters = function() {
      return m(o(i))
    },
    i.on("mobile-sdk-lt",
    function(t) {
      N.extend(ht, t)
    }),
    i.on("idle", S),
    i.on("ready",
    function(t) {
      De.ready = N.extend({},
      t),
      De.item = o(i)
    }),
    i.on("playlistItem",
    function(t) {
      De.drm = "",
      De.itemId = v(12),
      ze++,
      De.index = t.index,
      De.ready && (F(De.item || o(i), De.ready), De.item = null, De.ready = null),
      i.off("beforePlay", k),
      i.once("beforePlay", k),
      S(),
      Ne = We = !1
    }),
    i.on("meta", j(xi)),
    i.on("levels", j(Ri)),
    i.on("play", j(Ai)),
    i.on("firstFrame", j(ji)),
    i.on("time",
    function(t) {
      var e = a(i),
      n = t.duration;
      if (e) {
        if (1 < e) {
          if (!qe[xi]) {
            var r = {
              duration: n
            },
            o = i.getContainer().querySelector("video");
            o && (r.width = o.videoWidth, r.height = o.videoHeight),
            j(xi)(r)
          }
          qe[Ri] || j(Ri)({})
        }
        var u = K(n),
        c = J(e, n, u);
        0 === Ee && (Ee = c),
        null === Qe && (Qe = e);
        var d = e - Qe;
        if (Qe = e, d = Math.min(Math.max(0, d), 4), Be += d, U(Ve, d, 10), U(Ve, d, 30), U(Ve, d, 60), Ve += d, !(0 >= n || n === 1 / 0) && c === Ee + 1) {
          var r = 128 * Ee / u;
          if (Ee = 0, c > u) return;
          O(r, Be, u)
        }
      }
    }),
    i.on("seek",
    function(t) {
      Qe = a(i),
      Ee = 0,
      X(t)
    }),
    i.on("seeked",
    function(t) {
      X(t, !0)
    }),
    i.on("complete",
    function() {
      var t = D();
      if (! (0 >= t || t === 1 / 0)) {
        var e = K(t);
        O(128, Be, e),
        Ve = 0
      }
    }),
    i.on("cast",
    function(t) {
      Xe = !!t.active
    });
    var dn = dt.defaultPlaybackRate || 1;
    i.on("playbackRateChanged",
    function(t) {
      L() && Me.track("pru", tt, [Kn("ppr", dn, 20)].concat(Le.getCommonTrackingParameters())),
      dn = t.playbackRate
    }),
    S()
  }; (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("jwpsrv", "7.0", Mi)
} ();