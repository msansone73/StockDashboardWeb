import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';
import { Stock } from './stock/stock';
import { Transactions } from './transactions/transactions';
import { Provents } from './provents/provents';
import { Admin } from './admin/admin';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home, Stock, Transactions, Provents, Admin, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
