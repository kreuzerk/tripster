/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ObjectHelper} from '../../../core/helpers/object.helper.service';
import {TripsterDestination} from '../model/tripster-destination.model';
import {TripsterTrip} from '../model/tripster-trip.model';
import {TripUIDService} from './trip-uid.service';

@Injectable()
export class TripService {

    private trips$ = new Observable<Array<any>>()
    private firebaseTripID: string

    constructor(private database: AngularFireDatabase, private objectHelper: ObjectHelper,
                private tripUIDService: TripUIDService) {
        const tripUID$ = this.tripUIDService.getUIDStream()
        const trips$ = this.database.list('/trips')
        this.trips$ = Observable.combineLatest(trips$, tripUID$,
            (trips, tripUID) => ({trips, tripUID}))
            .map(filterAndItems => this.filterTripsById(filterAndItems.trips, filterAndItems.tripUID))
            .do(this.extractFirebaseTripID)
            .map(this.exctractDestinationsFromTrip.bind(this))
    }

    private exctractDestinationsFromTrip = (trip: Array<TripsterTrip>) => {
        const destinationsObject = trip[0] ? trip[0].destinations : []
        return this.objectHelper.transformObjectToArray(destinationsObject)
    }

    private filterTripsById = (trips, tripUID) => {
        return trips.filter((trip: TripsterTrip) => trip.id === tripUID)
    }

    private extractFirebaseTripID = (trip) => {
        if (trip[0]) {
            this.firebaseTripID = trip[0].$key
        }
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({[`trips/${this.firebaseTripID}/destinations/` + postKey]: destination})
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
