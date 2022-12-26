<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						`I have worked as a Front-end Developer for two years before realizing my interest in 
				designing technological products.`,
				},
				{
					id: 2,
					bio:
						`Now I am a UX/UI Designer and I really enjoy my work. 
				In the future, I plan to pursue a career as a Product Design Specialist.`,
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<pre
				v-for="bio in bios"
				:key="bio.id"
				:v-html="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</pre>
		</div>
	</div>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center"
		>
			Education
		</p>
		<div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
			<div
				class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				Industrial University of Ho Chi Minh City
			</div>
			<div
				class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				Industrial University of Ho Chi Minh City
			</div>
		</div>
	</div>
</template>
