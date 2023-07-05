(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => f });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          c = t(667),
          s = t.n(c),
          d = new URL(t(36), t.b),
          l = i()(o()),
          p = s()(d);
        l.push([
          n.id,
          `html {\n  height: 100%;\n}\n\nh1 {\n  color: white;\n  margin: 5px 0;\n}\n\nh2 {\n  margin: 2px;\n}\n\nheader {\n  flex-direction: row;\n  align-items: center;\n  background-image: url(${p});\n}\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  background-color: #e9f6f8;\n}\ntbody tr:nth-child(even) {\n  background: #f2f2f2;\n}\n\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\n\n#my-picture img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\n#header-info {\n  flex: 1;\n  padding: 10px;\n  text-shadow: 1px 1px 2px #000000;\n}\n\n#job-title {\n  color: #ffffff;\n  margin: 5px 0;\n  font-weight: 100;\n  font-size: 1.2em;\n}\n#header-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(45deg, #0798abfa, transparent);\n}\n\n.tbar {\n  display: flex;\n  align-items: stretch;\n  padding: 0 0 10px 0;\n}\n.tfill {\n  flex: 1;\n}\n\n#teamsTable {\n  border-collapse: collapse;\n  width: 100%;\n}\n#teamsTable th,\n#teamsTable td {\n  border: 1px solid #057988;\n  padding: 5px;\n}\nth {\n  background-color: #0798ab;\n  color: white;\n}\n#teamTable th {\n  border-color: #057988;\n  color: white;\n}\n\nfooter {\n  padding: 5px;\n  background-color: #057988;\n  color: white;\n  text-align: center;\n}\nfooter a,\nfooter a:visited {\n  color: #f5f5f5;\n  vertical-align: top;\n  line-height: 20px;\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 0.2em;\n  transition: 0.5s;\n}\na {\n  text-decoration: none;\n}\n`,
          ""
        ]);
        const f = l;
      },
      645: n => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                    (l[5] = a)),
                  t && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = t)) : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      667: n => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                  : n)
              : n
          );
        };
      },
      81: n => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: n => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              d = r.base ? s[0] + r.base : s[0],
              l = a[d] || 0,
              p = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var f = t(p),
              u = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== f) e[f].references++, e[f].updater(u);
            else {
              var h = o(u, r);
              (r.byIndex = c), e.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: n => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: n => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: n => {
        n.exports = function (n) {
          if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            }
          };
        };
      },
      589: n => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      36: (n, e, t) => {
        n.exports = t.p + "b65bb854f1ff13c46e6c.png";
      }
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.m = n),
    (t.n = n => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var r in e) t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.p = ""),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        d = t(216),
        l = t.n(d),
        p = t(589),
        f = t.n(p),
        u = t(426),
        h = {};
      function m(n) {
        return `<tr>\n    <td></td>\n    <td>${n.promotion}</td>\n    <td>${n.members}</td>\n    <td>${n.name}</td>\n    <td>${n.url}</td>    \n    <td>x</td>\n    </tr>`;
      }
      (h.styleTagTransform = f()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(u.Z, h),
        u.Z && u.Z.locals && u.Z.locals,
        fetch("http://localhost:3000/teams-json")
          .then(n => n.json())
          .then(function (n) {
            const e = n.map(m);
            document.querySelector("#teamsTable tbody").innerHTML = e.join("");
          });
    })();
})();
