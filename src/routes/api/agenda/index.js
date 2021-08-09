import client from '$utils/client'
import Prismic from '@prismicio/client'

export async function get() {
    const agenda = await client.query(
        [Prismic.Predicates.at('document.type', 'page_agenda')]
    )

    const events = await client.query(
        [Prismic.Predicates.at('document.type', 'even')]
    )

    return {
        body: {
            agenda: agenda.results[0],
            events: events.results
        }
    }
}