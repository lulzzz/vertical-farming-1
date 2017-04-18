/**
 * Created by alexanderlerma on 2/19/17.
 */
import {BaseRepository} from "./base.repository";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {HumiditySchema} from "../../schemas/sensor/humidity.schema";

@injectable()
export class HumidityRepository extends BaseRepository<ISensor> {

    constructor (@inject(TYPES.HumiditySchema) humiditySchema: HumiditySchema) {
        super(humiditySchema.mongooseModel())
    }
}