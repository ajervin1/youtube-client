<template>
	<section class="search">
		<h2 class="mb-3">Search Youtube Videos</h2>
		<div class="form-container">
			<form @submit.prevent="searchVideos" class="d-flex">
				<input type="search" placeholder="Search Videos To Download" v-model='term'
				       class="form-control rounded-0 rounded-start"/>
				<button class="btn btn-primary rounded-0 rounded-end">
					Search
				</button>
			</form>
		</div>
	</section>

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
				
				this.$store.commit('searchVideos', this.term)
				this.term = ''
				
			}
		}
	}
</script>
