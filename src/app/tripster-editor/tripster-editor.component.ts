/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html'
})
export class TripsterEditorComponent {

    private stopsCounter = 1;
    stops = [this.stopsCounter];

    public addStop() {
        this.stopsCounter += 1
        this.stops.push(this.stopsCounter)
    }
}
