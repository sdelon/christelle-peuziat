<script context="module">
    export async function load({ fetch, page }) {
        const { event } = await fetch(`/api/agenda/${page.params.uid}`).then(res => res.json())

        return {
            props: {
                event
            }
        }
    }
</script>

<script>
    import PrismicDom from "prismic-dom"
    import { getDay, getMonth } from '$utils/helpers'
    import SeoHead from "$lib/SEOHead.svelte"
    import Image from "$lib/UI/Image.svelte"
    import BandeauCta from "$lib/UI/Bandeau-cta.svelte"

    export let event
</script>

<style>
    .date {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<SeoHead 
title="{PrismicDom.RichText.asText(event.data.titre)} | Christelle Peuziat"
description="{PrismicDom.RichText.asText(event.data.extrait_description)} | Christelle Peuziat"
image="{event.data.photo.url}"
alt="{event.data.photo.alt}" />

<section class="layout-container relative py-20">
    <div class="w-full h-72 md:h-80 lg:h-96 duration-300 mb-8">
        <h1 class="font-serif font-bold text-5xl text-gray-900 pb-12">{PrismicDom.RichText.asText(event.data.titre)}</h1>
        <Image
        src={event.data.photo.url}
        alt={event.data.photo.url}
        width={event.data.photo.dimensions.width}
        height={event.data.photo.dimensions.height}
        styles="w-full h-72 md:h-80 lg:h-96 object-cover" />
        <div class="flex flex-col justify-center items-center date bg-dore-dark w-32 h-32 duration-300">
            <p class="font-serif font-bold text-6xl pb-4">{getDay(event.data.date_debut)}</p>
            <p class="text-light uppercase tracking-widest">{getMonth(event.data.date_debut)}</p>
        </div>
    </div>
</section>
<article class="layout-container py-20 prose">{@html PrismicDom.RichText.asHtml(event.data.description)}</article>
<BandeauCta 
accroche="Vous souhaitez participer à cet événement, alors réservez dès maintenant votre place"
texte="Réservez votre place" />
