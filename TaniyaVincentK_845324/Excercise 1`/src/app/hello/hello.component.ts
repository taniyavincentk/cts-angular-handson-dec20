import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<div>
  
  <h4>Hello component {{message}}</h4>

  </div>`,

  styleUrls: ['./hello.component.css']
})

export class HelloComponent  {

  message="we are learning angular"

}
