/**
 * Created by alexanderlerma on 2/15/17.
 */

import {IReadController} from "../common/read.controller";
import {IWriteController} from  "../common/write.controller";
import {IBaseService} from "../../../service/interfaces/base/base.service"
export interface IBaseController<T extends IBaseService<Object>> extends IReadController, IWriteController {


}
