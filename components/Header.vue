<template>
  <v-app-bar app :class="bg" elevation="0" style="width: 100vw">
    <client-only>
    <v-container>
      <div class="d-flex pa-6 align-center">
        <img :src="logovw" style="width: 60px" />
        <v-spacer />
        <div v-if="smAndDown">
          <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-menu" v-bind="props" :color="bg === 'white' ? 'primary' : 'white'"> </v-btn>
            </template>

            <v-card min-width="300">
              <v-list>
                <v-list-item v-for="menu in menus" :href="menu.link" :key="menu.link">
                  {{ menu.label }}
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
        <div v-else class="d-flex justify-space-between">
        <div>
          <v-btn
            v-for="menu in menus"
            :href="menu.link"
            :key="menu.link"
            :class="textColor"
            variant="text"
            class="text-decoration-none"
            >{{ menu.label }}</v-btn
          >
        </div>
          <v-btn
            color="success"
            variant="flat"
            prepend-icon="mdi-whatsapp"
            class="ml-2"
            rounded
            @click="openWA"
            >Whatsapp</v-btn
          >
        </div>
      </div>
    </v-container>
    </client-only>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import logovw from "~/assets/logovw.png";

const { smAndDown } = useDisplay();
let menu = ref(false);
let bg = ref("app-bar-transparent");
let textColor = ref("text-white");
const menus = [
  { link: "#home", label: "Home" },
  { link: "#package", label: "Paket" },
  { link: "#why-us", label: "Mengapa kami" },
  { link: "#galery", label: "Galeri" },
  { link: "#contact-us", label: "Hubungi Kami" },
];

const changeColor = () => {
  const scroll = window.scrollY;
  if (scroll > 100) {
    bg.value = "white";
    textColor.value = "text-black";
  } else {
    bg.value = "app-bar-transparent";
    textColor.value = "text-white";
  }
};

if (process.client) {
  window.onscroll = () => {
    changeColor();
  };
}

const openWA = () => {
  window.open("https://wa.me/+6281519568726", "_blank");
}

// const scrollMenu = (path) => {
//   window.scrollTo({ top: `#${path}`, behavior: "smooth" });
// };
</script>

<style>
.app-bar-transparent {
  background-color: transparent !important;
}
</style>
