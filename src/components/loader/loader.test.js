import React from 'react';
import {shallow} from 'enzyme';
import Loader from './loader.component';

describe('Loader component', () => {
  it('should display text provided', () => {
    const text = 'loading...';
    const context = shallow(<Loader text={text} />);
    expect(context.find('h1').first().text()).to.equal(text);
  });
});