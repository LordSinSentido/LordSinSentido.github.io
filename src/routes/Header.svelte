<script lang="ts">
	import aboutMe from '$lib/data/aboutMe.json'
	import { LucideGithub, LucideHouse, LucideLinkedin } from '@lucide/svelte'
</script>

<header class="flex flex-col items-center justify-center pt-3 gap-2 bg-linear-to-t from-zinc-100/0 to-zinc-500/35 dark:from-zinc-900/0 dark:to-zinc-700/50">
	<div class="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2">
		<img
			class="size-14 rounded-md"
			src="https://media.licdn.com/dms/image/v2/D4E03AQGdAZ2YbwtCkw/profile-displayphoto-scale_400_400/B4EZhE2kcbHoAg-/0/1753501813791?e=1756339200&v=beta&t=UOBMsi1WoI77gGnT4rhLYFY24yyDVlWChXJ-hLFRZl8"
			alt="Profile avatar"
		/>
		<div class="text-center md:text-justify">
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
			<a href="https://www.linkedin.com/in/misosa" target="_blank">LinkedIn</a>
		</div>
		<div class="flex items-center gap-1">
			<LucideGithub class="stroke-zinc-900 dark:stroke-zinc-300" size="14" />
			<a href="https://github.com/LordSinSentido" target="_blank">GitHub</a>
		</div>
	</div>
</header>
