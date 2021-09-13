<script>
    export let texte, href, bg_color = "bg-dore-dark", position
</script>

<div class="w-full {position} hover:drop-shadow-lg hover:scale-95 duration-300">
    <a sveltekit:prefetch {href} class="inline {bg_color} rounded-lg tracking-wide px-5 py-3 uppercase font-medium">{texte}</a>
</div>