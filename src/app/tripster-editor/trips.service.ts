/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class TripService {

    private trips$ = new Observable<Array<any>>()
    private query = {
        orderByChild: 'id',
        equalTo: '44828793-2d21-a116-ca34-f3acd7d56336'
    }

    constructor(private database: AngularFireDatabase) {
        this.trips$ = this.database.list('/trips', {query: this.query})
            .map((trip: any) => trip[0].destinations)
            .map((destinations: any) => Object.keys(destinations).map(key => destinations[key]))
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({['trips/0/destinations/' + postKey]: destination})
    }

    public getDestinations(): Observable<Array<TripsterDestination>> {
        return this.trips$
    }
}
