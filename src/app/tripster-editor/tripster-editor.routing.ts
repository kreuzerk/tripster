/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {RouterModule, Routes} from '@angular/router';
import {TripsterEditorComponent} from './tripster-editor.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
    {path: '', component: TripsterEditorComponent}
]

export const tripsterEditorRoutes: ModuleWithProviders = RouterModule.forChild(routes)
