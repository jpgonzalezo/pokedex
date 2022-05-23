import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPokedexComponent } from './inicio-pokedex.component';

describe('InicioPokedexComponent', () => {
  let component: InicioPokedexComponent;
  let fixture: ComponentFixture<InicioPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
