import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable-test',
  templateUrl: './template-variable-test.component.html',
  styleUrls: ['./template-variable-test.component.css']
})
export class TemplateVariableTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logValue(value: string) {
    console.log(value);
  }
}
