/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Component} from '@angular/core';
import {TripUIDService} from '../shared/services/trip-uid.service';
import {Router} from '@angular/router';
import {TripService} from '../shared/services/trips.service';

@Component({
    selector: 'tripster-new-trip',
    templateUrl: './new-trip.html'
})
export class NewTripComponent {

    constructor(private tripUIDService: TripUIDService, private tripService: TripService, private router: Router) {
    }

    public createNewTrip(): void {
        const newTripUID = this.tripUIDService.createAndSaveNewTripUID()
        this.tripService.createNewTrip(newTripUID)
        this.router.navigate(['editor', newTripUID])
    }
}
