import { browser } from '$app/env';
import { invalidate } from '$app/navigation';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	console.log('page load running');
	if (browser) {
		invalidate('foo');
	}
	return {
		bar: await fetch('/getBar').then(r => r.json())
	};
};
