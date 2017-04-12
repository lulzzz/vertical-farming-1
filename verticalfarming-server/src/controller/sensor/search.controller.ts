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
    public search (req: express.Request, res: express.Response) : Promise<any>{
        return new Promise((resolve, reject) => {
            const term = req.query.query;
            this.searchService.search(term).then(result => {
                res.send(result);
                resolve(result);
            }).catch((error) => {
                res.send({"error": "error with search term: " + term});
                reject(error);
            });
        });
    }
}

