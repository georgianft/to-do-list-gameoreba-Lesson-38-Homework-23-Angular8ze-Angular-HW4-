import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-test',
  templateUrl: './user-form-test.component.html',
  styleUrls: ['./user-form-test.component.css']
})
export class UserFormTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pTagi="";
  submitUserForm(form) {
    // Task 1 v1
    // if (form.value.username.length<6) {
    //   alert("User Form is invalid");
    // }
    // else {
    //   console.log(form);
    // }
    // Task 2 v1
    console.log(form);
    // if (form.value.username.length<6) {
    //   alert(`Please enter Min 6 symbol, your entered symbol is ${form.controls.username.errors.minlength.actualLength}`);
    //   console.log(form);
    //   this.pTagi = `Please enter Min 6 symbol, your entered symbol is ${form.controls.username.errors.minlength.actualLength}`
    // }
    // else {
    //   this.pTagi="you are logged in"
    //   console.log(form);
    // }  
  }
}
