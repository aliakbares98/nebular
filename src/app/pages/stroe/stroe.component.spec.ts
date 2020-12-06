import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StroeComponent } from './stroe.component';

describe('StroeComponent', () => {
  let component: StroeComponent;
  let fixture: ComponentFixture<StroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
