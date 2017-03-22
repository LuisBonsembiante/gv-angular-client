import { Component,Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',

  template:`<div>
 <ul>
 <login-component>

  </login-component>
 </ul>
</div>`

})
export class AppComponent {
  title = 'Get Started!';
  constructor(private router: Router,
              private route: ActivatedRoute){}

}
