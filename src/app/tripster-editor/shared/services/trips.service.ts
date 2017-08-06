/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ObjectHelper} from '../../../core/helpers/object.helper.service';
import {TripsterDestination} from '../model/tripster-destination.model';

@Injectable()
export class TripService {

    private trips$ = new Observable<Array<any>>()
    private query = {
        orderByChild: 'id',
        equalTo: '44828793-2d21-a116-ca34-f3acd7d56336'
    }

    constructor(private database: AngularFireDatabase, private objectHelper: ObjectHelper) {
        this.trips$ = this.database.list('/trips', {query: this.query})
            .map((trip: any) => trip[0].destinations)
            .map((destinations: any) => this.objectHelper.transformObjectToArray(destinations))
    }

    public addDestination(destination: TripsterDestination) {
        const postKey = this.database.database.ref().child('destinations').push().key
        this.database.database.ref().update({['trips/0/destinations/' + postKey]: destination})
    }

    public getDestinations(): Observable<Array<TripsterDestination>> {
        return this.trips$
    }
}
