<template>
	<div>
		<button :class="{'active': $store.state.media_type == option.media}"
		        @click="changeMedia(option.media)"
		        class="btn btn-primary mr-3 opacity-80 shadow-sm" v-for="option in options">
			<i :class="option.icon"></i>
			{{option.media }}
		</button>
	</div>
</template>

<script>
	/*
	 Change Media Options
	 Change Media To Mp4 or Mp3
	 * */
	export default {
		name: 'MediaOptions',
		data () {
			return {
				options: [
					{
						media: 'video', icon: 'fa fa-video mr-1'
					},
					{
						media: 'audio',
						icon: 'fa fa-music mr-1'
					} ]
			}
		},
		methods: {
			changeMedia (media) {
				this.$store.state.media_type = media
			}
		}
	}
</script>
