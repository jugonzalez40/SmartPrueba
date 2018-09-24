import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { MenuService } from './services/menu.service';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';

// Services
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
