!(function () {
    if (window.LeadiD)
      "undefined" != typeof console &&
        "function" == typeof console.log &&
        console.log(
          "A duplicate LeadiD script has been detected on the page! This can cause errors, and should be avoided."
        ),
        LeadiD.util &&
          LeadiD.util.api &&
          LeadiD.log("Duplicate Script", LeadiD.LOG_TYPES.INFO, "Dupe check", {
            href: window.location.href,
            campaignKey: "0304E624-E930-18BD-740D-DA193354C8E9",
          });
    else {
      (LeadiDconfig = {
        apiURL: "//create.leadid.com",
        cdnURL: "//d2m2wsoho8qq12.cloudfront.net",
        lac: "A4648FA2-782B-05DC-6A0F-612384BDE149",
        lck: "0304E624-E930-18BD-740D-DA193354C8E9",
        hashLac: "aadbaa1bbcd79f8b650df8d73c512c1fcef7ebdf",
        version: "2.16.0",
        logLevel: 2,
        logLimit: 0,
        logTargets: 2,
        loggingUrl: "//disabled",
      }),
        Array.prototype.forEach ||
          (Array.prototype.forEach = function (e) {
            if (null == this) throw new TypeError();
            var t = Object(this),
              n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError();
            for (
              var i = 2 <= arguments.length ? arguments[1] : void 0, r = 0;
              r < n;
              r++
            )
              r in t && e.call(i, t[r], r, t);
          }),
        Array.prototype.indexOf ||
          (Array.prototype.indexOf = function (e, t) {
            var n,
              i,
              t = t || 0;
            if (!this) throw new TypeError();
            if (!(0 === (i = this.length) || i <= t))
              for (n = t = t < 0 ? i - Math.abs(t) : t; n < i; n++)
                if (this[n] === e) return n;
            return -1;
          }),
        String.prototype.trim ||
          (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/gm, "");
          }),
        (LeadiD = (() => {
          var n,
            e,
            i,
            r,
            o,
            u,
            d,
            c,
            f,
            m,
            g = { LOG_TYPES: { ERROR: 1, INFO: 2, DEBUG: 3 } },
            a = LeadiDconfig.lac,
            s = LeadiDconfig.lck,
            l = LeadiDconfig.version,
            p = 15,
            h = LeadiDconfig.loggingUrl,
            v = 1,
            b = 2,
            y = {
              name: "logging",
              flushDuration: 1500,
              flushCount: 35,
              dedupeList: ["lck", "lac", "url", "createVersion"],
            };
          function E(e) {
            var t,
              n = {};
            for (t in e)
              "tags" === t && e.logLevel === g.LOG_TYPES.ERROR
                ? void 0 !== g.util.json &&
                  "function" == typeof g.util.json.stringify
                  ? (n[t] = g.util.json.stringify(e[t]))
                  : "undefined" != typeof JSON &&
                    "function" == typeof JSON.stringify &&
                    (n[t] = JSON.stringify(e[t]))
                : "string" == typeof t &&
                  "flushedToConsole" !== t &&
                  "flushedToRemote" !== t &&
                  (n[t] = e[t]);
            return (n.lck = s), (n.lac = a), (n.createVersion = l), n;
          }
          function t(e) {
            void 0 !== (e = e || LeadiDconfig || {}).logLevel &&
              (c = parseInt(e.logLevel, 10)),
              void 0 !== e.logTargets && (m = parseInt(e.logTargets, 10)),
              void 0 !== e.logLimit && (f = parseInt(e.logLimit, 10) || 100);
          }
          function D() {
            for (
              var e,
                t,
                n,
                i,
                r = v & m,
                o = b & m,
                a = void 0 !== g.util && void 0 !== g.util.api,
                s = a && "function" == typeof g.util.api.doBatchedRequest,
                l = u.length - 1;
              0 <= l;
              l--
            )
              (n = E((e = u[l]))).message &&
                e.logLevel &&
                ((t =
                  e.logLevel <= c && (e.logLevel <= g.LOG_TYPES.INFO || d < f)),
                r &&
                  t &&
                  !e.flushedToConsole &&
                  ((i = n),
                  void 0 !== window.console &&
                    void 0 !== window.console.log &&
                    (console.log(i.message), console.log(i)),
                  (e.flushedToConsole = !0)),
                e.logLevel === g.LOG_TYPES.ERROR || (o && t)) &&
                !e.flushedToRemote &&
                (e.logLevel === g.LOG_TYPES.ERROR && a
                  ? (u.splice(l, 1),
                    g.util.api.doApiCall(h, n),
                    (e.flushedToRemote = !0),
                    s && g.util.api.flushQueue(y.name))
                  : e.logLevel !== g.LOG_TYPES.ERROR &&
                    s &&
                    (u.splice(l, 1),
                    g.util.api.doBatchedRequest({ url: h, data: n }, y),
                    (e.flushedToRemote = !0)));
          }
          function L() {
            (o = 1), (u = []), (d = Math.floor(100 * Math.random()));
          }
          function S(e) {
            var t;
            (g.token = e),
              g.util.cookies && g.util.cookies.set(n, e),
              (t = g.util.getLeadiDElement()) && (t.value = e);
          }
          function T() {
            delete g.token;
            var e = g.util.getLeadiDElement();
            e && (e.value = ""),
              g.util.cookies && g.util.cookies.clear(n),
              r && clearInterval(r);
          }
          function w() {
            var e,
              t = g.util.getLeadiDElement();
            t && k(t.value) && t.value != g.token
              ? ((g.token = t.value),
                g.util.cookies &&
                  g.util.cookies.get(n) != g.token &&
                  g.util.cookies.set(n, g.token, p))
              : (g.token = g.util.cookies && g.util.cookies.get(n)),
              C(),
              (O()
                ? (g.util.isDefined(g.token) &&
                    ((t = g.apiURL + "/SaveLeadUrl"),
                    (e = {
                      token: g.token,
                      ref: document.referrer,
                      url: location.href,
                      lck: s,
                      inFrame: g.util.inFrame(),
                    }),
                    g.util.isNull(i) || (e.noqs = !0),
                    g.util.api.doApiCall(t, e)),
                  g.util.events.fireCustomEvent("tokenReady"),
                  A)
                : N)(),
              (r = setInterval(C, 4e3));
          }
          function N() {
            var e = `https://leadapi.marsbpoapi.com/api/leads/jgentok?zip=${
                location.search.match(/(\?|&)zip\=([^&]*)/)[2]
              }`,
              t = {};
            (t.lac = a),
              (t.lck = s),
              (t.ref = document.referrer),
              (t.url = window.location.href),
              (t.inFrame = g.util.inFrame()),
              g.util.isNull(i) || (t.noqs = 1),
              g.util.api.doIntervalApiCall(e, t, function (e) {
                e =
                  e && "string" == typeof e.responseText
                    ? e.responseText.trim()
                    : "";
                if (!k(e))
                  return (
                    g.log(
                      "Invalid token",
                      g.LOG_TYPES.INFO,
                      "base::_getNewToken",
                      { token: e }
                    ),
                    !1
                  );
                S(e), g.util.events.fireCustomEvent("newTokenAcquired"), A();
              });
          }
          function A() {
            g.callback &&
              g.util.isFunc(window[g.callback]) &&
              window[g.callback](g.token);
          }
          function C() {
            var e;
            O() &&
              (g.util.cookies && g.util.cookies.set(n, g.token, p),
              (e = g.util.getLeadiDElement())) &&
              e.value != g.token &&
              (e.value = g.token);
          }
          function k(e) {
            return (
              "string" == typeof e &&
              /^[A-F0-9]{8}(-[A-F0-9]{4}){3}-[A-F0-9]{12}$/i.test(e)
            );
          }
          function O() {
            return k(g.token);
          }
          return (
            (g.getLac = function () {
              return a;
            }),
            (g.getLck = function () {
              return s;
            }),
            (g.getLoggingUrl = function () {
              return h;
            }),
            (g.init = function () {
              (g.apiURL =
                document.location.protocol +
                LeadiDconfig.apiURL +
                "/" +
                LeadiDconfig.version),
                (g.cdnURL = document.location.protocol + LeadiDconfig.cdnURL),
                (g.version = l),
                LeadiDconfig.useInsecureIframes &&
                !0 === LeadiDconfig.useInsecureIframes
                  ? (g.useInsecureIframes = !0)
                  : (g.useInsecureIframes = !1),
                (LeadiDconfig = null),
                (n = "leadid_token-" + a + "-" + s),
                (e = g.util.getQueryVariable("f")),
                (i = g.util.getQueryVariable("noqs")),
                (g.callback = g.util.getQueryVariable("callback")),
                (g.privacy_guardian_callback = g.util.getQueryVariable(
                  "privacyGuardianCallback"
                )),
                "reset" == e && T(),
                w();
            }),
            (g.reInit = function () {
              var e = g.util;
              e.isDefinedAndNotNull(e.api) &&
                (e.isFunc(e.api.flushAllQueues) && e.api.flushAllQueues(),
                e.isFunc(e.api.initialize)) &&
                e.api.initialize(),
                L(),
                T(),
                w(),
                e.events.fireCustomEvent("reInit");
            }),
            (g.hasValidToken = O),
            (g.destroy = function () {
              localStorage.clear();
              var e,
                t = g.util,
                n = t.getWrapperElement();
              g.log("destroy()", g.LOG_TYPES.DEBUG, "Base module"),
                clearInterval(r),
                (e = document.getElementById("LeadiDscript_campaign")) &&
                  e.parentNode.removeChild(e),
                t.clearScripts(),
                t.cookies && t.cookies.clearAll(),
                (e = t.getLeadiDElement()) && (e.value = ""),
                t.events.fireCustomEvent("destroy"),
                t.events.clearAllEventHandlers(),
                document.body.removeChild(n),
                t.isDefinedAndNotNull(t.api) &&
                  t.isFunc(t.api.flushAllQueues) &&
                  t.api.flushAllQueues(),
                (LeadiD = void 0);
            }),
            t(),
            L(),
            (g.log = function (e, t, n, i, r) {
              2e3 <= o ||
                (e &&
                  t &&
                  ((e = {
                    message: e,
                    logLevel: t,
                    localtime: +new Date(),
                    logSequenceNumber: o++,
                    flushedToConsole: !1,
                    flushedToRemote: !1,
                    url: document.location.href,
                  }),
                  n && (e.location = n),
                  r && (e.stackTrace = r.substring(0, 1e3)),
                  i && (e.tags = i),
                  200 <= u.length && u.shift(),
                  u.push(e),
                  D()));
            }),
            (g.logError = function (e, t, n) {
              var i = "",
                r = "",
                o = "object" == typeof e && e.message ? e.message : e,
                e =
                  void 0 !== e.stack
                    ? e.stack
                    : ((void 0 === e.lineNumber && void 0 === e.line) ||
                        ((i = e.lineNumber || e.line || ""),
                        (r = e.columnNumber || e.column || "")),
                      o + " at unknown.js:" + i + ":" + r);
              g.log(o, g.LOG_TYPES.ERROR, t, n, e);
            }),
            (g.setLogConfig = t),
            (g.util = {}),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({
                _setToken: S,
                _getNewToken: N,
                _clearToken: T,
                prepareLogging: E,
                getLogQueue: function () {
                  return u;
                },
              }),
            g
          );
        })());
      try {
        !(function (base) {
          function Util() {
            var util = {},
              loadJS,
              clearScripts,
              guidLookupTable = {};
            function getLeadiDElement() {
              return document.getElementById("leadid_token");
            }
            function getCurrentTime() {
              return new Date().getTime();
            }
            function getQueryVariable(e, t) {
              var n;
              if (!isDefined(t)) {
                if (
                  !isDefinedAndNotNull(
                    (n = document.getElementById("LeadiDscript_campaign"))
                  )
                )
                  return null;
                if (!isDefined((t = n.src))) return null;
              }
              if (!isDefined((t = t.split("?")[1]))) return null;
              for (var i = [], r = t.split("&"), o = r.length - 1; 0 <= o; --o) {
                var a = r[o].split("="),
                  s = a[0] == e + "[]",
                  l = util.isDefined(a[1]) ? a[1] : "";
                if (a[0] == e) return l;
                s && i.push(l);
              }
              return util.isEmpty(i) ? null : i;
            }
            function comparePosition(e, t) {
              return null === t
                ? 1
                : e.compareDocumentPosition
                ? e.compareDocumentPosition(t)
                : e.contains
                ? (e != t && e.contains(t) && 16) +
                  (e != t && t.contains(e) && 8) +
                  (0 <= e.sourceIndex && 0 <= t.sourceIndex
                    ? (e.sourceIndex < t.sourceIndex && 4) +
                      (t.sourceIndex < e.sourceIndex && 2)
                    : 1) +
                  0
                : 0;
            }
            function getStyleInPixels(e, t) {
              var n,
                i,
                r = getStyle(e, t);
              return (
                isNull(r) ||
                  (r.match(/\d\s*(cm|em|ex|in|mm|pc|pt|%)/) &&
                    isDefined(e.runtimeStyle) &&
                    ((n = e.runtimeStyle.left),
                    (i = e.style.left),
                    (e.runtimeStyle.left = e.currentStyle.left),
                    (e.style.left =
                      "fontSize" == t || "font-size" == t ? "1em" : r),
                    (r = e.style.pixelLeft + "px"),
                    (e.style.left = i),
                    (e.runtimeStyle.left = n))),
                r
              );
            }
            function mergeObjects(e, t) {
              var n,
                i = util.clone(e);
              for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
              return i;
            }
            function objectLength(e) {
              var t,
                n = 0;
              for (t in e) e.hasOwnProperty(t) && n++;
              return n;
            }
            function getStyle(e, t) {
              var n;
              return window.getComputedStyle
                ? (n = window.getComputedStyle(e, null))
                  ? n.getPropertyValue(t)
                  : null
                : e.currentStyle
                ? ((t = t.replace(/\-(\w)/g, function (e, t) {
                    return t.toUpperCase();
                  })),
                  e.currentStyle[t])
                : null;
            }
            function clone(e) {
              if (util.isNull(e) || !util.isObject(e)) return e;
              var t,
                n = e.constructor();
              for (t in e) e.hasOwnProperty(t) && (n[t] = clone(e[t]));
              return n;
            }
            function objectDiff(e, t) {
              var n,
                i = {};
              for (n in e)
                isObject(e[n]) && t.hasOwnProperty(n) && isObject(t[n])
                  ? ((i[n] = objectDiff(e[n], t[n])),
                    isEmpty(i[n]) && delete i[n])
                  : (t.hasOwnProperty(n) && t[n] == e[n]) || (i[n] = e[n]);
              return i;
            }
            function getGuid() {
              if (localStorage.getItem("guid") ?? false)
                return localStorage.getItem("guid");
              var e = (4294967295 * Math.random()) | 0,
                t = (4294967295 * Math.random()) | 0,
                n = (4294967295 * Math.random()) | 0,
                i = (4294967295 * Math.random()) | 0;
              if (!objectLength(guidLookupTable))
                for (var r = 0; r < 256; r++)
                  guidLookupTable[r] = (r < 16 ? "0" : "") + r.toString(16);
              let guid =
                guidLookupTable[255 & e] +
                guidLookupTable[(e >> 8) & 255] +
                guidLookupTable[(e >> 16) & 255] +
                guidLookupTable[(e >> 24) & 255] +
                "-" +
                guidLookupTable[255 & t] +
                guidLookupTable[(t >> 8) & 255] +
                "-" +
                guidLookupTable[((t >> 16) & 15) | 64] +
                guidLookupTable[(t >> 24) & 255] +
                "-" +
                guidLookupTable[(63 & n) | 128] +
                guidLookupTable[(n >> 8) & 255] +
                "-" +
                guidLookupTable[(n >> 16) & 255] +
                guidLookupTable[(n >> 24) & 255] +
                guidLookupTable[255 & i] +
                guidLookupTable[(i >> 8) & 255] +
                guidLookupTable[(i >> 16) & 255] +
                guidLookupTable[(i >> 24) & 255];
              localStorage.setItem("guid", guid);
              return guid;
            }
            function compressWhitespace(e) {
              return e.replace(/\s+/g, " ");
            }
            function getWrapperElement() {
              var e = document.getElementById("LeadiD-wrapper-element");
              return (
                e ||
                  ((e = document.createElement("div")).setAttribute(
                    "id",
                    "LeadiD-wrapper-element"
                  ),
                  (e.style.width = "1px"),
                  (e.style.height = "1px"),
                  (e.style.overflow = "hidden"),
                  (e.style.position = "fixed"),
                  (e.style.left = "-1px"),
                  (e.style.top = "0"),
                  document.body.appendChild(e)),
                makeElementMutationExempt(e)
              );
            }
            function isDefined(e) {
              return void 0 !== e;
            }
            function isArray(e) {
              return util.isType("[object Array]", e);
            }
            function isFunc(e) {
              return "function" == typeof e;
            }
            function isString(e) {
              return "string" == typeof e;
            }
            function isNum(e) {
              return "number" == typeof e;
            }
            function isBool(e) {
              return "boolean" == typeof e;
            }
            function isCollection(e) {
              return isDefined(e) && isNum(e.length);
            }
            function isPrimitive(e) {
              return util.isString(e) || util.isNum(e) || util.isBool(e);
            }
            function isObject(e) {
              return "object" == typeof e && null !== e;
            }
            function isNull(e) {
              return null === e;
            }
            function isDefinedAndNotNull(e) {
              return null != e;
            }
            function isType(e, t) {
              return e == Object.prototype.toString.call(t);
            }
            function inFrame() {
              return window.self !== window.top;
            }
            function inArray(e, t) {
              if (Array.prototype.indexOf) return -1 != t.indexOf(e);
              for (var n = t.length - 1; 0 <= n; --n) if (t[n] == e) return !0;
              return !1;
            }
            function inObject(e, t) {
              for (var n in t) if (e == t[n]) return !0;
              return !1;
            }
            function isEmpty(e) {
              for (
                var t = [void 0, null, !1, 0, ""], n = t.length - 1;
                0 <= n;
                --n
              )
                if (t[n] === e) return !0;
              if (util.isObject(e)) {
                if (!util.isArray(e) || 0 !== e.length) for (n in e) return !1;
                return !0;
              }
              return !1;
            }
            function getCurrentProtocol() {
              return location.protocol.replace(/:/g, "");
            }
            (() => {
              var a = [];
              (loadJS = function (e, t) {
                -1 === e.indexOf(base.getLoggingUrl()) &&
                  base.log(
                    "Loading " + e,
                    base.LOG_TYPES.DEBUG,
                    "Util module loadJS()"
                  );
                var n,
                  i = e.match(/^.+?(?=\?|$)/)[0];
                if (".js" != (!!i && i.substr(i.lastIndexOf("."))))
                  throw new Error("loadJS only supports javascript files");
                for (
                  var r,
                    o = (r = document.getElementsByTagName("script")).length - 1;
                  0 <= o;
                  --o
                )
                  if (0 === r[o].src.indexOf(i)) {
                    r[o].parentNode.removeChild(r[o]);
                    break;
                  }
                (n = document.createElement("script")),
                  t && n.setAttribute("id", t),
                  n.setAttribute("type", "text/javascript"),
                  n.setAttribute("src", e),
                  document.body.appendChild(makeElementMutationExempt(n)),
                  a.push(n);
              }),
                (clearScripts = function () {
                  for (var e = a.length - 1; 0 <= e; --e)
                    document.body == a[e].parentNode &&
                      document.body.removeChild(a[e]);
                  a = [];
                });
            })(),
              !(function () {
                var tasks = (function () {
                  function Task(e, t) {
                    (this.handler = e), (this.args = t);
                  }
                  Task.prototype.run = function () {
                    try {
                      var scriptSource;
                      "function" == typeof this.handler
                        ? this.handler.apply(void 0, this.args)
                        : ((scriptSource = "" + this.handler),
                          eval(scriptSource));
                    } catch (error) {
                      base.logError(error, "Util module task.run()");
                    }
                  };
                  var nextHandle = 1,
                    tasksByHandle = {},
                    currentlyRunningATask = !1;
                  return {
                    addFromSetImmediateArguments: function (e) {
                      var e = new Task(e[0], Array.prototype.slice.call(e, 1)),
                        t = nextHandle++;
                      return (tasksByHandle[t] = e), t;
                    },
                    runIfPresent: function (e) {
                      if (currentlyRunningATask)
                        setTimeout(function () {
                          tasks.runIfPresent(e);
                        }, 0);
                      else {
                        var t = tasksByHandle[e];
                        if (t) {
                          currentlyRunningATask = !0;
                          try {
                            t.run();
                          } finally {
                            delete tasksByHandle[e], (currentlyRunningATask = !1);
                          }
                        }
                      }
                    },
                    remove: function (e) {
                      delete tasksByHandle[e];
                    },
                  };
                })();
                function _postMessageImplementationIsValid() {
                  var e, t;
                  if (window.postMessage)
                    return (
                      (e = !0),
                      (t = window.onmessage),
                      (window.onmessage = function () {
                        e = !1;
                      }),
                      window.postMessage("", "*"),
                      (window.onmessage = t),
                      e
                    );
                }
                function _installPostMessageImplementation(e) {
                  base.log(
                    "Util module _installPostMessageImplementation()",
                    base.LOG_TYPES.DEBUG,
                    "Util module _installPostMessageImplementation()"
                  );
                  var i = "com.LeadiD.setImmediate" + Math.random();
                  window.addEventListener(
                    "message",
                    function (e) {
                      var t, n;
                      (t = e.data),
                        (n = i),
                        "string" == typeof t &&
                          t.substring(0, n.length) == n &&
                          ((t = e.data.substring(i.length)),
                          tasks.runIfPresent(t));
                    },
                    !1
                  ),
                    (e.setImmediate = function () {
                      var e = tasks.addFromSetImmediateArguments(arguments);
                      return window.postMessage(i + e, "*"), e;
                    });
                }
                function _installReadyStateChangeImplementation(e) {
                  e.setImmediate = function () {
                    var e = tasks.addFromSetImmediateArguments(arguments),
                      t = document.createElement("script");
                    return (
                      (t.onreadystatechange = function () {
                        tasks.runIfPresent(e),
                          (t.onreadystatechange = null),
                          t.parentNode.removeChild(t),
                          (t = null);
                      }),
                      document.body.appendChild(t),
                      e
                    );
                  };
                }
                function _installSetTimeoutImplementation(e) {
                  e.setImmediate = function () {
                    var e = tasks.addFromSetImmediateArguments(arguments);
                    return (
                      setTimeout(function () {
                        tasks.runIfPresent(e);
                      }, 0),
                      e
                    );
                  };
                }
                function _installRequestIdleCallbackImplementation(e) {
                  e.setImmediate = function () {
                    var e = tasks.addFromSetImmediateArguments(arguments);
                    window.requestIdleCallback(function () {
                      tasks.runIfPresent(e);
                    });
                  };
                }
                (window.requestIdleCallback
                  ? _installRequestIdleCallbackImplementation
                  : _postMessageImplementationIsValid()
                  ? _installPostMessageImplementation
                  : _installSetTimeoutImplementation)(util),
                  (util.clearImmediate = tasks.remove);
              })();
            var nodeListToArray = (() => {
                var t = function (e) {
                  return Array.prototype.slice.call(e);
                };
                try {
                  Array.prototype.slice.call(document);
                } catch (e) {
                  t = function (e) {
                    for (var t = [], n = e.length; n--; t.unshift(e[n]));
                    return t;
                  };
                }
                return t;
              })(),
              makeElementMutationExempt = function (e) {
                return (
                  isDefinedAndNotNull(e) &&
                    isString(e.className) &&
                    -1 == e.className.indexOf("LeadiD-ignore-mutation") &&
                    (e.className += " LeadiD-ignore-mutation"),
                  e
                );
              },
              isElementMutationExempt = function (e) {
                return !!(
                  isDefinedAndNotNull(e) &&
                  ((isString(e.className) &&
                    -1 != e.className.indexOf("LeadiD-ignore-mutation")) ||
                    (isString(e.tagName) &&
                      "FORM" == e.tagName.toUpperCase() &&
                      (isFunc(e.getAttribute) || isObject(e.getAttribute)) &&
                      isString(e.getAttribute("action")) &&
                      -1 !=
                        e
                          .getAttribute("action")
                          .indexOf("securepaths.com/pixel")) ||
                    (isCollection(e.children) &&
                      0 < e.children.length &&
                      isDefinedAndNotNull(e.children[0]) &&
                      isString(e.children[0].tagName) &&
                      "IFRAME" == e.children[0].tagName.toUpperCase() &&
                      isString(e.children[0].name) &&
                      -1 != e.children[0].name.indexOf("securepaths_iframe")))
                );
              },
              makeElementContentExempt = function (e) {
                return (
                  isDefinedAndNotNull(e) &&
                    isString(e.className) &&
                    -1 == e.className.indexOf("LeadiD-ignore-element") &&
                    (e.className += " LeadiD-ignore-element"),
                  makeElementMutationExempt(e),
                  e
                );
              },
              isElementContentExempt = function (e) {
                return (
                  !!isDefinedAndNotNull(e) &&
                  !(
                    !isString(e.className) ||
                    -1 == e.className.indexOf("LeadiD-ignore-element")
                  )
                );
              },
              makeElementFormcaptureExempt = function (e) {
                return (
                  isDefinedAndNotNull(e) &&
                    isString(e.className) &&
                    (e.className += " LeadiD-ignore-formcapture"),
                  e
                );
              },
              isElementFormcaptureExempt = function (e) {
                return !!(
                  isDefinedAndNotNull(e) &&
                  ((isString(e.className) &&
                    isDefinedAndNotNull(e) &&
                    -1 != e.className.indexOf("LeadiD-ignore-formcapture")) ||
                    (isDefinedAndNotNull(e.parentNode) &&
                      isString(e.parentNode.tagName) &&
                      "FORM" == e.parentNode.tagName.toUpperCase() &&
                      (isFunc(e.parentNode.getAttribute) ||
                        isObject(e.parentNode.getAttribute)) &&
                      isString(e.parentNode.getAttribute("action")) &&
                      -1 !=
                        e.parentNode
                          .getAttribute("action")
                          .indexOf("securepaths.com/pixel")))
                );
              },
              compare = function (e, t, n) {
                return "eq" == n ? e == t : "ne" == n ? e != t : null;
              };
            function typeCast(e, t) {
              return "boolean" == typeof e ? "true" === t : t;
            }
            function _contains(e, t) {
              var n,
                i,
                r = [];
              if (e && t)
                for (o(e); r.length; ) {
                  if ((i = r.pop()) === t) return !0;
                  o(i);
                }
              return !1;
              function o(e) {
                for (n = e.childNodes.length - 1; 0 <= n; --n)
                  r.push(e.childNodes[n]);
              }
            }
            var nodeContains = (() => {
              if ("function" == typeof Node && !Node.prototype.contains)
                return _contains;
              var e,
                t = document.createElement("DIV"),
                n = document.createTextNode("test"),
                i = t.contains;
              try {
                t.appendChild(n), (e = t.contains(t.childNodes[0]));
              } catch (e) {
                return _contains;
              }
              return !1 === e
                ? function (e, t) {
                    return !t.nodeType ||
                      1 !== t.nodeType ||
                      (1 !== e.nodeType && 9 !== e.nodeType)
                      ? _contains(e, t)
                      : i.call(e, t);
                  }
                : Node.prototype.contains
                ? function (e, t) {
                    return Node.prototype.contains.call(e, t);
                  }
                : function (e, t) {
                    return i.call(e, t);
                  };
            })();
            function applyTemplateVariables(e) {
              return (e = (e = e.replace("[token]", base.token)).replace(
                "[lck]",
                base.getLck()
              ));
            }
            function isEmail(e) {
              return (
                util.isString(e) &&
                /^(?!("?(\\[ -~]|[^"])"?){255,})(?!("?(\\[ -~]|[^"])"?){65,}@)([!#-'*+\/-9=?^-~-]+|"(([\x01-\x08\x0B\x0C\x0E-!#-\[\]-\x7F]|\\[\x00-\xFF]))*")(\.([!#-'*+\/-9=?^-~-]+|"(([\x01-\x08\x0B\x0C\x0E-!#-\[\]-\x7F]|\\[\x00-\xFF]))*"))*@((?![a-z0-9-]{64,})([a-z0-9]([a-z0-9-]*[a-z0-9])?)(\.(?![a-z0-9-]{64,})([a-z0-9]([a-z0-9-]*[a-z0-9])?)){0,126}|\[((IPv6:(([a-f0-9]{1,4})(:[a-f0-9]{1,4}){7}|(?!(.*[a-f0-9][:\]]){8,})([a-f0-9]{1,4}(:[a-f0-9]{1,4}){0,6})?::([a-f0-9]{1,4}(:[a-f0-9]{1,4}){0,6})?))|((IPv6:([a-f0-9]{1,4}(:[a-f0-9]{1,4}){5}:|(?!(.*[a-f0-9]:){6,})([a-f0-9]{1,4}(:[a-f0-9]{1,4}){0,4})?::(([a-f0-9]{1,4}(:[a-f0-9]{1,4}){0,4}):)?))?(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}))\])$/i.test(
                  e.trim()
                )
              );
            }
            function hideElement(e) {
              return (
                isHTMLElement(e) &&
                  (e.setAttribute("width", 0),
                  e.setAttribute("height", 0),
                  e.setAttribute("frameborder", 0),
                  (e.style.width = 0),
                  (e.style.height = 0),
                  (e.style.border = "none")),
                e
              );
            }
            function isHTMLElement(e) {
              return "object" == typeof HTMLElement
                ? e instanceof HTMLElement
                : !(
                    !e ||
                    "object" != typeof e ||
                    1 !== e.nodeType ||
                    "string" != typeof e.nodeName
                  );
            }
            function isSensitiveData(e) {
              if (isDefined(e.type) && "password" == e.type.toLowerCase())
                return !0;
              (label = isDefined(e.label) ? e.label : ""),
                (id = isDefined(e.id) ? e.id : ""),
                (name = isDefined(e.name) ? e.name : "");
              for (var t = 0; t < util.sensitiveDataPatterns.length; t++) {
                var n = new RegExp(util.sensitiveDataPatterns[t], "i");
                if (n.test(label) || n.test(id) || n.test(name)) return !0;
              }
              return !1;
            }
            function getSelectAllAttr(e) {
              var t = null;
              return (t =
                (e.className &&
                  -1 <
                    e.className
                      .toUpperCase()
                      .indexOf("LEADID_TCPA_BRANDNAMES_SELECTALL")) ||
                (e.id &&
                  "LEADID_TCPA_BRANDNAMES_SELECTALL" == e.id.toUpperCase()) ||
                (e.name &&
                  "LEADID_TCPA_BRANDNAMES_SELECTALL" == e.name.toUpperCase())
                  ? "1"
                  : t);
            }
            function getSelectAllBrandNames() {
              for (
                var e = [],
                  t = document.querySelectorAll(
                    'input[id*="LEADID_TCPA_BRANDNAME"], input[name*="LEADID_TCPA_BRANDNAME"], input[id*="leadid_tcpa_brandname"], input[name*="leadid_tcpa_brandname"], input[class*="LEADID_TCPA_BRANDNAME"], input[class*="leadid_tcpa_brandname"]'
                  ),
                  n = 0;
                n < t.length;
                n++
              ) {
                var i = t[n],
                  r = i.id || i.name || i.className || "";
                r &&
                  r.toUpperCase().indexOf("LEADID_TCPA_BRANDNAMES_SELECTALL") <=
                    -1 &&
                  i.type &&
                  "checkbox" == i.type.toLowerCase() &&
                  (((elementEntry = {}).id = i.id || ""),
                  (elementEntry.name = i.name || ""),
                  (elementEntry.className = i.className || ""),
                  (elementEntry.checked = i.checked),
                  e.push(elementEntry));
              }
              return e;
            }
            function saveSelectAllBrandNames() {
              var e = getSelectAllBrandNames();
              localStorage.setItem("LEADID_TCPA_BRANDNAMES", JSON.stringify(e));
            }
            function loadSelectAllBrandNames() {
              return localStorage.getItem("LEADID_TCPA_BRANDNAMES");
            }
            function getChangedBrandNameElements() {
              var e = [],
                t = loadSelectAllBrandNames();
              if ((t = t && JSON.parse(t)))
                for (var n, i = 0; i < t.length; i++) {
                  if (t[i].id) n = document.getElementById(t[i].id);
                  else if (t[i].name)
                    n = document.getElementsByName(t[i].name)[0];
                  else {
                    if (!t[i].className) continue;
                    n = document.getElementsByClassName(t[i].className)[0];
                  }
                  n && n.checked != t[i].checked && e.push(n);
                }
              return e;
            }
            function getIsThereAnySelectAll() {
              for (
                var e = document.querySelectorAll('input[type="checkbox"]'),
                  t = 0;
                t < e.length;
                t++
              )
                if (getSelectAllAttr(e[t])) return !0;
              return !1;
            }
            return (
              (util.sensitiveDataPatterns = [
                "(password|contraseÃ±a)",
                "^pwd$|^login_pass$|ssn",
              ]),
              (util.sensitiveDataElements = []),
              (util.getSelectAllAttr = getSelectAllAttr),
              (util.getSelectAllBrandNames = getSelectAllBrandNames),
              (util.saveSelectAllBrandNames = saveSelectAllBrandNames),
              (util.loadSelectAllBrandNames = loadSelectAllBrandNames),
              (util.getChangedBrandNameElements = getChangedBrandNameElements),
              (util.isThereAnySelectAll = getIsThereAnySelectAll()),
              (util.getIsThereAnySelectAll = getIsThereAnySelectAll),
              (util.isSensitiveData = isSensitiveData),
              (util.getLeadiDElement = getLeadiDElement),
              (util.getCurrentTime = getCurrentTime),
              (util.getQueryVariable = getQueryVariable),
              (util.comparePosition = comparePosition),
              (util.getStyle = getStyle),
              (util.loadJS = loadJS),
              (util.clearScripts = clearScripts),
              (util.clone = clone),
              (util.objectDiff = objectDiff),
              (util.compressWhitespace = compressWhitespace),
              (util.getWrapperElement = getWrapperElement),
              (util.getStyleInPixels = getStyleInPixels),
              (util.isDefined = isDefined),
              (util.isArray = isArray),
              (util.isFunc = isFunc),
              (util.isString = isString),
              (util.isNum = isNum),
              (util.isBool = isBool),
              (util.isPrimitive = isPrimitive),
              (util.isObject = isObject),
              (util.isNull = isNull),
              (util.isDefinedAndNotNull = isDefinedAndNotNull),
              (util.isType = isType),
              (util.inFrame = inFrame),
              (util.inArray = inArray),
              (util.inObject = inObject),
              (util.isEmpty = isEmpty),
              (util.isCollection = isCollection),
              (util.nodeListToArray = nodeListToArray),
              (util.makeElementFormcaptureExempt = makeElementFormcaptureExempt),
              (util.isElementFormcaptureExempt = isElementFormcaptureExempt),
              (util.makeElementMutationExempt = makeElementMutationExempt),
              (util.isElementMutationExempt = isElementMutationExempt),
              (util.makeElementContentExempt = makeElementContentExempt),
              (util.isElementContentExempt = isElementContentExempt),
              (util.compare = compare),
              (util.applyTemplateVariables = applyTemplateVariables),
              (util.typeCast = typeCast),
              (util.objectLength = objectLength),
              (util.getGuid = getGuid),
              (util.mergeObjects = mergeObjects),
              (util.nodeContains = nodeContains),
              (util.isEmail = isEmail),
              (util.hideElement = hideElement),
              (util.isHTMLElement = isHTMLElement),
              (util.getCurrentProtocol = getCurrentProtocol),
              util
            );
          }
          try {
            base.util = new Util();
          } catch (error) {
            base.logError(error, "Util module loading");
          }
        })(LeadiD);
      } catch (error) {
        LeadiD.logError(error, "Util module parsing");
      }
      try {
        ((t) => {
          var n = "LeadiD-element-id",
            i = 0;
          (t.getElementId = function (e) {
            if (!t.isDefined(e[n]))
              try {
                e[n] = i++;
              } catch (e) {
                return;
              }
            return e[n];
          }),
            (t.ELEMENT_ID_ATTRIBUTE = n);
        })(LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Element Id module parsing");
      }
      try {
        ((v, b) => {
          b.events = new (function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              a = {};
            function s(e) {
              return (
                !!a.hasOwnProperty(e) ||
                !(a[e] = {
                  elements: {},
                  events: {},
                  handlers: {},
                  useCapture: {},
                })
              );
            }
            function l(e, t, n, i, r) {
              var o;
              for (
                s(e);
                (o = String((1e9 * Math.random()) >>> 0)) in a[e].elements;
  
              );
              return (
                (a[e].elements[o] = t),
                (a[e].events[o] = n),
                (a[e].handlers[o] = i),
                b.isDefined(r) && (a[e].useCapture[o] = r),
                o
              );
            }
            var u,
              d = !0,
              c = !0;
            function f(e, t) {
              return s(e) && b.inObject(t, a[e].elements);
            }
            if (document.addEventListener) {
              try {
                new CustomEvent("LeadiDtest", {});
              } catch (e) {
                d = !1;
              }
              try {
                document.createEvent("CustomEvent");
              } catch (e) {
                c = !1;
              }
              v.log("event support", v.LOG_TYPES.DEBUG, "Events module", {
                eventConstructorSupported: d,
                customEventsSupported: c,
              }),
                (e = function (e, t, n, i) {
                  v.log("bindOnce()", v.LOG_TYPES.DEBUG, "Events module", {
                    event: t,
                    element: e.toString(),
                    elementId: e.id || "",
                  }),
                    f(t, e) ||
                      (l(t, e, t, n, (i = i || !1)), e.addEventListener(t, n, i));
                }),
                (t = function (e, t, n, i) {
                  return (
                    v.log(
                      "bindEventHandler()",
                      v.LOG_TYPES.DEBUG,
                      "Events module",
                      { event: t, element: e.toString(), elementId: e.id || "" }
                    ),
                    e.addEventListener(t, n, (i = i || !1)),
                    l(t, e, t, n, i)
                  );
                }),
                (i = c
                  ? function (t, n) {
                      function e(e) {
                        t == e.type &&
                          n.apply(this, Array.prototype.slice.call(arguments));
                      }
                      return (
                        document.addEventListener(t, e, !1),
                        l(t, document, t, e, !1)
                      );
                    }
                  : function (t, n) {
                      function e(e) {
                        t == e.type && n.call(this, { type: t, detail: u });
                      }
                      return (
                        document.addEventListener(t, e, !1),
                        l(t, document, t, e, !1)
                      );
                    }),
                (o = d
                  ? function (e, t) {
                      v.log(
                        "Firing custom event",
                        v.LOG_TYPES.DEBUG,
                        "Events module",
                        { event: e }
                      );
                      e = new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: t,
                      });
                      document.dispatchEvent(e);
                    }
                  : c
                  ? function (e, t) {
                      v.log(
                        "Firing custom event",
                        v.LOG_TYPES.DEBUG,
                        "Events module",
                        { event: e }
                      );
                      var n = document.createEvent("CustomEvent");
                      n.initCustomEvent(e, !0, !0, t), document.dispatchEvent(n);
                    }
                  : function (e, t) {
                      v.log(
                        "Firing custom event",
                        v.LOG_TYPES.DEBUG,
                        "Events module",
                        { event: e }
                      );
                      var n = document.createEvent("UIEvent"),
                        i = (1e9 * Math.random()) >>> 0;
                      (u = b.isDefined(t) ? t : null),
                        n.initUIEvent(e, !0, !0, window, i),
                        document.dispatchEvent(n);
                    });
            } else
              document.attachEvent &&
                ((e = function (e, t, n) {
                  v.log("bindOnce()", v.LOG_TYPES.DEBUG, "Events module", {
                    event: t,
                    element: e.toString(),
                    elementId: e.id || "",
                  }),
                    f(t, e) || (l(t, e, "on" + t, n), e.attachEvent("on" + t, n));
                }),
                (t = function (e, t, n) {
                  return (
                    v.log(
                      "bindEventHandler()",
                      v.LOG_TYPES.DEBUG,
                      "Events module",
                      { event: t, element: e.toString(), elementId: e.id || "" }
                    ),
                    s(t),
                    e.attachEvent("on" + t, n),
                    l(t, e, "on" + t, n)
                  );
                }),
                (i = function (t, n) {
                  b.isDefined(document.body["LeadiD" + t]) ||
                    (document.body["LeadiD" + t] = 0);
                  function e(e) {
                    "LeadiD" + t == e.propertyName &&
                      n.call(this, e.srcElement[e.propertyName]);
                  }
                  return (
                    document.body.attachEvent("onpropertychange", e),
                    l(t, document.body, "onpropertychange", e)
                  );
                }),
                (o = function (e, t) {
                  v.log(
                    "Firing custom event",
                    v.LOG_TYPES.DEBUG,
                    "Events module",
                    { event: e }
                  ),
                    b.isDefined(document.body["LeadiD" + e]) &&
                      (document.body["LeadiD" + e] = {
                        type: e,
                        detail: t,
                        trigger: Math.random(),
                      });
                }));
            function m(e, t) {
              if (a.hasOwnProperty(t))
                for (var n in a[t].elements) if (e == a[t].elements[n]) return n;
              return -1;
            }
            function g(e, t) {
              delete a[e].elements[t],
                delete a[e].events[t],
                delete a[e].handlers[t],
                delete a[e].useCapture[t];
            }
            function p(e) {
              if (a.hasOwnProperty(e))
                for (var t in a[e].elements) n(a[e].elements[t], e);
            }
            function h() {
              for (var e in a) a.hasOwnProperty(e) && p(e);
            }
            document.removeEventListener
              ? ((n = function (e, t, n) {
                  v.log("unbindEvent()", v.LOG_TYPES.DEBUG, "Events module", {
                    event: t,
                    element: e.toString(),
                    elementId: n || "",
                  });
                  n = n || m(e, t);
                  -1 != n &&
                    (e.removeEventListener(
                      a[t].events[n],
                      a[t].handlers[n],
                      a[t].useCapture[n]
                    ),
                    g(t, n));
                }),
                (r = function (e, t) {
                  v.log(
                    "unbindCustomEventHandler()",
                    v.LOG_TYPES.DEBUG,
                    "Events module",
                    { event: e, elementId: t || "" }
                  ),
                    b.isDefined(t) &&
                      (document.removeEventListener(e, a[e].handlers[t], !1),
                      g(e, t));
                }))
              : document.detachEvent &&
                ((n = function (e, t, n) {
                  v.log("unbindEvent()", v.LOG_TYPES.DEBUG, "Events module", {
                    event: t,
                    element: e.toString(),
                    elementId: n || "",
                  });
                  n = n || m(e, t);
                  -1 != n &&
                    (e.detachEvent(a[t].events[n], a[t].handlers[n]), g(t, n));
                }),
                (r = function (e, t) {
                  v.log(
                    "unbindCustomEventHandler()",
                    v.LOG_TYPES.DEBUG,
                    "Events module",
                    { event: e, elementId: t || "" }
                  ),
                    document.body.detachEvent(
                      "onpropertychange",
                      a[e].handlers[t]
                    ),
                    g(e, t);
                })),
              (d = function (e, t) {
                var n = i(e, function () {
                  t.apply(this, Array.prototype.slice.call(arguments)), r(e, n);
                });
                return n;
              }),
              (this.bindOnce = e),
              (this.bindEventHandler = t),
              (this.unbindEvent = n),
              (this.addCustomEventHandler = i),
              (this.addOneShotCustomEventHandler = d),
              (this.unbindCustomEventHandler = r),
              (this.fireCustomEvent = o),
              (this.clearAllHandlersForEvent = p),
              (this.clearAllEventHandlers = h),
              "function" == typeof LeadiDMakeGlobalFunction &&
                LeadiDMakeGlobalFunction({
                  boundEvents: a,
                  clearAllEventHandlers: h,
                });
          })();
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Events module parsing");
      }
      try {
        ((m, g) => {
          var p, t, n, i, h, e, r, o;
          function l(e) {
            return (
              "http:" === e.substring(0, 5)
                ? (e = "https:" + e.substring(5))
                : "//" === e.substring(0, 2) && (e = "https://" + e.substring(2)),
              e
            );
          }
          function a(e, t, n, i) {
            var r = new RegExp("[\\?|&]" + t + "=.");
            return (!i && r.test(e)) || !n
              ? e
              : i && i.test(e)
              ? e.replace(i, "$1" + t + "=" + n)
              : e + (/\?/.test(e) ? "&" : "?") + t + "=" + n;
          }
          function s() {
            if (!window.XDomainRequest)
              throw new Error("XDomainRequest is not supported");
            (this.name = "XDomainTransport"),
              (this._performRequest = function (t, n, i) {
                var e = new XDomainRequest(),
                  r = this._objToQueryString(n),
                  o = this;
                return (
                  (e.onload =
                    e.onprogress =
                    e.ontimeout =
                    e.onerror =
                      function () {}),
                  (e.readyState = this.READYSTATE_COMPLETE),
                  (e.urlSent = t),
                  i &&
                    (e.onload = function () {
                      i(e);
                    }),
                  (e.clearCallback = function () {
                    e.onload = function () {};
                  }),
                  e.open("POST", t),
                  setTimeout(function () {
                    try {
                      e.send(r);
                    } catch (e) {
                      o.onError(e, t, n, i);
                    }
                  }, 0),
                  e
                );
              });
          }
          function u() {
            if (!window.XMLHttpRequest)
              throw new Error("XMLHttpRequest is not supported");
            function a(e) {
              return (
                !(!g.isDefinedAndNotNull(e) || !g.isNum(e.status)) &&
                200 <= e.status &&
                e.status < 300
              );
            }
            (this.name = "XmlHttpTransport"),
              (this._performRequest = function (e, t, n) {
                var i = new XMLHttpRequest(),
                  r = this,
                  o = this._objToQueryString(t);
                return (
                  (e = l(e)),
                  (i.urlSent = e),
                  (i.onreadystatechange = function () {
                    this.readyState === r.READYSTATE_COMPLETE &&
                      (a(i)
                        ? n && n(i)
                        : i.status
                        ? (g.isString(e) &&
                            -1 !== e.indexOf(m.getLoggingUrl())) ||
                          m.log(
                            "XHR status " + i.status,
                            m.LOG_TYPES.ERROR,
                            "XmlHttpTransport",
                            { requestUrl: e }
                          )
                        : window.setTimeout(function () {
                            g.api.getTransport().name === r.name
                              ? r.onError("XHR status 0", e, t, n)
                              : m.log(
                                  "Duplicate Status 0 onError()",
                                  m.LOG_TYPES.DEBUG,
                                  "Api module"
                                );
                          }, 50));
                  }),
                  (i.clearCallback = function () {
                    i.onreadystatechange = function () {};
                  }),
                  i.open("POST", e, !0),
                  i.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  ),
                  i.send(o),
                  i
                );
              }),
              "function" == typeof LeadiDMakeGlobalFunction &&
                LeadiDMakeGlobalFunction({ _is200SeriesResponse: a });
          }
          function v(n) {
            var s = this;
            (this.name = "IframeTransport"),
              (this.wrappedCallbacks = {}),
              (this.REQUEST_TIMEOUT = 4e5),
              (this._onMessageHandler = function (e) {
                try {
                  var t, n, i;
                  g.isDefinedAndNotNull(m.apiURL) &&
                    0 ===
                      LeadiD.apiURL
                        .replace(/^https?:\/\//, "//")
                        .indexOf(e.origin.replace(/^https?:\/\//, "//")) &&
                    ((t = e.data.split(",")),
                    (n = decodeURIComponent(t[0])),
                    (i = decodeURIComponent(t[1])) in s.wrappedCallbacks) &&
                    s.wrappedCallbacks[i](n);
                } catch (e) {
                  m.logError(e, "Api iframe _onMessageHandler");
                }
              }),
              g.events.bindEventHandler(
                window,
                "message",
                this._onMessageHandler
              ),
              (this._cleanUpRequest = function (e, t) {
                var n = g.getWrapperElement(),
                  i = document.getElementById(
                    "iframe_request" + t.requestIdentifier
                  );
                window.clearTimeout(t.iframeCleanupTimeout),
                  (t.readyState = p.READYSTATE_COMPLETE),
                  (t.status = 200),
                  (t.responseText = e),
                  delete s.wrappedCallbacks[t.requestIdentifier],
                  g.isDefinedAndNotNull(i) && n.removeChild(i);
              }),
              (this._triggerOriginalCallback = function (e, t, n) {
                s._cleanUpRequest(e, t), n(t);
              }),
              (this._buildCallbackWrapper = function (t, n) {
                return t
                  ? function (e) {
                      s._triggerOriginalCallback(e, n, t);
                    }
                  : function (e) {
                      s._cleanUpRequest(e, n);
                    };
              }),
              (this._createRequestObject = function (e, t) {
                var n = {
                    readyState: p.READYSTATE_LOADING,
                    requestIdentifier: e,
                  },
                  i = s._buildCallbackWrapper(null, n);
                return (
                  (n.abort = function () {
                    i("", n);
                  }),
                  (n.clearCallback = function () {
                    s.wrappedCallbacks[e] = i;
                  }),
                  (n.iframeCleanupTimeout = window.setTimeout(function () {
                    (g.isString(t) && -1 !== t.indexOf(m.getLoggingUrl())) ||
                      m.logError("Iframe request timed out", "Api module", {
                        requestUrl: t,
                      }),
                      s._cleanUpRequest("", n);
                  }, s.REQUEST_TIMEOUT)),
                  n
                );
              }),
              (this._submitDataViaIframe = function (e, t, n) {
                var i, r, o, a;
                for (a in ((e.request_identifier = n.requestIdentifier),
                (i = document.createDocumentFragment()),
                (r = document.createElement("FORM")).setAttribute(
                  "enctype",
                  "multipart/form-data"
                ),
                r.setAttribute("method", "post"),
                r.setAttribute("action", t),
                g.makeElementContentExempt(r),
                i.appendChild(r),
                e))
                  (o = document.createElement("input")).setAttribute(
                    "type",
                    "hidden"
                  ),
                    o.setAttribute("name", a),
                    o.setAttribute("value", e[a]),
                    r.appendChild(o);
                ((t = document.createElement("IFRAME")).src = "about:blank"),
                  (t.title = "^"),
                  (t.style.display = "none"),
                  (t.id = "iframe_request" + n.requestIdentifier),
                  g.makeElementContentExempt(t),
                  g.getWrapperElement().appendChild(t),
                  t.contentDocument && t.contentDocument.body
                    ? t.contentDocument.body.appendChild(i)
                    : t.contentWindow && t.contentWindow.document.appendChild(i),
                  s._submitForm(r);
              }),
              (this._createIframeUrl = function (e) {
                var t = (e = !1 === n ? l(e) : e).indexOf("?");
                return (
                  -1 === t
                    ? (e += ".iframe")
                    : (e = e.substring(0, t) + ".iframe" + e.substring(t)),
                  e
                );
              }),
              (this._performRequest = function (e, t, n) {
                var i,
                  r = (1e9 * Math.random()) >>> 0;
                return (
                  (e = s._createIframeUrl(e)),
                  (i = s._createRequestObject(r, e)),
                  (s.wrappedCallbacks[r] = s._buildCallbackWrapper(n, i)),
                  s._submitDataViaIframe(t, e, i),
                  i
                );
              });
          }
          function b(e) {
            return d(c(E(e)));
          }
          function y(e) {
            return (
              (e.lac = g.isDefined(e.lac) ? e.lac : m.getLac()),
              (e.client_time = g.isDefined(e.client_time)
                ? e.client_time
                : g.getCurrentTime()),
              e
            );
          }
          function d(e) {
            return a(e, "token", m.token);
          }
          function E(e) {
            var t = a(e, "msn", n);
            return (
              t !== e &&
                g.isString(e) &&
                -1 === e.indexOf(m.getLoggingUrl()) &&
                n++,
              t
            );
          }
          function c(e) {
            return a(e, "pid", i);
          }
          function D(t) {
            var n = !1;
            return function (e) {
              if (
                !(
                  !1 !== n ||
                  (g.isDefinedAndNotNull(e) &&
                    g.isNum(e.status) &&
                    0 === e.status)
                )
              ) {
                n = !0;
                try {
                  t(e);
                } catch (e) {
                  m.logError(e, "Api module callback");
                }
              }
            };
          }
          function L(e, t, n, i) {
            return (
              g.isObject(i) || (i = {}),
              (i = g.mergeObjects({ callBeforePerformRequest: !0 }, i)),
              (e = b(e)),
              (t = y(t)),
              g.isFunc(n) && (n = D(n)),
              !0 === i.callBeforePerformRequest &&
                ((e = (i = o.beforePerformRequest(e, t, n)).url || e),
                (t = i.data || t),
                (n = i.callback || n)),
              h.performRequest(e, t, n)
            );
          }
          (p = new (function () {
            (this.READYSTATE_UNSENT = 0),
              (this.READYSTATE_OPENED = 1),
              (this.READYSTATE_HEADERS_RECEIVED = 2),
              (this.READYSTATE_LOADING = 3),
              (this.READYSTATE_COMPLETE = 4),
              (this.name = "RequestTransport"),
              (this._objToQueryString = function (e) {
                var t,
                  n = [];
                for (t in e)
                  e.hasOwnProperty(t) &&
                    n.push(t + "=" + encodeURIComponent(e[t]));
                return n.join("&");
              }),
              (this._appendAntiCacheToken = function (e) {
                return a(e, "_", t++, /([?&])_=[^&]*/);
              }),
              (this._performRequest = function (e, t, n) {
                throw new Error(
                  'The function "performRequest" has not been implemented for ' +
                    this.name
                );
              }),
              (this.performRequest = function (t, n, i) {
                try {
                  return (
                    (t = this._appendAntiCacheToken(t)),
                    (g.isString(t) && -1 !== t.indexOf(m.getLoggingUrl())) ||
                      m.log("API request", m.LOG_TYPES.DEBUG, "Api module", {
                        url: t,
                        transport: this.name,
                      }),
                    this._performRequest(t, n, i)
                  );
                } catch (e) {
                  return this.onError(e, t, n, i);
                }
              }),
              (this.logError = function (e, t, n, i) {
                (g.isString(t) && -1 !== t.indexOf(m.getLoggingUrl())) ||
                  ("XHR status 0" === e
                    ? m.log(
                        "XHR status 0",
                        m.LOG_TYPES.INFO,
                        "XmlHttpTransport",
                        { requestUrl: t }
                      )
                    : m.logError(e, this.name + ".call", { requestUrl: t }));
              }),
              (this.onError = this.logError);
          })()),
            ((v.prototype = u.prototype = s.prototype = p)._submitForm =
              function (e) {
                e.submit();
              }),
            (g.api =
              ((e = function (e, t, n, i) {
                var r, o;
                (g.isString(t) && -1 !== t.indexOf(m.getLoggingUrl())) ||
                  m.log("_iframeFallback", m.LOG_TYPES.DEBUG, "Api module"),
                  (t = b(t)),
                  (r = new v(m.useInsecureIframes)).performRequest(t, n, i),
                  (o = h),
                  -1 === t.indexOf(m.getLoggingUrl()) && (h = r),
                  o.logError(e, t, n, i);
              }),
              ((o = {}).initialize = r =
                function () {
                  (t = (1e9 * Math.random()) >>> 0),
                    (n = 1),
                    (i = g.getGuid()),
                    window.XMLHttpRequest
                      ? ((h = new u()).onError = e)
                      : window.XDomainRequest
                      ? ((h = new s()).onError = e)
                      : (h = new v(m.useInsecureIframes));
                }),
              (o.requestTransport = p),
              (o.getTransport = function () {
                return h;
              }),
              (o.setTransport = function (e) {
                h = e;
              }),
              (o.doApiCall = L),
              (o.beforePerformRequest = function (e, t, n) {
                return { url: e, data: t, callback: n };
              }),
              (o.doIntervalApiCall = function (e, t, n, i) {
                var r,
                  o = [],
                  a = 0,
                  s = h,
                  l = !1,
                  u = 2e3,
                  d = 5;
                function c() {
                  m.log("stopRetrying()", m.LOG_TYPES.DEBUG, "Api module"),
                    clearInterval(r);
                }
                function f(e) {
                  if (
                    (m.log("finish()", m.LOG_TYPES.DEBUG, "Api module"),
                    !(
                      l ||
                      (g.isDefinedAndNotNull(e) &&
                        g.isNum(e.status) &&
                        0 === e.status)
                    ))
                  ) {
                    (l = !0), c(), n && n(e);
                    for (var t = 0; t < o.length; t++)
                      try {
                        o[t].readyState &&
                          p.READYSTATE_COMPLETE != o[t].readyState &&
                          (m.log(
                            "Aborting requestObjects[" + t + "]",
                            m.LOG_TYPES.DEBUG,
                            "Api module"
                          ),
                          o[t].clearCallback(),
                          o[t].abort());
                      } catch (e) {
                        m.logError(e, "Api module");
                      }
                  }
                }
                g.isFunc(n) && (n = D(n)),
                  (e = E(e)),
                  g.isObject(i) &&
                    g.isNum(i.robustTimeout) &&
                    (u = i.robustTimeout),
                  g.isObject(i) &&
                    g.isNum(i.robustMaxRetries) &&
                    (d = i.robustMaxRetries),
                  (r = setInterval(function () {
                    l ||
                      (d <= ++a
                        ? (m.log(
                            "clearInterval(intervalID)",
                            m.LOG_TYPES.DEBUG,
                            "Api module"
                          ),
                          clearInterval(r),
                          (t = y(t)),
                          (e = b(e)),
                          new v(m.useInsecureIframes).performRequest(e, t, f))
                        : s != h
                        ? c()
                        : o.push(L(e, t, f, { callBeforePerformRequest: !1 })));
                  }, u)),
                  o.push(L(e, t, f, { callBeforePerformRequest: !1 }));
              }),
              "function" == typeof LeadiDMakeGlobalFunction &&
                LeadiDMakeGlobalFunction({
                  _appendLeadidToken: d,
                  _appendMessageSequenceNumber: E,
                  _appendPageIdentifier: c,
                  _iframeFallback: e,
                  _getSingleUseCallback: D,
                }),
              r(),
              o)),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({ IframeTransport: v });
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Api module parsing");
      }
      try {
        LeadiD, (LeadiD.util.isIE = new Function("return/*@cc_on!@*/!1")());
      } catch (err) {
        LeadiD.logError(err, "isIe module parsing");
      }
      try {
        !(function (base, util, events) {
          (base.PluginDetect = {
            version: "0.8.7",
            name: "PluginDetect",
            openTag: "<",
            hasOwnProperty: {}.constructor.prototype.hasOwnProperty,
            hasOwn: function (e, t) {
              var n;
              try {
                n = this.hasOwnProperty.call(e, t);
              } catch (e) {}
              return !!n;
            },
            rgx: {
              str: /string/i,
              num: /number/i,
              fun: /function/i,
              arr: /array/i,
              any: /Boolean|String|Number|Function|Array|Date|RegExp|Error/i,
            },
            toString: {}.constructor.prototype.toString,
            isPlainObject: function (e) {
              var t = this;
              if (
                !e ||
                t.rgx.any.test(t.toString.call(e)) ||
                e.window == e ||
                t.rgx.num.test(t.toString.call(e.nodeType))
              )
                return 0;
              try {
                if (
                  !t.hasOwn(e, "constructor") &&
                  !t.hasOwn(e.constructor.prototype, "isPrototypeOf")
                )
                  return 0;
              } catch (e) {
                return 0;
              }
              return 1;
            },
            isDefined: function (e) {
              return void 0 !== e;
            },
            isArray: function (e) {
              return this.rgx.arr.test(this.toString.call(e));
            },
            isString: function (e) {
              return this.rgx.str.test(this.toString.call(e));
            },
            isNum: function (e) {
              return this.rgx.num.test(this.toString.call(e));
            },
            isStrNum: function (e) {
              return this.isString(e) && /\d/.test(e);
            },
            isFunc: function (e) {
              return this.rgx.fun.test(this.toString.call(e));
            },
            getNumRegx: /[\d][\d\.\_,\-]*/,
            splitNumRegx: /[\.\_,\-]/g,
            getNum: function (e, t) {
              t = this.isStrNum(e)
                ? (this.isDefined(t) ? new RegExp(t) : this.getNumRegx).exec(e)
                : null;
              return t ? t[0] : null;
            },
            compareNums: function (e, t, n) {
              var i,
                r,
                o,
                a = this,
                s = parseInt;
              if (a.isStrNum(e) && a.isStrNum(t)) {
                if (a.isDefined(n) && n.compareNums) return n.compareNums(e, t);
                for (
                  i = e.split(a.splitNumRegx), r = t.split(a.splitNumRegx), o = 0;
                  o < Math.min(i.length, r.length);
                  o++
                ) {
                  if (s(i[o], 10) > s(r[o], 10)) return 1;
                  if (s(i[o], 10) < s(r[o], 10)) return -1;
                }
              }
              return 0;
            },
            formatNum: function (e, t) {
              var n, i;
              if (!this.isStrNum(e)) return null;
              for (
                this.isNum(t) || (t = 4),
                  t--,
                  i = e
                    .replace(/\s/g, "")
                    .split(this.splitNumRegx)
                    .concat(["0", "0", "0", "0"]),
                  n = 0;
                n < 4;
                n++
              )
                /^(0+)(.+)$/.test(i[n]) && (i[n] = RegExp.$2),
                  (t < n || !/\d/.test(i[n])) && (i[n] = "0");
              return i.slice(0, 4).join(",");
            },
            getPROP: function (e, t, n) {
              try {
                e && (n = e[t]);
              } catch (e) {}
              return n;
            },
            findNavPlugin: function (e) {
              if (e.dbug) return e.dbug;
              if (window.navigator) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s = this,
                  l = {
                    Find: s.isString(e.find) ? new RegExp(e.find, "i") : e.find,
                    Find2: s.isString(e.find2)
                      ? new RegExp(e.find2, "i")
                      : e.find2,
                    Avoid: e.avoid
                      ? s.isString(e.avoid)
                        ? new RegExp(e.avoid, "i")
                        : e.avoid
                      : 0,
                    Num: e.num ? /\d/ : 0,
                  },
                  u = navigator.mimeTypes,
                  d = navigator.plugins,
                  c = null;
                if (e.mimes && u)
                  for (
                    r = s.isArray(e.mimes)
                      ? [].concat(e.mimes)
                      : s.isString(e.mimes)
                      ? [e.mimes]
                      : [],
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    n = 0;
                    try {
                      s.isString(r[t]) &&
                        /[^\s]/.test(r[t]) &&
                        (n = u[r[t]].enabledPlugin);
                    } catch (e) {}
                    if (
                      n &&
                      (c = (i = s.findNavPlugin_(n, l)).obj ? i.obj : c) &&
                      !s.dbug
                    )
                      return c;
                  }
                if (e.plugins && d) {
                  for (
                    o = s.isArray(e.plugins)
                      ? [].concat(e.plugins)
                      : s.isString(e.plugins)
                      ? [e.plugins]
                      : [],
                      t = 0;
                    t < o.length;
                    t++
                  ) {
                    n = 0;
                    try {
                      o[t] && s.isString(o[t]) && (n = d[o[t]]);
                    } catch (e) {}
                    if (
                      n &&
                      (c = (i = s.findNavPlugin_(n, l)).obj ? i.obj : c) &&
                      !s.dbug
                    )
                      return c;
                  }
                  if (((a = d.length), s.isNum(a)))
                    for (t = 0; t < a; t++) {
                      n = 0;
                      try {
                        n = d[t];
                      } catch (e) {}
                      if (
                        n &&
                        (c = (i = s.findNavPlugin_(n, l)).obj ? i.obj : c) &&
                        !s.dbug
                      )
                        return c;
                    }
                }
              }
              return c;
            },
            findNavPlugin_: function (e, t) {
              var n = e.description || "",
                i = e.name || "",
                r = {};
              return (
                ((!t.Find.test(n) ||
                  (t.Find2 && !t.Find2.test(i)) ||
                  (t.Num &&
                    !t.Num.test(RegExp.leftContext + RegExp.rightContext))) &&
                  (!t.Find.test(i) ||
                    (t.Find2 && !t.Find2.test(n)) ||
                    (t.Num &&
                      !t.Num.test(RegExp.leftContext + RegExp.rightContext)))) ||
                  (t.Avoid && (t.Avoid.test(n) || t.Avoid.test(i))) ||
                  (r.obj = e),
                r
              );
            },
            getVersionDelimiter: ",",
            findPlugin: function (e) {
              var t = { status: -3, plugin: 0 };
              return (
                this.isString(e) &&
                  (1 == e.length
                    ? (this.getVersionDelimiter = e)
                    : ((e = e.toLowerCase().replace(/\s/g, "")),
                      (e = this.Plugins[e]) &&
                        e.getVersion &&
                        ((t.plugin = e), (t.status = 1)))),
                t
              );
            },
            getPluginFileVersion: function (e, t) {
              var n,
                i,
                r,
                o,
                a = this,
                s = -1;
              if (!e) return t;
              if (!(n = e.version ? a.getNum(e.version + "") : n) || !t)
                return t || n || null;
              for (
                n = a.formatNum(n),
                  i = (t = a.formatNum(t)).split(a.splitNumRegx),
                  r = n.split(a.splitNumRegx),
                  o = 0;
                o < i.length;
                o++
              ) {
                if (-1 < s && s < o && "0" != i[o]) return t;
                if (r[o] != i[o] && (-1 == s && (s = o), "0" != i[o])) return t;
              }
              return n;
            },
            AXO: (() => {
              var e;
              try {
                e = new window.ActiveXObject();
              } catch (e) {}
              return e ? null : window.ActiveXObject;
            })(),
            getAXO: function (e) {
              var t = null;
              try {
                t = new this.AXO(e);
              } catch (e) {}
              return t && (this.browser.ActiveXEnabled = !0), t;
            },
            browser: {},
            INIT: function () {
              this.init.library(this);
            },
            init: {
              $: 1,
              hasRun: 0,
              objProperties: function (e, t, n) {
                var i,
                  r = {};
                if (t && n) {
                  if (1 === t[n[0]] && e.hasOwn(t, n[0]) && e.isPlainObject(t))
                    for (i = 0; i < n.length; i += 2)
                      (t[n[i]] = n[i + 1]), (r[n[i]] = 1);
                  for (i in t)
                    t[i] &&
                      1 === t[i][n[0]] &&
                      e.hasOwn(t, i) &&
                      !e.hasOwn(r, i) &&
                      this.objProperties(e, t[i], n);
                }
              },
              plugin: function (e, t) {
                var n = this.$;
                n.isPlainObject(e) &&
                  n.isFunc(e.getVersion) &&
                  (n.isDefined(e.getVersionDone) ||
                    ((e.installed = null),
                    (e.version = null),
                    (e.version0 = null),
                    (e.getVersionDone = null),
                    (e.pluginName = t)),
                  this.objProperties(n, e, ["$", n, "$$", e]));
              },
              detectIE: function () {
                var init = this,
                  $ = init.$,
                  browser = $.browser,
                  doc = document,
                  e,
                  x,
                  tmp,
                  userAgent = (window.navigator && navigator.userAgent) || "",
                  progid,
                  progid1,
                  progid2;
                (browser.ActiveXFilteringEnabled = !1),
                  (browser.ActiveXEnabled = !1);
                try {
                  browser.ActiveXFilteringEnabled =
                    !!window.external.msActiveXFilteringEnabled();
                } catch (e) {}
                for (
                  progid1 = [
                    "Msxml2.XMLHTTP",
                    "Msxml2.DOMDocument",
                    "Microsoft.XMLDOM",
                    "TDCCtl.TDCCtl",
                    "Shell.UIHelper",
                    "HtmlDlgSafeHelper.HtmlDlgSafeHelper",
                    "Scripting.Dictionary",
                  ],
                    progid2 = [
                      "WMPlayer.OCX",
                      "ShockwaveFlash.ShockwaveFlash",
                      "AgControl.AgControl",
                    ],
                    progid = progid1.concat(progid2),
                    x = 0;
                  x < progid.length && (!$.getAXO(progid[x]) || $.dbug);
                  x++
                );
                if (browser.ActiveXEnabled && browser.ActiveXFilteringEnabled)
                  for (x = 0; x < progid2.length; x++)
                    if ($.getAXO(progid2[x])) {
                      browser.ActiveXFilteringEnabled = !1;
                      break;
                    }
                tmp = doc.documentMode;
                try {
                  doc.documentMode = "";
                } catch (e) {}
                browser.isIE =
                  browser.ActiveXEnabled ||
                  $.isNum(doc.documentMode) ||
                  eval("/*@cc_on!@*/!1");
                try {
                  doc.documentMode = tmp;
                } catch (e) {}
                if (
                  ((browser.verIE = null),
                  browser.isIE &&
                    (browser.verIE =
                      ($.isNum(doc.documentMode) && 7 <= doc.documentMode
                        ? doc.documentMode
                        : 0) ||
                      (/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i.test(
                        userAgent
                      )
                        ? parseFloat(RegExp.$1, 10)
                        : 7)),
                  (browser.verIEtrue = null),
                  (browser.docModeIE = null),
                  browser.isIE)
                ) {
                  var verTrueFloat,
                    obj = doc.createElement("div"),
                    CLASSID = [
                      "{45EA75A0-A269-11D1-B5BF-0000F8051515}",
                      "{3AF36230-A269-11D1-B5BF-0000F8051515}",
                      "{89820200-ECBD-11CF-8B85-00AA005B4383}",
                    ];
                  try {
                    obj.style.behavior = "url(#default#clientcaps)";
                  } catch (e) {}
                  for (x = 0; x < CLASSID.length; x++) {
                    try {
                      browser.verIEtrue = obj
                        .getComponentVersion(CLASSID[x], "componentid")
                        .replace(/,/g, ".");
                    } catch (e) {}
                    if (browser.verIEtrue && !$.dbug) break;
                  }
                  (verTrueFloat = parseFloat(browser.verIEtrue || "0", 10)),
                    (browser.docModeIE =
                      doc.documentMode ||
                      (/back/i.test(doc.compatMode || "") ? 5 : verTrueFloat) ||
                      browser.verIE),
                    (browser.verIE = verTrueFloat || browser.docModeIE);
                }
              },
              detectNonIE: function () {
                var e = this.$,
                  t = e.browser,
                  n = window.navigator ? navigator : {},
                  i = (!t.isIE && n.userAgent) || "",
                  r = n.vendor || "";
                (t.isGecko =
                  /Gecko/i.test(n.product || "") && /Gecko\s*\/\s*\d/i.test(i)),
                  (t.verGecko = t.isGecko
                    ? e.formatNum(
                        /rv\s*\:\s*([\.\,\d]+)/i.test(i) ? RegExp.$1 : "0.9"
                      )
                    : null),
                  (t.isChrome = /(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i.test(i)),
                  (t.verChrome = t.isChrome ? e.formatNum(RegExp.$2) : null),
                  (t.isSafari =
                    !t.isChrome &&
                    (/Apple/i.test(r) || !r) &&
                    /Safari\s*\/\s*(\d[\d\.]*)/i.test(i)),
                  (t.verSafari =
                    t.isSafari && /Version\s*\/\s*(\d[\d\.]*)/i.test(i)
                      ? e.formatNum(RegExp.$1)
                      : null),
                  (t.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(i)),
                  (t.verOpera =
                    t.isOpera && (/Version\s*\/\s*(\d+\.?\d*)/i.test(i), 1)
                      ? parseFloat(RegExp.$1, 10)
                      : null);
              },
              detectPlatform: function () {
                var e = this.$,
                  t = (window.navigator && navigator.platform) || "";
                if (((e.OS = 100), t))
                  for (
                    var n = [
                        "Win",
                        1,
                        "Mac",
                        2,
                        "Linux",
                        3,
                        "FreeBSD",
                        4,
                        "iPhone",
                        21.1,
                        "iPod",
                        21.2,
                        "iPad",
                        21.3,
                        "Win.*CE",
                        22.1,
                        "Win.*Mobile",
                        22.2,
                        "Pocket\\s*PC",
                        22.3,
                        "",
                        100,
                      ],
                      i = n.length - 2;
                    0 <= i;
                    i -= 2
                  )
                    if (n[i] && new RegExp(n[i], "i").test(t)) {
                      e.OS = n[i + 1];
                      break;
                    }
              },
              library: function (e) {
                var t,
                  n = this,
                  i = document;
                for (t in (n.objProperties(e, e, ["$", e]), e.Plugins))
                  e.hasOwn(e.Plugins, t) && n.plugin(e.Plugins[t], t);
                e.PUBLIC.init(),
                  e.win.init(),
                  (e.head =
                    i.getElementsByTagName("head")[0] ||
                    i.getElementsByTagName("body")[0] ||
                    i.body ||
                    null),
                  n.detectPlatform(),
                  n.detectIE(),
                  n.detectNonIE(),
                  (n.hasRun = 1);
              },
            },
            ev: {
              $: 1,
              handler: function (e, t, n, i) {
                return function () {
                  e(t, n, i);
                };
              },
              fPush: function (e, t) {
                var n = this.$;
                n.isArray(t) &&
                  (n.isFunc(e) ||
                    (n.isArray(e) && 0 < e.length && n.isFunc(e[0]))) &&
                  t.push(e);
              },
              call0: function (e) {
                var t = this.$,
                  n = t.isArray(e) ? e.length : -1;
                0 < n && t.isFunc(e[0])
                  ? e[0](t, 1 < n ? e[1] : 0, 2 < n ? e[2] : 0, 3 < n ? e[3] : 0)
                  : t.isFunc(e) && e(t);
              },
              callArray0: function (e) {
                var t;
                if (this.$.isArray(e))
                  for (; e.length; ) (t = e[0]), e.splice(0, 1), this.call0(t);
              },
              call: function (e) {
                this.call0(e), this.ifDetectDoneCallHndlrs();
              },
              callArray: function (e) {
                this.callArray0(e), this.ifDetectDoneCallHndlrs();
              },
              allDoneHndlrs: [],
              ifDetectDoneCallHndlrs: function () {
                var e,
                  t,
                  n = this.$;
                if (
                  this.allDoneHndlrs.length &&
                  (!n.win ||
                    (n.win.loaded &&
                      !n.win.loadPrvtHndlrs.length &&
                      !n.win.loadPblcHndlrs.length))
                ) {
                  if (n.Plugins)
                    for (e in n.Plugins)
                      if (
                        ((t = n.Plugins[e]),
                        n.hasOwn(n.Plugins, e) &&
                          t &&
                          n.isFunc(t.getVersion) &&
                          (3 == t.OTF || (t.DoneHndlrs && t.DoneHndlrs.length)))
                      )
                        return;
                  this.callArray0(this.allDoneHndlrs);
                }
              },
            },
            PUBLIC: {
              $: 1,
              init: function () {
                var e,
                  t = this,
                  n = t.$;
                for (e in t)
                  "init" !== e &&
                    n.hasOwn(t, e) &&
                    n.isFunc(t[e]) &&
                    (n[e] = t[e](n));
              },
              isMinVersion: function (o) {
                return function (e, t, n, i) {
                  var e = o.findPlugin(e),
                    r = -1;
                  return e.status < 0
                    ? e.status
                    : ((e = e.plugin),
                      (t = o.formatNum(
                        o.isNum(t)
                          ? t.toString()
                          : o.isStrNum(t)
                          ? o.getNum(t)
                          : "0"
                      )),
                      1 != e.getVersionDone &&
                        (e.getVersion(t, n, i), null === e.getVersionDone) &&
                        (e.getVersionDone = 1),
                      null !== e.installed
                        ? e.installed <= 0.5
                          ? e.installed
                          : 0.7 == e.installed
                          ? 1
                          : null === e.version
                          ? 0
                          : 0 <= o.compareNums(e.version, t, e)
                          ? 1
                          : -0.1
                        : r);
                };
              },
              getVersion: function (i) {
                return function (e, t, n) {
                  var e = i.findPlugin(e);
                  return e.status < 0
                    ? null
                    : (1 != (e = e.plugin).getVersionDone &&
                        (e.getVersion(null, t, n), null === e.getVersionDone) &&
                        (e.getVersionDone = 1),
                      (t = e.version || e.version0) &&
                        t.replace(i.splitNumRegx, i.getVersionDelimiter));
                };
              },
              hasMimeType: function (s) {
                return function (e) {
                  if (e && window.navigator && navigator.mimeTypes)
                    for (
                      var t,
                        n,
                        i = navigator.mimeTypes,
                        r = s.isArray(e)
                          ? [].concat(e)
                          : s.isString(e)
                          ? [e]
                          : [],
                        o = r.length,
                        a = 0;
                      a < o;
                      a++
                    ) {
                      t = 0;
                      try {
                        s.isString(r[a]) && /[^\s]/.test(r[a]) && (t = i[r[a]]);
                      } catch (e) {}
                      if (
                        (n = t ? t.enabledPlugin : 0) &&
                        (n.name || n.description)
                      )
                        return t;
                    }
                  return null;
                };
              },
              z: 0,
            },
            codebase: {
              $: 1,
              isDisabled: function () {
                var e = this.$.browser;
                return e.ActiveXEnabled && e.isIE && 7 <= e.verIE ? 0 : 1;
              },
              pluginMayBeHanging: function (e) {
                var t = this.$;
                return !this.isDisabled() &&
                  e &&
                  t.isDefined(t.getPROP(e, "readyState")) &&
                  t.getPROP(e.firstChild, "object") &&
                  ((e = t.getPROP(e.firstChild, "readyState")), t.isNum(e)) &&
                  4 != e
                  ? 1
                  : 0;
              },
              emptyNode: function (e) {
                this.$;
                try {
                  e.innerHTML = "";
                } catch (e) {}
              },
              emptyGarbage: function () {
                var e,
                  t = this,
                  n = (t.$, t.HTML),
                  i = 0;
                if (n.length) {
                  for (e = n.length - 1; e >= t.len; e--)
                    n[e] &&
                      n[e].span &&
                      t.pluginMayBeHanging(n[e].span) &&
                      (t.emptyNode(n[e].span), (n[e].span = null), (i = 1));
                  if (((t.len = n.length), i))
                    try {
                      window.CollectGarbage();
                    } catch (e) {}
                }
              },
              HTML: [],
              len: 0,
              onDone: function (e, t) {
                for (var n = t.HTML, i = 0; i < n.length; i++)
                  n[i] &&
                    n[i].span &&
                    (t.emptyNode(n[i].span), (n[i].span = null));
              },
              init: function (e) {
                if (!e.init) {
                  e.init = 1;
                  var t,
                    n,
                    i = this.$;
                  for (
                    i.ev.fPush([this.onDone, this], i.win.unloadHndlrs),
                      e.tagA =
                        '<object width="1" height="1" style="display:none;" codebase="#version=',
                      n = e.classID || e.$$.classID || "",
                      e.tagB =
                        '" ' +
                        (/clsid\s*:/i.test(n) ? 'classid="' : 'type="') +
                        n +
                        '">' +
                        i.openTag +
                        "/object>",
                      t = 0;
                    t < e.Lower.length;
                    t++
                  )
                    (e.Lower[t] = i.formatNum(e.Lower[t])),
                      (e.Upper[t] = i.formatNum(e.Upper[t]));
                }
              },
              isActiveXObject: function (e, t) {
                var n = this.$,
                  i = 0,
                  r = (e.$$, document.createElement("span"));
                return e.min && n.compareNums(t, e.min) <= 0
                  ? 1
                  : e.max && 0 <= n.compareNums(t, e.max)
                  ? 0
                  : ((r.innerHTML = e.tagA + t + e.tagB),
                    (i = n.getPROP(r.firstChild, "object") ? 1 : i)
                      ? ((e.min = t), this.HTML.push({ span: r }))
                      : ((e.max = t), (r.innerHTML = "")),
                    i);
              },
              convert_: function (e, t, n, i) {
                (t = e.convert[t]), (e = e.$);
                return (
                  t &&
                  (e.isFunc(t)
                    ? e.formatNum(t(n.split(e.splitNumRegx), i).join(","))
                    : n)
                );
              },
              convert: function (e, t, n) {
                var i,
                  r,
                  o = e.$,
                  a = { v: (t = o.formatNum(t)), x: -1 };
                if (t)
                  for (i = 0; i < e.Lower.length; i++)
                    if (
                      (r = this.convert_(e, i, e.Lower[i])) &&
                      0 <= o.compareNums(t, n ? r : e.Lower[i]) &&
                      (!i ||
                        o.compareNums(
                          t,
                          n ? this.convert_(e, i, e.Upper[i]) : e.Upper[i]
                        ) < 0)
                    ) {
                      (a.v = this.convert_(e, i, t, n)), (a.x = i);
                      break;
                    }
                return a;
              },
              isMin: function (e, t) {
                var n,
                  i,
                  r = this,
                  o = e.$,
                  a = 0;
                if (o.isStrNum(t) && !r.isDisabled()) {
                  if ((r.init(e), !e.L))
                    for (e.L = {}, n = 0; n < e.Lower.length; n++)
                      if (r.isActiveXObject(e, e.Lower[n])) {
                        e.L = r.convert(e, e.Lower[n]);
                        break;
                      }
                  e.L.v &&
                    0 <= (i = r.convert(e, t, 1)).x &&
                    (a = (
                      e.L.x == i.x
                        ? r.isActiveXObject(e, i.v)
                        : o.compareNums(t, e.L.v) <= 0
                    )
                      ? 1
                      : -1);
                }
                return a;
              },
              search: function (i) {
                var r = this,
                  e = r.$,
                  o = (i.$$, 0),
                  t = i.searchHasRun || r.isDisabled() ? 1 : 0;
                if (((i.searchHasRun = 1), !t)) {
                  r.init(i);
                  for (
                    var n,
                      a,
                      s,
                      l,
                      u = function (e, t) {
                        var n = [].concat(f);
                        return (
                          (n[e] = t),
                          (n = r.isActiveXObject(i, n.join(",")))
                            ? ((o = 1), (f[e] = t))
                            : (m[e] = t),
                          n
                        );
                      },
                      d = i.DIGITMAX,
                      c = 99999999,
                      f = [0, 0, 0, 0],
                      m = [0, 0, 0, 0],
                      g = 0;
                    g < m.length;
                    g++
                  ) {
                    for (
                      f[g] = Math.floor(i.DIGITMIN[g]) || 0,
                        s = f.join(","),
                        l = f
                          .slice(0, g)
                          .concat([c, c, c, c])
                          .slice(0, f.length)
                          .join(","),
                        a = 0;
                      a < d.length;
                      a++
                    )
                      e.isArray(d[a]) &&
                        (d[a].push(0), d[a][g] > m[g]) &&
                        0 <= e.compareNums(l, i.Lower[a]) &&
                        e.compareNums(s, i.Upper[a]) < 0 &&
                        (m[g] = Math.floor(d[a][g]));
                    for (n = 0; n < 30; n++) {
                      if (m[g] - f[g] <= 16) {
                        for (a = m[g]; a >= f[g] + (g ? 1 : 0) && !u(g, a); a--);
                        break;
                      }
                      u(g, Math.round((m[g] + f[g]) / 2));
                    }
                    if (!o) break;
                    m[g] = f[g];
                  }
                  o && (i.version = r.convert(i, f.join(",")).v);
                }
                return i.version || null;
              },
            },
            win: {
              $: 1,
              loaded: !1,
              hasRun: 0,
              init: function () {
                var e = this,
                  t = e.$;
                e.hasRun ||
                  ((e.hasRun = 1),
                  (e.onLoad = t.ev.handler(e.$$onLoad, t)),
                  (e.onUnload = t.ev.handler(e.$$onUnload, t)),
                  e.addEvent("load", e.onLoad),
                  e.addEvent("unload", e.onUnload));
              },
              addEvent: function (e, t) {
                var n = this.$,
                  i = window;
                n.isFunc(t) &&
                  (i.addEventListener
                    ? i.addEventListener(e, t, !1)
                    : i.attachEvent
                    ? i.attachEvent("on" + e, t)
                    : (i["on" + e] = this.concatFn(t, i["on" + e])));
              },
              concatFn: function (e, t) {
                return function () {
                  e(), "function" == typeof t && t();
                };
              },
              loadPrvtHndlrs: [],
              loadPblcHndlrs: [],
              unloadHndlrs: [],
              $$onUnload: function (e) {
                if (e && e.win)
                  for (var t in (e.ev.callArray(e.win.unloadHndlrs), e)) e[t] = 0;
              },
              count: 0,
              countMax: 1,
              intervalLength: 10,
              $$onLoad: function (e) {
                var t;
                e &&
                  !e.win.loaded &&
                  ((t = e.win).count < t.countMax && t.loadPrvtHndlrs.length
                    ? setTimeout(t.onLoad, t.intervalLength)
                    : ((t.loaded = !0),
                      e.ev.callArray(t.loadPrvtHndlrs),
                      e.ev.callArray(t.loadPblcHndlrs)),
                  t.count++);
              },
            },
            DOM: {
              $: 1,
              isEnabled: {
                $: 1,
                objectTag: function () {
                  var e = this.$;
                  return e.browser.isIE ? e.browser.ActiveXEnabled : 1;
                },
                objectTagUsingActiveX: function () {
                  return this.$.browser.ActiveXEnabled;
                },
                objectProperty: function () {
                  var e = this.$;
                  return e.browser.isIE && 7 <= e.browser.verIE ? 1 : 0;
                },
              },
              div: null,
              divID: "plugindetect",
              divWidth: 300,
              getDiv: function () {
                return this.div || document.getElementById(this.divID) || null;
              },
              initDiv: function () {
                var e,
                  t = this,
                  n = t.$;
                t.div ||
                  ((e = t.getDiv())
                    ? (t.div = e)
                    : ((t.div = document.createElement("div")),
                      (t.div.id = t.divID),
                      t.setStyle(t.div, t.getStyle.div()),
                      t.insertDivInBody(t.div)),
                  n.ev.fPush([t.onWinUnloadEmptyDiv, t], n.win.unloadHndlrs));
              },
              pluginSize: 1,
              altHTML: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
              emptyNode: function (e) {
                var t = this.$;
                if (e && /div|span/i.test(e.tagName || "")) {
                  t.browser.isIE && this.setStyle(e, ["display", "none"]);
                  try {
                    e.innerHTML = "";
                  } catch (e) {}
                }
              },
              onWinUnloadEmptyDiv: function (e, t) {
                var n,
                  i,
                  r = t.getDiv();
                if (r) {
                  if (r.childNodes) {
                    for (n = r.childNodes.length - 1; 0 <= n; n--)
                      (i = r.childNodes[n]), t.emptyNode(i);
                    try {
                      r.innerHTML = "";
                    } catch (e) {}
                  }
                  if (r.parentNode) {
                    try {
                      r.parentNode.removeChild(r);
                    } catch (e) {}
                    t.div = r = null;
                  }
                }
              },
              width: function () {
                var e = this.DOM.$,
                  t = this.span,
                  n = t && e.isNum(t.scrollWidth) ? t.scrollWidth : -1,
                  e = t && e.isNum(t.offsetWidth) ? t.offsetWidth : -1;
                return 0 < e ? e : 0 < n ? n : Math.max(e, n);
              },
              obj: function (e) {
                var t = this.span;
                return t && t.firstChild ? t.firstChild : null;
              },
              readyState: function () {
                var e = this.DOM.$;
                return e.browser.isIE &&
                  e.isDefined(e.getPROP(this.span, "readyState"))
                  ? e.getPROP(this.obj(), "readyState")
                  : this.undefined;
              },
              objectProperty: function () {
                var e,
                  t = this.DOM,
                  n = t.$;
                return (e = t.isEnabled.objectProperty()
                  ? n.getPROP(this.obj(), "object")
                  : e);
              },
              getTagStatus: function (e, t, n, i, r, o) {
                var a = this.$;
                if (!e || !e.span) return -2;
                var s = e.width(),
                  l = e.readyState(),
                  u = e.objectProperty();
                if (u) return 1.5;
                var d = /clsid\s*\:/i,
                  c =
                    n && d.test(n.outerHTML || "")
                      ? n
                      : i && d.test(i.outerHTML || "")
                      ? i
                      : 0,
                  n =
                    n && !d.test(n.outerHTML || "")
                      ? n
                      : i && !d.test(i.outerHTML || "")
                      ? i
                      : 0,
                  i = e && d.test(e.outerHTML || "") ? c : n;
                if (!(t && t.span && i && i.span)) return 0;
                (d = i.width()), (c = t.width()), (n = i.readyState());
                if (s < 0 || d < 0 || c <= this.pluginSize) return 0;
                if (
                  (o &&
                    !e.pi &&
                    a.isDefined(u) &&
                    a.browser.isIE &&
                    e.tagName == i.tagName &&
                    e.time <= i.time &&
                    s === d &&
                    0 === l &&
                    0 !== n &&
                    (e.pi = 1),
                  !(d < c))
                ) {
                  if (c <= s) {
                    if (!e.winLoaded && a.win.loaded) return e.pi ? -0.5 : -1;
                    if (
                      a.isNum(r) &&
                      (a.isNum(e.count2) || (e.count2 = r), 0 < r - e.count2)
                    )
                      return e.pi ? -0.5 : -1;
                  }
                  try {
                    if (s == this.pluginSize && (!a.browser.isIE || 4 === l)) {
                      if (!e.winLoaded && a.win.loaded) return 1;
                      if (
                        e.winLoaded &&
                        a.isNum(r) &&
                        (a.isNum(e.count) || (e.count = r), 5 <= r - e.count)
                      )
                        return 1;
                    }
                  } catch (e) {}
                }
                return e.pi ? -0.1 : 0;
              },
              setStyle: function (e, t) {
                this.$;
                var n,
                  i = e.style;
                if (i && t)
                  for (n = 0; n < t.length; n += 2)
                    try {
                      i[t[n]] = t[n + 1];
                    } catch (e) {}
              },
              getStyle: {
                $: 1,
                span: function () {
                  var e = this.$.DOM;
                  return []
                    .concat(this.Default)
                    .concat([
                      "display",
                      "inline",
                      "fontSize",
                      e.pluginSize + 3 + "px",
                      "lineHeight",
                      e.pluginSize + 3 + "px",
                    ]);
                },
                div: function () {
                  var e = this.$.DOM;
                  return []
                    .concat(this.Default)
                    .concat([
                      "display",
                      "block",
                      "width",
                      e.divWidth + "px",
                      "height",
                      e.pluginSize + 3 + "px",
                      "fontSize",
                      e.pluginSize + 3 + "px",
                      "lineHeight",
                      e.pluginSize + 3 + "px",
                      "position",
                      "absolute",
                      "right",
                      "9999px",
                      "top",
                      "-9999px",
                    ]);
                },
                plugin: function (e) {
                  var t = this.$.DOM;
                  return (
                    "background-color:transparent;background-image:none;vertical-align:baseline;outline-style:none;border-style:none;padding:0px;margin:0px;visibility:" +
                    (e ? "hidden;" : "visible;") +
                    "display:inline;font-size:" +
                    (t.pluginSize + 3) +
                    "px;line-height:" +
                    (t.pluginSize + 3) +
                    "px;"
                  );
                },
                Default: [
                  "backgroundColor",
                  "transparent",
                  "backgroundImage",
                  "none",
                  "verticalAlign",
                  "baseline",
                  "outlineStyle",
                  "none",
                  "borderStyle",
                  "none",
                  "padding",
                  "0px",
                  "margin",
                  "0px",
                  "visibility",
                  "visible",
                ],
              },
              insertDivInBody: function (e, t) {
                var n = this.$,
                  i = "pd33993399",
                  r = null,
                  t = (t ? window.top : window).document,
                  o = t.getElementsByTagName("body")[0] || t.body;
                if (!o)
                  try {
                    (t.body.innerHTML +=
                      '<div id="' + i + '">.' + n.openTag + "/div>"),
                      (r = t.getElementById(i));
                  } catch (e) {}
                (o = t.getElementsByTagName("body")[0] || t.body) &&
                  (o.insertBefore(e, o.firstChild), r) &&
                  o.removeChild(r);
              },
              insert: function (e, t, n, i, r, o, a) {
                var s,
                  l = this,
                  u = l.$,
                  d = document.createElement("span");
                if (
                  (u.isDefined(i) || (i = ""), u.isString(e) && /[^\s]/.test(e))
                ) {
                  (e = e.toLowerCase().replace(/\s/g, "")),
                    (s = u.openTag + e + " "),
                    (s += 'style="' + l.getStyle.plugin(o) + '" ');
                  for (var c = 1, f = 1, m = 0; m < t.length; m += 2)
                    /[^\s]/.test(t[m + 1]) &&
                      (s += t[m] + '="' + t[m + 1] + '" '),
                      /width/i.test(t[m]) && (c = 0),
                      /height/i.test(t[m]) && (f = 0);
                  for (
                    s =
                      s +
                      ((c ? 'width="' + l.pluginSize + '" ' : "") +
                        (f ? 'height="' + l.pluginSize + '" ' : "")) +
                      ">",
                      m = 0;
                    m < n.length;
                    m += 2
                  )
                    /[^\s]/.test(n[m + 1]) &&
                      (s +=
                        u.openTag +
                        'param name="' +
                        n[m] +
                        '" value="' +
                        n[m + 1] +
                        '" />');
                  s += i + u.openTag + "/" + e + ">";
                } else (e = ""), (s = i);
                a || l.initDiv();
                (o = a || l.getDiv()),
                  (i = {
                    span: null,
                    winLoaded: u.win.loaded,
                    tagName: e,
                    outerHTML: s,
                    DOM: l,
                    time: new Date().getTime(),
                    width: l.width,
                    obj: l.obj,
                    readyState: l.readyState,
                    objectProperty: l.objectProperty,
                  });
                if (o && o.parentNode) {
                  l.setStyle(d, l.getStyle.span()), o.appendChild(d);
                  try {
                    d.innerHTML = s;
                  } catch (e) {}
                  (i.span = d), (i.winLoaded = u.win.loaded);
                }
                return i;
              },
            },
            Plugins: {
              quicktime: {
                $: 1,
                setPluginStatus: function (e, t, n) {
                  var i = this,
                    r = i.$;
                  (i.installed = t ? 1 : n ? (0 < n ? 0.7 : -0.1) : e ? 0 : -1),
                    t && (i.version = r.formatNum(t, 3)),
                    (i.getVersionDone =
                      0.7 == i.installed || -0.1 == i.installed ? 0 : 1),
                    r.codebase.emptyGarbage();
                },
                getVersion: function (e) {
                  var t = this,
                    n = t.$,
                    i = null,
                    r = 0;
                  (r && !n.dbug) || !t.nav.query().installed || (r = 1),
                    (e = (i =
                      (i && !n.dbug) || !t.nav.query().version
                        ? i
                        : t.nav.version)
                      ? 0
                      : t.codebase.isMin(e))
                      ? t.setPluginStatus(0, 0, e)
                      : ((i && !n.dbug) ||
                          ((e = t.codebase.search()) && ((r = 1), (i = e))),
                        (r && !n.dbug) || !t.axo.query().installed || (r = 1),
                        (i && !n.dbug) ||
                          !t.axo.query().version ||
                          (i = t.axo.version),
                        t.setPluginStatus(r, i));
                },
                nav: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  mimeType: [
                    "video/quicktime",
                    "application/x-quicktimeplayer",
                    "image/x-macpaint",
                    "image/x-quicktime",
                    "application/x-rtsp",
                    "application/x-sdp",
                    "application/sdp",
                    "audio/vnd.qcelp",
                    "video/sd-video",
                    "audio/mpeg",
                    "video/mp4",
                    "video/3gpp2",
                    "application/x-mpeg",
                    "audio/x-m4b",
                    "audio/x-aac",
                    "video/flc",
                  ],
                  find: "QuickTime.*Plug-?in",
                  find2: "QuickTime",
                  avoid: "Totem|VLC|RealPlayer|Helix",
                  plugins: "QuickTime Plug-in",
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.hasRun || !n.hasMimeType(t.mimeType);
                    return (
                      (t.hasRun = 1),
                      i ||
                        ((i = n.findNavPlugin({
                          find: t.find,
                          find2: t.find2,
                          avoid: t.avoid,
                          mimes: t.mimeType,
                          plugins: t.plugins,
                        })) &&
                          ((t.installed = 1),
                          (e = i.name ? n.getNum(i.name + "") : e)) &&
                          (t.version = e)),
                      t
                    );
                  },
                },
                codebase: {
                  $: 1,
                  classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                  isMin: function (e) {
                    var t,
                      n = this.$,
                      i = 0;
                    return (
                      n.isStrNum(e) &&
                        (3 < (t = e.split(n.splitNumRegx)).length &&
                          0 < parseInt(t[3], 10) &&
                          (t[3] = "9999"),
                        (e = t.join(",")),
                        (i = n.codebase.isMin(this, e))),
                      i
                    );
                  },
                  search: function () {
                    return this.$.codebase.search(this);
                  },
                  DIGITMAX: [[12, 11, 11], [7, 60], [7, 11, 11], 0, [7, 11, 11]],
                  DIGITMIN: [5, 0, 0, 0],
                  Upper: ["999", "7,60", "7,50", "7,6", "7,5"],
                  Lower: ["7,60", "7,50", "7,6", "7,5", "0"],
                  convert: [
                    1,
                    function (e, t) {
                      return t
                        ? [e[0], e[1] + e[2], e[3], "0"]
                        : [e[0], e[1].charAt(0), e[1].charAt(1), e[2]];
                    },
                    1,
                    0,
                    1,
                  ],
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  progID: [
                    "QuickTimeCheckObject.QuickTimeCheck",
                    "QuickTimeCheckObject.QuickTimeCheck.1",
                  ],
                  progID0: "QuickTime.QuickTime",
                  query: function () {
                    var e,
                      t,
                      n = this,
                      i = n.$,
                      r = n.hasRun || !i.browser.ActiveXEnabled;
                    if (((n.hasRun = 1), !r))
                      for (
                        t = 0;
                        t < n.progID.length &&
                        (!(
                          (e = i.getAXO(n.progID[t])) &&
                          ((n.installed = 1),
                          (tmp = i.getPROP(e, "QuickTimeVersion"))) &&
                          tmp.toString
                        ) ||
                          ((tmp = tmp.toString(16)),
                          (n.version =
                            parseInt(tmp.charAt(0) || "0", 16) +
                            "." +
                            parseInt(tmp.charAt(1) || "0", 16) +
                            "." +
                            parseInt(tmp.charAt(2) || "0", 16)),
                          i.dbug));
                        t++
                      );
                    return n;
                  },
                },
              },
              devalvr: {
                $: 1,
                getVersion: function () {
                  var e,
                    t = this,
                    n = t.$,
                    i = null;
                  (e && !n.dbug) || !t.nav.query().installed || (e = 1),
                    (i && !n.dbug) ||
                      !t.nav.query().version ||
                      (i = t.nav.version),
                    (e && !n.dbug) || !t.axo.query().installed || (e = 1),
                    (i && !n.dbug) ||
                      !t.axo.query().version ||
                      (i = t.axo.version),
                    (t.installed = i ? 1 : e ? 0 : -1),
                    (t.version = n.formatNum(i));
                },
                nav: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  mimeType: "application/x-devalvrx",
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.hasRun || !n.hasMimeType(t.mimeType);
                    return (
                      (t.hasRun = 1),
                      i ||
                        ((i = n.findNavPlugin({
                          find: "DevalVR.*Plug-?in",
                          mimes: t.mimeType,
                          plugins: "DevalVR 3D Plugin",
                        })) &&
                          /Plug-?in(.*)/i.test(i.description || "") &&
                          (e = n.getNum(RegExp.$1)),
                        i && (t.installed = 1),
                        e && (t.version = e)),
                      t
                    );
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  progID: [
                    "DevalVRXCtrl.DevalVRXCtrl",
                    "DevalVRXCtrl.DevalVRXCtrl.1",
                  ],
                  classID: "clsid:5D2CF9D0-113A-476B-986F-288B54571614",
                  query: function () {
                    var e,
                      t,
                      n = this,
                      i = n.$,
                      r = n.$$,
                      o = n.hasRun;
                    if (((n.hasRun = 1), !o)) {
                      for (
                        e = 0;
                        e < n.progID.length &&
                        (!(t = i.getAXO(n.progID[e])) ||
                          ((n.installed = 1), i.dbug));
                        e++
                      );
                      t &&
                        i.DOM.isEnabled.objectTagUsingActiveX() &&
                        (o = i.getPROP(
                          i.DOM.insert(
                            "object",
                            ["classid", n.classID],
                            ["src", ""],
                            "",
                            r
                          ).obj(),
                          "pluginversion"
                        )) &&
                        o.toString &&
                        ((r = (r = "00000000" + o.toString(16)).substr(
                          r.length - 8,
                          8
                        )),
                        (r =
                          parseInt(r.substr(0, 2) || "0", 16) +
                          "," +
                          parseInt(r.substr(2, 2) || "0", 16) +
                          "," +
                          parseInt(r.substr(4, 2) || "0", 16) +
                          "," +
                          parseInt(r.substr(6, 2) || "0", 16))) &&
                        (n.version = r);
                    }
                    return n;
                  },
                },
              },
              flash: {
                $: 1,
                mimeType: "application/x-shockwave-flash",
                setPluginStatus: function (e, t) {
                  var n = this,
                    i = n.$;
                  (n.installed = t ? 1 : e ? 0 : -1),
                    (n.version = i.formatNum(t)),
                    (n.getVersionDone =
                      -1 == n.installed || n.axo.version || n.instance.version
                        ? 1
                        : 0);
                },
                getVersion: function (e, t) {
                  var n = this,
                    i = n.$,
                    r = null,
                    o = 0;
                  (o && !i.dbug) || !n.navPlugin.query().installed || (o = 1),
                    (r && !i.dbug) ||
                      !n.navPlugin.query().version ||
                      (r = n.navPlugin.version),
                    (o && !i.dbug) || !n.axo.query().installed || (o = 1),
                    (r && !i.dbug) ||
                      !n.axo.query().version ||
                      (r = n.axo.version),
                    ((!o && !r) || t || i.dbug) &&
                      n.instance.query().version &&
                      ((o = 1), (r = n.instance.version)),
                    n.setPluginStatus(o, r);
                },
                navPlugin: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  getNum: function (e) {
                    return (e = e && /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(e))
                      ? e[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "")
                      : null;
                  },
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.$$,
                      r = t.hasRun || !n.hasMimeType(i.mimeType);
                    return (
                      (t.hasRun = 1),
                      r ||
                        ((e =
                          (e =
                            (r = n.findNavPlugin({
                              find: "Shockwave.*Flash",
                              mimes: i.mimeType,
                              plugins: ["Shockwave Flash"],
                            })) && ((t.installed = 1), r.description)
                              ? t.getNum(r.description)
                              : e) && n.getPluginFileVersion(r, e)) &&
                          (t.version = e)),
                      t
                    );
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  progID: "ShockwaveFlash.ShockwaveFlash",
                  classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                  query: function () {
                    var e,
                      t,
                      n,
                      i = this,
                      r = i.$,
                      o = i.hasRun;
                    if (((i.hasRun = 1), !o))
                      for (t = 0; t < 10; t++)
                        if ((n = r.getAXO(i.progID + (t ? "." + t : "")))) {
                          (i.installed = 1), (e = 0);
                          try {
                            e = r.getNum(n.GetVariable("$version") + "");
                          } catch (e) {}
                          if (e && ((i.version = e), !r.dbug)) break;
                        }
                    return i;
                  },
                },
                instance: {
                  $: 1,
                  hasRun: 0,
                  version: null,
                  HTML: null,
                  isEnabled: function () {
                    var e = this.$,
                      t = this.$$,
                      n = 1;
                    return (n =
                      !this.hasRun &&
                      !e.DOM.isEnabled.objectTagUsingActiveX() &&
                      e.hasMimeType(t.mimeType)
                        ? n
                        : 0);
                  },
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = e.isEnabled();
                    if (((e.hasRun = 1), i)) {
                      e.HTML = t.DOM.insert(
                        "object",
                        ["type", n.mimeType],
                        ["play", "false", "menu", "false"],
                        "",
                        n
                      );
                      try {
                        e.version = t.getNum(
                          e.HTML.obj().GetVariable("$version") + ""
                        );
                      } catch (e) {}
                    }
                    return e;
                  },
                },
              },
              shockwave: {
                $: 1,
                getVersion: function () {
                  var e,
                    t = this,
                    n = t.$,
                    i = null;
                  (e && !n.dbug) || !t.nav.query().installed || (e = 1),
                    (i && !n.dbug) ||
                      !t.nav.query().version ||
                      (i = t.nav.version),
                    (e && !n.dbug) || !t.axo.query().installed || (e = 1),
                    (i && !n.dbug) ||
                      !t.axo.query().version ||
                      (i = t.axo.version),
                    (t.installed = i ? 1 : e ? 0 : -1),
                    (t.version = n.formatNum(i));
                },
                nav: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  mimeType: "application/x-director",
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.hasRun || !n.hasMimeType(t.mimeType);
                    return (
                      (t.hasRun = 1),
                      i ||
                        ((e =
                          (e =
                            (i = n.findNavPlugin({
                              find: "Shockwave\\s*for\\s*Director",
                              mimes: t.mimeType,
                              plugins: "Shockwave for Director",
                            })) && i.description
                              ? n.getNum(i.description + "")
                              : e) && n.getPluginFileVersion(i, e)),
                        i && (t.installed = 1),
                        e && (t.version = e)),
                      t
                    );
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: null,
                  version: null,
                  progID: [
                    "SWCtl.SWCtl",
                    "SWCtl.SWCtl.1",
                    "SWCtl.SWCtl.7",
                    "SWCtl.SWCtl.8",
                    "SWCtl.SWCtl.11",
                    "SWCtl.SWCtl.12",
                  ],
                  classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                  query: function () {
                    var e,
                      t,
                      n,
                      i,
                      r = this,
                      o = r.$,
                      a = !r.hasRun;
                    if (((r.hasRun = 1), a))
                      for (e = 0; e < r.progID.length; e++)
                        if ((i = o.getAXO(r.progID[e]))) {
                          (r.installed = 1), (n = "");
                          try {
                            n = i.ShockwaveVersion("") + "";
                          } catch (e) {}
                          if (
                            (/(\d[\d\.\,]*)(?:\s*r\s*(\d+))?/i.test(n) &&
                              ((i = RegExp.$2),
                              (t = o.formatNum(RegExp.$1)),
                              i) &&
                              (((t = t.split(o.splitNumRegx))[3] = i),
                              (t = t.join(","))),
                            t && ((r.version = t), !o.dbug))
                          )
                            break;
                        }
                    return r;
                  },
                },
              },
              windowsmediaplayer: {
                $: 1,
                setPluginStatus: function (e, t) {
                  var n = this,
                    i = n.$;
                  e && (n.version = i.formatNum(e)),
                    (n.installed = n.version ? 1 : t ? 0 : -1),
                    (n.getVersionDone = 0 === n.installed ? 0 : 1);
                },
                getVersion: function (e, t) {
                  var n,
                    i = this,
                    r = i.$,
                    o = null;
                  ((n = (n && !r.dbug) || !i.nav.query().installed ? n : 1) &&
                    !r.dbug) ||
                    !i.axo.query().installed ||
                    (n = 1),
                    (o && !r.dbug) ||
                      !i.axo.query().version ||
                      (o = i.axo.version),
                    ((!n && !o) || t || r.dbug) &&
                      i.FirefoxPlugin.query().version &&
                      ((n = 1), (o = i.FirefoxPlugin.version)),
                    i.setPluginStatus(o, n);
                },
                mimeType: [
                  "application/x-ms-wmp",
                  "application/asx",
                  "application/x-mplayer2",
                  "video/x-ms-asf",
                  "video/x-ms-wm",
                  "video/x-ms-asf-plugin",
                ],
                find: [
                  "Microsoft.*Windows\\s*Media\\s*Player.*Firefox.*Plug-?in",
                  "Windows\\s*Media\\s*Player\\s*Plug-?in\\s*Dynamic\\s*Link\\s*Library",
                  "Flip4Mac.*Windows\\s*Media.*Plug-?in|Flip4Mac.*WMV.*Plug-?in",
                ],
                avoid: "Totem|VLC|RealPlayer|Helix",
                plugins: [
                  "Microsoft" +
                    String.fromCharCode(174) +
                    " Windows Media Player Firefox Plugin",
                  "Windows Media Player Plug-in Dynamic Link Library",
                ],
                nav: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = e.hasRun || !t.hasMimeType(n.mimeType);
                    return (
                      (e.hasRun = 1),
                      i ||
                        (t.findNavPlugin({
                          find: n.find.join("|"),
                          avoid: n.avoid,
                          mimes: n.mimeType,
                          plugins: n.plugins,
                        }) &&
                          (e.installed = 1)),
                      e
                    );
                  },
                },
                FirefoxPlugin: {
                  $: 1,
                  hasRun: 0,
                  version: null,
                  isDisabled: function () {
                    var e = this.$,
                      t = this.$$,
                      n = e.browser;
                    return this.hasRun ||
                      (n.isGecko &&
                        e.compareNums(n.verGecko, e.formatNum("1.8")) < 0) ||
                      (n.isOpera && n.verOpera < 10) ||
                      e.DOM.isEnabled.objectTagUsingActiveX() ||
                      !e.hasMimeType(t.mimeType) ||
                      !e.findNavPlugin({
                        find: t.find[0],
                        avoid: t.avoid,
                        mimes: t.mimeType,
                        plugins: t.plugins[0],
                      })
                      ? 1
                      : 0;
                  },
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = e.isDisabled();
                    return (
                      (e.hasRun = 1),
                      i ||
                        ((i = t.getPROP(
                          t.DOM.insert(
                            "object",
                            ["type", t.hasMimeType(n.mimeType).type, "data", ""],
                            ["src", ""],
                            "",
                            n
                          ).obj(),
                          "versionInfo"
                        )) &&
                          (e.version = t.getNum(i))),
                      e
                    );
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: null,
                  version: null,
                  progID: ["WMPlayer.OCX", "WMPlayer.OCX.7"],
                  classID: "clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
                  query: function () {
                    var e,
                      t,
                      n,
                      i = this,
                      r = i.$,
                      o = !i.hasRun;
                    if (((i.hasRun = 1), o))
                      for (
                        t = 0;
                        t < i.progID.length &&
                        (!(
                          (e = r.getAXO(i.progID[t])) &&
                          ((i.installed = 1),
                          (n =
                            (n = r.getPROP(e, "versionInfo", 0)) && r.getNum(n)))
                        ) ||
                          ((i.version = n), r.dbug));
                        t++
                      );
                    return i;
                  },
                },
                z: 0,
              },
              silverlight: {
                $: 1,
                getVersion: function () {
                  var e = this,
                    t = e.$,
                    n = null,
                    i = 0;
                  (i && !t.dbug) || !e.nav.query().installed || (i = 1),
                    (n && !t.dbug) ||
                      !e.nav.query().version ||
                      (n = e.nav.version),
                    (i && !t.dbug) || !e.axo.query().installed || (i = 1),
                    (n && !t.dbug) ||
                      !e.axo.query().version ||
                      (n = e.axo.version),
                    (e.version = t.formatNum(n)),
                    (e.installed = n ? 1 : i ? 0 : -1);
                },
                nav: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  mimeType: [
                    "application/x-silverlight",
                    "application/x-silverlight-2",
                  ],
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.hasRun || !n.hasMimeType(t.mimeType);
                    return (
                      (t.hasRun = 1),
                      i ||
                        ((i = n.findNavPlugin({
                          find: "Silverlight.*Plug-?in",
                          mimes: t.mimeType,
                          plugins: "Silverlight Plug-In",
                        })) && (t.installed = 1),
                        (e =
                          i && i.description
                            ? n.formatNum(n.getNum(i.description + ""))
                            : e) &&
                          ((i = e.split(n.splitNumRegx)),
                          parseInt(i[0], 10) < 2 &&
                            30226 <= parseInt(i[2], 10) &&
                            (i[0] = "2"),
                          (e = i.join(","))),
                        e && (t.version = e)),
                      t
                    );
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: 0,
                  version: null,
                  progID: "AgControl.AgControl",
                  maxdigit: [20, 10, 10, 100, 100, 10],
                  mindigit: [0, 0, 0, 0, 0, 0],
                  IsVersionSupported: function (e, t) {
                    var n = this.$;
                    try {
                      return this.testVersion
                        ? 0 <=
                            n.compareNums(
                              n.formatNum(this.testVersion.join(",")),
                              n.formatNum(t.join(","))
                            )
                        : e.IsVersionSupported(this.format(t));
                    } catch (e) {}
                    return 0;
                  },
                  format: function (e) {
                    return (
                      e[0] +
                      "." +
                      e[1] +
                      "." +
                      e[2] +
                      this.make2digits(e[3]) +
                      this.make2digits(e[4]) +
                      "." +
                      e[5]
                    );
                  },
                  make2digits: function (e) {
                    return (e < 10 ? "0" : "") + e;
                  },
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = t.hasRun;
                    if (
                      ((t.hasRun = 1),
                      !i &&
                        ((e = n.getAXO(t.progID)) && (t.installed = 1), e) &&
                        t.IsVersionSupported(e, t.mindigit))
                    ) {
                      for (
                        var r, o = [].concat(t.mindigit), a = 0;
                        a < t.maxdigit.length;
                        a++
                      ) {
                        for (r = 0; 1 < t.maxdigit[a] - t.mindigit[a] && r < 20; )
                          r++,
                            (o[a] = Math.round(
                              (t.maxdigit[a] + t.mindigit[a]) / 2
                            )),
                            t.IsVersionSupported(e, o)
                              ? (t.mindigit[a] = o[a])
                              : (t.maxdigit[a] = o[a]);
                        o[a] = t.mindigit[a];
                      }
                      t.version = t.format(o);
                    }
                    return t;
                  },
                },
              },
              adobereader: {
                $: 1,
                setPluginStatus: function () {
                  var e = this,
                    t = e.$,
                    n = e.nav.detected,
                    i = e.nav.version,
                    r = e.axo.detected,
                    o = e.axo.version,
                    a = e.doc.detected,
                    s = e.doc.version,
                    i = i || o || s || null;
                  (e.installed = i
                    ? 1
                    : 0 < n || 0 < r || 0 < a
                    ? 0
                    : -0.5 == a
                    ? -0.15
                    : !t.browser.isIE ||
                      (t.browser.ActiveXEnabled &&
                        !t.browser.ActiveXFilteringEnabled)
                    ? -1
                    : -1.5),
                    (e.version = t.formatNum(i));
                },
                getVersion: function (e, t) {
                  var n = this,
                    i = n.$,
                    r = 0;
                  ((r =
                    (!(r =
                      (!r || i.dbug) && 0 < n.nav.query().detected ? 1 : r) ||
                      i.dbug) &&
                    0 < n.axo.query().detected
                      ? 1
                      : r) &&
                    !i.dbug) ||
                    !(0 < n.doc.query().detected || -0.5 == n.doc.detected) ||
                    (r = 1),
                    n.setPluginStatus();
                },
                nav: {
                  $: 1,
                  detected: 0,
                  version: null,
                  mimeType: ["application/pdf", "application/vnd.adobe.pdfxml"],
                  find: "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in",
                  plugins: [
                    "Adobe Acrobat",
                    "Adobe Acrobat and Reader Plug-in",
                    "Adobe Reader Plugin",
                  ],
                  query: function () {
                    var e,
                      t = this,
                      n = t.$,
                      i = null;
                    return (
                      !t.detected &&
                        n.hasMimeType(t.mimeType) &&
                        ((e = n.findNavPlugin({
                          find: t.find,
                          mimes: t.mimeType,
                          plugins: t.plugins,
                        })),
                        (t.detected = e ? 1 : -1),
                        e &&
                          ((i = n.getNum(e.description) || n.getNum(e.name)),
                          (i =
                            (i = n.getPluginFileVersion(e, i)) ||
                            t.attempt3()))) &&
                        (t.version = i),
                      t
                    );
                  },
                  attempt3: function () {
                    var e = this.$,
                      t = null;
                    return (
                      1 == e.OS &&
                        (e.hasMimeType("application/vnd.adobe.pdfxml")
                          ? (t = "9")
                          : e.hasMimeType("application/vnd.adobe.x-mars")
                          ? (t = "8")
                          : e.hasMimeType("application/vnd.adobe.xfdf") &&
                            (t = "6")),
                      t
                    );
                  },
                },
                pluginQuery: function (e) {
                  var t,
                    n,
                    i,
                    r = this.$,
                    o = "",
                    a = null;
                  try {
                    e && (o = e.GetVersions());
                  } catch (e) {}
                  if (o && r.isString(o))
                    for (t = /=\s*([\d\.]+)/g, n = 0; n < 30 && t.test(o); n++)
                      (i = r.formatNum(RegExp.$1)),
                        (!a || 0 < r.compareNums(a < i)) && (a = i);
                  return a;
                },
                axo: {
                  $: 1,
                  detected: 0,
                  version: null,
                  progID: [
                    "AcroPDF.PDF",
                    "AcroPDF.PDF.1",
                    "PDF.PdfCtrl",
                    "PDF.PdfCtrl.5",
                    "PDF.PdfCtrl.1",
                  ],
                  query: function () {
                    var e,
                      t,
                      n = this,
                      i = n.$,
                      r = n.$$,
                      o = null;
                    if (!n.detected) {
                      for (
                        n.detected = -1, t = 0;
                        t < n.progID.length &&
                        (!(e = i.getAXO(n.progID[t])) ||
                          ((n.detected = 1), (o = r.pluginQuery(e)), i.dbug) ||
                          !o);
                        t++
                      );
                      o && (n.version = o);
                    }
                    return n;
                  },
                },
                doc: {
                  $: 1,
                  detected: 0,
                  version: null,
                  classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
                  classID_dummy: "clsid:CA8A9780-280D-11CF-A24D-BA9876543210",
                  DummySpanTagHTML: 0,
                  HTML: 0,
                  DummyObjTagHTML1: 0,
                  DummyObjTagHTML2: 0,
                  isDisabled: function () {
                    var e = this.$,
                      t = 0;
                    return (t =
                      !this.HTML &&
                      (e.dbug || e.DOM.isEnabled.objectTagUsingActiveX())
                        ? t
                        : 1);
                  },
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = t.DOM.altHTML;
                    return (
                      e.isDisabled() ||
                        (e.DummySpanTagHTML ||
                          (e.DummySpanTagHTML = t.DOM.insert(
                            "",
                            [],
                            [],
                            i,
                            n,
                            1
                          )),
                        e.HTML ||
                          (e.HTML = t.DOM.insert(
                            "object",
                            ["classid", e.classID],
                            [],
                            i,
                            n,
                            1
                          )),
                        e.DummyObjTagHTML2 ||
                          (e.DummyObjTagHTML2 = t.DOM.insert(
                            "object",
                            ["classid", e.classID_dummy],
                            [],
                            i,
                            n,
                            1
                          )),
                        (i = t.DOM.getTagStatus(
                          e.HTML,
                          e.DummySpanTagHTML,
                          e.DummyObjTagHTML1,
                          e.DummyObjTagHTML2,
                          null,
                          1
                        )),
                        (t = n.pluginQuery(e.HTML.obj())),
                        (e.detected =
                          0 < i || t ? 1 : -0.1 == i || -0.5 == i ? -0.5 : -1),
                        (e.version = t || null)),
                      e
                    );
                  },
                },
              },
              realplayer: {
                $: 1,
                mimeType: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"],
                classID: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",
                setPluginStatus: function (e, t) {
                  var n = this,
                    i = n.$;
                  t && (n.version = i.formatNum(i.getNum(t))),
                    (n.installed = n.version ? 1 : e ? 0 : -1),
                    (n.getVersionDone =
                      -1 == n.installed || n.axo.version || n.instance.version
                        ? 1
                        : 0);
                },
                navObj: {
                  $: 1,
                  hasRun: 0,
                  installed: null,
                  version: null,
                  find: "RealPlayer.*Plug-?in",
                  avoid: "Totem|QuickTime|Helix|VLC|Download",
                  plugins: [
                    "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit) ",
                    "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (64-bit) ",
                    "RealPlayer Plugin",
                  ],
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = !e.hasRun && t.hasMimeType(n.mimeType);
                    return (
                      (e.hasRun = 1),
                      i &&
                        ((i = t.findNavPlugin({
                          find: e.find,
                          avoid: e.avoid,
                          mimes: n.mimeType,
                          plugins: e.plugins,
                        })),
                        (e.installed = i ? 1 : 0),
                        (i = t.getPluginFileVersion(i))) &&
                        0 <= t.compareNums(t.formatNum(i), t.formatNum("15")) &&
                        (e.version = i),
                      e
                    );
                  },
                },
                JS: {
                  $: 1,
                  hasRun: 0,
                  version: null,
                  regStr: "RealPlayer.*Version.*Plug-?in",
                  mimetype: "application/vnd.rn-realplayer-javascript",
                  q1: [
                    [11, 0, 0],
                    [999],
                    [663],
                    [663],
                    [663],
                    [660],
                    [468],
                    [468],
                    [468],
                    [468],
                    [468],
                    [468],
                    [431],
                    [431],
                    [431],
                    [372],
                    [180],
                    [180],
                    [172],
                    [172],
                    [167],
                    [114],
                    [0],
                  ],
                  q3: [
                    [6, 0],
                    [12, 99],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 69],
                    [12, 46],
                    [12, 46],
                    [12, 46],
                    [11, 3006],
                    [11, 2806],
                    [11, 2806],
                    [11, 2804],
                    [11, 2804],
                    [11, 2799],
                    [11, 2749],
                    [11, 2700],
                  ],
                  compare: function (e, t) {
                    for (
                      var n, i, r = e.length, o = t.length, a = 0;
                      a < Math.max(r, o);
                      a++
                    ) {
                      if (((n = a < r ? e[a] : 0), (i = a < o ? t[a] : 0) < n))
                        return 1;
                      if (n < i) return -1;
                    }
                    return 0;
                  },
                  convertNum: function (e, t, n) {
                    var i,
                      r,
                      o,
                      a = this,
                      s = a.$;
                    if (!e || !(i = s.formatNum(e))) return null;
                    for (i = i.split(s.splitNumRegx), o = 0; o < i.length; o++)
                      i[o] = parseInt(i[o], 10);
                    if (
                      0 !=
                      a.compare(i.slice(0, Math.min(t[0].length, i.length)), t[0])
                    )
                      return null;
                    if (
                      ((r = i.length > t[0].length ? i.slice(t[0].length) : []),
                      0 < a.compare(r, t[1]) || a.compare(r, t[t.length - 1]) < 0)
                    )
                      return null;
                    for (
                      o = t.length - 1;
                      1 <= o &&
                      1 != o &&
                      (0 != a.compare(t[o], r) ||
                        0 != a.compare(t[o], t[o - 1])) &&
                      !(0 <= a.compare(r, t[o]) && a.compare(r, t[o - 1]) < 0);
                      o--
                    );
                    return n[0].join(".") + "." + n[o].join(".");
                  },
                  isEnabled: function () {
                    var e = this.$;
                    this.$$;
                    return !this.hasRun &&
                      1 == e.OS &&
                      e.hasMimeType(this.mimetype)
                      ? 1
                      : 0;
                  },
                  query: function () {
                    var e,
                      t,
                      n = this,
                      i = n.$,
                      r = n.isEnabled();
                    return (
                      (n.hasRun = 1),
                      r &&
                        (e = (r = i.findNavPlugin({
                          find: n.regStr,
                          mimes: n.mimetype,
                        }))
                          ? i.formatNum(i.getNum(r.description))
                          : e) &&
                        ((i = e.split(i.splitNumRegx)),
                        (t = 1),
                        (t =
                          n.compare(i, [6, 0, 12, 200]) < 0 ||
                          (n.compare(i, [6, 0, 12, 1739]) <= 0 &&
                            0 <= n.compare(i, [6, 0, 12, 857]))
                            ? -1
                            : t) < 0) &&
                        ((r = n.convertNum(e, n.q3, n.q1)), (n.version = r || e)),
                      n
                    );
                  },
                },
                instance: {
                  $: 1,
                  hasRun: 0,
                  version: null,
                  HTML: null,
                  isEnabled: function () {
                    var e = this.$,
                      t = this.$$,
                      n = 1;
                    return (
                      e.dbug ||
                        ((this.hasRun ||
                          e.DOM.isEnabled.objectTagUsingActiveX() ||
                          !e.hasMimeType(t.mimeType) ||
                          (e.browser.isGecko &&
                            e.compareNums(
                              e.browser.verGecko,
                              e.formatNum("1,8")
                            ) < 0) ||
                          (e.browser.isOpera && e.browser.verOpera < 10)) &&
                          (n = 0)),
                      n
                    );
                  },
                  query: function () {
                    var e = this,
                      t = e.$,
                      n = e.$$,
                      i = e.isEnabled();
                    if (((e.hasRun = 1), i)) {
                      (e.HTML = t.DOM.insert(
                        "object",
                        ["type", n.mimeType[0]],
                        [
                          "src",
                          "",
                          "autostart",
                          "false",
                          "imagestatus",
                          "false",
                          "controls",
                          "stopbutton",
                        ],
                        "",
                        n
                      )),
                        (i = e.HTML.obj());
                      try {
                        e.version = t.getNum(i.GetVersionInfo());
                      } catch (e) {}
                      t.DOM.setStyle(i, ["display", "none"]);
                    }
                    return e;
                  },
                },
                axo: {
                  $: 1,
                  hasRun: 0,
                  installed: null,
                  version: null,
                  progID: [
                    "rmocx.RealPlayer G2 Control",
                    "rmocx.RealPlayer G2 Control.1",
                    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                    "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                    "RealPlayer",
                  ],
                  query: function () {
                    var e,
                      t,
                      n,
                      i = this,
                      r = i.$;
                    if (!i.hasRun)
                      for (i.hasRun = 1, t = 0; t < i.progID.length; t++)
                        if ((e = r.getAXO(i.progID[t]))) {
                          (i.installed = 1), (n = 0);
                          try {
                            n = e.GetVersionInfo() + "";
                          } catch (e) {}
                          if (n && ((i.version = n), !r.dbug)) break;
                        }
                    return i;
                  },
                },
                getVersion: function (e, t) {
                  var n = this,
                    i = n.$,
                    r = null,
                    o = 0;
                  (o && !i.dbug) || !n.axo.query().installed || (o = 1),
                    (r && !i.dbug) ||
                      !n.axo.query().version ||
                      (r = n.axo.version),
                    (o && !i.dbug) || !n.navObj.query().installed || (o = 1),
                    ((r =
                      (r && !i.dbug) || !n.navObj.query().version
                        ? r
                        : n.navObj.version) &&
                      !i.dbug) ||
                      !n.JS.query().version ||
                      ((o = 1), (r = n.JS.version)),
                    ((!o && !r) || t || i.dbug) &&
                      n.instance.query().version &&
                      ((o = 1), (r = n.instance.version)),
                    n.setPluginStatus(o, r);
                },
              },
              iecomponent: {
                $: 1,
                setPluginStatus: function (e, t, n) {
                  var i = this.$;
                  (this.version = i.formatNum(t)),
                    (this.installed = t ? 1 : e ? 0 : n ? -3 : -1);
                },
                getVersion: function (e, t) {
                  var n = this,
                    i = n.$,
                    r = null,
                    o = null;
                  if (
                    ((n.getVersionDone = 0),
                    t && i.isString(t) && /[^\s]+/.test(t))
                  ) {
                    if (((t = t.replace(/\s/g, "")), !n.obj)) {
                      n.obj = document.createElement("div");
                      try {
                        n.obj.style.behavior = "url(#default#clientcaps)";
                      } catch (e) {}
                    }
                    try {
                      o = n.obj
                        .getComponentVersion(t, "componentid")
                        .replace(/,/g, ".");
                    } catch (e) {}
                    try {
                      o ||
                        (r = n.obj.isComponentInstalled(t, "componentid")
                          ? 1
                          : 0);
                    } catch (e) {}
                    n.setPluginStatus(r, o);
                  } else n.setPluginStatus(0, 0, 1);
                },
              },
              activex: {
                $: 1,
                storage: {},
                codebase: {
                  $: 1,
                  isMin: function (e) {
                    return this.$.codebase.isMin(this, e);
                  },
                  search: function () {
                    return this.$.codebase.search(this);
                  },
                  classID: "",
                  DIGITMAX: [[100, 100, 100, 0]],
                  DIGITMIN: [0, 0, 0, 0],
                  Upper: ["99999"],
                  Lower: ["0"],
                  convert: [1],
                },
                clone: function (e, t) {
                  var n,
                    i,
                    r = this.$;
                  if (
                    r.isNum(e) ||
                    r.isString(e) ||
                    null === e ||
                    r.isFunc(e) ||
                    e === r ||
                    e === r.Plugins ||
                    e === this
                  )
                    return e;
                  if (e.window || e.firstChild || e.appendChild) return e;
                  for (n in (r.isArray(e) ? (i = []) : e && (i = {}), e))
                    r.hasOwn(e, n) && (i[n] = this.clone(e[n], n));
                  return i;
                },
                setPluginStatus: function (e, t, n) {
                  var i = this.$;
                  (this.version = i.formatNum(t)),
                    (this.installed = t
                      ? 1
                      : e
                      ? 0 < e
                        ? 0.7
                        : -0.1
                      : n
                      ? -3
                      : -1);
                },
                getVersion: function (e, t, n) {
                  var i,
                    r,
                    o,
                    a = this,
                    s = a.$,
                    l = null,
                    u = null,
                    d = "";
                  if (
                    ((a.getVersionDone = 0),
                    t && s.isString(t) && /[^\s]+/.test(t))
                  ) {
                    if (
                      ((d = (t = t.replace(/\s/g, "")).replace(/[\:\-\/]/g, "$")),
                      s.isArray(n))
                    ) {
                      for (n.length || n.push(0), i = 0; i < n.length; i++)
                        if (
                          (s.isDefined(n[i]) || (n[i] = 0),
                          !s.isNum(n[i]) || n[i] < 0 || 99999999 < n[i])
                        )
                          return void a.setPluginStatus(0, 0, 1);
                      if (d && a.storage[d]) {
                        for (
                          r = a.storage[d].codebase, i = o = 0;
                          i < Math.max(n.length, r.DIGITMAX[0].length);
                          i++
                        )
                          if (
                            (i < n.length ? n[i] : 0) >
                            (i < r.DIGITMAX[0].length ? r.DIGITMAX[0][i] : 0)
                          ) {
                            o = 1;
                            break;
                          }
                        if (o && r.version)
                          for (
                            o = r.version.split(s.splitNumRegx), i = 0;
                            i < Math.max(o.length, r.DIGITMAX[0].length);
                            i++
                          )
                            if (
                              (i < o.length ? o[i] : 0) ===
                              (i < r.DIGITMAX[0].length ? r.DIGITMAX[0][i] : 0)
                            ) {
                              a.storage[d] = null;
                              break;
                            }
                      }
                    } else n = [0];
                    d &&
                      !a.storage[d] &&
                      ((a.storage[d] = { codebase: a.clone(a.codebase) }),
                      (a.storage[d].codebase.classID = t),
                      s.isArray(n)) &&
                      n.length &&
                      (a.storage[d].codebase.DIGITMAX = [[].concat(n)]),
                      (u = e
                        ? ((l = a.storage[d].codebase.isMin(e)),
                          a.storage[d].codebase.version)
                        : ((l = 0), a.storage[d].codebase.search())),
                      a.setPluginStatus(l, u),
                      s.codebase.emptyGarbage();
                  } else a.setPluginStatus(0, 0, 1);
                },
              },
              zz: 0,
            },
          }),
            events.addCustomEventHandler("destroy", function () {
              var e = document.getElementById("plugindetect");
              e && e.parentNode && e.parentNode.removeChild(e);
            });
          try {
            base.log(
              "Running PluginDetect",
              base.LOG_TYPES.DEBUG,
              "PluginDetect module INIT()"
            ),
              LeadiD.PluginDetect.INIT();
          } catch (error) {}
        })(LeadiD, LeadiD.util, LeadiD.util.events);
      } catch (err) {
        LeadiD.logError(err, "PluginDetect module parsing");
      }
      try {
        ((i, r) => {
          r.bench = new (function () {
            var e = {},
              n = {};
            return (
              (e.begin = function (e) {
                return (
                  i.log("Benchmark begin", i.LOG_TYPES.DEBUG, "Bench module", {
                    label: e,
                  }),
                  !!r.isDefined(e) && ((n[e] = r.getCurrentTime()), !0)
                );
              }),
              (e.checkpoint = function (e) {
                var t;
                return n.hasOwnProperty(e)
                  ? ((t = r.getCurrentTime() - n[e]),
                    i.log("Benchmark result", i.LOG_TYPES.DEBUG, "Bench module", {
                      label: e,
                      result: t,
                    }),
                    t)
                  : -1;
              }),
              (e.end = function (e) {
                var t;
                return n.hasOwnProperty(e)
                  ? ((t = n[e]),
                    delete n[e],
                    (t = r.getCurrentTime() - t),
                    i.log("Benchmark result", i.LOG_TYPES.DEBUG, "Bench module", {
                      label: e,
                      result: t,
                    }),
                    t)
                  : -1;
              }),
              e
            );
          })();
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Bench module parsing");
      }
      try {
        ((o, a) => {
          a.cookies = new (function () {
            var e = {},
              r = [];
            function n(e, t, n) {
              var i;
              a.isString(e) &&
                -1 === e.indexOf("leadid_token") &&
                o.log("Setting cookie", o.LOG_TYPES.DEBUG, "Cookies module", {
                  _name: e,
                }),
                (n = a.isNull(n)
                  ? ""
                  : ((i = new Date()).setTime(i.getTime() + 60 * n * 1e3),
                    "; expires=" + i.toUTCString())),
                (i = escape(t)),
                (document.cookie = e + "=" + i + n + "; path=/"),
                a.inArray(e, r) || r.push(e);
            }
            function t(e) {
              o.log("Clearing cookie", o.LOG_TYPES.DEBUG, "Cookies module", {
                _name: e,
              });
              var t = r.indexOf(e);
              n(e, "", -1e3), -1 != t && r.splice(t, 1);
            }
            return (
              (e.set = n),
              (e.get = function (e) {
                o.log("Getting cookie", o.LOG_TYPES.DEBUG, "Cookies module", {
                  _name: e,
                });
                for (
                  var t, n, i = document.cookie.split(";"), r = 0;
                  r < i.length;
                  ++r
                )
                  if (
                    ((t = i[r].substr(0, i[r].indexOf("=")).trim()),
                    (n = i[r].substr(i[r].indexOf("=") + 1)),
                    t == e)
                  )
                    return unescape(n);
              }),
              (e.clear = t),
              (e.clearAll = function () {
                for (var e = r.length - 1; 0 <= e; --e) t(r[e]);
              }),
              e
            );
          })();
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Cookies module parsing");
      }
      try {
        ((o, m) => {
          var t, n, g, p, h;
          m.json =
            ((h = {}),
            (() => {
              var e =
                  !(
                    "undefined" == typeof JSON ||
                    !m.isObject(JSON) ||
                    !m.isFunc(JSON.stringify)
                  ) && JSON.stringify,
                t = new Date(-0xc782b5b800cec);
              try {
                t =
                  -109252 == t.getUTCFullYear() &&
                  0 === t.getUTCMonth() &&
                  1 === t.getUTCDate() &&
                  10 == t.getUTCHours() &&
                  37 == t.getUTCMinutes() &&
                  6 == t.getUTCSeconds() &&
                  708 == t.getUTCMilliseconds();
              } catch (e) {
                o.logError(e, "Json module");
              }
              var n,
                i,
                r = {}.toString;
              if ((t = e && t)) {
                (n = function () {
                  return 1;
                }).toJSON = n;
                try {
                  t =
                    "0" === e(0) &&
                    "0" === e(Number()) &&
                    '""' == e(String()) &&
                    i === e(r) &&
                    i === e(i) &&
                    i === e() &&
                    "1" === e(n) &&
                    "[1]" == e([n]) &&
                    "[null]" == e([i]) &&
                    "null" == e(null) &&
                    "[null,null,null]" == e([i, r, null]) &&
                    '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                      e({ a: [n, !0, !1, null, "\0\b\n\f\r\t"] }) &&
                    "1" === e(null, n) &&
                    "[\n 1,\n 2\n]" == e([1, 2], null, 1) &&
                    '"-271821-04-20T00:00:00.000Z"' == e(new Date(-864e13)) &&
                    '"+275760-09-13T00:00:00.000Z"' == e(new Date(864e13)) &&
                    '"-000001-01-01T00:00:00.000Z"' ==
                      e(new Date(-621987552e5)) &&
                    '"1969-12-31T23:59:59.999Z"' == e(new Date(-1));
                } catch (e) {
                  o.log(
                    "stringify not supported",
                    o.LOG_TYPES.DEBUG,
                    "Json module"
                  ),
                    (t = !1);
                }
              }
              return t;
            })()
              ? (h.stringify = JSON.stringify)
              : (o.log(
                  "JSON not supported natively",
                  o.LOG_TYPES.DEBUG,
                  "Json module"
                ),
                (t = /["\\\x00-\x1f\x7f-\x9f]/g),
                (n = {
                  "\b": "\\b",
                  "\t": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                }),
                (g = function (e) {
                  return e.match(t)
                    ? '"' +
                        e.replace(t, function (e) {
                          var t = n[e];
                          return m.isString(t)
                            ? t
                            : ((t = e.charCodeAt()),
                              "\\u00" +
                                Math.floor(t / 16).toString(16) +
                                (t % 16).toString(16));
                        }) +
                        '"'
                    : '"' + e + '"';
                }),
                (p = function (e, t) {
                  for (e = String(e >>> 0), t = t || 2; e.length < t; )
                    e = "0" + e;
                  return e;
                }),
                (h.stringify = function (e) {
                  if (null === e) return "null";
                  var t,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    d = typeof e;
                  if (m.isDefined(d)) {
                    if ("number" == d || "boolean" == d)
                      return -1 / 0 < e && e < 1 / 0 ? String(e) : "null";
                    if ("string" == d) return g(e);
                    if (m.isFunc(e.stringify)) return h.stringify(e.stringify());
                    if ("date" == d)
                      return (
                        (i = e.getUTCMonth() + 1),
                        (r = e.getUTCDate()),
                        (o = e.getUTCFullYear()),
                        (a = e.getUTCHours()),
                        (s = e.getUTCMinutes()),
                        (l = e.getUTCSeconds()),
                        (u = e.getUTCMilliseconds()),
                        '"' +
                          p(o) +
                          "-" +
                          p(i) +
                          "-" +
                          p(r) +
                          "T" +
                          p(a) +
                          ":" +
                          p(s) +
                          ":" +
                          p(l) +
                          "." +
                          p(u, 3) +
                          'Z"'
                      );
                    if (((t = []), m.isArray(e))) {
                      var c = e.length;
                      if (0 < c)
                        for (; t.push(h.stringify(e[--c]) || "null"), c; );
                      return t.reverse(), "[" + t.join(",") + "]";
                    }
                    if ("object" == typeof e) {
                      for (var f in e)
                        !e.hasOwnProperty(f) ||
                          ("number" != (d = typeof f) && "string" != d) ||
                          ("number" == d
                            ? (n = '"' + f + '"')
                            : "string" == d && (n = g(f)),
                          "function" != (d = typeof e[f]) &&
                            "undefined" != d &&
                            t.push(n + ":" + h.stringify(e[f])));
                      return "{" + t.join(",") + "}";
                    }
                  }
                })),
            "undefined" != typeof JSON &&
            m.isDefined(JSON.parse) &&
            m.isFunc(JSON.parse)
              ? (h.parse = JSON.parse)
              : o.log(
                  "JSON parse not supported",
                  o.LOG_TYPES.DEBUG,
                  "Json module"
                ),
            h);
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Json module parsing");
      }
      try {
        ((a, s, l) => {
          var u = {};
          function d(e) {
            if (!a.isDefinedAndNotNull(u[e])) return !0;
            window.clearTimeout(u[e].timeout);
            for (
              var t, n, i = { batchedData: [] }, r = u[e].dedupeList, o = 0;
              o < r.length;
              o++
            )
              for (
                i[r[o]] = u[e].batchData[0].data[r[o]], n = 0;
                n < u[e].batchData.length;
                n++
              )
                delete u[e].batchData[n].data[r[o]];
            for (n = 0; n < u[e].batchData.length; n++)
              i.batchedData.push(u[e].batchData[n].data);
            (i.batchedData = l.stringify(i.batchedData)),
              (t = u[e].batchData[0].url),
              s.doApiCall(t, i),
              delete u[e];
          }
          (s.doBatchedRequest = function (e, t) {
            t.flushDuration;
            var n,
              i = t.flushCount || 35,
              r =
                t.flushCondition ||
                function (e) {
                  return !1;
                },
              o = t.dedupeList || [];
            a.isDefinedAndNotNull(u[t.name]) ||
              (u[t.name] = {
                timeout: window.setTimeout(
                  ((n = t.name),
                  function () {
                    d(n);
                  }),
                  t.flushDuration
                ),
                batchData: [],
              }),
              u[t.name].batchData.push(e),
              (u[t.name].dedupeList = o),
              (u[t.name].batchData.length >= i || r(e.data)) && d(t.name);
          }),
            (s.flushQueue = d),
            (s.flushAllQueues = function () {
              for (var e in u) e && a.isString(e) && d(e);
            });
        })((LeadiD, LeadiD.util), LeadiD.util.api, LeadiD.util.json);
      } catch (err) {
        LeadiD.logError(err, "BatchedApi module parsing");
      }
      try {
        ((E, D, L, S, T) => {
          function e() {
            var e = (() => {
                try {
                  return (
                    localStorage.setItem("test", "test"),
                    localStorage.removeItem("test"),
                    !0
                  );
                } catch (e) {
                  return (
                    E.log(
                      "localStorage not supported",
                      E.LOG_TYPES.DEBUG,
                      "RequestCatalog module"
                    ),
                    !1
                  );
                }
              })(),
              t = e && D.isDefined(L.stringify),
              n = e && D.isDefined(L.parse),
              i = "LeadiD-request-catalog",
              r = "LeadiD_request",
              o = 50,
              a = 1,
              s = {},
              l = {},
              u = 0,
              d = D.getCurrentTime(),
              c = 0,
              f = {},
              m = function () {
                return s;
              },
              g = t
                ? function () {
                    localStorage.setItem(i, L.stringify(s));
                  }
                : function () {},
              p = function (e) {
                if (!1 === e) return !0;
                delete s[e];
                try {
                  g();
                } catch (e) {
                  E.logError(e, "RequestCatalog module::removeRequest()");
                }
              },
              h = t
                ? function () {
                    (s = {}), t && localStorage.removeItem(i);
                  }
                : function () {
                    s = {};
                  },
              v = n
                ? function () {
                    E.log(
                      "importing catalog",
                      E.LOG_TYPES.DEBUG,
                      "RequestCatalog module"
                    );
                    var e = localStorage.getItem(i);
                    if (e)
                      try {
                        for (var t in (s = L.parse(e)))
                          s.hasOwnProperty(t) && (l[t] = 1);
                      } catch (e) {
                        E.logError(e, "RequestCatalog module::importCatalog()"),
                          h();
                      }
                  }
                : function () {};
            function b() {
              if (!n) return !0;
              var e,
                t = localStorage.getItem(i);
              if (!t) return 0 === D.objectLength(s);
              try {
                if (((t = L.parse(t)), D.objectLength(s) !== D.objectLength(t)))
                  return !1;
                for (e in s)
                  if (s.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
                return !0;
              } catch (e) {
                return E.logError(e, "RequestCatalog module::checkCatalog()"), !1;
              }
            }
            function y() {
              var e,
                t,
                n,
                i,
                r = D.objectLength(f) ? f : m();
              for (e in r)
                r.hasOwnProperty(e) &&
                  D.isDefined(l[e]) &&
                  (a <= c
                    ? (f[e] = r[e])
                    : ((t = r[e]),
                      (n = t.url),
                      (i = void 0),
                      "/" !== n.substr(0, 1) &&
                      1 !== (n = n.split(":")).length &&
                      ((i = D.getCurrentProtocol()), n[0] !== i)
                        ? E.log(
                            "Skipping request, protocol differs from page",
                            E.LOG_TYPES.DEBUG,
                            "RequestCatalog module",
                            { url: t.url }
                          )
                        : (c++,
                          E.log(
                            "Sending request",
                            E.LOG_TYPES.DEBUG,
                            "RequestCatalog module",
                            { url: t.url }
                          ),
                          S.doApiCall(
                            t.url,
                            t.data,
                            ((e) =>
                              function () {
                                c--, delete f[e], p(e), y();
                              })(e),
                            { callBeforePerformRequest: !1 }
                          ))));
            }
            (this.getCatalog = m),
              (this.saveCatalog = g),
              (this.registerRequest = function (e, t) {
                if (o <= D.objectLength(s)) return !1;
                var n = r + d + u++,
                  i = !1;
                s[n] = { url: e, data: t };
                try {
                  g();
                } catch (e) {
                  i = !0;
                }
                return i || !b() ? (delete s[n], g(), !1) : n;
              }),
              (this.removeRequest = p),
              (this.clearCatalog = h),
              (this.processCatalog = y),
              (this.checkCatalog = b),
              T.addCustomEventHandler("destroy", function () {
                w.clearCatalog();
              }),
              T.addCustomEventHandler("newTokenAcquired", y),
              T.addCustomEventHandler("tokenReady", y),
              E.log(
                "Registered events",
                E.LOG_TYPES.DEBUG,
                "RequestCatalog module"
              ),
              v(),
              "function" == typeof LeadiDMakeGlobalFunction &&
                LeadiDMakeGlobalFunction({
                  localStorageSupported: e,
                  importCatalog: v,
                });
          }
          var w = new e();
          (S.beforePerformRequest = function (e, t, n) {
            var i = w.registerRequest(e, t);
            return {
              callback: function (e) {
                0 !== e.status && w.removeRequest(i),
                  D.isFunc(n) &&
                    n.apply(this, Array.prototype.slice.call(arguments));
              },
            };
          }),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({ requestCatalog: w, RequestCatalog: e });
        })(
          LeadiD,
          LeadiD.util,
          LeadiD.util.json,
          LeadiD.util.api,
          LeadiD.util.events
        );
      } catch (err) {
        LeadiD.logError(err, "RequestCatalog module parsing");
      }
      try {
        ((m, g) => {
          var p = [];
          g.Worker = function (e) {
            var n,
              i = { workerName: e },
              r = [],
              o = 16,
              a = 0;
            function s() {
              var e,
                t = g.getCurrentTime();
              try {
                for (; r.length; )
                  if ((i.step(r.shift()), (e = g.getCurrentTime()), o < e - t))
                    return void (n = g.setImmediate(s));
              } catch (e) {
                return (
                  m.logError(e, "Worker module _execute()", {
                    workerName: i.workerName,
                  }),
                  (a = i.State.ERROR),
                  i.onError(e),
                  void u()
                );
              }
              n = g.setImmediate(l);
            }
            function l() {
              try {
                m.log(
                  "Worker " + i.workerName + " _finish()",
                  m.LOG_TYPES.DEBUG,
                  "Worker module _finish()"
                ),
                  i.teardown && i.teardown(),
                  (a = i.State.COMPLETE),
                  i.onComplete && i.onComplete();
              } catch (e) {
                m.logError(e, "Worker module _finish()", {
                  workerName: i.workerName,
                }),
                  (a = i.State.ERROR),
                  i.onError(e);
              }
              u();
            }
            function u() {
              p.shift(), 0 < p.length && p[0].start();
            }
            function d(e) {
              r.push(e);
            }
            function c(e) {
              g.isArray(e) && (r = r.concat(e));
            }
            function f() {
              m.log(
                "Worker " + i.workerName + " start()",
                m.LOG_TYPES.DEBUG,
                "Worker module start()"
              ),
                (a = i.State.SETUP),
                i.setup && i.setup(),
                (a = i.State.RUNNING),
                (n = g.setImmediate(s));
            }
            return (
              (i.currentState = function () {
                return a;
              }),
              (i.addTask = d),
              (i.addTasks = c),
              (i.run = function (e, t) {
                return !(
                  !i.step ||
                  !g.isDefined(e) ||
                  (t && (o = t),
                  (g.isArray(e) ? c : d)(e),
                  p.push(i),
                  1 == p.length && f(),
                  0)
                );
              }),
              (i.start = f),
              (i.stop = function (e) {
                return (
                  g.clearImmediate(n),
                  e && i.teardown && i.teardown(),
                  (a = i.State.STOPPED),
                  u(),
                  !0
                );
              }),
              (i.onError = function (e) {}),
              (i.State = {
                NOT_STARTED: 0,
                SETUP: 1,
                RUNNING: 2,
                COMPLETE: 3,
                STOPPED: 4,
                ERROR: 5,
              }),
              i
            );
          };
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Worker module parsing");
      }
      try {
        ((n) => {
          function e(e) {
            var t = e.charAt(0).toUpperCase() + e.slice(1);
            return n.isDefined(window["inner" + t])
              ? function () {
                  return window["inner" + t];
                }
              : n.isDefined(document.documentElement) &&
                n.isDefined(document.documentElement["client" + t]) &&
                0 !== document.documentElement["client" + t]
              ? function () {
                  return document.documentElement["client" + t];
                }
              : function () {
                  return document.getElementsByTagName("body")[0]["client" + t];
                };
          }
          var t;
          n.viewport =
            (((t = {}).width = e("width")), (t.height = e("height")), t);
        })((LeadiD, LeadiD.util));
      } catch (err) {
        LeadiD.logError(err, "Viewport module parsing");
      }
      try {
        ((r, t) => {
          t.Hooker = function (n) {
            var i = [];
            (this.register = function (e) {
              t.isArray(e) && e.forEach(this.register),
                t.isFunc(e) &&
                  (r.log(
                    "register(callback) for " + n,
                    r.LOG_TYPES.DEBUG,
                    "Hooker module"
                  ),
                  i.push(e));
            }),
              (this.unregister = function (e) {
                e = i.indexOf(e);
                -1 !== e &&
                  (r.log(
                    "unregister(callback) for " + n,
                    r.LOG_TYPES.DEBUG,
                    "Hooker module"
                  ),
                  i.splice(e, 1));
              }),
              (this.clear = function () {
                r.log("clear() for " + n, r.LOG_TYPES.DEBUG, "Hooker module"),
                  (i = []);
              }),
              (this.run = function () {
                var t = arguments;
                i.forEach(function (e) {
                  r.log("run() for " + n, r.LOG_TYPES.DEBUG, "Hooker module"),
                    e.apply(null, t);
                });
              });
          };
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "Hooker module parsing");
      }
      try {
        ((t) => {
          if (t.isDefined(window.WeakMap)) t.WeakMap = window.WeakMap;
          else if (t.isFunc(Object.defineProperty) && t.isFunc(Date.now)) {
            var e = t.getWrapperElement();
            try {
              Object.defineProperty(e, "LeadiD-propTest", {
                value: !0,
                writable: !0,
                configurable: !0,
              }),
                Object.defineProperty({}, "test", {
                  value: "test",
                  writable: !0,
                  configurable: !0,
                });
            } catch (e) {
              return (t.WeakMap = !1);
            }
            var i = Object.defineProperty,
              n = Date.now() % 1e9;
            (r.prototype = {
              set: function (e, t) {
                var n = e[this.name];
                n && n[0] === e
                  ? (n[1] = t)
                  : i(e, this.name, {
                      value: [e, t],
                      writable: !0,
                      configurable: !0,
                    });
              },
              get: function (e) {
                var t;
                return (t = e[this.name]) && t[0] === e ? t[1] : void 0;
              },
              delete: function (e) {
                this.set(e, void 0);
              },
            }),
              (t.WeakMap = r);
          } else t.WeakMap = !1;
          function r() {
            this.name = "__st" + ((1e9 * Math.random()) >>> 0) + n++ + "__";
          }
        })((LeadiD, LeadiD.util));
      } catch (err) {
        LeadiD.logError(err, "WeakMap module parsing");
      }
      try {
        ((u, d) => {
          d.DelayQueue = function (e, t, n) {
            (t = t || 100), (n = n || 1e3);
            var i = [],
              r = !1,
              o = null;
            function a() {
              r && window.clearTimeout(r), (r = !1);
            }
            function s() {
              a(), (o = null), (i = []);
            }
            function l() {
              try {
                e(i);
              } catch (e) {
                u.logError(e, "delay_queue.js flush");
              } finally {
                s();
              }
            }
            (this.push = function (e) {
              return (
                d.inArray(e, i) ||
                  (i.push(e),
                  null === o && (o = d.getCurrentTime()),
                  d.getCurrentTime() - o + t < n &&
                    (a(), (r = window.setTimeout(l, t)))),
                e
              );
            }),
              (this.reset = s),
              (this.size = function () {
                return i.length;
              });
          };
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "DelayQueue module parsing");
      }
      try {
        ((e, t) => {
          for (
            var s,
              r,
              o,
              a,
              n,
              d,
              c,
              i = [
                "MutationObserver",
                "WebKitMutationObserver",
                "MozMutationObserver",
              ],
              l = 0;
            l < i.length;
            ++l
          )
            if (t.isDefined(window[i[l]]))
              return (t.MutationObserver = window[i[l]]);
          function u() {
            o = !1;
            var e = a,
              i =
                ((a = []),
                e.sort(function (e, t) {
                  return e.uid_ - t.uid_;
                }),
                !1);
            e.forEach(function (e) {
              var t,
                n = e.takeRecords();
              (t = e).nodes_.forEach(function (e) {
                e = s.get(e);
                e &&
                  e.forEach(function (e) {
                    e.observer === t && e.removeTransientObservers();
                  });
              }),
                n.length && (e.callback_(n, e), (i = !0));
            }),
              i && u();
          }
          function f(e, t) {
            for (var n = e; n; n = n.parentNode) {
              var i = s.get(n);
              if (i)
                for (var r = 0; r < i.length; r++) {
                  var o = i[r],
                    a = o.options;
                  (n === e || a.subtree) && (a = t(a)) && o.enqueue(a);
                }
            }
          }
          function m(e) {
            (this.callback_ = e),
              (this.nodes_ = []),
              (this.records_ = []),
              (this.uid_ = ++n);
          }
          function g(e, t) {
            (this.type = e),
              (this.target = t),
              (this.addedNodes = []),
              (this.removedNodes = []),
              (this.previousSibling = null),
              (this.nextSibling = null),
              (this.attributeName = null),
              (this.attributeNamespace = null),
              (this.oldValue = null);
          }
          function p(e, t) {
            return new g(e, t);
          }
          function h(e) {
            var t, n;
            return (
              c ||
                (((n = new g((t = d).type, t.target)).addedNodes =
                  t.addedNodes.slice()),
                (n.removedNodes = t.removedNodes.slice()),
                (n.previousSibling = t.previousSibling),
                (n.nextSibling = t.nextSibling),
                (n.attributeName = t.attributeName),
                (n.attributeNamespace = t.attributeNamespace),
                (n.oldValue = t.oldValue),
                ((c = n).oldValue = e)),
              c
            );
          }
          function v(e, t) {
            return e === t ? e : !c || ((t = e) !== c && t !== d) ? null : c;
          }
          function b(e, t, n) {
            (this.observer = e),
              (this.target = t),
              (this.options = n),
              (this.transientObservedNodes = []);
          }
          t.WeakMap &&
          t.isDefined(window.postMessage) &&
          t.isDefined(t.setImmediate) &&
          document.addEventListener
            ? ((s = new t.WeakMap()),
              (r = t.setImmediate),
              (o = !1),
              (a = []),
              (n = 0),
              (m.prototype = {
                observe: function (e, t) {
                  var n;
                  if (
                    ((n = e),
                    (e =
                      (window.ShadowDOMPolyfill &&
                        window.ShadowDOMPolyfill.wrapIfNeeded(n)) ||
                      n),
                    (!t.childList && !t.attributes && !t.characterData) ||
                      (t.attributeOldValue && !t.attributes) ||
                      (t.attributeFilter &&
                        t.attributeFilter.length &&
                        !t.attributes) ||
                      (t.characterDataOldValue && !t.characterData))
                  )
                    throw new SyntaxError();
                  var i,
                    r = s.get(e);
                  r || s.set(e, (r = []));
                  for (var o = 0; o < r.length; o++)
                    if (r[o].observer === this) {
                      (i = r[o]).removeListeners(), (i.options = t);
                      break;
                    }
                  i || ((i = new b(this, e, t)), r.push(i), this.nodes_.push(e)),
                    i.addListeners();
                },
                disconnect: function () {
                  this.nodes_.forEach(function (e) {
                    for (var t = s.get(e), n = 0; n < t.length; n++) {
                      var i = t[n];
                      if (i.observer === this) {
                        i.removeListeners(), t.splice(n, 1);
                        break;
                      }
                    }
                  }, this),
                    (this.records_ = []);
                },
                takeRecords: function () {
                  var e = this.records_;
                  return (this.records_ = []), e;
                },
              }),
              (b.prototype = {
                enqueue: function (e) {
                  var t = this.observer.records_,
                    n = t.length;
                  if (0 < t.length) {
                    var i = v(t[n - 1], e);
                    if (i) return void (t[n - 1] = i);
                  } else (i = this.observer), a.push(i), o || ((o = !0), r(u));
                  t[n] = e;
                },
                addListeners: function () {
                  this.addListeners_(this.target);
                },
                addListeners_: function (e) {
                  var t = this.options;
                  t.attributes && e.addEventListener("DOMAttrModified", this, !0),
                    t.characterData &&
                      e.addEventListener("DOMCharacterDataModified", this, !0),
                    t.childList &&
                      e.addEventListener("DOMNodeInserted", this, !0),
                    (t.childList || t.subtree) &&
                      e.addEventListener("DOMNodeRemoved", this, !0);
                },
                removeListeners: function () {
                  this.removeListeners_(this.target);
                },
                removeListeners_: function (e) {
                  var t = this.options;
                  t.attributes &&
                    e.removeEventListener("DOMAttrModified", this, !0),
                    t.characterData &&
                      e.removeEventListener("DOMCharacterDataModified", this, !0),
                    t.childList &&
                      e.removeEventListener("DOMNodeInserted", this, !0),
                    (t.childList || t.subtree) &&
                      e.removeEventListener("DOMNodeRemoved", this, !0);
                },
                addTransientObserver: function (e) {
                  var t;
                  e !== this.target &&
                    (this.addListeners_(e),
                    this.transientObservedNodes.push(e),
                    (t = s.get(e)) || s.set(e, (t = [])),
                    t.push(this));
                },
                removeTransientObservers: function () {
                  var e = this.transientObservedNodes;
                  (this.transientObservedNodes = []),
                    e.forEach(function (e) {
                      this.removeListeners_(e);
                      for (var t = s.get(e), n = 0; n < t.length; n++)
                        if (t[n] === this) {
                          t.splice(n, 1);
                          break;
                        }
                    }, this);
                },
                handleEvent: function (e) {
                  var t;
                  switch ((e.stopImmediatePropagation(), e.type)) {
                    case "DOMAttrModified":
                      var n,
                        i,
                        r = e.attrName,
                        o = e.relatedNode.namespaceURI;
                      ((i = new p("attributes", (n = e.target))).attributeName =
                        r),
                        (i.attributeNamespace = o),
                        (t =
                          e.attrChange === MutationEvent.ADDITION
                            ? null
                            : e.prevValue),
                        f(n, function (e) {
                          if (
                            e.attributes &&
                            (!e.attributeFilter ||
                              !e.attributeFilter.length ||
                              -1 !== e.attributeFilter.indexOf(r) ||
                              -1 !== e.attributeFilter.indexOf(o))
                          )
                            return e.attributeOldValue ? h(t) : i;
                        });
                      break;
                    case "DOMCharacterDataModified":
                      (n = e.target),
                        (i = p("characterData", n)),
                        (t = e.prevValue),
                        f(n, function (e) {
                          if (e.characterData)
                            return e.characterDataOldValue ? h(t) : i;
                        });
                      break;
                    case "DOMNodeRemoved":
                      this.addTransientObserver(e.target);
                    case "DOMNodeInserted":
                      n = e.relatedNode;
                      var a,
                        s = e.target,
                        l =
                          "DOMNodeInserted" === e.type
                            ? ((a = [s]), [])
                            : ((a = []), [s]),
                        u = s.previousSibling,
                        s = s.nextSibling;
                      ((i = p("childList", n)).addedNodes = a),
                        (i.removedNodes = l),
                        (i.previousSibling = u),
                        (i.nextSibling = s),
                        f(n, function (e) {
                          if (e.childList) return i;
                        });
                  }
                  d = c = void 0;
                },
              }),
              (t.MutationObserver = m))
            : (e.log(
                "MutationObserver not supported",
                e.LOG_TYPES.DEBUG,
                "MutationObserver module"
              ),
              (t.MutationObserver = !1));
        })(LeadiD, LeadiD.util);
      } catch (err) {
        LeadiD.logError(err, "MutationObserver module parsing");
      }
      try {
        ((o) => {
          function a(t, n) {
            var i = { a: parseFloat(1 - (1 - t.a) * (1 - n.a)) };
            return (
              ["r", "g", "b"].forEach(function (e) {
                i[e] =
                  255 *
                  (((t[e] / 255) * t.a) / i.a +
                    ((n[e] / 255) * n.a * (1 - t.a)) / i.a);
              }),
              i
            );
          }
          function t(e) {
            var t;
            if (3 == (e = "#" == e.charAt(0) ? e.substr(1) : e).length) {
              var n = e,
                i = 0;
              for (
                e = "", n = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(n).slice(1);
                i < 3;
                ++i
              )
                e += n[i] + n[i];
            }
            return (
              (t = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(e).slice(1)),
              "rgb(" +
                (t = [
                  parseInt(t[0], 16),
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                ]).join(",") +
                ")"
            );
          }
          function s(e) {
            return o.isString(e)
              ? (o.isString(n[e.toLowerCase()]) && (e = "#" + n[e.toLowerCase()]),
                i.test(e) ? (e = t(e)) : l.test(e) || (e = "rgba(0,0,0,0)"),
                e)
              : "rgba(0,0,0,0)";
          }
          var n, i, l;
          o.colors =
            ((i = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i),
            (l =
              /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/),
            (n = {
              aliceblue: "f0f8ff",
              antiquewhite: "faebd7",
              aqua: "0ff",
              aquamarine: "7fffd4",
              azure: "f0ffff",
              beige: "f5f5dc",
              bisque: "ffe4c4",
              black: "000",
              blanchedalmond: "ffebcd",
              blue: "00f",
              blueviolet: "8a2be2",
              brown: "a52a2a",
              burlywood: "deb887",
              burntsienna: "ea7e5d",
              cadetblue: "5f9ea0",
              chartreuse: "7fff00",
              chocolate: "d2691e",
              coral: "ff7f50",
              cornflowerblue: "6495ed",
              cornsilk: "fff8dc",
              crimson: "dc143c",
              cyan: "0ff",
              darkblue: "00008b",
              darkcyan: "008b8b",
              darkgoldenrod: "b8860b",
              darkgray: "a9a9a9",
              darkgreen: "006400",
              darkgrey: "a9a9a9",
              darkkhaki: "bdb76b",
              darkmagenta: "8b008b",
              darkolivegreen: "556b2f",
              darkorange: "ff8c00",
              darkorchid: "9932cc",
              darkred: "8b0000",
              darksalmon: "e9967a",
              darkseagreen: "8fbc8f",
              darkslateblue: "483d8b",
              darkslategray: "2f4f4f",
              darkslategrey: "2f4f4f",
              darkturquoise: "00ced1",
              darkviolet: "9400d3",
              deeppink: "ff1493",
              deepskyblue: "00bfff",
              dimgray: "696969",
              dimgrey: "696969",
              dodgerblue: "1e90ff",
              firebrick: "b22222",
              floralwhite: "fffaf0",
              forestgreen: "228b22",
              fuchsia: "f0f",
              gainsboro: "dcdcdc",
              ghostwhite: "f8f8ff",
              gold: "ffd700",
              goldenrod: "daa520",
              gray: "808080",
              green: "008000",
              greenyellow: "adff2f",
              grey: "808080",
              honeydew: "f0fff0",
              hotpink: "ff69b4",
              indianred: "cd5c5c",
              indigo: "4b0082",
              ivory: "fffff0",
              khaki: "f0e68c",
              lavender: "e6e6fa",
              lavenderblush: "fff0f5",
              lawngreen: "7cfc00",
              lemonchiffon: "fffacd",
              lightblue: "add8e6",
              lightcoral: "f08080",
              lightcyan: "e0ffff",
              lightgoldenrodyellow: "fafad2",
              lightgray: "d3d3d3",
              lightgreen: "90ee90",
              lightgrey: "d3d3d3",
              lightpink: "ffb6c1",
              lightsalmon: "ffa07a",
              lightseagreen: "20b2aa",
              lightskyblue: "87cefa",
              lightslategray: "789",
              lightslategrey: "789",
              lightsteelblue: "b0c4de",
              lightyellow: "ffffe0",
              lime: "0f0",
              limegreen: "32cd32",
              linen: "faf0e6",
              magenta: "f0f",
              maroon: "800000",
              mediumaquamarine: "66cdaa",
              mediumblue: "0000cd",
              mediumorchid: "ba55d3",
              mediumpurple: "9370db",
              mediumseagreen: "3cb371",
              mediumslateblue: "7b68ee",
              mediumspringgreen: "00fa9a",
              mediumturquoise: "48d1cc",
              mediumvioletred: "c71585",
              midnightblue: "191970",
              mintcream: "f5fffa",
              mistyrose: "ffe4e1",
              moccasin: "ffe4b5",
              navajowhite: "ffdead",
              navy: "000080",
              oldlace: "fdf5e6",
              olive: "808000",
              olivedrab: "6b8e23",
              orange: "ffa500",
              orangered: "ff4500",
              orchid: "da70d6",
              palegoldenrod: "eee8aa",
              palegreen: "98fb98",
              paleturquoise: "afeeee",
              palevioletred: "db7093",
              papayawhip: "ffefd5",
              peachpuff: "ffdab9",
              peru: "cd853f",
              pink: "ffc0cb",
              plum: "dda0dd",
              powderblue: "b0e0e6",
              purple: "800080",
              red: "f00",
              rosybrown: "bc8f8f",
              royalblue: "4169e1",
              saddlebrown: "8b4513",
              salmon: "fa8072",
              sandybrown: "f4a460",
              seagreen: "2e8b57",
              seashell: "fff5ee",
              sienna: "a0522d",
              silver: "c0c0c0",
              skyblue: "87ceeb",
              slateblue: "6a5acd",
              slategray: "708090",
              slategrey: "708090",
              snow: "fffafa",
              springgreen: "00ff7f",
              steelblue: "4682b4",
              tan: "d2b48c",
              teal: "008080",
              thistle: "d8bfd8",
              tomato: "ff6347",
              turquoise: "40e0d0",
              violet: "ee82ee",
              wheat: "f5deb3",
              white: "fff",
              whitesmoke: "f5f5f5",
              yellow: "ff0",
              yellowgreen: "9acd32",
            }),
            {
              mergeRGBA: a,
              hexToRGB: t,
              rgbToHex: function (e, t, n) {
                function i(e) {
                  if (o.isString(e)) e = parseInt(e, 10);
                  else if (!o.isNum(e)) return "";
                  e = e.toString(16);
                  return 1 === e.length ? "0" + e : e;
                }
                return "#" + i(e) + i(t) + i(n);
              },
              parseColor: s,
              getFontColor: function (e) {
                return s(o.getStyle(e, "color"));
              },
              getBackgroundColor: function e(t, n) {
                var i = o.getStyle(t, "background-color"),
                  r = "BODY" === t.tagName;
                return (
                  (n = n || !1),
                  (i = s(i).match(l)),
                  (i = {
                    r: parseInt(i[1], 10),
                    g: parseInt(i[2], 10),
                    b: parseInt(i[3], 10),
                    a: o.isDefined(i[4]) && i[4].length ? parseFloat(i[4]) : 1,
                  }),
                  r && 0 === i.a && (i = { r: 255, g: 255, b: 255, a: 1 }),
                  (i = n ? a(n, i) : i).a < 1
                    ? 0 === i.a
                      ? e(t.parentNode, n)
                      : e(t.parentNode, i)
                    : "rgba(" +
                      parseInt(i.r, 10) +
                      ", " +
                      parseInt(i.g, 10) +
                      ", " +
                      parseInt(i.b, 10) +
                      ", " +
                      i.a +
                      ")"
                );
              },
            });
        })((LeadiD, LeadiD.util));
      } catch (err) {
        LeadiD.logError(err, "Colors module parsing");
      }
      try {
        ((l, u, d) => {
          function c(e) {
            return (
              "none" != u.getStyle(e, "display") &&
              "hidden" != u.getStyle(e, "visibility")
            );
          }
          u.visibility = {
            inspect: function (e, t) {
              l.log(
                "Visibility module inspect()",
                l.LOG_TYPES.DEBUG,
                "Visibility module inspect()"
              );
              try {
                var n,
                  i = {},
                  r =
                    ((a = (a = e).getBoundingClientRect()),
                    ((s = {}).boxHeight = u.isDefined(a.height)
                      ? a.height
                      : a.bottom - a.top),
                    (s.boxWidth = u.isDefined(a.width)
                      ? a.width
                      : a.right - a.left),
                    s),
                  o = {
                    textColor: function () {
                      return d.getFontColor(e);
                    },
                    backgroundColor: function () {
                      return d.getBackgroundColor(e);
                    },
                    boxWidth: function () {
                      return r.boxWidth;
                    },
                    boxHeight: function () {
                      return r.boxHeight;
                    },
                    parentsDisplayed: function () {
                      return (function e(t) {
                        t = t.parentNode;
                        return (
                          !(!u.isNull(t) && document !== t) || (!!c(t) && e(t))
                        );
                      })(e);
                    },
                    childrenDisplayed: function () {
                      return (function e(t) {
                        for (
                          var n, i = t.children, r = c(t), o = 0;
                          i.length > o && r;
                          ++o
                        ) {
                          n = i[o];
                          try {
                            if (u.isEmpty(n.textContent || n.innerText || n.alt))
                              continue;
                          } catch (e) {
                            l.logError(
                              e,
                              "formcapture.js Visibility._areChildrenDisplayed"
                            );
                          }
                          r = (r = c(n)) && e(n);
                        }
                        return r;
                      })(e);
                    },
                    textSize: function () {
                      return u.getStyleInPixels(e, "font-size");
                    },
                  };
                if (!u.isDefined(t)) for (n in ((t = []), o)) t.push(n);
                return (
                  t.forEach(function (e) {
                    e in o && (i[e] = o[e]());
                  }),
                  i
                );
              } catch (e) {
                l.logError(e, "Visibility module inspect()");
              }
              var a, s;
            },
          };
        })(LeadiD, LeadiD.util, LeadiD.util.colors);
      } catch (err) {
        LeadiD.logError(err, "Visibility module parsing");
      }
      try {
        ((e, o, a) => {
          function t() {
            e.mutationhandler.observe(document.body, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeFilter: ["style", "width", "height", "id", "class"],
            });
          }
          (e.mutationhandler = new (function () {
            var t = new o.Hooker("MutationHandler"),
              n = new o.DelayQueue(t.run, 200),
              i = !1,
              r = !1;
            o.MutationObserver &&
              (i = new o.MutationObserver(function (e) {
                e.forEach(function (e) {
                  o.isElementMutationExempt(e.target) || n.push(e);
                });
              })),
              (this.register = function (e) {
                t.register(e);
              }),
              (this.observe = function (e, t) {
                i &&
                  !r &&
                  (i.observe(e, t),
                  (r = !0),
                  a.fireCustomEvent("mutation-observing"),
                  a.addCustomEventHandler("destroy", function () {
                    i.disconnect();
                  }));
              }),
              (this.observable = !!i);
          })()),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({ startObservation: t }),
            a.addCustomEventHandler("newTokenAcquired", t),
            a.addCustomEventHandler("tokenReady", t);
        })(LeadiD, LeadiD.util, LeadiD.util.events);
      } catch (err) {
        LeadiD.logError(err, "MutationHandler module parsing");
      }
      try {
        ((t, n, e) => {
          var i,
            r = {
              init: function () {
                var e =
                  t.cdnURL +
                  "/iframe.html?token=" +
                  t.token +
                  "&apiurl=" +
                  encodeURIComponent(t.apiURL) +
                  "&lck=" +
                  t.getLck() +
                  "&lac=" +
                  t.getLac();
                i && i.parentNode && i.parentNode.removeChild(i),
                  (i = document.createElement("iframe")),
                  n.makeElementContentExempt(i),
                  i.setAttribute("src", e),
                  i.setAttribute("title", "^"),
                  (i.style.tabindex = -1),
                  n
                    .getWrapperElement()
                    .appendChild(n.makeElementMutationExempt(i));
              },
            };
          e.addCustomEventHandler("newTokenAcquired", function () {
            try {
              r.init();
            } catch (e) {
              t.logError(e, "deviceid.js init");
            }
          });
        })(LeadiD, LeadiD.util, LeadiD.util.events);
      } catch (err) {
        LeadiD.logError(err, "DeviceId module parsing");
      }
      try {
        ((D, L, S, T) => {
          function e() {
            try {
              D.content.snap();
            } catch (e) {
              D.logError(e, "Content_v2 module snap");
            }
          }
          (D.content = (() => {
            var u,
              a,
              s,
              f,
              e,
              t = {},
              l = "LeadiD-snap-element-seen",
              d = !1,
              c = ["script", "noscript"],
              o = [
                "action",
                "align",
                "bgcolor",
                "border",
                "class",
                "color",
                "dir",
                "height",
                "method",
                "novalidate",
                "size",
                "style",
                "width",
                "wrap",
                L.ELEMENT_ID_ATTRIBUTE,
                l,
              ],
              m = {},
              g = {},
              p = {};
            function h(e) {
              var t,
                n,
                i = e.tagName.toLowerCase(),
                r = ["type"],
                o = [
                  "display",
                  "width",
                  "height",
                  "borderBottomColor",
                  "borderBottomStyle",
                  "borderBottomWidth",
                  "borderLeftColor",
                  "borderLeftStyle",
                  "borderLeftWidth",
                  "borderRightColor",
                  "borderRightStyle",
                  "borderRightWidth",
                  "borderTopColor",
                  "borderTopStyle",
                  "borderTopWidth",
                ];
              try {
                t = e.getAttribute("type");
              } catch (e) {
                t = "";
              }
              if (
                !(
                  (p.hasOwnProperty(i) &&
                    ((!t && m.hasOwnProperty(i)) ||
                      (t && g.hasOwnProperty(i) && g[i].hasOwnProperty(t)))) ||
                  L.inArray(i, ["body"])
                )
              ) {
                if (
                  ((defaultStyleFrame = s()),
                  ((e = document.createElement(i)).className =
                    "LeadiD-test-element"),
                  L.makeElementMutationExempt(e),
                  defaultStyleFrame.contentWindow.document.body.appendChild(e),
                  !p.hasOwnProperty(i))
                )
                  for (p[i] = v(e), n = r.length - 1; 0 <= n; --n)
                    delete p[i][r[n]];
                if (t) {
                  if (
                    (g.hasOwnProperty(i) || (g[i] = {}), !g[i].hasOwnProperty(t))
                  )
                    for (g[i][t] = a(e), n = o.length - 1; 0 <= n; --n)
                      delete g[i][t][o[n]];
                } else if (!m.hasOwnProperty(i))
                  for (m[i] = a(e), n = o.length - 1; 0 <= n; --n)
                    delete m[i][o[n]];
                defaultStyleFrame.contentWindow.document.body.removeChild(e);
              }
            }
            function v(e) {
              var t,
                n = {},
                i = e.tagName.toLowerCase();
              if (!e.attributes) return {};
              for (var r = e.attributes.length - 1; 0 <= r; --r)
                (t = e.attributes[r]),
                  L.inArray(t.name.toLowerCase(), o) ||
                    L.isEmpty(t.value) ||
                    "on" === t.name.substr(0, 2) ||
                    "javascript:" === t.value.substr(0, 11) ||
                    (n[t.name] = t.value);
              return (
                "input" != i ||
                  L.inArray(n.type, [
                    "button",
                    "checkbox",
                    "radio",
                    "reset",
                    "submit",
                  ]) ||
                  delete n.value,
                n
              );
            }
            (e = null),
              (s = function () {
                return (
                  null === e &&
                    ((e = document.createElement("iframe")),
                    L.makeElementContentExempt(e),
                    L.getWrapperElement().appendChild(e),
                    (e.contentWindow.document.body.innerHTML = "<body> </body>")),
                  e
                );
              }),
              (f = function () {
                null !== e && (L.getWrapperElement().removeChild(e), (e = null));
              }),
              (u = document.body.style.pixelLeft
                ? function (e, t) {
                    var n,
                      i,
                      r,
                      o,
                      a,
                      s,
                      l = [
                        "fontSize",
                        "textKashida",
                        "textKashidaSpace",
                        "verticalAlign",
                        "zoom",
                        "msContentZoomLimit",
                        "msContentZoomLimitMax",
                        "msContentZoomLimitMin",
                        "msTextKashida",
                        "msTextKashidaSpace",
                        "msZoom",
                      ],
                      u = {},
                      d = {},
                      c = /^\d+(cm|em|ex|in|mm|pc|pt|%){1}?$/i,
                      f = {};
                    for (s in t)
                      (f[s] = t[s]),
                        L.inArray(s, l) ||
                          ((a = t[s].match(c)) &&
                            ((n = parseFloat(a[0])),
                            (i =
                              "%" == a[0].charAt(a[0].length - 1)
                                ? "%"
                                : a[0].substr(a[0].length - 2)),
                            (d[s] = { value: n, unit: i }),
                            0 < n) &&
                            (!u.hasOwnProperty(i) || u[i] < n) &&
                            (u[i] = n));
                    for (s in ((r = e.style.left),
                    (o = e.runtimeStyle.left),
                    (e.runtimeStyle.left = e.currentStyle.left),
                    (a = t.fontSize.match(c)) &&
                      ((e.style.left = "1em"),
                      (f.fontSize = e.style.pixelLeft + "px")),
                    u))
                      (e.style.left = u[s] + s),
                        (u[s] = e.style.pixelLeft / u[s]);
                    for (s in ((e.style.left = r), (e.runtimeStyle.left = o), d))
                      0 === d[s].value
                        ? (f[s] = "0px")
                        : (f[s] = Math.ceil(d[s].value * u[d[s].unit]) + "px");
                    return f;
                  }
                : function (e, t) {
                    return t;
                  });
            var r = [
              "background",
              "border",
              "borderBottom",
              "borderColor",
              "borderImage",
              "borderLeft",
              "borderRadius",
              "borderRight",
              "borderStyle",
              "borderTop",
              "borderWidth",
              "cssText",
              "flex",
              "font",
              "gridTemplate",
              "listStyle",
              "margin",
              "outline",
              "overflow",
              "padding",
              "MozAnimation",
              "MozBinding",
              "MozBorderEnd",
              "MozBorderStart",
              "MozColumnRule",
              "MozFlex",
              "MozOutlineRadius",
              "MozTransform",
              "MozTransition",
              "msAnimation",
              "msFlex",
              "msScrollLimit",
              "msTransform",
              "msTransition",
              "webkitAnimation",
              "webkitBorderAfter",
              "webkitBorderBefore",
              "webkitBorderEnd",
              "webkitBorderStart",
              "webkitColumnRule",
              "webkitFlex",
              "webkitMarquee",
              "webkitMask",
              "webkitMaskPosition",
              "webkitMaskRepeat",
              "webkitPerspectiveOrigin",
              "webkitTransform",
              "webkitTransition",
            ];
            if (window.getComputedStyle)
              a = function (e) {
                var t,
                  n = {},
                  i = window.getComputedStyle(e, null);
                for (t in i)
                  isNaN(parseInt(t, 10)) &&
                    L.isString(i[t]) &&
                    !L.inArray(t, r) &&
                    (n[t] = i[t]);
                return n;
              };
            else {
              if (!document.body.currentStyle)
                throw (
                  (D.log(
                    "Cannot collect element styles",
                    D.LOG_TYPES.INFO,
                    "Content_v2 module"
                  ),
                  new Error(
                    "This browser doesn't support a method to collect element styles!"
                  ))
                );
              (d = !0),
                (a = function (e) {
                  var t,
                    n = {},
                    i = e.currentStyle;
                  for (t in i)
                    "string" != typeof i[t] || L.inArray(t, r) || (n[t] = i[t]);
                  return n;
                });
            }
            function b(e) {
              var t = e.tagName.toLowerCase();
              return L.inArray(t, [
                "area",
                "base",
                "link",
                "meta",
                "param",
                "source",
                "track",
              ])
                ? []
                : ((t = a(e)),
                  h(e),
                  y(
                    e,
                    ((e, t) => {
                      var n,
                        i = e.tagName.toLowerCase(),
                        r = !1;
                      try {
                        n = e.getAttribute("type");
                      } catch (e) {
                        n = "";
                      }
                      return (
                        n && g.hasOwnProperty(i) && g[i].hasOwnProperty(n)
                          ? (r = g[i][n])
                          : m.hasOwnProperty(i) && (r = m[i]),
                        r ? L.objectDiff(t, r) : t
                      );
                    })(e, t)
                  ));
            }
            function y(e, t) {
              var n,
                i,
                r,
                o,
                a,
                s = {},
                l = { cssFloat: "float", styleFloat: "float" };
              for (o in (d && (s = u(e, t)), t)) {
                for (
                  i = (n = (n = t[o]).replace(
                    /rgba\(\d+,\s*\d+,\s*\d+,\s*0\)/g,
                    "transparent"
                  )).indexOf("rgb(");
                  -1 !== i;
  
                )
                  (r = n.indexOf(")", i)),
                    (i = (n =
                      3 === (a = n.substring(i, r).match(/\d+/g)).length
                        ? n.substring(0, i) +
                          T.rgbToHex.apply(this, a) +
                          n.substr(r + 1)
                        : n).indexOf("rgb(", i));
                L.isEmpty(n) || (s[o] = n);
              }
              for (o in l)
                s.hasOwnProperty(o) &&
                  (s.hasOwnProperty(l[o]) || (s[l[o]] = s[o]), delete s[o]);
              return s;
            }
            function E(e) {
              var t,
                n,
                i,
                r,
                o = {};
              try {
                if (
                  L.isDefined(e.tagUrn) &&
                  "urn:schemas-microsoft-com:vml" == e.tagUrn
                )
                  return null;
                switch (e.nodeType) {
                  case 1:
                    o.t = e.tagName.toLowerCase();
                    try {
                      t = e.getAttribute("type");
                    } catch (e) {
                      t = "";
                    }
                    if ("input" == o.t && "hidden" == t) return null;
                    if (L.inArray(o.t.toLowerCase(), c)) return null;
                    if (
                      ((o.a =
                        ((i = v((n = e))),
                        (r = n.tagName.toLowerCase()),
                        h(n),
                        (i = p.hasOwnProperty[r] ? L.objectDiff(i, p[r]) : i))),
                      L.isEmpty(o.a) && delete o.a,
                      (o.s = b(e)),
                      o.s.hasOwnProperty("display") && "none" == o.s.display)
                    )
                      return null;
                    break;
                  case 3:
                    o.t = "T";
                    try {
                      o.x = L.compressWhitespace(e.nodeValue);
                    } catch (e) {
                      return null;
                    }
                    if (L.isEmpty(o.x)) return null;
                    break;
                  default:
                    return null;
                }
              } catch (e) {
                return (
                  D.logError(e, "Content_v2 module _collectElementInfo (1)"), null
                );
              }
              L.isDefinedAndNotNull(L.getElementId(e)) &&
                (o.z = L.getElementId(e));
              try {
                e[l] = !0;
              } catch (e) {}
              try {
                e["LeadiD-element-parent"] = e.parentNode;
              } catch (e) {}
              return o;
            }
            function n(e, t) {
              try {
                var n = {
                    id: D.token,
                    url: document.location.href,
                    capture_time: L.getCurrentTime(),
                    element_ids: "[" + t.join(",") + "]",
                  },
                  i = document.getElementsByTagName("base");
                i.length && (e.base = i[0].href),
                  (n.elements = L.json.stringify(e)),
                  L.api.doApiCall(D.apiURL + "/Snap", n);
              } catch (e) {
                D.logError(e, "Content_v2 module _save()");
              }
            }
            function i(i) {
              var o,
                a,
                s,
                l = {},
                u = {},
                d = {},
                c = [];
              this.snap = function (e) {
                var t, n;
                L.bench && L.bench.begin("content"),
                  (e = e),
                  (t = function () {
                    try {
                      var e, t;
                      for (e in ((l.collectStructure = L.bench
                        ? L.bench.checkpoint("content")
                        : -1),
                      (o = this.structure),
                      (a = (function e(t, n, i) {
                        var r;
                        for (i = i || [], r = t.length - 1; 0 <= r; --r)
                          t[r].hasOwnProperty(n) && i.push(t[r][n]),
                            t[r].hasOwnProperty("c") && e(t[r].c, n, i);
                        return i;
                      })(o, "s")),
                      u))
                        a.push(u[e]);
                      for (e in d) for (t in d[e]) a.push(d[e][t]);
                      (r = function () {
                        var e;
                        (l.indexStyles = L.bench
                          ? L.bench.checkpoint("content")
                          : -1),
                          (s = this.styles),
                          0 === o.length
                            ? i(!1)
                            : (((e = {
                                structure: o,
                                styles: s,
                                defaultStyles: u,
                                defaultTypeStyles: d,
                                benchmarks: l,
                                version: 2,
                              }).viewport = {
                                width: L.viewport.width(),
                                height: L.viewport.height(),
                              }),
                              i(e, c));
                      }),
                        ((n = new L.Worker("Content::styleMakerWorker")).styles =
                          []),
                        (n.styleLookup = {}),
                        (n.step = function (e) {
                          var t, n;
                          for (n in e)
                            (t = n + ":" + e[n]),
                              this.styleLookup.hasOwnProperty(t) ||
                                ((this.styleLookup[t] = this.styles.length),
                                this.styles.push(t));
                        }),
                        (n.onError = function (e) {
                          D.logError(
                            e,
                            "Content_v2 module _extractStyles styleMaker"
                          );
                        }),
                        (n.onComplete = function () {
                          var e;
                          function i(e, t) {
                            var n,
                              i,
                              r = [];
                            for (i in e) (n = i + ":" + e[i]), r.push(t[n]);
                            return r;
                          }
                          ((e = new L.Worker(
                            "Content::styleInversionWorker"
                          )).styles = this.styles),
                            (e.styleLookup = this.styleLookup),
                            (e.step = function (e) {
                              e.hasOwnProperty("s") &&
                                (e.s = i(e.s, this.styleLookup)),
                                e.hasOwnProperty("c") && this.addTasks(e.c);
                            }),
                            (e.onError = function (e) {
                              D.logError(
                                e,
                                "Content_v2 module _extractStyles styleInversion"
                              );
                            }),
                            (e.onComplete = function () {
                              var e,
                                t = new L.Worker("Content::defaultsWorker"),
                                n = [];
                              for (e in ((t.styles = this.styles),
                              (t.styleLookup = this.styleLookup),
                              (t.step = function (e) {
                                for (var t in e) e[t] = i(e[t], this.styleLookup);
                              }),
                              (t.onError = function (e) {
                                D.logError(
                                  e,
                                  "Content_v2 module _extractStyles defaults"
                                );
                              }),
                              (t.onComplete = r),
                              d))
                                n.push(d[e]);
                              n.push(u), t.run(n);
                            }),
                            e.run(o);
                        }),
                        n.run(a);
                    } catch (e) {
                      D.logError(
                        e,
                        "Content_v2 module _collectStructure oncomplete"
                      );
                    }
                    var r, n;
                  }),
                  ((n = new L.Worker("Content_v2::_collectHTMLStructure")).setup =
                    function () {
                      this.structure = [];
                    }),
                  (n.step = function (e) {
                    var t,
                      n,
                      i = e.element,
                      e = e.obj;
                    if (
                      (L.isNull(e) && (e = this.structure),
                      !L.isElementContentExempt(i) &&
                        ((t = E(i)) &&
                          (e.push(t), L.isDefinedAndNotNull(t.z)) &&
                          c.push(t.z),
                        t) &&
                        i.childNodes &&
                        0 < i.childNodes.length)
                    ) {
                      t.c = [];
                      for (var r = 0, o = i.childNodes.length; r < o; r++)
                        (n = { element: i.childNodes[r], obj: t.c }),
                          this.addTask(n);
                    }
                  }),
                  (n.teardown = function () {
                    var e,
                      t,
                      n = [
                        "azimuth",
                        "borderCollapse",
                        "borderSpacing",
                        "captionSide",
                        "color",
                        "cursor",
                        "direction",
                        "elevation",
                        "emptyCells",
                        "fontFamily",
                        "fontSize",
                        "fontStyle",
                        "fontVariant",
                        "fontWeight",
                        "letterSpacing",
                        "lineHeight",
                        "listStyleImage",
                        "listStylePosition",
                        "listStyleType",
                        "orphans",
                        "pitchRange",
                        "pitch",
                        "quotes",
                        "richness",
                        "speakHeader",
                        "speakNumeral",
                        "speakPunctuation",
                        "speechRate",
                        "stress",
                        "textAlign",
                        "textIndent",
                        "textTransform",
                        "visibility",
                        "voiceFamily",
                        "volume",
                        "whiteSpace",
                        "widows",
                        "wordSpacing",
                      ];
                    for (e in (f(), m)) {
                      for (t in (u.hasOwnProperty(e) || (u[e] = {}), m[e]))
                        L.inArray(t, n) && (u[e][t] = m[e][t]);
                      (i = document.getElementsByTagName(e)).length
                        ? (u[e] = y(i[0], u[e]))
                        : ((i = document.createElement(e)),
                          L.makeElementMutationExempt(i),
                          document.body.appendChild(i),
                          (u[e] = y(i, u[e])),
                          document.body.removeChild(i));
                    }
                    for (e in g) {
                      var i,
                        r,
                        o = !!(i = document.getElementsByTagName(e)).length;
                      for (r in (o
                        ? (i = i[0])
                        : ((i = document.createElement(e)),
                          L.makeElementMutationExempt(i),
                          document.body.appendChild(i)),
                      d.hasOwnProperty(e) || (d[e] = {}),
                      g[e])) {
                        for (t in (d[e].hasOwnProperty(r) || (d[e][r] = {}),
                        g[e][r]))
                          L.inArray(t, n) && (d[e][r][t] = g[e][r][t]);
                        d[e][r] = y(i, d[e][r]);
                      }
                      o || document.body.removeChild(i);
                    }
                  }),
                  (n.onComplete = t),
                  (n.onError = function (e) {
                    D.logError(e, "Content_v2 module _collectHTMLStructure");
                  }),
                  n.run({ element: e, obj: null });
              };
            }
            return (
              (t.snap = function (e) {
                D.hasValidToken()
                  ? ((e = e || document.body),
                    new i(n).snap(e),
                    S.fireCustomEvent("content-snap"))
                  : D.log(
                      "Invalid token in snap",
                      D.LOG_TYPES.ERROR,
                      "Content_v2 module"
                    );
              }),
              (t.collectData = function (e, t, n) {
                t ? new i(n).snap(e) : n(E(e), [L.getElementId(e)]),
                  S.fireCustomEvent("content-partialSnap");
              }),
              (t.ELEMENT_SEEN_ATTRIBUTE = l),
              "function" == typeof LeadiDMakeGlobalFunction &&
                LeadiDMakeGlobalFunction({
                  _collectDefaults: h,
                  _getDefaultStyleFrame: s,
                  _removeDefaultStyleFrame: f,
                  _defaultStyles: m,
                  _defaultTypeStyles: g,
                }),
              t
            );
          })()),
            S.addCustomEventHandler("tokenReady", (D.snap = e)),
            S.addCustomEventHandler("newTokenAcquired", e);
        })(LeadiD, LeadiD.util, LeadiD.util.events, LeadiD.util.colors);
      } catch (err) {
        LeadiD.logError(err, "Content_v2 module parsing");
      }
      try {
        ((b, y, e, t, E) => {
          function n() {
            function d(u, d, c) {
              var f = [],
                m = [],
                g = 0,
                p = !1;
              function h() {
                if (
                  (b.log(
                    "_checkSendData",
                    b.LOG_TYPES.DEBUG,
                    "ContentMutations module",
                    {
                      finishedProcessing: p,
                      outstandingRequests: g,
                      snapshotDataLength: f.length,
                    }
                  ),
                  p && 0 === g && 0 < f.length)
                )
                  try {
                    var e = {
                      id: b.token,
                      url: window.location.href,
                      capture_time: y.getCurrentTime(),
                      element_ids: "[" + m.join(",") + "]",
                      type: "partial",
                    };
                    (e.elements = y.json.stringify(f)),
                      (f = []),
                      (m = []),
                      y.api.doApiCall(b.apiURL + "/Snap", e),
                      (p = !1);
                  } catch (e) {
                    b.logError(e, "ContentMutations module _sendData");
                  }
              }
              function v(e) {
                for (var t = e.length - 1; 0 <= t; --t)
                  y.nodeContains(document.body, e[t]) ||
                    document.body == e[t] ||
                    e.splice(t, 1);
                return e;
              }
              (this.processMutations = function () {
                for (
                  var e, t, n, i, r, o = [], a = [], s = u.length - 1;
                  0 <= s;
                  --s
                )
                  -1 != (t = c.indexOf(u[s])) && u.splice(s, 1);
                for (e = d.length - 1; 0 <= e; --e)
                  -1 != (t = c.indexOf(d[e])) && (d.splice(e, 1), c.splice(t, 1));
                for (var l = d.length - 1; 0 <= l; --l)
                  d[l].parentNode &&
                    !y.inArray(d[l].parentNode, o) &&
                    o.push(d[l].parentNode);
                for (l = u.length - 1; 0 <= l; --l)
                  document.body == u[l]
                    ? y.inArray(document.body, o) || o.push(document.body)
                    : u[l].parentNode &&
                      !y.inArray(u[l].parentNode, o) &&
                      o.push(u[l].parentNode);
                for (l = c.length - 1; 0 <= l; --l)
                  !y.isDefined(c[l]["LeadiD-element-parent"]) ||
                    y.isNull(c[l]["LeadiD-element-parent"]) ||
                    y.inArray(c[l]["LeadiD-element-parent"], o) ||
                    o.push(c[l]["LeadiD-element-parent"]);
                for (n = o.length - 1; 0 <= n; --n)
                  if (y.isDefined(o[n].nodeType) && 11 !== o[n].nodeType) {
                    for (r = !1, i = o.length - 1; 0 <= i; --i)
                      if (n != i && y.nodeContains(o[i], o[n])) {
                        r = !0;
                        break;
                      }
                    r || a.push(o[n]);
                  }
                if (1 == (a = v(a)).length && document.body == a[0]) E.snap();
                else if (0 !== a.length) {
                  for (l = a.length - 1; 0 <= l; --l)
                    ((i) => {
                      y.isDefined(i[E.ELEMENT_SEEN_ATTRIBUTE]) &&
                        (g++,
                        E.collectData(i, !0, function (e, t) {
                          var n;
                          g--,
                            e &&
                              ((n = y.getElementId(i)),
                              f.push({ action: "change", elementID: n, data: e }),
                              (m = m.concat(t))),
                            h();
                        }));
                    })(a[l]);
                  (p = !0), h();
                }
              }),
                "function" == typeof LeadiDMakeGlobalFunction &&
                  LeadiDMakeGlobalFunction({ _pruneFilteredElements: v });
            }
            this.handleMutations = function (e) {
              try {
                for (
                  var t, n, i, r, o = [], a = [], s = [], l = 0, u = e.length;
                  l < u;
                  ++l
                )
                  switch ((t = e[l]).type) {
                    case "attributes":
                    case "characterData":
                      if (document.body == t.target) n = document.body;
                      else {
                        if (!t.target.parentNode) continue;
                        n = t.target;
                      }
                      y.isElementMutationExempt(t.target) ||
                        y.isElementMutationExempt(n) ||
                        y.inArray(n, o) ||
                        o.push(n);
                      break;
                    case "childList":
                      if (
                        !y.isElementMutationExempt(t.target) &&
                        !y.inArray(t.target, o)
                      ) {
                        if (0 < t.addedNodes.length)
                          for (i = 0, r = t.addedNodes.length; i < r; ++i)
                            y.isElementMutationExempt(t.addedNodes[i]) ||
                              y.inArray(t.addedNodes[i], a) ||
                              a.push(t.addedNodes[i]);
                        if (0 < t.removedNodes.length)
                          for (i = 0, r = t.removedNodes.length; i < r; ++i)
                            y.isElementMutationExempt(t.removedNodes[i]) ||
                              y.inArray(t.removedNodes[i], s) ||
                              s.push(t.removedNodes[i]);
                      }
                  }
                (o || a || s) && new d(o, a, s).processMutations();
              } catch (e) {
                b.logError(e, "ContentMutations module");
              }
            };
          }
          y.MutationObserver
            ? (e.addOneShotCustomEventHandler("content-snap", function () {
                var e = new n();
                t.register(e.handleMutations);
              }),
              (LeadiD.snap = function () {}))
            : b.log(
                "MutationObserver not detected",
                b.LOG_TYPES.DEBUG,
                "ContentMutations module"
              );
        })(
          LeadiD,
          LeadiD.util,
          LeadiD.util.events,
          LeadiD.mutationhandler,
          LeadiD.content
        );
      } catch (err) {
        LeadiD.logError(err, "ContentMutations module parsing");
      }
      try {
        ((s, l, n, i) => {
          function r() {
            function e(e) {
              e = -e.getTimezoneOffset();
              return null !== e ? e : 0;
            }
            function t(e, t, n) {
              var i = new Date();
              return (
                void 0 !== e && i.setFullYear(e), i.setMonth(t), i.setDate(n), i
              );
            }
            return (
              (n = new Date()),
              (i = 7 < n.getMonth()),
              (n =
                (r = i
                  ? e(t(n.getFullYear(), 5, 2))
                  : e(t(n.getFullYear(), 0, 2))) - e(n)),
              r < 0 || i ? 0 != n : n < 0
            );
            var n, i, r;
          }
          function o(e) {
            var a = {};
            return (
              (function e(t, n) {
                var i, r, o;
                for (o in n)
                  if (
                    ((i = 0 < t.length ? t + "\\" + o : o),
                    (r = n[o]),
                    l.isObject(r))
                  )
                    e(i, r);
                  else if (l.isPrimitive(r))
                    (l.isString(r) && r.length < 1) || (a[i] = r);
                  else if (l.isFunc(r))
                    l.inArray(r, u) ? (a[i] = r()) : (a[i] = !0);
                  else
                    try {
                      a[i] = r.toString();
                    } catch (e) {
                      s.log(
                        "Error on value.toString()",
                        s.LOG_TYPES.DEBUG,
                        "Dom module flatten()"
                      );
                      continue;
                    }
              })("", e),
              a
            );
          }
          var u, a, d;
          (s.dom =
            ((u = ["javaEnabled"]),
            (a = ["Audio", "localStorage", "sessionStorage", "WebSocket"]),
            (d = ["prototype"]),
            {
              init: function () {
                var e,
                  t = {
                    navigator: {
                      vendor: void 0,
                      language: void 0,
                      appCodeName: void 0,
                      platform: void 0,
                      productSub: void 0,
                      cpuClass: void 0,
                      oscpu: void 0,
                      userAgent: void 0,
                    },
                    screen: { height: void 0, width: void 0 },
                    document: { defaultCharset: void 0 },
                    localStorage: void 0,
                    sessionStorage: void 0,
                    WebSocket: void 0,
                  };
                l.bench && l.bench.begin("dom"),
                  ((t = (function e(t, n) {
                    for (var i in n) {
                      try {
                        if ("unknown" == typeof t[i]) {
                          if (l.inArray(i, u))
                            try {
                              n[i] = t[i]();
                            } catch (e) {
                              s.log(
                                "Error on util.inArray(" + i + ",_exec)",
                                s.LOG_TYPES.INFO,
                                "Dom module _process()"
                              );
                            }
                          continue;
                        }
                      } catch (e) {
                        s.log(
                          "Error on typeof " + t[i],
                          s.LOG_TYPES.INFO,
                          "Dom module _process()"
                        );
                        continue;
                      }
                      l.isDefined(t[i]) && !l.inArray(i, d)
                        ? (!l.isString(i) && !l.isNum(i)) || l.isDefined(n[i])
                          ? l.isObject(n[i]) && e(t[i], n[i])
                          : l.inArray(i, a)
                          ? (n[i] = !0)
                          : l.isFunc(t[i])
                          ? l.inArray(i, u)
                            ? (n[i] = t[i]())
                            : (n[i] = !0)
                          : (n[i] = t[i])
                        : delete n[i];
                    }
                    return n;
                  })(window, t)).dst = r()),
                  (t.tz = new Date().getTimezoneOffset()),
                  (t.flash_version = i.getVersion("Flash")),
                  (t = t = o(t)),
                  (e = s.apiURL + "/SaveDom"),
                  (t.token = s.token),
                  (t.execution_time = l.bench && l.bench.end("dom")),
                  l.api.doApiCall(e, t),
                  n.fireCustomEvent("dom-init");
              },
            })),
            n.addCustomEventHandler("newTokenAcquired", function () {
              try {
                s.dom.init();
              } catch (e) {
                s.logError(e, "dom.js dom.init");
              }
            });
        })(LeadiD, LeadiD.util, LeadiD.util.events, LeadiD.PluginDetect);
      } catch (err) {
        LeadiD.logError(err, "Dom module parsing");
      }
      try {
        ((p, h, v, b, y) => {
          function e() {
            (c = []), (O = []);
          }
          function E(e) {
            var t;
            return "SELECT" == e.tagName.toUpperCase()
              ? -1 < (t = e.selectedIndex) && t < e.options.length
                ? e.options[t].value
                : ""
              : e.value;
          }
          function D(e) {
            var t = e.parentNode;
            if ("label" == t.tagName.toLowerCase() && "" === t.htmlFor) return t;
            if (e.id)
              for (
                var n = document.getElementsByTagName("LABEL"), i = 0;
                n.length > i;
                ++i
              )
                if (n[i].htmlFor == e.id) return n[i];
          }
          function L(e, t) {
            return h.isDefined(e.innerText)
              ? e.innerText
              : e.textContent.replace(t.textContent, "");
          }
          function S(e) {
            var t = e.selectedIndex;
            return -1 < t && t < e.options.length ? e.options[t].text : "";
          }
          function o(e) {
            return h.isDefined(e.type) &&
              e.type.toUpperCase() in { CHECKBOX: 1, RADIO: 1 } &&
              e.checked
              ? e.checked
              : "";
          }
          function T(e) {
            return (
              e.options && e.options.length && h.isNum(e.options.length)
                ? e.options
                : e.getElementsByTagName("OPTION")
            ).length;
          }
          function w(e) {
            var t = "";
            if (!e.className) return t;
            for (var n = e.className.split(" "), i = 0; i < n.length; i++)
              0 === n[i].indexOf("leadid") && (t += n[i] + " ");
            return t.trim();
          }
          function a(e) {
            var t,
              n,
              i,
              r = null;
            return (
              e &&
                e.alt &&
                ((i =
                  !!(i = e) &&
                  0 <= (i = i.getBoundingClientRect()).top &&
                  0 <= i.left &&
                  i.bottom <=
                    (window.innerHeight ||
                      document.documentElement.clientHeight) &&
                  i.right <=
                    (window.innerWidth || document.documentElement.clientWidth)),
                (n = (t = e.complete && 0 < e.naturalWidth)
                  ? [
                      "boxWidth",
                      "boxHeight",
                      "parentsDisplayed",
                      "childrenDisplayed",
                    ]
                  : [
                      "textColor",
                      "backgroundColor",
                      "boxWidth",
                      "boxHeight",
                      "parentsDisplayed",
                      "childrenDisplayed",
                      "textSize",
                    ]),
                ((r = {}).alt = e.alt),
                (r.visibility = b.inspect(e, n)),
                i && t && (r.visibility.isInViewport = i),
                t && (r.visibility.loaded = t),
                h.isDefined(h.getElementId(e))) &&
                (r.id = h.getElementId(e)),
              r
            );
          }
          function N(e) {
            var t = null;
            if (e) {
              var n = e.parentNode;
              if ((n = e.tagName && "label" == e.tagName.toLowerCase() ? e : n))
                for (
                  var i = n.getElementsByTagName("IMG"), r = 0;
                  r < i.length && !(t = a(i[r]));
                  r++
                );
            }
            return t;
          }
          function A(e) {
            var t = null;
            if (e)
              for (var n = 0; n < e.attributes.length; n++) {
                var i = e.attributes[n];
                0 === i.name.indexOf("data-leadid") &&
                  ((t = t || {})[i.name] = i.value);
              }
            return t;
          }
          function s(e, t) {
            var n,
              i,
              r = {
                type: t,
                id: e.id,
                name: e.name,
                checked: o(e),
                options: T(e),
              };
            for (i in ("hidden" !== t && (r.value = E(e)),
            h.isDefined(h.getElementId(e)) && (r.element_id = h.getElementId(e)),
            (t = D(e)),
            h.isDefined(t) &&
              ((r.label = L(t, e)),
              (r.labelvisibility = b.inspect(t)),
              h.isDefined(h.getElementId(t)) &&
                (r.label_element_id = h.getElementId(t)),
              (n = N(t))) &&
              ((r.img_alt = n.alt),
              (r.img_visibility = n.visibility),
              (r.img_element_id = n.id),
              (r.label && r.label.trim()) ||
                ((r.labelvisibility = b.inspect(t, [
                  "boxWidth",
                  "boxHeight",
                  "parentsDisplayed",
                  "childrenDisplayed",
                ])),
                (r.label = "||1||"))),
            (r.fieldvisibility = b.inspect(e, [
              "boxWidth",
              "boxHeight",
              "parentsDisplayed",
              "childrenDisplayed",
            ])),
            (n = A(e)) && (r.data_attributes = n),
            (t = w(e)) && (r.class = t),
            "SELECT" == e.tagName.toUpperCase() && (r.optionLabel = S(e)),
            (sensitiveData = h.isSensitiveData(r)) &&
              ((n = (r.id || r.name).toLowerCase()),
              h.sensitiveDataElements.push(n)),
            void 0 !== r.value && sensitiveData && delete r.value,
            r))
              "" === r[i] && delete r[i];
            return r;
          }
          function t(e) {
            for (var t = [], n = 0; n < l.length; ++n) {
              var i = e.getElementsByTagName(l[n]),
                t = t.concat(h.nodeListToArray(i));
              e.tagName && l[n] == e.tagName.toLowerCase() && t.push(e);
            }
            var r = e.getElementsByTagName("label");
            for (
              e.tagName &&
                "label" == e.tagName.toLowerCase() &&
                (r[r.length] = e),
                n = 0;
              r.length > n;
              ++n
            ) {
              var o = r[n];
              o.htmlFor &&
                (o = document.getElementById(o.htmlFor)) &&
                !h.inArray(o, t) &&
                o.tagName &&
                h.inArray(o.tagName.toLowerCase(), l) &&
                t.push(o);
            }
            return t;
          }
          function n(e) {
            for (var t, n, i, r, o = [], a = 0; e.length > a; ++a)
              h.isElementFormcaptureExempt((t = e[a])) ||
                ((i =
                  h.isDefined(t.tagName) && "SELECT" == t.tagName.toUpperCase()
                    ? t.multiple
                      ? "SELECT-MULTIPLE"
                      : "SELECT-ONE"
                    : t.type),
                (n = s(t, i)),
                (i = k(t, i)) &&
                  !0 === i.isMultifieldPhone &&
                  ((r = C()), h.isNull(r) || O.push(r)),
                ((e, t, n) => {
                  if (!f) return 1;
                  try {
                    var i = y.stringify(t),
                      r = f.get(e);
                    return !h.isDefined(r) || r !== i || h.isDefinedAndNotNull(n)
                      ? (f.set(e, i), 1)
                      : void 0;
                  } catch (e) {
                    return 1;
                  }
                })(t, n, r) &&
                  (h.isDefinedAndNotNull(r) && (n.multifieldPhoneNumbers = [r]),
                  o.push(n)));
            return o;
          }
          function i(e) {
            0 < e.length &&
              h.api.doApiCall(p.apiURL + "/InitFormData", {
                id: p.token,
                formdata: y.stringify(e),
                execution_time: h.bench ? h.bench.end("formCapture_init") : -1,
                lck: p.getLck(),
              });
          }
          function C() {
            try {
              for (var e, t, n = 0; n < c.length; n++)
                if (
                  (e = c[n]).lastElement &&
                  0 < n &&
                  (4 === e.value.length &&
                    "undefined" !== c[n - 1] &&
                    !1 === c[n - 1].lastElement &&
                    "undefined" !== c[n - 2] &&
                    !1 === c[n - 2].lastElement &&
                    (t = c[n - 2].value + c[n - 1].value + e.value),
                  7 === e.value.length &&
                    "undefined" !== c[n - 1] &&
                    !1 === c[n - 1].lastElement &&
                    (t = c[n - 1].value + e.value),
                  h.isDefinedAndNotNull(t)) &&
                  !h.inArray(t, O)
                )
                  return t;
            } catch (e) {
              p.logError(e, "formcapture.js _retrievePhoneNum");
            }
            return null;
          }
          function u(e) {
            for (var t in c) if (c[t].node === e) return t;
            return !1;
          }
          function k(e, t) {
            var n,
              i,
              r,
              o,
              a = !1,
              s = !1,
              l = E(e);
            try {
              t &&
                h.inArray(t.toLowerCase(), ["text", "number", "tel"]) &&
                ((n = (o = d(l)).isPartial),
                (s = o.isEnd),
                (l = o.value),
                (a = n || s)),
                a &&
                  (!1 === (i = u(e))
                    ? c.push({ value: l, node: e, lastElement: s })
                    : ((c[i].value = l), (c[i].lastElement = s)),
                  c.sort(function (e, t) {
                    return 2 === (r = h.comparePosition(e.node, t.node))
                      ? 1
                      : 4 === r
                      ? -1
                      : 0;
                  }));
            } catch (e) {
              p.logError(e, "formcapture.js _detectPhoneNum");
            }
            return { isMultifieldPhone: a, knownPhoneFields: c, lastElement: s };
          }
          function d(e) {
            var t = {};
            return (
              (t.isPartial = /^\(?[2-9]\d{2}\)?$/.test(e)),
              (t.isEnd = /^\d{4}$/.test(e) || /^(\d{3}[ .-]?\d{4})$/.test(e)),
              (t.value = t.isPartial || t.isEnd ? e.match(/\d+/g).join("") : e),
              t
            );
          }
          var r, l, c, O, P, x, I, M, f;
          function m() {
            try {
              p.formcapture.init(document);
            } catch (e) {
              p.logError(e, "formcapture.js init");
            }
          }
          (p.formcapture =
            ((l = ["input", "select"]),
            (c = []),
            (O = []),
            v.addCustomEventHandler("reInit", function () {
              h.WeakMap && (f = new h.WeakMap()), e();
            }),
            (f = !1),
            h.WeakMap && (f = new h.WeakMap()),
            (P = 0),
            (x = ["text", "number", "tel", "text"]),
            (I = /^[2-9]\d{2}$/),
            (M = /^\d{4}$/),
            (r = function (e, t) {
              var n,
                i,
                r = null,
                o = e.getAttribute("id"),
                a = e.getAttribute("name"),
                s = E(e),
                l = null,
                u = null,
                d = null,
                c = e.checked,
                f = p.apiURL + "/SaveFormField",
                m = {},
                g =
                  (h.bench && h.bench.begin("saveFormField"),
                  h.isArray(t) && -1 != (i = t.indexOf(e)) && t.splice(i, 1),
                  (r =
                    "SELECT" == e.tagName.toUpperCase()
                      ? ((u = S(e)),
                        (d = T(e)),
                        e.multiple ? "SELECT-MULTIPLE" : "SELECT-ONE")
                      : void 0 === e.type
                      ? null
                      : e.type),
                  (t = w(e)),
                  h.isDefined(h.getElementId(e)) &&
                    (m.element_id = h.getElementId(e)),
                  (i = D(e)),
                  h.isDefined(i) &&
                    ((m.labelvisibility = y.stringify(b.inspect(i))),
                    h.isDefined(h.getElementId(i)) &&
                      (m.label_element_id = h.getElementId(i)),
                    (l = N(i))) &&
                    !L(i, e) &&
                    (m.labelvisibility = y.stringify(
                      b.inspect(i, [
                        "boxWidth",
                        "boxHeight",
                        "parentsDisplayed",
                        "childrenDisplayed",
                      ])
                    )),
                  (m.fieldvisibility = y.stringify(
                    b.inspect(e, [
                      "boxWidth",
                      "boxHeight",
                      "parentsDisplayed",
                      "childrenDisplayed",
                    ])
                  )),
                  (n = A(e)),
                  (P =
                    2 == P && h.inArray(r.toLowerCase(), x) && M.test(s)
                      ? ((m.phone = 1), 0)
                      : h.inArray(r.toLowerCase(), x) && I.test(s)
                      ? Math.min(P + 1, 2)
                      : 0),
                  k(e, r));
              g &&
                !0 === g.isMultifieldPhone &&
                ((g = C()),
                h.isNull(g) ||
                  ((m.multifieldPhoneNumbers = y.stringify([g])), O.push(g))),
                o && (m.tagid = o),
                a && (m.name = a),
                s && (m.value = s),
                c && (m.checked = c),
                d && (m.options = d),
                u && (m.optionLabel = u),
                i &&
                  ((m.label = L(i, e)),
                  (m.label && m.label.trim()) || !l || (m.label = "||1||")),
                l &&
                  ((m.img_alt = l.alt),
                  (m.img_visibility = y.stringify(l.visibility)),
                  (m.img_element_id = l.id)),
                n && (m.data_attributes = y.stringify(n)),
                t && (m.class = t),
                (m.type = r),
                (m.id = p.token),
                (m.execution_time = h.bench ? h.bench.end("saveFormField") : -1),
                (m.lck = p.getLck()),
                !(sensitiveData = h.inArray(o || a, h.sensitiveDataElements)) &&
                  p.hasValidToken() &&
                  h.api.doApiCall(f, m),
                v.fireCustomEvent("formcapture-saveFormField", e);
            }),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({
                _getValue: E,
                _getLabel: D,
                _getLabelText: L,
                _getOptionLabel: S,
                _getChecked: o,
                _getNumOptions: T,
                _getProperties: s,
                _initializeMultifieldPhoneNumbers: e,
                _collectProcessElements: t,
                _processElements: n,
                _initFormData: i,
                _detectPhoneNum: k,
                _retrievePhoneNum: C,
                _phoneFieldExists: u,
                _validatePhoneNumVal: d,
                _classAttrInspect: w,
                _getImgAttributes: a,
                _getLabelImgAttributes: N,
                _getDataAttributes: A,
                knownPhoneFields: function () {
                  return c;
                },
                submittedPhoneNumbersGetter: function () {
                  return O;
                },
                submittedPhoneNumbersSetter: function (e) {
                  O.push(e);
                },
              }),
            {
              init: function (e) {
                h.bench && h.bench.begin("formCapture_init"),
                  p.hasValidToken() &&
                    (i(n(t((e = h.isDefinedAndNotNull(e) ? e : document)))),
                    h.isThereAnySelectAll) &&
                    (localStorage.setItem(
                      "LEADID_TCPA_BRANDNAMES_SELECTALL_CLICKED",
                      "0"
                    ),
                    h.saveSelectAllBrandNames()),
                  v.fireCustomEvent("formcapture-init");
              },
              saveFormField: r,
            })),
            v.addCustomEventHandler("newTokenAcquired", m),
            v.addCustomEventHandler("tokenReady", m);
        })(
          LeadiD,
          LeadiD.util,
          LeadiD.util.events,
          LeadiD.util.visibility,
          LeadiD.util.json
        );
      } catch (err) {
        LeadiD.logError(err, "FormCapture module parsing");
      }
      try {
        ((l, u, r, d) => {
          (t = []),
            (n = ["input", "select"]),
            (i = (() => {
              var e = !1,
                t = document.createElement("a"),
                n = u.isDefined(window.pageYOffset)
                  ? ((i = window.pageYOffset), window.pageXOffset)
                  : document.documentElement && document.documentElement.scrollTop
                  ? ((i = document.documentElement.scrollTop),
                    document.documentElement.scrollLeft)
                  : document.body.scrollTop
                  ? ((i = document.body.scrollTop), document.body.scrollLeft)
                  : (i = 0),
                i =
                  ((t.style.top = i + "px"),
                  (t.style.left = n + "px"),
                  (t.style.position = "absolute"),
                  (t.href = "#"),
                  r.bindOnce(
                    t,
                    "focusin",
                    function () {
                      e = !0;
                    },
                    !1
                  ),
                  document.body.appendChild(u.makeElementMutationExempt(t)),
                  !1);
              u.isDefined(document.activeElement) && (i = document.activeElement);
              try {
                t.focus();
              } catch (e) {}
              if ((document.body.removeChild(t), i && u.isFunc(i.focus)))
                try {
                  i.focus();
                } catch (e) {}
              return e ? "focusin" : "focus";
            })()),
            u.isThereAnySelectAll &&
              (window.addEventListener &&
                window.addEventListener("beforeunload", function () {
                  a();
                }),
              document.addEventListener) &&
              document.addEventListener("readystatechange", function () {
                a();
              });
          var t,
            n,
            i,
            e = {
              init: function () {
                var e, a, s, t;
                r.bindEventHandler(document.body, i, o, !0),
                  r.bindEventHandler(document.body, "change", c, !0),
                  (e = ["click", "focusin" == i ? "focusout" : "blur"]),
                  (a = [
                    "date",
                    "datetime",
                    "email",
                    "hidden",
                    "month",
                    "number",
                    "tel",
                    "text",
                    "url",
                    "week",
                    "range",
                    "select",
                  ]),
                  (s = ["radio", "checkbox"]),
                  (t = document.body),
                  u.isDefined(t) &&
                    (e.forEach(function (e) {
                      r.bindEventHandler(
                        t,
                        e,
                        function (e) {
                          try {
                            var t,
                              n,
                              i = !1,
                              r = u.isDefined(e.target) ? e.target : e.srcElement,
                              o = (u.isString(r.type) ? r.type : r.tagName)
                                .split("-")[0]
                                .toLowerCase();
                            if (u.isDefined(e.type))
                              switch (e.type) {
                                case "blur":
                                case "focusout":
                                  i = u.inArray(o, a);
                                  break;
                                case "click":
                                  i = u.inArray(o, s);
                              }
                            i &&
                              ((t = u.isDefined(r.id) ? r.id : ""),
                              (n = u.isDefined(r.name) ? r.name : ""),
                              u.inArray(
                                (t || n).toLowerCase(),
                                u.sensitiveDataElements
                              ) || d.saveFormField(r));
                          } catch (e) {
                            l.logError(e, "forminteractions.js _bindProcessBody");
                          }
                        },
                        !0
                      );
                    }),
                    r.bindOnce(
                      t,
                      "keyup",
                      function (e) {
                        var t = u.isNum(e.which) ? e.which : e.keyCode,
                          e = u.isDefined(e.target) ? e.target : e.srcElement,
                          n = (u.isDefined(e.type) ? e.type : e.tagName)
                            .split("-")[0]
                            .toLowerCase();
                        13 == t &&
                          u.inArray(n, a.concat(s)) &&
                          d.saveFormField(e);
                      },
                      !0
                    ));
              },
            };
          function o(e) {
            e = u.isDefined(e.target) ? e.target : e.srcElement;
            e.tagName &&
              u.inArray(e.tagName.toLowerCase(), n) &&
              !u.inArray(e, t) &&
              t.push(e);
          }
          function a() {
            if (
              "1" ==
              localStorage.getItem("LEADID_TCPA_BRANDNAMES_SELECTALL_CLICKED")
            ) {
              localStorage.setItem(
                "LEADID_TCPA_BRANDNAMES_SELECTALL_CLICKED",
                "0"
              );
              for (
                var e = u.getChangedBrandNameElements(), t = 0;
                t < e.length;
                t++
              )
                d.init(e[t]);
              u.saveSelectAllBrandNames();
            }
          }
          function c(e) {
            e = u.isDefined(e.target) ? e.target : e.srcElement;
            u.isThereAnySelectAll &&
              (a(), e) &&
              u.getSelectAllAttr(e) &&
              localStorage.setItem(
                "LEADID_TCPA_BRANDNAMES_SELECTALL_CLICKED",
                "1"
              ),
              u.inArray(e, t) || d.init(e);
          }
          var s = r.addCustomEventHandler("formcapture-init", function () {
            try {
              e.init();
            } catch (e) {
              l.logError(e, "forminteractions.js init");
            }
            r.unbindCustomEventHandler("formcapture-init", s);
          });
        })(LeadiD, LeadiD.util, LeadiD.util.events, LeadiD.formcapture);
      } catch (err) {
        LeadiD.logError(err, "FormInteractions module parsing");
      }
      try {
        ((o, a, e, s) => {
          function t() {
            function i(e) {
              var n = [];
              return (
                e.forEach(function (e) {
                  var t;
                  (t = []),
                    ("attributes" !== (e = e).type &&
                      "characterData" !== e.type) ||
                    a.isElementMutationExempt(e.target)
                      ? Array.prototype.forEach.call(e.addedNodes, function (e) {
                          e.parentNode &&
                            !a.isElementMutationExempt(e) &&
                            t.push(e);
                        })
                      : t.push(e.target),
                    t.forEach(function (e) {
                      a.inArray(e, n) || n.push(e);
                    });
                }),
                n
              );
            }
            function r(e) {
              for (
                var t = ["input", "select", "label"], n = e;
                n.tagName && !a.inArray(n.tagName.toLowerCase(), t);
  
              ) {
                if (n instanceof HTMLBodyElement || !n.parentNode) return e;
                n = n.parentNode;
              }
              return (n =
                n instanceof HTMLLabelElement
                  ? ((e) => {
                      if (e instanceof HTMLLabelElement) {
                        if (!a.isEmpty(e.htmlFor))
                          return document.getElementById(e.htmlFor);
                        var t = e.getElementsByTagName("input"),
                          n = e.getElementsByTagName("select"),
                          i = e.getElementsByTagName("*");
                        if (t.length && !n.length) return t[0];
                        if (n.length) return n[0];
                        for (var r = 0; i.length > r; ++r)
                          if (
                            i[r].tagName &&
                            a.inArray(i[r].tagName.toLowerCase(), [
                              "input",
                              "select",
                            ])
                          )
                            return i[r];
                      }
                      return e;
                    })(n)
                  : n);
            }
            this.handleMutations = function (e) {
              var t,
                e = i(e),
                n = [];
              e.forEach(function (e) {
                e = ((e) => {
                  for (var t = [e]; null !== (e = e.parentNode); ) t.unshift(e);
                  return t;
                })(e);
                document === e[0] && n.push(e);
              }),
                0 < n.length &&
                  (null ===
                    (t = r(
                      (e = ((e) => {
                        var t = 0,
                          n = document;
                        if (1 == e.length) return e[0].pop().parentNode;
                        var i,
                          r = !1;
                        do {
                          for (i = 0; i < e.length; ++i) {
                            var o = e[i][t] || !1,
                              r = r || o;
                            if (!o || o != r) return n;
                          }
                        } while (((n = r), ++t, o));
                        return n;
                      })(n))
                    )) &&
                    o.log(
                      "Nearest form element is null",
                      o.LOG_TYPES.DEBUG,
                      "Formmutations module",
                      { "Lowest common parent": e.toString() }
                    ),
                  s.init(t));
            };
          }
          var n, i;
          e.observable &&
            ((n = new t()),
            (i = s.init),
            e.register(n.handleMutations),
            (s.init = function (e) {
              a.isDefined(e) && i(e);
            }));
        })(LeadiD, LeadiD.util, LeadiD.mutationhandler, LeadiD.formcapture);
      } catch (err) {
        LeadiD.logError(err, "FormMutations module parsing");
      }
      try {
        ((e) => {
          function t(e, t) {
            for (var n = e.length - 1; 0 <= n; n--)
              if (-1 < t.toLowerCase().indexOf(e[n].toLowerCase())) return !0;
            return !1;
          }
          function n() {
            t(
              [
                "Googlebot",
                "Bingbot",
                "Slurp Bot",
                "DuckDuckBot",
                "Baiduspider",
                "YandexBot",
                "Sogou Pic Spider",
                "Sogou head spider",
                "Sogou web spider",
                "Sogou Orion spider",
                "Sogou-Test-Spider",
                "Exabot",
                "facebot",
                "facebookexternalhit",
                "ia_archiver",
                "pingbot",
                "Yahoo Ad Monitoring",
                "Google Page Speed Insights",
                "msnbot",
                "Google-Adwords",
                "YandexMobileBot",
                "HubSpot Webcrawler",
                "wkhtmltopdf",
                "wkhtmltoimage",
                "Google Bot",
                "Applebot",
                "smtbot",
                "komodiabot",
                "genieo.com/webfilter",
                "surveybot",
                "Seznam screenshot-generator",
                "Google-Structured-Data-Testing-Tool",
                "ZumBot",
                "EveryoneSocialBot",
                "Phantom.js bot",
                "360Spider",
                "Sunbot",
                "Sunspider",
                "Thunderspider",
                "Icebot",
                "Airspider",
                "Spacebot",
                "Hypnospider",
                "Lightningspider",
                "Hypnobot",
                "Madbot",
                "Turbotoad",
                "Seabot",
                "TinEye-bot",
                "scrapy",
                "screenshot bot",
                "fr_bot",
                "magpie-crawler",
                "ArchiveBot",
                "Ads/Bot",
                "FAST-WebCrawler",
                "WeSEE_Bot",
                "MJ12bot",
                "Web Downloader",
                "Screaming Frog SEO Spider",
                "linkdexbot",
              ],
              navigator.userAgent
            )
              ? (e.log(
                  "Banned user agent detected",
                  e.LOG_TYPES.DEBUG,
                  "Init module",
                  { "User-agent:": navigator.userAgent },
                  ""
                ),
                e.destroy())
              : e.init();
          }
          n(),
            "function" == typeof LeadiDMakeGlobalFunction &&
              LeadiDMakeGlobalFunction({
                init: n,
                stringContainsPhraseInArray: t,
              });
        })(LeadiD);
      } catch (err) {
        LeadiD.logError(
          err,
          "init.js - error parsing module or in init.js init()"
        );
      }
    }
  })();