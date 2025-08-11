<script lang="ts">
	import List from '$lib/components/List.svelte'
	import aboutMe from '$lib/data/aboutMe.json'
	import { Icon, LucideGithub, LucideHouse, LucideLinkedin } from '@lucide/svelte'
</script>

<header class="flex flex-col items-center justify-center gap-5 bg-zinc-400 p-5 dark:bg-zinc-800">
	<div class="flex items-center justify-center gap-4">
		<img
			class="size-18 rounded-md"
			src="https://media.licdn.com/dms/image/v2/D4E03AQGdAZ2YbwtCkw/profile-displayphoto-scale_400_400/B4EZhE2kcbHoAg-/0/1753501813791?e=1756339200&v=beta&t=UOBMsi1WoI77gGnT4rhLYFY24yyDVlWChXJ-hLFRZl8"
			alt="Profile avatar"
		/>
		<div>
			<h1 class="text-2xl font-bold">{aboutMe.firstName} {aboutMe.lastName}</h1>
			<h2 class="text-lg font-normal">{aboutMe.degree}</h2>
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex items-center gap-1">
			<LucideHouse class="stroke-zinc-900 dark:stroke-zinc-300" size="14" />
			<p>{aboutMe.hometown}</p>
		</div>
		<div class="flex items-center gap-1">
			<LucideLinkedin class="stroke-zinc-900 dark:stroke-zinc-300" size="14" />
			<a href="">LinkedIn</a>
		</div>
		<div class="flex items-center gap-1">
			<LucideGithub class="stroke-zinc-900 dark:stroke-zinc-300" size="14" />
			<a href="">GitHub</a>
		</div>
	</div>
</header>
