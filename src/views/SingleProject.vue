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
			return projectdetails.find(p => p.id == this.$route.params.id)
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

		<!-- Project information -->
		<ProjectInfo :projectInfo="getProjectDetails.projectInfo" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="getProjectDetails.projectImages" />
		
		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="getProjectDetails.relatedProject" :project="getProjectDetails.projectInfo" />
	</div>
</template>

<style scoped></style>
