# MASA Market

# description

A lot of e-commerce pages are published recently in Gaza especially on Facebook and Instagram, without the existence of a website which makes shopping is a tedious work for customer and buyer, we are going to introduce our app to help both customers and sellers. the website will represent who the seller is and what he does and make an impression on his customers and form a competitive advantage within the increasing competition between online shops. It will be much easier for the buyers to have a place to display the list of orders and all the needed details instead of communication on private messages like they do in social media, As well as for customers, it is a better user experience to display the products and all the details with prices and easily make orders.


## Application Setup :mag:

- clone this repo 
`git clone https://github.com/GSG-G9/MASA-Store.git`

- run `npm i  && cd client npm i `  to install all dependencies & dev-dependencies for the server and clinet(react-app) .

- add .env file that contains SECRET_KEY as Environmental Variable and PostgreSQL URLs for your database. 


##### Environment Variables
Environment variables are one of the ways that we use to keep our product safe. If you want to access our app locally you will need to add your own.

First, create a **.env** file and add the following variables:

```
SECRET_KEY='add your secret key here'
```

##### Database Setup

- If you don't install PostgreSQL yet in your machine follow [this link](https://github.com/coding-wiki/learn-sql/tree/master/postgresql/installation).
- then create two databases locally one for testing and one for development for more help follow [this link](https://github.com/foundersandcoders/sql-commands-intro).
- now add your newly created database to the .env file
  ```
  DB_DEV_URL=postgres://{userName}:{password}@localhost:5432/{databaseName}
  DB_TEST_URL=postgres://{userName}:{password}@localhost:5432/{databaseName}
  ```

- Now in the Terminal types `psql YourdataBaseUrl` and then type `\i server/database/data/build.sql` and finally type  `\i server/database/data/fakeData.sql`

##### Run the Project

- In terminal access to project folder on your machine write: `npm run dev` to start the server and in another terminal type `npm run client` to run the react app


### The Problem Statement:

- Using social media to sell products is not the best way for managing orders, the CLIENT/SELLER needs a more efficient way to manage purchase orders to minimize time and effort, also to improve the user experience of the buyers.

### The Solution :

- Make a website dedicated to e-commerce with a good UX/UI.
- According to the problem statement, the client wants to save his time and effort, this can be achieved by creating a web app to help the client organize his time and purchase orders, obtain statistical data on the products and purchase orders, and convert all operations from manual to automatic.

### User Journey :

- In this project, we have two clients so we will describe that as seller, and buyer(customer)

#### "As a buyer:"

- I can easily find a product and buy it.

#### "As a seller"

- I can see all the important activities on the website, I can add a product to the site.

### User Stories :

##### As a seller :

- I want to view all my products.
- I want to delete or edit any product.
- I want a button to allow me to add the details of a new product then add the product to my products
- I want to see all the details of the buyers who ordered my products and the products they ordered and when.
- I want to see statics about the orders.

##### As a buyer/customer :

- I want to be able to register and create my account.
- I want to be able to log in to my account.
- I want to be able to see my profile.
- I want to see all the available categories.
- I want to have a wish list to add the items I want to buy later.
- I want to be able to select any product and obtain more details about it.
- I want to combine all my orders in one place like a cart to purchase all orders at once.
- I want to see my cart and all the added product with some details.
- I want to see the total price of the products in the cart.
- I want to see a button for placing an order.
- I want to be able to add a shipping address with clear details.
- I want to be able to add payment details with many options.

### Application Deployment :sparkles:

we will use `Heroku` Platform to deploy our website.

### Database Schema :file_cabinet:

![schema](https://cdn.discordapp.com/attachments/803011551418122266/806090190359232542/Untitled_2.png)
[schema link](https://dbdiagram.io/embed/6016a66780d742080a3886d8)

### Technologies :computer:

#### Frontend

- React JS
- React Hooks
- Material-UI
- Javascript
- HTML and CSS

#### Backend

- Express JS

#### Database

- PostgreSQL

### Stretch Goal :

- add more than one seller
- add the shipping option to the customers.
- making the login/ sign-up the last step needed to buy any product, allowing the user to use the app freely as much as possible.
- adding basic AI to guess what the user is searching for using his search history.
- using google analytics to know the number of visitors number and the most wanted product.
- creating a user center to help the users in need.
- I want to be able to add a rating for any product.
- Add product variant if exist.
