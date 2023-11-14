import { _ as __astro_tag_component__, F as Fragment, v as createVNode } from './astro_923801e0.mjs';
import { $ as $$Image } from './pages/blog_47d50b01.mjs';
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
  "tags": ["tech tips", "js", "react"],
  "date": "11/13/2023",
  "featured": false,
  "image": "./post-images/tech-stack-cover.jpg",
  "authorPic": "./post-images/gabe-author.jpg",
  "title": "Crafting Digital Magic - My Current Web Stack Tools",
  "excerpt": "I share my current favorite web stack tools that have become the backbone of my digital creations."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "intro",
    "text": "Intro"
  }, {
    "depth": 2,
    "slug": "1-astro-elevating-static-site-generation",
    "text": "1. Astro: Elevating Static Site Generation"
  }, {
    "depth": 2,
    "slug": "2-react-the-powerhouse-of-user-interfaces",
    "text": "2. React: The Powerhouse of User Interfaces"
  }, {
    "depth": 2,
    "slug": "vuejs-elegant-simplicity-for-web-apps",
    "text": "Vue.js: Elegant Simplicity for Web Apps"
  }, {
    "depth": 2,
    "slug": "4-figma-designing-in-harmony",
    "text": "4. Figma: Designing in Harmony"
  }, {
    "depth": 2,
    "slug": "5-tailwind-css-streamlined-styling",
    "text": "5. Tailwind CSS: Streamlined Styling"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion:"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "intro",
      children: "Intro"
    }), "\n", createVNode(_components.p, {
      children: "Embarking on a web development journey is an exhilarating experience, and the right set of tools can make all the difference. In this blog post, I thought I\u2019d share my current favorite web stack tools that have become the backbone of my digital creations. From seamless development to sleek design, these tools form a powerhouse for crafting captivating online experiences in today\u2019s dev age."
    }), "\n", createVNode(_components.h2, {
      id: "1-astro-elevating-static-site-generation",
      children: "1. Astro: Elevating Static Site Generation"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      }), " has revolutionized my approach to static site generation. In the past I tried Gatsby to create a portfolio that ulitmaly led to my next big gig at Callaway Golf Interactive. But that was 6 years ago and tech has changed for the better. Astro\u2019s speed, flexibility, and intuitive syntax make it a standout choice for building lightning-fast websites. With Astro, the line between static and dynamic becomes beautifully blurred, allowing for dynamic content without sacrificing performance. I will begin giving short tips and tricks for building soon when I get my Streaming setup \u{1F605}."]
    }), "\n", createVNode(_components.p, {
      children: ["\u{1F6D2} Explore ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "2-react-the-powerhouse-of-user-interfaces",
      children: "2. React: The Powerhouse of User Interfaces"
    }), "\n", createVNode(_components.p, {
      children: ["When it comes to building dynamic user interfaces, ", createVNode(_components.a, {
        href: "https://react.dev/",
        children: "React"
      }), " stands tall. Its component-based architecture and virtual DOM make it a go-to choice for scalable and interactive applications. Whether crafting a single-page app or integrating components into an existing project, React empowers me to bring ideas to life with ease. It\u2019s the most in demand for jobs right now and I know why after continueing my education on it daily."]
    }), "\n", createVNode(_components.p, {
      children: ["\u{1F6D2} Discover ", createVNode(_components.a, {
        href: "https://react.dev/",
        children: "React"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "vuejs-elegant-simplicity-for-web-apps",
      children: "Vue.js: Elegant Simplicity for Web Apps"
    }), "\n", createVNode(_components.p, {
      children: ["Not far behind and one of my favorite JavaScript frameworks currently is ", createVNode(_components.a, {
        href: "https://vuejs.org/",
        children: "Vue.js"
      }), ". For projects where simplicity and versatility are key, Vue.js takes the spotlight. Vue\u2019s progressive framework allows me to incrementally adopt its features, making it an excellent choice for both small and large-scale applications. The clean syntax and reactivity system simplify the development process without compromising on power."]
    }), "\n", createVNode(_components.p, {
      children: ["\u{1F6D2} Dive into ", createVNode(_components.a, {
        href: "https://vuejs.org/",
        children: "Vue.js"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "4-figma-designing-in-harmony",
      children: "4. Figma: Designing in Harmony"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.figma.com/",
        children: "Figma"
      }), " has become my design playground, seamlessly bridging the gap between design and development. Its collaborative features, prototyping capabilities, and cross-platform accessibility make it a must-have for creating stunning visuals and ensuring a smooth handoff from design to code. It\u2019s new \u2018Dev Mode\u2019 feature has been game changing. I just finished with a large project for a company professionally collabing with this tool and it\u2019s for sure the \u{1F410}!"]
    }), "\n", createVNode(_components.p, {
      children: ["\u{1F6D2} Explore ", createVNode(_components.a, {
        href: "https://www.figma.com/",
        children: "Figma"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "5-tailwind-css-streamlined-styling",
      children: "5. Tailwind CSS: Streamlined Styling"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://tailwindcss.com/",
        children: "Tailwind CSS"
      }), " has transformed the way I approach styling. I didn\u2019t think I would like it because I didn\u2019t know exaclty what it was. I thought it was just another ", createVNode(_components.a, {
        href: "https://getbootstrap.com/",
        children: "Bootstrap"
      }), " but boy was I wrong. With its utility-first approach and extensive set of pre-built styles, Tailwind CSS allows me to build modern, responsive interfaces with remarkable efficiency. It\u2019s the perfect companion for projects of any scale. I built this very blog with it."]
    }), "\n", createVNode(_components.p, {
      children: ["\u{1F6D2} Discover ", createVNode(_components.a, {
        href: "https://tailwindcss.com/",
        children: "Tailwind CSS"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion:"
    }), "\n", createVNode(_components.p, {
      children: "The synergy, ew, another silly buzzword, but hey it fits! The synergy of Astro, React, Vue, Figma, and Tailwind CSS forms a web development dream team. Could probably just stick to just one JS framework if you are getting in to Web development right now but I\u2019m loving the learning. Whether I\u2019m crafting performant static sites, dynamic user interfaces, or bringing designs to life, these tools empower me at every step. Embrace the magic of these web stack tools, and elevate your digital creations to new heights! Hey I gotta use some of these buzzwords to get those sweet, sweet clicks. \u{1F97A} Thanks for reading!"
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
const url = "src/content/posts/crafting-digital-magic.mdx";
const file = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/crafting-digital-magic.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kinggabes/Desktop/react-astro-blog/dreary-doppler/src/content/posts/crafting-digital-magic.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
