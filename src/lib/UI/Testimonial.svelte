<script>
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'
    import PrismicDom from 'prismic-dom'
    import ChevronLeft from '$lib/SVG/chevron-left.svelte'
    import ChevronRight from '$lib/SVG/chevron-right.svelte'
    import QuoteMark from '$lib/SVG/quote-mark.svelte'

    export let slice
    let idx = 0

    const animation_options = {
        duration: 600,
        easing: quintOut,
        delay: 250
    }

    onMount(() => {
        setInterval(() => {
            if(idx === slice.items.length - 1) {
                while(idx >= 0) {
                    idx = idx - 1
                }
            }
            idx = idx + 1
        }, 3000)
    })

    const show_previous = () => {
        if(idx > 0) idx = idx - 1
    }

    const show_next = () => {
        if(idx < slice.items.length - 1) idx = idx + 1
    }

</script>

<style>
    .testimonial-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<div class="layout-container h-full flex justify-between items-center relative">
    <ChevronLeft on:previous={() => show_previous(idx)}/>
    {#key idx}
    <div transition:fly={{...animation_options}} class="testimonial-container text-rose-light space-y-8">
        <QuoteMark quote_mark="absolute top-0 -left-12 opacity-50"/>
        <div class="max-w-md font-serif text-2xl sm:text-3xl text-center duration-300">{@html PrismicDom.RichText.asHtml(slice.items[idx].temoignage)}</div>
        <p class="font-thin text-center">{slice.items[idx].prenom}</p>
    </div>
    {/key}
    <ChevronRight on:next={() => show_next(idx)} />
</div>