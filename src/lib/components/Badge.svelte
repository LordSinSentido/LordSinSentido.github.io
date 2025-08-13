<script lang="ts">
	let { title, items }: { title?: String; items: String[] } = $props()
</script>

<div class="flex w-1/4 min-w-40 flex-col gap-1">
	{#if title}
		<h4 class="font-bold">{title}</h4>
	{/if}
	<div class="flex flex-wrap gap-1">
		{#each items as item}
			<div class="rounded-md border-2 border-neutral-500 px-1.5">
				<p>{item}</p>
			</div>
		{/each}
	</div>
</div>
