import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { GroceryListService } from '../grocery-list.service';

@Component({
  selector: 'app-grocery-input',
  templateUrl: './grocery-input.component.html',
  styleUrls: ['./grocery-input.component.css']
})
export class GroceryInputComponent implements OnInit {
currentGrocery: string;
  constructor(public _grocerylist: GroceryListService) { }

onAddGrocery(grocery){
    this._grocerylist.addGrocery(this.currentGrocery);
    this.currentGrocery = "";
}
// deleteGrocery = this._grocerylist.deleteGrocery();
  ngOnInit() {
   
  }

}
