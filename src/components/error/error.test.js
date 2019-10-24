import React from 'react';
import {shallow} from 'enzyme';
import ErrorMessage from './error.component';

describe('Error component', () => {
  it(' display text provided', () => {
    const text = 'error...';
    const context = shallow(<ErrorMessage text={text} />);
    expect(context.find('h1').first().text()).to.equal(text);
  });
});