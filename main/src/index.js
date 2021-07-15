import { createApp } from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import './index.css'

export const withWaveUI = (story, content) => {
  const app = createApp({})
  app.use(WaveUI)

  new WaveUI(app, {
  // Some Wave UI options.
  })

  const Story = story()
  const { wAppFlex, wAppPadded = true } = Story
  return {
    app,
    components: { Story },
    template: `<w-app ${wAppFlex ? '' : 'block'} ${wAppPadded ? 'class="padded"' : ''}><Story /></w-app>`
  }
}

export default {
  parameters: { layout: 'fullscreen' },
  decorators: [ withWaveUI ]
}