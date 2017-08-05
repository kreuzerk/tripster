/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LocalStorageService} from './localStorage/localStorage.service';
import {TripsterEditorModule} from '../tripster-editor/tripster-editor.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TripsterEditorModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    providers: [LocalStorageService]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'core module');
    }
}
