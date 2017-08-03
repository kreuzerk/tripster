/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html',
    styleUrls: ['./tripster-editor.css']
})
export class TripsterEditorComponent implements OnInit {

    @ViewChild(TripsterMapComponent)
    private tripsterMap: TripsterMapComponent

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            routeParams => {
                console.log(routeParams['trip-uid'])
            }
        )
    }

    addDestinationToMap(newDestination: TripsterDestination): void {
        this.tripsterMap.createNewDestination(newDestination)
    }
}
