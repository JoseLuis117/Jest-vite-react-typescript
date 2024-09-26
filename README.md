# Jest + React + TypeScript + Vite

This repository is intended to explain how to set up Jest in a React project initialized with Vite and using TypeScript.

## Project Initialization

1. **Create a new Vite project with TypeScript:**

   ```bash
   npm create vite@latest
   select Typescript + SWC or Typescript

2. **Install these dependencies:**
    ```bash
   npm i -D jest babel-jest @babel/preset-env @babel/preset-react
   npm i -D @testing-library/react @testing-library/user-event @types/jest jest-environment-jsdom
   npm i -D jest-svg-transformer
   npm i -D @babel/core @babel/preset-typescript
   npm i -D identity-obj-proxy
   npm i -D @testing-library/jest-dom

3. **Add babel.config.js in the root directory:**
   ```js
   module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ],
   };

4. **Add jest.config.js in the root directory:**
   ```js
   module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "\\.(css|less|scss)$": "identity-obj-proxy",
    }
   };


5. **Add jest.setup.js empty in the root directory:**

6. **Add script in the package.json:**
    ```bash
    "test":"jest --watchAll"

6. **Remove "type": "module" in the package.json:**

7. **In the src directory add App.test.tsx, and write this:**
   ```js
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

## Prime React Error: 'Error: Could not parse CSS stylesheet'

https://github.com/primefaces/primeng/issues/14085#issuecomment-1941347163
