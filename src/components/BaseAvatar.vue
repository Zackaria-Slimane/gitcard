<template>
	<div class="img-container bg-transparent ml-5 mt-10">
		<img
			class="avatar w-24 h-24"
			src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
			alt="avatar profile"
		/>
	</div>
</template>
<script>
	export default {
		name: "BaseAvatar",
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
