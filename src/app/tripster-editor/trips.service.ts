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
    private query = {
        orderByChild: 'id',
        equalTo: '44828793-2d21-a116-ca34-f3acd7d56336'
    }

    constructor(private database: AngularFireDatabase) {
        this.database.list('/trips', {query: this.query})
            .subscribe((trips: any) => this.displayTrips(trips))
    }

    private displayTrips(trips: any): void {
        const currentTrip = trips.find((trip: any) => trip.id === '44828793-2d21-a116-ca34-f3acd7d56336')
        for (const property in currentTrip.destinations) {
            if (currentTrip.destinations.hasOwnProperty(property)) {
                this.trips$.next(currentTrip.destinations[property])
            }
        }
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({['trips/0/destinations/' + postKey]: destination})
        this.trips$.next(destination)
    }

    public getDestinations(): Observable<TripsterDestination> {
        return this.trips$.asObservable()
    }
}
