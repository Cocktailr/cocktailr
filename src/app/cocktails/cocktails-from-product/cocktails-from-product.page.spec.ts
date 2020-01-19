import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocktailsFromProductPage } from './cocktails-from-product.page';

describe('CocktailsFromProductPage', () => {
  let component: CocktailsFromProductPage;
  let fixture: ComponentFixture<CocktailsFromProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailsFromProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailsFromProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
