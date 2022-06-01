import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'demo_prjkt';
  showPassword: boolean = false;
  username='abc@gmail.com';
  password=1234;

  base = new FormGroup({
    UserId: new FormControl('', [Validators.required,Validators.email]),
    Password: new FormControl('', [Validators.required])
  })

  togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }


 get passwordValidator() {
  return this.base.get('Password');
}


get idValidator() {
  return this.base.get('UserId');

}
Rflag!:boolean;
login(base:any){debugger;
if(this.username==base.UserId && this.password==base.Password){
  alert("Login Successful");
  this.Rflag=true;
  console.log(this.Rflag);
}

else{
  alert("Incorrect Username or Passowrd")
}

}
  constructor() { }

  ngOnInit(): void {
  }

}
