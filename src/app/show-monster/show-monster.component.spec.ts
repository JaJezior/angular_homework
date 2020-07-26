import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMonsterComponent } from './show-monster.component';

describe('ShowMonsterComponent', () => {
  let component: ShowMonsterComponent;
  let fixture: ComponentFixture<ShowMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
