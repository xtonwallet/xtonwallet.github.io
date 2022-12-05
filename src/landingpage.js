import LandingPage from './components/LandingPage.svelte';
import { writable } from 'svelte/store';

const loaded = writable(false);

window.addEventListener('load', () => {
  try{
    loaded.set(true);
  } catch (e) {
    console.log(e);
  }
});

new LandingPage({
  target: document.body,
  props: {loaded}
});
