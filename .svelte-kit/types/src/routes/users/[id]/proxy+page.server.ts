// @ts-nocheck
import type { PageServerLoad } from "./$types";

export const load = async ({ params }: { params: any }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await response.json();
	return { user };
};
;null as any as PageServerLoad;