/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UUID} from 'angular2-uuid';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from '../../../core/localStorage/localStorage.service';

@Injectable()
export class TripUIDService {

    private TRIPSTER_UID_KEY = 'tripster.uid'
    private tripUID$ = new BehaviorSubject<string>('')

    constructor(private localStorageService: LocalStorageService, private router: Router) {
    }

    public createOrGetTripUID(): void {
        const tripUID = this.localStorageService.getItem(this.TRIPSTER_UID_KEY) || UUID.UUID()
        this.saveExistingTripUID(tripUID)
    }

    public createNewTripUID(): string {
        const newTripUID = UUID.UUID()
        this.saveExistingTripUID(newTripUID)
        return newTripUID
    }

    public saveExistingTripUID(uid: string): void {
        this.localStorageService.setItem(this.TRIPSTER_UID_KEY, uid)
        this.router.navigate(['editor', uid])
        this.tripUID$.next(uid)
    }

    public getUIDStream(): Observable<string> {
        return this.tripUID$.asObservable()
    }
}
