import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { MilesToCmPipe } from './pipes/miles-to-cm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    MilesToCmPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
