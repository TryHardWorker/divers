/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
          return "function" == typeof t && "number" != typeof t.nodeType
      },
      y = function e(t) {
          return null != t && t === t.window
      },
      v = {
          type: !0,
          src: !0,
          noModule: !0
      };

  function m(e, t, n) {
      var i, o = (t = t || r).createElement("script");
      if (o.text = e, n)
          for (i in v) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o)
  }

  function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var b = "3.3.1",
      w = function(e, t) {
          return new w.fn.init(e, t)
      },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.fn = w.prototype = {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function() {
          return o.call(this)
      },
      get: function(e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
      },
      each: function(e) {
          return w.each(this, e)
      },
      map: function(e) {
          return this.pushStack(w.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(o.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice
  }, w.extend = w.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
          if (null != (e = arguments[s]))
              for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
  }, w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      globalEval: function(e) {
          m(e)
      },
      each: function(e, t) {
          var n, r = 0;
          if (C(e)) {
              for (n = e.length; r < n; r++)
                  if (!1 === t.call(e[r], r, e[r])) break
          } else
              for (r in e)
                  if (!1 === t.call(e[r], r, e[r])) break; return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(T, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : u.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
          return i
      },
      map: function(e, t, n) {
          var r, i, o = 0,
              s = [];
          if (C(e))
              for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
          else
              for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
          return a.apply([], s)
      },
      guid: 1,
      support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
  });

  function C(e) {
      var t = !!e && "length" in e && e.length,
          n = x(e);
      return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  var E = function(e) {
      var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
          w = e.document,
          T = 0,
          C = 0,
          E = ae(),
          k = ae(),
          S = ae(),
          D = function(e, t) {
              return e === t && (f = !0), 0
          },
          N = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          q = A.push,
          L = A.push,
          H = A.slice,
          O = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
              return -1
          },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
          W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          $ = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          F = new RegExp("^" + M + "*," + M + "*"),
          _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          X = new RegExp(W),
          U = new RegExp("^" + R + "$"),
          V = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          G = /^(?:input|select|textarea|button)$/i,
          Y = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ee = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function(e, t) {
              return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          re = function() {
              p()
          },
          ie = me(function(e) {
              return !0 === e.disabled && ("form" in e || "label" in e)
          }, {
              dir: "parentNode",
              next: "legend"
          });
      try {
          L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
      } catch (e) {
          L = {
              apply: A.length ? function(e, t) {
                  q.apply(e, H.call(t))
              } : function(e, t) {
                  var n = e.length,
                      r = 0;
                  while (e[n++] = t[r++]);
                  e.length = n - 1
              }
          }
      }

      function oe(e, t, r, i) {
          var o, s, l, c, f, h, v, m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
              if (11 !== T && (f = J.exec(e)))
                  if (o = f[1]) {
                      if (9 === T) {
                          if (!(l = t.getElementById(o))) return r;
                          if (l.id === o) return r.push(l), r
                      } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                  } else {
                      if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                  }
              if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                  if (1 !== T) m = t, v = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                      while (s--) h[s] = "#" + c + " " + ve(h[s]);
                      v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                  }
                  if (v) try {
                      return L.apply(r, m.querySelectorAll(v)), r
                  } catch (e) {} finally {
                      c === b && t.removeAttribute("id")
                  }
              }
          }
          return u(e.replace(B, "$1"), t, r, i)
      }

      function ae() {
          var e = [];

          function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
          }
          return t
      }

      function se(e) {
          return e[b] = !0, e
      }

      function ue(e) {
          var t = d.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function le(e, t) {
          var n = e.split("|"),
              i = n.length;
          while (i--) r.attrHandle[n[i]] = t
      }

      function ce(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
              while (n = n.nextSibling)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function fe(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }

      function pe(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }

      function de(e) {
          return function(t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
      }

      function he(e) {
          return se(function(t) {
              return t = +t, se(function(n, r) {
                  var i, o = e([], n.length, t),
                      a = o.length;
                  while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }

      function ge(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      n = oe.support = {}, o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }, p = oe.setDocument = function(e) {
          var t, i, a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
              return e.className = "i", !e.getAttribute("className")
          }), n.getElementsByTagName = ue(function(e) {
              return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
          }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
              return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
          }), n.getById ? (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }, r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }) : (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }, r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n, r, i, o = t.getElementById(e);
                  if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      i = t.getElementsByName(e), r = 0;
                      while (o = i[r++])
                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                  }
                  return []
              }
          }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
              var n, r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
              if ("*" === e) {
                  while (n = o[i++]) 1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
          }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
              h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
          }), ue(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
          })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
              n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
          }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
              if (t)
                  while (t = t.parentNode)
                      if (t === e) return !0;
              return !1
          }, D = t ? function(e, t) {
              if (e === t) return f = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
          } : function(e, t) {
              if (e === t) return f = !0, 0;
              var n, r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
              if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
              if (i === o) return ce(e, t);
              n = e;
              while (n = n.parentNode) a.unshift(n);
              n = t;
              while (n = n.parentNode) s.unshift(n);
              while (a[r] === s[r]) r++;
              return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
          }, d) : d
      }, oe.matches = function(e, t) {
          return oe(e, null, null, t)
      }, oe.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
              var r = m.call(e, t);
              if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {}
          return oe(t, d, null, [e]).length > 0
      }, oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== d && p(e), x(e, t)
      }, oe.attr = function(e, t) {
          (e.ownerDocument || e) !== d && p(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }, oe.escape = function(e) {
          return (e + "").replace(te, ne)
      }, oe.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }, oe.uniqueSort = function(e) {
          var t, r = [],
              i = 0,
              o = 0;
          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
              while (t = e[o++]) t === e[o] && (i = r.push(o));
              while (i--) e.splice(r[i], 1)
          }
          return c = null, e
      }, i = oe.getText = function(e) {
          var t, n = "",
              r = 0,
              o = e.nodeType;
          if (o) {
              if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
              } else if (3 === o || 4 === o) return e.nodeValue
          } else
              while (t = e[r++]) n += i(t);
          return n
      }, (r = oe.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  } : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = E[e + " "];
                  return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, t, n) {
                  return function(r) {
                      var i = oe.attr(r, e);
                      return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  } : function(t, n, u) {
                      var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                          y = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          x = !1;
                      if (y) {
                          if (o) {
                              while (g) {
                                  p = t;
                                  while (p = p[g])
                                      if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                  h = g = "only" === e && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [a ? y.firstChild : y.lastChild], a && m) {
                              x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if (1 === p.nodeType && ++x && p === t) {
                                      c[e] = [T, d, x];
                                      break
                                  }
                          } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                          return (x -= i) === r || x % r == 0 && x / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, t) {
                  var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                  return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                      var r, o = i(e, t),
                          a = o.length;
                      while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                  }) : function(e) {
                      return i(e, 0, n)
                  }) : i
              }
          },
          pseudos: {
              not: se(function(e) {
                  var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                  return r[b] ? se(function(e, t, n, i) {
                      var o, a = r(e, null, i, []),
                          s = e.length;
                      while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                  }) : function(e, i, o) {
                      return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                  }
              }),
              has: se(function(e) {
                  return function(t) {
                      return oe(e, t).length > 0
                  }
              }),
              contains: se(function(e) {
                  return e = e.replace(Z, ee),
                      function(t) {
                          return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                      }
              }),
              lang: se(function(e) {
                  return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                      function(t) {
                          var n;
                          do {
                              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1
                      }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === h
              },
              focus: function(e) {
                  return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: de(!1),
              disabled: de(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                  return !0
              },
              parent: function(e) {
                  return !r.pseudos.empty(e)
              },
              header: function(e) {
                  return Y.test(e.nodeName)
              },
              input: function(e) {
                  return G.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: he(function() {
                  return [0]
              }),
              last: he(function(e, t) {
                  return [t - 1]
              }),
              eq: he(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: he(function(e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e
              }),
              odd: he(function(e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e
              }),
              lt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                  return e
              }),
              gt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                  return e
              })
          }
      }).pseudos.nth = r.pseudos.eq;
      for (t in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) r.pseudos[t] = fe(t);
      for (t in {
              submit: !0,
              reset: !0
          }) r.pseudos[t] = pe(t);

      function ye() {}
      ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
          var n, i, o, a, s, u, l, c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          s = e, u = [], l = r.preFilter;
          while (s) {
              n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                  value: n,
                  type: i[0].replace(B, " ")
              }), s = s.slice(n.length));
              for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                  value: n,
                  type: a,
                  matches: i
              }), s = s.slice(n.length));
              if (!n) break
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
      };

      function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
      }

      function me(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
          return t.first ? function(t, n, i) {
              while (t = t[r])
                  if (1 === t.nodeType || a) return e(t, n, i);
              return !1
          } : function(t, n, u) {
              var l, c, f, p = [T, s];
              if (u) {
                  while (t = t[r])
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0
              } else
                  while (t = t[r])
                      if (1 === t.nodeType || a)
                          if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                          else {
                              if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                              if (c[o] = p, p[2] = e(t, n, u)) return !0
                          } return !1
          }
      }

      function xe(e) {
          return e.length > 1 ? function(t, n, r) {
              var i = e.length;
              while (i--)
                  if (!e[i](t, n, r)) return !1;
              return !0
          } : e[0]
      }

      function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
          return n
      }

      function we(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          return a
      }

      function Te(e, t, n, r, i, o) {
          return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
              var l, c, f, p = [],
                  d = [],
                  h = a.length,
                  g = o || be(t || "*", s.nodeType ? [s] : s, []),
                  y = !e || !o && t ? g : we(g, p, e, s, u),
                  v = n ? i || (o ? e : h || r) ? [] : a : y;
              if (n && n(y, v, s, u), r) {
                  l = we(v, d), r(l, [], s, u), c = l.length;
                  while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
              }
              if (o) {
                  if (i || e) {
                      if (i) {
                          l = [], c = v.length;
                          while (c--)(f = v[c]) && l.push(y[c] = f);
                          i(null, v = [], l, u)
                      }
                      c = v.length;
                      while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                  }
              } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
          })
      }

      function Ce(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                  return e === t
              }, s, !0), f = me(function(e) {
                  return O(t, e) > -1
              }, s, !0), p = [function(e, n, r) {
                  var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return t = null, i
              }]; u < o; u++)
              if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
              else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                      for (i = ++u; i < o; i++)
                          if (r.relative[e[i].type]) break;
                      return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : ""
                      })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                  }
                  p.push(n)
              }
          return xe(p)
      }

      function Ee(e, t) {
          var n = t.length > 0,
              i = e.length > 0,
              o = function(o, a, s, u, c) {
                  var f, h, y, v = 0,
                      m = "0",
                      x = o && [],
                      b = [],
                      w = l,
                      C = o || i && r.find.TAG("*", c),
                      E = T += null == w ? 1 : Math.random() || .1,
                      k = C.length;
                  for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                      if (i && f) {
                          h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                          while (y = e[h++])
                              if (y(f, a || d, s)) {
                                  u.push(f);
                                  break
                              }
                          c && (T = E)
                      }
                      n && ((f = !y && f) && v--, o && x.push(f))
                  }
                  if (v += m, n && m !== v) {
                      h = 0;
                      while (y = t[h++]) y(x, b, a, s);
                      if (o) {
                          if (v > 0)
                              while (m--) x[m] || b[m] || (b[m] = j.call(u));
                          b = we(b)
                      }
                      L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                  }
                  return c && (T = E, l = w), x
              };
          return n ? se(o) : o
      }
      return s = oe.compile = function(e, t) {
          var n, r = [],
              i = [],
              o = S[e + " "];
          if (!o) {
              t || (t = a(e)), n = t.length;
              while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
              (o = S(e, Ee(i, r))).selector = e
          }
          return o
      }, u = oe.select = function(e, t, n, i) {
          var o, u, l, c, f, p = "function" == typeof e && e,
              d = !i && a(e = p.selector || e);
          if (n = n || [], 1 === d.length) {
              if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                  if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                  p && (t = t.parentNode), e = e.slice(u.shift().value.length)
              }
              o = V.needsContext.test(e) ? 0 : u.length;
              while (o--) {
                  if (l = u[o], r.relative[c = l.type]) break;
                  if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                      if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                      break
                  }
              }
          }
          return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
      }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
      }), ue(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), n.attributes && ue(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), ue(function(e) {
          return null == e.getAttribute("disabled")
      }) || le(P, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), oe
  }(e);
  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
  var k = function(e, t, n) {
          var r = [],
              i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                  if (i && w(e).is(n)) break;
                  r.push(e)
              }
          return r
      },
      S = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      },
      D = w.expr.match.needsContext;

  function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
      return g(t) ? w.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      }) : t.nodeType ? w.grep(e, function(e) {
          return e === t !== n
      }) : "string" != typeof t ? w.grep(e, function(e) {
          return u.call(t, e) > -1 !== n
      }) : w.filter(t, e, n)
  }
  w.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, w.fn.extend({
      find: function(e) {
          var t, n, r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
              for (t = 0; t < r; t++)
                  if (w.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
          return r > 1 ? w.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(j(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(j(this, e || [], !0))
      },
      is: function(e) {
          return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
      }
  });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || q, "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                  for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
          }
          return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  w.fn.extend({
      has: function(e) {
          var t = w(e, this),
              n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (w.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && w(e);
          if (!D.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  });

  function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e
  }
  w.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return k(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return k(e, "parentNode", n)
      },
      next: function(e) {
          return P(e, "nextSibling")
      },
      prev: function(e) {
          return P(e, "previousSibling")
      },
      nextAll: function(e) {
          return k(e, "nextSibling")
      },
      prevAll: function(e) {
          return k(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return k(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return k(e, "previousSibling", n)
      },
      siblings: function(e) {
          return S((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return S(e.firstChild)
      },
      contents: function(e) {
          return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
      }
  }, function(e, t) {
      w.fn[e] = function(n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
      }
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
      var t = {};
      return w.each(e.match(M) || [], function(e, n) {
          t[n] = !0
      }), t
  }
  w.Callbacks = function(e) {
      e = "string" == typeof e ? R(e) : w.extend({}, e);
      var t, n, r, i, o = [],
          a = [],
          s = -1,
          u = function() {
              for (i = i || e.once, r = t = !0; a.length; s = -1) {
                  n = a.shift();
                  while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
              }
              e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
          },
          l = {
              add: function() {
                  return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                      w.each(n, function(n, r) {
                          g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                      })
                  }(arguments), n && !t && u()), this
              },
              remove: function() {
                  return w.each(arguments, function(e, t) {
                      var n;
                      while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                  }), this
              },
              has: function(e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0
              },
              empty: function() {
                  return o && (o = []), this
              },
              disable: function() {
                  return i = a = [], o = n = "", this
              },
              disabled: function() {
                  return !o
              },
              lock: function() {
                  return i = a = [], n || t || (o = n = ""), this
              },
              locked: function() {
                  return !!i
              },
              fireWith: function(e, n) {
                  return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
              },
              fire: function() {
                  return l.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!r
              }
          };
      return l
  };

  function I(e) {
      return e
  }

  function W(e) {
      throw e
  }

  function $(e, t, n, r) {
      var i;
      try {
          e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  w.extend({
      Deferred: function(t) {
          var n = [
                  ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                  ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
              ],
              r = "pending",
              i = {
                  state: function() {
                      return r
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments), this
                  },
                  "catch": function(e) {
                      return i.then(null, e)
                  },
                  pipe: function() {
                      var e = arguments;
                      return w.Deferred(function(t) {
                          w.each(n, function(n, r) {
                              var i = g(e[r[4]]) && e[r[4]];
                              o[r[1]](function() {
                                  var e = i && i.apply(this, arguments);
                                  e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                              })
                          }), e = null
                      }).promise()
                  },
                  then: function(t, r, i) {
                      var o = 0;

                      function a(t, n, r, i) {
                          return function() {
                              var s = this,
                                  u = arguments,
                                  l = function() {
                                      var e, l;
                                      if (!(t < o)) {
                                          if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                          l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                      }
                                  },
                                  c = i ? l : function() {
                                      try {
                                          l()
                                      } catch (e) {
                                          w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                      }
                                  };
                              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                          }
                      }
                      return w.Deferred(function(e) {
                          n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? w.extend(e, i) : i
                  }
              },
              o = {};
          return w.each(n, function(e, t) {
              var a = t[2],
                  s = t[5];
              i[t[1]] = a.add, s && a.add(function() {
                  r = s
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              }, o[t[0] + "With"] = a.fireWith
          }), i.promise(o), t && t.call(o, o), o
      },
      when: function(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = o.call(arguments),
              a = w.Deferred(),
              s = function(e) {
                  return function(n) {
                      r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                  }
              };
          if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
          while (n--) $(i[n], s(n), a.reject);
          return a.promise()
      }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, w.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  };
  var F = w.Deferred();
  w.fn.ready = function(e) {
      return F.then(e)["catch"](function(e) {
          w.readyException(e)
      }), this
  }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
      }
  }), w.ready.then = F.then;

  function _() {
      r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function(e, t, n, r, i, o, a) {
          var s = 0,
              u = e.length,
              l = null == n;
          if ("object" === x(n)) {
              i = !0;
              for (s in n) z(e, t, s, n[s], !0, o, a)
          } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                  return l.call(w(e), n)
              })), t))
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
      return t.toUpperCase()
  }

  function G(e) {
      return e.replace(X, "ms-").replace(U, V)
  }
  var Y = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
      this.expando = w.expando + Q.uid++
  }
  Q.uid = 1, Q.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))), t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[G(t)] = n;
          else
              for (r in t) i[G(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
              if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                  while (n--) delete r[t[n]]
              }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
      }
  };
  var J = new Q,
      K = new Q,
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
  }

  function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
              try {
                  n = te(n)
              } catch (e) {}
              K.set(e, t, n)
          } else n = void 0;
      return n
  }
  w.extend({
      hasData: function(e) {
          return K.hasData(e) || J.hasData(e)
      },
      data: function(e, t, n) {
          return K.access(e, t, n)
      },
      removeData: function(e, t) {
          K.remove(e, t)
      },
      _data: function(e, t, n) {
          return J.access(e, t, n)
      },
      _removeData: function(e, t) {
          J.remove(e, t)
      }
  }), w.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0],
              a = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                  n = a.length;
                  while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                  J.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              K.set(this, e)
          }) : z(this, function(t) {
              var n;
              if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n
              } else this.each(function() {
                  K.set(this, e, t)
              })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              K.remove(this, e)
          })
      }
  }), w.extend({
      queue: function(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = w._queueHooks(e, t),
              a = function() {
                  w.dequeue(e, t)
              };
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return J.get(e, n) || J.access(e, n, {
              empty: w.Callbacks("once memory").add(function() {
                  J.remove(e, [t + "queue", n])
              })
          })
      }
  }), w.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = w.queue(this, e, t);
              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              w.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1,
              i = w.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                  --r || i.resolveWith(o, [o])
              };
          "string" != typeof e && (t = e, e = void 0), e = e || "fx";
          while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
      }
  });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
      },
      se = function(e, t, n, r) {
          var i, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i
      };

  function ue(e, t, n, r) {
      var i, o, a = 20,
          s = r ? function() {
              return r.cur()
          } : function() {
              return w.css(e, t, "")
          },
          u = s(),
          l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
          c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
      if (c && c[3] !== l) {
          u /= 2, l = l || c[3], c = +u || 1;
          while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, w.style(e, t, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var le = {};

  function ce(e) {
      var t, n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
  }

  function fe(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
      for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
      return e
  }
  w.fn.extend({
      show: function() {
          return fe(this, !0)
      },
      hide: function() {
          return fe(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              ae(this) ? w(this).show() : w(this).hide()
          })
      }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
  }

  function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
  }
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
          if ((o = e[d]) || 0 === o)
              if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
              else if (me.test(o)) {
          a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
      } else p.push(t.createTextNode(o));
      f.textContent = "", d = 0;
      while (o = p[d++])
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
          c = 0;
          while (o = a[c++]) he.test(o.type || "") && n.push(o)
      }
      return f
  }! function() {
      var e = r.createDocumentFragment().appendChild(r.createElement("div")),
          t = r.createElement("input");
      t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
      return !0
  }

  function ke() {
      return !1
  }

  function Se() {
      try {
          return r.activeElement
      } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
          "string" != typeof n && (r = r || n, n = void 0);
          for (s in t) De(e, s, n, r, t[s], o);
          return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) {
          return w().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
          w.event.add(this, t, i, r, n)
      })
  }
  w.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
          if (y) {
              n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                  return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
              }), l = (t = (t || "").match(M) || [""]).length;
              while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join(".")
              }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
          }
      },
      remove: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
          if (y && (u = y.events)) {
              l = (t = (t || "").match(M) || [""]).length;
              while (l--)
                  if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                      f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                      while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                      a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                  } else
                      for (d in u) w.event.remove(e, d + t[l], n, r, !0);
              w.isEmptyObject(u) && J.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t = w.event.fix(e),
              n, r, i, o, a, s, u = new Array(arguments.length),
              l = (J.get(this, "events") || {})[t.type] || [],
              c = w.event.special[t.type] || {};
          for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
          if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
              s = w.event.handlers.call(this, t, l), n = 0;
              while ((o = s[n++]) && !t.isPropagationStopped()) {
                  t.currentTarget = o.elem, r = 0;
                  while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
              }
              return c.postDispatch && c.postDispatch.call(this, t), t.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, a, s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                      o.length && s.push({
                          elem: l,
                          handlers: o
                      })
                  }
          return l = this, u < t.length && s.push({
              elem: l,
              handlers: t.slice(u)
          }), s
      },
      addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t) ? function() {
                  if (this.originalEvent) return t(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[e]
              },
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[w.expando] ? e : new w.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== Se() && this.focus) return this.focus(), !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === Se() && this.blur) return this.blur(), !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
              },
              _default: function(e) {
                  return N(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  }, w.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }, w.Event = function(e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
  }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, w.event.addProp), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
              return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
          }
      }
  }), w.fn.extend({
      on: function(e, t, n, r) {
          return De(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return De(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
              w.event.remove(this, e, n, t)
          })
      }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
  }

  function He(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Pe(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
          if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
              delete a.handle, a.events = {};
              for (i in l)
                  for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
          }
          K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
      }
  }

  function Me(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Re(e, t, n, r) {
      t = a.apply([], t);
      var i, o, s, u, l, c, f = 0,
          p = e.length,
          d = p - 1,
          y = t[0],
          v = g(y);
      if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
          var o = e.eq(i);
          v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
      });
      if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
          if (u)
              for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
      }
      return e
  }

  function Ie(e, t, n) {
      for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e
  }
  w.extend({
      htmlPrefilter: function(e) {
          return e.replace(Ne, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var r, i, o, a, s = e.cloneNode(!0),
              u = w.contains(e.ownerDocument, e);
          if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
              for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
          if (t)
              if (n)
                  for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
              else Pe(e, s);
          return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      },
      cleanData: function(e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Y(n)) {
                  if (t = n[J.expando]) {
                      if (t.events)
                          for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                      n[J.expando] = void 0
                  }
                  n[K.expando] && (n[K.expando] = void 0)
              }
      }
  }), w.fn.extend({
      detach: function(e) {
          return Ie(this, e, !0)
      },
      remove: function(e) {
          return Ie(this, e)
      },
      text: function(e) {
          return z(this, function(e) {
              return void 0 === e ? w.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return Re(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return Re(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Le(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return w.clone(this, e, t)
          })
      },
      html: function(e) {
          return z(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = w.htmlPrefilter(e);
                  try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return Re(this, arguments, function(t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
          }, e)
      }
  }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      w.fn[e] = function(e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function(t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
      },
      Be = new RegExp(oe.join("|"), "i");
  ! function() {
      function t() {
          if (c) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
              var t = e.getComputedStyle(c);
              i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
          }
      }

      function n(e) {
          return Math.round(parseFloat(e))
      }
      var i, o, a, s, u, l = r.createElement("div"),
          c = r.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
          boxSizingReliable: function() {
              return t(), o
          },
          pixelBoxStyles: function() {
              return t(), s
          },
          pixelPosition: function() {
              return t(), i
          },
          reliableMarginLeft: function() {
              return t(), u
          },
          scrollboxSize: function() {
              return t(), a
          }
      }))
  }();

  function Fe(e, t, n) {
      var r, i, o, a, s = e.style;
      return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function _e(e, t) {
      return {
          get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ve = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
      if (e in Ye) return e;
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ge.length;
      while (n--)
          if ((e = Ge[n] + t) in Ye) return e
  }

  function Je(e) {
      var t = w.cssProps[e];
      return t || (t = w.cssProps[e] = Qe(e) || e), t
  }

  function Ke(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
      return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
  }

  function et(e, t, n) {
      var r = $e(e),
          i = Fe(e, t, r),
          o = "border-box" === w.css(e, "boxSizing", !1, r),
          a = o;
      if (We.test(i)) {
          if (!n) return i;
          i = "auto"
      }
      return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
  }
  w.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Fe(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, a, s = G(t),
                  u = Xe.test(t),
                  l = e.style;
              if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, a, s = G(t);
          return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }), w.each(["height", "width"], function(e, t) {
      w.cssHooks[t] = {
          get: function(e, n, r) {
              if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                  return et(e, t, r)
              })
          },
          set: function(e, n, r) {
              var i, o = $e(e),
                  a = "border-box" === w.css(e, "boxSizing", !1, o),
                  s = r && Ze(e, t, r, a, o);
              return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
          }
      }
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
          marginLeft: 0
      }, function() {
          return e.getBoundingClientRect().left
      })) + "px"
  }), w.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      w.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
  }), w.fn.extend({
      css: function(e, t) {
          return z(this, function(e, t, n) {
              var r, i, o = {},
                  a = 0;
              if (Array.isArray(t)) {
                  for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                  return o
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }, e, t, arguments.length > 1)
      }
  });

  function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i)
  }
  w.Tween = tt, tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = tt.propHooks[this.prop];
          return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = tt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
      }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, w.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
      rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
  }

  function st() {
      return e.setTimeout(function() {
          nt = void 0
      }), nt = Date.now()
  }

  function ut(e, t) {
      var n, r = 0,
          i = {
              height: e
          };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
  }

  function lt(e, t, n) {
      for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
          if (r = i[o].call(n, t, e)) return r
  }

  function ct(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = J.get(e, "fxshow");
      n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
          a.unqueued || s()
      }), a.unqueued++, p.always(function() {
          p.always(function() {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
          })
      }));
      for (r in t)
          if (i = t[r], it.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                  if ("show" !== i || !y || void 0 === y[r]) continue;
                  g = !0
              }
              d[r] = y && y[r] || w.style(e, r)
          }
      if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
          f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
              h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1;
          for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
              display: l
          }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
              g || fe([e]), J.remove(e, "fxshow");
              for (r in d) w.style(e, r, d[r])
          })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
      }
  }

  function ft(e, t) {
      var n, r, i, o, a;
      for (n in e)
          if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
              o = a.expand(o), delete e[r];
              for (n in o) n in e || (e[n] = o[n], t[n] = i)
          } else t[r] = i
  }

  function pt(e, t, n) {
      var r, i, o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function() {
              delete u.elem
          }),
          u = function() {
              if (i) return !1;
              for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
              return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
          },
          l = s.promise({
              elem: e,
              props: w.extend({}, t),
              opts: w.extend(!0, {
                  specialEasing: {},
                  easing: w.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r
              },
              stop: function(t) {
                  var n = 0,
                      r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
              }
          }),
          c = l.props;
      for (ft(c, l.opts.specialEasing); o < a; o++)
          if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
      })), l
  }
  w.Animation = w.extend(pt, {
          tweeners: {
              "*": [function(e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, ie.exec(t), n), n
              }]
          },
          tweener: function(e, t) {
              g(e) ? (t = e, e = ["*"]) : e = e.match(M);
              for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
          },
          prefilters: [ct],
          prefilter: function(e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
          }
      }), w.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? w.extend({}, e) : {
              complete: n || !n && t || g(e) && e,
              duration: e,
              easing: n && t || t && !g(t) && t
          };
          return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
              g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
          }, r
      }, w.fn.extend({
          fadeTo: function(e, t, n, r) {
              return this.filter(ae).css("opacity", 0).show().end().animate({
                  opacity: t
              }, e, n, r)
          },
          animate: function(e, t, n, r) {
              var i = w.isEmptyObject(e),
                  o = w.speed(t, n, r),
                  a = function() {
                      var t = pt(this, w.extend({}, e), o);
                      (i || J.get(this, "finish")) && t.stop(!0)
                  };
              return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, t, n) {
              var r = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n)
              };
              return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                  var t = !0,
                      i = null != e && e + "queueHooks",
                      o = w.timers,
                      a = J.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else
                      for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                  for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                  !t && n || w.dequeue(this, e)
              })
          },
          finish: function(e) {
              return !1 !== e && (e = e || "fx"), this.each(function() {
                  var t, n = J.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = w.timers,
                      a = r ? r.length : 0;
                  for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish
              })
          }
      }), w.each(["toggle", "show", "hide"], function(e, t) {
          var n = w.fn[t];
          w.fn[t] = function(e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
          }
      }), w.each({
          slideDown: ut("show"),
          slideUp: ut("hide"),
          slideToggle: ut("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(e, t) {
          w.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r)
          }
      }), w.timers = [], w.fx.tick = function() {
          var e, t = 0,
              n = w.timers;
          for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), nt = void 0
      }, w.fx.timer = function(e) {
          w.timers.push(e), w.fx.start()
      }, w.fx.interval = 13, w.fx.start = function() {
          rt || (rt = !0, at())
      }, w.fx.stop = function() {
          rt = null
      }, w.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, w.fn.delay = function(t, n) {
          return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
              var i = e.setTimeout(n, t);
              r.stop = function() {
                  e.clearTimeout(i)
              }
          })
      },
      function() {
          var e = r.createElement("input"),
              t = r.createElement("select").appendChild(r.createElement("option"));
          e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
      }();
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({
      attr: function(e, t) {
          return z(this, w.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              w.removeAttr(this, e)
          })
      }
  }), w.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!h.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0,
              i = t && t.match(M);
          if (i && 1 === e.nodeType)
              while (n = i[r++]) e.removeAttribute(n)
      }
  }), dt = {
      set: function(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function(e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
      }
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
      prop: function(e, t) {
          return z(this, w.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[w.propFix[e] || e]
          })
      }
  }), w.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = w.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }), h.optSelected || (w.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      w.propFix[this.toLowerCase()] = this
  });

  function vt(e) {
      return (e.match(M) || []).join(" ")
  }

  function mt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }

  function xt(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
  }
  w.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function(t) {
              w(this).addClass(e.call(this, t, mt(this)))
          });
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function(t) {
              w(this).removeClass(e.call(this, t, mt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++])
                          while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e,
              r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t)
          }) : this.each(function() {
              var t, i, o, a;
              if (r) {
                  i = 0, o = w(this), a = xt(e);
                  while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
              } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++])
              if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
          return !1
      }
  });
  var bt = /\r/g;
  w.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0]; {
              if (arguments.length) return r = g(e), this.each(function(n) {
                  var i;
                  1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                      return null == e ? "" : e + ""
                  })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
              });
              if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
          }
      }
  }), w.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = w.find.attr(e, "value");
                  return null != t ? t : vt(w.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, r, i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                          if (t = w(n).val(), a) return t;
                          s.push(t)
                      }
                  return s
              },
              set: function(e, t) {
                  var n, r, i = e.options,
                      o = w.makeArray(t),
                      a = i.length;
                  while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), w.each(["radio", "checkbox"], function() {
      w.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
          }
      }, h.checkOn || (w.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  }), h.focusin = "onfocusin" in e;
  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function(e) {
          e.stopPropagation()
      };
  w.extend(w.event, {
      trigger: function(t, n, i, o) {
          var a, s, u, l, c, p, d, h, v = [i || r],
              m = f.call(t, "type") ? t.type : t,
              x = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!o && !d.noBubble && !y(i)) {
                  for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                  u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
              }
              a = 0;
              while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
              return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
          }
      },
      simulate: function(e, t, n) {
          var r = w.extend(new w.Event, n, {
              type: e,
              isSimulated: !0
          });
          w.event.trigger(r, null, t)
      }
  }), w.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              w.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0)
      }
  }), h.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e))
      };
      w.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this,
                  i = J.access(r, t);
              i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this,
                  i = J.access(r, t) - 1;
              i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
          }
      }
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;
  w.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
  };
  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
      var i;
      if (Array.isArray(t)) w.each(t, function(t, i) {
          n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== x(t)) r(e, t);
      else
          for (i in t) jt(e + "[" + i + "]", t[i], n, r)
  }
  w.param = function(e, t) {
      var n, r = [],
          i = function(e, t) {
              var n = g(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
      if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
          i(this.name, this.value)
      });
      else
          for (n in e) jt(n, e[n], t, i);
      return r.join("&")
  }, w.fn.extend({
      serialize: function() {
          return w.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
          }).map(function(e, t) {
              var n = w(this).val();
              return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Dt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Dt, "\r\n")
              }
          }).get()
      }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
              o = t.toLowerCase().match(M) || [];
          if (g(n))
              while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }

  function _t(e, t, n, r) {
      var i = {},
          o = e === Wt;

      function a(s) {
          var u;
          return i[s] = !0, w.each(e[s] || [], function(e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
          }), u
      }
      return a(t.dataTypes[0]) || !i["*"] && a("*")
  }

  function zt(e, t) {
      var n, r, i = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && w.extend(!0, e, r), e
  }

  function Xt(e, t, n) {
      var r, i, o, a, s = e.contents,
          u = e.dataTypes;
      while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in s)
              if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break
              }
      if (u[0] in n) o = u[0];
      else {
          for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
              }
              a || (a = i)
          }
          o = o || a
      }
      if (o) return o !== u[0] && u.unshift(o), n[o]
  }

  function Ut(e, t, n, r) {
      var i, o, a, s, u, l = {},
          c = e.dataTypes.slice();
      if (c[1])
          for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
      o = c.shift();
      while (o)
          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break
                  }
          if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                  t = a(t)
              } catch (e) {
                  return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + u + " to " + o
                  }
              }
      }
      return {
          state: "success",
          data: t
      }
  }
  w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: Pt.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": $t,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(Wt),
      ajax: function(t, n) {
          "object" == typeof t && (n = t, t = void 0), n = n || {};
          var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
              g = h.context || h,
              y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
              v = w.Deferred(),
              m = w.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              T = {},
              C = "canceled",
              E = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (c) {
                          if (!s) {
                              s = {};
                              while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                          }
                          t = s[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return c ? a : null
                  },
                  setRequestHeader: function(e, t) {
                      return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return null == c && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (c) E.always(e[E.status]);
                          else
                              for (t in e) x[t] = [x[t], e[t]];
                      return this
                  },
                  abort: function(e) {
                      var t = e || C;
                      return i && i.abort(t), k(0, t), this
                  }
              };
          if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
              l = r.createElement("a");
              try {
                  l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
              } catch (e) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
          (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
          for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
          if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
              if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
              h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                  E.abort("timeout")
              }, h.timeout));
              try {
                  c = !1, i.send(b, k)
              } catch (e) {
                  if (c) throw e;
                  k(-1, e)
              }
          } else k(-1, "No Transport");

          function k(t, n, r, s) {
              var l, p, d, b, T, C = n;
              c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
          }
          return E
      },
      getJSON: function(e, t, n) {
          return w.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return w.get(e, void 0, t, "script")
      }
  }), w.each(["get", "post"], function(e, t) {
      w[t] = function(e, n, r, i) {
          return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          }, w.isPlainObject(e) && e))
      }
  }), w._evalUrl = function(e) {
      return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
      })
  }, w.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
              var e = this;
              while (e.firstElementChild) e = e.firstElementChild;
              return e
          }).append(this)), this
      },
      wrapInner: function(e) {
          return g(e) ? this.each(function(t) {
              w(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = w(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = g(e);
          return this.each(function(n) {
              w(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              w(this).replaceWith(this.childNodes)
          }), this
      }
  }), w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e)
  }, w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, w.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (e) {}
  };
  var Vt = {
          0: 200,
          1223: 204
      },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
      var n, r;
      if (h.cors || Gt && !t.crossDomain) return {
          send: function(i, o) {
              var a, s = t.xhr();
              if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
              t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
              for (a in i) s.setRequestHeader(a, i[a]);
              n = function(e) {
                  return function() {
                      n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                          binary: s.response
                      } : {
                          text: s.responseText
                      }, s.getAllResponseHeaders()))
                  }
              }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                  4 === s.readyState && e.setTimeout(function() {
                      n && r()
                  })
              }, n = n("abort");
              try {
                  s.send(t.hasContent && t.data || null)
              } catch (e) {
                  if (n) throw e
              }
          },
          abort: function() {
              n && n()
          }
      }
  }), w.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }), w.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return w.globalEval(e), e
          }
      }
  }), w.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), w.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(i, o) {
                  t = w("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                  }), r.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = Yt.pop() || w.expando + "_" + Et++;
          return this[e] = !0, e
      }
  }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
      if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
          return a || w.error(i + " was not called"), a[0]
      }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
          a = arguments
      }, r.always(function() {
          void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
      }), "script"
  }), h.createHTMLDocument = function() {
      var e = r.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), w.parseHTML = function(e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = !1);
      var i, o, a;
      return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
  }, w.fn.load = function(e, t, n) {
      var r, i, o, a = this,
          s = e.indexOf(" ");
      return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
          a.each(function() {
              n.apply(this, o || [e.responseText, t, e])
          })
      }), this
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      w.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, function(t) {
          return e === t.elem
      }).length
  }, w.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, a, s, u, l, c = w.css(e, "position"),
              f = w(e),
              p = {};
          "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
      }
  }, w.fn.extend({
      offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
              w.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0];
          if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          }
      },
      position: function() {
          if (this[0]) {
              var e, t, n, r = this[0],
                  i = {
                      top: 0,
                      left: 0
                  };
              if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
              else {
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - i.top - w.css(r, "marginTop", !0),
                  left: t.left - i.left - w.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var e = this.offsetParent;
              while (e && "static" === w.css(e, "position")) e = e.offsetParent;
              return e || be
          })
      }
  }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function(r) {
          return z(this, function(e, r, i) {
              var o;
              if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
      }
  }), w.each(["top", "left"], function(e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
          if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
      })
  }), w.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          w.fn[r] = function(i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
              return z(this, function(t, n, i) {
                  var o;
                  return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
              }, t, a ? i : void 0, a)
          }
      })
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      w.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }), w.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }), w.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }), w.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
          return e.apply(t || this, r.concat(o.call(arguments)))
      }, i.guid = e.guid = e.guid || w.guid++, i
  }, w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0)
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return w
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function(t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
  }, t || (e.jQuery = e.$ = w), w
});
// if ($('.inner-aside__box').length !=0 ) {
//   var testAside = true;
// } else {
//   var testAside = false;
// }
// $(document).on('resize', function() {
//   if($(window).width() >=1200 && testAside) {
//       asideScrolled('.inner-aside__box','.inner__content');
//   }
//   });
// if (testAside) {
//   asideScrolled('.inner-aside__box','.inner__content');
// }
function asideScrolled(box, cont) {
  var a = document.querySelector(box),
      b = null,
      K = null,
      Z = 0,
      P = 35,
      N = 20; // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
  window.addEventListener('scroll', Ascroll, false);
  document.body.addEventListener('scroll', Ascroll, false);

  function Ascroll() {
      var Ra = a.getBoundingClientRect(),
          R1bottom = document.querySelector(cont).getBoundingClientRect().bottom;
      if (Ra.bottom < R1bottom) {
          if (b == null) {
              var Sa = getComputedStyle(a, ''),
                  s = '';
              for (var i = 0; i < Sa.length; i++) {
                  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                      s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                  }
              }
              b = document.createElement('div');
              b.className = "stop";
              b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
              a.insertBefore(b, a.firstChild);
              var l = a.childNodes.length;
              for (var i = 1; i < l; i++) {
                  b.appendChild(a.childNodes[1]);
              }
              a.style.height = b.getBoundingClientRect().height + 'px';
              a.style.padding = '0';
              a.style.border = '0';
          }
          var Rb = b.getBoundingClientRect(),
              Rh = Ra.top + Rb.height,
              W = document.documentElement.clientHeight,
              R1 = Math.round(Rh - R1bottom),
              R2 = Math.round(Rh - W);
          if (Rb.height > W) {
              if (Ra.top < K) { // скролл вниз
                  if (R2 + N > R1) { // не дойти до низа
                      if (Rb.bottom - W + N <= 0) { // подцепиться
                          b.className = 'sticky';
                          b.style.top = W - Rb.height - N + 'px';
                          Z = N + Ra.top + Rb.height - W;
                      } else {
                          b.className = 'stop';
                          b.style.top = -Z + 'px';
                      }
                  } else {
                      b.className = 'stop';
                      b.style.top = -R1 + 'px';
                      Z = R1;
                  }
              } else { // скролл вверх
                  if (Ra.top - P < 0) { // не дойти до верха
                      if (Rb.top - P >= 0) { // подцепиться
                          b.className = 'sticky';
                          b.style.top = P + 'px';
                          Z = Ra.top - P;
                      } else {
                          b.className = 'stop';
                          b.style.top = -Z + 'px';
                      }
                  } else {
                      b.className = '';
                      b.style.top = '';
                      Z = 0;
                  }
              }
              K = Ra.top;
          } else {
              if ((Ra.top - P) <= 0) {
                  if ((Ra.top - P) <= R1) {
                      b.className = 'stop';
                      b.style.top = -R1 + 'px';
                  } else {
                      b.className = 'sticky';
                      b.style.top = P + 'px';
                  }
              } else {
                  b.className = '';
                  b.style.top = '';
              }
          }
          window.addEventListener('resize', function() {
              a.children[0].style.width = getComputedStyle(a, '').width
          }, false);
      }
  }
};
// ==================================================
// fancyBox v3.4.0
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
! function(t, e, n, o) {
  "use strict";

  function a(t, e) {
      var o, a, i, s = [],
          r = 0;
      t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), i = n.fancybox.getInstance(), i && i.$trigger && i.$trigger.is(o) || (e.selector ? s = n(e.selector) : (a = o.attr("data-fancybox") || "", a ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), i = n.fancybox.open(s, e, r), i.$trigger = o))
  }
  if (t.console = t.console || {
          info: function(t) {}
      }, n) {
      if (n.fn.fancybox) return void console.info("fancyBox already initialized");
      var i = {
              closeExisting: !1,
              loop: !1,
              gutter: 50,
              keyboard: !0,
              arrows: !0,
              infobar: !0,
              smallBtn: "auto",
              toolbar: "auto",
              buttons: ["zoom", "thumbs", "close"],
              idleTime: 3,
              protect: !1,
              modal: !1,
              image: {
                  preload: !1
              },
              ajax: {
                  settings: {
                      data: {
                          fancybox: !0
                      }
                  }
              },
              iframe: {
                  tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                  preload: !0,
                  css: {},
                  attr: {
                      scrolling: "auto"
                  }
              },
              video: {
                  tpl: '<video class="fancybox-video" controls controlsList="nodownload"><source src="{{src}}" type="{{format}}" />Your browser doesn\'t support HTML5 video</video>',
                  format: "",
                  autoStart: !0
              },
              defaultType: "image",
              animationEffect: "zoom",
              animationDuration: 366,
              zoomOpacity: "auto",
              transitionEffect: "fade",
              transitionDuration: 366,
              slideClass: "",
              baseClass: "",
              baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
              spinnerTpl: '<div class="fancybox-loading"></div>',
              errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
              btnTpl: {
                  download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                  zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                  close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                  arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></svg></a>',
                  arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></a>',
                  smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
              },
              parentEl: "body",
              hideScrollbar: !0,
              autoFocus: !0,
              backFocus: !0,
              trapFocus: !0,
              fullScreen: {
                  autoStart: !1
              },
              touch: {
                  vertical: !0,
                  momentum: !0
              },
              hash: null,
              media: {},
              slideShow: {
                  autoStart: !1,
                  speed: 3e3
              },
              thumbs: {
                  autoStart: !1,
                  hideOnClose: !0,
                  parentEl: ".fancybox-container",
                  axis: "y"
              },
              wheel: "auto",
              onInit: n.noop,
              beforeLoad: n.noop,
              afterLoad: n.noop,
              beforeShow: n.noop,
              afterShow: n.noop,
              beforeClose: n.noop,
              afterClose: n.noop,
              onActivate: n.noop,
              onDeactivate: n.noop,
              clickContent: function(t, e) {
                  return "image" === t.type && "zoom"
              },
              clickSlide: "close",
              clickOutside: "close",
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
              mobile: {
                  idleTime: !1,
                  clickContent: function(t, e) {
                      return "image" === t.type && "toggleControls"
                  },
                  clickSlide: function(t, e) {
                      return "image" === t.type ? "toggleControls" : "close"
                  },
                  dblclickContent: function(t, e) {
                      return "image" === t.type && "zoom"
                  },
                  dblclickSlide: function(t, e) {
                      return "image" === t.type && "zoom"
                  }
              },
              lang: "en",
              i18n: {
                  en: {
                      CLOSE: "Close",
                      NEXT: "Next",
                      PREV: "Previous",
                      ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                      PLAY_START: "Start slideshow",
                      PLAY_STOP: "Pause slideshow",
                      FULL_SCREEN: "Full screen",
                      THUMBS: "Thumbnails",
                      DOWNLOAD: "Download",
                      SHARE: "Share",
                      ZOOM: "Zoom"
                  },
                  de: {
                      CLOSE: "Schliessen",
                      NEXT: "Weiter",
                      PREV: "Zurück",
                      ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                      PLAY_START: "Diaschau starten",
                      PLAY_STOP: "Diaschau beenden",
                      FULL_SCREEN: "Vollbild",
                      THUMBS: "Vorschaubilder",
                      DOWNLOAD: "Herunterladen",
                      SHARE: "Teilen",
                      ZOOM: "Maßstab"
                  }
              }
          },
          s = n(t),
          r = n(e),
          c = 0,
          l = function(t) {
              return t && t.hasOwnProperty && t instanceof n
          },
          u = function() {
              return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                  return t.setTimeout(e, 1e3 / 60)
              }
          }(),
          d = function() {
              var t, n = e.createElement("fakeelement"),
                  a = {
                      transition: "transitionend",
                      OTransition: "oTransitionEnd",
                      MozTransition: "transitionend",
                      WebkitTransition: "webkitTransitionEnd"
                  };
              for (t in a)
                  if (n.style[t] !== o) return a[t];
              return "transitionend"
          }(),
          f = function(t) {
              return t && t.length && t[0].offsetHeight
          },
          p = function(t, e) {
              var o = n.extend(!0, {}, t, e);
              return n.each(e, function(t, e) {
                  n.isArray(e) && (o[t] = e)
              }), o
          },
          h = function(t, e, o) {
              var a = this;
              a.opts = p({
                  index: o
              }, n.fancybox.defaults), n.isPlainObject(e) && (a.opts = p(a.opts, e)), n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && a.init()
          };
      n.extend(h.prototype, {
          init: function() {
              var a, i, s, r = this,
                  c = r.group[r.currIndex],
                  l = c.opts,
                  u = n.fancybox.scrollbarWidth;
              l.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && l.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (u === o && (a = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = a[0].offsetWidth - a[0].clientWidth, a.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar")), s = "", n.each(l.buttons, function(t, e) {
                  s += l.btnTpl[e] || ""
              }), i = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl), r.$refs = {
                  container: i
              }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                  r.$refs[t] = i.find(".fancybox-" + t)
              }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
          },
          translate: function(t, e) {
              var n = t.opts.i18n[t.opts.lang];
              return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                  var a = n[e];
                  return a === o ? t : a
              })
          },
          addContent: function(t) {
              var e, a = this,
                  i = n.makeArray(t);
              n.each(i, function(t, e) {
                  var i, s, r, c, l, u = {},
                      d = {};
                  n.isPlainObject(e) ? (u = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, u.src = a.opts.src || d.src || i.attr("href"), u.type || u.src || (u.type = "inline", u.src = e)) : u = {
                      type: "html",
                      src: e + ""
                  }, u.opts = n.extend(!0, {}, a.opts, d), n.isArray(d.buttons) && (u.opts.buttons = d.buttons), n.fancybox.isMobile && u.opts.mobile && (u.opts = p(u.opts, u.opts.mobile)), s = u.type || u.opts.type, c = u.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", u.opts.video.format || (u.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? u.type = s : a.trigger("objectNeedsType", u), u.contentType || (u.contentType = n.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type), u.index = a.group.length, "auto" == u.opts.smallBtn && (u.opts.smallBtn = n.inArray(u.type, ["html", "inline", "ajax"]) > -1), "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn), u.opts.$trigger && u.index === a.opts.index && (u.opts.$thumb = u.opts.$trigger.find("img:first"), u.opts.$thumb.length && (u.opts.$orig = u.opts.$trigger)), u.opts.$thumb && u.opts.$thumb.length || !u.opts.$orig || (u.opts.$thumb = u.opts.$orig.find("img:first")), "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(e, [a, u])), "function" === n.type(a.opts.caption) && (u.opts.caption = a.opts.caption.apply(e, [a, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === o ? "" : u.opts.caption + ""), "ajax" === u.type && (l = c.split(/\s+/, 2), l.length > 1 && (u.src = l.shift(), u.opts.filter = l.shift())), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                      infobar: 0,
                      toolbar: 0,
                      smallBtn: 0,
                      keyboard: 0,
                      slideShow: 0,
                      fullScreen: 0,
                      thumbs: 0,
                      touch: 0,
                      clickContent: !1,
                      clickSlide: !1,
                      clickOutside: !1,
                      dblclickContent: !1,
                      dblclickSlide: !1,
                      dblclickOutside: !1
                  })), a.group.push(u)
              }), Object.keys(a.slides).length && (a.updateControls(), e = a.Thumbs, e && e.isActive && (e.create(), e.focus()))
          },
          addEvents: function() {
              var o = this;
              o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                  t.stopPropagation(), t.preventDefault(), o.close(t)
              }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                  t.stopPropagation(), t.preventDefault(), o.previous()
              }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                  t.stopPropagation(), t.preventDefault(), o.next()
              }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                  o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
              }), s.on("orientationchange.fb resize.fb", function(t) {
                  t && t.originalEvent && "resize" === t.originalEvent.type ? u(function() {
                      o.update()
                  }) : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(), setTimeout(function() {
                      o.$refs.stage.show(), o.update()
                  }, n.fancybox.isMobile ? 600 : 250))
              }), r.on("focusin.fb", function(t) {
                  var o = n.fancybox ? n.fancybox.getInstance() : null;
                  o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus())
              }), r.on("keydown.fb", function(t) {
                  var e = o.current,
                      a = t.keyCode || t.which;
                  if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === a || 27 === a ? (t.preventDefault(), void o.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void o.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, a)
              }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                  o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
              }), o.idleInterval = t.setInterval(function() {
                  o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
              }, 1e3))
          },
          removeEvents: function() {
              var e = this;
              s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
          },
          previous: function(t) {
              return this.jumpTo(this.currPos - 1, t)
          },
          next: function(t) {
              return this.jumpTo(this.currPos + 1, t)
          },
          jumpTo: function(t, e) {
              var a, i, s, r, c, l, u, d = this,
                  p = d.group.length;
              if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
                  if (t = parseInt(t, 10), s = d.current ? d.current.opts.loop : d.opts.loop, !s && (t < 0 || t >= p)) return !1;
                  if (a = d.firstRun = !Object.keys(d.slides).length, !(p < 2 && !a && d.isDragging)) {
                      if (c = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, r = d.createSlide(t), p > 1 && ((s || r.index > 0) && d.createSlide(t - 1), (s || r.index < p - 1) && d.createSlide(t + 1)), d.current = r, d.currIndex = r.index, d.currPos = r.pos, d.trigger("beforeShow", a), d.updateControls(), i = d.isMoved(r), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), f(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), f(d.$refs.container), r.$slide.addClass("fancybox-slide--previous"), d.loadSlide(r), r.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void d.preload("image");
                      n.each(d.slides, function(t, e) {
                          n.fancybox.stop(e.$slide, !0), e.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                          })
                      }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), i ? (l = Math.round(r.$slide.width()), n.each(d.slides, function(t, o) {
                          var a = o.pos - r.pos;
                          n.fancybox.animate(o.$slide, {
                              top: 0,
                              left: a * l + a * o.opts.gutter
                          }, e, function() {
                              o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === d.currPos && d.complete()
                          })
                      })) : d.$refs.stage.children().removeAttr("style"), r.isLoaded ? d.revealContent(r) : d.loadSlide(r), d.preload("image"), c.pos !== r.pos && (u = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (i || r.opts.transitionEffect) && (i ? c.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, u, e, null, !1))))
                  }
              }
          },
          createSlide: function(t) {
              var e, o, a = this;
              return o = t % a.group.length, o = o < 0 ? a.group.length + o : o, !a.slides[t] && a.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage), a.slides[t] = n.extend(!0, {}, a.group[o], {
                  pos: t,
                  $slide: e,
                  isLoaded: !1
              }), a.updateSlide(a.slides[t])), a.slides[t]
          },
          scaleToActual: function(t, e, a) {
              var i, s, r, c, l, u = this,
                  d = u.current,
                  f = d.$content,
                  p = n.fancybox.getTranslate(d.$slide).width,
                  h = n.fancybox.getTranslate(d.$slide).height,
                  g = d.width,
                  b = d.height;
              !u.isAnimating && f && "image" == d.type && d.isLoaded && !d.hasError && (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, i = n.fancybox.getTranslate(f), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, c = g / i.width, l = b / i.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = i.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), u.updateCursor(g, b), n.fancybox.animate(f, {
                  top: r,
                  left: s,
                  scaleX: c,
                  scaleY: l
              }, a || 330, function() {
                  u.isAnimating = !1
              }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
          },
          scaleToFit: function(t) {
              var e, o = this,
                  a = o.current,
                  i = a.$content;
              !o.isAnimating && i && "image" == a.type && a.isLoaded && !a.hasError && (n.fancybox.stop(i), o.isAnimating = !0, e = o.getFitPos(a), o.updateCursor(e.width, e.height), n.fancybox.animate(i, {
                  top: e.top,
                  left: e.left,
                  scaleX: e.width / i.width(),
                  scaleY: e.height / i.height()
              }, t || 330, function() {
                  o.isAnimating = !1
              }))
          },
          getFitPos: function(t) {
              var e, o, a, i, s = this,
                  r = t.$content,
                  c = t.$slide,
                  l = t.width || t.opts.width,
                  u = t.height || t.opts.height,
                  d = {};
              return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && u || (l = e, u = o), a = Math.min(1, e / l, o / u), l = Math.floor(a * l), u = Math.floor(a * u), "image" === t.type ? (d.top = Math.floor(.5 * (o - u)) + parseFloat(c.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (i = t.opts.width && t.opts.height ? l / u : t.opts.ratio || 16 / 9, u > l / i ? u = l / i : l > u * i && (l = u * i)), d.width = l, d.height = u, d)
          },
          update: function() {
              var t = this;
              n.each(t.slides, function(e, n) {
                  t.updateSlide(n)
              })
          },
          updateSlide: function(t, e) {
              var o = this,
                  a = t && t.$content,
                  i = t.width || t.opts.width,
                  s = t.height || t.opts.height,
                  r = t.$slide;
              a && (i || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(a), n.fancybox.setTranslate(a, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), r.length && (r.trigger("refresh"), o.$refs.toolbar.toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t)
          },
          centerSlide: function(t, e) {
              var a, i, s = this;
              s.current && (a = Math.round(t.$slide.width()), i = t.pos - s.current.pos, n.fancybox.animate(t.$slide, {
                  top: 0,
                  left: i * a + i * t.opts.gutter,
                  opacity: 1
              }, e === o ? 0 : e, null, !1))
          },
          isMoved: function(t) {
              var e = t || this.current,
                  o = n.fancybox.getTranslate(e.$slide);
              return (0 !== o.left || 0 !== o.top) && !e.$slide.hasClass("fancybox-animated")
          },
          updateCursor: function(t, e) {
              var o, a = this,
                  i = a.current,
                  s = a.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
              i && !a.isClosing && (o = a.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), n.isFunction(i.opts.clickContent) && (i.opts.clickContent = i.opts.clickContent(i)), a.canPan(t, e) ? s.addClass("fancybox-can-pan") : o && "zoom" === i.opts.clickContent ? s.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || a.group.length > 1) && "video" !== i.contentType && s.addClass("fancybox-can-swipe"))
          },
          isZoomable: function() {
              var t, e = this,
                  n = e.current;
              if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                  if (!n.isLoaded) return !0;
                  if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0
              }
              return !1
          },
          isScaledDown: function(t, e) {
              var a = this,
                  i = !1,
                  s = a.current,
                  r = s.$content;
              return t !== o && e !== o ? i = t < s.width && e < s.height : r && (i = n.fancybox.getTranslate(r), i = i.width < s.width && i.height < s.height), i
          },
          canPan: function(t, e) {
              var a, i, s = this,
                  r = !1,
                  c = s.current;
              return "image" === c.type && (a = c.$content) && !c.hasError && (r = s.getFitPos(c), i = t !== o && e !== o ? {
                  width: t,
                  height: e
              } : n.fancybox.getTranslate(a), r = Math.abs(i.width - r.width) > 1.5 || Math.abs(i.height - r.height) > 1.5), r
          },
          loadSlide: function(t) {
              var e, o, a, i = this;
              if (!t.isLoading && !t.isLoaded) {
                  switch (t.isLoading = !0, i.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                      case "image":
                          i.setImage(t);
                          break;
                      case "iframe":
                          i.setIframe(t);
                          break;
                      case "html":
                          i.setContent(t, t.src || t.content);
                          break;
                      case "video":
                          i.setContent(t, t.opts.video.tpl.replace("{{src}}", t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format));
                          break;
                      case "inline":
                          n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
                          break;
                      case "ajax":
                          i.showLoading(t), a = n.ajax(n.extend({}, t.opts.ajax.settings, {
                              url: t.src,
                              success: function(e, n) {
                                  "success" === n && i.setContent(t, e)
                              },
                              error: function(e, n) {
                                  e && "abort" !== n && i.setError(t)
                              }
                          })), o.one("onReset", function() {
                              a.abort()
                          });
                          break;
                      default:
                          i.setError(t)
                  }
                  return !0
              }
          },
          setImage: function(e) {
              var o, a, i, s, r, c = this,
                  l = e.opts.srcset || e.opts.image.srcset;
              if (e.timouts = setTimeout(function() {
                      var t = e.$image;
                      !e.isLoading || t && t.length && t[0].complete || e.hasError || c.showLoading(e)
                  }, 350), l) {
                  s = t.devicePixelRatio || 1, r = t.innerWidth * s, i = l.split(",").map(function(t) {
                      var e = {};
                      return t.trim().split(/\s+/).forEach(function(t, n) {
                          var o = parseInt(t.substring(0, t.length - 1), 10);
                          return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
                      }), e
                  }), i.sort(function(t, e) {
                      return t.value - e.value
                  });
                  for (var u = 0; u < i.length; u++) {
                      var d = i[u];
                      if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= s) {
                          a = d;
                          break
                      }
                  }!a && i.length && (a = i[i.length - 1]), a && (e.src = a.url, e.width && e.height && "w" == a.postfix && (e.height = e.width / e.height * a.value, e.width = a.value), e.opts.srcset = l)
              }
              e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
                  n(this).remove(), e.$ghost = null
              }).one("load", function() {
                  c.afterLoad(e)
              }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e)
          },
          setBigImage: function(t) {
              var e = this,
                  o = n("<img />");
              t.$image = o.one("error", function() {
                  e.setError(t)
              }).one("load", function() {
                  var n;
                  t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                      t.$ghost && !e.isClosing && t.$ghost.hide()
                  }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t))
              }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
          },
          resolveImageSlideSize: function(t, e, n) {
              var o = parseInt(t.opts.width, 10),
                  a = parseInt(t.opts.height, 10);
              t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), a > 0 && (t.width = Math.floor(a * e / n), t.height = a)
          },
          setIframe: function(t) {
              var e, a = this,
                  i = t.opts.iframe,
                  s = t.$slide;
              t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (a.showLoading(t), e.on("load.fb error.fb", function(e) {
                  this.isReady = 1, t.$slide.trigger("refresh"), a.afterLoad(t)
              }), s.on("refresh.fb", function() {
                  var n, a, s = t.$content,
                      r = i.css.width,
                      c = i.css.height;
                  if (1 === e[0].isReady) {
                      try {
                          n = e.contents(), a = n.find("body")
                      } catch (t) {}
                      a && a.length && a.children().length && (s.css({
                          width: "",
                          height: ""
                      }), r === o && (r = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))), r && s.width(r), c === o && (c = Math.ceil(Math.max(a[0].clientHeight, a.outerHeight(!0)))), c && s.height(c)), s.removeClass("fancybox-is-hidden")
                  }
              })) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
                  try {
                      n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                  } catch (t) {}
                  n(this).off("refresh.fb").empty(), t.isLoaded = !1
              })
          },
          setContent: function(t, e) {
              var o = this;
              o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.hasClass(".fancybox-content") && e.parent(".fancybox-slide--html").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                  n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
              }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
          },
          setError: function(t) {
              t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
          },
          showLoading: function(t) {
              var e = this;
              t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
          },
          hideLoading: function(t) {
              var e = this;
              t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
          },
          afterLoad: function(t) {
              var e = this;
              e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                  return 2 == t.button && t.preventDefault(), !0
              }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
          },
          revealContent: function(t) {
              var e, a, i, s, r = this,
                  c = t.$slide,
                  l = !1,
                  u = !1,
                  d = r.isMoved(t),
                  p = t.isRevealed;
              if (!d || !p) {
                  if (t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !d && t.pos === r.currPos && i || (e = !1), "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (u = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e) return l.scaleX = l.width / u.width, l.scaleY = l.height / u.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, l, i, function() {
                      r.isAnimating = !1, r.complete()
                  });
                  if (r.updateSlide(t), !e) return f(c), p || t.$content.removeClass("fancybox-is-hidden").hide().fadeIn("fast"), void(t.pos === r.currPos && r.complete());
                  n.fancybox.stop(c), a = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(a), t.$content.removeClass("fancybox-is-hidden"), f(c), n.fancybox.animate(c, "fancybox-slide--current", i, function() {
                      c.removeClass(a).removeAttr("style"), t.pos === r.currPos && r.complete()
                  }, !0)
              }
          },
          getThumbPos: function(o) {
              var a, i = this,
                  s = !1,
                  r = o.opts.$thumb,
                  c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0,
                  l = function(e) {
                      for (var o, a = e[0], i = a.getBoundingClientRect(), s = []; null !== a.parentElement;) "hidden" !== n(a.parentElement).css("overflow") && "auto" !== n(a.parentElement).css("overflow") || s.push(a.parentElement.getBoundingClientRect()), a = a.parentElement;
                      return o = s.every(function(t) {
                          var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                              n = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                          return e > 0 && n > 0
                      }), o && i.bottom > 0 && i.right > 0 && i.left < n(t).width() && i.top < n(t).height()
                  };
              return c && l(r) && (a = i.$refs.stage.offset(), s = {
                  top: c.top - a.top + parseFloat(r.css("border-top-width") || 0),
                  left: c.left - a.left + parseFloat(r.css("border-left-width") || 0),
                  width: r.width(),
                  height: r.height(),
                  scaleX: 1,
                  scaleY: 1
              }), s
          },
          complete: function() {
              var t = this,
                  e = t.current,
                  o = {};
              !t.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), t.preload("inline"), f(e.$slide), e.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, a) {
                  a.pos >= t.currPos - 1 && a.pos <= t.currPos + 1 ? o[a.pos] = a : a && (n.fancybox.stop(a.$slide), a.$slide.off().remove())
              }), t.slides = o), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play"), e.opts.autoFocus && ("image" !== e.type || t.firstRun) && t.focus(), e.$slide.scrollTop(0).scrollLeft(0))
          },
          preload: function(t) {
              var e = this,
                  n = e.slides[e.currPos + 1],
                  o = e.slides[e.currPos - 1];
              n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o)
          },
          focus: function() {
              var t, e = this,
                  n = e.current;
              this.isClosing || (n && n.isComplete && n.$content && (t = n.$content.find("input[autofocus]:enabled:visible:first"), t.length || (t = n.$content.find("button,:input,[tabindex],a").filter(":not(.fancybox-close-small):enabled:visible:first"))), t = t && t.length ? t : e.$refs.container, t.trigger("focus"))
          },
          activate: function() {
              var t = this;
              n(".fancybox-container").each(function() {
                  var e = n(this).data("FancyBox");
                  e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
              }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
          },
          close: function(t, e) {
              var o, a, i, s, r, c, l, p = this,
                  h = p.current,
                  g = function() {
                      p.cleanUp(t)
                  };
              return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, u(function() {
                  p.update()
              }), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), i = h.$content, o = h.opts.animationEffect, a = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), a && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && i && a && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(i), s = n.fancybox.getTranslate(i), c = {
                  top: s.top,
                  left: s.left,
                  scaleX: s.width / l.width,
                  scaleY: s.height / l.height,
                  width: l.width,
                  height: l.height
              }, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(i, c), f(i), n.fancybox.animate(i, l, a, g), !0) : (o && a ? t === !0 ? setTimeout(g, a) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, a, g) : g(), !0)))
          },
          cleanUp: function(e) {
              var o, a, i, s = this,
                  r = s.current.opts.$orig;
              s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (a = t.scrollX, i = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(i).scrollLeft(a))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
          },
          trigger: function(t, e) {
              var o, a = Array.prototype.slice.call(arguments, 1),
                  i = this,
                  s = e && e.opts ? e : i.current;
              return s ? a.unshift(s) : s = i, a.unshift(i), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)), o === !1 ? o : void("afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", a) : r.trigger(t + ".fb", a))
          },
          updateControls: function(t) {
              var e = this,
                  n = e.current,
                  o = n.index,
                  a = n.opts.caption,
                  i = e.$refs.container,
                  s = e.$refs.caption;
              n.$slide.trigger("refresh"), e.$caption = a && a.length ? s.html(a) : null, e.isHiddenControls || e.isIdle || e.showControls(), i.find("[data-fancybox-count]").html(e.group.length), i.find("[data-fancybox-index]").html(o + 1), i.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0), i.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
          },
          hideControls: function() {
              this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
          },
          showControls: function() {
              var t = this,
                  e = t.current ? t.current.opts : t.opts,
                  n = t.$refs.container;
              t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
          },
          toggleControls: function() {
              this.isHiddenControls ? this.showControls() : this.hideControls();
          }
      }), n.fancybox = {
          version: "3.4.0",
          defaults: i,
          getInstance: function(t) {
              var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                  o = Array.prototype.slice.call(arguments, 1);
              return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
          },
          open: function(t, e, n) {
              return new h(t, e, n)
          },
          close: function(t) {
              var e = this.getInstance();
              e && (e.close(), t === !0 && this.close(t))
          },
          destroy: function() {
              this.close(!0), r.add("body").off("click.fb-start", "**")
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          use3d: function() {
              var n = e.createElement("div");
              return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
          }(),
          getTranslate: function(t) {
              var e;
              return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                  top: e.top || 0,
                  left: e.left || 0,
                  width: e.width,
                  height: e.height,
                  opacity: parseFloat(t.css("opacity"))
              })
          },
          setTranslate: function(t, e) {
              var n = "",
                  a = {};
              if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (a.transform = n), e.opacity !== o && (a.opacity = e.opacity), e.width !== o && (a.width = e.width), e.height !== o && (a.height = e.height), t.css(a)
          },
          animate: function(t, e, a, i, s) {
              var r, c = !1;
              n.isFunction(a) && (i = a, a = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(d, function(o) {
                  (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), c && n.fancybox.setTranslate(t, c), n.isNumeric(a) && t.css("transition-duration", ""), n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(i) && i(o))
              }), n.isNumeric(a) && t.css("transition-duration", a + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.fancybox.getTranslate(t), c = n.extend({}, e, {
                  width: r.width * e.scaleX,
                  height: r.height * e.scaleY,
                  scaleX: 1,
                  scaleY: 1
              }), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                  t.trigger("transitionend")
              }, a + 16))
          },
          stop: function(t, e) {
              t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
          }
      }, n.fn.fancybox = function(t) {
          var e;
          return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
              options: t
          }, a) : this.off("click.fb-start").on("click.fb-start", {
              items: this,
              options: t
          }, a), this
      }, r.on("click.fb-start", "[data-fancybox]", a), r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
              $trigger: n(this)
          })
      }), r.on("mousedown", ".fancybox-button", function() {
          n(this).data("pressed", 1)
      }).on("mouseup", ".fancybox-button", function() {
          n(this).removeData("pressed")
      }).on("focus", ".fancybox-button", function() {
          n(this).data("pressed") || n(this).addClass("fancybox-focus")
      }).on("blur", ".fancybox-button", function() {
          n(this).removeClass("fancybox-focus")
      })
  }
}(window, document, window.jQuery || jQuery),
function(t) {
  "use strict";
  var e = function(e, n, o) {
          if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
              e = e.replace("$" + t, n || "")
          }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
      },
      n = {
          youtube: {
              matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
              params: {
                  autoplay: 1,
                  autohide: 1,
                  fs: 1,
                  rel: 0,
                  hd: 1,
                  wmode: "transparent",
                  enablejsapi: 1,
                  html5: 1
              },
              paramPlace: 8,
              type: "iframe",
              url: "//www.youtube-nocookie.com/embed/$4",
              thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
          },
          vimeo: {
              matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
              params: {
                  autoplay: 1,
                  hd: 1,
                  show_title: 1,
                  show_byline: 1,
                  show_portrait: 0,
                  fullscreen: 1,
                  api: 1
              },
              paramPlace: 3,
              type: "iframe",
              url: "//player.vimeo.com/video/$2"
          },
          instagram: {
              matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
              type: "image",
              url: "//$1/p/$2/media/?size=l"
          },
          gmap_place: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
              }
          },
          gmap_search: {
              matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
              type: "iframe",
              url: function(t) {
                  return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
              }
          }
      };
  t(document).on("objectNeedsType.fb", function(o, a, i) {
      var s, r, c, l, u, d, f, p = i.src || "",
          h = !1;
      s = t.extend(!0, {}, n, i.opts.media), t.each(s, function(n, o) {
          if (c = p.match(o.matcher)) {
              if (h = o.type, f = n, d = {}, o.paramPlace && c[o.paramPlace]) {
                  u = c[o.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");
                  for (var a = 0; a < u.length; ++a) {
                      var s = u[a].split("=", 2);
                      2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                  }
              }
              return l = t.extend(!0, {}, o.params, i.opts[n], d), p = "function" === t.type(o.url) ? o.url.call(this, c, l, i) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, i) : e(o.thumb, c), "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                  return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
              }) : "vimeo" === n && (p = p.replace("&%23", "#")), !1
          }
      }), h ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = r), "iframe" === h && (i.opts = t.extend(!0, i.opts, {
          iframe: {
              preload: !1,
              attr: {
                  scrolling: "no"
              }
          }
      })), t.extend(i, {
          type: h,
          src: p,
          origSrc: i.src,
          contentSource: f,
          contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
      })) : p && (i.type = i.opts.defaultType)
  })
}(window.jQuery || jQuery),
function(t, e, n) {
  "use strict";
  var o = function() {
          return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
              return t.setTimeout(e, 1e3 / 60)
          }
      }(),
      a = function() {
          return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
              t.clearTimeout(e)
          }
      }(),
      i = function(e) {
          var n = [];
          e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
          for (var o in e) e[o].pageX ? n.push({
              x: e[o].pageX,
              y: e[o].pageY
          }) : e[o].clientX && n.push({
              x: e[o].clientX,
              y: e[o].clientY
          });
          return n
      },
      s = function(t, e, n) {
          return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
      },
      r = function(t) {
          if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
          for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++)
              if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
          return !1
      },
      c = function(e) {
          var n = t.getComputedStyle(e)["overflow-y"],
              o = t.getComputedStyle(e)["overflow-x"],
              a = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
              i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
          return a || i
      },
      l = function(t) {
          for (var e = !1;;) {
              if (e = c(t.get(0))) break;
              if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
          }
          return e
      },
      u = function(t) {
          var e = this;
          e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
      };
  u.prototype.destroy = function() {
      this.$container.off(".fb.touch")
  }, u.prototype.ontouchstart = function(o) {
      var a = this,
          c = n(o.target),
          u = a.instance,
          d = u.current,
          f = d.$slide,
          p = d.$content,
          h = "touchstart" == o.type;
      if (h && a.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
          if (!d || u.isAnimating || u.isClosing) return o.stopPropagation(), void o.preventDefault();
          if (a.realPoints = a.startPoints = i(o), a.startPoints.length) {
              if (d.touch && o.stopPropagation(), a.startEvent = o, a.canTap = !0, a.$target = c, a.$content = p, a.opts = d.opts.touch, a.isPanning = !1, a.isSwiping = !1, a.isZooming = !1, a.isScrolling = !1, a.canPan = u.canPan(), a.startTime = (new Date).getTime(), a.distanceX = a.distanceY = a.distance = 0, a.canvasWidth = Math.round(f[0].clientWidth), a.canvasHeight = Math.round(f[0].clientHeight), a.contentLastPos = null, a.contentStartPos = n.fancybox.getTranslate(a.$content) || {
                      top: 0,
                      left: 0
                  }, a.sliderStartPos = a.sliderLastPos || n.fancybox.getTranslate(f), a.stagePos = n.fancybox.getTranslate(u.$refs.stage), a.sliderStartPos.top -= a.stagePos.top, a.sliderStartPos.left -= a.stagePos.left, a.contentStartPos.top -= a.stagePos.top, a.contentStartPos.left -= a.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", a.onscroll, !0), !a.opts && !a.canPan || !c.is(a.$stage) && !a.$stage.find(c).length) return void(c.is(".fancybox-image") && o.preventDefault());
              a.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && a.isScrollable || o.preventDefault(), (1 === a.startPoints.length || d.hasError) && (a.canPan ? (n.fancybox.stop(a.$content), a.$content.css("transition-duration", ""), a.isPanning = !0) : a.isSwiping = !0, a.$container.addClass("fancybox-is-grabbing")), 2 === a.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (a.canTap = !1, a.isSwiping = !1, a.isPanning = !1, a.isZooming = !0, n.fancybox.stop(a.$content), a.$content.css("transition-duration", ""), a.centerPointStartX = .5 * (a.startPoints[0].x + a.startPoints[1].x) - n(t).scrollLeft(), a.centerPointStartY = .5 * (a.startPoints[0].y + a.startPoints[1].y) - n(t).scrollTop(), a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width, a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height, a.startDistanceBetweenFingers = s(a.startPoints[0], a.startPoints[1]))
          }
      }
  }, u.prototype.onscroll = function(t) {
      var n = this;
      n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
  }, u.prototype.ontouchmove = function(t) {
      var e = this;
      return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = i(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
  }, u.prototype.onSwipe = function(e) {
      var i, s = this,
          r = s.isSwiping,
          c = s.sliderStartPos.left || 0;
      if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
          top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
          left: c
      }, s.requestId && (a(s.requestId), s.requestId = null), s.requestId = o(function() {
          s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
              var o = e.pos - s.instance.currPos;
              n.fancybox.setTranslate(e.$slide, {
                  top: s.sliderLastPos.top,
                  left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
              })
          }), s.$container.addClass("fancybox-is-sliding"))
      });
      else if (Math.abs(s.distance) > 10) {
          if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = i > 45 && i < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
          s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(t, e) {
              n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
          }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
      }
  }, u.prototype.onPan = function() {
      var t = this;
      return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (a(t.requestId), t.requestId = null), void(t.requestId = o(function() {
          n.fancybox.setTranslate(t.$content, t.contentLastPos)
      })))
  }, u.prototype.limitMovement = function() {
      var t, e, n, o, a, i, s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          u = s.distanceY,
          d = s.contentStartPos,
          f = d.left,
          p = d.top,
          h = d.width,
          g = d.height;
      return a = h > r ? f + l : f, i = p + u, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, .8) || 0), u > 0 && i > e && (i = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && i < o && (i = o + 1 - Math.pow(o - p - u, .8) || 0), {
          top: i,
          left: a
      }
  }, u.prototype.limitPosition = function(t, e, n, o) {
      var a = this,
          i = a.canvasWidth,
          s = a.canvasHeight;
      return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
          top: e,
          left: t
      }
  }, u.prototype.onZoom = function() {
      var e = this,
          i = e.contentStartPos,
          r = i.width,
          c = i.height,
          l = i.left,
          u = i.top,
          d = s(e.newPoints[0], e.newPoints[1]),
          f = d / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          v = m - e.centerPointStartX,
          x = y - e.centerPointStartY,
          w = l + (g + v),
          $ = u + (b + x),
          S = {
              top: $,
              left: w,
              scaleX: f,
              scaleY: f
          };
      e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (a(e.requestId), e.requestId = null), e.requestId = o(function() {
          n.fancybox.setTranslate(e.$content, e.contentLastPos)
      })
  }, u.prototype.ontouchend = function(t) {
      var o = this,
          s = Math.max((new Date).getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming,
          u = o.isScrolling;
      return o.endPoints = i(t), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (a(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, u)))
  }, u.prototype.endSwiping = function(t, e) {
      var o = this,
          a = !1,
          i = o.instance.group.length;
      o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
          top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
          opacity: 0
      }, 200), a = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && i > 1 ? a = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && i > 1 && (a = o.instance.next(o.speedX)), a !== !1 || "x" != t && "y" != t || (e || i < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding")
  }, u.prototype.endPanning = function() {
      var t, e, o, a = this;
      a.contentLastPos && (a.opts.momentum === !1 ? (t = a.contentLastPos.left, e = a.contentLastPos.top) : (t = a.contentLastPos.left + a.velocityX * a.speed, e = a.contentLastPos.top + a.velocityY * a.speed), o = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height), o.width = a.contentStartPos.width, o.height = a.contentStartPos.height, n.fancybox.animate(a.$content, o, 330))
  }, u.prototype.endZooming = function() {
      var t, e, o, a, i = this,
          s = i.instance.current,
          r = i.newWidth,
          c = i.newHeight;
      i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, a = {
          top: e,
          left: t,
          width: r,
          height: c,
          scaleX: 1,
          scaleY: 1
      }, n.fancybox.setTranslate(i.$content, a), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > s.width || c > s.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.setTranslate(i.$content, n.fancybox.getTranslate(i.$content)), n.fancybox.animate(i.$content, o, 150)))
  }, u.prototype.onTap = function(e) {
      var o, a = this,
          s = n(e.target),
          r = a.instance,
          c = r.current,
          l = e && i(e) || a.startPoints,
          u = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
          d = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0,
          f = function(t) {
              var o = c.opts[t];
              if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                  case "close":
                      r.close(a.startEvent);
                      break;
                  case "toggleControls":
                      r.toggleControls(!0);
                      break;
                  case "next":
                      r.next();
                      break;
                  case "nextOrClose":
                      r.group.length > 1 ? r.next() : r.close(a.startEvent);
                      break;
                  case "zoom":
                      "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(u, d) : r.group.length < 2 && r.close(a.startEvent))
              }
          };
      if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
          if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
          else if (s.is(".fancybox-slide")) o = "Slide";
          else {
              if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
              o = "Content"
          }
          if (a.tapped) {
              if (clearTimeout(a.tapped), a.tapped = null, Math.abs(u - a.tapX) > 50 || Math.abs(d - a.tapY) > 50) return this;
              f("dblclick" + o)
          } else a.tapX = u, a.tapY = d, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? a.tapped = setTimeout(function() {
              a.tapped = null, f("click" + o)
          }, 500) : f("click" + o);
          return this
      }
  }, n(e).on("onActivate.fb", function(t, e) {
      e && !e.Guestures && (e.Guestures = new u(e))
  })
}(window, document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
      },
      slideShow: {
          autoStart: !1,
          speed: 3e3
      }
  });
  var n = function(t) {
      this.instance = t, this.init()
  };
  e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function() {
          var t = this;
          t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
              t.toggle()
          }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
      },
      set: function(t) {
          var e = this;
          e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
              e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
          }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
      },
      clear: function() {
          var t = this;
          clearTimeout(t.timer), t.timer = null
      },
      start: function() {
          var t = this,
              e = t.instance.current;
          e && (t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
      },
      stop: function() {
          var t = this,
              e = t.instance.current;
          t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1)
      },
      toggle: function() {
          var t = this;
          t.isActive ? t.stop() : t.start()
      }
  }), e(t).on({
      "onInit.fb": function(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e))
      },
      "beforeShow.fb": function(t, e, n, o) {
          var a = e && e.SlideShow;
          o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear()
      },
      "afterShow.fb": function(t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set()
      },
      "afterKeydown.fb": function(n, o, a, i, s) {
          var r = o && o.SlideShow;
          !r || !a.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
      },
      "beforeClose.fb onDeactivate.fb": function(t, e) {
          var n = e && e.SlideShow;
          n && n.stop()
      }
  }), e(t).on("visibilitychange", function() {
      var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
      o && o.isActive && (t.hidden ? o.clear() : o.set())
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = function() {
      for (var e = [
              ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
              ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
              ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
          ], n = {}, o = 0; o < e.length; o++) {
          var a = e[o];
          if (a && a[1] in t) {
              for (var i = 0; i < a.length; i++) n[e[0][i]] = a[i];
              return n
          }
      }
      return !1
  }();
  if (!n) return void(e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
  var o = {
      request: function(e) {
          e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
      },
      exit: function() {
          t[n.exitFullscreen]()
      },
      toggle: function(e) {
          e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
      },
      isFullscreen: function() {
          return Boolean(t[n.fullscreenElement])
      },
      enabled: function() {
          return Boolean(t[n.fullscreenEnabled])
      }
  };
  e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
          fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
      },
      fullScreen: {
          autoStart: !1
      }
  }), e(t).on({
      "onInit.fb": function(t, e) {
          var n;
          e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
              t.stopPropagation(), t.preventDefault(), o.toggle()
          }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
      },
      "afterKeydown.fb": function(t, e, n, o, a) {
          e && e.FullScreen && 70 === a && (o.preventDefault(), e.FullScreen.toggle())
      },
      "beforeClose.fb": function(t, e) {
          e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
      }
  }), e(t).on(n.fullscreenchange, function() {
      var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = "fancybox-thumbs",
      o = n + "-active";
  e.fancybox.defaults = e.extend(!0, {
      btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
      },
      thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
      }
  }, e.fancybox.defaults);
  var a = function(t) {
      this.init(t)
  };
  e.extend(a.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function(t) {
          var e, n, o = this;
          o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n ? (o.$button.show().on("click", function() {
              o.toggle()
          }), o.isActive = !0) : o.$button.hide()
      },
      create: function() {
          var t, o = this,
              a = o.instance,
              i = o.opts.parentEl,
              s = [];
          o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)), o.$grid.on("click", "a", function() {
              a.jumpTo(e(this).attr("data-index"))
          })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(a.group, function(e, n) {
              t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '" ' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></a>")
          }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
      },
      focus: function(t) {
          var e, n, a = this,
              i = a.$list,
              s = a.$grid;
          a.instance.current && (e = i.children().removeClass(o).filter('[data-index="' + a.instance.current.index + '"]').addClass(o), n = e.position(), "y" === a.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
              scrollTop: i.scrollTop() + n.top
          }, t) : "x" === a.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({
              scrollLeft: n.left
          }, t))
      },
      update: function() {
          var t = this;
          t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
      },
      hide: function() {
          this.isVisible = !1, this.update()
      },
      show: function() {
          this.isVisible = !0, this.update()
      },
      toggle: function() {
          this.isVisible = !this.isVisible, this.update()
      }
  }), e(t).on({
      "onInit.fb": function(t, e) {
          var n;
          e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show())
      },
      "beforeShow.fb": function(t, e, n, o) {
          var a = e && e.Thumbs;
          a && a.isVisible && a.focus(o ? 0 : 250)
      },
      "afterKeydown.fb": function(t, e, n, o, a) {
          var i = e && e.Thumbs;
          i && i.isActive && 71 === a && (o.preventDefault(), i.toggle())
      },
      "beforeClose.fb": function(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
      }
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";

  function n(t) {
      var e = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
      };
      return String(t).replace(/[&<>"'`=\/]/g, function(t) {
          return e[t]
      })
  }
  e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
          share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
      },
      share: {
          url: function(t, e) {
              return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
      }
  }), e(t).on("click", "[data-fancybox-share]", function() {
      var t, o, a = e.fancybox.getInstance(),
          i = a.current || null;
      i && ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [a, i])), o = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""), e.fancybox.open({
          src: a.translate(a, o),
          type: "html",
          opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function(t, e) {
                  a.$refs.container.one("beforeClose.fb", function() {
                      t.close(null, 0)
                  }), e.$content.find(".fancybox-share__button").click(function() {
                      return window.open(this.href, "Share", "width=550, height=450"), !1
                  })
              },
              mobile: {
                  autoFocus: !1
              }
          }
      }))
  })
}(document, window.jQuery || jQuery),
function(t, e, n) {
  "use strict";

  function o() {
      var t = e.location.hash.substr(1),
          n = t.split("-"),
          o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
          a = n.join("-");
      return {
          hash: t,
          index: o < 1 ? 1 : o,
          gallery: a
      }
  }

  function a(t) {
      "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start")
  }

  function i(t) {
      var e, n;
      return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : ""), "" !== n && n)
  }
  n.escapeSelector || (n.escapeSelector = function(t) {
      var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function(t, e) {
              return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
          };
      return (t + "").replace(e, n)
  }), n(function() {
      n.fancybox.defaults.hash !== !1 && (n(t).on({
          "onInit.fb": function(t, e) {
              var n, a;
              e.group[e.currIndex].opts.hash !== !1 && (n = o(), a = i(e), a && n.gallery && a == n.gallery && (e.currIndex = n.index - 1))
          },
          "beforeShow.fb": function(n, o, a, s) {
              var r;
              a && a.opts.hash !== !1 && (r = i(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (a.index + 1) : ""), e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
                  "replaceState" in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash, o.hashTimer = null
              }, 300))))
          },
          "beforeClose.fb": function(n, o, a) {
              a.opts.hash !== !1 && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash), o.currentHash = null)
          }
      }), n(e).on("hashchange.fb", function() {
          var t = o(),
              e = null;
          n.each(n(".fancybox-container").get().reverse(), function(t, o) {
              var a = n(o).data("FancyBox");
              if (a && a.currentHash) return e = a, !1
          }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && a(t)
      }), setTimeout(function() {
          n.fancybox.getInstance() || a(o())
      }, 50))
  })
}(document, window, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = (new Date).getTime();
  e(t).on({
      "onInit.fb": function(t, e, o) {
          e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
              var o = e.current,
                  a = (new Date).getTime();
              e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, a - n < 250 || (n = a, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
          })
      }
  })
}(document, window.jQuery || jQuery);
/*! nouislider - 12.1.0 - 10/25/2018 */
! function(t) {
  "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
  "use strict";
  var et = "12.1.0";

  function s(t) {
      return null != t
  }

  function rt(t) {
      t.preventDefault()
  }

  function i(t) {
      return "number" == typeof t && !isNaN(t) && isFinite(t)
  }

  function nt(t, e, r) {
      0 < r && (at(t, e), setTimeout(function() {
          st(t, e)
      }, r))
  }

  function it(t) {
      return Math.max(Math.min(t, 100), 0)
  }

  function ot(t) {
      return Array.isArray(t) ? t : [t]
  }

  function e(t) {
      var e = (t = String(t)).split(".");
      return 1 < e.length ? e[1].length : 0
  }

  function at(t, e) {
      t.classList ? t.classList.add(e) : t.className += " " + e
  }

  function st(t, e) {
      t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
  }

  function lt(t) {
      var e = void 0 !== window.pageXOffset,
          r = "CSS1Compat" === (t.compatMode || "");
      return {
          x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
          y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
      }
  }

  function c(t, e) {
      return 100 / (e - t)
  }

  function p(t, e) {
      return 100 * e / (t[1] - t[0])
  }

  function f(t, e) {
      for (var r = 1; t >= e[r];) r += 1;
      return r
  }

  function r(t, e, r) {
      if (r >= t.slice(-1)[0]) return 100;
      var n, i, o = f(r, t),
          a = t[o - 1],
          s = t[o],
          l = e[o - 1],
          u = e[o];
      return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
  }

  function n(t, e, r, n) {
      if (100 === n) return n;
      var i, o, a = f(n, t),
          s = t[a - 1],
          l = t[a];
      return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n
  }

  function o(t, e, r) {
      var n;
      if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' contains invalid value.");
      if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + et + "): 'range' value isn't numeric.");
      r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
  }

  function a(t, e, r) {
      if (!e) return !0;
      r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
      var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
          i = Math.ceil(Number(n.toFixed(3)) - 1),
          o = r.xVal[t] + r.xNumSteps[t] * i;
      r.xHighestCompleteStep[t] = o
  }

  function l(t, e, r) {
      var n;
      this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
      var i = [];
      for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
      for (i.length && "object" == typeof i[0][0] ? i.sort(function(t, e) {
              return t[0][0] - e[0][0]
          }) : i.sort(function(t, e) {
              return t[0] - e[0]
          }), n = 0; n < i.length; n++) o(i[n][1], i[n][0], this);
      for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this)
  }
  l.prototype.getMargin = function(t) {
      var e = this.xNumSteps[0];
      if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + et + "): 'limit', 'margin' and 'padding' must be divisible by step.");
      return 2 === this.xPct.length && p(this.xVal, t)
  }, l.prototype.toStepping = function(t) {
      return t = r(this.xVal, this.xPct, t)
  }, l.prototype.fromStepping = function(t) {
      return function(t, e, r) {
          if (100 <= r) return t.slice(-1)[0];
          var n, i = f(r, e),
              o = t[i - 1],
              a = t[i],
              s = e[i - 1],
              l = e[i];
          return n = [o, a], (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0]
      }(this.xVal, this.xPct, t)
  }, l.prototype.getStep = function(t) {
      return t = n(this.xPct, this.xSteps, this.snap, t)
  }, l.prototype.getNearbySteps = function(t) {
      var e = f(t, this.xPct);
      return {
          stepBefore: {
              startValue: this.xVal[e - 2],
              step: this.xNumSteps[e - 2],
              highestStep: this.xHighestCompleteStep[e - 2]
          },
          thisStep: {
              startValue: this.xVal[e - 1],
              step: this.xNumSteps[e - 1],
              highestStep: this.xHighestCompleteStep[e - 1]
          },
          stepAfter: {
              startValue: this.xVal[e],
              step: this.xNumSteps[e],
              highestStep: this.xHighestCompleteStep[e]
          }
      }
  }, l.prototype.countStepDecimals = function() {
      var t = this.xNumSteps.map(e);
      return Math.max.apply(null, t)
  }, l.prototype.convert = function(t) {
      return this.getStep(this.toStepping(t))
  };
  var u = {
      to: function(t) {
          return void 0 !== t && t.toFixed(2)
      },
      from: Number
  };

  function d(t) {
      if ("object" == typeof(e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
      var e;
      throw new Error("noUiSlider (" + et + "): 'format' requires 'to' and 'from' methods.")
  }

  function h(t, e) {
      if (!i(e)) throw new Error("noUiSlider (" + et + "): 'step' is not numeric.");
      t.singleStep = e
  }

  function m(t, e) {
      if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' is not an object.");
      if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + et + "): Missing 'min' or 'max' in 'range'.");
      if (e.min === e.max) throw new Error("noUiSlider (" + et + "): 'range' 'min' and 'max' cannot be equal.");
      t.spectrum = new l(e, t.snap, t.singleStep)
  }

  function g(t, e) {
      if (e = ot(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + et + "): 'start' option is incorrect.");
      t.handles = e.length, t.start = e
  }

  function v(t, e) {
      if ("boolean" != typeof(t.snap = e)) throw new Error("noUiSlider (" + et + "): 'snap' option must be a boolean.")
  }

  function b(t, e) {
      if ("boolean" != typeof(t.animate = e)) throw new Error("noUiSlider (" + et + "): 'animate' option must be a boolean.")
  }

  function S(t, e) {
      if ("number" != typeof(t.animationDuration = e)) throw new Error("noUiSlider (" + et + "): 'animationDuration' option must be a number.")
  }

  function w(t, e) {
      var r, n = [!1];
      if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
          for (r = 1; r < t.handles; r++) n.push(e);
          n.push(!1)
      } else {
          if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + et + "): 'connect' option doesn't match handle count.");
          n = e
      }
      t.connect = n
  }

  function x(t, e) {
      switch (e) {
          case "horizontal":
              t.ort = 0;
              break;
          case "vertical":
              t.ort = 1;
              break;
          default:
              throw new Error("noUiSlider (" + et + "): 'orientation' option is invalid.")
      }
  }

  function y(t, e) {
      if (!i(e)) throw new Error("noUiSlider (" + et + "): 'margin' option must be numeric.");
      if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + et + "): 'margin' option is only supported on linear sliders.")
  }

  function E(t, e) {
      if (!i(e)) throw new Error("noUiSlider (" + et + "): 'limit' option must be numeric.");
      if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + et + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
  }

  function C(t, e) {
      if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      if (0 !== e) {
          if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option is only supported on linear sliders.");
          if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + et + "): 'padding' option must be a positive number(s).");
          if (100 <= t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option must not exceed 100% of the range.")
      }
  }

  function N(t, e) {
      switch (e) {
          case "ltr":
              t.dir = 0;
              break;
          case "rtl":
              t.dir = 1;
              break;
          default:
              throw new Error("noUiSlider (" + et + "): 'direction' option was not recognized.")
      }
  }

  function U(t, e) {
      if ("string" != typeof e) throw new Error("noUiSlider (" + et + "): 'behaviour' must be a string containing options.");
      var r = 0 <= e.indexOf("tap"),
          n = 0 <= e.indexOf("drag"),
          i = 0 <= e.indexOf("fixed"),
          o = 0 <= e.indexOf("snap"),
          a = 0 <= e.indexOf("hover"),
          s = 0 <= e.indexOf("unconstrained");
      if (i) {
          if (2 !== t.handles) throw new Error("noUiSlider (" + et + "): 'fixed' behaviour must be used with 2 handles");
          y(t, t.start[1] - t.start[0])
      }
      if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + et + "): 'unconstrained' behaviour cannot be used with margin or limit");
      t.events = {
          tap: r || o,
          drag: n,
          fixed: i,
          snap: o,
          hover: a,
          unconstrained: s
      }
  }

  function k(t, e) {
      if (!1 !== e)
          if (!0 === e) {
              t.tooltips = [];
              for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
          } else {
              if (t.tooltips = ot(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + et + "): must pass a formatter for all handles.");
              t.tooltips.forEach(function(t) {
                  if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + et + "): 'tooltips' must be passed a formatter or 'false'.")
              })
          }
  }

  function P(t, e) {
      d(t.ariaFormat = e)
  }

  function A(t, e) {
      d(t.format = e)
  }

  function M(t, e) {
      if ("boolean" != typeof(t.keyboardSupport = e)) throw new Error("noUiSlider (" + et + "): 'keyboardSupport' option must be a boolean.")
  }

  function V(t, e) {
      t.documentElement = e
  }

  function O(t, e) {
      if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + et + "): 'cssPrefix' must be a string or `false`.");
      t.cssPrefix = e
  }

  function L(t, e) {
      if ("object" != typeof e) throw new Error("noUiSlider (" + et + "): 'cssClasses' must be an object.");
      if ("string" == typeof t.cssPrefix)
          for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
      else t.cssClasses = e
  }

  function ut(e) {
      var r = {
              margin: 0,
              limit: 0,
              padding: 0,
              animate: !0,
              animationDuration: 300,
              ariaFormat: u,
              format: u
          },
          n = {
              step: {
                  r: !1,
                  t: h
              },
              start: {
                  r: !0,
                  t: g
              },
              connect: {
                  r: !0,
                  t: w
              },
              direction: {
                  r: !0,
                  t: N
              },
              snap: {
                  r: !1,
                  t: v
              },
              animate: {
                  r: !1,
                  t: b
              },
              animationDuration: {
                  r: !1,
                  t: S
              },
              range: {
                  r: !0,
                  t: m
              },
              orientation: {
                  r: !1,
                  t: x
              },
              margin: {
                  r: !1,
                  t: y
              },
              limit: {
                  r: !1,
                  t: E
              },
              padding: {
                  r: !1,
                  t: C
              },
              behaviour: {
                  r: !0,
                  t: U
              },
              ariaFormat: {
                  r: !1,
                  t: P
              },
              format: {
                  r: !1,
                  t: A
              },
              tooltips: {
                  r: !1,
                  t: k
              },
              keyboardSupport: {
                  r: !0,
                  t: M
              },
              documentElement: {
                  r: !1,
                  t: V
              },
              cssPrefix: {
                  r: !0,
                  t: O
              },
              cssClasses: {
                  r: !0,
                  t: L
              }
          },
          i = {
              connect: !1,
              direction: "ltr",
              behaviour: "tap",
              orientation: "horizontal",
              keyboardSupport: !0,
              cssPrefix: "noUi-",
              cssClasses: {
                  target: "target",
                  base: "base",
                  origin: "origin",
                  handle: "handle",
                  handleLower: "handle-lower",
                  handleUpper: "handle-upper",
                  horizontal: "horizontal",
                  vertical: "vertical",
                  background: "background",
                  connect: "connect",
                  connects: "connects",
                  ltr: "ltr",
                  rtl: "rtl",
                  draggable: "draggable",
                  drag: "state-drag",
                  tap: "state-tap",
                  active: "active",
                  tooltip: "tooltip",
                  pips: "pips",
                  pipsHorizontal: "pips-horizontal",
                  pipsVertical: "pips-vertical",
                  marker: "marker",
                  markerHorizontal: "marker-horizontal",
                  markerVertical: "marker-vertical",
                  markerNormal: "marker-normal",
                  markerLarge: "marker-large",
                  markerSub: "marker-sub",
                  value: "value",
                  valueHorizontal: "value-horizontal",
                  valueVertical: "value-vertical",
                  valueNormal: "value-normal",
                  valueLarge: "value-large",
                  valueSub: "value-sub"
              }
          };
      e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function(t) {
          if (!s(e[t]) && void 0 === i[t]) {
              if (n[t].r) throw new Error("noUiSlider (" + et + "): '" + t + "' is required.");
              return !0
          }
          n[t].t(r, s(e[t]) ? e[t] : i[t])
      }), r.pips = e.pips;
      var t = document.createElement("div"),
          o = void 0 !== t.style.msTransform,
          a = void 0 !== t.style.transform;
      r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
      return r.style = [
          ["left", "top"],
          ["right", "bottom"]
      ][r.dir][r.ort], r
  }

  function z(t, f, o) {
      var l, u, s, a, c, e, p, i, d = window.navigator.pointerEnabled ? {
              start: "pointerdown",
              move: "pointermove",
              end: "pointerup"
          } : window.navigator.msPointerEnabled ? {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp"
          } : {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend"
          },
          h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
              var t = !1;
              try {
                  var e = Object.defineProperty({}, "passive", {
                      get: function() {
                          t = !0
                      }
                  });
                  window.addEventListener("test", null, e)
              } catch (t) {}
              return t
          }(),
          y = t,
          m = [],
          g = [],
          v = 0,
          E = f.spectrum,
          b = [],
          S = {},
          w = t.ownerDocument,
          x = f.documentElement || w.documentElement,
          C = w.body,
          N = -1,
          U = 0,
          k = 1,
          P = 2,
          A = "rtl" === w.dir || 1 === f.ort ? 0 : 100;

      function M(t, e) {
          var r = w.createElement("div");
          return e && at(r, e), t.appendChild(r), r
      }

      function V(t, e) {
          return !!e && M(t, f.cssClasses.connect)
      }

      function r(t, e) {
          return !!f.tooltips[e] && M(t.firstChild, f.cssClasses.tooltip)
      }

      function O(e, i, o) {
          var a = w.createElement("div"),
              s = [];
          s[U] = f.cssClasses.valueNormal, s[k] = f.cssClasses.valueLarge, s[P] = f.cssClasses.valueSub;
          var l = [];
          l[U] = f.cssClasses.markerNormal, l[k] = f.cssClasses.markerLarge, l[P] = f.cssClasses.markerSub;
          var u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
              c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

          function p(t, e) {
              var r = e === f.cssClasses.value,
                  n = r ? s : l;
              return e + " " + (r ? u : c)[f.ort] + " " + n[t]
          }
          return at(a, f.cssClasses.pips), at(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(e).forEach(function(t) {
              ! function(t, e, r) {
                  if ((r = i ? i(e, r) : r) !== N) {
                      var n = M(a, !1);
                      n.className = p(r, f.cssClasses.marker), n.style[f.style] = t + "%", U < r && ((n = M(a, !1)).className = p(r, f.cssClasses.value), n.setAttribute("data-value", e), n.style[f.style] = t + "%", n.innerHTML = o.to(e))
                  }
              }(t, e[t][0], e[t][1])
          }), a
      }

      function L() {
          var t;
          c && ((t = c).parentElement.removeChild(t), c = null)
      }

      function z(t) {
          L();
          var m, g, v, b, e, r, S, w, x, n = t.mode,
              i = t.density || 1,
              o = t.filter || !1,
              a = function(t, e, r) {
                  if ("range" === t || "steps" === t) return E.xVal;
                  if ("count" === t) {
                      if (e < 2) throw new Error("noUiSlider (" + et + "): 'values' (>= 2) required for mode 'count'.");
                      var n = e - 1,
                          i = 100 / n;
                      for (e = []; n--;) e[n] = n * i;
                      e.push(100), t = "positions"
                  }
                  return "positions" === t ? e.map(function(t) {
                      return E.fromStepping(r ? E.getStep(t) : t)
                  }) : "values" === t ? r ? e.map(function(t) {
                      return E.fromStepping(E.getStep(E.toStepping(t)))
                  }) : e : void 0
              }(n, t.values || !1, t.stepped || !1),
              s = (m = i, g = n, v = a, b = {}, e = E.xVal[0], r = E.xVal[E.xVal.length - 1], w = S = !1, x = 0, (v = v.slice().sort(function(t, e) {
                  return t - e
              }).filter(function(t) {
                  return !this[t] && (this[t] = !0)
              }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), w = !0), v.forEach(function(t, e) {
                  var r, n, i, o, a, s, l, u, c, p, f = t,
                      d = v[e + 1],
                      h = "steps" === g;
                  if (h && (r = E.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d)
                      for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                          for (u = (a = (o = E.toStepping(n)) - x) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(s = x + i * p).toFixed(5)] = [E.fromStepping(s), 0];
                          l = -1 < v.indexOf(n) ? k : h ? P : U, !e && S && (l = 0), n === d && w || (b[o.toFixed(5)] = [n, l]), x = o
                      }
              }), b),
              l = t.format || {
                  to: Math.round
              };
          return c = y.appendChild(O(s, o, l))
      }

      function j() {
          var t = l.getBoundingClientRect(),
              e = "offset" + ["Width", "Height"][f.ort];
          return 0 === f.ort ? t.width || l[e] : t.height || l[e]
      }

      function F(n, i, o, a) {
          var e = function(t) {
                  return !!(t = function(t, e, r) {
                      var n, i, o = 0 === t.type.indexOf("touch"),
                          a = 0 === t.type.indexOf("mouse"),
                          s = 0 === t.type.indexOf("pointer");
                      0 === t.type.indexOf("MSPointer") && (s = !0);
                      if (o) {
                          var l = function(t) {
                              return t.target === r || r.contains(t.target)
                          };
                          if ("touchstart" === t.type) {
                              var u = Array.prototype.filter.call(t.touches, l);
                              if (1 < u.length) return !1;
                              n = u[0].pageX, i = u[0].pageY
                          } else {
                              var c = Array.prototype.find.call(t.changedTouches, l);
                              if (!c) return !1;
                              n = c.pageX, i = c.pageY
                          }
                      }
                      e = e || lt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
                      return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                  }(t, a.pageOffset, a.target || i)) && (!(y.hasAttribute("disabled") && !a.doNotReject) && (e = y, r = f.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && (!(n === d.start && void 0 !== t.buttons && 1 < t.buttons) && ((!a.hover || !t.buttons) && (h || t.preventDefault(), t.calcPoint = t.points[f.ort], void o(t, a))))));
                  var e, r
              },
              r = [];
          return n.split(" ").forEach(function(t) {
              i.addEventListener(t, e, !!h && {
                  passive: !0
              }), r.push([t, e])
          }), r
      }

      function H(t) {
          var e, r, n, i, o, a, s = 100 * (t - (e = l, r = f.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, a = lt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / j();
          return s = it(s), f.dir ? 100 - s : s
      }

      function D(t, e) {
          "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && R(t, e)
      }

      function T(t, e) {
          if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return R(t, e);
          var r = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
          $(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
      }

      function R(t, e) {
          e.handle && (st(e.handle, f.cssClasses.active), v -= 1), e.listeners.forEach(function(t) {
              x.removeEventListener(t[0], t[1])
          }), 0 === v && (st(y, f.cssClasses.drag), J(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", rt))), e.handleNumbers.forEach(function(t) {
              Y("change", t), Y("set", t), Y("end", t)
          })
      }

      function q(t, e) {
          var r;
          if (1 === e.handleNumbers.length) {
              var n = u[e.handleNumbers[0]];
              if (n.hasAttribute("disabled")) return !1;
              r = n.children[0], v += 1, at(r, f.cssClasses.active)
          }
          t.stopPropagation();
          var i = [],
              o = F(d.move, x, T, {
                  target: t.target,
                  handle: r,
                  listeners: i,
                  startCalcPoint: t.calcPoint,
                  baseSize: j(),
                  pageOffset: t.pageOffset,
                  handleNumbers: e.handleNumbers,
                  buttonsProperty: t.buttons,
                  locations: m.slice()
              }),
              a = F(d.end, x, R, {
                  target: t.target,
                  handle: r,
                  listeners: i,
                  doNotReject: !0,
                  handleNumbers: e.handleNumbers
              }),
              s = F("mouseout", x, D, {
                  target: t.target,
                  handle: r,
                  listeners: i,
                  doNotReject: !0,
                  handleNumbers: e.handleNumbers
              });
          i.push.apply(i, o.concat(a, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && at(y, f.cssClasses.drag), C.addEventListener("selectstart", rt, !1)), e.handleNumbers.forEach(function(t) {
              Y("start", t)
          })
      }

      function n(t) {
          t.stopPropagation();
          var n, i, o, e = H(t.calcPoint),
              r = (n = e, o = !(i = 100), u.forEach(function(t, e) {
                  if (!t.hasAttribute("disabled")) {
                      var r = Math.abs(m[e] - n);
                      (r < i || 100 === r && 100 === i) && (o = e, i = r)
                  }
              }), o);
          if (!1 === r) return !1;
          f.events.snap || nt(y, f.cssClasses.tap, f.animationDuration), K(r, e, !0, !0), J(), Y("slide", r, !0), Y("update", r, !0), Y("change", r, !0), Y("set", r, !0), f.events.snap && q(t, {
              handleNumbers: [r]
          })
      }

      function B(t) {
          var e = H(t.calcPoint),
              r = E.getStep(e),
              n = E.fromStepping(r);
          Object.keys(S).forEach(function(t) {
              "hover" === t.split(".")[0] && S[t].forEach(function(t) {
                  t.call(a, n)
              })
          })
      }

      function X(t, e) {
          S[t] = S[t] || [], S[t].push(e), "update" === t.split(".")[0] && u.forEach(function(t, e) {
              Y("update", e)
          })
      }

      function Y(r, n, i) {
          Object.keys(S).forEach(function(t) {
              var e = t.split(".")[0];
              r === e && S[t].forEach(function(t) {
                  t.call(a, b.map(f.format.to), n, b.slice(), i || !1, m.slice())
              })
          })
      }

      function _(t) {
          return t + "%"
      }

      function I(t, e, r, n, i, o) {
          return 1 < u.length && !f.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + f.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - f.margin))), 1 < u.length && f.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + f.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - f.limit))), f.padding && (0 === e && (r = Math.max(r, f.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - f.padding[1]))), !((r = it(r = E.getStep(r))) === t[e] && !o) && r
      }

      function W(t, e) {
          var r = f.ort;
          return (r ? e : t) + ", " + (r ? t : e)
      }

      function $(t, n, r, e) {
          var i = r.slice(),
              o = [!t, t],
              a = [t, !t];
          e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function(t, e) {
              var r = I(i, t, i[t] + n, o[e], a[e], !1);
              !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
          }) : o = a = [!0];
          var s = !1;
          e.forEach(function(t, e) {
              s = K(t, r[t] + n, o[e], a[e]) || s
          }), s && e.forEach(function(t) {
              Y("update", t), Y("slide", t)
          })
      }

      function G(t, e) {
          return f.dir ? 100 - t - e : t
      }

      function J() {
          g.forEach(function(t) {
              var e = 50 < m[t] ? -1 : 1,
                  r = 3 + (u.length + e * t);
              u[t].style.zIndex = r
          })
      }

      function K(t, e, r, n) {
          return !1 !== (e = I(m, t, e, r, n, !1)) && (function(t, e) {
              m[t] = e, b[t] = E.fromStepping(e);
              var r = "translate(" + W(_(G(e, 0) - A), "0") + ")";
              u[t].style[f.transformRule] = r, Q(t), Q(t + 1)
          }(t, e), !0)
      }

      function Q(t) {
          if (s[t]) {
              var e = 0,
                  r = 100;
              0 !== t && (e = m[t - 1]), t !== s.length - 1 && (r = m[t]);
              var n = r - e,
                  i = "translate(" + W(_(G(e, n)), "0") + ")",
                  o = "scale(" + W(n / 100, "1") + ")";
              s[t].style[f.transformRule] = i + " " + o
          }
      }

      function Z(t, e) {
          var n = ot(t),
              r = void 0 === m[0];
          e = void 0 === e || !!e, f.animate && !r && nt(y, f.cssClasses.tap, f.animationDuration), g.forEach(function(t) {
              var e, r;
              K(t, (e = n[t], r = t, null === e || !1 === e || void 0 === e ? m[r] : ("number" == typeof e && (e = String(e)), e = f.format.from(e), !1 === (e = E.toStepping(e)) || isNaN(e) ? m[r] : e)), !0, !1)
          }), g.forEach(function(t) {
              K(t, m[t], !0, !0)
          }), J(), g.forEach(function(t) {
              Y("update", t), null !== n[t] && e && Y("set", t)
          })
      }

      function tt() {
          var t = b.map(f.format.to);
          return 1 === t.length ? t[0] : t
      }
      return at(e = y, f.cssClasses.target), 0 === f.dir ? at(e, f.cssClasses.ltr) : at(e, f.cssClasses.rtl), 0 === f.ort ? at(e, f.cssClasses.horizontal) : at(e, f.cssClasses.vertical), l = M(e, f.cssClasses.base),
          function(t, e) {
              var r, n, i, o = M(e, f.cssClasses.connects);
              u = [], (s = []).push(V(o, t[0]));
              for (var a = 0; a < f.handles; a++) u.push((r = a, i = void 0, n = M(e, f.cssClasses.origin), (i = M(n, f.cssClasses.handle)).setAttribute("data-handle", r), f.keyboardSupport && i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === r ? at(i, f.cssClasses.handleLower) : r === f.handles - 1 && at(i, f.cssClasses.handleUpper), n)), g[a] = a, s.push(V(o, t[a + 1]))
          }(f.connect, l), (p = f.events).fixed || u.forEach(function(t, e) {
              F(d.start, t.children[0], q, {
                  handleNumbers: [e]
              })
          }), p.tap && F(d.start, l, n, {}), p.hover && F(d.move, l, B, {
              hover: !0
          }), p.drag && s.forEach(function(t, e) {
              if (!1 !== t && 0 !== e && e !== s.length - 1) {
                  var r = u[e - 1],
                      n = u[e],
                      i = [t];
                  at(t, f.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function(t) {
                      F(d.start, t, q, {
                          handles: [r, n],
                          handleNumbers: [e - 1, e]
                      })
                  })
              }
          }), Z(f.start), a = {
              destroy: function() {
                  for (var t in f.cssClasses) f.cssClasses.hasOwnProperty(t) && st(y, f.cssClasses[t]);
                  for (; y.firstChild;) y.removeChild(y.firstChild);
                  delete y.noUiSlider
              },
              steps: function() {
                  return m.map(function(t, e) {
                      var r = E.getNearbySteps(t),
                          n = b[e],
                          i = r.thisStep.step,
                          o = null;
                      !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
                      var a = E.countStepDecimals();
                      return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
                  })
              },
              on: X,
              off: function(t) {
                  var n = t && t.split(".")[0],
                      i = n && t.substring(n.length);
                  Object.keys(S).forEach(function(t) {
                      var e = t.split(".")[0],
                          r = t.substring(e.length);
                      n && n !== e || i && i !== r || delete S[t]
                  })
              },
              get: tt,
              set: Z,
              setHandle: function(t, e, r) {
                  var n = [];
                  if (!(0 <= (t = Number(t)) && t < g.length)) throw new Error("noUiSlider (" + et + "): invalid handle number, got: " + t);
                  for (var i = 0; i < g.length; i++) n[i] = null;
                  n[t] = e, Z(n, r)
              },
              reset: function(t) {
                  Z(f.start, t)
              },
              __moveHandles: function(t, e, r) {
                  $(t, e, m, r)
              },
              options: o,
              updateOptions: function(e, t) {
                  var r = tt(),
                      n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                  n.forEach(function(t) {
                      void 0 !== e[t] && (o[t] = e[t])
                  });
                  var i = ut(o);
                  n.forEach(function(t) {
                      void 0 !== e[t] && (f[t] = i[t])
                  }), E = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips && z(f.pips), m = [], Z(e.start || r, t)
              },
              target: y,
              removePips: L,
              pips: z
          }, f.pips && z(f.pips), f.tooltips && (i = u.map(r), X("update", function(t, e, r) {
              if (i[e]) {
                  var n = t[e];
                  !0 !== f.tooltips[e] && (n = f.tooltips[e].to(r[e])), i[e].innerHTML = n
              }
          })), X("update", function(t, e, a, r, s) {
              g.forEach(function(t) {
                  var e = u[t],
                      r = I(m, t, 0, !0, !0, !0),
                      n = I(m, t, 100, !0, !0, !0),
                      i = s[t],
                      o = f.ariaFormat.to(a[t]);
                  r = E.fromStepping(r).toFixed(1), n = E.fromStepping(n).toFixed(1), i = E.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o)
              })
          }), a
  }
  return {
      __spectrum: l,
      version: et,
      create: function(t, e) {
          if (!t || !t.nodeName) throw new Error("noUiSlider (" + et + "): create requires a single element, got: " + t);
          if (t.noUiSlider) throw new Error("noUiSlider (" + et + "): Slider was already initialized.");
          var r = z(t, ut(e), e);
          return t.noUiSlider = r
      }
  }
});
/**
* Owl Carousel v2.3.4
* Copyright 2013-2018 David Deutsch
* Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
*/
! function(a, b, c, d) {
  function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
              start: null,
              current: null
          },
          direction: null
      }, this._states = {
          current: {},
          tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"]
          }
      }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
          this._handlers[c] = a.proxy(this[c], this)
      }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
      }, this)), a.each(e.Workers, a.proxy(function(b, c) {
          this._pipe.push({
              filter: c.filter,
              run: a.proxy(c.run, this)
          })
      }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
  }, e.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
  }, e.Type = {
      Event: "event",
      State: "state"
  }, e.Plugins = {}, e.Workers = [{
      filter: ["width", "settings"],
      run: function() {
          this._width = this.$element.width()
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)]
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          this.$stage.children(".cloned").remove()
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = this.settings.margin || "",
              c = !this.settings.autoWidth,
              d = this.settings.rtl,
              e = {
                  width: "auto",
                  "margin-left": d ? b : "",
                  "margin-right": d ? "" : b
              };
          !c && this.$stage.children().css(e), a.css = e
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
              c = null,
              d = this._items.length,
              e = !this.settings.autoWidth,
              f = [];
          for (a.items = {
                  merge: !1,
                  width: b
              }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
          this._widths = f
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          var b = [],
              c = this._items,
              d = this.settings,
              e = Math.max(2 * d.items, 4),
              f = 2 * Math.ceil(c.length / 2),
              g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
              h = "",
              i = "";
          for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
          this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
          this._coordinates = f
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          var a = this.settings.stagePadding,
              b = this._coordinates,
              c = {
                  width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                  "padding-left": a || "",
                  "padding-right": a || ""
              };
          this.$stage.css(c)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = this._coordinates.length,
              c = !this.settings.autoWidth,
              d = this.$stage.children();
          if (c && a.items.merge)
              for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
          else c && (a.css.width = a.items.width, d.css(a.css))
      }
  }, {
      filter: ["items"],
      run: function() {
          this._coordinates.length < 1 && this.$stage.removeAttr("style")
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
      }
  }, {
      filter: ["position"],
      run: function() {
          this.animate(this.coordinates(this._current))
      }
  }, {
      filter: ["width", "position", "items", "settings"],
      run: function() {
          var a, b, c, d, e = this.settings.rtl ? 1 : -1,
              f = 2 * this.settings.stagePadding,
              g = this.coordinates(this.current()) + f,
              h = g + this.width() * e,
              i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
          this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
      }
  }], e.prototype.initializeStage = function() {
      this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
          class: this.settings.stageClass
      }).wrap(a("<div/>", {
          class: this.settings.stageOuterClass
      })), this.$element.append(this.$stage.parent()))
  }, e.prototype.initializeItems = function() {
      var b = this.$element.find(".owl-item");
      if (b.length) return this._items = b.get().map(function(b) {
          return a(b)
      }), this._mergers = this._items.map(function() {
          return 1
      }), void this.refresh();
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
  }, e.prototype.initialize = function() {
      if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
          var a, b, c;
          a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
      }
      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.isVisible = function() {
      return !this.settings.checkVisibility || this.$element.is(":visible")
  }, e.prototype.setup = function() {
      var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
      c ? (a.each(c, function(a) {
          a <= b && a > d && (d = Number(a))
      }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
          property: {
              name: "settings",
              value: e
          }
      }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
          property: {
              name: "settings",
              value: this.settings
          }
      })
  }, e.prototype.optionsLogic = function() {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function(b) {
      var c = this.trigger("prepare", {
          content: b
      });
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
          content: c.data
      }), c.data
  }, e.prototype.update = function() {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
              return this[a]
          }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function(a) {
      switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
              return this._width;
          default:
              return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
  }, e.prototype.refresh = function() {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function() {
      return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function() {
      a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
          return !1
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function(b) {
      var d = null;
      3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
          x: d[16 === d.length ? 12 : 4],
          y: d[16 === d.length ? 13 : 5]
      }) : (d = this.$stage.position(), d = {
          x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
          y: d.top
      }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
          var d = this.difference(this._drag.pointer, this.pointer(b));
          a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
      }, this)))
  }, e.prototype.onDragMove = function(a) {
      var b = null,
          c = null,
          d = null,
          e = this.difference(this._drag.pointer, this.pointer(a)),
          f = this.difference(this._drag.stage.start, e);
      this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
          e = this._drag.stage.current,
          f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
          return !1
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function(b, c) {
      var e = -1,
          f = 30,
          g = this.width(),
          h = this.coordinates();
      return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
          return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
      }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
  }, e.prototype.animate = function(b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
          transform: "translate3d(" + b + "px,0px,0px)",
          transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
      }) : c ? this.$stage.animate({
          left: b + "px"
      }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
          left: b + "px"
      })
  }, e.prototype.is = function(a) {
      return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function(a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (a = this.normalize(a), this._current !== a) {
          var b = this.trigger("change", {
              property: {
                  name: "position",
                  value: a
              }
          });
          b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
              property: {
                  name: "position",
                  value: this._current
              }
          })
      }
      return this._current
  }, e.prototype.invalidate = function(b) {
      return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
          return b
      })
  }, e.prototype.reset = function(a) {
      (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function(a, b) {
      var c = this._items.length,
          e = b ? 0 : this._clones.length;
      return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function(a) {
      return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function(a) {
      var b, c, d, e = this.settings,
          f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
          if (b = this._items.length)
              for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
          f = b + 1
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function(a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function(a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function(b) {
      var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function(a) {
              return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
          };
      return b === d ? a.map(this._clones, function(a, b) {
          return f(b)
      }) : a.map(this._clones, function(a, c) {
          return a === b ? f(c) : null
      })
  }, e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function(b) {
      var c, e = 1,
          f = b - 1;
      return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
          return this.coordinates(b)
      }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function(a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function(a, b) {
      var c = this.current(),
          d = null,
          e = a - this.relative(c),
          f = (e > 0) - (e < 0),
          g = this._items.length,
          h = this.minimum(),
          i = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
  }, e.prototype.next = function(a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function(a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function(a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function() {
      var d;
      return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function(b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
          return 1 === this.nodeType
      }).each(a.proxy(function(a, b) {
          b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(b, c) {
      var e = this.relative(this._current);
      c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
          content: b,
          position: c
      }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
          content: b,
          position: c
      })
  }, e.prototype.remove = function(a) {
      (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
          content: this._items[a],
          position: a
      }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: a
      }))
  }, e.prototype.preloadAutoWidthImages = function(b) {
      b.each(a.proxy(function(b, c) {
          this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
              c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
          }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
      }, this))
  }, e.prototype.destroy = function() {
      this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
          case "<":
              return d ? a > c : a < c;
          case ">":
              return d ? a < c : a > c;
          case ">=":
              return d ? a <= c : a >= c;
          case "<=":
              return d ? a >= c : a <= c
      }
  }, e.prototype.on = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function(a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function(b, c, d, f, g) {
      var h = {
              item: {
                  count: this._items.length,
                  index: this.current()
              }
          },
          i = a.camelCase(a.grep(["on", b, d], function(a) {
              return a
          }).join("-").toLowerCase()),
          j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
              relatedTarget: this
          }, h, c));
      return this._supress[b] || (a.each(this._plugins, function(a, b) {
          b.onTrigger && b.onTrigger(j)
      }), this.register({
          type: e.Type.Event,
          name: b
      }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function(b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
      }, this))
  }, e.prototype.leave = function(b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
          this._states.current[b]--
      }, this))
  }, e.prototype.register = function(b) {
      if (b.type === e.Type.Event) {
          if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
              var c = a.event.special[b.name]._default;
              a.event.special[b.name]._default = function(a) {
                  return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
              }, a.event.special[b.name].owl = !0
          }
      } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
          return a.inArray(c, this._states.tags[b.name]) === d
      }, this)))
  }, e.prototype.suppress = function(b) {
      a.each(b, a.proxy(function(a, b) {
          this._supress[b] = !0
      }, this))
  }, e.prototype.release = function(b) {
      a.each(b, a.proxy(function(a, b) {
          delete this._supress[b]
      }, this))
  }, e.prototype.pointer = function(a) {
      var c = {
          x: null,
          y: null
      };
      return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function(a) {
      return !isNaN(parseFloat(a))
  }, e.prototype.difference = function(a, b) {
      return {
          x: a.x - b.x,
          y: a.y - b.y
      }
  }, a.fn.owlCarousel = function(b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
          var d = a(this),
              f = d.data("owl.carousel");
          f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
              f.register({
                  type: e.Type.Event,
                  name: c
              }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                  a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
              }, f))
          })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
      })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._interval = null, this._visible = null, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
  }, e.prototype.watch = function() {
      this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function() {
      this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function() {
      var a, c;
      b.clearInterval(this._interval);
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
              if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                  var c = this._core.settings,
                      e = c.center && Math.ceil(c.items / 2) || c.items,
                      f = c.center && -1 * e || 0,
                      g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                      h = this._core.clones().length,
                      i = a.proxy(function(a, b) {
                          this.load(b)
                      }, this);
                  for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
              }
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
  }, e.prototype.load = function(c) {
      var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
          var e, f = a(d),
              g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
          this._core.trigger("load", {
              element: f,
              url: g
          }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
              f.css("opacity", 1), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
              this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
              f.css({
                  "background-image": 'url("' + g + '")',
                  opacity: "1"
              }), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this), e.src = g)
      }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(c) {
      this._core = c, this._previousHeight = null, this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && this.update()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
          }, this),
          "loaded.owl.lazy": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
      var d = this;
      a(b).on("load", function() {
          d._core.settings.autoHeight && d.update()
      }), a(b).resize(function() {
          d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
              d.update()
          }, 250))
      })
  };
  e.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
  }, e.prototype.update = function() {
      var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
      a.each(e, function(b, c) {
          f.push(a(c).height())
      }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._videos = {}, this._playing = null, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.register({
                  type: "state",
                  name: "playing",
                  tags: ["interacting"]
              })
          }, this),
          "resize.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" === a.property.name && this._playing && this.stop()
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              if (b.namespace) {
                  var c = a(b.content).find(".owl-video");
                  c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
              }
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
          this.play(a)
      }, this))
  };
  e.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
  }, e.prototype.fetch = function(a, b) {
      var c = function() {
              return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
          }(),
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
      if (!g) throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
      else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
      else {
          if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
          c = "vzaar"
      }
      d = d[6], this._videos[g] = {
          type: c,
          id: d,
          width: e,
          height: f
      }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function(b, c) {
      var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function(c) {
              e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
                  class: "owl-video-tn " + j,
                  srcType: c
              }) : a("<div/>", {
                  class: "owl-video-tn",
                  style: "opacity:1;background-image:url(" + c + ")"
              }), b.after(d), b.after(e)
          };
      if (b.wrap(a("<div/>", {
              class: "owl-video-wrapper",
              style: g
          })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
      "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
          type: "GET",
          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
              f = a[0].thumbnail_large, l(f)
          }
      }) : "vzaar" === c.type && a.ajax({
          type: "GET",
          url: "//vzaar.com/api/videos/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
              f = a.framegrab_url, l(f)
          }
      })
  }, e.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function(b) {
      var c, d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
      this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function() {
      var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function() {
      var a, b;
      this._core.$element.off("click.owl.video");
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
          "change.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
              a.namespace && (this.swapping = "translated" == a.type)
          }, this),
          "translate.owl.carousel": a.proxy(function(a) {
              a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
      }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
      animateOut: !1,
      animateIn: !1
  }, e.prototype.swap = function() {
      if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
          this.core.speed(0);
          var b, c = a.proxy(this.clear, this),
              d = this.core.$stage.children().eq(this.previous),
              e = this.core.$stage.children().eq(this.next),
              f = this.core.settings.animateIn,
              g = this.core.settings.animateOut;
          this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
              left: b + "px"
          }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
      }
  }, e.prototype.clear = function(b) {
      a(b.target).css({
          left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoplay && this.play()
          }, this),
          "play.owl.autoplay": a.proxy(function(a, b, c) {
              a.namespace && this.play(b, c)
          }, this),
          "stop.owl.autoplay": a.proxy(function(a) {
              a.namespace && this.stop()
          }, this),
          "mouseover.owl.autoplay": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
          }, this),
          "touchstart.owl.core": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this),
          "touchend.owl.core": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this.play()
          }, this)
      }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
  }, e.prototype._next = function(d) {
      this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
  }, e.prototype.read = function() {
      return (new Date).getTime() - this._time
  }, e.prototype.play = function(c, d) {
      var e;
      this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
  }, e.prototype.stop = function() {
      this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
  }, e.prototype.pause = function() {
      this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
  }, e.prototype.destroy = function() {
      var a, b;
      this.stop();
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(b) {
      this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
      }, this._handlers = {
          "prepared.owl.carousel": a.proxy(function(b) {
              b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
          }, this),
          "added.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
          }, this),
          "remove.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" == a.property.name && this.draw()
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
  }, e.prototype.initialize = function() {
      var b, c = this._core.settings;
      this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
          this.prev(c.navSpeed)
      }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
          this.next(c.navSpeed)
      }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
          var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
          b.preventDefault(), this.to(d, c.dotsSpeed)
      }, this));
      for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function() {
      var a, b, c, d, e;
      e = this._core.settings;
      for (a in this._handlers) this.$element.off(a, this._handlers[a]);
      for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
      for (d in this.overides) this._core[d] = this._overrides[d];
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function() {
      var a, b, c, d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
      if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
              if (b >= h || 0 === b) {
                  if (this._pages.push({
                          start: Math.min(f, a - d),
                          end: a - d + h - 1
                      }), Math.min(f, a - d) === f) break;
                  b = 0, ++c
              }
              b += this._core.mergers(this._core.relative(a))
          }
  }, e.prototype.draw = function() {
      var b, c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
      this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function(b) {
      var c = this._core.settings;
      b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
      }
  }, e.prototype.current = function() {
      var b = this._core.relative(this._core.current());
      return a.grep(this._pages, a.proxy(function(a, c) {
          return a.start <= b && a.end >= b
      }, this)).pop()
  }, e.prototype.getPosition = function(b) {
      var c, d, e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function(b, c, d) {
      var e;
      !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(c) {
      this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(c) {
              c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              if (b.namespace) {
                  var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                  if (!c) return;
                  this._hashes[c] = b.content
              }
          }, this),
          "changed.owl.carousel": a.proxy(function(c) {
              if (c.namespace && "position" === c.property.name) {
                  var d = this._core.items(this._core.relative(this._core.current())),
                      e = a.map(this._hashes, function(a, b) {
                          return a === d ? b : null
                      }).join();
                  if (!e || b.location.hash.slice(1) === e) return;
                  b.location.hash = e
              }
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
          var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
          f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
      }, this))
  };
  e.Defaults = {
      URLhashListener: !1
  }, e.prototype.destroy = function() {
      var c, d;
      a(b).off("hashchange.owl.navigation");
      for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
      for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  function e(b, c) {
      var e = !1,
          f = b.charAt(0).toUpperCase() + b.slice(1);
      return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
          if (g[b] !== d) return e = !c || b, !1
      }), e
  }

  function f(a) {
      return e(a, !0)
  }
  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
          transition: {
              end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend"
              }
          },
          animation: {
              end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend"
              }
          }
      },
      j = {
          csstransforms: function() {
              return !!e("transform")
          },
          csstransforms3d: function() {
              return !!e("perspective")
          },
          csstransitions: function() {
              return !!e("transition")
          },
          cssanimations: function() {
              return !!e("animation")
          }
      };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);;
! function(i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
  "use strict";
  var e = window.Slick || {};
  (e = function() {
      var e = 0;
      return function(t, o) {
          var s, n = this;
          n.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: i(t),
              appendDots: i(t),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(e, t) {
                  return i('<button type="button" />').text(t + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
          }, n.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
          }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
      }
  }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
      }).find("a, input, button, select").attr({
          tabindex: "0"
      })
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
      var s = this;
      if ("boolean" == typeof t) o = t, t = null;
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
          i(t).attr("data-slick-index", e)
      }), s.$slidesCache = s.$slides, s.reinit()
  }, e.prototype.animateHeight = function() {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
          var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.animate({
              height: e
          }, i.options.speed)
      }
  }, e.prototype.animateSlide = function(e, t) {
      var o = {},
          s = this;
      s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
          left: e
      }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
          top: e
      }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
          animStart: s.currentLeft
      }).animate({
          animStart: e
      }, {
          duration: s.options.speed,
          easing: s.options.easing,
          step: function(i) {
              i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
          },
          complete: function() {
              t && t.call()
          }
      })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
          s.disableTransition(), t.call()
      }, s.options.speed))
  }, e.prototype.getNavTarget = function() {
      var e = this,
          t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t
  }, e.prototype.asNavFor = function(e) {
      var t = this.getNavTarget();
      null !== t && "object" == typeof t && t.each(function() {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0)
      })
  }, e.prototype.applyTransition = function(i) {
      var e = this,
          t = {};
      !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.autoPlay = function() {
      var i = this;
      i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
  }, e.prototype.autoPlayClear = function() {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer)
  }, e.prototype.autoPlayIterator = function() {
      var i = this,
          e = i.currentSlide + i.options.slidesToScroll;
      i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
  }, e.prototype.buildArrows = function() {
      var e = this;
      !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
      }))
  }, e.prototype.buildDots = function() {
      var e, t, o = this;
      if (!0 === o.options.dots) {
          for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
          o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
      }
  }, e.prototype.buildOut = function() {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
          i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
      }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
  }, e.prototype.buildRows = function() {
      var i, e, t, o, s, n, r, l = this;
      if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
          for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
              var d = document.createElement("div");
              for (e = 0; e < l.options.rows; e++) {
                  var a = document.createElement("div");
                  for (t = 0; t < l.options.slidesPerRow; t++) {
                      var c = i * r + (e * l.options.slidesPerRow + t);
                      n.get(c) && a.appendChild(n.get(c))
                  }
                  d.appendChild(a)
              }
              o.appendChild(d)
          }
          l.$slider.empty().append(o), l.$slider.children().children().children().css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block"
          })
      }
  }, e.prototype.checkResponsive = function(e, t) {
      var o, s, n, r = this,
          l = !1,
          d = r.$slider.width(),
          a = window.innerWidth || i(window).width();
      if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          s = null;
          for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
          null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
      }
  }, e.prototype.changeSlide = function(e, t) {
      var o, s, n, r = this,
          l = i(e.currentTarget);
      switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
          case "previous":
              s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
              break;
          case "next":
              s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
              break;
          case "index":
              var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
              r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
              break;
          default:
              return
      }
  }, e.prototype.checkNavigable = function(i) {
      var e, t;
      if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
      else
          for (var o in e) {
              if (i < e[o]) {
                  i = t;
                  break
              }
              t = e[o]
          }
      return i
  }, e.prototype.cleanUpEvents = function() {
      var e = this;
      e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.cleanUpSlideEvents = function() {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.cleanUpRows = function() {
      var i, e = this;
      e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
  }, e.prototype.clickHandler = function(i) {
      !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
  }, e.prototype.destroy = function(e) {
      var t = this;
      t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
          i(this).attr("style", i(this).data("originalStyling"))
      }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
  }, e.prototype.disableTransition = function(i) {
      var e = this,
          t = {};
      t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
  }, e.prototype.fadeSlide = function(i, e) {
      var t = this;
      !1 === t.cssTransitions ? (t.$slides.eq(i).css({
          zIndex: t.options.zIndex
      }), t.$slides.eq(i).animate({
          opacity: 1
      }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
          opacity: 1,
          zIndex: t.options.zIndex
      }), e && setTimeout(function() {
          t.disableTransition(i), e.call()
      }, t.options.speed))
  }, e.prototype.fadeSlideOut = function(i) {
      var e = this;
      !1 === e.cssTransitions ? e.$slides.eq(i).animate({
          opacity: 0,
          zIndex: e.options.zIndex - 2
      }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
          opacity: 0,
          zIndex: e.options.zIndex - 2
      }))
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
      var e = this;
      null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
  }, e.prototype.focusHandler = function() {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function() {
              e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
          }, 0)
      })
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
      return this.currentSlide
  }, e.prototype.getDotCount = function() {
      var i = this,
          e = 0,
          t = 0,
          o = 0;
      if (!0 === i.options.infinite)
          if (i.slideCount <= i.options.slidesToShow) ++o;
          else
              for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
          for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return o - 1
  }, e.prototype.getLeft = function(i) {
      var e, t, o, s, n = this,
          r = 0;
      return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
  }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
      return this.options[i]
  }, e.prototype.getNavigableIndexes = function() {
      var i, e = this,
          t = 0,
          o = 0,
          s = [];
      for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      return s
  }, e.prototype.getSlick = function() {
      return this
  }, e.prototype.getSlideCount = function() {
      var e, t, o = this;
      return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
          if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
      }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
  }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
      this.changeSlide({
          data: {
              message: "index",
              index: parseInt(i)
          }
      }, e)
  }, e.prototype.init = function(e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
  }, e.prototype.initADA = function() {
      var e = this,
          t = Math.ceil(e.slideCount / e.options.slidesToShow),
          o = e.getNavigableIndexes().filter(function(i) {
              return i >= 0 && i < e.slideCount
          });
      e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
      }).find("a, input, button, select").attr({
          tabindex: "-1"
      }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
          var s = o.indexOf(t);
          i(this).attr({
              role: "tabpanel",
              id: "slick-slide" + e.instanceUid + t,
              tabindex: -1
          }), -1 !== s && i(this).attr({
              "aria-describedby": "slick-slide-control" + e.instanceUid + s
          })
      }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
          var n = o[s];
          i(this).attr({
              role: "presentation"
          }), i(this).find("button").first().attr({
              role: "tab",
              id: "slick-slide-control" + e.instanceUid + s,
              "aria-controls": "slick-slide" + e.instanceUid + n,
              "aria-label": s + 1 + " of " + t,
              "aria-selected": null,
              tabindex: "-1"
          })
      }).eq(e.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
      }).end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA()
  }, e.prototype.initArrowEvents = function() {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
      }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
      }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
  }, e.prototype.initDotEvents = function() {
      var e = this;
      !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
          message: "index"
      }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
  }, e.prototype.initSlideEvents = function() {
      var e = this;
      e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
  }, e.prototype.initializeEvents = function() {
      var e = this;
      e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
      }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
      }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
          action: "end"
      }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
      }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
  }, e.prototype.initUI = function() {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
  }, e.prototype.keyHandler = function(i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
          data: {
              message: !0 === e.options.rtl ? "next" : "previous"
          }
      }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
          data: {
              message: !0 === e.options.rtl ? "previous" : "next"
          }
      }))
  }, e.prototype.lazyLoad = function() {
      function e(e) {
          i("img[data-lazy]", e).each(function() {
              var e = i(this),
                  t = i(this).attr("data-lazy"),
                  o = i(this).attr("data-srcset"),
                  s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                  r = document.createElement("img");
              r.onload = function() {
                  e.animate({
                      opacity: 0
                  }, 100, function() {
                      o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                          opacity: 1
                      }, 200, function() {
                          e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                      }), n.$slider.trigger("lazyLoaded", [n, e, t])
                  })
              }, r.onerror = function() {
                  e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
              }, r.src = t
          })
      }
      var t, o, s, n = this;
      if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
          for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
      e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
  }, e.prototype.loadSlider = function() {
      var i = this;
      i.setPosition(), i.$slideTrack.css({
          opacity: 1
      }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
  }, e.prototype.next = e.prototype.slickNext = function() {
      this.changeSlide({
          data: {
              message: "next"
          }
      })
  }, e.prototype.orientationChange = function() {
      var i = this;
      i.checkResponsive(), i.setPosition()
  }, e.prototype.pause = e.prototype.slickPause = function() {
      var i = this;
      i.autoPlayClear(), i.paused = !0
  }, e.prototype.play = e.prototype.slickPlay = function() {
      var i = this;
      i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
  }, e.prototype.postSlide = function(e) {
      var t = this;
      t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
  }, e.prototype.prev = e.prototype.slickPrev = function() {
      this.changeSlide({
          data: {
              message: "previous"
          }
      })
  }, e.prototype.preventDefault = function(i) {
      i.preventDefault()
  }, e.prototype.progressiveLazyLoad = function(e) {
      e = e || 1;
      var t, o, s, n, r, l = this,
          d = i("img[data-lazy]", l.$slider);
      d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
          s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
      }, r.onerror = function() {
          e < 3 ? setTimeout(function() {
              l.progressiveLazyLoad(e + 1)
          }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
      }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
  }, e.prototype.refresh = function(e) {
      var t, o, s = this;
      o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
          currentSlide: t
      }), s.init(), e || s.changeSlide({
          data: {
              message: "index",
              index: t
          }
      }, !1)
  }, e.prototype.registerBreakpoints = function() {
      var e, t, o, s = this,
          n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
          s.respondTo = s.options.respondTo || "window";
          for (e in n)
              if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                  for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                  s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
              }
          s.breakpoints.sort(function(i, e) {
              return s.options.mobileFirst ? i - e : e - i
          })
      }
  }, e.prototype.reinit = function() {
      var e = this;
      e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
  }, e.prototype.resize = function() {
      var e = this;
      i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
          e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
      }, 50))
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
      var o = this;
      if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
      o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
  }, e.prototype.setCSS = function(i) {
      var e, t, o = this,
          s = {};
      !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
  }, e.prototype.setDimensions = function() {
      var i = this;
      !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
          padding: "0px " + i.options.centerPadding
      }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
          padding: i.options.centerPadding + " 0px"
      })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
  }, e.prototype.setFade = function() {
      var e, t = this;
      t.$slides.each(function(o, s) {
          e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
              position: "relative",
              right: e,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0
          }) : i(s).css({
              position: "relative",
              left: e,
              top: 0,
              zIndex: t.options.zIndex - 2,
              opacity: 0
          })
      }), t.$slides.eq(t.currentSlide).css({
          zIndex: t.options.zIndex - 1,
          opacity: 1
      })
  }, e.prototype.setHeight = function() {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
          var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.css("height", e)
      }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
      var e, t, o, s, n, r = this,
          l = !1;
      if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
      else if ("multiple" === n) i.each(o, function(i, e) {
          r.options[i] = e
      });
      else if ("responsive" === n)
          for (t in s)
              if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
              else {
                  for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                  r.options.responsive.push(s[t])
              }
      l && (r.unload(), r.reinit())
  }, e.prototype.setPosition = function() {
      var i = this;
      i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
  }, e.prototype.setProps = function() {
      var i = this,
          e = document.body.style;
      i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
  }, e.prototype.setSlideClasses = function(i) {
      var e, t, o, s, n = this;
      if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
          var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
          e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
      } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
  }, e.prototype.setupInfinite = function() {
      var e, t, o, s = this;
      if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
          for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
          for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
          s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              i(this).attr("id", "")
          })
      }
  }, e.prototype.interrupt = function(i) {
      var e = this;
      i || e.autoPlay(), e.interrupted = i
  }, e.prototype.selectHandler = function(e) {
      var t = this,
          o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
          s = parseInt(o.attr("data-slick-index"));
      s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
  }, e.prototype.slideHandler = function(i, e, t) {
      var o, s, n, r, l, d = null,
          a = this;
      if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
          if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
              a.postSlide(o)
          }) : a.postSlide(o));
          else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
          a.postSlide(o)
      }) : a.postSlide(o));
      else {
          if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
              a.postSlide(s)
          })) : a.postSlide(s), void a.animateHeight();
          !0 !== t ? a.animateSlide(d, function() {
              a.postSlide(s)
          }) : a.postSlide(s)
      }
  }, e.prototype.startLoad = function() {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
  }, e.prototype.swipeDirection = function() {
      var i, e, t, o, s = this;
      return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
  }, e.prototype.swipeEnd = function(i) {
      var e, t, o = this;
      if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
      if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
      if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
          switch (t = o.swipeDirection()) {
              case "left":
              case "down":
                  e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                  break;
              case "right":
              case "up":
                  e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
          }
          "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
  }, e.prototype.swipeHandler = function(i) {
      var e = this;
      if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
          case "start":
              e.swipeStart(i);
              break;
          case "move":
              e.swipeMove(i);
              break;
          case "end":
              e.swipeEnd(i)
      }
  }, e.prototype.swipeMove = function(i) {
      var e, t, o, s, n, r, l = this;
      return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
  }, e.prototype.swipeStart = function(i) {
      var e, t = this;
      if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
      void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
      var i = this;
      null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
  }, e.prototype.unload = function() {
      var e = this;
      i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, e.prototype.unslick = function(i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy()
  }, e.prototype.updateArrows = function() {
      var i = this;
      Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, e.prototype.updateDots = function() {
      var i = this;
      null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
  }, e.prototype.visibility = function() {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
  }, i.fn.slick = function() {
      var i, t, o = this,
          s = arguments[0],
          n = Array.prototype.slice.call(arguments, 1),
          r = o.length;
      for (i = 0; i < r; i++)
          if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
      return o
  }
});
/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";

  function t(t, s) {
      this.element = t, this.options = e.extend({}, l, s);
      var i = this.options.locale;
      void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
  }

  function s(t) {
      if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
          var s = e("div.jq-selectbox.opened"),
              l = e("div.jq-selectbox__search input", s),
              o = e("div.jq-selectbox__dropdown", s);
          s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
      }
  }
  var i = "styler",
      l = {
          idSuffix: "-styler",
          filePlaceholder: "Файл не выбран",
          fileBrowse: "Обзор...",
          fileNumber: "Выбрано файлов: %s",
          selectPlaceholder: "Выберите...",
          selectSearch: !1,
          selectSearchLimit: 10,
          selectSearchNotFound: "Совпадений не найдено",
          selectSearchPlaceholder: "Поиск...",
          selectVisibleOptions: 0,
          selectSmartPositioning: !0,
          locale: "ru",
          locales: {
              en: {
                  filePlaceholder: "No file selected",
                  fileBrowse: "Browse...",
                  fileNumber: "Selected files: %s",
                  selectPlaceholder: "Select...",
                  selectSearchNotFound: "No matches found",
                  selectSearchPlaceholder: "Search..."
              }
          },
          onSelectOpened: function() {},
          onSelectClosed: function() {},
          onFormStyled: function() {}
      };
  t.prototype = {
      init: function() {
          function t() {
              void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
          }
          var i = e(this.element),
              l = this.options,
              o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
              a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
          if (i.is(":checkbox")) {
              var d = function() {
                  var s = new t,
                      l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                          id: s.id,
                          title: s.title
                      }).addClass(s.classes).data(s.data);
                  i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function(e) {
                      e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
                  }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                      e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                  }), i.on("change.styler", function() {
                      i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
                  }).on("keydown.styler", function(e) {
                      32 == e.which && l.click()
                  }).on("focus.styler", function() {
                      l.is(".disabled") || l.addClass("focused")
                  }).on("blur.styler", function() {
                      l.removeClass("focused")
                  })
              };
              d(), i.on("refresh", function() {
                  i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
              })
          } else if (i.is(":radio")) {
              var r = function() {
                  var s = new t,
                      l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                          id: s.id,
                          title: s.title
                      }).addClass(s.classes).data(s.data);
                  i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function() {
                      var t = this;
                      return t.first().parents().filter(function() {
                          return e(this).find(t).length === t.length
                      })
                  }, e.fn.commonParent = function() {
                      return e(this).commonParents().first()
                  }, l.click(function(t) {
                      if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
                          var s = e('input[name="' + i.attr("name") + '"]');
                          s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
                      }
                  }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function(t) {
                      e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                  }), i.on("change.styler", function() {
                      i.parent().addClass("checked")
                  }).on("focus.styler", function() {
                      l.is(".disabled") || l.addClass("focused")
                  }).on("blur.styler", function() {
                      l.removeClass("focused")
                  })
              };
              r(), i.on("refresh", function() {
                  i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
              })
          } else if (i.is(":file")) {
              var c = function() {
                  var s = new t,
                      o = i.data("placeholder");
                  void 0 === o && (o = l.filePlaceholder);
                  var a = i.data("browse");
                  void 0 !== a && "" !== a || (a = l.fileBrowse);
                  var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
                      id: s.id,
                      title: s.title
                  }).addClass(s.classes).data(s.data);
                  i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
                  var r = i.val(),
                      c = e("div.jq-file__name", d);
                  r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function() {
                      var e = i.val();
                      if (i.is("[multiple]")) {
                          e = "";
                          var t = i[0].files.length;
                          if (t > 0) {
                              var s = i.data("number");
                              void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s
                          }
                      }
                      c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed")
                  }).on("focus.styler", function() {
                      d.addClass("focused")
                  }).on("blur.styler", function() {
                      d.removeClass("focused")
                  }).on("click.styler", function() {
                      d.removeClass("focused")
                  })
              };
              c(), i.on("refresh", function() {
                  i.off(".styler").parent().before(i).remove(), c()
              })
          } else if (i.is('input[type="number"]')) {
              var n = function() {
                  var s = new t,
                      l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                          id: s.id,
                          title: s.title
                      }).addClass(s.classes).data(s.data);
                  i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
                  var o, a, d, r = null,
                      c = null;
                  void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
                  var n = function(t) {
                      var s, l = i.val();
                      e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
                      var r = (d.toString().split(".")[1] || []).length;
                      if (r > 0) {
                          for (var c = "1"; c.length <= r;) c += "0";
                          s = Math.round(s * c) / c
                      }
                      e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s)
                  };
                  l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function() {
                      var t = e(this);
                      n(t), r = setTimeout(function() {
                          c = setInterval(function() {
                              n(t)
                          }, 40)
                      }, 350)
                  }).on("mouseup mouseout", "div.jq-number__spin", function() {
                      clearTimeout(r), clearInterval(c)
                  }).on("mouseup", "div.jq-number__spin", function() {
                      i.change().trigger("input")
                  }), i.on("focus.styler", function() {
                      l.addClass("focused")
                  }).on("blur.styler", function() {
                      l.removeClass("focused")
                  }))
              };
              n(), i.on("refresh", function() {
                  i.off(".styler").closest(".jq-number").before(i).remove(), n()
              })
          } else if (i.is("select")) {
              var f = function() {
                  function d(e) {
                      var t = e.prop("scrollHeight") - e.outerHeight(),
                          s = null,
                          i = null;
                      e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(l) {
                          s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault())
                      })
                  }

                  function r() {
                      for (var e = 0; e < c.length; e++) {
                          var t = c.eq(e),
                              s = "",
                              i = "",
                              o = "",
                              a = "",
                              d = "",
                              r = "",
                              f = "",
                              h = "",
                              u = "";
                          t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
                          var p = t.data();
                          for (var v in p) "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
                          i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s
                      }
                  }
                  var c = e("option", i),
                      n = "";
                  if (i.is("[multiple]")) {
                      if (a || o) return;
                      ! function() {
                          var s = new t,
                              l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                                  id: s.id,
                                  title: s.title
                              }).addClass(s.classes).data(s.data);
                          i.after(l), r(), l.append("<ul>" + n + "</ul>");
                          var o = e("ul", l),
                              a = e("li", l),
                              f = i.attr("size"),
                              h = o.outerHeight(),
                              u = a.outerHeight();
                          void 0 !== f && f > 0 ? o.css({
                              height: u * f
                          }) : o.css({
                              height: 4 * u
                          }), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function() {
                              e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
                          })) : (a.filter(":not(.disabled):not(.optgroup)").click(function(t) {
                              i.focus();
                              var s = e(this);
                              if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                                  var l = !1,
                                      o = !1;
                                  s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function() {
                                      e(this).is(".first") && (l = !0)
                                  }), s.nextAll().each(function() {
                                      e(this).is(".first") && (o = !0)
                                  }), l && s.prevAll().each(function() {
                                      if (e(this).is(".selected")) return !1;
                                      e(this).not(".disabled, .optgroup").addClass("selected")
                                  }), o && s.nextAll().each(function() {
                                      if (e(this).is(".selected")) return !1;
                                      e(this).not(".disabled, .optgroup").addClass("selected")
                                  }), 1 == a.filter(".selected").length && s.addClass("first")
                              }
                              c.prop("selected", !1), a.filter(".selected").each(function() {
                                  var t = e(this),
                                      s = t.index();
                                  t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0)
                              }), i.change()
                          }), c.each(function(t) {
                              e(this).data("optionIndex", t)
                          }), i.on("change.styler", function() {
                              a.removeClass("selected");
                              var t = [];
                              c.filter(":selected").each(function() {
                                  t.push(e(this).data("optionIndex"))
                              }), a.not(".optgroup").filter(function(s) {
                                  return e.inArray(s, t) > -1
                              }).addClass("selected")
                          }).on("focus.styler", function() {
                              l.addClass("focused")
                          }).on("blur.styler", function() {
                              l.removeClass("focused")
                          }), h > l.height() && i.on("keydown.styler", function(e) {
                              38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
                          }))
                      }()
                  } else ! function() {
                      var a = new t,
                          f = "",
                          h = i.data("placeholder"),
                          u = i.data("search"),
                          p = i.data("search-limit"),
                          v = i.data("search-not-found"),
                          m = i.data("search-placeholder"),
                          g = i.data("smart-positioning");
                      void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
                      var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
                          id: a.id,
                          title: a.title
                      }).addClass(a.classes).data(a.data);
                      i.after(b).prependTo(b);
                      var C = b.css("z-index");
                      C = C > 0 ? C : 1;
                      var x = e("div.jq-selectbox__select", b),
                          y = e("div.jq-selectbox__select-text", b),
                          w = c.filter(":selected");
                      r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                      var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
                      b.append(q);
                      var _ = e("ul", q),
                          j = e("li", q),
                          k = e("input", q),
                          S = e("div.jq-selectbox__not-found", q).hide();
                      j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
                      var T = 0,
                          N = 0;
                      if (j.css({
                              display: "inline-block"
                          }), j.each(function() {
                              var t = e(this);
                              t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
                          }), j.css({
                              display: ""
                          }), y.is(".placeholder") && y.width() > T) y.width(y.width());
                      else {
                          var P = b.clone().appendTo("body").width("auto"),
                              H = P.outerWidth();
                          P.remove(), H == b.outerWidth() && y.width(N)
                      }
                      T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();
                      var A = b.outerHeight(!0),
                          D = k.parent().outerHeight(!0) || 0,
                          I = _.css("max-height"),
                          K = j.filter(".selected");
                      if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
                          var O = j.outerHeight();
                          !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O)
                      }
                      var M = q.css("top");
                      if ("auto" == q.css("left") && q.css({
                              left: 0
                          }), "auto" == q.css("top") && (q.css({
                              top: A
                          }), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
                      x.click(function() {
                          if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                              var t = e(window),
                                  s = j.data("li-height"),
                                  a = b.offset().top,
                                  r = t.height() - A - (a - t.scrollTop()),
                                  n = i.data("visible-options");
                              void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                              var f = 5 * s,
                                  h = s * n;
                              n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");
                              var u = function() {
                                  q.height("auto").css({
                                      bottom: "auto",
                                      top: M
                                  });
                                  var e = function() {
                                      _.css("max-height", Math.floor((r - 20 - D) / s) * s)
                                  };
                                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e()
                              };
                              !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function() {
                                  q.height("auto").css({
                                      top: "auto",
                                      bottom: M
                                  });
                                  var e = function() {
                                      _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s)
                                  };
                                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                              }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                                  bottom: "auto",
                                  top: M
                              }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                                  left: "auto",
                                  right: 0
                              }), e("div.jqselect").css({
                                  zIndex: C - 1
                              }).removeClass("opened"), b.css({
                                  zIndex: C
                              }), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function() {
                                  var t = e(this).val();
                                  j.each(function() {
                                      e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                                  }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                              })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
                          }
                      }), j.hover(function() {
                          e(this).siblings().removeClass("selected")
                      });
                      var W = j.filter(".selected").text();
                      j.filter(":not(.disabled):not(.optgroup)").click(function() {
                          i.focus();
                          var t = e(this),
                              s = t.text();
                          if (!t.is(".selected")) {
                              var o = t.index();
                              o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change()
                          }
                          q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b)
                      }), q.mouseout(function() {
                          e("li.sel", q).addClass("selected")
                      }), i.on("change.styler", function() {
                          y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed")
                      }).on("focus.styler", function() {
                          b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                      }).on("blur.styler", function() {
                          b.removeClass("focused")
                      }).on("keydown.styler keyup.styler", function(e) {
                          var t = j.data("li-height");
                          "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b))
                      }).on("keydown.styler", function(e) {
                          32 == e.which && (e.preventDefault(), x.click())
                      }), s.registered || (e(document).on("click", s), s.registered = !0)
                  }()
              };
              f(), i.on("refresh", function() {
                  i.off(".styler").parent().before(i).remove(), f()
              })
          } else i.is(":reset") && i.on("click", function() {
              setTimeout(function() {
                  i.closest("form").find("input, select").trigger("refresh")
              }, 1)
          })
      },
      destroy: function() {
          var t = e(this.element);
          t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
      }
  }, e.fn[i] = function(s) {
      var l = arguments;
      if (void 0 === s || "object" == typeof s) return this.each(function() {
          e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
      }).promise().done(function() {
          var t = e(this[0]).data("_" + i);
          t && t.options.onFormStyled.call()
      }), this;
      if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
          var o;
          return this.each(function() {
              var a = e.data(this, "_" + i);
              a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
          }), void 0 !== o ? o : this
      }
  }, s.registered = !1
});
! function(t, e, i) {
  ! function() {
      var s, a, n, h = "2.2.3",
          o = "datepicker",
          r = ".datepicker-here",
          c = !1,
          d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
          l = {
              classes: "",
              inline: !1,
              language: "ru",
              startDate: new Date,
              firstDay: "",
              weekends: [6, 0],
              dateFormat: "",
              altField: "",
              altFieldDateFormat: "@",
              toggleSelected: !0,
              keyboardNav: !0,
              position: "bottom left",
              offset: 12,
              view: "days",
              minView: "days",
              showOtherMonths: !0,
              selectOtherMonths: !0,
              moveToOtherMonthsOnSelect: !0,
              showOtherYears: !0,
              selectOtherYears: !0,
              moveToOtherYearsOnSelect: !0,
              minDate: "",
              maxDate: "",
              disableNavWhenOutOfRange: !0,
              multipleDates: !1,
              multipleDatesSeparator: ",",
              range: !1,
              todayButton: !1,
              clearButton: !1,
              showEvent: "focus",
              autoClose: !1,
              monthsField: "monthsShort",
              prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
              nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
              navTitles: {
                  days: "MM, <i>yyyy</i>",
                  months: "yyyy",
                  years: "yyyy1 - yyyy2"
              },
              timepicker: !1,
              onlyTimepicker: !1,
              dateTimeSeparator: " ",
              timeFormat: "",
              minHours: 0,
              maxHours: 24,
              minMinutes: 0,
              maxMinutes: 59,
              hoursStep: 1,
              minutesStep: 1,
              onSelect: "",
              onShow: "",
              onHide: "",
              onChangeMonth: "",
              onChangeYear: "",
              onChangeDecade: "",
              onChangeView: "",
              onRenderCell: ""
          },
          u = {
              ctrlRight: [17, 39],
              ctrlUp: [17, 38],
              ctrlLeft: [17, 37],
              ctrlDown: [17, 40],
              shiftRight: [16, 39],
              shiftUp: [16, 38],
              shiftLeft: [16, 37],
              shiftDown: [16, 40],
              altUp: [18, 38],
              altRight: [18, 39],
              altLeft: [18, 37],
              altDown: [18, 40],
              ctrlShiftUp: [16, 17, 38]
          },
          m = function(t, a) {
              this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
          };
      n = m, n.prototype = {
          VERSION: h,
          viewIndexes: ["days", "months", "years"],
          init: function() {
              c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
          },
          _createShortCuts: function() {
              this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
          },
          _bindEvents: function() {
              this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
          },
          _bindKeyboardEvents: function() {
              this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
          },
          _bindTimepickerEvents: function() {
              this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
          },
          isWeekend: function(t) {
              return -1 !== this.opts.weekends.indexOf(t)
          },
          _defineLocale: function(t) {
              "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
              var i = this._getWordBoundaryRegExp;
              (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
          },
          _buildDatepickersContainer: function() {
              c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container")
          },
          _buildBaseHtml: function() {
              var t, i = e('<div class="datepicker-inline">');
              t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker)
          },
          _triggerOnChange: function() {
              if (!this.selectedDates.length) {
                  if ("" === this._prevOnSelectValue) return;
                  return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
              }
              var t, e = this.selectedDates,
                  i = n.getParsedDate(e[0]),
                  s = this,
                  a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
              t = e.map(function(t) {
                  return s.formatDate(s.loc.dateFormat, t)
              }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function(t) {
                  var e = n.getParsedDate(t);
                  return new Date(e.year, e.month, e.date, e.hours, e.minutes)
              })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this)
          },
          next: function() {
              var t = this.parsedDate,
                  e = this.opts;
              switch (this.view) {
                  case "days":
                      this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                      break;
                  case "months":
                      this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                      break;
                  case "years":
                      this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
              }
          },
          prev: function() {
              var t = this.parsedDate,
                  e = this.opts;
              switch (this.view) {
                  case "days":
                      this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                      break;
                  case "months":
                      this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                      break;
                  case "years":
                      this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
              }
          },
          formatDate: function(t, e) {
              e = e || this.date;
              var i, s = t,
                  a = this._getWordBoundaryRegExp,
                  h = this.loc,
                  o = n.getLeadingZeroNum,
                  r = n.getDecade(e),
                  c = n.getParsedDate(e),
                  d = c.fullHours,
                  l = c.hours,
                  u = t.match(a("aa")) || t.match(a("AA")),
                  m = "am",
                  p = this._replacer;
              switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
                  case /@/.test(s):
                      s = s.replace(/@/, e.getTime());
                  case /aa/.test(s):
                      s = p(s, a("aa"), m);
                  case /AA/.test(s):
                      s = p(s, a("AA"), m.toUpperCase());
                  case /dd/.test(s):
                      s = p(s, a("dd"), c.fullDate);
                  case /d/.test(s):
                      s = p(s, a("d"), c.date);
                  case /DD/.test(s):
                      s = p(s, a("DD"), h.days[c.day]);
                  case /D/.test(s):
                      s = p(s, a("D"), h.daysShort[c.day]);
                  case /mm/.test(s):
                      s = p(s, a("mm"), c.fullMonth);
                  case /m/.test(s):
                      s = p(s, a("m"), c.month + 1);
                  case /MM/.test(s):
                      s = p(s, a("MM"), this.loc.months[c.month]);
                  case /M/.test(s):
                      s = p(s, a("M"), h.monthsShort[c.month]);
                  case /ii/.test(s):
                      s = p(s, a("ii"), c.fullMinutes);
                  case /i/.test(s):
                      s = p(s, a("i"), c.minutes);
                  case /hh/.test(s):
                      s = p(s, a("hh"), d);
                  case /h/.test(s):
                      s = p(s, a("h"), l);
                  case /yyyy/.test(s):
                      s = p(s, a("yyyy"), c.year);
                  case /yyyy1/.test(s):
                      s = p(s, a("yyyy1"), r[0]);
                  case /yyyy2/.test(s):
                      s = p(s, a("yyyy2"), r[1]);
                  case /yy/.test(s):
                      s = p(s, a("yy"), c.year.toString().slice(-2))
              }
              return s
          },
          _replacer: function(t, e, i) {
              return t.replace(e, function(t, e, s, a) {
                  return e + i + a
              })
          },
          _getWordBoundaryRegExp: function(t) {
              var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
              return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g")
          },
          selectDate: function(t) {
              var e = this,
                  i = e.opts,
                  s = e.parsedDate,
                  a = e.selectedDates,
                  h = a.length,
                  o = "";
              if (Array.isArray(t)) return void t.forEach(function(t) {
                  e.selectDate(t)
              });
              if (t instanceof Date) {
                  if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                      if (h === i.multipleDates) return;
                      e._isSelected(t) || e.selectedDates.push(t)
                  } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                  e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
              }
          },
          removeDate: function(t) {
              var e = this.selectedDates,
                  i = this;
              if (t instanceof Date) return e.some(function(s, a) {
                  return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0
              })
          },
          today: function() {
              this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
          },
          clear: function() {
              this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
          },
          update: function(t, i) {
              var s = arguments.length,
                  a = this.lastSelectedDate;
              return 2 == s ? this.opts[t] = i : 1 == s && "object" == typeof t && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
          },
          _syncWithMinMaxDates: function() {
              var t = this.date.getTime();
              this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
          },
          _isSelected: function(t, e) {
              var i = !1;
              return this.selectedDates.some(function(s) {
                  return n.isSame(s, t, e) ? (i = s, !0) : void 0
              }), i
          },
          _setInputValue: function() {
              var t, e = this,
                  i = e.opts,
                  s = e.loc.dateFormat,
                  a = i.altFieldDateFormat,
                  n = e.selectedDates.map(function(t) {
                      return e.formatDate(s, t)
                  });
              i.altField && e.$altField.length && (t = this.selectedDates.map(function(t) {
                  return e.formatDate(a, t)
              }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
          },
          _isInRange: function(t, e) {
              var i = t.getTime(),
                  s = n.getParsedDate(t),
                  a = n.getParsedDate(this.minDate),
                  h = n.getParsedDate(this.maxDate),
                  o = new Date(s.year, s.month, a.date).getTime(),
                  r = new Date(s.year, s.month, h.date).getTime(),
                  c = {
                      day: i >= this.minTime && i <= this.maxTime,
                      month: o >= this.minTime && r <= this.maxTime,
                      year: s.year >= a.year && s.year <= h.year
                  };
              return e ? c[e] : c.day
          },
          _getDimensions: function(t) {
              var e = t.offset();
              return {
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  left: e.left,
                  top: e.top
              }
          },
          _getDateFromCell: function(t) {
              var e = this.parsedDate,
                  s = t.data("year") || e.year,
                  a = t.data("month") == i ? e.month : t.data("month"),
                  n = t.data("date") || 1;
              return new Date(s, a, n)
          },
          _setPositionClasses: function(t) {
              t = t.split(" ");
              var e = t[0],
                  i = t[1],
                  s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
              this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s)
          },
          setPosition: function(t) {
              t = t || this.opts.position;
              var e, i, s = this._getDimensions(this.$el),
                  a = this._getDimensions(this.$datepicker),
                  n = t.split(" "),
                  h = this.opts.offset,
                  o = n[0],
                  r = n[1];
              switch (o) {
                  case "top":
                      e = s.top - a.height - h;
                      break;
                  case "right":
                      i = s.left + s.width + h;
                      break;
                  case "bottom":
                      e = s.top + s.height + h;
                      break;
                  case "left":
                      i = s.left - a.width - h
              }
              switch (r) {
                  case "top":
                      e = s.top;
                      break;
                  case "right":
                      i = s.left + s.width - a.width;
                      break;
                  case "bottom":
                      e = s.top + s.height - a.height;
                      break;
                  case "left":
                      i = s.left;
                      break;
                  case "center":
                      /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
              }
              this.$datepicker.css({
                  left: i,
                  top: e
              })
          },
          show: function() {
              var t = this.opts.onShow;
              this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
          },
          hide: function() {
              var t = this.opts.onHide;
              this.$datepicker.removeClass("active").css({
                  left: "-100000px"
              }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
          },
          down: function(t) {
              this._changeView(t, "down")
          },
          up: function(t) {
              this._changeView(t, "up")
          },
          _bindVisionEvents: function(t) {
              this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0))
          },
          _changeView: function(t, e) {
              t = t || this.focused || this.date;
              var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
              i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
          },
          _handleHotKey: function(t) {
              var e, i, s, a = n.getParsedDate(this._getFocusedDate()),
                  h = this.opts,
                  o = !1,
                  r = !1,
                  c = !1,
                  d = a.year,
                  l = a.month,
                  u = a.date;
              switch (t) {
                  case "ctrlRight":
                  case "ctrlUp":
                      l += 1, o = !0;
                      break;
                  case "ctrlLeft":
                  case "ctrlDown":
                      l -= 1, o = !0;
                      break;
                  case "shiftRight":
                  case "shiftUp":
                      r = !0, d += 1;
                      break;
                  case "shiftLeft":
                  case "shiftDown":
                      r = !0, d -= 1;
                      break;
                  case "altRight":
                  case "altUp":
                      c = !0, d += 10;
                      break;
                  case "altLeft":
                  case "altDown":
                      c = !0, d -= 10;
                      break;
                  case "ctrlShiftUp":
                      this.up()
              }
              s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade)
          },
          _registerKey: function(t) {
              var e = this.keys.some(function(e) {
                  return e == t
              });
              e || this.keys.push(t)
          },
          _unRegisterKey: function(t) {
              var e = this.keys.indexOf(t);
              this.keys.splice(e, 1)
          },
          _isHotKeyPressed: function() {
              var t, e = !1,
                  i = this,
                  s = this.keys.sort();
              for (var a in u) t = u[a], s.length == t.length && t.every(function(t, e) {
                  return t == s[e]
              }) && (i._trigger("hotKey", a), e = !0);
              return e
          },
          _trigger: function(t, e) {
              this.$el.trigger(t, e)
          },
          _focusNextCell: function(t, e) {
              e = e || this.cellType;
              var i = n.getParsedDate(this._getFocusedDate()),
                  s = i.year,
                  a = i.month,
                  h = i.date;
              if (!this._isHotKeyPressed()) {
                  switch (t) {
                      case 37:
                          "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
                          break;
                      case 38:
                          "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
                          break;
                      case 39:
                          "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
                          break;
                      case 40:
                          "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : ""
                  }
                  var o = new Date(s, a, h);
                  o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o
              }
          },
          _getFocusedDate: function() {
              var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                  e = this.parsedDate;
              if (!t) switch (this.view) {
                  case "days":
                      t = new Date(e.year, e.month, (new Date).getDate());
                      break;
                  case "months":
                      t = new Date(e.year, e.month, 1);
                      break;
                  case "years":
                      t = new Date(e.year, 0, 1)
              }
              return t
          },
          _getCell: function(t, i) {
              i = i || this.cellType;
              var s, a = n.getParsedDate(t),
                  h = '.datepicker--cell[data-year="' + a.year + '"]';
              switch (i) {
                  case "month":
                      h = '[data-month="' + a.month + '"]';
                      break;
                  case "day":
                      h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
              }
              return s = this.views[this.currentView].$el.find(h), s.length ? s : e("")
          },
          destroy: function() {
              var t = this;
              t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
          },
          _handleAlreadySelectedDates: function(t, e) {
              this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()))
          },
          _onShowEvent: function(t) {
              this.visible || this.show()
          },
          _onBlur: function() {
              !this.inFocus && this.visible && this.hide()
          },
          _onMouseDownDatepicker: function(t) {
              this.inFocus = !0
          },
          _onMouseUpDatepicker: function(t) {
              this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus()
          },
          _onKeyUpGeneral: function(t) {
              var e = this.$el.val();
              e || this.clear()
          },
          _onResize: function() {
              this.visible && this.setPosition()
          },
          _onMouseUpBody: function(t) {
              t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
          },
          _onMouseUpEl: function(t) {
              t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
          },
          _onKeyDown: function(t) {
              var e = t.which;
              if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                  if (this._getCell(this.focused).hasClass("-disabled-")) return;
                  if (this.view != this.opts.minView) this.down();
                  else {
                      var i = this._isSelected(this.focused, this.cellType);
                      if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                      this._handleAlreadySelectedDates(i, this.focused)
                  }
              }
              27 == e && this.hide()
          },
          _onKeyUp: function(t) {
              var e = t.which;
              this._unRegisterKey(e)
          },
          _onHotKey: function(t, e) {
              this._handleHotKey(e)
          },
          _onMouseEnterCell: function(t) {
              var i = e(t.target).closest(".datepicker--cell"),
                  s = this._getDateFromCell(i);
              this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
          },
          _onMouseLeaveCell: function(t) {
              var i = e(t.target).closest(".datepicker--cell");
              i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
          },
          _onTimeChange: function(t, e, i) {
              var s = new Date,
                  a = this.selectedDates,
                  n = !1;
              a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
          },
          _onClickCell: function(t, e) {
              this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e)
          },
          set focused(t) {
              if (!t && this.focused) {
                  var e = this._getCell(this.focused);
                  e.length && e.removeClass("-focus-")
              }
              this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
          },
          get focused() {
              return this._focused
          },
          get parsedDate() {
              return n.getParsedDate(this.date)
          },
          set date(t) {
              return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0
          },
          get date() {
              return this.currentDate
          },
          set view(t) {
              return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t)
          },
          get view() {
              return this.currentView
          },
          get cellType() {
              return this.view.substring(0, this.view.length - 1)
          },
          get minTime() {
              var t = n.getParsedDate(this.minDate);
              return new Date(t.year, t.month, t.date).getTime()
          },
          get maxTime() {
              var t = n.getParsedDate(this.maxDate);
              return new Date(t.year, t.month, t.date).getTime()
          },
          get curDecade() {
              return n.getDecade(this.date)
          }
      }, n.getDaysCount = function(t) {
          return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
      }, n.getParsedDate = function(t) {
          return {
              year: t.getFullYear(),
              month: t.getMonth(),
              fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
              date: t.getDate(),
              fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
              day: t.getDay(),
              hours: t.getHours(),
              fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
              minutes: t.getMinutes(),
              fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
          }
      }, n.getDecade = function(t) {
          var e = 10 * Math.floor(t.getFullYear() / 10);
          return [e, e + 9]
      }, n.template = function(t, e) {
          return t.replace(/#\{([\w]+)\}/g, function(t, i) {
              return e[i] || 0 === e[i] ? e[i] : void 0
          })
      }, n.isSame = function(t, e, i) {
          if (!t || !e) return !1;
          var s = n.getParsedDate(t),
              a = n.getParsedDate(e),
              h = i ? i : "day",
              o = {
                  day: s.date == a.date && s.month == a.month && s.year == a.year,
                  month: s.month == a.month && s.year == a.year,
                  year: s.year == a.year
              };
          return o[h]
      }, n.less = function(t, e, i) {
          return t && e ? e.getTime() < t.getTime() : !1
      }, n.bigger = function(t, e, i) {
          return t && e ? e.getTime() > t.getTime() : !1
      }, n.getLeadingZeroNum = function(t) {
          return parseInt(t) < 10 ? "0" + t : t
      }, n.resetTime = function(t) {
          return "object" == typeof t ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0
      }, e.fn.datepicker = function(t) {
          return this.each(function() {
              if (e.data(this, o)) {
                  var i = e.data(this, o);
                  i.opts = e.extend(!0, i.opts, t), i.update()
              } else e.data(this, o, new m(this, t))
          })
      }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
          ru: {
              days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
              daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
              daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
              months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
              monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
              today: "Сегодня",
              clear: "Очистить",
              dateFormat: "dd.mm.yyyy",
              timeFormat: "hh:ii",
              firstDay: 1
          }
      }, e(function() {
          e(r).datepicker()
      })
  }(),
  function() {
      var t = {
              days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
              months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
              years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
          },
          s = e.fn.datepicker,
          a = s.Constructor;
      s.Body = function(t, i, s) {
          this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init()
      }, s.Body.prototype = {
          init: function() {
              this._buildBaseHtml(), this._render(), this._bindEvents()
          },
          _bindEvents: function() {
              this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this))
          },
          _buildBaseHtml: function() {
              this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el)
          },
          _getDayNamesHtml: function(t, e, s, a) {
              return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a))
          },
          _getCellContents: function(t, e) {
              var i = "datepicker--cell datepicker--cell-" + e,
                  s = new Date,
                  n = this.d,
                  h = a.resetTime(n.minRange),
                  o = a.resetTime(n.maxRange),
                  r = n.opts,
                  c = a.getParsedDate(t),
                  d = {},
                  l = c.date;
              switch (e) {
                  case "day":
                      n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
                      break;
                  case "month":
                      l = n.loc[n.opts.monthsField][c.month];
                      break;
                  case "year":
                      var u = n.curDecade;
                      l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""))
              }
              return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
                  html: l,
                  classes: i
              }
          },
          _getDaysHtml: function(t) {
              var e = a.getDaysCount(t),
                  i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                  s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                  n = i - this.d.loc.firstDay,
                  h = 6 - s + this.d.loc.firstDay;
              n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;
              for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
              return d
          },
          _getDayHtml: function(t) {
              var e = this._getCellContents(t, "day");
              return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
          },
          _getMonthsHtml: function(t) {
              for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) e += this._getMonthHtml(new Date(i.year, s)), s++;
              return e
          },
          _getMonthHtml: function(t) {
              var e = this._getCellContents(t, "month");
              return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>"
          },
          _getYearsHtml: function(t) {
              var e = (a.getParsedDate(t), a.getDecade(t)),
                  i = e[0] - 1,
                  s = "",
                  n = i;
              for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
              return s
          },
          _getYearHtml: function(t) {
              var e = this._getCellContents(t, "year");
              return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
          },
          _renderTypes: {
              days: function() {
                  var t = this._getDayNamesHtml(this.d.loc.firstDay),
                      e = this._getDaysHtml(this.d.currentDate);
                  this.$cells.html(e), this.$names.html(t)
              },
              months: function() {
                  var t = this._getMonthsHtml(this.d.currentDate);
                  this.$cells.html(t)
              },
              years: function() {
                  var t = this._getYearsHtml(this.d.currentDate);
                  this.$cells.html(t)
              }
          },
          _render: function() {
              this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
          },
          _update: function() {
              var t, i, s, a = e(".datepicker--cell", this.$cells),
                  n = this;
              a.each(function(a, h) {
                  i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes)
              })
          },
          show: function() {
              this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
          },
          hide: function() {
              this.$el.removeClass("active"), this.active = !1
          },
          _handleClick: function(t) {
              var e = t.data("date") || 1,
                  i = t.data("month") || 0,
                  s = t.data("year") || this.d.parsedDate.year,
                  a = this.d;
              if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));
              var n = new Date(s, i, e),
                  h = this.d._isSelected(n, this.d.cellType);
              return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n)
          },
          _onClickCell: function(t) {
              var i = e(t.target).closest(".datepicker--cell");
              i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
          }
      }
  }(),
  function() {
      var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
          i = '<div class="datepicker--buttons"></div>',
          s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
          a = e.fn.datepicker,
          n = a.Constructor;
      a.Navigation = function(t, e) {
          this.d = t, this.opts = e, this.$buttonsContainer = "", this.init()
      }, a.Navigation.prototype = {
          init: function() {
              this._buildBaseHtml(), this._bindEvents()
          },
          _bindEvents: function() {
              this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this))
          },
          _buildBaseHtml: function() {
              this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
          },
          _addButtonsIfNeed: function() {
              this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
          },
          _render: function() {
              var i = this._getTitle(this.d.currentDate),
                  s = n.template(t, e.extend({
                      title: i
                  }, this.opts));
              this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
          },
          _getTitle: function(t) {
              return this.d.formatDate(this.opts.navTitles[this.d.view], t)
          },
          _addButton: function(t) {
              this.$buttonsContainer.length || this._addButtonsContainer();
              var i = {
                      action: t,
                      label: this.d.loc[t]
                  },
                  a = n.template(s, i);
              e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
          },
          _addButtonsContainer: function() {
              this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker)
          },
          setNavStatus: function() {
              if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                  var t = this.d.parsedDate,
                      e = t.month,
                      i = t.year,
                      s = t.date;
                  switch (this.d.view) {
                      case "days":
                          this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                          break;
                      case "months":
                          this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
                          break;
                      case "years":
                          var a = n.getDecade(this.d.date);
                          this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next")
                  }
              }
          },
          _disableNav: function(t) {
              e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-")
          },
          _activateNav: function(t) {
              e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-")
          },
          _onClickNavButton: function(t) {
              var i = e(t.target).closest("[data-action]"),
                  s = i.data("action");
              this.d[s]()
          },
          _onClickNavTitle: function(t) {
              return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years")
          }
      }
  }(),
  function() {
      var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
          i = e.fn.datepicker,
          s = i.Constructor;
      i.Timepicker = function(t, e) {
          this.d = t, this.opts = e, this.init()
      }, i.Timepicker.prototype = {
          init: function() {
              var t = "input";
              this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
          },
          _setTime: function(t) {
              var e = s.getParsedDate(t);
              this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
          },
          _setMinTimeFromDate: function(t) {
              this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes)
          },
          _setMaxTimeFromDate: function(t) {
              this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
          },
          _setDefaultMinMaxTime: function() {
              var t = 23,
                  e = 59,
                  i = this.opts;
              this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes
          },
          _validateHoursMinutes: function(t) {
              this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
          },
          _buildHTML: function() {
              var i = s.getLeadingZeroNum,
                  a = {
                      hourMin: this.minHours,
                      hourMax: i(this.maxHours),
                      hourStep: this.opts.hoursStep,
                      hourValue: this.hours,
                      hourVisible: i(this.displayHours),
                      minMin: this.minMinutes,
                      minMax: i(this.maxMinutes),
                      minStep: this.opts.minutesStep,
                      minValue: i(this.minutes)
                  },
                  n = s.template(t, a);
              this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
          },
          _updateCurrentTime: function() {
              var t = s.getLeadingZeroNum(this.displayHours),
                  e = s.getLeadingZeroNum(this.minutes);
              this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
          },
          _updateRanges: function() {
              this.$hours.attr({
                  min: this.minHours,
                  max: this.maxHours
              }).val(this.hours), this.$minutes.attr({
                  min: this.minMinutes,
                  max: this.maxMinutes
              }).val(this.minutes)
          },
          _handleDate: function(t) {
              this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t)
          },
          update: function() {
              this._updateRanges(), this._updateCurrentTime()
          },
          _getValidHoursFromDate: function(t, e) {
              var i = t,
                  a = t;
              t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
              var n = e || this.d.ampm,
                  h = "am";
              if (n) switch (!0) {
                  case 0 == a:
                      a = 12;
                      break;
                  case 12 == a:
                      h = "pm";
                      break;
                  case a > 11:
                      a -= 12, h = "pm"
              }
              return {
                  hours: a,
                  dayPeriod: h
              }
          },
          set hours(t) {
              this._hours = t;
              var e = this._getValidHoursFromDate(t);
              this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
          },
          get hours() {
              return this._hours
          },
          _onChangeRange: function(t) {
              var i = e(t.target),
                  s = i.attr("name");
              this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
          },
          _onSelectDate: function(t, e) {
              this._handleDate(e), this.update()
          },
          _onMouseEnterRange: function(t) {
              var i = e(t.target).attr("name");
              e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
          },
          _onMouseOutRange: function(t) {
              var i = e(t.target).attr("name");
              this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
          },
          _onMouseUpRange: function(t) {
              this.d.timepickerIsActive = !1
          }
      }
  }()
}(window, jQuery);
// $(window).on('resize',function() {
//   slider();
// });
// slider();
// function slider() {
//   if ( $(window).width() <= 992 ) {
//     $('.cards-slider').addClass('owl-carousel');
//     $('.cards-slider').owlCarousel({
//       margin:12,
//       loop:false,
//       autoWidth:true,
//       nav: false,
//       dots: false,
//       nav: true
//     });
//   } else {
//     $('.cards-slider').removeClass('owl-carousel');
//     $('.cards-slider').owlCarousel('destroy');
//   }
// }
$('.cards-slider').owlCarousel({
  loop: false,
  nav: false,
  dots: false,
  nav: true,
  items: 4,
  responsive: {
      // breakpoint from 0 up
      0: {
          margin: 12,
          autoWidth: true
      },
      // breakpoint from 480 up
      992: {
          autoWidth: false,
          items: 4,
          margin: 0
      }
  }
});
$(window).on('resize', function() {
  sliderPic();
});
sliderPic();

function sliderPic() {
  if ($(window).width() <= 992) {
      $('.cards-slider-pic').addClass('owl-carousel');
      $('.cards-slider-pic').owlCarousel({
          margin: 12,
          loop: false,
          autoWidth: true,
          nav: false,
          dots: false,
          nav: true
      });
  } else {
      $('.cards-slider-pic').removeClass('owl-carousel');
      $('.cards-slider-pic').owlCarousel('destroy');
  }
}
$('.filter__btn').on('click', function(e) {
  e.preventDefault();
  $(this).closest('.filter').toggleClass('active');
});
$(window).on('resize', function() {
  sliderHeader();
});
sliderHeader();

function sliderHeader() {
  if ($(window).width() <= 992) {
      $('.header__cols').addClass('owl-carousel');
      $('.header__cols').owlCarousel({
          margin: 12,
          loop: false,
          autoWidth: true,
          dots: true,
          nav: true
      });
  } else {
      $('.header__cols').removeClass('owl-carousel');
      $('.header__cols').owlCarousel('destroy');
  }
}
// $('.item__list').slick({
//   dots: false,
//   arrows: false,
//   slidesToShow: 4
// });
sliderItem();

function sliderItem() {
  $('.item__list').addClass('owl-carousel');
  $('.item__list').owlCarousel({
      margin: 12,
      loop: false,
      nav: false,
      dots: false,
      responsive: {
          0: {
              autoWidth: true
          },
          576: {
              items: 4
          }
      }
  });
}
$('.item__list-item a').on('click', function(e) {
  e.preventDefault();
  var newImg = $(this).attr('href');
  var mainImg = $('.item__img img');
  $(this).addClass('cur').closest('.owl-item').siblings().find('a').removeClass('cur');
  mainImg.attr("src", newImg);
});
var mmm = 0;
$('.js-nav-toggle').on('click', function(e) {
  e.preventDefault();
  var time_last = Date.now() / 1000;
  if (mmm > 0) {
      if ((time_last - mmm) > 0.5) {
          mmm = time_last;
          $('body').toggleClass('menu-opened');
      } else {
          mmm = 0;
      }
  } else {
      mmm = time_last;
      $('body').toggleClass('menu-opened');
  }
});
$('.onTop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: 0
  }, 500);
});
$('.page-answer').on('click', function(e) {
  e.preventDefault();
  $(this).closest('.page-answers').addClass('complete');
  if ($(this).hasClass('success')) {
      $(this).addClass('active');
  } else {
      $(this).addClass('active').closest('.page-answers').find('.success').addClass('active');
  }
});
$(window).on('resize', function() {
  sliderRowSlider();
});
sliderRowSlider();

function sliderRowSlider() {
  if ($(window).width() <= 768) {
      $('.page-row-slider').addClass('owl-carousel');
      $('.page-row-slider').owlCarousel({
          margin: 12,
          loop: false,
          autoWidth: true,
          nav: false,
          dots: false
      });
  } else {
      $('.page-row-slider').removeClass('owl-carousel');
      $('.page-row-slider').owlCarousel('destroy');
  }
}
$(window).on('resize', function() {
  sliderIcons();
});
sliderIcons();

function sliderIcons() {
  if ($(window).width() <= 992) {
      $('.cards-slider-icons').addClass('owl-carousel');
      $('.cards-slider-icons').owlCarousel({
          margin: 12,
          loop: false,
          autoWidth: true,
          nav: true,
          dots: true
      });
  } else {
      $('.cards-slider-icons').removeClass('owl-carousel');
      $('.cards-slider-icons').owlCarousel('destroy');
  }
}
$('.js-popup').fancybox();
$('.reviews__slider').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerPadding: '0',
  arrows: false,
  responsive: [{
      breakpoint: 992,
      settings: {
          slidesToShow: 1,
          centerMode: false
      }
  }]
});
/*

$(document).ready(function(){
$("#callme").fancybox();
//$("#f_contact").submit(function(){ return false; });
=
$("#callmeclick").on("click", function(){
     
    // тут дальнейшие действия по обработке формы
    // закрываем окно, как правило делать это нужно после обработки данных
    $("#f_contact").fadeOut("fast", function(){
        $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
        setTimeout("$.fancybox.close()", 1000);
    });
});

});

*/
function toggleCatgDesc(block_id, this_obj) {
  jQuery(this_obj).blur();
  jQuery('#' + block_id).slideToggle();
  if (jQuery('#' + block_id + '_open_text').css('display') == 'inline') {
      jQuery('#' + block_id + '_open_text').css('display', 'none');
      jQuery('#' + block_id + '_closed_text').css('display', 'inline');
  } else {
      jQuery('#' + block_id + '_open_text').css('display', 'inline');
      jQuery('#' + block_id + '_closed_text').css('display', 'none');
  }
} 