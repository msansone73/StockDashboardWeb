import { Routes } from '@angular/router';
import { Home } from './home/home';
import { StockComponent } from './stock/stock';
import { Transactions } from './transactions/transactions';
import { Provents } from './provents/provents';
import { Admin } from './admin/admin';
import { About } from './about/about';
import { UploadExcelComponent } from './upload-excel/upload-excel';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'stock', component: StockComponent },
    { path: 'transactions', component: Transactions },
    { path: 'provents', component: Provents },
    { path: 'admin', component: Admin },
    { path: 'about', component: About },
    { path: 'upload-excel', component: UploadExcelComponent }
];