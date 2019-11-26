import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YanglaoComponent } from './yanglao.component';

describe('YanglaoComponent', () => {
  let component: YanglaoComponent;
  let fixture: ComponentFixture<YanglaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YanglaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YanglaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
