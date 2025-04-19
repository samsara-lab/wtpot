function $D(v, S) {
  for (var y = 0; y < S.length; y++) {
    const R = S[y];
    if (typeof R != "string" && !Array.isArray(R)) {
      for (const k in R)
        if (k !== "default" && !(k in v)) {
          const D = Object.getOwnPropertyDescriptor(R, k);
          D && Object.defineProperty(v, k, D.get ? D : {
            enumerable: !0,
            get: () => R[k]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
function YD(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var V0 = { exports: {} }, av = {}, ny = { exports: {} }, At = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ix;
function WD() {
  if (Ix) return At;
  Ix = 1;
  var v = Symbol.for("react.element"), S = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), g = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), F = Symbol.iterator;
  function W(L) {
    return L === null || typeof L != "object" ? null : (L = F && L[F] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, X = Object.assign, de = {};
  function fe(L, J, qe) {
    this.props = L, this.context = J, this.refs = de, this.updater = qe || Q;
  }
  fe.prototype.isReactComponent = {}, fe.prototype.setState = function(L, J) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, J, "setState");
  }, fe.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function Oe() {
  }
  Oe.prototype = fe.prototype;
  function be(L, J, qe) {
    this.props = L, this.context = J, this.refs = de, this.updater = qe || Q;
  }
  var ze = be.prototype = new Oe();
  ze.constructor = be, X(ze, fe.prototype), ze.isPureReactComponent = !0;
  var Ge = Array.isArray, Re = Object.prototype.hasOwnProperty, it = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function dt(L, J, qe) {
    var rt, yt = {}, mt = null, Ot = null;
    if (J != null) for (rt in J.ref !== void 0 && (Ot = J.ref), J.key !== void 0 && (mt = "" + J.key), J) Re.call(J, rt) && !He.hasOwnProperty(rt) && (yt[rt] = J[rt]);
    var Et = arguments.length - 2;
    if (Et === 1) yt.children = qe;
    else if (1 < Et) {
      for (var bt = Array(Et), ln = 0; ln < Et; ln++) bt[ln] = arguments[ln + 2];
      yt.children = bt;
    }
    if (L && L.defaultProps) for (rt in Et = L.defaultProps, Et) yt[rt] === void 0 && (yt[rt] = Et[rt]);
    return { $$typeof: v, type: L, key: mt, ref: Ot, props: yt, _owner: it.current };
  }
  function Xt(L, J) {
    return { $$typeof: v, type: L.type, key: J, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function vt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === v;
  }
  function ct(L) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(qe) {
      return J[qe];
    });
  }
  var et = /\/+/g;
  function je(L, J) {
    return typeof L == "object" && L !== null && L.key != null ? ct("" + L.key) : J.toString(36);
  }
  function tt(L, J, qe, rt, yt) {
    var mt = typeof L;
    (mt === "undefined" || mt === "boolean") && (L = null);
    var Ot = !1;
    if (L === null) Ot = !0;
    else switch (mt) {
      case "string":
      case "number":
        Ot = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case v:
          case S:
            Ot = !0;
        }
    }
    if (Ot) return Ot = L, yt = yt(Ot), L = rt === "" ? "." + je(Ot, 0) : rt, Ge(yt) ? (qe = "", L != null && (qe = L.replace(et, "$&/") + "/"), tt(yt, J, qe, "", function(ln) {
      return ln;
    })) : yt != null && (vt(yt) && (yt = Xt(yt, qe + (!yt.key || Ot && Ot.key === yt.key ? "" : ("" + yt.key).replace(et, "$&/") + "/") + L)), J.push(yt)), 1;
    if (Ot = 0, rt = rt === "" ? "." : rt + ":", Ge(L)) for (var Et = 0; Et < L.length; Et++) {
      mt = L[Et];
      var bt = rt + je(mt, Et);
      Ot += tt(mt, J, qe, bt, yt);
    }
    else if (bt = W(L), typeof bt == "function") for (L = bt.call(L), Et = 0; !(mt = L.next()).done; ) mt = mt.value, bt = rt + je(mt, Et++), Ot += tt(mt, J, qe, bt, yt);
    else if (mt === "object") throw J = String(L), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return Ot;
  }
  function _t(L, J, qe) {
    if (L == null) return L;
    var rt = [], yt = 0;
    return tt(L, rt, "", "", function(mt) {
      return J.call(qe, mt, yt++);
    }), rt;
  }
  function ye(L) {
    if (L._status === -1) {
      var J = L._result;
      J = J(), J.then(function(qe) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = qe);
      }, function(qe) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = qe);
      }), L._status === -1 && (L._status = 0, L._result = J);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ge = { current: null }, ae = { transition: null }, Ee = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: ae, ReactCurrentOwner: it };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return At.Children = { map: _t, forEach: function(L, J, qe) {
    _t(L, function() {
      J.apply(this, arguments);
    }, qe);
  }, count: function(L) {
    var J = 0;
    return _t(L, function() {
      J++;
    }), J;
  }, toArray: function(L) {
    return _t(L, function(J) {
      return J;
    }) || [];
  }, only: function(L) {
    if (!vt(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, At.Component = fe, At.Fragment = y, At.Profiler = k, At.PureComponent = be, At.StrictMode = R, At.Suspense = j, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, At.act = he, At.cloneElement = function(L, J, qe) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var rt = X({}, L.props), yt = L.key, mt = L.ref, Ot = L._owner;
    if (J != null) {
      if (J.ref !== void 0 && (mt = J.ref, Ot = it.current), J.key !== void 0 && (yt = "" + J.key), L.type && L.type.defaultProps) var Et = L.type.defaultProps;
      for (bt in J) Re.call(J, bt) && !He.hasOwnProperty(bt) && (rt[bt] = J[bt] === void 0 && Et !== void 0 ? Et[bt] : J[bt]);
    }
    var bt = arguments.length - 2;
    if (bt === 1) rt.children = qe;
    else if (1 < bt) {
      Et = Array(bt);
      for (var ln = 0; ln < bt; ln++) Et[ln] = arguments[ln + 2];
      rt.children = Et;
    }
    return { $$typeof: v, type: L.type, key: yt, ref: mt, props: rt, _owner: Ot };
  }, At.createContext = function(L) {
    return L = { $$typeof: g, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: D, _context: L }, L.Consumer = L;
  }, At.createElement = dt, At.createFactory = function(L) {
    var J = dt.bind(null, L);
    return J.type = L, J;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(L) {
    return { $$typeof: U, render: L };
  }, At.isValidElement = vt, At.lazy = function(L) {
    return { $$typeof: te, _payload: { _status: -1, _result: L }, _init: ye };
  }, At.memo = function(L, J) {
    return { $$typeof: A, type: L, compare: J === void 0 ? null : J };
  }, At.startTransition = function(L) {
    var J = ae.transition;
    ae.transition = {};
    try {
      L();
    } finally {
      ae.transition = J;
    }
  }, At.unstable_act = he, At.useCallback = function(L, J) {
    return ge.current.useCallback(L, J);
  }, At.useContext = function(L) {
    return ge.current.useContext(L);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(L) {
    return ge.current.useDeferredValue(L);
  }, At.useEffect = function(L, J) {
    return ge.current.useEffect(L, J);
  }, At.useId = function() {
    return ge.current.useId();
  }, At.useImperativeHandle = function(L, J, qe) {
    return ge.current.useImperativeHandle(L, J, qe);
  }, At.useInsertionEffect = function(L, J) {
    return ge.current.useInsertionEffect(L, J);
  }, At.useLayoutEffect = function(L, J) {
    return ge.current.useLayoutEffect(L, J);
  }, At.useMemo = function(L, J) {
    return ge.current.useMemo(L, J);
  }, At.useReducer = function(L, J, qe) {
    return ge.current.useReducer(L, J, qe);
  }, At.useRef = function(L) {
    return ge.current.useRef(L);
  }, At.useState = function(L) {
    return ge.current.useState(L);
  }, At.useSyncExternalStore = function(L, J, qe) {
    return ge.current.useSyncExternalStore(L, J, qe);
  }, At.useTransition = function() {
    return ge.current.useTransition();
  }, At.version = "18.3.1", At;
}
var uv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
uv.exports;
var Bx;
function GD() {
  return Bx || (Bx = 1, function(v, S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = "18.3.1", R = Symbol.for("react.element"), k = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), A = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), fe = Symbol.iterator, Oe = "@@iterator";
      function be(m) {
        if (m === null || typeof m != "object")
          return null;
        var w = fe && m[fe] || m[Oe];
        return typeof w == "function" ? w : null;
      }
      var ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ge = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, dt = null;
      function Xt(m) {
        dt = m;
      }
      He.setExtraStackFrame = function(m) {
        dt = m;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var m = "";
        dt && (m += dt);
        var w = He.getCurrentStack;
        return w && (m += w() || ""), m;
      };
      var vt = !1, ct = !1, et = !1, je = !1, tt = !1, _t = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Ge,
        ReactCurrentOwner: it
      };
      _t.ReactDebugCurrentFrame = He, _t.ReactCurrentActQueue = Re;
      function ye(m) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), G = 1; G < w; G++)
            B[G - 1] = arguments[G];
          ae("warn", m, B);
        }
      }
      function ge(m) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), G = 1; G < w; G++)
            B[G - 1] = arguments[G];
          ae("error", m, B);
        }
      }
      function ae(m, w, B) {
        {
          var G = _t.ReactDebugCurrentFrame, pe = G.getStackAddendum();
          pe !== "" && (w += "%s", B = B.concat([pe]));
          var Ze = B.map(function(xe) {
            return String(xe);
          });
          Ze.unshift("Warning: " + w), Function.prototype.apply.call(console[m], console, Ze);
        }
      }
      var Ee = {};
      function he(m, w) {
        {
          var B = m.constructor, G = B && (B.displayName || B.name) || "ReactClass", pe = G + "." + w;
          if (Ee[pe])
            return;
          ge("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, G), Ee[pe] = !0;
        }
      }
      var L = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, w, B) {
          he(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, w, B, G) {
          he(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, w, B, G) {
          he(m, "setState");
        }
      }, J = Object.assign, qe = {};
      Object.freeze(qe);
      function rt(m, w, B) {
        this.props = m, this.context = w, this.refs = qe, this.updater = B || L;
      }
      rt.prototype.isReactComponent = {}, rt.prototype.setState = function(m, w) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, w, "setState");
      }, rt.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, mt = function(m, w) {
          Object.defineProperty(rt.prototype, m, {
            get: function() {
              ye("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Ot in yt)
          yt.hasOwnProperty(Ot) && mt(Ot, yt[Ot]);
      }
      function Et() {
      }
      Et.prototype = rt.prototype;
      function bt(m, w, B) {
        this.props = m, this.context = w, this.refs = qe, this.updater = B || L;
      }
      var ln = bt.prototype = new Et();
      ln.constructor = bt, J(ln, rt.prototype), ln.isPureReactComponent = !0;
      function gr() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Wr = Array.isArray;
      function gn(m) {
        return Wr(m);
      }
      function qn(m) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, B = w && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return B;
        }
      }
      function Bn(m) {
        try {
          return jn(m), !1;
        } catch {
          return !0;
        }
      }
      function jn(m) {
        return "" + m;
      }
      function Nn(m) {
        if (Bn(m))
          return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(m)), jn(m);
      }
      function Gr(m, w, B) {
        var G = m.displayName;
        if (G)
          return G;
        var pe = w.displayName || w.name || "";
        return pe !== "" ? B + "(" + pe + ")" : B;
      }
      function Qr(m) {
        return m.displayName || "Context";
      }
      function Xn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case D:
            return "Fragment";
          case k:
            return "Portal";
          case U:
            return "Profiler";
          case g:
            return "StrictMode";
          case F:
            return "Suspense";
          case W:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case A:
              var w = m;
              return Qr(w) + ".Consumer";
            case j:
              var B = m;
              return Qr(B._context) + ".Provider";
            case te:
              return Gr(m, m.render, "ForwardRef");
            case Q:
              var G = m.displayName || null;
              return G !== null ? G : Xn(m.type) || "Memo";
            case X: {
              var pe = m, Ze = pe._payload, xe = pe._init;
              try {
                return Xn(xe(Ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sr = Object.prototype.hasOwnProperty, Kr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, ma, or;
      or = {};
      function qr(m) {
        if (Sr.call(m, "ref")) {
          var w = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function Sn(m) {
        if (Sr.call(m, "key")) {
          var w = Object.getOwnPropertyDescriptor(m, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function kr(m, w) {
        var B = function() {
          Cr || (Cr = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: B,
          configurable: !0
        });
      }
      function hi(m, w) {
        var B = function() {
          ma || (ma = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: B,
          configurable: !0
        });
      }
      function ya(m) {
        if (typeof m.ref == "string" && it.current && m.__self && it.current.stateNode !== m.__self) {
          var w = Xn(it.current.type);
          or[w] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, m.ref), or[w] = !0);
        }
      }
      var me = function(m, w, B, G, pe, Ze, xe) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: m,
          key: w,
          ref: B,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: Ze
        };
        return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function $e(m, w, B) {
        var G, pe = {}, Ze = null, xe = null, Ke = null, xt = null;
        if (w != null) {
          qr(w) && (xe = w.ref, ya(w)), Sn(w) && (Nn(w.key), Ze = "" + w.key), Ke = w.__self === void 0 ? null : w.__self, xt = w.__source === void 0 ? null : w.__source;
          for (G in w)
            Sr.call(w, G) && !Kr.hasOwnProperty(G) && (pe[G] = w[G]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          pe.children = B;
        else if (jt > 1) {
          for (var rn = Array(jt), Jt = 0; Jt < jt; Jt++)
            rn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(rn), pe.children = rn;
        }
        if (m && m.defaultProps) {
          var an = m.defaultProps;
          for (G in an)
            pe[G] === void 0 && (pe[G] = an[G]);
        }
        if (Ze || xe) {
          var un = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Ze && kr(pe, un), xe && hi(pe, un);
        }
        return me(m, Ze, xe, Ke, xt, it.current, pe);
      }
      function gt(m, w) {
        var B = me(m.type, w, m.ref, m._self, m._source, m._owner, m.props);
        return B;
      }
      function Bt(m, w, B) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var G, pe = J({}, m.props), Ze = m.key, xe = m.ref, Ke = m._self, xt = m._source, jt = m._owner;
        if (w != null) {
          qr(w) && (xe = w.ref, jt = it.current), Sn(w) && (Nn(w.key), Ze = "" + w.key);
          var rn;
          m.type && m.type.defaultProps && (rn = m.type.defaultProps);
          for (G in w)
            Sr.call(w, G) && !Kr.hasOwnProperty(G) && (w[G] === void 0 && rn !== void 0 ? pe[G] = rn[G] : pe[G] = w[G]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          pe.children = B;
        else if (Jt > 1) {
          for (var an = Array(Jt), un = 0; un < Jt; un++)
            an[un] = arguments[un + 2];
          pe.children = an;
        }
        return me(m.type, Ze, xe, Ke, xt, jt, pe);
      }
      function Yt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === R;
      }
      var Mn = ".", Cn = ":";
      function Er(m) {
        var w = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, G = m.replace(w, function(pe) {
          return B[pe];
        });
        return "$" + G;
      }
      var Zt = !1, Dr = /\/+/g;
      function Wt(m) {
        return m.replace(Dr, "$&/");
      }
      function Gt(m, w) {
        return typeof m == "object" && m !== null && m.key != null ? (Nn(m.key), Er("" + m.key)) : w.toString(36);
      }
      function ri(m, w, B, G, pe) {
        var Ze = typeof m;
        (Ze === "undefined" || Ze === "boolean") && (m = null);
        var xe = !1;
        if (m === null)
          xe = !0;
        else
          switch (Ze) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case R:
                case k:
                  xe = !0;
              }
          }
        if (xe) {
          var Ke = m, xt = pe(Ke), jt = G === "" ? Mn + Gt(Ke, 0) : G;
          if (gn(xt)) {
            var rn = "";
            jt != null && (rn = Wt(jt) + "/"), ri(xt, w, rn, "", function(rd) {
              return rd;
            });
          } else xt != null && (Yt(xt) && (xt.key && (!Ke || Ke.key !== xt.key) && Nn(xt.key), xt = gt(
            xt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (xt.key && (!Ke || Ke.key !== xt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Wt("" + xt.key) + "/"
            ) : "") + jt
          )), w.push(xt));
          return 1;
        }
        var Jt, an, un = 0, Lt = G === "" ? Mn : G + Cn;
        if (gn(m))
          for (var Vi = 0; Vi < m.length; Vi++)
            Jt = m[Vi], an = Lt + Gt(Jt, Vi), un += ri(Jt, w, B, an, pe);
        else {
          var Xl = be(m);
          if (typeof Xl == "function") {
            var is = m;
            Xl === is.entries && (Zt || ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zt = !0);
            for (var nd = Xl.call(is), li, os = 0; !(li = nd.next()).done; )
              Jt = li.value, an = Lt + Gt(Jt, os++), un += ri(Jt, w, B, an, pe);
          } else if (Ze === "object") {
            var ls = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (ls === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : ls) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function Ma(m, w, B) {
        if (m == null)
          return m;
        var G = [], pe = 0;
        return ri(m, G, "", "", function(Ze) {
          return w.call(B, Ze, pe++);
        }), G;
      }
      function vo(m) {
        var w = 0;
        return Ma(m, function() {
          w++;
        }), w;
      }
      function Jo(m, w, B) {
        Ma(m, function() {
          w.apply(this, arguments);
        }, B);
      }
      function Hl(m) {
        return Ma(m, function(w) {
          return w;
        }) || [];
      }
      function ji(m) {
        if (!Yt(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function ho(m) {
        var w = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: j,
          _context: w
        };
        var B = !1, G = !1, pe = !1;
        {
          var Ze = {
            $$typeof: A,
            _context: w
          };
          Object.defineProperties(Ze, {
            Provider: {
              get: function() {
                return G || (G = !0, ge("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(xe) {
                w.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(xe) {
                w._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(xe) {
                w._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(xe) {
                w._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, ge("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(xe) {
                pe || (ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), pe = !0);
              }
            }
          }), w.Consumer = Ze;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var ga = -1, mi = 0, Sa = 1, ai = 2;
      function Or(m) {
        if (m._status === ga) {
          var w = m._result, B = w();
          if (B.then(function(Ze) {
            if (m._status === mi || m._status === ga) {
              var xe = m;
              xe._status = Sa, xe._result = Ze;
            }
          }, function(Ze) {
            if (m._status === mi || m._status === ga) {
              var xe = m;
              xe._status = ai, xe._result = Ze;
            }
          }), m._status === ga) {
            var G = m;
            G._status = mi, G._result = B;
          }
        }
        if (m._status === Sa) {
          var pe = m._result;
          return pe === void 0 && ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, pe), "default" in pe || ge(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, pe), pe.default;
        } else
          throw m._result;
      }
      function Ca(m) {
        var w = {
          // We use these fields to store the result.
          _status: ga,
          _result: m
        }, B = {
          $$typeof: X,
          _payload: w,
          _init: Or
        };
        {
          var G, pe;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Ze) {
                ge("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Ze, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return pe;
              },
              set: function(Ze) {
                ge("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), pe = Ze, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function yi(m) {
        m != null && m.$$typeof === Q ? ge("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? ge("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && ge("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && ge("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: te,
          render: m
        };
        {
          var B;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(G) {
              B = G, !m.name && !m.displayName && (m.displayName = G);
            }
          });
        }
        return w;
      }
      var gi;
      gi = Symbol.for("react.module.reference");
      function T(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === D || m === U || tt || m === g || m === F || m === W || je || m === de || vt || ct || et || typeof m == "object" && m !== null && (m.$$typeof === X || m.$$typeof === Q || m.$$typeof === j || m.$$typeof === A || m.$$typeof === te || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === gi || m.getModuleId !== void 0));
      }
      function oe(m, w) {
        T(m) || ge("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var B = {
          $$typeof: Q,
          type: m,
          compare: w === void 0 ? null : w
        };
        {
          var G;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(pe) {
              G = pe, !m.name && !m.displayName && (m.displayName = pe);
            }
          });
        }
        return B;
      }
      function ce() {
        var m = ze.current;
        return m === null && ge(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Ve(m) {
        var w = ce();
        if (m._context !== void 0) {
          var B = m._context;
          B.Consumer === m ? ge("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === m && ge("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(m);
      }
      function Tt(m) {
        var w = ce();
        return w.useState(m);
      }
      function Nt(m, w, B) {
        var G = ce();
        return G.useReducer(m, w, B);
      }
      function Xe(m) {
        var w = ce();
        return w.useRef(m);
      }
      function St(m, w) {
        var B = ce();
        return B.useEffect(m, w);
      }
      function Fn(m, w) {
        var B = ce();
        return B.useInsertionEffect(m, w);
      }
      function nn(m, w) {
        var B = ce();
        return B.useLayoutEffect(m, w);
      }
      function cn(m, w) {
        var B = ce();
        return B.useCallback(m, w);
      }
      function br(m, w) {
        var B = ce();
        return B.useMemo(m, w);
      }
      function Si(m, w, B) {
        var G = ce();
        return G.useImperativeHandle(m, w, B);
      }
      function Ft(m, w) {
        {
          var B = ce();
          return B.useDebugValue(m, w);
        }
      }
      function Zn() {
        var m = ce();
        return m.useTransition();
      }
      function Nr(m) {
        var w = ce();
        return w.useDeferredValue(m);
      }
      function Ct() {
        var m = ce();
        return m.useId();
      }
      function La(m, w, B) {
        var G = ce();
        return G.useSyncExternalStore(m, w, B);
      }
      var mo = 0, Vl, yo, Xr, ts, Mr, ns, rs;
      function lc() {
      }
      lc.__reactDisabledLog = !0;
      function Il() {
        {
          if (mo === 0) {
            Vl = console.log, yo = console.info, Xr = console.warn, ts = console.error, Mr = console.group, ns = console.groupCollapsed, rs = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: lc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          mo++;
        }
      }
      function go() {
        {
          if (mo--, mo === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: J({}, m, {
                value: Vl
              }),
              info: J({}, m, {
                value: yo
              }),
              warn: J({}, m, {
                value: Xr
              }),
              error: J({}, m, {
                value: ts
              }),
              group: J({}, m, {
                value: Mr
              }),
              groupCollapsed: J({}, m, {
                value: ns
              }),
              groupEnd: J({}, m, {
                value: rs
              })
            });
          }
          mo < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ii = _t.ReactCurrentDispatcher, Lr;
      function So(m, w, B) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (pe) {
              var G = pe.stack.trim().match(/\n( *(at )?)/);
              Lr = G && G[1] || "";
            }
          return `
` + Lr + m;
        }
      }
      var Co = !1, Eo;
      {
        var Bl = typeof WeakMap == "function" ? WeakMap : Map;
        Eo = new Bl();
      }
      function $l(m, w) {
        if (!m || Co)
          return "";
        {
          var B = Eo.get(m);
          if (B !== void 0)
            return B;
        }
        var G;
        Co = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ze;
        Ze = ii.current, ii.current = null, Il();
        try {
          if (w) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (Lt) {
                G = Lt;
              }
              Reflect.construct(m, [], xe);
            } else {
              try {
                xe.call();
              } catch (Lt) {
                G = Lt;
              }
              m.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Lt) {
              G = Lt;
            }
            m();
          }
        } catch (Lt) {
          if (Lt && G && typeof Lt.stack == "string") {
            for (var Ke = Lt.stack.split(`
`), xt = G.stack.split(`
`), jt = Ke.length - 1, rn = xt.length - 1; jt >= 1 && rn >= 0 && Ke[jt] !== xt[rn]; )
              rn--;
            for (; jt >= 1 && rn >= 0; jt--, rn--)
              if (Ke[jt] !== xt[rn]) {
                if (jt !== 1 || rn !== 1)
                  do
                    if (jt--, rn--, rn < 0 || Ke[jt] !== xt[rn]) {
                      var Jt = `
` + Ke[jt].replace(" at new ", " at ");
                      return m.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", m.displayName)), typeof m == "function" && Eo.set(m, Jt), Jt;
                    }
                  while (jt >= 1 && rn >= 0);
                break;
              }
          }
        } finally {
          Co = !1, ii.current = Ze, go(), Error.prepareStackTrace = pe;
        }
        var an = m ? m.displayName || m.name : "", un = an ? So(an) : "";
        return typeof m == "function" && Eo.set(m, un), un;
      }
      function Fi(m, w, B) {
        return $l(m, !1);
      }
      function td(m) {
        var w = m.prototype;
        return !!(w && w.isReactComponent);
      }
      function Ci(m, w, B) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return $l(m, td(m));
        if (typeof m == "string")
          return So(m);
        switch (m) {
          case F:
            return So("Suspense");
          case W:
            return So("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case te:
              return Fi(m.render);
            case Q:
              return Ci(m.type, w, B);
            case X: {
              var G = m, pe = G._payload, Ze = G._init;
              try {
                return Ci(Ze(pe), w, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, Yl = _t.ReactDebugCurrentFrame;
      function el(m) {
        if (m) {
          var w = m._owner, B = Ci(m.type, m._source, w ? w.type : null);
          Yl.setExtraStackFrame(B);
        } else
          Yl.setExtraStackFrame(null);
      }
      function Wl(m, w, B, G, pe) {
        {
          var Ze = Function.call.bind(Sr);
          for (var xe in m)
            if (Ze(m, xe)) {
              var Ke = void 0;
              try {
                if (typeof m[xe] != "function") {
                  var xt = Error((G || "React class") + ": " + B + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                Ke = m[xe](w, xe, G, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                Ke = jt;
              }
              Ke && !(Ke instanceof Error) && (el(pe), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", B, xe, typeof Ke), el(null)), Ke instanceof Error && !(Ke.message in Pt) && (Pt[Ke.message] = !0, el(pe), ge("Failed %s type: %s", B, Ke.message), el(null));
            }
        }
      }
      function Mt(m) {
        if (m) {
          var w = m._owner, B = Ci(m.type, m._source, w ? w.type : null);
          Xt(B);
        } else
          Xt(null);
      }
      var Gl;
      Gl = !1;
      function Ql() {
        if (it.current) {
          var m = Xn(it.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function ut(m) {
        if (m !== void 0) {
          var w = m.fileName.replace(/^.*[\\\/]/, ""), B = m.lineNumber;
          return `

Check your code at ` + w + ":" + B + ".";
        }
        return "";
      }
      function tl(m) {
        return m != null ? ut(m.__source) : "";
      }
      var En = {};
      function Zr(m) {
        var w = Ql();
        if (!w) {
          var B = typeof m == "string" ? m : m.displayName || m.name;
          B && (w = `

Check the top-level render call using <` + B + ">.");
        }
        return w;
      }
      function Ar(m, w) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var B = Zr(w);
          if (!En[B]) {
            En[B] = !0;
            var G = "";
            m && m._owner && m._owner !== it.current && (G = " It was passed a child from " + Xn(m._owner.type) + "."), Mt(m), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, G), Mt(null);
          }
        }
      }
      function bo(m, w) {
        if (typeof m == "object") {
          if (gn(m))
            for (var B = 0; B < m.length; B++) {
              var G = m[B];
              Yt(G) && Ar(G, w);
            }
          else if (Yt(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var pe = be(m);
            if (typeof pe == "function" && pe !== m.entries)
              for (var Ze = pe.call(m), xe; !(xe = Ze.next()).done; )
                Yt(xe.value) && Ar(xe.value, w);
          }
        }
      }
      function Tn(m) {
        {
          var w = m.type;
          if (w == null || typeof w == "string")
            return;
          var B;
          if (typeof w == "function")
            B = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === te || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === Q))
            B = w.propTypes;
          else
            return;
          if (B) {
            var G = Xn(w);
            Wl(B, m.props, "prop", G, m);
          } else if (w.PropTypes !== void 0 && !Gl) {
            Gl = !0;
            var pe = Xn(w);
            ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qt(m) {
        {
          for (var w = Object.keys(m.props), B = 0; B < w.length; B++) {
            var G = w[B];
            if (G !== "children" && G !== "key") {
              Mt(m), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Mt(null);
              break;
            }
          }
          m.ref !== null && (Mt(m), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
        }
      }
      function uc(m, w, B) {
        var G = T(m);
        if (!G) {
          var pe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = tl(w);
          Ze ? pe += Ze : pe += Ql();
          var xe;
          m === null ? xe = "null" : gn(m) ? xe = "array" : m !== void 0 && m.$$typeof === R ? (xe = "<" + (Xn(m.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof m, ge("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, pe);
        }
        var Ke = $e.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (G)
          for (var xt = 2; xt < arguments.length; xt++)
            bo(arguments[xt], m);
        return m === D ? Qt(Ke) : Tn(Ke), Ke;
      }
      var Jr = !1;
      function Jn(m) {
        var w = uc.bind(null, m);
        return w.type = m, Jr || (Jr = !0, ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), w;
      }
      function Ei(m, w, B) {
        for (var G = Bt.apply(this, arguments), pe = 2; pe < arguments.length; pe++)
          bo(arguments[pe], G.type);
        return Tn(G), G;
      }
      function sc(m, w) {
        var B = Ge.transition;
        Ge.transition = {};
        var G = Ge.transition;
        Ge.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (Ge.transition = B, B === null && G._updatedFibers) {
            var pe = G._updatedFibers.size;
            pe > 10 && ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var Pi = !1, xo = null;
      function cc(m) {
        if (xo === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), B = v && v[w];
            xo = B.call(v, "timers").setImmediate;
          } catch {
            xo = function(pe) {
              Pi === !1 && (Pi = !0, typeof MessageChannel > "u" && ge("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ze = new MessageChannel();
              Ze.port1.onmessage = pe, Ze.port2.postMessage(void 0);
            };
          }
        return xo(m);
      }
      var Aa = 0, Ro = !1;
      function Hi(m) {
        {
          var w = Aa;
          Aa++, Re.current === null && (Re.current = []);
          var B = Re.isBatchingLegacy, G;
          try {
            if (Re.isBatchingLegacy = !0, G = m(), !B && Re.didScheduleLegacyUpdate) {
              var pe = Re.current;
              pe !== null && (Re.didScheduleLegacyUpdate = !1, To(pe));
            }
          } catch (an) {
            throw za(w), an;
          } finally {
            Re.isBatchingLegacy = B;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var Ze = G, xe = !1, Ke = {
              then: function(an, un) {
                xe = !0, Ze.then(function(Lt) {
                  za(w), Aa === 0 ? Kl(Lt, an, un) : an(Lt);
                }, function(Lt) {
                  za(w), un(Lt);
                });
              }
            };
            return !Ro && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (Ro = !0, ge("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var xt = G;
            if (za(w), Aa === 0) {
              var jt = Re.current;
              jt !== null && (To(jt), Re.current = null);
              var rn = {
                then: function(an, un) {
                  Re.current === null ? (Re.current = [], Kl(xt, an, un)) : an(xt);
                }
              };
              return rn;
            } else {
              var Jt = {
                then: function(an, un) {
                  an(xt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function za(m) {
        m !== Aa - 1 && ge("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Aa = m;
      }
      function Kl(m, w, B) {
        {
          var G = Re.current;
          if (G !== null)
            try {
              To(G), cc(function() {
                G.length === 0 ? (Re.current = null, w(m)) : Kl(m, w, B);
              });
            } catch (pe) {
              B(pe);
            }
          else
            w(m);
        }
      }
      var wo = !1;
      function To(m) {
        if (!wo) {
          wo = !0;
          var w = 0;
          try {
            for (; w < m.length; w++) {
              var B = m[w];
              do
                B = B(!0);
              while (B !== null);
            }
            m.length = 0;
          } catch (G) {
            throw m = m.slice(w + 1), G;
          } finally {
            wo = !1;
          }
        }
      }
      var nl = uc, ql = Ei, as = Jn, oi = {
        map: Ma,
        forEach: Jo,
        count: vo,
        toArray: Hl,
        only: ji
      };
      S.Children = oi, S.Component = rt, S.Fragment = D, S.Profiler = U, S.PureComponent = bt, S.StrictMode = g, S.Suspense = F, S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, S.act = Hi, S.cloneElement = ql, S.createContext = ho, S.createElement = nl, S.createFactory = as, S.createRef = gr, S.forwardRef = yi, S.isValidElement = Yt, S.lazy = Ca, S.memo = oe, S.startTransition = sc, S.unstable_act = Hi, S.useCallback = cn, S.useContext = Ve, S.useDebugValue = Ft, S.useDeferredValue = Nr, S.useEffect = St, S.useId = Ct, S.useImperativeHandle = Si, S.useInsertionEffect = Fn, S.useLayoutEffect = nn, S.useMemo = br, S.useReducer = Nt, S.useRef = Xe, S.useState = Tt, S.useSyncExternalStore = La, S.useTransition = Zn, S.version = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uv, uv.exports)), uv.exports;
}
var $x;
function fv() {
  return $x || ($x = 1, process.env.NODE_ENV === "production" ? ny.exports = WD() : ny.exports = GD()), ny.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yx;
function QD() {
  if (Yx) return av;
  Yx = 1;
  var v = fv(), S = Symbol.for("react.element"), y = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, k = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(U, j, A) {
    var te, F = {}, W = null, Q = null;
    A !== void 0 && (W = "" + A), j.key !== void 0 && (W = "" + j.key), j.ref !== void 0 && (Q = j.ref);
    for (te in j) R.call(j, te) && !D.hasOwnProperty(te) && (F[te] = j[te]);
    if (U && U.defaultProps) for (te in j = U.defaultProps, j) F[te] === void 0 && (F[te] = j[te]);
    return { $$typeof: S, type: U, key: W, ref: Q, props: F, _owner: k.current };
  }
  return av.Fragment = y, av.jsx = g, av.jsxs = g, av;
}
var iv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wx;
function KD() {
  return Wx || (Wx = 1, process.env.NODE_ENV !== "production" && function() {
    var v = fv(), S = Symbol.for("react.element"), y = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), U = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), X = Symbol.iterator, de = "@@iterator";
    function fe(T) {
      if (T === null || typeof T != "object")
        return null;
      var oe = X && T[X] || T[de];
      return typeof oe == "function" ? oe : null;
    }
    var Oe = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function be(T) {
      {
        for (var oe = arguments.length, ce = new Array(oe > 1 ? oe - 1 : 0), Ve = 1; Ve < oe; Ve++)
          ce[Ve - 1] = arguments[Ve];
        ze("error", T, ce);
      }
    }
    function ze(T, oe, ce) {
      {
        var Ve = Oe.ReactDebugCurrentFrame, Tt = Ve.getStackAddendum();
        Tt !== "" && (oe += "%s", ce = ce.concat([Tt]));
        var Nt = ce.map(function(Xe) {
          return String(Xe);
        });
        Nt.unshift("Warning: " + oe), Function.prototype.apply.call(console[T], console, Nt);
      }
    }
    var Ge = !1, Re = !1, it = !1, He = !1, dt = !1, Xt;
    Xt = Symbol.for("react.module.reference");
    function vt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === R || T === D || dt || T === k || T === A || T === te || He || T === Q || Ge || Re || it || typeof T == "object" && T !== null && (T.$$typeof === W || T.$$typeof === F || T.$$typeof === g || T.$$typeof === U || T.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === Xt || T.getModuleId !== void 0));
    }
    function ct(T, oe, ce) {
      var Ve = T.displayName;
      if (Ve)
        return Ve;
      var Tt = oe.displayName || oe.name || "";
      return Tt !== "" ? ce + "(" + Tt + ")" : ce;
    }
    function et(T) {
      return T.displayName || "Context";
    }
    function je(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && be("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case R:
          return "Fragment";
        case y:
          return "Portal";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case A:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case U:
            var oe = T;
            return et(oe) + ".Consumer";
          case g:
            var ce = T;
            return et(ce._context) + ".Provider";
          case j:
            return ct(T, T.render, "ForwardRef");
          case F:
            var Ve = T.displayName || null;
            return Ve !== null ? Ve : je(T.type) || "Memo";
          case W: {
            var Tt = T, Nt = Tt._payload, Xe = Tt._init;
            try {
              return je(Xe(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, _t = 0, ye, ge, ae, Ee, he, L, J;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function rt() {
      {
        if (_t === 0) {
          ye = console.log, ge = console.info, ae = console.warn, Ee = console.error, he = console.group, L = console.groupCollapsed, J = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        _t++;
      }
    }
    function yt() {
      {
        if (_t--, _t === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, T, {
              value: ye
            }),
            info: tt({}, T, {
              value: ge
            }),
            warn: tt({}, T, {
              value: ae
            }),
            error: tt({}, T, {
              value: Ee
            }),
            group: tt({}, T, {
              value: he
            }),
            groupCollapsed: tt({}, T, {
              value: L
            }),
            groupEnd: tt({}, T, {
              value: J
            })
          });
        }
        _t < 0 && be("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = Oe.ReactCurrentDispatcher, Ot;
    function Et(T, oe, ce) {
      {
        if (Ot === void 0)
          try {
            throw Error();
          } catch (Tt) {
            var Ve = Tt.stack.trim().match(/\n( *(at )?)/);
            Ot = Ve && Ve[1] || "";
          }
        return `
` + Ot + T;
      }
    }
    var bt = !1, ln;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      ln = new gr();
    }
    function Wr(T, oe) {
      if (!T || bt)
        return "";
      {
        var ce = ln.get(T);
        if (ce !== void 0)
          return ce;
      }
      var Ve;
      bt = !0;
      var Tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = mt.current, mt.current = null, rt();
      try {
        if (oe) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (Zn) {
              Ve = Zn;
            }
            Reflect.construct(T, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (Zn) {
              Ve = Zn;
            }
            T.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Zn) {
            Ve = Zn;
          }
          T();
        }
      } catch (Zn) {
        if (Zn && Ve && typeof Zn.stack == "string") {
          for (var St = Zn.stack.split(`
`), Fn = Ve.stack.split(`
`), nn = St.length - 1, cn = Fn.length - 1; nn >= 1 && cn >= 0 && St[nn] !== Fn[cn]; )
            cn--;
          for (; nn >= 1 && cn >= 0; nn--, cn--)
            if (St[nn] !== Fn[cn]) {
              if (nn !== 1 || cn !== 1)
                do
                  if (nn--, cn--, cn < 0 || St[nn] !== Fn[cn]) {
                    var br = `
` + St[nn].replace(" at new ", " at ");
                    return T.displayName && br.includes("<anonymous>") && (br = br.replace("<anonymous>", T.displayName)), typeof T == "function" && ln.set(T, br), br;
                  }
                while (nn >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        bt = !1, mt.current = Nt, yt(), Error.prepareStackTrace = Tt;
      }
      var Si = T ? T.displayName || T.name : "", Ft = Si ? Et(Si) : "";
      return typeof T == "function" && ln.set(T, Ft), Ft;
    }
    function gn(T, oe, ce) {
      return Wr(T, !1);
    }
    function qn(T) {
      var oe = T.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Bn(T, oe, ce) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Wr(T, qn(T));
      if (typeof T == "string")
        return Et(T);
      switch (T) {
        case A:
          return Et("Suspense");
        case te:
          return Et("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case j:
            return gn(T.render);
          case F:
            return Bn(T.type, oe, ce);
          case W: {
            var Ve = T, Tt = Ve._payload, Nt = Ve._init;
            try {
              return Bn(Nt(Tt), oe, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var jn = Object.prototype.hasOwnProperty, Nn = {}, Gr = Oe.ReactDebugCurrentFrame;
    function Qr(T) {
      if (T) {
        var oe = T._owner, ce = Bn(T.type, T._source, oe ? oe.type : null);
        Gr.setExtraStackFrame(ce);
      } else
        Gr.setExtraStackFrame(null);
    }
    function Xn(T, oe, ce, Ve, Tt) {
      {
        var Nt = Function.call.bind(jn);
        for (var Xe in T)
          if (Nt(T, Xe)) {
            var St = void 0;
            try {
              if (typeof T[Xe] != "function") {
                var Fn = Error((Ve || "React class") + ": " + ce + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              St = T[Xe](oe, Xe, Ve, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              St = nn;
            }
            St && !(St instanceof Error) && (Qr(Tt), be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", ce, Xe, typeof St), Qr(null)), St instanceof Error && !(St.message in Nn) && (Nn[St.message] = !0, Qr(Tt), be("Failed %s type: %s", ce, St.message), Qr(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Kr(T) {
      return Sr(T);
    }
    function Cr(T) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, ce = oe && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ce;
      }
    }
    function ma(T) {
      try {
        return or(T), !1;
      } catch {
        return !0;
      }
    }
    function or(T) {
      return "" + T;
    }
    function qr(T) {
      if (ma(T))
        return be("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(T)), or(T);
    }
    var Sn = Oe.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, ya, me;
    me = {};
    function $e(T) {
      if (jn.call(T, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function gt(T) {
      if (jn.call(T, "key")) {
        var oe = Object.getOwnPropertyDescriptor(T, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Bt(T, oe) {
      if (typeof T.ref == "string" && Sn.current && oe && Sn.current.stateNode !== oe) {
        var ce = je(Sn.current.type);
        me[ce] || (be('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', je(Sn.current.type), T.ref), me[ce] = !0);
      }
    }
    function Yt(T, oe) {
      {
        var ce = function() {
          hi || (hi = !0, be("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function Mn(T, oe) {
      {
        var ce = function() {
          ya || (ya = !0, be("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var Cn = function(T, oe, ce, Ve, Tt, Nt, Xe) {
      var St = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: T,
        key: oe,
        ref: ce,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return St._store = {}, Object.defineProperty(St._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(St, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(St, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Tt
      }), Object.freeze && (Object.freeze(St.props), Object.freeze(St)), St;
    };
    function Er(T, oe, ce, Ve, Tt) {
      {
        var Nt, Xe = {}, St = null, Fn = null;
        ce !== void 0 && (qr(ce), St = "" + ce), gt(oe) && (qr(oe.key), St = "" + oe.key), $e(oe) && (Fn = oe.ref, Bt(oe, Tt));
        for (Nt in oe)
          jn.call(oe, Nt) && !kr.hasOwnProperty(Nt) && (Xe[Nt] = oe[Nt]);
        if (T && T.defaultProps) {
          var nn = T.defaultProps;
          for (Nt in nn)
            Xe[Nt] === void 0 && (Xe[Nt] = nn[Nt]);
        }
        if (St || Fn) {
          var cn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          St && Yt(Xe, cn), Fn && Mn(Xe, cn);
        }
        return Cn(T, St, Fn, Tt, Ve, Sn.current, Xe);
      }
    }
    var Zt = Oe.ReactCurrentOwner, Dr = Oe.ReactDebugCurrentFrame;
    function Wt(T) {
      if (T) {
        var oe = T._owner, ce = Bn(T.type, T._source, oe ? oe.type : null);
        Dr.setExtraStackFrame(ce);
      } else
        Dr.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function ri(T) {
      return typeof T == "object" && T !== null && T.$$typeof === S;
    }
    function Ma() {
      {
        if (Zt.current) {
          var T = je(Zt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function vo(T) {
      return "";
    }
    var Jo = {};
    function Hl(T) {
      {
        var oe = Ma();
        if (!oe) {
          var ce = typeof T == "string" ? T : T.displayName || T.name;
          ce && (oe = `

Check the top-level render call using <` + ce + ">.");
        }
        return oe;
      }
    }
    function ji(T, oe) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ce = Hl(oe);
        if (Jo[ce])
          return;
        Jo[ce] = !0;
        var Ve = "";
        T && T._owner && T._owner !== Zt.current && (Ve = " It was passed a child from " + je(T._owner.type) + "."), Wt(T), be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, Ve), Wt(null);
      }
    }
    function ho(T, oe) {
      {
        if (typeof T != "object")
          return;
        if (Kr(T))
          for (var ce = 0; ce < T.length; ce++) {
            var Ve = T[ce];
            ri(Ve) && ji(Ve, oe);
          }
        else if (ri(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Tt = fe(T);
          if (typeof Tt == "function" && Tt !== T.entries)
            for (var Nt = Tt.call(T), Xe; !(Xe = Nt.next()).done; )
              ri(Xe.value) && ji(Xe.value, oe);
        }
      }
    }
    function ga(T) {
      {
        var oe = T.type;
        if (oe == null || typeof oe == "string")
          return;
        var ce;
        if (typeof oe == "function")
          ce = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === F))
          ce = oe.propTypes;
        else
          return;
        if (ce) {
          var Ve = je(oe);
          Xn(ce, T.props, "prop", Ve, T);
        } else if (oe.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var Tt = je(oe);
          be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Tt || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mi(T) {
      {
        for (var oe = Object.keys(T.props), ce = 0; ce < oe.length; ce++) {
          var Ve = oe[ce];
          if (Ve !== "children" && Ve !== "key") {
            Wt(T), be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), Wt(null);
            break;
          }
        }
        T.ref !== null && (Wt(T), be("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var Sa = {};
    function ai(T, oe, ce, Ve, Tt, Nt) {
      {
        var Xe = vt(T);
        if (!Xe) {
          var St = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (St += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = vo();
          Fn ? St += Fn : St += Ma();
          var nn;
          T === null ? nn = "null" : Kr(T) ? nn = "array" : T !== void 0 && T.$$typeof === S ? (nn = "<" + (je(T.type) || "Unknown") + " />", St = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof T, be("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, St);
        }
        var cn = Er(T, oe, ce, Tt, Nt);
        if (cn == null)
          return cn;
        if (Xe) {
          var br = oe.children;
          if (br !== void 0)
            if (Ve)
              if (Kr(br)) {
                for (var Si = 0; Si < br.length; Si++)
                  ho(br[Si], T);
                Object.freeze && Object.freeze(br);
              } else
                be("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ho(br, T);
        }
        if (jn.call(oe, "key")) {
          var Ft = je(T), Zn = Object.keys(oe).filter(function(La) {
            return La !== "key";
          }), Nr = Zn.length > 0 ? "{key: someKey, " + Zn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Sa[Ft + Nr]) {
            var Ct = Zn.length > 0 ? "{" + Zn.join(": ..., ") + ": ...}" : "{}";
            be(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nr, Ft, Ct, Ft), Sa[Ft + Nr] = !0;
          }
        }
        return T === R ? mi(cn) : ga(cn), cn;
      }
    }
    function Or(T, oe, ce) {
      return ai(T, oe, ce, !0);
    }
    function Ca(T, oe, ce) {
      return ai(T, oe, ce, !1);
    }
    var yi = Ca, gi = Or;
    iv.Fragment = R, iv.jsx = yi, iv.jsxs = gi;
  }()), iv;
}
process.env.NODE_ENV === "production" ? V0.exports = QD() : V0.exports = KD();
var ne = V0.exports, I0 = { exports: {} }, ti = {}, ry = { exports: {} }, z0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gx;
function qD() {
  return Gx || (Gx = 1, function(v) {
    function S(ae, Ee) {
      var he = ae.length;
      ae.push(Ee);
      e: for (; 0 < he; ) {
        var L = he - 1 >>> 1, J = ae[L];
        if (0 < k(J, Ee)) ae[L] = Ee, ae[he] = J, he = L;
        else break e;
      }
    }
    function y(ae) {
      return ae.length === 0 ? null : ae[0];
    }
    function R(ae) {
      if (ae.length === 0) return null;
      var Ee = ae[0], he = ae.pop();
      if (he !== Ee) {
        ae[0] = he;
        e: for (var L = 0, J = ae.length, qe = J >>> 1; L < qe; ) {
          var rt = 2 * (L + 1) - 1, yt = ae[rt], mt = rt + 1, Ot = ae[mt];
          if (0 > k(yt, he)) mt < J && 0 > k(Ot, yt) ? (ae[L] = Ot, ae[mt] = he, L = mt) : (ae[L] = yt, ae[rt] = he, L = rt);
          else if (mt < J && 0 > k(Ot, he)) ae[L] = Ot, ae[mt] = he, L = mt;
          else break e;
        }
      }
      return Ee;
    }
    function k(ae, Ee) {
      var he = ae.sortIndex - Ee.sortIndex;
      return he !== 0 ? he : ae.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      v.unstable_now = function() {
        return D.now();
      };
    } else {
      var g = Date, U = g.now();
      v.unstable_now = function() {
        return g.now() - U;
      };
    }
    var j = [], A = [], te = 1, F = null, W = 3, Q = !1, X = !1, de = !1, fe = typeof setTimeout == "function" ? setTimeout : null, Oe = typeof clearTimeout == "function" ? clearTimeout : null, be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ze(ae) {
      for (var Ee = y(A); Ee !== null; ) {
        if (Ee.callback === null) R(A);
        else if (Ee.startTime <= ae) R(A), Ee.sortIndex = Ee.expirationTime, S(j, Ee);
        else break;
        Ee = y(A);
      }
    }
    function Ge(ae) {
      if (de = !1, ze(ae), !X) if (y(j) !== null) X = !0, ye(Re);
      else {
        var Ee = y(A);
        Ee !== null && ge(Ge, Ee.startTime - ae);
      }
    }
    function Re(ae, Ee) {
      X = !1, de && (de = !1, Oe(dt), dt = -1), Q = !0;
      var he = W;
      try {
        for (ze(Ee), F = y(j); F !== null && (!(F.expirationTime > Ee) || ae && !ct()); ) {
          var L = F.callback;
          if (typeof L == "function") {
            F.callback = null, W = F.priorityLevel;
            var J = L(F.expirationTime <= Ee);
            Ee = v.unstable_now(), typeof J == "function" ? F.callback = J : F === y(j) && R(j), ze(Ee);
          } else R(j);
          F = y(j);
        }
        if (F !== null) var qe = !0;
        else {
          var rt = y(A);
          rt !== null && ge(Ge, rt.startTime - Ee), qe = !1;
        }
        return qe;
      } finally {
        F = null, W = he, Q = !1;
      }
    }
    var it = !1, He = null, dt = -1, Xt = 5, vt = -1;
    function ct() {
      return !(v.unstable_now() - vt < Xt);
    }
    function et() {
      if (He !== null) {
        var ae = v.unstable_now();
        vt = ae;
        var Ee = !0;
        try {
          Ee = He(!0, ae);
        } finally {
          Ee ? je() : (it = !1, He = null);
        }
      } else it = !1;
    }
    var je;
    if (typeof be == "function") je = function() {
      be(et);
    };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), _t = tt.port2;
      tt.port1.onmessage = et, je = function() {
        _t.postMessage(null);
      };
    } else je = function() {
      fe(et, 0);
    };
    function ye(ae) {
      He = ae, it || (it = !0, je());
    }
    function ge(ae, Ee) {
      dt = fe(function() {
        ae(v.unstable_now());
      }, Ee);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(ae) {
      ae.callback = null;
    }, v.unstable_continueExecution = function() {
      X || Q || (X = !0, ye(Re));
    }, v.unstable_forceFrameRate = function(ae) {
      0 > ae || 125 < ae ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xt = 0 < ae ? Math.floor(1e3 / ae) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, v.unstable_getFirstCallbackNode = function() {
      return y(j);
    }, v.unstable_next = function(ae) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = W;
      }
      var he = W;
      W = Ee;
      try {
        return ae();
      } finally {
        W = he;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(ae, Ee) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ae = 3;
      }
      var he = W;
      W = ae;
      try {
        return Ee();
      } finally {
        W = he;
      }
    }, v.unstable_scheduleCallback = function(ae, Ee, he) {
      var L = v.unstable_now();
      switch (typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? L + he : L) : he = L, ae) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = he + J, ae = { id: te++, callback: Ee, priorityLevel: ae, startTime: he, expirationTime: J, sortIndex: -1 }, he > L ? (ae.sortIndex = he, S(A, ae), y(j) === null && ae === y(A) && (de ? (Oe(dt), dt = -1) : de = !0, ge(Ge, he - L))) : (ae.sortIndex = J, S(j, ae), X || Q || (X = !0, ye(Re))), ae;
    }, v.unstable_shouldYield = ct, v.unstable_wrapCallback = function(ae) {
      var Ee = W;
      return function() {
        var he = W;
        W = Ee;
        try {
          return ae.apply(this, arguments);
        } finally {
          W = he;
        }
      };
    };
  }(z0)), z0;
}
var U0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qx;
function XD() {
  return Qx || (Qx = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = !1, y = !1, R = 5;
      function k(me, $e) {
        var gt = me.length;
        me.push($e), U(me, $e, gt);
      }
      function D(me) {
        return me.length === 0 ? null : me[0];
      }
      function g(me) {
        if (me.length === 0)
          return null;
        var $e = me[0], gt = me.pop();
        return gt !== $e && (me[0] = gt, j(me, gt, 0)), $e;
      }
      function U(me, $e, gt) {
        for (var Bt = gt; Bt > 0; ) {
          var Yt = Bt - 1 >>> 1, Mn = me[Yt];
          if (A(Mn, $e) > 0)
            me[Yt] = $e, me[Bt] = Mn, Bt = Yt;
          else
            return;
        }
      }
      function j(me, $e, gt) {
        for (var Bt = gt, Yt = me.length, Mn = Yt >>> 1; Bt < Mn; ) {
          var Cn = (Bt + 1) * 2 - 1, Er = me[Cn], Zt = Cn + 1, Dr = me[Zt];
          if (A(Er, $e) < 0)
            Zt < Yt && A(Dr, Er) < 0 ? (me[Bt] = Dr, me[Zt] = $e, Bt = Zt) : (me[Bt] = Er, me[Cn] = $e, Bt = Cn);
          else if (Zt < Yt && A(Dr, $e) < 0)
            me[Bt] = Dr, me[Zt] = $e, Bt = Zt;
          else
            return;
        }
      }
      function A(me, $e) {
        var gt = me.sortIndex - $e.sortIndex;
        return gt !== 0 ? gt : me.id - $e.id;
      }
      var te = 1, F = 2, W = 3, Q = 4, X = 5;
      function de(me, $e) {
      }
      var fe = typeof performance == "object" && typeof performance.now == "function";
      if (fe) {
        var Oe = performance;
        v.unstable_now = function() {
          return Oe.now();
        };
      } else {
        var be = Date, ze = be.now();
        v.unstable_now = function() {
          return be.now() - ze;
        };
      }
      var Ge = 1073741823, Re = -1, it = 250, He = 5e3, dt = 1e4, Xt = Ge, vt = [], ct = [], et = 1, je = null, tt = W, _t = !1, ye = !1, ge = !1, ae = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function L(me) {
        for (var $e = D(ct); $e !== null; ) {
          if ($e.callback === null)
            g(ct);
          else if ($e.startTime <= me)
            g(ct), $e.sortIndex = $e.expirationTime, k(vt, $e);
          else
            return;
          $e = D(ct);
        }
      }
      function J(me) {
        if (ge = !1, L(me), !ye)
          if (D(vt) !== null)
            ye = !0, qr(qe);
          else {
            var $e = D(ct);
            $e !== null && Sn(J, $e.startTime - me);
          }
      }
      function qe(me, $e) {
        ye = !1, ge && (ge = !1, kr()), _t = !0;
        var gt = tt;
        try {
          var Bt;
          if (!y) return rt(me, $e);
        } finally {
          je = null, tt = gt, _t = !1;
        }
      }
      function rt(me, $e) {
        var gt = $e;
        for (L(gt), je = D(vt); je !== null && !S && !(je.expirationTime > gt && (!me || Qr())); ) {
          var Bt = je.callback;
          if (typeof Bt == "function") {
            je.callback = null, tt = je.priorityLevel;
            var Yt = je.expirationTime <= gt, Mn = Bt(Yt);
            gt = v.unstable_now(), typeof Mn == "function" ? je.callback = Mn : je === D(vt) && g(vt), L(gt);
          } else
            g(vt);
          je = D(vt);
        }
        if (je !== null)
          return !0;
        var Cn = D(ct);
        return Cn !== null && Sn(J, Cn.startTime - gt), !1;
      }
      function yt(me, $e) {
        switch (me) {
          case te:
          case F:
          case W:
          case Q:
          case X:
            break;
          default:
            me = W;
        }
        var gt = tt;
        tt = me;
        try {
          return $e();
        } finally {
          tt = gt;
        }
      }
      function mt(me) {
        var $e;
        switch (tt) {
          case te:
          case F:
          case W:
            $e = W;
            break;
          default:
            $e = tt;
            break;
        }
        var gt = tt;
        tt = $e;
        try {
          return me();
        } finally {
          tt = gt;
        }
      }
      function Ot(me) {
        var $e = tt;
        return function() {
          var gt = tt;
          tt = $e;
          try {
            return me.apply(this, arguments);
          } finally {
            tt = gt;
          }
        };
      }
      function Et(me, $e, gt) {
        var Bt = v.unstable_now(), Yt;
        if (typeof gt == "object" && gt !== null) {
          var Mn = gt.delay;
          typeof Mn == "number" && Mn > 0 ? Yt = Bt + Mn : Yt = Bt;
        } else
          Yt = Bt;
        var Cn;
        switch (me) {
          case te:
            Cn = Re;
            break;
          case F:
            Cn = it;
            break;
          case X:
            Cn = Xt;
            break;
          case Q:
            Cn = dt;
            break;
          case W:
          default:
            Cn = He;
            break;
        }
        var Er = Yt + Cn, Zt = {
          id: et++,
          callback: $e,
          priorityLevel: me,
          startTime: Yt,
          expirationTime: Er,
          sortIndex: -1
        };
        return Yt > Bt ? (Zt.sortIndex = Yt, k(ct, Zt), D(vt) === null && Zt === D(ct) && (ge ? kr() : ge = !0, Sn(J, Yt - Bt))) : (Zt.sortIndex = Er, k(vt, Zt), !ye && !_t && (ye = !0, qr(qe))), Zt;
      }
      function bt() {
      }
      function ln() {
        !ye && !_t && (ye = !0, qr(qe));
      }
      function gr() {
        return D(vt);
      }
      function Wr(me) {
        me.callback = null;
      }
      function gn() {
        return tt;
      }
      var qn = !1, Bn = null, jn = -1, Nn = R, Gr = -1;
      function Qr() {
        var me = v.unstable_now() - Gr;
        return !(me < Nn);
      }
      function Xn() {
      }
      function Sr(me) {
        if (me < 0 || me > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        me > 0 ? Nn = Math.floor(1e3 / me) : Nn = R;
      }
      var Kr = function() {
        if (Bn !== null) {
          var me = v.unstable_now();
          Gr = me;
          var $e = !0, gt = !0;
          try {
            gt = Bn($e, me);
          } finally {
            gt ? Cr() : (qn = !1, Bn = null);
          }
        } else
          qn = !1;
      }, Cr;
      if (typeof he == "function")
        Cr = function() {
          he(Kr);
        };
      else if (typeof MessageChannel < "u") {
        var ma = new MessageChannel(), or = ma.port2;
        ma.port1.onmessage = Kr, Cr = function() {
          or.postMessage(null);
        };
      } else
        Cr = function() {
          ae(Kr, 0);
        };
      function qr(me) {
        Bn = me, qn || (qn = !0, Cr());
      }
      function Sn(me, $e) {
        jn = ae(function() {
          me(v.unstable_now());
        }, $e);
      }
      function kr() {
        Ee(jn), jn = -1;
      }
      var hi = Xn, ya = null;
      v.unstable_IdlePriority = X, v.unstable_ImmediatePriority = te, v.unstable_LowPriority = Q, v.unstable_NormalPriority = W, v.unstable_Profiling = ya, v.unstable_UserBlockingPriority = F, v.unstable_cancelCallback = Wr, v.unstable_continueExecution = ln, v.unstable_forceFrameRate = Sr, v.unstable_getCurrentPriorityLevel = gn, v.unstable_getFirstCallbackNode = gr, v.unstable_next = mt, v.unstable_pauseExecution = bt, v.unstable_requestPaint = hi, v.unstable_runWithPriority = yt, v.unstable_scheduleCallback = Et, v.unstable_shouldYield = Qr, v.unstable_wrapCallback = Ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(U0)), U0;
}
var Kx;
function aR() {
  return Kx || (Kx = 1, process.env.NODE_ENV === "production" ? ry.exports = qD() : ry.exports = XD()), ry.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qx;
function ZD() {
  if (qx) return ti;
  qx = 1;
  var v = fv(), S = aR();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), k = {};
  function D(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (k[n] = r, n = 0; n < r.length; n++) R.add(r[n]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, te = {}, F = {};
  function W(n) {
    return j.call(F, n) ? !0 : j.call(te, n) ? !1 : A.test(n) ? F[n] = !0 : (te[n] = !0, !1);
  }
  function Q(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function X(n, r, o, u) {
    if (r === null || typeof r > "u" || Q(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function de(n, r, o, u, c, d, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = C;
  }
  var fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    fe[n] = new de(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    fe[r] = new de(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    fe[n] = new de(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    fe[n] = new de(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    fe[n] = new de(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    fe[n] = new de(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    fe[n] = new de(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    fe[n] = new de(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    fe[n] = new de(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Oe = /[\-:]([a-z])/g;
  function be(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Oe,
      be
    );
    fe[r] = new de(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Oe, be);
    fe[r] = new de(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Oe, be);
    fe[r] = new de(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    fe[n] = new de(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), fe.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    fe[n] = new de(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ze(n, r, o, u) {
    var c = fe.hasOwnProperty(r) ? fe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (X(r, o, c, u) && (o = null), u || c === null ? W(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Ge = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), it = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Xt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), ct = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), ae = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = ae && n[ae] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var he = Object.assign, L;
  function J(n) {
    if (L === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      L = r && r[1] || "";
    }
    return `
` + L + n;
  }
  var qe = !1;
  function rt(n, r) {
    if (!n || qe) return "";
    qe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch ($) {
          var u = $;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch ($) {
          u = $;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          u = $;
        }
        n();
      }
    } catch ($) {
      if ($ && u && typeof $.stack == "string") {
        for (var c = $.stack.split(`
`), d = u.stack.split(`
`), C = c.length - 1, x = d.length - 1; 1 <= C && 0 <= x && c[C] !== d[x]; ) x--;
        for (; 1 <= C && 0 <= x; C--, x--) if (c[C] !== d[x]) {
          if (C !== 1 || x !== 1)
            do
              if (C--, x--, 0 > x || c[C] !== d[x]) {
                var _ = `
` + c[C].replace(" at new ", " at ");
                return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
              }
            while (1 <= C && 0 <= x);
          break;
        }
      }
    } finally {
      qe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? J(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return J(n.type);
      case 16:
        return J("Lazy");
      case 13:
        return J("Suspense");
      case 19:
        return J("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = rt(n.type, !1), n;
      case 11:
        return n = rt(n.type.render, !1), n;
      case 1:
        return n = rt(n.type, !0), n;
      default:
        return "";
    }
  }
  function mt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case it:
        return "Portal";
      case Xt:
        return "Profiler";
      case dt:
        return "StrictMode";
      case je:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ct:
        return (n.displayName || "Context") + ".Consumer";
      case vt:
        return (n._context.displayName || "Context") + ".Provider";
      case et:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : mt(n.type) || "Memo";
      case ye:
        r = n._payload, n = n._init;
        try {
          return mt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ot(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return mt(r);
      case 8:
        return r === dt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function bt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ln(n) {
    var r = bt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(C) {
        u = "" + C, d.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(C) {
        u = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function gr(n) {
    n._valueTracker || (n._valueTracker = ln(n));
  }
  function Wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = bt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function qn(n, r) {
    var o = r.checked;
    return he({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Et(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jn(n, r) {
    r = r.checked, r != null && ze(n, "checked", r, !1);
  }
  function Nn(n, r) {
    jn(n, r);
    var o = Et(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Qr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Qr(n, r.type, Et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Gr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Qr(n, r, o) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Xn = Array.isArray;
  function Sr(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Et(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(y(91));
    return he({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Cr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(y(92));
        if (Xn(o)) {
          if (1 < o.length) throw Error(y(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Et(o) };
  }
  function ma(n, r) {
    var o = Et(r.value), u = Et(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function or(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var kr, hi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = kr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ya(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var me = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, $e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(me).forEach(function(n) {
    $e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), me[r] = me[n];
    });
  });
  function gt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || me.hasOwnProperty(n) && me[n] ? ("" + r).trim() : r + "px";
  }
  function Bt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = gt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var Yt = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mn(n, r) {
    if (r) {
      if (Yt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(y(62));
    }
  }
  function Cn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Er = null;
  function Zt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Dr = null, Wt = null, Gt = null;
  function ri(n) {
    if (n = gs(n)) {
      if (typeof Dr != "function") throw Error(y(280));
      var r = n.stateNode;
      r && (r = We(r), Dr(n.stateNode, n.type, r));
    }
  }
  function Ma(n) {
    Wt ? Gt ? Gt.push(n) : Gt = [n] : Wt = n;
  }
  function vo() {
    if (Wt) {
      var n = Wt, r = Gt;
      if (Gt = Wt = null, ri(n), r) for (n = 0; n < r.length; n++) ri(r[n]);
    }
  }
  function Jo(n, r) {
    return n(r);
  }
  function Hl() {
  }
  var ji = !1;
  function ho(n, r, o) {
    if (ji) return n(r, o);
    ji = !0;
    try {
      return Jo(n, r, o);
    } finally {
      ji = !1, (Wt !== null || Gt !== null) && (Hl(), vo());
    }
  }
  function ga(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = We(o);
    if (u === null) return null;
    o = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(y(231, r, typeof o));
    return o;
  }
  var mi = !1;
  if (U) try {
    var Sa = {};
    Object.defineProperty(Sa, "passive", { get: function() {
      mi = !0;
    } }), window.addEventListener("test", Sa, Sa), window.removeEventListener("test", Sa, Sa);
  } catch {
    mi = !1;
  }
  function ai(n, r, o, u, c, d, C, x, _) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, $);
    } catch (le) {
      this.onError(le);
    }
  }
  var Or = !1, Ca = null, yi = !1, gi = null, T = { onError: function(n) {
    Or = !0, Ca = n;
  } };
  function oe(n, r, o, u, c, d, C, x, _) {
    Or = !1, Ca = null, ai.apply(T, arguments);
  }
  function ce(n, r, o, u, c, d, C, x, _) {
    if (oe.apply(this, arguments), Or) {
      if (Or) {
        var $ = Ca;
        Or = !1, Ca = null;
      } else throw Error(y(198));
      yi || (yi = !0, gi = $);
    }
  }
  function Ve(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Tt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Nt(n) {
    if (Ve(n) !== n) throw Error(y(188));
  }
  function Xe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ve(n), r === null) throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === o) return Nt(c), n;
          if (d === u) return Nt(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var C = !1, x = c.child; x; ) {
          if (x === o) {
            C = !0, o = c, u = d;
            break;
          }
          if (x === u) {
            C = !0, u = c, o = d;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = d.child; x; ) {
            if (x === o) {
              C = !0, o = d, u = c;
              break;
            }
            if (x === u) {
              C = !0, u = d, o = c;
              break;
            }
            x = x.sibling;
          }
          if (!C) throw Error(y(189));
        }
      }
      if (o.alternate !== u) throw Error(y(190));
    }
    if (o.tag !== 3) throw Error(y(188));
    return o.stateNode.current === o ? n : r;
  }
  function St(n) {
    return n = Xe(n), n !== null ? Fn(n) : null;
  }
  function Fn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Fn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = S.unstable_scheduleCallback, cn = S.unstable_cancelCallback, br = S.unstable_shouldYield, Si = S.unstable_requestPaint, Ft = S.unstable_now, Zn = S.unstable_getCurrentPriorityLevel, Nr = S.unstable_ImmediatePriority, Ct = S.unstable_UserBlockingPriority, La = S.unstable_NormalPriority, mo = S.unstable_LowPriority, Vl = S.unstable_IdlePriority, yo = null, Xr = null;
  function ts(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function") try {
      Xr.onCommitFiberRoot(yo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mr = Math.clz32 ? Math.clz32 : lc, ns = Math.log, rs = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ns(n) / rs | 0) | 0;
  }
  var Il = 64, go = 4194304;
  function ii(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Lr(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var x = C & ~c;
      x !== 0 ? u = ii(x) : (d &= C, d !== 0 && (u = ii(d)));
    } else C = o & ~c, C !== 0 ? u = ii(C) : d !== 0 && (u = ii(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Mr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function So(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Co(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var C = 31 - Mr(d), x = 1 << C, _ = c[C];
      _ === -1 ? (!(x & o) || x & u) && (c[C] = So(x, r)) : _ <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function Eo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bl() {
    var n = Il;
    return Il <<= 1, !(Il & 4194240) && (Il = 64), n;
  }
  function $l(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Fi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = o;
  }
  function td(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Mr(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function Ci(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Mr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var Pt = 0;
  function Yl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var el, Wl, Mt, Gl, Ql, ut = !1, tl = [], En = null, Zr = null, Ar = null, bo = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Qt = [], uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Jr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Ar = null;
        break;
      case "pointerover":
      case "pointerout":
        bo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tn.delete(r.pointerId);
    }
  }
  function Jn(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = gs(r), r !== null && Wl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ei(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return En = Jn(En, n, r, o, u, c), !0;
      case "dragenter":
        return Zr = Jn(Zr, n, r, o, u, c), !0;
      case "mouseover":
        return Ar = Jn(Ar, n, r, o, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return bo.set(d, Jn(bo.get(d) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Tn.set(d, Jn(Tn.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function sc(n) {
    var r = ja(n.target);
    if (r !== null) {
      var o = Ve(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Tt(o), r !== null) {
            n.blockedOn = r, Ql(n.priority, function() {
              Mt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Pi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = ql(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        Er = u, o.target.dispatchEvent(u), Er = null;
      } else return r = gs(o), r !== null && Wl(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function xo(n, r, o) {
    Pi(n) && o.delete(r);
  }
  function cc() {
    ut = !1, En !== null && Pi(En) && (En = null), Zr !== null && Pi(Zr) && (Zr = null), Ar !== null && Pi(Ar) && (Ar = null), bo.forEach(xo), Tn.forEach(xo);
  }
  function Aa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ut || (ut = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, cc)));
  }
  function Ro(n) {
    function r(c) {
      return Aa(c, n);
    }
    if (0 < tl.length) {
      Aa(tl[0], n);
      for (var o = 1; o < tl.length; o++) {
        var u = tl[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (En !== null && Aa(En, n), Zr !== null && Aa(Zr, n), Ar !== null && Aa(Ar, n), bo.forEach(r), Tn.forEach(r), o = 0; o < Qt.length; o++) u = Qt[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Qt.length && (o = Qt[0], o.blockedOn === null); ) sc(o), o.blockedOn === null && Qt.shift();
  }
  var Hi = Ge.ReactCurrentBatchConfig, za = !0;
  function Kl(n, r, o, u) {
    var c = Pt, d = Hi.transition;
    Hi.transition = null;
    try {
      Pt = 1, To(n, r, o, u);
    } finally {
      Pt = c, Hi.transition = d;
    }
  }
  function wo(n, r, o, u) {
    var c = Pt, d = Hi.transition;
    Hi.transition = null;
    try {
      Pt = 4, To(n, r, o, u);
    } finally {
      Pt = c, Hi.transition = d;
    }
  }
  function To(n, r, o, u) {
    if (za) {
      var c = ql(n, r, o, u);
      if (c === null) Sc(n, r, u, nl, o), Jr(n, u);
      else if (Ei(c, n, r, o, u)) u.stopPropagation();
      else if (Jr(n, u), r & 4 && -1 < uc.indexOf(n)) {
        for (; c !== null; ) {
          var d = gs(c);
          if (d !== null && el(d), d = ql(n, r, o, u), d === null && Sc(n, r, u, nl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Sc(n, r, u, null, o);
    }
  }
  var nl = null;
  function ql(n, r, o, u) {
    if (nl = null, n = Zt(u), n = ja(n), n !== null) if (r = Ve(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Tt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return nl = n, null;
  }
  function as(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Zn()) {
          case Nr:
            return 1;
          case Ct:
            return 4;
          case La:
          case mo:
            return 16;
          case Vl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var oi = null, m = null, w = null;
  function B() {
    if (w) return w;
    var n, r = m, o = r.length, u, c = "value" in oi ? oi.value : oi.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === c[d - u]; u++) ;
    return w = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function G(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function pe() {
    return !0;
  }
  function Ze() {
    return !1;
  }
  function xe(n) {
    function r(o, u, c, d, C) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = C, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? pe : Ze, this.isPropagationStopped = Ze, this;
    }
    return he(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = pe);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = pe);
    }, persist: function() {
    }, isPersistent: pe }), r;
  }
  var Ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = xe(Ke), jt = he({}, Ke, { view: 0, detail: 0 }), rn = xe(jt), Jt, an, un, Lt = he({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== un && (un && n.type === "mousemove" ? (Jt = n.screenX - un.screenX, an = n.screenY - un.screenY) : an = Jt = 0, un = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : an;
  } }), Vi = xe(Lt), Xl = he({}, Lt, { dataTransfer: 0 }), is = xe(Xl), nd = he({}, jt, { relatedTarget: 0 }), li = xe(nd), os = he({}, Ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ls = xe(os), rd = he({}, Ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), dy = xe(rd), py = he({}, Ke, { data: 0 }), ad = xe(py), id = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, pv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, vv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = vv[n]) ? !!r[n] : !1;
  }
  function od() {
    return hv;
  }
  var Ii = he({}, jt, { key: function(n) {
    if (n.key) {
      var r = id[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = G(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? pv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: od, charCode: function(n) {
    return n.type === "keypress" ? G(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? G(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), vy = xe(Ii), ld = he({}, Lt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = xe(ld), ud = he({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: od }), hy = xe(ud), dc = he({}, Ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mv = xe(dc), ea = he({}, Lt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bi = xe(ea), Pn = [9, 13, 27, 32], ui = U && "CompositionEvent" in window, rl = null;
  U && "documentMode" in document && (rl = document.documentMode);
  var pc = U && "TextEvent" in window && !rl, yv = U && (!ui || rl && 8 < rl && 11 >= rl), Zl = " ", gv = !1;
  function Sv(n, r) {
    switch (n) {
      case "keyup":
        return Pn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Jl = !1;
  function my(n, r) {
    switch (n) {
      case "compositionend":
        return vc(r);
      case "keypress":
        return r.which !== 32 ? null : (gv = !0, Zl);
      case "textInput":
        return n = r.data, n === Zl && gv ? null : n;
      default:
        return null;
    }
  }
  function yy(n, r) {
    if (Jl) return n === "compositionend" || !ui && Sv(n, r) ? (n = B(), w = m = oi = null, Jl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return yv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Cv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Cv[n.type] : r === "textarea";
  }
  function bv(n, r, o, u) {
    Ma(u), r = hs(r, "onChange"), 0 < r.length && (o = new xt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var us = null, eu = null;
  function tu(n) {
    gc(n, 0);
  }
  function nu(n) {
    var r = au(n);
    if (Wr(r)) return n;
  }
  function xv(n, r) {
    if (n === "change") return r;
  }
  var sd = !1;
  if (U) {
    var cd;
    if (U) {
      var fd = "oninput" in document;
      if (!fd) {
        var Rv = document.createElement("div");
        Rv.setAttribute("oninput", "return;"), fd = typeof Rv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    sd = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function wv() {
    us && (us.detachEvent("onpropertychange", Tv), eu = us = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && nu(eu)) {
      var r = [];
      bv(r, eu, n, Zt(n)), ho(tu, r);
    }
  }
  function gy(n, r, o) {
    n === "focusin" ? (wv(), us = r, eu = o, us.attachEvent("onpropertychange", Tv)) : n === "focusout" && wv();
  }
  function Sy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return nu(eu);
  }
  function Cy(n, r) {
    if (n === "click") return nu(r);
  }
  function _v(n, r) {
    if (n === "input" || n === "change") return nu(r);
  }
  function Ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ua = typeof Object.is == "function" ? Object.is : Ey;
  function ss(n, r) {
    if (Ua(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!j.call(r, c) || !Ua(n[c], r[c])) return !1;
    }
    return !0;
  }
  function kv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Dv(n, r) {
    var o = kv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = kv(o);
    }
  }
  function Ov(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ov(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hc() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = gn(n.document);
    }
    return r;
  }
  function $i(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function mc(n) {
    var r = hc(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Ov(o.ownerDocument.documentElement, o)) {
      if (u !== null && $i(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Dv(o, d);
          var C = Dv(
            o,
            u
          );
          c && C && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Nv = U && "documentMode" in document && 11 >= document.documentMode, si = null, dd = null, cs = null, pd = !1;
  function Mv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    pd || si == null || si !== gn(u) || (u = si, "selectionStart" in u && $i(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), cs && ss(cs, u) || (cs = u, u = hs(dd, "onSelect"), 0 < u.length && (r = new xt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = si)));
  }
  function yc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var al = { animationend: yc("Animation", "AnimationEnd"), animationiteration: yc("Animation", "AnimationIteration"), animationstart: yc("Animation", "AnimationStart"), transitionend: yc("Transition", "TransitionEnd") }, vd = {}, hd = {};
  U && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);
  function er(n) {
    if (vd[n]) return vd[n];
    if (!al[n]) return n;
    var r = al[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in hd) return vd[n] = r[o];
    return n;
  }
  var md = er("animationend"), Lv = er("animationiteration"), Av = er("animationstart"), zv = er("transitionend"), Uv = /* @__PURE__ */ new Map(), jv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yi(n, r) {
    Uv.set(n, r), D(r, [n]);
  }
  for (var fs = 0; fs < jv.length; fs++) {
    var il = jv[fs], by = il.toLowerCase(), ds = il[0].toUpperCase() + il.slice(1);
    Yi(by, "on" + ds);
  }
  Yi(md, "onAnimationEnd"), Yi(Lv, "onAnimationIteration"), Yi(Av, "onAnimationStart"), Yi("dblclick", "onDoubleClick"), Yi("focusin", "onFocus"), Yi("focusout", "onBlur"), Yi(zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), D("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Fv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, ce(u, r, void 0, n), n.currentTarget = null;
  }
  function gc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var C = u.length - 1; 0 <= C; C--) {
          var x = u[C], _ = x.instance, $ = x.currentTarget;
          if (x = x.listener, _ !== d && c.isPropagationStopped()) break e;
          Fv(c, x, $), d = _;
        }
        else for (C = 0; C < u.length; C++) {
          if (x = u[C], _ = x.instance, $ = x.currentTarget, x = x.listener, _ !== d && c.isPropagationStopped()) break e;
          Fv(c, x, $), d = _;
        }
      }
    }
    if (yi) throw n = gi, yi = !1, gi = null, n;
  }
  function on(n, r) {
    var o = r[xd];
    o === void 0 && (o = r[xd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Pv(r, n, 2, !1), o.add(u));
  }
  function _o(n, r, o) {
    var u = 0;
    r && (u |= 4), Pv(o, n, u, r);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function ru(n) {
    if (!n[Wi]) {
      n[Wi] = !0, R.forEach(function(o) {
        o !== "selectionchange" && (xy.has(o) || _o(o, !1, n), _o(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Wi] || (r[Wi] = !0, _o("selectionchange", !1, r));
    }
  }
  function Pv(n, r, o, u) {
    switch (as(r)) {
      case 1:
        var c = Kl;
        break;
      case 4:
        c = wo;
        break;
      default:
        c = To;
    }
    o = c.bind(null, r, o, n), c = void 0, !mi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Sc(n, r, o, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var C = u.tag;
      if (C === 3 || C === 4) {
        var x = u.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (C === 4) for (C = u.return; C !== null; ) {
          var _ = C.tag;
          if ((_ === 3 || _ === 4) && (_ = C.stateNode.containerInfo, _ === c || _.nodeType === 8 && _.parentNode === c)) return;
          C = C.return;
        }
        for (; x !== null; ) {
          if (C = ja(x), C === null) return;
          if (_ = C.tag, _ === 5 || _ === 6) {
            u = d = C;
            continue e;
          }
          x = x.parentNode;
        }
      }
      u = u.return;
    }
    ho(function() {
      var $ = d, le = Zt(o), ue = [];
      e: {
        var ie = Uv.get(n);
        if (ie !== void 0) {
          var _e = xt, Me = n;
          switch (n) {
            case "keypress":
              if (G(o) === 0) break e;
            case "keydown":
            case "keyup":
              _e = vy;
              break;
            case "focusin":
              Me = "focus", _e = li;
              break;
            case "focusout":
              Me = "blur", _e = li;
              break;
            case "beforeblur":
            case "afterblur":
              _e = li;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _e = Vi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _e = is;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _e = hy;
              break;
            case md:
            case Lv:
            case Av:
              _e = ls;
              break;
            case zv:
              _e = mv;
              break;
            case "scroll":
              _e = rn;
              break;
            case "wheel":
              _e = Bi;
              break;
            case "copy":
            case "cut":
            case "paste":
              _e = dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _e = fc;
          }
          var Ue = (r & 4) !== 0, zn = !Ue && n === "scroll", z = Ue ? ie !== null ? ie + "Capture" : null : ie;
          Ue = [];
          for (var N = $, V; N !== null; ) {
            V = N;
            var ve = V.stateNode;
            if (V.tag === 5 && ve !== null && (V = ve, z !== null && (ve = ga(N, z), ve != null && Ue.push(vs(N, ve, V)))), zn) break;
            N = N.return;
          }
          0 < Ue.length && (ie = new _e(ie, Me, null, o, le), ue.push({ event: ie, listeners: Ue }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", _e = n === "mouseout" || n === "pointerout", ie && o !== Er && (Me = o.relatedTarget || o.fromElement) && (ja(Me) || Me[Gi])) break e;
          if ((_e || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, _e ? (Me = o.relatedTarget || o.toElement, _e = $, Me = Me ? ja(Me) : null, Me !== null && (zn = Ve(Me), Me !== zn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (_e = null, Me = $), _e !== Me)) {
            if (Ue = Vi, ve = "onMouseLeave", z = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Ue = fc, ve = "onPointerLeave", z = "onPointerEnter", N = "pointer"), zn = _e == null ? ie : au(_e), V = Me == null ? ie : au(Me), ie = new Ue(ve, N + "leave", _e, o, le), ie.target = zn, ie.relatedTarget = V, ve = null, ja(le) === $ && (Ue = new Ue(z, N + "enter", Me, o, le), Ue.target = V, Ue.relatedTarget = zn, ve = Ue), zn = ve, _e && Me) t: {
              for (Ue = _e, z = Me, N = 0, V = Ue; V; V = ol(V)) N++;
              for (V = 0, ve = z; ve; ve = ol(ve)) V++;
              for (; 0 < N - V; ) Ue = ol(Ue), N--;
              for (; 0 < V - N; ) z = ol(z), V--;
              for (; N--; ) {
                if (Ue === z || z !== null && Ue === z.alternate) break t;
                Ue = ol(Ue), z = ol(z);
              }
              Ue = null;
            }
            else Ue = null;
            _e !== null && yd(ue, ie, _e, Ue, !1), Me !== null && zn !== null && yd(ue, zn, Me, Ue, !0);
          }
        }
        e: {
          if (ie = $ ? au($) : window, _e = ie.nodeName && ie.nodeName.toLowerCase(), _e === "select" || _e === "input" && ie.type === "file") var Pe = xv;
          else if (Ev(ie)) if (sd) Pe = _v;
          else {
            Pe = Sy;
            var Je = gy;
          }
          else (_e = ie.nodeName) && _e.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Pe = Cy);
          if (Pe && (Pe = Pe(n, $))) {
            bv(ue, Pe, o, le);
            break e;
          }
          Je && Je(n, ie, $), n === "focusout" && (Je = ie._wrapperState) && Je.controlled && ie.type === "number" && Qr(ie, "number", ie.value);
        }
        switch (Je = $ ? au($) : window, n) {
          case "focusin":
            (Ev(Je) || Je.contentEditable === "true") && (si = Je, dd = $, cs = null);
            break;
          case "focusout":
            cs = dd = si = null;
            break;
          case "mousedown":
            pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pd = !1, Mv(ue, o, le);
            break;
          case "selectionchange":
            if (Nv) break;
          case "keydown":
          case "keyup":
            Mv(ue, o, le);
        }
        var Le;
        if (ui) e: {
          switch (n) {
            case "compositionstart":
              var nt = "onCompositionStart";
              break e;
            case "compositionend":
              nt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              nt = "onCompositionUpdate";
              break e;
          }
          nt = void 0;
        }
        else Jl ? Sv(n, o) && (nt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (nt = "onCompositionStart");
        nt && (yv && o.locale !== "ko" && (Jl || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && Jl && (Le = B()) : (oi = le, m = "value" in oi ? oi.value : oi.textContent, Jl = !0)), Je = hs($, nt), 0 < Je.length && (nt = new ad(nt, n, null, o, le), ue.push({ event: nt, listeners: Je }), Le ? nt.data = Le : (Le = vc(o), Le !== null && (nt.data = Le)))), (Le = pc ? my(n, o) : yy(n, o)) && ($ = hs($, "onBeforeInput"), 0 < $.length && (le = new ad("onBeforeInput", "beforeinput", null, o, le), ue.push({ event: le, listeners: $ }), le.data = Le));
      }
      gc(ue, r);
    });
  }
  function vs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function hs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ga(n, o), d != null && u.unshift(vs(n, d, c)), d = ga(n, r), d != null && u.push(vs(n, d, c))), n = n.return;
    }
    return u;
  }
  function ol(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yd(n, r, o, u, c) {
    for (var d = r._reactName, C = []; o !== null && o !== u; ) {
      var x = o, _ = x.alternate, $ = x.stateNode;
      if (_ !== null && _ === u) break;
      x.tag === 5 && $ !== null && (x = $, c ? (_ = ga(o, d), _ != null && C.unshift(vs(o, _, x))) : c || (_ = ga(o, d), _ != null && C.push(vs(o, _, x)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var gd = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
  function Sd(n) {
    return (typeof n == "string" ? n : "" + n).replace(gd, `
`).replace(Ry, "");
  }
  function Cc(n, r, o) {
    if (r = Sd(r), Sd(n) !== r && o) throw Error(y(425));
  }
  function Ec() {
  }
  var Cd = null, ll = null;
  function ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ul = typeof setTimeout == "function" ? setTimeout : void 0, Hv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ed = typeof Promise == "function" ? Promise : void 0, bd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function(n) {
    return Ed.resolve(null).then(n).catch(wy);
  } : ul;
  function wy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ko(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), Ro(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Ro(r);
  }
  function ci(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function ys(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Do = Math.random().toString(36).slice(2), bi = "__reactFiber$" + Do, sl = "__reactProps$" + Do, Gi = "__reactContainer$" + Do, xd = "__reactEvents$" + Do, Ty = "__reactListeners$" + Do, Rd = "__reactHandles$" + Do;
  function ja(n) {
    var r = n[bi];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Gi] || o[bi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = ys(n); n !== null; ) {
          if (o = n[bi]) return o;
          n = ys(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function gs(n) {
    return n = n[bi] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function au(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(y(33));
  }
  function We(n) {
    return n[sl] || null;
  }
  var Oo = [], fn = -1;
  function ht(n) {
    return { current: n };
  }
  function $t(n) {
    0 > fn || (n.current = Oo[fn], Oo[fn] = null, fn--);
  }
  function Kt(n, r) {
    fn++, Oo[fn] = n.current, n.current = r;
  }
  var xi = {}, ot = ht(xi), _n = ht(!1), ta = xi;
  function Fa(n, r) {
    var o = n.type.contextTypes;
    if (!o) return xi;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Pa() {
    $t(_n), $t(ot);
  }
  function No(n, r, o) {
    if (ot.current !== xi) throw Error(y(168));
    Kt(ot, r), Kt(_n, o);
  }
  function Ss(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(y(108, Ot(n) || "Unknown", c));
    return he({}, o, u);
  }
  function bc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || xi, ta = ot.current, Kt(ot, n), Kt(_n, _n.current), !0;
  }
  function Vv(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(y(169));
    o ? (n = Ss(n, r, ta), u.__reactInternalMemoizedMergedChildContext = n, $t(_n), $t(ot), Kt(ot, n)) : $t(_n), Kt(_n, o);
  }
  var Ea = null, tr = !1, Cs = !1;
  function wd(n) {
    Ea === null ? Ea = [n] : Ea.push(n);
  }
  function Td(n) {
    tr = !0, wd(n);
  }
  function na() {
    if (!Cs && Ea !== null) {
      Cs = !0;
      var n = 0, r = Pt;
      try {
        var o = Ea;
        for (Pt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ea = null, tr = !1;
      } catch (c) {
        throw Ea !== null && (Ea = Ea.slice(n + 1)), nn(Nr, na), c;
      } finally {
        Pt = r, Cs = !1;
      }
    }
    return null;
  }
  var Mo = [], ra = 0, cl = null, iu = 0, aa = [], xr = 0, Ha = null, lr = 1, Qi = "";
  function ba(n, r) {
    Mo[ra++] = iu, Mo[ra++] = cl, cl = n, iu = r;
  }
  function _d(n, r, o) {
    aa[xr++] = lr, aa[xr++] = Qi, aa[xr++] = Ha, Ha = n;
    var u = lr;
    n = Qi;
    var c = 32 - Mr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Mr(r) + c;
    if (30 < d) {
      var C = c - c % 5;
      d = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, lr = 1 << 32 - Mr(r) + c | o << c | u, Qi = d + n;
    } else lr = 1 << d | o << c | u, Qi = n;
  }
  function xc(n) {
    n.return !== null && (ba(n, 1), _d(n, 1, 0));
  }
  function kd(n) {
    for (; n === cl; ) cl = Mo[--ra], Mo[ra] = null, iu = Mo[--ra], Mo[ra] = null;
    for (; n === Ha; ) Ha = aa[--xr], aa[xr] = null, Qi = aa[--xr], aa[xr] = null, lr = aa[--xr], aa[xr] = null;
  }
  var xa = null, ia = null, dn = !1, Va = null;
  function Dd(n, r) {
    var o = Ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Iv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, xa = n, ia = ci(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, xa = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ha !== null ? { id: lr, overflow: Qi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, xa = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function wc(n) {
    if (dn) {
      var r = ia;
      if (r) {
        var o = r;
        if (!Iv(n, r)) {
          if (Rc(n)) throw Error(y(418));
          r = ci(o.nextSibling);
          var u = xa;
          r && Iv(n, r) ? Dd(u, o) : (n.flags = n.flags & -4097 | 2, dn = !1, xa = n);
        }
      } else {
        if (Rc(n)) throw Error(y(418));
        n.flags = n.flags & -4097 | 2, dn = !1, xa = n;
      }
    }
  }
  function Bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    xa = n;
  }
  function Tc(n) {
    if (n !== xa) return !1;
    if (!dn) return Bv(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ms(n.type, n.memoizedProps)), r && (r = ia)) {
      if (Rc(n)) throw $v(), Error(y(418));
      for (; r; ) Dd(n, r), r = ci(r.nextSibling);
    }
    if (Bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ia = ci(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else ia = xa ? ci(n.stateNode.nextSibling) : null;
    return !0;
  }
  function $v() {
    for (var n = ia; n; ) n = ci(n.nextSibling);
  }
  function bn() {
    ia = xa = null, dn = !1;
  }
  function Od(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var _c = Ge.ReactCurrentBatchConfig;
  function fl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(y(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(y(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(C) {
          var x = c.refs;
          C === null ? delete x[d] : x[d] = C;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(y(284));
      if (!o._owner) throw Error(y(290, n));
    }
    return n;
  }
  function Ri(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Yv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function kc(n) {
    function r(z, N) {
      if (n) {
        var V = z.deletions;
        V === null ? (z.deletions = [N], z.flags |= 16) : V.push(N);
      }
    }
    function o(z, N) {
      if (!n) return null;
      for (; N !== null; ) r(z, N), N = N.sibling;
      return null;
    }
    function u(z, N) {
      for (z = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? z.set(N.key, N) : z.set(N.index, N), N = N.sibling;
      return z;
    }
    function c(z, N) {
      return z = Ho(z, N), z.index = 0, z.sibling = null, z;
    }
    function d(z, N, V) {
      return z.index = V, n ? (V = z.alternate, V !== null ? (V = V.index, V < N ? (z.flags |= 2, N) : V) : (z.flags |= 2, N)) : (z.flags |= 1048576, N);
    }
    function C(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function x(z, N, V, ve) {
      return N === null || N.tag !== 6 ? (N = mf(V, z.mode, ve), N.return = z, N) : (N = c(N, V), N.return = z, N);
    }
    function _(z, N, V, ve) {
      var Pe = V.type;
      return Pe === He ? le(z, N, V.props.children, ve, V.key) : N !== null && (N.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === ye && Yv(Pe) === N.type) ? (ve = c(N, V.props), ve.ref = fl(z, N, V), ve.return = z, ve) : (ve = vf(V.type, V.key, V.props, null, z.mode, ve), ve.ref = fl(z, N, V), ve.return = z, ve);
    }
    function $(z, N, V, ve) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== V.containerInfo || N.stateNode.implementation !== V.implementation ? (N = Fs(V, z.mode, ve), N.return = z, N) : (N = c(N, V.children || []), N.return = z, N);
    }
    function le(z, N, V, ve, Pe) {
      return N === null || N.tag !== 7 ? (N = Tl(V, z.mode, ve, Pe), N.return = z, N) : (N = c(N, V), N.return = z, N);
    }
    function ue(z, N, V) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = mf("" + N, z.mode, V), N.return = z, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Re:
            return V = vf(N.type, N.key, N.props, null, z.mode, V), V.ref = fl(z, null, N), V.return = z, V;
          case it:
            return N = Fs(N, z.mode, V), N.return = z, N;
          case ye:
            var ve = N._init;
            return ue(z, ve(N._payload), V);
        }
        if (Xn(N) || Ee(N)) return N = Tl(N, z.mode, V, null), N.return = z, N;
        Ri(z, N);
      }
      return null;
    }
    function ie(z, N, V, ve) {
      var Pe = N !== null ? N.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return Pe !== null ? null : x(z, N, "" + V, ve);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Re:
            return V.key === Pe ? _(z, N, V, ve) : null;
          case it:
            return V.key === Pe ? $(z, N, V, ve) : null;
          case ye:
            return Pe = V._init, ie(
              z,
              N,
              Pe(V._payload),
              ve
            );
        }
        if (Xn(V) || Ee(V)) return Pe !== null ? null : le(z, N, V, ve, null);
        Ri(z, V);
      }
      return null;
    }
    function _e(z, N, V, ve, Pe) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number") return z = z.get(V) || null, x(N, z, "" + ve, Pe);
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case Re:
            return z = z.get(ve.key === null ? V : ve.key) || null, _(N, z, ve, Pe);
          case it:
            return z = z.get(ve.key === null ? V : ve.key) || null, $(N, z, ve, Pe);
          case ye:
            var Je = ve._init;
            return _e(z, N, V, Je(ve._payload), Pe);
        }
        if (Xn(ve) || Ee(ve)) return z = z.get(V) || null, le(N, z, ve, Pe, null);
        Ri(N, ve);
      }
      return null;
    }
    function Me(z, N, V, ve) {
      for (var Pe = null, Je = null, Le = N, nt = N = 0, Qn = null; Le !== null && nt < V.length; nt++) {
        Le.index > nt ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var Ht = ie(z, Le, V[nt], ve);
        if (Ht === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && Ht.alternate === null && r(z, Le), N = d(Ht, N, nt), Je === null ? Pe = Ht : Je.sibling = Ht, Je = Ht, Le = Qn;
      }
      if (nt === V.length) return o(z, Le), dn && ba(z, nt), Pe;
      if (Le === null) {
        for (; nt < V.length; nt++) Le = ue(z, V[nt], ve), Le !== null && (N = d(Le, N, nt), Je === null ? Pe = Le : Je.sibling = Le, Je = Le);
        return dn && ba(z, nt), Pe;
      }
      for (Le = u(z, Le); nt < V.length; nt++) Qn = _e(Le, z, nt, V[nt], ve), Qn !== null && (n && Qn.alternate !== null && Le.delete(Qn.key === null ? nt : Qn.key), N = d(Qn, N, nt), Je === null ? Pe = Qn : Je.sibling = Qn, Je = Qn);
      return n && Le.forEach(function(to) {
        return r(z, to);
      }), dn && ba(z, nt), Pe;
    }
    function Ue(z, N, V, ve) {
      var Pe = Ee(V);
      if (typeof Pe != "function") throw Error(y(150));
      if (V = Pe.call(V), V == null) throw Error(y(151));
      for (var Je = Pe = null, Le = N, nt = N = 0, Qn = null, Ht = V.next(); Le !== null && !Ht.done; nt++, Ht = V.next()) {
        Le.index > nt ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var to = ie(z, Le, Ht.value, ve);
        if (to === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && to.alternate === null && r(z, Le), N = d(to, N, nt), Je === null ? Pe = to : Je.sibling = to, Je = to, Le = Qn;
      }
      if (Ht.done) return o(
        z,
        Le
      ), dn && ba(z, nt), Pe;
      if (Le === null) {
        for (; !Ht.done; nt++, Ht = V.next()) Ht = ue(z, Ht.value, ve), Ht !== null && (N = d(Ht, N, nt), Je === null ? Pe = Ht : Je.sibling = Ht, Je = Ht);
        return dn && ba(z, nt), Pe;
      }
      for (Le = u(z, Le); !Ht.done; nt++, Ht = V.next()) Ht = _e(Le, z, nt, Ht.value, ve), Ht !== null && (n && Ht.alternate !== null && Le.delete(Ht.key === null ? nt : Ht.key), N = d(Ht, N, nt), Je === null ? Pe = Ht : Je.sibling = Ht, Je = Ht);
      return n && Le.forEach(function($y) {
        return r(z, $y);
      }), dn && ba(z, nt), Pe;
    }
    function zn(z, N, V, ve) {
      if (typeof V == "object" && V !== null && V.type === He && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Re:
            e: {
              for (var Pe = V.key, Je = N; Je !== null; ) {
                if (Je.key === Pe) {
                  if (Pe = V.type, Pe === He) {
                    if (Je.tag === 7) {
                      o(z, Je.sibling), N = c(Je, V.props.children), N.return = z, z = N;
                      break e;
                    }
                  } else if (Je.elementType === Pe || typeof Pe == "object" && Pe !== null && Pe.$$typeof === ye && Yv(Pe) === Je.type) {
                    o(z, Je.sibling), N = c(Je, V.props), N.ref = fl(z, Je, V), N.return = z, z = N;
                    break e;
                  }
                  o(z, Je);
                  break;
                } else r(z, Je);
                Je = Je.sibling;
              }
              V.type === He ? (N = Tl(V.props.children, z.mode, ve, V.key), N.return = z, z = N) : (ve = vf(V.type, V.key, V.props, null, z.mode, ve), ve.ref = fl(z, N, V), ve.return = z, z = ve);
            }
            return C(z);
          case it:
            e: {
              for (Je = V.key; N !== null; ) {
                if (N.key === Je) if (N.tag === 4 && N.stateNode.containerInfo === V.containerInfo && N.stateNode.implementation === V.implementation) {
                  o(z, N.sibling), N = c(N, V.children || []), N.return = z, z = N;
                  break e;
                } else {
                  o(z, N);
                  break;
                }
                else r(z, N);
                N = N.sibling;
              }
              N = Fs(V, z.mode, ve), N.return = z, z = N;
            }
            return C(z);
          case ye:
            return Je = V._init, zn(z, N, Je(V._payload), ve);
        }
        if (Xn(V)) return Me(z, N, V, ve);
        if (Ee(V)) return Ue(z, N, V, ve);
        Ri(z, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, N !== null && N.tag === 6 ? (o(z, N.sibling), N = c(N, V), N.return = z, z = N) : (o(z, N), N = mf(V, z.mode, ve), N.return = z, z = N), C(z)) : o(z, N);
    }
    return zn;
  }
  var ou = kc(!0), Wv = kc(!1), Ki = ht(null), $n = null, Se = null, Ia = null;
  function Ra() {
    Ia = Se = $n = null;
  }
  function Nd(n) {
    var r = Ki.current;
    $t(Ki), n._currentValue = r;
  }
  function Md(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function lu(n, r) {
    $n = n, Ia = Se = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ua = !0), n.firstContext = null);
  }
  function Ba(n) {
    var r = n._currentValue;
    if (Ia !== n) if (n = { context: n, memoizedValue: r, next: null }, Se === null) {
      if ($n === null) throw Error(y(308));
      Se = n, $n.dependencies = { lanes: 0, firstContext: n };
    } else Se = Se.next = n;
    return r;
  }
  var dl = null;
  function Hn(n) {
    dl === null ? dl = [n] : dl.push(n);
  }
  function Gv(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Hn(r)) : (o.next = c.next, c.next = o), r.interleaved = o, qi(n, u);
  }
  function qi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Lo = !1;
  function Dc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function uu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function oa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ao(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, kt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, qi(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Hn(u)) : (r.next = c.next, c.next = r), u.interleaved = r, qi(n, o);
  }
  function Oc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ci(n, o);
    }
  }
  function Qv(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = C : d = d.next = C, o = o.next;
        } while (o !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Nc(n, r, o, u) {
    var c = n.updateQueue;
    Lo = !1;
    var d = c.firstBaseUpdate, C = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var _ = x, $ = _.next;
      _.next = null, C === null ? d = $ : C.next = $, C = _;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, x = le.lastBaseUpdate, x !== C && (x === null ? le.firstBaseUpdate = $ : x.next = $, le.lastBaseUpdate = _));
    }
    if (d !== null) {
      var ue = c.baseState;
      C = 0, le = $ = _ = null, x = d;
      do {
        var ie = x.lane, _e = x.eventTime;
        if ((u & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: _e,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Me = n, Ue = x;
            switch (ie = r, _e = o, Ue.tag) {
              case 1:
                if (Me = Ue.payload, typeof Me == "function") {
                  ue = Me.call(_e, ue, ie);
                  break e;
                }
                ue = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = Ue.payload, ie = typeof Me == "function" ? Me.call(_e, ue, ie) : Me, ie == null) break e;
                ue = he({}, ue, ie);
                break e;
              case 2:
                Lo = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [x] : ie.push(x));
        } else _e = { eventTime: _e, lane: ie, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, le === null ? ($ = le = _e, _ = ue) : le = le.next = _e, C |= ie;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ie = x, x = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (!0);
      if (le === null && (_ = ue), c.baseState = _, c.firstBaseUpdate = $, c.lastBaseUpdate = le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          C |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      bl |= C, n.lanes = C, n.memoizedState = ue;
    }
  }
  function Kv(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(y(191, c));
        c.call(u);
      }
    }
  }
  var Es = {}, fi = ht(Es), su = ht(Es), bs = ht(Es);
  function pl(n) {
    if (n === Es) throw Error(y(174));
    return n;
  }
  function Ld(n, r) {
    switch (Kt(bs, r), Kt(su, n), Kt(fi, Es), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Sn(r, n);
    }
    $t(fi), Kt(fi, r);
  }
  function cu() {
    $t(fi), $t(su), $t(bs);
  }
  function qv(n) {
    pl(bs.current);
    var r = pl(fi.current), o = Sn(r, n.type);
    r !== o && (Kt(su, n), Kt(fi, o));
  }
  function Ad(n) {
    su.current === n && ($t(fi), $t(su));
  }
  var mn = ht(0);
  function Mc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Lc = [];
  function zd() {
    for (var n = 0; n < Lc.length; n++) Lc[n]._workInProgressVersionPrimary = null;
    Lc.length = 0;
  }
  var Ac = Ge.ReactCurrentDispatcher, xs = Ge.ReactCurrentBatchConfig, Fe = 0, Ie = null, lt = null, Rt = null, wa = !1, fu = !1, Rs = 0, _y = 0;
  function Rr() {
    throw Error(y(321));
  }
  function ws(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Ua(n[o], r[o])) return !1;
    return !0;
  }
  function re(n, r, o, u, c, d) {
    if (Fe = d, Ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ac.current = n === null || n.memoizedState === null ? ky : sn, n = o(u, c), fu) {
      d = 0;
      do {
        if (fu = !1, Rs = 0, 25 <= d) throw Error(y(301));
        d += 1, Rt = lt = null, r.updateQueue = null, Ac.current = Kc, n = o(u, c);
      } while (fu);
    }
    if (Ac.current = wr, r = lt !== null && lt.next !== null, Fe = 0, Rt = lt = Ie = null, wa = !1, r) throw Error(y(300));
    return n;
  }
  function Vn() {
    var n = Rs !== 0;
    return Rs = 0, n;
  }
  function Ye() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Rt === null ? Ie.memoizedState = Rt = n : Rt = Rt.next = n, Rt;
  }
  function ur() {
    if (lt === null) {
      var n = Ie.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = lt.next;
    var r = Rt === null ? Ie.memoizedState : Rt.next;
    if (r !== null) Rt = r, lt = n;
    else {
      if (n === null) throw Error(y(310));
      lt = n, n = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }, Rt === null ? Ie.memoizedState = Rt = n : Rt = Rt.next = n;
    }
    return Rt;
  }
  function Ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Xi(n) {
    var r = ur(), o = r.queue;
    if (o === null) throw Error(y(311));
    o.lastRenderedReducer = n;
    var u = lt, c = u.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = d.next, d.next = C;
      }
      u.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var x = C = null, _ = null, $ = d;
      do {
        var le = $.lane;
        if ((Fe & le) === le) _ !== null && (_ = _.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), u = $.hasEagerState ? $.eagerState : n(u, $.action);
        else {
          var ue = {
            lane: le,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          _ === null ? (x = _ = ue, C = u) : _ = _.next = ue, Ie.lanes |= le, bl |= le;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      _ === null ? C = u : _.next = x, Ua(u, r.memoizedState) || (ua = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = _, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ie.lanes |= d, bl |= d, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function $a(n) {
    var r = ur(), o = r.queue;
    if (o === null) throw Error(y(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var C = c = c.next;
      do
        d = n(d, C.action), C = C.next;
      while (C !== c);
      Ua(d, r.memoizedState) || (ua = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function du() {
  }
  function vl(n, r) {
    var o = Ie, u = ur(), c = r(), d = !Ua(u.memoizedState, c);
    if (d && (u.memoizedState = c, ua = !0), u = u.queue, Ts(Uc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || Rt !== null && Rt.memoizedState.tag & 1) {
      if (o.flags |= 2048, hl(9, zc.bind(null, o, u, c, r), void 0, null), Dn === null) throw Error(y(349));
      Fe & 30 || pu(o, r, c);
    }
    return c;
  }
  function pu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function zc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, jc(r) && Fc(n);
  }
  function Uc(n, r, o) {
    return o(function() {
      jc(r) && Fc(n);
    });
  }
  function jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Ua(n, o);
    } catch {
      return !0;
    }
  }
  function Fc(n) {
    var r = qi(n, 1);
    r !== null && xn(r, n, 1, -1);
  }
  function Pc(n) {
    var r = Ye();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = _s.bind(null, Ie, n), [r.memoizedState, n];
  }
  function hl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Hc() {
    return ur().memoizedState;
  }
  function vu(n, r, o, u) {
    var c = Ye();
    Ie.flags |= n, c.memoizedState = hl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function hu(n, r, o, u) {
    var c = ur();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (lt !== null) {
      var C = lt.memoizedState;
      if (d = C.destroy, u !== null && ws(u, C.deps)) {
        c.memoizedState = hl(r, o, d, u);
        return;
      }
    }
    Ie.flags |= n, c.memoizedState = hl(1 | r, o, d, u);
  }
  function Vc(n, r) {
    return vu(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return hu(2048, 8, n, r);
  }
  function Ic(n, r) {
    return hu(4, 2, n, r);
  }
  function Bc(n, r) {
    return hu(4, 4, n, r);
  }
  function $c(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, o) {
    return o = o != null ? o.concat([n]) : null, hu(4, 4, $c.bind(null, r, n), o);
  }
  function mu() {
  }
  function ml(n, r) {
    var o = ur();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ws(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var o = ur();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ws(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Gc(n, r, o) {
    return Fe & 21 ? (Ua(o, r) || (o = Bl(), Ie.lanes |= o, bl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ua = !0), n.memoizedState = o);
  }
  function Ud(n, r) {
    var o = Pt;
    Pt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = xs.transition;
    xs.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = o, xs.transition = u;
    }
  }
  function Qc() {
    return ur().memoizedState;
  }
  function Xv(n, r, o) {
    var u = eo(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, jd(n)) yu(r, o);
    else if (o = Gv(n, r, o, u), o !== null) {
      var c = ar();
      xn(o, n, u, c), zo(o, r, u);
    }
  }
  function _s(n, r, o) {
    var u = eo(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (jd(n)) yu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var C = r.lastRenderedState, x = d(C, o);
        if (c.hasEagerState = !0, c.eagerState = x, Ua(x, C)) {
          var _ = r.interleaved;
          _ === null ? (c.next = c, Hn(r)) : (c.next = _.next, _.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = Gv(n, r, c, u), o !== null && (c = ar(), xn(o, n, u, c), zo(o, r, u));
    }
  }
  function jd(n) {
    var r = n.alternate;
    return n === Ie || r !== null && r === Ie;
  }
  function yu(n, r) {
    fu = wa = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function zo(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ci(n, o);
    }
  }
  var wr = { readContext: Ba, useCallback: Rr, useContext: Rr, useEffect: Rr, useImperativeHandle: Rr, useInsertionEffect: Rr, useLayoutEffect: Rr, useMemo: Rr, useReducer: Rr, useRef: Rr, useState: Rr, useDebugValue: Rr, useDeferredValue: Rr, useTransition: Rr, useMutableSource: Rr, useSyncExternalStore: Rr, useId: Rr, unstable_isNewReconciler: !1 }, ky = { readContext: Ba, useCallback: function(n, r) {
    return Ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ba, useEffect: Vc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, vu(
      4194308,
      4,
      $c.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ye();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Ye();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Xv.bind(null, Ie, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Ye();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pc, useDebugValue: mu, useDeferredValue: function(n) {
    return Ye().memoizedState = n;
  }, useTransition: function() {
    var n = Pc(!1), r = n[0];
    return n = Ud.bind(null, n[1]), Ye().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ie, c = Ye();
    if (dn) {
      if (o === void 0) throw Error(y(407));
      o = o();
    } else {
      if (o = r(), Dn === null) throw Error(y(349));
      Fe & 30 || pu(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, Vc(Uc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, hl(9, zc.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ye(), r = Dn.identifierPrefix;
    if (dn) {
      var o = Qi, u = lr;
      o = (u & ~(1 << 32 - Mr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Rs++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = _y++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, sn = {
    readContext: Ba,
    useCallback: ml,
    useContext: Ba,
    useEffect: Ts,
    useImperativeHandle: Yc,
    useInsertionEffect: Ic,
    useLayoutEffect: Bc,
    useMemo: Wc,
    useReducer: Xi,
    useRef: Hc,
    useState: function() {
      return Xi(Ta);
    },
    useDebugValue: mu,
    useDeferredValue: function(n) {
      var r = ur();
      return Gc(r, lt.memoizedState, n);
    },
    useTransition: function() {
      var n = Xi(Ta)[0], r = ur().memoizedState;
      return [n, r];
    },
    useMutableSource: du,
    useSyncExternalStore: vl,
    useId: Qc,
    unstable_isNewReconciler: !1
  }, Kc = { readContext: Ba, useCallback: ml, useContext: Ba, useEffect: Ts, useImperativeHandle: Yc, useInsertionEffect: Ic, useLayoutEffect: Bc, useMemo: Wc, useReducer: $a, useRef: Hc, useState: function() {
    return $a(Ta);
  }, useDebugValue: mu, useDeferredValue: function(n) {
    var r = ur();
    return lt === null ? r.memoizedState = n : Gc(r, lt.memoizedState, n);
  }, useTransition: function() {
    var n = $a(Ta)[0], r = ur().memoizedState;
    return [n, r];
  }, useMutableSource: du, useSyncExternalStore: vl, useId: Qc, unstable_isNewReconciler: !1 };
  function la(n, r) {
    if (n && n.defaultProps) {
      r = he({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function yl(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : he({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var gl = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ve(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = eo(n), d = oa(u, c);
    d.payload = r, o != null && (d.callback = o), r = Ao(n, d, c), r !== null && (xn(r, n, c, u), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = eo(n), d = oa(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = Ao(n, d, c), r !== null && (xn(r, n, c, u), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ar(), u = eo(n), c = oa(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Ao(n, c, u), r !== null && (xn(r, n, u, o), Oc(r, n, u));
  } };
  function Zv(n, r, o, u, c, d, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, C) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, u) || !ss(c, d) : !0;
  }
  function Jv(n, r, o) {
    var u = !1, c = xi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ba(d) : (c = hn(r) ? ta : ot.current, u = r.contextTypes, d = (u = u != null) ? Fa(n, c) : xi), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = gl, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function eh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && gl.enqueueReplaceState(r, r.state, null);
  }
  function Fd(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Dc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ba(d) : (d = hn(r) ? ta : ot.current, c.context = Fa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (yl(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && gl.enqueueReplaceState(c, c.state, null), Nc(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Uo(n, r) {
    try {
      var o = "", u = r;
      do
        o += yt(u), u = u.return;
      while (u);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Pd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function ks(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var th = typeof WeakMap == "function" ? WeakMap : Map;
  function nh(n, r, o) {
    o = oa(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      uf || (uf = !0, Qd = u), ks(n, r);
    }, o;
  }
  function rh(n, r, o) {
    o = oa(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        ks(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      ks(n, r), typeof u != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Ds(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new th();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = Fy.bind(null, n, r, o), r.then(n, n));
  }
  function ah(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Hd(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = oa(-1, 1), r.tag = 2, Ao(o, r, 1))), o.lanes |= 1), n);
  }
  var ih = Ge.ReactCurrentOwner, ua = !1;
  function Ln(n, r, o, u) {
    r.child = n === null ? Wv(r, null, o, u) : ou(r, n.child, o, u);
  }
  function gu(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return lu(r, c), u = re(n, r, o, u, d, c), o = Vn(), n !== null && !ua ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, An(n, r, c)) : (dn && o && xc(r), r.flags |= 1, Ln(n, r, u, c), r.child);
  }
  function jo(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !Jd(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, qc(n, r, d, u, c)) : (n = vf(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var C = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(C, u) && n.ref === r.ref) return An(n, r, c);
    }
    return r.flags |= 1, n = Ho(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function qc(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (ua = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (ua = !0);
      else return r.lanes = n.lanes, An(n, r, c);
    }
    return pt(n, r, o, u, c);
  }
  function sa(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Kt(ku, ca), ca |= o;
    else {
      if (!(o & 1073741824)) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Kt(ku, ca), ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, Kt(ku, ca), ca |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, Kt(ku, ca), ca |= u;
    return Ln(n, r, c, o), r.child;
  }
  function Sl(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function pt(n, r, o, u, c) {
    var d = hn(o) ? ta : ot.current;
    return d = Fa(r, d), lu(r, c), o = re(n, r, o, u, d, c), u = Vn(), n !== null && !ua ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, An(n, r, c)) : (dn && u && xc(r), r.flags |= 1, Ln(n, r, o, c), r.child);
  }
  function Os(n, r, o, u, c) {
    if (hn(o)) {
      var d = !0;
      bc(r);
    } else d = !1;
    if (lu(r, c), r.stateNode === null) Ms(n, r), Jv(r, o, u), Fd(r, o, u, c), u = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var _ = C.context, $ = o.contextType;
      typeof $ == "object" && $ !== null ? $ = Ba($) : ($ = hn(o) ? ta : ot.current, $ = Fa(r, $));
      var le = o.getDerivedStateFromProps, ue = typeof le == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ue || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== u || _ !== $) && eh(r, C, u, $), Lo = !1;
      var ie = r.memoizedState;
      C.state = ie, Nc(r, u, C, c), _ = r.memoizedState, x !== u || ie !== _ || _n.current || Lo ? (typeof le == "function" && (yl(r, o, le, u), _ = r.memoizedState), (x = Lo || Zv(r, o, x, u, ie, _, $)) ? (ue || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = _), C.props = u, C.state = _, C.context = $, u = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, uu(n, r), x = r.memoizedProps, $ = r.type === r.elementType ? x : la(r.type, x), C.props = $, ue = r.pendingProps, ie = C.context, _ = o.contextType, typeof _ == "object" && _ !== null ? _ = Ba(_) : (_ = hn(o) ? ta : ot.current, _ = Fa(r, _));
      var _e = o.getDerivedStateFromProps;
      (le = typeof _e == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== ue || ie !== _) && eh(r, C, u, _), Lo = !1, ie = r.memoizedState, C.state = ie, Nc(r, u, C, c);
      var Me = r.memoizedState;
      x !== ue || ie !== Me || _n.current || Lo ? (typeof _e == "function" && (yl(r, o, _e, u), Me = r.memoizedState), ($ = Lo || Zv(r, o, $, u, ie, Me, _) || !1) ? (le || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Me, _), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Me, _)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Me), C.props = u, C.state = Me, C.context = _, u = $) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Xc(n, r, o, u, d, c);
  }
  function Xc(n, r, o, u, c, d) {
    Sl(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C) return c && Vv(r, o, !1), An(n, r, d);
    u = r.stateNode, ih.current = r;
    var x = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = ou(r, n.child, null, d), r.child = ou(r, null, x, d)) : Ln(n, r, x, d), r.memoizedState = u.state, c && Vv(r, o, !0), r.child;
  }
  function Dy(n) {
    var r = n.stateNode;
    r.pendingContext ? No(n, r.pendingContext, r.pendingContext !== r.context) : r.context && No(n, r.context, !1), Ld(n, r.containerInfo);
  }
  function oh(n, r, o, u, c) {
    return bn(), Od(c), r.flags |= 256, Ln(n, r, o, u), r.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lh(n, r, o) {
    var u = r.pendingProps, c = mn.current, d = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Kt(mn, c & 1), n === null)
      return wc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, C = { mode: "hidden", children: C }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = C) : d = hf(C, u, 0, null), n = Tl(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cl(o), r.memoizedState = Ns, n) : Zc(r, C));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return Vd(n, r, C, u, x, c, o);
    if (d) {
      d = u.fallback, C = r.mode, c = n.child, x = c.sibling;
      var _ = { mode: "hidden", children: u.children };
      return !(C & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = _, r.deletions = null) : (u = Ho(c, _), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Ho(x, d) : (d = Tl(d, C, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, C = n.child.memoizedState, C = C === null ? Cl(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, d.memoizedState = C, d.childLanes = n.childLanes & ~o, r.memoizedState = Ns, u;
    }
    return d = n.child, n = d.sibling, u = Ho(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Zc(n, r) {
    return r = hf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, o, u) {
    return u !== null && Od(u), ou(r, n.child, null, o), n = Zc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Vd(n, r, o, u, c, d, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Pd(Error(y(422))), Jc(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = hf({ mode: "visible", children: u.children }, c, 0, null), d = Tl(d, c, C, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && ou(r, n.child, null, C), r.child.memoizedState = Cl(C), r.memoizedState = Ns, d);
    if (!(r.mode & 1)) return Jc(n, r, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var x = u.dgst;
      return u = x, d = Error(y(419)), u = Pd(d, u, void 0), Jc(n, r, C, u);
    }
    if (x = (C & n.childLanes) !== 0, ua || x) {
      if (u = Dn, u !== null) {
        switch (C & -C) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | C) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, qi(n, c), xn(u, n, c, -1));
      }
      return js(), u = Pd(Error(y(421))), Jc(n, r, C, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Zd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = ci(c.nextSibling), xa = r, dn = !0, Va = null, n !== null && (aa[xr++] = lr, aa[xr++] = Qi, aa[xr++] = Ha, lr = n.id, Qi = n.overflow, Ha = r), r = Zc(r, u.children), r.flags |= 4096, r);
  }
  function uh(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Md(n.return, r, o);
  }
  function ef(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Id(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Ln(n, r, u.children, o), u = mn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && uh(n, o, r);
        else if (n.tag === 19) uh(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Kt(mn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Mc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), ef(r, !1, c, o, d);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        ef(r, !0, o, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ms(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function An(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), bl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, o = Ho(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Ho(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Zi(n, r, o) {
    switch (r.tag) {
      case 3:
        Dy(r), bn();
        break;
      case 5:
        qv(r);
        break;
      case 1:
        hn(r.type) && bc(r);
        break;
      case 4:
        Ld(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Kt(Ki, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Kt(mn, mn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? lh(n, r, o) : (Kt(mn, mn.current & 1), n = An(n, r, o), n !== null ? n.sibling : null);
        Kt(mn, mn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Id(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Kt(mn, mn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, sa(n, r, o);
    }
    return An(n, r, o);
  }
  var wi, Su, Cu, Ya;
  wi = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Su = function() {
  }, Cu = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, pl(fi.current);
      var d = null;
      switch (o) {
        case "input":
          c = qn(n, c), u = qn(n, u), d = [];
          break;
        case "select":
          c = he({}, c, { value: void 0 }), u = he({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kr(n, c), u = Kr(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ec);
      }
      Mn(o, u);
      var C;
      o = null;
      for ($ in c) if (!u.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var x = c[$];
        for (C in x) x.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (k.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in u) {
        var _ = u[$];
        if (x = c != null ? c[$] : void 0, u.hasOwnProperty($) && _ !== x && (_ != null || x != null)) if ($ === "style") if (x) {
          for (C in x) !x.hasOwnProperty(C) || _ && _.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in _) _.hasOwnProperty(C) && x[C] !== _[C] && (o || (o = {}), o[C] = _[C]);
        } else o || (d || (d = []), d.push(
          $,
          o
        )), o = _;
        else $ === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, x = x ? x.__html : void 0, _ != null && x !== _ && (d = d || []).push($, _)) : $ === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push($, "" + _) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (k.hasOwnProperty($) ? (_ != null && $ === "onScroll" && on("scroll", n), d || x === _ || (d = [])) : (d = d || []).push($, _));
      }
      o && (d = d || []).push("style", o);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, Ya = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function kn(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function Tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Oy(n, r, o) {
    var u = r.pendingProps;
    switch (kd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tr(r), null;
      case 1:
        return hn(r.type) && Pa(), Tr(r), null;
      case 3:
        return u = r.stateNode, cu(), $t(_n), $t(ot), zd(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Tc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Va !== null && (Kd(Va), Va = null))), Su(n, r), Tr(r), null;
      case 5:
        Ad(r);
        var c = pl(bs.current);
        if (o = r.type, n !== null && r.stateNode != null) Cu(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(y(166));
            return Tr(r), null;
          }
          if (n = pl(fi.current), Tc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[bi] = r, u[sl] = d, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                on("cancel", u), on("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                on("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++) on(ps[c], u);
                break;
              case "source":
                on("error", u);
                break;
              case "img":
              case "image":
              case "link":
                on(
                  "error",
                  u
                ), on("load", u);
                break;
              case "details":
                on("toggle", u);
                break;
              case "input":
                Bn(u, d), on("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, on("invalid", u);
                break;
              case "textarea":
                Cr(u, d), on("invalid", u);
            }
            Mn(o, d), c = null;
            for (var C in d) if (d.hasOwnProperty(C)) {
              var x = d[C];
              C === "children" ? typeof x == "string" ? u.textContent !== x && (d.suppressHydrationWarning !== !0 && Cc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && Cc(
                u.textContent,
                x,
                n
              ), c = ["children", "" + x]) : k.hasOwnProperty(C) && x != null && C === "onScroll" && on("scroll", u);
            }
            switch (o) {
              case "input":
                gr(u), Gr(u, d, !0);
                break;
              case "textarea":
                gr(u), or(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Ec);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = qr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, { is: u.is }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[bi] = r, n[sl] = u, wi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Cn(o, u), o) {
                case "dialog":
                  on("cancel", n), on("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  on("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++) on(ps[c], n);
                  c = u;
                  break;
                case "source":
                  on("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  on(
                    "error",
                    n
                  ), on("load", n), c = u;
                  break;
                case "details":
                  on("toggle", n), c = u;
                  break;
                case "input":
                  Bn(n, u), c = qn(n, u), on("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = he({}, u, { value: void 0 }), on("invalid", n);
                  break;
                case "textarea":
                  Cr(n, u), c = Kr(n, u), on("invalid", n);
                  break;
                default:
                  c = u;
              }
              Mn(o, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var _ = x[d];
                d === "style" ? Bt(n, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && hi(n, _)) : d === "children" ? typeof _ == "string" ? (o !== "textarea" || _ !== "") && ya(n, _) : typeof _ == "number" && ya(n, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (k.hasOwnProperty(d) ? _ != null && d === "onScroll" && on("scroll", n) : _ != null && ze(n, d, _, C));
              }
              switch (o) {
                case "input":
                  gr(n), Gr(n, u, !1);
                  break;
                case "textarea":
                  gr(n), or(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Et(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Sr(n, !!u.multiple, d, !1) : u.defaultValue != null && Sr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Tr(r), null;
      case 6:
        if (n && r.stateNode != null) Ya(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(y(166));
          if (o = pl(bs.current), pl(fi.current), Tc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[bi] = r, (d = u.nodeValue !== o) && (n = xa, n !== null)) switch (n.tag) {
              case 3:
                Cc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Cc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[bi] = r, r.stateNode = u;
        }
        return Tr(r), null;
      case 13:
        if ($t(mn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && ia !== null && r.mode & 1 && !(r.flags & 128)) $v(), bn(), r.flags |= 98560, d = !1;
          else if (d = Tc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(y(317));
              d[bi] = r;
            } else bn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tr(r), d = !1;
          } else Va !== null && (Kd(Va), Va = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Wn === 0 && (Wn = 3) : js())), r.updateQueue !== null && (r.flags |= 4), Tr(r), null);
      case 4:
        return cu(), Su(n, r), n === null && ru(r.stateNode.containerInfo), Tr(r), null;
      case 10:
        return Nd(r.type._context), Tr(r), null;
      case 17:
        return hn(r.type) && Pa(), Tr(r), null;
      case 19:
        if ($t(mn), d = r.memoizedState, d === null) return Tr(r), null;
        if (u = (r.flags & 128) !== 0, C = d.rendering, C === null) if (u) kn(d, !1);
        else {
          if (Wn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = Mc(n), C !== null) {
              for (r.flags |= 128, kn(d, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, C = d.alternate, C === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = C.childLanes, d.lanes = C.lanes, d.child = C.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = C.memoizedProps, d.memoizedState = C.memoizedState, d.updateQueue = C.updateQueue, d.type = C.type, n = C.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Kt(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > Ou && (r.flags |= 128, u = !0, kn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Mc(C), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), kn(d, !0), d.tail === null && d.tailMode === "hidden" && !C.alternate && !dn) return Tr(r), null;
          } else 2 * Ft() - d.renderingStartTime > Ou && o !== 1073741824 && (r.flags |= 128, u = !0, kn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (C.sibling = r.child, r.child = C) : (o = d.last, o !== null ? o.sibling = C : r.child = C, d.last = C);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ft(), r.sibling = null, o = mn.current, Kt(mn, u ? o & 1 | 2 : o & 1), r) : (Tr(r), null);
      case 22:
      case 23:
        return df(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ca & 1073741824 && (Tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function Ny(n, r) {
    switch (kd(r), r.tag) {
      case 1:
        return hn(r.type) && Pa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return cu(), $t(_n), $t(ot), zd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ad(r), null;
      case 13:
        if ($t(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(y(340));
          bn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $t(mn), null;
      case 4:
        return cu(), null;
      case 10:
        return Nd(r.type._context), null;
      case 22:
      case 23:
        return df(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Eu = !1, sr = !1, tf = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
  function bu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      On(n, r, u);
    }
    else o.current = null;
  }
  function Bd(n, r, o) {
    try {
      o();
    } catch (u) {
      On(n, r, u);
    }
  }
  var nf = !1;
  function My(n, r) {
    if (Cd = za, n = hc(), $i(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, d.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, x = -1, _ = -1, $ = 0, le = 0, ue = n, ie = null;
          t: for (; ; ) {
            for (var _e; ue !== o || c !== 0 && ue.nodeType !== 3 || (x = C + c), ue !== d || u !== 0 && ue.nodeType !== 3 || (_ = C + u), ue.nodeType === 3 && (C += ue.nodeValue.length), (_e = ue.firstChild) !== null; )
              ie = ue, ue = _e;
            for (; ; ) {
              if (ue === n) break t;
              if (ie === o && ++$ === c && (x = C), ie === d && ++le === u && (_ = C), (_e = ue.nextSibling) !== null) break;
              ue = ie, ie = ue.parentNode;
            }
            ue = _e;
          }
          o = x === -1 || _ === -1 ? null : { start: x, end: _ };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (ll = { focusedElem: n, selectionRange: o }, za = !1, Ne = r; Ne !== null; ) if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ne = n;
    else for (; Ne !== null; ) {
      r = Ne;
      try {
        var Me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Me !== null) {
              var Ue = Me.memoizedProps, zn = Me.memoizedState, z = r.stateNode, N = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Ue : la(r.type, Ue), zn);
              z.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var V = r.stateNode.containerInfo;
            V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(y(163));
        }
      } catch (ve) {
        On(r, r.return, ve);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ne = n;
        break;
      }
      Ne = r.return;
    }
    return Me = nf, nf = !1, Me;
  }
  function xu(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Bd(r, o, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function rf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function af(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function sh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[bi], delete r[sl], delete r[xd], delete r[Ty], delete r[Rd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function $d(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ch(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || $d(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ls(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Ec));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ls(n, r, o), n = n.sibling; n !== null; ) Ls(n, r, o), n = n.sibling;
  }
  function Ru(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ru(n, r, o), n = n.sibling; n !== null; ) Ru(n, r, o), n = n.sibling;
  }
  var yn = null, nr = !1;
  function zr(n, r, o) {
    for (o = o.child; o !== null; ) wu(n, r, o), o = o.sibling;
  }
  function wu(n, r, o) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function") try {
      Xr.onCommitFiberUnmount(yo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        sr || bu(o, r);
      case 6:
        var u = yn, c = nr;
        yn = null, zr(n, r, o), yn = u, nr = c, yn !== null && (nr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : yn.removeChild(o.stateNode));
        break;
      case 18:
        yn !== null && (nr ? (n = yn, o = o.stateNode, n.nodeType === 8 ? ko(n.parentNode, o) : n.nodeType === 1 && ko(n, o), Ro(n)) : ko(yn, o.stateNode));
        break;
      case 4:
        u = yn, c = nr, yn = o.stateNode.containerInfo, nr = !0, zr(n, r, o), yn = u, nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, C = d.destroy;
            d = d.tag, C !== void 0 && (d & 2 || d & 4) && Bd(o, r, C), c = c.next;
          } while (c !== u);
        }
        zr(n, r, o);
        break;
      case 1:
        if (!sr && (bu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (x) {
          On(o, r, x);
        }
        zr(n, r, o);
        break;
      case 21:
        zr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (sr = (u = sr) || o.memoizedState !== null, zr(n, r, o), sr = u) : zr(n, r, o);
        break;
      default:
        zr(n, r, o);
    }
  }
  function Tu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new tf()), r.forEach(function(u) {
        var c = Py.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function rr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, C = r, x = C;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              yn = x.stateNode, nr = !1;
              break e;
            case 3:
              yn = x.stateNode.containerInfo, nr = !0;
              break e;
            case 4:
              yn = x.stateNode.containerInfo, nr = !0;
              break e;
          }
          x = x.return;
        }
        if (yn === null) throw Error(y(160));
        wu(d, C, c), yn = null, nr = !1;
        var _ = c.alternate;
        _ !== null && (_.return = null), c.return = null;
      } catch ($) {
        On(c, r, $);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) fh(r, n), r = r.sibling;
  }
  function fh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rr(r, n), Ti(n), u & 4) {
          try {
            xu(3, n, n.return), rf(3, n);
          } catch (Ue) {
            On(n, n.return, Ue);
          }
          try {
            xu(5, n, n.return);
          } catch (Ue) {
            On(n, n.return, Ue);
          }
        }
        break;
      case 1:
        rr(r, n), Ti(n), u & 512 && o !== null && bu(o, o.return);
        break;
      case 5:
        if (rr(r, n), Ti(n), u & 512 && o !== null && bu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ya(c, "");
          } catch (Ue) {
            On(n, n.return, Ue);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, C = o !== null ? o.memoizedProps : d, x = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null) try {
            x === "input" && d.type === "radio" && d.name != null && jn(c, d), Cn(x, C);
            var $ = Cn(x, d);
            for (C = 0; C < _.length; C += 2) {
              var le = _[C], ue = _[C + 1];
              le === "style" ? Bt(c, ue) : le === "dangerouslySetInnerHTML" ? hi(c, ue) : le === "children" ? ya(c, ue) : ze(c, le, ue, $);
            }
            switch (x) {
              case "input":
                Nn(c, d);
                break;
              case "textarea":
                ma(c, d);
                break;
              case "select":
                var ie = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var _e = d.value;
                _e != null ? Sr(c, !!d.multiple, _e, !1) : ie !== !!d.multiple && (d.defaultValue != null ? Sr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Sr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[sl] = d;
          } catch (Ue) {
            On(n, n.return, Ue);
          }
        }
        break;
      case 6:
        if (rr(r, n), Ti(n), u & 4) {
          if (n.stateNode === null) throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ue) {
            On(n, n.return, Ue);
          }
        }
        break;
      case 3:
        if (rr(r, n), Ti(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Ro(r.containerInfo);
        } catch (Ue) {
          On(n, n.return, Ue);
        }
        break;
      case 4:
        rr(r, n), Ti(n);
        break;
      case 13:
        rr(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (lf = Ft())), u & 4 && Tu(n);
        break;
      case 22:
        if (le = o !== null && o.memoizedState !== null, n.mode & 1 ? (sr = ($ = sr) || le, rr(r, n), sr = $) : rr(r, n), Ti(n), u & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !le && n.mode & 1) for (Ne = n, le = n.child; le !== null; ) {
            for (ue = Ne = le; Ne !== null; ) {
              switch (ie = Ne, _e = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xu(4, ie, ie.return);
                  break;
                case 1:
                  bu(ie, ie.return);
                  var Me = ie.stateNode;
                  if (typeof Me.componentWillUnmount == "function") {
                    u = ie, o = ie.return;
                    try {
                      r = u, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                    } catch (Ue) {
                      On(u, o, Ue);
                    }
                  }
                  break;
                case 5:
                  bu(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    dh(ue);
                    continue;
                  }
              }
              _e !== null ? (_e.return = ie, Ne = _e) : dh(ue);
            }
            le = le.sibling;
          }
          e: for (le = null, ue = n; ; ) {
            if (ue.tag === 5) {
              if (le === null) {
                le = ue;
                try {
                  c = ue.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = ue.stateNode, _ = ue.memoizedProps.style, C = _ != null && _.hasOwnProperty("display") ? _.display : null, x.style.display = gt("display", C));
                } catch (Ue) {
                  On(n, n.return, Ue);
                }
              }
            } else if (ue.tag === 6) {
              if (le === null) try {
                ue.stateNode.nodeValue = $ ? "" : ue.memoizedProps;
              } catch (Ue) {
                On(n, n.return, Ue);
              }
            } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
              ue.child.return = ue, ue = ue.child;
              continue;
            }
            if (ue === n) break e;
            for (; ue.sibling === null; ) {
              if (ue.return === null || ue.return === n) break e;
              le === ue && (le = null), ue = ue.return;
            }
            le === ue && (le = null), ue.sibling.return = ue.return, ue = ue.sibling;
          }
        }
        break;
      case 19:
        rr(r, n), Ti(n), u & 4 && Tu(n);
        break;
      case 21:
        break;
      default:
        rr(
          r,
          n
        ), Ti(n);
    }
  }
  function Ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if ($d(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(y(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ya(c, ""), u.flags &= -33);
            var d = ch(n);
            Ru(n, d, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, x = ch(n);
            Ls(n, x, C);
            break;
          default:
            throw Error(y(161));
        }
      } catch (_) {
        On(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ly(n, r, o) {
    Ne = n, Yd(n);
  }
  function Yd(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ne !== null; ) {
      var c = Ne, d = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Eu;
        if (!C) {
          var x = c.alternate, _ = x !== null && x.memoizedState !== null || sr;
          x = Eu;
          var $ = sr;
          if (Eu = C, (sr = _) && !$) for (Ne = c; Ne !== null; ) C = Ne, _ = C.child, C.tag === 22 && C.memoizedState !== null ? Wd(c) : _ !== null ? (_.return = C, Ne = _) : Wd(c);
          for (; d !== null; ) Ne = d, Yd(d), d = d.sibling;
          Ne = c, Eu = x, sr = $;
        }
        _u(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ne = d) : _u(n);
    }
  }
  function _u(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || rf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !sr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : la(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Kv(r, d, u);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Kv(r, C, o);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (o === null && r.flags & 4) {
                o = x;
                var _ = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && o.focus();
                    break;
                  case "img":
                    _.src && (o.src = _.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var $ = r.alternate;
                if ($ !== null) {
                  var le = $.memoizedState;
                  if (le !== null) {
                    var ue = le.dehydrated;
                    ue !== null && Ro(ue);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
          sr || r.flags & 512 && af(r);
        } catch (ie) {
          On(r, r.return, ie);
        }
      }
      if (r === n) {
        Ne = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function dh(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r === n) {
        Ne = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function Wd(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              rf(4, r);
            } catch (_) {
              On(r, o, _);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (_) {
                On(r, c, _);
              }
            }
            var d = r.return;
            try {
              af(r);
            } catch (_) {
              On(r, d, _);
            }
            break;
          case 5:
            var C = r.return;
            try {
              af(r);
            } catch (_) {
              On(r, C, _);
            }
        }
      } catch (_) {
        On(r, r.return, _);
      }
      if (r === n) {
        Ne = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ne = x;
        break;
      }
      Ne = r.return;
    }
  }
  var Ay = Math.ceil, El = Ge.ReactCurrentDispatcher, of = Ge.ReactCurrentOwner, Wa = Ge.ReactCurrentBatchConfig, kt = 0, Dn = null, pn = null, Yn = 0, ca = 0, ku = ht(0), Wn = 0, As = null, bl = 0, Du = 0, Gd = 0, Fo = null, _r = null, lf = 0, Ou = 1 / 0, Ji = null, uf = !1, Qd = null, Ga = null, Nu = !1, Qa = null, sf = 0, zs = 0, cf = null, Us = -1, xl = 0;
  function ar() {
    return kt & 6 ? Ft() : Us !== -1 ? Us : Us = Ft();
  }
  function eo(n) {
    return n.mode & 1 ? kt & 2 && Yn !== 0 ? Yn & -Yn : _c.transition !== null ? (xl === 0 && (xl = Bl()), xl) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function xn(n, r, o, u) {
    if (50 < zs) throw zs = 0, cf = null, Error(y(185));
    Fi(n, o, u), (!(kt & 2) || n !== Dn) && (n === Dn && (!(kt & 2) && (Du |= o), Wn === 4 && _i(n, Yn)), Gn(n, u), o === 1 && kt === 0 && !(r.mode & 1) && (Ou = Ft() + 500, tr && na()));
  }
  function Gn(n, r) {
    var o = n.callbackNode;
    Co(n, r);
    var u = Lr(n, n === Dn ? Yn : 0);
    if (u === 0) o !== null && cn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && cn(o), r === 1) n.tag === 0 ? Td(Mu.bind(null, n)) : wd(Mu.bind(null, n)), bd(function() {
        !(kt & 6) && na();
      }), o = null;
      else {
        switch (Yl(u)) {
          case 1:
            o = Nr;
            break;
          case 4:
            o = Ct;
            break;
          case 16:
            o = La;
            break;
          case 536870912:
            o = Vl;
            break;
          default:
            o = La;
        }
        o = Ch(o, ff.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function ff(n, r) {
    if (Us = -1, xl = 0, kt & 6) throw Error(y(327));
    var o = n.callbackNode;
    if (Lu() && n.callbackNode !== o) return null;
    var u = Lr(n, n === Dn ? Yn : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = pf(n, u);
    else {
      r = u;
      var c = kt;
      kt |= 2;
      var d = vh();
      (Dn !== n || Yn !== r) && (Ji = null, Ou = Ft() + 500, wl(n, r));
      do
        try {
          Uy();
          break;
        } catch (x) {
          ph(n, x);
        }
      while (!0);
      Ra(), El.current = d, kt = c, pn !== null ? r = 0 : (Dn = null, Yn = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Eo(n), c !== 0 && (u = c, r = Rl(n, c))), r === 1) throw o = As, wl(n, 0), _i(n, u), Gn(n, Ft()), o;
      if (r === 6) _i(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !qd(c) && (r = pf(n, u), r === 2 && (d = Eo(n), d !== 0 && (u = d, r = Rl(n, d))), r === 1)) throw o = As, wl(n, 0), _i(n, u), Gn(n, Ft()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Po(n, _r, Ji);
            break;
          case 3:
            if (_i(n, u), (u & 130023424) === u && (r = lf + 500 - Ft(), 10 < r)) {
              if (Lr(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ul(Po.bind(null, n, _r, Ji), r);
              break;
            }
            Po(n, _r, Ji);
            break;
          case 4:
            if (_i(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - Mr(u);
              d = 1 << C, C = r[C], C > c && (c = C), u &= ~d;
            }
            if (u = c, u = Ft() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Ay(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = ul(Po.bind(null, n, _r, Ji), u);
              break;
            }
            Po(n, _r, Ji);
            break;
          case 5:
            Po(n, _r, Ji);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return Gn(n, Ft()), n.callbackNode === o ? ff.bind(null, n) : null;
  }
  function Rl(n, r) {
    var o = Fo;
    return n.current.memoizedState.isDehydrated && (wl(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = _r, _r = o, r !== null && Kd(r)), n;
  }
  function Kd(n) {
    _r === null ? _r = n : _r.push.apply(_r, n);
  }
  function qd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ua(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function _i(n, r) {
    for (r &= ~Gd, r &= ~Du, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Mr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Mu(n) {
    if (kt & 6) throw Error(y(327));
    Lu();
    var r = Lr(n, 0);
    if (!(r & 1)) return Gn(n, Ft()), null;
    var o = pf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Eo(n);
      u !== 0 && (r = u, o = Rl(n, u));
    }
    if (o === 1) throw o = As, wl(n, 0), _i(n, r), Gn(n, Ft()), o;
    if (o === 6) throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Po(n, _r, Ji), Gn(n, Ft()), null;
  }
  function Xd(n, r) {
    var o = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = o, kt === 0 && (Ou = Ft() + 500, tr && na());
    }
  }
  function ki(n) {
    Qa !== null && Qa.tag === 0 && !(kt & 6) && Lu();
    var r = kt;
    kt |= 1;
    var o = Wa.transition, u = Pt;
    try {
      if (Wa.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = u, Wa.transition = o, kt = r, !(kt & 6) && na();
    }
  }
  function df() {
    ca = ku.current, $t(ku);
  }
  function wl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Hv(o)), pn !== null) for (o = pn.return; o !== null; ) {
      var u = o;
      switch (kd(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Pa();
          break;
        case 3:
          cu(), $t(_n), $t(ot), zd();
          break;
        case 5:
          Ad(u);
          break;
        case 4:
          cu();
          break;
        case 13:
          $t(mn);
          break;
        case 19:
          $t(mn);
          break;
        case 10:
          Nd(u.type._context);
          break;
        case 22:
        case 23:
          df();
      }
      o = o.return;
    }
    if (Dn = n, pn = n = Ho(n.current, null), Yn = ca = r, Wn = 0, As = null, Gd = Du = bl = 0, _r = Fo = null, dl !== null) {
      for (r = 0; r < dl.length; r++) if (o = dl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var C = d.next;
          d.next = c, u.next = C;
        }
        o.pending = u;
      }
      dl = null;
    }
    return n;
  }
  function ph(n, r) {
    do {
      var o = pn;
      try {
        if (Ra(), Ac.current = wr, wa) {
          for (var u = Ie.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          wa = !1;
        }
        if (Fe = 0, Rt = lt = Ie = null, fu = !1, Rs = 0, of.current = null, o === null || o.return === null) {
          Wn = 1, As = r, pn = null;
          break;
        }
        e: {
          var d = n, C = o.return, x = o, _ = r;
          if (r = Yn, x.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var $ = _, le = x, ue = le.tag;
            if (!(le.mode & 1) && (ue === 0 || ue === 11 || ue === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var _e = ah(C);
            if (_e !== null) {
              _e.flags &= -257, Hd(_e, C, x, d, r), _e.mode & 1 && Ds(d, $, r), r = _e, _ = $;
              var Me = r.updateQueue;
              if (Me === null) {
                var Ue = /* @__PURE__ */ new Set();
                Ue.add(_), r.updateQueue = Ue;
              } else Me.add(_);
              break e;
            } else {
              if (!(r & 1)) {
                Ds(d, $, r), js();
                break e;
              }
              _ = Error(y(426));
            }
          } else if (dn && x.mode & 1) {
            var zn = ah(C);
            if (zn !== null) {
              !(zn.flags & 65536) && (zn.flags |= 256), Hd(zn, C, x, d, r), Od(Uo(_, x));
              break e;
            }
          }
          d = _ = Uo(_, x), Wn !== 4 && (Wn = 2), Fo === null ? Fo = [d] : Fo.push(d), d = C;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = nh(d, _, r);
                Qv(d, z);
                break e;
              case 1:
                x = _;
                var N = d.type, V = d.stateNode;
                if (!(d.flags & 128) && (typeof N.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Ga === null || !Ga.has(V)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ve = rh(d, x, r);
                  Qv(d, ve);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        mh(o);
      } catch (Pe) {
        r = Pe, pn === o && o !== null && (pn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vh() {
    var n = El.current;
    return El.current = wr, n === null ? wr : n;
  }
  function js() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), Dn === null || !(bl & 268435455) && !(Du & 268435455) || _i(Dn, Yn);
  }
  function pf(n, r) {
    var o = kt;
    kt |= 2;
    var u = vh();
    (Dn !== n || Yn !== r) && (Ji = null, wl(n, r));
    do
      try {
        zy();
        break;
      } catch (c) {
        ph(n, c);
      }
    while (!0);
    if (Ra(), kt = o, El.current = u, pn !== null) throw Error(y(261));
    return Dn = null, Yn = 0, Wn;
  }
  function zy() {
    for (; pn !== null; ) hh(pn);
  }
  function Uy() {
    for (; pn !== null && !br(); ) hh(pn);
  }
  function hh(n) {
    var r = Sh(n.alternate, n, ca);
    n.memoizedProps = n.pendingProps, r === null ? mh(n) : pn = r, of.current = null;
  }
  function mh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ny(o, r), o !== null) {
          o.flags &= 32767, pn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, pn = null;
          return;
        }
      } else if (o = Oy(o, r, ca), o !== null) {
        pn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function Po(n, r, o) {
    var u = Pt, c = Wa.transition;
    try {
      Wa.transition = null, Pt = 1, jy(n, r, o, u);
    } finally {
      Wa.transition = c, Pt = u;
    }
    return null;
  }
  function jy(n, r, o, u) {
    do
      Lu();
    while (Qa !== null);
    if (kt & 6) throw Error(y(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (td(n, d), n === Dn && (pn = Dn = null, Yn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Nu || (Nu = !0, Ch(La, function() {
      return Lu(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = Wa.transition, Wa.transition = null;
      var C = Pt;
      Pt = 1;
      var x = kt;
      kt |= 4, of.current = null, My(n, o), fh(o, n), mc(ll), za = !!Cd, ll = Cd = null, n.current = o, Ly(o), Si(), kt = x, Pt = C, Wa.transition = d;
    } else n.current = o;
    if (Nu && (Nu = !1, Qa = n, sf = c), d = n.pendingLanes, d === 0 && (Ga = null), ts(o.stateNode), Gn(n, Ft()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (uf) throw uf = !1, n = Qd, Qd = null, n;
    return sf & 1 && n.tag !== 0 && Lu(), d = n.pendingLanes, d & 1 ? n === cf ? zs++ : (zs = 0, cf = n) : zs = 0, na(), null;
  }
  function Lu() {
    if (Qa !== null) {
      var n = Yl(sf), r = Wa.transition, o = Pt;
      try {
        if (Wa.transition = null, Pt = 16 > n ? 16 : n, Qa === null) var u = !1;
        else {
          if (n = Qa, Qa = null, sf = 0, kt & 6) throw Error(y(331));
          var c = kt;
          for (kt |= 4, Ne = n.current; Ne !== null; ) {
            var d = Ne, C = d.child;
            if (Ne.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var _ = 0; _ < x.length; _++) {
                  var $ = x[_];
                  for (Ne = $; Ne !== null; ) {
                    var le = Ne;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xu(8, le, d);
                    }
                    var ue = le.child;
                    if (ue !== null) ue.return = le, Ne = ue;
                    else for (; Ne !== null; ) {
                      le = Ne;
                      var ie = le.sibling, _e = le.return;
                      if (sh(le), le === $) {
                        Ne = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = _e, Ne = ie;
                        break;
                      }
                      Ne = _e;
                    }
                  }
                }
                var Me = d.alternate;
                if (Me !== null) {
                  var Ue = Me.child;
                  if (Ue !== null) {
                    Me.child = null;
                    do {
                      var zn = Ue.sibling;
                      Ue.sibling = null, Ue = zn;
                    } while (Ue !== null);
                  }
                }
                Ne = d;
              }
            }
            if (d.subtreeFlags & 2064 && C !== null) C.return = d, Ne = C;
            else e: for (; Ne !== null; ) {
              if (d = Ne, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  xu(9, d, d.return);
              }
              var z = d.sibling;
              if (z !== null) {
                z.return = d.return, Ne = z;
                break e;
              }
              Ne = d.return;
            }
          }
          var N = n.current;
          for (Ne = N; Ne !== null; ) {
            C = Ne;
            var V = C.child;
            if (C.subtreeFlags & 2064 && V !== null) V.return = C, Ne = V;
            else e: for (C = N; Ne !== null; ) {
              if (x = Ne, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rf(9, x);
                }
              } catch (Pe) {
                On(x, x.return, Pe);
              }
              if (x === C) {
                Ne = null;
                break e;
              }
              var ve = x.sibling;
              if (ve !== null) {
                ve.return = x.return, Ne = ve;
                break e;
              }
              Ne = x.return;
            }
          }
          if (kt = c, na(), Xr && typeof Xr.onPostCommitFiberRoot == "function") try {
            Xr.onPostCommitFiberRoot(yo, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Pt = o, Wa.transition = r;
      }
    }
    return !1;
  }
  function yh(n, r, o) {
    r = Uo(o, r), r = nh(n, r, 1), n = Ao(n, r, 1), r = ar(), n !== null && (Fi(n, 1, r), Gn(n, r));
  }
  function On(n, r, o) {
    if (n.tag === 3) yh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        yh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ga === null || !Ga.has(u))) {
          n = Uo(o, n), n = rh(r, n, 1), r = Ao(r, n, 1), n = ar(), r !== null && (Fi(r, 1, n), Gn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Fy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & o, Dn === n && (Yn & o) === o && (Wn === 4 || Wn === 3 && (Yn & 130023424) === Yn && 500 > Ft() - lf ? wl(n, 0) : Gd |= o), Gn(n, r);
  }
  function gh(n, r) {
    r === 0 && (n.mode & 1 ? (r = go, go <<= 1, !(go & 130023424) && (go = 4194304)) : r = 1);
    var o = ar();
    n = qi(n, r), n !== null && (Fi(n, r, o), Gn(n, o));
  }
  function Zd(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), gh(n, o);
  }
  function Py(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(r), gh(n, o);
  }
  var Sh;
  Sh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || _n.current) ua = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return ua = !1, Zi(n, r, o);
      ua = !!(n.flags & 131072);
    }
    else ua = !1, dn && r.flags & 1048576 && _d(r, iu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ms(n, r), n = r.pendingProps;
        var c = Fa(r, ot.current);
        lu(r, o), c = re(null, r, u, n, c, o);
        var d = Vn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, hn(u) ? (d = !0, bc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dc(r), c.updater = gl, r.stateNode = c, c._reactInternals = r, Fd(r, u, n, o), r = Xc(null, r, u, !0, d, o)) : (r.tag = 0, dn && d && xc(r), Ln(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ms(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Hy(u), n = la(u, n), c) {
            case 0:
              r = pt(null, r, u, n, o);
              break e;
            case 1:
              r = Os(null, r, u, n, o);
              break e;
            case 11:
              r = gu(null, r, u, n, o);
              break e;
            case 14:
              r = jo(null, r, u, la(u.type, n), o);
              break e;
          }
          throw Error(y(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), pt(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Os(n, r, u, c, o);
      case 3:
        e: {
          if (Dy(r), n === null) throw Error(y(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, uu(n, r), Nc(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Uo(Error(y(423)), r), r = oh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Uo(Error(y(424)), r), r = oh(n, r, u, o, c);
            break e;
          } else for (ia = ci(r.stateNode.containerInfo.firstChild), xa = r, dn = !0, Va = null, o = Wv(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (bn(), u === c) {
              r = An(n, r, o);
              break e;
            }
            Ln(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return qv(r), n === null && wc(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, C = c.children, ms(u, c) ? C = null : d !== null && ms(u, d) && (r.flags |= 32), Sl(n, r), Ln(n, r, C, o), r.child;
      case 6:
        return n === null && wc(r), null;
      case 13:
        return lh(n, r, o);
      case 4:
        return Ld(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = ou(r, null, u, o) : Ln(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), gu(n, r, u, c, o);
      case 7:
        return Ln(n, r, r.pendingProps, o), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, C = c.value, Kt(Ki, u._currentValue), u._currentValue = C, d !== null) if (Ua(d.value, C)) {
            if (d.children === c.children && !_n.current) {
              r = An(n, r, o);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              C = d.child;
              for (var _ = x.firstContext; _ !== null; ) {
                if (_.context === u) {
                  if (d.tag === 1) {
                    _ = oa(-1, o & -o), _.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var le = $.pending;
                      le === null ? _.next = _ : (_.next = le.next, le.next = _), $.pending = _;
                    }
                  }
                  d.lanes |= o, _ = d.alternate, _ !== null && (_.lanes |= o), Md(
                    d.return,
                    o,
                    r
                  ), x.lanes |= o;
                  break;
                }
                _ = _.next;
              }
            } else if (d.tag === 10) C = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (C = d.return, C === null) throw Error(y(341));
              C.lanes |= o, x = C.alternate, x !== null && (x.lanes |= o), Md(C, o, r), C = d.sibling;
            } else C = d.child;
            if (C !== null) C.return = d;
            else for (C = d; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (d = C.sibling, d !== null) {
                d.return = C.return, C = d;
                break;
              }
              C = C.return;
            }
            d = C;
          }
          Ln(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, lu(r, o), c = Ba(c), u = u(c), r.flags |= 1, Ln(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = la(u, r.pendingProps), c = la(u.type, c), jo(n, r, u, c, o);
      case 15:
        return qc(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : la(u, c), Ms(n, r), r.tag = 1, hn(u) ? (n = !0, bc(r)) : n = !1, lu(r, o), Jv(r, u, c), Fd(r, u, c, o), Xc(null, r, u, !0, n, o);
      case 19:
        return Id(n, r, o);
      case 22:
        return sa(n, r, o);
    }
    throw Error(y(156, r.tag));
  };
  function Ch(n, r) {
    return nn(n, r);
  }
  function Eh(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, o, u) {
    return new Eh(n, r, o, u);
  }
  function Jd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Hy(n) {
    if (typeof n == "function") return Jd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === et) return 11;
      if (n === _t) return 14;
    }
    return 2;
  }
  function Ho(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ka(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function vf(n, r, o, u, c, d) {
    var C = 2;
    if (u = n, typeof n == "function") Jd(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case He:
        return Tl(o.children, c, d, r);
      case dt:
        C = 8, c |= 8;
        break;
      case Xt:
        return n = Ka(12, o, r, c | 2), n.elementType = Xt, n.lanes = d, n;
      case je:
        return n = Ka(13, o, r, c), n.elementType = je, n.lanes = d, n;
      case tt:
        return n = Ka(19, o, r, c), n.elementType = tt, n.lanes = d, n;
      case ge:
        return hf(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case vt:
            C = 10;
            break e;
          case ct:
            C = 9;
            break e;
          case et:
            C = 11;
            break e;
          case _t:
            C = 14;
            break e;
          case ye:
            C = 16, u = null;
            break e;
        }
        throw Error(y(130, n == null ? n : typeof n, ""));
    }
    return r = Ka(C, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Tl(n, r, o, u) {
    return n = Ka(7, n, u, r), n.lanes = o, n;
  }
  function hf(n, r, o, u) {
    return n = Ka(22, n, u, r), n.elementType = ge, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function mf(n, r, o) {
    return n = Ka(6, n, null, r), n.lanes = o, n;
  }
  function Fs(n, r, o) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ps(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ep(n, r, o, u, c, d, C, x, _) {
    return n = new Ps(n, r, o, x, _), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ka(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dc(d), n;
  }
  function bh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function tp(n) {
    if (!n) return xi;
    n = n._reactInternals;
    e: {
      if (Ve(n) !== n || n.tag !== 1) throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (hn(o)) return Ss(n, o, r);
    }
    return r;
  }
  function np(n, r, o, u, c, d, C, x, _) {
    return n = ep(o, u, !0, n, c, d, C, x, _), n.context = tp(null), o = n.current, u = ar(), c = eo(o), d = oa(u, c), d.callback = r ?? null, Ao(o, d, c), n.current.lanes = c, Fi(n, c, u), Gn(n, u), n;
  }
  function yf(n, r, o, u) {
    var c = r.current, d = ar(), C = eo(c);
    return o = tp(o), r.context === null ? r.context = o : r.pendingContext = o, r = oa(d, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ao(c, r, C), n !== null && (xn(n, c, C, d), Oc(n, c, C)), C;
  }
  function Hs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function xh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function rp(n, r) {
    xh(n, r), (n = n.alternate) && xh(n, r);
  }
  function Vy() {
    return null;
  }
  var ap = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gf(n) {
    this._internalRoot = n;
  }
  Vs.prototype.render = gf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(y(409));
    yf(n, r, null, null);
  }, Vs.prototype.unmount = gf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ki(function() {
        yf(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function Vs(n) {
    this._internalRoot = n;
  }
  Vs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Gl();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Qt.length && r !== 0 && r < Qt[o].priority; o++) ;
      Qt.splice(o, 0, n), o === 0 && sc(n);
    }
  };
  function Vo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Rh() {
  }
  function Iy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var $ = Hs(C);
          d.call($);
        };
      }
      var C = np(r, u, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = C, n[Gi] = C.current, ru(n.nodeType === 8 ? n.parentNode : n), ki(), C;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var $ = Hs(_);
        x.call($);
      };
    }
    var _ = ep(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = _, n[Gi] = _.current, ru(n.nodeType === 8 ? n.parentNode : n), ki(function() {
      yf(r, _, o, u);
    }), _;
  }
  function Cf(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var C = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var _ = Hs(C);
          x.call(_);
        };
      }
      yf(r, C, n, c);
    } else C = Iy(o, r, n, c, u);
    return Hs(C);
  }
  el = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ii(r.pendingLanes);
          o !== 0 && (Ci(r, o | 1), Gn(r, Ft()), !(kt & 6) && (Ou = Ft() + 500, na()));
        }
        break;
      case 13:
        ki(function() {
          var u = qi(n, 1);
          if (u !== null) {
            var c = ar();
            xn(u, n, 1, c);
          }
        }), rp(n, 1);
    }
  }, Wl = function(n) {
    if (n.tag === 13) {
      var r = qi(n, 134217728);
      if (r !== null) {
        var o = ar();
        xn(r, n, 134217728, o);
      }
      rp(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = eo(n), o = qi(n, r);
      if (o !== null) {
        var u = ar();
        xn(o, n, r, u);
      }
      rp(n, r);
    }
  }, Gl = function() {
    return Pt;
  }, Ql = function(n, r) {
    var o = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = o;
    }
  }, Dr = function(n, r, o) {
    switch (r) {
      case "input":
        if (Nn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = We(u);
              if (!c) throw Error(y(90));
              Wr(u), Nn(u, c);
            }
          }
        }
        break;
      case "textarea":
        ma(n, o);
        break;
      case "select":
        r = o.value, r != null && Sr(n, !!o.multiple, r, !1);
    }
  }, Jo = Xd, Hl = ki;
  var By = { usingClientEntryPoint: !1, Events: [gs, au, We, Ma, vo, Xd] }, Is = { findFiberByHostInstance: ja, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wh = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = St(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Vy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ef = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ef.isDisabled && Ef.supportsFiber) try {
      yo = Ef.inject(wh), Xr = Ef;
    } catch {
    }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = By, ti.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vo(r)) throw Error(y(200));
    return bh(n, r, null, o);
  }, ti.createRoot = function(n, r) {
    if (!Vo(n)) throw Error(y(299));
    var o = !1, u = "", c = ap;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ep(n, 1, !1, null, null, o, !1, u, c), n[Gi] = r.current, ru(n.nodeType === 8 ? n.parentNode : n), new gf(r);
  }, ti.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = St(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return ki(n);
  }, ti.hydrate = function(n, r, o) {
    if (!Sf(r)) throw Error(y(200));
    return Cf(null, n, r, !0, o);
  }, ti.hydrateRoot = function(n, r, o) {
    if (!Vo(n)) throw Error(y(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", C = ap;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = np(r, null, n, 1, o ?? null, c, !1, d, C), n[Gi] = r.current, ru(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new Vs(r);
  }, ti.render = function(n, r, o) {
    if (!Sf(r)) throw Error(y(200));
    return Cf(null, n, r, !1, o);
  }, ti.unmountComponentAtNode = function(n) {
    if (!Sf(n)) throw Error(y(40));
    return n._reactRootContainer ? (ki(function() {
      Cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = Xd, ti.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Sf(o)) throw Error(y(200));
    if (n == null || n._reactInternals === void 0) throw Error(y(38));
    return Cf(n, r, o, !1, u);
  }, ti.version = "18.3.1-next-f1338f8080-20240426", ti;
}
var ni = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xx;
function JD() {
  return Xx || (Xx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = fv(), S = aR(), y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = !1;
    function k(e) {
      R = e;
    }
    function D(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!R) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = y.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var j = 0, A = 1, te = 2, F = 3, W = 4, Q = 5, X = 6, de = 7, fe = 8, Oe = 9, be = 10, ze = 11, Ge = 12, Re = 13, it = 14, He = 15, dt = 16, Xt = 17, vt = 18, ct = 19, et = 21, je = 22, tt = 23, _t = 24, ye = 25, ge = !0, ae = !1, Ee = !1, he = !1, L = !1, J = !0, qe = !1, rt = !0, yt = !0, mt = !0, Ot = !0, Et = /* @__PURE__ */ new Set(), bt = {}, ln = {};
    function gr(e, t) {
      Wr(e, t), Wr(e + "Capture", t);
    }
    function Wr(e, t) {
      bt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), bt[e] = t;
      {
        var a = e.toLowerCase();
        ln[a] = e, e === "onDoubleClick" && (ln.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qn = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function jn(e) {
      try {
        return Nn(e), !1;
      } catch {
        return !0;
      }
    }
    function Nn(e) {
      return "" + e;
    }
    function Gr(e, t) {
      if (jn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), Nn(e);
    }
    function Qr(e) {
      if (jn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), Nn(e);
    }
    function Xn(e, t) {
      if (jn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), Nn(e);
    }
    function Sr(e, t) {
      if (jn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), Nn(e);
    }
    function Kr(e) {
      if (jn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), Nn(e);
    }
    function Cr(e) {
      if (jn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), Nn(e);
    }
    var ma = 0, or = 1, qr = 2, Sn = 3, kr = 4, hi = 5, ya = 6, me = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = me + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", gt = new RegExp("^[" + me + "][" + $e + "]*$"), Bt = {}, Yt = {};
    function Mn(e) {
      return qn.call(Yt, e) ? !0 : qn.call(Bt, e) ? !1 : gt.test(e) ? (Yt[e] = !0, !0) : (Bt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Cn(e, t, a) {
      return t !== null ? t.type === ma : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Er(e, t, a, i) {
      if (a !== null && a.type === ma)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Zt(e, t, a, i) {
      if (t === null || typeof t > "u" || Er(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Sn:
            return !t;
          case kr:
            return t === !1;
          case hi:
            return isNaN(t);
          case ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Dr(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Wt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === qr || t === Sn || t === kr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, ri = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ri.forEach(function(e) {
      Gt[e] = new Wt(
        e,
        ma,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new Wt(
        t,
        or,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        Sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        Sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        hi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ma = /[\-\:]([a-z])/g, vo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ma, vo);
      Gt[t] = new Wt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ma, vo);
      Gt[t] = new Wt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ma, vo);
      Gt[t] = new Wt(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Jo = "xlinkHref";
    Gt[Jo] = new Wt(
      "xlinkHref",
      or,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Wt(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Hl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ji = !1;
    function ho(e) {
      !ji && Hl.test(e) && (ji = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ga(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Gr(a, t), i.sanitizeURL && ho("" + a);
        var s = i.attributeName, f = null;
        if (i.type === kr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Sn)
            return a;
          f = e.getAttribute(s);
        }
        return Zt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function mi(e, t, a, i) {
      {
        if (!Mn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Gr(a, t), l === "" + a ? a : l;
      }
    }
    function Sa(e, t, a, i) {
      var l = Dr(t);
      if (!Cn(t, l, i)) {
        if (Zt(t, a, l, i) && (a = null), i || l === null) {
          if (Mn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Gr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var h = l.type;
            e[p] = h === Sn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var E = l.attributeName, b = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var M = l.type, O;
          M === Sn || M === kr && a === !0 ? O = "" : (Gr(a, E), O = "" + a, l.sanitizeURL && ho(O.toString())), b ? e.setAttributeNS(b, E, O) : e.setAttribute(E, O);
        }
      }
    }
    var ai = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Ca = Symbol.for("react.fragment"), yi = Symbol.for("react.strict_mode"), gi = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), oe = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), Ve = Symbol.for("react.suspense"), Tt = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), St = Symbol.for("react.scope"), Fn = Symbol.for("react.debug_trace_mode"), nn = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), br = Symbol.for("react.cache"), Si = Symbol.for("react.tracing_marker"), Ft = Symbol.iterator, Zn = "@@iterator";
    function Nr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ft && e[Ft] || e[Zn];
      return typeof t == "function" ? t : null;
    }
    var Ct = Object.assign, La = 0, mo, Vl, yo, Xr, ts, Mr, ns;
    function rs() {
    }
    rs.__reactDisabledLog = !0;
    function lc() {
      {
        if (La === 0) {
          mo = console.log, Vl = console.info, yo = console.warn, Xr = console.error, ts = console.group, Mr = console.groupCollapsed, ns = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: rs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        La++;
      }
    }
    function Il() {
      {
        if (La--, La === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ct({}, e, {
              value: mo
            }),
            info: Ct({}, e, {
              value: Vl
            }),
            warn: Ct({}, e, {
              value: yo
            }),
            error: Ct({}, e, {
              value: Xr
            }),
            group: Ct({}, e, {
              value: ts
            }),
            groupCollapsed: Ct({}, e, {
              value: Mr
            }),
            groupEnd: Ct({}, e, {
              value: ns
            })
          });
        }
        La < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var go = y.ReactCurrentDispatcher, ii;
    function Lr(e, t, a) {
      {
        if (ii === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ii = i && i[1] || "";
          }
        return `
` + ii + e;
      }
    }
    var So = !1, Co;
    {
      var Eo = typeof WeakMap == "function" ? WeakMap : Map;
      Co = new Eo();
    }
    function Bl(e, t) {
      if (!e || So)
        return "";
      {
        var a = Co.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      So = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = go.current, go.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var p = Y.stack.split(`
`), h = i.stack.split(`
`), E = p.length - 1, b = h.length - 1; E >= 1 && b >= 0 && p[E] !== h[b]; )
            b--;
          for (; E >= 1 && b >= 0; E--, b--)
            if (p[E] !== h[b]) {
              if (E !== 1 || b !== 1)
                do
                  if (E--, b--, b < 0 || p[E] !== h[b]) {
                    var M = `
` + p[E].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && Co.set(e, M), M;
                  }
                while (E >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        So = !1, go.current = s, Il(), Error.prepareStackTrace = l;
      }
      var O = e ? e.displayName || e.name : "", I = O ? Lr(O) : "";
      return typeof e == "function" && Co.set(e, I), I;
    }
    function $l(e, t, a) {
      return Bl(e, !0);
    }
    function Fi(e, t, a) {
      return Bl(e, !1);
    }
    function td(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ci(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bl(e, td(e));
      if (typeof e == "string")
        return Lr(e);
      switch (e) {
        case Ve:
          return Lr("Suspense");
        case Tt:
          return Lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return Fi(e.render);
          case Nt:
            return Ci(e.type, t, a);
          case Xe: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Ci(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Pt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return Lr(e.type);
        case dt:
          return Lr("Lazy");
        case Re:
          return Lr("Suspense");
        case ct:
          return Lr("SuspenseList");
        case j:
        case te:
        case He:
          return Fi(e.type);
        case ze:
          return Fi(e.type.render);
        case A:
          return $l(e.type);
        default:
          return "";
      }
    }
    function Yl(e) {
      try {
        var t = "", a = e;
        do
          t += Pt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function el(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Wl(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ca:
          return "Fragment";
        case Or:
          return "Portal";
        case gi:
          return "Profiler";
        case yi:
          return "StrictMode";
        case Ve:
          return "Suspense";
        case Tt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            var t = e;
            return Wl(t) + ".Consumer";
          case T:
            var a = e;
            return Wl(a._context) + ".Provider";
          case ce:
            return el(e, e.render, "ForwardRef");
          case Nt:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case Xe: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gl(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ql(e) {
      return e.displayName || "Context";
    }
    function ut(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case Oe:
          var i = a;
          return Ql(i) + ".Consumer";
        case be:
          var l = a;
          return Ql(l._context) + ".Provider";
        case vt:
          return "DehydratedFragment";
        case ze:
          return Gl(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case Q:
          return a;
        case W:
          return "Portal";
        case F:
          return "Root";
        case X:
          return "Text";
        case dt:
          return Mt(a);
        case fe:
          return a === yi ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case Ge:
          return "Profiler";
        case et:
          return "Scope";
        case Re:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case ye:
          return "TracingMarker";
        case A:
        case j:
        case Xt:
        case te:
        case it:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var tl = y.ReactDebugCurrentFrame, En = null, Zr = !1;
    function Ar() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return ut(e);
      }
      return null;
    }
    function bo() {
      return En === null ? "" : Yl(En);
    }
    function Tn() {
      tl.getCurrentStack = null, En = null, Zr = !1;
    }
    function Qt(e) {
      tl.getCurrentStack = e === null ? null : bo, En = e, Zr = !1;
    }
    function uc() {
      return En;
    }
    function Jr(e) {
      Zr = e;
    }
    function Jn(e) {
      return "" + e;
    }
    function Ei(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cr(e), e;
        default:
          return "";
      }
    }
    var sc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pi(e, t) {
      sc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function xo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function cc(e) {
      return e._valueTracker;
    }
    function Aa(e) {
      e._valueTracker = null;
    }
    function Ro(e) {
      var t = "";
      return e && (xo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Hi(e) {
      var t = xo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Cr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Cr(p), i = "" + p;
          },
          stopTracking: function() {
            Aa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function za(e) {
      cc(e) || (e._valueTracker = Hi(e));
    }
    function Kl(e) {
      if (!e)
        return !1;
      var t = cc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ro(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var To = !1, nl = !1, ql = !1, as = !1;
    function oi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function m(e, t) {
      var a = e, i = t.checked, l = Ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function w(e, t) {
      Pi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !nl && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), nl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !To && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), To = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ei(t.value != null ? t.value : i),
        controlled: oi(t)
      };
    }
    function B(e, t) {
      var a = e, i = t.checked;
      i != null && Sa(a, "checked", i, !1);
    }
    function G(e, t) {
      var a = e;
      {
        var i = oi(t);
        !a._wrapperState.controlled && i && !as && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0), a._wrapperState.controlled && !i && !ql && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ql = !0);
      }
      B(e, t);
      var l = Ei(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Jn(l)) : a.value !== Jn(l) && (a.value = Jn(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ke(a, t.type, l) : t.hasOwnProperty("defaultValue") && Ke(a, t.type, Ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function pe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Jn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ze(e, t) {
      var a = e;
      G(a, t), xe(a, t);
    }
    function xe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ih(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Kl(f), G(f, p);
          }
        }
      }
    }
    function Ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Jn(e._wrapperState.initialValue) : e.defaultValue !== Jn(a) && (e.defaultValue = Jn(a)));
    }
    var xt = !1, jt = !1, rn = !1;
    function Jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || jt || (jt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (rn || (rn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xt = !0);
    }
    function an(e, t) {
      t.value != null && e.setAttribute("value", Jn(Ei(t.value)));
    }
    var un = Array.isArray;
    function Lt(e) {
      return un(e);
    }
    var Vi;
    Vi = !1;
    function Xl() {
      var e = Ar();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function nd(e) {
      {
        Pi("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = Lt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Xl()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Xl());
          }
        }
      }
    }
    function li(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < l.length; h++) {
          var E = f.hasOwnProperty("$" + l[h].value);
          l[h].selected !== E && (l[h].selected = E), E && i && (l[h].defaultSelected = !0);
        }
      } else {
        for (var b = Jn(Ei(a)), M = null, O = 0; O < l.length; O++) {
          if (l[O].value === b) {
            l[O].selected = !0, i && (l[O].defaultSelected = !0);
            return;
          }
          M === null && !l[O].disabled && (M = l[O]);
        }
        M !== null && (M.selected = !0);
      }
    }
    function os(e, t) {
      return Ct({}, t, {
        value: void 0
      });
    }
    function ls(e, t) {
      var a = e;
      nd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
    }
    function rd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? li(a, !!t.multiple, i, !1) : t.defaultValue != null && li(a, !!t.multiple, t.defaultValue, !0);
    }
    function dy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? li(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? li(a, !!t.multiple, t.defaultValue, !0) : li(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function py(e, t) {
      var a = e, i = t.value;
      i != null && li(a, !!t.multiple, i, !1);
    }
    var ad = !1;
    function id(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Jn(a._wrapperState.initialValue)
      });
      return i;
    }
    function pv(e, t) {
      var a = e;
      Pi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ad && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), ad = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Lt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ei(i)
      };
    }
    function vv(e, t) {
      var a = e, i = Ei(t.value), l = Ei(t.defaultValue);
      if (i != null) {
        var s = Jn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Jn(l));
    }
    function hv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function od(e, t) {
      vv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", vy = "http://www.w3.org/1998/Math/MathML", ld = "http://www.w3.org/2000/svg";
    function fc(e) {
      switch (e) {
        case "svg":
          return ld;
        case "math":
          return vy;
        default:
          return Ii;
      }
    }
    function ud(e, t) {
      return e == null || e === Ii ? fc(t) : e === ld && t === "foreignObject" ? Ii : e;
    }
    var hy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, dc, mv = hy(function(e, t) {
      if (e.namespaceURI === ld && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, Bi = 3, Pn = 8, ui = 9, rl = 11, pc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, yv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function gv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Sv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zl).forEach(function(e) {
      Sv.forEach(function(t) {
        Zl[gv(t, e)] = Zl[e];
      });
    });
    function vc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zl.hasOwnProperty(e) && Zl[e]) ? t + "px" : (Sr(t, e), ("" + t).trim());
    }
    var Jl = /([A-Z])/g, my = /^ms-/;
    function yy(e) {
      return e.replace(Jl, "-$1").toLowerCase().replace(my, "-ms-");
    }
    var Cv = function() {
    };
    {
      var Ev = /^(?:webkit|moz|o)[A-Z]/, bv = /^-ms-/, us = /-(.)/g, eu = /;\s*$/, tu = {}, nu = {}, xv = !1, sd = !1, cd = function(e) {
        return e.replace(us, function(t, a) {
          return a.toUpperCase();
        });
      }, fd = function(e) {
        tu.hasOwnProperty(e) && tu[e] || (tu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cd(e.replace(bv, "ms-"))
        ));
      }, Rv = function(e) {
        tu.hasOwnProperty(e) && tu[e] || (tu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, wv = function(e, t) {
        nu.hasOwnProperty(t) && nu[t] || (nu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eu, "")));
      }, Tv = function(e, t) {
        xv || (xv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, gy = function(e, t) {
        sd || (sd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Cv = function(e, t) {
        e.indexOf("-") > -1 ? fd(e) : Ev.test(e) ? Rv(e) : eu.test(t) && wv(e, t), typeof t == "number" && (isNaN(t) ? Tv(e, t) : isFinite(t) || gy(e, t));
      };
    }
    var Sy = Cv;
    function Cy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : yy(i)) + ":", t += vc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function _v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || Sy(i, t[i]);
          var s = vc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ua(e) {
      var t = {};
      for (var a in e)
        for (var i = yv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ss(e, t) {
      {
        if (!t)
          return;
        var a = Ua(e), i = Ua(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (l[h])
              continue;
            l[h] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var kv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Dv = Ct({
      menuitem: !0
    }, kv), Ov = "__html";
    function hc(e, t) {
      if (t) {
        if (Dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function $i(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var mc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Nv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, si = {}, dd = new RegExp("^(aria)-[" + $e + "]*$"), cs = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    function pd(e, t) {
      {
        if (qn.call(si, t) && si[t])
          return !0;
        if (cs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Nv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), si[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), si[t] = !0, !0;
        }
        if (dd.test(t)) {
          var l = t.toLowerCase(), s = Nv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return si[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), si[t] = !0, !0;
        }
      }
      return !0;
    }
    function Mv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = pd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function yc(e, t) {
      $i(e, t) || Mv(e, t);
    }
    var al = !1;
    function vd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !al && (al = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hd = function() {
    };
    {
      var er = {}, md = /^on./, Lv = /^on[^A-Z]/, Av = new RegExp("^(aria)-[" + $e + "]*$"), zv = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      hd = function(e, t, a, i) {
        if (qn.call(er, t) && er[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), er[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), er[t] = !0, !0;
          if (md.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), er[t] = !0, !0;
        } else if (md.test(t))
          return Lv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), er[t] = !0, !0;
        if (Av.test(t) || zv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), er[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), er[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), er[t] = !0, !0;
        var h = Dr(t), E = h !== null && h.type === ma;
        if (mc.hasOwnProperty(l)) {
          var b = mc[l];
          if (b !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, b), er[t] = !0, !0;
        } else if (!E && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), er[t] = !0, !0;
        return typeof a == "boolean" && Er(t, a, h, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), er[t] = !0, !0) : E ? !0 : Er(t, a, h, !1) ? (er[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === Sn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), er[t] = !0), !0);
      };
    }
    var Uv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = hd(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function jv(e, t, a) {
      $i(e, t) || Uv(e, t, a);
    }
    var Yi = 1, fs = 2, il = 4, by = Yi | fs | il, ds = null;
    function ps(e) {
      ds !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ds = e;
    }
    function xy() {
      ds === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ds = null;
    }
    function Fv(e) {
      return e === ds;
    }
    function gc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var on = null, _o = null, Wi = null;
    function ru(e) {
      var t = Uu(e);
      if (t) {
        if (typeof on != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ih(a);
          on(t.stateNode, t.type, i);
        }
      }
    }
    function Pv(e) {
      on = e;
    }
    function Sc(e) {
      _o ? Wi ? Wi.push(e) : Wi = [e] : _o = e;
    }
    function vs() {
      return _o !== null || Wi !== null;
    }
    function hs() {
      if (_o) {
        var e = _o, t = Wi;
        if (_o = null, Wi = null, ru(e), t)
          for (var a = 0; a < t.length; a++)
            ru(t[a]);
      }
    }
    var ol = function(e, t) {
      return e(t);
    }, yd = function() {
    }, gd = !1;
    function Ry() {
      var e = vs();
      e && (yd(), hs());
    }
    function Sd(e, t, a) {
      if (gd)
        return e(t, a);
      gd = !0;
      try {
        return ol(e, t, a);
      } finally {
        gd = !1, Ry();
      }
    }
    function Cc(e, t, a) {
      ol = e, yd = a;
    }
    function Ec(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Cd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ec(t));
        default:
          return !1;
      }
    }
    function ll(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ih(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Cd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ms = !1;
    if (gn)
      try {
        var ul = {};
        Object.defineProperty(ul, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", ul, ul), window.removeEventListener("test", ul, ul);
      } catch {
        ms = !1;
      }
    function Hv(e, t, a, i, l, s, f, p, h) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (b) {
        this.onError(b);
      }
    }
    var Ed = Hv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var bd = document.createElement("react");
      Ed = function(t, a, i, l, s, f, p, h, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), M = !1, O = !0, I = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function K() {
          bd.removeEventListener(q, Qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function Qe() {
          M = !0, K(), a.apply(i, we), O = !1;
        }
        var Be, Ut = !1, Dt = !1;
        function P(H) {
          if (Be = H.error, Ut = !0, Be === null && H.colno === 0 && H.lineno === 0 && (Dt = !0), H.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", P), bd.addEventListener(q, Qe, !1), b.initEvent(q, !1, !1), bd.dispatchEvent(b), Y && Object.defineProperty(window, "event", Y), M && O && (Ut ? Dt && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", P), !M)
          return K(), Hv.apply(this, arguments);
      };
    }
    var wy = Ed, ko = !1, ci = null, ys = !1, Do = null, bi = {
      onError: function(e) {
        ko = !0, ci = e;
      }
    };
    function sl(e, t, a, i, l, s, f, p, h) {
      ko = !1, ci = null, wy.apply(bi, arguments);
    }
    function Gi(e, t, a, i, l, s, f, p, h) {
      if (sl.apply(this, arguments), ko) {
        var E = Rd();
        ys || (ys = !0, Do = E);
      }
    }
    function xd() {
      if (ys) {
        var e = Do;
        throw ys = !1, Do = null, e;
      }
    }
    function Ty() {
      return ko;
    }
    function Rd() {
      if (ko) {
        var e = ci;
        return ko = !1, ci = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ja(e) {
      return e._reactInternals;
    }
    function gs(e) {
      return e._reactInternals !== void 0;
    }
    function au(e, t) {
      e._reactInternals = t;
    }
    var We = (
      /*                      */
      0
    ), Oo = (
      /*                */
      1
    ), fn = (
      /*                    */
      2
    ), ht = (
      /*                       */
      4
    ), $t = (
      /*                */
      16
    ), Kt = (
      /*                 */
      32
    ), xi = (
      /*                     */
      64
    ), ot = (
      /*                   */
      128
    ), _n = (
      /*            */
      256
    ), ta = (
      /*                          */
      512
    ), Fa = (
      /*                     */
      1024
    ), hn = (
      /*                      */
      2048
    ), Pa = (
      /*                    */
      4096
    ), No = (
      /*                   */
      8192
    ), Ss = (
      /*             */
      16384
    ), bc = hn | ht | xi | ta | Fa | Ss, Vv = (
      /*               */
      32767
    ), Ea = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), Cs = (
      /* */
      131072
    ), wd = (
      /*                       */
      1048576
    ), Td = (
      /*                    */
      2097152
    ), na = (
      /*                 */
      4194304
    ), Mo = (
      /*                */
      8388608
    ), ra = (
      /*               */
      16777216
    ), cl = (
      /*              */
      33554432
    ), iu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ht | Fa | 0
    ), aa = fn | ht | $t | Kt | ta | Pa | No, xr = ht | xi | ta | No, Ha = hn | $t, lr = na | Mo | Td, Qi = y.ReactCurrentOwner;
    function ba(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (fn | Pa)) !== We && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function _d(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function xc(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function kd(e) {
      return ba(e) === e;
    }
    function xa(e) {
      {
        var t = Qi.current;
        if (t !== null && t.tag === A) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ut(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ja(e);
      return l ? ba(l) === l : !1;
    }
    function ia(e) {
      if (ba(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function dn(e) {
      var t = e.alternate;
      if (!t) {
        var a = ba(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return ia(s), e;
            if (h === l)
              return ia(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var E = !1, b = s.child; b; ) {
            if (b === i) {
              E = !0, i = s, l = f;
              break;
            }
            if (b === l) {
              E = !0, l = s, i = f;
              break;
            }
            b = b.sibling;
          }
          if (!E) {
            for (b = f.child; b; ) {
              if (b === i) {
                E = !0, i = f, l = s;
                break;
              }
              if (b === l) {
                E = !0, l = f, i = s;
                break;
              }
              b = b.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Va(e) {
      var t = dn(e);
      return t !== null ? Dd(t) : null;
    }
    function Dd(e) {
      if (e.tag === Q || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Iv(e) {
      var t = dn(e);
      return t !== null ? Rc(t) : null;
    }
    function Rc(e) {
      if (e.tag === Q || e.tag === X)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== W) {
          var a = Rc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var wc = S.unstable_scheduleCallback, Bv = S.unstable_cancelCallback, Tc = S.unstable_shouldYield, $v = S.unstable_requestPaint, bn = S.unstable_now, Od = S.unstable_getCurrentPriorityLevel, _c = S.unstable_ImmediatePriority, fl = S.unstable_UserBlockingPriority, Ri = S.unstable_NormalPriority, Yv = S.unstable_LowPriority, kc = S.unstable_IdlePriority, ou = S.unstable_yieldValue, Wv = S.unstable_setDisableYieldValue, Ki = null, $n = null, Se = null, Ia = !1, Ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Nd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        yt && (e = Ct({}, e, {
          getLaneLabelMap: qi,
          injectProfilingHooks: Gv
        })), Ki = t.inject(e), $n = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Md(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(Ki, e, t);
        } catch (a) {
          Ia || (Ia = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function lu(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ot) === ot;
          if (mt) {
            var i;
            switch (t) {
              case An:
                i = _c;
                break;
              case Zi:
                i = fl;
                break;
              case wi:
                i = Ri;
                break;
              case Su:
                i = kc;
                break;
              default:
                i = Ri;
                break;
            }
            $n.onCommitFiberRoot(Ki, e, i, a);
          }
        } catch (l) {
          Ia || (Ia = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function Ba(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(Ki, e);
        } catch (t) {
          Ia || (Ia = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function dl(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(Ki, e);
        } catch (t) {
          Ia || (Ia = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Hn(e) {
      if (typeof ou == "function" && (Wv(e), k(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(Ki, e);
        } catch (t) {
          Ia || (Ia = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Gv(e) {
      Se = e;
    }
    function qi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ws; a++) {
          var i = ky(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Lo(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function Dc() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function uu(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function oa() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function Ao(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Oc() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function Qv(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nc() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function Kv(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function Es() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function fi(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function su() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function bs(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function pl(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function Ld(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function cu() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function qv(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function Ad() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function mn(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function Mc() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function Lc() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function zd(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Ac(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function xs(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), Ie = (
      /*                 */
      1
    ), lt = (
      /*                    */
      2
    ), Rt = (
      /*               */
      8
    ), wa = (
      /*              */
      16
    ), fu = Math.clz32 ? Math.clz32 : Rr, Rs = Math.log, _y = Math.LN2;
    function Rr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Rs(t) / _y | 0) | 0;
    }
    var ws = 31, re = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), ur = (
      /*    */
      2
    ), Ta = (
      /*             */
      4
    ), Xi = (
      /*            */
      8
    ), $a = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), vl = (
      /*                       */
      4194240
    ), pu = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), Pc = (
      /*                        */
      2048
    ), hl = (
      /*                        */
      4096
    ), Hc = (
      /*                        */
      8192
    ), vu = (
      /*                        */
      16384
    ), hu = (
      /*                       */
      32768
    ), Vc = (
      /*                       */
      65536
    ), Ts = (
      /*                       */
      131072
    ), Ic = (
      /*                       */
      262144
    ), Bc = (
      /*                       */
      524288
    ), $c = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), mu = (
      /*                            */
      130023424
    ), ml = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Gc = (
      /*                             */
      16777216
    ), Ud = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), Xv = ml, _s = (
      /*          */
      134217728
    ), jd = (
      /*                          */
      268435455
    ), yu = (
      /*               */
      268435456
    ), zo = (
      /*                        */
      536870912
    ), wr = (
      /*                   */
      1073741824
    );
    function ky(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & ur)
          return "InputContinuousHydration";
        if (e & Ta)
          return "InputContinuous";
        if (e & Xi)
          return "DefaultHydration";
        if (e & $a)
          return "Default";
        if (e & du)
          return "TransitionHydration";
        if (e & vl)
          return "Transition";
        if (e & mu)
          return "Retry";
        if (e & _s)
          return "SelectiveHydration";
        if (e & yu)
          return "IdleHydration";
        if (e & zo)
          return "Idle";
        if (e & wr)
          return "Offscreen";
      }
    }
    var sn = -1, Kc = pu, la = ml;
    function yl(e) {
      switch (Ln(e)) {
        case Ye:
          return Ye;
        case ur:
          return ur;
        case Ta:
          return Ta;
        case Xi:
          return Xi;
        case $a:
          return $a;
        case du:
          return du;
        case pu:
        case zc:
        case Uc:
        case jc:
        case Fc:
        case Pc:
        case hl:
        case Hc:
        case vu:
        case hu:
        case Vc:
        case Ts:
        case Ic:
        case Bc:
        case $c:
        case Yc:
          return e & vl;
        case ml:
        case Wc:
        case Gc:
        case Ud:
        case Qc:
          return e & mu;
        case _s:
          return _s;
        case yu:
          return yu;
        case zo:
          return zo;
        case wr:
          return wr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function gl(e, t) {
      var a = e.pendingLanes;
      if (a === re)
        return re;
      var i = re, l = e.suspendedLanes, s = e.pingedLanes, f = a & jd;
      if (f !== re) {
        var p = f & ~l;
        if (p !== re)
          i = yl(p);
        else {
          var h = f & s;
          h !== re && (i = yl(h));
        }
      } else {
        var E = a & ~l;
        E !== re ? i = yl(E) : s !== re && (i = yl(s));
      }
      if (i === re)
        return re;
      if (t !== re && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === re) {
        var b = Ln(i), M = Ln(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === $a && (M & vl) !== re
        )
          return t;
      }
      (i & Ta) !== re && (i |= a & $a);
      var O = e.entangledLanes;
      if (O !== re)
        for (var I = e.entanglements, Y = i & O; Y > 0; ) {
          var K = jo(Y), we = 1 << K;
          i |= I[K], Y &= ~we;
        }
      return i;
    }
    function Zv(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var l = jo(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Jv(e, t) {
      switch (e) {
        case Ye:
        case ur:
        case Ta:
          return t + 250;
        case Xi:
        case $a:
        case du:
        case pu:
        case zc:
        case Uc:
        case jc:
        case Fc:
        case Pc:
        case hl:
        case Hc:
        case vu:
        case hu:
        case Vc:
        case Ts:
        case Ic:
        case Bc:
        case $c:
        case Yc:
          return t + 5e3;
        case ml:
        case Wc:
        case Gc:
        case Ud:
        case Qc:
          return sn;
        case _s:
        case yu:
        case zo:
        case wr:
          return sn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function eh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jo(f), h = 1 << p, E = s[p];
        E === sn ? ((h & i) === re || (h & l) !== re) && (s[p] = Jv(h, t)) : E <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Fd(e) {
      return yl(e.pendingLanes);
    }
    function Uo(e) {
      var t = e.pendingLanes & ~wr;
      return t !== re ? t : t & wr ? wr : re;
    }
    function Pd(e) {
      return (e & Ye) !== re;
    }
    function ks(e) {
      return (e & jd) !== re;
    }
    function th(e) {
      return (e & mu) === e;
    }
    function nh(e) {
      var t = Ye | Ta | $a;
      return (e & t) === re;
    }
    function rh(e) {
      return (e & vl) === e;
    }
    function Ds(e, t) {
      var a = ur | Ta | Xi | $a;
      return (t & a) !== re;
    }
    function ah(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function Hd(e) {
      return (e & vl) !== re;
    }
    function ih() {
      var e = Kc;
      return Kc <<= 1, (Kc & vl) === re && (Kc = pu), e;
    }
    function ua() {
      var e = la;
      return la <<= 1, (la & mu) === re && (la = ml), e;
    }
    function Ln(e) {
      return e & -e;
    }
    function gu(e) {
      return Ln(e);
    }
    function jo(e) {
      return 31 - fu(e);
    }
    function qc(e) {
      return jo(e);
    }
    function sa(e, t) {
      return (e & t) !== re;
    }
    function Sl(e, t) {
      return (e & t) === t;
    }
    function pt(e, t) {
      return e | t;
    }
    function Os(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function Dy(e) {
      return e;
    }
    function oh(e, t) {
      return e !== Vn && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < ws; a++)
        t.push(e);
      return t;
    }
    function Cl(e, t, a) {
      e.pendingLanes |= t, t !== zo && (e.suspendedLanes = re, e.pingedLanes = re);
      var i = e.eventTimes, l = qc(t);
      i[l] = a;
    }
    function lh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = jo(i), s = 1 << l;
        a[l] = sn, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Jc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jo(f), h = 1 << p;
        i[p] = re, l[p] = sn, s[p] = sn, f &= ~h;
      }
    }
    function Vd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = jo(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function uh(e, t) {
      var a = Ln(t), i;
      switch (a) {
        case Ta:
          i = ur;
          break;
        case $a:
          i = Xi;
          break;
        case pu:
        case zc:
        case Uc:
        case jc:
        case Fc:
        case Pc:
        case hl:
        case Hc:
        case vu:
        case hu:
        case Vc:
        case Ts:
        case Ic:
        case Bc:
        case $c:
        case Yc:
        case ml:
        case Wc:
        case Gc:
        case Ud:
        case Qc:
          i = du;
          break;
        case zo:
          i = yu;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
    }
    function ef(e, t, a) {
      if (Ra)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = qc(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Id(e, t) {
      if (Ra)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = qc(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ms(e, t) {
      return null;
    }
    var An = Ye, Zi = Ta, wi = $a, Su = zo, Cu = Vn;
    function Ya() {
      return Cu;
    }
    function kn(e) {
      Cu = e;
    }
    function Tr(e, t) {
      var a = Cu;
      try {
        return Cu = e, t();
      } finally {
        Cu = a;
      }
    }
    function Oy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ny(e, t) {
      return e > t ? e : t;
    }
    function Eu(e, t) {
      return e !== 0 && e < t;
    }
    function sr(e) {
      var t = Ln(e);
      return Eu(An, t) ? Eu(Zi, t) ? ks(t) ? wi : Su : Zi : An;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ne;
    function bu(e) {
      Ne = e;
    }
    function Bd(e) {
      Ne(e);
    }
    var nf;
    function My(e) {
      nf = e;
    }
    var xu;
    function rf(e) {
      xu = e;
    }
    var af;
    function sh(e) {
      af = e;
    }
    var $d;
    function ch(e) {
      $d = e;
    }
    var Ls = !1, Ru = [], yn = null, nr = null, zr = null, wu = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), rr = [], fh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ti(e) {
      return fh.indexOf(e) > -1;
    }
    function Ly(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Yd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          yn = null;
          break;
        case "dragenter":
        case "dragleave":
          nr = null;
          break;
        case "mouseover":
        case "mouseout":
          zr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Tu.delete(i);
          break;
        }
      }
    }
    function _u(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ly(t, a, i, l, s);
        if (t !== null) {
          var p = Uu(t);
          p !== null && nf(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return l !== null && h.indexOf(l) === -1 && h.push(l), e;
    }
    function dh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return yn = _u(yn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return nr = _u(nr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return zr = _u(zr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = l, E = h.pointerId;
          return wu.set(E, _u(wu.get(E) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var b = l, M = b.pointerId;
          return Tu.set(M, _u(Tu.get(M) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = ba(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var l = _d(a);
            if (l !== null) {
              e.blockedOn = l, $d(e.priority, function() {
                xu(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ay(e) {
      for (var t = af(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rr.length && Eu(t, rr[i].priority); i++)
        ;
      rr.splice(i, 0, a), i === 0 && Wd(a);
    }
    function El(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = _r(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          ps(s), l.target.dispatchEvent(s), xy();
        } else {
          var f = Uu(i);
          return f !== null && nf(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function of(e, t, a) {
      El(e) && a.delete(t);
    }
    function Wa() {
      Ls = !1, yn !== null && El(yn) && (yn = null), nr !== null && El(nr) && (nr = null), zr !== null && El(zr) && (zr = null), wu.forEach(of), Tu.forEach(of);
    }
    function kt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ls || (Ls = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, Wa)));
    }
    function Dn(e) {
      if (Ru.length > 0) {
        kt(Ru[0], e);
        for (var t = 1; t < Ru.length; t++) {
          var a = Ru[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      yn !== null && kt(yn, e), nr !== null && kt(nr, e), zr !== null && kt(zr, e);
      var i = function(p) {
        return kt(p, e);
      };
      wu.forEach(i), Tu.forEach(i);
      for (var l = 0; l < rr.length; l++) {
        var s = rr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; rr.length > 0; ) {
        var f = rr[0];
        if (f.blockedOn !== null)
          break;
        Wd(f), f.blockedOn === null && rr.shift();
      }
    }
    var pn = y.ReactCurrentBatchConfig, Yn = !0;
    function ca(e) {
      Yn = !!e;
    }
    function ku() {
      return Yn;
    }
    function Wn(e, t, a) {
      var i = lf(t), l;
      switch (i) {
        case An:
          l = As;
          break;
        case Zi:
          l = bl;
          break;
        case wi:
        default:
          l = Du;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function As(e, t, a, i) {
      var l = Ya(), s = pn.transition;
      pn.transition = null;
      try {
        kn(An), Du(e, t, a, i);
      } finally {
        kn(l), pn.transition = s;
      }
    }
    function bl(e, t, a, i) {
      var l = Ya(), s = pn.transition;
      pn.transition = null;
      try {
        kn(Zi), Du(e, t, a, i);
      } finally {
        kn(l), pn.transition = s;
      }
    }
    function Du(e, t, a, i) {
      Yn && Gd(e, t, a, i);
    }
    function Gd(e, t, a, i) {
      var l = _r(e, t, a, i);
      if (l === null) {
        Xy(e, t, i, Fo, a), Yd(e, i);
        return;
      }
      if (dh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & il && Ti(e)) {
        for (; l !== null; ) {
          var s = Uu(l);
          s !== null && Bd(s);
          var f = _r(e, t, a, i);
          if (f === null && Xy(e, t, i, Fo, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      Xy(e, t, i, null, a);
    }
    var Fo = null;
    function _r(e, t, a, i) {
      Fo = null;
      var l = gc(i), s = Ys(l);
      if (s !== null) {
        var f = ba(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var h = _d(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === F) {
            var E = f.stateNode;
            if (tf(E))
              return xc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Fo = s, null;
    }
    function lf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return An;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Zi;
        case "message": {
          var t = Od();
          switch (t) {
            case _c:
              return An;
            case fl:
              return Zi;
            case Ri:
            case Yv:
              return wi;
            case kc:
              return Su;
            default:
              return wi;
          }
        }
        default:
          return wi;
      }
    }
    function Ou(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ji(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function uf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ga = null, Nu = null, Qa = null;
    function sf(e) {
      return Ga = e, Nu = Us(), !0;
    }
    function zs() {
      Ga = null, Nu = null, Qa = null;
    }
    function cf() {
      if (Qa)
        return Qa;
      var e, t = Nu, a = t.length, i, l = Us(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Qa = l.slice(e, p), Qa;
    }
    function Us() {
      return "value" in Ga ? Ga.value : Ga.textContent;
    }
    function xl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function eo() {
      return !1;
    }
    function xn(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = ar : this.isDefaultPrevented = eo, this.isPropagationStopped = eo, this;
      }
      return Ct(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ar
      }), t;
    }
    var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ff = xn(Gn), Rl = Ct({}, Gn, {
      view: 0,
      detail: 0
    }), Kd = xn(Rl), qd, _i, Mu;
    function Xd(e) {
      e !== Mu && (Mu && e.type === "mousemove" ? (qd = e.screenX - Mu.screenX, _i = e.screenY - Mu.screenY) : (qd = 0, _i = 0), Mu = e);
    }
    var ki = Ct({}, Rl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Xd(e), qd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : _i;
      }
    }), df = xn(ki), wl = Ct({}, ki, {
      dataTransfer: 0
    }), ph = xn(wl), vh = Ct({}, Rl, {
      relatedTarget: 0
    }), js = xn(vh), pf = Ct({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zy = xn(pf), Uy = Ct({}, Gn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), hh = xn(Uy), mh = Ct({}, Gn, {
      data: 0
    }), Po = xn(mh), jy = Po, Lu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, yh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function On(e) {
      if (e.key) {
        var t = Lu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = xl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? yh[e.keyCode] || "Unidentified" : "";
    }
    var Fy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function gh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Fy[e];
      return i ? !!a[i] : !1;
    }
    function Zd(e) {
      return gh;
    }
    var Py = Ct({}, Rl, {
      key: On,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? xl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Sh = xn(Py), Ch = Ct({}, ki, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Eh = xn(Ch), Ka = Ct({}, Rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zd
    }), Jd = xn(Ka), Hy = Ct({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ho = xn(Hy), vf = Ct({}, ki, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Tl = xn(vf), hf = [9, 13, 27, 32], mf = 229, Fs = gn && "CompositionEvent" in window, Ps = null;
    gn && "documentMode" in document && (Ps = document.documentMode);
    var ep = gn && "TextEvent" in window && !Ps, bh = gn && (!Fs || Ps && Ps > 8 && Ps <= 11), tp = 32, np = String.fromCharCode(tp);
    function yf() {
      gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Hs = !1;
    function xh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function rp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Vy(e, t) {
      return e === "keydown" && t.keyCode === mf;
    }
    function ap(e, t) {
      switch (e) {
        case "keyup":
          return hf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== mf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Vs(e) {
      return e.locale === "ko";
    }
    var Vo = !1;
    function Sf(e, t, a, i, l) {
      var s, f;
      if (Fs ? s = rp(t) : Vo ? ap(t, i) && (s = "onCompositionEnd") : Vy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      bh && !Vs(i) && (!Vo && s === "onCompositionStart" ? Vo = sf(l) : s === "onCompositionEnd" && Vo && (f = cf()));
      var p = Dh(a, s);
      if (p.length > 0) {
        var h = new Po(s, t, null, i, l);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var E = gf(i);
          E !== null && (h.data = E);
        }
      }
    }
    function Rh(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== tp ? null : (Hs = !0, np);
        case "textInput":
          var i = t.data;
          return i === np && Hs ? null : i;
        default:
          return null;
      }
    }
    function Iy(e, t) {
      if (Vo) {
        if (e === "compositionend" || !Fs && ap(e, t)) {
          var a = cf();
          return zs(), Vo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!xh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bh && !Vs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Cf(e, t, a, i, l) {
      var s;
      if (ep ? s = Rh(t, i) : s = Iy(t, i), !s)
        return null;
      var f = Dh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new jy("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function By(e, t, a, i, l, s, f) {
      Sf(e, t, a, i, l), Cf(e, t, a, i, l);
    }
    var Is = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function wh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Is[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ef(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      gr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Sc(i);
      var l = Dh(t, "onChange");
      if (l.length > 0) {
        var s = new ff("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var o = null, u = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, u, e, gc(e)), Sd(C, t);
    }
    function C(e) {
      SC(e, 0);
    }
    function x(e) {
      var t = _f(e);
      if (Kl(t))
        return e;
    }
    function _(e, t) {
      if (e === "change")
        return t;
    }
    var $ = !1;
    gn && ($ = Ef("input") && (!document.documentMode || document.documentMode > 9));
    function le(e, t) {
      o = e, u = t, o.attachEvent("onpropertychange", ie);
    }
    function ue() {
      o && (o.detachEvent("onpropertychange", ie), o = null, u = null);
    }
    function ie(e) {
      e.propertyName === "value" && x(u) && d(e);
    }
    function _e(e, t, a) {
      e === "focusin" ? (ue(), le(t, a)) : e === "focusout" && ue();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(u);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function zn(e, t) {
      if (e === "click")
        return x(t);
    }
    function z(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ke(e, "number", e.value);
    }
    function V(e, t, a, i, l, s, f) {
      var p = a ? _f(a) : window, h, E;
      if (c(p) ? h = _ : wh(p) ? $ ? h = z : (h = Me, E = _e) : Ue(p) && (h = zn), h) {
        var b = h(t, a);
        if (b) {
          r(e, b, i, l);
          return;
        }
      }
      E && E(t, p, a), t === "focusout" && N(p);
    }
    function ve() {
      Wr("onMouseEnter", ["mouseout", "mouseover"]), Wr("onMouseLeave", ["mouseout", "mouseover"]), Wr("onPointerEnter", ["pointerout", "pointerover"]), Wr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Pe(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !Fv(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (Ys(E) || gp(E)))
          return;
      }
      if (!(!h && !p)) {
        var b;
        if (l.window === l)
          b = l;
        else {
          var M = l.ownerDocument;
          M ? b = M.defaultView || M.parentWindow : b = window;
        }
        var O, I;
        if (h) {
          var Y = i.relatedTarget || i.toElement;
          if (O = a, I = Y ? Ys(Y) : null, I !== null) {
            var K = ba(I);
            (I !== K || I.tag !== Q && I.tag !== X) && (I = null);
          }
        } else
          O = null, I = a;
        if (O !== I) {
          var we = df, Qe = "onMouseLeave", Be = "onMouseEnter", Ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Eh, Qe = "onPointerLeave", Be = "onPointerEnter", Ut = "pointer");
          var Dt = O == null ? b : _f(O), P = I == null ? b : _f(I), q = new we(Qe, Ut + "leave", O, i, l);
          q.target = Dt, q.relatedTarget = P;
          var H = null, se = Ys(l);
          if (se === a) {
            var De = new we(Be, Ut + "enter", I, i, l);
            De.target = P, De.relatedTarget = Dt, H = De;
          }
          b1(e, q, H, O, I);
        }
      }
    }
    function Je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Le = typeof Object.is == "function" ? Object.is : Je;
    function nt(e, t) {
      if (Le(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!qn.call(t, s) || !Le(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ht(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function to(e, t) {
      for (var a = Qn(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Bi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Qn(Ht(a));
      }
    }
    function $y(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return n1(e, l, s, f, p);
    }
    function n1(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, h = 0, E = 0, b = e, M = null;
      e: for (; ; ) {
        for (var O = null; b === t && (a === 0 || b.nodeType === Bi) && (f = s + a), b === i && (l === 0 || b.nodeType === Bi) && (p = s + l), b.nodeType === Bi && (s += b.nodeValue.length), (O = b.firstChild) !== null; )
          M = b, b = O;
        for (; ; ) {
          if (b === e)
            break e;
          if (M === t && ++h === a && (f = s), M === i && ++E === l && (p = s), (O = b.nextSibling) !== null)
            break;
          b = M, M = b.parentNode;
        }
        b = O;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function r1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var E = to(e, f), b = to(e, p);
        if (E && b) {
          if (l.rangeCount === 1 && l.anchorNode === E.node && l.anchorOffset === E.offset && l.focusNode === b.node && l.focusOffset === b.offset)
            return;
          var M = a.createRange();
          M.setStart(E.node, E.offset), l.removeAllRanges(), f > p ? (l.addRange(M), l.extend(b.node, b.offset)) : (M.setEnd(b.node, b.offset), l.addRange(M));
        }
      }
    }
    function lC(e) {
      return e && e.nodeType === Bi;
    }
    function uC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : lC(e) ? !1 : lC(t) ? uC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function a1(e) {
      return e && e.ownerDocument && uC(e.ownerDocument.documentElement, e);
    }
    function i1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function sC() {
      for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement; ) {
        if (i1(t))
          e = t.contentWindow;
        else
          return t;
        t = wo(e.document);
      }
      return t;
    }
    function Yy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function o1() {
      var e = sC();
      return {
        focusedElem: e,
        selectionRange: Yy(e) ? u1(e) : null
      };
    }
    function l1(e) {
      var t = sC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && a1(a)) {
        i !== null && Yy(a) && s1(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ea && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function u1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = $y(e), t || {
        start: 0,
        end: 0
      };
    }
    function s1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : r1(e, t);
    }
    var c1 = gn && "documentMode" in document && document.documentMode <= 11;
    function f1() {
      gr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bf = null, Wy = null, ip = null, Gy = !1;
    function d1(e) {
      if ("selectionStart" in e && Yy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function p1(e) {
      return e.window === e ? e.document : e.nodeType === ui ? e : e.ownerDocument;
    }
    function cC(e, t, a) {
      var i = p1(a);
      if (!(Gy || bf == null || bf !== wo(i))) {
        var l = d1(bf);
        if (!ip || !nt(ip, l)) {
          ip = l;
          var s = Dh(Wy, "onSelect");
          if (s.length > 0) {
            var f = new ff("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = bf;
          }
        }
      }
    }
    function v1(e, t, a, i, l, s, f) {
      var p = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (wh(p) || p.contentEditable === "true") && (bf = p, Wy = a, ip = null);
          break;
        case "focusout":
          bf = null, Wy = null, ip = null;
          break;
        case "mousedown":
          Gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gy = !1, cC(e, i, l);
          break;
        case "selectionchange":
          if (c1)
            break;
        case "keydown":
        case "keyup":
          cC(e, i, l);
      }
    }
    function Th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Th("Animation", "AnimationEnd"),
      animationiteration: Th("Animation", "AnimationIteration"),
      animationstart: Th("Animation", "AnimationStart"),
      transitionend: Th("Transition", "TransitionEnd")
    }, Qy = {}, fC = {};
    gn && (fC = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function _h(e) {
      if (Qy[e])
        return Qy[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in fC)
          return Qy[e] = t[a];
      return e;
    }
    var dC = _h("animationend"), pC = _h("animationiteration"), vC = _h("animationstart"), hC = _h("transitionend"), mC = /* @__PURE__ */ new Map(), yC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Au(e, t) {
      mC.set(e, t), gr(t, [e]);
    }
    function h1() {
      for (var e = 0; e < yC.length; e++) {
        var t = yC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Au(a, "on" + i);
      }
      Au(dC, "onAnimationEnd"), Au(pC, "onAnimationIteration"), Au(vC, "onAnimationStart"), Au("dblclick", "onDoubleClick"), Au("focusin", "onFocus"), Au("focusout", "onBlur"), Au(hC, "onTransitionEnd");
    }
    function m1(e, t, a, i, l, s, f) {
      var p = mC.get(t);
      if (p !== void 0) {
        var h = ff, E = t;
        switch (t) {
          case "keypress":
            if (xl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Sh;
            break;
          case "focusin":
            E = "focus", h = js;
            break;
          case "focusout":
            E = "blur", h = js;
            break;
          case "beforeblur":
          case "afterblur":
            h = js;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = ph;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Jd;
            break;
          case dC:
          case pC:
          case vC:
            h = zy;
            break;
          case hC:
            h = Ho;
            break;
          case "scroll":
            h = Kd;
            break;
          case "wheel":
            h = Tl;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = hh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Eh;
            break;
        }
        var b = (s & il) !== 0;
        {
          var M = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = C1(a, p, i.type, b, M);
          if (O.length > 0) {
            var I = new h(p, E, null, i, l);
            e.push({
              event: I,
              listeners: O
            });
          }
        }
      }
    }
    h1(), ve(), n(), f1(), yf();
    function y1(e, t, a, i, l, s, f) {
      m1(e, t, a, i, l, s);
      var p = (s & by) === 0;
      p && (Pe(e, t, a, i, l), V(e, t, a, i, l), v1(e, t, a, i, l), By(e, t, a, i, l));
    }
    var op = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(op));
    function gC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Gi(i, t, void 0, e), e.currentTarget = null;
    }
    function g1(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          gC(e, h, p), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var b = t[E], M = b.instance, O = b.currentTarget, I = b.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          gC(e, I, O), i = M;
        }
    }
    function SC(e, t) {
      for (var a = (t & il) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        g1(s, f, a);
      }
      xd();
    }
    function S1(e, t, a, i, l) {
      var s = gc(a), f = [];
      y1(f, e, i, a, s, t), SC(f, t);
    }
    function Rn(e, t) {
      Ky.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Kw(t), l = x1(e);
      i.has(l) || (CC(t, e, fs, a), i.add(l));
    }
    function qy(e, t, a) {
      Ky.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= il), CC(a, e, i, t);
    }
    var kh = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[kh]) {
        e[kh] = !0, Et.forEach(function(a) {
          a !== "selectionchange" && (Ky.has(a) || qy(a, !1, e), qy(a, !0, e));
        });
        var t = e.nodeType === ui ? e : e.ownerDocument;
        t !== null && (t[kh] || (t[kh] = !0, qy("selectionchange", !1, t)));
      }
    }
    function CC(e, t, a, i, l) {
      var s = Wn(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? uf(e, t, s, f) : Ji(e, t, s) : f !== void 0 ? Qd(e, t, s, f) : Ou(e, t, s);
    }
    function EC(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
    }
    function Xy(e, t, a, i, l) {
      var s = i;
      if (!(t & Yi) && !(t & fs)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var h = p.tag;
            if (h === F || h === W) {
              var E = p.stateNode.containerInfo;
              if (EC(E, f))
                break;
              if (h === W)
                for (var b = p.return; b !== null; ) {
                  var M = b.tag;
                  if (M === F || M === W) {
                    var O = b.stateNode.containerInfo;
                    if (EC(O, f))
                      return;
                  }
                  b = b.return;
                }
              for (; E !== null; ) {
                var I = Ys(E);
                if (I === null)
                  return;
                var Y = I.tag;
                if (Y === Q || Y === X) {
                  p = s = I;
                  continue e;
                }
                E = E.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Sd(function() {
        return S1(e, t, a, s);
      });
    }
    function up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function C1(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], E = e, b = null; E !== null; ) {
        var M = E, O = M.stateNode, I = M.tag;
        if (I === Q && O !== null && (b = O, p !== null)) {
          var Y = ll(E, p);
          Y != null && h.push(up(E, Y, b));
        }
        if (l)
          break;
        E = E.return;
      }
      return h;
    }
    function Dh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === Q && f !== null) {
          var h = f, E = ll(l, a);
          E != null && i.unshift(up(l, E, h));
          var b = ll(l, t);
          b != null && i.push(up(l, b, h));
        }
        l = l.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Q);
      return e || null;
    }
    function E1(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Rf(s))
        l++;
      for (var f = 0, p = i; p; p = Rf(p))
        f++;
      for (; l - f > 0; )
        a = Rf(a), l--;
      for (; f - l > 0; )
        i = Rf(i), f--;
      for (var h = l; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function bC(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, E = h.alternate, b = h.stateNode, M = h.tag;
        if (E !== null && E === i)
          break;
        if (M === Q && b !== null) {
          var O = b;
          if (l) {
            var I = ll(p, s);
            I != null && f.unshift(up(p, I, O));
          } else if (!l) {
            var Y = ll(p, s);
            Y != null && f.push(up(p, Y, O));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function b1(e, t, a, i, l) {
      var s = i && l ? E1(i, l) : null;
      i !== null && bC(e, t, i, s, !1), l !== null && a !== null && bC(e, a, l, s, !0);
    }
    function x1(e, t) {
      return e + "__bubble";
    }
    var qa = !1, sp = "dangerouslySetInnerHTML", Oh = "suppressContentEditableWarning", zu = "suppressHydrationWarning", xC = "autoFocus", Bs = "children", $s = "style", Nh = "__html", Zy, Mh, cp, RC, Lh, wC, TC;
    Zy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Mh = function(e, t) {
      yc(e, t), vd(e, t), jv(e, t, {
        registrationNameDependencies: bt,
        possibleRegistrationNames: ln
      });
    }, wC = gn && !document.documentMode, cp = function(e, t, a) {
      if (!qa) {
        var i = Ah(a), l = Ah(t);
        l !== i && (qa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, RC = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Lh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, TC = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var R1 = /\r\n?/g, w1 = /\u0000|\uFFFD/g;
    function Ah(e) {
      Kr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(R1, `
`).replace(w1, "");
    }
    function zh(e, t, a, i) {
      var l = Ah(t), s = Ah(e);
      if (s !== l && (i && (qa || (qa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && ge))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _C(e) {
      return e.nodeType === ui ? e : e.ownerDocument;
    }
    function T1() {
    }
    function Uh(e) {
      e.onclick = T1;
    }
    function _1(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), _v(t, f);
          else if (s === sp) {
            var p = f ? f[Nh] : void 0;
            p != null && mv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && pc(t, f);
            } else typeof f == "number" && pc(t, "" + f);
          else s === Oh || s === zu || s === xC || (bt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Lh(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && Sa(t, s, f, l));
        }
    }
    function k1(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === $s ? _v(e, f) : s === sp ? mv(e, f) : s === Bs ? pc(e, f) : Sa(e, s, f, i);
      }
    }
    function D1(e, t, a, i) {
      var l, s = _C(a), f, p = i;
      if (p === Ii && (p = fc(e)), p === Ii) {
        if (l = $i(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var E = h.firstChild;
          f = h.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var b = f;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !qn.call(Zy, e) && (Zy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function O1(e, t) {
      return _C(t).createTextNode(e);
    }
    function N1(e, t, a, i) {
      var l = $i(t, a);
      Mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < op.length; f++)
            Rn(op[f], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = m(e, a), Rn("invalid", e);
          break;
        case "option":
          Jt(e, a), s = a;
          break;
        case "select":
          ls(e, a), s = os(e, a), Rn("invalid", e);
          break;
        case "textarea":
          pv(e, a), s = id(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hc(t, s), _1(t, e, i, s, l), t) {
        case "input":
          za(e), pe(e, a, !1);
          break;
        case "textarea":
          za(e), hv(e);
          break;
        case "option":
          an(e, a);
          break;
        case "select":
          rd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Uh(e);
          break;
      }
    }
    function M1(e, t, a, i, l) {
      Mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = m(e, a), p = m(e, i), s = [];
          break;
        case "select":
          f = os(e, a), p = os(e, i), s = [];
          break;
        case "textarea":
          f = id(e, a), p = id(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Uh(e);
          break;
      }
      hc(t, p);
      var h, E, b = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === $s) {
            var M = f[h];
            for (E in M)
              M.hasOwnProperty(E) && (b || (b = {}), b[E] = "");
          } else h === sp || h === Bs || h === Oh || h === zu || h === xC || (bt.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var O = p[h], I = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || O === I || O == null && I == null))
          if (h === $s)
            if (O && Object.freeze(O), I) {
              for (E in I)
                I.hasOwnProperty(E) && (!O || !O.hasOwnProperty(E)) && (b || (b = {}), b[E] = "");
              for (E in O)
                O.hasOwnProperty(E) && I[E] !== O[E] && (b || (b = {}), b[E] = O[E]);
            } else
              b || (s || (s = []), s.push(h, b)), b = O;
          else if (h === sp) {
            var Y = O ? O[Nh] : void 0, K = I ? I[Nh] : void 0;
            Y != null && K !== Y && (s = s || []).push(h, Y);
          } else h === Bs ? (typeof O == "string" || typeof O == "number") && (s = s || []).push(h, "" + O) : h === Oh || h === zu || (bt.hasOwnProperty(h) ? (O != null && (typeof O != "function" && Lh(h, O), h === "onScroll" && Rn("scroll", e)), !s && I !== O && (s = [])) : (s = s || []).push(h, O));
      }
      return b && (ss(b, p[$s]), (s = s || []).push($s, b)), s;
    }
    function L1(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && B(e, l);
      var s = $i(a, i), f = $i(a, l);
      switch (k1(e, t, s, f), a) {
        case "input":
          G(e, l);
          break;
        case "textarea":
          vv(e, l);
          break;
        case "select":
          dy(e, l);
          break;
      }
    }
    function A1(e) {
      {
        var t = e.toLowerCase();
        return mc.hasOwnProperty(t) && mc[t] || null;
      }
    }
    function z1(e, t, a, i, l, s, f) {
      var p, h;
      switch (p = $i(t, a), Mh(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < op.length; E++)
            Rn(op[E], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          w(e, a), Rn("invalid", e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          ls(e, a), Rn("invalid", e);
          break;
        case "textarea":
          pv(e, a), Rn("invalid", e);
          break;
      }
      hc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var b = e.attributes, M = 0; M < b.length; M++) {
          var O = b[M].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(b[M].name);
          }
        }
      }
      var I = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var K = a[Y];
          if (Y === Bs)
            typeof K == "string" ? e.textContent !== K && (a[zu] !== !0 && zh(e.textContent, K, s, f), I = [Bs, K]) : typeof K == "number" && e.textContent !== "" + K && (a[zu] !== !0 && zh(e.textContent, K, s, f), I = [Bs, "" + K]);
          else if (bt.hasOwnProperty(Y))
            K != null && (typeof K != "function" && Lh(Y, K), Y === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var we = void 0, Qe = p && qe ? null : Dr(Y);
            if (a[zu] !== !0) {
              if (!(Y === Oh || Y === zu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === sp) {
                  var Be = e.innerHTML, Ut = K ? K[Nh] : void 0;
                  if (Ut != null) {
                    var Dt = TC(e, Ut);
                    Dt !== Be && cp(Y, Be, Dt);
                  }
                } else if (Y === $s) {
                  if (h.delete(Y), wC) {
                    var P = Cy(K);
                    we = e.getAttribute("style"), P !== we && cp(Y, we, P);
                  }
                } else if (p && !qe)
                  h.delete(Y.toLowerCase()), we = mi(e, Y, K), K !== we && cp(Y, we, K);
                else if (!Cn(Y, Qe, p) && !Zt(Y, K, Qe, p)) {
                  var q = !1;
                  if (Qe !== null)
                    h.delete(Qe.attributeName), we = ga(e, Y, K, Qe);
                  else {
                    var H = i;
                    if (H === Ii && (H = fc(t)), H === Ii)
                      h.delete(Y.toLowerCase());
                    else {
                      var se = A1(Y);
                      se !== null && se !== Y && (q = !0, h.delete(se)), h.delete(Y);
                    }
                    we = mi(e, Y, K);
                  }
                  var De = qe;
                  !De && K !== we && !q && cp(Y, we, K);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[zu] !== !0 && RC(h), t) {
        case "input":
          za(e), pe(e, a, !0);
          break;
        case "textarea":
          za(e), hv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Uh(e);
          break;
      }
      return I;
    }
    function U1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Jy(e, t) {
      {
        if (qa)
          return;
        qa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function eg(e, t) {
      {
        if (qa)
          return;
        qa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function tg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ng(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function j1(e, t, a) {
      switch (t) {
        case "input":
          Ze(e, a);
          return;
        case "textarea":
          od(e, a);
          return;
        case "select":
          py(e, a);
          return;
      }
    }
    var fp = function() {
    }, dp = function() {
    };
    {
      var F1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], kC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], P1 = kC.concat(["button"]), H1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], DC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      dp = function(e, t) {
        var a = Ct({}, e || DC), i = {
          tag: t
        };
        return kC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), P1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), F1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var V1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return H1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, I1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, OC = {};
      fp = function(e, t, a) {
        a = a || DC;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = V1(e, l) ? null : i, f = s ? null : I1(e, a), p = s || f;
        if (p) {
          var h = p.tag, E = !!s + "|" + e + "|" + h;
          if (!OC[E]) {
            OC[E] = !0;
            var b = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", s) {
              var O = "";
              h === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, h, M, O);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, h);
          }
        }
      };
    }
    var jh = "suppressHydrationWarning", Fh = "$", Ph = "/$", pp = "$?", vp = "$!", B1 = "style", rg = null, ag = null;
    function $1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ui:
        case rl: {
          t = i === ui ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : ud(null, "");
          break;
        }
        default: {
          var s = i === Pn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ud(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = dp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function Y1(e, t, a) {
      {
        var i = e, l = ud(i.namespace, t), s = dp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function QN(e) {
      return e;
    }
    function W1(e) {
      rg = ku(), ag = o1();
      var t = null;
      return ca(!1), t;
    }
    function G1(e) {
      l1(ag), ca(rg), rg = null, ag = null;
    }
    function Q1(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (fp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = dp(f.ancestorInfo, e);
          fp(null, p, h);
        }
        s = f.namespace;
      }
      var E = D1(e, t, a, s);
      return yp(l, E), dg(E, t), E;
    }
    function K1(e, t) {
      e.appendChild(t);
    }
    function q1(e, t, a, i, l) {
      switch (N1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function X1(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = dp(f.ancestorInfo, t);
          fp(null, p, h);
        }
      }
      return M1(e, t, a, i);
    }
    function ig(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Z1(e, t, a, i) {
      {
        var l = a;
        fp(null, e, l.ancestorInfo);
      }
      var s = O1(e, t);
      return yp(i, s), s;
    }
    function J1() {
      var e = window.event;
      return e === void 0 ? wi : lf(e.type);
    }
    var og = typeof setTimeout == "function" ? setTimeout : void 0, ew = typeof clearTimeout == "function" ? clearTimeout : void 0, lg = -1, NC = typeof Promise == "function" ? Promise : void 0, tw = typeof queueMicrotask == "function" ? queueMicrotask : typeof NC < "u" ? function(e) {
      return NC.resolve(null).then(e).catch(nw);
    } : og;
    function nw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function rw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function aw(e, t, a, i, l, s) {
      L1(e, t, a, i, l), dg(e, l);
    }
    function MC(e) {
      pc(e, "");
    }
    function iw(e, t, a) {
      e.nodeValue = a;
    }
    function ow(e, t) {
      e.appendChild(t);
    }
    function lw(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Uh(a);
    }
    function uw(e, t, a) {
      e.insertBefore(t, a);
    }
    function sw(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function cw(e, t) {
      e.removeChild(t);
    }
    function fw(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function ug(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Pn) {
          var s = l.data;
          if (s === Ph)
            if (i === 0) {
              e.removeChild(l), Dn(t);
              return;
            } else
              i--;
          else (s === Fh || s === pp || s === vp) && i++;
        }
        a = l;
      } while (a);
      Dn(t);
    }
    function dw(e, t) {
      e.nodeType === Pn ? ug(e.parentNode, t) : e.nodeType === ea && ug(e, t), Dn(e);
    }
    function pw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function vw(e) {
      e.nodeValue = "";
    }
    function hw(e, t) {
      e = e;
      var a = t[B1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = vc("display", i);
    }
    function mw(e, t) {
      e.nodeValue = t;
    }
    function yw(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === ui && e.documentElement && e.removeChild(e.documentElement);
    }
    function gw(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Sw(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Cw(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function LC(e) {
      return e.data === pp;
    }
    function sg(e) {
      return e.data === vp;
    }
    function Ew(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function bw(e, t) {
      e._reactRetry = t;
    }
    function Hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Bi)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === Fh || a === vp || a === pp)
            break;
          if (a === Ph)
            return null;
        }
      }
      return e;
    }
    function hp(e) {
      return Hh(e.nextSibling);
    }
    function xw(e) {
      return Hh(e.firstChild);
    }
    function Rw(e) {
      return Hh(e.firstChild);
    }
    function ww(e) {
      return Hh(e.nextSibling);
    }
    function Tw(e, t, a, i, l, s, f) {
      yp(s, e), dg(e, a);
      var p;
      {
        var h = l;
        p = h.namespace;
      }
      var E = (s.mode & Ie) !== Fe;
      return z1(e, t, a, p, i, E, f);
    }
    function _w(e, t, a, i) {
      return yp(a, e), a.mode & Ie, U1(e, t);
    }
    function kw(e, t) {
      yp(t, e);
    }
    function Dw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Ph) {
            if (a === 0)
              return hp(t);
            a--;
          } else (i === Fh || i === vp || i === pp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function AC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === Fh || i === vp || i === pp) {
            if (a === 0)
              return t;
            a--;
          } else i === Ph && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ow(e) {
      Dn(e);
    }
    function Nw(e) {
      Dn(e);
    }
    function Mw(e) {
      return e !== "head" && e !== "body";
    }
    function Lw(e, t, a, i) {
      var l = !0;
      zh(t.nodeValue, a, i, l);
    }
    function Aw(e, t, a, i, l, s) {
      if (t[jh] !== !0) {
        var f = !0;
        zh(i.nodeValue, l, s, f);
      }
    }
    function zw(e, t) {
      t.nodeType === ea ? Jy(e, t) : t.nodeType === Pn || eg(e, t);
    }
    function Uw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? Jy(a, t) : t.nodeType === Pn || eg(a, t));
      }
    }
    function jw(e, t, a, i, l) {
      (l || t[jh] !== !0) && (i.nodeType === ea ? Jy(a, i) : i.nodeType === Pn || eg(a, i));
    }
    function Fw(e, t, a) {
      tg(e, t);
    }
    function Pw(e, t) {
      ng(e, t);
    }
    function Hw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && tg(i, t);
      }
    }
    function Vw(e, t) {
      {
        var a = e.parentNode;
        a !== null && ng(a, t);
      }
    }
    function Iw(e, t, a, i, l, s) {
      (s || t[jh] !== !0) && tg(a, i);
    }
    function Bw(e, t, a, i, l) {
      (l || t[jh] !== !0) && ng(a, i);
    }
    function $w(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Yw(e) {
      lp(e);
    }
    var wf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + wf, cg = "__reactProps$" + wf, mp = "__reactContainer$" + wf, fg = "__reactEvents$" + wf, Ww = "__reactListeners$" + wf, Gw = "__reactHandles$" + wf;
    function Qw(e) {
      delete e[Tf], delete e[cg], delete e[fg], delete e[Ww], delete e[Gw];
    }
    function yp(e, t) {
      t[Tf] = e;
    }
    function Vh(e, t) {
      t[mp] = e;
    }
    function zC(e) {
      e[mp] = null;
    }
    function gp(e) {
      return !!e[mp];
    }
    function Ys(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[mp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = AC(e); l !== null; ) {
              var s = l[Tf];
              if (s)
                return s;
              l = AC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Uu(e) {
      var t = e[Tf] || e[mp];
      return t && (t.tag === Q || t.tag === X || t.tag === Re || t.tag === F) ? t : null;
    }
    function _f(e) {
      if (e.tag === Q || e.tag === X)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ih(e) {
      return e[cg] || null;
    }
    function dg(e, t) {
      e[cg] = t;
    }
    function Kw(e) {
      var t = e[fg];
      return t === void 0 && (t = e[fg] = /* @__PURE__ */ new Set()), t;
    }
    var UC = {}, jC = y.ReactDebugCurrentFrame;
    function Bh(e) {
      if (e) {
        var t = e._owner, a = Ci(e.type, e._source, t ? t.type : null);
        jC.setExtraStackFrame(a);
      } else
        jC.setExtraStackFrame(null);
    }
    function no(e, t, a, i, l) {
      {
        var s = Function.call.bind(qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (Bh(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Bh(null)), p instanceof Error && !(p.message in UC) && (UC[p.message] = !0, Bh(l), g("Failed %s type: %s", a, p.message), Bh(null));
          }
      }
    }
    var pg = [], $h;
    $h = [];
    var _l = -1;
    function ju(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (_l < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== $h[_l] && g("Unexpected Fiber popped."), e.current = pg[_l], pg[_l] = null, $h[_l] = null, _l--;
    }
    function da(e, t, a) {
      _l++, pg[_l] = e.current, $h[_l] = a, e.current = t;
    }
    var vg;
    vg = {};
    var di = {};
    Object.freeze(di);
    var kl = ju(di), Io = ju(!1), hg = di;
    function kf(e, t, a) {
      return a && Bo(t) ? hg : kl.current;
    }
    function FC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Df(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return di;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = ut(e) || "Unknown";
          no(i, s, "context", p);
        }
        return l && FC(e, t, s), s;
      }
    }
    function Yh() {
      return Io.current;
    }
    function Bo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Wh(e) {
      fa(Io, e), fa(kl, e);
    }
    function mg(e) {
      fa(Io, e), fa(kl, e);
    }
    function PC(e, t, a) {
      {
        if (kl.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(kl, t, e), da(Io, a, e);
      }
    }
    function HC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ut(e) || "Unknown";
            vg[s] || (vg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((ut(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = ut(e) || "Unknown";
          no(l, f, "child context", h);
        }
        return Ct({}, a, f);
      }
    }
    function Gh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return hg = kl.current, da(kl, a, e), da(Io, Io.current, e), !0;
      }
    }
    function VC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = HC(e, t, hg);
          i.__reactInternalMemoizedMergedChildContext = l, fa(Io, e), fa(kl, e), da(kl, l, e), da(Io, a, e);
        } else
          fa(Io, e), da(Io, a, e);
      }
    }
    function qw(e) {
      {
        if (!kd(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case A: {
              var a = t.type;
              if (Bo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Fu = 0, Qh = 1, Dl = null, yg = !1, gg = !1;
    function IC(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function Xw(e) {
      yg = !0, IC(e);
    }
    function BC() {
      yg && Pu();
    }
    function Pu() {
      if (!gg && Dl !== null) {
        gg = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = Dl;
          for (kn(An); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Dl = null, yg = !1;
        } catch (s) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), wc(_c, Pu), s;
        } finally {
          kn(t), gg = !1;
        }
      }
      return null;
    }
    var Of = [], Nf = 0, Kh = null, qh = 0, Di = [], Oi = 0, Ws = null, Ol = 1, Nl = "";
    function Zw(e) {
      return Qs(), (e.flags & wd) !== We;
    }
    function Jw(e) {
      return Qs(), qh;
    }
    function eT() {
      var e = Nl, t = Ol, a = t & ~tT(t);
      return a.toString(32) + e;
    }
    function Gs(e, t) {
      Qs(), Of[Nf++] = qh, Of[Nf++] = Kh, Kh = e, qh = t;
    }
    function $C(e, t, a) {
      Qs(), Di[Oi++] = Ol, Di[Oi++] = Nl, Di[Oi++] = Ws, Ws = e;
      var i = Ol, l = Nl, s = Xh(i) - 1, f = i & ~(1 << s), p = a + 1, h = Xh(t) + s;
      if (h > 30) {
        var E = s - s % 5, b = (1 << E) - 1, M = (f & b).toString(32), O = f >> E, I = s - E, Y = Xh(t) + I, K = p << I, we = K | O, Qe = M + l;
        Ol = 1 << Y | we, Nl = Qe;
      } else {
        var Be = p << s, Ut = Be | f, Dt = l;
        Ol = 1 << h | Ut, Nl = Dt;
      }
    }
    function Sg(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Gs(e, a), $C(e, a, i);
      }
    }
    function Xh(e) {
      return 32 - fu(e);
    }
    function tT(e) {
      return 1 << Xh(e) - 1;
    }
    function Cg(e) {
      for (; e === Kh; )
        Kh = Of[--Nf], Of[Nf] = null, qh = Of[--Nf], Of[Nf] = null;
      for (; e === Ws; )
        Ws = Di[--Oi], Di[Oi] = null, Nl = Di[--Oi], Di[Oi] = null, Ol = Di[--Oi], Di[Oi] = null;
    }
    function nT() {
      return Qs(), Ws !== null ? {
        id: Ol,
        overflow: Nl
      } : null;
    }
    function rT(e, t) {
      Qs(), Di[Oi++] = Ol, Di[Oi++] = Nl, Di[Oi++] = Ws, Ol = t.id, Nl = t.overflow, Ws = e;
    }
    function Qs() {
      jr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, ro = !1, Ks = !1, Hu = null;
    function aT() {
      ro && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function YC() {
      Ks = !0;
    }
    function iT() {
      return Ks;
    }
    function oT(e) {
      var t = e.stateNode.containerInfo;
      return Ni = Rw(t), Ur = e, ro = !0, Hu = null, Ks = !1, !0;
    }
    function lT(e, t, a) {
      return Ni = ww(t), Ur = e, ro = !0, Hu = null, Ks = !1, a !== null && rT(e, a), !0;
    }
    function WC(e, t) {
      switch (e.tag) {
        case F: {
          zw(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & Ie) !== Fe;
          jw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && Uw(i.dehydrated, t);
          break;
        }
      }
    }
    function GC(e, t) {
      WC(e, t);
      var a = fD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= $t) : i.push(a);
    }
    function Eg(e, t) {
      {
        if (Ks)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var i = t.type;
                t.pendingProps, Fw(a, i);
                break;
              case X:
                var l = t.pendingProps;
                Pw(a, l);
                break;
            }
            break;
          }
          case Q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Q: {
                var h = t.type, E = t.pendingProps, b = (e.mode & Ie) !== Fe;
                Iw(
                  s,
                  f,
                  p,
                  h,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case X: {
                var M = t.pendingProps, O = (e.mode & Ie) !== Fe;
                Bw(
                  s,
                  f,
                  p,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var I = e.memoizedState, Y = I.dehydrated;
            if (Y !== null) switch (t.tag) {
              case Q:
                var K = t.type;
                t.pendingProps, Hw(Y, K);
                break;
              case X:
                var we = t.pendingProps;
                Vw(Y, we);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function QC(e, t) {
      t.flags = t.flags & ~Pa | fn, Eg(e, t);
    }
    function KC(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var i = gw(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = xw(i), !0) : !1;
        }
        case X: {
          var l = e.pendingProps, s = Sw(t, l);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case Re: {
          var f = Cw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: nT(),
              retryLane: wr
            };
            e.memoizedState = p;
            var h = dD(f);
            return h.return = e, e.child = h, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function bg(e) {
      return (e.mode & Ie) !== Fe && (e.flags & ot) === We;
    }
    function xg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Rg(e) {
      if (ro) {
        var t = Ni;
        if (!t) {
          bg(e) && (Eg(Ur, e), xg()), QC(Ur, e), ro = !1, Ur = e;
          return;
        }
        var a = t;
        if (!KC(e, t)) {
          bg(e) && (Eg(Ur, e), xg()), t = hp(a);
          var i = Ur;
          if (!t || !KC(e, t)) {
            QC(Ur, e), ro = !1, Ur = e;
            return;
          }
          GC(i, a);
        }
      }
    }
    function uT(e, t, a) {
      var i = e.stateNode, l = !Ks, s = Tw(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function sT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = _w(t, a, e);
      if (i) {
        var l = Ur;
        if (l !== null)
          switch (l.tag) {
            case F: {
              var s = l.stateNode.containerInfo, f = (l.mode & Ie) !== Fe;
              Lw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Q: {
              var p = l.type, h = l.memoizedProps, E = l.stateNode, b = (l.mode & Ie) !== Fe;
              Aw(
                p,
                h,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return i;
    }
    function cT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      kw(a, e);
    }
    function fT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Dw(a);
    }
    function qC(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== F && t.tag !== Re; )
        t = t.return;
      Ur = t;
    }
    function Zh(e) {
      if (e !== Ur)
        return !1;
      if (!ro)
        return qC(e), ro = !0, !1;
      if (e.tag !== F && (e.tag !== Q || Mw(e.type) && !ig(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (bg(e))
            XC(e), xg();
          else
            for (; t; )
              GC(e, t), t = hp(t);
      }
      return qC(e), e.tag === Re ? Ni = fT(e) : Ni = Ur ? hp(e.stateNode) : null, !0;
    }
    function dT() {
      return ro && Ni !== null;
    }
    function XC(e) {
      for (var t = Ni; t; )
        WC(e, t), t = hp(t);
    }
    function Mf() {
      Ur = null, Ni = null, ro = !1, Ks = !1;
    }
    function ZC() {
      Hu !== null && (Yb(Hu), Hu = null);
    }
    function jr() {
      return ro;
    }
    function wg(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    var pT = y.ReactCurrentBatchConfig, vT = null;
    function hT() {
      return pT.transition;
    }
    var ao = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var mT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Sp = [], Cp = [], Ep = [], bp = [], xp = [], Rp = [], Xs = /* @__PURE__ */ new Set();
      ao.recordUnsafeLifecycleWarnings = function(e, t) {
        Xs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && Cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && bp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && Rp.push(e));
      }, ao.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(O) {
          e.add(ut(O) || "Component"), Xs.add(O.type);
        }), Sp = []);
        var t = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(O) {
          t.add(ut(O) || "Component"), Xs.add(O.type);
        }), Cp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(O) {
          a.add(ut(O) || "Component"), Xs.add(O.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(O) {
          i.add(ut(O) || "Component"), Xs.add(O.type);
        }), bp = []);
        var l = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(O) {
          l.add(ut(O) || "Component"), Xs.add(O.type);
        }), xp = []);
        var s = /* @__PURE__ */ new Set();
        if (Rp.length > 0 && (Rp.forEach(function(O) {
          s.add(ut(O) || "Component"), Xs.add(O.type);
        }), Rp = []), t.size > 0) {
          var f = qs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = qs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var E = qs(e);
          D(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var b = qs(a);
          D(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (l.size > 0) {
          var M = qs(l);
          D(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var Jh = /* @__PURE__ */ new Map(), JC = /* @__PURE__ */ new Set();
      ao.recordLegacyContextWarning = function(e, t) {
        var a = mT(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!JC.has(e.type)) {
          var i = Jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Jh.set(a, i)), i.push(e));
        }
      }, ao.flushLegacyContextWarning = function() {
        Jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ut(s) || "Component"), JC.add(s.type);
            });
            var l = qs(i);
            try {
              Qt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Tn();
            }
          }
        });
      }, ao.discardPendingWarnings = function() {
        Sp = [], Cp = [], Ep = [], bp = [], xp = [], Rp = [], Jh = /* @__PURE__ */ new Map();
      };
    }
    var Tg, _g, kg, Dg, Og, eE = function(e, t) {
    };
    Tg = !1, _g = !1, kg = {}, Dg = {}, Og = {}, eE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ut(t) || "Component";
        Dg[a] || (Dg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yT(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rt || rt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== A) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !yT(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = ut(e) || "Component";
          kg[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), kg[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== A)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          Xn(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var b = function(M) {
            var O = h.refs;
            M === null ? delete O[E] : O[E] = M;
          };
          return b._stringRef = E, b;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function em(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function tm(e) {
      {
        var t = ut(e) || "Component";
        if (Og[t])
          return;
        Og[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function tE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function nE(e) {
      function t(P, q) {
        if (e) {
          var H = P.deletions;
          H === null ? (P.deletions = [q], P.flags |= $t) : H.push(q);
        }
      }
      function a(P, q) {
        if (!e)
          return null;
        for (var H = q; H !== null; )
          t(P, H), H = H.sibling;
        return null;
      }
      function i(P, q) {
        for (var H = /* @__PURE__ */ new Map(), se = q; se !== null; )
          se.key !== null ? H.set(se.key, se) : H.set(se.index, se), se = se.sibling;
        return H;
      }
      function l(P, q) {
        var H = oc(P, q);
        return H.index = 0, H.sibling = null, H;
      }
      function s(P, q, H) {
        if (P.index = H, !e)
          return P.flags |= wd, q;
        var se = P.alternate;
        if (se !== null) {
          var De = se.index;
          return De < q ? (P.flags |= fn, q) : De;
        } else
          return P.flags |= fn, q;
      }
      function f(P) {
        return e && P.alternate === null && (P.flags |= fn), P;
      }
      function p(P, q, H, se) {
        if (q === null || q.tag !== X) {
          var De = w0(H, P.mode, se);
          return De.return = P, De;
        } else {
          var Te = l(q, H);
          return Te.return = P, Te;
        }
      }
      function h(P, q, H, se) {
        var De = H.type;
        if (De === Ca)
          return b(P, q, H.props.children, se, H.key);
        if (q !== null && (q.elementType === De || // Keep this check inline so it only runs on the false path:
        lx(q, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof De == "object" && De !== null && De.$$typeof === Xe && tE(De) === q.type)) {
          var Te = l(q, H.props);
          return Te.ref = wp(P, q, H), Te.return = P, Te._debugSource = H._source, Te._debugOwner = H._owner, Te;
        }
        var at = R0(H, P.mode, se);
        return at.ref = wp(P, q, H), at.return = P, at;
      }
      function E(P, q, H, se) {
        if (q === null || q.tag !== W || q.stateNode.containerInfo !== H.containerInfo || q.stateNode.implementation !== H.implementation) {
          var De = T0(H, P.mode, se);
          return De.return = P, De;
        } else {
          var Te = l(q, H.children || []);
          return Te.return = P, Te;
        }
      }
      function b(P, q, H, se, De) {
        if (q === null || q.tag !== de) {
          var Te = Xu(H, P.mode, se, De);
          return Te.return = P, Te;
        } else {
          var at = l(q, H);
          return at.return = P, at;
        }
      }
      function M(P, q, H) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var se = w0("" + q, P.mode, H);
          return se.return = P, se;
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case ai: {
              var De = R0(q, P.mode, H);
              return De.ref = wp(P, null, q), De.return = P, De;
            }
            case Or: {
              var Te = T0(q, P.mode, H);
              return Te.return = P, Te;
            }
            case Xe: {
              var at = q._payload, ft = q._init;
              return M(P, ft(at), H);
            }
          }
          if (Lt(q) || Nr(q)) {
            var tn = Xu(q, P.mode, H, null);
            return tn.return = P, tn;
          }
          em(P, q);
        }
        return typeof q == "function" && tm(P), null;
      }
      function O(P, q, H, se) {
        var De = q !== null ? q.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return De !== null ? null : p(P, q, "" + H, se);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ai:
              return H.key === De ? h(P, q, H, se) : null;
            case Or:
              return H.key === De ? E(P, q, H, se) : null;
            case Xe: {
              var Te = H._payload, at = H._init;
              return O(P, q, at(Te), se);
            }
          }
          if (Lt(H) || Nr(H))
            return De !== null ? null : b(P, q, H, se, null);
          em(P, H);
        }
        return typeof H == "function" && tm(P), null;
      }
      function I(P, q, H, se, De) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Te = P.get(H) || null;
          return p(q, Te, "" + se, De);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case ai: {
              var at = P.get(se.key === null ? H : se.key) || null;
              return h(q, at, se, De);
            }
            case Or: {
              var ft = P.get(se.key === null ? H : se.key) || null;
              return E(q, ft, se, De);
            }
            case Xe:
              var tn = se._payload, Vt = se._init;
              return I(P, q, H, Vt(tn), De);
          }
          if (Lt(se) || Nr(se)) {
            var Kn = P.get(H) || null;
            return b(q, Kn, se, De, null);
          }
          em(q, se);
        }
        return typeof se == "function" && tm(q), null;
      }
      function Y(P, q, H) {
        {
          if (typeof P != "object" || P === null)
            return q;
          switch (P.$$typeof) {
            case ai:
            case Or:
              eE(P, H);
              var se = P.key;
              if (typeof se != "string")
                break;
              if (q === null) {
                q = /* @__PURE__ */ new Set(), q.add(se);
                break;
              }
              if (!q.has(se)) {
                q.add(se);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Xe:
              var De = P._payload, Te = P._init;
              Y(Te(De), q, H);
              break;
          }
        }
        return q;
      }
      function K(P, q, H, se) {
        for (var De = null, Te = 0; Te < H.length; Te++) {
          var at = H[Te];
          De = Y(at, De, P);
        }
        for (var ft = null, tn = null, Vt = q, Kn = 0, It = 0, In = null; Vt !== null && It < H.length; It++) {
          Vt.index > It ? (In = Vt, Vt = null) : In = Vt.sibling;
          var va = O(P, Vt, H[It], se);
          if (va === null) {
            Vt === null && (Vt = In);
            break;
          }
          e && Vt && va.alternate === null && t(P, Vt), Kn = s(va, Kn, It), tn === null ? ft = va : tn.sibling = va, tn = va, Vt = In;
        }
        if (It === H.length) {
          if (a(P, Vt), jr()) {
            var $r = It;
            Gs(P, $r);
          }
          return ft;
        }
        if (Vt === null) {
          for (; It < H.length; It++) {
            var vi = M(P, H[It], se);
            vi !== null && (Kn = s(vi, Kn, It), tn === null ? ft = vi : tn.sibling = vi, tn = vi);
          }
          if (jr()) {
            var Oa = It;
            Gs(P, Oa);
          }
          return ft;
        }
        for (var Na = i(P, Vt); It < H.length; It++) {
          var ha = I(Na, P, It, H[It], se);
          ha !== null && (e && ha.alternate !== null && Na.delete(ha.key === null ? It : ha.key), Kn = s(ha, Kn, It), tn === null ? ft = ha : tn.sibling = ha, tn = ha);
        }
        if (e && Na.forEach(function(Xf) {
          return t(P, Xf);
        }), jr()) {
          var Fl = It;
          Gs(P, Fl);
        }
        return ft;
      }
      function we(P, q, H, se) {
        var De = Nr(H);
        if (typeof De != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (_g || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _g = !0), H.entries === De && (Tg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tg = !0);
          var Te = De.call(H);
          if (Te)
            for (var at = null, ft = Te.next(); !ft.done; ft = Te.next()) {
              var tn = ft.value;
              at = Y(tn, at, P);
            }
        }
        var Vt = De.call(H);
        if (Vt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, It = null, In = q, va = 0, $r = 0, vi = null, Oa = Vt.next(); In !== null && !Oa.done; $r++, Oa = Vt.next()) {
          In.index > $r ? (vi = In, In = null) : vi = In.sibling;
          var Na = O(P, In, Oa.value, se);
          if (Na === null) {
            In === null && (In = vi);
            break;
          }
          e && In && Na.alternate === null && t(P, In), va = s(Na, va, $r), It === null ? Kn = Na : It.sibling = Na, It = Na, In = vi;
        }
        if (Oa.done) {
          if (a(P, In), jr()) {
            var ha = $r;
            Gs(P, ha);
          }
          return Kn;
        }
        if (In === null) {
          for (; !Oa.done; $r++, Oa = Vt.next()) {
            var Fl = M(P, Oa.value, se);
            Fl !== null && (va = s(Fl, va, $r), It === null ? Kn = Fl : It.sibling = Fl, It = Fl);
          }
          if (jr()) {
            var Xf = $r;
            Gs(P, Xf);
          }
          return Kn;
        }
        for (var rv = i(P, In); !Oa.done; $r++, Oa = Vt.next()) {
          var Xo = I(rv, P, $r, Oa.value, se);
          Xo !== null && (e && Xo.alternate !== null && rv.delete(Xo.key === null ? $r : Xo.key), va = s(Xo, va, $r), It === null ? Kn = Xo : It.sibling = Xo, It = Xo);
        }
        if (e && rv.forEach(function(BD) {
          return t(P, BD);
        }), jr()) {
          var ID = $r;
          Gs(P, ID);
        }
        return Kn;
      }
      function Qe(P, q, H, se) {
        if (q !== null && q.tag === X) {
          a(P, q.sibling);
          var De = l(q, H);
          return De.return = P, De;
        }
        a(P, q);
        var Te = w0(H, P.mode, se);
        return Te.return = P, Te;
      }
      function Be(P, q, H, se) {
        for (var De = H.key, Te = q; Te !== null; ) {
          if (Te.key === De) {
            var at = H.type;
            if (at === Ca) {
              if (Te.tag === de) {
                a(P, Te.sibling);
                var ft = l(Te, H.props.children);
                return ft.return = P, ft._debugSource = H._source, ft._debugOwner = H._owner, ft;
              }
            } else if (Te.elementType === at || // Keep this check inline so it only runs on the false path:
            lx(Te, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof at == "object" && at !== null && at.$$typeof === Xe && tE(at) === Te.type) {
              a(P, Te.sibling);
              var tn = l(Te, H.props);
              return tn.ref = wp(P, Te, H), tn.return = P, tn._debugSource = H._source, tn._debugOwner = H._owner, tn;
            }
            a(P, Te);
            break;
          } else
            t(P, Te);
          Te = Te.sibling;
        }
        if (H.type === Ca) {
          var Vt = Xu(H.props.children, P.mode, se, H.key);
          return Vt.return = P, Vt;
        } else {
          var Kn = R0(H, P.mode, se);
          return Kn.ref = wp(P, q, H), Kn.return = P, Kn;
        }
      }
      function Ut(P, q, H, se) {
        for (var De = H.key, Te = q; Te !== null; ) {
          if (Te.key === De)
            if (Te.tag === W && Te.stateNode.containerInfo === H.containerInfo && Te.stateNode.implementation === H.implementation) {
              a(P, Te.sibling);
              var at = l(Te, H.children || []);
              return at.return = P, at;
            } else {
              a(P, Te);
              break;
            }
          else
            t(P, Te);
          Te = Te.sibling;
        }
        var ft = T0(H, P.mode, se);
        return ft.return = P, ft;
      }
      function Dt(P, q, H, se) {
        var De = typeof H == "object" && H !== null && H.type === Ca && H.key === null;
        if (De && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ai:
              return f(Be(P, q, H, se));
            case Or:
              return f(Ut(P, q, H, se));
            case Xe:
              var Te = H._payload, at = H._init;
              return Dt(P, q, at(Te), se);
          }
          if (Lt(H))
            return K(P, q, H, se);
          if (Nr(H))
            return we(P, q, H, se);
          em(P, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? f(Qe(P, q, "" + H, se)) : (typeof H == "function" && tm(P), a(P, q));
      }
      return Dt;
    }
    var Lf = nE(!0), rE = nE(!1);
    function gT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ST(e, t) {
      for (var a = e.child; a !== null; )
        oD(a, t), a = a.sibling;
    }
    var Ng = ju(null), Mg;
    Mg = {};
    var nm = null, Af = null, Lg = null, rm = !1;
    function am() {
      nm = null, Af = null, Lg = null, rm = !1;
    }
    function aE() {
      rm = !0;
    }
    function iE() {
      rm = !1;
    }
    function oE(e, t, a) {
      da(Ng, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Mg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Mg;
    }
    function Ag(e, t) {
      var a = Ng.current;
      fa(Ng, t), e._currentValue = a;
    }
    function zg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Sl(i.childLanes, t) ? l !== null && !Sl(l.childLanes, t) && (l.childLanes = pt(l.childLanes, t)) : (i.childLanes = pt(i.childLanes, t), l !== null && (l.childLanes = pt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function CT(e, t, a) {
      ET(e, t, a);
    }
    function ET(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === A) {
                var p = gu(a), h = Ml(sn, p);
                h.tag = om;
                var E = i.updateQueue;
                if (E !== null) {
                  var b = E.shared, M = b.pending;
                  M === null ? h.next = h : (h.next = M.next, M.next = h), b.pending = h;
                }
              }
              i.lanes = pt(i.lanes, a);
              var O = i.alternate;
              O !== null && (O.lanes = pt(O.lanes, a)), zg(i.return, a, e), s.lanes = pt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === be)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === vt) {
          var I = i.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = pt(I.lanes, a);
          var Y = I.alternate;
          Y !== null && (Y.lanes = pt(Y.lanes, a)), zg(I, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var K = l.sibling;
            if (K !== null) {
              K.return = l.return, l = K;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function zf(e, t) {
      nm = e, Af = null, Lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function ir(e) {
      rm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Af === null) {
          if (nm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Af = a, nm.dependencies = {
            lanes: re,
            firstContext: a
          };
        } else
          Af = Af.next = a;
      }
      return t;
    }
    var Zs = null;
    function Ug(e) {
      Zs === null ? Zs = [e] : Zs.push(e);
    }
    function bT() {
      if (Zs !== null) {
        for (var e = 0; e < Zs.length; e++) {
          var t = Zs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Zs = null;
      }
    }
    function lE(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Ug(t)) : (a.next = l.next, l.next = a), t.interleaved = a, im(e, i);
    }
    function xT(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Ug(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function RT(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Ug(t)) : (a.next = l.next, l.next = a), t.interleaved = a, im(e, i);
    }
    function Xa(e, t) {
      return im(e, t);
    }
    var wT = im;
    function im(e, t) {
      e.lanes = pt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = pt(a.lanes, t)), a === null && (e.flags & (fn | Pa)) !== We && rx(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = pt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = pt(a.childLanes, t) : (l.flags & (fn | Pa)) !== We && rx(e), i = l, l = l.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var uE = 0, sE = 1, om = 2, jg = 3, lm = !1, Fg, um;
    Fg = !1, um = null;
    function Pg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function cE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Ml(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: uE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (um === l && !Fg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Fg = !0), xk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, wT(e, a);
      } else
        return RT(e, l, t, a);
    }
    function sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Hd(a)) {
          var s = l.lanes;
          s = Xc(s, e.pendingLanes);
          var f = pt(s, a);
          l.lanes = f, Vd(e, f);
        }
      }
    }
    function Hg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var E = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function TT(e, t, a, i, l, s) {
      switch (a.tag) {
        case sE: {
          var f = a.payload;
          if (typeof f == "function") {
            aE();
            var p = f.call(s, i, l);
            {
              if (e.mode & Rt) {
                Hn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              iE();
            }
            return p;
          }
          return f;
        }
        case jg:
          e.flags = e.flags & ~tr | ot;
        case uE: {
          var h = a.payload, E;
          if (typeof h == "function") {
            aE(), E = h.call(s, i, l);
            {
              if (e.mode & Rt) {
                Hn(!0);
                try {
                  h.call(s, i, l);
                } finally {
                  Hn(!1);
                }
              }
              iE();
            }
          } else
            E = h;
          return E == null ? i : Ct({}, i, E);
        }
        case om:
          return lm = !0, i;
      }
      return i;
    }
    function cm(e, t, a, i) {
      var l = e.updateQueue;
      lm = !1, um = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var h = p, E = h.next;
        h.next = null, f === null ? s = E : f.next = E, f = h;
        var b = e.alternate;
        if (b !== null) {
          var M = b.updateQueue, O = M.lastBaseUpdate;
          O !== f && (O === null ? M.firstBaseUpdate = E : O.next = E, M.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var I = l.baseState, Y = re, K = null, we = null, Qe = null, Be = s;
        do {
          var Ut = Be.lane, Dt = Be.eventTime;
          if (Sl(i, Ut)) {
            if (Qe !== null) {
              var q = {
                eventTime: Dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              Qe = Qe.next = q;
            }
            I = TT(e, l, Be, I, t, a);
            var H = Be.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== Vn) {
              e.flags |= xi;
              var se = l.effects;
              se === null ? l.effects = [Be] : se.push(Be);
            }
          } else {
            var P = {
              eventTime: Dt,
              lane: Ut,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            Qe === null ? (we = Qe = P, K = I) : Qe = Qe.next = P, Y = pt(Y, Ut);
          }
          if (Be = Be.next, Be === null) {
            if (p = l.shared.pending, p === null)
              break;
            var De = p, Te = De.next;
            De.next = null, Be = Te, l.lastBaseUpdate = De, l.shared.pending = null;
          }
        } while (!0);
        Qe === null && (K = I), l.baseState = K, l.firstBaseUpdate = we, l.lastBaseUpdate = Qe;
        var at = l.shared.interleaved;
        if (at !== null) {
          var ft = at;
          do
            Y = pt(Y, ft.lane), ft = ft.next;
          while (ft !== at);
        } else s === null && (l.shared.lanes = re);
        Zp(Y), e.lanes = Y, e.memoizedState = I;
      }
      um = null;
    }
    function _T(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function fE() {
      lm = !1;
    }
    function fm() {
      return lm;
    }
    function dE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, _T(f, a));
        }
    }
    var Tp = {}, Iu = ju(Tp), _p = ju(Tp), dm = ju(Tp);
    function pm(e) {
      if (e === Tp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function pE() {
      var e = pm(dm.current);
      return e;
    }
    function Vg(e, t) {
      da(dm, t, e), da(_p, e, e), da(Iu, Tp, e);
      var a = $1(t);
      fa(Iu, e), da(Iu, a, e);
    }
    function Uf(e) {
      fa(Iu, e), fa(_p, e), fa(dm, e);
    }
    function Ig() {
      var e = pm(Iu.current);
      return e;
    }
    function vE(e) {
      pm(dm.current);
      var t = pm(Iu.current), a = Y1(t, e.type);
      t !== a && (da(_p, e, e), da(Iu, a, e));
    }
    function Bg(e) {
      _p.current === e && (fa(Iu, e), fa(_p, e));
    }
    var kT = 0, hE = 1, mE = 1, kp = 2, io = ju(kT);
    function $g(e, t) {
      return (e & t) !== 0;
    }
    function jf(e) {
      return e & hE;
    }
    function Yg(e, t) {
      return e & hE | t;
    }
    function DT(e, t) {
      return e | t;
    }
    function Bu(e, t) {
      da(io, t, e);
    }
    function Ff(e) {
      fa(io, e);
    }
    function OT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function vm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || LC(i) || sg(i))
              return t;
          }
        } else if (t.tag === ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ot) !== We;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Za = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), $o = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Wg = [];
    function Gg() {
      for (var e = 0; e < Wg.length; e++) {
        var t = Wg[e];
        t._workInProgressVersionPrimary = null;
      }
      Wg.length = 0;
    }
    function NT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ke = y.ReactCurrentDispatcher, Dp = y.ReactCurrentBatchConfig, Qg, Pf;
    Qg = /* @__PURE__ */ new Set();
    var Js = re, en = null, dr = null, pr = null, hm = !1, Op = !1, Np = 0, MT = 0, LT = 25, ee = null, Mi = null, $u = -1, Kg = !1;
    function qt() {
      {
        var e = ee;
        Mi === null ? Mi = [e] : Mi.push(e);
      }
    }
    function Ce() {
      {
        var e = ee;
        Mi !== null && ($u++, Mi[$u] !== e && AT(e));
      }
    }
    function Hf(e) {
      e != null && !Lt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function AT(e) {
      {
        var t = ut(en);
        if (!Qg.has(t) && (Qg.add(t), Mi !== null)) {
          for (var a = "", i = 30, l = 0; l <= $u; l++) {
            for (var s = Mi[l], f = l === $u ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function qg(e, t) {
      if (Kg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Le(e[a], t[a]))
          return !1;
      return !0;
    }
    function Vf(e, t, a, i, l, s) {
      Js = s, en = t, Mi = e !== null ? e._debugHookTypes : null, $u = -1, Kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? ke.current = FE : Mi !== null ? ke.current = jE : ke.current = UE;
      var f = a(i, l);
      if (Op) {
        var p = 0;
        do {
          if (Op = !1, Np = 0, p >= LT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Kg = !1, dr = null, pr = null, t.updateQueue = null, $u = -1, ke.current = PE, f = a(i, l);
        } while (Op);
      }
      ke.current = km, t._debugHookTypes = Mi;
      var h = dr !== null && dr.next !== null;
      if (Js = re, en = null, dr = null, pr = null, ee = null, Mi = null, $u = -1, e !== null && (e.flags & lr) !== (t.flags & lr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ie) !== Fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), hm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function If() {
      var e = Np !== 0;
      return Np = 0, e;
    }
    function yE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & wa) !== Fe ? t.flags &= ~(cl | ra | hn | ht) : t.flags &= ~(hn | ht), e.lanes = Os(e.lanes, a);
    }
    function gE() {
      if (ke.current = km, hm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        hm = !1;
      }
      Js = re, en = null, dr = null, pr = null, Mi = null, $u = -1, ee = null, NE = !1, Op = !1, Np = 0;
    }
    function Yo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? en.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Li() {
      var e;
      if (dr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = en.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? en.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function SE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Xg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Zg(e, t, a) {
      var i = Yo(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = FT.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function Jg(e, t, a) {
      var i = Li(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, E = p.next;
          f.next = E, p.next = h;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var b = f.next, M = s.baseState, O = null, I = null, Y = null, K = b;
        do {
          var we = K.lane;
          if (Sl(Js, we)) {
            if (Y !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: K.action,
                hasEagerState: K.hasEagerState,
                eagerState: K.eagerState,
                next: null
              };
              Y = Y.next = Be;
            }
            if (K.hasEagerState)
              M = K.eagerState;
            else {
              var Ut = K.action;
              M = e(M, Ut);
            }
          } else {
            var Qe = {
              lane: we,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null
            };
            Y === null ? (I = Y = Qe, O = M) : Y = Y.next = Qe, en.lanes = pt(en.lanes, we), Zp(we);
          }
          K = K.next;
        } while (K !== null && K !== b);
        Y === null ? O = M : Y.next = I, Le(M, i.memoizedState) || Hp(), i.memoizedState = M, i.baseState = O, i.baseQueue = Y, l.lastRenderedState = M;
      }
      var Dt = l.interleaved;
      if (Dt !== null) {
        var P = Dt;
        do {
          var q = P.lane;
          en.lanes = pt(en.lanes, q), Zp(q), P = P.next;
        } while (P !== Dt);
      } else f === null && (l.lanes = re);
      var H = l.dispatch;
      return [i.memoizedState, H];
    }
    function eS(e, t, a) {
      var i = Li(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var h = f.next, E = h;
        do {
          var b = E.action;
          p = e(p, b), E = E.next;
        } while (E !== h);
        Le(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function KN(e, t, a) {
    }
    function qN(e, t, a) {
    }
    function tS(e, t, a) {
      var i = en, l = Yo(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      } else {
        if (s = t(), !Pf) {
          var p = t();
          Le(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
        }
        var h = Gm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ds(h, Js) || CE(i, t, s);
      }
      l.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return l.queue = E, Cm(bE.bind(null, i, E, e), [e]), i.flags |= hn, Mp(cr | Fr, EE.bind(null, i, E, s, t), void 0, null), s;
    }
    function mm(e, t, a) {
      var i = en, l = Li(), s = t();
      if (!Pf) {
        var f = t();
        Le(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      }
      var p = l.memoizedState, h = !Le(p, s);
      h && (l.memoizedState = s, Hp());
      var E = l.queue;
      if (Ap(bE.bind(null, i, E, e), [e]), E.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= hn, Mp(cr | Fr, EE.bind(null, i, E, s, t), void 0, null);
        var b = Gm();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ds(b, Js) || CE(i, t, s);
      }
      return s;
    }
    function CE(e, t, a) {
      e.flags |= Ss;
      var i = {
        getSnapshot: t,
        value: a
      }, l = en.updateQueue;
      if (l === null)
        l = SE(), en.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function EE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, xE(t) && RE(e);
    }
    function bE(e, t, a) {
      var i = function() {
        xE(t) && RE(e);
      };
      return a(i);
    }
    function xE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Le(a, i);
      } catch {
        return !0;
      }
    }
    function RE(e) {
      var t = Xa(e, Ye);
      t !== null && yr(t, e, Ye, sn);
    }
    function ym(e) {
      var t = Yo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: Xg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = PT.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function nS(e) {
      return Jg(Xg);
    }
    function rS(e) {
      return eS(Xg);
    }
    function Mp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = SE(), en.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function aS(e) {
      var t = Yo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function gm(e) {
      var t = Li();
      return t.memoizedState;
    }
    function Lp(e, t, a, i) {
      var l = Yo(), s = i === void 0 ? null : i;
      en.flags |= e, l.memoizedState = Mp(cr | t, a, void 0, s);
    }
    function Sm(e, t, a, i) {
      var l = Li(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (qg(s, h)) {
            l.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, l.memoizedState = Mp(cr | t, a, f, s);
    }
    function Cm(e, t) {
      return (en.mode & wa) !== Fe ? Lp(cl | hn | Mo, Fr, e, t) : Lp(hn | Mo, Fr, e, t);
    }
    function Ap(e, t) {
      return Sm(hn, Fr, e, t);
    }
    function iS(e, t) {
      return Lp(ht, $o, e, t);
    }
    function Em(e, t) {
      return Sm(ht, $o, e, t);
    }
    function oS(e, t) {
      var a = ht;
      return a |= na, (en.mode & wa) !== Fe && (a |= ra), Lp(a, fr, e, t);
    }
    function bm(e, t) {
      return Sm(ht, fr, e, t);
    }
    function wE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function lS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = ht;
      return l |= na, (en.mode & wa) !== Fe && (l |= ra), Lp(l, fr, wE.bind(null, t, e), i);
    }
    function xm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Sm(ht, fr, wE.bind(null, t, e), i);
    }
    function zT(e, t) {
    }
    var Rm = zT;
    function uS(e, t) {
      var a = Yo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function wm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (qg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function sS(e, t) {
      var a = Yo(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Tm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (qg(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function cS(e) {
      var t = Yo();
      return t.memoizedState = e, e;
    }
    function TE(e) {
      var t = Li(), a = dr, i = a.memoizedState;
      return kE(t, i, e);
    }
    function _E(e) {
      var t = Li();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return kE(t, a, e);
    }
    function kE(e, t, a) {
      var i = !nh(Js);
      if (i) {
        if (!Le(a, t)) {
          var l = ih();
          en.lanes = pt(en.lanes, l), Zp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function UT(e, t, a) {
      var i = Ya();
      kn(Oy(i, Zi)), e(!0);
      var l = Dp.transition;
      Dp.transition = {};
      var s = Dp.transition;
      Dp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (kn(i), Dp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && D("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function fS() {
      var e = ym(!1), t = e[0], a = e[1], i = UT.bind(null, a), l = Yo();
      return l.memoizedState = i, [t, i];
    }
    function DE() {
      var e = nS(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function OE() {
      var e = rS(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var NE = !1;
    function jT() {
      return NE;
    }
    function dS() {
      var e = Yo(), t = Gm(), a = t.identifierPrefix, i;
      if (jr()) {
        var l = eT();
        i = ":" + a + "R" + l;
        var s = Np++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = MT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function _m() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function FT(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ME(e))
        LE(t, l);
      else {
        var s = lE(e, t, l, i);
        if (s !== null) {
          var f = Da();
          yr(s, e, i, f), AE(s, t, i);
        }
      }
      zE(e, i);
    }
    function PT(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ME(e))
        LE(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === re && (s === null || s.lanes === re)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ke.current, ke.current = oo;
            try {
              var h = t.lastRenderedState, E = f(h, a);
              if (l.hasEagerState = !0, l.eagerState = E, Le(E, h)) {
                xT(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ke.current = p;
            }
          }
        }
        var b = lE(e, t, l, i);
        if (b !== null) {
          var M = Da();
          yr(b, e, i, M), AE(b, t, i);
        }
      }
      zE(e, i);
    }
    function ME(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function LE(e, t) {
      Op = hm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function AE(e, t, a) {
      if (Hd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var l = pt(i, a);
        t.lanes = l, Vd(e, l);
      }
    }
    function zE(e, t, a) {
      xs(e, t);
    }
    var km = {
      readContext: ir,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: ae
    }, UE = null, jE = null, FE = null, PE = null, Wo = null, oo = null, Dm = null;
    {
      var pS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, st = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      UE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", qt(), Hf(t), uS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", qt(), Hf(t), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", qt(), Hf(a), lS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", qt(), Hf(t), iS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", qt(), Hf(t), oS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", qt(), Hf(t);
          var a = ke.current;
          ke.current = Wo;
          try {
            return sS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", qt();
          var i = ke.current;
          ke.current = Wo;
          try {
            return Zg(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", qt(), aS(e);
        },
        useState: function(e) {
          ee = "useState", qt();
          var t = ke.current;
          ke.current = Wo;
          try {
            return ym(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", qt(), cS(e);
        },
        useTransition: function() {
          return ee = "useTransition", qt(), fS();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", qt(), tS(e, t, a);
        },
        useId: function() {
          return ee = "useId", qt(), dS();
        },
        unstable_isNewReconciler: ae
      }, jE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ce(), uS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ce(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ce(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ce(), lS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ce(), iS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ce(), oS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ce();
          var a = ke.current;
          ke.current = Wo;
          try {
            return sS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ce();
          var i = ke.current;
          ke.current = Wo;
          try {
            return Zg(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ce(), aS(e);
        },
        useState: function(e) {
          ee = "useState", Ce();
          var t = ke.current;
          ke.current = Wo;
          try {
            return ym(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ce(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ce(), cS(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ce(), fS();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ce(), tS(e, t, a);
        },
        useId: function() {
          return ee = "useId", Ce(), dS();
        },
        unstable_isNewReconciler: ae
      }, FE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ce(), wm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ce(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ce(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ce(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ce(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ce(), bm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ce();
          var a = ke.current;
          ke.current = oo;
          try {
            return Tm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ce();
          var i = ke.current;
          ke.current = oo;
          try {
            return Jg(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ce(), gm();
        },
        useState: function(e) {
          ee = "useState", Ce();
          var t = ke.current;
          ke.current = oo;
          try {
            return nS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ce(), Rm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ce(), TE(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ce(), DE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ce(), mm(e, t);
        },
        useId: function() {
          return ee = "useId", Ce(), _m();
        },
        unstable_isNewReconciler: ae
      }, PE = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Ce(), wm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Ce(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Ce(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", Ce(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Ce(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Ce(), bm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Ce();
          var a = ke.current;
          ke.current = Dm;
          try {
            return Tm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", Ce();
          var i = ke.current;
          ke.current = Dm;
          try {
            return eS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Ce(), gm();
        },
        useState: function(e) {
          ee = "useState", Ce();
          var t = ke.current;
          ke.current = Dm;
          try {
            return rS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Ce(), Rm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Ce(), _E(e);
        },
        useTransition: function() {
          return ee = "useTransition", Ce(), OE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", Ce(), mm(e, t);
        },
        useId: function() {
          return ee = "useId", Ce(), _m();
        },
        unstable_isNewReconciler: ae
      }, Wo = {
        readContext: function(e) {
          return pS(), ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", st(), qt(), uS(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", st(), qt(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", st(), qt(), Cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", st(), qt(), lS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", st(), qt(), iS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", st(), qt(), oS(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", st(), qt();
          var a = ke.current;
          ke.current = Wo;
          try {
            return sS(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", st(), qt();
          var i = ke.current;
          ke.current = Wo;
          try {
            return Zg(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", st(), qt(), aS(e);
        },
        useState: function(e) {
          ee = "useState", st(), qt();
          var t = ke.current;
          ke.current = Wo;
          try {
            return ym(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", st(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", st(), qt(), cS(e);
        },
        useTransition: function() {
          return ee = "useTransition", st(), qt(), fS();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", st(), qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", st(), qt(), tS(e, t, a);
        },
        useId: function() {
          return ee = "useId", st(), qt(), dS();
        },
        unstable_isNewReconciler: ae
      }, oo = {
        readContext: function(e) {
          return pS(), ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", st(), Ce(), wm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", st(), Ce(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", st(), Ce(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", st(), Ce(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", st(), Ce(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", st(), Ce(), bm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", st(), Ce();
          var a = ke.current;
          ke.current = oo;
          try {
            return Tm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", st(), Ce();
          var i = ke.current;
          ke.current = oo;
          try {
            return Jg(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", st(), Ce(), gm();
        },
        useState: function(e) {
          ee = "useState", st(), Ce();
          var t = ke.current;
          ke.current = oo;
          try {
            return nS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", st(), Ce(), Rm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", st(), Ce(), TE(e);
        },
        useTransition: function() {
          return ee = "useTransition", st(), Ce(), DE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", st(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", st(), Ce(), mm(e, t);
        },
        useId: function() {
          return ee = "useId", st(), Ce(), _m();
        },
        unstable_isNewReconciler: ae
      }, Dm = {
        readContext: function(e) {
          return pS(), ir(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", st(), Ce(), wm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", st(), Ce(), ir(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", st(), Ce(), Ap(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ee = "useImperativeHandle", st(), Ce(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", st(), Ce(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", st(), Ce(), bm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", st(), Ce();
          var a = ke.current;
          ke.current = oo;
          try {
            return Tm(e, t);
          } finally {
            ke.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ee = "useReducer", st(), Ce();
          var i = ke.current;
          ke.current = oo;
          try {
            return eS(e, t, a);
          } finally {
            ke.current = i;
          }
        },
        useRef: function(e) {
          return ee = "useRef", st(), Ce(), gm();
        },
        useState: function(e) {
          ee = "useState", st(), Ce();
          var t = ke.current;
          ke.current = oo;
          try {
            return rS(e);
          } finally {
            ke.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", st(), Ce(), Rm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", st(), Ce(), _E(e);
        },
        useTransition: function() {
          return ee = "useTransition", st(), Ce(), OE();
        },
        useMutableSource: function(e, t, a) {
          return ee = "useMutableSource", st(), Ce(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ee = "useSyncExternalStore", st(), Ce(), mm(e, t);
        },
        useId: function() {
          return ee = "useId", st(), Ce(), _m();
        },
        unstable_isNewReconciler: ae
      };
    }
    var Yu = S.unstable_now, HE = 0, Om = -1, zp = -1, Nm = -1, vS = !1, Mm = !1;
    function VE() {
      return vS;
    }
    function HT() {
      Mm = !0;
    }
    function VT() {
      vS = !1, Mm = !1;
    }
    function IT() {
      vS = Mm, Mm = !1;
    }
    function IE() {
      return HE;
    }
    function BE() {
      HE = Yu();
    }
    function hS(e) {
      zp = Yu(), e.actualStartTime < 0 && (e.actualStartTime = Yu());
    }
    function $E(e) {
      zp = -1;
    }
    function Lm(e, t) {
      if (zp >= 0) {
        var a = Yu() - zp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), zp = -1;
      }
    }
    function Go(e) {
      if (Om >= 0) {
        var t = Yu() - Om;
        Om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ge:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function mS(e) {
      if (Nm >= 0) {
        var t = Yu() - Nm;
        Nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ge:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Qo() {
      Om = Yu();
    }
    function yS() {
      Nm = Yu();
    }
    function gS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function lo(e, t) {
      if (e && e.defaultProps) {
        var a = Ct({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var SS = {}, CS, ES, bS, xS, RS, YE, Am, wS, TS, _S, Up;
    {
      CS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), Up = /* @__PURE__ */ new Set();
      var WE = /* @__PURE__ */ new Set();
      Am = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          WE.has(a) || (WE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, YE = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          RS.has(a) || (RS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(SS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(SS);
    }
    function kS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Rt) {
          Hn(!0);
          try {
            s = a(i, l);
          } finally {
            Hn(!1);
          }
        }
        YE(t, s);
      }
      var f = s == null ? l : Ct({}, l, s);
      if (e.memoizedState = f, e.lanes === re) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var DS = {
      isMounted: xa,
      enqueueSetState: function(e, t, a) {
        var i = ja(e), l = Da(), s = Ku(i), f = Ml(l, s);
        f.payload = t, a != null && (Am(a, "setState"), f.callback = a);
        var p = Vu(i, f, s);
        p !== null && (yr(p, i, s, l), sm(p, i, s)), xs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ja(e), l = Da(), s = Ku(i), f = Ml(l, s);
        f.tag = sE, f.payload = t, a != null && (Am(a, "replaceState"), f.callback = a);
        var p = Vu(i, f, s);
        p !== null && (yr(p, i, s, l), sm(p, i, s)), xs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ja(e), i = Da(), l = Ku(a), s = Ml(i, l);
        s.tag = om, t != null && (Am(t, "forceUpdate"), s.callback = t);
        var f = Vu(a, s, l);
        f !== null && (yr(f, a, l, i), sm(f, a, l)), Ac(a, l);
      }
    };
    function GE(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Rt) {
            Hn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              Hn(!1);
            }
          }
          h === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !nt(a, i) || !nt(l, s) : !0;
    }
    function BT(e, t, a) {
      var i = e.stateNode;
      {
        var l = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Up.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rt) === Fe && (Up.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Up.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rt) === Fe && (Up.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !TS.has(t) && (TS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !bS.has(t) && (bS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || Lt(p)) && g("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function QE(e, t) {
      t.updater = DS, e.stateNode = t, au(t, e), t._reactInternalInstance = SS;
    }
    function KE(e, t, a) {
      var i = !1, l = di, s = di, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === oe && f._context === void 0
        );
        if (!p && !_S.has(t)) {
          _S.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === T ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ir(f);
      else {
        l = kf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? Df(e, l) : di;
      }
      var b = new t(a, s);
      if (e.mode & Rt) {
        Hn(!0);
        try {
          b = new t(a, s);
        } finally {
          Hn(!1);
        }
      }
      var M = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      QE(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var O = Mt(t) || "Component";
          ES.has(O) || (ES.add(O), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, b.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var I = null, Y = null, K = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? K = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (K = "UNSAFE_componentWillUpdate"), I !== null || Y !== null || K !== null) {
            var we = Mt(t) || "Component", Qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            xS.has(we) || (xS.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, Qe, I !== null ? `
  ` + I : "", Y !== null ? `
  ` + Y : "", K !== null ? `
  ` + K : ""));
          }
        }
      }
      return i && FC(e, l, s), b;
    }
    function $T(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ut(e) || "Component"), DS.enqueueReplaceState(t, t.state, null));
    }
    function qE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ut(e) || "Component";
          CS.has(s) || (CS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        DS.enqueueReplaceState(t, t.state, null);
      }
    }
    function OS(e, t, a, i) {
      BT(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Pg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ir(s);
      else {
        var f = kf(e, t, !0);
        l.context = Df(e, f);
      }
      {
        if (l.state === a) {
          var p = Mt(t) || "Component";
          wS.has(p) || (wS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rt && ao.recordLegacyContextWarning(e, l), ao.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (kS(e, t, h, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && ($T(e, l), cm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var E = ht;
        E |= na, (e.mode & wa) !== Fe && (E |= ra), e.flags |= E;
      }
    }
    function YT(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, h = di;
      if (typeof p == "object" && p !== null)
        h = ir(p);
      else {
        var E = kf(e, t, !0);
        h = Df(e, E);
      }
      var b = t.getDerivedStateFromProps, M = typeof b == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !M && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== h) && qE(e, l, a, h), fE();
      var O = e.memoizedState, I = l.state = O;
      if (cm(e, a, l, i), I = e.memoizedState, s === a && O === I && !Yh() && !fm()) {
        if (typeof l.componentDidMount == "function") {
          var Y = ht;
          Y |= na, (e.mode & wa) !== Fe && (Y |= ra), e.flags |= Y;
        }
        return !1;
      }
      typeof b == "function" && (kS(e, t, b, a), I = e.memoizedState);
      var K = fm() || GE(e, t, s, a, O, I, h);
      if (K) {
        if (!M && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var we = ht;
          we |= na, (e.mode & wa) !== Fe && (we |= ra), e.flags |= we;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Qe = ht;
          Qe |= na, (e.mode & wa) !== Fe && (Qe |= ra), e.flags |= Qe;
        }
        e.memoizedProps = a, e.memoizedState = I;
      }
      return l.props = a, l.state = I, l.context = h, K;
    }
    function WT(e, t, a, i, l) {
      var s = t.stateNode;
      cE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : lo(t.type, f);
      s.props = p;
      var h = t.pendingProps, E = s.context, b = a.contextType, M = di;
      if (typeof b == "object" && b !== null)
        M = ir(b);
      else {
        var O = kf(t, a, !0);
        M = Df(t, O);
      }
      var I = a.getDerivedStateFromProps, Y = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || E !== M) && qE(t, s, i, M), fE();
      var K = t.memoizedState, we = s.state = K;
      if (cm(t, i, s, l), we = t.memoizedState, f === h && K === we && !Yh() && !fm() && !Ee)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fa), !1;
      typeof I == "function" && (kS(t, a, I, i), we = t.memoizedState);
      var Qe = fm() || GE(t, a, p, i, K, we, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ee;
      return Qe ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, M), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, M)), typeof s.componentDidUpdate == "function" && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || K !== e.memoizedState) && (t.flags |= Fa), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = M, Qe;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Yl(t),
        digest: null
      };
    }
    function NS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function GT(e, t) {
      return !0;
    }
    function MS(e, t) {
      try {
        var a = GT(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(i);
        }
        var p = l ? ut(l) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === F)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = ut(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var M = h + `
` + f + `

` + ("" + E);
        console.error(M);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var QT = typeof WeakMap == "function" ? WeakMap : Map;
    function XE(e, t, a) {
      var i = Ml(sn, a);
      i.tag = jg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Hk(l), MS(e, t);
      }, i;
    }
    function LS(e, t, a) {
      var i = Ml(sn, a);
      i.tag = jg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          ux(e), MS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        ux(e), MS(e, t), typeof l != "function" && Fk(this);
        var h = t.value, E = t.stack;
        this.componentDidCatch(h, {
          componentStack: E !== null ? E : ""
        }), typeof l != "function" && (sa(e.lanes, Ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ut(e) || "Unknown"));
      }), i;
    }
    function ZE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new QT(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Vk.bind(null, e, t, a);
        Ra && Jp(e, a), t.then(s, s);
      }
    }
    function KT(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function qT(e, t) {
      var a = e.tag;
      if ((e.mode & Ie) === Fe && (a === j || a === ze || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function JE(e) {
      var t = e;
      do {
        if (t.tag === Re && OT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function eb(e, t, a, i, l) {
      if ((e.mode & Ie) === Fe) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= ot, a.flags |= Cs, a.flags &= ~(bc | Ea), a.tag === A) {
            var s = a.alternate;
            if (s === null)
              a.tag = Xt;
            else {
              var f = Ml(sn, Ye);
              f.tag = om, Vu(a, f, Ye);
            }
          }
          a.lanes = pt(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = l, e;
    }
    function XT(e, t, a, i, l) {
      if (a.flags |= Ea, Ra && Jp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        qT(a), jr() && a.mode & Ie && YC();
        var f = JE(t);
        if (f !== null) {
          f.flags &= ~_n, eb(f, t, a, e, l), f.mode & Ie && ZE(e, s, l), KT(f, e, s);
          return;
        } else {
          if (!Pd(l)) {
            ZE(e, s, l), d0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & Ie) {
        YC();
        var h = JE(t);
        if (h !== null) {
          (h.flags & tr) === We && (h.flags |= _n), eb(h, t, a, e, l), wg(ec(i, a));
          return;
        }
      }
      i = ec(i, a), Ok(i);
      var E = t;
      do {
        switch (E.tag) {
          case F: {
            var b = i;
            E.flags |= tr;
            var M = gu(l);
            E.lanes = pt(E.lanes, M);
            var O = XE(E, b, M);
            Hg(E, O);
            return;
          }
          case A:
            var I = i, Y = E.type, K = E.stateNode;
            if ((E.flags & ot) === We && (typeof Y.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && !Jb(K))) {
              E.flags |= tr;
              var we = gu(l);
              E.lanes = pt(E.lanes, we);
              var Qe = LS(E, I, we);
              Hg(E, Qe);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function ZT() {
      return null;
    }
    var jp = y.ReactCurrentOwner, uo = !1, AS, Fp, zS, US, jS, tc, FS, zm, Pp;
    AS = {}, Fp = {}, zS = {}, US = {}, jS = {}, tc = !1, FS = {}, zm = {}, Pp = {};
    function _a(e, t, a, i) {
      e === null ? t.child = rE(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function JT(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function tb(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && no(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, h, E;
      zf(t, l), uu(t);
      {
        if (jp.current = t, Jr(!0), h = Vf(e, t, f, i, p, l), E = If(), t.mode & Rt) {
          Hn(!0);
          try {
            h = Vf(e, t, f, i, p, l), E = If();
          } finally {
            Hn(!1);
          }
        }
        Jr(!1);
      }
      return oa(), e !== null && !uo ? (yE(e, t, l), Ll(e, t, l)) : (jr() && E && Sg(t), t.flags |= Oo, _a(e, t, h, l), t.child);
    }
    function nb(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (aD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = He, t.type = f, VS(t, s), rb(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && no(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          ), a.defaultProps !== void 0) {
            var h = Mt(s) || "Unknown";
            Pp[h] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), Pp[h] = !0);
          }
        }
        var E = x0(a.type, null, i, t, t.mode, l);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var b = a.type, M = b.propTypes;
        M && no(
          M,
          i,
          // Resolved props
          "prop",
          Mt(b)
        );
      }
      var O = e.child, I = GS(e, l);
      if (!I) {
        var Y = O.memoizedProps, K = a.compare;
        if (K = K !== null ? K : nt, K(Y, i) && e.ref === t.ref)
          return Ll(e, t, l);
      }
      t.flags |= Oo;
      var we = oc(O, i);
      return we.ref = t.ref, we.return = t, t.child = we, we;
    }
    function rb(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && no(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (nt(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (uo = !1, t.pendingProps = i = b, GS(e, l))
            (e.flags & Cs) !== We && (uo = !0);
          else return t.lanes = e.lanes, Ll(e, t, l);
      }
      return PS(e, t, a, i, l);
    }
    function ab(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || he)
        if ((t.mode & Ie) === Fe) {
          var f = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Qm(t, a);
        } else if (sa(a, wr)) {
          var M = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var O = s !== null ? s.baseLanes : a;
          Qm(t, O);
        } else {
          var p = null, h;
          if (s !== null) {
            var E = s.baseLanes;
            h = pt(E, a);
          } else
            h = a;
          t.lanes = t.childLanes = wr;
          var b = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, Qm(t, h), null;
        }
      else {
        var I;
        s !== null ? (I = pt(s.baseLanes, a), t.memoizedState = null) : I = a, Qm(t, I);
      }
      return _a(e, t, l, a), t.child;
    }
    function e_(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function t_(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function n_(e, t, a) {
      {
        t.flags |= ht;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return _a(e, t, s, a), t.child;
    }
    function ib(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ta, t.flags |= Td);
    }
    function PS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && no(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = kf(t, a, !0);
        f = Df(t, p);
      }
      var h, E;
      zf(t, l), uu(t);
      {
        if (jp.current = t, Jr(!0), h = Vf(e, t, a, i, f, l), E = If(), t.mode & Rt) {
          Hn(!0);
          try {
            h = Vf(e, t, a, i, f, l), E = If();
          } finally {
            Hn(!1);
          }
        }
        Jr(!1);
      }
      return oa(), e !== null && !uo ? (yE(e, t, l), Ll(e, t, l)) : (jr() && E && Sg(t), t.flags |= Oo, _a(e, t, h, l), t.child);
    }
    function ob(e, t, a, i, l) {
      {
        switch (SD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= ot, t.flags |= tr;
            var E = new Error("Simulated error coming from DevTools"), b = gu(l);
            t.lanes = pt(t.lanes, b);
            var M = LS(t, ec(E, t), b);
            Hg(t, M);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && no(
            O,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var I;
      Bo(a) ? (I = !0, Gh(t)) : I = !1, zf(t, l);
      var Y = t.stateNode, K;
      Y === null ? (jm(e, t), KE(t, a, i), OS(t, a, i, l), K = !0) : e === null ? K = YT(t, a, i, l) : K = WT(e, t, a, i, l);
      var we = HS(e, t, a, K, I, l);
      {
        var Qe = t.stateNode;
        K && Qe.props !== i && (tc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ut(t) || "a component"), tc = !0);
      }
      return we;
    }
    function HS(e, t, a, i, l, s) {
      ib(e, t);
      var f = (t.flags & ot) !== We;
      if (!i && !f)
        return l && VC(t, a, !1), Ll(e, t, s);
      var p = t.stateNode;
      jp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, $E();
      else {
        uu(t);
        {
          if (Jr(!0), h = p.render(), t.mode & Rt) {
            Hn(!0);
            try {
              p.render();
            } finally {
              Hn(!1);
            }
          }
          Jr(!1);
        }
        oa();
      }
      return t.flags |= Oo, e !== null && f ? JT(e, t, h, s) : _a(e, t, h, s), t.memoizedState = p.state, l && VC(t, a, !0), t.child;
    }
    function lb(e) {
      var t = e.stateNode;
      t.pendingContext ? PC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && PC(e, t.context, !1), Vg(e, t.containerInfo);
    }
    function r_(e, t, a) {
      if (lb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      cE(e, t), cm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = h, t.memoizedState = h, t.flags & _n) {
          var b = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ub(e, t, p, a, b);
        } else if (p !== s) {
          var M = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ub(e, t, p, a, M);
        } else {
          oT(t);
          var O = rE(t, null, p, a);
          t.child = O;
          for (var I = O; I; )
            I.flags = I.flags & ~fn | Pa, I = I.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Ll(e, t, a);
        _a(e, t, p, a);
      }
      return t.child;
    }
    function ub(e, t, a, i, l) {
      return Mf(), wg(l), t.flags |= _n, _a(e, t, a, i), t.child;
    }
    function a_(e, t, a) {
      vE(t), e === null && Rg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = ig(i, l);
      return p ? f = null : s !== null && ig(i, s) && (t.flags |= Kt), ib(e, t), _a(e, t, f, a), t.child;
    }
    function i_(e, t) {
      return e === null && Rg(t), null;
    }
    function o_(e, t, a, i) {
      jm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var E = t.tag = iD(h), b = lo(h, l), M;
      switch (E) {
        case j:
          return VS(t, h), t.type = h = qf(h), M = PS(null, t, h, b, i), M;
        case A:
          return t.type = h = y0(h), M = ob(null, t, h, b, i), M;
        case ze:
          return t.type = h = g0(h), M = tb(null, t, h, b, i), M;
        case it: {
          if (t.type !== t.elementType) {
            var O = h.propTypes;
            O && no(
              O,
              b,
              // Resolved for outer only
              "prop",
              Mt(h)
            );
          }
          return M = nb(
            null,
            t,
            h,
            lo(h.type, b),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var I = "";
      throw h !== null && typeof h == "object" && h.$$typeof === Xe && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function l_(e, t, a, i, l) {
      jm(e, t), t.tag = A;
      var s;
      return Bo(a) ? (s = !0, Gh(t)) : s = !1, zf(t, l), KE(t, a, i), OS(t, a, i, l), HS(null, t, a, !0, s, l);
    }
    function u_(e, t, a, i) {
      jm(e, t);
      var l = t.pendingProps, s;
      {
        var f = kf(t, a, !1);
        s = Df(t, f);
      }
      zf(t, i);
      var p, h;
      uu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = Mt(a) || "Unknown";
          AS[E] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), AS[E] = !0);
        }
        t.mode & Rt && ao.recordLegacyContextWarning(t, null), Jr(!0), jp.current = t, p = Vf(null, t, a, l, s, i), h = If(), Jr(!1);
      }
      if (oa(), t.flags |= Oo, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var b = Mt(a) || "Unknown";
        Fp[b] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Fp[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var M = Mt(a) || "Unknown";
          Fp[M] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Fp[M] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return Bo(a) ? (O = !0, Gh(t)) : O = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Pg(t), QE(t, p), OS(t, a, l, i), HS(null, t, a, !0, O, i);
      } else {
        if (t.tag = j, t.mode & Rt) {
          Hn(!0);
          try {
            p = Vf(null, t, a, l, s, i), h = If();
          } finally {
            Hn(!1);
          }
        }
        return jr() && h && Sg(t), _a(null, t, p, i), VS(t, a), t.child;
      }
    }
    function VS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), jS[l] || (jS[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Mt(t) || "Unknown";
          Pp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Pp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Mt(t) || "Unknown";
          US[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), US[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Mt(t) || "Unknown";
          zS[h] || (g("%s: Function components do not support contextType.", h), zS[h] = !0);
        }
      }
    }
    var IS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function BS(e) {
      return {
        baseLanes: e,
        cachePool: ZT(),
        transitions: null
      };
    }
    function s_(e, t) {
      var a = null;
      return {
        baseLanes: pt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function c_(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return $g(e, kp);
    }
    function f_(e, t) {
      return Os(e.childLanes, t);
    }
    function sb(e, t, a) {
      var i = t.pendingProps;
      CD(t) && (t.flags |= ot);
      var l = io.current, s = !1, f = (t.flags & ot) !== We;
      if (f || c_(l, e) ? (s = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (l = DT(l, mE)), l = jf(l), Bu(t, l), e === null) {
        Rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return m_(t, h);
        }
        var E = i.children, b = i.fallback;
        if (s) {
          var M = d_(t, E, b, a), O = t.child;
          return O.memoizedState = BS(a), t.memoizedState = IS, M;
        } else
          return $S(t, E);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var Y = I.dehydrated;
          if (Y !== null)
            return y_(e, t, f, i, Y, I, a);
        }
        if (s) {
          var K = i.fallback, we = i.children, Qe = v_(e, t, we, K, a), Be = t.child, Ut = e.child.memoizedState;
          return Be.memoizedState = Ut === null ? BS(a) : s_(Ut, a), Be.childLanes = f_(e, a), t.memoizedState = IS, Qe;
        } else {
          var Dt = i.children, P = p_(e, t, Dt, a);
          return t.memoizedState = null, P;
        }
      }
    }
    function $S(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = YS(l, i);
      return s.return = e, e.child = s, s;
    }
    function d_(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (l & Ie) === Fe && s !== null ? (p = s, p.childLanes = re, p.pendingProps = f, e.mode & lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = Xu(a, l, i, null)) : (p = YS(f, l), h = Xu(a, l, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function YS(e, t, a) {
      return cx(e, t, re, null);
    }
    function cb(e, t) {
      return oc(e, t);
    }
    function p_(e, t, a, i) {
      var l = e.child, s = l.sibling, f = cb(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ie) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= $t) : p.push(s);
      }
      return t.child = f, f;
    }
    function v_(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ie) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var b = t.child;
        E = b, E.childLanes = re, E.pendingProps = h, t.mode & lt && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = cb(f, h), E.subtreeFlags = f.subtreeFlags & lr;
      var M;
      return p !== null ? M = oc(p, i) : (M = Xu(i, s, l, null), M.flags |= fn), M.return = t, E.return = t, E.sibling = M, t.child = E, M;
    }
    function Um(e, t, a, i) {
      i !== null && wg(i), Lf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = $S(t, s);
      return f.flags |= fn, t.memoizedState = null, f;
    }
    function h_(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = YS(f, s), h = Xu(i, s, l, null);
      return h.flags |= fn, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & Ie) !== Fe && Lf(t, e.child, null, l), h;
    }
    function m_(e, t, a) {
      return (e.mode & Ie) === Fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : sg(t) ? e.lanes = Xi : e.lanes = wr, null;
    }
    function y_(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & _n) {
          t.flags &= ~_n;
          var P = NS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Um(e, t, f, P);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var q = i.children, H = i.fallback, se = h_(e, t, q, H, f), De = t.child;
          return De.memoizedState = BS(f), t.memoizedState = IS, se;
        }
      else {
        if (aT(), (t.mode & Ie) === Fe)
          return Um(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (sg(l)) {
          var p, h, E;
          {
            var b = Ew(l);
            p = b.digest, h = b.message, E = b.stack;
          }
          var M;
          h ? M = new Error(h) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = NS(M, p, E);
          return Um(e, t, f, O);
        }
        var I = sa(f, e.childLanes);
        if (uo || I) {
          var Y = Gm();
          if (Y !== null) {
            var K = uh(Y, f);
            if (K !== Vn && K !== s.retryLane) {
              s.retryLane = K;
              var we = sn;
              Xa(e, K), yr(Y, e, K, we);
            }
          }
          d0();
          var Qe = NS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Um(e, t, f, Qe);
        } else if (LC(l)) {
          t.flags |= ot, t.child = e.child;
          var Be = Ik.bind(null, e);
          return bw(l, Be), null;
        } else {
          lT(t, l, s.treeContext);
          var Ut = i.children, Dt = $S(t, Ut);
          return Dt.flags |= Pa, Dt;
        }
      }
    }
    function fb(e, t, a) {
      e.lanes = pt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = pt(i.lanes, t)), zg(e.return, t, a);
    }
    function g_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var l = i.memoizedState;
          l !== null && fb(i, a, e);
        } else if (i.tag === ct)
          fb(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function S_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && vm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function C_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !FS[e])
        if (FS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function E_(e, t) {
      e !== void 0 && !zm[e] && (e !== "collapsed" && e !== "hidden" ? (zm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (zm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function db(e, t) {
      {
        var a = Lt(e), i = !a && typeof Nr(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function b_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!db(e[a], a))
              return;
        } else {
          var i = Nr(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!db(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function WS(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function pb(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      C_(l), E_(s, l), b_(f, l), _a(e, t, f, a);
      var p = io.current, h = $g(p, kp);
      if (h)
        p = Yg(p, kp), t.flags |= ot;
      else {
        var E = e !== null && (e.flags & ot) !== We;
        E && g_(t, t.child, a), p = jf(p);
      }
      if (Bu(t, p), (t.mode & Ie) === Fe)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var b = S_(t.child), M;
            b === null ? (M = t.child, t.child = null) : (M = b.sibling, b.sibling = null), WS(
              t,
              !1,
              // isBackwards
              M,
              b,
              s
            );
            break;
          }
          case "backwards": {
            var O = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var Y = I.alternate;
              if (Y !== null && vm(Y) === null) {
                t.child = I;
                break;
              }
              var K = I.sibling;
              I.sibling = O, O = I, I = K;
            }
            WS(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            WS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function x_(e, t, a) {
      Vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var vb = !1;
    function R_(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || vb || (vb = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && no(h, s, "prop", "Context.Provider");
      }
      if (oE(t, l, p), f !== null) {
        var E = f.value;
        if (Le(E, p)) {
          if (f.children === s.children && !Yh())
            return Ll(e, t, a);
        } else
          CT(t, l, a);
      }
      var b = s.children;
      return _a(e, t, b, a), t.child;
    }
    var hb = !1;
    function w_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (hb || (hb = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = ir(i);
      uu(t);
      var p;
      return jp.current = t, Jr(!0), p = s(f), Jr(!1), oa(), t.flags |= Oo, _a(e, t, p, a), t.child;
    }
    function Hp() {
      uo = !0;
    }
    function jm(e, t) {
      (t.mode & Ie) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= fn);
    }
    function Ll(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), $E(), Zp(t.lanes), sa(a, t.childLanes) ? (gT(e, t), t.child) : null;
    }
    function T_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= $t) : s.push(e), a.flags |= fn, a;
      }
    }
    function GS(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function __(e, t, a) {
      switch (t.tag) {
        case F:
          lb(t), t.stateNode, Mf();
          break;
        case Q:
          vE(t);
          break;
        case A: {
          var i = t.type;
          Bo(i) && Gh(t);
          break;
        }
        case W:
          Vg(t, t.stateNode.containerInfo);
          break;
        case be: {
          var l = t.memoizedProps.value, s = t.type._context;
          oE(t, s, l);
          break;
        }
        case Ge:
          {
            var f = sa(a, t.childLanes);
            f && (t.flags |= ht);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Bu(t, jf(io.current)), t.flags |= ot, null;
            var E = t.child, b = E.childLanes;
            if (sa(a, b))
              return sb(e, t, a);
            Bu(t, jf(io.current));
            var M = Ll(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            Bu(t, jf(io.current));
          break;
        }
        case ct: {
          var O = (e.flags & ot) !== We, I = sa(a, t.childLanes);
          if (O) {
            if (I)
              return pb(e, t, a);
            t.flags |= ot;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Bu(t, io.current), I)
            break;
          return null;
        }
        case je:
        case tt:
          return t.lanes = re, ab(e, t, a);
      }
      return Ll(e, t, a);
    }
    function mb(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return T_(e, t, x0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Yh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          uo = !0;
        else {
          var s = GS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ot) === We)
            return uo = !1, __(e, t, a);
          (e.flags & Cs) !== We ? uo = !0 : uo = !1;
        }
      } else if (uo = !1, jr() && Zw(t)) {
        var f = t.index, p = Jw();
        $C(t, p, f);
      }
      switch (t.lanes = re, t.tag) {
        case te:
          return u_(e, t, t.type, a);
        case dt: {
          var h = t.elementType;
          return o_(e, t, h, a);
        }
        case j: {
          var E = t.type, b = t.pendingProps, M = t.elementType === E ? b : lo(E, b);
          return PS(e, t, E, M, a);
        }
        case A: {
          var O = t.type, I = t.pendingProps, Y = t.elementType === O ? I : lo(O, I);
          return ob(e, t, O, Y, a);
        }
        case F:
          return r_(e, t, a);
        case Q:
          return a_(e, t, a);
        case X:
          return i_(e, t);
        case Re:
          return sb(e, t, a);
        case W:
          return x_(e, t, a);
        case ze: {
          var K = t.type, we = t.pendingProps, Qe = t.elementType === K ? we : lo(K, we);
          return tb(e, t, K, Qe, a);
        }
        case de:
          return e_(e, t, a);
        case fe:
          return t_(e, t, a);
        case Ge:
          return n_(e, t, a);
        case be:
          return R_(e, t, a);
        case Oe:
          return w_(e, t, a);
        case it: {
          var Be = t.type, Ut = t.pendingProps, Dt = lo(Be, Ut);
          if (t.type !== t.elementType) {
            var P = Be.propTypes;
            P && no(
              P,
              Dt,
              // Resolved for outer only
              "prop",
              Mt(Be)
            );
          }
          return Dt = lo(Be.type, Dt), nb(e, t, Be, Dt, a);
        }
        case He:
          return rb(e, t, t.type, t.pendingProps, a);
        case Xt: {
          var q = t.type, H = t.pendingProps, se = t.elementType === q ? H : lo(q, H);
          return l_(e, t, q, se, a);
        }
        case ct:
          return pb(e, t, a);
        case et:
          break;
        case je:
          return ab(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= ht;
    }
    function yb(e) {
      e.flags |= ta, e.flags |= Td;
    }
    var gb, QS, Sb, Cb;
    gb = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === Q || l.tag === X)
          K1(e, l.stateNode);
        else if (l.tag !== W) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, QS = function(e, t) {
    }, Sb = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Ig(), h = X1(f, a, s, i, l, p);
        t.updateQueue = h, h && Bf(t);
      }
    }, Cb = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Vp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = re, i = We;
      if (t) {
        if ((e.mode & lt) !== Fe) {
          for (var h = e.selfBaseDuration, E = e.child; E !== null; )
            a = pt(a, pt(E.lanes, E.childLanes)), i |= E.subtreeFlags & lr, i |= E.flags & lr, h += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = h;
        } else
          for (var b = e.child; b !== null; )
            a = pt(a, pt(b.lanes, b.childLanes)), i |= b.subtreeFlags & lr, i |= b.flags & lr, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & lt) !== Fe) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = pt(a, pt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = pt(a, pt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function k_(e, t, a) {
      if (dT() && (t.mode & Ie) !== Fe && (t.flags & ot) === We)
        return XC(t), Mf(), t.flags |= _n | Ea | tr, !1;
      var i = Zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (cT(t), Pr(t), (t.mode & lt) !== Fe) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & ot) === We && (t.memoizedState = null), t.flags |= ht, Pr(t), (t.mode & lt) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ZC(), !0;
    }
    function Eb(e, t, a) {
      var i = t.pendingProps;
      switch (Cg(t), t.tag) {
        case te:
        case dt:
        case He:
        case j:
        case ze:
        case de:
        case fe:
        case Ge:
        case Oe:
        case it:
          return Pr(t), null;
        case A: {
          var l = t.type;
          return Bo(l) && Wh(t), Pr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Uf(t), mg(t), Gg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Zh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _n) !== We) && (t.flags |= Fa, ZC());
            }
          }
          return QS(e, t), Pr(t), null;
        }
        case Q: {
          Bg(t);
          var h = pE(), E = t.type;
          if (e !== null && t.stateNode != null)
            Sb(e, t, E, i, h), e.ref !== t.ref && yb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var b = Ig(), M = Zh(t);
            if (M)
              uT(t, h, b) && Bf(t);
            else {
              var O = Q1(E, i, h, b, t);
              gb(O, t, !1, !1), t.stateNode = O, q1(O, E, i, h) && Bf(t);
            }
            t.ref !== null && yb(t);
          }
          return Pr(t), null;
        }
        case X: {
          var I = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            Cb(e, t, Y, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var K = pE(), we = Ig(), Qe = Zh(t);
            Qe ? sT(t) && Bf(t) : t.stateNode = Z1(I, K, we, t);
          }
          return Pr(t), null;
        }
        case Re: {
          Ff(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ut = k_(e, t, Be);
            if (!Ut)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & ot) !== We)
            return t.lanes = a, (t.mode & lt) !== Fe && gS(t), t;
          var Dt = Be !== null, P = e !== null && e.memoizedState !== null;
          if (Dt !== P && Dt) {
            var q = t.child;
            if (q.flags |= No, (t.mode & Ie) !== Fe) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !L);
              H || $g(io.current, mE) ? Dk() : d0();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= ht), Pr(t), (t.mode & lt) !== Fe && Dt) {
            var De = t.child;
            De !== null && (t.treeBaseDuration -= De.treeBaseDuration);
          }
          return null;
        }
        case W:
          return Uf(t), QS(e, t), e === null && Yw(t.stateNode.containerInfo), Pr(t), null;
        case be:
          var Te = t.type._context;
          return Ag(Te, t), Pr(t), null;
        case Xt: {
          var at = t.type;
          return Bo(at) && Wh(t), Pr(t), null;
        }
        case ct: {
          Ff(t);
          var ft = t.memoizedState;
          if (ft === null)
            return Pr(t), null;
          var tn = (t.flags & ot) !== We, Vt = ft.rendering;
          if (Vt === null)
            if (tn)
              Vp(ft, !1);
            else {
              var Kn = Nk() && (e === null || (e.flags & ot) === We);
              if (!Kn)
                for (var It = t.child; It !== null; ) {
                  var In = vm(It);
                  if (In !== null) {
                    tn = !0, t.flags |= ot, Vp(ft, !1);
                    var va = In.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= ht), t.subtreeFlags = We, ST(t, a), Bu(t, Yg(io.current, kp)), t.child;
                  }
                  It = It.sibling;
                }
              ft.tail !== null && bn() > Ib() && (t.flags |= ot, tn = !0, Vp(ft, !1), t.lanes = Xv);
            }
          else {
            if (!tn) {
              var $r = vm(Vt);
              if ($r !== null) {
                t.flags |= ot, tn = !0;
                var vi = $r.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= ht), Vp(ft, !0), ft.tail === null && ft.tailMode === "hidden" && !Vt.alternate && !jr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - ft.renderingStartTime > Ib() && a !== wr && (t.flags |= ot, tn = !0, Vp(ft, !1), t.lanes = Xv);
            }
            if (ft.isBackwards)
              Vt.sibling = t.child, t.child = Vt;
            else {
              var Oa = ft.last;
              Oa !== null ? Oa.sibling = Vt : t.child = Vt, ft.last = Vt;
            }
          }
          if (ft.tail !== null) {
            var Na = ft.tail;
            ft.rendering = Na, ft.tail = Na.sibling, ft.renderingStartTime = bn(), Na.sibling = null;
            var ha = io.current;
            return tn ? ha = Yg(ha, kp) : ha = jf(ha), Bu(t, ha), Na;
          }
          return Pr(t), null;
        }
        case et:
          break;
        case je:
        case tt: {
          f0(t);
          var Fl = t.memoizedState, Xf = Fl !== null;
          if (e !== null) {
            var rv = e.memoizedState, Xo = rv !== null;
            Xo !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !he && (t.flags |= No);
          }
          return !Xf || (t.mode & Ie) === Fe ? Pr(t) : sa(qo, wr) && (Pr(t), t.subtreeFlags & (fn | ht) && (t.flags |= No)), null;
        }
        case _t:
          return null;
        case ye:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function D_(e, t, a) {
      switch (Cg(t), t.tag) {
        case A: {
          var i = t.type;
          Bo(i) && Wh(t);
          var l = t.flags;
          return l & tr ? (t.flags = l & ~tr | ot, (t.mode & lt) !== Fe && gS(t), t) : null;
        }
        case F: {
          t.stateNode, Uf(t), mg(t), Gg();
          var s = t.flags;
          return (s & tr) !== We && (s & ot) === We ? (t.flags = s & ~tr | ot, t) : null;
        }
        case Q:
          return Bg(t), null;
        case Re: {
          Ff(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | ot, (t.mode & lt) !== Fe && gS(t), t) : null;
        }
        case ct:
          return Ff(t), null;
        case W:
          return Uf(t), null;
        case be:
          var h = t.type._context;
          return Ag(h, t), null;
        case je:
        case tt:
          return f0(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function bb(e, t, a) {
      switch (Cg(t), t.tag) {
        case A: {
          var i = t.type.childContextTypes;
          i != null && Wh(t);
          break;
        }
        case F: {
          t.stateNode, Uf(t), mg(t), Gg();
          break;
        }
        case Q: {
          Bg(t);
          break;
        }
        case W:
          Uf(t);
          break;
        case Re:
          Ff(t);
          break;
        case ct:
          Ff(t);
          break;
        case be:
          var l = t.type._context;
          Ag(l, t);
          break;
        case je:
        case tt:
          f0(t);
          break;
      }
    }
    var xb = null;
    xb = /* @__PURE__ */ new Set();
    var Fm = !1, Hr = !1, O_ = typeof WeakSet == "function" ? WeakSet : Set, Ae = null, $f = null, Yf = null;
    function N_(e) {
      sl(null, function() {
        throw e;
      }), Rd();
    }
    var M_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & lt)
        try {
          Qo(), t.componentWillUnmount();
        } finally {
          Go(e);
        }
      else
        t.componentWillUnmount();
    };
    function Rb(e, t) {
      try {
        Wu(fr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function KS(e, t, a) {
      try {
        M_(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function L_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function wb(e, t) {
      try {
        _b(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function Wf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (mt && Ot && e.mode & lt)
              try {
                Qo(), i = a(null);
              } finally {
                Go(e);
              }
            else
              i = a(null);
          } catch (l) {
            vn(e, t, l);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
        } else
          a.current = null;
    }
    function Pm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var Tb = !1;
    function A_(e, t) {
      W1(e.containerInfo), Ae = t, z_();
      var a = Tb;
      return Tb = !1, a;
    }
    function z_() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        (e.subtreeFlags & iu) !== We && t !== null ? (t.return = e, Ae = t) : U_();
      }
    }
    function U_() {
      for (; Ae !== null; ) {
        var e = Ae;
        Qt(e);
        try {
          j_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        Tn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function j_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fa) !== We) {
        switch (Qt(e), e.tag) {
          case j:
          case ze:
          case He:
            break;
          case A: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : lo(e.type, i), l);
              {
                var p = xb;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ut(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var h = e.stateNode;
              yw(h.containerInfo);
            }
            break;
          }
          case Q:
          case X:
          case W:
          case Xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Tn();
      }
    }
    function so(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Za ? Qv(t) : (e & fr) !== Za && fi(t), (e & $o) !== Za && ev(!0), Pm(t, a, p), (e & $o) !== Za && ev(!1), (e & Fr) !== Za ? Nc() : (e & fr) !== Za && su());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Wu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Za ? Ao(t) : (e & fr) !== Za && Kv(t);
            var f = s.create;
            (e & $o) !== Za && ev(!0), s.destroy = f(), (e & $o) !== Za && ev(!1), (e & Fr) !== Za ? Oc() : (e & fr) !== Za && Es();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & fr) !== We ? h = "useLayoutEffect" : (s.tag & $o) !== We ? h = "useInsertionEffect" : h = "useEffect";
                var E = void 0;
                p === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? E = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", h, E);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function F_(e, t) {
      if ((t.flags & ht) !== We)
        switch (t.tag) {
          case Ge: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = IE(), p = t.alternate === null ? "mount" : "update";
            VE() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case F:
                  var E = h.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
                case Ge:
                  var b = h.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function P_(e, t, a, i) {
      if ((a.flags & xr) !== We)
        switch (a.tag) {
          case j:
          case ze:
          case He: {
            if (!Hr)
              if (a.mode & lt)
                try {
                  Qo(), Wu(fr | cr, a);
                } finally {
                  Go(a);
                }
              else
                Wu(fr | cr, a);
            break;
          }
          case A: {
            var l = a.stateNode;
            if (a.flags & ht && !Hr)
              if (t === null)
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & lt)
                  try {
                    Qo(), l.componentDidMount();
                  } finally {
                    Go(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : lo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), a.mode & lt)
                  try {
                    Qo(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Go(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !tc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ut(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ut(a) || "instance")), dE(a, p, l));
            break;
          }
          case F: {
            var h = a.updateQueue;
            if (h !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    E = a.child.stateNode;
                    break;
                  case A:
                    E = a.child.stateNode;
                    break;
                }
              dE(a, h, E);
            }
            break;
          }
          case Q: {
            var b = a.stateNode;
            if (t === null && a.flags & ht) {
              var M = a.type, O = a.memoizedProps;
              rw(b, M, O);
            }
            break;
          }
          case X:
            break;
          case W:
            break;
          case Ge: {
            {
              var I = a.memoizedProps, Y = I.onCommit, K = I.onRender, we = a.stateNode.effectDuration, Qe = IE(), Be = t === null ? "mount" : "update";
              VE() && (Be = "nested-update"), typeof K == "function" && K(a.memoizedProps.id, Be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Qe);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Be, we, Qe), Uk(a);
                var Ut = a.return;
                e: for (; Ut !== null; ) {
                  switch (Ut.tag) {
                    case F:
                      var Dt = Ut.stateNode;
                      Dt.effectDuration += we;
                      break e;
                    case Ge:
                      var P = Ut.stateNode;
                      P.effectDuration += we;
                      break e;
                  }
                  Ut = Ut.return;
                }
              }
            }
            break;
          }
          case Re: {
            G_(e, a);
            break;
          }
          case ct:
          case Xt:
          case et:
          case je:
          case tt:
          case ye:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & ta && _b(a);
    }
    function H_(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          if (e.mode & lt)
            try {
              Qo(), Rb(e, e.return);
            } finally {
              Go(e);
            }
          else
            Rb(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && L_(e, e.return, t), wb(e, e.return);
          break;
        }
        case Q: {
          wb(e, e.return);
          break;
        }
      }
    }
    function V_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Q) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? pw(l) : hw(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === X) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? vw(s) : mw(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === tt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _b(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & lt)
            try {
              Qo(), l = t(i);
            } finally {
              Go(e);
            }
          else
            l = t(i);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ut(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ut(e)), t.current = i;
      }
    }
    function I_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function kb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, kb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && Qw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function B_(e) {
      for (var t = e.return; t !== null; ) {
        if (Db(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Db(e) {
      return e.tag === Q || e.tag === F || e.tag === W;
    }
    function Ob(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Db(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== X && t.tag !== vt; ) {
          if (t.flags & fn || t.child === null || t.tag === W)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & fn))
          return t.stateNode;
      }
    }
    function $_(e) {
      var t = B_(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & Kt && (MC(a), t.flags &= ~Kt);
          var i = Ob(e);
          XS(e, i, a);
          break;
        }
        case F:
        case W: {
          var l = t.stateNode.containerInfo, s = Ob(e);
          qS(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function qS(e, t, a) {
      var i = e.tag, l = i === Q || i === X;
      if (l) {
        var s = e.stateNode;
        t ? sw(a, s, t) : lw(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          qS(f, t, a);
          for (var p = f.sibling; p !== null; )
            qS(p, t, a), p = p.sibling;
        }
      }
    }
    function XS(e, t, a) {
      var i = e.tag, l = i === Q || i === X;
      if (l) {
        var s = e.stateNode;
        t ? uw(a, s, t) : ow(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          XS(f, t, a);
          for (var p = f.sibling; p !== null; )
            XS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, co = !1;
    function Y_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Q: {
              Vr = i.stateNode, co = !1;
              break e;
            }
            case F: {
              Vr = i.stateNode.containerInfo, co = !0;
              break e;
            }
            case W: {
              Vr = i.stateNode.containerInfo, co = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Nb(e, t, a), Vr = null, co = !1;
      }
      I_(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        Nb(e, t, i), i = i.sibling;
    }
    function Nb(e, t, a) {
      switch (dl(a), a.tag) {
        case Q:
          Hr || Wf(a, t);
        case X: {
          {
            var i = Vr, l = co;
            Vr = null, Gu(e, t, a), Vr = i, co = l, Vr !== null && (co ? fw(Vr, a.stateNode) : cw(Vr, a.stateNode));
          }
          return;
        }
        case vt: {
          Vr !== null && (co ? dw(Vr, a.stateNode) : ug(Vr, a.stateNode));
          return;
        }
        case W: {
          {
            var s = Vr, f = co;
            Vr = a.stateNode.containerInfo, co = !0, Gu(e, t, a), Vr = s, co = f;
          }
          return;
        }
        case j:
        case ze:
        case it:
        case He: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var E = h.next, b = E;
                do {
                  var M = b, O = M.destroy, I = M.tag;
                  O !== void 0 && ((I & $o) !== Za ? Pm(a, t, O) : (I & fr) !== Za && (fi(a), a.mode & lt ? (Qo(), Pm(a, t, O), Go(a)) : Pm(a, t, O), su())), b = b.next;
                } while (b !== E);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case A: {
          if (!Hr) {
            Wf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && KS(a, t, Y);
          }
          Gu(e, t, a);
          return;
        }
        case et: {
          Gu(e, t, a);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ie
          ) {
            var K = Hr;
            Hr = K || a.memoizedState !== null, Gu(e, t, a), Hr = K;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function W_(e) {
      e.memoizedState;
    }
    function G_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && Nw(s);
          }
        }
      }
    }
    function Mb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new O_()), t.forEach(function(i) {
          var l = Bk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ra)
              if ($f !== null && Yf !== null)
                Jp(Yf, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function Q_(e, t, a) {
      $f = a, Yf = e, Qt(t), Lb(t, e), Qt(t), $f = null, Yf = null;
    }
    function fo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            Y_(e, t, s);
          } catch (h) {
            vn(s, t, h);
          }
        }
      var f = uc();
      if (t.subtreeFlags & aa)
        for (var p = t.child; p !== null; )
          Qt(p), Lb(p, e), p = p.sibling;
      Qt(f);
    }
    function Lb(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case j:
        case ze:
        case it:
        case He: {
          if (fo(t, e), Ko(e), l & ht) {
            try {
              so($o | cr, e, e.return), Wu($o | cr, e);
            } catch (at) {
              vn(e, e.return, at);
            }
            if (e.mode & lt) {
              try {
                Qo(), so(fr | cr, e, e.return);
              } catch (at) {
                vn(e, e.return, at);
              }
              Go(e);
            } else
              try {
                so(fr | cr, e, e.return);
              } catch (at) {
                vn(e, e.return, at);
              }
          }
          return;
        }
        case A: {
          fo(t, e), Ko(e), l & ta && i !== null && Wf(i, i.return);
          return;
        }
        case Q: {
          fo(t, e), Ko(e), l & ta && i !== null && Wf(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                MC(s);
              } catch (at) {
                vn(e, e.return, at);
              }
            }
            if (l & ht) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, E = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    aw(f, b, E, h, p, e);
                  } catch (at) {
                    vn(e, e.return, at);
                  }
              }
            }
          }
          return;
        }
        case X: {
          if (fo(t, e), Ko(e), l & ht) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, O = e.memoizedProps, I = i !== null ? i.memoizedProps : O;
            try {
              iw(M, I, O);
            } catch (at) {
              vn(e, e.return, at);
            }
          }
          return;
        }
        case F: {
          if (fo(t, e), Ko(e), l & ht && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                Ow(t.containerInfo);
              } catch (at) {
                vn(e, e.return, at);
              }
          }
          return;
        }
        case W: {
          fo(t, e), Ko(e);
          return;
        }
        case Re: {
          fo(t, e), Ko(e);
          var K = e.child;
          if (K.flags & No) {
            var we = K.stateNode, Qe = K.memoizedState, Be = Qe !== null;
            if (we.isHidden = Be, Be) {
              var Ut = K.alternate !== null && K.alternate.memoizedState !== null;
              Ut || kk();
            }
          }
          if (l & ht) {
            try {
              W_(e);
            } catch (at) {
              vn(e, e.return, at);
            }
            Mb(e);
          }
          return;
        }
        case je: {
          var Dt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ie
          ) {
            var P = Hr;
            Hr = P || Dt, fo(t, e), Hr = P;
          } else
            fo(t, e);
          if (Ko(e), l & No) {
            var q = e.stateNode, H = e.memoizedState, se = H !== null, De = e;
            if (q.isHidden = se, se && !Dt && (De.mode & Ie) !== Fe) {
              Ae = De;
              for (var Te = De.child; Te !== null; )
                Ae = Te, q_(Te), Te = Te.sibling;
            }
            V_(De, se);
          }
          return;
        }
        case ct: {
          fo(t, e), Ko(e), l & ht && Mb(e);
          return;
        }
        case et:
          return;
        default: {
          fo(t, e), Ko(e);
          return;
        }
      }
    }
    function Ko(e) {
      var t = e.flags;
      if (t & fn) {
        try {
          $_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~fn;
      }
      t & Pa && (e.flags &= ~Pa);
    }
    function K_(e, t, a) {
      $f = a, Yf = t, Ae = e, Ab(e, t, a), $f = null, Yf = null;
    }
    function Ab(e, t, a) {
      for (var i = (e.mode & Ie) !== Fe; Ae !== null; ) {
        var l = Ae, s = l.child;
        if (l.tag === je && i) {
          var f = l.memoizedState !== null, p = f || Fm;
          if (p) {
            ZS(e, t, a);
            continue;
          } else {
            var h = l.alternate, E = h !== null && h.memoizedState !== null, b = E || Hr, M = Fm, O = Hr;
            Fm = p, Hr = b, Hr && !O && (Ae = l, X_(l));
            for (var I = s; I !== null; )
              Ae = I, Ab(
                I,
                // New root; bubble back up to here and stop.
                t,
                a
              ), I = I.sibling;
            Ae = l, Fm = M, Hr = O, ZS(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & xr) !== We && s !== null ? (s.return = l, Ae = s) : ZS(e, t, a);
      }
    }
    function ZS(e, t, a) {
      for (; Ae !== null; ) {
        var i = Ae;
        if ((i.flags & xr) !== We) {
          var l = i.alternate;
          Qt(i);
          try {
            P_(t, l, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          Tn();
        }
        if (i === e) {
          Ae = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ae = s;
          return;
        }
        Ae = i.return;
      }
    }
    function q_(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        switch (t.tag) {
          case j:
          case ze:
          case it:
          case He: {
            if (t.mode & lt)
              try {
                Qo(), so(fr, t, t.return);
              } finally {
                Go(t);
              }
            else
              so(fr, t, t.return);
            break;
          }
          case A: {
            Wf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && KS(t, t.return, i);
            break;
          }
          case Q: {
            Wf(t, t.return);
            break;
          }
          case je: {
            var l = t.memoizedState !== null;
            if (l) {
              zb(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ae = a) : zb(e);
      }
    }
    function zb(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        if (t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function X_(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            Ub(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ae = a) : Ub(e);
      }
    }
    function Ub(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        Qt(t);
        try {
          H_(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (Tn(), t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function Z_(e, t, a, i) {
      Ae = t, J_(t, e, a, i);
    }
    function J_(e, t, a, i) {
      for (; Ae !== null; ) {
        var l = Ae, s = l.child;
        (l.subtreeFlags & Ha) !== We && s !== null ? (s.return = l, Ae = s) : ek(e, t, a, i);
      }
    }
    function ek(e, t, a, i) {
      for (; Ae !== null; ) {
        var l = Ae;
        if ((l.flags & hn) !== We) {
          Qt(l);
          try {
            tk(t, l, a, i);
          } catch (f) {
            vn(l, l.return, f);
          }
          Tn();
        }
        if (l === e) {
          Ae = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ae = s;
          return;
        }
        Ae = l.return;
      }
    }
    function tk(e, t, a, i) {
      switch (t.tag) {
        case j:
        case ze:
        case He: {
          if (t.mode & lt) {
            yS();
            try {
              Wu(Fr | cr, t);
            } finally {
              mS(t);
            }
          } else
            Wu(Fr | cr, t);
          break;
        }
      }
    }
    function nk(e) {
      Ae = e, rk();
    }
    function rk() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        if ((Ae.flags & $t) !== We) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ae = l, ok(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ae = e;
          }
        }
        (e.subtreeFlags & Ha) !== We && t !== null ? (t.return = e, Ae = t) : ak();
      }
    }
    function ak() {
      for (; Ae !== null; ) {
        var e = Ae;
        (e.flags & hn) !== We && (Qt(e), ik(e), Tn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function ik(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          e.mode & lt ? (yS(), so(Fr | cr, e, e.return), mS(e)) : so(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function ok(e, t) {
      for (; Ae !== null; ) {
        var a = Ae;
        Qt(a), uk(a, t), Tn();
        var i = a.child;
        i !== null ? (i.return = a, Ae = i) : lk(e);
      }
    }
    function lk(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.sibling, i = t.return;
        if (kb(t), t === e) {
          Ae = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ae = a;
          return;
        }
        Ae = i;
      }
    }
    function uk(e, t) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          e.mode & lt ? (yS(), so(Fr, e, t), mS(e)) : so(Fr, e, t);
          break;
        }
      }
    }
    function sk(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          try {
            Wu(fr | cr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function ck(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          try {
            Wu(Fr | cr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function fk(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He: {
          try {
            so(fr | cr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && KS(e, e.return, t);
          break;
        }
      }
    }
    function dk(e) {
      switch (e.tag) {
        case j:
        case ze:
        case He:
          try {
            so(Fr | cr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ip = Symbol.for;
      Ip("selector.component"), Ip("selector.has_pseudo_class"), Ip("selector.role"), Ip("selector.test_id"), Ip("selector.text");
    }
    var pk = [];
    function vk() {
      pk.forEach(function(e) {
        return e();
      });
    }
    var hk = y.ReactCurrentActQueue;
    function mk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function jb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hk.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yk = Math.ceil, JS = y.ReactCurrentDispatcher, e0 = y.ReactCurrentOwner, Ir = y.ReactCurrentBatchConfig, po = y.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), Fb = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Al = 0, Bp = 1, nc = 2, Hm = 3, $p = 4, Pb = 5, t0 = 6, zt = vr, ka = null, Un = null, hr = re, qo = re, n0 = ju(re), mr = Al, Yp = null, Vm = re, Wp = re, Im = re, Gp = null, Ja = null, r0 = 0, Hb = 500, Vb = 1 / 0, gk = 500, zl = null;
    function Qp() {
      Vb = bn() + gk;
    }
    function Ib() {
      return Vb;
    }
    var Bm = !1, a0 = null, Gf = null, rc = !1, Qu = null, Kp = re, i0 = [], o0 = null, Sk = 50, qp = 0, l0 = null, u0 = !1, $m = !1, Ck = 50, Qf = 0, Ym = null, Xp = sn, Wm = re, Bb = !1;
    function Gm() {
      return ka;
    }
    function Da() {
      return (zt & (Br | Ai)) !== vr ? bn() : (Xp !== sn || (Xp = bn()), Xp);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & Ie) === Fe)
        return Ye;
      if ((zt & Br) !== vr && hr !== re)
        return gu(hr);
      var a = hT() !== vT;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Wm === Vn && (Wm = ih()), Wm;
      }
      var l = Ya();
      if (l !== Vn)
        return l;
      var s = J1();
      return s;
    }
    function Ek(e) {
      var t = e.mode;
      return (t & Ie) === Fe ? Ye : ua();
    }
    function yr(e, t, a, i) {
      Yk(), Bb && g("useInsertionEffect must not schedule updates."), u0 && ($m = !0), Cl(e, a, i), (zt & Br) !== re && e === ka ? Qk(t) : (Ra && ef(e, t, a), Kk(t), e === ka && ((zt & Br) === vr && (Wp = pt(Wp, a)), mr === $p && qu(e, hr)), ei(e, i), a === Ye && zt === vr && (t.mode & Ie) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !po.isBatchingLegacy && (Qp(), BC()));
    }
    function bk(e, t, a) {
      var i = e.current;
      i.lanes = t, Cl(e, t, a), ei(e, a);
    }
    function xk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (zt & Br) !== vr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      eh(e, t);
      var i = gl(e, e === ka ? hr : re);
      if (i === re) {
        a !== null && ix(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var l = Ln(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(po.current !== null && a !== h0)) {
        a == null && s !== Ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ix(a);
      var f;
      if (l === Ye)
        e.tag === Fu ? (po.isBatchingLegacy !== null && (po.didScheduleLegacyUpdate = !0), Xw(Wb.bind(null, e))) : IC(Wb.bind(null, e)), po.current !== null ? po.current.push(Pu) : tw(function() {
          (zt & (Br | Ai)) === vr && Pu();
        }), f = null;
      else {
        var p;
        switch (sr(i)) {
          case An:
            p = _c;
            break;
          case Zi:
            p = fl;
            break;
          case wi:
            p = Ri;
            break;
          case Su:
            p = kc;
            break;
          default:
            p = Ri;
            break;
        }
        f = m0(p, $b.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function $b(e, t) {
      if (VT(), Xp = sn, Wm = re, (zt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = jl();
      if (i && e.callbackNode !== a)
        return null;
      var l = gl(e, e === ka ? hr : re);
      if (l === re)
        return null;
      var s = !Ds(e, l) && !ah(e, l) && !t, f = s ? Lk(e, l) : Km(e, l);
      if (f !== Al) {
        if (f === nc) {
          var p = Uo(e);
          p !== re && (l = p, f = s0(e, p));
        }
        if (f === Bp) {
          var h = Yp;
          throw ac(e, re), qu(e, l), ei(e, bn()), h;
        }
        if (f === t0)
          qu(e, l);
        else {
          var E = !Ds(e, l), b = e.current.alternate;
          if (E && !wk(b)) {
            if (f = Km(e, l), f === nc) {
              var M = Uo(e);
              M !== re && (l = M, f = s0(e, M));
            }
            if (f === Bp) {
              var O = Yp;
              throw ac(e, re), qu(e, l), ei(e, bn()), O;
            }
          }
          e.finishedWork = b, e.finishedLanes = l, Rk(e, f, l);
        }
      }
      return ei(e, bn()), e.callbackNode === a ? $b.bind(null, e) : null;
    }
    function s0(e, t) {
      var a = Gp;
      if (tf(e)) {
        var i = ac(e, t);
        i.flags |= _n, $w(e.containerInfo);
      }
      var l = Km(e, t);
      if (l !== nc) {
        var s = Ja;
        Ja = a, s !== null && Yb(s);
      }
      return l;
    }
    function Yb(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function Rk(e, t, a) {
      switch (t) {
        case Al:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Ja, zl);
          break;
        }
        case Hm: {
          if (qu(e, a), th(a) && // do not delay if we're inside an act() scope
          !ox()) {
            var i = r0 + Hb - bn();
            if (i > 10) {
              var l = gl(e, re);
              if (l !== re)
                break;
              var s = e.suspendedLanes;
              if (!Sl(s, a)) {
                Da(), Zc(e, s);
                break;
              }
              e.timeoutHandle = og(ic.bind(null, e, Ja, zl), i);
              break;
            }
          }
          ic(e, Ja, zl);
          break;
        }
        case $p: {
          if (qu(e, a), rh(a))
            break;
          if (!ox()) {
            var f = Zv(e, a), p = f, h = bn() - p, E = $k(h) - h;
            if (E > 10) {
              e.timeoutHandle = og(ic.bind(null, e, Ja, zl), E);
              break;
            }
          }
          ic(e, Ja, zl);
          break;
        }
        case Pb: {
          ic(e, Ja, zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function wk(e) {
      for (var t = e; ; ) {
        if (t.flags & Ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!Le(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Ss && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function qu(e, t) {
      t = Os(t, Im), t = Os(t, Wp), lh(e, t);
    }
    function Wb(e) {
      if (IT(), (zt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      jl();
      var t = gl(e, re);
      if (!sa(t, Ye))
        return ei(e, bn()), null;
      var a = Km(e, t);
      if (e.tag !== Fu && a === nc) {
        var i = Uo(e);
        i !== re && (t = i, a = s0(e, i));
      }
      if (a === Bp) {
        var l = Yp;
        throw ac(e, re), qu(e, t), ei(e, bn()), l;
      }
      if (a === t0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Ja, zl), ei(e, bn()), null;
    }
    function Tk(e, t) {
      t !== re && (Vd(e, pt(t, Ye)), ei(e, bn()), (zt & (Br | Ai)) === vr && (Qp(), Pu()));
    }
    function c0(e, t) {
      var a = zt;
      zt |= Fb;
      try {
        return e(t);
      } finally {
        zt = a, zt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !po.isBatchingLegacy && (Qp(), BC());
      }
    }
    function _k(e, t, a, i, l) {
      var s = Ya(), f = Ir.transition;
      try {
        return Ir.transition = null, kn(An), e(t, a, i, l);
      } finally {
        kn(s), Ir.transition = f, zt === vr && Qp();
      }
    }
    function Ul(e) {
      Qu !== null && Qu.tag === Fu && (zt & (Br | Ai)) === vr && jl();
      var t = zt;
      zt |= Fb;
      var a = Ir.transition, i = Ya();
      try {
        return Ir.transition = null, kn(An), e ? e() : void 0;
      } finally {
        kn(i), Ir.transition = a, zt = t, (zt & (Br | Ai)) === vr && Pu();
      }
    }
    function Gb() {
      return (zt & (Br | Ai)) !== vr;
    }
    function Qm(e, t) {
      da(n0, qo, e), qo = pt(qo, t);
    }
    function f0(e) {
      qo = n0.current, fa(n0, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var a = e.timeoutHandle;
      if (a !== lg && (e.timeoutHandle = lg, ew(a)), Un !== null)
        for (var i = Un.return; i !== null; ) {
          var l = i.alternate;
          bb(l, i), i = i.return;
        }
      ka = e;
      var s = oc(e.current, null);
      return Un = s, hr = qo = t, mr = Al, Yp = null, Vm = re, Wp = re, Im = re, Gp = null, Ja = null, bT(), ao.discardPendingWarnings(), s;
    }
    function Qb(e, t) {
      do {
        var a = Un;
        try {
          if (am(), gE(), Tn(), e0.current = null, a === null || a.return === null) {
            mr = Bp, Yp = t, Un = null;
            return;
          }
          if (mt && a.mode & lt && Lm(a, !0), yt)
            if (oa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              pl(a, i, hr);
            } else
              bs(a, t, hr);
          XT(e, a.return, a, t, hr), Zb(a);
        } catch (l) {
          t = l, Un === a && a !== null ? (a = a.return, Un = a) : a = Un;
          continue;
        }
        return;
      } while (!0);
    }
    function Kb() {
      var e = JS.current;
      return JS.current = km, e === null ? km : e;
    }
    function qb(e) {
      JS.current = e;
    }
    function kk() {
      r0 = bn();
    }
    function Zp(e) {
      Vm = pt(e, Vm);
    }
    function Dk() {
      mr === Al && (mr = Hm);
    }
    function d0() {
      (mr === Al || mr === Hm || mr === nc) && (mr = $p), ka !== null && (ks(Vm) || ks(Wp)) && qu(ka, hr);
    }
    function Ok(e) {
      mr !== $p && (mr = nc), Gp === null ? Gp = [e] : Gp.push(e);
    }
    function Nk() {
      return mr === Al;
    }
    function Km(e, t) {
      var a = zt;
      zt |= Br;
      var i = Kb();
      if (ka !== e || hr !== t) {
        if (Ra) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Jp(e, hr), l.clear()), Id(e, t);
        }
        zl = Ms(), ac(e, t);
      }
      mn(t);
      do
        try {
          Mk();
          break;
        } catch (s) {
          Qb(e, s);
        }
      while (!0);
      if (am(), zt = a, qb(i), Un !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), ka = null, hr = re, mr;
    }
    function Mk() {
      for (; Un !== null; )
        Xb(Un);
    }
    function Lk(e, t) {
      var a = zt;
      zt |= Br;
      var i = Kb();
      if (ka !== e || hr !== t) {
        if (Ra) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Jp(e, hr), l.clear()), Id(e, t);
        }
        zl = Ms(), Qp(), ac(e, t);
      }
      mn(t);
      do
        try {
          Ak();
          break;
        } catch (s) {
          Qb(e, s);
        }
      while (!0);
      return am(), qb(i), zt = a, Un !== null ? (Mc(), Al) : (Lc(), ka = null, hr = re, mr);
    }
    function Ak() {
      for (; Un !== null && !Tc(); )
        Xb(Un);
    }
    function Xb(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & lt) !== Fe ? (hS(e), a = p0(t, e, qo), Lm(e, !0)) : a = p0(t, e, qo), Tn(), e.memoizedProps = e.pendingProps, a === null ? Zb(e) : Un = a, e0.current = null;
    }
    function Zb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ea) === We) {
          Qt(t);
          var l = void 0;
          if ((t.mode & lt) === Fe ? l = Eb(a, t, qo) : (hS(t), l = Eb(a, t, qo), Lm(t, !1)), Tn(), l !== null) {
            Un = l;
            return;
          }
        } else {
          var s = D_(a, t);
          if (s !== null) {
            s.flags &= Vv, Un = s;
            return;
          }
          if ((t.mode & lt) !== Fe) {
            Lm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ea, i.subtreeFlags = We, i.deletions = null;
          else {
            mr = t0, Un = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Un = h;
          return;
        }
        t = i, Un = t;
      } while (t !== null);
      mr === Al && (mr = Pb);
    }
    function ic(e, t, a) {
      var i = Ya(), l = Ir.transition;
      try {
        Ir.transition = null, kn(An), zk(e, t, a, i);
      } finally {
        Ir.transition = l, kn(i);
      }
      return null;
    }
    function zk(e, t, a, i) {
      do
        jl();
      while (Qu !== null);
      if (Wk(), (zt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Lo(s), l === null)
        return Dc(), null;
      if (s === re && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = pt(l.lanes, l.childLanes);
      Jc(e, f), e === ka && (ka = null, Un = null, hr = re), ((l.subtreeFlags & Ha) !== We || (l.flags & Ha) !== We) && (rc || (rc = !0, o0 = a, m0(Ri, function() {
        return jl(), null;
      })));
      var p = (l.subtreeFlags & (iu | aa | xr | Ha)) !== We, h = (l.flags & (iu | aa | xr | Ha)) !== We;
      if (p || h) {
        var E = Ir.transition;
        Ir.transition = null;
        var b = Ya();
        kn(An);
        var M = zt;
        zt |= Ai, e0.current = null, A_(e, l), BE(), Q_(e, l, s), G1(e.containerInfo), e.current = l, Ld(s), K_(l, e, s), cu(), $v(), zt = M, kn(b), Ir.transition = E;
      } else
        e.current = l, BE();
      var O = rc;
      if (rc ? (rc = !1, Qu = e, Kp = s) : (Qf = 0, Ym = null), f = e.pendingLanes, f === re && (Gf = null), O || nx(e.current, !1), lu(l.stateNode, i), Ra && e.memoizedUpdaters.clear(), vk(), ei(e, bn()), t !== null)
        for (var I = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var K = t[Y], we = K.stack, Qe = K.digest;
          I(K.value, {
            componentStack: we,
            digest: Qe
          });
        }
      if (Bm) {
        Bm = !1;
        var Be = a0;
        throw a0 = null, Be;
      }
      return sa(Kp, Ye) && e.tag !== Fu && jl(), f = e.pendingLanes, sa(f, Ye) ? (HT(), e === l0 ? qp++ : (qp = 0, l0 = e)) : qp = 0, Pu(), Dc(), null;
    }
    function jl() {
      if (Qu !== null) {
        var e = sr(Kp), t = Ny(wi, e), a = Ir.transition, i = Ya();
        try {
          return Ir.transition = null, kn(t), jk();
        } finally {
          kn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function Uk(e) {
      i0.push(e), rc || (rc = !0, m0(Ri, function() {
        return jl(), null;
      }));
    }
    function jk() {
      if (Qu === null)
        return !1;
      var e = o0;
      o0 = null;
      var t = Qu, a = Kp;
      if (Qu = null, Kp = re, (zt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      u0 = !0, $m = !1, qv(a);
      var i = zt;
      zt |= Ai, nk(t.current), Z_(t, t.current, a, e);
      {
        var l = i0;
        i0 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          F_(t, f);
        }
      }
      Ad(), nx(t.current, !0), zt = i, Pu(), $m ? t === Ym ? Qf++ : (Qf = 0, Ym = t) : Qf = 0, u0 = !1, $m = !1, Ba(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Jb(e) {
      return Gf !== null && Gf.has(e);
    }
    function Fk(e) {
      Gf === null ? Gf = /* @__PURE__ */ new Set([e]) : Gf.add(e);
    }
    function Pk(e) {
      Bm || (Bm = !0, a0 = e);
    }
    var Hk = Pk;
    function ex(e, t, a) {
      var i = ec(a, t), l = XE(e, i, Ye), s = Vu(e, l, Ye), f = Da();
      s !== null && (Cl(s, Ye, f), ei(s, f));
    }
    function vn(e, t, a) {
      if (N_(a), ev(!1), e.tag === F) {
        ex(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          ex(i, e, a);
          return;
        } else if (i.tag === A) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Jb(s)) {
            var f = ec(a, e), p = LS(i, f, Ye), h = Vu(i, p, Ye), E = Da();
            h !== null && (Cl(h, Ye, E), ei(h, E));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Vk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Da();
      Zc(e, a), qk(e), ka === e && Sl(hr, a) && (mr === $p || mr === Hm && th(hr) && bn() - r0 < Hb ? ac(e, re) : Im = pt(Im, a)), ei(e, l);
    }
    function tx(e, t) {
      t === Vn && (t = Ek(e));
      var a = Da(), i = Xa(e, t);
      i !== null && (Cl(i, t, a), ei(i, a));
    }
    function Ik(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), tx(e, a);
    }
    function Bk(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), tx(e, a);
    }
    function $k(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yk(e / 1960) * 1960;
    }
    function Yk() {
      if (qp > Sk)
        throw qp = 0, l0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > Ck && (Qf = 0, Ym = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Wk() {
      ao.flushLegacyContextWarning(), ao.flushPendingUnsafeLifecycleWarnings();
    }
    function nx(e, t) {
      Qt(e), qm(e, ra, fk), t && qm(e, cl, dk), qm(e, ra, sk), t && qm(e, cl, ck), Tn();
    }
    function qm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== We ? i = i.child : ((i.flags & t) !== We && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Xm = null;
    function rx(e) {
      {
        if ((zt & Br) !== vr || !(e.mode & Ie))
          return;
        var t = e.tag;
        if (t !== te && t !== F && t !== A && t !== j && t !== ze && t !== it && t !== He)
          return;
        var a = ut(e) || "ReactComponent";
        if (Xm !== null) {
          if (Xm.has(a))
            return;
          Xm.add(a);
        } else
          Xm = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Qt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : Tn();
        }
      }
    }
    var p0;
    {
      var Gk = null;
      p0 = function(e, t, a) {
        var i = fx(Gk, t);
        try {
          return mb(e, t, a);
        } catch (s) {
          if (iT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (am(), gE(), bb(e, t), fx(t, i), t.mode & lt && hS(t), sl(null, mb, null, e, t, a), Ty()) {
            var l = Rd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var ax = !1, v0;
    v0 = /* @__PURE__ */ new Set();
    function Qk(e) {
      if (Zr && !jT())
        switch (e.tag) {
          case j:
          case ze:
          case He: {
            var t = Un && ut(Un) || "Unknown", a = t;
            if (!v0.has(a)) {
              v0.add(a);
              var i = ut(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case A: {
            ax || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), ax = !0);
            break;
          }
        }
    }
    function Jp(e, t) {
      if (Ra) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ef(e, i, t);
        });
      }
    }
    var h0 = {};
    function m0(e, t) {
      {
        var a = po.current;
        return a !== null ? (a.push(t), h0) : wc(e, t);
      }
    }
    function ix(e) {
      if (e !== h0)
        return Bv(e);
    }
    function ox() {
      return po.current !== null;
    }
    function Kk(e) {
      {
        if (e.mode & Ie) {
          if (!jb())
            return;
        } else if (!mk() || zt !== vr || e.tag !== j && e.tag !== ze && e.tag !== He)
          return;
        if (po.current === null) {
          var t = En;
          try {
            Qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ut(e));
          } finally {
            t ? Qt(e) : Tn();
          }
        }
      }
    }
    function qk(e) {
      e.tag !== Fu && jb() && po.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ev(e) {
      Bb = e;
    }
    var zi = null, Kf = null, Xk = function(e) {
      zi = e;
    };
    function qf(e) {
      {
        if (zi === null)
          return e;
        var t = zi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function y0(e) {
      return qf(e);
    }
    function g0(e) {
      {
        if (zi === null)
          return e;
        var t = zi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function lx(e, t) {
      {
        if (zi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof i == "function" && (l = !0);
            break;
          }
          case j: {
            (typeof i == "function" || s === Xe) && (l = !0);
            break;
          }
          case ze: {
            (s === ce || s === Xe) && (l = !0);
            break;
          }
          case it:
          case He: {
            (s === Nt || s === Xe) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = zi(a);
          if (f !== void 0 && f === zi(i))
            return !0;
        }
        return !1;
      }
    }
    function ux(e) {
      {
        if (zi === null || typeof WeakSet != "function")
          return;
        Kf === null && (Kf = /* @__PURE__ */ new WeakSet()), Kf.add(e);
      }
    }
    var Zk = function(e, t) {
      {
        if (zi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        jl(), Ul(function() {
          S0(e.current, i, a);
        });
      }
    }, Jk = function(e, t) {
      {
        if (e.context !== di)
          return;
        jl(), Ul(function() {
          tv(t, e, null, null);
        });
      }
    };
    function S0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case j:
          case He:
          case A:
            h = p;
            break;
          case ze:
            h = p.render;
            break;
        }
        if (zi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, b = !1;
        if (h !== null) {
          var M = zi(h);
          M !== void 0 && (a.has(M) ? b = !0 : t.has(M) && (f === A ? b = !0 : E = !0));
        }
        if (Kf !== null && (Kf.has(e) || i !== null && Kf.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || E) {
          var O = Xa(e, Ye);
          O !== null && yr(O, e, Ye, sn);
        }
        l !== null && !b && S0(l, t, a), s !== null && S0(s, t, a);
      }
    }
    var eD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return C0(e.current, i, a), a;
      }
    };
    function C0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case j:
          case He:
          case A:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? tD(e, a) : i !== null && C0(i, t, a), l !== null && C0(l, t, a);
      }
    }
    function tD(e, t) {
      {
        var a = nD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Q:
              t.add(i.stateNode);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var E0;
    {
      E0 = !1;
      try {
        var sx = Object.preventExtensions({});
      } catch {
        E0 = !0;
      }
    }
    function rD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !E0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
      return new rD(e, t, a, i);
    };
    function b0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function aD(e) {
      return typeof e == "function" && !b0(e) && e.defaultProps === void 0;
    }
    function iD(e) {
      if (typeof e == "function")
        return b0(e) ? A : j;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return ze;
        if (t === Nt)
          return it;
      }
      return te;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = We, a.subtreeFlags = We, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & lr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case te:
        case j:
        case He:
          a.type = qf(e.type);
          break;
        case A:
          a.type = y0(e.type);
          break;
        case ze:
          a.type = g0(e.type);
          break;
      }
      return a;
    }
    function oD(e, t) {
      e.flags &= lr | fn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function lD(e, t, a) {
      var i;
      return e === Qh ? (i = Ie, t === !0 && (i |= Rt, i |= wa)) : i = Fe, Ra && (i |= lt), pi(F, null, null, i);
    }
    function x0(e, t, a, i, l, s) {
      var f = te, p = e;
      if (typeof e == "function")
        b0(e) ? (f = A, p = y0(p)) : p = qf(p);
      else if (typeof e == "string")
        f = Q;
      else
        e: switch (e) {
          case Ca:
            return Xu(a.children, l, s, t);
          case yi:
            f = fe, l |= Rt, (l & Ie) !== Fe && (l |= wa);
            break;
          case gi:
            return uD(a, l, s, t);
          case Ve:
            return sD(a, l, s, t);
          case Tt:
            return cD(a, l, s, t);
          case nn:
            return cx(a, l, s, t);
          case cn:
          case St:
          case br:
          case Si:
          case Fn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case T:
                  f = be;
                  break e;
                case oe:
                  f = Oe;
                  break e;
                case ce:
                  f = ze, p = g0(p);
                  break e;
                case Nt:
                  f = it;
                  break e;
                case Xe:
                  f = dt, p = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var E = i ? ut(i) : null;
              E && (h += `

Check the render method of \`` + E + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var b = pi(f, a, t, l);
      return b.elementType = e, b.type = p, b.lanes = s, b._debugOwner = i, b;
    }
    function R0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = x0(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Xu(e, t, a, i) {
      var l = pi(de, e, i, t);
      return l.lanes = a, l;
    }
    function uD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = pi(Ge, e, i, t | lt);
      return l.elementType = gi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function sD(e, t, a, i) {
      var l = pi(Re, e, i, t);
      return l.elementType = Ve, l.lanes = a, l;
    }
    function cD(e, t, a, i) {
      var l = pi(ct, e, i, t);
      return l.elementType = Tt, l.lanes = a, l;
    }
    function cx(e, t, a, i) {
      var l = pi(je, e, i, t);
      l.elementType = nn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function w0(e, t, a) {
      var i = pi(X, e, null, t);
      return i.lanes = a, i;
    }
    function fD() {
      var e = pi(Q, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function dD(e) {
      var t = pi(vt, null, null, Fe);
      return t.stateNode = e, t;
    }
    function T0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = pi(W, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function fx(e, t) {
      return e === null && (e = pi(te, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = lg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = Ns(re), this.expirationTimes = Ns(sn), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = Ns(re), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ws; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Fu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function dx(e, t, a, i, l, s, f, p, h, E) {
      var b = new pD(e, t, a, p, h), M = lD(t, s);
      b.current = M, M.stateNode = b;
      {
        var O = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = O;
      }
      return Pg(M), b;
    }
    var _0 = "18.3.1";
    function vD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Or,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var k0, D0;
    k0 = !1, D0 = {};
    function px(e) {
      if (!e)
        return di;
      var t = ja(e), a = qw(t);
      if (t.tag === A) {
        var i = t.type;
        if (Bo(i))
          return HC(t, i, a);
      }
      return a;
    }
    function hD(e, t) {
      {
        var a = ja(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Va(a);
        if (l === null)
          return null;
        if (l.mode & Rt) {
          var s = ut(a) || "Component";
          if (!D0[s]) {
            D0[s] = !0;
            var f = En;
            try {
              Qt(l), a.mode & Rt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : Tn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function vx(e, t, a, i, l, s, f, p) {
      var h = !1, E = null;
      return dx(e, t, h, E, a, i, l, s, f);
    }
    function hx(e, t, a, i, l, s, f, p, h, E) {
      var b = !0, M = dx(a, i, b, e, l, s, f, p, h);
      M.context = px(null);
      var O = M.current, I = Da(), Y = Ku(O), K = Ml(I, Y);
      return K.callback = t ?? null, Vu(O, K, Y), bk(M, Y, I), M;
    }
    function tv(e, t, a, i) {
      Md(t, e);
      var l = t.current, s = Da(), f = Ku(l);
      zd(f);
      var p = px(a);
      t.context === null ? t.context = p : t.pendingContext = p, Zr && En !== null && !k0 && (k0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ut(En) || "Unknown"));
      var h = Ml(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var E = Vu(l, h, f);
      return E !== null && (yr(E, l, f, s), sm(E, l, f)), f;
    }
    function Zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mD(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fd(t);
            Tk(t, a);
          }
          break;
        }
        case Re: {
          Ul(function() {
            var l = Xa(e, Ye);
            if (l !== null) {
              var s = Da();
              yr(l, e, Ye, s);
            }
          });
          var i = Ye;
          O0(e, i);
          break;
        }
      }
    }
    function mx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = oh(a.retryLane, t));
    }
    function O0(e, t) {
      mx(e, t);
      var a = e.alternate;
      a && mx(a, t);
    }
    function yD(e) {
      if (e.tag === Re) {
        var t = _s, a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          yr(a, e, t, i);
        }
        O0(e, t);
      }
    }
    function gD(e) {
      if (e.tag === Re) {
        var t = Ku(e), a = Xa(e, t);
        if (a !== null) {
          var i = Da();
          yr(a, e, t, i);
        }
        O0(e, t);
      }
    }
    function yx(e) {
      var t = Iv(e);
      return t === null ? null : t.stateNode;
    }
    var gx = function(e) {
      return null;
    };
    function SD(e) {
      return gx(e);
    }
    var Sx = function(e) {
      return !1;
    };
    function CD(e) {
      return Sx(e);
    }
    var Cx = null, Ex = null, bx = null, xx = null, Rx = null, wx = null, Tx = null, _x = null, kx = null;
    {
      var Dx = function(e, t, a) {
        var i = t[a], l = Lt(e) ? e.slice() : Ct({}, e);
        return a + 1 === t.length ? (Lt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Dx(e[i], t, a + 1), l);
      }, Ox = function(e, t) {
        return Dx(e, t, 0);
      }, Nx = function(e, t, a, i) {
        var l = t[i], s = Lt(e) ? e.slice() : Ct({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Lt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = Nx(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Mx = function(e, t, a) {
        if (t.length !== a.length) {
          D("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              D("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Nx(e, t, a, 0);
      }, Lx = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Lt(e) ? e.slice() : Ct({}, e);
        return s[l] = Lx(e[l], t, a + 1, i), s;
      }, Ax = function(e, t, a) {
        return Lx(e, t, 0, a);
      }, N0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Cx = function(e, t, a, i) {
        var l = N0(e, t);
        if (l !== null) {
          var s = Ax(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Xa(e, Ye);
          f !== null && yr(f, e, Ye, sn);
        }
      }, Ex = function(e, t, a) {
        var i = N0(e, t);
        if (i !== null) {
          var l = Ox(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Ct({}, e.memoizedProps);
          var s = Xa(e, Ye);
          s !== null && yr(s, e, Ye, sn);
        }
      }, bx = function(e, t, a, i) {
        var l = N0(e, t);
        if (l !== null) {
          var s = Mx(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Xa(e, Ye);
          f !== null && yr(f, e, Ye, sn);
        }
      }, xx = function(e, t, a) {
        e.pendingProps = Ax(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Ye);
        i !== null && yr(i, e, Ye, sn);
      }, Rx = function(e, t) {
        e.pendingProps = Ox(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, Ye);
        a !== null && yr(a, e, Ye, sn);
      }, wx = function(e, t, a) {
        e.pendingProps = Mx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Ye);
        i !== null && yr(i, e, Ye, sn);
      }, Tx = function(e) {
        var t = Xa(e, Ye);
        t !== null && yr(t, e, Ye, sn);
      }, _x = function(e) {
        gx = e;
      }, kx = function(e) {
        Sx = e;
      };
    }
    function ED(e) {
      var t = Va(e);
      return t === null ? null : t.stateNode;
    }
    function bD(e) {
      return null;
    }
    function xD() {
      return En;
    }
    function RD(e) {
      var t = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return Nd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Cx,
        overrideHookStateDeletePath: Ex,
        overrideHookStateRenamePath: bx,
        overrideProps: xx,
        overridePropsDeletePath: Rx,
        overridePropsRenamePath: wx,
        setErrorHandler: _x,
        setSuspenseHandler: kx,
        scheduleUpdate: Tx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ED,
        findFiberByHostInstance: t || bD,
        // React Refresh
        findHostInstancesForRefresh: eD,
        scheduleRefresh: Zk,
        scheduleRoot: Jk,
        setRefreshHandler: Xk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: xD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: _0
      });
    }
    var zx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function M0(e) {
      this._internalRoot = e;
    }
    Jm.prototype.render = M0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ey(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = yx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      tv(e, t, null, null);
    }, Jm.prototype.unmount = M0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gb() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ul(function() {
          tv(null, e, null, null);
        }), zC(t);
      }
    };
    function wD(e, t) {
      if (!ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ux(e);
      var a = !1, i = !1, l = "", s = zx;
      t != null && (t.hydrate ? D("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ai && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = vx(e, Qh, null, a, i, l, s);
      Vh(f.current, e);
      var p = e.nodeType === Pn ? e.parentNode : e;
      return lp(p), new M0(f);
    }
    function Jm(e) {
      this._internalRoot = e;
    }
    function TD(e) {
      e && Ay(e);
    }
    Jm.prototype.unstable_scheduleHydration = TD;
    function _D(e, t, a) {
      if (!ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Ux(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = zx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var E = hx(t, null, e, Qh, i, s, f, p, h);
      if (Vh(E.current, e), lp(e), l)
        for (var b = 0; b < l.length; b++) {
          var M = l[b];
          NT(E, M);
        }
      return new Jm(E);
    }
    function ey(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ui || e.nodeType === rl || !J));
    }
    function nv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === ui || e.nodeType === rl || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ux(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), gp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var kD = y.ReactCurrentOwner, jx;
    jx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = yx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = L0(e), l = !!(i && Uu(i));
      l && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function L0(e) {
      return e ? e.nodeType === ui ? e.documentElement : e.firstChild : null;
    }
    function Fx() {
    }
    function DD(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var O = Zm(f);
            s.call(O);
          };
        }
        var f = hx(
          t,
          i,
          e,
          Fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Fx
        );
        e._reactRootContainer = f, Vh(f.current, e);
        var p = e.nodeType === Pn ? e.parentNode : e;
        return lp(p), Ul(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var O = Zm(b);
            E.call(O);
          };
        }
        var b = vx(
          e,
          Fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Fx
        );
        e._reactRootContainer = b, Vh(b.current, e);
        var M = e.nodeType === Pn ? e.parentNode : e;
        return lp(M), Ul(function() {
          tv(t, b, a, i);
        }), b;
      }
    }
    function OD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ty(e, t, a, i, l) {
      jx(a), OD(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = DD(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var h = Zm(f);
            p.call(h);
          };
        }
        tv(t, f, e, l);
      }
      return Zm(f);
    }
    var Px = !1;
    function ND(e) {
      {
        Px || (Px = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = kD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : hD(e, "findDOMNode");
    }
    function MD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ty(null, e, t, !0, a);
    }
    function LD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ty(null, e, t, !1, a);
    }
    function AD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gs(e))
        throw new Error("parentComponent must be a valid React Component");
      return ty(e, t, a, !1, i);
    }
    var Hx = !1;
    function zD(e) {
      if (Hx || (Hx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !nv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = gp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = L0(e), i = a && !Uu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ul(function() {
          ty(null, null, e, !1, function() {
            e._reactRootContainer = null, zC(e);
          });
        }), !0;
      } else {
        {
          var l = L0(e), s = !!(l && Uu(l)), f = e.nodeType === ea && nv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    bu(mD), My(yD), rf(gD), sh(Ya), ch(Tr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Pv(j1), Cc(c0, _k, Ul);
    function UD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ey(t))
        throw new Error("Target container is not a DOM element.");
      return vD(e, t, null, a);
    }
    function jD(e, t, a, i) {
      return AD(e, t, a, i);
    }
    var A0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Uu, _f, Ih, Sc, hs, c0]
    };
    function FD(e, t) {
      return A0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), wD(e, t);
    }
    function PD(e, t, a) {
      return A0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _D(e, t, a);
    }
    function HD(e) {
      return Gb() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ul(e);
    }
    var VD = RD({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: _0,
      rendererPackageName: "react-dom"
    });
    if (!VD && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Vx = window.location.protocol;
      /^(https?|file):$/.test(Vx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Vx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0, ni.createPortal = UD, ni.createRoot = FD, ni.findDOMNode = ND, ni.flushSync = HD, ni.hydrate = MD, ni.hydrateRoot = PD, ni.render = LD, ni.unmountComponentAtNode = zD, ni.unstable_batchedUpdates = c0, ni.unstable_renderSubtreeIntoContainer = jD, ni.version = _0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ni;
}
function iR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iR);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (iR(), I0.exports = ZD()) : I0.exports = JD();
var eO = I0.exports, B0, ay = eO;
if (process.env.NODE_ENV === "production")
  B0 = ay.createRoot, ay.hydrateRoot;
else {
  var Zx = ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  B0 = function(v, S) {
    Zx.usingClientEntryPoint = !0;
    try {
      return ay.createRoot(v, S);
    } finally {
      Zx.usingClientEntryPoint = !1;
    }
  };
}
var Z = fv();
const es = /* @__PURE__ */ YD(Z), tO = /* @__PURE__ */ $D({
  __proto__: null,
  default: es
}, [Z]), nO = 1, rO = 1e6;
let j0 = 0;
function aO() {
  return j0 = (j0 + 1) % Number.MAX_SAFE_INTEGER, j0.toString();
}
const F0 = /* @__PURE__ */ new Map(), Jx = (v) => {
  if (F0.has(v))
    return;
  const S = setTimeout(() => {
    F0.delete(v), sv({
      type: "REMOVE_TOAST",
      toastId: v
    });
  }, rO);
  F0.set(v, S);
}, iO = (v, S) => {
  switch (S.type) {
    case "ADD_TOAST":
      return {
        ...v,
        toasts: [S.toast, ...v.toasts].slice(0, nO)
      };
    case "UPDATE_TOAST":
      return {
        ...v,
        toasts: v.toasts.map(
          (y) => y.id === S.toast.id ? { ...y, ...S.toast } : y
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: y } = S;
      return y ? Jx(y) : v.toasts.forEach((R) => {
        Jx(R.id);
      }), {
        ...v,
        toasts: v.toasts.map(
          (R) => R.id === y || y === void 0 ? {
            ...R,
            open: !1
          } : R
        )
      };
    }
    case "REMOVE_TOAST":
      return S.toastId === void 0 ? {
        ...v,
        toasts: []
      } : {
        ...v,
        toasts: v.toasts.filter((y) => y.id !== S.toastId)
      };
  }
}, oy = [];
let ly = { toasts: [] };
function sv(v) {
  ly = iO(ly, v), oy.forEach((S) => {
    S(ly);
  });
}
function oO({ ...v }) {
  const S = aO(), y = (k) => sv({
    type: "UPDATE_TOAST",
    toast: { ...k, id: S }
  }), R = () => sv({ type: "DISMISS_TOAST", toastId: S });
  return sv({
    type: "ADD_TOAST",
    toast: {
      ...v,
      id: S,
      open: !0,
      onOpenChange: (k) => {
        k || R();
      }
    }
  }), {
    id: S,
    dismiss: R,
    update: y
  };
}
function lO() {
  const [v, S] = Z.useState(ly);
  return Z.useEffect(() => (oy.push(S), () => {
    const y = oy.indexOf(S);
    y > -1 && oy.splice(y, 1);
  }), [v]), {
    ...v,
    toast: oO,
    dismiss: (y) => sv({ type: "DISMISS_TOAST", toastId: y })
  };
}
function oR(v) {
  var S, y, R = "";
  if (typeof v == "string" || typeof v == "number") R += v;
  else if (typeof v == "object") if (Array.isArray(v)) {
    var k = v.length;
    for (S = 0; S < k; S++) v[S] && (y = oR(v[S])) && (R && (R += " "), R += y);
  } else for (y in v) v[y] && (R && (R += " "), R += y);
  return R;
}
function lR() {
  for (var v, S, y = 0, R = "", k = arguments.length; y < k; y++) (v = arguments[y]) && (S = oR(v)) && (R && (R += " "), R += S);
  return R;
}
const X0 = "-", uO = (v) => {
  const S = cO(v), {
    conflictingClassGroups: y,
    conflictingClassGroupModifiers: R
  } = v;
  return {
    getClassGroupId: (g) => {
      const U = g.split(X0);
      return U[0] === "" && U.length !== 1 && U.shift(), uR(U, S) || sO(g);
    },
    getConflictingClassGroupIds: (g, U) => {
      const j = y[g] || [];
      return U && R[g] ? [...j, ...R[g]] : j;
    }
  };
}, uR = (v, S) => {
  var g;
  if (v.length === 0)
    return S.classGroupId;
  const y = v[0], R = S.nextPart.get(y), k = R ? uR(v.slice(1), R) : void 0;
  if (k)
    return k;
  if (S.validators.length === 0)
    return;
  const D = v.join(X0);
  return (g = S.validators.find(({
    validator: U
  }) => U(D))) == null ? void 0 : g.classGroupId;
}, eR = /^\[(.+)\]$/, sO = (v) => {
  if (eR.test(v)) {
    const S = eR.exec(v)[1], y = S == null ? void 0 : S.substring(0, S.indexOf(":"));
    if (y)
      return "arbitrary.." + y;
  }
}, cO = (v) => {
  const {
    theme: S,
    prefix: y
  } = v, R = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return dO(Object.entries(v.classGroups), y).forEach(([D, g]) => {
    $0(g, R, D, S);
  }), R;
}, $0 = (v, S, y, R) => {
  v.forEach((k) => {
    if (typeof k == "string") {
      const D = k === "" ? S : tR(S, k);
      D.classGroupId = y;
      return;
    }
    if (typeof k == "function") {
      if (fO(k)) {
        $0(k(R), S, y, R);
        return;
      }
      S.validators.push({
        validator: k,
        classGroupId: y
      });
      return;
    }
    Object.entries(k).forEach(([D, g]) => {
      $0(g, tR(S, D), y, R);
    });
  });
}, tR = (v, S) => {
  let y = v;
  return S.split(X0).forEach((R) => {
    y.nextPart.has(R) || y.nextPart.set(R, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), y = y.nextPart.get(R);
  }), y;
}, fO = (v) => v.isThemeGetter, dO = (v, S) => S ? v.map(([y, R]) => {
  const k = R.map((D) => typeof D == "string" ? S + D : typeof D == "object" ? Object.fromEntries(Object.entries(D).map(([g, U]) => [S + g, U])) : D);
  return [y, k];
}) : v, pO = (v) => {
  if (v < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let S = 0, y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  const k = (D, g) => {
    y.set(D, g), S++, S > v && (S = 0, R = y, y = /* @__PURE__ */ new Map());
  };
  return {
    get(D) {
      let g = y.get(D);
      if (g !== void 0)
        return g;
      if ((g = R.get(D)) !== void 0)
        return k(D, g), g;
    },
    set(D, g) {
      y.has(D) ? y.set(D, g) : k(D, g);
    }
  };
}, sR = "!", vO = (v) => {
  const {
    separator: S,
    experimentalParseClassName: y
  } = v, R = S.length === 1, k = S[0], D = S.length, g = (U) => {
    const j = [];
    let A = 0, te = 0, F;
    for (let fe = 0; fe < U.length; fe++) {
      let Oe = U[fe];
      if (A === 0) {
        if (Oe === k && (R || U.slice(fe, fe + D) === S)) {
          j.push(U.slice(te, fe)), te = fe + D;
          continue;
        }
        if (Oe === "/") {
          F = fe;
          continue;
        }
      }
      Oe === "[" ? A++ : Oe === "]" && A--;
    }
    const W = j.length === 0 ? U : U.substring(te), Q = W.startsWith(sR), X = Q ? W.substring(1) : W, de = F && F > te ? F - te : void 0;
    return {
      modifiers: j,
      hasImportantModifier: Q,
      baseClassName: X,
      maybePostfixModifierPosition: de
    };
  };
  return y ? (U) => y({
    className: U,
    parseClassName: g
  }) : g;
}, hO = (v) => {
  if (v.length <= 1)
    return v;
  const S = [];
  let y = [];
  return v.forEach((R) => {
    R[0] === "[" ? (S.push(...y.sort(), R), y = []) : y.push(R);
  }), S.push(...y.sort()), S;
}, mO = (v) => ({
  cache: pO(v.cacheSize),
  parseClassName: vO(v),
  ...uO(v)
}), yO = /\s+/, gO = (v, S) => {
  const {
    parseClassName: y,
    getClassGroupId: R,
    getConflictingClassGroupIds: k
  } = S, D = [], g = v.trim().split(yO);
  let U = "";
  for (let j = g.length - 1; j >= 0; j -= 1) {
    const A = g[j], {
      modifiers: te,
      hasImportantModifier: F,
      baseClassName: W,
      maybePostfixModifierPosition: Q
    } = y(A);
    let X = !!Q, de = R(X ? W.substring(0, Q) : W);
    if (!de) {
      if (!X) {
        U = A + (U.length > 0 ? " " + U : U);
        continue;
      }
      if (de = R(W), !de) {
        U = A + (U.length > 0 ? " " + U : U);
        continue;
      }
      X = !1;
    }
    const fe = hO(te).join(":"), Oe = F ? fe + sR : fe, be = Oe + de;
    if (D.includes(be))
      continue;
    D.push(be);
    const ze = k(de, X);
    for (let Ge = 0; Ge < ze.length; ++Ge) {
      const Re = ze[Ge];
      D.push(Oe + Re);
    }
    U = A + (U.length > 0 ? " " + U : U);
  }
  return U;
};
function SO() {
  let v = 0, S, y, R = "";
  for (; v < arguments.length; )
    (S = arguments[v++]) && (y = cR(S)) && (R && (R += " "), R += y);
  return R;
}
const cR = (v) => {
  if (typeof v == "string")
    return v;
  let S, y = "";
  for (let R = 0; R < v.length; R++)
    v[R] && (S = cR(v[R])) && (y && (y += " "), y += S);
  return y;
};
function CO(v, ...S) {
  let y, R, k, D = g;
  function g(j) {
    const A = S.reduce((te, F) => F(te), v());
    return y = mO(A), R = y.cache.get, k = y.cache.set, D = U, U(j);
  }
  function U(j) {
    const A = R(j);
    if (A)
      return A;
    const te = gO(j, y);
    return k(j, te), te;
  }
  return function() {
    return D(SO.apply(null, arguments));
  };
}
const wn = (v) => {
  const S = (y) => y[v] || [];
  return S.isThemeGetter = !0, S;
}, fR = /^\[(?:([a-z-]+):)?(.+)\]$/i, EO = /^\d+\/\d+$/, bO = /* @__PURE__ */ new Set(["px", "full", "screen"]), xO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, RO = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, TO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pl = (v) => Zf(v) || bO.has(v) || EO.test(v), Zu = (v) => ed(v, "length", zO), Zf = (v) => !!v && !Number.isNaN(Number(v)), P0 = (v) => ed(v, "number", Zf), ov = (v) => !!v && Number.isInteger(Number(v)), kO = (v) => v.endsWith("%") && Zf(v.slice(0, -1)), wt = (v) => fR.test(v), Ju = (v) => xO.test(v), DO = /* @__PURE__ */ new Set(["length", "size", "percentage"]), OO = (v) => ed(v, DO, dR), NO = (v) => ed(v, "position", dR), MO = /* @__PURE__ */ new Set(["image", "url"]), LO = (v) => ed(v, MO, jO), AO = (v) => ed(v, "", UO), lv = () => !0, ed = (v, S, y) => {
  const R = fR.exec(v);
  return R ? R[1] ? typeof S == "string" ? R[1] === S : S.has(R[1]) : y(R[2]) : !1;
}, zO = (v) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  RO.test(v) && !wO.test(v)
), dR = () => !1, UO = (v) => TO.test(v), jO = (v) => _O.test(v), FO = () => {
  const v = wn("colors"), S = wn("spacing"), y = wn("blur"), R = wn("brightness"), k = wn("borderColor"), D = wn("borderRadius"), g = wn("borderSpacing"), U = wn("borderWidth"), j = wn("contrast"), A = wn("grayscale"), te = wn("hueRotate"), F = wn("invert"), W = wn("gap"), Q = wn("gradientColorStops"), X = wn("gradientColorStopPositions"), de = wn("inset"), fe = wn("margin"), Oe = wn("opacity"), be = wn("padding"), ze = wn("saturate"), Ge = wn("scale"), Re = wn("sepia"), it = wn("skew"), He = wn("space"), dt = wn("translate"), Xt = () => ["auto", "contain", "none"], vt = () => ["auto", "hidden", "clip", "visible", "scroll"], ct = () => ["auto", wt, S], et = () => [wt, S], je = () => ["", Pl, Zu], tt = () => ["auto", Zf, wt], _t = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ye = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ee = () => ["", "0", wt], he = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [Zf, wt];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [lv],
      spacing: [Pl, Zu],
      blur: ["none", "", Ju, wt],
      brightness: L(),
      borderColor: [v],
      borderRadius: ["none", "", "full", Ju, wt],
      borderSpacing: et(),
      borderWidth: je(),
      contrast: L(),
      grayscale: Ee(),
      hueRotate: L(),
      invert: Ee(),
      gap: et(),
      gradientColorStops: [v],
      gradientColorStopPositions: [kO, Zu],
      inset: ct(),
      margin: ct(),
      opacity: L(),
      padding: et(),
      saturate: L(),
      scale: L(),
      sepia: Ee(),
      skew: L(),
      space: et(),
      translate: et()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", wt]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ju]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": he()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": he()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [..._t(), wt]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: vt()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": vt()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": vt()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Xt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Xt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Xt()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [de]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [de]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [de]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [de]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [de]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [de]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [de]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [de]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [de]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ov, wt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ct()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", wt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ee()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ee()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ov, wt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [lv]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ov, wt]
        }, wt]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": tt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": tt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [lv]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ov, wt]
        }, wt]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": tt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": tt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", wt]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", wt]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [W]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [W]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [W]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ae()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ae(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ae(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [be]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [be]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [be]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [be]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [be]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [be]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [be]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [be]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [be]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [fe]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [fe]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [fe]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [fe]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [fe]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [fe]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [fe]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [fe]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [fe]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [He]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [He]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", wt, S]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [wt, S, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [wt, S, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ju]
        }, Ju]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [wt, S, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [wt, S, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [wt, S, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [wt, S, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ju, Zu]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", P0]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lv]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", wt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Zf, P0]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pl, wt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", wt]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", wt]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [v]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Oe]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [v]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Oe]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Pl, Zu]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Pl, wt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [v]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: et()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", wt]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", wt]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [Oe]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [..._t(), NO]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", OO]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, LO]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [v]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [X]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [X]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [X]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [Q]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [Q]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [Q]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [D]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [D]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [D]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [D]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [D]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [D]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [D]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [D]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [D]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [D]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [D]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [D]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [D]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [D]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [D]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [U]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [U]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [U]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [U]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [U]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [U]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [U]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [U]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [U]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Oe]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ye(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [U]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [U]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [Oe]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ye()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [k]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [k]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [k]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [k]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [k]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [k]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [k]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [k]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [k]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [k]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ye()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Pl, wt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pl, Zu]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [v]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: je()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [v]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Oe]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Pl, Zu]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [v]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ju, AO]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [lv]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Oe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [y]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [R]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ju, wt]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [te]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [F]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ze]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Re]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [y]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [R]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [te]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [F]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Oe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ze]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Re]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [g]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [g]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [g]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", wt]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: L()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", wt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: L()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", wt]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [Ge]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [Ge]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [Ge]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ov, wt]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [dt]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [dt]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [it]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [it]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", wt]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", v]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", wt]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [v]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": et()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": et()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": et()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": et()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": et()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": et()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": et()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": et()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": et()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": et()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": et()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": et()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": et()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": et()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": et()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": et()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": et()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": et()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", wt]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [v, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Pl, Zu, P0]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [v, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, PO = /* @__PURE__ */ CO(FO);
function Yr(...v) {
  return PO(lR(v));
}
const Y0 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  "div",
  {
    ref: y,
    className: Yr(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      v
    ),
    ...S
  }
));
Y0.displayName = "Card";
const HO = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  "div",
  {
    ref: y,
    className: Yr("flex flex-col space-y-1.5 p-6", v),
    ...S
  }
));
HO.displayName = "CardHeader";
const VO = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  "h3",
  {
    ref: y,
    className: Yr(
      "text-2xl font-semibold leading-none tracking-tight",
      v
    ),
    ...S
  }
));
VO.displayName = "CardTitle";
const IO = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  "p",
  {
    ref: y,
    className: Yr("text-sm text-muted-foreground", v),
    ...S
  }
));
IO.displayName = "CardDescription";
const BO = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx("div", { ref: y, className: Yr("p-6 pt-0", v), ...S }));
BO.displayName = "CardContent";
const $O = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  "div",
  {
    ref: y,
    className: Yr("flex items-center p-6 pt-0", v),
    ...S
  }
));
$O.displayName = "CardFooter";
function Ui(v, S, { checkForDefaultPrevented: y = !0 } = {}) {
  return function(k) {
    if (v == null || v(k), y === !1 || !k.defaultPrevented)
      return S == null ? void 0 : S(k);
  };
}
function Z0(v, S = []) {
  let y = [];
  function R(D, g) {
    const U = Z.createContext(g), j = y.length;
    y = [...y, g];
    const A = (F) => {
      var Oe;
      const { scope: W, children: Q, ...X } = F, de = ((Oe = W == null ? void 0 : W[v]) == null ? void 0 : Oe[j]) || U, fe = Z.useMemo(() => X, Object.values(X));
      return /* @__PURE__ */ ne.jsx(de.Provider, { value: fe, children: Q });
    };
    A.displayName = D + "Provider";
    function te(F, W) {
      var de;
      const Q = ((de = W == null ? void 0 : W[v]) == null ? void 0 : de[j]) || U, X = Z.useContext(Q);
      if (X) return X;
      if (g !== void 0) return g;
      throw new Error(`\`${F}\` must be used within \`${D}\``);
    }
    return [A, te];
  }
  const k = () => {
    const D = y.map((g) => Z.createContext(g));
    return function(U) {
      const j = (U == null ? void 0 : U[v]) || D;
      return Z.useMemo(
        () => ({ [`__scope${v}`]: { ...U, [v]: j } }),
        [U, j]
      );
    };
  };
  return k.scopeName = v, [R, YO(k, ...S)];
}
function YO(...v) {
  const S = v[0];
  if (v.length === 1) return S;
  const y = () => {
    const R = v.map((k) => ({
      useScope: k(),
      scopeName: k.scopeName
    }));
    return function(D) {
      const g = R.reduce((U, { useScope: j, scopeName: A }) => {
        const F = j(D)[`__scope${A}`];
        return { ...U, ...F };
      }, {});
      return Z.useMemo(() => ({ [`__scope${S.scopeName}`]: g }), [g]);
    };
  };
  return y.scopeName = S.scopeName, y;
}
function WO(v, S = []) {
  let y = [];
  function R(D, g) {
    const U = Z.createContext(g), j = y.length;
    y = [...y, g];
    function A(F) {
      const { scope: W, children: Q, ...X } = F, de = (W == null ? void 0 : W[v][j]) || U, fe = Z.useMemo(() => X, Object.values(X));
      return /* @__PURE__ */ ne.jsx(de.Provider, { value: fe, children: Q });
    }
    function te(F, W) {
      const Q = (W == null ? void 0 : W[v][j]) || U, X = Z.useContext(Q);
      if (X) return X;
      if (g !== void 0) return g;
      throw new Error(`\`${F}\` must be used within \`${D}\``);
    }
    return A.displayName = D + "Provider", [A, te];
  }
  const k = () => {
    const D = y.map((g) => Z.createContext(g));
    return function(U) {
      const j = (U == null ? void 0 : U[v]) || D;
      return Z.useMemo(
        () => ({ [`__scope${v}`]: { ...U, [v]: j } }),
        [U, j]
      );
    };
  };
  return k.scopeName = v, [R, GO(k, ...S)];
}
function GO(...v) {
  const S = v[0];
  if (v.length === 1) return S;
  const y = () => {
    const R = v.map((k) => ({
      useScope: k(),
      scopeName: k.scopeName
    }));
    return function(D) {
      const g = R.reduce((U, { useScope: j, scopeName: A }) => {
        const F = j(D)[`__scope${A}`];
        return { ...U, ...F };
      }, {});
      return Z.useMemo(() => ({ [`__scope${S.scopeName}`]: g }), [g]);
    };
  };
  return y.scopeName = S.scopeName, y;
}
function QO(v, S) {
  typeof v == "function" ? v(S) : v != null && (v.current = S);
}
function pR(...v) {
  return (S) => v.forEach((y) => QO(y, S));
}
function Jf(...v) {
  return Z.useCallback(pR(...v), v);
}
var cv = Z.forwardRef((v, S) => {
  const { children: y, ...R } = v, k = Z.Children.toArray(y), D = k.find(qO);
  if (D) {
    const g = D.props.children, U = k.map((j) => j === D ? Z.Children.count(g) > 1 ? Z.Children.only(null) : Z.isValidElement(g) ? g.props.children : null : j);
    return /* @__PURE__ */ ne.jsx(W0, { ...R, ref: S, children: Z.isValidElement(g) ? Z.cloneElement(g, void 0, U) : null });
  }
  return /* @__PURE__ */ ne.jsx(W0, { ...R, ref: S, children: y });
});
cv.displayName = "Slot";
var W0 = Z.forwardRef((v, S) => {
  const { children: y, ...R } = v;
  if (Z.isValidElement(y)) {
    const k = ZO(y);
    return Z.cloneElement(y, {
      ...XO(R, y.props),
      // @ts-ignore
      ref: S ? pR(S, k) : k
    });
  }
  return Z.Children.count(y) > 1 ? Z.Children.only(null) : null;
});
W0.displayName = "SlotClone";
var KO = ({ children: v }) => /* @__PURE__ */ ne.jsx(ne.Fragment, { children: v });
function qO(v) {
  return Z.isValidElement(v) && v.type === KO;
}
function XO(v, S) {
  const y = { ...S };
  for (const R in S) {
    const k = v[R], D = S[R];
    /^on[A-Z]/.test(R) ? k && D ? y[R] = (...U) => {
      D(...U), k(...U);
    } : k && (y[R] = k) : R === "style" ? y[R] = { ...k, ...D } : R === "className" && (y[R] = [k, D].filter(Boolean).join(" "));
  }
  return { ...v, ...y };
}
function ZO(v) {
  var R, k;
  let S = (R = Object.getOwnPropertyDescriptor(v.props, "ref")) == null ? void 0 : R.get, y = S && "isReactWarning" in S && S.isReactWarning;
  return y ? v.ref : (S = (k = Object.getOwnPropertyDescriptor(v, "ref")) == null ? void 0 : k.get, y = S && "isReactWarning" in S && S.isReactWarning, y ? v.props.ref : v.props.ref || v.ref);
}
function JO(v) {
  const S = v + "CollectionProvider", [y, R] = WO(S), [k, D] = y(
    S,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), g = (Q) => {
    const { scope: X, children: de } = Q, fe = es.useRef(null), Oe = es.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ne.jsx(k, { scope: X, itemMap: Oe, collectionRef: fe, children: de });
  };
  g.displayName = S;
  const U = v + "CollectionSlot", j = es.forwardRef(
    (Q, X) => {
      const { scope: de, children: fe } = Q, Oe = D(U, de), be = Jf(X, Oe.collectionRef);
      return /* @__PURE__ */ ne.jsx(cv, { ref: be, children: fe });
    }
  );
  j.displayName = U;
  const A = v + "CollectionItemSlot", te = "data-radix-collection-item", F = es.forwardRef(
    (Q, X) => {
      const { scope: de, children: fe, ...Oe } = Q, be = es.useRef(null), ze = Jf(X, be), Ge = D(A, de);
      return es.useEffect(() => (Ge.itemMap.set(be, { ref: be, ...Oe }), () => void Ge.itemMap.delete(be))), /* @__PURE__ */ ne.jsx(cv, { [te]: "", ref: ze, children: fe });
    }
  );
  F.displayName = A;
  function W(Q) {
    const X = D(v + "CollectionConsumer", Q);
    return es.useCallback(() => {
      const fe = X.collectionRef.current;
      if (!fe) return [];
      const Oe = Array.from(fe.querySelectorAll(`[${te}]`));
      return Array.from(X.itemMap.values()).sort(
        (Ge, Re) => Oe.indexOf(Ge.ref.current) - Oe.indexOf(Re.ref.current)
      );
    }, [X.collectionRef, X.itemMap]);
  }
  return [
    { Provider: g, Slot: j, ItemSlot: F },
    W,
    R
  ];
}
function eN(v, S = []) {
  let y = [];
  function R(D, g) {
    const U = Z.createContext(g), j = y.length;
    y = [...y, g];
    function A(F) {
      const { scope: W, children: Q, ...X } = F, de = (W == null ? void 0 : W[v][j]) || U, fe = Z.useMemo(() => X, Object.values(X));
      return /* @__PURE__ */ ne.jsx(de.Provider, { value: fe, children: Q });
    }
    function te(F, W) {
      const Q = (W == null ? void 0 : W[v][j]) || U, X = Z.useContext(Q);
      if (X) return X;
      if (g !== void 0) return g;
      throw new Error(`\`${F}\` must be used within \`${D}\``);
    }
    return A.displayName = D + "Provider", [A, te];
  }
  const k = () => {
    const D = y.map((g) => Z.createContext(g));
    return function(U) {
      const j = (U == null ? void 0 : U[v]) || D;
      return Z.useMemo(
        () => ({ [`__scope${v}`]: { ...U, [v]: j } }),
        [U, j]
      );
    };
  };
  return k.scopeName = v, [R, tN(k, ...S)];
}
function tN(...v) {
  const S = v[0];
  if (v.length === 1) return S;
  const y = () => {
    const R = v.map((k) => ({
      useScope: k(),
      scopeName: k.scopeName
    }));
    return function(D) {
      const g = R.reduce((U, { useScope: j, scopeName: A }) => {
        const F = j(D)[`__scope${A}`];
        return { ...U, ...F };
      }, {});
      return Z.useMemo(() => ({ [`__scope${S.scopeName}`]: g }), [g]);
    };
  };
  return y.scopeName = S.scopeName, y;
}
var sy = globalThis != null && globalThis.document ? Z.useLayoutEffect : () => {
}, nN = tO.useId || (() => {
}), rN = 0;
function vR(v) {
  const [S, y] = Z.useState(nN());
  return sy(() => {
    v || y((R) => R ?? String(rN++));
  }, [v]), v || (S ? `radix-${S}` : "");
}
var aN = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Zo = aN.reduce((v, S) => {
  const y = Z.forwardRef((R, k) => {
    const { asChild: D, ...g } = R, U = D ? cv : S;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ ne.jsx(U, { ...g, ref: k });
  });
  return y.displayName = `Primitive.${S}`, { ...v, [S]: y };
}, {});
function J0(v) {
  const S = Z.useRef(v);
  return Z.useEffect(() => {
    S.current = v;
  }), Z.useMemo(() => (...y) => {
    var R;
    return (R = S.current) == null ? void 0 : R.call(S, ...y);
  }, []);
}
function eC({
  prop: v,
  defaultProp: S,
  onChange: y = () => {
  }
}) {
  const [R, k] = iN({ defaultProp: S, onChange: y }), D = v !== void 0, g = D ? v : R, U = J0(y), j = Z.useCallback(
    (A) => {
      if (D) {
        const F = typeof A == "function" ? A(v) : A;
        F !== v && U(F);
      } else
        k(A);
    },
    [D, v, k, U]
  );
  return [g, j];
}
function iN({
  defaultProp: v,
  onChange: S
}) {
  const y = Z.useState(v), [R] = y, k = Z.useRef(R), D = J0(S);
  return Z.useEffect(() => {
    k.current !== R && (D(R), k.current = R);
  }, [R, k, D]), y;
}
var oN = Z.createContext(void 0);
function tC(v) {
  const S = Z.useContext(oN);
  return v || S || "ltr";
}
var H0 = "rovingFocusGroup.onEntryFocus", lN = { bubbles: !1, cancelable: !0 }, cy = "RovingFocusGroup", [G0, hR, uN] = JO(cy), [sN, fy] = eN(
  cy,
  [uN]
), [cN, fN] = sN(cy), mR = Z.forwardRef(
  (v, S) => /* @__PURE__ */ ne.jsx(G0.Provider, { scope: v.__scopeRovingFocusGroup, children: /* @__PURE__ */ ne.jsx(G0.Slot, { scope: v.__scopeRovingFocusGroup, children: /* @__PURE__ */ ne.jsx(dN, { ...v, ref: S }) }) })
);
mR.displayName = cy;
var dN = Z.forwardRef((v, S) => {
  const {
    __scopeRovingFocusGroup: y,
    orientation: R,
    loop: k = !1,
    dir: D,
    currentTabStopId: g,
    defaultCurrentTabStopId: U,
    onCurrentTabStopIdChange: j,
    onEntryFocus: A,
    preventScrollOnEntryFocus: te = !1,
    ...F
  } = v, W = Z.useRef(null), Q = Jf(S, W), X = tC(D), [de = null, fe] = eC({
    prop: g,
    defaultProp: U,
    onChange: j
  }), [Oe, be] = Z.useState(!1), ze = J0(A), Ge = hR(y), Re = Z.useRef(!1), [it, He] = Z.useState(0);
  return Z.useEffect(() => {
    const dt = W.current;
    if (dt)
      return dt.addEventListener(H0, ze), () => dt.removeEventListener(H0, ze);
  }, [ze]), /* @__PURE__ */ ne.jsx(
    cN,
    {
      scope: y,
      orientation: R,
      dir: X,
      loop: k,
      currentTabStopId: de,
      onItemFocus: Z.useCallback(
        (dt) => fe(dt),
        [fe]
      ),
      onItemShiftTab: Z.useCallback(() => be(!0), []),
      onFocusableItemAdd: Z.useCallback(
        () => He((dt) => dt + 1),
        []
      ),
      onFocusableItemRemove: Z.useCallback(
        () => He((dt) => dt - 1),
        []
      ),
      children: /* @__PURE__ */ ne.jsx(
        Zo.div,
        {
          tabIndex: Oe || it === 0 ? -1 : 0,
          "data-orientation": R,
          ...F,
          ref: Q,
          style: { outline: "none", ...v.style },
          onMouseDown: Ui(v.onMouseDown, () => {
            Re.current = !0;
          }),
          onFocus: Ui(v.onFocus, (dt) => {
            const Xt = !Re.current;
            if (dt.target === dt.currentTarget && Xt && !Oe) {
              const vt = new CustomEvent(H0, lN);
              if (dt.currentTarget.dispatchEvent(vt), !vt.defaultPrevented) {
                const ct = Ge().filter((ye) => ye.focusable), et = ct.find((ye) => ye.active), je = ct.find((ye) => ye.id === de), _t = [et, je, ...ct].filter(
                  Boolean
                ).map((ye) => ye.ref.current);
                SR(_t, te);
              }
            }
            Re.current = !1;
          }),
          onBlur: Ui(v.onBlur, () => be(!1))
        }
      )
    }
  );
}), yR = "RovingFocusGroupItem", gR = Z.forwardRef(
  (v, S) => {
    const {
      __scopeRovingFocusGroup: y,
      focusable: R = !0,
      active: k = !1,
      tabStopId: D,
      ...g
    } = v, U = vR(), j = D || U, A = fN(yR, y), te = A.currentTabStopId === j, F = hR(y), { onFocusableItemAdd: W, onFocusableItemRemove: Q } = A;
    return Z.useEffect(() => {
      if (R)
        return W(), () => Q();
    }, [R, W, Q]), /* @__PURE__ */ ne.jsx(
      G0.ItemSlot,
      {
        scope: y,
        id: j,
        focusable: R,
        active: k,
        children: /* @__PURE__ */ ne.jsx(
          Zo.span,
          {
            tabIndex: te ? 0 : -1,
            "data-orientation": A.orientation,
            ...g,
            ref: S,
            onMouseDown: Ui(v.onMouseDown, (X) => {
              R ? A.onItemFocus(j) : X.preventDefault();
            }),
            onFocus: Ui(v.onFocus, () => A.onItemFocus(j)),
            onKeyDown: Ui(v.onKeyDown, (X) => {
              if (X.key === "Tab" && X.shiftKey) {
                A.onItemShiftTab();
                return;
              }
              if (X.target !== X.currentTarget) return;
              const de = hN(X, A.orientation, A.dir);
              if (de !== void 0) {
                if (X.metaKey || X.ctrlKey || X.altKey || X.shiftKey) return;
                X.preventDefault();
                let Oe = F().filter((be) => be.focusable).map((be) => be.ref.current);
                if (de === "last") Oe.reverse();
                else if (de === "prev" || de === "next") {
                  de === "prev" && Oe.reverse();
                  const be = Oe.indexOf(X.currentTarget);
                  Oe = A.loop ? mN(Oe, be + 1) : Oe.slice(be + 1);
                }
                setTimeout(() => SR(Oe));
              }
            })
          }
        )
      }
    );
  }
);
gR.displayName = yR;
var pN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function vN(v, S) {
  return S !== "rtl" ? v : v === "ArrowLeft" ? "ArrowRight" : v === "ArrowRight" ? "ArrowLeft" : v;
}
function hN(v, S, y) {
  const R = vN(v.key, y);
  if (!(S === "vertical" && ["ArrowLeft", "ArrowRight"].includes(R)) && !(S === "horizontal" && ["ArrowUp", "ArrowDown"].includes(R)))
    return pN[R];
}
function SR(v, S = !1) {
  const y = document.activeElement;
  for (const R of v)
    if (R === y || (R.focus({ preventScroll: S }), document.activeElement !== y)) return;
}
function mN(v, S) {
  return v.map((y, R) => v[(S + R) % v.length]);
}
var CR = mR, ER = gR;
function yN(v, S) {
  return Z.useReducer((y, R) => S[y][R] ?? y, v);
}
var nC = (v) => {
  const { present: S, children: y } = v, R = gN(S), k = typeof y == "function" ? y({ present: R.isPresent }) : Z.Children.only(y), D = Jf(R.ref, SN(k));
  return typeof y == "function" || R.isPresent ? Z.cloneElement(k, { ref: D }) : null;
};
nC.displayName = "Presence";
function gN(v) {
  const [S, y] = Z.useState(), R = Z.useRef({}), k = Z.useRef(v), D = Z.useRef("none"), g = v ? "mounted" : "unmounted", [U, j] = yN(g, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Z.useEffect(() => {
    const A = iy(R.current);
    D.current = U === "mounted" ? A : "none";
  }, [U]), sy(() => {
    const A = R.current, te = k.current;
    if (te !== v) {
      const W = D.current, Q = iy(A);
      v ? j("MOUNT") : Q === "none" || (A == null ? void 0 : A.display) === "none" ? j("UNMOUNT") : j(te && W !== Q ? "ANIMATION_OUT" : "UNMOUNT"), k.current = v;
    }
  }, [v, j]), sy(() => {
    if (S) {
      let A;
      const te = S.ownerDocument.defaultView ?? window, F = (Q) => {
        const de = iy(R.current).includes(Q.animationName);
        if (Q.target === S && de && (j("ANIMATION_END"), !k.current)) {
          const fe = S.style.animationFillMode;
          S.style.animationFillMode = "forwards", A = te.setTimeout(() => {
            S.style.animationFillMode === "forwards" && (S.style.animationFillMode = fe);
          });
        }
      }, W = (Q) => {
        Q.target === S && (D.current = iy(R.current));
      };
      return S.addEventListener("animationstart", W), S.addEventListener("animationcancel", F), S.addEventListener("animationend", F), () => {
        te.clearTimeout(A), S.removeEventListener("animationstart", W), S.removeEventListener("animationcancel", F), S.removeEventListener("animationend", F);
      };
    } else
      j("ANIMATION_END");
  }, [S, j]), {
    isPresent: ["mounted", "unmountSuspended"].includes(U),
    ref: Z.useCallback((A) => {
      A && (R.current = getComputedStyle(A)), y(A);
    }, [])
  };
}
function iy(v) {
  return (v == null ? void 0 : v.animationName) || "none";
}
function SN(v) {
  var R, k;
  let S = (R = Object.getOwnPropertyDescriptor(v.props, "ref")) == null ? void 0 : R.get, y = S && "isReactWarning" in S && S.isReactWarning;
  return y ? v.ref : (S = (k = Object.getOwnPropertyDescriptor(v, "ref")) == null ? void 0 : k.get, y = S && "isReactWarning" in S && S.isReactWarning, y ? v.props.ref : v.props.ref || v.ref);
}
var rC = "Tabs", [CN, XN] = Z0(rC, [
  fy
]), bR = fy(), [EN, aC] = CN(rC), xR = Z.forwardRef(
  (v, S) => {
    const {
      __scopeTabs: y,
      value: R,
      onValueChange: k,
      defaultValue: D,
      orientation: g = "horizontal",
      dir: U,
      activationMode: j = "automatic",
      ...A
    } = v, te = tC(U), [F, W] = eC({
      prop: R,
      onChange: k,
      defaultProp: D
    });
    return /* @__PURE__ */ ne.jsx(
      EN,
      {
        scope: y,
        baseId: vR(),
        value: F,
        onValueChange: W,
        orientation: g,
        dir: te,
        activationMode: j,
        children: /* @__PURE__ */ ne.jsx(
          Zo.div,
          {
            dir: te,
            "data-orientation": g,
            ...A,
            ref: S
          }
        )
      }
    );
  }
);
xR.displayName = rC;
var RR = "TabsList", wR = Z.forwardRef(
  (v, S) => {
    const { __scopeTabs: y, loop: R = !0, ...k } = v, D = aC(RR, y), g = bR(y);
    return /* @__PURE__ */ ne.jsx(
      CR,
      {
        asChild: !0,
        ...g,
        orientation: D.orientation,
        dir: D.dir,
        loop: R,
        children: /* @__PURE__ */ ne.jsx(
          Zo.div,
          {
            role: "tablist",
            "aria-orientation": D.orientation,
            ...k,
            ref: S
          }
        )
      }
    );
  }
);
wR.displayName = RR;
var TR = "TabsTrigger", _R = Z.forwardRef(
  (v, S) => {
    const { __scopeTabs: y, value: R, disabled: k = !1, ...D } = v, g = aC(TR, y), U = bR(y), j = OR(g.baseId, R), A = NR(g.baseId, R), te = R === g.value;
    return /* @__PURE__ */ ne.jsx(
      ER,
      {
        asChild: !0,
        ...U,
        focusable: !k,
        active: te,
        children: /* @__PURE__ */ ne.jsx(
          Zo.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": te,
            "aria-controls": A,
            "data-state": te ? "active" : "inactive",
            "data-disabled": k ? "" : void 0,
            disabled: k,
            id: j,
            ...D,
            ref: S,
            onMouseDown: Ui(v.onMouseDown, (F) => {
              !k && F.button === 0 && F.ctrlKey === !1 ? g.onValueChange(R) : F.preventDefault();
            }),
            onKeyDown: Ui(v.onKeyDown, (F) => {
              [" ", "Enter"].includes(F.key) && g.onValueChange(R);
            }),
            onFocus: Ui(v.onFocus, () => {
              const F = g.activationMode !== "manual";
              !te && !k && F && g.onValueChange(R);
            })
          }
        )
      }
    );
  }
);
_R.displayName = TR;
var kR = "TabsContent", DR = Z.forwardRef(
  (v, S) => {
    const { __scopeTabs: y, value: R, forceMount: k, children: D, ...g } = v, U = aC(kR, y), j = OR(U.baseId, R), A = NR(U.baseId, R), te = R === U.value, F = Z.useRef(te);
    return Z.useEffect(() => {
      const W = requestAnimationFrame(() => F.current = !1);
      return () => cancelAnimationFrame(W);
    }, []), /* @__PURE__ */ ne.jsx(nC, { present: k || te, children: ({ present: W }) => /* @__PURE__ */ ne.jsx(
      Zo.div,
      {
        "data-state": te ? "active" : "inactive",
        "data-orientation": U.orientation,
        role: "tabpanel",
        "aria-labelledby": j,
        hidden: !W,
        id: A,
        tabIndex: 0,
        ...g,
        ref: S,
        style: {
          ...v.style,
          animationDuration: F.current ? "0s" : void 0
        },
        children: W && D
      }
    ) });
  }
);
DR.displayName = kR;
function OR(v, S) {
  return `${v}-trigger-${S}`;
}
function NR(v, S) {
  return `${v}-content-${S}`;
}
var bN = xR, MR = wR, LR = _R, AR = DR;
const xN = bN, zR = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  MR,
  {
    ref: y,
    className: Yr(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      v
    ),
    ...S
  }
));
zR.displayName = MR.displayName;
const Q0 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  LR,
  {
    ref: y,
    className: Yr(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      v
    ),
    ...S
  }
));
Q0.displayName = LR.displayName;
const K0 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  AR,
  {
    ref: y,
    className: Yr(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      v
    ),
    ...S
  }
));
K0.displayName = AR.displayName;
const nR = (v) => typeof v == "boolean" ? `${v}` : v === 0 ? "0" : v, rR = lR, UR = (v, S) => (y) => {
  var R;
  if ((S == null ? void 0 : S.variants) == null) return rR(v, y == null ? void 0 : y.class, y == null ? void 0 : y.className);
  const { variants: k, defaultVariants: D } = S, g = Object.keys(k).map((A) => {
    const te = y == null ? void 0 : y[A], F = D == null ? void 0 : D[A];
    if (te === null) return null;
    const W = nR(te) || nR(F);
    return k[A][W];
  }), U = y && Object.entries(y).reduce((A, te) => {
    let [F, W] = te;
    return W === void 0 || (A[F] = W), A;
  }, {}), j = S == null || (R = S.compoundVariants) === null || R === void 0 ? void 0 : R.reduce((A, te) => {
    let { class: F, className: W, ...Q } = te;
    return Object.entries(Q).every((X) => {
      let [de, fe] = X;
      return Array.isArray(fe) ? fe.includes({
        ...D,
        ...U
      }[de]) : {
        ...D,
        ...U
      }[de] === fe;
    }) ? [
      ...A,
      F,
      W
    ] : A;
  }, []);
  return rR(v, g, j, y == null ? void 0 : y.class, y == null ? void 0 : y.className);
}, RN = UR(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), uy = Z.forwardRef(
  ({ className: v, variant: S, size: y, asChild: R = !1, ...k }, D) => {
    const g = R ? cv : "button";
    return /* @__PURE__ */ ne.jsx(
      g,
      {
        className: Yr(RN({ variant: S, size: y, className: v })),
        ref: D,
        ...k
      }
    );
  }
);
uy.displayName = "Button";
var wN = "Label", jR = Z.forwardRef((v, S) => /* @__PURE__ */ ne.jsx(
  Zo.label,
  {
    ...v,
    ref: S,
    onMouseDown: (y) => {
      var k;
      y.target.closest("button, input, select, textarea") || ((k = v.onMouseDown) == null || k.call(v, y), !y.defaultPrevented && y.detail > 1 && y.preventDefault());
    }
  }
));
jR.displayName = wN;
var FR = jR;
const TN = UR(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), q0 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  FR,
  {
    ref: y,
    className: Yr(TN(), v),
    ...S
  }
));
q0.displayName = FR.displayName;
const PR = Z.forwardRef(
  ({ className: v, type: S, ...y }, R) => /* @__PURE__ */ ne.jsx(
    "input",
    {
      type: S,
      className: Yr(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        v
      ),
      ref: R,
      ...y
    }
  )
);
PR.displayName = "Input";
function _N(v) {
  const [S, y] = Z.useState(void 0);
  return sy(() => {
    if (v) {
      y({ width: v.offsetWidth, height: v.offsetHeight });
      const R = new ResizeObserver((k) => {
        if (!Array.isArray(k) || !k.length)
          return;
        const D = k[0];
        let g, U;
        if ("borderBoxSize" in D) {
          const j = D.borderBoxSize, A = Array.isArray(j) ? j[0] : j;
          g = A.inlineSize, U = A.blockSize;
        } else
          g = v.offsetWidth, U = v.offsetHeight;
        y({ width: g, height: U });
      });
      return R.observe(v, { box: "border-box" }), () => R.unobserve(v);
    } else
      y(void 0);
  }, [v]), S;
}
function kN(v) {
  const S = Z.useRef({ value: v, previous: v });
  return Z.useMemo(() => (S.current.value !== v && (S.current.previous = S.current.value, S.current.value = v), S.current.previous), [v]);
}
var iC = "Radio", [DN, HR] = Z0(iC), [ON, NN] = DN(iC), VR = Z.forwardRef(
  (v, S) => {
    const {
      __scopeRadio: y,
      name: R,
      checked: k = !1,
      required: D,
      disabled: g,
      value: U = "on",
      onCheck: j,
      form: A,
      ...te
    } = v, [F, W] = Z.useState(null), Q = Jf(S, (fe) => W(fe)), X = Z.useRef(!1), de = F ? A || !!F.closest("form") : !0;
    return /* @__PURE__ */ ne.jsxs(ON, { scope: y, checked: k, disabled: g, children: [
      /* @__PURE__ */ ne.jsx(
        Zo.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": k,
          "data-state": $R(k),
          "data-disabled": g ? "" : void 0,
          disabled: g,
          value: U,
          ...te,
          ref: Q,
          onClick: Ui(v.onClick, (fe) => {
            k || j == null || j(), de && (X.current = fe.isPropagationStopped(), X.current || fe.stopPropagation());
          })
        }
      ),
      de && /* @__PURE__ */ ne.jsx(
        MN,
        {
          control: F,
          bubbles: !X.current,
          name: R,
          value: U,
          checked: k,
          required: D,
          disabled: g,
          form: A,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
VR.displayName = iC;
var IR = "RadioIndicator", BR = Z.forwardRef(
  (v, S) => {
    const { __scopeRadio: y, forceMount: R, ...k } = v, D = NN(IR, y);
    return /* @__PURE__ */ ne.jsx(nC, { present: R || D.checked, children: /* @__PURE__ */ ne.jsx(
      Zo.span,
      {
        "data-state": $R(D.checked),
        "data-disabled": D.disabled ? "" : void 0,
        ...k,
        ref: S
      }
    ) });
  }
);
BR.displayName = IR;
var MN = (v) => {
  const { control: S, checked: y, bubbles: R = !0, ...k } = v, D = Z.useRef(null), g = kN(y), U = _N(S);
  return Z.useEffect(() => {
    const j = D.current, A = window.HTMLInputElement.prototype, F = Object.getOwnPropertyDescriptor(A, "checked").set;
    if (g !== y && F) {
      const W = new Event("click", { bubbles: R });
      F.call(j, y), j.dispatchEvent(W);
    }
  }, [g, y, R]), /* @__PURE__ */ ne.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: y,
      ...k,
      tabIndex: -1,
      ref: D,
      style: {
        ...v.style,
        ...U,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function $R(v) {
  return v ? "checked" : "unchecked";
}
var LN = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], oC = "RadioGroup", [AN, ZN] = Z0(oC, [
  fy,
  HR
]), YR = fy(), WR = HR(), [zN, UN] = AN(oC), GR = Z.forwardRef(
  (v, S) => {
    const {
      __scopeRadioGroup: y,
      name: R,
      defaultValue: k,
      value: D,
      required: g = !1,
      disabled: U = !1,
      orientation: j,
      dir: A,
      loop: te = !0,
      onValueChange: F,
      ...W
    } = v, Q = YR(y), X = tC(A), [de, fe] = eC({
      prop: D,
      defaultProp: k,
      onChange: F
    });
    return /* @__PURE__ */ ne.jsx(
      zN,
      {
        scope: y,
        name: R,
        required: g,
        disabled: U,
        value: de,
        onValueChange: fe,
        children: /* @__PURE__ */ ne.jsx(
          CR,
          {
            asChild: !0,
            ...Q,
            orientation: j,
            dir: X,
            loop: te,
            children: /* @__PURE__ */ ne.jsx(
              Zo.div,
              {
                role: "radiogroup",
                "aria-required": g,
                "aria-orientation": j,
                "data-disabled": U ? "" : void 0,
                dir: X,
                ...W,
                ref: S
              }
            )
          }
        )
      }
    );
  }
);
GR.displayName = oC;
var QR = "RadioGroupItem", KR = Z.forwardRef(
  (v, S) => {
    const { __scopeRadioGroup: y, disabled: R, ...k } = v, D = UN(QR, y), g = D.disabled || R, U = YR(y), j = WR(y), A = Z.useRef(null), te = Jf(S, A), F = D.value === k.value, W = Z.useRef(!1);
    return Z.useEffect(() => {
      const Q = (de) => {
        LN.includes(de.key) && (W.current = !0);
      }, X = () => W.current = !1;
      return document.addEventListener("keydown", Q), document.addEventListener("keyup", X), () => {
        document.removeEventListener("keydown", Q), document.removeEventListener("keyup", X);
      };
    }, []), /* @__PURE__ */ ne.jsx(
      ER,
      {
        asChild: !0,
        ...U,
        focusable: !g,
        active: F,
        children: /* @__PURE__ */ ne.jsx(
          VR,
          {
            disabled: g,
            required: D.required,
            checked: F,
            ...j,
            ...k,
            name: D.name,
            ref: te,
            onCheck: () => D.onValueChange(k.value),
            onKeyDown: Ui((Q) => {
              Q.key === "Enter" && Q.preventDefault();
            }),
            onFocus: Ui(k.onFocus, () => {
              var Q;
              W.current && ((Q = A.current) == null || Q.click());
            })
          }
        )
      }
    );
  }
);
KR.displayName = QR;
var jN = "RadioGroupIndicator", qR = Z.forwardRef(
  (v, S) => {
    const { __scopeRadioGroup: y, ...R } = v, k = WR(y);
    return /* @__PURE__ */ ne.jsx(BR, { ...k, ...R, ref: S });
  }
);
qR.displayName = jN;
var XR = GR, ZR = KR, FN = qR;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PN = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), JR = (...v) => v.filter((S, y, R) => !!S && S.trim() !== "" && R.indexOf(S) === y).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VN = Z.forwardRef(
  ({
    color: v = "currentColor",
    size: S = 24,
    strokeWidth: y = 2,
    absoluteStrokeWidth: R,
    className: k = "",
    children: D,
    iconNode: g,
    ...U
  }, j) => Z.createElement(
    "svg",
    {
      ref: j,
      ...HN,
      width: S,
      height: S,
      stroke: v,
      strokeWidth: R ? Number(y) * 24 / Number(S) : y,
      className: JR("lucide", k),
      ...U
    },
    [
      ...g.map(([A, te]) => Z.createElement(A, te)),
      ...Array.isArray(D) ? D : [D]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dv = (v, S) => {
  const y = Z.forwardRef(
    ({ className: R, ...k }, D) => Z.createElement(VN, {
      ref: D,
      iconNode: S,
      className: JR(`lucide-${PN(v)}`, R),
      ...k
    })
  );
  return y.displayName = `${v}`, y;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IN = dv("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BN = dv("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $N = dv("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YN = dv("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WN = dv("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]), e1 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  XR,
  {
    className: Yr("grid gap-2", v),
    ...S,
    ref: y
  }
));
e1.displayName = XR.displayName;
const t1 = Z.forwardRef(({ className: v, ...S }, y) => /* @__PURE__ */ ne.jsx(
  ZR,
  {
    ref: y,
    className: Yr(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      v
    ),
    ...S,
    children: /* @__PURE__ */ ne.jsx(FN, { className: "flex items-center justify-center", children: /* @__PURE__ */ ne.jsx(BN, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
t1.displayName = ZR.displayName;
const GN = ({
  amounts: v = [99.99],
  subscriptionPlans: S,
  currency: y = "USD",
  onClose: R,
  className: k,
  googleSheetUrl: D = "https://script.google.com/macros/s/AKfycbyhej9X7SrSHL8flGEcQpK0KIcWuApn0DSUI-4TCYbfAW9gMqgNvRqrY6AMBUHOxo-h/exec",
  // Style props with defaults matching the current design
  colors: g = {
    primary: "#4F46E5",
    secondary: "#6366F1",
    surface: "#F9FAFB",
    border: "#E5E7EB",
    error: "#EF4444",
    success: "#10B981"
  },
  borderRadius: U = "0.5rem",
  boxShadow: j = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  fontFamily: A = "inherit",
  buttonStyle: te = {
    backgroundColor: "#4F46E5",
    hoverBackgroundColor: "#6366F1",
    textColor: "#FFFFFF",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem"
  }
}) => {
  const [F, W] = Z.useState(""), [Q, X] = Z.useState(!1), [de, fe] = Z.useState("card"), [Oe, be] = Z.useState("idle"), [ze, Ge] = Z.useState(99.99), [Re, it] = Z.useState(""), [He, dt] = Z.useState([]), { toast: Xt } = lO(), vt = !!S && S.length > 0;
  Z.useEffect(() => {
    if (vt && (S == null ? void 0 : S.length) > 0) {
      let ye = -1;
      const ge = Math.max(
        ...S.map(
          (Ee) => {
            var he;
            return ((he = Ee.priceOptions) == null ? void 0 : he.length) || 0;
          }
        )
      );
      ge > 0 && (ye = Math.floor(Math.random() * ge));
      const ae = S.map((Ee) => {
        if (Ee.priceOptions && Ee.priceOptions.length > 0) {
          const he = Math.min(ye, Ee.priceOptions.length - 1);
          return {
            ...Ee,
            price: Ee.priceOptions[he]
          };
        }
        return Ee;
      });
      dt(ae), it(ae[0].id);
    }
  }, [S, vt]), Z.useEffect(() => {
    X(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F));
  }, [F]), Z.useEffect(() => {
    if (!vt && v.length > 0) {
      const ye = Math.floor(Math.random() * v.length);
      Ge(v[ye]);
    }
  }, [v, vt]);
  const ct = (ye, ge) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: ge
  }).format(ye), et = async (ye) => {
    if (ye.preventDefault(), !F || !F.includes("@")) {
      Xt({
        variant: "destructive",
        title: "Invalid email",
        description: "Please provide a valid email address."
      });
      return;
    }
    be("processing");
    const ge = {
      email: F,
      amount: ze.toString(),
      paymentMethod: de
    };
    if (vt && Re) {
      const ae = He.find((Ee) => Ee.id === Re);
      ae && (ge.amount = ae.price.toString(), ge.plan = ae.name, ge.interval = ae.interval);
    }
    setTimeout(async () => {
      try {
        const ae = new FormData();
        for (const [Ee, he] of Object.entries(ge))
          ae.append(Ee, he);
        await fetch(D, {
          method: "POST",
          body: ae,
          mode: "no-cors"
        }), be("error");
      } catch (ae) {
        console.error("Error submitting form:", ae), be("error");
      }
    }, 1500);
  }, je = {
    card: {
      borderRadius: U,
      boxShadow: j,
      fontFamily: A
    },
    surface: {
      backgroundColor: g.surface,
      borderRadius: U
    },
    button: {
      backgroundColor: te.backgroundColor,
      color: te.textColor,
      padding: te.padding,
      borderRadius: te.borderRadius,
      "&:hover": {
        backgroundColor: te.hoverBackgroundColor
      }
    },
    errorIcon: {
      color: g.error
    }
  }, tt = () => {
    if (vt && Re) {
      const ye = He.find((ge) => ge.id === Re);
      if (ye)
        return {
          amount: ye.price,
          label: `${ye.name} - ${ct(ye.price, y)}/${ye.interval === "monthly" ? "mo" : "yr"}`
        };
    }
    return {
      amount: ze,
      label: ct(ze, y)
    };
  };
  if (Oe === "error")
    return /* @__PURE__ */ ne.jsx(
      Y0,
      {
        className: Yr("w-full max-w-md mx-auto p-6", k),
        style: je.card,
        children: /* @__PURE__ */ ne.jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
          /* @__PURE__ */ ne.jsx("div", { className: "bg-red-100 p-3 rounded-full", children: /* @__PURE__ */ ne.jsx(IN, { className: "w-10 h-10", style: { color: g.error } }) }),
          /* @__PURE__ */ ne.jsx("h2", { className: "text-xl font-semibold", children: "Payment Failed" }),
          /* @__PURE__ */ ne.jsxs("p", { className: "text-gray-500", children: [
            "We encountered an issue processing your payment. Our team has been notified and will reach out to you at ",
            F,
            " when the issue is resolved."
          ] }),
          /* @__PURE__ */ ne.jsx(
            uy,
            {
              onClick: () => be("idle"),
              variant: "outline",
              className: "mt-4",
              children: "Try Again"
            }
          )
        ] })
      }
    );
  const _t = tt();
  return /* @__PURE__ */ ne.jsx(
    Y0,
    {
      className: Yr("w-full max-w-md mx-auto", k),
      style: je.card,
      children: /* @__PURE__ */ ne.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ ne.jsx("h2", { className: "text-xl font-semibold", children: "Complete Purchase" }),
          R && /* @__PURE__ */ ne.jsx(
            uy,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 w-8 p-0",
              onClick: R,
              children: "✕"
            }
          )
        ] }),
        vt ? /* @__PURE__ */ ne.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ ne.jsx("h3", { className: "text-sm font-medium mb-2", children: "Select a Plan" }),
          /* @__PURE__ */ ne.jsx(
            e1,
            {
              value: Re,
              onValueChange: it,
              className: "space-y-2",
              children: He.map((ye) => /* @__PURE__ */ ne.jsxs(
                "div",
                {
                  className: Yr(
                    "flex items-center justify-between p-4 rounded-md border cursor-pointer",
                    Re === ye.id ? "border-primary bg-primary/5" : "border-border"
                  ),
                  onClick: () => it(ye.id),
                  children: [
                    /* @__PURE__ */ ne.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ ne.jsx(
                        t1,
                        {
                          value: ye.id,
                          id: `plan-${ye.id}`,
                          style: { accentColor: g.primary }
                        }
                      ),
                      /* @__PURE__ */ ne.jsxs("div", { children: [
                        /* @__PURE__ */ ne.jsx(
                          q0,
                          {
                            htmlFor: `plan-${ye.id}`,
                            className: "font-medium",
                            children: ye.name
                          }
                        ),
                        ye.description && /* @__PURE__ */ ne.jsx("p", { className: "text-sm text-gray-500 mt-1", children: ye.description })
                      ] })
                    ] }),
                    /* @__PURE__ */ ne.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ ne.jsx("p", { className: "font-medium", children: ct(ye.price, y) }),
                      /* @__PURE__ */ ne.jsxs("p", { className: "text-xs text-gray-500", children: [
                        "per ",
                        ye.interval === "monthly" ? "month" : "year"
                      ] })
                    ] })
                  ]
                },
                ye.id
              ))
            }
          )
        ] }) : /* @__PURE__ */ ne.jsx(
          "div",
          {
            className: "p-4 rounded-md mb-6",
            style: { backgroundColor: g.surface, borderRadius: U },
            children: /* @__PURE__ */ ne.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ ne.jsx("span", { className: "text-gray-600", children: "Amount" }),
              /* @__PURE__ */ ne.jsx("span", { className: "font-semibold text-lg", children: ct(ze, y) })
            ] })
          }
        ),
        /* @__PURE__ */ ne.jsx("form", { onSubmit: et, children: /* @__PURE__ */ ne.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ ne.jsxs("div", { children: [
            /* @__PURE__ */ ne.jsxs(q0, { htmlFor: "email", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ ne.jsx(YN, { className: "h-4 w-4" }),
              "Email"
            ] }),
            /* @__PURE__ */ ne.jsx(
              PR,
              {
                id: "email",
                type: "email",
                value: F,
                onChange: (ye) => W(ye.target.value),
                placeholder: "your@email.com",
                required: !0,
                className: "mt-1"
              }
            )
          ] }),
          /* @__PURE__ */ ne.jsxs("div", { children: [
            /* @__PURE__ */ ne.jsx("h3", { className: "text-sm font-medium mb-2", children: "Payment Method" }),
            /* @__PURE__ */ ne.jsxs(xN, { value: de, onValueChange: (ye) => fe(ye), children: [
              /* @__PURE__ */ ne.jsxs(zR, { className: "grid w-full grid-cols-2", children: [
                /* @__PURE__ */ ne.jsxs(Q0, { value: "card", className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ ne.jsx($N, { className: "h-4 w-4" }),
                  "Card"
                ] }),
                /* @__PURE__ */ ne.jsxs(Q0, { value: "paypal", className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ ne.jsx(WN, { className: "h-4 w-4" }),
                  "PayPal"
                ] })
              ] }),
              /* @__PURE__ */ ne.jsx(K0, { value: "card", children: /* @__PURE__ */ ne.jsx("div", { className: "rounded-md border p-4 bg-muted/50", children: /* @__PURE__ */ ne.jsx("p", { className: "text-sm text-center text-muted-foreground", children: "You will be directed to the payment page." }) }) }),
              /* @__PURE__ */ ne.jsx(K0, { value: "paypal", children: /* @__PURE__ */ ne.jsx("div", { className: "rounded-md border p-4 bg-muted/50", children: /* @__PURE__ */ ne.jsx("p", { className: "text-sm text-center text-muted-foreground", children: "You will be redirected to PayPal payment page." }) }) })
            ] })
          ] }),
          /* @__PURE__ */ ne.jsx(
            uy,
            {
              type: "submit",
              className: "w-full",
              disabled: Oe === "processing" || !Q,
              style: {
                backgroundColor: te.backgroundColor,
                color: te.textColor,
                borderRadius: te.borderRadius
              },
              children: Oe === "processing" ? /* @__PURE__ */ ne.jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ ne.jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ ne.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ ne.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Processing..."
              ] }) : `Pay ${_t.label}`
            }
          )
        ] }) })
      ] })
    }
  );
};
window.WTPot = {
  init: (v) => {
    const { containerId: S, ...y } = v;
    window.WTPot.render(S, y);
  },
  render: (v, S) => {
    const y = document.getElementById(v);
    if (!y) {
      console.error(`WTPot: Container element with id "${v}" not found.`);
      return;
    }
    B0(y).render(/* @__PURE__ */ ne.jsx(GN, { ...S }));
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const v = document.querySelector("script[data-wtpot]");
  if (v && v.hasAttribute("data-container")) {
    const S = v.getAttribute("data-container");
    if (S) {
      const y = {};
      Array.from(v.attributes).filter((R) => R.name.startsWith("data-") && R.name !== "data-wtpot" && R.name !== "data-container").forEach((R) => {
        const k = R.name.substring(5).replace(/-([a-z])/g, (D) => D[1].toUpperCase());
        try {
          R.value.startsWith("{") || R.value.startsWith("[") ? y[k] = JSON.parse(R.value) : y[k] = R.value;
        } catch {
          y[k] = R.value;
        }
      }), window.WTPot.render(S, y);
    }
  }
});
const JN = window.WTPot;
export {
  JN as default
};
