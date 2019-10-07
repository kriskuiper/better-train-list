<script>
  import { createEventDispatcher } from 'svelte'
  import stations from '../../../public/data/stations/index.json'

  const dispatch = createEventDispatcher()

  let inputValue = ''

  $: filteredStations = () => {
    if (inputValue) {
      return Object.keys(stations).filter((station) => {
        return station.includes(inputValue.toLowerCase())
      })
    }

    return []
  }

  const handleFilteredStationClick = (event) => {
    inputValue = event.target.innerText
  }
</script>

<style>
  .app-form__search-form {
    margin-bottom: 1.2rem;
  }

  .app-form__search-input {
    padding: 1rem;
    border: 0;
    font-size: 1rem;
    display: block;
    width: 100%;
    margin-bottom: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .app-form__filtered-stations-list {
    margin-bottom: 1rem;
  }

  .app-form__filtered-station {
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid lightgray;
    background: transparent;
    width: 100%;
    padding: 1rem;
    margin-bottom: -1px;
  }

  .button {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .button--primary {
    background: #651fff;
    border-radius: 5px;
    color: white;
  }
</style>

<form action="" class="app-form__search-form" on:submit|preventDefault={() => dispatch('form-submit', inputValue) }>
  <label for="app-form__search-input" class="sr-only">Vul de naam van het treinstation in</label>
  <input
    id="app-form__search-input"
    type="search"
    class="app-form__search-input"
    placeholder="Naam van treinstation"
    bind:value={inputValue}
  >
  {#if filteredStations().length > 0}
    <ul class="app-form__filtered-stations-list">
      {#each filteredStations() as filteredStation}
        <li>
          <button
            on:click={handleFilteredStationClick}
            type="button"
            class="app-form__filtered-station"
          >{ filteredStation }</button>
        </li>
      {/each}
    </ul>
  {/if}
  <button class="button button--primary">Zoek treinen</button>
</form>
