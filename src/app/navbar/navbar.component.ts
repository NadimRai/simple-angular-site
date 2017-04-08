import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  branding = " Simple Angular Site";
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor(){
  	this.jbtHeading="Hello World";
  	this.jbtText = "This is a simpe hero unit";
  	this.jbtBtnText = "Read More";
  	this.jbtBtnUrl = "/about";
  }


}
