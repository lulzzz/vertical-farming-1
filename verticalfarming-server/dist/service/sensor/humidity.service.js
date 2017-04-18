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
 * Created by alexanderlerma on 2/19/17.
 */
const inversify_1 = require("inversify");
const types_1 = require("../../config/constants/types");
const humidity_repository_1 = require("../../repository/sensor/humidity.repository");
let HumidityService = class HumidityService {
    constructor(humidityRepository) {
        this.humidityRepository = humidityRepository;
    }
    create(item) {
        return this.humidityRepository.create(item);
    }
    retrieve() {
        return this.humidityRepository.retrieve();
    }
    update(_id, item) {
        return this.humidityRepository.findById(_id);
    }
    delete(_id) {
        return this.humidityRepository.delete(_id);
    }
    findById(_id) {
        return this.humidityRepository.findById(_id);
    }
    search(query) {
        return this.humidityRepository.search(query);
    }
};
HumidityService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.HumidityRepository)),
    __metadata("design:paramtypes", [humidity_repository_1.HumidityRepository])
], HumidityService);
exports.HumidityService = HumidityService;
