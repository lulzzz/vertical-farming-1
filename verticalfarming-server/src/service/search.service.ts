/**
 * Created by alexanderlerma on 3/5/17.
 */
import PhService = require('./ph.service')
import TemperatureService = require('./temperature.service')
import {SearchRequest} from "../model/searchrequest.model";

export class SearchService {

    private phService: PhService;
    private temperatureService: TemperatureService;

    constructor() {
        this.phService = new PhService();
        this.temperatureService = new TemperatureService();
    }

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        this.phService.searchRequest(searchRequest, callback);
        this.temperatureService.searchRequest(searchRequest, callback);
    }
}
