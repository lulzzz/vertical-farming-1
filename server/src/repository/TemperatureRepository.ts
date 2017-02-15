import {ITemperatureModel} from "../model/interfaces/ITemperatureModel";
import TemperatureModel = require("../model/TemperatureModel");
import TemperatureSchema = require("../dataAccess/schemas/TemperatureSchema");
import RepositoryBase = require("./base/RepositoryBase");


class TemperatureRepository extends RepositoryBase<ITemperatureModel> {
	constructor () {
		super(TemperatureSchema);
	}
}
Object.seal(TemperatureRepository);
export = TemperatureRepository;