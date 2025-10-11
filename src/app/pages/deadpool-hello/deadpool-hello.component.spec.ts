import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadpoolHelloComponent } from './deadpool-hello.component';

describe('DeadpoolHelloComponent', () => {
  let component: DeadpoolHelloComponent;
  let fixture: ComponentFixture<DeadpoolHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeadpoolHelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadpoolHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
