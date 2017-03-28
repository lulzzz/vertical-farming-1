/**
 * Created by alexanderlerma on 3/5/17.
 */
import PhService = require("../service/ph.service");
import {Request, Response} from 'express';
import {SearchService} from "../service/search.service";
import {SearchRequest} from "../model/searchrequest.model";

export class SearchController {

    constructor() {}

    searchRequest (req: Request, res: Response): void {
        try {
            const searchRequest: SearchRequest = new SearchRequest(req);
            const searchService = new SearchService();
            console.log(searchRequest);
            searchService.searchRequest(searchRequest, (error, result) => {
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

