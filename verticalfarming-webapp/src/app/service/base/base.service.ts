/**
 * Created by alexanderlerma on 2/27/17.
 */
export class BaseService {
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
