import {Read} from "../common/read";
import {Write} from "../common/write";
export interface IBaseService<T> extends Read<T>, Write<T> {
    search(query: string, callback: (error: any, result: T) => void)
}
