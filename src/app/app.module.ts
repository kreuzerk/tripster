import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {MapModule} from './map/map.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfc-VRTrjcQvepK-TbjJF_JG22BAZkWIk'
        }),
        MapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
