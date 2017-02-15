/**
 * Created by alexanderlerma on 2/15/17.
 */
export interface Read<T> {
    retrieve: (callback: (error: any, result: T)=> void)=> void ;
    findById: (_id: string, callback: (error:any, result: T) => void) => void;
}