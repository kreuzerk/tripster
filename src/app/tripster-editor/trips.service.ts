/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';

@Injectable()
export class TripService {

    private trips$ = new Subject<TripsterDestination>()

    public addDestination(destination: TripsterDestination) {
        this.trips$.next(destination)
    }

    public getDestinations(): Observable<TripsterDestination> {
        return this.trips$.asObservable()
    }

}
