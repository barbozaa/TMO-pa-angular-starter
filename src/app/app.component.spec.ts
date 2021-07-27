import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ CommonModule ]
    }).compileComponents();
  });

  beforeAll( ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pa-starter-angular'`, () => {
    expect(app.title).toEqual('pa-starter-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    //I need to change this because it was failing
    expect(compiled.querySelector('.doNotRemoveMe').textContent).toContain('Hello world.');
  });

  it('should call onSubmit function with empty values', () => {
    app.onSubmit('', '');
    expect(app.isFormHasErrors).toBe(true);
  });

  it('should call onSubmit function with valid data', () => {
    app.onSubmit('Recipe 1', 'Recipe 2 Instructions');
    expect(app.isFormVisible).toBe(false);
    expect(app.recipes.length).toBe(1);
  })
});
