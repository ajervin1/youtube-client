import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
	state: {
		media_type: 'video',
		videos: [],
		type: null,
		youtube_url: ''
	},
	getters: {
		download_ready (state) {
			return state.type != null
		}
	}
})
new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
