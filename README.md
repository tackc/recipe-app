This is a MERN-stack app. That being said, two terminal sessions are necessary:
* One for running the Express backend (port 3000)
* One for running React's dev server (port 8000)

Start the Express backend first by typing
```nodemon server.js ``` or ```nodemon server```

React's development server can now be started by typing
```yarn start```
 
##### Checking out the PRODUCTION app

If we want to see how the app will behave when deployed, we need to:

- Ensure that the React app has been built locally using `$ npm run build`.
- Browse to `localhost:3000` because that's where our Express server is running - which again, we coded to serve from the **build** folder.



> Important: During development, you don't want to browse to `localhost:3000`! Instead, you want the browser to be loading the React app from React's dev server on `localhost:8000`. We are only browsing to `localhost:3000` to check out how the deployed app will run.

So, when you are hacking out code and nothing seems to be updating in the browser - be sure to verify that you are browsing on `localhost:8000`.


## Recipe Categories
* Main Dishes
* Appetizers
* Side Dishes
* Desserts
* Drinks

## Default Keyword Options
* Breakfast
* Lunch
* Dinner
* Dessert
* Drink

## Recipe Card Categories
* Title
* Description
* Prep Time
* Cook Time
* Total Time
* Servings
* Recpie Author / Link
* Ingredients
    * Measurement
    * Ingredient
* Image(s)
* Instructions
* Recipe Notes
* Nutrition Information

## Entity Relationship Diagram for database
[Check out the editable ER diagram here!](https://editor.ponyorm.com/user/tackc/RecipeApp/designer)

## Navbar Notes
Apparently using bootstrap and React can cause some issues. I was running into trouble getting the 'hamburger menu' to work and referenced [this article](https://stackoverflow.com/questions/52248179/how-to-use-data-toggle-collapse-in-reactjs-with-bootstrap) on Stack Overflow to make it work.

## TODOs
* Add form validatior and sanitization using ```express-validator```. [Tutorial example here.](https://flaviocopes.com/express-sanitize-input/)

* Add TODO-like format for adding ingredients to recipe. [Example](https://codepen.io/arshdkhn1/pen/apoWJe?editors=0110)

* Simpler Implementation of Dynamic Form Fields [Example](https://codesandbox.io/s/react-dynamic-form-fields-3fjbd?from-embed=&file=/src/index.js:3007-3015) - [Step-by-step Example](https://dev.to/fuchodeveloper/dynamic-form-fields-in-react-1h6c)

* Use single onChange handler for form inputs. [Example](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react). [Full code](https://github.com/jaketrent/demo-single-change-handler/blob/master/src/App.js)

## Example Recipe App
* [Gramma's Kitchen](https://grammas.kitchen) - working app
* [Gramma's Kitchen](https://github.com/grammas/kitchen) - on Github

## Reference Articles
* [18 UX Design Tips for Registration and Login Forms](https://uxplanet.org/18-ux-design-tips-for-registration-and-login-forms-f897557358ba)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
