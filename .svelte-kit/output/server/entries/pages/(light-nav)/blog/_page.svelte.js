import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, g as subscribe, e as each } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/button.js";
import { p as page } from "../../../../chunks/stores.js";
import { R as RibbonWrapper } from "../../../../chunks/RibbonWrapper.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const BlogPreviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { previewData } = $$props;
  if ($$props.previewData === void 0 && $$bindings.previewData && previewData !== void 0) $$bindings.previewData(previewData);
  return `<li class="list-none grid lg:grid-cols-[400px_auto] md:grid-cols-[350px_auto] md:grid-rows-1 py-8 lg:gap-x-4 md:gap-0 gap-2"> <div class="relative w-full rounded-lg overflow-clip my-auto h-[250px]"><div class="absolute rounded-lg size-full bg-off-white animate-pulse"></div> <div${add_attribute("style", `background-image: url(${previewData.image})`, 0)} class="absolute bg-cover bg-center size-full z-10 rounded-lg border-2 border-secondary-dark"></div></div>  <div class="sm:px-8 sm:pl-4 flex flex-col sm:gap-4 gap-2 h-fit my-auto"><div><h2 class="font-semibold lg:text-4xl xs:text-2xl text-xl mb-1 text-secondary-dark">${escape(previewData.title)}</h2> <span class="text-sm text-gray-600">${escape(previewData.datePublished)}</span></div> <p>${escape(previewData.meta)}..</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "md:w-fit text-secondary-dark",
      href: previewData.href
    },
    {},
    {
      default: () => {
        return `Read Post`;
      }
    }
  )}</div></li>`;
});
const House = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "house" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notFirstPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let currentPage;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  currentPage = parseInt($page.url.searchParams.get("page") ?? "1");
  notFirstPage = currentPage > 1;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ako8q0_START --><link rel="canonical"${add_attribute("href", `https://www.klasekpainting.com/blog${notFirstPage ? `?page=${currentPage}` : ""}`, 0)}><!-- HEAD_svelte-ako8q0_END -->`, ""} <section class="p-y p-x bg-gradient-to-b from-off-white to-white"><div class="container mx-auto flex flex-col items-center lg:gap-8 gap-4 relative"><div>${validate_component(RibbonWrapper, "RibbonWrapper").$$render($$result, { class: "before:!w-10 after:!w-10" }, {}, {
    default: () => {
      return `<h1 class="text-center lg:text-6xl xs:text-4xl text-3xl text-secondary-dark font-bold lg:px-6" data-testid="page-heading" data-svelte-h="svelte-1mkrp7l">Klasek Painting Blogs</h1>`;
    }
  })}  ${currentPage !== 1 ? `<a href="/blog" class="mt-4 w-fit flex gap-1 mx-auto text-secondary-dark underline">${validate_component(House, "House").$$render($$result, {}, {}, {})} <p class="pt-[3px]" data-svelte-h="svelte-w6xo54">Blog Home</p></a>` : ``}</div>  <ul class="flex flex-col mx-auto h-fit w-full divide-y">${each(data.blogPreviewData, (previewData) => {
    return `${validate_component(BlogPreviewCard, "BlogPreviewCard").$$render($$result, { previewData }, {}, {})}`;
  })}</ul></div></section>`;
});
export {
  Page as default
};
