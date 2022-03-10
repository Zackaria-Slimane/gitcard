<template>
	<div class="my-2">
		<i class="fa-solid fa-magnifying-glass fa-lg mx-5 text-white"></i>

		<input
			type="search"
			class="w-3/5 rounded-lg border-0 bg-transparent p-3 text-white shadow"
			placeholder="Username..."
			:value="userName"
			@change="setUserQuerry"
		/>
	</div>
</template>
<script>
	import store from "@/store";

	export default {
		name: "SearchInput",
		data() {
			return {
				userName: store.state.userName,
			};
		},
		methods: {
			setUserQuerry: (event) => {
				store.commit("setUserQuerry", event.target.value);
			},
		},
	};
</script>
