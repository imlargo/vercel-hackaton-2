<script lang="ts">
	import Carrousel from '$src/lib/components/Board/Carrousel.svelte';
	import Mazo from '$components/Board/Mazo.svelte';
</script>

<section class="grd"></section>

<main>
	<h1 class="font-medium text-3xl mb-2">Mazos generados</h1>
	<p class="text-zinc-400">Flashcards generated from your class notes.</p>

	<div class="grid grid-cols-3 mt-7 gap-6">
		<Mazo />
		<Mazo />
		<Mazo />
	</div>
</main>

<section class="py-32">
	<Carrousel />
</section>
<!--



-->
