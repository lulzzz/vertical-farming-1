/**
 * Created by alexanderlerma on 3/5/17.
 */
import {SearchRequest} from "../../model/sensor/searchrequest.model";
import {PhService} from "./ph.service";
import {TemperatureService} from "./temperature.service";
import {injectable} from "inversify";

@injectable()
export class SearchService {

    constructor(private phService: PhService, private temperatureService: TemperatureService) {}

    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: any) => void) {
        this.phService.searchRequest(searchRequest, callback);
        this.temperatureService.searchRequest(searchRequest, callback);
    }
}
