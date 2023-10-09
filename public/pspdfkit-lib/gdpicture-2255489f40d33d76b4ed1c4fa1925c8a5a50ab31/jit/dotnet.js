var __dotnet_runtime = (function (e) {
        'use strict';
        let t, r, n, o, s, i, a, c;
        const u = {},
            l = {};
        let _;
        function f(e, u) {
            (r = u.internal),
                (n = u.marshaled_imports),
                (t = u.module),
                d(e),
                (o = e.isNode),
                (s = e.isShell),
                (i = e.isWeb),
                (a = e.isWorker),
                (c = e.isPThread),
                (m.quit = e.quit_),
                (m.ExitStatus = e.ExitStatus),
                (m.requirePromise = e.requirePromise);
        }
        function d(e) {
            (o = e.isNode), (s = e.isShell), (i = e.isWeb), (a = e.isWorker), (c = e.isPThread);
        }
        const m = {
                javaScriptExports: {},
                mono_wasm_load_runtime_done: !1,
                mono_wasm_bindings_is_ready: !1,
                maxParallelDownloads: 16,
                config: { environmentVariables: {} },
                diagnosticTracing: !1,
            },
            p = -1;
        function h(e) {
            return null == e;
        }
        const w = [
                [!0, 'mono_wasm_register_root', 'number', ['number', 'number', 'string']],
                [!0, 'mono_wasm_deregister_root', null, ['number']],
                [!0, 'mono_wasm_string_get_data', null, ['number', 'number', 'number', 'number']],
                [!0, 'mono_wasm_string_get_data_ref', null, ['number', 'number', 'number', 'number']],
                [!0, 'mono_wasm_set_is_debugger_attached', 'void', ['bool']],
                [!0, 'mono_wasm_send_dbg_command', 'bool', ['number', 'number', 'number', 'number', 'number']],
                [
                    !0,
                    'mono_wasm_send_dbg_command_with_parms',
                    'bool',
                    ['number', 'number', 'number', 'number', 'number', 'number', 'string'],
                ],
                [!0, 'mono_wasm_setenv', null, ['string', 'string']],
                [!0, 'mono_wasm_parse_runtime_options', null, ['number', 'number']],
                [!0, 'mono_wasm_strdup', 'number', ['string']],
                [!0, 'mono_background_exec', null, []],
                [!0, 'mono_set_timeout_exec', null, []],
                [!0, 'mono_wasm_load_icu_data', 'number', ['number']],
                [!0, 'mono_wasm_get_icudt_name', 'string', ['string']],
                [!1, 'mono_wasm_add_assembly', 'number', ['string', 'number', 'number']],
                [!0, 'mono_wasm_add_satellite_assembly', 'void', ['string', 'string', 'number', 'number']],
                [!1, 'mono_wasm_load_runtime', null, ['string', 'number']],
                [!0, 'mono_wasm_change_debugger_log_level', 'void', ['number']],
                [!0, 'mono_wasm_get_corlib', 'number', []],
                [!0, 'mono_wasm_assembly_load', 'number', ['string']],
                [!0, 'mono_wasm_find_corlib_class', 'number', ['string', 'string']],
                [!0, 'mono_wasm_assembly_find_class', 'number', ['number', 'string', 'string']],
                [!0, 'mono_wasm_runtime_run_module_cctor', 'void', ['number']],
                [!0, 'mono_wasm_find_corlib_type', 'number', ['string', 'string']],
                [!0, 'mono_wasm_assembly_find_type', 'number', ['number', 'string', 'string']],
                [!0, 'mono_wasm_assembly_find_method', 'number', ['number', 'string', 'number']],
                [!0, 'mono_wasm_invoke_method', 'number', ['number', 'number', 'number', 'number']],
                [!1, 'mono_wasm_invoke_method_ref', 'void', ['number', 'number', 'number', 'number', 'number']],
                [!0, 'mono_wasm_string_get_utf8', 'number', ['number']],
                [!0, 'mono_wasm_string_from_utf16_ref', 'void', ['number', 'number', 'number']],
                [!0, 'mono_wasm_get_obj_type', 'number', ['number']],
                [!0, 'mono_wasm_array_length', 'number', ['number']],
                [!0, 'mono_wasm_array_get', 'number', ['number', 'number']],
                [!0, 'mono_wasm_array_get_ref', 'void', ['number', 'number', 'number']],
                [!1, 'mono_wasm_obj_array_new', 'number', ['number']],
                [!1, 'mono_wasm_obj_array_new_ref', 'void', ['number', 'number']],
                [!1, 'mono_wasm_obj_array_set', 'void', ['number', 'number', 'number']],
                [!1, 'mono_wasm_obj_array_set_ref', 'void', ['number', 'number', 'number']],
                [!0, 'mono_wasm_register_bundled_satellite_assemblies', 'void', []],
                [!1, 'mono_wasm_try_unbox_primitive_and_get_type_ref', 'number', ['number', 'number', 'number']],
                [!0, 'mono_wasm_box_primitive_ref', 'void', ['number', 'number', 'number', 'number']],
                [!0, 'mono_wasm_intern_string_ref', 'void', ['number']],
                [!0, 'mono_wasm_assembly_get_entry_point', 'number', ['number']],
                [!0, 'mono_wasm_get_delegate_invoke_ref', 'number', ['number']],
                [!0, 'mono_wasm_string_array_new_ref', 'void', ['number', 'number']],
                [!0, 'mono_wasm_typed_array_new_ref', 'void', ['number', 'number', 'number', 'number', 'number']],
                [!0, 'mono_wasm_class_get_type', 'number', ['number']],
                [!0, 'mono_wasm_type_get_class', 'number', ['number']],
                [!0, 'mono_wasm_get_type_name', 'string', ['number']],
                [!0, 'mono_wasm_get_type_aqn', 'string', ['number']],
                [!0, 'mono_wasm_event_pipe_enable', 'bool', ['string', 'number', 'number', 'string', 'bool', 'number']],
                [!0, 'mono_wasm_event_pipe_session_start_streaming', 'bool', ['number']],
                [!0, 'mono_wasm_event_pipe_session_disable', 'bool', ['number']],
                [!0, 'mono_wasm_diagnostic_server_create_thread', 'bool', ['string', 'number']],
                [!0, 'mono_wasm_diagnostic_server_thread_attach_to_runtime', 'void', []],
                [!0, 'mono_wasm_diagnostic_server_post_resume_runtime', 'void', []],
                [!0, 'mono_wasm_diagnostic_server_create_stream', 'number', []],
                [!0, 'mono_wasm_string_from_js', 'number', ['string']],
                [!1, 'mono_wasm_exit', 'void', ['number']],
                [!0, 'mono_wasm_getenv', 'number', ['string']],
                [!0, 'mono_wasm_set_main_args', 'void', ['number', 'number']],
                [!1, 'mono_wasm_enable_on_demand_gc', 'void', ['number']],
                [!1, 'mono_profiler_init_aot', 'void', ['number']],
                [!1, 'mono_wasm_exec_regression', 'number', ['number', 'string']],
                [!1, 'mono_wasm_invoke_method_bound', 'number', ['number', 'number']],
                [!0, 'mono_wasm_write_managed_pointer_unsafe', 'void', ['number', 'number']],
                [!0, 'mono_wasm_copy_managed_pointer', 'void', ['number', 'number']],
                [!0, 'mono_wasm_i52_to_f64', 'number', ['number', 'number']],
                [!0, 'mono_wasm_u52_to_f64', 'number', ['number', 'number']],
                [!0, 'mono_wasm_f64_to_i52', 'number', ['number', 'number']],
                [!0, 'mono_wasm_f64_to_u52', 'number', ['number', 'number']],
            ],
            g = {};
        function y(e, t, r) {
            const n = (function (e, t, r) {
                let n,
                    o = 'number' == typeof t ? t : 0;
                n = 'number' == typeof r ? o + r : e.length - o;
                const s = {
                    read: function () {
                        if (o >= n) return null;
                        const t = e[o];
                        return (o += 1), t;
                    },
                };
                return (
                    Object.defineProperty(s, 'eof', {
                        get: function () {
                            return o >= n;
                        },
                        configurable: !0,
                        enumerable: !0,
                    }),
                    s
                );
            })(e, t, r);
            let o = '',
                s = 0,
                i = 0,
                a = 0,
                c = 0,
                u = 0,
                l = 0;
            for (; (s = n.read()), (i = n.read()), (a = n.read()), null !== s; )
                null === i && ((i = 0), (u += 1)),
                    null === a && ((a = 0), (u += 1)),
                    (l = (s << 16) | (i << 8) | (a << 0)),
                    (c = (16777215 & l) >> 18),
                    (o += b[c]),
                    (c = (262143 & l) >> 12),
                    (o += b[c]),
                    u < 2 && ((c = (4095 & l) >> 6), (o += b[c])),
                    2 === u ? (o += '==') : 1 === u ? (o += '=') : ((c = (63 & l) >> 0), (o += b[c]));
            return o;
        }
        const b = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '+',
            '/',
        ];
        const v = new Map();
        v.remove = function (e) {
            const t = this.get(e);
            return this.delete(e), t;
        };
        let E,
            A,
            k,
            S = {},
            O = 0,
            x = -1;
        function N() {
            (r.mono_wasm_runtime_is_ready = m.mono_wasm_runtime_is_ready = !0),
                (O = 0),
                (S = {}),
                (x = -1),
                globalThis.dotnetDebugger || console.debug('mono_wasm_runtime_ready', 'fe00e07a-5519-4dfe-b35a-f867dbaf2e28');
        }
        function j() {}
        function D(e, r, n, o) {
            const s = { res_ok: e, res: { id: r, value: y(new Uint8Array(t.HEAPU8.buffer, n, o)) } };
            v.has(r) && console.warn(`MONO_WASM: Adding an id (${r}) that already exists in commands_received`), v.set(r, s);
        }
        function M(e) {
            e.length > x && (E && t._free(E), (x = Math.max(e.length, x, 256)), (E = t._malloc(x)));
            const r = atob(e);
            for (let e = 0; e < r.length; e++) t.HEAPU8[E + e] = r.charCodeAt(e);
        }
        function R(e, t, r, n, o, s, i) {
            M(n), g.mono_wasm_send_dbg_command_with_parms(e, t, r, E, o, s, i.toString());
            const { res_ok: a, res: c } = v.remove(e);
            if (!a) throw new Error('Failed on mono_wasm_invoke_method_debugger_agent_with_parms');
            return c;
        }
        function T(e, t, r, n) {
            M(n), g.mono_wasm_send_dbg_command(e, t, r, E, n.length);
            const { res_ok: o, res: s } = v.remove(e);
            if (!o) throw new Error('Failed on mono_wasm_send_dbg_command');
            return s;
        }
        function I() {
            const { res_ok: e, res: t } = v.remove(0);
            if (!e) throw new Error('Failed on mono_wasm_get_dbg_command_info');
            return t;
        }
        function $() {}
        function F() {
            g.mono_wasm_set_is_debugger_attached(!1);
        }
        function P(e) {
            g.mono_wasm_change_debugger_log_level(e);
        }
        function C(e, t = {}) {
            if ('object' != typeof e) throw new Error(`event must be an object, but got ${JSON.stringify(e)}`);
            if (void 0 === e.eventName)
                throw new Error(`event.eventName is a required parameter, in event: ${JSON.stringify(e)}`);
            if ('object' != typeof t) throw new Error(`args must be an object, but got ${JSON.stringify(t)}`);
            console.debug(
                'mono_wasm_debug_event_raised:aef14bca-5519-4dfe-b35a-f867abc123ae',
                JSON.stringify(e),
                JSON.stringify(t),
            );
        }
        function U() {
            -1 == m.waitForDebugger && (m.waitForDebugger = 1), g.mono_wasm_set_is_debugger_attached(!0);
        }
        function B(e, r) {
            (A = t.UTF8ToString(e).concat('.dll')),
                (k = r),
                console.assert(!0, `Adding an entrypoint breakpoint ${A} at method token  ${k}`);
        }
        function z(e) {
            if (null != e.arguments && !Array.isArray(e.arguments))
                throw new Error(`"arguments" should be an array, but was ${e.arguments}`);
            const t = e.objectId,
                r = e.details;
            let n = {};
            if (t.startsWith('dotnet:cfo_res:')) {
                if (!(t in S)) throw new Error(`Unknown object id ${t}`);
                n = S[t];
            } else
                n = (function (e, t) {
                    if (e.startsWith('dotnet:array:')) {
                        let e;
                        if (void 0 === t.items) return (e = t.map((e) => e.value)), e;
                        if (void 0 === t.dimensionsDetails || 1 === t.dimensionsDetails.length)
                            return (e = t.items.map((e) => e.value)), e;
                    }
                    const r = {};
                    return (
                        Object.keys(t).forEach((e) => {
                            const n = t[e];
                            void 0 !== n.get
                                ? Object.defineProperty(r, n.name, {
                                      get: () => T(n.get.id, n.get.commandSet, n.get.command, n.get.buffer),
                                      set: function (e) {
                                          return (
                                              R(
                                                  n.set.id,
                                                  n.set.commandSet,
                                                  n.set.command,
                                                  n.set.buffer,
                                                  n.set.length,
                                                  n.set.valtype,
                                                  e,
                                              ),
                                              !0
                                          );
                                      },
                                  })
                                : void 0 !== n.set
                                ? Object.defineProperty(r, n.name, {
                                      get: () => n.value,
                                      set: function (e) {
                                          return (
                                              R(
                                                  n.set.id,
                                                  n.set.commandSet,
                                                  n.set.command,
                                                  n.set.buffer,
                                                  n.set.length,
                                                  n.set.valtype,
                                                  e,
                                              ),
                                              !0
                                          );
                                      },
                                  })
                                : (r[n.name] = n.value);
                        }),
                        r
                    );
                })(t, r);
            const o = null != e.arguments ? e.arguments.map((e) => JSON.stringify(e.value)) : [],
                s = `const fn = ${e.functionDeclaration}; return fn.apply(proxy, [${o}]);`,
                i = new Function('proxy', s)(n);
            if (void 0 === i) return { type: 'undefined' };
            if (Object(i) !== i)
                return 'object' == typeof i && null == i
                    ? { type: typeof i, subtype: `${i}`, value: null }
                    : { type: typeof i, description: `${i}`, value: `${i}` };
            if (e.returnByValue && null == i.subtype) return { type: 'object', value: i };
            if (Object.getPrototypeOf(i) == Array.prototype) {
                const e = L(i);
                return { type: 'object', subtype: 'array', className: 'Array', description: `Array(${i.length})`, objectId: e };
            }
            if (void 0 !== i.value || void 0 !== i.subtype) return i;
            if (i == n) return { type: 'object', className: 'Object', description: 'Object', objectId: t };
            return { type: 'object', className: 'Object', description: 'Object', objectId: L(i) };
        }
        function W(e, t = {}) {
            return (function (e, t) {
                if (!(e in S)) throw new Error(`Could not find any object with id ${e}`);
                const r = S[e],
                    n = Object.getOwnPropertyDescriptors(r);
                t.accessorPropertiesOnly &&
                    Object.keys(n).forEach((e) => {
                        void 0 === n[e].get && Reflect.deleteProperty(n, e);
                    });
                const o = [];
                return (
                    Object.keys(n).forEach((e) => {
                        let t;
                        const r = n[e];
                        (t =
                            'object' == typeof r.value
                                ? Object.assign({ name: e }, r)
                                : void 0 !== r.value
                                ? { name: e, value: Object.assign({ type: typeof r.value, description: '' + r.value }, r) }
                                : void 0 !== r.get
                                ? { name: e, get: { className: 'Function', description: `get ${e} () {}`, type: 'function' } }
                                : { name: e, value: { type: 'symbol', value: '<Unknown>', description: '<Unknown>' } }),
                            o.push(t);
                    }),
                    { __value_as_json_string__: JSON.stringify(o) }
                );
            })(`dotnet:cfo_res:${e}`, t);
        }
        function L(e) {
            const t = 'dotnet:cfo_res:' + O++;
            return (S[t] = e), t;
        }
        function H(e) {
            e in S && delete S[e];
        }
        function V(e, n) {
            const o = t.UTF8ToString(n);
            r.logging && 'function' == typeof r.logging.debugger && r.logging.debugger(e, o);
        }
        let q = 0;
        function J(e) {
            const t = 1 === g.mono_wasm_load_icu_data(e);
            return t && q++, t;
        }
        function G(e) {
            return g.mono_wasm_get_icudt_name(e);
        }
        function Y() {
            const e = m.config;
            let r = !1;
            if ((e.globalizationMode || (e.globalizationMode = 'auto'), 'invariant' === e.globalizationMode && (r = !0), !r))
                if (q > 0)
                    m.diagnosticTracing && console.debug('MONO_WASM: ICU data archive(s) loaded, disabling invariant mode');
                else {
                    if ('icu' === e.globalizationMode) {
                        const e = 'invariant globalization mode is inactive and no ICU data archives were loaded';
                        throw (t.printErr(`MONO_WASM: ERROR: ${e}`), new Error(e));
                    }
                    m.diagnosticTracing &&
                        console.debug('MONO_WASM: ICU data archive(s) not loaded, using invariant globalization mode'),
                        (r = !0);
                }
            r && g.mono_wasm_setenv('DOTNET_SYSTEM_GLOBALIZATION_INVARIANT', '1'),
                g.mono_wasm_setenv('DOTNET_SYSTEM_GLOBALIZATION_PREDEFINED_CULTURES_ONLY', '1');
        }
        function X(e) {
            null == e && (e = {}),
                'writeAt' in e || (e.writeAt = 'System.Runtime.InteropServices.JavaScript.JavaScriptExports::StopProfile'),
                'sendTo' in e || (e.sendTo = 'Interop/Runtime::DumpAotProfileData');
            const r = 'aot:write-at-method=' + e.writeAt + ',send-to-method=' + e.sendTo;
            t.ccall('mono_wasm_load_profiler_aot', null, ['string'], [r]);
        }
        function Z(e) {
            null == e && (e = {}),
                'writeAt' in e || (e.writeAt = 'WebAssembly.Runtime::StopProfile'),
                'sendTo' in e || (e.sendTo = 'WebAssembly.Runtime::DumpCoverageProfileData');
            const r = 'coverage:write-at-method=' + e.writeAt + ',send-to-method=' + e.sendTo;
            t.ccall('mono_wasm_load_profiler_coverage', null, ['string'], [r]);
        }
        const K = new Map(),
            Q = new Map();
        let ee = 0;
        function te(e) {
            if (K.has(e)) return K.get(e);
            const t = g.mono_wasm_assembly_load(e);
            return K.set(e, t), t;
        }
        function re(e, t, r) {
            ee || (ee = g.mono_wasm_get_corlib());
            let n = (function (e, t, r) {
                let n = Q.get(e);
                n || Q.set(e, (n = new Map()));
                let o = n.get(t);
                return o || ((o = new Map()), n.set(t, o)), o.get(r);
            })(ee, e, t);
            if (void 0 !== n) return n;
            if (((n = g.mono_wasm_assembly_find_class(ee, e, t)), r && !n))
                throw new Error(`Failed to find corlib class ${e}.${t}`);
            return (
                (function (e, t, r, n) {
                    const o = Q.get(e);
                    if (!o) throw new Error('internal error');
                    const s = o.get(t);
                    if (!s) throw new Error('internal error');
                    s.set(r, n);
                })(ee, e, t, n),
                n
            );
        }
        const ne = new Map(),
            oe = [];
        function se(e) {
            try {
                if (0 == ne.size) return e;
                const t = e;
                for (let r = 0; r < oe.length; r++) {
                    const n = e.replace(new RegExp(oe[r], 'g'), (e, ...t) => {
                        const r = t.find((e) => 'object' == typeof e && void 0 !== e.replaceSection);
                        if (void 0 === r) return e;
                        const n = r.funcNum,
                            o = r.replaceSection,
                            s = ne.get(Number(n));
                        return void 0 === s ? e : e.replace(o, `${s} (${o})`);
                    });
                    if (n !== t) return n;
                }
                return t;
            } catch (t) {
                return console.debug(`MONO_WASM: failed to symbolicate: ${t}`), e;
            }
        }
        function ie(e) {
            let t = e;
            return t instanceof Error || (t = new Error(t)), se(t.stack);
        }
        function ae(e, n, o, s, i) {
            const a = t.UTF8ToString(o),
                c = !!s,
                u = t.UTF8ToString(e),
                l = i,
                _ = t.UTF8ToString(n),
                f = `[MONO] ${a}`;
            if (r.logging && 'function' == typeof r.logging.trace) r.logging.trace(u, _, f, c, l);
            else
                switch (_) {
                    case 'critical':
                    case 'error':
                        console.error(ie(f));
                        break;
                    case 'warning':
                        console.warn(f);
                        break;
                    case 'message':
                    default:
                        console.log(f);
                        break;
                    case 'info':
                        console.info(f);
                        break;
                    case 'debug':
                        console.debug(f);
                }
        }
        let ce;
        function ue(e) {
            if (!m.mono_wasm_symbols_are_ready) {
                m.mono_wasm_symbols_are_ready = !0;
                try {
                    t.FS_readFile(e, { flags: 'r', encoding: 'utf8' })
                        .split(/[\r\n]/)
                        .forEach((e) => {
                            const t = e.split(/:/);
                            t.length < 2 || ((t[1] = t.splice(1).join(':')), ne.set(Number(t[0]), t[1]));
                        });
                } catch (t) {
                    return void (44 == t.errno || console.log(`MONO_WASM: Error loading symbol file ${e}: ${JSON.stringify(t)}`));
                }
            }
        }
        async function le(e, t) {
            try {
                const r = await _e(e, t);
                return me(r), r;
            } catch (e) {
                return e instanceof m.ExitStatus ? e.status : (me(1, e), 1);
            }
        }
        async function _e(e, r) {
            (function (e, r) {
                const n = r.length + 1,
                    o = t._malloc(4 * n);
                let s = 0;
                t.setValue(o + 4 * s, g.mono_wasm_strdup(e), 'i32'), (s += 1);
                for (let e = 0; e < r.length; ++e) t.setValue(o + 4 * s, g.mono_wasm_strdup(r[e]), 'i32'), (s += 1);
                g.mono_wasm_set_main_args(n, o);
            })(e, r),
                -1 == m.waitForDebugger &&
                    (console.log('MONO_WASM: waiting for debugger...'),
                    await new Promise((e) => {
                        const t = setInterval(() => {
                            1 == m.waitForDebugger && (clearInterval(t), e());
                        }, 100);
                    }));
            const n = fe(e);
            return m.javaScriptExports.call_entry_point(n, r);
        }
        function fe(e) {
            if (!m.mono_wasm_bindings_is_ready) throw new Error('Assert failed: The runtime must be initialized.');
            const t = te(e);
            if (!t) throw new Error('Could not find assembly: ' + e);
            let r = 0;
            1 == m.waitForDebugger && (r = 1);
            const n = g.mono_wasm_assembly_get_entry_point(t, r);
            if (!n) throw new Error('Could not find entry point for assembly: ' + e);
            return n;
        }
        function de(e) {
            Mi(e, !1), me(1, e);
        }
        function me(e, t) {
            if (m.config.asyncFlushOnExit && 0 === e)
                throw (
                    ((async () => {
                        try {
                            await (async function () {
                                try {
                                    const e = await import('process'),
                                        t = (e) =>
                                            new Promise((t, r) => {
                                                e.on('error', (e) => r(e)),
                                                    e.write('', function () {
                                                        t();
                                                    });
                                            }),
                                        r = t(e.stderr),
                                        n = t(e.stdout);
                                    await Promise.all([n, r]);
                                } catch (e) {
                                    console.error(`flushing std* streams failed: ${e}`);
                                }
                            })();
                        } finally {
                            pe(e, t);
                        }
                    })(),
                    m.ExitStatus ? new m.ExitStatus(e) : t || new Error('Stop with exit code ' + e))
                );
            pe(e, t);
        }
        function pe(e, n) {
            if (
                (m.ExitStatus &&
                    (!n || n instanceof m.ExitStatus
                        ? (n = new m.ExitStatus(e))
                        : n instanceof Error
                        ? t.printErr(r.mono_wasm_stringify_as_error_with_stack(n))
                        : 'string' == typeof n
                        ? t.printErr(n)
                        : t.printErr(JSON.stringify(n))),
                (function (e, t) {
                    if (m.config.logExitCode)
                        if (
                            (0 != e &&
                                t &&
                                (t instanceof Error
                                    ? console.error(ie(t))
                                    : 'string' == typeof t
                                    ? console.error(t)
                                    : console.error(JSON.stringify(t))),
                            ce)
                        ) {
                            const t = () => {
                                0 == ce.bufferedAmount ? console.log('WASM EXIT ' + e) : setTimeout(t, 100);
                            };
                            t();
                        } else console.log('WASM EXIT ' + e);
                })(e, n),
                (function (e) {
                    if (i && m.config.appendElementOnExit) {
                        const t = document.createElement('label');
                        (t.id = 'tests_done'),
                            e && (t.style.background = 'red'),
                            (t.innerHTML = e.toString()),
                            document.body.appendChild(t);
                    }
                })(e),
                0 !== e || !i)
            ) {
                if (!m.quit) throw n;
                m.quit(e, n);
            }
        }
        oe.push(/at (?<replaceSection>[^:()]+:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)((?![^)a-fA-F\d])|$)/),
            oe.push(/(?:WASM \[[\da-zA-Z]+\], (?<replaceSection>function #(?<funcNum>[\d]+) \(''\)))/),
            oe.push(/(?<replaceSection>[a-z]+:\/\/[^ )]*:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)/),
            oe.push(/(?<replaceSection><[^ >]+>[.:]wasm-function\[(?<funcNum>[0-9]+)\])/);
        const he = 'function' == typeof globalThis.WeakRef;
        function we(e) {
            return he ? new WeakRef(e) : { deref: () => e };
        }
        const ge = 'function' == typeof globalThis.FinalizationRegistry;
        let ye;
        const be = [],
            ve = [];
        let Ee = 1;
        const Ae = new Map();
        ge &&
            (ye = new globalThis.FinalizationRegistry(function (e) {
                De(null, e);
            }));
        const ke = Symbol.for('wasm js_owned_gc_handle'),
            Se = Symbol.for('wasm cs_owned_js_handle');
        function Oe(e) {
            return 0 !== e && -1 !== e ? be[e] : null;
        }
        function xe(e) {
            if (e[Se]) return e[Se];
            const t = ve.length ? ve.pop() : Ee++;
            return (be[t] = e), Object.isExtensible(e) && (e[Se] = t), t;
        }
        function Ne(e) {
            const t = be[e];
            if (null != t) {
                if (globalThis === t) return;
                void 0 !== t[Se] && (t[Se] = void 0), (be[e] = void 0), ve.push(e);
            }
        }
        function je(e, t) {
            (e[ke] = t), ge && ye.register(e, t, e);
            const r = we(e);
            Ae.set(t, r);
        }
        function De(e, t) {
            e && ((t = e[ke]), (e[ke] = 0), ge && ye.unregister(e)),
                0 !== t && Ae.delete(t) && m.javaScriptExports.release_js_owned_object_by_gc_handle(t);
        }
        function Me(e) {
            const t = e[ke];
            if (0 == t) throw new Error('Assert failed: ObjectDisposedException');
            return t;
        }
        function Re(e) {
            if (!e) return null;
            const t = Ae.get(e);
            return t ? t.deref() : null;
        }
        const Te = Symbol.for('wasm promise_control');
        function Ie(e, t) {
            let r = null;
            const n = new Promise(function (n, o) {
                r = {
                    isDone: !1,
                    promise: null,
                    resolve: (t) => {
                        r.isDone || ((r.isDone = !0), n(t), e && e());
                    },
                    reject: (e) => {
                        r.isDone || ((r.isDone = !0), o(e), t && t());
                    },
                };
            });
            r.promise = n;
            const o = n;
            return (o[Te] = r), { promise: o, promise_control: r };
        }
        function $e(e) {
            return e[Te];
        }
        function Fe(e) {
            if (
                !(function (e) {
                    return void 0 !== e[Te];
                })(e)
            )
                throw new Error('Assert failed: Promise is not controllable');
        }
        const Pe = ('object' == typeof Promise || 'function' == typeof Promise) && 'function' == typeof Promise.resolve;
        function Ce(e) {
            return Promise.resolve(e) === e || (('object' == typeof e || 'function' == typeof e) && 'function' == typeof e.then);
        }
        function Ue(e) {
            const { promise: t, promise_control: r } = Ie();
            return (
                e()
                    .then((e) => r.resolve(e))
                    .catch((e) => r.reject(e)),
                t
            );
        }
        function Be(e) {
            const t = Re(e);
            if (!t) return;
            const r = t.promise;
            if (!r) throw new Error(`Assert failed: Expected Promise for GCHandle ${e}`);
            Fe(r);
            $e(r).reject('OperationCanceledException');
        }
        const ze = [];
        let We,
            Le,
            He = null;
        const Ve = 'undefined' != typeof BigInt && 'undefined' != typeof BigInt64Array;
        function qe() {
            We || ((We = t._malloc(32768)), (Le = We)), ze.push(Le);
        }
        function Je(e, t, r) {
            if (!Number.isSafeInteger(e)) throw new Error(`Assert failed: Value is not an integer: ${e} (${typeof e})`);
            if (!(e >= t && e <= r)) throw new Error(`Assert failed: Overflow: value ${e} is out of ${t} ${r} range`);
        }
        function Ge(e, r) {
            t.HEAP8.fill(0, e, r + e);
        }
        function Ye(e, r) {
            const n = !!r;
            'number' == typeof r && Je(r, 0, 1), (t.HEAP32[e >>> 2] = n ? 1 : 0);
        }
        function Xe(e, r) {
            Je(r, 0, 255), (t.HEAPU8[e] = r);
        }
        function Ze(e, r) {
            Je(r, 0, 65535), (t.HEAPU16[e >>> 1] = r);
        }
        function Ke(e, r) {
            t.HEAPU32[e >>> 2] = r;
        }
        function Qe(e, r) {
            Je(r, 0, 4294967295), (t.HEAPU32[e >>> 2] = r);
        }
        function et(e, r) {
            Je(r, -128, 127), (t.HEAP8[e] = r);
        }
        function tt(e, r) {
            Je(r, -32768, 32767), (t.HEAP16[e >>> 1] = r);
        }
        function rt(e, r) {
            t.HEAP32[e >>> 2] = r;
        }
        function nt(e, r) {
            Je(r, -2147483648, 2147483647), (t.HEAP32[e >>> 2] = r);
        }
        function ot(e) {
            if (0 !== e)
                switch (e) {
                    case 1:
                        throw new Error('value was not an integer');
                    case 2:
                        throw new Error('value out of range');
                    default:
                        throw new Error('unknown internal error');
                }
        }
        function st(e, t) {
            if (!Number.isSafeInteger(t)) throw new Error(`Assert failed: Value is not a safe integer: ${t} (${typeof t})`);
            ot(g.mono_wasm_f64_to_i52(e, t));
        }
        function it(e, t) {
            if (!Number.isSafeInteger(t)) throw new Error(`Assert failed: Value is not a safe integer: ${t} (${typeof t})`);
            if (!(t >= 0)) throw new Error("Assert failed: Can't convert negative Number into UInt64");
            ot(g.mono_wasm_f64_to_u52(e, t));
        }
        function at(e, t) {
            if (!Ve) throw new Error('Assert failed: BigInt is not supported.');
            if ('bigint' != typeof t) throw new Error(`Assert failed: Value is not an bigint: ${t} (${typeof t})`);
            if (!(t >= At && t <= Et)) throw new Error(`Assert failed: Overflow: value ${t} is out of ${At} ${Et} range`);
            He[e >>> 3] = t;
        }
        function ct(e, r) {
            if ('number' != typeof r) throw new Error(`Assert failed: Value is not a Number: ${r} (${typeof r})`);
            t.HEAPF32[e >>> 2] = r;
        }
        function ut(e, r) {
            if ('number' != typeof r) throw new Error(`Assert failed: Value is not a Number: ${r} (${typeof r})`);
            t.HEAPF64[e >>> 3] = r;
        }
        function lt(e) {
            return !!t.HEAP32[e >>> 2];
        }
        function _t(e) {
            return t.HEAPU8[e];
        }
        function ft(e) {
            return t.HEAPU16[e >>> 1];
        }
        function dt(e) {
            return t.HEAPU32[e >>> 2];
        }
        function mt(e) {
            return t.HEAP8[e];
        }
        function pt(e) {
            return t.HEAP16[e >>> 1];
        }
        function ht(e) {
            return t.HEAP32[e >>> 2];
        }
        function wt(e) {
            const t = g.mono_wasm_i52_to_f64(e, m._i52_error_scratch_buffer);
            return ot(ht(m._i52_error_scratch_buffer)), t;
        }
        function gt(e) {
            const t = g.mono_wasm_u52_to_f64(e, m._i52_error_scratch_buffer);
            return ot(ht(m._i52_error_scratch_buffer)), t;
        }
        function yt(e) {
            if (!Ve) throw new Error('Assert failed: BigInt is not supported.');
            return He[e >>> 3];
        }
        function bt(e) {
            return t.HEAPF32[e >>> 2];
        }
        function vt(e) {
            return t.HEAPF64[e >>> 3];
        }
        let Et, At;
        function kt(e) {
            const r = t._malloc(e.length);
            return new Uint8Array(t.HEAPU8.buffer, r, e.length).set(e), r;
        }
        const St = 8192;
        let Ot = null,
            xt = null,
            Nt = 0;
        const jt = [],
            Dt = [];
        function Mt(e, r) {
            if (e <= 0) throw new Error('capacity >= 1');
            const n = 4 * (e |= 0),
                o = t._malloc(n);
            if (o % 4 != 0) throw new Error('Malloc returned an unaligned offset');
            return Ge(o, n), new $t(o, e, !0, r);
        }
        function Rt(e) {
            let t;
            if (!e) throw new Error('address must be a location in the native heap');
            return Dt.length > 0 ? ((t = Dt.pop()), t._set_address(e)) : (t = new Pt(e)), t;
        }
        function Tt(e) {
            let t;
            if (jt.length > 0) t = jt.pop();
            else {
                const e = (function () {
                    if (h(Ot) || !xt) {
                        (Ot = Mt(St, 'js roots')), (xt = new Int32Array(St)), (Nt = St);
                        for (let e = 0; e < St; e++) xt[e] = St - e - 1;
                    }
                    if (Nt < 1) throw new Error('Out of scratch root space');
                    const e = xt[Nt - 1];
                    return Nt--, e;
                })();
                t = new Ft(Ot, e);
            }
            if (void 0 !== e) {
                if ('number' != typeof e) throw new Error('value must be an address in the managed heap');
                t.set(e);
            } else t.set(0);
            return t;
        }
        function It(...e) {
            for (let t = 0; t < e.length; t++) h(e[t]) || e[t].release();
        }
        class $t {
            constructor(e, t, r, n) {
                const o = 4 * t;
                (this.__offset = e),
                    (this.__offset32 = e >>> 2),
                    (this.__count = t),
                    (this.length = t),
                    (this.__handle = g.mono_wasm_register_root(e, o, n || 'noname')),
                    (this.__ownsAllocation = r);
            }
            _throw_index_out_of_range() {
                throw new Error('index out of range');
            }
            _check_in_range(e) {
                (e >= this.__count || e < 0) && this._throw_index_out_of_range();
            }
            get_address(e) {
                return this._check_in_range(e), this.__offset + 4 * e;
            }
            get_address_32(e) {
                return this._check_in_range(e), this.__offset32 + e;
            }
            get(e) {
                this._check_in_range(e);
                const r = this.get_address_32(e);
                return t.HEAPU32[r];
            }
            set(e, t) {
                const r = this.get_address(e);
                return g.mono_wasm_write_managed_pointer_unsafe(r, t), t;
            }
            copy_value_from_address(e, t) {
                const r = this.get_address(e);
                g.mono_wasm_copy_managed_pointer(r, t);
            }
            _unsafe_get(e) {
                return t.HEAPU32[this.__offset32 + e];
            }
            _unsafe_set(e, t) {
                const r = this.__offset + e;
                g.mono_wasm_write_managed_pointer_unsafe(r, t);
            }
            clear() {
                this.__offset && Ge(this.__offset, 4 * this.__count);
            }
            release() {
                this.__offset &&
                    this.__ownsAllocation &&
                    (g.mono_wasm_deregister_root(this.__offset), Ge(this.__offset, 4 * this.__count), t._free(this.__offset)),
                    (this.__handle = this.__offset = this.__count = this.__offset32 = 0);
            }
            toString() {
                return `[root buffer @${this.get_address(0)}, size ${this.__count} ]`;
            }
        }
        class Ft {
            constructor(e, t) {
                (this.__buffer = e), (this.__index = t);
            }
            get_address() {
                return this.__buffer.get_address(this.__index);
            }
            get_address_32() {
                return this.__buffer.get_address_32(this.__index);
            }
            get address() {
                return this.__buffer.get_address(this.__index);
            }
            get() {
                return this.__buffer._unsafe_get(this.__index);
            }
            set(e) {
                const t = this.__buffer.get_address(this.__index);
                return g.mono_wasm_write_managed_pointer_unsafe(t, e), e;
            }
            copy_from(e) {
                const t = e.address,
                    r = this.address;
                g.mono_wasm_copy_managed_pointer(r, t);
            }
            copy_to(e) {
                const t = this.address,
                    r = e.address;
                g.mono_wasm_copy_managed_pointer(r, t);
            }
            copy_from_address(e) {
                const t = this.address;
                g.mono_wasm_copy_managed_pointer(t, e);
            }
            copy_to_address(e) {
                const t = this.address;
                g.mono_wasm_copy_managed_pointer(e, t);
            }
            get value() {
                return this.get();
            }
            set value(e) {
                this.set(e);
            }
            valueOf() {
                throw new Error(
                    'Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate',
                );
            }
            clear() {
                this.set(0);
            }
            release() {
                if (!this.__buffer) throw new Error('No buffer');
                jt.length > 128
                    ? ((function (e) {
                          void 0 !== e && (Ot.set(e, 0), (xt[Nt] = e), Nt++);
                      })(this.__index),
                      (this.__buffer = null),
                      (this.__index = 0))
                    : (this.set(0), jt.push(this));
            }
            toString() {
                return `[root @${this.address}]`;
            }
        }
        class Pt {
            constructor(e) {
                (this.__external_address = 0), (this.__external_address_32 = 0), this._set_address(e);
            }
            _set_address(e) {
                (this.__external_address = e), (this.__external_address_32 = e >>> 2);
            }
            get address() {
                return this.__external_address;
            }
            get_address() {
                return this.__external_address;
            }
            get_address_32() {
                return this.__external_address_32;
            }
            get() {
                return t.HEAPU32[this.__external_address_32];
            }
            set(e) {
                return g.mono_wasm_write_managed_pointer_unsafe(this.__external_address, e), e;
            }
            copy_from(e) {
                const t = e.address,
                    r = this.__external_address;
                g.mono_wasm_copy_managed_pointer(r, t);
            }
            copy_to(e) {
                const t = this.__external_address,
                    r = e.address;
                g.mono_wasm_copy_managed_pointer(r, t);
            }
            copy_from_address(e) {
                const t = this.__external_address;
                g.mono_wasm_copy_managed_pointer(t, e);
            }
            copy_to_address(e) {
                const t = this.__external_address;
                g.mono_wasm_copy_managed_pointer(e, t);
            }
            get value() {
                return this.get();
            }
            set value(e) {
                this.set(e);
            }
            valueOf() {
                throw new Error(
                    'Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate',
                );
            }
            clear() {
                this.set(0);
            }
            release() {
                Dt.length < 128 && Dt.push(this);
            }
            toString() {
                return `[external root @${this.address}]`;
            }
        }
        const Ct = new Map(),
            Ut = new Map(),
            Bt = Symbol.for('wasm bound_cs_function'),
            zt = Symbol.for('wasm bound_js_function'),
            Wt = 16;
        function Lt(e) {
            const r = t.stackAlloc(Wt * e);
            if (!r || r % 8 != 0) throw new Error('Assert failed: Arg alignment');
            er(Ht(r, 0), yr.None);
            return er(Ht(r, 1), yr.None), r;
        }
        function Ht(e, t) {
            if (!e) throw new Error('Assert failed: Null args');
            return e + t * Wt;
        }
        function Vt(e, t) {
            if (!e) throw new Error('Assert failed: Null signatures');
            return e + 32 * t + 8;
        }
        function qt(e) {
            if (!e) throw new Error('Assert failed: Null sig');
            return dt(e);
        }
        function Jt(e) {
            if (!e) throw new Error('Assert failed: Null sig');
            return dt(e + 16);
        }
        function Gt(e) {
            if (!e) throw new Error('Assert failed: Null sig');
            return dt(e + 20);
        }
        function Yt(e) {
            if (!e) throw new Error('Assert failed: Null sig');
            return dt(e + 24);
        }
        function Xt(e) {
            if (!e) throw new Error('Assert failed: Null sig');
            return dt(e + 28);
        }
        function Zt(e) {
            if (!e) throw new Error('Assert failed: Null signatures');
            return ht(e + 4);
        }
        function Kt(e) {
            if (!e) throw new Error('Assert failed: Null signatures');
            return ht(e);
        }
        function Qt(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return dt(e + 12);
        }
        function er(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Qe(e + 12, t);
        }
        function tr(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return dt(e);
        }
        function rr(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            if ('boolean' != typeof t) throw new Error(`Assert failed: Value is not a Boolean: ${t} (${typeof t})`);
            Xe(e, t ? 1 : 0);
        }
        function nr(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Qe(e, t);
        }
        function or(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            ut(e, t.getTime());
        }
        function sr(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            ut(e, t);
        }
        function ir(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return dt(e + 4);
        }
        function ar(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Qe(e + 4, t);
        }
        function cr(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return dt(e + 4);
        }
        function ur(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            Qe(e + 4, t);
        }
        function lr(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return Rt(e);
        }
        function _r(e) {
            if (!e) throw new Error('Assert failed: Null arg');
            return ht(e + 8);
        }
        function fr(e, t) {
            if (!e) throw new Error('Assert failed: Null arg');
            nt(e + 8, t);
        }
        class dr {
            dispose() {
                De(this, 0);
            }
            get isDisposed() {
                return 0 === this[ke];
            }
            toString() {
                return `CsObject(gc_handle: ${this[ke]})`;
            }
        }
        class mr extends Error {
            constructor(e) {
                super(e),
                    (this.superStack = Object.getOwnPropertyDescriptor(this, 'stack')),
                    Object.defineProperty(this, 'stack', { get: this.getManageStack });
            }
            getSuperStack() {
                return this.superStack ? this.superStack.value : super.stack;
            }
            getManageStack() {
                const e = this[ke];
                if (e) {
                    const t = m.javaScriptExports.get_managed_stack_trace(e);
                    if (t) return t + '\n' + this.getSuperStack();
                }
                return this.getSuperStack();
            }
            dispose() {
                De(this, 0);
            }
            get isDisposed() {
                return 0 === this[ke];
            }
        }
        function pr(e) {
            return e == yr.Byte
                ? 1
                : e == yr.Int32
                ? 4
                : e == yr.Int52 || e == yr.Double
                ? 8
                : e == yr.String || e == yr.Object || e == yr.JSObject
                ? Wt
                : -1;
        }
        class hr {
            constructor(e, t, r) {
                (this._pointer = e), (this._length = t), (this._viewType = r);
            }
            _unsafe_create_view() {
                const e =
                    0 == this._viewType
                        ? new Uint8Array(t.HEAPU8.buffer, this._pointer, this._length)
                        : 1 == this._viewType
                        ? new Int32Array(t.HEAP32.buffer, this._pointer, this._length)
                        : 2 == this._viewType
                        ? new Float64Array(t.HEAPF64.buffer, this._pointer, this._length)
                        : null;
                if (!e) throw new Error('NotImplementedException');
                return e;
            }
            set(e, t) {
                if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
                const r = this._unsafe_create_view();
                if (!e || !r || e.constructor !== r.constructor) throw new Error(`Assert failed: Expected ${r.constructor}`);
                r.set(e, t);
            }
            copyTo(e, t) {
                if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
                const r = this._unsafe_create_view();
                if (!e || !r || e.constructor !== r.constructor) throw new Error(`Assert failed: Expected ${r.constructor}`);
                const n = r.subarray(t);
                e.set(n);
            }
            slice(e, t) {
                if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
                return this._unsafe_create_view().slice(e, t);
            }
            get length() {
                if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
                return this._length;
            }
            get byteLength() {
                if (this.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
                return 0 == this._viewType
                    ? this._length
                    : 1 == this._viewType
                    ? this._length << 2
                    : 2 == this._viewType
                    ? this._length << 3
                    : 0;
            }
        }
        class wr extends hr {
            constructor(e, t, r) {
                super(e, t, r), (this.is_disposed = !1);
            }
            dispose() {
                this.is_disposed = !0;
            }
            get isDisposed() {
                return this.is_disposed;
            }
        }
        class gr extends hr {
            constructor(e, t, r) {
                super(e, t, r);
            }
            dispose() {
                De(this, 0);
            }
            get isDisposed() {
                return 0 === this[ke];
            }
        }
        var yr;
        !(function (e) {
            (e[(e.None = 0)] = 'None'),
                (e[(e.Void = 1)] = 'Void'),
                (e[(e.Discard = 2)] = 'Discard'),
                (e[(e.Boolean = 3)] = 'Boolean'),
                (e[(e.Byte = 4)] = 'Byte'),
                (e[(e.Char = 5)] = 'Char'),
                (e[(e.Int16 = 6)] = 'Int16'),
                (e[(e.Int32 = 7)] = 'Int32'),
                (e[(e.Int52 = 8)] = 'Int52'),
                (e[(e.BigInt64 = 9)] = 'BigInt64'),
                (e[(e.Double = 10)] = 'Double'),
                (e[(e.Single = 11)] = 'Single'),
                (e[(e.IntPtr = 12)] = 'IntPtr'),
                (e[(e.JSObject = 13)] = 'JSObject'),
                (e[(e.Object = 14)] = 'Object'),
                (e[(e.String = 15)] = 'String'),
                (e[(e.Exception = 16)] = 'Exception'),
                (e[(e.DateTime = 17)] = 'DateTime'),
                (e[(e.DateTimeOffset = 18)] = 'DateTimeOffset'),
                (e[(e.Nullable = 19)] = 'Nullable'),
                (e[(e.Task = 20)] = 'Task'),
                (e[(e.Array = 21)] = 'Array'),
                (e[(e.ArraySegment = 22)] = 'ArraySegment'),
                (e[(e.Span = 23)] = 'Span'),
                (e[(e.Action = 24)] = 'Action'),
                (e[(e.Function = 25)] = 'Function'),
                (e[(e.JSException = 26)] = 'JSException');
        })(yr || (yr = {}));
        const br = new Map(),
            vr = new Map();
        let Er = 0,
            Ar = null,
            kr = 0;
        const Sr = new (class {
                init_fields() {
                    this.mono_wasm_string_decoder_buffer ||
                        ((this.mono_text_decoder = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : null),
                        (this.mono_wasm_string_root = Tt()),
                        (this.mono_wasm_string_decoder_buffer = t._malloc(12)));
                }
                copy(e) {
                    if ((this.init_fields(), 0 === e)) return null;
                    this.mono_wasm_string_root.value = e;
                    const t = this.copy_root(this.mono_wasm_string_root);
                    return (this.mono_wasm_string_root.value = 0), t;
                }
                copy_root(e) {
                    if ((this.init_fields(), 0 === e.value)) return null;
                    const t = this.mono_wasm_string_decoder_buffer + 0,
                        r = this.mono_wasm_string_decoder_buffer + 4,
                        n = this.mono_wasm_string_decoder_buffer + 8;
                    let o;
                    g.mono_wasm_string_get_data_ref(e.address, t, r, n);
                    const s = ht(r),
                        i = dt(t),
                        a = ht(n);
                    if (
                        (a && (o = br.get(e.value)),
                        void 0 === o && (s && i ? ((o = this.decode(i, i + s)), a && br.set(e.value, o)) : (o = Or)),
                        void 0 === o)
                    )
                        throw new Error(`internal error when decoding string at location ${e.value}`);
                    return o;
                }
                decode(e, r) {
                    let n = '';
                    if (this.mono_text_decoder) {
                        const o =
                            'undefined' != typeof SharedArrayBuffer && t.HEAPU8.buffer instanceof SharedArrayBuffer
                                ? t.HEAPU8.slice(e, r)
                                : t.HEAPU8.subarray(e, r);
                        n = this.mono_text_decoder.decode(o);
                    } else
                        for (let o = 0; o < r - e; o += 2) {
                            const r = t.getValue(e + o, 'i16');
                            n += String.fromCharCode(r);
                        }
                    return n;
                }
            })(),
            Or = '';
        function xr(e) {
            return Sr.copy(e);
        }
        function Nr(e) {
            return Sr.copy_root(e);
        }
        function jr(e) {
            if (0 === e.length) return Or;
            const t = (function (e) {
                    const t = Tt();
                    try {
                        return Dr(e, t), t.value;
                    } finally {
                        t.release();
                    }
                })(e),
                r = br.get(t);
            if (h(r))
                throw new Error(
                    'internal error: interned_string_table did not contain string after js_string_to_mono_string_interned',
                );
            return r;
        }
        function Dr(e, t) {
            let r;
            if (
                ('symbol' == typeof e
                    ? ((r = e.description),
                      'string' != typeof r && (r = Symbol.keyFor(e)),
                      'string' != typeof r && (r = '<unknown Symbol>'))
                    : 'string' == typeof e && (r = e),
                'string' != typeof r)
            )
                throw new Error(`Argument to js_string_to_mono_string_interned must be a string but was ${e}`);
            if (0 === r.length && Er) return void t.set(Er);
            const n = vr.get(r);
            n
                ? t.set(n)
                : (Rr(r, t),
                  (function (e, t, r) {
                      if (!t.value) throw new Error('null pointer passed to _store_string_in_intern_table');
                      kr >= 8192 && (Ar = null), Ar || ((Ar = Mt(8192, 'interned strings')), (kr = 0));
                      const n = Ar,
                          o = kr++;
                      if (r && (g.mono_wasm_intern_string_ref(t.address), !t.value))
                          throw new Error('mono_wasm_intern_string_ref produced a null pointer');
                      vr.set(e, t.value),
                          br.set(t.value, e),
                          0 !== e.length || Er || (Er = t.value),
                          n.copy_value_from_address(o, t.address);
                  })(r, t, !0));
        }
        function Mr(e, t) {
            if ((t.clear(), null !== e))
                if ('symbol' == typeof e) Dr(e, t);
                else {
                    if ('string' != typeof e) throw new Error('Expected string argument, got ' + typeof e);
                    if (0 === e.length) Dr(e, t);
                    else {
                        if (e.length <= 256) {
                            const r = vr.get(e);
                            if (r) return void t.set(r);
                        }
                        Rr(e, t);
                    }
                }
        }
        function Rr(e, r) {
            const n = t._malloc(2 * (e.length + 1)),
                o = (n >>> 1) | 0;
            for (let r = 0; r < e.length; r++) t.HEAP16[o + r] = e.charCodeAt(r);
            (t.HEAP16[o + e.length] = 0), g.mono_wasm_string_from_utf16_ref(n, e.length, r.address), t._free(n);
        }
        function Tr(e) {
            const t = Tt();
            try {
                return Mr(e, t), t.value;
            } finally {
                t.release();
            }
        }
        function Ir(e, t, r, n, o, s) {
            let i = '',
                a = '',
                c = '';
            const u = 'converter' + t;
            let l = 'null',
                _ = 'null',
                f = 'null',
                d = 'null',
                m = qt(e);
            if (m === yr.None || m === yr.Void) return { converters: i, call_body: c, marshaler_type: m };
            const p = Jt(e);
            if (p !== yr.None) {
                const e = Ut.get(p);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${p} at ${t}`);
                m != yr.Nullable ? ((d = 'converter' + t + '_res'), (i += ', ' + d), (a += ' ' + yr[p]), (s[d] = e)) : (m = p);
            }
            const h = Gt(e);
            if (h !== yr.None) {
                const e = Ct.get(h);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${h} at ${t}`);
                (l = 'converter' + t + '_arg1'), (i += ', ' + l), (a += ' ' + yr[h]), (s[l] = e);
            }
            const w = Yt(e);
            if (w !== yr.None) {
                const e = Ct.get(w);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${w} at ${t}`);
                (_ = 'converter' + t + '_arg2'), (i += ', ' + _), (a += ' ' + yr[w]), (s[_] = e);
            }
            const g = Xt(e);
            if (g !== yr.None) {
                const e = Ct.get(g);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${g} at ${t}`);
                (f = 'converter' + t + '_arg3'), (i += ', ' + f), (a += ' ' + yr[g]), (s[f] = e);
            }
            const y = Ut.get(m),
                b = yr[m];
            if (!y || 'function' != typeof y) throw new Error(`Assert failed: Unknow converter for type ${b} (${m}) at ${t} `);
            return (
                (i += ', ' + u),
                (a += ' ' + b),
                (s[u] = y),
                (c =
                    m == yr.Task
                        ? `  ${u}(args + ${r}, ${o}, signature + ${n}, ${d}); // ${a} \n`
                        : m == yr.Action || m == yr.Function
                        ? `  ${u}(args + ${r}, ${o}, signature + ${n}, ${d}, ${l}, ${_}, ${_}); // ${a} \n`
                        : `  ${u}(args + ${r}, ${o}, signature + ${n}); // ${a} \n`),
                { converters: i, call_body: c, marshaler_type: m }
            );
        }
        function $r(e, t) {
            null == t ? er(e, yr.None) : (er(e, yr.Boolean), rr(e, t));
        }
        function Fr(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Byte),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      Xe(e, t);
                  })(e, t));
        }
        function Pr(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Char),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      Ze(e, t);
                  })(e, t));
        }
        function Cr(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Int16),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      tt(e, t);
                  })(e, t));
        }
        function Ur(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Int32),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      nt(e, t);
                  })(e, t));
        }
        function Br(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Int52),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      if (!Number.isSafeInteger(t)) throw new Error(`Assert failed: Value is not an integer: ${t} (${typeof t})`);
                      ut(e, t);
                  })(e, t));
        }
        function zr(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.BigInt64),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      at(e, t);
                  })(e, t));
        }
        function Wr(e, t) {
            null == t ? er(e, yr.None) : (er(e, yr.Double), sr(e, t));
        }
        function Lr(e, t) {
            null == t
                ? er(e, yr.None)
                : (er(e, yr.Single),
                  (function (e, t) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      ct(e, t);
                  })(e, t));
        }
        function Hr(e, t) {
            null == t ? er(e, yr.None) : (er(e, yr.IntPtr), nr(e, t));
        }
        function Vr(e, t) {
            if (null == t) er(e, yr.None);
            else {
                if (!(t instanceof Date)) throw new Error('Assert failed: Value is not a Date');
                er(e, yr.DateTime), or(e, t);
            }
        }
        function qr(e, t) {
            if (null == t) er(e, yr.None);
            else {
                if (!(t instanceof Date)) throw new Error('Assert failed: Value is not a Date');
                er(e, yr.DateTimeOffset), or(e, t);
            }
        }
        function Jr(e, t) {
            if (null == t) er(e, yr.None);
            else {
                if ((er(e, yr.String), 'string' != typeof t)) throw new Error('Assert failed: Value is not a String');
                Gr(e, t);
            }
        }
        function Gr(e, t) {
            const r = lr(e);
            try {
                Mr(t, r);
            } finally {
                r.release();
            }
        }
        function Yr(e) {
            er(e, yr.None);
        }
        function Xr(e, t, r, n, o, s, i) {
            if (null == t) return void er(e, yr.None);
            if (!(t && t instanceof Function)) throw new Error('Assert failed: Value is not a Function');
            const a = (e) => {
                const r = Ht(e, 0),
                    a = Ht(e, 1),
                    c = Ht(e, 2),
                    u = Ht(e, 3),
                    l = Ht(e, 4);
                try {
                    let e, r, _;
                    o && (e = o(c)), s && (r = s(u)), i && (_ = i(l));
                    const f = t(e, r, _);
                    n && n(a, f);
                } catch (e) {
                    Qr(r, e);
                }
            };
            a[zt] = !0;
            ar(e, xe(a)), er(e, yr.Function);
        }
        class Zr {
            constructor(e) {
                this.promise = e;
            }
            dispose() {
                De(this, 0);
            }
            get isDisposed() {
                return 0 === this[ke];
            }
        }
        function Kr(e, t, r, n) {
            if (null == t) return void er(e, yr.None);
            if (!Ce(t)) throw new Error('Assert failed: Value is not a Promise');
            const o = m.javaScriptExports.create_task_callback();
            ur(e, o), er(e, yr.Task);
            const s = new Zr(t);
            je(s, o),
                t
                    .then((e) => {
                        m.javaScriptExports.complete_task(o, null, e, n || tn), De(s, o);
                    })
                    .catch((e) => {
                        m.javaScriptExports.complete_task(o, e, null, void 0), De(s, o);
                    });
        }
        function Qr(e, t) {
            if (null == t) er(e, yr.None);
            else if (t instanceof mr) {
                er(e, yr.Exception);
                ur(e, Me(t));
            } else {
                if ('object' != typeof t && 'string' != typeof t)
                    throw new Error('Assert failed: Value is not an Error ' + typeof t);
                er(e, yr.JSException);
                Gr(e, t.toString());
                const r = t[Se];
                if (r) ar(e, r);
                else {
                    ar(e, xe(t));
                }
            }
        }
        function en(e, t) {
            if (null == t) er(e, yr.None);
            else {
                if (void 0 !== t[ke]) throw new Error('Assert failed: JSObject proxy of ManagedObject proxy is not supported');
                if ('function' != typeof t && 'object' != typeof t)
                    throw new Error(`Assert failed: JSObject proxy of ${typeof t} is not supported`);
                er(e, yr.JSObject);
                ar(e, xe(t));
            }
        }
        function tn(e, t) {
            if (null == t) er(e, yr.None);
            else {
                const r = t[ke],
                    n = typeof t;
                if (void 0 === r)
                    if ('string' === n || 'symbol' === n) er(e, yr.String), Gr(e, t);
                    else if ('number' === n) er(e, yr.Double), sr(e, t);
                    else {
                        if ('bigint' === n) throw new Error('NotImplementedException: bigint');
                        if ('boolean' === n) er(e, yr.Boolean), rr(e, t);
                        else if (t instanceof Date) er(e, yr.DateTime), or(e, t);
                        else if (t instanceof Error) Qr(e, t);
                        else if (t instanceof Uint8Array) nn(e, t, yr.Byte);
                        else if (t instanceof Float64Array) nn(e, t, yr.Double);
                        else if (t instanceof Int32Array) nn(e, t, yr.Int32);
                        else if (Array.isArray(t)) nn(e, t, yr.Object);
                        else {
                            if (
                                t instanceof Int16Array ||
                                t instanceof Int8Array ||
                                t instanceof Uint8ClampedArray ||
                                t instanceof Uint16Array ||
                                t instanceof Uint32Array ||
                                t instanceof Float32Array
                            )
                                throw new Error('NotImplementedException: TypedArray');
                            if (Ce(t)) Kr(e, t);
                            else {
                                if (t instanceof wr) throw new Error('NotImplementedException: Span');
                                if ('object' != n) throw new Error(`JSObject proxy is not supported for ${n} ${t}`);
                                {
                                    const r = xe(t);
                                    er(e, yr.JSObject), ar(e, r);
                                }
                            }
                        }
                    }
                else {
                    if ((Me(t), t instanceof gr)) throw new Error('NotImplementedException: ArraySegment');
                    if (t instanceof mr) er(e, yr.Exception), ur(e, r);
                    else {
                        if (!(t instanceof dr)) throw new Error('NotImplementedException ' + n);
                        er(e, yr.Object), ur(e, r);
                    }
                }
            }
        }
        function rn(e, t, r) {
            if (!r) throw new Error('Assert failed: Expected valid sig parameter');
            nn(e, t, Gt(r));
        }
        function nn(e, r, n) {
            if (null == r) er(e, yr.None);
            else {
                const o = pr(n);
                if (-1 == o) throw new Error(`Assert failed: Element type ${yr[n]} not supported`);
                const s = r.length,
                    i = o * s,
                    a = t._malloc(i);
                if (n == yr.String) {
                    if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
                    Ge(a, i), g.mono_wasm_register_root(a, i, 'marshal_array_to_cs');
                    for (let e = 0; e < s; e++) {
                        Jr(Ht(a, e), r[e]);
                    }
                } else if (n == yr.Object) {
                    if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
                    Ge(a, i), g.mono_wasm_register_root(a, i, 'marshal_array_to_cs');
                    for (let e = 0; e < s; e++) {
                        tn(Ht(a, e), r[e]);
                    }
                } else if (n == yr.JSObject) {
                    if (!Array.isArray(r)) throw new Error('Assert failed: Value is not an Array');
                    Ge(a, i);
                    for (let e = 0; e < s; e++) {
                        en(Ht(a, e), r[e]);
                    }
                } else if (n == yr.Byte) {
                    if (!(Array.isArray(r) || r instanceof Uint8Array))
                        throw new Error('Assert failed: Value is not an Array or Uint8Array');
                    t.HEAPU8.subarray(a, a + s).set(r);
                } else if (n == yr.Int32) {
                    if (!(Array.isArray(r) || r instanceof Int32Array))
                        throw new Error('Assert failed: Value is not an Array or Int32Array');
                    t.HEAP32.subarray(a >> 2, (a >> 2) + s).set(r);
                } else {
                    if (n != yr.Double) throw new Error('not implemented');
                    if (!(Array.isArray(r) || r instanceof Float64Array))
                        throw new Error('Assert failed: Value is not an Array or Float64Array');
                    t.HEAPF64.subarray(a >> 3, (a >> 3) + s).set(r);
                }
                nr(e, a),
                    er(e, yr.Array),
                    (function (e, t) {
                        if (!e) throw new Error('Assert failed: Null arg');
                        Qe(e + 4, t);
                    })(e, n),
                    fr(e, r.length);
            }
        }
        function on(e, t, r) {
            if (!r) throw new Error('Assert failed: Expected valid sig parameter');
            if (t.isDisposed) throw new Error('Assert failed: ObjectDisposedException');
            an(r, t._viewType), er(e, yr.Span), nr(e, t._pointer), fr(e, t.length);
        }
        function sn(e, t, r) {
            if (!r) throw new Error('Assert failed: Expected valid sig parameter');
            const n = Me(t);
            if (!n) throw new Error('Assert failed: Only roundtrip of ArraySegment instance created by C#');
            an(r, t._viewType), er(e, yr.ArraySegment), nr(e, t._pointer), fr(e, t.length), ur(e, n);
        }
        function an(e, t) {
            const r = Gt(e);
            if (r == yr.Byte) {
                if (0 != t) throw new Error('Assert failed: Expected MemoryViewType.Byte');
            } else if (r == yr.Int32) {
                if (1 != t) throw new Error('Assert failed: Expected MemoryViewType.Int32');
            } else {
                if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
                if (2 != t) throw new Error('Assert failed: Expected MemoryViewType.Double');
            }
        }
        function cn(e, t, r, n, o, s) {
            let i = '',
                a = '',
                c = '';
            const u = 'converter' + t;
            let l = 'null',
                _ = 'null',
                f = 'null',
                d = 'null',
                m = qt(e);
            if (m === yr.None || m === yr.Void) return { converters: i, call_body: c, marshaler_type: m };
            const p = Jt(e);
            if (p !== yr.None) {
                const e = Ct.get(p);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${p} at ${t}`);
                m != yr.Nullable ? ((d = 'converter' + t + '_res'), (i += ', ' + d), (a += ' ' + yr[p]), (s[d] = e)) : (m = p);
            }
            const h = Gt(e);
            if (h !== yr.None) {
                const e = Ut.get(h);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${h} at ${t}`);
                (l = 'converter' + t + '_arg1'), (i += ', ' + l), (a += ' ' + yr[h]), (s[l] = e);
            }
            const w = Yt(e);
            if (w !== yr.None) {
                const e = Ut.get(w);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${w} at ${t}`);
                (_ = 'converter' + t + '_arg2'), (i += ', ' + _), (a += ' ' + yr[w]), (s[_] = e);
            }
            const g = Xt(e);
            if (g !== yr.None) {
                const e = Ut.get(g);
                if (!e || 'function' != typeof e) throw new Error(`Assert failed: Unknow converter for type ${g} at ${t}`);
                (f = 'converter' + t + '_arg3'), (i += ', ' + f), (a += ' ' + yr[g]), (s[f] = e);
            }
            const y = Ct.get(m);
            if (!y || 'function' != typeof y) throw new Error(`Assert failed: Unknow converter for type ${m} at ${t} `);
            return (
                (i += ', ' + u),
                (a += ' ' + yr[m]),
                (s[u] = y),
                (c =
                    m == yr.Task
                        ? `  const ${o} = ${u}(args + ${r}, signature + ${n}, ${d}); // ${a} \n`
                        : m == yr.Action || m == yr.Function
                        ? `  const ${o} = ${u}(args + ${r}, signature + ${n}, ${d}, ${l}, ${_}, ${f}); // ${a} \n`
                        : `  const ${o} = ${u}(args + ${r}, signature + ${n}); // ${a} \n`),
                { converters: i, call_body: c, marshaler_type: m }
            );
        }
        function un(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return !!_t(e);
                  })(e);
        }
        function ln(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return _t(e);
                  })(e);
        }
        function _n(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return ft(e);
                  })(e);
        }
        function fn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return pt(e);
                  })(e);
        }
        function dn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return ht(e);
                  })(e);
        }
        function mn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return vt(e);
                  })(e);
        }
        function pn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return yt(e);
                  })(e);
        }
        function hn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return bt(e);
                  })(e);
        }
        function wn(e) {
            return Qt(e) == yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      return vt(e);
                  })(e);
        }
        function gn(e) {
            return Qt(e) == yr.None ? null : tr(e);
        }
        function yn() {
            return null;
        }
        function bn(e) {
            return Qt(e) === yr.None
                ? null
                : (function (e) {
                      if (!e) throw new Error('Assert failed: Null arg');
                      const t = vt(e);
                      return new Date(t);
                  })(e);
        }
        function vn(e, t, r, n, o, s) {
            if (Qt(e) === yr.None) return null;
            const i = cr(e);
            let a = Re(i);
            return null != a || ((a = (e, t, a) => m.javaScriptExports.call_delegate(i, e, t, a, r, n, o, s)), je(a, i)), a;
        }
        function En(e, t, r) {
            const n = Qt(e);
            if (n === yr.None) return null;
            if (n !== yr.Task) {
                if ((r || (r = Ct.get(n)), !r)) throw new Error(`Assert failed: Unknow sub_converter for type ${yr[n]} `);
                const t = r(e);
                return new Promise((e) => e(t));
            }
            const o = ir(e);
            if (0 == o) return new Promise((e) => e(void 0));
            const s = Oe(o);
            if (!s) throw new Error(`Assert failed: ERR28: promise not found for js_handle: ${o} `);
            Fe(s);
            const i = $e(s),
                a = i.resolve;
            return (
                (i.resolve = (e) => {
                    const t = Qt(e);
                    if (t === yr.None) return void a(null);
                    if ((r || (r = Ct.get(t)), !r)) throw new Error(`Assert failed: Unknow sub_converter for type ${yr[t]}`);
                    const n = r(e);
                    a(n);
                }),
                s
            );
        }
        function An(e) {
            const t = Ht(e, 0),
                r = Ht(e, 1),
                n = Ht(e, 2),
                o = Ht(e, 3),
                s = Qt(t),
                i = Qt(o),
                a = ir(n);
            if (0 === a) {
                const { promise: e, promise_control: n } = Ie();
                if ((ar(r, xe(e)), s !== yr.None)) {
                    const e = Sn(t);
                    n.reject(e);
                } else if (i !== yr.Task) {
                    const e = Ct.get(i);
                    if (!e) throw new Error(`Assert failed: Unknow sub_converter for type ${yr[i]} `);
                    const t = e(o);
                    n.resolve(t);
                }
            } else {
                const e = Oe(a);
                if (!e) throw new Error(`Assert failed: ERR25: promise not found for js_handle: ${a} `);
                Fe(e);
                const r = $e(e);
                if (s !== yr.None) {
                    const e = Sn(t);
                    r.reject(e);
                } else i !== yr.Task && r.resolve(o);
            }
            er(r, yr.Task), er(t, yr.None);
        }
        function kn(e) {
            if (Qt(e) == yr.None) return null;
            const t = lr(e);
            try {
                return Nr(t);
            } finally {
                t.release();
            }
        }
        function Sn(e) {
            const t = Qt(e);
            if (t == yr.None) return null;
            if (t == yr.JSException) {
                return Oe(ir(e));
            }
            const r = cr(e);
            let n = Re(r);
            if (null == n) {
                const t = kn(e);
                (n = new mr(t)), je(n, r);
            }
            return n;
        }
        function On(e) {
            if (Qt(e) == yr.None) return null;
            return Oe(ir(e));
        }
        function xn(e) {
            const t = Qt(e);
            if (t == yr.None) return null;
            if (t == yr.JSObject) {
                return Oe(ir(e));
            }
            if (t == yr.Array) {
                return jn(
                    e,
                    (function (e) {
                        if (!e) throw new Error('Assert failed: Null arg');
                        return dt(e + 4);
                    })(e),
                );
            }
            if (t == yr.Object) {
                const t = cr(e);
                if (0 === t) return null;
                let r = Re(t);
                return r || ((r = new dr()), je(r, t)), r;
            }
            const r = Ct.get(t);
            if (!r) throw new Error(`Assert failed: Unknow converter for type ${yr[t]}`);
            return r(e);
        }
        function Nn(e, t) {
            if (!t) throw new Error('Assert failed: Expected valid sig parameter');
            return jn(e, Gt(t));
        }
        function jn(e, r) {
            if (Qt(e) == yr.None) return null;
            if (-1 == pr(r)) throw new Error(`Assert failed: Element type ${yr[r]} not supported`);
            const n = tr(e),
                o = _r(e);
            let s = null;
            if (r == yr.String) {
                s = new Array(o);
                for (let e = 0; e < o; e++) {
                    const t = Ht(n, e);
                    s[e] = kn(t);
                }
                g.mono_wasm_deregister_root(n);
            } else if (r == yr.Object) {
                s = new Array(o);
                for (let e = 0; e < o; e++) {
                    const t = Ht(n, e);
                    s[e] = xn(t);
                }
                g.mono_wasm_deregister_root(n);
            } else if (r == yr.JSObject) {
                s = new Array(o);
                for (let e = 0; e < o; e++) {
                    const t = Ht(n, e);
                    s[e] = On(t);
                }
            } else if (r == yr.Byte) {
                s = t.HEAPU8.subarray(n, n + o).slice();
            } else if (r == yr.Int32) {
                s = t.HEAP32.subarray(n >> 2, (n >> 2) + o).slice();
            } else {
                if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
                s = t.HEAPF64.subarray(n >> 3, (n >> 3) + o).slice();
            }
            return t._free(n), s;
        }
        function Dn(e, t) {
            if (!t) throw new Error('Assert failed: Expected valid sig parameter');
            const r = Gt(t),
                n = tr(e),
                o = _r(e);
            let s = null;
            if (r == yr.Byte) s = new wr(n, o, 0);
            else if (r == yr.Int32) s = new wr(n, o, 1);
            else {
                if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
                s = new wr(n, o, 2);
            }
            return s;
        }
        function Mn(e, t) {
            if (!t) throw new Error('Assert failed: Expected valid sig parameter');
            const r = Gt(t),
                n = tr(e),
                o = _r(e);
            let s = null;
            if (r == yr.Byte) s = new gr(n, o, 0);
            else if (r == yr.Int32) s = new gr(n, o, 1);
            else {
                if (r != yr.Double) throw new Error(`NotImplementedException ${yr[r]} `);
                s = new gr(n, o, 2);
            }
            return je(s, cr(e)), s;
        }
        let Rn, Tn;
        const In = {};
        const $n = Symbol.for('wasm type');
        const Fn = Ie(),
            Pn = Ie();
        let Cn = 0,
            Un = 0,
            Bn = 0,
            zn = 0;
        const Wn = [],
            Ln = Object.create(null);
        let Hn,
            Vn = 0;
        const qn = { 'js-module-threads': !0 },
            Jn = { dotnetwasm: !0 },
            Gn = { 'js-module-threads': !0, dotnetwasm: !0 };
        async function Yn() {
            m.diagnosticTracing && console.debug('MONO_WASM: mono_download_assets'),
                (m.maxParallelDownloads = m.config.maxParallelDownloads || m.maxParallelDownloads);
            try {
                const e = [];
                for (const t of m.config.assets) {
                    const r = t;
                    if ((Gn[r.behavior] || zn++, !qn[r.behavior])) {
                        const t = Jn[r.behavior];
                        if ((Bn++, r.pendingDownload)) {
                            r.pendingDownloadInternal = r.pendingDownload;
                            const n = async () => {
                                const e = await r.pendingDownloadInternal.response;
                                return t || (r.buffer = await e.arrayBuffer()), ++Cn, { asset: r, buffer: r.buffer };
                            };
                            e.push(n());
                        } else {
                            const n = async () => ((r.buffer = await Xn(r, !t)), { asset: r, buffer: r.buffer });
                            e.push(n());
                        }
                    }
                }
                Pn.promise_control.resolve();
                const r = [];
                for (const t of e)
                    r.push(
                        (async () => {
                            const e = await t,
                                r = e.asset;
                            if (e.buffer) {
                                if (!Gn[r.behavior]) {
                                    const t = r.pendingDownloadInternal.url,
                                        n = new Uint8Array(r.buffer);
                                    (r.pendingDownloadInternal = null),
                                        (r.pendingDownload = null),
                                        (r.buffer = null),
                                        (e.buffer = null),
                                        await ki.promise,
                                        eo(r, t, n);
                                }
                            } else {
                                if (Jn[r.behavior]) Jn[r.behavior] && ++Cn;
                                else {
                                    if (!r.isOptional)
                                        throw new Error('Assert failed: Expected asset to have the downloaded buffer');
                                    qn[r.behavior] || Bn--, Gn[r.behavior] || zn--;
                                }
                            }
                        })(),
                    );
                Promise.all(r)
                    .then(() => {
                        Fn.promise_control.resolve();
                    })
                    .catch((e) => {
                        t.printErr('MONO_WASM: Error in mono_download_assets: ' + e), Mi(e, !0);
                    });
            } catch (e) {
                throw (t.printErr('MONO_WASM: Error in mono_download_assets: ' + e), e);
            }
        }
        async function Xn(e, t) {
            try {
                return await Zn(e, t);
            } catch (r) {
                if (s || o) throw r;
                if (e.pendingDownload && e.pendingDownloadInternal == e.pendingDownload) throw r;
                if (e.resolvedUrl && -1 != e.resolvedUrl.indexOf('file://')) throw r;
                if (r && 404 == r.status) throw r;
                (e.pendingDownloadInternal = void 0), await Pn.promise;
                try {
                    return await Zn(e, t);
                } catch (r) {
                    return (
                        (e.pendingDownloadInternal = void 0),
                        await (function (e) {
                            return new Promise((t) => setTimeout(t, e));
                        })(100),
                        await Zn(e, t)
                    );
                }
            }
        }
        async function Zn(e, r) {
            for (; Hn; ) await Hn.promise;
            try {
                ++Vn,
                    Vn == m.maxParallelDownloads &&
                        (m.diagnosticTracing && console.debug('MONO_WASM: Throttling further parallel downloads'), (Hn = Ie()));
                const n = await (async function (e) {
                    if (e.buffer) {
                        const t = e.buffer;
                        return (
                            (e.buffer = null),
                            (e.pendingDownloadInternal = {
                                url: 'undefined://' + e.name,
                                name: e.name,
                                response: Promise.resolve({ arrayBuffer: () => t, headers: { get: () => {} } }),
                            }),
                            e.pendingDownloadInternal.response
                        );
                    }
                    if (e.pendingDownloadInternal && e.pendingDownloadInternal.response) {
                        return await e.pendingDownloadInternal.response;
                    }
                    const r = e.loadRemote && m.config.remoteSources ? m.config.remoteSources : [''];
                    let n;
                    for (let t of r) {
                        (t = t.trim()), './' === t && (t = '');
                        const r = Kn(e, t);
                        e.name === r
                            ? m.diagnosticTracing && console.debug(`MONO_WASM: Attempting to download '${r}'`)
                            : m.diagnosticTracing && console.debug(`MONO_WASM: Attempting to download '${r}' for ${e.name}`);
                        try {
                            const t = Qn({ name: e.name, resolvedUrl: r, hash: e.hash, behavior: e.behavior });
                            if (((e.pendingDownloadInternal = t), (n = await t.response), !n.ok)) continue;
                            return n;
                        } catch (e) {
                            continue;
                        }
                    }
                    const o = e.isOptional || (e.name.match(/\.pdb$/) && m.config.ignorePdbLoadErrors);
                    if (!n) throw new Error(`Assert failed: Response undefined ${e.name}`);
                    if (o)
                        return void t.print(
                            `MONO_WASM: optional download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`,
                        );
                    {
                        const t = new Error(`MONO_WASM: download '${n.url}' for ${e.name} failed ${n.status} ${n.statusText}`);
                        throw ((t.status = n.status), t);
                    }
                })(e);
                if (!r || !n) return;
                const o = await n.arrayBuffer();
                return ++Cn, o;
            } finally {
                if ((--Vn, Hn && Vn == m.maxParallelDownloads - 1)) {
                    m.diagnosticTracing && console.debug('MONO_WASM: Resuming more parallel downloads');
                    const e = Hn;
                    (Hn = void 0), e.promise_control.resolve();
                }
            }
        }
        function Kn(e, t) {
            if (null == t) throw new Error(`Assert failed: sourcePrefix must be provided for ${e.name}`);
            let r;
            const n = m.config.assemblyRootFolder;
            if (e.resolvedUrl) r = e.resolvedUrl;
            else {
                if ('' === t)
                    if ('assembly' === e.behavior || 'pdb' === e.behavior) r = n ? n + '/' + e.name : e.name;
                    else if ('resource' === e.behavior) {
                        const t = e.culture && '' !== e.culture ? `${e.culture}/${e.name}` : e.name;
                        r = n ? n + '/' + t : t;
                    } else r = e.name;
                else r = t + e.name;
                r = m.locateFile(r);
            }
            if (!r || 'string' != typeof r) throw new Error('Assert failed: attemptUrl need to be path or url string');
            return r;
        }
        function Qn(e) {
            try {
                if ('function' == typeof t.downloadResource) {
                    const r = t.downloadResource(e);
                    if (r) return r;
                }
                const r = {};
                e.hash && (r.integrity = e.hash);
                const n = m.fetch_like(e.resolvedUrl, r);
                return { name: e.name, url: e.resolvedUrl, response: n };
            } catch (t) {
                const r = {
                    ok: !1,
                    url: e.resolvedUrl,
                    status: 500,
                    statusText: 'ERR29: ' + t,
                    arrayBuffer: () => {
                        throw t;
                    },
                    json: () => {
                        throw t;
                    },
                };
                return { name: e.name, url: e.resolvedUrl, response: Promise.resolve(r) };
            }
        }
        function eo(e, r, n) {
            m.diagnosticTracing && console.debug(`MONO_WASM: Loaded:${e.name} as ${e.behavior} size ${n.length} from ${r}`);
            const o = 'string' == typeof e.virtualPath ? e.virtualPath : e.name;
            let s = null;
            switch (e.behavior) {
                case 'dotnetwasm':
                case 'js-module-threads':
                    break;
                case 'resource':
                case 'assembly':
                case 'pdb':
                    Wn.push({ url: r, file: o });
                case 'heap':
                case 'icu':
                    (s = kt(n)), (Ln[o] = [s, n.length]);
                    break;
                case 'vfs': {
                    const e = o.lastIndexOf('/');
                    let r = e > 0 ? o.substr(0, e) : null,
                        s = e > 0 ? o.substr(e + 1) : o;
                    s.startsWith('/') && (s = s.substr(1)),
                        r
                            ? (m.diagnosticTracing && console.debug(`MONO_WASM: Creating directory '${r}'`),
                              t.FS_createPath('/', r, !0, !0))
                            : (r = '/'),
                        m.diagnosticTracing && console.debug(`MONO_WASM: Creating file '${s}' in directory '${r}'`),
                        to(n, r) || t.FS_createDataFile(r, s, n, !0, !0, !0);
                    break;
                }
                default:
                    throw new Error(`Unrecognized asset behavior:${e.behavior}, for asset ${e.name}`);
            }
            if ('assembly' === e.behavior) {
                if (!g.mono_wasm_add_assembly(o, s, n.length)) {
                    const e = Wn.findIndex((e) => e.file == o);
                    Wn.splice(e, 1);
                }
            } else
                'icu' === e.behavior
                    ? J(s) || t.printErr(`MONO_WASM: Error loading ICU asset ${e.name}`)
                    : 'resource' === e.behavior && g.mono_wasm_add_satellite_assembly(o, e.culture || '', s, n.length);
            ++Un;
        }
        function to(e, r) {
            if (e.length < 8) return !1;
            const n = new DataView(e.buffer);
            if (1651270004 != n.getUint32(0, !0)) return !1;
            const o = n.getUint32(4, !0);
            if (0 == o || e.length < o + 8) return !1;
            let s;
            try {
                const r = t.UTF8ArrayToString(e, 8, o);
                if (((s = JSON.parse(r)), !(s instanceof Array))) return !1;
            } catch (e) {
                return !1;
            }
            e = e.slice(o + 8);
            const i = new Set();
            s.filter((e) => {
                const t = e[0],
                    r = t.lastIndexOf('/'),
                    n = t.slice(0, r + 1);
                i.add(n);
            }),
                i.forEach((e) => {
                    t.FS_createPath(r, e, !0, !0);
                });
            for (const n of s) {
                const o = n[0],
                    s = n[1],
                    i = e.slice(0, s);
                t.FS_createDataFile(r, o, i, !0, !0), (e = e.slice(s));
            }
            return !0;
        }
        async function ro() {
            if ((await Fn.promise, m.config.assets)) {
                if (Cn != Bn) throw new Error(`Assert failed: Expected ${Bn} assets to be downloaded, but only finished ${Cn}`);
                if (Un != zn)
                    throw new Error(`Assert failed: Expected ${zn} assets to be in memory, but only instantiated ${Un}`);
                Wn.forEach((e) => Rn.loaded_files.push(e.url)),
                    m.diagnosticTracing && console.debug('MONO_WASM: all assets are loaded in wasm memory');
            }
        }
        function no() {
            return Rn.loaded_files;
        }
        let oo, so;
        function io(e) {
            const r = t;
            void 0 === globalThis.performance && (globalThis.performance = ao),
                void 0 === globalThis.URL &&
                    (globalThis.URL = class {
                        constructor(e) {
                            this.url = e;
                        }
                        toString() {
                            return this.url;
                        }
                    });
            const n = (r.imports = t.imports || {}),
                c = (e) => (r) => t.imports[r] || e(r);
            n.require
                ? (m.requirePromise = e.requirePromise = Promise.resolve(c(n.require)))
                : e.require
                ? (m.requirePromise = e.requirePromise = Promise.resolve(c(e.require)))
                : e.requirePromise
                ? (m.requirePromise = e.requirePromise.then((e) => c(e)))
                : (m.requirePromise = e.requirePromise =
                      Promise.resolve(
                          c((e) => {
                              throw new Error(`Please provide Module.imports.${e} or Module.imports.require`);
                          }),
                      )),
                (m.scriptDirectory = e.scriptDirectory =
                    (function (e) {
                        return (
                            a && (e.scriptUrl = self.location.href),
                            e.scriptUrl || (e.scriptUrl = './dotnet.js'),
                            (e.scriptUrl = (function (e) {
                                return e.replace(/\\/g, '/').replace(/[?#].*/, '');
                            })(e.scriptUrl)),
                            (function (e) {
                                return e.slice(0, e.lastIndexOf('/')) + '/';
                            })(e.scriptUrl)
                        );
                    })(e)),
                (r.mainScriptUrlOrBlob = e.scriptUrl),
                r.__locateFile === r.locateFile
                    ? (r.locateFile = m.locateFile =
                          (e) =>
                              (function (e) {
                                  return o || s
                                      ? e.startsWith('/') || e.startsWith('\\') || -1 !== e.indexOf('///') || lo.test(e)
                                      : uo.test(e);
                              })(e)
                                  ? e
                                  : m.scriptDirectory + e)
                    : (m.locateFile = r.locateFile),
                n.fetch ? (e.fetch = m.fetch_like = n.fetch) : (e.fetch = m.fetch_like = co),
                (e.noExitRuntime = i);
            const u = e.updateGlobalBufferAndViews;
            e.updateGlobalBufferAndViews = (e) => {
                u(e),
                    (function (e) {
                        Ve &&
                            ((Et = BigInt('9223372036854775807')),
                            (At = BigInt('-9223372036854775808')),
                            (He = new BigInt64Array(e)));
                    })(e);
            };
        }
        const ao = {
            now: function () {
                return Date.now();
            },
        };
        async function co(e, r) {
            try {
                if (o) {
                    if (!oo) {
                        const e = await m.requirePromise;
                        (so = e('url')), (oo = e('fs'));
                    }
                    e.startsWith('file://') && (e = so.fileURLToPath(e));
                    const t = await oo.promises.readFile(e);
                    return { ok: !0, url: e, arrayBuffer: () => t, json: () => JSON.parse(t) };
                }
                if ('function' == typeof globalThis.fetch) return globalThis.fetch(e, r || { credentials: 'same-origin' });
                if ('function' == typeof read) {
                    const r = new Uint8Array(read(e, 'binary'));
                    return { ok: !0, url: e, arrayBuffer: () => r, json: () => JSON.parse(t.UTF8ArrayToString(r, 0, r.length)) };
                }
            } catch (r) {
                return {
                    ok: !1,
                    url: e,
                    status: 500,
                    statusText: 'ERR28: ' + r,
                    arrayBuffer: () => {
                        throw r;
                    },
                    json: () => {
                        throw r;
                    },
                };
            }
            throw new Error('No fetch implementation available');
        }
        const uo = /^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,
            lo = /[a-zA-Z]:[\\/]/;
        function _o(e, t, r, n, o, s) {
            const i = Rt(e),
                a = Rt(t),
                c = Rt(s);
            try {
                const e = Kt(r);
                if (1 !== e) throw new Error(`Assert failed: Signature version ${e} mismatch.`);
                const t = Nr(i),
                    o = Nr(a);
                m.diagnosticTracing && console.debug(`MONO_WASM: Binding [JSImport] ${t} from ${o}`);
                const s = po(t, o),
                    u = Zt(r),
                    l = { fn: s, marshal_exception_to_cs: Qr, signature: r },
                    _ = '_bound_js_' + t.replace(/\./g, '_');
                let f = `//# sourceURL=https://dotnet.generated.invalid/${_} \n`,
                    d = '',
                    p = '',
                    h = '';
                for (let e = 0; e < u; e++) {
                    const t = (e + 2) * Wt,
                        n = 32 * (e + 2) + 8,
                        o = `arg${e}`,
                        s = Vt(r, e + 2),
                        { converters: i, call_body: a } = cn(s, e + 2, t, n, o, l);
                    (d += i), (p += a), (h += '' === h ? o : `, ${o}`);
                }
                const { converters: w, call_body: g, marshaler_type: y } = Ir(Vt(r, 1), 1, Wt, 40, 'js_result', l);
                (d += w),
                    (f += `const { signature, fn, marshal_exception_to_cs ${d} } = closure;\n`),
                    (f += `return function ${_} (args) { try {\n`),
                    (f += p),
                    y === yr.Void
                        ? ((f += `  const js_result = fn(${h});\n`),
                          (f += `  if (js_result !== undefined) throw new Error('Function ${t} returned unexpected value, C# signature is void');\n`))
                        : y === yr.Discard
                        ? (f += `  fn(${h});\n`)
                        : ((f += `  const js_result = fn(${h});\n`), (f += g));
                for (let e = 0; e < u; e++) {
                    const t = Vt(r, e + 2);
                    if (qt(t) == yr.Span) {
                        f += `  arg${e}.dispose();\n`;
                    }
                }
                (f += '} catch (ex) {\n'), (f += '  marshal_exception_to_cs(args, ex);\n'), (f += '}}');
                const b = new Function('closure', f)(l);
                b[zt] = !0;
                nt(n, xe(b));
            } catch (e) {
                ko(o, e, c);
            } finally {
                c.release(), i.release();
            }
        }
        function fo(e, t) {
            const r = Oe(e);
            if (!r || 'function' != typeof r || !r[zt]) throw new Error(`Assert failed: Bound function handle expected ${e}`);
            r(t);
        }
        function mo(e, t) {
            Eo.set(e, t), m.diagnosticTracing && console.debug(`MONO_WASM: added module imports '${e}'`);
        }
        function po(e, t) {
            if (!e || 'string' != typeof e) throw new Error('Assert failed: function_name must be string');
            let o = n;
            const s = e.split('.');
            if (t) {
                if (((o = Eo.get(t)), !o))
                    throw new Error(`Assert failed: ES6 module ${t} was not imported yet, please call JSHost.Import() first.`);
            } else 'INTERNAL' === s[0] ? ((o = r), s.shift()) : 'globalThis' === s[0] && ((o = globalThis), s.shift());
            for (let t = 0; t < s.length - 1; t++) {
                const r = s[t],
                    n = o[r];
                if (!n) throw new Error(`Assert failed: ${r} not found while looking up ${e}`);
                o = n;
            }
            const i = o[s[s.length - 1]];
            if ('function' != typeof i) throw new Error(`Assert failed: ${e} must be a Function but was ${typeof i}`);
            return i.bind(o);
        }
        function ho(e, t, r) {
            if (!e) throw new Error('Assert failed: Null reference');
            e[t] = r;
        }
        function wo(e, t) {
            if (!e) throw new Error('Assert failed: Null reference');
            return e[t];
        }
        function go(e, t) {
            if (!e) throw new Error('Assert failed: Null reference');
            return t in e;
        }
        function yo(e, t) {
            if (!e) throw new Error('Assert failed: Null reference');
            return typeof e[t];
        }
        function bo() {
            return globalThis;
        }
        const vo = new Map(),
            Eo = new Map();
        function Ao(e, t) {
            if (!e) throw new Error('Assert failed: Invalid module_name');
            if (!t) throw new Error('Assert failed: Invalid module_name');
            let r = vo.get(e);
            const n = !r;
            return (
                n &&
                    (m.diagnosticTracing && console.debug(`MONO_WASM: importing ES6 module '${e}' from '${t}'`),
                    (r = import(t)),
                    vo.set(e, r)),
                Ue(async () => {
                    const o = await r;
                    return (
                        n &&
                            (Eo.set(e, o),
                            m.diagnosticTracing && console.debug(`MONO_WASM: imported ES6 module '${e}' from '${t}'`)),
                        o
                    );
                })
            );
        }
        function ko(e, r, n) {
            Mr(
                (function (e, r) {
                    let n = 'unknown exception';
                    if (r) {
                        n = r.toString();
                        const e = r.stack;
                        e && (e.startsWith(n) ? (n = e) : (n += '\n' + e)), (n = se(n));
                    }
                    return e && t.setValue(e, 1, 'i32'), n;
                })(e, r),
                n,
            );
        }
        const So = new Map();
        function Oo(e, r, n, o, s) {
            const i = Rt(e),
                a = Rt(s),
                c = t;
            try {
                const e = Kt(n);
                if (1 !== e) throw new Error(`Assert failed: Signature version ${e} mismatch.`);
                const t = Zt(n),
                    o = Nr(i);
                if (!o) throw new Error('Assert failed: fully_qualified_name must be string');
                m.diagnosticTracing && console.debug(`MONO_WASM: Binding [JSExport] ${o}`);
                const { assembly: s, namespace: u, classname: l, methodname: _ } = Do(o),
                    f = te(s);
                if (!f) throw new Error('Could not find assembly: ' + s);
                const d = g.mono_wasm_assembly_find_class(f, u, l);
                if (!d) throw new Error('Could not find class: ' + u + ':' + l + ' in assembly ' + s);
                const p = `__Wrapper_${_}_${r}`,
                    h = g.mono_wasm_assembly_find_method(d, p, -1);
                if (!h) throw new Error(`Could not find method: ${p} in ${d} [${s}]`);
                const w = {
                        method: h,
                        signature: n,
                        stackSave: c.stackSave,
                        stackRestore: c.stackRestore,
                        alloc_stack_frame: Lt,
                        invoke_method_and_handle_exception: xo,
                    },
                    y = '_bound_cs_' + `${u}_${l}_${_}`.replace(/\./g, '_').replace(/\//g, '_');
                let b = `//# sourceURL=https://dotnet.generated.invalid/${y} \n`,
                    v = '',
                    E = '';
                for (let e = 0; e < t; e++) {
                    const t = (e + 2) * Wt,
                        r = 32 * (e + 2) + 8,
                        o = Vt(n, e + 2),
                        { converters: s, call_body: i } = Ir(o, e + 2, t, r, `arguments[${e}]`, w);
                    (E += s), (v += i);
                }
                const { converters: A, call_body: k, marshaler_type: S } = cn(Vt(n, 1), 1, Wt, 40, 'js_result', w);
                (E += A),
                    (b += `const { method, signature, stackSave, stackRestore,  alloc_stack_frame, invoke_method_and_handle_exception ${E} } = closure;\n`),
                    (b += `return function ${y} () {\n`),
                    (b += 'const sp = stackSave();\n'),
                    (b += 'try {\n'),
                    (b += `  const args = alloc_stack_frame(${t + 2});\n`),
                    (b += v),
                    (b += '  invoke_method_and_handle_exception(method, args);\n'),
                    S !== yr.Void && S !== yr.Discard && (b += k),
                    S !== yr.Void && S !== yr.Discard && (b += '  return js_result;\n'),
                    (b += '} finally {\n'),
                    (b += '  stackRestore(sp);\n'),
                    (b += '}}');
                const O = new Function('closure', b)(w);
                (O[Bt] = !0),
                    So.set(o, O),
                    (function (e, t, r, n, o, s) {
                        const i = `${t}.${r}`.replace(/\//g, '.').split('.');
                        let a,
                            c = No.get(e);
                        c || ((c = {}), No.set(e, c), No.set(e + '.dll', c)), (a = c);
                        for (let e = 0; e < i.length; e++) {
                            const t = i[e];
                            if ('' != t) {
                                let e = a[t];
                                if ((void 0 === e && ((e = {}), (a[t] = e)), !e))
                                    throw new Error(`Assert failed: ${t} not found while looking up ${r}`);
                                a = e;
                            }
                        }
                        a[n] || (a[n] = s), (a[`${n}.${o}`] = s);
                    })(s, u, l, _, r, O);
            } catch (e) {
                t.printErr(e.toString()), ko(o, e, a);
            } finally {
                a.release(), i.release();
            }
        }
        function xo(e, t) {
            const r = g.mono_wasm_invoke_method_bound(e, t);
            if (r) throw new Error('ERR24: Unexpected error: ' + xr(r));
            if (
                (function (e) {
                    if (!e) throw new Error('Assert failed: Null args');
                    return Qt(e) !== yr.None;
                })(t)
            ) {
                throw Sn(Ht(t, 0));
            }
        }
        const No = new Map();
        async function jo(e) {
            if (!m.mono_wasm_bindings_is_ready) throw new Error('Assert failed: The runtime must be initialized.');
            if (!No.get(e)) {
                const t = te(e);
                if (!t) throw new Error('Could not find assembly: ' + e);
                g.mono_wasm_runtime_run_module_cctor(t);
            }
            return No.get(e) || {};
        }
        function Do(e) {
            const t = e.substring(e.indexOf('[') + 1, e.indexOf(']')).trim(),
                r = (e = e.substring(e.indexOf(']') + 1).trim()).substring(e.indexOf(':') + 1);
            let n = '',
                o = (e = e.substring(0, e.indexOf(':')).trim());
            if (-1 != e.indexOf('.')) {
                const t = e.lastIndexOf('.');
                (n = e.substring(0, t)), (o = e.substring(t + 1));
            }
            if (!t.trim()) throw new Error('No assembly name specified ' + e);
            if (!o.trim()) throw new Error('No class name specified ' + e);
            if (!r.trim()) throw new Error('No method name specified ' + e);
            return { assembly: t, namespace: n, classname: o, methodname: r };
        }
        function Mo(e) {
            const t = g.mono_wasm_assembly_find_method(m.runtime_interop_exports_class, e, -1);
            if (!t)
                throw "Can't find method " + m.runtime_interop_namespace + '.' + m.runtime_interop_exports_classname + '.' + e;
            return t;
        }
        function Ro(e, t, r, n, o, s, i) {
            const a = Rt(i);
            try {
                Po(
                    (function (e, t, r, n, o) {
                        let s = null;
                        switch (o) {
                            case 5:
                                s = new Int8Array(r - t);
                                break;
                            case 6:
                                s = new Uint8Array(r - t);
                                break;
                            case 7:
                                s = new Int16Array(r - t);
                                break;
                            case 8:
                                s = new Uint16Array(r - t);
                                break;
                            case 9:
                                s = new Int32Array(r - t);
                                break;
                            case 10:
                                s = new Uint32Array(r - t);
                                break;
                            case 13:
                                s = new Float32Array(r - t);
                                break;
                            case 14:
                                s = new Float64Array(r - t);
                                break;
                            case 15:
                                s = new Uint8ClampedArray(r - t);
                                break;
                            default:
                                throw new Error('Unknown array type ' + o);
                        }
                        return To(s, e, t, r, n), s;
                    })(e, t, r, n, o),
                    a,
                    !0,
                );
            } catch (e) {
                ko(s, String(e), a);
            } finally {
                a.release();
            }
        }
        function To(e, r, n, o, s) {
            if (Io(e) && e.BYTES_PER_ELEMENT) {
                if (s !== e.BYTES_PER_ELEMENT)
                    throw new Error(
                        "Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" +
                            e.BYTES_PER_ELEMENT +
                            "' sizeof managed element: '" +
                            s +
                            "'",
                    );
                let i = (o - n) * s;
                const a = e.length * e.BYTES_PER_ELEMENT;
                i > a && (i = a);
                const c = n * s;
                return new Uint8Array(e.buffer, 0, i).set(t.HEAPU8.subarray(r + c, r + c + i)), i;
            }
            throw new Error("Object '" + e + "' is not a typed array");
        }
        function Io(e) {
            return 'undefined' != typeof SharedArrayBuffer
                ? e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer
                : e.buffer instanceof ArrayBuffer;
        }
        function $o(e, t, r) {
            switch (!0) {
                case null === t:
                case void 0 === t:
                    return void r.clear();
                case 'symbol' == typeof t:
                case 'string' == typeof t:
                    return void Es._create_uri_ref(t, r.address);
                default:
                    return void Co(e, t, r);
            }
        }
        function Fo(e) {
            const t = Tt();
            try {
                return Po(e, t, !1), t.value;
            } finally {
                t.release();
            }
        }
        function Po(e, t, r) {
            if (h(t)) throw new Error('Expected (value, WasmRoot, boolean)');
            switch (!0) {
                case null === e:
                case void 0 === e:
                    return void t.clear();
                case 'number' == typeof e: {
                    let r;
                    return (
                        (0 | e) === e
                            ? (rt(In._box_buffer, e), (r = In._class_int32))
                            : e >>> 0 === e
                            ? (Ke(In._box_buffer, e), (r = In._class_uint32))
                            : (ut(In._box_buffer, e), (r = In._class_double)),
                        void g.mono_wasm_box_primitive_ref(r, In._box_buffer, 8, t.address)
                    );
                }
                case 'string' == typeof e:
                    return void Mr(e, t);
                case 'symbol' == typeof e:
                    return void Dr(e, t);
                case 'boolean' == typeof e:
                    return (
                        Ye(In._box_buffer, e), void g.mono_wasm_box_primitive_ref(In._class_boolean, In._box_buffer, 4, t.address)
                    );
                case !0 === Ce(e):
                    return void (function (e, t) {
                        if (!e) return t.clear(), null;
                        const r = xe(e),
                            n = Es._create_tcs(),
                            o = { tcs_gc_handle: n };
                        je(o, n),
                            e
                                .then(
                                    (e) => {
                                        Es._set_tcs_result_ref(n, e);
                                    },
                                    (e) => {
                                        Es._set_tcs_failure(n, e ? e.toString() : '');
                                    },
                                )
                                .finally(() => {
                                    Ne(r), De(o, n);
                                }),
                            Es._get_tcs_task_ref(n, t.address);
                    })(e, t);
                case 'Date' === e.constructor.name:
                    return void Es._create_date_time_ref(e.getTime(), t.address);
                default:
                    return void Co(r, e, t);
            }
        }
        function Co(e, t, r) {
            if ((r.clear(), null != t)) {
                if (void 0 !== t[ke]) {
                    return void Ko(Me(t), r.address);
                }
                if (
                    (t[Se] &&
                        ((function (e, t, r) {
                            if (0 === e || -1 === e) return void rt(r, 0);
                            Es._get_cs_owned_object_by_js_handle_ref(e, t ? 1 : 0, r);
                        })(t[Se], e, r.address),
                        r.value || delete t[Se]),
                    !r.value)
                ) {
                    const n = t[$n],
                        o = void 0 === n ? 0 : n,
                        s = xe(t);
                    Es._create_cs_owned_proxy_ref(s, o, e ? 1 : 0, r.address);
                }
            }
        }
        function Uo(e, r) {
            if (!Io(e) || !e.BYTES_PER_ELEMENT) throw new Error("Object '" + e + "' is not a typed array");
            {
                const n = e[$n],
                    o = (function (e) {
                        const r = e.length * e.BYTES_PER_ELEMENT,
                            n = t._malloc(r),
                            o = new Uint8Array(t.HEAPU8.buffer, n, r);
                        return o.set(new Uint8Array(e.buffer, e.byteOffset, r)), o;
                    })(e);
                g.mono_wasm_typed_array_new_ref(o.byteOffset, e.length, e.BYTES_PER_ELEMENT, n, r.address), t._free(o.byteOffset);
            }
        }
        function Bo(e) {
            const t = Tt();
            try {
                return Uo(e, t), t.value;
            } finally {
                t.release();
            }
        }
        function zo(e, t, r) {
            if ('number' != typeof e) throw new Error(`Expected numeric value for enum argument, got '${e}'`);
            return 0 | e;
        }
        function Wo(e, t, r) {
            const n = Rt(r);
            try {
                const r = Oe(e);
                if (h(r)) return void ko(t, "ERR06: Invalid JS object handle '" + e + "'", n);
                Uo(r, n);
            } catch (e) {
                ko(t, String(e), n);
            } finally {
                n.release();
            }
        }
        const Lo = Symbol.for('wasm delegate_invoke');
        function Ho(e) {
            if (0 === e) return;
            const t = Tt(e);
            try {
                return Jo(t);
            } finally {
                t.release();
            }
        }
        function Vo(e, t, r, n) {
            switch (t) {
                case 0:
                    return null;
                case 26:
                case 27:
                    throw new Error('int64 not available');
                case 3:
                case 29:
                    return Nr(e);
                case 4:
                    throw new Error('no idea on how to unbox value types');
                case 5:
                    return (function (e) {
                        if (0 === e.value) return null;
                        return (function (e) {
                            let t = Re(e);
                            if (t) Me(t);
                            else {
                                t = function (...e) {
                                    Me(t);
                                    return (0, t[Lo])(...e);
                                };
                                const r = Tt();
                                Ko(e, r.address);
                                try {
                                    if (void 0 === t[Lo]) {
                                        const n = g.mono_wasm_get_delegate_invoke_ref(r.address),
                                            o = ws(n, bs(n, r), !0);
                                        if (((t[Lo] = o.bind({ this_arg_gc_handle: e })), !t[Lo]))
                                            throw new Error('System.Delegate Invoke method can not be resolved.');
                                    }
                                } finally {
                                    r.release();
                                }
                                je(t, e);
                            }
                            return t;
                        })(Es._get_js_owned_object_gc_handle_ref(e.address));
                    })(e);
                case 6:
                    return (function (e) {
                        if (0 === e.value) return null;
                        if (!Pe)
                            throw new Error(
                                "Promises are not supported thus 'System.Threading.Tasks.Task' can not work in this context.",
                            );
                        const t = Es._get_js_owned_object_gc_handle_ref(e.address);
                        let r = Re(t);
                        if (!r) {
                            const n = () => De(r, t),
                                { promise: o, promise_control: s } = Ie(n, n);
                            (r = o), Es._setup_js_cont_ref(e.address, s), je(r, t);
                        }
                        return r;
                    })(e);
                case 7:
                    return (function (e) {
                        if (0 === e.value) return null;
                        const t = Es._try_get_cs_owned_object_js_handle_ref(e.address, 0);
                        if (t) {
                            if (t === p) throw new Error('Cannot access a disposed JSObject at ' + e.value);
                            return Oe(t);
                        }
                        const r = Es._get_js_owned_object_gc_handle_ref(e.address);
                        let n = Re(r);
                        return h(n) && ((n = new dr()), je(n, r)), n;
                    })(e);
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                    throw new Error('Marshaling of primitive arrays are not supported.');
                case 20:
                    return new Date(Es._get_date_value_ref(e.address));
                case 21:
                case 22:
                    return Es._object_to_string_ref(e.address);
                case 23:
                    return (function (e) {
                        return Oe(Es._get_cs_owned_object_js_handle_ref(e.address, 0));
                    })(e);
                case 30:
                    return;
                default:
                    throw new Error(
                        `no idea on how to unbox object of MarshalType ${t} at offset ${e.value} (root address is ${e.address})`,
                    );
            }
        }
        function qo(e, t, r) {
            if (t >= 512)
                throw new Error(
                    `Got marshaling error ${t} when attempting to unbox object at address ${e.value} (root located at ${e.address})`,
                );
            let n = 0;
            if ((4 === t || 7 == t) && ((n = dt(r)), n < 1024))
                throw new Error(`Got invalid MonoType ${n} for object at address ${e.value} (root located at ${e.address})`);
            return Vo(e, t);
        }
        function Jo(e) {
            if (0 === e.value) return;
            const t = In._unbox_buffer,
                r = g.mono_wasm_try_unbox_primitive_and_get_type_ref(e.address, t, In._unbox_buffer_size);
            switch (r) {
                case 1:
                    return ht(t);
                case 25:
                case 32:
                    return dt(t);
                case 24:
                    return bt(t);
                case 2:
                    return vt(t);
                case 8:
                    return 0 !== ht(t);
                case 28:
                    return String.fromCharCode(ht(t));
                case 0:
                    return null;
                default:
                    return qo(e, r, t);
            }
        }
        function Go(e) {
            if (0 === e) return null;
            const t = Tt(e);
            try {
                return Xo(t);
            } finally {
                t.release();
            }
        }
        function Yo(e) {
            return Es._is_simple_array_ref(e.address);
        }
        function Xo(e) {
            if (0 === e.value) return null;
            const t = e.address,
                r = Tt(),
                n = r.address;
            try {
                const o = g.mono_wasm_array_length(e.value),
                    s = new Array(o);
                for (let e = 0; e < o; ++e) g.mono_wasm_array_get_ref(t, e, n), Yo(r) ? (s[e] = Xo(r)) : (s[e] = Jo(r));
                return s;
            } finally {
                r.release();
            }
        }
        function Zo(e, t, r, n) {
            const o = Rt(t),
                s = Rt(e),
                i = Rt(n);
            try {
                const t = Nr(s);
                if (!t) return void ko(r, 'Invalid name @' + s.value, i);
                const n = globalThis[t];
                if (null == n) return void ko(r, "JavaScript host object '" + t + "' not found.", i);
                try {
                    const e = Xo(o),
                        t = function (e, t) {
                            let r = [];
                            (r[0] = e), t && (r = r.concat(t));
                            return new (e.bind.apply(e, r))();
                        },
                        r = t(n, e);
                    Po(xe(r), i, !1);
                } catch (e) {
                    return void ko(r, e, i);
                }
            } finally {
                i.release(), o.release(), s.release();
            }
        }
        function Ko(e, t) {
            e ? Es._get_js_owned_object_by_gc_handle_ref(e, t) : rt(t, 0);
        }
        const Qo = new Map();
        function es(e, r, n, o, s, i, a) {
            (function () {
                if (!ze.length) throw new Error('No temp frames have been created at this point');
                Le = ze.pop();
            })(),
                t.stackRestore(a),
                'object' == typeof o &&
                    (o.clear(), null !== r && null === r.scratchResultRoot ? (r.scratchResultRoot = o) : o.release()),
                'object' == typeof s &&
                    (s.clear(), null !== r && null === r.scratchExceptionRoot ? (r.scratchExceptionRoot = s) : s.release()),
                'object' == typeof i &&
                    (i.clear(), null !== r && null === r.scratchThisArgRoot ? (r.scratchThisArgRoot = i) : i.release());
        }
        function ts(e, t) {
            if (!m.mono_wasm_bindings_is_ready) throw new Error('Assert failed: The runtime must be initialized.');
            const r = `${e}-${t}`;
            let n = Qo.get(r);
            if (void 0 === n) {
                const o = ys(e);
                void 0 === t && (t = bs(o, void 0)), (n = ws(o, t, !1, e)), Qo.set(r, n);
            }
            return n;
        }
        function rs(e, t) {
            const r = fe(e);
            'string' != typeof t && (t = bs(r, void 0));
            const n = ws(r, t, !1, '_' + e + '__entrypoint');
            return async function (...e) {
                return (
                    e.length > 0 &&
                        Array.isArray(e[0]) &&
                        (e[0] = (function (e, t, r) {
                            const n = Tt();
                            t
                                ? g.mono_wasm_string_array_new_ref(e.length, n.address)
                                : g.mono_wasm_obj_array_new_ref(e.length, n.address);
                            const o = Tt(0),
                                s = n.address,
                                i = o.address;
                            try {
                                for (let n = 0; n < e.length; ++n) {
                                    let a = e[n];
                                    t && (a = a.toString()), Po(a, o, r), g.mono_wasm_obj_array_set_ref(s, n, i);
                                }
                                return n.value;
                            } finally {
                                It(n, o);
                            }
                        })(e[0], !0, !1)),
                    n(...e)
                );
            };
        }
        function ns(e, t, r) {
            if (!m.mono_wasm_bindings_is_ready) throw new Error('Assert failed: The runtime must be initialized.');
            return t || (t = [[]]), rs(e, r)(...t);
        }
        function os(e, t, r, n, o) {
            const s = Rt(r),
                i = Rt(t),
                a = Rt(o);
            try {
                const t = Nr(i);
                if (!t || 'string' != typeof t) return void ko(n, 'ERR12: Invalid method name object @' + i.value, a);
                const r = (function (e) {
                    return 0 !== e && -1 !== e ? Oe(e) : null;
                })(e);
                if (h(r)) return void ko(n, "ERR13: Invalid JS object handle '" + e + "' while invoking '" + t + "'", a);
                const o = Xo(s);
                try {
                    const e = r[t];
                    if (void 0 === e)
                        throw new Error("Method: '" + t + "' not found for: '" + Object.prototype.toString.call(r) + "'");
                    Po(e.apply(r, o), a, !0);
                } catch (e) {
                    ko(n, e, a);
                }
            } finally {
                s.release(), i.release(), a.release();
            }
        }
        function ss(e, t, r, n) {
            const o = Rt(t),
                s = Rt(n);
            try {
                const t = Nr(o);
                if (!t) return void ko(r, "Invalid property name object '" + o.value + "'", s);
                const n = Oe(e);
                if (h(n)) return void ko(r, "ERR01: Invalid JS object handle '" + e + "' while geting '" + t + "'", s);
                Po(n[t], s, !0);
            } catch (e) {
                ko(r, e, s);
            } finally {
                s.release(), o.release();
            }
        }
        function is(e, t, r, n, o, s, i) {
            const a = Rt(r),
                c = Rt(t),
                u = Rt(i);
            try {
                const r = Nr(c);
                if (!r) return void ko(s, "Invalid property name object '" + t + "'", u);
                const i = Oe(e);
                if (h(i)) return void ko(s, "ERR02: Invalid JS object handle '" + e + "' while setting '" + r + "'", u);
                let l = !1;
                const _ = Jo(a);
                if (n) (i[r] = _), (l = !0);
                else {
                    if (((l = !1), !n && !Object.prototype.hasOwnProperty.call(i, r))) return void Po(!1, u, !1);
                    !0 === o ? Object.prototype.hasOwnProperty.call(i, r) && ((i[r] = _), (l = !0)) : ((i[r] = _), (l = !0));
                }
                Po(l, u, !1);
            } catch (e) {
                ko(s, e, u);
            } finally {
                u.release(), c.release(), a.release();
            }
        }
        function as(e, t, r, n) {
            const o = Rt(n);
            try {
                const n = Oe(e);
                if (h(n)) return void ko(r, "ERR03: Invalid JS object handle '" + e + "' while getting [" + t + ']', o);
                Po(n[t], o, !0);
            } catch (e) {
                ko(r, e, o);
            } finally {
                o.release();
            }
        }
        function cs(e, t, r, n, o) {
            const s = Rt(r),
                i = Rt(o);
            try {
                const r = Oe(e);
                if (h(r)) return void ko(n, "ERR04: Invalid JS object handle '" + e + "' while setting [" + t + ']', i);
                const o = Jo(s);
                (r[t] = o), i.clear();
            } catch (e) {
                ko(n, e, i);
            } finally {
                i.release(), s.release();
            }
        }
        function us(e, n, o) {
            const s = Rt(e),
                i = Rt(o);
            try {
                const e = Nr(s);
                let o;
                if (
                    ((o = e ? ('Module' == e ? t : 'INTERNAL' == e ? r : globalThis[e]) : globalThis),
                    null === o || void 0 === typeof o)
                )
                    return void ko(n, "Global object '" + e + "' not found.", i);
                Po(o, i, !0);
            } catch (e) {
                ko(n, e, i);
            } finally {
                i.release(), s.release();
            }
        }
        function ls(e, t, r, n, o) {
            try {
                const e = globalThis.Blazor;
                if (!e) throw new Error('The blazor.webassembly.js library is not loaded.');
                return e._internal.invokeJSFromDotNet(t, r, n, o);
            } catch (t) {
                const r = t.message + '\n' + t.stack,
                    n = Tt();
                return Mr(r, n), n.copy_to_address(e), n.release(), 0;
            }
        }
        const _s = /[^A-Za-z0-9_$]/g,
            fs = new Map(),
            ds = new Map(),
            ms = new Map();
        function ps(e, t, r, n) {
            let o = null,
                s = null,
                i = null;
            if (n) {
                (i = Object.keys(n)), (s = new Array(i.length));
                for (let e = 0, t = i.length; e < t; e++) s[e] = n[i[e]];
            }
            return (
                (o = (function (e, t, r, n) {
                    const o = '"use strict";\r\n';
                    let s = '',
                        i = '';
                    e ? ((s = '//# sourceURL=https://dotnet.generated.invalid/' + e + '\r\n'), (i = e)) : (i = 'unnamed');
                    let a = 'function ' + i + '(' + t.join(', ') + ') {\r\n' + r + '\r\n};\r\n';
                    const c = /\r(\n?)/g;
                    a = s + o + a.replace(c, '\r\n    ') + `    return ${i};\r\n`;
                    let u = null,
                        l = null;
                    return (l = n ? n.concat([a]) : [a]), (u = Function.apply(Function, l)), u;
                })(e, t, r, i).apply(null, s)),
                o
            );
        }
        function hs(e) {
            let t = ds.get(e);
            return (
                t ||
                    ((t = (function (e) {
                        const t = [];
                        let r = 0,
                            n = !1,
                            o = !1,
                            s = -1,
                            i = !1;
                        for (let a = 0; a < e.length; ++a) {
                            const c = e[a];
                            if (a === e.length - 1) {
                                if ('!' === c) {
                                    n = !0;
                                    continue;
                                }
                                'm' === c && ((o = !0), (s = e.length - 1));
                            } else if ('!' === c) throw new Error('! must be at the end of the signature');
                            const u = fs.get(c);
                            if (!u) throw new Error('Unknown parameter type ' + c);
                            const l = Object.create(u.steps[0]);
                            (l.size = u.size),
                                u.needs_root && (i = !0),
                                (l.needs_root = u.needs_root),
                                (l.key = c),
                                t.push(l),
                                (r += u.size);
                        }
                        return {
                            steps: t,
                            size: r,
                            args_marshal: e,
                            is_result_definitely_unmarshaled: n,
                            is_result_possibly_unmarshaled: o,
                            result_unmarshaled_if_argc: s,
                            needs_root_buffer: i,
                        };
                    })(e)),
                    ds.set(e, t)),
                t
            );
        }
        function ws(e, r, n, o) {
            if ('string' != typeof r) throw new Error('args_marshal argument invalid, expected string');
            const s = `managed_${e}_${r}`;
            let i = ms.get(s);
            if (i) return i;
            o || (o = s);
            let a = null;
            'string' == typeof r &&
                (a = (function (e) {
                    const r = hs(e);
                    if ('string' != typeof r.args_marshal) throw new Error("Corrupt converter for '" + e + "'");
                    if (r.compiled_function && r.compiled_variadic_function) return r;
                    const n = e.replace('!', '_result_unmarshaled');
                    r.name = n;
                    let o = [],
                        s = ['method'];
                    const i = {
                        Module: t,
                        setI32: nt,
                        setU32: Qe,
                        setF32: ct,
                        setF64: ut,
                        setU52: it,
                        setI52: st,
                        setB32: Ye,
                        setI32_unchecked: rt,
                        setU32_unchecked: Ke,
                        scratchValueRoot: r.scratchValueRoot,
                        stackAlloc: t.stackAlloc,
                        _zero_region: Ge,
                    };
                    let a = 0;
                    const c = 8 * (((4 * e.length + 7) / 8) | 0),
                        u = r.size + 4 * e.length + 16;
                    o.push(
                        "if (!method) throw new Error('no method provided');",
                        `const buffer = stackAlloc(${u});`,
                        `_zero_region(buffer, ${u});`,
                        `const indirectStart = buffer + ${c};`,
                        '',
                    );
                    for (let e = 0; e < r.steps.length; e++) {
                        const n = r.steps[e],
                            c = 'step' + e,
                            u = 'value' + e,
                            l = 'arg' + e,
                            _ = `(indirectStart + ${a})`;
                        if ((s.push(l), n.convert_root)) {
                            if (n.indirect) throw new Error('Assert failed: converter step cannot both be rooted and indirect');
                            if (!r.scratchValueRoot) {
                                const e = t.stackSave();
                                (r.scratchValueRoot = Rt(e)), (i.scratchValueRoot = r.scratchValueRoot);
                            }
                            (i[c] = n.convert_root),
                                o.push(`scratchValueRoot._set_address(${_});`),
                                o.push(`${c}(${l}, scratchValueRoot);`),
                                n.byref ? o.push(`let ${u} = ${_};`) : o.push(`let ${u} = scratchValueRoot.value;`);
                        } else
                            n.convert
                                ? ((i[c] = n.convert), o.push(`let ${u} = ${c}(${l}, method, ${e});`))
                                : o.push(`let ${u} = ${l};`);
                        if (
                            (n.needs_root &&
                                !n.convert_root &&
                                (o.push("if (!rootBuffer) throw new Error('no root buffer provided');"),
                                o.push(`rootBuffer.set (${e}, ${u});`)),
                            n.indirect)
                        ) {
                            switch (n.indirect) {
                                case 'bool':
                                    o.push(`setB32(${_}, ${u});`);
                                    break;
                                case 'u32':
                                    o.push(`setU32(${_}, ${u});`);
                                    break;
                                case 'i32':
                                    o.push(`setI32(${_}, ${u});`);
                                    break;
                                case 'float':
                                    o.push(`setF32(${_}, ${u});`);
                                    break;
                                case 'double':
                                    o.push(`setF64(${_}, ${u});`);
                                    break;
                                case 'i52':
                                    o.push(`setI52(${_}, ${u});`);
                                    break;
                                case 'u52':
                                    o.push(`setU52(${_}, ${u});`);
                                    break;
                                default:
                                    throw new Error('Unimplemented indirect type: ' + n.indirect);
                            }
                            o.push(`setU32_unchecked(buffer + (${e} * 4), ${_});`), (a += n.size);
                        } else o.push(`setU32_unchecked(buffer + (${e} * 4), ${u});`), (a += 4);
                        o.push('');
                    }
                    o.push('return buffer;');
                    let l = o.join('\r\n'),
                        _ = null,
                        f = null;
                    try {
                        (_ = ps('converter_' + n, s, l, i)), (r.compiled_function = _);
                    } catch (e) {
                        throw (
                            ((r.compiled_function = null),
                            console.warn('MONO_WASM: compiling converter failed for', l, 'with error', e),
                            e)
                        );
                    }
                    s = ['method', 'args'];
                    const d = { converter: _ };
                    o = ['return converter(', '  method,'];
                    for (let e = 0; e < r.steps.length; e++) o.push('  args[' + e + (e == r.steps.length - 1 ? ']' : '], '));
                    o.push(');'), (l = o.join('\r\n'));
                    try {
                        (f = ps('variadic_converter_' + n, s, l, d)), (r.compiled_variadic_function = f);
                    } catch (e) {
                        throw (
                            ((r.compiled_variadic_function = null),
                            console.warn('MONO_WASM: compiling converter failed for', l, 'with error', e),
                            e)
                        );
                    }
                    return (r.scratchRootBuffer = null), (r.scratchBuffer = 0), r;
                })(r));
            const c = t._malloc(128),
                u = {
                    method: e,
                    converter: a,
                    scratchRootBuffer: null,
                    scratchBuffer: 0,
                    scratchResultRoot: Tt(),
                    scratchExceptionRoot: Tt(),
                    scratchThisArgRoot: Tt(),
                },
                l = {
                    Module: t,
                    mono_wasm_new_root: Tt,
                    get_js_owned_object_by_gc_handle_ref: Ko,
                    _create_temp_frame: qe,
                    _handle_exception_for_call: gs,
                    _teardown_after_call: es,
                    mono_wasm_try_unbox_primitive_and_get_type_ref: g.mono_wasm_try_unbox_primitive_and_get_type_ref,
                    _unbox_mono_obj_root_with_known_nonprimitive_type: qo,
                    invoke_method_ref: g.mono_wasm_invoke_method_ref,
                    method: e,
                    token: u,
                    unbox_buffer: c,
                    unbox_buffer_size: 128,
                    getB32: lt,
                    getI32: ht,
                    getU32: dt,
                    getF32: bt,
                    getF64: vt,
                    stackSave: t.stackSave,
                },
                _ = a ? 'converter_' + a.name : '';
            a && (l[_] = a);
            const f = [],
                d = [
                    '_create_temp_frame();',
                    'let resultRoot = token.scratchResultRoot, exceptionRoot = token.scratchExceptionRoot, thisArgRoot = token.scratchThisArgRoot , sp = stackSave();',
                    'token.scratchResultRoot = null;',
                    'token.scratchExceptionRoot = null;',
                    'token.scratchThisArgRoot = null;',
                    'if (resultRoot === null)',
                    '\tresultRoot = mono_wasm_new_root ();',
                    'if (exceptionRoot === null)',
                    '\texceptionRoot = mono_wasm_new_root ();',
                    'if (thisArgRoot === null)',
                    '\tthisArgRoot = mono_wasm_new_root ();',
                    '',
                ];
            if (a) {
                d.push(`let buffer = ${_}.compiled_function(`, '    method,');
                for (let e = 0; e < a.steps.length; e++) {
                    const t = 'arg' + e;
                    f.push(t), d.push('    ' + t + (e == a.steps.length - 1 ? '' : ', '));
                }
                d.push(');');
            } else d.push('let buffer = 0;');
            if (
                (a && a.is_result_definitely_unmarshaled
                    ? d.push('let is_result_marshaled = false;')
                    : a && a.is_result_possibly_unmarshaled
                    ? d.push(`let is_result_marshaled = arguments.length !== ${a.result_unmarshaled_if_argc};`)
                    : d.push('let is_result_marshaled = true;'),
                d.push('', '', ''),
                n
                    ? (d.push('get_js_owned_object_by_gc_handle_ref(this.this_arg_gc_handle, thisArgRoot.address);'),
                      d.push(
                          'invoke_method_ref (method, thisArgRoot.address, buffer, exceptionRoot.address, resultRoot.address);',
                      ))
                    : d.push('invoke_method_ref (method, 0, buffer, exceptionRoot.address, resultRoot.address);'),
                d.push(
                    `_handle_exception_for_call (${_}, token, buffer, resultRoot, exceptionRoot, thisArgRoot, sp);`,
                    '',
                    'let resultPtr = resultRoot.value, result = undefined;',
                ),
                !a)
            )
                throw new Error('No converter');
            a.is_result_possibly_unmarshaled && d.push('if (!is_result_marshaled) '),
                (a.is_result_definitely_unmarshaled || a.is_result_possibly_unmarshaled) && d.push('    result = resultPtr;'),
                a.is_result_definitely_unmarshaled ||
                    d.push(
                        'if (is_result_marshaled) {',
                        '    let resultType = mono_wasm_try_unbox_primitive_and_get_type_ref (resultRoot.address, unbox_buffer, unbox_buffer_size);',
                        '    switch (resultType) {',
                        '    case 1:',
                        '        result = getI32(unbox_buffer); break;',
                        '    case 32:',
                        '    case 25:',
                        '        result = getU32(unbox_buffer); break;',
                        '    case 24:',
                        '        result = getF32(unbox_buffer); break;',
                        '    case 2:',
                        '        result = getF64(unbox_buffer); break;',
                        '    case 8:',
                        '        result = getB32(unbox_buffer); break;',
                        '    case 28:',
                        '        result = String.fromCharCode(getI32(unbox_buffer)); break;',
                        '    case 0:',
                        '        result = null; break;',
                        '    default:',
                        '        result = _unbox_mono_obj_root_with_known_nonprimitive_type (resultRoot, resultType, unbox_buffer); break;',
                        '    }',
                        '}',
                    );
            let m = o.replace(_s, '_');
            n && (m += '_this'),
                d.push(
                    `_teardown_after_call (${_}, token, buffer, resultRoot, exceptionRoot, thisArgRoot, sp);`,
                    'return result;',
                );
            return (i = ps(m, f, d.join('\r\n'), l)), ms.set(s, i), i;
        }
        function gs(e, t, r, n, o, s, i) {
            const a = (function (e, t) {
                if (0 === t.value) return null;
                const r = Nr(e);
                return new Error(r);
            })(n, o);
            if (a) throw (es(0, t, 0, n, o, s, i), a);
        }
        function ys(e) {
            const { assembly: t, namespace: r, classname: n, methodname: o } = Do(e),
                s = g.mono_wasm_assembly_load(t);
            if (!s) throw new Error('Could not find assembly: ' + t);
            const i = g.mono_wasm_assembly_find_class(s, r, n);
            if (!i) throw new Error('Could not find class: ' + r + ':' + n + ' in assembly ' + t);
            const a = g.mono_wasm_assembly_find_method(i, o, -1);
            if (!a) throw new Error('Could not find method: ' + o);
            return a;
        }
        function bs(e, t) {
            return Es._get_call_sig_ref(e, t ? t.address : In._null_root.address);
        }
        const vs = [
                [!0, '_get_cs_owned_object_by_js_handle_ref', 'GetCSOwnedObjectByJSHandleRef', 'iim'],
                [!0, '_get_cs_owned_object_js_handle_ref', 'GetCSOwnedObjectJSHandleRef', 'mi'],
                [!0, '_try_get_cs_owned_object_js_handle_ref', 'TryGetCSOwnedObjectJSHandleRef', 'mi'],
                [!1, '_create_cs_owned_proxy_ref', 'CreateCSOwnedProxyRef', 'iiim'],
                [!1, '_get_js_owned_object_by_gc_handle_ref', 'GetJSOwnedObjectByGCHandleRef', 'im'],
                [!0, '_get_js_owned_object_gc_handle_ref', 'GetJSOwnedObjectGCHandleRef', 'm'],
                [!0, '_create_tcs', 'CreateTaskSource', ''],
                [!0, '_set_tcs_result_ref', 'SetTaskSourceResultRef', 'iR'],
                [!0, '_set_tcs_failure', 'SetTaskSourceFailure', 'is'],
                [!0, '_get_tcs_task_ref', 'GetTaskSourceTaskRef', 'im'],
                [!0, '_setup_js_cont_ref', 'SetupJSContinuationRef', 'mo'],
                [!0, '_object_to_string_ref', 'ObjectToStringRef', 'm'],
                [!0, '_get_date_value_ref', 'GetDateValueRef', 'm'],
                [!0, '_create_date_time_ref', 'CreateDateTimeRef', 'dm'],
                [!0, '_create_uri_ref', 'CreateUriRef', 'sm'],
                [!0, '_is_simple_array_ref', 'IsSimpleArrayRef', 'm'],
                [!1, '_get_call_sig_ref', 'GetCallSignatureRef', 'im'],
            ],
            Es = {};
        function As(e, t) {
            return ws(
                (function (e) {
                    const t = g.mono_wasm_assembly_find_method(In.runtime_legacy_exports_class, e, -1);
                    if (!t)
                        throw (
                            "Can't find method " +
                            m.runtime_interop_namespace +
                            '.' +
                            In.runtime_legacy_exports_classname +
                            '.' +
                            e
                        );
                    return t;
                })(e),
                t,
                !1,
                'BINDINGS_' + e,
            );
        }
        function ks() {
            (Object.prototype[$n] = 0),
                (Array.prototype[$n] = 1),
                (ArrayBuffer.prototype[$n] = 2),
                (DataView.prototype[$n] = 3),
                (Function.prototype[$n] = 4),
                (Uint8Array.prototype[$n] = 11);
            if (
                ((In._unbox_buffer_size = 65536),
                (In._box_buffer = t._malloc(65536)),
                (In._unbox_buffer = t._malloc(In._unbox_buffer_size)),
                (In._class_int32 = re('System', 'Int32')),
                (In._class_uint32 = re('System', 'UInt32')),
                (In._class_double = re('System', 'Double')),
                (In._class_boolean = re('System', 'Boolean')),
                (In._null_root = Tt()),
                (function () {
                    const e = fs;
                    e.set('m', { steps: [{}], size: 0 }),
                        e.set('s', { steps: [{ convert_root: Mr.bind(Tn) }], size: 0, needs_root: !0 }),
                        e.set('S', { steps: [{ convert_root: Dr.bind(Tn) }], size: 0, needs_root: !0 }),
                        e.set('o', { steps: [{ convert_root: Po.bind(Tn) }], size: 0, needs_root: !0 }),
                        e.set('u', { steps: [{ convert_root: $o.bind(Tn, !1) }], size: 0, needs_root: !0 }),
                        e.set('R', { steps: [{ convert_root: Po.bind(Tn), byref: !0 }], size: 0, needs_root: !0 }),
                        e.set('j', { steps: [{ convert: zo.bind(Tn), indirect: 'i32' }], size: 8 }),
                        e.set('b', { steps: [{ indirect: 'bool' }], size: 8 }),
                        e.set('i', { steps: [{ indirect: 'i32' }], size: 8 }),
                        e.set('I', { steps: [{ indirect: 'u32' }], size: 8 }),
                        e.set('l', { steps: [{ indirect: 'i52' }], size: 8 }),
                        e.set('L', { steps: [{ indirect: 'u52' }], size: 8 }),
                        e.set('f', { steps: [{ indirect: 'float' }], size: 8 }),
                        e.set('d', { steps: [{ indirect: 'double' }], size: 8 });
                })(),
                (In.runtime_legacy_exports_classname = 'LegacyExports'),
                (In.runtime_legacy_exports_class = g.mono_wasm_assembly_find_class(
                    m.runtime_interop_module,
                    m.runtime_interop_namespace,
                    In.runtime_legacy_exports_classname,
                )),
                !In.runtime_legacy_exports_class)
            )
                throw "Can't find " + m.runtime_interop_namespace + '.' + m.runtime_interop_exports_classname + ' class';
            for (const e of vs) {
                const t = Es,
                    [r, n, o, s] = e;
                if (r)
                    t[n] = function (...e) {
                        const r = As(o, s);
                        return (t[n] = r), r(...e);
                    };
                else {
                    const e = As(o, s);
                    t[n] = e;
                }
            }
        }
        function Ss() {
            return 'undefined' != typeof Response && 'body' in Response.prototype && 'function' == typeof ReadableStream;
        }
        function Os() {
            return new AbortController();
        }
        function xs(e) {
            e.abort();
        }
        function Ns(e) {
            e.__abort_controller.abort(),
                e.__reader &&
                    e.__reader.cancel().catch((e) => {
                        e && 'AbortError' !== e.name && t.printErr('MONO_WASM: Error in http_wasm_abort_response: ' + e);
                    });
        }
        function js(e, t, r, n, o, s, i, a) {
            return Ds(e, t, r, n, o, s, new wr(i, a, 0).slice());
        }
        function Ds(e, t, r, n, o, s, i) {
            if (!e || 'string' != typeof e) throw new Error('Assert failed: expected url string');
            if (!(t && r && Array.isArray(t) && Array.isArray(r) && t.length === r.length))
                throw new Error('Assert failed: expected headerNames and headerValues arrays');
            if (!(n && o && Array.isArray(n) && Array.isArray(o) && n.length === o.length))
                throw new Error('Assert failed: expected headerNames and headerValues arrays');
            const a = new Headers();
            for (let e = 0; e < t.length; e++) a.append(t[e], r[e]);
            const c = { body: i, headers: a, signal: s.signal };
            for (let e = 0; e < n.length; e++) c[n[e]] = o[e];
            return Ue(async () => {
                const t = await fetch(e, c);
                return (t.__abort_controller = s), t;
            });
        }
        function Ms(e) {
            if (!e.__headerNames) {
                (e.__headerNames = []), (e.__headerValues = []);
                const t = e.headers.entries();
                for (const r of t) e.__headerNames.push(r[0]), e.__headerValues.push(r[1]);
            }
        }
        function Rs(e) {
            return Ms(e), e.__headerNames;
        }
        function Ts(e) {
            return Ms(e), e.__headerValues;
        }
        function Is(e) {
            return Ue(async () => {
                const t = await e.arrayBuffer();
                return (e.__buffer = t), (e.__source_offset = 0), t.byteLength;
            });
        }
        function $s(e, t) {
            if (!e.__buffer) throw new Error('Assert failed: expected resoved arrayBuffer');
            if (e.__source_offset == e.__buffer.byteLength) return 0;
            const r = new Uint8Array(e.__buffer, e.__source_offset);
            t.set(r, 0);
            const n = Math.min(t.byteLength, r.byteLength);
            return (e.__source_offset += n), n;
        }
        function Fs(e, t, r) {
            const n = new wr(t, r, 0);
            return Ue(async () => {
                if (
                    (e.__reader || (e.__reader = e.body.getReader()),
                    e.__chunk || ((e.__chunk = await e.__reader.read()), (e.__source_offset = 0)),
                    e.__chunk.done)
                )
                    return 0;
                const t = e.__chunk.value.byteLength - e.__source_offset;
                if (!(t > 0)) throw new Error('Assert failed: expected remaining_source to be greater than 0');
                const r = Math.min(t, n.byteLength),
                    o = e.__chunk.value.subarray(e.__source_offset, e.__source_offset + r);
                return n.set(o, 0), (e.__source_offset += r), t == r && (e.__chunk = void 0), r;
            });
        }
        let Ps,
            Cs = 0,
            Us = !1,
            Bs = 0;
        if (globalThis.navigator) {
            const e = globalThis.navigator;
            e.userAgentData && e.userAgentData.brands
                ? (Us = e.userAgentData.brands.some((e) => 'Chromium' == e.brand))
                : e.userAgent && (Us = e.userAgent.includes('Chrome'));
        }
        function zs() {
            for (; Bs > 0; ) --Bs, g.mono_background_exec();
        }
        function Ws() {
            if (!Us) return;
            const e = new Date().valueOf(),
                t = e + 36e4;
            for (let r = Math.max(e + 1e3, Cs); r < t; r += 1e3) {
                setTimeout(() => {
                    g.mono_set_timeout_exec(), Bs++, zs();
                }, r - e);
            }
            Cs = t;
        }
        function Ls() {
            ++Bs, setTimeout(zs, 0);
        }
        function Hs(e) {
            Ps && (clearTimeout(Ps), (Ps = void 0)),
                (Ps = setTimeout(function () {
                    g.mono_set_timeout_exec();
                }, e));
        }
        class Vs {
            constructor() {
                (this.queue = []), (this.offset = 0);
            }
            getLength() {
                return this.queue.length - this.offset;
            }
            isEmpty() {
                return 0 == this.queue.length;
            }
            enqueue(e) {
                this.queue.push(e);
            }
            dequeue() {
                if (0 === this.queue.length) return;
                const e = this.queue[this.offset];
                return (
                    (this.queue[this.offset] = null),
                    2 * ++this.offset >= this.queue.length && ((this.queue = this.queue.slice(this.offset)), (this.offset = 0)),
                    e
                );
            }
            peek() {
                return this.queue.length > 0 ? this.queue[this.offset] : void 0;
            }
            drain(e) {
                for (; this.getLength(); ) {
                    e(this.dequeue());
                }
            }
        }
        const qs = Symbol.for('wasm ws_pending_send_buffer'),
            Js = Symbol.for('wasm ws_pending_send_buffer_offset'),
            Gs = Symbol.for('wasm ws_pending_send_buffer_type'),
            Ys = Symbol.for('wasm ws_pending_receive_event_queue'),
            Xs = Symbol.for('wasm ws_pending_receive_promise_queue'),
            Zs = Symbol.for('wasm ws_pending_open_promise'),
            Ks = Symbol.for('wasm ws_pending_close_promises'),
            Qs = Symbol.for('wasm ws_pending_send_promises'),
            ei = Symbol.for('wasm ws_is_aborted'),
            ti = Symbol.for('wasm ws_receive_status_ptr');
        let ri,
            ni,
            oi = !1;
        const si = new Uint8Array();
        function ii(e, t, r, n) {
            if (!e || 'string' != typeof e) throw new Error('Assert failed: ERR12: Invalid uri ' + typeof e);
            const o = new globalThis.WebSocket(e, t || void 0),
                { promise_control: s } = Ie();
            (o[Ys] = new Vs()),
                (o[Xs] = new Vs()),
                (o[Zs] = s),
                (o[Qs] = []),
                (o[Ks] = []),
                (o[ti] = r),
                (o.binaryType = 'arraybuffer');
            const i = (e) => {
                o[ei] ||
                    ((function (e, t) {
                        const r = e[Ys],
                            n = e[Xs];
                        if ('string' == typeof t.data)
                            void 0 === ni && (ni = new TextEncoder()), r.enqueue({ type: 0, data: ni.encode(t.data), offset: 0 });
                        else {
                            if ('ArrayBuffer' !== t.data.constructor.name)
                                throw new Error('ERR19: WebSocket receive expected ArrayBuffer');
                            r.enqueue({ type: 1, data: new Uint8Array(t.data), offset: 0 });
                        }
                        if (n.getLength() && r.getLength() > 1) throw new Error('ERR21: Invalid WS state');
                        for (; n.getLength() && r.getLength(); ) {
                            const t = n.dequeue();
                            fi(e, r, t.buffer_ptr, t.buffer_length), t.resolve();
                        }
                        Ws();
                    })(o, e),
                    Ws());
            };
            return (
                o.addEventListener('message', i),
                o.addEventListener(
                    'open',
                    () => {
                        o[ei] || (s.resolve(o), Ws());
                    },
                    { once: !0 },
                ),
                o.addEventListener(
                    'close',
                    (e) => {
                        if ((o.removeEventListener('message', i), o[ei])) return;
                        n && n(e.code, e.reason), s.reject(e.reason);
                        for (const e of o[Ks]) e.resolve();
                        o[Xs].drain((e) => {
                            nt(r, 0), nt(r + 4, 2), nt(r + 8, 1), e.resolve();
                        });
                    },
                    { once: !0 },
                ),
                o.addEventListener(
                    'error',
                    (e) => {
                        s.reject(e.message || 'WebSocket error');
                    },
                    { once: !0 },
                ),
                o
            );
        }
        function ai(e) {
            if (!e) throw new Error('Assert failed: ERR17: expected ws instance');
            return e[Zs].promise;
        }
        function ci(e, r, n, o, s) {
            if (!e) throw new Error('Assert failed: ERR17: expected ws instance');
            const i = (function (e, t, r, n) {
                let o = e[qs],
                    s = 0;
                const i = t.byteLength;
                if (o) {
                    if (((s = e[Js]), (r = e[Gs]), 0 !== i)) {
                        if (s + i > o.length) {
                            const r = new Uint8Array(1.5 * (s + i + 50));
                            r.set(o, 0), r.subarray(s).set(t), (e[qs] = o = r);
                        } else o.subarray(s).set(t);
                        (s += i), (e[Js] = s);
                    }
                } else
                    n
                        ? 0 !== i && ((o = t), (s = i))
                        : (0 !== i && ((o = t.slice()), (s = i), (e[Js] = s), (e[qs] = o)), (e[Gs] = r));
                if (n) {
                    if (0 == s || null == o) return si;
                    if (0 === r) {
                        void 0 === ri && (ri = new TextDecoder('utf-8', { fatal: !1 }));
                        const e =
                            'undefined' != typeof SharedArrayBuffer && o instanceof SharedArrayBuffer
                                ? o.slice(0, s)
                                : o.subarray(0, s);
                        return ri.decode(e);
                    }
                    return o.subarray(0, s);
                }
                return null;
            })(e, new Uint8Array(t.HEAPU8.buffer, r, n), o, s);
            return s && i
                ? (function (e, t) {
                      if ((e.send(t), (e[qs] = null), e.bufferedAmount < 65536)) return null;
                      const { promise: r, promise_control: n } = Ie(),
                          o = e[Qs];
                      o.push(n);
                      let s = 1;
                      const i = () => {
                          if (0 === e.bufferedAmount) n.resolve();
                          else if (e.readyState != WebSocket.OPEN) n.reject('InvalidState: The WebSocket is not connected.');
                          else if (!n.isDone) return globalThis.setTimeout(i, s), void (s = Math.min(1.5 * s, 1e3));
                          const t = o.indexOf(n);
                          t > -1 && o.splice(t, 1);
                      };
                      return globalThis.setTimeout(i, 0), r;
                  })(e, i)
                : null;
        }
        function ui(e, t, r) {
            if (!e) throw new Error('Assert failed: ERR18: expected ws instance');
            const n = e[Ys],
                o = e[Xs],
                s = e.readyState;
            if (s != WebSocket.OPEN && s != WebSocket.CLOSING) throw new Error('InvalidState: The WebSocket is not connected.');
            if (n.getLength()) {
                if (0 != o.getLength()) throw new Error('Assert failed: ERR20: Invalid WS state');
                return fi(e, n, t, r), null;
            }
            const { promise: i, promise_control: a } = Ie(),
                c = a;
            return (c.buffer_ptr = t), (c.buffer_length = r), o.enqueue(c), i;
        }
        function li(e, t, r, n) {
            if (!e) throw new Error('Assert failed: ERR19: expected ws instance');
            if (e.readyState == WebSocket.CLOSED) return null;
            if (n) {
                const { promise: n, promise_control: o } = Ie();
                return e[Ks].push(o), 'string' == typeof r ? e.close(t, r) : e.close(t), n;
            }
            return (
                oi ||
                    ((oi = !0),
                    console.warn(
                        'WARNING: Web browsers do not support closing the output side of a WebSocket. CloseOutputAsync has closed the socket and discarded any incoming messages.',
                    )),
                'string' == typeof r ? e.close(t, r) : e.close(t),
                null
            );
        }
        function _i(e) {
            if (!e) throw new Error('Assert failed: ERR18: expected ws instance');
            e[ei] = !0;
            const t = e[Zs];
            t && t.reject('OperationCanceledException');
            for (const t of e[Ks]) t.reject('OperationCanceledException');
            for (const t of e[Qs]) t.reject('OperationCanceledException');
            e[Xs].drain((e) => {
                e.reject('OperationCanceledException');
            }),
                e.close(1e3, 'Connection was aborted.');
        }
        function fi(e, r, n, o) {
            const s = r.peek(),
                i = Math.min(o, s.data.length - s.offset);
            if (i > 0) {
                const e = s.data.subarray(s.offset, s.offset + i);
                new Uint8Array(t.HEAPU8.buffer, n, o).set(e, 0), (s.offset += i);
            }
            const a = s.data.length === s.offset ? 1 : 0;
            a && r.dequeue();
            const c = e[ti];
            nt(c, i), nt(c + 4, s.type), nt(c + 8, a);
        }
        function di() {
            return {
                mono_wasm_exit: (e) => {
                    t.printErr('MONO_WASM: early exit ' + e);
                },
                mono_wasm_enable_on_demand_gc: g.mono_wasm_enable_on_demand_gc,
                mono_profiler_init_aot: g.mono_profiler_init_aot,
                mono_wasm_exec_regression: g.mono_wasm_exec_regression,
                mono_method_resolve: ys,
                mono_intern_string: jr,
                logging: void 0,
                mono_wasm_stringify_as_error_with_stack: ie,
                mono_wasm_get_loaded_files: no,
                mono_wasm_send_dbg_command_with_parms: R,
                mono_wasm_send_dbg_command: T,
                mono_wasm_get_dbg_command_info: I,
                mono_wasm_get_details: W,
                mono_wasm_release_object: H,
                mono_wasm_call_function_on: z,
                mono_wasm_debugger_resume: $,
                mono_wasm_detach_debugger: F,
                mono_wasm_raise_debug_event: C,
                mono_wasm_change_debugger_log_level: P,
                mono_wasm_debugger_attached: U,
                mono_wasm_runtime_is_ready: m.mono_wasm_runtime_is_ready,
                get_property: wo,
                set_property: ho,
                has_property: go,
                get_typeof_property: yo,
                get_global_this: bo,
                get_dotnet_instance: () => u,
                dynamic_import: Ao,
                mono_wasm_cancel_promise: Be,
                ws_wasm_create: ii,
                ws_wasm_open: ai,
                ws_wasm_send: ci,
                ws_wasm_receive: ui,
                ws_wasm_close: li,
                ws_wasm_abort: _i,
                http_wasm_supports_streaming_response: Ss,
                http_wasm_create_abort_controler: Os,
                http_wasm_abort_request: xs,
                http_wasm_abort_response: Ns,
                http_wasm_fetch: Ds,
                http_wasm_fetch_bytes: js,
                http_wasm_get_response_header_names: Rs,
                http_wasm_get_response_header_values: Ts,
                http_wasm_get_response_bytes: $s,
                http_wasm_get_response_length: Is,
                http_wasm_get_streamed_response_bytes: Fs,
            };
        }
        function mi() {}
        let pi,
            hi = !1,
            wi = !1;
        const gi = Ie(),
            yi = Ie(),
            bi = Ie(),
            vi = Ie(),
            Ei = Ie(),
            Ai = Ie(),
            ki = Ie(),
            Si = Ie(),
            Oi = Ie();
        function xi(e, t) {
            const r = e.instantiateWasm,
                n = e.preInit ? ('function' == typeof e.preInit ? [e.preInit] : e.preInit) : [],
                o = e.preRun ? ('function' == typeof e.preRun ? [e.preRun] : e.preRun) : [],
                s = e.postRun ? ('function' == typeof e.postRun ? [e.postRun] : e.postRun) : [],
                i = e.onRuntimeInitialized ? e.onRuntimeInitialized : () => {};
            (wi = !(
                e.configSrc ||
                (e.config && e.config.assets && -1 != e.config.assets.findIndex((e) => 'assembly' === e.behavior))
            )),
                (e.instantiateWasm = (e, t) => Ni(e, t, r)),
                (e.preInit = [() => ji(n)]),
                (e.preRun = [() => Di(o)]),
                (e.onRuntimeInitialized = () =>
                    (async function (e) {
                        await Ai.promise,
                            m.diagnosticTracing && console.debug('MONO_WASM: onRuntimeInitialized'),
                            ki.promise_control.resolve();
                        try {
                            wi ||
                                (await ro(),
                                await (async function () {
                                    m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_before_user_runtime_initialized');
                                    try {
                                        await (async function () {
                                            try {
                                                Ii('TZ', Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
                                            } catch (e) {
                                                Ii('TZ', 'UTC');
                                            }
                                            for (const e in pi.environmentVariables) {
                                                const t = pi.environmentVariables[e];
                                                if ('string' != typeof t)
                                                    throw new Error(
                                                        `Expected environment variable '${e}' to be a string but it was ${typeof t}: '${t}'`,
                                                    );
                                                Ii(e, t);
                                            }
                                            pi.runtimeOptions && $i(pi.runtimeOptions),
                                                pi.aotProfilerOptions && X(pi.aotProfilerOptions),
                                                pi.coverageProfilerOptions && Z(pi.coverageProfilerOptions);
                                        })(),
                                            Y(),
                                            m.mono_wasm_load_runtime_done || Fi('unused', pi.debugLevel),
                                            m.mono_wasm_runtime_is_ready || N(),
                                            m.mono_wasm_symbols_are_ready || ue('dotnet.js.symbols'),
                                            setTimeout(() => {
                                                Sr.init_fields();
                                            });
                                    } catch (e) {
                                        throw (Ti('MONO_WASM: Error in mono_wasm_before_user_runtime_initialized', e), e);
                                    }
                                })()),
                                pi.runtimeOptions && $i(pi.runtimeOptions);
                            try {
                                e();
                            } catch (e) {
                                throw (Ti('MONO_WASM: user callback onRuntimeInitialized() failed', e), e);
                            }
                            await Ri();
                        } catch (e) {
                            throw (Ti('MONO_WASM: onRuntimeInitializedAsync() failed', e), Mi(e, !0), e);
                        }
                        Si.promise_control.resolve();
                    })(i)),
                (e.postRun = [
                    () =>
                        (async function (e) {
                            await Si.promise, m.diagnosticTracing && console.debug('MONO_WASM: postRunAsync');
                            try {
                                e.map((e) => e());
                            } catch (e) {
                                throw (Ti('MONO_WASM: user callback posRun() failed', e), Mi(e, !0), e);
                            }
                            Oi.promise_control.resolve();
                        })(s),
                ]),
                e.ready
                    .then(async () => {
                        await Oi.promise, gi.promise_control.resolve(t);
                    })
                    .catch((e) => {
                        gi.promise_control.reject(e);
                    }),
                (e.ready = gi.promise),
                e.onAbort || (e.onAbort = () => de);
        }
        function Ni(e, r, n) {
            if (
                (t.configSrc || t.config || n || t.print('MONO_WASM: configSrc nor config was specified'),
                (pi = t.config ? (m.config = t.config) : (m.config = t.config = {})),
                (m.diagnosticTracing = !!pi.diagnosticTracing),
                n)
            ) {
                return n(e, (e, t) => {
                    bi.promise_control.resolve(), r(e, t);
                });
            }
            return (
                (async function (e, r) {
                    try {
                        await Pi(t.configSrc), m.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module');
                        const n = (function (e) {
                            var t;
                            const r = null === (t = m.config.assets) || void 0 === t ? void 0 : t.find((t) => t.behavior == e);
                            if (!r) throw new Error(`Assert failed: Can't find asset for ${e}`);
                            return r.resolvedUrl || (r.resolvedUrl = Kn(r, '')), r;
                        })('dotnetwasm');
                        await Xn(n, !1),
                            await vi.promise,
                            t.addRunDependency('instantiate_wasm_module'),
                            (async function (e, t, r) {
                                if (!(e && e.pendingDownloadInternal && e.pendingDownloadInternal.response))
                                    throw new Error("Assert failed: Can't load dotnet.wasm");
                                const n = await e.pendingDownloadInternal.response,
                                    o = n.headers && n.headers.get ? n.headers.get('Content-Type') : void 0;
                                let s, a;
                                if ('function' == typeof WebAssembly.instantiateStreaming && 'application/wasm' === o) {
                                    m.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module streaming');
                                    const e = await WebAssembly.instantiateStreaming(n, t);
                                    (s = e.instance), (a = e.module);
                                } else {
                                    i &&
                                        'application/wasm' !== o &&
                                        console.warn(
                                            'MONO_WASM: WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.',
                                        );
                                    const e = await n.arrayBuffer();
                                    m.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module buffered');
                                    const r = await WebAssembly.instantiate(e, t);
                                    (s = r.instance), (a = r.module);
                                }
                                r(s, a);
                            })(n, e, r),
                            m.diagnosticTracing && console.debug('MONO_WASM: instantiate_wasm_module done'),
                            bi.promise_control.resolve();
                    } catch (e) {
                        throw (Ti('MONO_WASM: instantiate_wasm_module() failed', e), Mi(e, !0), e);
                    }
                    t.removeRunDependency('instantiate_wasm_module');
                })(e, r),
                []
            );
        }
        function ji(e) {
            t.addRunDependency('mono_pre_init');
            try {
                t.addRunDependency('mono_wasm_pre_init_essential'),
                    m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_essential'),
                    (function () {
                        const e = !!c;
                        for (const r of w) {
                            const n = g,
                                [o, s, i, a, c] = r;
                            if (o || e)
                                n[s] = function (...e) {
                                    const r = t.cwrap(s, i, a, c);
                                    return (n[s] = r), r(...e);
                                };
                            else {
                                const e = t.cwrap(s, i, a, c);
                                n[s] = e;
                            }
                        }
                    })(),
                    (function (e) {
                        Object.assign(e, {
                            mono_wasm_exit: g.mono_wasm_exit,
                            mono_wasm_enable_on_demand_gc: g.mono_wasm_enable_on_demand_gc,
                            mono_profiler_init_aot: g.mono_profiler_init_aot,
                            mono_wasm_exec_regression: g.mono_wasm_exec_regression,
                        });
                    })(r),
                    (function (e) {
                        Object.assign(e, { mono_wasm_add_assembly: g.mono_wasm_add_assembly });
                    })(Rn),
                    (function (e) {
                        Object.assign(e, {
                            mono_obj_array_new: g.mono_wasm_obj_array_new,
                            mono_obj_array_set: g.mono_wasm_obj_array_set,
                            mono_obj_array_new_ref: g.mono_wasm_obj_array_new_ref,
                            mono_obj_array_set_ref: g.mono_wasm_obj_array_set_ref,
                        });
                    })(Tn),
                    t.removeRunDependency('mono_wasm_pre_init_essential'),
                    m.diagnosticTracing && console.debug('MONO_WASM: preInit'),
                    vi.promise_control.resolve(),
                    e.forEach((e) => e());
            } catch (e) {
                throw (Ti('MONO_WASM: user preInint() failed', e), Mi(e, !0), e);
            }
            (async () => {
                try {
                    await (async function () {
                        m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_essential_async'),
                            t.addRunDependency('mono_wasm_pre_init_essential_async'),
                            await (async function () {
                                if (o) {
                                    if (((r.require = await m.requirePromise), globalThis.performance === ao)) {
                                        const { performance: e } = r.require('perf_hooks');
                                        globalThis.performance = e;
                                    }
                                    if ((globalThis.crypto || (globalThis.crypto = {}), !globalThis.crypto.getRandomValues)) {
                                        let e;
                                        try {
                                            e = r.require('node:crypto');
                                        } catch (e) {}
                                        e
                                            ? e.webcrypto
                                                ? (globalThis.crypto = e.webcrypto)
                                                : e.randomBytes &&
                                                  (globalThis.crypto.getRandomValues = (t) => {
                                                      t && t.set(e.randomBytes(t.length));
                                                  })
                                            : (globalThis.crypto.getRandomValues = () => {
                                                  throw new Error(
                                                      "Using node without crypto support. To enable current operation, either provide polyfill for 'globalThis.crypto.getRandomValues' or enable 'node:crypto' module.",
                                                  );
                                              });
                                    }
                                }
                            })(),
                            await Pi(t.configSrc),
                            t.removeRunDependency('mono_wasm_pre_init_essential_async');
                    })(),
                        wi ||
                            (await (async function () {
                                m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_pre_init_full'),
                                    t.addRunDependency('mono_wasm_pre_init_full'),
                                    await Yn(),
                                    t.removeRunDependency('mono_wasm_pre_init_full');
                            })());
                } catch (e) {
                    throw (Mi(e, !0), e);
                }
                Ei.promise_control.resolve(), t.removeRunDependency('mono_pre_init');
            })();
        }
        async function Di(e) {
            t.addRunDependency('mono_pre_run_async'),
                await bi.promise,
                await Ei.promise,
                m.diagnosticTracing && console.debug('MONO_WASM: preRunAsync');
            try {
                e.map((e) => e());
            } catch (e) {
                throw (Ti('MONO_WASM: user callback preRun() failed', e), Mi(e, !0), e);
            }
            Ai.promise_control.resolve(), t.removeRunDependency('mono_pre_run_async');
        }
        function Mi(e, t) {
            m.diagnosticTracing && console.trace('MONO_WASM: abort_startup'),
                gi.promise_control.reject(e),
                bi.promise_control.reject(e),
                vi.promise_control.reject(e),
                Ei.promise_control.reject(e),
                Ai.promise_control.reject(e),
                ki.promise_control.reject(e),
                Si.promise_control.reject(e),
                Oi.promise_control.reject(e),
                t && me(1, e);
        }
        async function Ri() {
            m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_after_user_runtime_initialized');
            try {
                if (!t.disableDotnet6Compatibility && t.exports) {
                    const e = globalThis;
                    for (let r = 0; r < t.exports.length; ++r) {
                        const n = t.exports[r],
                            o = t[n];
                        null != o
                            ? (e[n] = o)
                            : console.warn(`MONO_WASM: The exported symbol ${n} could not be found in the emscripten module`);
                    }
                }
                if ((m.diagnosticTracing && console.debug('MONO_WASM: Initializing mono runtime'), t.onDotnetReady))
                    try {
                        await t.onDotnetReady();
                    } catch (e) {
                        throw (Ti('MONO_WASM: onDotnetReady () failed', e), e);
                    }
            } catch (e) {
                throw (Ti('MONO_WASM: Error in mono_wasm_after_user_runtime_initialized', e), e);
            }
        }
        function Ti(e, r) {
            t.printErr(`${e}: ${JSON.stringify(r)}`), r.stack && (t.printErr('MONO_WASM: Stacktrace: \n'), t.printErr(r.stack));
        }
        function Ii(e, t) {
            g.mono_wasm_setenv(e, t);
        }
        function $i(e) {
            if (!Array.isArray(e)) throw new Error('Expected runtimeOptions to be an array of strings');
            const r = t._malloc(4 * e.length);
            let n = 0;
            for (let o = 0; o < e.length; ++o) {
                const s = e[o];
                if ('string' != typeof s) throw new Error('Expected runtimeOptions to be an array of strings');
                t.setValue(r + 4 * n, g.mono_wasm_strdup(s), 'i32'), (n += 1);
            }
            g.mono_wasm_parse_runtime_options(e.length, r);
        }
        function Fi(e, r) {
            if ((m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_load_runtime'), !m.mono_wasm_load_runtime_done)) {
                m.mono_wasm_load_runtime_done = !0;
                try {
                    null == r && ((r = 0), pi && pi.debugLevel && (r = 0 + r)),
                        g.mono_wasm_load_runtime(e || 'unused', r),
                        (m.waitForDebugger = pi.waitForDebugger),
                        m.mono_wasm_bindings_is_ready ||
                            (function () {
                                if (
                                    (m.diagnosticTracing && console.debug('MONO_WASM: bindings_init'),
                                    !m.mono_wasm_bindings_is_ready)
                                ) {
                                    m.mono_wasm_bindings_is_ready = !0;
                                    try {
                                        (function () {
                                            const e = t,
                                                r = 'System.Runtime.InteropServices.JavaScript';
                                            if (
                                                ((m.runtime_interop_module = g.mono_wasm_assembly_load(r)),
                                                !m.runtime_interop_module)
                                            )
                                                throw "Can't find bindings module assembly: " + r;
                                            if (
                                                ((m.runtime_interop_namespace = 'System.Runtime.InteropServices.JavaScript'),
                                                (m.runtime_interop_exports_classname = 'JavaScriptExports'),
                                                (m.runtime_interop_exports_class = g.mono_wasm_assembly_find_class(
                                                    m.runtime_interop_module,
                                                    m.runtime_interop_namespace,
                                                    m.runtime_interop_exports_classname,
                                                )),
                                                !m.runtime_interop_exports_class)
                                            )
                                                throw (
                                                    "Can't find " +
                                                    m.runtime_interop_namespace +
                                                    '.' +
                                                    m.runtime_interop_exports_classname +
                                                    ' class'
                                                );
                                            const n = g.mono_wasm_assembly_find_method(
                                                    m.runtime_interop_exports_class,
                                                    'InstallSynchronizationContext',
                                                    -1,
                                                ),
                                                o = Mo('CallEntrypoint');
                                            if (!o) throw new Error("Assert failed: Can't find CallEntrypoint method");
                                            const s = Mo('ReleaseJSOwnedObjectByGCHandle');
                                            if (!s)
                                                throw new Error(
                                                    "Assert failed: Can't find ReleaseJSOwnedObjectByGCHandle method",
                                                );
                                            const i = Mo('CreateTaskCallback');
                                            if (!i) throw new Error("Assert failed: Can't find CreateTaskCallback method");
                                            const a = Mo('CompleteTask');
                                            if (!a) throw new Error("Assert failed: Can't find CompleteTask method");
                                            const u = Mo('CallDelegate');
                                            if (!u) throw new Error("Assert failed: Can't find CallDelegate method");
                                            const l = Mo('GetManagedStackTrace');
                                            if (!l) throw new Error("Assert failed: Can't find GetManagedStackTrace method");
                                            (m.javaScriptExports.call_entry_point = (t, r) => {
                                                const n = e.stackSave();
                                                try {
                                                    const s = Lt(4),
                                                        i = Ht(s, 1),
                                                        a = Ht(s, 2),
                                                        c = Ht(s, 3);
                                                    return (
                                                        Hr(a, t),
                                                        r && 0 == r.length && (r = void 0),
                                                        nn(c, r, yr.String),
                                                        xo(o, s),
                                                        En(i, 0, dn) || Promise.resolve(0)
                                                    );
                                                } finally {
                                                    e.stackRestore(n);
                                                }
                                            }),
                                                (m.javaScriptExports.release_js_owned_object_by_gc_handle = (t) => {
                                                    if (!t) throw new Error('Assert failed: Must be valid gc_handle');
                                                    const r = e.stackSave();
                                                    try {
                                                        const n = Lt(3),
                                                            o = Ht(n, 2);
                                                        er(o, yr.Object), ur(o, t), xo(s, n);
                                                    } finally {
                                                        e.stackRestore(r);
                                                    }
                                                }),
                                                (m.javaScriptExports.create_task_callback = () => {
                                                    const t = e.stackSave();
                                                    try {
                                                        const r = Lt(2);
                                                        return xo(i, r), cr(Ht(r, 1));
                                                    } finally {
                                                        e.stackRestore(t);
                                                    }
                                                }),
                                                (m.javaScriptExports.complete_task = (t, r, n, o) => {
                                                    const s = e.stackSave();
                                                    try {
                                                        const i = Lt(5),
                                                            c = Ht(i, 2);
                                                        er(c, yr.Object), ur(c, t);
                                                        const u = Ht(i, 3);
                                                        if (r) Qr(u, r);
                                                        else {
                                                            er(u, yr.None);
                                                            const e = Ht(i, 4);
                                                            if (!o) throw new Error('Assert failed: res_converter missing');
                                                            o(e, n);
                                                        }
                                                        xo(a, i);
                                                    } finally {
                                                        e.stackRestore(s);
                                                    }
                                                }),
                                                (m.javaScriptExports.call_delegate = (t, r, n, o, s, i, a, c) => {
                                                    const l = e.stackSave();
                                                    try {
                                                        const _ = Lt(6),
                                                            f = Ht(_, 2);
                                                        if (
                                                            (er(f, yr.Object),
                                                            ur(f, t),
                                                            i && i(Ht(_, 3), r),
                                                            a && a(Ht(_, 4), n),
                                                            c && c(Ht(_, 5), o),
                                                            xo(u, _),
                                                            s)
                                                        )
                                                            return s(Ht(_, 1));
                                                    } finally {
                                                        e.stackRestore(l);
                                                    }
                                                }),
                                                (m.javaScriptExports.get_managed_stack_trace = (t) => {
                                                    const r = e.stackSave();
                                                    try {
                                                        const n = Lt(3),
                                                            o = Ht(n, 2);
                                                        return er(o, yr.Exception), ur(o, t), xo(l, n), kn(Ht(n, 1));
                                                    } finally {
                                                        e.stackRestore(r);
                                                    }
                                                }),
                                                n &&
                                                    ((m.javaScriptExports.install_synchronization_context = () => {
                                                        const t = e.stackSave();
                                                        try {
                                                            const r = Lt(2);
                                                            xo(n, r);
                                                        } finally {
                                                            e.stackRestore(t);
                                                        }
                                                    }),
                                                    c || m.javaScriptExports.install_synchronization_context());
                                        })(),
                                            ks(),
                                            0 == Ct.size &&
                                                (Ct.set(yr.Array, Nn),
                                                Ct.set(yr.Span, Dn),
                                                Ct.set(yr.ArraySegment, Mn),
                                                Ct.set(yr.Boolean, un),
                                                Ct.set(yr.Byte, ln),
                                                Ct.set(yr.Char, _n),
                                                Ct.set(yr.Int16, fn),
                                                Ct.set(yr.Int32, dn),
                                                Ct.set(yr.Int52, mn),
                                                Ct.set(yr.BigInt64, pn),
                                                Ct.set(yr.Single, hn),
                                                Ct.set(yr.IntPtr, gn),
                                                Ct.set(yr.Double, wn),
                                                Ct.set(yr.String, kn),
                                                Ct.set(yr.Exception, Sn),
                                                Ct.set(yr.JSException, Sn),
                                                Ct.set(yr.JSObject, On),
                                                Ct.set(yr.Object, xn),
                                                Ct.set(yr.DateTime, bn),
                                                Ct.set(yr.DateTimeOffset, bn),
                                                Ct.set(yr.Task, En),
                                                Ct.set(yr.Action, vn),
                                                Ct.set(yr.Function, vn),
                                                Ct.set(yr.None, yn),
                                                Ct.set(yr.Void, yn),
                                                Ct.set(yr.Discard, yn)),
                                            0 == Ut.size &&
                                                (Ut.set(yr.Array, rn),
                                                Ut.set(yr.Span, on),
                                                Ut.set(yr.ArraySegment, sn),
                                                Ut.set(yr.Boolean, $r),
                                                Ut.set(yr.Byte, Fr),
                                                Ut.set(yr.Char, Pr),
                                                Ut.set(yr.Int16, Cr),
                                                Ut.set(yr.Int32, Ur),
                                                Ut.set(yr.Int52, Br),
                                                Ut.set(yr.BigInt64, zr),
                                                Ut.set(yr.Double, Wr),
                                                Ut.set(yr.Single, Lr),
                                                Ut.set(yr.IntPtr, Hr),
                                                Ut.set(yr.DateTime, Vr),
                                                Ut.set(yr.DateTimeOffset, qr),
                                                Ut.set(yr.String, Jr),
                                                Ut.set(yr.Exception, Qr),
                                                Ut.set(yr.JSException, Qr),
                                                Ut.set(yr.JSObject, en),
                                                Ut.set(yr.Object, tn),
                                                Ut.set(yr.Task, Kr),
                                                Ut.set(yr.Action, Xr),
                                                Ut.set(yr.Function, Xr),
                                                Ut.set(yr.None, Yr),
                                                Ut.set(yr.Discard, Yr),
                                                Ut.set(yr.Void, Yr)),
                                            (m._i52_error_scratch_buffer = t._malloc(4));
                                    } catch (e) {
                                        throw (Ti('MONO_WASM: Error in bindings_init', e), e);
                                    }
                                }
                            })();
                } catch (e) {
                    if ((Ti('MONO_WASM: mono_wasm_load_runtime () failed', e), Mi(e, !1), s || o)) {
                        (0, g.mono_wasm_exit)(1);
                    }
                    throw e;
                }
            }
        }
        async function Pi(e) {
            if (hi) await yi.promise;
            else {
                if (((hi = !0), !e)) return r(), void yi.promise_control.resolve();
                m.diagnosticTracing && console.debug('MONO_WASM: mono_wasm_load_config');
                try {
                    const n = m.locateFile(e),
                        o = await m.fetch_like(n),
                        s = (await o.json()) || {};
                    if (s.environmentVariables && 'object' != typeof s.environmentVariables)
                        throw new Error('Expected config.environmentVariables to be unset or a dictionary-style object');
                    if (
                        ((s.assets = [...(s.assets || []), ...(pi.assets || [])]),
                        (s.environmentVariables = { ...(s.environmentVariables || {}), ...(pi.environmentVariables || {}) }),
                        (pi = m.config = t.config = Object.assign(t.config, s)),
                        r(),
                        t.onConfigLoaded)
                    )
                        try {
                            await t.onConfigLoaded(m.config), r();
                        } catch (e) {
                            throw (Ti('MONO_WASM: onConfigLoaded() failed', e), e);
                        }
                    yi.promise_control.resolve();
                } catch (r) {
                    const n = `Failed to load config file ${e} ${r}`;
                    throw (Mi(n, !0), (pi = m.config = t.config = { message: n, error: r, isError: !0 }), r);
                }
            }
            function r() {
                (pi.environmentVariables = pi.environmentVariables || {}),
                    (pi.assets = pi.assets || []),
                    (pi.runtimeOptions = pi.runtimeOptions || []),
                    (pi.globalizationMode = pi.globalizationMode || 'auto'),
                    pi.debugLevel,
                    pi.diagnosticTracing,
                    (m.diagnosticTracing = !!m.config.diagnosticTracing);
            }
        }
        function Ci(e, r, n, o, s) {
            if (!0 !== m.mono_wasm_runtime_is_ready) return;
            const i = 0 !== e ? t.UTF8ToString(e).concat('.dll') : '',
                a = y(new Uint8Array(t.HEAPU8.buffer, r, n));
            let c;
            if (o) {
                c = y(new Uint8Array(t.HEAPU8.buffer, o, s));
            }
            C({ eventName: 'AssemblyLoaded', assembly_name: i, assembly_b64: a, pdb_b64: c });
        }
        async function Ui(e) {
            (pi = t.config = m.config = Object.assign(m.config || {}, e || {})), await Yn(), wi || (await ro());
        }
        var Bi, zi;
        (function (e) {
            (e[(e.Sending = 0)] = 'Sending'), (e[(e.Closed = 1)] = 'Closed'), (e[(e.Error = 2)] = 'Error');
        })(Bi || (Bi = {})),
            (function (e) {
                (e[(e.Idle = 0)] = 'Idle'), (e[(e.PartialCommand = 1)] = 'PartialCommand'), (e[(e.Error = 2)] = 'Error');
            })(zi || (zi = {}));
        const Wi = new (class {
            constructor() {
                this.moduleConfig = { disableDotnet6Compatibility: !0, configSrc: './mono-config.json', config: m.config };
            }
            withModuleConfig(e) {
                try {
                    return Object.assign(this.moduleConfig, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withConsoleForwarding() {
                try {
                    const e = { forwardConsoleLogsToWS: !0 };
                    return Object.assign(this.moduleConfig.config, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withAsyncFlushOnExit() {
                try {
                    const e = { asyncFlushOnExit: !0 };
                    return Object.assign(this.moduleConfig.config, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withExitCodeLogging() {
                try {
                    const e = { logExitCode: !0 };
                    return Object.assign(this.moduleConfig.config, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withElementOnExit() {
                try {
                    const e = { appendElementOnExit: !0 };
                    return Object.assign(this.moduleConfig.config, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withWaitingForDebugger(e) {
                try {
                    const t = { waitForDebugger: e };
                    return Object.assign(this.moduleConfig.config, t), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withConfig(e) {
                try {
                    const t = { ...e };
                    return (
                        (t.assets = [...(this.moduleConfig.config.assets || []), ...(t.assets || [])]),
                        (t.environmentVariables = {
                            ...(this.moduleConfig.config.environmentVariables || {}),
                            ...(t.environmentVariables || {}),
                        }),
                        Object.assign(this.moduleConfig.config, t),
                        this
                    );
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withConfigSrc(e) {
                try {
                    if (!e || 'string' != typeof e) throw new Error('Assert failed: must be file path or URL');
                    return Object.assign(this.moduleConfig, { configSrc: e }), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withVirtualWorkingDirectory(e) {
                try {
                    if (!e || 'string' != typeof e) throw new Error('Assert failed: must be directory path');
                    return (this.virtualWorkingDirectory = e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withEnvironmentVariable(e, t) {
                try {
                    return (this.moduleConfig.config.environmentVariables[e] = t), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withEnvironmentVariables(e) {
                try {
                    if (!e || 'object' != typeof e) throw new Error('Assert failed: must be dictionary object');
                    return Object.assign(this.moduleConfig.config.environmentVariables, e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withDiagnosticTracing(e) {
                try {
                    if ('boolean' != typeof e) throw new Error('Assert failed: must be boolean');
                    return (this.moduleConfig.config.diagnosticTracing = e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withDebugging(e) {
                try {
                    if (!e || 'number' != typeof e) throw new Error('Assert failed: must be number');
                    return (this.moduleConfig.config.debugLevel = e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withApplicationArguments(...e) {
                try {
                    if (!e || !Array.isArray(e)) throw new Error('Assert failed: must be array of strings');
                    return (this.applicationArguments = e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withRuntimeOptions(e) {
                try {
                    if (!e || !Array.isArray(e)) throw new Error('Assert failed: must be array of strings');
                    return Object.assign(this.moduleConfig, { runtimeOptions: e }), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withMainAssembly(e) {
                try {
                    return (this.moduleConfig.config.mainAssemblyName = e), this;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            withApplicationArgumentsFromQuery() {
                try {
                    if (void 0 !== globalThis.URLSearchParams) {
                        const e = new URLSearchParams(window.location.search).getAll('arg');
                        return this.withApplicationArguments(...e);
                    }
                    throw new Error('URLSearchParams is supported');
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            async create() {
                try {
                    if (!this.instance) {
                        if (
                            (i &&
                                !c &&
                                this.moduleConfig.config.forwardConsoleLogsToWS &&
                                void 0 !== globalThis.WebSocket &&
                                (function (e, t, r) {
                                    const n = { log: t.log, error: t.error },
                                        o = t;
                                    function s(t, r, o) {
                                        return function (...s) {
                                            try {
                                                let n = s[0];
                                                if (void 0 === n) n = 'undefined';
                                                else if (null === n) n = 'null';
                                                else if ('function' == typeof n) n = n.toString();
                                                else if ('string' != typeof n)
                                                    try {
                                                        n = JSON.stringify(n);
                                                    } catch (e) {
                                                        n = n.toString();
                                                    }
                                                'string' == typeof n && 'main' !== e && (n = `[${e}] ${n}`),
                                                    r(
                                                        o
                                                            ? JSON.stringify({ method: t, payload: n, arguments: s })
                                                            : [t + n, ...s.slice(1)],
                                                    );
                                            } catch (e) {
                                                n.error(`proxyConsole failed: ${e}`);
                                            }
                                        };
                                    }
                                    const i = ['debug', 'trace', 'warn', 'info', 'error'];
                                    for (const e of i) 'function' != typeof o[e] && (o[e] = s(`console.${e}: `, t.log, !1));
                                    const a = `${r}/console`.replace('https://', 'wss://').replace('http://', 'ws://');
                                    (ce = new WebSocket(a)),
                                        ce.addEventListener('open', () => {
                                            n.log(`browser: [${e}] Console websocket connected.`);
                                        }),
                                        ce.addEventListener('error', (t) => {
                                            n.error(`[${e}] websocket error: ${t}`, t);
                                        }),
                                        ce.addEventListener('close', (t) => {
                                            n.error(`[${e}] websocket closed: ${t}`, t);
                                        });
                                    const c = (e) => {
                                        ce.readyState === WebSocket.OPEN ? ce.send(e) : n.log(e);
                                    };
                                    for (const e of ['log', ...i]) o[e] = s(`console.${e}`, c, !0);
                                })('main', globalThis.console, globalThis.location.origin),
                            o)
                        ) {
                            const e = await import('process');
                            if (e.versions.node.split('.')[0] < 14)
                                throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}'`);
                        }
                        if (!this.moduleConfig) throw new Error('Assert failed: Null moduleConfig');
                        if (!this.moduleConfig.config) throw new Error('Assert failed: Null moduleConfig.config');
                        this.instance = await _(this.moduleConfig);
                    }
                    if (this.virtualWorkingDirectory) {
                        const e = this.instance.Module.FS,
                            t = e.stat(this.virtualWorkingDirectory);
                        if (!t || !e.isDir(t.mode))
                            throw new Error(`Assert failed: Could not find working directory ${this.virtualWorkingDirectory}`);
                        e.chdir(this.virtualWorkingDirectory);
                    }
                    return this.instance;
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
            async run() {
                try {
                    if (!this.moduleConfig.config) throw new Error('Assert failed: Null moduleConfig.config');
                    if ((this.instance || (await this.create()), !this.moduleConfig.config.mainAssemblyName))
                        throw new Error('Assert failed: Null moduleConfig.config.mainAssemblyName');
                    if (!this.applicationArguments)
                        if (o) {
                            const e = await import('process');
                            this.applicationArguments = e.argv.slice(2);
                        } else this.applicationArguments = [];
                    return this.instance.runMainAndExit(this.moduleConfig.config.mainAssemblyName, this.applicationArguments);
                } catch (e) {
                    throw (me(1, e), e);
                }
            }
        })();
        const Li = function (t, r, n, o) {
                const s = r.module,
                    i = globalThis;
                f(t, r),
                    (function (e) {
                        (Rn = e.mono), (Tn = e.binding);
                    })(r),
                    io(n),
                    Object.assign(r.mono, {
                        mono_wasm_setenv: Ii,
                        mono_wasm_load_bytes_into_heap: kt,
                        mono_wasm_load_icu_data: J,
                        mono_wasm_runtime_ready: N,
                        mono_wasm_load_data_archive: to,
                        mono_wasm_load_config: Pi,
                        mono_load_runtime_and_bcl_args: Ui,
                        mono_wasm_new_root_buffer: Mt,
                        mono_wasm_new_root: Tt,
                        mono_wasm_new_external_root: Rt,
                        mono_wasm_release_roots: It,
                        mono_run_main: _e,
                        mono_run_main_and_exit: le,
                        mono_wasm_add_assembly: null,
                        mono_wasm_load_runtime: Fi,
                        config: m.config,
                        loaded_files: [],
                        setB32: Ye,
                        setI8: et,
                        setI16: tt,
                        setI32: nt,
                        setI52: st,
                        setU52: it,
                        setI64Big: at,
                        setU8: Xe,
                        setU16: Ze,
                        setU32: Qe,
                        setF32: ct,
                        setF64: ut,
                        getB32: lt,
                        getI8: mt,
                        getI16: pt,
                        getI32: ht,
                        getI52: wt,
                        getU52: gt,
                        getI64Big: yt,
                        getU8: _t,
                        getU16: ft,
                        getU32: dt,
                        getF32: bt,
                        getF64: vt,
                    }),
                    Object.assign(r.binding, {
                        bind_static_method: ts,
                        call_assembly_entry_point: ns,
                        mono_obj_array_new: null,
                        mono_obj_array_set: null,
                        js_string_to_mono_string: Tr,
                        js_typed_array_to_array: Bo,
                        mono_array_to_js_array: Go,
                        js_to_mono_obj: Fo,
                        conv_string: xr,
                        unbox_mono_obj: Ho,
                        mono_obj_array_new_ref: null,
                        mono_obj_array_set_ref: null,
                        js_string_to_mono_string_root: Mr,
                        js_typed_array_to_array_root: Uo,
                        js_to_mono_obj_root: Po,
                        conv_string_root: Nr,
                        unbox_mono_obj_root: Jo,
                        mono_array_root_to_js_array: Xo,
                    }),
                    Object.assign(r.internal, di()),
                    Object.assign(r.internal, di());
                const a = {
                    runMain: _e,
                    runMainAndExit: le,
                    setEnvironmentVariable: Ii,
                    getAssemblyExports: jo,
                    setModuleImports: mo,
                    getConfig: () => m.config,
                    setHeapB32: Ye,
                    setHeapU8: Xe,
                    setHeapU16: Ze,
                    setHeapU32: Qe,
                    setHeapI8: et,
                    setHeapI16: tt,
                    setHeapI32: nt,
                    setHeapI52: st,
                    setHeapU52: it,
                    setHeapI64Big: at,
                    setHeapF32: ct,
                    setHeapF64: ut,
                    getHeapB32: lt,
                    getHeapU8: _t,
                    getHeapU16: ft,
                    getHeapU32: dt,
                    getHeapI8: mt,
                    getHeapI16: pt,
                    getHeapI32: ht,
                    getHeapI52: wt,
                    getHeapU52: gt,
                    getHeapI64Big: yt,
                    getHeapF32: bt,
                    getHeapF64: vt,
                };
                if (
                    ((e.__linker_exports = {
                        mono_set_timeout: Hs,
                        mono_wasm_asm_loaded: Ci,
                        mono_wasm_fire_debugger_agent_message: j,
                        mono_wasm_debugger_log: V,
                        mono_wasm_add_dbg_command_received: D,
                        schedule_background_exec: Ls,
                        mono_wasm_invoke_js_blazor: ls,
                        mono_wasm_trace_logger: ae,
                        mono_wasm_set_entrypoint_breakpoint: B,
                        mono_wasm_event_pipe_early_startup_callback: mi,
                        mono_wasm_invoke_js_with_args_ref: os,
                        mono_wasm_get_object_property_ref: ss,
                        mono_wasm_set_object_property_ref: is,
                        mono_wasm_get_by_index_ref: as,
                        mono_wasm_set_by_index_ref: cs,
                        mono_wasm_get_global_object_ref: us,
                        mono_wasm_create_cs_owned_object_ref: Zo,
                        mono_wasm_release_cs_owned_object: Ne,
                        mono_wasm_typed_array_to_array_ref: Wo,
                        mono_wasm_typed_array_from_ref: Ro,
                        mono_wasm_bind_js_function: _o,
                        mono_wasm_invoke_bound_function: fo,
                        mono_wasm_bind_cs_function: Oo,
                        mono_wasm_marshal_promise: An,
                        mono_wasm_load_icu_data: J,
                        mono_wasm_get_icudt_name: G,
                    }),
                    Object.assign(u, {
                        MONO: r.mono,
                        BINDING: r.binding,
                        INTERNAL: r.internal,
                        IMPORTS: r.marshaled_imports,
                        Module: s,
                        runtimeBuildInfo: { productVersion: '7.0.11', buildConfiguration: 'Release' },
                        ...a,
                    }),
                    Object.assign(o, a),
                    r.module.__undefinedConfig && ((s.disableDotnet6Compatibility = !0), (s.configSrc = './mono-config.json')),
                    s.print || (s.print = console.log.bind(console)),
                    s.printErr || (s.printErr = console.error.bind(console)),
                    void 0 === s.disableDotnet6Compatibility && (s.disableDotnet6Compatibility = !0),
                    t.isGlobal || !s.disableDotnet6Compatibility)
                ) {
                    Object.assign(s, u),
                        (s.mono_bind_static_method = (e, t) => (
                            console.warn(
                                'MONO_WASM: Module.mono_bind_static_method is obsolete, please use [JSExportAttribute] interop instead',
                            ),
                            ts(e, t)
                        ));
                    const e = (e, t) => {
                        if (void 0 !== i[e]) return;
                        let r;
                        Object.defineProperty(globalThis, e, {
                            get: () => {
                                if (h(r)) {
                                    const n = new Error().stack,
                                        o = n ? n.substr(n.indexOf('\n', 8) + 1) : '';
                                    console.warn(`MONO_WASM: global ${e} is obsolete, please use Module.${e} instead ${o}`),
                                        (r = t());
                                }
                                return r;
                            },
                        });
                    };
                    (i.MONO = r.mono),
                        (i.BINDING = r.binding),
                        (i.INTERNAL = r.internal),
                        t.isGlobal || (i.Module = s),
                        e('cwrap', () => s.cwrap),
                        e('addRunDependency', () => s.addRunDependency),
                        e('removeRunDependency', () => s.removeRunDependency);
                }
                let c;
                return (
                    i.getDotnetRuntime
                        ? (c = i.getDotnetRuntime.__list)
                        : ((i.getDotnetRuntime = (e) => i.getDotnetRuntime.__list.getRuntime(e)),
                          (i.getDotnetRuntime.__list = c = new Vi())),
                    c.registerRuntime(u),
                    xi(s, u),
                    u
                );
            },
            Hi = function (e, t) {
                d(t),
                    Object.assign(l, { dotnet: Wi, exit: me }),
                    (function (e) {
                        _ = e;
                    })(e);
            };
        e.__linker_exports = null;
        class Vi {
            constructor() {
                this.list = {};
            }
            registerRuntime(e) {
                return (e.runtimeId = Object.keys(this.list).length), (this.list[e.runtimeId] = we(e)), e.runtimeId;
            }
            getRuntime(e) {
                const t = this.list[e];
                return t ? t.deref() : void 0;
            }
        }
        return (
            (e.__initializeImportsAndExports = Li),
            (e.__setEmscriptenEntrypoint = Hi),
            (e.moduleExports = l),
            Object.defineProperty(e, '__esModule', { value: !0 }),
            e
        );
    })({}),
    createDotnetRuntime = (() => {
        var e = import.meta.url;
        return function (t) {
            var r,
                n,
                o = void 0 !== (t = t || {}) ? t : {};
            o.ready = new Promise(function (e, t) {
                (r = e), (n = t);
            });
            var s = s || void 0,
                i = i || '',
                a = { MONO, BINDING, INTERNAL, IMPORTS };
            if ('function' == typeof t) {
                a.Module = o = { ready: o.ready };
                const e = t(a);
                if (e.ready) throw new Error("MONO_WASM: Module.ready couldn't be redefined.");
                Object.assign(o, e), (t = o).locateFile || (t.locateFile = t.__locateFile = (e) => E + e);
            } else {
                if ('object' != typeof t)
                    throw new Error("MONO_WASM: Can't use moduleFactory callback of createDotnetRuntime function.");
                (a.Module = o = { ready: o.ready, __undefinedConfig: 1 === Object.keys(t).length }),
                    Object.assign(o, t),
                    (t = o).locateFile || (t.locateFile = t.__locateFile = (e) => E + e);
            }
            var c,
                u,
                l,
                _,
                f,
                d,
                m = Object.assign({}, o),
                p = [],
                h = './this.program',
                w = (e, t) => {
                    throw t;
                },
                g = 'object' == typeof window,
                y = 'function' == typeof importScripts,
                b = 'object' == typeof process && 'object' == typeof process.versions && 'string' == typeof process.versions.node,
                v = !g && !b && !y,
                E = '';
            function A(e) {
                return o.locateFile ? o.locateFile(e, E) : E + e;
            }
            function k(e) {
                if (e instanceof vo) return;
                O('exiting due to exception: ' + e);
            }
            b
                ? ((E = y ? s('path').dirname(E) + '/' : i + '/'),
                  (d = () => {
                      f || ((_ = s('fs')), (f = s('path')));
                  }),
                  (c = function (e, t) {
                      return d(), (e = f.normalize(e)), _.readFileSync(e, t ? void 0 : 'utf8');
                  }),
                  (l = (e) => {
                      var t = c(e, !0);
                      return t.buffer || (t = new Uint8Array(t)), t;
                  }),
                  (u = (e, t, r) => {
                      d(),
                          (e = f.normalize(e)),
                          _.readFile(e, function (e, n) {
                              e ? r(e) : t(n.buffer);
                          });
                  }),
                  process.argv.length > 1 && (h = process.argv[1].replace(/\\/g, '/')),
                  (p = process.argv.slice(2)),
                  process.on('uncaughtException', function (e) {
                      if (!(e instanceof vo)) throw e;
                  }),
                  process.on('unhandledRejection', function (e) {
                      throw e;
                  }),
                  (w = (e, t) => {
                      if (ae()) throw ((process.exitCode = e), t);
                      k(t), process.exit(e);
                  }),
                  (o.inspect = function () {
                      return '[Emscripten Module object]';
                  }))
                : v
                ? ('undefined' != typeof read &&
                      (c = function (e) {
                          return read(e);
                      }),
                  (l = function (e) {
                      let t;
                      return 'function' == typeof readbuffer
                          ? new Uint8Array(readbuffer(e))
                          : ((t = read(e, 'binary')), I('object' == typeof t), t);
                  }),
                  (u = function (e, t, r) {
                      setTimeout(() => t(l(e)), 0);
                  }),
                  'undefined' != typeof scriptArgs ? (p = scriptArgs) : void 0 !== arguments && (p = arguments),
                  'function' == typeof quit &&
                      (w = (e, t) => {
                          k(t), quit(e);
                      }),
                  'undefined' != typeof print &&
                      ('undefined' == typeof console && (console = {}),
                      (console.log = print),
                      (console.warn = console.error = 'undefined' != typeof printErr ? printErr : print)))
                : (g || y) &&
                  (y
                      ? (E = self.location.href)
                      : 'undefined' != typeof document && document.currentScript && (E = document.currentScript.src),
                  e && (E = e),
                  (E = 0 !== E.indexOf('blob:') ? E.substr(0, E.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
                  (c = (e) => {
                      var t = new XMLHttpRequest();
                      return t.open('GET', e, !1), t.send(null), t.responseText;
                  }),
                  y &&
                      (l = (e) => {
                          var t = new XMLHttpRequest();
                          return t.open('GET', e, !1), (t.responseType = 'arraybuffer'), t.send(null), new Uint8Array(t.response);
                      }),
                  (u = (e, t, r) => {
                      var n = new XMLHttpRequest();
                      n.open('GET', e, !0),
                          (n.responseType = 'arraybuffer'),
                          (n.onload = () => {
                              200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
                          }),
                          (n.onerror = r),
                          n.send(null);
                  }));
            var S = o.print || console.log.bind(console),
                O = o.printErr || console.warn.bind(console);
            Object.assign(o, m),
                (m = null),
                o.arguments && (p = o.arguments),
                o.thisProgram && (h = o.thisProgram),
                o.quit && (w = o.quit);
            var x,
                N = 0,
                j = (e) => {
                    N = e;
                },
                D = () => N;
            o.wasmBinary && (x = o.wasmBinary);
            var M,
                R = o.noExitRuntime || !0;
            'object' != typeof WebAssembly && ye('no native wasm support detected');
            var T = !1;
            function I(e, t) {
                e || ye(t);
            }
            function $(e) {
                return o['_' + e];
            }
            function F(e, t, r, n, o) {
                var s = {
                    string: function (e) {
                        var t = 0;
                        if (null != e && 0 !== e) {
                            var r = 1 + (e.length << 2);
                            Z(e, (t = Nn(r)), r);
                        }
                        return t;
                    },
                    array: function (e) {
                        var t = Nn(e.length);
                        return ee(e, t), t;
                    },
                };
                var i = $(e),
                    a = [],
                    c = 0;
                if (n)
                    for (var u = 0; u < n.length; u++) {
                        var l = s[r[u]];
                        l ? (0 === c && (c = On()), (a[u] = l(n[u]))) : (a[u] = n[u]);
                    }
                var _ = i.apply(null, a);
                return (_ = (function (e) {
                    return (
                        0 !== c && xn(c),
                        (function (e) {
                            return 'string' === t ? Y(e) : 'boolean' === t ? Boolean(e) : e;
                        })(e)
                    );
                })(_));
            }
            function P(e, t, r, n) {
                var o = (r = r || []).every(function (e) {
                    return 'number' === e;
                });
                return 'string' !== t && o && !n
                    ? $(e)
                    : function () {
                          return F(e, t, r, arguments);
                      };
            }
            var C,
                U,
                B,
                z,
                W,
                L,
                H,
                V,
                q,
                J = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
            function G(e, t, r) {
                for (var n = t + r, o = t; e[o] && !(o >= n); ) ++o;
                if (o - t > 16 && e.buffer && J) return J.decode(e.subarray(t, o));
                for (var s = ''; t < o; ) {
                    var i = e[t++];
                    if (128 & i) {
                        var a = 63 & e[t++];
                        if (192 != (224 & i)) {
                            var c = 63 & e[t++];
                            if (
                                (i =
                                    224 == (240 & i)
                                        ? ((15 & i) << 12) | (a << 6) | c
                                        : ((7 & i) << 18) | (a << 12) | (c << 6) | (63 & e[t++])) < 65536
                            )
                                s += String.fromCharCode(i);
                            else {
                                var u = i - 65536;
                                s += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u));
                            }
                        } else s += String.fromCharCode(((31 & i) << 6) | a);
                    } else s += String.fromCharCode(i);
                }
                return s;
            }
            function Y(e, t) {
                return e ? G(B, e, t) : '';
            }
            function X(e, t, r, n) {
                if (!(n > 0)) return 0;
                for (var o = r, s = r + n - 1, i = 0; i < e.length; ++i) {
                    var a = e.charCodeAt(i);
                    if (a >= 55296 && a <= 57343) a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++i));
                    if (a <= 127) {
                        if (r >= s) break;
                        t[r++] = a;
                    } else if (a <= 2047) {
                        if (r + 1 >= s) break;
                        (t[r++] = 192 | (a >> 6)), (t[r++] = 128 | (63 & a));
                    } else if (a <= 65535) {
                        if (r + 2 >= s) break;
                        (t[r++] = 224 | (a >> 12)), (t[r++] = 128 | ((a >> 6) & 63)), (t[r++] = 128 | (63 & a));
                    } else {
                        if (r + 3 >= s) break;
                        (t[r++] = 240 | (a >> 18)),
                            (t[r++] = 128 | ((a >> 12) & 63)),
                            (t[r++] = 128 | ((a >> 6) & 63)),
                            (t[r++] = 128 | (63 & a));
                    }
                }
                return (t[r] = 0), r - o;
            }
            function Z(e, t, r) {
                return X(e, B, t, r);
            }
            function K(e) {
                for (var t = 0, r = 0; r < e.length; ++r) {
                    var n = e.charCodeAt(r);
                    n >= 55296 && n <= 57343 && (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++r))),
                        n <= 127 ? ++t : (t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
                }
                return t;
            }
            function Q(e) {
                var t = K(e) + 1,
                    r = yn(t);
                return r && X(e, U, r, t), r;
            }
            function ee(e, t) {
                U.set(e, t);
            }
            function te(e, t, r) {
                for (var n = 0; n < e.length; ++n) U[t++ >> 0] = e.charCodeAt(n);
                r || (U[t >> 0] = 0);
            }
            function re(e) {
                (C = e),
                    (o.HEAP8 = U = new Int8Array(e)),
                    (o.HEAP16 = z = new Int16Array(e)),
                    (o.HEAP32 = L = new Int32Array(e)),
                    (o.HEAPU8 = B = new Uint8Array(e)),
                    (o.HEAPU16 = W = new Uint16Array(e)),
                    (o.HEAPU32 = H = new Uint32Array(e)),
                    (o.HEAPF32 = V = new Float32Array(e)),
                    (o.HEAPF64 = q = new Float64Array(e));
            }
            o.INITIAL_MEMORY;
            var ne,
                oe = [],
                se = [],
                ie = [];
            function ae() {
                return R;
            }
            function ce() {
                if (o.preRun)
                    for ('function' == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; ) _e(o.preRun.shift());
                De(oe);
            }
            function ue() {
                !0,
                    o.noFSInit || ct.init.initialized || ct.init(),
                    (ct.ignorePermissions = !1),
                    tt.init(),
                    (ft.root = ct.mount(ft, {}, null)),
                    De(se);
            }
            function le() {
                if (o.postRun)
                    for ('function' == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; ) de(o.postRun.shift());
                De(ie);
            }
            function _e(e) {
                oe.unshift(e);
            }
            function fe(e) {
                se.unshift(e);
            }
            function de(e) {
                ie.unshift(e);
            }
            var me = 0,
                pe = null,
                he = null;
            function we(e) {
                me++, o.monitorRunDependencies && o.monitorRunDependencies(me);
            }
            function ge(e) {
                if (
                    (me--,
                    o.monitorRunDependencies && o.monitorRunDependencies(me),
                    0 == me && (null !== pe && (clearInterval(pe), (pe = null)), he))
                ) {
                    var t = he;
                    (he = null), t();
                }
            }
            function ye(e) {
                o.onAbort && o.onAbort(e),
                    O((e = 'Aborted(' + e + ')')),
                    (T = !0),
                    1,
                    (e += '. Build with -sASSERTIONS for more info.');
                var t = new WebAssembly.RuntimeError(e);
                throw (n(t), t);
            }
            var be,
                ve,
                Ee,
                Ae = 'data:application/octet-stream;base64,';
            function ke(e) {
                return e.startsWith(Ae);
            }
            function Se(e) {
                return e.startsWith('file://');
            }
            function Oe(e) {
                try {
                    if (e == be && x) return new Uint8Array(x);
                    if (l) return l(e);
                    throw 'both async and sync fetching of the wasm failed';
                } catch (e) {
                    ye(e);
                }
            }
            function xe() {
                if (!x && (g || y)) {
                    if ('function' == typeof pn && !Se(be))
                        return pn(be, { credentials: 'same-origin' })
                            .then(function (e) {
                                if (!e.ok) throw "failed to load wasm binary file at '" + be + "'";
                                return e.arrayBuffer();
                            })
                            .catch(function () {
                                return Oe(be);
                            });
                    if (u)
                        return new Promise(function (e, t) {
                            u(
                                be,
                                function (t) {
                                    e(new Uint8Array(t));
                                },
                                t,
                            );
                        });
                }
                return Promise.resolve().then(function () {
                    return Oe(be);
                });
            }
            function Ne() {
                var e = { a: gn };
                function t(e, t) {
                    var r = e.exports;
                    (o.asm = r), re((M = o.asm.rb).buffer), (ne = o.asm.wb), fe(o.asm.sb), ge();
                }
                function r(e) {
                    t(e.instance);
                }
                function s(t) {
                    return xe()
                        .then(function (t) {
                            return WebAssembly.instantiate(t, e);
                        })
                        .then(function (e) {
                            return e;
                        })
                        .then(t, function (e) {
                            O('failed to asynchronously prepare wasm: ' + e), ye(e);
                        });
                }
                if ((we(), o.instantiateWasm))
                    try {
                        return o.instantiateWasm(e, t);
                    } catch (e) {
                        return O('Module.instantiateWasm callback failed with error: ' + e), !1;
                    }
                return (
                    (x || 'function' != typeof WebAssembly.instantiateStreaming || ke(be) || Se(be) || 'function' != typeof pn
                        ? s(r)
                        : pn(be, { credentials: 'same-origin' }).then(function (t) {
                              return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                                  return (
                                      O('wasm streaming compile failed: ' + e),
                                      O('falling back to ArrayBuffer instantiation'),
                                      s(r)
                                  );
                              });
                          })
                    ).catch(n),
                    {}
                );
            }
            o.locateFile ? ke((be = 'dotnet.wasm')) || (be = A(be)) : (be = new URL('dotnet.wasm', import.meta.url).toString());
            var je = {
                2257988: (e, t) => {
                    setTimeout(function () {
                        console.error(Y(e));
                    }, t);
                },
                2258055: (e) => {
                    setTimeout(function () {
                        try {
                            'undefined' == typeof window &&
                            'undefined' == typeof document &&
                            'undefined' != typeof self &&
                            void 0 !== self.close
                                ? self.close()
                                : 'undefined' != typeof process && void 0 !== process.exit
                                ? process.exit(1)
                                : (location.href = 'https://pspdfkit.com');
                        } catch (e) {
                            location.href = 'https://pspdfkit.com';
                        }
                    }, e);
                },
            };
            function De(e) {
                for (; e.length > 0; ) {
                    var t = e.shift();
                    if ('function' != typeof t) {
                        var r = t.func;
                        'number' == typeof r ? (void 0 === t.arg ? Te(r)() : Te(r)(t.arg)) : r(void 0 === t.arg ? null : t.arg);
                    } else t(o);
                }
            }
            function Me(e, t = 'i8') {
                switch ((t.endsWith('*') && (t = 'i32'), t)) {
                    case 'i1':
                    case 'i8':
                        return U[e >> 0];
                    case 'i16':
                        return z[e >> 1];
                    case 'i32':
                    case 'i64':
                        return L[e >> 2];
                    case 'float':
                        return V[e >> 2];
                    case 'double':
                        return Number(q[e >> 3]);
                    default:
                        ye('invalid type for getValue: ' + t);
                }
                return null;
            }
            var Re = [];
            function Te(e) {
                var t = Re[e];
                return t || (e >= Re.length && (Re.length = e + 1), (Re[e] = t = ne.get(e))), t;
            }
            function Ie(e, t, r = 'i8') {
                switch ((r.endsWith('*') && (r = 'i32'), r)) {
                    case 'i1':
                    case 'i8':
                        U[e >> 0] = t;
                        break;
                    case 'i16':
                        z[e >> 1] = t;
                        break;
                    case 'i32':
                        L[e >> 2] = t;
                        break;
                    case 'i64':
                        (Ee = [
                            t >>> 0,
                            ((ve = t),
                            +Math.abs(ve) >= 1
                                ? ve > 0
                                    ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                    : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                : 0),
                        ]),
                            (L[e >> 2] = Ee[0]),
                            (L[(e + 4) >> 2] = Ee[1]);
                        break;
                    case 'float':
                        V[e >> 2] = t;
                        break;
                    case 'double':
                        q[e >> 3] = t;
                        break;
                    default:
                        ye('invalid type for setValue: ' + r);
                }
            }
            function $e(e, t, r, n) {
                ye('Assertion failed: ' + Y(e) + ', at: ' + [t ? Y(t) : 'unknown filename', r, n ? Y(n) : 'unknown function']);
            }
            function Fe(e) {
                return yn(e + 24) + 24;
            }
            var Pe = [];
            function Ce(e) {
                e.add_ref();
            }
            var Ue = 0;
            function Be(e) {
                var t = new We(e);
                return t.get_caught() || (t.set_caught(!0), Ue--), t.set_rethrown(!1), Pe.push(t), Ce(t), t.get_exception_ptr();
            }
            var ze = 0;
            function We(e) {
                (this.excPtr = e),
                    (this.ptr = e - 24),
                    (this.set_type = function (e) {
                        H[(this.ptr + 4) >> 2] = e;
                    }),
                    (this.get_type = function () {
                        return H[(this.ptr + 4) >> 2];
                    }),
                    (this.set_destructor = function (e) {
                        H[(this.ptr + 8) >> 2] = e;
                    }),
                    (this.get_destructor = function () {
                        return H[(this.ptr + 8) >> 2];
                    }),
                    (this.set_refcount = function (e) {
                        L[this.ptr >> 2] = e;
                    }),
                    (this.set_caught = function (e) {
                        (e = e ? 1 : 0), (U[(this.ptr + 12) >> 0] = e);
                    }),
                    (this.get_caught = function () {
                        return 0 != U[(this.ptr + 12) >> 0];
                    }),
                    (this.set_rethrown = function (e) {
                        (e = e ? 1 : 0), (U[(this.ptr + 13) >> 0] = e);
                    }),
                    (this.get_rethrown = function () {
                        return 0 != U[(this.ptr + 13) >> 0];
                    }),
                    (this.init = function (e, t) {
                        this.set_adjusted_ptr(0),
                            this.set_type(e),
                            this.set_destructor(t),
                            this.set_refcount(0),
                            this.set_caught(!1),
                            this.set_rethrown(!1);
                    }),
                    (this.add_ref = function () {
                        var e = L[this.ptr >> 2];
                        L[this.ptr >> 2] = e + 1;
                    }),
                    (this.release_ref = function () {
                        var e = L[this.ptr >> 2];
                        return (L[this.ptr >> 2] = e - 1), 1 === e;
                    }),
                    (this.set_adjusted_ptr = function (e) {
                        H[(this.ptr + 16) >> 2] = e;
                    }),
                    (this.get_adjusted_ptr = function () {
                        return H[(this.ptr + 16) >> 2];
                    }),
                    (this.get_exception_ptr = function () {
                        if (Dn(this.get_type())) return H[this.excPtr >> 2];
                        var e = this.get_adjusted_ptr();
                        return 0 !== e ? e : this.excPtr;
                    });
            }
            function Le(e) {
                return bn(new We(e).ptr);
            }
            function He(e) {
                if (e.release_ref() && !e.get_rethrown()) {
                    var t = e.get_destructor();
                    t && Te(t)(e.excPtr), Le(e.excPtr);
                }
            }
            function Ve() {
                Sn(0), He(Pe.pop()), (ze = 0);
            }
            function qe(e) {
                throw (ze || (ze = e), e);
            }
            function Je() {
                var e = ze;
                if (!e) return j(0), 0;
                var t = new We(e);
                t.set_adjusted_ptr(e);
                var r = t.get_type();
                if (!r) return j(0), e;
                for (var n = Array.prototype.slice.call(arguments), o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (0 === s || s === r) break;
                    var i = t.ptr + 16;
                    if (jn(s, r, i)) return j(s), e;
                }
                return j(r), e;
            }
            function Ge() {
                var e = ze;
                if (!e) return j(0), 0;
                var t = new We(e);
                t.set_adjusted_ptr(e);
                var r = t.get_type();
                if (!r) return j(0), e;
                for (var n = Array.prototype.slice.call(arguments), o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (0 === s || s === r) break;
                    var i = t.ptr + 16;
                    if (jn(s, r, i)) return j(s), e;
                }
                return j(r), e;
            }
            function Ye() {
                var e = Pe.pop();
                e || ye('no exception to throw');
                var t = e.excPtr;
                throw (e.get_rethrown() || (Pe.push(e), e.set_rethrown(!0), e.set_caught(!1), Ue++), (ze = t), t);
            }
            function Xe(e, t, r) {
                throw (new We(e).init(t, r), (ze = e), Ue++, e);
            }
            function Ze() {
                return Ue;
            }
            var Ke = {
                isAbs: (e) => '/' === e.charAt(0),
                splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                normalizeArray: (e, t) => {
                    for (var r = 0, n = e.length - 1; n >= 0; n--) {
                        var o = e[n];
                        '.' === o ? e.splice(n, 1) : '..' === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
                    }
                    if (t) for (; r; r--) e.unshift('..');
                    return e;
                },
                normalize: (e) => {
                    var t = Ke.isAbs(e),
                        r = '/' === e.substr(-1);
                    return (
                        (e = Ke.normalizeArray(
                            e.split('/').filter((e) => !!e),
                            !t,
                        ).join('/')) ||
                            t ||
                            (e = '.'),
                        e && r && (e += '/'),
                        (t ? '/' : '') + e
                    );
                },
                dirname: (e) => {
                    var t = Ke.splitPath(e),
                        r = t[0],
                        n = t[1];
                    return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : '.';
                },
                basename: (e) => {
                    if ('/' === e) return '/';
                    var t = (e = (e = Ke.normalize(e)).replace(/\/$/, '')).lastIndexOf('/');
                    return -1 === t ? e : e.substr(t + 1);
                },
                join: function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return Ke.normalize(e.join('/'));
                },
                join2: (e, t) => Ke.normalize(e + '/' + t),
            };
            function Qe() {
                if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues) {
                    var e = new Uint8Array(1);
                    return function () {
                        return crypto.getRandomValues(e), e[0];
                    };
                }
                if (b)
                    try {
                        var t = s('crypto');
                        return function () {
                            return t.randomBytes(1)[0];
                        };
                    } catch (e) {}
                return function () {
                    ye('randomDevice');
                };
            }
            var et = {
                    resolve: function () {
                        for (var e = '', t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
                            var n = r >= 0 ? arguments[r] : ct.cwd();
                            if ('string' != typeof n) throw new TypeError('Arguments to path.resolve must be strings');
                            if (!n) return '';
                            (e = n + '/' + e), (t = Ke.isAbs(n));
                        }
                        return (
                            (t ? '/' : '') +
                                (e = Ke.normalizeArray(
                                    e.split('/').filter((e) => !!e),
                                    !t,
                                ).join('/')) || '.'
                        );
                    },
                    relative: (e, t) => {
                        function r(e) {
                            for (var t = 0; t < e.length && '' === e[t]; t++);
                            for (var r = e.length - 1; r >= 0 && '' === e[r]; r--);
                            return t > r ? [] : e.slice(t, r - t + 1);
                        }
                        (e = et.resolve(e).substr(1)), (t = et.resolve(t).substr(1));
                        for (
                            var n = r(e.split('/')), o = r(t.split('/')), s = Math.min(n.length, o.length), i = s, a = 0;
                            a < s;
                            a++
                        )
                            if (n[a] !== o[a]) {
                                i = a;
                                break;
                            }
                        var c = [];
                        for (a = i; a < n.length; a++) c.push('..');
                        return (c = c.concat(o.slice(i))).join('/');
                    },
                },
                tt = {
                    ttys: [],
                    init: function () {},
                    shutdown: function () {},
                    register: function (e, t) {
                        (tt.ttys[e] = { input: [], output: [], ops: t }), ct.registerDevice(e, tt.stream_ops);
                    },
                    stream_ops: {
                        open: function (e) {
                            var t = tt.ttys[e.node.rdev];
                            if (!t) throw new ct.ErrnoError(43);
                            (e.tty = t), (e.seekable = !1);
                        },
                        close: function (e) {
                            e.tty.ops.flush(e.tty);
                        },
                        flush: function (e) {
                            e.tty.ops.flush(e.tty);
                        },
                        read: function (e, t, r, n, o) {
                            if (!e.tty || !e.tty.ops.get_char) throw new ct.ErrnoError(60);
                            for (var s = 0, i = 0; i < n; i++) {
                                var a;
                                try {
                                    a = e.tty.ops.get_char(e.tty);
                                } catch (e) {
                                    throw new ct.ErrnoError(29);
                                }
                                if (void 0 === a && 0 === s) throw new ct.ErrnoError(6);
                                if (null == a) break;
                                s++, (t[r + i] = a);
                            }
                            return s && (e.node.timestamp = Date.now()), s;
                        },
                        write: function (e, t, r, n, o) {
                            if (!e.tty || !e.tty.ops.put_char) throw new ct.ErrnoError(60);
                            try {
                                for (var s = 0; s < n; s++) e.tty.ops.put_char(e.tty, t[r + s]);
                            } catch (e) {
                                throw new ct.ErrnoError(29);
                            }
                            return n && (e.node.timestamp = Date.now()), s;
                        },
                    },
                    default_tty_ops: {
                        get_char: function (e) {
                            if (!e.input.length) {
                                var t = null;
                                if (b) {
                                    var r = Buffer.alloc(256),
                                        n = 0;
                                    try {
                                        n = _.readSync(process.stdin.fd, r, 0, 256, -1);
                                    } catch (e) {
                                        if (!e.toString().includes('EOF')) throw e;
                                        n = 0;
                                    }
                                    t = n > 0 ? r.slice(0, n).toString('utf-8') : null;
                                } else
                                    'undefined' != typeof window && 'function' == typeof window.prompt
                                        ? null !== (t = window.prompt('Input: ')) && (t += '\n')
                                        : 'function' == typeof readline && null !== (t = readline()) && (t += '\n');
                                if (!t) return null;
                                e.input = hn(t, !0);
                            }
                            return e.input.shift();
                        },
                        put_char: function (e, t) {
                            null === t || 10 === t ? (S(G(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                        },
                        flush: function (e) {
                            e.output && e.output.length > 0 && (S(G(e.output, 0)), (e.output = []));
                        },
                    },
                    default_tty1_ops: {
                        put_char: function (e, t) {
                            null === t || 10 === t ? (O(G(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                        },
                        flush: function (e) {
                            e.output && e.output.length > 0 && (O(G(e.output, 0)), (e.output = []));
                        },
                    },
                };
            function rt(e, t) {
                B.fill(0, e, e + t);
            }
            function nt(e, t) {
                return Math.ceil(e / t) * t;
            }
            function ot(e) {
                e = nt(e, 65536);
                var t = An(65536, e);
                return t ? (rt(t, e), t) : 0;
            }
            var st = {
                ops_table: null,
                mount: function (e) {
                    return st.createNode(null, '/', 16895, 0);
                },
                createNode: function (e, t, r, n) {
                    if (ct.isBlkdev(r) || ct.isFIFO(r)) throw new ct.ErrnoError(63);
                    st.ops_table ||
                        (st.ops_table = {
                            dir: {
                                node: {
                                    getattr: st.node_ops.getattr,
                                    setattr: st.node_ops.setattr,
                                    lookup: st.node_ops.lookup,
                                    mknod: st.node_ops.mknod,
                                    rename: st.node_ops.rename,
                                    unlink: st.node_ops.unlink,
                                    rmdir: st.node_ops.rmdir,
                                    readdir: st.node_ops.readdir,
                                    symlink: st.node_ops.symlink,
                                },
                                stream: { llseek: st.stream_ops.llseek },
                            },
                            file: {
                                node: { getattr: st.node_ops.getattr, setattr: st.node_ops.setattr },
                                stream: {
                                    llseek: st.stream_ops.llseek,
                                    read: st.stream_ops.read,
                                    write: st.stream_ops.write,
                                    allocate: st.stream_ops.allocate,
                                    mmap: st.stream_ops.mmap,
                                    msync: st.stream_ops.msync,
                                },
                            },
                            link: {
                                node: {
                                    getattr: st.node_ops.getattr,
                                    setattr: st.node_ops.setattr,
                                    readlink: st.node_ops.readlink,
                                },
                                stream: {},
                            },
                            chrdev: {
                                node: { getattr: st.node_ops.getattr, setattr: st.node_ops.setattr },
                                stream: ct.chrdev_stream_ops,
                            },
                        });
                    var o = ct.createNode(e, t, r, n);
                    return (
                        ct.isDir(o.mode)
                            ? ((o.node_ops = st.ops_table.dir.node), (o.stream_ops = st.ops_table.dir.stream), (o.contents = {}))
                            : ct.isFile(o.mode)
                            ? ((o.node_ops = st.ops_table.file.node),
                              (o.stream_ops = st.ops_table.file.stream),
                              (o.usedBytes = 0),
                              (o.contents = null))
                            : ct.isLink(o.mode)
                            ? ((o.node_ops = st.ops_table.link.node), (o.stream_ops = st.ops_table.link.stream))
                            : ct.isChrdev(o.mode) &&
                              ((o.node_ops = st.ops_table.chrdev.node), (o.stream_ops = st.ops_table.chrdev.stream)),
                        (o.timestamp = Date.now()),
                        e && ((e.contents[t] = o), (e.timestamp = o.timestamp)),
                        o
                    );
                },
                getFileDataAsTypedArray: function (e) {
                    return e.contents
                        ? e.contents.subarray
                            ? e.contents.subarray(0, e.usedBytes)
                            : new Uint8Array(e.contents)
                        : new Uint8Array(0);
                },
                expandFileStorage: function (e, t) {
                    var r = e.contents ? e.contents.length : 0;
                    if (!(r >= t)) {
                        (t = Math.max(t, (r * (r < 1048576 ? 2 : 1.125)) >>> 0)), 0 != r && (t = Math.max(t, 256));
                        var n = e.contents;
                        (e.contents = new Uint8Array(t)), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
                    }
                },
                resizeFileStorage: function (e, t) {
                    if (e.usedBytes != t)
                        if (0 == t) (e.contents = null), (e.usedBytes = 0);
                        else {
                            var r = e.contents;
                            (e.contents = new Uint8Array(t)),
                                r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))),
                                (e.usedBytes = t);
                        }
                },
                node_ops: {
                    getattr: function (e) {
                        var t = {};
                        return (
                            (t.dev = ct.isChrdev(e.mode) ? e.id : 1),
                            (t.ino = e.id),
                            (t.mode = e.mode),
                            (t.nlink = 1),
                            (t.uid = 0),
                            (t.gid = 0),
                            (t.rdev = e.rdev),
                            ct.isDir(e.mode)
                                ? (t.size = 4096)
                                : ct.isFile(e.mode)
                                ? (t.size = e.usedBytes)
                                : ct.isLink(e.mode)
                                ? (t.size = e.link.length)
                                : (t.size = 0),
                            (t.atime = new Date(e.timestamp)),
                            (t.mtime = new Date(e.timestamp)),
                            (t.ctime = new Date(e.timestamp)),
                            (t.blksize = 4096),
                            (t.blocks = Math.ceil(t.size / t.blksize)),
                            t
                        );
                    },
                    setattr: function (e, t) {
                        void 0 !== t.mode && (e.mode = t.mode),
                            void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                            void 0 !== t.size && st.resizeFileStorage(e, t.size);
                    },
                    lookup: function (e, t) {
                        throw ct.genericErrors[44];
                    },
                    mknod: function (e, t, r, n) {
                        return st.createNode(e, t, r, n);
                    },
                    rename: function (e, t, r) {
                        if (ct.isDir(e.mode)) {
                            var n;
                            try {
                                n = ct.lookupNode(t, r);
                            } catch (e) {}
                            if (n) for (var o in n.contents) throw new ct.ErrnoError(55);
                        }
                        delete e.parent.contents[e.name],
                            (e.parent.timestamp = Date.now()),
                            (e.name = r),
                            (t.contents[r] = e),
                            (t.timestamp = e.parent.timestamp),
                            (e.parent = t);
                    },
                    unlink: function (e, t) {
                        delete e.contents[t], (e.timestamp = Date.now());
                    },
                    rmdir: function (e, t) {
                        var r = ct.lookupNode(e, t);
                        for (var n in r.contents) throw new ct.ErrnoError(55);
                        delete e.contents[t], (e.timestamp = Date.now());
                    },
                    readdir: function (e) {
                        var t = ['.', '..'];
                        for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
                        return t;
                    },
                    symlink: function (e, t, r) {
                        var n = st.createNode(e, t, 41471, 0);
                        return (n.link = r), n;
                    },
                    readlink: function (e) {
                        if (!ct.isLink(e.mode)) throw new ct.ErrnoError(28);
                        return e.link;
                    },
                },
                stream_ops: {
                    read: function (e, t, r, n, o) {
                        var s = e.node.contents;
                        if (o >= e.node.usedBytes) return 0;
                        var i = Math.min(e.node.usedBytes - o, n);
                        if (i > 8 && s.subarray) t.set(s.subarray(o, o + i), r);
                        else for (var a = 0; a < i; a++) t[r + a] = s[o + a];
                        return i;
                    },
                    write: function (e, t, r, n, o, s) {
                        if ((t.buffer === U.buffer && (s = !1), !n)) return 0;
                        var i = e.node;
                        if (((i.timestamp = Date.now()), t.subarray && (!i.contents || i.contents.subarray))) {
                            if (s) return (i.contents = t.subarray(r, r + n)), (i.usedBytes = n), n;
                            if (0 === i.usedBytes && 0 === o) return (i.contents = t.slice(r, r + n)), (i.usedBytes = n), n;
                            if (o + n <= i.usedBytes) return i.contents.set(t.subarray(r, r + n), o), n;
                        }
                        if ((st.expandFileStorage(i, o + n), i.contents.subarray && t.subarray))
                            i.contents.set(t.subarray(r, r + n), o);
                        else for (var a = 0; a < n; a++) i.contents[o + a] = t[r + a];
                        return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
                    },
                    llseek: function (e, t, r) {
                        var n = t;
                        if ((1 === r ? (n += e.position) : 2 === r && ct.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0))
                            throw new ct.ErrnoError(28);
                        return n;
                    },
                    allocate: function (e, t, r) {
                        st.expandFileStorage(e.node, t + r), (e.node.usedBytes = Math.max(e.node.usedBytes, t + r));
                    },
                    mmap: function (e, t, r, n, o) {
                        if (!ct.isFile(e.node.mode)) throw new ct.ErrnoError(43);
                        var s,
                            i,
                            a = e.node.contents;
                        if (2 & o || a.buffer !== C) {
                            if (
                                ((r > 0 || r + t < a.length) &&
                                    (a = a.subarray ? a.subarray(r, r + t) : Array.prototype.slice.call(a, r, r + t)),
                                (i = !0),
                                !(s = ot(t)))
                            )
                                throw new ct.ErrnoError(48);
                            U.set(a, s);
                        } else (i = !1), (s = a.byteOffset);
                        return { ptr: s, allocated: i };
                    },
                    msync: function (e, t, r, n, o) {
                        if (!ct.isFile(e.node.mode)) throw new ct.ErrnoError(43);
                        if (2 & o) return 0;
                        st.stream_ops.write(e, t, 0, n, r, !1);
                        return 0;
                    },
                },
            };
            function it(e, t, r, n) {
                var o = n ? '' : 'al ' + e;
                u(
                    e,
                    function (r) {
                        I(r, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(r)), o && ge();
                    },
                    function (t) {
                        if (!r) throw 'Loading data file "' + e + '" failed.';
                        r();
                    },
                ),
                    o && we();
            }
            var at = {
                    DIR_MODE: 16895,
                    FILE_MODE: 33279,
                    reader: null,
                    mount: function (e) {
                        I(y), at.reader || (at.reader = new FileReaderSync());
                        var t = at.createNode(null, '/', at.DIR_MODE, 0),
                            r = {};
                        function n(e) {
                            for (var n = e.split('/'), o = t, s = 0; s < n.length - 1; s++) {
                                var i = n.slice(0, s + 1).join('/');
                                r[i] || (r[i] = at.createNode(o, n[s], at.DIR_MODE, 0)), (o = r[i]);
                            }
                            return o;
                        }
                        function o(e) {
                            var t = e.split('/');
                            return t[t.length - 1];
                        }
                        return (
                            Array.prototype.forEach.call(e.opts.files || [], function (e) {
                                at.createNode(n(e.name), o(e.name), at.FILE_MODE, 0, e, e.lastModifiedDate);
                            }),
                            (e.opts.blobs || []).forEach(function (e) {
                                at.createNode(n(e.name), o(e.name), at.FILE_MODE, 0, e.data);
                            }),
                            (e.opts.packages || []).forEach(function (e) {
                                e.metadata.files.forEach(function (t) {
                                    var r = t.filename.substr(1);
                                    at.createNode(n(r), o(r), at.FILE_MODE, 0, e.blob.slice(t.start, t.end));
                                });
                            }),
                            t
                        );
                    },
                    createNode: function (e, t, r, n, o, s) {
                        var i = ct.createNode(e, t, r);
                        return (
                            (i.mode = r),
                            (i.node_ops = at.node_ops),
                            (i.stream_ops = at.stream_ops),
                            (i.timestamp = (s || new Date()).getTime()),
                            I(at.FILE_MODE !== at.DIR_MODE),
                            r === at.FILE_MODE ? ((i.size = o.size), (i.contents = o)) : ((i.size = 4096), (i.contents = {})),
                            e && (e.contents[t] = i),
                            i
                        );
                    },
                    node_ops: {
                        getattr: function (e) {
                            return {
                                dev: 1,
                                ino: e.id,
                                mode: e.mode,
                                nlink: 1,
                                uid: 0,
                                gid: 0,
                                rdev: void 0,
                                size: e.size,
                                atime: new Date(e.timestamp),
                                mtime: new Date(e.timestamp),
                                ctime: new Date(e.timestamp),
                                blksize: 4096,
                                blocks: Math.ceil(e.size / 4096),
                            };
                        },
                        setattr: function (e, t) {
                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp);
                        },
                        lookup: function (e, t) {
                            throw new ct.ErrnoError(44);
                        },
                        mknod: function (e, t, r, n) {
                            throw new ct.ErrnoError(63);
                        },
                        rename: function (e, t, r) {
                            throw new ct.ErrnoError(63);
                        },
                        unlink: function (e, t) {
                            throw new ct.ErrnoError(63);
                        },
                        rmdir: function (e, t) {
                            throw new ct.ErrnoError(63);
                        },
                        readdir: function (e) {
                            var t = ['.', '..'];
                            for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
                            return t;
                        },
                        symlink: function (e, t, r) {
                            throw new ct.ErrnoError(63);
                        },
                        readlink: function (e) {
                            throw new ct.ErrnoError(63);
                        },
                    },
                    stream_ops: {
                        read: function (e, t, r, n, o) {
                            if (o >= e.node.size) return 0;
                            var s = e.node.contents.slice(o, o + n),
                                i = at.reader.readAsArrayBuffer(s);
                            return t.set(new Uint8Array(i), r), s.size;
                        },
                        write: function (e, t, r, n, o) {
                            throw new ct.ErrnoError(29);
                        },
                        llseek: function (e, t, r) {
                            var n = t;
                            if ((1 === r ? (n += e.position) : 2 === r && ct.isFile(e.node.mode) && (n += e.node.size), n < 0))
                                throw new ct.ErrnoError(28);
                            return n;
                        },
                    },
                },
                ct = {
                    root: null,
                    mounts: [],
                    devices: {},
                    streams: [],
                    nextInode: 1,
                    nameTable: null,
                    currentPath: '/',
                    initialized: !1,
                    ignorePermissions: !0,
                    ErrnoError: null,
                    genericErrors: {},
                    filesystems: null,
                    syncFSRequests: 0,
                    lookupPath: (e, t = {}) => {
                        if (!(e = et.resolve(ct.cwd(), e))) return { path: '', node: null };
                        if ((t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t)).recurse_count > 8)
                            throw new ct.ErrnoError(32);
                        for (
                            var r = Ke.normalizeArray(
                                    e.split('/').filter((e) => !!e),
                                    !1,
                                ),
                                n = ct.root,
                                o = '/',
                                s = 0;
                            s < r.length;
                            s++
                        ) {
                            var i = s === r.length - 1;
                            if (i && t.parent) break;
                            if (
                                ((n = ct.lookupNode(n, r[s])),
                                (o = Ke.join2(o, r[s])),
                                ct.isMountpoint(n) && (!i || (i && t.follow_mount)) && (n = n.mounted.root),
                                !i || t.follow)
                            )
                                for (var a = 0; ct.isLink(n.mode); ) {
                                    var c = ct.readlink(o);
                                    if (
                                        ((o = et.resolve(Ke.dirname(o), c)),
                                        (n = ct.lookupPath(o, { recurse_count: t.recurse_count + 1 }).node),
                                        a++ > 40)
                                    )
                                        throw new ct.ErrnoError(32);
                                }
                        }
                        return { path: o, node: n };
                    },
                    getPath: (e) => {
                        for (var t; ; ) {
                            if (ct.isRoot(e)) {
                                var r = e.mount.mountpoint;
                                return t ? ('/' !== r[r.length - 1] ? r + '/' + t : r + t) : r;
                            }
                            (t = t ? e.name + '/' + t : e.name), (e = e.parent);
                        }
                    },
                    hashName: (e, t) => {
                        for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
                        return ((e + r) >>> 0) % ct.nameTable.length;
                    },
                    hashAddNode: (e) => {
                        var t = ct.hashName(e.parent.id, e.name);
                        (e.name_next = ct.nameTable[t]), (ct.nameTable[t] = e);
                    },
                    hashRemoveNode: (e) => {
                        var t = ct.hashName(e.parent.id, e.name);
                        if (ct.nameTable[t] === e) ct.nameTable[t] = e.name_next;
                        else
                            for (var r = ct.nameTable[t]; r; ) {
                                if (r.name_next === e) {
                                    r.name_next = e.name_next;
                                    break;
                                }
                                r = r.name_next;
                            }
                    },
                    lookupNode: (e, t) => {
                        var r = ct.mayLookup(e);
                        if (r) throw new ct.ErrnoError(r, e);
                        for (var n = ct.hashName(e.id, t), o = ct.nameTable[n]; o; o = o.name_next) {
                            var s = o.name;
                            if (o.parent.id === e.id && s === t) return o;
                        }
                        return ct.lookup(e, t);
                    },
                    createNode: (e, t, r, n) => {
                        var o = new ct.FSNode(e, t, r, n);
                        return ct.hashAddNode(o), o;
                    },
                    destroyNode: (e) => {
                        ct.hashRemoveNode(e);
                    },
                    isRoot: (e) => e === e.parent,
                    isMountpoint: (e) => !!e.mounted,
                    isFile: (e) => 32768 == (61440 & e),
                    isDir: (e) => 16384 == (61440 & e),
                    isLink: (e) => 40960 == (61440 & e),
                    isChrdev: (e) => 8192 == (61440 & e),
                    isBlkdev: (e) => 24576 == (61440 & e),
                    isFIFO: (e) => 4096 == (61440 & e),
                    isSocket: (e) => 49152 == (49152 & e),
                    flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
                    modeStringToFlags: (e) => {
                        var t = ct.flagModes[e];
                        if (void 0 === t) throw new Error('Unknown file open mode: ' + e);
                        return t;
                    },
                    flagsToPermissionString: (e) => {
                        var t = ['r', 'w', 'rw'][3 & e];
                        return 512 & e && (t += 'w'), t;
                    },
                    nodePermissions: (e, t) =>
                        ct.ignorePermissions ||
                        ((!t.includes('r') || 292 & e.mode) &&
                            (!t.includes('w') || 146 & e.mode) &&
                            (!t.includes('x') || 73 & e.mode))
                            ? 0
                            : 2,
                    mayLookup: (e) => {
                        var t = ct.nodePermissions(e, 'x');
                        return t || (e.node_ops.lookup ? 0 : 2);
                    },
                    mayCreate: (e, t) => {
                        try {
                            ct.lookupNode(e, t);
                            return 20;
                        } catch (e) {}
                        return ct.nodePermissions(e, 'wx');
                    },
                    mayDelete: (e, t, r) => {
                        var n;
                        try {
                            n = ct.lookupNode(e, t);
                        } catch (e) {
                            return e.errno;
                        }
                        var o = ct.nodePermissions(e, 'wx');
                        if (o) return o;
                        if (r) {
                            if (!ct.isDir(n.mode)) return 54;
                            if (ct.isRoot(n) || ct.getPath(n) === ct.cwd()) return 10;
                        } else if (ct.isDir(n.mode)) return 31;
                        return 0;
                    },
                    mayOpen: (e, t) =>
                        e
                            ? ct.isLink(e.mode)
                                ? 32
                                : ct.isDir(e.mode) && ('r' !== ct.flagsToPermissionString(t) || 512 & t)
                                ? 31
                                : ct.nodePermissions(e, ct.flagsToPermissionString(t))
                            : 44,
                    MAX_OPEN_FDS: 4096,
                    nextfd: (e = 0, t = ct.MAX_OPEN_FDS) => {
                        for (var r = e; r <= t; r++) if (!ct.streams[r]) return r;
                        throw new ct.ErrnoError(33);
                    },
                    getStream: (e) => ct.streams[e],
                    createStream: (e, t, r) => {
                        ct.FSStream ||
                            ((ct.FSStream = function () {
                                this.shared = {};
                            }),
                            (ct.FSStream.prototype = {
                                object: {
                                    get: function () {
                                        return this.node;
                                    },
                                    set: function (e) {
                                        this.node = e;
                                    },
                                },
                                isRead: {
                                    get: function () {
                                        return 1 != (2097155 & this.flags);
                                    },
                                },
                                isWrite: {
                                    get: function () {
                                        return 0 != (2097155 & this.flags);
                                    },
                                },
                                isAppend: {
                                    get: function () {
                                        return 1024 & this.flags;
                                    },
                                },
                                flags: {
                                    get: function () {
                                        return this.shared.flags;
                                    },
                                    set: function (e) {
                                        this.shared.flags = e;
                                    },
                                },
                                position: {
                                    get function() {
                                        return this.shared.position;
                                    },
                                    set: function (e) {
                                        this.shared.position = e;
                                    },
                                },
                            })),
                            (e = Object.assign(new ct.FSStream(), e));
                        var n = ct.nextfd(t, r);
                        return (e.fd = n), (ct.streams[n] = e), e;
                    },
                    closeStream: (e) => {
                        ct.streams[e] = null;
                    },
                    chrdev_stream_ops: {
                        open: (e) => {
                            var t = ct.getDevice(e.node.rdev);
                            (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
                        },
                        llseek: () => {
                            throw new ct.ErrnoError(70);
                        },
                    },
                    major: (e) => e >> 8,
                    minor: (e) => 255 & e,
                    makedev: (e, t) => (e << 8) | t,
                    registerDevice: (e, t) => {
                        ct.devices[e] = { stream_ops: t };
                    },
                    getDevice: (e) => ct.devices[e],
                    getMounts: (e) => {
                        for (var t = [], r = [e]; r.length; ) {
                            var n = r.pop();
                            t.push(n), r.push.apply(r, n.mounts);
                        }
                        return t;
                    },
                    syncfs: (e, t) => {
                        'function' == typeof e && ((t = e), (e = !1)),
                            ct.syncFSRequests++,
                            ct.syncFSRequests > 1 &&
                                O(
                                    'warning: ' +
                                        ct.syncFSRequests +
                                        ' FS.syncfs operations in flight at once, probably just doing extra work',
                                );
                        var r = ct.getMounts(ct.root.mount),
                            n = 0;
                        function o(e) {
                            return ct.syncFSRequests--, t(e);
                        }
                        function s(e) {
                            if (e) return s.errored ? void 0 : ((s.errored = !0), o(e));
                            ++n >= r.length && o(null);
                        }
                        r.forEach((t) => {
                            if (!t.type.syncfs) return s(null);
                            t.type.syncfs(t, e, s);
                        });
                    },
                    mount: (e, t, r) => {
                        var n,
                            o = '/' === r,
                            s = !r;
                        if (o && ct.root) throw new ct.ErrnoError(10);
                        if (!o && !s) {
                            var i = ct.lookupPath(r, { follow_mount: !1 });
                            if (((r = i.path), (n = i.node), ct.isMountpoint(n))) throw new ct.ErrnoError(10);
                            if (!ct.isDir(n.mode)) throw new ct.ErrnoError(54);
                        }
                        var a = { type: e, opts: t, mountpoint: r, mounts: [] },
                            c = e.mount(a);
                        return (
                            (c.mount = a),
                            (a.root = c),
                            o ? (ct.root = c) : n && ((n.mounted = a), n.mount && n.mount.mounts.push(a)),
                            c
                        );
                    },
                    unmount: (e) => {
                        var t = ct.lookupPath(e, { follow_mount: !1 });
                        if (!ct.isMountpoint(t.node)) throw new ct.ErrnoError(28);
                        var r = t.node,
                            n = r.mounted,
                            o = ct.getMounts(n);
                        Object.keys(ct.nameTable).forEach((e) => {
                            for (var t = ct.nameTable[e]; t; ) {
                                var r = t.name_next;
                                o.includes(t.mount) && ct.destroyNode(t), (t = r);
                            }
                        }),
                            (r.mounted = null);
                        var s = r.mount.mounts.indexOf(n);
                        r.mount.mounts.splice(s, 1);
                    },
                    lookup: (e, t) => e.node_ops.lookup(e, t),
                    mknod: (e, t, r) => {
                        var n = ct.lookupPath(e, { parent: !0 }).node,
                            o = Ke.basename(e);
                        if (!o || '.' === o || '..' === o) throw new ct.ErrnoError(28);
                        var s = ct.mayCreate(n, o);
                        if (s) throw new ct.ErrnoError(s);
                        if (!n.node_ops.mknod) throw new ct.ErrnoError(63);
                        return n.node_ops.mknod(n, o, t, r);
                    },
                    create: (e, t) => ((t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), ct.mknod(e, t, 0)),
                    mkdir: (e, t) => ((t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), ct.mknod(e, t, 0)),
                    mkdirTree: (e, t) => {
                        for (var r = e.split('/'), n = '', o = 0; o < r.length; ++o)
                            if (r[o]) {
                                n += '/' + r[o];
                                try {
                                    ct.mkdir(n, t);
                                } catch (e) {
                                    if (20 != e.errno) throw e;
                                }
                            }
                    },
                    mkdev: (e, t, r) => (void 0 === r && ((r = t), (t = 438)), (t |= 8192), ct.mknod(e, t, r)),
                    symlink: (e, t) => {
                        if (!et.resolve(e)) throw new ct.ErrnoError(44);
                        var r = ct.lookupPath(t, { parent: !0 }).node;
                        if (!r) throw new ct.ErrnoError(44);
                        var n = Ke.basename(t),
                            o = ct.mayCreate(r, n);
                        if (o) throw new ct.ErrnoError(o);
                        if (!r.node_ops.symlink) throw new ct.ErrnoError(63);
                        return r.node_ops.symlink(r, n, e);
                    },
                    rename: (e, t) => {
                        var r,
                            n,
                            o = Ke.dirname(e),
                            s = Ke.dirname(t),
                            i = Ke.basename(e),
                            a = Ke.basename(t);
                        if (((r = ct.lookupPath(e, { parent: !0 }).node), (n = ct.lookupPath(t, { parent: !0 }).node), !r || !n))
                            throw new ct.ErrnoError(44);
                        if (r.mount !== n.mount) throw new ct.ErrnoError(75);
                        var c,
                            u = ct.lookupNode(r, i),
                            l = et.relative(e, s);
                        if ('.' !== l.charAt(0)) throw new ct.ErrnoError(28);
                        if ('.' !== (l = et.relative(t, o)).charAt(0)) throw new ct.ErrnoError(55);
                        try {
                            c = ct.lookupNode(n, a);
                        } catch (e) {}
                        if (u !== c) {
                            var _ = ct.isDir(u.mode),
                                f = ct.mayDelete(r, i, _);
                            if (f) throw new ct.ErrnoError(f);
                            if ((f = c ? ct.mayDelete(n, a, _) : ct.mayCreate(n, a))) throw new ct.ErrnoError(f);
                            if (!r.node_ops.rename) throw new ct.ErrnoError(63);
                            if (ct.isMountpoint(u) || (c && ct.isMountpoint(c))) throw new ct.ErrnoError(10);
                            if (n !== r && (f = ct.nodePermissions(r, 'w'))) throw new ct.ErrnoError(f);
                            ct.hashRemoveNode(u);
                            try {
                                r.node_ops.rename(u, n, a);
                            } catch (e) {
                                throw e;
                            } finally {
                                ct.hashAddNode(u);
                            }
                        }
                    },
                    rmdir: (e) => {
                        var t = ct.lookupPath(e, { parent: !0 }).node,
                            r = Ke.basename(e),
                            n = ct.lookupNode(t, r),
                            o = ct.mayDelete(t, r, !0);
                        if (o) throw new ct.ErrnoError(o);
                        if (!t.node_ops.rmdir) throw new ct.ErrnoError(63);
                        if (ct.isMountpoint(n)) throw new ct.ErrnoError(10);
                        t.node_ops.rmdir(t, r), ct.destroyNode(n);
                    },
                    readdir: (e) => {
                        var t = ct.lookupPath(e, { follow: !0 }).node;
                        if (!t.node_ops.readdir) throw new ct.ErrnoError(54);
                        return t.node_ops.readdir(t);
                    },
                    unlink: (e) => {
                        var t = ct.lookupPath(e, { parent: !0 }).node;
                        if (!t) throw new ct.ErrnoError(44);
                        var r = Ke.basename(e),
                            n = ct.lookupNode(t, r),
                            o = ct.mayDelete(t, r, !1);
                        if (o) throw new ct.ErrnoError(o);
                        if (!t.node_ops.unlink) throw new ct.ErrnoError(63);
                        if (ct.isMountpoint(n)) throw new ct.ErrnoError(10);
                        t.node_ops.unlink(t, r), ct.destroyNode(n);
                    },
                    readlink: (e) => {
                        var t = ct.lookupPath(e).node;
                        if (!t) throw new ct.ErrnoError(44);
                        if (!t.node_ops.readlink) throw new ct.ErrnoError(28);
                        return et.resolve(ct.getPath(t.parent), t.node_ops.readlink(t));
                    },
                    stat: (e, t) => {
                        var r = ct.lookupPath(e, { follow: !t }).node;
                        if (!r) throw new ct.ErrnoError(44);
                        if (!r.node_ops.getattr) throw new ct.ErrnoError(63);
                        return r.node_ops.getattr(r);
                    },
                    lstat: (e) => ct.stat(e, !0),
                    chmod: (e, t, r) => {
                        var n;
                        'string' == typeof e ? (n = ct.lookupPath(e, { follow: !r }).node) : (n = e);
                        if (!n.node_ops.setattr) throw new ct.ErrnoError(63);
                        n.node_ops.setattr(n, { mode: (4095 & t) | (-4096 & n.mode), timestamp: Date.now() });
                    },
                    lchmod: (e, t) => {
                        ct.chmod(e, t, !0);
                    },
                    fchmod: (e, t) => {
                        var r = ct.getStream(e);
                        if (!r) throw new ct.ErrnoError(8);
                        ct.chmod(r.node, t);
                    },
                    chown: (e, t, r, n) => {
                        var o;
                        'string' == typeof e ? (o = ct.lookupPath(e, { follow: !n }).node) : (o = e);
                        if (!o.node_ops.setattr) throw new ct.ErrnoError(63);
                        o.node_ops.setattr(o, { timestamp: Date.now() });
                    },
                    lchown: (e, t, r) => {
                        ct.chown(e, t, r, !0);
                    },
                    fchown: (e, t, r) => {
                        var n = ct.getStream(e);
                        if (!n) throw new ct.ErrnoError(8);
                        ct.chown(n.node, t, r);
                    },
                    truncate: (e, t) => {
                        if (t < 0) throw new ct.ErrnoError(28);
                        var r;
                        'string' == typeof e ? (r = ct.lookupPath(e, { follow: !0 }).node) : (r = e);
                        if (!r.node_ops.setattr) throw new ct.ErrnoError(63);
                        if (ct.isDir(r.mode)) throw new ct.ErrnoError(31);
                        if (!ct.isFile(r.mode)) throw new ct.ErrnoError(28);
                        var n = ct.nodePermissions(r, 'w');
                        if (n) throw new ct.ErrnoError(n);
                        r.node_ops.setattr(r, { size: t, timestamp: Date.now() });
                    },
                    ftruncate: (e, t) => {
                        var r = ct.getStream(e);
                        if (!r) throw new ct.ErrnoError(8);
                        if (0 == (2097155 & r.flags)) throw new ct.ErrnoError(28);
                        ct.truncate(r.node, t);
                    },
                    utime: (e, t, r) => {
                        var n = ct.lookupPath(e, { follow: !0 }).node;
                        n.node_ops.setattr(n, { timestamp: Math.max(t, r) });
                    },
                    open: (e, t, r) => {
                        if ('' === e) throw new ct.ErrnoError(44);
                        var n;
                        if (
                            ((r = void 0 === r ? 438 : r),
                            (r = 64 & (t = 'string' == typeof t ? ct.modeStringToFlags(t) : t) ? (4095 & r) | 32768 : 0),
                            'object' == typeof e)
                        )
                            n = e;
                        else {
                            e = Ke.normalize(e);
                            try {
                                n = ct.lookupPath(e, { follow: !(131072 & t) }).node;
                            } catch (e) {}
                        }
                        var s = !1;
                        if (64 & t)
                            if (n) {
                                if (128 & t) throw new ct.ErrnoError(20);
                            } else (n = ct.mknod(e, r, 0)), (s = !0);
                        if (!n) throw new ct.ErrnoError(44);
                        if ((ct.isChrdev(n.mode) && (t &= -513), 65536 & t && !ct.isDir(n.mode))) throw new ct.ErrnoError(54);
                        if (!s) {
                            var i = ct.mayOpen(n, t);
                            if (i) throw new ct.ErrnoError(i);
                        }
                        512 & t && !s && ct.truncate(n, 0), (t &= -131713);
                        var a = ct.createStream({
                            node: n,
                            path: ct.getPath(n),
                            flags: t,
                            seekable: !0,
                            position: 0,
                            stream_ops: n.stream_ops,
                            ungotten: [],
                            error: !1,
                        });
                        return (
                            a.stream_ops.open && a.stream_ops.open(a),
                            !o.logReadFiles ||
                                1 & t ||
                                (ct.readFiles || (ct.readFiles = {}), e in ct.readFiles || (ct.readFiles[e] = 1)),
                            a
                        );
                    },
                    close: (e) => {
                        if (ct.isClosed(e)) throw new ct.ErrnoError(8);
                        e.getdents && (e.getdents = null);
                        try {
                            e.stream_ops.close && e.stream_ops.close(e);
                        } catch (e) {
                            throw e;
                        } finally {
                            ct.closeStream(e.fd);
                        }
                        e.fd = null;
                    },
                    isClosed: (e) => null === e.fd,
                    llseek: (e, t, r) => {
                        if (ct.isClosed(e)) throw new ct.ErrnoError(8);
                        if (!e.seekable || !e.stream_ops.llseek) throw new ct.ErrnoError(70);
                        if (0 != r && 1 != r && 2 != r) throw new ct.ErrnoError(28);
                        return (e.position = e.stream_ops.llseek(e, t, r)), (e.ungotten = []), e.position;
                    },
                    read: (e, t, r, n, o) => {
                        if (n < 0 || o < 0) throw new ct.ErrnoError(28);
                        if (ct.isClosed(e)) throw new ct.ErrnoError(8);
                        if (1 == (2097155 & e.flags)) throw new ct.ErrnoError(8);
                        if (ct.isDir(e.node.mode)) throw new ct.ErrnoError(31);
                        if (!e.stream_ops.read) throw new ct.ErrnoError(28);
                        var s = void 0 !== o;
                        if (s) {
                            if (!e.seekable) throw new ct.ErrnoError(70);
                        } else o = e.position;
                        var i = e.stream_ops.read(e, t, r, n, o);
                        return s || (e.position += i), i;
                    },
                    write: (e, t, r, n, o, s) => {
                        if (n < 0 || o < 0) throw new ct.ErrnoError(28);
                        if (ct.isClosed(e)) throw new ct.ErrnoError(8);
                        if (0 == (2097155 & e.flags)) throw new ct.ErrnoError(8);
                        if (ct.isDir(e.node.mode)) throw new ct.ErrnoError(31);
                        if (!e.stream_ops.write) throw new ct.ErrnoError(28);
                        e.seekable && 1024 & e.flags && ct.llseek(e, 0, 2);
                        var i = void 0 !== o;
                        if (i) {
                            if (!e.seekable) throw new ct.ErrnoError(70);
                        } else o = e.position;
                        var a = e.stream_ops.write(e, t, r, n, o, s);
                        return i || (e.position += a), a;
                    },
                    allocate: (e, t, r) => {
                        if (ct.isClosed(e)) throw new ct.ErrnoError(8);
                        if (t < 0 || r <= 0) throw new ct.ErrnoError(28);
                        if (0 == (2097155 & e.flags)) throw new ct.ErrnoError(8);
                        if (!ct.isFile(e.node.mode) && !ct.isDir(e.node.mode)) throw new ct.ErrnoError(43);
                        if (!e.stream_ops.allocate) throw new ct.ErrnoError(138);
                        e.stream_ops.allocate(e, t, r);
                    },
                    mmap: (e, t, r, n, o) => {
                        if (0 != (2 & n) && 0 == (2 & o) && 2 != (2097155 & e.flags)) throw new ct.ErrnoError(2);
                        if (1 == (2097155 & e.flags)) throw new ct.ErrnoError(2);
                        if (!e.stream_ops.mmap) throw new ct.ErrnoError(43);
                        return e.stream_ops.mmap(e, t, r, n, o);
                    },
                    msync: (e, t, r, n, o) => (e && e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, o) : 0),
                    munmap: (e) => 0,
                    ioctl: (e, t, r) => {
                        if (!e.stream_ops.ioctl) throw new ct.ErrnoError(59);
                        return e.stream_ops.ioctl(e, t, r);
                    },
                    readFile: (e, t = {}) => {
                        if (
                            ((t.flags = t.flags || 0),
                            (t.encoding = t.encoding || 'binary'),
                            'utf8' !== t.encoding && 'binary' !== t.encoding)
                        )
                            throw new Error('Invalid encoding type "' + t.encoding + '"');
                        var r,
                            n = ct.open(e, t.flags),
                            o = ct.stat(e).size,
                            s = new Uint8Array(o);
                        return (
                            ct.read(n, s, 0, o, 0),
                            'utf8' === t.encoding ? (r = G(s, 0)) : 'binary' === t.encoding && (r = s),
                            ct.close(n),
                            r
                        );
                    },
                    writeFile: (e, t, r = {}) => {
                        r.flags = r.flags || 577;
                        var n = ct.open(e, r.flags, r.mode);
                        if ('string' == typeof t) {
                            var o = new Uint8Array(K(t) + 1),
                                s = X(t, o, 0, o.length);
                            ct.write(n, o, 0, s, void 0, r.canOwn);
                        } else {
                            if (!ArrayBuffer.isView(t)) throw new Error('Unsupported data type');
                            ct.write(n, t, 0, t.byteLength, void 0, r.canOwn);
                        }
                        ct.close(n);
                    },
                    cwd: () => ct.currentPath,
                    chdir: (e) => {
                        var t = ct.lookupPath(e, { follow: !0 });
                        if (null === t.node) throw new ct.ErrnoError(44);
                        if (!ct.isDir(t.node.mode)) throw new ct.ErrnoError(54);
                        var r = ct.nodePermissions(t.node, 'x');
                        if (r) throw new ct.ErrnoError(r);
                        ct.currentPath = t.path;
                    },
                    createDefaultDirectories: () => {
                        ct.mkdir('/tmp'), ct.mkdir('/home'), ct.mkdir('/home/web_user');
                    },
                    createDefaultDevices: () => {
                        ct.mkdir('/dev'),
                            ct.registerDevice(ct.makedev(1, 3), { read: () => 0, write: (e, t, r, n, o) => n }),
                            ct.mkdev('/dev/null', ct.makedev(1, 3)),
                            tt.register(ct.makedev(5, 0), tt.default_tty_ops),
                            tt.register(ct.makedev(6, 0), tt.default_tty1_ops),
                            ct.mkdev('/dev/tty', ct.makedev(5, 0)),
                            ct.mkdev('/dev/tty1', ct.makedev(6, 0));
                        var e = Qe();
                        ct.createDevice('/dev', 'random', e),
                            ct.createDevice('/dev', 'urandom', e),
                            ct.mkdir('/dev/shm'),
                            ct.mkdir('/dev/shm/tmp');
                    },
                    createSpecialDirectories: () => {
                        ct.mkdir('/proc');
                        var e = ct.mkdir('/proc/self');
                        ct.mkdir('/proc/self/fd'),
                            ct.mount(
                                {
                                    mount: () => {
                                        var t = ct.createNode(e, 'fd', 16895, 73);
                                        return (
                                            (t.node_ops = {
                                                lookup: (e, t) => {
                                                    var r = +t,
                                                        n = ct.getStream(r);
                                                    if (!n) throw new ct.ErrnoError(8);
                                                    var o = {
                                                        parent: null,
                                                        mount: { mountpoint: 'fake' },
                                                        node_ops: { readlink: () => n.path },
                                                    };
                                                    return (o.parent = o), o;
                                                },
                                            }),
                                            t
                                        );
                                    },
                                },
                                {},
                                '/proc/self/fd',
                            );
                    },
                    createStandardStreams: () => {
                        o.stdin ? ct.createDevice('/dev', 'stdin', o.stdin) : ct.symlink('/dev/tty', '/dev/stdin'),
                            o.stdout ? ct.createDevice('/dev', 'stdout', null, o.stdout) : ct.symlink('/dev/tty', '/dev/stdout'),
                            o.stderr ? ct.createDevice('/dev', 'stderr', null, o.stderr) : ct.symlink('/dev/tty1', '/dev/stderr');
                        ct.open('/dev/stdin', 0), ct.open('/dev/stdout', 1), ct.open('/dev/stderr', 1);
                    },
                    ensureErrnoError: () => {
                        ct.ErrnoError ||
                            ((ct.ErrnoError = function (e, t) {
                                (this.node = t),
                                    (this.setErrno = function (e) {
                                        this.errno = e;
                                    }),
                                    this.setErrno(e),
                                    (this.message = 'FS error');
                            }),
                            (ct.ErrnoError.prototype = new Error()),
                            (ct.ErrnoError.prototype.constructor = ct.ErrnoError),
                            [44].forEach((e) => {
                                (ct.genericErrors[e] = new ct.ErrnoError(e)),
                                    (ct.genericErrors[e].stack = '<generic error, no stack>');
                            }));
                    },
                    staticInit: () => {
                        ct.ensureErrnoError(),
                            (ct.nameTable = new Array(4096)),
                            ct.mount(st, {}, '/'),
                            ct.createDefaultDirectories(),
                            ct.createDefaultDevices(),
                            ct.createSpecialDirectories(),
                            (ct.filesystems = { MEMFS: st, WORKERFS: at });
                    },
                    init: (e, t, r) => {
                        (ct.init.initialized = !0),
                            ct.ensureErrnoError(),
                            (o.stdin = e || o.stdin),
                            (o.stdout = t || o.stdout),
                            (o.stderr = r || o.stderr),
                            ct.createStandardStreams();
                    },
                    quit: () => {
                        ct.init.initialized = !1;
                        for (var e = 0; e < ct.streams.length; e++) {
                            var t = ct.streams[e];
                            t && ct.close(t);
                        }
                    },
                    getMode: (e, t) => {
                        var r = 0;
                        return e && (r |= 365), t && (r |= 146), r;
                    },
                    findObject: (e, t) => {
                        var r = ct.analyzePath(e, t);
                        return r.exists ? r.object : null;
                    },
                    analyzePath: (e, t) => {
                        try {
                            e = (n = ct.lookupPath(e, { follow: !t })).path;
                        } catch (e) {}
                        var r = {
                            isRoot: !1,
                            exists: !1,
                            error: 0,
                            name: null,
                            path: null,
                            object: null,
                            parentExists: !1,
                            parentPath: null,
                            parentObject: null,
                        };
                        try {
                            var n = ct.lookupPath(e, { parent: !0 });
                            (r.parentExists = !0),
                                (r.parentPath = n.path),
                                (r.parentObject = n.node),
                                (r.name = Ke.basename(e)),
                                (n = ct.lookupPath(e, { follow: !t })),
                                (r.exists = !0),
                                (r.path = n.path),
                                (r.object = n.node),
                                (r.name = n.node.name),
                                (r.isRoot = '/' === n.path);
                        } catch (e) {
                            r.error = e.errno;
                        }
                        return r;
                    },
                    createPath: (e, t, r, n) => {
                        e = 'string' == typeof e ? e : ct.getPath(e);
                        for (var o = t.split('/').reverse(); o.length; ) {
                            var s = o.pop();
                            if (s) {
                                var i = Ke.join2(e, s);
                                try {
                                    ct.mkdir(i);
                                } catch (e) {}
                                e = i;
                            }
                        }
                        return i;
                    },
                    createFile: (e, t, r, n, o) => {
                        var s = Ke.join2('string' == typeof e ? e : ct.getPath(e), t),
                            i = ct.getMode(n, o);
                        return ct.create(s, i);
                    },
                    createDataFile: (e, t, r, n, o, s) => {
                        var i = t;
                        e && ((e = 'string' == typeof e ? e : ct.getPath(e)), (i = t ? Ke.join2(e, t) : e));
                        var a = ct.getMode(n, o),
                            c = ct.create(i, a);
                        if (r) {
                            if ('string' == typeof r) {
                                for (var u = new Array(r.length), l = 0, _ = r.length; l < _; ++l) u[l] = r.charCodeAt(l);
                                r = u;
                            }
                            ct.chmod(c, 146 | a);
                            var f = ct.open(c, 577);
                            ct.write(f, r, 0, r.length, 0, s), ct.close(f), ct.chmod(c, a);
                        }
                        return c;
                    },
                    createDevice: (e, t, r, n) => {
                        var o = Ke.join2('string' == typeof e ? e : ct.getPath(e), t),
                            s = ct.getMode(!!r, !!n);
                        ct.createDevice.major || (ct.createDevice.major = 64);
                        var i = ct.makedev(ct.createDevice.major++, 0);
                        return (
                            ct.registerDevice(i, {
                                open: (e) => {
                                    e.seekable = !1;
                                },
                                close: (e) => {
                                    n && n.buffer && n.buffer.length && n(10);
                                },
                                read: (e, t, n, o, s) => {
                                    for (var i = 0, a = 0; a < o; a++) {
                                        var c;
                                        try {
                                            c = r();
                                        } catch (e) {
                                            throw new ct.ErrnoError(29);
                                        }
                                        if (void 0 === c && 0 === i) throw new ct.ErrnoError(6);
                                        if (null == c) break;
                                        i++, (t[n + a] = c);
                                    }
                                    return i && (e.node.timestamp = Date.now()), i;
                                },
                                write: (e, t, r, o, s) => {
                                    for (var i = 0; i < o; i++)
                                        try {
                                            n(t[r + i]);
                                        } catch (e) {
                                            throw new ct.ErrnoError(29);
                                        }
                                    return o && (e.node.timestamp = Date.now()), i;
                                },
                            }),
                            ct.mkdev(o, s, i)
                        );
                    },
                    forceLoadFile: (e) => {
                        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                        if ('undefined' != typeof XMLHttpRequest)
                            throw new Error(
                                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
                            );
                        if (!c) throw new Error('Cannot load without read() or XMLHttpRequest.');
                        try {
                            (e.contents = hn(c(e.url), !0)), (e.usedBytes = e.contents.length);
                        } catch (e) {
                            throw new ct.ErrnoError(29);
                        }
                    },
                    createLazyFile: (e, t, r, n, o) => {
                        function s() {
                            (this.lengthKnown = !1), (this.chunks = []);
                        }
                        if (
                            ((s.prototype.get = function (e) {
                                if (!(e > this.length - 1 || e < 0)) {
                                    var t = e % this.chunkSize,
                                        r = (e / this.chunkSize) | 0;
                                    return this.getter(r)[t];
                                }
                            }),
                            (s.prototype.setDataGetter = function (e) {
                                this.getter = e;
                            }),
                            (s.prototype.cacheLength = function () {
                                var e = new XMLHttpRequest();
                                if (
                                    (e.open('HEAD', r, !1),
                                    e.send(null),
                                    !((e.status >= 200 && e.status < 300) || 304 === e.status))
                                )
                                    throw new Error("Couldn't load " + r + '. Status: ' + e.status);
                                var t,
                                    n = Number(e.getResponseHeader('Content-length')),
                                    o = (t = e.getResponseHeader('Accept-Ranges')) && 'bytes' === t,
                                    s = (t = e.getResponseHeader('Content-Encoding')) && 'gzip' === t,
                                    i = 1048576;
                                o || (i = n);
                                var a = this;
                                a.setDataGetter((e) => {
                                    var t = e * i,
                                        o = (e + 1) * i - 1;
                                    if (
                                        ((o = Math.min(o, n - 1)),
                                        void 0 === a.chunks[e] &&
                                            (a.chunks[e] = ((e, t) => {
                                                if (e > t)
                                                    throw new Error(
                                                        'invalid range (' + e + ', ' + t + ') or no bytes requested!',
                                                    );
                                                if (t > n - 1)
                                                    throw new Error('only ' + n + ' bytes available! programmer error!');
                                                var o = new XMLHttpRequest();
                                                if (
                                                    (o.open('GET', r, !1),
                                                    n !== i && o.setRequestHeader('Range', 'bytes=' + e + '-' + t),
                                                    (o.responseType = 'arraybuffer'),
                                                    o.overrideMimeType &&
                                                        o.overrideMimeType('text/plain; charset=x-user-defined'),
                                                    o.send(null),
                                                    !((o.status >= 200 && o.status < 300) || 304 === o.status))
                                                )
                                                    throw new Error("Couldn't load " + r + '. Status: ' + o.status);
                                                return void 0 !== o.response
                                                    ? new Uint8Array(o.response || [])
                                                    : hn(o.responseText || '', !0);
                                            })(t, o)),
                                        void 0 === a.chunks[e])
                                    )
                                        throw new Error('doXHR failed!');
                                    return a.chunks[e];
                                }),
                                    (!s && n) ||
                                        ((i = n = 1),
                                        (n = this.getter(0).length),
                                        (i = n),
                                        S('LazyFiles on gzip forces download of the whole file when length is accessed')),
                                    (this._length = n),
                                    (this._chunkSize = i),
                                    (this.lengthKnown = !0);
                            }),
                            'undefined' != typeof XMLHttpRequest)
                        ) {
                            if (!y)
                                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
                            var i = new s();
                            Object.defineProperties(i, {
                                length: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(), this._length;
                                    },
                                },
                                chunkSize: {
                                    get: function () {
                                        return this.lengthKnown || this.cacheLength(), this._chunkSize;
                                    },
                                },
                            });
                            var a = { isDevice: !1, contents: i };
                        } else a = { isDevice: !1, url: r };
                        var c = ct.createFile(e, t, a, n, o);
                        a.contents ? (c.contents = a.contents) : a.url && ((c.contents = null), (c.url = a.url)),
                            Object.defineProperties(c, {
                                usedBytes: {
                                    get: function () {
                                        return this.contents.length;
                                    },
                                },
                            });
                        var u = {};
                        return (
                            Object.keys(c.stream_ops).forEach((e) => {
                                var t = c.stream_ops[e];
                                u[e] = function () {
                                    return ct.forceLoadFile(c), t.apply(null, arguments);
                                };
                            }),
                            (u.read = (e, t, r, n, o) => {
                                ct.forceLoadFile(c);
                                var s = e.node.contents;
                                if (o >= s.length) return 0;
                                var i = Math.min(s.length - o, n);
                                if (s.slice) for (var a = 0; a < i; a++) t[r + a] = s[o + a];
                                else for (a = 0; a < i; a++) t[r + a] = s.get(o + a);
                                return i;
                            }),
                            (c.stream_ops = u),
                            c
                        );
                    },
                    createPreloadedFile: (e, t, r, n, o, s, i, a, c, u) => {
                        var l = t ? et.resolve(Ke.join2(e, t)) : e;
                        function _(r) {
                            function _(r) {
                                u && u(), a || ct.createDataFile(e, t, r, n, o, c), s && s(), ge();
                            }
                            Browser.handledByPreloadPlugin(r, l, _, () => {
                                i && i(), ge();
                            }) || _(r);
                        }
                        we(), 'string' == typeof r ? it(r, (e) => _(e), i) : _(r);
                    },
                    indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                    DB_NAME: () => 'EM_FS_' + window.location.pathname,
                    DB_VERSION: 20,
                    DB_STORE_NAME: 'FILE_DATA',
                    saveFilesToDB: (e, t, r) => {
                        (t = t || (() => {})), (r = r || (() => {}));
                        var n = ct.indexedDB();
                        try {
                            var o = n.open(ct.DB_NAME(), ct.DB_VERSION);
                        } catch (e) {
                            return r(e);
                        }
                        (o.onupgradeneeded = () => {
                            S('creating db'), o.result.createObjectStore(ct.DB_STORE_NAME);
                        }),
                            (o.onsuccess = () => {
                                var n = o.result.transaction([ct.DB_STORE_NAME], 'readwrite'),
                                    s = n.objectStore(ct.DB_STORE_NAME),
                                    i = 0,
                                    a = 0,
                                    c = e.length;
                                function u() {
                                    0 == a ? t() : r();
                                }
                                e.forEach((e) => {
                                    var t = s.put(ct.analyzePath(e).object.contents, e);
                                    (t.onsuccess = () => {
                                        ++i + a == c && u();
                                    }),
                                        (t.onerror = () => {
                                            a++, i + a == c && u();
                                        });
                                }),
                                    (n.onerror = r);
                            }),
                            (o.onerror = r);
                    },
                    loadFilesFromDB: (e, t, r) => {
                        (t = t || (() => {})), (r = r || (() => {}));
                        var n = ct.indexedDB();
                        try {
                            var o = n.open(ct.DB_NAME(), ct.DB_VERSION);
                        } catch (e) {
                            return r(e);
                        }
                        (o.onupgradeneeded = r),
                            (o.onsuccess = () => {
                                var n = o.result;
                                try {
                                    var s = n.transaction([ct.DB_STORE_NAME], 'readonly');
                                } catch (e) {
                                    return void r(e);
                                }
                                var i = s.objectStore(ct.DB_STORE_NAME),
                                    a = 0,
                                    c = 0,
                                    u = e.length;
                                function l() {
                                    0 == c ? t() : r();
                                }
                                e.forEach((e) => {
                                    var t = i.get(e);
                                    (t.onsuccess = () => {
                                        ct.analyzePath(e).exists && ct.unlink(e),
                                            ct.createDataFile(Ke.dirname(e), Ke.basename(e), t.result, !0, !0, !0),
                                            ++a + c == u && l();
                                    }),
                                        (t.onerror = () => {
                                            c++, a + c == u && l();
                                        });
                                }),
                                    (s.onerror = r);
                            }),
                            (o.onerror = r);
                    },
                },
                ut = {
                    DEFAULT_POLLMASK: 5,
                    calculateAt: function (e, t, r) {
                        if (Ke.isAbs(t)) return t;
                        var n;
                        if (-100 === e) n = ct.cwd();
                        else {
                            var o = ct.getStream(e);
                            if (!o) throw new ct.ErrnoError(8);
                            n = o.path;
                        }
                        if (0 == t.length) {
                            if (!r) throw new ct.ErrnoError(44);
                            return n;
                        }
                        return Ke.join2(n, t);
                    },
                    doStat: function (e, t, r) {
                        try {
                            var n = e(t);
                        } catch (e) {
                            if (e && e.node && Ke.normalize(t) !== Ke.normalize(ct.getPath(e.node))) return -54;
                            throw e;
                        }
                        return (
                            (L[r >> 2] = n.dev),
                            (L[(r + 4) >> 2] = 0),
                            (L[(r + 8) >> 2] = n.ino),
                            (L[(r + 12) >> 2] = n.mode),
                            (L[(r + 16) >> 2] = n.nlink),
                            (L[(r + 20) >> 2] = n.uid),
                            (L[(r + 24) >> 2] = n.gid),
                            (L[(r + 28) >> 2] = n.rdev),
                            (L[(r + 32) >> 2] = 0),
                            (Ee = [
                                n.size >>> 0,
                                ((ve = n.size),
                                +Math.abs(ve) >= 1
                                    ? ve > 0
                                        ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                        : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                    : 0),
                            ]),
                            (L[(r + 40) >> 2] = Ee[0]),
                            (L[(r + 44) >> 2] = Ee[1]),
                            (L[(r + 48) >> 2] = 4096),
                            (L[(r + 52) >> 2] = n.blocks),
                            (L[(r + 56) >> 2] = (n.atime.getTime() / 1e3) | 0),
                            (L[(r + 60) >> 2] = 0),
                            (L[(r + 64) >> 2] = (n.mtime.getTime() / 1e3) | 0),
                            (L[(r + 68) >> 2] = 0),
                            (L[(r + 72) >> 2] = (n.ctime.getTime() / 1e3) | 0),
                            (L[(r + 76) >> 2] = 0),
                            (Ee = [
                                n.ino >>> 0,
                                ((ve = n.ino),
                                +Math.abs(ve) >= 1
                                    ? ve > 0
                                        ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                        : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                    : 0),
                            ]),
                            (L[(r + 80) >> 2] = Ee[0]),
                            (L[(r + 84) >> 2] = Ee[1]),
                            0
                        );
                    },
                    doMsync: function (e, t, r, n, o) {
                        var s = B.slice(e, e + r);
                        ct.msync(t, s, o, r, n);
                    },
                    varargs: void 0,
                    get: function () {
                        return (ut.varargs += 4), L[(ut.varargs - 4) >> 2];
                    },
                    getStr: function (e) {
                        return Y(e);
                    },
                    getStreamFromFD: function (e) {
                        var t = ct.getStream(e);
                        if (!t) throw new ct.ErrnoError(8);
                        return t;
                    },
                };
            function lt(e) {
                try {
                    return (e = ut.getStr(e)), ct.chdir(e), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function _t(e, t) {
                try {
                    return (e = ut.getStr(e)), ct.chmod(e, t), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            var ft = {
                mount: function (e) {
                    return (
                        (o.websocket = o.websocket && 'object' == typeof o.websocket ? o.websocket : {}),
                        (o.websocket._callbacks = {}),
                        (o.websocket.on = function (e, t) {
                            return 'function' == typeof t && (this._callbacks[e] = t), this;
                        }),
                        (o.websocket.emit = function (e, t) {
                            'function' == typeof this._callbacks[e] && this._callbacks[e].call(this, t);
                        }),
                        ct.createNode(null, '/', 16895, 0)
                    );
                },
                createSocket: function (e, t, r) {
                    if (1 == (t &= -526337) && r && 6 != r) throw new ct.ErrnoError(66);
                    var n = {
                            family: e,
                            type: t,
                            protocol: r,
                            server: null,
                            error: null,
                            peers: {},
                            pending: [],
                            recv_queue: [],
                            sock_ops: ft.websocket_sock_ops,
                        },
                        o = ft.nextname(),
                        s = ct.createNode(ft.root, o, 49152, 0);
                    s.sock = n;
                    var i = ct.createStream({ path: o, node: s, flags: 2, seekable: !1, stream_ops: ft.stream_ops });
                    return (n.stream = i), n;
                },
                getSocket: function (e) {
                    var t = ct.getStream(e);
                    return t && ct.isSocket(t.node.mode) ? t.node.sock : null;
                },
                stream_ops: {
                    poll: function (e) {
                        var t = e.node.sock;
                        return t.sock_ops.poll(t);
                    },
                    ioctl: function (e, t, r) {
                        var n = e.node.sock;
                        return n.sock_ops.ioctl(n, t, r);
                    },
                    read: function (e, t, r, n, o) {
                        var s = e.node.sock,
                            i = s.sock_ops.recvmsg(s, n);
                        return i ? (t.set(i.buffer, r), i.buffer.length) : 0;
                    },
                    write: function (e, t, r, n, o) {
                        var s = e.node.sock;
                        return s.sock_ops.sendmsg(s, t, r, n);
                    },
                    close: function (e) {
                        var t = e.node.sock;
                        t.sock_ops.close(t);
                    },
                },
                nextname: function () {
                    return ft.nextname.current || (ft.nextname.current = 0), 'socket[' + ft.nextname.current++ + ']';
                },
                websocket_sock_ops: {
                    createPeer: function (e, t, r) {
                        var n;
                        if (('object' == typeof t && ((n = t), (t = null), (r = null)), n))
                            if (n._socket) (t = n._socket.remoteAddress), (r = n._socket.remotePort);
                            else {
                                var i = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url);
                                if (!i) throw new Error('WebSocket URL must be in the format ws(s)://address:port');
                                (t = i[1]), (r = parseInt(i[2], 10));
                            }
                        else
                            try {
                                var a = o.websocket && 'object' == typeof o.websocket,
                                    c = 'ws:#'.replace('#', '//');
                                if (
                                    (a && 'string' == typeof o.websocket.url && (c = o.websocket.url),
                                    'ws://' === c || 'wss://' === c)
                                ) {
                                    var u = t.split('/');
                                    c = c + u[0] + ':' + r + '/' + u.slice(1).join('/');
                                }
                                var l = 'binary';
                                a && 'string' == typeof o.websocket.subprotocol && (l = o.websocket.subprotocol);
                                var _ = void 0;
                                'null' !== l && (_ = l = l.replace(/^ +| +$/g, '').split(/ *, */)),
                                    a && null === o.websocket.subprotocol && ((l = 'null'), (_ = void 0)),
                                    ((n = new (b ? s('ws') : WebSocket)(c, _)).binaryType = 'arraybuffer');
                            } catch (e) {
                                throw new ct.ErrnoError(23);
                            }
                        var f = { addr: t, port: r, socket: n, dgram_send_queue: [] };
                        return (
                            ft.websocket_sock_ops.addPeer(e, f),
                            ft.websocket_sock_ops.handlePeerEvents(e, f),
                            2 === e.type &&
                                void 0 !== e.sport &&
                                f.dgram_send_queue.push(
                                    new Uint8Array([
                                        255,
                                        255,
                                        255,
                                        255,
                                        'p'.charCodeAt(0),
                                        'o'.charCodeAt(0),
                                        'r'.charCodeAt(0),
                                        't'.charCodeAt(0),
                                        (65280 & e.sport) >> 8,
                                        255 & e.sport,
                                    ]),
                                ),
                            f
                        );
                    },
                    getPeer: function (e, t, r) {
                        return e.peers[t + ':' + r];
                    },
                    addPeer: function (e, t) {
                        e.peers[t.addr + ':' + t.port] = t;
                    },
                    removePeer: function (e, t) {
                        delete e.peers[t.addr + ':' + t.port];
                    },
                    handlePeerEvents: function (e, t) {
                        var r = !0,
                            n = function () {
                                o.websocket.emit('open', e.stream.fd);
                                try {
                                    for (var r = t.dgram_send_queue.shift(); r; )
                                        t.socket.send(r), (r = t.dgram_send_queue.shift());
                                } catch (e) {
                                    t.socket.close();
                                }
                            };
                        function s(n) {
                            if ('string' == typeof n) {
                                n = new TextEncoder().encode(n);
                            } else {
                                if ((I(void 0 !== n.byteLength), 0 == n.byteLength)) return;
                                n = new Uint8Array(n);
                            }
                            var s = r;
                            if (
                                ((r = !1),
                                s &&
                                    10 === n.length &&
                                    255 === n[0] &&
                                    255 === n[1] &&
                                    255 === n[2] &&
                                    255 === n[3] &&
                                    n[4] === 'p'.charCodeAt(0) &&
                                    n[5] === 'o'.charCodeAt(0) &&
                                    n[6] === 'r'.charCodeAt(0) &&
                                    n[7] === 't'.charCodeAt(0))
                            ) {
                                var i = (n[8] << 8) | n[9];
                                return (
                                    ft.websocket_sock_ops.removePeer(e, t), (t.port = i), void ft.websocket_sock_ops.addPeer(e, t)
                                );
                            }
                            e.recv_queue.push({ addr: t.addr, port: t.port, data: n }), o.websocket.emit('message', e.stream.fd);
                        }
                        b
                            ? (t.socket.on('open', n),
                              t.socket.on('message', function (e, t) {
                                  t && s(new Uint8Array(e).buffer);
                              }),
                              t.socket.on('close', function () {
                                  o.websocket.emit('close', e.stream.fd);
                              }),
                              t.socket.on('error', function (t) {
                                  (e.error = 14),
                                      o.websocket.emit('error', [e.stream.fd, e.error, 'ECONNREFUSED: Connection refused']);
                              }))
                            : ((t.socket.onopen = n),
                              (t.socket.onclose = function () {
                                  o.websocket.emit('close', e.stream.fd);
                              }),
                              (t.socket.onmessage = function (e) {
                                  s(e.data);
                              }),
                              (t.socket.onerror = function (t) {
                                  (e.error = 14),
                                      o.websocket.emit('error', [e.stream.fd, e.error, 'ECONNREFUSED: Connection refused']);
                              }));
                    },
                    poll: function (e) {
                        if (1 === e.type && e.server) return e.pending.length ? 65 : 0;
                        var t = 0,
                            r = 1 === e.type ? ft.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
                        return (
                            (e.recv_queue.length ||
                                !r ||
                                (r && r.socket.readyState === r.socket.CLOSING) ||
                                (r && r.socket.readyState === r.socket.CLOSED)) &&
                                (t |= 65),
                            (!r || (r && r.socket.readyState === r.socket.OPEN)) && (t |= 4),
                            ((r && r.socket.readyState === r.socket.CLOSING) || (r && r.socket.readyState === r.socket.CLOSED)) &&
                                (t |= 16),
                            t
                        );
                    },
                    ioctl: function (e, t, r) {
                        if (21531 === t) {
                            var n = 0;
                            return e.recv_queue.length && (n = e.recv_queue[0].data.length), (L[r >> 2] = n), 0;
                        }
                        return 28;
                    },
                    close: function (e) {
                        if (e.server) {
                            try {
                                e.server.close();
                            } catch (e) {}
                            e.server = null;
                        }
                        for (var t = Object.keys(e.peers), r = 0; r < t.length; r++) {
                            var n = e.peers[t[r]];
                            try {
                                n.socket.close();
                            } catch (e) {}
                            ft.websocket_sock_ops.removePeer(e, n);
                        }
                        return 0;
                    },
                    bind: function (e, t, r) {
                        if (void 0 !== e.saddr || void 0 !== e.sport) throw new ct.ErrnoError(28);
                        if (((e.saddr = t), (e.sport = r), 2 === e.type)) {
                            e.server && (e.server.close(), (e.server = null));
                            try {
                                e.sock_ops.listen(e, 0);
                            } catch (e) {
                                if (!(e instanceof ct.ErrnoError)) throw e;
                                if (138 !== e.errno) throw e;
                            }
                        }
                    },
                    connect: function (e, t, r) {
                        if (e.server) throw new ct.ErrnoError(138);
                        if (void 0 !== e.daddr && void 0 !== e.dport) {
                            var n = ft.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                            if (n)
                                throw n.socket.readyState === n.socket.CONNECTING ? new ct.ErrnoError(7) : new ct.ErrnoError(30);
                        }
                        var o = ft.websocket_sock_ops.createPeer(e, t, r);
                        throw ((e.daddr = o.addr), (e.dport = o.port), new ct.ErrnoError(26));
                    },
                    listen: function (e, t) {
                        if (!b) throw new ct.ErrnoError(138);
                        if (e.server) throw new ct.ErrnoError(28);
                        var r = s('ws').Server,
                            n = e.saddr;
                        (e.server = new r({ host: n, port: e.sport })),
                            o.websocket.emit('listen', e.stream.fd),
                            e.server.on('connection', function (t) {
                                if (1 === e.type) {
                                    var r = ft.createSocket(e.family, e.type, e.protocol),
                                        n = ft.websocket_sock_ops.createPeer(r, t);
                                    (r.daddr = n.addr),
                                        (r.dport = n.port),
                                        e.pending.push(r),
                                        o.websocket.emit('connection', r.stream.fd);
                                } else ft.websocket_sock_ops.createPeer(e, t), o.websocket.emit('connection', e.stream.fd);
                            }),
                            e.server.on('close', function () {
                                o.websocket.emit('close', e.stream.fd), (e.server = null);
                            }),
                            e.server.on('error', function (t) {
                                (e.error = 23),
                                    o.websocket.emit('error', [e.stream.fd, e.error, 'EHOSTUNREACH: Host is unreachable']);
                            });
                    },
                    accept: function (e) {
                        if (!e.server || !e.pending.length) throw new ct.ErrnoError(28);
                        var t = e.pending.shift();
                        return (t.stream.flags = e.stream.flags), t;
                    },
                    getname: function (e, t) {
                        var r, n;
                        if (t) {
                            if (void 0 === e.daddr || void 0 === e.dport) throw new ct.ErrnoError(53);
                            (r = e.daddr), (n = e.dport);
                        } else (r = e.saddr || 0), (n = e.sport || 0);
                        return { addr: r, port: n };
                    },
                    sendmsg: function (e, t, r, n, o, s) {
                        if (2 === e.type) {
                            if (((void 0 !== o && void 0 !== s) || ((o = e.daddr), (s = e.dport)), void 0 === o || void 0 === s))
                                throw new ct.ErrnoError(17);
                        } else (o = e.daddr), (s = e.dport);
                        var i,
                            a = ft.websocket_sock_ops.getPeer(e, o, s);
                        if (1 === e.type) {
                            if (!a || a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED)
                                throw new ct.ErrnoError(53);
                            if (a.socket.readyState === a.socket.CONNECTING) throw new ct.ErrnoError(6);
                        }
                        if (
                            (ArrayBuffer.isView(t) && ((r += t.byteOffset), (t = t.buffer)),
                            (i = t.slice(r, r + n)),
                            2 === e.type && (!a || a.socket.readyState !== a.socket.OPEN))
                        )
                            return (
                                (a && a.socket.readyState !== a.socket.CLOSING && a.socket.readyState !== a.socket.CLOSED) ||
                                    (a = ft.websocket_sock_ops.createPeer(e, o, s)),
                                a.dgram_send_queue.push(i),
                                n
                            );
                        try {
                            return a.socket.send(i), n;
                        } catch (e) {
                            throw new ct.ErrnoError(28);
                        }
                    },
                    recvmsg: function (e, t) {
                        if (1 === e.type && e.server) throw new ct.ErrnoError(53);
                        var r = e.recv_queue.shift();
                        if (!r) {
                            if (1 === e.type) {
                                var n = ft.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                                if (n) {
                                    if (n.socket.readyState === n.socket.CLOSING || n.socket.readyState === n.socket.CLOSED)
                                        return null;
                                    throw new ct.ErrnoError(6);
                                }
                                throw new ct.ErrnoError(53);
                            }
                            throw new ct.ErrnoError(6);
                        }
                        var o = r.data.byteLength || r.data.length,
                            s = r.data.byteOffset || 0,
                            i = r.data.buffer || r.data,
                            a = Math.min(t, o),
                            c = { buffer: new Uint8Array(i, s, a), addr: r.addr, port: r.port };
                        if (1 === e.type && a < o) {
                            var u = o - a;
                            (r.data = new Uint8Array(i, s + a, u)), e.recv_queue.unshift(r);
                        }
                        return c;
                    },
                },
            };
            function dt(e) {
                var t = ft.getSocket(e);
                if (!t) throw new ct.ErrnoError(8);
                return t;
            }
            function mt(e) {
                return (L[vn() >> 2] = e), e;
            }
            function pt(e) {
                return (255 & e) + '.' + ((e >> 8) & 255) + '.' + ((e >> 16) & 255) + '.' + ((e >> 24) & 255);
            }
            function ht(e) {
                var t = '',
                    r = 0,
                    n = 0,
                    o = 0,
                    s = 0,
                    i = 0,
                    a = 0,
                    c = [65535 & e[0], e[0] >> 16, 65535 & e[1], e[1] >> 16, 65535 & e[2], e[2] >> 16, 65535 & e[3], e[3] >> 16],
                    u = !0,
                    l = '';
                for (a = 0; a < 5; a++)
                    if (0 !== c[a]) {
                        u = !1;
                        break;
                    }
                if (u) {
                    if (((l = pt(c[6] | (c[7] << 16))), -1 === c[5])) return (t = '::ffff:'), (t += l);
                    if (0 === c[5]) return (t = '::'), '0.0.0.0' === l && (l = ''), '0.0.0.1' === l && (l = '1'), (t += l);
                }
                for (r = 0; r < 8; r++) 0 === c[r] && (r - o > 1 && (i = 0), (o = r), i++), i > n && (s = r - (n = i) + 1);
                for (r = 0; r < 8; r++)
                    n > 1 && 0 === c[r] && r >= s && r < s + n
                        ? r === s && ((t += ':'), 0 === s && (t += ':'))
                        : ((t += Number(kn(65535 & c[r])).toString(16)), (t += r < 7 ? ':' : ''));
                return t;
            }
            function wt(e, t) {
                var r,
                    n = z[e >> 1],
                    o = kn(W[(e + 2) >> 1]);
                switch (n) {
                    case 2:
                        if (16 !== t) return { errno: 28 };
                        r = pt((r = L[(e + 4) >> 2]));
                        break;
                    case 10:
                        if (28 !== t) return { errno: 28 };
                        r = ht((r = [L[(e + 8) >> 2], L[(e + 12) >> 2], L[(e + 16) >> 2], L[(e + 20) >> 2]]));
                        break;
                    default:
                        return { errno: 5 };
                }
                return { family: n, addr: r, port: o };
            }
            function gt(e) {
                for (var t = e.split('.'), r = 0; r < 4; r++) {
                    var n = Number(t[r]);
                    if (isNaN(n)) return null;
                    t[r] = n;
                }
                return (t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24)) >>> 0;
            }
            function yt(e) {
                return parseInt(e);
            }
            function bt(e) {
                var t,
                    r,
                    n,
                    o,
                    s = [];
                if (
                    !/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(
                        e,
                    )
                )
                    return null;
                if ('::' === e) return [0, 0, 0, 0, 0, 0, 0, 0];
                for (
                    (e = e.startsWith('::') ? e.replace('::', 'Z:') : e.replace('::', ':Z:')).indexOf('.') > 0
                        ? (((t = (e = e.replace(new RegExp('[.]', 'g'), ':')).split(':'))[t.length - 4] =
                              yt(t[t.length - 4]) + 256 * yt(t[t.length - 3])),
                          (t[t.length - 3] = yt(t[t.length - 2]) + 256 * yt(t[t.length - 1])),
                          (t = t.slice(0, t.length - 2)))
                        : (t = e.split(':')),
                        n = 0,
                        o = 0,
                        r = 0;
                    r < t.length;
                    r++
                )
                    if ('string' == typeof t[r])
                        if ('Z' === t[r]) {
                            for (o = 0; o < 8 - t.length + 1; o++) s[r + o] = 0;
                            n = o - 1;
                        } else s[r + n] = En(parseInt(t[r], 16));
                    else s[r + n] = t[r];
                return [(s[1] << 16) | s[0], (s[3] << 16) | s[2], (s[5] << 16) | s[4], (s[7] << 16) | s[6]];
            }
            var vt = {
                address_map: { id: 1, addrs: {}, names: {} },
                lookup_name: function (e) {
                    var t,
                        r = gt(e);
                    if (null !== r) return e;
                    if (null !== (r = bt(e))) return e;
                    if (vt.address_map.addrs[e]) t = vt.address_map.addrs[e];
                    else {
                        var n = vt.address_map.id++;
                        I(n < 65535, 'exceeded max address mappings of 65535'),
                            (t = '172.29.' + (255 & n) + '.' + (65280 & n)),
                            (vt.address_map.names[t] = e),
                            (vt.address_map.addrs[e] = t);
                    }
                    return t;
                },
                lookup_addr: function (e) {
                    return vt.address_map.names[e] ? vt.address_map.names[e] : null;
                },
            };
            function Et(e, t, r) {
                if (r && 0 === e) return null;
                var n = wt(e, t);
                if (n.errno) throw new ct.ErrnoError(n.errno);
                return (n.addr = vt.lookup_addr(n.addr) || n.addr), n;
            }
            function At(e, t, r) {
                try {
                    var n = dt(e),
                        o = Et(t, r);
                    return n.sock_ops.connect(n, o.addr, o.port), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function kt(e, t, r, n) {
                try {
                    if (((t = ut.getStr(t)), (t = ut.calculateAt(e, t)), -8 & r)) return -28;
                    var o = ct.lookupPath(t, { follow: !0 }).node;
                    if (!o) return -44;
                    var s = '';
                    return 4 & r && (s += 'r'), 2 & r && (s += 'w'), 1 & r && (s += 'x'), s && ct.nodePermissions(o, s) ? -2 : 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function St(e, t, r, n) {
                return 0;
            }
            function Ot(e, t) {
                try {
                    return ct.fchmod(e, t), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function xt(e, t, r) {
                ut.varargs = r;
                try {
                    var n = ut.getStreamFromFD(e);
                    switch (t) {
                        case 0:
                            return (o = ut.get()) < 0 ? -28 : ct.createStream(n, o).fd;
                        case 1:
                        case 2:
                        case 6:
                        case 7:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = ut.get();
                            return (n.flags |= o), 0;
                        case 5:
                            o = ut.get();
                            return (z[(o + 0) >> 1] = 2), 0;
                        case 16:
                        case 8:
                        default:
                            return -28;
                        case 9:
                            return mt(28), -1;
                    }
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Nt(e, t) {
                try {
                    var r = ut.getStreamFromFD(e);
                    return ut.doStat(ct.stat, r.path, t);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function jt(e, t, r) {
                try {
                    return (
                        (e = ut.getStr(e)),
                        (L[(r + 4) >> 2] = 4096),
                        (L[(r + 40) >> 2] = 4096),
                        (L[(r + 8) >> 2] = 1e6),
                        (L[(r + 12) >> 2] = 5e5),
                        (L[(r + 16) >> 2] = 5e5),
                        (L[(r + 20) >> 2] = ct.nextInode),
                        (L[(r + 24) >> 2] = 1e6),
                        (L[(r + 28) >> 2] = 42),
                        (L[(r + 44) >> 2] = 2),
                        (L[(r + 36) >> 2] = 255),
                        0
                    );
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Dt(e, t, r) {
                try {
                    ut.getStreamFromFD(e);
                    return jt(0, 0, r);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Mt(e, t) {
                return (t + 2097152) >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN;
            }
            function Rt(e, t, r) {
                try {
                    var n = Mt(t, r);
                    return isNaN(n) ? -61 : (ct.ftruncate(e, n), 0);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Tt(e, t) {
                try {
                    if (0 === t) return -28;
                    var r = ct.cwd(),
                        n = K(r) + 1;
                    return t < n ? -68 : (Z(r, e, t), n);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function It(e, t, r) {
                try {
                    var n = ut.getStreamFromFD(e);
                    n.getdents || (n.getdents = ct.readdir(n.path));
                    for (
                        var o = 280, s = 0, i = ct.llseek(n, 0, 1), a = Math.floor(i / o);
                        a < n.getdents.length && s + o <= r;

                    ) {
                        var c,
                            u,
                            l = n.getdents[a];
                        if ('.' === l) (c = n.node.id), (u = 4);
                        else if ('..' === l) {
                            (c = ct.lookupPath(n.path, { parent: !0 }).node.id), (u = 4);
                        } else {
                            var _ = ct.lookupNode(n.node, l);
                            (c = _.id), (u = ct.isChrdev(_.mode) ? 2 : ct.isDir(_.mode) ? 4 : ct.isLink(_.mode) ? 10 : 8);
                        }
                        (Ee = [
                            c >>> 0,
                            ((ve = c),
                            +Math.abs(ve) >= 1
                                ? ve > 0
                                    ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                    : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                : 0),
                        ]),
                            (L[(t + s) >> 2] = Ee[0]),
                            (L[(t + s + 4) >> 2] = Ee[1]),
                            (Ee = [
                                ((a + 1) * o) >>> 0,
                                ((ve = (a + 1) * o),
                                +Math.abs(ve) >= 1
                                    ? ve > 0
                                        ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                        : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                    : 0),
                            ]),
                            (L[(t + s + 8) >> 2] = Ee[0]),
                            (L[(t + s + 12) >> 2] = Ee[1]),
                            (z[(t + s + 16) >> 1] = 280),
                            (U[(t + s + 18) >> 0] = u),
                            Z(l, t + s + 19, 256),
                            (s += o),
                            (a += 1);
                    }
                    return ct.llseek(n, a * o, 0), s;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function $t(e, t, r) {
                ut.varargs = r;
                try {
                    var n = ut.getStreamFromFD(e);
                    switch (t) {
                        case 21509:
                        case 21505:
                        case 21510:
                        case 21511:
                        case 21512:
                        case 21506:
                        case 21507:
                        case 21508:
                        case 21523:
                        case 21524:
                            return n.tty ? 0 : -59;
                        case 21519:
                            if (!n.tty) return -59;
                            var o = ut.get();
                            return (L[o >> 2] = 0), 0;
                        case 21520:
                            return n.tty ? -28 : -59;
                        case 21531:
                            o = ut.get();
                            return ct.ioctl(n, t, o);
                        default:
                            ye('bad ioctl syscall ' + t);
                    }
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Ft(e, t) {
                try {
                    return (e = ut.getStr(e)), ut.doStat(ct.lstat, e, t);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Pt(e, t, r) {
                try {
                    return (
                        (t = ut.getStr(t)),
                        (t = ut.calculateAt(e, t)),
                        '/' === (t = Ke.normalize(t))[t.length - 1] && (t = t.substr(0, t.length - 1)),
                        ct.mkdir(t, r, 0),
                        0
                    );
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Ct(e, t, r, n) {
                try {
                    t = ut.getStr(t);
                    var o = 256 & n,
                        s = 4096 & n;
                    return (n &= -4353), (t = ut.calculateAt(e, t, s)), ut.doStat(o ? ct.lstat : ct.stat, t, r);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Ut(e, t, r, n) {
                ut.varargs = n;
                try {
                    (t = ut.getStr(t)), (t = ut.calculateAt(e, t));
                    var o = n ? ut.get() : 0;
                    return ct.open(t, r, o).fd;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Bt(e, t, r, n) {
                try {
                    if (((t = ut.getStr(t)), (t = ut.calculateAt(e, t)), n <= 0)) return -28;
                    var o = ct.readlink(t),
                        s = Math.min(n, K(o)),
                        i = U[r + s];
                    return Z(o, r, n + 1), (U[r + s] = i), s;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function zt(e, t, r, n) {
                try {
                    return (
                        (t = ut.getStr(t)),
                        (n = ut.getStr(n)),
                        (t = ut.calculateAt(e, t)),
                        (n = ut.calculateAt(r, n)),
                        ct.rename(t, n),
                        0
                    );
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Wt(e) {
                try {
                    return (e = ut.getStr(e)), ct.rmdir(e), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Lt(e, t, r, n, o, s) {
                try {
                    var i = dt(e),
                        a = Et(o, s, !0);
                    return a ? i.sock_ops.sendmsg(i, U, t, r, a.addr, a.port) : ct.write(i.stream, U, t, r);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Ht(e, t, r) {
                try {
                    return ft.createSocket(e, t, r).stream.fd;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Vt(e, t) {
                try {
                    return (e = ut.getStr(e)), ut.doStat(ct.stat, e, t);
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function qt(e, t, r) {
                try {
                    return (
                        (t = ut.getStr(t)),
                        (t = ut.calculateAt(e, t)),
                        0 === r ? ct.unlink(t) : 512 === r ? ct.rmdir(t) : ye('Invalid flags passed to unlinkat'),
                        0
                    );
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Jt(e, t, r, n) {
                try {
                    if (((t = ut.getStr(t)), (t = ut.calculateAt(e, t, !0)), r)) {
                        var o = L[r >> 2],
                            s = L[(r + 4) >> 2];
                        (i = 1e3 * o + s / 1e6), (a = 1e3 * (o = L[(r += 8) >> 2]) + (s = L[(r + 4) >> 2]) / 1e6);
                    } else
                        var i = Date.now(),
                            a = i;
                    return ct.utime(t, i, a), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function Gt() {
                return Date.now();
            }
            var Yt = !0;
            function Xt() {
                return Yt;
            }
            function Zt() {
                throw 1 / 0;
            }
            function Kt(e, t) {
                var r = new Date(1e3 * L[e >> 2]);
                (L[t >> 2] = r.getUTCSeconds()),
                    (L[(t + 4) >> 2] = r.getUTCMinutes()),
                    (L[(t + 8) >> 2] = r.getUTCHours()),
                    (L[(t + 12) >> 2] = r.getUTCDate()),
                    (L[(t + 16) >> 2] = r.getUTCMonth()),
                    (L[(t + 20) >> 2] = r.getUTCFullYear() - 1900),
                    (L[(t + 24) >> 2] = r.getUTCDay());
                var n = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    o = ((r.getTime() - n) / 864e5) | 0;
                L[(t + 28) >> 2] = o;
            }
            function Qt(e, t) {
                var r = new Date(1e3 * L[e >> 2]);
                (L[t >> 2] = r.getSeconds()),
                    (L[(t + 4) >> 2] = r.getMinutes()),
                    (L[(t + 8) >> 2] = r.getHours()),
                    (L[(t + 12) >> 2] = r.getDate()),
                    (L[(t + 16) >> 2] = r.getMonth()),
                    (L[(t + 20) >> 2] = r.getFullYear() - 1900),
                    (L[(t + 24) >> 2] = r.getDay());
                var n = new Date(r.getFullYear(), 0, 1),
                    o = ((r.getTime() - n.getTime()) / 864e5) | 0;
                (L[(t + 28) >> 2] = o), (L[(t + 36) >> 2] = -60 * r.getTimezoneOffset());
                var s = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                    i = n.getTimezoneOffset(),
                    a = 0 | (s != i && r.getTimezoneOffset() == Math.min(i, s));
                L[(t + 32) >> 2] = a;
            }
            function er(e) {
                var t = new Date(
                        L[(e + 20) >> 2] + 1900,
                        L[(e + 16) >> 2],
                        L[(e + 12) >> 2],
                        L[(e + 8) >> 2],
                        L[(e + 4) >> 2],
                        L[e >> 2],
                        0,
                    ),
                    r = L[(e + 32) >> 2],
                    n = t.getTimezoneOffset(),
                    o = new Date(t.getFullYear(), 0, 1),
                    s = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
                    i = o.getTimezoneOffset(),
                    a = Math.min(i, s);
                if (r < 0) L[(e + 32) >> 2] = Number(s != i && a == n);
                else if (r > 0 != (a == n)) {
                    var c = Math.max(i, s),
                        u = r > 0 ? a : c;
                    t.setTime(t.getTime() + 6e4 * (u - n));
                }
                L[(e + 24) >> 2] = t.getDay();
                var l = ((t.getTime() - o.getTime()) / 864e5) | 0;
                return (
                    (L[(e + 28) >> 2] = l),
                    (L[e >> 2] = t.getSeconds()),
                    (L[(e + 4) >> 2] = t.getMinutes()),
                    (L[(e + 8) >> 2] = t.getHours()),
                    (L[(e + 12) >> 2] = t.getDate()),
                    (L[(e + 16) >> 2] = t.getMonth()),
                    (t.getTime() / 1e3) | 0
                );
            }
            function tr(e, t, r, n, o, s) {
                try {
                    var i = ct.getStream(n);
                    if (!i) return -8;
                    var a = ct.mmap(i, e, o, t, r),
                        c = a.ptr;
                    return (L[s >> 2] = a.allocated), c;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function rr(e, t, r, n, o, s) {
                try {
                    var i = ct.getStream(o);
                    i && (2 & r && ut.doMsync(e, i, t, n, s), ct.munmap(i));
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return -e.errno;
                }
            }
            function nr(e, t, r) {
                var n = new Date().getFullYear(),
                    o = new Date(n, 0, 1),
                    s = new Date(n, 6, 1),
                    i = o.getTimezoneOffset(),
                    a = s.getTimezoneOffset(),
                    c = Math.max(i, a);
                function u(e) {
                    var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                    return t ? t[1] : 'GMT';
                }
                (L[e >> 2] = 60 * c), (L[t >> 2] = Number(i != a));
                var l = u(o),
                    _ = u(s),
                    f = Q(l),
                    d = Q(_);
                a < i ? ((H[r >> 2] = f), (H[(r + 4) >> 2] = d)) : ((H[r >> 2] = d), (H[(r + 4) >> 2] = f));
            }
            function or(e, t, r) {
                or.called || ((or.called = !0), nr(e, t, r));
            }
            function sr() {
                ye('');
            }
            var ir = {
                batchedQuotaMax: 65536,
                getBatchedRandomValues: function (e, t) {
                    const r = 'undefined' != typeof SharedArrayBuffer && o.HEAPU8.buffer instanceof SharedArrayBuffer,
                        n = r ? new ArrayBuffer(t) : o.HEAPU8.buffer,
                        s = r ? 0 : e;
                    for (let e = 0; e < t; e += this.batchedQuotaMax) {
                        const r = new Uint8Array(n, s + e, Math.min(t - e, this.batchedQuotaMax));
                        crypto.getRandomValues(r);
                    }
                    if (r) {
                        new Uint8Array(o.HEAPU8.buffer, e, t).set(new Uint8Array(n));
                    }
                },
            };
            function ar(e, t) {
                return 'object' == typeof crypto && 'function' == typeof crypto.getRandomValues
                    ? (ir.getBatchedRandomValues(e, t), 0)
                    : -1;
            }
            var cr,
                ur = [];
            function lr(e, t) {
                var r;
                for (ur.length = 0, t >>= 2; (r = B[e++]); ) (t += (105 != r) & t), ur.push(105 == r ? L[t] : q[t++ >> 1]), ++t;
                return ur;
            }
            function _r(e, t, r) {
                var n = lr(t, r);
                return je[e].apply(null, n);
            }
            function fr() {
                return 2147483648;
            }
            function dr() {
                return b ? 1 : 1e3;
            }
            function mr(e, t, r) {
                B.copyWithin(e, t, t + r);
            }
            function pr(e) {
                try {
                    return M.grow((e - C.byteLength + 65535) >>> 16), re(M.buffer), 1;
                } catch (e) {}
            }
            function hr(e) {
                var t = B.length,
                    r = 2147483648;
                if ((e >>>= 0) > r) return !1;
                for (var n = 1; n <= 4; n *= 2) {
                    var o = t * (1 + 0.2 / n);
                    if (((o = Math.min(o, e + 100663296)), pr(Math.min(r, (s = Math.max(e, o)) + (((i = 65536) - (s % i)) % i)))))
                        return !0;
                }
                var s, i;
                return !1;
            }
            cr = b
                ? () => {
                      var e = process.hrtime();
                      return 1e3 * e[0] + e[1] / 1e6;
                  }
                : 'undefined' != typeof dateNow
                ? dateNow
                : () => performance.now();
            var wr = {};
            function gr() {
                return h || './this.program';
            }
            function yr() {
                if (!yr.strings) {
                    var e = {
                        USER: 'web_user',
                        LOGNAME: 'web_user',
                        PATH: '/',
                        PWD: '/',
                        HOME: '/home/web_user',
                        LANG:
                            (('object' == typeof navigator && navigator.languages && navigator.languages[0]) || 'C').replace(
                                '-',
                                '_',
                            ) + '.UTF-8',
                        _: gr(),
                    };
                    for (var t in wr) void 0 === wr[t] ? delete e[t] : (e[t] = wr[t]);
                    var r = [];
                    for (var t in e) r.push(t + '=' + e[t]);
                    yr.strings = r;
                }
                return yr.strings;
            }
            function br(e, t) {
                var r = 0;
                return (
                    yr().forEach(function (n, o) {
                        var s = t + r;
                        (H[(e + 4 * o) >> 2] = s), te(n, s), (r += n.length + 1);
                    }),
                    0
                );
            }
            function vr(e, t) {
                var r = yr();
                H[e >> 2] = r.length;
                var n = 0;
                return (
                    r.forEach(function (e) {
                        n += e.length + 1;
                    }),
                    (H[t >> 2] = n),
                    0
                );
            }
            function Er(e) {
                Ao(e);
            }
            function Ar(e) {
                try {
                    var t = ut.getStreamFromFD(e);
                    return ct.close(t), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function kr(e, t) {
                try {
                    var r = ut.getStreamFromFD(e),
                        n = r.tty ? 2 : ct.isDir(r.mode) ? 3 : ct.isLink(r.mode) ? 7 : 4;
                    return (U[t >> 0] = n), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function Sr(e, t, r, n) {
                for (var o = 0, s = 0; s < r; s++) {
                    var i = H[t >> 2],
                        a = H[(t + 4) >> 2];
                    t += 8;
                    var c = ct.read(e, U, i, a, n);
                    if (c < 0) return -1;
                    if (((o += c), c < a)) break;
                }
                return o;
            }
            function Or(e, t, r, n, o, s) {
                try {
                    var i = Mt(n, o);
                    if (isNaN(i)) return 61;
                    var a = Sr(ut.getStreamFromFD(e), t, r, i);
                    return (L[s >> 2] = a), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function xr(e, t, r, n) {
                for (var o = 0, s = 0; s < r; s++) {
                    var i = H[t >> 2],
                        a = H[(t + 4) >> 2];
                    t += 8;
                    var c = ct.write(e, U, i, a, n);
                    if (c < 0) return -1;
                    o += c;
                }
                return o;
            }
            function Nr(e, t, r, n, o, s) {
                try {
                    var i = Mt(n, o);
                    if (isNaN(i)) return 61;
                    var a = xr(ut.getStreamFromFD(e), t, r, i);
                    return (L[s >> 2] = a), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function jr(e, t, r, n) {
                try {
                    var o = Sr(ut.getStreamFromFD(e), t, r);
                    return (L[n >> 2] = o), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function Dr(e, t, r, n, o) {
                try {
                    var s = Mt(t, r);
                    if (isNaN(s)) return 61;
                    var i = ut.getStreamFromFD(e);
                    return (
                        ct.llseek(i, s, n),
                        (Ee = [
                            i.position >>> 0,
                            ((ve = i.position),
                            +Math.abs(ve) >= 1
                                ? ve > 0
                                    ? (0 | Math.min(+Math.floor(ve / 4294967296), 4294967295)) >>> 0
                                    : ~~+Math.ceil((ve - +(~~ve >>> 0)) / 4294967296) >>> 0
                                : 0),
                        ]),
                        (L[o >> 2] = Ee[0]),
                        (L[(o + 4) >> 2] = Ee[1]),
                        i.getdents && 0 === s && 0 === n && (i.getdents = null),
                        0
                    );
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function Mr(e) {
                try {
                    var t = ut.getStreamFromFD(e);
                    return t.stream_ops && t.stream_ops.fsync ? -t.stream_ops.fsync(t) : 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function Rr(e, t, r, n) {
                try {
                    var o = xr(ut.getStreamFromFD(e), t, r);
                    return (H[n >> 2] = o), 0;
                } catch (e) {
                    if (void 0 === ct || !(e instanceof ct.ErrnoError)) throw e;
                    return e.errno;
                }
            }
            function Tr() {
                return D();
            }
            function Ir(e) {
                return e;
            }
            function $r() {
                return __dotnet_runtime.__linker_exports.mono_set_timeout.apply(__dotnet_runtime, arguments);
            }
            function Fr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_bind_cs_function.apply(__dotnet_runtime, arguments);
            }
            function Pr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_bind_js_function.apply(__dotnet_runtime, arguments);
            }
            function Cr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_create_cs_owned_object_ref.apply(__dotnet_runtime, arguments);
            }
            function Ur() {
                return __dotnet_runtime.__linker_exports.mono_wasm_get_by_index_ref.apply(__dotnet_runtime, arguments);
            }
            function Br() {
                return __dotnet_runtime.__linker_exports.mono_wasm_get_global_object_ref.apply(__dotnet_runtime, arguments);
            }
            function zr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_get_object_property_ref.apply(__dotnet_runtime, arguments);
            }
            function Wr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_invoke_bound_function.apply(__dotnet_runtime, arguments);
            }
            function Lr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_invoke_js_blazor.apply(__dotnet_runtime, arguments);
            }
            function Hr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_invoke_js_with_args_ref.apply(__dotnet_runtime, arguments);
            }
            function Vr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_marshal_promise.apply(__dotnet_runtime, arguments);
            }
            function qr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_release_cs_owned_object.apply(__dotnet_runtime, arguments);
            }
            function Jr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_set_by_index_ref.apply(__dotnet_runtime, arguments);
            }
            function Gr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_set_entrypoint_breakpoint.apply(__dotnet_runtime, arguments);
            }
            function Yr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_set_object_property_ref.apply(__dotnet_runtime, arguments);
            }
            function Xr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_trace_logger.apply(__dotnet_runtime, arguments);
            }
            function Zr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_typed_array_from_ref.apply(__dotnet_runtime, arguments);
            }
            function Kr() {
                return __dotnet_runtime.__linker_exports.mono_wasm_typed_array_to_array_ref.apply(__dotnet_runtime, arguments);
            }
            function Qr() {
                return __dotnet_runtime.__linker_exports.schedule_background_exec.apply(__dotnet_runtime, arguments);
            }
            function en(e) {
                j(e);
            }
            function tn(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
            }
            function rn(e, t) {
                for (var r = 0, n = 0; n <= t; r += e[n++]);
                return r;
            }
            var nn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                on = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function sn(e, t) {
                for (var r = new Date(e.getTime()); t > 0; ) {
                    var n = tn(r.getFullYear()),
                        o = r.getMonth(),
                        s = (n ? nn : on)[o];
                    if (!(t > s - r.getDate())) return r.setDate(r.getDate() + t), r;
                    (t -= s - r.getDate() + 1),
                        r.setDate(1),
                        o < 11 ? r.setMonth(o + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                }
                return r;
            }
            function an(e, t, r, n) {
                var o = L[(n + 40) >> 2],
                    s = {
                        tm_sec: L[n >> 2],
                        tm_min: L[(n + 4) >> 2],
                        tm_hour: L[(n + 8) >> 2],
                        tm_mday: L[(n + 12) >> 2],
                        tm_mon: L[(n + 16) >> 2],
                        tm_year: L[(n + 20) >> 2],
                        tm_wday: L[(n + 24) >> 2],
                        tm_yday: L[(n + 28) >> 2],
                        tm_isdst: L[(n + 32) >> 2],
                        tm_gmtoff: L[(n + 36) >> 2],
                        tm_zone: o ? Y(o) : '',
                    },
                    i = Y(r),
                    a = {
                        '%c': '%a %b %d %H:%M:%S %Y',
                        '%D': '%m/%d/%y',
                        '%F': '%Y-%m-%d',
                        '%h': '%b',
                        '%r': '%I:%M:%S %p',
                        '%R': '%H:%M',
                        '%T': '%H:%M:%S',
                        '%x': '%m/%d/%y',
                        '%X': '%H:%M:%S',
                        '%Ec': '%c',
                        '%EC': '%C',
                        '%Ex': '%m/%d/%y',
                        '%EX': '%H:%M:%S',
                        '%Ey': '%y',
                        '%EY': '%Y',
                        '%Od': '%d',
                        '%Oe': '%e',
                        '%OH': '%H',
                        '%OI': '%I',
                        '%Om': '%m',
                        '%OM': '%M',
                        '%OS': '%S',
                        '%Ou': '%u',
                        '%OU': '%U',
                        '%OV': '%V',
                        '%Ow': '%w',
                        '%OW': '%W',
                        '%Oy': '%y',
                    };
                for (var c in a) i = i.replace(new RegExp(c, 'g'), a[c]);
                var u = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    l = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ];
                function _(e, t, r) {
                    for (var n = 'number' == typeof e ? e.toString() : e || ''; n.length < t; ) n = r[0] + n;
                    return n;
                }
                function f(e, t) {
                    return _(e, t, '0');
                }
                function d(e, t) {
                    function r(e) {
                        return e < 0 ? -1 : e > 0 ? 1 : 0;
                    }
                    var n;
                    return (
                        0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                            0 === (n = r(e.getMonth() - t.getMonth())) &&
                            (n = r(e.getDate() - t.getDate())),
                        n
                    );
                }
                function m(e) {
                    switch (e.getDay()) {
                        case 0:
                            return new Date(e.getFullYear() - 1, 11, 29);
                        case 1:
                            return e;
                        case 2:
                            return new Date(e.getFullYear(), 0, 3);
                        case 3:
                            return new Date(e.getFullYear(), 0, 2);
                        case 4:
                            return new Date(e.getFullYear(), 0, 1);
                        case 5:
                            return new Date(e.getFullYear() - 1, 11, 31);
                        case 6:
                            return new Date(e.getFullYear() - 1, 11, 30);
                    }
                }
                function p(e) {
                    var t = sn(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                        r = new Date(t.getFullYear(), 0, 4),
                        n = new Date(t.getFullYear() + 1, 0, 4),
                        o = m(r),
                        s = m(n);
                    return d(o, t) <= 0 ? (d(s, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear()) : t.getFullYear() - 1;
                }
                var h = {
                    '%a': function (e) {
                        return u[e.tm_wday].substring(0, 3);
                    },
                    '%A': function (e) {
                        return u[e.tm_wday];
                    },
                    '%b': function (e) {
                        return l[e.tm_mon].substring(0, 3);
                    },
                    '%B': function (e) {
                        return l[e.tm_mon];
                    },
                    '%C': function (e) {
                        return f(((e.tm_year + 1900) / 100) | 0, 2);
                    },
                    '%d': function (e) {
                        return f(e.tm_mday, 2);
                    },
                    '%e': function (e) {
                        return _(e.tm_mday, 2, ' ');
                    },
                    '%g': function (e) {
                        return p(e).toString().substring(2);
                    },
                    '%G': function (e) {
                        return p(e);
                    },
                    '%H': function (e) {
                        return f(e.tm_hour, 2);
                    },
                    '%I': function (e) {
                        var t = e.tm_hour;
                        return 0 == t ? (t = 12) : t > 12 && (t -= 12), f(t, 2);
                    },
                    '%j': function (e) {
                        return f(e.tm_mday + rn(tn(e.tm_year + 1900) ? nn : on, e.tm_mon - 1), 3);
                    },
                    '%m': function (e) {
                        return f(e.tm_mon + 1, 2);
                    },
                    '%M': function (e) {
                        return f(e.tm_min, 2);
                    },
                    '%n': function () {
                        return '\n';
                    },
                    '%p': function (e) {
                        return e.tm_hour >= 0 && e.tm_hour < 12 ? 'AM' : 'PM';
                    },
                    '%S': function (e) {
                        return f(e.tm_sec, 2);
                    },
                    '%t': function () {
                        return '\t';
                    },
                    '%u': function (e) {
                        return e.tm_wday || 7;
                    },
                    '%U': function (e) {
                        var t = e.tm_yday + 7 - e.tm_wday;
                        return f(Math.floor(t / 7), 2);
                    },
                    '%V': function (e) {
                        var t = Math.floor((e.tm_yday + 7 - ((e.tm_wday + 6) % 7)) / 7);
                        if (((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t)) {
                            if (53 == t) {
                                var r = (e.tm_wday + 371 - e.tm_yday) % 7;
                                4 == r || (3 == r && tn(e.tm_year)) || (t = 1);
                            }
                        } else {
                            t = 52;
                            var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                            (4 == n || (5 == n && tn((e.tm_year % 400) - 1))) && t++;
                        }
                        return f(t, 2);
                    },
                    '%w': function (e) {
                        return e.tm_wday;
                    },
                    '%W': function (e) {
                        var t = e.tm_yday + 7 - ((e.tm_wday + 6) % 7);
                        return f(Math.floor(t / 7), 2);
                    },
                    '%y': function (e) {
                        return (e.tm_year + 1900).toString().substring(2);
                    },
                    '%Y': function (e) {
                        return e.tm_year + 1900;
                    },
                    '%z': function (e) {
                        var t = e.tm_gmtoff,
                            r = t >= 0;
                        return (
                            (t = ((t = Math.abs(t) / 60) / 60) * 100 + (t % 60)), (r ? '+' : '-') + String('0000' + t).slice(-4)
                        );
                    },
                    '%Z': function (e) {
                        return e.tm_zone;
                    },
                    '%%': function () {
                        return '%';
                    },
                };
                for (var c in ((i = i.replace(/%%/g, '\0\0')), h)) i.includes(c) && (i = i.replace(new RegExp(c, 'g'), h[c](s)));
                var w = hn((i = i.replace(/\0\0/g, '%')), !1);
                return w.length > t ? 0 : (ee(w, e), w.length - 1);
            }
            function cn(e, t, r, n) {
                return an(e, t, r, n);
            }
            var un = function (e, t, r, n) {
                    e || (e = this),
                        (this.parent = e),
                        (this.mount = e.mount),
                        (this.mounted = null),
                        (this.id = ct.nextInode++),
                        (this.name = t),
                        (this.mode = r),
                        (this.node_ops = {}),
                        (this.stream_ops = {}),
                        (this.rdev = n);
                },
                ln = 365,
                _n = 146;
            let fn;
            Object.defineProperties(un.prototype, {
                read: {
                    get: function () {
                        return (this.mode & ln) === ln;
                    },
                    set: function (e) {
                        e ? (this.mode |= ln) : (this.mode &= ~ln);
                    },
                },
                write: {
                    get: function () {
                        return (this.mode & _n) === _n;
                    },
                    set: function (e) {
                        e ? (this.mode |= _n) : (this.mode &= ~_n);
                    },
                },
                isFolder: {
                    get: function () {
                        return ct.isDir(this.mode);
                    },
                },
                isDevice: {
                    get: function () {
                        return ct.isChrdev(this.mode);
                    },
                },
            }),
                (ct.FSNode = un),
                ct.staticInit(),
                (o.FS_createPath = ct.createPath),
                (o.FS_createDataFile = ct.createDataFile),
                (o.FS_readFile = ct.readFile),
                (o.FS_createPath = ct.createPath),
                (o.FS_createDataFile = ct.createDataFile),
                (o.FS_createPreloadedFile = ct.createPreloadedFile),
                (o.FS_unlink = ct.unlink),
                (o.FS_createLazyFile = ct.createLazyFile),
                (o.FS_createDevice = ct.createDevice);
            let dn = {
                scriptUrl: import.meta.url,
                fetch: globalThis.fetch,
                require: s,
                updateGlobalBufferAndViews: re,
                pthreadReplacements: fn,
            };
            b && (dn.requirePromise = import('module').then((e) => e.createRequire(import.meta.url)));
            let mn = __dotnet_runtime.__initializeImportsAndExports(
                {
                    isGlobal: !1,
                    isNode: b,
                    isWorker: y,
                    isShell: v,
                    isWeb: g,
                    isPThread: !1,
                    quit_: w,
                    ExitStatus: vo,
                    requirePromise: dn.requirePromise,
                },
                { mono: MONO, binding: BINDING, internal: INTERNAL, module: o, marshaled_imports: IMPORTS },
                dn,
                a,
            );
            re = dn.updateGlobalBufferAndViews;
            var pn = dn.fetch;
            (e = i = E = dn.scriptDirectory),
                b &&
                    dn.requirePromise.then((e) => {
                        s = e;
                    });
            R = dn.noExitRuntime;
            function hn(e, t, r) {
                var n = r > 0 ? r : K(e) + 1,
                    o = new Array(n),
                    s = X(e, o, 0, o.length);
                return t && (o.length = s), o;
            }
            var wn,
                gn = {
                    A: $e,
                    i: Fe,
                    v: Be,
                    w: Ve,
                    b: Je,
                    j: Ge,
                    l: Le,
                    ba: Ye,
                    n: Xe,
                    qb: Ze,
                    f: qe,
                    pb: lt,
                    aa: _t,
                    ob: At,
                    nb: kt,
                    Ga: St,
                    mb: Ot,
                    D: xt,
                    lb: Nt,
                    kb: Dt,
                    Fa: Rt,
                    jb: Tt,
                    ib: It,
                    hb: $t,
                    gb: Ft,
                    fb: Pt,
                    eb: Ct,
                    $: Ut,
                    db: Bt,
                    cb: zt,
                    _: Wt,
                    bb: Lt,
                    Z: Ht,
                    ab: Vt,
                    Y: qt,
                    $a: Jt,
                    L: Gt,
                    W: Xt,
                    Wa: Zt,
                    Va: Kt,
                    Ua: Qt,
                    Ta: er,
                    Sa: tr,
                    Ra: rr,
                    Qa: or,
                    m: sr,
                    V: ar,
                    U: _r,
                    Pa: fr,
                    K: cr,
                    Oa: dr,
                    Na: mr,
                    Ma: hr,
                    _a: br,
                    Za: vr,
                    B: Er,
                    H: Ar,
                    Ya: kr,
                    Ea: Or,
                    Da: Nr,
                    X: jr,
                    Ca: Dr,
                    Xa: Mr,
                    M: Rr,
                    a: Tr,
                    T: fo,
                    S: _o,
                    x: no,
                    g: Pn,
                    d: Un,
                    c: zn,
                    q: Wn,
                    R: lo,
                    r: Gn,
                    La: eo,
                    z: Yn,
                    Ka: Xn,
                    Q: so,
                    P: co,
                    O: Vn,
                    N: io,
                    C: Jn,
                    Ba: yo,
                    Aa: ho,
                    za: go,
                    ya: po,
                    xa: bo,
                    t: ro,
                    p: Bn,
                    Ja: qn,
                    h: Ln,
                    e: Cn,
                    s: Hn,
                    o: Zn,
                    u: Qn,
                    y: to,
                    Ia: uo,
                    G: Kn,
                    E: oo,
                    Ha: ao,
                    J: mo,
                    wa: wo,
                    F: Ir,
                    va: $r,
                    ua: Fr,
                    ta: Pr,
                    sa: Cr,
                    ra: Ur,
                    qa: Br,
                    pa: zr,
                    oa: Wr,
                    na: Lr,
                    ma: Hr,
                    la: Vr,
                    ka: qr,
                    ja: Jr,
                    ia: Gr,
                    ha: Yr,
                    ga: Xr,
                    fa: Zr,
                    ea: Kr,
                    da: Qr,
                    k: en,
                    I: an,
                    ca: cn,
                },
                yn =
                    (Ne(),
                    (o.___wasm_call_ctors = function () {
                        return (o.___wasm_call_ctors = o.asm.sb).apply(null, arguments);
                    }),
                    (o._malloc = function () {
                        return (yn = o._malloc = o.asm.tb).apply(null, arguments);
                    })),
                bn = (o._free = function () {
                    return (bn = o._free = o.asm.ub).apply(null, arguments);
                }),
                vn =
                    ((o._memset = function () {
                        return (o._memset = o.asm.vb).apply(null, arguments);
                    }),
                    (o.___errno_location = function () {
                        return (vn = o.___errno_location = o.asm.xb).apply(null, arguments);
                    })),
                En =
                    ((o._memalign = function () {
                        return (o._memalign = o.asm.yb).apply(null, arguments);
                    }),
                    (o._htons = function () {
                        return (En = o._htons = o.asm.zb).apply(null, arguments);
                    })),
                An =
                    ((o._mono_wasm_register_root = function () {
                        return (o._mono_wasm_register_root = o.asm.Ab).apply(null, arguments);
                    }),
                    (o._mono_wasm_deregister_root = function () {
                        return (o._mono_wasm_deregister_root = o.asm.Bb).apply(null, arguments);
                    }),
                    (o._mono_wasm_add_assembly = function () {
                        return (o._mono_wasm_add_assembly = o.asm.Cb).apply(null, arguments);
                    }),
                    (o._mono_wasm_add_satellite_assembly = function () {
                        return (o._mono_wasm_add_satellite_assembly = o.asm.Db).apply(null, arguments);
                    }),
                    (o._mono_wasm_setenv = function () {
                        return (o._mono_wasm_setenv = o.asm.Eb).apply(null, arguments);
                    }),
                    (o._mono_wasm_getenv = function () {
                        return (o._mono_wasm_getenv = o.asm.Fb).apply(null, arguments);
                    }),
                    (o._mono_wasm_register_bundled_satellite_assemblies = function () {
                        return (o._mono_wasm_register_bundled_satellite_assemblies = o.asm.Gb).apply(null, arguments);
                    }),
                    (o._mono_wasm_load_runtime = function () {
                        return (o._mono_wasm_load_runtime = o.asm.Hb).apply(null, arguments);
                    }),
                    (o._mono_wasm_assembly_load = function () {
                        return (o._mono_wasm_assembly_load = o.asm.Ib).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_corlib = function () {
                        return (o._mono_wasm_get_corlib = o.asm.Jb).apply(null, arguments);
                    }),
                    (o._mono_wasm_assembly_find_class = function () {
                        return (o._mono_wasm_assembly_find_class = o.asm.Kb).apply(null, arguments);
                    }),
                    (o._mono_wasm_runtime_run_module_cctor = function () {
                        return (o._mono_wasm_runtime_run_module_cctor = o.asm.Lb).apply(null, arguments);
                    }),
                    (o._mono_wasm_assembly_find_method = function () {
                        return (o._mono_wasm_assembly_find_method = o.asm.Mb).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_delegate_invoke_ref = function () {
                        return (o._mono_wasm_get_delegate_invoke_ref = o.asm.Nb).apply(null, arguments);
                    }),
                    (o._mono_wasm_box_primitive_ref = function () {
                        return (o._mono_wasm_box_primitive_ref = o.asm.Ob).apply(null, arguments);
                    }),
                    (o._mono_wasm_invoke_method_ref = function () {
                        return (o._mono_wasm_invoke_method_ref = o.asm.Pb).apply(null, arguments);
                    }),
                    (o._mono_wasm_invoke_method_bound = function () {
                        return (o._mono_wasm_invoke_method_bound = o.asm.Qb).apply(null, arguments);
                    }),
                    (o._mono_wasm_assembly_get_entry_point = function () {
                        return (o._mono_wasm_assembly_get_entry_point = o.asm.Rb).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_get_utf8 = function () {
                        return (o._mono_wasm_string_get_utf8 = o.asm.Sb).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_from_js = function () {
                        return (o._mono_wasm_string_from_js = o.asm.Tb).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_from_utf16_ref = function () {
                        return (o._mono_wasm_string_from_utf16_ref = o.asm.Ub).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_obj_class = function () {
                        return (o._mono_wasm_get_obj_class = o.asm.Vb).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_obj_type = function () {
                        return (o._mono_wasm_get_obj_type = o.asm.Wb).apply(null, arguments);
                    }),
                    (o._mono_wasm_try_unbox_primitive_and_get_type_ref = function () {
                        return (o._mono_wasm_try_unbox_primitive_and_get_type_ref = o.asm.Xb).apply(null, arguments);
                    }),
                    (o._mono_wasm_array_length = function () {
                        return (o._mono_wasm_array_length = o.asm.Yb).apply(null, arguments);
                    }),
                    (o._mono_wasm_array_get = function () {
                        return (o._mono_wasm_array_get = o.asm.Zb).apply(null, arguments);
                    }),
                    (o._mono_wasm_array_get_ref = function () {
                        return (o._mono_wasm_array_get_ref = o.asm._b).apply(null, arguments);
                    }),
                    (o._mono_wasm_obj_array_new_ref = function () {
                        return (o._mono_wasm_obj_array_new_ref = o.asm.$b).apply(null, arguments);
                    }),
                    (o._mono_wasm_obj_array_new = function () {
                        return (o._mono_wasm_obj_array_new = o.asm.ac).apply(null, arguments);
                    }),
                    (o._mono_wasm_obj_array_set = function () {
                        return (o._mono_wasm_obj_array_set = o.asm.bc).apply(null, arguments);
                    }),
                    (o._mono_wasm_obj_array_set_ref = function () {
                        return (o._mono_wasm_obj_array_set_ref = o.asm.cc).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_array_new_ref = function () {
                        return (o._mono_wasm_string_array_new_ref = o.asm.dc).apply(null, arguments);
                    }),
                    (o._mono_wasm_exec_regression = function () {
                        return (o._mono_wasm_exec_regression = o.asm.ec).apply(null, arguments);
                    }),
                    (o._mono_wasm_exit = function () {
                        return (o._mono_wasm_exit = o.asm.fc).apply(null, arguments);
                    }),
                    (o._mono_wasm_set_main_args = function () {
                        return (o._mono_wasm_set_main_args = o.asm.gc).apply(null, arguments);
                    }),
                    (o._mono_wasm_strdup = function () {
                        return (o._mono_wasm_strdup = o.asm.hc).apply(null, arguments);
                    }),
                    (o._mono_wasm_parse_runtime_options = function () {
                        return (o._mono_wasm_parse_runtime_options = o.asm.ic).apply(null, arguments);
                    }),
                    (o._mono_wasm_enable_on_demand_gc = function () {
                        return (o._mono_wasm_enable_on_demand_gc = o.asm.jc).apply(null, arguments);
                    }),
                    (o._mono_wasm_intern_string_ref = function () {
                        return (o._mono_wasm_intern_string_ref = o.asm.kc).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_get_data_ref = function () {
                        return (o._mono_wasm_string_get_data_ref = o.asm.lc).apply(null, arguments);
                    }),
                    (o._mono_wasm_string_get_data = function () {
                        return (o._mono_wasm_string_get_data = o.asm.mc).apply(null, arguments);
                    }),
                    (o._mono_wasm_class_get_type = function () {
                        return (o._mono_wasm_class_get_type = o.asm.nc).apply(null, arguments);
                    }),
                    (o._mono_wasm_type_get_class = function () {
                        return (o._mono_wasm_type_get_class = o.asm.oc).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_type_name = function () {
                        return (o._mono_wasm_get_type_name = o.asm.pc).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_type_aqn = function () {
                        return (o._mono_wasm_get_type_aqn = o.asm.qc).apply(null, arguments);
                    }),
                    (o._mono_wasm_write_managed_pointer_unsafe = function () {
                        return (o._mono_wasm_write_managed_pointer_unsafe = o.asm.rc).apply(null, arguments);
                    }),
                    (o._mono_wasm_copy_managed_pointer = function () {
                        return (o._mono_wasm_copy_managed_pointer = o.asm.sc).apply(null, arguments);
                    }),
                    (o._mono_wasm_i52_to_f64 = function () {
                        return (o._mono_wasm_i52_to_f64 = o.asm.tc).apply(null, arguments);
                    }),
                    (o._mono_wasm_u52_to_f64 = function () {
                        return (o._mono_wasm_u52_to_f64 = o.asm.uc).apply(null, arguments);
                    }),
                    (o._mono_wasm_f64_to_u52 = function () {
                        return (o._mono_wasm_f64_to_u52 = o.asm.vc).apply(null, arguments);
                    }),
                    (o._mono_wasm_f64_to_i52 = function () {
                        return (o._mono_wasm_f64_to_i52 = o.asm.wc).apply(null, arguments);
                    }),
                    (o._mono_wasm_typed_array_new_ref = function () {
                        return (o._mono_wasm_typed_array_new_ref = o.asm.xc).apply(null, arguments);
                    }),
                    (o._mono_wasm_unbox_enum = function () {
                        return (o._mono_wasm_unbox_enum = o.asm.yc).apply(null, arguments);
                    }),
                    (o._mono_wasm_send_dbg_command_with_parms = function () {
                        return (o._mono_wasm_send_dbg_command_with_parms = o.asm.zc).apply(null, arguments);
                    }),
                    (o._mono_wasm_send_dbg_command = function () {
                        return (o._mono_wasm_send_dbg_command = o.asm.Ac).apply(null, arguments);
                    }),
                    (o._mono_wasm_event_pipe_enable = function () {
                        return (o._mono_wasm_event_pipe_enable = o.asm.Bc).apply(null, arguments);
                    }),
                    (o._mono_wasm_event_pipe_session_start_streaming = function () {
                        return (o._mono_wasm_event_pipe_session_start_streaming = o.asm.Cc).apply(null, arguments);
                    }),
                    (o._mono_wasm_event_pipe_session_disable = function () {
                        return (o._mono_wasm_event_pipe_session_disable = o.asm.Dc).apply(null, arguments);
                    }),
                    (o._mono_background_exec = function () {
                        return (o._mono_background_exec = o.asm.Ec).apply(null, arguments);
                    }),
                    (o._mono_wasm_get_icudt_name = function () {
                        return (o._mono_wasm_get_icudt_name = o.asm.Fc).apply(null, arguments);
                    }),
                    (o._mono_wasm_load_icu_data = function () {
                        return (o._mono_wasm_load_icu_data = o.asm.Gc).apply(null, arguments);
                    }),
                    (o._mono_print_method_from_ip = function () {
                        return (o._mono_print_method_from_ip = o.asm.Hc).apply(null, arguments);
                    }),
                    (o._mono_set_timeout_exec = function () {
                        return (o._mono_set_timeout_exec = o.asm.Ic).apply(null, arguments);
                    }),
                    (o._emscripten_builtin_memalign = function () {
                        return (An = o._emscripten_builtin_memalign = o.asm.Jc).apply(null, arguments);
                    })),
                kn = (o._ntohs = function () {
                    return (kn = o._ntohs = o.asm.Kc).apply(null, arguments);
                }),
                Sn = (o._setThrew = function () {
                    return (Sn = o._setThrew = o.asm.Lc).apply(null, arguments);
                }),
                On = (o.stackSave = function () {
                    return (On = o.stackSave = o.asm.Mc).apply(null, arguments);
                }),
                xn = (o.stackRestore = function () {
                    return (xn = o.stackRestore = o.asm.Nc).apply(null, arguments);
                }),
                Nn = (o.stackAlloc = function () {
                    return (Nn = o.stackAlloc = o.asm.Oc).apply(null, arguments);
                }),
                jn = (o.___cxa_can_catch = function () {
                    return (jn = o.___cxa_can_catch = o.asm.Pc).apply(null, arguments);
                }),
                Dn = (o.___cxa_is_pointer_type = function () {
                    return (Dn = o.___cxa_is_pointer_type = o.asm.Qc).apply(null, arguments);
                }),
                Mn = (o.dynCall_ji = function () {
                    return (Mn = o.dynCall_ji = o.asm.Rc).apply(null, arguments);
                }),
                Rn = (o.dynCall_jiiii = function () {
                    return (Rn = o.dynCall_jiiii = o.asm.Sc).apply(null, arguments);
                }),
                Tn = (o.dynCall_iij = function () {
                    return (Tn = o.dynCall_iij = o.asm.Tc).apply(null, arguments);
                }),
                In = (o.dynCall_j = function () {
                    return (In = o.dynCall_j = o.asm.Uc).apply(null, arguments);
                }),
                $n = (o.dynCall_viijii = function () {
                    return ($n = o.dynCall_viijii = o.asm.Vc).apply(null, arguments);
                }),
                Fn = (o.dynCall_iiiiij = function () {
                    return (Fn = o.dynCall_iiiiij = o.asm.Wc).apply(null, arguments);
                });
            function Pn(e, t) {
                var r = On();
                try {
                    return Te(e)(t);
                } catch (e) {
                    if ((xn(r), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Cn(e, t, r, n) {
                var o = On();
                try {
                    Te(e)(t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Un(e, t, r) {
                var n = On();
                try {
                    return Te(e)(t, r);
                } catch (e) {
                    if ((xn(n), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Bn(e, t) {
                var r = On();
                try {
                    Te(e)(t);
                } catch (e) {
                    if ((xn(r), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function zn(e, t, r, n) {
                var o = On();
                try {
                    return Te(e)(t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Wn(e, t, r, n, o) {
                var s = On();
                try {
                    return Te(e)(t, r, n, o);
                } catch (e) {
                    if ((xn(s), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Ln(e, t, r) {
                var n = On();
                try {
                    Te(e)(t, r);
                } catch (e) {
                    if ((xn(n), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Hn(e, t, r, n, o) {
                var s = On();
                try {
                    Te(e)(t, r, n, o);
                } catch (e) {
                    if ((xn(s), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Vn(e, t, r, n, o, s, i, a, c, u) {
                var l = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a, c, u);
                } catch (e) {
                    if ((xn(l), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function qn(e, t, r, n) {
                var o = On();
                try {
                    Te(e)(t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Jn(e, t, r, n, o, s, i, a, c, u, l, _) {
                var f = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a, c, u, l, _);
                } catch (e) {
                    if ((xn(f), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Gn(e, t, r, n, o, s) {
                var i = On();
                try {
                    return Te(e)(t, r, n, o, s);
                } catch (e) {
                    if ((xn(i), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Yn(e, t, r, n, o, s, i) {
                var a = On();
                try {
                    return Te(e)(t, r, n, o, s, i);
                } catch (e) {
                    if ((xn(a), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Xn(e, t, r, n, o, s, i, a) {
                var c = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a);
                } catch (e) {
                    if ((xn(c), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Zn(e, t, r, n, o, s) {
                var i = On();
                try {
                    Te(e)(t, r, n, o, s);
                } catch (e) {
                    if ((xn(i), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Kn(e, t, r, n, o, s, i, a, c, u) {
                var l = On();
                try {
                    Te(e)(t, r, n, o, s, i, a, c, u);
                } catch (e) {
                    if ((xn(l), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function Qn(e, t, r, n, o, s, i) {
                var a = On();
                try {
                    Te(e)(t, r, n, o, s, i);
                } catch (e) {
                    if ((xn(a), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function eo(e, t, r, n, o, s, i) {
                var a = On();
                try {
                    return Te(e)(t, r, n, o, s, i);
                } catch (e) {
                    if ((xn(a), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function to(e, t, r, n, o, s, i, a) {
                var c = On();
                try {
                    Te(e)(t, r, n, o, s, i, a);
                } catch (e) {
                    if ((xn(c), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function ro(e) {
                var t = On();
                try {
                    Te(e)();
                } catch (e) {
                    if ((xn(t), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function no(e) {
                var t = On();
                try {
                    return Te(e)();
                } catch (e) {
                    if ((xn(t), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function oo(e, t, r, n, o, s, i, a, c, u, l) {
                var _ = On();
                try {
                    Te(e)(t, r, n, o, s, i, a, c, u, l);
                } catch (e) {
                    if ((xn(_), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function so(e, t, r, n, o, s, i, a) {
                var c = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a);
                } catch (e) {
                    if ((xn(c), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function io(e, t, r, n, o, s, i, a, c, u, l) {
                var _ = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a, c, u, l);
                } catch (e) {
                    if ((xn(_), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function ao(e, t, r, n, o, s, i, a, c, u, l, _) {
                var f = On();
                try {
                    Te(e)(t, r, n, o, s, i, a, c, u, l, _);
                } catch (e) {
                    if ((xn(f), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function co(e, t, r, n, o, s, i, a, c) {
                var u = On();
                try {
                    return Te(e)(t, r, n, o, s, i, a, c);
                } catch (e) {
                    if ((xn(u), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function uo(e, t, r, n, o, s, i, a, c) {
                var u = On();
                try {
                    Te(e)(t, r, n, o, s, i, a, c);
                } catch (e) {
                    if ((xn(u), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function lo(e, t, r, n, o, s) {
                var i = On();
                try {
                    return Te(e)(t, r, n, o, s);
                } catch (e) {
                    if ((xn(i), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function _o(e, t, r, n) {
                var o = On();
                try {
                    return Te(e)(t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function fo(e, t, r, n) {
                var o = On();
                try {
                    return Te(e)(t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function mo(e, t, r, n, o, s, i, a, c, u, l, _, f, d, m, p) {
                var h = On();
                try {
                    Te(e)(t, r, n, o, s, i, a, c, u, l, _, f, d, m, p);
                } catch (e) {
                    if ((xn(h), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function po(e, t) {
                var r = On();
                try {
                    return Mn(e, t);
                } catch (e) {
                    if ((xn(r), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function ho(e, t, r, n) {
                var o = On();
                try {
                    return Tn(e, t, r, n);
                } catch (e) {
                    if ((xn(o), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function wo(e, t, r, n, o, s, i) {
                var a = On();
                try {
                    $n(e, t, r, n, o, s, i);
                } catch (e) {
                    if ((xn(a), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function go(e) {
                var t = On();
                try {
                    return In(e);
                } catch (e) {
                    if ((xn(t), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function yo(e, t, r, n, o, s, i) {
                var a = On();
                try {
                    return Fn(e, t, r, n, o, s, i);
                } catch (e) {
                    if ((xn(a), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function bo(e, t, r, n, o) {
                var s = On();
                try {
                    return Rn(e, t, r, n, o);
                } catch (e) {
                    if ((xn(s), e !== e + 0)) throw e;
                    Sn(1, 0);
                }
            }
            function vo(e) {
                (this.name = 'ExitStatus'), (this.message = 'Program terminated with exit(' + e + ')'), (this.status = e);
            }
            function Eo(e) {
                function t() {
                    wn ||
                        ((wn = !0),
                        (o.calledRun = !0),
                        T || (ue(), r(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), le()));
                }
                (e = e || p),
                    me > 0 ||
                        (ce(),
                        me > 0 ||
                            (o.setStatus
                                ? (o.setStatus('Running...'),
                                  setTimeout(function () {
                                      setTimeout(function () {
                                          o.setStatus('');
                                      }, 1),
                                          t();
                                  }, 1))
                                : t()));
            }
            function Ao(e, t) {
                e, ko(e);
            }
            function ko(e) {
                e, ae() || (o.onExit && o.onExit(e), (T = !0)), w(e, new vo(e));
            }
            if (
                ((o.ccall = F),
                (o.cwrap = P),
                (o.UTF8ArrayToString = G),
                (o.UTF8ToString = Y),
                (o.addRunDependency = we),
                (o.removeRunDependency = ge),
                (o.FS_createPath = ct.createPath),
                (o.FS_createDataFile = ct.createDataFile),
                (o.FS_createPreloadedFile = ct.createPreloadedFile),
                (o.FS_createLazyFile = ct.createLazyFile),
                (o.FS_createDevice = ct.createDevice),
                (o.FS_unlink = ct.unlink),
                (o.print = S),
                (o.setValue = Ie),
                (o.getValue = Me),
                (o.FS = ct),
                (he = function e() {
                    wn || Eo(), wn || (he = e);
                }),
                (o.run = Eo),
                o.preInit)
            )
                for ('function' == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
            return Eo(), (t.ready = t.ready.then(() => mn)), t.ready;
        };
    })();
export default createDotnetRuntime;
const MONO = {},
    BINDING = {},
    INTERNAL = {},
    IMPORTS = {};
var ENVIRONMENT_IS_WEB = 'object' == typeof window,
    ENVIRONMENT_IS_WORKER = 'function' == typeof importScripts,
    ENVIRONMENT_IS_NODE =
        'object' == typeof process && 'object' == typeof process.versions && 'string' == typeof process.versions.node,
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
__dotnet_runtime.__setEmscriptenEntrypoint(createDotnetRuntime, {
    isNode: ENVIRONMENT_IS_NODE,
    isShell: ENVIRONMENT_IS_SHELL,
    isWeb: ENVIRONMENT_IS_WEB,
    isWorker: ENVIRONMENT_IS_WORKER,
});
const dotnet = __dotnet_runtime.moduleExports.dotnet,
    exit = __dotnet_runtime.moduleExports.exit;
export { dotnet, exit, INTERNAL };
