import { c as create_ssr_component, g as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { N as NavBar } from "../../../chunks/NavBar.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { p as page } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFunnelPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  isFunnelPage = $page.url.pathname.startsWith("/services/gutter-installation-repair") || $page.url.pathname.startsWith("/services/siding-painting-repair/hardie-board-installation");
  $$unsubscribe_page();
  return `${validate_component(NavBar, "NavBar").$$render($$result, { lightNav: true }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, { showEmailSignup: !isFunnelPage }, {}, {})}`;
});
export {
  Layout as default
};
