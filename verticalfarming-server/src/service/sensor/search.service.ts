/**
 * Created by alexanderlerma on 3/5/17.
 */
import {PhService} from "./ph.service";
import {TemperatureService} from "./temperature.service";
import {injectable} from "inversify";

@injectable()
export class SearchService {

    constructor(private phService: PhService, private temperatureService: TemperatureService) {}

    searchRequest(query: string, callback: (error: any, result: any) => void) {
        this.phService.searchRequest(query, callback);
        this.temperatureService.searchRequest(query, callback);
    }
}
