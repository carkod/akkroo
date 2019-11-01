import React from 'react';
import {shallow} from 'enzyme';
import Branding from './branding.component';

describe('Branding component', () => {
  it('should render', () => {
    const wrapper = shallow(<Branding basketItems={[1,2]} />)
    expect(wrapper.find('img').prop("src")).toEqual(1);
  });
});