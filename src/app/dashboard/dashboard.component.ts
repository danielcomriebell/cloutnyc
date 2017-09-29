import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: any[];

  constructor(private db: AngularFireDatabase, private authService: AuthService, private router: Router) {
    // courses: any[];
    db.list(`/users/${this.authService.currentUserId}`)
      .subscribe(courses =>{
        this.courses=courses;
        console.log(this.courses);
      });

    // db.list('/courses').push('new choppa');
    // db.list('/courses').push('YUH');

  }

  pushData(gamertag: string, gamertag2:string, instagram_handle:string){
    // gamertag
    // this.db.list[ `/customers/${this.authService.currentUserId}`]
    // this.db.list(`/users/${this.authService.currentUserId}`);
    this.db.object(`/users/${this.authService.currentUserId}`).update({name: gamertag});
    this.db.object(`/users/${this.authService.currentUserId}`).update({customer_id: gamertag2});
    this.db.object(`/users/${this.authService.currentUserId}`).update({instagram_handle: instagram_handle});
    // this.db.object(`/users/${this.authService.currentUserId}`).update({status: "under review"});



    // this.db.list('/customers/customer1').push(gamertag);
    // this.db.list('/customers/customer1').push(gamertag2);

  }

  ngOnInit() {
  }

}
