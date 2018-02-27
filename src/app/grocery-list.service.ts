import { Injectable } from '@angular/core';
import { mockList } from './mock-list';

@Injectable()
export class GroceryListService {
    groceries: string[];
   getItem() {
       return mockList;
   }

addGrocery(groceryToAdd){
  this.groceries.push(groceryToAdd)
}
  deleteGrocery(groceryToDelete) {

    this.groceries.splice(this.groceries.indexOf(groceryToDelete), 1);

  };
  constructor() { 
      console.log(mockList);
  }

}
