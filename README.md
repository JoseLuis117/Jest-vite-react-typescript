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
