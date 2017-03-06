/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhModel} from '../model/interfaces/sensor/ph.model';
import {RepositoryBase} from './base/repository.base'
import PhModel = require("../model/ph.model");
import PhSchema = require("../schemas/ph.schema");


class PhRepository extends RepositoryBase<IPhModel> {
    constructor () {
        super(PhSchema);
    }
}
Object.seal(PhRepository);
export = PhRepository;