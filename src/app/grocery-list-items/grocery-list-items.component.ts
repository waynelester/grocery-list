import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '../grocery-list.service';

@Component({
  selector: 'app-grocery-list-items',
  templateUrl: './grocery-list-items.component.html',
  styleUrls: ['./grocery-list-items.component.css']
})
export class GroceryListItemsComponent implements OnInit {

  constructor(private _grocerylist: GroceryListService) { }

  ngOnInit() {
    console.log(this._grocerylist)
  }

}
