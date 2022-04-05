# Mission6-App

This was a coding project undertaken by our team of developers in compliance with the requirements of Mission Ready HQ in Auckland, New Zealand.

Our task was to develop a web application to implement the re-design of the website of a real estate rental property company based on the final prototype made by our ux designers.

The given criteria for building the app included:
- React app on the frontend
- MongoDB database on the backend
- Quick Sort function anywhere on the app using data from the database
- Containerize the app using a Docker and Docker compose.
- Git and Github for version control
- Agile methodology

The final tech stack used:
- React app on the frontend
- React-router-dom version 6 for routing
- Nodejs and Express on the backend
- MongoDB Atlas and Mongoose ODM for the database and modeling
- Vanilla css and react-bootstrap for styling
- Docker Desktop, Docker and Docker Compose for containerizing
- Git and Github for version control

The app has the following main functions:
- search for a house from the database using filters from user inputs and display the results on a webpage
- fetch the details of a single house from the database using the house id and display the results on a webpage
- get inputs from the user to book a view of a single property and save the details to the database and fetch back the details on a confirmation web page.
- apply the Quick Sort function to the display of the results of the search a house function.

To dockerize and run the app locally:
- set up Docker Desktop for your operating system; see https://docs.docker.com/desktop/
- git clone or git remote add the project repository to your desired folder on your local machine
- open the project folder on your desired code editor and create your own .env file with a valid MongoDB Atlas connection string, after creating a MongoDB Atlas account and a corresponding database collection.
- To test the backend, on your terminal, cd or go to the project backend folder and from there run $npm start. You should see a message saying MongoDB is connected. 
- Then put the houses data into the database collection by running $node seeder.js, then go to your MongoDB Atlas account and see that data has been uploaded into the collection. You can also see data served from the backend by going to a browser to see localhost:5000. 
- At this point, you can also run the frontend server by opening another terminal, cd or go to the project frontend folder and run $npm start. You should be able to interact with the app on the browser at localhost:3000. 
- close down all servers on the frontend and backend by run ^C twice on each terminal.
- In your code editor, you will also see:
  - a Dockerfile for the frontend folder
  - a Dockerfile for the backend folder
  - a Docker-compose file for the project root folder
- to containerize the app, open a new terminal on the project root and run $docker-compose up. This should run docker to make the images for the frontend and the backend and then run containers for each of them at the same time.
- open a browser to access localhost:3000 and you should be able to interact with the app just like before but this time running on containers.
- To stop and remove the containers, on the terminal at the project root, run $docker-compose down.

This project was a wonderful opportunity for our team to showcase our skills in developing a full stack web app in an Agile way.



