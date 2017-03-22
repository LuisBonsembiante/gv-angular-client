import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import {Observable} from '../../../../node_modules/rxjs/Rx';
import '../../../../node_modules/rxjs/add/operator/map'
import {JQueryStyleEventEmitter} from "rxjs/observable/FromEventObservable";
import {LoginService} from "./../../services/login/login.services";

/*
Define el componente con:
 * un selector que va a ser puesto como tag en el componente en uso.
 * el providers define los providers a usarse en este componente
 * el template puede ser escrito en el componente, o se le pasa una url con el html
 */
@Component({
  selector: 'login-component',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  // Comment
  constructor( private service:LoginService) { }

  @Input() message;

  @Input()  private users:any;

  @Output() update = new EventEmitter();

  onClick(event){
    console.log(event);

    this.service.login()
       .subscribe(
         data => {
           console.log('Success');
           console.log("usuarios" + data);
           this.users = data;

           //this.router.navigate(['/']);
         },
         error => {
           console.log('Error');
           //this.loading = false;
         }
       );





  }



  ngOnInit() {
  }

}
