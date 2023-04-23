import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxAngularQueryBuilderModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
