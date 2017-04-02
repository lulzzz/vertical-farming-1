/**
 * Created by alexanderlerma on 3/5/17.
 */
import PhService = require("../service/sensor/ph.service");
import {Request, Response} from 'express';
import {SearchService} from "../service/sensor/search.service";
import {SearchRequest} from "../model/sensor/searchrequest.model";
import {injectable} from "inversify";

@injectable()
export class SearchController {

    constructor(private searchService: SearchService) {}

    searchRequest (req: Request, res: Response): void {
        try {
            const searchRequest: SearchRequest = new SearchRequest(req);
            console.log(searchRequest);
            this.searchService.searchRequest(searchRequest, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}

