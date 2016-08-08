># profile-maker
>A profile maker where you can create and make edits to your profile picture, name, and description. Create one ...or many!


###Project Setup Instructions

#####Install Dependencies

* __`npm install`__


#####If you do not have webpack installed _globally_

* __`npm install webpack -g`__
* __`npm install webpack-dev-server -g`__


####Postgres Database setup

#####If you do not have PostgreSQL and/or Knex.js installed _globally_:

1. Install Homebrew  - follow this link for info on how to do that: [Homebrew website](brew.sh)

2. Install Postgres __`brew install postgresql`__

3. In your home directory (ie. __` /~`__), initialize new database: __`initdb /usr/local/var/postgres -E utf8`__

3. In the root directory of this project (ie. __`/profile-maker`__), initialize a new database for this project: __`initdb profile_maker`__

4. You now need to start Postgres:
  * if you want to keep a log file: __`pg_ctl -D profile_maker -l logfile start`__

  * if you want to see the log file in real time: __`postgres -D profile_maker`__

5. In a _new_ terminal tab, navigate back to the project folder and create the database: __`createdb profile_maker`__

5. Migrate your schemas: __`knex migrate:latest`__

6. Seed the schema with some initial data: __`knex seed:run`__

__Note:__ to stop running Postgres (when you are done coding) enter this command: __`pg_ctl -D profile_maker stop -s -m fast`__



####Start up the project

__`npm start`__

Open browser window at:
__`http://localhost:4000`__
