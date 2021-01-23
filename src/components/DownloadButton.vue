<template>
	<div class="mt-4">
		<a class="btn btn-success" @click="resetDownload" :href="download_url" v-if="is_ready">Download</a>
	</div>
</template>

<script>
	/*
	 Download Button
	 
	 * */
	export default {
		name: 'DownloadButton',
		methods: {
			resetDownload () {
				this.$store.state.type = null
			}
		},
		computed: {
			download_url () {
				return 'http://localhost:4000/download?type=' + this.$store.state.type
			},
			is_ready () {
				return this.$store.getters.download_ready
			}
		}
	}
</script>
