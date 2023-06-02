import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.88b6dd73.js","_app/immutable/chunks/index.003370c5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.8c57eebd.js","_app/immutable/chunks/button.977a0419.js","_app/immutable/chunks/stores.2498e5cf.js"];
export const stylesheets = ["_app/immutable/assets/4.d0746368.css"];
export const fonts = [];
