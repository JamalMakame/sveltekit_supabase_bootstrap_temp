<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Toaster } from 'svelte-french-toast';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Toaster />

{@render children()}
