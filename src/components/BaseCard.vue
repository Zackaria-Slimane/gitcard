<template>
	<div class="h-108 bg-secondaryBg rounded-2xl mt-5">
		<slot name="Avatar"></slot>
		<!--general user info-->
		<div class="ml-auto text-white w-3/5 pt-16 mr-5">
			<span class="flex flex-row justify-between">
				<span>TEST 1</span>
				<span class="mr-5">TEST 2</span>
			</span>
			<div class="my-3">TEST3</div>
		</div>
		<div class="mr-auto text-white w-3/5 pt-16">
			<span class="ml-10 text-green-300"> Hirable</span>
			<span class="ml-5 sm:ml-48"> Bio description</span>
		</div>

		<!--mid card banner-->
		<div
			class="w-11/12 mt-16 p-10 rounded-2xl bg-bgColor mx-auto flex flex-row justify-between text-white"
		>
			<span>repos</span>
			<span>gists</span>
			<span>followers</span>
			<span>following</span>
		</div>

		<!--bottom card banner-->
		<div class="w-11/12 mt-12 p-10 mx-auto text-white">
			<div class="flex flex-row justify-between mb-5">
				<span class="ml-5">Location </span>
				<span class="mr-5"> Blog</span>
			</div>
			<div class="flex flex-row justify-between">
				<span class="ml-5">Twitter</span>
				<span class="mr-5">Company</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "BaseCard",
	};
</script>
