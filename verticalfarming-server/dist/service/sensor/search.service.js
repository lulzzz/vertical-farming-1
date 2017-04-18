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
const inversify_1 = require("inversify");
const ph_repository_1 = require("../../repository/sensor/ph.repository");
const temperature_repository_1 = require("../../repository/sensor/temperature.repository");
const types_1 = require("../../config/constants/types");
const humidity_repository_1 = require("../../repository/sensor/humidity.repository");
let SearchService = class SearchService {
    constructor(phRepository, temperatureRepository, humidityRepository) {
        this.phRepository = phRepository;
        this.temperatureRepository = temperatureRepository;
        this.humidityRepository = humidityRepository;
    }
    search(query) {
        console.log('query is' + query);
        return Promise
            .all([this.temperatureRepository.search(query),
            this.phRepository.search(query),
            this.humidityRepository.search(query)])
            .then(results => {
            return [].concat.apply([], results);
        });
    }
};
SearchService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.PhRepository)),
    __param(1, inversify_1.inject(types_1.TYPES.TemperatureRepository)),
    __param(2, inversify_1.inject(types_1.TYPES.HumidityRepository)),
    __metadata("design:paramtypes", [ph_repository_1.PhRepository,
        temperature_repository_1.TemperatureRepository,
        humidity_repository_1.HumidityRepository])
], SearchService);
exports.SearchService = SearchService;
