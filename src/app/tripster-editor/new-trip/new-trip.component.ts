/**
 * Created by kevinkreuzer on 05.08.17.
 */
import {Component} from '@angular/core';
import {TripUIDService} from '../trip-uid.service';
import {Router} from '@angular/router';

@Component({
    selector: 'tripster-new-trip',
    templateUrl: './new-trip.html'
})
export class NewTripComponent {

    constructor(private tripUIDService: TripUIDService, private router: Router) {
    }

    public createNewTrip(): void {
        const newTripUID = this.tripUIDService.createAndSaveNewTripUID()
        this.router.navigate(['editor', newTripUID])
    }
}
