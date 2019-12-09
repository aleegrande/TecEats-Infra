import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../models/user";
import { auth } from "firebase/app";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;


  constructor(public afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
  //registro
  async onRegister(user: User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password)

    } catch (error) {
      console.log("error con el egistro", error);
    }
  }


  //login
  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      )

    } catch (error) {
      console.log("Error en el logeo", error);

    }
  }
  loginGitUser(){
    return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginFacebook(){
   return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
 }
 
 loginTwiter(){
   return this.afsAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
 }
}
