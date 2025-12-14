import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProjects } from './pending-projects';

describe('PendingProjects', () => {
  let component: PendingProjects;
  let fixture: ComponentFixture<PendingProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
