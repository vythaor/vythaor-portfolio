<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutServices from '@/components/about/AboutServices';
import AboutBusinesses from '@/components/about/AboutBusinesses';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		AboutServices,
		AboutBusinesses
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>
		
		<!-- About counter -->
		<div class="container mx-auto">
		<AboutServices />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<div class="container mx-auto">
			<AboutBusinesses />
		</div>
	</div>
</template>

<style scoped></style>
