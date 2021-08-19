<script>
    import Nav from './Nav.svelte'
    import Logo from '$svg/logo-christelle.svelte'
</script>

<header id="header" class="bg-rose-light md:pb-12 relative">
    <div class="flex flex-col justify-center items-center max-w-screen-lg xl:max-w-screen-xl mx-auto md:px-6 md:py-3 relative z-20">
        <div class="flex items-center mb-4">
            <Logo color="#171717"/>
        </div>
        <div class="hidden md:block w-full">
            <Nav
            direction="flex-row justify-between items-center"
            link_style="uppercase hover:border-b-2 hover:border-solid hover:border-dore-dark transition-colors duration-300 text-gray-900"
            contact_style="inline bg-dore-dark rounded-lg tracking-wide px-5 py-3 uppercase font-medium" />
        </div>
    </div>
</header>