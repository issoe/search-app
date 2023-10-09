/*!
 * PSPDFKit for Web 2023.4.4 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([
    [5747],
    {
        12711: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { default: () => j });
            var n = a(84121),
                s = a(67294),
                o = a(94184),
                r = a.n(o),
                l = a(35369),
                i = a(76154),
                c = a(67366),
                d = a(50974),
                m = a(25915),
                u = a(98785),
                p = a(91859),
                g = a(20234),
                f = a(4054),
                P = a(82481),
                y = a(2810),
                v = a(35129),
                b = a(6437),
                h = a(13540),
                I = a(73264),
                w = a(34855),
                E = a(3999),
                k = a(17375),
                N = a(22122),
                D = a(72584);
            const x = ['type'];
            function S(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? S(Object(a), !0).forEach(function (t) {
                              (0, n.Z)(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                        : S(Object(a)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                          });
                }
                return e;
            }
            const O = s.memo((e) => {
                    let {
                        items: t,
                        builtInItems: n,
                        moveDialog: o,
                        CSS_HACK: {
                            components: { ToolbarButtonComponent: l },
                            styles: i,
                        },
                    } = e;
                    return t.map((e, t) => {
                        const c = n.find((t) => t.type === e.type);
                        if ('spacer' === e.type)
                            return s.createElement('div', { style: { flex: 1 }, className: e.className, key: `spacer-${t}` });
                        if ('move' === e.type && c)
                            return s.createElement(
                                'div',
                                { key: c.type, className: i.moveButtonContainer },
                                s.createElement(
                                    l,
                                    (0, N.Z)({}, c, {
                                        icon: a(92531),
                                        className: r()(c.className, e.className),
                                        onPress: (e) => {
                                            c && c.onPress && c.onPress(e);
                                        },
                                    }),
                                ),
                                o,
                            );
                        if (c) {
                            const n = (0, D.zW)(c.type);
                            return s.createElement(
                                l,
                                (0, N.Z)({}, c, {
                                    key: c.type || t,
                                    icon: a(33720)(`./${n}.svg`),
                                    onPress: (e) => {
                                        c && c.onPress && c.onPress(e);
                                    },
                                    className: r()(c.className, e.className),
                                }),
                            );
                        }
                        if ('custom' === e.type && e.node) {
                            const { type: a } = e,
                                n = (0, k.Z)(e, x);
                            return s.createElement(
                                E.Z,
                                (0, N.Z)({}, n, { onPress: (t) => e.onPress && e.onPress(t, e.id), key: e.id || t }),
                            );
                        }
                        return s.createElement(
                            l,
                            (0, N.Z)({}, e, { key: (c && c.type) || t, onPress: (t) => e.onPress && e.onPress(t, e.id) }),
                        );
                    });
                }),
                M = s.memo((e) => {
                    let {
                        items: t,
                        builtInItems: n,
                        CSS_HACK: {
                            components: { ToolbarDropdownGroupComponent: o, ToolbarButtonComponent: l },
                            styles: i,
                        },
                        frameWindow: c,
                    } = e;
                    const d = t.map((e) => {
                        let { item: t, index: a } = e;
                        const s = n.find((e) => e.type === t.type);
                        return s
                            ? {
                                  index: a,
                                  item: C(
                                      C({}, s),
                                      {},
                                      {
                                          className: r()(s.className, t.className),
                                          onPress: (e) => {
                                              s.onPress && s.onPress(e);
                                          },
                                      },
                                  ),
                              }
                            : { item: t, index: a };
                    });
                    return (
                        d.length > 0 &&
                        s.createElement(
                            s.Fragment,
                            null,
                            s.createElement('div', { style: { flex: 1 }, key: 'spacer-responsive' }),
                            s.createElement(o, {
                                icon: { type: 'more', size: { width: 20, height: 20 } },
                                items: d,
                                discreteDropdown: !0,
                                caretDirection: 'down',
                                role: 'menu',
                                ItemComponent: (e) => {
                                    let { item: t, isSelectedItem: o, state: c, itemComponentProps: d } = e;
                                    const m = !o && n.find((e) => e.type === t.item.type);
                                    if (o) return null;
                                    const u = m && m.type ? (0, D.zW)(m.type) : '';
                                    return t.item.node
                                        ? s.createElement(
                                              E.Z,
                                              (0, N.Z)({}, t.item, {
                                                  onPress: t.item.onPress ? (e) => t.item.onPress(e, t.id) : void 0,
                                                  key: t.item.id || t.index,
                                              }),
                                          )
                                        : s.createElement(
                                              l,
                                              (0, N.Z)({}, t.item, {
                                                  role: 'menuitem',
                                                  className: r()(
                                                      t.item.className,
                                                      i.toolbar.dropdownButton,
                                                      'Focused' === c && i.toolbar['dropdownButton' + c],
                                                  ),
                                                  icon: m ? a(33720)(`./${u}.svg`) : t.item.icon,
                                                  itemComponentProps: d,
                                              }),
                                          );
                                },
                                onSelect: (e, t) => {
                                    const { onPress: a, disabled: n } = t.item;
                                    n || (a && a(e));
                                },
                                noInitialSelection: !0,
                                frameWindow: c,
                            }),
                        )
                    );
                });
            var z, A, K;
            function B(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? B(Object(a), !0).forEach(function (t) {
                              (0, n.Z)(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                        : B(Object(a)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                          });
                }
                return e;
            }
            const G = new P.$u({ width: p.zA, height: p._2 }),
                L = (e) => {
                    const { styles: t, formatMessage: n, movePreview: o } = e;
                    return s.createElement(
                        'div',
                        {
                            style: { width: e.width, height: e.height },
                            className: r()(t.importedDocument, { [t.importedDocumentMovePreview]: o }),
                        },
                        s.createElement(
                            'div',
                            { className: t.importedDocumentIconCircle },
                            s.createElement(h.Z, { src: a(21289) }),
                        ),
                        s.createElement('span', { className: t.importedDocumentInfo }, n(Z.documentMergedHere)),
                    );
                },
                R = (e, t, a, n) => {
                    const s = t.flatten();
                    let o = e.map((e) => ({ type: 'page', page: e, rotation: 0, label: e.pageLabel }));
                    const r = (e) => {
                        const t = e.dupeOf || e.label;
                        let a = 0;
                        for (const e of o)
                            'dupeOf' in e &&
                                null != e.dupeOf &&
                                e.dupeOf === t &&
                                null != e.dupeNumber &&
                                e.dupeNumber > a &&
                                (a = e.dupeNumber);
                        return a + 1;
                    };
                    let l = 0;
                    for (const e of s)
                        switch (e.type) {
                            case 'addPage': {
                                let t;
                                null != e.afterPageIndex
                                    ? (t = e.afterPageIndex + 1)
                                    : ((0, d.kG)(null != e.beforePageIndex), (t = e.beforePageIndex)),
                                    ++l,
                                    (o = o.insert(t, {
                                        type: 'newPage',
                                        label: `${a(Z.newPage)} ${l}`,
                                        rotation: 0,
                                        size: new P.$u({ width: e.pageWidth, height: e.pageHeight }),
                                    }));
                                break;
                            }
                            case 'removePages': {
                                const t = e.pageIndexes.map((e) => o.get(e));
                                for (const e of t) {
                                    (0, d.kG)(null != e);
                                    const t = o.indexOf(e);
                                    o = o.delete(t);
                                }
                                break;
                            }
                            case 'rotatePages':
                                for (const t of e.pageIndexes) {
                                    const a = o.get(t);
                                    let n, s;
                                    (0, d.kG)(null != a), (0, d.kG)('page' === a.type || 'newPage' === a.type);
                                    const r = a.rotation;
                                    if (
                                        ((s =
                                            90 === e.rotateBy
                                                ? 270 === r
                                                    ? 0
                                                    : r + e.rotateBy
                                                : 90 === r
                                                ? 0
                                                : 180 === r
                                                ? 90
                                                : 270 === r
                                                ? 180
                                                : r + e.rotateBy),
                                        (0, d.kG)(0 === s || 90 === s || 180 === s || 270 === s),
                                        'page' === a.type)
                                    )
                                        n = F(F({}, a), {}, { rotation: s });
                                    else {
                                        if ('newPage' !== a.type) throw new d.p2('Rotation is not allowed on imported documents');
                                        n = F(F({}, a), {}, { rotation: s });
                                    }
                                    o = o.set(t, n);
                                }
                                break;
                            case 'duplicatePages': {
                                const t = e.pageIndexes.map((e) => o.get(e));
                                for (const e of t) {
                                    (0, d.kG)(null != e), (0, d.kG)('page' === e.type);
                                    const t = r(e),
                                        a = e.dupeOf || e.label,
                                        n = o.indexOf(e);
                                    o = o.insert(n + 1, Object.assign({}, e, { label: `${a} (${t})`, dupeOf: a, dupeNumber: t }));
                                }
                                break;
                            }
                            case 'movePages': {
                                const t = e.pageIndexes;
                                if (1 === t.length) {
                                    const a = t[0];
                                    let n;
                                    null != e.beforePageIndex
                                        ? (n = e.beforePageIndex)
                                        : ((0, d.kG)(null != e.afterPageIndex), (n = e.afterPageIndex + 1));
                                    const s = o.get(a);
                                    (0, d.kG)(null != s);
                                    const r = o.get(n),
                                        l = o.size;
                                    (o = o.delete(a)),
                                        n === l
                                            ? (o = o.push(s))
                                            : 0 === n
                                            ? (o = o.unshift(s))
                                            : ((0, d.kG)(null != r), (o = o.insert(o.indexOf(r), s)));
                                } else {
                                    const a = t.slice().sort();
                                    if (null != e.beforePageIndex) {
                                        (0, d.kG)(0 === e.beforePageIndex);
                                        const t = a.map((e) => o.get(e)).reverse();
                                        for (const e of t) (0, d.kG)(null != e), (o = o.delete(o.indexOf(e))), (o = o.unshift(e));
                                    } else {
                                        (0, d.kG)(null != e.afterPageIndex);
                                        const t = o.get(e.afterPageIndex);
                                        (0, d.kG)(null != t);
                                        const n = a.map((e) => o.get(e)).reverse();
                                        for (const e of n)
                                            (0, d.kG)(null != e),
                                                (o = o.delete(o.indexOf(e))),
                                                (o = o.insert(o.indexOf(t) + 1, e));
                                    }
                                }
                                break;
                            }
                            case 'importDocument': {
                                let t, a;
                                if (
                                    ('beforePageIndex' in e && null != e.beforePageIndex
                                        ? (t = e.beforePageIndex)
                                        : ((0, d.kG)('afterPageIndex' in e && null != e.afterPageIndex),
                                          (t = e.afterPageIndex + 1)),
                                    'string' == typeof e.document)
                                ) {
                                    const t = e.document;
                                    (0, d.kG)(n.has(t)), (a = n.get(t, 'Imported Document'));
                                } else (0, d.kG)('string' == typeof e.document.name), (a = e.document.name);
                                o = o.insert(t, { type: 'importedDocument', label: a });
                                break;
                            }
                            case 'keepPages':
                            case 'applyInstantJson':
                            case 'applyXfdf':
                            case 'flattenAnnotations':
                            case 'performOcr':
                            case 'setPageLabel':
                            case 'applyRedactions':
                            case 'updateMetadata':
                            case 'cropPages':
                                throw Error('Unknown document operation');
                            default:
                                (0, d.Rz)(e.type);
                        }
                    return o;
                },
                T = (e) => {
                    const { pages: t, style: a, styles: n, previewCount: o } = e;
                    return s.createElement(
                        'div',
                        { className: n.movePreview },
                        s.createElement(
                            'div',
                            { className: r()(n.movePreviewPages, { [n.movePreviewPagesLoose]: 'loose' === a }) },
                            t,
                        ),
                        s.createElement('div', { className: n.movePreviewCount }, o || t.length),
                    );
                },
                j = (e) => {
                    const { onCancel: t, onDialog: n } = e,
                        {
                            pages: o,
                            backend: k,
                            frameWindow: N,
                            footerItems: D,
                            toolbarItems: x,
                        } = (0, c.v9)((e) => {
                            let {
                                pages: t,
                                backend: a,
                                frameWindow: n,
                                documentEditorFooterItems: s,
                                documentEditorToolbarItems: o,
                            } = e;
                            return { pages: t, backend: a, frameWindow: n, footerItems: s.toJS(), toolbarItems: o.toJS() };
                        }, c.wU),
                        S = (0, c.I0)(),
                        { formatMessage: C } = (0, i.YB)(),
                        { styles: B } = e.CSS_HACK,
                        [j, H] = s.useState((0, l.D5)()),
                        [W, $] = s.useState((0, l.aV)()),
                        [_, V] = s.useState(0),
                        U = W.slice(0, W.size - _),
                        Y = R(o, U, C, j),
                        [J, X] = s.useState((0, l.l4)()),
                        [q, Q] = s.useState(!1),
                        [ee, te] = s.useState(!1),
                        ae = s.useRef(null),
                        ne = s.useRef(null),
                        [se, oe] = s.useState(!1),
                        [re, le] = s.useState(''),
                        ie = s.useCallback(() => {
                            const e = ne.current;
                            null != e &&
                                (se && e.ownerDocument.activeElement !== e
                                    ? e.focus()
                                    : se || e.ownerDocument.activeElement !== e || e.blur());
                        }, [se]),
                        ce = s.useCallback(
                            (e) => {
                                oe(e), ie(), n(e);
                            },
                            [n, ie],
                        );
                    s.useEffect(() => {
                        ie();
                    }, [ie]);
                    const de = s.useCallback(
                            (e) => {
                                $(U.push(e)), V(0);
                            },
                            [U],
                        ),
                        me = s.useRef(!0);
                    s.useLayoutEffect(
                        () => () => {
                            me.current && (me.current = !1);
                        },
                        [],
                    );
                    const ue = s.useCallback(() => {
                            const e = o.get(0),
                                t = e ? e.pageSize : G,
                                a = {
                                    type: 'addPage',
                                    backgroundColor: P.Il.WHITE,
                                    pageWidth: t.width,
                                    pageHeight: t.height,
                                    rotateBy: 0,
                                };
                            1 === J.size ? (a.afterPageIndex = J.first()) : (a.beforePageIndex = 0), de(a), X(J.clear());
                        }, [o, J, de]),
                        pe = s.useCallback(() => {
                            de({ type: 'removePages', pageIndexes: J.toArray() }), X(J.clear());
                        }, [de, J]),
                        ge = s.useCallback(() => {
                            de({ type: 'duplicatePages', pageIndexes: J.toArray() }), X(J.clear());
                        }, [de, J]),
                        fe = s.useCallback(() => {
                            de({ type: 'rotatePages', pageIndexes: J.toArray(), rotateBy: 270 });
                        }, [de, J]),
                        Pe = s.useCallback(() => {
                            de({ type: 'rotatePages', pageIndexes: J.toArray(), rotateBy: 90 });
                        }, [de, J]),
                        ye = s.useCallback(() => {
                            ce(!se);
                        }, [se, ce]),
                        ve = s.useCallback(
                            (e) => {
                                const t = e.target.value;
                                let a = t;
                                const n = parseInt(t, 10);
                                isNaN(n) || (a = Math.min(Math.max(n, 0), Y.size).toString()), le(a);
                            },
                            [Y.size],
                        ),
                        be = parseInt(re, 10),
                        he = s.useCallback((e) => {
                            let t;
                            return (
                                1 === e.size ||
                                null ==
                                    e.sort().find((e) => {
                                        let a = !1;
                                        return null != t && (a = e !== t + 1), (t = e), a;
                                    })
                            );
                        }, []),
                        Ie = s.useCallback(
                            (e, t) => {
                                const a = null != t ? t : J,
                                    n = he(a);
                                return !(a.includes(e - 1) || (0 === e && n && a.includes(0)) || (n && a.sort().first() === e));
                            },
                            [J, he],
                        ),
                        we = !isNaN(be) && Ie(be),
                        Ee = s.useCallback(
                            (e, t) => {
                                const a = null != t ? t : J,
                                    n = e - 1;
                                de(
                                    F(
                                        { type: 'movePages', pageIndexes: a.toArray() },
                                        0 === e ? { beforePageIndex: 0 } : { afterPageIndex: n },
                                    ),
                                );
                                let s = (0, l.l4)(),
                                    o = 0;
                                0 !== e &&
                                    ((o = n + 1),
                                    a.forEach((e) => {
                                        e < n && --o;
                                    }));
                                let r = o;
                                a.forEach(() => {
                                    (s = s.add(r)), ++r;
                                }),
                                    X(s);
                            },
                            [J, de, X],
                        ),
                        ke = s.useCallback(
                            (e) => {
                                e.preventDefault(), we && (Ee(be), ce(!1));
                            },
                            [we, be, ce, Ee],
                        ),
                        Ne = s.useCallback(
                            (e) => {
                                const t = e.target;
                                if (!se || t.classList.contains(B.moveToolbarButton)) return;
                                const a = ae.current;
                                (0, d.kG)(null != a), a.contains(t) || ce(!1);
                            },
                            [se, ce, B.moveToolbarButton],
                        ),
                        De = s.useCallback(() => {
                            const e = J.sort()
                                .toList()
                                .map((e) => ({ type: 'movePages', pageIndexes: [e], beforePageIndex: e - 1 }));
                            de(e), X((0, l.l4)(J.toArray().map((e) => e - 1)));
                        }, [de, J]),
                        xe = s.useCallback(() => {
                            const e = J.sort()
                                .toList()
                                .map((e) => ({ type: 'movePages', pageIndexes: [e], afterPageIndex: e + 1 }));
                            de(e), X((0, l.l4)(J.toArray().map((e) => e + 1)));
                        }, [de, J]),
                        Se = s.useCallback(() => {
                            X(J.clear()), V(_ + 1);
                        }, [J, _]),
                        Ce = s.useCallback(() => {
                            X(J.clear()), V(_ - 1);
                        }, [J, _]),
                        Oe = s.useCallback(async () => {
                            const e = {};
                            1 === J.size ? (e.afterPageIndex = J.first()) : (e.beforePageIndex = 0);
                            {
                                const t = document.createElement('input');
                                (t.type = 'file'),
                                    (t.accept = 'application/pdf'),
                                    (t.onclick = (e) => {
                                        (0, d.kG)(e.target instanceof HTMLInputElement), (e.target.value = '');
                                    }),
                                    (t.onchange = (t) => {
                                        var a;
                                        if (
                                            ((0, d.kG)(t.target instanceof HTMLInputElement),
                                            0 === (null === (a = t.target.files) || void 0 === a ? void 0 : a.length))
                                        )
                                            return;
                                        let n = U;
                                        for (const a of t.target.files) {
                                            if ('string' != typeof a.name || 0 === a.name.length) return;
                                            if ('application/pdf' !== a.type)
                                                return void (0, d.wp)('The uploaded file must be a PDF.');
                                            if (-1 !== Y.findIndex((e) => 'importedDocument' === e.type && e.label === a.name))
                                                return;
                                            a.arrayBuffer()
                                                .then((t) => {
                                                    (n = n.push(
                                                        F(
                                                            {
                                                                type: 'importDocument',
                                                                treatImportedDocumentAsOnePage: !0,
                                                                document: new File([t], a.name, {
                                                                    type: a.type,
                                                                    lastModified: a.lastModified,
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    )),
                                                        $(n),
                                                        V(0),
                                                        X(J.clear());
                                                })
                                                .catch((e) => {
                                                    throw new d.p2(`Could not read the imported file: ${e.message}`);
                                                });
                                        }
                                    }),
                                    t.click();
                            }
                        }, [J, j, de, U, Y]),
                        Me = s.useCallback(() => {
                            X(Y.keySeq().toSet());
                        }, [Y, X]),
                        ze = s.useCallback(() => {
                            X(J.clear());
                        }, [J, X]),
                        Ae = s.useCallback(
                            (e) => {
                                J.has(e) ? X(J.delete(e)) : X(J.add(e));
                            },
                            [J, X],
                        ),
                        Ke = s.useCallback(() => {
                            t();
                        }, [t]),
                        Be = s.useCallback(() => {
                            Q(!0),
                                S(
                                    (0, g.b_)(
                                        U.flatten().toArray(),
                                        () => {
                                            me.current && Q(!1);
                                        },
                                        (e) => {
                                            throw (me.current && Q(!1), e);
                                        },
                                    ),
                                );
                        }, [S, U]),
                        Fe = s.useCallback(async () => {
                            Q(!0);
                            try {
                                const e = await k.exportPDFWithOperations(U.flatten().toArray().map(y.kg));
                                (0, f.cR)(e, N);
                            } catch (e) {
                                throw e;
                            } finally {
                                me.current && Q(!1);
                            }
                        }, [k, U, N]),
                        Ge = (e, t, a, n) => {
                            const o = Y.get(e);
                            let r;
                            switch (((0, d.kG)(null != o), o.type)) {
                                case 'page':
                                    r = s.createElement(u.Z, {
                                        key: `page-${o.label}`,
                                        page: o.page,
                                        size: t,
                                        maxSize: a,
                                        rotation: o.rotation,
                                    });
                                    break;
                                case 'newPage': {
                                    const { rotatedWidth: e, rotatedHeight: n } = (0, u.X)(o.size, o.rotation, t, a);
                                    r = s.createElement('div', {
                                        key: `newPage-${o.label}`,
                                        className: B.newPage,
                                        style: { width: e, height: n },
                                    });
                                    break;
                                }
                                case 'importedDocument': {
                                    const { containerWidth: e, containerHeight: l } = (0, u.X)(G, 0, t, a);
                                    r = s.createElement(L, {
                                        width: e,
                                        height: l,
                                        movePreview: n,
                                        key: `importedDoc-${o.label}`,
                                        styles: B,
                                        formatMessage: C,
                                    });
                                    break;
                                }
                                default:
                                    (r = z || (z = s.createElement(s.Fragment, null))), (0, d.Rz)(o.type);
                            }
                            return {
                                item: r,
                                label: o.label,
                                props: 'page' === o.type ? { 'data-original-page-index': o.page.pageIndex } : {},
                            };
                        },
                        Le = J.size > 0 && J.size !== Y.size && !q,
                        Re =
                            J.size > 0 &&
                            void 0 ===
                                J.find((e) => {
                                    const t = Y.get(e);
                                    return (0, d.kG)(null != t), 'page' !== t.type && 'newPage' !== t.type;
                                }),
                        Te =
                            J.size > 0 &&
                            void 0 ===
                                J.find((e) => {
                                    const t = Y.get(e);
                                    return (0, d.kG)(null != t), 'page' !== t.type;
                                }),
                        je = !J.isEmpty() && J.size !== Y.size && !q,
                        Ze = !J.isEmpty() && !J.includes(0),
                        He = !J.isEmpty() && !J.includes(Y.size - 1),
                        We = _ < W.size,
                        $e = _ > 0,
                        _e = J.size < Y.size && !q,
                        Ve = !J.isEmpty() && !q,
                        Ue = s.useRef(null),
                        Ye = s.useRef(!1);
                    s.useLayoutEffect(() => {
                        const e = Ue.current;
                        if (null == e) return;
                        Ye.current || (e.focus(), (Ye.current = !0));
                        const t = (e) => {
                            if (null != document.activeElement && 'INPUT' === document.activeElement.tagName) return;
                            if (q) return;
                            const t = e.key.toLowerCase(),
                                a = e.metaKey || e.ctrlKey,
                                n = a && !e.shiftKey && !e.altKey,
                                s = e.altKey && !a && !e.shiftKey,
                                o = !a && !e.shiftKey && !e.altKey;
                            if (e.altKey && e.shiftKey && !a && 'arrowleft' === t && Re) fe();
                            else if (e.altKey && e.shiftKey && !a && 'arrowright' === t && Re) Pe();
                            else if (s && 'arrowleft' === t && Ze) De();
                            else if (s && 'arrowright' === t && He) xe();
                            else if (a && e.shiftKey && !e.altKey && 'z' === t && $e) Ce();
                            else if (n && 'z' === t && We) Se();
                            else if (n && 'a' === t && _e) Me();
                            else if (n && 'd' === t && Ve) ze();
                            else if (o && 'n' === t) ue();
                            else if (o && 'd' === t && Le) pe();
                            else if (o && 'c' === t && Te) ge();
                            else if (o && 'l' === t && Re) fe();
                            else if (o && 'r' === t && Re) Pe();
                            else if (o && 'm' === t && je) ce(!0);
                            else {
                                if (!o || 'i' !== t) return;
                                Oe();
                            }
                            e.preventDefault();
                        };
                        return (
                            e.addEventListener('keydown', t),
                            () => {
                                e.removeEventListener('keydown', t);
                            }
                        );
                    }, [Te, je, Ze, He, $e, Le, Re, _e, Ve, We, ue, ge, Oe, De, xe, Ce, pe, fe, Pe, Me, ze, Se, q, ce]);
                    const Je = B.toolbar.toolbarButton,
                        Xe = [
                            { type: 'add', onPress: ue, className: Je, disabled: q, children: C(Z.newPage) },
                            { type: 'remove', onPress: pe, className: Je, disabled: !Le, children: C(Z.removePage) },
                            { type: 'duplicate', onPress: ge, className: Je, children: C(Z.duplicatePage), disabled: !Te || q },
                            {
                                type: 'rotate-left',
                                onPress: fe,
                                className: Je,
                                children: C(Z.rotatePageLeft),
                                disabled: !Re || q,
                            },
                            {
                                type: 'rotate-right',
                                onPress: Pe,
                                className: Je,
                                children: C(Z.rotatePageRight),
                                disabled: !Re || q,
                            },
                            {
                                type: 'move',
                                onPress: ye,
                                className: r()(Je, B.moveToolbarButton),
                                children: C(Z.openMoveDialog),
                                disabled: !je,
                            },
                            {
                                type: 'move-left',
                                onPress: De,
                                className: B.toolbar.toolbarButton,
                                children: C(Z.moveBefore),
                                disabled: !Ze || q,
                            },
                            { type: 'move-right', onPress: xe, className: Je, children: C(Z.moveAfter), disabled: !He || q },
                            { type: 'import-document', onPress: Oe, className: Je, children: C(Z.mergeDocument), disabled: q },
                            { type: 'spacer' },
                            { type: 'undo', onPress: Se, className: Je, children: C(v.Z.undo), disabled: !We || q },
                            { type: 'redo', onPress: Ce, className: Je, children: C(v.Z.redo), disabled: !$e || q },
                            { type: 'select-all', onPress: Me, className: Je, children: C(Z.selectAll), disabled: !_e },
                            { type: 'select-none', onPress: ze, className: Je, children: C(Z.selectNone), disabled: !Ve },
                        ],
                        [qe, Qe] = s.useState(Number.POSITIVE_INFINITY),
                        [et, tt] = s.useMemo(
                            () =>
                                qe === Number.POSITIVE_INFINITY
                                    ? [x, []]
                                    : [
                                          x.slice(0, qe),
                                          x
                                              .slice(qe)
                                              .filter((e) => 'spacer' !== e.type)
                                              .map((e, t) => ({
                                                  index: t,
                                                  item: F(F({}, e), {}, { dropdownGroup: 'documentEditor' }),
                                              })),
                                      ],
                            [x, qe],
                        ),
                        [at, nt] = s.useState(new P.$u()),
                        st = s.useCallback(
                            (e) => {
                                nt(
                                    (t) => (
                                        t.width !== e.width && Qe(Number.POSITIVE_INFINITY),
                                        new P.$u({ width: e.width, height: e.height })
                                    ),
                                );
                            },
                            [nt, Qe],
                        ),
                        ot = s.useRef(null);
                    s.useLayoutEffect(() => {
                        const e = ot.current;
                        if (!e || 0 === at.width) return;
                        const t = e.children;
                        if (t.length === qe) return;
                        const a = e.ownerDocument.defaultView.getComputedStyle(e);
                        let n =
                            44 +
                            (parseInt(a.getPropertyValue('padding-left')) || 0) +
                            (parseInt(a.getPropertyValue('padding-right')) || 0);
                        const s = [].findIndex.call(t, (e, t) => 'spacer' !== x[t].type && ((n += e.clientWidth), n > at.width));
                        Qe(-1 === s ? Number.POSITIVE_INFINITY : s);
                        e.ownerDocument.defaultView.innerWidth >= p.Fg ? te(!0) : te(!1);
                    }, [at, qe, Qe, x]);
                    const rt = s.useCallback(
                            (e) => {
                                'Escape' === e.key && se && (ce(!1), e.stopPropagation());
                            },
                            [se, ce],
                        ),
                        lt = s.useMemo(() => null != et.find((e) => 'move' === e.type), [et]),
                        it = s.createElement(
                            'div',
                            {
                                className: r()(
                                    B.moveDialog,
                                    { [B.moveDialogShown]: se, [B.moveDialogDetached]: !lt },
                                    'PSPDFKit-DocumentEditor-MoveDialog',
                                ),
                                ref: ae,
                            },
                            s.createElement(
                                'form',
                                { onSubmit: ke, className: B.moveDialogForm },
                                s.createElement('span', { className: B.moveDialogFormLabel }, C(Z.insertAfterPage)),
                                s.createElement('input', {
                                    className: B.moveDialogFormInput,
                                    type: 'number',
                                    min: '0',
                                    max: Y.size,
                                    value: re,
                                    onChange: ve,
                                    ref: ne,
                                }),
                                s.createElement(
                                    m.zx,
                                    { type: 'submit', className: B.moveDialogMoveButton, disabled: !we },
                                    C(Z.move),
                                ),
                            ),
                            s.createElement(
                                'div',
                                { className: B.moveDialogHint },
                                s.createElement('p', { className: B.moveDialogHintText }, C(Z.docEditorMoveBeginningHint)),
                            ),
                        ),
                        ct = s.useCallback(
                            (e, t) => {
                                const a = (0, l.l4)(e);
                                Ie(t, a) && Ee(t, a);
                            },
                            [Ee, Ie],
                        );
                    let dt;
                    const mt = se && !isNaN(be);
                    if (mt) {
                        const e = J.toList()
                                .sort()
                                .map((e) => Ge(e, 160, 160, !0).item)
                                .toArray(),
                            t = s.createElement(T, { pages: e, style: 'straight', styles: B });
                        mt &&
                            ((dt =
                                0 === be
                                    ? { previewContent: t, pageIndex: 0, position: 'left' }
                                    : { previewContent: t, pageIndex: be - 1, position: 'right' }),
                            we || (dt.disabled = !0));
                    }
                    const ut = s.useMemo(
                            () => ({
                                cancel: {
                                    element: s.createElement(m.zx, null, C(v.Z.cancel)),
                                    onPress: Ke,
                                    className: 'PSPDFKit-DocumentEditor-CancelButton',
                                },
                                'selected-pages': {
                                    element: s.createElement(
                                        'div',
                                        null,
                                        s.createElement(
                                            'div',
                                            { className: B.pagesSelectedIcon },
                                            s.createElement(h.Z, { src: a(26368) }),
                                        ),
                                        C(Z.pagesSelected, { arg0: J.size }),
                                    ),
                                    className: r()({
                                        [B.pagesSelectedIndicator]: !0,
                                        [B.pagesSelectedIndicatorShown]: J.size > 0,
                                        'PSPDFKit-DocumentEditor-PagesSelectedIndicator': !0,
                                    }),
                                },
                                spacer: {
                                    element: A || (A = s.createElement('div', null)),
                                    className: r()({ [B.spacer]: !0, 'PSPDFKit-DocumentEditor-Spacer': !0 }),
                                },
                                'loading-indicator': {
                                    element: K || (K = s.createElement(I.Z, null)),
                                    hide: !q,
                                    className: 'PSPDFKit-DocumentEditor-LoadingIndicator',
                                },
                                'save-as': {
                                    element: s.createElement(m.zx, null, C(v.Z.saveAs)),
                                    onPress: Fe,
                                    disabled: q,
                                    className: 'PSPDFKit-DocumentEditor-SaveAsButton',
                                },
                                save: {
                                    element: s.createElement(m.zx, { primary: !0 }, C(v.Z.save)),
                                    disabled: U.isEmpty() || q,
                                    onPress: Be,
                                    className: 'PSPDFKit-DocumentEditor-SaveButton',
                                },
                            }),
                            [B, C, Ke, Fe, Be, q, U, J],
                        ),
                        pt = s.useMemo(
                            () =>
                                D.map((e, t) => {
                                    const { onPress: a, className: n, type: o, node: l, id: i } = e;
                                    if (((0, d.kG)(o), 'custom' === o))
                                        return l
                                            ? s.createElement(E.Z, {
                                                  className: n,
                                                  onPress: a ? (e) => a(e, i) : void 0,
                                                  key: i || t,
                                                  node: l,
                                              })
                                            : null;
                                    {
                                        const e = ut[o];
                                        return e.hide
                                            ? null
                                            : s.cloneElement(e.element, {
                                                  onClick: (t) => {
                                                      e.onPress && e.onPress(t);
                                                  },
                                                  key: o,
                                                  disabled: e.disabled,
                                                  className: r()(e.className, n),
                                              });
                                    }
                                }),
                            [D, ut],
                        );
                    return s.createElement(
                        'div',
                        {
                            className: r()(B.docEditor, 'PSPDFKit-DocumentEditor'),
                            onClick: Ne,
                            onKeyDown: rt,
                            tabIndex: '-1',
                            ref: Ue,
                        },
                        s.createElement(
                            'div',
                            {
                                className: r()(B.toolbar.root, B.toolbarRoot, 'PSPDFKit-DocumentEditor-Toolbar'),
                                style: { flex: 0 },
                            },
                            s.createElement(
                                'div',
                                { ref: ot, className: B.toolbarContainer },
                                s.createElement(O, { items: et, builtInItems: Xe, moveDialog: it, CSS_HACK: e.CSS_HACK }),
                            ),
                            s.createElement(M, { builtInItems: Xe, items: tt, CSS_HACK: e.CSS_HACK, frameWindow: N }),
                        ),
                        s.createElement(
                            'div',
                            { className: B.pagesView },
                            s.createElement(w.Z, { onResize: st }),
                            !lt && it,
                            s.createElement(
                                'div',
                                { className: r()(B.pagesGrid, { [B.pagesGridLargeThumbnails]: ee }) },
                                s.createElement(b.Z, {
                                    canInsert: (e, t) => Ie(t, (0, l.l4)(e)),
                                    totalItems: Y.size,
                                    width: at.width,
                                    height: at.height,
                                    itemScale: e.scale,
                                    renderItemCallback: Ge,
                                    renderDragPreviewCallback: (e, t, a, n) => {
                                        const o = (0, l.aV)(e)
                                            .filter((e) => e !== t)
                                            .sort()
                                            .push(t)
                                            .slice(-5)
                                            .map((e) => Ge(e, a, n, !0).item)
                                            .toArray();
                                        return s.createElement(T, {
                                            pages: o,
                                            style: 'straight',
                                            styles: B,
                                            previewCount: e.length,
                                        });
                                    },
                                    onItemPress: Ae,
                                    selectedItemIndexes: J,
                                    cssPrefix: 'PSPDFKit-DocumentEditor',
                                    moveCursor: null != dt ? dt : void 0,
                                    onItemsMove: se ? void 0 : ct,
                                }),
                            ),
                        ),
                        s.createElement('div', { className: r()(B.bottomBar, 'PSPDFKit-DocumentEditor-Footer') }, pt),
                    );
                },
                Z = (0, i.vU)({
                    newPage: { id: 'newPage', defaultMessage: 'New Page', description: 'Add new page' },
                    removePage: { id: 'removePage', defaultMessage: 'Remove Page', description: 'Remove page' },
                    duplicatePage: { id: 'duplicatePage', defaultMessage: 'Duplicate Page', description: 'Duplicate page' },
                    rotatePageLeft: { id: 'rotatePageLeft', defaultMessage: 'Rotate Page Left', description: 'Rotate Page Left' },
                    rotatePageRight: {
                        id: 'rotatePageRight',
                        defaultMessage: 'Rotate Page Right',
                        description: 'Rotate Page Right',
                    },
                    mergeDocument: { id: 'mergeDocument', defaultMessage: 'Merge Document', description: 'Merge Document' },
                    selectAll: { id: 'selectAll', defaultMessage: 'Select All', description: 'Select All Pages' },
                    selectNone: { id: 'selectNone', defaultMessage: 'Select None', description: 'Deselect All Pages' },
                    openMoveDialog: {
                        id: 'openMoveDialog',
                        defaultMessage: 'Move…',
                        description: 'Open dialog for moving pages to specific location in the document',
                    },
                    move: { id: 'move', defaultMessage: 'Move', description: 'Move pages to specific location in the document' },
                    moveBefore: { id: 'moveBefore', defaultMessage: 'Move Before', description: 'Move page before previous one' },
                    moveAfter: { id: 'moveAfter', defaultMessage: 'Move After', description: 'Move page after next one' },
                    documentMergedHere: {
                        id: 'documentMergedHere',
                        defaultMessage: 'Document will be merged here',
                        description: 'Placeholder for the imported document',
                    },
                    pagesSelected: {
                        id: 'pagesSelected',
                        defaultMessage:
                            '{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }',
                        description: 'Number of pages selected.',
                    },
                    insertAfterPage: {
                        id: 'insertAfterPage',
                        defaultMessage: 'Insert after page',
                        description: 'Move selected pages after designated page index.',
                    },
                    docEditorMoveBeginningHint: {
                        id: 'docEditorMoveBeginningHint',
                        defaultMessage: 'Type “0” to move selected pages to the beginning of the document.',
                        description:
                            'Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor.',
                    },
                });
        },
        33720: (e, t, a) => {
            var n = {
                './add.svg': 80353,
                './duplicate.svg': 21092,
                './extract.svg': 1749,
                './help.svg': 56283,
                './importDocument.svg': 21289,
                './move.svg': 92531,
                './moveLeft.svg': 32560,
                './moveRight.svg': 44390,
                './multiplePages.svg': 26368,
                './redo.svg': 44740,
                './remove.svg': 50245,
                './rotateLeft.svg': 50012,
                './rotateRight.svg': 55902,
                './selectAll.svg': 88695,
                './selectNone.svg': 80606,
                './undo.svg': 92570,
            };
            function s(e) {
                var t = o(e);
                return a(t);
            }
            function o(e) {
                if (!a.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = 'MODULE_NOT_FOUND'), t);
                }
                return n[e];
            }
            (s.keys = function () {
                return Object.keys(n);
            }),
                (s.resolve = o),
                (e.exports = s),
                (s.id = 33720);
        },
    },
]);
