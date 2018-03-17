#RESTful Routing

##Introduction
* Define REST(Representational State Transfer) and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

Name        Path            HTTP verb          Purpose
=============================================================
Index       /dogs           GET             List all dogs
New         /dogs/new       GET             Show new dog form
Create      /dogs           POST            Create a new dog, then redirect somewhere
Show        /dogs/:id       GET             Show info about one specific dog
Edit        /dogs/:id/edit  GET             Show edit form for one dog
Update      /dogs/:id       PUT             Update a particular dog, then redirect somewhere
Destroy     /dogs/:id       DELETE          Delete a particular dog, then redirect somewhere


#Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

#Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

#Putting the C in CURD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

#SHOWtime
* Add SHOW route
* Add SHOW template
* Add links to show page
* Style SHOW template

#EDIT / UPDATE
* Add EDIT route
* Add EDIT form
* Add UPDATE route
* Add UPDATE form
* Add Method-Override

#DESTROY
* Add DESTROY route
* Add EDIT and DESTROY links

#Final updates
* Sanitize blog body
* Style Index
* Update REST Table