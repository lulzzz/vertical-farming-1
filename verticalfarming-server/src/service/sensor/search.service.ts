/**
 * Created by alexanderlerma on 3/5/17.
 */
import {PhService} from "./ph.service";
import {TemperatureService} from "./temperature.service";
import {injectable, inject} from "inversify";

@injectable()
export class SearchService {

    private phService: PhService;
    private temperatureService: TemperatureService;

    constructor(@inject(PhService) phService: PhService,
                @inject(TemperatureService) temperatureService: TemperatureService) {
        this.phService = phService;
        this.temperatureService = temperatureService;
    }

    search(query: string, callback: (error: any, result: any) => void) {
        this.phService.search(query, callback);
        this.temperatureService.search(query, callback);
    }
}
