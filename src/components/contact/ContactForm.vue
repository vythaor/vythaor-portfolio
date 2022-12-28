<script>
import Button from '../reusable/Button.vue';
import emailjs from 'emailjs-com';

emailjs.init('ZOMS_Uo8MBtikLuES');

export default { 
	components: { Button }, 
		name: 'ContactUs',
		data() {
		return {
			name: '',
			email: '',
			message: ''
		}
	},
	methods: {
		sendEmail(e) {
			emailjs.sendForm('service_nd20i4j', 'template_0e4rb2g', e.target, 'ZOMS_Uo8MBtikLuES')
			.then((result) => {
				console.log('SUCCESS!', result.text);
				window.alert('Message sent!')
			}, (error) => {
				console.log('FAILED...', error.text);
				window.alert('Something wrong! Please try again later.')
			});
    }
	}
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Contact Form
			</p>
			<form class="font-general-regular space-y-7" @submit.prevent="sendEmail">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Full Name</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						v-model="name"
						type="text"
						required=""
						placeholder="Your Name"
						aria-label="Name"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Email</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						v-model="email"
						type="text"
						required=""
						placeholder="Your Email"
						aria-label="Email"
					/>
				</div>
				<!-- <div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Subject</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required=""
						placeholder="Subject"
						aria-label="Subject"
					/>
				</div> -->

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						v-model="message"
						cols="14"
						rows="6"
						aria-label="Message"
					></textarea>
				</div>

				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
						v-on:click="sendEmail"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
