// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#402E32',
    surface: '#FFFFFF',
    accent: '#F8E8E1',
    primary: '#F8CF4A',
    'primary-darken-1': '#3700B3',
    secondary: '#F8CF4A',
    'secondary-darken-1': '#018786',
    error: '#C0564A',
    info: '#EAE7B1',
    success: '#3C6255',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }  
  });

  nuxtApp.vueApp.use(vuetify);
});
