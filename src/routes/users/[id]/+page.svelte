<script lang="ts">
    export let data;
    const { user } = data;
  </script>
  
  <div class="space-y-6">
    <a 
      href="/users"
      class="inline-block px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
    >
      ← Retour
    </a>
  
    <div class="p-6 border rounded-lg space-y-4">
      <h1 class="text-3xl font-bold">{user.name}</h1>
      
      <div class="space-y-2">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Téléphone:</strong> {user.phone}</p>
        <p><strong>Site web:</strong> {user.website}</p>
        <p><strong>Entreprise:</strong> {user.company.name}</p>
        <p>
          <strong>Adresse:</strong><br>
          {user.address.street}<br>
          {user.address.suite}<br>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  </div>