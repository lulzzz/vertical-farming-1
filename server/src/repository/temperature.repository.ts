import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import TemperatureModel = require("../model/temperature.model");
import TemperatureSchema = require("../db/schemas/temperature.schema");
import RepositoryBase = require("./base/repository.base");


class TemperatureRepository extends RepositoryBase<ITemperatureModel> {
	constructor () {
		super(TemperatureSchema);
	}
}
Object.seal(TemperatureRepository);
export = TemperatureRepository;