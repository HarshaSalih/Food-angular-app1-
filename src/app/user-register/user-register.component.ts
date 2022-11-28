import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  email=""
  password=""
  confirmPassword=""



  readValues=()=>
  {
    let data:any={"name":this.name,"email":this.email,"password":this.password,"confirmPassword":this.confirmPassword}
    console.log(data)
  }

}
