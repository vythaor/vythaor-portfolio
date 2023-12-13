<script>
import feather from 'feather-icons';

export default {
	data: () => {
		return {
			businessHeading: 'Check my other businesses',
			business: [
				{
					id: 1,
					title: '2am Studio',
					icon: 'instagram',
                    link: 'https://www.instagram.com/2amstudio.vn/'
				},
				{
					id: 2,
					title: 'tudothanhly',
					icon: 'shopping-bag',
                    link: 'https://shopee.vn/shihorou'
				},
				{
					id: 3,
					title: `<p class="text-left">Web Development</p><span class="mt-2 text-left block text-base text-ternary-dark dark:text-ternary-light">Coding is exciting and I still enjoy it</span>`,
					icon: 'github',
                    link: 'https://github.com/vythaor'
				},
			],
		};
	},
    mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ businessHeading }}
		</p>
	<div class="grid md:grid-cols-2 sm:grid-cols-1 mt-10 sm:mt-14 gap-2 ">
        <div
            v-for="business in business"
            :key="business.id"
            :business="business">
            <a
                :href="business.link"
                target="_blank"
            >
                <div 
                class="w-auto py-8 mr-2 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light flex items-center hover:text-red-500 dark:hover:text-red-400"
                >
                    <i
                        :data-feather="business.icon"
                        class="w-5 sm:w-8 h-5 sm:h-8 mr-4"
                    ></i>
                    <span
                        class="font-general-medium text-xl sm:text-xl hover:text-red-500 dark:hover:text-red-400" v-html="business.title"
                    >
                    </span>
                </div>
            </a>
        </div>
	</div>
    </div>
</template>
