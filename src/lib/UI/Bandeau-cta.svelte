<script>
    import CtaMain from "$lib/UI/CTA-main.svelte"

    export let accroche, texte = "Prendre rendez-vous"
</script>

<style>
    .smoke {
        background-image:url('/static/assets/bg-smoke-cta.svg');
        background-repeat: no-repeat;
        background-size:contain;
        background-position: center;
    }
</style>

<div class="smoke layout-container mt-20 pb-20">
    <h2 class="font-serif text-3xl lg:text-5xl max-w-2xl mx-auto leading-tight font-bold text-center relative z-10 py-20 duration-300">{accroche}</h2>
    <CtaMain 
    {texte}
    href="/#contact"
    position="text-center" />
</div>