# My sketch app

I am experimenting with embedding a Processing/P5.js sketch in the React Javascript library.

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

- Add CDN css and js links to public/index.html file:

```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- react-bootstrap -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>

```

## Fourth, add P5.js sketch to react app

This is tricky and there is not a lot of help out there yet on the Internet.

I found on the Processing.org forum a helpful discussion by Github user [Job Leonard][job-leonard], he created a component that wraps the p5js library. On Github, [here][p5-react].

[job-leonard]: https://forum.processing.org/two/discussion/23761/p5-react-a-react-component-wrapping-p5js-sketches
[p5-react]: https://github.com/JobLeonard/p5-react
