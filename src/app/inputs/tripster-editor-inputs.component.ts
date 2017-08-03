/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Output} from '@angular/core';
import {TripsterDestination} from './tripster-destination/tripster-destination.model';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor-inputs.html'
})
export class TripsterEditorInputsComponent {

    @Output() onNewDestination = new EventEmitter<TripsterDestination>()
    private destinationCounter = 1
    destinations = [this.destinationCounter]

    public newDestinationCreated(newDestination: TripsterDestination): void {
        this.onNewDestination.next(newDestination)
        this.addStop()
    }

    public addStop() {
        this.destinationCounter += 1
        this.destinations.push(this.destinationCounter)
    }
}
