! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/app/themes/theblimp/dist/", n(n.s = 11)
}([function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return o
    }), n.d(e, "a", function() {
        return o
    });
    var i = n(7),
        r = n(20),
        o = i.y.registerPlugin(r.a) || i.y;
    o.core.Tween
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return le
    });
    var i, r, o, s, a, l, u, c, h, d, p, f, m, g, v, y, b, D, w, _, x, C, T, k, E, S, A, F, M, O, P, L, N, I, j, B, R = n(19),
        q = 1,
        z = Date.now,
        V = z(),
        H = 0,
        W = 0,
        X = function(t, e, n) {
            var i = rt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return n["_" + e + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t
        },
        Y = function(t, e) {
            return !e || rt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
        },
        U = function() {
            return g = 1
        },
        K = function() {
            return g = 0
        },
        G = function(t) {
            return t
        },
        Q = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        $ = function() {
            return "undefined" != typeof window
        },
        J = function() {
            return i || $() && (i = window.gsap) && i.registerPlugin && i
        },
        Z = function(t) {
            return !!~u.indexOf(t)
        },
        tt = function(t) {
            return ("Height" === t ? P : o["inner" + t]) || a["client" + t] || l["client" + t]
        },
        et = function(t) {
            return Object(R.b)(t, "getBoundingClientRect") || (Z(t) ? function() {
                return ee.width = o.innerWidth, ee.height = P, ee
            } : function() {
                return mt(t)
            })
        },
        nt = function(t, e) {
            var n = e.s,
                i = e.d2,
                r = e.d,
                o = e.a;
            return Math.max(0, (n = "scroll" + i) && (o = Object(R.b)(t, n)) ? o() - et(t)()[r] : Z(t) ? (a[n] || l[n]) - tt(i) : t[n] - t["offset" + i])
        },
        it = function(t, e) {
            for (var n = 0; n < w.length; n += 3)(!e || ~e.indexOf(w[n + 1])) && t(w[n], w[n + 1], w[n + 2])
        },
        rt = function(t) {
            return "string" == typeof t
        },
        ot = function(t) {
            return "function" == typeof t
        },
        st = function(t) {
            return "number" == typeof t
        },
        at = function(t) {
            return "object" == typeof t
        },
        lt = function(t, e, n) {
            return t && t.progress(e ? 0 : 1) && n && t.pause()
        },
        ut = function(t, e) {
            if (t.enabled) {
                var n = e(t);
                n && n.totalTime && (t.callbackAnimation = n)
            }
        },
        ct = Math.abs,
        ht = "padding",
        dt = "px",
        pt = function(t) {
            return o.getComputedStyle(t)
        },
        ft = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        mt = function(t, e) {
            var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== pt(t)[v] && i.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                r = t.getBoundingClientRect();
            return n && n.progress(0).kill(), r
        },
        gt = function(t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0
        },
        vt = function(t) {
            var e, n = [],
                i = t.labels,
                r = t.duration();
            for (e in i) n.push(i[e] / r);
            return n
        },
        yt = function(t) {
            var e = i.utils.snap(t),
                n = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                    return t - e
                });
            return n ? function(t, i, r) {
                var o;
                if (void 0 === r && (r = .001), !i) return e(t);
                if (i > 0) {
                    for (t -= r, o = 0; o < n.length; o++)
                        if (n[o] >= t) return n[o];
                    return n[o - 1]
                }
                for (o = n.length, t += r; o--;)
                    if (n[o] <= t) return n[o];
                return n[0]
            } : function(n, i, r) {
                void 0 === r && (r = .001);
                var o = e(n);
                return !i || Math.abs(o - n) < r || o - n < 0 == i < 0 ? o : e(i < 0 ? n - t : n + t)
            }
        },
        bt = function(t, e, n, i) {
            return n.split(",").forEach(function(n) {
                return t(e, n, i)
            })
        },
        Dt = function(t, e, n, i, r) {
            return t.addEventListener(e, n, {
                passive: !i,
                capture: !!r
            })
        },
        wt = function(t, e, n, i) {
            return t.removeEventListener(e, n, !!i)
        },
        _t = function(t, e, n) {
            (n = n && n.wheelHandler) && (t(e, "wheel", n), t(e, "touchmove", n))
        },
        xt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Ct = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Tt = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        kt = function(t, e) {
            if (rt(t)) {
                var n = t.indexOf("="),
                    i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                ~n && (t.indexOf("%") > n && (i *= e / 100), t = t.substr(0, n - 1)), t = i + (t in Tt ? Tt[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        Et = function(t, e, n, i, r, o, a, u) {
            var c = r.startColor,
                h = r.endColor,
                d = r.fontSize,
                p = r.indent,
                f = r.fontWeight,
                m = s.createElement("div"),
                g = Z(n) || "fixed" === Object(R.b)(n, "pinType"),
                v = -1 !== t.indexOf("scroller"),
                y = g ? l : n,
                b = -1 !== t.indexOf("start"),
                D = b ? c : h,
                w = "border-color:" + D + ";font-size:" + d + ";color:" + D + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return w += "position:" + ((v || u) && g ? "fixed;" : "absolute;"), (v || u || !g) && (w += (i === R.i ? "right" : "bottom") + ":" + (o + parseFloat(p)) + "px;"), a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), m._isStart = b, m.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), m.style.cssText = w, m.innerText = e || 0 === e ? t + "-" + e : t, y.children[0] ? y.insertBefore(m, y.children[0]) : y.appendChild(m), m._offset = m["offset" + i.op.d2], St(m, 0, i, b), m
        },
        St = function(t, e, n, r) {
            var o = {
                    display: "block"
                },
                s = n[r ? "os2" : "p2"],
                a = n[r ? "p2" : "os2"];
            t._isFlipped = r, o[n.a + "Percent"] = r ? -100 : 0, o[n.a] = r ? "1px" : 0, o["border" + s + "Width"] = 1, o["border" + a + "Width"] = 0, o[n.p] = e + "px", i.set(t, o)
        },
        At = [],
        Ft = {},
        Mt = function() {
            return z() - H > 34 && (N || (N = requestAnimationFrame(Kt)))
        },
        Ot = function() {
            (!T || !T.isPressed || T.startX > l.clientWidth) && (R.h.cache++, T ? N || (N = requestAnimationFrame(Kt)) : Kt(), H || Bt("scrollStart"), H = z())
        },
        Pt = function() {
            S = o.innerWidth, E = o.innerHeight
        },
        Lt = function() {
            R.h.cache++, !m && !C && !s.fullscreenElement && !s.webkitFullscreenElement && (!k || S !== o.innerWidth || Math.abs(o.innerHeight - E) > .25 * o.innerHeight) && c.restart(!0)
        },
        Nt = {},
        It = [],
        jt = function t() {
            return wt(le, "scrollEnd", t) || Xt(!0)
        },
        Bt = function(t) {
            return Nt[t] && Nt[t].map(function(t) {
                return t()
            }) || It
        },
        Rt = [],
        qt = function(t) {
            for (var e = 0; e < Rt.length; e += 5)(!t || Rt[e + 4] && Rt[e + 4].query === t) && (Rt[e].style.cssText = Rt[e + 1], Rt[e].getBBox && Rt[e].setAttribute("transform", Rt[e + 2] || ""), Rt[e + 3].uncache = 1)
        },
        zt = function(t, e) {
            var n;
            for (y = 0; y < At.length; y++) !(n = At[y]) || e && n._ctx !== e || (t ? n.kill(1) : n.revert(!0, !0));
            e && qt(e), e || Bt("revert")
        },
        Vt = function(t, e) {
            R.h.cache++, (e || !I) && R.h.forEach(function(t) {
                return ot(t) && t.cacheID++ && (t.rec = 0)
            }), rt(t) && (o.history.scrollRestoration = M = t)
        },
        Ht = 0,
        Wt = function() {
            l.appendChild(O), P = O.offsetHeight || o.innerHeight, l.removeChild(O)
        },
        Xt = function(t, e) {
            if (!H || t) {
                Wt(), I = le.isRefreshing = !0, R.h.forEach(function(t) {
                    return ot(t) && ++t.cacheID && (t.rec = t())
                });
                var n = Bt("refreshInit");
                _ && le.sort(), e || zt(), R.h.forEach(function(t) {
                    ot(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                }), At.slice(0).forEach(function(t) {
                    return t.refresh()
                }), At.forEach(function(t, e) {
                    if (t._subPinOffset && t.pin) {
                        var n = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            i = t.pin[n];
                        t.revert(!0, 1), t.adjustPinSpacing(t.pin[n] - i), t.refresh()
                    }
                }), At.forEach(function(t) {
                    var e = nt(t.scroller, t._dir);
                    ("max" === t.vars.end || t._endClamp && t.end > e) && t.setPositions(t.start, Math.max(t.start + 1, e), !0)
                }), n.forEach(function(t) {
                    return t && t.render && t.render(-1)
                }), R.h.forEach(function(t) {
                    ot(t) && (t.smooth && requestAnimationFrame(function() {
                        return t.target.style.scrollBehavior = "smooth"
                    }), t.rec && t(t.rec))
                }), Vt(M, 1), c.pause(), Ht++, I = 2, Kt(2), At.forEach(function(t) {
                    return ot(t.vars.onRefresh) && t.vars.onRefresh(t)
                }), I = le.isRefreshing = !1, Bt("refresh")
            } else Dt(le, "scrollEnd", jt)
        },
        Yt = 0,
        Ut = 1,
        Kt = function(t) {
            if (!I || 2 === t) {
                le.isUpdating = !0, B && B.update(0);
                var e = At.length,
                    n = z(),
                    i = n - V >= 50,
                    r = e && At[0].scroll();
                if (Ut = Yt > r ? -1 : 1, I || (Yt = r), i && (H && !g && n - H > 200 && (H = 0, Bt("scrollEnd")), p = V, V = n), Ut < 0) {
                    for (y = e; y-- > 0;) At[y] && At[y].update(0, i);
                    Ut = 1
                } else
                    for (y = 0; y < e; y++) At[y] && At[y].update(0, i);
                le.isUpdating = !1
            }
            N = 0
        },
        Gt = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Qt = Gt.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", ht, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
        $t = function(t, e, n, i) {
            if (!t._gsap.swappedIn) {
                for (var r, o = Gt.length, s = e.style, a = t.style; o--;) s[r = Gt[o]] = n[r];
                s.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (s.display = "inline-block"), a.bottom = a.right = "auto", s.flexBasis = n.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s.width = gt(t, R.f) + dt, s.height = gt(t, R.i) + dt, s.padding = a.margin = a.top = a.left = "0", Zt(i), a.width = a.maxWidth = n.width, a.height = a.maxHeight = n.height, a.padding = n.padding, t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
            }
        },
        Jt = /([A-Z])/g,
        Zt = function(t) {
            if (t) {
                var e, n, r = t.t.style,
                    o = t.length,
                    s = 0;
                for ((t.t._gsap || i.core.getCache(t.t)).uncache = 1; s < o; s += 2) n = t[s + 1], e = t[s], n ? r[e] = n : r[e] && r.removeProperty(e.replace(Jt, "-$1").toLowerCase())
            }
        },
        te = function(t) {
            for (var e = Qt.length, n = t.style, i = [], r = 0; r < e; r++) i.push(Qt[r], n[Qt[r]]);
            return i.t = t, i
        },
        ee = {
            left: 0,
            top: 0
        },
        ne = function(t, e, n, r, o, s, u, c, h, d, p, f, m, g) {
            ot(t) && (t = t(c)), rt(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? kt("0" + t.substr(3), n) : 0));
            var v, y, b, D = m ? m.time() : 0;
            if (m && m.seek(0), isNaN(t) || (t = +t), st(t)) m && (t = i.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, f, t)), u && St(u, n, r, !0);
            else {
                ot(e) && (e = e(c));
                var w, _, x, C, T = (t || "0").split(" ");
                b = Object(R.d)(e, c) || l, (w = mt(b) || {}) && (w.left || w.top) || "none" !== pt(b).display || (C = b.style.display, b.style.display = "block", w = mt(b), C ? b.style.display = C : b.style.removeProperty("display")), _ = kt(T[0], w[r.d]), x = kt(T[1] || "0", n), t = w[r.p] - h[r.p] - d + _ + o - x, u && St(u, x, r, n - x < 20 || u._isStart && x > 20), n -= n - x
            }
            if (g && (c[g] = t || -.001, t < 0 && (t = 0)), s) {
                var k = t + n,
                    E = s._isStart;
                v = "scroll" + r.d2, St(s, k, r, E && k > 20 || !E && (p ? Math.max(l[v], a[v]) : s.parentNode[v]) <= k + 1), p && (h = mt(u), p && (s.style[r.op.p] = h[r.op.p] - r.op.m - s._offset + dt))
            }
            return m && b && (v = mt(b), m.seek(f), y = mt(b), m._caScrollDist = v[r.p] - y[r.p], t = t / m._caScrollDist * f), m && m.seek(D), m ? t : Math.round(t)
        },
        ie = /(webkit|moz|length|cssText|inset)/i,
        re = function(t, e, n, r) {
            if (t.parentNode !== e) {
                var o, s, a = t.style;
                if (e === l) {
                    for (o in t._stOrig = a.cssText, s = pt(t)) + o || ie.test(o) || !s[o] || "string" != typeof a[o] || "0" === o || (a[o] = s[o]);
                    a.top = n, a.left = r
                } else a.cssText = t._stOrig;
                i.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        },
        oe = function(t, e, n) {
            var i = e,
                r = i;
            return function(e) {
                var o = Math.round(t());
                return o !== i && o !== r && Math.abs(o - i) > 3 && Math.abs(o - r) > 3 && (e = o, n && n()), r = i, i = e, e
            }
        },
        se = function(t, e, n) {
            var r = {};
            r[e.p] = "+=" + n, i.set(t, r)
        },
        ae = function(t, e) {
            var n = Object(R.c)(t, e),
                r = "_scroll" + e.p2,
                o = function e(o, s, a, l, u) {
                    var c = e.tween,
                        h = s.onComplete,
                        d = {};
                    a = a || n();
                    var p = oe(n, a, function() {
                        c.kill(), e.tween = 0
                    });
                    return u = l && u || 0, l = l || o - a, c && c.kill(), s[r] = o, s.modifiers = d, d[r] = function() {
                        return p(a + l * c.ratio + u * c.ratio * c.ratio)
                    }, s.onUpdate = function() {
                        R.h.cache++, Kt()
                    }, s.onComplete = function() {
                        e.tween = 0, h && h.call(c)
                    }, c = e.tween = i.to(t, s)
                };
            return t[r] = n, n.wheelHandler = function() {
                return o.tween && o.tween.kill() && (o.tween = 0)
            }, Dt(t, "wheel", n.wheelHandler), le.isTouch && Dt(t, "touchmove", n.wheelHandler), o
        },
        le = function() {
            function t(e, n) {
                r || t.register(i), F(this), this.init(e, n)
            }
            return t.prototype.init = function(e, n) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), W) {
                    var r, u, c, f, v, b, D, w, C, T, k, E, S, A, F, M, O, P, N, V, U, K, $, J, it, bt, _t, Tt, St, Mt, Pt, Nt, It, Bt, Rt, qt, zt, Vt, Wt, Yt, Kt, Gt, Qt = e = ft(rt(e) || st(e) || e.nodeType ? {
                            trigger: e
                        } : e, Ct),
                        Jt = Qt.onUpdate,
                        ie = Qt.toggleClass,
                        oe = Qt.id,
                        le = Qt.onToggle,
                        ue = Qt.onRefresh,
                        ce = Qt.scrub,
                        he = Qt.trigger,
                        de = Qt.pin,
                        pe = Qt.pinSpacing,
                        fe = Qt.invalidateOnRefresh,
                        me = Qt.anticipatePin,
                        ge = Qt.onScrubComplete,
                        ve = Qt.onSnapComplete,
                        ye = Qt.once,
                        be = Qt.snap,
                        De = Qt.pinReparent,
                        we = Qt.pinSpacer,
                        _e = Qt.containerAnimation,
                        xe = Qt.fastScrollEnd,
                        Ce = Qt.preventOverlaps,
                        Te = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? R.f : R.i,
                        ke = !ce && 0 !== ce,
                        Ee = Object(R.d)(e.scroller || o),
                        Se = i.core.getCache(Ee),
                        Ae = Z(Ee),
                        Fe = "fixed" === ("pinType" in e ? e.pinType : Object(R.b)(Ee, "pinType") || Ae && "fixed"),
                        Me = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                        Oe = ke && e.toggleActions.split(" "),
                        Pe = "markers" in e ? e.markers : Ct.markers,
                        Le = Ae ? 0 : parseFloat(pt(Ee)["border" + Te.p2 + "Width"]) || 0,
                        Ne = this,
                        Ie = e.onRefreshInit && function() {
                            return e.onRefreshInit(Ne)
                        },
                        je = function(t, e, n) {
                            var i = n.d,
                                r = n.d2,
                                o = n.a;
                            return (o = Object(R.b)(t, "getBoundingClientRect")) ? function() {
                                return o()[i]
                            } : function() {
                                return (e ? tt(r) : t["client" + r]) || 0
                            }
                        }(Ee, Ae, Te),
                        Be = function(t, e) {
                            return !e || ~R.g.indexOf(t) ? et(t) : function() {
                                return ee
                            }
                        }(Ee, Ae),
                        Re = 0,
                        qe = 0,
                        ze = 0,
                        Ve = Object(R.c)(Ee, Te);
                    if (Ne._startClamp = Ne._endClamp = !1, Ne._dir = Te, me *= 45, Ne.scroller = Ee, Ne.scroll = _e ? _e.time.bind(_e) : Ve, f = Ve(), Ne.vars = e, n = n || e.animation, "refreshPriority" in e && (_ = 1, -9999 === e.refreshPriority && (B = Ne)), Se.tweenScroll = Se.tweenScroll || {
                            top: ae(Ee, R.i),
                            left: ae(Ee, R.f)
                        }, Ne.tweenTo = r = Se.tweenScroll[Te.p], Ne.scrubDuration = function(t) {
                            (It = st(t) && t) ? Nt ? Nt.duration(t) : Nt = i.to(n, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: It,
                                paused: !0,
                                onComplete: function() {
                                    return ge && ge(Ne)
                                }
                            }): (Nt && Nt.progress(1).kill(), Nt = 0)
                        }, n && (n.vars.lazy = !1, n._initted && !Ne.isReverted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.duration() && n.render(0, !0, !0), Ne.animation = n.pause(), n.scrollTrigger = Ne, Ne.scrubDuration(ce), Mt = 0, oe || (oe = n.vars.id)), be && (at(be) && !be.push || (be = {
                            snapTo: be
                        }), "scrollBehavior" in l.style && i.set(Ae ? [l, a] : Ee, {
                            scrollBehavior: "auto"
                        }), R.h.forEach(function(t) {
                            return ot(t) && t.target === (Ae ? s.scrollingElement || a : Ee) && (t.smooth = !1)
                        }), c = ot(be.snapTo) ? be.snapTo : "labels" === be.snapTo ? function(t) {
                            return function(e) {
                                return i.utils.snap(vt(t), e)
                            }
                        }(n) : "labelsDirectional" === be.snapTo ? (Yt = n, function(t, e) {
                            return yt(vt(Yt))(t, e.direction)
                        }) : !1 !== be.directional ? function(t, e) {
                            return yt(be.snapTo)(t, z() - qe < 500 ? 0 : e.direction)
                        } : i.utils.snap(be.snapTo), Bt = be.duration || {
                            min: .1,
                            max: 2
                        }, Bt = at(Bt) ? d(Bt.min, Bt.max) : d(Bt, Bt), Rt = i.delayedCall(be.delay || It / 2 || .1, function() {
                            var t = Ve(),
                                e = z() - qe < 500,
                                o = r.tween;
                            if (!(e || Math.abs(Ne.getVelocity()) < 10) || o || g || Re === t) Ne.isActive && Re !== t && Rt.restart(!0);
                            else {
                                var s = (t - b) / A,
                                    a = n && !ke ? n.totalProgress() : s,
                                    l = e ? 0 : (a - Pt) / (z() - p) * 1e3 || 0,
                                    u = i.utils.clamp(-s, 1 - s, ct(l / 2) * l / .185),
                                    h = s + (!1 === be.inertia ? 0 : u),
                                    f = d(0, 1, c(h, Ne)),
                                    m = Math.round(b + f * A),
                                    v = be,
                                    y = v.onStart,
                                    w = v.onInterrupt,
                                    _ = v.onComplete;
                                if (t <= D && t >= b && m !== t) {
                                    if (o && !o._initted && o.data <= ct(m - t)) return;
                                    !1 === be.inertia && (u = f - s), r(m, {
                                        duration: Bt(ct(.185 * Math.max(ct(h - a), ct(f - a)) / l / .05 || 0)),
                                        ease: be.ease || "power3",
                                        data: ct(m - t),
                                        onInterrupt: function() {
                                            return Rt.restart(!0) && w && w(Ne)
                                        },
                                        onComplete: function() {
                                            Ne.update(), Re = Ve(), Mt = Pt = n && !ke ? n.totalProgress() : Ne.progress, ve && ve(Ne), _ && _(Ne)
                                        }
                                    }, t, u * A, m - t - u * A), y && y(Ne, r.tween)
                                }
                            }
                        }).pause()), oe && (Ft[oe] = Ne), (Wt = (he = Ne.trigger = Object(R.d)(he || !0 !== de && de)) && he._gsap && he._gsap.stRevert) && (Wt = Wt(Ne)), de = !0 === de ? he : Object(R.d)(de), rt(ie) && (ie = {
                            targets: he,
                            className: ie
                        }), de && (!1 === pe || "margin" === pe || (pe = !(!pe && de.parentNode && de.parentNode.style && "flex" === pt(de.parentNode).display) && ht), Ne.pin = de, (u = i.core.getCache(de)).spacer ? F = u.pinState : (we && ((we = Object(R.d)(we)) && !we.nodeType && (we = we.current || we.nativeElement), u.spacerIsNative = !!we, we && (u.spacerState = te(we))), u.spacer = P = we || s.createElement("div"), P.classList.add("pin-spacer"), oe && P.classList.add("pin-spacer-" + oe), u.pinState = F = te(de)), !1 !== e.force3D && i.set(de, {
                            force3D: !0
                        }), Ne.spacer = P = u.spacer, St = pt(de), J = St[pe + Te.os2], V = i.getProperty(de), U = i.quickSetter(de, Te.a, dt), $t(de, P, St), O = te(de)), Pe) {
                        E = at(Pe) ? ft(Pe, xt) : xt, T = Et("scroller-start", oe, Ee, Te, E, 0), k = Et("scroller-end", oe, Ee, Te, E, 0, T), N = T["offset" + Te.op.d2];
                        var He = Object(R.d)(Object(R.b)(Ee, "content") || Ee);
                        w = this.markerStart = Et("start", oe, He, Te, E, N, 0, _e), C = this.markerEnd = Et("end", oe, He, Te, E, N, 0, _e), _e && (Vt = i.quickSetter([w, C], Te.a, dt)), Fe || R.g.length && !0 === Object(R.b)(Ee, "fixedMarkers") || (Gt = pt(Kt = Ae ? l : Ee).position, Kt.style.position = "absolute" === Gt || "fixed" === Gt ? Gt : "relative", i.set([T, k], {
                            force3D: !0
                        }), bt = i.quickSetter(T, Te.a, dt), Tt = i.quickSetter(k, Te.a, dt))
                    }
                    if (_e) {
                        var We = _e.vars.onUpdate,
                            Xe = _e.vars.onUpdateParams;
                        _e.eventCallback("onUpdate", function() {
                            Ne.update(0, 0, 1), We && We.apply(_e, Xe || [])
                        })
                    }
                    if (Ne.previous = function() {
                            return At[At.indexOf(Ne) - 1]
                        }, Ne.next = function() {
                            return At[At.indexOf(Ne) + 1]
                        }, Ne.revert = function(t, e) {
                            if (!e) return Ne.kill(!0);
                            var i = !1 !== t || !Ne.enabled,
                                r = m;
                            i !== Ne.isReverted && (i && (qt = Math.max(Ve(), Ne.scroll.rec || 0), ze = Ne.progress, zt = n && n.progress()), w && [w, C, T, k].forEach(function(t) {
                                return t.style.display = i ? "none" : "block"
                            }), i && (m = Ne, Ne.update(i)), !de || De && Ne.isActive || (i ? function(t, e, n) {
                                Zt(n);
                                var i = t._gsap;
                                if (i.spacerIsNative) Zt(i.spacerState);
                                else if (t._gsap.swappedIn) {
                                    var r = e.parentNode;
                                    r && (r.insertBefore(t, e), r.removeChild(e))
                                }
                                t._gsap.swappedIn = !1
                            }(de, P, F) : $t(de, P, pt(de), it)), i || Ne.update(i), m = r, Ne.isReverted = i)
                        }, Ne.refresh = function(o, u, c, h) {
                            if (!m && Ne.enabled || u)
                                if (de && o && H) Dt(t, "scrollEnd", jt);
                                else {
                                    !I && Ie && Ie(Ne), m = Ne, r.tween && !c && (r.tween.kill(), r.tween = 0), Nt && Nt.pause(), fe && n && n.revert({
                                        kill: !1
                                    }).invalidate(), Ne.isReverted || Ne.revert(!0, !0), Ne._subPinOffset = !1;
                                    var d, p, g, y, _, E, L, N, j, B, q, W, Y, U = je(),
                                        G = Be(),
                                        Q = _e ? _e.duration() : nt(Ee, Te),
                                        J = A <= .01,
                                        Z = 0,
                                        tt = h || 0,
                                        et = at(c) ? c.end : e.end,
                                        st = e.endTrigger || he,
                                        lt = at(c) ? c.start : e.start || (0 !== e.start && he ? de ? "0 0" : "0 100%" : 0),
                                        ut = Ne.pinnedContainer = e.pinnedContainer && Object(R.d)(e.pinnedContainer, Ne),
                                        ct = he && Math.max(0, At.indexOf(Ne)) || 0,
                                        ft = ct;
                                    for (Pe && at(c) && (W = i.getProperty(T, Te.p), Y = i.getProperty(k, Te.p)); ft--;)(E = At[ft]).end || E.refresh(0, 1) || (m = Ne), !(L = E.pin) || L !== he && L !== de && L !== ut || E.isReverted || (B || (B = []), B.unshift(E), E.revert(!0, !0)), E !== At[ft] && (ct--, ft--);
                                    for (ot(lt) && (lt = lt(Ne)), lt = X(lt, "start", Ne), b = ne(lt, he, U, Te, Ve(), w, T, Ne, G, Le, Fe, Q, _e, Ne._startClamp && "_startClamp") || (de ? -.001 : 0), ot(et) && (et = et(Ne)), rt(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (rt(lt) ? lt.split(" ")[0] : "") + et : (Z = kt(et.substr(2), U), et = rt(lt) ? lt : (_e ? i.utils.mapRange(0, _e.duration(), _e.scrollTrigger.start, _e.scrollTrigger.end, b) : b) + Z, st = he)), et = X(et, "end", Ne), D = Math.max(b, ne(et || (st ? "100% 0" : Q), st, U, Te, Ve() + Z, C, k, Ne, G, Le, Fe, Q, _e, Ne._endClamp && "_endClamp")) || -.001, Z = 0, ft = ct; ft--;)(L = (E = At[ft]).pin) && E.start - E._pinPush <= b && !_e && E.end > 0 && (d = E.end - (Ne._startClamp ? Math.max(0, E.start) : E.start), (L === he && E.start - E._pinPush < b || L === ut) && isNaN(lt) && (Z += d * (1 - E.progress)), L === de && (tt += d));
                                    if (b += Z, D += Z, Ne._startClamp && (Ne._startClamp += Z), Ne._endClamp && !I && (Ne._endClamp = D || -.001, D = Math.min(D, nt(Ee, Te))), A = D - b || (b -= .01) && .001, J && (ze = i.utils.clamp(0, 1, i.utils.normalize(b, D, qt))), Ne._pinPush = tt, w && Z && ((d = {})[Te.a] = "+=" + Z, ut && (d[Te.p] = "-=" + Ve()), i.set([w, C], d)), de) d = pt(de), y = Te === R.i, g = Ve(), K = parseFloat(V(Te.a)) + tt, !Q && D > 1 && (q = {
                                        style: q = (Ae ? s.scrollingElement || a : Ee).style,
                                        value: q["overflow" + Te.a.toUpperCase()]
                                    }, Ae && "scroll" !== pt(l)["overflow" + Te.a.toUpperCase()] && (q.style["overflow" + Te.a.toUpperCase()] = "scroll")), $t(de, P, d), O = te(de), p = mt(de, !0), N = Fe && Object(R.c)(Ee, y ? R.f : R.i)(), pe && ((it = [pe + Te.os2, A + tt + dt]).t = P, (ft = pe === ht ? gt(de, Te) + A + tt : 0) && it.push(Te.d, ft + dt), Zt(it), ut && At.forEach(function(t) {
                                        t.pin === ut && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                    }), Fe && Ve(qt)), Fe && ((_ = {
                                        top: p.top + (y ? g - b : N) + dt,
                                        left: p.left + (y ? N : g - b) + dt,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    }).width = _.maxWidth = Math.ceil(p.width) + dt, _.height = _.maxHeight = Math.ceil(p.height) + dt, _.margin = _.marginTop = _.marginRight = _.marginBottom = _.marginLeft = "0", _.padding = d.padding, _.paddingTop = d.paddingTop, _.paddingRight = d.paddingRight, _.paddingBottom = d.paddingBottom, _.paddingLeft = d.paddingLeft, M = function(t, e, n) {
                                        for (var i, r = [], o = t.length, s = n ? 8 : 0; s < o; s += 2) i = t[s], r.push(i, i in e ? e[i] : t[s + 1]);
                                        return r.t = t.t, r
                                    }(F, _, De), I && Ve(0)), n ? (j = n._initted, x(1), n.render(n.duration(), !0, !0), $ = V(Te.a) - K + A + tt, _t = Math.abs(A - $) > 1, Fe && _t && M.splice(M.length - 2, 2), n.render(0, !0, !0), j || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), x(0)) : $ = A, q && (q.value ? q.style["overflow" + Te.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + Te.a));
                                    else if (he && Ve() && !_e)
                                        for (p = he.parentNode; p && p !== l;) p._pinOffset && (b -= p._pinOffset, D -= p._pinOffset), p = p.parentNode;
                                    B && B.forEach(function(t) {
                                        return t.revert(!1, !0)
                                    }), Ne.start = b, Ne.end = D, f = v = I ? qt : Ve(), _e || I || (f < qt && Ve(qt), Ne.scroll.rec = 0), Ne.revert(!1, !0), qe = z(), Rt && (Re = -1, Rt.restart(!0)), m = 0, n && ke && (n._initted || zt) && n.progress() !== zt && n.progress(zt || 0, !0).render(n.time(), !0, !0), (J || ze !== Ne.progress || _e) && (n && !ke && n.totalProgress(_e && b < -.001 && !ze ? i.utils.normalize(b, D, 0) : ze, !0), Ne.progress = J || (f - b) / A === ze ? 0 : ze), de && pe && (P._pinOffset = Math.round(Ne.progress * $)), Nt && Nt.invalidate(), isNaN(W) || (W -= i.getProperty(T, Te.p), Y -= i.getProperty(k, Te.p), se(T, Te, W), se(w, Te, W - (h || 0)), se(k, Te, Y), se(C, Te, Y - (h || 0))), J && !I && Ne.update(), !ue || I || S || (S = !0, ue(Ne), S = !1)
                                }
                        }, Ne.getVelocity = function() {
                            return (Ve() - v) / (z() - p) * 1e3 || 0
                        }, Ne.endAnimation = function() {
                            lt(Ne.callbackAnimation), n && (Nt ? Nt.progress(1) : n.paused() ? ke || lt(n, Ne.direction < 0, 1) : lt(n, n.reversed()))
                        }, Ne.labelToScroll = function(t) {
                            return n && n.labels && (b || Ne.refresh() || b) + n.labels[t] / n.duration() * A || 0
                        }, Ne.getTrailing = function(t) {
                            var e = At.indexOf(Ne),
                                n = Ne.direction > 0 ? At.slice(0, e).reverse() : At.slice(e + 1);
                            return (rt(t) ? n.filter(function(e) {
                                return e.vars.preventOverlaps === t
                            }) : n).filter(function(t) {
                                return Ne.direction > 0 ? t.end <= b : t.start >= D
                            })
                        }, Ne.update = function(t, e, i) {
                            if (!_e || i || t) {
                                var o, s, a, u, c, d, g, y = !0 === I ? qt : Ne.scroll(),
                                    w = t ? 0 : (y - b) / A,
                                    _ = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                                    x = Ne.progress;
                                if (e && (v = f, f = _e ? Ve() : y, be && (Pt = Mt, Mt = n && !ke ? n.totalProgress() : _)), me && !_ && de && !m && !q && H && b < y + (y - v) / (z() - p) * me && (_ = 1e-4), _ !== x && Ne.enabled) {
                                    if (u = (c = (o = Ne.isActive = !!_ && _ < 1) !== (!!x && x < 1)) || !!_ != !!x, Ne.direction = _ > x ? 1 : -1, Ne.progress = _, u && !m && (s = _ && !x ? 0 : 1 === _ ? 1 : 1 === x ? 2 : 3, ke && (a = !c && "none" !== Oe[s + 1] && Oe[s + 1] || Oe[s], g = n && ("complete" === a || "reset" === a || a in n))), Ce && (c || g) && (g || ce || !n) && (ot(Ce) ? Ce(Ne) : Ne.getTrailing(Ce).forEach(function(t) {
                                            return t.endAnimation()
                                        })), ke || (!Nt || m || q ? n && n.totalProgress(_, !(!m || !qe && !t)) : (Nt._dp._time - Nt._start !== Nt._time && Nt.render(Nt._dp._time - Nt._start), Nt.resetTo ? Nt.resetTo("totalProgress", _, n._tTime / n._tDur) : (Nt.vars.totalProgress = _, Nt.invalidate().restart()))), de)
                                        if (t && pe && (P.style[pe + Te.os2] = J), Fe) {
                                            if (u) {
                                                if (d = !t && _ > x && D + 1 > y && y + 1 >= nt(Ee, Te), De)
                                                    if (t || !o && !d) re(de, P);
                                                    else {
                                                        var C = mt(de, !0),
                                                            k = y - b;
                                                        re(de, l, C.top + (Te === R.i ? k : 0) + dt, C.left + (Te === R.i ? 0 : k) + dt)
                                                    }
                                                Zt(o || d ? M : O), _t && _ < 1 && o || U(K + (1 !== _ || d ? 0 : $))
                                            }
                                        } else U(Q(K + $ * _));
                                    be && !r.tween && !m && !q && Rt.restart(!0), ie && (c || ye && _ && (_ < 1 || !L)) && h(ie.targets).forEach(function(t) {
                                        return t.classList[o || ye ? "add" : "remove"](ie.className)
                                    }), Jt && !ke && !t && Jt(Ne), u && !m ? (ke && (g && ("complete" === a ? n.pause().totalProgress(1) : "reset" === a ? n.restart(!0).pause() : "restart" === a ? n.restart(!0) : n[a]()), Jt && Jt(Ne)), !c && L || (le && c && ut(Ne, le), Me[s] && ut(Ne, Me[s]), ye && (1 === _ ? Ne.kill(!1, 1) : Me[s] = 0), c || Me[s = 1 === _ ? 1 : 3] && ut(Ne, Me[s])), xe && !o && Math.abs(Ne.getVelocity()) > (st(xe) ? xe : 2500) && (lt(Ne.callbackAnimation), Nt ? Nt.progress(1) : lt(n, "reverse" === a ? 1 : !_, 1))) : ke && Jt && !m && Jt(Ne)
                                }
                                if (Tt) {
                                    var E = _e ? y / _e.duration() * (_e._caScrollDist || 0) : y;
                                    bt(E + (T._isFlipped ? 1 : 0)), Tt(E)
                                }
                                Vt && Vt(-y / _e.duration() * (_e._caScrollDist || 0))
                            }
                        }, Ne.enable = function(e, n) {
                            Ne.enabled || (Ne.enabled = !0, Dt(Ee, "resize", Lt), Ae || Dt(Ee, "scroll", Ot), Ie && Dt(t, "refreshInit", Ie), !1 !== e && (Ne.progress = ze = 0, f = v = Re = Ve()), !1 !== n && Ne.refresh())
                        }, Ne.getTween = function(t) {
                            return t && r ? r.tween : Nt
                        }, Ne.setPositions = function(t, e, n, i) {
                            if (_e) {
                                var r = _e.scrollTrigger,
                                    o = _e.duration(),
                                    s = r.end - r.start;
                                t = r.start + s * t / o, e = r.start + s * e / o
                            }
                            Ne.refresh(!1, !1, {
                                start: Y(t, n && !!Ne._startClamp),
                                end: Y(e, n && !!Ne._endClamp)
                            }, i), Ne.update()
                        }, Ne.adjustPinSpacing = function(t) {
                            if (it && t) {
                                var e = it.indexOf(Te.d) + 1;
                                it[e] = parseFloat(it[e]) + t + dt, it[1] = parseFloat(it[1]) + t + dt, Zt(it)
                            }
                        }, Ne.disable = function(e, n) {
                            if (Ne.enabled && (!1 !== e && Ne.revert(!0, !0), Ne.enabled = Ne.isActive = !1, n || Nt && Nt.pause(), qt = 0, u && (u.uncache = 1), Ie && wt(t, "refreshInit", Ie), Rt && (Rt.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Ae)) {
                                for (var i = At.length; i--;)
                                    if (At[i].scroller === Ee && At[i] !== Ne) return;
                                wt(Ee, "resize", Lt), Ae || wt(Ee, "scroll", Ot)
                            }
                        }, Ne.kill = function(t, i) {
                            Ne.disable(t, i), Nt && !i && Nt.kill(), oe && delete Ft[oe];
                            var r = At.indexOf(Ne);
                            r >= 0 && At.splice(r, 1), r === y && Ut > 0 && y--, r = 0, At.forEach(function(t) {
                                return t.scroller === Ne.scroller && (r = 1)
                            }), r || I || (Ne.scroll.rec = 0), n && (n.scrollTrigger = null, t && n.revert({
                                kill: !1
                            }), i || n.kill()), w && [w, C, T, k].forEach(function(t) {
                                return t.parentNode && t.parentNode.removeChild(t)
                            }), B === Ne && (B = 0), de && (u && (u.uncache = 1), r = 0, At.forEach(function(t) {
                                return t.pin === de && r++
                            }), r || (u.spacer = 0)), e.onKill && e.onKill(Ne)
                        }, At.push(Ne), Ne.enable(!1, !1), Wt && Wt(Ne), n && n.add && !A) {
                        var Ye = Ne.update;
                        Ne.update = function() {
                            Ne.update = Ye, b || D || Ne.refresh()
                        }, i.delayedCall(.01, Ne.update), A = .01, b = D = 0
                    } else Ne.refresh();
                    de && function() {
                        if (j !== Ht) {
                            var t = j = Ht;
                            requestAnimationFrame(function() {
                                return t === Ht && Xt(!0)
                            })
                        }
                    }()
                } else this.update = this.refresh = this.kill = G
            }, t.register = function(e) {
                return r || (i = e || J(), $() && window.document && t.enable(), r = W), r
            }, t.defaults = function(t) {
                if (t)
                    for (var e in t) Ct[e] = t[e];
                return Ct
            }, t.disable = function(t, e) {
                W = 0, At.forEach(function(n) {
                    return n[e ? "kill" : "disable"](t)
                }), wt(o, "wheel", Ot), wt(s, "scroll", Ot), clearInterval(f), wt(s, "touchcancel", G), wt(l, "touchstart", G), bt(wt, s, "pointerdown,touchstart,mousedown", U), bt(wt, s, "pointerup,touchend,mouseup", K), c.kill(), it(wt);
                for (var n = 0; n < R.h.length; n += 3) _t(wt, R.h[n], R.h[n + 1]), _t(wt, R.h[n], R.h[n + 2])
            }, t.enable = function() {
                if (o = window, s = document, a = s.documentElement, l = s.body, i && (h = i.utils.toArray, d = i.utils.clamp, F = i.core.context || G, x = i.core.suppressOverwrites || G, M = o.history.scrollRestoration || "auto", Yt = o.pageYOffset, i.core.globals("ScrollTrigger", t), l)) {
                    W = 1, (O = document.createElement("div")).style.height = "100vh", O.style.position = "absolute", Wt(),
                        function t() {
                            return W && requestAnimationFrame(t)
                        }(), R.a.register(i), t.isTouch = R.a.isTouch, A = R.a.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Dt(o, "wheel", Ot), u = [o, s, a, l], i.matchMedia && (t.matchMedia = function(t) {
                            var e, n = i.matchMedia();
                            for (e in t) n.add(e, t[e]);
                            return n
                        }, i.addEventListener("matchMediaInit", function() {
                            return zt()
                        }), i.addEventListener("matchMediaRevert", function() {
                            return qt()
                        }), i.addEventListener("matchMedia", function() {
                            Xt(0, 1), Bt("matchMedia")
                        }), i.matchMedia("(orientation: portrait)", function() {
                            return Pt(), Pt
                        })), Pt(), Dt(s, "scroll", Ot);
                    var e, n, p = l.style,
                        m = p.borderTopStyle,
                        g = i.core.Animation.prototype;
                    for (g.revert || Object.defineProperty(g, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), p.borderTopStyle = "solid", e = mt(l), R.i.m = Math.round(e.top + R.i.sc()) || 0, R.f.m = Math.round(e.left + R.f.sc()) || 0, m ? p.borderTopStyle = m : p.removeProperty("border-top-style"), f = setInterval(Mt, 250), i.delayedCall(.5, function() {
                            return q = 0
                        }), Dt(s, "touchcancel", G), Dt(l, "touchstart", G), bt(Dt, s, "pointerdown,touchstart,mousedown", U), bt(Dt, s, "pointerup,touchend,mouseup", K), v = i.utils.checkPrefix("transform"), Qt.push(v), r = z(), c = i.delayedCall(.2, Xt).pause(), w = [s, "visibilitychange", function() {
                            var t = o.innerWidth,
                                e = o.innerHeight;
                            s.hidden ? (b = t, D = e) : b === t && D === e || Lt()
                        }, s, "DOMContentLoaded", Xt, o, "load", Xt, o, "resize", Lt], it(Dt), At.forEach(function(t) {
                            return t.enable(0, 1)
                        }), n = 0; n < R.h.length; n += 3) _t(wt, R.h[n], R.h[n + 1]), _t(wt, R.h[n], R.h[n + 2])
                }
            }, t.config = function(e) {
                "limitCallbacks" in e && (L = !!e.limitCallbacks);
                var n = e.syncInterval;
                n && clearInterval(f) || (f = n) && setInterval(Mt, n), "ignoreMobileResize" in e && (k = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (it(wt) || it(Dt, e.autoRefreshEvents || "none"), C = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var n = Object(R.d)(t),
                    i = R.h.indexOf(n),
                    r = Z(n);
                ~i && R.h.splice(i, r ? 6 : 2), e && (r ? R.g.unshift(o, e, l, e, a, e) : R.g.unshift(n, e))
            }, t.clearMatchMedia = function(t) {
                At.forEach(function(e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                })
            }, t.isInViewport = function(t, e, n) {
                var i = (rt(t) ? Object(R.d)(t) : t).getBoundingClientRect(),
                    r = i[n ? "width" : "height"] * e || 0;
                return n ? i.right - r > 0 && i.left + r < o.innerWidth : i.bottom - r > 0 && i.top + r < o.innerHeight
            }, t.positionInViewport = function(t, e, n) {
                rt(t) && (t = Object(R.d)(t));
                var i = t.getBoundingClientRect(),
                    r = i[n ? "width" : "height"],
                    s = null == e ? r / 2 : e in Tt ? Tt[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
                return n ? (i.left + s) / o.innerWidth : (i.top + s) / o.innerHeight
            }, t.killAll = function(t) {
                if (At.slice(0).forEach(function(t) {
                        return "ScrollSmoother" !== t.vars.id && t.kill()
                    }), !0 !== t) {
                    var e = Nt.killAll || [];
                    Nt = {}, e.forEach(function(t) {
                        return t()
                    })
                }
            }, t
        }();
    /*!
     * ScrollTrigger 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    le.version = "3.12.2", le.saveStyles = function(t) {
        return t ? h(t).forEach(function(t) {
            if (t && t.style) {
                var e = Rt.indexOf(t);
                e >= 0 && Rt.splice(e, 5), Rt.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), i.core.getCache(t), F())
            }
        }) : Rt
    }, le.revert = function(t, e) {
        return zt(!t, e)
    }, le.create = function(t, e) {
        return new le(t, e)
    }, le.refresh = function(t) {
        return t ? Lt() : (r || le.register()) && Xt(!0)
    }, le.update = function(t) {
        return ++R.h.cache && Kt(!0 === t ? 2 : 0)
    }, le.clearScrollMemory = Vt, le.maxScroll = function(t, e) {
        return nt(t, e ? R.f : R.i)
    }, le.getScrollFunc = function(t, e) {
        return Object(R.c)(Object(R.d)(t), e ? R.f : R.i)
    }, le.getById = function(t) {
        return Ft[t]
    }, le.getAll = function() {
        return At.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }, le.isScrolling = function() {
        return !!H
    }, le.snapDirectional = yt, le.addEventListener = function(t, e) {
        var n = Nt[t] || (Nt[t] = []);
        ~n.indexOf(e) || n.push(e)
    }, le.removeEventListener = function(t, e) {
        var n = Nt[t],
            i = n && n.indexOf(e);
        i >= 0 && n.splice(i, 1)
    }, le.batch = function(t, e) {
        var n, r = [],
            o = {},
            s = e.interval || .016,
            a = e.batchMax || 1e9,
            l = function(t, e) {
                var n = [],
                    r = [],
                    o = i.delayedCall(s, function() {
                        e(n, r), n = [], r = []
                    }).pause();
                return function(t) {
                    n.length || o.restart(!0), n.push(t.trigger), r.push(t), a <= n.length && o.progress(1)
                }
            };
        for (n in e) o[n] = "on" === n.substr(0, 2) && ot(e[n]) && "onRefreshInit" !== n ? l(0, e[n]) : e[n];
        return ot(a) && (a = a(), Dt(le, "refresh", function() {
            return a = e.batchMax()
        })), h(t).forEach(function(t) {
            var e = {};
            for (n in o) e[n] = o[n];
            e.trigger = t, r.push(le.create(e))
        }), r
    };
    var ue, ce = function(t, e, n, i) {
            return e > i ? t(i) : e < 0 && t(0), n > i ? (i - e) / (n - e) : n < 0 ? e / (e - n) : 1
        },
        he = function t(e, n) {
            !0 === n ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (R.a.isTouch ? " pinch-zoom" : "") : "none", e === a && t(l, n)
        },
        de = {
            auto: 1,
            scroll: 1
        },
        pe = function(t) {
            var e, n = t.event,
                r = t.target,
                o = t.axis,
                s = (n.changedTouches ? n.changedTouches[0] : n).target,
                a = s._gsap || i.core.getCache(s),
                u = z();
            if (!a._isScrollT || u - a._isScrollT > 2e3) {
                for (; s && s !== l && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !de[(e = pt(s)).overflowY] && !de[e.overflowX]);) s = s.parentNode;
                a._isScroll = s && s !== r && !Z(s) && (de[(e = pt(s)).overflowY] || de[e.overflowX]), a._isScrollT = u
            }(a._isScroll || "x" === o) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        fe = function(t, e, n, i) {
            return R.a.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: i = i && pe,
                onPress: i,
                onDrag: i,
                onScroll: i,
                onEnable: function() {
                    return n && Dt(s, R.a.eventTypes[0], ge, !1, !0)
                },
                onDisable: function() {
                    return wt(s, R.a.eventTypes[0], ge, !0)
                }
            })
        },
        me = /(input|label|select|textarea)/i,
        ge = function(t) {
            var e = me.test(t.target.tagName);
            (e || ue) && (t._gsapAllow = !0, ue = e)
        },
        ve = function(t) {
            at(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
            var e, n, r, s, l, u, c, h, p = t,
                f = p.normalizeScrollX,
                m = p.momentum,
                g = p.allowNestedScroll,
                v = p.onRelease,
                y = Object(R.d)(t.target) || a,
                b = i.core.globals().ScrollSmoother,
                D = b && b.get(),
                w = A && (t.content && Object(R.d)(t.content) || D && !1 !== t.content && !D.smooth() && D.content()),
                _ = Object(R.c)(y, R.i),
                x = Object(R.c)(y, R.f),
                C = 1,
                T = (R.a.isTouch && o.visualViewport ? o.visualViewport.scale * o.visualViewport.width : o.outerWidth) / o.innerWidth,
                k = 0,
                E = ot(m) ? function() {
                    return m(e)
                } : function() {
                    return m || 2.8
                },
                S = fe(y, t.type, !0, g),
                F = function() {
                    return s = !1
                },
                M = G,
                O = G,
                P = function() {
                    n = nt(y, R.i), O = d(A ? 1 : 0, n), f && (M = d(0, nt(y, R.f))), r = Ht
                },
                L = function() {
                    w._gsap.y = Q(parseFloat(w._gsap.y) + _.offset) + "px", w.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(w._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
                },
                N = function() {
                    P(), l.isActive() && l.vars.scrollY > n && (_() > n ? l.progress(1) && _(n) : l.resetTo("scrollY", n))
                };
            return w && i.set(w, {
                y: "+=0"
            }), t.ignoreCheck = function(t) {
                return A && "touchmove" === t.type && function() {
                    if (s) {
                        requestAnimationFrame(F);
                        var t = Q(e.deltaY / 2),
                            n = O(_.v - t);
                        if (w && n !== _.v + _.offset) {
                            _.offset = n - _.v;
                            var i = Q((parseFloat(w && w._gsap.y) || 0) - _.offset);
                            w.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)", w._gsap.y = i + "px", _.cacheID = R.h.cache, Kt()
                        }
                        return !0
                    }
                    _.offset && L(), s = !0
                }() || C > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
            }, t.onPress = function() {
                s = !1;
                var t = C;
                C = Q((o.visualViewport && o.visualViewport.scale || 1) / T), l.pause(), t !== C && he(y, C > 1.01 || !f && "x"), u = x(), c = _(), P(), r = Ht
            }, t.onRelease = t.onGestureStart = function(t, e) {
                if (_.offset && L(), e) {
                    R.h.cache++;
                    var r, o, s = E();
                    f && (o = (r = x()) + .05 * s * -t.velocityX / .227, s *= ce(x, r, o, nt(y, R.f)), l.vars.scrollX = M(o)), o = (r = _()) + .05 * s * -t.velocityY / .227, s *= ce(_, r, o, nt(y, R.i)), l.vars.scrollY = O(o), l.invalidate().duration(s).play(.01), (A && l.vars.scrollY >= n || r >= n - 1) && i.to({}, {
                        onUpdate: N,
                        duration: s
                    })
                } else h.restart(!0);
                v && v(t)
            }, t.onWheel = function() {
                l._ts && l.pause(), z() - k > 1e3 && (r = 0, k = z())
            }, t.onChange = function(t, e, n, i, o) {
                if (Ht !== r && P(), e && f && x(M(i[2] === e ? u + (t.startX - t.x) : x() + e - i[1])), n) {
                    _.offset && L();
                    var s = o[2] === n,
                        a = s ? c + t.startY - t.y : _() + n - o[1],
                        l = O(a);
                    s && a !== l && (c += l - a), _(l)
                }(n || e) && Kt()
            }, t.onEnable = function() {
                he(y, !f && "x"), le.addEventListener("refresh", N), Dt(o, "resize", N), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = x.smooth = !1), S.enable()
            }, t.onDisable = function() {
                he(y, !0), wt(o, "resize", N), le.removeEventListener("refresh", N), S.kill()
            }, t.lockAxis = !1 !== t.lockAxis, (e = new R.a(t)).iOS = A, A && !_() && _(1), A && i.ticker.add(G), h = e._dc, l = i.to(e, {
                ease: "power4",
                paused: !0,
                scrollX: f ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: oe(_, _(), function() {
                        return l.pause()
                    })
                },
                onUpdate: Kt,
                onComplete: h.vars.onComplete
            }), e
        };
    le.sort = function(t) {
        return At.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, le.observe = function(t) {
        return new R.a(t)
    }, le.normalizeScroll = function(t) {
        if (void 0 === t) return T;
        if (!0 === t && T) return T.enable();
        if (!1 === t) return T && T.kill();
        var e = t instanceof R.a ? t : ve(t);
        return T && T.target === e.target && T.kill(), Z(e.target) && (T = e), e
    }, le.core = {
        _getVelocityProp: R.e,
        _inputObserver: fe,
        _scrollers: R.h,
        _proxies: R.g,
        bridge: {
            ss: function() {
                H || Bt("scrollStart"), H = z()
            },
            ref: function() {
                return m
            }
        }
    }, J() && i.registerPlugin(le)
}, function(t, e, n) {
    "use strict";
    e.a = {}
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return Math.pow(t - 1, 3) * (1 - t) + 1
    }, e.b = function(t) {
        if ((t /= .5) < 1) return .5 * t * t;
        return -.5 * (--t * (t - 2) - 1)
    }
}, function(t, e, n) {
    /*!
     * imagesLoaded v5.0.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    ! function(e, i) {
        "object" == typeof t && t.exports ? t.exports = i(e, n(22)) : e.imagesLoaded = i(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        let n = t.jQuery,
            i = t.console;

        function r(t, e, o) {
            if (!(this instanceof r)) return new r(t, e, o);
            let s = t;
            var a;
            ("string" == typeof t && (s = document.querySelectorAll(t)), s) ? (this.elements = (a = s, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? [...a] : [a]), this.options = {}, "function" == typeof e ? o = e : Object.assign(this.options, e), o && this.on("always", o), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : i.error(`Bad element for imagesLoaded ${s||t}`)
        }
        r.prototype = Object.create(e.prototype), r.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        };
        const o = [1, 9, 11];
        r.prototype.addElementImages = function(t) {
            "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            let {
                nodeType: e
            } = t;
            if (!e || !o.includes(e)) return;
            let n = t.querySelectorAll("img");
            for (let t of n) this.addImage(t);
            if ("string" == typeof this.options.background) {
                let e = t.querySelectorAll(this.options.background);
                for (let t of e) this.addElementBackgroundImages(t)
            }
        };
        const s = /url\((['"])?(.*?)\1\)/gi;

        function a(t) {
            this.img = t
        }

        function l(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        return r.prototype.addElementBackgroundImages = function(t) {
            let e = getComputedStyle(t);
            if (!e) return;
            let n = s.exec(e.backgroundImage);
            for (; null !== n;) {
                let i = n && n[2];
                i && this.addBackground(i, t), n = s.exec(e.backgroundImage)
            }
        }, r.prototype.addImage = function(t) {
            let e = new a(t);
            this.images.push(e)
        }, r.prototype.addBackground = function(t, e) {
            let n = new l(t, e);
            this.images.push(n)
        }, r.prototype.check = function() {
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            let t = (t, e, n) => {
                setTimeout(() => {
                    this.progress(t, e, n)
                })
            };
            this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            })
        }, r.prototype.progress = function(t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && i && i.log(`progress: ${n}`, t, e)
        }, r.prototype.complete = function() {
            let t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                let t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, a.prototype = Object.create(e.prototype), a.prototype.check = function() {
            this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src)
        }, a.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t;
            let {
                parentNode: n
            } = this.img, i = "PICTURE" === n.nodeName ? n : this.img;
            this.emitEvent("progress", [this, i, e])
        }, a.prototype.handleEvent = function(t) {
            let e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, a.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, a.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, l.prototype = Object.create(a.prototype), l.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, l.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, l.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function(e) {
            (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function(t, e) {
                return new r(this, t, e).jqDeferred.promise(n(this))
            })
        }, r.makeJQueryPlugin(), r
    })
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return rt
    });
    var i, r, o, s, a, l, u, c, h = n(24),
        d = 1,
        p = function(t, e) {
            return t.actions.forEach(function(t) {
                return t.vars[e] && t.vars[e](t)
            })
        },
        f = {},
        m = 180 / Math.PI,
        g = Math.PI / 180,
        v = {},
        y = {},
        b = {},
        D = function(t) {
            return "string" == typeof t ? t.split(" ").join("").split(",") : t
        },
        w = D("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
        _ = D("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
        x = function(t) {
            return i(t)[0] || void 0
        },
        C = function(t) {
            return Math.round(1e4 * t) / 1e4 || 0
        },
        T = function(t, e, n) {
            return t.forEach(function(t) {
                return t.classList[n](e)
            })
        },
        k = {
            zIndex: 1,
            kill: 1,
            simple: 1,
            spin: 1,
            clearProps: 1,
            targets: 1,
            toggleClass: 1,
            onComplete: 1,
            onUpdate: 1,
            onInterrupt: 1,
            onStart: 1,
            delay: 1,
            repeat: 1,
            repeatDelay: 1,
            yoyo: 1,
            scale: 1,
            fade: 1,
            absolute: 1,
            props: 1,
            onEnter: 1,
            onLeave: 1,
            custom: 1,
            paused: 1,
            nested: 1,
            prune: 1,
            absoluteOnLeave: 1
        },
        E = {
            zIndex: 1,
            simple: 1,
            clearProps: 1,
            scale: 1,
            absolute: 1,
            fitChild: 1,
            getVars: 1,
            props: 1
        },
        S = function(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        A = function(t, e) {
            var n, i = {};
            for (n in t) e[n] || (i[n] = t[n]);
            return i
        },
        F = {},
        M = function(t) {
            var e = F[t] = D(t);
            return b[t] = e.concat(_), e
        },
        O = function(t, e, n) {
            return t.forEach(function(t) {
                return t.d = function t(e, n, i) {
                    void 0 === i && (i = 0);
                    for (var r = e.parentNode, o = 1e3 * Math.pow(10, i) * (n ? -1 : 1), s = n ? 900 * -o : 0; e;) s += o, e = e.previousSibling;
                    return r ? s + t(r, n, i + 1) : s
                }(n ? t.element : t.t, e)
            }), t.sort(function(t, e) {
                return t.d - e.d
            }), t
        },
        P = function(t, e) {
            for (var n, i, r = t.element.style, o = t.css = t.css || [], s = e.length; s--;) i = r[n = e[s]] || r.getPropertyValue(n), o.push(i ? n : y[n] || (y[n] = S(n)), i);
            return r
        },
        L = function(t) {
            var e = t.css,
                n = t.element.style,
                i = 0;
            for (t.cache.uncache = 1; i < e.length; i += 2) e[i + 1] ? n[e[i]] = e[i + 1] : n.removeProperty(e[i]);
            !e[e.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"))
        },
        N = function(t, e) {
            t.forEach(function(t) {
                return t.a.cache.uncache = 1
            }), e || t.finalStates.forEach(L)
        },
        I = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
        j = function(t, e, n) {
            var i, r, s, a = t.element,
                u = t.width,
                c = t.height,
                d = t.uncache,
                p = t.getProp,
                f = a.style,
                m = 4;
            if ("object" != typeof e && (e = t), o && 1 !== n) return o._abs.push({
                t: a,
                b: t,
                a: t,
                sd: 0
            }), o._final.push(function() {
                return (t.cache.uncache = 1) && L(t)
            }), a;
            for (r = "none" === p("display"), t.isVisible && !r || (r && (P(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = u = t.width || e.width, t.height = c = t.height || e.height), P(t, I), s = window.getComputedStyle(a); m--;) f[I[m]] = s[I[m]];
            if (f.gridArea = "1 / 1 / 1 / 1", f.transition = "none", f.position = "absolute", f.width = u + "px", f.height = c + "px", f.top || (f.top = "0px"), f.left || (f.left = "0px"), d) i = new et(a);
            else if ((i = A(t, v)).position = "absolute", t.simple) {
                var g = a.getBoundingClientRect();
                i.matrix = new h.a(1, 0, 0, 1, g.left + Object(h.c)(), g.top + Object(h.d)())
            } else i.matrix = Object(h.f)(a, !1, !1, !0);
            return i = X(i, t, !0), t.x = l(i.x, .01), t.y = l(i.y, .01), a
        },
        B = function(t, e) {
            return !0 !== e && (e = i(e), t = t.filter(function(t) {
                if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
                t.t._gsap.renderTransform(1), t.b.isVisible && (t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px")
            })), t
        },
        R = function(t) {
            return O(t, !0).forEach(function(t) {
                return (t.a.isVisible || t.b.isVisible) && j(t.sd < 0 ? t.b : t.a, t.b, 1)
            })
        },
        q = function(t, e) {
            return e && t.idLookup[z(e).id] || t.elementStates[0]
        },
        z = function(t, e, n, i) {
            return t instanceof et ? t : t instanceof tt ? q(t, i) : new et("string" == typeof t ? x(t) || void 0 : t, e, n)
        },
        V = function(t, e) {
            var n, i = t.style || t;
            for (n in e) i[n] = e[n]
        },
        H = function(t) {
            return t.map(function(t) {
                return t.element
            })
        },
        W = function(t, e, n) {
            return t && e.length && n.add(t(H(e), n, new tt(e, 0, !0)), 0)
        },
        X = function(t, e, n, o, s, a) {
            var c, d, p, f, v, y, b, D = t.element,
                w = t.cache,
                _ = t.parent,
                x = t.x,
                T = t.y,
                k = e.width,
                E = e.height,
                S = e.scaleX,
                A = e.scaleY,
                F = e.rotation,
                M = e.bounds,
                O = a && u && u(D, "transform"),
                P = t,
                L = e.matrix,
                N = L.e,
                I = L.f,
                j = t.bounds.width !== M.width || t.bounds.height !== M.height || t.scaleX !== S || t.scaleY !== A || t.rotation !== F,
                B = !j && t.simple && e.simple && !s;
            return B || !_ ? (S = A = 1, F = c = 0) : (y = (v = function(t) {
                var e = t._gsap || r.core.getCache(t);
                return e.gmCache === r.ticker.frame ? e.gMatrix : (e.gmCache = r.ticker.frame, e.gMatrix = Object(h.f)(t, !0, !1, !0))
            }(_)).clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), F = C(Math.atan2(y.b, y.a) * m), c = C(Math.atan2(y.c, y.d) * m + F) % 360, S = Math.sqrt(Math.pow(y.a, 2) + Math.pow(y.b, 2)), A = Math.sqrt(Math.pow(y.c, 2) + Math.pow(y.d, 2)) * Math.cos(c * g), s && (s = i(s)[0], f = r.getProperty(s), b = s.getBBox && "function" == typeof s.getBBox && s.getBBox(), P = {
                scaleX: f("scaleX"),
                scaleY: f("scaleY"),
                width: b ? b.width : Math.ceil(parseFloat(f("width", "px"))),
                height: b ? b.height : parseFloat(f("height", "px"))
            }), w.rotation = F + "deg", w.skewX = c + "deg"), n ? (S *= k !== P.width && P.width ? k / P.width : 1, A *= E !== P.height && P.height ? E / P.height : 1, w.scaleX = S, w.scaleY = A) : (k = l(k * S / P.scaleX, 0), E = l(E * A / P.scaleY, 0), D.style.width = k + "px", D.style.height = E + "px"), o && V(D, e.props), B || !_ ? (x += N - t.matrix.e, T += I - t.matrix.f) : j || _ !== e.parent ? (w.renderTransform(1, w), y = Object(h.f)(s || D, !1, !1, !0), d = v.apply({
                x: y.e,
                y: y.f
            }), x += (p = v.apply({
                x: N,
                y: I
            })).x - d.x, T += p.y - d.y) : (v.e = v.f = 0, x += (p = v.apply({
                x: N - t.matrix.e,
                y: I - t.matrix.f
            })).x, T += p.y), x = l(x, .02), T = l(T, .02), !a || a instanceof et ? (w.x = x + "px", w.y = T + "px", w.renderTransform(1, w)) : O && O.revert(), a && (a.x = x, a.y = T, a.rotation = F, a.skewX = c, n ? (a.scaleX = S, a.scaleY = A) : (a.width = k, a.height = E)), a || w
        },
        Y = function(t, e) {
            return t instanceof tt ? t : new tt(t, e)
        },
        U = function(t, e, n) {
            var i = t.idLookup[n],
                r = t.alt[n];
            return !r.isVisible || (e.getElementState(r.element) || r).isVisible && i.isVisible ? i : r
        },
        K = [],
        G = "width,height,overflowX,overflowY".split(","),
        Q = function(t) {
            if (t !== c) {
                var e = a.style,
                    n = a.clientWidth === window.outerWidth,
                    i = a.clientHeight === window.outerHeight,
                    r = 4;
                if (t && (n || i)) {
                    for (; r--;) K[r] = e[G[r]];
                    n && (e.width = a.clientWidth + "px", e.overflowY = "hidden"), i && (e.height = a.clientHeight + "px", e.overflowX = "hidden"), c = t
                } else if (c) {
                    for (; r--;) K[r] ? e[G[r]] = K[r] : e.removeProperty(S(G[r]));
                    c = t
                }
            }
        },
        $ = function(t, e, n, i) {
            var s, a, l, u, c, d, p, f, m, g, v, y, D, x, C, S = n = n || {},
                L = S.clearProps,
                I = S.onEnter,
                j = S.onLeave,
                q = S.absolute,
                z = S.absoluteOnLeave,
                V = S.custom,
                H = S.delay,
                Y = S.paused,
                K = S.repeat,
                G = S.repeatDelay,
                $ = S.yoyo,
                Z = S.toggleClass,
                tt = S.nested,
                nt = S.zIndex,
                it = S.scale,
                rt = S.fade,
                ot = S.stagger,
                st = S.spin,
                at = S.prune,
                lt = ("props" in n ? n : t).props,
                ut = A(n, k),
                ct = r.timeline({
                    delay: H,
                    paused: Y,
                    repeat: K,
                    repeatDelay: G,
                    yoyo: $,
                    data: "isFlip"
                }),
                ht = ut,
                dt = [],
                pt = [],
                ft = [],
                mt = [],
                gt = !0 === st ? 1 : st || 0,
                vt = "function" == typeof st ? st : function() {
                    return gt
                },
                yt = t.interrupted || e.interrupted,
                bt = ct[1 !== i ? "to" : "from"];
            for (a in e.idLookup) v = e.alt[a] ? U(e, t, a) : e.idLookup[a], c = v.element, g = t.idLookup[a], t.alt[a] && c === g.element && (t.alt[a].isVisible || !v.isVisible) && (g = t.alt[a]), g ? (d = {
                t: c,
                b: g,
                a: v,
                sd: g.element === c ? 0 : v.isVisible ? 1 : -1
            }, ft.push(d), d.sd && (d.sd < 0 && (d.b = v, d.a = g), yt && P(d.b, lt ? b[lt] : _), rt && ft.push(d.swap = {
                t: g.element,
                b: d.b,
                a: d.a,
                sd: -d.sd,
                swap: d
            })), c._flip = g.element._flip = o ? o.timeline : ct) : v.isVisible && (ft.push({
                t: c,
                b: A(v, {
                    isVisible: 1
                }),
                a: v,
                sd: 0,
                entering: 1
            }), c._flip = o ? o.timeline : ct);
            (lt && (F[lt] || M(lt)).forEach(function(t) {
                return ut[t] = function(e) {
                    return ft[e].a.props[t]
                }
            }), ft.finalStates = m = [], y = function() {
                for (O(ft), Q(!0), u = 0; u < ft.length; u++) d = ft[u], D = d.a, x = d.b, !at || D.isDifferent(x) || d.entering ? (c = d.t, tt && !(d.sd < 0) && u && (D.matrix = Object(h.f)(c, !1, !1, !0)), x.isVisible && D.isVisible ? (d.sd < 0 ? (p = new et(c, lt, t.simple), X(p, D, it, 0, 0, p), p.matrix = Object(h.f)(c, !1, !1, !0), p.css = d.b.css, d.a = D = p, rt && (c.style.opacity = yt ? x.opacity : D.opacity), ot && mt.push(c)) : d.sd > 0 && rt && (c.style.opacity = yt ? D.opacity - x.opacity : "0"), X(D, x, it, lt)) : x.isVisible !== D.isVisible && (x.isVisible ? D.isVisible || (x.css = D.css, pt.push(x), ft.splice(u--, 1), q && tt && X(D, x, it, lt)) : (D.isVisible && dt.push(D), ft.splice(u--, 1))), it || (c.style.maxWidth = Math.max(D.width, x.width) + "px", c.style.maxHeight = Math.max(D.height, x.height) + "px", c.style.minWidth = Math.min(D.width, x.width) + "px", c.style.minHeight = Math.min(D.height, x.height) + "px"), tt && Z && c.classList.add(Z)) : ft.splice(u--, 1), m.push(D);
                var e;
                if (Z && (e = m.map(function(t) {
                        return t.element
                    }), tt && e.forEach(function(t) {
                        return t.classList.remove(Z)
                    })), Q(!1), it ? (ut.scaleX = function(t) {
                        return ft[t].a.scaleX
                    }, ut.scaleY = function(t) {
                        return ft[t].a.scaleY
                    }) : (ut.width = function(t) {
                        return ft[t].a.width + "px"
                    }, ut.height = function(t) {
                        return ft[t].a.height + "px"
                    }, ut.autoRound = n.autoRound || !1), ut.x = function(t) {
                        return ft[t].a.x + "px"
                    }, ut.y = function(t) {
                        return ft[t].a.y + "px"
                    }, ut.rotation = function(t) {
                        return ft[t].a.rotation + (st ? 360 * vt(t, f[t], f) : 0)
                    }, ut.skewX = function(t) {
                        return ft[t].a.skewX
                    }, f = ft.map(function(t) {
                        return t.t
                    }), (nt || 0 === nt) && (ut.modifiers = {
                        zIndex: function() {
                            return nt
                        }
                    }, ut.zIndex = nt, ut.immediateRender = !1 !== n.immediateRender), rt && (ut.opacity = function(t) {
                        return ft[t].sd < 0 ? 0 : ft[t].sd > 0 ? ft[t].a.opacity : "+=0"
                    }), mt.length) {
                    ot = r.utils.distribute(ot);
                    var i = f.slice(mt.length);
                    ut.stagger = function(t, e) {
                        return ot(~mt.indexOf(e) ? f.indexOf(ft[t].swap.t) : t, e, i)
                    }
                }
                if (w.forEach(function(t) {
                        return n[t] && ct.eventCallback(t, n[t], n[t + "Params"])
                    }), V && f.length)
                    for (a in ht = A(ut, k), "scale" in V && (V.scaleX = V.scaleY = V.scale, delete V.scale), V)(s = A(V[a], E))[a] = ut[a], !("duration" in s) && "duration" in ut && (s.duration = ut.duration), s.stagger = ut.stagger, bt.call(ct, f, s, 0), delete ht[a];
                (f.length || pt.length || dt.length) && (Z && ct.add(function() {
                    return T(e, Z, ct._zTime < 0 ? "remove" : "add")
                }, 0) && !Y && T(e, Z, "add"), f.length && bt.call(ct, f, ht, 0)), W(I, dt, ct), W(j, pt, ct);
                var g = o && o.timeline;
                g && (g.add(ct, 0), o._final.push(function() {
                    return N(ft, !L)
                })), l = ct.duration(), ct.call(function() {
                    var t = ct.time() >= l;
                    t && !g && N(ft, !L), Z && T(e, Z, t ? "remove" : "add")
                })
            }, z && (q = ft.filter(function(t) {
                return !t.sd && !t.a.isVisible && t.b.isVisible
            }).map(function(t) {
                return t.a.element
            })), o) ? (q && (C = o._abs).push.apply(C, B(ft, q)), o._run.push(y)) : (q && R(B(ft, q)), y());
            var Dt = o ? o.timeline : ct;
            return Dt.revert = function() {
                return J(Dt, 1, 1)
            }, Dt
        },
        J = function(t, e, n) {
            if (t && t.progress() < 1 && (!t.paused() || n)) return e && (! function t(e) {
                e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(t)
            }(t), e < 2 && t.progress(1), t.kill()), !0
        },
        Z = function(t) {
            for (var e, n = t.idLookup = {}, i = t.alt = {}, r = t.elementStates, o = r.length; o--;) n[(e = r[o]).id] ? i[e.id] = e : n[e.id] = e
        },
        tt = function() {
            function t(t, e, n) {
                if (this.props = e && e.props, this.simple = !(!e || !e.simple), n) this.targets = H(t), this.elementStates = t, Z(this);
                else {
                    this.targets = i(t);
                    var r = e && (!1 === e.kill || e.batch && !e.kill);
                    o && !r && o._kill.push(this), this.update(r || !!o)
                }
            }
            var e = t.prototype;
            return e.update = function(t) {
                var e = this;
                return this.elementStates = this.targets.map(function(t) {
                    return new et(t, e.props, e.simple)
                }), Z(this), this.interrupt(t), this.recordInlineStyles(), this
            }, e.clear = function() {
                return this.targets.length = this.elementStates.length = 0, Z(this), this
            }, e.fit = function(t, e, n) {
                for (var i, r, o = O(this.elementStates.slice(0), !1, !0), s = (t || this).idLookup, a = 0; a < o.length; a++) i = o[a], n && (i.matrix = Object(h.f)(i.element, !1, !1, !0)), (r = s[i.id]) && X(i, r, e, !0, 0, i), i.matrix = Object(h.f)(i.element, !1, !1, !0);
                return this
            }, e.getProperty = function(t, e) {
                var n = this.getElementState(t) || v;
                return (e in n ? n : n.props || v)[e]
            }, e.add = function(t) {
                for (var e, n, i, r = t.targets.length, o = this.idLookup, s = this.alt; r--;)(i = o[(n = t.elementStates[r]).id]) && (n.element === i.element || s[n.id] && s[n.id].element === n.element) ? (e = this.elementStates.indexOf(n.element === i.element ? i : s[n.id]), this.targets.splice(e, 1, t.targets[r]), this.elementStates.splice(e, 1, n)) : (this.targets.push(t.targets[r]), this.elementStates.push(n));
                return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), Z(this), this
            }, e.compare = function(t) {
                var e, n, i, r, o, s, a, l, u = t.idLookup,
                    c = this.idLookup,
                    h = [],
                    d = [],
                    p = [],
                    f = [],
                    m = [],
                    g = t.alt,
                    v = this.alt,
                    y = function(t, e, n) {
                        return (t.isVisible !== e.isVisible ? t.isVisible ? p : f : t.isVisible ? d : h).push(n) && m.push(n)
                    },
                    b = function(t, e, n) {
                        return m.indexOf(n) < 0 && y(t, e, n)
                    };
                for (i in u) o = g[i], s = v[i], r = (e = o ? U(t, this, i) : u[i]).element, n = c[i], s ? (l = n.isVisible || !s.isVisible && r === n.element ? n : s, (a = !o || e.isVisible || o.isVisible || l.element !== o.element ? e : o).isVisible && l.isVisible && a.element !== l.element ? ((a.isDifferent(l) ? d : h).push(a.element, l.element), m.push(a.element, l.element)) : y(a, l, a.element), o && a.element === o.element && (o = u[i]), b(a.element !== n.element && o ? o : a, n, n.element), b(o && o.element === s.element ? o : a, s, s.element), o && b(o, s.element === o.element ? s : n, o.element)) : (n ? n.isDifferent(e) ? y(e, n, r) : h.push(r) : p.push(r), o && b(o, n, o.element));
                for (i in c) u[i] || (f.push(c[i].element), v[i] && f.push(v[i].element));
                return {
                    changed: d,
                    unchanged: h,
                    enter: p,
                    leave: f
                }
            }, e.recordInlineStyles = function() {
                for (var t = b[this.props] || _, e = this.elementStates.length; e--;) P(this.elementStates[e], t)
            }, e.interrupt = function(t) {
                var e = this,
                    n = [];
                this.targets.forEach(function(i) {
                    var r = i._flip,
                        o = J(r, t ? 0 : 1);
                    t && o && n.indexOf(r) < 0 && r.add(function() {
                        return e.updateVisibility()
                    }), o && n.push(r)
                }), !t && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length)
            }, e.updateVisibility = function() {
                this.elementStates.forEach(function(t) {
                    var e = t.element.getBoundingClientRect();
                    t.isVisible = !!(e.width || e.height || e.top || e.left), t.uncache = 1
                })
            }, e.getElementState = function(t) {
                return this.elementStates[this.targets.indexOf(x(t))]
            }, e.makeAbsolute = function() {
                return O(this.elementStates.slice(0), !0, !0).map(j)
            }, t
        }(),
        et = function() {
            function t(t, e, n) {
                this.element = t, this.update(e, n)
            }
            var e = t.prototype;
            return e.isDifferent = function(t) {
                var e = this.bounds,
                    n = t.bounds;
                return e.top !== n.top || e.left !== n.left || e.width !== n.width || e.height !== n.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props)
            }, e.update = function(t, e) {
                var n, i, o = this.element,
                    s = r.getProperty(o),
                    a = r.core.getCache(o),
                    u = o.getBoundingClientRect(),
                    c = o.getBBox && "function" == typeof o.getBBox && "svg" !== o.nodeName.toLowerCase() && o.getBBox(),
                    p = e ? new h.a(1, 0, 0, 1, u.left + Object(h.c)(), u.top + Object(h.d)()) : Object(h.f)(o, !1, !1, !0);
                this.getProp = s, this.element = o, this.id = ((i = (n = o).getAttribute("data-flip-id")) || n.setAttribute("data-flip-id", i = "auto-" + d++), i), this.matrix = p, this.cache = a, this.bounds = u, this.isVisible = !!(u.width || u.height || u.left || u.top), this.display = s("display"), this.position = s("position"), this.parent = o.parentNode, this.x = s("x"), this.y = s("y"), this.scaleX = a.scaleX, this.scaleY = a.scaleY, this.rotation = s("rotation"), this.skewX = s("skewX"), this.opacity = s("opacity"), this.width = c ? c.width : l(s("width", "px"), .04), this.height = c ? c.height : l(s("height", "px"), .04), t && function(t, e) {
                    for (var n = r.getProperty(t.element, null, "native"), i = t.props = {}, o = e.length; o--;) i[e[o]] = (n(e[o]) + "").trim();
                    i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0)
                }(this, F[t] || M(t)), this.ctm = o.getCTM && "svg" === o.nodeName.toLowerCase() && Object(h.b)(o).inverse(), this.simple = e || 1 === C(p.a) && !C(p.b) && !C(p.c) && 1 === C(p.d), this.uncache = 0
            }, t
        }(),
        nt = function() {
            function t(t, e) {
                this.vars = t, this.batch = e, this.states = [], this.timeline = e.timeline
            }
            var e = t.prototype;
            return e.getStateById = function(t) {
                for (var e = this.states.length; e--;)
                    if (this.states[e].idLookup[t]) return this.states[e]
            }, e.kill = function() {
                this.batch.remove(this)
            }, t
        }(),
        it = function() {
            function t(t) {
                this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new tt, this.timeline = r.timeline()
            }
            var e = t.prototype;
            return e.add = function(t) {
                var e = this.actions.filter(function(e) {
                    return e.vars === t
                });
                return e.length ? e[0] : (e = new nt("function" == typeof t ? {
                    animate: t
                } : t, this), this.actions.push(e), e)
            }, e.remove = function(t) {
                var e = this.actions.indexOf(t);
                return e >= 0 && this.actions.splice(e, 1), this
            }, e.getState = function(t) {
                var e = this,
                    n = o,
                    i = s;
                return o = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(n) {
                    n.vars.getState && (n.states.length = 0, s = n, n.state = n.vars.getState(n)), t && n.states.forEach(function(t) {
                        return e.state.add(t)
                    })
                }), s = i, o = n, this.killConflicts(), this
            }, e.animate = function() {
                var t, e, n = this,
                    i = o,
                    r = this.timeline,
                    s = this.actions.length;
                for (o = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(t) {
                        t.vars.animate && t.vars.animate(t);
                        var e, n, i = t.vars.onEnter,
                            r = t.vars.onLeave,
                            o = t.targets;
                        o && o.length && (i || r) && (e = new tt, t.states.forEach(function(t) {
                            return e.add(t)
                        }), (n = e.compare(rt.getState(o))).enter.length && i && i(n.enter), n.leave.length && r && r(n.leave))
                    }), R(this._abs), this._run.forEach(function(t) {
                        return t()
                    }), e = r.duration(), t = this._final.slice(0), r.add(function() {
                        e <= r.time() && (t.forEach(function(t) {
                            return t()
                        }), p(n, "onComplete"))
                    }), o = i; s--;) this.actions[s].vars.once && this.actions[s].kill();
                return p(this, "onStart"), r.restart(), this
            }, e.loadState = function(t) {
                t || (t = function() {
                    return 0
                });
                var e = [];
                return this.actions.forEach(function(n) {
                    if (n.vars.loadState) {
                        var i, r = function r(o) {
                            o && (n.targets = o), ~(i = e.indexOf(r)) && (e.splice(i, 1), e.length || t())
                        };
                        e.push(r), n.vars.loadState(r)
                    }
                }), e.length || t(), this
            }, e.setState = function() {
                return this.actions.forEach(function(t) {
                    return t.targets = t.vars.setState && t.vars.setState(t)
                }), this
            }, e.killConflicts = function(t) {
                return this.state.interrupt(t), this._kill.forEach(function(e) {
                    return e.interrupt(t)
                }), this
            }, e.run = function(t, e) {
                var n = this;
                return this !== o && (t || this.getState(e), this.loadState(function() {
                    n._killed || (n.setState(), n.animate())
                })), this
            }, e.clear = function(t) {
                this.state.clear(), t || (this.actions.length = 0)
            }, e.getStateById = function(t) {
                for (var e, n = this.actions.length; n--;)
                    if (e = this.actions[n].getStateById(t)) return e;
                return this.state.idLookup[t] && this.state
            }, e.kill = function() {
                this._killed = 1, this.clear(), delete f[this.id]
            }, t
        }(),
        rt = function() {
            function t() {}
            return t.getState = function(e, n) {
                var i = Y(e, n);
                return s && s.states.push(i), n && n.batch && t.batch(n.batch).state.add(i), i
            }, t.from = function(t, e) {
                return "clearProps" in (e = e || {}) || (e.clearProps = !0), $(t, Y(e.targets || t.targets, {
                    props: e.props || t.props,
                    simple: e.simple,
                    kill: !!e.kill
                }), e, -1)
            }, t.to = function(t, e) {
                return $(t, Y(e.targets || t.targets, {
                    props: e.props || t.props,
                    simple: e.simple,
                    kill: !!e.kill
                }), e, 1)
            }, t.fromTo = function(t, e, n) {
                return $(t, e, n)
            }, t.fit = function(t, e, n) {
                var i = n ? A(n, E) : {},
                    o = n || i,
                    s = o.absolute,
                    a = o.scale,
                    l = o.getVars,
                    u = o.props,
                    c = o.runBackwards,
                    h = o.onComplete,
                    d = o.simple,
                    p = n && n.fitChild && x(n.fitChild),
                    f = z(e, u, d, t),
                    m = z(t, 0, d, f),
                    g = u ? b[u] : _;
                return u && V(i, f.props), c && (P(m, g), "immediateRender" in i || (i.immediateRender = !0), i.onComplete = function() {
                    L(m), h && h.apply(this, arguments)
                }), s && j(m, f), i = X(m, f, a || p, u, p, i.duration || l ? i : 0), l ? i : i.duration ? r.to(m.element, i) : null
            }, t.makeAbsolute = function(t, e) {
                return (t instanceof tt ? t : new tt(t, e)).makeAbsolute()
            }, t.batch = function(t) {
                return t || (t = "default"), f[t] || (f[t] = new it(t))
            }, t.killFlipsOf = function(t, e) {
                (t instanceof tt ? t.targets : i(t)).forEach(function(t) {
                    return t && J(t._flip, !1 !== e ? 1 : 2)
                })
            }, t.isFlipping = function(e) {
                var n = t.getByTarget(e);
                return !!n && n.isActive()
            }, t.getByTarget = function(t) {
                return (x(t) || v)._flip
            }, t.getElementState = function(t, e) {
                return new et(x(t), e)
            }, t.convertCoordinates = function(t, e, n) {
                var i = Object(h.f)(e, !0, !0).multiply(Object(h.f)(t));
                return n ? i.apply(n) : i
            }, t.register = function(t) {
                if (a = "undefined" != typeof document && document.body) {
                    r = t, Object(h.e)(a), i = r.utils.toArray, u = r.core.getStyleSaver;
                    var e = r.utils.snap(.1);
                    l = function(t, n) {
                        return e(parseFloat(t) + n)
                    }
                }
            }, t
        }();
    /*!
     * Flip 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    rt.version = "3.12.2", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(rt)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return T
    });
    var i, r, o, s, a, l, u = n(23),
        c = /(?:\r|\n|\t\t)/g,
        h = /(?:\s\s+)/g,
        d = function(t) {
            i = document, r = window, (s = s || t || r.gsap || void 0) && (l = s.utils.toArray, a = s.core.context || function() {}, o = 1)
        },
        p = 1,
        f = function(t) {
            return r.getComputedStyle(t)
        },
        m = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        },
        g = function(t, e) {
            for (var n, i = e.length; --i > -1;)
                if (n = e[i], t.substr(0, n.length) === n) return n.length
        },
        v = function(t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
                i = 1;
            return n && (t = t.split("++").join("")),
                function() {
                    return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? i++ : "") + "'>" : ">")
                }
        },
        y = function t(e, n, i) {
            var r = e.nodeType;
            if (1 === r || 9 === r || 11 === r)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, n, i);
            else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(n).join(i))
        },
        b = function(t, e) {
            for (var n = e.length; --n > -1;) t.push(e[n])
        },
        D = function(t, e, n) {
            for (var i; t && t !== e;) {
                if (i = t._next || t.nextSibling) return i.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        },
        w = function t(e) {
            var n, i, r = l(e.childNodes),
                o = r.length;
            for (n = 0; n < o; n++)(i = r[n])._isSplit ? t(i) : n && i.previousSibling && 3 === i.previousSibling.nodeType ? (i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue, e.removeChild(i)) : 3 !== i.nodeType && (e.insertBefore(i.firstChild, i), e.removeChild(i))
        },
        _ = function(t, e) {
            return parseFloat(e[t]) || 0
        },
        x = function(t, e, n, r, o, s, a) {
            var l, u, c, h, d, p, g, v, x, C, T, k, E = f(t),
                S = _("paddingLeft", E),
                A = -999,
                F = _("borderBottomWidth", E) + _("borderTopWidth", E),
                M = _("borderLeftWidth", E) + _("borderRightWidth", E),
                O = _("paddingTop", E) + _("paddingBottom", E),
                P = _("paddingLeft", E) + _("paddingRight", E),
                L = _("fontSize", E) * (e.lineThreshold || .2),
                N = E.textAlign,
                I = [],
                j = [],
                B = [],
                R = e.wordDelimiter || " ",
                q = e.tag ? e.tag : e.span ? "span" : "div",
                z = e.type || e.split || "chars,words,lines",
                V = o && ~z.indexOf("lines") ? [] : null,
                H = ~z.indexOf("words"),
                W = ~z.indexOf("chars"),
                X = m(e),
                Y = e.linesClass,
                U = ~(Y || "").indexOf("++"),
                K = [],
                G = "flex" === E.display,
                Q = t.style.display;
            for (U && (Y = Y.split("++").join("")), G && (t.style.display = "block"), c = (u = t.getElementsByTagName("*")).length, d = [], l = 0; l < c; l++) d[l] = u[l];
            if (V || X)
                for (l = 0; l < c; l++)((p = (h = d[l]).parentNode === t) || X || W && !H) && (k = h.offsetTop, V && p && Math.abs(k - A) > L && ("BR" !== h.nodeName || 0 === l) && (g = [], V.push(g), A = k), X && (h._x = h.offsetLeft, h._y = k, h._w = h.offsetWidth, h._h = h.offsetHeight), V && ((h._isSplit && p || !W && p || H && p || !H && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (g.push(h), h._x -= S, D(h, t, R) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === l) && V.push([])));
            for (l = 0; l < c; l++)
                if (p = (h = d[l]).parentNode === t, "BR" !== h.nodeName)
                    if (X && (x = h.style, H || p || (h._x += h.parentNode._x, h._y += h.parentNode._y), x.left = h._x + "px", x.top = h._y + "px", x.position = "absolute", x.display = "block", x.width = h._w + 1 + "px", x.height = h._h + "px"), !H && W)
                        if (h._isSplit)
                            for (h._next = u = h.nextSibling, h.parentNode.appendChild(h); u && 3 === u.nodeType && " " === u.textContent;) h._next = u.nextSibling, h.parentNode.appendChild(u), u = u.nextSibling;
                        else h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && K.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), d.splice(l--, 1), c--) : p || (k = !h.nextSibling && D(h.parentNode, t, R), h.parentNode._parent && h.parentNode._parent.appendChild(h), k && h.parentNode.appendChild(i.createTextNode(" ")), "span" === q && (h.style.display = "inline"), I.push(h));
            else h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? j.push(h) : W && !h._isSplit && ("span" === q && (h.style.display = "inline"), I.push(h));
            else V || X ? (h.parentNode && h.parentNode.removeChild(h), d.splice(l--, 1), c--) : H || t.appendChild(h);
            for (l = K.length; --l > -1;) K[l].parentNode.removeChild(K[l]);
            if (V) {
                for (X && (C = i.createElement(q), t.appendChild(C), T = C.offsetWidth + "px", k = C.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(C)), x = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (v = " " === R && (!X || !H && !W), l = 0; l < V.length; l++) {
                    for (g = V[l], (C = i.createElement(q)).style.cssText = "display:block;text-align:" + N + ";position:" + (X ? "absolute;" : "relative;"), Y && (C.className = Y + (U ? l + 1 : "")), B.push(C), c = g.length, u = 0; u < c; u++) "BR" !== g[u].nodeName && (h = g[u], C.appendChild(h), v && h._wordEnd && C.appendChild(i.createTextNode(" ")), X && (0 === u && (C.style.top = h._y + "px", C.style.left = S + k + "px"), h.style.top = "0px", k && (h.style.left = h._x - k + "px")));
                    0 === c ? C.innerHTML = "&nbsp;" : H || W || (w(C), y(C, String.fromCharCode(160), " ")), X && (C.style.width = T, C.style.height = h._h + "px"), t.appendChild(C)
                }
                t.style.cssText = x
            }
            X && (a > t.clientHeight && (t.style.height = a - O + "px", t.clientHeight < a && (t.style.height = a + F + "px")), s > t.clientWidth && (t.style.width = s - P + "px", t.clientWidth < s && (t.style.width = s + M + "px"))), G && (Q ? t.style.display = Q : t.style.removeProperty("display")), b(n, I), H && b(r, j), b(o, B)
        },
        C = function t(e, n, r, o) {
            var s, a, d = l(e.childNodes),
                p = d.length,
                v = m(n);
            if (3 !== e.nodeType || p > 1) {
                for (n.absolute = !1, s = 0; s < p; s++)(a = d[s])._next = a._isFirst = a._parent = a._wordEnd = null, (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (v && 3 !== a.nodeType && "inline" === f(a).display && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, n, r, o));
                return n.absolute = v, void(e._isSplit = !0)
            }! function(t, e, n, r) {
                var o, s, a, l, d, p, f, v, b = e.tag ? e.tag : e.span ? "span" : "div",
                    D = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                    w = m(e),
                    _ = e.wordDelimiter || " ",
                    x = " " !== _ ? "" : w ? "&#173; " : " ",
                    C = "</" + b + ">",
                    T = 1,
                    k = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : g : null,
                    E = i.createElement("div"),
                    S = t.parentNode;
                for (S.insertBefore(E, t), E.textContent = t.nodeValue, S.removeChild(t), t = E, f = -1 !== (o = Object(u.b)(t)).indexOf("<"), !1 !== e.reduceWhiteSpace && (o = o.replace(h, " ").replace(c, "")), f && (o = o.split("<").join("{{LT}}")), d = o.length, s = (" " === o.charAt(0) ? x : "") + n(), a = 0; a < d; a++)
                    if (p = o.charAt(a), k && (v = k(o.substr(a), e.specialChars))) p = o.substr(a, v || 1), s += D && " " !== p ? r() + p + "</" + b + ">" : p, a += v - 1;
                    else if (p === _ && o.charAt(a - 1) !== _ && a) {
                    for (s += T ? C : "", T = 0; o.charAt(a + 1) === _;) s += x, a++;
                    a === d - 1 ? s += x : ")" !== o.charAt(a + 1) && (s += x + n(), T = 1)
                } else "{" === p && "{{LT}}" === o.substr(a, 6) ? (s += D ? r() + "{{LT}}</" + b + ">" : "{{LT}}", a += 5) : p.charCodeAt(0) >= 55296 && p.charCodeAt(0) <= 56319 || o.charCodeAt(a + 1) >= 65024 && o.charCodeAt(a + 1) <= 65039 ? (l = ((o.substr(a, 12).split(u.a) || [])[1] || "").length || 2, s += D && " " !== p ? r() + o.substr(a, l) + "</" + b + ">" : o.substr(a, l), a += l - 1) : s += D && " " !== p ? r() + p + "</" + b + ">" : p;
                t.outerHTML = s + (T ? C : ""), f && y(S, "{{LT}}", "<")
            }(e, n, r, o)
        },
        T = function() {
            function t(t, e) {
                o || d(), this.elements = l(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, a(this), p && this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, i, r = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", s = v(t.wordsClass, o), a = v(t.charsClass, o); --r > -1;) i = this.elements[r], this._originals[r] = i.innerHTML, e = i.clientHeight, n = i.clientWidth, C(i, t, s, a), x(i, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function() {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach(function(e, n) {
                    return e.innerHTML = t[n]
                }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, t.create = function(e, n) {
                return new t(e, n)
            }, t
        }();
    /*!
     * SplitText: 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    T.version = "3.12.2", T.register = d
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.d(e, "a", function() {
        return Ie
    }), n.d(e, "b", function() {
        return un
    }), n.d(e, "y", function() {
        return _n
    }), n.d(e, "x", function() {
        return Qt
    }), n.d(e, "i", function() {
        return dt
    }), n.d(e, "n", function() {
        return q
    }), n.d(e, "o", function() {
        return z
    }), n.d(e, "k", function() {
        return A
    }), n.d(e, "l", function() {
        return O
    }), n.d(e, "s", function() {
        return nn
    }), n.d(e, "r", function() {
        return H
    }), n.d(e, "g", function() {
        return pt
    }), n.d(e, "v", function() {
        return ln
    }), n.d(e, "e", function() {
        return _e
    }), n.d(e, "t", function() {
        return le
    }), n.d(e, "c", function() {
        return Ve
    }), n.d(e, "q", function() {
        return ot
    }), n.d(e, "w", function() {
        return xe
    }), n.d(e, "f", function() {
        return D
    }), n.d(e, "u", function() {
        return ft
    }), n.d(e, "m", function() {
        return G
    }), n.d(e, "j", function() {
        return Ze
    }), n.d(e, "h", function() {
        return ht
    }), n.d(e, "d", function() {
        return De
    }), n.d(e, "p", function() {
        return gt
    });
    var o, s, a, l, u, c, h, d, p, f, m, g, v, y, b, D = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        w = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        _ = 1e-8,
        x = 2 * Math.PI,
        C = x / 4,
        T = 0,
        k = Math.sqrt,
        E = Math.cos,
        S = Math.sin,
        A = function(t) {
            return "string" == typeof t
        },
        F = function(t) {
            return "function" == typeof t
        },
        M = function(t) {
            return "number" == typeof t
        },
        O = function(t) {
            return void 0 === t
        },
        P = function(t) {
            return "object" == typeof t
        },
        L = function(t) {
            return !1 !== t
        },
        N = function() {
            return "undefined" != typeof window
        },
        I = function(t) {
            return F(t) || A(t)
        },
        j = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        B = Array.isArray,
        R = /(?:-?\.?\d|\.)+/gi,
        q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        H = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Y = {},
        U = {},
        K = function(t) {
            return (U = xt(t, Y)) && _n
        },
        G = function(t, e) {},
        Q = function(t, e) {
            return !e && void 0
        },
        $ = function(t, e) {
            return t && (Y[t] = e) && U && (U[t] = e) || Y
        },
        J = function() {
            return 0
        },
        Z = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        tt = {
            suppressEvents: !0,
            kill: !1
        },
        et = {
            suppressEvents: !0
        },
        nt = {},
        it = [],
        rt = {},
        ot = {},
        st = {},
        at = 30,
        lt = [],
        ut = "",
        ct = function(t) {
            var e, n, i = t[0];
            if (P(i) || F(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                for (n = lt.length; n-- && !lt[n].targetTest(i););
                e = lt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e))) || t.splice(n, 1);
            return t
        },
        ht = function(t) {
            return t._gsap || ct(te(t))[0]._gsap
        },
        dt = function(t, e, n) {
            return (n = t[e]) && F(n) ? t[e]() : O(n) && t.getAttribute && t.getAttribute(e) || n
        },
        pt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        ft = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        mt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        gt = function(t, e) {
            var n = e.charAt(0),
                i = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
        },
        vt = function(t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
            return i < n
        },
        yt = function() {
            var t, e, n = it.length,
                i = it.slice(0);
            for (rt = {}, it.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        bt = function(t, e, n, i) {
            it.length && !s && yt(), t.render(e, n, i || s && e < 0 && (t._initted || t._startAt)), it.length && !s && yt()
        },
        Dt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(W).length < 2 ? e : A(t) ? t.trim() : t
        },
        wt = function(t) {
            return t
        },
        _t = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        xt = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Ct = function t(e, n) {
            for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = P(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
            return e
        },
        Tt = function(t, e) {
            var n, i = {};
            for (n in t) n in e || (i[n] = t[n]);
            return i
        },
        kt = function(t) {
            var e, n = t.parent || l,
                i = t.keyframes ? (e = B(t.keyframes), function(t, n) {
                    for (var i in n) i in t || "duration" === i && e || "ease" === i || (t[i] = n[i])
                }) : _t;
            if (L(t.inherit))
                for (; n;) i(t, n.vars.defaults), n = n.parent || n._dp;
            return t
        },
        Et = function(t, e, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var o, s = t[i];
            if (r)
                for (o = e[r]; s && s[r] > o;) s = s._prev;
            return s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
        },
        St = function(t, e, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = e._prev,
                o = e._next;
            r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
        },
        At = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Ft = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        Mt = function(t, e, n, i) {
            return t._startAt && (s ? t._startAt.revert(tt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        },
        Ot = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Pt = function(t) {
            return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Lt = function(t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        Nt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        It = function(t) {
            return t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || _) || 0))
        },
        jt = function(t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = mt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), It(t), n._dirty || Ft(n, t)), t
        },
        Bt = function(t, e) {
            var n;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = Nt(t.rawTime(), e), (!e._dur || Gt(0, e.totalDuration(), n) - e._tTime > _) && e.render(n, !0)), Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -_
            }
        },
        Rt = function(t, e, n, i) {
            return e.parent && At(e), e._start = mt((M(n) ? n : n || t !== l ? Yt(t, n, e) : t._time) + e._delay), e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Et(t, e, "_first", "_last", t._sort ? "_start" : 0), Vt(e) || (t._recent = e), i || Bt(t, e), t._ts < 0 && jt(t, t._tTime), t
        },
        qt = function(t, e) {
            return (Y.ScrollTrigger || G("scrollTrigger", e)) && Y.ScrollTrigger.create(e, t)
        },
        zt = function(t, e, n, i, r) {
            return He(t, e, r), t._initted ? !n && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== xe.frame ? (it.push(t), t._lazy = [r, i], 1) : void 0 : 1
        },
        Vt = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Ht = function(t, e, n, i) {
            var r = t._repeat,
                o = mt(e) || 0,
                s = t._tTime / t._tDur;
            return s && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : mt(o * (r + 1) + t._rDelay * r) : o, s > 0 && !i && jt(t, t._tTime = t._tDur * s), t.parent && It(t), n || Ft(t.parent, t), t
        },
        Wt = function(t) {
            return t instanceof Be ? Ft(t) : Ht(t, t._dur)
        },
        Xt = {
            _start: 0,
            endTime: J,
            totalDuration: J
        },
        Yt = function t(e, n, i) {
            var r, o, s, a = e.labels,
                l = e._recent || Xt,
                u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
            return A(n) && (isNaN(n) || n in a) ? (o = n.charAt(0), s = "%" === n.substr(-1), r = n.indexOf("="), "<" === o || ">" === o ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (r < 0 ? l : i).totalDuration() / 100 : 1)) : r < 0 ? (n in a || (a[n] = u), a[n]) : (o = parseFloat(n.charAt(r - 1) + n.substr(r + 1)), s && i && (o = o / 100 * (B(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + o : u + o)) : null == n ? u : +n
        },
        Ut = function(t, e, n) {
            var i, r, o = M(e[1]),
                s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                a = e[s];
            if (o && (a.duration = e[1]), a.parent = n, t) {
                for (i = a, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = L(r.vars.inherit) && r.parent;
                a.immediateRender = L(i.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
            }
            return new Ke(e[0], a, e[s + 1])
        },
        Kt = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Gt = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        Qt = function(t, e) {
            return A(t) && (e = X.exec(t)) ? e[1] : ""
        },
        $t = [].slice,
        Jt = function(t, e) {
            return t && P(t) && "length" in t && (!e && !t.length || t.length - 1 in t && P(t[0])) && !t.nodeType && t !== u
        },
        Zt = function(t, e, n) {
            return void 0 === n && (n = []), t.forEach(function(t) {
                var i;
                return A(t) && !e || Jt(t, 1) ? (i = n).push.apply(i, te(t)) : n.push(t)
            }) || n
        },
        te = function(t, e, n) {
            return a && !e && a.selector ? a.selector(t) : !A(t) || n || !c && Ce() ? B(t) ? Zt(t, n) : Jt(t) ? $t.call(t, 0) : t ? [t] : [] : $t.call((e || h).querySelectorAll(t), 0)
        },
        ee = function(t) {
            return t = te(t)[0] || Q("Invalid scope") || {},
                function(e) {
                    var n = t.current || t.nativeElement || t;
                    return te(e, n.querySelectorAll ? n : n === t ? Q("Invalid scope") || h.createElement("div") : t)
                }
        },
        ne = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        ie = function(t) {
            if (F(t)) return t;
            var e = P(t) ? t : {
                    each: t
                },
                n = Me(e.ease),
                i = e.from || 0,
                r = parseFloat(e.base) || 0,
                o = {},
                s = i > 0 && i < 1,
                a = isNaN(i) || s,
                l = e.axis,
                u = i,
                c = i;
            return A(i) ? u = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !s && a && (u = i[0], c = i[1]),
                function(t, s, h) {
                    var d, p, f, m, g, v, y, b, D, w = (h || e).length,
                        _ = o[w];
                    if (!_) {
                        if (!(D = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (y = -1e8; y < (y = h[D++].getBoundingClientRect().left) && D < w;);
                            D--
                        }
                        for (_ = o[w] = [], d = a ? Math.min(D, w) * u - .5 : i % D, p = 1e8 === D ? 0 : a ? w * c / D - .5 : i / D | 0, y = 0, b = 1e8, v = 0; v < w; v++) f = v % D - d, m = p - (v / D | 0), _[v] = g = l ? Math.abs("y" === l ? m : f) : k(f * f + m * m), g > y && (y = g), g < b && (b = g);
                        "random" === i && ne(_), _.max = y - b, _.min = b, _.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (D > w ? w - 1 : l ? "y" === l ? w / D : D : Math.max(D, w / D)) || 0) * ("edges" === i ? -1 : 1), _.b = w < 0 ? r - w : r, _.u = Qt(e.amount || e.each) || 0, n = n && w < 0 ? Ae(n) : n
                    }
                    return w = (_[t] - _.min) / _.max || 0, mt(_.b + (n ? n(w) : w) * _.v) + _.u
                }
        },
        re = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(n) {
                var i = mt(Math.round(parseFloat(n) / t) * t * e);
                return (i - i % 1) / e + (M(n) ? 0 : Qt(n))
            }
        },
        oe = function(t, e) {
            var n, i, r = B(t);
            return !r && P(t) && (n = r = t.radius || 1e8, t.values ? (t = te(t.values), (i = !M(t[0])) && (n *= n)) : t = re(t.increment)), Kt(e, r ? F(t) ? function(e) {
                return i = t(e), Math.abs(i - e) <= n ? i : e
            } : function(e) {
                for (var r, o, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = 1e8, u = 0, c = t.length; c--;)(r = i ? (r = t[c].x - s) * r + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && (l = r, u = c);
                return u = !n || l <= n ? t[u] : e, i || u === e || M(e) ? u : u + Qt(e)
            } : re(t))
        },
        se = function(t, e, n, i) {
            return Kt(B(t) ? !e : !0 === n ? !!(n = 0) : !i, function() {
                return B(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
            })
        },
        ae = function(t, e, n) {
            return Kt(n, function(n) {
                return t[~~e(n)]
            })
        },
        le = function(t) {
            for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? W : R), s += t.substr(o, e - o) + se(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), o = i + 1;
            return s + t.substr(o, t.length - o)
        },
        ue = function(t, e, n, i, r) {
            var o = e - t,
                s = i - n;
            return Kt(r, function(e) {
                return n + ((e - t) / o * s || 0)
            })
        },
        ce = function(t, e, n) {
            var i, r, o, s = t.labels,
                a = 1e8;
            for (i in s)(r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
            return o
        },
        he = function(t, e, n) {
            var i, r, o, s = t.vars,
                l = s[e],
                u = a,
                c = t._ctx;
            if (l) return i = s[e + "Params"], r = s.callbackScope || t, n && it.length && yt(), c && (a = c), o = i ? l.apply(r, i) : l.call(r), a = u, o
        },
        de = function(t) {
            return At(t), t.scrollTrigger && t.scrollTrigger.kill(!!s), t.progress() < 1 && he(t, "onInterrupt"), t
        },
        pe = [],
        fe = function(t) {
            if (N() && t) {
                var e = (t = !t.name && t.default || t).name,
                    n = F(t),
                    i = e && !n && t.init ? function() {
                        this._props = []
                    } : t,
                    r = {
                        init: J,
                        render: rn,
                        add: ze,
                        kill: sn,
                        modifier: on,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ze,
                        aliases: {},
                        register: 0
                    };
                if (Ce(), t !== i) {
                    if (ot[e]) return;
                    _t(i, _t(Tt(t, r), o)), xt(i.prototype, xt(r, Tt(t, o))), ot[i.prop = e] = i, t.targetTest && (lt.push(i), nt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                $(e, i), t.register && t.register(_n, i, un)
            } else t && pe.push(t)
        },
        me = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ge = function(t, e, n) {
            return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ve = function(t, e, n) {
            var i, r, o, s, a, l, u, c, h, d, p = t ? M(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : me.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]) p = me[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = d = t.match(R), e) {
                        if (~t.indexOf("=")) return p = t.match(q), n && p.length < 4 && (p[3] = 1), p
                    } else s = +p[0] % 360 / 360, a = +p[1] / 100, i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = ge(s + 1 / 3, i, r), p[1] = ge(s, i, r), p[2] = ge(s - 1 / 3, i, r);
                else p = t.match(R) || me.transparent;
                p = p.map(Number)
            }
            return e && !d && (i = p[0] / 255, r = p[1] / 255, o = p[2] / 255, l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2, u === c ? s = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), s = u === i ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        ye = function(t) {
            var e = [],
                n = [],
                i = -1;
            return t.split(De).forEach(function(t) {
                var r = t.match(z) || [];
                e.push.apply(e, r), n.push(i += r.length + 1)
            }), e.c = n, e
        },
        be = function(t, e, n) {
            var i, r, o, s, a = "",
                l = (t + a).match(De),
                u = e ? "hsla(" : "rgba(",
                c = 0;
            if (!l) return t;
            if (l = l.map(function(t) {
                    return (t = ve(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), n && (o = ye(t), (i = n.c).join(a) !== o.c.join(a)))
                for (s = (r = t.replace(De, "1").split(z)).length - 1; c < s; c++) a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
            if (!r)
                for (s = (r = t.split(De)).length - 1; c < s; c++) a += r[c] + l[c];
            return a + r[s]
        },
        De = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in me) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        we = /hsl[a]?\(/,
        _e = function(t) {
            var e, n = t.join(" ");
            if (De.lastIndex = 0, De.test(n)) return e = we.test(n), t[1] = be(t[1], e), t[0] = be(t[0], e, ye(t[1])), !0
        },
        xe = function() {
            var t, e, n, i, r, o, s = Date.now,
                a = 500,
                l = 33,
                p = s(),
                f = p,
                g = 1e3 / 240,
                v = g,
                y = [],
                b = function n(u) {
                    var c, h, d, m, b = s() - f,
                        D = !0 === u;
                    if (b > a && (p += b - l), ((c = (d = (f += b) - p) - v) > 0 || D) && (m = ++i.frame, r = d - 1e3 * i.time, i.time = d /= 1e3, v += c + (c >= g ? 4 : g - c), h = 1), D || (t = e(n)), h)
                        for (o = 0; o < y.length; o++) y[o](d, r, m, u)
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    b(!0)
                },
                deltaRatio: function(t) {
                    return r / (1e3 / (t || 60))
                },
                wake: function() {
                    d && (!c && N() && (u = c = window, h = u.document || {}, Y.gsap = _n, (u.gsapVersions || (u.gsapVersions = [])).push(_n.version), K(U || u.GreenSockGlobals || !u.gsap && u || {}), n = u.requestAnimationFrame, pe.forEach(fe)), t && i.sleep(), e = n || function(t) {
                        return setTimeout(t, v - 1e3 * i.time + 1 | 0)
                    }, m = 1, b(2))
                },
                sleep: function() {
                    (n ? u.cancelAnimationFrame : clearTimeout)(t), m = 0, e = J
                },
                lagSmoothing: function(t, e) {
                    a = t || 1 / 0, l = Math.min(e || 33, a)
                },
                fps: function(t) {
                    g = 1e3 / (t || 240), v = 1e3 * i.time + g
                },
                add: function(t, e, n) {
                    var r = e ? function(e, n, o, s) {
                        t(e, n, o, s), i.remove(r)
                    } : t;
                    return i.remove(t), y[n ? "unshift" : "push"](r), Ce(), r
                },
                remove: function(t, e) {
                    ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--
                },
                _listeners: y
            }
        }(),
        Ce = function() {
            return !m && xe.wake()
        },
        Te = {},
        ke = /^[\d.\-M][\d.\-,\s]/,
        Ee = /["']/g,
        Se = function(t) {
            var e, n, i, r, o = (t + "").split("("),
                s = Te[o[0]];
            return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [function(t) {
                for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(Ee, "").trim() : +i, s = n.substr(e + 1).trim();
                return r
            }(o[1])] : (e = t, n = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", n), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(Dt)) : Te._CE && ke.test(t) ? Te._CE("", t) : s
        },
        Ae = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Fe = function t(e, n) {
            for (var i, r = e._first; r;) r instanceof Be ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
        },
        Me = function(t, e) {
            return t && (F(t) ? t : Te[t] || Se(t)) || e
        },
        Oe = function(t, e, n, i) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, o = {
                easeIn: e,
                easeOut: n,
                easeInOut: i
            };
            return pt(t, function(t) {
                for (var e in Te[t] = Y[t] = o, Te[r = t.toLowerCase()] = n, o) Te[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = o[e]
            }), o
        },
        Pe = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Le = function t(e, n, i) {
            var r = n >= 1 ? n : 1,
                o = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = o / x * (Math.asin(1 / r) || 0),
                a = function(t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * S((t - s) * o) + 1
                },
                l = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : Pe(a);
            return o = x / o, l.config = function(n, i) {
                return t(e, n, i)
            }, l
        },
        Ne = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function(t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                r = "out" === e ? i : "in" === e ? function(t) {
                    return 1 - i(1 - t)
                } : Pe(i);
            return r.config = function(n) {
                return t(e, n)
            }, r
        };
    pt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Oe(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, n)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }), Te.Linear.easeNone = Te.none = Te.Linear.easeIn, Oe("Elastic", Le("in"), Le("out"), Le()), g = 7.5625, y = 1 / (v = 2.75), Oe("Bounce", function(t) {
        return 1 - b(1 - t)
    }, b = function(t) {
        return t < y ? g * t * t : t < .7272727272727273 ? g * Math.pow(t - 1.5 / v, 2) + .75 : t < .9090909090909092 ? g * (t -= 2.25 / v) * t + .9375 : g * Math.pow(t - 2.625 / v, 2) + .984375
    }), Oe("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Oe("Circ", function(t) {
        return -(k(1 - t * t) - 1)
    }), Oe("Sine", function(t) {
        return 1 === t ? 1 : 1 - E(t * C)
    }), Oe("Back", Ne("in"), Ne("out"), Ne()), Te.SteppedEase = Te.steps = Y.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                i = t + (e ? 0 : 1),
                r = e ? 1 : 0,
                o = 1 - _;
            return function(t) {
                return ((i * Gt(0, o, t) | 0) + r) * n
            }
        }
    }, w.ease = Te["quad.out"], pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ut += t + "," + t + "Params,"
    });
    var Ie = function(t, e) {
            this.id = T++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : dt, this.set = e ? e.getSetter : Ze
        },
        je = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ht(this, +t.duration, 1, 1), this.data = t.data, a && (this._ctx = a, a.data.push(this)), m || xe.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ce(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (jt(this, t), !n._dp || n.parent || Bt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Rt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === _ || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), bt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Pt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Pt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lt(this._tTime, n) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return this._rts === -_ ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Nt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || t === -_ ? 0 : this._rts, this.totalTime(Gt(-Math.abs(this._delay), this._tDur, e), !0), It(this),
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t
                    }(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== _ && (this._tTime -= _)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Rt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Nt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = et);
                var e = s;
                return s = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), s = e, this
            }, e.globalTime = function(t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : n
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Wt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Yt(this, t), L(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, L(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -_ : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -_, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - _))
            }, e.eventCallback = function(t, e, n) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise(function(n) {
                    var i = F(t) ? t : wt,
                        r = function() {
                            var t = e.then;
                            e.then = null, F(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                })
            }, e.kill = function() {
                de(this)
            }, t
        }();
    _t(je.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Be = function(t) {
        function e(e, n) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = L(e.sortChildren), l && Rt(e.parent || l, i(r), n), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && qt(i(r), e.scrollTrigger), r
        }
        r(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return Ut(0, arguments, this), this
        }, n.from = function(t, e, n) {
            return Ut(1, arguments, this), this
        }, n.fromTo = function(t, e, n, i) {
            return Ut(2, arguments, this), this
        }, n.set = function(t, e, n) {
            return e.duration = 0, e.parent = this, kt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ke(t, e, Yt(this, n), 1), this
        }, n.call = function(t, e, n) {
            return Rt(this, Ke.delayedCall(0, t, e), n)
        }, n.staggerTo = function(t, e, n, i, r, o, s) {
            return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Ke(t, n, Yt(this, r)), this
        }, n.staggerFrom = function(t, e, n, i, r, o, s) {
            return n.runBackwards = 1, kt(n).immediateRender = L(n.immediateRender), this.staggerTo(t, e, n, i, r, o, s)
        }, n.staggerFromTo = function(t, e, n, i, r, o, s, a) {
            return i.startAt = n, kt(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, r, o, s, a)
        }, n.render = function(t, e, n) {
            var i, r, o, a, u, c, h, d, p, f, m, g, v = this._time,
                y = this._dirty ? this.totalDuration() : this._tDur,
                b = this._dur,
                D = t <= 0 ? 0 : mt(t),
                w = this._zTime < 0 != t < 0 && (this._initted || !b);
            if (this !== l && D > y && t >= 0 && (D = y), D !== this._tTime || n || w) {
                if (v !== this._time && b && (D += this._time - v, t += this._time - v), i = D, p = this._start, c = !(d = this._ts), w && (b || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (m = this._yoyo, u = b + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, n);
                    if (i = mt(D % u), D === y ? (a = this._repeat, i = b) : ((a = ~~(D / u)) && a === D / u && (i = b, a--), i > b && (i = b)), f = Lt(this._tTime, u), !v && this._tTime && f !== a && this._tTime - f * u - this._dur <= 0 && (f = a), m && 1 & a && (i = b - i, g = 1), a !== f && !this._lock) {
                        var x = m && 1 & f,
                            C = x === (m && 1 & a);
                        if (a < f && (x = !x), v = x ? 0 : D % b ? b : D, this._lock = 1, this.render(v || (g ? 0 : mt(a * u)), e, !b)._lock = 0, this._tTime = D, !e && this.parent && he(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (b = this._dur, y = this._tDur, C && (this._lock = 2, v = x ? b : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                        Fe(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
                        var i;
                        if (n > e)
                            for (i = t._first; i && i._start <= n;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= n;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, mt(v), mt(i))) && (D -= i - (i = h._start)), this._tTime = D, this._time = i, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && i && !e && !a && (he(this, "onStart"), this._tTime !== D)) return this;
                if (i >= v && t >= 0)
                    for (r = this._first; r;) {
                        if (o = r._next, (r._act || i >= r._start) && r._ts && h !== r) {
                            if (r.parent !== this) return this.render(t, e, n);
                            if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !c) {
                                h = 0, o && (D += this._zTime = -_);
                                break
                            }
                        }
                        r = o
                    } else {
                        r = this._last;
                        for (var T = t < 0 ? t : i; r;) {
                            if (o = r._prev, (r._act || T <= r._end) && r._ts && h !== r) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if (r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, n || s && (r._initted || r._startAt)), i !== this._time || !this._ts && !c) {
                                    h = 0, o && (D += this._zTime = T ? -_ : _);
                                    break
                                }
                            }
                            r = o
                        }
                    }
                if (h && !e && (this.pause(), h.render(i >= v ? 0 : -_)._zTime = i >= v ? 1 : -1, this._ts)) return this._start = p, It(this), this.render(t, e, n);
                this._onUpdate && !e && he(this, "onUpdate", !0), (D === y && this._tTime >= this.totalDuration() || !D && v) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !b) && (D === y && this._ts > 0 || !D && this._ts < 0) && At(this, 1), e || t < 0 && !v || !D && !v && y || (he(this, D === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(D < y && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (M(e) || (e = Yt(this, e, t)), !(t instanceof je)) {
                if (B(t)) return t.forEach(function(t) {
                    return n.add(t, e)
                }), this;
                if (A(t)) return this.addLabel(t, e);
                if (!F(t)) return this;
                t = Ke.delayedCall(0, t)
            }
            return this !== t ? Rt(this, t, e) : this
        }, n.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -1e8);
            for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Ke ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
            return r
        }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
            return A(t) ? this.removeLabel(t) : F(t) ? this.killTweensOf(t) : (St(this, t), t === this._recent && (this._recent = this._last), Ft(this))
        }, n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = mt(xe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
            return this.labels[t] = Yt(this, e), this
        }, n.removeLabel = function(t) {
            return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
            var i = Ke.delayedCall(0, e || J, n);
            return i.data = "isPause", this._hasPause = 1, Rt(this, i, Yt(this, t))
        }, n.removePause = function(t) {
            var e = this._first;
            for (t = Yt(this, t); e;) e._start === t && "isPause" === e.data && At(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--;) Re !== i[r] && i[r].kill(t, e);
            return this
        }, n.getTweensOf = function(t, e) {
            for (var n, i = [], r = te(t), o = this._first, s = M(e); o;) o instanceof Ke ? vt(o._targets, r) && (s ? (!Re || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n), o = o._next;
            return i
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var n, i = this,
                r = Yt(i, t),
                o = e,
                s = o.startAt,
                a = o.onStart,
                l = o.onStartParams,
                u = o.immediateRender,
                c = Ke.to(i, _t({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || _,
                    onStart: function() {
                        if (i.pause(), !n) {
                            var t = e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale());
                            c._dur !== t && Ht(c, t, 0, 1).render(c._time, !0, !0), n = 1
                        }
                        a && a.apply(c, l || [])
                    }
                }, e));
            return u ? c.render(0) : c
        }, n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, _t({
                startAt: {
                    time: Yt(this, t)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ce(this, Yt(this, t))
        }, n.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ce(this, Yt(this, t), 1)
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + _)
        }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (i in o) o[i] >= n && (o[i] += t);
            return Ft(this)
        }, n.invalidate = function(e) {
            var n = this._first;
            for (this._lock = 0; n;) n.invalidate(e), n = n._next;
            return t.prototype.invalidate.call(this, e)
        }, n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ft(this)
        }, n.totalDuration = function(t) {
            var e, n, i, r = 0,
                o = this._last,
                s = 1e8;
            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (i = this.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (n = o._start) > s && this._sort && o._ts && !this._lock ? (this._lock = 1, Rt(this, o, n - o._delay, 1)._lock = 0) : s = n, n < 0 && o._ts && (r -= n, (!i && !this._dp || i && i.smoothChildTiming) && (this._start += n / this._ts, this._time -= n, this._tTime -= n), this.shiftChildren(-n, !1, -Infinity), s = 0), o._end > r && o._ts && (r = o._end), o = e;
                Ht(this, this === l && this._time > r ? this._time : r, 1, 1), this._dirty = 0
            }
            return this._tDur
        }, e.updateRoot = function(t) {
            if (l._ts && (bt(l, Nt(t, l)), p = xe.frame), xe.frame >= at) {
                at += D.autoSleep || 120;
                var e = l._first;
                if ((!e || !e._ts) && D.autoSleep && xe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || xe.sleep()
                }
            }
        }, e
    }(je);
    _t(Be.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Re, qe, ze = function(t, e, n, i, r, o, s, a, l, u) {
            F(i) && (i = i(r || 0, t, o));
            var c, h = t[e],
                d = "get" !== n ? n : F(h) ? l ? t[e.indexOf("set") || !F(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h,
                p = F(h) ? l ? $e : Qe : Ge;
            if (A(i) && (~i.indexOf("random(") && (i = le(i)), "=" === i.charAt(1) && ((c = gt(d, i) + (Qt(d) || 0)) || 0 === c) && (i = c)), !u || d !== i || qe) return isNaN(d * i) || "" === i ? (!h && !(e in t) && G(e, i), function(t, e, n, i, r, o, s) {
                var a, l, u, c, h, d, p, f, m = new un(this._pt, t, e, 0, 1, nn, null, r),
                    g = 0,
                    v = 0;
                for (m.b = n, m.e = i, n += "", (p = ~(i += "").indexOf("random(")) && (i = le(i)), o && (o(f = [n, i], t, e), n = f[0], i = f[1]), l = n.match(V) || []; a = V.exec(i);) c = a[0], h = i.substring(g, a.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), c !== l[v++] && (d = parseFloat(l[v - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: h || 1 === v ? h : ",",
                    s: d,
                    c: "=" === c.charAt(1) ? gt(d, c) - d : parseFloat(c) - d,
                    m: u && u < 4 ? Math.round : 0
                }, g = V.lastIndex);
                return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = s, (H.test(i) || p) && (m.e = 0), this._pt = m, m
            }.call(this, t, e, d, i, p, a || D.stringFilter, l)) : (c = new un(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof h ? en : tn, 0, p), l && (c.fp = l), s && c.modifier(s, this, t), this._pt = c)
        },
        Ve = function(t, e, n, i, r, o) {
            var s, a, l, u;
            if (ot[t] && !1 !== (s = new ot[t]).init(r, s.rawVars ? e[t] : function(t, e, n, i, r) {
                    if (F(t) && (t = Xe(t, r, e, n, i)), !P(t) || t.style && t.nodeType || B(t) || j(t)) return A(t) ? Xe(t, r, e, n, i) : t;
                    var o, s = {};
                    for (o in t) s[o] = Xe(t[o], r, e, n, i);
                    return s
                }(e[t], i, r, o, n), n, i, o) && (n._pt = a = new un(n._pt, r, t, 0, 1, s.render, s, 0, s.priority), n !== f))
                for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--;) l[s._props[u]] = a;
            return s
        },
        He = function t(e, n, i) {
            var r, a, u, c, h, d, p, f, m, g, v, y, b, D = e.vars,
                x = D.ease,
                C = D.startAt,
                T = D.immediateRender,
                k = D.lazy,
                E = D.onUpdate,
                S = D.onUpdateParams,
                A = D.callbackScope,
                F = D.runBackwards,
                M = D.yoyoEase,
                O = D.keyframes,
                P = D.autoRevert,
                N = e._dur,
                I = e._startAt,
                j = e._targets,
                B = e.parent,
                R = B && "nested" === B.data ? B.vars.targets : j,
                q = "auto" === e._overwrite && !o,
                z = e.timeline;
            if (z && (!O || !x) && (x = "none"), e._ease = Me(x, w.ease), e._yEase = M ? Ae(Me(!0 === M ? x : M, w.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), e._from = !z && !!D.runBackwards, !z || O && !D.stagger) {
                if (y = (f = j[0] ? ht(j[0]).harness : 0) && D[f.prop], r = Tt(D, nt), I && (I._zTime < 0 && I.progress(1), n < 0 && F && T && !P ? I.render(-1, !0) : I.revert(F && N ? tt : Z), I._lazy = 0), C) {
                    if (At(e._startAt = Ke.set(j, _t({
                            data: "isStart",
                            overwrite: !1,
                            parent: B,
                            immediateRender: !0,
                            lazy: !I && L(k),
                            startAt: null,
                            delay: 0,
                            onUpdate: E,
                            onUpdateParams: S,
                            callbackScope: A,
                            stagger: 0
                        }, C))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (s || !T && !P) && e._startAt.revert(tt), T && N && n <= 0 && i <= 0) return void(n && (e._zTime = n))
                } else if (F && N && !I)
                    if (n && (T = !1), u = _t({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: T && !I && L(k),
                            immediateRender: T,
                            stagger: 0,
                            parent: B
                        }, r), y && (u[f.prop] = y), At(e._startAt = Ke.set(j, u)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (s ? e._startAt.revert(tt) : e._startAt.render(-1, !0)), e._zTime = n, T) {
                        if (!n) return
                    } else t(e._startAt, _, _);
                for (e._pt = e._ptCache = 0, k = N && L(k) || k && !N, a = 0; a < j.length; a++) {
                    if (p = (h = j[a])._gsap || ct(j)[a]._gsap, e._ptLookup[a] = g = {}, rt[p.id] && it.length && yt(), v = R === j ? a : R.indexOf(h), f && !1 !== (m = new f).init(h, y || r, e, v, R) && (e._pt = c = new un(e._pt, h, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach(function(t) {
                            g[t] = c
                        }), m.priority && (d = 1)), !f || y)
                        for (u in r) ot[u] && (m = Ve(u, r, e, v, h, R)) ? m.priority && (d = 1) : g[u] = c = ze.call(e, h, u, "get", r[u], v, R, 0, D.stringFilter);
                    e._op && e._op[a] && e.kill(h, e._op[a]), q && e._pt && (Re = e, l.killTweensOf(h, g, e.globalTime(n)), b = !e.parent, Re = 0), e._pt && k && (rt[p.id] = 1)
                }
                d && ln(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = E, e._initted = (!e._op || e._pt) && !b, O && n <= 0 && z.render(1e8, !0, !0)
        },
        We = function(t, e, n, i) {
            var r, o, s = e.ease || i || "power1.inOut";
            if (B(e)) o = n[t] || (n[t] = []), e.forEach(function(t, n) {
                return o.push({
                    t: n / (e.length - 1) * 100,
                    v: t,
                    e: s
                })
            });
            else
                for (r in e) o = n[r] || (n[r] = []), "ease" === r || o.push({
                    t: parseFloat(t),
                    v: e[r],
                    e: s
                })
        },
        Xe = function(t, e, n, i, r) {
            return F(t) ? t.call(e, n, i, r) : A(t) && ~t.indexOf("random(") ? le(t) : t
        },
        Ye = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ue = {};
    pt(Ye + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ue[t] = 1
    });
    var Ke = function(t) {
        function e(e, n, r, s) {
            var a;
            "number" == typeof n && (r.duration = n, n = r, r = null);
            var u, c, h, d, p, f, m, g, v = (a = t.call(this, s ? n : kt(n)) || this).vars,
                y = v.duration,
                b = v.delay,
                w = v.immediateRender,
                x = v.stagger,
                C = v.overwrite,
                T = v.keyframes,
                k = v.defaults,
                E = v.scrollTrigger,
                S = v.yoyoEase,
                A = n.parent || l,
                F = (B(e) || j(e) ? M(e[0]) : "length" in n) ? [e] : te(e);
            if (a._targets = F.length ? ct(F) : Q("GSAP target " + e + " not found. https://greensock.com", !D.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = C, T || x || I(y) || I(b)) {
                if (n = a.vars, (u = a.timeline = new Be({
                        data: "nested",
                        defaults: k || {},
                        targets: A && "nested" === A.data ? A.vars.targets : F
                    })).kill(), u.parent = u._dp = i(a), u._start = 0, x || I(y) || I(b)) {
                    if (d = F.length, m = x && ie(x), P(x))
                        for (p in x) ~Ye.indexOf(p) && (g || (g = {}), g[p] = x[p]);
                    for (c = 0; c < d; c++)(h = Tt(n, Ue)).stagger = 0, S && (h.yoyoEase = S), g && xt(h, g), f = F[c], h.duration = +Xe(y, i(a), c, f, F), h.delay = (+Xe(b, i(a), c, f, F) || 0) - a._delay, !x && 1 === d && h.delay && (a._delay = b = h.delay, a._start += b, h.delay = 0), u.to(f, h, m ? m(c, f, F) : 0), u._ease = Te.none;
                    u.duration() ? y = b = 0 : a.timeline = 0
                } else if (T) {
                    kt(_t(u.vars.defaults, {
                        ease: "none"
                    })), u._ease = Me(T.ease || n.ease || "none");
                    var O, N, R, q = 0;
                    if (B(T)) T.forEach(function(t) {
                        return u.to(F, t, ">")
                    }), u.duration();
                    else {
                        for (p in h = {}, T) "ease" === p || "easeEach" === p || We(p, T[p], h, T.easeEach);
                        for (p in h)
                            for (O = h[p].sort(function(t, e) {
                                    return t.t - e.t
                                }), q = 0, c = 0; c < O.length; c++)(R = {
                                ease: (N = O[c]).e,
                                duration: (N.t - (c ? O[c - 1].t : 0)) / 100 * y
                            })[p] = N.v, u.to(F, R, q), q += R.duration;
                        u.duration() < y && u.to({}, {
                            duration: y - u.duration()
                        })
                    }
                }
                y || a.duration(y = u.duration())
            } else a.timeline = 0;
            return !0 !== C || o || (Re = i(a), l.killTweensOf(F), Re = 0), Rt(A, i(a), r), n.reversed && a.reverse(), n.paused && a.paused(!0), (w || !y && !T && a._start === mt(A._time) && L(w) && Ot(i(a)) && "nested" !== A.data) && (a._tTime = -_, a.render(Math.max(0, -b) || 0)), E && qt(i(a), E), a
        }
        r(e, t);
        var n = e.prototype;
        return n.render = function(t, e, n) {
            var i, r, o, a, l, u, c, h, d, p = this._time,
                f = this._tDur,
                m = this._dur,
                g = t < 0,
                v = t > f - _ && !g ? f : t < _ ? 0 : t;
            if (m) {
                if (v !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                    if (i = v, h = this.timeline, this._repeat) {
                        if (a = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * a + t, e, n);
                        if (i = mt(v % a), v === f ? (o = this._repeat, i = m) : ((o = ~~(v / a)) && o === v / a && (i = m, o--), i > m && (i = m)), (u = this._yoyo && 1 & o) && (d = this._yEase, i = m - i), l = Lt(this._tTime, a), i === p && !n && this._initted) return this._tTime = v, this;
                        o !== l && (h && this._yEase && Fe(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1, this.render(mt(a * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (zt(this, g ? t : i, n, e, v)) return this._tTime = 0, this;
                        if (p !== this._time) return this;
                        if (m !== this._dur) return this.render(t, e, n)
                    }
                    if (this._tTime = v, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(i / m), this._from && (this.ratio = c = 1 - c), i && !p && !e && !o && (he(this, "onStart"), this._tTime !== v)) return this;
                    for (r = this._pt; r;) r.r(c, r.d), r = r._next;
                    h && h.render(t < 0 ? t : !i && u ? -_ : h._dur * h._ease(i / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Mt(this, t, 0, n), he(this, "onUpdate")), this._repeat && o !== l && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Mt(this, t, 0, !0), (t || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && At(this, 1), e || g && !p || !(v || p || u) || (he(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, n, i) {
                var r, o, a, l = t.ratio,
                    u = e < 0 || !e && (!t._start && function t(e) {
                        var n = e.parent;
                        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                    }(t) && (t._initted || !Vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Vt(t)) ? 0 : 1,
                    c = t._rDelay,
                    h = 0;
                if (c && t._repeat && (h = Gt(0, t._tDur, e), o = Lt(h, c), t._yoyo && 1 & o && (u = 1 - u), o !== Lt(t._tTime, c) && (l = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== l || s || i || t._zTime === _ || !e && t._zTime) {
                    if (!t._initted && zt(t, e, i, n, h)) return;
                    for (a = t._zTime, t._zTime = e || (n ? _ : 0), n || (n = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, r = t._pt; r;) r.r(u, r.d), r = r._next;
                    e < 0 && Mt(t, e, 0, !0), t._onUpdate && !n && he(t, "onUpdate"), h && t._repeat && !n && t.parent && he(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && At(t, 1), n || s || (he(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, n);
            return this
        }, n.targets = function() {
            return this._targets
        }, n.invalidate = function(e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, n.resetTo = function(t, e, n, i) {
            m || xe.wake(), this._ts || this.play();
            var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || He(this, r),
                function(t, e, n, i, r, o, s) {
                    var a, l, u, c, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!h)
                        for (h = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--;) {
                            if ((a = u[c][e]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                            if (!a) return qe = 1, t.vars[e] = "+=0", He(t, s), qe = 0, 1;
                            h.push(a)
                        }
                    for (c = h.length; c--;)(a = (l = h[c])._pt || l).s = !i && 0 !== i || r ? a.s + (i || 0) + o * a.c : i, a.c = n - a.s, l.e && (l.e = ft(n) + Qt(l.e)), l.b && (l.b = a.s + Qt(l.b))
                }(this, t, e, n, i, this._ease(r / this._dur), r) ? this.resetTo(t, e, n, i) : (jt(this, 0), this.parent || Et(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? de(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Re && !0 !== Re.vars.overwrite)._first || de(this), this.parent && n !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / n, 0, 1), this
            }
            var i, r, o, s, a, l, u, c = this._targets,
                h = t ? te(t) : c,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                    return n < 0
                }(c, h)) return "all" === e && (this._pt = 0), de(this);
            for (i = this._op = this._op || [], "all" !== e && (A(e) && (a = {}, pt(e, function(t) {
                    return a[t] = 1
                }), e = a), e = function(t, e) {
                    var n, i, r, o, s = t[0] ? ht(t[0]).harness : 0,
                        a = s && s.aliases;
                    if (!a) return e;
                    for (i in n = xt({}, e), a)
                        if (i in n)
                            for (r = (o = a[i].split(",")).length; r--;) n[o[r]] = n[i];
                    return n
                }(c, e)), u = c.length; u--;)
                if (~h.indexOf(c[u]))
                    for (a in r = d[u], "all" === e ? (i[u] = e, s = r, o = {}) : (o = i[u] = i[u] || {}, s = e), s)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || St(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && p && de(this), this
        }, e.to = function(t, n) {
            return new e(t, n, arguments[2])
        }, e.from = function(t, e) {
            return Ut(1, arguments)
        }, e.delayedCall = function(t, n, i, r) {
            return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r
            })
        }, e.fromTo = function(t, e, n) {
            return Ut(2, arguments)
        }, e.set = function(t, n) {
            return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
        }, e.killTweensOf = function(t, e, n) {
            return l.killTweensOf(t, e, n)
        }, e
    }(je);
    _t(Ke.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), pt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Ke[t] = function() {
            var e = new Be,
                n = $t.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    });
    var Ge = function(t, e, n) {
            return t[e] = n
        },
        Qe = function(t, e, n) {
            return t[e](n)
        },
        $e = function(t, e, n, i) {
            return t[e](i.fp, n)
        },
        Je = function(t, e, n) {
            return t.setAttribute(e, n)
        },
        Ze = function(t, e) {
            return F(t[e]) ? Qe : O(t[e]) && t.setAttribute ? Je : Ge
        },
        tn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        en = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        nn = function(t, e) {
            var n = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        rn = function(t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        on = function(t, e, n, i) {
            for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
        },
        sn = function(t) {
            for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? St(this, i, "_pt") : i.dep || (e = 1), i = n;
            return !e
        },
        an = function(t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
        },
        ln = function(t) {
            for (var e, n, i, r, o = t._pt; o;) {
                for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = e
            }
            t._pt = i
        },
        un = function() {
            function t(t, e, n, i, r, o, s, a, l) {
                this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || tn, this.d = s || this, this.set = a || Ge, this.pr = l || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set, this.set = an, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    pt(ut + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return nt[t] = 1
    }), Y.TweenMax = Y.TweenLite = Ke, Y.TimelineLite = Y.TimelineMax = Be, l = new Be({
        sortChildren: !1,
        defaults: w,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), D.stringFilter = _e;
    var cn = [],
        hn = {},
        dn = [],
        pn = 0,
        fn = 0,
        mn = function(t) {
            return (hn[t] || dn).map(function(t) {
                return t()
            })
        },
        gn = function() {
            var t = Date.now(),
                e = [];
            t - pn > 2 && (mn("matchMediaInit"), cn.forEach(function(t) {
                var n, i, r, o, s = t.queries,
                    a = t.conditions;
                for (i in s)(n = u.matchMedia(s[i]).matches) && (r = 1), n !== a[i] && (a[i] = n, o = 1);
                o && (t.revert(), r && e.push(t))
            }), mn("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t)
            }), pn = t, mn("matchMedia"))
        },
        vn = function() {
            function t(t, e) {
                this.selector = e && ee(e), this.data = [], this._r = [], this.isReverted = !1, this.id = fn++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, n) {
                F(t) && (n = e, e = t, t = F);
                var i = this,
                    r = function() {
                        var t, r = a,
                            o = i.selector;
                        return r && r !== i && r.data.push(i), n && (i.selector = ee(n)), a = i, t = e.apply(i, arguments), F(t) && i._r.push(t), a = r, i.selector = o, i.isReverted = !1, t
                    };
                return i.last = r, t === F ? r(i) : t ? i[t] = r : r
            }, e.ignore = function(t) {
                var e = a;
                a = null, t(this), a = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach(function(n) {
                    return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof Ke && !(n.parent && "nested" === n.parent.data) && e.push(n)
                }), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var n = this;
                if (t) {
                    var i = this.getTweens();
                    this.data.forEach(function(t) {
                        "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                            return i.splice(i.indexOf(t), 1)
                        }))
                    }), i.map(function(t) {
                        return {
                            g: t.globalTime(0),
                            t
                        }
                    }).sort(function(t, e) {
                        return e.g - t.g || -1 / 0
                    }).forEach(function(e) {
                        return e.t.revert(t)
                    }), this.data.forEach(function(e) {
                        return !(e instanceof Ke) && e.revert && e.revert(t)
                    }), this._r.forEach(function(e) {
                        return e(t, n)
                    }), this.isReverted = !0
                } else this.data.forEach(function(t) {
                    return t.kill && t.kill()
                });
                if (this.clear(), e)
                    for (var r = cn.length; r--;) cn[r].id === this.id && cn.splice(r, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        yn = function() {
            function t(t) {
                this.contexts = [], this.scope = t
            }
            var e = t.prototype;
            return e.add = function(t, e, n) {
                P(t) || (t = {
                    matches: t
                });
                var i, r, o, s = new vn(0, n || this.scope),
                    l = s.conditions = {};
                for (r in a && !s.selector && (s.selector = a.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === r ? o = 1 : (i = u.matchMedia(t[r])) && (cn.indexOf(s) < 0 && cn.push(s), (l[r] = i.matches) && (o = 1), i.addListener ? i.addListener(gn) : i.addEventListener("change", gn));
                return o && e(s), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach(function(e) {
                    return e.kill(t, !0)
                })
            }, t
        }(),
        bn = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                e.forEach(function(t) {
                    return fe(t)
                })
            },
            timeline: function(t) {
                return new Be(t)
            },
            getTweensOf: function(t, e) {
                return l.getTweensOf(t, e)
            },
            getProperty: function(t, e, n, i) {
                A(t) && (t = te(t)[0]);
                var r = ht(t || {}).get,
                    o = n ? wt : Dt;
                return "native" === n && (n = ""), t ? e ? o((ot[e] && ot[e].get || r)(t, e, n, i)) : function(e, n, i) {
                    return o((ot[e] && ot[e].get || r)(t, e, n, i))
                } : t
            },
            quickSetter: function(t, e, n) {
                if ((t = te(t)).length > 1) {
                    var i = t.map(function(t) {
                            return _n.quickSetter(t, e, n)
                        }),
                        r = i.length;
                    return function(t) {
                        for (var e = r; e--;) i[e](t)
                    }
                }
                t = t[0] || {};
                var o = ot[e],
                    s = ht(t),
                    a = s.harness && (s.harness.aliases || {})[e] || e,
                    l = o ? function(e) {
                        var i = new o;
                        f._pt = 0, i.init(t, n ? e + n : e, f, 0, [t]), i.render(1, i), f._pt && rn(1, f)
                    } : s.set(t, a);
                return o ? l : function(e) {
                    return l(t, a, n ? e + n : e, s, 1)
                }
            },
            quickTo: function(t, e, n) {
                var i, r = _n.to(t, xt(((i = {})[e] = "+=0.1", i.paused = !0, i), n || {})),
                    o = function(t, n, i) {
                        return r.resetTo(e, t, n, i)
                    };
                return o.tween = r, o
            },
            isTweening: function(t) {
                return l.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Me(t.ease, w.ease)), Ct(w, t || {})
            },
            config: function(t) {
                return Ct(D, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    n = t.effect,
                    i = t.plugins,
                    r = t.defaults,
                    o = t.extendTimeline;
                (i || "").split(",").forEach(function(t) {
                    return t && !ot[t] && !Y[t] && Q(e + " effect requires " + t + " plugin.")
                }), st[e] = function(t, e, i) {
                    return n(te(t), _t(e || {}, r), i)
                }, o && (Be.prototype[e] = function(t, n, i) {
                    return this.add(st[e](t, P(n) ? n : (i = n) && {}, this), i)
                })
            },
            registerEase: function(t, e) {
                Te[t] = Me(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Me(t, e) : Te
            },
            getById: function(t) {
                return l.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var n, i, r = new Be(t);
                for (r.smoothChildTiming = L(t.smoothChildTiming), l.remove(r), r._dp = 0, r._time = r._tTime = l._time, n = l._first; n;) i = n._next, !e && !n._dur && n instanceof Ke && n.vars.onComplete === n._targets[0] || Rt(r, n, n._start - n._delay), n = i;
                return Rt(l, r, 0), r
            },
            context: function(t, e) {
                return t ? new vn(t, e) : a
            },
            matchMedia: function(t) {
                return new yn(t)
            },
            matchMediaRefresh: function() {
                return cn.forEach(function(t) {
                    var e, n, i = t.conditions;
                    for (n in i) i[n] && (i[n] = !1, e = 1);
                    e && t.revert()
                }) || gn()
            },
            addEventListener: function(t, e) {
                var n = hn[t] || (hn[t] = []);
                ~n.indexOf(e) || n.push(e)
            },
            removeEventListener: function(t, e) {
                var n = hn[t],
                    i = n && n.indexOf(e);
                i >= 0 && n.splice(i, 1)
            },
            utils: {
                wrap: function t(e, n, i) {
                    var r = n - e;
                    return B(e) ? ae(e, t(0, e.length), n) : Kt(i, function(t) {
                        return (r + (t - e) % r) % r + e
                    })
                },
                wrapYoyo: function t(e, n, i) {
                    var r = n - e,
                        o = 2 * r;
                    return B(e) ? ae(e, t(0, e.length - 1), n) : Kt(i, function(t) {
                        return e + ((t = (o + (t - e) % o) % o || 0) > r ? o - t : t)
                    })
                },
                distribute: ie,
                random: se,
                snap: oe,
                normalize: function(t, e, n) {
                    return ue(t, e, 0, 1, n)
                },
                getUnit: Qt,
                clamp: function(t, e, n) {
                    return Kt(n, function(n) {
                        return Gt(t, e, n)
                    })
                },
                splitColor: ve,
                toArray: te,
                selector: ee,
                mapRange: ue,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function(t) {
                        return e.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }
                },
                unitize: function(t, e) {
                    return function(n) {
                        return t(parseFloat(n)) + (e || Qt(n))
                    }
                },
                interpolate: function t(e, n, i, r) {
                    var o = isNaN(e + n) ? 0 : function(t) {
                        return (1 - t) * e + t * n
                    };
                    if (!o) {
                        var s, a, l, u, c, h = A(e),
                            d = {};
                        if (!0 === i && (r = 1) && (i = null), h) e = {
                            p: e
                        }, n = {
                            p: n
                        };
                        else if (B(e) && !B(n)) {
                            for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                            u--, o = function(t) {
                                t *= u;
                                var e = Math.min(c, ~~t);
                                return l[e](t - e)
                            }, i = n
                        } else r || (e = xt(B(e) ? [] : {}, e));
                        if (!l) {
                            for (s in n) ze.call(d, e, s, "get", n[s]);
                            o = function(t) {
                                return rn(t, d) || (h ? e.p : e)
                            }
                        }
                    }
                    return Kt(i, o)
                },
                shuffle: ne
            },
            install: K,
            effects: st,
            ticker: xe,
            updateRoot: Be.updateRoot,
            plugins: ot,
            globalTimeline: l,
            core: {
                PropTween: un,
                globals: $,
                Tween: Ke,
                Timeline: Be,
                Animation: je,
                getCache: ht,
                _removeLinkedListItem: St,
                reverting: function() {
                    return s
                },
                context: function(t) {
                    return t && a && (a.data.push(t), t._ctx = a), a
                },
                suppressOverwrites: function(t) {
                    return o = t
                }
            }
        };
    pt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return bn[t] = Ke[t]
    }), xe.add(Be.updateRoot), f = bn.to({}, {
        duration: 0
    });
    var Dn = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        wn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, i) {
                    i._onInit = function(t) {
                        var i, r;
                        if (A(n) && (i = {}, pt(n, function(t) {
                                return i[t] = 1
                            }), n = i), e) {
                            for (r in i = {}, n) i[r] = e(n[r]);
                            n = i
                        }! function(t, e) {
                            var n, i, r, o = t._targets;
                            for (n in e)
                                for (i = o.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = Dn(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n))
                        }(t, n)
                    }
                }
            }
        },
        _n = bn.registerPlugin({
            name: "attr",
            init: function(t, e, n, i, r) {
                var o, s, a;
                for (o in this.tween = n, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], i, r, 0, 0, o)).op = o, s.b = a, this._props.push(o)
            },
            render: function(t, e) {
                for (var n = e._pt; n;) s ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
            }
        }, wn("roundProps", re), wn("modifiers"), wn("snap", oe)) || bn;
    Ke.version = Be.version = _n.version = "3.12.2", d = 1, N() && Ce();
    Te.Power0, Te.Power1, Te.Power2, Te.Power3, Te.Power4, Te.Linear, Te.Quad, Te.Cubic, Te.Quart, Te.Quint, Te.Strong, Te.Elastic, Te.Back, Te.SteppedEase, Te.Bounce, Te.Sine, Te.Expo, Te.Circ
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = function() {
            this.ease = .08, this.mouseMoving = !1, this.timer = null, this.shoudDraw = !1, this.line = {
                x: {
                    value: 0,
                    target: 0
                },
                y: {
                    value: 0,
                    target: 0
                },
                width: {
                    value: 3
                },
                color: "rgba(234, 15, 50, 1)"
            }, this.border = {
                position: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                angle: {
                    start: 0,
                    end: 2 * Math.PI
                }
            }, this.circle = {
                position: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                scale: {
                    target: 30,
                    value: 30
                }
            }, this.mouse = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            }, this.setup()
        };
    o.prototype.setup = function() {
        this.draw = this.draw.bind(this), this.drawPreloader = this.drawPreloader.bind(this), this.div = document.createElement("div"), this.div.className = "cursor", document.body.appendChild(this.div), this.canvas = document.createElement("canvas"), this.canvas.className = "cursor__canvas", this.canvas.height = window.innerHeight, this.canvas.width = window.innerWidth, this.context = this.canvas.getContext("2d"), this.div.appendChild(this.canvas)
    }, o.prototype.init = function() {
        this.trail = new Array(4);
        for (var t = 0; t < 4; t++) this.trail[t] = {
            x: i.b.utils.random(-innerWidth, innerWidth),
            y: i.b.utils.random(-innerHeight, innerHeight),
            dx: 0,
            dy: 0
        };
        this.animate(), window.addEventListener("mousemove", this.onMove.bind(this)), window.addEventListener("resize", this.onResize.bind(this))
    }, o.prototype.initPreloader = function() {
        var t = this;
        this.trail = new Array(4);
        for (var e = 0; e < 4; e++) t.trail[e] = {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0
        };
        setTimeout(function() {
            t.animatePreloader()
        }, 100)
    }, o.prototype.onMove = function(t) {
        var e = this;
        this.mouseMoving = !0, clearTimeout(this.timer), this.timer = setTimeout(function() {
            e.mouseMoving = !1
        }, 100), t.stopPropagation(), this.mouse.x = t.clientX, this.mouse.y = t.clientY
    }, o.prototype.animate = function() {
        this.draw(), i.b.ticker.add(this.draw)
    }, o.prototype.animatePreloader = function() {
        this.drawPreloader(), i.b.ticker.add(this.drawPreloader)
    }, o.prototype.draw = function() {
        var t = this;
        if (this.mouseMoving) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.trail.forEach(function(e, n) {
                var i = 0 === n ? t.mouse : t.trail[n - 1];
                e.dx += .3 * (i.x - e.x) + 2 * Math.random(), e.dy += .3 * (i.y - e.y) + 2 * Math.random(), e.dx *= .5, e.dy *= .5, e.x += e.dx, e.y += e.dy
            }), this.context.beginPath(), this.context.moveTo(this.trail[0].x + 2 * Math.random(), this.trail[0].y + 2 * Math.random());
            for (var e = 0; e < this.trail.length - 1; e++) {
                var n = .5 * (t.trail[e].x + t.trail[e + 1].x + 2 * Math.random()),
                    i = .5 * (t.trail[e].y + t.trail[e + 1].y + 2 * Math.random());
                t.context.quadraticCurveTo(t.trail[e].x + 50 * Math.random() - 25, t.trail[e].y + 50 * Math.random() - 25, n, i), t.context.strokeStyle = "rgb(234, 15, 50)", t.context.lineWidth = 3, t.context.stroke()
            }
            this.context.lineTo(this.trail[this.trail.length - 1].x, this.trail[this.trail.length - 1].y), this.context.stroke()
        } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }, o.prototype.drawPreloader = function() {
        var t = this;
        if (!r.a.shoudDrawCursor) {
            this.line.x.value = this.lerp(this.line.x.value, r.a.line.x.target, .008), this.line.y.value = this.lerp(this.line.y.value, r.a.line.y.target, .008), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.trail.forEach(function(e, n) {
                var i = 0 === n ? r.a.mouseAlt : t.trail[n - 1];
                e.dx += .3 * (i.x - e.x) + 10 * Math.random() - 5, e.dy += .3 * (i.y - e.y) + 10 * Math.random() - 5, e.dx *= .5, e.dy *= .5, e.x += e.dx, e.y += e.dy
            }), this.context.beginPath();
            for (var e = 0; e < this.trail.length - 1; e++) {
                var n = .5 * (t.trail[e].x + t.trail[e + 1].x + 2 * Math.random()),
                    i = .5 * (t.trail[e].y + t.trail[e + 1].y + 2 * Math.random());
                t.context.quadraticCurveTo(t.trail[e].x + 50 * Math.random() - 25, t.trail[e].y + 50 * Math.random() - 25, n, i), t.context.strokeStyle = "rgb(234, 15, 50)", t.context.lineWidth = 3, t.context.stroke()
            }
            this.context.lineTo(this.trail[this.trail.length - 1].x, this.trail[this.trail.length - 1].y), this.context.stroke()
        }
    }, o.prototype.onResize = function(t) {
        var e = t.size;
        this.ratio = e / 10, this.canvas.height = window.innerHeight, this.canvas.width = window.innerWidth
    }, o.prototype.lerp = function(t, e, n) {
        return (1 - n) * t + n * e
    }, o.prototype.destroy = function() {
        i.b.ticker.remove(this.draw), i.b.ticker.remove(this.drawPreloader)
    }, e.a = o
}, function(t, e, n) {
    "use strict";
    var i = function() {
        this.instances = []
    };
    i.prototype.initComponents = function(t, e, n) {
        var i = this;
        void 0 === n && (n = !1), this.components = e, e.forEach(function(e, n) {
            var r = e.dataset.component,
                o = t[r];
            if ("function" == typeof o) {
                var s = new o(e, n);
                i.instances.push({
                    instance: s,
                    componentName: r,
                    i: n
                }), s.init(), i.loadingProgress(n)
            }
        })
    }, i.prototype.loadingProgress = function(t) {
        t === this.components.length - 1 && document.body.dispatchEvent(new CustomEvent("Components/ready"))
    }, i.prototype.destroyComponents = function() {
        this.instances.forEach(function(t) {
            var e = t.instance;
            "function" == typeof e.destroy && e.destroy()
        }), this.instances = [], document.body.dispatchEvent(new CustomEvent("Components/destroyed"))
    }, e.a = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(21),
        r = n(25),
        o = n(27),
        s = n(30),
        a = n(31),
        l = n(32),
        u = n(33),
        c = n(34),
        h = n(35),
        d = n(36),
        p = n(37),
        f = n(38),
        m = n(39),
        g = n(40),
        v = n(41),
        y = n(42),
        b = n(46),
        D = n(47),
        w = n(48);
    n.d(e, "AOTW", function() {
        return i.a
    }), n.d(e, "BackTotop", function() {
        return r.a
    }), n.d(e, "ContentSingle", function() {
        return o.a
    }), n.d(e, "HomepageGrid", function() {
        return s.a
    }), n.d(e, "HomepageList", function() {
        return a.a
    }), n.d(e, "Grid", function() {
        return l.a
    }), n.d(e, "Labels", function() {
        return u.a
    }), n.d(e, "MOTM", function() {
        return c.a
    }), n.d(e, "MToggle", function() {
        return h.a
    }), n.d(e, "NotFound", function() {
        return d.a
    }), n.d(e, "Pin", function() {
        return p.a
    }), n.d(e, "PostCard", function() {
        return f.a
    }), n.d(e, "RPosts", function() {
        return m.a
    }), n.d(e, "SingleHeader", function() {
        return g.a
    }), n.d(e, "SiteHeader", function() {
        return v.a
    }), n.d(e, "Scribble", function() {
        return y.a
    }), n.d(e, "Genres", function() {
        return b.a
    }), n.d(e, "List", function() {
        return D.a
    }), n.d(e, "MTR", function() {
        return w.a
    })
}, function(t, e, n) {
    n(12), t.exports = n(50)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        r = n(13),
        o = n(15),
        s = n(16),
        a = n.n(s),
        l = n(17),
        u = n(8),
        c = n(9),
        h = n(10),
        d = n(49),
        p = n(0);
    i.a.routes = new r.a({
        common: o.a
    });
    var f = new a.a("HelveticaNowDisplay"),
        m = new a.a("Helvetica Monospaced W1G");
    i.a.isFirstLoad = !0, window.addEventListener("load", function() {
        document.querySelector("html").classList.add("block-ui"), document.querySelector("html").classList.add("hide-ui"), i.a.routes.loadEvents();
        var t = new Promise(function(t) {
            setTimeout(t, "development" === window.app.environment ? 1500 : 0)
        });
        Promise.all([f.load(), m.load(), t]).then(function() {
            i.a.queries = {
                xs: 0,
                sm: "(min-width: 576px)",
                md: "(min-width: 768px)",
                lg: "(min-width: 992px)",
                xl: "(min-width: 1200px)",
                xxl: "(min-width: 1600px)",
                xxxl: "(min-width: 1920px)",
                xxxxl: "(min-width: 2560px)",
                reduceMotion: "(prefers-reduced-motion: reduce)"
            };
            var t = !1;
            (p.a.matchMedia().add(i.a.queries.xl, function() {
                t = !0
            }), document.documentElement.classList.add("is-dev"), i.a.smoothScroll = new l.a, i.a.smoothScroll.init(), history.scrollRestoration && (history.scrollRestoration = "manual"), !localStorage.getItem("NDXBLaMPreloaderSeen_") && t) ? ((new d.a).init(), localStorage.setItem("NDXBLaMPreloaderSeen_", !0)) : (document.querySelector(".preloader").remove(), function() {
                i.a.valis = new c.a;
                var t = p.a.utils.toArray(document.querySelectorAll("[data-component]"));
                i.a.valis.initComponents(h, t), document.querySelector("html").classList.remove("block-ui")
            }(), (new u.a).init())
        })
    })
}, function(t, e, n) {
    "use strict";
    var i = n(14),
        r = function(t) {
            this.routes = t
        };
    r.prototype.fire = function(t, e, n) {
        void 0 === e && (e = "init"), document.dispatchEvent(new CustomEvent("routed", {
            bubbles: !0,
            detail: {
                route: t,
                fn: e
            }
        }));
        var i = "" !== t && this.routes[t] && "function" == typeof this.routes[t][e];
        i && this.routes[t][e](n)
    }, r.prototype.loadEvents = function() {
        var t = this;
        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(i.a).forEach(function(e) {
            t.fire(e), t.fire(e, "finalize")
        }), this.fire("common", "finalize")
    }, e.a = r
}, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return "" + t.charAt(0).toLowerCase() + t.replace(/[\W_]/g, "|").split("|").map(function(t) {
            return "" + t.charAt(0).toUpperCase() + t.slice(1)
        }).join("").slice(1)
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        init: function() {},
        finalize: function() {}
    }
}, function(t, e, n) {
    ! function() {
        function e(t, e) {
            document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
        }

        function n(t) {
            this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(t)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
        }

        function i(t, e) {
            t.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
        }

        function r(t) {
            var e = t.g.offsetWidth,
                n = e + 100;
            return t.j.style.width = n + "px", t.i.scrollLeft = n, t.h.scrollLeft = t.h.scrollWidth + 100, t.l !== e && (t.l = e, !0)
        }

        function o(t, n) {
            function i() {
                var t = o;
                r(t) && null !== t.g.parentNode && n(t.l)
            }
            var o = t;
            e(t.h, i), e(t.i, i), r(t)
        }

        function s(t, e, n) {
            e = e || {}, n = n || window, this.family = t, this.style = e.style || "normal", this.weight = e.weight || "normal", this.stretch = e.stretch || "normal", this.context = n
        }
        var a = null,
            l = null,
            u = null,
            c = null;

        function h(t) {
            return null === c && (c = !!t.document.fonts), c
        }

        function d(t, e) {
            var n = t.style,
                i = t.weight;
            if (null === u) {
                var r = document.createElement("div");
                try {
                    r.style.font = "condensed 100px sans-serif"
                } catch (t) {}
                u = "" !== r.style.font
            }
            return [n, i, u ? t.stretch : "", "100px", e].join(" ")
        }
        s.prototype.load = function(t, e) {
            var r = this,
                s = t || "BESbswy",
                u = 0,
                c = e || 3e3,
                p = (new Date).getTime();
            return new Promise(function(t, e) {
                if (h(r.context) && (g = r.context, null === l && (h(g) && /Apple/.test(window.navigator.vendor) ? (g = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), l = !!g && 603 > parseInt(g[1], 10)) : l = !1), !l)) {
                    var f = new Promise(function(t, e) {
                            ! function n() {
                                (new Date).getTime() - p >= c ? e(Error(c + "ms timeout exceeded")) : r.context.document.fonts.load(d(r, '"' + r.family + '"'), s).then(function(e) {
                                    1 <= e.length ? t() : setTimeout(n, 25)
                                }, e)
                            }()
                        }),
                        m = new Promise(function(t, e) {
                            u = setTimeout(function() {
                                e(Error(c + "ms timeout exceeded"))
                            }, c)
                        });
                    Promise.race([m, f]).then(function() {
                        clearTimeout(u), t(r)
                    }, e)
                } else ! function(t) {
                    document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
                        document.removeEventListener("DOMContentLoaded", e), t()
                    }) : document.attachEvent("onreadystatechange", function e() {
                        "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t())
                    })
                }(function() {
                    function l() {
                        var e;
                        (e = -1 != g && -1 != v || -1 != g && -1 != y || -1 != v && -1 != y) && ((e = g != v && g != y && v != y) || (null === a && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), a = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = a && (g == b && v == b && y == b || g == D && v == D && y == D || g == w && v == w && y == w)), e = !e), e && (null !== _.parentNode && _.parentNode.removeChild(_), clearTimeout(u), t(r))
                    }
                    var h = new n(s),
                        f = new n(s),
                        m = new n(s),
                        g = -1,
                        v = -1,
                        y = -1,
                        b = -1,
                        D = -1,
                        w = -1,
                        _ = document.createElement("div");
                    _.dir = "ltr", i(h, d(r, "sans-serif")), i(f, d(r, "serif")), i(m, d(r, "monospace")), _.appendChild(h.g), _.appendChild(f.g), _.appendChild(m.g), r.context.document.body.appendChild(_), b = h.g.offsetWidth, D = f.g.offsetWidth, w = m.g.offsetWidth,
                        function t() {
                            if ((new Date).getTime() - p >= c) null !== _.parentNode && _.parentNode.removeChild(_), e(Error(c + "ms timeout exceeded"));
                            else {
                                var n = r.context.document.hidden;
                                !0 !== n && void 0 !== n || (g = h.g.offsetWidth, v = f.g.offsetWidth, y = m.g.offsetWidth, l()), u = setTimeout(t, 50)
                            }
                        }(), o(h, function(t) {
                            g = t, l()
                        }), i(h, d(r, '"' + r.family + '",sans-serif')), o(f, function(t) {
                            v = t, l()
                        }), i(f, d(r, '"' + r.family + '",serif')), o(m, function(t) {
                            y = t, l()
                        }), i(m, d(r, '"' + r.family + '",monospace'))
                });
                var g
            })
        }, t.exports = s
    }()
}, function(t, e, n) {
    "use strict";
    var i = n(18),
        r = n(1),
        o = n(0);
    o.a.registerPlugin(r.a);
    var s = function() {
        this.lenis = new i.a({
            duration: 1.2,
            smoothWheel: !0,
            normalizeWheel: !0
        }), this.onScroll = this.onScroll.bind(this), this.onRaf = this.onRaf.bind(this)
    };
    s.prototype.init = function() {
        o.a.ticker.add(this.onRaf), this.onScroll()
    }, s.prototype.onRaf = function(t) {
        this.lenis.raf(1e3 * t)
    }, s.prototype.onScroll = function() {
        this.lenis.on("scroll", function(t) {
            t.scroll, t.limit, t.velocity, t.direction, t.progress;
            r.a.update()
        })
    }, s.prototype.pause = function() {
        this.lenis.pause()
    }, s.prototype.destroy = function() {
        this.lenis.destroy(), this.lenis.off("scroll"), o.a.ticker.remove(this.onRaf)
    }, e.a = s
}, function(t, e, n) {
    "use strict";

    function i(t, e, n) {
        return (e = l(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t) {
        "@babel/helpers - typeof";
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, l(i.key), i)
        }
    }

    function a(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function l(t) {
        var e = function(t, e) {
            if ("object" != r(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" != r(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == r(e) ? e : String(e)
    }

    function u(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }
    n.d(e, "a", function() {
        return m
    });
    var c = function() {
            function t() {
                o(this, t)
            }
            return a(t, [{
                key: "advance",
                value: function(t) {
                    var e;
                    if (this.isRunning) {
                        var n, i, r, o, s = !1;
                        if (this.lerp) this.value = (n = this.value, i = this.to, r = 60 * this.lerp, o = t, function(t, e, n) {
                            return (1 - n) * t + n * e
                        }(n, i, 1 - Math.exp(-r * o))), Math.round(this.value) === this.to && (this.value = this.to, s = !0);
                        else {
                            this.currentTime += t;
                            var a = u(0, this.currentTime / this.duration, 1),
                                l = (s = a >= 1) ? 1 : this.easing(a);
                            this.value = this.from + (this.to - this.from) * l
                        }
                        null !== (e = this.onUpdate) && void 0 !== e && e.call(this, this.value, s), s && this.stop()
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.isRunning = !1
                }
            }, {
                key: "fromTo",
                value: function(t, e, n) {
                    var i = n.lerp,
                        r = void 0 === i ? .1 : i,
                        o = n.duration,
                        s = void 0 === o ? 1 : o,
                        a = n.easing,
                        l = void 0 === a ? function(t) {
                            return t
                        } : a,
                        u = n.onStart,
                        c = n.onUpdate;
                    this.from = this.value = t, this.to = e, this.lerp = r, this.duration = s, this.easing = l, this.currentTime = 0, this.isRunning = !0, null !== u && void 0 !== u && u(), this.onUpdate = c
                }
            }]), t
        }(),
        h = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.wrapper,
                    s = n.content,
                    a = n.autoResize,
                    l = void 0 === a || a,
                    u = n.debounce,
                    c = void 0 === u ? 250 : u;
                o(this, t), i(this, "resize", function() {
                    e.onWrapperResize(), e.onContentResize()
                }), i(this, "onWrapperResize", function() {
                    e.wrapper === window ? (e.width = window.innerWidth, e.height = window.innerHeight) : (e.width = e.wrapper.clientWidth, e.height = e.wrapper.clientHeight)
                }), i(this, "onContentResize", function() {
                    e.wrapper === window ? (e.scrollHeight = e.content.scrollHeight, e.scrollWidth = e.content.scrollWidth) : (e.scrollHeight = e.wrapper.scrollHeight, e.scrollWidth = e.wrapper.scrollWidth)
                }), this.wrapper = r, this.content = s, l && (this.debouncedResize = function(t, e) {
                    var n;
                    return function() {
                        var i = arguments,
                            r = this;
                        clearTimeout(n), n = setTimeout(function() {
                            t.apply(r, i)
                        }, e)
                    }
                }(this.resize, c), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            return a(t, [{
                key: "destroy",
                value: function() {
                    var t, e;
                    null !== (t = this.wrapperResizeObserver) && void 0 !== t && t.disconnect(), null !== (e = this.contentResizeObserver) && void 0 !== e && e.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
                }
            }, {
                key: "limit",
                get: function() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            }]), t
        }(),
        d = function() {
            function t() {
                o(this, t), this.events = {}
            }
            return a(t, [{
                key: "emit",
                value: function(t) {
                    for (var e = this.events[t] || [], n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    for (var o = 0, s = e.length; o < s; o++) e[o].apply(e, i)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    var n, i = this;
                    return null !== (n = this.events[t]) && void 0 !== n && n.push(e) || (this.events[t] = [e]),
                        function() {
                            var n;
                            i.events[t] = null === (n = i.events[t]) || void 0 === n ? void 0 : n.filter(function(t) {
                                return e !== t
                            })
                        }
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var n;
                    this.events[t] = null === (n = this.events[t]) || void 0 === n ? void 0 : n.filter(function(t) {
                        return e !== t
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.events = {}
                }
            }]), t
        }(),
        p = 100 / 6,
        f = function() {
            function t(e, n) {
                var r = this,
                    s = n.wheelMultiplier,
                    a = void 0 === s ? 1 : s,
                    l = n.touchMultiplier,
                    u = void 0 === l ? 1 : l;
                o(this, t), i(this, "onTouchStart", function(t) {
                    var e = t.targetTouches ? t.targetTouches[0] : t,
                        n = e.clientX,
                        i = e.clientY;
                    r.touchStart.x = n, r.touchStart.y = i, r.lastDelta = {
                        x: 0,
                        y: 0
                    }, r.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: t
                    })
                }), i(this, "onTouchMove", function(t) {
                    var e = t.targetTouches ? t.targetTouches[0] : t,
                        n = e.clientX,
                        i = e.clientY,
                        o = -(n - r.touchStart.x) * r.touchMultiplier,
                        s = -(i - r.touchStart.y) * r.touchMultiplier;
                    r.touchStart.x = n, r.touchStart.y = i, r.lastDelta = {
                        x: o,
                        y: s
                    }, r.emitter.emit("scroll", {
                        deltaX: o,
                        deltaY: s,
                        event: t
                    })
                }), i(this, "onTouchEnd", function(t) {
                    r.emitter.emit("scroll", {
                        deltaX: r.lastDelta.x,
                        deltaY: r.lastDelta.y,
                        event: t
                    })
                }), i(this, "onWheel", function(t) {
                    var e = t.deltaX,
                        n = t.deltaY,
                        i = t.deltaMode;
                    e *= 1 === i ? p : 2 === i ? r.windowWidth : 1, n *= 1 === i ? p : 2 === i ? r.windowHeight : 1, e *= r.wheelMultiplier, n *= r.wheelMultiplier, r.emitter.emit("scroll", {
                        deltaX: e,
                        deltaY: n,
                        event: t
                    })
                }), i(this, "onWindowResize", function() {
                    r.windowWidth = window.innerWidth, r.windowHeight = window.innerHeight
                }), this.element = e, this.wheelMultiplier = a, this.touchMultiplier = u, this.touchStart = {
                    x: null,
                    y: null
                }, this.emitter = new d, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.element.addEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }), this.element.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }), this.element.addEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                })
            }
            return a(t, [{
                key: "on",
                value: function(t, e) {
                    return this.emitter.on(t, e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
            }]), t
        }(),
        m = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = n.wrapper,
                    r = void 0 === i ? window : i,
                    s = n.content,
                    a = void 0 === s ? document.documentElement : s,
                    l = n.wheelEventsTarget,
                    u = void 0 === l ? r : l,
                    p = n.eventsTarget,
                    m = void 0 === p ? u : p,
                    g = n.smoothWheel,
                    v = void 0 === g || g,
                    y = n.syncTouch,
                    b = void 0 !== y && y,
                    D = n.syncTouchLerp,
                    w = void 0 === D ? .075 : D,
                    _ = n.touchInertiaMultiplier,
                    x = void 0 === _ ? 35 : _,
                    C = n.duration,
                    T = n.easing,
                    k = void 0 === T ? function(t) {
                        return Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    } : T,
                    E = n.lerp,
                    S = void 0 === E ? !C && .1 : E,
                    A = n.infinite,
                    F = void 0 !== A && A,
                    M = n.orientation,
                    O = void 0 === M ? "vertical" : M,
                    P = n.gestureOrientation,
                    L = void 0 === P ? "vertical" : P,
                    N = n.touchMultiplier,
                    I = void 0 === N ? 1 : N,
                    j = n.wheelMultiplier,
                    B = void 0 === j ? 1 : j,
                    R = n.autoResize,
                    q = void 0 === R || R,
                    z = n.__experimental__naiveDimensions,
                    V = void 0 !== z && z;
                o(this, t), this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = function(t) {
                    var n = t.deltaX,
                        i = t.deltaY,
                        r = t.event;
                    if (!r.ctrlKey) {
                        var o = r.type.includes("touch"),
                            s = r.type.includes("wheel");
                        if (!e.options.syncTouch || !o || "touchstart" !== r.type || e.isStopped || e.isLocked) {
                            var a = 0 === n && 0 === i,
                                l = "vertical" === e.options.gestureOrientation && 0 === i || "horizontal" === e.options.gestureOrientation && 0 === n;
                            if (!a && !l) {
                                var u = r.composedPath();
                                if (!(u = u.slice(0, u.indexOf(e.rootElement))).find(function(t) {
                                        var e, n, i, r, a;
                                        return (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || o && (null === (n = t.hasAttribute) || void 0 === n ? void 0 : n.call(t, "data-lenis-prevent-touch")) || s && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (a = t.classList) || void 0 === a ? void 0 : a.contains("lenis-stopped"))
                                    }))
                                    if (e.isStopped || e.isLocked) r.preventDefault();
                                    else {
                                        if (e.isSmooth = e.options.syncTouch && o || e.options.smoothWheel && s, !e.isSmooth) return e.isScrolling = !1, void e.animate.stop();
                                        r.preventDefault();
                                        var c = i;
                                        "both" === e.options.gestureOrientation ? c = Math.abs(i) > Math.abs(n) ? i : n : "horizontal" === e.options.gestureOrientation && (c = n);
                                        var h = o && e.options.syncTouch,
                                            d = o && "touchend" === r.type && Math.abs(c) > 5;
                                        d && (c = e.velocity * e.options.touchInertiaMultiplier), e.scrollTo(e.targetScroll + c, Object.assign({
                                            programmatic: !1
                                        }, h ? {
                                            lerp: d ? e.options.syncTouchLerp : 1
                                        } : {
                                            lerp: e.options.lerp,
                                            duration: e.options.duration,
                                            easing: e.options.easing
                                        }))
                                    }
                            }
                        } else e.reset()
                    }
                }, this.onNativeScroll = function() {
                    if (!e.__preventNextScrollEvent && !e.isScrolling) {
                        var t = e.animatedScroll;
                        e.animatedScroll = e.targetScroll = e.actualScroll, e.velocity = 0, e.direction = Math.sign(e.animatedScroll - t), e.emit()
                    }
                }, window.lenisVersion = "1.0.42", r !== document.documentElement && r !== document.body || (r = window), this.options = {
                    wrapper: r,
                    content: a,
                    wheelEventsTarget: u,
                    eventsTarget: m,
                    smoothWheel: v,
                    syncTouch: b,
                    syncTouchLerp: w,
                    touchInertiaMultiplier: x,
                    duration: C,
                    easing: k,
                    lerp: S,
                    infinite: F,
                    gestureOrientation: L,
                    orientation: O,
                    touchMultiplier: I,
                    wheelMultiplier: B,
                    autoResize: q,
                    __experimental__naiveDimensions: V
                }, this.animate = new c, this.emitter = new d, this.dimensions = new h({
                    wrapper: r,
                    content: a,
                    autoResize: q
                }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = b || v, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new f(m, {
                    touchMultiplier: I,
                    wheelMultiplier: B
                }), this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            return a(t, [{
                key: "destroy",
                value: function() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    return this.emitter.on(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    return this.emitter.off(t, e)
                }
            }, {
                key: "setScroll",
                value: function(t) {
                    this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
                }
            }, {
                key: "resize",
                value: function() {
                    this.dimensions.resize()
                }
            }, {
                key: "emit",
                value: function() {
                    this.emitter.emit("scroll", this)
                }
            }, {
                key: "reset",
                value: function() {
                    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
                }
            }, {
                key: "start",
                value: function() {
                    this.isStopped && (this.isStopped = !1, this.reset())
                }
            }, {
                key: "stop",
                value: function() {
                    this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
                }
            }, {
                key: "raf",
                value: function(t) {
                    var e = t - (this.time || t);
                    this.time = t, this.animate.advance(.001 * e)
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.offset,
                        r = void 0 === i ? 0 : i,
                        o = n.immediate,
                        s = void 0 !== o && o,
                        a = n.lock,
                        l = void 0 !== a && a,
                        c = n.duration,
                        h = void 0 === c ? this.options.duration : c,
                        d = n.easing,
                        p = void 0 === d ? this.options.easing : d,
                        f = n.lerp,
                        m = void 0 === f ? !h && this.options.lerp : f,
                        g = n.onComplete,
                        v = n.force,
                        y = void 0 !== v && v,
                        b = n.programmatic,
                        D = void 0 === b || b;
                    if (!this.isStopped && !this.isLocked || y) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            var w;
                            if ("string" == typeof t ? w = document.querySelector(t) : (null == t ? void 0 : t.nodeType) && (w = t), w) {
                                if (this.options.wrapper !== window) {
                                    var _ = this.options.wrapper.getBoundingClientRect();
                                    r -= this.isHorizontal ? _.left : _.top
                                }
                                var x = w.getBoundingClientRect();
                                t = (this.isHorizontal ? x.left : x.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof t) {
                            if (t += r, t = Math.round(t), this.options.infinite ? D && (this.targetScroll = this.animatedScroll = this.scroll) : t = u(0, t, this.limit), s) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void(null == g || g(this));
                            if (!D) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: h,
                                easing: p,
                                lerp: m,
                                onStart: function() {
                                    l && (e.isLocked = !0), e.isScrolling = !0
                                },
                                onUpdate: function(t, n) {
                                    e.isScrolling = !0, e.velocity = t - e.animatedScroll, e.direction = Math.sign(e.velocity), e.animatedScroll = t, e.setScroll(e.scroll), D && (e.targetScroll = t), n || e.emit(), n && (e.reset(), e.emit(), null == g || g(e), e.__preventNextScrollEvent = !0, requestAnimationFrame(function() {
                                        delete e.__preventNextScrollEvent
                                    }))
                                }
                            })
                        }
                    }
                }
            }, {
                key: "rootElement",
                get: function() {
                    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                }
            }, {
                key: "limit",
                get: function() {
                    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                }
            }, {
                key: "isHorizontal",
                get: function() {
                    return "horizontal" === this.options.orientation
                }
            }, {
                key: "actualScroll",
                get: function() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                }
            }, {
                key: "scroll",
                get: function() {
                    return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
                    var t
                }
            }, {
                key: "progress",
                get: function() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
            }, {
                key: "isSmooth",
                get: function() {
                    return this.__isSmooth
                },
                set: function(t) {
                    this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t))
                }
            }, {
                key: "isScrolling",
                get: function() {
                    return this.__isScrolling
                },
                set: function(t) {
                    this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t))
                }
            }, {
                key: "isStopped",
                get: function() {
                    return this.__isStopped
                },
                set: function(t) {
                    this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t))
                }
            }, {
                key: "isLocked",
                get: function() {
                    return this.__isLocked
                },
                set: function(t) {
                    this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t))
                }
            }, {
                key: "className",
                get: function() {
                    var t = "lenis";
                    return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t
                }
            }, {
                key: "toggleClassName",
                value: function(t, e) {
                    this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
                }
            }]), t
        }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    n.d(e, "a", function() {
        return R
    }), n.d(e, "h", function() {
        return D
    }), n.d(e, "c", function() {
        return P
    }), n.d(e, "b", function() {
        return C
    }), n.d(e, "g", function() {
        return w
    }), n.d(e, "e", function() {
        return L
    }), n.d(e, "i", function() {
        return M
    }), n.d(e, "f", function() {
        return F
    }), n.d(e, "d", function() {
        return O
    });
    /*!
     * Observer 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var r, o, s, a, l, u, c, h, d, p, f, m, g, v = function() {
            return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
        },
        y = 1,
        b = [],
        D = [],
        w = [],
        _ = Date.now,
        x = function(t, e) {
            return e
        },
        C = function(t, e) {
            return ~w.indexOf(t) && w[w.indexOf(t) + 1][e]
        },
        T = function(t) {
            return !!~p.indexOf(t)
        },
        k = function(t, e, n, i, r) {
            return t.addEventListener(e, n, {
                passive: !i,
                capture: !!r
            })
        },
        E = function(t, e, n, i) {
            return t.removeEventListener(e, n, !!i)
        },
        S = function() {
            return f && f.isPressed || D.cache++
        },
        A = function(t, e) {
            var n = function n(i) {
                if (i || 0 === i) {
                    y && (s.history.scrollRestoration = "manual");
                    var r = f && f.isPressed;
                    i = n.v = Math.round(i) || (f && f.iOS ? 1 : 0), t(i), n.cacheID = D.cache, r && x("ss", i)
                } else(e || D.cache !== n.cacheID || x("ref")) && (n.cacheID = D.cache, n.v = t());
                return n.v + n.offset
            };
            return n.offset = 0, t && n
        },
        F = {
            s: "scrollLeft",
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: A(function(t) {
                return arguments.length ? s.scrollTo(t, M.sc()) : s.pageXOffset || a.scrollLeft || l.scrollLeft || u.scrollLeft || 0
            })
        },
        M = {
            s: "scrollTop",
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: F,
            sc: A(function(t) {
                return arguments.length ? s.scrollTo(F.sc(), t) : s.pageYOffset || a.scrollTop || l.scrollTop || u.scrollTop || 0
            })
        },
        O = function(t, e) {
            return (e && e._ctx && e._ctx.selector || r.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== r.config().nullTargetWarn ? void 0 : null)
        },
        P = function(t, e) {
            var n = e.s,
                i = e.sc;
            T(t) && (t = a.scrollingElement || l);
            var o = D.indexOf(t),
                s = i === M.sc ? 1 : 2;
            !~o && (o = D.push(t) - 1), D[o + s] || k(t, "scroll", S);
            var u = D[o + s],
                c = u || (D[o + s] = A(C(t, n), !0) || (T(t) ? i : A(function(e) {
                    return arguments.length ? t[n] = e : t[n]
                })));
            return c.target = t, u || (c.smooth = "smooth" === r.getProperty(t, "scrollBehavior")), c
        },
        L = function(t, e, n) {
            var i = t,
                r = t,
                o = _(),
                s = o,
                a = e || 50,
                l = Math.max(500, 3 * a),
                u = function(t, e) {
                    var l = _();
                    e || l - o > a ? (r = i, i = t, s = o, o = l) : n ? i += t : i = r + (t - r) / (l - s) * (o - s)
                };
            return {
                update: u,
                reset: function() {
                    r = i = n ? 0 : i, s = o = 0
                },
                getVelocity: function(t) {
                    var e = s,
                        a = r,
                        c = _();
                    return (t || 0 === t) && t !== i && u(t), o === s || c - s > l ? 0 : (i + (n ? a : -a)) / ((n ? c : o) - e) * 1e3
                }
            }
        },
        N = function(t, e) {
            return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        I = function(t) {
            var e = Math.max.apply(Math, t),
                n = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(n) ? e : n
        },
        j = function() {
            var t, e, n, i;
            (d = r.core.globals().ScrollTrigger) && d.core && (t = d.core, e = t.bridge || {}, n = t._scrollers, i = t._proxies, n.push.apply(n, D), i.push.apply(i, w), D = n, w = i, x = function(t, n) {
                return e[t](n)
            })
        },
        B = function(t) {
            return (r = t || v()) && "undefined" != typeof document && document.body && (s = window, a = document, l = a.documentElement, u = a.body, p = [s, a, l, u], r.utils.clamp, g = r.core.context || function() {}, h = "onpointerenter" in u ? "pointer" : "mouse", c = R.isTouch = s.matchMedia && s.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in s || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = R.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                return y = 0
            }, 500), j(), o = 1), o
        };
    F.op = M, D.cache = 0;
    var R = function() {
        function t(t) {
            this.init(t)
        }
        var e, n, p;
        return t.prototype.init = function(t) {
            o || B(r), d || j();
            var e = t.tolerance,
                n = t.dragMinimum,
                i = t.type,
                p = t.target,
                v = t.lineHeight,
                y = t.debounce,
                D = t.preventDefault,
                w = t.onStop,
                x = t.onStopDelay,
                C = t.ignore,
                A = t.wheelSpeed,
                R = t.event,
                q = t.onDragStart,
                z = t.onDragEnd,
                V = t.onDrag,
                H = t.onPress,
                W = t.onRelease,
                X = t.onRight,
                Y = t.onLeft,
                U = t.onUp,
                K = t.onDown,
                G = t.onChangeX,
                Q = t.onChangeY,
                $ = t.onChange,
                J = t.onToggleX,
                Z = t.onToggleY,
                tt = t.onHover,
                et = t.onHoverEnd,
                nt = t.onMove,
                it = t.ignoreCheck,
                rt = t.isNormalizer,
                ot = t.onGestureStart,
                st = t.onGestureEnd,
                at = t.onWheel,
                lt = t.onEnable,
                ut = t.onDisable,
                ct = t.onClick,
                ht = t.scrollSpeed,
                dt = t.capture,
                pt = t.allowClicks,
                ft = t.lockAxis,
                mt = t.onLockAxis;
            this.target = p = O(p) || l, this.vars = t, C && (C = r.utils.toArray(C)), e = e || 1e-9, n = n || 0, A = A || 1, ht = ht || 1, i = i || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(s.getComputedStyle(u).lineHeight) || 22);
            var gt, vt, yt, bt, Dt, wt, _t, xt = this,
                Ct = 0,
                Tt = 0,
                kt = P(p, F),
                Et = P(p, M),
                St = kt(),
                At = Et(),
                Ft = ~i.indexOf("touch") && !~i.indexOf("pointer") && "pointerdown" === m[0],
                Mt = T(p),
                Ot = p.ownerDocument || a,
                Pt = [0, 0, 0],
                Lt = [0, 0, 0],
                Nt = 0,
                It = function() {
                    return Nt = _()
                },
                jt = function(t, e) {
                    return (xt.event = t) && C && ~C.indexOf(t.target) || e && Ft && "touch" !== t.pointerType || it && it(t, e)
                },
                Bt = function() {
                    var t = xt.deltaX = I(Pt),
                        n = xt.deltaY = I(Lt),
                        i = Math.abs(t) >= e,
                        r = Math.abs(n) >= e;
                    $ && (i || r) && $(xt, t, n, Pt, Lt), i && (X && xt.deltaX > 0 && X(xt), Y && xt.deltaX < 0 && Y(xt), G && G(xt), J && xt.deltaX < 0 != Ct < 0 && J(xt), Ct = xt.deltaX, Pt[0] = Pt[1] = Pt[2] = 0), r && (K && xt.deltaY > 0 && K(xt), U && xt.deltaY < 0 && U(xt), Q && Q(xt), Z && xt.deltaY < 0 != Tt < 0 && Z(xt), Tt = xt.deltaY, Lt[0] = Lt[1] = Lt[2] = 0), (bt || yt) && (nt && nt(xt), yt && (V(xt), yt = !1), bt = !1), wt && !(wt = !1) && mt && mt(xt), Dt && (at(xt), Dt = !1), gt = 0
                },
                Rt = function(t, e, n) {
                    Pt[n] += t, Lt[n] += e, xt._vx.update(t), xt._vy.update(e), y ? gt || (gt = requestAnimationFrame(Bt)) : Bt()
                },
                qt = function(t, e) {
                    ft && !_t && (xt.axis = _t = Math.abs(t) > Math.abs(e) ? "x" : "y", wt = !0), "y" !== _t && (Pt[2] += t, xt._vx.update(t, !0)), "x" !== _t && (Lt[2] += e, xt._vy.update(e, !0)), y ? gt || (gt = requestAnimationFrame(Bt)) : Bt()
                },
                zt = function(t) {
                    if (!jt(t, 1)) {
                        var e = (t = N(t, D)).clientX,
                            i = t.clientY,
                            r = e - xt.x,
                            o = i - xt.y,
                            s = xt.isDragging;
                        xt.x = e, xt.y = i, (s || Math.abs(xt.startX - e) >= n || Math.abs(xt.startY - i) >= n) && (V && (yt = !0), s || (xt.isDragging = !0), qt(r, o), s || q && q(xt))
                    }
                },
                Vt = xt.onPress = function(t) {
                    jt(t, 1) || t && t.button || (xt.axis = _t = null, vt.pause(), xt.isPressed = !0, t = N(t), Ct = Tt = 0, xt.startX = xt.x = t.clientX, xt.startY = xt.y = t.clientY, xt._vx.reset(), xt._vy.reset(), k(rt ? p : Ot, m[1], zt, D, !0), xt.deltaX = xt.deltaY = 0, H && H(xt))
                },
                Ht = xt.onRelease = function(t) {
                    if (!jt(t, 1)) {
                        E(rt ? p : Ot, m[1], zt, !0);
                        var e = !isNaN(xt.y - xt.startY),
                            n = xt.isDragging && (Math.abs(xt.x - xt.startX) > 3 || Math.abs(xt.y - xt.startY) > 3),
                            i = N(t);
                        !n && e && (xt._vx.reset(), xt._vy.reset(), D && pt && r.delayedCall(.08, function() {
                            if (_() - Nt > 300 && !t.defaultPrevented)
                                if (t.target.click) t.target.click();
                                else if (Ot.createEvent) {
                                var e = Ot.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, s, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                            }
                        })), xt.isDragging = xt.isGesturing = xt.isPressed = !1, w && !rt && vt.restart(!0), z && n && z(xt), W && W(xt, n)
                    }
                },
                Wt = function(t) {
                    return t.touches && t.touches.length > 1 && (xt.isGesturing = !0) && ot(t, xt.isDragging)
                },
                Xt = function() {
                    return (xt.isGesturing = !1) || st(xt)
                },
                Yt = function(t) {
                    if (!jt(t)) {
                        var e = kt(),
                            n = Et();
                        Rt((e - St) * ht, (n - At) * ht, 1), St = e, At = n, w && vt.restart(!0)
                    }
                },
                Ut = function(t) {
                    if (!jt(t)) {
                        t = N(t, D), at && (Dt = !0);
                        var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? s.innerHeight : 1) * A;
                        Rt(t.deltaX * e, t.deltaY * e, 0), w && !rt && vt.restart(!0)
                    }
                },
                Kt = function(t) {
                    if (!jt(t)) {
                        var e = t.clientX,
                            n = t.clientY,
                            i = e - xt.x,
                            r = n - xt.y;
                        xt.x = e, xt.y = n, bt = !0, (i || r) && qt(i, r)
                    }
                },
                Gt = function(t) {
                    xt.event = t, tt(xt)
                },
                Qt = function(t) {
                    xt.event = t, et(xt)
                },
                $t = function(t) {
                    return jt(t) || N(t, D) && ct(xt)
                };
            vt = xt._dc = r.delayedCall(x || .25, function() {
                xt._vx.reset(), xt._vy.reset(), vt.pause(), w && w(xt)
            }).pause(), xt.deltaX = xt.deltaY = 0, xt._vx = L(0, 50, !0), xt._vy = L(0, 50, !0), xt.scrollX = kt, xt.scrollY = Et, xt.isDragging = xt.isGesturing = xt.isPressed = !1, g(this), xt.enable = function(t) {
                return xt.isEnabled || (k(Mt ? Ot : p, "scroll", S), i.indexOf("scroll") >= 0 && k(Mt ? Ot : p, "scroll", Yt, D, dt), i.indexOf("wheel") >= 0 && k(p, "wheel", Ut, D, dt), (i.indexOf("touch") >= 0 && c || i.indexOf("pointer") >= 0) && (k(p, m[0], Vt, D, dt), k(Ot, m[2], Ht), k(Ot, m[3], Ht), pt && k(p, "click", It, !1, !0), ct && k(p, "click", $t), ot && k(Ot, "gesturestart", Wt), st && k(Ot, "gestureend", Xt), tt && k(p, h + "enter", Gt), et && k(p, h + "leave", Qt), nt && k(p, h + "move", Kt)), xt.isEnabled = !0, t && t.type && Vt(t), lt && lt(xt)), xt
            }, xt.disable = function() {
                xt.isEnabled && (b.filter(function(t) {
                    return t !== xt && T(t.target)
                }).length || E(Mt ? Ot : p, "scroll", S), xt.isPressed && (xt._vx.reset(), xt._vy.reset(), E(rt ? p : Ot, m[1], zt, !0)), E(Mt ? Ot : p, "scroll", Yt, dt), E(p, "wheel", Ut, dt), E(p, m[0], Vt, dt), E(Ot, m[2], Ht), E(Ot, m[3], Ht), E(p, "click", It, !0), E(p, "click", $t), E(Ot, "gesturestart", Wt), E(Ot, "gestureend", Xt), E(p, h + "enter", Gt), E(p, h + "leave", Qt), E(p, h + "move", Kt), xt.isEnabled = xt.isPressed = xt.isDragging = !1, ut && ut(xt))
            }, xt.kill = xt.revert = function() {
                xt.disable();
                var t = b.indexOf(xt);
                t >= 0 && b.splice(t, 1), f === xt && (f = 0)
            }, b.push(xt), rt && T(p) && (f = xt), xt.enable(R)
        }, e = t, (n = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]) && i(e.prototype, n), p && i(e, p), t
    }();
    R.version = "3.12.2", R.create = function(t) {
        return new R(t)
    }, R.register = B, R.getAll = function() {
        return b.slice()
    }, R.getById = function(t) {
        return b.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, v() && r.registerPlugin(R)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return Dt
    });
    var i, r, o, s, a, l, u, c, h = n(7),
        d = {},
        p = 180 / Math.PI,
        f = Math.PI / 180,
        m = Math.atan2,
        g = /([A-Z])/g,
        v = /(left|right|width|margin|padding|x)/i,
        y = /[\s,\(]\S/,
        b = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        D = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        w = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        _ = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        x = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        C = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        T = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        k = function(t, e, n) {
            return t.style[e] = n
        },
        E = function(t, e, n) {
            return t.style.setProperty(e, n)
        },
        S = function(t, e, n) {
            return t._gsap[e] = n
        },
        A = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        F = function(t, e, n, i, r) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(r, o)
        },
        M = function(t, e, n, i, r) {
            var o = t._gsap;
            o[e] = n, o.renderTransform(r, o)
        },
        O = "transform",
        P = O + "Origin",
        L = function t(e, n) {
            var i = this,
                r = this.target,
                o = r.style;
            if (e in d && o) {
                if (this.tfm = this.tfm || {}, "transform" === e) return b.transform.split(",").forEach(function(e) {
                    return t.call(i, e, n)
                });
                if (~(e = b[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return i.tfm[t] = J(r, t)
                    }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : J(r, e), this.props.indexOf(O) >= 0) return;
                r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(P, n, "")), e = O
            }(o || n) && this.props.push(e, n, o[e])
        },
        N = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        I = function() {
            var t, e, n = this.props,
                i = this.target,
                r = i.style,
                o = i._gsap;
            for (t = 0; t < n.length; t += 3) n[t + 1] ? i[n[t]] = n[t + 2] : n[t + 2] ? r[n[t]] = n[t + 2] : r.removeProperty("--" === n[t].substr(0, 2) ? n[t] : n[t].replace(g, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) o[e] = this.tfm[e];
                o.svg && (o.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = u()) && t.isStart || r[O] || (N(r), o.uncache = 1)
            }
        },
        j = function(t, e) {
            var n = {
                target: t,
                props: [],
                revert: I,
                save: L
            };
            return t._gsap || h.y.core.getCache(t), e && e.split(",").forEach(function(t) {
                return n.save(t)
            }), n
        },
        B = function(t, e) {
            var n = r.createElementNS ? r.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : r.createElement(t);
            return n.style ? n : r.createElement(t)
        },
        R = function t(e, n, i) {
            var r = getComputedStyle(e);
            return r[n] || r.getPropertyValue(n.replace(g, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, z(n) || n, 1) || ""
        },
        q = "O,Moz,ms,Ms,Webkit".split(","),
        z = function(t, e, n) {
            var i = (e || a).style,
                r = 5;
            if (t in i && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(q[r] + t in i););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? q[r] : "") + t
        },
        V = function() {
            "undefined" != typeof window && window.document && (i = window, r = i.document, o = r.documentElement, a = B("div") || {
                style: {}
            }, B("div"), O = z(O), P = O + "Origin", a.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", c = !!z("perspective"), u = h.y.core.reverting, s = 1)
        },
        H = function t(e) {
            var n, i = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                s = this.nextSibling,
                a = this.style.cssText;
            if (o.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), o.removeChild(i), this.style.cssText = a, n
        },
        W = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        X = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = H.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === H || (e = H.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +W(t, ["x", "cx", "x1"]) || 0,
                y: +W(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Y = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !X(t))
        },
        U = function(t, e) {
            if (e) {
                var n = t.style;
                e in d && e !== P && (e = O), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(g, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        K = function(t, e, n, i, r, o) {
            var s = new h.b(t._pt, e, n, 0, 1, o ? T : C);
            return t._pt = s, s.b = i, s.e = r, t._props.push(n), s
        },
        G = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Q = {
            grid: 1,
            flex: 1
        },
        $ = function t(e, n, i, o) {
            var s, l, u, c, p = parseFloat(i) || 0,
                f = (i + "").trim().substr((p + "").length) || "px",
                m = a.style,
                g = v.test(n),
                y = "svg" === e.tagName.toLowerCase(),
                b = (y ? "client" : "offset") + (g ? "Width" : "Height"),
                D = "px" === o,
                w = "%" === o;
            return o === f || !p || G[o] || G[f] ? p : ("px" !== f && !D && (p = t(e, n, i, "px")), c = e.getCTM && Y(e), !w && "%" !== f || !d[n] && !~n.indexOf("adius") ? (m[g ? "width" : "height"] = 100 + (D ? f : o), l = ~n.indexOf("adius") || "em" === o && e.appendChild && !y ? e : e.parentNode, c && (l = (e.ownerSVGElement || {}).parentNode), l && l !== r && l.appendChild || (l = r.body), (u = l._gsap) && w && u.width && g && u.time === h.w.time && !u.uncache ? Object(h.u)(p / u.width * 100) : ((w || "%" === f) && !Q[R(l, "display")] && (m.position = R(e, "position")), l === e && (m.position = "static"), l.appendChild(a), s = a[b], l.removeChild(a), m.position = "absolute", g && w && ((u = Object(h.h)(l)).time = h.w.time, u.width = l[b]), Object(h.u)(D ? s * p / 100 : s && p ? 100 / s * p : 0))) : (s = c ? e.getBBox()[g ? "width" : "height"] : e[b], Object(h.u)(w ? p / s * 100 : p / 100 * s)))
        },
        J = function(t, e, n, i) {
            var r;
            return s || V(), e in b && "transform" !== e && ~(e = b[e]).indexOf(",") && (e = e.split(",")[0]), d[e] && "transform" !== e ? (r = ut(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : ct(R(t, P)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = nt[e] && nt[e](t, e, n) || R(t, e) || Object(h.i)(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? $(t, e, r, n) + n : r
        },
        Z = function(t, e, n, i) {
            if (!n || "none" === n) {
                var r = z(e, t, 1),
                    o = r && R(t, r, 1);
                o && o !== n ? (e = r, n = o) : "borderColor" === e && (n = R(t, "borderTopColor"))
            }
            var s, a, l, u, c, d, p, f, m, g, v, y = new h.b(this._pt, t.style, e, 0, 1, h.s),
                b = 0,
                D = 0;
            if (y.b = n, y.e = i, n += "", "auto" === (i += "") && (t.style[e] = i, i = R(t, e) || i, t.style[e] = n), s = [n, i], Object(h.e)(s), i = s[1], l = (n = s[0]).match(h.o) || [], (i.match(h.o) || []).length) {
                for (; a = h.o.exec(i);) p = a[0], m = i.substring(b, a.index), c ? c = (c + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (c = 1), p !== (d = l[D++] || "") && (u = parseFloat(d) || 0, v = d.substr((u + "").length), "=" === p.charAt(1) && (p = Object(h.p)(u, p) + v), f = parseFloat(p), g = p.substr((f + "").length), b = h.o.lastIndex - g.length, g || (g = g || h.f.units[e] || v, b === i.length && (i += g, y.e += g)), v !== g && (u = $(t, e, d, g) || 0), y._pt = {
                    _next: y._pt,
                    p: m || 1 === D ? m : ",",
                    s: u,
                    c: f - u,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                y.c = b < i.length ? i.substring(b, i.length) : ""
            } else y.r = "display" === e && "none" === i ? T : C;
            return h.r.test(i) && (y.e = 0), this._pt = y, y
        },
        tt = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        et = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, i, r, o = e.t,
                    s = o.style,
                    a = e.u,
                    l = o._gsap;
                if ("all" === a || !0 === a) s.cssText = "", i = 1;
                else
                    for (r = (a = a.split(",")).length; --r > -1;) n = a[r], d[n] && (i = 1, n = "transformOrigin" === n ? P : O), U(o, n);
                i && (U(o, O), l && (l.svg && o.removeAttribute("transform"), ut(o, 1), l.uncache = 1, N(s)))
            }
        },
        nt = {
            clearProps: function(t, e, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var o = t._pt = new h.b(t._pt, e, n, 0, 0, et);
                    return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
                }
            }
        },
        it = [1, 0, 0, 1, 0, 0],
        rt = {},
        ot = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        st = function(t) {
            var e = R(t, O);
            return ot(e) ? it : e.substr(7).match(h.n).map(h.u)
        },
        at = function(t, e) {
            var n, i, r, s, a = t._gsap || Object(h.h)(t),
                l = t.style,
                u = st(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? it : u : (u !== it || t.offsetParent || t === o || a.svg || (r = l.display, l.display = "block", (n = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, o.appendChild(t)), u = st(t), r ? l.display = r : U(t, "display"), s && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : o.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        lt = function(t, e, n, i, r, o) {
            var s, a, l, u = t._gsap,
                c = r || at(t, !0),
                h = u.xOrigin || 0,
                d = u.yOrigin || 0,
                p = u.xOffset || 0,
                f = u.yOffset || 0,
                m = c[0],
                g = c[1],
                v = c[2],
                y = c[3],
                b = c[4],
                D = c[5],
                w = e.split(" "),
                _ = parseFloat(w[0]) || 0,
                x = parseFloat(w[1]) || 0;
            n ? c !== it && (a = m * y - g * v) && (l = _ * (-g / a) + x * (m / a) - (m * D - g * b) / a, _ = _ * (y / a) + x * (-v / a) + (v * D - y * b) / a, x = l) : (_ = (s = X(t)).x + (~w[0].indexOf("%") ? _ / 100 * s.width : _), x = s.y + (~(w[1] || w[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && u.smooth ? (b = _ - h, D = x - d, u.xOffset = p + (b * m + D * v) - b, u.yOffset = f + (b * g + D * y) - D) : u.xOffset = u.yOffset = 0, u.xOrigin = _, u.yOrigin = x, u.smooth = !!i, u.origin = e, u.originIsAbsolute = !!n, t.style[P] = "0px 0px", o && (K(o, u, "xOrigin", h, _), K(o, u, "yOrigin", d, x), K(o, u, "xOffset", p, u.xOffset), K(o, u, "yOffset", f, u.yOffset)), t.setAttribute("data-svg-origin", _ + " " + x)
        },
        ut = function(t, e) {
            var n = t._gsap || new h.a(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i, r, o, s, a, l, u, d, g, v, y, b, D, w, _, x, C, T, k, E, S, A, F, M, L, N, I, j, B, q, z, V, H = t.style,
                W = n.scaleX < 0,
                X = getComputedStyle(t),
                U = R(t, P) || "0";
            return i = r = o = l = u = d = g = v = y = 0, s = a = 1, n.svg = !(!t.getCTM || !Y(t)), X.translate && ("none" === X.translate && "none" === X.scale && "none" === X.rotate || (H[O] = ("none" !== X.translate ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") + ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") + ("none" !== X[O] ? X[O] : "")), H.scale = H.rotate = H.translate = "none"), w = at(t, n.svg), n.svg && (n.uncache ? (L = t.getBBox(), U = n.xOrigin - L.x + "px " + (n.yOrigin - L.y) + "px", M = "") : M = !e && t.getAttribute("data-svg-origin"), lt(t, M || U, !!M || n.originIsAbsolute, !1 !== n.smooth, w)), b = n.xOrigin || 0, D = n.yOrigin || 0, w !== it && (T = w[0], k = w[1], E = w[2], S = w[3], i = A = w[4], r = F = w[5], 6 === w.length ? (s = Math.sqrt(T * T + k * k), a = Math.sqrt(S * S + E * E), l = T || k ? m(k, T) * p : 0, (g = E || S ? m(E, S) * p + l : 0) && (a *= Math.abs(Math.cos(g * f))), n.svg && (i -= b - (b * T + D * E), r -= D - (b * k + D * S))) : (V = w[6], q = w[7], I = w[8], j = w[9], B = w[10], z = w[11], i = w[12], r = w[13], o = w[14], u = (_ = m(V, B)) * p, _ && (M = A * (x = Math.cos(-_)) + I * (C = Math.sin(-_)), L = F * x + j * C, N = V * x + B * C, I = A * -C + I * x, j = F * -C + j * x, B = V * -C + B * x, z = q * -C + z * x, A = M, F = L, V = N), d = (_ = m(-E, B)) * p, _ && (x = Math.cos(-_), z = S * (C = Math.sin(-_)) + z * x, T = M = T * x - I * C, k = L = k * x - j * C, E = N = E * x - B * C), l = (_ = m(k, T)) * p, _ && (M = T * (x = Math.cos(_)) + k * (C = Math.sin(_)), L = A * x + F * C, k = k * x - T * C, F = F * x - A * C, T = M, A = L), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, d = 180 - d), s = Object(h.u)(Math.sqrt(T * T + k * k + E * E)), a = Object(h.u)(Math.sqrt(F * F + V * V)), _ = m(A, F), g = Math.abs(_) > 2e-4 ? _ * p : 0, y = z ? 1 / (z < 0 ? -z : z) : 0), n.svg && (M = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !ot(R(t, O)), M && t.setAttribute("transform", M))), Math.abs(g) > 90 && Math.abs(g) < 270 && (W ? (s *= -1, g += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, g += g <= 0 ? 180 : -180)), e = e || n.uncache, n.x = i - ((n.xPercent = i && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = r - ((n.yPercent = r && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = Object(h.u)(s), n.scaleY = Object(h.u)(a), n.rotation = Object(h.u)(l) + "deg", n.rotationX = Object(h.u)(u) + "deg", n.rotationY = Object(h.u)(d) + "deg", n.skewX = g + "deg", n.skewY = v + "deg", n.transformPerspective = y + "px", (n.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (H[P] = ct(U)), n.xOffset = n.yOffset = 0, n.force3D = h.f.force3D, n.renderTransform = n.svg ? ft : c ? pt : dt, n.uncache = 0, n
        },
        ct = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        ht = function(t, e, n) {
            var i = Object(h.x)(e);
            return Object(h.u)(parseFloat(e) + parseFloat($(t, "x", n + "px", i))) + i
        },
        dt = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, pt(t, e)
        },
        pt = function(t, e) {
            var n = e || this,
                i = n.xPercent,
                r = n.yPercent,
                o = n.x,
                s = n.y,
                a = n.z,
                l = n.rotation,
                u = n.rotationY,
                c = n.rotationX,
                h = n.skewX,
                d = n.skewY,
                p = n.scaleX,
                m = n.scaleY,
                g = n.transformPerspective,
                v = n.force3D,
                y = n.target,
                b = n.zOrigin,
                D = "",
                w = "auto" === v && t && 1 !== t || !0 === v;
            if (b && ("0deg" !== c || "0deg" !== u)) {
                var _, x = parseFloat(u) * f,
                    C = Math.sin(x),
                    T = Math.cos(x);
                x = parseFloat(c) * f, _ = Math.cos(x), o = ht(y, o, C * _ * -b), s = ht(y, s, -Math.sin(x) * -b), a = ht(y, a, T * _ * -b + b)
            }
            "0px" !== g && (D += "perspective(" + g + ") "), (i || r) && (D += "translate(" + i + "%, " + r + "%) "), (w || "0px" !== o || "0px" !== s || "0px" !== a) && (D += "0px" !== a || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== l && (D += "rotate(" + l + ") "), "0deg" !== u && (D += "rotateY(" + u + ") "), "0deg" !== c && (D += "rotateX(" + c + ") "), "0deg" === h && "0deg" === d || (D += "skew(" + h + ", " + d + ") "), 1 === p && 1 === m || (D += "scale(" + p + ", " + m + ") "), y.style[O] = D || "translate(0, 0)"
        },
        ft = function(t, e) {
            var n, i, r, o, s, a = e || this,
                l = a.xPercent,
                u = a.yPercent,
                c = a.x,
                d = a.y,
                p = a.rotation,
                m = a.skewX,
                g = a.skewY,
                v = a.scaleX,
                y = a.scaleY,
                b = a.target,
                D = a.xOrigin,
                w = a.yOrigin,
                _ = a.xOffset,
                x = a.yOffset,
                C = a.forceCSS,
                T = parseFloat(c),
                k = parseFloat(d);
            p = parseFloat(p), m = parseFloat(m), (g = parseFloat(g)) && (m += g = parseFloat(g), p += g), p || m ? (p *= f, m *= f, n = Math.cos(p) * v, i = Math.sin(p) * v, r = Math.sin(p - m) * -y, o = Math.cos(p - m) * y, m && (g *= f, s = Math.tan(m - g), r *= s = Math.sqrt(1 + s * s), o *= s, g && (s = Math.tan(g), n *= s = Math.sqrt(1 + s * s), i *= s)), n = Object(h.u)(n), i = Object(h.u)(i), r = Object(h.u)(r), o = Object(h.u)(o)) : (n = v, o = y, i = r = 0), (T && !~(c + "").indexOf("px") || k && !~(d + "").indexOf("px")) && (T = $(b, "x", c, "px"), k = $(b, "y", d, "px")), (D || w || _ || x) && (T = Object(h.u)(T + D - (D * n + w * r) + _), k = Object(h.u)(k + w - (D * i + w * o) + x)), (l || u) && (s = b.getBBox(), T = Object(h.u)(T + l / 100 * s.width), k = Object(h.u)(k + u / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + o + "," + T + "," + k + ")", b.setAttribute("transform", s), C && (b.style[O] = s)
        },
        mt = function(t, e, n, i, r) {
            var o, s, a = Object(h.k)(r),
                l = parseFloat(r) * (a && ~r.indexOf("rad") ? p : 1) - i,
                u = i + l + "deg";
            return a && ("short" === (o = r.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360), "cw" === o && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === o && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = s = new h.b(t._pt, e, n, i, l, w), s.e = u, s.u = "deg", t._props.push(n), s
        },
        gt = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        vt = function(t, e, n) {
            var i, r, o, s, a, l, u, c = gt({}, n._gsap),
                p = n.style;
            for (r in c.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), p[O] = e, i = ut(n, 1), U(n, O), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[O], p[O] = e, i = ut(n, 1), p[O] = o), d)(o = c[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Object(h.x)(o) !== (u = Object(h.x)(s)) ? $(n, r, o, u) : parseFloat(o), l = parseFloat(s), t._pt = new h.b(t._pt, i, r, a, l - a, D), t._pt.u = u || 0, t._props.push(r));
            gt(i, c)
        };
    /*!
     * CSSPlugin 3.12.2
     * https://greensock.com
     *
     * Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Object(h.g)("padding,margin,Width,Radius", function(t, e) {
        var n = "Top",
            i = "Right",
            r = "Bottom",
            o = "Left",
            s = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function(n) {
                return e < 2 ? t + n : "border" + n + t
            });
        nt[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
            var o, a;
            if (arguments.length < 4) return o = s.map(function(e) {
                return J(t, e, n)
            }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (i + "").split(" "), a = {}, s.forEach(function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }), t.init(e, a, r)
        }
    });
    var yt, bt, Dt = {
        name: "css",
        register: V,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, i, r) {
            var o, a, l, u, c, p, f, m, g, v, w, C, T, k, E, S, A, F, M, L, N = this._props,
                I = t.style,
                B = n.vars.startAt;
            for (f in s || V(), this.styles = this.styles || j(t), S = this.styles.props, this.tween = n, e)
                if ("autoRound" !== f && (a = e[f], !h.q[f] || !Object(h.c)(f, e, n, i, t, r)))
                    if (c = typeof a, p = nt[f], "function" === c && (c = typeof(a = a.call(n, i, t, r))), "string" === c && ~a.indexOf("random(") && (a = Object(h.t)(a)), p) p(this, t, f, a, n) && (E = 1);
                    else if ("--" === f.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", h.d.lastIndex = 0, h.d.test(o) || (m = Object(h.x)(o), g = Object(h.x)(a)), g ? m !== g && (o = $(t, f, o, g) + g) : m && (a += m), this.add(I, "setProperty", o, a, i, r, 0, 0, f), N.push(f), S.push(f, 0, I[f]);
            else if ("undefined" !== c) {
                if (B && f in B ? (o = "function" == typeof B[f] ? B[f].call(n, i, t, r) : B[f], Object(h.k)(o) && ~o.indexOf("random(") && (o = Object(h.t)(o)), Object(h.x)(o + "") || (o += h.f.units[f] || Object(h.x)(J(t, f)) || ""), "=" === (o + "").charAt(1) && (o = J(t, f))) : o = J(t, f), u = parseFloat(o), (v = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), l = parseFloat(a), f in b && ("autoAlpha" === f && (1 === u && "hidden" === J(t, "visibility") && l && (u = 0), S.push("visibility", 0, I.visibility), K(this, I, "visibility", u ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== f && "transform" !== f && ~(f = b[f]).indexOf(",") && (f = f.split(",")[0])), w = f in d)
                    if (this.styles.save(f), C || ((T = t._gsap).renderTransform && !e.parseTransform || ut(t, e.parseTransform), k = !1 !== e.smoothOrigin && T.smooth, (C = this._pt = new h.b(this._pt, I, O, 0, 1, T.renderTransform, T, 0, -1)).dep = 1), "scale" === f) this._pt = new h.b(this._pt, T, "scaleY", T.scaleY, (v ? Object(h.p)(T.scaleY, v + l) : l) - T.scaleY || 0, D), this._pt.u = 0, N.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            S.push(P, 0, I[P]), F = void 0, M = void 0, L = void 0, F = (A = a).split(" "), M = F[0], L = F[1] || "50%", "top" !== M && "bottom" !== M && "left" !== L && "right" !== L || (A = M, M = L, L = A), F[0] = tt[M] || M, F[1] = tt[L] || L, a = F.join(" "), T.svg ? lt(t, a, 0, k, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== T.zOrigin && K(this, T, "zOrigin", T.zOrigin, g), K(this, I, f, ct(o), ct(a)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            lt(t, a, 1, k, 0, this);
                            continue
                        }
                        if (f in rt) {
                            mt(this, T, f, u, v ? Object(h.p)(u, v + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            K(this, T, "smooth", T.smooth, a);
                            continue
                        }
                        if ("force3D" === f) {
                            T[f] = a;
                            continue
                        }
                        if ("transform" === f) {
                            vt(this, a, t);
                            continue
                        }
                    }
                else f in I || (f = z(f) || f);
                if (w || (l || 0 === l) && (u || 0 === u) && !y.test(a) && f in I) m = (o + "").substr((u + "").length), l || (l = 0), m !== (g = Object(h.x)(a) || (f in h.f.units ? h.f.units[f] : m)) && (u = $(t, f, o, g)), this._pt = new h.b(this._pt, w ? T : I, f, u, (v ? Object(h.p)(u, v + l) : l) - u, w || "px" !== g && "zIndex" !== f || !1 === e.autoRound ? D : x), this._pt.u = g || 0, m !== g && "%" !== g && (this._pt.b = o, this._pt.r = _);
                else if (f in I) Z.call(this, t, f, o, v ? v + a : a);
                else if (f in t) this.add(t, f, o || t[f], v ? v + a : a, i, r);
                else if ("parseTransform" !== f) {
                    Object(h.m)(f, a);
                    continue
                }
                w || (f in I ? S.push(f, 0, I[f]) : S.push(f, 1, o || t[f])), N.push(f)
            }
            E && Object(h.v)(this)
        },
        render: function(t, e) {
            if (e.tween._time || !u())
                for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
            else e.styles.revert()
        },
        get: J,
        aliases: b,
        getSetter: function(t, e, n) {
            var i = b[e];
            return i && i.indexOf(",") < 0 && (e = i), e in d && e !== P && (t._gsap.x || J(t, "x")) ? n && l === n ? "scale" === e ? A : S : (l = n || {}) && ("scale" === e ? F : M) : t.style && !Object(h.l)(t.style[e]) ? k : ~e.indexOf("-") ? E : Object(h.j)(t, e)
        },
        core: {
            _removeProperty: U,
            _getMatrix: at
        }
    };
    h.y.utils.checkPrefix = z, h.y.core.getStyleSaver = j, yt = "rotation,rotationX,rotationY,skewX,skewY", bt = Object(h.g)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + yt + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        d[t] = 1
    }), Object(h.g)(yt, function(t) {
        h.f.units[t] = "deg", rt[t] = 1
    }), b[bt[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + yt, Object(h.g)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        b[e[1]] = bt[e[0]]
    }), Object(h.g)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        h.f.units[t] = "px"
    }), h.y.registerPlugin(Dt)
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(1),
        s = n(4),
        a = n.n(s),
        l = n(6),
        u = n(3),
        c = n(5);
    i.a.registerPlugin(o.a, l.a, c.a);
    var h = function(t) {
        this.el = t, this.planeElements = i.a.utils.toArray(this.el.querySelectorAll(".gl-plane")), this.desc = this.el.querySelectorAll(".aotw__desc"), this.row = this.el.querySelector(".aotw__row"), this.header = this.el.querySelector(".aotw__header"), this.titles = this.row.querySelectorAll(".aotw__header__title"), this.date = this.el.querySelector(".aotw__date"), this.firstTitle = this.el.querySelector(".aotw__header__title--m"), this.link = this.el.querySelector(".post-card__inner"), this.innerDefaultBg = i.a.getProperty(this.el, "backgroundColor"), this.innerDefaultColor = i.a.getProperty(this.el, "color"), this.onRepeat = this.onRepeat.bind(this)
    };
    h.prototype.init = function() {
        var t = this;
        this.preloadImages();
        var e = i.a.matchMedia();
        this.isXL = !1, e.add(r.a.queries.xl, function() {
            t.isXL = !0
        })
    }, h.prototype.preloadImages = function() {
        var t = this;
        a()(this.el, function() {
            t.inViewTl(), t.buildColors(), t.isXL && (t.buildScrollTlAlt(), t.buildScrollTl(), t.buildFlip())
        })
    }, h.prototype.selectTwoUniqueRandomValues = function(t) {
        if (t && t.length >= 2) return t.sort(function() {
            return Math.random() - .5
        }).slice(0, 2)
    }, h.prototype.buildColors = function() {
        this.palette = JSON.parse(this.el.getAttribute("data-colors")), this.bindEvents()
    }, h.prototype.bindEvents = function() {
        var t = this,
            e = this.selectTwoUniqueRandomValues(this.palette);
        i.a.ticker.add(this.onRepeat), r.a.color = e[0].color, this.link.addEventListener("mouseenter", function() {
            i.a.to(t.el, {
                backgroundColor: e[0].color,
                color: e[1].color
            })
        }), this.link.addEventListener("mouseleave", function() {
            i.a.to(t.el, {
                backgroundColor: t.innerDefaultBg,
                color: t.innerDefaultColor
            })
        }), this.link.addEventListener("mousemove", function() {
            var e = t.selectTwoUniqueRandomValues(t.palette);
            r.a.color = e[0].color, i.a.to(t.el, {
                backgroundColor: e[0].color,
                color: e[1].color,
                duration: .1
            })
        })
    }, h.prototype.onRepeat = function() {
        this.currentIndex = (this.currentIndex + 1) % this.palette.length
    }, h.prototype.inViewTl = function() {
        i.a.timeline().set(this.el, {
            autoAlpha: 1
        })
    }, h.prototype.buildScrollTl = function() {
        var t = new l.a(this.desc, {
                type: "words, lines, chars",
                charsClass: "s-char",
                linesClass: "s-line"
            }),
            e = new l.a(this.date, {
                type: "words, lines, chars",
                charsClass: "s-char",
                linesClass: "s-line"
            });
        this.splits3 = new l.a(this.firstTitle, {
            type: "chars",
            charsClass: "s-char"
        });
        var n = i.a.timeline({
            scrollTrigger: {
                scrub: .5,
                start: "top bottom-=200px",
                end: "bottom bottom",
                trigger: this.el
            }
        });
        n.to(e.chars, {
            opacity: 1,
            ease: "linear",
            stagger: .01,
            duration: 2
        }, .95), n.fromTo(t.chars, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "linear",
            stagger: .01,
            duration: 2
        }, .95)
    }, h.prototype.buildScrollTlAlt = function() {
        i.a.timeline({
            scrollTrigger: {
                trigger: this.el,
                scrub: .5,
                start: "top top",
                end: "+=" + this.header.offsetHeight
            }
        }).to(this.planeElements, {
            y: -(this.header.offsetHeight + i.a.getProperty(this.header, "marginBottom") / 2),
            ease: "linear"
        })
    }, h.prototype.buildFlip = function() {
        var t = c.a.getState(this.splits3.chars);
        this.firstTitle.classList.add("d-flex"), this.firstTitle.classList.add("justify-content-between"), c.a.from(t, {
            duration: 1.5,
            ease: function(t) {
                return Object(u.a)(t)
            },
            scrollTrigger: {
                scrub: .5,
                start: "top bottom",
                end: "bottom bottom",
                trigger: this.el
            }
        })
    }, h.prototype.destroy = function() {
        o.a.killAll(), i.a.ticker.remove(this.onRepeat)
    }, e.a = h
}, function(t, e) {
    var n, i;
    n = "undefined" != typeof window ? window : this, i = function() {
        function t() {}
        let e = t.prototype;
        return e.on = function(t, e) {
            if (!t || !e) return this;
            let n = this._events = this._events || {},
                i = n[t] = n[t] || [];
            return i.includes(e) || i.push(e), this
        }, e.once = function(t, e) {
            if (!t || !e) return this;
            this.on(t, e);
            let n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0, this
        }, e.off = function(t, e) {
            let n = this._events && this._events[t];
            if (!n || !n.length) return this;
            let i = n.indexOf(e);
            return -1 != i && n.splice(i, 1), this
        }, e.emitEvent = function(t, e) {
            let n = this._events && this._events[t];
            if (!n || !n.length) return this;
            n = n.slice(0), e = e || [];
            let i = this._onceEvents && this._onceEvents[t];
            for (let r of n) {
                i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e)
            }
            return this
        }, e.allOff = function() {
            return delete this._events, delete this._onceEvents, this
        }, t
    }, "object" == typeof t && t.exports ? t.exports = i() : n.EvEmitter = i()
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    }), e.b = function t(e) {
        var n = e.nodeType,
            i = "";
        if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += t(e)
        } else if (3 === n || 4 === n) return e.nodeValue;
        return i
    };
    /*!
     * strings: 3.12.2
     * https://greensock.com
     *
     * Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return k
    }), e.f = function(t, e, n, r) {
        if (!t || !t.parentNode || (i || f(t)).documentElement === t) return new k;
        var o = m(t),
            s = D(t) ? g : v,
            a = C(t, n),
            l = s[0].getBoundingClientRect(),
            u = s[1].getBoundingClientRect(),
            c = s[2].getBoundingClientRect(),
            h = a.parentNode,
            d = !r && w(t),
            p = new k((u.left - l.left) / 100, (u.top - l.top) / 100, (c.left - l.left) / 100, (c.top - l.top) / 100, l.left + (d ? 0 : b()), l.top + (d ? 0 : y()));
        if (h.removeChild(a), o)
            for (l = o.length; l--;)(u = o[l]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
        return e ? p.inverse() : p
    }, n.d(e, "d", function() {
        return y
    }), n.d(e, "c", function() {
        return b
    }), n.d(e, "e", function() {
        return f
    }), n.d(e, "b", function() {
        return x
    });
    /*!
     * matrix 3.12.2
     * https://greensock.com
     *
     * Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, o, s, a, l, u, c, h, d = "transform",
        p = d + "Origin",
        f = function(t) {
            var e = t.ownerDocument || t;
            !(d in t.style) && "msTransform" in t.style && (p = (d = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (r = window, u = new k, e) {
                i = e, o = e.documentElement, s = e.body, (c = i.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                var n = e.createElement("div"),
                    a = e.createElement("div");
                s.appendChild(n), n.appendChild(a), n.style.position = "static", n.style[d] = "translate3d(0,0,1px)", h = a.offsetParent !== n, s.removeChild(n)
            }
            return e
        },
        m = function(t) {
            for (var e, n; t && t !== s;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
            return e
        },
        g = [],
        v = [],
        y = function() {
            return r.pageYOffset || i.scrollTop || o.scrollTop || s.scrollTop || 0
        },
        b = function() {
            return r.pageXOffset || i.scrollLeft || o.scrollLeft || s.scrollLeft || 0
        },
        D = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        w = function t(e) {
            return "fixed" === r.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        },
        _ = function t(e, n) {
            if (e.parentNode && (i || f(e))) {
                var r = D(e),
                    o = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    s = r ? n ? "rect" : "g" : "div",
                    u = 2 !== n ? 0 : 100,
                    c = 3 === n ? 100 : 0,
                    h = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                    d = i.createElementNS ? i.createElementNS(o.replace(/^https/, "http"), s) : i.createElement(s);
                return n && (r ? (l || (l = t(e)), d.setAttribute("width", .01), d.setAttribute("height", .01), d.setAttribute("transform", "translate(" + u + "," + c + ")"), l.appendChild(d)) : (a || ((a = t(e)).style.cssText = h), d.style.cssText = h + "width:0.1px;height:0.1px;top:" + c + "px;left:" + u + "px", a.appendChild(d))), d
            }
            throw "Need document and parent."
        },
        x = function(t) {
            var e, n = t.getCTM();
            return n || (e = t.style[d], t.style[d] = "none", t.appendChild(c), n = c.getCTM(), t.removeChild(c), e ? t.style[d] = e : t.style.removeProperty(d.replace(/([A-Z])/g, "-$1").toLowerCase())), n || u.clone()
        },
        C = function(t, e) {
            var n, i, o, s, c, f, m = D(t),
                y = t === m,
                b = m ? g : v,
                w = t.parentNode;
            if (t === r) return t;
            if (b.length || b.push(_(t, 1), _(t, 2), _(t, 3)), n = m ? l : a, m) y ? (s = -(o = x(t)).e / o.a, c = -o.f / o.d, i = u) : t.getBBox ? (o = t.getBBox(), s = (i = (i = t.transform ? t.transform.baseVal : {}).numberOfItems ? i.numberOfItems > 1 ? function(t) {
                for (var e = new k, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(i) : i.getItem(0).matrix : u).a * o.x + i.c * o.y, c = i.b * o.x + i.d * o.y) : (i = new k, s = c = 0), e && "g" === t.tagName.toLowerCase() && (s = c = 0), (y ? m : w).appendChild(n), n.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + s) + "," + (i.f + c) + ")");
            else {
                if (s = c = 0, h)
                    for (i = t.offsetParent, o = t; o && (o = o.parentNode) && o !== i && o.parentNode;)(r.getComputedStyle(o)[d] + "").length > 4 && (s = o.offsetLeft, c = o.offsetTop, o = 0);
                if ("absolute" !== (f = r.getComputedStyle(t)).position && "fixed" !== f.position)
                    for (i = t.offsetParent; w && w !== i;) s += w.scrollLeft || 0, c += w.scrollTop || 0, w = w.parentNode;
                (o = n.style).top = t.offsetTop - c + "px", o.left = t.offsetLeft - s + "px", o[d] = f[d], o[p] = f[p], o.position = "fixed" === f.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        T = function(t, e, n, i, r, o, s) {
            return t.a = e, t.b = n, t.c = i, t.d = r, t.e = o, t.f = s, t
        },
        k = function() {
            function t(t, e, n, i, r, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === o && (o = 0), T(this, t, e, n, i, r, o)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    i = this.d,
                    r = this.e,
                    o = this.f,
                    s = t * i - e * n || 1e-10;
                return T(this, i / s, -e / s, -n / s, t / s, (n * o - i * r) / s, -(t * o - e * r) / s)
            }, e.multiply = function(t) {
                var e = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    o = this.e,
                    s = this.f,
                    a = t.a,
                    l = t.c,
                    u = t.b,
                    c = t.d,
                    h = t.e,
                    d = t.f;
                return T(this, a * e + u * i, a * n + u * r, l * e + c * i, l * n + c * r, o + h * e + d * i, s + h * n + d * r)
            }, e.clone = function() {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function(t) {
                var e = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    o = this.e,
                    s = this.f;
                return e === t.a && n === t.b && i === t.c && r === t.d && o === t.e && s === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    i = t.y,
                    r = this.a,
                    o = this.b,
                    s = this.c,
                    a = this.d,
                    l = this.e,
                    u = this.f;
                return e.x = n * r + i * s + l || 0, e.y = n * o + i * a + u || 0, e
            }, t
        }()
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(0),
        o = n(1),
        s = n(26);
    r.a.registerPlugin(o.a, s.a);
    var a = function(t) {
        this.el = t, this.btn = this.el.querySelector("button")
    };
    a.prototype.init = function() {
        var t = this,
            e = r.a.matchMedia();
        this.isXL = !1, e.add(i.a.queries.xl, function() {
            t.isXL = !0
        }), this.isXL && this.buildRevealAlt(), this.btn.addEventListener("click", function(e) {
            e.preventDefault(), t.isXL ? i.a.smoothScroll.lenis.scrollTo("#site-header", {
                duration: 1.3
            }) : r.a.to(window, {
                scrollTo: "#site-header",
                duration: 1.3
            })
        })
    }, a.prototype.getOverlap = function() {
        return Math.min(window.innerHeight, this.el.offsetHeight)
    }, a.prototype.adjustFooterOverlap = function() {
        this.el.style.marginTop = -this.getOverlap() + "px"
    }, a.prototype.buildRevealAlt = function() {
        r.a.set(this.el, {
            yPercent: -100
        });
        var t = r.a.timeline({
            paused: !0
        });
        t.to(this.el, {
            yPercent: 0,
            autoAlpha: 1,
            ease: "none"
        }), o.a.create({
            trigger: ".mtr",
            start: "bottom center+=20%",
            end: "bottom center-=15%",
            animation: t,
            scrub: .5
        })
    }, e.a = a
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return D
    });
    /*!
     * ScrollToPlugin 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, o, s, a, l, u, c, h = function() {
            return "undefined" != typeof window
        },
        d = function() {
            return i || h() && (i = window.gsap) && i.registerPlugin && i
        },
        p = function(t) {
            return "string" == typeof t
        },
        f = function(t) {
            return "function" == typeof t
        },
        m = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                i = "scroll" + n,
                r = "client" + n;
            return t === o || t === s || t === a ? Math.max(s[i], a[i]) - (o["inner" + n] || s[r] || a[r]) : t[i] - t["offset" + n]
        },
        g = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === o && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != s[n] ? s : a),
                function() {
                    return t[n]
                }
        },
        v = function(t, e) {
            if (!(t = l(t)[0]) || !t.getBoundingClientRect) return {
                x: 0,
                y: 0
            };
            var n = t.getBoundingClientRect(),
                i = !e || e === o || e === a,
                r = i ? {
                    top: s.clientTop - (o.pageYOffset || s.scrollTop || a.scrollTop || 0),
                    left: s.clientLeft - (o.pageXOffset || s.scrollLeft || a.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                u = {
                    x: n.left - r.left,
                    y: n.top - r.top
                };
            return !i && e && (u.x += g(e, "x")(), u.y += g(e, "y")()), u
        },
        y = function(t, e, n, i, r) {
            return isNaN(t) || "object" == typeof t ? p(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - r : "max" === t ? m(e, n) - r : Math.min(m(e, n), v(t, e)[n] - r) : parseFloat(t) - r
        },
        b = function() {
            i = d(), h() && i && "undefined" != typeof document && document.body && (o = window, a = document.body, s = document.documentElement, l = i.utils.toArray, i.config({
                autoKillThreshold: 7
            }), u = i.config(), r = 1)
        },
        D = {
            version: "3.12.2",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                i = t, b()
            },
            init: function(t, e, n, s, a) {
                r || b();
                var l = i.getProperty(t, "scrollSnapType");
                this.isWin = t === o, this.target = t, this.tween = n, e = function(t, e, n, i) {
                    if (f(t) && (t = t(e, n, i)), "object" != typeof t) return p(t) && "max" !== t && "=" !== t.charAt(1) ? {
                        x: t,
                        y: t
                    } : {
                        y: t
                    };
                    if (t.nodeType) return {
                        y: t,
                        x: t
                    };
                    var r, o = {};
                    for (r in t) o[r] = "onAutoKill" !== r && f(t[r]) ? t[r](e, n, i) : t[r];
                    return o
                }(e, s, t, a), this.vars = e, this.autoKill = !!e.autoKill, this.getX = g(t, "x"), this.getY = g(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), c || (c = i.core.globals().ScrollTrigger), "smooth" === i.getProperty(t, "scrollBehavior") && i.set(t, {
                    scrollBehavior: "auto"
                }), l && "none" !== l && (this.snap = 1, this.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (this.add(this, "x", this.x, y(e.x, t, "x", this.x, e.offsetX || 0), s, a), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, y(e.y, t, "y", this.y, e.offsetY || 0), s, a), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, i, r, s, a, l = e._pt, h = e.target, d = e.tween, p = e.autoKill, f = e.xPrev, g = e.yPrev, v = e.isWin, y = e.snap, b = e.snapInline; l;) l.r(t, l.d), l = l._next;
                n = v || !e.skipX ? e.getX() : f, r = (i = v || !e.skipY ? e.getY() : g) - g, s = n - f, a = u.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), p && (!e.skipX && (s > a || s < -a) && n < m(h, "x") && (e.skipX = 1), !e.skipY && (r > a || r < -a) && i < m(h, "y") && (e.skipY = 1), e.skipX && e.skipY && (d.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(d, e.vars.onAutoKillParams || []))), v ? o.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y) : (e.skipY || (h.scrollTop = e.y), e.skipX || (h.scrollLeft = e.x)), !y || 1 !== t && 0 !== t || (i = h.scrollTop, n = h.scrollLeft, b ? h.style.scrollSnapType = b : h.style.removeProperty("scroll-snap-type"), h.scrollTop = i + 1, h.scrollLeft = n + 1, h.scrollTop = i, h.scrollLeft = n), e.xPrev = e.x, e.yPrev = e.y, c && c.update()
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    D.max = m, D.getOffset = v, D.buildGetter = g, d() && i.registerPlugin(D)
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(3),
        o = n(28),
        s = n.n(o),
        a = function(t) {
            this.el = t, this.videos = this.el.querySelectorAll(".embed-container"), this.ins = this.el.querySelectorAll(".js-in")
        };
    a.prototype.init = function() {
        var t = this;
        (this.buildTimelineIn(), this.videos.length > 0) ? this.videos.forEach(function(e) {
            t.buildPlayer(e)
        }): this.el.querySelectorAll("iframe").forEach(function(e) {
            var n = document.createElement("div");
            n.className = "embed-container", n.appendChild(e.cloneNode(!0)), e.parentNode.replaceChild(n, e), t.buildPlayer(n)
        })
    }, a.prototype.buildPlayer = function(t) {
        this.player = new s.a(t, {})
    }, a.prototype.buildTimelineIn = function() {
        this.tl = i.a.timeline({
            defaults: {
                ease: function(t) {
                    return Object(r.a)(t)
                }
            },
            scrollTrigger: {
                trigger: this.ins
            }
        }), this.tl.fromTo(this.ins, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 1,
            stagger: .1
        }, 0)
    }, a.prototype.destroy = function() {}, e.a = a
}, function(t, e, n) {
    (function(i) {
        var r, o, s, a = ["premium", "referrerPolicy"];

        function l(t, e) {
            if (null == t) return {};
            var n, i, r = function(t, e) {
                if (null == t) return {};
                var n, i, r = {},
                    o = Object.keys(t);
                for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                return r
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
            }
            return r
        }

        function u(t) {
            return function(t) {
                if (Array.isArray(t)) return v(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || g(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, b(i.key), i)
            }
        }

        function d(t, e, n) {
            return e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }

        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, i)
            }
            return n
        }

        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(n), !0).forEach(function(e) {
                    y(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        function m(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, r, o, s, a = [],
                        l = !0,
                        u = !1;
                    try {
                        if (o = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            l = !1
                        } else
                            for (; !(l = (i = o.call(n)).done) && (a.push(i.value), a.length !== e); l = !0);
                    } catch (t) {
                        u = !0, r = t
                    } finally {
                        try {
                            if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
                        } finally {
                            if (u) throw r
                        }
                    }
                    return a
                }
            }(t, e) || g(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(t, e) {
            if (t) {
                if ("string" == typeof t) return v(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0
            }
        }

        function v(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }

        function y(t, e, n) {
            return (e = b(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function b(t) {
            var e = function(t, e) {
                if ("object" != D(t) || !t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" != D(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == D(e) ? e : String(e)
        }

        function D(t) {
            "@babel/helpers - typeof";
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        "object" == ("undefined" == typeof navigator ? "undefined" : D(navigator)) && (s = function() {
            "use strict";

            function t(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != D(t) || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var i = n.call(t, e);
                            if ("object" != D(i)) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t, "string");
                    return "symbol" == D(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function e(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function n(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(i), !0).forEach(function(e) {
                        n(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }
            var s = {
                    addCSS: !0,
                    thumbWidth: 15,
                    watch: !0
                },
                h = function(t) {
                    return null != t ? t.constructor : null
                },
                p = function(t, e) {
                    return !!(t && e && t instanceof e)
                },
                g = function(t) {
                    return null == t
                },
                v = function(t) {
                    return h(t) === Object
                },
                b = function(t) {
                    return h(t) === String
                },
                w = function(t) {
                    return Array.isArray(t)
                },
                _ = function(t) {
                    return p(t, NodeList)
                },
                x = {
                    nullOrUndefined: g,
                    object: v,
                    number: function(t) {
                        return h(t) === Number && !Number.isNaN(t)
                    },
                    string: b,
                    boolean: function(t) {
                        return h(t) === Boolean
                    },
                    function: function(t) {
                        return h(t) === Function
                    },
                    array: w,
                    nodeList: _,
                    element: function(t) {
                        return p(t, Element)
                    },
                    event: function(t) {
                        return p(t, Event)
                    },
                    empty: function(t) {
                        return g(t) || (b(t) || w(t) || _(t)) && !t.length || v(t) && !Object.keys(t).length
                    }
                };
            var C = function() {
                    function t(e, n) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), x.element(e) ? this.element = e : x.string(e) && (this.element = document.querySelector(e)), x.element(this.element) && x.empty(this.element.rangeTouch) && (this.config = o({}, s, {}, n), this.init())
                    }
                    return function(t, n, i) {
                        n && e(t.prototype, n), i && e(t, i)
                    }(t, [{
                        key: "init",
                        value: function() {
                            t.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            t.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners",
                        value: function(t) {
                            var e = this,
                                n = t ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach(function(t) {
                                e.element[n](t, function(t) {
                                    return e.set(t)
                                }, !1)
                            })
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            if (!t.enabled || !x.event(e)) return null;
                            var n, i = e.target,
                                r = e.changedTouches[0],
                                o = parseFloat(i.getAttribute("min")) || 0,
                                s = parseFloat(i.getAttribute("max")) || 100,
                                a = parseFloat(i.getAttribute("step")) || 1,
                                l = i.getBoundingClientRect(),
                                u = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (n = 100 / l.width * (r.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * u : 50 < n && (n += 2 * (n - 50) * u), o + function(t, e) {
                                if (1 > e) {
                                    var n = function(t) {
                                        var e = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                        return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
                                    }(e);
                                    return parseFloat(t.toFixed(n))
                                }
                                return Math.round(t / e) * e
                            }(n / 100 * (s - o), a)
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            t.enabled && x.event(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function(t, e) {
                                if (t && e) {
                                    var n = new Event(e, {
                                        bubbles: !0
                                    });
                                    t.dispatchEvent(n)
                                }
                            }(e.target, "touchend" === e.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup",
                        value: function(e) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            if (x.empty(e) || x.string(e) ? i = Array.from(document.querySelectorAll(x.string(e) ? e : 'input[type="range"]')) : x.element(e) ? i = [e] : x.nodeList(e) ? i = Array.from(e) : x.array(e) && (i = e.filter(x.element)), x.empty(i)) return null;
                            var r = o({}, s, {}, n);
                            x.string(e) && r.watch && new MutationObserver(function(n) {
                                Array.from(n).forEach(function(n) {
                                    Array.from(n.addedNodes).forEach(function(n) {
                                        x.element(n) && function(t, e) {
                                            return function() {
                                                return Array.from(document.querySelectorAll(e)).includes(this)
                                            }.call(n, e)
                                        }(0, e) && new t(n, r)
                                    })
                                })
                            }).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            });
                            return i.map(function(e) {
                                return new t(e, n)
                            })
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return "ontouchstart" in document.documentElement
                        }
                    }]), t
                }(),
                T = function(t) {
                    return null != t ? t.constructor : null
                },
                k = function(t, e) {
                    return Boolean(t && e && t instanceof e)
                },
                E = function(t) {
                    return null == t
                },
                S = function(t) {
                    return T(t) === Object
                },
                A = function(t) {
                    return T(t) === String
                },
                F = function(t) {
                    return "function" == typeof t
                },
                M = function(t) {
                    return Array.isArray(t)
                },
                O = function(t) {
                    return k(t, NodeList)
                },
                P = function(t) {
                    return E(t) || (A(t) || M(t) || O(t)) && !t.length || S(t) && !Object.keys(t).length
                },
                L = {
                    nullOrUndefined: E,
                    object: S,
                    number: function(t) {
                        return T(t) === Number && !Number.isNaN(t)
                    },
                    string: A,
                    boolean: function(t) {
                        return T(t) === Boolean
                    },
                    function: F,
                    array: M,
                    weakMap: function(t) {
                        return k(t, WeakMap)
                    },
                    nodeList: O,
                    element: function(t) {
                        return null !== t && "object" == D(t) && 1 === t.nodeType && "object" == D(t.style) && "object" == D(t.ownerDocument)
                    },
                    textNode: function(t) {
                        return T(t) === Text
                    },
                    event: function(t) {
                        return k(t, Event)
                    },
                    keyboardEvent: function(t) {
                        return k(t, KeyboardEvent)
                    },
                    cue: function(t) {
                        return k(t, window.TextTrackCue) || k(t, window.VTTCue)
                    },
                    track: function(t) {
                        return k(t, TextTrack) || !E(t) && A(t.kind)
                    },
                    promise: function(t) {
                        return k(t, Promise) && F(t.then)
                    },
                    url: function(t) {
                        if (k(t, window.URL)) return !0;
                        if (!A(t)) return !1;
                        var e = t;
                        t.startsWith("http://") && t.startsWith("https://") || (e = "http://".concat(t));
                        try {
                            return !P(new URL(e).hostname)
                        } catch (t) {
                            return !1
                        }
                    },
                    empty: P
                },
                N = function() {
                    var t = document.createElement("span"),
                        e = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        },
                        n = Object.keys(e).find(function(e) {
                            return void 0 !== t.style[e]
                        });
                    return !!L.string(n) && e[n]
                }();

            function I(t, e) {
                setTimeout(function() {
                    try {
                        t.hidden = !0, t.offsetHeight, t.hidden = !1
                    } catch (t) {}
                }, e)
            }
            var j = {
                isIE: Boolean(window.document.documentMode),
                isEdge: /Edge/g.test(navigator.userAgent),
                isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
                isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
                isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
            };

            function B(t, e) {
                return e.split(".").reduce(function(t, e) {
                    return t && t[e]
                }, t)
            }

            function R() {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                if (!n.length) return t;
                var r = n.shift();
                return L.object(r) ? (Object.keys(r).forEach(function(e) {
                    L.object(r[e]) ? (Object.keys(t).includes(e) || Object.assign(t, y({}, e, {})), R(t[e], r[e])) : Object.assign(t, y({}, e, r[e]))
                }), R.apply(void 0, [t].concat(n))) : t
            }

            function q(t, e) {
                var n = t.length ? t : [t];
                Array.from(n).reverse().forEach(function(t, n) {
                    var i = n > 0 ? e.cloneNode(!0) : e,
                        r = t.parentNode,
                        o = t.nextSibling;
                    i.appendChild(t), o ? r.insertBefore(i, o) : r.appendChild(i)
                })
            }

            function z(t, e) {
                L.element(t) && !L.empty(e) && Object.entries(e).filter(function(t) {
                    var e = m(t, 2)[1];
                    return !L.nullOrUndefined(e)
                }).forEach(function(e) {
                    var n = m(e, 2),
                        i = n[0],
                        r = n[1];
                    return t.setAttribute(i, r)
                })
            }

            function V(t, e, n) {
                var i = document.createElement(t);
                return L.object(e) && z(i, e), L.string(n) && (i.innerText = n), i
            }

            function H(t, e, n, i) {
                L.element(e) && e.appendChild(V(t, n, i))
            }

            function W(t) {
                L.nodeList(t) || L.array(t) ? Array.from(t).forEach(W) : L.element(t) && L.element(t.parentNode) && t.parentNode.removeChild(t)
            }

            function X(t) {
                if (L.element(t))
                    for (var e = t.childNodes.length; e > 0;) t.removeChild(t.lastChild), e -= 1
            }

            function Y(t, e) {
                return L.element(e) && L.element(e.parentNode) && L.element(t) ? (e.parentNode.replaceChild(t, e), t) : null
            }

            function U(t, e) {
                if (!L.string(t) || L.empty(t)) return {};
                var n = {},
                    i = R({}, e);
                return t.split(",").forEach(function(t) {
                    var e = t.trim(),
                        r = e.replace(".", ""),
                        o = e.replace(/[[\]]/g, "").split("="),
                        s = m(o, 1)[0],
                        a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                    switch (e.charAt(0)) {
                        case ".":
                            L.string(i.class) ? n.class = "".concat(i.class, " ").concat(r) : n.class = r;
                            break;
                        case "#":
                            n.id = e.replace("#", "");
                            break;
                        case "[":
                            n[s] = a
                    }
                }), R(i, n)
            }

            function K(t, e) {
                if (L.element(t)) {
                    var n = e;
                    L.boolean(n) || (n = !t.hidden), t.hidden = n
                }
            }

            function G(t, e, n) {
                if (L.nodeList(t)) return Array.from(t).map(function(t) {
                    return G(t, e, n)
                });
                if (L.element(t)) {
                    var i = "toggle";
                    return void 0 !== n && (i = n ? "add" : "remove"), t.classList[i](e), t.classList.contains(e)
                }
                return !1
            }

            function Q(t, e) {
                return L.element(t) && t.classList.contains(e)
            }

            function $(t, e) {
                var n = Element.prototype;
                return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
                    return Array.from(document.querySelectorAll(e)).includes(this)
                }).call(t, e)
            }

            function J(t) {
                return this.elements.container.querySelectorAll(t)
            }

            function Z(t) {
                return this.elements.container.querySelector(t)
            }

            function tt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                L.element(t) && t.focus({
                    preventScroll: !0,
                    focusVisible: e
                })
            }
            var et = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                },
                nt = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check: function(t, e) {
                        var n = nt[t] || "html5" !== e;
                        return {
                            api: n,
                            ui: n && nt.rangeInput
                        }
                    },
                    pip: !(j.isIPhone || !L.function(V("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || V("video").disablePictureInPicture)),
                    airplay: L.function(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime: function(t) {
                        if (L.empty(t)) return !1;
                        var e = m(t.split("/"), 1)[0],
                            n = t;
                        if (!this.isHTML5 || e !== this.type) return !1;
                        Object.keys(et).includes(n) && (n += '; codecs="'.concat(et[t], '"'));
                        try {
                            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                        } catch (t) {
                            return !1
                        }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: function() {
                        var t = document.createElement("input");
                        return t.type = "range", "range" === t.type
                    }(),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== N,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                },
                it = function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                return t = !0, null
                            }
                        });
                        window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                    } catch (t) {}
                    return t
                }();

            function rt(t, e, n) {
                var i = this,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (t && "addEventListener" in t && !L.empty(e) && L.function(n)) {
                    var a = e.split(" "),
                        l = s;
                    it && (l = {
                        passive: o,
                        capture: s
                    }), a.forEach(function(e) {
                        i && i.eventListeners && r && i.eventListeners.push({
                            element: t,
                            type: e,
                            callback: n,
                            options: l
                        }), t[r ? "addEventListener" : "removeEventListener"](e, n, l)
                    })
                }
            }

            function ot(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                rt.call(this, t, e, n, !0, i, r)
            }

            function st(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                rt.call(this, t, e, n, !1, i, r)
            }

            function at(t) {
                var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                rt.call(this, t, n, function s() {
                    for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++) l[u] = arguments[u];
                    st(t, n, s, r, o), i.apply(e, l)
                }, !0, r, o)
            }

            function lt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (L.element(t) && !L.empty(e)) {
                    var r = new CustomEvent(e, {
                        bubbles: n,
                        detail: f(f({}, i), {}, {
                            plyr: this
                        })
                    });
                    t.dispatchEvent(r)
                }
            }

            function ut(t) {
                L.promise(t) && t.then(null, function() {})
            }

            function ct(t) {
                return L.array(t) ? t.filter(function(e, n) {
                    return t.indexOf(e) === n
                }) : t
            }

            function ht(t, e) {
                return L.array(t) && t.length ? t.reduce(function(t, n) {
                    return Math.abs(n - e) < Math.abs(t - e) ? n : t
                }) : null
            }

            function dt(t) {
                return !(!window || !window.CSS) && window.CSS.supports(t)
            }
            var pt = [
                [1, 1],
                [4, 3],
                [3, 4],
                [5, 4],
                [4, 5],
                [3, 2],
                [2, 3],
                [16, 10],
                [10, 16],
                [16, 9],
                [9, 16],
                [21, 9],
                [9, 21],
                [32, 9],
                [9, 32]
            ].reduce(function(t, e) {
                var n = m(e, 2),
                    i = n[0],
                    r = n[1];
                return f(f({}, t), {}, y({}, i / r, [i, r]))
            }, {});

            function ft(t) {
                return !!(L.array(t) || L.string(t) && t.includes(":")) && (L.array(t) ? t : t.split(":")).map(Number).every(L.number)
            }

            function mt(t) {
                if (!L.array(t) || !t.every(L.number)) return null;
                var e = m(t, 2),
                    n = e[0],
                    i = e[1],
                    r = function t(e, n) {
                        return 0 === n ? e : t(n, e % n)
                    }(n, i);
                return [n / r, i / r]
            }

            function gt(t) {
                var e = function(t) {
                        return ft(t) ? t.split(":").map(Number) : null
                    },
                    n = e(t);
                if (null === n && (n = e(this.config.ratio)), null === n && !L.empty(this.embed) && L.array(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                    var i = this.media;
                    n = [i.videoWidth, i.videoHeight]
                }
                return mt(n)
            }

            function vt(t) {
                if (!this.isVideo) return {};
                var e = this.elements.wrapper,
                    n = gt.call(this, t);
                if (!L.array(n)) return {};
                var i = m(mt(n), 2),
                    r = i[0],
                    o = i[1],
                    s = 100 / r * o;
                if (dt("aspect-ratio: ".concat(r, "/").concat(o)) ? e.style.aspectRatio = "".concat(r, "/").concat(o) : e.style.paddingBottom = "".concat(s, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                    var a = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                        l = (a - s) / (a / 50);
                    this.fullscreen.active ? e.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(l, "%)")
                } else this.isHTML5 && e.classList.add(this.config.classNames.videoFixedRatio);
                return {
                    padding: s,
                    ratio: n
                }
            }

            function yt(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .05,
                    i = t / e,
                    r = ht(Object.keys(pt), i);
                return Math.abs(r - i) <= n ? pt[r] : [t, e]
            }
            var bt = {
                getSources: function() {
                    var t = this;
                    return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function(e) {
                        var n = e.getAttribute("type");
                        return !!L.empty(n) || nt.mime.call(t, n)
                    }) : []
                },
                getQualityOptions: function() {
                    return this.config.quality.forced ? this.config.quality.options : bt.getSources.call(this).map(function(t) {
                        return Number(t.getAttribute("size"))
                    }).filter(Boolean)
                },
                setup: function() {
                    if (this.isHTML5) {
                        var t = this;
                        t.options.speed = t.config.speed.options, L.empty(this.config.ratio) || vt.call(t), Object.defineProperty(t.media, "quality", {
                            get: function() {
                                var e = bt.getSources.call(t).find(function(e) {
                                    return e.getAttribute("src") === t.source
                                });
                                return e && Number(e.getAttribute("size"))
                            },
                            set: function(e) {
                                if (t.quality !== e) {
                                    if (t.config.quality.forced && L.function(t.config.quality.onChange)) t.config.quality.onChange(e);
                                    else {
                                        var n = bt.getSources.call(t).find(function(t) {
                                            return Number(t.getAttribute("size")) === e
                                        });
                                        if (!n) return;
                                        var i = t.media,
                                            r = i.currentTime,
                                            o = i.paused,
                                            s = i.preload,
                                            a = i.readyState,
                                            l = i.playbackRate;
                                        t.media.src = n.getAttribute("src"), ("none" !== s || a) && (t.once("loadedmetadata", function() {
                                            t.speed = l, t.currentTime = r, o || ut(t.play())
                                        }), t.media.load())
                                    }
                                    lt.call(t, t.media, "qualitychange", !1, {
                                        quality: e
                                    })
                                }
                            }
                        })
                    }
                },
                cancelRequests: function() {
                    this.isHTML5 && (W(bt.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                }
            };

            function Dt(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                return L.empty(t) ? t : t.toString().replace(/{(\d+)}/g, function(t, e) {
                    return n[e].toString()
                })
            }
            var wt = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
                },
                _t = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
                    })
                };

            function xt(t) {
                var e = document.createElement("div");
                return e.appendChild(t), e.innerHTML
            }
            var Ct = {
                    pip: "PIP",
                    airplay: "AirPlay",
                    html5: "HTML5",
                    vimeo: "Vimeo",
                    youtube: "YouTube"
                },
                Tt = {
                    get: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (L.empty(t) || L.empty(e)) return "";
                        var n = B(e.i18n, t);
                        if (L.empty(n)) return Object.keys(Ct).includes(t) ? Ct[t] : "";
                        var i = {
                            "{seektime}": e.seekTime,
                            "{title}": e.title
                        };
                        return Object.entries(i).forEach(function(t) {
                            var e = m(t, 2),
                                i = e[0],
                                r = e[1];
                            n = wt(n, i, r)
                        }), n
                    }
                },
                kt = function() {
                    function e(n) {
                        var i = this;
                        c(this, e), t(this, "get", function(t) {
                            if (!e.supported || !i.enabled) return null;
                            var n = window.localStorage.getItem(i.key);
                            if (L.empty(n)) return null;
                            var r = JSON.parse(n);
                            return L.string(t) && t.length ? r[t] : r
                        }), t(this, "set", function(t) {
                            if (e.supported && i.enabled && L.object(t)) {
                                var n = i.get();
                                L.empty(n) && (n = {}), R(n, t);
                                try {
                                    window.localStorage.setItem(i.key, JSON.stringify(n))
                                } catch (t) {}
                            }
                        }), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
                    }
                    return d(e, null, [{
                        key: "supported",
                        get: function() {
                            try {
                                if (!("localStorage" in window)) return !1;
                                var t = "___test";
                                return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    }]), e
                }();

            function Et(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                return new Promise(function(n, i) {
                    try {
                        var r = new XMLHttpRequest;
                        if (!("withCredentials" in r)) return;
                        r.addEventListener("load", function() {
                            if ("text" === e) try {
                                n(JSON.parse(r.responseText))
                            } catch (t) {
                                n(r.responseText)
                            } else n(r.response)
                        }), r.addEventListener("error", function() {
                            throw new Error(r.status)
                        }), r.open("GET", t, !0), r.responseType = e, r.send()
                    } catch (t) {
                        i(t)
                    }
                })
            }

            function St(t, e) {
                if (L.string(t)) {
                    var n = "cache",
                        i = L.string(e),
                        r = function() {
                            return null !== document.getElementById(e)
                        },
                        o = function(t, e) {
                            t.innerHTML = e, i && r() || document.body.insertAdjacentElement("afterbegin", t)
                        };
                    if (!i || !r()) {
                        var s = kt.supported,
                            a = document.createElement("div");
                        if (a.setAttribute("hidden", ""), i && a.setAttribute("id", e), s) {
                            var l = window.localStorage.getItem("".concat(n, "-").concat(e));
                            if (null !== l) {
                                var u = JSON.parse(l);
                                o(a, u.content)
                            }
                        }
                        Et(t).then(function(t) {
                            if (!L.empty(t)) {
                                if (s) try {
                                    window.localStorage.setItem("".concat(n, "-").concat(e), JSON.stringify({
                                        content: t
                                    }))
                                } catch (t) {}
                                o(a, t)
                            }
                        }).catch(function() {})
                    }
                }
            }
            var At = function(t) {
                    return Math.trunc(t / 60 / 60 % 60, 10)
                },
                Ft = function(t) {
                    return Math.trunc(t / 60 % 60, 10)
                },
                Mt = function(t) {
                    return Math.trunc(t % 60, 10)
                };

            function Ot() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!L.number(t)) return Ot(void 0, e, n);
                var i = function(t) {
                        return "0".concat(t).slice(-2)
                    },
                    r = At(t),
                    o = Ft(t),
                    s = Mt(t);
                return r = e || r > 0 ? "".concat(r, ":") : "", "".concat(n && t > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(s))
            }
            var Pt = {
                getIconUrl: function() {
                    var t = new URL(this.config.iconUrl, window.location),
                        e = window.location.host ? window.location.host : window.top.location.host,
                        n = t.host !== e || j.isIE && !window.svg4everybody;
                    return {
                        url: this.config.iconUrl,
                        cors: n
                    }
                },
                findElements: function() {
                    try {
                        return this.elements.controls = Z.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                            play: J.call(this, this.config.selectors.buttons.play),
                            pause: Z.call(this, this.config.selectors.buttons.pause),
                            restart: Z.call(this, this.config.selectors.buttons.restart),
                            rewind: Z.call(this, this.config.selectors.buttons.rewind),
                            fastForward: Z.call(this, this.config.selectors.buttons.fastForward),
                            mute: Z.call(this, this.config.selectors.buttons.mute),
                            pip: Z.call(this, this.config.selectors.buttons.pip),
                            airplay: Z.call(this, this.config.selectors.buttons.airplay),
                            settings: Z.call(this, this.config.selectors.buttons.settings),
                            captions: Z.call(this, this.config.selectors.buttons.captions),
                            fullscreen: Z.call(this, this.config.selectors.buttons.fullscreen)
                        }, this.elements.progress = Z.call(this, this.config.selectors.progress), this.elements.inputs = {
                            seek: Z.call(this, this.config.selectors.inputs.seek),
                            volume: Z.call(this, this.config.selectors.inputs.volume)
                        }, this.elements.display = {
                            buffer: Z.call(this, this.config.selectors.display.buffer),
                            currentTime: Z.call(this, this.config.selectors.display.currentTime),
                            duration: Z.call(this, this.config.selectors.display.duration)
                        }, L.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                    } catch (t) {
                        return this.debug.warn("It looks like there is a problem with your custom controls HTML", t), this.toggleNativeControls(!0), !1
                    }
                },
                createIcon: function(t, e) {
                    var n = "http://www.w3.org/2000/svg",
                        i = Pt.getIconUrl.call(this),
                        r = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                        o = document.createElementNS(n, "svg");
                    z(o, R(e, {
                        "aria-hidden": "true",
                        focusable: "false"
                    }));
                    var s = document.createElementNS(n, "use"),
                        a = "".concat(r, "-").concat(t);
                    return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), o.appendChild(s), o
                },
                createLabel: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = Tt.get(t, this.config);
                    return V("span", f(f({}, e), {}, {
                        class: [e.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                    }), n)
                },
                createBadge: function(t) {
                    if (L.empty(t)) return null;
                    var e = V("span", {
                        class: this.config.classNames.menu.value
                    });
                    return e.appendChild(V("span", {
                        class: this.config.classNames.menu.badge
                    }, t)), e
                },
                createButton: function(t, e) {
                    var n = this,
                        i = R({}, e),
                        r = function() {
                            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                            return (t = function() {
                                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                                return t = wt(t, "-", " "), t = wt(t, "_", " "), t = _t(t), wt(t, " ", "")
                            }(t)).charAt(0).toLowerCase() + t.slice(1)
                        }(t),
                        o = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                    switch (["element", "icon", "label"].forEach(function(t) {
                        Object.keys(i).includes(t) && (o[t] = i[t], delete i[t])
                    }), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function(t) {
                        return t === n.config.classNames.control
                    }) || R(i, {
                        class: "".concat(i.class, " ").concat(this.config.classNames.control)
                    }) : i.class = this.config.classNames.control, t) {
                        case "play":
                            o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                            break;
                        case "mute":
                            o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                            break;
                        case "captions":
                            o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                            break;
                        case "fullscreen":
                            o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                            break;
                        case "play-large":
                            i.class += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", o.label = "play", o.icon = "play";
                            break;
                        default:
                            L.empty(o.label) && (o.label = r), L.empty(o.icon) && (o.icon = t)
                    }
                    var s = V(o.element);
                    return o.toggle ? (s.appendChild(Pt.createIcon.call(this, o.iconPressed, {
                        class: "icon--pressed"
                    })), s.appendChild(Pt.createIcon.call(this, o.icon, {
                        class: "icon--not-pressed"
                    })), s.appendChild(Pt.createLabel.call(this, o.labelPressed, {
                        class: "label--pressed"
                    })), s.appendChild(Pt.createLabel.call(this, o.label, {
                        class: "label--not-pressed"
                    }))) : (s.appendChild(Pt.createIcon.call(this, o.icon)), s.appendChild(Pt.createLabel.call(this, o.label))), R(i, U(this.config.selectors.buttons[r], i)), z(s, i), "play" === r ? (L.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(s)) : this.elements.buttons[r] = s, s
                },
                createRange: function(t, e) {
                    var n = V("input", R(U(this.config.selectors.inputs[t]), {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: .01,
                        value: 0,
                        autocomplete: "off",
                        role: "slider",
                        "aria-label": Tt.get(t, this.config),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": 0
                    }, e));
                    return this.elements.inputs[t] = n, Pt.updateRangeFill.call(this, n), C.setup(n), n
                },
                createProgress: function(t, e) {
                    var n = V("progress", R(U(this.config.selectors.display[t]), {
                        min: 0,
                        max: 100,
                        value: 0,
                        role: "progressbar",
                        "aria-hidden": !0
                    }, e));
                    if ("volume" !== t) {
                        n.appendChild(V("span", null, "0"));
                        var i = {
                                played: "played",
                                buffer: "buffered"
                            }[t],
                            r = i ? Tt.get(i, this.config) : "";
                        n.innerText = "% ".concat(r.toLowerCase())
                    }
                    return this.elements.display[t] = n, n
                },
                createTime: function(t, e) {
                    var n = U(this.config.selectors.display[t], e),
                        i = V("div", R(n, {
                            class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                            "aria-label": Tt.get(t, this.config),
                            role: "timer"
                        }), "00:00");
                    return this.elements.display[t] = i, i
                },
                bindMenuItemShortcuts: function(t, e) {
                    var n = this;
                    ot.call(this, t, "keydown keyup", function(i) {
                        if ([" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                            var r, o = $(t, '[role="menuitemradio"]');
                            if (!o && [" ", "ArrowRight"].includes(i.key)) Pt.showMenuPanel.call(n, e, !0);
                            else " " !== i.key && ("ArrowDown" === i.key || o && "ArrowRight" === i.key ? (r = t.nextElementSibling, L.element(r) || (r = t.parentNode.firstElementChild)) : (r = t.previousElementSibling, L.element(r) || (r = t.parentNode.lastElementChild)), tt.call(n, r, !0))
                        }
                    }, !1), ot.call(this, t, "keyup", function(t) {
                        "Return" === t.key && Pt.focusFirstMenuItem.call(n, null, !0)
                    })
                },
                createMenuItem: function(t) {
                    var e = this,
                        n = t.value,
                        i = t.list,
                        r = t.type,
                        o = t.title,
                        s = t.badge,
                        a = void 0 === s ? null : s,
                        l = t.checked,
                        u = void 0 !== l && l,
                        c = U(this.config.selectors.inputs[r]),
                        h = V("button", R(c, {
                            type: "button",
                            role: "menuitemradio",
                            class: "".concat(this.config.classNames.control, " ").concat(c.class ? c.class : "").trim(),
                            "aria-checked": u,
                            value: n
                        })),
                        d = V("span");
                    d.innerHTML = o, L.element(a) && d.appendChild(a), h.appendChild(d), Object.defineProperty(h, "checked", {
                        enumerable: !0,
                        get: function() {
                            return "true" === h.getAttribute("aria-checked")
                        },
                        set: function(t) {
                            t && Array.from(h.parentNode.children).filter(function(t) {
                                return $(t, '[role="menuitemradio"]')
                            }).forEach(function(t) {
                                return t.setAttribute("aria-checked", "false")
                            }), h.setAttribute("aria-checked", t ? "true" : "false")
                        }
                    }), this.listeners.bind(h, "click keyup", function(t) {
                        if (!L.keyboardEvent(t) || " " === t.key) {
                            switch (t.preventDefault(), t.stopPropagation(), h.checked = !0, r) {
                                case "language":
                                    e.currentTrack = Number(n);
                                    break;
                                case "quality":
                                    e.quality = n;
                                    break;
                                case "speed":
                                    e.speed = parseFloat(n)
                            }
                            Pt.showMenuPanel.call(e, "home", L.keyboardEvent(t))
                        }
                    }, r, !1), Pt.bindMenuItemShortcuts.call(this, h, r), i.appendChild(h)
                },
                formatTime: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return L.number(t) ? Ot(t, At(this.duration) > 0, e) : t
                },
                updateTimeDisplay: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    L.element(t) && L.number(e) && (t.innerText = Pt.formatTime(e, n))
                },
                updateVolume: function() {
                    this.supported.ui && (L.element(this.elements.inputs.volume) && Pt.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), L.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                },
                setRange: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    L.element(t) && (t.value = e, Pt.updateRangeFill.call(this, t))
                },
                updateProgress: function(t) {
                    var e = this;
                    if (this.supported.ui && L.event(t)) {
                        var n, i, r = 0;
                        if (t) switch (t.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === t.type && Pt.setRange.call(this, this.elements.inputs.seek, r);
                                break;
                            case "playing":
                            case "progress":
                                ! function(t, n) {
                                    var i = L.number(n) ? n : 0,
                                        r = L.element(t) ? t : e.elements.display.buffer;
                                    if (L.element(r)) {
                                        r.value = i;
                                        var o = r.getElementsByTagName("span")[0];
                                        L.element(o) && (o.childNodes[0].nodeValue = i)
                                    }
                                }(this.elements.display.buffer, 100 * this.buffered)
                        }
                    }
                },
                updateRangeFill: function(t) {
                    var e = L.event(t) ? t.target : t;
                    if (L.element(e) && "range" === e.getAttribute("type")) {
                        if ($(e, this.config.selectors.inputs.seek)) {
                            e.setAttribute("aria-valuenow", this.currentTime);
                            var n = Pt.formatTime(this.currentTime),
                                i = Pt.formatTime(this.duration),
                                r = Tt.get("seekLabel", this.config);
                            e.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
                        } else if ($(e, this.config.selectors.inputs.volume)) {
                            var o = 100 * e.value;
                            e.setAttribute("aria-valuenow", o), e.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                        } else e.setAttribute("aria-valuenow", e.value);
                        (j.isWebKit || j.isIPadOS) && e.style.setProperty("--value", e.value / e.max * 100 + "%")
                    }
                },
                updateSeekTooltip: function(t) {
                    var e, n;
                    if (this.config.tooltips.seek && L.element(this.elements.inputs.seek) && L.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                        var i = this.elements.display.seekTooltip,
                            r = "".concat(this.config.classNames.tooltip, "--visible"),
                            o = function(t) {
                                return G(i, r, t)
                            };
                        if (this.touch) o(!1);
                        else {
                            var s = 0,
                                a = this.elements.progress.getBoundingClientRect();
                            if (L.event(t)) s = 100 / a.width * (t.pageX - a.left);
                            else {
                                if (!Q(i, r)) return;
                                s = parseFloat(i.style.left, 10)
                            }
                            s < 0 ? s = 0 : s > 100 && (s = 100);
                            var l = this.duration / 100 * s;
                            i.innerText = Pt.formatTime(l);
                            var u = null === (e = this.config.markers) || void 0 === e || null === (n = e.points) || void 0 === n ? void 0 : n.find(function(t) {
                                return t.time === Math.round(l)
                            });
                            u && i.insertAdjacentHTML("afterbegin", "".concat(u.label, "<br>")), i.style.left = "".concat(s, "%"), L.event(t) && ["mouseenter", "mouseleave"].includes(t.type) && o("mouseenter" === t.type)
                        }
                    }
                },
                timeUpdate: function(t) {
                    var e = !L.element(this.elements.display.duration) && this.config.invertTime;
                    Pt.updateTimeDisplay.call(this, this.elements.display.currentTime, e ? this.duration - this.currentTime : this.currentTime, e), t && "timeupdate" === t.type && this.media.seeking || Pt.updateProgress.call(this, t)
                },
                durationUpdate: function() {
                    if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                        if (this.duration >= Math.pow(2, 32)) return K(this.elements.display.currentTime, !0), void K(this.elements.progress, !0);
                        L.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        var t = L.element(this.elements.display.duration);
                        !t && this.config.displayDuration && this.paused && Pt.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), t && Pt.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pt.setMarkers.call(this), Pt.updateSeekTooltip.call(this)
                    }
                },
                toggleMenuButton: function(t, e) {
                    K(this.elements.settings.buttons[t], !e)
                },
                updateSetting: function(t, e, n) {
                    var i = this.elements.settings.panels[t],
                        r = null,
                        o = e;
                    if ("captions" === t) r = this.currentTrack;
                    else {
                        if (r = L.empty(n) ? this[t] : n, L.empty(r) && (r = this.config[t].default), !L.empty(this.options[t]) && !this.options[t].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(t));
                        if (!this.config[t].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(t))
                    }
                    if (L.element(o) || (o = i && i.querySelector('[role="menu"]')), L.element(o)) {
                        this.elements.settings.buttons[t].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Pt.getLabel.call(this, t, r);
                        var s = o && o.querySelector('[value="'.concat(r, '"]'));
                        L.element(s) && (s.checked = !0)
                    }
                },
                getLabel: function(t, e) {
                    switch (t) {
                        case "speed":
                            return 1 === e ? Tt.get("normal", this.config) : "".concat(e, "&times;");
                        case "quality":
                            if (L.number(e)) {
                                var n = Tt.get("qualityLabel.".concat(e), this.config);
                                return n.length ? n : "".concat(e, "p")
                            }
                            return _t(e);
                        case "captions":
                            return It.getLabel.call(this);
                        default:
                            return null
                    }
                },
                setQualityMenu: function(t) {
                    var e = this;
                    if (L.element(this.elements.settings.panels.quality)) {
                        var n = "quality",
                            i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        L.array(t) && (this.options.quality = ct(t).filter(function(t) {
                            return e.config.quality.options.includes(t)
                        }));
                        var r = !L.empty(this.options.quality) && this.options.quality.length > 1;
                        if (Pt.toggleMenuButton.call(this, n, r), X(i), Pt.checkMenu.call(this), r) {
                            this.options.quality.sort(function(t, n) {
                                var i = e.config.quality.options;
                                return i.indexOf(t) > i.indexOf(n) ? 1 : -1
                            }).forEach(function(t) {
                                Pt.createMenuItem.call(e, {
                                    value: t,
                                    list: i,
                                    type: n,
                                    title: Pt.getLabel.call(e, "quality", t),
                                    badge: function(t) {
                                        var n = Tt.get("qualityBadge.".concat(t), e.config);
                                        return n.length ? Pt.createBadge.call(e, n) : null
                                    }(t)
                                })
                            }), Pt.updateSetting.call(this, n, i)
                        }
                    }
                },
                setCaptionsMenu: function() {
                    var t = this;
                    if (L.element(this.elements.settings.panels.captions)) {
                        var e = "captions",
                            n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            i = It.getTracks.call(this),
                            r = Boolean(i.length);
                        if (Pt.toggleMenuButton.call(this, e, r), X(n), Pt.checkMenu.call(this), r) {
                            var o = i.map(function(e, i) {
                                return {
                                    value: i,
                                    checked: t.captions.toggled && t.currentTrack === i,
                                    title: It.getLabel.call(t, e),
                                    badge: e.language && Pt.createBadge.call(t, e.language.toUpperCase()),
                                    list: n,
                                    type: "language"
                                }
                            });
                            o.unshift({
                                value: -1,
                                checked: !this.captions.toggled,
                                title: Tt.get("disabled", this.config),
                                list: n,
                                type: "language"
                            }), o.forEach(Pt.createMenuItem.bind(this)), Pt.updateSetting.call(this, e, n)
                        }
                    }
                },
                setSpeedMenu: function() {
                    var t = this;
                    if (L.element(this.elements.settings.panels.speed)) {
                        var e = "speed",
                            n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter(function(e) {
                            return e >= t.minimumSpeed && e <= t.maximumSpeed
                        });
                        var i = !L.empty(this.options.speed) && this.options.speed.length > 1;
                        Pt.toggleMenuButton.call(this, e, i), X(n), Pt.checkMenu.call(this), i && (this.options.speed.forEach(function(i) {
                            Pt.createMenuItem.call(t, {
                                value: i,
                                list: n,
                                type: e,
                                title: Pt.getLabel.call(t, "speed", i)
                            })
                        }), Pt.updateSetting.call(this, e, n))
                    }
                },
                checkMenu: function() {
                    var t = this.elements.settings.buttons,
                        e = !L.empty(t) && Object.values(t).some(function(t) {
                            return !t.hidden
                        });
                    K(this.elements.settings.menu, !e)
                },
                focusFirstMenuItem: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.elements.settings.popup.hidden) {
                        var n = t;
                        L.element(n) || (n = Object.values(this.elements.settings.panels).find(function(t) {
                            return !t.hidden
                        }));
                        var i = n.querySelector('[role^="menuitem"]');
                        tt.call(this, i, e)
                    }
                },
                toggleMenu: function(t) {
                    var e = this.elements.settings.popup,
                        n = this.elements.buttons.settings;
                    if (L.element(e) && L.element(n)) {
                        var i = e.hidden,
                            r = i;
                        if (L.boolean(t)) r = t;
                        else if (L.keyboardEvent(t) && "Escape" === t.key) r = !1;
                        else if (L.event(t)) {
                            var o = L.function(t.composedPath) ? t.composedPath()[0] : t.target,
                                s = e.contains(o);
                            if (s || !s && t.target !== n && r) return
                        }
                        n.setAttribute("aria-expanded", r), K(e, !r), G(this.elements.container, this.config.classNames.menu.open, r), r && L.keyboardEvent(t) ? Pt.focusFirstMenuItem.call(this, null, !0) : r || i || tt.call(this, n, L.keyboardEvent(t))
                    }
                },
                getMenuSize: function(t) {
                    var e = t.cloneNode(!0);
                    e.style.position = "absolute", e.style.opacity = 0, e.removeAttribute("hidden"), t.parentNode.appendChild(e);
                    var n = e.scrollWidth,
                        i = e.scrollHeight;
                    return W(e), {
                        width: n,
                        height: i
                    }
                },
                showMenuPanel: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e));
                    if (L.element(i)) {
                        var r = i.parentNode,
                            o = Array.from(r.children).find(function(t) {
                                return !t.hidden
                            });
                        if (nt.transitions && !nt.reducedMotion) {
                            r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
                            var s = Pt.getMenuSize.call(this, i);
                            ot.call(this, r, N, function e(n) {
                                n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", st.call(t, r, N, e))
                            }), r.style.width = "".concat(s.width, "px"), r.style.height = "".concat(s.height, "px")
                        }
                        K(o, !0), K(i, !1), Pt.focusFirstMenuItem.call(this, i, n)
                    }
                },
                setDownloadUrl: function() {
                    var t = this.elements.buttons.download;
                    L.element(t) && t.setAttribute("href", this.download)
                },
                create: function(t) {
                    var e = this,
                        n = Pt.bindMenuItemShortcuts,
                        i = Pt.createButton,
                        r = Pt.createProgress,
                        o = Pt.createRange,
                        s = Pt.createTime,
                        a = Pt.setQualityMenu,
                        l = Pt.setSpeedMenu,
                        u = Pt.showMenuPanel;
                    this.elements.controls = null, L.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                    var c = V("div", U(this.config.selectors.controls.wrapper));
                    this.elements.controls = c;
                    var h = {
                        class: "plyr__controls__item"
                    };
                    return ct(L.array(this.config.controls) ? this.config.controls : []).forEach(function(a) {
                        if ("restart" === a && c.appendChild(i.call(e, "restart", h)), "rewind" === a && c.appendChild(i.call(e, "rewind", h)), "play" === a && c.appendChild(i.call(e, "play", h)), "fast-forward" === a && c.appendChild(i.call(e, "fast-forward", h)), "progress" === a) {
                            var l = V("div", {
                                    class: "".concat(h.class, " plyr__progress__container")
                                }),
                                d = V("div", U(e.config.selectors.progress));
                            if (d.appendChild(o.call(e, "seek", {
                                    id: "plyr-seek-".concat(t.id)
                                })), d.appendChild(r.call(e, "buffer")), e.config.tooltips.seek) {
                                var p = V("span", {
                                    class: e.config.classNames.tooltip
                                }, "00:00");
                                d.appendChild(p), e.elements.display.seekTooltip = p
                            }
                            e.elements.progress = d, l.appendChild(e.elements.progress), c.appendChild(l)
                        }
                        if ("current-time" === a && c.appendChild(s.call(e, "currentTime", h)), "duration" === a && c.appendChild(s.call(e, "duration", h)), "mute" === a || "volume" === a) {
                            var f = e.elements.volume;
                            if (L.element(f) && c.contains(f) || (f = V("div", R({}, h, {
                                    class: "".concat(h.class, " plyr__volume").trim()
                                })), e.elements.volume = f, c.appendChild(f)), "mute" === a && f.appendChild(i.call(e, "mute")), "volume" === a && !j.isIos && !j.isIPadOS) {
                                var m = {
                                    max: 1,
                                    step: .05,
                                    value: e.config.volume
                                };
                                f.appendChild(o.call(e, "volume", R(m, {
                                    id: "plyr-volume-".concat(t.id)
                                })))
                            }
                        }
                        if ("captions" === a && c.appendChild(i.call(e, "captions", h)), "settings" === a && !L.empty(e.config.settings)) {
                            var g = V("div", R({}, h, {
                                class: "".concat(h.class, " plyr__menu").trim(),
                                hidden: ""
                            }));
                            g.appendChild(i.call(e, "settings", {
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-".concat(t.id),
                                "aria-expanded": !1
                            }));
                            var v = V("div", {
                                    class: "plyr__menu__container",
                                    id: "plyr-settings-".concat(t.id),
                                    hidden: ""
                                }),
                                y = V("div"),
                                b = V("div", {
                                    id: "plyr-settings-".concat(t.id, "-home")
                                }),
                                D = V("div", {
                                    role: "menu"
                                });
                            b.appendChild(D), y.appendChild(b), e.elements.settings.panels.home = b, e.config.settings.forEach(function(i) {
                                var r = V("button", R(U(e.config.selectors.buttons.settings), {
                                    type: "button",
                                    class: "".concat(e.config.classNames.control, " ").concat(e.config.classNames.control, "--forward"),
                                    role: "menuitem",
                                    "aria-haspopup": !0,
                                    hidden: ""
                                }));
                                n.call(e, r, i), ot.call(e, r, "click", function() {
                                    u.call(e, i, !1)
                                });
                                var o = V("span", null, Tt.get(i, e.config)),
                                    s = V("span", {
                                        class: e.config.classNames.menu.value
                                    });
                                s.innerHTML = t[i], o.appendChild(s), r.appendChild(o), D.appendChild(r);
                                var a = V("div", {
                                        id: "plyr-settings-".concat(t.id, "-").concat(i),
                                        hidden: ""
                                    }),
                                    l = V("button", {
                                        type: "button",
                                        class: "".concat(e.config.classNames.control, " ").concat(e.config.classNames.control, "--back")
                                    });
                                l.appendChild(V("span", {
                                    "aria-hidden": !0
                                }, Tt.get(i, e.config))), l.appendChild(V("span", {
                                    class: e.config.classNames.hidden
                                }, Tt.get("menuBack", e.config))), ot.call(e, a, "keydown", function(t) {
                                    "ArrowLeft" === t.key && (t.preventDefault(), t.stopPropagation(), u.call(e, "home", !0))
                                }, !1), ot.call(e, l, "click", function() {
                                    u.call(e, "home", !1)
                                }), a.appendChild(l), a.appendChild(V("div", {
                                    role: "menu"
                                })), y.appendChild(a), e.elements.settings.buttons[i] = r, e.elements.settings.panels[i] = a
                            }), v.appendChild(y), g.appendChild(v), c.appendChild(g), e.elements.settings.popup = v, e.elements.settings.menu = g
                        }
                        if ("pip" === a && nt.pip && c.appendChild(i.call(e, "pip", h)), "airplay" === a && nt.airplay && c.appendChild(i.call(e, "airplay", h)), "download" === a) {
                            var w = R({}, h, {
                                element: "a",
                                href: e.download,
                                target: "_blank"
                            });
                            e.isHTML5 && (w.download = "");
                            var _ = e.config.urls.download;
                            !L.url(_) && e.isEmbed && R(w, {
                                icon: "logo-".concat(e.provider),
                                label: e.provider
                            }), c.appendChild(i.call(e, "download", w))
                        }
                        "fullscreen" === a && c.appendChild(i.call(e, "fullscreen", h))
                    }), this.isHTML5 && a.call(this, bt.getQualityOptions.call(this)), l.call(this), c
                },
                inject: function() {
                    var t = this;
                    if (this.config.loadSprite) {
                        var e = Pt.getIconUrl.call(this);
                        e.cors && St(e.url, "sprite-plyr")
                    }
                    this.id = Math.floor(1e4 * Math.random());
                    var n = null;
                    this.elements.controls = null;
                    var i, r = {
                            id: this.id,
                            seektime: this.config.seekTime,
                            title: this.config.title
                        },
                        o = !0;
                    if (L.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), L.element(this.config.controls) || L.string(this.config.controls) ? n = this.config.controls : (n = Pt.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: It.getLabel.call(this)
                        }), o = !1), o && L.string(this.config.controls) && (n = function(t) {
                            var e = t;
                            return Object.entries(r).forEach(function(t) {
                                var n = m(t, 2),
                                    i = n[0],
                                    r = n[1];
                                e = wt(e, "{".concat(i, "}"), r)
                            }), e
                        }(n)), L.string(this.config.selectors.controls.container) && (i = document.querySelector(this.config.selectors.controls.container)), L.element(i) || (i = this.elements.container), i[L.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), L.element(this.elements.controls) || Pt.findElements.call(this), !L.empty(this.elements.buttons)) {
                        var s = function(e) {
                            var n = t.config.classNames.controlPressed;
                            e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return Q(e, n)
                                },
                                set: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    G(e, n, t), e.setAttribute("aria-pressed", t ? "true" : "false")
                                }
                            })
                        };
                        Object.values(this.elements.buttons).filter(Boolean).forEach(function(t) {
                            L.array(t) || L.nodeList(t) ? Array.from(t).filter(Boolean).forEach(s) : s(t)
                        })
                    }
                    if (j.isEdge && I(i), this.config.tooltips.controls) {
                        var a = this.config,
                            l = a.classNames,
                            u = a.selectors,
                            c = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(l.hidden),
                            h = J.call(this, c);
                        Array.from(h).forEach(function(e) {
                            G(e, t.config.classNames.hidden, !1), G(e, t.config.classNames.tooltip, !0)
                        })
                    }
                },
                setMediaMetadata: function() {
                    try {
                        "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                            title: this.config.mediaMetadata.title,
                            artist: this.config.mediaMetadata.artist,
                            album: this.config.mediaMetadata.album,
                            artwork: this.config.mediaMetadata.artwork
                        }))
                    } catch (t) {}
                },
                setMarkers: function() {
                    var t, e, n = this;
                    if (this.duration && !this.elements.markers) {
                        var i = null === (t = this.config.markers) || void 0 === t || null === (e = t.points) || void 0 === e ? void 0 : e.filter(function(t) {
                            var e = t.time;
                            return e > 0 && e < n.duration
                        });
                        if (null != i && i.length) {
                            var r = document.createDocumentFragment(),
                                o = document.createDocumentFragment(),
                                s = null,
                                a = "".concat(this.config.classNames.tooltip, "--visible"),
                                l = function(t) {
                                    return G(s, a, t)
                                };
                            i.forEach(function(t) {
                                var e = V("span", {
                                        class: n.config.classNames.marker
                                    }, ""),
                                    i = t.time / n.duration * 100 + "%";
                                s && (e.addEventListener("mouseenter", function() {
                                    t.label || (s.style.left = i, s.innerHTML = t.label, l(!0))
                                }), e.addEventListener("mouseleave", function() {
                                    l(!1)
                                })), e.addEventListener("click", function() {
                                    n.currentTime = t.time
                                }), e.style.left = i, o.appendChild(e)
                            }), r.appendChild(o), this.config.tooltips.seek || (s = V("span", {
                                class: this.config.classNames.tooltip
                            }, ""), r.appendChild(s)), this.elements.markers = {
                                points: o,
                                tip: s
                            }, this.elements.progress.appendChild(r)
                        }
                    }
                }
            };

            function Lt(t) {
                var e = t;
                if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
                    var n = document.createElement("a");
                    n.href = e, e = n.href
                }
                try {
                    return new URL(e)
                } catch (t) {
                    return null
                }
            }

            function Nt(t) {
                var e = new URLSearchParams;
                return L.object(t) && Object.entries(t).forEach(function(t) {
                    var n = m(t, 2),
                        i = n[0],
                        r = n[1];
                    e.set(i, r)
                }), e
            }
            var It = {
                    setup: function() {
                        if (this.supported.ui)
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !nt.textTracks) L.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pt.setCaptionsMenu.call(this);
                            else {
                                var t, e;
                                if (L.element(this.elements.captions) || (this.elements.captions = V("div", U(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), t = this.elements.captions, e = this.elements.wrapper, L.element(t) && L.element(e) && e.parentNode.insertBefore(t, e.nextSibling)), j.isIE && window.URL) {
                                    var n = this.media.querySelectorAll("track");
                                    Array.from(n).forEach(function(t) {
                                        var e = t.getAttribute("src"),
                                            n = Lt(e);
                                        null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Et(e, "blob").then(function(e) {
                                            t.setAttribute("src", window.URL.createObjectURL(e))
                                        }).catch(function() {
                                            W(t)
                                        })
                                    })
                                }
                                var i = ct((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function(t) {
                                        return t.split("-")[0]
                                    })),
                                    r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                "auto" === r && (r = m(i, 1)[0]);
                                var o = this.storage.get("captions");
                                if (L.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, {
                                        toggled: !1,
                                        active: o,
                                        language: r,
                                        languages: i
                                    }), this.isHTML5) {
                                    var s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                    ot.call(this, this.media.textTracks, s, It.update.bind(this))
                                }
                                setTimeout(It.update.bind(this), 0)
                            }
                    },
                    update: function() {
                        var t = this,
                            e = It.getTracks.call(this, !0),
                            n = this.captions,
                            i = n.active,
                            r = n.language,
                            o = n.meta,
                            s = n.currentTrackNode,
                            a = Boolean(e.find(function(t) {
                                return t.language === r
                            }));
                        this.isHTML5 && this.isVideo && e.filter(function(t) {
                            return !o.get(t)
                        }).forEach(function(e) {
                            t.debug.log("Track added", e), o.set(e, {
                                default: "showing" === e.mode
                            }), "showing" === e.mode && (e.mode = "hidden"), ot.call(t, e, "cuechange", function() {
                                return It.updateCues.call(t)
                            })
                        }), (a && this.language !== r || !e.includes(s)) && (It.setLanguage.call(this, r), It.toggle.call(this, i && a)), this.elements && G(this.elements.container, this.config.classNames.captions.enabled, !L.empty(e)), L.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pt.setCaptionsMenu.call(this)
                    },
                    toggle: function(t) {
                        var e = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (this.supported.ui) {
                            var i = this.captions.toggled,
                                r = this.config.classNames.captions.active,
                                o = L.nullOrUndefined(t) ? !i : t;
                            if (o !== i) {
                                if (n || (this.captions.active = o, this.storage.set({
                                        captions: o
                                    })), !this.language && o && !n) {
                                    var s = It.getTracks.call(this),
                                        a = It.findTrack.call(this, [this.captions.language].concat(u(this.captions.languages)), !0);
                                    return this.captions.language = a.language, void It.set.call(this, s.indexOf(a))
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), G(this.elements.container, r, o), this.captions.toggled = o, Pt.updateSetting.call(this, "captions"), lt.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                            }
                            setTimeout(function() {
                                o && e.captions.toggled && (e.captions.currentTrackNode.mode = "hidden")
                            })
                        }
                    },
                    set: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = It.getTracks.call(this);
                        if (-1 !== t)
                            if (L.number(t))
                                if (t in n) {
                                    if (this.captions.currentTrack !== t) {
                                        this.captions.currentTrack = t;
                                        var i = n[t],
                                            r = (i || {}).language;
                                        this.captions.currentTrackNode = i, Pt.updateSetting.call(this, "captions"), e || (this.captions.language = r, this.storage.set({
                                            language: r
                                        })), this.isVimeo && this.embed.enableTextTrack(r), lt.call(this, this.media, "languagechange")
                                    }
                                    It.toggle.call(this, !0, e), this.isHTML5 && this.isVideo && It.updateCues.call(this)
                                } else this.debug.warn("Track not found", t);
                        else this.debug.warn("Invalid caption argument", t);
                        else It.toggle.call(this, !1, e)
                    },
                    setLanguage: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (L.string(t)) {
                            var n = t.toLowerCase();
                            this.captions.language = n;
                            var i = It.getTracks.call(this),
                                r = It.findTrack.call(this, [n]);
                            It.set.call(this, i.indexOf(r), e)
                        } else this.debug.warn("Invalid language argument", t)
                    },
                    getTracks: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return Array.from((this.media || {}).textTracks || []).filter(function(n) {
                            return !t.isHTML5 || e || t.captions.meta.has(n)
                        }).filter(function(t) {
                            return ["captions", "subtitles"].includes(t.kind)
                        })
                    },
                    findTrack: function(t) {
                        var e, n = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = It.getTracks.call(this),
                            o = function(t) {
                                return Number((n.captions.meta.get(t) || {}).default)
                            },
                            s = Array.from(r).sort(function(t, e) {
                                return o(e) - o(t)
                            });
                        return t.every(function(t) {
                            return !(e = s.find(function(e) {
                                return e.language === t
                            }))
                        }), e || (i ? s[0] : void 0)
                    },
                    getCurrentTrack: function() {
                        return It.getTracks.call(this)[this.currentTrack]
                    },
                    getLabel: function(t) {
                        var e = t;
                        return !L.track(e) && nt.textTracks && this.captions.toggled && (e = It.getCurrentTrack.call(this)), L.track(e) ? L.empty(e.label) ? L.empty(e.language) ? Tt.get("enabled", this.config) : t.language.toUpperCase() : e.label : Tt.get("disabled", this.config)
                    },
                    updateCues: function(t) {
                        if (this.supported.ui)
                            if (L.element(this.elements.captions))
                                if (L.nullOrUndefined(t) || Array.isArray(t)) {
                                    var e = t;
                                    if (!e) {
                                        var n = It.getCurrentTrack.call(this);
                                        e = Array.from((n || {}).activeCues || []).map(function(t) {
                                            return t.getCueAsHTML()
                                        }).map(xt)
                                    }
                                    var i = e.map(function(t) {
                                        return t.trim()
                                    }).join("\n");
                                    if (i !== this.elements.captions.innerHTML) {
                                        X(this.elements.captions);
                                        var r = V("span", U(this.config.selectors.caption));
                                        r.innerHTML = i, this.elements.captions.appendChild(r), lt.call(this, this.media, "cuechange")
                                    }
                                } else this.debug.warn("updateCues: Invalid input", t);
                        else this.debug.warn("No captions element to render to")
                    }
                },
                jt = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    playsinline: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: null,
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                        forced: !1,
                        onChange: null
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: "auto",
                        update: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        pip: "PIP",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad",
                        qualityBadge: {
                            2160: "4K",
                            1440: "HD",
                            1080: "HD",
                            720: "HD",
                            576: "SD",
                            480: "SD"
                        }
                    },
                    urls: {
                        download: null,
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/oembed.json?url={0}"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        download: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            download: '[data-plyr="download"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress__buffer",
                            loop: ".plyr__progress__loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        caption: ".plyr__caption"
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        posterEnabled: "plyr__poster-enabled",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        controlPressed: "plyr__control--pressed",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        marker: "plyr__progress__marker",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        display: {
                            time: "plyr__time"
                        },
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        previewThumbnails: {
                            thumbContainer: "plyr__preview-thumb",
                            thumbContainerShown: "plyr__preview-thumb--is-shown",
                            imageContainer: "plyr__preview-thumb__image-container",
                            timeContainer: "plyr__preview-thumb__time-container",
                            scrubbingContainer: "plyr__preview-scrubbing",
                            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                        }
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id",
                            hash: "data-plyr-embed-hash"
                        }
                    },
                    ads: {
                        enabled: !1,
                        publisherId: "",
                        tagUrl: ""
                    },
                    previewThumbnails: {
                        enabled: !1,
                        src: ""
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1,
                        customControls: !0,
                        referrerPolicy: null,
                        premium: !1
                    },
                    youtube: {
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        customControls: !0,
                        noCookie: !1
                    },
                    mediaMetadata: {
                        title: "",
                        artist: "",
                        album: "",
                        artwork: []
                    },
                    markers: {
                        enabled: !1,
                        points: []
                    }
                },
                Bt = "picture-in-picture",
                Rt = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                },
                qt = "video",
                zt = function() {},
                Vt = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        c(this, t), this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
                    }
                    return d(t, [{
                        key: "log",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.log, console) : zt
                        }
                    }, {
                        key: "warn",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.warn, console) : zt
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.error, console) : zt
                        }
                    }]), t
                }(),
                Ht = function() {
                    function e(n) {
                        var i = this;
                        c(this, e), t(this, "onChange", function() {
                            if (i.supported) {
                                var t = i.player.elements.buttons.fullscreen;
                                L.element(t) && (t.pressed = i.active);
                                var e = i.target === i.player.media ? i.target : i.player.elements.container;
                                lt.call(i.player, e, i.active ? "enterfullscreen" : "exitfullscreen", !0)
                            }
                        }), t(this, "toggleFallback", function() {
                            var t, e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (n ? i.scrollPosition = {
                                    x: null !== (t = window.scrollX) && void 0 !== t ? t : 0,
                                    y: null !== (e = window.scrollY) && void 0 !== e ? e : 0
                                } : window.scrollTo(i.scrollPosition.x, i.scrollPosition.y), document.body.style.overflow = n ? "hidden" : "", G(i.target, i.player.config.classNames.fullscreen.fallback, n), j.isIos) {
                                var r = document.head.querySelector('meta[name="viewport"]'),
                                    o = "viewport-fit=cover";
                                r || (r = document.createElement("meta")).setAttribute("name", "viewport");
                                var s = L.string(r.content) && r.content.includes(o);
                                n ? (i.cleanupViewport = !s, s || (r.content += ",".concat(o))) : i.cleanupViewport && (r.content = r.content.split(",").filter(function(t) {
                                    return t.trim() !== o
                                }).join(","))
                            }
                            i.onChange()
                        }), t(this, "trapFocus", function(t) {
                            if (!j.isIos && !j.isIPadOS && i.active && "Tab" === t.key) {
                                var e = document.activeElement,
                                    n = J.call(i.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                    r = m(n, 1)[0],
                                    o = n[n.length - 1];
                                e !== o || t.shiftKey ? e === r && t.shiftKey && (o.focus(), t.preventDefault()) : (r.focus(), t.preventDefault())
                            }
                        }), t(this, "update", function() {
                            var t;
                            i.supported ? (t = i.forceFallback ? "Fallback (forced)" : e.nativeSupported ? "Native" : "Fallback", i.player.debug.log("".concat(t, " fullscreen enabled"))) : i.player.debug.log("Fullscreen not supported and fallback disabled");
                            G(i.player.elements.container, i.player.config.classNames.fullscreen.enabled, i.supported)
                        }), t(this, "enter", function() {
                            i.supported && (j.isIos && i.player.config.fullscreen.iosNative ? i.player.isVimeo ? i.player.embed.requestFullscreen() : i.target.webkitEnterFullscreen() : !e.nativeSupported || i.forceFallback ? i.toggleFallback(!0) : i.prefix ? L.empty(i.prefix) || i.target["".concat(i.prefix, "Request").concat(i.property)]() : i.target.requestFullscreen({
                                navigationUI: "hide"
                            }))
                        }), t(this, "exit", function() {
                            if (i.supported)
                                if (j.isIos && i.player.config.fullscreen.iosNative) i.player.isVimeo ? i.player.embed.exitFullscreen() : i.target.webkitEnterFullscreen(), ut(i.player.play());
                                else if (!e.nativeSupported || i.forceFallback) i.toggleFallback(!1);
                            else if (i.prefix) {
                                if (!L.empty(i.prefix)) {
                                    var t = "moz" === i.prefix ? "Cancel" : "Exit";
                                    document["".concat(i.prefix).concat(t).concat(i.property)]()
                                }
                            } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                        }), t(this, "toggle", function() {
                            i.active ? i.exit() : i.enter()
                        }), this.player = n, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function(t, e) {
                            return (Element.prototype.closest || function() {
                                var t = this;
                                do {
                                    if ($.matches(t, e)) return t;
                                    t = t.parentElement || t.parentNode
                                } while (null !== t && 1 === t.nodeType);
                                return null
                            }).call(t, e)
                        }(this.player.elements.container, n.config.fullscreen.container), ot.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function() {
                            i.onChange()
                        }), ot.call(this.player, this.player.elements.container, "dblclick", function(t) {
                            L.element(i.player.elements.controls) && i.player.elements.controls.contains(t.target) || i.player.listeners.proxy(t, i.toggle, "fullscreen")
                        }), ot.call(this, this.player.elements.container, "keydown", function(t) {
                            return i.trapFocus(t)
                        }), this.update()
                    }
                    return d(e, [{
                        key: "useNative",
                        get: function() {
                            return e.nativeSupported && !this.forceFallback
                        }
                    }, {
                        key: "supported",
                        get: function() {
                            return [this.player.config.fullscreen.enabled, this.player.isVideo, e.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || e.nativeSupported || !j.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean)
                        }
                    }, {
                        key: "active",
                        get: function() {
                            if (!this.supported) return !1;
                            if (!e.nativeSupported || this.forceFallback) return Q(this.target, this.player.config.classNames.fullscreen.fallback);
                            var t = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
                            return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                        }
                    }, {
                        key: "target",
                        get: function() {
                            var t;
                            return j.isIos && this.player.config.fullscreen.iosNative ? this.player.media : null !== (t = this.player.elements.fullscreen) && void 0 !== t ? t : this.player.elements.container
                        }
                    }], [{
                        key: "nativeSupported",
                        get: function() {
                            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                        }
                    }, {
                        key: "prefix",
                        get: function() {
                            if (L.function(document.exitFullscreen)) return "";
                            var t = "";
                            return ["webkit", "moz", "ms"].some(function(e) {
                                return !(!L.function(document["".concat(e, "ExitFullscreen")]) && !L.function(document["".concat(e, "CancelFullScreen")]) || (t = e, 0))
                            }), t
                        }
                    }, {
                        key: "property",
                        get: function() {
                            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                        }
                    }]), e
                }();

            function Wt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return new Promise(function(n, i) {
                    var r = new Image,
                        o = function() {
                            delete r.onload, delete r.onerror, (r.naturalWidth >= e ? n : i)(r)
                        };
                    Object.assign(r, {
                        onload: o,
                        onerror: o,
                        src: t
                    })
                })
            }
            var Xt = {
                    addStyleHook: function() {
                        G(this.elements.container, this.config.selectors.container.replace(".", ""), !0), G(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build: function() {
                        var t = this;
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Xt.toggleNativeControls.call(this, !0);
                        L.element(this.elements.controls) || (Pt.inject.call(this), this.listeners.controls()), Xt.toggleNativeControls.call(this), this.isHTML5 && It.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pt.updateVolume.call(this), Pt.timeUpdate.call(this), Pt.durationUpdate.call(this), Xt.checkPlaying.call(this), G(this.elements.container, this.config.classNames.pip.supported, nt.pip && this.isHTML5 && this.isVideo), G(this.elements.container, this.config.classNames.airplay.supported, nt.airplay && this.isHTML5), G(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
                            lt.call(t, t.media, "ready")
                        }, 0), Xt.setTitle.call(this), this.poster && Xt.setPoster.call(this, this.poster, !1).catch(function() {}), this.config.duration && Pt.durationUpdate.call(this), this.config.mediaMetadata && Pt.setMediaMetadata.call(this)
                    },
                    setTitle: function() {
                        var t = Tt.get("play", this.config);
                        if (L.string(this.config.title) && !L.empty(this.config.title) && (t += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function(e) {
                                e.setAttribute("aria-label", t)
                            }), this.isEmbed) {
                            var e = Z.call(this, "iframe");
                            if (!L.element(e)) return;
                            var n = L.empty(this.config.title) ? "video" : this.config.title,
                                i = Tt.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", n))
                        }
                    },
                    togglePoster: function(t) {
                        G(this.elements.container, this.config.classNames.posterEnabled, t)
                    },
                    setPoster: function(t) {
                        var e = this;
                        return (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", t), this.elements.poster.removeAttribute("hidden"), function() {
                            var t = this;
                            return new Promise(function(e) {
                                return t.ready ? setTimeout(e, 0) : ot.call(t, t.elements.container, "ready", e)
                            }).then(function() {})
                        }.call(this).then(function() {
                            return Wt(t)
                        }).catch(function(n) {
                            throw t === e.poster && Xt.togglePoster.call(e, !1), n
                        }).then(function() {
                            if (t !== e.poster) throw new Error("setPoster cancelled by later call to setPoster")
                        }).then(function() {
                            return Object.assign(e.elements.poster.style, {
                                backgroundImage: "url('".concat(t, "')"),
                                backgroundSize: ""
                            }), Xt.togglePoster.call(e, !0), t
                        }))
                    },
                    checkPlaying: function(t) {
                        var e = this;
                        G(this.elements.container, this.config.classNames.playing, this.playing), G(this.elements.container, this.config.classNames.paused, this.paused), G(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function(t) {
                            Object.assign(t, {
                                pressed: e.playing
                            }), t.setAttribute("aria-label", Tt.get(e.playing ? "pause" : "play", e.config))
                        }), L.event(t) && "timeupdate" === t.type || Xt.toggleControls.call(this)
                    },
                    checkLoading: function(t) {
                        var e = this;
                        this.loading = ["stalled", "waiting"].includes(t.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
                            G(e.elements.container, e.config.classNames.loading, e.loading), Xt.toggleControls.call(e)
                        }, this.loading ? 250 : 0)
                    },
                    toggleControls: function(t) {
                        var e = this.elements.controls;
                        if (e && this.config.hideControls) {
                            var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(t || this.loading || this.paused || e.pressed || e.hover || n))
                        }
                    },
                    migrateStyles: function() {
                        var t = this;
                        Object.values(f({}, this.media.style)).filter(function(t) {
                            return !L.empty(t) && L.string(t) && t.startsWith("--plyr")
                        }).forEach(function(e) {
                            t.elements.container.style.setProperty(e, t.media.style.getPropertyValue(e)), t.media.style.removeProperty(e)
                        }), L.empty(this.media.style) && this.media.removeAttribute("style")
                    }
                },
                Yt = function() {
                    function e(n) {
                        var i = this;
                        c(this, e), t(this, "firstTouch", function() {
                            var t = i.player,
                                e = t.elements;
                            t.touch = !0, G(e.container, t.config.classNames.isTouch, !0)
                        }), t(this, "global", function() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                e = i.player;
                            e.config.keyboard.global && rt.call(e, window, "keydown keyup", i.handleKey, t, !1), rt.call(e, document.body, "click", i.toggleMenu, t), at.call(e, document.body, "touchstart", i.firstTouch)
                        }), t(this, "container", function() {
                            var t = i.player,
                                e = t.config,
                                n = t.elements,
                                r = t.timers;
                            !e.keyboard.global && e.keyboard.focused && ot.call(t, n.container, "keydown keyup", i.handleKey, !1), ot.call(t, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function(e) {
                                var i = n.controls;
                                i && "enterfullscreen" === e.type && (i.pressed = !1, i.hover = !1);
                                var o = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(e.type) && (Xt.toggleControls.call(t, !0), o = t.touch ? 3e3 : 2e3), clearTimeout(r.controls), r.controls = setTimeout(function() {
                                    return Xt.toggleControls.call(t, !1)
                                }, o)
                            });
                            var o = function() {
                                    if (t.isVimeo && !t.config.vimeo.premium) {
                                        var e = n.wrapper,
                                            i = t.fullscreen.active,
                                            r = m(gt.call(t), 2),
                                            o = r[0],
                                            s = r[1],
                                            a = dt("aspect-ratio: ".concat(o, " / ").concat(s));
                                        if (i) {
                                            var l = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                                                u = l[1],
                                                c = l[0] / u > o / s;
                                            a ? (e.style.width = c ? "auto" : "100%", e.style.height = c ? "100%" : "auto") : (e.style.maxWidth = c ? u / s * o + "px" : null, e.style.margin = c ? "0 auto" : null)
                                        } else a ? (e.style.width = null, e.style.height = null) : (e.style.maxWidth = null, e.style.margin = null)
                                    }
                                },
                                s = function() {
                                    clearTimeout(r.resized), r.resized = setTimeout(o, 50)
                                };
                            ot.call(t, n.container, "enterfullscreen exitfullscreen", function(e) {
                                t.fullscreen.target === n.container && (!t.isEmbed && L.empty(t.config.ratio) || (o(), ("enterfullscreen" === e.type ? ot : st).call(t, window, "resize", s)))
                            })
                        }), t(this, "media", function() {
                            var t = i.player,
                                e = t.elements;
                            if (ot.call(t, t.media, "timeupdate seeking seeked", function(e) {
                                    return Pt.timeUpdate.call(t, e)
                                }), ot.call(t, t.media, "durationchange loadeddata loadedmetadata", function(e) {
                                    return Pt.durationUpdate.call(t, e)
                                }), ot.call(t, t.media, "ended", function() {
                                    t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                                }), ot.call(t, t.media, "progress playing seeking seeked", function(e) {
                                    return Pt.updateProgress.call(t, e)
                                }), ot.call(t, t.media, "volumechange", function(e) {
                                    return Pt.updateVolume.call(t, e)
                                }), ot.call(t, t.media, "playing play pause ended emptied timeupdate", function(e) {
                                    return Xt.checkPlaying.call(t, e)
                                }), ot.call(t, t.media, "waiting canplay seeked playing", function(e) {
                                    return Xt.checkLoading.call(t, e)
                                }), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                var n = Z.call(t, ".".concat(t.config.classNames.video));
                                if (!L.element(n)) return;
                                ot.call(t, e.container, "click", function(r) {
                                    ([e.container, n].includes(r.target) || n.contains(r.target)) && (t.touch && t.config.hideControls || (t.ended ? (i.proxy(r, t.restart, "restart"), i.proxy(r, function() {
                                        ut(t.play())
                                    }, "play")) : i.proxy(r, function() {
                                        ut(t.togglePlay())
                                    }, "play")))
                                })
                            }
                            t.supported.ui && t.config.disableContextMenu && ot.call(t, e.wrapper, "contextmenu", function(t) {
                                t.preventDefault()
                            }, !1), ot.call(t, t.media, "volumechange", function() {
                                t.storage.set({
                                    volume: t.volume,
                                    muted: t.muted
                                })
                            }), ot.call(t, t.media, "ratechange", function() {
                                Pt.updateSetting.call(t, "speed"), t.storage.set({
                                    speed: t.speed
                                })
                            }), ot.call(t, t.media, "qualitychange", function(e) {
                                Pt.updateSetting.call(t, "quality", null, e.detail.quality)
                            }), ot.call(t, t.media, "ready qualitychange", function() {
                                Pt.setDownloadUrl.call(t)
                            });
                            var r = t.config.events.concat(["keyup", "keydown"]).join(" ");
                            ot.call(t, t.media, r, function(n) {
                                var i = n.detail,
                                    r = void 0 === i ? {} : i;
                                "error" === n.type && (r = t.media.error), lt.call(t, e.container, n.type, !0, r)
                            })
                        }), t(this, "proxy", function(t, e, n) {
                            var r = i.player,
                                o = r.config.listeners[n],
                                s = !0;
                            L.function(o) && (s = o.call(r, t)), !1 !== s && L.function(e) && e.call(r, t)
                        }), t(this, "bind", function(t, e, n, r) {
                            var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                s = i.player,
                                a = s.config.listeners[r],
                                l = L.function(a);
                            ot.call(s, t, e, function(t) {
                                return i.proxy(t, n, r)
                            }, o && !l)
                        }), t(this, "controls", function() {
                            var t = i.player,
                                e = t.elements,
                                n = j.isIE ? "change" : "input";
                            if (e.buttons.play && Array.from(e.buttons.play).forEach(function(e) {
                                    i.bind(e, "click", function() {
                                        ut(t.togglePlay())
                                    }, "play")
                                }), i.bind(e.buttons.restart, "click", t.restart, "restart"), i.bind(e.buttons.rewind, "click", function() {
                                    t.lastSeekTime = Date.now(), t.rewind()
                                }, "rewind"), i.bind(e.buttons.fastForward, "click", function() {
                                    t.lastSeekTime = Date.now(), t.forward()
                                }, "fastForward"), i.bind(e.buttons.mute, "click", function() {
                                    t.muted = !t.muted
                                }, "mute"), i.bind(e.buttons.captions, "click", function() {
                                    return t.toggleCaptions()
                                }), i.bind(e.buttons.download, "click", function() {
                                    lt.call(t, t.media, "download")
                                }, "download"), i.bind(e.buttons.fullscreen, "click", function() {
                                    t.fullscreen.toggle()
                                }, "fullscreen"), i.bind(e.buttons.pip, "click", function() {
                                    t.pip = "toggle"
                                }, "pip"), i.bind(e.buttons.airplay, "click", t.airplay, "airplay"), i.bind(e.buttons.settings, "click", function(e) {
                                    e.stopPropagation(), e.preventDefault(), Pt.toggleMenu.call(t, e)
                                }, null, !1), i.bind(e.buttons.settings, "keyup", function(e) {
                                    [" ", "Enter"].includes(e.key) && ("Enter" !== e.key ? (e.preventDefault(), e.stopPropagation(), Pt.toggleMenu.call(t, e)) : Pt.focusFirstMenuItem.call(t, null, !0))
                                }, null, !1), i.bind(e.settings.menu, "keydown", function(e) {
                                    "Escape" === e.key && Pt.toggleMenu.call(t, e)
                                }), i.bind(e.inputs.seek, "mousedown mousemove", function(t) {
                                    var n = e.progress.getBoundingClientRect(),
                                        i = 100 / n.width * (t.pageX - n.left);
                                    t.currentTarget.setAttribute("seek-value", i)
                                }), i.bind(e.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function(e) {
                                    var n = e.currentTarget,
                                        i = "play-on-seeked";
                                    if (!L.keyboardEvent(e) || ["ArrowLeft", "ArrowRight"].includes(e.key)) {
                                        t.lastSeekTime = Date.now();
                                        var r = n.hasAttribute(i),
                                            o = ["mouseup", "touchend", "keyup"].includes(e.type);
                                        r && o ? (n.removeAttribute(i), ut(t.play())) : !o && t.playing && (n.setAttribute(i, ""), t.pause())
                                    }
                                }), j.isIos) {
                                var r = J.call(t, 'input[type="range"]');
                                Array.from(r).forEach(function(t) {
                                    return i.bind(t, n, function(t) {
                                        return I(t.target)
                                    })
                                })
                            }
                            i.bind(e.inputs.seek, n, function(e) {
                                var n = e.currentTarget,
                                    i = n.getAttribute("seek-value");
                                L.empty(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                            }, "seek"), i.bind(e.progress, "mouseenter mouseleave mousemove", function(e) {
                                return Pt.updateSeekTooltip.call(t, e)
                            }), i.bind(e.progress, "mousemove touchmove", function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startMove(e)
                            }), i.bind(e.progress, "mouseleave touchend click", function() {
                                var e = t.previewThumbnails;
                                e && e.loaded && e.endMove(!1, !0)
                            }), i.bind(e.progress, "mousedown touchstart", function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startScrubbing(e)
                            }), i.bind(e.progress, "mouseup touchend", function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.endScrubbing(e)
                            }), j.isWebKit && Array.from(J.call(t, 'input[type="range"]')).forEach(function(e) {
                                i.bind(e, "input", function(e) {
                                    return Pt.updateRangeFill.call(t, e.target)
                                })
                            }), t.config.toggleInvert && !L.element(e.display.duration) && i.bind(e.display.currentTime, "click", function() {
                                0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, Pt.timeUpdate.call(t))
                            }), i.bind(e.inputs.volume, n, function(e) {
                                t.volume = e.target.value
                            }, "volume"), i.bind(e.controls, "mouseenter mouseleave", function(n) {
                                e.controls.hover = !t.touch && "mouseenter" === n.type
                            }), e.fullscreen && Array.from(e.fullscreen.children).filter(function(t) {
                                return !t.contains(e.container)
                            }).forEach(function(n) {
                                i.bind(n, "mouseenter mouseleave", function(n) {
                                    e.controls && (e.controls.hover = !t.touch && "mouseenter" === n.type)
                                })
                            }), i.bind(e.controls, "mousedown mouseup touchstart touchend touchcancel", function(t) {
                                e.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                            }), i.bind(e.controls, "focusin", function() {
                                var n = t.config,
                                    r = t.timers;
                                G(e.controls, n.classNames.noTransition, !0), Xt.toggleControls.call(t, !0), setTimeout(function() {
                                    G(e.controls, n.classNames.noTransition, !1)
                                }, 0);
                                var o = i.touch ? 3e3 : 4e3;
                                clearTimeout(r.controls), r.controls = setTimeout(function() {
                                    return Xt.toggleControls.call(t, !1)
                                }, o)
                            }), i.bind(e.inputs.volume, "wheel", function(e) {
                                var n = e.webkitDirectionInvertedFromDevice,
                                    i = m([e.deltaX, -e.deltaY].map(function(t) {
                                        return n ? -t : t
                                    }), 2),
                                    r = i[0],
                                    o = i[1],
                                    s = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
                                t.increaseVolume(s / 50);
                                var a = t.media.volume;
                                (1 === s && a < 1 || -1 === s && a > 0) && e.preventDefault()
                            }, "volume", !1)
                        }), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }
                    return d(e, [{
                        key: "handleKey",
                        value: function(t) {
                            var e, n = this.player,
                                i = n.elements,
                                r = t.key,
                                o = t.type,
                                s = t.altKey,
                                a = t.ctrlKey,
                                l = t.metaKey,
                                u = t.shiftKey,
                                c = "keydown" === o,
                                h = c && r === this.lastKey;
                            if (!(s || a || l || u) && r)
                                if (c) {
                                    var d = document.activeElement;
                                    if (L.element(d)) {
                                        var p = n.config.selectors.editable;
                                        if (d !== i.inputs.seek && $(d, p)) return;
                                        if (" " === t.key && $(d, 'button, [role^="menuitem"]')) return
                                    }
                                    switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(r) && (t.preventDefault(), t.stopPropagation()), r) {
                                        case "0":
                                        case "1":
                                        case "2":
                                        case "3":
                                        case "4":
                                        case "5":
                                        case "6":
                                        case "7":
                                        case "8":
                                        case "9":
                                            h || (e = parseInt(r, 10), n.currentTime = n.duration / 10 * e);
                                            break;
                                        case " ":
                                        case "k":
                                            h || ut(n.togglePlay());
                                            break;
                                        case "ArrowUp":
                                            n.increaseVolume(.1);
                                            break;
                                        case "ArrowDown":
                                            n.decreaseVolume(.1);
                                            break;
                                        case "m":
                                            h || (n.muted = !n.muted);
                                            break;
                                        case "ArrowRight":
                                            n.forward();
                                            break;
                                        case "ArrowLeft":
                                            n.rewind();
                                            break;
                                        case "f":
                                            n.fullscreen.toggle();
                                            break;
                                        case "c":
                                            h || n.toggleCaptions();
                                            break;
                                        case "l":
                                            n.loop = !n.loop
                                    }
                                    "Escape" === r && !n.fullscreen.usingNative && n.fullscreen.active && n.fullscreen.toggle(), this.lastKey = r
                                } else this.lastKey = null
                        }
                    }, {
                        key: "toggleMenu",
                        value: function(t) {
                            Pt.toggleMenu.call(this.player, t)
                        }
                    }]), e
                }();
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i || "undefined" != typeof self && self;
            var Ut = function(t, e) {
                return function(t, e) {
                    t.exports = function() {
                        var t = function() {},
                            e = {},
                            n = {},
                            i = {};

                        function r(t, e) {
                            if (t) {
                                var r = i[t];
                                if (n[t] = e, r)
                                    for (; r.length;) r[0](t, e), r.splice(0, 1)
                            }
                        }

                        function o(e, n) {
                            e.call && (e = {
                                success: e
                            }), n.length ? (e.error || t)(n) : (e.success || t)(e)
                        }

                        function s(e, n, i, r) {
                            var o, a, l = document,
                                u = i.async,
                                c = (i.numRetries || 0) + 1,
                                h = i.before || t,
                                d = e.replace(/[\?|#].*$/, ""),
                                p = e.replace(/^(css|img)!/, "");
                            r = r || 0, /(^css!|\.css$)/.test(d) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = p, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (a = l.createElement("img")).src = p : ((a = l.createElement("script")).src = e, a.async = void 0 === u || u), a.onload = a.onerror = a.onbeforeload = function(t) {
                                var l = t.type[0];
                                if (o) try {
                                    a.sheet.cssText.length || (l = "e")
                                } catch (t) {
                                    18 != t.code && (l = "e")
                                }
                                if ("e" == l) {
                                    if ((r += 1) < c) return s(e, n, i, r)
                                } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                                n(e, l, t.defaultPrevented)
                            }, !1 !== h(e, a) && l.head.appendChild(a)
                        }

                        function a(t, e, n) {
                            var i, r, o = (t = t.push ? t : [t]).length,
                                a = o,
                                l = [];
                            for (i = function(t, n, i) {
                                    if ("e" == n && l.push(t), "b" == n) {
                                        if (!i) return;
                                        l.push(t)
                                    }--o || e(l)
                                }, r = 0; r < a; r++) s(t[r], i, n)
                        }

                        function l(t, n, i) {
                            var s, l;
                            if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                                if (s in e) throw "LoadJS";
                                e[s] = !0
                            }

                            function u(e, n) {
                                a(t, function(t) {
                                    o(l, t), e && o({
                                        success: e,
                                        error: n
                                    }, t), r(s, t)
                                }, l)
                            }
                            if (l.returnPromise) return new Promise(u);
                            u()
                        }
                        return l.ready = function(t, e) {
                            return function(t, e) {
                                var r, o, s, a = [],
                                    l = (t = t.push ? t : [t]).length,
                                    u = l;
                                for (r = function(t, n) {
                                        n.length && a.push(t), --u || e(a)
                                    }; l--;) o = t[l], (s = n[o]) ? r(o, s) : (i[o] = i[o] || []).push(r)
                            }(t, function(t) {
                                o(e, t)
                            }), l
                        }, l.done = function(t) {
                            r(t, [])
                        }, l.reset = function() {
                            e = {}, n = {}, i = {}
                        }, l.isDefined = function(t) {
                            return t in e
                        }, l
                    }()
                }(e = {
                    exports: {}
                }), e.exports
            }();

            function Kt(t) {
                return new Promise(function(e, n) {
                    Ut(t, {
                        success: e,
                        error: n
                    })
                })
            }

            function Gt(t) {
                t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, lt.call(this, this.media, t ? "play" : "pause"))
            }
            var Qt = {
                setup: function() {
                    var t = this;
                    G(t.elements.wrapper, t.config.classNames.embed, !0), t.options.speed = t.config.speed.options, vt.call(t), L.object(window.Vimeo) ? Qt.ready.call(t) : Kt(t.config.urls.vimeo.sdk).then(function() {
                        Qt.ready.call(t)
                    }).catch(function(e) {
                        t.debug.warn("Vimeo SDK (player.js) failed to load", e)
                    })
                },
                ready: function() {
                    var t = this,
                        e = this,
                        n = e.config.vimeo,
                        i = n.premium,
                        r = n.referrerPolicy,
                        o = l(n, a),
                        s = e.media.getAttribute("src"),
                        u = "";
                    L.empty(s) ? (s = e.media.getAttribute(e.config.attributes.embed.id), u = e.media.getAttribute(e.config.attributes.embed.hash)) : u = function(t) {
                        var e = s.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                        return e && 5 === e.length ? e[4] : null
                    }();
                    var c = u ? {
                        h: u
                    } : {};
                    i && Object.assign(o, {
                        controls: !1,
                        sidedock: !1
                    });
                    var h, d = Nt(f(f({
                            loop: e.config.loop.active,
                            autoplay: e.autoplay,
                            muted: e.muted,
                            gesture: "media",
                            playsinline: e.config.playsinline
                        }, c), o)),
                        p = (h = s, L.empty(h) ? null : L.number(Number(h)) ? h : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : h),
                        g = V("iframe"),
                        v = Dt(e.config.urls.vimeo.iframe, p, d);
                    if (g.setAttribute("src", v), g.setAttribute("allowfullscreen", ""), g.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), L.empty(r) || g.setAttribute("referrerPolicy", r), i || !n.customControls) g.setAttribute("data-poster", e.poster), e.media = Y(g, e.media);
                    else {
                        var y = V("div", {
                            class: e.config.classNames.embedContainer,
                            "data-poster": e.poster
                        });
                        y.appendChild(g), e.media = Y(y, e.media)
                    }
                    n.customControls || Et(Dt(e.config.urls.vimeo.api, v)).then(function(t) {
                        !L.empty(t) && t.thumbnail_url && Xt.setPoster.call(e, t.thumbnail_url).catch(function() {})
                    }), e.embed = new window.Vimeo.Player(g, {
                        autopause: e.config.autopause,
                        muted: e.muted
                    }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = function() {
                        return Gt.call(e, !0), e.embed.play()
                    }, e.media.pause = function() {
                        return Gt.call(e, !1), e.embed.pause()
                    }, e.media.stop = function() {
                        e.pause(), e.currentTime = 0
                    };
                    var b = e.media.currentTime;
                    Object.defineProperty(e.media, "currentTime", {
                        get: function() {
                            return b
                        },
                        set: function(t) {
                            var n = e.embed,
                                i = e.media,
                                r = e.paused,
                                o = e.volume,
                                s = r && !n.hasPlayed;
                            i.seeking = !0, lt.call(e, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then(function() {
                                return n.setCurrentTime(t)
                            }).then(function() {
                                return s && n.pause()
                            }).then(function() {
                                return s && n.setVolume(o)
                            }).catch(function() {})
                        }
                    });
                    var D = e.config.speed.selected;
                    Object.defineProperty(e.media, "playbackRate", {
                        get: function() {
                            return D
                        },
                        set: function(t) {
                            e.embed.setPlaybackRate(t).then(function() {
                                D = t, lt.call(e, e.media, "ratechange")
                            }).catch(function() {
                                e.options.speed = [1]
                            })
                        }
                    });
                    var w = e.config.volume;
                    Object.defineProperty(e.media, "volume", {
                        get: function() {
                            return w
                        },
                        set: function(t) {
                            e.embed.setVolume(t).then(function() {
                                w = t, lt.call(e, e.media, "volumechange")
                            })
                        }
                    });
                    var _ = e.config.muted;
                    Object.defineProperty(e.media, "muted", {
                        get: function() {
                            return _
                        },
                        set: function(t) {
                            var n = !!L.boolean(t) && t;
                            e.embed.setMuted(!!n || e.config.muted).then(function() {
                                _ = n, lt.call(e, e.media, "volumechange")
                            })
                        }
                    });
                    var x, C = e.config.loop;
                    Object.defineProperty(e.media, "loop", {
                        get: function() {
                            return C
                        },
                        set: function(t) {
                            var n = L.boolean(t) ? t : e.config.loop.active;
                            e.embed.setLoop(n).then(function() {
                                C = n
                            })
                        }
                    }), e.embed.getVideoUrl().then(function(t) {
                        x = t, Pt.setDownloadUrl.call(e)
                    }).catch(function(e) {
                        t.debug.warn(e)
                    }), Object.defineProperty(e.media, "currentSrc", {
                        get: function() {
                            return x
                        }
                    }), Object.defineProperty(e.media, "ended", {
                        get: function() {
                            return e.currentTime === e.duration
                        }
                    }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(function(n) {
                        var i = m(n, 2),
                            r = i[0],
                            o = i[1];
                        e.embed.ratio = yt(r, o), vt.call(t)
                    }), e.embed.setAutopause(e.config.autopause).then(function(t) {
                        e.config.autopause = t
                    }), e.embed.getVideoTitle().then(function(n) {
                        e.config.title = n, Xt.setTitle.call(t)
                    }), e.embed.getCurrentTime().then(function(t) {
                        b = t, lt.call(e, e.media, "timeupdate")
                    }), e.embed.getDuration().then(function(t) {
                        e.media.duration = t, lt.call(e, e.media, "durationchange")
                    }), e.embed.getTextTracks().then(function(t) {
                        e.media.textTracks = t, It.setup.call(e)
                    }), e.embed.on("cuechange", function(t) {
                        var n = t.cues,
                            i = (void 0 === n ? [] : n).map(function(t) {
                                return function(t) {
                                    var e = document.createDocumentFragment(),
                                        n = document.createElement("div");
                                    return e.appendChild(n), n.innerHTML = t, e.firstChild.innerText
                                }(t.text)
                            });
                        It.updateCues.call(e, i)
                    }), e.embed.on("loaded", function() {
                        e.embed.getPaused().then(function(t) {
                            Gt.call(e, !t), t || lt.call(e, e.media, "playing")
                        }), L.element(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
                    }), e.embed.on("bufferstart", function() {
                        lt.call(e, e.media, "waiting")
                    }), e.embed.on("bufferend", function() {
                        lt.call(e, e.media, "playing")
                    }), e.embed.on("play", function() {
                        Gt.call(e, !0), lt.call(e, e.media, "playing")
                    }), e.embed.on("pause", function() {
                        Gt.call(e, !1)
                    }), e.embed.on("timeupdate", function(t) {
                        e.media.seeking = !1, b = t.seconds, lt.call(e, e.media, "timeupdate")
                    }), e.embed.on("progress", function(t) {
                        e.media.buffered = t.percent, lt.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && lt.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(function(t) {
                            t !== e.media.duration && (e.media.duration = t, lt.call(e, e.media, "durationchange"))
                        })
                    }), e.embed.on("seeked", function() {
                        e.media.seeking = !1, lt.call(e, e.media, "seeked")
                    }), e.embed.on("ended", function() {
                        e.media.paused = !0, lt.call(e, e.media, "ended")
                    }), e.embed.on("error", function(t) {
                        e.media.error = t, lt.call(e, e.media, "error")
                    }), n.customControls && setTimeout(function() {
                        return Xt.build.call(e)
                    }, 0)
                }
            };

            function $t(t) {
                t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, lt.call(this, this.media, t ? "play" : "pause"))
            }
            var Jt = {
                    setup: function() {
                        var t = this;
                        if (G(this.elements.wrapper, this.config.classNames.embed, !0), L.object(window.YT) && L.function(window.YT.Player)) Jt.ready.call(this);
                        else {
                            var e = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = function() {
                                L.function(e) && e(), Jt.ready.call(t)
                            }, Kt(this.config.urls.youtube.sdk).catch(function(e) {
                                t.debug.warn("YouTube API failed to load", e)
                            })
                        }
                    },
                    getTitle: function(t) {
                        var e = this;
                        Et(Dt(this.config.urls.youtube.api, t)).then(function(t) {
                            if (L.object(t)) {
                                var n = t.title,
                                    i = t.height,
                                    r = t.width;
                                e.config.title = n, Xt.setTitle.call(e), e.embed.ratio = yt(r, i)
                            }
                            vt.call(e)
                        }).catch(function() {
                            vt.call(e)
                        })
                    },
                    ready: function() {
                        var t = this,
                            e = t.config.youtube,
                            n = t.media && t.media.getAttribute("id");
                        if (L.empty(n) || !n.startsWith("youtube-")) {
                            var i = t.media.getAttribute("src");
                            L.empty(i) && (i = t.media.getAttribute(this.config.attributes.embed.id));
                            var r, o = (r = i, L.empty(r) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r),
                                s = V("div", {
                                    id: "".concat(t.provider, "-").concat(Math.floor(1e4 * Math.random())),
                                    "data-poster": e.customControls ? t.poster : void 0
                                });
                            if (t.media = Y(s, t.media), e.customControls) {
                                var a = function(t) {
                                    return "https://i.ytimg.com/vi/".concat(o, "/").concat(t, "default.jpg")
                                };
                                Wt(a("maxres"), 121).catch(function() {
                                    return Wt(a("sd"), 121)
                                }).catch(function() {
                                    return Wt(a("hq"))
                                }).then(function(e) {
                                    return Xt.setPoster.call(t, e.src)
                                }).then(function(e) {
                                    e.includes("maxres") || (t.elements.poster.style.backgroundSize = "cover")
                                }).catch(function() {})
                            }
                            t.embed = new window.YT.Player(t.media, {
                                videoId: o,
                                host: function(t) {
                                    return t.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                                }(e),
                                playerVars: R({}, {
                                    autoplay: t.config.autoplay ? 1 : 0,
                                    hl: t.config.hl,
                                    controls: t.supported.ui && e.customControls ? 0 : 1,
                                    disablekb: 1,
                                    playsinline: t.config.playsinline && !t.config.fullscreen.iosNative ? 1 : 0,
                                    cc_load_policy: t.captions.active ? 1 : 0,
                                    cc_lang_pref: t.config.captions.language,
                                    widget_referrer: window ? window.location.href : null
                                }, e),
                                events: {
                                    onError: function(e) {
                                        if (!t.media.error) {
                                            var n = e.data,
                                                i = {
                                                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                    150: "The owner of the requested video does not allow it to be played in embedded players."
                                                }[n] || "An unknown error occurred";
                                            t.media.error = {
                                                code: n,
                                                message: i
                                            }, lt.call(t, t.media, "error")
                                        }
                                    },
                                    onPlaybackRateChange: function(e) {
                                        var n = e.target;
                                        t.media.playbackRate = n.getPlaybackRate(), lt.call(t, t.media, "ratechange")
                                    },
                                    onReady: function(n) {
                                        if (!L.function(t.media.play)) {
                                            var i = n.target;
                                            Jt.getTitle.call(t, o), t.media.play = function() {
                                                $t.call(t, !0), i.playVideo()
                                            }, t.media.pause = function() {
                                                $t.call(t, !1), i.pauseVideo()
                                            }, t.media.stop = function() {
                                                i.stopVideo()
                                            }, t.media.duration = i.getDuration(), t.media.paused = !0, t.media.currentTime = 0, Object.defineProperty(t.media, "currentTime", {
                                                get: function() {
                                                    return Number(i.getCurrentTime())
                                                },
                                                set: function(e) {
                                                    t.paused && !t.embed.hasPlayed && t.embed.mute(), t.media.seeking = !0, lt.call(t, t.media, "seeking"), i.seekTo(e)
                                                }
                                            }), Object.defineProperty(t.media, "playbackRate", {
                                                get: function() {
                                                    return i.getPlaybackRate()
                                                },
                                                set: function(t) {
                                                    i.setPlaybackRate(t)
                                                }
                                            });
                                            var r = t.config.volume;
                                            Object.defineProperty(t.media, "volume", {
                                                get: function() {
                                                    return r
                                                },
                                                set: function(e) {
                                                    r = e, i.setVolume(100 * r), lt.call(t, t.media, "volumechange")
                                                }
                                            });
                                            var s = t.config.muted;
                                            Object.defineProperty(t.media, "muted", {
                                                get: function() {
                                                    return s
                                                },
                                                set: function(e) {
                                                    var n = L.boolean(e) ? e : s;
                                                    s = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * r), lt.call(t, t.media, "volumechange")
                                                }
                                            }), Object.defineProperty(t.media, "currentSrc", {
                                                get: function() {
                                                    return i.getVideoUrl()
                                                }
                                            }), Object.defineProperty(t.media, "ended", {
                                                get: function() {
                                                    return t.currentTime === t.duration
                                                }
                                            });
                                            var a = i.getAvailablePlaybackRates();
                                            t.options.speed = a.filter(function(e) {
                                                return t.config.speed.options.includes(e)
                                            }), t.supported.ui && e.customControls && t.media.setAttribute("tabindex", -1), lt.call(t, t.media, "timeupdate"), lt.call(t, t.media, "durationchange"), clearInterval(t.timers.buffering), t.timers.buffering = setInterval(function() {
                                                t.media.buffered = i.getVideoLoadedFraction(), (null === t.media.lastBuffered || t.media.lastBuffered < t.media.buffered) && lt.call(t, t.media, "progress"), t.media.lastBuffered = t.media.buffered, 1 === t.media.buffered && (clearInterval(t.timers.buffering), lt.call(t, t.media, "canplaythrough"))
                                            }, 200), e.customControls && setTimeout(function() {
                                                return Xt.build.call(t)
                                            }, 50)
                                        }
                                    },
                                    onStateChange: function(n) {
                                        var i = n.target;
                                        switch (clearInterval(t.timers.playing), t.media.seeking && [1, 2].includes(n.data) && (t.media.seeking = !1, lt.call(t, t.media, "seeked")), n.data) {
                                            case -1:
                                                lt.call(t, t.media, "timeupdate"), t.media.buffered = i.getVideoLoadedFraction(), lt.call(t, t.media, "progress");
                                                break;
                                            case 0:
                                                $t.call(t, !1), t.media.loop ? (i.stopVideo(), i.playVideo()) : lt.call(t, t.media, "ended");
                                                break;
                                            case 1:
                                                e.customControls && !t.config.autoplay && t.media.paused && !t.embed.hasPlayed ? t.media.pause() : ($t.call(t, !0), lt.call(t, t.media, "playing"), t.timers.playing = setInterval(function() {
                                                    lt.call(t, t.media, "timeupdate")
                                                }, 50), t.media.duration !== i.getDuration() && (t.media.duration = i.getDuration(), lt.call(t, t.media, "durationchange")));
                                                break;
                                            case 2:
                                                t.muted || t.embed.unMute(), $t.call(t, !1);
                                                break;
                                            case 3:
                                                lt.call(t, t.media, "waiting")
                                        }
                                        lt.call(t, t.elements.container, "statechange", !1, {
                                            code: n.data
                                        })
                                    }
                                }
                            })
                        }
                    }
                },
                Zt = {
                    setup: function() {
                        this.media ? (G(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), G(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && G(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = V("div", {
                            class: this.config.classNames.video
                        }), q(this.media, this.elements.wrapper), this.elements.poster = V("div", {
                            class: this.config.classNames.poster
                        }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? bt.setup.call(this) : this.isYouTube ? Jt.setup.call(this) : this.isVimeo && Qt.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                },
                te = function() {
                    function e(n) {
                        var i = this;
                        c(this, e), t(this, "load", function() {
                            i.enabled && (L.object(window.google) && L.object(window.google.ima) ? i.ready() : Kt(i.player.config.urls.googleIMA.sdk).then(function() {
                                i.ready()
                            }).catch(function() {
                                i.trigger("error", new Error("Google IMA SDK failed to load"))
                            }))
                        }), t(this, "ready", function() {
                            var t;
                            i.enabled || ((t = i).manager && t.manager.destroy(), t.elements.displayContainer && t.elements.displayContainer.destroy(), t.elements.container.remove()), i.startSafetyTimer(12e3, "ready()"), i.managerPromise.then(function() {
                                i.clearSafetyTimer("onAdsManagerLoaded()")
                            }), i.listeners(), i.setupIMA()
                        }), t(this, "setupIMA", function() {
                            i.elements.container = V("div", {
                                class: i.player.config.classNames.ads
                            }), i.player.elements.container.appendChild(i.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(i.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(i.player.config.playsinline), i.elements.displayContainer = new google.ima.AdDisplayContainer(i.elements.container, i.player.media), i.loader = new google.ima.AdsLoader(i.elements.displayContainer), i.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                                return i.onAdsManagerLoaded(t)
                            }, !1), i.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                                return i.onAdError(t)
                            }, !1), i.requestAds()
                        }), t(this, "requestAds", function() {
                            var t = i.player.elements.container;
                            try {
                                var e = new google.ima.AdsRequest;
                                e.adTagUrl = i.tagUrl, e.linearAdSlotWidth = t.offsetWidth, e.linearAdSlotHeight = t.offsetHeight, e.nonLinearAdSlotWidth = t.offsetWidth, e.nonLinearAdSlotHeight = t.offsetHeight, e.forceNonLinearFullSlot = !1, e.setAdWillPlayMuted(!i.player.muted), i.loader.requestAds(e)
                            } catch (t) {
                                i.onAdError(t)
                            }
                        }), t(this, "pollCountdown", function() {
                            if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(i.countdownTimer), void i.elements.container.removeAttribute("data-badge-text");
                            i.countdownTimer = setInterval(function() {
                                var t = Ot(Math.max(i.manager.getRemainingTime(), 0)),
                                    e = "".concat(Tt.get("advertisement", i.player.config), " - ").concat(t);
                                i.elements.container.setAttribute("data-badge-text", e)
                            }, 100)
                        }), t(this, "onAdsManagerLoaded", function(t) {
                            if (i.enabled) {
                                var e = new google.ima.AdsRenderingSettings;
                                e.restoreCustomPlaybackStateOnAdBreakComplete = !0, e.enablePreloading = !0, i.manager = t.getAdsManager(i.player, e), i.cuePoints = i.manager.getCuePoints(), i.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                                    return i.onAdError(t)
                                }), Object.keys(google.ima.AdEvent.Type).forEach(function(t) {
                                    i.manager.addEventListener(google.ima.AdEvent.Type[t], function(t) {
                                        return i.onAdEvent(t)
                                    })
                                }), i.trigger("loaded")
                            }
                        }), t(this, "addCuePoints", function() {
                            L.empty(i.cuePoints) || i.cuePoints.forEach(function(t) {
                                if (0 !== t && -1 !== t && t < i.player.duration) {
                                    var e = i.player.elements.progress;
                                    if (L.element(e)) {
                                        var n = 100 / i.player.duration * t,
                                            r = V("span", {
                                                class: i.player.config.classNames.cues
                                            });
                                        r.style.left = "".concat(n.toString(), "%"), e.appendChild(r)
                                    }
                                }
                            })
                        }), t(this, "onAdEvent", function(t) {
                            var e = i.player.elements.container,
                                n = t.getAd(),
                                r = t.getAdData();
                            switch (function(t) {
                                lt.call(i.player, i.player.media, "ads".concat(t.replace(/_/g, "").toLowerCase()))
                            }(t.type), t.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    i.trigger("loaded"), i.pollCountdown(!0), n.isLinear() || (n.width = e.offsetWidth, n.height = e.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    i.manager.setVolume(i.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    i.player.ended ? i.loadAds() : i.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    i.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    i.pollCountdown(), i.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    r.adError && i.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))
                            }
                        }), t(this, "onAdError", function(t) {
                            i.cancel(), i.player.debug.warn("Ads error", t)
                        }), t(this, "listeners", function() {
                            var t, e = i.player.elements.container;
                            i.player.on("canplay", function() {
                                i.addCuePoints()
                            }), i.player.on("ended", function() {
                                i.loader.contentComplete()
                            }), i.player.on("timeupdate", function() {
                                t = i.player.currentTime
                            }), i.player.on("seeked", function() {
                                var e = i.player.currentTime;
                                L.empty(i.cuePoints) || i.cuePoints.forEach(function(n, r) {
                                    t < n && n < e && (i.manager.discardAdBreak(), i.cuePoints.splice(r, 1))
                                })
                            }), window.addEventListener("resize", function() {
                                i.manager && i.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                            })
                        }), t(this, "play", function() {
                            var t = i.player.elements.container;
                            i.managerPromise || i.resumeContent(), i.managerPromise.then(function() {
                                i.manager.setVolume(i.player.volume), i.elements.displayContainer.initialize();
                                try {
                                    i.initialized || (i.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), i.manager.start()), i.initialized = !0
                                } catch (t) {
                                    i.onAdError(t)
                                }
                            }).catch(function() {})
                        }), t(this, "resumeContent", function() {
                            i.elements.container.style.zIndex = "", i.playing = !1, ut(i.player.media.play())
                        }), t(this, "pauseContent", function() {
                            i.elements.container.style.zIndex = 3, i.playing = !0, i.player.media.pause()
                        }), t(this, "cancel", function() {
                            i.initialized && i.resumeContent(), i.trigger("error"), i.loadAds()
                        }), t(this, "loadAds", function() {
                            i.managerPromise.then(function() {
                                i.manager && i.manager.destroy(), i.managerPromise = new Promise(function(t) {
                                    i.on("loaded", t), i.player.debug.log(i.manager)
                                }), i.initialized = !1, i.requestAds()
                            }).catch(function() {})
                        }), t(this, "trigger", function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            var o = i.events[t];
                            L.array(o) && o.forEach(function(t) {
                                L.function(t) && t.apply(i, n)
                            })
                        }), t(this, "on", function(t, e) {
                            return L.array(i.events[t]) || (i.events[t] = []), i.events[t].push(e), i
                        }), t(this, "startSafetyTimer", function(t, e) {
                            i.player.debug.log("Safety timer invoked from: ".concat(e)), i.safetyTimer = setTimeout(function() {
                                i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
                            }, t)
                        }), t(this, "clearSafetyTimer", function(t) {
                            L.nullOrUndefined(i.safetyTimer) || (i.player.debug.log("Safety timer cleared from: ".concat(t)), clearTimeout(i.safetyTimer), i.safetyTimer = null)
                        }), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(t, e) {
                            i.on("loaded", t), i.on("error", e)
                        }), this.load()
                    }
                    return d(e, [{
                        key: "enabled",
                        get: function() {
                            var t = this.config;
                            return this.player.isHTML5 && this.player.isVideo && t.enabled && (!L.empty(t.publisherId) || L.url(t.tagUrl))
                        }
                    }, {
                        key: "tagUrl",
                        get: function() {
                            var t = this.config;
                            return L.url(t.tagUrl) ? t.tagUrl : "https://go.aniview.com/api/adserver6/vast/?".concat(Nt({
                                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                AV_URL: window.location.hostname,
                                cb: Date.now(),
                                AV_WIDTH: 640,
                                AV_HEIGHT: 480,
                                AV_CDIM2: t.publisherId
                            }))
                        }
                    }]), e
                }();

            function ee() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                return Math.min(Math.max(t, e), n)
            }
            var ne, ie = function(t) {
                    var e = [];
                    return t.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(t) {
                        var n = {};
                        t.split(/\r\n|\n|\r/).forEach(function(t) {
                            if (L.number(n.startTime)) {
                                if (!L.empty(t.trim()) && L.empty(n.text)) {
                                    var e, i, r = t.trim().split("#xywh=");
                                    e = m(r, 1), n.text = e[0], r[1] && (i = m(r[1].split(","), 4), n.x = i[0], n.y = i[1], n.w = i[2], n.h = i[3])
                                }
                            } else {
                                var o = t.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                o && (n.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), n.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                            }
                        }), n.text && e.push(n)
                    }), e
                },
                re = function(t, e) {
                    var n = {};
                    return t > e.width / e.height ? (n.width = e.width, n.height = 1 / t * e.width) : (n.height = e.height, n.width = t * e.height), n
                },
                oe = function() {
                    function e(n) {
                        var i = this;
                        c(this, e), t(this, "load", function() {
                            i.player.elements.display.seekTooltip && (i.player.elements.display.seekTooltip.hidden = i.enabled), i.enabled && i.getThumbnails().then(function() {
                                i.enabled && (i.render(), i.determineContainerAutoSizing(), i.listeners(), i.loaded = !0)
                            })
                        }), t(this, "getThumbnails", function() {
                            return new Promise(function(t) {
                                var e = i.player.config.previewThumbnails.src;
                                if (L.empty(e)) throw new Error("Missing previewThumbnails.src config attribute");
                                var n = function() {
                                    i.thumbnails.sort(function(t, e) {
                                        return t.height - e.height
                                    }), i.player.debug.log("Preview thumbnails", i.thumbnails), t()
                                };
                                if (L.function(e)) e(function(t) {
                                    i.thumbnails = t, n()
                                });
                                else {
                                    var r = (L.string(e) ? [e] : e).map(function(t) {
                                        return i.getThumbnail(t)
                                    });
                                    Promise.all(r).then(n)
                                }
                            })
                        }), t(this, "getThumbnail", function(t) {
                            return new Promise(function(e) {
                                Et(t).then(function(n) {
                                    var r = {
                                        frames: ie(n),
                                        height: null,
                                        urlPrefix: ""
                                    };
                                    r.frames[0].text.startsWith("/") || r.frames[0].text.startsWith("http://") || r.frames[0].text.startsWith("https://") || (r.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
                                    var o = new Image;
                                    o.onload = function() {
                                        r.height = o.naturalHeight, r.width = o.naturalWidth, i.thumbnails.push(r), e()
                                    }, o.src = r.urlPrefix + r.frames[0].text
                                })
                            })
                        }), t(this, "startMove", function(t) {
                            if (i.loaded && L.event(t) && ["touchmove", "mousemove"].includes(t.type) && i.player.media.duration) {
                                if ("touchmove" === t.type) i.seekTime = i.player.media.duration * (i.player.elements.inputs.seek.value / 100);
                                else {
                                    var e, n, r = i.player.elements.progress.getBoundingClientRect(),
                                        o = 100 / r.width * (t.pageX - r.left);
                                    i.seekTime = i.player.media.duration * (o / 100), i.seekTime < 0 && (i.seekTime = 0), i.seekTime > i.player.media.duration - 1 && (i.seekTime = i.player.media.duration - 1), i.mousePosX = t.pageX, i.elements.thumb.time.innerText = Ot(i.seekTime);
                                    var s = null === (e = i.player.config.markers) || void 0 === e || null === (n = e.points) || void 0 === n ? void 0 : n.find(function(t) {
                                        return t.time === Math.round(i.seekTime)
                                    });
                                    s && i.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(s.label, "<br>"))
                                }
                                i.showImageAtCurrentTime()
                            }
                        }), t(this, "endMove", function() {
                            i.toggleThumbContainer(!1, !0)
                        }), t(this, "startScrubbing", function(t) {
                            (L.nullOrUndefined(t.button) || !1 === t.button || 0 === t.button) && (i.mouseDown = !0, i.player.media.duration && (i.toggleScrubbingContainer(!0), i.toggleThumbContainer(!1, !0), i.showImageAtCurrentTime()))
                        }), t(this, "endScrubbing", function() {
                            i.mouseDown = !1, Math.ceil(i.lastTime) === Math.ceil(i.player.media.currentTime) ? i.toggleScrubbingContainer(!1) : at.call(i.player, i.player.media, "timeupdate", function() {
                                i.mouseDown || i.toggleScrubbingContainer(!1)
                            })
                        }), t(this, "listeners", function() {
                            i.player.on("play", function() {
                                i.toggleThumbContainer(!1, !0)
                            }), i.player.on("seeked", function() {
                                i.toggleThumbContainer(!1)
                            }), i.player.on("timeupdate", function() {
                                i.lastTime = i.player.media.currentTime
                            })
                        }), t(this, "render", function() {
                            i.elements.thumb.container = V("div", {
                                class: i.player.config.classNames.previewThumbnails.thumbContainer
                            }), i.elements.thumb.imageContainer = V("div", {
                                class: i.player.config.classNames.previewThumbnails.imageContainer
                            }), i.elements.thumb.container.appendChild(i.elements.thumb.imageContainer);
                            var t = V("div", {
                                class: i.player.config.classNames.previewThumbnails.timeContainer
                            });
                            i.elements.thumb.time = V("span", {}, "00:00"), t.appendChild(i.elements.thumb.time), i.elements.thumb.imageContainer.appendChild(t), L.element(i.player.elements.progress) && i.player.elements.progress.appendChild(i.elements.thumb.container), i.elements.scrubbing.container = V("div", {
                                class: i.player.config.classNames.previewThumbnails.scrubbingContainer
                            }), i.player.elements.wrapper.appendChild(i.elements.scrubbing.container)
                        }), t(this, "destroy", function() {
                            i.elements.thumb.container && i.elements.thumb.container.remove(), i.elements.scrubbing.container && i.elements.scrubbing.container.remove()
                        }), t(this, "showImageAtCurrentTime", function() {
                            i.mouseDown ? i.setScrubbingContainerSize() : i.setThumbContainerSizeAndPos();
                            var t = i.thumbnails[0].frames.findIndex(function(t) {
                                    return i.seekTime >= t.startTime && i.seekTime <= t.endTime
                                }),
                                e = t >= 0,
                                n = 0;
                            i.mouseDown || i.toggleThumbContainer(e), e && (i.thumbnails.forEach(function(e, r) {
                                i.loadedImages.includes(e.frames[t].text) && (n = r)
                            }), t !== i.showingThumb && (i.showingThumb = t, i.loadImage(n)))
                        }), t(this, "loadImage", function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = i.showingThumb,
                                n = i.thumbnails[t],
                                r = n.urlPrefix,
                                o = n.frames[e],
                                s = n.frames[e].text,
                                a = r + s;
                            if (i.currentImageElement && i.currentImageElement.dataset.filename === s) i.showImage(i.currentImageElement, o, t, e, s, !1), i.currentImageElement.dataset.index = e, i.removeOldImages(i.currentImageElement);
                            else {
                                i.loadingImage && i.usingSprites && (i.loadingImage.onload = null);
                                var l = new Image;
                                l.src = a, l.dataset.index = e, l.dataset.filename = s, i.showingThumbFilename = s, i.player.debug.log("Loading image: ".concat(a)), l.onload = function() {
                                    return i.showImage(l, o, t, e, s, !0)
                                }, i.loadingImage = l, i.removeOldImages(l)
                            }
                        }), t(this, "showImage", function(t, e, n, r, o) {
                            var s = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                            i.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(r, ". qual: ").concat(n, ". newimg: ").concat(s)), i.setImageSizeAndOffset(t, e), s && (i.currentImageContainer.appendChild(t), i.currentImageElement = t, i.loadedImages.includes(o) || i.loadedImages.push(o)), i.preloadNearby(r, !0).then(i.preloadNearby(r, !1)).then(i.getHigherQuality(n, t, e, o))
                        }), t(this, "removeOldImages", function(t) {
                            Array.from(i.currentImageContainer.children).forEach(function(e) {
                                if ("img" === e.tagName.toLowerCase()) {
                                    var n = i.usingSprites ? 500 : 1e3;
                                    if (e.dataset.index !== t.dataset.index && !e.dataset.deleting) {
                                        e.dataset.deleting = !0;
                                        var r = i.currentImageContainer;
                                        setTimeout(function() {
                                            r.removeChild(e), i.player.debug.log("Removing thumb: ".concat(e.dataset.filename))
                                        }, n)
                                    }
                                }
                            })
                        }), t(this, "preloadNearby", function(t) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return new Promise(function(n) {
                                setTimeout(function() {
                                    var r = i.thumbnails[0].frames[t].text;
                                    if (i.showingThumbFilename === r) {
                                        var o = !1;
                                        (e ? i.thumbnails[0].frames.slice(t) : i.thumbnails[0].frames.slice(0, t).reverse()).forEach(function(t) {
                                            var e = t.text;
                                            if (e !== r && !i.loadedImages.includes(e)) {
                                                o = !0, i.player.debug.log("Preloading thumb filename: ".concat(e));
                                                var s = i.thumbnails[0].urlPrefix + e,
                                                    a = new Image;
                                                a.src = s, a.onload = function() {
                                                    i.player.debug.log("Preloaded thumb filename: ".concat(e)), i.loadedImages.includes(e) || i.loadedImages.push(e), n()
                                                }
                                            }
                                        }), o || n()
                                    }
                                }, 300)
                            })
                        }), t(this, "getHigherQuality", function(t, e, n, r) {
                            if (t < i.thumbnails.length - 1) {
                                var o = e.naturalHeight;
                                i.usingSprites && (o = n.h), o < i.thumbContainerHeight && setTimeout(function() {
                                    i.showingThumbFilename === r && (i.player.debug.log("Showing higher quality thumb for: ".concat(r)), i.loadImage(t + 1))
                                }, 300)
                            }
                        }), t(this, "toggleThumbContainer", function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = i.player.config.classNames.previewThumbnails.thumbContainerShown;
                            i.elements.thumb.container.classList.toggle(n, t), !t && e && (i.showingThumb = null, i.showingThumbFilename = null)
                        }), t(this, "toggleScrubbingContainer", function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = i.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            i.elements.scrubbing.container.classList.toggle(e, t), t || (i.showingThumb = null, i.showingThumbFilename = null)
                        }), t(this, "determineContainerAutoSizing", function() {
                            (i.elements.thumb.imageContainer.clientHeight > 20 || i.elements.thumb.imageContainer.clientWidth > 20) && (i.sizeSpecifiedInCSS = !0)
                        }), t(this, "setThumbContainerSizeAndPos", function() {
                            var t = i.elements.thumb.imageContainer;
                            if (i.sizeSpecifiedInCSS) {
                                if (t.clientHeight > 20 && t.clientWidth < 20) {
                                    var e = Math.floor(t.clientHeight * i.thumbAspectRatio);
                                    t.style.width = "".concat(e, "px")
                                } else if (t.clientHeight < 20 && t.clientWidth > 20) {
                                    var n = Math.floor(t.clientWidth / i.thumbAspectRatio);
                                    t.style.height = "".concat(n, "px")
                                }
                            } else {
                                var r = Math.floor(i.thumbContainerHeight * i.thumbAspectRatio);
                                t.style.height = "".concat(i.thumbContainerHeight, "px"), t.style.width = "".concat(r, "px")
                            }
                            i.setThumbContainerPos()
                        }), t(this, "setThumbContainerPos", function() {
                            var t = i.player.elements.progress.getBoundingClientRect(),
                                e = i.player.elements.container.getBoundingClientRect(),
                                n = i.elements.thumb.container,
                                r = e.left - t.left + 10,
                                o = e.right - t.left - n.clientWidth - 10,
                                s = i.mousePosX - t.left - n.clientWidth / 2,
                                a = ee(s, r, o);
                            n.style.left = "".concat(a, "px"), n.style.setProperty("--preview-arrow-offset", s - a + "px")
                        }), t(this, "setScrubbingContainerSize", function() {
                            var t = re(i.thumbAspectRatio, {
                                    width: i.player.media.clientWidth,
                                    height: i.player.media.clientHeight
                                }),
                                e = t.width,
                                n = t.height;
                            i.elements.scrubbing.container.style.width = "".concat(e, "px"), i.elements.scrubbing.container.style.height = "".concat(n, "px")
                        }), t(this, "setImageSizeAndOffset", function(t, e) {
                            if (i.usingSprites) {
                                var n = i.thumbContainerHeight / e.h;
                                t.style.height = t.naturalHeight * n + "px", t.style.width = t.naturalWidth * n + "px", t.style.left = "-".concat(e.x * n, "px"), t.style.top = "-".concat(e.y * n, "px")
                            }
                        }), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load()
                    }
                    return d(e, [{
                        key: "enabled",
                        get: function() {
                            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                        }
                    }, {
                        key: "currentImageContainer",
                        get: function() {
                            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                        }
                    }, {
                        key: "usingSprites",
                        get: function() {
                            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                        }
                    }, {
                        key: "thumbAspectRatio",
                        get: function() {
                            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                        }
                    }, {
                        key: "thumbContainerHeight",
                        get: function() {
                            return this.mouseDown ? re(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                        }
                    }, {
                        key: "currentImageElement",
                        get: function() {
                            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                        },
                        set: function(t) {
                            this.mouseDown ? this.currentScrubbingImageElement = t : this.currentThumbnailImageElement = t
                        }
                    }]), e
                }(),
                se = {
                    insertElements: function(t, e) {
                        var n = this;
                        L.string(e) ? H(t, this.media, {
                            src: e
                        }) : L.array(e) && e.forEach(function(e) {
                            H(t, n.media, e)
                        })
                    },
                    change: function(t) {
                        var e = this;
                        B(t, "sources.length") ? (bt.cancelRequests.call(this), this.destroy.call(this, function() {
                            e.options.quality = [], W(e.media), e.media = null, L.element(e.elements.container) && e.elements.container.removeAttribute("class");
                            var n = t.sources,
                                i = t.type,
                                r = m(n, 1)[0],
                                o = r.provider,
                                s = void 0 === o ? Rt.html5 : o,
                                a = r.src,
                                l = "html5" === s ? i : "div",
                                u = "html5" === s ? {} : {
                                    src: a
                                };
                            Object.assign(e, {
                                provider: s,
                                type: i,
                                supported: nt.check(i, s, e.config.playsinline),
                                media: V(l, u)
                            }), e.elements.container.appendChild(e.media), L.boolean(t.autoplay) && (e.config.autoplay = t.autoplay), e.isHTML5 && (e.config.crossorigin && e.media.setAttribute("crossorigin", ""), e.config.autoplay && e.media.setAttribute("autoplay", ""), L.empty(t.poster) || (e.poster = t.poster), e.config.loop.active && e.media.setAttribute("loop", ""), e.config.muted && e.media.setAttribute("muted", ""), e.config.playsinline && e.media.setAttribute("playsinline", "")), Xt.addStyleHook.call(e), e.isHTML5 && se.insertElements.call(e, "source", n), e.config.title = t.title, Zt.setup.call(e), e.isHTML5 && Object.keys(t).includes("tracks") && se.insertElements.call(e, "track", t.tracks), (e.isHTML5 || e.isEmbed && !e.supported.ui) && Xt.build.call(e), e.isHTML5 && e.media.load(), L.empty(t.previewThumbnails) || (Object.assign(e.config.previewThumbnails, t.previewThumbnails), e.previewThumbnails && e.previewThumbnails.loaded && (e.previewThumbnails.destroy(), e.previewThumbnails = null), e.config.previewThumbnails.enabled && (e.previewThumbnails = new oe(e))), e.fullscreen.update()
                        }, !0)) : this.debug.warn("Invalid source format")
                    }
                },
                ae = function() {
                    function e(n, i) {
                        var r = this;
                        if (c(this, e), t(this, "play", function() {
                                return L.function(r.media.play) ? (r.ads && r.ads.enabled && r.ads.managerPromise.then(function() {
                                    return r.ads.play()
                                }).catch(function() {
                                    return ut(r.media.play())
                                }), r.media.play()) : null
                            }), t(this, "pause", function() {
                                return r.playing && L.function(r.media.pause) ? r.media.pause() : null
                            }), t(this, "togglePlay", function(t) {
                                return (L.boolean(t) ? t : !r.playing) ? r.play() : r.pause()
                            }), t(this, "stop", function() {
                                r.isHTML5 ? (r.pause(), r.restart()) : L.function(r.media.stop) && r.media.stop()
                            }), t(this, "restart", function() {
                                r.currentTime = 0
                            }), t(this, "rewind", function(t) {
                                r.currentTime -= L.number(t) ? t : r.config.seekTime
                            }), t(this, "forward", function(t) {
                                r.currentTime += L.number(t) ? t : r.config.seekTime
                            }), t(this, "increaseVolume", function(t) {
                                var e = r.media.muted ? 0 : r.volume;
                                r.volume = e + (L.number(t) ? t : 0)
                            }), t(this, "decreaseVolume", function(t) {
                                r.increaseVolume(-t)
                            }), t(this, "airplay", function() {
                                nt.airplay && r.media.webkitShowPlaybackTargetPicker()
                            }), t(this, "toggleControls", function(t) {
                                if (r.supported.ui && !r.isAudio) {
                                    var e = Q(r.elements.container, r.config.classNames.hideControls),
                                        n = void 0 === t ? void 0 : !t,
                                        i = G(r.elements.container, r.config.classNames.hideControls, n);
                                    if (i && L.array(r.config.controls) && r.config.controls.includes("settings") && !L.empty(r.config.settings) && Pt.toggleMenu.call(r, !1), i !== e) {
                                        var o = i ? "controlshidden" : "controlsshown";
                                        lt.call(r, r.media, o)
                                    }
                                    return !i
                                }
                                return !1
                            }), t(this, "on", function(t, e) {
                                ot.call(r, r.elements.container, t, e)
                            }), t(this, "once", function(t, e) {
                                at.call(r, r.elements.container, t, e)
                            }), t(this, "off", function(t, e) {
                                st(r.elements.container, t, e)
                            }), t(this, "destroy", function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (r.ready) {
                                    var n = function() {
                                        document.body.style.overflow = "", r.embed = null, e ? (Object.keys(r.elements).length && (W(r.elements.buttons.play), W(r.elements.captions), W(r.elements.controls), W(r.elements.wrapper), r.elements.buttons.play = null, r.elements.captions = null, r.elements.controls = null, r.elements.wrapper = null), L.function(t) && t()) : (function() {
                                            this && this.eventListeners && (this.eventListeners.forEach(function(t) {
                                                var e = t.element,
                                                    n = t.type,
                                                    i = t.callback,
                                                    r = t.options;
                                                e.removeEventListener(n, i, r)
                                            }), this.eventListeners = [])
                                        }.call(r), bt.cancelRequests.call(r), Y(r.elements.original, r.elements.container), lt.call(r, r.elements.original, "destroyed", !0), L.function(t) && t.call(r.elements.original), r.ready = !1, setTimeout(function() {
                                            r.elements = null, r.media = null
                                        }, 200))
                                    };
                                    r.stop(), clearTimeout(r.timers.loading), clearTimeout(r.timers.controls), clearTimeout(r.timers.resized), r.isHTML5 ? (Xt.toggleNativeControls.call(r, !0), n()) : r.isYouTube ? (clearInterval(r.timers.buffering), clearInterval(r.timers.playing), null !== r.embed && L.function(r.embed.destroy) && r.embed.destroy(), n()) : r.isVimeo && (null !== r.embed && r.embed.unload().then(n), setTimeout(n, 200))
                                }
                            }), t(this, "supports", function(t) {
                                return nt.mime.call(r, t)
                            }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = nt.touch, this.media = n, L.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || L.nodeList(this.media) || L.array(this.media)) && (this.media = this.media[0]), this.config = R({}, jt, e.defaults, i || {}, function() {
                                try {
                                    return JSON.parse(r.media.getAttribute("data-plyr-config"))
                                } catch (t) {
                                    return {}
                                }
                            }()), this.elements = {
                                container: null,
                                fullscreen: null,
                                captions: null,
                                buttons: {},
                                display: {},
                                progress: {},
                                inputs: {},
                                settings: {
                                    popup: null,
                                    menu: null,
                                    panels: {},
                                    buttons: {}
                                }
                            }, this.captions = {
                                active: null,
                                currentTrack: -1,
                                meta: new WeakMap
                            }, this.fullscreen = {
                                active: !1
                            }, this.options = {
                                speed: [],
                                quality: []
                            }, this.debug = new Vt(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", nt), !L.nullOrUndefined(this.media) && L.element(this.media))
                            if (this.media.plyr) this.debug.warn("Target already setup");
                            else if (this.config.enabled)
                            if (nt.check().api) {
                                var o = this.media.cloneNode(!0);
                                o.autoplay = !1, this.elements.original = o;
                                var s = this.media.tagName.toLowerCase(),
                                    a = null,
                                    l = null;
                                switch (s) {
                                    case "div":
                                        if (a = this.media.querySelector("iframe"), L.element(a)) {
                                            if (l = Lt(a.getAttribute("src")), this.provider = function(t) {
                                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(t) ? Rt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(t) ? Rt.vimeo : null
                                                }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                                                var u = ["1", "true"];
                                                u.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                            }
                                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                        if (L.empty(this.provider) || !Object.values(Rt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                        this.type = qt;
                                        break;
                                    case "video":
                                    case "audio":
                                        this.type = s, this.provider = Rt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error("Setup failed: unsupported type")
                                }
                                this.supported = nt.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Yt(this), this.storage = new kt(this), this.media.plyr = this, L.element(this.elements.container) || (this.elements.container = V("div"), q(this.media, this.elements.container)), Xt.migrateStyles.call(this), Xt.addStyleHook.call(this), Zt.setup.call(this), this.config.debug && ot.call(this, this.elements.container, this.config.events.join(" "), function(t) {
                                    r.debug.log("event: ".concat(t.type))
                                }), this.fullscreen = new Ht(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Xt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new te(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function() {
                                    return ut(r.play())
                                }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new oe(this))) : this.debug.error("Setup failed: no support")
                            } else this.debug.error("Setup failed: no support");
                        else this.debug.error("Setup failed: disabled by config");
                        else this.debug.error("Setup failed: no suitable element passed")
                    }
                    return d(e, [{
                        key: "isHTML5",
                        get: function() {
                            return this.provider === Rt.html5
                        }
                    }, {
                        key: "isEmbed",
                        get: function() {
                            return this.isYouTube || this.isVimeo
                        }
                    }, {
                        key: "isYouTube",
                        get: function() {
                            return this.provider === Rt.youtube
                        }
                    }, {
                        key: "isVimeo",
                        get: function() {
                            return this.provider === Rt.vimeo
                        }
                    }, {
                        key: "isVideo",
                        get: function() {
                            return this.type === qt
                        }
                    }, {
                        key: "isAudio",
                        get: function() {
                            return "audio" === this.type
                        }
                    }, {
                        key: "playing",
                        get: function() {
                            return Boolean(this.ready && !this.paused && !this.ended)
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return Boolean(this.media.paused)
                        }
                    }, {
                        key: "stopped",
                        get: function() {
                            return Boolean(this.paused && 0 === this.currentTime)
                        }
                    }, {
                        key: "ended",
                        get: function() {
                            return Boolean(this.media.ended)
                        }
                    }, {
                        key: "currentTime",
                        get: function() {
                            return Number(this.media.currentTime)
                        },
                        set: function(t) {
                            if (this.duration) {
                                var e = L.number(t) && t > 0;
                                this.media.currentTime = e ? Math.min(t, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                            }
                        }
                    }, {
                        key: "buffered",
                        get: function() {
                            var t = this.media.buffered;
                            return L.number(t) ? t : t && t.length && this.duration > 0 ? t.end(0) / this.duration : 0
                        }
                    }, {
                        key: "seeking",
                        get: function() {
                            return Boolean(this.media.seeking)
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            var t = parseFloat(this.config.duration),
                                e = (this.media || {}).duration,
                                n = L.number(e) && e !== 1 / 0 ? e : 0;
                            return t || n
                        }
                    }, {
                        key: "volume",
                        get: function() {
                            return Number(this.media.volume)
                        },
                        set: function(t) {
                            var e = t;
                            L.string(e) && (e = Number(e)), L.number(e) || (e = this.storage.get("volume")), L.number(e) || (e = this.config.volume), e > 1 && (e = 1), e < 0 && (e = 0), this.config.volume = e, this.media.volume = e, !L.empty(t) && this.muted && e > 0 && (this.muted = !1)
                        }
                    }, {
                        key: "muted",
                        get: function() {
                            return Boolean(this.media.muted)
                        },
                        set: function(t) {
                            var e = t;
                            L.boolean(e) || (e = this.storage.get("muted")), L.boolean(e) || (e = this.config.muted), this.config.muted = e, this.media.muted = e
                        }
                    }, {
                        key: "hasAudio",
                        get: function() {
                            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                        }
                    }, {
                        key: "speed",
                        get: function() {
                            return Number(this.media.playbackRate)
                        },
                        set: function(t) {
                            var e = this,
                                n = null;
                            L.number(t) && (n = t), L.number(n) || (n = this.storage.get("speed")), L.number(n) || (n = this.config.speed.selected);
                            var i = this.minimumSpeed,
                                r = this.maximumSpeed;
                            n = ee(n, i, r), this.config.speed.selected = n, setTimeout(function() {
                                e.media && (e.media.playbackRate = n)
                            }, 0)
                        }
                    }, {
                        key: "minimumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.min.apply(Math, u(this.options.speed)) : this.isVimeo ? .5 : .0625
                        }
                    }, {
                        key: "maximumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.max.apply(Math, u(this.options.speed)) : this.isVimeo ? 2 : 16
                        }
                    }, {
                        key: "quality",
                        get: function() {
                            return this.media.quality
                        },
                        set: function(t) {
                            var e = this.config.quality,
                                n = this.options.quality;
                            if (n.length) {
                                var i = [!L.empty(t) && Number(t), this.storage.get("quality"), e.selected, e.default].find(L.number),
                                    r = !0;
                                if (!n.includes(i)) {
                                    var o = ht(n, i);
                                    this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
                                }
                                e.selected = i, this.media.quality = i, r && this.storage.set({
                                    quality: i
                                })
                            }
                        }
                    }, {
                        key: "loop",
                        get: function() {
                            return Boolean(this.media.loop)
                        },
                        set: function(t) {
                            var e = L.boolean(t) ? t : this.config.loop.active;
                            this.config.loop.active = e, this.media.loop = e
                        }
                    }, {
                        key: "source",
                        get: function() {
                            return this.media.currentSrc
                        },
                        set: function(t) {
                            se.change.call(this, t)
                        }
                    }, {
                        key: "download",
                        get: function() {
                            var t = this.config.urls.download;
                            return L.url(t) ? t : this.source
                        },
                        set: function(t) {
                            L.url(t) && (this.config.urls.download = t, Pt.setDownloadUrl.call(this))
                        }
                    }, {
                        key: "poster",
                        get: function() {
                            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                        },
                        set: function(t) {
                            this.isVideo ? Xt.setPoster.call(this, t, !1).catch(function() {}) : this.debug.warn("Poster can only be set for video")
                        }
                    }, {
                        key: "ratio",
                        get: function() {
                            if (!this.isVideo) return null;
                            var t = mt(gt.call(this));
                            return L.array(t) ? t.join(":") : t
                        },
                        set: function(t) {
                            this.isVideo ? L.string(t) && ft(t) ? (this.config.ratio = mt(t), vt.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(t, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                        }
                    }, {
                        key: "autoplay",
                        get: function() {
                            return Boolean(this.config.autoplay)
                        },
                        set: function(t) {
                            this.config.autoplay = L.boolean(t) ? t : this.config.autoplay
                        }
                    }, {
                        key: "toggleCaptions",
                        value: function(t) {
                            It.toggle.call(this, t, !1)
                        }
                    }, {
                        key: "currentTrack",
                        get: function() {
                            var t = this.captions,
                                e = t.toggled,
                                n = t.currentTrack;
                            return e ? n : -1
                        },
                        set: function(t) {
                            It.set.call(this, t, !1), It.setup.call(this)
                        }
                    }, {
                        key: "language",
                        get: function() {
                            return (It.getCurrentTrack.call(this) || {}).language
                        },
                        set: function(t) {
                            It.setLanguage.call(this, t, !1)
                        }
                    }, {
                        key: "pip",
                        get: function() {
                            return nt.pip ? L.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Bt : null
                        },
                        set: function(t) {
                            if (nt.pip) {
                                var e = L.boolean(t) ? t : !this.pip;
                                L.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? Bt : "inline"), L.function(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture())
                            }
                        }
                    }, {
                        key: "setPreviewThumbnails",
                        value: function(t) {
                            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, t), this.config.previewThumbnails.enabled && (this.previewThumbnails = new oe(this))
                        }
                    }], [{
                        key: "supported",
                        value: function(t, e) {
                            return nt.check(t, e)
                        }
                    }, {
                        key: "loadSprite",
                        value: function(t, e) {
                            return St(t, e)
                        }
                    }, {
                        key: "setup",
                        value: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            return L.string(t) ? i = Array.from(document.querySelectorAll(t)) : L.nodeList(t) ? i = Array.from(t) : L.array(t) && (i = t.filter(L.element)), L.empty(i) ? null : i.map(function(t) {
                                return new e(t, n)
                            })
                        }
                    }]), e
                }();
            return ae.defaults = (ne = jt, JSON.parse(JSON.stringify(ne))), ae
        }, "object" == D(e) && void 0 !== t ? t.exports = s() : void 0 === (o = "function" == typeof(r = s) ? r.call(e, n, e, t) : r) || (t.exports = o))
    }).call(e, n(29))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(1),
        s = n(4),
        a = n.n(s),
        l = n(3);
    i.a.registerPlugin(o.a);
    var u = function(t) {
        this.el = t, this.gridItems = i.a.utils.toArray(this.el.querySelectorAll(".homepage-grid__item"))
    };
    u.prototype.init = function() {
        var t = this;
        this.preloadImages();
        var e = i.a.matchMedia();
        this.isXL = !1, e.add(r.a.queries.xl, function() {
            t.isXL = !0
        })
    }, u.prototype.preloadImages = function() {
        var t = this;
        a()(this.el, function() {
            t.inViewTl(), t.isXL && t.buildPin()
        })
    }, u.prototype.inViewTl = function() {
        var t = i.a.timeline();
        t.set(this.el, {
            autoAlpha: 1
        }), t.fromTo(this.gridItems, {
            y: 200,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: .05,
            duration: .7,
            ease: function(t) {
                return Object(l.a)(t)
            }
        })
    }, u.prototype.buildPin = function() {
        o.a.create({
            trigger: this.el,
            start: "top top",
            end: "bottom top-=20px",
            pin: !0,
            pinSpacing: !1
        })
    }, u.prototype.destroy = function() {
        o.a.killAll()
    }, e.a = u
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(3),
        o = n(1),
        s = n(2);
    i.a.registerPlugin(o.a);
    var a = function(t) {
        this.el = t, this.items = this.el.querySelectorAll(".homepage-list__items li"), this.label = this.el.querySelector(".homepage-list__label"), this.wrapper = this.el.querySelector(".homepage-list__wrapper"), this.itemsParents = this.el.querySelector(".homepage-list__items")
    };
    a.prototype.init = function() {
        var t = this;
        this.inViewTl();
        var e = i.a.matchMedia();
        this.isXL = !1, e.add(s.a.queries.xl, function() {
            t.isXL = !0
        }), this.isXL && this.buildScrollTl()
    }, a.prototype.inViewTl = function() {
        i.a.timeline({
            scrollTrigger: {
                start: "top center",
                trigger: this.el
            },
            defaults: {
                duration: .8,
                ease: function(t) {
                    return Object(r.a)(t)
                }
            }
        }).fromTo(this.items, {
            y: 50,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: .015
        })
    }, a.prototype.buildScrollTl = function() {
        var t = i.a.timeline({
            scrollTrigger: {
                trigger: ".aotw",
                scrub: .5,
                start: "top bottom",
                end: "top top+=230px"
            }
        });
        t.to(this.label, {
            y: -this.itemsParents.offsetHeight / 2 - 90,
            ease: "linear"
        }, 0), t.to(this.wrapper, {
            y: -i.a.getProperty(this.el, "paddingTop"),
            ease: "linear"
        }, 0)
    }, a.prototype.destroy = function() {}, e.a = a
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n.n(o),
        a = n(3);
    i.a.registerPlugin(r.a);
    var l = function(t) {
        this.el = t, this.elements = i.a.utils.toArray(this.el.querySelectorAll(".index-card__inner")), this.planeElements = i.a.utils.toArray(this.el.querySelectorAll(".gl-plane")), this.grids = i.a.utils.toArray(this.el.querySelectorAll(".grid__item")), this.title = document.querySelectorAll(".grid__title"), this.planeID = this.constructor.name
    };
    l.prototype.init = function() {
        this.preloadImages()
    }, l.prototype.preloadImages = function() {
        var t = this;
        s()(this.el, function() {
            t.inViewTl()
        })
    }, l.prototype.inViewTl = function() {
        var t = i.a.timeline({
            paused: !0
        });
        t.to(this.el, {
            autoAlpha: 1
        }), t.fromTo(this.title, {
            autoAlpha: 0,
            y: 100
        }, {
            autoAlpha: 1,
            y: 0
        }, 0), t.play(), r.a.batch(this.grids, {
            once: !0,
            onEnter: function(t, e) {
                i.a.fromTo(t, {
                    autoAlpha: 0,
                    y: 100
                }, {
                    autoAlpha: 1,
                    stagger: .06,
                    y: 0,
                    duration: 1,
                    ease: function(t) {
                        return Object(a.a)(t)
                    }
                })
            }
        })
    }, l.prototype.destroy = function() {
        r.a.killAll()
    }, e.a = l
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1);
    i.a.registerPlugin(r.a);
    var o = function(t) {
        this.el = t, this.title = this.el.querySelector(".labels__heading")
    };
    o.prototype.init = function() {}, e.a = o
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n.n(o),
        a = n(2),
        l = n(6),
        u = n(5),
        c = n(3);
    i.a.registerPlugin(r.a, l.a, u.a);
    var h = function(t) {
        this.el = t, this.title = this.el.querySelector(".motm__header"), this.inner = document.querySelector(".motm"), this.currentIndex = 0, this.desc = this.el.querySelectorAll(".motm__tags"), this.row = this.el.querySelector(".aotw__row"), this.titles = this.row.querySelectorAll(".aotw__header__title"), this.date = this.el.querySelector(".aotw__date"), this.link = this.el.querySelector(".motm__link"), this.firstTitle = this.el.querySelector(".aotw__header__title--m"), this.innerDefaultBg = i.a.getProperty(this.inner, "backgroundColor"), this.innerDefaultColor = i.a.getProperty(this.inner, "color"), this.bindEvents = this.bindEvents.bind(this), this.onRepeat = this.onRepeat.bind(this)
    };
    h.prototype.init = function() {
        var t = this;
        this.preloadImages();
        var e = i.a.matchMedia();
        this.isXL = !1, e.add(a.a.queries.xl, function() {
            t.isXL = !0
        }), this.isXL && (this.buildScrollTl(), this.buildFlip())
    }, h.prototype.preloadImages = function() {
        var t = this;
        s()(this.el, function() {
            t.inViewTl(), t.buildColors()
        })
    }, h.prototype.buildColors = function() {
        this.palette = JSON.parse(this.el.getAttribute("data-colors")), this.bindEvents()
    }, h.prototype.bindEvents = function() {
        var t = this,
            e = this.selectTwoUniqueRandomValues(this.palette);
        i.a.ticker.add(this.onRepeat), a.a.color = e[0].color, this.link.addEventListener("mouseenter", function() {
            i.a.to(t.inner, {
                backgroundColor: e[0].color,
                color: e[1].color
            })
        }), this.link.addEventListener("mouseleave", function() {
            i.a.to(t.inner, {
                backgroundColor: t.innerDefaultBg,
                color: t.innerDefaultColor
            })
        }), this.link.addEventListener("mousemove", function() {
            var e = t.selectTwoUniqueRandomValues(t.palette);
            a.a.color = e[0], i.a.to(t.inner, {
                backgroundColor: e[0].color,
                color: e[1].color
            })
        })
    }, h.prototype.inViewTl = function() {
        var t = i.a.timeline({
            paused: !0
        });
        t.set(this.el, {
            autoAlpha: 1
        }), t.play()
    }, h.prototype.buildScrollTl = function() {
        var t = new l.a(this.desc, {
                type: "words, lines, chars",
                charsClass: "s-char",
                linesClass: "s-line"
            }),
            e = new l.a(this.date, {
                type: "words, lines, chars",
                charsClass: "s-char",
                linesClass: "s-line"
            });
        this.splits3 = new l.a(this.firstTitle, {
            type: "chars",
            charsClass: "s-char"
        });
        var n = i.a.timeline({
            scrollTrigger: {
                scrub: .5,
                start: "top center",
                end: "top top",
                trigger: this.el
            }
        });
        n.to(e.chars, {
            opacity: 1,
            ease: "linear",
            stagger: .01,
            duration: 2
        }, .95), n.fromTo(t.chars, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "linear",
            stagger: .01,
            duration: 2
        }, .95)
    }, h.prototype.buildFlip = function() {
        var t = u.a.getState(this.splits3.chars);
        this.row.classList.add("justify-content-between"), this.firstTitle.classList.add("d-flex"), this.firstTitle.classList.add("justify-content-between"), u.a.from(t, {
            duration: 1.5,
            ease: function(t) {
                return Object(c.a)(t)
            },
            scrollTrigger: {
                scrub: .5,
                start: "top bottom",
                end: "bottom bottom",
                trigger: this.el
            }
        })
    }, h.prototype.selectTwoUniqueRandomValues = function(t) {
        if (t && t.length >= 2) return t.sort(function() {
            return Math.random() - .5
        }).slice(0, 2)
    }, h.prototype.destroy = function() {
        r.a.killAll(), i.a.ticker.remove(this.onRepeat)
    }, h.prototype.onRepeat = function() {
        this.currentIndex = (this.currentIndex + 1) % this.palette.length
    }, e.a = h
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = function(t) {
            this.el = t, this.nav = document.querySelector(".site-header__nav"), this.closeBtn = document.querySelector(".site-header__nav-close"), this.menuLayer = document.querySelector(".m-layer"), this.menuLinks = this.nav.querySelectorAll(".nav-primary__link")
        };
    r.prototype.init = function() {
        this.bindClick()
    }, r.prototype.bindClick = function() {
        var t = this;
        this.el.addEventListener("click", function(e) {
            e.preventDefault(), t.openMenu()
        }), this.menuLinks.forEach(function(e) {
            e.addEventListener("click", function() {
                t.closeMenu()
            })
        }), this.closeBtn.addEventListener("click", function(e) {
            e.preventDefault(), t.closeMenu()
        }), this.menuLayer.addEventListener("click", function(e) {
            e.preventDefault(), t.closeMenu()
        })
    }, r.prototype.openMenu = function() {
        i.a.to(this.nav, {
            autoAlpha: 1
        }), i.a.to(this.menuLayer, {
            opacity: .5,
            visibility: "visible"
        })
    }, r.prototype.closeMenu = function() {
        i.a.to([this.nav, this.menuLayer], {
            autoAlpha: 0
        })
    }, e.a = r
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = function(t) {
            this.el = t
        };
    r.prototype.init = function() {
        i.a.to(this.el, {
            autoAlpha: 1,
            ease: "power2",
            duration: 1
        })
    }, r.prototype.destroy = function() {}, e.a = r
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(1);
    i.a.registerPlugin(o.a);
    var s = function(t) {
        this.el = t, this.panels = i.a.utils.toArray(".c-panel")
    };
    s.prototype.init = function() {
        var t = this,
            e = i.a.matchMedia();
        this.isXL = !1, e.add(r.a.queries.xl, function() {
            t.isXL = !0
        }), this.isXL && this.buildPin()
    }, s.prototype.buildPin = function() {
        this.panels.forEach(function(t, e) {
            var n = t.dataset.end;
            o.a.create({
                trigger: t,
                start: function() {
                    return t.dataset.start ? t.dataset.start : "top top"
                },
                end: void 0 === n ? "bottom top" : n,
                pin: !0,
                pinSpacing: !1
            })
        })
    }, e.a = s
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = function(t) {
            this.el = t, this.inner = this.el.querySelector(".post-card__inner"), this.aotw = document.querySelector(".aotw"), this.aotwBg = i.a.getProperty(this.aotw, "backgroundColor"), this.aotwColor = i.a.getProperty(this.aotw, "color"), this.innerDefaultBg = i.a.getProperty(this.inner, "backgroundColor"), this.innerDefaultColor = i.a.getProperty(this.inner, "color"), this.img = this.el.querySelector("img"), this.currentIndex = 0, this.bindEvents = this.bindEvents.bind(this)
        };
    o.prototype.init = function() {
        var t = this,
            e = i.a.matchMedia();
        this.isXL = !1, e.add(r.a.queries.xl, function() {
            t.isXL = !0
        })
    }, o.prototype.onRepeat = function() {
        this.currentIndex = (this.currentIndex + 1) % this.palette.length
    }, e.a = o
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(1),
        s = n(4),
        a = n.n(s),
        l = n(6),
        u = n(5),
        c = n(3);
    i.a.registerPlugin(o.a, l.a, u.a);
    var h = function(t) {
        this.el = t, this.elements = i.a.utils.toArray(this.el.querySelectorAll(".index-card__inner")), this.planeElements = i.a.utils.toArray(this.el.querySelectorAll(".gl-plane")), this.planeID = this.constructor.name, this.row = this.el.querySelectorAll(".related-posts__row"), this.titlesA = this.el.querySelector(".related-posts__header__title"), this.toSplit = this.el.querySelectorAll(".related-posts__w"), this.titles = this.toSplit
    };
    h.prototype.init = function() {
        var t = this;
        this.preloadImages();
        var e = i.a.matchMedia();
        this.isXXL = !1, e.add(r.a.queries.xxl, function() {
            t.isXXL = !0
        }), this.isXXL && (this.buildScrollTl(), this.buildFlip())
    }, h.prototype.preloadImages = function() {
        var t = this;
        a()(this.el, function() {
            t.inViewTl()
        })
    }, h.prototype.inViewTl = function() {
        var t = i.a.timeline({
            paused: !0
        });
        t.set(this.el, {
            autoAlpha: 1
        }), t.play()
    }, h.prototype.buildScrollTl = function() {
        var t = new l.a(".related-posts__header__out", {
            type: "words, lines, chars",
            charsClass: "s-char",
            linesClass: "s-line"
        });
        this.splits2 = new l.a(this.titlesA, {
            type: "lines, chars",
            charsClass: "s-char",
            linesClass: "s-line",
            reduceWhiteSpace: !1
        }), i.a.timeline({
            scrollTrigger: {
                scrub: .5,
                start: "top bottom",
                end: "top top",
                trigger: this.el
            }
        }).fromTo(t.chars, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "linear",
            stagger: .05
        }, .95)
    }, h.prototype.buildFlip = function() {
        var t = this,
            e = u.a.getState(".related-posts__w"),
            n = u.a.getState(this.splits2.chars);
        this.splits2.lines[0].classList.add("d-flex"), this.splits2.lines[0].classList.add("justify-content-between"), u.a.from(n, {
            duration: 1.5,
            ease: function(t) {
                return Object(c.a)(t)
            },
            scrollTrigger: {
                scrub: !0,
                trigger: this.el
            }
        }), this.row.forEach(function(n, i) {
            0 === i && (n.classList.add("justify-some"), u.a.from(e, {
                duration: 1.5,
                ease: function(t) {
                    return Object(c.a)(t)
                },
                scrollTrigger: {
                    scrub: .7,
                    start: "top bottom",
                    end: "bottom bottom",
                    trigger: t.el
                }
            }))
        })
    }, h.prototype.destroy = function() {
        o.a.killAll()
    }, e.a = h
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n.n(o),
        a = n(3);
    i.a.registerPlugin(r.a);
    var l = function(t) {
        this.el = t, this.planeElements = i.a.utils.toArray(this.el.querySelectorAll(".gl-plane")), this.title = this.el.querySelectorAll(".display--hero"), this.image = this.el.querySelectorAll(".single-header__image"), this.planeID = this.constructor.name
    };
    l.prototype.init = function() {
        this.preloadImages()
    }, l.prototype.preloadImages = function() {
        var t = this;
        s()(this.el, function() {
            t.inViewTl()
        })
    }, l.prototype.inViewTl = function() {
        var t = i.a.timeline({
            paused: !0,
            defaults: {
                ease: function(t) {
                    return Object(a.a)(t)
                }
            }
        });
        t.set(this.el, {
            autoAlpha: 1
        }), t.play(), t.fromTo([this.title, this.image], {
            autoAlpha: 0,
            y: 100
        }, {
            autoAlpha: 1,
            y: 0,
            stagger: .1
        })
    }, l.prototype.destroy = function() {
        r.a.killAll()
    }, e.a = l
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(3),
        o = function(t) {
            this.el = t, this.menuItems = this.el.querySelectorAll(".menu-item"), this.last = this.el.querySelector(".last-updated"), this.sLinks = this.el.querySelector(".s-links"), this.tagline = this.el.querySelector(".site-header__tagline"), this.brand = this.el.querySelector(".site-header__brand")
        };
    o.prototype.init = function() {
        this.inViewTl()
    }, o.prototype.inViewTl = function() {
        var t = i.a.timeline({
            defaults: {
                duration: .7,
                ease: function(t) {
                    return Object(r.a)(t)
                }
            }
        });
        t.fromTo([this.el, this.brand, this.tagline], {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 1,
            stagger: .2
        }, 0), t.fromTo([this.menuItems, this.last, this.sLinks], {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0,
            stagger: .05
        }, 0)
    }, o.prototype.destroy = function() {}, e.a = o
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(43),
        o = n(44),
        s = n(45);
    i.a.registerPlugin(r.a, o.a, s.a);
    var a = function(t) {
        this.el = t, this.paths = this.el.querySelectorAll("path")
    };
    a.prototype.init = function() {
        this.buildScribble()
    }, a.prototype.buildScribble = function() {
        i.a.from(this.paths, {
            duration: 2,
            drawSVG: 0,
            repeat: -1,
            ease: "rough({strength: 1, points: 50, taper: none, randomize: true })"
        })
    }, e.a = a
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return T
    });
    /*!
     * DrawSVGPlugin 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, o, s, a, l, u, c, h = function() {
            return "undefined" != typeof window
        },
        d = function() {
            return i || h() && (i = window.gsap) && i.registerPlugin && i
        },
        p = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        f = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        m = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        g = function(t) {
            return parseFloat(t) || 0
        },
        v = function(t, e) {
            var n = g(t);
            return ~t.indexOf("%") ? n / 100 * e : n
        },
        y = function(t, e) {
            return g(t.getAttribute(e))
        },
        b = Math.sqrt,
        D = function(t, e, n, i, r, o) {
            return b(Math.pow((g(n) - g(t)) * r, 2) + Math.pow((g(i) - g(e)) * o, 2))
        },
        w = function(t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect")
        },
        _ = function(t) {
            if (!(t = r(t)[0])) return 0;
            var e, n, i, o, s, a, u, c = t.tagName.toLowerCase(),
                h = t.style,
                d = 1,
                g = 1;
            w(t) && (g = t.getScreenCTM(), d = b(g.a * g.a + g.b * g.b), g = b(g.d * g.d + g.c * g.c));
            try {
                n = t.getBBox()
            } catch (t) {}
            var v = n || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                _ = v.x,
                x = v.y,
                C = v.width,
                T = v.height;
            if (n && (C || T) || !f[c] || (C = y(t, f[c][0]), T = y(t, f[c][1]), "rect" !== c && "line" !== c && (C *= 2, T *= 2), "line" === c && (_ = y(t, "x1"), x = y(t, "y1"), C = Math.abs(C - _), T = Math.abs(T - x))), "path" === c) o = h.strokeDasharray, h.strokeDasharray = "none", e = t.getTotalLength() || 0, m(d) !== m(g) && !l && (l = 1), e *= (d + g) / 2, h.strokeDasharray = o;
            else if ("rect" === c) e = 2 * C * d + 2 * T * g;
            else if ("line" === c) e = D(_, x, _ + C, x + T, d, g);
            else if ("polyline" === c || "polygon" === c)
                for (i = t.getAttribute("points").match(p) || [], "polygon" === c && i.push(i[0], i[1]), e = 0, s = 2; s < i.length; s += 2) e += D(i[s - 2], i[s - 1], i[s], i[s + 1], d, g) || 0;
            else "circle" !== c && "ellipse" !== c || (a = C / 2 * d, u = T / 2 * g, e = Math.PI * (3 * (a + u) - b((3 * a + u) * (a + 3 * u))));
            return e || 0
        },
        x = function(t, e) {
            if (!(t = r(t)[0])) return [0, 0];
            e || (e = _(t) + 1);
            var n = o.getComputedStyle(t),
                i = n.strokeDasharray || "",
                s = g(n.strokeDashoffset),
                a = i.indexOf(",");
            return a < 0 && (a = i.indexOf(" ")), (i = a < 0 ? e : g(i.substr(0, a))) > e && (i = e), [-s || 0, i - s || 0]
        },
        C = function() {
            h() && (document, o = window, a = i = d(), r = i.utils.toArray, u = i.core.getStyleSaver, c = i.core.reverting || function() {}, s = -1 !== ((o.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        T = {
            version: "3.12.2",
            name: "drawSVG",
            register: function(t) {
                i = t, C()
            },
            init: function(t, e, n, i, r) {
                if (!t.getBBox) return !1;
                a || C();
                var l, c, h, d = _(t);
                return this.styles = u && u(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = n, this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", c = function(t, e, n) {
                    var i, r, o = t.indexOf(" ");
                    return o < 0 ? (i = void 0 !== n ? n + "" : t, r = t) : (i = t.substr(0, o), r = t.substr(o + 1)), (i = v(i, e)) > (r = v(r, e)) ? [r, i] : [i, r]
                }(e, d, (l = x(t, d))[0]), this._length = m(d), this._dash = m(l[1] - l[0]), this._offset = m(-l[0]), this._dashPT = this.add(this, "_dash", this._dash, m(c[1] - c[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, m(-c[0]), 0, 0, 0, 0, 0, 1), s && (h = o.getComputedStyle(t)).strokeLinecap !== h.strokeLinejoin && (c = g(h.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", c, c + .01)), this._live = w(t) || ~(e + "").indexOf("live"), this._nowrap = ~(e + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                if (e.tween._time || !c()) {
                    var n, i, r, o, s = e._pt,
                        a = e._style;
                    if (s) {
                        for (e._live && (n = _(e._target)) !== e._length && (i = n / e._length, e._length = n, e._offsetPT && (e._offsetPT.s *= i, e._offsetPT.c *= i), e._dashPT ? (e._dashPT.s *= i, e._dashPT.c *= i) : e._dash *= i); s;) s.r(t, s.d), s = s._next;
                        r = e._dash || t && 1 !== t && 1e-4 || 0, n = e._length - r + .1, o = e._offset, r && o && r + Math.abs(o % e._length) > e._length - .2 && (o += o < 0 ? .1 : -.1) && (n += .1), a.strokeDashoffset = r ? o : o + .001, a.strokeDasharray = n < .2 ? "none" : r ? r + "px," + (e._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                    }
                } else e.styles.revert()
            },
            getLength: _,
            getPosition: x
        };
    d() && i.registerPlugin(T)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return m
    });
    /*!
     * EasePack 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, o = function() {
            return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        s = function(t, e) {
            return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"))
        },
        a = function(t) {
            if (i = t || o()) {
                r = i.registerEase;
                var e, n = i.parseEase(),
                    s = function(t) {
                        return function(e) {
                            var n = .5 + e / 2;
                            t.config = function(e) {
                                return t(2 * (1 - e) * e * n + e * e)
                            }
                        }
                    };
                for (e in n) n[e].config || s(n[e]);
                for (e in r("slow", d), r("expoScale", p), r("rough", f), m) "version" !== e && i.core.globals(e, m[e]);
                1
            }
        },
        l = function(t, e, n) {
            var i = (t = Math.min(1, t || .7)) < 1 ? e || 0 === e ? e : .7 : 0,
                r = (1 - t) / 2,
                o = r + t,
                a = s(n);
            return function(t) {
                var e = t + (.5 - t) * i;
                return t < r ? a ? 1 - (t = 1 - t / r) * t : e - (t = 1 - t / r) * t * t * t * e : t > o ? a ? 1 === t ? 0 : 1 - (t = (t - o) / r) * t : e + (t - e) * (t = (t - o) / r) * t * t * t : a ? 1 : e
            }
        },
        u = function(t, e, n) {
            var r = Math.log(e / t),
                o = e - t;
            return n && (n = i.parseEase(n)),
                function(e) {
                    return (t * Math.exp(r * (n ? n(e) : e)) - t) / o
                }
        },
        c = function(t, e, n) {
            this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
        },
        h = function(t) {
            "object" != typeof t && (t = {
                points: +t || 20
            });
            for (var e, n, r, o, a, l, u, h = t.taper || "none", d = [], p = 0, f = 0 | (+t.points || 20), m = f, g = s(t.randomize, !0), v = s(t.clamp), y = i ? i.parseEase(t.template) : 0, b = .4 * (+t.strength || 1); --m > -1;) e = g ? Math.random() : 1 / f * m, n = y ? y(e) : e, r = "none" === h ? b : "out" === h ? (o = 1 - e) * o * b : "in" === h ? e * e * b : e < .5 ? (o = 2 * e) * o * .5 * b : (o = 2 * (1 - e)) * o * .5 * b, g ? n += Math.random() * r - .5 * r : m % 2 ? n += .5 * r : n -= .5 * r, v && (n > 1 ? n = 1 : n < 0 && (n = 0)), d[p++] = {
                x: e,
                y: n
            };
            for (d.sort(function(t, e) {
                    return t.x - e.x
                }), l = new c(1, 1, null), m = f; m--;) a = d[m], l = new c(a.x, a.y, l);
            return u = new c(0, 0, l.t ? l : l.next),
                function(t) {
                    var e = u;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return u = e, e.v + (t - e.t) / e.gap * e.c
                }
        },
        d = l(.7);
    d.ease = d, d.config = l;
    var p = u(1, 2);
    p.config = u;
    var f = h();
    f.ease = f, f.config = h;
    var m = {
        SlowMo: d,
        RoughEase: f,
        ExpoScaleEase: p
    };
    for (var g in m) m[g].register = a, m[g].version = "3.12.2";
    o() && i.registerPlugin(d)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return d
    });
    /*!
     * CustomWiggle 3.12.2
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, o, s = function() {
            return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        a = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
        },
        l = function(t) {
            return t
        },
        u = function(t) {
            if (!r && (i = s(), o = i && i.parseEase("_CE"))) {
                for (var e in a) a[e] = o("", a[e]);
                r = 1, h("wiggle").config = function(t) {
                    return "object" == typeof t ? h("", t) : h("wiggle(" + t + ")", {
                        wiggles: +t
                    })
                }
            }
        },
        c = function(t, e) {
            return "function" != typeof t && (t = i.parseEase(t) || o("", t)), t.custom || !e ? t : function(e) {
                return 1 - t(e)
            }
        },
        h = function(t, e) {
            r || u();
            var n, i, s, h, d, p, f, m, g, v = 0 | ((e = e || {}).wiggles || 10),
                y = 1 / v,
                b = y / 2,
                D = "anticipate" === e.type,
                w = a[e.type] || a.easeOut,
                _ = l;
            if (D && (_ = w, w = a.easeOut), e.timingEase && (_ = c(e.timingEase)), e.amplitudeEase && (w = c(e.amplitudeEase, !0)), m = [0, 0, (p = _(b)) / 4, 0, p / 2, f = D ? -w(b) : w(b), p, f], "random" === e.type) {
                for (m.length = 4, n = _(y), i = 2 * Math.random() - 1, g = 2; g < v; g++) b = n, f = i, n = _(y * g), i = 2 * Math.random() - 1, s = Math.atan2(i - m[m.length - 3], n - m[m.length - 4]), h = Math.cos(s) * y, d = Math.sin(s) * y, m.push(b - h, f - d, b, f, b + h, f + d);
                m.push(n, 0, 1, 0)
            } else {
                for (g = 1; g < v; g++) m.push(_(b + y / 2), f), b += y, f = (f > 0 ? -1 : 1) * w(g * y), p = _(b), m.push(_(b - y / 2), f, p, f);
                m.push(_(b + y / 4), f, _(b + y / 4), 0, 1, 0)
            }
            for (g = m.length; --g > -1;) m[g] = ~~(1e3 * m[g]) / 1e3;
            return m[2] = "C" + m[2], o(t, "M" + m.join(","))
        },
        d = function() {
            function t(t, e) {
                this.ease = h(t, e)
            }
            return t.create = function(t, e) {
                return h(t, e)
            }, t.register = function(t) {
                i = t, u()
            }, t
        }();
    s() && i.registerPlugin(d), d.version = "3.12.2"
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(3);
    i.a.registerPlugin(r.a);
    var s = function(t) {
        this.el = t, this.items = i.a.utils.toArray(this.el.querySelectorAll(".genres__item")), this.heading = i.a.utils.toArray(this.el.querySelectorAll(".genres__heading"))
    };
    s.prototype.init = function() {
        this.inViewTl()
    }, s.prototype.inViewTl = function() {
        var t = i.a.timeline({
            defaults: {
                ease: function(t) {
                    return Object(o.a)(t)
                }
            }
        });
        t.set(this.el, {
            autoAlpha: 1
        }), t.fromTo(this.heading, {
            autoAlpha: 0,
            y: 50
        }, {
            autoAlpha: 1,
            y: 0
        }), r.a.batch(this.items, {
            once: !0,
            onEnter: function(t) {
                t.forEach(function(t) {
                    var e = t.querySelectorAll(".genres__item-inner"),
                        n = t.querySelectorAll(".genres__item__row"),
                        r = t.querySelectorAll(".genres__item__row span"),
                        s = t.querySelectorAll(".genres__title"),
                        a = i.a.timeline({
                            defaults: {
                                ease: function(t) {
                                    return Object(o.a)(t)
                                },
                                duration: 1
                            }
                        });
                    a.fromTo(n, {
                        scaleX: 0
                    }, {
                        scaleX: 1
                    }, 0), a.fromTo(s, {
                        autoAlpha: 0,
                        yPercent: 100
                    }, {
                        autoAlpha: 1,
                        yPercent: 0
                    }, 0), a.fromTo(e, {
                        autoAlpha: 0,
                        yPercent: 100
                    }, {
                        autoAlpha: 1,
                        stagger: {
                            amount: 1,
                            from: "random"
                        },
                        yPercent: 0
                    }, 0), a.fromTo(r, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1
                    }, 0)
                })
            }
        })
    }, e.a = s
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(3);
    i.a.registerPlugin(r.a);
    var s = function(t) {
        this.el = t, this.elements = i.a.utils.toArray(this.el.querySelectorAll(".labels__item")), this.row = document.querySelector(".l-row")
    };
    s.prototype.init = function() {
        this.inViewTl()
    }, s.prototype.inViewTl = function() {
        var t = i.a.timeline();
        t.to(this.el, {
            autoAlpha: 1
        }).fromTo(this.row, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: 1,
            ease: function(t) {
                return Object(o.a)(t)
            }
        }), t.fromTo(this.elements, {
            autoAlpha: 0,
            y: 200
        }, {
            autoAlpha: 1,
            stagger: {
                grid: "auto",
                amount: 1
            },
            y: 0,
            duration: 1,
            ease: function(t) {
                return Object(o.a)(t)
            }
        }, 0)
    }, e.a = s
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(1);
    i.a.registerPlugin(o.a);
    var s = function(t) {
        this.el = t, this.trigger = this.el.dataset.prev
    };
    s.prototype.init = function() {
        var t = this,
            e = i.a.matchMedia();
        if (this.isXL = !1, e.add(r.a.queries.xl, function() {
                t.isXL = !0
            }), this.isXL) {
            i.a.set(this.el, {
                yPercent: -40
            });
            var n = i.a.timeline({
                paused: !0
            });
            n.to(this.el, {
                yPercent: 0,
                ease: "none"
            }), o.a.create({
                trigger: this.trigger,
                start: "bottom bottom",
                end: "+=120%",
                animation: n,
                scrub: !0
            })
        }
    }, e.a = s
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(5),
        o = n(3),
        s = n(9),
        a = n(10),
        l = n(2),
        u = n(8);
    i.a.registerPlugin(r.a);
    var c = function(t) {
        this.el = document.querySelector(".preloader"), this.texts = this.el.querySelectorAll("span"), this.spans = i.a.utils.toArray(this.el.querySelectorAll("span")), this.postsList = this.el.querySelector(".preloader__posts"), this.posts = i.a.utils.toArray(this.el.querySelectorAll(".preloader__post")), l.a.shoudDrawCursor = !1, this.setup = this.setup.bind(this), this.buildOnce = this.buildOnce.bind(this), this.line = {
            x: {
                value: 100,
                target: 0
            },
            y: {
                value: 100,
                target: 0
            },
            width: {
                value: 0
            },
            color: "rgba(234, 15, 50, 1)"
        }, l.a.line = this.line, l.a.mouseAlt = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
    };
    c.prototype.init = function() {
        var t = this;
        i.a.to(this.el, {
            autoAlpha: 1,
            ease: function(t) {
                return Object(o.a)(t)
            },
            onComplete: function() {
                i.a.delayedCall(1, t.setup)
            }
        })
    }, c.prototype.setup = function() {
        var t = this;
        this.cc = new u.a, this.cc.initPreloader();
        var e = i.a.timeline({
            ease: function(t) {
                return Object(o.a)(t)
            },
            onComplete: function() {
                t.el.remove(), i.a.set(".cursor__canvas", {
                    autoAlpha: 1,
                    duration: 1
                }), l.a.shoudDrawCursor = !0, t.cc.init()
            }
        });
        e.set(".preloader__posts", {
            autoAlpha: 1
        }), e.fromTo(".baba", {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 1
        }, 0), e.to(".baba", {
            autoAlpha: 0,
            delay: 1
        }), e.fromTo(this.posts, {
            x: 0,
            y: 0,
            autoAlpha: 0
        }, {
            x: function() {
                return Math.random() * innerWidth - innerWidth / 2
            },
            y: function() {
                return Math.random() * innerHeight - innerHeight / 2
            },
            duration: 1.7,
            autoAlpha: 1,
            stagger: {
                each: .001,
                from: "random",
                ease: function(t) {
                    return Object(o.b)(t)
                }
            }
        }, "<"), e.to(".cursor__canvas", {
            autoAlpha: 0,
            duration: .5
        }, "<"), e.to(this.spans, {
            autoAlpha: 0
        }, "<"), e.set(this.posts, {
            autoAlpha: 0,
            delay: 1,
            stagger: {
                each: .005,
                from: "random"
            }
        }), e.set(".cursor__canvas", {
            autoAlpha: 1
        }, "<"), e.to(l.a.mouseAlt, {
            x: i.a.utils.random(0, innerWidth),
            y: i.a.utils.random(0, -innerHeight),
            duration: 1.5
        }, "<"), e.to(this.el, {
            autoAlpha: 0
        }, 6), e.call(function() {
            t.buildOnce()
        }, null, "<");
        var n = r.a.getState(this.spans);
        this.el.classList.add("is-just"), r.a.from(n, {
            duration: 1.5,
            absolute: !0,
            ease: function(t) {
                return Object(o.a)(t)
            }
        })
    }, c.prototype.buildOnce = function() {
        l.a.valis = new s.a;
        var t = i.a.utils.toArray(document.querySelectorAll("[data-component]"));
        l.a.valis.initComponents(a, t), document.querySelector("html").classList.remove("block-ui")
    }, e.a = c
}, function(t, e) {}]);
