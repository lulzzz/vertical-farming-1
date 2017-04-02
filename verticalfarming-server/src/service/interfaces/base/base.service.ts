import {Read} from "../common/read";
import {Write} from "../common/write";
import {SearchRequest} from "../../../model/sensor/searchrequest.model";
export interface IBaseService<T> extends Read<T>, Write<T> {
    searchRequest(searchRequest: SearchRequest, callback: (error: any, result: T) => void)
}
