<script>
  import stations from '../public/data/stations/index.json'

  import AppHeader from './components/app-header/app-header.svelte'
  import AppForm from './components/app-form/app-form.svelte'
  import DepartureList from './components/departure-list/departure-list.svelte'
  import AppFooter from './components/app-footer/app-footer.svelte'
  import AppSnackbar from './components/app-snackbar/app-snackbar.svelte'

  let departureList = ''
  let appError = ''
  let snackbar = false

  const showSnackbar = () => {
    snackbar = true
  }

  const hideSnackbar = () => {
    snackbar = false
  }

  const getDepartures = (event) => {
    const { detail } = event
    const station = stations[detail.toLowerCase()]

    return fetch('/.netlify/functions/get-departures', { 
      method: 'POST',
      body: JSON.stringify({ station }),
    })
      .then(res => res.json())
      .then(data => departureList = data.payload.departures)
      .catch(error => {
        console.error(error)

        appError = 'Kan vetrekkende treinen nu niet laden. Probeer het later nog eens.'
        showSnackbar()

        setTimeout(() => {
          hideSnackbar()
          appError = ''
        }, 3000)
      })
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
</style>

<AppHeader />
<main class="app-home">
  <h2 class="app-home__title">Op welk treinstation ben je?</h2>
  <AppForm on:form-submit={getDepartures} />
  <DepartureList departures={departureList} />
  {#if snackbar}
    <AppSnackbar message={appError}/>
  {/if}
</main>
<AppFooter />
