<script>
  import stations from '../public/data/stations/index.json'

  import AppHeader from './components/app-header/app-header.svelte'
  import AppFooter from './components/app-footer/app-footer.svelte'
  import DepartureList from './components/departure-list/departure-list.svelte'

  let inputValue = ''
  let departureList = ''

  const getDepartures = () => {
    const station = stations[inputValue.toLowerCase()]

    // @TODO: add real endpoint for production
    return fetch('http://localhost:9000/get-departures', { 
      method: 'POST',
      body: JSON.stringify({ station }),
    })
      .then(res => res.json())
      .then(data => setDepartures(data.payload.departures))
      .catch(error => {
        console.error(error)
      })
  }

  function setDepartures(departures) {
    departureList = departures
  }
</script>

<style>
  .app-home {
    flex-grow: 1;
    padding: 2rem 1rem;
    color: #000;
  }

  .app-home__title {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  .app-home__search-form {
    margin-bottom: 1.2rem;
  }

  .app-home__search-input {
    padding: 1rem;
    border: 0;
    font-size: 1rem;
    display: block;
    width: 100%;
    margin-bottom: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
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

<AppHeader />
<main class="app-home">
  <h2 class="app-home__title">Op welk treinstation ben je?</h2>
  <form action="" class="app-home__search-form" on:submit|preventDefault={getDepartures}>
    <label for="" class="sr-only">Vul de naam van het treinstation in</label>
    <input
      type="search"
      class="app-home__search-input"
      bind:value={inputValue}
      placeholder="Naam van treinstation"
    >
    <button class="button button--primary">Zoek treinen</button>
  </form>
  <DepartureList departures={departureList} />
</main>
<AppFooter />
