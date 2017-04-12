/**
 * Created by alexanderlerma on 4/11/17.
 */
export interface ISensor {
  name: string;
  data: number;
  room: string;
  rack: string;
  type: string;
  createdAt?: Date;
  modifiedAt?: Date;
}


