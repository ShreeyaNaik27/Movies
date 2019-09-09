import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MeService } from '../me.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform: FormGroup;
baseapi='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
constructor(private a:Router,private fb:FormBuilder,private http:MeService,private hp:HttpClient) {
  this.loginform = this.fb.group({
    name: new FormControl(),
    pass: new FormControl(),
  })
}
ngOnInit() {
}
see()
{
this.a.navigateByUrl('movie')
}
login(val) {
  this.http.loginuser(val).subscribe(data=>{
   console.log(data)
  })
}
}