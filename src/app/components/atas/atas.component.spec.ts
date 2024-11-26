import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtasComponent } from './atas.component';

describe('AtasComponent', () => {
  let component: AtasComponent;
  let fixture: ComponentFixture<AtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
