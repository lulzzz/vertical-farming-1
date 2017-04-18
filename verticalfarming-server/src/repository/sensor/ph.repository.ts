/**
 * Created by alexanderlerma on 2/19/17.
 */
import {BaseRepository} from "./base.repository";
import {injectable, inject} from "inversify";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";
import {TYPES} from "../../config/constants/types";
import {PhSchema} from "../../schema/sensor/ph.schema";

@injectable()
export class PhRepository extends BaseRepository<ISensor> {

    constructor (@inject(TYPES.PhSchema) phSchema: PhSchema) {
        super(phSchema.mongooseModel())
    }
}