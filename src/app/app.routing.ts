/**
 * Created by kevinkreuzer on 03.08.17.
 */
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: 'editor', pathMatch: 'full'},
    {path: 'editor', loadChildren: './tripster-editor/tripster-editor.module#TripsterEditorModule'}
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes)
