import { shallow } from 'enzyme';
import React from 'react';
import GuestCard from './guest-card.component';

describe('GuestCard Component', () => {

  let props = {
    name: 'Carlos',
    email: 'carkodesign@gmail.com',
    postcode: 'E147EZ'
  };
  let context;

  beforeAll(() => {
    context = shallow(<GuestCard {...props} />);
  });

  it('should display the name', () => {
    expect(context.find('.c-card-heading-1').text()).to.equal(props.name);
  });

  it('should display email', () => {
    expect(context.find('.c-card-details').text()).to.equal(props.email);
  });

});