# My sketch app

I am experimenting with writing my Processing sketch/animation script in the React Javascript library.

# Steps I took to create, build, and deploy:

## First, create React app

- Use `create-react-app your-app-name` in terminal to create the react application.
- Use `npm start` to launch application locally, once the application is compiled successfully you'll be able to view your app on `http://localhost:3000/`.

 ## Second, deploy to gh-pages

- `cd your-app-name`
- Use `npm install gh-pages --save-dev`

**Add some properties to `package.json`**

*After creating a new git repository*

- At the top level, add a home page property.

    `"homepage": "http://yourgitname.github.io/name-of-repo"`

- In the scripts property, add a `preploy` and `deploy` property.

    ```
      "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
      }
    ```

- To generate a production build of application:

    run `npm run deploy`

## Third, add bootstrap and required dependencies

- Use `npm install --save react-bootstrap`

- Use `npm install bootstrap --save`

- import css and js with these three lines at top of app.js file:

  ```
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../node_modules/react/react.js'
  import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
  ```
