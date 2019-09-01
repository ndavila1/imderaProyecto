import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afsAuth: AngularFireAuth) { }

  loginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  changeNameuser() {
    var user = this.afsAuth.auth.currentUser;
    console.log(user);
    /**user.updateProfile({
      displayName: "Jane Q. User",
    }).then(function () {
      console.log(user);
    }).catch(function (error) {
      console.log('erro', error)
    });*/
  }
}
