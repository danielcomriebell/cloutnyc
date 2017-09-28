import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  showApply:boolean=false;
  user = null;
  // constructor(private authService: AuthService, private router: Router) {
  // }

  ngOnInit() {
  }

//   showApplyContainer(){
//     this.showApply = !this.showApply;
//   }
//
//   signInWithFacebook() {
//    this.authService.signInWithFacebook()
//    .then((res) => {
//        this.router.navigate(['dashboard'])
//      })
//    .catch((err) => console.log(err));
//  }
//
//  signInWithGoogle() {
//   this.authService.signInWithGoogle()
//   .then((res) => {
//       this.router.navigate(['dashboard'])
//     })
//   .catch((err) => console.log(err));
// }


}
