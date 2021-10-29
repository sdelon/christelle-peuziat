<script context="module">
    export const prerender = true
    export async function load({ fetch }) {
        const { home } = await fetch('/api').then(res => res.json())

        return {
            props: {
                home
            }
        }
    }
</script>

<script>
    import { inview } from 'svelte-inview'
    import { fly } from 'svelte/transition'
    import PrismicDom from 'prismic-dom'
    import SeoHead from '$lib/SEOHead.svelte'
    import Hero from '$lib/Hero.svelte'
    import Presentation from '$lib/Presentation.svelte'
    import Heading from '$lib/UI/Heading.svelte'
    import CTASection from '$lib/UI/CTA-section.svelte'
    import SingleSoin from '$lib/UI/Single-soin.svelte'
    import Testimonial from '$lib/UI/Testimonial.svelte'
    import BandeauHeading from '$lib/UI/Bandeau-heading.svelte'
    import Event from '$lib/UI/Event.svelte'

    export let home
    const { data } = home
    let y, is_in_view = false

    const options = {
        rootMargin: '10px',
        unobserveOnEnter: true,
    }
</script>

<style>
    .citation { @apply leading-relaxed; }
</style>

<SeoHead 
src_to_preload={home.data.image.url}
title="Accueil | Christelle Peuziat"
description="Passer de l'ombre à la lumière avec Christelle Peuziat - magnétiseuse - médium- psycho-énergéticienne | Christelle Peuziat"
image={home.data.body[0].primary.photo.url}
alt={home.data.body[0].primary.photo.alt} />

<svelte:window bind:innerWidth={y}/>
<section class="-mt-16 sm:-mt-24 md:-mt-28 pb-2 duration-300">
    <Hero {data} />
</section>
<section use:inview={options} on:change={e => is_in_view = e.detail.inView} class="layout-container">
    {#if is_in_view}
    <div in:fly="{{ x: 200, duration: 2000 }}" class="citation max-w-lg md:ml-auto text-left md:text-right italic font-bold font-serif text-gray-800 tracking-wide text-3xl md:text-4xl duration-300">{@html PrismicDom.RichText.asHtml(data.citation)}</div>
    {/if}
</section>
<section class="layout-container pt-20">
    {#each data.body as slice}
        {#if slice.slice_type === "qui_suis-je__"}
        <Presentation {slice}/>
        {:else if slice.slice_type === "les_soins"}
            <div class="pb-32 md:pb-32 grid grid-col-1 md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-5">
                <div class="flex flex-col space-y-6">
                    <Heading
                        titre={PrismicDom.RichText.asText(slice.primary.titre_soins)}
                        font_size='text-6xl'
                        position='text-left'
                        border_left="0"
                        border_transform="0"
                    />
                    <div>{@html PrismicDom.RichText.asHtml(slice.primary.intro_soins)}</div>
                    <CTASection 
                    texte={slice.primary.texte_lien_soins}
                    href="/soins"
                    font_size="text-2xl" />
                </div>
                {#if y < 768}
                <SingleSoin {slice} idx=0/>
                <SingleSoin {slice} idx=1/>
                <SingleSoin {slice} idx=2/>
                <SingleSoin {slice} idx=3/>
                {:else if y >= 768}
                <div class="space-y-5">
                    <SingleSoin {slice} idx=0/>
                    <SingleSoin {slice} idx=1/>
                </div>
                <div class="-mt-10 space-y-5">
                    <SingleSoin {slice} idx=2/>
                    <SingleSoin {slice} idx=3/>
                </div>
                {/if}
            </div>
        {/if}
    {/each}
</section>
<section class="w-full pb-20">
    <div class="bg-gray-900 h-[600px] sm:h-[550px] md:h-[450px] lg:h-96 duration-300">
    {#each data.body as slice}
        {#if slice.slice_type === "temoignages"}
            <Testimonial {slice}/>
        {/if}
    {/each}
    </div>
</section>
{#each data.body as slice}
    {#if slice.slice_type === "nos_rendez-vous"}
        <BandeauHeading 
            titre={PrismicDom.RichText.asText(slice.primary.titre_agenda)}
            intro={slice.primary.intro_agenda}
            font_size="text-6xl"
            is_CTA={true}
            texte="Agenda"
            position="text-center"
            href="/agenda"
            border_left="50%"
            border_transform="-50%" />
        <section class="layout-container py-20 flex flex-col space-y-16">
        {#each slice.items as event, i}
            <Event
            is_home_page={true}
            {y}
            is_img_left={i % 2 === 0 ? true : false}
            {event} />
        {/each}
        </section>
    {/if}
{/each}
{#each data.body as slice}
{#if slice.slice_type === "contact"}
        <section id="contact" class="pb-96">
            <div class="w-full h-72 relative">
                <div class="w-full h-72 absolute top-0 left-0 right-0 z-0 bg-gradient-to-tr from-dore-dark to-dore-light"></div>
                <div class="layout-container flex flex-col md:flex-row justify-between">
                    <div class="mr-auto self-start mt-5 flex flex-col justify-end space-y-5 relative z-10">
                        <h2 class="text-gray-900 font-serif text-4xl lg:text-5xl md:leading-none font-bold max-w-md duration-300">{PrismicDom.RichText.asText(slice.primary.titre_contact)}</h2>
                        <div class="prose max-w-md">{@html PrismicDom.RichText.asHtml(slice.primary.intro_contact)}</div>
                    </div>
                    <div class="w-full md:w-[600px] md:ml-12 mb-20 bg-gray-900 p-8 mt-5 relative z-50 shadow-lg">
                        <form name="contact" method="POST" data-netlify="true" action="/merci">
                            <input type="hidden" name="form-name" value="contact" aria-hidden="true">
                            <label class="text-dore-dark" for="name">
                                Nom
                                <input class="bg-dore-dark text-gray-900 w-full py-3 pl-3 mt-1 mb-4 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" type="text" name="nom" id="name" required aria-required="true">
                            </label>
                            <label class="text-dore-dark" for="email">
                                Email
                                <input class="bg-dore-dark text-gray-900 w-full py-3 pl-3 mt-1 mb-4 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" type="email" name="email" id="email" required aria-required="true">
                            </label>
                            <label class="text-dore-dark" for="message">
                                Message
                                <textarea class="bg-dore-dark text-gray-900 mt-1 mb-4 w-full p-3 rounded focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900" id="message" name="message" cols="30" rows="10" required aria-required="true"></textarea>
                            </label>
                            <button type="submit" class="bg-dore-dark w-full inline-block px-6 py-3 mr-4 text-gray-900 font-bold leading-loose rounded transition duration-200 uppercase focus:outline-none focus:ring-1 focus:ring-dore-light focus:ring-offset-2 focus:ring-offset-gray-900">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
{/if}
{/each}
