import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as NavBar } from "../../../chunks/NavBar.js";
import { F as Footer } from "../../../chunks/Footer.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
