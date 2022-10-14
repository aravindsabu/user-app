import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  username=""
  password=""
  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="123456"){
      this.myrouter.navigate(["/done"])
    }
    else{
      alert("invalid credential")
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
