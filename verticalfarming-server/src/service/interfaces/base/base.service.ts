import {IRead} from "../common/read.service";
import {IWrite} from "../common/write.service";
export interface ISensorService<T> extends IRead<T>, IWrite<T> {
    search(query: string) : Promise<any>;
    dateRange() : Promise<any>;
}
