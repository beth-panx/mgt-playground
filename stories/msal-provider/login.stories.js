import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../../dist/es6/components/mgt-login/mgt-login';
import '../../dist/es6/components/providers/mgt-msal-provider';
import '../../dist/es6/providers/MsalProvider';

export default {
  title: 'MSAL Provider|mgt-login',
  component: 'mgt-login',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const msalLogin = () => html`
  <mgt-msal-provider
    client-id="ac77046c-156c-40f0-8507-3b5a58034582"
    login-type="popup"
    scopes="user.read,people.read"
    authority=""
  ></mgt-msal-provider>
  <mgt-login></mgt-login>
`;
