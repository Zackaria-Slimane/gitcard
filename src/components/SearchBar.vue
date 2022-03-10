<template>
	<div
		class="mx-auto w-full rounded-2xl flex flex-row justify-between container bg-secondaryBg"
	>
		<slot class="mr-5" name="SearchInput"></slot>
		<slot name="Btn" @click="getUser"></slot>
	</div>
</template>
<script>
	import store from "@/store";
	export default {
		name: "SearchBar",
		data() {
			return {
				methods: {
					getUser() {
						store.dispatch("getUserData");
					},
				},
			};
		},
	};
</script>
