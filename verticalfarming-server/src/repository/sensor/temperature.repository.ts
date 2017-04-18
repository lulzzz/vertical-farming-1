import {BaseRepository} from "./base.repository";
import {injectable, decorate, inject} from "inversify";
import {TemperatureSchema} from "../../schemas/sensor/temperature.schema";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";

decorate(injectable(), BaseRepository);
@injectable()
export class TemperatureRepository extends BaseRepository<ISensor> {
	constructor (@inject(TYPES.TemperatureSchema) temperatureSchema: TemperatureSchema) {
		super(temperatureSchema.mongooseModel());
	}
}