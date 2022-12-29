<script>
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		Button,
	},
};
</script>

<template>
		<!-- Banner right illustration -->
		<div class="flex justify-center">
			<img
				src="@/assets/images/not-found.svg"
				alt="Developer"
				class="w-2/4 mt-10"
			/>
		</div>
		<p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center mb-5 mt-10">
			404 Not found
		</p>
		<div class="flex justify-center mt-20">
			<router-link
				to="/"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 text-white text-lg sm:text-xl duration-300"
				aria-label="Home"
			>
				<Button title="Back to Home" />
			</router-link>
		</div>
</template>

<style scoped></style>
