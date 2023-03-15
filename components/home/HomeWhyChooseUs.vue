<template>
  <a class="anchor" id="why-us"></a>
  <div class="why-us py-12 text-black">
    <div class="why-us-shape"><img src="~/assets/shape1.png" /></div>
    <div class="why-us-shape2"><img src="~/assets/shape1.png" /></div>
    <v-container class="home-container">
      <div
        class="text-h4 text-center mb-12 d-flex align-center justify-center font-weight-bold"
      >
        <!-- <v-icon color="primary" icon="mdi-emoticon-excited" class="mr-4" size="50" /> -->
        Mengapa harus kami?
      </div>
      <v-row justify="center" align="start">
        <v-col v-for="(reason, i) in reasons" :key="i" cols="12" sm="6" md="4">
          <div class="text-center">
            <v-icon size="70" :icon="reason.icon" color="secondary" />
            <div class="text-h5 font-weight-bold mt-2 mb-2">
              {{ reason.title }}
            </div>
            <div class="text-h6">{{ reason.desc }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
const { smAndDown } = useDisplay();

const reasons = [
  {
    icon: "mdi-phone",
    title: "Pelayanan Tanggap",
    desc: "Kami melayani via whatsapp selama 24 jam dan 7 hari tanpa henti",
  },
  {
    icon: "mdi-currency-usd",
    title: "Harga Bersaing",
    desc: "Dengan harga yang kami tawarkan akan sesuai dengan kepuasan yang anda rasakan",
  },
  {
    icon: "mdi-account-convert",
    title: "Asuransi",
    desc: "Kami menyediakan asuransi jiwa jika terjadi sesuatu yang tak terduga",
  },
];
</script>

<style lang="scss">
.why-us {
  position: relative;
  max-width: 100vw;
  .why-us-shape {
    position: absolute;
    z-index: -1;
    left: -200px;
    top: -50px;
    opacity: 0.6;
    img {
      width: 600px;
    }
  }
  .why-us-shape2 {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -400px;
    opacity: 0.6;
    img {
      width: 700px;
    }
  }

  @media screen and (max-width: 768px) {
    .why-us-shape {
      left: -150px;
      top: -50px;
      img {
        width: 300px;
      }
    }
    .why-us-shape2 {
      bottom: -100px;
      img {
        width: 400px;
      }
    }
  }
}
</style>
