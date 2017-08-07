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
    private currentTripUID: string

    constructor(private database: AngularFireDatabase, private objectHelper: ObjectHelper,
                private tripUIDService: TripUIDService) {
        const tripUID$ = this.tripUIDService.getUIDStream()
        const trips$ = this.database.list('/trips')
        this.trips$ = Observable.combineLatest(trips$, tripUID$,
            (trips, tripUID) => ({trips, tripUID}))
            .map(filterAndItems => filterAndItems.trips
                .filter((trip: TripsterTrip) => trip.id === filterAndItems.tripUID)
            )
            .do(trip => {
                if (trip[0]) {
                    this.currentTripUID = trip[0].$key
                }
            })
            .map((trip: any) => trip.length !== 0 ? trip[0].destinations : trip)
            .map((destinations: any) => this.objectHelper.transformObjectToArray(destinations))
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        console.log('TripUID', this.currentTripUID)
        this.database.database.ref().update({[`trips/${this.currentTripUID}/destinations/` + postKey]: destination})
    }

    public createNewTrip(): void {
        const newTripId = this.tripUIDService.createNewTripUID()
        const newTrip = {
            destinations: [],
            id: newTripId
        }
        const postKey = this.database.database.ref().child('trips').push().key
        this.database.database.ref().update({['trips/' + postKey]: newTrip})
    }

    public getDestinations(): Observable<Array<TripsterDestination>> {
        return this.trips$
    }
}
