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
	serverStatus: string = 'offline';
  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer =  true;
  	}, 2000);
  	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreated = true;
  	this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  getServerStatus(){
   return this.serverStatus;
  }

  getColor(){
  	return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
