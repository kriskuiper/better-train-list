<script>
  export let departures
</script>

<style>
  .departures__item {
    margin-bottom: 1rem;
  }
</style>

<ul class="departures">
  {#each departures as departure}
    <li class="departures__item">
      <h3 class="departure__title">{ departure.direction }</h3>
      <p class="departure__category">Soort: { departure.product.longCategoryName }</p>
      <p class="departure__track">Spoor: { departure.plannedTrack }</p>
      <p class="departure__medium-stations-title">Stopt op de volgende stations: </p>
      <ul class="departure__medium-stations">
        {#each departure.routeStations as station}
          <li>{ station.mediumName }</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
