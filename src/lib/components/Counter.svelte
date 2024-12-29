<script lang="ts">
    let count = 0;
    export let name;
  
    function increment() {
      count += 1;
    }
  
    function decrement() {
      count -= 1;
    }
  </script>
  
  <div class="p-4 border rounded-lg shadow-sm space-y-4">
    <h2 class="text-xl font-semibold">Compteur {name}</h2>
    
    <div class="flex items-center gap-4">
      <button 
        on:click={decrement}
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        -
      </button>
      
      <span class="text-2xl font-bold">{count}</span>
      
      <button 
        on:click={increment}
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  </div>