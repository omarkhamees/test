import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: MsalService) { }
  loginForm: FormGroup
  showPassword: boolean = false
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  onLoginFormSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid)
      this.router.navigate(["/home-page/leads-page"])
    else
      this.loginForm.markAllAsTouched()
  }

  logWithMicrosoft() {
    this.authService.loginPopup().subscribe((data) => {
      this.router.navigate(["/home-page/leads-page"])
    })
  }

}
