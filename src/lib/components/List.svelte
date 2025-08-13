<script lang="ts">
	let { items }: { items: any } = $props()
</script>

<ul class="flex gap-1">
	{#each items as item}
		<li>
			<a href={item.url}>{item.title}</a>
		</li>
	{/each}
</ul>
