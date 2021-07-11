 # Social Network API Routes ![badmath](https://img.shields.io/badge/license-MIT-blue)

  ## About/Description

  This project was to use Mongoose and MongoDB to create API routes for a social network. The routes all for the creation, deletion, changes to, and get one or all of users. This is done using CRUD routes.  Users can add friends which is a self reference to other userIDs.  Users can also create, delete, modify thoughts.  These thoughts can also be pulled by either all of one by an id.  Lastly, users can react to the thoughts and delete these reactions.  Mongoose allows reactions to be a subdocument of main thought document.  This project has no front end so everything is done with Insomnia or Postman to test.  

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  npm install will install all of the necessary node_modules listed in the package.json.  MongoDB is required to run the package.json items. The project should only need express and mongoose to run assuming MongoDB is install on the machine. 

  ## Usage

  Video Link of Application in Use:

  https://drive.google.com/file/d/1gwo2fB4hHMSLO-EUd_mBF4JTubNUElUu/view 

  ### Screenshots of Application In Use

  #### Post a new user
  
  <img width="1000" src="./utils/Images/POST _new_user.jpg" alt="post a new user">

  #### Get all users

  <img width="1000" src="./utils/Images/GET_all_ users.jpg" alt="get all users">

  #### Get a single user

  <img width="1000" src="./utils/Images/GET_single_user.png" alt="get a single user">

  #### Update a user

  <img width="1000" src="./utils/Images/PUT_user_update.png" alt="update a user">

  #### Delete a user

  <img width="1000" src="./utils/Images/DELETE_user.png" alt="delete a user">

  #### Post a new thought

  <img width="1000" src="./utils/Images/POST_thought.png" alt="add a thought">

  #### Get all thoughts

  <img width="1000" src="./utils/Images/GET_all_thoughts.png" alt="get all thoughts">

  #### Get a single thought

  <img width="1000" src="./utils/Images/GET_single_thought.png" alt="get a single thought">

  #### Update a thought

  <img width="1000" src="./utils/Images/PUT_update_thought.png" alt="update a thought">

  #### Delete a thought

  <img width="1000" src="./utils/Images/DELETE_thought.png" alt="delete a thought">

  #### Add a friend

  <img width="1000" src="./utils/Images/POST_add_friend.png" alt="add a friend to user friend array">

  #### Remove a friend

  <img width="1000" src="./utils/Images/DELETE_friend.png" alt="remove friend from friend array">

  #### Add a reaction

  <img width="1000" src="./utils/Images/POST_add_reaction.png" alt="add a reaction to a thought">

  #### remove reaction

  <img width="1000" src="./utils/Images/DELETE_remove_reaction.png" alt="remove reaction from thought reaction array">

  ## Languages

  JavaScript<br>ES6<br>Express.js<br>MongoDB<br>Mongoose

  ## Contributing

  Contributions by: David Shaw

  If you would like to contribute to this project we follow the [Contributor Covenant](https://www.contributor-covenant.org/)

  ## License

  https://choosealicense.com/licenses/mit/

  ## Tests

  none

  ## Questions:

  If you have any questions please contact us or refer to our github below:

  Email Us At: david.shaw1242@gmail.com

  Github Repo: https://github.com/ds1242/social-network-api