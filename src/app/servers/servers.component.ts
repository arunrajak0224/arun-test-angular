import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  // String Interpolation
    // we cant use property binding , cant alter propertys of html
    constructor(){
      setInterval(()=>{
        this.disabled=false
      },2000)
    }
    //property here
    disabled=true;
    serverStatus='hii server this is a message from .ts to template (html)'
    addNewServer='no server added'
    onAddNewServer(){
      this.addNewServer='Added New Server';
    }
    onRemoveNewServer(){
      this.addNewServer='no server added';
    }
    Input='something'
    onInput(event:Event){
      this.Input=(<HTMLInputElement>event.target).value
    }


   

}
