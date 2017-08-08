/**
 * Created by kevinkreuzer on 06.08.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ObjectHelper {

    public transformObjectToArray(source: any): Array<any> {
        if (source) {
            return Object.keys(source).map(key => source[key])
        }
        return []
    }
}
