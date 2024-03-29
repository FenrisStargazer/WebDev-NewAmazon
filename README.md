
# Next Amazon

### Required Frameworks:

#### -- Node.js
#### -- Laragon

## Client Setup

### 1. Start up
Once having the local copy of the repo, start by poining the root Loragon folder to the repo folder named "WebDev-NewAmazon".

### 2. Select index.html 
Once openeing Laragon Web you will be presented with the links in the repo. Start by selecting the "client/" link, then traverse into "src/" link, once selecting the src link the website will render. Some elemetents may be missing from the website before setting up the API. After the API is setup refresh the page for any changes to appear.

## API Setup

### 1. Create user in database 
Start by opening laragon starting and right clicking Databse at the bottom of the screen
hover over MySQL and select heidiSQL. Once inside heidi find the option Manage user Authentication 
and privliges. Once inside add a new user to the window, set a password for the user and then click on the 
Global privileges button before saving the new user. Once the new user is created us the query below in heidiSQL:

        ALTER USER 'USER'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
        
Before running the Alter query aboce replace USER and PASSWORD with the information from the user just created.
![Add User Image](http://url/to/img.png)
![Add User Image](http://url/to/img.png)

### 2. Fill in api credentials
Once the database user has bein created the user info must be used to fill in the api Credentials. Tere are two places this must be done. First is in the Schema.js file and also in all of the 'db.config.js' file which will fill in the routes where needed. EX:
    
![Add User Image](http://url/to/img.png)
![Add User Image](http://url/to/img.png)

### 3. Generate nextamazon database and tables
Now that Schema.js is updated with valid credentials lets run schema with the command: 

        "node schema.js"
        
This javascript file will create the required DB and tables in order to use this api.
    
### 4. Run API
Now that the database and tables have bein created we can now start the api. With laragon running, in a 
command terminal cd into the api directory and use the following command to start the api:

        "npm start"
        
