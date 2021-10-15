<script lang="ts">
	import { FeedbackStore } from '$lib/stores';
	import FeedbackForm from './FeedbackForm.svelte';

	$: count = $FeedbackStore.length;
	$: average = (
		$FeedbackStore.reduce((a, { rating }) => a + rating, 0) / $FeedbackStore.length
	).toFixed(2);
</script>

<div class="flex justify-between items-center text-white font-bold text-lg">
	<h4>{count} Reviews</h4>

	{#if count > 0}
		<h4>Ratings Average: {average}</h4>
	{/if}
</div>
