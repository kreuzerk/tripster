import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {TripsterMapModule} from './tripster-map/tripster-map.module';
import {TripsterEditorComponent} from './tripster-editor/tripster-editor.component';
import {TripsterDestinationComponent} from './tripster-editor/tripster-destination/tripster-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TripsterAddressSearchComponent} from './tripster-editor/tripster-destination/tripster-address-search/tripster-address-search.component';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        TripsterEditorComponent,
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
