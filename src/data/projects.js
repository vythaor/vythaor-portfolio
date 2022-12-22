// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'iRobot - Control vacuum application',
		category: 'Freelance Project',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'NFT Marketplace',
		category: 'Freelance Project',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Luar Application',
		category: 'Personal Project',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Clean up - Clean storage phone application',
		category: 'Freelance Project',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Behap',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'GoxGreen',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
