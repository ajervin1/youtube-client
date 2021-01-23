<template>
	<article class="card">
		<iframe class="card-img-top" :src="`https://www.youtube.com/embed/${video.id.videoId}`"></iframe>
		
		<div class="card-body">
			
			
			<button @click="setYoutubeUrl" class="btn btn-primary btn-sm">
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
			console.log(this.$parent.$data)
		}
	}
</script>
