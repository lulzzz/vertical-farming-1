/**
 * Created by alexanderlerma on 3/5/17.
 */
import {injectable, inject} from "inversify";
import {ISearchService} from "../interfaces/search.service";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {TYPES} from "../../config/constants/types";

@injectable()
export class SearchService implements ISearchService {

    constructor(@inject(TYPES.PhRepository) private phRepository: PhRepository,
                @inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository) {
        this.phRepository = phRepository;
        this.temperatureRepository = temperatureRepository;
    }

    search(query: string, callback: (error: any, result: any) => void) {
        let found = [];
        this.phRepository.search(query, callback);
        this.temperatureRepository.search(query, callback);
    }
}
