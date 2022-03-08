<template>
	<div class="mx-auto w-11/12 max-w-full">
		<nav class="rounded-lg h-24 px-4 py-8 text-white shadow-md dark:bg-gray-800 sm:px-4">
			<div class="container mx-auto flex items-center justify-between">
				<a class="flex">
					<span
						class="cursor-pointer self-center whitespace-nowrap text-3xl font-bold hover:text-black dark:text-white"
					>
						Git lookup
					</span>
				</a>
				<a class="mr-3 flex items-center">
					<img :src="imageMode" />
				</a>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "appHeader",
		data() {
			return {
				imageMode: "https://img.icons8.com/office/30/000000/bright-moon.png",
			};
		},
	};
</script>
