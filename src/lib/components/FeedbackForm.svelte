<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';

	import { FeedbackStore } from '$lib/stores';
	import FormInput from './ui/FormInput.svelte';
	import Button from './ui/Button.svelte';
	import Card from './ui/Card.svelte';
	import RatingSelect from '$lib/components/RatingSelect.svelte';
	import type { Feedback } from '$lib/types';

	let submitBtnDisabled = true;
	let formText = '';
	let rating: number = 10;
	let minInputLength = 10;
	let message: string | null;

	function handleInput() {
		if (formText.trim().length <= minInputLength) {
			message = `Text must be at least ${minInputLength} characters`;
			submitBtnDisabled = true;
		} else {
			message = null;
			submitBtnDisabled = false;
		}
	}

	function handleRatingSelect(e: CustomEvent<number>) {
		rating = e.detail;
	}

	function handleSubmit() {
		if (formText.trim().length > minInputLength) {
			const newFeedback: Feedback = {
				id: uuidv4(),
				rating,
				text: formText
			};
			FeedbackStore.update((currentFeedback) => {
				return [newFeedback, ...currentFeedback];
			});
			formText = '';
		}
	}
</script>

<Card>
	<header class="py-12">
		<h2 class="text-center text-2xl font-bold">How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<!-- Rating Select -->
		<RatingSelect on:rating-select={handleRatingSelect} />
		<div class="flex justify-between">
			<FormInput
				on:input={handleInput}
				class="w-[80%]"
				bind:value={formText}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button type="submit" disabled={submitBtnDisabled} style="primary">Send</Button>
		</div>
		{#if message}
			<label
				class="inline-block w-full text-center mt-3 font-semibold text-purple-medium"
				for="FeedbackForm"
			>
				{message}
			</label>
		{/if}
	</form>
</Card>
