import * as server from '../entries/pages/(light-nav)/blog/_page.server.ts.js';

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(light-nav)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(light-nav)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/40.BIZg9mxc.js","_app/immutable/chunks/DrOtaHMw.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/C9GhtZ1J.js","_app/immutable/chunks/0WlNTZE4.js","_app/immutable/chunks/zlTXQEG6.js","_app/immutable/chunks/8GlyhToM.js","_app/immutable/chunks/DtFYjPI3.js","_app/immutable/chunks/BQkd-SLX.js","_app/immutable/chunks/DHgukSXo.js"];
export const stylesheets = [];
export const fonts = [];
