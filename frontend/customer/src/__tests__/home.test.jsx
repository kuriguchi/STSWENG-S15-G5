import React from 'react';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import {ViewProdBtn, Home} from '../pages/home/Home.jsx';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel.jsx';
import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.jsx';
import ContactUs from '../pages/contactus/ContactUs.jsx';
import Button from '../components/selectBtn/Button.jsx';
import Dropdown from '../components/selectBtn/Select.jsx';
import OrderDetailsContainer from '../components/containerTemplate/ODContainer.jsx';
import DeliveryContainer from '../components/containerTemplate/DeliveryContainer.jsx';
import CircleButton from '../pages/ourproducts/orderform/components/CircleBtn.jsx';


afterEach(cleanup);

describe ('Component Testing', () => {

describe('View our product button', () => {
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

describe('Carousel Images', () => {
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

  
  describe('Navbar', () => {
      test('renders without crashing', () => {
        render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
      });
    
      test('renders navigation links correctly', () => {
        render(
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        );
    
        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('our story')).toBeInTheDocument();
        expect(screen.getByText('our products')).toBeInTheDocument();
        expect(screen.getByText('contact us')).toBeInTheDocument();
      });
    });

    describe('Footer', () => {
        test('renders social media icons with correct href attributes', () => {
            const { getByAltText } = render(
                <Footer href="https://www.example.com" href1="https://www.facebook.com" href2="https://www.messenger.com" />
            );
    
            expect(getByAltText('Facebook').closest('a')).toHaveAttribute('href', 'https://www.facebook.com');
            expect(getByAltText('Messenger').closest('a')).toHaveAttribute('href', 'https://www.messenger.com');
            expect(getByAltText('Instagram').closest('a')).toHaveAttribute('href', 'https://www.example.com');
        });
    
    });


describe('ContactUs', () => {
    test('renders contact persons with correct details', () => {
        const { getByAltText, getByText } = render(<ContactUs />);

        // Assert the existence of contact persons with their respective details
        expect(getByAltText('Person 1')).toBeInTheDocument();
        expect(getByText('GIRL')).toBeInTheDocument();

        expect(getByAltText('Person 2')).toBeInTheDocument();
        expect(getByText('BOY')).toBeInTheDocument();

    });
});

describe('Home', () => {
    test('renders the Home component correctly', () => {
        const { getByAltText, getByText } = render(
            <Router>
                <Home />
            </Router>
        );

        expect(getByAltText('middle-partition')).toBeInTheDocument();
    });

});

describe('Button', () => {
    test('renders button correctly', () => {
        // Render the Button component
        const { getByText } = render(<Button />);

        // Assert the existence of the button element
        const buttonElement = getByText('^');
        expect(buttonElement).toBeInTheDocument();

        // Assert the existence of the necessary CSS class
        expect(buttonElement).toHaveClass('dropdown-icon');
    });

    test('calls onClick function when button is clicked', () => {
        // Mock onClick function
        const mockOnClick = jest.fn();

        // Render the Button component with onClick prop
        const { getByText } = render(<Button onClick={mockOnClick} />);

        // Simulate a click event on the button
        fireEvent.click(getByText('^'));

        // Assert that the onClick function is called
        expect(mockOnClick).toHaveBeenCalled();
    });
});

describe('Dropdown', () => {
    const mockList = { 1: 'Option 1', 2: 'Option 2', 3: 'Option 3' };
    const mockHandleChange = jest.fn();
    const mockToggleVisibility = jest.fn();

    test('renders dropdown correctly', () => {
        // Render the Dropdown component
        const { getByText, queryByText } = render(
            <Dropdown
                list={mockList}
                isVisible={true}
                height="100px"
                width="200px"
                handleChange={mockHandleChange}
                toggleVisibility={mockToggleVisibility}
            />
        );

        // Assert the existence of the dropdown container
        const dropdownContainer = getByText('Option 1').parentNode;
        expect(dropdownContainer).toBeInTheDocument();

        // Assert the dropdown list items are rendered
        expect(getByText('Option 1')).toBeInTheDocument();
        expect(getByText('Option 2')).toBeInTheDocument();
        expect(getByText('Option 3')).toBeInTheDocument();

        // Assert that dropdown visibility toggling works correctly
        expect(queryByText('Option 1').parentNode).toHaveStyle({ height: '100px', width: '200px' });
    });

    test('calls handleChange function with correct value when list item is clicked', () => {
        // Render the Dropdown component
        const { getByText } = render(
            <Dropdown
                list={mockList}
                isVisible={true}
                height="100px"
                width="200px"
                handleChange={mockHandleChange}
                toggleVisibility={mockToggleVisibility}
            />
        );

        // Simulate a click event on a dropdown list item
        fireEvent.click(getByText('Option 2'));

        // Assert that the handleChange function is called with the correct value
        expect(mockHandleChange).toHaveBeenCalledWith('Option 2');
    });

    test('calls toggleVisibility function when dropdown container is clicked', () => {
        // Render the Dropdown component
        const { getByTestId } = render(
            <Dropdown
                list={mockList}
                isVisible={true}
                height="100px"
                width="200px"
                handleChange={mockHandleChange}
                toggleVisibility={mockToggleVisibility}
            />
        );

        // Simulate a click event on the dropdown container
        fireEvent.click(getByTestId('dropdown-container'));

        // Assert that the toggleVisibility function is called
        expect(mockToggleVisibility).toHaveBeenCalled();
    });
});

describe('OrderDetailsContainer', () => {
    test('renders the SVG element correctly', () => {
        // Render the OrderDetailsContainer component
        const { getByTestId } = render(<OrderDetailsContainer />);

        // Assert the presence of the SVG element
        const svgElement = getByTestId('order-details-svg');
        expect(svgElement).toBeInTheDocument();

        // Assert the SVG attributes
        expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svgElement).toHaveAttribute('width', '623');
        expect(svgElement).toHaveAttribute('height', '327');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 623 327');
        expect(svgElement).toHaveAttribute('fill', 'none');
    });
});

describe('DeliveryContainer', () => {
    test('renders the SVG element correctly', () => {
        // Render the DeliveryContainer component
        const { getByTestId } = render(<DeliveryContainer />);

        // Assert the presence of the SVG element
        const svgElement = getByTestId('delivery-svg');
        expect(svgElement).toBeInTheDocument();

        // Assert the SVG attributes
        expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svgElement).toHaveAttribute('width', '623');
        expect(svgElement).toHaveAttribute('height', '277');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 623 277');
        expect(svgElement).toHaveAttribute('fill', 'none');
    });
});

describe('CircleButton component', () => {
    it('renders increment button correctly', () => {

      const { getByText } = render(<CircleButton isIncBtn={true} value="+" onClick={() => {}} />);
  

      expect(getByText('+')).toBeInTheDocument();
      expect(getByText('+')).toHaveAttribute('id', 'incBtn');
      expect(getByText('+')).toHaveClass('orange-circle-btn');
    });
  
    it('renders decrement button correctly', () => {

      const { getByText } = render(<CircleButton isIncBtn={false} value="-" onClick={() => {}} />);
  
      expect(getByText('-')).toBeInTheDocument();
      expect(getByText('-')).toHaveAttribute('id', 'decBtn');
      expect(getByText('-')).toHaveClass('orange-circle-btn');
    });
  
    it('calls onClick function when increment button is clicked', () => {

      const mockOnClick = jest.fn();
  

      const { getByText } = render(<CircleButton isIncBtn={true} value="+" onClick={mockOnClick} />);
  
      fireEvent.click(getByText('+'));
  
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  
    it('calls onClick function when decrement button is clicked', () => {
      const mockOnClick = jest.fn();
  
      const { getByText } = render(<CircleButton isIncBtn={false} value="-" onClick={mockOnClick} />);
  
      fireEvent.click(getByText('-'));
  
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

})