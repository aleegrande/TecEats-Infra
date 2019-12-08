import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesTortasComponent } from './des-tortas.component';

describe('DesTortasComponent', () => {
  let component: DesTortasComponent;
  let fixture: ComponentFixture<DesTortasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesTortasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesTortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
