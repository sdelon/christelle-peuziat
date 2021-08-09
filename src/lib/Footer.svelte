<script>
    import MobileNav from '$lib/Header/Mobile-nav.svelte'
    let isMobileNav = false, windowSize
</script>

<svelte:window bind:innerWidth={windowSize}/>
<footer class="w-full bg-rose-light pt-16">
    <div class="layout-container">
        <p>Footer</p>
    </div>
</footer>
<div class="fixed md:hidden bottom-0 w-full h-16 bg-dore-dark flex justify-center items-center space-x-4 text-gray-900 z-50">
    <p>Menu</p>
    {#if isMobileNav}
        <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    {:else}
        <svg on:click={() => isMobileNav = !isMobileNav} class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    {/if}
</div>

{#if isMobileNav}
<MobileNav
on:clickMobileItem={() => isMobileNav = !isMobileNav } />
{/if}