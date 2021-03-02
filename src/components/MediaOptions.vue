<template>
	<section class="media-options">
		<nav class="nav nav-pills bg-nav-pills d-inline-flex">
			<button class="btn nav-item nav-link shadow"
			        :class="{'active': this.$store.state.media_type == 'video'}"
			        @click="changeMedia('video')">
				<i class="fa fa-video"></i>
				MP4
			</button>
			<button
					:class="{'active': this.$store.state.media_type == 'audio'}"
					class="btn  ml-2 nav-item nav-link shadow"
					@click="changeMedia('audio')">
				<i class="fa fa-music"></i>
				MP3
			</button>
		</nav>
	</section>
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
				options: [ 'audio', 'video' ]
			}
		},
		methods: {
			changeMedia (media) {
				this.$store.state.media_type = media
			}
		}
	}
</script>
