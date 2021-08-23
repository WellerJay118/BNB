## BNB - Beds in Basements, a React and Redux project based on AirBnB

[Hosted Live on Heroku](https://bnb-live.herokuapp.com/)

### Technologies Used:
* JavaScript
* PostgreSQL
* Sequelize
* Express.js
* Node.js
* React
* Redux
* CSS(no libraries, extensions, or bootstrapping)

### Running Locally
* Make certain you have Node.js and PostgreSQL installed and up to date and that port 5000 in clear to be used for this process.
* Clone the repo from : `https://github.com/WellerJay118/BNB.git`
* Install all dependencies by using `cd` to get into the directory and `npm install` to install the directories.
* Create an `.env` file in the root of the `backend` folder using the `.env.example` as a template. Remember to remove the `<<` and `>>`.
* Seed files are included to start, run the following commands to Create, Migrate, and Seed the database:
  * `npx dotenv sequlize-cli db:create`
  * `npx dotenv sequelize-cli db:migrate`
  * `npx dotenv sequelize-cli db:seed:all`
* Start both `backend` and `frontend` servers using the `npm start` command while in their respective folders. This may take a moment before opening a new web browser.

### Future features and planned implementation
* User profiles that allow access to all of that User's bookings, reviews, editable information, etc. This will require a Database update.
* Working Spot Search implementation that autopopulates/autofills suggestion.
* AWS Image upload, drag and drop.
* Google Maps API implementation.
* Fully useable `Booking` CRUD capabilities.
* Additional styling once access to more 
