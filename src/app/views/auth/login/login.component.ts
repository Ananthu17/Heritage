import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private auth: AuthService,) {}

  ngOnInit(): void {}

  onLogin(data){
    console.log("Data", data)
    this.auth.login(data)
  }
}
