# LikeIt

<img src="https://user-images.githubusercontent.com/103478551/209656711-f86178bf-213e-4c8b-b6b4-f7f06050069d.png">

## Table of contents

* [Overview](#overview)
* [Technologies used](#technologies)
* [Languages used](#languages)
* [Supported functionality](#functionality)
  + [Sign Up](#sign-up)
  + [Log In or Out](#log-in-or-out)
  + [Scroll Through Feed](#scroll-through-feed)
  + [Create a Post](#create-a-post)
  + [Like or Unlike a Post](#like-or-unlike-a-post)
  + [Follow or Unfollow a User](#follow-or-unfollow-a-user)
  + [Add Profile Status](#add-profile-status)
  + [Change Profile or Background Picture](#change-profile-or-background-picture)
* [Backend MongoDB](#backend-mongodb)
* [Installation](#installation)
* [Configure the analyzers](#configure-the-analyzers)
  + [Configure the levels of the analyzers](#configure-the-levels-of-the-analyzers)
  + [Tested analyzers](#tested-analyzers)

## Overview

LikeIt is a social media application that combines features from facebook, instagram, and twitter. The web application deals with client and server side, and uses big stack approach. The global state is managed using redux libray, and uses React Router V6. The app also implements authentication for users, which is implemented using JWT authentication. The website allows the users to create an account, sign up / login, create a profile picture and background picture. It also allows users to follow and unfollow each other, post pictures, and populates their timeline with posts from the users they follow, in chronological order. They are also able to edit a status on thier profile, like other posts, and automatically calculates their number of followers/following.


## Technologies
[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Front+End;)](https://git.io/typing-svg)
<p align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> 
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>
</p>

[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Back+End;)](https://git.io/typing-svg)
<p align="center">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> 
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</p>

## Languages
[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=Languages;)](https://git.io/typing-svg)
<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=whit"/>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"/>
</p>

## Functionality

#### Sign Up
<img src="https://media.giphy.com/media/elSbb0iD5dSVcfh5Nz/giphy.gif" width="900" height="730">
Signing up adds the new user to the database, and gives them the default profile and background image. It checks to see if passwords match, and checks if the user already exists in the database before doing so. 

#### Log In or Out
<img src="https://media.giphy.com/media/LdoUkF2twXT4gkoihl/giphy.gif" width="700" height="530">
Logging in simply checks if the user exists in the databse. If so, it checks if the passwords match. If so, then they can move on their own home page. 

Logging out simply clears the memory of the browser such that the user has to log back in, either with the same credentials or a different one. 

#### Scroll Through Feed
<img src="https://media.giphy.com/media/ZFBd9pxKvjqMK1Aqgk/giphy.gif" width="700" height="530">
The feed is created by appending all the posts of the users who are followed in the database, then ordering the posts using the timestamps so that the most recent post in on top. 

#### Create a Post
<img src="https://media.giphy.com/media/HPUz3qclIElvlhsMyf/giphy.gif" width="700" height="530">
One can create a post that includes a text, an image, or both. The functionality is supported for any option, and each post has its own ID in the backend, and is timestamped so that they are shown in chronological order.

#### Like or Unlike a Post
<img src="https://media.giphy.com/media/wpVh4p82R9T7XxPsrd/giphy.gif" width="700" height="530">
Liking a post is simply done through pressing the like button, which increments the post's number of likes by 1. Clicking the button again removes the like from the post

#### Follow or Unfollow a User
Following a user and unfollowing them is similar to liking the post. Clicking the follow button allows the user to be added to the userBeingFollowed's array of followers, and adds the userBeingFollowed to the user's array of followings. Pressing the button again reverses this process. This is shown above. 

#### Add Profile Status
<img src="https://media.giphy.com/media/fq8JaLSUalKxwwKbAt/giphy.gif" width="700" height="530">
At the click of a button, the user is able to access their status. They can change the fields, their information, and the respective picture, for background and profile. 

#### Change Profile/Background Picture]
<img src="https://media.giphy.com/media/74f209Zeae9b08qCag/giphy.gif" width="700" height="530">
This is performed in the same way as above



## Backend MongoDB
<img src="https://user-images.githubusercontent.com/103478551/209657629-59e84dc9-49a7-4e32-95b9-e8a63a43c260.png">


## Installation
- Download the files, then CD into the /client and run the following commands
```
cd client
npm i redux red ux-thunk react-redux
npm i axios
yarn 
yarn add react-roucter-dom
yarn start
)
```
- Simultaneously open a new terminal, CD into the /server and run the following 
```
npm init
npm i express
npm i mongoose
npm i body-parser
npm i nodemon
yarn 
yarn add react-roucter-dom
npm start
)
```


- The backend is connected to mongo db cloud
- The server runs in port 8080
- The client runs in port 3000
- Make sure these are free before downloading the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `yarn build` fails to minify
