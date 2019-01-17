import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: object;
  name = '';
  password = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(email: string, password:string): void {
    this.loginService.postLogin(email,password)
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      });
  }
}
