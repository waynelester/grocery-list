import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Grocery List';
}
