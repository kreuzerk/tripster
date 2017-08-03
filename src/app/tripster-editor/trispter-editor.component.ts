/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {Component, ViewChild} from '@angular/core';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html'
})
export class TripsterEditorComponent {

    @ViewChild(TripsterMapComponent)
    private tripsterMap: TripsterMapComponent

    addDestinationToMap(newDestination: TripsterDestination): void {
        this.tripsterMap.createNewDestination(newDestination)
    }
}
