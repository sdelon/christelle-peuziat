<script>
    export let titre, intro, is_dark, is_main_title
</script>

<style>
    h1, h2 {
        position:relative; 
        padding:10px 5px; 
        display: inline-block;
    }

    h1:after, h2:after {
        content:""; 
        display:inline-block; 
        position:absolute; 
        left:0; 
        bottom:10px; 
        width:100%; 
        height:10px;
        z-index: -1;
        background-color: #D2C17F;
    }
</style>

<div class="w-full text-center">
    {#if is_main_title}
    <h1 class="font-serif font-bold {is_dark ? 'text-rose-light' : 'text-gray-900'} text-4xl text-center">{titre}</h1>
    {:else}
    <h2 class="font-serif font-bold {is_dark ? 'text-rose-light' : 'text-gray-900'} text-4xl text-center">{titre}</h2>
    {/if}
    <p class="prose {is_dark ? 'text-rose-light' : 'text-gray-900'} mx-auto text-center">{intro}</p>
</div>