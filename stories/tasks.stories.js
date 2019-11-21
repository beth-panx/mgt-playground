import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../dist/es6/components/mgt-tasks/mgt-tasks';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'MGT|mgt-tasks',
  component: 'mgt-tasks',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const tasks = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-tasks></mgt-tasks>
`;
