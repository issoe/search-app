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
'use strict';
(self.webpackChunkPSPDFKit = self.webpackChunkPSPDFKit || []).push([
    [3610],
    {
        49136: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    corePool: () => se,
                    customFontsPromiseRef: () => ye,
                    default: () => ge,
                    loadModule: () => be,
                    normalizeCoreOptions: () => re,
                    validateStandaloneConfiguration: () => le,
                });
            var i = n(84121),
                a = n(35369),
                s = n(50974),
                o = n(71984),
                r = n(13997),
                l = n(17375),
                c = n(34997),
                d = n(19575),
                u = n(4054),
                h = n(30578),
                m = n(95651),
                p = n(46309),
                f = n(4757),
                g = n(91859),
                y = n(45513),
                b = n(2810),
                k = n(67366),
                v = n(44048),
                F = n(45588),
                _ = n(47825),
                P = n(83253);
            const S = ['rollover', 'down'];
            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? w(Object(n), !0).forEach(function (t) {
                              (0, i.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : w(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            class C extends (0, a.WV)({ alreadyLoadedPages: (0, a.D5)(), isLoaded: !1, isDestroyed: !1 }) {}
            const I = {
                skippedPdfObjectIds: [],
                skippedPdfBookmarkIds: [],
                annotations: [],
                bookmarks: [],
                formFieldValues: [],
                formFields: [],
                attachments: {},
            };
            class O {
                constructor(e, t) {
                    (0, i.Z)(this, '_state', new C()),
                        (0, i.Z)(this, '_formFieldsLoadedPromise', null),
                        (0, i.Z)(this, '_objectCreationPromises', (0, a.D5)()),
                        (0, i.Z)(this, '_loadBookmarksPromise', null),
                        (0, i.Z)(this, '_commentsLoadedPromise', null),
                        (0, i.Z)(this, 'canCreateBackendOrphanWidgets', !1),
                        (this._core = e),
                        (this._json = t ? D(t) : null),
                        (this._setReadStateCallbacksPromise = new Promise((e) => {
                            this._setReadStateCallbacksPromiseResolve = e;
                        }));
                }
                async load() {
                    if (
                        ((this._state = this._state.set('isLoaded', !0)),
                        !this._formFieldCallbacks && (await this._loadFormFieldValues()),
                        !this._json)
                    )
                        return this;
                    await this._core.importInstantJSON(A(A({}, I), this._json)), (0, s.kG)(this._json);
                    const { annotations: e, attachments: t } = this._json;
                    if (this._isDestroyed() || !t || 0 === Object.entries(t).length) return this;
                    if (e)
                        for (let n = 0; n < e.length; n++) {
                            let i = null;
                            const a = e[n];
                            if ('imageAttachmentId' in a && a.imageAttachmentId) {
                                const e = t ? t[a.imageAttachmentId] : null;
                                if (e)
                                    try {
                                        (i = (0, F.Jc)(atob(e.binary), e.contentType)),
                                            (0, s.kG)(this._annotationCallbacks),
                                            this._annotationCallbacks.createAttachment(a.imageAttachmentId, i);
                                    } catch (e) {
                                        (0, s.um)(
                                            `Skipped attachment with id ${a.imageAttachmentId} from payload because an error occurred while converting the binary image to blob.`,
                                        ),
                                            (0, s.um)(e);
                                    }
                            }
                        }
                    return this;
                }
                destroy() {
                    (this._state = this._state.set('isDestroyed', !0)),
                        (this._annotationCallbacks = null),
                        (this._readStateCallbacks = null),
                        (this._bookmarkCallbacks = null),
                        (this._formFieldCallbacks = null),
                        (this._formFieldValueCallbacks = null),
                        (this._commentCallbacks = null);
                }
                setReadStateCallbacks(e) {
                    var t;
                    (this._readStateCallbacks = e),
                        null === (t = this._setReadStateCallbacksPromiseResolve) || void 0 === t || t.call(this);
                }
                setAnnotationCallbacks(e) {
                    this._annotationCallbacks = e;
                }
                setBookmarkCallbacks(e) {
                    this._bookmarkCallbacks = e;
                }
                setFormFieldCallbacks(e) {
                    this._formFieldCallbacks = e;
                }
                setFormFieldValueCallbacks(e) {
                    this._formFieldValueCallbacks = e;
                }
                setCommentCallbacks(e) {
                    this._commentCallbacks = e;
                }
                createComment(e, t, n) {
                    return this._core.applyComments(t.map((e) => E(e, n)).toArray());
                }
                updateComment(e, t, n) {
                    return this._core.applyComments(t.map((e) => E(e, n)).toArray());
                }
                deleteComment(e, t, n) {
                    return this._core.applyComments(t.map((e) => E(e, n)).toArray());
                }
                async loadComments() {
                    return (
                        this._commentsLoadedPromise || (this._commentsLoadedPromise = this._loadComments()),
                        this._commentsLoadedPromise
                    );
                }
                async _loadComments() {
                    var e, t;
                    this._verifyLoaded();
                    const n = null !== (e = await this._core.getComments()) && void 0 !== e ? e : [],
                        i = (0, a.aV)(
                            n.map((e) => {
                                let t;
                                var n;
                                e.pdfObjectId
                                    ? (t = e.id || (null === (n = e.pdfObjectId) || void 0 === n ? void 0 : n.toString()))
                                    : (t = (0, m.xc)());
                                return (0, b.Mu)(t, e);
                            }),
                        );
                    null === (t = this._commentCallbacks) || void 0 === t || t.createComments(i, P.y),
                        (this._commentsLoadedPromise = Promise.resolve());
                }
                createAnnotation(e, t) {
                    this._verifyLoaded();
                    const n = t.find(
                        (t, n) => (
                            (0, s.kG)('imageAttachmentId' in e, 'Annotation must have imageAttachmentId.'),
                            n === e.imageAttachmentId
                        ),
                    );
                    return this._core.createAnnotation((0, b.Hs)(e), n ? n.data : null).then((t) => {
                        'number' != typeof t ||
                            'number' != typeof e.pdfObjectId ||
                            e.pdfObjectId === t ||
                            this._isDestroyed() ||
                            ((0, s.kG)(this._annotationCallbacks),
                            this._annotationCallbacks.updateAnnotations((0, a.aV)([e.set('pdfObjectId', t)])));
                    });
                }
                updateAnnotation(e) {
                    return this._verifyLoaded(), this._core.updateAnnotation((0, b.Hs)(e));
                }
                deleteAnnotation(e) {
                    return this._verifyLoaded(), this._core.deleteAnnotation((0, b.Hs)(e));
                }
                createBookmark(e) {
                    return this._verifyLoaded(), this._core.createBookmark((0, v.a)(e));
                }
                updateBookmark(e) {
                    return this._verifyLoaded(), this._core.updateBookmark((0, v.a)(e));
                }
                deleteBookmark(e) {
                    return this._verifyLoaded(), this._core.deleteBookmark(e);
                }
                createFormField(e) {
                    this._verifyLoaded(), (0, s.kG)(this._readStateCallbacks);
                    const t = this._readStateCallbacks.getFormFieldWidgets(e);
                    return this._core.createFormField((0, b.vD)(e), t.map((e) => (0, b.Hs)(e)).toArray());
                }
                updateFormField(e) {
                    this._verifyLoaded(), (0, s.kG)(this._readStateCallbacks);
                    const t = this._readStateCallbacks.getFormFieldWidgets(e);
                    return this._core.updateFormField((0, b.vD)(e), t.map((e) => (0, b.Hs)(e)).toArray());
                }
                deleteFormField(e) {
                    return this._verifyLoaded(), this._core.deleteFormField((0, b.vD)(e));
                }
                loadFormFields() {
                    return (
                        this._formFieldsLoadedPromise || (this._formFieldsLoadedPromise = this._loadFormFields()),
                        this._formFieldsLoadedPromise
                    );
                }
                async _loadFormFields() {
                    this._verifyLoaded();
                    const e = await this._core.readFormJSONObjects();
                    if (this._isDestroyed()) return;
                    let t = (0, a.aV)(),
                        n = (0, a.aV)().withMutations((n) => {
                            e.forEach((e) => {
                                const { formField: i, widgets: a, value: o } = e;
                                try {
                                    let e;
                                    e = i.pdfObjectId ? i.pdfObjectId.toString() : (0, m.xc)();
                                    const r = (0, b.IN)(e, i);
                                    (0, s.kG)(this._readStateCallbacks),
                                        this._readStateCallbacks.isFormFieldInState(r.name) || n.push(r.set('value', o)),
                                        a.forEach((e) => {
                                            let n;
                                            (n = e.pdfObjectId ? e.id || e.pdfObjectId.toString() : (0, m.xc)()),
                                                (0, s.kG)(this._readStateCallbacks),
                                                (t = t.push((0, b.vH)(n, e)));
                                        });
                                } catch (e) {
                                    (0, s.um)(
                                        `Skipped creating form field #${i.pdfObjectId} from payload because an error occurred while deserializing.`,
                                    ),
                                        (0, s.um)(e);
                                }
                            });
                        });
                    const i = {};
                    (t = t.map((e) => {
                        var a;
                        if (
                            t.find((t) => {
                                var n;
                                return (
                                    t.pdfObjectId !== e.pdfObjectId &&
                                    t.id === e.id &&
                                    (null === (n = e.pdfObjectId) || void 0 === n ? void 0 : n.toString()) !== e.id
                                );
                            }) ||
                            (null !== (a = this._readStateCallbacks) && void 0 !== a && a.isAnnotationInState(e.id))
                        ) {
                            const t = (0, m.xc)();
                            return (
                                i[e.formFieldName]
                                    ? i[e.formFieldName].push({ [e.id]: t })
                                    : (i[e.formFieldName] = [{ [e.id]: t }]),
                                (n = n.map((n) =>
                                    n.name === e.formFieldName
                                        ? n.update('annotationIds', (n) =>
                                              null == n ? void 0 : n.map((n) => (n === e.id ? t : n)),
                                          )
                                        : n,
                                )),
                                e.set('id', t)
                            );
                        }
                        return e;
                    })),
                        Object.keys(i).forEach((e) => {
                            const i = n.find((t) => t.name === e);
                            (0, s.kG)(i);
                            const a = t
                                .filter((t) => t.formFieldName === e)
                                .toArray()
                                .map((e) => (0, b.Hs)(e));
                            this._core.updateFormField((0, b.vD)(i), a);
                        }),
                        n.size > 0 &&
                            !this._isDestroyed() &&
                            ((0, s.kG)(this._formFieldCallbacks), this._formFieldCallbacks.createFormFields(n, P.y)),
                        await this._loadFormFieldValues(),
                        t.size > 0 &&
                            !this._isDestroyed() &&
                            ((0, s.kG)(this._annotationCallbacks),
                            this._annotationCallbacks.createAnnotations(t, (0, a.D5)(), P.y)),
                        (this._formFieldsLoadedPromise = Promise.resolve());
                }
                createFormFieldValue(e) {
                    return this._verifyLoaded(), this.setFormFieldValue(e);
                }
                setFormFieldValue(e) {
                    return this._verifyLoaded(), this._core.setFormFieldValue((0, b.kr)(e));
                }
                deleteFormFieldValue(e) {
                    return this._verifyLoaded(), this._core.deleteFormFieldValue(e.replace('form-field-value/', ''));
                }
                loadAnnotationsForPageIndex(e) {
                    this._verifyLoaded();
                    const t = this._state.alreadyLoadedPages.get(e);
                    if (t) return t;
                    const n = this._loadAnnotationsForPageIndex(e);
                    return (this._state = this._state.setIn(['alreadyLoadedPages', e], n)), n;
                }
                async _loadAnnotationsForPageIndex(e) {
                    const t = await this._core.annotationsForPageIndex(e);
                    if (this._isDestroyed()) return;
                    const n = [],
                        i = [],
                        o = t
                            .map((e) => {
                                let { rollover: t, down: a } = e,
                                    s = (0, l.Z)(e, S);
                                return (
                                    t && 'number' == typeof s.pdfObjectId && n.push(s.pdfObjectId),
                                    a && 'number' == typeof s.pdfObjectId && i.push(s.pdfObjectId),
                                    s
                                );
                            })
                            .filter((e) => 'number' == typeof e.pageIndex);
                    this._formFieldCallbacks && (await this.loadFormFields());
                    const r = (0, a.aV)().withMutations((e) => {
                        o.filter(
                            (e) => !e.id || (this._readStateCallbacks && !this._readStateCallbacks.isAnnotationInState(e.id)),
                        ).forEach((t) => {
                            t.pdfObjectId;
                            try {
                                let n;
                                (n = (function (e) {
                                    return 'pspdfkit/link' === e.type && 0 === e.pdfObjectId;
                                })(t)
                                    ? t.id || (0, m.xc)()
                                    : t.isCommentThreadRoot
                                    ? t.pdfObjectId.toString()
                                    : t.id || t.pdfObjectId.toString()),
                                    e.some((e) => e.id === n) && ((n = (0, m.xc)()), (t.id = n), this._core.updateAnnotation(t));
                                const i = (0, b.vH)(n, t);
                                e.push(i);
                            } catch (e) {
                                (0, s.um)(
                                    `Skipped creating annotation #${t.pdfObjectId} from payload because an error occurred while deserializing.`,
                                ),
                                    (0, s.um)(e);
                            }
                        });
                    });
                    (0, k.dC)(() => {
                        r.size > 0 &&
                            ((0, s.kG)(this._annotationCallbacks),
                            this._annotationCallbacks.createAnnotations(r, (0, a.D5)(), P.y)),
                            n.length > 0 &&
                                ((0, s.kG)(this._annotationCallbacks),
                                this._annotationCallbacks.addAnnotationVariants('rollover', n)),
                            i.length > 0 &&
                                ((0, s.kG)(this._annotationCallbacks),
                                this._annotationCallbacks.addAnnotationVariants('down', i));
                    }),
                        (this._state = this._state.setIn(['alreadyLoadedPages', e], Promise.resolve()));
                }
                async _loadFormFieldValues() {
                    this._verifyLoaded();
                    const e = await this._core.getFormValues();
                    if (this._isDestroyed()) return;
                    const t = (0, a.aV)().withMutations((t) => {
                        e.forEach((e) => {
                            try {
                                t.push((0, b.u9)(e));
                            } catch (t) {
                                (0, s.um)(
                                    `Skipped creating form field value #${e.pdfObjectId} from payload because an error occurred while deserializing.`,
                                ),
                                    (0, s.um)(t);
                            }
                        });
                    });
                    t.size > 0 &&
                        !this._isDestroyed() &&
                        ((0, s.kG)(this._formFieldValueCallbacks), this._formFieldValueCallbacks.setFormFieldValues(t));
                }
                async loadBookmarks() {
                    this._verifyLoaded();
                    const e = await this._core.getBookmarks();
                    if (this._isDestroyed()) return;
                    const t = (0, a.aV)().withMutations((t) => {
                        e.forEach((e) => {
                            let n;
                            n = e.id ? e.id : e.pdfBookmarkId ? e.pdfBookmarkId : (0, _.A)();
                            try {
                                t.push((0, v.i)(n, e));
                            } catch (e) {
                                (0, s.um)(
                                    `Skipped creating bookmark #${n} from payload because an error occurred while deserializing.`,
                                ),
                                    (0, s.um)(e);
                            }
                        });
                    });
                    t.size > 0 &&
                        !this._isDestroyed() &&
                        ((0, s.kG)(this._bookmarkCallbacks), this._bookmarkCallbacks.createBookmarks(t, P.y));
                }
                _verifyLoaded() {
                    (0, s.kG)(this._state.isLoaded, 'StandaloneProvider not properly initialized.');
                }
                _isDestroyed() {
                    return this._state.isDestroyed;
                }
                async syncChanges() {}
            }
            function D(e) {
                const t = {};
                return (
                    Object.keys(e).forEach((n) => {
                        Array.isArray(e[n])
                            ? (t[n] = e[n].filter(Boolean))
                            : 'object' == typeof e[n] && null !== e[n]
                            ? (t[n] = D(e[n]))
                            : (t[n] = e[n]);
                    }),
                    t
                );
            }
            function E(e, t) {
                var n;
                (0, s.kG)(e.rootId, 'A new comment must have `rootId` present');
                const i = t.get(e.rootId);
                return (
                    (0, s.kG)(i, 'An annotation must be present linked to the comment to create'),
                    (0, b.jA)(
                        e,
                        (null === (n = i.pdfObjectId) || void 0 === n ? void 0 : n.toString()) === i.id
                            ? parseInt(e.rootId)
                            : e.rootId,
                    )
                );
            }
            class x {
                constructor(e, t) {
                    (this.identifier = e), (this.callback = t);
                }
                request() {
                    return this.callback();
                }
            }
            var B = n(45207),
                j = n(89835),
                L = n(67628);
            class T extends a.WV({
                baseUrl: null,
                baseCoreUrl: null,
                licenseKey: null,
                document: null,
                backendPermissions: new j.Z(),
                documentResponse: null,
                disableWebAssemblyStreaming: !1,
                enableAutomaticLinkExtraction: !1,
                overrideMemoryLimit: null,
                features: (0, a.aV)(),
                signatureFeatureAvailability: L.H.NONE,
                documentHandle: null,
                trustedCAsCallback: null,
                signaturesInfoPromise: null,
                customFonts: null,
                forceLegacySignaturesFeature: !1,
                forceAnnotationsRender: !1,
                appName: null,
                lazyLoadedPages: null,
                productId: null,
                processorEngine: null,
            }) {}
            var N = n(91039),
                R = n(16126),
                G = n(55237),
                U = n(70569),
                V = n(18146),
                M = n(53678),
                K = n(93572),
                J = n(96617),
                W = n(71231),
                $ = n(39745),
                z = n(80488),
                H = n(82481),
                Z = n(60132),
                q = n(5038),
                X = n(36095),
                Y = n(63632),
                Q = n(26248),
                ee = n(3150);
            const te = ['id'];
            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? ne(Object(n), !0).forEach(function (t) {
                              (0, i.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : ne(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            let ae;
            ae = n(71984).AO;
            const se = new o.L7(ae);
            class oe extends p.W {
                constructor(e) {
                    super(), (0, i.Z)(this, 'type', 'STANDALONE'), (0, i.Z)(this, '_XFDF', null), le(e);
                    const {
                        baseUrl: t,
                        baseCoreUrl: n,
                        instantJSON: a,
                        XFDF: s,
                        enableAutomaticLinkExtraction: o,
                        overrideMemoryLimit: r,
                        trustedCAsCallback: l,
                        electronAppName: c,
                        appName: d,
                        isSharePoint: u,
                        isSalesforce: h,
                        productId: m,
                        processorEngine: p,
                    } = e;
                    'string' == typeof s &&
                        (this._XFDF = { source: s, keepCurrentAnnotations: !0 === e.XFDFKeepCurrentAnnotations }),
                        a && a.annotations && (a.annotations = a.annotations.map((e) => ((e.id = e.id.toString()), e))),
                        (this._instantJSON = a),
                        'function' == typeof l && (this._trustedCAsCallback = l);
                    const { disableWebAssemblyStreaming: f, customFonts: y } = e,
                        { standaloneInstancesPoolSize: b } = e;
                    void 0 !== b && (se.size = b);
                    const k = !!e.electronicSignatures && Boolean(e.electronicSignatures.forceLegacySignaturesFeature);
                    let v = m || null;
                    (!u && !h) || v || (v = u ? q.x.SharePoint : q.x.Salesforce),
                        (this._state = new T(
                            re({
                                baseUrl: t,
                                baseCoreUrl: n,
                                licenseKey: e.licenseKey,
                                document: e.document,
                                disableWebAssemblyStreaming: f,
                                enableAutomaticLinkExtraction: o,
                                overrideMemoryLimit: r,
                                documentHandle: '0',
                                customFonts: y,
                                forceLegacySignaturesFeature: k,
                                appName: d || c,
                                productId: v,
                                processorEngine: p || ee.l.smallerSize,
                            }),
                        )),
                        (this._requestQueue = new B.Z(g.gZ));
                    const { object: F, checkIn: _ } = se.checkOut();
                    (this.client = F), (this.checkIn = _);
                    const P = a
                        ? ie(
                              {
                                  annotations: a.annotations || [],
                                  formFields: a.formFields || [],
                                  formFieldValues: a.formFieldValues || [],
                                  skippedPdfObjectIds: a.skippedPdfObjectIds || [],
                                  skippedPdfFormFieldIds: a.skippedPdfFormFieldIds || [],
                                  attachments: a.attachments || {},
                                  bookmarks: a.bookmarks || [],
                                  skippedPdfBookmarkIds: a.skippedPdfBookmarkIds || [],
                                  format: a.format,
                              },
                              a.pdfId ? { pdfId: a.pdfId } : null,
                          )
                        : null;
                    this.provider = new O(this.client, P);
                }
                isUsingInstantProvider() {
                    return !1;
                }
                hasClientsPresence() {
                    return !1;
                }
                async load() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (
                        (this._isPDFJavaScriptEnabled = e.isPDFJavaScriptEnabled),
                        {
                            features: this._state.features,
                            signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                            hasPassword: !!e.password,
                            allowedTileScales: 'all',
                        }
                    );
                }
                destroy() {
                    this.provider && this.provider.destroy(), this._requestQueue && this._requestQueue.destroy(), this.checkIn();
                }
                async documentInfo() {
                    return this._state.documentResponse;
                }
                async lazyLoadPages() {
                    if (!this._state.lazyLoadedPages) {
                        const e = await this.client.getAllPageInfos(this._state.documentResponse.pageCount);
                        this._state = this._state.set('lazyLoadedPages', e);
                    }
                    return this._state.lazyLoadedPages;
                }
                getDocumentHandle() {
                    return this._state.documentHandle;
                }
                getFormJSON() {
                    return this.client.getFormJSON();
                }
                permissions() {
                    return Promise.resolve(this._state.backendPermissions);
                }
                textForPageIndex(e) {
                    let t = !1;
                    const n = new x(`${e}-text`, () =>
                            t
                                ? Promise.reject({ aborted: !0 })
                                : this.client
                                      .textForPageIndex(e)
                                      .then((n) => (t ? Promise.reject({ aborted: !0 }) : (0, f.TH)({ textLines: n }, e))),
                        ),
                        { promise: i, cancel: a } = this._requestQueue.enqueue(n);
                    return {
                        promise: i,
                        cancel: () => {
                            (t = !0), a();
                        },
                    };
                }
                getTextContentTreeForPageIndex(e) {
                    let t = !1;
                    const n = new x(`${e}-text`, () =>
                            t
                                ? Promise.reject({ aborted: !0 })
                                : this.client.textContentTreeForPageIndex(e).then((t) => {
                                      let n = [];
                                      return (
                                          (n = t.reduce((t, n) => {
                                              let { nodes: i } = n;
                                              return t.concat((0, f.uv)(i, e, t.length));
                                          }, [])),
                                          (0, a.aV)(n)
                                      );
                                  }),
                        ),
                        { promise: i, cancel: s } = this._requestQueue.enqueue(n);
                    return {
                        promise: i,
                        cancel: () => {
                            (t = !0), s();
                        },
                    };
                }
                getTextFromRects(e, t) {
                    return this.client.getTextFromRects(e, t.toJS());
                }
                getAvailableFontFaces(e) {
                    return this.client.getAvailableFontFaces(e);
                }
                renderTile(e, t, n, i, a, o) {
                    const r = `${e}-${t.width}-${t.height}-${n.top}-${n.left}-${n.width}-${n.height}-${this.getDocumentHandle()}`,
                        l = new x(r, () => {
                            const r = o ? o.annotations.filter(m.d).map(b.Hs).toJS() : null,
                                l = o ? o.formFieldValues.map(b.kr).toJS() : null;
                            return this.client
                                .renderTile(
                                    e,
                                    t.toObject(),
                                    n.toObject(),
                                    i,
                                    a,
                                    r || (this._state.forceAnnotationsRender ? [] : null),
                                    l,
                                    (0, W.aV)({ width: n.width, height: n.height }),
                                )
                                .then((i) =>
                                    i
                                        ? 'string' == typeof i
                                            ? (0, u.ar)(i)
                                            : (0, u.R9)({ buffer: i, width: n.width, height: n.height })
                                        : ((0, s.ZK)(
                                              'The image buffer or URL is null, the tile cannot be rendered:',
                                              `page: ${e}, page size: ${t.toObject()}, tile rect: ${n.toObject()}`,
                                          ),
                                          Promise.resolve(null)),
                                );
                        }),
                        c = t.width === n.width && t.height === n.height,
                        { promise: d, cancel: h } = this._requestQueue.enqueue(l, c);
                    return { promise: d, cancel: h };
                }
                renderAnnotation(e, t, n, i, a, s) {
                    const o = e.id,
                        r = new x(o, () =>
                            this.client
                                .renderAnnotation((0, b.Hs)(e), n, i, a, (0, W.aV)({ width: i, height: a }), s)
                                .then((e) =>
                                    e
                                        ? 'string' == typeof e
                                            ? (0, u.ar)(e)
                                            : (0, u.R9)({ buffer: e, width: i, height: a })
                                        : Promise.resolve(null),
                                ),
                        );
                    return this._requestQueue.enqueue(r, !1);
                }
                async getMeasurementSnappingPoints(e) {
                    return this.client, this.client.getMeasurementSnappingPoints(e);
                }
                async getSecondaryMeasurementUnit() {
                    return this.client, await this.client.getSecondaryMeasurementUnit();
                }
                async setSecondaryMeasurementUnit(e) {
                    return this.client, await this.client.setSecondaryMeasurementUnit(e);
                }
                async renderPageAnnotations(e, t, n) {
                    const i = this.provider,
                        a = [],
                        s = [],
                        o = t.some((e) => e instanceof H.x_);
                    o && (await i._setReadStateCallbacksPromise);
                    const r = t.filter((e) => {
                        const t = o ? i._readStateCallbacks.getAnnotationWithFormField(e.id) : null,
                            n = null == t ? void 0 : t.formField,
                            r = (0, m._R)(e, n);
                        if (r && n) {
                            a.find((e) => e.name === n.name) || (a.push((0, b.kr)((0, R.CH)(n))), s.push(n));
                        }
                        return r;
                    });
                    function l(e, t) {
                        if (null != e && e.formFieldName) {
                            const n = s.find((t) => t.name === e.formFieldName),
                                i = t.find((t) => t.name === e.formFieldName);
                            if (!(0, R.BT)(n, i)) return !1;
                        }
                        return !0;
                    }
                    const c = new Promise((t, a) => {
                        this.client
                            .renderPageAnnotations(
                                e,
                                r.map((e) => e.pdfObjectId).toArray(),
                                r.map((e) => e.boundingBox.width * n).toArray(),
                                r.map((e) => e.boundingBox.height * n).toArray(),
                                (0, W.zP)(),
                            )
                            .then((e) => {
                                const a = s
                                        .map((e) => {
                                            var t;
                                            return null === (t = i._readStateCallbacks) || void 0 === t
                                                ? void 0
                                                : t.getFormFieldByName(e.name);
                                        })
                                        .filter(Boolean),
                                    o = e.map((e, t) => {
                                        const i = r.get(t);
                                        return l(i, a) && i && e
                                            ? 'string' == typeof e
                                                ? (0, u.ar)(e)
                                                : (0, u.R9)({
                                                      buffer: e,
                                                      width: i.boundingBox.width * n,
                                                      height: i.boundingBox.height * n,
                                                  })
                                            : Promise.resolve(null);
                                    });
                                Promise.all(o).then((e) => {
                                    const a = s
                                        .map((e) => {
                                            var t;
                                            return null === (t = i._readStateCallbacks) || void 0 === t
                                                ? void 0
                                                : t.getFormFieldByName(e.name);
                                        })
                                        .filter(Boolean);
                                    e.forEach((e, t) => {
                                        const i = r.get(t);
                                        if (i) {
                                            const { formFieldValue: t } = this.getAnnotationFormFieldAndValue(i),
                                                s = this.getAnnotationAvailableVariants(i),
                                                o = this.annotationAPStreamPromises.get(i.id),
                                                r = l(i, a);
                                            if (
                                                (o &&
                                                    ((this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(
                                                        i.id,
                                                    )),
                                                    o(r ? e : null)),
                                                s.length > 1)
                                            ) {
                                                const a = { normal: e };
                                                e && r && this.cacheAPStream(a, i);
                                                const { promise: o } = this.renderAPStream(
                                                    i,
                                                    t,
                                                    null,
                                                    i.boundingBox.width * n,
                                                    i.boundingBox.height * n,
                                                    s,
                                                );
                                                Promise.all(o.map((e) => e.promise)).then((e) => {
                                                    e.some(Boolean) &&
                                                        s.forEach((t, n) => {
                                                            'normal' !== t && e[n] && (a[t] = e[n]);
                                                        });
                                                });
                                            } else e && r && this.cacheAPStream(e, i);
                                        }
                                    }),
                                        t();
                                });
                            })
                            .catch(a);
                    });
                    return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(e, c)), c;
                }
                renderDetachedAnnotation(e, t, n, i) {
                    if (e.id) throw new s.p2(`Detached annotations should not have an \`id\`: ${e.id}`);
                    const a = (0, c.SK)(),
                        o = new x(a, () =>
                            this.client
                                .renderDetachedAnnotation((0, b.Hs)(e), t, n, i, (0, W.aV)({ width: n, height: i }))
                                .then((e) => (e ? (0, u.R9)({ buffer: e, width: n, height: i }) : Promise.resolve(null))),
                        ),
                        { promise: r, cancel: l } = this._requestQueue.enqueue(o, !1);
                    return { promise: r, cancel: l };
                }
                async getAttachment(e) {
                    const [t, n] = await this.client.getAttachment(e);
                    return new Blob([t], { type: n });
                }
                async parseXFDF(e) {
                    this.client;
                    const { errors: t, formFieldValues: n, annotations: i } = await this.client.parseXFDF(e);
                    return {
                        errors: null == t ? void 0 : t.map((e) => ({ errorMessage: e.error_message, type: e.type })),
                        formFieldValues: null == n ? void 0 : n.reduce((e, t) => ((e[t.fqdn] = t.values), e), {}),
                        annotations: (0, a.aV)((null == i ? void 0 : i.map((e) => (0, b.vH)((0, m.xc)(), e))) || []),
                    };
                }
                async search(e, t, n, i) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : J.S.TEXT;
                    const o = await this.client.search(e, t, n, i, s);
                    return (0, y.E)(o.filter((e) => a || !e.isAnnotation));
                }
                async searchAndRedact(e, t, n) {
                    const { totalPages: i } = n,
                        o = await this.client.search(e, 0, i, t.caseSensitive, t.searchType);
                    return (0, a.aV)(
                        o
                            .filter((e) => t.searchInAnnotations || !e.isAnnotation)
                            .map((e) => {
                                const i = e.isAnnotation ? [e.annotationRect] : e.rectsOnPage,
                                    o = (0, a.aV)(i).map((e) => ((0, s.kG)(e), (0, K.k)(e)));
                                return new V.Z(
                                    ie(
                                        ie(ie({}, (0, m.lx)(n)), t.annotationPreset),
                                        {},
                                        { pageIndex: e.pageIndex, rects: o, boundingBox: G.Z.union(o) },
                                    ),
                                );
                            }),
                    );
                }
                async exportPDF() {
                    let {
                        flatten: e = !1,
                        incremental: t,
                        saveForPrinting: i = !1,
                        format: a = 'pdf',
                        excludeAnnotations: r = !1,
                        preserveInstantJSONChanges: l = !0,
                        permissions: c,
                        outputFormat: d = !1,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (
                        (d &&
                            'boolean' != typeof d &&
                            d.conformance &&
                            (0, s.kG)(
                                d.conformance && Object.values(Y.w).includes(d.conformance),
                                'The supplied PDF/A Conformance type is not valid. Valid Conformance should be one of the following options PSPDFKit.Conformance.' +
                                    Object.keys(Y.w).join(', PSPDFKit.Conformance.'),
                            ),
                        void 0 === t)
                    )
                        if (this._state.features.includes(Z.q.DIGITAL_SIGNATURES)) {
                            const e = await this.getSignaturesInfo();
                            t = !i && Boolean('not_signed' !== e.status);
                        } else t = !1;
                    return this.client.exportFile(e, t, i, a, r, l, c).then(async (e) => {
                        let [t, i] = e;
                        if (((t.mimeType = i.mimeType), (t.extension = i.extension), d)) {
                            const e = 'boolean' != typeof d && d.conformance ? d.conformance : Y.w.PDFA_2B;
                            let i;
                            try {
                                return (
                                    (i = new (
                                        X.vU
                                            ? (await n.e(4516).then(n.bind(n, 14516))).GdPictureClientNative
                                            : (await n.e(4516).then(n.bind(n, 14516))).GdPictureWorker
                                    )({
                                        baseUrl: this._state.baseCoreUrl,
                                        aot: this._state.processorEngine === ee.l.fasterProcessing,
                                        mainThreadOrigin: this._state.appName || (0, o.$u)() || window.location.origin,
                                        licenseKey: this._state.licenseKey,
                                    })),
                                    await i.toPdf(t, e)
                                );
                            } finally {
                                var a;
                                null === (a = i) || void 0 === a || a.destroy();
                            }
                        }
                        return t;
                    });
                }
                exportXFDF() {
                    return this.client.exportXFDF();
                }
                exportInstantJSON(e) {
                    return this.client.exportInstantJSON(e);
                }
                getPDFURL() {
                    let {
                        includeComments: e = !0,
                        saveForPrinting: t,
                        excludeAnnotations: n,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.generatePDFObjectURL({ includeComments: e, saveForPrinting: t, excludeAnnotations: n });
                }
                generatePDFObjectURL() {
                    let e,
                        {
                            includeComments: t = !0,
                            saveForPrinting: n,
                            excludeAnnotations: i = !1,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = !1;
                    return {
                        promise: new Promise((s) => {
                            this.exportPDF({ flatten: !0, includeComments: t, saveForPrinting: n, excludeAnnotations: i }).then(
                                (t) => {
                                    if (a) return;
                                    const n = new Blob([t], { type: t.mimeType });
                                    (e = window.URL.createObjectURL(n)), s(e);
                                },
                            );
                        }),
                        revoke: () => {
                            e && window.URL.revokeObjectURL(e), (a = !0);
                        },
                    };
                }
                async getDocumentOutline() {
                    const e = await this.client.getDocumentOutline();
                    return (0, a.aV)(e.map(h.i));
                }
                async getPageGlyphs(e) {
                    const t = await this.client.getPageGlyphs(e);
                    return (0, b.Vl)(t);
                }
                async onKeystrokeEvent(e) {
                    return await this.client.onKeystrokeEvent(e);
                }
                async evalFormValuesActions(e) {
                    return this.client.evalFormValuesActions(e.map(b.kr).toJS());
                }
                async evalScript(e, t) {
                    return this.client.evalScript(e, t);
                }
                async setFormJSONUpdateBatchMode(e) {
                    return this.client.setFormJSONUpdateBatchMode(e);
                }
                async getMeasurementScales() {
                    const e = await this.client.getMeasurementScales();
                    return null == e ? void 0 : e.measurementContentFormats;
                }
                async addMeasurementScale(e) {
                    return this.client, await this.client.addMeasurementScale(e);
                }
                async removeMeasurementScale(e) {
                    return this.client, await this.client.removeMeasurementScale(e);
                }
                async getAnnotationsByScale(e) {
                    return this.client, await this.client.getAnnotationsByScale(e);
                }
                async applyOperationsAndReload(e) {
                    try {
                        let t, n;
                        ({ processedOperations: t, operationsDocuments: n } = await ce(e)),
                            await this.client.applyOperations(t, n);
                    } catch (e) {
                        throw new s.p2(`Applying operations failed: ${e}`);
                    }
                    return (
                        (this.provider._state = this.provider._state.set('alreadyLoadedPages', (0, a.D5)())),
                        this.reloadDocument()
                    );
                }
                async applyRedactionsAndReload() {
                    try {
                        await this.client.applyRedactions();
                    } catch (e) {
                        throw new s.p2(`Applying redactions failed: ${e}`);
                    }
                    return this.reloadDocument();
                }
                async reloadDocument() {
                    try {
                        var e;
                        null === (e = this.provider) || void 0 === e || e.destroy(),
                            (this.provider = new O(this.client, null)),
                            (this._state = this._state.set('lazyLoadedPages', null));
                        const t = await this.client.reloadDocument();
                        return (
                            (this._state = this._state
                                .set('documentResponse', t)
                                .set('documentHandle', (parseInt(this._state.documentHandle) + 1).toString())
                                .set('signaturesInfoPromise', null)),
                            {
                                features: this._state.features,
                                signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                                hasPassword: !1,
                                allowedTileScales: 'all',
                            }
                        );
                    } catch (e) {
                        throw new s.p2(`Reloading failed: ${e}`);
                    }
                }
                async getEmbeddedFiles() {
                    this.client;
                    const e = await this.client.getEmbeddedFilesList();
                    return (0, a.aV)(
                        e.map((e) => {
                            let { id: t } = e,
                                n = (0, l.Z)(e, te);
                            return (0, z.i)(t, n, !0);
                        }),
                    );
                }
                async exportPDFWithOperations(e) {
                    try {
                        let t, n;
                        return (
                            ({ processedOperations: t, operationsDocuments: n } = await ce(e)),
                            this.client.exportPDFWithOperations(t, n)
                        );
                    } catch (e) {
                        throw new s.p2(`Exporting PDF with operations failed: ${e}`);
                    }
                }
                getSignaturesInfo() {
                    try {
                        if (this._state.signaturesInfoPromise) return this._state.signaturesInfoPromise;
                        const e = this.client.getSignaturesInfo().then((e) => (0, b.rS)(e));
                        return (this._state = this._state.set('signaturesInfoPromise', e)), e;
                    } catch (e) {
                        throw new s.p2(`Getting document signatures info: ${e}`);
                    }
                }
                async refreshSignaturesInfo() {
                    this._state = this._state.set('signaturesInfoPromise', null);
                }
                async loadCertificates(e) {
                    return this.client.loadCertificates(e);
                }
                async signDocumentAndReload(e, t) {
                    var n, i, a, o, r;
                    (0, s.kG)(
                        void 0 === t || 'function' == typeof t,
                        'On a Standalone deployment, `twoStepSignatureCallbackOrSigningServiceData` must be a function if provided.',
                    );
                    const l = null == e || null === (n = e.signingData) || void 0 === n ? void 0 : n.certificates;
                    (0, s.kG)(
                        !(null != e && null !== (i = e.signingData) && void 0 !== i && i.signatureType) ||
                            (null == e || null === (a = e.signingData) || void 0 === a ? void 0 : a.signatureType) === Q.BG.CMS ||
                            (Array.isArray(l) && l.length > 0),
                        'For signatures of type `PSPDFKit.SignatureType.CAdES` an `Array` of certificates must be provided in `signaturePreparationData.signingData.certificates`.',
                    );
                    const c = ie(
                        ie(
                            {
                                signatureType:
                                    (null == e || null === (o = e.signingData) || void 0 === o ? void 0 : o.signatureType) ||
                                    (Array.isArray(l) && l.length > 0 ? Q.BG.CAdES : Q.BG.CMS),
                            },
                            (null == e || null === (r = e.signingData) || void 0 === r ? void 0 : r.certificates) && {
                                certificates: e.signingData.certificates.map((e) =>
                                    e instanceof ArrayBuffer ? (0, N.sM)(e) : d.Base64.encode(e),
                                ),
                            },
                        ),
                        null != e && e.placeholderSize ? { estimatedSize: e.placeholderSize } : null,
                    );
                    try {
                        var u, h;
                        const {
                                hash: n,
                                signatureFormFieldName: i,
                                file: a,
                                fileContents: o,
                                dataToBeSigned: r,
                            } = await this.client.prepareSign(
                                (0, b._L)(c),
                                null != e && e.signatureMetadata ? (0, b._D)(e.signatureMetadata) : null,
                                Boolean(null == e ? void 0 : e.flatten),
                                null == e ? void 0 : e.formFieldName,
                                (0, b.eE)(null == e ? void 0 : e.position),
                                (0, b.sr)(null == e ? void 0 : e.appearance),
                                (await (null == e ||
                                null === (u = e.appearance) ||
                                void 0 === u ||
                                null === (h = u.watermarkImage) ||
                                void 0 === h
                                    ? void 0
                                    : h.arrayBuffer())) || null,
                            ),
                            l = (function (e) {
                                const t = e.trim(),
                                    n = t.length / 2,
                                    i = new Uint8Array(n);
                                for (let e = 0; e < n; e++) i[e] = parseInt(t.substr(2 * e, 2), 16);
                                return i;
                            })(r);
                        let d, m, p;
                        if (t) {
                            try {
                                d = await t({ hash: n, fileContents: o, dataToBeSigned: l });
                            } catch (e) {
                                throw new s.p2(`\`twoStepSignatureCallback\` threw an error: ${e}`);
                            }
                            if (!(d instanceof ArrayBuffer))
                                throw new s.p2(
                                    `The resolved value from \`twoStepSignatureCallback\` should be a an \`ArrayBuffer\` but is of type \`${typeof d}\` instead.`,
                                );
                            p = d;
                        } else {
                            if (null == e || !e.signingData || !e.signingData.privateKey)
                                throw new s.p2('No `twoStepSignatureCallback` or `signingData.privateKey` was provided.');
                            {
                                const t = {
                                        name: 'RSASSA-PKCS1-v1_5',
                                        hash: { name: 'SHA-256' },
                                        modulusLength: 2048,
                                        extractable: !1,
                                        publicExponent: new Uint8Array([1, 0, 1]),
                                    },
                                    n = await globalThis.crypto.subtle.importKey(
                                        'pkcs8',
                                        (function (e) {
                                            const t = e.split('\n');
                                            let n = '';
                                            for (let e = 0; e < t.length; e++)
                                                t[e].trim().length > 0 &&
                                                    t[e].indexOf('-BEGIN RSA PRIVATE KEY-') < 0 &&
                                                    t[e].indexOf('-BEGIN PRIVATE KEY-') < 0 &&
                                                    t[e].indexOf('-BEGIN RSA PUBLIC KEY-') < 0 &&
                                                    t[e].indexOf('-BEGIN CERTIFICATE-') < 0 &&
                                                    t[e].indexOf('-END RSA PRIVATE KEY-') < 0 &&
                                                    t[e].indexOf('-END PRIVATE KEY-') < 0 &&
                                                    t[e].indexOf('-END RSA PUBLIC KEY-') < 0 &&
                                                    t[e].indexOf('-END CERTIFICATE-') < 0 &&
                                                    (n += t[e].trim());
                                            return (function (e) {
                                                const t = atob(e),
                                                    n = new Uint8Array(t.length);
                                                for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
                                                return n.buffer;
                                            })(n);
                                        })(e.signingData.privateKey),
                                        t,
                                        !0,
                                        ['sign'],
                                    );
                                (m = await globalThis.crypto.subtle.sign(t, n, l)), (p = m);
                            }
                        }
                        return (
                            await this.client.sign(a, i, n, b.YA[c.signatureType], (0, N.sM)(p) || '', c.certificates || []),
                            await this.reloadDocument(),
                            i
                        );
                    } catch (e) {
                        throw (await this.client.restoreToOriginalState(), e);
                    }
                }
                cancelRequests() {
                    this._requestQueue.cancelAll();
                }
                async syncChanges() {}
                getDefaultGroup() {}
                isCollaborationPermissionsEnabled() {
                    return !1;
                }
                async clearAPStreamCache() {
                    return this.client.clearAPStreamCache();
                }
                async setComparisonDocument(e, t) {
                    return this.client, this.client.setComparisonDocument(e, t);
                }
                async openComparisonDocument(e) {
                    return (
                        this.client,
                        (this._state = this._state.set('forceAnnotationsRender', !1)),
                        await this.client.closeDocument(),
                        (this._state = this._state.set('forceAnnotationsRender', !0)),
                        (await this.client.openComparisonDocument(e)) || this._state.documentResponse
                    );
                }
                async documentCompareAndOpen(e) {
                    return this.client, this.client.documentCompareAndOpen(e);
                }
                async persistOpenDocument(e) {
                    return this.client, this.client.persistOpenDocument(e);
                }
                async cleanupDocumentComparison() {
                    return this.client, this.client.cleanupDocumentComparison();
                }
                async runPDFFormattingScripts(e, t) {
                    return this.client.runPDFFormattingScripts(e, t);
                }
                async runPDFFormattingScriptsFromWidgets(e, t, n) {
                    let i = [];
                    if (this._isPDFJavaScriptEnabled) {
                        const { withAPStream: a, withoutAPStream: s } = e.reduce(
                            (e, i) => {
                                if (i instanceof H.x_) {
                                    if ((null == t ? void 0 : t.get(i.formFieldName)) instanceof H.Yo) return e;
                                    null != n && n(i)
                                        ? e.withAPStream.push(i.formFieldName)
                                        : e.withoutAPStream.push(i.formFieldName);
                                }
                                return e;
                            },
                            { withAPStream: [], withoutAPStream: [] },
                        );
                        let o = [];
                        if (a.length && !s.length) o = await this.runPDFFormattingScripts(a, !0);
                        else if (!a.length && s.length) o = await this.runPDFFormattingScripts(s, !1);
                        else if (a.length && s.length) {
                            const [e, t] = await Promise.all([
                                this.runPDFFormattingScripts(a, !0),
                                this.runPDFFormattingScripts(s, !1),
                            ]);
                            o = e.concat(t);
                        }
                        i = (0, R.gE)(this._initialChanges, o);
                    }
                    return i;
                }
                contentEditorEnter() {
                    return this.client, this.client.contentEditorEnter();
                }
                contentEditorExit() {
                    return this.client, this.client.contentEditorExit();
                }
                contentEditorGetTextBlocks(e) {
                    return this.client, this.client.contentEditorGetTextBlocks(e);
                }
                contentEditorDetectParagraphs(e) {
                    return this.client, this.client.contentEditorDetectParagraphs(e);
                }
                contentEditorRenderTextBlock(e, t, n) {
                    return this.client, this.client.contentEditorRenderTextBlock(e, t, n);
                }
                contentEditorSetTextBlockCursor(e, t, n, i) {
                    return this.client, this.client.contentEditorSetTextBlockCursor(e, t, n, i);
                }
                contentEditorMoveTextBlockCursor(e, t, n, i) {
                    return this.client, this.client.contentEditorMoveTextBlockCursor(e, t, n, i);
                }
                contentEditorInsertTextBlockString(e, t, n, i) {
                    return this.client, this.client.contentEditorInsertTextBlockString(e, t, n, i);
                }
                contentEditorInsertTextBlockContentRef(e, t, n, i) {
                    return this.client, this.client.contentEditorInsertTextBlockContentRef(e, t, n, i);
                }
                contentEditorCreateTextBlock(e) {
                    return this.client, this.client.contentEditorCreateTextBlock(e);
                }
                contentEditorLayoutTextBlock(e, t, n, i) {
                    return this.client, this.client.contentEditorLayoutTextBlock(e, t, n, i);
                }
                contentEditorDeleteTextBlockRange(e, t, n) {
                    return this.client, this.client.contentEditorDeleteTextBlockRange(e, t, n);
                }
                contentEditorDeleteTextBlockString(e, t, n) {
                    return this.client, this.client.contentEditorDeleteTextBlockString(e, t, n);
                }
                contentEditorSetTextBlockSelection(e, t, n) {
                    return this.client, this.client.contentEditorSetTextBlockSelection(e, t, n);
                }
                contentEditorSetTextBlockSelectionRange(e, t, n, i, a) {
                    return this.client, this.client.contentEditorSetTextBlockSelectionRange(e, t, n, i, a);
                }
                contentEditorTextBlockUndo(e, t) {
                    return this.client, this.client.contentEditorTextBlockUndo(e, t);
                }
                contentEditorTextBlockRedo(e, t) {
                    return this.client, this.client.contentEditorTextBlockRedo(e, t);
                }
                contentEditorTextBlockRestore(e, t, n) {
                    return this.client, this.client.contentEditorTextBlockRestore(e, t, n);
                }
                contentEditorTextBlockApplyFormat(e, t, n, i) {
                    return this.client, this.client.contentEditorTextBlockApplyFormat(e, t, n, i);
                }
                async contentEditorGetAvailableFaces() {
                    return this.client, this.client.contentEditorGetAvailableFaces();
                }
                async contentEditorSaveAndReload(e) {
                    return (
                        (0, s.kG)(this.provider instanceof O, 'Standalone can only use standalone annotation provider'),
                        this.client,
                        await this.client.contentEditorSave(e),
                        (this.provider._state = this.provider._state.set('alreadyLoadedPages', (0, a.D5)())),
                        this.reloadDocument()
                    );
                }
            }
            function re(e) {
                return {
                    baseUrl: e.baseUrl,
                    baseCoreUrl: e.baseCoreUrl,
                    licenseKey: e.licenseKey,
                    document: e.document,
                    disableWebAssemblyStreaming: !!e.disableWebAssemblyStreaming,
                    enableAutomaticLinkExtraction: !!e.enableAutomaticLinkExtraction,
                    overrideMemoryLimit: 'number' == typeof e.overrideMemoryLimit ? e.overrideMemoryLimit : null,
                    documentHandle: 'number' == typeof e.documentHandle ? e.documentHandle : '0',
                    trustedCAsCallback: 'function' == typeof e.trustedCAsCallback ? e.trustedCAsCallback : null,
                    customFonts: Array.isArray(e.customFonts) ? e.customFonts.filter((e) => e instanceof $.Z) : null,
                    forceLegacySignaturesFeature: Boolean(e.forceLegacySignaturesFeature),
                    appName: 'string' == typeof e.appName ? e.appName : null,
                    productId: e.productId,
                    processorEngine: e.processorEngine,
                };
            }
            function le(e) {
                const {
                    licenseKey: t,
                    instantJSON: n,
                    XFDF: i,
                    disableWebAssemblyStreaming: a,
                    disableIndexedDBCaching: o,
                    enableAutomaticLinkExtraction: r,
                    overrideMemoryLimit: l,
                    standaloneInstancesPoolSize: c,
                    trustedCAsCallback: d,
                    baseUrl: u,
                    baseCoreUrl: h,
                    customFonts: m,
                    isSharePoint: p,
                    isSalesforce: f,
                } = e;
                if (
                    ((0, s.kG)(
                        'string' == typeof u,
                        '`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/',
                    ),
                    (0, M.Pn)(u),
                    (0, s.kG)(!h || 'string' == typeof h, '`baseCoreUrl` must be a valid URL if set, e.g. `https://example.com/'),
                    h && (0, M.rH)(h),
                    (0, s.kG)(
                        null == t || 'string' == typeof t,
                        'licenseKey must be a string value if provided. Please obtain yours from https://customers.pspdfkit.com.',
                    ),
                    'string' == typeof t &&
                        (0, s.kG)(
                            !t.startsWith('TRIAL-'),
                            "You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.",
                        ),
                    (0, s.kG)(void 0 === i || 'string' == typeof i, 'XFDF must be a string'),
                    n)
                ) {
                    (0, s.kG)('object' == typeof n && null !== n, 'instantJSON must be an Object'),
                        (0, s.kG)(void 0 === i, 'Cannot import from both instantJSON and XFDF'),
                        (0, s.kG)(
                            'https://pspdfkit.com/instant-json/v1' === n.format,
                            "instantJSON has an invalid format, please use 'https://pspdfkit.com/instant-json/v1",
                        );
                    const { pdfId: e } = n;
                    e &&
                        (0, s.kG)(
                            'object' == typeof e &&
                                null !== e &&
                                (('string' == typeof e.permanent && 'string' == typeof e.changing) ||
                                    ('string' != typeof e.permanent && 'string' != typeof e.changing)),
                            'instantJSON has an invalid pdfId',
                        ),
                        (0, s.kG)(
                            void 0 === n.skippedPdfObjectIds || Array.isArray(n.skippedPdfObjectIds),
                            'instantJSON has invalid skippedPdfObjectIds',
                        ),
                        (0, s.kG)(
                            void 0 === n.annotations ||
                                (Array.isArray(n.annotations) && n.annotations.every((e) => 'object' == typeof e && null !== e)),
                            'instantJSON has invalid annotations',
                        ),
                        (0, s.kG)(
                            void 0 === n.formFieldValues ||
                                (Array.isArray(n.formFieldValues) &&
                                    n.formFieldValues.every((e) => 'object' == typeof e && null !== e)),
                            'instantJSON has invalid form field values',
                        ),
                        (0, s.kG)(
                            void 0 === n.skippedPdfBookmarkIds || Array.isArray(n.skippedPdfBookmarkIds),
                            'instantJSON has invalid skippedPdfBookmarkIds',
                        ),
                        (0, s.kG)(
                            void 0 === n.bookmarks ||
                                (Array.isArray(n.bookmarks) && n.bookmarks.every((e) => 'object' == typeof e && null !== e)),
                            'instantJSON has invalid bookmarks',
                        );
                }
                (0, s.kG)(void 0 === a || 'boolean' == typeof a, 'disableWebAssemblyStreaming must be a boolean'),
                    (0, s.kG)(void 0 === r || 'boolean' == typeof r, 'enableAutomaticLinkExtraction must be a boolean'),
                    (0, s.kG)(void 0 === l || 'number' == typeof l, 'overrideMemoryLimit must be a number'),
                    (0, s.kG)(
                        void 0 === c || ('number' == typeof c && c >= 0),
                        'standaloneInstancesPoolSize must be a non-negative number',
                    ),
                    (0, s.kG)(void 0 === d || 'function' == typeof d, 'trustedCAsCallback must be a function'),
                    (0, s.kG)(
                        void 0 === m || (Array.isArray(m) && m.every((e) => e instanceof $.Z)),
                        'customFonts must be an array of PSPDFKit.Font instances',
                    ),
                    (0, s.kG)(
                        void 0 === m || m.every((e) => e.callback),
                        'All PSPDFKit.Font instances specified on customFonts must have its callback property defined',
                    ),
                    void 0 !== o &&
                        (0, s.a1)(
                            'disableIndexedDbCaching has been deprecated and it no longer has effect. It will be removed in a later version.\nBrowsers dropped IndexedDB serialization of Wasm modules in favor of regular HTTP caching.',
                        ),
                    (p || f) &&
                        (0, s.a1)(
                            'isSharePoint and isSalesforce configuration properties are deprecated and will be removed in the next major release. Please use the new Configuration#productId property instead. For more information, please check the migration guide.',
                        ),
                    (0, s.kG)(
                        !(p && f),
                        'You cannot enable both SharePoint and Salesforce integrations at the same time. Please set either isSharePoint or isSalesforce to true, but not both.',
                    );
            }
            async function ce(e) {
                const t = new WeakMap(),
                    n = {};
                return {
                    processedOperations: await Promise.all(
                        e.map(async (e, i) => {
                            if ('importDocument' === e.type) {
                                const { document: a } = e;
                                return (
                                    (0, s.kG)(
                                        a instanceof File || a instanceof Blob,
                                        'Wrong `importDocument` operation `document` value: it must be a File or a Blob',
                                    ),
                                    (0, U.M)(t, n, a, e, i, 'document')
                                );
                            }
                            if ('applyInstantJson' === e.type) {
                                const a = e.instantJson;
                                (0, s.kG)(
                                    'object' == typeof a && null !== a,
                                    'Wrong `applyInstantJson` operation `instantJson` value: it must be an object',
                                );
                                const o = JSON.stringify(a),
                                    r = new Blob([o], { type: 'application/json' });
                                return (0, U.M)(t, n, r, e, i, 'dataFilePath');
                            }
                            if ('applyXfdf' === e.type) {
                                const a = e.xfdf;
                                (0, s.kG)('string' == typeof a, 'Wrong `applyXfdf` operation `xfdf` value: it must be a string');
                                const o = new Blob([a], { type: 'application/vnd.adobe.xfdf' });
                                return (0, U.M)(t, n, o, e, i, 'dataFilePath');
                            }
                            return e;
                        }),
                    ),
                    operationsDocuments: n,
                };
            }
            var de = n(19815),
                ue = n(30761),
                he = n(38623);
            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t &&
                        (i = i.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? me(Object(n), !0).forEach(function (t) {
                              (0, i.Z)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : me(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            let fe;
            class ge extends oe {
                constructor(e) {
                    const t = e.baseUrl || (0, r.SV)(window.document),
                        n = e.baseCoreUrl || t,
                        i = pe(pe({}, e), {}, { baseUrl: t, baseCoreUrl: n });
                    if ('string' != typeof i.baseUrl)
                        throw new s.p2('`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`');
                    if ('string' != typeof i.document && !(i.document instanceof ArrayBuffer))
                        throw new s.p2(
                            'document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`',
                        );
                    if (fe && fe !== i.licenseKey)
                        throw new s.p2(
                            'Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.',
                        );
                    if ('string' == typeof i.licenseKey && i.licenseKey.startsWith('TRIAL-'))
                        throw new s.p2(
                            "You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.",
                        );
                    super(i), (this.destroyed = !1);
                }
                async load() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = 0.2;
                    e.progressCallback && e.progressCallback('loading', t),
                        (this._isPDFJavaScriptEnabled = e.isPDFJavaScriptEnabled);
                    const i = (0, ue.D4)(this._state.baseUrl, this._state.document, this._state.productId, () => {
                            (t += 0.3), e.progressCallback && e.progressCallback('loading', t);
                        }),
                        r = await be(this.client, this._state).finally(() => {
                            (t += 0.3), e.progressCallback && e.progressCallback('loading', t);
                        });
                    (0, s.kG)(r);
                    const { features: l, signatureFeatureAvailability: c } = r;
                    if (
                        this._state.productId === q.x.SharePoint &&
                        'string' == typeof this._state.document &&
                        Array.isArray(r.afu)
                    ) {
                        const e = new URL(this._state.document, this._state.baseUrl);
                        if (!r.afu.some((t) => e.hostname.match(t)))
                            throw new s.p2(`The document origin ${e.hostname} is not authorized.`);
                    }
                    const d =
                        c === L.H.ELECTRONIC_SIGNATURES && (0, de.Vz)(l) && this._state.forceLegacySignaturesFeature
                            ? L.H.LEGACY_SIGNATURES
                            : c;
                    (this._state = this._state.set('features', (0, a.aV)(l)).set('signatureFeatureAvailability', d)),
                        (fe = this._state.licenseKey);
                    const u = await i;
                    let h,
                        m = u.slice(0);
                    try {
                        this.destroyed
                            ? ((m = null), (h = await new Promise(() => {})))
                            : ((h = await this.client.openDocument(
                                  u,
                                  e.password,
                                  'number' == typeof e.initialPageIndex ? e.initialPageIndex : 0,
                              )),
                              (m = null));
                    } catch (t) {
                        if (
                            ('INVALID_PASSWORD' === t.message &&
                                this._state.document instanceof ArrayBuffer &&
                                (this._state = this._state.set('document', t.callArgs[0])),
                            'IMAGE_DOCUMENTS_NOT_LICENSED' === t.message &&
                                (t.message =
                                    'The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web.'),
                            !(
                                t instanceof s.p2 &&
                                t.message.includes('File not in PDF format or corrupted.') &&
                                this._state.productId !== q.x.Salesforce
                            ))
                        )
                            throw t;
                        {
                            let i;
                            (0, s.kG)(m);
                            try {
                                i = new (
                                    X.vU
                                        ? (await n.e(4516).then(n.bind(n, 14516))).GdPictureClientNative
                                        : (await n.e(4516).then(n.bind(n, 14516))).GdPictureWorker
                                )({
                                    baseUrl: this._state.baseCoreUrl,
                                    aot: this._state.processorEngine === ee.l.fasterProcessing,
                                    mainThreadOrigin: this._state.appName || (0, o.$u)() || window.location.origin,
                                    licenseKey: this._state.licenseKey,
                                    customFonts: await ye.current,
                                });
                                const t = await i.toPdf(m);
                                h = await this.client.openDocument(
                                    t,
                                    e.password,
                                    'number' == typeof e.initialPageIndex ? e.initialPageIndex : 0,
                                );
                            } catch (e) {
                                throw (
                                    ('INVALID_PASSWORD' === e.message &&
                                        this._state.document instanceof ArrayBuffer &&
                                        (this._state = this._state.set('document', t.callArgs[0])),
                                    'IMAGE_DOCUMENTS_NOT_LICENSED' === e.message &&
                                        (e.message =
                                            'The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web.'),
                                    e)
                                );
                            } finally {
                                var p;
                                (m = null), null === (p = i) || void 0 === p || p.destroy();
                            }
                        }
                    }
                    if (
                        (this._isPDFJavaScriptEnabled && (this._initialChanges = await this.client.enablePDFJavaScriptSupport()),
                        this._XFDF && (await this.client.importXFDF(this._XFDF.source, this._XFDF.keepCurrentAnnotations)),
                        this._instantJSON && this._instantJSON.pdfId && h.ID.permanent)
                    ) {
                        const e = this._instantJSON.pdfId,
                            t = h.ID;
                        if (e.permanent !== t.permanent)
                            throw new s.p2(
                                'Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/',
                            );
                        if (e.changing !== t.changing)
                            throw new s.p2(
                                'Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/',
                            );
                    }
                    if (this._trustedCAsCallback)
                        try {
                            const e = await this._trustedCAsCallback();
                            if (!Array.isArray(e)) throw new s.p2('Certificates response must be an array');
                            if (e.some((e) => !(e instanceof ArrayBuffer) && 'string' != typeof e))
                                throw new s.p2('All certificates must be passed as ArrayBuffer (DER) or string (PEM)');
                            await this.client.loadCertificates(e.map(N.uF));
                        } catch (e) {
                            throw new s.p2(`Could not retrieve certificates for digital signatures validation: ${e.message}.`);
                        }
                    return (
                        (this._state = this._state.set('documentResponse', h)),
                        {
                            features: this._state.features,
                            signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                            hasPassword: !!e.password,
                            allowedTileScales: 'all',
                        }
                    );
                }
                destroy() {
                    (this.destroyed = !0), super.destroy();
                }
                getCustomFontsPromise() {
                    return ye;
                }
            }
            const ye = { current: void 0 };
            function be(e, t) {
                ye.current = ye.current || (t.customFonts ? (0, he.x6)(t.customFonts) : void 0);
                const n = t.appName || (0, o.$u)() || window.location.origin;
                return e
                    .loadNativeModule(t.baseCoreUrl, {
                        mainThreadOrigin: n,
                        disableWebAssemblyStreaming: t.disableWebAssemblyStreaming,
                        enableAutomaticLinkExtraction: t.enableAutomaticLinkExtraction,
                        overrideMemoryLimit: t.overrideMemoryLimit,
                    })
                    .then(async () =>
                        ye.current
                            ? e.load(t.baseCoreUrl, t.licenseKey, {
                                  mainThreadOrigin: n,
                                  customFonts: await ye.current,
                                  productId: t.productId,
                              })
                            : e.load(t.baseCoreUrl, t.licenseKey, { mainThreadOrigin: n, productId: t.productId }),
                    );
            }
        },
    },
]);
