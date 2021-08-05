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
    import CTASection from '$lib/UI/CTA-section.svelte'
    import SingleSoin from '$lib/UI/Single-soin.svelte'

    export let home
    const { data } = home
    let y
</script>

<style>
    .citation { @apply leading-relaxed; }
</style>

<svelte:window bind:innerWidth={y}/>
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
        {:else if slice.slice_type === "les_soins"}
            <div class="pb-32 md:pb-40 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 md:space-y-0 md:space-x-5">
                <div class="flex flex-col space-y-6">
                    <Heading
                        titre={PrismicDom.RichText.asText(slice.primary.titre_soins)}
                        font_size='text-6xl'
                        position='text-left'
                    />
                    <div>{@html PrismicDom.RichText.asHtml(slice.primary.intro_soins)}</div>
                    <CTASection 
                    texte={slice.primary.texte_lien_soins}
                    href="/soins"
                    font_size="text-xl" />
                </div>
                {#if y < 768}
                <SingleSoin {slice} idx=0/>
                <SingleSoin {slice} idx=1/>
                <SingleSoin {slice} idx=2/>
                <SingleSoin {slice} idx=3/>
                {:else if y > 768 && y < 1023}
                <div class="md:flex flex-col space-y-5">
                    <SingleSoin {slice} idx=0/>
                    <SingleSoin {slice} idx=1/>
                    <SingleSoin {slice} idx=2/>
                    <SingleSoin {slice} idx=3/>
                </div>
                {:else if y > 1023}
                <div class="space-y-5">
                    <SingleSoin {slice} idx=0/>
                    <SingleSoin {slice} idx=1/>
                </div>
                <div class="-mt-10 space-y-5">
                    <SingleSoin {slice} idx=2/>
                    <SingleSoin {slice} idx=3/>
                </div>
                {/if}
            </div>
        {/if}
    {/each}
</section>
<section class="layout-container">
    <div class="h-96"></div>
</section>
