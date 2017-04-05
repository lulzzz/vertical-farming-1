/**
 * Created by alexanderlerma on 2/21/17.
 */
import {Document} from "mongoose";

export interface ISensor extends Document {
    name: string;
    data: number;
    room: string;
    rack: string;
    type: string;
    createdAt?: Date;
    modifiedAt?: Date;
}
