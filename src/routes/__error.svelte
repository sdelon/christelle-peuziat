<script>
        import spirale from "/static/assets/spirale.svg"
</script>

<section class="layout-container relative overflow-hidden">
    <div class="mx-auto sm:pl-14 rotate-90 sm:scale-150 max-w-screen h-80 w-80 sm:w-96 opacity-25 duration-300">
        <img src={spirale} alt="logo spirale">
    </div>
    <div class="absolute inset-0 w-full text-center py-20 z-10 text-gray-900">
        <h1 class="max-w-md mx-auto font-sans font-bold text-4xl pb-2">Cette page n'existe pas.</h1>
        <p class="max-w-md mx-auto text-lg">Je vous invite à revenir sur la <a class="underline text-dore-dark" sveltekit:prefetch href="/">page d'accueil</a>.</p>
    </div>
</section>