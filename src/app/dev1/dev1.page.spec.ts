import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dev1Page } from './dev1.page';

describe('Dev1Page', () => {
  let component: Dev1Page;
  let fixture: ComponentFixture<Dev1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dev1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dev1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
