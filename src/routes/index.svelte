<script context="module">
    export async function load({ fetch }) {
        const { home } = await fetch('/api').then(res => res.json())

        return {
            props: {
                home
            }
        }
    }
</script>

<script>
    import PrismicDom from 'prismic-dom'
    import Hero from '$lib/Hero.svelte'
    import Presentation from '$lib/Presentation.svelte'
    import Heading from '$lib/UI/Heading.svelte'

    export let home

    const { data } = home
</script>

<style>
    .citation { @apply leading-relaxed; }
</style>

<section class="-mt-16 sm:-mt-24 md:-mt-28 pb-2 duration-300">
    <Hero {data} />
</section>
<section class="layout-container">
    <div class="citation max-w-lg ml-auto text-left md:text-right italic font-bold font-serif text-gray-900 text-2xl md:text-3xl duration-300">{@html PrismicDom.RichText.asHtml(data.citation)}</div>
</section>
<section class="layout-container py-20">
    {#each data.body as slice}
        {#if slice.slice_type === "qui_suis-je__"}
        <Presentation {slice}/>
        {/if}
    {/each}
</section>
<section class="layout-container">
    <div class="h-96"></div>
</section>
