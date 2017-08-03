import {Component, ViewChild} from '@angular/core';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';
import {TripsterDestination} from './tripster-editor/tripster-destination/tripster-destination.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild(TripsterMapComponent)
    private tripsterMap: TripsterMapComponent

    addDestinationToMap(newDestination: TripsterDestination): void {
        this.tripsterMap.createNewDestination(newDestination)
    }
}
