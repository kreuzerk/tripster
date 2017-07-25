/**
 * Created by kevinkreuzer on 25.07.17.
 */
import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [AgmCoreModule],
    declarations: [MapComponent],
    exports: [MapComponent]
})
export class MapModule {
}