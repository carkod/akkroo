import React from 'react';
import { shallow } from 'enzyme';
import Pricing from './pricing.component';


describe('Pricing component', () => {
  describe('Standard pricing', () => {

    const pricing = {
      pricePerUnit: 'pricePerUnit',
      price: {
        pence: 900
      }
    };
    let wrapper;

    beforeAll(() => {
      wrapper= shallow(<Pricing pricing={pricing} />);
    });

    it('should display measure', () => {
      expect(wrapper.find('.c-price-measure').text()).to.eql(pricing.pricePerUnit);
    });

  });

  describe('Sale pricing', () => {

    const pricing = {
      price: {
        pence: 900
      },
      salePrice: {
        pence: 800
      },
      saleText: 'saleText',
      pricePerUnit: 'pricePerUnit'
    };
    let wrapper;
    
    beforeAll(() => {
      wrapper= shallow(<Pricing pricing={pricing} />);
    });

    it('should display the price', () => {
      expect(wrapper.find('.c-price').text()).to.eql('£9.00');
    });

  });
});