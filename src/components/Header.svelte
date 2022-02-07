<script>
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  import Link from "./Link.svelte";
  import Logo from "./Logo.svelte";

  let isMenuShown = true;
  let isMenuBtnShown = false;

  let handleResize = () => {
    if (document.body.clientWidth < 600) {
      isMenuShown = false;
      isMenuBtnShown = true;
    } else {
      isMenuShown = true;
      isMenuBtnShown = false;
    }
  };

  onMount(() => {
    handleResize();
  });
</script>

<svelte:window on:resize={handleResize} />

<header>
  <a class="toMain" in:fade={{ duration: 600 }} href="/">
    <Logo width={100} height={33} />
  </a>
  {#if isMenuBtnShown}
    <button
      class="navToggle"
      on:click={() => (isMenuShown = !isMenuShown)}
      aria-pressed={isMenuShown}
    >
      <svg width="40" height="40" fill="currentColor" viewbox="0 0 10 10">
        <line
          class="move-left"
          x1="1"
          y1="2"
          x2="9"
          y2="2"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="5"
          x2="9"
          y2="5"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <line
          class="move-right"
          x1="1"
          y1="8"
          x2="9"
          y2="8"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </svg>
    </button>
  {/if}
  {#if isMenuShown}
    <ul class="menu">
      <li in:fade={{ duration: 600 }}>
        <Link href="/about">О себе</Link>
      </li>
      <li in:fade={{ duration: 600, delay: 100 }}>
        <Link href="/skills">Навыки</Link>
      </li>
      <li in:fade={{ duration: 600, delay: 200 }}>
        <Link href="/experience">Опыт</Link>
      </li>
      <li in:fade={{ duration: 600, delay: 300 }}>
        <Link href="/education">Образование</Link>
      </li>
    </ul>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 25px;

    color: var(--text-color);
  }
  .toMain {
    transition: opacity 0.2s ease-in-out;
    outline: none;
  }

  .toMain:hover,
  .toMain:focus,
  .toMain:active {
    opacity: 0.6;
  }

  .menu {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .menu li:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    .toMain {
      z-index: 100;
    }

    .navToggle {
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--text-color);

      background-color: transparent;

      border: none;
    }

    .move-left,
    .move-right {
      transition: transform 0.2s ease-in-out;
    }

    .navToggle[aria-pressed="true"] .move-left {
      transform: translateX(-50%);
    }

    .navToggle[aria-pressed="true"] .move-right {
      transform: translateX(50%);
    }

    .menu {
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      flex-direction: column;
      padding: 1em;
      padding-top: 89px;

      background-color: var(--body-background);
    }

    .menu li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
</style>
