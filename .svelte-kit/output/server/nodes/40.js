import * as server from '../entries/pages/(light-nav)/blog/_page.server.ts.js';

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(light-nav)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(light-nav)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/40.D9JtW8qM.js","_app/immutable/chunks/CwTS8T7P.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/DciVrEmK.js","_app/immutable/chunks/BVz_jPKa.js","_app/immutable/chunks/BzDfcGes.js","_app/immutable/chunks/DDyZ1PNc.js","_app/immutable/chunks/CPGwwV9Y.js","_app/immutable/chunks/BFi3tbP7.js","_app/immutable/chunks/z9q485jL.js"];
export const stylesheets = [];
export const fonts = [];
