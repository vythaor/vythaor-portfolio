<script>
import feather from "feather-icons";
import ViewCVModal from "../ViewCVModal.vue";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


export default {
  components: {
    ViewCVModal,
    // Swiper,
    // SwiperSlide,
  },
  // setup() {
  //   return {
  //     modules: [Autoplay, Pagination, Navigation],
  //   };
  // },
  name: "Home",
  data: () => {
    return {
      theme: "",
      modal: false,
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        document.getElementById("key").value = "";
        document.getElementById("error").innerHTML = "";
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        document.getElementById("key").value = "";
        document.getElementById("error").innerHTML = "";
        this.modal = true;
      }
    },
  },
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I'm Sherry
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        An UX/UI Designer
      </p>
      <div
        class="flex justify-center sm:block cursor-pointer"
        @click="showModal()"
      >
        <a
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-red-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-red-50 focus:ring-1 focus:ring-red-900 hover:bg-red-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
          target="_blank"
        >
          <!-- href="/files/UX-UI-Designer-Phan-Hoang-Vy-Thao.pdf" -->
          <i
            data-feather="paperclip"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >View CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right rounded-md">
      <img
				v-if="theme === 'light'"
				src="@/assets/images/sapiens.svg"
				alt="Developer"
			/>
      <!-- <img
				src="@/assets/images/banner/4.png"
				alt="Developer"
				class="rounded-xl"
			/> -->
      <!-- <swiper
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay:4000,
          disableOnInteraction: true,
        }"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide 
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <img
              src="@/assets/images/banner/1.png"
              alt="Developer"
              class="rounded-xl"
            />
            <div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
				It's me, multitasking by doing creative work and listening to music :D Taken with Sony A7iii, ISO 2000, 28mm, f2.8
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <img
              src="@/assets/images/banner/2.jpg"
              alt="Developer"
              class="rounded-xl"
            />
            <div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
              Retouch with Adobe Photoshop Beta
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <img
              src="@/assets/images/banner/3.jpg"
              alt="Developer"
              class="rounded-xl"
            />
            <div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
              Film effect with Adobe Lightroom
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <img
              src="@/assets/images/banner/4.jpeg"
              alt="Developer"
              class="rounded-xl"
            />
			<div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
              Painting effect with
              <a
                href="https://prisma-ai.com/prisma"
                target="_blank"
                class="underline text-blue-500"
                >Prisma</a
              >
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <img
              src="@/assets/images/banner/5.png"
              alt="Developer"
              class="rounded-xl"
            />
			<div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
              Amime effect with
              <a
                href="https://www.krnl.ai/"
                target="_blank"
                class="underline text-blue-500"
                >Loopsie</a
              >
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
        class="dark:bg-primary-dark bg-primary-light"
        >
          <div>
            <video controls class="rounded-md shadow-md">
              <source src="@/assets/images/banner/6.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
            <div class="pt-4 text-sm dark:text-ternary-light text-ternary-dark">
              Photo to Video with
              <a
                href="https://runwayml.com/"
                target="_blank"
                class="underline text-blue-500"
                >Runwayml</a
              >. It looks like I'm getting mad because of the deadline LOL.
			<br/><br/><br/>
            </div>
          </div>
        </swiper-slide>
      </swiper> -->
    </div>

    <!-- Hire me modal -->
    <ViewCVModal
      :showModal="showModal"
      :modal="modal"
      aria-modal="View CV Modal"
      @keyup.esc="$emit('close')"
    />
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
