import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../dist/es6/components/mgt-login/mgt-login';

export default {
  title: 'MGT|mgt-login',
  component: 'mgt-login',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const login = () => html`
  <mgt-login></mgt-login>
`;
