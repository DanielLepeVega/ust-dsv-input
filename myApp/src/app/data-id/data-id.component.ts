import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-data-id',
  templateUrl: './data-id.component.html',
  styleUrls: ['./data-id.component.css']
})
@Injectable()
export class DataIdComponent {
  public response : any;
  public dataSource : any;
  constructor (private http: HttpClient){
    this.http.get("https://63a4c976821953d4f2bcd1eb.mockapi.io/data/item").subscribe(
        (response) => {this.response = response 
        this.dataSource = this.response
        console.log(response)}  
    );
  }

  public myData = {};

  public getOneElementId(){

    const input = document.getElementById('input_id') as HTMLInputElement | null;
    const value = input?.value;
    if (input != null) {
      console.log(input.value); // 👉️ "Initial value"
    }
    input?.addEventListener('input', function (event) {
      const target = event.target as HTMLInputElement;
      console.log(target.value);
    })
    for (let i = 0; i < this.dataSource.length; i++) {
      if(this.dataSource[i]["id"] == value){
        this.myData = this.dataSource[i];
      }
    }
    ;
    this.dataSource = this.myData;
    return this.dataSource;
  }

  displayedColumns: string[] = ['serverStack', 'ID', 'infoMessage', 'errorMessage', 'message', 'status',
  'paynumber', 'status_pay', 'actualPickupDate', 'actualDeliveryDate', 'originCity', 'destinationCity',
  'searchCriteria', 'trackingComments', 'comment_object', 'user_object', 'timestamp_object', 
  'dateTime_object', 'paynumber_items', 'status_items', 'actualPickupDate_items', 'actualDeliveryDate_items',
  'originCity_items', 'destinationCity_items', 'searchCriteria_items', 'trackingComments_items', 
  'comment_items', 'user_items', 'timestamp_items', 'dateTime_items'];
}