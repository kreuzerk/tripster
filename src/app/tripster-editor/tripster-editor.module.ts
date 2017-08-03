import {CommonModule} from '@angular/common';
/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TripsterAddressSearchComponent} from './tipster-inputs/tripster-destination/tripster-address-search/tripster-address-search.component';
import {TripsterDestinationComponent} from './tipster-inputs/tripster-destination/tripster-destination.component';
import {TripsterInputsComponent} from './tipster-inputs/tripster-inputs.component';
import {TripsterMapComponent} from './tripster-map/tripster-map.component';
import {TripsterEditorComponent} from './trispter-editor.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AgmCoreModule
    ],
    declarations: [
        TripsterEditorComponent,
        TripsterInputsComponent,
        TripsterDestinationComponent,
        TripsterAddressSearchComponent,
        TripsterMapComponent
    ],
    exports: [TripsterEditorComponent]
})
export class TripsterEditorModule {
}
