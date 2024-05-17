(() => {
  var Ro = Object.create;
  var $e = Object.defineProperty,
    Go = Object.defineProperties,
    mo = Object.getOwnPropertyDescriptor,
    Wo = Object.getOwnPropertyDescriptors,
    uo = Object.getOwnPropertyNames,
    mn = Object.getOwnPropertySymbols,
    Uo = Object.getPrototypeOf,
    un = Object.prototype.hasOwnProperty,
    Fo = Object.prototype.propertyIsEnumerable;
  var Wn = (e, t, l) => (t in e ? $e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[t] = l)),
    Un = (e, t) => {
      for (var l in t || (t = {})) un.call(t, l) && Wn(e, l, t[l]);
      if (mn) for (var l of mn(t)) Fo.call(t, l) && Wn(e, l, t[l]);
      return e;
    },
    Fn = (e, t) => Go(e, Wo(t));
  var T = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var go = (e, t, l, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of uo(t)) !un.call(e, i) && i !== l && $e(e, i, { get: () => t[i], enumerable: !(n = mo(t, i)) || n.enumerable });
    return e;
  };
  var Yt = (e, t, l) => ((l = e != null ? Ro(Uo(e)) : {}), go(t || !e || !e.__esModule ? $e(l, "default", { value: e, enumerable: !0 }) : l, e));
  var gn = T((el, ll) => {
    (function (e, t) {
      typeof el == "object" && typeof ll != "undefined"
        ? (ll.exports = t())
        : ((e = typeof globalThis != "undefined" ? globalThis : e || self), (e.DOMPurify = t()));
    })(el, function () {
      "use strict";
      let { entries: e, setPrototypeOf: t, isFrozen: l, getPrototypeOf: n, getOwnPropertyDescriptor: i } = Object,
        { freeze: o, seal: a, create: c } = Object,
        { apply: r, construct: b } = typeof Reflect != "undefined" && Reflect;
      o ||
        (o = function (F) {
          return F;
        }),
        a ||
          (a = function (F) {
            return F;
          }),
        r ||
          (r = function (F, J, X) {
            return F.apply(J, X);
          }),
        b ||
          (b = function (F, J) {
            return new F(...J);
          });
      let Z = E(Array.prototype.forEach),
        W = E(Array.prototype.pop),
        u = E(Array.prototype.push),
        N = E(String.prototype.toLowerCase),
        A = E(String.prototype.toString),
        y = E(String.prototype.match),
        w = E(String.prototype.replace),
        bt = E(String.prototype.indexOf),
        Ut = E(String.prototype.trim),
        S = E(Object.prototype.hasOwnProperty),
        f = E(RegExp.prototype.test),
        v = tt(TypeError);
      function E(Q) {
        return function (F) {
          for (var J = arguments.length, X = new Array(J > 1 ? J - 1 : 0), K = 1; K < J; K++) X[K - 1] = arguments[K];
          return r(Q, F, X);
        };
      }
      function tt(Q) {
        return function () {
          for (var F = arguments.length, J = new Array(F), X = 0; X < F; X++) J[X] = arguments[X];
          return b(Q, J);
        };
      }
      function h(Q, F) {
        let J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N;
        t && t(Q, null);
        let X = F.length;
        for (; X--; ) {
          let K = F[X];
          if (typeof K == "string") {
            let st = J(K);
            st !== K && (l(F) || (F[X] = st), (K = st));
          }
          Q[K] = !0;
        }
        return Q;
      }
      function kt(Q) {
        for (let F = 0; F < Q.length; F++) S(Q, F) || (Q[F] = null);
        return Q;
      }
      function Vt(Q) {
        let F = c(null);
        for (let [J, X] of e(Q))
          S(Q, J) && (Array.isArray(X) ? (F[J] = kt(X)) : X && typeof X == "object" && X.constructor === Object ? (F[J] = Vt(X)) : (F[J] = X));
        return F;
      }
      function Bt(Q, F) {
        for (; Q !== null; ) {
          let X = i(Q, F);
          if (X) {
            if (X.get) return E(X.get);
            if (typeof X.value == "function") return E(X.value);
          }
          Q = n(Q);
        }
        function J() {
          return null;
        }
        return J;
      }
      let Re = o([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        Nt = o([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        Xt = o([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        Lt = o([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        Pt = o([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]),
        s = o([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        V = o(["#text"]),
        G = o([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "wrap",
          "xmlns",
          "slot",
        ]),
        B = o([
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
          "zoomandpan",
        ]),
        p = o([
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
          "xmlns",
        ]),
        Y = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        L = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        P = a(/<%[\w\W]*|[\w\W]*%>/gm),
        nt = a(/\${[\w\W]*}/gm),
        _ = a(/^data-[\-\w.\u00B7-\uFFFF]/),
        _t = a(/^aria-[\-\w]+$/),
        Ft = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        Zt = a(/^(?:\w+script|data):/i),
        fi = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Sl = a(/^html$/i),
        Hi = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
      var Al = Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: L,
        ERB_EXPR: P,
        TMPLIT_EXPR: nt,
        DATA_ATTR: _,
        ARIA_ATTR: _t,
        IS_ALLOWED_URI: Ft,
        IS_SCRIPT_OR_DATA: Zt,
        ATTR_WHITESPACE: fi,
        DOCTYPE_NAME: Sl,
        CUSTOM_ELEMENT: Hi,
      });
      let wi = function () {
          return typeof window == "undefined" ? null : window;
        },
        Oi = function (F, J) {
          if (typeof F != "object" || typeof F.createPolicy != "function") return null;
          let X = null,
            K = "data-tt-policy-suffix";
          J && J.hasAttribute(K) && (X = J.getAttribute(K));
          let st = "dompurify" + (X ? "#" + X : "");
          try {
            return F.createPolicy(st, {
              createHTML(Mt) {
                return Mt;
              },
              createScriptURL(Mt) {
                return Mt;
              },
            });
          } catch (Mt) {
            return console.warn("TrustedTypes policy " + st + " could not be created."), null;
          }
        };
      function fl() {
        let Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wi(),
          F = (g) => fl(g);
        if (((F.version = "3.1.0"), (F.removed = []), !Q || !Q.document || Q.document.nodeType !== 9)) return (F.isSupported = !1), F;
        let { document: J } = Q,
          X = J,
          K = X.currentScript,
          {
            DocumentFragment: st,
            HTMLTemplateElement: Mt,
            Node: Se,
            Element: Hl,
            NodeFilter: Kt,
            NamedNodeMap: vi = Q.NamedNodeMap || Q.MozNamedAttrMap,
            HTMLFormElement: zi,
            DOMParser: ji,
            trustedTypes: Ge,
          } = Q,
          me = Hl.prototype,
          Di = Bt(me, "cloneNode"),
          Li = Bt(me, "nextSibling"),
          Pi = Bt(me, "childNodes"),
          Ae = Bt(me, "parentNode");
        if (typeof Mt == "function") {
          let g = J.createElement("template");
          g.content && g.content.ownerDocument && (J = g.content.ownerDocument);
        }
        let et,
          qt = "",
          { implementation: fe, createNodeIterator: _i, createDocumentFragment: Ki, getElementsByTagName: qi } = J,
          { importNode: $i } = X,
          rt = {};
        F.isSupported = typeof e == "function" && typeof Ae == "function" && fe && fe.createHTMLDocument !== void 0;
        let {
            MUSTACHE_EXPR: He,
            ERB_EXPR: we,
            TMPLIT_EXPR: Oe,
            DATA_ATTR: to,
            ARIA_ATTR: eo,
            IS_SCRIPT_OR_DATA: lo,
            ATTR_WHITESPACE: wl,
            CUSTOM_ELEMENT: no,
          } = Al,
          { IS_ALLOWED_URI: Ol } = Al,
          z = null,
          yl = h({}, [...Re, ...Nt, ...Xt, ...Pt, ...V]),
          j = null,
          vl = h({}, [...G, ...B, ...p, ...Y]),
          H = Object.seal(
            c(null, {
              tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
            })
          ),
          $t = null,
          ye = null,
          zl = !0,
          ve = !0,
          jl = !1,
          Dl = !0,
          St = !1,
          Ll = !0,
          Qt = !1,
          ze = !1,
          je = !1,
          At = !1,
          We = !1,
          ue = !1,
          Pl = !0,
          _l = !1,
          io = "user-content-",
          De = !0,
          te = !1,
          ft = {},
          Ht = null,
          Kl = h({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          ql = null,
          $l = h({}, ["audio", "video", "img", "source", "image", "track"]),
          Le = null,
          tn = h({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
          Ue = "http://www.w3.org/1998/Math/MathML",
          Fe = "http://www.w3.org/2000/svg",
          Rt = "http://www.w3.org/1999/xhtml",
          wt = Rt,
          Pe = !1,
          _e = null,
          oo = h({}, [Ue, Fe, Rt], A),
          ee = null,
          ao = ["application/xhtml+xml", "text/html"],
          co = "text/html",
          D = null,
          Ot = null,
          ro = J.createElement("form"),
          en = function (d) {
            return d instanceof RegExp || d instanceof Function;
          },
          Ke = function () {
            let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(Ot && Ot === d)) {
              if (
                ((!d || typeof d != "object") && (d = {}),
                (d = Vt(d)),
                (ee = ao.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? co : d.PARSER_MEDIA_TYPE),
                (D = ee === "application/xhtml+xml" ? A : N),
                (z = S(d, "ALLOWED_TAGS") ? h({}, d.ALLOWED_TAGS, D) : yl),
                (j = S(d, "ALLOWED_ATTR") ? h({}, d.ALLOWED_ATTR, D) : vl),
                (_e = S(d, "ALLOWED_NAMESPACES") ? h({}, d.ALLOWED_NAMESPACES, A) : oo),
                (Le = S(d, "ADD_URI_SAFE_ATTR") ? h(Vt(tn), d.ADD_URI_SAFE_ATTR, D) : tn),
                (ql = S(d, "ADD_DATA_URI_TAGS") ? h(Vt($l), d.ADD_DATA_URI_TAGS, D) : $l),
                (Ht = S(d, "FORBID_CONTENTS") ? h({}, d.FORBID_CONTENTS, D) : Kl),
                ($t = S(d, "FORBID_TAGS") ? h({}, d.FORBID_TAGS, D) : {}),
                (ye = S(d, "FORBID_ATTR") ? h({}, d.FORBID_ATTR, D) : {}),
                (ft = S(d, "USE_PROFILES") ? d.USE_PROFILES : !1),
                (zl = d.ALLOW_ARIA_ATTR !== !1),
                (ve = d.ALLOW_DATA_ATTR !== !1),
                (jl = d.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (Dl = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
                (St = d.SAFE_FOR_TEMPLATES || !1),
                (Ll = d.SAFE_FOR_XML !== !1),
                (Qt = d.WHOLE_DOCUMENT || !1),
                (At = d.RETURN_DOM || !1),
                (We = d.RETURN_DOM_FRAGMENT || !1),
                (ue = d.RETURN_TRUSTED_TYPE || !1),
                (je = d.FORCE_BODY || !1),
                (Pl = d.SANITIZE_DOM !== !1),
                (_l = d.SANITIZE_NAMED_PROPS || !1),
                (De = d.KEEP_CONTENT !== !1),
                (te = d.IN_PLACE || !1),
                (Ol = d.ALLOWED_URI_REGEXP || Ft),
                (wt = d.NAMESPACE || Rt),
                (H = d.CUSTOM_ELEMENT_HANDLING || {}),
                d.CUSTOM_ELEMENT_HANDLING && en(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                d.CUSTOM_ELEMENT_HANDLING &&
                  en(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (H.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                d.CUSTOM_ELEMENT_HANDLING &&
                  typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" &&
                  (H.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                St && (ve = !1),
                We && (At = !0),
                ft &&
                  ((z = h({}, V)),
                  (j = []),
                  ft.html === !0 && (h(z, Re), h(j, G)),
                  ft.svg === !0 && (h(z, Nt), h(j, B), h(j, Y)),
                  ft.svgFilters === !0 && (h(z, Xt), h(j, B), h(j, Y)),
                  ft.mathMl === !0 && (h(z, Pt), h(j, p), h(j, Y))),
                d.ADD_TAGS && (z === yl && (z = Vt(z)), h(z, d.ADD_TAGS, D)),
                d.ADD_ATTR && (j === vl && (j = Vt(j)), h(j, d.ADD_ATTR, D)),
                d.ADD_URI_SAFE_ATTR && h(Le, d.ADD_URI_SAFE_ATTR, D),
                d.FORBID_CONTENTS && (Ht === Kl && (Ht = Vt(Ht)), h(Ht, d.FORBID_CONTENTS, D)),
                De && (z["#text"] = !0),
                Qt && h(z, ["html", "head", "body"]),
                z.table && (h(z, ["tbody"]), delete $t.tbody),
                d.TRUSTED_TYPES_POLICY)
              ) {
                if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
                  throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
                  throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                (et = d.TRUSTED_TYPES_POLICY), (qt = et.createHTML(""));
              } else et === void 0 && (et = Oi(Ge, K)), et !== null && typeof qt == "string" && (qt = et.createHTML(""));
              o && o(d), (Ot = d);
            }
          },
          ln = h({}, ["mi", "mo", "mn", "ms", "mtext"]),
          nn = h({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          bo = h({}, ["title", "style", "font", "a", "script"]),
          on = h({}, [...Nt, ...Xt, ...Lt]),
          dn = h({}, [...Pt, ...s]),
          Vo = function (d) {
            let R = Ae(d);
            (!R || !R.tagName) && (R = { namespaceURI: wt, tagName: "template" });
            let U = N(d.tagName),
              C = N(R.tagName);
            return _e[d.namespaceURI]
              ? d.namespaceURI === Fe
                ? R.namespaceURI === Rt
                  ? U === "svg"
                  : R.namespaceURI === Ue
                  ? U === "svg" && (C === "annotation-xml" || ln[C])
                  : !!on[U]
                : d.namespaceURI === Ue
                ? R.namespaceURI === Rt
                  ? U === "math"
                  : R.namespaceURI === Fe
                  ? U === "math" && nn[C]
                  : !!dn[U]
                : d.namespaceURI === Rt
                ? (R.namespaceURI === Fe && !nn[C]) || (R.namespaceURI === Ue && !ln[C])
                  ? !1
                  : !dn[U] && (bo[U] || !on[U])
                : !!(ee === "application/xhtml+xml" && _e[d.namespaceURI])
              : !1;
          },
          Gt = function (d) {
            u(F.removed, { element: d });
            try {
              d.parentNode.removeChild(d);
            } catch (R) {
              d.remove();
            }
          },
          qe = function (d, R) {
            try {
              u(F.removed, { attribute: R.getAttributeNode(d), from: R });
            } catch (U) {
              u(F.removed, { attribute: null, from: R });
            }
            if ((R.removeAttribute(d), d === "is" && !j[d]))
              if (At || We)
                try {
                  Gt(R);
                } catch (U) {}
              else
                try {
                  R.setAttribute(d, "");
                } catch (U) {}
          },
          an = function (d) {
            let R = null,
              U = null;
            if (je) d = "<remove></remove>" + d;
            else {
              let $ = y(d, /^[\r\n\t ]+/);
              U = $ && $[0];
            }
            ee === "application/xhtml+xml" && wt === Rt && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
            let C = et ? et.createHTML(d) : d;
            if (wt === Rt)
              try {
                R = new ji().parseFromString(C, ee);
              } catch ($) {}
            if (!R || !R.documentElement) {
              R = fe.createDocument(wt, "template", null);
              try {
                R.documentElement.innerHTML = Pe ? qt : C;
              } catch ($) {}
            }
            let q = R.body || R.documentElement;
            return (
              d && U && q.insertBefore(J.createTextNode(U), q.childNodes[0] || null),
              wt === Rt ? qi.call(R, Qt ? "html" : "body")[0] : Qt ? R.documentElement : q
            );
          },
          cn = function (d) {
            return _i.call(
              d.ownerDocument || d,
              d,
              Kt.SHOW_ELEMENT | Kt.SHOW_COMMENT | Kt.SHOW_TEXT | Kt.SHOW_PROCESSING_INSTRUCTION | Kt.SHOW_CDATA_SECTION,
              null
            );
          },
          Zo = function (d) {
            return (
              d instanceof zi &&
              (typeof d.nodeName != "string" ||
                typeof d.textContent != "string" ||
                typeof d.removeChild != "function" ||
                !(d.attributes instanceof vi) ||
                typeof d.removeAttribute != "function" ||
                typeof d.setAttribute != "function" ||
                typeof d.namespaceURI != "string" ||
                typeof d.insertBefore != "function" ||
                typeof d.hasChildNodes != "function")
            );
          },
          rn = function (d) {
            return typeof Se == "function" && d instanceof Se;
          },
          mt = function (d, R, U) {
            rt[d] &&
              Z(rt[d], (C) => {
                C.call(F, R, U, Ot);
              });
          },
          bn = function (d) {
            let R = null;
            if ((mt("beforeSanitizeElements", d, null), Zo(d))) return Gt(d), !0;
            let U = D(d.nodeName);
            if (
              (mt("uponSanitizeElement", d, { tagName: U, allowedTags: z }),
              (d.hasChildNodes() && !rn(d.firstElementChild) && f(/<[/\w]/g, d.innerHTML) && f(/<[/\w]/g, d.textContent)) ||
                d.nodeType === 7 ||
                (Ll && d.nodeType === 8 && f(/<[/\w]/g, d.data)))
            )
              return Gt(d), !0;
            if (!z[U] || $t[U]) {
              if (!$t[U] && Zn(U) && ((H.tagNameCheck instanceof RegExp && f(H.tagNameCheck, U)) || (H.tagNameCheck instanceof Function && H.tagNameCheck(U))))
                return !1;
              if (De && !Ht[U]) {
                let C = Ae(d) || d.parentNode,
                  q = Pi(d) || d.childNodes;
                if (q && C) {
                  let $ = q.length;
                  for (let it = $ - 1; it >= 0; --it) C.insertBefore(Di(q[it], !0), Li(d));
                }
              }
              return Gt(d), !0;
            }
            return (d instanceof Hl && !Vo(d)) || ((U === "noscript" || U === "noembed" || U === "noframes") && f(/<\/no(script|embed|frames)/i, d.innerHTML))
              ? (Gt(d), !0)
              : (St &&
                  d.nodeType === 3 &&
                  ((R = d.textContent),
                  Z([He, we, Oe], (C) => {
                    R = w(R, C, " ");
                  }),
                  d.textContent !== R && (u(F.removed, { element: d.cloneNode() }), (d.textContent = R))),
                mt("afterSanitizeElements", d, null),
                !1);
          },
          Vn = function (d, R, U) {
            if (Pl && (R === "id" || R === "name") && (U in J || U in ro)) return !1;
            if (!(ve && !ye[R] && f(to, R))) {
              if (!(zl && f(eo, R))) {
                if (!j[R] || ye[R]) {
                  if (
                    !(
                      (Zn(d) &&
                        ((H.tagNameCheck instanceof RegExp && f(H.tagNameCheck, d)) || (H.tagNameCheck instanceof Function && H.tagNameCheck(d))) &&
                        ((H.attributeNameCheck instanceof RegExp && f(H.attributeNameCheck, R)) ||
                          (H.attributeNameCheck instanceof Function && H.attributeNameCheck(R)))) ||
                      (R === "is" &&
                        H.allowCustomizedBuiltInElements &&
                        ((H.tagNameCheck instanceof RegExp && f(H.tagNameCheck, U)) || (H.tagNameCheck instanceof Function && H.tagNameCheck(U))))
                    )
                  )
                    return !1;
                } else if (!Le[R]) {
                  if (!f(Ol, w(U, wl, ""))) {
                    if (!((R === "src" || R === "xlink:href" || R === "href") && d !== "script" && bt(U, "data:") === 0 && ql[d])) {
                      if (!(jl && !f(lo, w(U, wl, "")))) {
                        if (U) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Zn = function (d) {
            return d !== "annotation-xml" && y(d, no);
          },
          sn = function (d) {
            mt("beforeSanitizeAttributes", d, null);
            let { attributes: R } = d;
            if (!R) return;
            let U = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: j },
              C = R.length;
            for (; C--; ) {
              let q = R[C],
                { name: $, namespaceURI: it, value: Tt } = q,
                le = D($),
                ot = $ === "value" ? Tt : Ut(Tt);
              if (
                ((U.attrName = le),
                (U.attrValue = ot),
                (U.keepAttr = !0),
                (U.forceKeepAttr = void 0),
                mt("uponSanitizeAttribute", d, U),
                (ot = U.attrValue),
                U.forceKeepAttr || (qe($, d), !U.keepAttr))
              )
                continue;
              if (!Dl && f(/\/>/i, ot)) {
                qe($, d);
                continue;
              }
              St &&
                Z([He, we, Oe], (Gn) => {
                  ot = w(ot, Gn, " ");
                });
              let Rn = D(d.nodeName);
              if (Vn(Rn, le, ot)) {
                if (
                  (_l && (le === "id" || le === "name") && (qe($, d), (ot = io + ot)),
                  et && typeof Ge == "object" && typeof Ge.getAttributeType == "function" && !it)
                )
                  switch (Ge.getAttributeType(Rn, le)) {
                    case "TrustedHTML": {
                      ot = et.createHTML(ot);
                      break;
                    }
                    case "TrustedScriptURL": {
                      ot = et.createScriptURL(ot);
                      break;
                    }
                  }
                try {
                  it ? d.setAttributeNS(it, $, ot) : d.setAttribute($, ot), W(F.removed);
                } catch (Gn) {}
              }
            }
            mt("afterSanitizeAttributes", d, null);
          },
          so = function g(d) {
            let R = null,
              U = cn(d);
            for (mt("beforeSanitizeShadowDOM", d, null); (R = U.nextNode()); )
              mt("uponSanitizeShadowNode", R, null), !bn(R) && (R.content instanceof st && g(R.content), sn(R));
            mt("afterSanitizeShadowDOM", d, null);
          };
        return (
          (F.sanitize = function (g) {
            let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              R = null,
              U = null,
              C = null,
              q = null;
            if (((Pe = !g), Pe && (g = "<!-->"), typeof g != "string" && !rn(g)))
              if (typeof g.toString == "function") {
                if (((g = g.toString()), typeof g != "string")) throw v("dirty is not a string, aborting");
              } else throw v("toString is not a function");
            if (!F.isSupported) return g;
            if ((ze || Ke(d), (F.removed = []), typeof g == "string" && (te = !1), te)) {
              if (g.nodeName) {
                let Tt = D(g.nodeName);
                if (!z[Tt] || $t[Tt]) throw v("root node is forbidden and cannot be sanitized in-place");
              }
            } else if (g instanceof Se)
              (R = an("<!---->")),
                (U = R.ownerDocument.importNode(g, !0)),
                (U.nodeType === 1 && U.nodeName === "BODY") || U.nodeName === "HTML" ? (R = U) : R.appendChild(U);
            else {
              if (!At && !St && !Qt && g.indexOf("<") === -1) return et && ue ? et.createHTML(g) : g;
              if (((R = an(g)), !R)) return At ? null : ue ? qt : "";
            }
            R && je && Gt(R.firstChild);
            let $ = cn(te ? g : R);
            for (; (C = $.nextNode()); ) bn(C) || (C.content instanceof st && so(C.content), sn(C));
            if (te) return g;
            if (At) {
              if (We) for (q = Ki.call(R.ownerDocument); R.firstChild; ) q.appendChild(R.firstChild);
              else q = R;
              return (j.shadowroot || j.shadowrootmode) && (q = $i.call(X, q, !0)), q;
            }
            let it = Qt ? R.outerHTML : R.innerHTML;
            return (
              Qt &&
                z["!doctype"] &&
                R.ownerDocument &&
                R.ownerDocument.doctype &&
                R.ownerDocument.doctype.name &&
                f(Sl, R.ownerDocument.doctype.name) &&
                (it =
                  "<!DOCTYPE " +
                  R.ownerDocument.doctype.name +
                  `>
` +
                  it),
              St &&
                Z([He, we, Oe], (Tt) => {
                  it = w(it, Tt, " ");
                }),
              et && ue ? et.createHTML(it) : it
            );
          }),
          (F.setConfig = function () {
            let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            Ke(g), (ze = !0);
          }),
          (F.clearConfig = function () {
            (Ot = null), (ze = !1);
          }),
          (F.isValidAttribute = function (g, d, R) {
            Ot || Ke({});
            let U = D(g),
              C = D(d);
            return Vn(U, C, R);
          }),
          (F.addHook = function (g, d) {
            typeof d == "function" && ((rt[g] = rt[g] || []), u(rt[g], d));
          }),
          (F.removeHook = function (g) {
            if (rt[g]) return W(rt[g]);
          }),
          (F.removeHooks = function (g) {
            rt[g] && (rt[g] = []);
          }),
          (F.removeAllHooks = function () {
            rt = {};
          }),
          F
        );
      }
      var yi = fl();
      return yi;
    });
  });
  var ge = T((nl, il) => {
    (function (e) {
      "use strict";
      var t = function () {},
        l =
          e.requestAnimationFrame ||
          e.webkitRequestAnimationFrame ||
          e.mozRequestAnimationFrame ||
          e.msRequestAnimationFrame ||
          function (b) {
            return setTimeout(b, 16);
          };
      function n() {
        var b = this;
        (b.reads = []), (b.writes = []), (b.raf = l.bind(e)), t("initialized", b);
      }
      n.prototype = {
        constructor: n,
        runTasks: function (b) {
          t("run tasks");
          for (var Z; (Z = b.shift()); ) Z();
        },
        measure: function (b, Z) {
          t("measure");
          var W = Z ? b.bind(Z) : b;
          return this.reads.push(W), i(this), W;
        },
        mutate: function (b, Z) {
          t("mutate");
          var W = Z ? b.bind(Z) : b;
          return this.writes.push(W), i(this), W;
        },
        clear: function (b) {
          return t("clear", b), a(this.reads, b) || a(this.writes, b);
        },
        extend: function (b) {
          if ((t("extend", b), typeof b != "object")) throw new Error("expected object");
          var Z = Object.create(this);
          return c(Z, b), (Z.fastdom = this), Z.initialize && Z.initialize(), Z;
        },
        catch: null,
      };
      function i(b) {
        b.scheduled || ((b.scheduled = !0), b.raf(o.bind(null, b)), t("flush scheduled"));
      }
      function o(b) {
        t("flush");
        var Z = b.writes,
          W = b.reads,
          u;
        try {
          t("flushing reads", W.length), b.runTasks(W), t("flushing writes", Z.length), b.runTasks(Z);
        } catch (N) {
          u = N;
        }
        if (((b.scheduled = !1), (W.length || Z.length) && i(b), u))
          if ((t("task errored", u.message), b.catch)) b.catch(u);
          else throw u;
      }
      function a(b, Z) {
        var W = b.indexOf(Z);
        return !!~W && !!b.splice(W, 1);
      }
      function c(b, Z) {
        for (var W in Z) Z.hasOwnProperty(W) && (b[W] = Z[W]);
      }
      var r = (e.fastdom = e.fastdom || new n());
      typeof il == "object" && (il.exports = r);
    })(typeof window != "undefined" ? window : typeof nl != "undefined" ? nl : globalThis);
  });
  var In = T((xd, pn) => {
    pn.exports = function () {
      return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
    };
  });
  var gt = T((Jt) => {
    var ol,
      Io = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
        2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
      ];
    Jt.getSymbolSize = function (t) {
      if (!t) throw new Error('"version" cannot be null or undefined');
      if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
      return t * 4 + 17;
    };
    Jt.getSymbolTotalCodewords = function (t) {
      return Io[t];
    };
    Jt.getBCHDigit = function (e) {
      let t = 0;
      for (; e !== 0; ) t++, (e >>>= 1);
      return t;
    };
    Jt.setToSJISFunction = function (t) {
      if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
      ol = t;
    };
    Jt.isKanjiModeEnabled = function () {
      return typeof ol != "undefined";
    };
    Jt.toSJIS = function (t) {
      return ol(t);
    };
  });
  var pe = T((at) => {
    at.L = { bit: 1 };
    at.M = { bit: 0 };
    at.Q = { bit: 3 };
    at.H = { bit: 2 };
    function ho(e) {
      if (typeof e != "string") throw new Error("Param is not a string");
      switch (e.toLowerCase()) {
        case "l":
        case "low":
          return at.L;
        case "m":
        case "medium":
          return at.M;
        case "q":
        case "quartile":
          return at.Q;
        case "h":
        case "high":
          return at.H;
        default:
          throw new Error("Unknown EC Level: " + e);
      }
    }
    at.isValid = function (t) {
      return t && typeof t.bit != "undefined" && t.bit >= 0 && t.bit < 4;
    };
    at.from = function (t, l) {
      if (at.isValid(t)) return t;
      try {
        return ho(t);
      } catch (n) {
        return l;
      }
    };
  });
  var Nn = T((kd, Bn) => {
    function hn() {
      (this.buffer = []), (this.length = 0);
    }
    hn.prototype = {
      get: function (e) {
        let t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1;
      },
      put: function (e, t) {
        for (let l = 0; l < t; l++) this.putBit(((e >>> (t - l - 1)) & 1) === 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        let t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
      },
    };
    Bn.exports = hn;
  });
  var Qn = T((Md, Xn) => {
    function ne(e) {
      if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
      (this.size = e), (this.data = new Uint8Array(e * e)), (this.reservedBit = new Uint8Array(e * e));
    }
    ne.prototype.set = function (e, t, l, n) {
      let i = e * this.size + t;
      (this.data[i] = l), n && (this.reservedBit[i] = !0);
    };
    ne.prototype.get = function (e, t) {
      return this.data[e * this.size + t];
    };
    ne.prototype.xor = function (e, t, l) {
      this.data[e * this.size + t] ^= l;
    };
    ne.prototype.isReserved = function (e, t) {
      return this.reservedBit[e * this.size + t];
    };
    Xn.exports = ne;
  });
  var Tn = T((Ie) => {
    var Bo = gt().getSymbolSize;
    Ie.getRowColCoords = function (t) {
      if (t === 1) return [];
      let l = Math.floor(t / 7) + 2,
        n = Bo(t),
        i = n === 145 ? 26 : Math.ceil((n - 13) / (2 * l - 2)) * 2,
        o = [n - 7];
      for (let a = 1; a < l - 1; a++) o[a] = o[a - 1] - i;
      return o.push(6), o.reverse();
    };
    Ie.getPositions = function (t) {
      let l = [],
        n = Ie.getRowColCoords(t),
        i = n.length;
      for (let o = 0; o < i; o++)
        for (let a = 0; a < i; a++) (o === 0 && a === 0) || (o === 0 && a === i - 1) || (o === i - 1 && a === 0) || l.push([n[o], n[a]]);
      return l;
    };
  });
  var xn = T((Jn) => {
    var No = gt().getSymbolSize,
      Yn = 7;
    Jn.getPositions = function (t) {
      let l = No(t);
      return [
        [0, 0],
        [l - Yn, 0],
        [0, l - Yn],
      ];
    };
  });
  var En = T((k) => {
    k.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
    var xt = { N1: 3, N2: 3, N3: 40, N4: 10 };
    k.isValid = function (t) {
      return t != null && t !== "" && !isNaN(t) && t >= 0 && t <= 7;
    };
    k.from = function (t) {
      return k.isValid(t) ? parseInt(t, 10) : void 0;
    };
    k.getPenaltyN1 = function (t) {
      let l = t.size,
        n = 0,
        i = 0,
        o = 0,
        a = null,
        c = null;
      for (let r = 0; r < l; r++) {
        (i = o = 0), (a = c = null);
        for (let b = 0; b < l; b++) {
          let Z = t.get(r, b);
          Z === a ? i++ : (i >= 5 && (n += xt.N1 + (i - 5)), (a = Z), (i = 1)),
            (Z = t.get(b, r)),
            Z === c ? o++ : (o >= 5 && (n += xt.N1 + (o - 5)), (c = Z), (o = 1));
        }
        i >= 5 && (n += xt.N1 + (i - 5)), o >= 5 && (n += xt.N1 + (o - 5));
      }
      return n;
    };
    k.getPenaltyN2 = function (t) {
      let l = t.size,
        n = 0;
      for (let i = 0; i < l - 1; i++)
        for (let o = 0; o < l - 1; o++) {
          let a = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
          (a === 4 || a === 0) && n++;
        }
      return n * xt.N2;
    };
    k.getPenaltyN3 = function (t) {
      let l = t.size,
        n = 0,
        i = 0,
        o = 0;
      for (let a = 0; a < l; a++) {
        i = o = 0;
        for (let c = 0; c < l; c++)
          (i = ((i << 1) & 2047) | t.get(a, c)),
            c >= 10 && (i === 1488 || i === 93) && n++,
            (o = ((o << 1) & 2047) | t.get(c, a)),
            c >= 10 && (o === 1488 || o === 93) && n++;
      }
      return n * xt.N3;
    };
    k.getPenaltyN4 = function (t) {
      let l = 0,
        n = t.data.length;
      for (let o = 0; o < n; o++) l += t.data[o];
      return Math.abs(Math.ceil((l * 100) / n / 5) - 10) * xt.N4;
    };
    function Xo(e, t, l) {
      switch (e) {
        case k.Patterns.PATTERN000:
          return (t + l) % 2 === 0;
        case k.Patterns.PATTERN001:
          return t % 2 === 0;
        case k.Patterns.PATTERN010:
          return l % 3 === 0;
        case k.Patterns.PATTERN011:
          return (t + l) % 3 === 0;
        case k.Patterns.PATTERN100:
          return (Math.floor(t / 2) + Math.floor(l / 3)) % 2 === 0;
        case k.Patterns.PATTERN101:
          return ((t * l) % 2) + ((t * l) % 3) === 0;
        case k.Patterns.PATTERN110:
          return (((t * l) % 2) + ((t * l) % 3)) % 2 === 0;
        case k.Patterns.PATTERN111:
          return (((t * l) % 3) + ((t + l) % 2)) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + e);
      }
    }
    k.applyMask = function (t, l) {
      let n = l.size;
      for (let i = 0; i < n; i++) for (let o = 0; o < n; o++) l.isReserved(o, i) || l.xor(o, i, Xo(t, o, i));
    };
    k.getBestMask = function (t, l) {
      let n = Object.keys(k.Patterns).length,
        i = 0,
        o = 1 / 0;
      for (let a = 0; a < n; a++) {
        l(a), k.applyMask(a, t);
        let c = k.getPenaltyN1(t) + k.getPenaltyN2(t) + k.getPenaltyN3(t) + k.getPenaltyN4(t);
        k.applyMask(a, t), c < o && ((o = c), (i = a));
      }
      return i;
    };
  });
  var al = T((dl) => {
    var pt = pe(),
      he = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9,
        12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25,
        30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18,
        35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
      ],
      Be = [
        7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
        72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
        532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
        588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
        924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
        2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
      ];
    dl.getBlocksCount = function (t, l) {
      switch (l) {
        case pt.L:
          return he[(t - 1) * 4 + 0];
        case pt.M:
          return he[(t - 1) * 4 + 1];
        case pt.Q:
          return he[(t - 1) * 4 + 2];
        case pt.H:
          return he[(t - 1) * 4 + 3];
        default:
          return;
      }
    };
    dl.getTotalCodewordsCount = function (t, l) {
      switch (l) {
        case pt.L:
          return Be[(t - 1) * 4 + 0];
        case pt.M:
          return Be[(t - 1) * 4 + 1];
        case pt.Q:
          return Be[(t - 1) * 4 + 2];
        case pt.H:
          return Be[(t - 1) * 4 + 3];
        default:
          return;
      }
    };
  });
  var Cn = T((Xe) => {
    var ie = new Uint8Array(512),
      Ne = new Uint8Array(256);
    (function () {
      let t = 1;
      for (let l = 0; l < 255; l++) (ie[l] = t), (Ne[t] = l), (t <<= 1), t & 256 && (t ^= 285);
      for (let l = 255; l < 512; l++) ie[l] = ie[l - 255];
    })();
    Xe.log = function (t) {
      if (t < 1) throw new Error("log(" + t + ")");
      return Ne[t];
    };
    Xe.exp = function (t) {
      return ie[t];
    };
    Xe.mul = function (t, l) {
      return t === 0 || l === 0 ? 0 : ie[Ne[t] + Ne[l]];
    };
  });
  var kn = T((oe) => {
    var cl = Cn();
    oe.mul = function (t, l) {
      let n = new Uint8Array(t.length + l.length - 1);
      for (let i = 0; i < t.length; i++) for (let o = 0; o < l.length; o++) n[i + o] ^= cl.mul(t[i], l[o]);
      return n;
    };
    oe.mod = function (t, l) {
      let n = new Uint8Array(t);
      for (; n.length - l.length >= 0; ) {
        let i = n[0];
        for (let a = 0; a < l.length; a++) n[a] ^= cl.mul(l[a], i);
        let o = 0;
        for (; o < n.length && n[o] === 0; ) o++;
        n = n.slice(o);
      }
      return n;
    };
    oe.generateECPolynomial = function (t) {
      let l = new Uint8Array([1]);
      for (let n = 0; n < t; n++) l = oe.mul(l, new Uint8Array([1, cl.exp(n)]));
      return l;
    };
  });
  var An = T((yd, Sn) => {
    var Mn = kn();
    function rl(e) {
      (this.genPoly = void 0), (this.degree = e), this.degree && this.initialize(this.degree);
    }
    rl.prototype.initialize = function (t) {
      (this.degree = t), (this.genPoly = Mn.generateECPolynomial(this.degree));
    };
    rl.prototype.encode = function (t) {
      if (!this.genPoly) throw new Error("Encoder not initialized");
      let l = new Uint8Array(t.length + this.degree);
      l.set(t);
      let n = Mn.mod(l, this.genPoly),
        i = this.degree - n.length;
      if (i > 0) {
        let o = new Uint8Array(this.degree);
        return o.set(n, i), o;
      }
      return n;
    };
    Sn.exports = rl;
  });
  var bl = T((fn) => {
    fn.isValid = function (t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    };
  });
  var Vl = T((Wt) => {
    var Hn = "[0-9]+",
      Qo = "[A-Z $%*+\\-./:]+",
      de =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    de = de.replace(/u/g, "\\u");
    var To =
      "(?:(?![A-Z0-9 $%*+\\-./:]|" +
      de +
      `)(?:.|[\r
]))+`;
    Wt.KANJI = new RegExp(de, "g");
    Wt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    Wt.BYTE = new RegExp(To, "g");
    Wt.NUMERIC = new RegExp(Hn, "g");
    Wt.ALPHANUMERIC = new RegExp(Qo, "g");
    var Yo = new RegExp("^" + de + "$"),
      Jo = new RegExp("^" + Hn + "$"),
      xo = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    Wt.testKanji = function (t) {
      return Yo.test(t);
    };
    Wt.testNumeric = function (t) {
      return Jo.test(t);
    };
    Wt.testAlphanumeric = function (t) {
      return xo.test(t);
    };
  });
  var It = T((O) => {
    var Eo = bl(),
      Zl = Vl();
    O.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] };
    O.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] };
    O.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] };
    O.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] };
    O.MIXED = { bit: -1 };
    O.getCharCountIndicator = function (t, l) {
      if (!t.ccBits) throw new Error("Invalid mode: " + t);
      if (!Eo.isValid(l)) throw new Error("Invalid version: " + l);
      return l >= 1 && l < 10 ? t.ccBits[0] : l < 27 ? t.ccBits[1] : t.ccBits[2];
    };
    O.getBestModeForData = function (t) {
      return Zl.testNumeric(t) ? O.NUMERIC : Zl.testAlphanumeric(t) ? O.ALPHANUMERIC : Zl.testKanji(t) ? O.KANJI : O.BYTE;
    };
    O.toString = function (t) {
      if (t && t.id) return t.id;
      throw new Error("Invalid mode");
    };
    O.isValid = function (t) {
      return t && t.bit && t.ccBits;
    };
    function Co(e) {
      if (typeof e != "string") throw new Error("Param is not a string");
      switch (e.toLowerCase()) {
        case "numeric":
          return O.NUMERIC;
        case "alphanumeric":
          return O.ALPHANUMERIC;
        case "kanji":
          return O.KANJI;
        case "byte":
          return O.BYTE;
        default:
          throw new Error("Unknown mode: " + e);
      }
    }
    O.from = function (t, l) {
      if (O.isValid(t)) return t;
      try {
        return Co(t);
      } catch (n) {
        return l;
      }
    };
  });
  var zn = T((Et) => {
    var Qe = gt(),
      ko = al(),
      wn = pe(),
      ht = It(),
      sl = bl(),
      yn = 7973,
      On = Qe.getBCHDigit(yn);
    function Mo(e, t, l) {
      for (let n = 1; n <= 40; n++) if (t <= Et.getCapacity(n, l, e)) return n;
    }
    function vn(e, t) {
      return ht.getCharCountIndicator(e, t) + 4;
    }
    function So(e, t) {
      let l = 0;
      return (
        e.forEach(function (n) {
          let i = vn(n.mode, t);
          l += i + n.getBitsLength();
        }),
        l
      );
    }
    function Ao(e, t) {
      for (let l = 1; l <= 40; l++) if (So(e, l) <= Et.getCapacity(l, t, ht.MIXED)) return l;
    }
    Et.from = function (t, l) {
      return sl.isValid(t) ? parseInt(t, 10) : l;
    };
    Et.getCapacity = function (t, l, n) {
      if (!sl.isValid(t)) throw new Error("Invalid QR Code version");
      typeof n == "undefined" && (n = ht.BYTE);
      let i = Qe.getSymbolTotalCodewords(t),
        o = ko.getTotalCodewordsCount(t, l),
        a = (i - o) * 8;
      if (n === ht.MIXED) return a;
      let c = a - vn(n, t);
      switch (n) {
        case ht.NUMERIC:
          return Math.floor((c / 10) * 3);
        case ht.ALPHANUMERIC:
          return Math.floor((c / 11) * 2);
        case ht.KANJI:
          return Math.floor(c / 13);
        case ht.BYTE:
        default:
          return Math.floor(c / 8);
      }
    };
    Et.getBestVersionForData = function (t, l) {
      let n,
        i = wn.from(l, wn.M);
      if (Array.isArray(t)) {
        if (t.length > 1) return Ao(t, i);
        if (t.length === 0) return 1;
        n = t[0];
      } else n = t;
      return Mo(n.mode, n.getLength(), i);
    };
    Et.getEncodedBits = function (t) {
      if (!sl.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
      let l = t << 12;
      for (; Qe.getBCHDigit(l) - On >= 0; ) l ^= yn << (Qe.getBCHDigit(l) - On);
      return (t << 12) | l;
    };
  });
  var Pn = T((Ln) => {
    var Rl = gt(),
      Dn = 1335,
      fo = 21522,
      jn = Rl.getBCHDigit(Dn);
    Ln.getEncodedBits = function (t, l) {
      let n = (t.bit << 3) | l,
        i = n << 10;
      for (; Rl.getBCHDigit(i) - jn >= 0; ) i ^= Dn << (Rl.getBCHDigit(i) - jn);
      return ((n << 10) | i) ^ fo;
    };
  });
  var Kn = T((Pd, _n) => {
    var Ho = It();
    function yt(e) {
      (this.mode = Ho.NUMERIC), (this.data = e.toString());
    }
    yt.getBitsLength = function (t) {
      return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
    };
    yt.prototype.getLength = function () {
      return this.data.length;
    };
    yt.prototype.getBitsLength = function () {
      return yt.getBitsLength(this.data.length);
    };
    yt.prototype.write = function (t) {
      let l, n, i;
      for (l = 0; l + 3 <= this.data.length; l += 3) (n = this.data.substr(l, 3)), (i = parseInt(n, 10)), t.put(i, 10);
      let o = this.data.length - l;
      o > 0 && ((n = this.data.substr(l)), (i = parseInt(n, 10)), t.put(i, o * 3 + 1));
    };
    _n.exports = yt;
  });
  var $n = T((_d, qn) => {
    var wo = It(),
      Gl = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":",
      ];
    function vt(e) {
      (this.mode = wo.ALPHANUMERIC), (this.data = e);
    }
    vt.getBitsLength = function (t) {
      return 11 * Math.floor(t / 2) + 6 * (t % 2);
    };
    vt.prototype.getLength = function () {
      return this.data.length;
    };
    vt.prototype.getBitsLength = function () {
      return vt.getBitsLength(this.data.length);
    };
    vt.prototype.write = function (t) {
      let l;
      for (l = 0; l + 2 <= this.data.length; l += 2) {
        let n = Gl.indexOf(this.data[l]) * 45;
        (n += Gl.indexOf(this.data[l + 1])), t.put(n, 11);
      }
      this.data.length % 2 && t.put(Gl.indexOf(this.data[l]), 6);
    };
    qn.exports = vt;
  });
  var ei = T((Kd, ti) => {
    "use strict";
    ti.exports = function (t) {
      for (var l = [], n = t.length, i = 0; i < n; i++) {
        var o = t.charCodeAt(i);
        if (o >= 55296 && o <= 56319 && n > i + 1) {
          var a = t.charCodeAt(i + 1);
          a >= 56320 && a <= 57343 && ((o = (o - 55296) * 1024 + a - 56320 + 65536), (i += 1));
        }
        if (o < 128) {
          l.push(o);
          continue;
        }
        if (o < 2048) {
          l.push((o >> 6) | 192), l.push((o & 63) | 128);
          continue;
        }
        if (o < 55296 || (o >= 57344 && o < 65536)) {
          l.push((o >> 12) | 224), l.push(((o >> 6) & 63) | 128), l.push((o & 63) | 128);
          continue;
        }
        if (o >= 65536 && o <= 1114111) {
          l.push((o >> 18) | 240), l.push(((o >> 12) & 63) | 128), l.push(((o >> 6) & 63) | 128), l.push((o & 63) | 128);
          continue;
        }
        l.push(239, 191, 189);
      }
      return new Uint8Array(l).buffer;
    };
  });
  var ni = T((qd, li) => {
    var Oo = ei(),
      yo = It();
    function zt(e) {
      (this.mode = yo.BYTE), typeof e == "string" && (e = Oo(e)), (this.data = new Uint8Array(e));
    }
    zt.getBitsLength = function (t) {
      return t * 8;
    };
    zt.prototype.getLength = function () {
      return this.data.length;
    };
    zt.prototype.getBitsLength = function () {
      return zt.getBitsLength(this.data.length);
    };
    zt.prototype.write = function (e) {
      for (let t = 0, l = this.data.length; t < l; t++) e.put(this.data[t], 8);
    };
    li.exports = zt;
  });
  var oi = T(($d, ii) => {
    var vo = It(),
      zo = gt();
    function jt(e) {
      (this.mode = vo.KANJI), (this.data = e);
    }
    jt.getBitsLength = function (t) {
      return t * 13;
    };
    jt.prototype.getLength = function () {
      return this.data.length;
    };
    jt.prototype.getBitsLength = function () {
      return jt.getBitsLength(this.data.length);
    };
    jt.prototype.write = function (e) {
      let t;
      for (t = 0; t < this.data.length; t++) {
        let l = zo.toSJIS(this.data[t]);
        if (l >= 33088 && l <= 40956) l -= 33088;
        else if (l >= 57408 && l <= 60351) l -= 49472;
        else
          throw new Error(
            "Invalid SJIS character: " +
              this.data[t] +
              `
Make sure your charset is UTF-8`
          );
        (l = ((l >>> 8) & 255) * 192 + (l & 255)), e.put(l, 13);
      }
    };
    ii.exports = jt;
  });
  var di = T((ta, ml) => {
    "use strict";
    var ae = {
      single_source_shortest_paths: function (e, t, l) {
        var n = {},
          i = {};
        i[t] = 0;
        var o = ae.PriorityQueue.make();
        o.push(t, 0);
        for (var a, c, r, b, Z, W, u, N, A; !o.empty(); ) {
          (a = o.pop()), (c = a.value), (b = a.cost), (Z = e[c] || {});
          for (r in Z)
            Z.hasOwnProperty(r) &&
              ((W = Z[r]), (u = b + W), (N = i[r]), (A = typeof i[r] == "undefined"), (A || N > u) && ((i[r] = u), o.push(r, u), (n[r] = c)));
        }
        if (typeof l != "undefined" && typeof i[l] == "undefined") {
          var y = ["Could not find a path from ", t, " to ", l, "."].join("");
          throw new Error(y);
        }
        return n;
      },
      extract_shortest_path_from_predecessor_list: function (e, t) {
        for (var l = [], n = t, i; n; ) l.push(n), (i = e[n]), (n = e[n]);
        return l.reverse(), l;
      },
      find_path: function (e, t, l) {
        var n = ae.single_source_shortest_paths(e, t, l);
        return ae.extract_shortest_path_from_predecessor_list(n, l);
      },
      PriorityQueue: {
        make: function (e) {
          var t = ae.PriorityQueue,
            l = {},
            n;
          e = e || {};
          for (n in t) t.hasOwnProperty(n) && (l[n] = t[n]);
          return (l.queue = []), (l.sorter = e.sorter || t.default_sorter), l;
        },
        default_sorter: function (e, t) {
          return e.cost - t.cost;
        },
        push: function (e, t) {
          var l = { value: e, cost: t };
          this.queue.push(l), this.queue.sort(this.sorter);
        },
        pop: function () {
          return this.queue.shift();
        },
        empty: function () {
          return this.queue.length === 0;
        },
      },
    };
    typeof ml != "undefined" && (ml.exports = ae);
  });
  var Ri = T((Dt) => {
    var x = It(),
      ri = Kn(),
      bi = $n(),
      Vi = ni(),
      Zi = oi(),
      ce = Vl(),
      Te = gt(),
      jo = di();
    function ai(e) {
      return unescape(encodeURIComponent(e)).length;
    }
    function re(e, t, l) {
      let n = [],
        i;
      for (; (i = e.exec(l)) !== null; ) n.push({ data: i[0], index: i.index, mode: t, length: i[0].length });
      return n;
    }
    function si(e) {
      let t = re(ce.NUMERIC, x.NUMERIC, e),
        l = re(ce.ALPHANUMERIC, x.ALPHANUMERIC, e),
        n,
        i;
      return (
        Te.isKanjiModeEnabled() ? ((n = re(ce.BYTE, x.BYTE, e)), (i = re(ce.KANJI, x.KANJI, e))) : ((n = re(ce.BYTE_KANJI, x.BYTE, e)), (i = [])),
        t
          .concat(l, n, i)
          .sort(function (a, c) {
            return a.index - c.index;
          })
          .map(function (a) {
            return { data: a.data, mode: a.mode, length: a.length };
          })
      );
    }
    function Wl(e, t) {
      switch (t) {
        case x.NUMERIC:
          return ri.getBitsLength(e);
        case x.ALPHANUMERIC:
          return bi.getBitsLength(e);
        case x.KANJI:
          return Zi.getBitsLength(e);
        case x.BYTE:
          return Vi.getBitsLength(e);
      }
    }
    function Do(e) {
      return e.reduce(function (t, l) {
        let n = t.length - 1 >= 0 ? t[t.length - 1] : null;
        return n && n.mode === l.mode ? ((t[t.length - 1].data += l.data), t) : (t.push(l), t);
      }, []);
    }
    function Lo(e) {
      let t = [];
      for (let l = 0; l < e.length; l++) {
        let n = e[l];
        switch (n.mode) {
          case x.NUMERIC:
            t.push([n, { data: n.data, mode: x.ALPHANUMERIC, length: n.length }, { data: n.data, mode: x.BYTE, length: n.length }]);
            break;
          case x.ALPHANUMERIC:
            t.push([n, { data: n.data, mode: x.BYTE, length: n.length }]);
            break;
          case x.KANJI:
            t.push([n, { data: n.data, mode: x.BYTE, length: ai(n.data) }]);
            break;
          case x.BYTE:
            t.push([{ data: n.data, mode: x.BYTE, length: ai(n.data) }]);
        }
      }
      return t;
    }
    function Po(e, t) {
      let l = {},
        n = { start: {} },
        i = ["start"];
      for (let o = 0; o < e.length; o++) {
        let a = e[o],
          c = [];
        for (let r = 0; r < a.length; r++) {
          let b = a[r],
            Z = "" + o + r;
          c.push(Z), (l[Z] = { node: b, lastCount: 0 }), (n[Z] = {});
          for (let W = 0; W < i.length; W++) {
            let u = i[W];
            l[u] && l[u].node.mode === b.mode
              ? ((n[u][Z] = Wl(l[u].lastCount + b.length, b.mode) - Wl(l[u].lastCount, b.mode)), (l[u].lastCount += b.length))
              : (l[u] && (l[u].lastCount = b.length), (n[u][Z] = Wl(b.length, b.mode) + 4 + x.getCharCountIndicator(b.mode, t)));
          }
        }
        i = c;
      }
      for (let o = 0; o < i.length; o++) n[i[o]].end = 0;
      return { map: n, table: l };
    }
    function ci(e, t) {
      let l,
        n = x.getBestModeForData(e);
      if (((l = x.from(t, n)), l !== x.BYTE && l.bit < n.bit))
        throw new Error(
          '"' +
            e +
            '" cannot be encoded with mode ' +
            x.toString(l) +
            `.
 Suggested mode is: ` +
            x.toString(n)
        );
      switch ((l === x.KANJI && !Te.isKanjiModeEnabled() && (l = x.BYTE), l)) {
        case x.NUMERIC:
          return new ri(e);
        case x.ALPHANUMERIC:
          return new bi(e);
        case x.KANJI:
          return new Zi(e);
        case x.BYTE:
          return new Vi(e);
      }
    }
    Dt.fromArray = function (t) {
      return t.reduce(function (l, n) {
        return typeof n == "string" ? l.push(ci(n, null)) : n.data && l.push(ci(n.data, n.mode)), l;
      }, []);
    };
    Dt.fromString = function (t, l) {
      let n = si(t, Te.isKanjiModeEnabled()),
        i = Lo(n),
        o = Po(i, l),
        a = jo.find_path(o.map, "start", "end"),
        c = [];
      for (let r = 1; r < a.length - 1; r++) c.push(o.table[a[r]].node);
      return Dt.fromArray(Do(c));
    };
    Dt.rawSplit = function (t) {
      return Dt.fromArray(si(t, Te.isKanjiModeEnabled()));
    };
  });
  var mi = T((Gi) => {
    var Je = gt(),
      ul = pe(),
      _o = Nn(),
      Ko = Qn(),
      qo = Tn(),
      $o = xn(),
      gl = En(),
      pl = al(),
      td = An(),
      Ye = zn(),
      ed = Pn(),
      ld = It(),
      Ul = Ri();
    function nd(e, t) {
      let l = e.size,
        n = $o.getPositions(t);
      for (let i = 0; i < n.length; i++) {
        let o = n[i][0],
          a = n[i][1];
        for (let c = -1; c <= 7; c++)
          if (!(o + c <= -1 || l <= o + c))
            for (let r = -1; r <= 7; r++)
              a + r <= -1 ||
                l <= a + r ||
                ((c >= 0 && c <= 6 && (r === 0 || r === 6)) || (r >= 0 && r <= 6 && (c === 0 || c === 6)) || (c >= 2 && c <= 4 && r >= 2 && r <= 4)
                  ? e.set(o + c, a + r, !0, !0)
                  : e.set(o + c, a + r, !1, !0));
      }
    }
    function id(e) {
      let t = e.size;
      for (let l = 8; l < t - 8; l++) {
        let n = l % 2 === 0;
        e.set(l, 6, n, !0), e.set(6, l, n, !0);
      }
    }
    function od(e, t) {
      let l = qo.getPositions(t);
      for (let n = 0; n < l.length; n++) {
        let i = l[n][0],
          o = l[n][1];
        for (let a = -2; a <= 2; a++)
          for (let c = -2; c <= 2; c++)
            a === -2 || a === 2 || c === -2 || c === 2 || (a === 0 && c === 0) ? e.set(i + a, o + c, !0, !0) : e.set(i + a, o + c, !1, !0);
      }
    }
    function dd(e, t) {
      let l = e.size,
        n = Ye.getEncodedBits(t),
        i,
        o,
        a;
      for (let c = 0; c < 18; c++) (i = Math.floor(c / 3)), (o = (c % 3) + l - 8 - 3), (a = ((n >> c) & 1) === 1), e.set(i, o, a, !0), e.set(o, i, a, !0);
    }
    function Fl(e, t, l) {
      let n = e.size,
        i = ed.getEncodedBits(t, l),
        o,
        a;
      for (o = 0; o < 15; o++)
        (a = ((i >> o) & 1) === 1),
          o < 6 ? e.set(o, 8, a, !0) : o < 8 ? e.set(o + 1, 8, a, !0) : e.set(n - 15 + o, 8, a, !0),
          o < 8 ? e.set(8, n - o - 1, a, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, a, !0) : e.set(8, 15 - o - 1, a, !0);
      e.set(n - 8, 8, 1, !0);
    }
    function ad(e, t) {
      let l = e.size,
        n = -1,
        i = l - 1,
        o = 7,
        a = 0;
      for (let c = l - 1; c > 0; c -= 2)
        for (c === 6 && c--; ; ) {
          for (let r = 0; r < 2; r++)
            if (!e.isReserved(i, c - r)) {
              let b = !1;
              a < t.length && (b = ((t[a] >>> o) & 1) === 1), e.set(i, c - r, b), o--, o === -1 && (a++, (o = 7));
            }
          if (((i += n), i < 0 || l <= i)) {
            (i -= n), (n = -n);
            break;
          }
        }
    }
    function cd(e, t, l) {
      let n = new _o();
      l.forEach(function (r) {
        n.put(r.mode.bit, 4), n.put(r.getLength(), ld.getCharCountIndicator(r.mode, e)), r.write(n);
      });
      let i = Je.getSymbolTotalCodewords(e),
        o = pl.getTotalCodewordsCount(e, t),
        a = (i - o) * 8;
      for (n.getLengthInBits() + 4 <= a && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
      let c = (a - n.getLengthInBits()) / 8;
      for (let r = 0; r < c; r++) n.put(r % 2 ? 17 : 236, 8);
      return rd(n, e, t);
    }
    function rd(e, t, l) {
      let n = Je.getSymbolTotalCodewords(t),
        i = pl.getTotalCodewordsCount(t, l),
        o = n - i,
        a = pl.getBlocksCount(t, l),
        c = n % a,
        r = a - c,
        b = Math.floor(n / a),
        Z = Math.floor(o / a),
        W = Z + 1,
        u = b - Z,
        N = new td(u),
        A = 0,
        y = new Array(a),
        w = new Array(a),
        bt = 0,
        Ut = new Uint8Array(e.buffer);
      for (let tt = 0; tt < a; tt++) {
        let h = tt < r ? Z : W;
        (y[tt] = Ut.slice(A, A + h)), (w[tt] = N.encode(y[tt])), (A += h), (bt = Math.max(bt, h));
      }
      let S = new Uint8Array(n),
        f = 0,
        v,
        E;
      for (v = 0; v < bt; v++) for (E = 0; E < a; E++) v < y[E].length && (S[f++] = y[E][v]);
      for (v = 0; v < u; v++) for (E = 0; E < a; E++) S[f++] = w[E][v];
      return S;
    }
    function bd(e, t, l, n) {
      let i;
      if (Array.isArray(e)) i = Ul.fromArray(e);
      else if (typeof e == "string") {
        let b = t;
        if (!b) {
          let Z = Ul.rawSplit(e);
          b = Ye.getBestVersionForData(Z, l);
        }
        i = Ul.fromString(e, b || 40);
      } else throw new Error("Invalid data");
      let o = Ye.getBestVersionForData(i, l);
      if (!o) throw new Error("The amount of data is too big to be stored in a QR Code");
      if (!t) t = o;
      else if (t < o)
        throw new Error(
          `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
            o +
            `.
`
        );
      let a = cd(t, l, i),
        c = Je.getSymbolSize(t),
        r = new Ko(c);
      return (
        nd(r, t),
        id(r),
        od(r, t),
        Fl(r, l, 0),
        t >= 7 && dd(r, t),
        ad(r, a),
        isNaN(n) && (n = gl.getBestMask(r, Fl.bind(null, r, l))),
        gl.applyMask(n, r),
        Fl(r, l, n),
        { modules: r, version: t, errorCorrectionLevel: l, maskPattern: n, segments: i }
      );
    }
    Gi.create = function (t, l) {
      if (typeof t == "undefined" || t === "") throw new Error("No input text");
      let n = ul.M,
        i,
        o;
      return (
        typeof l != "undefined" &&
          ((n = ul.from(l.errorCorrectionLevel, ul.M)),
          (i = Ye.from(l.version)),
          (o = gl.from(l.maskPattern)),
          l.toSJISFunc && Je.setToSJISFunction(l.toSJISFunc)),
        bd(t, i, n, o)
      );
    };
  });
  var Il = T((Ct) => {
    function Wi(e) {
      if ((typeof e == "number" && (e = e.toString()), typeof e != "string")) throw new Error("Color should be defined as hex string");
      let t = e.slice().replace("#", "").split("");
      if (t.length < 3 || t.length === 5 || t.length > 8) throw new Error("Invalid hex color: " + e);
      (t.length === 3 || t.length === 4) &&
        (t = Array.prototype.concat.apply(
          [],
          t.map(function (n) {
            return [n, n];
          })
        )),
        t.length === 6 && t.push("F", "F");
      let l = parseInt(t.join(""), 16);
      return { r: (l >> 24) & 255, g: (l >> 16) & 255, b: (l >> 8) & 255, a: l & 255, hex: "#" + t.slice(0, 6).join("") };
    }
    Ct.getOptions = function (t) {
      t || (t = {}), t.color || (t.color = {});
      let l = typeof t.margin == "undefined" || t.margin === null || t.margin < 0 ? 4 : t.margin,
        n = t.width && t.width >= 21 ? t.width : void 0,
        i = t.scale || 4;
      return {
        width: n,
        scale: n ? 4 : i,
        margin: l,
        color: { dark: Wi(t.color.dark || "#000000ff"), light: Wi(t.color.light || "#ffffffff") },
        type: t.type,
        rendererOpts: t.rendererOpts || {},
      };
    };
    Ct.getScale = function (t, l) {
      return l.width && l.width >= t + l.margin * 2 ? l.width / (t + l.margin * 2) : l.scale;
    };
    Ct.getImageWidth = function (t, l) {
      let n = Ct.getScale(t, l);
      return Math.floor((t + l.margin * 2) * n);
    };
    Ct.qrToImageData = function (t, l, n) {
      let i = l.modules.size,
        o = l.modules.data,
        a = Ct.getScale(i, n),
        c = Math.floor((i + n.margin * 2) * a),
        r = n.margin * a,
        b = [n.color.light, n.color.dark];
      for (let Z = 0; Z < c; Z++)
        for (let W = 0; W < c; W++) {
          let u = (Z * c + W) * 4,
            N = n.color.light;
          if (Z >= r && W >= r && Z < c - r && W < c - r) {
            let A = Math.floor((Z - r) / a),
              y = Math.floor((W - r) / a);
            N = b[o[A * i + y] ? 1 : 0];
          }
          (t[u++] = N.r), (t[u++] = N.g), (t[u++] = N.b), (t[u] = N.a);
        }
    };
  });
  var ui = T((xe) => {
    var hl = Il();
    function Vd(e, t, l) {
      e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), (t.height = l), (t.width = l), (t.style.height = l + "px"), (t.style.width = l + "px");
    }
    function Zd() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    xe.render = function (t, l, n) {
      let i = n,
        o = l;
      typeof i == "undefined" && (!l || !l.getContext) && ((i = l), (l = void 0)), l || (o = Zd()), (i = hl.getOptions(i));
      let a = hl.getImageWidth(t.modules.size, i),
        c = o.getContext("2d"),
        r = c.createImageData(a, a);
      return hl.qrToImageData(r.data, t, i), Vd(c, o, a), c.putImageData(r, 0, 0), o;
    };
    xe.renderToDataURL = function (t, l, n) {
      let i = n;
      typeof i == "undefined" && (!l || !l.getContext) && ((i = l), (l = void 0)), i || (i = {});
      let o = xe.render(t, l, i),
        a = i.type || "image/png",
        c = i.rendererOpts || {};
      return o.toDataURL(a, c.quality);
    };
  });
  var gi = T((Fi) => {
    var sd = Il();
    function Ui(e, t) {
      let l = e.a / 255,
        n = t + '="' + e.hex + '"';
      return l < 1 ? n + " " + t + '-opacity="' + l.toFixed(2).slice(1) + '"' : n;
    }
    function Bl(e, t, l) {
      let n = e + t;
      return typeof l != "undefined" && (n += " " + l), n;
    }
    function Rd(e, t, l) {
      let n = "",
        i = 0,
        o = !1,
        a = 0;
      for (let c = 0; c < e.length; c++) {
        let r = Math.floor(c % t),
          b = Math.floor(c / t);
        !r && !o && (o = !0),
          e[c]
            ? (a++,
              (c > 0 && r > 0 && e[c - 1]) || ((n += o ? Bl("M", r + l, 0.5 + b + l) : Bl("m", i, 0)), (i = 0), (o = !1)),
              (r + 1 < t && e[c + 1]) || ((n += Bl("h", a)), (a = 0)))
            : i++;
      }
      return n;
    }
    Fi.render = function (t, l, n) {
      let i = sd.getOptions(l),
        o = t.modules.size,
        a = t.modules.data,
        c = o + i.margin * 2,
        r = i.color.light.a ? "<path " + Ui(i.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
        b = "<path " + Ui(i.color.dark, "stroke") + ' d="' + Rd(a, o, i.margin) + '"/>',
        Z = 'viewBox="0 0 ' + c + " " + c + '"',
        u =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") +
          Z +
          ' shape-rendering="crispEdges">' +
          r +
          b +
          `</svg>
`;
      return typeof n == "function" && n(null, u), u;
    };
  });
  var Ii = T((be) => {
    var Gd = In(),
      Nl = mi(),
      pi = ui(),
      md = gi();
    function Xl(e, t, l, n, i) {
      let o = [].slice.call(arguments, 1),
        a = o.length,
        c = typeof o[a - 1] == "function";
      if (!c && !Gd()) throw new Error("Callback required as last argument");
      if (c) {
        if (a < 2) throw new Error("Too few arguments provided");
        a === 2
          ? ((i = l), (l = t), (t = n = void 0))
          : a === 3 && (t.getContext && typeof i == "undefined" ? ((i = n), (n = void 0)) : ((i = n), (n = l), (l = t), (t = void 0)));
      } else {
        if (a < 1) throw new Error("Too few arguments provided");
        return (
          a === 1 ? ((l = t), (t = n = void 0)) : a === 2 && !t.getContext && ((n = l), (l = t), (t = void 0)),
          new Promise(function (r, b) {
            try {
              let Z = Nl.create(l, n);
              r(e(Z, t, n));
            } catch (Z) {
              b(Z);
            }
          })
        );
      }
      try {
        let r = Nl.create(l, n);
        i(null, e(r, t, n));
      } catch (r) {
        i(r);
      }
    }
    be.create = Nl.create;
    be.toCanvas = Xl.bind(null, pi.render);
    be.toDataURL = Xl.bind(null, pi.renderToDataURL);
    be.toString = Xl.bind(null, function (e, t, l) {
      return md.render(e, l);
    });
  });
  var hi = T((aa, Tl) => {
    var Ql = (function (e) {
      "use strict";
      var t = Object.prototype,
        l = t.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (s, V, G) {
            s[V] = G.value;
          },
        i,
        o = typeof Symbol == "function" ? Symbol : {},
        a = o.iterator || "@@iterator",
        c = o.asyncIterator || "@@asyncIterator",
        r = o.toStringTag || "@@toStringTag";
      function b(s, V, G) {
        return Object.defineProperty(s, V, { value: G, enumerable: !0, configurable: !0, writable: !0 }), s[V];
      }
      try {
        b({}, "");
      } catch (s) {
        b = function (V, G, B) {
          return (V[G] = B);
        };
      }
      function Z(s, V, G, B) {
        var p = V && V.prototype instanceof bt ? V : bt,
          Y = Object.create(p.prototype),
          L = new Xt(B || []);
        return n(Y, "_invoke", { value: Vt(s, G, L) }), Y;
      }
      e.wrap = Z;
      function W(s, V, G) {
        try {
          return { type: "normal", arg: s.call(V, G) };
        } catch (B) {
          return { type: "throw", arg: B };
        }
      }
      var u = "suspendedStart",
        N = "suspendedYield",
        A = "executing",
        y = "completed",
        w = {};
      function bt() {}
      function Ut() {}
      function S() {}
      var f = {};
      b(f, a, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        E = v && v(v(Lt([])));
      E && E !== t && l.call(E, a) && (f = E);
      var tt = (S.prototype = bt.prototype = Object.create(f));
      (Ut.prototype = S),
        n(tt, "constructor", { value: S, configurable: !0 }),
        n(S, "constructor", { value: Ut, configurable: !0 }),
        (Ut.displayName = b(S, r, "GeneratorFunction"));
      function h(s) {
        ["next", "throw", "return"].forEach(function (V) {
          b(s, V, function (G) {
            return this._invoke(V, G);
          });
        });
      }
      (e.isGeneratorFunction = function (s) {
        var V = typeof s == "function" && s.constructor;
        return V ? V === Ut || (V.displayName || V.name) === "GeneratorFunction" : !1;
      }),
        (e.mark = function (s) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : ((s.__proto__ = S), b(s, r, "GeneratorFunction")), (s.prototype = Object.create(tt)), s;
        }),
        (e.awrap = function (s) {
          return { __await: s };
        });
      function kt(s, V) {
        function G(Y, L, P, nt) {
          var _ = W(s[Y], s, L);
          if (_.type === "throw") nt(_.arg);
          else {
            var _t = _.arg,
              Ft = _t.value;
            return Ft && typeof Ft == "object" && l.call(Ft, "__await")
              ? V.resolve(Ft.__await).then(
                  function (Zt) {
                    G("next", Zt, P, nt);
                  },
                  function (Zt) {
                    G("throw", Zt, P, nt);
                  }
                )
              : V.resolve(Ft).then(
                  function (Zt) {
                    (_t.value = Zt), P(_t);
                  },
                  function (Zt) {
                    return G("throw", Zt, P, nt);
                  }
                );
          }
        }
        var B;
        function p(Y, L) {
          function P() {
            return new V(function (nt, _) {
              G(Y, L, nt, _);
            });
          }
          return (B = B ? B.then(P, P) : P());
        }
        n(this, "_invoke", { value: p });
      }
      h(kt.prototype),
        b(kt.prototype, c, function () {
          return this;
        }),
        (e.AsyncIterator = kt),
        (e.async = function (s, V, G, B, p) {
          p === void 0 && (p = Promise);
          var Y = new kt(Z(s, V, G, B), p);
          return e.isGeneratorFunction(V)
            ? Y
            : Y.next().then(function (L) {
                return L.done ? L.value : Y.next();
              });
        });
      function Vt(s, V, G) {
        var B = u;
        return function (Y, L) {
          if (B === A) throw new Error("Generator is already running");
          if (B === y) {
            if (Y === "throw") throw L;
            return Pt();
          }
          for (G.method = Y, G.arg = L; ; ) {
            var P = G.delegate;
            if (P) {
              var nt = Bt(P, G);
              if (nt) {
                if (nt === w) continue;
                return nt;
              }
            }
            if (G.method === "next") G.sent = G._sent = G.arg;
            else if (G.method === "throw") {
              if (B === u) throw ((B = y), G.arg);
              G.dispatchException(G.arg);
            } else G.method === "return" && G.abrupt("return", G.arg);
            B = A;
            var _ = W(s, V, G);
            if (_.type === "normal") {
              if (((B = G.done ? y : N), _.arg === w)) continue;
              return { value: _.arg, done: G.done };
            } else _.type === "throw" && ((B = y), (G.method = "throw"), (G.arg = _.arg));
          }
        };
      }
      function Bt(s, V) {
        var G = V.method,
          B = s.iterator[G];
        if (B === i)
          return (
            (V.delegate = null),
            (G === "throw" && s.iterator.return && ((V.method = "return"), (V.arg = i), Bt(s, V), V.method === "throw")) ||
              (G !== "return" && ((V.method = "throw"), (V.arg = new TypeError("The iterator does not provide a '" + G + "' method")))),
            w
          );
        var p = W(B, s.iterator, V.arg);
        if (p.type === "throw") return (V.method = "throw"), (V.arg = p.arg), (V.delegate = null), w;
        var Y = p.arg;
        if (!Y) return (V.method = "throw"), (V.arg = new TypeError("iterator result is not an object")), (V.delegate = null), w;
        if (Y.done) (V[s.resultName] = Y.value), (V.next = s.nextLoc), V.method !== "return" && ((V.method = "next"), (V.arg = i));
        else return Y;
        return (V.delegate = null), w;
      }
      h(tt),
        b(tt, r, "Generator"),
        b(tt, a, function () {
          return this;
        }),
        b(tt, "toString", function () {
          return "[object Generator]";
        });
      function Re(s) {
        var V = { tryLoc: s[0] };
        1 in s && (V.catchLoc = s[1]), 2 in s && ((V.finallyLoc = s[2]), (V.afterLoc = s[3])), this.tryEntries.push(V);
      }
      function Nt(s) {
        var V = s.completion || {};
        (V.type = "normal"), delete V.arg, (s.completion = V);
      }
      function Xt(s) {
        (this.tryEntries = [{ tryLoc: "root" }]), s.forEach(Re, this), this.reset(!0);
      }
      e.keys = function (s) {
        var V = Object(s),
          G = [];
        for (var B in V) G.push(B);
        return (
          G.reverse(),
          function p() {
            for (; G.length; ) {
              var Y = G.pop();
              if (Y in V) return (p.value = Y), (p.done = !1), p;
            }
            return (p.done = !0), p;
          }
        );
      };
      function Lt(s) {
        if (s != null) {
          var V = s[a];
          if (V) return V.call(s);
          if (typeof s.next == "function") return s;
          if (!isNaN(s.length)) {
            var G = -1,
              B = function p() {
                for (; ++G < s.length; ) if (l.call(s, G)) return (p.value = s[G]), (p.done = !1), p;
                return (p.value = i), (p.done = !0), p;
              };
            return (B.next = B);
          }
        }
        throw new TypeError(typeof s + " is not iterable");
      }
      e.values = Lt;
      function Pt() {
        return { value: i, done: !0 };
      }
      return (
        (Xt.prototype = {
          constructor: Xt,
          reset: function (s) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = i),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = i),
              this.tryEntries.forEach(Nt),
              !s)
            )
              for (var V in this) V.charAt(0) === "t" && l.call(this, V) && !isNaN(+V.slice(1)) && (this[V] = i);
          },
          stop: function () {
            this.done = !0;
            var s = this.tryEntries[0],
              V = s.completion;
            if (V.type === "throw") throw V.arg;
            return this.rval;
          },
          dispatchException: function (s) {
            if (this.done) throw s;
            var V = this;
            function G(nt, _) {
              return (Y.type = "throw"), (Y.arg = s), (V.next = nt), _ && ((V.method = "next"), (V.arg = i)), !!_;
            }
            for (var B = this.tryEntries.length - 1; B >= 0; --B) {
              var p = this.tryEntries[B],
                Y = p.completion;
              if (p.tryLoc === "root") return G("end");
              if (p.tryLoc <= this.prev) {
                var L = l.call(p, "catchLoc"),
                  P = l.call(p, "finallyLoc");
                if (L && P) {
                  if (this.prev < p.catchLoc) return G(p.catchLoc, !0);
                  if (this.prev < p.finallyLoc) return G(p.finallyLoc);
                } else if (L) {
                  if (this.prev < p.catchLoc) return G(p.catchLoc, !0);
                } else if (P) {
                  if (this.prev < p.finallyLoc) return G(p.finallyLoc);
                } else throw new Error("try statement without catch or finally");
              }
            }
          },
          abrupt: function (s, V) {
            for (var G = this.tryEntries.length - 1; G >= 0; --G) {
              var B = this.tryEntries[G];
              if (B.tryLoc <= this.prev && l.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
                var p = B;
                break;
              }
            }
            p && (s === "break" || s === "continue") && p.tryLoc <= V && V <= p.finallyLoc && (p = null);
            var Y = p ? p.completion : {};
            return (Y.type = s), (Y.arg = V), p ? ((this.method = "next"), (this.next = p.finallyLoc), w) : this.complete(Y);
          },
          complete: function (s, V) {
            if (s.type === "throw") throw s.arg;
            return (
              s.type === "break" || s.type === "continue"
                ? (this.next = s.arg)
                : s.type === "return"
                ? ((this.rval = this.arg = s.arg), (this.method = "return"), (this.next = "end"))
                : s.type === "normal" && V && (this.next = V),
              w
            );
          },
          finish: function (s) {
            for (var V = this.tryEntries.length - 1; V >= 0; --V) {
              var G = this.tryEntries[V];
              if (G.finallyLoc === s) return this.complete(G.completion, G.afterLoc), Nt(G), w;
            }
          },
          catch: function (s) {
            for (var V = this.tryEntries.length - 1; V >= 0; --V) {
              var G = this.tryEntries[V];
              if (G.tryLoc === s) {
                var B = G.completion;
                if (B.type === "throw") {
                  var p = B.arg;
                  Nt(G);
                }
                return p;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (s, V, G) {
            return (this.delegate = { iterator: Lt(s), resultName: V, nextLoc: G }), this.method === "next" && (this.arg = i), w;
          },
        }),
        e
      );
    })(typeof Tl == "object" ? Tl.exports : {});
    try {
      regeneratorRuntime = Ql;
    } catch (e) {
      typeof globalThis == "object" ? (globalThis.regeneratorRuntime = Ql) : Function("r", "regeneratorRuntime = r")(Ql);
    }
  });
  var Bi = T((ca, Ee) => {
    (function () {
      "use strict";
      var e = (function () {
        function t() {}
        t.prototype = Object.create(null);
        function l(Z, W) {
          for (var u = W.length, N = 0; N < u; ++N) r(Z, W[N]);
        }
        var n = {}.hasOwnProperty;
        function i(Z, W) {
          Z[W] = !0;
        }
        function o(Z, W) {
          if (W.toString !== Object.prototype.toString && !W.toString.toString().includes("[native code]")) {
            Z[W.toString()] = !0;
            return;
          }
          for (var u in W) n.call(W, u) && (Z[u] = !!W[u]);
        }
        var a = /\s+/;
        function c(Z, W) {
          for (var u = W.split(a), N = u.length, A = 0; A < N; ++A) Z[u[A]] = !0;
        }
        function r(Z, W) {
          if (W) {
            var u = typeof W;
            u === "string" ? c(Z, W) : Array.isArray(W) ? l(Z, W) : u === "object" ? o(Z, W) : u === "number" && i(Z, W);
          }
        }
        function b() {
          for (var Z = arguments.length, W = Array(Z), u = 0; u < Z; u++) W[u] = arguments[u];
          var N = new t();
          l(N, W);
          var A = [];
          for (var y in N) N[y] && A.push(y);
          return A.join(" ");
        }
        return b;
      })();
      typeof Ee != "undefined" && Ee.exports ? ((e.default = e), (Ee.exports = e)) : (window.classNames = e);
    })();
  });
  var Xi = T((Ni, Ce) => {
    (function (e) {
      var t = {
          browser: [
            [/msie ([\.\_\d]+)/, "ie"],
            [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
            [/firefox\/([\.\_\d]+)/, "firefox"],
            [/chrome\/([\.\_\d]+)/, "chrome"],
            [/version\/([\.\_\d]+).*?safari/, "safari"],
            [/mobile safari ([\.\_\d]+)/, "safari"],
            [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
            [/crios\/([\.\_\d]+).*?safari/, "chrome"],
            [/opera/, "opera"],
            [/opera\/([\.\_\d]+)/, "opera"],
            [/opera ([\.\_\d]+)/, "opera"],
            [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
            [/opios\/([a-z\.\_\d]+)/, "opera"],
            [/blackberry/, "blackberry"],
            [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
            [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
            [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
            [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
            [/edge\/([\.\d]+)/, "edge"],
          ],
          os: [
            [/linux ()([a-z\.\_\d]+)/, "linux"],
            [/mac os x/, "macos"],
            [/mac os x.*?([\.\_\d]+)/, "macos"],
            [/os ([\.\_\d]+) like mac os/, "ios"],
            [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
            [/android/, "android"],
            [/android ([a-z\.\_\d]+);/, "android"],
            [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
            [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
            [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
            [/windows mobile/, "windows.mobile"],
            [/blackberry/, "blackberryos"],
            [/bb\d+/, "blackberryos"],
            [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"],
          ],
          device: [
            [/ipad/, "ipad"],
            [/iphone/, "iphone"],
            [/lumia/, "lumia"],
            [/htc/, "htc"],
            [/nexus/, "nexus"],
            [/galaxy nexus/, "galaxy.nexus"],
            [/nokia/, "nokia"],
            [/ gt\-/, "galaxy"],
            [/ sm\-/, "galaxy"],
            [/xbox/, "xbox"],
            [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"],
          ],
        },
        l = "Unknown",
        n = Object.keys(t);
      function i() {
        var c = this;
        n.forEach(function (r) {
          c[r] = { name: l, version: [], versionString: l };
        });
      }
      function o(c, r, b) {
        t[r].forEach(function (Z) {
          var W = Z[0],
            u = Z[1],
            N = b.match(W);
          N &&
            ((c[r].name = u),
            N[2]
              ? ((c[r].versionString = N[2]), (c[r].version = []))
              : N[1]
              ? ((c[r].versionString = N[1].replace(/_/g, ".")), (c[r].version = a(N[1])))
              : ((c[r].versionString = l), (c[r].version = [])));
        });
      }
      function a(c) {
        return c.split(/[\._]/).map(function (r) {
          return parseInt(r);
        });
      }
      (i.prototype.sniff = function (c) {
        var r = this,
          b = typeof window != "undefined",
          Z = b ? navigator.userAgent : "",
          W = (c || Z).toLowerCase();
        return (
          n.forEach(function (u) {
            o(r, u, W);
          }),
          this
        );
      }),
        typeof Ce != "undefined" && Ce.exports ? (Ce.exports = i) : ((e.Sniffr = new i()), e.Sniffr.sniff(navigator.userAgent));
    })(Ni);
  });
  function dt(e, t = null) {
    let n = po(t).querySelectorAll(e);
    return Array.from(n);
  }
  function M(e, t = null) {
    let l = dt(e, t);
    return l.length === 0 ? !1 : l[0];
  }
  function po(e) {
    return e || (window.__shadowRoot ? window.__shadowRoot.querySelector("article") : document);
  }
  var lt = {
    footer: M("#StandardFooter"),
    topLink: M("[id$='-footerTopLink']"),
    logo: M("#FooterLogo"),
    logoLink: M("[id$='-footer_shorthand_link']"),
    lower: document.createElement("div"),
    lowerInner: document.createElement("div"),
  };
  function tl() {
    lt.footer.classList.add("Prime3"),
      lt.logo.setAttribute("src", lt.logo.getAttribute("src").replace("black", "white")),
      lt.topLink.classList.add("Prime3"),
      lt.logoLink.classList.add("Prime3"),
      (lt.lower.id = "prime3FooterLower"),
      (lt.lower.className = "prime3FooterLower"),
      (lt.lowerInner.id = "prime3FooterLowerInner"),
      (lt.lowerInner.className = "prime3FooterLowerInner");
    let t = [
      "<div>Join the world's leading storytelling teams at Shorthand.</div>",
      "<div><a href=" + lt.logoLink.getAttribute("href") + "><u>TRY IT FOR <strong>FREE</strong></u></a></div>",
      "<div>No code, no credit card, & no commitment required.</div>",
    ];
    (lt.lowerInner.innerHTML = "<div class='Layout prime3-items'>" + t.map((l) => l).join("") + "</div>"),
      lt.footer.after(lt.lower),
      (lt.lower.innerHTML = lt.lowerInner.outerHTML);
  }
  var ki = Yt(gn()),
    Me = Yt(ge()),
    Mi = Yt(Ii()),
    Ga = Yt(hi());
  var Wd = Yt(Bi());
  var ud = Xi(),
    Qi = ["android", "ios", "firefoxos", "windows.phone", "windows.mobile", "blackberryos"];
  var Yl = null;
  function Jl() {
    if (Yl === null) {
      let e = new ud();
      e.sniff(navigator.userAgent),
        (Yl = {
          isMobile: Qi.includes(e.os.name),
          isDesktop: !Qi.includes(e.os.name),
          isTablet: !1,
          isiPhone: e.device.name === "iphone",
          isiPad: e.device.name === "ipad",
          isAndroid: e.os.name === "android",
          isiOS: e.os.name === "ios",
          isiOS10: e.os.name === "ios" && e.os.version[0] === 10,
          isMac: e.os.name === "macos",
          isWindows: e.os.name === "windows",
          isIE: e.browser.name === "ie",
          isEdge: e.browser.name === "edge",
          isChrome: e.browser.name === "chrome",
          isSafari: e.browser.name === "safari",
          isFirefox: e.browser.name === "firefox",
          isOpera: e.browser.name === "opera",
          isBot: /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
          isCypress: window.Cypress,
        });
    }
    return Yl;
  }
  var xl = Yt(ge());
  function I(e, t) {
    (Array.isArray(e) ? e : [e]).forEach((n) => {
      xl.default.mutate(() => {
        n.setAttribute("style", "display: " + t);
      });
    });
  }
  function ut(e) {
    (Array.isArray(e) ? e : [e]).forEach((l) => {
      xl.default.mutate(() => {
        l.parentNode.removeChild(l);
      });
    });
  }
  var Ti = Yt(ge());
  function ke(e, t) {
    let l = e.clientHeight;
    (e.style.transition = "all 0.5s ease-in-out"),
      Ti.default.mutate(() => {
        t === "out"
          ? ((e.style.bottom = `-${l}px`), (e.style.opacity = "0"), (e.style.zIndex = "-1"))
          : ((e.style.zIndex = "9999"), (e.style.bottom = "0px"), (e.style.opacity = "1"));
      });
  }
  function kl() {
    let e = dt("[id$='-footer_shorthand_link']");
    if ((e && gd(e), m.footer && Cl)) {
      ut(m.closeButton),
        ut(m.footerContents),
        ut(m.footerTitles),
        ut(m.interactivePanels),
        ut(m.mobileHeaders),
        ut(m.mobileTitle),
        ut(m.openButton),
        ut(m.openMessage),
        I(m.upper, "block"),
        m.openMessageContainer.classList.add("PreviewFooter--center-horizontal"),
        I(m.upperInner, "flex"),
        (m.footer.style.position = "static");
      return;
    }
    m.footer &&
      !Cl &&
      (m.mobileTitle.forEach((t, l) => {
        Id(m.mobileTitle[l], m.footerContents[l], m.footerClose[l]);
      }),
      Yi(m.openButton),
      Yi(m.closeButton),
      Xd(),
      hd(),
      se(),
      pd(),
      window.addEventListener("scroll", Si, { passive: !0 }));
  }
  var El = Jl().isMobile,
    { isIE: Ud, isEdge: Fd } = Jl(),
    Cl = Ud || Fd,
    ct = !1,
    Ze = Math.max(document.body.offsetWidth, window.innerWidth),
    Ve = Ze <= 926 || El,
    m = {
      closeButton: dt(".PreviewFooter--close-button"),
      footer: M(".PreviewFooter"),
      footerClose: dt(".PreviewFooter--mobile-close"),
      footerContents: dt("[data-PreviewFooter--item]"),
      footerOuter: M(".PreviewFooter--outer"),
      footerTitles: dt(".PreviewFooter--col-title"),
      interactivePanels: M(".PreviewFooter--interactive-panels"),
      mailtoLink: M(".PreviewFooter--mailto"),
      mobileHeaders: dt(".PreviewFooter--mobile-header"),
      mobileTitle: dt(".PreviewFooter--col-title-mobile"),
      openButton: M(".PreviewFooter--open-button"),
      openMessage: M(".PreviewFooter--message"),
      openMessageContainer: M(".PreviewFooter--message-container"),
      upper: M(".PreviewFooter--upper"),
      upperInner: M(".PreviewFooter--upper-inner"),
    };
  function gd(e) {
    return (Array.isArray(e) ? e : [e]).forEach((l) => {
      l.setAttribute("href", l.getAttribute("href").replace("__host__", window.location.hostname));
    });
  }
  function pd() {
    let e = El ? "orientationchange" : "resize";
    window.addEventListener(
      e,
      () => {
        Me.default.measure(() => {
          (Ze = Math.max(document.body.offsetWidth, window.innerWidth)), (Ve = Ze <= 926 || El), (ct = !1), se();
        });
      },
      { passive: !0 }
    );
  }
  function Si() {
    let e = window.scrollY,
      t = document.body.offsetHeight,
      l = window.innerHeight,
      n = e / (t - l),
      i = Math.round(n * 100);
    if (Cl || window.Cypress) {
      ke(m.footer, "in"), removeEventListener("scroll", Si);
      return;
    }
    !ct && i < 80 && ke(m.footer, "out"), !ct && i >= 80 && ke(m.footer, "in");
  }
  function Yi(e) {
    let t = () => {
      (ct = !ct), se();
    };
    (Array.isArray(e) ? e : [e]).forEach((n) => {
      n.addEventListener(
        "click",
        () => {
          t();
        },
        { passive: !0 }
      );
    });
  }
  var Id = (e, t, l) => {
    e.addEventListener(
      "click",
      () => {
        (ct = !0), se(t);
      },
      { passive: !0 }
    ),
      l.addEventListener(
        "click",
        () => {
          (ct = !1), se(t);
        },
        { passive: !0 }
      );
  };
  function Ji() {
    (m.footer.style.position = "relative"),
      Me.default.measure(() => {
        let e = document.body.offsetHeight;
        Me.default.mutate(() => {
          window.scrollTo({ top: e, behavior: "smooth" });
        });
      });
  }
  function se(e = m.footerContents[0]) {
    switch (!0) {
      case ct && !Ve:
        I(m.openButton, "none"),
          I(m.mobileTitle, "none"),
          I(m.mobileHeaders, "none"),
          Ze > 926 && Ze < 1100 && I(m.openMessageContainer, "none"),
          I(m.footerContents, "block"),
          I(m.openMessage, "block"),
          I(m.closeButton, "block"),
          I(m.footerTitles, "block"),
          I(m.upperInner, "flex"),
          I(m.interactivePanels, "flex"),
          m.openMessageContainer.classList.remove("PreviewFooter--center-horizontal"),
          (m.upper.style.padding = "1em 0"),
          Ji();
        break;
      case !ct && !Ve:
        I(m.mobileTitle, "none"),
          I(m.mobileHeaders, "none"),
          I(m.closeButton, "none"),
          I(m.openMessage, "none"),
          I(m.footerContents, "none"),
          I(m.interactivePanels, "none"),
          I(m.openMessageContainer, "block"),
          I(m.openButton, "flex"),
          I(m.upper, "block"),
          I(m.upperInner, "flex"),
          m.openMessageContainer.classList.add("PreviewFooter--center-horizontal"),
          (m.footer.style.position = "sticky"),
          (m.upper.style.padding = "0.5em 0");
        break;
      case ct && Ve:
        I(m.mobileTitle, "none"),
          I(m.closeButton, "none"),
          I(m.footerTitles, "none"),
          I(m.upperInner, "none"),
          I(m.footerContents, "none"),
          I(e, "block"),
          I(m.mobileHeaders, "flex"),
          I(m.interactivePanels, "flex"),
          (m.upper.style.padding = "1em 0"),
          Ji();
        break;
      case !ct && Ve:
        I(m.openMessage, "none"),
          I(m.openButton, "none"),
          I(m.closeButton, "none"),
          I(m.footerContents, "none"),
          I(m.interactivePanels, "none"),
          I(m.upper, "block"),
          I(m.upperInner, "flex"),
          I(m.mobileTitle, "flex"),
          I(m.mobileHeaders, "flex"),
          I(m.openMessageContainer, "block"),
          (m.footer.style.position = "sticky"),
          (m.upper.style.padding = "0.5em 0"),
          m.openMessageContainer.classList.add("PreviewFooter--center-horizontal");
        break;
    }
  }
  function hd() {
    let e = M("#PreviewFooter--form");
    if (!e) return;
    let t = M("#PreviewFooter--feedbackButton");
    e.addEventListener("submit", Bd);
    let l = e.querySelectorAll("input, textarea");
    l.forEach((n) => {
      n.addEventListener("focus", () => {
        t.classList.add("share-btn-active");
      });
    }),
      l.forEach((n) => {
        n.addEventListener("blur", () => {
          t.classList.remove("share-btn-active");
        });
      });
  }
  var xi = {
      feedback: function (e) {
        if (!(e.length >= 4)) return "feedback";
      },
      name: function (e) {
        if (!e.match(new RegExp("\\b([A-Z\\u{00C0}\\-\\u{00FF}][-,a-z. ']+[ ]*)+", "ims"))) return "name";
      },
      email: function (e) {
        if (!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/))
          return "email";
      },
    },
    Ei = {
      success: function (e) {
        e.reset();
        let t = M("#feedback-success");
        I(e, "none"),
          I(t, "block"),
          setTimeout(() => {
            I(t, "none"), I(e, "block");
          }, 4e3);
      },
      error: function (e, t) {
        function l(i) {
          (n = M(`${i}`)),
            I(n, "block"),
            setTimeout(() => {
              I(n, "none");
            }, 4e3);
        }
        if (t.error === "feedback") {
          l("#feedback-error");
          return;
        }
        if (t.error === "name") {
          l("#name-error");
          return;
        }
        if (t.error === "email") {
          l("#email-error");
          return;
        }
        let n = M("#generic-error");
        I(e, "none"),
          (n.innerText = t),
          I(n, "block"),
          setTimeout(() => {
            I(n, "none"), I(e, "block");
          }, 4e3),
          console.error(t);
      },
    },
    Bd = (e) => {
      e.preventDefault();
      let t = m.footer.getAttribute("data-story"),
        l = e.target,
        n = new FormData(l),
        i = {};
      n.forEach((a, c) => {
        i[c] = ki.default.sanitize(a);
      });
      let o = Object.keys(xi).reduce((a, c) => {
        let r = xi[c](i[c]);
        return r ? Fn(Un({}, a), { error: r }) : a;
      }, {});
      Object.keys(o).length > 0 && Ei.error(l, o),
        Object.keys(o).length === 0 &&
          Nd(i, t).then(() => {
            Ei.success(l);
          });
    };
  function Nd(e, t) {
    return fetch(`/${t}/feedback`, { method: "POST", body: JSON.stringify(e), headers: { "Content-Type": "application/json" } }).then((l) => {
      if (!l.ok) throw new Error("Something went wrong, please try again.");
    });
  }
  function Ci({ mailtoEmail: e, previewURL: t, title: l }, n = m.mailtoLink) {
    n.setAttribute(
      "href",
      `mailto:${e}?subject=${encodeURIComponent("Shorthand story for review - ")}${l}&body=${encodeURIComponent(
        "Hello, here's a link to an unpublished (draft) copy of a Shorthand story for the purposes of review:"
      )}%0D%0A%0D%0A${t}%0D%0A%0D%0A${encodeURIComponent(
        "This link is for review only, and should not be promoted or shared. The story at this address may still be actively edited, extensively changed, or removed."
      )}`
    ),
      n.setAttribute("target", "_blank");
  }
  function Xd() {
    let e = M(".mailtoForm"),
      t = new FormData(e),
      l = { mailtoEmail: "", previewURL: document.location, title: "" };
    t.forEach((a, c) => {
      l[c] = a;
    }),
      l.title === "" && (l.title = "A Shorthand Story"),
      Ci(l);
    let n = M("#mailtoEmail"),
      i = M("#mailtoButton");
    n.addEventListener("focus", () => {
      i.classList.add("share-btn-active");
    }),
      n.addEventListener("blur", function (a) {
        (l.mailtoEmail = a.target.value), Ci(l), i.classList.remove("share-btn-active");
      });
    let o = document.querySelector("#qr-code");
    o && Mi.default.toCanvas(o, l.previewURL.toString(), { margin: 0, width: 116, color: { dark: "#fff", light: "#353535" } });
  }
  function Ai(e) {
    return (Array.isArray(e) ? e : [e]).forEach((l) => {
      l.setAttribute("href", l.getAttribute("href").replace("__host__", window.location.hostname));
    });
  }
  function Ml() {
    let e = M("#StandardFooter");
    e &&
      e.dataset.footer === "prime3" &&
      fetch("/features.json")
        .then((n) => {
          n.status === 200 &&
            n.json().then((i) => {
              i.prime3 && tl();
            });
        })
        .catch((n) => {
          console.log(n);
        });
    let t = dt("[id$='-footer_shorthand_link']");
    if ((t && Ai(t), dt("#PreviewFooter"))) return kl();
  }
  Ml();
})();
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.1.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.0/LICENSE *)

classnames/dedupe.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "03c014d2-a977-5b0a-ae56-ab73f8dab3ab"));
  } catch (e) {}
})();
//# sourceMappingURL=footer.306778.min.js.map
//# debugId=03c014d2-a977-5b0a-ae56-ab73f8dab3ab
