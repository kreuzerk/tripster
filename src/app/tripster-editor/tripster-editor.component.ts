/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Output} from '@angular/core';
import {TripsterDestination} from './tripster-destination/tripster-destination.model';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html'
})
export class TripsterEditorComponent {

    @Output() onNewDestination = new EventEmitter<TripsterDestination>()
    private stopsCounter = 1
    stops = [this.stopsCounter]

    public newDestinationCreated(newDestination: TripsterDestination): void {
        this.onNewDestination.next(newDestination)
        this.addStop()
    }

    public addStop() {
        this.stopsCounter += 1
        this.stops.push(this.stopsCounter)
    }
}
