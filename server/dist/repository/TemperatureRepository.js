"use strict";
const TemperatureSchema = require("../dataAccess/schemas/TemperatureSchema");
const RepositoryBase = require("./base/RepositoryBase");
class TemperatureRepository extends RepositoryBase {
    constructor() {
        super(TemperatureSchema);
    }
}
Object.seal(TemperatureRepository);
module.exports = TemperatureRepository;
