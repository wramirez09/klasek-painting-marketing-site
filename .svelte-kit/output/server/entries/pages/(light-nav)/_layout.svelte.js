import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component, g as subscribe } from "../../../chunks/ssr.js";
import { l as logo, N as NavBar } from "../../../chunks/NavBar.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { s as stars } from "../../../chunks/5-stars.js";
import { B as Button } from "../../../chunks/button.js";
import { C as ClickToCall } from "../../../chunks/ClickToCall.js";
import { r as routes } from "../../../chunks/routes.js";
import { i as googleMapsHref } from "../../../chunks/siteData.js";
import { p as page } from "../../../chunks/stores.js";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const FooterFunnel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description } = $$props;
  let { services } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.services === void 0 && $$bindings.services && services !== void 0) $$bindings.services(services);
  return `<footer class="bg-[#15133a] text-white/70 py-12 p-x"><div class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8"> <div><a href="/" class="inline-block mb-4">${typeof logo === "string" ? `<img${add_attribute("src", logo.img.src, 0)} alt="Klasek Painting" class="h-11 w-auto" loading="lazy"${add_attribute("width", logo.img.w, 0)}${add_attribute("height", logo.img.h, 0)}>` : `<picture>${each(Object.entries(logo.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", logo.img.src, 0)} alt="Klasek Painting" class="h-11 w-auto" loading="lazy"${add_attribute("width", logo.img.w, 0)}${add_attribute("height", logo.img.h, 0)}></picture>`}</a> <p class="text-sm leading-relaxed text-white/55">${escape(description)}</p> <div class="mt-4 flex items-center gap-2" data-svelte-h="svelte-1yp7117"><img class="w-[80px] h-[14px]"${add_attribute("src", stars, 0)} alt="5 stars"> <span class="text-xs text-white/50">5.0 on Google</span></div></div>  <div><p class="font-bold text-white text-sm uppercase tracking-wider mb-3" data-svelte-h="svelte-1tivdb7">Services</p> <ul class="space-y-2 text-sm">${each(services, ({ href, text }) => {
    return `<li><a${add_attribute("href", href, 0)} class="hover:text-primary transition">${escape(text)}</a></li>`;
  })}</ul></div>  <div><p class="font-bold text-white text-sm uppercase tracking-wider mb-3" data-svelte-h="svelte-101an6r">Contact</p> <ul class="space-y-2 text-sm"><li>${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      variant: "link",
      class: "!text-sm !no-underline !text-white/70 hover:!text-primary transition"
    },
    {},
    {}
  )}</li> <li data-svelte-h="svelte-7u2rfb"><a${add_attribute("href", googleMapsHref, 0)} target="_blank" class="hover:text-primary transition">4415 S. Custer,<br>Lyons, IL 60534</a></li></ul></div>  <div><p class="font-bold text-white text-sm uppercase tracking-wider mb-3" data-svelte-h="svelte-1j2mae3">Ready when you are</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: routes["contact"].href,
      class: "w-full"
    },
    {},
    {
      default: () => {
        return `Get a Free Estimate`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://www.google.com/maps/dir/?api=1&destination=41.81041,-87.839737",
      target: "_blank",
      variant: "outline",
      class: "w-full mt-3"
    },
    {},
    {
      default: () => {
        return `Get Directions`;
      }
    }
  )}</div></div>  <div class="container mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Klasek Painting. All rights reserved.</p> <p data-svelte-h="svelte-lktaxo">Lead-Safe Certified · 100% Satisfaction Guarantee</p></div></footer>`;
});
const { Object: Object_1 } = globals;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let funnelFooter;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const funnelFooters = {
    "/services/gutter-installation-repair": {
      description: "Exterior repair & seamless gutter specialists serving Chicago and Cook County for 30+ years.",
      services: [
        {
          text: "Seamless installation",
          href: "#install"
        },
        {
          text: "Repair & storm damage",
          href: "#repair"
        },
        {
          text: "Cleaning & maintenance",
          href: "#cleaning"
        },
        { text: "Gutter guards", href: "#faq" }
      ]
    },
    "/services/siding-painting-repair/hardie-board-services": {
      description: "Exterior painting & Hardie board siding specialists serving Chicago and Cook County for 30+ years.",
      services: [
        {
          text: "Hardie board painting",
          href: "#painting"
        },
        {
          text: "Repair before painting",
          href: "#repair"
        },
        {
          text: "Trim & soffit painting",
          href: "#trim"
        },
        { text: "Painting guide", href: "#guide" }
      ]
    },
    "/careers": {
      description: "Exterior painting & repair specialists serving Lyons and the western Chicago suburbs for 30+ years. Now hiring.",
      services: [
        { text: "Why Klasek", href: "#positions" },
        {
          text: "Open positions",
          href: "#positions"
        },
        { text: "Apply now", href: "#apply" }
      ]
    }
  };
  funnelFooter = Object.entries(funnelFooters).find(([path]) => $page.url.pathname.startsWith(path))?.[1];
  $$unsubscribe_page();
  return `${validate_component(NavBar, "NavBar").$$render($$result, { lightNav: true }, {}, {})} ${slots.default ? slots.default({}) : ``} ${funnelFooter ? `${validate_component(FooterFunnel, "FooterFunnel").$$render($$result, Object_1.assign({}, funnelFooter), {}, {})}` : `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout as default
};
