import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '../grocery-list.service';

@Component({
  selector: 'app-grocery-list-items',
  templateUrl: './grocery-list-items.component.html',
  styleUrls: ['./grocery-list-items.component.css']
})
export class GroceryListItemsComponent implements OnInit {
  currentGrocery: string;
  constructor(public _grocerylist: GroceryListService) {
  
 
    this.currentGrocery = _grocerylist.currentGrocery
}
 ngOnInit() {
  
  }
}