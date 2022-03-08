<template>
	<div class="bg-champagne w-11/12 sm:w-3/5 max-w-full mx-auto h-1/2 container">
		<AppHeader></AppHeader>
	</div>
</template>
<script>
	import AppHeader from "./AppHeader.vue";
	export default {
		name: "app-container",
		components: { AppHeader },
	};
</script>
