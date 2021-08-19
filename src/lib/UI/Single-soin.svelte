<script>
    import PrismicDom from 'prismic-dom'
    import Spirale from '/static/assets/spirale.svg?format=webp&srcset'
    export let slice, idx
</script>

<div class="w-full h-auto bg-gray-900 relative p-3 text-gray-100">
    <div class="mb-4 md:mb-2">
        <img class="absolute -top-3 left-0 w-1/5 md:w-1/3 object-cover rotate-45" srcset={Spirale} alt="logo spirale" />
        <h3 class="pt-24 pb-5 md:pt-12 md:pl-2 lg:pl-12 xl:pl-16 text-lg sm:text-xl lg:text-2xl text-rose-light font-bold duration-300">{PrismicDom.RichText.asText(slice.items[idx].citation_soin)}</h3    >
    </div>
    <div class="font-light prose text-rose-light">{@html PrismicDom.RichText.asHtml(slice.items[idx].texte)}</div>
</div>