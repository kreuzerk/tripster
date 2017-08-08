/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TripsterAddressSearchComponent} from './tipster-inputs/tripster-destination/tripster-address-search/tripster-address-search.component';
import {TripsterDestinationComponent} from './tipster-inputs/tripster-destination/tripster-destination.component';
import {TripsterInputsComponent} from './tipster-inputs/tripster-inputs.component';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';
import {TripsterEditorComponent} from './tripster-editor.component';
import {AgmCoreModule} from '@agm/core';
import {tripsterEditorRoutes} from './tripster-editor.routing';
import {NewTripComponent} from './new-trip/new-trip.component';
import {TripUIDService} from './shared/services/trip-uid.service';
import {TripService} from './shared/services/trips.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AgmCoreModule,
        tripsterEditorRoutes
    ],
    declarations: [
        TripsterEditorComponent,
        TripsterInputsComponent,
        TripsterDestinationComponent,
        TripsterAddressSearchComponent,
        TripsterMapComponent,
        NewTripComponent
    ],
    exports: [TripsterEditorComponent, NewTripComponent],
    providers: [
        TripService,
        TripUIDService
    ]
})
export class TripsterEditorModule {
}
