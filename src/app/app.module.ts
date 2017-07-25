import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {TripsterMapModule} from './tripster-map/tripster-map.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfc-VRTrjcQvepK-TbjJF_JG22BAZkWIk'
        }),
        TripsterMapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
