# Issue_Traker

It's a issue traker application built using nodejs and mongodb.

## How to setup the project on local system
  1. Clone this project
  2. Add the .env file and add uri variable and value will be database connection string.
  3. Start by installing npm if you don't have it already.
  4. Navigate to Project Directory and run the following the command, After that visit in your local browser- http://localhost:3000/
   ````
        npm install 
        node index.js
   ````

## Features
  
  ### Home Page 
  A list of projects will be displayed.A button will be provided to create a new project. Upon the creation of a new project, it will be added to the list.

  ### Create Project Page
  The following fields will be accepted to create a project:
   Name
   Description
   Author

  ### Project Details Page
  Upon clicking on a project on the home page, the user will be redirected to the Project Detail Page, where they will be able to view bugs related to that project. The following actions can be performed by the user on this page:

   Multiple labels can be filtered by (i.e., the user can filter by 2 or more labels simultaneously).
   Filtering by author is possible.
   Title and description can be searched by.
   A button will be provided to create an issue.

   ### Create Issue Page
   The user will be able to create an issue for a project on the Create Issue Page. The following fields will be accepted:

   Title
   Description
   Author
