import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MeService } from '../me.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm : FormGroup;
  constructor(public router: Router, private fb:FormBuilder, private http: MeService) { 
    this.signupForm=this.fb.group({
      name: new FormControl(),
      pass: new FormControl(),
      cpass: new FormControl(),
    })
  }

  ngOnInit() {
  }
  log(){
  this.router.navigateByUrl('login');
}
signup(value){
  console.log(value);
  this.http.signupUser(value).subscribe(data =>{
    console.log("2",data);
  })
}
}
