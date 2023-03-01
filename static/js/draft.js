!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('react'), require('draft-js'), require('immutable')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'draft-js', 'immutable'], e)
    : 'object' == typeof exports
    ? (exports.reactDraftWysiwyg = e(require('react'), require('draft-js'), require('immutable')))
    : (t.reactDraftWysiwyg = e(t.react, t['draft-js'], t.immutable));
})(window, function (n, o, r) {
  return (
    (a = {}),
    (i.m = c =
      [
        function (t, e, n) {
          t.exports = n(10)();
        },
        function (t, e) {
          t.exports = n;
        },
        function (t, e, n) {
          var o;
          /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
          !(function () {
            'use strict';
            var c = {}.hasOwnProperty;
            function a() {
              for (var t = [], e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                if (n) {
                  var o = typeof n;
                  if ('string' == o || 'number' == o) t.push(n);
                  else if (Array.isArray(n) && n.length) {
                    var r = a.apply(null, n);
                    r && t.push(r);
                  } else if ('object' == o) for (var i in n) c.call(n, i) && n[i] && t.push(i);
                }
              }
              return t.join(' ');
            }
            t.exports
              ? ((a.default = a), (t.exports = a))
              : void 0 ===
                  (o = function () {
                    return a;
                  }.apply(e, [])) || (t.exports = o);
          })();
        },
        function (t, e) {
          t.exports = o;
        },
        function (t, e, n) {
          function r(t) {
            if (a[t]) return a[t].exports;
            var e = (a[t] = { i: t, l: !1, exports: {} });
            return c[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
          }
          var o, i, c, a;
          window,
            (t.exports =
              ((o = n(3)),
              (i = n(5)),
              (a = {}),
              (r.m = c =
                [
                  function (t, e) {
                    t.exports = o;
                  },
                  function (t, e) {
                    t.exports = i;
                  },
                  function (t, e, n) {
                    t.exports = n(3);
                  },
                  function (t, e, n) {
                    'use strict';
                    n.r(e);
                    var M = n(0),
                      i = n(1);
                    function j(t) {
                      var e = t.getSelection(),
                        n = t.getCurrentContent(),
                        o = e.getStartKey(),
                        r = e.getEndKey(),
                        i = n.getBlockMap();
                      return i
                        .toSeq()
                        .skipUntil(function (t, e) {
                          return e === o;
                        })
                        .takeUntil(function (t, e) {
                          return e === r;
                        })
                        .concat([[r, i.get(r)]]);
                    }
                    function u(t) {
                      return j(t).toList();
                    }
                    function l(t) {
                      if (t) return u(t).get(0);
                    }
                    function o(t) {
                      if (t) {
                        var n = l(t),
                          e = t.getCurrentContent().getBlockMap().toSeq().toList(),
                          o = 0;
                        if (
                          (e.forEach(function (t, e) {
                            t.get('key') === n.get('key') && (o = e - 1);
                          }),
                          -1 < o)
                        )
                          return e.get(o);
                      }
                    }
                    function r(t) {
                      return t ? t.getCurrentContent().getBlockMap().toList() : new i.List();
                    }
                    function c(t) {
                      var e = u(t);
                      if (
                        !e.some(function (t) {
                          return t.type !== e.get(0).type;
                        })
                      )
                        return e.get(0).type;
                    }
                    function a(t) {
                      var e = M.RichUtils.tryToRemoveBlockStyle(t);
                      return e ? M.EditorState.push(t, e, 'change-block-type') : t;
                    }
                    function s(t) {
                      var e = '',
                        n = t.getSelection(),
                        o = n.getAnchorOffset(),
                        r = n.getFocusOffset(),
                        i = u(t);
                      if (0 < i.size) {
                        if (n.getIsBackward()) {
                          var c = o;
                          (o = r), (r = c);
                        }
                        for (var a = 0; a < i.size; a += 1) {
                          var l = 0 === a ? o : 0,
                            s = a === i.size - 1 ? r : i.get(a).getText().length;
                          e += i.get(a).getText().slice(l, s);
                        }
                      }
                      return e;
                    }
                    function p(t) {
                      var e = t.getCurrentContent(),
                        n = t.getSelection(),
                        o = M.Modifier.removeRange(e, n, 'forward'),
                        r = o.getSelectionAfter(),
                        i = o.getBlockForKey(r.getStartKey());
                      return (
                        (o = M.Modifier.insertText(
                          o,
                          r,
                          '\n',
                          i.getInlineStyleAt(r.getStartOffset()),
                          null
                        )),
                        M.EditorState.push(t, o, 'insert-fragment')
                      );
                    }
                    function d(t) {
                      var e = M.Modifier.splitBlock(t.getCurrentContent(), t.getSelection());
                      return a(M.EditorState.push(t, e, 'split-block'));
                    }
                    function f(t) {
                      var e = t.getCurrentContent().getBlockMap().toList(),
                        n = t
                          .getSelection()
                          .merge({
                            anchorKey: e.first().get('key'),
                            anchorOffset: 0,
                            focusKey: e.last().get('key'),
                            focusOffset: e.last().getLength(),
                          }),
                        o = M.Modifier.removeRange(t.getCurrentContent(), n, 'forward');
                      return M.EditorState.push(t, o, 'remove-range');
                    }
                    function y(t, e) {
                      var n = M.Modifier.setBlockData(t.getCurrentContent(), t.getSelection(), e);
                      return M.EditorState.push(t, n, 'change-block-data');
                    }
                    function m(t) {
                      var o = new i.Map({}),
                        e = u(t);
                      if (e && 0 < e.size)
                        for (
                          var n = function (t) {
                              var n = e.get(t).getData();
                              if (!n || 0 === n.size) return (o = o.clear()), 'break';
                              if (0 === t) o = n;
                              else if (
                                (o.forEach(function (t, e) {
                                  (n.get(e) && n.get(e) === t) || (o = o.delete(e));
                                }),
                                0 === o.size)
                              )
                                return (o = o.clear()), 'break';
                            },
                            r = 0;
                          r < e.size && 'break' !== n(r);
                          r += 1
                        );
                      return o;
                    }
                    var g = Object(i.Map)({ code: { element: 'pre' } }),
                      b = M.DefaultDraftBlockRenderMap.merge(g);
                    function h(t) {
                      if (t) {
                        var e = t.getType();
                        return 'unordered-list-item' === e || 'ordered-list-item' === e;
                      }
                      return !1;
                    }
                    function v(t, e, n) {
                      var o,
                        r = t.getSelection();
                      o = r.getIsBackward() ? r.getFocusKey() : r.getAnchorKey();
                      var i = t.getCurrentContent(),
                        c = i.getBlockForKey(o),
                        a = c.getType();
                      if ('unordered-list-item' !== a && 'ordered-list-item' !== a) return t;
                      var l = i.getBlockBefore(o);
                      if (!l) return t;
                      if (l.getType() !== a) return t;
                      var s = c.getDepth();
                      if (1 === e && s === n) return t;
                      var u,
                        p,
                        d,
                        f,
                        y,
                        m,
                        g,
                        b = Math.min(l.getDepth() + 1, n),
                        h =
                          ((p = e),
                          (d = b),
                          (f = (u = t).getSelection()),
                          (y = u.getCurrentContent()),
                          (m = y.getBlockMap()),
                          (g = j(u).map(function (t) {
                            var e = t.getDepth() + p;
                            return (e = Math.max(0, Math.min(e, d))), t.set('depth', e);
                          })),
                          (m = m.merge(g)),
                          y.merge({ blockMap: m, selectionBefore: f, selectionAfter: f }));
                      return M.EditorState.push(t, h, 'adjust-depth');
                    }
                    function N(t, e) {
                      var n;
                      return 13 === (n = e).which &&
                        (n.getModifierState('Shift') ||
                          n.getModifierState('Alt') ||
                          n.getModifierState('Control'))
                        ? t.getSelection().isCollapsed()
                          ? M.RichUtils.insertSoftNewline(t)
                          : p(t)
                        : (function (t) {
                            var e = t.getSelection();
                            if (e.isCollapsed()) {
                              var n = t.getCurrentContent(),
                                o = e.getStartKey(),
                                r = n.getBlockForKey(o);
                              if (
                                !h(r) &&
                                'unstyled' !== r.getType() &&
                                r.getLength() === e.getStartOffset()
                              )
                                return d(t);
                              if (h(r) && 0 === r.getLength()) {
                                var i = r.getDepth();
                                if (0 === i) return a(t);
                                if (0 < i) return v(t, -1, i);
                              }
                            }
                          })(t);
                    }
                    function E(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t &&
                          (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                          })),
                          n.push.apply(n, o);
                      }
                      return n;
                    }
                    function S(t, e, n) {
                      return (
                        e in t
                          ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[e] = n),
                        t
                      );
                    }
                    function w(t) {
                      return (w =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                          ? function (t) {
                              return typeof t;
                            }
                          : function (t) {
                              return t &&
                                'function' == typeof Symbol &&
                                t.constructor === Symbol &&
                                t !== Symbol.prototype
                                ? 'symbol'
                                : typeof t;
                            })(t);
                    }
                    function C(t) {
                      var e = t.getSelection();
                      if (e.isCollapsed()) {
                        var n = {},
                          o = t.getCurrentInlineStyle().toList().toJS();
                        if (o)
                          return (
                            [
                              'BOLD',
                              'ITALIC',
                              'UNDERLINE',
                              'STRIKETHROUGH',
                              'CODE',
                              'SUPERSCRIPT',
                              'SUBSCRIPT',
                            ].forEach(function (t) {
                              n[t] = 0 <= o.indexOf(t);
                            }),
                            n
                          );
                      }
                      var c = e.getStartOffset(),
                        a = e.getEndOffset(),
                        l = u(t);
                      if (0 < l.size) {
                        var r = (function () {
                          for (
                            var n = {
                                BOLD: !0,
                                ITALIC: !0,
                                UNDERLINE: !0,
                                STRIKETHROUGH: !0,
                                CODE: !0,
                                SUPERSCRIPT: !0,
                                SUBSCRIPT: !0,
                              },
                              o = 0;
                            o < l.size;
                            o += 1
                          ) {
                            var t = 0 === o ? c : 0,
                              e = o === l.size - 1 ? a : l.get(o).getText().length;
                            t === e && 0 === t ? ((t = 1), (e = 2)) : t === e && --t;
                            for (
                              var r = function (t) {
                                  var e = l.get(o).getInlineStyleAt(t);
                                  [
                                    'BOLD',
                                    'ITALIC',
                                    'UNDERLINE',
                                    'STRIKETHROUGH',
                                    'CODE',
                                    'SUPERSCRIPT',
                                    'SUBSCRIPT',
                                  ].forEach(function (t) {
                                    n[t] = n[t] && e.get(t) === t;
                                  });
                                },
                                i = t;
                              i < e;
                              i += 1
                            )
                              r(i);
                          }
                          return { v: n };
                        })();
                        if ('object' === w(r)) return r.v;
                      }
                      return {};
                    }
                    function L(t) {
                      var e,
                        n = t.getSelection(),
                        o = n.getStartOffset(),
                        r = n.getEndOffset();
                      o === r && 0 === o ? (r = 1) : o === r && --o;
                      for (var i = l(t), c = o; c < r; c += 1) {
                        var a = i.getEntityAt(c);
                        if (!a) {
                          e = void 0;
                          break;
                        }
                        if (c === o) e = a;
                        else if (e !== a) {
                          e = void 0;
                          break;
                        }
                      }
                      return e;
                    }
                    function D(t, e) {
                      var n,
                        o = l(t);
                      return (
                        o.findEntityRanges(
                          function (t) {
                            return t.get('entity') === e;
                          },
                          function (t, e) {
                            n = { start: t, end: e, text: o.get('text').slice(t, e) };
                          }
                        ),
                        n
                      );
                    }
                    function k(t, e, n) {
                      x[t][''.concat(t.toLowerCase(), '-').concat(n)] = S({}, ''.concat(e), n);
                    }
                    function O() {
                      return (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? E(Object(n), !0).forEach(function (t) {
                                S(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : E(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              });
                        }
                        return e;
                      })({}, x.color, {}, x.bgcolor, {}, x.fontSize, {}, x.fontFamily, {
                        CODE: x.CODE,
                        SUPERSCRIPT: x.SUPERSCRIPT,
                        SUBSCRIPT: x.SUBSCRIPT,
                      });
                    }
                    var x = {
                      color: {},
                      bgcolor: {},
                      fontSize: {},
                      fontFamily: {},
                      CODE: {
                        fontFamily: 'monospace',
                        wordWrap: 'break-word',
                        background: '#f1f1f1',
                        borderRadius: 3,
                        padding: '1px 3px',
                      },
                      SUPERSCRIPT: {
                        fontSize: 11,
                        position: 'relative',
                        top: -8,
                        display: 'inline-flex',
                      },
                      SUBSCRIPT: {
                        fontSize: 11,
                        position: 'relative',
                        bottom: -8,
                        display: 'inline-flex',
                      },
                    };
                    function I(t, e, n) {
                      var o = t.getSelection(),
                        r = Object.keys(x[e]).reduce(function (t, e) {
                          return M.Modifier.removeInlineStyle(t, o, e);
                        }, t.getCurrentContent()),
                        i = M.EditorState.push(t, r, 'changeinline-style'),
                        c = t.getCurrentInlineStyle();
                      if (
                        (o.isCollapsed() &&
                          (i = c.reduce(function (t, e) {
                            return M.RichUtils.toggleInlineStyle(t, e);
                          }, i)),
                        'SUPERSCRIPT' === e || 'SUBSCRIPT' == e)
                      )
                        c.has(n) || (i = M.RichUtils.toggleInlineStyle(i, n));
                      else {
                        var a = 'bgcolor' === e ? 'backgroundColor' : e;
                        c.has(''.concat(a, '-').concat(n)) ||
                          ((i = M.RichUtils.toggleInlineStyle(
                            i,
                            ''.concat(e.toLowerCase(), '-').concat(n)
                          )),
                          k(e, a, n));
                      }
                      return i;
                    }
                    function T(t) {
                      t &&
                        t
                          .getCurrentContent()
                          .getBlockMap()
                          .map(function (t) {
                            return t.get('characterList');
                          })
                          .toList()
                          .flatten()
                          .forEach(function (t) {
                            t && 0 === t.indexOf('color-')
                              ? k('color', 'color', t.substr(6))
                              : t && 0 === t.indexOf('bgcolor-')
                              ? k('bgcolor', 'backgroundColor', t.substr(8))
                              : t && 0 === t.indexOf('fontsize-')
                              ? k('fontSize', 'fontSize', +t.substr(9))
                              : t &&
                                0 === t.indexOf('fontfamily-') &&
                                k('fontFamily', 'fontFamily', t.substr(11));
                          });
                    }
                    function A(t, e, n) {
                      var o = t
                        .getInlineStyleAt(n)
                        .toList()
                        .filter(function (t) {
                          return t.startsWith(e.toLowerCase());
                        });
                      if (o && 0 < o.size) return o.get(0);
                    }
                    function z(o, s) {
                      if (o && s && 0 < s.length) {
                        var t = (function () {
                          var t = o.getSelection(),
                            i = {};
                          if (t.isCollapsed())
                            return (
                              s.forEach(function (t) {
                                i[t] = (function (t, e) {
                                  var n = t
                                    .getCurrentInlineStyle()
                                    .toList()
                                    .filter(function (t) {
                                      return t.startsWith(e.toLowerCase());
                                    });
                                  if (n && 0 < n.size) return n.get(0);
                                })(o, t);
                              }),
                              { v: i }
                            );
                          var c = t.getStartOffset(),
                            a = t.getEndOffset(),
                            l = u(o);
                          if (0 < l.size) {
                            for (
                              var e = function (n) {
                                  var t = 0 === n ? c : 0,
                                    e = n === l.size - 1 ? a : l.get(n).getText().length;
                                  t === e && 0 === t ? ((t = 1), (e = 2)) : t === e && --t;
                                  for (
                                    var o = function (e) {
                                        e === t
                                          ? s.forEach(function (t) {
                                              i[t] = A(l.get(n), t, e);
                                            })
                                          : s.forEach(function (t) {
                                              i[t] && i[t] !== A(l.get(n), t, e) && (i[t] = void 0);
                                            });
                                      },
                                      r = t;
                                    r < e;
                                    r += 1
                                  )
                                    o(r);
                                },
                                n = 0;
                              n < l.size;
                              n += 1
                            )
                              e(n);
                            return { v: i };
                          }
                        })();
                        if ('object' === w(t)) return t.v;
                      }
                      return {};
                    }
                    function _(e) {
                      var t = e.getCurrentInlineStyle(),
                        n = e.getCurrentContent();
                      return (
                        t.forEach(function (t) {
                          n = M.Modifier.removeInlineStyle(n, e.getSelection(), t);
                        }),
                        M.EditorState.push(e, n, 'change-inline-style')
                      );
                    }
                    n.d(e, 'isListBlock', function () {
                      return h;
                    }),
                      n.d(e, 'changeDepth', function () {
                        return v;
                      }),
                      n.d(e, 'handleNewLine', function () {
                        return N;
                      }),
                      n.d(e, 'getEntityRange', function () {
                        return D;
                      }),
                      n.d(e, 'getCustomStyleMap', function () {
                        return O;
                      }),
                      n.d(e, 'toggleCustomInlineStyle', function () {
                        return I;
                      }),
                      n.d(e, 'getSelectionEntity', function () {
                        return L;
                      }),
                      n.d(e, 'extractInlineStyle', function () {
                        return T;
                      }),
                      n.d(e, 'removeAllInlineStyles', function () {
                        return _;
                      }),
                      n.d(e, 'getSelectionInlineStyle', function () {
                        return C;
                      }),
                      n.d(e, 'getSelectionCustomInlineStyle', function () {
                        return z;
                      }),
                      n.d(e, 'getSelectedBlocksMap', function () {
                        return j;
                      }),
                      n.d(e, 'getSelectedBlocksList', function () {
                        return u;
                      }),
                      n.d(e, 'getSelectedBlock', function () {
                        return l;
                      }),
                      n.d(e, 'getBlockBeforeSelectedBlock', function () {
                        return o;
                      }),
                      n.d(e, 'getAllBlocks', function () {
                        return r;
                      }),
                      n.d(e, 'getSelectedBlocksType', function () {
                        return c;
                      }),
                      n.d(e, 'removeSelectedBlocksStyle', function () {
                        return a;
                      }),
                      n.d(e, 'getSelectionText', function () {
                        return s;
                      }),
                      n.d(e, 'addLineBreakRemovingSelection', function () {
                        return p;
                      }),
                      n.d(e, 'insertNewUnstyledBlock', function () {
                        return d;
                      }),
                      n.d(e, 'clearEditorContent', function () {
                        return f;
                      }),
                      n.d(e, 'setBlockData', function () {
                        return y;
                      }),
                      n.d(e, 'getSelectedBlocksMetadata', function () {
                        return m;
                      }),
                      n.d(e, 'blockRenderMap', function () {
                        return b;
                      });
                  },
                ]),
              (r.c = a),
              (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
              }),
              (r.r = function (t) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(t, '__esModule', { value: !0 });
              }),
              (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    r.d(
                      n,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return r.d(e, 'a', e), e;
              }),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (r.p = ''),
              r((r.s = 2))));
        },
        function (t, e) {
          t.exports = r;
        },
        function (t, e, n) {
          function r(t) {
            if (a[t]) return a[t].exports;
            var e = (a[t] = { i: t, l: !1, exports: {} });
            return c[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
          }
          var o, i, c, a;
          window,
            (t.exports =
              ((o = n(5)),
              (i = n(3)),
              (a = {}),
              (r.m = c =
                [
                  function (t, e) {
                    t.exports = o;
                  },
                  function (t, e) {
                    t.exports = i;
                  },
                  function (t, e, n) {
                    t.exports = n(3);
                  },
                  function (t, e, n) {
                    'use strict';
                    n.r(e);
                    var j = n(1),
                      s = n(0),
                      v = function (t, e, n) {
                        var o,
                          r = t.textContent;
                        return '' === r.trim()
                          ? {
                              chunk:
                                ((o = n),
                                {
                                  text: ' ',
                                  inlines: [new s.OrderedSet()],
                                  entities: [o],
                                  blocks: [],
                                }),
                            }
                          : {
                              chunk: {
                                text: r,
                                inlines: Array(r.length).fill(e),
                                entities: Array(r.length).fill(n),
                                blocks: [],
                              },
                            };
                      },
                      N = function () {
                        return {
                          text: '\n',
                          inlines: [new s.OrderedSet()],
                          entities: new Array(1),
                          blocks: [],
                        };
                      },
                      E = function () {
                        return { text: '', inlines: [], entities: [], blocks: [] };
                      },
                      S = function (t, e) {
                        return {
                          text: '',
                          inlines: [],
                          entities: [],
                          blocks: [{ type: t, depth: 0, data: e || new s.Map({}) }],
                        };
                      },
                      w = function (t, e, n) {
                        return {
                          text: '\r',
                          inlines: [],
                          entities: [],
                          blocks: [
                            {
                              type: t,
                              depth: Math.max(0, Math.min(4, e)),
                              data: n || new s.Map({}),
                            },
                          ],
                        };
                      },
                      C = function (t) {
                        return {
                          text: '\r ',
                          inlines: [new s.OrderedSet()],
                          entities: [t],
                          blocks: [{ type: 'atomic', depth: 0, data: new s.Map({}) }],
                        };
                      },
                      L = function (t, e) {
                        return {
                          text: t.text + e.text,
                          inlines: t.inlines.concat(e.inlines),
                          entities: t.entities.concat(e.entities),
                          blocks: t.blocks.concat(e.blocks),
                        };
                      },
                      D = new s.Map({
                        'header-one': { element: 'h1' },
                        'header-two': { element: 'h2' },
                        'header-three': { element: 'h3' },
                        'header-four': { element: 'h4' },
                        'header-five': { element: 'h5' },
                        'header-six': { element: 'h6' },
                        'unordered-list-item': { element: 'li', wrapper: 'ul' },
                        'ordered-list-item': { element: 'li', wrapper: 'ol' },
                        blockquote: { element: 'blockquote' },
                        code: { element: 'pre' },
                        atomic: { element: 'figure' },
                        unstyled: { element: 'p', aliasedElements: ['div'] },
                      }),
                      k = {
                        code: 'CODE',
                        del: 'STRIKETHROUGH',
                        em: 'ITALIC',
                        strong: 'BOLD',
                        ins: 'UNDERLINE',
                        sub: 'SUBSCRIPT',
                        sup: 'SUPERSCRIPT',
                      };
                    function O(t) {
                      return t.style.textAlign
                        ? new s.Map({ 'text-align': t.style.textAlign })
                        : t.style.marginLeft
                        ? new s.Map({ 'margin-left': t.style.marginLeft })
                        : void 0;
                    }
                    var x = function (t) {
                      var e = void 0;
                      if (t instanceof HTMLAnchorElement) {
                        var n = {};
                        e =
                          t.dataset && void 0 !== t.dataset.mention
                            ? ((n.url = t.href),
                              (n.text = t.innerHTML),
                              (n.value = t.dataset.value),
                              j.Entity.__create('MENTION', 'IMMUTABLE', n))
                            : ((n.url = (t.getAttribute && t.getAttribute('href')) || t.href),
                              (n.title = t.innerHTML),
                              (n.targetOption = t.target),
                              j.Entity.__create('LINK', 'MUTABLE', n));
                      }
                      return e;
                    };
                    n.d(e, 'default', function () {
                      return o;
                    });
                    var u = ' ',
                      p = new RegExp('&nbsp;', 'g'),
                      I = !0;
                    function o(t, e) {
                      var n,
                        o,
                        r,
                        i =
                          ((n = e),
                          (o = t.trim().replace(p, u)),
                          (r = (function (t) {
                            var e,
                              n = null;
                            return (
                              document.implementation &&
                                document.implementation.createHTMLDocument &&
                                (((e =
                                  document.implementation.createHTMLDocument(
                                    'foo'
                                  )).documentElement.innerHTML = t),
                                (n = e.getElementsByTagName('body')[0])),
                              n
                            );
                          })(o))
                            ? ((I = !0),
                              {
                                chunk: (function t(e, n, o, r, i, c) {
                                  var a = e.nodeName.toLowerCase();
                                  if (c) {
                                    var l = c(a, e);
                                    if (l) {
                                      var s = j.Entity.__create(l.type, l.mutability, l.data || {});
                                      return { chunk: C(s) };
                                    }
                                  }
                                  if ('#text' === a && '\n' !== e.textContent) return v(e, n, i);
                                  if ('br' === a) return { chunk: N() };
                                  if ('img' === a && e instanceof HTMLImageElement) {
                                    var u = {};
                                    (u.src = (e.getAttribute && e.getAttribute('src')) || e.src),
                                      (u.alt = e.alt),
                                      (u.height = e.style.height),
                                      (u.width = e.style.width),
                                      e.style.float && (u.alignment = e.style.float);
                                    var p = j.Entity.__create('IMAGE', 'MUTABLE', u);
                                    return { chunk: C(p) };
                                  }
                                  if ('video' === a && e instanceof HTMLVideoElement) {
                                    var d = {};
                                    (d.src = (e.getAttribute && e.getAttribute('src')) || e.src),
                                      (d.alt = e.alt),
                                      (d.height = e.style.height),
                                      (d.width = e.style.width),
                                      e.style.float && (d.alignment = e.style.float);
                                    var f = j.Entity.__create('VIDEO', 'MUTABLE', d);
                                    return { chunk: C(f) };
                                  }
                                  if ('iframe' === a && e instanceof HTMLIFrameElement) {
                                    var y = {};
                                    (y.src = (e.getAttribute && e.getAttribute('src')) || e.src),
                                      (y.height = e.height),
                                      (y.width = e.width);
                                    var m = j.Entity.__create('EMBEDDED_LINK', 'MUTABLE', y);
                                    return { chunk: C(m) };
                                  }
                                  var g,
                                    b = (function (e, n) {
                                      var t = D.filter(function (t) {
                                        return (
                                          (t.element === e && (!t.wrapper || t.wrapper === n)) ||
                                          t.wrapper === e ||
                                          (t.aliasedElements && -1 < t.aliasedElements.indexOf(e))
                                        );
                                      })
                                        .keySeq()
                                        .toSet()
                                        .toArray();
                                      if (1 === t.length) return t[0];
                                    })(a, r);
                                  b &&
                                    ('ul' === a || 'ol' === a
                                      ? ((r = a), (o += 1))
                                      : ('unordered-list-item' !== b &&
                                          'ordered-list-item' !== b &&
                                          ((r = ''), (o = -1)),
                                        I ? ((g = S(b, O(e))), (I = !1)) : (g = w(b, o, O(e))))),
                                    (g = g || E()),
                                    (n = (function (t, e, n) {
                                      var o,
                                        r = k[t];
                                      if (r) o = n.add(r).toOrderedSet();
                                      else if (e instanceof HTMLElement) {
                                        var l = e;
                                        o = (o = n)
                                          .withMutations(function (t) {
                                            var e = l.style.color,
                                              n = l.style.backgroundColor,
                                              o = l.style.fontSize,
                                              r = l.style.fontFamily.replace(/^"|"$/g, ''),
                                              i = l.style.fontWeight,
                                              c = l.style.textDecoration,
                                              a = l.style.fontStyle;
                                            e && t.add('color-'.concat(e.replace(/ /g, ''))),
                                              n && t.add('bgcolor-'.concat(n.replace(/ /g, ''))),
                                              o && t.add('fontsize-'.concat(o.replace(/px$/g, ''))),
                                              r && t.add('fontfamily-'.concat(r)),
                                              'bold' === i && t.add(k.strong),
                                              'underline' === c && t.add(k.ins),
                                              'italic' === a && t.add(k.em);
                                          })
                                          .toOrderedSet();
                                      }
                                      return o;
                                    })(a, e, n));
                                  for (var h = e.firstChild; h; ) {
                                    var M = t(h, n, o, r, x(h) || i, c).chunk;
                                    (g = L(g, M)), (h = h.nextSibling);
                                  }
                                  return { chunk: g };
                                })(r, new s.OrderedSet(), -1, '', void 0, n).chunk,
                              })
                            : null);
                      if (i) {
                        var c = i.chunk,
                          a = new s.OrderedMap({});
                        c.entities &&
                          c.entities.forEach(function (t) {
                            t && (a = a.set(t, j.Entity.__get(t)));
                          });
                        var l = 0;
                        return {
                          contentBlocks: c.text.split('\r').map(function (t, e) {
                            var n = l + t.length,
                              o = c && c.inlines.slice(l, n),
                              r = c && c.entities.slice(l, n),
                              i = new s.List(
                                o.map(function (t, e) {
                                  var n = { style: t, entity: null };
                                  return r[e] && (n.entity = r[e]), j.CharacterMetadata.create(n);
                                })
                              );
                            return (
                              (l = n),
                              new j.ContentBlock({
                                key: Object(j.genKey)(),
                                type: (c && c.blocks[e] && c.blocks[e].type) || 'unstyled',
                                depth: c && c.blocks[e] && c.blocks[e].depth,
                                data: (c && c.blocks[e] && c.blocks[e].data) || new s.Map({}),
                                text: t,
                                characterList: i,
                              })
                            );
                          }),
                          entityMap: a,
                        };
                      }
                      return null;
                    }
                  },
                ]),
              (r.c = a),
              (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
              }),
              (r.r = function (t) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(t, '__esModule', { value: !0 });
              }),
              (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    r.d(
                      n,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return r.d(e, 'a', e), e;
              }),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (r.p = ''),
              r((r.s = 2))));
        },
        function (t, e, l) {
          'use strict';
          function o(n) {
            return (
              Array.prototype.slice.call(arguments, 1).forEach(function (e) {
                e &&
                  Object.keys(e).forEach(function (t) {
                    n[t] = e[t];
                  });
              }),
              n
            );
          }
          function s(t) {
            return Object.prototype.toString.call(t);
          }
          function u(t) {
            return '[object Function]' === s(t);
          }
          function p(t) {
            return t.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
          }
          var r = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
          var i = {
              'http:': {
                validate: function (t, e, n) {
                  var o = t.slice(e);
                  return (
                    n.re.http ||
                      (n.re.http = new RegExp(
                        '^\\/\\/' + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
                        'i'
                      )),
                    n.re.http.test(o) ? o.match(n.re.http)[0].length : 0
                  );
                },
              },
              'https:': 'http:',
              'ftp:': 'http:',
              '//': {
                validate: function (t, e, n) {
                  var o = t.slice(e);
                  return (
                    n.re.no_http ||
                      (n.re.no_http = new RegExp(
                        '^' +
                          n.re.src_auth +
                          '(?:localhost|(?:(?:' +
                          n.re.src_domain +
                          ')\\.)+' +
                          n.re.src_domain_root +
                          ')' +
                          n.re.src_port +
                          n.re.src_host_terminator +
                          n.re.src_path,
                        'i'
                      )),
                    n.re.no_http.test(o)
                      ? 3 <= e && ':' === t[e - 3]
                        ? 0
                        : 3 <= e && '/' === t[e - 3]
                        ? 0
                        : o.match(n.re.no_http)[0].length
                      : 0
                  );
                },
              },
              'mailto:': {
                validate: function (t, e, n) {
                  var o = t.slice(e);
                  return (
                    n.re.mailto ||
                      (n.re.mailto = new RegExp(
                        '^' + n.re.src_email_name + '@' + n.re.src_host_strict,
                        'i'
                      )),
                    n.re.mailto.test(o) ? o.match(n.re.mailto)[0].length : 0
                  );
                },
              },
            },
            d =
              'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]',
            c = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split(
              '|'
            );
          function f() {
            return function (t, e) {
              e.normalize(t);
            };
          }
          function a(r) {
            var e = (r.re = l(21)(r.__opts__)),
              t = r.__tlds__.slice();
            function n(t) {
              return t.replace('%TLDS%', e.src_tlds);
            }
            r.onCompile(),
              r.__tlds_replaced__ || t.push(d),
              t.push(e.src_xn),
              (e.src_tlds = t.join('|')),
              (e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), 'i')),
              (e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), 'i')),
              (e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), 'i')),
              (e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), 'i'));
            var i = [];
            function c(t, e) {
              throw new Error('(LinkifyIt) Invalid schema "' + t + '": ' + e);
            }
            (r.__compiled__ = {}),
              Object.keys(r.__schemas__).forEach(function (t) {
                var e = r.__schemas__[t];
                if (null !== e) {
                  var o,
                    n = { validate: null, link: null };
                  if (((r.__compiled__[t] = n), '[object Object]' === s(e)))
                    return (
                      '[object RegExp]' === s(e.validate)
                        ? (n.validate =
                            ((o = e.validate),
                            function (t, e) {
                              var n = t.slice(e);
                              return o.test(n) ? n.match(o)[0].length : 0;
                            }))
                        : u(e.validate)
                        ? (n.validate = e.validate)
                        : c(t, e),
                      void (u(e.normalize)
                        ? (n.normalize = e.normalize)
                        : e.normalize
                        ? c(t, e)
                        : (n.normalize = f()))
                    );
                  if ('[object String]' !== s(e)) c(t, e);
                  else i.push(t);
                }
              }),
              i.forEach(function (t) {
                r.__compiled__[r.__schemas__[t]] &&
                  ((r.__compiled__[t].validate = r.__compiled__[r.__schemas__[t]].validate),
                  (r.__compiled__[t].normalize = r.__compiled__[r.__schemas__[t]].normalize));
              }),
              (r.__compiled__[''] = { validate: null, normalize: f() });
            var o,
              a = Object.keys(r.__compiled__)
                .filter(function (t) {
                  return 0 < t.length && r.__compiled__[t];
                })
                .map(p)
                .join('|');
            (r.re.schema_test = RegExp('(^|(?!_)(?:[><｜]|' + e.src_ZPCc + '))(' + a + ')', 'i')),
              (r.re.schema_search = RegExp(
                '(^|(?!_)(?:[><｜]|' + e.src_ZPCc + '))(' + a + ')',
                'ig'
              )),
              (r.re.pretest = RegExp(
                '(' + r.re.schema_test.source + ')|(' + r.re.host_fuzzy_test.source + ')|@',
                'i'
              )),
              ((o = r).__index__ = -1),
              (o.__text_cache__ = '');
          }
          function y(t, e) {
            var n = t.__index__,
              o = t.__last_index__,
              r = t.__text_cache__.slice(n, o);
            (this.schema = t.__schema__.toLowerCase()),
              (this.index = n + e),
              (this.lastIndex = o + e),
              (this.raw = r),
              (this.text = r),
              (this.url = r);
          }
          function m(t, e) {
            var n = new y(t, e);
            return t.__compiled__[n.schema].normalize(n, t), n;
          }
          function g(t, e) {
            if (!(this instanceof g)) return new g(t, e);
            var n;
            e ||
              ((n = t),
              Object.keys(n || {}).reduce(function (t, e) {
                return t || r.hasOwnProperty(e);
              }, !1) && ((e = t), (t = {}))),
              (this.__opts__ = o({}, r, e)),
              (this.__index__ = -1),
              (this.__last_index__ = -1),
              (this.__schema__ = ''),
              (this.__text_cache__ = ''),
              (this.__schemas__ = o({}, i, t)),
              (this.__compiled__ = {}),
              (this.__tlds__ = c),
              (this.__tlds_replaced__ = !1),
              (this.re = {}),
              a(this);
          }
          (g.prototype.add = function (t, e) {
            return (this.__schemas__[t] = e), a(this), this;
          }),
            (g.prototype.set = function (t) {
              return (this.__opts__ = o(this.__opts__, t)), this;
            }),
            (g.prototype.test = function (t) {
              if (((this.__text_cache__ = t), (this.__index__ = -1), !t.length)) return !1;
              var e, n, o, r, i, c, a, l;
              if (this.re.schema_test.test(t))
                for ((a = this.re.schema_search).lastIndex = 0; null !== (e = a.exec(t)); )
                  if ((r = this.testSchemaAt(t, e[2], a.lastIndex))) {
                    (this.__schema__ = e[2]),
                      (this.__index__ = e.index + e[1].length),
                      (this.__last_index__ = e.index + e[0].length + r);
                    break;
                  }
              return (
                this.__opts__.fuzzyLink &&
                  this.__compiled__['http:'] &&
                  0 <= (l = t.search(this.re.host_fuzzy_test)) &&
                  (this.__index__ < 0 || l < this.__index__) &&
                  null !==
                    (n = t.match(
                      this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy
                    )) &&
                  ((i = n.index + n[1].length),
                  (this.__index__ < 0 || i < this.__index__) &&
                    ((this.__schema__ = ''),
                    (this.__index__ = i),
                    (this.__last_index__ = n.index + n[0].length))),
                this.__opts__.fuzzyEmail &&
                  this.__compiled__['mailto:'] &&
                  0 <= t.indexOf('@') &&
                  null !== (o = t.match(this.re.email_fuzzy)) &&
                  ((i = o.index + o[1].length),
                  (c = o.index + o[0].length),
                  (this.__index__ < 0 ||
                    i < this.__index__ ||
                    (i === this.__index__ && c > this.__last_index__)) &&
                    ((this.__schema__ = 'mailto:'),
                    (this.__index__ = i),
                    (this.__last_index__ = c))),
                0 <= this.__index__
              );
            }),
            (g.prototype.pretest = function (t) {
              return this.re.pretest.test(t);
            }),
            (g.prototype.testSchemaAt = function (t, e, n) {
              return this.__compiled__[e.toLowerCase()]
                ? this.__compiled__[e.toLowerCase()].validate(t, n, this)
                : 0;
            }),
            (g.prototype.match = function (t) {
              var e = 0,
                n = [];
              0 <= this.__index__ &&
                this.__text_cache__ === t &&
                (n.push(m(this, e)), (e = this.__last_index__));
              for (var o = e ? t.slice(e) : t; this.test(o); )
                n.push(m(this, e)), (o = o.slice(this.__last_index__)), (e += this.__last_index__);
              return n.length ? n : null;
            }),
            (g.prototype.tlds = function (t, e) {
              return (
                (t = Array.isArray(t) ? t : [t]),
                e
                  ? (this.__tlds__ = this.__tlds__
                      .concat(t)
                      .sort()
                      .filter(function (t, e, n) {
                        return t !== n[e - 1];
                      })
                      .reverse())
                  : ((this.__tlds__ = t.slice()), (this.__tlds_replaced__ = !0)),
                a(this),
                this
              );
            }),
            (g.prototype.normalize = function (t) {
              t.schema || (t.url = 'http://' + t.url),
                'mailto:' !== t.schema || /^mailto:/i.test(t.url) || (t.url = 'mailto:' + t.url);
            }),
            (g.prototype.onCompile = function () {}),
            (t.exports = g);
        },
        function (t, e, n) {
          t.exports = n(40);
        },
        function (t, e, n) {},
        function (t, e, n) {
          'use strict';
          var a = n(11);
          function o() {}
          function r() {}
          (r.resetWarningCache = o),
            (t.exports = function () {
              function t(t, e, n, o, r, i) {
                if (i !== a) {
                  var c = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((c.name = 'Invariant Violation'), c);
                }
              }
              function e() {
                return t;
              }
              var n = {
                array: (t.isRequired = t),
                bigint: t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                elementType: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e,
                exact: e,
                checkPropTypes: r,
                resetWarningCache: o,
              };
              return (n.PropTypes = n);
            });
        },
        function (t, e, n) {
          'use strict';
          t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, o) {
          'use strict';
          t.exports = function (t) {
            var e = {};
            (e.src_Any = o(22).source),
              (e.src_Cc = o(23).source),
              (e.src_Z = o(24).source),
              (e.src_P = o(25).source),
              (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join('|')),
              (e.src_ZCc = [e.src_Z, e.src_Cc].join('|'));
            var n = '[><｜]';
            return (
              (e.src_pseudo_letter = '(?:(?![><｜]|' + e.src_ZPCc + ')' + e.src_Any + ')'),
              (e.src_ip4 =
                '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
              (e.src_auth = '(?:(?:(?!' + e.src_ZCc + '|[@/\\[\\]()]).)+@)?'),
              (e.src_port =
                '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?'),
              (e.src_host_terminator =
                '(?=$|[><｜]|' + e.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + e.src_ZPCc + '))'),
              (e.src_path =
                '(?:[/?#](?:(?!' +
                e.src_ZCc +
                '|' +
                n +
                '|[()[\\]{}.,"\'?!\\-]).|\\[(?:(?!' +
                e.src_ZCc +
                '|\\]).)*\\]|\\((?:(?!' +
                e.src_ZCc +
                '|[)]).)*\\)|\\{(?:(?!' +
                e.src_ZCc +
                '|[}]).)*\\}|\\"(?:(?!' +
                e.src_ZCc +
                '|["]).)+\\"|\\\'(?:(?!' +
                e.src_ZCc +
                "|[']).)+\\'|\\'(?=" +
                e.src_pseudo_letter +
                '|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!' +
                e.src_ZCc +
                '|[.]).|' +
                (t && t['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' : '\\-+|') +
                '\\,(?!' +
                e.src_ZCc +
                ').|\\!(?!' +
                e.src_ZCc +
                '|[!]).|\\?(?!' +
                e.src_ZCc +
                '|[?]).)+|\\/)?'),
              (e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
              (e.src_xn = 'xn--[a-z0-9\\-]{1,59}'),
              (e.src_domain_root = '(?:' + e.src_xn + '|' + e.src_pseudo_letter + '{1,63})'),
              (e.src_domain =
                '(?:' +
                e.src_xn +
                '|(?:' +
                e.src_pseudo_letter +
                ')|(?:' +
                e.src_pseudo_letter +
                '(?:-|' +
                e.src_pseudo_letter +
                '){0,61}' +
                e.src_pseudo_letter +
                '))'),
              (e.src_host = '(?:(?:(?:(?:' + e.src_domain + ')\\.)*' + e.src_domain + '))'),
              (e.tpl_host_fuzzy =
                '(?:' + e.src_ip4 + '|(?:(?:(?:' + e.src_domain + ')\\.)+(?:%TLDS%)))'),
              (e.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + e.src_domain + ')\\.)+(?:%TLDS%))'),
              (e.src_host_strict = e.src_host + e.src_host_terminator),
              (e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
              (e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator),
              (e.tpl_host_port_fuzzy_strict =
                e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
              (e.tpl_host_port_no_ip_fuzzy_strict =
                e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
              (e.tpl_host_fuzzy_test =
                'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + e.src_ZPCc + '|>|$))'),
              (e.tpl_email_fuzzy =
                '(^|[><｜]|"|\\(|' +
                e.src_ZCc +
                ')(' +
                e.src_email_name +
                '@' +
                e.tpl_host_fuzzy_strict +
                ')'),
              (e.tpl_link_fuzzy =
                '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
                e.src_ZPCc +
                '))((?![$+<=>^`|｜])' +
                e.tpl_host_port_fuzzy_strict +
                e.src_path +
                ')'),
              (e.tpl_link_no_ip_fuzzy =
                '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
                e.src_ZPCc +
                '))((?![$+<=>^`|｜])' +
                e.tpl_host_port_no_ip_fuzzy_strict +
                e.src_path +
                ')'),
              e
            );
          };
        },
        function (t, e) {
          t.exports =
            /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        },
        function (t, e) {
          t.exports = /[\0-\x1F\x7F-\x9F]/;
        },
        function (t, e) {
          t.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
        },
        function (t, e) {
          t.exports =
            /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
        },
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {},
        function (t, e, n) {
          'use strict';
          n.r(e),
            n.d(e, 'Editor', function () {
              return ar;
            });
          var f = n(1),
            N = n.n(f),
            o = n(0),
            y = n.n(o),
            E = n(3),
            S = n(4),
            r = n(2),
            w = n.n(r);
          function i(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function c(t, e, n) {
            return (
              e && i(t.prototype, e),
              n && i(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          var a = c(function t() {
            var n = this;
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.callBacks = []),
              (this.suggestionCallback = void 0),
              (this.editorFlag = !1),
              (this.suggestionFlag = !1),
              (this.closeAllModals = function (e) {
                n.callBacks.forEach(function (t) {
                  t(e);
                });
              }),
              (this.init = function (t) {
                var e = document.getElementById(t);
                e &&
                  e.addEventListener('click', function () {
                    n.editorFlag = !0;
                  }),
                  document &&
                    (document.addEventListener('click', function () {
                      n.editorFlag
                        ? (n.editorFlag = !1)
                        : (n.closeAllModals(), n.suggestionCallback && n.suggestionCallback());
                    }),
                    document.addEventListener('keydown', function (t) {
                      'Escape' === t.key && n.closeAllModals();
                    }));
              }),
              (this.onEditorClick = function () {
                n.closeModals(),
                  !n.suggestionFlag && n.suggestionCallback
                    ? n.suggestionCallback()
                    : (n.suggestionFlag = !1);
              }),
              (this.closeModals = function (t) {
                n.closeAllModals(t);
              }),
              (this.registerCallBack = function (t) {
                n.callBacks.push(t);
              }),
              (this.deregisterCallBack = function (e) {
                n.callBacks = n.callBacks.filter(function (t) {
                  return t !== e;
                });
              }),
              (this.setSuggestionCallback = function (t) {
                n.suggestionCallback = t;
              }),
              (this.removeSuggestionCallback = function () {
                n.suggestionCallback = void 0;
              }),
              (this.onSuggestionClick = function () {
                n.suggestionFlag = !0;
              });
          });
          function l(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function s(t, e, n) {
            return (
              e && l(t.prototype, e),
              n && l(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          var u,
            p = s(function t() {
              var e = this;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.inputFocused = !1),
                (this.editorMouseDown = !1),
                (this.onEditorMouseDown = function () {
                  e.editorFocused = !0;
                }),
                (this.onInputMouseDown = function () {
                  e.inputFocused = !0;
                }),
                (this.isEditorBlur = function (t) {
                  return ('INPUT' !== t.target.tagName &&
                    'LABEL' !== t.target.tagName &&
                    'TEXTAREA' !== t.target.tagName) ||
                    e.editorFocused
                    ? !(
                        ('INPUT' === t.target.tagName &&
                          'LABEL' === t.target.tagName &&
                          'TEXTAREA' === t.target.tagName) ||
                        e.inputFocused
                      ) && !(e.editorFocused = !1)
                    : !(e.inputFocused = !1);
                }),
                (this.isEditorFocused = function () {
                  return !e.inputFocused || (e.inputFocused = !1);
                }),
                (this.isToolbarFocused = function () {
                  return !e.editorFocused || (e.editorFocused = !1);
                }),
                (this.isInputFocused = function () {
                  return e.inputFocused;
                });
            }),
            d = [],
            C = {
              onKeyDown: function (e) {
                d.forEach(function (t) {
                  t(e);
                });
              },
              registerCallBack: function (t) {
                d.push(t);
              },
              deregisterCallBack: function (e) {
                d = d.filter(function (t) {
                  return t !== e;
                });
              },
            },
            m = function () {
              u = !0;
            },
            g = function () {
              u = !1;
            },
            b = function () {
              return u;
            };
          function L(t) {
            var e = t.getData() && t.getData().get('text-align');
            return e ? 'rdw-'.concat(e, '-aligned-block') : '';
          }
          function h(t, e) {
            if (t) for (var n in t) !{}.hasOwnProperty.call(t, n) || e(n, t[n]);
          }
          function M(t, e) {
            var n = !1;
            if (t)
              for (var o in t)
                if ({}.hasOwnProperty.call(t, o) && e === o) {
                  n = !0;
                  break;
                }
            return n;
          }
          function j(t) {
            t.stopPropagation();
          }
          function v(t) {
            return t[t.options[0]].icon;
          }
          function D(t, o) {
            if (t && void 0 === o) return t;
            var r = {};
            return (
              h(t, function (t, e) {
                var n;
                (n = e),
                  '[object Object]' === Object.prototype.toString.call(n)
                    ? (r[t] = D(e, o[t]))
                    : (r[t] = void 0 !== o[t] ? o[t] : e);
              }),
              r
            );
          }
          var k = n(6),
            O = n.n(k),
            x = n(5);
          n(9);
          function I(t) {
            return (I =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function T(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function A(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function z(t, e) {
            return (z = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function _(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = P(o);
              if (r) {
                var n = P(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === I(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function P(t) {
            return (P = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var R = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && z(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              o = _(i);
            function i() {
              var r;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((r = o.call.apply(o, [this].concat(e))).onClick = function () {
                  var t = r.props,
                    e = t.disabled,
                    n = t.onClick,
                    o = t.value;
                  e || n(o);
                }),
                r
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'render',
                  value: function () {
                    var t,
                      e = this.props,
                      n = e.children,
                      o = e.className,
                      r = e.activeClassName,
                      i = e.active,
                      c = e.disabled,
                      a = e.title;
                    return N.a.createElement(
                      'div',
                      {
                        className: w()(
                          'rdw-option-wrapper',
                          o,
                          (T((t = {}), 'rdw-option-active '.concat(r), i),
                          T(t, 'rdw-option-disabled', c),
                          t)
                        ),
                        onClick: this.onClick,
                        'aria-selected': i,
                        title: a,
                      },
                      n
                    );
                  },
                },
              ]) && A(t.prototype, e),
              n && A(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          (R.propTypes = {
            onClick: y.a.func.isRequired,
            children: y.a.any,
            value: y.a.string,
            className: y.a.string,
            activeClassName: y.a.string,
            active: y.a.bool,
            disabled: y.a.bool,
            title: y.a.string,
          }),
            (R.defaultProps = { activeClassName: '' });
          n(12);
          function U(t) {
            return (U =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function B(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function F(t, e) {
            return (F = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Y(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Q(o);
              if (r) {
                var n = Q(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === U(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Q(t) {
            return (Q = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var H = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && F(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = Y(i);
            function i() {
              var o;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((o = r.call.apply(r, [this].concat(e))).state = { highlighted: -1 }),
                (o.onChange = function (t) {
                  var e = o.props.onChange;
                  e && e(t), o.toggleExpansion();
                }),
                (o.setHighlighted = function (t) {
                  o.setState({ highlighted: t });
                }),
                (o.toggleExpansion = function () {
                  var t = o.props,
                    e = t.doExpand,
                    n = t.doCollapse;
                  t.expanded ? n() : e();
                }),
                o
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.expanded;
                    t.expanded && !e && this.setState({ highlighted: -1 });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var n = this,
                      t = this.props,
                      e = t.expanded,
                      o = t.children,
                      r = t.className,
                      i = t.optionWrapperClassName,
                      c = t.ariaLabel,
                      a = t.onExpandEvent,
                      l = t.title,
                      s = this.state.highlighted,
                      u = o.slice(1, o.length);
                    return N.a.createElement(
                      'div',
                      {
                        className: w()('rdw-dropdown-wrapper', r),
                        'aria-expanded': e,
                        'aria-label': c || 'rdw-dropdown',
                      },
                      N.a.createElement(
                        'a',
                        { className: 'rdw-dropdown-selectedtext', onClick: a, title: l },
                        o[0],
                        N.a.createElement('div', {
                          className: w()({
                            'rdw-dropdown-carettoclose': e,
                            'rdw-dropdown-carettoopen': !e,
                          }),
                        })
                      ),
                      e
                        ? N.a.createElement(
                            'ul',
                            { className: w()('rdw-dropdown-optionwrapper', i), onClick: j },
                            N.a.Children.map(u, function (t, e) {
                              return (
                                t &&
                                N.a.cloneElement(t, {
                                  onSelect: n.onChange,
                                  highlighted: s === e,
                                  setHighlighted: n.setHighlighted,
                                  index: e,
                                })
                              );
                            })
                          )
                        : void 0
                    );
                  },
                },
              ]) && B(t.prototype, e),
              n && B(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          H.propTypes = {
            children: y.a.any,
            onChange: y.a.func,
            className: y.a.string,
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            optionWrapperClassName: y.a.string,
            ariaLabel: y.a.string,
            title: y.a.string,
          };
          n(13);
          function Z(t) {
            return (Z =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function W(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function G(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function J(t, e) {
            return (J = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function V(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = q(o);
              if (r) {
                var n = q(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Z(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function q(t) {
            return (q = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var K = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && J(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = V(r);
            function r() {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((i = o.call.apply(o, [this].concat(e))).onClick = function (t) {
                  var e = i.props,
                    n = e.onSelect,
                    o = e.onClick,
                    r = e.value;
                  e.disabled || (n && n(r), o && (t.stopPropagation(), o(r)));
                }),
                (i.setHighlighted = function () {
                  var t = i.props;
                  (0, t.setHighlighted)(t.index);
                }),
                (i.resetHighlighted = function () {
                  (0, i.props.setHighlighted)(-1);
                }),
                i
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'render',
                  value: function () {
                    var t,
                      e = this.props,
                      n = e.children,
                      o = e.active,
                      r = e.disabled,
                      i = e.highlighted,
                      c = e.className,
                      a = e.activeClassName,
                      l = e.disabledClassName,
                      s = e.highlightedClassName,
                      u = e.title;
                    return N.a.createElement(
                      'li',
                      {
                        className: w()(
                          'rdw-dropdownoption-default',
                          c,
                          (W((t = {}), 'rdw-dropdownoption-active '.concat(a), o),
                          W(t, 'rdw-dropdownoption-highlighted '.concat(s), i),
                          W(t, 'rdw-dropdownoption-disabled '.concat(l), r),
                          t)
                        ),
                        onMouseEnter: this.setHighlighted,
                        onMouseLeave: this.resetHighlighted,
                        onClick: this.onClick,
                        title: u,
                      },
                      n
                    );
                  },
                },
              ]) && G(t.prototype, e),
              n && G(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          (K.propTypes = {
            children: y.a.any,
            value: y.a.any,
            onClick: y.a.func,
            onSelect: y.a.func,
            setHighlighted: y.a.func,
            index: y.a.number,
            disabled: y.a.bool,
            active: y.a.bool,
            highlighted: y.a.bool,
            className: y.a.string,
            activeClassName: y.a.string,
            disabledClassName: y.a.string,
            highlightedClassName: y.a.string,
            title: y.a.string,
          }),
            (K.defaultProps = {
              activeClassName: '',
              disabledClassName: '',
              highlightedClassName: '',
            });
          n(14);
          function X(t) {
            return (X =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function $(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function tt(t, e) {
            return (tt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function et(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = nt(o);
              if (r) {
                var n = nt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === X(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function nt(t) {
            return (nt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var ot = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && tt(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = et(r);
            function r() {
              return (
                (function (t, e) {
                  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                })(this, r),
                o.apply(this, arguments)
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'renderInFlatList',
                  value: function () {
                    var t = this.props,
                      n = t.config,
                      o = t.currentState,
                      r = t.onChange,
                      i = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: w()('rdw-inline-wrapper', n.className),
                        'aria-label': 'rdw-inline-control',
                      },
                      n.options.map(function (t, e) {
                        return N.a.createElement(
                          R,
                          {
                            key: e,
                            value: t,
                            onClick: r,
                            className: w()(n[t].className),
                            active: !0 === o[t] || ('MONOSPACE' === t && o.CODE),
                            title: n[t].title || i['components.controls.inline.'.concat(t)],
                          },
                          N.a.createElement('img', { alt: '', src: n[t].icon })
                        );
                      })
                    );
                  },
                },
                {
                  key: 'renderInDropDown',
                  value: function () {
                    var t = this.props,
                      n = t.config,
                      e = t.expanded,
                      o = t.doExpand,
                      r = t.onExpandEvent,
                      i = t.doCollapse,
                      c = t.currentState,
                      a = t.onChange,
                      l = t.translations,
                      s = n.className,
                      u = n.dropdownClassName,
                      p = n.title;
                    return N.a.createElement(
                      H,
                      {
                        className: w()('rdw-inline-dropdown', s),
                        optionWrapperClassName: w()(u),
                        onChange: a,
                        expanded: e,
                        doExpand: o,
                        doCollapse: i,
                        onExpandEvent: r,
                        'aria-label': 'rdw-inline-control',
                        title: p,
                      },
                      N.a.createElement('img', { src: v(n), alt: '' }),
                      n.options.map(function (t, e) {
                        return N.a.createElement(
                          K,
                          {
                            key: e,
                            value: t,
                            className: w()('rdw-inline-dropdownoption', n[t].className),
                            active: !0 === c[t] || ('MONOSPACE' === t && c.CODE),
                            title: n[t].title || l['components.controls.inline.'.concat(t)],
                          },
                          N.a.createElement('img', { src: n[t].icon, alt: '' })
                        );
                      })
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.config.inDropdown
                      ? this.renderInDropDown()
                      : this.renderInFlatList();
                  },
                },
              ]) && $(t.prototype, e),
              n && $(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          function rt(t) {
            return (rt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function it(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function ct(t, e) {
            return (ct = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function at(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = lt(o);
              if (r) {
                var n = lt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === rt(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function lt(t) {
            return (lt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          ot.propTypes = {
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            config: y.a.object,
            onChange: y.a.func,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var st = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && ct(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = at(i);
            function i(t) {
              var l;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
                ((l = r.call(this, t)).onExpandEvent = function () {
                  l.signalExpanded = !l.state.expanded;
                }),
                (l.expandCollapse = function () {
                  l.setState({ expanded: l.signalExpanded }), (l.signalExpanded = !1);
                }),
                (l.toggleInlineStyle = function (t) {
                  var e = 'monospace' === t ? 'CODE' : t.toUpperCase(),
                    n = l.props,
                    o = n.editorState,
                    r = n.onChange,
                    i = E.RichUtils.toggleInlineStyle(o, e);
                  if ('subscript' === t || 'superscript' === t) {
                    var c = 'subscript' === t ? 'SUPERSCRIPT' : 'SUBSCRIPT',
                      a = E.Modifier.removeInlineStyle(i.getCurrentContent(), i.getSelection(), c);
                    i = E.EditorState.push(i, a, 'change-inline-style');
                  }
                  i && r(i);
                }),
                (l.changeKeys = function (t) {
                  if (t) {
                    var n = {};
                    return (
                      h(t, function (t, e) {
                        n['CODE' === t ? 'monospace' : t.toLowerCase()] = e;
                      }),
                      n
                    );
                  }
                }),
                (l.doExpand = function () {
                  l.setState({ expanded: !0 });
                }),
                (l.doCollapse = function () {
                  l.setState({ expanded: !1 });
                });
              var e = l.props,
                n = e.editorState,
                o = e.modalHandler;
              return (
                (l.state = {
                  currentStyles: n ? l.changeKeys(Object(S.getSelectionInlineStyle)(n)) : {},
                }),
                o.registerCallBack(l.expandCollapse),
                l
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({
                        currentStyles: this.changeKeys(Object(S.getSelectionInlineStyle)(e)),
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.expanded,
                      i = o.currentStyles,
                      c = e.component || ot;
                    return N.a.createElement(c, {
                      config: e,
                      translations: n,
                      currentState: i,
                      expanded: r,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      onChange: this.toggleInlineStyle,
                    });
                  },
                },
              ]) && it(t.prototype, e),
              n && it(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          st.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          n(15);
          function ut(t) {
            return (ut =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function pt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function dt(t, e) {
            return (dt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function ft(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = yt(o);
              if (r) {
                var n = yt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === ut(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function yt(t) {
            return (yt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var mt = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && dt(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = ft(r);
            function r(t) {
              var e;
              return (
                (function (t, e) {
                  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                })(this, r),
                ((e = o.call(this, t)).getBlockTypes = function (t) {
                  return [
                    { label: 'Normal', displayName: t['components.controls.blocktype.normal'] },
                    { label: 'H1', displayName: t['components.controls.blocktype.h1'] },
                    { label: 'H2', displayName: t['components.controls.blocktype.h2'] },
                    { label: 'H3', displayName: t['components.controls.blocktype.h3'] },
                    { label: 'H4', displayName: t['components.controls.blocktype.h4'] },
                    { label: 'H5', displayName: t['components.controls.blocktype.h5'] },
                    { label: 'H6', displayName: t['components.controls.blocktype.h6'] },
                    {
                      label: 'Blockquote',
                      displayName: t['components.controls.blocktype.blockquote'],
                    },
                    { label: 'Code', displayName: t['components.controls.blocktype.code'] },
                  ];
                }),
                (e.state = { blockTypes: e.getBlockTypes(t.translations) }),
                e
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.translations;
                    e !== t.translations && this.setState({ blockTypes: this.getBlockTypes(e) });
                  },
                },
                {
                  key: 'renderFlat',
                  value: function (t) {
                    var e = this.props,
                      n = e.config.className,
                      o = e.onChange,
                      r = e.currentState.blockType;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-inline-wrapper', n) },
                      t.map(function (t, e) {
                        return N.a.createElement(
                          R,
                          { key: e, value: t.label, active: r === t.label, onClick: o },
                          t.displayName
                        );
                      })
                    );
                  },
                },
                {
                  key: 'renderInDropdown',
                  value: function (t) {
                    var e = this.props,
                      n = e.config,
                      o = n.className,
                      r = n.dropdownClassName,
                      i = n.title,
                      c = e.currentState.blockType,
                      a = e.expanded,
                      l = e.doExpand,
                      s = e.onExpandEvent,
                      u = e.doCollapse,
                      p = e.onChange,
                      d = e.translations,
                      f = this.state.blockTypes.filter(function (t) {
                        return t.label === c;
                      }),
                      y = f && f[0] && f[0].displayName;
                    return N.a.createElement(
                      'div',
                      { className: 'rdw-block-wrapper', 'aria-label': 'rdw-block-control' },
                      N.a.createElement(
                        H,
                        {
                          className: w()('rdw-block-dropdown', o),
                          optionWrapperClassName: w()(r),
                          onChange: p,
                          expanded: a,
                          doExpand: l,
                          doCollapse: u,
                          onExpandEvent: s,
                          title: i || d['components.controls.blocktype.blocktype'],
                        },
                        N.a.createElement(
                          'span',
                          null,
                          y || d['components.controls.blocktype.blocktype']
                        ),
                        t.map(function (t, e) {
                          return N.a.createElement(
                            K,
                            { active: c === t.label, value: t.label, key: e },
                            t.displayName
                          );
                        })
                      )
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var n = this.props.config,
                      t = n.inDropdown,
                      e = this.state.blockTypes.filter(function (t) {
                        var e = t.label;
                        return -1 < n.options.indexOf(e);
                      });
                    return t ? this.renderInDropdown(e) : this.renderFlat(e);
                  },
                },
              ]) && pt(t.prototype, e),
              n && pt(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          mt.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var gt = mt;
          function bt(t) {
            return (bt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function ht(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Mt(t, e) {
            return (Mt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function jt(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = vt(o);
              if (r) {
                var n = vt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === bt(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function vt(t) {
            return (vt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Nt = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Mt(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = jt(r);
            function r(t) {
              var c;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r),
                ((c = o.call(this, t)).onExpandEvent = function () {
                  c.signalExpanded = !c.state.expanded;
                }),
                (c.expandCollapse = function () {
                  c.setState({ expanded: c.signalExpanded }), (c.signalExpanded = !1);
                }),
                (c.blocksTypes = [
                  { label: 'Normal', style: 'unstyled' },
                  { label: 'H1', style: 'header-one' },
                  { label: 'H2', style: 'header-two' },
                  { label: 'H3', style: 'header-three' },
                  { label: 'H4', style: 'header-four' },
                  { label: 'H5', style: 'header-five' },
                  { label: 'H6', style: 'header-six' },
                  { label: 'Blockquote', style: 'blockquote' },
                  { label: 'Code', style: 'code' },
                ]),
                (c.doExpand = function () {
                  c.setState({ expanded: !0 });
                }),
                (c.doCollapse = function () {
                  c.setState({ expanded: !1 });
                }),
                (c.toggleBlockType = function (e) {
                  var t = c.blocksTypes.find(function (t) {
                      return t.label === e;
                    }).style,
                    n = c.props,
                    o = n.editorState,
                    r = n.onChange,
                    i = E.RichUtils.toggleBlockType(o, t);
                  i && r(i);
                });
              var e = t.editorState,
                n = t.modalHandler;
              return (
                (c.state = {
                  expanded: !1,
                  currentBlockType: e ? Object(S.getSelectedBlocksType)(e) : 'unstyled',
                }),
                n.registerCallBack(c.expandCollapse),
                c
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({ currentBlockType: Object(S.getSelectedBlocksType)(e) });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.expanded,
                      i = o.currentBlockType,
                      c = e.component || gt,
                      a = this.blocksTypes.find(function (t) {
                        return t.style === i;
                      });
                    return N.a.createElement(c, {
                      config: e,
                      translations: n,
                      currentState: { blockType: a && a.label },
                      onChange: this.toggleBlockType,
                      expanded: r,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                    });
                  },
                },
              ]) && ht(t.prototype, e),
              n && ht(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Nt.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          var Et = Nt;
          n(16);
          function St(t) {
            return (St =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function wt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Ct(t, e) {
            return (Ct = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Lt(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Dt(o);
              if (r) {
                var n = Dt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === St(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Dt(t) {
            return (Dt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var kt = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Ct(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = Lt(i);
            function i() {
              var t;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                n[o] = arguments[o];
              return (
                ((t = r.call.apply(r, [this].concat(n))).state = { defaultFontSize: void 0 }), t
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var t = document.getElementsByClassName('DraftEditor-root');
                    if (t && 0 < t.length) {
                      var e = window.getComputedStyle(t[0]).getPropertyValue('font-size');
                      (e = e.substring(0, e.length - 2)), this.setState({ defaultFontSize: e });
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.icon,
                      o = e.className,
                      r = e.dropdownClassName,
                      i = e.options,
                      c = e.title,
                      a = t.onChange,
                      l = t.expanded,
                      s = t.doCollapse,
                      u = t.onExpandEvent,
                      p = t.doExpand,
                      d = t.translations,
                      f = this.props.currentState.fontSize,
                      y = this.state.defaultFontSize;
                    return (
                      (y = Number(y)),
                      (f = f || (i && 0 <= i.indexOf(y) && y)),
                      N.a.createElement(
                        'div',
                        {
                          className: 'rdw-fontsize-wrapper',
                          'aria-label': 'rdw-font-size-control',
                        },
                        N.a.createElement(
                          H,
                          {
                            className: w()('rdw-fontsize-dropdown', o),
                            optionWrapperClassName: w()(r),
                            onChange: a,
                            expanded: l,
                            doExpand: p,
                            doCollapse: s,
                            onExpandEvent: u,
                            title: c || d['components.controls.fontsize.fontsize'],
                          },
                          f
                            ? N.a.createElement('span', null, f)
                            : N.a.createElement('img', { src: n, alt: '' }),
                          i.map(function (t, e) {
                            return N.a.createElement(
                              K,
                              {
                                className: 'rdw-fontsize-option',
                                active: f === t,
                                value: t,
                                key: e,
                              },
                              t
                            );
                          })
                        )
                      )
                    );
                  },
                },
              ]) && wt(t.prototype, e),
              n && wt(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          function Ot(t) {
            return (Ot =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function xt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function It(t, e) {
            return (It = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Tt(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = At(o);
              if (r) {
                var n = At(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Ot(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function At(t) {
            return (At = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          kt.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var zt = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && It(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = Tt(r);
            function r(t) {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r),
                ((i = o.call(this, t)).onExpandEvent = function () {
                  i.signalExpanded = !i.state.expanded;
                }),
                (i.expandCollapse = function () {
                  i.setState({ expanded: i.signalExpanded }), (i.signalExpanded = !1);
                }),
                (i.doExpand = function () {
                  i.setState({ expanded: !0 });
                }),
                (i.doCollapse = function () {
                  i.setState({ expanded: !1 });
                }),
                (i.toggleFontSize = function (t) {
                  var e = i.props,
                    n = e.editorState,
                    o = e.onChange,
                    r = Object(S.toggleCustomInlineStyle)(n, 'fontSize', t);
                  r && o(r);
                });
              var e = t.editorState,
                n = t.modalHandler;
              return (
                (i.state = {
                  expanded: void 0,
                  currentFontSize: e
                    ? Object(S.getSelectionCustomInlineStyle)(e, ['FONTSIZE']).FONTSIZE
                    : void 0,
                }),
                n.registerCallBack(i.expandCollapse),
                i
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({
                        currentFontSize: Object(S.getSelectionCustomInlineStyle)(e, ['FONTSIZE'])
                          .FONTSIZE,
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.expanded,
                      i = o.currentFontSize,
                      c = e.component || kt,
                      a = i && Number(i.substring(9));
                    return N.a.createElement(c, {
                      config: e,
                      translations: n,
                      currentState: { fontSize: a },
                      onChange: this.toggleFontSize,
                      expanded: r,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                    });
                  },
                },
              ]) && xt(t.prototype, e),
              n && xt(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          zt.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          n(17);
          function _t(t) {
            return (_t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Pt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Rt(t, e) {
            return (Rt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Ut(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Bt(o);
              if (r) {
                var n = Bt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === _t(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Bt(t) {
            return (Bt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Ft = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Rt(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = Ut(i);
            function i() {
              var t;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                n[o] = arguments[o];
              return (
                ((t = r.call.apply(r, [this].concat(n))).state = { defaultFontFamily: void 0 }), t
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var t = document.getElementsByClassName('DraftEditor-root');
                    if (t && 0 < t.length) {
                      var e = window.getComputedStyle(t[0]).getPropertyValue('font-family');
                      this.setState({ defaultFontFamily: e });
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.state.defaultFontFamily,
                      t = this.props,
                      n = t.config,
                      o = n.className,
                      r = n.dropdownClassName,
                      i = n.options,
                      c = n.title,
                      a = t.translations,
                      l = t.onChange,
                      s = t.expanded,
                      u = t.doCollapse,
                      p = t.onExpandEvent,
                      d = t.doExpand,
                      f = this.props.currentState.fontFamily;
                    return (
                      (f =
                        f ||
                        (i &&
                          e &&
                          i.some(function (t) {
                            return t.toLowerCase() === e.toLowerCase();
                          }) &&
                          e)),
                      N.a.createElement(
                        'div',
                        {
                          className: 'rdw-fontfamily-wrapper',
                          'aria-label': 'rdw-font-family-control',
                        },
                        N.a.createElement(
                          H,
                          {
                            className: w()('rdw-fontfamily-dropdown', o),
                            optionWrapperClassName: w()('rdw-fontfamily-optionwrapper', r),
                            onChange: l,
                            expanded: s,
                            doExpand: d,
                            doCollapse: u,
                            onExpandEvent: p,
                            title: c || a['components.controls.fontfamily.fontfamily'],
                          },
                          N.a.createElement(
                            'span',
                            { className: 'rdw-fontfamily-placeholder' },
                            f || a['components.controls.fontfamily.fontfamily']
                          ),
                          i.map(function (t, e) {
                            return N.a.createElement(K, { active: f === t, value: t, key: e }, t);
                          })
                        )
                      )
                    );
                  },
                },
              ]) && Pt(t.prototype, e),
              n && Pt(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          Ft.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var Yt = Ft;
          function Qt(t) {
            return (Qt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Ht(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Zt(t, e) {
            return (Zt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Wt(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Gt(o);
              if (r) {
                var n = Gt(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Qt(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Gt(t) {
            return (Gt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Jt = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Zt(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = Wt(r);
            function r(t) {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r),
                ((i = o.call(this, t)).onExpandEvent = function () {
                  i.signalExpanded = !i.state.expanded;
                }),
                (i.expandCollapse = function () {
                  i.setState({ expanded: i.signalExpanded }), (i.signalExpanded = !1);
                }),
                (i.doExpand = function () {
                  i.setState({ expanded: !0 });
                }),
                (i.doCollapse = function () {
                  i.setState({ expanded: !1 });
                }),
                (i.toggleFontFamily = function (t) {
                  var e = i.props,
                    n = e.editorState,
                    o = e.onChange,
                    r = Object(S.toggleCustomInlineStyle)(n, 'fontFamily', t);
                  r && o(r);
                });
              var e = t.editorState,
                n = t.modalHandler;
              return (
                (i.state = {
                  expanded: void 0,
                  currentFontFamily: e
                    ? Object(S.getSelectionCustomInlineStyle)(e, ['FONTFAMILY']).FONTFAMILY
                    : void 0,
                }),
                n.registerCallBack(i.expandCollapse),
                i
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({
                        currentFontFamily: Object(S.getSelectionCustomInlineStyle)(e, [
                          'FONTFAMILY',
                        ]).FONTFAMILY,
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.expanded,
                      i = o.currentFontFamily,
                      c = e.component || Yt,
                      a = i && i.substring(11);
                    return N.a.createElement(c, {
                      translations: n,
                      config: e,
                      currentState: { fontFamily: a },
                      onChange: this.toggleFontFamily,
                      expanded: r,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                    });
                  },
                },
              ]) && Ht(t.prototype, e),
              n && Ht(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Jt.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          n(18);
          function Vt(t) {
            return (Vt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function qt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Kt(t, e) {
            return (Kt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Xt(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = $t(o);
              if (r) {
                var n = $t(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Vt(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function $t(t) {
            return ($t = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var te = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Kt(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = Xt(i);
            function i() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
              return (
                ((e = r.call.apply(r, [this].concat(n))).options = [
                  'unordered',
                  'ordered',
                  'indent',
                  'outdent',
                ]),
                (e.toggleBlockType = function (t) {
                  (0, e.props.onChange)(t);
                }),
                (e.indent = function () {
                  (0, e.props.onChange)('indent');
                }),
                (e.outdent = function () {
                  (0, e.props.onChange)('outdent');
                }),
                e
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'renderInFlatList',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.currentState.listType,
                      o = t.translations,
                      r = t.indentDisabled,
                      i = t.outdentDisabled,
                      c = e.options,
                      a = e.unordered,
                      l = e.ordered,
                      s = e.indent,
                      u = e.outdent,
                      p = e.className;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-list-wrapper', p), 'aria-label': 'rdw-list-control' },
                      0 <= c.indexOf('unordered') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'unordered',
                            onClick: this.toggleBlockType,
                            className: w()(a.className),
                            active: 'unordered' === n,
                            title: a.title || o['components.controls.list.unordered'],
                          },
                          N.a.createElement('img', { src: a.icon, alt: '' })
                        ),
                      0 <= c.indexOf('ordered') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'ordered',
                            onClick: this.toggleBlockType,
                            className: w()(l.className),
                            active: 'ordered' === n,
                            title: l.title || o['components.controls.list.ordered'],
                          },
                          N.a.createElement('img', { src: l.icon, alt: '' })
                        ),
                      0 <= c.indexOf('indent') &&
                        N.a.createElement(
                          R,
                          {
                            onClick: this.indent,
                            disabled: r,
                            className: w()(s.className),
                            title: s.title || o['components.controls.list.indent'],
                          },
                          N.a.createElement('img', { src: s.icon, alt: '' })
                        ),
                      0 <= c.indexOf('outdent') &&
                        N.a.createElement(
                          R,
                          {
                            onClick: this.outdent,
                            disabled: i,
                            className: w()(u.className),
                            title: u.title || o['components.controls.list.outdent'],
                          },
                          N.a.createElement('img', { src: u.icon, alt: '' })
                        )
                    );
                  },
                },
                {
                  key: 'renderInDropDown',
                  value: function () {
                    var n = this,
                      t = this.props,
                      o = t.config,
                      e = t.expanded,
                      r = t.doCollapse,
                      i = t.doExpand,
                      c = t.onExpandEvent,
                      a = t.onChange,
                      l = t.currentState.listType,
                      s = t.translations,
                      u = o.options,
                      p = o.className,
                      d = o.dropdownClassName,
                      f = o.title;
                    return N.a.createElement(
                      H,
                      {
                        className: w()('rdw-list-dropdown', p),
                        optionWrapperClassName: w()(d),
                        onChange: a,
                        expanded: e,
                        doExpand: i,
                        doCollapse: r,
                        onExpandEvent: c,
                        'aria-label': 'rdw-list-control',
                        title: f || s['components.controls.list.list'],
                      },
                      N.a.createElement('img', { src: v(o), alt: '' }),
                      this.options
                        .filter(function (t) {
                          return 0 <= u.indexOf(t);
                        })
                        .map(function (t, e) {
                          return N.a.createElement(
                            K,
                            {
                              key: e,
                              value: t,
                              disabled: n.props[''.concat(t, 'Disabled')],
                              className: w()('rdw-list-dropdownOption', o[t].className),
                              active: l === t,
                              title: o[t].title || s['components.controls.list.'.concat(t)],
                            },
                            N.a.createElement('img', { src: o[t].icon, alt: '' })
                          );
                        })
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.config.inDropdown
                      ? this.renderInDropDown()
                      : this.renderInFlatList();
                  },
                },
              ]) && qt(t.prototype, e),
              n && qt(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          function ee(t) {
            return (ee =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function ne(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function oe(t, e) {
            return (oe = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function re(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = ie(o);
              if (r) {
                var n = ie(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === ee(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function ie(t) {
            return (ie = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          te.propTypes = {
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            config: y.a.object,
            onChange: y.a.func,
            currentState: y.a.object,
            translations: y.a.object,
            indentDisabled: y.a.bool,
            outdentDisabled: y.a.bool,
          };
          var ce = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && oe(t, e);
            })(c, f['Component']);
            var t,
              e,
              n,
              r = re(c);
            function c(t) {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, c),
                ((i = r.call(this, t)).onExpandEvent = function () {
                  i.signalExpanded = !i.state.expanded;
                }),
                (i.onChange = function (t) {
                  'unordered' === t
                    ? i.toggleBlockType('unordered-list-item')
                    : 'ordered' === t
                    ? i.toggleBlockType('ordered-list-item')
                    : 'indent' === t
                    ? i.adjustDepth(1)
                    : i.adjustDepth(-1);
                }),
                (i.expandCollapse = function () {
                  i.setState({ expanded: i.signalExpanded }), (i.signalExpanded = !1);
                }),
                (i.doExpand = function () {
                  i.setState({ expanded: !0 });
                }),
                (i.doCollapse = function () {
                  i.setState({ expanded: !1 });
                }),
                (i.toggleBlockType = function (t) {
                  var e = i.props,
                    n = e.onChange,
                    o = e.editorState,
                    r = E.RichUtils.toggleBlockType(o, t);
                  r && n(r);
                }),
                (i.adjustDepth = function (t) {
                  var e = i.props,
                    n = e.onChange,
                    o = e.editorState,
                    r = Object(S.changeDepth)(o, t, 4);
                  r && n(r);
                }),
                (i.isIndentDisabled = function () {
                  var t = i.props.editorState,
                    e = i.state.currentBlock,
                    n = Object(S.getBlockBeforeSelectedBlock)(t);
                  return (
                    !n ||
                    !Object(S.isListBlock)(e) ||
                    n.get('type') !== e.get('type') ||
                    n.get('depth') < e.get('depth')
                  );
                }),
                (i.isOutdentDisabled = function () {
                  var t = i.state.currentBlock;
                  return !t || !Object(S.isListBlock)(t) || t.get('depth') <= 0;
                });
              var e = i.props,
                n = e.editorState,
                o = e.modalHandler;
              return (
                (i.state = {
                  expanded: !1,
                  currentBlock: n ? Object(S.getSelectedBlock)(n) : void 0,
                }),
                o.registerCallBack(i.expandCollapse),
                i
              );
            }
            return (
              (t = c),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({ currentBlock: Object(S.getSelectedBlock)(e) });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t,
                      e = this.props,
                      n = e.config,
                      o = e.translations,
                      r = this.state,
                      i = r.expanded,
                      c = r.currentBlock,
                      a = n.component || te;
                    'unordered-list-item' === c.get('type')
                      ? (t = 'unordered')
                      : 'ordered-list-item' === c.get('type') && (t = 'ordered');
                    var l = this.isIndentDisabled(),
                      s = this.isOutdentDisabled();
                    return N.a.createElement(a, {
                      config: n,
                      translations: o,
                      currentState: { listType: t },
                      expanded: i,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      onChange: this.onChange,
                      indentDisabled: l,
                      outdentDisabled: s,
                    });
                  },
                },
              ]) && ne(t.prototype, e),
              n && ne(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              c
            );
          })();
          ce.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          n(19);
          function ae(t) {
            return (ae =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function le(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function se(t, e) {
            return (se = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function ue(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = pe(o);
              if (r) {
                var n = pe(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === ae(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function pe(t) {
            return (pe = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var de = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && se(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = ue(r);
            function r() {
              return (
                (function (t, e) {
                  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                })(this, r),
                o.apply(this, arguments)
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'renderInFlatList',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.options,
                      o = e.left,
                      r = e.center,
                      i = e.right,
                      c = e.justify,
                      a = e.className,
                      l = t.onChange,
                      s = t.currentState.textAlignment,
                      u = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: w()('rdw-text-align-wrapper', a),
                        'aria-label': 'rdw-textalign-control',
                      },
                      0 <= n.indexOf('left') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'left',
                            className: w()(o.className),
                            active: 'left' === s,
                            onClick: l,
                            title: o.title || u['components.controls.textalign.left'],
                          },
                          N.a.createElement('img', { src: o.icon, alt: '' })
                        ),
                      0 <= n.indexOf('center') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'center',
                            className: w()(r.className),
                            active: 'center' === s,
                            onClick: l,
                            title: r.title || u['components.controls.textalign.center'],
                          },
                          N.a.createElement('img', { src: r.icon, alt: '' })
                        ),
                      0 <= n.indexOf('right') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'right',
                            className: w()(i.className),
                            active: 'right' === s,
                            onClick: l,
                            title: i.title || u['components.controls.textalign.right'],
                          },
                          N.a.createElement('img', { src: i.icon, alt: '' })
                        ),
                      0 <= n.indexOf('justify') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'justify',
                            className: w()(c.className),
                            active: 'justify' === s,
                            onClick: l,
                            title: c.title || u['components.controls.textalign.justify'],
                          },
                          N.a.createElement('img', { src: c.icon, alt: '' })
                        )
                    );
                  },
                },
                {
                  key: 'renderInDropDown',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.expanded,
                      o = t.doExpand,
                      r = t.onExpandEvent,
                      i = t.doCollapse,
                      c = t.currentState.textAlignment,
                      a = t.onChange,
                      l = t.translations,
                      s = e.options,
                      u = e.left,
                      p = e.center,
                      d = e.right,
                      f = e.justify,
                      y = e.className,
                      m = e.dropdownClassName,
                      g = e.title;
                    return N.a.createElement(
                      H,
                      {
                        className: w()('rdw-text-align-dropdown', y),
                        optionWrapperClassName: w()(m),
                        onChange: a,
                        expanded: n,
                        doExpand: o,
                        doCollapse: i,
                        onExpandEvent: r,
                        'aria-label': 'rdw-textalign-control',
                        title: g || l['components.controls.textalign.textalign'],
                      },
                      N.a.createElement('img', { src: (c && e[c] && e[c].icon) || v(e), alt: '' }),
                      0 <= s.indexOf('left') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'left',
                            active: 'left' === c,
                            className: w()('rdw-text-align-dropdownOption', u.className),
                            title: u.title || l['components.controls.textalign.left'],
                          },
                          N.a.createElement('img', { src: u.icon, alt: '' })
                        ),
                      0 <= s.indexOf('center') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'center',
                            active: 'center' === c,
                            className: w()('rdw-text-align-dropdownOption', p.className),
                            title: p.title || l['components.controls.textalign.center'],
                          },
                          N.a.createElement('img', { src: p.icon, alt: '' })
                        ),
                      0 <= s.indexOf('right') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'right',
                            active: 'right' === c,
                            className: w()('rdw-text-align-dropdownOption', d.className),
                            title: d.title || l['components.controls.textalign.right'],
                          },
                          N.a.createElement('img', { src: d.icon, alt: '' })
                        ),
                      0 <= s.indexOf('justify') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'justify',
                            active: 'justify' === c,
                            className: w()('rdw-text-align-dropdownOption', f.className),
                            title: f.title || l['components.controls.textalign.justify'],
                          },
                          N.a.createElement('img', { src: f.icon, alt: '' })
                        )
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.config.inDropdown
                      ? this.renderInDropDown()
                      : this.renderInFlatList();
                  },
                },
              ]) && le(t.prototype, e),
              n && le(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          function fe(t) {
            return (fe =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function ye(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function me(t, e) {
            return (me = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function ge(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = be(o);
              if (r) {
                var n = be(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === fe(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function be(t) {
            return (be = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          de.propTypes = {
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            config: y.a.object,
            onChange: y.a.func,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var he = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && me(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              o = ge(i);
            function i(t) {
              var r;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
                ((r = o.call(this, t)).onExpandEvent = function () {
                  r.signalExpanded = !r.state.expanded;
                }),
                (r.expandCollapse = function () {
                  r.setState({ expanded: r.signalExpanded }), (r.signalExpanded = !1);
                }),
                (r.doExpand = function () {
                  r.setState({ expanded: !0 });
                }),
                (r.doCollapse = function () {
                  r.setState({ expanded: !1 });
                }),
                (r.addBlockAlignmentData = function (t) {
                  var e = r.props,
                    n = e.editorState,
                    o = e.onChange;
                  o(
                    r.state.currentTextAlignment !== t
                      ? Object(S.setBlockData)(n, { 'text-align': t })
                      : Object(S.setBlockData)(n, { 'text-align': void 0 })
                  );
                });
              var e = r.props.modalHandler;
              return (
                (r.state = { currentTextAlignment: void 0 }),
                e.registerCallBack(r.expandCollapse),
                r
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e !== t.editorState &&
                      this.setState({
                        currentTextAlignment: Object(S.getSelectedBlocksMetadata)(e).get(
                          'text-align'
                        ),
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.expanded,
                      i = o.currentTextAlignment,
                      c = e.component || de;
                    return N.a.createElement(c, {
                      config: e,
                      translations: n,
                      expanded: r,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      currentState: { textAlignment: i },
                      onChange: this.addBlockAlignmentData,
                    });
                  },
                },
              ]) && ye(t.prototype, e),
              n && ye(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          he.propTypes = {
            editorState: y.a.object.isRequired,
            onChange: y.a.func.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          n(20);
          function Me(t) {
            return (Me =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function je(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function ve(t, e) {
            return (ve = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Ne(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Ee(o);
              if (r) {
                var n = Ee(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Me(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Ee(t) {
            return (Ee = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Se = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && ve(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = Ne(r);
            function r() {
              var u;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((u = o.call.apply(o, [this].concat(e))).state = { currentStyle: 'color' }),
                (u.onChange = function (t) {
                  (0, u.props.onChange)(u.state.currentStyle, t);
                }),
                (u.setCurrentStyleColor = function () {
                  u.setState({ currentStyle: 'color' });
                }),
                (u.setCurrentStyleBgcolor = function () {
                  u.setState({ currentStyle: 'bgcolor' });
                }),
                (u.renderModal = function () {
                  var t = u.props,
                    e = t.config,
                    n = e.popupClassName,
                    o = e.colors,
                    r = t.currentState,
                    i = r.color,
                    c = r.bgColor,
                    a = t.translations,
                    l = u.state.currentStyle,
                    s = 'color' === l ? i : c;
                  return N.a.createElement(
                    'div',
                    { className: w()('rdw-colorpicker-modal', n), onClick: j },
                    N.a.createElement(
                      'span',
                      { className: 'rdw-colorpicker-modal-header' },
                      N.a.createElement(
                        'span',
                        {
                          className: w()('rdw-colorpicker-modal-style-label', {
                            'rdw-colorpicker-modal-style-label-active': 'color' === l,
                          }),
                          onClick: u.setCurrentStyleColor,
                        },
                        a['components.controls.colorpicker.text']
                      ),
                      N.a.createElement(
                        'span',
                        {
                          className: w()('rdw-colorpicker-modal-style-label', {
                            'rdw-colorpicker-modal-style-label-active': 'bgcolor' === l,
                          }),
                          onClick: u.setCurrentStyleBgcolor,
                        },
                        a['components.controls.colorpicker.background']
                      )
                    ),
                    N.a.createElement(
                      'span',
                      { className: 'rdw-colorpicker-modal-options' },
                      o.map(function (t, e) {
                        return N.a.createElement(
                          R,
                          {
                            value: t,
                            key: e,
                            className: 'rdw-colorpicker-option',
                            activeClassName: 'rdw-colorpicker-option-active',
                            active: s === t,
                            onClick: u.onChange,
                          },
                          N.a.createElement('span', {
                            style: { backgroundColor: t },
                            className: 'rdw-colorpicker-cube',
                          })
                        );
                      })
                    )
                  );
                }),
                u
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    this.props.expanded && !t.expanded && this.setState({ currentStyle: 'color' });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.icon,
                      o = e.className,
                      r = e.title,
                      i = t.expanded,
                      c = t.onExpandEvent,
                      a = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: 'rdw-colorpicker-wrapper',
                        'aria-haspopup': 'true',
                        'aria-expanded': i,
                        'aria-label': 'rdw-color-picker',
                        title: r || a['components.controls.colorpicker.colorpicker'],
                      },
                      N.a.createElement(
                        R,
                        { onClick: c, className: w()(o) },
                        N.a.createElement('img', { src: n, alt: '' })
                      ),
                      i ? this.renderModal() : void 0
                    );
                  },
                },
              ]) && je(t.prototype, e),
              n && je(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Se.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var we = Se;
          function Ce(t) {
            return (Ce =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Le(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function De(t, e) {
            return (De = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function ke(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Oe(o);
              if (r) {
                var n = Oe(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Ce(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Oe(t) {
            return (Oe = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var xe = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && De(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = ke(i);
            function i(t) {
              var c;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
                ((c = r.call(this, t)).state = {
                  expanded: !1,
                  currentColor: void 0,
                  currentBgColor: void 0,
                }),
                (c.onExpandEvent = function () {
                  c.signalExpanded = !c.state.expanded;
                }),
                (c.expandCollapse = function () {
                  c.setState({ expanded: c.signalExpanded }), (c.signalExpanded = !1);
                }),
                (c.doExpand = function () {
                  c.setState({ expanded: !0 });
                }),
                (c.doCollapse = function () {
                  c.setState({ expanded: !1 });
                }),
                (c.toggleColor = function (t, e) {
                  var n = c.props,
                    o = n.editorState,
                    r = n.onChange,
                    i = Object(S.toggleCustomInlineStyle)(o, t, e);
                  i && r(i), c.doCollapse();
                });
              var e = t.editorState,
                n = t.modalHandler,
                o = { expanded: !1, currentColor: void 0, currentBgColor: void 0 };
              return (
                e &&
                  ((o.currentColor = Object(S.getSelectionCustomInlineStyle)(e, ['COLOR']).COLOR),
                  (o.currentBgColor = Object(S.getSelectionCustomInlineStyle)(e, [
                    'BGCOLOR',
                  ]).BGCOLOR)),
                (c.state = o),
                n.registerCallBack(c.expandCollapse),
                c
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      e !== t.editorState &&
                      this.setState({
                        currentColor: Object(S.getSelectionCustomInlineStyle)(e, ['COLOR']).COLOR,
                        currentBgColor: Object(S.getSelectionCustomInlineStyle)(e, ['BGCOLOR'])
                          .BGCOLOR,
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.currentColor,
                      i = o.currentBgColor,
                      c = o.expanded,
                      a = e.component || we,
                      l = r && r.substring(6),
                      s = i && i.substring(8);
                    return N.a.createElement(a, {
                      config: e,
                      translations: n,
                      onChange: this.toggleColor,
                      expanded: c,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      currentState: { color: l, bgColor: s },
                    });
                  },
                },
              ]) && Le(t.prototype, e),
              n && Le(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          xe.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          var Ie = xe,
            Te = n(7),
            Ae = n.n(Te);
          n(26);
          function ze(t) {
            return (ze =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function _e(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Pe(t, e) {
            return (Pe = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Re(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Ue(o);
              if (r) {
                var n = Ue(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === ze(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Ue(t) {
            return (Ue = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Be = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Pe(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = Re(r);
            function r() {
              var c;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((c = o.call.apply(o, [this].concat(e))).state = {
                  showModal: !1,
                  linkTarget: '',
                  linkTitle: '',
                  linkTargetOption: c.props.config.defaultTargetOption,
                }),
                (c.removeLink = function () {
                  (0, c.props.onChange)('unlink');
                }),
                (c.addLink = function () {
                  var t = c.props.onChange,
                    e = c.state;
                  t('link', e.linkTitle, e.linkTarget, e.linkTargetOption);
                }),
                (c.updateValue = function (t) {
                  var e, n, o;
                  c.setState(
                    ((e = {}),
                    (n = ''.concat(t.target.name)),
                    (o = t.target.value),
                    n in e
                      ? Object.defineProperty(e, n, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = o),
                    e)
                  );
                }),
                (c.updateTargetOption = function (t) {
                  c.setState({ linkTargetOption: t.target.checked ? '_blank' : '_self' });
                }),
                (c.hideModal = function () {
                  c.setState({ showModal: !1 });
                }),
                (c.signalExpandShowModal = function () {
                  var t = c.props,
                    e = t.onExpandEvent,
                    n = t.currentState,
                    o = n.link,
                    r = n.selectionText,
                    i = c.state.linkTargetOption;
                  e(),
                    c.setState({
                      showModal: !0,
                      linkTarget: (o && o.target) || '',
                      linkTargetOption: (o && o.targetOption) || i,
                      linkTitle: (o && o.title) || r,
                    });
                }),
                (c.forceExpandAndShowModal = function () {
                  var t = c.props,
                    e = t.doExpand,
                    n = t.currentState,
                    o = n.link,
                    r = n.selectionText,
                    i = c.state.linkTargetOption;
                  e(),
                    c.setState({
                      showModal: !0,
                      linkTarget: o && o.target,
                      linkTargetOption: (o && o.targetOption) || i,
                      linkTitle: (o && o.title) || r,
                    });
                }),
                c
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    t.expanded &&
                      !this.props.expanded &&
                      this.setState({
                        showModal: !1,
                        linkTarget: '',
                        linkTitle: '',
                        linkTargetOption: this.props.config.defaultTargetOption,
                      });
                  },
                },
                {
                  key: 'renderAddLinkModal',
                  value: function () {
                    var t = this.props,
                      e = t.config.popupClassName,
                      n = t.doCollapse,
                      o = t.translations,
                      r = this.state,
                      i = r.linkTitle,
                      c = r.linkTarget,
                      a = r.linkTargetOption;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-link-modal', e), onClick: j },
                      N.a.createElement(
                        'label',
                        { className: 'rdw-link-modal-label', htmlFor: 'linkTitle' },
                        o['components.controls.link.linkTitle']
                      ),
                      N.a.createElement('input', {
                        id: 'linkTitle',
                        className: 'rdw-link-modal-input',
                        onChange: this.updateValue,
                        onBlur: this.updateValue,
                        name: 'linkTitle',
                        value: i,
                      }),
                      N.a.createElement(
                        'label',
                        { className: 'rdw-link-modal-label', htmlFor: 'linkTarget' },
                        o['components.controls.link.linkTarget']
                      ),
                      N.a.createElement('input', {
                        id: 'linkTarget',
                        className: 'rdw-link-modal-input',
                        onChange: this.updateValue,
                        onBlur: this.updateValue,
                        name: 'linkTarget',
                        value: c,
                      }),
                      N.a.createElement(
                        'label',
                        {
                          className: 'rdw-link-modal-target-option',
                          htmlFor: 'openLinkInNewWindow',
                        },
                        N.a.createElement('input', {
                          id: 'openLinkInNewWindow',
                          type: 'checkbox',
                          defaultChecked: '_blank' === a,
                          value: '_blank',
                          onChange: this.updateTargetOption,
                        }),
                        N.a.createElement(
                          'span',
                          null,
                          o['components.controls.link.linkTargetOption']
                        )
                      ),
                      N.a.createElement(
                        'span',
                        { className: 'rdw-link-modal-buttonsection' },
                        N.a.createElement(
                          'button',
                          {
                            className: 'rdw-link-modal-btn',
                            onClick: this.addLink,
                            disabled: !c || !i,
                          },
                          o['generic.add']
                        ),
                        N.a.createElement(
                          'button',
                          { className: 'rdw-link-modal-btn', onClick: n },
                          o['generic.cancel']
                        )
                      )
                    );
                  },
                },
                {
                  key: 'renderInFlatList',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.options,
                      o = e.link,
                      r = e.unlink,
                      i = e.className,
                      c = t.currentState,
                      a = t.expanded,
                      l = t.translations,
                      s = this.state.showModal;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-link-wrapper', i), 'aria-label': 'rdw-link-control' },
                      0 <= n.indexOf('link') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'unordered-list-item',
                            className: w()(o.className),
                            onClick: this.signalExpandShowModal,
                            'aria-haspopup': 'true',
                            'aria-expanded': s,
                            title: o.title || l['components.controls.link.link'],
                          },
                          N.a.createElement('img', { src: o.icon, alt: '' })
                        ),
                      0 <= n.indexOf('unlink') &&
                        N.a.createElement(
                          R,
                          {
                            disabled: !c.link,
                            value: 'ordered-list-item',
                            className: w()(r.className),
                            onClick: this.removeLink,
                            title: r.title || l['components.controls.link.unlink'],
                          },
                          N.a.createElement('img', { src: r.icon, alt: '' })
                        ),
                      a && s ? this.renderAddLinkModal() : void 0
                    );
                  },
                },
                {
                  key: 'renderInDropDown',
                  value: function () {
                    var t = this.props,
                      e = t.expanded,
                      n = t.onExpandEvent,
                      o = t.doCollapse,
                      r = t.doExpand,
                      i = t.onChange,
                      c = t.config,
                      a = t.currentState,
                      l = t.translations,
                      s = c.options,
                      u = c.link,
                      p = c.unlink,
                      d = c.className,
                      f = c.dropdownClassName,
                      y = c.title,
                      m = this.state.showModal;
                    return N.a.createElement(
                      'div',
                      {
                        className: 'rdw-link-wrapper',
                        'aria-haspopup': 'true',
                        'aria-label': 'rdw-link-control',
                        'aria-expanded': e,
                        title: y,
                      },
                      N.a.createElement(
                        H,
                        {
                          className: w()('rdw-link-dropdown', d),
                          optionWrapperClassName: w()(f),
                          onChange: i,
                          expanded: e && !m,
                          doExpand: r,
                          doCollapse: o,
                          onExpandEvent: n,
                        },
                        N.a.createElement('img', { src: v(c), alt: '' }),
                        0 <= s.indexOf('link') &&
                          N.a.createElement(
                            K,
                            {
                              onClick: this.forceExpandAndShowModal,
                              className: w()('rdw-link-dropdownoption', u.className),
                              title: u.title || l['components.controls.link.link'],
                            },
                            N.a.createElement('img', { src: u.icon, alt: '' })
                          ),
                        0 <= s.indexOf('unlink') &&
                          N.a.createElement(
                            K,
                            {
                              onClick: this.removeLink,
                              disabled: !a.link,
                              className: w()('rdw-link-dropdownoption', p.className),
                              title: p.title || l['components.controls.link.unlink'],
                            },
                            N.a.createElement('img', { src: p.icon, alt: '' })
                          )
                      ),
                      e && m ? this.renderAddLinkModal() : void 0
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.config.inDropdown
                      ? this.renderInDropDown()
                      : this.renderInFlatList();
                  },
                },
              ]) && _e(t.prototype, e),
              n && _e(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Be.propTypes = {
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            config: y.a.object,
            onChange: y.a.func,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var Fe = Be;
          function Ye(t) {
            return (Ye =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Qe(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function He(t, e) {
            return (He = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Ze(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = We(o);
              if (r) {
                var n = We(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Ye(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function We(t) {
            return (We = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function Ge(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ge(Object(n), !0).forEach(function (t) {
                    Ve(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Ge(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
            }
            return e;
          }
          function Ve(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function qe(t) {
            var e = Ke.match(t.target);
            return Je(Je({}, t), {}, { target: (e && e[0] && e[0].url) || t.target });
          }
          var Ke = Ae()(),
            Xe = (function () {
              !(function (t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError('Super expression must either be null or a function');
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, 'prototype', { writable: !1 }),
                  e && He(t, e);
              })(i, f['Component']);
              var t,
                e,
                n,
                r = Ze(i);
              function i(t) {
                var d;
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                })(this, i),
                  ((d = r.call(this, t)).onExpandEvent = function () {
                    d.signalExpanded = !d.state.expanded;
                  }),
                  (d.onChange = function (t, e, n, o) {
                    var r = d.props.config.linkCallback;
                    if ('link' === t) {
                      var i = (r || qe)({ title: e, target: n, targetOption: o });
                      d.addLink(i.title, i.target, i.targetOption);
                    } else d.removeLink();
                  }),
                  (d.getCurrentValues = function () {
                    var t = d.props.editorState,
                      e = d.state.currentEntity,
                      n = t.getCurrentContent(),
                      o = {};
                    if (e && 'LINK' === n.getEntity(e).get('type')) {
                      o.link = {};
                      var r = e && Object(S.getEntityRange)(t, e);
                      (o.link.target = e && n.getEntity(e).get('data').url),
                        (o.link.targetOption = e && n.getEntity(e).get('data').targetOption),
                        (o.link.title = r && r.text);
                    }
                    return (o.selectionText = Object(S.getSelectionText)(t)), o;
                  }),
                  (d.doExpand = function () {
                    d.setState({ expanded: !0 });
                  }),
                  (d.expandCollapse = function () {
                    d.setState({ expanded: d.signalExpanded }), (d.signalExpanded = !1);
                  }),
                  (d.doCollapse = function () {
                    d.setState({ expanded: !1 });
                  }),
                  (d.removeLink = function () {
                    var t = d.props,
                      e = t.editorState,
                      n = t.onChange,
                      o = d.state.currentEntity,
                      r = e.getSelection();
                    if (o) {
                      var i = Object(S.getEntityRange)(e, o);
                      (r = r.getIsBackward()
                        ? r.merge({ anchorOffset: i.end, focusOffset: i.start })
                        : r.merge({ anchorOffset: i.start, focusOffset: i.end })),
                        n(E.RichUtils.toggleLink(e, r, null));
                    }
                  }),
                  (d.addLink = function (t, e, n) {
                    var o = d.props,
                      r = o.editorState,
                      i = o.onChange,
                      c = d.state.currentEntity,
                      a = r.getSelection();
                    if (c) {
                      var l = Object(S.getEntityRange)(r, c);
                      a = a.getIsBackward()
                        ? a.merge({ anchorOffset: l.end, focusOffset: l.start })
                        : a.merge({ anchorOffset: l.start, focusOffset: l.end });
                    }
                    var s = r
                        .getCurrentContent()
                        .createEntity('LINK', 'MUTABLE', { url: e, targetOption: n })
                        .getLastCreatedEntityKey(),
                      u = E.Modifier.replaceText(
                        r.getCurrentContent(),
                        a,
                        ''.concat(t),
                        r.getCurrentInlineStyle(),
                        s
                      ),
                      p = E.EditorState.push(r, u, 'insert-characters');
                    (a = p
                      .getSelection()
                      .merge({
                        anchorOffset: a.get('anchorOffset') + t.length,
                        focusOffset: a.get('anchorOffset') + t.length,
                      })),
                      (p = E.EditorState.acceptSelection(p, a)),
                      (u = E.Modifier.insertText(
                        p.getCurrentContent(),
                        a,
                        ' ',
                        p.getCurrentInlineStyle(),
                        void 0
                      )),
                      i(E.EditorState.push(p, u, 'insert-characters')),
                      d.doCollapse();
                  });
                var e = d.props,
                  n = e.editorState,
                  o = e.modalHandler;
                return (
                  (d.state = {
                    expanded: !1,
                    link: void 0,
                    selectionText: void 0,
                    currentEntity: n ? Object(S.getSelectionEntity)(n) : void 0,
                  }),
                  o.registerCallBack(d.expandCollapse),
                  d
                );
              }
              return (
                (t = i),
                (e = [
                  {
                    key: 'componentDidUpdate',
                    value: function (t) {
                      var e = this.props.editorState;
                      e &&
                        e !== t.editorState &&
                        this.setState({ currentEntity: Object(S.getSelectionEntity)(e) });
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var t = this.props,
                        e = t.config,
                        n = t.translations,
                        o = this.state.expanded,
                        r = this.getCurrentValues(),
                        i = r.link,
                        c = r.selectionText,
                        a = e.component || Fe;
                      return N.a.createElement(a, {
                        config: e,
                        translations: n,
                        expanded: o,
                        onExpandEvent: this.onExpandEvent,
                        doExpand: this.doExpand,
                        doCollapse: this.doCollapse,
                        currentState: { link: i, selectionText: c },
                        onChange: this.onChange,
                      });
                    },
                  },
                ]) && Qe(t.prototype, e),
                n && Qe(t, n),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                i
              );
            })();
          Xe.propTypes = {
            editorState: y.a.object.isRequired,
            onChange: y.a.func.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          var $e = Xe;
          n(27);
          function tn(t) {
            return (tn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function en(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function nn(t, e) {
            return (nn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function on(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = rn(o);
              if (r) {
                var n = rn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === tn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function rn(t) {
            return (rn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var cn = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && nn(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              o = on(i);
            function i() {
              var r;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((r = o.call.apply(o, [this].concat(e))).state = {
                  embeddedLink: '',
                  height: r.props.config.defaultSize.height,
                  width: r.props.config.defaultSize.width,
                }),
                (r.onChange = function () {
                  var t = r.props.onChange,
                    e = r.state;
                  t(e.embeddedLink, e.height, e.width);
                }),
                (r.updateValue = function (t) {
                  var e, n, o;
                  r.setState(
                    ((e = {}),
                    (n = ''.concat(t.target.name)),
                    (o = t.target.value),
                    n in e
                      ? Object.defineProperty(e, n, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = o),
                    e)
                  );
                }),
                r
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props,
                      n = e.expanded,
                      o = e.config;
                    if (!n && t.expanded) {
                      var r = o.defaultSize,
                        i = r.height,
                        c = r.width;
                      this.setState({ embeddedLink: '', height: i, width: c });
                    }
                  },
                },
                {
                  key: 'rendeEmbeddedLinkModal',
                  value: function () {
                    var t = this.state,
                      e = t.embeddedLink,
                      n = t.height,
                      o = t.width,
                      r = this.props,
                      i = r.config.popupClassName,
                      c = r.doCollapse,
                      a = r.translations;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-embedded-modal', i), onClick: j },
                      N.a.createElement(
                        'div',
                        { className: 'rdw-embedded-modal-header' },
                        N.a.createElement(
                          'span',
                          { className: 'rdw-embedded-modal-header-option' },
                          a['components.controls.embedded.embeddedlink'],
                          N.a.createElement('span', {
                            className: 'rdw-embedded-modal-header-label',
                          })
                        )
                      ),
                      N.a.createElement(
                        'div',
                        { className: 'rdw-embedded-modal-link-section' },
                        N.a.createElement(
                          'span',
                          { className: 'rdw-embedded-modal-link-input-wrapper' },
                          N.a.createElement('input', {
                            className: 'rdw-embedded-modal-link-input',
                            placeholder: a['components.controls.embedded.enterlink'],
                            onChange: this.updateValue,
                            onBlur: this.updateValue,
                            value: e,
                            name: 'embeddedLink',
                          }),
                          N.a.createElement('span', { className: 'rdw-image-mandatory-sign' }, '*')
                        ),
                        N.a.createElement(
                          'div',
                          { className: 'rdw-embedded-modal-size' },
                          N.a.createElement(
                            'span',
                            null,
                            N.a.createElement('input', {
                              onChange: this.updateValue,
                              onBlur: this.updateValue,
                              value: n,
                              name: 'height',
                              className: 'rdw-embedded-modal-size-input',
                              placeholder: 'Height',
                            }),
                            N.a.createElement(
                              'span',
                              { className: 'rdw-image-mandatory-sign' },
                              '*'
                            )
                          ),
                          N.a.createElement(
                            'span',
                            null,
                            N.a.createElement('input', {
                              onChange: this.updateValue,
                              onBlur: this.updateValue,
                              value: o,
                              name: 'width',
                              className: 'rdw-embedded-modal-size-input',
                              placeholder: 'Width',
                            }),
                            N.a.createElement(
                              'span',
                              { className: 'rdw-image-mandatory-sign' },
                              '*'
                            )
                          )
                        )
                      ),
                      N.a.createElement(
                        'span',
                        { className: 'rdw-embedded-modal-btn-section' },
                        N.a.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'rdw-embedded-modal-btn',
                            onClick: this.onChange,
                            disabled: !e || !n || !o,
                          },
                          a['generic.add']
                        ),
                        N.a.createElement(
                          'button',
                          { type: 'button', className: 'rdw-embedded-modal-btn', onClick: c },
                          a['generic.cancel']
                        )
                      )
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.icon,
                      o = e.className,
                      r = e.title,
                      i = t.expanded,
                      c = t.onExpandEvent,
                      a = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: 'rdw-embedded-wrapper',
                        'aria-haspopup': 'true',
                        'aria-expanded': i,
                        'aria-label': 'rdw-embedded-control',
                      },
                      N.a.createElement(
                        R,
                        {
                          className: w()(o),
                          value: 'unordered-list-item',
                          onClick: c,
                          title: r || a['components.controls.embedded.embedded'],
                        },
                        N.a.createElement('img', { src: n, alt: '' })
                      ),
                      i ? this.rendeEmbeddedLinkModal() : void 0
                    );
                  },
                },
              ]) && en(t.prototype, e),
              n && en(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          cn.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            translations: y.a.object,
            doCollapse: y.a.func,
          };
          var an = cn;
          function ln(t) {
            return (ln =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function sn(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function un(t, e) {
            return (un = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function pn(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = dn(o);
              if (r) {
                var n = dn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === ln(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function dn(t) {
            return (dn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var fn = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && un(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = pn(r);
            function r() {
              var s;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((s = o.call.apply(o, [this].concat(e))).state = { expanded: !1 }),
                (s.onExpandEvent = function () {
                  s.signalExpanded = !s.state.expanded;
                }),
                (s.expandCollapse = function () {
                  s.setState({ expanded: s.signalExpanded }), (s.signalExpanded = !1);
                }),
                (s.doExpand = function () {
                  s.setState({ expanded: !0 });
                }),
                (s.doCollapse = function () {
                  s.setState({ expanded: !1 });
                }),
                (s.addEmbeddedLink = function (t, e, n) {
                  var o = s.props,
                    r = o.editorState,
                    i = o.onChange,
                    c = o.config.embedCallback,
                    a = c ? c(t) : t,
                    l = r
                      .getCurrentContent()
                      .createEntity('EMBEDDED_LINK', 'MUTABLE', { src: a, height: e, width: n })
                      .getLastCreatedEntityKey();
                  i(E.AtomicBlockUtils.insertAtomicBlock(r, l, ' ')), s.doCollapse();
                }),
                s
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.props.modalHandler.registerCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state.expanded,
                      r = e.component || an;
                    return N.a.createElement(r, {
                      config: e,
                      translations: n,
                      onChange: this.addEmbeddedLink,
                      expanded: o,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                    });
                  },
                },
              ]) && sn(t.prototype, e),
              n && sn(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          fn.propTypes = {
            editorState: y.a.object.isRequired,
            onChange: y.a.func.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          var yn = fn;
          n(28);
          function mn(t) {
            return (mn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function gn(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function bn(t, e) {
            return (bn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function hn(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Mn(o);
              if (r) {
                var n = Mn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === mn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Mn(t) {
            return (Mn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var jn = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && bn(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = hn(i);
            function i() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
              return (
                ((e = r.call.apply(r, [this].concat(n))).onChange = function (t) {
                  (0, e.props.onChange)(t.target.innerHTML);
                }),
                e
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'renderEmojiModal',
                  value: function () {
                    var n = this,
                      t = this.props.config,
                      e = t.popupClassName,
                      o = t.emojis;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-emoji-modal', e), onClick: j },
                      o.map(function (t, e) {
                        return N.a.createElement(
                          'span',
                          { key: e, className: 'rdw-emoji-icon', alt: '', onClick: n.onChange },
                          t
                        );
                      })
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.icon,
                      o = e.className,
                      r = e.title,
                      i = t.expanded,
                      c = t.onExpandEvent,
                      a = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: 'rdw-emoji-wrapper',
                        'aria-haspopup': 'true',
                        'aria-label': 'rdw-emoji-control',
                        'aria-expanded': i,
                        title: r || a['components.controls.emoji.emoji'],
                      },
                      N.a.createElement(
                        R,
                        { className: w()(o), value: 'unordered-list-item', onClick: c },
                        N.a.createElement('img', { src: n, alt: '' })
                      ),
                      i ? this.renderEmojiModal() : void 0
                    );
                  },
                },
              ]) && gn(t.prototype, e),
              n && gn(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          jn.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            translations: y.a.object,
          };
          var vn = jn;
          function Nn(t) {
            return (Nn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function En(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Sn(t, e) {
            return (Sn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function wn(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Cn(o);
              if (r) {
                var n = Cn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Nn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Cn(t) {
            return (Cn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Ln = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Sn(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = wn(r);
            function r() {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((i = o.call.apply(o, [this].concat(e))).state = { expanded: !1 }),
                (i.onExpandEvent = function () {
                  i.signalExpanded = !i.state.expanded;
                }),
                (i.expandCollapse = function () {
                  i.setState({ expanded: i.signalExpanded }), (i.signalExpanded = !1);
                }),
                (i.doExpand = function () {
                  i.setState({ expanded: !0 });
                }),
                (i.doCollapse = function () {
                  i.setState({ expanded: !1 });
                }),
                (i.addEmoji = function (t) {
                  var e = i.props,
                    n = e.editorState,
                    o = e.onChange,
                    r = E.Modifier.replaceText(
                      n.getCurrentContent(),
                      n.getSelection(),
                      t,
                      n.getCurrentInlineStyle()
                    );
                  o(E.EditorState.push(n, r, 'insert-characters')), i.doCollapse();
                }),
                i
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.props.modalHandler.registerCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state.expanded,
                      r = e.component || vn;
                    return N.a.createElement(r, {
                      config: e,
                      translations: n,
                      onChange: this.addEmoji,
                      expanded: o,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      onCollpase: this.closeModal,
                    });
                  },
                },
              ]) && En(t.prototype, e),
              n && En(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Ln.propTypes = {
            editorState: y.a.object.isRequired,
            onChange: y.a.func.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          function Dn() {
            return N.a.createElement(
              'div',
              { className: 'rdw-spinner' },
              N.a.createElement('div', { className: 'rdw-bounce1' }),
              N.a.createElement('div', { className: 'rdw-bounce2' }),
              N.a.createElement('div', { className: 'rdw-bounce3' })
            );
          }
          n(29), n(30);
          function kn(t) {
            return (kn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function On(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function xn(t, e) {
            return (xn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function In(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Tn(o);
              if (r) {
                var n = Tn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === kn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Tn(t) {
            return (Tn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var An = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && xn(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = In(r);
            function r() {
              var a;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r);
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return (
                ((a = o.call.apply(o, [this].concat(e))).state = {
                  imgSrc: '',
                  dragEnter: !1,
                  uploadHighlighted:
                    a.props.config.uploadEnabled && !!a.props.config.uploadCallback,
                  showImageLoading: !1,
                  height: a.props.config.defaultSize.height,
                  width: a.props.config.defaultSize.width,
                  alt: '',
                }),
                (a.onDragEnter = function (t) {
                  a.stopPropagation(t), a.setState({ dragEnter: !0 });
                }),
                (a.onImageDrop = function (t) {
                  var e, n;
                  t.preventDefault(),
                    t.stopPropagation(),
                    a.setState({ dragEnter: !1 }),
                    (n = t.dataTransfer.items
                      ? ((e = t.dataTransfer.items), !0)
                      : ((e = t.dataTransfer.files), !1));
                  for (var o = 0; o < e.length; o += 1)
                    if ((!n || 'file' === e[o].kind) && e[o].type.match('^image/')) {
                      var r = n ? e[o].getAsFile() : e[o];
                      a.uploadImage(r);
                    }
                }),
                (a.showImageUploadOption = function () {
                  a.setState({ uploadHighlighted: !0 });
                }),
                (a.addImageFromState = function () {
                  var t = a.state,
                    e = t.imgSrc,
                    n = t.alt,
                    o = a.state,
                    r = o.height,
                    i = o.width,
                    c = a.props.onChange;
                  isNaN(r) || (r += 'px'), isNaN(i) || (i += 'px'), c(e, r, i, n);
                }),
                (a.showImageURLOption = function () {
                  a.setState({ uploadHighlighted: !1 });
                }),
                (a.toggleShowImageLoading = function () {
                  var t = !a.state.showImageLoading;
                  a.setState({ showImageLoading: t });
                }),
                (a.updateValue = function (t) {
                  var e, n, o;
                  a.setState(
                    ((e = {}),
                    (n = ''.concat(t.target.name)),
                    (o = t.target.value),
                    n in e
                      ? Object.defineProperty(e, n, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = o),
                    e)
                  );
                }),
                (a.selectImage = function (t) {
                  t.target.files && 0 < t.target.files.length && a.uploadImage(t.target.files[0]);
                }),
                (a.uploadImage = function (t) {
                  a.toggleShowImageLoading(),
                    (0, a.props.config.uploadCallback)(t)
                      .then(function (t) {
                        var e = t.data;
                        a.setState({
                          showImageLoading: !1,
                          dragEnter: !1,
                          imgSrc: e.link || e.url,
                        }),
                          (a.fileUpload = !1);
                      })
                      .catch(function () {
                        a.setState({ showImageLoading: !1, dragEnter: !1 });
                      });
                }),
                (a.fileUploadClick = function (t) {
                  (a.fileUpload = !0), t.stopPropagation();
                }),
                (a.stopPropagation = function (t) {
                  a.fileUpload ? (a.fileUpload = !1) : (t.preventDefault(), t.stopPropagation());
                }),
                a
              );
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.config;
                    t.expanded && !this.props.expanded
                      ? this.setState({
                          imgSrc: '',
                          dragEnter: !1,
                          uploadHighlighted: e.uploadEnabled && !!e.uploadCallback,
                          showImageLoading: !1,
                          height: e.defaultSize.height,
                          width: e.defaultSize.width,
                          alt: '',
                        })
                      : (e.uploadCallback === t.config.uploadCallback &&
                          e.uploadEnabled === t.config.uploadEnabled) ||
                        this.setState({ uploadHighlighted: e.uploadEnabled && !!e.uploadCallback });
                  },
                },
                {
                  key: 'renderAddImageModal',
                  value: function () {
                    var t = this.state,
                      e = t.imgSrc,
                      n = t.uploadHighlighted,
                      o = t.showImageLoading,
                      r = t.dragEnter,
                      i = t.height,
                      c = t.width,
                      a = t.alt,
                      l = this.props,
                      s = l.config,
                      u = s.popupClassName,
                      p = s.uploadCallback,
                      d = s.uploadEnabled,
                      f = s.urlEnabled,
                      y = s.previewImage,
                      m = s.inputAccept,
                      g = s.alt,
                      b = l.doCollapse,
                      h = l.translations;
                    return N.a.createElement(
                      'div',
                      { className: w()('rdw-image-modal', u), onClick: this.stopPropagation },
                      N.a.createElement(
                        'div',
                        { className: 'rdw-image-modal-header' },
                        d &&
                          p &&
                          N.a.createElement(
                            'span',
                            {
                              onClick: this.showImageUploadOption,
                              className: 'rdw-image-modal-header-option',
                            },
                            h['components.controls.image.fileUpload'],
                            N.a.createElement('span', {
                              className: w()('rdw-image-modal-header-label', {
                                'rdw-image-modal-header-label-highlighted': n,
                              }),
                            })
                          ),
                        f &&
                          N.a.createElement(
                            'span',
                            {
                              onClick: this.showImageURLOption,
                              className: 'rdw-image-modal-header-option',
                            },
                            h['components.controls.image.byURL'],
                            N.a.createElement('span', {
                              className: w()('rdw-image-modal-header-label', {
                                'rdw-image-modal-header-label-highlighted': !n,
                              }),
                            })
                          )
                      ),
                      n
                        ? N.a.createElement(
                            'div',
                            { onClick: this.fileUploadClick },
                            N.a.createElement(
                              'div',
                              {
                                onDragEnter: this.onDragEnter,
                                onDragOver: this.stopPropagation,
                                onDrop: this.onImageDrop,
                                className: w()('rdw-image-modal-upload-option', {
                                  'rdw-image-modal-upload-option-highlighted': r,
                                }),
                              },
                              N.a.createElement(
                                'label',
                                {
                                  htmlFor: 'file',
                                  className: 'rdw-image-modal-upload-option-label',
                                },
                                y && e
                                  ? N.a.createElement('img', {
                                      src: e,
                                      alt: e,
                                      className: 'rdw-image-modal-upload-option-image-preview',
                                    })
                                  : e || h['components.controls.image.dropFileText']
                              )
                            ),
                            N.a.createElement('input', {
                              type: 'file',
                              id: 'file',
                              accept: m,
                              onChange: this.selectImage,
                              className: 'rdw-image-modal-upload-option-input',
                            })
                          )
                        : N.a.createElement(
                            'div',
                            { className: 'rdw-image-modal-url-section' },
                            N.a.createElement('input', {
                              className: 'rdw-image-modal-url-input',
                              placeholder: h['components.controls.image.enterlink'],
                              name: 'imgSrc',
                              onChange: this.updateValue,
                              onBlur: this.updateValue,
                              value: e,
                            }),
                            N.a.createElement(
                              'span',
                              { className: 'rdw-image-mandatory-sign' },
                              '*'
                            )
                          ),
                      g.present &&
                        N.a.createElement(
                          'div',
                          { className: 'rdw-image-modal-size' },
                          N.a.createElement(
                            'span',
                            { className: 'rdw-image-modal-alt-lbl' },
                            'Alt Text'
                          ),
                          N.a.createElement('input', {
                            onChange: this.updateValue,
                            onBlur: this.updateValue,
                            value: a,
                            name: 'alt',
                            className: 'rdw-image-modal-alt-input',
                            placeholder: 'alt',
                          }),
                          N.a.createElement(
                            'span',
                            { className: 'rdw-image-mandatory-sign' },
                            g.mandatory && '*'
                          )
                        ),
                      N.a.createElement(
                        'div',
                        { className: 'rdw-image-modal-size' },
                        '↕ ',
                        N.a.createElement('input', {
                          onChange: this.updateValue,
                          onBlur: this.updateValue,
                          value: i,
                          name: 'height',
                          className: 'rdw-image-modal-size-input',
                          placeholder: 'Height',
                        }),
                        N.a.createElement('span', { className: 'rdw-image-mandatory-sign' }, '*'),
                        ' ↔ ',
                        N.a.createElement('input', {
                          onChange: this.updateValue,
                          onBlur: this.updateValue,
                          value: c,
                          name: 'width',
                          className: 'rdw-image-modal-size-input',
                          placeholder: 'Width',
                        }),
                        N.a.createElement('span', { className: 'rdw-image-mandatory-sign' }, '*')
                      ),
                      N.a.createElement(
                        'span',
                        { className: 'rdw-image-modal-btn-section' },
                        N.a.createElement(
                          'button',
                          {
                            className: 'rdw-image-modal-btn',
                            onClick: this.addImageFromState,
                            disabled: !e || !i || !c || (g.mandatory && !a),
                          },
                          h['generic.add']
                        ),
                        N.a.createElement(
                          'button',
                          { className: 'rdw-image-modal-btn', onClick: b },
                          h['generic.cancel']
                        )
                      ),
                      o
                        ? N.a.createElement(
                            'div',
                            { className: 'rdw-image-modal-spinner' },
                            N.a.createElement(Dn, null)
                          )
                        : void 0
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.icon,
                      o = e.className,
                      r = e.title,
                      i = t.expanded,
                      c = t.onExpandEvent,
                      a = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: 'rdw-image-wrapper',
                        'aria-haspopup': 'true',
                        'aria-expanded': i,
                        'aria-label': 'rdw-image-control',
                      },
                      N.a.createElement(
                        R,
                        {
                          className: w()(o),
                          value: 'unordered-list-item',
                          onClick: c,
                          title: r || a['components.controls.image.image'],
                        },
                        N.a.createElement('img', { src: n, alt: '' })
                      ),
                      i ? this.renderAddImageModal() : void 0
                    );
                  },
                },
              ]) && On(t.prototype, e),
              n && On(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          An.propTypes = {
            expanded: y.a.bool,
            onExpandEvent: y.a.func,
            doCollapse: y.a.func,
            onChange: y.a.func,
            config: y.a.object,
            translations: y.a.object,
          };
          var zn = An;
          function _n(t) {
            return (_n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Pn(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Rn(t, e) {
            return (Rn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Un(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Bn(o);
              if (r) {
                var n = Bn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === _n(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Bn(t) {
            return (Bn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Fn = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Rn(t, e);
            })(r, f['Component']);
            var t,
              e,
              n,
              o = Un(r);
            function r(t) {
              var s;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, r),
                ((s = o.call(this, t)).onExpandEvent = function () {
                  s.signalExpanded = !s.state.expanded;
                }),
                (s.doExpand = function () {
                  s.setState({ expanded: !0 });
                }),
                (s.doCollapse = function () {
                  s.setState({ expanded: !1 });
                }),
                (s.expandCollapse = function () {
                  s.setState({ expanded: s.signalExpanded }), (s.signalExpanded = !1);
                }),
                (s.addImage = function (t, e, n, o) {
                  var r = s.props,
                    i = r.editorState,
                    c = r.onChange,
                    a = { src: t, height: e, width: n };
                  r.config.alt.present && (a.alt = o);
                  var l = i
                    .getCurrentContent()
                    .createEntity('IMAGE', 'MUTABLE', a)
                    .getLastCreatedEntityKey();
                  c(E.AtomicBlockUtils.insertAtomicBlock(i, l, ' ')), s.doCollapse();
                });
              var e = s.props.modalHandler;
              return (s.state = { expanded: !1 }), e.registerCallBack(s.expandCollapse), s;
            }
            return (
              (t = r),
              (e = [
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state.expanded,
                      r = e.component || zn;
                    return N.a.createElement(r, {
                      config: e,
                      translations: n,
                      onChange: this.addImage,
                      expanded: o,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                    });
                  },
                },
              ]) && Pn(t.prototype, e),
              n && Pn(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              r
            );
          })();
          Fn.propTypes = {
            editorState: y.a.object.isRequired,
            onChange: y.a.func.isRequired,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          function Yn(t) {
            var e = t.config,
              n = t.onChange,
              o = t.translations,
              r = e.icon,
              i = e.className,
              c = e.title;
            return N.a.createElement(
              'div',
              { className: 'rdw-remove-wrapper', 'aria-label': 'rdw-remove-control' },
              N.a.createElement(
                R,
                {
                  className: w()(i),
                  onClick: n,
                  title: c || o['components.controls.remove.remove'],
                },
                N.a.createElement('img', { src: r, alt: '' })
              )
            );
          }
          var Qn = Fn;
          n(31);
          Yn.propTypes = { onChange: y.a.func, config: y.a.object, translations: y.a.object };
          var Hn = Yn;
          function Zn(t) {
            return (Zn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Wn(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Gn(t, e) {
            return (Gn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Jn(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Vn(o);
              if (r) {
                var n = Vn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Zn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Vn(t) {
            return (Vn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var qn = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Gn(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = Jn(i);
            function i() {
              var n;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
                e[o] = arguments[o];
              return (
                ((n = r.call.apply(r, [this].concat(e))).state = { expanded: !1 }),
                (n.onExpandEvent = function () {
                  n.signalExpanded = !n.state.expanded;
                }),
                (n.expandCollapse = function () {
                  n.setState({ expanded: n.signalExpanded }), (n.signalExpanded = !1);
                }),
                (n.removeInlineStyles = function () {
                  var t = n.props,
                    e = t.editorState;
                  (0, t.onChange)(n.removeAllInlineStyles(e));
                }),
                (n.removeAllInlineStyles = function (n) {
                  var o = n.getCurrentContent();
                  return (
                    [
                      'BOLD',
                      'ITALIC',
                      'UNDERLINE',
                      'STRIKETHROUGH',
                      'MONOSPACE',
                      'SUPERSCRIPT',
                      'SUBSCRIPT',
                    ].forEach(function (t) {
                      o = E.Modifier.removeInlineStyle(o, n.getSelection(), t);
                    }),
                    h(
                      Object(S.getSelectionCustomInlineStyle)(n, [
                        'FONTSIZE',
                        'FONTFAMILY',
                        'COLOR',
                        'BGCOLOR',
                      ]),
                      function (t, e) {
                        e && (o = E.Modifier.removeInlineStyle(o, n.getSelection(), e));
                      }
                    ),
                    E.EditorState.push(n, o, 'change-inline-style')
                  );
                }),
                (n.doExpand = function () {
                  n.setState({ expanded: !0 });
                }),
                (n.doCollapse = function () {
                  n.setState({ expanded: !1 });
                }),
                n
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.props.modalHandler.registerCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state.expanded,
                      r = e.component || Hn;
                    return N.a.createElement(r, {
                      config: e,
                      translations: n,
                      expanded: o,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      onChange: this.removeInlineStyles,
                    });
                  },
                },
              ]) && Wn(t.prototype, e),
              n && Wn(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          qn.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object.isRequired,
            config: y.a.object,
            translations: y.a.object,
            modalHandler: y.a.object,
          };
          n(32);
          function Kn(t) {
            return (Kn =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Xn(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function $n(t, e) {
            return ($n = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function to(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = eo(o);
              if (r) {
                var n = eo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Kn(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function eo(t) {
            return (eo = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var no = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && $n(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = to(i);
            function i() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i);
              for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
              return (
                ((e = r.call.apply(r, [this].concat(n))).onChange = function (t) {
                  (0, e.props.onChange)(t);
                }),
                e
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'renderInDropDown',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.expanded,
                      o = t.doExpand,
                      r = t.onExpandEvent,
                      i = t.doCollapse,
                      c = t.currentState,
                      a = c.undoDisabled,
                      l = c.redoDisabled,
                      s = t.translations,
                      u = e.options,
                      p = e.undo,
                      d = e.redo,
                      f = e.className,
                      y = e.dropdownClassName,
                      m = e.title;
                    return N.a.createElement(
                      H,
                      {
                        className: w()('rdw-history-dropdown', f),
                        optionWrapperClassName: w()(y),
                        expanded: n,
                        doExpand: o,
                        doCollapse: i,
                        onExpandEvent: r,
                        'aria-label': 'rdw-history-control',
                        title: m || s['components.controls.history.history'],
                      },
                      N.a.createElement('img', { src: v(e), alt: '' }),
                      0 <= u.indexOf('undo') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'undo',
                            onClick: this.onChange,
                            disabled: a,
                            className: w()('rdw-history-dropdownoption', p.className),
                            title: p.title || s['components.controls.history.undo'],
                          },
                          N.a.createElement('img', { src: p.icon, alt: '' })
                        ),
                      0 <= u.indexOf('redo') &&
                        N.a.createElement(
                          K,
                          {
                            value: 'redo',
                            onClick: this.onChange,
                            disabled: l,
                            className: w()('rdw-history-dropdownoption', d.className),
                            title: d.title || s['components.controls.history.redo'],
                          },
                          N.a.createElement('img', { src: d.icon, alt: '' })
                        )
                    );
                  },
                },
                {
                  key: 'renderInFlatList',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = e.options,
                      o = e.undo,
                      r = e.redo,
                      i = e.className,
                      c = t.currentState,
                      a = c.undoDisabled,
                      l = c.redoDisabled,
                      s = t.translations;
                    return N.a.createElement(
                      'div',
                      {
                        className: w()('rdw-history-wrapper', i),
                        'aria-label': 'rdw-history-control',
                      },
                      0 <= n.indexOf('undo') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'undo',
                            onClick: this.onChange,
                            className: w()(o.className),
                            disabled: a,
                            title: o.title || s['components.controls.history.undo'],
                          },
                          N.a.createElement('img', { src: o.icon, alt: '' })
                        ),
                      0 <= n.indexOf('redo') &&
                        N.a.createElement(
                          R,
                          {
                            value: 'redo',
                            onClick: this.onChange,
                            className: w()(r.className),
                            disabled: l,
                            title: r.title || s['components.controls.history.redo'],
                          },
                          N.a.createElement('img', { src: r.icon, alt: '' })
                        )
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.config.inDropdown
                      ? this.renderInDropDown()
                      : this.renderInFlatList();
                  },
                },
              ]) && Xn(t.prototype, e),
              n && Xn(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          function oo(t) {
            return (oo =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function ro(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function io(t, e) {
            return (io = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function co(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = ao(o);
              if (r) {
                var n = ao(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === oo(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function ao(t) {
            return (ao = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          no.propTypes = {
            expanded: y.a.bool,
            doExpand: y.a.func,
            doCollapse: y.a.func,
            onExpandEvent: y.a.func,
            config: y.a.object,
            onChange: y.a.func,
            currentState: y.a.object,
            translations: y.a.object,
          };
          var lo = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && io(t, e);
            })(c, f['Component']);
            var t,
              e,
              n,
              r = co(c);
            function c(t) {
              var i;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, c),
                ((i = r.call(this, t)).onExpandEvent = function () {
                  i.signalExpanded = !i.state.expanded;
                }),
                (i.onChange = function (t) {
                  var e = i.props,
                    n = e.editorState,
                    o = e.onChange,
                    r = E.EditorState[t](n);
                  r && o(r);
                }),
                (i.doExpand = function () {
                  i.setState({ expanded: !0 });
                }),
                (i.doCollapse = function () {
                  i.setState({ expanded: !1 });
                });
              var e = {
                  expanded: !(i.expandCollapse = function () {
                    i.setState({ expanded: i.signalExpanded }), (i.signalExpanded = !1);
                  }),
                  undoDisabled: !1,
                  redoDisabled: !1,
                },
                n = t.editorState,
                o = t.modalHandler;
              return (
                n &&
                  ((e.undoDisabled = 0 === n.getUndoStack().size),
                  (e.redoDisabled = 0 === n.getRedoStack().size)),
                (i.state = e),
                o.registerCallBack(i.expandCollapse),
                i
              );
            }
            return (
              (t = c),
              (e = [
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    var e = this.props.editorState;
                    e &&
                      t.editorState !== e &&
                      this.setState({
                        undoDisabled: 0 === e.getUndoStack().size,
                        redoDisabled: 0 === e.getRedoStack().size,
                      });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.modalHandler.deregisterCallBack(this.expandCollapse);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.props,
                      e = t.config,
                      n = t.translations,
                      o = this.state,
                      r = o.undoDisabled,
                      i = o.redoDisabled,
                      c = o.expanded,
                      a = e.component || no;
                    return N.a.createElement(a, {
                      config: e,
                      translations: n,
                      currentState: { undoDisabled: r, redoDisabled: i },
                      expanded: c,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      onChange: this.onChange,
                    });
                  },
                },
              ]) && ro(t.prototype, e),
              n && ro(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              c
            );
          })();
          lo.propTypes = {
            onChange: y.a.func.isRequired,
            editorState: y.a.object,
            modalHandler: y.a.object,
            config: y.a.object,
            translations: y.a.object,
          };
          var so = {
              inline: st,
              blockType: Et,
              fontSize: zt,
              fontFamily: Jt,
              list: ce,
              textAlign: he,
              colorPicker: Ie,
              link: $e,
              embedded: yn,
              emoji: Ln,
              image: Qn,
              remove: qn,
              history: lo,
            },
            uo = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            po = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;
          function fo(t) {
            return String(t).replace(uo, '').match(po) ? t : '#';
          }
          n(33);
          function yo(t) {
            return (yo =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function mo(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function go(t, e) {
            return (go = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function bo(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = ho(o);
              if (r) {
                var n = ho(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === yo(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function ho(t) {
            return (ho = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function Mo(t, e, n) {
            t.findEntityRanges(function (t) {
              var e = t.getEntity();
              return null !== e && 'LINK' === n.getEntity(e).getType();
            }, e);
          }
          function jo(t) {
            var e,
              a = t.showOpenOptionOnHover;
            return (
              ((e = (function () {
                !(function (t, e) {
                  if ('function' != typeof e && null !== e)
                    throw new TypeError('Super expression must either be null or a function');
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && go(t, e);
                })(i, f['Component']);
                var t,
                  e,
                  n,
                  o = bo(i);
                function i() {
                  var r;
                  !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                  })(this, i);
                  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                  return (
                    ((r = o.call.apply(o, [this].concat(e))).state = { showPopOver: !1 }),
                    (r.openLink = function () {
                      var t = r.props,
                        e = t.entityKey,
                        n = t.contentState.getEntity(e).getData().url,
                        o = window.open(fo(n), 'blank');
                      o && o.focus();
                    }),
                    (r.toggleShowPopOver = function () {
                      var t = !r.state.showPopOver;
                      r.setState({ showPopOver: t });
                    }),
                    r
                  );
                }
                return (
                  (t = i),
                  (e = [
                    {
                      key: 'render',
                      value: function () {
                        var t = this.props,
                          e = t.children,
                          n = t.entityKey,
                          o = t.contentState.getEntity(n).getData(),
                          r = o.url,
                          i = o.targetOption,
                          c = this.state.showPopOver;
                        return N.a.createElement(
                          'span',
                          {
                            className: 'rdw-link-decorator-wrapper',
                            onMouseEnter: this.toggleShowPopOver,
                            onMouseLeave: this.toggleShowPopOver,
                          },
                          N.a.createElement('a', { href: fo(r), target: i }, e),
                          c && a
                            ? N.a.createElement('img', {
                                src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuMDcyIDBIOC45MTVhLjkyNS45MjUgMCAwIDAgMCAxLjg0OWgyLjkyNUw2Ljk2MSA2LjcyN2EuOTE4LjkxOCAwIDAgMC0uMjcuNjU0YzAgLjI0Ny4wOTUuNDguMjcuNjU0YS45MTguOTE4IDAgMCAwIC42NTQuMjcuOTE4LjkxOCAwIDAgMCAuNjUzLS4yN2w0Ljg4LTQuODh2Mi45MjZhLjkyNS45MjUgMCAwIDAgMS44NDggMFYuOTI0QS45MjUuOTI1IDAgMCAwIDE0LjA3MiAweiIvPjxwYXRoIGQ9Ik0xMC42MjMgMTMuNDExSDEuNTg1VjQuMzcyaDYuNzk4bDEuNTg0LTEuNTg0SC43OTJBLjc5Mi43OTIgMCAwIDAgMCAzLjU4djEwLjYyNGMwIC40MzcuMzU1Ljc5Mi43OTIuNzkyaDEwLjYyNGEuNzkyLjc5MiAwIDAgMCAuNzkyLS43OTJWNS4wMjlsLTEuNTg1IDEuNTg0djYuNzk4eiIvPjwvZz48L3N2Zz4=',
                                alt: '',
                                onClick: this.openLink,
                                className: 'rdw-link-decorator-icon',
                              })
                            : void 0
                        );
                      },
                    },
                  ]) && mo(t.prototype, e),
                  n && mo(t, n),
                  Object.defineProperty(t, 'prototype', { writable: !1 }),
                  i
                );
              })()).propTypes = {
                entityKey: y.a.string.isRequired,
                children: y.a.array,
                contentState: y.a.object,
              }),
              e
            );
          }
          n(34);
          function vo(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function No(t, e, n) {
            return (
              e && vo(t.prototype, e),
              n && vo(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          var Eo = No(function t(e) {
            var n = this;
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.getMentionComponent = function () {
                function t(t) {
                  var e = t.entityKey,
                    n = t.children,
                    o = t.contentState.getEntity(e).getData(),
                    r = o.url,
                    i = o.value;
                  return N.a.createElement(
                    'a',
                    { href: r || i, className: w()('rdw-mention-link', c) },
                    n
                  );
                }
                var c = n.className;
                return (
                  (t.propTypes = {
                    entityKey: y.a.number,
                    children: y.a.array,
                    contentState: y.a.object,
                  }),
                  t
                );
              }),
              (this.getMentionDecorator = function () {
                return { strategy: n.findMentionEntities, component: n.getMentionComponent() };
              }),
              (this.className = e);
          });
          Eo.prototype.findMentionEntities = function (t, e, n) {
            t.findEntityRanges(function (t) {
              var e = t.getEntity();
              return null !== e && 'MENTION' === n.getEntity(e).getType();
            }, e);
          };
          var So = Eo;
          n(35);
          function wo(t) {
            return (wo =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Co(t, e) {
            return (Co = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Lo(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Do(o);
              if (r) {
                var n = Do(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === wo(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Do(t) {
            return (Do = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function ko(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Oo(t, e, n) {
            return (
              e && ko(t.prototype, e),
              n && ko(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          function xo(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          var Io = Oo(function t(e) {
              var p = this;
              xo(this, t),
                (this.findSuggestionEntities = function (t, e) {
                  if (p.config.getEditorState()) {
                    var n = p.config,
                      o = n.separator,
                      r = n.trigger,
                      i = n.getSuggestions,
                      c = (0, n.getEditorState)().getSelection();
                    if (
                      c.get('anchorKey') === t.get('key') &&
                      c.get('anchorKey') === c.get('focusKey')
                    ) {
                      var a = t.getText(),
                        l = (a = a.substr(
                          0,
                          c.get('focusOffset') === a.length - 1
                            ? a.length
                            : c.get('focusOffset') + 1
                        )).lastIndexOf(o + r),
                        s = o + r;
                      if (((void 0 === l || l < 0) && a[0] === r && ((l = 0), (s = r)), 0 <= l)) {
                        var u = a.substr(l + s.length, a.length);
                        i().some(function (t) {
                          return (
                            !!t.value &&
                            (p.config.caseSensitive
                              ? 0 <= t.value.indexOf(u)
                              : 0 <= t.value.toLowerCase().indexOf(u && u.toLowerCase()))
                          );
                        }) && e(0 === l ? 0 : l + 1, a.length);
                      }
                    }
                  }
                }),
                (this.getSuggestionComponent = function () {
                  var t,
                    a = this.config;
                  return (
                    ((t = (function () {
                      !(function (t, e) {
                        if ('function' != typeof e && null !== e)
                          throw new TypeError('Super expression must either be null or a function');
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: { value: t, writable: !0, configurable: !0 },
                        })),
                          Object.defineProperty(t, 'prototype', { writable: !1 }),
                          e && Co(t, e);
                      })(r, f['Component']);
                      var o = Lo(r);
                      function r() {
                        var c;
                        xo(this, r);
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                          e[n] = arguments[n];
                        return (
                          ((c = o.call.apply(o, [this].concat(e))).state = {
                            style: { left: 15 },
                            activeOption: -1,
                            showSuggestions: !0,
                          }),
                          (c.onEditorKeyDown = function (t) {
                            var e = c.state.activeOption,
                              n = {};
                            'ArrowDown' === t.key
                              ? (t.preventDefault(),
                                e === c.filteredSuggestions.length - 1
                                  ? (n.activeOption = 0)
                                  : (n.activeOption = e + 1))
                              : 'ArrowUp' === t.key
                              ? (n.activeOption = e <= 0 ? c.filteredSuggestions.length - 1 : e - 1)
                              : 'Escape' === t.key
                              ? ((n.showSuggestions = !1), g())
                              : 'Enter' === t.key && c.addMention(),
                              c.setState(n);
                          }),
                          (c.onOptionMouseEnter = function (t) {
                            var e = t.target.getAttribute('data-index');
                            c.setState({ activeOption: e });
                          }),
                          (c.onOptionMouseLeave = function () {
                            c.setState({ activeOption: -1 });
                          }),
                          (c.setSuggestionReference = function (t) {
                            c.suggestion = t;
                          }),
                          (c.setDropdownReference = function (t) {
                            c.dropdown = t;
                          }),
                          (c.closeSuggestionDropdown = function () {
                            c.setState({ showSuggestions: !1 });
                          }),
                          (c.filteredSuggestions = []),
                          (c.filterSuggestions = function (t) {
                            var e = t.children[0].props.text.substr(1),
                              n = a.getSuggestions();
                            c.filteredSuggestions =
                              n &&
                              n.filter(function (t) {
                                return (
                                  !e ||
                                  0 === e.length ||
                                  (a.caseSensitive
                                    ? 0 <= t.value.indexOf(e)
                                    : 0 <= t.value.toLowerCase().indexOf(e && e.toLowerCase()))
                                );
                              });
                          }),
                          (c.addMention = function () {
                            var t = c.state.activeOption,
                              e = a.getEditorState(),
                              n = a.onChange,
                              o = a.separator,
                              r = a.trigger,
                              i = c.filteredSuggestions[t];
                            i &&
                              (function (t, e, n, o, r) {
                                var i = r.value,
                                  c = r.url,
                                  a = t
                                    .getCurrentContent()
                                    .createEntity('MENTION', 'IMMUTABLE', {
                                      text: ''.concat(o).concat(i),
                                      value: i,
                                      url: c,
                                    })
                                    .getLastCreatedEntityKey(),
                                  l = Object(S.getSelectedBlock)(t).getText(),
                                  s = t.getSelection().focusOffset,
                                  u = (l.lastIndexOf(n + o, s) || 0) + 1,
                                  p = !1;
                                l.length === u + 1 && (s = l.length), ' ' === l[s] && (p = !0);
                                var d = t.getSelection().merge({ anchorOffset: u, focusOffset: s }),
                                  f = E.EditorState.acceptSelection(t, d),
                                  y = E.Modifier.replaceText(
                                    f.getCurrentContent(),
                                    d,
                                    ''.concat(o).concat(i),
                                    f.getCurrentInlineStyle(),
                                    a
                                  );
                                (f = E.EditorState.push(f, y, 'insert-characters')),
                                  p ||
                                    ((d = f
                                      .getSelection()
                                      .merge({
                                        anchorOffset: u + i.length + o.length,
                                        focusOffset: u + i.length + o.length,
                                      })),
                                    (f = E.EditorState.acceptSelection(f, d)),
                                    (y = E.Modifier.insertText(
                                      f.getCurrentContent(),
                                      d,
                                      ' ',
                                      f.getCurrentInlineStyle(),
                                      void 0
                                    ))),
                                  e(E.EditorState.push(f, y, 'insert-characters'));
                              })(e, n, o, r, i);
                          }),
                          c
                        );
                      }
                      return (
                        Oo(r, [
                          {
                            key: 'componentDidMount',
                            value: function () {
                              var t,
                                e,
                                n,
                                o = a.getWrapperRef().getBoundingClientRect(),
                                r = this.suggestion.getBoundingClientRect(),
                                i = this.dropdown.getBoundingClientRect();
                              o.width < r.left - o.left + i.width ? (e = 15) : (t = 15),
                                o.bottom < i.bottom && (n = 0),
                                this.setState({ style: { left: t, right: e, bottom: n } }),
                                C.registerCallBack(this.onEditorKeyDown),
                                m(),
                                a.modalHandler.setSuggestionCallback(this.closeSuggestionDropdown),
                                this.filterSuggestions(this.props);
                            },
                          },
                          {
                            key: 'componentDidUpdate',
                            value: function (t) {
                              this.props.children !== t.children &&
                                (this.filterSuggestions(t), this.setState({ showSuggestions: !0 }));
                            },
                          },
                          {
                            key: 'componentWillUnmount',
                            value: function () {
                              C.deregisterCallBack(this.onEditorKeyDown),
                                g(),
                                a.modalHandler.removeSuggestionCallback();
                            },
                          },
                          {
                            key: 'render',
                            value: function () {
                              var n = this,
                                t = this.props.children,
                                e = this.state,
                                o = e.activeOption,
                                r = e.showSuggestions,
                                i = a.dropdownClassName,
                                c = a.optionClassName;
                              return N.a.createElement(
                                'span',
                                {
                                  className: 'rdw-suggestion-wrapper',
                                  ref: this.setSuggestionReference,
                                  onClick: a.modalHandler.onSuggestionClick,
                                  'aria-haspopup': 'true',
                                  'aria-label': 'rdw-suggestion-popup',
                                },
                                N.a.createElement('span', null, t),
                                r &&
                                  N.a.createElement(
                                    'span',
                                    {
                                      className: w()('rdw-suggestion-dropdown', i),
                                      contentEditable: 'false',
                                      suppressContentEditableWarning: !0,
                                      style: this.state.style,
                                      ref: this.setDropdownReference,
                                    },
                                    this.filteredSuggestions.map(function (t, e) {
                                      return N.a.createElement(
                                        'span',
                                        {
                                          key: e,
                                          spellCheck: !1,
                                          onClick: n.addMention,
                                          'data-index': e,
                                          onMouseEnter: n.onOptionMouseEnter,
                                          onMouseLeave: n.onOptionMouseLeave,
                                          className: w()('rdw-suggestion-option', c, {
                                            'rdw-suggestion-option-active': e === o,
                                          }),
                                        },
                                        t.text
                                      );
                                    })
                                  )
                              );
                            },
                          },
                        ]),
                        r
                      );
                    })()).propTypes = { children: y.a.array }),
                    t
                  );
                }.bind(this)),
                (this.getSuggestionDecorator = function () {
                  return {
                    strategy: p.findSuggestionEntities,
                    component: p.getSuggestionComponent(),
                  };
                });
              var n = e.separator,
                o = e.trigger,
                r = e.getSuggestions,
                i = e.onChange,
                c = e.getEditorState,
                a = e.getWrapperRef,
                l = e.caseSensitive,
                s = e.dropdownClassName,
                u = e.optionClassName,
                d = e.modalHandler;
              this.config = {
                separator: n,
                trigger: o,
                getSuggestions: r,
                onChange: i,
                getEditorState: c,
                getWrapperRef: a,
                caseSensitive: l,
                dropdownClassName: s,
                optionClassName: u,
                modalHandler: d,
              };
            }),
            To = function (t) {
              return [
                new So(t.mentionClassName).getMentionDecorator(),
                new Io(t).getSuggestionDecorator(),
              ];
            };
          n(36);
          function Ao(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function zo(t, e, n) {
            return (
              e && Ao(t.prototype, e),
              n && Ao(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          }
          function _o(t) {
            var e = t.block,
              n = t.contentState.getEntity(e.getEntityAt(0)).getData(),
              o = n.src,
              r = n.height,
              i = n.width;
            return N.a.createElement('iframe', {
              height: r,
              width: i,
              src: o,
              frameBorder: '0',
              allowFullScreen: !0,
              title: 'Wysiwyg Embedded Content',
            });
          }
          var Po = zo(function t(e) {
              var a = this;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.getHashtagComponent = function () {
                  function t(t) {
                    var e = t.children,
                      n = e[0].props.text;
                    return N.a.createElement(
                      'a',
                      { href: n, className: w()('rdw-hashtag-link', o) },
                      e
                    );
                  }
                  var o = a.className;
                  return (t.propTypes = { children: y.a.object }), t;
                }),
                (this.findHashtagEntities = function (t, e) {
                  for (var n = t.getText(), o = 0, r = 0; 0 < n.length && 0 <= o; )
                    if (
                      (n[0] === a.hashCharacter
                        ? ((r = o = 0), (n = n.substr(a.hashCharacter.length)))
                        : 0 <= (o = n.indexOf(a.separator + a.hashCharacter)) &&
                          ((n = n.substr(o + (a.separator + a.hashCharacter).length)),
                          (r += o + a.separator.length)),
                      0 <= o)
                    ) {
                      var i = 0 <= n.indexOf(a.separator) ? n.indexOf(a.separator) : n.length,
                        c = n.substr(0, i);
                      c &&
                        0 < c.length &&
                        (e(r, r + c.length + a.hashCharacter.length),
                        (r += a.hashCharacter.length));
                    }
                }),
                (this.getHashtagDecorator = function () {
                  return { strategy: a.findHashtagEntities, component: a.getHashtagComponent() };
                }),
                (this.className = e.className),
                (this.hashCharacter = e.hashCharacter || '#'),
                (this.separator = e.separator || ' ');
            }),
            Ro = function (t) {
              return new Po(t).getHashtagDecorator();
            };
          _o.propTypes = { block: y.a.object, contentState: y.a.object };
          var Uo = _o;
          n(37);
          function Bo(t) {
            return (Bo =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function Fo(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function Yo(t, e) {
            return (Yo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function Qo(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = Ho(o);
              if (r) {
                var n = Ho(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Bo(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function Ho(t) {
            return (Ho = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var Zo = function (d) {
              var t;
              return (
                ((t = (function () {
                  !(function (t, e) {
                    if ('function' != typeof e && null !== e)
                      throw new TypeError('Super expression must either be null or a function');
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(t, 'prototype', { writable: !1 }),
                      e && Yo(t, e);
                  })(r, f['Component']);
                  var t,
                    e,
                    n,
                    o = Qo(r);
                  function r() {
                    var i;
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function');
                    })(this, r);
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                      e[n] = arguments[n];
                    return (
                      ((i = o.call.apply(o, [this].concat(e))).state = { hovered: !1 }),
                      (i.setEntityAlignmentLeft = function () {
                        i.setEntityAlignment('left');
                      }),
                      (i.setEntityAlignmentRight = function () {
                        i.setEntityAlignment('right');
                      }),
                      (i.setEntityAlignmentCenter = function () {
                        i.setEntityAlignment('none');
                      }),
                      (i.setEntityAlignment = function (t) {
                        var e = i.props,
                          n = e.block,
                          o = e.contentState,
                          r = n.getEntityAt(0);
                        o.mergeEntityData(r, { alignment: t }),
                          d.onChange(
                            E.EditorState.push(d.getEditorState(), o, 'change-block-data')
                          ),
                          i.setState({ dummy: !0 });
                      }),
                      (i.toggleHovered = function () {
                        var t = !i.state.hovered;
                        i.setState({ hovered: t });
                      }),
                      i
                    );
                  }
                  return (
                    (t = r),
                    (e = [
                      {
                        key: 'renderAlignmentOptions',
                        value: function (t) {
                          return N.a.createElement(
                            'div',
                            {
                              className: w()('rdw-image-alignment-options-popup', {
                                'rdw-image-alignment-options-popup-right': 'right' === t,
                              }),
                            },
                            N.a.createElement(
                              R,
                              {
                                onClick: this.setEntityAlignmentLeft,
                                className: 'rdw-image-alignment-option',
                              },
                              'L'
                            ),
                            N.a.createElement(
                              R,
                              {
                                onClick: this.setEntityAlignmentCenter,
                                className: 'rdw-image-alignment-option',
                              },
                              'C'
                            ),
                            N.a.createElement(
                              R,
                              {
                                onClick: this.setEntityAlignmentRight,
                                className: 'rdw-image-alignment-option',
                              },
                              'R'
                            )
                          );
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var t = this.props,
                            e = t.block,
                            n = t.contentState,
                            o = this.state.hovered,
                            r = d.isReadOnly,
                            i = d.isImageAlignmentEnabled,
                            c = n.getEntity(e.getEntityAt(0)).getData(),
                            a = c.src,
                            l = c.alignment,
                            s = c.height,
                            u = c.width,
                            p = c.alt;
                          return N.a.createElement(
                            'span',
                            {
                              onMouseEnter: this.toggleHovered,
                              onMouseLeave: this.toggleHovered,
                              className: w()('rdw-image-alignment', {
                                'rdw-image-left': 'left' === l,
                                'rdw-image-right': 'right' === l,
                                'rdw-image-center': !l || 'none' === l,
                              }),
                            },
                            N.a.createElement(
                              'span',
                              { className: 'rdw-image-imagewrapper' },
                              N.a.createElement('img', {
                                src: a,
                                alt: p,
                                style: { height: s, width: u },
                              }),
                              !r() && o && i() ? this.renderAlignmentOptions(l) : void 0
                            )
                          );
                        },
                      },
                    ]) && Fo(t.prototype, e),
                    n && Fo(t, n),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    r
                  );
                })()).propTypes = { block: y.a.object, contentState: y.a.object }),
                t
              );
            },
            Wo = function (o, r) {
              return function (t) {
                if ('function' == typeof r) {
                  var e = r(t, o, o.getEditorState);
                  if (e) return e;
                }
                if ('atomic' === t.getType()) {
                  var n = o.getEditorState().getCurrentContent().getEntity(t.getEntityAt(0));
                  if (n && 'IMAGE' === n.type) return { component: Zo(o), editable: !1 };
                  if (n && 'EMBEDDED_LINK' === n.type) return { component: Uo, editable: !1 };
                }
              };
            },
            Go = {
              options: [
                'inline',
                'blockType',
                'fontSize',
                'fontFamily',
                'list',
                'textAlign',
                'colorPicker',
                'link',
                'embedded',
                'emoji',
                'image',
                'remove',
                'history',
              ],
              inline: {
                inDropdown: !1,
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                options: [
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  'monospace',
                  'superscript',
                  'subscript',
                ],
                bold: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMjM2IDBjMS42NTIgMCAyLjk0LjI5OCAzLjg2Ni44OTMuOTI1LjU5NSAxLjM4OCAxLjQ4NSAxLjM4OCAyLjY2OSAwIC42MDEtLjE3MyAxLjEzOS0uNTE2IDEuNjEtLjM0My40NzQtLjg0NC44My0xLjQ5OSAxLjA2OC44NDMuMTY3IDEuNDc0LjUyMyAxLjg5NSAxLjA3MS40MTkuNTUuNjMgMS4xODMuNjMgMS45MDMgMCAxLjI0NS0uNDQ0IDIuMTg3LTEuMzMgMi44MjUtLjg4Ni42NDEtMi4xNDQuOTYxLTMuNzY5Ljk2MUgwdi0yLjE2N2gxLjQ5NFYyLjE2N0gwVjBoNi4yMzZ6TTQuMzA4IDUuNDQ2aDIuMDI0Yy43NTIgMCAxLjMzLS4xNDMgMS43MzQtLjQzLjQwNS0uMjg1LjYwOC0uNzAxLjYwOC0xLjI1IDAtLjYtLjIwNC0xLjA0NC0uNjEyLTEuMzMtLjQwOC0uMjg2LTEuMDE2LS40MjctMS44MjYtLjQyN0g0LjMwOHYzLjQzN3ptMCAxLjgwNFYxMWgyLjU5M2MuNzQ3IDAgMS4zMTQtLjE1MiAxLjcwNy0uNDUyLjM5LS4zLjU4OC0uNzQ1LjU4OC0xLjMzNCAwLS42MzYtLjE2OC0xLjEyNC0uNS0xLjQ2LS4zMzYtLjMzNS0uODY0LS41MDQtMS41ODItLjUwNEg0LjMwOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
                italic: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcgM1YyaDR2MUg5Ljc1M2wtMyAxMEg4djFINHYtMWgxLjI0N2wzLTEwSDd6Ii8+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                underline: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTYuMDQ1IDJ2Ljk5Mkw0Ljc4NSAzdjUuMTcyYzAgLjg1OS4yNDMgMS41MTIuNzI3IDEuOTU3czEuMTI0LjY2OCAxLjkxOC42NjhjLjgzNiAwIDEuNTA5LS4yMjEgMi4wMTktLjY2NC41MTEtLjQ0Mi43NjYtMS4wOTYuNzY2LTEuOTYxVjNsLTEuMjYtLjAwOFYySDEzdi45OTJMMTEuNzM5IDN2NS4xNzJjMCAxLjIzNC0uMzk4IDIuMTgxLTEuMTk1IDIuODQtLjc5Ny42NTktMS44MzUuOTg4LTMuMTE0Ljk4OC0xLjI0MiAwLTIuMjQ4LS4zMjktMy4wMTctLjk4OC0uNzY5LS42NTktMS4xNTItMS42MDUtMS4xNTItMi44NFYzTDIgMi45OTJWMmg0LjA0NXpNMiAxM2gxMXYxSDJ6Ii8+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                strikethrough: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4wNCA1Ljk1NGg2LjIxNWE3LjQxMiA3LjQxMiAwIDAgMC0uNzk1LS40MzggMTEuOTA3IDExLjkwNyAwIDAgMC0xLjQ0Ny0uNTU3Yy0xLjE4OC0uMzQ4LTEuOTY2LS43MTEtMi4zMzQtMS4wODgtLjM2OC0uMzc3LS41NTItLjc3LS41NTItMS4xODEgMC0uNDk1LjE4Ny0uOTA2LjU2LTEuMjMyLjM4LS4zMzEuODg3LS40OTcgMS41MjMtLjQ5Ny42OCAwIDEuMjY2LjI1NSAxLjc1Ny43NjcuMjk1LjMxNS41ODIuODkxLjg2MSAxLjczbC4xMTcuMDE2LjcwMy4wNS4xLS4wMjRjLjAyOC0uMTUyLjA0Mi0uMjc5LjA0Mi0uMzggMC0uMzM3LS4wMzktLjg1Mi0uMTE3LTEuNTQ0YTkuMzc0IDkuMzc0IDAgMCAwLS4xNzYtLjk5NUM5Ljg4LjM3OSA5LjM4NS4yNDQgOS4wMTcuMTc2IDguMzY1LjA3IDcuODk5LjAxNiA3LjYyLjAxNmMtMS40NSAwLTIuNTQ1LjM1Ny0zLjI4NyAxLjA3MS0uNzQ3LjcyLTEuMTIgMS41ODktMS4xMiAyLjYwNyAwIC41MTEuMTMzIDEuMDQuNCAxLjU4Ni4xMjkuMjUzLjI3LjQ3OC40MjcuNjc0ek04LjI4IDguMTE0Yy41NzUuMjM2Ljk1Ny40MzYgMS4xNDcuNTk5LjQ1MS40MS42NzcuODUyLjY3NyAxLjMyNCAwIC4zODMtLjEzLjc0NS0uMzkzIDEuMDg4LS4yNS4zMzgtLjU5LjU4LTEuMDIuNzI2YTMuNDE2IDMuNDE2IDAgMCAxLTEuMTYzLjIyOGMtLjQwNyAwLS43NzUtLjA2Mi0xLjEwNC0uMTg2YTIuNjk2IDIuNjk2IDAgMCAxLS44NzgtLjQ4IDMuMTMzIDMuMTMzIDAgMCAxLS42Ny0uNzk0IDEuNTI3IDEuNTI3IDAgMCAxLS4xMDQtLjIyNyA1Ny41MjMgNTcuNTIzIDAgMCAwLS4xODgtLjQ3MyAyMS4zNzEgMjEuMzcxIDAgMCAwLS4yNTEtLjU5OWwtLjg1My4wMTd2LjM3MWwtLjAxNy4zMTNhOS45MiA5LjkyIDAgMCAwIDAgLjU3M2MuMDExLjI3LjAxNy43MDkuMDE3IDEuMzE2di4xMWMwIC4wNzkuMDIyLjE0LjA2Ny4xODUuMDgzLjA2OC4yODQuMTQ3LjYwMi4yMzdsMS4xNy4zMzdjLjQ1Mi4xMy45OTYuMTk0IDEuNjMyLjE5NC42ODYgMCAxLjI1Mi0uMDU5IDEuNjk4LS4xNzdhNC42OTQgNC42OTQgMCAwIDAgMS4yOC0uNTU3Yy40MDEtLjI1OS43MDUtLjQ4Ni45MTEtLjY4My4yNjgtLjI3Ni40NjYtLjU2OC41OTQtLjg3OGE0Ljc0IDQuNzQgMCAwIDAgLjM0My0xLjc4OGMwLS4yOTgtLjAyLS41NTctLjA1OC0uNzc2SDguMjgxek0xNC45MTQgNi41N2EuMjYuMjYgMCAwIDAtLjE5My0uMDc2SC4yNjhhLjI2LjI2IDAgMCAwLS4xOTMuMDc2LjI2NC4yNjQgMCAwIDAtLjA3NS4xOTR2LjU0YzAgLjA3OS4wMjUuMTQzLjA3NS4xOTRhLjI2LjI2IDAgMCAwIC4xOTMuMDc2SDE0LjcyYS4yNi4yNiAwIDAgMCAuMTkzLS4wNzYuMjY0LjI2NCAwIDAgMCAuMDc1LS4xOTR2LS41NGEuMjY0LjI2NCAwIDAgMC0uMDc1LS4xOTR6Ii8+PC9nPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
                monospace: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS4wMjEgMi45MDZjLjE4NiAxLjIxOS4zNzIgMS41LjM3MiAyLjcxOUMxLjM5MyA2LjM3NSAwIDcuMDMxIDAgNy4wMzF2LjkzOHMxLjM5My42NTYgMS4zOTMgMS40MDZjMCAxLjIxOS0uMTg2IDEuNS0uMzcyIDIuNzE5Qy43NDMgMTQuMDYzIDEuNzY0IDE1IDIuNjkzIDE1aDEuOTV2LTEuODc1cy0xLjY3Mi4xODgtMS42NzItLjkzOGMwLS44NDMuMTg2LS44NDMuMzcyLTIuNzE4LjA5My0uODQ0LS40NjQtMS41LTEuMDIyLTEuOTY5LjU1OC0uNDY5IDEuMTE1LTEuMDMxIDEuMDIyLTEuODc1QzMuMDY0IDMuNzUgMi45NyAzLjc1IDIuOTcgMi45MDZjMC0xLjEyNSAxLjY3Mi0xLjAzMSAxLjY3Mi0xLjAzMVYwaC0xLjk1QzEuNjcgMCAuNzQzLjkzOCAxLjAyIDIuOTA2ek0xMS45NzkgMi45MDZjLS4xODYgMS4yMTktLjM3MiAxLjUtLjM3MiAyLjcxOSAwIC43NSAxLjM5MyAxLjQwNiAxLjM5MyAxLjQwNnYuOTM4cy0xLjM5My42NTYtMS4zOTMgMS40MDZjMCAxLjIxOS4xODYgMS41LjM3MiAyLjcxOS4yNzggMS45NjktLjc0MyAyLjkwNi0xLjY3MiAyLjkwNmgtMS45NXYtMS44NzVzMS42NzIuMTg4IDEuNjcyLS45MzhjMC0uODQzLS4xODYtLjg0My0uMzcyLTIuNzE4LS4wOTMtLjg0NC40NjQtMS41IDEuMDIyLTEuOTY5LS41NTgtLjQ2OS0xLjExNS0xLjAzMS0xLjAyMi0xLjg3NS4xODYtMS44NzUuMzcyLTEuODc1LjM3Mi0yLjcxOSAwLTEuMTI1LTEuNjcyLTEuMDMxLTEuNjcyLTEuMDMxVjBoMS45NWMxLjAyMiAwIDEuOTUuOTM4IDEuNjcyIDIuOTA2eiIvPjwvZz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                superscript: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMzA1IDEwLjE2NUwxMS44NjUgMTVIOS4wNTdsLTMuMTkyLTMuNTM2TDIuNzQ2IDE1SDBsNC41MjMtNC44MzVMLjIxOCA1LjYwM2gyLjc3TDUuOTg2IDguOTEgOS4wMSA1LjYwM2gyLjY0OWwtNC4zNTQgNC41NjJ6bTYuMjM0LTMuMjY5bDEuODc5LTEuMzA2Yy42NC0uNDE2IDEuMDYyLS44MDEgMS4yNjQtMS4xNTcuMjAxLS4zNTYuMzAyLS43MzguMzAyLTEuMTQ4IDAtLjY2OS0uMjM3LTEuMjEtLjcxLTEuNjItLjQ3NC0uNDExLTEuMDk3LS42MTctMS44NjgtLjYxNy0uNzQ0IDAtMS4zNC4yMDgtMS43ODUuNjI0LS40NDcuNDE2LS42NyAxLjA0My0uNjcgMS44ODFoMS40MzZjMC0uNS4wOTQtLjg0Ni4yODEtMS4wMzguMTg4LS4xOTEuNDQ1LS4yODcuNzcyLS4yODdzLjU4NS4wOTcuNzc3LjI5MmMuMTkuMTk1LjI4Ni40MzcuMjg2LjcyNiAwIC4yOS0uMDg5LjU1LS4yNjYuNzg1cy0uNjcuNjI4LTEuNDc5IDEuMTg0Yy0uNjkxLjQ3Ny0xLjYyNy45MjctMS45MDggMS4zNWwuMDE0IDEuNTY5SDE3VjYuODk2aC0zLjQ2MXoiLz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                subscript: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjg2NiAxMS42NDZIOS4wNkw1Ljg2NyA3Ljk0MmwtMy4xMjEgMy43MDRIMGw0LjUyNC01LjA2NEwuMjE4IDEuODA0aDIuNzdsMyAzLjQ2NCAzLjAyMy0zLjQ2NGgyLjY1TDcuMzA2IDYuNTgybDQuNTYgNS4wNjR6bTEuNzI1IDIuMDU4bDEuODI3LTEuMzY4Yy42NC0uNDM1IDEuMDYyLS44NCAxLjI2NC0xLjIxMi4yMDItLjM3Mi4zMDItLjc3My4zMDItMS4yMDIgMC0uNy0uMjM3LTEuMjY2LS43MS0xLjY5Ni0uNDc0LS40MzEtMS4wOTctLjY0Ni0xLjg2OS0uNjQ2LS43NDQgMC0xLjM0LjIxOC0xLjc4NS42NTMtLjQ0Ni40MzYtLjY3IDEuMDkyLS42NyAxLjk3aDEuNDM2YzAtLjUyNC4wOTQtLjg4Ni4yODEtMS4wODcuMTg4LS4yLjQ0NS0uMzAxLjc3Mi0uMzAxcy41ODYuMTAyLjc3Ny4zMDZjLjE5LjIwNC4yODYuNDU4LjI4Ni43NiAwIC4zMDMtLjA4OC41NzctLjI2Ni44MjItLjE3Ny4yNDUtLjY3LjY1OC0xLjQ3OCAxLjI0LS42OTIuNS0xLjYyOC45NzEtMS45MSAxLjQxM0wxMS44NjQgMTVIMTd2LTEuMjk2aC0zLjQxeiIvPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
              },
              blockType: {
                inDropdown: !0,
                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                title: void 0,
              },
              fontSize: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuOTIxIDMuMTE5YS40MjcuNDI3IDAgMCAwIC4zMzUuMTY0aC45N2EuNDI2LjQyNiAwIDAgMCAuMzA0LS4xMy40NDEuNDQxIDAgMCAwIC4xMjUtLjMxbC4wMDItMi40MWEuNDM0LjQzNCAwIDAgMC0uNDMtLjQzMkguNDNBLjQzNC40MzQgMCAwIDAgMCAuNDR2Mi40MDZjMCAuMjQyLjE5Mi40MzguNDMuNDM4aC45N2MuMTMgMCAuMjU0LS4wNi4zMzUtLjE2NWwuNzMtLjkzSDUuNTR2MTEuMzZjMCAuMjQxLjE5Mi40MzcuNDMuNDM3aDEuNzE3Yy4yMzcgMCAuNDMtLjE5Ni40My0uNDM3VjIuMTg4aDMuMDdsLjczNC45MzF6TTEzLjg5OCAxMS4yNjNhLjQyNS40MjUgMCAwIDAtLjQ4Mi0uMTQ2bC0uNTQ3LjE5NFY5LjYxN2EuNDQyLjQ0MiAwIDAgMC0uMTI2LS4zMS40MjYuNDI2IDAgMCAwLS4zMDQtLjEyN2gtLjQyOWEuNDM0LjQzNCAwIDAgMC0uNDMuNDM3djEuNjk0bC0uNTQ3LS4xOTRhLjQyNS40MjUgMCAwIDAtLjQ4MS4xNDYuNDQ0LjQ0NCAwIDAgMC0uMDE2LjUxMmwxLjMzMiAyLjAxN2EuNDI3LjQyNyAwIDAgMCAuNzEzIDBsMS4zMzMtMi4wMTdhLjQ0NC40NDQgMCAwIDAtLjAxNi0uNTEyeiIvPjwvZz48L3N2Zz4=',
                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                title: void 0,
              },
              fontFamily: {
                options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                title: void 0,
              },
              list: {
                inDropdown: !1,
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                options: ['unordered', 'ordered', 'indent', 'outdent'],
                unordered: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS43MiAzLjQyN2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3LjAxIDEuNzIuMDFDLjc3LjAwOCAwIC43NzUgMCAxLjcxNWMwIC45NC43NzQgMS43MTEgMS43MiAxLjcxMXptMC0yLjYyNWMuNTEgMCAuOTIyLjQxMi45MjIuOTE0YS45Mi45MiAwIDAgMS0xLjg0MiAwIC45Mi45MiAwIDAgMSAuOTItLjkxNHpNMS43MiA4LjcwM2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3IDUuMjg3IDEuNzIgNS4yODdDLjc3IDUuMjg3IDAgNi4wNTIgMCA2Ljk5NXMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjJjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAwIDEtMS44NDIgMGMwLS41MDUuNDE1LS45MTQuOTItLjkxNHpNMS43MiAxMy45ODJjLjk1MSAwIDEuNzIyLS43NjggMS43MjItMS43MDggMC0uOTQzLS43NzQtMS43MDgtMS43MjEtMS43MDgtLjk0NyAwLTEuNzIxLjc2OC0xLjcyMSAxLjcwOHMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjVjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAxIDEtMS44NDIgMCAuOTIuOTIgMCAwIDEgLjkyLS45MTR6TTUuNzQ0IDIuMTE1aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OS40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDcuMzk0aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOThINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OC40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDEyLjY3aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjQuNC40IDAgMCAwIC40MDIuMzk4eiIvPjwvZz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                ordered: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4yMDIgMS40NjZoOC4xNWMuMzM4IDAgLjYxMi0uMzIyLjYxMi0uNzIgMC0uMzk3LS4yNzQtLjcyLS42MTItLjcyaC04LjE1Yy0uMzM4IDAtLjYxMS4zMjMtLjYxMS43MiAwIC4zOTguMjczLjcyLjYxLjcyek0xMi4zNTIgNS43ODNoLTguMTVjLS4zMzggMC0uNjExLjMyMi0uNjExLjcyIDAgLjM5Ny4yNzMuNzIuNjEuNzJoOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5OC0uMjc0LS43Mi0uNjEyLS43MnpNMTIuMzUyIDExLjU0aC04LjE1Yy0uMzM4IDAtLjYxMS4zMjItLjYxMS43MiAwIC4zOTYuMjczLjcxOS42MS43MTloOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5Ny0uMjc0LS43Mi0uNjEyLS43MnpNLjc2NyAxLjI0OXYxLjgwMmMwIC4xOTUuMTM2LjM0My4zMTUuMzQzLjE3NiAwIC4zMTUtLjE1LjMxNS0uMzQzVi4zNTZjMC0uMTktLjEzMy0uMzM5LS4zMDItLjMzOS0uMTQ4IDAtLjIyMy4xMTgtLjI0Ny4xNTZhLjIyOC4yMjggMCAwIDAtLjAwMy4wMDVMLjU3OS42MjFhLjQ3NC40NzQgMCAwIDAtLjA5OC4yNzNjMCAuMTk0LjEyOC4zNTEuMjg2LjM1NXpNLjM1MiA4LjE5SDEuNTVjLjE1NyAwIC4yODUtLjE2Mi4yODUtLjM2MiAwLS4xOTgtLjEyOC0uMzU5LS4yODUtLjM1OUguNjh2LS4wMDZjMC0uMTA3LjIxLS4yODEuMzc4LS40MjIuMzM2LS4yNzguNzUzLS42MjUuNzUzLTEuMjI2IDAtLjU3LS4zNzYtMS0uODc0LTEtLjQ3NyAwLS44MzYuMzg1LS44MzYuODk3IDAgLjI5Ny4xNjQuNDAyLjMwNS40MDIuMiAwIC4zMjEtLjE3Ni4zMjEtLjM0NiAwLS4xMDYuMDIzLS4yMjguMjA0LS4yMjguMjQzIDAgLjI1LjI1NC4yNS4yODMgMCAuMjI4LS4yNTIuNDQyLS40OTUuNjQ5LS4zMDEuMjU1LS42NDIuNTQ0LS42NDIuOTkydi4zODRjMCAuMjA1LjE1OS4zNDMuMzA4LjM0M3pNMS43NyAxMC41NDNjMC0uNTkyLS4yOTYtLjkzMS0uODE0LS45MzEtLjY4IDAtLjg1OS41Ny0uODU5Ljg3MiAwIC4zNTEuMjIyLjM5LjMxOC4zOS4xODUgMCAuMzEtLjE0OC4zMS0uMzY2IDAtLjA4NC4wMjYtLjE4MS4yMjQtLjE4MS4xNDIgMCAuMi4wMjQuMi4yNjcgMCAuMjM3LS4wNDMuMjYzLS4yMTMuMjYzLS4xNjQgMC0uMjg4LjE1Mi0uMjg4LjM1NCAwIC4yLjEyNS4zNS4yOTEuMzUuMjI1IDAgLjI3LjEwOC4yNy4yODN2LjA3NWMwIC4yOTQtLjA5Ny4zNS0uMjc3LjM1LS4yNDggMC0uMjY3LS4xNS0uMjY3LS4xOTcgMC0uMTc0LS4wOTgtLjM1LS4zMTctLjM1LS4xOTIgMC0uMzA3LjE0MS0uMzA3LjM3OCAwIC40My4zMTMuODg4Ljg5NS44ODguNTY0IDAgLjkwMS0uNC45MDEtMS4wN3YtLjA3NGMwLS4yNzQtLjA3NC0uNTAyLS4yMTQtLjY2Ni4wOTYtLjE2My4xNDgtLjM4LjE0OC0uNjM1eiIvPjwvZz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                indent: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS43MTYgMy4yMTFIMTd2MS4xOTdINS43MTZ6TTAgLjAyaDE3djEuMTk3SDB6TTAgMTIuNzgzaDE3djEuMTk3SDB6TTUuNzE2IDkuNTkzSDE3djEuMTk3SDUuNzE2ek01LjcxNiA2LjQwMkgxN3YxLjE5N0g1LjcxNnpNLjE4NyA5LjQ5MUwyLjUyIDcgLjE4NyA0LjUwOXoiLz48L2c+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                outdent: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4zOTYgMy4xOTNoMTAuNTczVjQuMzlINS4zOTZ6TS4wMzkuMDAzaDE1LjkzVjEuMkguMDM5ek0uMDM5IDEyLjc2NmgxNS45M3YxLjE5N0guMDM5ek01LjM5NiA5LjU3NWgxMC41NzN2MS4xOTdINS4zOTZ6TTUuMzk2IDYuMzg0aDEwLjU3M3YxLjE5N0g1LjM5NnpNMi4xODcgNC40OTFMMCA2Ljk4M2wyLjE4NyAyLjQ5MXoiLz48L2c+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                title: void 0,
              },
              textAlign: {
                inDropdown: !1,
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                options: ['left', 'center', 'right', 'justify'],
                left: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOC40OTMgMTQuODg3SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4IDEwLjE2MkguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1M2gxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUzek04LjQ5MyA1LjQzNUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOC43MDlILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTJoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnoiLz48L2c+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                center: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuNTU2IDE0Ljg4N0gzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTggMTAuMTYySC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUzaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6TTExLjU1NiA1LjQzNUgzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTguNzA5SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTJ6Ii8+PC9nPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
                right: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjE4IDE0Ljg4N0g2LjQ1YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOCAxMC4xNjJILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTNoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1M3pNMTQuNjE4IDUuNDM1SDYuNDVhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4LjcwOUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1MmgxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyeiIvPjwvZz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                justify: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjIgMTQuODg4SC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgMTAuMTYySC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgNS40MzZILjMyNWEuMzI2LjMyNiAwIDAgMSAwLS42NTJIMTQuNjJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42Mi43MUguMzI1YS4zMjYuMzI2IDAgMCAxIDAtLjY1M0gxNC42MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6Ii8+PC9nPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
                title: void 0,
              },
              colorPicker: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNDA2LjU4NWExLjk5OCAxLjk5OCAwIDAgMC0yLjgyNSAwbC0uNTQuNTRhLjc0MS43NDEgMCAxIDAtMS4wNDggMS4wNDhsLjE3NS4xNzUtNS44MjYgNS44MjUtMi4wMjIgMi4wMjNhLjkxLjkxIDAgMCAwLS4yNjYuNjAybC0uMDA1LjEwOHYuMDAybC0uMDgxIDEuODI5YS4zMDIuMzAyIDAgMCAwIC4zMDIuMzE2aC4wMTNsLjk3LS4wNDQuNTkyLS4wMjYuMjY4LS4wMTJjLjI5Ny0uMDEzLjU3OS0uMTM3Ljc5LS4zNDdsNy43Ny03Ljc3LjE0Ni4xNDRhLjc0Ljc0IDAgMCAwIDEuMDQ4IDBjLjI5LS4yOS4yOS0uNzU5IDAtMS4wNDhsLjU0LS41NGMuNzgtLjc4Ljc4LTIuMDQ0IDAtMi44MjV6TTguNzk1IDcuMzMzbC0yLjczLjUxNSA0LjQ1Mi00LjQ1MiAxLjEwOCAxLjEwNy0yLjgzIDIuODN6TTIuMDggMTMuNjczYy0xLjE0OCAwLTIuMDguMjk1LTIuMDguNjYgMCAuMzYzLjkzMi42NTggMi4wOC42NTggMS4xNSAwIDIuMDgtLjI5NCAyLjA4LS42NTkgMC0uMzY0LS45My0uNjU5LTIuMDgtLjY1OXoiLz48L2c+PC9zdmc+',
                className: void 0,
                component: void 0,
                popupClassName: void 0,
                colors: [
                  'rgb(97,189,109)',
                  'rgb(26,188,156)',
                  'rgb(84,172,210)',
                  'rgb(44,130,201)',
                  'rgb(147,101,184)',
                  'rgb(71,85,119)',
                  'rgb(204,204,204)',
                  'rgb(65,168,95)',
                  'rgb(0,168,133)',
                  'rgb(61,142,185)',
                  'rgb(41,105,176)',
                  'rgb(85,57,130)',
                  'rgb(40,50,78)',
                  'rgb(0,0,0)',
                  'rgb(247,218,100)',
                  'rgb(251,160,38)',
                  'rgb(235,107,86)',
                  'rgb(226,80,65)',
                  'rgb(163,143,132)',
                  'rgb(239,239,239)',
                  'rgb(255,255,255)',
                  'rgb(250,197,28)',
                  'rgb(243,121,52)',
                  'rgb(209,72,65)',
                  'rgb(184,49,47)',
                  'rgb(124,112,107)',
                  'rgb(209,213,216)',
                ],
                title: void 0,
              },
              link: {
                inDropdown: !1,
                className: void 0,
                component: void 0,
                popupClassName: void 0,
                dropdownClassName: void 0,
                showOpenOptionOnHover: !0,
                defaultTargetOption: '_self',
                options: ['link', 'unlink'],
                link: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk2Ny45NUEzLjIyNiAzLjIyNiAwIDAgMCAxMS42Ny4wMDJjLS44NyAwLTEuNjg2LjMzNy0yLjI5Ny45NDhMNy4xMDUgMy4yMThBMy4yNDcgMy4yNDcgMCAwIDAgNi4yNCA2LjI0YTMuMjI1IDMuMjI1IDAgMCAwLTMuMDIyLjg2NUwuOTUgOS4zNzNhMy4yNTMgMy4yNTMgMCAwIDAgMCA0LjU5NCAzLjIyNiAzLjIyNiAwIDAgMCAyLjI5Ny45NDhjLjg3IDAgMS42ODYtLjMzNiAyLjI5OC0uOTQ4TDcuODEyIDExLjdhMy4yNDcgMy4yNDcgMCAwIDAgLjg2NS0zLjAyMyAzLjIyNSAzLjIyNSAwIDAgMCAzLjAyMi0uODY1bDIuMjY4LTIuMjY3YTMuMjUyIDMuMjUyIDAgMCAwIDAtNC41OTV6TTcuMTA1IDEwLjk5M0w0LjgzNyAxMy4yNmEyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NSAyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LS42NTUgMi4yNTIgMi4yNTIgMCAwIDEgMC0zLjE4bDIuMjY4LTIuMjY4YTIuMjMyIDIuMjMyIDAgMCAxIDEuNTktLjY1NWMuNDMgMCAuODQxLjEyIDEuMTk1LjM0M0w0Ljc3MiA5LjQzOGEuNS41IDAgMSAwIC43MDcuNzA3bDEuOTM5LTEuOTM4Yy41NDUuODY4LjQ0MiAyLjAzLS4zMTMgMi43ODV6bTYuMTU1LTYuMTU1bC0yLjI2OCAyLjI2N2EyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NWMtLjQzMSAwLS44NDEtLjEyLTEuMTk1LS4zNDNsMS45MzgtMS45MzhhLjUuNSAwIDEgMC0uNzA3LS43MDdMNy40OTkgNi43MWEyLjI1MiAyLjI1MiAwIDAgMSAuMzEzLTIuNzg1bDIuMjY3LTIuMjY4YTIuMjMzIDIuMjMzIDAgMCAxIDEuNTktLjY1NSAyLjIzMyAyLjIzMyAwIDAgMSAyLjI0NiAyLjI0NWMwIC42MDMtLjIzMiAxLjE2OC0uNjU1IDEuNTl6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=',
                  className: void 0,
                  title: void 0,
                },
                unlink: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuOTU2IDEuMDM3YTMuNTUgMy41NSAwIDAgMC01LjAxNCAwTDYuNDM2IDMuNTQ0YS41NDUuNTQ1IDAgMSAwIC43Ny43N2wyLjUwOC0yLjUwNmEyLjQzOCAyLjQzOCAwIDAgMSAxLjczNS0uNzE1Yy42NTggMCAxLjI3NS4yNTQgMS43MzYuNzE1LjQ2LjQ2MS43MTUgMS4wNzguNzE1IDEuNzM2IDAgLjY1OC0uMjU0IDEuMjc0LS43MTUgMS43MzVMOS45MDcgOC41NThhMi40NTggMi40NTggMCAwIDEtMy40NzIgMCAuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3MSAzLjUzNCAzLjUzNCAwIDAgMCAyLjUwNyAxLjAzN2MuOTA4IDAgMS44MTYtLjM0NiAyLjUwNy0xLjAzN2wzLjI3OC0zLjI3OGEzLjUyIDMuNTIgMCAwIDAgMS4wMzUtMi41MDdjMC0uOTUtLjM2Ny0xLjg0LTEuMDM1LTIuNTA3eiIvPjxwYXRoIGQ9Ik03LjQgMTEuMDY1bC0yLjEyMiAyLjEyYTIuNDM3IDIuNDM3IDAgMCAxLTEuNzM1LjcxNiAyLjQzNyAyLjQzNyAwIDAgMS0xLjczNi0uNzE1IDIuNDU3IDIuNDU3IDAgMCAxIDAtMy40NzFsMy4wODYtMy4wODZhMi40MzggMi40MzggMCAwIDEgMS43MzUtLjcxNWMuNjU4IDAgMS4yNzUuMjU0IDEuNzM2LjcxNWEuNTQ1LjU0NSAwIDEgMCAuNzcxLS43NzEgMy41NSAzLjU1IDAgMCAwLTUuMDE0IDBMMS4wMzYgOC45NDRBMy41MiAzLjUyIDAgMCAwIDAgMTEuNDVjMCAuOTUuMzY3IDEuODQgMS4wMzUgMi41MDdhMy41MiAzLjUyIDAgMCAwIDIuNTA2IDEuMDM1Yy45NSAwIDEuODQtLjM2OCAyLjUwNy0xLjAzNWwyLjEyMi0yLjEyMWEuNTQ1LjU0NSAwIDAgMC0uNzcxLS43NzF6TTkuMjc0IDEyLjAwMmEuNTQ2LjU0NiAwIDAgMC0uNTQ2LjU0NXYxLjYzN2EuNTQ2LjU0NiAwIDAgMCAxLjA5MSAwdi0xLjYzN2EuNTQ1LjU0NSAwIDAgMC0uNTQ1LS41NDV6TTExLjIzIDExLjYxNmEuNTQ1LjU0NSAwIDEgMC0uNzcyLjc3MmwxLjE1NyAxLjE1NmEuNTQzLjU0MyAwIDAgMCAuNzcxIDAgLjU0NS41NDUgMCAwIDAgMC0uNzdsLTEuMTU2LTEuMTU4ek0xMi41MzcgOS44MkgxMC45YS41NDYuNTQ2IDAgMCAwIDAgMS4wOTFoMS42MzdhLjU0Ni41NDYgMCAwIDAgMC0xLjA5ek00LjkxIDMuNTQ3YS41NDYuNTQ2IDAgMCAwIC41NDUtLjU0NVYxLjM2NmEuNTQ2LjU0NiAwIDAgMC0xLjA5IDB2MS42MzZjMCAuMzAxLjI0NC41NDUuNTQ1LjU0NXpNMi44ODggMy45MzNhLjU0My41NDMgMCAwIDAgLjc3MSAwIC41NDUuNTQ1IDAgMCAwIDAtLjc3MUwyLjUwMiAyLjAwNWEuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3bDEuMTU3IDEuMTU4ek0xLjYyOCA1LjczaDEuNjM2YS41NDYuNTQ2IDAgMCAwIDAtMS4wOTJIMS42MjhhLjU0Ni41NDYgMCAwIDAgMCAxLjA5MXoiLz48L2c+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                linkCallback: void 0,
              },
              emoji: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4=',
                className: void 0,
                component: void 0,
                popupClassName: void 0,
                emojis: [
                  '😀',
                  '😁',
                  '😂',
                  '😃',
                  '😉',
                  '😋',
                  '😎',
                  '😍',
                  '😗',
                  '🤗',
                  '🤔',
                  '😣',
                  '😫',
                  '😴',
                  '😌',
                  '🤓',
                  '😛',
                  '😜',
                  '😠',
                  '😇',
                  '😷',
                  '😈',
                  '👻',
                  '😺',
                  '😸',
                  '😹',
                  '😻',
                  '😼',
                  '😽',
                  '🙀',
                  '🙈',
                  '🙉',
                  '🙊',
                  '👼',
                  '👮',
                  '🕵',
                  '💂',
                  '👳',
                  '🎅',
                  '👸',
                  '👰',
                  '👲',
                  '🙍',
                  '🙇',
                  '🚶',
                  '🏃',
                  '💃',
                  '⛷',
                  '🏂',
                  '🏌',
                  '🏄',
                  '🚣',
                  '🏊',
                  '⛹',
                  '🏋',
                  '🚴',
                  '👫',
                  '💪',
                  '👈',
                  '👉',
                  '👆',
                  '🖕',
                  '👇',
                  '🖖',
                  '🤘',
                  '🖐',
                  '👌',
                  '👍',
                  '👎',
                  '✊',
                  '👊',
                  '👏',
                  '🙌',
                  '🙏',
                  '🐵',
                  '🐶',
                  '🐇',
                  '🐥',
                  '🐸',
                  '🐌',
                  '🐛',
                  '🐜',
                  '🐝',
                  '🍉',
                  '🍄',
                  '🍔',
                  '🍤',
                  '🍨',
                  '🍪',
                  '🎂',
                  '🍰',
                  '🍾',
                  '🍷',
                  '🍸',
                  '🍺',
                  '🌍',
                  '🚑',
                  '⏰',
                  '🌙',
                  '🌝',
                  '🌞',
                  '⭐',
                  '🌟',
                  '🌠',
                  '🌨',
                  '🌩',
                  '⛄',
                  '🔥',
                  '🎄',
                  '🎈',
                  '🎉',
                  '🎊',
                  '🎁',
                  '🎗',
                  '🏀',
                  '🏈',
                  '🎲',
                  '🔇',
                  '🔈',
                  '📣',
                  '🔔',
                  '🎵',
                  '🎷',
                  '💰',
                  '🖊',
                  '📅',
                  '✅',
                  '❎',
                  '💯',
                ],
                title: void 0,
              },
              embedded: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzA4IDYuNjE1YS40MzYuNDM2IDAgMCAwLS41NDMuMjkxbC0xLjgzIDYuMDQ1YS40MzYuNDM2IDAgMCAwIC44MzMuMjUyTDcgNy4xNmEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHpNOC45MzEgNi42MTVhLjQzNi40MzYgMCAwIDAtLjU0My4yOTFsLTEuODMgNi4wNDVhLjQzNi40MzYgMCAwIDAgLjgzNC4yNTJsMS44My02LjA0NGEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHoiLz48cGF0aCBkPSJNMTYuNTY0IDBILjQzNkEuNDM2LjQzNiAwIDAgMCAwIC40MzZ2MTYuMTI4YzAgLjI0LjE5NS40MzYuNDM2LjQzNmgxNi4xMjhjLjI0IDAgLjQzNi0uMTk1LjQzNi0uNDM2Vi40MzZBLjQzNi40MzYgMCAwIDAgMTYuNTY0IDB6TTMuNDg3Ljg3MmgxMC4wMjZ2MS43NDNIMy40ODdWLjg3MnptLTIuNjE1IDBoMS43NDN2MS43NDNILjg3MlYuODcyem0xNS4yNTYgMTUuMjU2SC44NzJWMy40ODhoMTUuMjU2djEyLjY0em0wLTEzLjUxM2gtMS43NDNWLjg3MmgxLjc0M3YxLjc0M3oiLz48Y2lyY2xlIGN4PSI5My44NjciIGN5PSIyNDUuMDY0IiByPSIxMy4xMjgiIHRyYW5zZm9ybT0ibWF0cml4KC4wMzMyIDAgMCAuMDMzMiAwIDApIi8+PGNpcmNsZSBjeD0iOTMuODY3IiBjeT0iMzYwLjU5MiIgcj0iMTMuMTI4IiB0cmFuc2Zvcm09Im1hdHJpeCguMDMzMiAwIDAgLjAzMzIgMCAwKSIvPjxwYXRoIGQ9Ik0xNC4yNTQgMTIuNjQxSDEwLjJhLjQzNi40MzYgMCAwIDAgMCAuODcyaDQuMDU0YS40MzYuNDM2IDAgMCAwIDAtLjg3MnoiLz48L3N2Zz4=',
                className: void 0,
                component: void 0,
                popupClassName: void 0,
                embedCallback: void 0,
                defaultSize: { height: 'auto', width: 'auto' },
                title: void 0,
              },
              image: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNzQxIDBILjI2Qy4xMTYgMCAwIC4xMzYgMCAuMzA0djEzLjM5MmMwIC4xNjguMTE2LjMwNC4yNTkuMzA0SDE0Ljc0Yy4xNDMgMCAuMjU5LS4xMzYuMjU5LS4zMDRWLjMwNEMxNSAuMTM2IDE0Ljg4NCAwIDE0Ljc0MSAwem0tLjI1OCAxMy4zOTFILjUxN1YuNjFoMTMuOTY2VjEzLjM5eiIvPjxwYXRoIGQ9Ik00LjEzOCA2LjczOGMuNzk0IDAgMS40NC0uNzYgMS40NC0xLjY5NXMtLjY0Ni0xLjY5NS0xLjQ0LTEuNjk1Yy0uNzk0IDAtMS40NC43Ni0xLjQ0IDEuNjk1IDAgLjkzNC42NDYgMS42OTUgMS40NCAxLjY5NXptMC0yLjc4MWMuNTA5IDAgLjkyMy40ODcuOTIzIDEuMDg2IDAgLjU5OC0uNDE0IDEuMDg2LS45MjMgMS4wODYtLjUwOSAwLS45MjMtLjQ4Ny0uOTIzLTEuMDg2IDAtLjU5OS40MTQtMS4wODYuOTIzLTEuMDg2ek0xLjgxIDEyLjE3NGMuMDYgMCAuMTIyLS4wMjUuMTcxLS4wNzZMNi4yIDcuNzI4bDIuNjY0IDMuMTM0YS4yMzIuMjMyIDAgMCAwIC4zNjYgMCAuMzQzLjM0MyAwIDAgMCAwLS40M0w3Ljk4NyA4Ljk2OWwyLjM3NC0zLjA2IDIuOTEyIDMuMTQyYy4xMDYuMTEzLjI3LjEwNS4zNjYtLjAyYS4zNDMuMzQzIDAgMCAwLS4wMTYtLjQzbC0zLjEwNC0zLjM0N2EuMjQ0LjI0NCAwIDAgMC0uMTg2LS4wOC4yNDUuMjQ1IDAgMCAwLS4xOC4xTDcuNjIyIDguNTM3IDYuMzk0IDcuMDk0YS4yMzIuMjMyIDAgMCAwLS4zNTQtLjAxM2wtNC40IDQuNTZhLjM0My4zNDMgMCAwIDAtLjAyNC40My4yNDMuMjQzIDAgMCAwIC4xOTQuMTAzeiIvPjwvZz48L3N2Zz4=',
                className: void 0,
                component: void 0,
                popupClassName: void 0,
                urlEnabled: !0,
                uploadEnabled: !0,
                previewImage: !1,
                alignmentEnabled: !0,
                uploadCallback: void 0,
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alt: { present: !1, mandatory: !1 },
                defaultSize: { height: 'auto', width: 'auto' },
                title: void 0,
              },
              remove: {
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOC4xIDE0bDYuNC03LjJjLjYtLjcuNi0xLjgtLjEtMi41bC0yLjctMi43Yy0uMy0uNC0uOC0uNi0xLjMtLjZIOC42Yy0uNSAwLTEgLjItMS40LjZMLjUgOS4yYy0uNi43LS42IDEuOS4xIDIuNWwyLjcgMi43Yy4zLjQuOC42IDEuMy42SDE2di0xSDguMXptLTEuMy0uMXMwLS4xIDAgMGwtMi43LTIuN2MtLjQtLjQtLjQtLjkgMC0xLjNMNy41IDZoLTFsLTMgMy4zYy0uNi43LS42IDEuNy4xIDIuNEw1LjkgMTRINC42Yy0uMiAwLS40LS4xLS42LS4yTDEuMiAxMWMtLjMtLjMtLjMtLjggMC0xLjFMNC43IDZoMS44TDEwIDJoMUw3LjUgNmwzLjEgMy43LTMuNSA0Yy0uMS4xLS4yLjEtLjMuMnoiLz48L3N2Zz4=',
                className: void 0,
                component: void 0,
                title: void 0,
              },
              history: {
                inDropdown: !1,
                className: void 0,
                component: void 0,
                dropdownClassName: void 0,
                options: ['undo', 'redo'],
                undo: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQuODc1YzIuNjcyIDAgNC44NDYtMi4xNDUgNC44NDYtNC43ODEgMC0yLjYzNy0yLjE3NC00Ljc4MS00Ljg0Ni00Ljc4MVY4LjVMMS42MTUgNC4yNSA3IDB2My4xODhjMy44NiAwIDcgMy4wOTggNyA2LjkwNlMxMC44NiAxNyA3IDE3cy03LTMuMDk4LTctNi45MDZoMi4xNTRjMCAyLjYzNiAyLjE3NCA0Ljc4MSA0Ljg0NiA0Ljc4MXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==',
                  className: void 0,
                  title: void 0,
                },
                redo: {
                  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTA0IDEzLjk3N2E0LjQ5NyA0LjQ5NyAwIDAgMS00LjQ5Mi00LjQ5MiA0LjQ5NyA0LjQ5NyAwIDAgMSA0LjQ5Mi00LjQ5M3YyLjk5NWw0Ljk5LTMuOTkzTDYuNTA0IDB2Mi45OTVhNi40OTYgNi40OTYgMCAwIDAtNi40ODggNi40OWMwIDMuNTc4IDIuOTEgNi40OSA2LjQ4OCA2LjQ5YTYuNDk2IDYuNDk2IDAgMCAwIDYuNDg3LTYuNDloLTEuOTk2YTQuNDk3IDQuNDk3IDAgMCAxLTQuNDkxIDQuNDkyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+',
                  className: void 0,
                  title: void 0,
                },
                title: void 0,
              },
            },
            Jo = {
              en: {
                'generic.add': 'Add',
                'generic.cancel': 'Cancel',
                'components.controls.blocktype.h1': 'H1',
                'components.controls.blocktype.h2': 'H2',
                'components.controls.blocktype.h3': 'H3',
                'components.controls.blocktype.h4': 'H4',
                'components.controls.blocktype.h5': 'H5',
                'components.controls.blocktype.h6': 'H6',
                'components.controls.blocktype.blockquote': 'Blockquote',
                'components.controls.blocktype.code': 'Code',
                'components.controls.blocktype.blocktype': 'Block Type',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Color Picker',
                'components.controls.colorpicker.text': 'Text',
                'components.controls.colorpicker.background': 'Highlight',
                'components.controls.embedded.embedded': 'Embedded',
                'components.controls.embedded.embeddedlink': 'Embedded Link',
                'components.controls.embedded.enterlink': 'Enter link',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Font',
                'components.controls.fontsize.fontsize': 'Font Size',
                'components.controls.history.history': 'History',
                'components.controls.history.undo': 'Undo',
                'components.controls.history.redo': 'Redo',
                'components.controls.image.image': 'Image',
                'components.controls.image.fileUpload': 'File Upload',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText': 'Drop the file or click to upload',
                'components.controls.inline.bold': 'Bold',
                'components.controls.inline.italic': 'Italic',
                'components.controls.inline.underline': 'Underline',
                'components.controls.inline.strikethrough': 'Strikethrough',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Superscript',
                'components.controls.inline.subscript': 'Subscript',
                'components.controls.link.linkTitle': 'Link Title',
                'components.controls.link.linkTarget': 'Link Target',
                'components.controls.link.linkTargetOption': 'Open link in new window',
                'components.controls.link.link': 'Link',
                'components.controls.link.unlink': 'Unlink',
                'components.controls.list.list': 'List',
                'components.controls.list.unordered': 'Unordered',
                'components.controls.list.ordered': 'Ordered',
                'components.controls.list.indent': 'Indent',
                'components.controls.list.outdent': 'Outdent',
                'components.controls.remove.remove': 'Remove',
                'components.controls.textalign.textalign': 'Text Align',
                'components.controls.textalign.left': 'Left',
                'components.controls.textalign.center': 'Center',
                'components.controls.textalign.right': 'Right',
                'components.controls.textalign.justify': 'Justify',
              },
              fr: {
                'generic.add': 'Ok',
                'generic.cancel': 'Annuler',
                'components.controls.blocktype.h1': 'Titre 1',
                'components.controls.blocktype.h2': 'Titre 2',
                'components.controls.blocktype.h3': 'Titre 3',
                'components.controls.blocktype.h4': 'Titre 4',
                'components.controls.blocktype.h5': 'Titre 5',
                'components.controls.blocktype.h6': 'Titre 6',
                'components.controls.blocktype.blockquote': 'Citation',
                'components.controls.blocktype.code': 'Code',
                'components.controls.blocktype.blocktype': 'Type bloc',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Palette de couleur',
                'components.controls.colorpicker.text': 'Texte',
                'components.controls.colorpicker.background': 'Fond',
                'components.controls.embedded.embedded': 'Embedded',
                'components.controls.embedded.embeddedlink': 'Lien iFrame',
                'components.controls.embedded.enterlink': 'Entrer le lien',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Police',
                'components.controls.fontsize.fontsize': 'Taille de police',
                'components.controls.history.history': 'Historique',
                'components.controls.history.undo': 'Précédent',
                'components.controls.history.redo': 'Suivant',
                'components.controls.image.image': 'Image',
                'components.controls.image.fileUpload': 'Téléchargement',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Glisser une image ou cliquer pour télécharger',
                'components.controls.inline.bold': 'Gras',
                'components.controls.inline.italic': 'Italique',
                'components.controls.inline.underline': 'Souligner',
                'components.controls.inline.strikethrough': 'Barrer',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Exposant',
                'components.controls.inline.subscript': 'Indice',
                'components.controls.link.linkTitle': 'Titre du lien',
                'components.controls.link.linkTarget': 'Cible du lien',
                'components.controls.link.linkTargetOption':
                  'Ouvrir le lien dans une nouvelle fenêtre',
                'components.controls.link.link': 'Lier',
                'components.controls.link.unlink': 'Délier',
                'components.controls.list.list': 'Liste',
                'components.controls.list.unordered': 'Désordonnée',
                'components.controls.list.ordered': 'Ordonnée',
                'components.controls.list.indent': 'Augmenter le retrait',
                'components.controls.list.outdent': 'Diminuer le retrait',
                'components.controls.remove.remove': 'Supprimer',
                'components.controls.textalign.textalign': 'Alignement du texte',
                'components.controls.textalign.left': 'Gauche',
                'components.controls.textalign.center': 'Centre',
                'components.controls.textalign.right': 'Droite',
                'components.controls.textalign.justify': 'Justifier',
              },
              zh: {
                'generic.add': '添加',
                'generic.cancel': '取消',
                'components.controls.blocktype.h1': '标题1',
                'components.controls.blocktype.h2': '标题2',
                'components.controls.blocktype.h3': '标题3',
                'components.controls.blocktype.h4': '标题4',
                'components.controls.blocktype.h5': '标题5',
                'components.controls.blocktype.h6': '标题6',
                'components.controls.blocktype.blockquote': '引用',
                'components.controls.blocktype.code': '源码',
                'components.controls.blocktype.blocktype': '样式',
                'components.controls.blocktype.normal': '正文',
                'components.controls.colorpicker.colorpicker': '选色器',
                'components.controls.colorpicker.text': '文字',
                'components.controls.colorpicker.background': '背景',
                'components.controls.embedded.embedded': '内嵌',
                'components.controls.embedded.embeddedlink': '内嵌网页',
                'components.controls.embedded.enterlink': '输入网页地址',
                'components.controls.emoji.emoji': '表情符号',
                'components.controls.fontfamily.fontfamily': '字体',
                'components.controls.fontsize.fontsize': '字号',
                'components.controls.history.history': '历史',
                'components.controls.history.undo': '撤销',
                'components.controls.history.redo': '恢复',
                'components.controls.image.image': '图片',
                'components.controls.image.fileUpload': '来自文件',
                'components.controls.image.byURL': '在线图片',
                'components.controls.image.dropFileText': '点击或者拖拽文件上传',
                'components.controls.inline.bold': '粗体',
                'components.controls.inline.italic': '斜体',
                'components.controls.inline.underline': '下划线',
                'components.controls.inline.strikethrough': '删除线',
                'components.controls.inline.monospace': '等宽字体',
                'components.controls.inline.superscript': '上标',
                'components.controls.inline.subscript': '下标',
                'components.controls.link.linkTitle': '超链接',
                'components.controls.link.linkTarget': '输入链接地址',
                'components.controls.link.linkTargetOption': '在新窗口中打开链接',
                'components.controls.link.link': '链接',
                'components.controls.link.unlink': '删除链接',
                'components.controls.list.list': '列表',
                'components.controls.list.unordered': '项目符号',
                'components.controls.list.ordered': '编号',
                'components.controls.list.indent': '增加缩进量',
                'components.controls.list.outdent': '减少缩进量',
                'components.controls.remove.remove': '清除格式',
                'components.controls.textalign.textalign': '文本对齐',
                'components.controls.textalign.left': '文本左对齐',
                'components.controls.textalign.center': '居中',
                'components.controls.textalign.right': '文本右对齐',
                'components.controls.textalign.justify': '两端对齐',
              },
              ru: {
                'generic.add': 'Добавить',
                'generic.cancel': 'Отменить',
                'components.controls.blocktype.h1': 'Заголовок 1',
                'components.controls.blocktype.h2': 'Заголовок 2',
                'components.controls.blocktype.h3': 'Заголовок 3',
                'components.controls.blocktype.h4': 'Заголовок 4',
                'components.controls.blocktype.h5': 'Заголовок 5',
                'components.controls.blocktype.h6': 'Заголовок 6',
                'components.controls.blocktype.blockquote': 'Цитата',
                'components.controls.blocktype.code': 'Код',
                'components.controls.blocktype.blocktype': 'Форматирование',
                'components.controls.blocktype.normal': 'Обычный',
                'components.controls.colorpicker.colorpicker': 'Выбор цвета',
                'components.controls.colorpicker.text': 'Текст',
                'components.controls.colorpicker.background': 'Фон',
                'components.controls.embedded.embedded': 'Встраивание',
                'components.controls.embedded.embeddedlink': 'Ссылка в iFrame',
                'components.controls.embedded.enterlink': 'Вставьте ссылку',
                'components.controls.emoji.emoji': 'Эмодзи',
                'components.controls.fontfamily.fontfamily': 'Шрифт',
                'components.controls.fontsize.fontsize': 'Размер шрифта',
                'components.controls.history.history': 'История',
                'components.controls.history.undo': 'Отменить',
                'components.controls.history.redo': 'Вернуть',
                'components.controls.image.image': 'Изображение',
                'components.controls.image.fileUpload': 'Файлы',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Переместите в эту область файлы или кликните для загрузки',
                'components.controls.inline.bold': 'Жирный',
                'components.controls.inline.italic': 'Курсив',
                'components.controls.inline.underline': 'Подчеркивание',
                'components.controls.inline.strikethrough': 'Зачеркивание',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Верхний индекс',
                'components.controls.inline.subscript': 'Нижний индекс',
                'components.controls.link.linkTitle': 'Текст',
                'components.controls.link.linkTarget': 'Адрес ссылки',
                'components.controls.link.linkTargetOption': 'Открывать в новом окне',
                'components.controls.link.link': 'Ссылка',
                'components.controls.link.unlink': 'Убрать ссылку',
                'components.controls.list.list': 'Список',
                'components.controls.list.unordered': 'Неупорядоченный',
                'components.controls.list.ordered': 'Упорядоченный',
                'components.controls.list.indent': 'Отступ',
                'components.controls.list.outdent': 'Выступ',
                'components.controls.remove.remove': 'Удалить',
                'components.controls.textalign.textalign': 'Выравнивание текста',
                'components.controls.textalign.left': 'Слева',
                'components.controls.textalign.center': 'По центру',
                'components.controls.textalign.right': 'Справа',
                'components.controls.textalign.justify': 'Выравнить',
              },
              pt: {
                'generic.add': 'Ok',
                'generic.cancel': 'Cancelar',
                'components.controls.blocktype.h1': 'Título 1',
                'components.controls.blocktype.h2': 'Título 2',
                'components.controls.blocktype.h3': 'Título 3',
                'components.controls.blocktype.h4': 'Título 4',
                'components.controls.blocktype.h5': 'Título 5',
                'components.controls.blocktype.h6': 'Título 6',
                'components.controls.blocktype.blockquote': 'Citação',
                'components.controls.blocktype.code': 'Code',
                'components.controls.blocktype.blocktype': 'Estilo',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Paleta de cores',
                'components.controls.colorpicker.text': 'Texto',
                'components.controls.colorpicker.background': 'Fundo',
                'components.controls.embedded.embedded': 'Embarcado',
                'components.controls.embedded.embeddedlink': 'Link embarcado',
                'components.controls.embedded.enterlink': 'Coloque o link',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Fonte',
                'components.controls.fontsize.fontsize': 'Tamanho da Fonte',
                'components.controls.history.history': 'Histórico',
                'components.controls.history.undo': 'Desfazer',
                'components.controls.history.redo': 'Refazer',
                'components.controls.image.image': 'Imagem',
                'components.controls.image.fileUpload': 'Carregar arquivo',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Arraste uma imagem aqui ou clique para carregar',
                'components.controls.inline.bold': 'Negrito',
                'components.controls.inline.italic': 'Itálico',
                'components.controls.inline.underline': 'Sublinhado',
                'components.controls.inline.strikethrough': 'Strikethrough',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Sobrescrito',
                'components.controls.inline.subscript': 'Subscrito',
                'components.controls.link.linkTitle': 'Título do link',
                'components.controls.link.linkTarget': 'Alvo do link',
                'components.controls.link.linkTargetOption': 'Abrir link em outra janela',
                'components.controls.link.link': 'Adicionar Link',
                'components.controls.link.unlink': 'Remover link',
                'components.controls.list.list': 'Lista',
                'components.controls.list.unordered': 'Sem ordenção',
                'components.controls.list.ordered': 'Ordenada',
                'components.controls.list.indent': 'Aumentar recuo',
                'components.controls.list.outdent': 'Diminuir recuo',
                'components.controls.remove.remove': 'Remover',
                'components.controls.textalign.textalign': 'Alinhamento do texto',
                'components.controls.textalign.left': 'À Esquerda',
                'components.controls.textalign.center': 'Centralizado',
                'components.controls.textalign.right': 'À Direita',
                'components.controls.textalign.justify': 'Justificado',
              },
              ko: {
                'generic.add': '입력',
                'generic.cancel': '취소',
                'components.controls.blocktype.h1': '제목1',
                'components.controls.blocktype.h2': '제목2',
                'components.controls.blocktype.h3': '제목3',
                'components.controls.blocktype.h4': '제목4',
                'components.controls.blocktype.h5': '제목5',
                'components.controls.blocktype.h6': '제목6',
                'components.controls.blocktype.blockquote': '인용',
                'components.controls.blocktype.code': 'Code',
                'components.controls.blocktype.blocktype': '블록',
                'components.controls.blocktype.normal': '표준',
                'components.controls.colorpicker.colorpicker': '색상 선택',
                'components.controls.colorpicker.text': '글꼴색',
                'components.controls.colorpicker.background': '배경색',
                'components.controls.embedded.embedded': '임베드',
                'components.controls.embedded.embeddedlink': '임베드 링크',
                'components.controls.embedded.enterlink': '주소를 입력하세요',
                'components.controls.emoji.emoji': '이모지',
                'components.controls.fontfamily.fontfamily': '글꼴',
                'components.controls.fontsize.fontsize': '글꼴 크기',
                'components.controls.history.history': '히스토리',
                'components.controls.history.undo': '실행 취소',
                'components.controls.history.redo': '다시 실행',
                'components.controls.image.image': '이미지',
                'components.controls.image.fileUpload': '파일 업로드',
                'components.controls.image.byURL': '주소',
                'components.controls.image.dropFileText': '클릭하거나 파일을 드롭하여 업로드하세요',
                'components.controls.inline.bold': '굵게',
                'components.controls.inline.italic': '기울임꼴',
                'components.controls.inline.underline': '밑줄',
                'components.controls.inline.strikethrough': '취소선',
                'components.controls.inline.monospace': '고정 너비',
                'components.controls.inline.superscript': '위 첨자',
                'components.controls.inline.subscript': '아래 첨자',
                'components.controls.link.linkTitle': '링크 제목',
                'components.controls.link.linkTarget': '링크 타겟',
                'components.controls.link.linkTargetOption': '새창으로 열기',
                'components.controls.link.link': '링크',
                'components.controls.link.unlink': '링크 제거',
                'components.controls.list.list': '리스트',
                'components.controls.list.unordered': '일반 리스트',
                'components.controls.list.ordered': '순서 리스트',
                'components.controls.list.indent': '들여쓰기',
                'components.controls.list.outdent': '내어쓰기',
                'components.controls.remove.remove': '삭제',
                'components.controls.textalign.textalign': '텍스트 정렬',
                'components.controls.textalign.left': '왼쪽',
                'components.controls.textalign.center': '중앙',
                'components.controls.textalign.right': '오른쪽',
                'components.controls.textalign.justify': '양쪽',
              },
              it: {
                'generic.add': 'Aggiungi',
                'generic.cancel': 'Annulla',
                'components.controls.blocktype.h1': 'H1',
                'components.controls.blocktype.h2': 'H2',
                'components.controls.blocktype.h3': 'H3',
                'components.controls.blocktype.h4': 'H4',
                'components.controls.blocktype.h5': 'H5',
                'components.controls.blocktype.h6': 'H6',
                'components.controls.blocktype.blockquote': 'Citazione',
                'components.controls.blocktype.code': 'Codice',
                'components.controls.blocktype.blocktype': 'Stili',
                'components.controls.blocktype.normal': 'Normale',
                'components.controls.colorpicker.colorpicker': 'Colore testo',
                'components.controls.colorpicker.text': 'Testo',
                'components.controls.colorpicker.background': 'Evidenziazione',
                'components.controls.embedded.embedded': 'Incorpora',
                'components.controls.embedded.embeddedlink': 'Incorpora link',
                'components.controls.embedded.enterlink': 'Inserisci link',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Carattere',
                'components.controls.fontsize.fontsize': 'Dimensione carattere',
                'components.controls.history.history': 'Modifiche',
                'components.controls.history.undo': 'Annulla',
                'components.controls.history.redo': 'Ripristina',
                'components.controls.image.image': 'Immagine',
                'components.controls.image.fileUpload': 'Carica immagine',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText': 'Trascina il file o clicca per caricare',
                'components.controls.inline.bold': 'Grassetto',
                'components.controls.inline.italic': 'Corsivo',
                'components.controls.inline.underline': 'Sottolineato',
                'components.controls.inline.strikethrough': 'Barrato',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Apice',
                'components.controls.inline.subscript': 'Pedice',
                'components.controls.link.linkTitle': 'Testo',
                'components.controls.link.linkTarget': 'Link',
                'components.controls.link.linkTargetOption': 'Apri link in una nuova finestra',
                'components.controls.link.link': 'Inserisci link',
                'components.controls.link.unlink': 'Rimuovi link',
                'components.controls.list.list': 'Lista',
                'components.controls.list.unordered': 'Elenco puntato',
                'components.controls.list.ordered': 'Elenco numerato',
                'components.controls.list.indent': 'Indent',
                'components.controls.list.outdent': 'Outdent',
                'components.controls.remove.remove': 'Rimuovi formattazione',
                'components.controls.textalign.textalign': 'Allineamento del testo',
                'components.controls.textalign.left': 'Allinea a sinistra',
                'components.controls.textalign.center': 'Allinea al centro',
                'components.controls.textalign.right': 'Allinea a destra',
                'components.controls.textalign.justify': 'Giustifica',
              },
              nl: {
                'generic.add': 'Toevoegen',
                'generic.cancel': 'Annuleren',
                'components.controls.blocktype.h1': 'H1',
                'components.controls.blocktype.h2': 'H2',
                'components.controls.blocktype.h3': 'H3',
                'components.controls.blocktype.h4': 'H4',
                'components.controls.blocktype.h5': 'H5',
                'components.controls.blocktype.h6': 'H6',
                'components.controls.blocktype.blockquote': 'Blockquote',
                'components.controls.blocktype.code': 'Code',
                'components.controls.blocktype.blocktype': 'Blocktype',
                'components.controls.blocktype.normal': 'Normaal',
                'components.controls.colorpicker.colorpicker': 'Kleurkiezer',
                'components.controls.colorpicker.text': 'Tekst',
                'components.controls.colorpicker.background': 'Achtergrond',
                'components.controls.embedded.embedded': 'Ingevoegd',
                'components.controls.embedded.embeddedlink': 'Ingevoegde link',
                'components.controls.embedded.enterlink': 'Voeg link toe',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Lettertype',
                'components.controls.fontsize.fontsize': 'Lettergrootte',
                'components.controls.history.history': 'Geschiedenis',
                'components.controls.history.undo': 'Ongedaan maken',
                'components.controls.history.redo': 'Opnieuw',
                'components.controls.image.image': 'Afbeelding',
                'components.controls.image.fileUpload': 'Bestand uploaden',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Drop het bestand hier of klik om te uploaden',
                'components.controls.inline.bold': 'Dikgedrukt',
                'components.controls.inline.italic': 'Schuingedrukt',
                'components.controls.inline.underline': 'Onderstrepen',
                'components.controls.inline.strikethrough': 'Doorstrepen',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Superscript',
                'components.controls.inline.subscript': 'Subscript',
                'components.controls.link.linkTitle': 'Linktitel',
                'components.controls.link.linkTarget': 'Link bestemming',
                'components.controls.link.linkTargetOption': 'Open link in een nieuw venster',
                'components.controls.link.link': 'Link',
                'components.controls.link.unlink': 'Unlink',
                'components.controls.list.list': 'Lijst',
                'components.controls.list.unordered': 'Ongeordend',
                'components.controls.list.ordered': 'Geordend',
                'components.controls.list.indent': 'Inspringen',
                'components.controls.list.outdent': 'Inspringen verkleinen',
                'components.controls.remove.remove': 'Verwijderen',
                'components.controls.textalign.textalign': 'Tekst uitlijnen',
                'components.controls.textalign.left': 'Links',
                'components.controls.textalign.center': 'Gecentreerd',
                'components.controls.textalign.right': 'Rechts',
                'components.controls.textalign.justify': 'Uitgelijnd',
              },
              de: {
                'generic.add': 'Hinzufügen',
                'generic.cancel': 'Abbrechen',
                'components.controls.blocktype.h1': 'Überschrift 1',
                'components.controls.blocktype.h2': 'Überschrift 2',
                'components.controls.blocktype.h3': 'Überschrift 3',
                'components.controls.blocktype.h4': 'Überschrift 4',
                'components.controls.blocktype.h5': 'Überschrift 5',
                'components.controls.blocktype.h6': 'Überschrift 6',
                'components.controls.blocktype.blockquote': 'Zitat',
                'components.controls.blocktype.code': 'Quellcode',
                'components.controls.blocktype.blocktype': 'Blocktyp',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Farbauswahl',
                'components.controls.colorpicker.text': 'Text',
                'components.controls.colorpicker.background': 'Hintergrund',
                'components.controls.embedded.embedded': 'Eingebettet',
                'components.controls.embedded.embeddedlink': 'Eingebetteter Link',
                'components.controls.embedded.enterlink': 'Link eingeben',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Schriftart',
                'components.controls.fontsize.fontsize': 'Schriftgröße',
                'components.controls.history.history': 'Historie',
                'components.controls.history.undo': 'Zurücknehmen',
                'components.controls.history.redo': 'Wiederholen',
                'components.controls.image.image': 'Bild',
                'components.controls.image.fileUpload': 'Datei-Upload',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Dateien ziehen und ablegen, oder klicken zum Hochladen',
                'components.controls.inline.bold': 'Fett',
                'components.controls.inline.italic': 'Kursiv',
                'components.controls.inline.underline': 'Unterstreichen',
                'components.controls.inline.strikethrough': 'Durchstreichen',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Hochgestellt',
                'components.controls.inline.subscript': 'Tiefgestellt',
                'components.controls.link.linkTitle': 'Link-Titel',
                'components.controls.link.linkTarget': 'Link-Ziel',
                'components.controls.link.linkTargetOption': 'Link in neuem Fenster öffnen',
                'components.controls.link.link': 'Link',
                'components.controls.link.unlink': 'Aufheben',
                'components.controls.list.list': 'Liste',
                'components.controls.list.unordered': 'Aufzählung',
                'components.controls.list.ordered': 'Nummerierte Liste',
                'components.controls.list.indent': 'Einzug vergrößern',
                'components.controls.list.outdent': 'Einzug reduzieren',
                'components.controls.remove.remove': 'Entfernen',
                'components.controls.textalign.textalign': 'Textausrichtung',
                'components.controls.textalign.left': 'Linksbündig',
                'components.controls.textalign.center': 'Zentrieren',
                'components.controls.textalign.right': 'Rechtsbündig',
                'components.controls.textalign.justify': 'Blocksatz',
              },
              da: {
                'generic.add': 'Tilføj',
                'generic.cancel': 'Annuller',
                'components.controls.blocktype.h1': 'Overskrift 1',
                'components.controls.blocktype.h2': 'Overskrift 2',
                'components.controls.blocktype.h3': 'Overskrift 3',
                'components.controls.blocktype.h4': 'Overskrift 4',
                'components.controls.blocktype.h5': 'Overskrift 5',
                'components.controls.blocktype.h6': 'Overskrift 6',
                'components.controls.blocktype.blockquote': 'Blokcitat',
                'components.controls.blocktype.code': 'Kode',
                'components.controls.blocktype.blocktype': 'Blok Type',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Farver',
                'components.controls.colorpicker.text': 'Tekst',
                'components.controls.colorpicker.background': 'Baggrund',
                'components.controls.embedded.embedded': 'Indlejre',
                'components.controls.embedded.embeddedlink': 'Indlejre Link',
                'components.controls.embedded.enterlink': 'Indtast link',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Fonttype',
                'components.controls.fontsize.fontsize': 'Fontstørrelser',
                'components.controls.history.history': 'Historie',
                'components.controls.history.undo': 'Fortryd',
                'components.controls.history.redo': 'Gendan',
                'components.controls.image.image': 'Billede',
                'components.controls.image.fileUpload': 'Filoverførsel',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText': 'Drop filen eller klik for at uploade',
                'components.controls.inline.bold': 'Fed',
                'components.controls.inline.italic': 'Kursiv',
                'components.controls.inline.underline': 'Understrege',
                'components.controls.inline.strikethrough': 'Gennemstreget',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Hævet',
                'components.controls.inline.subscript': 'Sænket',
                'components.controls.link.linkTitle': 'Link Titel',
                'components.controls.link.linkTarget': 'Link Mål',
                'components.controls.link.linkTargetOption': 'Åbn link i nyt vindue',
                'components.controls.link.link': 'Link',
                'components.controls.link.unlink': 'Fjern link',
                'components.controls.list.list': 'Liste',
                'components.controls.list.unordered': 'Uordnet',
                'components.controls.list.ordered': 'Ordnet',
                'components.controls.list.indent': 'Indrykning',
                'components.controls.list.outdent': 'Udrykning',
                'components.controls.remove.remove': 'Fjern',
                'components.controls.textalign.textalign': 'Tekstjustering',
                'components.controls.textalign.left': 'Venstre',
                'components.controls.textalign.center': 'Center',
                'components.controls.textalign.right': 'Højre',
                'components.controls.textalign.justify': 'Margener',
              },
              zh_tw: {
                'generic.add': '新增',
                'generic.cancel': '取消',
                'components.controls.blocktype.h1': '標題1',
                'components.controls.blocktype.h2': '標題2',
                'components.controls.blocktype.h3': '標題3',
                'components.controls.blocktype.h4': '標題4',
                'components.controls.blocktype.h5': '標題5',
                'components.controls.blocktype.h6': '標題6',
                'components.controls.blocktype.blockquote': '引用',
                'components.controls.blocktype.code': '程式碼',
                'components.controls.blocktype.blocktype': '樣式',
                'components.controls.blocktype.normal': '正文',
                'components.controls.colorpicker.colorpicker': '選色器',
                'components.controls.colorpicker.text': '文字',
                'components.controls.colorpicker.background': '背景',
                'components.controls.embedded.embedded': '內嵌',
                'components.controls.embedded.embeddedlink': '內嵌網頁',
                'components.controls.embedded.enterlink': '輸入網頁地址',
                'components.controls.emoji.emoji': '表情符號',
                'components.controls.fontfamily.fontfamily': '字體',
                'components.controls.fontsize.fontsize': '字體大小',
                'components.controls.history.history': '歷史紀錄',
                'components.controls.history.undo': '復原',
                'components.controls.history.redo': '重做',
                'components.controls.image.image': '圖片',
                'components.controls.image.fileUpload': '檔案上傳',
                'components.controls.image.byURL': '網址',
                'components.controls.image.dropFileText': '點擊或拖曳檔案上傳',
                'components.controls.inline.bold': '粗體',
                'components.controls.inline.italic': '斜體',
                'components.controls.inline.underline': '底線',
                'components.controls.inline.strikethrough': '刪除線',
                'components.controls.inline.monospace': '等寬字體',
                'components.controls.inline.superscript': '上標',
                'components.controls.inline.subscript': '下標',
                'components.controls.link.linkTitle': '超連結',
                'components.controls.link.linkTarget': '輸入連結位址',
                'components.controls.link.linkTargetOption': '在新視窗打開連結',
                'components.controls.link.link': '連結',
                'components.controls.link.unlink': '刪除連結',
                'components.controls.list.list': '列表',
                'components.controls.list.unordered': '項目符號',
                'components.controls.list.ordered': '編號',
                'components.controls.list.indent': '增加縮排',
                'components.controls.list.outdent': '減少縮排',
                'components.controls.remove.remove': '清除格式',
                'components.controls.textalign.textalign': '文字對齊',
                'components.controls.textalign.left': '文字向左對齊',
                'components.controls.textalign.center': '文字置中',
                'components.controls.textalign.right': '文字向右對齊',
                'components.controls.textalign.justify': '兩端對齊',
              },
              pl: {
                'generic.add': 'Dodaj',
                'generic.cancel': 'Anuluj',
                'components.controls.blocktype.h1': 'Nagłówek 1',
                'components.controls.blocktype.h2': 'Nagłówek 2',
                'components.controls.blocktype.h3': 'Nagłówek 3',
                'components.controls.blocktype.h4': 'Nagłówek 4',
                'components.controls.blocktype.h5': 'Nagłówek 5',
                'components.controls.blocktype.h6': 'Nagłówek 6',
                'components.controls.blocktype.blockquote': 'Cytat',
                'components.controls.blocktype.code': 'Kod',
                'components.controls.blocktype.blocktype': 'Format',
                'components.controls.blocktype.normal': 'Normalny',
                'components.controls.colorpicker.colorpicker': 'Kolor',
                'components.controls.colorpicker.text': 'Tekst',
                'components.controls.colorpicker.background': 'Tło',
                'components.controls.embedded.embedded': 'Osadź',
                'components.controls.embedded.embeddedlink': 'Osadź odnośnik',
                'components.controls.embedded.enterlink': 'Wprowadź odnośnik',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Krój czcionki',
                'components.controls.fontsize.fontsize': 'Rozmiar czcionki',
                'components.controls.history.history': 'Historia',
                'components.controls.history.undo': 'Cofnij',
                'components.controls.history.redo': 'Ponów',
                'components.controls.image.image': 'Obrazek',
                'components.controls.image.fileUpload': 'Prześlij plik',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText': 'Upuść plik lub kliknij, aby przesłać',
                'components.controls.inline.bold': 'Pogrubienie',
                'components.controls.inline.italic': 'Kursywa',
                'components.controls.inline.underline': 'Podkreślenie',
                'components.controls.inline.strikethrough': 'Przekreślenie',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Indeks górny',
                'components.controls.inline.subscript': 'Indeks dolny',
                'components.controls.link.linkTitle': 'Tytuł odnośnika',
                'components.controls.link.linkTarget': 'Adres odnośnika',
                'components.controls.link.linkTargetOption': 'Otwórz odnośnik w nowej karcie',
                'components.controls.link.link': 'Wstaw odnośnik',
                'components.controls.link.unlink': 'Usuń odnośnik',
                'components.controls.list.list': 'Lista',
                'components.controls.list.unordered': 'Lista nieuporządkowana',
                'components.controls.list.ordered': 'Lista uporządkowana',
                'components.controls.list.indent': 'Zwiększ wcięcie',
                'components.controls.list.outdent': 'Zmniejsz wcięcie',
                'components.controls.remove.remove': 'Usuń',
                'components.controls.textalign.textalign': 'Wyrównaj tekst',
                'components.controls.textalign.left': 'Do lewej',
                'components.controls.textalign.center': 'Do środka',
                'components.controls.textalign.right': 'Do prawej',
                'components.controls.textalign.justify': 'Wyjustuj',
              },
              es: {
                'generic.add': 'Añadir',
                'generic.cancel': 'Cancelar',
                'components.controls.blocktype.h1': 'H1',
                'components.controls.blocktype.h2': 'H2',
                'components.controls.blocktype.h3': 'H3',
                'components.controls.blocktype.h4': 'H4',
                'components.controls.blocktype.h5': 'H5',
                'components.controls.blocktype.h6': 'H6',
                'components.controls.blocktype.blockquote': 'Blockquote',
                'components.controls.blocktype.code': 'Código',
                'components.controls.blocktype.blocktype': 'Tipo de bloque',
                'components.controls.blocktype.normal': 'Normal',
                'components.controls.colorpicker.colorpicker': 'Seleccionar color',
                'components.controls.colorpicker.text': 'Texto',
                'components.controls.colorpicker.background': 'Subrayado',
                'components.controls.embedded.embedded': 'Adjuntar',
                'components.controls.embedded.embeddedlink': 'Adjuntar Link',
                'components.controls.embedded.enterlink': 'Introducir link',
                'components.controls.emoji.emoji': 'Emoji',
                'components.controls.fontfamily.fontfamily': 'Fuente',
                'components.controls.fontsize.fontsize': 'Tamaño de fuente',
                'components.controls.history.history': 'Histórico',
                'components.controls.history.undo': 'Deshacer',
                'components.controls.history.redo': 'Rehacer',
                'components.controls.image.image': 'Imagen',
                'components.controls.image.fileUpload': 'Subir archivo',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'Arrastra el archivo o haz click para subirlo',
                'components.controls.inline.bold': 'Negrita',
                'components.controls.inline.italic': 'Cursiva',
                'components.controls.inline.underline': 'Subrayado',
                'components.controls.inline.strikethrough': 'Tachado',
                'components.controls.inline.monospace': 'Monospace',
                'components.controls.inline.superscript': 'Sobreíndice',
                'components.controls.inline.subscript': 'Subíndice',
                'components.controls.link.linkTitle': 'Título del enlace',
                'components.controls.link.linkTarget': 'Objetivo del enlace',
                'components.controls.link.linkTargetOption': 'Abrir en nueva ventana',
                'components.controls.link.link': 'Enlazar',
                'components.controls.link.unlink': 'Desenlazar',
                'components.controls.list.list': 'Lista',
                'components.controls.list.unordered': 'Desordenada',
                'components.controls.list.ordered': 'Ordenada',
                'components.controls.list.indent': 'Indentada',
                'components.controls.list.outdent': 'Dentada',
                'components.controls.remove.remove': 'Eliminar',
                'components.controls.textalign.textalign': 'Alineación del texto',
                'components.controls.textalign.left': 'Izquierda',
                'components.controls.textalign.center': 'Centrado',
                'components.controls.textalign.right': 'Derecha',
                'components.controls.textalign.justify': 'Justificado',
              },
              ja: {
                'generic.add': '追加',
                'generic.cancel': 'キャンセル',
                'components.controls.blocktype.h1': '見出し1',
                'components.controls.blocktype.h2': '見出し2',
                'components.controls.blocktype.h3': '見出し3',
                'components.controls.blocktype.h4': '見出し4',
                'components.controls.blocktype.h5': '見出し5',
                'components.controls.blocktype.h6': '見出し6',
                'components.controls.blocktype.blockquote': '引用',
                'components.controls.blocktype.code': 'コード',
                'components.controls.blocktype.blocktype': 'スタイル',
                'components.controls.blocktype.normal': '標準テキスト',
                'components.controls.colorpicker.colorpicker': 'テキストの色',
                'components.controls.colorpicker.text': 'テキスト',
                'components.controls.colorpicker.background': 'ハイライト',
                'components.controls.embedded.embedded': '埋め込み',
                'components.controls.embedded.embeddedlink': '埋め込みリンク',
                'components.controls.embedded.enterlink': 'リンクを入力してください',
                'components.controls.emoji.emoji': '絵文字',
                'components.controls.fontfamily.fontfamily': 'フォント',
                'components.controls.fontsize.fontsize': 'フォントサイズ',
                'components.controls.history.history': '履歴',
                'components.controls.history.undo': '元に戻す',
                'components.controls.history.redo': 'やり直し',
                'components.controls.image.image': '画像',
                'components.controls.image.fileUpload': 'ファイルをアップロード',
                'components.controls.image.byURL': 'URL',
                'components.controls.image.dropFileText':
                  'ここに画像をドラッグするか、クリックしてください',
                'components.controls.inline.bold': '太字',
                'components.controls.inline.italic': '斜体',
                'components.controls.inline.underline': '下線',
                'components.controls.inline.strikethrough': '取り消し線',
                'components.controls.inline.monospace': '等幅フォント',
                'components.controls.inline.superscript': '上付き文字',
                'components.controls.inline.subscript': '下付き文字',
                'components.controls.link.linkTitle': 'リンクタイトル',
                'components.controls.link.linkTarget': 'リンク対象',
                'components.controls.link.linkTargetOption': '新しいウィンドウで開く',
                'components.controls.link.link': 'リンク',
                'components.controls.link.unlink': 'リンクを解除',
                'components.controls.list.list': 'リスト',
                'components.controls.list.unordered': '箇条書き',
                'components.controls.list.ordered': '番号付き',
                'components.controls.list.indent': 'インデント増',
                'components.controls.list.outdent': 'インデント減',
                'components.controls.remove.remove': '書式をクリア',
                'components.controls.textalign.textalign': '整列',
                'components.controls.textalign.left': '左揃え',
                'components.controls.textalign.center': '中央揃え',
                'components.controls.textalign.right': '右揃え',
                'components.controls.textalign.justify': '両端揃え',
              },
            };
          n(38), n(39);
          function Vo(t) {
            return (Vo =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  })(t);
          }
          function qo() {
            return (qo = Object.assign
              ? Object.assign.bind()
              : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                  }
                  return t;
                }).apply(this, arguments);
          }
          function Ko(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function Xo(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ko(Object(n), !0).forEach(function (t) {
                    $o(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Ko(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
            }
            return e;
          }
          function $o(t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function tr(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return er(t);
              })(t) ||
              (function (t) {
                if (
                  ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                  null != t['@@iterator']
                )
                  return Array.from(t);
              })(t) ||
              (function (t, e) {
                if (!t) return;
                if ('string' == typeof t) return er(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                'Object' === n && t.constructor && (n = t.constructor.name);
                if ('Map' === n || 'Set' === n) return Array.from(t);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                  return er(t, e);
              })(t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function er(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
          }
          function nr(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function or(t, e) {
            return (or = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                })(t, e);
          }
          function rr(o) {
            var r = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var t,
                e = ir(o);
              if (r) {
                var n = ir(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                {
                  if (e && ('object' === Vo(e) || 'function' == typeof e)) return e;
                  if (void 0 !== e)
                    throw new TypeError('Derived constructors may only return object or undefined');
                }
                return (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t);
              })(this, t);
            };
          }
          function ir(t) {
            return (ir = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          var cr = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && or(t, e);
            })(i, f['Component']);
            var t,
              e,
              n,
              r = rr(i);
            function i(t) {
              var c;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
                ((c = r.call(this, t)).onEditorBlur = function () {
                  c.setState({ editorFocused: !1 });
                }),
                (c.onEditorFocus = function (t) {
                  var e = c.props.onFocus;
                  c.setState({ editorFocused: !0 });
                  var n = c.focusHandler.isEditorFocused();
                  e && n && e(t);
                }),
                (c.onEditorMouseDown = function () {
                  c.focusHandler.onEditorMouseDown();
                }),
                (c.keyBindingFn = function (t) {
                  if ('Tab' !== t.key)
                    return (
                      ('ArrowUp' !== t.key && 'ArrowDown' !== t.key) || (b() && t.preventDefault()),
                      Object(E.getDefaultKeyBinding)(t)
                    );
                  var e = c.props.onTab;
                  if (!e || !e(t)) {
                    var n = Object(S.changeDepth)(c.state.editorState, t.shiftKey ? -1 : 1, 4);
                    n && n !== c.state.editorState && (c.onChange(n), t.preventDefault());
                  }
                  return null;
                }),
                (c.onToolbarFocus = function (t) {
                  var e = c.props.onFocus;
                  e && c.focusHandler.isToolbarFocused() && e(t);
                }),
                (c.onWrapperBlur = function (t) {
                  var e = c.props.onBlur;
                  e && c.focusHandler.isEditorBlur(t) && e(t, c.getEditorState());
                }),
                (c.onChange = function (t) {
                  var e = c.props,
                    n = e.readOnly,
                    o = e.onEditorStateChange;
                  n ||
                    ('atomic' === Object(S.getSelectedBlocksType)(t) &&
                      t.getSelection().isCollapsed) ||
                    (o && o(t, c.props.wrapperId),
                    M(c.props, 'editorState')
                      ? c.afterChange(t)
                      : c.setState({ editorState: t }, c.afterChange(t)));
                }),
                (c.setWrapperReference = function (t) {
                  c.wrapper = t;
                }),
                (c.setEditorReference = function (t) {
                  c.props.editorRef && c.props.editorRef(t), (c.editor = t);
                }),
                (c.getCompositeDecorator = function (t) {
                  var e = [].concat(tr(c.props.customDecorators), [
                    {
                      strategy: Mo,
                      component: jo({ showOpenOptionOnHover: t.link.showOpenOptionOnHover }),
                    },
                  ]);
                  return (
                    c.props.mention &&
                      e.push.apply(
                        e,
                        tr(
                          To(
                            Xo(
                              Xo({}, c.props.mention),
                              {},
                              {
                                onChange: c.onChange,
                                getEditorState: c.getEditorState,
                                getSuggestions: c.getSuggestions,
                                getWrapperRef: c.getWrapperRef,
                                modalHandler: c.modalHandler,
                              }
                            )
                          )
                        )
                      ),
                    c.props.hashtag && e.push(Ro(c.props.hashtag)),
                    new E.CompositeDecorator(e)
                  );
                }),
                (c.getWrapperRef = function () {
                  return c.wrapper;
                }),
                (c.getEditorState = function () {
                  return c.state ? c.state.editorState : null;
                }),
                (c.getSuggestions = function () {
                  return c.props.mention && c.props.mention.suggestions;
                }),
                (c.afterChange = function (o) {
                  setTimeout(function () {
                    var t = c.props,
                      e = t.onChange,
                      n = t.onContentStateChange;
                    e && e(Object(E.convertToRaw)(o.getCurrentContent())),
                      n && n(Object(E.convertToRaw)(o.getCurrentContent()));
                  });
                }),
                (c.isReadOnly = function () {
                  return c.props.readOnly;
                }),
                (c.isImageAlignmentEnabled = function () {
                  return c.state.toolbar.image.alignmentEnabled;
                }),
                (c.createEditorState = function (t) {
                  var e;
                  if (M(c.props, 'editorState'))
                    c.props.editorState &&
                      (e = E.EditorState.set(c.props.editorState, { decorator: t }));
                  else if (M(c.props, 'defaultEditorState'))
                    c.props.defaultEditorState &&
                      (e = E.EditorState.set(c.props.defaultEditorState, { decorator: t }));
                  else if (M(c.props, 'contentState')) {
                    if (c.props.contentState) {
                      var n = Object(E.convertFromRaw)(c.props.contentState);
                      (e = E.EditorState.createWithContent(n, t)),
                        (e = E.EditorState.moveSelectionToEnd(e));
                    }
                  } else if (
                    M(c.props, 'defaultContentState') ||
                    M(c.props, 'initialContentState')
                  ) {
                    var o = c.props.defaultContentState || c.props.initialContentState;
                    o &&
                      ((o = Object(E.convertFromRaw)(o)),
                      (e = E.EditorState.createWithContent(o, t)),
                      (e = E.EditorState.moveSelectionToEnd(e)));
                  }
                  return (e = e || E.EditorState.createEmpty(t));
                }),
                (c.filterEditorProps = function (t) {
                  return (
                    (e = t),
                    (n = [
                      'onChange',
                      'onEditorStateChange',
                      'onContentStateChange',
                      'initialContentState',
                      'defaultContentState',
                      'contentState',
                      'editorState',
                      'defaultEditorState',
                      'locale',
                      'localization',
                      'toolbarOnFocus',
                      'toolbar',
                      'toolbarCustomButtons',
                      'toolbarClassName',
                      'editorClassName',
                      'toolbarHidden',
                      'wrapperClassName',
                      'toolbarStyle',
                      'editorStyle',
                      'wrapperStyle',
                      'uploadCallback',
                      'onFocus',
                      'onBlur',
                      'onTab',
                      'mention',
                      'hashtag',
                      'ariaLabel',
                      'customBlockRenderFunc',
                      'customDecorators',
                      'handlePastedText',
                      'customStyleMap',
                    ]),
                    (o = Object.keys(e).filter(function (t) {
                      return n.indexOf(t) < 0;
                    })),
                    (r = {}),
                    o &&
                      0 < o.length &&
                      o.forEach(function (t) {
                        r[t] = e[t];
                      }),
                    r
                  );
                  var e, n, o, r;
                }),
                (c.getStyleMap = function (t) {
                  return Xo(Xo({}, Object(S.getCustomStyleMap)()), t.customStyleMap);
                }),
                (c.changeEditorState = function (t) {
                  var e = Object(E.convertFromRaw)(t),
                    n = c.state.editorState;
                  return (
                    (n = E.EditorState.push(n, e, 'insert-characters')),
                    (n = E.EditorState.moveSelectionToEnd(n))
                  );
                }),
                (c.focusEditor = function () {
                  setTimeout(function () {
                    c.editor.focus();
                  });
                }),
                (c.handleKeyCommand = function (t) {
                  var e = c.state,
                    n = e.editorState,
                    o = e.toolbar.inline;
                  if (o && 0 <= o.options.indexOf(t)) {
                    var r = E.RichUtils.handleKeyCommand(n, t);
                    if (r) return c.onChange(r), !0;
                  }
                  return !1;
                }),
                (c.handleReturn = function (t) {
                  if (b()) return !0;
                  var e = c.state.editorState,
                    n = Object(S.handleNewLine)(e, t);
                  return !!n && (c.onChange(n), !0);
                }),
                (c.handlePastedTextFn = function (t, e) {
                  var n = c.state.editorState,
                    o = c.props,
                    r = o.handlePastedText,
                    i = o.stripPastedStyles;
                  return r
                    ? r(t, e, n, c.onChange)
                    : !i &&
                        (function (t, e, n, o) {
                          var r = Object(S.getSelectedBlock)(n);
                          if (r && 'code' === r.type) {
                            var i = E.Modifier.replaceText(
                              n.getCurrentContent(),
                              n.getSelection(),
                              t,
                              n.getCurrentInlineStyle()
                            );
                            return o(E.EditorState.push(n, i, 'insert-characters')), !0;
                          }
                          if (e) {
                            var c = O()(e),
                              a = n.getCurrentContent();
                            return (
                              c.entityMap.forEach(function (t, e) {
                                a = a.mergeEntityData(e, t);
                              }),
                              (a = E.Modifier.replaceWithFragment(
                                a,
                                n.getSelection(),
                                new x.List(c.contentBlocks)
                              )),
                              o(E.EditorState.push(n, a, 'insert-characters')),
                              !0
                            );
                          }
                          return !1;
                        })(t, e, n, c.onChange);
                }),
                (c.preventDefault = function (t) {
                  'INPUT' === t.target.tagName ||
                  'LABEL' === t.target.tagName ||
                  'TEXTAREA' === t.target.tagName
                    ? c.focusHandler.onInputMouseDown()
                    : t.preventDefault();
                });
              var e = D(Go, t.toolbar),
                n = t.wrapperId ? t.wrapperId : Math.floor(1e4 * Math.random());
              (c.wrapperId = 'rdw-wrapper-'.concat(n)),
                (c.modalHandler = new a()),
                (c.focusHandler = new p()),
                (c.blockRendererFn = Wo(
                  {
                    isReadOnly: c.isReadOnly,
                    isImageAlignmentEnabled: c.isImageAlignmentEnabled,
                    getEditorState: c.getEditorState,
                    onChange: c.onChange,
                  },
                  t.customBlockRenderFunc
                )),
                (c.editorProps = c.filterEditorProps(t)),
                (c.customStyleMap = c.getStyleMap(t)),
                (c.compositeDecorator = c.getCompositeDecorator(e));
              var o = c.createEditorState(c.compositeDecorator);
              return (
                Object(S.extractInlineStyle)(o),
                (c.state = { editorState: o, editorFocused: !1, toolbar: e }),
                c
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.modalHandler.init(this.wrapperId);
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (t) {
                    if (t !== this.props) {
                      var e = {},
                        n = this.props,
                        o = n.editorState,
                        r = n.contentState;
                      if (!this.state.toolbar) {
                        var i = D(Go, i);
                        e.toolbar = i;
                      }
                      if (M(this.props, 'editorState') && o !== t.editorState)
                        e.editorState = o
                          ? E.EditorState.set(o, { decorator: this.compositeDecorator })
                          : E.EditorState.createEmpty(this.compositeDecorator);
                      else if (M(this.props, 'contentState') && r !== t.contentState)
                        if (r) {
                          var c = this.changeEditorState(r);
                          c && (e.editorState = c);
                        } else e.editorState = E.EditorState.createEmpty(this.compositeDecorator);
                      (t.editorState === o && t.contentState === r) ||
                        Object(S.extractInlineStyle)(e.editorState),
                        Object.keys(e).length && this.setState(e),
                        (this.editorProps = this.filterEditorProps(this.props)),
                        (this.customStyleMap = this.getStyleMap(this.props));
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.state,
                      e = t.editorState,
                      n = t.editorFocused,
                      r = t.toolbar,
                      o = this.props,
                      i = o.locale,
                      c = o.localization,
                      a = c.locale,
                      l = c.translations,
                      s = o.toolbarCustomButtons,
                      u = o.toolbarOnFocus,
                      p = o.toolbarClassName,
                      d = o.toolbarHidden,
                      f = o.editorClassName,
                      y = o.wrapperClassName,
                      m = o.toolbarStyle,
                      g = o.editorStyle,
                      b = o.wrapperStyle,
                      h = o.uploadCallback,
                      M = o.ariaLabel,
                      j = {
                        modalHandler: this.modalHandler,
                        editorState: e,
                        onChange: this.onChange,
                        translations: Xo(Xo({}, Jo[i || a]), l),
                      },
                      v = n || this.focusHandler.isInputFocused() || !u;
                    return N.a.createElement(
                      'div',
                      {
                        id: this.wrapperId,
                        className: w()(y, 'rdw-editor-wrapper'),
                        style: b,
                        onClick: this.modalHandler.onEditorClick,
                        onBlur: this.onWrapperBlur,
                        'aria-label': 'rdw-wrapper',
                      },
                      !d &&
                        N.a.createElement(
                          'div',
                          {
                            className: w()('rdw-editor-toolbar', p),
                            style: Xo({ visibility: v ? 'visible' : 'hidden' }, m),
                            onMouseDown: this.preventDefault,
                            'aria-label': 'rdw-toolbar',
                            'aria-hidden': (!n && u).toString(),
                            onFocus: this.onToolbarFocus,
                          },
                          r.options.map(function (t, e) {
                            var n = so[t],
                              o = r[t];
                            return (
                              'image' === t && h && (o.uploadCallback = h),
                              N.a.createElement(n, qo({ key: e }, j, { config: o }))
                            );
                          }),
                          s &&
                            s.map(function (t, e) {
                              return N.a.cloneElement(t, Xo({ key: e }, j));
                            })
                        ),
                      N.a.createElement(
                        'div',
                        {
                          ref: this.setWrapperReference,
                          className: w()(f, 'rdw-editor-main'),
                          style: g,
                          onClick: this.focusEditor,
                          onFocus: this.onEditorFocus,
                          onBlur: this.onEditorBlur,
                          onKeyDown: C.onKeyDown,
                          onMouseDown: this.onEditorMouseDown,
                        },
                        N.a.createElement(
                          E.Editor,
                          qo(
                            {
                              ref: this.setEditorReference,
                              keyBindingFn: this.keyBindingFn,
                              editorState: e,
                              onChange: this.onChange,
                              blockStyleFn: L,
                              customStyleMap: this.getStyleMap(this.props),
                              handleReturn: this.handleReturn,
                              handlePastedText: this.handlePastedTextFn,
                              blockRendererFn: this.blockRendererFn,
                              handleKeyCommand: this.handleKeyCommand,
                              ariaLabel: M || 'rdw-editor',
                              blockRenderMap: S.blockRenderMap,
                            },
                            this.editorProps
                          )
                        )
                      )
                    );
                  },
                },
              ]) && nr(t.prototype, e),
              n && nr(t, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i
            );
          })();
          (cr.propTypes = {
            onChange: y.a.func,
            onEditorStateChange: y.a.func,
            onContentStateChange: y.a.func,
            initialContentState: y.a.object,
            defaultContentState: y.a.object,
            contentState: y.a.object,
            editorState: y.a.object,
            defaultEditorState: y.a.object,
            toolbarOnFocus: y.a.bool,
            spellCheck: y.a.bool,
            stripPastedStyles: y.a.bool,
            toolbar: y.a.object,
            toolbarCustomButtons: y.a.array,
            toolbarClassName: y.a.string,
            toolbarHidden: y.a.bool,
            locale: y.a.string,
            localization: y.a.object,
            editorClassName: y.a.string,
            wrapperClassName: y.a.string,
            toolbarStyle: y.a.object,
            editorStyle: y.a.object,
            wrapperStyle: y.a.object,
            uploadCallback: y.a.func,
            onFocus: y.a.func,
            onBlur: y.a.func,
            onTab: y.a.func,
            mention: y.a.object,
            hashtag: y.a.object,
            textAlignment: y.a.string,
            readOnly: y.a.bool,
            tabIndex: y.a.number,
            placeholder: y.a.string,
            ariaLabel: y.a.string,
            ariaOwneeID: y.a.string,
            ariaActiveDescendantID: y.a.string,
            ariaAutoComplete: y.a.string,
            ariaDescribedBy: y.a.string,
            ariaExpanded: y.a.string,
            ariaHasPopup: y.a.string,
            customBlockRenderFunc: y.a.func,
            wrapperId: y.a.number,
            customDecorators: y.a.array,
            editorRef: y.a.func,
            handlePastedText: y.a.func,
          }),
            (cr.defaultProps = {
              toolbarOnFocus: !1,
              toolbarHidden: !1,
              stripPastedStyles: !1,
              localization: { locale: 'en', translations: {} },
              customDecorators: [],
            });
          var ar = cr;
        },
      ]),
    (i.c = a),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ''),
    i((i.s = 8))
  );
  function i(t) {
    if (a[t]) return a[t].exports;
    var e = (a[t] = { i: t, l: !1, exports: {} });
    return c[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports;
  }
  var c, a;
});
