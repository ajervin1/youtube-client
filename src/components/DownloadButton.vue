<template>
	<div class="mt-4" v-if="$store.state.download_ready">
		<a class="btn btn-success" @click="resetDownload" :href="download_url">
			Download
		</a>
	</div>
</template>

<script>
	export default {
		name: 'DownloadButton',
		methods: {
			resetDownload () {
				this.$store.state.type = null
				this.$store.state.download_ready = false
			}
		},
		computed: {
			download_url () {
				return 'http://localhost:4000/download?type=' + this.$store.state.file_type
			},
		},
	}
</script>
