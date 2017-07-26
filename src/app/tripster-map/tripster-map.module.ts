/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {NgModule} from '@angular/core';
import {TripsterMapComponent} from './tripster-map.component';
import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [AgmCoreModule, CommonModule],
    declarations: [TripsterMapComponent],
    exports: [TripsterMapComponent]
})
export class TripsterMapModule {
}