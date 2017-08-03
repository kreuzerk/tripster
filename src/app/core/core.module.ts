/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {throwIfAlreadyLoaded} from './module-import-guard';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'core module');
    }
}
