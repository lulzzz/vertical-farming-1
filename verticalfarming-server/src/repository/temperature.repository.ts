import {ITemperatureModel} from "../model/interfaces/sensor/temperature.model";
import TemperatureModel = require("../model/sensor/temperature.model");
import {BaseRepository} from "./base/repository.base";
import {injectable, decorate} from "inversify";
import {TemperatureSchema} from "../schemas/sensor/temperature.schema";

decorate(injectable(), BaseRepository);
@injectable()
export class TemperatureRepository extends BaseRepository<ITemperatureModel> {
	constructor (private temperatureSchema: TemperatureSchema) {
		super(temperatureSchema.mongooseModel());
	}
}