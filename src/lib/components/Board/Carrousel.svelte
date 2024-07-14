<script lang="ts">
	import Card from '$src/lib/components/Board/Card.svelte';
	import type { Mazo } from '$src/lib/types';
	import { storeMazo } from '$src/lib/stores/storeMazo.svelte';

	const mazo: Mazo = {
		nombre: 'Machine Learning',
		cartas: [
			{
				pregunta: '¿Qué es el Machine Learning?',
				respuesta:
					'Es un subcampo de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de la experiencia sin ser programados explícitamente para ello.'
			},
			{
				pregunta: '¿Cómo se diferencia del aprendizaje supervisado?',
				respuesta:
					'El aprendizaje supervisado es un subconjunto del Machine Learning que se basa en la existencia de un conjunto de datos etiquetados.'
			},
			{
				pregunta: '¿Qué es el aprendizaje no supervisado?',
				respuesta:
					'Es un subconjunto del Machine Learning que se basa en la existencia de un conjunto de datos no etiquetados.'
			},
			{
				pregunta: '¿Qué es el aprendizaje por refuerzo?',
				respuesta:
					'Es un subconjunto del Machine Learning que se basa en la existencia de un agente que interactúa con un entorno y recibe recompensas por sus acciones.'
			},
			{
				pregunta: '¿Qué es el aprendizaje profundo?',
				respuesta:
					'Es un subcampo del Machine Learning que se basa en la existencia de redes neuronales artificiales con múltiples capas.'
			}
		]
	};

	storeMazo.start(mazo);
</script>

<div class="flex justify-between"></div>

<div class="grid grid-cols-3 items-center justify-center py-12">
	<button
		onclick={() => {
			storeMazo.prev();
		}}><i class="bi bi-chevron-left"></i></button
	>

	<div>
		{#if storeMazo.mazo !== null}
			{#each storeMazo.mazo.cartas as carta, index}
				{#if index === storeMazo.index}
					<Card
						{index}
						mazo={storeMazo.mazo}
						pregunta={carta.pregunta}
						respuesta={carta.respuesta}
					/>
				{/if}
			{/each}
		{/if}
	</div>
	<button
		onclick={() => {
			storeMazo.next();
		}}><i class="bi bi-chevron-right"></i></button
	>
</div>
