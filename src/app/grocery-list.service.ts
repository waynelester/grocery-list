import { Injectable } from '@angular/core';
import { mockList } from './mock-list';

@Injectable()
export class GroceryListService {
   getItem() {
       return mockList;
   }
  constructor() { }

}
