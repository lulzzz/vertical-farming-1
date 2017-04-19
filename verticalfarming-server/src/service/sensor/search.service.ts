/**
 * Created by alexanderlerma on 3/5/17.
 */
import {injectable, inject} from "inversify";
import {ISearchService} from "../interfaces/search.service";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {TYPES} from "../../config/constants/types";
import {HumidityRepository} from "../../repository/sensor/humidity.repository";

@injectable()
export class SearchService implements ISearchService {

    constructor(@inject(TYPES.PhRepository) private phRepository: PhRepository,
                @inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository,
                @inject(TYPES.HumidityRepository) private humidityRepository: HumidityRepository) {}

    public search(query: string) : Promise <any> {
        return Promise
            .all([this.temperatureRepository.search(query),
                  this.phRepository.search(query),
                  this.humidityRepository.search(query)])
            .then(results => {
                return [].concat.apply([], results);
            });
    }
}
