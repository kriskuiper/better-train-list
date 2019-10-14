<script>
  export let departure

  const formatDateForDeparture = () => {
    const departureTime = new Date(departure.actualDateTime)
    const hours = departureTime.getHours()
    const minutes = departureTime.getMinutes() < 10 
      ? `0${departureTime.getMinutes()}` 
      : departureTime.getMinutes()

    return `${hours}:${minutes}`
  }
</script>

<style>
  .departure {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  .departure__title {
    color: #333;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .departure__model {
    font-style: italic;
  }

  .departure__header,
  .departure__content {
    display: flex;
    justify-content: space-between;
  }

  .departure__header {
    margin-bottom: 1rem;
  }

  .departure__details {
    margin-top: 1rem;
  }

  .departure__summary {
    color: #651fff;
    font-weight: 500;
    text-transform: uppercase;
  }

  .departure__details > *:nth-child(2) {
    margin-top: 0.675rem;
  }

  .departure__details .departure__route-stations {
    margin-top: 0.675rem;
    line-height: 1.4;
  }

  .departure__summary::-webkit-details-marker {
    display: none;
  }
</style>

<li class="departure">
  <header class="departure__header">
    <p class="departure__time"><span class="sr-only">Vertrekt om:</span>{formatDateForDeparture()} <span class="sr-only">uur</span></p>
    <p class="departure__model">{ departure.product.longCategoryName }</p>
  </header>
  <h3 class="departure__title"><span class="sr-only">Richting</span>{ departure.direction }</h3>
  <div class="departure__content">
    <p class="departure__track">Spoor: { departure.plannedTrack }</p>
  </div>
  {#if departure.routeStations}
    <details class="departure__details">
      <summary class="departure__summary">Details</summary>
      <h4>Via:</h4>
      <ol id="route-stations" class="departure__route-stations">
        {#each departure.routeStations as routeStation}
          <li>{ routeStation.mediumName }</li>
        {/each}
      </ol>
    </details>
  {/if}
</li>
