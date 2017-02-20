/**
 * Created by alexanderlerma on 2/19/17.
 */
/**
 * Created by alexanderlerma on 2/15/17.
 */
"use strict";
const PhBusiness = require("../business/PhBusiness");
class PhController {
    constructor() {
    }
    create(req, res) {
        try {
            let Ph = req.body;
            let phBusiness = new PhBusiness();
            phBusiness.create(Ph, (error, result) => {
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
    update(req, res) {
        try {
            let Ph = req.body;
            let sensorId = req.params._id;
            let phBusiness = new PhBusiness();
            phBusiness.update(sensorId, Ph, (error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.delete(_id, (error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.retrieve((error, result) => {
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
            let phBusiness = new PhBusiness();
            phBusiness.findById(_id, (error, result) => {
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
module.exports = PhController;
