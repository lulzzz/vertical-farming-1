/**
 * Created by alexanderlerma on 3/5/17.
 */
import {injectable, inject} from "inversify";
import {ISearchService} from "../interfaces/search.service";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {TYPES} from "../../config/constants/types";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";

@injectable()
export class SearchService implements ISearchService {

    constructor(@inject(TYPES.PhRepository) private phRepository: PhRepository,
                @inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository) {
        this.phRepository = phRepository;
        this.temperatureRepository = temperatureRepository;
    }

    search(query: string, callback: (error: any, result: any) => void) {
        // let found = [{word:'hello'}];
        // const cb = (err, result) => {
        //     if (err) {
        //         return;
        //     } else {
        //         found.push(result);
        //     }
        // };
        // this.phRepository.search(query, cb);
        this.temperatureRepository.search(query, callback);
        // callback(null, found);
    }
}
