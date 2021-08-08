<script>
    import PrismicDom from 'prismic-dom'
    import WaveHero from '$lib/SVG/wave-hero.svelte'
    import Heading from '$lib/UI/Heading.svelte'
    import CTASection from '$lib/UI/CTA-section.svelte'

    export let titre, font_size, is_main_title, intro, is_CTA, texte, href, position, spacing, border_left, border_transform
    let is_dark = true
</script>

<section class="w-full mx-auto {spacing}">
    <WaveHero/>
    <div class="bg-gray-900 pt-0 pb-5 px-4 w-full h-full relative z-10">
        <div class="max-w-lg mx-auto space-y-4">
            <Heading {titre} is_dark={true} {is_main_title} {font_size} {border_left} {border_transform} />
            <div class="text-center {is_dark ? 'text-rose-light' : 'text-gray-900'}">{@html PrismicDom.RichText.asHtml(intro)}</div>
            {#if is_CTA}<CTASection {texte} {href} {position} />{/if}
        </div>
    </div>
</section>