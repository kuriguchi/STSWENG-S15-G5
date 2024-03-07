import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ViewProdBtn, Home } from '../pages/home/Home';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel.jsx';

afterEach(cleanup);

// describe('The carousel image in homepage', () => {
//     test('alt contains the correct value', () => {
//         render(<Home />);

//         const carousel_element = screen.getByRole('middle-partition');

//         expect(carousel_element.alt).toContain('middle-partition');
//     });

//     test('src contains the correct value', () => {
//         render(<Home />);

//         const carousel_element = screen.getByRole('middle-partition');

//         expect(carousel_element.src).toContain('http://localhost/middle_partition_header.svg');
//     });
// });

describe('view our product button', () => {
    test('button calls the function', async () => {
        const mockHandleClick = jest.fn();

        render(
            <MemoryRouter>
                <ViewProdBtn to={'/ourproducts'} children={'view our products'} handleClick={mockHandleClick} />
            </MemoryRouter>
        );

        const viewBtn = await screen.getByRole('viewProdBtn');
        fireEvent.click(viewBtn);

        expect(mockHandleClick).toHaveBeenCalled();
    });
});

describe('The carousel image', () => {
    test('renders ImageCarousel without crashing', () => {
        const { getByTestId } = render(<ImageCarousel imageUrls={['url1', 'url2', 'url3']} />);
        const carousel = getByTestId('image-carousel');
        expect(carousel).toBeInTheDocument();
    });

    test('renders correct number of images and buttons', () => {
        const { container } = render(<ImageCarousel imageUrls={['url1', 'url2', 'url3']} />);
        const images = container.querySelectorAll('.carousel-image');
        const buttons = container.querySelectorAll('.carousel-elipse-button');
        expect(images.length).toBe(3);
        expect(buttons.length).toBe(3);
    });

    jest.useFakeTimers();

    test('increments image index every 10 seconds', () => {
        const imageUrls = ['url1', 'url2', 'url3'];

        render(<ImageCarousel imageUrls={imageUrls} />);

        // Check the initial image
        expect(screen.getByTestId('carousel-image-0')).toHaveAttribute('src', 'url1');

        // Fast-forward 10 seconds
        act(() => {
            jest.advanceTimersByTime(10000);
        });

        // Check the image after 10 seconds
        expect(screen.getByTestId('carousel-image-1')).toHaveAttribute('src', 'url2');

        // Fast-forward another 10 seconds
        act(() => {
            jest.advanceTimersByTime(10000);
        });

        // Check the image after another 10 seconds
        expect(screen.getByTestId('carousel-image-2')).toHaveAttribute('src', 'url3');
    });
});
