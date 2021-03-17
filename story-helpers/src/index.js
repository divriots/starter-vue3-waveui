import { createApp } from 'vue';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';

const app = createApp({});
new WaveUI(app, {});

const BaseTemplate = (components, template) => ({
  app,
  components: components,
  template: `<w-app>${template}</w-app>`
});

export { app, BaseTemplate }
