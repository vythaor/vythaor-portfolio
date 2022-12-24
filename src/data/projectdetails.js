// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectdetails = [
	{
		id: 1,
		singleProjectHeader: {
            singleProjectTitle: 'iRobot - Vacuum Control Application',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
	},
	{
        id: 2,
        singleProjectHeader: {
            singleProjectTitle: 'NFT Marketplace',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    {
        id: 3,
        singleProjectHeader: {
            singleProjectTitle: 'Clean up',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    {
        id: 4,
        singleProjectHeader: {
            singleProjectTitle: 'Behap',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    {
        id: 5,
        singleProjectHeader: {
            singleProjectTitle: 'Luar',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    },
    {
        id: 6,
        singleProjectHeader: {
            singleProjectTitle: 'GoxGreen',
            singleProjectDate: 'Oct, 2022',
            singleProjectTag: 'Mobile App Design',
        },
        projectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/1.png'),
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/2.png'),
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: require('@/assets/images/irobot/3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Personal customer',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Mobile Application - Design UX&UI',
                },
                {
                    id: 3,
                    title: 'App store',
                    details: `<a href="https://apps.apple.com/gb/app/cleaning-vacuum-app/id1644300826" class="text-blue-500" target="_blank">Cleaning vacuum app</a>`,
                }
                // {
                // 	id: 4,
                // 	title: 'Phone',
                // 	details: '+84969 952 523',
                // },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Photoshop',
                        'Illustrator',
                        'Affter Effects'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Make your Vacuum Cleaner become the best house cleaning vacuum you ever had with this app. We offer you the most frequently used features of the Robot, making sure you can control it with some taps. Enjoying a cup of coffee, watching your favorite shows and managing your Robot vacuum work at the same time.',
                    img: require('@/assets/images/irobot/3.png'),
                },
                {
                    id: 2,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 3,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                },
                {
                    id: 4,
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/realstoman',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/realstoman',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/c/StomanStudio',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: require('@/assets/images/mobile-project-1.jpg'),
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: require('@/assets/images/web-project-1.jpg'),
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: require('@/assets/images/ui-project-2.jpg'),
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: require('@/assets/images/mobile-project-2.jpg'),
                },
            ],
        },
    }
];

export default projectdetails;
