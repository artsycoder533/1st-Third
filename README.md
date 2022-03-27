# 1st & Third

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

1st & Third is a React E-Commerce website where the user can browse and filter products pulled from the Fake Store API based on category, price, and customer rating, sort products based on price and item name, and add/update products in the cart. The user is then able to checkout by filling in their contact information in the checkout form with added form validation.  I utilized the Context API paired with reducers for global state management.

### Images

- ![Desktop](/src/images/desktop1.png)
- ![Desktop](/src/images/desktop2.png)
- ![Mobile](/src/images/mobile1.png)
- ![Mobile](/src/images/mobile2.png)

### Links

- Repository URL: [https://github.com/artsycoder533/1st-Third.git](https://github.com/artsycoder533/1st-Third.git)
- Live Site: [artsycoder533.github.io/1st-third/](artsycoder533.github.io/1st-third/)

## My Process

To start the project I first thought about the different pieces I would need to make up the site.  I setup the file structure and added seperate folders for components, images, pages, and utilities.  I installed React Router v6, Styled Components, React Icons.  I started with the Navbar component and then added the Hero/Home Page.  Next I added a Footer component since that was also going to be shown on every page. I realized I needed to utilize global state so I utilized the Context API pair with the useReducer hook to keep everything organized.  First, I created the Products Context so contain anything related to getting/manipulating the products from the Fake Store API. I also creaded a product reducer to contain only the functionality also pertaining to the products. The products would most likely need to be accessed everywhere so it is the outermost context.  Next, I created the Filter Context to contain anything needed to filter the products once theyve been received from the API and displayed on the Shop Page.  A user is able to filter the products by category, price and customer rating.  Since this will use the products heavily, this will be the second most nested context. I also added a filter reducer to contain only the funtionality of the filters. Last, I added the Cart Context to contain anything needed display/manipulate the products that have been added to the users cart.  A user is able to increase/decrease/remove products directly from the cart as well as clear the cart.  I also created a cart reducer to hold only the functionality to control the cart.  Last, I decided to hold the state variables for the Checkout Page inside that component, since it wouldnt be needed anywhere else.  The only variable that would be needed elsewhere is the email address to be shown on the confirmation page, so I added a function called saveEmail to the Cart Context that takes the email as a parameter and added to the state so it can be used later.  For the most part I tried to get the functionality working first then I went back and fine tuned the CSS and added little details that I had wrote down such as hover states, button styles, etc.

### Built With

- React
- Styled Components
- React Router v6
- Context API
- Hooks:
    - useState
    - useEffect
    - useContext
    - useReducer

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

I would like to learn about authentication and add a user login so that only logged in users can checkout.  I would also like to learn about backend development or Firebase so that a users cart can be saved and paired with their login so that when they decide to come back to the site, their cart is saved.

### Instructions

To run the project locally, you must clone the repository by clicking the green button that says "Code" and in the drop down click on "SSH" and copy the url below.  Open up your terminal and type:

 - git clone, then past the url and hit enter
 
 Navigate to the project directory:

 - cd firstn3rd, then cd firstn3rd one more time to get to the apropriate level

 Download the required dependencies by typing:

 - npm install

 To start the development server type:

 - npm start

To build the app in production mode type:

- npm build


## Author

- Personal Portfolio: [https://natashajohnson.dev/](https://natashajohnson.dev/)