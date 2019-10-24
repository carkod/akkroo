import React from 'react';
import {shallow} from 'enzyme';
import Branding from './header.component';

describe('Branding component', () => {
  it('should render', () => {
    const wrapper = shallow(<Branding basketItems={[1,2]} />)
    expect(wrapper.find('.c-basket-counter').text()).toBe(1);
  });
});