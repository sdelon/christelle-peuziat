<script context="module">
    export async function load({ fetch }) {
        const { agenda, events } = await fetch('/api/agenda').then(res => res.json())

        return {
            props: {
                agenda,
                events
            }
        }
    }
</script>

<script>
    import PrismicDom from "prismic-dom"
    import BandeauHeading from "$lib/UI/Bandeau-heading.svelte"
    import Event from "$lib/UI/Event.svelte"
    import BtnReadMore from "$lib/UI/Btn-read-more.svelte"
    import BandeauCTA from "$lib/UI/Bandeau-cta.svelte"
    import nautile from '/static/assets/nautile-dore-smoke.png'

    export let agenda, events
    let y, currentEvents = 1
</script>

<svelte:window bind:innerWidth={y}/>

<BandeauHeading 
titre={PrismicDom.RichText.asText(agenda.data.titre_agenda)}
intro={agenda.data.intro}
font_size="text-6xl"
is_main_title={true}
border_left="50%"
border_transform="-50%" />
<section class="layout-container pt-20 flex flex-col space-y-16">
    {#each events as event, i}
        <Event
        is_last_event={i === events.length - 1 ? true : false}
        {y}
        is_img_left={i % 2 === 0 ? true : false}
        {event} />
    {/each}
    {#if currentEvents < events.length}
        <BtnReadMore 
        {currentEvents}
        nbOfPostsToLoad=6 />
    {/if}
</section>
<section class="layout-container pt-16 pb-8 lg:pb-12 grid grid-cols-1 md:grid-cols-3 space-y-10 md:space-y-0 md:space-x-10">
    {#each agenda.data.body as slice}
    {#if slice.slice_type === "details_pratiques_des_evenements"}
        {#each slice.items as item}
        <div>
            <img class="pb-2" src={nautile} alt="nautile logo"/>
            <h3 class="font-bold text-xl text-gray-800">{PrismicDom.RichText.asText(item.titre)}</h3>
            <div class="prose">{@html PrismicDom.RichText.asHtml(item.explication)}</div>
        </div>
        {/each}
    {/if}    
    {/each}
</section>
{#each agenda.data.body as slice}
    {#if slice.slice_type === "bandeau_de_rappel"}
    <BandeauCTA accroche={PrismicDom.RichText.asText(slice.items[0].texte_accroche)}/>
    {/if}
{/each}