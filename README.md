# Getting Started with rabase-neutron Template (Eslint and Prettier base integrated)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Usage React Template

```terminal
npx create-react-app@latest new-app --template rabase-neutron
```

---

## Unexpected Error facing

> 'prettier/prettier': context.getPhysicalFilename is not a function

Fixing by `npm upgrade -R eslint`

---

## React Fast Refresh Disabled to false in .env for Debugging purpose

> set `false` to refresh page every time when code change benefit for `console.log()` debug way

---

## Package Integrated

- axios
- eslint
  - eslint-config-airbnb
  - eslint-config-prettier
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-prettier
  - eslint-plugin-react
  - eslint-plugin-react-hooks
- prettier
