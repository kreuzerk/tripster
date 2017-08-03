import {AgmCoreModule} from '@agm/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {CoreModule} from './core/core.module';
import {TripsterEditorModule} from './tripster-editor/tripster-editor.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfc-VRTrjcQvepK-TbjJF_JG22BAZkWIk',
            libraries: ['places']
        }),
        TripsterEditorModule,
        appRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
