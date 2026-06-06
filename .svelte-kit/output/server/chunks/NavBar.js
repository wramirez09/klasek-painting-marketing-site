import { c as create_ssr_component, g as subscribe, a as add_attribute, b as escape, v as validate_component, e as each, j as compute_slots } from "./ssr.js";
import { B as Button } from "./button.js";
import { p as page } from "./stores.js";
import { c as cn } from "./utils2.js";
import { A as ArrowIcon } from "./ArrowIcon.js";
import { i as isMobileStore } from "./isMobileStore.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import { r as routes, a as aboutUsRoutes, s as serviceAreaRoutes } from "./routes.js";
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: classes = "" } = $$props;
  let { data } = $$props;
  let { navHidden = true } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.navHidden === void 0 && $$bindings.navHidden && navHidden !== void 0) $$bindings.navHidden(navHidden);
  $$unsubscribe_page();
  return `<li${add_attribute("class", cn("lg:p-0 py-4", classes), 0)}><div><a${add_attribute("aria-current", $page.url.pathname === data.href ? "page" : false, 0)} class="flex items-center whitespace-nowrap text-white lg:text-lg text-2xl font-semibold w-fit lg:hover:underline"${add_attribute("href", data.href, 0)}>${escape(data.text)}</a></div></li>`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  let { data } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$unsubscribe_isMobileStore();
  return ` <li${add_attribute("class", cn("relative group", classes), 0)}><div class="lg:p-0 text-white h-full flex items-center lg:justify-start justify-between py-4 relative"><a${add_attribute("href", data.href, 0)} class="${escape("", true) + " lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"}">${escape(data.text)}  ${validate_component(ArrowIcon, "ArrowIcon").$$render(
    $$result,
    {
      class: "lg:inline hidden lg:size-5 size-6 rotate-90 m-0"
    },
    {},
    {}
  )}</a>  ${$isMobileStore ? `<button>${validate_component(ArrowIcon, "ArrowIcon").$$render(
    $$result,
    {
      class: "rotate-90 lg:hidden lg:size-5 size-8 m-0 inline duration-200"
    },
    {},
    {}
  )}</button>` : ``}</div> ${``}</li>`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { navHidden = true } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.navHidden === void 0 && $$bindings.navHidden && navHidden !== void 0) $$bindings.navHidden(navHidden);
  return `<li class="relative"><a class="block py-4 lg:py-3 lg:px-2 font-semibold lg:text-lg text-xl lg:text-secondary-dark text-white lg:hover:underline underline-offset-2"${add_attribute("href", data.href, 0)}>${escape(data.text)}</a></li>`;
});
const NavLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      data: routes["about"],
      class: "xl:block lg:hidden block"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: aboutUsRoutes["testimonials"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: aboutUsRoutes["blog"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: aboutUsRoutes["faq"] }, {}, {})}`;
      }
    }
  )}  ${validate_component(Dropdown, "Dropdown").$$render($$result, { data: routes["services"] }, {}, {
    default: () => {
      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["exterior-home-painting"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["siding-painting-repair"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["hardie-installation"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["brick-painting-repair"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["stucco-painting-repair"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["gutters"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["design-consultation"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: routes["commercial"] }, {}, {})}`;
    }
  })}  ${validate_component(Dropdown, "Dropdown").$$render($$result, { data: aboutUsRoutes["service-area"] }, {}, {
    default: () => {
      return `${each(Object.values(serviceAreaRoutes), (data) => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data }, {}, {})}`;
      })}`;
    }
  })}  ${validate_component(NavItem, "NavItem").$$render(
    $$result,
    {
      data: routes["gallery"],
      class: "xl:block lg:hidden block"
    },
    {},
    {}
  )}`;
});
const logo$1 = {
  sources: {
    avif: "/_app/immutable/assets/klasek-painting.BqcsE6g8.avif 341w, /_app/immutable/assets/klasek-painting.BukYcRY9.avif 682w",
    webp: "/_app/immutable/assets/klasek-painting.BnNYVKxq.webp 341w, /_app/immutable/assets/klasek-painting.CI-A5nti.webp 682w",
    png: "/_app/immutable/assets/klasek-painting.rB-0q_B5.png 341w, /_app/immutable/assets/klasek-painting.k4-jd9ji.png 682w"
  },
  img: {
    src: "/_app/immutable/assets/klasek-painting.k4-jd9ji.png",
    w: 682,
    h: 262
  }
};
const logoDark$1 = {
  sources: {
    avif: "/_app/immutable/assets/kalsek-painting-dark.D-6-XIAq.avif 310w, /_app/immutable/assets/kalsek-painting-dark.DMispLd4.avif 619w",
    webp: "/_app/immutable/assets/kalsek-painting-dark.BHy4auJH.webp 310w, /_app/immutable/assets/kalsek-painting-dark.n_OgIajQ.webp 619w",
    png: "/_app/immutable/assets/kalsek-painting-dark.DYGVK_fI.png 310w, /_app/immutable/assets/kalsek-painting-dark.D2MdFeFt.png 619w"
  },
  img: {
    src: "/_app/immutable/assets/kalsek-painting-dark.D2MdFeFt.png",
    w: 619,
    h: 238
  }
};
const DesktopNavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lightNav = false } = $$props;
  let { ctaHref = routes["contact"].href } = $$props;
  let { logoHref = "/" } = $$props;
  let { showNavLinks = true } = $$props;
  if ($$props.lightNav === void 0 && $$bindings.lightNav && lightNav !== void 0) $$bindings.lightNav(lightNav);
  if ($$props.ctaHref === void 0 && $$bindings.ctaHref && ctaHref !== void 0) $$bindings.ctaHref(ctaHref);
  if ($$props.logoHref === void 0 && $$bindings.logoHref && logoHref !== void 0) $$bindings.logoHref(logoHref);
  if ($$props.showNavLinks === void 0 && $$bindings.showNavLinks && showNavLinks !== void 0) $$bindings.showNavLinks(showNavLinks);
  return `<div${add_attribute(
    "class",
    `
		${"lg:py-8"}
        hidden lg:flex justify-between max-w-screen-xl mx-auto relative border-primary transition-all duration-200
        before:absolute before:content-[''] before:max-w-[100vw] xl:before:w-[103%] lg:before:w-full before:h-1 before:bg-primary before:rounded-full before:top-full before:left-1/2 before:-translate-x-1/2
    `,
    0
  )}> <div class="w-fit"><a${add_attribute("href", logoHref, 0)}> ${typeof logoDark$1 === "string" ? `<img${add_attribute("src", logoDark$1.img.src, 0)} alt="Klasek Painting" class="${[
    escape("w-[180px]", true) + " h-auto hidden transition-all duration-200 flex-shrink-0",
    lightNav ? "lg:block" : ""
  ].join(" ").trim()}"${add_attribute("width", logoDark$1.img.w, 0)}${add_attribute("height", logoDark$1.img.h, 0)}>` : `<picture>${each(Object.entries(logoDark$1.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", logoDark$1.img.src, 0)} alt="Klasek Painting" class="${[
    escape("w-[180px]", true) + " h-auto hidden transition-all duration-200 flex-shrink-0",
    lightNav ? "lg:block" : ""
  ].join(" ").trim()}"${add_attribute("width", logoDark$1.img.w, 0)}${add_attribute("height", logoDark$1.img.h, 0)}></picture>`}  ${typeof logo$1 === "string" ? `<img${add_attribute("src", logo$1.img.src, 0)} alt="Klasek Painting" class="${[
    escape("w-[180px]", true) + " h-auto block transition-all duration-200",
    lightNav ? "lg:hidden" : ""
  ].join(" ").trim()}"${add_attribute("width", logo$1.img.w, 0)}${add_attribute("height", logo$1.img.h, 0)}>` : `<picture>${each(Object.entries(logo$1.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", logo$1.img.src, 0)} alt="Klasek Painting" class="${[
    escape("w-[180px]", true) + " h-auto block transition-all duration-200",
    lightNav ? "lg:hidden" : ""
  ].join(" ").trim()}"${add_attribute("width", logo$1.img.w, 0)}${add_attribute("height", logo$1.img.h, 0)}></picture>`}</a></div> ${showNavLinks ? `<ul${add_attribute(
    "class",
    `${lightNav ? "[&>*>*]:!text-secondary-dark [&>*>*>*]:!text-secondary-dark" : ""} flex items-center justify-center gap-6`,
    0
  )}>${validate_component(NavLinks, "NavLinks").$$render($$result, {}, {}, {})}</ul>` : ``} <div class="flex items-center justify-end gap-3">${validate_component(Button, "Button").$$render($$result, { href: ctaHref }, {}, {
    default: () => {
      return `Get Free Estimate`;
    }
  })}</div></div>`;
});
const logo = "/_app/immutable/assets/klasek-painting.DE80gKY0.webp";
const logoDark = "/_app/immutable/assets/kalsek-painting-dark.-xsWA5cJ.webp";
const css = {
  code: ".hamburger.svelte-n7kzi0.svelte-n7kzi0{width:32px;height:24px;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0}.burger.svelte-n7kzi0.svelte-n7kzi0{width:32px;height:3px;background:hsl(var(--primary));border-radius:10px;transition:all 0.2s linear;position:relative;transform-origin:1px}.hamburger.open.svelte-n7kzi0 .burger1.svelte-n7kzi0{transform:rotate(45deg) translate(1px, 0)}.hamburger.open.svelte-n7kzi0 .burger2.svelte-n7kzi0{opacity:0;transform:translateX(20px)}.hamburger.open.svelte-n7kzi0 .burger3.svelte-n7kzi0{transform:rotate(-45deg) translate(-1px, 0)}",
  map: '{"version":3,"file":"Hamburger.svelte","sources":["Hamburger.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let open;\\nlet hamburger;\\nconst handleClick = () => {\\n  if (document) {\\n    if (open) {\\n      hamburger.focus();\\n    }\\n    open = !open;\\n  }\\n};\\n<\/script>\\n\\n<button\\n\\tbind:this={hamburger}\\n\\ton:click={handleClick}\\n\\tclass=\\"xs:p-6 p-4\\"\\n\\taria-label=\\"Hamburger menu\\"\\n\\taria-expanded={open}\\n\\taria-controls=\\"menu\\"\\n>\\n\\t<div class=\\"hamburger\\" class:open>\\n\\t\\t<div class=\\"burger burger1\\" />\\n\\t\\t<div class=\\"burger burger2\\" />\\n\\t\\t<div class=\\"burger burger3\\" />\\n\\t</div>\\n</button>\\n\\n<style>\\n\\t.hamburger {\\n\\t\\twidth: 32px;\\n\\t\\theight: 24px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: space-between;\\n\\t\\tbackground: transparent;\\n\\t\\tborder: none;\\n\\t\\tcursor: pointer;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.burger {\\n\\t\\twidth: 32px;\\n\\t\\theight: 3px;\\n\\t\\tbackground: hsl(var(--primary));\\n\\t\\tborder-radius: 10px;\\n\\t\\ttransition: all 0.2s linear;\\n\\t\\tposition: relative;\\n\\t\\ttransform-origin: 1px;\\n\\t}\\n\\n\\t.hamburger.open .burger1 {\\n\\t\\ttransform: rotate(45deg) translate(1px, 0);\\n\\t}\\n\\n\\t.hamburger.open .burger2 {\\n\\t\\topacity: 0;\\n\\t\\ttransform: translateX(20px);\\n\\t}\\n\\n\\t.hamburger.open .burger3 {\\n\\t\\ttransform: rotate(-45deg) translate(-1px, 0);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,sCAAW,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CACV,CAEA,mCAAQ,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,IAAI,SAAS,CAAC,CAAC,CAC/B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,MAAM,CAC3B,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,GACnB,CAEA,UAAU,mBAAK,CAAC,sBAAS,CACxB,SAAS,CAAE,OAAO,KAAK,CAAC,CAAC,UAAU,GAAG,CAAC,CAAC,CAAC,CAC1C,CAEA,UAAU,mBAAK,CAAC,sBAAS,CACxB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC3B,CAEA,UAAU,mBAAK,CAAC,sBAAS,CACxB,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,CAAC,CAC5C"}'
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let hamburger;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$result.css.add(css);
  return `<button class="xs:p-6 p-4" aria-label="Hamburger menu"${add_attribute("aria-expanded", open, 0)} aria-controls="menu"${add_attribute("this", hamburger, 0)}><div class="${["hamburger svelte-n7kzi0", open ? "open" : ""].join(" ").trim()}" data-svelte-h="svelte-ccu9vo"><div class="burger burger1 svelte-n7kzi0"></div> <div class="burger burger2 svelte-n7kzi0"></div> <div class="burger burger3 svelte-n7kzi0"></div></div> </button>`;
});
const MobileNavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { whiteNav = false } = $$props;
  let { ctaHref = routes["contact"].href } = $$props;
  let { logoHref = "/" } = $$props;
  let { showNavLinks = true } = $$props;
  let open = false;
  let menu;
  if ($$props.whiteNav === void 0 && $$bindings.whiteNav && whiteNav !== void 0) $$bindings.whiteNav(whiteNav);
  if ($$props.ctaHref === void 0 && $$bindings.ctaHref && ctaHref !== void 0) $$bindings.ctaHref(ctaHref);
  if ($$props.logoHref === void 0 && $$bindings.logoHref && logoHref !== void 0) $$bindings.logoHref(logoHref);
  if ($$props.showNavLinks === void 0 && $$bindings.showNavLinks && showNavLinks !== void 0) $$bindings.showNavLinks(showNavLinks);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (open && menu) {
        menu.focus();
      }
    }
    $$rendered = `<div${add_attribute(
      "class",
      `lg:hidden flex justify-between items-center mx-2 mt-2 pb-4 relative 
    before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-primary before:left-0 before:right-0 before:top-full before:rounded-full before:z-[100]
`,
      0
    )}> <a class="pl-2"${add_attribute("href", logoHref, 0)}><img${add_attribute("src", whiteNav ? logoDark : logo, 0)} alt="Klasek Painting" class="w-[125px] h-[48px]"></a>  ${showNavLinks ? `<div class="size-fit relative -right-2">${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: ctaHref,
        variant: "outline",
        class: "text-sm !p-2"
      },
      {},
      {
        default: () => {
          return `Get Free Estimate`;
        }
      }
    )}`}</div>  ${open ? `<div class="lg:hidden absolute h-[calc(100vh-100%)] w-[100vw] bg-secondary-dark left-0 top-full pt-2 flex flex-col justify-between overflow-y-scroll overflow-x-hidden">${showNavLinks ? `<ul class="[&amp;>*>*]:xs:px-12 [&amp;>*>*]:px-8 space-y-1"${add_attribute("this", menu, 0)}>${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(NavLinks, "NavLinks").$$render($$result, {}, {}, {})}`}</ul>` : ``} <div class="py-4 bg-secondary-dark grid place-items-center">${validate_component(Button, "Button").$$render($$result, { href: ctaHref }, {}, {
      default: () => {
        return `Get Free Estimate`;
      }
    })}</div></div>` : `<ul class="hidden"${add_attribute("this", menu, 0)}>${validate_component(NavLinks, "NavLinks").$$render($$result, {}, {}, {})}</ul>`}`;
  } while (!$$settled);
  return $$rendered;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lightNav = false } = $$props;
  if ($$props.lightNav === void 0 && $$bindings.lightNav && lightNav !== void 0) $$bindings.lightNav(lightNav);
  return `<nav${add_attribute("class", `${lightNav ? "lg:bg-off-white" : ""} bg-secondary-dark sticky top-0 z-[100] h-fit w-full max-w-[100vw] lg:px-6`, 0)}> <div${add_attribute("class", `${lightNav ? "lg:bg-secondary-dark" : ""} bg-white lg:px-8 xs:px-6 px-4 lg:py-2 py-1 w-fit mx-auto grid place-items-center rounded-b-xl`, 0)}><p${add_attribute("class", `${lightNav ? "lg:text-white" : ""} text-secondary-dark lg:text-base text-xs text-center font-semibold`, 0)}>Stucco Repair Crews Available Now!</p></div> ${validate_component(DesktopNavMenu, "DesktopNavMenu").$$render($$result, { lightNav }, {}, {})} ${validate_component(MobileNavMenu, "MobileNavMenu").$$render($$result, {}, {}, {})}</nav>`;
});
export {
  NavBar as N,
  logo$1 as l
};
