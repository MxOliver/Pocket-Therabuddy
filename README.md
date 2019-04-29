# Pocket Thera-buddy
Mental health tool that can fit in your pocket. Includes mood and habit tracking, coping skill resources, exercises, and a customizable support contact list. 

Tech Stack: React, Redux, d3, Node, Express, Sequelize ORM (with postgreSQL)

---

## Try it Out!

Pocket Therabuddy is deployed on [heroku](https://pocket-therabuddy.herokuapp.com) feel free to sign up for an account and give it a try. 

If you would like to run it locally follow the set up instructions [here](#local-configuration) 

## POCKET THERABUDDY -- UPCOMING FEATURES + DEVELOPMENTS 

I have only completed the first sprint for this application so far, and there is much more to come. At the moment you can sign up for an account, add your daily moods, and view a d3 graph of your tracked moods over time. Keep in mind that it takes at least two points to form a line, so the more data you input over time the more you will get out of viewing your history. 

In the next sprint I will be adding in habit tracking. Similar to mood tracking this will allow you to track daily habits such as hours of sleep, time spent outside, and social interaction, as well as add custom habits that are important to you. You will then be able to see a graph of your habit history, as well as a combined visualization of your habit history and your mood history in order to recogniae relevant patterns.

Later upcoming features include:

- [ ] Coping Toolbox (Add methods/activities that calm or self-sooth you so you can access them easily when you need to remember them)

- [ ] Interactive CBT (Cognitive Behavioral Theraby) exercises -- Essentially a place to reframe and recognize negative or distorted thoughts 

## Local Configuration

1. Clone the responsitory to your local computer and cd into the directory

2. Run `npm install` from the root directory to install the back-end dependencies, then `cd` into the client directory and run `npm install` a second time to install the front-end dependencies. 

3. To configure the database `cd ..` back into the root directory and run `sequelize db:create` `sequelize db:migrate` in your terminal to initialize and configure the databae

4. In the root directory run `touch .env` in your terminal and enter a secret key of your choice for use in the express session like so:

```
cookieSecret=" <enter a string of your choice here> ";
```

5. Run `source .env` in your terminal (from the root directory) there will be no output from this command

6. Finally (from the root directory) run `npm run dev` to start the server + client side concurrently

You should see something like `server listening from requests on port 3001` this is the server starting up,
wait until the client is also running (this may take some time) you should see `Starting the development server...` in your terminal which will then automatically open the application in your web browser. 

Once you see something like:

```
compiled
```

in your terminal the application is fully up and running. 
