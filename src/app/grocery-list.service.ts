import { Injectable } from '@angular/core';
import { mockList } from './mock-list';

@Injectable()
export class GroceryListService {
    groceries: string[] = ["bananas", "cucumbers", "strawberries"];
//   getItem() {
//       return mockList;
//   }

addGrocery(groceryToAdd){
    console.log(groceryToAdd, "From Grocery List Service");
  this.groceries.push(groceryToAdd);
 
}
//   deleteGrocery(groceryToDelete) {

//     this.groceries.splice(this.groceries.indexOf(groceryToDelete), 1);

//   }
  constructor() { 
      console.log(mockList);
  }

}
