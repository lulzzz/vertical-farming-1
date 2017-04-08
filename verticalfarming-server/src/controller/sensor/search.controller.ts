/**
 * Created by alexanderlerma on 3/5/17.
 */
import * as express from "express";
import {SearchService} from "../../service/sensor/search.service";
import {injectable, inject} from "inversify";
import {TYPES} from "../../config/constants/types";
import {interfaces, Controller, Get} from "inversify-express-utils";

@Controller('/search')
@injectable()
export class SearchController implements interfaces.Controller {


    constructor(@inject(TYPES.SearchService) private searchService: SearchService) {}

    @Get("/")
    search (req: express.Request, res: express.Response) : void {
        try {
            const term = req.query.term;
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

