/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component} from '@angular/core';
import {TripsterDestination} from './tripster-destination/tripster-destination.model';
import {TripService} from '../trips.service';

@Component({
    selector: 'tripster-inputs',
    templateUrl: './tripster-inputs.html'
})
export class TripsterInputsComponent {

    private destinationCounter = 1
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
