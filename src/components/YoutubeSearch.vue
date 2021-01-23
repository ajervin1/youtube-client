<template>
	<form @submit.prevent="searchVideos" class="d-flex w-75 my-5 mx-auto">
		<input type="search" placeholder="Search Videos To Download" v-model='term'
		       class="form-control rounded-right-0"/>
		<button class="btn btn-primary rounded-left-0 btn-primary-1 border-0">
			Submit
		</button>
	</form>
</template>

<script>
	/*
	 Search Youtube Videos
	 populates videos in this.$store.state.videos
	 * */
	import axios from 'axios'
	
	export default {
		name: 'YoutubeSearch',
		data () {
			return {
				term: ''
			}
		},
		methods: {
			// Search Youbue Videos
			async searchVideos () {
				const youtube_url = 'https://youtube.googleapis.com/youtube/v3/search'
				const { data } = await axios.get(youtube_url, {
					params: {
						key: 'AIzaSyDUtpvtgTen_5xFVddBdn9NLVRhhC1EKQg',
						type: 'video',
						q: this.term,
						maxResults: 3,
					}
				})
				this.term = ""
				this.$store.state.videos = data.items
			}
		}
	}
</script>
