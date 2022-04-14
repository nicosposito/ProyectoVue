// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: "#ffcc50",
        error: "#ff8888",
        success: "#45a5ae",

        secondary: '#b0bec5',
        accent: '#8c9eff',
      },
      dark: {
        primary: "#ffcc50",
        error: "#ff8888",
        success: "#45a5ae",

        secondary: '#b0bec5',
        accent: '#8c9eff',

      },
    },
  },

});

