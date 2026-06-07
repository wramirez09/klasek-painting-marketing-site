import { c as create_ssr_component, g as subscribe, b as escape, a as add_attribute, e as each, v as validate_component } from "./ssr.js";
import { B as Button } from "./button.js";
import { p as page } from "./stores.js";
import { r as routes } from "./routes.js";
import "./index3.js";
import { E as EmailSignup } from "./EmailSignup.js";
import { l as logo } from "./NavBar.js";
import { M as Map } from "./Map.js";
import { C as ClickToCall } from "./ClickToCall.js";
import { P as PhoneIcon } from "./PhoneIcon.js";
import { L as LocationIcon } from "./LocationIcon.js";
import { g as googleMapsHref } from "./siteData.js";
const src = {
  sources: {
    avif: "/_app/immutable/assets/orange-paint-splash.Bs5lhImV.avif 1368w, /_app/immutable/assets/orange-paint-splash.D-yEuqk9.avif 2736w",
    webp: "/_app/immutable/assets/orange-paint-splash.0poxOjC8.webp 1368w, /_app/immutable/assets/orange-paint-splash.BxBFNege.webp 2736w",
    png: "/_app/immutable/assets/orange-paint-splash.Bcgie3MD.png 1368w, /_app/immutable/assets/orange-paint-splash.SNWOUdYZ.png 2736w"
  },
  img: {
    src: "/_app/immutable/assets/orange-paint-splash.SNWOUdYZ.png",
    w: 2736,
    h: 881
  }
};
const FooterCta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bg;
  let hidden;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const secondaryBackgroundRoutes = [routes["service-area"].href, routes["gallery"].href];
  const hiddenRoutes = [routes["contact"].href];
  bg = secondaryBackgroundRoutes.includes($page.url.pathname) ? "bg-secondary" : "bg-gradient-to-b from-white from-[85%] to-secondary to-[85%]";
  hidden = hiddenRoutes.includes($page.url.pathname);
  $$unsubscribe_page();
  return `<div class="${[escape(`relative w-full ${bg}`, true), hidden ? "hidden" : ""].join(" ").trim()}"> ${`<div class="w-full h-12 lg:hidden relative -bottom-1"></div>`}  ${typeof src === "string" ? `<img class="hidden lg:block max-w-screen-lg absolute h-full w-auto top-0 left-1/2 -translate-x-1/2 z-0"${add_attribute("src", src.img.src, 0)} alt="" aria-hidden="true" loading="lazy"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}>` : `<picture>${each(Object.entries(src.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img class="hidden lg:block max-w-screen-lg absolute h-full w-auto top-0 left-1/2 -translate-x-1/2 z-0"${add_attribute("src", src.img.src, 0)} alt="" aria-hidden="true" loading="lazy"${add_attribute("width", src.img.w, 0)}${add_attribute("height", src.img.h, 0)}></picture>`} <div class="container max-w-screen-lg p-y lg:px-0 xs:px-6 px-4 flex flex-col items-center text-center gap-6 [&amp;>*]:z-10 text-white lg:bg-none bg-gradient-to-b from-primary-dark to-primary"><h2 class="font-bold text-4xl" data-svelte-h="svelte-8btwgx">Schedule An Appointment</h2> <p class="max-w-[600px]" data-svelte-h="svelte-73u4jb">Complete our form or call our customer service team to schedule a visit to your home. We&#39;ll
			walk the property, discuss options, then deliver a free, written estimate for you to evaluate.</p> ${validate_component(Button, "Button").$$render($$result, { variant: "white", href: "/contact-us" }, {}, {
    default: () => {
      return `Get Free Estimate`;
    }
  })}</div>  ${`<div class="w-full h-12 lg:hidden relative -top-1"></div>`}</div>`;
});
const FooterLinksColumn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<div class="w-fit mx-auto text-white"><span class="block font-semibold lg:text-xl text-lg mb-4">${escape(title)}</span> <ul class="flex flex-col gap-2 [&amp;_a]:underline [&amp;_a]:underline-offset-4">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const googleBusiness = "data:image/svg+xml,%3csvg%20viewBox='-3%200%20262%20262'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M255.878%20133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45%2012.04-9.283%2030.172-26.69%2042.356l-.244%201.622%2038.755%2030.023%202.685.268c24.659-22.774%2038.875-56.282%2038.875-96.027'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M130.55%20261.1c35.248%200%2064.839-11.605%2086.453-31.622l-41.196-31.913c-11.024%207.688-25.82%2013.055-45.257%2013.055-34.523%200-63.824-22.773-74.269-54.25l-1.531.13-40.298%2031.187-.527%201.465C35.393%20231.798%2079.49%20261.1%20130.55%20261.1'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M56.281%20156.37c-2.756-8.123-4.351-16.827-4.351-25.82%200-8.994%201.595-17.697%204.206-25.82l-.073-1.73L15.26%2071.312l-1.335.635C5.077%2089.644%200%20109.517%200%20130.55s5.077%2040.905%2013.925%2058.602l42.356-32.782'%20fill='%23ffffff'%3e%3c/path%3e%3cpath%20d='M130.55%2050.479c24.514%200%2041.05%2010.589%2050.479%2019.438l36.844-35.974C195.245%2012.91%20165.798%200%20130.55%200%2079.49%200%2035.393%2029.301%2013.925%2071.947l42.211%2032.783c10.59-31.477%2039.891-54.251%2074.414-54.251'%20fill='%23ffffff'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const yelp = "data:image/svg+xml,%3csvg%20viewBox='-6%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eYelp-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-306.000000,%20-760.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M306.916951,783.108522%20C306.149772,784.358008%20305.82659,788.292467%20306.090874,790.903939%20C306.184506,791.76643%20306.338546,792.484922%20306.560545,792.913918%20C306.867115,793.506411%20307.383601,793.860408%20307.972577,793.879907%20C308.350126,793.900907%20308.584206,793.834908%20315.676081,791.517432%20C315.676081,791.517432%20318.827857,790.497443%20318.841449,790.489943%20C319.62675,790.288945%20320.155318,789.553953%20320.208175,788.614963%20C320.258012,787.654973%20319.768709,786.804482%20318.963775,786.498486%20C318.963775,786.498486%20316.743788,785.577496%20316.737748,785.577496%20C309.117305,782.384029%20308.776001,782.258031%20308.390901,782.253531%20C307.803435,782.231031%20307.277888,782.531028%20306.916951,783.108522%20Z%20M323.965238,806.903819%20C324.089074,806.542323%20324.102665,806.291825%20324.123808,798.721406%20C324.123808,798.721406%20324.141931,795.377941%20324.143441,795.341942%20C324.193277,794.52445%20323.67377,793.778958%20322.81598,793.441462%20C321.935536,793.097966%20320.988644,793.310963%20320.457055,793.985956%20C320.457055,793.985956%20318.903065,795.860936%20318.897024,795.860936%20C313.555465,802.231369%20313.336487,802.525365%20313.2051,802.903361%20C313.12657,803.128359%20313.093346,803.362357%20313.122039,803.597854%20C313.153753,803.93385%20313.301752,804.269847%20313.552445,804.578844%20C314.789294,806.075828%20320.72738,808.295804%20322.622675,807.967308%20C323.28263,807.844309%20323.759851,807.467813%20323.965238,806.903819%20Z%20M336.006625,804.269547%20C337.796206,803.545055%20341.703079,798.497608%20341.977935,796.555129%20C342.071567,795.880136%20341.86467,795.296642%20341.405571,794.926146%20C341.106553,794.696649%20340.873983,794.60665%20333.788149,792.244175%20C333.788149,792.244175%20330.680168,791.200186%20330.639393,791.180686%20C329.888826,790.885189%20329.028015,791.156686%20328.45112,791.884179%20C327.853083,792.626671%20327.759451,793.60316%20328.238183,794.345652%20L329.490134,796.41413%20C333.699047,803.357557%20334.019208,803.848051%20334.322758,804.088049%20C334.790918,804.463045%20335.385935,804.524544%20336.006625,804.269547%20Z%20M332.347423,786.397837%20C340.401292,784.416358%20340.712392,784.309859%20341.031043,784.098361%20C341.517326,783.766865%20341.761977,783.207371%20341.721202,782.526378%20C341.721202,782.503878%20341.724222,782.482878%20341.721202,782.457379%20C341.514305,780.4504%20338.046898,775.221456%20336.340378,774.373965%20C335.7363,774.078468%20335.129202,774.099467%20334.630837,774.439964%20C334.319737,774.646962%20334.088677,774.957458%20329.777071,780.948395%20C329.777071,780.948395%20327.82741,783.646866%20327.804757,783.672366%20C327.289781,784.305359%20327.28525,785.217349%20327.785124,785.997341%20C328.304631,786.804332%20329.183565,787.197328%20329.988499,786.970831%20C329.988499,786.970831%20329.955274,787.02783%20329.946213,787.03983%20C330.343394,786.885332%20331.054696,786.709833%20332.347423,786.397837%20Z%20M324.258669,779.640709%20C324.121241,776.399243%20323.162267,761.957396%20323.049003,761.286904%20C322.882881,760.68241%20322.419251,760.248915%20321.747215,760.076416%20C319.69335,759.557422%20311.835806,761.796898%20310.378468,763.323882%20C309.911818,763.818877%20309.736636,764.43087%20309.877084,764.969364%20C310.105123,765.449359%20319.844369,781.013194%20319.844369,781.013194%20C321.285095,783.384669%20322.458516,783.017173%20322.842106,782.895674%20C323.224185,782.774175%20324.391566,782.406679%20324.258669,779.640709%20Z'%20id='Yelp'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const FooterSocialLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialLinks = [
    {
      href: "https://goo.gl/maps/PwcWAZd8Bdr5Ded5A",
      src: googleBusiness,
      alt: "Google Business"
    },
    {
      href: "https://www.yelp.com/biz/klasek-painting-lyons",
      src: yelp,
      alt: "Yelp"
    }
  ];
  return `<ul class="flex items-center justify-center gap-6">${each(socialLinks, ({ href, src: src2, alt }) => {
    return `<li><a${add_attribute("href", href, 0)} target="_blank"><img class="size-6"${add_attribute("src", src2, 0)}${add_attribute("alt", alt, 0)} loading="lazy"></a> </li>`;
  })}</ul>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const usefulLinks = [routes["contact"], routes["service-area"], routes["privacy"]];
  let { showEmailSignup = true } = $$props;
  if ($$props.showEmailSignup === void 0 && $$bindings.showEmailSignup && showEmailSignup !== void 0) $$bindings.showEmailSignup(showEmailSignup);
  return `<footer class="flex flex-col items-center bg-secondary px-6">${showEmailSignup ? `${validate_component(EmailSignup, "EmailSignup").$$render($$result, {}, {}, {})}` : ``} ${validate_component(FooterCta, "FooterCta").$$render($$result, {}, {}, {})} <div class="w-full py-8 p-x grid lg:grid-cols-4 grid-cols-2 lg:gap-x-12 gap-y-8 xs:gap-x-4"> <div class="flex flex-col gap-6 lg:col-span-1 col-span-2 max-w-[200px] mx-auto"><a href="/">${typeof logo === "string" ? `<img${add_attribute("src", logo.img.src, 0)} alt="Klasek Painting" class="w-full h-auto" loading="lazy"${add_attribute("width", logo.img.w, 0)}${add_attribute("height", logo.img.h, 0)}>` : `<picture>${each(Object.entries(logo.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img${add_attribute("src", logo.img.src, 0)} alt="Klasek Painting" class="w-full h-auto" loading="lazy"${add_attribute("width", logo.img.w, 0)}${add_attribute("height", logo.img.h, 0)}></picture>`}</a> ${validate_component(FooterSocialLinks, "FooterSocialLinks").$$render($$result, {}, {}, {})}</div> <div class="lg:grid grid-cols-1 grid-rows-[150px_auto] gap-2 lg:col-span-1 w-full">${validate_component(Map, "Map").$$render(
    $$result,
    {
      lazy: true,
      class: "w-full h-[200px] mb-2"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://www.google.com/maps/dir/?api=1&destination=41.81041,-87.839737",
      target: "_blank",
      variant: "outline"
    },
    {},
    {
      default: () => {
        return `Get Directions`;
      }
    }
  )}</div>  ${validate_component(FooterLinksColumn, "FooterLinksColumn").$$render($$result, { title: "Contact Us" }, {}, {
    default: () => {
      return `<li class="mb-2 relative">${validate_component(PhoneIcon, "PhoneIcon").$$render(
        $$result,
        {
          class: "size-4 absolute top-1/2 -translate-y-1/2 right-[calc(100%+6px)]"
        },
        {},
        {}
      )} ${validate_component(ClickToCall, "ClickToCall").$$render($$result, { variant: "link" }, {}, {})}</li> <li class="relative">${validate_component(LocationIcon, "LocationIcon").$$render(
        $$result,
        {
          class: "size-5 absolute top-1 right-[calc(100%+6px)]"
        },
        {},
        {}
      )} <a class="underline underline-offset-2"${add_attribute("href", googleMapsHref, 0)} target="_blank" data-svelte-h="svelte-10c1iww">4415 S. Custer,<br>Lyons, IL 60534</a></li>`;
    }
  })}  ${validate_component(FooterLinksColumn, "FooterLinksColumn").$$render($$result, { title: "Useful Links" }, {}, {
    default: () => {
      return `${each(usefulLinks, ({ href, text }) => {
        return `<li><a${add_attribute("href", href, 0)}>${escape(text)}</a> </li>`;
      })}`;
    }
  })}</div>  <div class="w-full bg-secondary-dark py-4 grid place-items-center p-x"><p class="text-white italic text-xs text-center [&amp;>span]:whitespace-nowrap"><span>Copyright ${escape((/* @__PURE__ */ new Date()).getFullYear())}.</span> <span data-svelte-h="svelte-1nf4czm">All Rights Reserved.</span></p></div></footer>`;
});
export {
  Footer as F
};
