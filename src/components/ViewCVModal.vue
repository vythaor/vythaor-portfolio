<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
export default {
	props: ['showModal', 'modal'],
	components: { Button },
	data() {
		return {};
	},
	mounted() {
		this.$el.querySelector("#error").innerHTML = "";
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
		openCV(){
			var password = document.getElementById('key').value;
			if(password == "thankyou"){	
				window.open("../vythaor-portfolio/files/UX-UI-Designer-Phan-Hoang-Vy-Thao.pdf");
				this.showModal()
			}else{
				document.getElementById('error').innerHTML = 'Wrong password';
				document.querySelector("#error").style.display = "block";
			}
		}
	},
};
</script>

<template>
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class=" text-primary-dark dark:text-primary-light text-xl"
								>
									Please enter password to view my CV
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form class="max-w-xl m-4 text-left" onsubmit="return false;">
									<div class="mt-0">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="key"
											name="key"
											type="password"
											required="true"
											placeholder="Password"
											aria-label="Password"
										/>
									</div>
									<span ref="error" id="error" class="text-red-500 text-sm mt-2">Wrong password</span>
									<div class="mt-6 pb-4 sm:pb-1">
										<Button
											title="Submit"
											class="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-red-500
											hover:bg-red-600
											rounded-md
											focus:ring-1 focus:ring-red-900 duration-500"
											aria-label="Submit Request"
											type="submit"
											@click="openCV()"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 500px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
