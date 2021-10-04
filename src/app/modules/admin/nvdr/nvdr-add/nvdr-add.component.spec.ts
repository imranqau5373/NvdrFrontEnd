import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvdrAddComponent } from './nvdr-add.component';

describe('NvdrAddComponent', () => {
  let component: NvdrAddComponent;
  let fixture: ComponentFixture<NvdrAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvdrAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvdrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
