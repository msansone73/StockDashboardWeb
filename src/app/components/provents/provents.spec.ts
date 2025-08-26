import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provents } from './provents';

describe('Provents', () => {
  let component: Provents;
  let fixture: ComponentFixture<Provents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Provents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
