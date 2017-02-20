/**
 * Created by alexanderlerma on 2/19/17.
 */
import {IPhModel} from "../model/interfaces/IPhModel";
import PhModel = require("../model/PhModel");
import PhSchema = require("../dataAccess/schemas/PhSchema");
import RepositoryBase = require("./base/RepositoryBase");


class PhRepository extends RepositoryBase<IPhModel> {
    constructor () {
        super(PhSchema);
    }
}
Object.seal(PhRepository);
export = PhRepository;