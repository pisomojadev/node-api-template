# node-api-template

## Version
0.1.0

## Author
Nicholas Davis (nbdavis.stl@gmail.com)

## Description
This is a boilerplate aimed to provide a quick nodejs-backed service layer over most traditional databases.  Obviously each db, route, and controller will need to be configured but overall this should save substantial time when trying to develop api-driven analytics and applications.

## Development
To use this boilerplate:
- add proper db cofigurations to the express and credential configuration files
- add routes and map them to relevant controllers, models to taste
- for best results, deploy on PaaS like CloudFoundry or Heroku, but can easily be ran in any kind of normal nodejs webserver configuration.