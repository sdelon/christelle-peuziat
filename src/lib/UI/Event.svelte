<script>
    import CTASection from '$lib/UI/CTA-section.svelte'
    import Photo from '/static/rectangle-28.png'
    export let titre, intro, date
</script>

<style>
    @media screen and (min-width: 200px) and (max-width: 639px) {
        .none {
            display: none;
        }
    }
</style>

<div class="w-full flex flex-col md:flex-row relative duration-300">
    <div class="relative z-10 md:w-96 lg:w-[450px] object-cover duration-300">
        <img class="h-52 md:h-full w-full object-cover" src={Photo} alt="illustration de l'événement">
        <div class="none sm:absolute sm:-bottom-12 md:bottom-0 sm:right-0 md:-right-5 lg:-right-12 bg-dore-dark w-32 h-32 duration-300">
            {date}
        </div>
    </div>
    <div class="md:absolute md:top-10 md:right-0 md:ml-auto bg-gray-900 w-full md:w-3/4 p-5 duration-300">
        <div class="sm:hidden bg-dore-dark w-full p-5 duration-300 mb-4">
            {date}
        </div>
        <div class="w-full md:w-64 lg:w-96 lg:h-80 ml-auto flex flex-col justify-center space-y-10 md:text-right duration-300">
            <h2 class="text-gray-100 font-serif text-5xl font-bold">{titre}</h2>
            <div class="text-gray-100 prose flex-grow">{intro}</div>
            <CTASection
            position="mr-auto md:mr-0 md:ml-auto"
            texte="En savoir plus"
            href="/" />
        </div>
    </div>
</div>