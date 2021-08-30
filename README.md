# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## React Fast Refresh Disabled to false in .env for Debugging purpose

> set `false` to refresh page every time when code change benefit for `console.log()` debug way  

## React Helmet

Reusable React component will manage all of your changes to the document head dynamically

- Supports all valid head tags: title, base, meta, link, script, noscript, and style.

### Install

`yarn add react-helmet`

### Server-Side-Rendering Usage

> documentation: [react-helmet-async](https://classic.yarnpkg.com/en/package/react-helmet-async)

`yarn add react-helmet-async`

### Server Usage

To use on the server, call `Helmet.renderStatic()` after `ReactDOMServer.renderToString`
or `ReactDOMServer.renderToStaticMarkup` to get the head data for use in your prerender.

```js

ReactDOMServer.renderToString(<Handler />);
const helmet = Helmet.renderStatic();

```

### Client Usage

` import {Helmet} from "react-helmet"; `

```js
<Helmet>
      <meta charset="utf-8">
      <meta name="description"
        content="This is a meta description sample. We can add up to 160 characters.">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="canonical" href="http://example.com/main-page" />
      <title>Page Title :Simple for template Easy Adaptive</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>{title modified}</title>
      <style type="text/css">
      {
          `
          .app{
              background-color:#f5f5f5;
          }
          `
      }
      </style>
</Helmet>

```

This helmet instance contains the following properties:

- base
- bodyAttributes
- htmlAttributes
- link
- meta
- noscript
- script
- style
- title

```js

import React from "react"
import {Helmet} from "react-helmet"

export const SEO = ({title, description, meta}) => {
 return(
  <Helmet title = {title}
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          name: `description`,
          content: description,
        } 
      ]}
   />
  )
}

```
