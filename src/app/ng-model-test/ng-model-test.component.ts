import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-test',
  templateUrl: './ng-model-test.component.html',
  styleUrls: ['./ng-model-test.component.css']
})
export class NgModelTestComponent implements OnInit {
  firstName: string;
  lastName: string;
  favoritePet: string;
  constructor() { }

  ngOnInit(): void {
    this.firstName = "asd";
    this.lastName = "dsa";
  }

  submit() {
    console.log(`firstname: ${this.firstName}, lastname: ${this.lastName}`);
    console.log('favorite pet', this.favoritePet);
  }
}
