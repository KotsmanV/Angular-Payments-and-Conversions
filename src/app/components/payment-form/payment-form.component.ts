import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  payeeName:string = "";
  paymentDate: string = "";
  amount: string = "";
  height: number = 0;
  miles: number = 0;

  motorcycle = {
    make: "Yamaha",
    model: "Tenere",
    cc: "700",
    year: 2021
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event:any){
    this.payeeName = event.target.value;
  }

  onDateChange(event:any){
    this.paymentDate = event.target.value;
  }

  onPaymentChange(event:any){
    this.amount = event.target.value;
  }

  onHeightChange(event:any){
    this.height = parseFloat(event.target.value);
  }

  onMilesChange(event:any){
    this.miles = parseFloat(event.target.value);
  }


}
