/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {LocalStorageService} from '../core/localStorage/localStorage.service';
import {UUID} from 'angular2-uuid';

@Injectable()
export class TripUIDService {

    private TRIPSTER_UID_KEY = 'tripster.uid'

    constructor(private localStorageService: LocalStorageService) {
    }

    public getAndSaveTripUID(): string {
        const tripUID = this.localStorageService.getItem(this.TRIPSTER_UID_KEY) || UUID.UUID()
        this.saveTripUID(tripUID)
        return tripUID
    }

    public createAndSaveNewTripUID(): string {
        const newTripUID = UUID.UUID()
        this.saveTripUID(newTripUID)
        return newTripUID
    }

    public saveTripUID(uid: string): void {
        this.localStorageService.setItem(this.TRIPSTER_UID_KEY, uid)
    }


}
