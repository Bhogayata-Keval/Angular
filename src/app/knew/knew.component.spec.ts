import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnewComponent } from './knew.component';

describe('KnewComponent', () => {
  let component: KnewComponent;
  let fixture: ComponentFixture<KnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
