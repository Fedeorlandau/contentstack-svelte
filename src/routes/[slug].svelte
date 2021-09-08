<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';

	import type { PageFields } from 'src/types';
	import { getPageBySlug } from '../api/contentstack';

	export const load = async ({ page }: LoadInput) => {
		return {
			props: {
				page: await getPageBySlug(`${page.params.slug}`)
			}
		};
	};
</script>

<script lang="ts">
	import { Map } from '../components/map';
	export let page: PageFields;
</script>

{#if page.components}
	{#each page.components as component}
		{#if component._content_type_uid}
			<svelte:component this={Map[component._content_type_uid]} {...component} {page} />
		{/if}
	{/each}
{/if}
