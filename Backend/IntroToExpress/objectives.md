#Introduction to Express

* What is a framework? How is it different from a library?
    code someone else wrote that we can use in our application.
    The most important difference is Inversion of Control. When you call a library, you are in control.
But with a framework, the framework controls you. Basically, all the control flow is already in the framework,
and there's just a bunch of predefined white spots that you can fill out with your code.
A library on the other hand is a collection of functionality that you can call.
* What is Express?
    is a web development framework.
* Why are we using Express?
    widely-used framework, big community. 
    lightweight framework.


#Our First Express App!!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express App!


#NPM Init and Package.json

* Use the `--save` flag to install packages
    save to dependencies section of package.json
* Explain what the package.json file does
    contains a bunch of metadata about an app/package
* Use `npm init` to create a new package.json


#More Routing!

* Show the `*` route matcher
    match anything
* Write routes containing route parameters
    define a pattern in a route
* Discuss route order
    it matters! The first route that matches is the only route that will be run