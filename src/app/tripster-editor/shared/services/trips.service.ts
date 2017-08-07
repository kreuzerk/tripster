/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/observable/merge'
import {Observable} from 'rxjs/Observable';
import {ObjectHelper} from '../../../core/helpers/object.helper.service';
import {TripsterDestination} from '../model/tripster-destination.model';
import {TripsterTrip} from '../model/tripster-trip.model';
import {TripUIDService} from './trip-uid.service';

@Injectable()
export class TripService {
    private trips$ = new Observable<Array<any>>()

    constructor(private database: AngularFireDatabase, private objectHelper: ObjectHelper,
                private tripUIDService: TripUIDService) {
        const tripUID$ = this.tripUIDService.getUIDStream()
        const trips$ = this.database.list('/trips')
        this.trips$ = Observable.combineLatest(trips$, tripUID$,
            (trips, tripUID) => ({trips, tripUID}))
            .map((filterAndItems) => filterAndItems.trips
                .filter((trip: TripsterTrip) => trip.id === filterAndItems.tripUID)
            )
            .map((trip: any) => trip.length !== 0 ? trip[0].destinations : trip)
            .map((destinations: any) => this.objectHelper.transformObjectToArray(destinations))
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({['trips/0/destinations/' + postKey]: destination})
    }

    public createNewTrip(tripId: string): void {
        const newTrip = {
            destinations: [],
            id: tripId
        }
        const postKey = this.database.database.ref().child('trips').push().key
        this.database.database.ref().update({['trips/' + postKey]: newTrip})
    }

    public getDestinations(): Observable<Array<TripsterDestination>> {
        return this.trips$
    }
}
