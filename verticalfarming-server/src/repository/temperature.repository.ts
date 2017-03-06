import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import TemperatureModel = require("../model/temperature.model");
import TemperatureSchema = require("../schemas/temperature.schema");
import {RepositoryBase} from "./base/repository.base";


class TemperatureRepository extends RepositoryBase<ITemperatureModel> {
	constructor () {
		super(TemperatureSchema);
	}
}
Object.seal(TemperatureRepository);
export = TemperatureRepository;