<script>
import AboutServiceSingle from './AboutServiceSingle.vue';

export default {
	components: {
		AboutServiceSingle,
	},
	data: () => {
		return {
			servicesHeading: 'Services I offer',
			services: [
				{
					id: 1,
					title: 'UX/UI Design',
					img: require('@/assets/images/brands/art-and-design.png'),
				},
				{
					id: 2,
					title: 'Product Design',
					img: require('@/assets/images/brands/graphic-design.png'),
				},
				{
					id: 3,
					title: 'Mobile Application Design',
					img: require('@/assets/images/brands/smartphone.png'),
				},
				{
					id: 4,
					title: 'Website Design',
					img: require('@/assets/images/brands/website.png'),
				},
				{
					id: 5,
					title: 'Photo Editing, Photoshop',
					img: require('@/assets/images/brands/camera.png'),
				},
				{
					id: 6,
					title: 'Blend and Retouch',
					img: require('@/assets/images/brands/image.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ servicesHeading }}
		</p>
		<div class="grid md:grid-cols-4 sm:grid-cols-1 mt-10 sm:mt-14 gap-2 flex justify-center">
			<AboutServiceSingle
				v-for="service in services"
				:key="service.id"
				:service="service"
			/>
		</div>
	</div>
</template>
