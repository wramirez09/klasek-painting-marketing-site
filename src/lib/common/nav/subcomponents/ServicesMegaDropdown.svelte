<script lang="ts">
  import ArrowIcon from "$lib/images/icons/ArrowIcon.svelte";
  import { slide } from "svelte/transition";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import { onNavigate } from "$app/navigation";
  import { cn } from "$lib/common/utils";
  import { routes } from "$lib/common/routing/routes";

  let classes = "";
  export { classes as class };

  // Category groups: 3 columns x 2 rows on desktop
  const groups = [
    {
      heading: "Exterior Painting",
      items: [
        routes["exterior-home-painting"],
        {
          text: "Paint Contractor",
          href: routes["exterior-paint-contractor"].href,
        },
        routes["historic-house-painting"],
        routes["commercial"],
      ],
    },
    {
      heading: "Siding Painting",
      items: [
        routes["siding-painting-repair"],
        routes["hardie-painting"],
        routes["aluminum-painting"],
        routes["cedar-painting"],
        routes["vinyl-painting"],
      ],
    },
    {
      heading: "Siding Repair",
      items: [
        routes["hardie-repair"],
        routes["aluminum-repair"],
        routes["cedar-repair"],
        routes["vinyl-repair"],
      ],
    },
    {
      heading: "Brick",
      items: [
        routes["brick-painting-repair"],
        { text: "Brick Painting", href: routes["brick-painting"].href },
        { text: "Brick Repair", href: routes["brick-repair"].href },
      ],
    },
    {
      heading: "Stucco",
      items: [
        routes["stucco-painting-repair"],
        routes["stucco-painting"],
        routes["stucco-repair"],
      ],
    },
    {
      heading: "Gutters & More",
      items: [routes["gutters"], routes["design-consultation"]],
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
        class="lg:grid lg:grid-cols-[repeat(3,max-content)] lg:gap-x-12 lg:gap-y-7 lg:p-7 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto flex flex-col relative before:absolute before:content-[''] before:inset-0 before:w-[100vw] before:h-full before:bg-secondary lg:before:hidden"
      >
        {#each groups as group}
          <div class="relative lg:pt-0 pt-3">
            <p
              class="text-xs font-bold uppercase tracking-[0.12em] lg:text-primary-dark text-primary mb-2 whitespace-nowrap"
            >
              {group.heading}
            </p>
            <ul class="flex flex-col lg:gap-0 gap-1">
              {#each group.items as item}
                <li>
                  <a
                    href={item.href}
                    class="block lg:py-1.5 py-2 font-semibold lg:text-[15px] text-lg lg:text-secondary-dark text-white whitespace-nowrap lg:hover:underline underline-offset-2"
                  >
                    {item.text}
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
