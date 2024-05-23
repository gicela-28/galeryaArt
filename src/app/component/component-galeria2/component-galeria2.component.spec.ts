import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGaleria2Component } from './component-galeria2.component';

describe('ComponentGaleria2Component', () => {
  let component: ComponentGaleria2Component;
  let fixture: ComponentFixture<ComponentGaleria2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGaleria2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentGaleria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
