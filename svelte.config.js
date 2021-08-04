import path from 'path'
import { imagetools } from 'vite-imagetools'
import adapter from '@sveltejs/adapter-netlify'
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        vite: {
			plugin:[imagetools()],
			resolve: {
				alias: {
					'$svg': path.resolve('./src/lib/svg')
				}
			}
		}
	},

    preprocess: [preprocess({
        "postcss": true
    })]
};

export default config;
