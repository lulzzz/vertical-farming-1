import {BaseRepository} from "./base.repository";
import {injectable, decorate, inject} from "inversify";
import {TemperatureSchema} from "../../schemas/sensor/temperature.schema";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {BaseSchema} from "../../schemas/sensor/interfaces/base.schema";

decorate(injectable(), BaseRepository);
@injectable()
export class TemperatureRepository extends BaseRepository<ISensor> {
	constructor (@inject(TemperatureSchema) temperatureSchema: BaseSchema) {
		super(temperatureSchema.mongooseModel());
	}
}