import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                          */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, u as unescapeHTML, F as Fragment, j as renderHead, k as renderSlot, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent } from '../astro_923801e0.mjs';
import 'clsx';
import { i as isESMImportedImage, g as getImage$2 } from '../astro-assets-services_fb028c83.mjs';
import { optimize } from 'svgo';
import crypto from 'node:crypto';
import objectHash from 'object-hash';
import fs from 'node:fs';
import path, { parse, join, relative, extname, resolve } from 'node:path';
import util from 'node:util';
import potrace from 'potrace';
import findCacheDir from 'find-cache-dir';
import { fileURLToPath } from 'node:url';

const $$Astro$i = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage$1(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro/components/Image.astro", void 0);

const $$Astro$h = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Picture$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Picture$1;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage$1({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage$1({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/dist/");
					const getImage$1 = async (options) => await getImage$2(options, imageConfig);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$g = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="hamburger ml-4 cursor-pointer md:hidden" onclick="toggleMobileMenu()" data-astro-cid-3weo6hls><span class="line" data-astro-cid-3weo6hls></span><span class="line" data-astro-cid-3weo6hls></span><span class="line" data-astro-cid-3weo6hls></span></div><script setup>
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }
<\/script>`])), maybeRenderHead());
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Hamburger.astro", void 0);

const $$Astro$f = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bottom-0 sm:top-0 sticky sm:bottom-auto top-0 border-b-nav backdrop-blur-sm" data-astro-cid-3ef6ksr2><div class="top-0 absolute left-0 w-full bg-topbar" data-astro-cid-3ef6ksr2></div><nav class="flex justify-between items-center px-4 py-4 max-sm:px-5 max-sm:py-4 w-full mx-auto max-w-7xl z-20 relative" data-astro-cid-3ef6ksr2><div data-astro-cid-3ef6ksr2><a href="/" class="flex items-center gap-x-4" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Image", $$Image, { "src": "/images/y2k-gabes.svg", "width": 100, "height": 72, "alt": "Gabe's Logo", "class": "rounded aspect-thumbnail object-cover", "format": "webp", "data-astro-cid-3ef6ksr2": true })}</a></div><ul class="flex gap-x-8 nav-links" data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="/" class="text-zinc-200 font-bold text-lg" data-astro-cid-3ef6ksr2>Home</a></li><li data-astro-cid-3ef6ksr2><a href="/about" class="text-zinc-200 font-bold text-lg" data-astro-cid-3ef6ksr2>About</a></li><li data-astro-cid-3ef6ksr2><a href="/blog" class="text-zinc-200 font-bold text-lg" data-astro-cid-3ef6ksr2>Blog</a></li></ul><div class="flex items-center max-sm:hidden" data-astro-cid-3ef6ksr2><a href="/" class="w-fit px-4 py-1 text-white rounded border-2 border-white font-bold" data-astro-cid-3ef6ksr2>Get Started</a></div>${renderComponent($$result, "Hamburger", $$Hamburger, { "data-astro-cid-3ef6ksr2": true })}<div class="mobile-menu lg:hidden hidden p-4" data-astro-cid-3ef6ksr2><ul class="flex flex-col items-center text-white" data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="/" class="py-2" data-astro-cid-3ef6ksr2>Home</a></li><li data-astro-cid-3ef6ksr2><a href="/about" class="py-2" data-astro-cid-3ef6ksr2>About</a></li><li data-astro-cid-3ef6ksr2><a href="/blog" class="py-2" data-astro-cid-3ef6ksr2>Blog</a></li></ul></div></nav></header>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Header.astro", void 0);

const __vite_glob_1_0 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"/></svg>";

const __vite_glob_1_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"/></svg>";

const __vite_glob_1_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"/></svg>";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/github.svg": __vite_glob_1_0,"/src/icons/instagram.svg": __vite_glob_1_1,"/src/icons/linkedin.svg": __vite_glob_1_2});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$e = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$d = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$c = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$b = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$a = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="p-8" data-astro-cid-4z6ghy6d><div class="container mx-auto" data-astro-cid-4z6ghy6d><div class="footer-wrapper flex justify-between items-center mb-6 flex-wrap" data-astro-cid-4z6ghy6d><a href="/" class="flex items-center gap-x-4" data-astro-cid-4z6ghy6d>${renderComponent($$result, "Image", $$Image, { "src": "/images/y2k-gabes.svg", "width": 100, "height": 72, "alt": "Gabe's Logo", "class": "rounded aspect-thumbnail object-cover", "format": "webp", "data-astro-cid-4z6ghy6d": true })}</a><nav class="footer-nav flex items-center" data-astro-cid-4z6ghy6d><ul class="flex gap-x-4" data-astro-cid-4z6ghy6d>${footerLinks.map((link, index) => renderTemplate`<li${addAttribute(index, "key")} data-astro-cid-4z6ghy6d><a${addAttribute(link.url, "href")} data-astro-cid-4z6ghy6d>${link.label}</a></li>`)}</ul></nav><div class="social-links flex gap-x-4 justify-center lg:mb-6 mx-auto lg:mx-0" data-astro-cid-4z6ghy6d><a href="https://github.com/CodingGabe" target="_blank" rel="noopener noreferrer" data-astro-cid-4z6ghy6d>${renderComponent($$result, "Icon", $$Icon, { "name": "github", "data-astro-cid-4z6ghy6d": true })}</a><a href="https://instagram.com/creative.gabe" target="_blank" rel="noopener noreferrer" data-astro-cid-4z6ghy6d>${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "data-astro-cid-4z6ghy6d": true })}</a><a href="https://linkedin.com/in/gabeamaya" target="_blank" rel="noopener noreferrer" data-astro-cid-4z6ghy6d>${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "data-astro-cid-4z6ghy6d": true })}</a></div></div><hr class="my-6 max-w-3xl mx-auto border-neutral-400" data-astro-cid-4z6ghy6d><p class="text-sm text-slate-300 text-center" data-astro-cid-4z6ghy6d>Designed and Developed by <a href="https://www.gabecreativedept.com/" tab="_blank" class="underline" data-astro-cid-4z6ghy6d>Gabe Amaya</a></p></div></footer>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/partials/Footer.astro", void 0);

const $$Astro$9 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro/components/ViewTransitions.astro", void 0);

// To strip off params when checking for file on disk.
const paramPattern = /\?.*/;

/**
 * getSrcPath allows the use of `src` attributes relative to either the public folder or project root.
 *
 * It first checks to see if the src is a file relative to the project root.
 * If the file isn't found, it will look in the public folder.
 * Finally, if it still can't be found, the original input will be returned.
 */
async function getSrcPath(src) {
  const { default: astroViteConfigs } = await import(
    '../astroViteConfigs_f98a1cd5.mjs'
  );

  // If this is already resolved to a file, return it.
  if (fs.existsSync(src.replace(paramPattern, ""))) return src;

  const rootPath = path.join(astroViteConfigs.rootDir, src);
  const rootTest = rootPath.replace(paramPattern, "");
  if (fs.existsSync(rootTest)) return rootPath;

  const publicPath = path.join(astroViteConfigs.publicDir, src);
  const publicTest = publicPath.replace(paramPattern, "");
  if (fs.existsSync(publicTest)) return publicPath;

  // Fallback
  return src;
}

// @ts-check

async function getSrcset(
  src,
  base,
  breakpoints,
  format,
  options
) {
  options = {
    format,
    w: breakpoints,
    ...options,
  };

  const keys = Object.keys(options);

  const params = keys.length
    ? keys
        .map((key) =>
          Array.isArray(options[key])
            ? `&${key}=${options[key].join(";")}`
            : `&${key}=${options[key]}`
        )
        .join("")
    : "";

  const id = `${src}?${params.slice(1)}`;

  const fullPath = await getSrcPath(id);

  const { default: load } = await import('../load_4c0fce0f.mjs');

  // @ts-ignore
  const srcset = (await load(fullPath, base)).slice(16, -1);

  return srcset;
}

// @ts-check

const colours = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },

  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  },
};

function printWarning({
  key = "",
  type = "",
  message = "",
  element = "",
}) {
  const flag =
    colours.bright + colours.fg.cyan + "[astro-imagetools]" + colours.reset;

  const keyLog = key
    ? " " + colours.bg.yellow + ` ${key} ` + colours.reset
    : "";

  const messageLog =
    colours.fg.yellow +
    (message ||
      (!element
        ? `is not a valid ${type} Config Option`
        : `can't be defined inside attributes.${element}`)) +
    colours.reset;

  console.log(flag + keyLog, messageLog);
}

// @ts-check

function getBreakpoints(breakpoints, imageWidth) {
  if (Array.isArray(breakpoints)) {
    return breakpoints.sort((a, b) => a - b);
  }

  const { count, minWidth = 320 } = breakpoints || {};

  const maxWidth = (() => {
    if (breakpoints?.maxWidth) return breakpoints.maxWidth;

    if (imageWidth > 3840) {
      printWarning({
        message:
          "The width of the source image is greater than 3840px. The generated breakpoints will be capped at 3840px. If you need breakpoints larger than this, please pass the maxWidth option to the breakpoints property.",
      });

      return 3840;
    }

    return imageWidth;
  })();

  const breakPoints = [];

  const diff = maxWidth - minWidth;

  const n =
    count ||
    (maxWidth <= 400
      ? 1
      : maxWidth <= 640
      ? 2
      : maxWidth <= 800
      ? 3
      : maxWidth <= 1024
      ? 4
      : maxWidth <= 1280
      ? 5
      : maxWidth <= 1440
      ? 6
      : maxWidth <= 1920
      ? 7
      : maxWidth <= 2560
      ? 8
      : maxWidth <= 2880
      ? 9
      : maxWidth <= 3840
      ? 10
      : 11);

  let currentWidth = minWidth;

  n > 1 && breakPoints.push(currentWidth);

  let steps = 0;

  for (let i = 1; i < n; i++) {
    steps += i;
  }

  const pixelsPerStep = diff / steps;

  for (let i = 1; i < n - 1; i++) {
    const next = pixelsPerStep * (n - i) + currentWidth;

    breakPoints.push(Math.round(next));

    currentWidth = next;
  }

  breakPoints.push(maxWidth);

  return [...new Set(breakPoints)];
}

// @ts-check

function getConfigOptions(
  imageWidth,
  imagesizes,
  breakpoints,
  format,
  imageFormat,
  fallbackFormat,
  includeSourceFormat
) {
  const formats = [
    ...new Set(
      [format, includeSourceFormat && imageFormat]
        .flat()
        .filter((f) => f && f !== fallbackFormat)
    ),
    fallbackFormat,
  ];

  const requiredBreakpoints = getBreakpoints(breakpoints, imageWidth);

  imagesizes =
    typeof imagesizes === "string"
      ? imagesizes
      : imagesizes(requiredBreakpoints);

  return {
    formats,
    imagesizes,
    requiredBreakpoints,
  };
}

// @ts-check

function filterConfigs(
  type,
  configs,
  supportedConfigs,
  { warn = true } = {}
) {
  const clonedConfigs = { ...configs };

  const requiredConfigs = [];

  type !== "Global" && requiredConfigs.push("src");

  ["Img", "Picture"].includes(type) && requiredConfigs.push("alt");

  requiredConfigs.forEach((key) => {
    if (typeof clonedConfigs[key] === "undefined") {
      throw new Error(`The "${key}" property is required by ${type}`);
    }
  });

  Object.keys(clonedConfigs).forEach((key) => {
    if (!supportedConfigs.includes(key)) {
      if (warn) {
        if (key !== "class") {
          printWarning({ key, type });
        } else if (!onlyAstroClass(clonedConfigs[key])) {
          printWarning({
            message: `Do not provide a "class" directly to ${type}.  Instead, use attributes: https://astro-imagetools-docs.vercel.app/en/components/${type}#attributes`,
          });
        }
      }

      delete clonedConfigs[key];
    }
  });

  return clonedConfigs;
}

/**
 * Checks if the `class` attribute string is only an astro-generated scoped style class.
 */
function onlyAstroClass(classAttr) {
  const astroClassPattern = /^astro-[0-9A-Z]{8}$/;
  return astroClassPattern.test(classAttr);
}

// @ts-check

const FindUpModule = await import('find-up'),
  findUp = FindUpModule.findUp || FindUpModule.default;

// Sharp related checks
const sharp = await (async () => {
  try {
    if (await import('sharp')) {
      return true;
    }
  } catch (error) {
    return false;
  }
})();

const supportedImageTypes = [
  "avif",
  "jpeg",
  "jpg",
  "png",
  "webp",
  ...(sharp ? ["heic", "heif", "tiff", "gif"] : ["jxl", "wp2"]),
];

// prettier-ignore
const supportedConfigs = [
  "src", "alt", "tag", "content", "sizes", "preload", "loading", "decoding", "attributes",
  "layout", "placeholder", "breakpoints", "objectFit", "objectPosition", "backgroundSize",
  "backgroundPosition", "format", "fallbackFormat", "includeSourceFormat", "formatOptions",
  "fadeInTransition", "artDirectives", "flip", "flop", "invert", "flatten", "normalize",
  "grayscale", "hue", "saturation", "brightness", "w", "h", "ar", "width", "height", "aspect",
  "background", "tint", "blur", "median", "rotate", "quality", "fit", "kernel", "position",
  "cacheDir", "assetFileNames",
];

const configFile = await findUp([
  "astro-imagetools.config.js",
  "astro-imagetools.config.mjs",
]);

const configFunction = configFile
  ? await import(configFile).catch(async () => await import("/" + configFile))
  : null;

const rawGlobalConfigOptions = configFunction?.default ?? {};

const NonGlobalConfigOptions = ["src", "alt", "content"];

const GlobalConfigs = supportedConfigs.filter(
  (key) => !NonGlobalConfigOptions.includes(key)
);

const GlobalConfigOptions = filterConfigs(
  "Global",
  rawGlobalConfigOptions,
  GlobalConfigs
);

// CWD
const cwd = process.cwd().split(path.sep).join(path.posix.sep);

const { cacheDir } = GlobalConfigOptions;

// FS Cache related checks
const fsCachePath =
  (cacheDir
    ? cwd + cacheDir
    : findCacheDir({
        name: "astro-imagetools",
      })) + "/";

fs.existsSync(fsCachePath) || fs.mkdirSync(fsCachePath, { recursive: true });

// @ts-check


async function getFallbackImage(
  src,
  placeholder,
  image,
  format,
  formatOptions,
  rest
) {
  const base = null;

  switch (placeholder) {
    case "blurred": {
      const dataUri = await getSrcset(src, base, [20], format, {
        inline: true,
        ...rest,
        ...formatOptions[format],
      });

      return dataUri;
    }
    case "tracedSVG": {
      const { function: fn, options } = formatOptions.tracedSVG;

      const traceSVG = util.promisify(potrace[fn]);

      const imageBuffer = sharp
        ? await image.toBuffer()
        : Buffer.from(
            (await image.encode(`image/${format === "jpg" ? "jpeg" : format}`))
              .data
          );

      const tracedSVG = await traceSVG(imageBuffer, options);

      return `data:image/svg+xml;utf8,${tracedSVG}`;
    }
    case "dominantColor": {
      if (sharp) {
        var { r, g, b } = (await image.stats()).dominant;
      } else {
        [r, g, b] = image.color;
      }

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" style="background: rgb(${r},${g},${b})"></svg>`;

      return `data:image/svg+xml;utf8,${svg}`;
    }
    default:
      return null;
  }
}

// @ts-check

async function getImageSources(
  src,
  base,
  image,
  format,
  imageWidth,
  imagesizes,
  breakpoints,
  placeholder,
  imageFormat,
  formatOptions,
  fallbackFormat,
  includeSourceFormat,
  rest
) {
  const calculatedConfigs = getConfigOptions(
    imageWidth,
    imagesizes,
    breakpoints,
    format,
    imageFormat,
    fallbackFormat,
    includeSourceFormat
  );

  const { formats, requiredBreakpoints } = calculatedConfigs;

  imagesizes = calculatedConfigs.imagesizes;

  const maxWidth = requiredBreakpoints[requiredBreakpoints.length - 1];
  const sliceLength = -(maxWidth.toString().length + 2);

  const sources = await Promise.all(
    formats.map(async (format) => {
      const srcset = await getSrcset(src, base, requiredBreakpoints, format, {
        ...rest,
        ...formatOptions[format],
      });

      const srcsets = srcset.split(", ");
      const srcObject =
        format === fallbackFormat
          ? { src: srcsets[srcsets.length - 1].slice(0, sliceLength) }
          : {};

      return {
        ...srcObject,
        format,
        srcset,
      };
    })
  );

  const sizes = {
    width: maxWidth,
    height: Math.round(maxWidth / rest.aspect),
  };

  const fallback = await getFallbackImage(
    src,
    placeholder,
    image,
    fallbackFormat,
    formatOptions,
    rest
  );

  return { sources, sizes, fallback, imagesizes };
}

// @ts-check

function throwErrorIfUnsupported(src, ext) {
  if (!ext && typeof ext !== "string") {
    throw new Error(`Failed to load ${src}; Invalid image format`);
  }

  if (ext && !supportedImageTypes.includes(ext.toLowerCase())) {
    throw new Error(
      `Failed to load ${src}; Invalid image format ${ext} or the format is not supported by astro-imagetools`
    );
  }
}

// @ts-check

const { fileTypeFromBuffer } = await import('file-type');

async function getResolvedSrc(src) {
  const token = crypto.createHash("md5").update(src).digest("hex");

  let filepath = fsCachePath + token;

  const fileExists = (() => {
    for (const type of supportedImageTypes) {
      const fileExists = fs.existsSync(filepath + `.${type}`);

      if (fileExists) {
        filepath += `.${type}`;

        return true;
      }
    }
  })();

  if (!fileExists) {
    const buffer = Buffer.from(await (await fetch(src)).arrayBuffer());

    const { ext } = (await fileTypeFromBuffer(buffer)) || {};

    throwErrorIfUnsupported(src, ext);

    filepath += `.${ext}`;

    fs.writeFileSync(filepath, buffer);
  }

  const base = /^https?:/.test(src)
    ? parse(new URL(src).pathname).name
    : undefined;

  src = join("/", relative(cwd, filepath));

  return { src, base };
}

// @ts-check

const { getImageDetails } = await (sharp
  ? import('../imagetools_3c895bc4.mjs')
  : import('../codecs_a48cc0e1.mjs'));

async function getProcessedImage(src, transformConfigs) {
  throwErrorIfUnsupported(src, extname(src).slice(1));

  let base;

  if (src.match("(http://|https://|data:image/).*")) {
    ({ src, base } = await getResolvedSrc(src));
  } else {
    const {
      default: { isSsrBuild },
    } = await import('../astroViteConfigs_f98a1cd5.mjs');

    if (isSsrBuild) {
      const filename = fileURLToPath(import.meta.url);

      const assetPath = resolve(filename, "../../client") + src;

      src = "/" + relative(cwd, assetPath);
    }
  }

  const {
    w,
    h,
    ar,
    width = w,
    height = h,
    aspect = ar,
    ...rest
  } = transformConfigs;

  const path = src.replace(/\\/g, `/`);

  // console.log(await getSrcPath(src), width, height, aspect);

  const { image, imageWidth, imageHeight, imageFormat } = await getImageDetails(
    await getSrcPath(src),
    width,
    height,
    aspect
  );

  // console.log(image, imageWidth, imageHeight, imageFormat);

  return {
    path,
    base,
    rest,
    image,
    imageWidth,
    imageHeight,
    imageFormat,
  };
}

// @ts-check

async function getArtDirectedImages(
  artDirectives = [],
  placeholder,
  format,
  imagesizes,
  breakpoints,
  fallbackFormat,
  includeSourceFormat,
  formatOptions,
  rest
) {
  const images = await Promise.all(
    artDirectives.map(
      async ({
        src,
        media,
        sizes: directiveImagesizes,
        placeholder: directivePlaceholder,
        breakpoints: directiveBreakpoints,
        objectFit,
        objectPosition,
        backgroundSize,
        backgroundPosition,
        format: directiveFormat,
        fallbackFormat: directiveFallbackFormat,
        includeSourceFormat: directiveIncludeSourceFormat,
        formatOptions: directiveFormatOptions = {},
        ...configOptions
      }) => {
        const {
          path,
          base,
          rest: rest2,
          image,
          imageWidth,
          imageHeight,
          imageFormat,
        } = await getProcessedImage(src, configOptions);

        rest2.aspect = `${imageWidth / imageHeight}`;

        const calculatedConfigs = getConfigOptions(
          imageWidth,
          directiveImagesizes || imagesizes,
          directiveBreakpoints || breakpoints,
          directiveFormat || format,
          imageFormat,
          directiveFallbackFormat || fallbackFormat,
          directiveIncludeSourceFormat || includeSourceFormat
        );

        const { formats, requiredBreakpoints } = calculatedConfigs;

        imagesizes = calculatedConfigs.imagesizes;

        const maxWidth = requiredBreakpoints[requiredBreakpoints.length - 1];

        const sources = await Promise.all(
          formats.map(async (format) => {
            const srcset = await getSrcset(
              path,
              base,
              requiredBreakpoints,
              format,
              {
                ...rest,
                ...rest2,
                ...formatOptions[format],
                ...directiveFormatOptions[format],
              }
            );

            return {
              format,
              srcset,
            };
          })
        );

        const sizes = {
          width: maxWidth,
          height: Math.round(maxWidth / rest2.aspect),
        };

        const object = {
          fit: objectFit,
          position: objectPosition,
        };

        const fallback = await getFallbackImage(
          path,
          directivePlaceholder || placeholder,
          image,
          imageFormat,
          { ...formatOptions, ...directiveFormatOptions },
          { ...rest, ...rest2 }
        );

        return {
          media,
          sources,
          sizes,
          object,
          fallback,
          imagesizes,
        };
      }
    )
  );

  return images;
}

// @ts-check

const imagesData = new Map();

async function getImage ({
  src,
  type,
  sizes: imagesizes,
  format,
  breakpoints,
  placeholder,
  fallbackFormat,
  includeSourceFormat,
  formatOptions,
  artDirectives,
  transformConfigs,
}) {
  const args = Array.from(arguments);

  const hash = objectHash(args);

  if (imagesData.has(hash)) {
    return imagesData.get(hash);
  }

  const start = performance.now();

  const { path, base, rest, image, imageWidth, imageHeight, imageFormat } =
    await getProcessedImage(src, transformConfigs);

  src = path;

  rest.aspect = `${imageWidth / imageHeight}`;

  if (!fallbackFormat) {
    fallbackFormat = imageFormat;
  }

  const [mainImage, artDirectedImages] = await Promise.all([
    getImageSources(
      src,
      base,
      image,
      format,
      imageWidth,
      imagesizes,
      breakpoints,
      placeholder,
      imageFormat,
      formatOptions,
      fallbackFormat,
      includeSourceFormat,
      rest
    ),
    getArtDirectedImages(
      artDirectives,
      placeholder,
      format,
      imagesizes,
      breakpoints,
      fallbackFormat,
      includeSourceFormat,
      formatOptions,
      rest
    ),
  ]);

  const images = [...artDirectedImages, mainImage];

  const uuid = crypto.randomBytes(4).toString("hex").toUpperCase();

  const returnObject = {
    uuid,
    images,
  };

  imagesData.set(hash, returnObject);

  const end = performance.now();

  console.log(
    `Responsive Image sets generated for ${type} at ${args[0].src} in ${
      end - start
    }ms`
  );

  return returnObject;
}

// @ts-check


function getAttributesString({
  attributes,
  element = "",
  excludeArray = [],
}) {
  const attributesString = Object.keys(attributes)
    .filter((key) => {
      if (excludeArray.includes(key)) {
        printWarning({
          key,
          element,
        });

        return false;
      }

      return true;
    })
    .map((key) => `${key}="${attributes[key]}"`)
    .join(" ");

  return attributesString;
}

// @ts-check


function getImgElement({
  src,
  alt,
  sizes,
  style,
  srcset,
  loading,
  decoding,
  imagesizes,
  fadeInTransition,
  layoutStyles,
  imgAttributes,
  imgClassName = "",
}) {
  const {
    class: customClasses = "",
    style: customInlineStyles = "",
    onload: customOnload = "",
    ...restImgAttributes
  } = imgAttributes;

  const attributesString = getAttributesString({
    attributes: restImgAttributes,
    element: "img",
    excludeArray: [
      "src",
      "alt",
      "srcset",
      "sizes",
      "width",
      "height",
      "loading",
      "decoding",
    ],
  });

  const classAttribute = ["astro-imagetools-img", imgClassName, customClasses]
    .join(" ")
    .trim();

  const styleAttribute = [
    "display: inline-block; overflow: hidden; vertical-align: middle;",
    customInlineStyles + (customInlineStyles.endsWith(";") ? "" : ";"),
    layoutStyles,
  ]
    .join(" ")
    .trim();

  const onloadAttribute = [
    !imgClassName && style
      ? fadeInTransition
        ? `parentElement.style.setProperty('--z-index', 1); parentElement.style.setProperty('--opacity', 0);`
        : `parentElement.style.backgroundImage = 'unset';`
      : "",
    customOnload,
  ]
    .join(" ")
    .trim();

  const imgElement = `<img
    ${attributesString}
    src="${src}"
    ${typeof alt === "string" ? `alt="${alt}"` : ""}
    srcset="${srcset}"
    sizes="${imagesizes}"
    width="${sizes.width}"
    height="${sizes.height}"
    ${loading ? `loading="${loading}"` : ""}
    ${decoding ? `decoding="${decoding}"` : ""}
    class="${classAttribute}"
    style="${styleAttribute}"
    onload="${onloadAttribute}"
  />`;

  return imgElement;
}

// @ts-check

function getLinkElement({
  images = [],
  preload = "",
  imagesizes = "",
  linkAttributes,
}) {
  const imagesrcset =
    preload &&
    images[images.length - 1]?.sources.find(
      ({ format: fmt }) => fmt === preload
    )?.srcset;

  const attributesString = getAttributesString({
    element: "link",
    attributes: linkAttributes,
    excludeArray: ["as", "rel", "imagesizes", "imagesrcset"],
  });

  const linkElement =
    preload && images.length
      ? `<link
        ${attributesString}
        as="image"
        rel="preload"
        imagesizes="${imagesizes}"
        imagesrcset="${imagesrcset}"
      />`
      : "";

  return linkElement;
}

// @ts-check

function getStyleElement({
  styleAttributes,
  backgroundStyles = "",
}) {
  const attributesString = getAttributesString({
    attributes: styleAttributes,
  });

  const styleElement = `<style ${attributesString}>${backgroundStyles}</style>`;

  return styleElement;
}

// @ts-check

function getLayoutStyles({
  layout = null,
  isBackgroundImage = false,
}) {
  return isBackgroundImage
    ? "width: 100%; height: 100%;"
    : layout === "fill"
    ? `width: 100%; height: 100%;`
    : layout === "fullWidth"
    ? `width: 100%; height: auto;`
    : layout === "fixed"
    ? ""
    : "max-width: 100%; height: auto;";
}

// @ts-check

const GlobalOnlyProperties = ["cacheDir", "assetFileNames"];

const NonGlobalSupportedConfigs = supportedConfigs.filter(
  (key) => !GlobalOnlyProperties.includes(key)
);

const NonProperties = {
  Img: [
    "tag",
    "content",
    "backgroundSize",
    "backgroundPosition",
    "fallbackFormat",
    "includeSourceFormat",
    "fadeInTransition",
    "artDirectives",
  ],
  Picture: ["tag", "content", "backgroundSize", "backgroundPosition"],
  BackgroundImage: [
    "alt",
    "loading",
    "decoding",
    "layout",
    "objectFit",
    "objectPosition",
    "fadeInTransition",
  ],
  BackgroundPicture: ["alt", "backgroundSize", "backgroundPosition"],
};

const ImgProperties = NonGlobalSupportedConfigs.filter(
    (key) => !NonProperties.Img.includes(key)
  ),
  PictureProperties = NonGlobalSupportedConfigs.filter(
    (key) => !NonProperties.Picture.includes(key)
  ),
  BackgroundImageProperties = NonGlobalSupportedConfigs.filter(
    (key) => !NonProperties.BackgroundImage.includes(key)
  ),
  BackgroundPictureProperties = NonGlobalSupportedConfigs.filter(
    (key) => !NonProperties.BackgroundPicture.includes(key)
  );

const SupportedProperties = {
  Img: ImgProperties,
  Picture: PictureProperties,
  BackgroundImage: BackgroundImageProperties,
  BackgroundPicture: BackgroundPictureProperties,
};

function getFilteredProps(type, props) {
  const filteredGlobalConfigs = filterConfigs(
    "Global",
    GlobalConfigOptions,
    SupportedProperties[type],
    { warn: false }
  );

  const { search, searchParams } = new URL(props.src, "file://");

  props.src = props.src.replace(search, "");

  const paramOptions = Object.fromEntries(searchParams);

  const filteredLocalProps = filterConfigs(
    type,
    {
      ...paramOptions,
      ...props,
    },
    SupportedProperties[type]
  );

  const resolvedProps = {
    ...filteredGlobalConfigs,
    ...filteredLocalProps,
  };

  const {
    src,
    alt,
    tag = "section",
    content = "",
    sizes = function (breakpoints) {
      const maxWidth = breakpoints[breakpoints.length - 1];
      return `(min-width: ${maxWidth}px) ${maxWidth}px, 100vw`;
    },
    preload,
    loading = preload ? "eager" : "lazy",
    decoding = "async",
    attributes = {},
    layout = "constrained",
    placeholder = "blurred",
    breakpoints,
    objectFit = "cover",
    objectPosition = "50% 50%",
    backgroundSize = "cover",
    backgroundPosition = "50% 50%",
    format = type === "Img" ? undefined : ["avif", "webp"],
    fallbackFormat,
    includeSourceFormat = true,
    formatOptions = {
      tracedSVG: {
        function: "trace",
      },
    },
    fadeInTransition = true,
    artDirectives,
    ...transformConfigs
  } = resolvedProps;

  // prettier-ignore
  const allProps = {
    src, alt, tag, content, sizes, preload, loading, decoding, attributes, layout, placeholder,
    breakpoints, objectFit, objectPosition, backgroundSize, backgroundPosition, format,
    fallbackFormat, includeSourceFormat, formatOptions, fadeInTransition, artDirectives,
    ...transformConfigs,
  };

  const filteredProps = filterConfigs(
    type,
    allProps,
    SupportedProperties[type],
    { warn: false }
  );

  return {
    filteredProps,
    transformConfigs,
  };
}

// @ts-check

function getBackgroundStyles(
  images,
  className,
  objectFit,
  objectPosition,
  fadeInTransition,
  { isImg = false, isBackgroundPicture = false, containerClassName = "" } = {}
) {
  const sourcesWithFallback = images.filter(({ fallback }) => fallback);

  if (sourcesWithFallback.length === 0) return "";

  const staticStyles = !fadeInTransition
    ? ""
    : `
    ${
      isBackgroundPicture
        ? `
            .${containerClassName} * {
              z-index: 1;
              position: relative;
            }
          `
        : ""
    }

    .${className} {
      --opacity: 1;
      --z-index: 0;
    }

    ${
      !isBackgroundPicture
        ? `
            .${className} img {
              z-index: 1;
              position: relative;
            }
          `
        : ""
    }

    .${className}::after {
      inset: 0;
      content: "";
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      pointer-events: none;
      transition: opacity ${
        typeof fadeInTransition !== "object"
          ? "1s"
          : (() => {
              const {
                delay = "0s",
                duration = "1s",
                timingFunction = "ease",
              } = fadeInTransition;

              return `${duration} ${timingFunction} ${delay}`;
            })()
      };
      opacity: var(--opacity);
      z-index: var(--z-index);
    }
  `;

  const dynamicStyles = images
    .map(({ media, fallback, object }) => {
      const elementSelector = className + (!isImg ? " img" : ""),
        backgroundElementSelector =
          className + (fadeInTransition ? "::after" : "");

      const style = `
        .${elementSelector} {
          object-fit: ${object?.fit || objectFit};
          object-position: ${object?.position || objectPosition};
        }

        .${backgroundElementSelector} {
          background-size: ${object?.fit || objectFit};
          background-image: url("${encodeURI(fallback)}");
          background-position: ${object?.position || objectPosition};
        }
      `;

      return media ? `@media ${media} { ${style} }` : style;
    })
    .reverse();

  const backgroundStyles = [staticStyles, ...dynamicStyles].join("");

  return backgroundStyles;
}

// @ts-check

async function renderImg(props) {
  const type = "Img";

  const { filteredProps, transformConfigs } = getFilteredProps(type, props);

  const {
    src,
    alt,
    sizes,
    preload,
    loading,
    decoding,
    attributes,
    layout,
    breakpoints,
    placeholder,
    objectFit,
    objectPosition,
    format,
    formatOptions,
  } = filteredProps;

  const artDirectives = [],
    fallbackFormat = format,
    fadeInTransition = false,
    includeSourceFormat = false;

  const {
    img: imgAttributes = {},
    link: linkAttributes = {},
    style: styleAttributes = {},
  } = attributes;

  const { uuid, images } = await getImage({
    src,
    type,
    sizes,
    format,
    breakpoints,
    placeholder,
    artDirectives,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    transformConfigs,
  });

  const className = `astro-imagetools-img-${uuid}`;

  const { imagesizes } = images[images.length - 1];

  const backgroundStyles = getBackgroundStyles(
    images,
    className,
    objectFit,
    objectPosition,
    fadeInTransition,
    { isImg: true }
  );

  const style = getStyleElement({ styleAttributes, backgroundStyles });

  const link = getLinkElement({ images, preload, imagesizes, linkAttributes });

  const layoutStyles = getLayoutStyles({ layout });

  const sources = images.flatMap(({ sources, sizes, imagesizes }) =>
    sources.map(({ src, srcset }) =>
      getImgElement({
        src,
        alt,
        sizes,
        style,
        srcset,
        loading,
        decoding,
        imagesizes,
        fadeInTransition,
        layoutStyles,
        imgAttributes,
        imgClassName: className,
      })
    )
  );

  const [img] = sources;

  return { link, style, img };
}

const $$Astro$8 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Img = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Img;
  const { link, style, img } = await renderImg(Astro2.props);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(link + style + img)}` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/components/Img.astro", void 0);

// @ts-check

function getPictureElement({
  sources,
  className,
  layoutStyles,
  pictureAttributes,
  isBackgroundPicture = false,
}) {
  const {
    class: customClasses = "",
    style: customInlineStyles = "",
    ...restPictureAttributes
  } = pictureAttributes;

  const attributesString = getAttributesString({
    attributes: restPictureAttributes,
  });

  const classAttribute = ["astro-imagetools-picture", className, customClasses]
    .join(" ")
    .trim();

  const styleAttribute = [
    isBackgroundPicture
      ? `position: absolute; z-index: 0; width: 100%; height: 100%; display: inline-block;`
      : `position: relative; display: inline-block;`,
    customInlineStyles + (customInlineStyles.endsWith(";") ? "" : ";"),
    layoutStyles,
  ]
    .join(" ")
    .trim();

  const pictureElement = `<picture
    ${attributesString}
    class="${classAttribute}"
    style="${styleAttribute}"
    >${sources.join("\n")}
  </picture>`;

  return pictureElement;
}

// @ts-check

async function renderPicture(props) {
  const type = "Picture";

  const { filteredProps, transformConfigs } = getFilteredProps(type, props);

  const {
    src,
    alt,
    sizes,
    preload,
    loading,
    decoding,
    attributes,
    layout,
    placeholder,
    breakpoints,
    objectFit,
    objectPosition,
    format,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    fadeInTransition,
    artDirectives,
  } = filteredProps;

  const {
    img: imgAttributes = {},
    link: linkAttributes = {},
    style: styleAttributes = {},
    picture: pictureAttributes = {},
  } = attributes;

  const { uuid, images } = await getImage({
    src,
    type,
    sizes,
    format,
    breakpoints,
    placeholder,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    artDirectives,
    transformConfigs,
  });

  const className = `astro-imagetools-picture-${uuid}`;

  const { imagesizes } = images[images.length - 1];

  const backgroundStyles = getBackgroundStyles(
    images,
    className,
    objectFit,
    objectPosition,
    fadeInTransition
  );

  const style = getStyleElement({ styleAttributes, backgroundStyles });

  const link = getLinkElement({ images, preload, imagesizes, linkAttributes });

  const layoutStyles = getLayoutStyles({ layout });

  const sources = images.flatMap(({ media, sources, sizes, imagesizes }) =>
    sources.map(({ format, src, srcset }) =>
      src
        ? getImgElement({
            src,
            alt,
            sizes,
            style,
            srcset,
            loading,
            decoding,
            imagesizes,
            fadeInTransition,
            layoutStyles,
            imgAttributes,
          })
        : `<source
            srcset="${srcset}"
            sizes="${imagesizes}"
            width="${sizes.width}"
            height="${sizes.height}"
            type="${`image/${format}`}"
            ${media ? `media="${media}"` : ""}
          />`
    )
  );

  const picture = getPictureElement({
    sources,
    className,
    layoutStyles,
    pictureAttributes,
  });

  return { link, style, picture };
}

const $$Astro$7 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Picture;
  const { link, style, picture } = await renderPicture(Astro2.props);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(link + style + picture)}` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/components/Picture.astro", void 0);

// @ts-check

function getContainerElement({
  tag,
  content,
  className = "",
  containerAttributes,
  isBackgroundPicture = false,
  containerClassName = "",
}) {
  const {
    class: customClasses = "",
    style: customInlineStyles = "",
    ...restContainerAttributes
  } = containerAttributes;

  const attributesString = getAttributesString({
    attributes: restContainerAttributes,
  });

  const classAttribute = [
    isBackgroundPicture
      ? "astro-imagetools-background-picture"
      : "astro-imagetools-background-image",
    isBackgroundPicture ? containerClassName : className,
    customClasses,
  ]
    .join(" ")
    .trim();

  const styleAttribute = [
    isBackgroundPicture ? "position: relative;" : "",
    customInlineStyles + (customInlineStyles.endsWith(";") ? "" : ";"),
  ]
    .join(" ")
    .trim();

  const containerElement = `<${tag}
    ${attributesString}
    class="${classAttribute}"
    style="${styleAttribute}"
  >
    ${content}
  </${tag}>`;

  return containerElement;
}

// @ts-check

async function renderBackgroundImage(props) {
  const type = "BackgroundImage";

  const { filteredProps, transformConfigs } = getFilteredProps(type, props);

  const {
    src,
    tag,
    content,
    preload,
    attributes,
    placeholder,
    breakpoints,
    backgroundSize,
    backgroundPosition,
    format,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    artDirectives,
  } = filteredProps;

  const {
    link: linkAttributes = {},
    style: styleAttributes = {},
    container: containerAttributes = {},
  } = attributes;

  const sizes = "";

  const { uuid, images } = await getImage({
    src,
    type,
    sizes,
    format,
    breakpoints,
    placeholder,
    artDirectives,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    transformConfigs,
  });

  const className = `astro-imagetools-background-image-${uuid}`;

  const { imagesizes } = images[images.length - 1];

  const link = getLinkElement({ images, preload, imagesizes, linkAttributes });

  const backgroundImageStylesArray = images.map(({ media, sources }) => {
    const uuid = crypto.randomBytes(4).toString("hex").toUpperCase();

    const fallbackUrlCustomVariable = `--astro-imagetools-background-image-fallback-url${uuid}`;

    const newSources = {};

    sources.forEach(({ src, format, srcset }) => {
      const sources = srcset
        .split(", ")
        .map((source) => [
          source.slice(0, source.lastIndexOf(" ")),
          source.slice(source.lastIndexOf(" ") + 1, -1),
        ]);

      sources.forEach(([path, width]) => {
        if (!newSources[width]) {
          newSources[width] = [];
        }

        newSources[width].push({ src, format, path });
      });
    });

    const widths = Object.keys(newSources)
      .map((width) => parseInt(width))
      .reverse();

    const maxWidth = Math.max(...widths);

    const styles = widths
      .map((width) => {
        const sources = newSources[width];

        const styles = sources
          .map(
            ({ format, path }, i) =>
              `
                ${i !== sources.length - 1 ? `.${format} ` : ""}.${className} {
                  background-repeat: no-repeat;
                  background-image: url(${path}),
                    var(${fallbackUrlCustomVariable});
                  background-size: ${backgroundSize};
                  background-position: ${backgroundPosition};
                }
              `
          )
          .reverse()
          .join("");

        return width === maxWidth
          ? styles
          : `
              @media screen and (max-width: ${width}px) {
                ${styles}
              }
            `;
      })
      .join("");

    return {
      fallbackUrlCustomVariable,
      styles: media
        ? `
            @media ${media} {
              ${styles}
            }
          `
        : styles,
    };
  });

  const containerStyles = `
    .${className} {
      position: relative;
      ${images
        .map(({ fallback }, i) => {
          const fallbackUrlCustomVariable =
            backgroundImageStylesArray[i].fallbackUrlCustomVariable;

          return `${fallbackUrlCustomVariable}: url("${encodeURI(fallback)}");`;
        })
        .join("\n")}
    }
  `;

  const backgroundStyles =
    backgroundImageStylesArray.map(({ styles }) => styles).join("\n") +
    containerStyles;

  const style = getStyleElement({ styleAttributes, backgroundStyles });

  const htmlElement = getContainerElement({
    tag,
    content,
    className,
    containerAttributes,
  });

  return { link, style, htmlElement };
}

const $$Astro$6 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$BackgroundImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BackgroundImage;
  const content = await Astro2.slots.render("default");
  const { link, style, htmlElement } = await renderBackgroundImage({
    content,
    ...Astro2.props
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(link + style + htmlElement)}` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/components/BackgroundImage.astro", void 0);

// @ts-check

async function renderBackgroundPicture(props) {
  const type = "BackgroundPicture";

  const { filteredProps, transformConfigs } = getFilteredProps(type, props);

  const {
    src,
    tag,
    content,
    sizes,
    preload,
    loading,
    decoding,
    attributes,
    placeholder,
    breakpoints,
    objectFit,
    objectPosition,
    format,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    fadeInTransition,
    artDirectives,
  } = filteredProps;

  const {
    img: imgAttributes = {},
    link: linkAttributes = {},
    style: styleAttributes = {},
    picture: pictureAttributes = {},
    container: containerAttributes = {},
  } = attributes;

  const { uuid, images } = await getImage({
    src,
    type,
    sizes,
    format,
    breakpoints,
    placeholder,
    artDirectives,
    fallbackFormat,
    includeSourceFormat,
    formatOptions,
    transformConfigs,
  });

  const className = `astro-imagetools-picture-${uuid}`,
    containerClassName = `astro-imagetools-background-picture-${uuid}`;

  const { imagesizes } = images[images.length - 1];

  const backgroundStyles = getBackgroundStyles(
    images,
    className,
    objectFit,
    objectPosition,
    fadeInTransition,
    { isBackgroundPicture: true, containerClassName }
  );

  const style = getStyleElement({ styleAttributes, backgroundStyles });

  const link = getLinkElement({ images, preload, imagesizes, linkAttributes });

  const layoutStyles = getLayoutStyles({ isBackgroundImage: true });

  // Background Images shouldn't convey important information
  const alt = "";

  const sources = images.flatMap(({ media, sources, sizes, imagesizes }) =>
    sources.map(({ format, src, srcset }) =>
      src
        ? getImgElement({
            src,
            alt,
            sizes,
            style,
            srcset,
            loading,
            decoding,
            imagesizes,
            fadeInTransition,
            layoutStyles,
            imgAttributes,
          })
        : `<source
            srcset="${srcset}"
            sizes="${imagesizes}"
            width="${sizes.width}"
            height="${sizes.height}"
            type="${`image/${format}`}"
            ${media ? `media="${media}"` : ""}
          />`
    )
  );

  const picture = getPictureElement({
    sources,
    className,
    layoutStyles,
    pictureAttributes,
    isBackgroundPicture: true,
  });

  const htmlElement = getContainerElement({
    tag,
    content: picture + content,
    containerAttributes,
    isBackgroundPicture: true,
    containerClassName,
  });

  return { link, style, htmlElement };
}

const $$Astro$5 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$BackgroundPicture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BackgroundPicture;
  const content = await Astro2.slots.render("default");
  const { link, style, htmlElement } = await renderBackgroundPicture({
    content,
    ...Astro2.props
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(link + style + htmlElement)}` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/components/BackgroundPicture.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$ImageSupportDetection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ImageSupportDetection;
  return renderTemplate(_a || (_a = __template(['<!-- prettier-ignore --><script>\nconst{classList:e}=document.documentElement,A=e.add.bind(e);A("jpeg");A("png");const g=(B,d)=>{const a=new Image;a.src=`data:image/${B};base64,${d}`,a.onload=A(B)};g("webp","UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==");g("avif","AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");\n<\/script>'], ['<!-- prettier-ignore --><script>\nconst{classList:e}=document.documentElement,A=e.add.bind(e);A("jpeg");A("png");const g=(B,d)=>{const a=new Image;a.src=\\`data:image/\\${B};base64,\\${d}\\`,a.onload=A(B)};g("webp","UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==");g("avif","AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");\n<\/script>'])));
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/components/ImageSupportDetection.astro", void 0);

const $$Astro$3 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Another developer blog with cool tips and up to date tech" } = Astro2.props;
  const footerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" }
  ];
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderComponent($$result, "ImageSupportDetection", $$ImageSupportDetection, {})}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "footerLinks": footerLinks })}</body></html>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/layouts/Layout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/crafting-digital-magic.mdx": () => import('../crafting-digital-magic_09820b23.mjs'),"/src/content/posts/recommended-supps.mdx": () => import('../recommended-supps_55efc583.mjs'),"/src/content/posts/welcome-to-astro.mdx": () => import('../welcome-to-astro_795c46b2.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"crafting-digital-magic":"/src/content/posts/crafting-digital-magic.mdx","welcome-to-astro":"/src/content/posts/welcome-to-astro.mdx","recommended-supps":"/src/content/posts/recommended-supps.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/crafting-digital-magic.mdx": () => import('../crafting-digital-magic_ab8dd892.mjs'),"/src/content/posts/recommended-supps.mdx": () => import('../recommended-supps_c7dc71f9.mjs'),"/src/content/posts/welcome-to-astro.mdx": () => import('../welcome-to-astro_d111ed23.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Post;
  const posts = await getCollection("posts");
  const { post } = Astro2.props;
  [...new Set(posts.map((post2) => post2.data.tags).flat())];
  return renderTemplate`${maybeRenderHead()}<article><a${addAttribute(`/blog/${post.slug}`, "href")}>${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "width": 1200, "height": 1200 / 1.5, "alt": post.data.title, "class": "rounded shadow-xl mb-6 aspect-thumbnail object-cover" })}</a><div class="mb-4">${post.data.tags && post.data.tags.map((tag, index) => renderTemplate`<span${addAttribute(index, "key")} class="category-badge text-xs leading-5 mr-3 inline-block px-2 pb-1 rounded-sm text-zinc-300">${tag}</span>`)}</div><a${addAttribute(`/blog/${post.slug}`, "href")}><h2 class="text-zinc-300 text-2xl mb-4">${post.data.title}</h2></a><p class="text-zinc-300 text-lg line-clamp-2 mb-4">${post.data.excerpt}</p><div class="flex items-center space-x-3 text-gray-400"><div class="flex items-center gap-3"><div class="relative flex-shrink-0 w-5 h-5">${renderComponent($$result, "Image", $$Image, { "alt": "Author Photo", "class": "rounded-full", "width": 40, "height": 40, "src": post.data.authorPic })}</div><span class="text-sm">Gabe Amaya</span><span class="text-xs text-gray-300 dark:text-gray-600"> •</span><time class="text-xs">${post.data.date}</time></div></div></article>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Post.astro", void 0);

const $$Astro$1 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`<!-- Creates a collection post list to display a list of all posts -->${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-14 max-md:grid-cols-1 mb-24">${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)}</div>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/PostList.astro", void 0);

const $$Astro = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await getCollection("posts");
  const blogPageTitle = "Blog Post";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astroworld | Blog" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="px-24 max-w-7xl mx-auto w-full max-sm-24"><section id="blog-page-hero" class="flex text-center items-center justify-center"><div class="container px-4 mx-auto"><div class="rounded bg-gradient-to-b from-black px-8 py-14"><h1 class="text-4xl text-white text-center">${blogPageTitle}</h1></div></div></section><section id="blog-posts" class="py-14"><div class="container px-4 mx-auto">${renderComponent($$result2, "PostList", $$PostList, { "posts": posts })}</div></section></main>` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/blog.astro", void 0);

const $$file = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, $$Icon as a, $$PostList as b, $$Layout as c, getSrcPath as d, sharp as e, fsCachePath as f, getCollection as g, blog as h, imageConfig as i, supportedImageTypes as s };
