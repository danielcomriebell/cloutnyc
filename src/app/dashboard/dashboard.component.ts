import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  titleAlert: String = 'This field is required';
  instagram_handle: String = '';
  courses: any[];
  updateFlag: number;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private authService: AuthService, private router: Router) {
    this.rForm = fb.group({
      'instagram_handle': [null, Validators.required],
    })
    db.list(`/users/${this.authService.currentUserId}`)
      .subscribe(courses =>{
        this.courses=courses;
        this.updateFlag = this.courses.length;
      });
  }

  pushData(post){
    this.instagram_handle = post.instagram_handle;
    this.db.object(`/users/${this.authService.currentUserId}`).update({name: this.authService.currentUserDisplayName});
    this.db.object(`/users/${this.authService.currentUserId}`).update({email: this.authService.currentUserEmail});
    this.db.object(`/users/${this.authService.currentUserId}`).update({instagram_handle: this.instagram_handle});
    this.db.object(`/users/${this.authService.currentUserId}`).update({status: "under review"});
  }

  updateData(post){
    this.instagram_handle = post.instagram_handle;
    this.db.object(`/users/${this.authService.currentUserId}`).update({instagram_handle: this.instagram_handle});
  }

  // addPost(post){
  // }
  //
  ngOnInit() {
  }

}
