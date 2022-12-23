import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = "DanielLepeVegaInputApp";

  public response : any;
  public dataSource : any;
  constructor (private http: HttpClient){
    this.http.get("https://63a4c976821953d4f2bcd1eb.mockapi.io/data/item").subscribe(
        (response) => {this.response = response 
        this.dataSource = this.response
        console.log(response)}  
    );
  }

  public displayData(){
    if(this.showAll == true){
      this.showAll = false;
    } else {
      this.showAll = true;
    }
  }
  public showAll = false;
}