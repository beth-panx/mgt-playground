import { html } from 'lit-element';
import '../dist/es6/components/mgt-people-picker/mgt-people-picker';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'components|mgt-people-picker',
  component: 'mgt-people-picker'
};

export const peoplePicker = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-people-picker></mgt-people-picker>
`;
