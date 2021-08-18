<script>
	import { fly } from 'svelte/transition'
    import Nav from './Nav.svelte'
    import Logo from '$svg/logo-christelle.svelte'
</script>

<style style lang="postcss">
	aside {
		transition: left 0.3s ease-in-out
	}
</style>

<aside 
transition:fly={{delay: 250, duration: 800, x: -100}} 
class="md:hidden z-40 fixed inset-0 h-full transition-transform overflow-y-auto bg-gradient-to-tr from-dore-dark to-dore-light">
<div class="my-5 ml-12 mb-4">
    <Logo color="#171717"/>
</div>
<div class="mt-16 ml-12 relative z-50">
    <Nav 
    direction="flex-col"
    link_style="text-gray-900 text-lg"
    contact_style="w-32 h-auto text-dore-dark uppercase bg-gray-900 px-3 py-1 rounded-lg"
    position="top-10 right-0"
    on:clickMobileItem />
</div>

</aside>