import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class MeService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  baseAPI1=  'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  baseAPI2= 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies'
  constructor(private http: HttpClient) { }
  signupUser(values) {
    let body = {
      name: values.name,
      password: values.pass, 
      confirmpassword: values.cpass
    }
    return this.http.post(this.baseAPI, body).map(data => {
      console.log("2",data)
    })
  }
  loginuser(val) {
    let logindata = {
      name: val.name,
      pass: val.pass,
    }
    return this.http.post(this.baseAPI1, logindata).map(logindata => {
      localStorage.setItem("logdata",JSON.stringify(logindata))
      console.log("1",logindata)
    })
  }
  horrorMovie(value){
    let movies ={
      //id:JSON.parse(localStorage.getItem("logpage")).success._id,
      id:'5d763bd36867880007c2566b',
      name: value.name,
      language: value.language,
      genre: value.genre
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies',movies).map(data => {
      console.log("3",data)
    })
  }
 }


















//     if(data.password==data.confirm){
//       return this.http.post(this.base,body).map(data => {
//         console.log("1", data)
//       })
//     }
//     else{
//         alert("Check Requirements");
//     }
//   }
//   signuplogin(data){
//     let body = {
//       name: data.username,
//       pass: data.password
//     }
//     return this.http.post(this.baseAPI,this.baseAPI1 ,body).map(data =>{
//       console.log("3",data)
//     })
//   }
// }
