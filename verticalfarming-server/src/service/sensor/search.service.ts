/**
 * Created by alexanderlerma on 3/5/17.
 */
import {injectable, inject} from "inversify";
import {ISearchService} from "../interfaces/search.service";
import {PhRepository} from "../../repository/sensor/ph.repository";
import {TemperatureRepository} from "../../repository/sensor/temperature.repository";
import {TYPES} from "../../config/constants/types";
import {HumidityRepository} from "../../repository/sensor/humidity.repository";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";

@injectable()
export class SearchService implements ISearchService {


    constructor(@inject(TYPES.PhRepository) private phRepository: PhRepository,
                @inject(TYPES.TemperatureRepository) private temperatureRepository: TemperatureRepository,
                @inject(TYPES.HumidityRepository) private humidityRepository: HumidityRepository) {}

    public search(query: string, start?: Date, end?: Date) : Promise <any> {
        return Promise
            .all([this.temperatureRepository.search(query, start, end),
                  this.phRepository.search(query, start, end),
                  this.humidityRepository.search(query, start, end)])
            .then(results => {
                return [].concat.apply([], results);
            });
    }

    public dateRange() {
        return Promise
            .all([this.temperatureRepository.dateRange(),
                  this.phRepository.dateRange(),
                  this.humidityRepository.dateRange()])
            .then(results => {
                const flattened = results.reduce((a, b) => { return a.concat(b)});
                const minMax = {'min' : flattened[0]['min'] , 'max' : flattened[0]['max']};
                flattened.forEach(mm => {
                    if (mm.min < minMax.min) {
                        minMax['min'] = mm['min'];
                    }
                    if (mm.max > mm.max) {
                        minMax['max'] = mm['max'];
                    }
                });
                return minMax;
            });
    }

    public retrieve = () => Promise.reject(() => console.log('not implemented'));
    public findById = (_id: string) => Promise.reject(() => console.log('not implemented'));
    public create = (item: ISensor) => Promise.reject(() => console.log('not implemented'));
    public update = (_id: string, item: ISensor) => Promise.reject(() => console.log('not implemented'));
    public delete = (_id: string) => Promise.reject(() => console.log('not implemented'));

}
