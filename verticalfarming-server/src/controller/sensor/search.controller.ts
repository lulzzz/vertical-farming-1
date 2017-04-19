/**
 * Created by alexanderlerma on 3/5/17.
 */
import * as express from "express";
import {SearchService} from "../../service";
import {injectable, inject} from "inversify";
import {TYPES} from "../../config";
import {interfaces, Controller, Get, QueryParam} from "inversify-express-utils";

@Controller('/search')
@injectable()
export class SearchController implements interfaces.Controller {


    constructor(@inject(TYPES.SearchService) private searchService: SearchService) {}

    @Get("/")
    public search (req: express.Request,
                   res: express.Response,
                   @QueryParam('query') query: string,
                   @QueryParam('start') start?: Date,
                   @QueryParam('end') end?: Date) : Promise<any> {
        return new Promise((resolve, reject) => {
            if (start && end) {
                this.searchService.search(query, start, end).then(result => {
                    res.send(result);
                    resolve(result);
                }).catch((error) => {
                    res.send({"error": "error with search term: " + query});
                    reject(error);
                });
            } else {
                this.searchService.search(query).then(result => {
                    res.send(result);
                    resolve(result);
                }).catch((error) => {
                    res.send({"error": "error with search term: " + query});
                    reject(error);
                });
            }

        });
    }
}

