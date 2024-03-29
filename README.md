# Live Life

Welcome to the **[Live Life](https://live-life-897b359a6b34.herokuapp.com/)** website, a platform where people can share what their up to, share their experience of going out into the world. 

<img src="readmedoc/design/iamresponsive.png" alt="I am Responsive image for screen sizes for the site">

## Live Project

The link to the live website can be found **[Here](https://live-life-897b359a6b34.herokuapp.com/)**


## DRF-API READme
The Link, to DRF-API READme project can be found **[Here](https://github.com/PdoyleC/live-life-api/blob/main/README.md)**

**Purpose of the site**
- This site is a blog style site, aimed at people to share what their up to, going for a walk, having a picnic, etc.
- Upload images to share with everyone.
- User can upload images to their private folder called My Adventures for their private use. 
- Users can create a list of items for there next trip away for their private use. 


# Table of Contents

- [Table of Contents](#table-of-contents)
   * [UX](#ux)
      + [Site Purpose:](#site-purpose)
      + [Site Goal:](#site-goal)
      + [Audience:](#audience)
      + [Communication:](#communication)
      + [Current User Goals:](#current-user-goals)
      + [New User Goals:](#new-user-goals)
      + [Future Goals:](#future-goals)
   * [User Stories](#user-stories)
   * [User Experience](#user-experience)
      + [Agile](#agile)
   * [Design](#design)
      + [Wireframes](#wireframes)
      + [Logo:](#logo)
      + [Fonts:](#fonts)
      + [Colour Scheme:](#colour-scheme)
   * [Features](#features)
      + [Navbar](#navbar)
      + [Authentication](#authentication)
      + [Home Page](#home-page)
      + [Add Post](#add-post)
      + [Trip List](#trip-list)
      + [Adventures](#adventures)
      + [Following](#following)
      + [Liked](#liked)
      + [Contact](#contact)
      + [Profile](#profile)
      + [Search Bar](#search-bar)
      + [Liked/Comments](#likedcomments)
      + [404 error](#404-error)
      + [CRUD functionality](#crud-functionality)
   * [Testing](#testing)
   * [Deployment](#deployment)
      + [Heroku](#heroku)
      + [Connecting to the API:](#connecting-to-the-api)
   * [API error and feedback](#api-error-and-feedback)
   * [Technology](#technology)
      + [Languages](#languages)
      + [Frameworks](#frameworks)
      + [Other software and dependencies](#other-software-and-dependencies)
   * [Reusable React Components and hooks](#reusable-react-components-and-hooks)
      + [Components](#components)
      + [Hooks](#hooks)
   * [Issues](#issues)
   * [Credits](#credits)
   * [Acknowledgments](#acknowledgments)




## UX

### Site Purpose:
This site is a blog style site, aimed at people to share what their up to, going for a walk, having a picnic, etc.
A live life website serves as a digital haven for individuals seeking inspiration and guidance to enhance the quality of their lives. It is designed to touch the lives of its visitors, providing them with the motivation needed to live life and go out into the world.

### Site Goal:
Users to upload images, for the group. Users can upload images for themselves to view, create a list for their next trip so the user doesn't forget anything. The website acts as a source of inspiration, and sharing adventure's from people of all walks of life. Give other visitors ideas on things to do and places to go. If a user adds a post about having a picnic or there out for a walk, another user could see this as inspiration and go for a walk or a picnic.

### Audience:
Anyone who enjoys going out and about and wants to share what there up to.

### Communication:
The social network-style layout presents posts from different users, allowing interaction between them through likes, comments and following your favourite users.

### Current User Goals:
Create new posts regularly, Create their own adventure area for their own private viewing, Create a item list for their next adventure.

### New User Goals:
To engage the user in a meaningful way, and encourage them to explore life and the outside world.

### Future Goals:
- To provide a page for users to show walking routes around there area for others to see.
- Give users an option to send private messages to each other.
- If a user has created a post for themselves in My Adventures (which is for there own private viewing), it would be good to be able to share that post with a few people but not everyone, so a future improvement would be to have a share button where the user can select the users to share the adventure with, or to be able to create group where 2-127 users can share adventures. 
- User could create an event and other users can sign up for the event.
- Add ticks to the Trip list, so that items can be marked as bought or done, easier, and add a tick all radio button at the top. <details><summary>ticks to the Trip list</summary><img src="readmedoc/design/quickdeletetriplist.png" alt="quick delete trip list image"><img src="readmedoc/design/quickdeletetriplisttick.png" alt="quick delete trip list image with tick"></details>
- Create a place for users to add walking trails (maps) of routes of nice places to go that are off the beaten track, walks that most people don't know or only locals know. 
- To be able to have multiple trip lists for different trips. The user should be able to go into Trip Lists and see a choice of different lists instead of just one. <details><summary>multiple trip lists</summary><img src="readmedoc/design/futuretriplist.png" alt="future trip list image"></details>, and the user will be able to create a list in the same way it is done now.
- In a future iteration, stopping the user from entering the same item again and again would be good. Put code in place to search if the item is already in the list and display an error message to say that the item is already in the list and click ok to enter the item again or cancel to stop.<details><summary>same item entered</summary><img src="readmedoc/design/entersameitem.png" alt="enter same item image"></details>



## User Stories
I have included links to the [GitHub Issues](https://github.com/PdoyleC/live-life/issues) for this project, as well as the [KANBAN board](https://github.com/users/PdoyleC/projects/6/views/1).

- General Site
  - Account registration
  - Account sign-in
  - Account sign-out
  - User profile
- Trip List
  - Search Bar
  - Add Items
  - Editing Items
  - Delete Items
- My Adventure
  - Search Bar
  - Add Adventure
  - Editing Adventure posts
  - Delete Adventure posts
- Contact US
  - Creating Contact US

## User Experience

### Agile

- Agile methodology was used for this project, starting from the planning stage and continuing until the final product. GitHub project was used to stay organized and keep track for the different issues being looked after [ISSUES board](https://github.com/PdoyleC/live-life/issues).
- Agile methodology was used to map and create user stories, each with their own function and list of tasks.
- GitHub projects Kanban was used to keep track of the project. It is divided into To Start, In Progress and Completed. [KANBAN board](https://github.com/users/PdoyleC/projects/6/views/1) to Kanban board.

<img src="readmedoc/design/kanbanproject.png" alt="kanban project image">


## Design

### Wireframes

- Wireframes created using [Balsamiq](https://balsamiq.com/).
- Some wireframes have changed from the original design due to iterative revisions and evolving requirements.


<img src="readmedoc/wireframe/wirehome.png" alt="Home image">
<img src="readmedoc/wireframe/wireprofile.png" alt="Profile image">
<img src="readmedoc/wireframe/wireupload.png" alt="Upload image">
<img src="readmedoc/wireframe/wireadventure.png" alt="Adventure image">
<img src="readmedoc/wireframe/wirecontactus.png" alt="Contact Us image">
<img src="readmedoc/wireframe/wiretriplist.png" alt="Trip List image">


### Logo:

Using publisher and paint I created the logo. Font Kristen ITC was used for the lettering, Publisher was used to create the colour and lettering, paint was used to merge the two L's together and also to merge the two L's to the Green circle. 
<details>
<summary>Logo Image</summary>

<img src="readmedoc/design/livelifelogo.png" alt="Live Life logo">
<img src="readmedoc/design/livelifelogopaint.png" alt="Live Life logo paint software">
<img src="readmedoc/design/livelifelogopublisher.png" alt="Live Life publisher software">
<img src="readmedoc/design/pagenotfounddesign.png" alt="page not found design">
- The page not found image was designed in Paint.
</details>

### Fonts:
The fonts used for this website were "DM sans" and "sans serif" by default. A choice that should be plain and easy to read. The fonts for the navigation links and logo on the navigation bar are in Green. If a Navbar link is active, its highlighted in a Green. The icon of the page is in Green to show the user which page is active.

<img src="readmedoc/fonts/dnsans.png" alt="DM Sans fonts">

### Colour Scheme:

- Green was used for the circle in the logo and for the icons when the user is on a page.
   - Green is often associated with nature and growth. Green is often described as refreshing, tranquil, and harmony, making it a popular choice for things related to health and wellness.   
   - Green is relaxing and some find green motivates.

<details>
<summary>Colour Palette Image</summary>

<img src="readmedoc/design/colourpalet.png" alt="colour Palette">

</details>


## Features

### Navbar

- Live Life's navbar, is visible at all times. When a user first visits the site, the navbar displayed has a Sign Up link and a contact us link.
- The user is able to contact the site owners if there having any issues. The user is able to create an account in the sign up link.
- The Home icon is visible here for new users, this makes it easier for a new user to navigate.
- ***The Live Life logo is the Home link***

<img src="readmedoc/features/navbarsignedout.png" alt="Navbar Signed Out  Page">

- When the user has signed up or signed in the navbar changes and the user has access to all the site links and pages. 

<img src="readmedoc/features/navbar.png" alt="Navbar Page">


### Authentication

- The user has to create an account using a valid username and password. When the user signs in they must use their username and password which they created an account. If no info is added error messages appear in the fields boxes.

<img src="readmedoc/features/signuppage.png" alt="Sign Up Page">
<img src="readmedoc/features/signinpage.png" alt="Sign In Page">
<img src="readmedoc/features/blankfields.png" alt="blank fields sign up and sign in">

### Home Page

- ***The Live Life logo is the Home link***
- This is the sites landing page. The user has access to Add Post, Their personal Trip List, their personal Adventure posts, Items containing Liked posts, following users, and contact site owners, Sign out and their Profile page, where user can edit their profile by changing (name, password).

<img src="readmedoc/features/landingpage.png" alt="Landing Page">

### Add Post

- Users can add a post by clicking on the add post icon and they will be redirected to add a post and upload an image.

<img src="readmedoc/features/addpostpage.png" alt="Add Post Page">


### Trip List

- In Trip List the user can have their own personal list of things that they need for their next trip/adventure away.
- It can be a to do list for the user.
- Users can add items, see their items entered under the add items section, users can search for items, edit/update and deleted items entered.
- The list is ordered in if the user needs to buy it or not, if the item needs to be bought then the item is top of the list and if it doesn't need to be bought it goes down the bottom of the list. This is so the user can see first what needs to be bought.
- Users have full CRUD over their items entered. 

<img src="readmedoc/features/tripslist.png" alt="Trips List">

- Users can add their items here. Users can enter item name, the number thats needed and also if the user needs to buy the item or not.

<img src="readmedoc/features/triplistadditem.png" alt="Trip List Add Item Page">

- Users can search for an item entered also. If the user has loads of items on their list, this search feature will come in handy to see if an item has already been entered.

<img src="readmedoc/features/triplistsearch.png" alt="Trip List Search List">
<img src="readmedoc/features/triplistaddeditemslist.png" alt="Trip list Added items list">

- Users have full CRUD over the items. Users can update or deleted their items by pressing the 3 dots.

<img src="readmedoc/features/triplistedit.png" alt="trip list edit List">


### Adventures

-  Users have their own private personal space to upload their own adventures just for them to look at. Users can add a post adventure here by clicking Add an Adventure button. Users have full CRUD over their posts entered. 

<img src="readmedoc/features/myadventures.png" alt="My Adventures">

- Users can enter their own personal adventures here. Users can add a personal note here also, maybe to say who they were with or how long of a trip it was.

<img src="readmedoc/features/addadventurespage.png" alt="Add Adventures Page ">

- The search bar is there for users to find a trip that they have been on easier. Users can search for Location or Activity.

<img src="readmedoc/features/adventuresearch1.png" alt="Adventures Search Page ">
<img src="readmedoc/features/adventuresearch2.png" alt="Adventures Search Page ">

- Here users can see the posts from the other profiles that their following, users won't see posts from profiles that they're not following. 

### Following

<img src="readmedoc/features/following.png" alt="Following">

### Liked

- Here users can see the posts that they have liked and no other posts. 

<img src="readmedoc/features/liked.png" alt="Liked">

### Contact

- All users are able to contact the site owners, even if the user doesn't have an account, for any issues relating to the site.

<img src="readmedoc/features/contactus.png" alt="Contact Us Page">

### Profile

- In the profile section, users can see how many posts they have created, the number of people following them and the number of people they follow. Users can also change their profile / Username and password here.

<img src="readmedoc/features/profile.png" alt="profile Page">

### Search Bar

- There are 5 search bars on the site.
- There is a search bar for posts on the home page.
- There is a search bar for Trips list where the user can search for items they've entered.
- There is a search bar for My Adventure, where the user can search for their own posts.
- There is a search bar for in the Following page.
- There is a search bar for in the Liked page.

<img src="readmedoc/features/searchbar.png" alt="search bar image">


### Liked/Comments

- User can see on each post if it has been liked and if there is a comment for the post.

<img src="readmedoc/features/likedcomments.png" alt="liked comments image">

- User can't like their own posts.

<img src="readmedoc/features/cantlike.png" alt="can't like post">

- User can see comments in each post when the post image is clicked.

<img src="readmedoc/features/comments.png" alt="comments post">

- Users can edit their own comments by clicking the 3 dots and choosing edit.
<img src="readmedoc/features/editcomments.png" alt="edit comments post">

- By clicking on the 3 dot the user can select if they want to edit their profile, change they password or change username.

<img src="readmedoc/features/profileedituser.png" alt="profile edit Page">



### 404 error

- If a user enters an incorrect URL extension, they're greeted with an error page.

<img src="readmedoc/features/404errorpage.png" alt="404 Error Page">

### CRUD functionality
Live Life features have full Create, Read, Update and Delete functions.
- Create - users can register a new account, and all authenticated users can create posts, comments, Trip lists and My adventures posts.
- Read - authenticated users can view their Trips list, My adventures, comments and posts, other users posts and comments, and their profile image and display name.
- Update - authenticated users can update their posts, comments, Trip List, My Adventure posts, Likes, profile image, display name and password.
- Delete - authenticated users can delete their posts, Trip lists, My adventure posts, Comments. 

## Testing

Please see [TESTING.md](TESTING.md) for all testing completed.

## Deployment

### Heroku
To deploy to Heroku, follow these steps:

1. In the `scripts` section of `package.json` in GitPod, added the following command:
```
"heroku-prebuild": "npm install -g serve",
```
2. Add Procfile to project root & populate with the following:
```
web: serve -s build
```
3. Log in to heroku.com and open the dashboard for your react application (remember this is separate from the DRF application that runs your API).
4. Select 'Create new app' from the 'New' menu at the top right.
5. Select the “Deploy” tab in the dashboard.
6. Scroll down to the bottom and then select “Deploy Branch”.
7. Wait for your build to complete (you can click “view build log” to watch the process in a larger window).
8. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.


### Connecting to the API:
1. Login to the Heroku app of the project DRF-API, and under the Settings tab, added the following Config Vars.
- Key: CLIENT_ORIGIN | Value: https://react-app-name.herokuapp.com
- Key: CLIENT_ORIGIN_DEV | Value: https://gitpod-browser-link.442-fg.gitpod.io
2. Check that the trailing slash `\` at the end of both links has been removed, and save the Config Vars.
3. Install the Axios package, & create supporting `axiosDefaults.js` as shown in Moments Walkthrough



## API error and feedback
Here are the examples that are absolutely fine: three 401s on mount when not logged in, 401 error when going to sign up/ sign in page, which happens when we check if we need to redirect a logged in user away from these pages.
A 401 error when providing incorrect form input such as submitting the sign
in form without entering a username. And 401 error when an access token has expired,
it is refreshed in the background and the request eventually succeeds.

## Technology

### Languages
- JSX
- HTML
- CSS
- Javascript

### Frameworks
- React
- React bootstrap

### Other software and dependencies
- Axios
- React testing library
- npm
- [Balsamiq](https://balsamiq.com/)
- [Github](https://github.com/) - Host for the repository
- [Gitpod](https://gitpod.io/workspaces) - Code editor
- [Code AnyWhere](https://app.codeanywhere.com/) - Code editor
- [ElephantSQL](https://www.elephantsql.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Static & Media host
- [Heroku](https://id.heroku.com/login) - Cloud platform/Host the live project
- Chrome DevTools - Testing tool
- [WAVE Evaluation tool](https://wave.webaim.org/) - Testing tool
- [W3jigsaw](https://jigsaw.w3.org/css-validator/) - CSS validation tool
- [JSHint](https://jshint.com/) - Javascript testing tool

## Reusable React Components and hooks

### Components

- AdventureCard: this displays a post for adventures
- Asset: renders a loading spinner, an image or message. 
- Avatar: displays the user's profile image.
- MoreDropDown: displays a dropdown menu for edit, delete functions.
- NavBar: displays the navbar at the top of the site.
- NotFound: displays a message for the user if they go to a non-existing url.

### Hooks
- useClickOutsideToggle: provides a convenient way to handle the closing, for example a menu by monitoring clicks outside the component.
- useRedirect: redirects the user depending on authorization.

## Issues

- After my adventures was created and there was a number of images uploaded under user A. I logged in under user B and I was able to see the images that user A had uploaded. This was solved by adding Authenticated only and adding a filter to the queryset, [in the backend api](https://github.com/PdoyleC/live-life-api/commit/270f2ff0e80ed908788683529fd3594c259d0c88).

- When the dropdown menu was added and tested on a small screen (mobile). The dropdown menu was opening but wouldn't close when a page link was pressed. This was fixed by removing ref and changing a const for easy to read function. The user would still have to close the menu by pressing the hamburger icon. The dropdown was later removed for better responsive when selecting different pages, as the user would have to press the hamburger icon to close the navbar everytime. 
<img src="readmedoc/issues/dropdown.png" alt="dropdown menu issue image">

- There was an issue with the complete items list not loading fully. It was giving an array of 10 objects only, when there were more items in the list. This was solved by adding [newPage filter search and completeListTrips](https://github.com/PdoyleC/live-life/commit/367b5fd461d509d57dbb2a569817b2598c6b7987).
<img src="readmedoc/issues/itemlistarr.png" alt="item list array issue image">

- There was an issue with the dropdown menu when testing was done on a mobile screen. When a user clicked the link (i.e. contact Us) the menu never closed, it stayed open, and the hamburger icon needed to be pressed to close it. [Navbar Close Menu Issue](https://forum.bootstrapstudio.io/t/solved-bootstrap-navbar-close-menu-issue/7204/2) couldn't be resolved so it was decided to remove the dropdown menu and also removed the Home link and Icon as the Live Life logo is a home link and also it was decided to keep the following and Liked links there. The Home icon was removed as it was just doubling up on a task that was being completed by the logo already.
<img src="readmedoc/issues/navbardropdown.png" alt="navbar dropdown issue image">

- There is an issue that I would have liked to have resolved, when a user enters an item (i.e. Book, in the 1st image below) that item can be entered a number of times. There is a search bar for the user to use to see if the item is already there. I tried using unique constraints to stop this from happening, using django admin in the Add trip image (2nd image), there is an example of Map being added by user Jason to there trip list. Since Jason already has the item Map in his list there is an error. When David goes to add the item Map to his trip list, an error appears saying that the item is already there, when in fact David doesn't have item Map in his trip list. When the item is added to Davids trip list, the trip list only sees that the item is there and not who it belongs to, so the item needs to be added with the owner. This was resolved by adding item and owner for the UniqueConstraint
[UniqueConstraint  github.com](https://github.com/PdoyleC/live-life-api/commit/bfa8580120243a985cd8df02c0fa831998b29000). 
[Constraints reference djangoproject](https://docs.djangoproject.com/en/3.2/ref/models/constraints/) and ,
[Constraints reference stackoverflow.com](https://stackoverflow.com/questions/2201598/how-to-define-two-fields-unique-as-couple/2201687#2201687). On the frontend side of the site, after the backend was deployed the site was opened on a local port and Trip List was tested, the item Jumper was used to test this, in the 3rd image below, when the item Jumper was entered and Jumper was already in the list the item didn't enter the list but it just stayed there in the form. A user could keep on pressing Add item and nothing would happen. The user could think that there was something wrong with the site, so an error message would be needed. I wasn't successful in completing this code, due to knowledge gaps and time constraints for the project due date.
[Display Error Messages stackoverflow.com](https://stackoverflow.com/questions/73251549/trying-to-display-error-messages-on-the-frontend-from-the-backend)
[validation Error Messages stackoverflow.com](https://stackoverflow.com/questions/64245493/bootstrap-validation-is-not-showing-the-error-message-for-empty-input-on-submit).

Image 1 <img src="readmedoc/design/entersameitem.png" alt="enter same item image">
Image 2
<img src="readmedoc/issues/uniqueconstraint.png" alt="unique constraint  image">
Image 3
<img src="readmedoc/issues/ucjumper.png" alt="enter same item image">




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
- React-infinite-scroll-component [Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component).

## Acknowledgments

- The following tutors online at CI, guided and helped me during this project - Oisin, Holly, John, Rebecca, Sarah, Joanne, Alan, Lewis, Thomas, Sean.
- My mentor Jubril Akolade for good briefings, tips and feedback.