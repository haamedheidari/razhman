import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDisComponent } from './item-dis.component';

describe('ItemDisComponent', () => {
  let component: ItemDisComponent;
  let fixture: ComponentFixture<ItemDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
