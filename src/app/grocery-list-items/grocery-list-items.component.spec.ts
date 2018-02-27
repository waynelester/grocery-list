import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListItemsComponent } from './grocery-list-items.component';

describe('GroceryListItemsComponent', () => {
  let component: GroceryListItemsComponent;
  let fixture: ComponentFixture<GroceryListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
