/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {} from '@types/googlemaps';
import {TripsterAddressCoordinates} from '../../shared/model/tripster-address-coordinates.model';
import {TripsterDestination} from '../../shared/model/tripster-destination.model';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html',
    styleUrls: ['./tripster-destination.css']
})
export class TripsterDestinationComponent implements OnInit {

    @Input() destinationNumber
    @Output() onNewDestinationCreated = new EventEmitter<TripsterDestination>()
    @Output() onNewDestinationRequired = new EventEmitter<any>();
    private areInputsValid: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public createDestination(coordinates: TripsterAddressCoordinates): void {
        const newDestination = {coordinates}
        this.onNewDestinationCreated.emit(newDestination)
    }

    public createNewInputBox(): void {
        this.onNewDestinationRequired.emit();
    }

    public changeDestinationValidation(isValid: boolean): void {
        this.areInputsValid = isValid
    }
}
