# How to

Run `npm install`

Provide the port in .env file, default is 3000

Run `nodemon` or `node app.js` or `npm start` to start the application

Import postman collection file named `Web scrapper.postman_collection`

Make the request to `http:\\localhost:3000\review` endpoint with json content in request body, in the `pageUrl` parameter provide tigerdirect.com page link, also send the `Content-Type` header as `application/json` it is important

![web_scrapper](https://user-images.githubusercontent.com/23162713/163856394-45bd44a8-1e59-4764-8d9c-21ecc5f12571.png)

# Project Structure

- app.js file is entry point of the application
- routes folder contains http routes
- `routes/review.js` file contains routes for `/review` path routes
- `controllers folder controllers which have functions to handle specific http requests
- `controller/review.js` file contains functions to handle endpoints that start with `/review` path
