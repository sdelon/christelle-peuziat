<script>
    import PrismicDom from 'prismic-dom';
    import CTASection from '$lib/UI/CTA-section.svelte'
    import { getDay, getMonth } from '$utils/helpers'

    export let event, is_img_left, y, is_home_page = false, is_last_event

    $: is_home_page ? event = event.evenement_a_lier.data : event = event.data
</script>

{#if is_img_left || !is_img_left && y <= 767}
<div id={is_last_event} class="w-full flex flex-col md:flex-row relative duration-300">
    <div class="relative z-10 md:w-96 lg:w-[450px] xl:w-[600px] md:max-h-80 max-h-96 object-cover duration-300 md:mb-40 {!is_home_page && is_last_event ? 'md:mb-5 lg:mb-5' : 'lg:mb-24'}">
        <img class="h-72 md:h-full w-full object-cover" src={event.photo.url} alt="illustration de l'événement">
        <div class="hidden sm:flex flex-col justify-center items-center sm:absolute sm:-bottom-12 md:bottom-0 sm:right-0 md:-right-5 lg:-right-12 bg-dore-dark w-32 h-32 duration-300">
            <p class="font-serif font-bold text-6xl pb-4">{getDay(event.date_debut)}</p>
            <p class="text-light uppercase tracking-widest">{getMonth(event.date_debut)}</p>
        </div>
    </div>
    <div class="md:absolute md:top-10 md:right-0 md:ml-auto bg-gray-900 w-full md:w-3/4 lg:w-2/3 xl:w-3/4 p-5 duration-300">
        <div class="flex space-x-2 sm:hidden bg-dore-dark w-full p-5 duration-300 mb-4 uppercase tracking-widest text-xl text-gray-800">
            <p class="font-bold">{getDay(event.date_debut)}</p>
            <p>{getMonth(event.date_debut)}</p>
        </div>
        <div class="w-full md:w-64 lg:w-96 lg:h-80 ml-auto flex flex-col justify-center space-y-10 md:text-right duration-300">
            <h2 class="text-gray-100 font-serif text-5xl font-bold">{PrismicDom.RichText.asText(event.titre)}</h2>
            <div class="text-gray-100 prose flex-grow">{@html PrismicDom.RichText.asHtml(event.extrait_description)}</div>
            <CTASection
            position="mr-auto md:mr-0 md:ml-auto"
            texte="En savoir plus"
            href="/agenda/{event.uid}" />
        </div>
    </div>
</div>
{:else}
<div id={is_last_event} class="w-full flex flex-col md:flex-row relative duration-300">
    <div class="md:absolute md:top-10 md:left-0 md:mr-auto bg-gray-900 w-full md:w-3/4 lg:w-2/3 xl:w-3/4 p-5 duration-300">
        <div class="flex space-x-2 sm:hidden bg-dore-dark w-full p-5 duration-300 mb-4 uppercase tracking-widest text-xl text-gray-800">
            <p class="font-bold">{getDay(event.date_debut)}</p>
            <p>{getMonth(event.date_debut)}</p>
        </div>
        <div class="w-full md:w-64 lg:w-96 lg:h-80 mr-auto flex flex-col justify-center space-y-10 md:text-left duration-300">
            <h2 class="text-gray-100 font-serif text-5xl font-bold">{PrismicDom.RichText.asText(event.titre)}</h2>
            <div class="text-gray-100 prose flex-grow">{@html PrismicDom.RichText.asHtml(event.extrait_description)}</div>
            <CTASection
            position="ml-auto md:mlr-0 md:mr-auto"
            texte="En savoir plus"
            href="/agenda/{event.uid}" />
        </div>
    </div>
    <div class="relative z-10 md:ml-auto md:w-96 lg:w-[450px] xl:w-[600px] md:max-h-80 max-h-96 object-cover duration-300 {!is_home_page && is_last_event ? 'md:mb-5 lg:mb-5' : 'lg:mb-24'}">
        <img class="h-52 md:h-full w-full object-cover" src={event.photo.url} alt="illustration de l'événement">
        <div class="hidden sm:flex flex-col justify-center items-center sm:absolute sm:-bottom-12 md:bottom-0 sm:left-0 md:-left-5 lg:-left-12 bg-dore-dark w-32 h-32 duration-300">
            <p class="font-serif font-bold text-6xl pb-4">{getDay(event.date_debut)}</p>
            <p class="text-light uppercase tracking-widest">{getMonth(event.date_debut)}</p>
        </div>
    </div>
</div>
{/if}