import Vue from 'vue'
import App from './App.vue'
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LWMSTileLayer, LGeoJson, LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-icon', LIcon);
Vue.component('l-marker', LMarker);
Vue.component('l-geo-json', LGeoJson);
Vue.component('l-wms-tile-layer', LWMSTileLayer);
Vue.use(L);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
