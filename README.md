# Kata09 Solution (Frontend)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a8373ec2-9228-492b-bfb0-3c0d4536188c/deploy-status)](https://app.netlify.com/sites/kata-checkout/deploys)

A simple checkout to calculate the total cost in shopping cart. Adding item will call backend API to do calculation instantly. Auto deployment on master branch: https://kata-checkout.netlify.app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Third-party Libraries Used

`material-ui`, `react-query`, `axios`, `Cypress`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Improvement to do

-   Define model/interface for checkout API response. Handle unexpected data structure returned such as display an error page.
-   Split table component into small subcomponents such as table row component `TableRowComponent`.
-   Extract inline stlying to separate css file such as using styled-components for better maintainability and reusability.
-   Optimize Rendering: Use the useCallback hook to memoize callback functions passed to child components to prevent unnecessary re-renders.
-   Migrate Javascript to Typesciption which enabling better dev experience with type safe check.
-   Use MVVM design pattern.
