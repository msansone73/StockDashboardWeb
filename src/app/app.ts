import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
import { StockComponent } from './stock/stock';
import { Transactions } from './transactions/transactions';
import { Provents } from './provents/provents';
import { Admin } from './admin/admin';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  
})
export class App {
}
