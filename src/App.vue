<template>
	<div id="app">
		
		<About class="mb-4"/>
		
		<VideoUrlForm class="mb-4"/>
		<MediaOptions class="mb-4"/>
		<DownloadButton class="mb-4"/>
		<Spinner  v-if="$store.state.loading"/>
		<YoutubeSearch class="mb-4"/>
		<VideoList v-if="$store.state.videos.length"/>
	
	</div>
</template>

<script>
	
	
	import MediaOptions from './components/MediaOptions'
	import YoutubeSearch from './components/YoutubeSearch'
	import VideoList from './components/VideoList'
	import VideoUrlForm from './components/VideoUrlForm'
	import DownloadButton from './components/DownloadButton'
	import About from './components/About'
	import Spinner from './components/Spinner'
	
	export default {
		name: 'App',
		components: { Spinner, About, DownloadButton, VideoUrlForm, VideoList, YoutubeSearch, MediaOptions },
		computed: {
			state () {
				return this.$store.state
			}
		}
	}
</script>

