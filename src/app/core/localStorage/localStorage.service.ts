/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    public setItem(key: string, item: any): void {
        localStorage.setItem(key, item)
    }

    public getItem(key: string): string {
        return localStorage.getItem(key)
    }
}
