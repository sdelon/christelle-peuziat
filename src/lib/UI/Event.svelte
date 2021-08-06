<script>
    import PrismicDom from 'prismic-dom';
    import CTASection from '$lib/UI/CTA-section.svelte'
    import { getDay, getMonth } from '$utils/helpers'

    export let item, is_img_left, y
</script>

{#if is_img_left || !is_img_left && y <= 767}
<div class="w-full flex flex-col md:flex-row relative duration-300">
    <div class="relative z-10 md:w-96 lg:w-[450px] max-h-96 object-cover duration-300 md:mb-40 lg:mb-24">
        <img class="h-52 md:h-full w-full object-cover" src={item.evenement_a_lier.data.photo.url} alt="illustration de l'événement">
        <div class="hidden sm:flex flex-col justify-center items-center sm:absolute sm:-bottom-12 md:bottom-0 sm:right-0 md:-right-5 lg:-right-12 bg-dore-dark w-32 h-32 duration-300">
            <p class="font-serif font-bold text-6xl pb-4">{getDay(item.evenement_a_lier.data.date_debut)}</p>
            <p class="text-light uppercase tracking-widest">{getMonth(item.evenement_a_lier.data.date_debut)}</p>
        </div>
    </div>
    <div class="md:absolute md:top-10 md:right-0 md:ml-auto bg-gray-900 w-full md:w-3/4 lg:w-2/3 p-5 duration-300">
        <div class="flex space-x-2 sm:hidden bg-dore-dark w-full p-5 duration-300 mb-4 uppercase tracking-widest text-xl text-gray-800">
            <p class="font-bold">{getDay(item.evenement_a_lier.data.date_debut)}</p>
            <p>{getMonth(item.evenement_a_lier.data.date_debut)}</p>
        </div>
        <div class="w-full md:w-64 lg:w-96 lg:h-80 ml-auto flex flex-col justify-center space-y-10 md:text-right duration-300">
            <h2 class="text-gray-100 font-serif text-5xl font-bold">{PrismicDom.RichText.asText(item.evenement_a_lier.data.titre)}</h2>
            <div class="text-gray-100 prose flex-grow">{@html PrismicDom.RichText.asHtml(item.evenement_a_lier.data.extrait_description)}</div>
            <CTASection
            position="mr-auto md:mr-0 md:ml-auto"
            texte="En savoir plus"
            href="/" />
        </div>
    </div>
</div>
{:else}
<div class="w-full flex flex-col md:flex-row relative duration-300">
    <div class="md:absolute md:top-10 md:left-0 md:mr-auto bg-gray-900 w-full md:w-3/4 lg:w-2/3 p-5 duration-300">
        <div class="flex space-x-2 sm:hidden bg-dore-dark w-full p-5 duration-300 mb-4 uppercase tracking-widest text-xl text-gray-800">
            <p class="font-bold">{getDay(item.evenement_a_lier.data.date_debut)}</p>
            <p>{getMonth(item.evenement_a_lier.data.date_debut)}</p>
        </div>
        <div class="w-full md:w-64 lg:w-96 lg:h-80 mr-auto flex flex-col justify-center space-y-10 md:text-left duration-300">
            <h2 class="text-gray-100 font-serif text-5xl font-bold">{PrismicDom.RichText.asText(item.evenement_a_lier.data.titre)}</h2>
            <div class="text-gray-100 prose flex-grow">{@html PrismicDom.RichText.asHtml(item.evenement_a_lier.data.extrait_description)}</div>
            <CTASection
            position="ml-auto md:mlr-0 md:mr-auto"
            texte="En savoir plus"
            href="/" />
        </div>
    </div>
    <div class="relative z-10 md:ml-auto md:w-96 lg:w-[450px] max-h-96 object-cover duration-300 md:mb-40 lg:mb-24">
        <img class="h-52 md:h-full w-full object-cover" src={item.evenement_a_lier.data.photo.url} alt="illustration de l'événement">
        <div class="hidden sm:flex flex-col justify-center items-center sm:absolute sm:-bottom-12 md:bottom-0 sm:left-0 md:-left-5 lg:-left-12 bg-dore-dark w-32 h-32 duration-300">
            <p class="font-serif font-bold text-6xl pb-4">{getDay(item.evenement_a_lier.data.date_debut)}</p>
            <p class="text-light uppercase tracking-widest">{getMonth(item.evenement_a_lier.data.date_debut)}</p>
        </div>
    </div>
</div>
{/if}