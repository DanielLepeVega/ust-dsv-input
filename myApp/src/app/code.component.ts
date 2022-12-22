import { Component } from '@angular/core';
import response from './data.json';
@Component({
  selector: 'app-root',
  templateUrl: './code.component.html'
})

export class CodeComponent {
    serverStack = response.serverStack;
    infoMessage = response.infoMessage;
    errorMessage = response.errorMessage;
    message = response.message;
    status = response.status;

    paynumber = response.object[0];
    status_pay = response.object[1];
    actualPickupDate = response.object[2];
    actualDeliveryDate = response.object[3];
    originCity = response.object[4];
    destinationCity = response.object[5];
    searchCriteria = response.object[6];
    trackingComments = response.object[7];

    comment_object = 'string';
    user_object = 'string';
    timestamp_object = 'string';
    dateTime_object = 'string';

    paynumber_items = response.items[0];
    status_items = response.items[1];
    actualPickupDate_items = response.items[2];
    actualDeliveryDate_items = response.items[3];
    originCity_items = response.items[4];
    destinationCity_items = response.items[5];
    searchCriteria_items = response.items[6];
    trackingComments_items = response.items[7];

    comment_items = 'string';
    user_items = 'string';
    timestamp_items = 'string';
    dateTime_items = 'string';
}