<script>
    import Spirale from '/static/assets/spirale.svg?format=webp&srcset'
    export let citation, texte
</script>

<div class="w-full md:w-1/2 h-auto bg-gray-900 relative p-3 text-gray-100">
    <img class="absolute left-0 w-1/5 md:w-1/3 object-cover" srcset={Spirale} alt="logo spirale" />
    <h2 class="pl-12 pt-5 sm:pl-20 sm:pt-7 lg:p-12 text-xl sm:text-2xl font-bold duration-300">{citation}</h2>
    <div class="font-light mt-10">{texte}</div>
</div>