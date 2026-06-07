import * as server from '../entries/pages/(light-nav)/blog/_page.server.ts.js';

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(light-nav)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(light-nav)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/40.C1vCJr1K.js","_app/immutable/chunks/KUc_ZfUX.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/CuPoDCWn.js","_app/immutable/chunks/JVHgtmp5.js","_app/immutable/chunks/DsXuwSGI.js","_app/immutable/chunks/CndC7wym.js","_app/immutable/chunks/BZgZIqmN.js","_app/immutable/chunks/DBFZJ9i3.js","_app/immutable/chunks/BmEMjPg0.js"];
export const stylesheets = [];
export const fonts = [];
