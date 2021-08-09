import client from '$utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const faq = await client.query(
        [Prismic.Predicates.at('document.type', 'page_faq')]
    )

    return {
        body: {
            faq: faq.results[0]
        }
    }
}
