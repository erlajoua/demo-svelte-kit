<script lang="ts">
	import "../app.css";
</script>

<header class="bg-slate-800 text-white p-4">
	<nav class="container mx-auto flex gap-4">
		<a href="/" class="hover:text-slate-300">Accueil</a>
		<a href="/todos" class="hover:text-slate-300">Todos</a>
		<a href="/users" class="hover:text-slate-300">Utilisateurs</a>
	</nav>
</header>

<main class="container mx-auto p-4">
	<slot />
</main>
