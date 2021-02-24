# Lab - 07: Bearer Authentication

## Overview

In this phase, the new requirement is that any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate … using a “token”

## Author: William Moreno

## Collaboration

- Carly Dekock
- James Gerstenberger
- Jason Dormier
- Jason Quaglia
- Nick Magruder
- Seid Mohammed

## Deployment

The app is deployed on Heroku at the following link:

- [Bearer-Auth](https://wmoreno-bearer-auth.herokuapp.com/)

## Dependencies

Requires an .env file with the following values:

PORT=
MONGODB_URI=mongodb+srv://bill_moreno:pr4ct1c3@cluster0.oeetc.mongodb.net/bearerAuth?retryWrites=true&w=majority
SECRET=DoWahDitty

## Daily Pull Request

Work was accomplished on the `dev` branch. The pull request to merge the code into the `main` branch is here:

- [Pull Request](https://github.com/William-Moreno/api-server/pull/1)

Working features implemented:
- Debugged existing code base which now passes all tests
- POST route for both `'/signup'` and `'/signin'` has basic authorization and sends the proper status code and object
- GET routes to `'/secret'` and `'/users'` send authorization headers with bearer tokens
- Implemented tokens that expire 15 minutes after being issued

## Tests

Test suite pregenerated and supplied:


  - All tests successfully passed.

## UML

UML drawing created with [miro](https://miro.com/)

![UML Diagram](./assets/lab-07-uml.PNG)