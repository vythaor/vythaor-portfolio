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
</template>
