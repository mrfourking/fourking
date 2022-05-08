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
	import { stores } from "@sapper/app";
	import Header from "../components/Header/index.svelte";

	export let links

	const { page } = stores();
</script>

{#if $page.path !== "/"}
	<Header {links} />
{/if}

<main>
	<slot />
</main>

<style>
	@import "../../static/global.css";
	main {
		position: relative;
		max-width: 1440px;
		min-height: calc(100vh - 89px);
		height: 1px;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width: 600px) {
		main {
			padding: 1em;
		}
	}
</style>
