<script>
    import Logo from '$svg/logo-christelle.svelte'
    import WaveHero from '$svg/wave-hero.svelte'
    import Nautile from '/static/assets/nautile-dore-smoke.svg?format=webp&srcset'
    import Contact from '$lib/UI/Contact.svelte'
</script>


<section class="container mx-auto px-8 py-20">
    <WaveHero/>
    <div class="bg-gray-900 p-8 w-full h-full relative z-10">
        <div class="max-w-md">
            <h1 class="font-playfair-display text-3xl tracking-wide text-dore-dark">Welcome to SvelteKit</h1>
            <p>Conveniently underwhelm B2B opportunities before world-class supply chains. Continually productivate effective benefits for standardized services.</p>
            <div>
                <Logo />
            </div>
        </div>
        <img style="transform: scaleX(-1);" class="w-1/4 absolute -top-28 right-8" srcset={Nautile} alt="" />
    </div>
    <WaveHero flip="rotate-180 -mt-2"/>
</section>
<section class="pb-96">
    <Contact
        titre="Envoyez-moi un message"
        intro="Uniquely formulate principle-centered ROI whereas state of the art potentialities. Uniquely synthesize cross-media value before."/>
</section>
