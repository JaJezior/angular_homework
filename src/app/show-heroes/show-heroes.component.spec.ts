import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeroesComponent } from './show-heroes.component';

describe('ShowHeroesComponent', () => {
  let component: ShowHeroesComponent;
  let fixture: ComponentFixture<ShowHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
