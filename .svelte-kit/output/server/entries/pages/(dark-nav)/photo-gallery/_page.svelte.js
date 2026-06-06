import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each, n as null_to_empty } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/button.js";
import "../../../../chunks/index3.js";
import { g as galleryRoutes } from "../../../../chunks/routes.js";
import { s as stucco, d as design } from "../../../../chunks/klasek-painting-victorian-homes-1.js";
import { s as src } from "../../../../chunks/klasek-before-after-gallery.js";
import { R as RibbonWrapper } from "../../../../chunks/RibbonWrapper.js";
const GalleryPreviewGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { reverse = false } = $$props;
  let { load = false } = $$props;
  let isInView = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.load === void 0 && $$bindings.load && load !== void 0) $$bindings.load(load);
  return `<li class="md:min-h-[416px] min-h-[300px] md:h-auto w-full md:max-w-none max-w-[400px] mx-auto">${load || isInView ? `<div class="${"w-full md:h-full h-[300px] grid md:grid-rows-[200px_200px] md:gap-4 " + escape(
    reverse ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]",
    true
  )}"> <div${add_attribute("style", `background-image: url(${data.images.small1});`, 0)} class="${[
    "hidden md:block col-span-1 row-span-1 bg-cover bg-center rounded-lg",
    reverse ? "col-start-2" : ""
  ].join(" ").trim()}"></div>  <div${add_attribute("style", `background-image: url(${data.images.small2});`, 0)} class="${[
    "hidden md:block col-span-1 row-span-1 row-start-2 bg-cover bg-center rounded-lg",
    reverse ? "col-start-2" : ""
  ].join(" ").trim()}"></div>  <div${add_attribute("style", `background-image: url(${data.images.large});`, 0)} class="${escape(reverse ? "md:col-start-1" : "md:col-start-2", true) + " col-span-1 row-span-2 row-start-1 rounded-lg bg-cover bg-center md:bg-transparent bg-black/40 bg-blend-multiply lg:p-4 p-2 flex lg:items-start items-end"}"> <div class="size-full lg:bg-secondary/50 bg-secondary/60 flex justify-center md:items-center md:p-0 py-4 rounded-lg md:backdrop-blur-md backdrop-blur-sm lg:h-full h-fit"> <div class="flex flex-col gap-6 md:w-3/4 w-4/5"><h2 class="text-left lg:text-6xl text-3xl font-bold text-white">${escape(data.name)}</h2> <hr class="border-primary border-[2px] w-16"> ${validate_component(Button, "Button").$$render($$result, { class: "w-fit", href: data.href }, {}, {
    default: () => {
      return `View Gallery`;
    }
  })}</div></div></div></div>` : ``}</li>`;
});
const pastSmall1 = "/_app/immutable/assets/klasek-painting-past-project-1.B3aQWokG.webp";
const pastSmall2 = "/_app/immutable/assets/klasek-painting-past-project-2.S1rbwUjO.webp";
const pastLarge = "/_app/immutable/assets/klasek-painting-past-project-3.FBmqlooi.webp";
const brickSmall1 = "/_app/immutable/assets/brick-painting-1.C9DPM4P9.webp";
const brickSmall2 = "/_app/immutable/assets/brick-painting-2.CWZFjfRb.webp";
const brickLarge = "/_app/immutable/assets/brick-painting-3.r4RjWOZu.webp";
const stuccoRepairPaintSmall1 = "/_app/immutable/assets/stucco-siding-paint-and-repair-1.DaHmJazp.webp";
const stuccoRepairPaintSmall2 = "/_app/immutable/assets/stucco-siding-paint-and-repair-2.h7Jt1fqV.webp";
const stuccoRepairPaintLarge = "/_app/immutable/assets/stucco-siding-paint-and-repair-3.BaKNnua8.webp";
const stuccoTrimSmall1 = "/_app/immutable/assets/klasek-painting-stucco-and-trim-1.B7PAO-Vc.webp";
const stuccoTrimSmall2 = "/_app/immutable/assets/klasek-painting-stucco-and-trim-2.CZy-Hf40.webp";
const cedarReplacementSmall1 = "/_app/immutable/assets/klasek-painting-cedar-replacement-1.D38WN5E5.webp";
const cedarReplacementSmall2 = "/_app/immutable/assets/klasek-painting-cedar-replacement-2.CT7N_WYj.webp";
const cedarReplacementLarge = "/_app/immutable/assets/klasek-painting-cedar-replacement-3.BwFDGKg7.webp";
const hardieSmall1 = "/_app/immutable/assets/exterior-hardie-board-1.Da0WVZG5.webp";
const hardieSmall2 = "/_app/immutable/assets/exterior-hardie-board-2.CXTlU_UT.webp";
const hardieLarge = "/_app/immutable/assets/exterior-hardie-board-3.Dup5GjgZ.webp";
const trimSmall1 = "/_app/immutable/assets/klasek-painting-trim-1.CHu77RVt.webp";
const trimSmall2 = "/_app/immutable/assets/klasek-painting-trim-2.Cx0oz2xm.webp";
const trimLarge = "/_app/immutable/assets/klasek-painting-trim-3.B2-zJj3K.webp";
const stuccoCedarSmall1 = "/_app/immutable/assets/stucco-and-cedar-siding-1.DVvxflIO.webp";
const stuccoCedarSmall2 = "/_app/immutable/assets/stucco-and-cedar-siding-2.LThj5jls.webp";
const stuccoCedarLarge = "/_app/immutable/assets/stucco-and-cedar-siding-3.DCQZwpqZ.webp";
const victorianSmall2 = "/_app/immutable/assets/klasek-painting-victorian-homes-2.DgmzAZR-.webp";
const victorianLarge = "/_app/immutable/assets/klasek-painting-victorian-homes-3.BLsmES3F.webp";
const cedarSidingSmall1 = "/_app/immutable/assets/cedar-siding-repair-paint-1.J6uTUhFb.webp";
const cedarSidingSmall2 = "/_app/immutable/assets/cedar-siding-repair-paint-2.C4ILemTx.webp";
const cedarSidingLarge = "/_app/immutable/assets/cedar-siding-repair-paint-3.geoaiHhY.webp";
const whiteCedarSmall1 = "/_app/immutable/assets/klasek-painting-white-cedar-siding-1.CTdYOD0s.webp";
const whiteCedarSmall2 = "/_app/immutable/assets/klasek-painting-white-cedar-siding-2.7HHJI4IV.webp";
const whiteCedarLarge = "/_app/immutable/assets/klasek-painting-white-cedar-siding-3.DwdeWRXK.webp";
const sidingRepairSmall1 = "/_app/immutable/assets/klasek-painting-siding-repair-1.BdAgfWqH.webp";
const sidingRepairSmall2 = "/_app/immutable/assets/klasek-painting-siding-repair-2.CNauTca-.webp";
const sidingRepairLarge = "/_app/immutable/assets/klasek-painting-siding-repair-3.DpTx6Djl.webp";
const sidingStuccoSmall1 = "/_app/immutable/assets/klasek-painting-siding-and-stucco-1.emI2mS_E.webp";
const sidingStuccoSmall2 = "/_app/immutable/assets/klasek-painting-siding-and-stucco-2.BOwdWXY9.webp";
const sidingStuccoLarge = "/_app/immutable/assets/klasek-painting-siding-and-stucco-3.hA_v0Ac5.webp";
const cedarShingleSmall1 = "/_app/immutable/assets/cedar-shingle-and-stucco-repair-1.ByDpeDxp.webp";
const cedarShingleSmall2 = "/_app/immutable/assets/cedar-shingle-and-stucco-repair-2.CoQ5X6u1.webp";
const cedarShingleLarge = "/_app/immutable/assets/cedar-shingle-and-stucco-repair-3.D159i6In.webp";
const stuccoRepairSmall1 = "/_app/immutable/assets/klasek-painting-stucco-repair-1.BtLMMkuZ.webp";
const stuccoRepairSmall2 = "/_app/immutable/assets/klasek-painting-stucco-repair-2.DuOGBtHI.webp";
const stuccoRepairLarge = "/_app/immutable/assets/klasek-painting-stucco-repair-3.BoJThqSU.webp";
const ourWorkGalleryData = [
  {
    name: "Past Projects",
    href: galleryRoutes["past-projects"].href,
    images: {
      small1: pastSmall1,
      small2: pastSmall2,
      large: pastLarge
    }
  },
  {
    name: "Brick Painting",
    href: galleryRoutes["brick-painting"].href,
    images: {
      small1: brickSmall1,
      small2: brickSmall2,
      large: brickLarge
    }
  },
  {
    name: "Stucco Repair & Paint",
    href: galleryRoutes["stucco-repair-paint"].href,
    images: {
      small1: stuccoRepairPaintSmall1,
      small2: stuccoRepairPaintSmall2,
      large: stuccoRepairPaintLarge
    }
  },
  {
    name: "Stucco & Trim",
    href: galleryRoutes["stucco-trim"].href,
    images: {
      small1: stuccoTrimSmall1,
      small2: stuccoTrimSmall2,
      large: stucco
    }
  },
  {
    name: "Cedar Replacement",
    href: galleryRoutes["cedar-replacement"].href,
    images: {
      small1: cedarReplacementSmall1,
      small2: cedarReplacementSmall2,
      large: cedarReplacementLarge
    }
  },
  {
    name: "Exterior Hardie Board",
    href: galleryRoutes["hardie-board"].href,
    images: {
      small1: hardieSmall1,
      small2: hardieSmall2,
      large: hardieLarge
    }
  },
  {
    name: "Trim",
    href: galleryRoutes["trim"].href,
    images: {
      small1: trimSmall1,
      small2: trimSmall2,
      large: trimLarge
    }
  },
  {
    name: "Stucco & Cedar Siding",
    href: galleryRoutes["stucco-cedar-siding"].href,
    images: {
      small1: stuccoCedarSmall1,
      small2: stuccoCedarSmall2,
      large: stuccoCedarLarge
    }
  },
  {
    name: "Victorian Homes",
    href: galleryRoutes["victorian"].href,
    images: {
      small1: design,
      small2: victorianSmall2,
      large: victorianLarge
    }
  },
  {
    name: "Cedar Siding Repair & Paint",
    href: galleryRoutes["cedar-siding"].href,
    images: {
      small1: cedarSidingSmall1,
      small2: cedarSidingSmall2,
      large: cedarSidingLarge
    }
  },
  {
    name: "White Cedar Siding",
    href: galleryRoutes["white-cedar-siding"].href,
    images: {
      small1: whiteCedarSmall1,
      small2: whiteCedarSmall2,
      large: whiteCedarLarge
    }
  },
  {
    name: "Siding Repair",
    href: galleryRoutes["siding-repair"].href,
    images: {
      small1: sidingRepairSmall1,
      small2: sidingRepairSmall2,
      large: sidingRepairLarge
    }
  },
  {
    name: "Siding & Stucco",
    href: galleryRoutes["siding-stucco"].href,
    images: {
      small1: sidingStuccoSmall1,
      small2: sidingStuccoSmall2,
      large: sidingStuccoLarge
    }
  },
  {
    name: "Cedar Shingle & Stucco Repair",
    href: galleryRoutes["cedar-shingle-stucco-repair"].href,
    images: {
      small1: cedarShingleSmall1,
      small2: cedarShingleSmall2,
      large: cedarShingleLarge
    }
  },
  {
    name: "Stucco Repair",
    href: galleryRoutes["stucco-repair"].href,
    images: {
      small1: stuccoRepairSmall1,
      small2: stuccoRepairSmall2,
      large: stuccoRepairLarge
    }
  }
];
const OurWorkGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="!pt-0 p-y p-x bg-secondary"><ul class="container grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-6">${each(ourWorkGalleryData, ({ href, name, images }, i) => {
    return `${validate_component(GalleryPreviewGrid, "GalleryPreviewGrid").$$render(
      $$result,
      {
        load: i === 0,
        reverse: i % 2 !== 0,
        data: { images, name, href }
      },
      {},
      {}
    )}`;
  })}</ul></section>`;
});
const GalleryHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="lg:pt-12 py-6 lg:px-12 xs:px-4 px-2 hero-gradient" data-svelte-h="svelte-1whvmx0"><div class="container grid lg:grid-cols-2 gap-6"> <div${add_attribute("style", `background-image: url(${src});`, 0)} class="lg:size-full rounded-lg bg-cover bg-center border-2 border-primary lg:block hidden"></div>  <div class="flex flex-col gap-4 bg-white lg:py-8 lg:px-12 xs:p-6 p-4 rounded-lg"><span class="lg:text-xl text-lg text-primary-dark font-semibold">PHOTO GALLERY</span> <h1 class="lg:text-5xl xs:text-4xl text-3xl text-secondary lg:font-normal font-semibold" data-testid="page-heading">Ready To Get Started On Your Project?</h1> <p class="leading-loose">Klasek Painting has over 30 years of experience delivering beautiful, long-lasting results
				to homeowners in Chicago. Our mission is to be the area&#39;s most trusted exterior repair and
				exterior painting contractor, so we are committed to providing first class service at a fair
				price.</p></div></div></section>`;
});
const css$1 = {
  code: ".tab.svelte-whd2nj{position:relative\n}.tab.svelte-whd2nj::before{position:absolute;top:100%;height:0.25rem;width:100%;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));opacity:0.2;transition-duration:200ms;--tw-content:'';content:var(--tw-content)\n}.tab.svelte-whd2nj:hover::before{content:var(--tw-content);opacity:0.4\n}",
  map: `{"version":3,"file":"GalleryControls.svelte","sources":["GalleryControls.svelte"],"sourcesContent":["<script lang=\\"ts\\" context=\\"module\\"><\/script>\\n\\n<script lang=\\"ts\\">import Button from \\"$components/button/button.svelte\\";\\nexport let activeTab;\\n<\/script>\\n\\n<section class=\\"py-8 bg-secondary p-x\\">\\n\\t<div\\n\\t\\tclass={\`\\n            container max-w-screen-sm flex md:justify-between justify-center md:gap-0 xs:gap-12 gap-6 items-center xs:text-2xl text-xl font-semibold relative md:w-full w-fit\\n            before:absolute before:content-[''] before:h-1 before:bg-white before:rounded-full before:top-full \\n            \${activeTab === 'our-work' ? 'before:left-0 xs:before:w-[118px] before:w-[98px]' : 'xs:before:left-[calc(100%-170px)] xs:before:w-[170px] before:left-[calc(100%-142px)] before:w-[142px]'}\\n        \`}\\n\\t>\\n\\t\\t<div class=\\"size-fit tab\\">\\n\\t\\t\\t<Button on:click={() => (activeTab = 'our-work')} class=\\"no-underline\\" variant=\\"link\\"\\n\\t\\t\\t\\t>Our Work</Button\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"size-fit tab\\">\\n\\t\\t\\t<Button on:click={() => (activeTab = 'before-after')} class=\\"no-underline\\" variant=\\"link\\"\\n\\t\\t\\t\\t>Before & After</Button\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"postcss\\">\\n\\t.tab {\\n    position: relative\\n}\\n.tab::before {\\n    position: absolute;\\n    top: 100%;\\n    height: 0.25rem;\\n    width: 100%;\\n    border-radius: 9999px;\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n    opacity: 0.2;\\n    transition-duration: 200ms;\\n    --tw-content: '';\\n    content: var(--tw-content)\\n}\\n.tab:hover::before {\\n    content: var(--tw-content);\\n    opacity: 0.4\\n}\\n</style>\\n"],"names":[],"mappings":"AA6BC,kBAAK,CACF,QAAQ,CAAE;AACd,CACA,kBAAI,QAAS,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAC5D,OAAO,CAAE,GAAG,CACZ,mBAAmB,CAAE,KAAK,CAC1B,YAAY,CAAE,EAAE,CAChB,OAAO,CAAE,IAAI,YAAY;AAC7B,CACA,kBAAI,MAAM,QAAS,CACf,OAAO,CAAE,IAAI,YAAY,CAAC,CAC1B,OAAO,CAAE;AACb"}`
};
const GalleryControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeTab } = $$props;
  if ($$props.activeTab === void 0 && $$bindings.activeTab && activeTab !== void 0) $$bindings.activeTab(activeTab);
  $$result.css.add(css$1);
  return `<section class="py-8 bg-secondary p-x"><div class="${escape(
    null_to_empty(`
            container max-w-screen-sm flex md:justify-between justify-center md:gap-0 xs:gap-12 gap-6 items-center xs:text-2xl text-xl font-semibold relative md:w-full w-fit
            before:absolute before:content-[''] before:h-1 before:bg-white before:rounded-full before:top-full 
            ${activeTab === "our-work" ? "before:left-0 xs:before:w-[118px] before:w-[98px]" : "xs:before:left-[calc(100%-170px)] xs:before:w-[170px] before:left-[calc(100%-142px)] before:w-[142px]"}
        `),
    true
  ) + " svelte-whd2nj"}"><div class="size-fit tab svelte-whd2nj">${validate_component(Button, "Button").$$render($$result, { class: "no-underline", variant: "link" }, {}, {
    default: () => {
      return `Our Work`;
    }
  })}</div> <div class="size-fit tab svelte-whd2nj">${validate_component(Button, "Button").$$render($$result, { class: "no-underline", variant: "link" }, {}, {
    default: () => {
      return `Before &amp; After`;
    }
  })}</div></div> </section>`;
});
const icon = "data:image/svg+xml,%3csvg%20width='20px'%20height='20px'%20version='1.1'%20viewBox='0%200%201200%201200'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2328284d'%20d='m744.68%20184.8c-13.34-0.15234-26.188%205.0352-35.688%2014.406-9.4961%209.3672-14.855%2022.148-14.887%2035.488-0.027343%2013.344%205.2773%2026.145%2014.738%2035.555l321.34%20329.45-321.34%20329.49c-9.75%209.3828-15.273%2022.316-15.32%2035.848s5.3906%2026.504%2015.074%2035.953c9.6836%209.4531%2022.781%2014.574%2036.309%2014.203%2013.523-0.375%2026.32-6.2109%2035.469-16.18l355.42-364.41c9.1094-9.3398%2014.207-21.867%2014.207-34.91%200-13.047-5.0977-25.574-14.207-34.914l-355.42-364.36c-9.2969-9.8203-22.172-15.457-35.695-15.625zm-290.92%200.050781h0.003907c-12.969%200.56641-25.207%206.1523-34.133%2015.574l-355.42%20364.36c-9.1094%209.3398-14.207%2021.867-14.207%2034.914%200%2013.043%205.0977%2025.57%2014.207%2034.91l355.42%20364.41c9.1484%209.9688%2021.945%2015.805%2035.469%2016.18%2013.527%200.37109%2026.625-4.75%2036.309-14.203%209.6836-9.4492%2015.121-22.422%2015.074-35.953s-5.5703-26.465-15.32-35.848l-321.34-329.49%20321.34-329.45c9.5859-9.5391%2014.898-22.551%2014.727-36.07-0.17188-13.523-5.8086-26.398-15.633-35.691-9.8203-9.293-22.984-14.215-36.492-13.637z'%20fill-rule='evenodd'/%3e%3c/svg%3e";
const css = {
  code: "input[type='range'].svelte-72umxw{-moz-appearance:none;appearance:none;-webkit-appearance:none;&:focus {\n			outline: none;\n		};&::-webkit-slider-thumb {\n			-webkit-appearance: none;\n			width: var(--size);\n			height: var(--size);\n			background-color: hsl(var(--primary));\n			border-radius: 100%;\n			z-index: 20;\n			position: absolute;\n			top: 50%;\n			transform: translateY(-50%);\n			left: calc(var(--left) - var(--size) / 2);\n			border: 2px solid hsl(var(--primary));\n			box-shadow: 0 3px 13px rgba(128, 128, 128, 0.8);\n		};&::-webkit-slider-runnable-track {\n			background: transparent;\n		};&::-moz-range-track {\n			background: transparent;\n		};&::-ms-track {\n			background: transparent;\n			border-color: transparent;\n			color: transparent;\n		}}",
  map: '{"version":3,"file":"Range.svelte","sources":["Range.svelte"],"sourcesContent":["<script lang=\\"ts\\">import icon from \\"$images/icons/double-chevron.svg\\";\\nexport let currentPercent;\\nconst minMaxBuffer = 3;\\n<\/script>\\n\\n<div class=\\"absolute size-full inset-0 z-10\\">\\n\\t<!-- Line -->\\n\\t<div\\n\\t\\tstyle={`left: calc(${currentPercent}% - 2px);`}\\n\\t\\tclass=\\"h-full w-1 bg-primary top-0 absolute z-30 cursor-col-resize pointer-events-none\\"\\n\\t\\taria-hidden=\\"true\\"\\n\\t/>\\n\\t<!-- Chevron -->\\n\\t<img\\n\\t\\tstyle={`left: calc(${currentPercent}% - var(--offset));`}\\n\\t\\tclass=\\"lg:size-8 size-6 lg:[--offset:16px] [--offset:12px] pointer-events-none absolute top-1/2 -translate-y-1/2 z-50 select-none cursor-col-resize\\"\\n\\t\\tsrc={icon}\\n\\t\\talt=\\"\\"\\n\\t\\taria-hidden=\\"true\\"\\n\\t/>\\n\\n\\t<input\\n\\t\\taria-label=\\"Before After Slider Range Input\\"\\n\\t\\tmin={minMaxBuffer}\\n\\t\\tmax={100 - minMaxBuffer}\\n\\t\\tstyle={`--left: ${currentPercent}%;`}\\n\\t\\tclass=\\"size-full bg-transparent lg:[--size:50px] [--size:40px] cursor-col-resize\\"\\n\\t\\ttype=\\"range\\"\\n\\t\\tbind:value={currentPercent}\\n\\t/>\\n</div>\\n\\n<style>\\n\\tinput[type=\'range\'] {\\n\\t\\t/* Disable default range styles */\\n\\t\\t-moz-appearance: none;\\n\\t\\t     appearance: none;\\n\\t\\t-webkit-appearance: none;\\n\\t\\t&:focus {\\n\\t\\t\\toutline: none;\\n\\t\\t}\\n\\n\\t\\t/* Thumb styles */\\n\\t\\t&::-webkit-slider-thumb {\\n\\t\\t\\t-webkit-appearance: none;\\n\\t\\t\\twidth: var(--size);\\n\\t\\t\\theight: var(--size);\\n\\t\\t\\tbackground-color: hsl(var(--primary));\\n\\t\\t\\tborder-radius: 100%;\\n\\t\\t\\tz-index: 20;\\n\\t\\t\\tposition: absolute;\\n\\t\\t\\ttop: 50%;\\n\\t\\t\\ttransform: translateY(-50%);\\n\\t\\t\\tleft: calc(var(--left) - var(--size) / 2);\\n\\t\\t\\tborder: 2px solid hsl(var(--primary));\\n\\t\\t\\tbox-shadow: 0 3px 13px rgba(128, 128, 128, 0.8);\\n\\t\\t}\\n\\n\\t\\t/* Disable default range styles */\\n\\t\\t&::-webkit-slider-runnable-track {\\n\\t\\t\\tbackground: transparent;\\n\\t\\t}\\n\\t\\t&::-moz-range-track {\\n\\t\\t\\tbackground: transparent;\\n\\t\\t}\\n\\t\\t&::-ms-track {\\n\\t\\t\\tbackground: transparent;\\n\\t\\t\\tborder-color: transparent;\\n\\t\\t\\tcolor: transparent;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiCC,KAAK,CAAC,IAAI,CAAC,OAAO,eAAE,CAEnB,eAAe,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CACrB,kBAAkB,CAAE,IAAI,CACxB,CAAC,MAAM,CAAC;AACV,GAAG,SAAS,IAAI;AAChB,GAAG,CAGD,CAAC,sBAAsB,CAAC;AAC1B,GAAG,oBAAoB,IAAI;AAC3B,GAAG,OAAO,IAAI,MAAM,CAAC;AACrB,GAAG,QAAQ,IAAI,MAAM,CAAC;AACtB,GAAG,kBAAkB,IAAI,IAAI,SAAS,CAAC,CAAC;AACxC,GAAG,eAAe,IAAI;AACtB,GAAG,SAAS,EAAE;AACd,GAAG,UAAU,QAAQ;AACrB,GAAG,KAAK,GAAG;AACX,GAAG,WAAW,WAAW,IAAI,CAAC;AAC9B,GAAG,MAAM,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AAC5C,GAAG,QAAQ,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,SAAS,CAAC,CAAC;AACxC,GAAG,YAAY,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAClD,GAAG,CAGD,CAAC,+BAA+B,CAAC;AACnC,GAAG,YAAY,WAAW;AAC1B,GAAG,CACD,CAAC,kBAAkB,CAAC;AACtB,GAAG,YAAY,WAAW;AAC1B,GAAG,CACD,CAAC,WAAW,CAAC;AACf,GAAG,YAAY,WAAW;AAC1B,GAAG,cAAc,WAAW;AAC5B,GAAG,OAAO,WAAW;AACrB,GACC"}'
};
const minMaxBuffer = 3;
const Range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPercent } = $$props;
  if ($$props.currentPercent === void 0 && $$bindings.currentPercent && currentPercent !== void 0) $$bindings.currentPercent(currentPercent);
  $$result.css.add(css);
  return `<div class="absolute size-full inset-0 z-10"> <div${add_attribute("style", `left: calc(${currentPercent}% - 2px);`, 0)} class="h-full w-1 bg-primary top-0 absolute z-30 cursor-col-resize pointer-events-none" aria-hidden="true"></div>  <img${add_attribute("style", `left: calc(${currentPercent}% - var(--offset));`, 0)} class="lg:size-8 size-6 lg:[--offset:16px] [--offset:12px] pointer-events-none absolute top-1/2 -translate-y-1/2 z-50 select-none cursor-col-resize"${add_attribute("src", icon, 0)} alt="" aria-hidden="true"> <input aria-label="Before After Slider Range Input"${add_attribute("min", minMaxBuffer, 0)}${add_attribute("max", 100 - minMaxBuffer, 0)}${add_attribute("style", `--left: ${currentPercent}%;`, 0)} class="size-full bg-transparent lg:[--size:50px] [--size:40px] cursor-col-resize svelte-72umxw" type="range"${add_attribute("value", currentPercent, 0)}> </div>`;
});
let percent = 50;
const BeforeAfterSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPercent;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    currentPercent = percent;
    $$rendered = `<li class="size-full flex flex-col lg:gap-4 gap-2">${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, { class: "mx-auto" }, {}, {
      default: () => {
        return `<h2 class="lg:px-4 font-bold lg:text-3xl xs:text-2xl text-lg text-center text-white">${escape(data.title)}</h2>`;
      }
    })} <div class="size-full relative lg:h-[350px] sm:h-[250px] h-[150px] rounded-lg bord"> ${validate_component(Range, "Range").$$render(
      $$result,
      { currentPercent },
      {
        currentPercent: ($$value) => {
          currentPercent = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="absolute size-full rounded-sm overflow-clip">${typeof data.after === "string" ? `<img class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"${add_attribute("src", data.after.img.src, 0)}${add_attribute("alt", `${data.title} After`, 0)}${add_attribute("width", data.after.img.w, 0)}${add_attribute("height", data.after.img.h, 0)}>` : `<picture>${each(Object.entries(data.after.sources), ([format, srcset]) => {
      return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
    })} <img class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"${add_attribute("src", data.after.img.src, 0)}${add_attribute("alt", `${data.title} After`, 0)}${add_attribute("width", data.after.img.w, 0)}${add_attribute("height", data.after.img.h, 0)}></picture>`} <span class="absolute lg:top-4 top-2 lg:right-4 right-2 bg-secondary-dark rounded-sm lg:p-4 p-2 lg:text-base text-xs text-white font-bold tracking-wider" data-svelte-h="svelte-wn1kzr">After</span></div>  <div${add_attribute("style", `clip-path: polygon(0 0, ${currentPercent}% 0, ${currentPercent}% 100%, 0 100%)`, 0)} class="absolute overflow-hidden size-full rounded-sm">${typeof data.before === "string" ? `<img class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"${add_attribute("src", data.before.img.src, 0)}${add_attribute("alt", `${data.title} Before`, 0)}${add_attribute("width", data.before.img.w, 0)}${add_attribute("height", data.before.img.h, 0)}>` : `<picture>${each(Object.entries(data.before.sources), ([format, srcset]) => {
      return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
    })} <img class="w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"${add_attribute("src", data.before.img.src, 0)}${add_attribute("alt", `${data.title} Before`, 0)}${add_attribute("width", data.before.img.w, 0)}${add_attribute("height", data.before.img.h, 0)}></picture>`} <span class="absolute lg:top-4 top-2 lg:left-4 left-2 bg-secondary-dark rounded-sm lg:p-4 p-2 lg:text-base text-xs text-white font-bold tracking-wider" data-svelte-h="svelte-j5tbyi">Before</span></div></div></li>`;
  } while (!$$settled);
  return $$rendered;
});
const cedarSidingBefore = {
  sources: {
    avif: "/_app/immutable/assets/cedar-siding-replacement-before.ChEeZ1WC.avif 322w, /_app/immutable/assets/cedar-siding-replacement-before.C5mL_XHh.avif 644w",
    webp: "/_app/immutable/assets/cedar-siding-replacement-before.Bmyz1z-4.webp 322w, /_app/immutable/assets/cedar-siding-replacement-before.BIule5k4.webp 644w",
    png: "/_app/immutable/assets/cedar-siding-replacement-before.DvhYZI1O.png 322w, /_app/immutable/assets/cedar-siding-replacement-before.BlwPtX4b.png 644w"
  },
  img: {
    src: "/_app/immutable/assets/cedar-siding-replacement-before.BlwPtX4b.png",
    w: 644,
    h: 290
  }
};
const cedarSidingAfter = {
  sources: {
    avif: "/_app/immutable/assets/cedar-siding-replacement-navy-after.Czng0xJ6.avif 1011w, /_app/immutable/assets/cedar-siding-replacement-navy-after.BaHbl0Ac.avif 2022w",
    webp: "/_app/immutable/assets/cedar-siding-replacement-navy-after.BORtANcn.webp 1011w, /_app/immutable/assets/cedar-siding-replacement-navy-after.ChxiLTjP.webp 2022w",
    png: "/_app/immutable/assets/cedar-siding-replacement-navy-after.DGOpGp2U.png 1011w, /_app/immutable/assets/cedar-siding-replacement-navy-after.D9-4Ylbt.png 2022w"
  },
  img: {
    src: "/_app/immutable/assets/cedar-siding-replacement-navy-after.D9-4Ylbt.png",
    w: 2022,
    h: 911
  }
};
const brickPaintingBackBefore = {
  sources: {
    avif: "/_app/immutable/assets/brick-painting-back-of-the-house-before.DVux1PPF.avif 504w, /_app/immutable/assets/brick-painting-back-of-the-house-before.zh8jA01X.avif 1008w",
    webp: "/_app/immutable/assets/brick-painting-back-of-the-house-before.DKiQrXhD.webp 504w, /_app/immutable/assets/brick-painting-back-of-the-house-before.DLjM2iX9.webp 1008w",
    png: "/_app/immutable/assets/brick-painting-back-of-the-house-before.CMdWD7cz.png 504w, /_app/immutable/assets/brick-painting-back-of-the-house-before.DRFyjTpa.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/brick-painting-back-of-the-house-before.DRFyjTpa.png",
    w: 1008,
    h: 756
  }
};
const brickPaintingBackAfter = {
  sources: {
    avif: "/_app/immutable/assets/brick-painting-back-of-the-house-after.DKZdT17q.avif 504w, /_app/immutable/assets/brick-painting-back-of-the-house-after.DQOZqm7X.avif 1008w",
    webp: "/_app/immutable/assets/brick-painting-back-of-the-house-after.Cmc6xAQM.webp 504w, /_app/immutable/assets/brick-painting-back-of-the-house-after.KOF2T5DX.webp 1008w",
    png: "/_app/immutable/assets/brick-painting-back-of-the-house-after.DjjjXZIJ.png 504w, /_app/immutable/assets/brick-painting-back-of-the-house-after.BysUng4g.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/brick-painting-back-of-the-house-after.BysUng4g.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairBackBefore = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.uf03RcLB.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.CEc8X4O0.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.DExTwSUg.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.D-LTmFRF.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.DLTiAzvU.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.LTOHsw_o.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before.LTOHsw_o.png",
    w: 1008,
    h: 454
  }
};
const stuccoRepairBackAfter = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.iVweLLS1.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.DZhhFuo4.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.D3GflT0K.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.CPvYS83U.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.GB7qQiH9.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.D6GB5Dp0.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after.D6GB5Dp0.png",
    w: 1008,
    h: 454
  }
};
const stuccoRepairFrontBefore = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.wj7-miux.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.BGpHUuUa.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.Zp26isl1.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.Db6O8EKE.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.DmO8cXo6.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.Dg0Xgj1b.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before.Dg0Xgj1b.png",
    w: 1008,
    h: 454
  }
};
const stuccoRepairFrontAfter = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.CuqtzBrk.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.DkA2OhH-.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.DDWUady-.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.BvX8jq9k.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.u0Q4kXtB.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.CX0qglCz.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after.CX0qglCz.png",
    w: 1008,
    h: 454
  }
};
const stuccoTrimBefore = {
  sources: {
    avif: "/_app/immutable/assets/stucco-and-trim-before.C-p5cKXp.avif 504w, /_app/immutable/assets/stucco-and-trim-before.BFw21C5e.avif 1008w",
    webp: "/_app/immutable/assets/stucco-and-trim-before.CsY0RAZV.webp 504w, /_app/immutable/assets/stucco-and-trim-before.Zz-cMKvT.webp 1008w",
    png: "/_app/immutable/assets/stucco-and-trim-before.8Wimfesb.png 504w, /_app/immutable/assets/stucco-and-trim-before.CEWDkm7y.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-and-trim-before.CEWDkm7y.png",
    w: 1008,
    h: 454
  }
};
const stuccoTrimAfter = {
  sources: {
    avif: "/_app/immutable/assets/stucco-and-trim-after.BtmwaWV2.avif 504w, /_app/immutable/assets/stucco-and-trim-after.lmMQxCOZ.avif 1008w",
    webp: "/_app/immutable/assets/stucco-and-trim-after.l4JvZw53.webp 504w, /_app/immutable/assets/stucco-and-trim-after.WnjdPME5.webp 1008w",
    png: "/_app/immutable/assets/stucco-and-trim-after.BOXQ16jf.png 504w, /_app/immutable/assets/stucco-and-trim-after.xXQARZOS.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-and-trim-after.xXQARZOS.png",
    w: 1008,
    h: 454
  }
};
const limeWashBefore = {
  sources: {
    avif: "/_app/immutable/assets/stucco-lime-wash-before.Ch5yHxeC.avif 408w, /_app/immutable/assets/stucco-lime-wash-before.Df7NAMO6.avif 816w",
    webp: "/_app/immutable/assets/stucco-lime-wash-before.CKisAVOp.webp 408w, /_app/immutable/assets/stucco-lime-wash-before.BUO8LFLS.webp 816w",
    png: "/_app/immutable/assets/stucco-lime-wash-before.D1wfq0b4.png 408w, /_app/immutable/assets/stucco-lime-wash-before.CKd4zdJ8.png 816w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-lime-wash-before.CKd4zdJ8.png",
    w: 816,
    h: 612
  }
};
const limeWashAfter = {
  sources: {
    avif: "/_app/immutable/assets/stucco-lime-wash-after.8bWE7odY.avif 424w, /_app/immutable/assets/stucco-lime-wash-after.CgPoRbxJ.avif 848w",
    webp: "/_app/immutable/assets/stucco-lime-wash-after.DCrYcPx0.webp 424w, /_app/immutable/assets/stucco-lime-wash-after.Dz2F22wV.webp 848w",
    png: "/_app/immutable/assets/stucco-lime-wash-after.BqaxCJte.png 424w, /_app/immutable/assets/stucco-lime-wash-after.C4seAnpL.png 848w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-lime-wash-after.C4seAnpL.png",
    w: 848,
    h: 512
  }
};
const stuccoRepairBackBefore2 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.BkCH0Klr.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.BpAiYQsc.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.Dlr7WV6W.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.XvYgPU89.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.DKbprqzb.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.B7Bkl9I_.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-2.B7Bkl9I_.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairBackAfter2 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.CfEtMv_J.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.BeyNp_yY.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.gra7hnAc.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.C-ZM8DoI.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.CsKaWbpi.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.BPKADc1a.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-2.BPKADc1a.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairFrontBefore2 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.Bs8p7zM8.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.C504V89m.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.CF7lESKP.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.DzxNAAr1.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.DmjKWSWg.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.C5rHBt19.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-2.C5rHBt19.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairFrontAfter2 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.okqsZci4.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.BG8x3gfn.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.B8GhkQsW.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.paCiWXyl.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.CjDQ3ftO.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.DEPw_P5-.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-2.DEPw_P5-.png",
    w: 1008,
    h: 756
  }
};
const brickPaintingFrontBefore = {
  sources: {
    avif: "/_app/immutable/assets/brick-painting-front-of-the-house-before.BOxibNR4.avif 512w, /_app/immutable/assets/brick-painting-front-of-the-house-before.BCfK34C6.avif 1024w",
    webp: "/_app/immutable/assets/brick-painting-front-of-the-house-before.BMJ8Twfz.webp 512w, /_app/immutable/assets/brick-painting-front-of-the-house-before.jKznNmAA.webp 1024w",
    png: "/_app/immutable/assets/brick-painting-front-of-the-house-before.BNIcyr-e.png 512w, /_app/immutable/assets/brick-painting-front-of-the-house-before.vfBc5dmM.png 1024w"
  },
  img: {
    src: "/_app/immutable/assets/brick-painting-front-of-the-house-before.vfBc5dmM.png",
    w: 1024,
    h: 768
  }
};
const brickPaintingFrontAfter = {
  sources: {
    avif: "/_app/immutable/assets/brick-painting-front-of-the-house-after.Cylm6gCb.avif 520w, /_app/immutable/assets/brick-painting-front-of-the-house-after.CiykSWXj.avif 1040w",
    webp: "/_app/immutable/assets/brick-painting-front-of-the-house-after.Bzgl0pc5.webp 520w, /_app/immutable/assets/brick-painting-front-of-the-house-after.B4zxLEXm.webp 1040w",
    png: "/_app/immutable/assets/brick-painting-front-of-the-house-after.7Y4xn-H3.png 520w, /_app/immutable/assets/brick-painting-front-of-the-house-after.Cdt4c7Oh.png 1040w"
  },
  img: {
    src: "/_app/immutable/assets/brick-painting-front-of-the-house-after.Cdt4c7Oh.png",
    w: 1040,
    h: 780
  }
};
const stuccoRepairFrontBefore3 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.BmV-Ez6C.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.DFOOvAYX.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.BnNAVc4C.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.BTNPC9fj.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.BeouDDAg.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.6scwAHdk.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-before-3.6scwAHdk.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairFrontAfter3 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.DC8YXR4h.avif 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.wEPd4gdQ.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.B0_aWN3S.webp 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.D_Nj7C4D.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.Bcvhcu1E.png 504w, /_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.LRLK-DdT.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-front-of-the-house-after-3.LRLK-DdT.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairBackBefore3 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.RF4opa-H.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.DXPEQgdm.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.lAARJbpB.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.DxMXJx8g.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.D_rkKdIZ.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.C4Q8xMPY.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-before-3.C4Q8xMPY.png",
    w: 1008,
    h: 756
  }
};
const stuccoRepairBackAfter3 = {
  sources: {
    avif: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.DhZJCVkY.avif 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.D8iI5Jem.avif 1008w",
    webp: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.BsJ3SZ5K.webp 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.CViClayC.webp 1008w",
    png: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.BJ1AoTfD.png 504w, /_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.X_RZ-1CZ.png 1008w"
  },
  img: {
    src: "/_app/immutable/assets/stucco-repair-paint-back-of-the-house-after-3.X_RZ-1CZ.png",
    w: 1008,
    h: 756
  }
};
const beforeAfterGalleryData = [
  {
    title: "Cedar Siding Replacement & Paint",
    before: cedarSidingBefore,
    after: cedarSidingAfter
  },
  {
    title: "Brick Painting - Back of the House",
    before: brickPaintingBackBefore,
    after: brickPaintingBackAfter
  },
  {
    title: "Stucco Repair & Paint - Back of the House",
    before: stuccoRepairBackBefore,
    after: stuccoRepairBackAfter
  },
  {
    title: "Stucco Repair & Paint - Front of the House",
    before: stuccoRepairFrontBefore,
    after: stuccoRepairFrontAfter
  },
  {
    title: "Stucco & Trim",
    before: stuccoTrimBefore,
    after: stuccoTrimAfter
  },
  {
    title: "Stucco & Lime Wash",
    before: limeWashBefore,
    after: limeWashAfter
  },
  {
    title: "Stucco Repair & Paint - Back of the House",
    before: stuccoRepairBackBefore2,
    after: stuccoRepairBackAfter2
  },
  {
    title: "Stucco Repair & Paint - Front of the House",
    before: stuccoRepairFrontBefore2,
    after: stuccoRepairFrontAfter2
  },
  {
    title: "Brick Painting - Front of the House",
    before: brickPaintingFrontBefore,
    after: brickPaintingFrontAfter
  },
  {
    title: "Stucco Repair & Paint - Front of the House",
    before: stuccoRepairFrontBefore3,
    after: stuccoRepairFrontAfter3
  },
  {
    title: "Stucco Repair & Paint - Back of the House",
    before: stuccoRepairBackBefore3,
    after: stuccoRepairBackAfter3
  }
];
const BeforeAfterGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="p-y p-x bg-secondary"><ul class="container max-w-screen-md flex flex-col gap-12">${each(beforeAfterGalleryData, (data) => {
    return `${validate_component(BeforeAfterSlider, "BeforeAfterSlider").$$render($$result, { data }, {}, {})}`;
  })}</ul></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTab = "our-work";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(GalleryHero, "GalleryHero").$$render($$result, {}, {}, {})} ${validate_component(GalleryControls, "GalleryControls").$$render(
      $$result,
      { activeTab },
      {
        activeTab: ($$value) => {
          activeTab = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${activeTab === "our-work" ? `${validate_component(OurWorkGallery, "OurWorkGallery").$$render($$result, {}, {}, {})}` : `${validate_component(BeforeAfterGallery, "BeforeAfterGallery").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
