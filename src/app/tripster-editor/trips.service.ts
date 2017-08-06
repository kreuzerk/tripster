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

        /*
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
         */
        this.database.database.ref('/trips')
            .on('value', (snapshot) => {
                const trips = snapshot.val()
                const filtered = trips.filter((trip: any) => trip.id === '44828793-2d21-a116-ca34-f3acd7d56336')
                for (const property in filtered[0].destinations) {
                    if (filtered[0].destinations.hasOwnProperty(property)) {
                        this.trips$.next(filtered[0].destinations[property])
                    }
                }
            })
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({['trips/0/destinations/' + postKey]: destination})
    }

    public getDestinations(): Observable<TripsterDestination> {
        return this.trips$.asObservable()
    }

}
