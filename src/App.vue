<template>
	<main
		class="font-poppins mx-auto w-11/12 sm:w-2/5 max-w-full my-auto overscroll-none mt-16"
	>
		<AppHeader></AppHeader>
		<SearchBar class="mx-2">
			<template #SearchInput> <SearchInput> </SearchInput></template>
			<template #Btn> <BaseBtn BtnLabel="Search"></BaseBtn> </template>
		</SearchBar>
		<BaseCard>
			<template #Avatar> <BaseAvatar></BaseAvatar></template>
		</BaseCard>
	</main>
</template>

<script>
	import AppHeader from "./components/AppHeader.vue";
	import SearchBar from "./components/SearchBar.vue";
	import BaseBtn from "./components/BaseBtn.vue";
	import SearchInput from "./components/SearchInput.vue";
	import BaseCard from "./components/BaseCard.vue";
	import BaseAvatar from "./components/BaseAvatar.vue";
	export default {
		name: "App",
		components: { AppHeader, SearchBar, BaseBtn, SearchInput, BaseCard, BaseAvatar },
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
