/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class TripService {

    private trips$ = new Subject<TripsterDestination>()

    constructor(private database: AngularFireDatabase) {

        this.database.list('/trips', {
            query: {
                orderByChild: 'id',
                equalTo: '44828793-2d21-a116-ca34-f3acd7d56336'
            }
        })
            .subscribe((trips: any) => {
                const trip: any = trips[0]
                trip.destinations.forEach((destination: any) => {
                    this.addDestination(destination)
                })
            })
    }

    public addDestination(destination: TripsterDestination) {
        this.trips$.next(destination)
    }

    public getDestinations(): Observable<TripsterDestination> {
        return this.trips$.asObservable()
    }

}
