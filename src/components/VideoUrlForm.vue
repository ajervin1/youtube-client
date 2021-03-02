<template>
	<section class="form">
		<div class="form-container">
			<form @submit.prevent="handleUpload" class="d-flex">
				<input placeholder="Youtube URL to Download" type="search" :value="video_url"
				       class="form-control rounded-0 rounded-start"/>
				<button class="btn btn-success btn-sm rounded-0 rounded-end">
					Convert
				</button>
			</form>
		</div>
	</section>

</template>

<script>
	import axios from 'axios'
	
	export default {
		name: 'VideoUrlForm',
		computed: {
			video_url () {
				return this.$store.state.youtube_url
			}
		},
		methods: {
			async handleUpload () {
				await this.$store.commit('uploadVideo')
			}
		}
	}
</script>
<style>
	.btn-primary-1 {
		background: #0B9B99;
	}
</style>
