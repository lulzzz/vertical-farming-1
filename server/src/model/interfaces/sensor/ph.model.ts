/**
 * Created by alexanderlerma on 2/19/17.
 */
import {ISensor} from "./base/base.sensor"
export interface IPhModel extends ISensor {
    name: string;
    ph: number;
    createdAt?: Date;
    modifiedAt?: Date;
}