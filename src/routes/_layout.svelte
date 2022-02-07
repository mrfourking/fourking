<script>
	import { stores } from "@sapper/app";
	import Header from "../components/Header.svelte";

	const { page } = stores();

	// import Nav from '../components/Nav.svelte';

	// export let segment;
</script>

{#if $page.path !== "/"}
	<Header />
{/if}
<!-- <Nav {segment}/> -->

<main>
	<slot />
</main>

<style>
	@import "../../static/global.css";
	main {
		position: relative;
		max-width: 56em;
		/* background-color: white; */
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
