import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_edbaba8f.mjs';
import './chunks/astro_923801e0.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_cc3ae721.mjs');
const _page1  = () => import('./chunks/index_a770ec45.mjs');
const _page2  = () => import('./chunks/_slug__c03689c3.mjs');
const _page3  = () => import('./chunks/blog_2d48811c.mjs');
const _page4  = () => import('./chunks/index_9c3afa1a.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/blog/[slug].astro", _page2],["src/pages/blog.astro", _page3],["src/pages/tags/index.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
