import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_923801e0.mjs';
import { $ as $$Image } from './pages/blog_274bf74b.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                         */import './astro-assets-services_fb028c83.mjs';
import 'svgo';
import 'node:crypto';
import 'object-hash';
import 'node:fs';
import 'node:path';
import 'node:util';
import 'potrace';
import 'find-cache-dir';
import 'node:url';

const frontmatter = {
  "author": "gabe-amaya",
  "tags": ["astro", "js", "react"],
  "date": "11/06/2023",
  "featured": false,
  "image": "./post-images/astro-thumb.png",
  "authorPic": "./post-images/gabe-author.jpg",
  "title": "Welcome to my new Blog built with Astro",
  "excerpt": "Astro is a powerful static site generator designed for modern web development. It offers a unique approach to building websites that can significantly improve the performance and user experience of your blog."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "intro",
    "text": "Intro"
  }, {
    "depth": 2,
    "slug": "brief-intro-of-what-is-astro",
    "text": "Brief intro of what is Astro"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "intro",
      children: "Intro"
    }), "\n", createVNode(_components.p, {
      children: "In today\u2019s digital age, creating an engaging and high-performing blog is essential for sharing your thoughts and ideas with the world. Static site generators have gained popularity due to their ability to deliver fast-loading, secure, and easily maintainable websites. If you\u2019re considering starting a blog, one static site generator that\u2019s gaining traction is Astro.js. I have built one in the past for my gaming blog using Gatsby and loved it. I had, since, moved on to do other things for professional work with marketing and doing landing pages, components etc however I have fallen in love with creating more content and, once again, working on growing an online presence."
    }), "\n", createVNode(_components.p, {
      children: "This has led me to find the newest and best tech for my goals and Astro was it. The sheer speed, docs, support, tech stack, I knew I needed to go out and build with it."
    }), "\n", createVNode(_components.p, {
      children: "Astro  is a revolutionary static site generator known for its performance and developer-friendly features. Whether you\u2019re new to web development or an experienced developer looking for a faster and more efficient way to create a blog, Astro.js is a great choice."
    }), "\n", createVNode(_components.h2, {
      id: "brief-intro-of-what-is-astro",
      children: "Brief intro of what is Astro"
    }), "\n", createVNode(_components.p, {
      children: "Astro is a powerful static site generator designed for modern web development. It offers a unique approach to building websites that can significantly improve the performance and user experience of your blog.  It\u2019s built with performance in mind. It optimizes your website by default, delivering blazingly \u26A1\uFE0F fast load times. This is crucial for retaining and engaging your blog\u2019s visitors."
    }), "\n", createVNode(_components.p, {
      children: "Not just React, but Astro also gives you the freedom to use your preferred technologies and tools. It supports popular web frameworks like React, Svelte, and Vue, allowing you to work with the tools you\u2019re comfortable with."
    }), "\n", createVNode(_components.p, {
      children: "As mentioned, it has a ton of support and is Developer-friendly. Astro streamlines the development process, making it easy to create and manage your blog. Its simple and intuitive configuration system lets you focus on writing content and designing your blog rather than wrestling with complex build processes."
    }), "\n", createVNode(_components.p, {
      children: "Astro also comes packed with SEO Benefits; Static site generators are inherently SEO-friendly, and Astro is no exception. By delivering optimized, static HTML pages, your blog will rank better in search engines, attracting more organic traffic. No need for all of that insane fluff and spaghetti code that WordPress creates. No more hacking around doing outdated SEO practices with WordPress."
    }), "\n", createVNode(_components.p, {
      children: "In the next post, I will briefly explain the steps to create a blog using Astro that are easy to follow."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/welcome-to-astro.mdx";
const file = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/welcome-to-astro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/welcome-to-astro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
