# Next Amazon

## API Setup

### 1. npm install
    Before anything cd into the api folder and run the command:
        "npm i"

### 2. Create user in database 
    Start by opening laragon starting and right clicking Databse at the bottom of the screen
    hover over MySQL and select heidiSQL. Once inside heidi find the option Manage user Authentication 
    and privliges. Once inside add a new user to the window, set a password for the user and then click on the 
    Global privileges button before saving the new user. Once the new user is created us the query below in heidiSQL:
        ALTER USER 'USER'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
    Before running the Alter query aboce replace USER and PASSWORD with the information from the user just created.
![Add User Image](http://url/to/img.png)
![Add User Image](http://url/to/img.png)

### 3. Fill in api credentials
    Once the database user has bein created the user info must be used to fill in the api Credentials. Tere are two places this must be done. First is in the Schema.js file and also in all of the routes that use a connection to the database EX:
    
![Add User Image](http://url/to/img.png)
![Add User Image](http://url/to/img.png)

### 4. Generate nextamazon database and tables
    Now that Schema.js is updated with valid credentials lets run schema with the command: 
        "node schema.js"
    This javascript file will create the required DB and tables in order to use this api.
    
### 5. Run API
    Now that the database and tables have bein created we can now start the api. With laragon running, in a 
    command terminal cd into the api directory and use the following command to start the api:
        "npm start"
        
