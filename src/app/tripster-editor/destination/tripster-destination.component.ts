/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent {

    @Input() counter: number;
    @Output() onDestinationCreated = new EventEmitter<any>();
    destinationModel: any;

    public newDestinationInput(): void {
        this.onDestinationCreated.next();
    }
}
