<script>
  import Departure from '../departure/departure.svelte'

  export let departures
</script>

<ol class="departures">
  {#each departures as departure}
    <Departure departure={ departure }/>
  {/each}
</ol>
