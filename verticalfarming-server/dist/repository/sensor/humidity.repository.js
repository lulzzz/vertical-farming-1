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
const base_repository_1 = require("./base.repository");
const inversify_1 = require("inversify");
const types_1 = require("../../config/constants/types");
const humidity_schema_1 = require("../../schema/sensor/humidity.schema");
let HumidityRepository = class HumidityRepository extends base_repository_1.BaseRepository {
    constructor(humiditySchema) {
        super(humiditySchema.mongooseModel());
    }
};
HumidityRepository = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.HumiditySchema)),
    __metadata("design:paramtypes", [humidity_schema_1.HumiditySchema])
], HumidityRepository);
exports.HumidityRepository = HumidityRepository;
