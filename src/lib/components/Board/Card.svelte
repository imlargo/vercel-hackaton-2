<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { Mazo } from '$lib/types';

	type Props = {
		index: number;
		mazo: Mazo;
		pregunta: string;
		respuesta: string;
	};

	const { index, mazo, pregunta, respuesta }: Props = $props();

	function handleClick(e: MouseEvent) {
		const target = e.target;
	}
</script>

<div
	class="flash-card snap-center"
	in:fly={{ x: 30, duration: 600 }}
	out:fly={{ x: -30, duration: 600 }}
>
	<div class="flash-card-inner">
		<div class="flash-card-face flash-card-front">
			<div class="flex justify-between items-center">
				<span class="text-white/75">{mazo.nombre}</span>
				<span class="text-white/75">{index + 1}/{mazo.cartas.length}</span>
			</div>

			<div class="w-10/12 self-center">
				<p class="text-center text-pretty">
					{pregunta}
				</p>
			</div>

			<span></span>
		</div>
		<div class="flash-card-face flash-card-back">
			<div class="flex justify-between items-center">
				<span class="text-white/75">{mazo.nombre}</span>
				<span class="text-white/75">{index + 1}/{mazo.cartas.length}</span>
			</div>

			<p>
				{respuesta}
			</p>
			<div class="grid grid-cols-3 text-sm w-100 gap-x-3">
				<button
					onclick={handleClick}
					class="px-3 py-1.5 text-white font-medium text-center rounded-md bg-pink-400/90"
					>Mal</button
				>
				<button
					onclick={handleClick}
					class="px-3 py-1.5 text-white font-medium text-center rounded-md bg-yellow-400/90"
					>Regular</button
				>
				<button
					onclick={handleClick}
					class="px-3 py-1.5 text-white font-medium text-center rounded bg-lime-400/90">Bien</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.flash-card {
		aspect-ratio: 9/12;

		width: auto;
		height: 30rem;
		perspective: 1000px;

		&:hover .flash-card-inner {
			transform: rotateY(-180deg);
		}
	}

	.flash-card-face {
		@apply flex flex-col justify-between rounded-xl absolute w-full h-full p-6;
		backface-visibility: hidden;
	}

	.flash-card-inner {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 700ms;
	}

	.flash-card-front {
		@apply shadow-lg shadow-purple-400/50;
		background-color: #ad6aec;
		color: #fff;
		transform: rotateY(0deg);
	}

	.flash-card-back {
		@apply shadow-lg shadow-violet-400/50;
		background-color: #906eee;
		color: #fff;
		transform: rotateY(-180deg);
	}
</style>
