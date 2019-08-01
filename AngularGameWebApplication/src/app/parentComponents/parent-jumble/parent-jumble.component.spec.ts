import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentJumbleComponent } from './parent-jumble.component';

describe('ParentJumbleComponent', () => {
  let component: ParentJumbleComponent;
  let fixture: ComponentFixture<ParentJumbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentJumbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentJumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
