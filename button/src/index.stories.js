import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp({})
// app.use(WaveUI)

new WaveUI(app, {
  // Some Wave UI options.
})

export default {
  parameters: {
    layout: 'centered'
  }
}

import MyButton from './button.vue'

export const Primary = () => ({
  app,
  components: { MyButton },
  template: '<w-app><my-button color="primary" /></w-app>'
})

export const Secondary = () => ({
  app,
  components: { MyButton },
  template: '<w-app><my-button color="error" /></w-app>'
})
