/**
 * Created by alexanderlerma on 3/5/17.
 */
import {Request} from 'express';
import {isUndefined} from "util";
export class SearchRequest {
    private _name?: string;
    private _room?: string;
    private _rack?: string;
    private _startDate?: Date;
    private _endDate?: Date;
    private _useFullText: boolean

    constructor(req: Request) {
        this.validate(req);
    }

    private validate(req: Request) {
        this._name = req.checkParams('name').optional().isAlphanumeric() ? req.params.name : undefined;
        this._room = req.checkParams('room').optional().isAlphanumeric() ? req.params.room : undefined;
        this._rack = req.checkParams('rack').optional().isAlphanumeric() ? req.params.rack : undefined;
        this._startDate = req.checkParams('startDate').optional().isDate()
            ? new Date(req.params.startDate) : undefined;
        this._endDate = req.checkParams('endDate').optional().isDate()
            ? new Date(req.params.endDate) : undefined;
        this._useFullText =  req.checkParams('useFullText').optional().isBoolean()
            ? req.params.useFullText : false;
    }


    get name(): string {
        return this._name;
    }

    get room(): string {
        return this._room;
    }

    get rack(): string {
        return this._rack;
    }

    get startDate(): Date {
        return this._startDate;
    }

    get endDate(): Date {
        return this._endDate;
    }

    get useFullText(): boolean {
        return this._useFullText;
    }

    get searchString(): string {
        let str = []
        str.push(
            isUndefined(this.name) ? '' : this.name,
            ' ',
            isUndefined(this.rack) ? '' : this.rack,
            ' ',
            isUndefined(this.room) ? '' : this.room
        );
        return str.join('');
    }

}
