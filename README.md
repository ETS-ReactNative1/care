# Care

- [Overview](#Overview)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

<br>

## Overview

**Care** is a therapy/self-care app where a user will be able to track his mood, create affirmations, and read/share educational insights with the community.
A post mvp feature will allow the user to track his symptoms.

<br>

## MVP

- _*Care* will feature full-crud (create-read-update-destroy) functionality for: moods, affirmations and insights, which will be managed by a user._
- _Allow for user sign up, authentication, login, and verification._
- _*Care* will feature mobile-first design, that follows some of the [material-design](https://en.wikipedia.org/wiki/Material_Design) principles._
  <br>

### Goals

- _Restrict the app only for logged in users (unlogged in users will be redirected to register/login)._
- _Insights page: user will be able to delete+edit his own insights, but not other users insights._
- _Mobile-friendly design_
- _*Care* will be user-friendly._

<br>

### Challenges

- _thinking about a transition from mobile to desktop mode (Media query) that makes sense, since this is a heavily mobile focused app_

### Libraries and Dependencies

|      Library      | Description                                                                                       |
| :---------------: | :------------------------------------------------------------------------------------------------ |
|       React       | _Front-end client server_                                                                         |
|   React Router    | _Front-end navigation between pages_                                                              |
|       Axios       | _NPM Package to help make API requests_                                                           |
| Styled-Components | _Front-end styling package_                                                                       |
|    Material-UI    | _Front-end styling package_                                                                       |
|   Ruby on Rails   | _Back-end server_                                                                                 |
|   React-Moment    | _React component for the moment date library._                                                    |
|     Rack-CORS     | _back-end support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications._ |
|        JWT        | _back-end authentication dependency_                                                              |
|    PostgreSQL     | _object-relational database system_                                                               |

<br>

### Client (Front End)

### Wireframes

> for the rest of the wireframes please visit this [link:](https://www.figma.com/file/w81a4kRRTnBui5JkqWn5ZN/Care-Wireframes)

### Mobile Login

![mobile login](https://i.imgur.com/plRRI3d.png)

> <div>Care logo made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
>  <br>

### Mobile Home

[Low-fi Code Sandbox](https://codesandbox.io/s/moods-test-87shf?file=/Home.jsx) <br>

![mobile home](https://i.imgur.com/C5il2wu.png)

<br>

### Mobile Community

![mobile community](https://i.imgur.com/CkX7VA5.png)

<br>

### Mobile More

![mobile more](https://i.imgur.com/Faj6lY9.png)

<br>

### Component Tree

> [Component Tree Link (Whimsical)](https://whimsical.com/care-JWXTaZdt8XN5jBPYfiuagm)

![component tree](https://i.imgur.com/F8QEXcy.png)

<br>

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ CurrentUser/
  |__ CurrentUserContext.jsx
|__ components/
   |__MoodComponents
      |__ Moods.jsx
      |__ MoodCard.jsx
   |__ AffirmationComponents/
       |__ Affirmations.jsx
   |__ InsightComponents/
       |__ Insights.jsx
       |__ InsightCard.jsx
|__ layouts/
  |__Layout/
     |__ Layout.jsx
     |__ Header.jsx
     |__ Footer.jsx
|__ services/
   |__ apiConfig.js
   |__ moods.js
   |__ auth.js
   |__ affirmations.js
   |__ insights.js
|_ containers/
   |__ MoodsContainer.jsx
   |__ AffirmationsContainer.jsx
   |__ InsightsContainer.jsx
|_ screens/
 |__Main/
   |__ Home.jsx
   |__ Community.jsx
   |__ More.jsx
   |__ Login.jsx
   |__ Register.jsx
 |__ AffirmationScreens/
   |__ AffirmationDetail.jsx
   |__ AffirmationEdit.jsx
   |__ AffirmationCreate.jsx
|__ MoodScreens/
   |__ MoodEdit.jsx
   |__ MoodCreate.jsx
|__ InsightScreens/
   |__ InsightEdit.jsx
   |__ InsightCreate.jsx
   |__ InsightDetail.jsx
```

#### Component Breakdown

|       Component       |    Type    | state | props | Description                                                                                                                                             |
| :-------------------: | :--------: | :---: | :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
|        Header         | functional |   y   |   y   | _The header will contain the page name, current time and current user name and logout_                                                                  |
|    MoodsContainer     | functional |   y   |   n   | _Moods container will have all axios requests and pass them as props to other Mood components_                                                          |
|       MoodCard        | functional |   y   |   y   | _The card will render the Mood info via props._                                                                                                         |
|       MoodEdit        | functional |   y   |   y   | _will contain the form to edit a mood_                                                                                                                  |
|      MoodCreate       | functional |   y   |   y   | _will contain the form to create a mood_                                                                                                                |
| AffirmationsContainer | functional |   y   |   n   | _Affirmations container will have all axios requests and pass them as props to other affirmation components_                                            |
|   AffirmationsCard    | functional |   y   |   y   | _The cards will render the affirmation info via props._                                                                                                 |
|   AffirmationDetail   | functional |   y   |   y   | _AffirmationDetail will render the affirmation content text and have links to edit or delete one_                                                       |
|   AffirmationCreate   | functional |   y   |   y   | _AffirmationCreate will have the form to submit text content and create an affirmation_                                                                 |
|    AffirmationEdit    | functional |   y   |   y   | _AffirmationEdit will have the input field to edit an affirmation and a submit button_                                                                  |
|   InsightsContainer   | functional |   y   |   n   | _Insights container will have all axios requests and pass them as props to other insight components_                                                    |
|     InsightsCard      | functional |   y   |   y   | _The cards will render the insight post info via props._                                                                                                |
|     InsightCreate     | functional |   y   |   y   | _InsightCreate will have the form with the input fields to create an insight_                                                                           |
|      InsightEdit      | functional |   y   |   y   | _InsightEdit will have the form with the input fields to edit an insight_                                                                               |
|     InsightDetail     | functional |   y   |   y   | _The InsightDetail screen will render the insight title, body and user name_                                                                            |
|  CurrentUserContext   | functional |   y   |   n   | _CurrentUserContext.jsx will contain the provider and context for current user to be used globally throughtout the app_                                 |
|         Home          | functional |   n   |   n   | _The Home screen will include all the logged moods and affirmations_                                                                                    |
|       Community       | functional |   n   |   n   | _The Community screen will include all insights made by users and the option to edit or delete an insight_                                              |
|         More          | functional |   y   |   y   | _The More page will comtain current user info such as name email and password (will be editable as postmvp feature, and will have a dark mode switcher_ |
|        Footer         | functional |   y   |   n   | _The footer will contain the links to the pages_                                                                                                        |
|        Header         | functional |   y   |   y   | _The header will contain the logged in user name, page name, and current time_                                                                          |

#### Time Estimates

| Task                                                    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Insight, Affirmations, Moods, CRUD Actions in BE |    H     |     4 hrs      |    30 min     |     TBD     |
| Create Symptoms BE CRUD                                 |    L     |      1hr       |     20min     |     TBD     |
| Create Authentication in BE                             |    H     |      2hrs      |     10min     |     TBD     |
| Create Layout                                           |    M     |      3hrs      |     30min     |     TBD     |
| Create FE Authentication                                |    H     |      3hrs      |      1hr      |     TBD     |
| Create Insight FE-CRUD                                  |    H     |      3hrs      |     2hrs      |     TBD     |
| Create Mood FE-CRUD                                     |    H     |      3hrs      |     4hrs      |     TBD     |
| Create Affirmation FE-CRUD                              |    M     |      3hrs      |     2hrs      |     TBD     |
| Create Symptom FE-CRUD                                  |    L     |      2hrs      |     2hrs      |             |
| Create Home Page                                        |    H     |      2hrs      |     30min     |     TBD     |
| Create Register Page                                    |    H     |      2hrs      |     30min     |     TBD     |
| Styling                                                 |    M     |     10 hrs     |     7hrs      |     TBD     |
| Create Sign-in Page                                     |    H     |      2hrs      |    2.5hrs     |     TBD     |
| Create Insights Page                                    |    H     |      2hr       |     30min     |     TBD     |
| Create Settings Page                                    |    L     |      1hr       |     2hrs      |     TBD     |
| Create, refactor and debug Dark Mode                    |    L     |      1hr       |     3hrs      |     TBD     |
| TOTAL                                                   |          |     44hrs      |     26hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD Model Link](https://drive.google.com/file/d/16G7t1UU_fHARCdY8dVpV2eJWvtP0pbsW/view?usp=sharing)

![ERD Model](https://i.imgur.com/oSjIIuY.png)
<br>

---

## Post-MVP

- dark mode, the user will be able to switch between light mode and dark mode.
- symptoms, the user will be able to add, edit and delete symtpoms.
- password confirm on register: you will need to confirm your password to create your account.
- likes, be able to like an insight.
- whitelist, if a user enters a link that is not in a whitelist, bring him to a "404 Not found" page

---

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## ratingLogic.js

> this file is responsible for rendering the amount of rating icons depending the value of the rating from 1-5, (for example: when you rate your food in the app)

- We fill the array with icons and iconParam is one individual icon
- for example: console.log(Array(5).fill())

  > => [undefined, undefined, undefined, undefined, undefined]

- We are calling the map function to loop, we are not bothered about whats actually inside the array.
- for example: console.log(Array(5).fill().map(() => '⭐')) (in this case, the icon paramter is the star emoji.)
  > => ['⭐', '⭐', '⭐', '⭐', '⭐']

```
export default function ratingLogic(ratingParam, iconParam) {
  return Array(ratingParam)
    .fill()
    .map(() => (
      <span role="img" aria-label="rating">
        {iconParam}
      </span>
    ));
}
```

- Then I import it into FoodCard.jsx(or any file I want to use it in the future) and use the paramaters like this:
- The reason I decided to give the icon a paramter is because maybe one time I want to do a different icon that isn't a star for something else

> This is how I export it and put it in the JSX

```
 <div className="rating">{ratingLogic(food.rating, "⭐")}</div>
```

## FAQ

> Why did you decide to have dark mode on by default, don't most apps have dark mode off by default?

- Reason 1: I did a survey asking about 30 people if they'd prefer dark mode on or off by default, dark mode had a lead of about 80%.
- Reason 2: Most people just turn darkmode on the moment they turn on any app, that includes me, I do that all the time, light mode just makes my eyes hurt, not only that but I also use a blue-light filter.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

## Maintenance Mode

- If backend somehow doesn't work when deployed (maintenance mode, shut off, etc) we need a way to handle that because:
  this whole app is personalized around the user, if you can't sign in to a backend, you can't log your mood, medications, food, you can't create insights, edit, etc.

> how did I handle it?

- I created a handle maintenance mode function:

```
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function HandleMaintenance({ currentUser }) {
  const history = useHistory();

  useEffect(() => {
    setTimeout(function () {
      if (!currentUser) {
        alert("We're under a maintenance!");
        history.push("/maintenance");
      }
    }, 1000);
  }, [history, currentUser]);
  return null;
}
```

> the app forces the person to /login if he's not signed in (on purpose, it's a account only app), however, if the backend doesn't work:

1. he won't be able to sign in.
2. the front-end won't push him to '/login' and will keep him at '/' (homepage)
3. and the loading bar will keep going on forever.
4. the front-end won't be able to get his data which means: <bold>we can use if user is logged in as the condition</bold>

> if (!currentUser) means if we don't have a logged in user, if we don't, wait 1000 milliseconds, and if the 1000 milliseconds pass and we still don't have a logged in user we can confirm the back-end is on "maintenance mode", which means the user will be alerted that we're on maintenance mode, and pushed into a maintenance screen, where he'll me welcomed with a nice "Sorry, we're on maintenance mode, try again later!"
