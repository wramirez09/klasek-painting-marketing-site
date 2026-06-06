import { c as create_ssr_component, g as subscribe, v as validate_component, b as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { N as NavBar } from "../../chunks/NavBar.js";
import { C as ClickToCall } from "../../chunks/ClickToCall.js";
const css = {
  code: "h1.svelte-qbjffr{text-align:center;font-size:2.25rem;line-height:2.5rem;font-weight:600;--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\n}@media(min-width: 1024px){h1.svelte-qbjffr{font-size:3rem;line-height:1\n    }}@media(min-width: 1280px){h1.svelte-qbjffr{font-size:3.75rem;line-height:1\n    }}a.svelte-qbjffr{font-weight:600;--tw-text-opacity:1;color:hsl(var(--secondary-dark) / var(--tw-text-opacity, 1));text-decoration-line:underline;text-underline-offset:2px\n}.error-body.svelte-qbjffr{margin-left:auto;margin-right:auto;max-width:640px;text-align:center;--tw-text-opacity:1;color:rgb(88 90 90 / var(--tw-text-opacity, 1))\n}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport NavBar from \\"$lib/common/nav/NavBar.svelte\\";\\nimport ClickToCall from \\"$lib/common/other/ClickToCall.svelte\\";\\nlet is404 = $page.status === 404;\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{is404 ? 'Page Not Found' : 'Error'} | Klasek Painting</title>\\n\\t<meta\\n\\t\\tname=\\"description\\"\\n\\t\\tcontent=\\"Sorry, {is404\\n\\t\\t\\t? \\"the page you're looking for isn't available\\"\\n\\t\\t\\t: 'something went wrong'}. Explore more from Klasek Painting and find what you need. Navigate back to our homepage or browse our site for related content.\\"\\n\\t/>\\n</svelte:head>\\n\\n<NavBar lightNav={true} />\\n\\n<section class=\\"overflow-hidden bg-gradient-to-b from-off-white to-white p-y p-x\\">\\n\\t<div class=\\"container flex flex-col items-center gap-2\\">\\n\\t\\t<h1>{is404 ? 'Page Not Found' : 'Uh oh... something went wrong'}</h1>\\n\\n\\t\\t{#if is404}\\n\\t\\t\\t<span class=\\"text-secondary\\">Error 404</span>\\n\\n\\t\\t\\t<div class=\\"error-body\\">\\n\\t\\t\\t\\t<span>\\n\\t\\t\\t\\t\\tIf you expected to find something here, try using the links above and below to explore our\\n\\t\\t\\t\\t\\tcontent. If you still can't find what you're looking for, please\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<a class=\\"underline\\" href=\\"/contact-us\\"> contact us online </a>\\n\\t\\t\\t\\tor call us at <ClickToCall class=\\"text-secondary-dark !font-semibold\\" variant=\\"link\\" />\\n\\t\\t\\t\\t<span>for further assistance.</span>\\n\\t\\t\\t</div>\\n\\t\\t{:else}\\n\\t\\t\\t<span class=\\"text-secondary\\">Error {$page.status}</span>\\n\\t\\t\\t<span class=\\"text-secondary\\">{$page.error?.message}</span>\\n\\n\\t\\t\\t<div class=\\"error-body\\">\\n\\t\\t\\t\\t<span>\\n\\t\\t\\t\\t\\tSorry, something went wrong. Try using the links above and below to explore our content.\\n\\t\\t\\t\\t\\tIf you still can't find what you're looking for, please\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<a class=\\"underline\\" href=\\"/contact-us\\"> contact us online </a>\\n\\t\\t\\t\\tor call us at <ClickToCall class=\\"text-secondary-dark !font-semibold\\" variant=\\"link\\" />\\n\\t\\t\\t\\t<span>for further assistance.</span>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</section>\\n\\n<style lang=\\"postcss\\">\\n\\th1 {\\n\\n    text-align: center;\\n\\n    font-size: 2.25rem;\\n\\n    line-height: 2.5rem;\\n\\n    font-weight: 600;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1))\\n}\\n\\n@media (min-width: 1024px) {\\n\\n    h1 {\\n\\n        font-size: 3rem;\\n\\n        line-height: 1\\n    }\\n}\\n\\n@media (min-width: 1280px) {\\n\\n    h1 {\\n\\n        font-size: 3.75rem;\\n\\n        line-height: 1\\n    }\\n}\\n\\n\\ta {\\n\\n    font-weight: 600;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: hsl(var(--secondary-dark) / var(--tw-text-opacity, 1));\\n\\n    text-decoration-line: underline;\\n\\n    text-underline-offset: 2px\\n}\\n\\n\\t.error-body {\\n\\n    margin-left: auto;\\n\\n    margin-right: auto;\\n\\n    max-width: 640px;\\n\\n    text-align: center;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(88 90 90 / var(--tw-text-opacity, 1))\\n}\\n</style>\\n"],"names":[],"mappings":"AAoDC,gBAAG,CAEA,UAAU,CAAE,MAAM,CAElB,SAAS,CAAE,OAAO,CAElB,WAAW,CAAE,MAAM,CAEnB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,gBAAgB,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AAChE,CAEA,MAAO,YAAY,MAAM,CAAE,CAEvB,gBAAG,CAEC,SAAS,CAAE,IAAI,CAEf,WAAW,CAAE;AACrB,IAAI,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CAEvB,gBAAG,CAEC,SAAS,CAAE,OAAO,CAElB,WAAW,CAAE;AACrB,IAAI,CACJ,CAEC,eAAE,CAEC,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,IAAI,gBAAgB,CAAC,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAE7D,oBAAoB,CAAE,SAAS,CAE/B,qBAAqB,CAAE;AAC3B,CAEC,yBAAY,CAET,WAAW,CAAE,IAAI,CAEjB,YAAY,CAAE,IAAI,CAElB,SAAS,CAAE,KAAK,CAEhB,UAAU,CAAE,MAAM,CAElB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACnD"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let is404 = $page.status === 404;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-10t8xtc_START -->${$$result.title = `<title>${escape(is404 ? "Page Not Found" : "Error")} | Klasek Painting</title>`, ""}<meta name="description" content="${"Sorry, " + escape(
    is404 ? "the page you're looking for isn't available" : "something went wrong",
    true
  ) + ". Explore more from Klasek Painting and find what you need. Navigate back to our homepage or browse our site for related content."}"><!-- HEAD_svelte-10t8xtc_END -->`, ""} ${validate_component(NavBar, "NavBar").$$render($$result, { lightNav: true }, {}, {})} <section class="overflow-hidden bg-gradient-to-b from-off-white to-white p-y p-x"><div class="container flex flex-col items-center gap-2"><h1 class="svelte-qbjffr">${escape(is404 ? "Page Not Found" : "Uh oh... something went wrong")}</h1> ${is404 ? `<span class="text-secondary" data-svelte-h="svelte-1wzh2mj">Error 404</span> <div class="error-body svelte-qbjffr"><span data-svelte-h="svelte-6c8dyo">If you expected to find something here, try using the links above and below to explore our
					content. If you still can&#39;t find what you&#39;re looking for, please</span> <a class="underline svelte-qbjffr" href="/contact-us" data-svelte-h="svelte-ccqcu0">contact us online</a>
				or call us at ${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      class: "text-secondary-dark !font-semibold",
      variant: "link"
    },
    {},
    {}
  )} <span data-svelte-h="svelte-1ws86o3">for further assistance.</span></div>` : `<span class="text-secondary">Error ${escape($page.status)}</span> <span class="text-secondary">${escape($page.error?.message)}</span> <div class="error-body svelte-qbjffr"><span data-svelte-h="svelte-10nmjl8">Sorry, something went wrong. Try using the links above and below to explore our content.
					If you still can&#39;t find what you&#39;re looking for, please</span> <a class="underline svelte-qbjffr" href="/contact-us" data-svelte-h="svelte-ccqcu0">contact us online</a>
				or call us at ${validate_component(ClickToCall, "ClickToCall").$$render(
    $$result,
    {
      class: "text-secondary-dark !font-semibold",
      variant: "link"
    },
    {},
    {}
  )} <span data-svelte-h="svelte-1ws86o3">for further assistance.</span></div>`}</div> </section>`;
});
export {
  Error as default
};
