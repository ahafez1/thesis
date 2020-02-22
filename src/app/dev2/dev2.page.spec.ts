import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dev2Page } from './dev2.page';

describe('Dev2Page', () => {
  let component: Dev2Page;
  let fixture: ComponentFixture<Dev2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dev2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dev2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
