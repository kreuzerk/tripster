import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {TripsterMapModule} from './tripster-map/tripster-map.module';
import {TripsterEditorInputsComponent} from './inputs/tripster-editor-inputs.component';
import {TripsterDestinationComponent} from './inputs/tripster-destination/tripster-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TripsterAddressSearchComponent} from './inputs/tripster-destination/tripster-address-search/tripster-address-search.component';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        TripsterEditorInputsComponent,
        TripsterDestinationComponent,
        TripsterAddressSearchComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfc-VRTrjcQvepK-TbjJF_JG22BAZkWIk',
            libraries: ['places']
        }),
        TripsterMapModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
