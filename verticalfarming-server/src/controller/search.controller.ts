/**
 * Created by alexanderlerma on 3/5/17.
 */
import {Request, Response} from "express";
import {SearchService} from "../service/sensor/search.service";
import {injectable, inject} from "inversify";

@injectable()
export class SearchController {

    private searchService: SearchService;

    constructor(@inject(SearchService) searchService: SearchService) {
        this.searchService = searchService;
    }

    searchRequest (req: Request, res: Response): void {
        try {
            const term: string = req.params.query;
            this.searchService.search(term, (error, result) => {
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

