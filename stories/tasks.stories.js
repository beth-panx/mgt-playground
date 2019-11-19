import { html } from 'lit-element';
import '../dist/es6/components/mgt-tasks/mgt-tasks';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'components|mgt-tasks',
  component: 'mgt-tasks'
};

export const tasks = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-tasks></mgt-tasks>
`;
