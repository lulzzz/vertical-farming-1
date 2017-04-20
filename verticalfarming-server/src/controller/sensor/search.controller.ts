/**
 * Created by alexanderlerma on 3/5/17.
 */
import * as express from "express";
import {SearchService} from "../../service";
import {injectable, inject} from "inversify";
import {TYPES} from "../../config";
import {interfaces, Controller, Get} from "inversify-express-utils";

@Controller('/search')
@injectable()
export class SearchController implements interfaces.Controller {


    constructor(@inject(TYPES.SearchService) private searchService: SearchService) {}

    @Get("/")
    public search (req: express.Request, res: express.Response) : Promise<any> {
        return new Promise((resolve, reject) => {
            const query: string = req.query.query;
            const start: Date = req.query.start;
            const end: Date = req.query.end;

            this.searchService.search(query, start, end).then(result => {
                res.send(result);
                resolve(result);
            }).catch((error) => {
                res.send({"error": "error with search term: " + query});
                reject(error);
            });

        });
    }

    @Get("/daterange")
    public dateRange (req: express.Request, res: express.Response) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.searchService.dateRange()
                .then(result => {
                    res.send(result);
                    resolve(result);
                })
                .catch(error => {
                    res.send({'error' : 'error getting date range'});
                    reject(error);
                });
        });
    }
}

