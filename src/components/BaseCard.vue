<template>
	<div class="mt-5 h-108 rounded-2xl bg-secondaryBg">
		<slot name="Avatar" :image="card.Avatar"></slot>
		<!--general user info-->
		<div class="ml-auto mr-5 w-3/5 pt-16 text-white">
			<span class="flex flex-row justify-between">
				<span>{{ card.username }}</span>
				<span class="mr-5">{{ card.created_at }}</span>
			</span>
			<div class="my-3">{{ card.name }}</div>
		</div>
		<div class="mr-auto w-3/5 pt-16 text-white">
			<span class="ml-10 text-green-300"> {{ card.hireable }}</span>
			<span class="ml-5 sm:ml-48"> {{ card.description }}</span>
		</div>

		<!--mid card banner-->
		<div
			class="mx-auto mt-16 flex w-11/12 flex-row justify-between rounded-2xl bg-bgColor p-10 text-white"
		>
			<span>{{ card.public_repos }}</span>
			<span>{{ card.public_gists }}</span>
			<span>{{ card.followers }}</span>
			<span>{{ card.following }}</span>
		</div>

		<!--bottom card banner-->
		<div class="mx-auto mt-12 w-11/12 p-10 text-white">
			<div class="mb-5 flex flex-row justify-between">
				<span class="ml-5">{{ card.location }} </span>
				<span class="mr-5"> {{ card.blog }}</span>
			</div>
			<div class="flex flex-row justify-between">
				<span class="ml-5">{{ card.twitter }}</span>
				<span class="mr-5">{{ card.company }}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import store from "@/store";
	export default {
		name: "BaseCard",
		data() {
			return {
				card: store.state.cardData,
			};
		},
	};
</script>
