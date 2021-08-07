import client from '$utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const soins = await client.query(
        [Prismic.Predicates.at('document.type', 'page_soins')],
    )

    return {
        body: {
            soins: soins.results[0]
        }
    }
}
