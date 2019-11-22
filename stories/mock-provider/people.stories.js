import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../../dist/es6/components/mgt-people/mgt-people';
import '../../dist/es6/mock/mgt-mock-provider';
import '../../dist/es6/mock/MockProvider';

export default {
  title: 'Mock Provider|mgt-people',
  component: 'mgt-people',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const people = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-people show-max="5"></mgt-people>
`;
