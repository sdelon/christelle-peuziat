<script>
    import PrismicDom from "prismic-dom"

    export let item

    let is_open
</script>

<div class="mb-8 shadow-lg p-5">
    <div on:click={() => is_open = !is_open} class="flex w-full justify-between items-center text-gray-900 {is_open ? 'pb-8' : 'pb-0'} cursor-pointer">
        <h3 class="font-medium w-4/5">{PrismicDom.RichText.asText(item.question)}</h3>
        <svg 
        class="w-6 h-6 text-dore-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {#if is_open}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path>
            {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
            {/if}
        </svg>
    </div>
    {#if is_open}
    <div class="prose">{@html PrismicDom.RichText.asHtml(item.reponse)}</div>
    {/if}
</div>