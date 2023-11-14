/* empty css                          */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_923801e0.mjs';
import 'clsx';
import { g as getCollection, $ as $$Image, a as $$Icon, b as $$PostList, c as $$Layout } from './blog_47d50b01.mjs';
/* empty css                           */
const $$Astro$5 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="py-16 flex justify-center items-center text-center" data-astro-cid-bbe6dxrz><div class="max-w-5xl mx-auto px-6" data-astro-cid-bbe6dxrz><h1 class="text-4xl lg:text-7xl text-white mb-6 font-bold" data-astro-cid-bbe6dxrz><span class="color-accent font-heading" data-astro-cid-bbe6dxrz>Elevate Your Tech Game:</span> Where Code, Lifting, and Relaxation Collide</h1><p class="text-xl lg:text-2xl text-zinc-300" data-astro-cid-bbe6dxrz>Exploring the Intersection of Coding tips, Fitness, and Gadgets: Code, Lift and Chill</p></div></section>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Featured = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Featured;
  const posts = await getCollection("posts");
  const post = posts[0];
  [...new Set(posts.map((post2) => post2.data.tags).flat())];
  return renderTemplate`${maybeRenderHead()}<section class="flex py-16" data-astro-cid-gghe66ga><div class="container mx-auto px-4" data-astro-cid-gghe66ga>${post ? renderTemplate`<article class="featured-card text-white max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded shadow" data-astro-cid-gghe66ga><div class="featured-left-card" data-astro-cid-gghe66ga><div class="mb-4" data-astro-cid-gghe66ga>${post.data.tags && post.data.tags.map((tag, index) => renderTemplate`<span${addAttribute(index, "key")} class="category-badge text-xs leading-6 mr-3 inline-block px-2 pb-1 rounded-sm" data-astro-cid-gghe66ga>${tag}</span>`)}</div><a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-gghe66ga><h3 class="text-2xl text-white mb-4" data-astro-cid-gghe66ga>${post.data.title}</h3></a><p class="text-zinc-300 text-md line-clamp-2" data-astro-cid-gghe66ga>${post.data.excerpt}</p></div><div class="featured-card-right" data-astro-cid-gghe66ga><a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-gghe66ga>${post.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "width": 600, "height": 600 / 1.5, "alt": post.data.title, "class": "rounded shadow-xl mt-6 mb-6 aspect-thumbnail object-cover", "data-astro-cid-gghe66ga": true })}`}</a></div></article>` : renderTemplate`<p data-astro-cid-gghe66ga>Loading...</p>`}</div></section>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Featured.astro", void 0);

const $$Astro$3 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const sidebarTitle = "Lets get connected";
  return renderTemplate`${maybeRenderHead()}<aside class="block" data-astro-cid-ssfzsv2f><div class="sidebar-content rounded shadow-sm p-6 flex justify-center flex-col text-center" data-astro-cid-ssfzsv2f><h4 class="text-2xl mb-4 text-white sidebar-title" data-astro-cid-ssfzsv2f>${sidebarTitle}</h4><!-- <div class="social-links flex gap-x-2">
            {socialLinks.map((link, index) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
                <img src={link.icon} alt={link.name} />
            </a>
            ))}
        </div> --><div class="social-links flex gap-x-4 justify-center mb-6" data-astro-cid-ssfzsv2f><a href="https://github.com/CodingGabe" target="_blank" rel="noopener noreferrer" data-astro-cid-ssfzsv2f>${renderComponent($$result, "Icon", $$Icon, { "name": "github", "data-astro-cid-ssfzsv2f": true })}</a><a href="https://instagram.com/creative.gabe" target="_blank" rel="noopener noreferrer" data-astro-cid-ssfzsv2f>${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "data-astro-cid-ssfzsv2f": true })}</a><a href="https://linkedin.com/in/gabeamaya" target="_blank" rel="noopener noreferrer" data-astro-cid-ssfzsv2f>${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "data-astro-cid-ssfzsv2f": true })}</a></div><a href="mailto:gabeamaya2@gmail.com" class="cta-btn block w-full py-2 px-4 text-zinc-800 font-bold rounded-sm" data-astro-cid-ssfzsv2f>Contact Me</a></div></aside>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/Sidebar.astro", void 0);

const $$Astro$2 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogList;
  const posts = await getCollection("posts");
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/CodingGabe", icon: "./images/github-alt.svg" },
    { name: "Instagram", url: "https://instagram.com/creative.gabe", icon: "./images/instagram-alt.svg" },
    { name: "LinkedIn", url: "https://linkedin.com/in/gabeamaya", icon: "./images/linkedin.svg" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="main-content" class="flex lg:mt-16 max-sm:pb-10" data-astro-cid-35dpazjw><div class="content-wrapper grid gap-x-7 max-w-5xl px-4 mx-auto" data-astro-cid-35dpazjw>${renderComponent($$result, "PostList", $$PostList, { "posts": posts, "data-astro-cid-35dpazjw": true })}${renderComponent($$result, "Sidebar", $$Sidebar, { "sidebarTitle": "Lets get Connected!", "socialLinks": socialLinks, "data-astro-cid-35dpazjw": true })}</div></section>`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/components/BlogList.astro", void 0);

const $$Astro$1 = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Code, Lift and Chill", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Featured", $$Featured, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "BlogList", $$BlogList, { "data-astro-cid-j7pv25f6": true })}</main>` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/index.astro", void 0);

const $$file$1 = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://gabes-astro-code-blog.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><div>${tags.map((tag) => renderTemplate`<p class="text-white">${tag}</p>`)}</div></main>` })}`;
}, "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/tags/index.astro", void 0);

const $$file = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
