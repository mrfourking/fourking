<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`api/sections/root`);
    const data = await res.json();

    return {
      links: data.sections,
    };
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import Link from "../components/Link/index.svelte";
  import Logo from "../components/Header/Logo.svelte";

  export let links

  let visible = false;

  onMount(() => {
    visible = true;
    console.log(links)
  });

  onDestroy(() => {
    visible = false;
  });
</script>

<svelte:head>
  <title>FouKing</title>
</svelte:head>

{#if visible}
  <div class="wrapper">
    <div in:fly={{ x: -200, duration: 1000, easing: expoOut }}>
      <Logo />

      <ul class="menu">
        {#each links as link, index}
        <li in:fade={{ duration: 600, delay: 800 + index * 100 }}>
          <Link href={link.id}>{link.title}</Link>
        </li>
        {/each}
      </ul>
    </div>
    <div in:fly={{ x: 200, duration: 1000, easing: expoOut }} class="avatar">
      <img src="img/content/avatar.webp" alt="" />
    </div>
  </div>
{/if}

<style>
  .wrapper {
    width: 100%;
    min-height: calc(100vh - 4em);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 0;
    margin-top: 20px;
    padding: 0;

    text-transform: uppercase;

    list-style: none;
  }

  .menu li:not(:last-child) {
    margin-bottom: 10px;
  }

  .avatar {
    overflow: hidden;
    position: relative;

    width: 320px;
    height: 320px;
    margin-left: 30px;

    object-fit: cover;

    border-radius: 50%;
  }
  .avatar img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-45%, -48%);

    object-fit: cover;
  }

  @media (max-width: 600px) {
    .wrapper {
      flex-direction: column-reverse;
      align-items: center;
    }

    .avatar {
      margin-left: 0;
      margin-bottom: 20px;
      width: 292px;
      height: 292px;
    }
  }
</style>
