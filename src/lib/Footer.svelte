<script>
    import { page } from '$app/stores'
    import MobileNav from '$lib/Header/Mobile-nav.svelte'
    import Wave from '$lib/SVG/wave-hero.svelte'
    import spirale from '/static/assets/spirale.svg'
    import FbIcon from '$lib/SVG/facebook_logo_icon.svelte'
    import InstagramIcon from '$lib/SVG/instagram_logo_icon.svelte'

    let isMobileNav = false, windowSize, windowHeight

    $: year = new Date().getFullYear()
</script>

<svelte:window bind:innerWidth={windowSize} bind:innerHeight={windowHeight}/>

<Wave flip="relative z-10 {$page.path === '/' ? 'pt-60 md:pt-3' : 'pt-3'}" />
<footer class="w-full bg-gray-900 pb-12 md:pb-0">
    <div class="layout-container h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <div class="hidden sm:block w-32 h-auto sm:w-full sm:h-full">
            <img src={spirale} alt="logo">
        </div>
        <div class="h-full lg:col-start-2 lg:col-span-2 flex flex-col justify-between text-dore-light">
            <div>
                <h3 class="font-bold text-lg">Christelle Peuziat</h3>
                <h4 class="">Médium . Magnétiseuse . Psycho-énergéticienne</h4>
                <p class="font-thin">62 bis rue de Locqueran</p>
                <p class="font-thin">29780 Plouhinec</p>
            </div>
            <div class="font-thin"><a class="underline" href="tel:06.77.63.18.43">06.77.63.18.43</a></div>
            <div class="font-thin"><a class="underline" href="mailto:christelle.peuziat2210@gmail.com">christelle.peuziat2210@gmail.com</a></div>
        </div>
        <div class="col-span-full sm:col-span-1 text-dore-light sm:text-right lg:text-left mt-10 sm:mt-0">
            <p class="font-bold">Menu</p>
            <ul class="flex flex-wrap sm:flex-col items-center sm:items-end lg:items-start sm:space-y-3">
                <li class="font-thin sm:pt-3 pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/">Accueil</a>
                </li>
                <li class="font-thin pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/#a-propos">À propos</a>
                </li>
                <li class="font-thin pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/soins">Les soins</a>
                </li>
                <li class="font-thin pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/agenda">Nos rendez-vous</a>
                </li>
                <li class="font-thin pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/soins#tarifs">Tarifs</a>
                </li>
                <li class="font-thin pr-5 sm:pr-0">
                    <a class="inline-block pr-2 my-2" sveltekit:prefetch href="/faq">F.A.Q.</a>
                </li>
            </ul>
        </div>
        <div class="col-span-full lg:col-span-1 text-dore-light mt-10 lg:mt-0">
            <p class="font-bold">Retrouvez-moi sur les réseaux sociaux</p>
            <ul class="flex items-center lg:items-start lg:flex-col lg:space-y-3 space-x-5 lg:space-x-0 mt-3 lg:mt-0">
                <li class="lg:pt-3">
                    <a class="my-2 inline-flex items-center space-x-3 font-thin" href="https://www.facebook.com/profile.php?id=100011459704993" aria-label="Facebook de Christelle Peuziat">
                        <FbIcon />
                        Facebook
                    </a>
                </li>
                <li>
                    <a class="my-2 inline-flex items-center space-x-3 font-thin" href="https://www.instagram.com/peuziatchristelle/" aria-label="Instagram de Christelle Peuziat">
                        <InstagramIcon />
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="layout-container mt-8 font-thin text-dore-light flex items-center py-5">
        <p class="font-thin text-sm"><span>© {year} christellepeuziat.com</span> - Design et conception: <a href="https://sdelon.com/">sdelon </a>| <a class="font-light" href="/mentions-legales">Mentions légales</a> | <a class="font-light" sveltekit:prefetch href="/#contact">Contact</a></p>
        <div
        on:click={() => window.scrollTo(0,0)} class="ml-auto w-10 h-10 rounded-full bg-dore-light flex items-center justify-center animate-pulse cursor-pointer">
            <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg>
        </div>
    </div>
</footer>

<div class="fixed md:hidden bottom-0 w-full h-16 bg-dore-dark flex justify-center items-center space-x-12 sm:space-x-20 text-gray-900 z-50 duration-300">
    {#if isMobileNav}
        <div class="flex items-center space-x-4">
            <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <p>Menu</p>
        </div>
    {:else}
        <div>
            <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer mx-auto text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            <p class="text-sm text-gray-800">Menu</p>
        </div>
        <div>
            <a sveltekit:prefetch href="/#contact" class="inline-block text-sm">
                <svg class="w-6 h-6 cursor-pointer mx-auto text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                <span class="text-gray-800">Contact</span>
            </a>
        </div>
    {/if}
</div>

{#if isMobileNav}
<MobileNav
on:clickMobileItem={() => isMobileNav = !isMobileNav } />
{/if}