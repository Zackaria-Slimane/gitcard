<template>
	<div
		class="container mx-auto flex w-full flex-row justify-between rounded-2xl bg-secondaryBg"
	>
		<slot class="mr-5" name="SearchInput"></slot>
		<slot name="Btn"></slot>
	</div>
</template>
<script>
	export default {
		name: "SearchBar",
		data() {
			return {};
		},
	};
</script>
