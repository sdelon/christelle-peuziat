<script>
    export let currentEvents, nbOfPostsToLoad
</script>

<button aria-label="Pagination des événements" on:click={() => currentEvents = currentEvents + nbOfPostsToLoad} class="inline-flex mx-auto items-center justify-center text-lg bg-dore-dark font-serif tracking-wide px-5 py-1 hover:shadow-lg hover:scale-95 duration-300">
    <span>Découvrir plus d'événements</span>
    <svg class="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</button>
