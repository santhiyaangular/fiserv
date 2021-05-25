import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomypicDetailComponent } from './astronomypic-detail.component';

describe('AstronomypicDetailComponent', () => {
  let component: AstronomypicDetailComponent;
  let fixture: ComponentFixture<AstronomypicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomypicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomypicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
