<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
</script>

<svg on:click={() => dispatch('next')} class="w-6 h-6 text-rose-light cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
</svg>