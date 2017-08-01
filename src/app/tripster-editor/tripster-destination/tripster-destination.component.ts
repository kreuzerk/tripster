/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent implements OnInit {

    @Input() counter: number;
    @Output() onDestinationCreated = new EventEmitter<any>();
    destinationModel: any;

    constructor() {
    }

    ngOnInit(): void {
    }

    public newDestinationInput(): void {
        this.onDestinationCreated.next();
    }
}
