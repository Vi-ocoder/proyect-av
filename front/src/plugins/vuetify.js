import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

// Para usar font awesome 5  - Icons
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    }
});