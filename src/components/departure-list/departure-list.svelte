<script>
  export let departures
</script>

<style>

</style>

<ul class="departures">
  {#each departures as departure}
     <li class="departures__item">
      {departure.direction}
     </li>
  {/each}
</ul>
