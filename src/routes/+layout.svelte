<script lang="ts">
	import type { PageData } from './$types';
	import { invalidate } from '$app/navigation';

	export let data: PageData;
</script>

<p>foo: {data.foo}</p>

<hr />

<slot />

<hr />

<button on:click={() => invalidate('foo')}>
	invalidate('foo')
</button>
