import { Component, OnInit } from '@angular/core';

import { MeService } from '../me.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit { 
 public value=[
   {
     name: 'Anabelle',
     language:'English',
     genre:'Horror'
   },
   
    {
      name: 'Alice',
      language:'English',
      genre:'Fantasy'
    },
    {
      name: 'KgF',
      language:'Kannada',
      genre:'Drama'
    },{
    name: 'Orange',
    language:'Telugu',
    genre:'Drama'
},
  {
    name: 'Pink',
    language:'Hindi',
    genre:'Thriller'
  }

 ]
  value1: any;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    let headers={'id':JSON.parse(localStorage.getItem("logdata")).success._id}
 this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id).subscribe(data =>{
  console.log("1",data);
  this.value1=data['success'].movies})
  console.log(this.value);
  }
}

