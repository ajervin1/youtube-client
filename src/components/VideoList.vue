<template>
	<div class="row" v-if="videos.length">
		<div class="col-4 mb-3" v-for="video in videos">
			<video-item :video="video"></video-item>
		</div>
	</div>
</template>

<script>
	import VideoItem from './VideoItem'
	
	export default {
		name: 'VideoList',
		components: { VideoItem },
		computed: {
			videos () {
				return this.$store.state.videos
			}
		},
	}
</script>
