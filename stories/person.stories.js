import { html } from 'lit-element';
import '../dist/es6/components/mgt-person-card/mgt-person-card';
import '../dist/es6/components/mgt-person/mgt-person';
import '../dist/es6/mock/mgt-mock-provider';
import '../dist/es6/mock/MockProvider';

export default {
  title: 'components|mgt-person',
  component: 'mgt-person'
};

export const person = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-person person-query="me" show-name show-email></mgt-person>
`;

export const personCard = () => html`
  <mgt-mock-provider></mgt-mock-provider>
  <mgt-person person-query="me" show-name show-email person-card="hover">
    <template data-type="person-card">
      <mgt-person-card person-details="{{person}}" person-image="{{personImage}}">
        <template data-type="additional-details">
          <h3>Stuffed Animal Friends:</h3>
          <ul>
            <li>Giraffe</li>
            <li>lion</li>
            <li>Rabbit</li>
          </ul>
        </template>
      </mgt-person-card>
    </template>
  </mgt-person>
`;
