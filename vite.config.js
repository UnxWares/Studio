import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', "resources/styles/app.scss", 'resources/js/app.js'],
            refresh: true,
	    postcss: [
            	autoprefixer()
            ],
        }),
        tailwindcss(),
	svelte({
		prebundleSvelteLibraries: true,
	}),
    ],
    css: {
        	preprocessorOptions: {
        	scss: {},
    	},
    },
});
