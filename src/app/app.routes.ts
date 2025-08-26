import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { StockComponent } from './components/stock/stock';
import { Transactions } from './components/transactions/transactions';
import { Provents } from './components/provents/provents';
import { Admin } from './components/admin/admin';
import { About } from './components/about/about';
import { UploadExcelComponent } from './components/upload-excel/upload-excel';
import { Login } from './components/login/login';
import { Layout } from './layout/layout';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
        path: '',
        component: Layout,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'stock', component: StockComponent },
            { path: 'transactions', component: Transactions },
            { path: 'provents', component: Provents },
            { path: 'admin', component: Admin },
            { path: 'about', component: About },
            { path: 'upload-excel', component: UploadExcelComponent }
        ]
    },
    { path: '**', redirectTo: 'home' }
];