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
    [4516],
    {
        14516: (t, e, r) => {
            'use strict';
            r.r(e),
                r.d(e, { Conformance: () => f, GdPicture: () => O, GdPictureClientNative: () => A, GdPictureWorker: () => S });
            var n = r(84121),
                o = r(50974);
            const s = 'pspdfkit-lib/',
                a = `${s}gdpicture-2255489f40d33d76b4ed1c4fa1925c8a5a50ab31/jit`,
                i = `${a}/initDotnet.js`,
                c = `${s}gdpicture-2255489f40d33d76b4ed1c4fa1925c8a5a50ab31/aot`,
                d = `${c}/initDotnet.js`;
            let f;
            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? l(Object(r), !0).forEach(function (e) {
                              (0, n.Z)(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : l(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          });
                }
                return t;
            }
            !(function (t) {
                (t[(t.pdf_a_1a = 0)] = 'pdf_a_1a'),
                    (t[(t.pdf_a_1b = 1)] = 'pdf_a_1b'),
                    (t[(t.pdf_a_2a = 2)] = 'pdf_a_2a'),
                    (t[(t.pdf_a_2u = 3)] = 'pdf_a_2u'),
                    (t[(t.pdf_a_2b = 4)] = 'pdf_a_2b'),
                    (t[(t.pdf_a_3a = 5)] = 'pdf_a_3a'),
                    (t[(t.pdf_a_3u = 6)] = 'pdf_a_3u'),
                    (t[(t.pdf_a_3b = 7)] = 'pdf_a_3b'),
                    (t[(t.pdf_a_4 = 8)] = 'pdf_a_4'),
                    (t[(t.pdf_a_4e = 9)] = 'pdf_a_4e'),
                    (t[(t.pdf_a_4f = 10)] = 'pdf_a_4f');
            })(f || (f = {}));
            const p = '/create.pdf',
                b = '/save.pdf',
                m = 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
            let y = null,
                _ = null;
            function g(t) {
                let e;
                (0, o.kG)(_, 'GdPicture WebAssembly is not loaded.');
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) n[s - 1] = arguments[s];
                for (const t of n) e = Object.assign(n[0], t);
                const a = JSON.stringify(u({ type: t }, e)),
                    i = JSON.parse(_.CommandHandler(a));
                if (!i.success) throw new Error(i.errorReason + ': ' + i.errorMessage + '\n' + i.error);
                return i;
            }
            class O {
                async _mountCustomFonts(t, e) {
                    (0, o.kG)(y, 'WebAssembly module not loaded.'), y.FS.mkdir(e);
                    {
                        const r = m ? y.FS.filesystems.WORKERFS : y.FS.filesystems.MEMFS;
                        y.FS.mount(r, { blobs: t }, e);
                    }
                }
                async loadModule(t, e, r, n, o) {
                    const { Assemblies: s, Module: f } = await (async function (t, e) {
                        let r, n, o;
                        const s = 'string' == typeof t ? t : t.baseUrl;
                        return (
                            e ? ((n = `${t}${d}`), (o = `${s}${c}`)) : ((n = `${t}${i}`), (o = `${s}${a}`)),
                            ({ initDotnet: r } =
                                'string' == typeof t ? await import(n) : await import(baseCoreUrlOrWasmBinary.wasmLoaderModule)),
                            r(o)
                        );
                    })(t, e);
                    (_ = s.GdPictureWasm.API),
                        (y = f),
                        g('gdpicture/setLicense', { origin: r }, { licenseKey: n || 'DEMO_PSPDFKIT_WEB' });
                    const l = o ? '/fonts' : '';
                    o &&
                        !y.FS.analyzePath(l).exists &&
                        (await this._mountCustomFonts(o, l), g('gdpicture/setFonts', { fontPaths: [l] }));
                }
                toPdf(t, e) {
                    y.FS.writeFile(p, new Uint8Array(t));
                    const r = { file: b };
                    e && e in f && (r.conformance = e);
                    try {
                        return g('gdpicture/process', { input: { file: p }, output: r }), y.FS.readFile(b).buffer;
                    } finally {
                        try {
                            y.FS.unlink(b);
                        } catch (t) {}
                    }
                }
            }
            var h = r(35369),
                P = r(81414),
                w = r.n(P);
            const S = class {
                constructor(t) {
                    let { baseUrl: e, aot: r, mainThreadOrigin: s, licenseKey: a, customFonts: i } = t;
                    (0, n.Z)(this, 'requests', (0, h.D5)()),
                        (0, n.Z)(this, 'nextRequestId', 1),
                        (0, n.Z)(this, 'handleMessage', (t) => {
                            const e = t.data,
                                r = this.requests.get(e.id);
                            (0, o.kG)(r, `No request was made for id ${e.id}.`);
                            const { resolve: n, reject: s } = r;
                            if (((this.requests = this.requests.delete(e.id)), e.error)) {
                                const t = new o.p2(e.error);
                                (t.callArgs = e.callArgs), s(t);
                            } else n(e.result);
                        }),
                        (this.worker = new (w())()),
                        (this.worker.onmessage = this.handleMessage),
                        (this.moduleLoadPromise = this.sendRequest('loadModule', [e, r, s, a, i]));
                }
                toPdf(t, e) {
                    let r;
                    return e && (r = e.replace('pdf', 'pdf_').replaceAll('-', '_')), this.sendRequest('toPdf', [t, r]);
                }
                destroy() {
                    var t;
                    null === (t = this.worker) || void 0 === t || t.terminate(), (this.worker = null);
                }
                async sendRequest(t, e) {
                    (0, o.kG)(this.worker, 'GdPictureClient has been destroyed'),
                        this.moduleLoadPromise && (await this.moduleLoadPromise);
                    const r = this.worker;
                    return new Promise((n, o) => {
                        const s = this.assignId(),
                            a = [...e].filter((t) => t instanceof ArrayBuffer);
                        r.postMessage({ id: s, action: t, args: e }, a),
                            (this.requests = this.requests.set(s, { resolve: n, reject: o }));
                    });
                }
                assignId() {
                    const t = this.nextRequestId;
                    return (this.nextRequestId = this.nextRequestId + 1), t;
                }
            };
            const A = class {
                constructor(t) {
                    let { baseUrl: e, aot: r, mainThreadOrigin: n, licenseKey: o, customFonts: s } = t;
                    (this.gdPicture = new O()), (this.moduleLoadPromise = this.gdPicture.loadModule(e, r, n, o, s));
                }
                async toPdf(t, e) {
                    let r;
                    return (
                        this.moduleLoadPromise && (await this.moduleLoadPromise),
                        e && (r = e.replace('pdf', 'pdf_').replaceAll('-', '_')),
                        this.gdPicture.toPdf(t, r)
                    );
                }
                destroy() {}
            };
        },
        81414: (t, e, r) => {
            t.exports = function () {
                return r(69855)(
                    '/*!\n * PSPDFKit for Web 2023.4.4 (https://pspdfkit.com/web)\n *\n * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.\n *\n * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW\n * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.\n * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.\n * This notice may not be removed from this file.\n *\n * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/\n */(()=>{"use strict";const t=function t(e){let r;return r=e instanceof Error?e:new Error(e),Object.setPrototypeOf(r,t.prototype),r};t.prototype=Object.create(Error.prototype,{name:{value:"PSPDFKitError",enumerable:!1}});const e=t;function r(t,r){if(!t)throw new e(`Assertion failed: ${r||"Condition not met"}\\n\\nFor further assistance, please go to: https://pspdfkit.com/support/request`)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}function a(t,e,r){return(e=o(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",\'[tabindex]:not([tabindex^="-"])\'].join(",");new WeakMap;const i="pspdfkit-lib/",s=`${i}gdpicture-2255489f40d33d76b4ed1c4fa1925c8a5a50ab31/jit`,f=`${s}/initDotnet.js`,c=`${i}gdpicture-2255489f40d33d76b4ed1c4fa1925c8a5a50ab31/aot`,l=`${c}/initDotnet.js`;let u;function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}!function(t){t[t.pdf_a_1a=0]="pdf_a_1a",t[t.pdf_a_1b=1]="pdf_a_1b",t[t.pdf_a_2a=2]="pdf_a_2a",t[t.pdf_a_2u=3]="pdf_a_2u",t[t.pdf_a_2b=4]="pdf_a_2b",t[t.pdf_a_3a=5]="pdf_a_3a",t[t.pdf_a_3u=6]="pdf_a_3u",t[t.pdf_a_3b=7]="pdf_a_3b",t[t.pdf_a_4=8]="pdf_a_4",t[t.pdf_a_4e=9]="pdf_a_4e",t[t.pdf_a_4f=10]="pdf_a_4f"}(u||(u={}));const b="/create.pdf",y="/save.pdf",_="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;let m=null,g=null;function O(t){let e;r(g,"GdPicture WebAssembly is not loaded.");for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];for(const t of o)e=Object.assign(o[0],t);const i=JSON.stringify(d({type:t},e)),s=JSON.parse(g.CommandHandler(i));if(!s.success)throw new Error(s.errorReason+": "+s.errorMessage+"\\n"+s.error);return s}const S=new class{async _mountCustomFonts(t,e){r(m,"WebAssembly module not loaded."),m.FS.mkdir(e);{const r=_?m.FS.filesystems.WORKERFS:m.FS.filesystems.MEMFS;m.FS.mount(r,{blobs:t},e)}}async loadModule(t,e,r,n,o){const{Assemblies:a,Module:i}=await async function(t,e){let r,n,o;const a="string"==typeof t?t:t.baseUrl;return e?(n=`${t}${l}`,o=`${a}${c}`):(n=`${t}${f}`,o=`${a}${s}`),({initDotnet:r}="string"==typeof t?await import(n):await import(baseCoreUrlOrWasmBinary.wasmLoaderModule)),r(o)}(t,e);g=a.GdPictureWasm.API,m=i,O("gdpicture/setLicense",{origin:r},{licenseKey:n||"DEMO_PSPDFKIT_WEB"});const u=o?"/fonts":"";o&&!m.FS.analyzePath(u).exists&&(await this._mountCustomFonts(o,u),O("gdpicture/setFonts",{fontPaths:[u]}))}toPdf(t,e){m.FS.writeFile(b,new Uint8Array(t));const r={file:y};e&&e in u&&(r.conformance=e);try{return O("gdpicture/process",{input:{file:b},output:r}),m.FS.readFile(y).buffer}finally{try{m.FS.unlink(y)}catch(t){}}}},w=self;w.global=w,w.module={},w.onmessage=async t=>{let e,r,{data:n}=t;try{const t=await S[n.action](...n.args);if(e={id:n.id,result:t},Array.isArray(t)){const e=t.filter((t=>t instanceof ArrayBuffer));e.length>0&&(r=e)}t instanceof ArrayBuffer&&(r=[t])}catch(t){const o=[...n.args].filter((t=>t instanceof ArrayBuffer));o.length>0&&(r=o),e={id:n.id,error:t.message||t.toString(),callArgs:n.args}}w.postMessage(e,r)}})();',
                    null,
                );
            };
        },
    },
]);
