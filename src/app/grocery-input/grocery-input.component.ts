import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-grocery-input',
  templateUrl: './grocery-input.component.html',
  styleUrls: ['./grocery-input.component.css']
})
export class GroceryInputComponent implements OnInit {

 // constructor(private _grocerylist: GroceryListService) { }
constructor() { }
addGrocery = this._grocerylist.addGrocery();
deleteGrocery = this._grocerylist.deleteGrocery();
  ngOnInit() {
  }

}
