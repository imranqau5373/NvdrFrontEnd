import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvdrListComponent } from './nvdr-list.component';

describe('NvdrListComponent', () => {
  let component: NvdrListComponent;
  let fixture: ComponentFixture<NvdrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvdrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvdrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
