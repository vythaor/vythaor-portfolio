<script>
export default {
	data: () => {
		return {
			copyrightDate: '2022',
			projectName: 'Sherry\'s Portfolio',
			author: 'vythaor',
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
				<a
					target="__blank"
					href="https://github.com/vythaor"
					class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-red-600 dark:hover:text-red-300 duration-500"
					>{{ author }}</a
				>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
