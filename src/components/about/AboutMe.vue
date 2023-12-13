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
			educations: [
				{
					id: 1,
					title: 'Bachelor of Computer Science',
					img: require('@/assets/images/logo-iuh.svg'),
					time: 'Sept 2013 - May 2017',
					point: 'GPA: 2.8/4',
					desc: 
					`My major is Software Engineering. </br>
					Technical and knowledge: </br>
					&nbsp- Analysis and design system, working with UML </br>
					&nbsp- Database management system, using MySQL </br>
					&nbsp- Programming languages: C#, learning MVC, .NET, PHP </br>
					&nbsp- Software development life cycle </br>
					&nbsp- Quality assurance and software testing </br>
					&nbsp- Web programming </br>` 
				},
				{
					id: 2,
					title: 'Keyframe Training',
					img: require('@/assets/images/keyframe.png'),
					time: 'Dec 2019 - Jun 2020',
					desc: `
						What I learnt: </br>
						- Mindset, design thinking and process in designing digital product </br>
						- Knowledge and UX Research, UX Design from Lo-fi wireframe to Hi-fi wireframe </br>
						- Design system manage </br>
						- Design complete a personal project with a team </br>
						- UX/UI career path
					`
				}
			]
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
			<div
				v-for="bio in bios"
				:key="bio.id"
				:v-html="bio.id"
				class="leading-loose font-general-regular text-ternary-dark dark:text-ternary-light text-lg mb-6"
			>
				{{ bio.bio }}
		</div>
		</div>
	</div>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center mb-5"
		>
			Education
		</p>
	</div>
	<div
		class="grid flex md:grid-cols-2 gap-4 md:flex-row sm:flex-col"	
	>
		<div 
			v-for="edu in educations"
			:key="edu.id"
			:v-html="edu.id"
		>
			<div
				class="leading-loose max-w-xl m-4 p-7
				border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-6 cursor-pointer dark:bg-secondary-light
				flex flex-row"
			>
				<div>
					<div class="flex flex-row items-center">
						<div>
							<img
								:src="edu.img"
								:alt="edu.title"
								class="rounded-t-xl border-none w-10 sm:w-20 h-10 sm:h-20 mr-4"
							/>	
						</div>	
						<div>
							<p
								class="font-general-medium text-xl text-left ml-2"
							>
								{{ edu.title }}
							</p>
						</div>
					</div>
					<div class="flex md:flex-row sm:flex-col mb-2 mt-2 grid md:grid-cols-2 sm:grid-cols-1">
						<div class="flex flex-row items-center">
							<div>
								<i
									data-feather="clock"
									class="w-4 h-4"
								></i>
							</div>
							<div>
								<span
									class="font-general-medium ml-2 leading-none"
									>{{ edu.time }}</span
								>
							</div>
						</div>
						<!-- <div class="flex flex-row items-center">
							<div>
								<i v-if="edu.point"
									data-feather="award"
									class="w-4 h-4 md:ml-5"
								></i>
							</div>
							<div>
								<span
									v-if="edu.point"
									class="font-general-medium ml-2 leading-none"
								>
									{{ edu.point }}
								</span>
							</div>
						</div> -->
					</div>
					<div class="text-left">
						<div v-html="edu.desc">
								
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
