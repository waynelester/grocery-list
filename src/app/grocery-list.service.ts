import { Injectable } from '@angular/core';
import { mockList } from './mock-list';

@Injectable()
export class GroceryListService {
    name: string = "Wayne";
   getItem() {
       return mockList;
   }
  constructor() { 
      console.log(mockList);
  }

}
