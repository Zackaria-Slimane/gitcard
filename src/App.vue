<template>
	<main
		class="mx-auto my-auto mt-16 w-11/12 max-w-full overscroll-none font-poppins sm:w-2/5"
	>
		<AppHeader></AppHeader>
		<SearchBar class="mx-2">
			<template #SearchInput> <SearchInput> </SearchInput></template>
			<template #Btn>
				<BaseBtn BtnLabel="Search" @click.prevent="getUser"></BaseBtn>
			</template>
		</SearchBar>
		<BaseCard :class="{ hidden: cardState }">
			<template #Avatar> <BaseAvatar></BaseAvatar></template>
		</BaseCard>
	</main>
</template>

<script>
	import store from "./store";
	import AppHeader from "./components/AppHeader.vue";
	import SearchBar from "./components/SearchBar.vue";
	import BaseBtn from "./components/BaseBtn.vue";
	import SearchInput from "./components/SearchInput.vue";
	import BaseCard from "./components/BaseCard.vue";
	import BaseAvatar from "./components/BaseAvatar.vue";

	export default {
		name: "App",
		components: { AppHeader, SearchBar, BaseBtn, SearchInput, BaseAvatar, BaseCard },
		data() {
			return {
				cardHidden: store.state.cardHidden,
			};
		},
		computed: {
			cardState() {
				return store.getters.getCardState;
			},
		},
		methods: {
			getUser() {
				console.log("fetching user", store.state.userName);
				store.dispatch("getUserData");
			},
		},
	};
</script>

<style lang="scss">
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	html {
		background-color: #020922;
	}

	body {
		height: 100vh;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
