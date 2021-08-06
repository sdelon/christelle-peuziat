<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import PrismicDom from 'prismic-dom'
    import ChevronLeft from '$lib/SVG/chevron-left.svelte'
    import ChevronRight from '$lib/SVG/chevron-right.svelte'
    import QuoteMark from '$lib/SVG/quote-mark.svelte'

    export let slice
    let idx = 0, speed = 10

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

    const show_previous = e => {
        if(idx > 0) idx = idx - 1
    }

    const show_next = () => {
        if(idx < slice.items.length) idx = idx + 1
    }
</script>

<div class="layout-container h-full flex justify-between items-center">
    <ChevronLeft on:previous={() => show_previous(idx)}/>
    <div class="relative text-rose-light space-y-8">
        <QuoteMark quote_mark="absolute top-0 -left-12 opacity-50"/>
        <div class="max-w-md font-serif text-3xl text-center">{@html PrismicDom.RichText.asHtml(slice.items[idx].temoignage)}</div>
        <p class="font-thin text-center">{slice.items[idx].prenom}</p>
    </div>
    <ChevronRight on:next={() => show_next(idx)} />
</div>