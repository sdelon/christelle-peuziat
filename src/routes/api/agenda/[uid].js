import client from '$utils/client'
import Prismic from '@prismicio/client'

export async function get({ params }) {
    const event = await client.query(
        [Prismic.Predicates.at('my.even.uid', params.uid)],
    )

    return {
        body: {
            event: event.results[0]
        }
    }
}
