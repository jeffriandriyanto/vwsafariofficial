<template>
  <a class="anchor" id="contact-us"></a>
  <v-container class="py-12">
    <v-sheet class="pa-4">
      <v-card-title
        class="text-black font-weight-bold text-h4 text-center mb-8 d-flex align-center justify-center"
      >
        Kontak Kami
      </v-card-title>
      <v-card-text class="text-body-1">
        <v-row>
          <v-col v-for="office in offices" cols="12" sm="4">
            <a
              :href="office.url"
              class="text-decoration-none mb-2"
              target="_blank"
            >
              <v-card
                class="py-4 px-2 text-center"
                variant="outlined"
                rounded="xl"
                color="secondary"
              >
                <v-icon
                  :icon="office.icon"
                  color="secondary"
                  size="30"
                  class="mb-2"
                />
                <div class="text-black text-h6">{{ office.label }}</div>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-sheet>
  </v-container>
</template>

<script setup>
const offices = [
  {
    // url: "tel:+6281519568726",
    url: "https://wa.me/+6285877101104",
    icon: "mdi-phone",
    label: "+62 858-7710-1104",
  },
  //   {
  //     url:
  //       "https://www.google.com/maps/place/Borobudur,+Magelang+Regency,+Central+Java/@-7.6130252,110.0559338,12z/data=!3m1!4b1!4m5!3m4!1s0x2e7a8cef5e6c0f59:0x4027a76e352eb60!8m2!3d-7.6017595!4d110.2119615",
  //     icon: "mdi-pin",
  //     label: "Jl. Borobudur",
  //   },
  {
    url: "mailto:seribuwulung@gmail.com",
    icon: "mdi-email",
    label: "seribuwulung@gmail.com",
  },
  {
    url: "https://www.instagram.com/vwborobudur_tour/",
    icon: "mdi-instagram",
    label: "VW Borobudur Tour",
  },
];
</script>
