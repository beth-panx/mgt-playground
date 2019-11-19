import { html } from 'lit-element';
import '../dist/es6/components/mgt-agenda/mgt-agenda';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'components|mgt-agenda',
  component: 'mgt-people-agenda'
};

export const agenda = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-agenda group-by-day days="5"></mgt-agenda>
`;
