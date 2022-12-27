<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Sherry Portfolio',
			author: 'Sherry (vythaor)',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<span
				class="font-general-medium"
			>
				{{ projectName }}
		</span>	
			. Developed by
			<router-link
				to="/about"
			>
				<a
					target="__blank"
					class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-red-600 dark:hover:text-red-300 duration-500"
					>{{ author }}</a
				>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
