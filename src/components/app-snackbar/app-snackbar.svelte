<script>
  import { fade } from 'svelte/transition'
  
  export let message
</script>

<style>
  .app-snackbar {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    padding: 1rem;
    background: #333;
    border-radius: 4px;
    color: white;
    font-weight: 300;
    font-size: 0.825rem;
    line-height: 1.4;
  }
</style>

<div transition:fade class="app-snackbar">
  <p>{message}</p>
</div>
