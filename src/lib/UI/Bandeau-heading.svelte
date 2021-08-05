<script>
    import WaveHero from '$lib/SVG/wave-hero.svelte'
    import Heading from '$lib/UI/Heading.svelte'
    import CTASection from '$lib/UI/CTA-section.svelte'

    export let titre, font_size, is_dark, is_main_title, intro, is_CTA, texte, href, position
</script>

<section class="w-full mx-auto py-16">
    <WaveHero/>
    <div class="bg-gray-900 pt-0 pb-5 w-full h-full relative z-10">
        <div class="max-w-lg mx-auto space-y-4">
            <Heading {titre} {is_dark} {is_main_title} {font_size} />
            <div class="text-center {is_dark ? 'text-rose-light' : 'text-gray-900'}">{intro}</div>
            {#if is_CTA}<CTASection {texte} {href} {position} />{/if}
        </div>
    </div>
</section>