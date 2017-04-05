/**
 * Created by alexanderlerma on 2/19/17.
 */
import {BaseRepository} from "./base.repository";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {BaseSchema} from "../../schemas/sensor/interfaces/base.schema";
import {PhSchema} from "../../schemas/sensor/ph.schema";

@injectable()
export class PhRepository extends BaseRepository<ISensor> {

    constructor (@inject(PhSchema) phSchema: BaseSchema) {
        super(phSchema.mongooseModel())
    }
}