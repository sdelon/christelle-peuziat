<script>
    import PrismicDom from 'prismic-dom'
    import WaveHero from '$svg/wave-hero.svelte'
    import CTASection from './UI/CTA-section.svelte'
    import Nautile from '/static/assets/nautile-dore-smoke.svg?format=webp&srcset'

    export let data
</script>

<WaveHero flip="mt-3 relative z-10" />
<div class="bg-gray-900 w-full h-full relative z-10">
    <div class="layout-container py-12 flex justify-between">
        <div class="max-w-xl">
            <h1 class="uppercase text-sm font-light tracking-widest text-dore-dark pb-2">{PrismicDom.RichText.asText(data.titre)}</h1>
            <h2 class="font-serif font-bold text-7xl tracking-wide text-dore-dark pb-12">{PrismicDom.RichText.asText(data.accroche)}</h2>
            <div class="text-dore-dark font-thin max-w-lg prose">{@html PrismicDom.RichText.asHtml(data.intro)}</div>
            <CTASection texte={data.texte_lien_header} href="/soins" position="mt-8" font_size="text-3xl"/>
        </div>
        <img class="hidden -mt-32 md:block w-1/2 md:w-1/3 mr-8 opacity-50" srcset={Nautile} alt="" />
    </div>
</div>
<WaveHero flip="rotate-180 -mt-2"/>


