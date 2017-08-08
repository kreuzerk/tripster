/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TripsterDestination} from '../shared/model/tripster-destination.model';
import {TripService} from '../shared/services/trips.service';

@Component({
    selector: 'tripster-inputs',
    templateUrl: './tripster-inputs.html'
})
export class TripsterInputsComponent {

    destinationCounter = 1
    destinations = [this.destinationCounter]

    constructor(private tripService: TripService) {
    }

    public newDestinationCreated(newDestination: TripsterDestination): void {
        this.tripService.addDestination(newDestination)
        this.addStop()
    }

    public addStop() {
        this.destinationCounter += 1
        this.destinations.push(this.destinationCounter)
    }
}
