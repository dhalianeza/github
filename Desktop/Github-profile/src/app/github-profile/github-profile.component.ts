import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile-service/profile.service';
//import {Repository} '../repository-class/repository';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
 
 
 public username='dhalianeza';
 public  getProfileInfo:string;
 user:User;
//  findUser(username){
//    this. getProfileInfo='';
//    this.username=username;
//    this.ngOnInit();
//  }



  constructor(public userRequest:ProfileService,public repoRequest:ProfileService) { }

  ngOnInit() {
    // this.userRequest.users(this.username);
    // this.user=this.userRequest.user;
    //this.repoRequest.use
  
   }
  

}
