// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({

	  site: 'https://dantehalfeye.github.io',
  	  base: '/SimulationStudies/',



	integrations: [
		starlight({
			plugins: [starlightCatppuccin({dark: { flavor: "mocha", accent: "green" }, light: { flavor: "latte", accent: "flamingo" }, }),],
			logo: {src: './src/assets/Pokemon.png'},
			favicon: './src/assets/Pokemon.png',
			title: 'Simulation Studies',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DanteHalfeye/SimulationStudies' }],
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: 'overview/' },
					],
				},
				{
					label: 'Chapters',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Chapter 0: Randomness', link: '/chapters/01randomness' },
						{ label: 'Chapter 0: Project', link: '/chapters/emergentoceansimulation' },
					],
				},
				{
					label: 'References',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'References', link: '/references/references' },
					
					],
				},
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/test' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},*/
			],
		}),
	],
});
