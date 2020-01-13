import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocktailsPage } from './cocktails.page';

describe('CocktailsPage', () => {
  let component: CocktailsPage;
  let fixture: ComponentFixture<CocktailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
