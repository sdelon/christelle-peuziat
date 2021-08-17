<script context="module">
    export async function load({ fetch }) {
        const { faq } = await fetch('/api/faq').then(res => res.json())

        return {
            props: {
                faq
            }
        }
    }
</script>

<script>
    import PrismicDom from "prismic-dom"
    import SeoHead from "$lib/SEOHead.svelte"
    import spirale from "/static/assets/spirale.svg"
    import QA from "$lib/UI/QA-faq.svelte"
    import BandeauCTA from "$lib/UI/Bandeau-cta.svelte"

    export let faq
</script>

<SeoHead 
title="Foire Aux Questions | Christelle Peuziat"
description="Passer de l'ombre à la lumière avec Christelle Peuziat - magnétiseuse - médium- psycho-énergéticienne | Christelle Peuziat"
image=""
alt="" />

<section class="layout-container relative overflow-hidden">
    <div class="mx-auto sm:pl-14 rotate-90 sm:scale-150 md:scale-[2] max-w-screen h-96 w-80 sm:w-96 opacity-25 duration-300">
        <img src={spirale} alt="logo spirale">
    </div>
    <div class="absolute inset-0 w-full text-center pt-20 z-10">
        <h1 class="uppercase font-medium tracking-widest pb-2">{PrismicDom.RichText.asText(faq.data.titre_page)}</h1>
        <h2 class="font-serif text-5xl font-bold tracking-wide max-w-md mx-auto">{PrismicDom.RichText.asText(faq.data.accroche)}</h2>
    </div>
</section>
<section class="max-w-2xl mx-4 sm:mx-auto sm:mt-28 md:mt-32 pb-20 space-y-10">
    {#each faq.data.body as slice}
    {#if slice.slice_type === "question_reponse"}
        {#each slice.items as item}
        <QA {item} />
        {/each}
    {/if}
    {/each}
</section>
{#each faq.data.body as slice}
    {#if slice.slice_type === "bandeau_de_rappel"}
    <BandeauCTA accroche={PrismicDom.RichText.asText(slice.items[0].texte_accroche)}/>
    {/if}
{/each}