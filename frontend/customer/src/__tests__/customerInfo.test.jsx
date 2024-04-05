import React from 'react';
import { useState } from 'react';
 
import CustomerInfo from '../pages/ourproducts/orderform/components/CustomerInfo';

describe('MyComponent', () => {
    it('renders correctly', () => {
      const { getByText } = render(<CustomerInfo />);
      
      expect(getByText('Product Order Form')).toBeInTheDocument();
    });

    it('provides correct value for select city visibility state', () => {
        const setIsSelectCityVisible = jest.fn();
        useState.mockReturnValueOnce([false, setIsSelectCityVisible]);

        render(<CustomerInfo />);

        expect(setIsSelectCityVisible).toHaveBeenCalledWith(false);
    });
});