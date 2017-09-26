import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFire } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  showApply:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  showApplyContainer(){
    this.showApply = !this.showApply;
  }

}
