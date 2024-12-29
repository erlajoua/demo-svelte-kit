<script lang="ts">
	import Counter from "$lib/components/Counter.svelte";

	let name = "Démo Svelte";
	let showMessage = false;
	let fruits = ["Pomme", "Banane", "Orange", "Fraise"];

	let apiGreeting = "";
	let isLoading = false;

	async function fetchGreeting() {
		isLoading = true;
		try {
			const response = await fetch("/api/greeting");
			const data = await response.json();
			apiGreeting = `${data.greeting} (reçu à ${new Date(data.timestamp).toLocaleTimeString()})`;
		} catch (error) {
			apiGreeting = "Erreur lors de la récupération du message";
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="space-y-8">
	<h1 class="text-3xl font-bold">{name}</h1>
	<div class="space-y-4">
		<button
			on:click={() => (showMessage = !showMessage)}
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
		>
			{showMessage ? "Cacher" : "Montrer"} le message
		</button>

		{#if showMessage}
			<p class="p-4 bg-green-100 rounded">Message secret dévoilé !</p>
		{:else}
			<p class="p-4 bg-gray-100 rounded">Le message est caché</p>
		{/if}
	</div>

	<div class="space-y-2">
		<h2 class="text-xl font-semibold">Liste de fruits</h2>
		<ul class="list-disc pl-5">
			{#each fruits as fruit}
				<li>{fruit}</li>
			{/each}
		</ul>
	</div>

	<Counter name={'DENIS'} />
	<Counter name={'ANATOLE'} />

	<div class="p-4 border rounded-lg space-y-4">
		<h2 class="text-xl font-semibold">Test de l'API</h2>
		<button
			on:click={fetchGreeting}
			class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
			disabled={isLoading}
		>
			{isLoading ? "Chargement..." : "Récupérer un message"}
		</button>

		{#if apiGreeting}
			<p class="p-3 bg-purple-100 rounded">{apiGreeting}</p>
		{/if}
	</div>
</div>
