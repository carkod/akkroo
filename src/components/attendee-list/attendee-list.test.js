import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Loader from '../loader.component';
import GuestCard from '../guest-card/guest-card.component';
import Products from './attendee-list.component';

describe('Product Grid', () => {
  it('should request the products', () => {
    const getProducts = sinon.spy(); 
    mount(<Products getProducts={getProducts} products={[]} />);
    expect(sinon.assert.calledOnce(getProducts));
  });

  it('should show a loader when isLoading', () => {
    const getProducts = sinon.spy(); 
    const context = shallow(<Products 
      getProducts={getProducts} 
      products={[]} 
      isLoading/>
      );
    expect(context.find(Loader)).to.have.length(1);
    expect(context.find(Loader).prop('text')).to.equal('Loading Products');
    expect(context.find(Products)).to.have.length(0);
  });


  it('should display a GuestCard for each guest', () => {
    const products = [
      { name: 'Carlos'},
      { name: 'Pablo'}
    ];
    expect(shallow(
    <GuestCard name={products} />
    ).find(GuestCard)).to.have.length(1);
  });
});