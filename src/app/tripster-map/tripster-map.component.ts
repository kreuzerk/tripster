/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tripster-map',
    templateUrl: './tripster-map.html',
    styleUrls: ['./tripster-map.css'],
    encapsulation: ViewEncapsulation.None
})
export class TripsterMapComponent implements OnInit {

    lat = 46.288994
    lng = 7.9368406
    stops = []

    constructor() {
    }

    ngOnInit(): void {
        this.stops.push(this.createStop(46.288994, 7.9368406))
        this.stops.push(this.createStop(47.3775499, 8.4666756))
    }

    private createStop(lat: number, lng: number): any {
        return {lat, lng}
    }
}