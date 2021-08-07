<script>
    import { page } from '$app/stores'
    import { createEventDispatcher } from 'svelte'
    import CtaMain from '$lib/UI/CTA-main.svelte'

    const dispatch = createEventDispatcher()
    export let direction, color
</script>

<style>
    .active {
        @apply text-dore-dark font-bold;
    }

    nav {
        mix-blend-mode: difference;
    }

    ul {
        mix-blend-mode: difference;
    }
</style>

<nav>
    <ul class="lg:max-w-screen-lg mx-auto flex {direction} list-reset text-sm md:space-x-2 lg:space-x-16">
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{color} uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300" href="/" class:active={$page.path === '/'}>Accueil</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{color} uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300" href="/#a-propos" class:active={$page.path === '/#a-propos'}>À propos</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{color} uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300" href="/soins" class:active={$page.path === '/soins'}>Les soins</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{color} uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300" href="/agenda" class:active={$page.path === '/agenda'}>Nos rendez-vous</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{color} uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300" href="/faq" class:active={$page.path === '/faq'}>F.A.Q.</a>
        </li>
        <a sveltekit:prefetch href="/#contact" class="inline bg-dore-dark rounded-lg tracking-wide px-5 py-3 uppercase font-medium">Contact</a>
    </ul>
</nav>