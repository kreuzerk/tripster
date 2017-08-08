/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripUIDService} from './shared/services/trip-uid.service';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html',
    styleUrls: ['./tripster-editor.css']
})
export class TripsterEditorComponent implements OnInit {

    constructor(private route: ActivatedRoute, private tripUIDService: TripUIDService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            routeParams => {
                const tripUid = routeParams['trip-uid']
                if (tripUid) {
                    this.tripUIDService.saveExistingTripUID(tripUid)
                } else {
                    this.tripUIDService.createOrGetTripUID()
                }
            }
        )
    }
}
