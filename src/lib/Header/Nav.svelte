<script>
    import { page } from '$app/stores'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    export let direction, link_style, contact_style

    const set_aria_current = (node, current_page) => {
        let not_anchor = current_page.split('#').length > 1
        if(not_anchor) current_page = '/'

        if($page.path === current_page) node.ariaCurrent = "page"
    }
    
    const list_items = [
        {
            text: "Accueil",
            path: "/"
        },
        {
            text: "À propos",
            path: "/#a-propos"
        },
        {
            text: "Les soins",
            path: "/soins"
        },
        {
            text: "Nos rendez-vous",
            path: "/agenda"
        },
        {
            text: "F.A.Q.",
            path: "/faq"
        },
    ]
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
        {#each list_items as item}
        <li class="mb-4 md:mb-0">
            <a 
            use:set_aria_current={item.path} 
            sveltekit:prefetch 
            on:click={() => dispatch('clickMobileItem')} 
            href={item.path} 
            class="{link_style}" 
            class:active={$page.path === item.path}>
            {item.text}</a>
        </li>
        {/each}
        <a use:set_aria_current={"/#contact"} sveltekit:prefetch href="/#contact" class="{contact_style}">Contact</a>
    </ul>
</nav>