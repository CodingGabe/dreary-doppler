import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_923801e0.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.490865f1.js"}],"styles":[{"type":"external","src":"/_astro/blog.ecc02aa7.css"},{"type":"inline","content":"#hero[data-astro-cid-bbe6dxrz]{background-image:url(./public/images/noisy-bg2.png);background-size:cover;background-position:center}@media (min-width: 576px){#hero[data-astro-cid-bbe6dxrz]{min-height:30rem}}.featured-card[data-astro-cid-gghe66ga]{background-color:var(--color-accent-dark);margin-top:-3.5rem}.category-badge[data-astro-cid-gghe66ga]{background-color:var(--color-jungle)}@media (min-width: 576px){.featured-card[data-astro-cid-gghe66ga]{margin-top:-6rem}}.social-links[data-astro-cid-ssfzsv2f] svg[data-astro-cid-ssfzsv2f]{min-height:1.65rem}[data-astro-cid-ssfzsv2f][astro-icon]{color:var(--color-primary);fill:var(--color-primary)}.sidebar-content[data-astro-cid-ssfzsv2f]{background-color:var(--color-accent-dark)}.content-wrapper[data-astro-cid-35dpazjw]{grid-template-columns:1fr}@media (min-width: 576px){.content-wrapper[data-astro-cid-35dpazjw]{grid-template-columns:2fr .75fr}}main[data-astro-cid-j7pv25f6]{min-height:100vh}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.02bc16e1.js"}],"styles":[{"type":"external","src":"/_astro/blog.ecc02aa7.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.02bc16e1.js"}],"styles":[{"type":"external","src":"/_astro/blog.ecc02aa7.css"}],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gabes-astro-code-blog.netlify.app","base":"/","compressHTML":true,"componentMetadata":[["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/BlogList.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Featured.astro",{"propagation":"in-tree","containsHead":false}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Post.astro",{"propagation":"in-tree","containsHead":false}],["/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/PostList.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_370a9e45.mjs","/src/pages/blog/[slug].astro":"chunks/prerender_d12110ff.mjs","\u0000@astrojs-manifest":"manifest_edbaba8f.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_cc3ae721.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a770ec45.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__c03689c3.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_2d48811c.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_9c3afa1a.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/crafting-digital-magic.mdx?astroContentCollectionEntry=true":"chunks/crafting-digital-magic_09820b23.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/recommended-supps.mdx?astroContentCollectionEntry=true":"chunks/recommended-supps_55efc583.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/welcome-to-astro.mdx?astroContentCollectionEntry=true":"chunks/welcome-to-astro_795c46b2.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/crafting-digital-magic.mdx?astroPropagatedAssets":"chunks/crafting-digital-magic_78a28cd2.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/recommended-supps.mdx?astroPropagatedAssets":"chunks/recommended-supps_5e31a442.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/welcome-to-astro.mdx?astroPropagatedAssets":"chunks/welcome-to-astro_40731be7.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/api/utils/imagetools.js":"chunks/imagetools_3c895bc4.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/api/utils/codecs.js":"chunks/codecs_a48cc0e1.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/astroViteConfigs.js":"chunks/astroViteConfigs_f98a1cd5.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/plugin/hooks/load.js":"chunks/load_4e190cce.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/crafting-digital-magic.mdx":"chunks/crafting-digital-magic_c98e39a1.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/recommended-supps.mdx":"chunks/recommended-supps_63f59291.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/welcome-to-astro.mdx":"chunks/welcome-to-astro_4229726f.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/plugin/utils/imagetools.js":"chunks/imagetools_fa0cadcd.mjs","/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/node_modules/astro-imagetools/plugin/utils/codecs.js":"chunks/codecs_728e8866.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.490865f1.js","/astro/hoisted.js?q=1":"_astro/hoisted.02bc16e1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/tech-stack-cover.8e4eeb69.jpg","/_astro/astro-thumb.242e4c02.png","/_astro/gabe-author.3f87e398.jpg","/_astro/wellness.f9fe3806.jpg","/_astro/blog.ecc02aa7.css","/favicon.svg","/_astro/hoisted.02bc16e1.js","/_astro/hoisted.490865f1.js","/fonts/Agbalumo-Regular.ttf","/fonts/Poppins-Bold.ttf","/fonts/Poppins-Italic.ttf","/fonts/Poppins-Medium.ttf","/fonts/Poppins-Regular.ttf","/fonts/Poppins-SemiBold.ttf","/fonts/Poppins-Thin.ttf","/fonts/Varela-Reg.ttf","/fonts/cera-round-bold.otf","/fonts/cera-round-bold.woff","/fonts/cera-round-reg.woff","/fonts/mplus-black.ttf","/images/github-alt.svg","/images/instagram-alt.svg","/images/logo.svg","/images/noisy-bg2.png","/images/noisy-grad.png","/images/y2k-gabes.svg"]});

export { manifest };
