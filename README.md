# RD-FrontEnd

## Home Task - React Assignment- Session 6.2

## E-Commerce

Create a simple e-commerce website using React v16 above and Redux. For UI design 
reference please check the images below. The website should be responsive and should 
work in all device resolutions, though you can use your own creativity for the responsive UI 
design. Follow all best practices and standards.

### Points to consider:

• The Home screen should have minimum 20 books.
• Each book will have its Detail page and a Buy Now or Add to Cart Button.
• The Detail page of the item will have its picture, price, and features.
• Buy Now will quickly take the user to the Checkout screen while the Add to Cart Button will store the Book in the Shopping Cart.
• At the Checkout screen, the user can review the billing information and the list of items in the cart.
• A My Orders screen which will list all the books the user has bought till date.
• Unit test cases are a bonus point

### Tools which are highly recommended:

• JSON Server to mock book data.
• Typescript
• React Router
• Redux
• Redux Saga

#### Implementation Details:

The task has been done using vite configuration.
1. Command to create a react typescript app using vite:
---- npm create vite@latest task-books --template typescript
2. change directory:
---- cd task-books
3. install all the npm packages
---- npm install
4. "db.json" file have a mock data of 20 books-details
5. Install a json-server package to have a local server for the db.json
---- npm i json-server
6. Now run the json script written on scripts in package.json to start the json server in another terminal.(this json-server should always be running while using the app).
---- "json":"json-server --watch src/db.json --port 9000"
---- npm run json
7. Now the data can be accessed with the url (https://localhost:9000)
8. We can now run the app and start using with the command:
---- npm run dev

