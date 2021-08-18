<script>
    import { page } from '$app/stores'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    export let direction, link_style, contact_style
</script>

<style>
    .active {
        @apply font-bold underline md:no-underline md:text-dore-dark md:font-bold;
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
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{link_style}" href="/" class:active={$page.path === '/'}>Accueil</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{link_style}" href="/#a-propos" class:active={$page.path === '/#a-propos'}>À propos</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{link_style}" href="/soins" class:active={$page.path === '/soins'}>Les soins</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{link_style}" href="/agenda" class:active={$page.path === '/agenda'}>Nos rendez-vous</a>
        </li>
        <li class="mb-4 md:mb-0">
            <a sveltekit:prefetch on:click={() => dispatch('clickMobileItem')} class="{link_style}" href="/faq" class:active={$page.path === '/faq'}>F.A.Q.</a>
        </li>
        <a sveltekit:prefetch href="/#contact" class="{contact_style}">Contact</a>
    </ul>
</nav>