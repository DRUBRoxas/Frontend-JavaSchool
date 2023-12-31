import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStationComponent } from './create-station.component';

describe('CreateStationComponent', () => {
  let component: CreateStationComponent;
  let fixture: ComponentFixture<CreateStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
