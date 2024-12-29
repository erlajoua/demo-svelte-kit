import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }: { params: any }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await response.json();
	return { user };
};
