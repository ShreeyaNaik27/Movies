import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MeService } from '../me.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie : FormGroup ;
name: any;
moviename:any;
language:any;
genre:any;

  constructor(public r: Router, private fb : FormBuilder, private http: MeService)
{
  this.movie = this.fb.group({
    name: new FormControl(),
    language: new FormControl(),
    genre: new FormControl()
  })
}
  ngOnInit() {

  }
rate(){
  this.r.navigateByUrl('album');
}
horror(value){
  console.log(value);
  this.http.horrorMovie(value).subscribe(data =>{
    console.log("3",data);
  })
}
}
