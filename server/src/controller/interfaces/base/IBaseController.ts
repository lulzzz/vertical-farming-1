/**
 * Created by alexanderlerma on 2/15/17.
 */

import {IReadController} from "../common/IReadController";
import {IWriteController} from  "../common/IWriteController";
import {IBaseBusiness} from "../../../business/interfaces/base/IBaseBusiness"
export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {


}
