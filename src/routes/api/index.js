import client from '$utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const home = await client.query(
        [Prismic.Predicates.at('document.type', 'page_accueil')]
    )

    return {
        body: {
            home: home.results[0]
        }
    }
}
