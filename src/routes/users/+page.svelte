<script lang="ts">
	import type { UsersPageData } from "$lib/types";

	export let data: UsersPageData;
	const { users } = data;
</script>

<div class="space-y-6">
	<h1 class="text-3xl font-bold">Utilisateurs</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each users as user}
			<a
				href="/users/{user.id}"
				class="block p-4 border rounded-lg hover:bg-gray-50"
			>
				<h2 class="text-xl font-semibold">{user.name}</h2>
				<p class="text-gray-600">{user.email}</p>
			</a>
		{/each}
	</div>
</div>
