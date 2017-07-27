/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent {

    @Input() counter: number;
    destinationModel: any;
}
