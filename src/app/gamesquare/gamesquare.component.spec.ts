import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesquareComponent } from './gamesquare.component';

describe('GamesquareComponent', () => {
  let component: GamesquareComponent;
  let fixture: ComponentFixture<GamesquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
