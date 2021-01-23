<template>
	<div id="app" class="text-center">

		<h4 class="text-primary">
			<i class="fab text-red-600 fa-youtube"></i>
			Youtube <span class="text-gray-500 font-weight-normal">Converter </span></h4>
		<p class="">
			Also Integrates With The Youtube Api To Search Videos! No Need To Leave The Page!
		</p>

		<VideoUrlForm/>
		<MediaOptions/>
		<DownloadButton />
		<hr class="mt-5 text-primary border-gray-700">
		<YoutubeSearch/>
		<VideoList/>
	</div>
</template>

<script>


	import MediaOptions from './components/MediaOptions'
	import YoutubeSearch from './components/YoutubeSearch'
	import VideoList from './components/VideoList'
	import VideoUrlForm from './components/VideoUrlForm'
	import DownloadButton from './components/DownloadButton'

	export default {
		name: 'App',
		components: { DownloadButton, VideoUrlForm, VideoList, YoutubeSearch, MediaOptions },
		computed: {
			state () {
				return this.$store.state
			}
		}
	}
</script>

<style>
	body {
		background: #2F303E;
	}
</style>
