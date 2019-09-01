import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(public afAuth: AngularFireAuth, private router: Router,
    private authService: AuthServiceService) {
    this.loginForm = this.createFormGroup();

  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  onLoginUser() {
    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password)
      .then((res) => {
        (this.authService.changeNameuser());
        this.router.navigate(['Herramientas/Escenario']);
      }).catch(err => console.log('err', err.mesaage));
  }
  onLogout() {
    this.authService.logoutUser();
  }
}
