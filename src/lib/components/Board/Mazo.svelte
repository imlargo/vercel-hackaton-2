<script lang="ts">
	type Props = {
		titulo?: string;
		subtitulo?: string;
		items?: string[];
	};

	const {
		titulo = 'Fundamentals of JavaScript',
		subtitulo = 'Core concepts and syntax of JavaScript',
		items = ['Variables and Data Types', 'Loops and Conditionals', 'Functions and Scope']
	}: Props = $props();
</script>

<div class="rounded-2xl p-8 border border-purple-100">
	<h5 class="text-xl">{titulo}</h5>
	<p class=" text-zinc-400 font-light">{subtitulo}</p>

	<div class="flex flex-col gap-3 mt-8">
		{#each items as item}
			<div class="flex gap-3 items-center text-lg">
				<i class="bi bi-bookmark text-purple-400"></i>
				<span class="text-zinc-400 font-light">{item}</span>
			</div>
		{/each}
	</div>

	<button class="mt-8 font-light px-4 py-2 border rounded-2xl"> Estudiar </button>
</div>
