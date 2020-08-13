import { Component, AfterViewInit, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userData = {
      usuario: "luiscoba88@yahoo.com",
      password: "123",
    };
    this.authService
      .login(userData)
      .subscribe((res) => console.log("Loginnnnnnn"));
  }
}
