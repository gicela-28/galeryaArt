import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGaleria1Component } from './component-galeria1.component';

describe('ComponentGaleria1Component', () => {
  let component: ComponentGaleria1Component;
  let fixture: ComponentFixture<ComponentGaleria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGaleria1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentGaleria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
