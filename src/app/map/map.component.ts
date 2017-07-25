/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tripster-map',
    templateUrl: './map.html',
    styleUrls: ['./map.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent {

    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;

}