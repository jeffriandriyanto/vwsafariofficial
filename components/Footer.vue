<template>
  <v-footer class="footer-wrap mt-12">
    <v-btn href="#home" class="upper-btn" icon="mdi-arrow-up-bold-box" color="primary" />
    <v-container>
      <v-row justify="center" align="center" no-gutters class="py-6">
        <v-col cols="8" class="text-center">
          <v-img :src="logovw" width="300" class="mb-8 mx-auto" />
          <div style="text-shadow: 2px 2.5px #000;" class="text-body-1 text-white font-weight-bold">
            Explore ke destinasi desa wisata di daerah Borobudur Magelang menggunakan
            mobil VW.
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-6" />
      <div class="text-caption text-center text-white font-weight-bold font-italic">
        © Copyright 2023. Tour VW. Design By
        <a
          href="https://creetech.id/"
          target="_blank"
          class="text-decoration-none text-orange"
          >creetech.id</a
        >
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import logovw from "~/assets/logovw.png";
</script>

<style lang="scss">
.footer-wrap {
  background-image: url("~/assets/bg-footer.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: hard-light;
  position: relative;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  .upper-btn {
    position: absolute;
    top: -20px;
    right: 40px;
  }
}
</style>
