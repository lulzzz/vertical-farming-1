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
 * Created by alexanderlerma on 3/5/17.
 */
const express = require("express");
const service_1 = require("../../service");
const inversify_1 = require("inversify");
const config_1 = require("../../config");
const inversify_express_utils_1 = require("inversify-express-utils");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    search(req, res) {
        return new Promise((resolve, reject) => {
            const term = req.query.query;
            this.searchService.search(term).then(result => {
                res.send(result);
                resolve(result);
            }).catch((error) => {
                res.send({ "error": "error with search term: " + term });
                reject(error);
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "search", null);
SearchController = __decorate([
    inversify_express_utils_1.Controller('/search'),
    inversify_1.injectable(),
    __param(0, inversify_1.inject(config_1.TYPES.SearchService)),
    __metadata("design:paramtypes", [service_1.SearchService])
], SearchController);
exports.SearchController = SearchController;
