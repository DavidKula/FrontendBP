import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingDisplayComponent } from './loading-display.component';

describe('LoadingDisplayComponent', () => {
  let component: LoadingDisplayComponent;
  let fixture: ComponentFixture<LoadingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingDisplayComponent ],
      imports: [MatProgressSpinnerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
