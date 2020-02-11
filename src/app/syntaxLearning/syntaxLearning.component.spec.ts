import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxLearningComponent } from './syntaxLearning.component';

describe('BindingComponent', () => {
  let component: SyntaxLearningComponent;
  let fixture: ComponentFixture<SyntaxLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntaxLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
