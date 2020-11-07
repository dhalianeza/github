import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
//import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // public users:string;
  users:any;
  user:User;
  

  private username:string;
  private access_token='79ad495f3601b6d0d0d60a228b478698a058faa8';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='dhalianeza';
    this.access_token='79ad495f3601b6d0d0d60a228b478698a058faa8';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
   }
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  

  }

}
