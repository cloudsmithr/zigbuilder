import { Routes } from '@angular/router';
import {BlogComponent} from './modules/blog/blog.component';
import { EditorComponent } from './modules/editor/editor.component';

export const routes: Routes = [
    {
        path: '',
        component: EditorComponent,//BlogComponent,
        title: 'Ryan\'s Blog',
    },
    {
        path: 'editor',
        component: EditorComponent,
        title: 'zigBuilder Blog Editor',
    },
];
