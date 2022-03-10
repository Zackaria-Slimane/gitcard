<template>
	<div class="img-container bg-transparent ml-5 mt-10">
		<img class="avatar w-24 h-24" :src="image" alt="avatar profile" />
	</div>
</template>
<script>
	export default {
		name: "BaseAvatar",
		data() {
			return {};
		},
		props: {
			image: String,
		},
	};
</script>
<style scoped>
	.img-container {
		position: absolute;
	}
	.avatar {
		border-radius: 80%;
		box-shadow: 1px 2px 4px 2px rgba(255, 255, 255, 0.25);
	}
</style>
