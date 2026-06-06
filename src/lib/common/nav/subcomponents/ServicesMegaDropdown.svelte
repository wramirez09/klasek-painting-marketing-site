<script lang="ts">
  import ArrowIcon from "$lib/images/icons/ArrowIcon.svelte";
  import { slide } from "svelte/transition";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import { onNavigate } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { cn } from "$lib/common/utils";
  import { routes } from "$lib/common/routing/routes";
  import {
    PaintRoller,
    HardHat,
    Landmark,
    Building2,
    Box,
    Wrench,
    Rows3,
    Hammer,
    TreePine,
    Fence,
    Paintbrush,
    Layers,
    BrickWall,
    Grip,
    Droplets,
    Palette,
  } from "lucide-svelte";

  let classes = "";
  export { classes as class };

  // All services (parity with the old Exterior Painting + Exterior Repair
  // dropdowns, consolidated where the site uses a combined page).
  // Laid out in pairs: painting left, matching repair right.
  const items = [
    {
      icon: PaintRoller,
      text: routes["exterior-home-painting"].text,
      description: "Durable finishes for the whole exterior",
      href: routes["exterior-home-painting"].href,
    },
    {
      icon: HardHat,
      text: "Paint Contractor",
      description: "Your trusted exterior paint contractor",
      href: routes["exterior-paint-contractor"].href,
    },
    {
      icon: Landmark,
      text: routes["historic-house-painting"].text,
      description: "Restoration-grade care for older homes",
      href: routes["historic-house-painting"].href,
    },
    {
      icon: Building2,
      text: routes["commercial"].text,
      description: "Exterior painting for business properties",
      href: routes["commercial"].href,
    },
    {
      icon: Box,
      text: routes["hardie-painting"].text,
      description: "Primed, prepped & sprayed to last",
      href: routes["hardie-painting"].href,
    },
    {
      icon: Wrench,
      text: routes["hardie-installation"].text,
      description: "Painting, repair, trim & installation",
      href: routes["hardie-installation"].href,
    },
    {
      icon: Rows3,
      text: routes["aluminum-painting"].text,
      description: "Factory-fresh color for metal siding",
      href: routes["aluminum-painting"].href,
    },
    {
      icon: Hammer,
      text: routes["aluminum-repair"].text,
      description: "Dents & weathered panels repaired",
      href: routes["aluminum-repair"].href,
    },
    {
      icon: TreePine,
      text: routes["cedar-painting"].text,
      description: "Finishes that let cedar shine",
      href: routes["cedar-painting"].href,
    },
    {
      icon: Fence,
      text: routes["cedar-repair"].text,
      description: "Rot & weather damage repaired",
      href: routes["cedar-repair"].href,
    },
    {
      icon: Paintbrush,
      text: routes["vinyl-painting"].text,
      description: "Safe, lasting color updates for vinyl",
      href: routes["vinyl-painting"].href,
    },
    {
      icon: Layers,
      text: routes["vinyl-repair"].text,
      description: "Cracked & warped panels replaced",
      href: routes["vinyl-repair"].href,
    },
    {
      icon: BrickWall,
      text: routes["brick-painting-repair"].text,
      description: "Refresh & seal brick and masonry",
      href: routes["brick-painting-repair"].href,
    },
    {
      icon: Grip,
      text: routes["stucco-painting-repair"].text,
      description: "Patch, finish & paint stucco walls",
      href: routes["stucco-painting-repair"].href,
    },
    {
      icon: Droplets,
      text: routes["gutters"].text,
      description: "Seamless gutters cut on-site",
      href: routes["gutters"].href,
    },
    {
      icon: Palette,
      text: "Free Color Consultation",
      description: "On-site color & design guidance",
      href: routes["design-consultation"].href,
    },
  ];

  // Dropdown state
  let open = false;
  let closeTimer: ReturnType<typeof setTimeout> | undefined;

  // Close dropdown on navigation
  onNavigate(() => {
    open = false;
  });

  onDestroy(() => clearTimeout(closeTimer));

  // Open dropdown (desktop hover/focus)
  const openMenu = () => {
    if (!$isMobileStore) {
      clearTimeout(closeTimer);
      open = true;
    }
  };

  // Close dropdown with a short grace delay so diagonal pointer
  // travel into the panel doesn't dismiss it
  const closeMenu = () => {
    if (!$isMobileStore) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => (open = false), 150);
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

  // Close on Escape
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      open = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

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
      aria-expanded={open}
      class="{open
        ? 'lg:underline'
        : ''} lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"
    >
      {routes["services"].text}
      <!-- Desktop caret (rotates while open) -->
      <span
        class="{open
          ? 'lg:rotate-180'
          : ''} lg:inline-flex hidden transition-transform duration-150"
      >
        <ArrowIcon class="lg:size-5 size-6 rotate-90 m-0" />
      </span></a
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
    <!-- Panel: anchored to the header container; pt bridge keeps hover alive -->
    <div
      transition:slide={{ duration: $isMobileStore ? 300 : 0 }}
      class="lg:absolute lg:left-0 lg:top-full lg:pt-3 lg:w-[1180px] lg:max-w-[calc(100vw-2rem)] size-full lg:size-auto z-50"
    >
      <!-- Card -->
      <div
        class="lg:bg-white bg-secondary lg:border lg:rounded-2xl lg:overflow-hidden lg:flex lg:shadow-[0_28px_70px_rgba(16,14,50,.30),0_4px_14px_rgba(16,14,50,.12)] relative before:absolute before:content-[''] before:inset-0 before:w-[100vw] before:h-full before:bg-secondary lg:before:hidden"
      >
        <!-- left: icon grid -->
        <div class="lg:flex-1 lg:p-3.5 relative">
          <div
            class="lg:px-3 lg:pt-1 pt-3 pb-2 font-extrabold text-[10.5px] tracking-[0.14em] uppercase lg:text-gray-500 text-primary"
          >
            Painting &amp; repair services
          </div>
          <div class="lg:grid lg:grid-cols-4 lg:gap-x-2.5 flex flex-col">
            {#each items as item}
              <a
                href={item.href}
                class="flex items-start gap-3.5 lg:p-3 py-2 rounded-xl lg:hover:bg-off-white transition-colors duration-100 group/item"
              >
                <span
                  class="w-11 h-11 rounded-[10px] lg:bg-primary-light/40 bg-white/10 lg:text-primary-dark text-primary flex items-center justify-center shrink-0 transition-colors duration-100 group-hover/item:bg-primary-dark group-hover/item:text-white"
                >
                  <svelte:component
                    this={item.icon}
                    size={21}
                    strokeWidth={1.7}
                  />
                </span>
                <span>
                  <span
                    class="block font-bold text-[15px] lg:text-secondary-dark text-white transition-colors duration-100 lg:group-hover/item:text-primary-dark"
                  >
                    {item.text}
                  </span>
                  <span
                    class="block text-[12.5px] leading-snug lg:text-gray-500 text-white/60 mt-0.5"
                  >
                    {item.description}
                  </span>
                </span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</li>
