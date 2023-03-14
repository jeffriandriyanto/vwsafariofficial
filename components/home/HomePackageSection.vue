<template>
  <a class="anchor" id="package"></a>
  <v-parallax class="package-wrapper" :src="bgImg">
    <div class="d-flex flex-column fill-height justify-center align-center">
      <v-container :class="smAndDown && 'home-container'">
        <div
          class="text-h4 mb-8 text-center d-flex align-center justify-center font-weight-bold"
        >
          <!-- <v-icon color="primary" icon="mdi-car-estate" class="mr-4" size="50"></v-icon> -->
          Paket VW Tour Borobudur
        </div>

        <v-row justify="center" class="package-content">
          <v-col
            v-for="(pack, i1) in packages"
            :key="i1"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="rounded-xl" elevation="12">
              <v-row dense>
                <v-col cols="12">
                  <v-img :lazy-src="setImage(i1)" :src="setImage(i1)" height="300px" cover />
                </v-col>
                <v-col cols="12">
                  <div class="pa-8 bg-white">
                    <div class="title font-weight-bold">
                      {{ pack.title }}
                    </div>
                    <div class="text-error text-h6 mb-4 font-weight-bold">
                      {{ pack.price }}
                    </div>

                    <div
                      v-for="(detail, i2) in pack.details"
                      :key="i2"
                      class="text-body-2"
                    >
                      <v-icon
                        class="mr-2"
                        icon="mdi-play"
                        color="error"
                        size="12"
                      />
                      {{ detail }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-parallax>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import bgImg from "~/assets/bg-image.jpg";
import packageA from "~/assets/packageA.jpg";
import packageB from "~/assets/packageB.jpg";
import packageC from "~/assets/packageC.jpg";

const { smAndDown } = useDisplay();

const packages = reactive([
  {
    isOpen: false,
    image: packageA,
    title: "Paket A",
    price: "400.000",
    details: [
      "Kunjungan 2 destinasi",
      "Jelajah Desa",
      "Durasi Waktu 2 jam",
      "Kapasitas Maks 4 Orang",
      "Tour Desa Wisata",
      "View Persawahan",
      "Spot Pegunungan Menoreh",
      "Driver",
    ],
  },
  {
    isOpen: false,
    image: packageB,
    title: "Paket B",
    price: "550.000 / VW",
    details: [
      "Kunjungan 3 destinasi",
      "Jelajah Desa",
      "Durasi 2 Jam",
      "Kapasitas Maks 4 Orang",
      "Tour Desa Wisata",
      "View Persawahan",
      "Spot Pegunungan Menoreh",
      "Driver",
    ],
  },
  {
    isOpen: false,
    image: packageC,
    title: "Paket C",
    price: "750.000 / VW",
    details: [
      "Kunjungan 4 destinasi",
      "Durasi 4 Jam",
      "Kapasitas Maks 4 Orang",
      "Tour Desa Wisata",
      "View Persawahan",
      "Spot Pegunungan Menoreh",
      "Driver",
    ],
  },
]);

const setImage = (idx) => {
  switch (idx) {
    case 0:
      return packageA;
    case 1:
      return packageB;
    default:
      return packageC;
  }
};

const changePackOpen = (idx) => {
  packages[idx].isOpen = !packages[idx].isOpen;
};
</script>

<style lang="scss">
.package-wrapper {
  &.v-parallax {
    .v-img__img {
      opacity: 0.7 !important;
    }
    .package-content {
      .v-img__img {
        opacity: 1 !important;
      }
    }
  }
}
</style>
