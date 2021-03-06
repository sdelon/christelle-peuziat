<script context="module">
    export async function load({ fetch }) {
        const { soins } = await fetch('/api/soins').then(res => res.json())

        return {
            props: {
                soins
            }
        }
    }
</script>

<script>
    import PrismicDom from "prismic-dom"
    import SeoHead from "$lib/SEOHead.svelte"
    import BandeauHeading from "$lib/UI/Bandeau-heading.svelte"
    import Heading from "$lib/UI/Heading.svelte"
    import BandeauCTA from "$lib/UI/Bandeau-cta.svelte"
    import check from "../../static/assets/vector-check.svg"
    import spirale_bandeau_soins from "../../static/assets/spirale-bandeau-soins.svg"
    import nautile from "../../static/assets/nautile-dore-smoke.png"

    export let soins

    function changeListStyle(node) {
        let list_items = [...node.children]
        .filter(n => n.nodeName === "UL")
        .reduce((items, node) => {
            let nodeItems = [...node.children]
            nodeItems.forEach(li => items.push(li))

            return items
        }, [])

        if(list_items) {
            return list_items.forEach(li => li.style.listStyle = `url(${check}) inside`)
        }

		return {
			destroy() {
				console.log('node is destroyed')
			}
		}
	}
</script>

<SeoHead 
src_to_preload={soins.data.body[0].primary.image.url}
title="Les soins énergétiques | Christelle Peuziat thérapeute"
description="Passer de l'ombre à la lumière avec Christelle Peuziat - magnétiseuse, médium, psycho-énergéticienne | Christelle Peuziat thérapeute"
image=""
alt="" />

<BandeauHeading 
titre={PrismicDom.RichText.asText(soins.data.titre_page)}
intro={soins.data.intro}
font_size="text-6xl"
is_main_title={true}
border_left="50%"
border_transform="-50%" />
<section class="layout-container py-20">
    {#each soins.data.body as slice}
        {#if slice.slice_type === "soin_energetique"}
        <div class="grid grid-cols-1 md:grid-cols-2 pb-16">
            <div>
                <Heading 
                    titre={PrismicDom.RichText.asText(slice.primary.titre_soin)}
                    font_size="text-3xl"
                    position="text-left"
                    border_left="50%"
                    border_transform="-50%" 
                />
                <div use:changeListStyle class="prose">{@html PrismicDom.RichText.asHtml(slice.primary.presentation)}</div>
            </div>
            <div class="hidden md:block">
                <img class="w-full h-auto object-contain" src={slice.primary.image.url} alt={slice.primary.image.alt} />
            </div>
        </div>
        {:else if slice.slice_type === "competences_interconnectees"}
        <Heading 
            titre={PrismicDom.RichText.asText(slice.primary.titre_section)}
            font_size="text-3xl"
            position="text-center"
            border_left="50%"
            border_transform="-50%" />
        <div class="prose text-center mx-w-md mx-auto pb-16">{@html PrismicDom.RichText.asHtml(slice.primary.intro_section)}</div>
        <div class="grid grid-cols-1 space-y-12 sm:space-y-0 sm:grid-cols-3 items-center mb-20">
            <div class="space-y-12">
            {#each slice.items as item, i}
                {#if i < slice.items.length / 2}
                <div>
                    <h3 class="font-bold font-serif text-xl text-gray-800">{PrismicDom.RichText.asText(item.nom)}</h3>
                    <div class="prose">{@html PrismicDom.RichText.asHtml(item.description)}</div>
                </div>
                {/if}
            {/each}
            </div>
            <div class="hidden sm:block h-[600px] w-full">
                <img class="w-full h-full object-contain" src={spirale_bandeau_soins} alt="">
            </div>
            <div class="space-y-8">
            {#each slice.items as item, i}
                {#if i >= slice.items.length / 2}
                <div>
                    <h3 class="font-bold font-serif text-xl text-gray-800 sm:text-right">{PrismicDom.RichText.asText(item.nom)}</h3>
                    <div class="prose sm:text-right">{@html PrismicDom.RichText.asHtml(item.description)}</div>
                </div>
                {/if}
            {/each}
            </div>
        </div>
        {:else if slice.slice_type === "transmission"}
        <Heading 
            titre={PrismicDom.RichText.asText(slice.primary.titre_section)}
            font_size="text-3xl"
            position="text-center"
            border_left="50%"
            border_transform="-50%" />
        <div class="prose text-center mx-w-md mx-auto pb-16">{@html PrismicDom.RichText.asHtml(slice.primary.intro_section)}</div>
        <div class="grid grid-cols-1 md:grid-cols-3 space-y-10 md:space-y-0 md:space-x-10">
            {#each slice.items as item}
                <div class="flex md:flex-col space-x-4 md:space-x-0 items-start">
                    <img class="pb-2 w-20 object-contain" src={nautile} alt="nautile logo"/>
                    <div>
                        <h3 class="font-bold text-xl text-gray-800">{PrismicDom.RichText.asText(item.titre_competence)}</h3>
                        <div class="prose">{@html PrismicDom.RichText.asHtml(item.descriptif)}</div>
                    </div>
                </div>
            {/each}
        </div> 
        {/if}
    {/each}
</section>
{#each soins.data.body as slice}
    {#if slice.slice_type === "tarifs"}
<section id="tarifs" class="w-full h-auto bg-gray-900">
    <div class="py-16">
        <Heading
            titre={PrismicDom.RichText.asText(slice.primary.titre_tarifs)}
            is_dark={true}
            font_size="text-5xl"
            position="text-center pb-12"
            border_left="50%"
            border_transform="-50%" />
        <div class="layout-container grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10">
            {#each slice.items as item}
                <div>
                    <h3 class="font-bold text-xl text-rose-light">{PrismicDom.RichText.asText(item.choix)}</h3>
                    <div use:changeListStyle class="prose text-rose-light">{@html PrismicDom.RichText.asHtml(item.details)}</div>
                </div>
            {/each}
        </div>
    </div>
</section>
    {/if}
{/each}
{#each soins.data.body as slice}
    {#if slice.slice_type === "bandeau_de_rappel"}
    <BandeauCTA accroche={PrismicDom.RichText.asText(slice.items[0].texte_accroche)}/>
    {/if}
{/each}
