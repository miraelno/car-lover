import {
  require_react_dom
} from "./chunk-PXJLUKTU.js";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn2, construct) {
          if (!fn2 || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn2);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn2, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn2.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn2();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn2.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn2.displayName);
                        }
                        {
                          if (typeof fn2 === "function") {
                            componentFrameCache.set(fn2, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn2 ? fn2.displayName || fn2.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn2 === "function") {
              componentFrameCache.set(fn2, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn2, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn2, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// node_modules/tw-elements-react/dist/js/tw-elements-react.es.min.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper4 = options.createPopper || createPopper3;
    var popperInstance = createPopper4(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/tw-elements-react/dist/js/tw-elements-react.es.min.js
var import_deepmerge = __toESM(require_cjs());
function rt(e) {
  var r, t, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = rt(e[r])) && (i && (i += " "), i += t);
    else
      for (r in e)
        e[r] && (i && (i += " "), i += r);
  return i;
}
function U() {
  for (var e, r, t = 0, i = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = rt(e)) && (i && (i += " "), i += r);
  return i;
}
var Et = {
  visible: "!visible",
  hidden: "hidden",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapseStyles: "rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-3",
  scrollStyles: "max-h-24 overflow-y-auto max-w-[500px]"
};
var we = (e, r, t = 150) => {
  const [i, l] = (0, import_react.useState)(0), o = (0, import_react.useRef)(null), c = (0, import_react.useRef)(null), f = (0, import_react.useRef)(false), s = (a) => {
    if (a !== null && !f.current) {
      f.current = true;
      const { transitionDuration: x } = window.getComputedStyle(
        a
      ), d = Number(x.replace("s", "")) * 1e3;
      l(d);
      return;
    }
    if (!r)
      return;
    const u = r == null ? void 0 : r.split(" ");
    if (r != null && r.includes("duration")) {
      const x = u == null ? void 0 : u.find(
        (k) => k.includes("duration")
      ), d = Number(x == null ? void 0 : x.split("-")[1].replace(/\D/g, ""));
      l(d);
      return;
    } else
      r != null && r.includes("transition") && l(t);
  };
  (0, import_react.useEffect)(() => {
    f.current || s(e);
  }, [e]);
  const n = (a) => {
    o.current !== null && clearTimeout(o.current), o.current = setTimeout(() => {
      a == null || a();
    }, 50);
  }, m = (a) => {
    f.current !== false && (c.current !== null && clearTimeout(c.current), c.current = setTimeout(() => {
      a == null || a();
    }, i));
  };
  return (0, import_react.useEffect)(() => () => {
    c.current !== null && clearTimeout(c.current);
  }, []), {
    transitionDuration: i,
    onTransitionShow: n,
    onTransitionHide: m,
    getTransitionTime: s
  };
};
var wr = ({
  className: e,
  children: r,
  show: t = false,
  id: i,
  tag: l = "div",
  collapseRef: o,
  horizontal: c = false,
  scroll: f = false,
  onShow: s,
  onHide: n,
  theme: m,
  ...a
}) => {
  const [u, x] = (0, import_react.useState)(false), [d, k] = (0, import_react.useState)(
    void 0
  ), [p, h] = (0, import_react.useState)(false), g = (0, import_react.useRef)(true), b = {
    ...Et,
    ...m
  }, w = U(
    b.collapseStyles,
    b.visible,
    c ? `${b.collapsingHorizontal}` : `${b.collapsing}`,
    !p && !u && b.hidden,
    f && b.scrollStyles,
    e
  ), T = (0, import_react.useRef)(null), y = o ?? T, { onTransitionHide: O } = we(y.current), R = (0, import_react.useCallback)(() => {
    u && k(void 0);
  }, [u]);
  return (0, import_react.useEffect)(() => {
    var $, F;
    d === void 0 && u && k(c ? ($ = y == null ? void 0 : y.current) == null ? void 0 : $.scrollWidth : (F = y == null ? void 0 : y.current) == null ? void 0 : F.scrollHeight);
  }, [d, u, y, c]), (0, import_react.useEffect)(() => {
    if (g.current) {
      g.current = false;
      return;
    }
    if (u !== t && (t ? s == null || s() : n == null || n(), x(t)), t) {
      h(true);
      return;
    }
    O(() => {
      h(false);
    });
  }, [t, s, n]), (0, import_react.useEffect)(() => {
    var $, F;
    k(u ? c ? (($ = y == null ? void 0 : y.current) == null ? void 0 : $.scrollWidth) || 0 : ((F = y == null ? void 0 : y.current) == null ? void 0 : F.scrollHeight) || 0 : 0);
  }, [u, y, c]), (0, import_react.useEffect)(() => (window.addEventListener("resize", R), () => {
    window.removeEventListener("resize", R);
  }), [R]), (0, import_jsx_runtime.jsx)(
    l,
    {
      style: {
        ...c ? { width: d } : { height: d }
      },
      id: i,
      className: w,
      ...a,
      ref: y,
      children: r
    }
  );
};
var It = ({ theme: e, style: r }) => {
  const [t, i] = (0, import_react.useState)(false), l = U(
    e.rippleWave,
    t ? e.rippleWaveActive : e.rippleWaveInactive
  );
  return (0, import_react.useEffect)(() => {
    i(true);
  }, []), (0, import_jsx_runtime.jsx)("div", { style: r, className: l });
};
var Nt = {
  ripple: "relative inline-block align-bottom",
  rippleOverflow: "absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none",
  rippleWave: "block rounded-[50%] pointer-events-none absolute touch-none transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999] scale-0",
  rippleWaveActive: "scale-100 opacity-0",
  rippleWaveInactive: "scale-0 opacity-50",
  unbound: "overflow-visible"
};
var Dt = (...e) => {
  const r = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((t) => {
      t && (typeof t == "function" ? t(r.current) : t.current = r.current);
    });
  }, [e]), r;
};
var kr = import_react.default.forwardRef(
  ({
    className: e,
    rippleTag: r = "div",
    rippleCentered: t,
    rippleDuration: i = 500,
    rippleUnbound: l,
    rippleRadius: o = 0,
    rippleColor: c = "dark",
    rippleColorDark: f = "",
    children: s,
    onMouseDown: n,
    theme: m,
    ...a
  }, u) => {
    const x = (0, import_react.useRef)(null), d = Dt(u, x), k = { ...Nt, ...m }, p = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", h = [0, 0, 0], g = [
      { name: "primary", gradientColor: "#3B71CA" },
      { name: "secondary", gradientColor: "#9FA6B2" },
      { name: "success", gradientColor: "#14A44D" },
      { name: "danger", gradientColor: "#DC4C64" },
      { name: "warning", gradientColor: "#E4A11B" },
      { name: "info", gradientColor: "#54B4D3" },
      { name: "light", gradientColor: "#fbfbfb" },
      { name: "dark", gradientColor: "#262626" }
    ], [b, w] = (0, import_react.useState)([]), [T, y] = (0, import_react.useState)([]), O = U(k.ripple, e), R = U(
      l ? k.unbound : k.rippleOverflow,
      T
    ), $ = () => {
      let N = c || "rgb(0,0,0)";
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (N = f || c || "rgb(0,0,0)");
      const D = g.find(
        (z) => z.name === (N == null ? void 0 : N.toLowerCase())
      ), B = D ? F(D.gradientColor).join(",") : F(N).join(",");
      return `radial-gradient(circle, ${p.split("{{color}}").join(`${B}`)})`;
    }, F = (N) => {
      const D = (z) => (z.length < 7 && (z = `#${z[1]}${z[1]}${z[2]}${z[2]}${z[3]}${z[3]}`), [
        parseInt(z.substr(1, 2), 16),
        parseInt(z.substr(3, 2), 16),
        parseInt(z.substr(5, 2), 16)
      ]), B = (z) => {
        const X = document.body.appendChild(
          document.createElement("fictum")
        ), G = "rgb(1, 2, 3)";
        return X.style.color = G, X.style.color !== G || (X.style.color = z, X.style.color === G || X.style.color === "") ? h : (z = getComputedStyle(X).color, document.body.removeChild(X), z);
      }, W = (z) => (z = z.match(/[.\d]+/g).map((X) => +Number(X)), z.length = 3, z);
      return N.toLowerCase() === "transparent" ? h : N[0] === "#" ? D(N) : (N.indexOf("rgb") === -1 && (N = B(N)), N.indexOf("rgb") === 0 ? W(N) : h);
    }, K = (N) => {
      const { offsetX: D, offsetY: B, height: W, width: z } = N, X = B <= W / 2, G = D <= z / 2, J = (le, ce) => Math.sqrt(le ** 2 + ce ** 2), q = B === W / 2 && D === z / 2, te = {
        first: X === true && G === false,
        second: X === true && G === true,
        third: X === false && G === true,
        fourth: X === false && G === false
      }, Q = {
        topLeft: J(D, B),
        topRight: J(z - D, B),
        bottomLeft: J(D, W - B),
        bottomRight: J(z - D, W - B)
      };
      let I = 0;
      return q || te.fourth ? I = Q.topLeft : te.third ? I = Q.topRight : te.second ? I = Q.bottomRight : te.first && (I = Q.bottomLeft), I * 2;
    }, S = () => !s || !import_react.default.isValidElement(s) || Array.isArray(s) || !s.props.className ? [] : s.props.className.split(" ").filter((D) => D.includes("rounded")), j = (N) => {
      var I;
      const D = (I = d.current) == null ? void 0 : I.getBoundingClientRect(), B = N.clientX - D.left, W = N.clientY - D.top, z = D.height, X = D.width, G = {
        offsetX: t ? z / 2 : B,
        offsetY: t ? X / 2 : W,
        height: z,
        width: X
      }, J = {
        delay: i && i * 0.5,
        duration: i && i - i * 0.5
      }, q = K(G), te = o || q / 2, Q = {
        left: t ? `${X / 2 - te}px` : `${B - te}px`,
        top: t ? `${z / 2 - te}px` : `${W - te}px`,
        height: o ? `${o * 2}px` : `${q}px`,
        width: o ? `${o * 2}px` : `${q}px`,
        transitionDelay: `0s, ${J.delay}ms`,
        transitionDuration: `${i}ms, ${J.duration}ms`
      };
      return y(S()), { ...Q, backgroundImage: `${$()}` };
    }, M = (N) => {
      const D = j(N), B = b.concat(D);
      w(B), n && n(N);
    };
    return (0, import_react.useEffect)(() => {
      const N = setTimeout(() => {
        b.length > 0 && w(b.splice(1, b.length - 1));
      }, i);
      return () => {
        clearTimeout(N);
      };
    }, [i, b]), (0, import_jsx_runtime.jsxs)(
      r,
      {
        className: O,
        onMouseDown: (N) => M(N),
        ref: d,
        ...a,
        children: [
          s,
          (0, import_jsx_runtime.jsx)("div", { className: R, children: b.map((N, D) => (0, import_jsx_runtime.jsx)(It, { theme: k, style: N }, D)) })
        ]
      }
    );
  }
);
var We = (0, import_react.createContext)({
  isOpenModal: false,
  setTransitionDuration: null,
  scrollable: false
});
var Rt = {
  show: "transform-none",
  static: "!scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out",
  wrapper: "fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
};
var At = {
  wrapper: "transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen"
};
var Pt = ({
  className: e,
  appendToBody: r = false,
  show: t,
  animate: i = true,
  theme: l,
  ...o
}) => {
  const c = { ...At, ...l }, [f, s] = (0, import_react.useState)(t), [n, m] = (0, import_react.useState)(false), a = (0, import_react.useRef)(0), u = (0, import_react.useRef)(null), x = (0, import_react.useRef)(null), d = U(
    c.wrapper,
    f ? "block" : "hidden",
    n ? "opacity-50" : "opacity-0"
  );
  (0, import_react.useEffect)(() => {
    if (u.current) {
      const { transitionDuration: h } = window.getComputedStyle(
        u.current
      ), g = Number(h.replace("s", "")) * 1e3;
      a.current = g;
    }
  }, []), (0, import_react.useEffect)(() => (t ? (s(t), x.current = setTimeout(
    () => {
      m(t);
    },
    i ? 50 : 0
  )) : (m(t), x.current = setTimeout(
    () => {
      s(t);
    },
    i ? a.current : 0
  )), () => {
    x.current && clearInterval(x.current);
  }), [t]);
  const k = (0, import_jsx_runtime.jsx)("div", { className: d, ...o, ref: u }), p = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react_dom.default.createPortal(k, document.body) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: r ? p : k });
};
var Ot = () => {
  const e = document.body, r = () => {
    const n = l();
    i(), c(), e.style.paddingRight = `${n}px`;
  }, t = () => {
    f(), s();
  }, i = () => {
    o(), e.style.overflow = "hidden";
  }, l = () => {
    const n = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - n);
  }, o = () => {
    e.hasAttribute("data-initial-overflow") || (e.dataset.initialOverflow = e.style.overflow);
  }, c = () => {
    e.dataset.initialPadding = e.style.paddingRight;
  }, f = () => {
    e.style.overflow = e.dataset.initialOverflow || "", e.removeAttribute("data-initial-overflow");
  }, s = () => {
    e.style.paddingRight = e.dataset.initialPadding || "", e.removeAttribute("data-initial-padding");
  };
  return { scrollbarHide: r, scrollbarReset: t, getWidth: l };
};
var Wt = () => {
  let e = null, r = null, t = null;
  function i(n) {
    return e = n, l(), window.addEventListener("keydown", f), true;
  }
  function l() {
    const n = Array.from(
      e == null ? void 0 : e.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((m) => {
      const a = m instanceof HTMLAnchorElement ? true : !m.disabled;
      return !m.classList.contains("ps__thumb-x") && !m.classList.contains("ps__thumb-y") && a;
    });
    n.length !== 0 && (r = n[0], t = n[n.length - 1], t == null || t.addEventListener(
      "keydown",
      (m) => o(m)
    ));
  }
  function o(n) {
    n.key === "Tab" && (n.preventDefault(), c());
  }
  function c() {
    r && (r == null || r.focus());
  }
  function f(n, m = false) {
    n.key === "Tab" && (n.preventDefault(), c()), !m && window.removeEventListener("keydown", f);
  }
  function s() {
    t == null || t.removeEventListener(
      "keydown",
      (n) => o(n)
    );
  }
  return {
    initFocusTrap: i,
    removeFocusTrap: s
  };
};
var yr = ({
  show: e = false,
  setShow: r,
  appendToBody: t = false,
  backdrop: i = true,
  staticBackdrop: l,
  closeOnEsc: o = true,
  scrollable: c = false,
  leaveHiddenModal: f = true,
  modalRef: s,
  children: n,
  className: m,
  tag: a = "div",
  theme: u,
  onHide: x,
  onShow: d,
  onHidePrevented: k,
  ...p
}) => {
  const h = { ...Rt, ...u }, { scrollbarHide: g, scrollbarReset: b } = Ot(), { initFocusTrap: w, removeFocusTrap: T } = Wt(), [y, O] = (0, import_react.useState)(e || false), [R, $] = (0, import_react.useState)(0), [F, K] = (0, import_react.useState)(false), S = (0, import_react.useRef)(null), j = s || S, M = U(
    h.wrapper,
    m,
    l && h.staticProperties,
    F && h.static,
    y ? h.show : "hidden"
  ), { onTransitionHide: N } = we(j.current), D = () => {
    K(true), N(() => {
      K(false);
    });
  }, B = (q) => {
    if (!(q.target !== j.current || !i)) {
      if (l) {
        D(), k == null || k();
        return;
      }
      r(false);
    }
  }, W = (0, import_react.useCallback)(
    (q) => {
      o && y && q.key === "Escape" && (l ? (D(), k == null || k()) : r(false));
    },
    [y]
  ), z = () => {
    O(true), d == null || d(), w(j.current);
  }, X = () => {
    O((q) => (q && (x == null || x()), false)), T();
  };
  (0, import_react.useEffect)(() => {
    e ? z() : setTimeout(() => {
      X();
    }, R);
  }, [e]), (0, import_react.useEffect)(() => {
    y ? g() : b();
  }, [y]), (0, import_react.useEffect)(() => (window.addEventListener("keydown", W), () => {
    window.removeEventListener("keydown", W);
  }), [W]);
  const G = (0, import_jsx_runtime.jsxs)(
    We.Provider,
    {
      value: { isOpenModal: e, setTransitionDuration: $, scrollable: c },
      children: [
        (f || e) && (0, import_jsx_runtime.jsx)(
          a,
          {
            ref: j,
            className: M,
            onClick: B,
            ...y && { "aria-modal": "true" },
            ...!y && { "aria-hidden": "true" },
            ...p,
            children: n
          }
        ),
        i && (f || e) && (0, import_jsx_runtime.jsx)(Pt, { show: y, appendToBody: t })
      ]
    }
  ), J = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react_dom.default.createPortal(G, document.body) });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t ? J : G });
};
var St = {
  centered: "h-[calc(100vh-3.5rem)] flex items-center justify-center",
  fullscreen: "!h-full w-full !m-0",
  hidden: "translate-y-[-50px] opacity-0",
  scrollable: "h-[calc(100vh-3.5rem)] overflow-hidden",
  show: "translate-y-0 opacity-100",
  sizeDefault: "min-[576px]:max-w-[500px]",
  wrapper: "pointer-events-none transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7",
  wrapperPositionDefault: "relative w-auto",
  "bottom-left": "w-full absolute bottom-7 left-7",
  "bottom-right": "w-full absolute bottom-7 right-7",
  "top-left": "w-full absolute left-7",
  "top-right": "w-full absolute right-7",
  sm: "min-[576px]:max-w-[300px]",
  lg: "min-[992px]:max-w-[800px]",
  xl: "min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
};
var Tr = ({
  className: e,
  centered: r,
  position: t,
  children: i,
  size: l,
  theme: o,
  tag: c = "div",
  ...f
}) => {
  const s = { ...St, ...o }, { isOpenModal: n, setTransitionDuration: m, scrollable: a } = (0, import_react.useContext)(We), [u, x] = (0, import_react.useState)(false), d = (0, import_react.useRef)(null), k = U(
    s.wrapper,
    u ? s.show : s.hidden,
    a && s.scrollable,
    r && s.centered,
    t ? s[t] : s.wrapperPositionDefault,
    l && s[l] ? s[l] : s.sizeDefault,
    e
  ), { transitionDuration: p } = we(d.current);
  return (0, import_react.useEffect)(() => {
    m(p);
  }, [p]), (0, import_react.useEffect)(() => {
    let h;
    return n ? h = setTimeout(() => {
      x(true);
    }, 50) : x(false), () => {
      clearTimeout(h);
    };
  }, [n]), (0, import_jsx_runtime.jsx)(c, { className: k, ...f, ref: d, children: i });
};
var Bt = {
  wrapper: "min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600",
  scrollable: "max-h-full"
};
var Lr = import_react.default.forwardRef(
  ({ className: e, children: r, theme: t, tag: i = "div", ...l }, o) => {
    const c = { ...Bt, ...t }, { scrollable: f } = (0, import_react.useContext)(We), s = U(
      c.wrapper,
      f && c.scrollable,
      e
    );
    return (0, import_jsx_runtime.jsx)(i, { className: s, ...l, ref: o, children: r });
  }
);
var Mt = {
  wrapper: "flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
};
var _r = import_react.default.forwardRef(
  ({ className: e, children: r, theme: t, tag: i = "div", ...l }, o) => {
    const c = { ...Mt, ...t }, f = U(c.wrapper, e);
    return (0, import_jsx_runtime.jsx)(i, { className: f, ...l, ref: o, children: r });
  }
);
var zt = {
  scrollable: "overflow-y-auto",
  wrapper: "relative flex-auto p-4"
};
var Cr = import_react.default.forwardRef(
  ({ className: e, children: r, theme: t, tag: i = "div", ...l }, o) => {
    const c = { ...zt, ...t }, { scrollable: f } = (0, import_react.useContext)(We), s = U(
      c.wrapper,
      f && c.scrollable,
      e
    );
    return (0, import_jsx_runtime.jsx)(i, { className: s, ...l, ref: o, children: r });
  }
);
var Ft = {
  wrapper: "flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
};
var Er = import_react.default.forwardRef(
  ({ className: e, children: r, theme: t, tag: i = "div", ...l }, o) => {
    const c = { ...Ft, ...t }, f = U(c.wrapper, e);
    return (0, import_jsx_runtime.jsx)(i, { className: f, ...l, ref: o, children: r });
  }
);
var $t = {
  wrapper: "relative",
  input: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none` placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary",
  inputDefault: "text-neutral-800 dark:text-neutral-200",
  inputWhite: "text-white",
  activeInput: "placeholder:opacity-100",
  label: "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate transition-all duration-200 ease-out peer-focus:scale-[0.8] motion-reduce:transition-none",
  labelDefault: "text-neutral-500 dark:text-neutral-200 peer-focus:text-primary dark:peer-focus:text-primary",
  labelWhite: "text-white",
  activeLabel: "scale-[0.8]",
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]",
  activeNotchLeading: "border-r-0",
  focusedNotchLeading: "border-r-0",
  notchLeadingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchLeadingDefault: "shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchLeadingWhite: "border-neutral-200",
  focusedNotchLeadingWhite: "shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0",
  activeNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  focusedNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  notchMiddleDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchMiddleDefault: "shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchMiddleWhite: "border-neutral-200",
  focusedNotchMiddleWhite: "shadow-[0_1px_0_0_#ffffff] border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]",
  activeNotchTrailing: "border-l-0",
  focusedNotchTrailing: "border-l-0",
  notchTrailingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchTrailingDefault: "shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchTrailingWhite: "border-neutral-200",
  focusedNotchTrailingWhite: "shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white",
  counter: "text-right leading-[1.6]",
  inputSizeLg: "px-3 py-[0.32rem] leading-[2.15]",
  inputSizeBase: "px-3 py-[0.32rem] leading-[1.6]",
  inputSizeSm: "px-3 py-[0.33rem] text-xs leading-[1.5]",
  labelSizeLg: "pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]",
  activeLabelSizeLg: "-translate-y-[1.15rem]",
  labelSizeBase: "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",
  activeLabelSizeBase: "-translate-y-[0.9rem]",
  labelSizeSm: "pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]",
  activeLabelSizeSm: "-translate-y-[0.75rem]"
};
var nt = (e, r, t, i, l, o, c, f, s, n, m, a) => {
  var N, D;
  const [u, x] = (0, import_react.useState)(t || i), [d, k] = (0, import_react.useState)(0), [p, h] = (0, import_react.useState)(false), [g, b] = (0, import_react.useState)(false), w = (0, import_react.useRef)(null), T = r || w, y = U(
    s.input,
    p && s.activeInput,
    n === "lg" ? s.inputSizeLg : n === "base" ? s.inputSizeBase : n === "sm" ? s.inputSizeSm : s.inputSizeBase,
    a ? s.inputWhite : s.inputDefault,
    m
  ), O = U(
    s.label,
    p && s.activeLabel,
    p && (n === "lg" ? s.activeLabelSizeLg : n === "base" ? s.activeLabelSizeBase : n === "sm" ? s.activeLabelSizeSm : s.activeLabelSizeBase),
    n === "lg" ? s.labelSizeLg : n === "base" ? s.labelSizeBase : n === "sm" ? s.labelSizeSm : s.labelSizeBase,
    a ? s.labelWhite : s.labelDefault
  ), R = U(
    s.notchLeading,
    a ? s.notchLeadingWhite : s.notchLeadingDefault,
    p && s.activeNotchLeading,
    g && s.focusedNotchLeading,
    g && (a ? s.focusedNotchLeadingWhite : s.focusedNotchLeadingDefault)
  ), $ = U(
    s.notchMiddle,
    a ? s.notchMiddleWhite : s.notchMiddleDefault,
    p && s.activeNotchMiddle,
    g && s.focusedNotchMiddle,
    g && (a ? s.focusedNotchMiddleWhite : s.focusedNotchMiddleDefault)
  ), F = U(
    s.notchTrailing,
    a ? s.notchTrailingWhite : s.notchTrailingDefault,
    p && s.activeNotchTrailing,
    g && s.focusedNotchTrailing,
    g && (a ? s.focusedNotchTrailingWhite : s.focusedNotchTrailingDefault)
  );
  (0, import_react.useEffect)(() => {
    if (!e.current)
      return;
    const { value: B } = e.current;
    B != "" ? h(true) : h(false);
  }, [(N = e.current) == null ? void 0 : N.value]), (0, import_react.useEffect)(() => {
    t !== void 0 && (t != "" ? h(true) : h(false));
  }, [t]), (0, import_react.useEffect)(() => {
    i !== void 0 && (i != "" ? h(true) : h(false));
  }, [i]);
  const K = (0, import_react.useCallback)(() => {
    var B;
    (B = T.current) != null && B.clientWidth && k(T.current.clientWidth * 0.8 + 8);
  }, [T]);
  (0, import_react.useEffect)(() => {
    K();
  }, [(D = T.current) == null ? void 0 : D.clientWidth, K]);
  const S = (B) => {
    c ? j(B) : x(B.target.value), o == null || o(B);
  }, j = (B) => {
    const W = B.target.value;
    f === void 0 || f <= 0 || W.length <= f && x(W);
  }, M = (0, import_react.useCallback)(
    (B) => {
      e.current && (u !== void 0 && u != "" || t !== void 0 && t != "" || e.current.value != "" ? h(true) : h(false), l && (l == null || l(B)));
    },
    [u, t, l]
  );
  return {
    labelReference: T,
    labelWidth: d,
    newValue: u,
    setWidth: K,
    setFocus: b,
    handleChange: S,
    handleBlur: M,
    inputClasses: y,
    labelClasses: O,
    notchLeadingClasses: R,
    notchMiddleClasses: $,
    notchTrailingClasses: F
  };
};
var jt = import_react.default.forwardRef(
  ({
    className: e,
    size: r = "base",
    value: t,
    defaultValue: i,
    id: l,
    wrapperTag: o = "div",
    label: c,
    onChange: f,
    children: s,
    labelRef: n,
    labelID: m,
    type: a,
    onBlur: u,
    readonly: x = false,
    theme: d,
    formWhite: k = false,
    counter: p = false,
    maxLength: h,
    ...g
  }, b) => {
    const w = (0, import_react.useRef)(null);
    (0, import_react.useImperativeHandle)(b, () => w.current);
    const T = { ...$t, ...d }, {
      labelReference: y,
      labelWidth: O,
      newValue: R,
      setWidth: $,
      setFocus: F,
      handleChange: K,
      handleBlur: S,
      inputClasses: j,
      labelClasses: M,
      notchLeadingClasses: N,
      notchMiddleClasses: D,
      notchTrailingClasses: B
    } = nt(
      w,
      n,
      t,
      i,
      u,
      f,
      p,
      h,
      T,
      r,
      e,
      k
    );
    return (0, import_jsx_runtime.jsxs)(o, { children: [
      (0, import_jsx_runtime.jsxs)(o, { className: T.wrapper, children: [
        (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: a,
            readOnly: x,
            className: j,
            onBlur: (W) => {
              S(W), F(false);
            },
            onChange: K,
            onFocus: () => {
              F(true);
            },
            value: t,
            defaultValue: i,
            id: l,
            ref: w,
            maxLength: h,
            ...g
          }
        ),
        c && (0, import_jsx_runtime.jsx)(
          "label",
          {
            id: m,
            className: M,
            htmlFor: l,
            ref: y,
            children: c
          }
        ),
        (0, import_jsx_runtime.jsxs)("div", { className: T.notch, children: [
          (0, import_jsx_runtime.jsx)("div", { className: N }),
          (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: D,
              style: { width: O }
            }
          ),
          (0, import_jsx_runtime.jsx)("div", { className: B })
        ] }),
        s
      ] }),
      p && h !== void 0 && h > 0 && (0, import_jsx_runtime.jsx)("div", { className: T.counter, children: (0, import_jsx_runtime.jsxs)("span", { children: [
        (R == null ? void 0 : R.toString().length) || 0,
        " / ",
        h
      ] }) })
    ] });
  }
);
var Xt = {
  defaultTabs: "mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0",
  verticalTabs: "mr-4 flex list-none flex-col flex-wrap pl-0",
  pillsTabs: "mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
};
var ot = import_react.default.createContext({});
var Ir = import_react.default.forwardRef(
  ({
    className: e,
    children: r,
    theme: t,
    fill: i = false,
    justify: l = false,
    vertical: o = false,
    pills: c = false,
    ...f
  }, s) => {
    const n = {
      ...Xt,
      ...t
    }, m = U(
      c ? o ? n.verticalTabs : n.pillsTabs : o ? n.verticalTabs : n.defaultTabs,
      e
    );
    return (0, import_jsx_runtime.jsx)(
      ot.Provider,
      {
        value: {
          fill: i,
          justify: l,
          vertical: o,
          pills: c
        },
        children: (0, import_jsx_runtime.jsx)("ul", { className: m, ref: s, ...f, children: r })
      }
    );
  }
);
var qt = {
  fillTabsItem: "flex-auto text-center",
  justifyTabsItem: "flex-grow basis-0 text-center",
  verticalTabsItem: "flex-grow text-center",
  disabledTabsItem: "disabled pointer-events-none",
  tabsLink: "mt-2 block cursor-pointer border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-x-0 hover:bg-neutral-100 dark:hover:bg-transparent focus:isolate",
  pillsLink: "mt-2 block cursor-pointer rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 dark:bg-neutral-700 dark:text-white md:mr-4",
  inactiveTabsLink: "border-transparent text-neutral-500 focus:border-transparent dark:text-neutral-400",
  inactivePillsLink: "bg-neutral-100 dark:bg-neutral-700 dark:text-white md:mr-4",
  disabledTabsLink: "!text-neutral-400 dark:!text-neutral-600",
  disabledPillsLink: "!bg-neutral-200 !text-neutral-400 dark:!text-neutral-500 dark:!bg-neutral-600",
  activePrimaryPillsLink: "!bg-primary-100 !text-primary-700 dark:text-primary-700 ",
  activeSecondaryPillsLink: "!bg-secondary-200 !text-secondary-900 dark:text-secondary-900",
  activeSuccessPillsLink: "!bg-success-100 !text-success-700 dark:text-success-700",
  activeDangerPillsLink: "!bg-danger-100 !text-danger-700 dark:text-danger-700",
  activeWarningPillsLink: "!bg-warning-100 !text-warning-800 dark:text-warning-800",
  activeInfoPillsLink: "!bg-info-100 !text-info-800 dark:text-info-800",
  activeLightPillsLink: "!bg-neutral-50 !text-neutral-600 dark:text-neutral-600",
  activeDarkPillsLink: "!bg-neutral-800 !text-neutral-50 dark:!bg-neutral-900 dark:text-neutral-50",
  activePrimaryTabsLink: "text-primary border-primary dark:border-primary-400 dark:text-primary-400",
  activeSecondaryTabsLink: "text-secondary border-secondary dark:text-secondary",
  activeSuccessTabsLink: "border-success text-success dark:text-success",
  activeDangerTabsLink: "border-danger text-danger dark:text-danger",
  activeWarningTabsLink: "border-warning text-warning dark:text-warning",
  activeInfoTabsLink: "border-info text-info dark:text-info",
  activeLightTabsLink: "border-neutral-50 text-neutral-50 dark:text-neutral-50",
  activeDarkTabsLink: "border-neutral-800 text-neutral-800 dark:border-neutral-600 dark:text-neutral-600"
};
var Nr = import_react.default.forwardRef(
  ({
    className: e,
    wrapperClass: r,
    active: t = false,
    disabled: i = false,
    color: l = "primary",
    children: o,
    theme: c,
    tag: f = "a",
    ...s
  }, n) => {
    const { fill: m, justify: a, vertical: u, pills: x } = (0, import_react.useContext)(ot), d = {
      ...qt,
      ...c
    }, k = U(
      m && d.fillTabsItem,
      a && d.justifyTabsItem,
      u && d.verticalTabsItem,
      i && d.disabledTabsItem,
      r
    ), p = {
      primary: {
        tabs: d.activePrimaryTabsLink,
        pills: d.activePrimaryPillsLink
      },
      secondary: {
        tabs: d.activeSecondaryTabsLink,
        pills: d.activeSecondaryPillsLink
      },
      success: {
        tabs: d.activeSuccessTabsLink,
        pills: d.activeSuccessPillsLink
      },
      danger: {
        tabs: d.activeDangerTabsLink,
        pills: d.activeDangerPillsLink
      },
      warning: {
        tabs: d.activeWarningTabsLink,
        pills: d.activeWarningPillsLink
      },
      info: {
        tabs: d.activeInfoTabsLink,
        pills: d.activeInfoPillsLink
      },
      light: {
        tabs: d.activeLightTabsLink,
        pills: d.activeLightPillsLink
      },
      dark: {
        tabs: d.activeDarkTabsLink,
        pills: d.activeDarkPillsLink
      }
    }, h = U(
      x ? d.pillsLink : d.tabsLink,
      i ? x ? d.disabledPillsLink : d.disabledTabsLink : "",
      x && !i ? t ? p[l].pills : d.inactivePillsLink : t ? p[l].tabs : d.inactiveTabsLink,
      e
    );
    return (0, import_jsx_runtime.jsx)("li", { className: k, role: "presentation", ref: n, ...s, children: (0, import_jsx_runtime.jsx)(f, { className: h, ref: n, role: "tab", ...s, children: o }) });
  }
);
var Yt = {
  tabsContent: "my-2"
};
var Dr = import_react.default.forwardRef(
  ({ className: e, tag: r = "div", children: t, theme: i, ...l }, o) => {
    const c = {
      ...Yt,
      ...i
    }, f = U(c.tabsContent, e);
    return (0, import_jsx_runtime.jsx)(r, { className: f, ref: o, ...l, children: t });
  }
);
var Kt = {
  tabsPane: "transition-opacity duration-150 ease-linear",
  isShown: "block",
  isHidden: "hidden",
  activeTabsPane: "opacity-100",
  inactiveTabsPane: "opacity-0"
};
var Gt = (...e) => {
  const r = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    e.forEach((t) => {
      t && (typeof t == "function" ? t(r.current) : t.current = r.current);
    });
  }, [e]), r;
};
var Rr = import_react.default.forwardRef(
  ({
    className: e,
    tag: r = "div",
    show: t = false,
    theme: i,
    onShow: l,
    onShown: o,
    onHide: c,
    onHidden: f,
    children: s,
    ...n
  }, m) => {
    const [a, u] = (0, import_react.useState)(false), x = (0, import_react.useRef)(null), d = Gt(m, x), k = (0, import_react.useRef)(0), p = {
      ...Kt,
      ...i
    }, h = U(
      p.tabsPane,
      t ? p.isShown : p.isHidden,
      a ? p.activeTabsPane : p.inactiveTabsPane,
      e
    );
    return (0, import_react.useEffect)(() => {
      if (x.current) {
        const { transitionDuration: g } = window.getComputedStyle(
          x.current
        ), b = Number(g.replace("s", "")) * 1e3;
        k.current = b;
      }
    }, []), (0, import_react.useEffect)(() => {
      let g;
      return t ? (l == null || l(), g = setTimeout(() => {
        u(true), o == null || o();
      }, 100)) : (c == null || c(), u(false), g = setTimeout(() => {
        f == null || f();
      }, k.current)), () => {
        clearTimeout(g);
      };
    }, [t]), (0, import_jsx_runtime.jsx)(r, { className: h, role: "tabpanel", ref: d, ...n, children: s });
  }
);
var Ar = ({
  tag: e = "div",
  className: r,
  children: t,
  animation: i,
  reset: l,
  start: o = "onClick",
  repeat: c = false,
  delay: f,
  reverse: s,
  interval: n,
  toggle: m = null,
  offset: a = 0,
  repeatOnScroll: u,
  showOnLoad: x,
  animationRef: d,
  beginHidden: k,
  onStart: p,
  onEnd: h,
  onShow: g,
  onHide: b,
  ...w
}) => {
  const [T, y] = (0, import_react.useState)(false), [O, R] = (0, import_react.useState)(false), $ = (0, import_react.useRef)(true), F = (0, import_react.useRef)(false), K = (0, import_react.useRef)(null), S = (0, import_react.useRef)(null), j = (0, import_react.useRef)(null), M = (0, import_react.useRef)(null), N = (0, import_react.useRef)(null), D = (0, import_react.useRef)(
    null
  ), B = U(T && `animate-${i}`, r), W = d || K, z = (I, le, ce) => {
    I.addEventListener(le, ce);
  }, X = (I, le, ce) => {
    I.removeEventListener(le, ce);
  }, G = {
    onHover: "mouseover",
    onClick: "click",
    onScroll: "scroll"
  }, J = (0, import_react.useCallback)(() => {
    F.current && o !== "manually" || (k && R(true), F.current = true, o === "onScroll" ? g == null || g() : p == null || p(), f ? (S.current !== null && clearTimeout(S.current), S.current = setTimeout(() => {
      y((I) => !I);
    }, f)) : y((I) => !I));
  }, [o, f, k]), q = (0, import_react.useCallback)(() => {
    if (T && o !== "manually" && !u && (!l || n)) {
      const I = W.current;
      switch (o) {
        case "onHover":
        case "onClick":
          X(I, G[o], J);
          break;
        case "onScroll":
          X(window, G[o], Q);
          break;
      }
      (f || !s && !n) && W.current.removeEventListener(
        "animationend",
        te
      ), s && !l && W.current.removeEventListener(
        "animationend",
        te
      );
    }
  }, [
    T,
    o,
    l,
    s,
    n,
    u,
    f,
    W
  ]), te = (0, import_react.useCallback)(() => {
    F.current && (y((I) => !I), o === "onScroll" ? b == null || b() : h == null || h(), o !== "onScroll" && (F.current = false), n && (j.current !== null && clearTimeout(j.current), j.current = setInterval(() => {
      y((I) => !I), p == null || p();
    }, n)), q());
  }, [o, n, q]), Q = (0, import_react.useCallback)(() => {
    if (!W.current)
      return;
    const I = W.current, ce = I.getBoundingClientRect().top + document.body.scrollTop + a, Ce = I.offsetHeight, ye = window.innerHeight, ve = ce <= ye && ce + Ce >= 0;
    ve && !O ? (f ? (M.current !== null && clearTimeout(M.current), M.current = setTimeout(() => {
      R(true);
    }, f)) : R(true), J()) : !ve && u && (R(false), F.current = false);
  }, [a, u, W, O, f]);
  return (0, import_react.useEffect)(() => {
    const I = W.current;
    switch (o) {
      case "onHover":
      case "onClick":
        z(I, G[o], J);
        break;
      case "onScroll":
        z(window, G[o], Q);
        break;
      case "onLoad":
        N.current !== null && clearTimeout(N.current), f ? N.current = setTimeout(() => {
          y(true);
        }, f) : y(true);
        break;
    }
    return () => {
      switch (o) {
        case "onHover":
        case "onClick":
          X(I, G[o], J);
          break;
        case "onScroll":
          x && (D.current !== null && clearTimeout(D.current), f ? D.current = setTimeout(() => {
            R(true);
          }, f) : R(true), J()), X(window, G[o], Q);
          break;
        case "onLoad":
          y(false), p == null || p(), F.current = true;
          break;
      }
    };
  }, [W, o, f, x]), (0, import_react.useEffect)(() => {
    const I = W.current;
    return I.addEventListener("animationend", te), () => {
      I.removeEventListener("animationend", te);
    };
  }, [W, te]), (0, import_react.useEffect)(() => {
    if ($.current) {
      $.current = false;
      return;
    }
    m !== null && o === "manually" && (m ? J() : te());
  }, [o, m]), (0, import_react.useEffect)(() => () => clearTimeout(j.current), []), (0, import_jsx_runtime.jsx)(
    e,
    {
      className: B,
      ref: W,
      style: {
        animationIterationCount: n ? null : c === true ? "infinite" : s ? "2" : c,
        animationDirection: s ? "alternate" : null,
        visibility: o === "onScroll" || k ? O ? "visible" : "hidden" : null
      },
      ...w,
      children: t
    }
  );
};
var Xe = import_react.default.createContext({});
var Pr = ({
  children: e,
  tag: r = "div",
  isOpen: t = false,
  enabled: i = true,
  trigger: l = "click",
  onShow: o,
  onHide: c,
  onShown: f,
  onHidden: s,
  onMouseEnter: n,
  onMouseLeave: m,
  ...a
}) => {
  const [u, x] = (0, import_react.useState)(t ?? false), [d, k] = (0, import_react.useState)(false), p = (0, import_react.useRef)(null), h = (0, import_react.useCallback)(
    (g, b) => {
      if (i)
        if (b === "mouseenter" && (n == null || n(g)), b === "mouseleave" && (m == null || m(g)), b === "mouseleave" && !l.includes("click") || (b === "mouseenter" || b === "mouseleave") && l !== "click" && l !== "focus") {
          if (b === "mouseenter" && d || b === "mouseleave" && !u || l.includes("click") && l.includes("focus") && !l.includes("hover"))
            return;
          b === "mouseenter" ? (!d && (o == null || o(g)), !g.defaultPrevented && x(true)) : (!d && (c == null || c(g)), !g.defaultPrevented && x(false));
        } else
          b === "mousedown" && (g.target === p.current ? l === "click" ? (!u && (o == null || o(g)), u && (c == null || c(g)), x((w) => !w)) : l.includes("focus") ? (!d && !u && (o == null || o(g)), k(true)) : l.includes("click") && (!d && !u && (o == null || o(g)), d && (c == null || c(g)), k((w) => !w), d && x(false)) : l.includes("focus") && (d && (c == null || c(g)), k(false)));
    },
    [i, l, u, d]
  );
  return (0, import_react.useEffect)(() => {
    if (!i)
      return;
    const g = (b) => {
      h(b, "mousedown");
    };
    return document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [i, h]), (0, import_react.useEffect)(() => {
    t || x(false);
  }, [t]), (0, import_jsx_runtime.jsx)(
    Xe.Provider,
    {
      value: {
        referenceElement: p,
        isOpenState: u,
        isFocused: d,
        enabled: i,
        trigger: l,
        onShown: f,
        onHidden: s,
        handleMouseAndClick: h
      },
      children: (0, import_jsx_runtime.jsx)(r, { ...a, children: e })
    }
  );
};
var Or = ({
  children: e,
  tag: r = "button",
  ...t
}) => {
  const { handleMouseAndClick: i, referenceElement: l } = (0, import_react.useContext)(Xe);
  return (0, import_jsx_runtime.jsx)(
    r,
    {
      ref: l,
      onMouseEnter: (o) => i(o, "mouseenter"),
      onMouseLeave: (o) => i(o, "mouseleave"),
      ...t,
      children: e
    }
  );
};
var Ut = {
  popoverContent: "z-[1070] p-1 block max-w-[267px] rounded break-words text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:text-white data-[popper-reference-hidden='true']:hidden",
  fade: "transition-opacity ease-linear motion-reduce:transition-none"
};
var Wr = ({
  className: e,
  children: r,
  theme: t,
  popperTag: i = "div",
  container: l = false,
  placement: o = "right",
  popperConfig: c,
  offset: f = [0, 0],
  fallbackPlacements: s = ["top", "bottom", "right", "left"],
  boundary: n = "clippingParents"
}) => {
  const [m, a] = (0, import_react.useState)(false), [u, x] = (0, import_react.useState)(false), d = (0, import_react.useRef)(null), {
    referenceElement: k,
    isOpenState: p,
    isFocused: h,
    enabled: g,
    trigger: b,
    onShown: w,
    onHidden: T
  } = (0, import_react.useContext)(Xe), y = {
    ...Ut,
    ...t
  }, O = U(
    y.popoverContent,
    y.fade,
    u ? "opacity-100" : "opacity-0",
    e
  ), { styles: R, attributes: $ } = usePopper(
    k.current,
    d.current,
    {
      placement: o,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: f
          }
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: s
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: n
          }
        }
      ],
      ...c
    }
  ), { onTransitionShow: F, onTransitionHide: K } = we(
    d.current
  );
  return (0, import_react.useEffect)(() => {
    if ((p || h) && g) {
      a(true), F(() => {
        x(true), !u && (w == null || w());
      });
      return;
    }
    x(false), K(() => {
      a(false), u && (T == null || T());
    });
  }, [p, h, g, b]), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: m && import_react_dom.default.createPortal(
    (0, import_jsx_runtime.jsx)(
      i,
      {
        className: O,
        ref: d,
        style: { ...R.popper },
        ...$.popper,
        children: r
      }
    ),
    l ? document.querySelector(l) : document.body
  ) });
};
var Ee = (0, import_react.createContext)({
  activeIndex: -1,
  animation: true,
  isOpenState: false,
  setIsOpenState: () => {
  },
  setReferenceElement: () => {
  },
  setPopperElement: () => {
  },
  setActiveIndex: () => {
  },
  popperElement: null,
  referenceElement: null,
  autoClose: true,
  onHide: () => {
  },
  onHidden: () => {
  },
  onShow: () => {
  },
  onShown: () => {
  }
});
var Qt = {
  dropdown: "relative"
};
var Sr = ({
  className: e,
  tag: r = "div",
  animation: t = true,
  isOpen: i = false,
  onHide: l,
  onHidden: o,
  onShow: c,
  onShown: f,
  children: s,
  autoClose: n = true,
  theme: m,
  ...a
}) => {
  const [u, x] = (0, import_react.useState)(i), [d, k] = (0, import_react.useState)(
    null
  ), [p, h] = (0, import_react.useState)(null), [g, b] = (0, import_react.useState)(-1);
  (0, import_react.useEffect)(() => {
    x(i);
  }, [i]);
  const w = {
    ...m,
    ...Qt
  }, T = U(w.dropdown, e);
  return (0, import_jsx_runtime.jsx)(
    Ee.Provider,
    {
      value: {
        animation: t,
        activeIndex: g,
        isOpenState: u,
        setReferenceElement: k,
        setPopperElement: h,
        setActiveIndex: b,
        popperElement: p,
        setIsOpenState: x,
        referenceElement: d,
        autoClose: n,
        onHide: l,
        onHidden: o,
        onShow: c,
        onShown: f
      },
      children: (0, import_jsx_runtime.jsx)(r, { className: T, ...a, children: s })
    }
  );
};
var Jt = (e) => e instanceof HTMLElement;
var Zt = (e) => e instanceof Node;
var Vt = () => {
  const {
    isOpenState: e,
    setIsOpenState: r,
    setActiveIndex: t,
    popperElement: i,
    referenceElement: l,
    autoClose: o,
    onHide: c,
    onHidden: f
  } = (0, import_react.useContext)(Ee), s = (0, import_react.useCallback)(
    (n) => {
      !e || !Zt(n.target) || i && i.contains(n.target) || l && l.contains(n.target) || n.defaultPrevented || (c == null || c(n), r(false), setTimeout(() => {
        t(-1), f == null || f(n);
      }, 300));
    },
    [
      e,
      r,
      t,
      i,
      l,
      c,
      f
    ]
  );
  (0, import_react.useEffect)(() => {
    if (!(o === false || o === "inside"))
      return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [s, o]);
};
var Br = ({
  tag: e = "button",
  children: r,
  onClick: t,
  ...i
}) => {
  const {
    setIsOpenState: l,
    setReferenceElement: o,
    isOpenState: c,
    autoClose: f,
    setActiveIndex: s,
    onHide: n,
    onHidden: m,
    onShow: a,
    onShown: u
  } = (0, import_react.useContext)(Ee), x = (d) => {
    t == null || t(d), !(c && (f === "outside" || f === "inside")) && (c ? n == null || n(d) : a == null || a(d), !d.defaultPrevented && (l((k) => !k), setTimeout(() => {
      s(-1), c ? m == null || m(d) : u == null || u(d);
    }, 300)));
  };
  return Vt(), (0, import_jsx_runtime.jsx)(
    e,
    {
      onClick: x,
      ref: o,
      "aria-expanded": !!c,
      ...i,
      children: r
    }
  );
};
var Ze = (e, r, t) => t === "up" ? e <= 0 ? r[r.length - 1].props.divider === true || r[r.length - 1].props.disabled === true : r[e - 1].props.divider === true || r[e - 1].props.disabled === true : e === r.length - 1 ? r[0].props.divider === true || r[0].props.disabled === true : r[e + 1].props.divider === true || r[e + 1].props.disabled === true;
var Ht = (e) => {
  const {
    activeIndex: r,
    autoClose: t,
    isOpenState: i,
    setIsOpenState: l,
    setActiveIndex: o,
    onHide: c,
    onHidden: f
  } = (0, import_react.useContext)(Ee), s = (0, import_react.useCallback)(
    (n) => {
      const m = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !m.includes(n.key))) {
        if (Jt(document.activeElement) && document.activeElement.blur(), n.key === "ArrowUp") {
          n.preventDefault();
          const a = Ze(r, e, "up");
          if (r === 1) {
            o(a ? e.length - 1 : 0);
            return;
          }
          if (r <= 0) {
            o(a ? e.length - 2 : e.length - 1);
            return;
          }
          o((u) => a ? u - 2 : u - 1);
        }
        if (n.key === "ArrowDown" || n.key === "Tab") {
          n.preventDefault();
          const a = Ze(r, e, "down");
          if (r === e.length - 2) {
            o((u) => a ? 0 : u + 1);
            return;
          }
          if (r === e.length - 1) {
            o(a ? 1 : 0);
            return;
          }
          o((u) => a ? u + 2 : u + 1);
        }
        if (n.key === "Enter" && (t === true || t === "inside")) {
          const a = document.querySelector(
            '[data-te-active="true"]'
          ), u = a == null ? void 0 : a.firstElementChild;
          if (u)
            return u.click();
          if (c == null || c(n), n.defaultPrevented)
            return;
          l(false), setTimeout(() => {
            o(-1), f == null || f(n);
          }, 300);
        }
        if (n.key === "Escape" && t === true) {
          if (c == null || c(n), n.defaultPrevented)
            return;
          l(false), setTimeout(() => {
            o(-1), f == null || f(n);
          }, 300);
        }
      }
    },
    [
      e,
      l,
      o,
      r,
      t,
      c,
      f
    ]
  );
  (0, import_react.useEffect)(() => (i && document.addEventListener("keydown", s), () => {
    i && document.removeEventListener("keydown", s);
  }), [i, s]), (0, import_react.useEffect)(() => {
    const n = document.querySelector(
      '[data-te-active="true"]'
    ), m = n == null ? void 0 : n.firstElementChild;
    return m == null || m.focus(), () => m == null ? void 0 : m.blur();
  }, [r]);
};
var er = {
  menu: "absolute z-[1000] float-left m-0.5 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700",
  fade: "transition-opacity duration-300 ease-linear motion-reduce:transition-none"
};
var Mr = ({
  className: e,
  tag: r = "ul",
  children: t,
  appendToBody: i = false,
  theme: l,
  responsive: o,
  position: c,
  alignment: f = "start",
  popperConfig: s,
  display: n = "dynamic",
  offset: m = [0, 0],
  ...a
}) => {
  const [u, x] = (0, import_react.useState)(window.innerWidth), [d, k] = (0, import_react.useState)(
    f
  ), [p, h] = (0, import_react.useState)(
    "bottom-start"
  ), [g, b] = (0, import_react.useState)(false), [w, T] = (0, import_react.useState)(false), {
    activeIndex: y,
    isOpenState: O,
    setPopperElement: R,
    animation: $,
    referenceElement: F,
    popperElement: K
  } = (0, import_react.useContext)(Ee), S = {
    ...l,
    ...er
  }, { onTransitionShow: j, onTransitionHide: M } = we(K);
  Ht(t);
  const N = U(
    S.menu,
    $ && S.fade,
    g ? "opacity-100" : "opacity-0",
    e
  ), D = (0, import_react.useCallback)(() => {
    x(window.innerWidth);
  }, []);
  (0, import_react.useEffect)(() => {
    if (O) {
      T(true), j(() => {
        b(true);
      });
      return;
    }
    b(false), M(() => {
      T(false);
    });
  }, [O]), (0, import_react.useEffect)(() => (window.addEventListener("resize", D), D(), () => window.removeEventListener("resize", D)), [D]), (0, import_react.useEffect)(() => {
    k((() => {
      const G = Object.entries({
        "sm-start": 640,
        "md-start": 768,
        "lg-start": 1024,
        "xl-start": 1280,
        "2xl-start": 1536,
        "sm-end": 640,
        "md-end": 768,
        "lg-end": 1024,
        "xl-end": 1280,
        "2xl-end": 1536
      }).find(
        ([J, q]) => o === J && u >= q
      );
      return G ? G == null ? void 0 : G[0].split("-")[1] : f;
    })());
  }, [o, f, u, d]), (0, import_react.useEffect)(() => {
    h((() => {
      if (c === "dropright")
        return "right-start";
      if (c === "dropleft")
        return "left-start";
      const X = K && d === "end";
      return c === "dropup" ? X ? "top-end" : "top-start" : X ? "bottom-end" : "bottom-start";
    })());
  }, [c, f, d, K]);
  const { styles: B } = usePopper(
    F,
    K,
    n === "dynamic" ? {
      placement: p,
      modifiers: [
        flip_default,
        {
          name: "offset",
          options: {
            offset: m
          }
        }
      ],
      ...s
    } : {
      modifiers: [
        {
          name: "applyStyles",
          enabled: false
        }
      ]
    }
  ), W = (0, import_jsx_runtime.jsx)(
    r,
    {
      className: N,
      ref: R,
      style: {
        position: "absolute",
        zIndex: 1e3,
        ...n === "dynamic" ? B.popper : {}
      },
      alignment: d,
      ...a,
      children: import_react.Children.map(
        t,
        (z, X) => (0, import_react.cloneElement)(z, {
          tabIndex: X,
          "data-te-active": y === X && true
        })
      )
    }
  );
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: w && (i ? (0, import_react_dom.createPortal)(W, document.body) : W) });
};
var zr = ({
  tag: e = "li",
  onClick: r,
  children: t,
  preventCloseOnClick: i,
  ...l
}) => {
  const { autoClose: o, setIsOpenState: c, onHide: f, onHidden: s, setActiveIndex: n } = (0, import_react.useContext)(Ee);
  return (0, import_jsx_runtime.jsx)(e, { onClick: (a) => {
    i || a.defaultPrevented || (o === true || o === "inside") && (f == null || f(a), r == null || r(a), setTimeout(() => {
      n(-1), s == null || s(a);
    }, 300), c(false));
  }, ...l, children: t });
};
var tr = () => {
  const e = (0, import_react.useRef)(null), [r, t] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      const {
        Chart: m,
        ArcElement: a,
        LineElement: u,
        BarElement: x,
        PointElement: d,
        BarController: k,
        BubbleController: p,
        DoughnutController: h,
        LineController: g,
        PieController: b,
        PolarAreaController: w,
        RadarController: T,
        ScatterController: y,
        CategoryScale: O,
        LinearScale: R,
        LogarithmicScale: $,
        RadialLinearScale: F,
        TimeScale: K,
        TimeSeriesScale: S,
        Decimation: j,
        Filler: M,
        Legend: N,
        Title: D,
        Tooltip: B,
        SubTitle: W
      } = await import("./chart-ZAVFK2WY.js");
      m.register(
        a,
        u,
        x,
        d,
        k,
        p,
        h,
        g,
        b,
        w,
        T,
        y,
        O,
        R,
        $,
        F,
        K,
        S,
        j,
        M,
        N,
        D,
        B,
        W
      ), e.current = m, t(true);
    })();
  }, []);
  const i = (n, m, a, u, x) => {
    if (n.current && a && e.current)
      return new e.current(n.current, { type: m, data: a, options: u, plugins: x });
  }, l = (n, m, a) => {
    n || (n = {});
    const u = (x, d, k) => {
      const p = x.slice();
      return d.forEach((h, g) => {
        typeof p[g] > "u" ? p[g] = k.cloneUnlessOtherwiseSpecified(
          h,
          k
        ) : k.isMergeableObject(h) ? p[g] = (0, import_deepmerge.default)(x[g], h, k) : x.indexOf(h) === -1 && p.push(h);
      }), p;
    };
    return (0, import_deepmerge.default)(a[m], n, {
      arrayMerge: u
    });
  }, o = (n, m, a) => {
    n.options = a, n.data = m, n.update();
  }, c = (n, m) => {
    var u;
    let a = "";
    return n || (a = m === "dark" ? "dark" : m ? "light" : localStorage.theme || ((u = document.querySelector("html")) != null && u.classList.contains("dark") ? "dark" : "light")), a;
  }, f = (n, m, a, u, x) => {
    const d = {
      scales: {
        y: {
          ticks: {
            color: m
          },
          grid: {
            color: u
          }
        },
        x: {
          ticks: {
            color: m
          },
          grid: {
            color: u
          }
        }
      }
    }, k = {
      scales: {
        r: {
          ticks: {
            color: m,
            backdropColor: x
          },
          grid: {
            color: u
          },
          pointLabels: {
            color: m
          }
        }
      }
    }, p = {
      plugins: {
        legend: {
          labels: {
            color: a
          }
        }
      }
    }, g = ["pie", "doughnut", "polarArea", "radar"].includes(n) ? ["radar"].includes(n) ? {
      ...k,
      ...p
    } : ["polarArea"].includes(n) ? { ...k, borderColor: "#262626", ...p } : ["pie", "doughnut"].includes(n) ? {
      borderColor: "#262626",
      ...p
    } : {} : {
      ...d,
      ...p
    };
    return l(g, n, s);
  }, s = {
    line: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index"
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    },
    bar: {
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index"
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: true,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    },
    pie: {
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      borderColor: "#fff",
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      }
    },
    doughnut: {
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      }
    },
    polarArea: {
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      }
    },
    radar: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      }
    },
    scatter: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index"
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    },
    bubble: {
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)"
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  };
  return {
    defaultOptions: s,
    setupOptions: l,
    getChart: i,
    getColorMode: c,
    updateChart: o,
    getDarkConfig: f,
    chartsLoaded: r
  };
};
var Fr = ({
  type: e,
  data: r,
  options: t,
  darkOptions: i,
  chartRef: l,
  datalabels: o,
  disableDarkMode: c,
  darkMode: f,
  darkTicksColor: s = "#fff",
  darkLabelColor: n = "#fff",
  darkGridLinesColor: m = "#555",
  darkBgColor: a = "#262626",
  ...u
}) => {
  const x = (0, import_react.useRef)(null), {
    defaultOptions: d,
    setupOptions: k,
    getChart: p,
    getColorMode: h,
    getDarkConfig: g,
    updateChart: b,
    chartsLoaded: w
  } = tr(), [T, y] = (0, import_react.useState)(
    h(c || false, f || "")
  ), O = (0, import_react.useRef)(void 0), R = (0, import_react.useRef)(null), $ = (0, import_react.useRef)(null), F = l || R, K = g(
    e,
    s,
    n,
    m,
    a
  ), S = T === "dark" ? { ...K, ...i } : t;
  return (0, import_react.useEffect)(() => {
    const j = o ? [x.current] : [], M = p(
      F,
      e,
      r,
      k(S, e, d),
      j
    );
    return O.current = M, () => {
      M == null || M.destroy();
    };
  }, [F, e, o, w]), (0, import_react.useEffect)(() => {
    O.current && b(
      O.current,
      r,
      k(S, e, d)
    );
  }, [
    t,
    i,
    S,
    r,
    O.current,
    w
  ]), (0, import_react.useEffect)(() => {
    if (c)
      return;
    if (f) {
      y(f);
      return;
    }
    const j = document.querySelector("html");
    if (!(!j || $.current !== null))
      return $.current = new MutationObserver((M) => {
        M.forEach((N) => {
          N.attributeName === "class" && j.classList.contains("dark") ? y("dark") : y("light");
        });
      }), $.current.observe(j, { attributes: true }), () => {
        var M;
        (M = $.current) == null || M.disconnect(), $.current = null;
      };
  }, [c, f]), (0, import_react.useEffect)(() => {
    (async () => {
      const M = await import("./chartjs-plugin-datalabels.esm-POIAONIQ.js");
      x.current = M.default;
    })();
  }, []), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)("canvas", { ref: F, ...u }) });
};
var rr = {
  tooltip: "z-[1080] block p-1 not-italic font-normal no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal",
  tooltipInner: "max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded-[0.25rem]",
  fade: "transition-opacity ease-linear motion-reduce:transition-none"
};
var $r = ({
  className: e,
  children: r,
  tag: t = "button",
  tooltipTag: i = "div",
  popperConfig: l,
  placement: o = "top",
  title: c,
  wrapperProps: f,
  tooltipClassName: s,
  theme: n,
  container: m = false,
  trigger: a = "hover focus",
  offset: u = [0, 0],
  fallbackPlacements: x = ["top", "right", "bottom", "left"],
  boundary: d = "clippingParents",
  enabled: k = true,
  onShow: p,
  onShown: h,
  onHide: g,
  onHidden: b,
  onMouseEnter: w,
  onMouseLeave: T,
  ...y
}) => {
  const [O, R] = (0, import_react.useState)(false), [$, F] = (0, import_react.useState)(false), [K, S] = (0, import_react.useState)(false), [j, M] = (0, import_react.useState)(false), N = (0, import_react.useRef)(null), D = (0, import_react.useRef)(null), B = (0, import_react.useRef)(false), W = {
    ...rr,
    ...n
  }, z = U(
    W.tooltip,
    W.fade,
    K ? "opacity-100" : "opacity-0",
    s
  ), { styles: X, attributes: G } = usePopper(
    D.current,
    N.current,
    {
      placement: o,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: u
          }
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: x
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: d
          }
        }
      ],
      ...l
    }
  ), { onTransitionShow: J, onTransitionHide: q } = we(
    N.current
  );
  (0, import_react.useEffect)(() => {
    if ((O || $) && k) {
      if (B.current)
        return;
      B.current = true, M(true), J(() => {
        S(true), h == null || h();
      });
      return;
    }
    S(false), q(() => {
      M(false), K && (b == null || b()), B.current = false;
    });
  }, [O, $, k]);
  const te = (0, import_react.useCallback)(
    (Q, I) => {
      if (k)
        if (I === "mouseenter" && (w == null || w(Q)), I === "mouseleave" && (T == null || T(Q)), (I === "mouseenter" || I === "mouseleave") && a !== "click" && a !== "focus" || I === "mouseleave" && a.includes("click")) {
          if (I === "mouseenter" && $ || I === "mouseleave" && !O || a.includes("click") && a.includes("focus") && !a.includes("hover"))
            return;
          I === "mouseenter" ? (!$ && (p == null || p(Q)), !Q.defaultPrevented && R(true)) : (!$ && (g == null || g(Q)), !Q.defaultPrevented && R(false));
        } else
          I === "mousedown" && (Q.target === D.current ? a.includes("focus") ? (!$ && !O && (p == null || p(Q)), F(true)) : a.includes("click") && (!O && (p == null || p(Q)), R(true)) : a.includes("focus") ? ($ && (g == null || g(Q)), F(false)) : a.includes("click") && (O && (g == null || g(Q)), R(false)));
    },
    [k, a, O, $]
  );
  return (0, import_react.useEffect)(() => {
    if (!k)
      return;
    const Q = (I) => {
      te(I, "mousedown");
    };
    return document.addEventListener("mousedown", Q), () => {
      document.removeEventListener("mousedown", Q);
    };
  }, [k, te]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(
      t,
      {
        className: e,
        onMouseEnter: (Q) => te(Q, "mouseenter"),
        onMouseLeave: (Q) => te(Q, "mouseleave"),
        ref: D,
        ...f,
        children: r
      }
    ),
    j && import_react_dom.default.createPortal(
      (0, import_jsx_runtime.jsx)(
        i,
        {
          ref: N,
          className: z,
          style: X.popper,
          ...G.popper,
          role: "tooltip",
          ...y,
          children: (0, import_jsx_runtime.jsx)("div", { className: W.tooltipInner, children: c })
        }
      ),
      m ? document.querySelector(m) : document.body
    )
  ] });
};
var nr = {
  wrapper: "relative",
  input: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary",
  inputDefault: "text-neutral-800 dark:text-neutral-200",
  inputWhite: "text-white",
  activeInput: "placeholder:opacity-100",
  label: "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate transition-all duration-200 ease-out peer-focus:scale-[0.8] motion-reduce:transition-none",
  labelDefault: "text-neutral-500 dark:text-neutral-200 peer-focus:text-primary dark:peer-focus:text-primary",
  labelWhite: "text-white",
  activeLabel: "scale-[0.8]",
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]",
  activeNotchLeading: "border-r-0",
  focusedNotchLeading: "border-r-0",
  notchLeadingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchLeadingDefault: "shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchLeadingWhite: "border-neutral-200",
  focusedNotchLeadingWhite: "shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0",
  activeNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  focusedNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  notchMiddleDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchMiddleDefault: "shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchMiddleWhite: "border-neutral-200",
  focusedNotchMiddleWhite: "shadow-[0_1px_0_0_#ffffff] border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]",
  activeNotchTrailing: "border-l-0",
  focusedNotchTrailing: "border-l-0",
  notchTrailingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchTrailingDefault: "shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchTrailingWhite: "border-neutral-200",
  focusedNotchTrailingWhite: "shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white",
  counter: "text-right leading-[1.6]",
  inputSizeLg: "px-3 py-[0.32rem] leading-[2.15]",
  inputSizeBase: "px-3 py-[0.32rem] leading-[1.6]",
  inputSizeSm: "px-3 py-[0.33rem] text-xs leading-[1.5]",
  labelSizeLg: "pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]",
  activeLabelSizeLg: "-translate-y-[1.15rem]",
  labelSizeBase: "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",
  activeLabelSizeBase: "-translate-y-[0.9rem]",
  labelSizeSm: "pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]",
  activeLabelSizeSm: "-translate-y-[0.75rem]"
};
var jr = ({
  className: e,
  size: r = "base",
  value: t,
  defaultValue: i,
  id: l,
  wrapperTag: o = "div",
  label: c,
  onChange: f,
  children: s,
  labelRef: n,
  labelID: m,
  inputRef: a,
  onBlur: u,
  readonly: x = false,
  theme: d,
  formWhite: k = false,
  counter: p = false,
  maxLength: h,
  ...g
}) => {
  const b = { ...nr, ...d }, w = (0, import_react.useRef)(null), T = a || w, {
    labelReference: y,
    labelWidth: O,
    newValue: R,
    setWidth: $,
    setFocus: F,
    handleChange: K,
    handleBlur: S,
    inputClasses: j,
    labelClasses: M,
    notchLeadingClasses: N,
    notchMiddleClasses: D,
    notchTrailingClasses: B
  } = nt(
    w,
    n,
    t,
    i,
    u,
    f,
    p,
    h,
    b,
    r,
    e,
    k
  );
  return (0, import_jsx_runtime.jsxs)(o, { children: [
    (0, import_jsx_runtime.jsxs)(o, { className: b.wrapper, children: [
      (0, import_jsx_runtime.jsx)(
        "textarea",
        {
          id: l,
          ref: T,
          readOnly: x,
          className: j,
          value: t,
          defaultValue: i,
          onBlur: (W) => {
            S(W), F(false);
          },
          onChange: K,
          onFocus: () => {
            F(true);
          },
          maxLength: h,
          ...g
        }
      ),
      c && (0, import_jsx_runtime.jsx)(
        "label",
        {
          id: m,
          className: M,
          htmlFor: l,
          ref: y,
          children: c
        }
      ),
      (0, import_jsx_runtime.jsxs)("div", { className: b.notch, children: [
        (0, import_jsx_runtime.jsx)("div", { className: N }),
        (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: D,
            style: { width: O }
          }
        ),
        (0, import_jsx_runtime.jsx)("div", { className: B })
      ] }),
      s
    ] }),
    p && h !== void 0 && h > 0 && (0, import_jsx_runtime.jsx)("div", { className: b.counter, children: (0, import_jsx_runtime.jsxs)("span", { children: [
      (R == null ? void 0 : R.toString().length) || 0,
      " / ",
      h
    ] }) })
  ] });
};
var or = {
  wrapper: "inline-flex mb-3 items-center rounded-lg px-6 py-5 text-base",
  wrapperTransition: "transition duration-300 ease-in-out motion-reduce:transition-none",
  wrapperVisible: "opacity-100",
  wrapperHidden: "opacity-0",
  static: "w-full",
  nonStatic: "fixed top-4 right-4",
  dismissButton: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25",
  dismissButtonWrapper: "ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
};
var Xr = ({
  open: e = false,
  setOpen: r,
  className: t,
  autohide: i,
  animation: l = true,
  children: o,
  color: c = "bg-primary-100 text-primary-800",
  delay: f = 1e3,
  dismiss: s,
  dismissTemplate: n,
  staticAlert: m,
  tag: a = "div",
  theme: u,
  onClose: x,
  onClosed: d,
  ...k
}) => {
  const [p, h] = (0, import_react.useState)(false), [g, b] = (0, import_react.useState)(false), w = (0, import_react.useRef)(void 0), T = (0, import_react.useRef)(null), y = {
    ...or,
    ...u
  }, O = U(
    y.wrapper,
    c,
    l && y.wrapperTransition,
    m ? y.static : y.nonStatic,
    p ? y.wrapperVisible : y.wrapperHidden,
    t
  ), { onTransitionShow: R, onTransitionHide: $ } = we(
    T.current
  );
  return (0, import_react.useEffect)(() => {
    if (e) {
      b(true);
      return;
    }
    h(false);
  }, [e]), (0, import_react.useEffect)(() => {
    if (g)
      return R(() => {
        h(true), i && (w.current = setTimeout(() => {
          h(false);
        }, f));
      }), () => clearTimeout(w.current);
  }, [g]), (0, import_react.useEffect)(() => {
    p ? b(true) : !p && g && (x == null || x(), $(() => {
      b(false), r == null || r(false), d == null || d();
    }));
  }, [p]), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: g && (0, import_jsx_runtime.jsxs)(a, { className: O, ...k, role: "alert", ref: T, children: [
    o,
    s && (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: y.dismissButtonWrapper,
        "aria-label": "Close",
        onClick: () => h(false),
        children: (0, import_jsx_runtime.jsx)("span", { className: y.dismissButton, children: n || (0, import_jsx_runtime.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-6 w-6",
            children: (0, import_jsx_runtime.jsx)(
              "path",
              {
                fillRule: "evenodd",
                d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                clipRule: "evenodd"
              }
            )
          }
        ) })
      }
    )
  ] }) });
};
var sr = {
  wrapper: "pointer-events-auto mx-auto w-96 max-w-full rounded-lg bg-clip-padding text-sm shadow-lg shadow-black/5",
  wrapperTransition: "transition duration-300 ease-in-out motion-reduce:transition-none",
  wrapperVisible: "opacity-100",
  wrapperHidden: "opacity-0",
  nonStatic: "fixed top-4 right-4"
};
var qr = ({
  open: e = false,
  setOpen: r,
  className: t,
  autohide: i,
  animation: l = true,
  children: o,
  color: c = "bg-white dark:bg-neutral-600 dark:border-opacity-50 dark:bg-neutral-600",
  delay: f = 1e3,
  staticToast: s,
  tag: n = "div",
  theme: m,
  onClose: a,
  onClosed: u,
  onShow: x,
  onShown: d,
  ...k
}) => {
  const [p, h] = (0, import_react.useState)(false), [g, b] = (0, import_react.useState)(false), w = (0, import_react.useRef)(void 0), T = (0, import_react.useRef)(null), y = {
    ...sr,
    ...m
  }, O = U(
    y.wrapper,
    c,
    l && y.wrapperTransition,
    !s && y.nonStatic,
    p ? y.wrapperVisible : y.wrapperHidden,
    t
  ), { onTransitionShow: R, onTransitionHide: $ } = we(
    T.current
  ), F = () => {
    var j, M;
    p && !s && ((j = T.current) == null || j.addEventListener("mouseenter", () => {
      clearTimeout(w.current);
    }), (M = T.current) == null || M.addEventListener("mouseleave", S));
  }, K = () => {
    var j, M;
    (j = T.current) == null || j.removeEventListener("mouseenter", () => {
      clearTimeout(w.current);
    }), (M = T.current) == null || M.removeEventListener("mouseleave", S);
  }, S = () => {
    i && (w.current = setTimeout(() => {
      h(false);
    }, f));
  };
  return (0, import_react.useEffect)(() => {
    if (e) {
      b(true);
      return;
    }
    h(false);
  }, [e]), (0, import_react.useEffect)(() => {
    if (g)
      return R(() => {
        h(true), S();
      }), () => {
        K(), clearTimeout(w.current);
      };
  }, [g]), (0, import_react.useEffect)(() => {
    p ? (b(true), x == null || x(), F(), d == null || d()) : !p && g && (a == null || a(), K(), $(() => {
      b(false), r == null || r(false), u == null || u();
    }));
  }, [p]), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: g && (0, import_jsx_runtime.jsx)(
    n,
    {
      className: O,
      ...k,
      ref: T,
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true",
      children: o
    }
  ) });
};
var ar = {
  dropdown: "relative outline-none min-w-[100px] m-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none dark:bg-zinc-700",
  dropdownVisible: "opacity-100 scale-100",
  dropdownHidden: "opacity-0 scale-[0.8]",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer w-5 h-5 pointer-events-none",
  selectArrowFocused: "text-primary",
  selectArrowWhite: "text-gray-50",
  selectArrowWhiteFocused: "!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200 w-5 h-5",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear peer-focus:text-primary motion-reduce:transition-none disabled:bg-neutral-100 dark:disabled:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary cursor-pointer disabled:cursor-default",
  selectLabel: "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate select-none",
  selectOptionDefault: "bg-transparent text-gray-700 dark:text-gray-200",
  selectOptionDisabled: "cursor-default text-gray-400 bg-transparent dark:text-gray-400",
  selectOptionSelected: "bg-black/5 dark:bg-white/30",
  selectOptionActive: "bg-black/5 dark:bg-white/30",
  selectOptionNonDisabled: "hover:bg-black/5 dark:hover:bg-white/30 cursor-pointer",
  selectOptionsMultipleActive: "bg-black/5 dark:bg-white/30",
  selectOptionsOptGroup: "pl-7",
  selectOptionGroup: "group/opt pointer-none",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300"
};
var ir = 0;
var lr = ({
  data: e,
  selectData: r,
  selectedElements: t,
  optionHeight: i,
  handleOptionClick: l,
  handleSelectAll: o,
  selectAll: c,
  selectAllLabel: f,
  multiple: s,
  activeElementIndex: n,
  search: m,
  noResultsText: a,
  theme: u = {}
}) => {
  const x = ({
    disabled: b,
    selected: w,
    active: T,
    hidden: y,
    group: O
  }) => U(
    u.selectOption,
    !b && !w && !T && u.selectOptionDefault,
    !b && u.selectOptionNonDisabled,
    b && u.selectOptionDisabled,
    y && "hidden",
    w && u.selectOptionSelected,
    T && u.selectOptionActive,
    O && u.selectOptionsOptGroup
  ), d = (0, import_react.useMemo)(() => r.filter((w) => w.optgroup).map((w) => w.text), [r]), k = (0, import_react.useMemo)(() => {
    let b = 0;
    return r.map((T) => (T.optgroup && b++, { ...T, groupIndex: b }));
  }, [r]), p = (0, import_react.useMemo)(() => r.filter((b) => !b.optgroup && !b.hidden).length === 0, [r]), h = (b) => (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsxs)("span", { className: "group", children: [
      s && (0, import_jsx_runtime.jsx)(
        "input",
        {
          className: u.formCheckInput,
          type: "checkbox",
          checked: t.includes(b.elementPosition),
          readOnly: true
        }
      ),
      b.text,
      b.secondaryText && (0, import_jsx_runtime.jsx)("span", { className: u.selectOptionSecondaryText, children: b.secondaryText })
    ] }),
    b.icon && (0, import_jsx_runtime.jsx)("span", { children: (0, import_jsx_runtime.jsx)("img", { className: u.selectOptionIcon, src: b.icon }) })
  ] }), g = (b) => k.map((w) => {
    if (!w.optgroup && b === w.groupIndex)
      return (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: x({
            selected: t.includes(w.elementPosition),
            disabled: w.disabled || false,
            hidden: w.hidden || false,
            active: n === w.elementPosition,
            group: !!w.groupIndex
          }),
          style: { height: `${i}px` },
          role: "option",
          "aria-selected": t.includes(w.elementPosition),
          "aria-disabled": w.disabled,
          onClick: () => l(w),
          children: h(w)
        },
        w.elementPosition
      );
  });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    s && c && !p && (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: x({
          disabled: false,
          hidden: false,
          selected: t.length === e.filter((b) => !b.disabled).length,
          active: n === -1,
          group: false
        }),
        style: { height: `${i}px` },
        onClick: o,
        role: "option",
        "aria-selected": t.length === e.filter((b) => !b.disabled).length,
        children: (0, import_jsx_runtime.jsxs)("span", { children: [
          (0, import_jsx_runtime.jsx)(
            "input",
            {
              className: u.formCheckInput,
              type: "checkbox",
              checked: e.filter((b) => !b.disabled && !b.optgroup).length === t.length,
              role: "option",
              readOnly: true
            }
          ),
          f
        ] })
      }
    ),
    (0, import_jsx_runtime.jsxs)("div", { className: u.optionsList, children: [
      g(ir),
      !p && (d == null ? void 0 : d.map((b, w) => {
        const T = g(w + 1).filter(
          (y) => y !== void 0
        );
        if (T.length !== 0)
          return (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: u.selectOptionGroup,
              children: [
                (0, import_jsx_runtime.jsx)(
                  "label",
                  {
                    className: u.selectOptionGroupLabel,
                    style: { height: i },
                    children: b
                  }
                ),
                T
              ]
            },
            `select-option-group ${b} ${w}`
          );
      }))
    ] }),
    m && p && (0, import_jsx_runtime.jsx)("div", { className: u.noResult, style: { height: `${i}px` }, children: a })
  ] });
};
var Fe = "ArrowUp";
var $e = "ArrowDown";
var Ve = "Enter";
var He = "Escape";
var et = "Tab";
var cr = (e, r) => {
  if (e.length !== r.length)
    return false;
  for (let t = 0; t < e.length; t++) {
    const i = e[t], l = r[t], o = Object.keys(i), c = Object.keys(l);
    if (o.length !== c.length || !o.every((f) => c.includes(f)) || !o.every((f) => i[f] === l[f]))
      return false;
  }
  return true;
};
var ke = -1;
var Yr = ({
  open: e = false,
  setOpen: r,
  data: t,
  className: i,
  optionHeight: l = 38,
  visibleOptions: o = 5,
  disabled: c,
  placeholder: f,
  label: s,
  clearBtn: n,
  children: m,
  multiple: a,
  displayedLabels: u = 5,
  optionsSelectedLabel: x = "options selected",
  selectAll: d = true,
  selectAllLabel: k = "Select all",
  size: p,
  showRef: h,
  contrast: g = false,
  onOpen: b,
  onClose: w,
  onValueChange: T,
  onOptionSelect: y,
  onOptionDeselect: O,
  search: R = false,
  searchLabel: $ = "Search...",
  autoSelect: F = false,
  noResultsText: K = "No results",
  preventFirstSelection: S = false,
  value: j,
  tag: M = "div",
  theme: N,
  container: D,
  clearIcon: B,
  selectIcon: W,
  ...z
}) => {
  const [X, G] = (0, import_react.useState)(false), [J, q] = (0, import_react.useState)(e), [te, Q] = (0, import_react.useState)(false), [I, le] = (0, import_react.useState)(false), [ce, Ce] = (0, import_react.useState)("0px"), [ye, ve] = (0, import_react.useState)(0), [Ie, he] = (0, import_react.useState)(null), [Te, A] = (0, import_react.useState)(""), [V, se] = (0, import_react.useState)(""), [re, pe] = (0, import_react.useState)(() => d ? ke : t.findIndex((L) => !L.disabled)), [ee, fe] = (0, import_react.useState)([]), [H, at] = (0, import_react.useState)([]), [ae, it] = (0, import_react.useState)(), [Le, lt] = (0, import_react.useState)(), qe = (0, import_react.useRef)(null), Ye = (0, import_react.useRef)(null), Ke = (0, import_react.useRef)(null), ct = (0, import_react.useRef)(null), xe = (0, import_react.useMemo)(
    () => H.filter(
      (L) => {
        var _;
        return ((_ = L.text) == null ? void 0 : _.toLocaleLowerCase().includes(V.toLocaleLowerCase())) || L.optgroup;
      }
    ),
    [V, H]
  ), ie = {
    ...ar,
    ...N
  }, dt = U("relative", i), ut = U(
    ie.dropdown,
    J ? ie.dropdownVisible : ie.dropdownHidden
  ), ft = U(
    ie.optionsWrapper,
    ie.optionsWrapperScrollbar
  ), pt = U(
    ie.selectArrow,
    g && ie.selectArrowWhite,
    !p && ie.selectArrowDefault,
    p === "sm" && ie.selectArrowSm,
    p === "lg" && ie.selectArrowLg,
    document.activeElement === ae ? g ? ie.selectArrowWhiteFocused : ie.selectArrowFocused : null
  ), bt = U(
    ie.selectClearBtn,
    g && ie.selectClearBtnWhite,
    !p && ie.selectClearBtnDefault,
    p === "sm" && ie.selectClearBtnSm,
    p === "lg" && ie.selectClearBtnLg
  ), { styles: mt, attributes: ht } = usePopper(ae, Le, {
    placement: "bottom-start"
  }), Ne = (0, import_react.useCallback)(() => {
    J && Ce(`${ae == null ? void 0 : ae.offsetWidth}px`);
  }, [ae, J]), Ge = (L) => {
    if (H.length === 0)
      return;
    const _ = Ye.current, Y = _.offsetHeight, Z = _.scrollTop, ge = H.filter(
      (de) => de.hidden && de.elementPosition < L
    ).length, Re = a && d ? L + 1 : L;
    if (L > (a && d ? -2 : -1)) {
      const de = (Re - ge) * l, yt = de + l > Z + Y;
      de < Z ? _.scrollTop = de : yt ? _.scrollTop = de - Y + l : _.scrollTop = Z;
    }
  }, { onTransitionShow: gt, onTransitionHide: vt } = we(
    Ke.current
  ), xt = () => {
    const L = (Y) => xe.findIndex(
      (Z) => Z.elementPosition == Y
    );
    let _ = re;
    for (; _ < H.length - 1; ) {
      if (_++, a && _ === ke)
        return ke;
      const Y = L(_) != -1, Z = H[_].disabled || H[_].hidden, ge = xe[L(_ - 1)] === xe[xe.length - 1];
      if (_ === H.length && (!Y || Z) || ge)
        return re;
      if (Y && !Z)
        break;
    }
    return _;
  }, wt = () => {
    let L = re;
    for (; L >= 0; ) {
      L -= 1;
      const _ = xe.findIndex((Z) => Z.elementPosition == L) != -1, Y = L >= 0 && (H[L].disabled || H[L].hidden);
      if (L <= 0 && (!_ || Y))
        return a && d ? L = -1 : re;
      if (_ && !Y)
        break;
    }
    return L;
  }, Ue = (L) => {
    const { key: _ } = L;
    if ([Fe, $e, Ve, et, He].includes(_)) {
      if (_ === et)
        return F && Me(xe[re]), ae == null || ae.focus(), le(false);
      if (L.preventDefault(), L.altKey && _ === $e || L.altKey && _ === Fe)
        return le(!I);
      if (_ === $e) {
        const Y = xt();
        return I ? (Ge(Y), pe(Y)) : a ? le(true) : fe([Y]);
      }
      if (_ === Fe) {
        const Y = wt();
        return I ? (Ge(Y), pe(Y)) : a ? le(true) : fe([Y]);
      }
      if (_ === Ve) {
        const Y = xe.findIndex(
          (Z) => Z.elementPosition == re
        );
        return I ? re === ke ? Qe() : Me(xe[Y]) : le(true);
      }
      if (_ === He)
        return le(false), ae == null ? void 0 : ae.focus();
    }
  }, Se = (0, import_react.useCallback)(() => {
    le((L) => !L);
  }, []), Be = (0, import_react.useCallback)(
    (L) => {
      if (h && h.current === L.target)
        return;
      const _ = Le && Le !== null, Y = ae && ae !== null, Z = !(Le != null && Le.contains(L.target)) && !(ae != null && ae.contains(L.target)), ge = L.target === ct.current;
      _ && I && Y && Z && !ge && le(false);
    },
    [Le, ae, I, h]
  );
  (0, import_react.useEffect)(() => {
    const L = t.map((_, Y) => ({ ..._, elementPosition: Y }));
    cr(L, H) || at(L);
  }, [t, H]);
  const Qe = () => {
    if (!a || !d)
      return;
    if (ee.length === t.filter((_) => !_.disabled && !_.optgroup).length)
      return fe([]), T == null || T([]), _e([]);
    const L = H == null ? void 0 : H.filter((_) => !_.disabled && !_.optgroup).map((_) => _.elementPosition);
    return fe(L), T == null || T(t.filter((_) => !_.disabled)), _e(L);
  }, De = (0, import_react.useCallback)(() => {
    if (H.length === 0)
      return;
    let L = ee[0];
    const _ = L === void 0;
    if (te && !a) {
      if (_ && S || !te || a)
        return;
      _ && (L = 0);
      const Y = H[L].value, Z = String(H[L].text);
      Z ? (he(Y ? null : Z), A(Y ? Z : "")) : (he(null), A(Y ? " " : ""));
    }
  }, [
    a,
    te,
    ee,
    H,
    S
  ]), _e = (0, import_react.useCallback)(
    (L) => {
      const _ = u === -1 || L.length > u;
      if (L.length <= 0 && (he(null), A("")), _)
        return he(null), A(`${L.length} ${x}`);
      const Y = L.map((de) => H[de].text || "").filter((de) => de !== ""), Z = L.map((de) => H[de].value || "").filter((de) => de !== ""), ge = Y.findIndex((de) => de !== "") === -1, Re = Z.length > 0, ze = Y.join(", ");
      ge ? (he(null), A(Re ? " " : "")) : Re ? (A(ze), he(null)) : (A(""), he(ze));
    },
    [u, x, H]
  );
  (0, import_react.useEffect)(() => {
    De();
  }, [ee, De]);
  const Me = (L) => {
    if (!L || L.disabled)
      return;
    const { elementPosition: _ } = L;
    if (a) {
      const Y = ee.includes(_);
      Y ? O == null || O(t[_]) : y == null || y(t[_]);
      const Z = Y ? ee.filter(
        (ge) => ge !== _
      ) : [...ee, _];
      return fe(Z), pe(_), T == null || T(Z.map((ge) => t[ge])), _e(Z);
    }
    return O == null || O(t[re]), fe([_]), T == null || T(t[_]), y == null || y(t[_]), le(false), ae == null ? void 0 : ae.focus();
  };
  (0, import_react.useEffect)(() => {
    Q(true);
  }, []), (0, import_react.useEffect)(() => {
    if (a) {
      const _ = H.filter((Y) => Y.defaultSelected).map((Y) => Y.elementPosition);
      return _e(_), fe(_);
    }
    let L = H.findIndex((_) => _.defaultSelected);
    L === ke && !S && (L = H.findIndex((_) => !_.disabled && !_.hidden)), L !== ke && fe([L]);
  }, [H, _e, a, S]), (0, import_react.useEffect)(() => {
    if (I && R && ee.length === 0)
      return pe(ke);
    I || (ee.length > 0 ? pe(Math.max(...ee)) : pe(a ? ke - 1 : 0));
  }, [xe, I, R, ee, ee]), (0, import_react.useEffect)(() => {
    ve(o * l);
  }, [o, l]), (0, import_react.useEffect)(() => {
    Ne();
  }, [Ne]), (0, import_react.useEffect)(() => (I && (window.addEventListener("click", Be), window.addEventListener("resize", Ne)), () => {
    window.removeEventListener("click", Be), window.removeEventListener("resize", Ne);
  }), [Be, Ne, I]), (0, import_react.useEffect)(() => {
    if (h) {
      const L = h.current;
      return L == null || L.addEventListener("click", Se), () => {
        L == null || L.removeEventListener("click", Se);
      };
    }
  }, [h, Se]), (0, import_react.useEffect)(() => {
    if (!j)
      return;
    const L = Array.isArray(j) ? j : [j], _ = H.filter((Z) => Z.value && L.includes(Z.value)).map((Z) => Z.elementPosition);
    if (_.toString() === ee.toString())
      return;
    const Y = a ? _.map((Z) => H[Z]) : H[_[0]];
    T == null || T(Y), fe(_), a ? _e(_) : De();
  }, [
    j,
    H,
    a,
    T,
    ee,
    De,
    _e
  ]), (0, import_react.useEffect)(() => {
    le(e);
  }, [e]), (0, import_react.useEffect)(() => {
    if (I) {
      G(true), gt(() => {
        q(true), r == null || r(true);
      });
      return;
    }
    J && (q(false), r == null || r(false), document.activeElement === ae && ae.blur(), vt(() => {
      G(false), R && se("");
    }));
  }, [I]), (0, import_react.useEffect)(() => {
    var L;
    X && (J ? b == null || b() : w == null || w(), J && R && ((L = qe.current) == null || L.focus()));
  }, [J]);
  const kt = D && document.querySelector(D) || document.body;
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)(M, { className: dt, ...z, children: [
    (0, import_jsx_runtime.jsx)(
      jt,
      {
        type: "text",
        ref: it,
        onClick: () => le(!I),
        onKeyDown: Ue,
        value: Te,
        disabled: c,
        placeholder: String(Te) || s ? void 0 : f,
        label: s,
        readOnly: true,
        size: p,
        theme: { input: ie.selectInput, label: ie.selectLabel },
        formWhite: g,
        "aria-multiselectable": !!a,
        "aria-disabled": !!c,
        "aria-expanded": I,
        role: "listbox"
      }
    ),
    n && (Te.length > 0 || Ie) && (0, import_jsx_runtime.jsx)(
      "span",
      {
        tabIndex: 0,
        className: bt,
        role: "button",
        onClick: () => {
          A(""), fe([]), T == null || T(a ? [] : {});
        },
        children: B || (0, import_jsx_runtime.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            children: (0, import_jsx_runtime.jsx)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12"
              }
            )
          }
        )
      }
    ),
    (0, import_jsx_runtime.jsx)("div", { className: pt, children: W || (0, import_jsx_runtime.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        children: (0, import_jsx_runtime.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
          }
        )
      }
    ) }),
    X && (0, import_react_dom.createPortal)(
      (0, import_jsx_runtime.jsx)(
        "div",
        {
          ref: lt,
          style: { ...mt.popper, width: ce },
          ...ht.popper,
          className: ie.selectDropdownContainer,
          children: (0, import_jsx_runtime.jsxs)("div", { tabIndex: 0, className: ut, ref: Ke, children: [
            R && (0, import_jsx_runtime.jsx)("div", { className: ie.inputGroup, children: (0, import_jsx_runtime.jsx)(
              "input",
              {
                className: ie.selectFilterInput,
                placeholder: $,
                onKeyDown: Ue,
                onChange: (L) => se(L.target.value),
                ref: qe,
                type: "text",
                role: "searchbox"
              }
            ) }),
            (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: ft,
                ref: Ye,
                style: { maxHeight: `${ye}px` },
                children: (0, import_jsx_runtime.jsx)(
                  lr,
                  {
                    data: t,
                    selectData: xe,
                    selectedElements: ee,
                    optionHeight: l,
                    visibleOptions: o,
                    handleOptionClick: Me,
                    handleSelectAll: Qe,
                    selectAll: d,
                    selectAllLabel: k,
                    multiple: a,
                    activeElementIndex: re,
                    search: R,
                    noResultsText: K,
                    theme: ie
                  }
                )
              }
            ),
            m
          ] })
        }
      ),
      kt
    )
  ] }) });
};
var dr = (e) => e.offsetHeight;
var ur = (e) => {
  if (!e || e.getClientRects().length === 0)
    return false;
  if (e instanceof HTMLElement && e.style && e.parentNode && e.parentNode instanceof HTMLElement && e.parentNode.style) {
    const r = getComputedStyle(e), t = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || r.display !== "none" && t.display !== "none" && r.visibility !== "hidden";
  }
  return false;
};
var st = (0, import_react.createContext)({
  activeSlide: 0,
  setTransitionDuration: () => {
  },
  block: "",
  visible: "",
  crossfade: void 0,
  setCarouselItems: () => {
  },
  isFirstRender: { current: true }
});
var fr = {
  carouselWrapper: "relative",
  pointer: "touch-pan-y",
  block: "!block",
  visible: "opacity-100 !z-10",
  invisible: "opacity-0 z-0",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full",
  nextBtn: "absolute bottom-0 right-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none",
  nextBtnIcon: "inline-block h-8 w-8 [&>svg]:h-8",
  prevBtn: "absolute bottom-0 left-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none",
  prevBtnIcon: "inline-block h-8 w-8 [&>svg]:h-8",
  indicatorsWrapper: "absolute bottom-0 left-0 right-0 z-30 mx-[15%] mb-4 flex list-none justify-center p-0",
  indicator: "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none focus:outline-none",
  activeIndicator: "!opacity-100"
};
var Kr = ({
  tag: e = "div",
  className: r,
  children: t,
  interval: i = 5e3,
  ride: l = false,
  keyboard: o = true,
  pause: c = "hover",
  wrap: f = true,
  touch: s = true,
  stopSliding: n,
  showControls: m,
  showIndicators: a,
  prevBtnIcon: u,
  nextBtnIcon: x,
  current: d,
  crossfade: k,
  onSlide: p,
  onSlid: h,
  theme: g,
  ...b
}) => {
  const [w, T] = (0, import_react.useState)(0), [y, O] = (0, import_react.useState)(0), [R, $] = (0, import_react.useState)(
    document.visibilityState
  ), [F, K] = (0, import_react.useState)({ initialX: 0, initialY: 0 }), [S, j] = (0, import_react.useState)([]), M = (0, import_react.useRef)(null), N = (0, import_react.useRef)(0), D = (0, import_react.useRef)(true), B = (0, import_react.useRef)(false), W = (0, import_react.useRef)(true), z = (0, import_react.useRef)(false), X = (0, import_react.useRef)(false), G = (0, import_react.useRef)(null), J = (0, import_react.useRef)(null), q = {
    ...fr,
    ...g
  }, te = U(
    q.carouselWrapper,
    s && q.pointer,
    r
  ), Q = (A, V) => {
    if (V !== void 0)
      return S[V];
    const se = A === "prev", re = N.current, pe = se ? -1 : 1;
    let ee = re;
    if (f)
      ee = (re + pe) % S.length;
    else {
      if (ee === S.length - 1 && A === "next" || ee === 0 && A === "prev")
        return;
      ee += pe;
    }
    return ee === -1 ? S[S.length - 1] : S[ee];
  }, I = (A, V) => {
    if (V !== void 0) {
      N.current = V, T(V);
      return;
    }
    const se = w === S.length - 1 ? 0 : w + 1, re = w === 0 ? S.length - 1 : w - 1;
    N.current = A === "next" ? se : re, T(A === "next" ? se : re);
  }, le = (0, import_react.useCallback)(
    (A, V, se) => {
      if (!S || S.length < 2 || B.current)
        return;
      W.current && (W.current = false);
      const re = S[w];
      if (!re || !V)
        return;
      B.current = true, p == null || p();
      const pe = A === "next", ee = pe ? q.slideLeft : q.slideRight, fe = pe ? q.slideRight : q.slideLeft;
      I(A, se), V.classList.add(fe, q.block), dr(V), re.classList.add(ee), k && (re.classList.add(...q.invisible.split(" ")), re.classList.remove(...q.visible.split(" ")), V.classList.add(...q.visible.split(" "))), V.classList.remove(fe), J.current !== null && clearTimeout(J.current), J.current = setTimeout(() => {
        B.current = false, h == null || h(), re.classList.remove(ee, q.block);
      }, y);
    },
    [w, y, k]
  ), ce = (0, import_react.useCallback)(
    (A) => {
      const V = Q(A), { hidden: se } = document;
      if (R && (se || !ur(M.current))) {
        z.current = true;
        return;
      }
      V && le(A, V);
    },
    [le, R]
  ), Ce = (A) => {
    const V = N.current, se = A > V ? "next" : "prev", re = Q(se, A);
    !re || A > S.length - 1 || A < 0 || A === w || le(se, re, A);
  }, ye = (0, import_react.useCallback)(() => {
    typeof i == "number" && i > 0 && (X.current && (X.current = false), G.current = setTimeout(() => {
      ce("next");
    }, i));
  }, [ce, i]), ve = () => {
    G.current && (clearTimeout(G.current), G.current = null);
  }, Ie = (0, import_react.useCallback)((A) => {
    K({
      initialX: A.touches[0].clientX,
      initialY: A.touches[0].clientY
    });
  }, []), he = (0, import_react.useCallback)(
    (A) => {
      if (!F)
        return;
      const { initialX: V, initialY: se } = F, re = A.touches[0].clientX, pe = A.touches[0].clientY, ee = V - re, fe = se - pe;
      Math.abs(ee) > Math.abs(fe) && (ee > 0 ? ce("next") : ce("prev")), K({ initialX: 0, initialY: 0 });
    },
    [ce, F]
  ), Te = (0, import_react.useCallback)(
    (A) => {
      switch (A.key) {
        case "ArrowLeft":
          A.preventDefault(), ce("prev");
          break;
        case "ArrowRight":
          A.preventDefault(), ce("next");
          break;
      }
    },
    [ce]
  );
  return (0, import_react.useEffect)(() => {
    const A = () => {
      $(document.visibilityState);
    };
    return document.addEventListener("visibilitychange", A), () => {
      document.removeEventListener("visibilitychange", A);
    };
  }, [i, l]), (0, import_react.useEffect)(() => {
    if (!o || !M.current)
      return;
    const A = M.current;
    return A.addEventListener("keydown", Te), () => {
      A.removeEventListener("keydown", Te);
    };
  }, [o, Te]), (0, import_react.useEffect)(() => {
    if (!s || !M.current)
      return;
    const A = M.current;
    return A.addEventListener("touchmove", he), A.addEventListener("touchstart", Ie), () => {
      A.removeEventListener("touchmove", he), A.removeEventListener("touchstart", Ie);
    };
  }, [s, he, Ie]), (0, import_react.useEffect)(() => {
    if (!l || l === true && W.current || !c || !M.current)
      return;
    const A = () => {
      ve(), X.current = true;
    }, V = () => {
      n || ye();
    }, se = M.current;
    return se.addEventListener("mouseenter", A), se.addEventListener("mouseleave", V), se.addEventListener("touchend", ve), () => {
      se.removeEventListener("mouseenter", A), se.removeEventListener("mouseleave", V), se.removeEventListener("touchend", ve);
    };
  }, [c, l, ye]), (0, import_react.useEffect)(() => {
    if (D.current) {
      D.current = false;
      return;
    }
    if (!(!S || S.length < 2) && !(n || l === true && W.current || !l || R === "hidden" || !i || X.current)) {
      if (z.current && R === "visible") {
        ce("next"), z.current = false;
        return;
      }
      return ye(), () => {
        ve();
      };
    }
  }, [
    w,
    i,
    l,
    y,
    R,
    n
  ]), (0, import_react.useEffect)(() => {
    D.current || (n && !W.current && ve(), d !== void 0 && Ce(d));
  }, [n, d]), (0, import_jsx_runtime.jsx)(
    st.Provider,
    {
      value: {
        activeSlide: w,
        setTransitionDuration: O,
        block: q.block,
        visible: q.visible,
        crossfade: k,
        setCarouselItems: j,
        isFirstRender: D
      },
      children: (0, import_jsx_runtime.jsxs)(
        e,
        {
          ref: M,
          className: te,
          current: w,
          ...b,
          children: [
            t,
            m && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  onClick: () => ce("prev"),
                  className: q.prevBtn,
                  type: "button",
                  children: [
                    (0, import_jsx_runtime.jsx)("span", { className: q.prevBtnIcon, children: u || (0, import_jsx_runtime.jsx)(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        children: (0, import_jsx_runtime.jsx)(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15.75 19.5L8.25 12l7.5-7.5"
                          }
                        )
                      }
                    ) }),
                    (0, import_jsx_runtime.jsx)("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Previous" })
                  ]
                }
              ),
              (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  onClick: () => ce("next"),
                  className: q.nextBtn,
                  type: "button",
                  children: [
                    (0, import_jsx_runtime.jsx)("span", { className: q.nextBtnIcon, children: x || (0, import_jsx_runtime.jsx)(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        children: (0, import_jsx_runtime.jsx)(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                          }
                        )
                      }
                    ) }),
                    (0, import_jsx_runtime.jsx)("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Next" })
                  ]
                }
              )
            ] }),
            a && (0, import_jsx_runtime.jsx)("div", { className: q.indicatorsWrapper, children: S.map((A, V) => (0, import_jsx_runtime.jsx)(
              "button",
              {
                "data-te-target": V,
                onClick: () => Ce(V),
                className: `${q.indicator} ${V === w ? `${q.activeIndicator}` : ""}`
              },
              V
            )) })
          ]
        }
      )
    }
  );
};
var Gr = ({
  tag: e = "div",
  className: r,
  itemID: t,
  children: i,
  ...l
}) => {
  const o = (0, import_react.useRef)(null), {
    activeSlide: c,
    setTransitionDuration: f,
    block: s,
    visible: n,
    crossfade: m,
    setCarouselItems: a,
    isFirstRender: u
  } = (0, import_react.useContext)(st), { transitionDuration: x } = we(
    o.current,
    r
  );
  return (0, import_react.useEffect)(() => {
    if (u != null && u.current) {
      a((d) => [
        ...d,
        o.current
      ]);
      return;
    }
  }, []), (0, import_react.useEffect)(() => {
    if (c === t - 1) {
      const d = o.current;
      d.classList.add(s), m && d.classList.add(...n.split(" ")), f(x);
    }
  }, [c, t, m, x]), (0, import_jsx_runtime.jsx)(e, { ref: o, className: r, ...l, children: i });
};
export {
  Xr as TEAlert,
  Ar as TEAnimation,
  Kr as TECarousel,
  Gr as TECarouselItem,
  Fr as TEChart,
  wr as TECollapse,
  Sr as TEDropdown,
  zr as TEDropdownItem,
  Mr as TEDropdownMenu,
  Br as TEDropdownToggle,
  jt as TEInput,
  yr as TEModal,
  Cr as TEModalBody,
  Lr as TEModalContent,
  Tr as TEModalDialog,
  Er as TEModalFooter,
  _r as TEModalHeader,
  Pr as TEPopover,
  Wr as TEPopoverContent,
  Or as TEPopoverToggler,
  kr as TERipple,
  Yr as TESelect,
  Ir as TETabs,
  Dr as TETabsContent,
  Nr as TETabsItem,
  Rr as TETabsPane,
  jr as TETextarea,
  qr as TEToast,
  $r as TETooltip
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tw-elements-react/dist/js/tw-elements-react.es.min.js:
  (*!
  * TW Elements React 1.0.0-alpha2
  * 
  * TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
  * Copyright © 2023 MDBootstrap.com
  * 
  * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
  * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
  * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
  * 
  *)
*/
//# sourceMappingURL=tw-elements-react.js.map
