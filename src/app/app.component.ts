import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';
//import { GroceryInputComponent } from '/grocery-input/grocery-input'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Grocery List';
  groceryName: groceries[];
}
