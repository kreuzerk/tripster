/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {} from '@types/googlemaps';
import {TripsterAddressCoordinates} from './tripster-address-search/tripster-address-coordinates.model';
import {TripsterDestination} from './tripster-destination.model';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent implements OnInit {

    @Input() counter: number;
    @Output() onDestinationCreated = new EventEmitter<TripsterDestination>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public createDestination(coordinates: TripsterAddressCoordinates): void {
        const newDestination = {coordinates}
        console.log('New Destination', newDestination)
        this.onDestinationCreated.next(newDestination);
    }
}