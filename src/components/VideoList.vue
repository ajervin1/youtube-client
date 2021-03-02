<template>
	<section class="video-list">
		<div class="row" >
			<div class="col-4 mb-3" v-for="video in $store.state.videos">
				<VideoItem :video="video"/>
			</div>
		</div>
	</section>

</template>

<script>
	import VideoItem from './VideoItem'
	
	export default {
		name: 'VideoList',
		components: { VideoItem },
		
	}
</script>
