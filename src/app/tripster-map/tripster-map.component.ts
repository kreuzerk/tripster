/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LatLngLiteral} from '@agm/core';
import {TripsterDestination} from '../tripster-editor/tripster-destination/tripster-destination.model';

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
    paths: Array<LatLngLiteral> = [
        {lat: 46.288994, lng: 7.9368406},
        {lat: 47.3775499, lng: 8.4666756},
        {lat: 47.3670099, lng: 9.7004806}
    ]

    constructor() {
    }

    ngOnInit(): void {
        this.stops.push(this.createStop(46.288994, 7.9368406))
        this.stops.push(this.createStop(47.3775499, 8.4666756))
        this.stops.push(this.createStop(47.3670099, 9.7004806))
    }

    private createStop(lat: number, lng: number): any {
        return {lat, lng}
    }

    public addMarker(newDestination: TripsterDestination): void {
        const coordinates = newDestination.coordinates
        const stop = this.createStop(coordinates.latitude, coordinates.longitude)
        this.stops.push(stop)
        this.paths.push(stop)
    }
}