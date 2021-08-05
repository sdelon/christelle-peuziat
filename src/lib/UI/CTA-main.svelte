<script>
    export let texte, href, bg_color = "bg-dore-dark"
</script>

<a sveltekit:prefetch {href} class="inline {bg_color} rounded-lg tracking-wide px-5 py-2 uppercase font-medium">{texte}</a>