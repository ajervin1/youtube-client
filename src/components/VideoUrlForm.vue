<template>
	<section class="">
		<form @submit.prevent="handleConversion" class=" d-flex w-75 mx-auto mt-5 mb-4">
			<input placeholder="Video URL to Download" type="search" :value="video_url"
			       class="form-control rounded-right-0"/>
			<button class="btn rounded-left-0 btn-primary btn-primary-1 border-0">
				Submit
			</button>
		</form>
		<div class="spinner-border text-primary" v-if="loading">
		
		</div>
	</section>

</template>

<script>
	/*
	 Sends A Post Request To Convert YoutubeUrl to mp4 or mp3
	 {youtube_url: '', media_type: ""}
	 * */
	import axios from 'axios'
	
	export default {
		name: 'VideoUrlForm',
		data () {
			return {
				loading: false
			}
		},
		computed: {
			video_url () {
				return this.$store.state.youtube_url
			}
		},
		methods: {
			async handleConversion () {
				this.loading = true;
				const media_type = this.$store.state.media_type
				const payload = { media_type, youtube_url: this.$store.state.youtube_url }
				const video_url = 'http://localhost:4000/convert'
				const { data } = await axios.post(video_url, payload);
				this.loading = false;
				this.$store.state.type = data.type
				this.$store.state.youtube_url = ''
			}
		}
	}
</script>
<style>
	.btn-primary-1 {
		background: #0B9B99;
	}
</style>
