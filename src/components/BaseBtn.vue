<template>
	<div>
		<button
			class="bg-btnColor text-white rounded-lg px-5 py-2 mt-3 mx-3 justify-center items-center"
		>
			{{ BtnLabel }}
		</button>
	</div>
</template>
<script>
	export default {
		name: "BaseBtn",
		props: {
			BtnLabel: String,
		},
	};
</script>
