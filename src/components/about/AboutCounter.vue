<script>
// import { defineComponent } from 'vue';
// import Vue3autocounter from 'vue3-autocounter';

export default ({
  name: 'Demo',
  components: {
    // Vue3autocounter
  },
  data: () => {
		return {
			experienceTitle: 'Years\' experience in design',
			devTitle: 'Years\' experience in FE development',
			// viewsTitle: '5 freelance clients',
			projectsTitle: 'Projects completed',
		};
	},
});  

</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					4+
				</div>
				<!-- <Vue3autocounter
					ref="counter"
					:startAmount="0"
					:endAmount="4"
					:duration="1"
					suffix="+"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter"
				/> -->
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- GitHub stars counter -->
			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					2
				</div>
				<!-- <Vue3autocounter
					ref="counter"
					:startAmount="0"
					:endAmount="2"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/> -->
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ devTitle }}</span
				>
			</div>

			<!-- Positive feedback counter -->
			<!-- <div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					5
				</div>
				<Vue3autocounter
					ref="counter"
					:startAmount="0"
					:endAmount="400"
					:duration="1"
					suffix="+"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ viewsTitle }}
				</span>
			</div> -->

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
					30+
				</div>
				<!-- <Vue3autocounter
					ref="counter"
					:startAmount="0"
					:endAmount="30"
					:duration="1"
					suffix="+"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				> -->
					{{ projectsTitle }}
				<!-- </span> -->
			</div>
		</div>
	</div>
</template>
