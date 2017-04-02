/**
 * Created by alexanderlerma on 2/28/17.
 */
import {Router} from 'express';
import {SearchController} from "../controller/search.controller";
import {injectable} from "inversify";

@injectable()
export class SearchRouter {
    private router: Router;

    constructor(private searchController: SearchController) {
       this.router = Router();
    }

    get routes () {
        this.router.get('/search', this.searchController.searchRequest);
        return this.router;
    }
}

