import { BaseTemplate } from '../../story-helpers';
import MyButton from './button.vue'

const Template = (t) => BaseTemplate({ MyButton }, t);

export const All = () => Template( `
<my-button class="ma1" color="success">success</my-button>
<my-button class="ma1" color="error">error</my-button>
<my-button class="ma1" color="warning">warning</my-button>
<my-button class="ma1" color="info">info</my-button>
<my-button class="ma1" color="primary">primary</my-button>
<my-button class="ma1" color="secondary">secondary</my-button>
<my-button class="ma1" color="purple-light4">purple-light4</my-button>`);

export const Primary = () => Template(`<my-button color="primary">primary</my-button>`
);

export const Secondary = () => Template(`<my-button color="secondary">secondary</my-button>`
);

