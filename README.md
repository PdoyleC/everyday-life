# Live Life

Welcome to the **[Live Life](https://live-life-897b359a6b34.herokuapp.com/)** a platform where people can share what their up to, share their experience of going out into the world. User can upload images for other to view or can upload images to their private folder called My Adventures for the use. 

<img src="readmedoc/iamresponsive.png" alt="I am Responsive image for screen sizes for the site">


[Link, to live project](https://live-life-897b359a6b34.herokuapp.com/)

[Link, to DRF-API READme project](https://github.com/PdoyleC/live-life-api)

**Purpose of the site**
- This site is a blog style site, aimed at people to share what their up to, going for a walk, having a picnic, etc.
- Upload images.
- View other users images.




# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Design](#design)



## Design

### Wireframes

<details>
<summary>Wireframes</summary>

<img src="readmedoc/wirehome.png" alt="Home image">
<img src="readmedoc/wireprofile.png" alt="Profile image">
<img src="readmedoc/wireupload.png" alt="Upload image">
<img src="readmedoc/wireadventure.png" alt="Adventure image">
<img src="readmedoc/wirecontactus.png" alt="Contact Us image">


</details>

### Logo:

Using publisher and paint I created the logo. Font Kristen ITC was used for the lettering, Publisher was used to create the colour and lettering, paint was used to merge the two L's together and also to merge the two L's to the Green circle. 
<details>
<summary>Logo Image</summary>

<img src="readmedoc/livelifelogo.png" alt="Live Life logo">
<img src="readmedoc/livelifelogopaint.png" alt="Live Life logo paint software">
<img src="readmedoc/livelifelogopublisher.png" alt="Live Life publisher software">



<img src="readmedoc/pagenotfounddesign.png" alt="page not found design">
- The page not found image was designed in Paint.
</details>

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

## Issues

- After my adventures was created and there was a number of images uploaded under user A. I logged in under user B and I was able to see the images that user A had uploaded. This was solved by adding Authenticated only and adding a filter to the queryset, in the backend api.
- 


## Credits

- [React bootstrap navbar](https://react-bootstrap-v4.netlify.app/components/navbar/).
- Route renders a given component  when its path matches the current URL. [React router](https://reactrouter.com/en/6.21.3/web/guides/quick-start).
- Dropdown menu [React bootstrap Dropdown](https://react-bootstrap-v4.netlify.app/components/dropdowns/#custom-dropdown-components).
- Page layout [React bootstrap Dropdown](https://react-bootstrap-v4.netlify.app/layout/grid/).
- Infinite Scroll [Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component).
- Screen Size Thresholds [screen-size-thresholds](https://stackoverflow.com/questions/51566916/why-does-bootstrap-use-a-0-02px-difference-between-screen-size-thresholds-in-its).
- Components Cards [components cards](https://react-bootstrap.netlify.app/docs/components/cards).
- Add an adventure button link [button link](https://artwilton.medium.com/adding-a-link-to-a-bootstrap-button-with-react-router-57d2f6197588).
- From for contact page [Contact form](https://react-bootstrap-v4.netlify.app/components/forms/?).
- Contact page modal pop up for confirmation [Modal pop up](https://getbootstrap.com/docs/4.0/components/modal/).
