import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../../dist/es6/components/mgt-login/mgt-login';
import '../../dist/es6/mock/mgt-mock-provider';
import '../../dist/es6/mock/MockProvider';

export default {
  title: 'Mock Provider|mgt-login',
  component: 'mgt-login',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const login = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-login></mgt-login>
`;
