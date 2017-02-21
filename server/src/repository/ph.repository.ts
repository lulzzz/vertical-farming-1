/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhModel} from "../model/interfaces/ph.model";
import PhModel = require("../model/ph.model");
import PhSchema = require("../db/schemas/ph.schema");
import RepositoryBase = require("./base/repository.base");


class PhRepository extends RepositoryBase<IPhModel> {
    constructor () {
        super(PhSchema);
    }
}
Object.seal(PhRepository);
export = PhRepository;