<script>
  import departures from '../data/fake-departures'
  import nsApiFetch from '../lib/ns-api-fetch'

  import AppHeader from './components/app-header/app-header.svelte'
  import AppFooter from './components/app-footer/app-footer.svelte'
  import DepartureList from './components/departure-list/departure-list.svelte'
</script>

<style>
  .app-home {
    flex-grow: 1;
    padding: 1em;
    color: #000;
  }
</style>

<AppHeader />
<main class="app-home">
  <h2>Departing trains:</h2>
  <DepartureList departures="{departures}" />
</main>
<AppFooter />
