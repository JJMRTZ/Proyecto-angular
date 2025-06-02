import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavComponent } from './barra-nav.component';

describe('BarraNavComponent', () => {
  let component: BarraNavComponent;
  let fixture: ComponentFixture<BarraNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
