<script>
    import Logo from '$svg/logo-christelle.svelte'
    import WaveHero from '$svg/wave-hero.svelte'
    import Nautile from '/static/assets/nautile-dore-smoke.svg?format=webp&srcset'
    import Event from '$lib/UI/Event.svelte'
</script>


<section class="container mx-auto px-8 py-52">
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
    <Event
    titre="Séminaire"
    intro="Monotonectally evisculate empowered methods of empowerment vis-a-vis multimedia based functionalities. Competently orchestrate."
    date="30 septembre" />
</section>
