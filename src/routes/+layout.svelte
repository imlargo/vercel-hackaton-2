<script>
	import '$styles/app.scss';
	import Nav from '$lib/components/UI/Nav.svelte';
	import Footer from '$lib/components/UI/Footer.svelte';
</script>


<div class="page-container">
	<Nav />
</div>

<main class="page-container py-24">
	<slot />
</main>

<div class="page-container">
	<Footer />
</div>
