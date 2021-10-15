<script lang="ts">
	import type { UIThemeOrder, ButtonType } from '$lib/types';
	export let style: UIThemeOrder = 'primary';
	export let disabled = false;
	export let type: ButtonType = 'button';
</script>

<button
	{type}
	class={`${$$props.class} ${
		disabled
			? 'bg-gray-300 text-gray-800 cursor-auto border-none'
			: style === 'primary'
			? 'bg-purple-dark border-purple-light focus:outline-none focus:border-purple-light focus:ring-2 focus:ring-purple-light hover:bg-purple-medium'
			: style === 'secondary'
			? 'bg-pink-light border-pink-medium focus:outline-none focus:border-pink-medium focus:ring-2 focus:ring-pink-medium hover:bg-pink-medium'
			: ''
	} cursor-pointer text-white rounded-full w-24 h-10 shadow-lg transition duration-300 ease-out`}
>
	<slot />
</button>
