import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


describe('App Component', () => {
    test('renders Vite and React logos with correct links', () => {
        render(<App />);

        const viteLogoLink = screen.getByRole('link', { name: /vite logo/i });
        const reactLogoLink = screen.getByRole('link', { name: /react logo/i });

        expect(viteLogoLink).toHaveAttribute('href', 'https://vitejs.dev');
        expect(reactLogoLink).toHaveAttribute('href', 'https://react.dev');
    });

    test('renders initial count', () => {
        render(<App />);
        const buttonElement = screen.getByRole('button', { name: /count is 0/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('increments count when button is clicked', () => {
        render(<App />);
        const buttonElement = screen.getByRole('button', { name: /count is 0/i });

        // Click the button
        fireEvent.click(buttonElement);

        // After the click, the count should increment
        expect(buttonElement).toHaveTextContent('count is 1');
    });
});
