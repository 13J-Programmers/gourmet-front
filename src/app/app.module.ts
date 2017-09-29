import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';

import { BgImgDirective } from './shared/bg-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    BgImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
