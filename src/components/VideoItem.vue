<template>
	<article class="card shadow-lg">
		<iframe :src="`https://www.youtube.com/embed/${video.id.videoId}`" class="card-img-top">
		
		</iframe>
		<div class="card-body">
			<button @click="setYoutubeUrl" class="btn btn-accent d-block w-100">
				Get Youtube Url
			</button>
		</div>
		
	</article>
</template>

<script>
	/*
	 VideoItem
	 Has Download Button
	 * */
	export default {
		name: 'VideoItem',
		props: [ 'video' ],
		data () {
			return {}
		},
		computed: {
			youtube_url () {
				return 'https://www.youtube.com/watch?v=' + this.video.id.videoId
			}
		},
		methods: {
			setYoutubeUrl () {
				this.$store.state.youtube_url = this.youtube_url
			}
		},
		created () {
		
		}
	}
</script>
