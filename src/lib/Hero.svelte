<script>
    import PrismicDom from 'prismic-dom'
    import WaveHero from '$svg/wave-hero.svelte'
    import CTASection from './UI/CTA-section.svelte'

    export let data
</script>

<WaveHero flip="mt-3 relative z-10" />
<div class="bg-gray-900 w-full h-full relative z-10">
    <div class="layout-container flex justify-between">
        <div class="max-w-xl">
            <h1 class="uppercase text-sm font-light tracking-widest text-dore-dark pb-5 sm:pb-3">{PrismicDom.RichText.asText(data.titre)}</h1>
            <h2 class="font-serif font-bold text-5xl sm:text-7xl tracking-wide text-dore-dark pb-8 sm:pb-12">{PrismicDom.RichText.asText(data.accroche)}</h2>
            <div class="text-dore-dark font-thin max-w-lg prose">{@html PrismicDom.RichText.asHtml(data.intro)}</div>
            <CTASection texte={data.texte_lien_header} href="/soins" position="mt-8" font_size="text-xl sm:text-3xl"/>
        </div>
        <div class="hidden -mt-32 md:block md:w-full lg:w-2/5 h-auto mr-8 opacity-50 object-contain">
            <img class="w-full h-full object-contain" src={data.image.url} alt="" />
        </div>
    </div>
</div>
<WaveHero flip="rotate-180 -mt-2"/>


