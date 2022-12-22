import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
@Injectable()
export class DataComponent {
  public response = {};

  constructor (private http: HttpClient){
    this.http.get("https://63a4c976821953d4f2bcd1eb.mockapi.io/data/item").subscribe(
        (response) => {this.response = response
        console.log(response)}  
        
    );
  }

  dataSource = this.response;

  displayedColumns: string[] = ['serverStack', 'infoMessage', 'errorMessage', 'message', 'status',
'paynumber', 'status_pay', 'actualPickupDate', 'actualDeliveryDate', 'originCity', 'destinationCity',
'searchCriteria', 'trackingComments', 'comment_object', 'user_object', 'timestamp_object', 
'dateTime_object', 'paynumber_items', 'status_items', 'actualPickupDate_items', 'actualDeliveryDate_items',
'originCity_items', 'destinationCity_items', 'searchCriteria_items', 'trackingComments_items', 
'comment_items', 'user_items', 'timestamp_items', 'dateTime_items'];
}