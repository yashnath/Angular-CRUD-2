import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  data3: any;
  data5: any;
  flag = 'cancel';
  
  base = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  })


  base1 = new FormGroup({
    id: new FormControl('', [Validators.required])
  })


  val1!: any;
  val2!: any;
  val3!: any;
  display = false;
  display1 = false;
  display2 = false;
  display3 = false;

  
  constructor(private data1: CrudService) {
    data1.getData().subscribe((data2) => {
      this.data3 = data2
    })
  }


  getS(data: number) {

    return this.data1.getdataP(data).subscribe((data4) => {
      this.data5 = data4;
      if (this.data5.length != 0) {

        this.flag = 'yes';

      }

      else if (this.data5.length == 0) {
        this.flag = 'no';
      }

      else {
        this.flag = 'cancel'


      }

      this.val1=data4[0].id;
      this.val2=data4[0].Name;
      this.val3=data4[0].age;

    })



  }



  show() {

    this.display = true;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.flag = 'cancel'
  }


  show1() {

    this.display1 = true;
    this.display = false;
    this.display2 = false;
    this.display3 = false;
    this.flag = 'cancel'

  }

  show2() {

    this.display2 = true;
    this.display3 = false;
    this.display = false;
    this.display1 = false;
    this.flag = 'cancel'
  }

  show3() {

    this.display3 = true;
    this.display = false;
    this.display1 = false;
    this.display2 = false;
    this.flag = 'cancel'
  }

  toggle() {
    this.display = !this.display;
    window.location.reload();
  }

  toggle1() {
    this.display1 = !this.display1;
    window.location.reload();
  }
  toggle2() {
    this.display2 = !this.display2;
    window.location.reload();
  }
  toggle3() {
    this.display3 = !this.display3;
    window.location.reload();
  }


  get userValidator() {
    return this.base.get('Name');
  }

  get ageValidator() {
    return this.base.get('age');
  }


  get idValidator() {
    return this.base1.get('id');

  }

  add(base: NgForm) {

  
    return this.data1.addon(base).subscribe((data4) => {
      this.data5 = data4;
      this.toggle;
      window.location.reload();
    })

  }


  puUpdate(base1: any) { 
    return this.data1.updatePut(base1).subscribe((data4) => {
      debugger;
      this.data5 = data4;
      this.toggle2;
      window.location.reload();
    })
  }

  paUpdate(base1: any) { 
    return this.data1.UpdatePatch(base1).subscribe((data4) => {
      this.data5 = data4;
      this.toggle3;
      window.location.reload();
    })
  }

flag1!:string;
Adelete(base:any){
  this.getS(base);
  if(base.id ==null)
  {
this.flag1 = 'no'
  }


  return this.data1.DeletA(base).subscribe((data4) => { debugger;
    this.toggle3;
    window.location.reload();
  })
}




  ngOnInit(): void {

    

}
}