<script lang="ts">
	let newTodo = "";
	let todos: string[] = [];

	function addTodo() {
		if (newTodo.trim()) {
			todos = [...todos, newTodo];
			newTodo = "";
		}
	}

	function removeTodo(index: number) {
		todos = todos.filter((_, i) => i !== index);
	}
</script>

<div class="space-y-6">
	<h1 class="text-3xl font-bold">Todos</h1>

	<div class="flex gap-2">
		<input
			type="text"
			bind:value={newTodo}
			placeholder="Nouvelle tâche..."
			class="flex-1 px-4 py-2 border rounded"
			on:keydown={(e) => e.key === "Enter" && addTodo()}
		/>
		<button
			on:click={addTodo}
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
		>
			Ajouter
		</button>
	</div>

	<ul class="space-y-2">
		{#each todos as todo, index}
			<li class="flex items-center gap-2 p-2 bg-gray-50 rounded">
				<span class="flex-1">{todo}</span>
				<button
					on:click={() => removeTodo(index)}
					class="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
				>
					Supprimer
				</button>
			</li>
		{:else}
			<li class="p-4 text-center bg-gray-50 rounded">
				Aucune tâche pour le moment
			</li>
		{/each}
	</ul>
</div>
