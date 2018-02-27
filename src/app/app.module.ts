import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GroceryInputComponent } from './grocery-input/grocery-input.component';
import { GroceryListItemsComponent } from './grocery-list-items/grocery-list-items.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryInputComponent,
    GroceryListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
