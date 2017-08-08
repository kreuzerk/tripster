import {AgmCoreModule} from '@agm/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {CoreModule} from './core/core.module';
import {TripsterEditorModule} from './tripster-editor/tripster-editor.module';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireDatabaseModule} from 'angularfire2/database';

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
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        TripsterEditorModule,
        appRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
