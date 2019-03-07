import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model: any = {};
 @Input() valuesfromHome: any;
 @Output() cancelRegister = new EventEmitter();

  constructor(private http: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register()  {
    this.http.register(this.model).subscribe(() => {
      this.alertify.success('you are registered');
    }, error => {  this.alertify.error(error); });
  }
  cancel() {
    this.cancelRegister.emit(false);
   }
}
