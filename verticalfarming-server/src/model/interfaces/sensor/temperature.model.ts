import {ISensor} from "./base/base.sensor";
export interface ITemperatureModel extends ISensor {
    name: string;
    temperature: number;
    createdAt?: Date;
    modifiedAt?: Date;
}