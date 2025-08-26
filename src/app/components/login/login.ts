import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login as LoginModel } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData: LoginModel = {};

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.loginData.username, this.loginData.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        // Handle login failure
        console.log('Login failed');
      }
    });
  }
}
