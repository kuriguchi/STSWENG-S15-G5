import { render, screen, fireEvent } from '@testing-library/react';
import {ViewProdBtn, Home} from '../pages/home/Home';

describe('The carousel image in homepage', () => {
    test('alt contains the correct value', () => {
        render(<Home/>);

        const carousel_element = screen.getByRole('img_carousel');

        expect(carousel_element.alt).toContain('image-carousel');
    });

    test('src contains the correct value', () => {
        render(<Home/>);

        const carousel_element = screen.getByRole('img_carousel');

        expect(carousel_element.src).toContain('http://localhost/img1.png');
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