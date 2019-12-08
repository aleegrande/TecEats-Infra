import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesAguasComponent } from './des-aguas.component';

describe('DesAguasComponent', () => {
  let component: DesAguasComponent;
  let fixture: ComponentFixture<DesAguasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesAguasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesAguasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
