<script lang="ts">
  import ArrowIcon from "$lib/images/icons/ArrowIcon.svelte";
  import { slide } from "svelte/transition";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import { onNavigate } from "$app/navigation";
  import { cn } from "$lib/common/utils";
  import { routes } from "$lib/common/routing/routes";
  import exteriorPainting from "$images/services/exterior-home-painting.webp?enhanced&w=96";
  import paintContractor from "$images/services/exterior-paint-contractor.webp?enhanced&w=96";
  import historicHouse from "$images/services/historic-house-painting.webp?enhanced&w=96";
  import commercial from "$images/services/exterior-commercial-painting-service.webp?enhanced&w=96";
  import sidingPaintingRepair from "$images/services/siding-painting-repair-services.webp?enhanced&w=96";
  import hardiePainting from "$images/services/hardie-board-siding-painting-before-after-service.webp?enhanced&w=96";
  import aluminumPainting from "$images/services/aluminum-siding-painting-service.webp?enhanced&w=96";
  import cedarPainting from "$images/services/cedar-siding-painting-service.webp?enhanced&w=96";
  import vinylPainting from "$images/services/vinyl-painting-service.webp?enhanced&w=96";
  import hardieRepair from "$images/services/hardie-board-siding-repair-service.webp?enhanced&w=96";
  import aluminumRepair from "$images/services/aluminum-siding-repair-service.webp?enhanced&w=96";
  import cedarRepair from "$images/services/cedar-siding-repair-service.webp?enhanced&w=96";
  import vinylRepair from "$images/services/vinyl-siding-repair-service.webp?enhanced&w=96";
  import brickPaintingRepair from "$images/services/brick-painting-staining-service.webp?enhanced&w=96";
  import brickPainting from "$images/services/brick-painting-service-before-and-after.webp?enhanced&w=96";
  import brickRepair from "$images/services/exterior-brick-repair-service.webp?enhanced&w=96";
  import stuccoPaintingRepair from "$images/services/stucco-painting-repair-services.webp?enhanced&w=96";
  import stuccoPainting from "$images/services/stucco-painting-service.webp?enhanced&w=96";
  import stuccoRepair from "$images/services/stucco-repair-service.webp?enhanced&w=96";
  import gutters from "$images/services/exterior-house-painting-services.webp?enhanced&w=96";
  import designConsultation from "$images/services/design-consultation-service.webp?enhanced&w=96";

  let classes = "";
  export { classes as class };

  // Category groups: 3 columns x 2 rows on desktop
  const groups = [
    {
      heading: "Exterior Painting",
      items: [
        { ...routes["exterior-home-painting"], img: exteriorPainting },
        {
          text: "Paint Contractor",
          href: routes["exterior-paint-contractor"].href,
          img: paintContractor,
        },
        { ...routes["historic-house-painting"], img: historicHouse },
        { ...routes["commercial"], img: commercial },
      ],
    },
    {
      heading: "Siding Painting",
      items: [
        { ...routes["siding-painting-repair"], img: sidingPaintingRepair },
        { ...routes["hardie-painting"], img: hardiePainting },
        { ...routes["aluminum-painting"], img: aluminumPainting },
        { ...routes["cedar-painting"], img: cedarPainting },
        { ...routes["vinyl-painting"], img: vinylPainting },
      ],
    },
    {
      heading: "Siding Repair",
      items: [
        { ...routes["hardie-repair"], img: hardieRepair },
        { ...routes["aluminum-repair"], img: aluminumRepair },
        { ...routes["cedar-repair"], img: cedarRepair },
        { ...routes["vinyl-repair"], img: vinylRepair },
      ],
    },
    {
      heading: "Brick",
      items: [
        { ...routes["brick-painting-repair"], img: brickPaintingRepair },
        {
          text: "Brick Painting",
          href: routes["brick-painting"].href,
          img: brickPainting,
        },
        {
          text: "Brick Repair",
          href: routes["brick-repair"].href,
          img: brickRepair,
        },
      ],
    },
    {
      heading: "Stucco",
      items: [
        { ...routes["stucco-painting-repair"], img: stuccoPaintingRepair },
        { ...routes["stucco-painting"], img: stuccoPainting },
        { ...routes["stucco-repair"], img: stuccoRepair },
      ],
    },
    {
      heading: "Gutters & More",
      items: [
        { ...routes["gutters"], img: gutters },
        { ...routes["design-consultation"], img: designConsultation },
      ],
    },
  ];

  // Dropdown state
  let open = false;

  // Close dropdown on navigation
  onNavigate(() => {
    open = false;
  });

  // Open dropdown
  const openMenu = () => {
    if (!$isMobileStore) {
      open = true;
    }
  };

  // Close dropdown
  const closeMenu = () => {
    if (!$isMobileStore) {
      open = false;
    }
  };

  // Handle focus leave (for keyboard navigation)
  function handleFocusLeave(node: Node, cb: () => void) {
    if ($isMobileStore) return;

    function handleFocusIn() {
      if (!node.contains(document.activeElement)) {
        cb();
      }
    }

    document.addEventListener("focusin", handleFocusIn);

    return {
      destroy() {
        document.removeEventListener("focusin", handleFocusIn);
      },
    };
  }
</script>

<!-- Services mega dropdown -->
<li
  on:mouseenter={openMenu}
  on:mouseleave={closeMenu}
  on:focusin={openMenu}
  use:handleFocusLeave={() => (open = false)}
  class={cn("lg:static relative group", classes)}
>
  <div
    class="lg:p-0 text-white h-full flex items-center lg:justify-start justify-between py-4 relative"
  >
    <a
      href={routes["services"].href}
      class="{open
        ? 'lg:underline'
        : ''} lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"
    >
      {routes["services"].text}
      <!-- Desktop arrow -->
      <ArrowIcon class="lg:inline hidden lg:size-5 size-6 rotate-90 m-0" /></a
    >

    <!-- Mobile arrow button -->
    {#if $isMobileStore}
      <button on:click={() => (open = !open)}>
        <ArrowIcon
          class="{open
            ? '-rotate-90'
            : 'rotate-90'} lg:hidden lg:size-5 size-8 m-0 inline duration-200"
        />
      </button>
    {/if}
  </div>

  {#if open}
    <div
      transition:slide={{ duration: $isMobileStore ? 300 : 0 }}
      class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:w-fit lg:max-w-[calc(100vw-2rem)] size-full lg:size-auto lg:bg-white bg-secondary lg:rounded-b-lg lg:shadow-subtle lg:border lg:border-t-4 lg:border-t-primary z-10"
    >
      <div
        class="lg:grid lg:grid-cols-[repeat(3,max-content)] lg:gap-x-10 lg:gap-y-7 lg:p-7 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto flex flex-col relative before:absolute before:content-[''] before:inset-0 before:w-[100vw] before:h-full before:bg-secondary lg:before:hidden"
      >
        {#each groups as group}
          <div class="relative lg:pt-0 pt-3">
            <p
              class="text-xs font-bold uppercase tracking-[0.12em] lg:text-primary-dark text-primary mb-2 whitespace-nowrap"
            >
              {group.heading}
            </p>
            <ul class="flex flex-col lg:gap-0.5 gap-1">
              {#each group.items as item}
                <li>
                  <a
                    href={item.href}
                    class="flex items-center gap-3 lg:py-1.5 py-2 rounded-md lg:hover:bg-off-white group/item"
                  >
                    <span
                      class="block w-12 h-12 shrink-0 rounded-md overflow-hidden border lg:border-gray-100 border-white/20"
                    >
                      <enhanced:img
                        src={item.img}
                        alt=""
                        loading="lazy"
                        class="w-12 h-12 max-w-none object-cover"
                      />
                    </span>
                    <span
                      class="font-semibold lg:text-[15px] text-lg lg:text-secondary-dark text-white whitespace-nowrap group-hover/item:underline underline-offset-2"
                    >
                      {item.text}
                    </span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</li>
