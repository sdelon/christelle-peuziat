<script>
    import Nav from './Nav.svelte'
	import { fly } from 'svelte/transition'
</script>

<style style lang="postcss">
	aside {
		transition: left 0.3s ease-in-out
	}
</style>

<aside 
transition:fly={{delay: 250, duration: 800, x: -100}} 
class="md:hidden z-40 fixed inset-0 transition-transform overflow-y-auto bg-dore-dark">
<div class="mt-20 ml-12">
    <Nav 
    direction="flex-col"
    color="text-gray-900 hover:text-gray-600 hover:border-gray-900 duration-300"
    position="top-10 right-0"
    on:clickMobileItem />
</div>
</aside>