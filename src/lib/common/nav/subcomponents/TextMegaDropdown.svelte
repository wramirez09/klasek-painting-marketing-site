<script lang="ts">
  import ArrowIcon from "$lib/images/icons/ArrowIcon.svelte";
  import { slide } from "svelte/transition";
  import { isMobileStore } from "$lib/stores/isMobileStore";
  import { onNavigate } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { cn } from "$lib/common/utils";
  import type { ComponentType } from "svelte";
  import type { Link } from "$lib/common/routing/routing";

  type Item = Link & { icon?: ComponentType };

  // Trigger link (top-level nav entry) and the list of child links shown
  // in the panel. `heading` is the small uppercase section label.
  // Items may optionally carry an `icon` component.
  export let trigger: Link;
  export let items: Item[];
  export let heading: string;
  let classes = "";
  export { classes as class };

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

<!-- Text (icon-less) mega dropdown -->
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
      href={trigger.href}
      aria-expanded={open}
      class="{open
        ? 'lg:underline'
        : ''} lg:hover:underline underline-offset-2 font-semibold lg:text-lg text-2xl whitespace-nowrap flex items-center"
    >
      {trigger.text}
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
      class="lg:absolute lg:left-0 lg:top-full lg:pt-3 lg:w-[760px] lg:max-w-[calc(100vw-2rem)] size-full lg:size-auto z-50"
    >
      <!-- Card -->
      <div
        class="lg:bg-white bg-secondary lg:border lg:rounded-2xl lg:overflow-hidden lg:flex lg:shadow-[0_28px_70px_rgba(16,14,50,.30),0_4px_14px_rgba(16,14,50,.12)] relative before:absolute before:content-[''] before:inset-0 before:w-[100vw] before:h-full before:bg-secondary lg:before:hidden"
      >
        <div class="lg:flex-1 lg:p-3.5 -mx-6 xs:-mx-10 lg:mx-0 relative">
          <div
            class="lg:px-3 lg:pt-1 pt-3 pb-2 font-extrabold text-[10.5px] tracking-[0.14em] uppercase lg:text-gray-500 text-primary"
          >
            {heading}
          </div>
          <div class="lg:grid lg:grid-cols-4 lg:gap-x-2.5 flex flex-col">
            {#each items as item}
              <a
                href={item.href}
                class="flex items-center gap-3.5 lg:p-3 py-2 rounded-xl lg:hover:bg-off-white transition-colors duration-100 group/item"
              >
                {#if item.icon}
                  <span
                    class="w-11 h-11 rounded-[10px] lg:bg-primary-light/40 lg:text-primary-dark text-primary flex items-center justify-center shrink-0 transition-colors duration-100 group-hover/item:bg-primary-dark group-hover/item:text-white"
                  >
                    <svelte:component
                      this={item.icon}
                      size={21}
                      strokeWidth={1.7}
                    />
                  </span>
                {/if}
                <span
                  class="block font-bold text-[15px] lg:text-secondary-dark text-white transition-colors duration-100 lg:group-hover/item:text-primary-dark"
                >
                  {item.text}
                </span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</li>
