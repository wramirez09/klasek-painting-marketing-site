import { c as create_ssr_component, g as subscribe, a as add_attribute, b as escape, v as validate_component, o as onDestroy, e as each, j as compute_slots } from "./ssr.js";
import { B as Button } from "./button.js";
import { p as page } from "./stores.js";
import { c as cn } from "./utils2.js";
import { A as ArrowIcon } from "./ArrowIcon.js";
import { i as isMobileStore } from "./isMobileStore.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import { r as routes, a as aboutUsRoutes, s as serviceAreaRoutes } from "./routes.js";
import { I as Icon } from "./Icon.js";
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
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
    ["path", { "d": "M12 22V12" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "box" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Brick_wall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M12 9v6" }],
    ["path", { "d": "M16 15v6" }],
    ["path", { "d": "M16 3v6" }],
    ["path", { "d": "M3 15h18" }],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M8 15v6" }],
    ["path", { "d": "M8 3v6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "brick-wall" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Building_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
      }
    ],
    [
      "path",
      {
        "d": "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
      }
    ],
    [
      "path",
      {
        "d": "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
      }
    ],
    ["path", { "d": "M10 6h4" }],
    ["path", { "d": "M10 10h4" }],
    ["path", { "d": "M10 14h4" }],
    ["path", { "d": "M10 18h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "building-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Droplets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
      }
    ],
    [
      "path",
      {
        "d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "droplets" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Fence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
      }
    ],
    ["path", { "d": "M6 8h4" }],
    ["path", { "d": "M6 18h4" }],
    [
      "path",
      {
        "d": "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
      }
    ],
    ["path", { "d": "M14 8h4" }],
    ["path", { "d": "M14 18h4" }],
    [
      "path",
      {
        "d": "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "fence" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Grip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "5", "r": "1" }],
    ["circle", { "cx": "19", "cy": "5", "r": "1" }],
    ["circle", { "cx": "5", "cy": "5", "r": "1" }],
    ["circle", { "cx": "12", "cy": "12", "r": "1" }],
    ["circle", { "cx": "19", "cy": "12", "r": "1" }],
    ["circle", { "cx": "5", "cy": "12", "r": "1" }],
    ["circle", { "cx": "12", "cy": "19", "r": "1" }],
    ["circle", { "cx": "19", "cy": "19", "r": "1" }],
    ["circle", { "cx": "5", "cy": "19", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "grip" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hammer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"
      }
    ],
    ["path", { "d": "m18 15 4-4" }],
    [
      "path",
      {
        "d": "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hammer" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hard_hat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
      }
    ],
    [
      "path",
      {
        "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
      }
    ],
    ["path", { "d": "M4 15v-3a6 6 0 0 1 6-6" }],
    ["path", { "d": "M14 6a6 6 0 0 1 6 6v3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hard-hat" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Landmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "22",
        "y2": "22"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6",
        "y1": "18",
        "y2": "11"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "18",
        "y2": "11"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "18",
        "y2": "11"
      }
    ],
    [
      "line",
      {
        "x1": "18",
        "x2": "18",
        "y1": "18",
        "y2": "11"
      }
    ],
    ["polygon", { "points": "12 2 20 7 4 7" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "landmark" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Layers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      {
        "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
      }
    ],
    [
      "path",
      {
        "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "layers" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paint_roller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "6",
        "x": "2",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "6",
        "x": "8",
        "y": "16",
        "rx": "1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paint-roller" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paintbrush = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m14.622 17.897-10.68-2.913" }],
    [
      "path",
      {
        "d": "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
      }
    ],
    [
      "path",
      {
        "d": "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paintbrush" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Palette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "circle",
      {
        "cx": "13.5",
        "cy": "6.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "17.5",
        "cy": "10.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "8.5",
        "cy": "7.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "6.5",
        "cy": "12.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "path",
      {
        "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "palette" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rows_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M21 9H3" }],
    ["path", { "d": "M21 15H3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rows-3" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Tree_pine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
      }
    ],
    ["path", { "d": "M12 22v-3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "tree-pine" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Wrench = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "wrench" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ServicesMegaDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobileStore, $$unsubscribe_isMobileStore;
  $$unsubscribe_isMobileStore = subscribe(isMobileStore, (value) => $isMobileStore = value);
  let { class: classes = "" } = $$props;
  [
    {
      icon: Paint_roller,
      text: routes["exterior-home-painting"].text,
      description: "Durable finishes for the whole exterior",
      href: routes["exterior-home-painting"].href
    },
    {
      icon: Hard_hat,
      text: "Paint Contractor",
      description: "Your trusted exterior paint contractor",
      href: routes["exterior-paint-contractor"].href
    },
    {
      icon: Landmark,
      text: routes["historic-house-painting"].text,
      description: "Restoration-grade care for older homes",
      href: routes["historic-house-painting"].href
    },
    {
      icon: Building_2,
      text: routes["commercial"].text,
      description: "Exterior painting for business properties",
      href: routes["commercial"].href
    },
    {
      icon: Box,
      text: routes["hardie-painting"].text,
      description: "Primed, prepped & sprayed to last",
      href: routes["hardie-painting"].href
    },
    {
      icon: Wrench,
      text: routes["hardie-installation"].text,
      description: "Painting, repair, trim & installation",
      href: routes["hardie-installation"].href
    },
    {
      icon: Rows_3,
      text: routes["aluminum-painting"].text,
      description: "Factory-fresh color for metal siding",
      href: routes["aluminum-painting"].href
    },
    {
      icon: Hammer,
      text: routes["aluminum-repair"].text,
      description: "Dents & weathered panels repaired",
      href: routes["aluminum-repair"].href
    },
    {
      icon: Tree_pine,
      text: routes["cedar-painting"].text,
      description: "Finishes that let cedar shine",
      href: routes["cedar-painting"].href
    },
    {
      icon: Fence,
      text: routes["cedar-repair"].text,
      description: "Rot & weather damage repaired",
      href: routes["cedar-repair"].href
    },
    {
      icon: Paintbrush,
      text: routes["vinyl-painting"].text,
      description: "Safe, lasting color updates for vinyl",
      href: routes["vinyl-painting"].href
    },
    {
      icon: Layers,
      text: routes["vinyl-repair"].text,
      description: "Cracked & warped panels replaced",
      href: routes["vinyl-repair"].href
    },
    {
      icon: Brick_wall,
      text: routes["brick-painting-repair"].text,
      description: "Refresh & seal brick and masonry",
      href: routes["brick-painting-repair"].href
    },
    {
      icon: Grip,
      text: routes["stucco-painting-repair"].text,
      description: "Patch, finish & paint stucco walls",
      href: routes["stucco-painting-repair"].href
    },
    {
      icon: Droplets,
      text: routes["gutters"].text,
      description: "Seamless gutters cut on-site",
      href: routes["gutters"].href
    },
    {
      icon: Palette,
      text: "Free Color Consultation",
      description: "On-site color & design guidance",
      href: routes["design-consultation"].href
    }
  ];
  let open = false;
  let closeTimer;
  onDestroy(() => clearTimeout(closeTimer));
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  $$unsubscribe_isMobileStore();
  return `  <li${add_attribute("class", cn("lg:static relative group", classes), 0)}><div class="lg:p-0 text-white h-full flex items-center lg:justify-start justify-between py-4 relative"><a${add_attribute("href", routes["services"].href, 0)}${add_attribute("aria-expanded", open, 0)} class="${escape("", true) + " lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"}">${escape(routes["services"].text)}  <span class="${escape("", true) + " lg:inline-flex hidden transition-transform duration-150"}">${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, { class: "lg:size-5 size-6 rotate-90 m-0" }, {}, {})}</span></a>  ${$isMobileStore ? `<button>${validate_component(ArrowIcon, "ArrowIcon").$$render(
    $$result,
    {
      class: "rotate-90 lg:hidden lg:size-5 size-8 m-0 inline duration-200"
    },
    {},
    {}
  )}</button>` : ``}</div> ${``}</li>`;
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
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: aboutUsRoutes["testimonials"] }, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { data: aboutUsRoutes["faq"] }, {}, {})}`;
      }
    }
  )}  ${validate_component(ServicesMegaDropdown, "ServicesMegaDropdown").$$render($$result, {}, {}, {})}  ${validate_component(Dropdown, "Dropdown").$$render($$result, { data: aboutUsRoutes["service-area"] }, {}, {
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
  )}  ${validate_component(NavItem, "NavItem").$$render(
    $$result,
    {
      data: aboutUsRoutes["blog"],
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
