/**
 * Created by alexanderlerma on 2/28/17.
 */
import {Router} from 'express';
import {SearchController} from "../controller/search.controller";
export class SearchRouter {
    private router: Router;
    private searchController: SearchController

    constructor() {
       this.router = Router();
       this.searchController = new SearchController();
    }

    get routes () {
        this.router.get('/search', this.searchController.searchRequest);
        return this.router;
    }
}

