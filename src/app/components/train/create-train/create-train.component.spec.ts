import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainComponent } from './create-train.component';

describe('CreateTrainComponent', () => {
  let component: CreateTrainComponent;
  let fixture: ComponentFixture<CreateTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
