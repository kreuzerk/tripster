/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LatLngLiteral} from '@agm/core';
import {TripsterPath} from './tripster-path.model';
import {TripsterDestination} from '../tipster-inputs/tripster-destination/tripster-destination.model';
import {TripService} from '../trips.service';

@Component({
    selector: 'tripster-map',
    templateUrl: './tripster-map.html',
    styleUrls: ['./tripster-map.css'],
    encapsulation: ViewEncapsulation.None
})
export class TripsterMapComponent implements OnInit {

    lat = 46.288994
    lng = 7.9368406
    destinations: Array<LatLngLiteral> = []
    paths: Array<TripsterPath> = []

    constructor(private tripsService: TripService) {
    }

    ngOnInit(): void {
        this.tripsService.getDestinations()
            .subscribe((destination: TripsterDestination) => this.createNewDestination(destination))
    }

    private createLatLngLiteral(lat: number, lng: number): any {
        return {lat, lng}
    }

    private createNewDestination(newDestination: TripsterDestination): void {
        const coordinates = newDestination.coordinates
        const destination = this.createLatLngLiteral(coordinates.latitude, coordinates.longitude)
        this.drawMarker(destination)
        this.drawPath(destination)
    }

    private drawMarker(destination: LatLngLiteral): void {
        this.destinations.push(destination)
    }

    private drawPath(destination: LatLngLiteral): void {
        const lastPath = this.paths[this.paths.length - 1]
        if (!lastPath) {
            this.paths.push(new TripsterPath(destination))
        } else {
            lastPath.setEndpoint(destination)
            this.paths.push(new TripsterPath(destination))
        }
    }
}
