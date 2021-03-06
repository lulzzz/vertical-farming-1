/**
 * Created by alexanderlerma on 3/27/17.
 */
export class ServiceUtil {
  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
