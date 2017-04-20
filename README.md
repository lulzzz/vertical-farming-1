# Vertical Farming

### About

The vertical farming source code consists of two separate packages.

* verticalfarming-server
* verticalfarming-webapp

The packages are two separate projects. 

Each project must run independently as its own process.

Each project requires you to have node.js and npm installed.

You can get them both using [the Node.js Installer located here](https://nodejs.org/en/).

### Server

##### Technologies

* Node.js 
* Typescript (statically typed JavaScript)
* Express (Web Framework)
* MongoDB (Database)
* InversifyJS (Dependency Injection)

##### How to run locally

To start the vertical farming server

`cd ./verticalfarming-server`

`npm install`

`npm start`

You should see which port the server is running on and get a message that says 
if the server connected to Mongodb


##### What is it?
A RESTful webserver that allows the vertical farm to store sensor data such as temperatures and ph levels. 

##### What this means?
The server can accept data from ph and temperature sensors. The data can be sent from any internet of things (IOT)
device with the ability of posting (POST) data.

A client can create a json object that specifies the objects name, room, rack, type, and data.

E.g. To create and store a temperature object to store in the verticalfarming server's database, a client would need to 
POST to verticalfarming.herokuapp.com/temperature

`temp = {"name": "temp1", "room": "room1", "rack": "rack1", "data": 90.4, "type": "temperature"}`

After posting the data, a GET call to verticalfarming.herokuapp.com/temperature would include the newly posted object.

Do the same thing for ph sensors but replace temperature with ph in the url and for the object's type property. 

E.g.

POST to verticalfarming.herokuapp.com/ph

`ph = {"name": "ph1", "room": "room1", "rack": "rack1", "data": 7.2, "type": "ph"}`


##### Search

The Server can also search for sensors using full text search. This is a feature of MongoDB (database) that was enabled for 
this project. 

A query is simply a string. MongoDB uses a Regex search to find matching text using the supplied query string. 

Each Sensor can be searched by name, room, rack, and type.

A client must use a GET request to verticalfarming.herokuapp.com/search?query=`something`

where `something` can be any query you want to look for.

E.g. lets say a client want to search for `om2`

`GET verticalfarming.herokuapp.com/search?query=om2`

this would return all sensors where any field matches om2. Something like {... room: 'room2'} would be matching sensor.

You can also create a time interval that returns all results between two dates like so:

`GET https://verticalfarming.herokuapp.com/search?query=tem&start=2017-04-19T22:34:52.342Z&end=2017-04-19T22:34:52.342Z`

Notice the & separating the search criteria.

`start` and `end` both must be valid js Date objects in JSON.stringified() form.

### Webapp

##### Technologies
* Angular 2 (Web Framework and Dependency Injection)
* Typescript (Statically typed JavaScript)
* Bootstrap 4 (Web framework for responsive design)
* Express (Server for the webapp)

##### How to run locally

To start the vertical farming webapp

`cd ./verticalfarming-webapp`

`npm install`

`npm start`

You should see which port the webapp is using.

##### What is it? 

An Angular 2 Webapp that instantly searches for rooms, racks, and sensors. 

##### What this means?

When you type something in the search bar, a request is immediately sent to the server (talked about above). 

A search is simply a string query gets sent to the server which returns any matching sensor objects. 

This is done by sending a GET request. 

E.g. for a search with term hello

`GET  verticalfarming.herokucapp.com/query=hello`

will get all results that match hello.

The results are grouped into the following format: 

rooms -> racks -> sensors

Each room contains multiple racks, each rack contains multiple sensors (e.g. ph, temperature, humidity). 

For each rack, a sensor name is displayed with a button to reveal a chart of the selected data.
