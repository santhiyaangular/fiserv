import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomypicListComponent } from './astronomypic-list.component';

describe('AstronomypicListComponent', () => {
  let component: AstronomypicListComponent;
  let fixture: ComponentFixture<AstronomypicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomypicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomypicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
