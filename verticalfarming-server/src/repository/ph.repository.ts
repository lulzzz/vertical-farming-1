/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhModel} from '../model/interfaces/sensor/ph.model';
import {BaseRepository} from './base/repository.base'
import PhModel = require("../model/sensor/ph.model");
import {injectable} from "inversify";
import {PhSchema} from "../schemas/sensor/ph.schema";

@injectable()
export class PhRepository extends BaseRepository<IPhModel> {
    constructor (private phSchema: PhSchema) {
        super(phSchema.mongooseModel())
    }
}