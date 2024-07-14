import type { Mazo } from '$lib/types';

class StoreMazo {
	mazo: Mazo | null = $state(null);
	index = $state(0);

	prev() {
		if (this.index === 0) {
			return;
		}

		this.index -= 1;
	}

	next() {
		if (this.mazo === null) {
			return;
		}

		if (this.index === this.mazo.cartas.length - 1) {
			return;
		}

		this.index += 1;
	}

	start(mazo: Mazo) {
		this.mazo = mazo;
		this.index = 0;
	}
}

export const storeMazo = new StoreMazo();
