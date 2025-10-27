import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
    },
    {
        path: 'noEncontrado',
        component: Notfound
    },
    {
        path: '**',
        component: Notfound
    }
];
