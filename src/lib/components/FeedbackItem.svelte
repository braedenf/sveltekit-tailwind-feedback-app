<script lang="ts">
	import { FeedbackStore } from '$lib/stores';
	import type { Feedback, ID } from '$lib/types';
	import Card from './ui/Card.svelte';

	export let item: Feedback;

	function handleDelete(itemId: ID) {
		FeedbackStore.update((currentFeedback) => {
			return currentFeedback.filter((item) => item.id != itemId);
		});
	}
</script>

<Card>
	<div
		class="absolute -top-3 -left-3 w-12 h-12 bg-pink-light text-white font-semibold rounded-full p-[0.6rem] text-center text-xl"
	>
		{item.rating}
	</div>
	<button on:click={() => handleDelete(item.id)} class="absolute top-3 right-3 cursor-pointer">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<p>{item.text}</p>
</Card>
