import React from 'react';
import {shallow} from 'enzyme';
import Header from './header.component';

describe('Header component', () => {
  it('should display the number of basket items', () => {
    const wrapper = shallow(<Header basketItems={[1,2]} />)
    expect(wrapper.find('.c-basket-counter').text()).to.equal('2');
  });
});