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
					time: 'September 2013 - May 2017',
					point: 'GPA: 2.8/4',
					desc: 
					`My major is Software Engineering
					Technical and knowledge:
						- Analysis and design system, working with UML
						- Database management system, using MySQL
						- Programming languages: C#, learning MVC, .NET, PHP
						- Software development life cycle
						- Quality assurance and software testing
						- Web programming`
				},
				{
					id: 2,
					title: 'Keyframe Training',
					img: require('@/assets/images/keyframe.png'),
					time: 'December 2019 - June 2020',
					desc: 'test'
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
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light text-center mb-5"
		>
			Education
		</p>
	</div>
	<div
		class="grid grid-cols-2 gap-4 flex flex-row"	
	>
		<div 
			v-for="edu in educations"
			:key="edu.id"
			:v-html="edu.id"
		>
			<div
				class="leading-loose max-w-xl m-4 p-7
				border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light
				flex justify-between"
			>
				<div>
					<div class="flex items-center">
						<div>
							<img
								:src="edu.img"
								:alt="edu.title"
								class="rounded-t-xl border-none w-10 sm:w-20 h-10 sm:h-20 mr-4"
							/>	
						</div>	
						<div>
							<p
								class="font-general-medium text-primary-dark dark:text-primary-light text-xl"
							>
								{{ edu.title }}
							</p>
						</div>
					</div>
					<div class="flex justify-between mr-20 mt-2 mb-5">
							<i
								data-feather="clock"
								class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
							></i>
							<span
								class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
								>{{ edu.time }}</span
							>
						
							<i v-if="edu.point"
								data-feather="code"
								class="w-4 h-4 text-ternary-dark dark:text-ternary-light ml-5"
							></i>
							<span
								v-if="edu.point"
								class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
							>
								{{ edu.point }}
							</span>
					</div>
					<div class="flex">
						<div>
								{{edu.desc}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>
