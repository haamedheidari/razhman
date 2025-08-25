import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblogComponent } from './weblog.component';

describe('WeblogComponent', () => {
  let component: WeblogComponent;
  let fixture: ComponentFixture<WeblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
