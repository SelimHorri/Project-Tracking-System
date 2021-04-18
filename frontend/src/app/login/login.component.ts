import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username: string = "";
  public password: string = "";
  
  constructor(private loginService: LoginService) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  public authenticate(): void {
    console.log(this.username + " $$ " + this.password);
    alert(this.username + " $$ " + this.password);
  }
  
  
  
}
