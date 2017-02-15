/**
 * Created by alexanderlerma on 2/15/17.
 */
"use strict";
const TemperatureBusiness = require("../business/TemperatureBusiness");
class TemperatureController {
    constructor() {
    }
    create(req, res) {
        try {
            let Temperature = req.body;
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.create(Temperature, (error, result) => {
                if (error)
                    res.send({ "error": "error:: " + req.body.name });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) {
        try {
            let Temperature = req.body;
            let sensorId = req.params._id;
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.update(sensorId, Temperature, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) {
        try {
            let _id = req.params._id;
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.delete(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req, res) {
        try {
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.retrieve((error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            let _id = req.params._id;
            let temperatureBusiness = new TemperatureBusiness();
            temperatureBusiness.findById(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
module.exports = TemperatureController;
