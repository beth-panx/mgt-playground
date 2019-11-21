import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../dist/es6/components/mgt-people-picker/mgt-people-picker';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'MGT|mgt-people-picker',
  component: 'mgt-people-picker',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const peoplePicker = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-people-picker></mgt-people-picker>
`;
