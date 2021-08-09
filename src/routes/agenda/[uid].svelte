<script context="module">
    export async function load({ fetch, page }) {
        const { event } = await fetch(`/api/agenda/${page.params.uid}`).then(res => res.json())

        return {
            props: {
                event
            }
        }
    }
</script>

<script>
    export let event
    $: console.log(event)
</script>