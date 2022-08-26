import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ depends, fetch }) => {
	console.log('layout load running');
	depends('foo');
	return {
		foo: await fetch('/getFoo').then(r => r.json()),
	};
};
