import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {TripsterMapModule} from './tripster-map/tripster-map.module';
import {TripsterEditorComponent} from './tripster-editor/tripster-editor.component';
import {TripsterDestinationComponent} from './tripster-editor/destination/tripster-destination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        TripsterEditorComponent,
        TripsterDestinationComponent
    ],
    imports: [
        BrowserModule,
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
