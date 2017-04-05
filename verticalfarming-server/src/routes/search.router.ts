/**
 * Created by alexanderlerma on 2/28/17.
 */
import * as express from "express";
import {SearchController} from "../controller/search.controller";
import {injectable, inject} from "inversify";

@injectable()
export class SearchRouter {

    private searchController: SearchController;

    constructor(@inject(SearchController) searchController: SearchController) {
        this.searchController = searchController;
    }

    get routes () : express.Router {
        const router: express.Router = express.Router();
        router.get('/search', this.searchController.searchRequest);
        return router;
    }
}

