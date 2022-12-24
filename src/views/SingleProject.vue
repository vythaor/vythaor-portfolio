<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectdetails from '../data/projectdetails'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	computed: {
		getProjectDetails() {
			const dm = projectdetails.find(p => p.id == this.$route.params.id)
			return dm
		}
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
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="getProjectDetails.singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="getProjectDetails.projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="getProjectDetails.projectInfo" />
		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="getProjectDetails.relatedProject" />
	</div>
</template>

<style scoped></style>
