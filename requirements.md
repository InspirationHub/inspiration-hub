
# Software Requirements

## Vision

*What is the vision of this product?*

Design an online bulletin/white board to store inspirational quotes and empower users to achieve their aspirations.

*What pain point does this project solve?*

People write inspirational quotes on white boards and create vision boards as a tool for motivation. Our web
application brings this concept into the 21st century.
You'll never have to buy a dry-erase marker again!

*Why should we care about your product?*

In the modern era, everything is online. Thanks to our web application, so is your inspiration board!
By using our online tool, you're also reducing your carbon footprint.
All of those used markers and eventually the white board itself probably would have ended up in a landfill.

## Scope (In/Out)

### IN - What will your product do

*Describe the individual features that your product will do.*
*High overview of each. Only need to list 4-5*

* The web application will provide users with information about the development team and the inspiration behind 
the inspiration!

* The web app will allow users to store inspirational quotes.

* The web app will allow users to organize their quotes on a digital board. 

* Users will be able to remove quotes from their board.

* The web application will store removed quotes in an archive.

### OUT - What will your product not do?

*These should be features that you will make very clear from the beginning that you will not do during* 
*development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things.* 

Our web application will not be used for negativity!

## Minimum Viable Product

*What will your MVP functionality be?*

* Our MVP will be a four page web application made up of a home page, an about page, a page for the inspiration board, and an archive page.

* The landing page will introduce the app and allow to navigate between the pages using nav bar links and a call to action button.

* The about page will provide the user with information about the application and development team.

* The inspiration board page will have a form and the inspiration board.

* User will be able to add a new quote to the board using the form.

* User will be able to remove a quote from the board and it will be stored to the archive.

* The archive page will store all of the removed quotes.

*What are your stretch goals?*

* make quotes draggable

* add folder or trash bin on page to archive files by dragging and dropping

* make categories for content posted and be able to sort or render content by category

* generate random quote from archive and have it appear back on inspiration board page

* use an API to generate random quotes

## Stretch

*What stretch goals are you going to aim for?*

* make quotes draggable

* add folder or trash bin on page to archive files by dragging and dropping

## Functional Requirements

*List the functionality of your product.*

* An admin can create and delete user accounts

* A user can update their profile information

* A user can search all of the products in the inventory

## Data Flow

*Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app.*

* Get text data from form input and store it in the HTML content so it is rendered on the page.

* Store quote to localStorage.

* When a user removes an item from the board, get from localStorage and move it to another array and store back into local storage.

* Get quotes from local storage and have them render on the archive page
