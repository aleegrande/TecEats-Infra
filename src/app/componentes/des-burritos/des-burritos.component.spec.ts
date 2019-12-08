import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesBurritosComponent } from './des-burritos.component';

describe('DesBurritosComponent', () => {
  let component: DesBurritosComponent;
  let fixture: ComponentFixture<DesBurritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesBurritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesBurritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
