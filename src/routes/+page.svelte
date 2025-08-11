<script lang="ts">
	import Header from './Header.svelte'
	import Badge from '$lib/components/Badge.svelte'
	import Card from '$lib/components/Card.svelte'
	import Section from '$lib/components/Section.svelte'
	import {
		LucideAward,
		LucideBookMarked,
		LucideBriefcaseBusiness,
		LucideGraduationCap,
		LucideUser
	} from '@lucide/svelte'

	import aboutMe from '$lib/data/aboutMe.json'
	import latestJobs from '$lib/data/latestJobs.json'
	import educations from '$lib/data/education.json'
	import certifications from '$lib/data/certifications.json'
	import { languages, backend, frontend, tools } from '$lib/data/knowledge.json'
</script>

<div>
	<Header />
	<main class="grid justify-items-center gap-5 px-10 py-5">
		<Section icon={LucideUser} title="About me">
			<p>
				{aboutMe.description}
			</p>
		</Section>

		<Section icon={LucideBookMarked} title="Knowledge">
			<div class="flex gap-2 overflow-y-auto">
				<Badge title="Languages" items={languages} />
				<Badge title="Backend" items={backend} />
				<Badge title="Frontend" items={frontend} />
				<Badge title="Tools" items={tools} />
			</div>
		</Section>

		<Section icon={LucideBriefcaseBusiness} title="Professional experience">
			{#each latestJobs as latestJob}
				<Card
					title={latestJob.job}
					company={latestJob.where}
					startingDate={latestJob.startingDate}
					endingDate={latestJob.endingDate}
					modality={latestJob.modality}
					tasks={latestJob.tasks}
				/>
			{/each}
		</Section>

		<Section icon={LucideGraduationCap} title="Education">
			{#each educations as education}
				<Card
					title={education.degree}
					school={education.location}
					startingDate={education.startingDate}
					endingDate={education.endingDate}
				/>
			{/each}
		</Section>

		<Section icon={LucideAward} title="Certifications">
			{#each certifications as certification}
				<Card
					title={certification.title}
					issuer={certification.by}
					startingDate={certification.obtainedDate}
				/>
			{/each}
		</Section>
	</main>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	:global(html) {
		@apply bg-zinc-300 dark:bg-zinc-900;
	}

	:global(p, h1, h2, h3, h4, span, i, a) {
		@apply leading-[1.15] text-zinc-900 md:subpixel-antialiased dark:text-zinc-300;
	}

	:global(h3) {
		@apply font-[Work_Sans] text-xl font-bold tracking-normal font-stretch-semi-condensed;
	}

	:global(h4) {
		@apply font-bold;
	}

	:global(p) {
		@apply text-justify text-base font-light hyphens-auto text-zinc-900/90 dark:text-zinc-300/90;
	}

	:global(a) {
		@apply font-light underline decoration-dotted underline-offset-3;
	}
</style>
