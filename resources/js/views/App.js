require('./bootstrap');

// Importiamo vue
window.Vue = require('vue');

// IMportiamo le rotte e la nostra vie App.vue
import Routes from './routes.js';
import App from './views/App';

// instanziamo Vue in una costante app
const app = new Vue({
    el: "#app", // questo è il div che contiene l'app
    router: Routes, // qui diciamo a vue di usare
    render: h => h(App) // questo è un modo più moderno per scrivere le funzioni in Javascript
});


export default App;
