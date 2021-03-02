import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		media_type: 'video',
		videos: [],
		file_type: null,
		youtube_url: '',
		loading: false,
		download_ready: false
	},
	mutations: {
		// Search Youtube Videos
		async searchVideos (state, term) {
			const url = 'https://youtube.googleapis.com/youtube/v3/search'
			const { data } = await axios.get(url, {
				params: {
					key: 'AIzaSyDUtpvtgTen_5xFVddBdn9NLVRhhC1EKQg',
					type: 'video',
					q: term,
					maxResults: 3,
				}
			})
			state.videos = data.items
			
		},
		async uploadVideo (state) {
			const url = 'http://localhost:4000/convert'
			const options = { media_type: state.media_type, youtube_url: state.youtube_url }
			state.loading = true
			const { data } = await axios.post(url, options)
			state.loading = false
			state.file_type = data.type
			state.download_ready = true
			state.youtube_url = ''
		}
	},
})


export default store
