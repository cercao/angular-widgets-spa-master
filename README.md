# angular-widgets-spa-master
Simple angular application using rest API 

# Dependencies
- npm ^2.15

# Instructions
- Clone the repository;
- Install dependencies with npm install:
```sh
$ npm install
```
- Run the application 
```sh
$ node app.js // or nodemon app.js
```
- The app will start at port 3000

# Observations
- I changed a little the form template for widget editing; Now is following bootstrap patterns;
- When click to edit a widget, the app calls the getWidget to make sure that its available wet;
- I icluded a new form on User screen for view User details;

# Last Updates
- Included error handle in all services calls (with ternary expression)
- Included money mask in widget insert
- Included required validation of field Name
- Included node server
- Included favicon to avoid error that was happening at the start

## Thanks!

