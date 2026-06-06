import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape, h as add_styles, i as merge_ssr_styles, g as subscribe, n as null_to_empty } from "../../chunks/ssr.js";
import { G as GoogleProof } from "../../chunks/GoogleProof.js";
import { B as Button } from "../../chunks/button.js";
import { r as routes } from "../../chunks/routes.js";
import { V as ViewOurWorkSection } from "../../chunks/ViewOurWorkSection.js";
import { W as WhyChooseUsSection, S as ServiceAreaSection } from "../../chunks/ServiceAreaSection.js";
import { T as TestimonialsSection } from "../../chunks/TestimonialsSection.js";
import { R as RibbonWrapper } from "../../chunks/RibbonWrapper.js";
import { v as valspar, b as behr, l as leadSafe, a as benjaminMoore, p as pdca, s as sherwinWilliams } from "../../chunks/lead-safe.js";
import { i as isMobileStore } from "../../chunks/isMobileStore.js";
import { N as NavBar } from "../../chunks/NavBar.js";
import { C as CtaBannerSection } from "../../chunks/CtaBannerSection.js";
import { F as Footer } from "../../chunks/Footer.js";
import { c as cn } from "../../chunks/utils2.js";
import { C as ColumnTemplateSection } from "../../chunks/ColumnTemplateSection.js";
const src = "/_app/immutable/assets/klasek-painting-professional-exterior-painters.DJK4DWtY.webp";
const HomepageHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const listitems = [
    "Expert Craftsmanship - Every Time",
    "100% Satisfaction Guarantee",
    "Free Consultation from Design Pros",
    "Siding, Brick, & Stucco Experts"
  ];
  return `<section class="p-x p-y hero-gradient"><div class="container grid lg:grid-cols-2 lg:gap-12 gap-6"> <div class="hidden lg:flex flex-col gap-2"><div${add_attribute("style", `background-image: url(${src})`, 0)} class="size-full lg:rounded-lg rounded-b-lg bg-center bg-cover"></div> ${validate_component(GoogleProof, "GoogleProof").$$render($$result, {}, {}, {})}</div>  <div class="flex flex-col lg:gap-6 gap-4 text-white"><h1 class="order-1 xl:text-5xl md:text-4xl xs:text-3xl text-2xl font-semibold" data-testid="page-heading" data-svelte-h="svelte-ww5fto">Premium Exterior House Painting &amp; Design Services</h1> <p class="order-2 lg:font-semibold" data-svelte-h="svelte-im9ma6">Klasek Painting has over 30 years of experience delivering beautiful, long-lasting results
				to homeowners in Chicago. Our mission is to be the area&#39;s most trusted exterior repair and
				exterior painting contractor, so we are committed to providing first class service at a fair
				price.</p> <ul class="lg:order-3 order-4 lg:text-lg lg:font-semibold flex flex-col gap-1">${each(listitems, (item) => {
    return `<li class="disc lg:[--top:12px] [--top:10px]">${escape(item)}</li>`;
  })}</ul> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "lg:order-4 order-3 w-fit",
      href: routes["contact"].href
    },
    {},
    {
      default: () => {
        return `${escape(routes["contact"].text)}`;
      }
    }
  )}</div></div></section>`;
});
const css$1 = {
  code: '.marquee-container.svelte-11dmb27.svelte-11dmb27{display:flex;width:100%;overflow-x:hidden;flex-direction:row;position:relative}.marquee-container.svelte-11dmb27:hover .marquee.svelte-11dmb27{animation-play-state:var(--pause-on-hover)}.marquee-container.svelte-11dmb27:active .marquee.svelte-11dmb27{animation-play-state:var(--pause-on-click)}.marquee.svelte-11dmb27.svelte-11dmb27{flex:0 0 auto;min-width:100%;z-index:1;display:flex;flex-direction:row;align-items:center;gap:var(--gap, 0);animation:svelte-11dmb27-scroll var(--duration) linear infinite;animation-play-state:var(--play);animation-direction:var(--direction);padding-right:var(--gap, 0)}@keyframes svelte-11dmb27-scroll{0%{transform:translateX(0%)}100%{transform:translateX(-100%)}}.initial-child-container.svelte-11dmb27.svelte-11dmb27{flex:0 0 auto;display:flex;min-width:auto;flex-direction:row}.gradient.svelte-11dmb27.svelte-11dmb27::after,.gradient.svelte-11dmb27.svelte-11dmb27::before{background:linear-gradient(\n			to right,\n			var(--gradientColor, white),\n			transparent\n		);content:"";height:100%;position:absolute;width:var(--gradientWidth, 10%);z-index:2}.gradient.svelte-11dmb27.svelte-11dmb27::before{left:0;top:0}.gradient.svelte-11dmb27.svelte-11dmb27::after{right:0;top:0;transform:rotateZ(180deg)}',
  map: '{"version":3,"file":"Marquee.svelte","sources":["Marquee.svelte"],"sourcesContent":["<script>\\n\\t/**\\n\\t * Custom style\\n\\t * @type {string}\\n\\t */\\n\\texport let style = \\"\\";\\n\\n\\t/**\\n\\t * Pause on hover\\n\\t * @type {boolean}\\n\\t */\\n\\texport let pauseOnHover = false;\\n\\t/**\\n\\t * Pause on click\\n\\t * @type {boolean}\\n\\t */\\n\\texport let pauseOnClick = false;\\n\\t/**\\n\\t * Animation direction\\n\\t * @type {\\"left\\" | \\"right\\"}\\n\\t */\\n\\texport let direction = \\"left\\";\\n\\n\\t/**\\n\\t * Animation speed calculated as pixels/second\\n\\t * @type {number}\\n\\t */\\n\\texport let speed = 100;\\n\\n\\t/**\\n\\t * Animation state\\n\\t * @type {boolean}\\n\\t */\\n\\texport let play = true;\\n\\n\\t/**\\n\\t * Show lateral gradient\\n\\t * @type {boolean}\\n\\t */\\n\\texport let gradient = false;\\n\\n\\tlet className = \\"\\";\\n\\t/**\\n\\t * Custom class\\n\\t * @type {string}\\n\\t */\\n\\texport { className as class };\\n\\n\\t/**\\n\\t * Gap between elements\\n\\t * @type {string}\\n\\t */\\n\\texport let gap = \\"0px\\";\\n\\n\\tlet containerWidth;\\n\\tlet marqueeWidth;\\n\\n\\t$: duration =\\n\\t\\tmarqueeWidth < containerWidth\\n\\t\\t\\t? containerWidth / speed\\n\\t\\t\\t: marqueeWidth / speed;\\n<\/script>\\n\\n<div\\n\\tstyle={style}\\n\\tclass=\\"marquee-container {className}\\"\\n\\tbind:clientWidth={containerWidth}\\n\\tstyle:--gap={gap}\\n\\tstyle:--play={play}\\n\\tstyle:--direction={direction === \\"left\\" ? \\"normal\\" : \\"reverse\\"}\\n\\tstyle:--duration={duration + \\"s\\"}\\n\\tstyle:--pause-on-hover={pauseOnHover ? \\"paused\\" : \\"running\\"}\\n\\tstyle:--pause-on-click={pauseOnClick ? \\"paused\\" : \\"running\\"}\\n>\\n\\t{#if gradient}\\n\\t\\t<div class=\\"gradient\\" data-testid=\\"marquee-gradient\\" />\\n\\t{/if}\\n\\t<div class=\\"marquee\\" bind:clientWidth={marqueeWidth} data-testid=\\"marquee-slot\\">\\n\\t\\t<slot />\\n\\t</div>\\n\\t<div class=\\"marquee\\" data-testid=\\"marquee-slot\\">\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.marquee-container {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 100%;\\n\\t\\toverflow-x: hidden;\\n\\t\\tflex-direction: row;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.marquee-container:hover .marquee {\\n\\t\\tanimation-play-state: var(--pause-on-hover);\\n\\t}\\n\\n\\t.marquee-container:active .marquee {\\n\\t\\tanimation-play-state: var(--pause-on-click);\\n\\t}\\n\\n\\t.marquee {\\n\\t\\tflex: 0 0 auto;\\n\\t\\tmin-width: 100%;\\n\\t\\tz-index: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\talign-items: center;\\n\\t\\tgap: var(--gap, 0);\\n\\t\\tanimation: scroll var(--duration) linear infinite;\\n\\t\\tanimation-play-state: var(--play);\\n\\t\\tanimation-direction: var(--direction);\\n\\t\\tpadding-right: var(--gap, 0);\\n\\t}\\n\\n\\t@keyframes scroll {\\n\\t\\t0% {\\n\\t\\t\\ttransform: translateX(0%);\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\ttransform: translateX(-100%);\\n\\t\\t}\\n\\t}\\n\\n\\t.initial-child-container {\\n\\t\\tflex: 0 0 auto;\\n\\t\\tdisplay: flex;\\n\\t\\tmin-width: auto;\\n\\t\\tflex-direction: row;\\n\\t}\\n\\n\\t.gradient::after,\\n\\t.gradient::before {\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto right,\\n\\t\\t\\tvar(--gradientColor, white),\\n\\t\\t\\ttransparent\\n\\t\\t);\\n\\t\\tcontent: \\"\\";\\n\\t\\theight: 100%;\\n\\t\\tposition: absolute;\\n\\t\\twidth: var(--gradientWidth, 10%);\\n\\t\\tz-index: 2;\\n\\t}\\n\\n\\t.gradient::before {\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t}\\n\\n\\t.gradient::after {\\n\\t\\tright: 0;\\n\\t\\ttop: 0;\\n\\t\\ttransform: rotateZ(180deg);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsFC,gDAAmB,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,QAAQ,CAAE,QACX,CAEA,iCAAkB,MAAM,CAAC,uBAAS,CACjC,oBAAoB,CAAE,IAAI,gBAAgB,CAC3C,CAEA,iCAAkB,OAAO,CAAC,uBAAS,CAClC,oBAAoB,CAAE,IAAI,gBAAgB,CAC3C,CAEA,sCAAS,CACR,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,KAAK,CAAC,EAAE,CAAC,CAClB,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,QAAQ,CACjD,oBAAoB,CAAE,IAAI,MAAM,CAAC,CACjC,mBAAmB,CAAE,IAAI,WAAW,CAAC,CACrC,aAAa,CAAE,IAAI,KAAK,CAAC,EAAE,CAC5B,CAEA,WAAW,qBAAO,CACjB,EAAG,CACF,SAAS,CAAE,WAAW,EAAE,CACzB,CACA,IAAK,CACJ,SAAS,CAAE,WAAW,KAAK,CAC5B,CACD,CAEA,sDAAyB,CACxB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GACjB,CAEA,uCAAS,OAAO,CAChB,uCAAS,QAAS,CACjB,UAAU,CAAE;AACd,GAAG,EAAE,CAAC,KAAK;AACX,GAAG,IAAI,eAAe,CAAC,MAAM,CAAC;AAC9B,GAAG;AACH,GAAG,CACD,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,eAAe,CAAC,IAAI,CAAC,CAChC,OAAO,CAAE,CACV,CAEA,uCAAS,QAAS,CACjB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CACN,CAEA,uCAAS,OAAQ,CAChB,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,SAAS,CAAE,QAAQ,MAAM,CAC1B"}'
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let duration;
  let { style = "" } = $$props;
  let { pauseOnHover = false } = $$props;
  let { pauseOnClick = false } = $$props;
  let { direction = "left" } = $$props;
  let { speed = 100 } = $$props;
  let { play = true } = $$props;
  let { gradient = false } = $$props;
  let { class: className = "" } = $$props;
  let { gap = "0px" } = $$props;
  let marqueeWidth;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0) $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.pauseOnClick === void 0 && $$bindings.pauseOnClick && pauseOnClick !== void 0) $$bindings.pauseOnClick(pauseOnClick);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0) $$bindings.speed(speed);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0) $$bindings.play(play);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0) $$bindings.gradient(gradient);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  $$result.css.add(css$1);
  duration = marqueeWidth / speed;
  return `<div${add_styles(merge_ssr_styles(escape(style, true), {
    "--gap": gap,
    "--play": play,
    "--direction": direction === "left" ? "normal" : "reverse",
    "--duration": duration + "s",
    "--pause-on-hover": pauseOnHover ? "paused" : "running",
    "--pause-on-click": pauseOnClick ? "paused" : "running"
  }))} class="${"marquee-container " + escape(className, true) + " svelte-11dmb27"}">${gradient ? `<div class="gradient svelte-11dmb27" data-testid="marquee-gradient"></div>` : ``} <div class="marquee svelte-11dmb27" data-testid="marquee-slot">${slots.default ? slots.default({}) : ``}</div> <div class="marquee svelte-11dmb27" data-testid="marquee-slot">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const TrustedBrandsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => value);
  const images = [
    { src: valspar, alt: "Valspar" },
    { src: behr, alt: "Behr" },
    { src: leadSafe, alt: "Lead Safe" },
    {
      src: benjaminMoore,
      alt: "Benjamin Moore"
    },
    { src: pdca, alt: "PDCA" },
    {
      src: sherwinWilliams,
      alt: "Sherwin Williams"
    }
  ];
  $$unsubscribe_isMobileStore();
  return `<section class="md:pb-0 p-b md:px-12 bg-white"><div class="container max-w-screen-lg relative md:-top-12 flex flex-col items-center gap-2">${validate_component(RibbonWrapper, "RibbonWrapper").$$render(
    $$result,
    {
      class: "z-10 md:!w-fit !w-full after:md:block before:md:block"
    },
    {},
    {
      default: () => {
        return `<h2 class="text-center lg:text-3xl text-2xl text-white font-semibold bg-primary-dark px-6 py-2 md:rounded-lg md:mx-2 relative md:-top-2 z-10" data-svelte-h="svelte-204thq">Our Trusted Brand Partners</h2>`;
      }
    }
  )} <div class="relative w-full bg-white md:shadow-subtle md:rounded-lg lg:p-8 md:py-8 py-2 z-0 shadow-md">${validate_component(Marquee, "Marquee").$$render(
    $$result,
    {
      speed: 0,
      gap: "0px",
      class: "flex [&>.marquee]:justify-around"
    },
    {},
    {
      default: () => {
        return `${each(images, ({ src: src2, alt }) => {
          return `${typeof src2 === "string" ? `<img class="h-[100px] w-auto"${add_attribute("src", src2.img.src, 0)}${add_attribute("alt", alt, 0)} loading="lazy"${add_attribute("width", src2.img.w, 0)}${add_attribute("height", src2.img.h, 0)}>` : `<picture>${each(Object.entries(src2.sources), ([format, srcset]) => {
            return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
          })} <img class="h-[100px] w-auto"${add_attribute("src", src2.img.src, 0)}${add_attribute("alt", alt, 0)} loading="lazy"${add_attribute("width", src2.img.w, 0)}${add_attribute("height", src2.img.h, 0)}> </picture>`}`;
        })}`;
      }
    }
  )}</div></div></section>`;
});
const stuccoImg = "/_app/immutable/assets/stucco-feature.DjbCYtpG.avif";
const css = {
  code: ".main-container.svelte-ga4be8>div{position:relative;z-index:10;display:flex;flex-direction:column;justify-content:center;gap:1rem\n}.main-container.svelte-ga4be8 h2{text-align:left;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\n}@media(min-width: 375px){.main-container.svelte-ga4be8 h2{font-size:1.5rem;line-height:2rem\n    }}@media(min-width: 640px){.main-container.svelte-ga4be8 h2{font-size:1.875rem;line-height:2.25rem\n    }}@media(min-width: 1024px){.main-container.svelte-ga4be8 h2{font-size:2.25rem;line-height:2.5rem\n    }}.main-container.svelte-ga4be8 h3{font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\n}@media(min-width: 375px){.main-container.svelte-ga4be8 h3{font-size:1.25rem;line-height:1.75rem\n    }}@media(min-width: 1024px){.main-container.svelte-ga4be8 h3{font-size:1.5rem;line-height:2rem\n    }}.main-container.svelte-ga4be8 hr{width:4rem;border-width:1px;--tw-border-opacity:1;border-color:hsl(var(--primary) / var(--tw-border-opacity, 1))\n}.main-container.svelte-ga4be8 p{line-height:2\n}.main-container.svelte-ga4be8 a{font-weight:600;--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1));text-decoration-line:underline;text-underline-offset:2px;transition-duration:100ms\n}.main-container.svelte-ga4be8 a:hover{--tw-text-opacity:1;color:hsl(var(--primary-dark) / var(--tw-text-opacity, 1))\n}.main-container.svelte-ga4be8 strong{--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\n}.main-container.svelte-ga4be8 strong > a{font-weight:700\n}.main-container.svelte-ga4be8 > div > strong{font-size:1.25rem;line-height:1.75rem\n}.main-container.svelte-ga4be8 small{--tw-text-opacity:1;color:rgb(66 67 67 / var(--tw-text-opacity, 1))\n}.main-container.svelte-ga4be8 ul{display:flex;flex-direction:column;gap:1rem;padding-left:1rem;line-height:2\n}@media(min-width: 640px){.main-container.svelte-ga4be8 ul{padding-left:1.5rem\n    }}.main-container.svelte-ga4be8 ol{display:flex;list-style-type:decimal;flex-direction:column;gap:1rem;padding-left:1rem;line-height:2\n}@media(min-width: 640px){.main-container.svelte-ga4be8 ol{padding-left:1.5rem\n    }}.main-container.svelte-ga4be8 ol li::marker{font-weight:600;--tw-text-opacity:1;color:hsl(var(--primary-dark) / var(--tw-text-opacity, 1))\n}.main-container.svelte-ga4be8 ul > li{position:relative\n}.main-container.svelte-ga4be8 ul > li::before{position:absolute;top:14px;left:-1.25rem;height:0.25rem;width:0.75rem;--tw-bg-opacity:1;background-color:hsl(var(--primary-dark) / var(--tw-bg-opacity, 1));--tw-content:'';content:var(--tw-content)\n}.main-container.svelte-ga4be8 li > strong{--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\n}",
  map: `{"version":3,"file":"StuccoSection.svelte","sources":["StuccoSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { cn } from \\"../utils\\";\\nimport stuccoImg from \\"$images/galleries/stucco-repair/stucco-feature.avif\\";\\nimport Button from \\"$components/button/button.svelte\\";\\nlet classes = \\"\\";\\nexport { classes as class };\\n<\/script>\\n\\n<section class={cn(\\"bg-white p-y p-x relative bg-gradient\\", classes)}>\\n  <style>\\n    .bg-gradient {\\n      background-color: (rgb(40, 40, 77), rgb(45, 45, 113));\\n    }\\n  </style>\\n  <div class=\\"container z-10 py-10\\">\\n    <div class=\\"flex flex-col lg:flex-row gap-8 lg:gap-16 items-center\\">\\n      <div class=\\"md:w-2/4\\">\\n        <h2 class=\\"text-4xl font-semibold mb-2 text-white mb-5\\">\\n          Refresh and Protect Your Home with Expert Stucco Painting.\\n        </h2>\\n        <p class=\\"text-lg text-gray-100 mb-5\\">\\n          Get a Free Estimate and Discover How Our Detailed Process Ensures a\\n          Beautiful and Durable Finish for Your Spanish, Mediterranean, or\\n          Southwestern-Style Home.\\n        </p>\\n        <Button href=\\"/contact\\" class=\\"btn btn-primary mt-2\\"\\n          >Get Free Estimate</Button\\n        >\\n      </div>\\n      <div class=\\"md:w-2/4\\">\\n        <img src={stuccoImg} alt=\\"stucco-repair\\" class=\\"rounded-lg w-full\\" />\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>/* Column container */\\n.main-container > :global(div) {\\n    position: relative;\\n    z-index: 10;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    gap: 1rem\\n}\\n/* h2 */\\n.main-container :global(h2) {\\n    text-align: left;\\n    font-size: 1.25rem;\\n    line-height: 1.75rem;\\n    font-weight: 600;\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\\n}\\n@media (min-width: 375px) {\\n    .main-container :global(h2) {\\n        font-size: 1.5rem;\\n        line-height: 2rem\\n    }\\n}\\n@media (min-width: 640px) {\\n    .main-container :global(h2) {\\n        font-size: 1.875rem;\\n        line-height: 2.25rem\\n    }\\n}\\n@media (min-width: 1024px) {\\n    .main-container :global(h2) {\\n        font-size: 2.25rem;\\n        line-height: 2.5rem\\n    }\\n}\\n/* h3 */\\n.main-container :global(h3) {\\n    font-size: 1.125rem;\\n    line-height: 1.75rem;\\n    font-weight: 600;\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\\n}\\n@media (min-width: 375px) {\\n    .main-container :global(h3) {\\n        font-size: 1.25rem;\\n        line-height: 1.75rem\\n    }\\n}\\n@media (min-width: 1024px) {\\n    .main-container :global(h3) {\\n        font-size: 1.5rem;\\n        line-height: 2rem\\n    }\\n}\\n/* hr */\\n.main-container :global(hr) {\\n    width: 4rem;\\n    border-width: 1px;\\n    --tw-border-opacity: 1;\\n    border-color: hsl(var(--primary) / var(--tw-border-opacity, 1))\\n}\\n/* h2 > span */\\n/* .main-container :global(h2 > span) {\\n    @apply ;\\n} */\\n/* h3 > span */\\n/* .main-container :global(h3 > span) {\\n    @apply ;\\n} */\\n/* p */\\n.main-container :global(p) {\\n    line-height: 2\\n}\\n/* a */\\n.main-container :global(a) {\\n    font-weight: 600;\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1));\\n    text-decoration-line: underline;\\n    text-underline-offset: 2px;\\n    transition-duration: 100ms\\n}\\n.main-container :global(a):hover {\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--primary-dark) / var(--tw-text-opacity, 1))\\n}\\n/* strong */\\n.main-container :global(strong) {\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\\n}\\n/* strong > a */\\n.main-container :global(strong > a) {\\n    font-weight: 700\\n}\\n/* > div > strong */\\n.main-container :global(> div > strong) {\\n    font-size: 1.25rem;\\n    line-height: 1.75rem\\n}\\n/* small */\\n.main-container :global(small) {\\n    --tw-text-opacity: 1;\\n    color: rgb(66 67 67 / var(--tw-text-opacity, 1))\\n}\\n/* ul */\\n.main-container :global(ul) {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    padding-left: 1rem;\\n    line-height: 2\\n}\\n@media (min-width: 640px) {\\n    .main-container :global(ul) {\\n        padding-left: 1.5rem\\n    }\\n}\\n/* ol */\\n.main-container :global(ol) {\\n    display: flex;\\n    list-style-type: decimal;\\n    flex-direction: column;\\n    gap: 1rem;\\n    padding-left: 1rem;\\n    line-height: 2\\n}\\n@media (min-width: 640px) {\\n    .main-container :global(ol) {\\n        padding-left: 1.5rem\\n    }\\n}\\n/* ol marker */\\n.main-container :global(ol li)::marker {\\n    font-weight: 600;\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--primary-dark) / var(--tw-text-opacity, 1))\\n}\\n/* ol > li */\\n.main-container :global(ul > li) {\\n    position: relative\\n}\\n.main-container :global(ul > li)::before {\\n    position: absolute;\\n    top: 14px;\\n    left: -1.25rem;\\n    height: 0.25rem;\\n    width: 0.75rem;\\n    --tw-bg-opacity: 1;\\n    background-color: hsl(var(--primary-dark) / var(--tw-bg-opacity, 1));\\n    --tw-content: '';\\n    content: var(--tw-content)\\n}\\n/* li > strong */\\n.main-container :global(li > strong) {\\n    --tw-text-opacity: 1;\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\\n}\\n/* ol > li > span */\\n/* .main-container :global(ol > li > span) {\\n    @apply ;\\n} */\\n/* ul > li */\\n/* .main-container :global(ul > li) {\\n    @apply ;\\n} */\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const StuccoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$result.css.add(css);
  return `<section class="${escape(null_to_empty(cn("bg-white p-y p-x relative bg-gradient", classes)), true) + " svelte-ga4be8"}"><style data-svelte-h="svelte-n4m2gh">.bg-gradient {
      background-color: (rgb(40, 40, 77), rgb(45, 45, 113));
    }</style> <div class="container z-10 py-10"><div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"><div class="md:w-2/4"><h2 class="text-4xl font-semibold mb-2 text-white mb-5" data-svelte-h="svelte-1keqtam">Refresh and Protect Your Home with Expert Stucco Painting.</h2> <p class="text-lg text-gray-100 mb-5" data-svelte-h="svelte-1lcrplc">Get a Free Estimate and Discover How Our Detailed Process Ensures a
          Beautiful and Durable Finish for Your Spanish, Mediterranean, or
          Southwestern-Style Home.</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/contact",
      class: "btn btn-primary mt-2"
    },
    {},
    {
      default: () => {
        return `Get Free Estimate`;
      }
    }
  )}</div> <div class="md:w-2/4" data-svelte-h="svelte-1y8rcga"><img${add_attribute("src", stuccoImg, 0)} alt="stucco-repair" class="rounded-lg w-full"></div></div></div> </section>`;
});
const ReliableServiceSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  return `${validate_component(ColumnTemplateSection, "ColumnTemplateSection").$$render($$result, { class: classes }, {}, {
    "right-column": () => {
      return `<div slot="right-column" data-svelte-h="svelte-1r3eodb"><strong>What you can expect:</strong> <ul><li>Timely project completion</li> <li>Clear and consistent communication</li> <li>Minimal disruption to your daily routine</li> <li>Attention to every detail</li> <li>A clean, professional worksite</li></ul></div>`;
    },
    "left-column": () => {
      return `<div slot="left-column" data-svelte-h="svelte-vs2d2s"><h2>Reliable Service You Can Trust</h2> <p>At Klasek Painting, reliability is at the core of our service. We understand the importance of
			completing projects on time and within budget, with minimal disruption to your daily life. Our
			team of professional painters is committed to delivering consistent, high-quality results,
			ensuring that your exterior painting project is handled with the utmost care and precision.
			From start to finish, we work closely with you to make sure the process is seamless and the
			outcome exceeds your expectations.</p></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${validate_component(HomepageHero, "HomepageHero").$$render($$result, {}, {}, {})} ${validate_component(WhyChooseUsSection, "WhyChooseUsSection").$$render($$result, {}, {}, {})} ${validate_component(ReliableServiceSection, "ReliableServiceSection").$$render($$result, { class: "bg-off-white" }, {}, {})} ${validate_component(StuccoSection, "StuccoSection").$$render($$result, {}, {}, {})} ${validate_component(ServiceAreaSection, "ServiceAreaSection").$$render($$result, {}, {}, {})} ${validate_component(CtaBannerSection, "CtaBannerSection").$$render($$result, {}, {}, {})} ${validate_component(ViewOurWorkSection, "ViewOurWorkSection").$$render($$result, { class: "pb-0" }, {}, {})} ${validate_component(TestimonialsSection, "TestimonialsSection").$$render($$result, {}, {}, {})} ${validate_component(TrustedBrandsSection, "TrustedBrandsSection").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
