"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by alexanderlerma on 2/15/17.
 */
const express = require("express");
const inversify_1 = require("inversify");
const service_1 = require("../../service");
const config_1 = require("../../config");
const inversify_express_utils_1 = require("inversify-express-utils");
let TemperatureController = class TemperatureController {
    constructor(temperatureService) {
        this.temperatureService = temperatureService;
    }
    create(req, res) {
        return new Promise((resolve, reject) => {
            let temperature = (req.body.body ? JSON.parse(req.body.body) : req.body);
            this.temperatureService.create(temperature)
                .then(result => {
                res.send({ "success": "created object\n" + temperature });
                resolve(result);
            })
                .catch((error) => {
                res.send({ "error": error });
                reject(error);
            });
        });
    }
    update(id, req, res) {
        return new Promise((resolve, reject) => {
            const temperature = (req.body.body ? JSON.parse(req.body.body) : req.body);
            this.temperatureService.update(id, temperature)
                .then((result) => {
                res.send({ "error": "error" });
                resolve(result);
            })
                .catch((error) => {
                res.send({ "error": error });
                reject(error);
            });
        });
    }
    delete(id, req, res) {
        return new Promise((resolve, reject) => {
            this.temperatureService.delete(id)
                .then(result => {
                res.send({ "success": result });
                resolve(result);
            })
                .catch(error => {
                res.send({ "error": "error" });
                reject(error);
            });
        });
    }
    retrieve(req, res) {
        return new Promise((resolve, reject) => {
            this.temperatureService.retrieve()
                .then(result => {
                res.send(result);
                resolve(result);
            })
                .catch((error) => {
                res.send({ "error": error });
                reject(error);
            });
        });
    }
    findById(id, req, res) {
        return new Promise((resolve, reject) => {
            this.temperatureService.findById(id)
                .then(result => {
                res.send(result);
                resolve(result);
            })
                .catch((error) => {
                res.send({ "error": "error" });
                reject(error);
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TemperatureController.prototype, "create", null);
__decorate([
    inversify_express_utils_1.Put('/:_id'),
    __param(0, inversify_express_utils_1.RequestParam(':_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TemperatureController.prototype, "update", null);
__decorate([
    inversify_express_utils_1.Delete('/:_id'),
    __param(0, inversify_express_utils_1.RequestParam(':_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TemperatureController.prototype, "delete", null);
__decorate([
    inversify_express_utils_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TemperatureController.prototype, "retrieve", null);
__decorate([
    inversify_express_utils_1.Get("/:_id"),
    __param(0, inversify_express_utils_1.RequestParam(':_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TemperatureController.prototype, "findById", null);
TemperatureController = __decorate([
    inversify_express_utils_1.Controller('/temperature'),
    inversify_1.injectable(),
    __param(0, inversify_1.inject(config_1.TYPES.TemperatureService)),
    __metadata("design:paramtypes", [service_1.TemperatureService])
], TemperatureController);
exports.TemperatureController = TemperatureController;
