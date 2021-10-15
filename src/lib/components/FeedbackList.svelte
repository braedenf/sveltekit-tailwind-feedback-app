<script lang="ts">
	import { FeedbackStore } from '$lib/stores';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import FeedbackItem from './FeedbackItem.svelte';
</script>

{#each $FeedbackStore as fbItem (fbItem.id)}
	<div animate:flip={{ duration: 450 }} in:scale={{ duration: 500 }} out:fade={{ duration: 300 }}>
		<FeedbackItem item={fbItem} />
	</div>
{/each}
