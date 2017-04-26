/**
 * Created by alexanderlerma on 2/15/17.
 */
export interface IRead<T> {
    retrieve: () => Promise<any>;
    findById: (_id: string) => Promise<any>;
}