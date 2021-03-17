import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp({})
app.use(WaveUI)

new WaveUI(app, {
  // Some Wave UI options.
})

export default {
  parameters: {
    layout: 'centered'
  }
}

import Card from './card.vue'

export const Primary = () => ({
  app,
  components: { Card },
  template: '<w-app><card color="primary" /></w-app>'
})

export const Secondary = () => ({
  app,
  components: { Card },
  template: '<w-app><card color="error" /></w-app>'
})
