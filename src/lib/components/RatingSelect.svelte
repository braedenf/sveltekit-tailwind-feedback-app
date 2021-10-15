<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { range } from '$lib/helpers';

	let selected = 10;

	const dispatch = createEventDispatcher();

	function onChange(i: number) {
		selected = i;
		dispatch('rating-select', selected);
	}
</script>

<ul class="flex flex-wrap items-center justify-start md:justify-around mx-4 mb-7 gap-2">
	{#each range(1, 10) as i}
		<li
			class="relative bg-gray-200 w-12 h-12 p-2 text-center rounded-full text-lg transition duration-300 hover:bg-pink-light hover:text-gray-200"
		>
			<input
				class="hidden peer"
				type="radio"
				id="num{i}"
				name="rating"
				value={i}
				on:change={() => onChange(i)}
				checked={selected === i}
			/><label
				class="absolute top-0 left-0 w-12 h-12 p-[0.6rem] rounded-full cursor-pointer bg-none peer-checked:text-gray-200 peer-checked:bg-pink-light font-bold"
				for="num{i}">{i}</label
			>
		</li>
	{/each}
</ul>
