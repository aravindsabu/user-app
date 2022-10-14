import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {

  constructor() { }
  name=""
  number=""
  gender=""
  emailid=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  parentname=""
  password=""
  confirmpassword=""
  readvalues=()=>{
    let data={
      "name":this.name,
      "number":this.number,
      "gender":this.gender,
      "emailid":this.emailid,
      "address":this.address,
      "pincode":this.pincode,
      "bloodgroup":this.bloodgroup,
      "dob":this.dob,
      "age":this.age,
      "parentname":this.parentname,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
