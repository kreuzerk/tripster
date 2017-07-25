/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tripster-map',
    templateUrl: './tripster-map.html',
    styleUrls: ['./tripster-map.css'],
    encapsulation: ViewEncapsulation.None
})
export class TripsterMapComponent {

    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;

}