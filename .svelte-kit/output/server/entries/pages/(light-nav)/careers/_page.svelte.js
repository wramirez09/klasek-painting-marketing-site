import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/button.js";
import { h as heroPhoto } from "../../../../chunks/klasek-painting-professional-exterior-painters.js";
const inputClass = "w-full rounded-md border border-gray-300 px-3 py-2 text-secondary-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass = "block mb-1 font-semibold text-secondary-dark text-sm";
const CareersApplicationForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSubmitting;
  const empty = {
    name: "",
    email: "",
    phone: "",
    position: "Painter & Repair Technician",
    experience: "",
    availability: "",
    hasTransportation: false,
    authorizedToWork: false,
    message: "",
    company: ""
  };
  let formData = { ...empty };
  let submitStatus = "idle";
  isSubmitting = submitStatus === "submitting";
  return `<form class="w-full max-w-screen-sm mx-auto flex flex-col gap-5" novalidate>${``} ${``}  <div class="absolute -left-[9999px]" aria-hidden="true"><label for="company" data-svelte-h="svelte-53r700">Company</label> <input id="company" name="company" type="text" tabindex="-1" autocomplete="off"${add_attribute("value", formData.company, 0)}></div> <div class="grid sm:grid-cols-2 gap-5"><div><label${add_attribute("class", labelClass, 0)} for="name">Full Name *</label> <input id="name" type="text"${add_attribute("class", inputClass, 0)} required maxlength="80"${add_attribute("value", formData.name, 0)}></div> <div><label${add_attribute("class", labelClass, 0)} for="phone">Phone *</label> <input id="phone" type="tel"${add_attribute("class", inputClass, 0)} required maxlength="30"${add_attribute("value", formData.phone, 0)}></div></div> <div class="grid sm:grid-cols-2 gap-5"><div><label${add_attribute("class", labelClass, 0)} for="email">Email</label> <input id="email" type="email"${add_attribute("class", inputClass, 0)} maxlength="100"${add_attribute("value", formData.email, 0)}></div> <div><label${add_attribute("class", labelClass, 0)} for="position">Position</label> <select id="position"${add_attribute("class", inputClass, 0)}><option value="Painter &amp; Repair Technician" data-svelte-h="svelte-1wd45ia">Painter &amp; Repair Technician</option><option value="Painter" data-svelte-h="svelte-1rnw27r">Painter</option><option value="Repair / Carpentry" data-svelte-h="svelte-g6uc66">Repair / Carpentry</option><option value="Other" data-svelte-h="svelte-mbih9o">Other</option></select></div></div> <div class="grid sm:grid-cols-2 gap-5"><div><label${add_attribute("class", labelClass, 0)} for="experience">Years of Experience</label> <input id="experience" type="text"${add_attribute("class", inputClass, 0)} placeholder="e.g. 5 years" maxlength="50"${add_attribute("value", formData.experience, 0)}></div> <div><label${add_attribute("class", labelClass, 0)} for="availability">Availability</label> <input id="availability" type="text"${add_attribute("class", inputClass, 0)} placeholder="e.g. Full-time, can start immediately" maxlength="100"${add_attribute("value", formData.availability, 0)}></div></div> <div class="flex flex-col gap-3"><label class="flex items-center gap-3 text-secondary-dark"><input type="checkbox" class="size-4 accent-primary"${add_attribute("checked", formData.hasTransportation, 1)}>
      I have reliable transportation to job sites</label> <label class="flex items-center gap-3 text-secondary-dark"><input type="checkbox" class="size-4 accent-primary"${add_attribute("checked", formData.authorizedToWork, 1)}>
      I am legally authorized to work in the U.S.</label></div> <div><label${add_attribute("class", labelClass, 0)} for="message">Tell us about your experience</label> <textarea id="message" class="${escape(inputClass, true) + " min-h-[120px]"}" placeholder="Painting, siding, stucco, carpentry, references, etc.">${escape(formData.message || "")}</textarea></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      class: "w-full sm:w-auto",
      disabled: isSubmitting
    },
    {},
    {
      default: () => {
        return `${escape(isSubmitting ? "Submitting…" : "Submit Application")}`;
      }
    }
  )}</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const benefits = [
    {
      title: "Competitive pay",
      copy: "$18–$35/hour based on experience and skill — paid fairly for quality work.",
      icon: "dollar"
    },
    {
      title: "Steady, seasonal work",
      copy: "Full-time and part-time hours available throughout the busy painting season.",
      icon: "calendar"
    },
    {
      title: "Work with pros",
      copy: "Join a tight-knit crew of experienced painters who care about doing the job right.",
      icon: "team"
    },
    {
      title: "Local routes",
      copy: "Job sites across Lyons and the western/southwestern suburbs — no long-haul travel.",
      icon: "pin"
    }
  ];
  const duties = [
    "Exterior painting — prep, prime, brush, roll, and spray",
    "Surface repair on siding, stucco, brick, drywall, and wood",
    "Carpentry repairs, caulking, patching, and trim work",
    "Surface cleaning, sanding, masking, and protecting work areas",
    "Communicate professionally and respectfully with homeowners on every job"
  ];
  const requirements = [
    "Proven painting experience (residential exterior a plus)",
    "Quality repairs — siding, stucco, drywall, and basic carpentry",
    "Comfortable on ladders & scaffolding; able to lift 50+ lbs",
    "Reliable transportation — sites vary day to day",
    "Your own basic hand tools & a valid driver's license",
    "Strong work ethic, attention to detail, and pride in your craft",
    "Bilingual (English/Spanish) a plus"
  ];
  const details = [
    {
      label: "Pay",
      value: "$18–$35 / hour",
      sub: "based on experience",
      icon: "dollar"
    },
    {
      label: "Status",
      value: "1099 Independent Contractor",
      sub: "you handle your own taxes & insurance",
      icon: "check-doc"
    },
    {
      label: "Schedule",
      value: "Full-time & part-time",
      sub: "steady seasonal work",
      icon: "clock"
    },
    {
      label: "Locations",
      value: "Lyons & nearby suburbs",
      sub: "western/southwestern Chicago",
      icon: "pin"
    }
  ];
  return ` <section class="hero-gradient text-white overflow-hidden relative"><div class="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true"></div> <div class="container p-y p-x relative grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-center"><div class="order-2 lg:order-1"><span class="inline-flex items-center gap-2 bg-primary text-white font-bold text-xs uppercase tracking-[0.14em] px-4 py-1.5 rounded-md mb-5" data-svelte-h="svelte-1qhm16w"><span class="size-2 rounded-full bg-white animate-pulse"></span>
        Now Hiring · Lyons, IL &amp; suburbs</span> <h1 class="lg:text-5xl xs:text-4xl text-3xl font-bold !leading-[1.05]" data-svelte-h="svelte-fcrfl9">Build a career with <span class="text-primary">the best crew</span> in
        the suburbs.</h1> <p class="mt-5 lg:text-lg text-base text-white/75 max-w-xl" data-svelte-h="svelte-1hbixnc">Klasek Painting has served Lyons and the western Chicago suburbs for 30+
        years. We&#39;re growing — and looking for skilled, dependable people who
        take real pride in their work.</p> <div class="mt-8 flex flex-wrap items-center gap-4">${validate_component(Button, "Button").$$render($$result, { href: "#positions" }, {}, {
    default: () => {
      return `View Open Positions`;
    }
  })}</div> <div class="mt-9 grid grid-cols-3 gap-4 max-w-lg" data-svelte-h="svelte-1fi0vkb"><div><div class="font-bold text-3xl text-primary">30+</div> <div class="text-sm text-white/60 leading-tight mt-1">Years in business</div></div> <div><div class="font-bold text-3xl text-primary">$18–35</div> <div class="text-sm text-white/60 leading-tight mt-1">Per hour, by skill</div></div> <div><div class="font-bold text-3xl text-primary">Seasonal</div> <div class="text-sm text-white/60 leading-tight mt-1">Steady work</div></div></div></div> <div class="order-1 lg:order-2" data-svelte-h="svelte-1ufz3bq"><img${add_attribute("src", heroPhoto, 0)} alt="The Klasek Painting crew at work on an exterior job" class="w-full aspect-[4/5] object-cover rounded-xl ring-4 ring-white/10 shadow-2xl" loading="eager" width="440" height="550"></div></div></section>  <section class="bg-white p-y p-x"><div class="container max-w-screen-lg flex flex-col lg:gap-6 gap-4"><div class="text-center max-w-2xl mx-auto" data-svelte-h="svelte-wqcryc"><span class="inline-block bg-primary text-white font-bold text-xs uppercase tracking-[0.14em] px-4 py-1.5 rounded-md mb-4">Why Klasek</span> <h2 class="lg:text-4xl xs:text-3xl text-2xl font-bold text-secondary-dark">More than a paycheck — a crew that has your back.</h2> <p class="mt-4 lg:text-lg text-base text-gray-600">We treat our people the way we treat our customers: with respect,
        fairness, and high standards. Here&#39;s what you can expect.</p></div> <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">${each(benefits, (benefit) => {
    return `<div class="rounded-2xl border border-gray-200 bg-off-white p-7"><div class="size-12 rounded-xl bg-primary/10 text-primary-dark flex items-center justify-center mb-4">${benefit.icon === "dollar" ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 5h9a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h10"></path></svg>` : `${benefit.icon === "calendar" ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>` : `${benefit.icon === "team" ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg>`}`}`}</div> <h3 class="font-bold text-lg text-secondary-dark">${escape(benefit.title)}</h3> <p class="mt-2 text-gray-600 text-[14.5px] leading-relaxed">${escape(benefit.copy)}</p> </div>`;
  })}</div></div></section>  <section id="positions" class="bg-off-white p-y p-x scroll-mt-20"><div class="container max-w-screen-lg flex flex-col lg:gap-6 gap-4"><div class="text-center" data-svelte-h="svelte-1dc1q26"><h2 class="lg:text-4xl xs:text-3xl text-2xl font-bold text-secondary-dark">Open Positions</h2> <p class="mt-2 text-gray-600">One role open right now — and we&#39;d love to hear from the right person.</p></div> <div class="grid lg:grid-cols-[1fr_330px] gap-7 items-start"> <div class="rounded-2xl bg-white border border-gray-200 shadow-subtle overflow-hidden"><div class="bg-secondary-dark text-white p-7 sm:p-9 relative overflow-hidden" data-svelte-h="svelte-imfh6j"><div class="absolute -right-12 -top-12 size-44 rounded-full bg-primary/15 blur-2xl" aria-hidden="true"></div> <span class="relative inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-bold text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full">Full-time / Part-time</span> <h3 class="relative font-bold lg:text-3xl text-2xl leading-tight mt-4">Experienced Painter &amp; Repair Technician</h3> <p class="relative text-white/70 mt-2 max-w-xl leading-relaxed">A skilled, reliable painter who can also handle repairs — delivering
            clean, detail-oriented work that meets our 100% satisfaction
            standard while representing Klasek professionally with homeowners.</p></div> <div class="p-7 sm:p-9"><h4 class="font-bold text-lg text-secondary-dark flex items-center gap-2.5" data-svelte-h="svelte-c6wsor"><span class="w-1.5 h-5 rounded bg-primary"></span> What you&#39;ll do</h4> <div class="mt-4 grid sm:grid-cols-2 gap-x-7 gap-y-3.5">${each(duties, (duty) => {
    return `<div class="flex items-start gap-3"><span class="flex-none mt-0.5 size-6 rounded-full bg-primary/10 text-primary-dark flex items-center justify-center" data-svelte-h="svelte-1gwbv73"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span> <p class="text-[15px] text-gray-700 leading-snug">${escape(duty)}</p> </div>`;
  })}</div> <h4 class="font-bold text-lg text-secondary-dark flex items-center gap-2.5 mt-9" data-svelte-h="svelte-1xcko6j"><span class="w-1.5 h-5 rounded bg-primary"></span> What we&#39;re looking
            for</h4> <div class="mt-4 grid sm:grid-cols-2 gap-x-7 gap-y-3.5">${each(requirements, (req) => {
    return `<div class="flex items-start gap-3"><span class="flex-none mt-0.5 size-6 rounded-full bg-primary/10 text-primary-dark flex items-center justify-center" data-svelte-h="svelte-1gwbv73"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span> <p class="text-[15px] text-gray-700 leading-snug">${escape(req)}</p> </div>`;
  })}</div> <div class="mt-9 pt-7 border-t border-gray-200 flex flex-wrap items-center gap-4">${validate_component(Button, "Button").$$render($$result, { href: "#apply" }, {}, {
    default: () => {
      return `Apply for This Role`;
    }
  })} <p class="text-sm text-gray-500" data-svelte-h="svelte-wo44px">Serious, dependable applicants only.</p></div></div></div>  <aside class="rounded-2xl bg-white border border-gray-200 shadow-subtle p-6 lg:sticky lg:top-24"><p class="font-bold text-[11px] uppercase tracking-[0.14em] text-gray-500" data-svelte-h="svelte-9gj3gv">The details</p> <dl class="mt-4 space-y-4">${each(details, (detail) => {
    return `<div class="flex items-start gap-3"><span class="flex-none size-9 rounded-lg bg-primary/10 text-primary-dark flex items-center justify-center">${detail.icon === "dollar" ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>` : `${detail.icon === "check-doc" ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>` : `${detail.icon === "clock" ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>` : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`}`}`}</span> <div><dt class="text-xs font-bold uppercase tracking-wide text-gray-500">${escape(detail.label)}</dt> <dd class="font-bold text-secondary-dark text-[15px] leading-tight mt-0.5">${escape(detail.value)} <span class="block text-[13px] font-semibold text-gray-500">${escape(detail.sub)}</span> </dd></div> </div>`;
  })}</dl> ${validate_component(Button, "Button").$$render($$result, { href: "#apply", class: "w-full mt-6" }, {}, {
    default: () => {
      return `Apply Now`;
    }
  })}</aside></div></div></section>  <section id="apply" class="bg-white p-y p-x scroll-mt-20"><div class="container max-w-screen-md flex flex-col lg:gap-6 gap-4"><div class="text-center" data-svelte-h="svelte-zy4pdr"><span class="inline-block bg-primary text-white font-bold text-xs uppercase tracking-[0.14em] px-4 py-1.5 rounded-md mb-4">Apply Now</span> <h2 class="lg:text-4xl xs:text-3xl text-2xl font-bold text-secondary-dark">Tell us about yourself.</h2> <p class="mt-4 lg:text-lg text-base text-gray-600">Send your name, experience, and availability — we&#39;ll be in touch. It
        takes about two minutes.</p></div> <div class="rounded-2xl bg-off-white border border-gray-200 shadow-subtle p-7 sm:p-9">${validate_component(CareersApplicationForm, "CareersApplicationForm").$$render($$result, {}, {}, {})}</div></div></section>  <section class="bg-secondary p-y p-x"><div class="container max-w-screen-sm grid place-items-center gap-3 text-center"><p class="font-bold text-white/70 lg:text-lg text-base" data-svelte-h="svelte-1fxw71n">Ready to join the crew?</p> <h2 class="font-bold lg:text-5xl xs:text-4xl text-3xl text-primary leading-tight" data-svelte-h="svelte-1j2mn51">Apply in two minutes.</h2> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "#apply",
      variant: "outline",
      class: "mt-4"
    },
    {},
    {
      default: () => {
        return `Apply Now`;
      }
    }
  )}</div></section>`;
});
export {
  Page as default
};
