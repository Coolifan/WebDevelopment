#Databases

##Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface
* SQL(relational) vs. NoSQL(non-relational)


#Intro to MongoDB
* What is MongoDB? 
* Why are we using it?
* Let's install it!

#Our First Mongo Commands
* mongod: starts the deamon
* mongo: opens the shell
* help
* show dbs: shows all the dbs
* use: use/create a db
* insert:create something, eg: db.dogs.insert({name: "Rusty", breed: "Mutt"})
* find:retrieve something, eg: db.dogs.find({name: "Rusty"})
* update: db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
* remove: db.dogs.remove({breed: "Labradoodle"})
CRUD: create, read, update, delete

#Mongoose
* What Is Mongoose?
* Why are we using it?
* Interact with a Mongo database using Mongoose