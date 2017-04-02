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
    private _useFullText: boolean;

    constructor(req: Request) {
        this.validate(req);
    }

    private validate(req: Request) {
        this._name = req.body.name;
        this._room = req.body.room;
        this._rack = req.body.rack;
        this._startDate = req.body.startDate;
        this._endDate = req.body.endDate;
        this._useFullText =  req.body.useFullText;
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
        let str = [];
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
