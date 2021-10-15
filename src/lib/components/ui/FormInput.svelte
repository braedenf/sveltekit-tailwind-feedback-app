<script lang="ts">
	export let placeholder: string = '';
	export let value = '';
</script>

<input
	bind:value
	on:input
	class="{$$props.class} shadow-lg rounded-full text-sm px-4 focus:outline-none border-2 border-gray-100 focus:border-pink-light focus:ring-1 focus:ring-pink-light transition duration-200 ease-out"
	type="text"
	{placeholder}
/>
