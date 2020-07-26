import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGamelogComponent } from './show-gamelog.component';

describe('ShowGamelogComponent', () => {
  let component: ShowGamelogComponent;
  let fixture: ComponentFixture<ShowGamelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGamelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGamelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
