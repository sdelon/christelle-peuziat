import client from '$utils/client'
import Prismic from '@prismicio/client'
import { homeQuery } from '../../utils/graphQueries'

export async function get() {
    const home = await client.query(
        [Prismic.Predicates.at('document.type', 'page_accueil')],
        {'graphQuery': homeQuery}
    )

    return {
        body: {
            home: home.results[0]
        }
    }
}
