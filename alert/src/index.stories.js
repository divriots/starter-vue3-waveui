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

import Alert from './alert.vue'

export const Primary = () => ({
  app,
  components: { Alert },
  template: '<w-app><alert color="primary" /></w-app>'
})

export const Secondary = () => ({
  app,
  components: { Alert },
  template: '<w-app><alert color="error" /></w-app>'
})
