import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultEmailListComponent } from './fault-email-list.component';

describe('FaultEmailListComponent', () => {
  let component: FaultEmailListComponent;
  let fixture: ComponentFixture<FaultEmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultEmailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultEmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
