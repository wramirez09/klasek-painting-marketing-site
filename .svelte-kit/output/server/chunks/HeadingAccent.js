import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const HeadingAccent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  let { extend = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.extend === void 0 && $$bindings.extend && extend !== void 0) $$bindings.extend(extend);
  return `<div${add_attribute(
    "class",
    `
    ${classes}
    ${extend ? "extend-heading-ribbon" : "sm:pl-6"}
    size-fit  text-white [&>*]:!text-white font-semibold bg-primary-dark px-1 [&>*]:py-1 relative w-[calc(100%-25px)]
    before:absolute before:content-[''] before:h-full before:w-[25px] before:left-[calc(100%-4px)] before:top-0 before:ribbon-right before:bg-primary-dark before:[--r:1rem]
    after:lg:hidden after:absolute after:content-[''] after:h-full after:w-[400px] after:right-[calc(100%-4px)] after:top-0 after:bg-primary-dark
`,
    0
  )}>${slots.default ? slots.default({}) : ``}</div> ${extend ? `<style lang="postcss" data-svelte-h="svelte-152jmem">.extend-heading-ribbon > * {

			position: relative;

			&::before {

						position: absolute
			}

			&::before {

						top: 0px
			}

			&::before {

						right: 100%
			}

			&::before {

						height: 100%
			}

			&::before {

						width: 100vw
			}

			&::before {

						--tw-bg-opacity: 1;

						background-color: hsl(var(--primary-dark) / var(--tw-bg-opacity, 1))
			}

			&::before {

						--tw-content: '';

						content: var(--tw-content)
			}
}</style>` : ``}`;
});
export {
  HeadingAccent as H
};
