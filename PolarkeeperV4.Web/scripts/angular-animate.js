﻿/*
 AngularJS v1.4.0-build.3993+sha.1268b17
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (E, t, U) {
    'use strict'; function ra(a, b, c) { if (!a) throw ngMinErr("areq", b || "?", c || "required"); return a } function sa(a, b) { if (!a && !b) return ""; if (!a) return b; if (!b) return a; V(a) && (a = a.join(" ")); V(b) && (b = b.join(" ")); return a + " " + b } function Aa(a) { var b = {}; a && (a.to || a.from) && (b.to = a.to, b.from = a.from); return b } function Z(a, b, c) { var d = ""; a = V(a) ? a : a && S(a) && a.length ? a.split(/\s+/) : []; f(a, function (a, u) { a && 0 < a.length && (d += 0 < u ? " " : "", d += c ? b + a : a + b) }); return d } function Ba(a) {
        return 1 === a.nodeType ? C(a) : 0 ===
        a.length ? [] : 1 === a.length ? 1 === a[0].nodeType && a : C(ia(a))
    } function ia(a) { if (!a[0]) return a; for (var b = 0; b < a.length; b++) { var c = a[b]; if (1 == c.nodeType) return c } } function Ca(a, b, c) { f(b, function (b) { a.addClass(b, c) }) } function Da(a, b, c) { f(b, function (b) { a.removeClass(b, c) }) } function fa(a) { return function (b, c) { c.addClass && (Ca(a, b, c.addClass), c.addClass = null); c.removeClass && (Da(a, b, c.removeClass), c.removeClass = null) } } function ga(a) {
        a = a || {}; if (!a.$$prepared) {
            var b = a.domOperation || J; a.domOperation = function () {
                a.$$domOperationFired =
                !0; b(); b = J
            }; a.$$prepared = !0
        } return a
    } function aa(a, b) { ta(a, b); ua(a, b) } function ta(a, b) { b.from && (a.css(b.from), b.from = null) } function ua(a, b) { b.to && (a.css(b.to), b.to = null) } function P(a, b, c) { var d = (b.addClass || "") + " " + (c.addClass || ""), g = (b.removeClass || "") + " " + (c.removeClass || ""); a = Ea(a.attr("class"), d, g); va(b, c); b.addClass = a.addClass ? a.addClass : null; b.removeClass = a.removeClass ? a.removeClass : null; return b } function Ea(a, b, c) {
        function d(a) {
            S(a) && (a = a.split(" ")); var b = {}; f(a, function (a) {
                a.length && (b[a] =
                !0)
            }); return b
        } var g = {}; a = d(a); b = d(b); f(b, function (a, b) { g[b] = 1 }); c = d(c); f(c, function (a, b) { g[b] = 1 === g[b] ? null : -1 }); var u = { addClass: "", removeClass: "" }; f(g, function (b, c) { var d, g; 1 === b ? (d = "addClass", g = !a[c]) : -1 === b && (d = "removeClass", g = a[c]); g && (u[d].length && (u[d] += " "), u[d] += c) }); return u
    } function wa(a, b, c) { var d = Object.create(null), g = a.getComputedStyle(b) || {}; f(c, function (a, b) { var c = g[a]; if (c) { var x = c.charAt(0); if ("-" === x || "+" === x || 0 <= x) c = Fa(c); 0 === c && (c = null); d[b] = c } }); return d } function Fa(a) {
        var b =
        0; a = a.split(/\s*,\s*/); f(a, function (a) { "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); a = parseFloat(a) || 0; b = b ? Math.max(a, b) : a }); return b
    } function ja(a) { return 0 === a || null != a } function xa(a, b) { var c = N, d = a + "s"; b ? c += "Duration" : d += " linear all"; return [c, d] } function ha(a, b) { var c = b ? "-" + b + "s" : ""; ba(a, [ca, c]); return [ca, c] } function ka(a, b) { var c = b ? "paused" : "", d = T + "PlayState"; ba(a, [d, c]); return [d, c] } function ba(a, b) { a.style[b[0]] = b[1] } function ya() {
        var a = Object.create(null); return {
            flush: function () {
                a =
                Object.create(null)
            }, count: function (b) { return (b = a[b]) ? b.total : 0 }, get: function (b) { return (b = a[b]) && b.value }, put: function (b, c) { a[b] ? a[b].total++ : a[b] = { total: 1, value: c } }
        }
    } var J = t.noop, va = t.extend, C = t.element, f = t.forEach, V = t.isArray, S = t.isString, la = t.isObject, Ga = t.isUndefined, Ha = t.isDefined, Ia = t.isFunction, ma = t.isElement, N, na, T, oa; E.ontransitionend === U && E.onwebkittransitionend !== U ? (N = "WebkitTransition", na = "webkitTransitionEnd transitionend") : (N = "transition", na = "transitionend"); E.onanimationend === U && E.onwebkitanimationend !==
    U ? (T = "WebkitAnimation", oa = "webkitAnimationEnd animationend") : (T = "animation", oa = "animationend"); var pa = T + "Delay", qa = T + "Duration", ca = N + "Delay"; E = N + "Duration"; var Ja = { transitionDuration: E, transitionDelay: ca, transitionProperty: N + "Property", animationDuration: qa, animationDelay: pa, animationIterationCount: T + "IterationCount" }, Ka = { transitionDuration: E, transitionDelay: ca, animationDuration: qa, animationDelay: pa }; t.module("ngAnimate", []).directive("ngAnimateChildren", [function () {
        return function (a, b, c) {
            a = c.ngAnimateChildren;
            t.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function (a) { b.data("$$ngAnimateChildren", "on" === a || "true" === a) })
        }
    }]).factory("$$rAFMutex", ["$$rAF", function (a) { return function () { var b = !1; a(function () { b = !0 }); return function (c) { b ? c() : a(c) } } }]).factory("$$AnimateRunner", ["$q", "$$rAFMutex", function (a, b) {
        function c(a) { this.setHost(a); this._doneCallbacks = []; this._runInAnimationFrame = b(); this._state = 0 } c.chain = function (a, b) {
            function c() {
                if (B === a.length) b(!0); else a[B](function (a) {
                    !1 ===
                    a ? b(!1) : (B++, c())
                })
            } var B = 0; c()
        }; c.all = function (a, b) { function c(u) { r = r && u; ++B === a.length && b(r) } var B = 0, r = !0; f(a, function (a) { a.done(c) }) }; c.prototype = {
            setHost: function (a) { this.host = a || {} }, done: function (a) { 2 === this._state ? a() : this._doneCallbacks.push(a) }, progress: J, getPromise: function () { if (!this.promise) { var b = this; this.promise = a(function (a, c) { b.done(function (b) { !1 === b ? c() : a() }) }) } return this.promise }, then: function (a, b) { return this.getPromise().then(a, b) }, "catch": function (a) { return this.getPromise()["catch"](a) },
            "finally": function (a) { return this.getPromise()["finally"](a) }, pause: function () { this.host.pause && this.host.pause() }, resume: function () { this.host.resume && this.host.resume() }, end: function () { this.host.end && this.host.end(); this._resolve(!0) }, cancel: function () { this.host.cancel && this.host.cancel(); this._resolve(!1) }, complete: function (a) { var b = this; 0 === b._state && (b._state = 1, b._runInAnimationFrame(function () { b._resolve(a) })) }, _resolve: function (a) {
                2 !== this._state && (f(this._doneCallbacks, function (b) { b(a) }), this._doneCallbacks.length =
                0, this._state = 2)
            }
        }; return c
    }]).provider("$$animateQueue", ["$animateProvider", function (a) {
        function b(a, b, c, r) { return d[a].some(function (a) { return a(b, c, r) }) } function c(a, b) { a = a || {}; var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length; return b ? c && d : c || d } var d = this.rules = { skip: [], cancel: [], join: [] }; d.join.push(function (a, b, d) { return !b.structural && c(b.options) }); d.skip.push(function (a, b, d) { return !b.structural && !c(b.options) }); d.skip.push(function (a, b, c) { return "leave" == c.event && b.structural });
        d.skip.push(function (a, b, c) { return c.structural && !b.structural }); d.cancel.push(function (a, b, c) { return c.structural && b.structural }); d.cancel.push(function (a, b, c) { return 2 === c.state && b.structural }); this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function (d, u, B, r, x, h, K, s, da) {
            function F(a, b) { var c = a[0], e = [], l = k[b]; l && f(l, function (a) { a.node.contains(c) && e.push(a.callback) }); return e } function W(a, b, c, e) {
                d(function () {
                    f(F(b,
                    a), function (a) { a(b, c, e) })
                })
            } function L(a, Q, p) {
                function w(b, c, e, l) { W(c, a, e, l); b.progress(c, e, l) } function d(b) { za(a, p); aa(a, p); p.domOperation(); g.complete(!b) } a = Ba(a); var k = a[0]; p = ga(p); var Y = a.parent(), g = new K; if (!k) return g.end(), g; V(p.addClass) && (p.addClass = p.addClass.join(" ")); V(p.removeClass) && (p.removeClass = p.removeClass.join(" ")); p.from && !la(p.from) && (p.from = null); p.to && !la(p.to) && (p.to = null); var n = [k.className, p.addClass, p.removeClass].join(" "); if (!La(n)) return d(), g; var r = 0 <= ["enter", "move",
                "leave"].indexOf(Q), f = !D || l.get(k), n = !f && m.get(k) || {}, x = !!n.state; f || x && 1 == n.state || (f = !e(a, Y, Q)); if (f) return d(), g; r && H(a); f = { structural: r, element: a, event: Q, options: p, runner: g }; if (x) { if (b("skip", a, f, n)) { if (2 === n.state) return d(), g; P(a, n.options, p); return n.runner } if (b("cancel", a, f, n)) 2 === n.state ? n.runner.end() : P(a, f.options, n.options); else if (b("join", a, f, n)) if (2 === n.state) P(a, p, {}); else return Q = f.event = n.event, p = P(a, n.options, f.options), g } else P(a, p, {}); (x = f.structural) || (x = "animate" === f.event &&
                0 < Object.keys(f.options.to || {}).length || c(f.options)); if (!x) return d(), g; z(Y); var s = (n.counter || 0) + 1; f.counter = s; I(a, 1, f); u.$$postDigest(function () {
                    var b = m.get(k), e = !b, b = b || {}, l = a.parent() || [], D = 0 < l.length && ("animate" === b.event || b.structural || c(b.options)); if (e || b.counter !== s || !D) { if (e && (za(a, p), aa(a, p)), e || r && b.event !== Q) p.domOperation(), g.end() } else Q = !b.structural && c(b.options, !0) ? "setClass" : b.event, z(l), I(a, 2), b = h(a, Q, b.options), b.done(function (b) {
                        d(!b); (b = m.get(k)) && b.counter === s && A(a); w(g, Q,
                        "close", {})
                    }), g.setHost(b), w(g, Q, "start", {})
                }); return g
            } function H(a) { a = a[0].querySelectorAll("[data-ng-animate]"); f(a, function (a) { var b = parseInt(a.getAttribute("data-ng-animate")), c = m.get(a); switch (b) { case 2: c.runner.end(); case 1: c && m.remove(a) } }) } function A(a) { a = a.length ? a[0] : a; a.removeAttribute("data-ng-animate"); m.remove(a) } function v(a, b) { a = a.length ? a[0] : a; b = b.length ? b[0] : b; return a === b } function z(a) {
                a = a[0]; do {
                    if (!a || 1 !== a.nodeType) break; var b = m.get(a); if (b) {
                        var e = a; !b.structural && c(b.options) &&
                        (2 === b.state && b.runner.end(), A(e))
                    } a = a.parentNode
                } while (1)
            } function e(a, b, c) { var e = c = !1, D = !1, d; for ((a = a.data("$ngAnimatePin")) && (b = a) ; b && b.length;) { e || (e = v(b, B)); a = b[0]; if (1 !== a.nodeType) break; var k = m.get(a) || {}; D || (D = k.structural || l.get(a)); if (Ga(d) || !0 === d) a = b.data("$$ngAnimateChildren"), Ha(a) && (d = a); if (D && !1 === d) break; e || (e = v(b, B), e || (a = b.data("$ngAnimatePin")) && (b = a)); c || (c = v(b, w)); b = b.parent() } return (!D || d) && e && c } function I(a, b, c) {
                c = c || {}; c.state = b; a = a.length ? a[0] : a; a.setAttribute("data-ng-animate",
                b); c = (b = m.get(a)) ? va(b, c) : c; m.put(a, c)
            } var m = new x, l = new x, D = null, Y = u.$watch(function () { return 0 === s.totalPendingRequests }, function (a) { a && (Y(), u.$$postDigest(function () { u.$$postDigest(function () { null === D && (D = !0) }) })) }), w = C(r[0].body), k = {}, n = a.classNameFilter(), La = n ? function (a) { return n.test(a) } : function () { return !0 }, za = fa(da); return {
                on: function (a, b, c) { b = ia(b); k[a] = k[a] || []; k[a].push({ node: b, callback: c }) }, off: function (a, b, c) {
                    function e(a, b, c) {
                        var l = ia(b); return a.filter(function (a) {
                            return !(a.node ===
                            l && (!c || a.callback === c))
                        })
                    } var l = k[a]; l && (k[a] = 1 === arguments.length ? null : e(l, b, c))
                }, pin: function (a, b) { ra(ma(a), "element", "not an element"); ra(ma(b), "parentElement", "not an element"); a.data("$ngAnimatePin", b) }, push: function (a, b, c, e) { c = c || {}; c.domOperation = e; return L(a, b, c) }, enabled: function (a, b) { var c = arguments.length; if (0 === c) b = !!D; else if (ma(a)) { var e = a.length ? a[0] : a, d = l.get(e); 1 === c ? b = !d : (b = !!b) ? d && l.remove(e) : l.put(e, !0) } else b = D = !!a; return b }
            }
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        function b(a) { return a.data("$$animationRunner") }
        var c = this.drivers = []; this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", function (a, g, u, B) {
            var r = [], x = fa(a); return function (h, K, s) {
                function da(a) { a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]"); var b = []; f(a, function (a) { var c = a.getAttribute("ng-animate-ref"); c && c.length && b.push(a) }); return b } function F(a) {
                    var b = [], c = {}; f(a, function (a, e) {
                        var l = a.element[0], d = 0 <= ["enter", "move"].indexOf(a.event), l = a.structural ? da(l) : []; if (l.length) {
                            var k = d ? "to" : "from"; f(l,
                            function (a) { var b = a.getAttribute("ng-animate-ref"); c[b] = c[b] || {}; c[b][k] = { animationID: e, element: C(a) } })
                        } else b.push(a)
                    }); var e = {}, d = {}; f(c, function (c, g) {
                        var m = c.from, z = c.to; if (m && z) { var f = a[m.animationID], p = a[z.animationID], I = m.animationID.toString(); if (!d[I]) { var Y = d[I] = { start: function () { f.start(); p.start() }, close: function () { f.close(); p.close() }, classes: W(f.classes, p.classes), from: f, to: p, anchors: [] }; Y.classes.length ? b.push(Y) : (b.push(f), b.push(p)) } d[I].anchors.push({ out: m.element, "in": z.element }) } else m =
                        m ? m.animationID : z.animationID, z = m.toString(), e[z] || (e[z] = !0, b.push(a[m]))
                    }); return b
                } function W(a, b) { a = a.split(" "); b = b.split(" "); for (var c = [], e = 0; e < a.length; e++) { var d = a[e]; if ("ng-" !== d.substring(0, 3)) for (var m = 0; m < b.length; m++) if (d === b[m]) { c.push(d); break } } return c.join(" ") } function L(a) { for (var b = c.length - 1; 0 <= b; b--) { var e = c[b]; if (u.has(e) && (e = u.get(e)(a))) return e } } function H(a, c) { a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c) } function A() {
                    var a =
                    b(h); !a || "leave" === K && s.$$domOperationFired || a.end()
                } function v(b) { h.off("$destroy", A); h.removeData("$$animationRunner"); x(h, s); aa(h, s); s.domOperation(); m && a.removeClass(h, m); h.removeClass("ng-animate"); e.complete(!b) } s = ga(s); var z = 0 <= ["enter", "move", "leave"].indexOf(K), e = new B({ end: function () { v() }, cancel: function () { v(!0) } }); if (!c.length) return v(), e; h.data("$$animationRunner", e); var I = sa(h.attr("class"), sa(s.addClass, s.removeClass)), m = s.tempClasses; m && (I += " " + m, s.tempClasses = null); r.push({
                    element: h,
                    classes: I, event: K, structural: z, options: s, start: function () { h.addClass("ng-animate"); m && a.addClass(h, m) }, close: v
                }); h.on("$destroy", A); if (1 < r.length) return e; g.$$postDigest(function () { var a = []; f(r, function (c) { b(c.element) && a.push(c) }); r.length = 0; f(F(a), function (a) { var b = a.start, c = a.close, e = L(a); (e = e && e.start) ? (b(), b = e(), b.done(function (a) { c(!a) }), H(a, b)) : c() }) }); return e
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = ya(), c = ya(); this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout",
        "$document", "$sniffer", "$$rAF", function (a, g, u, B, r, x, h) {
            function K(a, b) { var c = a.parentNode; return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++L)) + "-" + a.getAttribute("class") + "-" + b } function s(z, e, f, m) { var l; 0 < b.count(f) && (l = c.get(f), l || (e = Z(e, "-stagger"), g.addClass(z, e), l = wa(a, z, m), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), g.removeClass(z, e), c.put(f, l))); return l || {} } function da(a) {
                A && A(); v.push(a); A = h(function () {
                    A = null; b.flush();
                    c.flush(); for (var a = H.offsetWidth + 1, d = 0; d < v.length; d++) v[d](a); v.length = 0
                })
            } function F(c, e, f) { e = b.get(f); e || (e = wa(a, c, Ja), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1)); b.put(f, e); c = e; f = c.animationDelay; e = c.transitionDelay; c.maxDelay = f && e ? Math.max(f, e) : f || e; c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration); return c } var W = fa(g), L = 0, H = r[0].body, A, v = []; return function (a, c) {
                function d() { l() } function m() { l(!0) } function l(b) {
                    if (!(H || L && v)) {
                        H =
                        !0; v = !1; g.removeClass(a, X); g.removeClass(a, U); ka(w, !1); ha(w, !1); f(k, function (a) { w.style[a[0]] = "" }); W(a, c); aa(a, c); if (c.onDone) c.onDone(); p && p.complete(!b)
                    }
                } function D(a) { q.blockTransition && ha(w, a); q.blockKeyframeAnimation && ka(w, !!a) } function r() {
                    function b() {
                        if (!H) {
                            D(!1); f(k, function (a) { w.style[a[0]] = a[1] }); W(a, c); g.addClass(a, U); if (q.recalculateTimingStyles) {
                                ea = w.className + " " + X; $ = K(w, ea); y = F(w, ea, $); O = y.maxDelay; t = Math.max(O, 0); G = y.maxDuration; if (0 === G) { l(); return } q.hasTransitions = 0 < y.transitionDuration;
                                q.hasAnimations = 0 < y.animationDuration
                            } if (q.applyTransitionDelay || q.applyAnimationDelay) { O = "boolean" !== typeof c.delay && ja(c.delay) ? parseFloat(c.delay) : O; t = Math.max(O, 0); var n; q.applyTransitionDelay && (y.transitionDelay = O, n = [ca, O + "s"], k.push(n), w.style[n[0]] = n[1]); q.applyAnimationDelay && (y.animationDelay = O, n = [pa, O + "s"], k.push(n), w.style[n[0]] = n[1]) } J = 1E3 * t; E = 1E3 * G; if (c.easing) {
                                var r = c.easing; q.hasTransitions && (n = N + "TimingFunction", k.push([n, r]), w.style[n] = r); q.hasAnimations && (n = T + "TimingFunction", k.push([n,
                                r]), w.style[n] = r)
                            } y.transitionDuration && p.push(na); y.animationDuration && p.push(oa); h = Date.now(); a.on(p.join(" "), m); B(d, J + 1.5 * E); ua(a, c)
                        }
                    } function d() { l() } function m(a) { a.stopPropagation(); var b = a.originalEvent || a; a = b.$manualTimeStamp || b.timeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - h, 0) >= J && b >= G && (L = !0, l()) } if (!H) {
                        var h, p = [], n = function (a) { if (L) v && a && (v = !1, l()); else if (v = !a, y.animationDuration) if (a = ka(w, v), v) k.push(a); else { var b = k, c = b.indexOf(a); 0 <= a && b.splice(c, 1) } }, x = 0 <
                        S && (y.transitionDuration && 0 === R.transitionDuration || y.animationDuration && 0 === R.animationDuration) && Math.max(R.animationDelay, R.transitionDelay); x ? B(b, Math.floor(x * S * 1E3), !1) : b(); A.resume = function () { n(!0) }; A.pause = function () { n(!1) }
                    }
                } var w = a[0]; c = ga(c); var k = [], n = a.attr("class"), h = Aa(c), H, v, L, p, A, t, J, G, E; if (0 === c.duration || !x.animations && !x.transitions) l(); else {
                    var C = c.event && V(c.event) ? c.event.join(" ") : c.event, P = "", M = ""; C && c.structural ? P = Z(C, "ng-", !0) : C && (P = C); c.addClass && (M += Z(c.addClass, "-add"));
                    c.removeClass && (M.length && (M += " "), M += Z(c.removeClass, "-remove")); c.applyClassesEarly && M.length && (W(a, c), M = ""); var X = [P, M].join(" ").trim(), ea = n + " " + X, U = Z(X, "-active"), n = h.to && 0 < Object.keys(h.to).length; if (!n && !X) return l(), !1; var $, R; 0 < c.stagger ? (h = parseFloat(c.stagger), R = { transitionDelay: h, animationDelay: h, transitionDuration: 0, animationDuration: 0 }) : ($ = K(w, ea), R = s(w, X, $, Ka)); g.addClass(a, X); c.transitionStyle && (h = [N, c.transitionStyle], ba(w, h), k.push(h)); 0 <= c.duration && (h = 0 < w.style[N].length, h = xa(c.duration,
                    h), ba(w, h), k.push(h)); c.keyframeStyle && (h = [T, c.keyframeStyle], ba(w, h), k.push(h)); var S = R ? 0 <= c.staggerIndex ? c.staggerIndex : b.count($) : 0; (C = 0 === S) && ha(w, 9999); var y = F(w, ea, $), O = y.maxDelay; t = Math.max(O, 0); G = y.maxDuration; var q = {}; q.hasTransitions = 0 < y.transitionDuration; q.hasAnimations = 0 < y.animationDuration; q.hasTransitionAll = q.hasTransitions && "all" == y.transitionProperty; q.applyTransitionDuration = n && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions); q.applyAnimationDuration = c.duration &&
                    q.hasAnimations; q.applyTransitionDelay = ja(c.delay) && (q.applyTransitionDuration || q.hasTransitions); q.applyAnimationDelay = ja(c.delay) && q.hasAnimations; q.recalculateTimingStyles = 0 < M.length; if (q.applyTransitionDuration || q.applyAnimationDuration) G = c.duration ? parseFloat(c.duration) : G, q.applyTransitionDuration && (q.hasTransitions = !0, y.transitionDuration = G, h = 0 < w.style[N + "Property"].length, k.push(xa(G, h))), q.applyAnimationDuration && (q.hasAnimations = !0, y.animationDuration = G, k.push([qa, G + "s"])); if (0 === G && !q.recalculateTimingStyles) return l(),
                    !1; 0 < y.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || C); J = 1E3 * t; E = 1E3 * G; c.skipBlocking || (q.blockTransition = 0 < y.transitionDuration, q.blockKeyframeAnimation = 0 < y.animationDuration && 0 < R.animationDelay && 0 === R.animationDuration); ta(a, c); q.blockTransition || ha(w, !1); D(G); return { end: d, start: function () { if (!H) return A = { end: d, cancel: m, resume: null, pause: null }, p = new u(A), da(r), p } }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver");
        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function (a, c, d, g, u, B) {
            function r(a) { return a.replace(/\bng-\S+\b/g, "") } function x(a, b) { S(a) && (a = a.split(" ")); S(b) && (b = b.split(" ")); return a.filter(function (a) { return -1 === b.indexOf(a) }).join(" ") } function h(c, h, g) {
                function K(a) {
                    var b = {}, c = a[0].getBoundingClientRect(); f(["width", "height", "top", "left"], function (a) {
                        var e = c[a]; switch (a) { case "top": e += t.scrollTop; break; case "left": e += t.scrollLeft } b[a] = Math.floor(e) +
                        "px"
                    }); return b
                } function v() { var c = r(g.attr("class")), c = x(c, u); return a(e, { to: K(g), addClass: "ng-anchor-in " + c, removeClass: "ng-anchor-out " + u, delay: !0 }) } function s() { e.remove(); h.removeClass("ng-animate-shim"); g.removeClass("ng-animate-shim") } var e = C(h[0].cloneNode(!0)), u = r(e.attr("class") || ""); c = Z(c, "-anchor"); h.addClass("ng-animate-shim"); g.addClass("ng-animate-shim"); e.addClass("ng-animate-anchor"); e.addClass(c); F.append(e); var m; c = a(e, { addClass: "ng-anchor-out", delay: !0, from: K(h) }); if (!c && (m = v(),
                !m)) return s(); var l = c || m; return { start: function () { function a() { c && c.end() } var b, c = l.start(); c.done(function () { c = null; if (!m && (m = v())) return c = m.start(), c.done(function () { c = null; s(); b.complete() }), c; s(); b.complete() }); return b = new d({ end: a, cancel: a }) } }
            } function K(a, b, c, g) {
                var r = s(a), x = s(b), e = []; f(g, function (a) { (a = h(c, a.out, a["in"])) && e.push(a) }); if (r || x || 0 !== e.length) return {
                    start: function () {
                        function a() { f(b, function (a) { a.end() }) } var b = []; r && b.push(r.start()); x && b.push(x.start()); f(e, function (a) { b.push(a.start()) });
                        var c = new d({ end: a, cancel: a }); d.all(b, function (a) { c.complete(a) }); return c
                    }
                }
            } function s(c) { var d = c.element, f = c.options || {}; f.structural = c.structural; f.applyClassesEarly = f.structural; f.event = c.event; "leave" === f.event && c.domOperation && (f.onDone = c.domOperation); return a(d, f) } if (!B.animations && !B.transitions) return J; var t = u[0].body; c = g[0]; var F = C(t.parentNode === c ? t : c); return function (a) { return a.from && a.to ? K(a.from, a.to, a.classes, a.anchors) : s(a) }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get =
        ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function (b, c, d, g) {
            function u(c) { c = V(c) ? c : c.split(" "); for (var d = [], f = {}, g = 0; g < c.length; g++) { var s = c[g], u = a.$$registeredAnimations[s]; u && !f[s] && (d.push(b.get(u)), f[s] = !0) } return d } var t = fa(g); return function (a, b, d, g) {
                function s() { g.domOperation(); t(a, g) } function C(a, b, c, d, e) {
                    switch (c) { case "animate": b = [b, d.from, d.to, e]; break; case "setClass": b = [b, L, H, e]; break; case "addClass": b = [b, L, e]; break; case "removeClass": b = [b, H, e]; break; default: b = [b, e] } b.push(d);
                    a = a.apply(a, b); return Ia(a) ? a : J
                } function F(a, b, d, e, g) { var k = []; f(e, function (e) { var f = e[g]; f && k.push(function () { var e, g, k = !1, h = function (a) { k || (k = !0, (g || J)(a), e.complete(!a)) }; e = new c({ end: function () { h() }, cancel: function () { h(!0) } }); g = C(f, a, b, d, function (a) { h(!1 === a) }); return e }) }); return k } function E(a, b, d, e, g) {
                    var k = F(a, b, d, e, g); if (0 === k.length) {
                        var h, r; "beforeSetClass" === g ? (h = F(a, "removeClass", d, e, "beforeRemoveClass"), r = F(a, "addClass", d, e, "beforeAddClass")) : "setClass" === g && (h = F(a, "removeClass", d, e,
                        "removeClass"), r = F(a, "addClass", d, e, "addClass")); h && (k = k.concat(h)); r && (k = k.concat(r))
                    } if (0 !== k.length) return function (a) { var b = []; k.length && f(k, function (a) { b.push(a()) }); b.length ? c.all(b, a) : a(); return function (a) { f(b, function (b) { a ? b.cancel() : b.end() }) } }
                } 3 === arguments.length && la(d) && (g = d, d = null); g = ga(g); d || (d = a.attr("class") || "", g.addClass && (d += " " + g.addClass), g.removeClass && (d += " " + g.removeClass)); var L = g.addClass, H = g.removeClass, A = u(d), v, z; if (A.length) {
                    var e, I; "leave" == b ? (I = "leave", e = "afterLeave") :
                    (I = "before" + b.charAt(0).toUpperCase() + b.substr(1), e = b); "enter" !== b && "move" !== b && (v = E(a, b, g, A, I)); z = E(a, b, g, A, e)
                } if (v || z) return { start: function () { function b(c) { f = !0; s(); aa(a, g); h.complete(c) } var d, e = []; v && e.push(function (a) { d = v(a) }); e.length ? e.push(function (a) { s(); a(!0) }) : s(); z && e.push(function (a) { d = z(a) }); var f = !1, h = new c({ end: function () { f || ((d || J)(void 0), b(void 0)) }, cancel: function () { f || ((d || J)(!0), b(!0)) } }); c.chain(e, b); return h } }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver");
        this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) { function d(c) { return a(c.element, c.event, c.classes, c.options) } return function (a) { if (a.from && a.to) { var b = d(a.from), t = d(a.to); if (b || t) return { start: function () { function a() { return function () { f(d, function (a) { a.end() }) } } var d = []; b && d.push(b.start()); t && d.push(t.start()); c.all(d, function (a) { g.complete(a) }); var g = new c({ end: a(), cancel: a() }); return g } } } else return d(a) } }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map