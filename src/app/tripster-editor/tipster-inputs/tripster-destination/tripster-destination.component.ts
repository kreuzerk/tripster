/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {} from '@types/googlemaps';
import {TripsterAddressCoordinates} from '../../shared/model/tripster-address-coordinates.model';
import {TripsterDestination} from '../../shared/model/tripster-destination.model';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent implements OnInit {

    @Input() destinationNumber
    @Output() onDestinationCreated = new EventEmitter<TripsterDestination>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public createDestination(coordinates: TripsterAddressCoordinates): void {
        const newDestination = {coordinates}
        this.onDestinationCreated.next(newDestination);
    }
}
