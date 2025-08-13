<script lang="ts">
	import type { Component, Snippet } from 'svelte'

	let { icon, title, children }: { icon?: Component; title: String; children?: Snippet } = $props()
</script>

<section class="w-full max-w-2xl">
	<div class="mb-1 flex items-center gap-2">
		{#if icon}
			{@const Icon = icon}
			<Icon class="stroke-zinc-900 dark:stroke-zinc-300 stroke-3" size="18" />
		{/if}
		<h3>{title}</h3>
	</div>
	<hr class="mb-2 w-4/12 border-b-1 border-zinc-900 dark:border-zinc-300" />
	<div class="flex grow flex-col gap-2">
		{@render children?.()}
	</div>
</section>
