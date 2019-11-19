import { html } from 'lit-element';
import '../dist/es6/components/mgt-login/mgt-login';

export default {
  title: 'components|mgt-login',
  component: 'mgt-login'
};

export const login = () => html`
  <mgt-login></mgt-login>
`;
