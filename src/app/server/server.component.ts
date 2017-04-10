import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = "TestServer";
	serverCreated = false;
  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer =  true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreated = true;
  	this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }


}
