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

<h1 class="font-medium text-3xl">Que quieres aprender hoy?</h1>
<textarea class="bg-white/5 border border-white/10 rounded-md px-3 py-1 w-1/2 my-6"></textarea>

<hr />

<div class="flex items-center justify-center py-12">
	{#if storeMazo.mazo !== null}
		{#each storeMazo.mazo.cartas as carta, index}
			<Card {index} mazo={storeMazo.mazo} pregunta={carta.pregunta} respuesta={carta.respuesta} />
		{/each}
	{/if}
</div>
