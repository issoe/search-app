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
    [6377],
    {
        16288: (t, e, n) => {
            n.r(e), n.d(e, { default: () => K });
            var o = n(17375),
                a = n(84121),
                s = n(35369),
                r = n(50974),
                i = n(34997),
                c = n(77552),
                l = n(45513),
                d = n(93572),
                u = n(2810),
                h = n(28028),
                m = n(23413),
                p = n(45207),
                f = n(67628);
            class g extends s.WV({
                authPayload: null,
                serverUrl: null,
                hostedBaseUrl: null,
                documentId: null,
                backendPermissions: null,
                documentURL: null,
                imageToken: null,
                instantSettings: null,
                token: null,
                features: (0, s.aV)(),
                signatureFeatureAvailability: f.H.NONE,
                isFormsEnabled: !0,
                minSearchQueryLength: 1,
                documentHandle: null,
                isDocumentHandleOutdated: !1,
                digitalSignatures: null,
                defaultGroup: void 0,
                hasCollaborationPermissions: !1,
                forceLegacySignaturesFeature: !1,
            }) {}
            var w = n(53678),
                y = n(71231),
                P = n(92466),
                _ = n(13997);
            const S = 'The image can not be rendered because of an unknown error.';
            class b {
                constructor(t) {
                    let { identifier: e, url: n, token: o, payload: a, doNotRequestWebP: s = !1 } = t;
                    (this.identifier = e), (this.url = n), (this.token = o), (this.payload = a), (this.doNotRequestWebP = s);
                }
                abort() {
                    var t;
                    null === (t = this.httpRequest) || void 0 === t || t.abort();
                }
                request() {
                    return new Promise((t, e) => {
                        const n = new XMLHttpRequest();
                        (this.httpRequest = n),
                            n.open(this.payload ? 'POST' : 'GET', this.url, !0),
                            n.setRequestHeader('X-PSPDFKit-Image-Token', this.token),
                            n.setRequestHeader('PSPDFKit-Platform', 'web'),
                            n.setRequestHeader('PSPDFKit-Version', (0, _.oM)()),
                            y.Zy && !this.doNotRequestWebP && n.setRequestHeader('Accept', 'image/webp,*/*'),
                            (n.responseType = 'blob'),
                            (n.onreadystatechange = (async () => {
                                if (4 !== n.readyState) return;
                                if (n.response && n.response.type.startsWith('application/json')) {
                                    const o = new FileReader();
                                    return (
                                        (o.onload = (n) => {
                                            var o;
                                            const a = JSON.parse(null === (o = n.target) || void 0 === o ? void 0 : o.result);
                                            a.attachments_not_found
                                                ? t({ attachmentsNotFound: a.attachments_not_found })
                                                : a.error
                                                ? 'initialization_error' === a.error
                                                    ? t(null)
                                                    : e(new r.p2(`The server could not render the requested image (${a.error})`))
                                                : e(new r.p2(S));
                                        }),
                                        (o.onerror = () => e(new r.p2(S))),
                                        void o.readAsText(n.response)
                                    );
                                }
                                if (!(0, w.vu)(n.status)) return void e(new r.p2(S));
                                const o = n.response,
                                    a = URL.createObjectURL(o),
                                    s = new Image();
                                (s.onerror = () => e(new r.p2(S))),
                                    (s.src = a),
                                    await s.decode(),
                                    t(new P.Z(s, () => URL.revokeObjectURL(a)));
                            }).bind(this)),
                            n.send(this.payload);
                    });
                }
            }
            var v = n(91859),
                F = n(4757),
                R = n(95651),
                k = n(30578),
                E = n(29346),
                $ = n(89835);
            var T = n(70569),
                x = n(16554),
                A = n(13071),
                O = n(96617),
                D = n(46309),
                j = n(80488),
                U = n(4054),
                C = n(16126),
                I = n(60132),
                L = n(19815),
                N = n(63632),
                q = n(91039);
            const B = ['color', 'fillColor', 'outlineColor'];
            function H(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e &&
                        (o = o.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, o);
                }
                return n;
            }
            function J(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? H(Object(n), !0).forEach(function (e) {
                              (0, a.Z)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : H(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            class K extends D.W {
                constructor(t) {
                    var e, n;
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    if (
                        (super(),
                        (e = this),
                        (0, a.Z)(this, '_password', null),
                        (0, a.Z)(this, 'type', 'SERVER'),
                        (0, a.Z)(this, '_requestRenderAnnotation', (t, n, o, a, s, c) => {
                            const l = `${this._state.documentURL}/render_annotation`,
                                d = `render-annotation-${c ? (0, i.SK)() : t.id}`,
                                h = JSON.stringify({
                                    data: (0, u.Hs)(t),
                                    width: a,
                                    height: s,
                                    detached: c || void 0,
                                    formFieldValue: n ? (0, u.kr)(n) : void 0,
                                });
                            let m,
                                p,
                                f = !1,
                                g = [];
                            const w = new Promise((t, e) => {
                                (m = t), (p = e);
                            });
                            return (
                                (function n() {
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    const c = new FormData();
                                    c.append('render', h),
                                        i.length > 0 &&
                                            'imageAttachmentId' in t &&
                                            t.imageAttachmentId &&
                                            o &&
                                            c.append(t.imageAttachmentId, o);
                                    const u = new b({
                                            identifier: d,
                                            url: l,
                                            token: e._state.imageToken,
                                            payload: c,
                                            doNotRequestWebP: a > v.pt || s > v.pt,
                                        }),
                                        w = e._requestQueue.enqueue(u, !1);
                                    w.promise
                                        .then((t) => {
                                            f ||
                                                (null != t && t.attachmentsNotFound
                                                    ? n(t.attachmentsNotFound)
                                                    : null != t && t.attachmentsNotFound
                                                    ? p(new r.p2('Attachment could not be found.'))
                                                    : m(t));
                                        })
                                        .catch((t) => {
                                            f || p(t);
                                        }),
                                        g.push(w);
                                })(),
                                {
                                    promise: w,
                                    cancel: () => {
                                        (f = !0),
                                            g.forEach((t) => {
                                                t.cancel();
                                            });
                                    },
                                }
                            );
                        }),
                        (0, a.Z)(this, '_requestRenderAnnotations', (t, e, n, o, a) => {
                            const s = `${this._state.documentURL}/render_annotations`,
                                r = JSON.stringify({
                                    annotations: e.map((e, a) => ({ pageIndex: t, pdfObjectId: e, width: n[a], height: o[a] })),
                                    formFieldValues: a,
                                });
                            let i,
                                c,
                                l = !1;
                            const d = new Promise((t, e) => {
                                (i = t), (c = e);
                            });
                            return (
                                this._fetch(s, {
                                    method: 'post',
                                    body: r,
                                    credentials: 'include',
                                    headers: {
                                        'X-PSPDFKit-Image-Token': this._state.imageToken,
                                        'Content-Type': 'application/json',
                                        Accept: 'multipart/form-data',
                                    },
                                })
                                    .then((t) => t.formData())
                                    .then((t) => {
                                        l || i(Array.from(t.values()));
                                    })
                                    .catch((t) => {
                                        l || c(t);
                                    }),
                                {
                                    promise: d,
                                    cancel: () => {
                                        l = !0;
                                    },
                                }
                            );
                        }),
                        (0, a.Z)(this, 'handleDocumentHandleConflict', () => {
                            (this._state = this._state.set('isDocumentHandleOutdated', !0)),
                                this.cancelRequests(),
                                this._destroyProvider();
                        }),
                        'object' != typeof t.authPayload)
                    )
                        throw new r.p2(
                            "authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`",
                        );
                    const s = null === (n = t.authPayload) || void 0 === n ? void 0 : n.accessToken;
                    let c = null,
                        l = null,
                        d = null;
                    if (s) (d = t.hostedBaseUrl || 'https://api.pspdfkit.com/'), (0, w.sf)(d), (0, h.eU)(s);
                    else {
                        if (
                            ((c = (function (t) {
                                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                                const n = t.serverUrl || (0, _.SV)(e.document);
                                if ('/' !== n.substr(-1))
                                    throw new r.p2(
                                        '`serverUrl` must have a slash at the end (e.g. `https://pspdfkit.example.com/`).',
                                    );
                                if (!t.serverUrl) {
                                    if (n === `${e.location.protocol}//${e.location.host}/`)
                                        throw new r.p2(
                                            'PSPDFKit automatically infers the URL of PSPDFKit Server from the current `<script>` tag.\nIn the current case, this URL is set to the same as the current browser\'s location.\nThis can happen when you bundle pspdfkit.js with your custom JavaScript for example.\n\nTo make sure everything works as expected, please set the `serverUrl` to the URL of PSPDFKit Server:\n\nPSPDFKit.load({\n  serverUrl: "https://pspdfkit-server.example.com/",\n  ...,\n});',
                                        );
                                }
                                return n;
                            })(t, o)),
                            'string' != typeof t.documentId)
                        )
                            throw new r.p2('`documentId` must be of type string.');
                        if (
                            ((l = `${c}i/d/${t.documentId}`),
                            'object' != typeof t.authPayload || !('jwt' in t.authPayload) || 'string' != typeof t.authPayload.jwt)
                        )
                            throw new r.p2(
                                "authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`",
                            );
                        (0, h.yK)(t.authPayload.jwt);
                    }
                    !(function (t) {
                        let e = '';
                        if (
                            'boolean' != typeof t &&
                            ((0, r.PO)(t)
                                ? (t.hasOwnProperty('clientsPresenceEnabled') &&
                                      'boolean' != typeof t.clientsPresenceEnabled &&
                                      (e +=
                                          '`clientsPresenceEnabled` in instance settings is not valid. Must be `true` or `false`.\n'),
                                  t.hasOwnProperty('listenToServerChangesEnabled') &&
                                      'boolean' != typeof t.listenToServerChangesEnabled &&
                                      (e +=
                                          '`listenToServerChangesEnabled` in instance settings is not valid. Must be `true` or `false`.\n'))
                                : (e = '`instant` flag must either be set to `true` or `false`\n'),
                            e)
                        )
                            throw new r.p2(
                                `${e}\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/`,
                            );
                    })(t.instant);
                    let m = null;
                    if (t.instant)
                        if ((0, r.PO)(t.instant)) {
                            const e = t.instant;
                            m = {
                                clientsPresenceEnabled: !1 !== e.clientsPresenceEnabled,
                                listenToServerChangesEnabled: !1 !== e.listenToServerChangesEnabled,
                            };
                        } else m = x.q;
                    this._requestQueue = new p.Z(v.Qc);
                    const f = !!t.electronicSignatures && Boolean(t.electronicSignatures.forceLegacySignaturesFeature);
                    (this._state = new g({
                        serverUrl: c,
                        hostedBaseUrl: d,
                        documentId: t.documentId,
                        instantSettings: m,
                        documentURL: l,
                        authPayload: t.authPayload,
                        isFormsEnabled: !t.disableForms,
                        forceLegacySignaturesFeature: f,
                    })),
                        t.trustedCAsCallback &&
                            (0, r.ZK)(
                                'PSPDFKit.Configuration#trustedCAsCallback is only used on Standalone deployments. On a Server-backed deployment, please follow the instructions at https://pspdfkit.com/guides/web',
                            );
                }
                isUsingInstantProvider() {
                    return null != this._state.instantSettings;
                }
                hasClientsPresence() {
                    const t = this._state.instantSettings;
                    return null != t && !1 !== t.clientsPresenceEnabled;
                }
                async load() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    await this.tryAuthenticateHostedViewer();
                    const {
                        imageToken: e,
                        token: n,
                        permissions: o,
                        features: a,
                        signatureFeatureAvailability: i,
                        hasPassword: c,
                        minSearchQueryLength: l,
                        layerHandle: d,
                        allowedTileScales: h,
                        digitalSignatures: m,
                        defaultGroup: p,
                        collaborationPermissions: g,
                        creatorName: w,
                    } = await (async function (t, e, n) {
                        const o = await fetch(`${t}/auth`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'PSPDFKit-Platform': 'web',
                                'PSPDFKit-Version': (0, _.oM)(),
                            },
                            body: JSON.stringify({ jwt: e.jwt, origin: window.location.href, password: n }),
                            credentials: 'include',
                        });
                        return o.ok
                            ? o.json()
                            : o.text().then((t) => {
                                  throw 'INVALID_PASSWORD' === t
                                      ? new r.p2(t)
                                      : new r.p2(`An error occurred while connecting to PSPDFKit Server: ${t || o.statusText}`);
                              });
                    })(`${this._state.serverUrl}i/d/${this._state.documentId}`, this._state.authPayload, t.password);
                    if (((this._password = t.password), this._state.instantSettings && !a.includes(I.q.INSTANT)))
                        throw new r.p2(
                            'Instant feature is not enabled on this server. Please set `instant` to `false`.\n\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/',
                        );
                    const y =
                        i === f.H.ELECTRONIC_SIGNATURES && (0, L.Vz)(a) && this._state.forceLegacySignaturesFeature
                            ? f.H.LEGACY_SIGNATURES
                            : i;
                    if (
                        ((this._state = this._state.withMutations((t) =>
                            t
                                .set('imageToken', e)
                                .set('token', n)
                                .set('features', (0, s.aV)(a))
                                .set('signatureFeatureAvailability', y)
                                .set(
                                    'backendPermissions',
                                    new $.Z({
                                        readOnly: -1 === o.indexOf('write'),
                                        downloadingAllowed: o.indexOf('download') >= 0,
                                    }),
                                )
                                .set('documentURL', `${this._state.serverUrl}i/d/${this._state.documentId}/h/${d}`)
                                .set('documentHandle', d)
                                .set('isDocumentHandleOutdated', !1)
                                .set('digitalSignatures', (0, u.rS)(m)),
                        )),
                        g && !this._state.instantSettings)
                    )
                        throw new r.p2(
                            'Collaboration Permissions is not supported when `instant` is disabled. Please make sure `configuration#instant` is set to `true`.',
                        );
                    return (
                        (this._state = this._state.withMutations((t) => {
                            (t.defaultGroup = p), (t.hasCollaborationPermissions = Boolean(g));
                        })),
                        this.provider && this.provider.destroy(),
                        (this.provider = await this._initProvider()),
                        this._state.instantSettings &&
                            this.provider.setDocumentHandleConflictCallback(this.handleDocumentHandleConflict),
                        {
                            features: this._state.features,
                            signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                            hasPassword: c,
                            minSearchQueryLength: l,
                            allowedTileScales: h,
                            creatorName: w,
                            defaultGroup: p,
                        }
                    );
                }
                async tryAuthenticateHostedViewer() {
                    if ('accessToken' in this._state.authPayload) {
                        const { hostedBaseUrl: t } = this._state,
                            e = this._state.authPayload.accessToken,
                            {
                                serverUrl: n,
                                serverId: o,
                                jwt: a,
                            } = await (async function (t, e) {
                                const n = await fetch(`${t}i/documents/auth`, {
                                    method: 'POST',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        'PSPDFKit-Platform': 'web',
                                        'PSPDFKit-Version':
                                            'cloud-protocol=1, server-protocol=5, client=2023.4.4, client-git=b15c39e372',
                                    },
                                    body: JSON.stringify({ accessToken: e }),
                                });
                                if (n.ok) return n.json();
                                throw new Error(`An error occurred while connecting to PSPDFKit API: ${await n.text()}`);
                            })(t, e);
                        this._state = this._state.withMutations((t) => {
                            t.set('serverUrl', n)
                                .set('documentId', o)
                                .set('documentURL', `${n}i/d/${o}`)
                                .set('authPayload', { jwt: a });
                        });
                    }
                }
                async _initProvider() {
                    if (this._state.instantSettings) {
                        const t = `${this._state.serverUrl}i/d/${this._state.documentId}/h/${this._state.documentHandle}`,
                            { InstantProvider: e } = await n.e(2333).then(n.bind(n, 46350));
                        return new e(
                            `${this._state.serverUrl}i/d/${this._state.documentId}`,
                            t,
                            { auth_token: this._state.token },
                            this._state.instantSettings,
                        );
                    }
                    {
                        const t = this._state.isFormsEnabled && this._state.features.includes(I.q.FORMS),
                            { RESTProvider: e } = await n.e(4099).then(n.bind(n, 62961));
                        return new e(this._state.documentURL, { token: this._state.token }, { isFormsEnabled: t });
                    }
                }
                destroy() {
                    this._destroyProvider(), this._requestQueue && this._requestQueue.destroy();
                }
                documentInfo() {
                    return this._fetch(`${this._state.documentURL}/document.json`)
                        .then((t) => t.json())
                        .then((t) => t.data);
                }
                getFormJSON() {
                    return this._fetch(`${this._state.documentURL}/form.json`).then((t) =>
                        403 === t.status
                            ? { v: 1, type: 'pspdfkit/form', annotations: [], fields: [] }
                            : t.json().then((t) => t.data),
                    );
                }
                async evalFormValuesActions() {
                    throw new Error('not implemented');
                }
                async evalScript() {
                    throw new Error('not implemented');
                }
                async setFormJSONUpdateBatchMode() {
                    throw new Error('not implemented');
                }
                permissions() {
                    return Promise.resolve(this._state.backendPermissions);
                }
                getDefaultGroup() {
                    return this._state.defaultGroup;
                }
                isCollaborationPermissionsEnabled() {
                    return this._state.hasCollaborationPermissions;
                }
                textForPageIndex(t) {
                    const e = `${this._state.documentURL}/page-${t}-text`,
                        n = new (this._getJSONRequestHandler())(e, this._state.token),
                        o = this._requestQueue.enqueue(n, !0);
                    return {
                        promise: o.promise.then((e) => (0, F.TH)(e, t)),
                        cancel: () => {
                            o.cancel();
                        },
                    };
                }
                getAvailableFontFaces() {
                    throw new r.p2('Custom fonts need to be mounted on the server in Server-backed deployments.');
                }
                getTextContentTreeForPageIndex(t) {
                    const e = `${this._state.documentURL}/page-${t}-text-content`,
                        n = new (this._getJSONRequestHandler())(e, this._state.token),
                        o = this._requestQueue.enqueue(n, !0);
                    return {
                        promise: o.promise.then((e) => {
                            let n = [];
                            return (
                                (n = e.reduce((e, n) => {
                                    let { nodes: o } = n;
                                    return e.concat((0, F.uv)(o, t, e.length));
                                }, [])),
                                (0, s.aV)(n)
                            );
                        }),
                        cancel: () => {
                            o.cancel();
                        },
                    };
                }
                getTextFromRects(t, e) {
                    const n = encodeURIComponent(JSON.stringify(e.map(d.u).toArray()));
                    return this._fetch(`${this._state.documentURL}/page-${t}-highlighted?rects=${n}`)
                        .then((t) => t.json())
                        .then((t) => t.text);
                }
                _getJSONRequestHandler() {
                    return m.Z;
                }
                renderTile(t, e, n, o, a, s) {
                    var i = this;
                    if (this._state.isDocumentHandleOutdated) return { promise: new Promise(() => {}), cancel: () => {} };
                    const c = `${this._state.documentURL}/page-${t}-dimensions-${e.width}-${e.height}-tile-${n.left}-${n.top}-${
                            n.width
                        }-${n.height}${o ? '-print' : ''}`,
                        l = e.width === n.width && e.height === n.height,
                        d = n.width > v.pt || n.height > v.pt;
                    let h,
                        m,
                        p = !1,
                        f = !1,
                        g = [],
                        w = [];
                    const y = new Promise((t, e) => {
                        (h = t), (m = e);
                    });
                    return (
                        (function t() {
                            let e,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            if (s) {
                                const t = new FormData();
                                t.append(
                                    'data',
                                    JSON.stringify({
                                        annotations: s.annotations
                                            .filter(R.d)
                                            .map(u.Hs)
                                            .toJS()
                                            .map((t) => ({ content: t })),
                                        formFieldValues: s.formFieldValues.map(u.kr).toJS(),
                                        formFields: s.formFields.map(u.vD).toJS(),
                                        signatures: s.signatures || [],
                                    }),
                                ),
                                    n.length > 0 &&
                                        n.forEach((e) => {
                                            const n = s.attachments.get(e);
                                            (0, r.kG)(n && n.data, 'Attachment data could not be found.'), t.append(e, n.data);
                                        }),
                                    (e = new b({
                                        identifier: c,
                                        url: c,
                                        token: i._state.imageToken,
                                        payload: t,
                                        doNotRequestWebP: d,
                                    }));
                            } else e = new b({ identifier: c, url: c, token: i._state.imageToken, doNotRequestWebP: d });
                            w.push(e);
                            const o = i._requestQueue.enqueue(e, l);
                            o.promise
                                .then((e) => {
                                    if (!p)
                                        return null != e && e.attachmentsNotFound && !f
                                            ? ((f = !0), void t(e.attachmentsNotFound))
                                            : void (null != e && e.attachmentsNotFound
                                                  ? m(new r.p2('Attachment could not be found.'))
                                                  : h(e));
                                })
                                .catch((t) => {
                                    p || m(t);
                                }),
                                g.push(o);
                        })(),
                        {
                            promise: y,
                            cancel: () => {
                                (p = !0),
                                    w.forEach((t) => {
                                        t.abort && 'function' == typeof t.abort && t.abort();
                                    }),
                                    g.forEach((t) => {
                                        t.cancel();
                                    });
                            },
                        }
                    );
                }
                renderAnnotation(t, e, n, o, a) {
                    return this._requestRenderAnnotation(t, e, n, o, a);
                }
                async renderPageAnnotations(t, e, n) {
                    if (!y.Rh) {
                        const e = Promise.resolve();
                        return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(t, e)), e;
                    }
                    const o = this.provider,
                        a = e.some((t) => t instanceof E.Z);
                    a && (await o._setReadStateCallbacksPromise);
                    const s = [],
                        r = e.filter((t) => {
                            const e = a ? o._readStateCallbacks.getAnnotationWithFormField(t.id) : null,
                                n = null == e ? void 0 : e.formField,
                                r = (0, R._R)(t, n);
                            if (r && n && 'number' == typeof t.pdfObjectId) {
                                s.find((t) => t.name === n.name) || s.push((0, u.kr)((0, C.CH)(n)));
                            }
                            return r && 'number' == typeof t.pdfObjectId;
                        });
                    if (0 === r.size && 0 === s.length) return Promise.resolve();
                    const i = new Promise((e, o) => {
                        const { promise: a, cancel: i } = this._requestRenderAnnotations(
                            t,
                            r.map((t) => t.pdfObjectId).toArray(),
                            r.map((t) => Math.floor(t.boundingBox.width * n)).toArray(),
                            r.map((t) => Math.floor(t.boundingBox.height * n)).toArray(),
                            s,
                        );
                        a.then((t) => {
                            const n = t.map((t) => t && (0, U.R4)(t));
                            n.forEach(async (t, e) => {
                                const n = await t,
                                    o = r.get(e);
                                if (o) {
                                    const t = this.annotationAPStreamPromises.get(o.id);
                                    t && ((this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(o.id)), t(n)),
                                        n && this.cacheAPStream(n, o);
                                }
                            }),
                                Promise.all(n).then(() => e());
                        }).catch((t) => {
                            i(), o(t);
                        });
                    });
                    return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(t, i)), i;
                }
                renderDetachedAnnotation(t, e, n, o) {
                    return this._requestRenderAnnotation(t, null, e, n, o, !0);
                }
                async getAttachment(t) {
                    try {
                        const e = await this._fetch(`${this._state.documentURL}/attachments/${t}`);
                        switch (e.status) {
                            case 404:
                                throw new r.p2('Attachment not Found.');
                            case 200:
                                return await e.blob();
                            default:
                                throw new r.p2('Bad Request.');
                        }
                    } catch (t) {
                        throw new r.p2(`Could not fetch attachment from PSPDFKit Server. ${t}`);
                    }
                }
                async search(t, e, n, o) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : O.S.TEXT;
                    const r = `q=${
                            s === O.S.PRESET ? t.replace(/_/g, '-') : encodeURIComponent(t)
                        }&start=${e}&limit=${n}&type=${s}&include_annotations=${a.toString()}&case_sensitive=${o.toString()}`,
                        i = `${this._state.documentURL}/search?${r}`,
                        c = await new m.Z(i, this._state.token).request();
                    return (0, l.E)(c.data);
                }
                async getMeasurementSnappingPoints(t) {}
                async searchAndRedact(t, e) {
                    const { searchType: n, annotationPreset: a, searchInAnnotations: r, caseSensitive: i } = e,
                        { color: c, fillColor: l, outlineColor: d } = a,
                        u = (0, o.Z)(a, B),
                        h = await this._fetch(`${this._state.documentURL}/redactions`, {
                            method: 'post',
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                strategy: n,
                                strategyOptions: {
                                    [n]: n === O.S.PRESET ? t.replace(/_/g, '-') : t,
                                    includeAnnotations: r,
                                    caseSensitive: i,
                                },
                                content: J(
                                    J({}, u),
                                    {},
                                    { color: c && c.toHex(), fillColor: l && l.toHex(), outlineColor: d && d.toHex() },
                                ),
                            }),
                        }),
                        { data: m } = await h.json();
                    return (0, s.aV)(m && m.annotations ? m.annotations.map((t) => A.Z.fromJSON(t.id, t.content)) : []);
                }
                exportPDF() {
                    let {
                        flatten: t = !1,
                        includeComments: e = !0,
                        excludeAnnotations: n = !1,
                        outputFormat: o = !1,
                        optimize: a = !1,
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const s = `${this._state.documentURL}/pdf?token=${this._state.token}&flatten=${String(t)}&comments=${String(
                        e,
                    )}&render_ap_streams=${String(!t)}&remove_annotations=${String(n)}`;
                    if (a) {
                        const t = {
                            documentFormat: 'pdf',
                            grayscaleText: !1,
                            grayscaleGraphics: !1,
                            grayscaleFormFields: !1,
                            grayscaleAnnotations: !1,
                            grayscaleImages: !1,
                            disableImages: !1,
                            mrcCompression: !1,
                            imageOptimizationQuality: 2,
                            linearize: !1,
                        };
                        let e;
                        if ('boolean' != typeof a) {
                            e = J(J({}, t), a);
                        } else e = t;
                        const {
                            documentFormat: n,
                            grayscaleText: o,
                            grayscaleGraphics: r,
                            grayscaleFormFields: i,
                            grayscaleAnnotations: c,
                            grayscaleImages: l,
                            disableImages: d,
                            mrcCompression: u,
                            imageOptimizationQuality: h,
                            linearize: m,
                        } = e;
                        return fetch(s, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                parts: [{ document: { id: '#self' } }],
                                output: {
                                    type: n,
                                    grayscaleText: o,
                                    grayscaleGraphics: r,
                                    grayscaleFormFields: i,
                                    grayscaleAnnotations: c,
                                    grayscaleImages: l,
                                    disableImages: d,
                                    mrcCompression: u,
                                    imageOptimizationQuality: h,
                                    linearize: m,
                                },
                            }),
                            credentials: 'include',
                        }).then((t) => t.arrayBuffer());
                    }
                    if (o) {
                        const t = { conformance: N.w.PDFA_2B, vectorization: !0, rasterization: !0 };
                        let e;
                        if ('boolean' != typeof o) {
                            e = J(J({}, t), o);
                        } else e = t;
                        const { conformance: n, vectorization: a, rasterization: r } = e;
                        return fetch(s, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                parts: [{ document: { id: '#self' } }],
                                output: { type: 'pdfa', conformance: n, vectorization: a, rasterization: r },
                            }),
                            credentials: 'include',
                        }).then((t) => t.arrayBuffer());
                    }
                    return fetch(s, { method: 'GET', credentials: 'include' }).then((t) => t.arrayBuffer());
                }
                exportXFDF() {
                    return this._fetch(`${this._state.documentURL}/document.xfdf`).then((t) => t.text());
                }
                exportInstantJSON(t) {
                    return this._fetch(
                        `${this._state.documentURL}/instant.json${'number' == typeof t ? `?version=${t}` : ''}`,
                    ).then((t) => t.json());
                }
                getPDFURL() {
                    let { includeComments: t = !0, excludeAnnotations: e = !1 } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        promise: Promise.resolve(
                            `${this._state.documentURL}/pdf?token=${this._state.token}&flatten=true&comments=${String(
                                t,
                            )}&remove_annotations=${String(e)}`,
                        ),
                        revoke: () => {},
                    };
                }
                generatePDFObjectURL() {
                    let t,
                        { includeComments: e = !0, excludeAnnotations: n = !1 } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = !1;
                    return {
                        promise: new Promise((a) => {
                            this.exportPDF({ flatten: !0, includeComments: e, excludeAnnotations: n }).then((e) => {
                                if (o) return;
                                const n = new Blob([e], { type: 'application/pdf' });
                                (t = window.URL.createObjectURL(n)), a(t);
                            });
                        }),
                        revoke: () => {
                            t && window.URL.revokeObjectURL(t), (o = !0);
                        },
                    };
                }
                async getDocumentOutline() {
                    let t;
                    try {
                        t = (await this._fetch(`${this._state.documentURL}/outline.json`).then((t) => t.json())).data;
                    } catch (e) {
                        t = {};
                    }
                    const e = Array.isArray(t.outline) ? t.outline : [];
                    return (0, s.aV)(e.map(k.i));
                }
                async getPageGlyphs() {
                    throw new r.p2('Not implemented in Server backend.');
                }
                onKeystrokeEvent() {
                    throw new Error('not implemented');
                }
                async getMeasurementScales() {
                    let t;
                    try {
                        return (
                            (t = (
                                await this._fetch(`${this._state.documentURL}/measurement_content_formats`).then((t) => t.json())
                            ).data),
                            t
                        );
                    } catch (t) {
                        throw new r.p2(`Fetching measurement scales failed: ${t}`);
                    }
                }
                async getSecondaryMeasurementUnit() {
                    let t;
                    try {
                        return (
                            (t = (
                                await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`).then((t) => t.json())
                            ).data),
                            t
                        );
                    } catch (t) {
                        throw new r.p2(`Fetching secondary measurement unit failed: ${t}`);
                    }
                }
                async setSecondaryMeasurementUnit(t) {
                    try {
                        const e = JSON.stringify({ unitTo: t ? t.unitTo : null, precision: t ? t.precision : null });
                        await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`, {
                            method: 'post',
                            body: e,
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                        });
                    } catch (t) {
                        throw new r.p2(`Setting secondary measurement unit failed: ${t}`);
                    }
                }
                async addMeasurementScale(t) {
                    try {
                        const e = JSON.stringify((0, c.f)(t));
                        await this._fetch(`${this._state.documentURL}/measurement_content_formats`, {
                            method: 'post',
                            body: e,
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                        });
                    } catch (t) {
                        throw new r.p2(`Adding a new measurement scale failed: ${t}`);
                    }
                }
                async removeMeasurementScale(t) {
                    try {
                        const e = JSON.stringify((0, c.f)(t));
                        await this._fetch(`${this._state.documentURL}/measurement_content_formats/delete`, {
                            method: 'post',
                            body: e,
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                        });
                    } catch (t) {
                        throw new r.p2(`Removing scale failed: ${t}`);
                    }
                }
                async applyOperationsAndReload(t) {
                    try {
                        const e = await M(t);
                        this._destroyProvider(),
                            await this._fetch(`${this._state.documentURL}/apply-operations`, {
                                method: 'post',
                                body: e,
                                credentials: 'include',
                            });
                    } catch (t) {
                        throw new r.p2(`Applying operations failed: ${t}`);
                    }
                    return this.reloadDocument();
                }
                async applyRedactionsAndReload() {
                    try {
                        return (
                            this._destroyProvider(),
                            await this._fetch(`${this._state.documentURL}/redact`, { method: 'post', credentials: 'include' }),
                            this.reloadDocument()
                        );
                    } catch (t) {
                        throw (this.provider.load(), new r.p2(`Applying redactions failed: ${t}`));
                    }
                }
                async reloadDocument() {
                    try {
                        return await this.load({ password: this._password });
                    } catch (t) {
                        throw new r.p2(`Reloading the document failed: ${t}`);
                    }
                }
                async exportPDFWithOperations(t) {
                    try {
                        const e = await M(t);
                        return this._fetch(`${this._state.documentURL}/pdf-with-operations`, {
                            method: 'post',
                            body: e,
                            credentials: 'include',
                        }).then((t) => t.arrayBuffer());
                    } catch (t) {
                        throw new r.p2(`Exporting PDF with operations failed: ${t}`);
                    }
                }
                async getSignaturesInfo() {
                    return (
                        this._refreshSignaturesInfoPromise && (await this._refreshSignaturesInfoPromise),
                        this._state.digitalSignatures
                    );
                }
                refreshSignaturesInfo() {
                    return (
                        this._refreshSignaturesInfoPromise ||
                            (this._refreshSignaturesInfoPromise = new Promise((t, e) => {
                                this._fetch(`${this._state.documentURL}/signatures`, { method: 'get', credentials: 'include' })
                                    .then((t) => t.json())
                                    .then((e) => {
                                        let { data: n } = e;
                                        (this._state = this._state.set('digitalSignatures', (0, u.rS)(n))),
                                            (this._refreshSignaturesInfoPromise = null),
                                            t();
                                    })
                                    .catch((t) => {
                                        (this._state = this._state.set('digitalSignatures', null)),
                                            (this._refreshSignaturesInfoPromise = null),
                                            e(t);
                                    });
                            })),
                        this._refreshSignaturesInfoPromise
                    );
                }
                async signDocumentAndReload(t, e) {
                    (0, r.kG)(void 0 === e || 'object' == typeof e, 'Signing service data must be an object if specified.');
                    try {
                        var n;
                        if (void 0 !== e && 'object' != typeof e)
                            throw new r.p2('Signing service data must be an object if specified.');
                        (0, q.tK)(t);
                        const o = t
                                ? J(
                                      J(
                                          J(
                                              J(
                                                  J(
                                                      J(
                                                          J(
                                                              J(
                                                                  {},
                                                                  'placeholderSize' in t
                                                                      ? { estimatedSize: t.placeholderSize }
                                                                      : null,
                                                              ),
                                                              'flatten' in t ? { flatten: t.flatten } : null,
                                                          ),
                                                          null != t && t.signatureMetadata
                                                              ? { signatureMetadata: (0, u._D)(t.signatureMetadata) }
                                                              : null,
                                                      ),
                                                      'position' in t ? { position: (0, u.eE)(t.position) } : null,
                                                  ),
                                                  'appearance' in t ? { appearance: (0, u.sr)(t.appearance) } : null,
                                              ),
                                              'formFieldName' in t ? { formFieldName: t.formFieldName } : null,
                                          ),
                                          void 0 !== (null == t ? void 0 : t.signingData) && 'signatureContainer' in t.signingData
                                              ? { signatureContainer: t.signingData.signatureContainer }
                                              : null,
                                      ),
                                      void 0 !== (null == t ? void 0 : t.signingData) && 'signatureType' in t.signingData
                                          ? { signatureType: u.YA[t.signingData.signatureType] }
                                          : null,
                                  )
                                : null,
                            a = (null == t || null === (n = t.appearance) || void 0 === n ? void 0 : n.watermarkImage) || null,
                            s = J(J({}, e ? { signingToken: e.signingToken } : null), o),
                            i = new FormData();
                        if (
                            (i.append('data', JSON.stringify(s)),
                            a && i.append('image', a),
                            this._destroyProvider(),
                            await this._fetch(`${this._state.documentURL}/sign`, {
                                method: 'post',
                                body: i,
                                credentials: 'include',
                            }),
                            await this.reloadDocument(),
                            null != t && t.formFieldName)
                        )
                            return t.formFieldName;
                    } catch (t) {
                        throw (this.provider.load(), new r.p2(`Adding digital signature failed: ${t.message || t}`));
                    }
                }
                getDocumentHandle() {
                    return this._state.documentHandle;
                }
                async getEmbeddedFiles() {
                    var t, e;
                    const n = await this._fetch(`${this._state.documentURL}/embedded-files`, {
                            method: 'get',
                            credentials: 'include',
                        }),
                        o = await n.json();
                    return (0, s.aV)(
                        null != o &&
                            null !== (t = o.data) &&
                            void 0 !== t &&
                            null !== (e = t.embeddedFiles) &&
                            void 0 !== e &&
                            e.length
                            ? o.data.embeddedFiles.map((t) => {
                                  let { id: e, content: n } = t;
                                  return (0, j.i)(e, n);
                              })
                            : [],
                    );
                }
                cancelRequests() {
                    this._requestQueue.cancelAll();
                }
                _destroyProvider() {
                    this.provider && (this.provider._clients && this.provider._clients.disconnect(), this.provider.destroy());
                }
                async _fetch(t, e) {
                    const n = await fetch(
                        t,
                        J(
                            J({}, e),
                            {},
                            {
                                headers: J(
                                    J({}, null == e ? void 0 : e.headers),
                                    {},
                                    {
                                        'X-PSPDFKit-Token': this._state.token,
                                        'PSPDFKit-Platform': 'web',
                                        'PSPDFKit-Version': (0, _.oM)(),
                                    },
                                ),
                            },
                        ),
                    );
                    if (!n.ok) {
                        let t = await (function (t) {
                            return t
                                .clone()
                                .json()
                                .catch(() => t.text());
                        })(n);
                        t = 'object' == typeof t ? t.reason : t;
                        const e = t || `${n.status} ${n.statusText}`;
                        throw new r.p2(e);
                    }
                    return n;
                }
                syncChanges() {
                    return this.provider.syncChanges();
                }
                async clearAPStreamCache() {}
                async runPDFFormattingScripts() {
                    return [];
                }
                async runPDFFormattingScriptsFromWidgets() {
                    return this.runPDFFormattingScripts();
                }
                async lazyLoadPages() {}
                async contentEditorEnter() {
                    throw new Error('not implemented');
                }
                async contentEditorExit() {
                    throw new Error('not implemented');
                }
                async contentEditorGetTextBlocks(t) {
                    throw new Error('not implemented');
                }
                async contentEditorDetectParagraphs(t) {
                    throw new Error('not implemented');
                }
                async contentEditorRenderTextBlock(t, e, n) {
                    throw new Error('not implemented');
                }
                contentEditorSetTextBlockCursor(t, e, n, o) {
                    throw new Error('not implemented');
                }
                contentEditorMoveTextBlockCursor(t, e, n, o) {
                    throw new Error('not implemented');
                }
                contentEditorInsertTextBlockString(t, e, n, o) {
                    throw new Error('not implemented');
                }
                contentEditorInsertTextBlockContentRef(t, e, n, o) {
                    throw new Error('not implemented');
                }
                contentEditorCreateTextBlock(t) {
                    throw new Error('not implemented');
                }
                contentEditorDeleteTextBlockRange(t, e, n) {
                    throw new Error('not implemented');
                }
                contentEditorLayoutTextBlock(t, e, n, o) {
                    throw new Error('not implemented');
                }
                async contentEditorDeleteTextBlockString(t, e, n) {
                    throw new Error('not implemented');
                }
                contentEditorSetTextBlockSelection(t, e, n) {
                    throw new Error('not implemented');
                }
                contentEditorSetTextBlockSelectionRange(t, e, n, o, a) {
                    throw new Error('not implemented');
                }
                async contentEditorTextBlockUndo(t, e) {
                    throw new Error('not implemented');
                }
                async contentEditorTextBlockRedo(t, e) {
                    throw new Error('not implemented');
                }
                async contentEditorTextBlockRestore(t, e, n) {
                    throw new Error('not implemented');
                }
                async contentEditorTextBlockApplyFormat(t, e, n, o) {
                    throw new Error('not implemented');
                }
                async contentEditorSave(t) {
                    throw new Error('not implemented');
                }
                async contentEditorGetAvailableFaces() {
                    throw new Error('not implemented');
                }
                async contentEditorSaveAndReload(t) {
                    throw new Error('not implemented');
                }
            }
            async function M(t) {
                const e = {},
                    n = new WeakMap(),
                    o = await Promise.all(
                        t.map(async (t, o) => {
                            if ('importDocument' === t.type) {
                                const a = t.document;
                                return (
                                    (0, r.kG)(
                                        a instanceof File || a instanceof Blob,
                                        'Wrong `importDocument` operation `document` value: it must be a File or a Blob',
                                    ),
                                    (0, T.M)(n, e, a, t, o, 'document')
                                );
                            }
                            if ('applyInstantJson' === t.type) {
                                const a = t.instantJson;
                                (0, r.kG)(
                                    'object' == typeof a && null !== a,
                                    'Wrong `applyInstantJson` operation `instantJson` value: it must be an object',
                                );
                                const s = JSON.stringify(a),
                                    i = new Blob([s], { type: 'application/json' });
                                return (0, T.M)(n, e, i, t, o, 'dataFilePath');
                            }
                            if ('applyXfdf' === t.type) {
                                const a = t.xfdf;
                                (0, r.kG)('string' == typeof a, 'Wrong `applyXfdf` operation `xfdf` value: it must be a string');
                                const s = new Blob([a], { type: 'application/vnd.adobe.xfdf' });
                                return (0, T.M)(n, e, s, t, o, 'dataFilePath');
                            }
                            return t;
                        }),
                    ),
                    a = new FormData();
                a.append('operations', JSON.stringify({ operations: o }));
                for (const t in e) a.append(t, e[t]);
                return a;
            }
        },
        16554: (t, e, n) => {
            n.d(e, { q: () => o });
            const o = { clientsPresenceEnabled: !0, listenToServerChangesEnabled: !0 };
        },
    },
]);
