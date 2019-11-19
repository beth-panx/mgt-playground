import { html } from 'lit-element';
import '../dist/es6/components/mgt-people/mgt-people';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'components|mgt-people',
  component: 'mgt-people'
};

export const people = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-people show-max="5"></mgt-people>
`;
