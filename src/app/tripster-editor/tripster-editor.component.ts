/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'tripster-editor',
    templateUrl: './tripster-editor.html'
})
export class TripsterEditorComponent {

    private static stopsCounter = 1;

    public getStopCount(): number {
        return TripsterEditorComponent.stopsCounter;
    }
}
