Welcome to the **[Living Life](https://everyday-life-3e5f19430af5.herokuapp.com/)** and platform where people can share what their up to.


[Link, to live project](https://everyday-life-3e5f19430af5.herokuapp.com/)

**Purpose of the site**
This site is a blog style site, aimed at people to share what their up to, going for a walk, having a picnic, etc.

[Link, to API READme project](https://github.com/PdoyleC/live-life-api)


# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Design](#design)


## Design

### Logo:

Using publisher and paint I created the logo. Font Kristen ITC was used for the lettering, Publisher was used to create the colour and lettering, paint was used to merge the two L's together and also to merge the two L's to the Green circle. 
<details>
<summary>Logo Image</summary>

<img src="readmedoc/livelifelogo.png" alt="Live Life logo">
<img src="readmedoc/livelifelogopaint.png" alt="Live Life logo paint software">
<img src="readmedoc/livelifelogopublisher.png" alt="Live Life publisher software">

</details>
<img src="readmedoc/pagenotfounddesign.png" alt="page not found design">


### Colour Scheme:

<details>
<summary>Colour Palet Image</summary>

<img src="readmedoc/colourpalet.png" alt="colour Palet">

</details>

### Database schema

## Deploy connect
CLIENT_ORIGIN to live life API with the url for your deployed React application. 
CLIENT_ORIGIN_DEV  to live life API with Code anywhere preview link.  
npm install axios in IDE
create api folder and add axiosDefaults.js folder.
add deployed API heroku link




## API error and feedback
Here are the examples that are absolutely fine: three 401s on mount when not logged in,
which we just discussed; 401 error when going to sign up/ sign in page,
which happens when we check if we need to redirect a logged in user away from these pages.
A 401 error when providing incorrect form input such as submitting the sign
in form without entering a username. And 401 error when an access token has expired,
it is refreshed in the background and the request eventually succeeds.


## credits

- [React bootstrap navbar](https://react-bootstrap-v4.netlify.app/components/navbar/).
- Route renders a given component  when its path matches the current URL. [React router](https://reactrouter.com/en/6.21.3/web/guides/quick-start).
- Dropdown menu [React bootstrap Dropdown](https://react-bootstrap-v4.netlify.app/components/dropdowns/#custom-dropdown-components).



![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for React apps on the Codeanywhere IDE. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.  
DO NOT use this template if you are using the Gitpod IDE. Use the following command instead:  
`npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **31st August, 2023**

## Codeanywhere Reminders

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

Happy coding!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required npm packages.

### `npm start`

Runs the app in the development mode.\
Open port 3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
