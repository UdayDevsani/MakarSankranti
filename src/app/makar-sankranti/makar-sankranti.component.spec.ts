import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakarSankrantiComponent } from './makar-sankranti.component';

describe('MakarSankrantiComponent', () => {
  let component: MakarSankrantiComponent;
  let fixture: ComponentFixture<MakarSankrantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakarSankrantiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakarSankrantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
