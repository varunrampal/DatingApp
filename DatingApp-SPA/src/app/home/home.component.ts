import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  value: any;
  constructor() {
   this.value = '';
   }

  ngOnInit() {
  }

  registerToggle() {
     this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
     this.registerMode = registerMode;

  }
}
