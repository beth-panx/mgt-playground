import { html } from 'lit-element';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../dist/es6/components/mgt-person/mgt-person';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'MGT|mgt-person',
  component: 'mgt-person',
  decorators: [withKnobs, withWebComponentsKnobs]
};

export const person = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-person person-query="me" show-name show-email></mgt-person>
`;
