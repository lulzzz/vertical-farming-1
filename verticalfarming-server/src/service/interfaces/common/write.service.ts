export interface IWrite<T> {
    create: (item: T) => Promise<any>;
    update:(_id: string, item: T) => Promise<any> ;
    delete: (_id: string) => Promise<any>;
}