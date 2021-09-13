<script>
    export let titre, is_dark, is_main_title, font_size, position = "text-center", border_left, border_transform

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
        left: 0;
        bottom: 5px; 
        width: 100%; 
        height: 8px;
        z-index: -1;
        background-color: #D2C17F;
    }

    @media screen and (max-width:505px) {
        h1:after, h2:after {
        content:""; 
        display:inline-block; 
        position:absolute; 
        left: var(--border-left);
        transform: translateX(var(--border-transform));
        bottom:10px; 
        width:50%; 
        height:10px;
        z-index: -1;
        background-color: #D2C17F;
    }
    }
</style>

<div class="w-full {position} relative z-10">
    {#if is_main_title}
    <h1 style="--border-left: {border_left}; --border-transform: {border_transform};" class="font-serif font-bold {is_dark ? 'text-rose-light' : 'text-gray-900'} {font_size} text-center">{titre}</h1>
    {:else}
    <h2 style="--border-left: {border_left}; --border-transform: {border_transform};" class="font-serif font-bold {is_dark ? 'text-rose-light' : 'text-gray-900'} {font_size} text-center">{titre}</h2>
    {/if}
</div>