<template>
  <a class="anchor" id="galery"></a>
  <div class="home-container text-black">
    <div class="text-h4 mb-8 text-center d-flex align-center justify-center">
      <div class="font-weight-bold">Aktifitas Kami</div>
    </div>

    <div class="d-flex justify-center">
      <Swiper
        class="swiper-cards"
        :style="smAndDown && 'max-width: 300px;'"
        :modules="[SwiperAutoplay, SwiperEffectCards]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
          <v-img :src="slide" :lazy-src="slide" cover @click="previewImg(slide)" />
        </SwiperSlide>
      </Swiper>
    </div>

    <v-overlay v-model="showImg" fullscreen>
      <div style="position: relative; width: 100vw">
        <v-icon @click="showImg = false" color="white" style="position: absolute; right: 30px; top: 30px; z-index: 2">mdi-close</v-icon>
        <v-img :src="selectedImg" style="width: 100%; height: 100vh" />
      </div>
    </v-overlay>

    <!-- <viewer :images="slides" :options="options">
      <img v-for="(slide, i) in slides" :key="i" :src="slide">
    </viewer> -->
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import galeri1 from "~/assets/galeri1.jpg";
import galeri2 from "~/assets/galeri2.jpg";
import galeri3 from "~/assets/galeri3.jpg";
import galeri4 from "~/assets/galeri4.jpg";
import galeri5 from "~/assets/galeri5.jpg";
import galeri6 from "~/assets/galeri6.jpg";

const { smAndDown } = useDisplay();
const showImg = ref(false);
const selectedImg = ref("");

const previewImg = (img) => {
  showImg.value = !showImg.value;
  selectedImg.value = img;
};

const options = {
  inline: true,
  button: false,
  navbar: false,
  title: false,
  toolbar: true,
  tooltip: true,
  movable: false,
  zoomable: false,
  rotatable: false,
  scalable: false,
  transition: true,
  fullscreen: true,
  keyboard: false,
  url: "data-source",
};

const slides = [galeri1, galeri2, galeri3, galeri4, galeri5, galeri6];
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-cards {
  aspect-ratio: 16 / 9;
  max-width: 700px;
}
.swiper-cards .swiper-slide {
  border-radius: 20px;
  border: 4px solid #f8cf4a;
}
</style>
