/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {NgModule} from '@angular/core';
import {TripsterMapComponent} from './tripster-map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [AgmCoreModule],
    declarations: [TripsterMapComponent],
    exports: [TripsterMapComponent]
})
export class TripsterMapModule {
}