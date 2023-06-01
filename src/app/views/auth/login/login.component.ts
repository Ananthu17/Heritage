import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService,) {}

  ngOnInit(): void {}

  onLogin(data){
    console.log("Data", data)
    this.auth.login(data)
    console.log(this.auth.login(data))
  }
}
