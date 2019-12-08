import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesDonasComponent } from './des-donas.component';

describe('DesDonasComponent', () => {
  let component: DesDonasComponent;
  let fixture: ComponentFixture<DesDonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesDonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesDonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
