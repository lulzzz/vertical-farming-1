/*

 Created by Alexander Lerma

 Please note that this file was created using the build.particle.io ide which handles dependencies.

 The http library for Arduino's can't post to https, so I used particle.io webhooks which relay the

 POST requests to the vertical farming server. The webhook then sends back the servers response.

 This .ino file was created simply to demonstrate functional sensor readings and fill up the mongodb

 database on the server.

*/

#include <Adafruit_DHT.h>

#define DHTPIN 2     // what pin we're connected to
#define DHTTYPE DHT22		// DHT22 temperature/ph sensor

static const char *ROOM = "room";
static const char *RACK = "rack";
static const char *TEMP_NAME = "temp";
static const char *TEMP_TYPE = "temperature";
static const char *HUMIDITY_NAME = "humidity";
static const char *HUMIDITY_TYPE = "humidity";
static const char *PH_NAME = "ph";
static const char *PH_TYPE = "ph";


DHT dht(DHTPIN, DHTTYPE);

//subscribe to temperature , humidity, and ph webhooks, begin reading dht sensor
void setup() {
    Serial.begin(9600);
    Particle.subscribe("hook-response/temperature", response_handler, MY_DEVICES);
    Particle.subscribe("hook-response/humidity", response_handler, MY_DEVICES);
    Particle.subscribe("hook-response/ph", response_handler, MY_DEVICES);
    dht.begin();
}

//print responses from vertical farming REST service.
void response_handler(const char *event, const char *data) {
    Serial.print("Receieved Response from server: ");
    Serial.println(event);
    Serial.println(data);
}

int i, j, k;
float t, h, ph;
String temp_json, humidity_json, ph_json;
void loop(){

    //lets fill up the db with data for 9 rooms, 9 racks, 9 of each sensor per rack
    i = rand() % 10;      // returns a pseudo-random integer between 0 and RAND_MAX
    j = rand() % 10;
    k = rand() % 10;

    t = dht.getTempCelcius();
    h = dht.getHumidity();
    ph = rand() % 15; // ph scale ranges from 0 to 14

    Serial.print("Temperature in celcius: ");
    Serial.println(t);

    //temperature JSON
    temp_json = String::format(
        "{\"room\":\"%s%d\", \"rack\":\"%s%d\" , \"name\": \"%s%d\", \"data\": %f,  \"type\": \"%s\" }",
        ROOM, i, RACK, j, TEMP_NAME, k, t, TEMP_TYPE);

    Serial.print("Humidity: ");
    Serial.println(h);

    humidity_json = String::format(
        "{\"room\":\"%s%d\", \"rack\":\"%s%d\" , \"name\": \"%s%d\", \"data\": %f,  \"type\": \"%s\" }",
        ROOM, i, RACK, j, HUMIDITY_NAME, k, h, HUMIDITY_TYPE);

    Serial.print("Ph (Current a random number): ");
    Serial.println(ph);

    ph_json = String::format(
        "{\"room\":\"%s%d\", \"rack\":\"%s%d\" , \"name\": \"%s%d\", \"data\": %f,  \"type\": \"%s\" }",
        ROOM, i, RACK, j, PH_NAME, k, ph, PH_TYPE);

    Particle.publish("temperature", temp_json, PRIVATE);
    Particle.publish("humidity", humidity_json, PRIVATE);
    Particle.publish("ph", ph_json, PRIVATE);


    delay(30000); //wait 30 seconds to send more data to server
}
