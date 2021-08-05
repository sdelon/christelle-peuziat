<script>
    import "../app.postcss"
    import Header from '$lib/Header/Index.svelte'
    import Footer from '$lib/Footer.svelte'
</script>

<Header />
<main class="bg-rose-light">
	<slot />
</main>
<Footer />