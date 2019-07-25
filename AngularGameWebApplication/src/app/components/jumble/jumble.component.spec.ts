import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbleComponent } from './jumble.component';

describe('JumbleComponent', () => {
  let component: JumbleComponent;
  let fixture: ComponentFixture<JumbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
