import { Component, OnInit,Input } from '@angular/core';
import {LoginService} from "./../../services/login/login.services";
/*
 ng generate component dashboard en component
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private service:LoginService) { }

  @Input()  private users:any;

  ngOnInit() {

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

}
