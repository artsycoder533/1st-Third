# 1st & Third

1st & Third is an multi-page React E-Commerce website where the user can browse and filter products pulled from the Fake Store API based on category, price, and customer rating.  Coming Soon:  Add to cart and shopping cart functionality.

## Table of Concepts

- [Overview](#overview)
    - [Images](#images)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [Challenges](#challenges)
    - [What I learned](#What-i-learned)
    - [Continued Development](#continued-development)
    - [Instructions](#instructions)
- [Author](#author)

## Overview

### Images

### Links

- Repository URL: [https://github.com/artsycoder533/1st-Third.git](https://github.com/artsycoder533/1st-Third.git)
- Live Site: []()

## My Process

To start the project I first thought about the different pieces I would need to make up the site.  I setup the file structure and added seperate folders for components, images, pages, and utilities.  I installed React Router v6, Styled Components, React Icons.  I first setup the Hero Section and then moved to the Hero.

### Built With

- React
- Styled Components
- React Router v6
- Context API
- Hooks

### Challenges

- Problem: How to add a background image using styled components?

    - Solution: In my style.js file I had to add the following line:

    ```
        import Img from '../../images/heroDesktop.jpg';
    ```
    Then inside of the container where I wanted to add the background image I had to add the following line:

    ```
        background-image: url(${Img});
    ```

- Problem:  Where should I hold the state for the hamburger button?

    - Solution:  I decided to hold the state in Header Component because it is the most common parent for both the Navbar and Hamburger components.  I use props with styled components so I needed both components to have access to the state.

- Problem:  How to get the mobile menu to close after clicking on a link?

    - Solution:  I added an onClick handler to the NavLink that toggled the state as if the hamburger button had been clicked.

- Problem:  How do you navigate to a single product page when you click on a product on the shop page?

    - Solution: Import the useParams Hook from React Router Dom so that we can create a dynamic route based on the products id.

    - Resources: [https://www.youtube.com/playlist?list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG)

- Problem:  How do you style the active page link?

    - Solution:  React Router has the NavLink which acts like Link, however this NavLink comes with an active class by default.  By giving the active class styling this class is automatically applied when you click on the corresponding NavLink.  Since I used StyledComponents, I figured out that to target the active class I could nest the styling for the active class inside of the StyledNavLink components.  To do this you i used the following code:

    ```
     &.active {
        text-decoration: underline;
        color: #800020;
    }
    ```

- Problem: How to handle multiple checkboxes?

    - Solution: To start, I gave all of the checkboxes in group the same name attribute.  I saved the checked state in an array and kept track of each individual checkbox but its index.  I used controlled inputs, so when a user clicks on a checkbox the value and the same index as the checkbox in the isChecked array is toggled.  

- Problem: How do you implement a filter with multiple conditions?

    - Solution:  To start any category that would need to be filtered with multiple conditions I used a checkbox.  I created a second array for each category that held only the values that corresponded to checkboxes that had been checked.  If a user deselects a checkbox I then search the array of selected values for that specific value and filter out and values that are equal to it.  As a result the the products displayed update based on only those that meet the criteria of selected filters.  To implement the filter functionality, I used a nested filter method on the original array of products.  The nested filter acts as a loop to iterate over the array of selected values and returns only those products who meet the criteria inside of the callback in the nested filter method.

- Problem:  When I deployed to github the base url of my site was incorrect.

    - Solution:  I discovered that GitHub pages behaves differently when the root url of your website contains a backslash follwed by more characters

    Ex: https://artsycoder533.github.io/1st-Third/  vs https://artsycoder533.github.io

    My initial issue was when the page loaded you would only see a blank white screen.  When you reloaded the page or clicked on any of the navigation links the url would change from https://artsycoder533.github.io/1st-Third/ to only https://artsycoder533.github.io which was incorrect.  I found out that React Router has a HashRouter made for this specific purpose.  When you site url goes beyong just the base HashRouter maintains the url structure.  I had to replace BrowserRouter with HashRouter and this fixed my issue.

### What I learned

- When you import an image using styled components the name you chose has to start with a capital letter, I noticed I received errors if it was lowercase.
- How to implement the Context API
- How to use React Router v6
- How to use useReducer instead of useState
- React Router has a HashRouter for urls that go beyond the base
- How to display product rating stars with React Icons using Array.from

### Continued Development

### Instructions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

- Personal Portfolio: [https://natashajohnson.dev/](https://natashajohnson.dev/)