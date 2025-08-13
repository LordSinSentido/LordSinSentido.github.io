<script lang="ts">
	import {
		LucideBuilding,
		LucideCalendar,
		LucideFileBadge,
		LucideSchool
	} from '@lucide/svelte'

	let {
		title,
		school,
		company,
		issuer,
		description,
		startingDate,
		endingDate,
		modality,
		tasks
	}: {
		title: String
		school?: String
		company?: String
		issuer?: String
		description?: String
		startingDate?: String
		endingDate?: String
		modality?: String
		tasks?: String[]
	} = $props()

	const iconSize = 12
	const localeDate: Intl.LocalesArgument = 'en-US'
	const dateOptions: Intl.DateTimeFormatOptions = {
		month: 'long',
		year: 'numeric'
	}

	const datesStrings = () => {
		const starting = getDateObject(startingDate)?.toLocaleDateString(localeDate, dateOptions)
		if (!starting) return null
		const ending = getDateObject(endingDate)?.toLocaleDateString(localeDate, dateOptions)
		if (!ending) return starting
		return `${starting} - ${ending}`
	}

	function getDateObject(dateString: String | undefined): Date | null {
		if (dateString) {
			const [monthStr, yearStr] = dateString?.split('-')
			const month: number = parseInt(monthStr, 10)
			const year: number = parseInt(yearStr, 10)

			return new Date(year, month - 1)
		}
		return null
	}
</script>

<div class="flex flex-col gap-1">
	<div class="">
		<div class="flex-no-wrap flex flex-col md:flex-row">
			<h4 class="grow">{title}</h4>
			<div class="flex flex-col">
				{#if datesStrings()}
					<div class="flex items-baseline justify-start gap-1 md:justify-end">
						<LucideCalendar class="stroke-zinc-900 dark:stroke-zinc-300" size="10" />
						<p>{datesStrings()}</p>
					</div>
				{/if}
			</div>
		</div>
		<div>
			{#if company}
				<div class="flex items-baseline gap-1">
					<LucideBuilding class="stroke-zinc-900 dark:stroke-zinc-300" size={iconSize} />
					<p>{company}{modality ? ` (${modality})` : ''}</p>
				</div>
			{/if}
			{#if school}
				<div class="flex items-baseline gap-1">
					<LucideSchool class="stroke-zinc-900 dark:stroke-zinc-300" size={iconSize} />
					<p>{school}</p>
				</div>
			{/if}
			{#if issuer}
				<div class="flex items-baseline gap-1">
					<LucideFileBadge class="stroke-zinc-900 dark:stroke-zinc-300" size={iconSize} />
					<p>{issuer}</p>
				</div>
			{/if}
		</div>
	</div>
	{#if description}
		<p>{description}</p>
	{/if}
	{#if tasks}
		<div>
			{#each tasks as task}
				<p><span>&mdash;</span>&nbsp;{task}</p>
			{/each}
		</div>
	{/if}
</div>
