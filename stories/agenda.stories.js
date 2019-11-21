import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../dist/es6/components/mgt-agenda/mgt-agenda';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'MGT|mgt-agenda',
  component: 'mgt-agenda',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const agenda = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-agenda group-by-day days="5"></mgt-agenda>
`;
