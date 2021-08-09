<script>
    import PrismicDom from 'prismic-dom'
    import Heading from '$lib/UI/Heading.svelte'
    import CTASection from '$lib/UI/CTA-section.svelte'
    import Logo from '$svg/logo-christelle.svelte'
    
    export let slice
</script>

<div id="a-propos" class="pb-32 md:pb-40">
    <div class="w-full flex flex-col md:flex-row relative duration-300">
        <div class="lg:absolute -top-20 left-0 z-10 w-full h-96 sm:h-full md:h-auto md:w-[350px] lg:w-[450px] xl:w-[600px] 2xl:w-[700px] object-cover object-center duration-300">
            <img class="w-full h-full object-cover lg:border-r-8 lg:border-b-8 lg:border-rose-light lg:border-solid" src={slice.primary.photo.url} alt={slice.primary.photo.alt}>
        </div>
        <div class="flex flex-col md:ml-auto bg-gray-900 w-full md:w-3/4 p-5 duration-300">
            <div class="w-full h-full ml-auto flex flex-col justify-center space-y-10 md:text-right duration-300">
                <Heading
                    titre={PrismicDom.RichText.asText(slice.primary.titre_presentation)}
                    is_dark={true}
                    font_size='text-6xl'
                    position='text-left md:text-right'
                    border_left="0"
                    border_transform="0" />
                <div class="flex-grow text-gray-100 prose w-full lg:max-w-md xl:max-w-lg mr-auto lg:mr-0 lg:ml-auto">{@html PrismicDom.RichText.asHtml(slice.primary.presentation)}</div>
                <div class="mr-auto md:mr-0 md:ml-auto pb-5 md:pb-0 max-w-screen -translate-x-4 sm:-translate-x-0">
                    <Logo color="#D2C17F" />
                </div>
            </div>
        </div>
    </div>
    <CTASection
        position="-mt-5 md:-mt-20 mr-auto md:mr-0 md:ml-auto"
        texte={slice.primary.texte_lien_presentation}
        href="/"
        font_size="text-2xl md:text-3xl relative z-20" />
</div>