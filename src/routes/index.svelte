<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import FeedbackForm from '$lib/components/FeedbackForm.svelte';
	import FeedbackList from '$lib/components/FeedbackList.svelte';
	import FeedbackStats from '$lib/components/FeedbackStats.svelte';
</script>

<main>
	<Container>
		<FeedbackForm />
		<FeedbackStats />
		<FeedbackList />
	</Container>
</main>
