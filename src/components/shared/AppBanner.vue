<script>
import feather from 'feather-icons';
// import ViewCVModal from '../ViewCVModal.vue';

export default {
	components: {
    // ViewCVModal
},
	name: 'Home',
	data: () => {
		return {
			theme: '',
			modal: false
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {
		// showModal() {
		// 	if (this.modal) {
		// 		// Stop screen scrolling
		// 		document
		// 			.getElementsByTagName('html')[0]
		// 			.classList.remove('overflow-y-hidden');
		// 		this.modal = false;
		// 	} else {
		// 		document
		// 			.getElementsByTagName('html')[0]
		// 			.classList.add('overflow-y-hidden');
		// 		this.modal = true;
		// 	}
		// },
	},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hi, I'm Sherry
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				An UX/UI Designer
			</p>
			<!-- <div class="flex justify-center sm:block cursor-pointer" @click="showModal()">
				<a
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-red-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-red-50 focus:ring-1 focus:ring-red-900 hover:bg-red-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
					target="_blank"
				>
					<i
						data-feather="paperclip"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>View CV</span
					></a
				>
			</div> -->
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<!-- <img
				v-if="theme === 'light'"
				src="@/assets/images/sapiens.svg"
				alt="Developer"
			/> -->
			<img
				src="@/assets/images/sapiens.svg"
				alt="Developer"
			/>
		</div>

		<!-- Hire me modal -->
		<!-- <ViewCVModal
			:showModal="showModal"
			:modal="modal"
			:categories="categories"
			aria-modal="Hire Me Modal"
		/> -->
	</section>
</template>

<style scoped></style>
