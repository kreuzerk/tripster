/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripsterDestination} from './tipster-inputs/tripster-destination/tripster-destination.model';
import {TripUIDService} from './trip-uid.service';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html',
    styleUrls: ['./tripster-editor.css']
})
export class TripsterEditorComponent implements OnInit {

    @ViewChild(TripsterMapComponent)
    private tripsterMap: TripsterMapComponent

    constructor(private route: ActivatedRoute, private router: Router, private tripUIDService: TripUIDService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            routeParams => {
                const tripUid = routeParams['trip-uid']
                if (tripUid) {
                    this.tripUIDService.saveTripUID(tripUid)
                } else {
                    const newTripUID = this.tripUIDService.getAndSaveTripUID()
                    this.router.navigate(['editor', newTripUID])
                }
            }
        )
    }

    addDestinationToMap(newDestination: TripsterDestination): void {
        this.tripsterMap.createNewDestination(newDestination)
    }
}
