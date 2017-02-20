"use strict";
const PhSchema = require("../dataAccess/schemas/PhSchema");
const RepositoryBase = require("./base/RepositoryBase");
class PhRepository extends RepositoryBase {
    constructor() {
        super(PhSchema);
    }
}
Object.seal(PhRepository);
module.exports = PhRepository;
