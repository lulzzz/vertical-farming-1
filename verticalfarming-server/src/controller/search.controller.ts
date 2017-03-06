/**
 * Created by alexanderlerma on 3/5/17.
 */
import PhService = require("../service/ph.service");
import {Request, Response} from 'express';
import {SearchService} from "../service/search.service";
import {SearchRequest} from "../model/searchrequest.model";

export class SearchController {

    private searchService: SearchService;

    constructor() {
        this.searchService = new SearchService();
    }

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

