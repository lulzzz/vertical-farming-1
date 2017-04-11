import {Read} from "../common/read";
import {Write} from "../common/write";
export interface ISensorService<T> extends Read<T>, Write<T> {
    search(query: string) : Promise<any>
}
