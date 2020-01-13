import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CocktailPage } from './cocktail.page';

describe('CocktailPage', () => {
  let component: CocktailPage;
  let fixture: ComponentFixture<CocktailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
