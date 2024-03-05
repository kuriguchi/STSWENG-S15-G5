import { render, screen, fireEvent } from '@testing-library/react';
import {ViewProdBtn, Home} from '../pages/home/Home';

describe('The carousel image in homepage', () => {
    test('alt contains the correct value', () => {
        render(<Home/>);

        const carousel_element = screen.getByRole('middle-partition');

        expect(carousel_element.alt).toContain('middle-partition');
    });

    test('src contains the correct value', () => {
        render(<Home/>);

        const carousel_element = screen.getByRole('middle-partition');

        expect(carousel_element.src).toContain('http://localhost/middle_partition_header.svg');
    });
});

describe('view our product button', () => {
    test('button calls the function', async () => {
        const mockHandleClick = jest.fn();

        render(<ViewProdBtn to={'/ourproducts'} children={'view our products'} handleClick={mockHandleClick}/>)
        
        const viewBtn = await screen.getByRole('viewProdBtn');
        fireEvent.click(viewBtn);  

        expect(mockHandleClick).toHaveBeenCalled();
    })
});