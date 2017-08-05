/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LocalStorageService} from './localStorage/localStorage.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
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
