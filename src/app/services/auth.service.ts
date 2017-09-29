import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private userName: String;
  authState: any = null;
  // authenticated: any = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) =>{
        this.authState = user;
        // if(user){
        //   this.userDetails = user;
        //   // this.userName = _firebaseAuth.authState;
        //
        //   console.log(this.userDetails);
        //   // console.log(this.userName);
        //   // console.log("This is working" + this.user);
        // }
        // else{
        //   this.userDetails=null;
        // }
      }
    )
  }

  get authenticated():boolean{
    return this.authState !== null;
  }

  get currentUser(): any{
    return this.authenticated ? this.authState: null;
  }

  get currentUserObservable(): any{
    return this.user;
  }

  get currentUserEmail(): string{
    return this.authState.email;
  }

  get currentUserId(): string{
    return this.authenticated ? this.authState.uid: '';
  }

  get currentUserAnonymous(): boolean{
    return this.authenticated ? this.authState.isAnonymous:false;
  }

  get currentUserDisplayName(): string{
    if(!this.authState){
      return 'Guest';
    }
    else if (this.currentUserAnonymous){
      return 'Anonymous'
    }
    else{
      return this.authState['displayName'] || 'User without a Name';
    }
  }



  signInWithFacebook() {
      return this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      )
    }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  private socialSignIn(provider){
    return this._firebaseAuth.auth.signInWithPopup(provider)
    .then((credential) => {
      this.authState = credential.user;
      this.updateUserData()
    })
    .catch(error => console.log(error));
  }

  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  private updateUserData():void{
    let path = `users/${this.currentUserId}`;
    let data = {
      email: this.authState.email,
      name: this.authState.displayName
    }
    this.db.object(path).update(data).catch(error=>console.log(error));
  }

}
