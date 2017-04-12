#Vertical Farming

###Server

#####What is it?
A RESTful webserver that allows the vertical farm to store sensor data such as temperatures and ph levels. 

#####What this means?
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






