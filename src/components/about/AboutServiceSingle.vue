<script>
export default {
	props: ['service'],
};
</script>

<template>
	<div
	class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
	>
		<img
			:src="service.img"
			:alt="service.title"
			class="w-36 px-10 rounded-lg mb-6 ml-2 cursor-pointer"
		/>
		<span
			class="font-general-medium text-xl sm:text-xl text-center"
		>
			{{service.title}}
		</span>
	</div>
</template>

<style lang="scss" scoped></style>
