<template>
	<div
		class="mx-auto w-full rounded-2xl flex flex-row justify-between container bg-secondaryBg"
	>
		<slot class="mr-5" name="SearchInput"></slot>
		<slot name="Btn"></slot>
	</div>
</template>
<script>
	export default {
		name: "SearchBar",
	};
</script>
