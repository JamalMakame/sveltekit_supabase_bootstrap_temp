<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/sections/header.svelte';
	import Aside from '$lib/sections/aside.svelte';
	import Footer from '$lib/sections/footer.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Header {data} />
<Aside {data} />
<main id="main" class="main">
	{@render children()}
</main>
<Footer {data} />
