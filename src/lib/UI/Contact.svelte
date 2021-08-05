<script>
    import BgContact from '/static/assets/bg-contact.svg'
    export let titre, intro
</script>

<section class="pb-96">
    <div class="w-full h-72 relative">
        <div class="w-full h-72 absolute top-0 left-0 right-0 z-0">
            <img class="w-full h-72 object-cover" src={BgContact} alt="">
        </div>
        <div class="flex flex-col md:flex-row justify-between">
            <div class="container h-72 flex flex-col justify-end space-y-5 p-8 mx-auto relative z-10">
                <h2 class="text-gray-900 font-serif text-4xl lg:text-5xl font-bold max-w-md duration-300">{titre}</h2>
                <div class="prose max-w-md">{intro}</div>
            </div>
            <div class="w-auto mx-8 mb-20 bg-gray-900 p-5 mt-5 relative z-10">
                <form name="contact" method="POST" data-netlify="true" action="/merci">
                    <input type="hidden" name="form-name" value="contact">
                    <label class="text-dore-dark" for="name">
                        Nom
                        <input class="bg-dore-dark w-full py-3 pl-3 mt-1 mb-4 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" type="text" name="nom" required aria-required="true">
                    </label>
                    <label class="text-dore-dark" for="email">
                        Email
                        <input class="bg-dore-dark w-full py-3 pl-3 mt-1 mb-4 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" type="email" name="email" required aria-required="true">
                    </label>
                    <label class="text-dore-dark" for="message">
                        Message
                        <textarea class="bg-dore-dark mt-1 mb-4 w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" id="1" name="message" cols="30" rows="10" required aria-required="true"></textarea>
                    </label>
                    <button type="submit" class="bg-dore-dark w-full inline-block px-6 py-3 mr-4 text-gray-900 font-bold leading-loose rounded transition duration-200 uppercase focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</section>